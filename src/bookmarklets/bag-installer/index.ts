class Bookmarklet {
  constructor() {
    this.start()
  }

  async start() {
    const script = document.createElement('script')
    script.src = 'https://bag-plugin-production.netlify.app/start.js'
    document.head.appendChild(script)
  }
}

new Bookmarklet()
