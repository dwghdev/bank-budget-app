class MyHTML {
  constructor({ tag = 'div', className = '', id = '', text = '', inner = '', }) {
    this.html = document.createElement(tag)
    this.html.textContent = text

    this.html.innerHTML = 
      Array.isArray(inner) 
        ? inner.join('') 
        : inner

    if (id.trim() !== '') 
      this.html.id = id
    if (className.trim() !== '')
      this.html.className = className
  }

  attr(attr, value) {
    this.html.setAtrribute(attr, value)
  }

  get hmtl() { return this.html }
  get string() { return this.html.outerHTML }
}
  
export default MyHTML
