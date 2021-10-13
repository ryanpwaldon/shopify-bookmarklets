class Bookmarklet {
  constructor() {
    this.start()
  }

  async start() {
    // const cartButtons = Array.from(document.querySelectorAll('[href$="/cart"]'))
    // for (const cartButton of cartButtons) {
    //   const cartButtonClone = cartButton.cloneNode(true)
    //   cartButton.replaceWith(cartButtonClone)
    // }
    const cartButton = document.querySelector('href$="#cart-dropdown"') as Element
    cartButton.setAttribute('href', '/cart')
    const cartButtonClone = cartButton.cloneNode(true)
    cartButton.replaceWith(cartButtonClone)
    const script = document.createElement('script')
    script.src = 'https://localhost:8080/start.js'
    document.head.appendChild(script)
  }
}

new Bookmarklet()
