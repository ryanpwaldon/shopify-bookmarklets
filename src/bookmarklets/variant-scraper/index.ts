import { ProductResponse } from '../../types/ProductResponse'
import { Variant } from '../../types/Variant'
import { parse } from 'json2csv'

class Scrape {
  productUrl: string

  constructor(productUrl: string) {
    this.productUrl = productUrl
    this.start()
  }

  async start() {
    const json = await this.fetchJson()
    const variants = this.extractVariants(json)
    const csv = this.toCsv(variants)
    this.download(csv)
  }

  async fetchJson(): Promise<ProductResponse> {
    return (await fetch(this.productUrl)).json()
  }

  extractVariants(json: ProductResponse): Variant[] {
    const options = json.options.map((option) => option.name)
    const variants = json.variants.map(
      (variant) =>
        ({
          Handle: json.handle,
          Published: true,
          Status: 'active',
          Tags: json.tags.join(','),
          Title: json.title,
          Type: json.type,
          Vendor: json.vendor,
          'Body (HTML)': json.description,
          'Image Src': `https:${json.featured_image}`,
          'Image Position': 1,
          'Option1 Name': options[0] || '',
          'Option1 Value': variant.option1 || '',
          'Option2 Name': options[1] || '',
          'Option2 Value': variant.option2 || '',
          'Option3 Name': options[2] || '',
          'Option3 Value': variant.option3 || '',
          'Variant Image': variant.featured_image?.src || `https:${json.featured_image}`,
          'Variant Price': variant.price / 100,
          'Variant Requires Shipping': variant.requires_shipping,
          'Variant Compare At Price': variant.compare_at_price / 100,
          'Variant Inventory Qty': 2
        } as Variant)
    )
    return variants
  }

  toCsv(data: Array<any>) {
    return parse(data)
  }

  download(csv: string) {
    const dataUri = `data:text/csv;charset=utf-8,${csv}`
    const encodedUri = encodeURI(dataUri)
    const link = document.createElement('a')
    link.setAttribute('href', encodedUri)
    link.setAttribute('download', 'variants.csv')
    document.body.appendChild(link)
    link.click()
  }
}

const productUrl = `${window.location.origin}${window.location.pathname}.js`
new Scrape(productUrl)
