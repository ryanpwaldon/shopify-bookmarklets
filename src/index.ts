import { Product } from 'src/types/product'

class Scraper {
  url: string

  constructor(url: string) {
    this.url = url
  }

  async scrape() {
    const json: Product = await this.getJson()
    console.log(json)
  }

  async getJson() {
    return (await fetch(this.url)).json()
  }
}

const scraper = new Scraper(`${window.location.origin}${window.location.pathname}.js`)
scraper.scrape()
