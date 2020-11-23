import { ProductResponse } from '../../types/ProductResponse'

class Bookmarklet {
  productUrl: string = `${window.location.origin}${window.location.pathname}.js`

  constructor() {
    this.start()
  }

  async start() {
    const json = await this.fetchJson()
    console.log(json)
  }

  async fetchJson(): Promise<ProductResponse> {
    return (await fetch(this.productUrl)).json()
  }
}

new Bookmarklet()
