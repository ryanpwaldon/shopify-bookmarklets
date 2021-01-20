class Bookmarklet {
  constructor() {
    this.start()
  }

  async start() {
    document.documentElement.style.overflow = 'auto !important'
    ;(document.querySelector('.PageOverlay') as HTMLElement).style.display = 'none !important'
    ;(document.querySelector('#sidebar-cart') as HTMLElement).style.display = 'none !important'
    const script = document.createElement('script')
    script.src = 'https://r2.au.ngrok.io/script.js'
    document.head.appendChild(script)
  }
}

new Bookmarklet()
