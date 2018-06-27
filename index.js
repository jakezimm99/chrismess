
class App {
    constructor() {
        const form = document.querySelector('form')
        form.addEventListener('submit', (ev) => {
            ev.preventDefault()
            this.handleSubmit(ev)
        })
        }

        
        handleSubmit(ev) {
            const f = ev.target
            const flickObject = {
                flick: f.flickName.value,
                name: f.Chris.value
            }
            const list = document.querySelector('#flicks')
            const item = this.renderItem(flickObject)
            list.appendChild(item)
            f.reset()
            f.flickName.focus()
        }
        renderItem(flick) {
            let item = document.createElement('li')
            item.classList.add('flick')
            
            const properties = Object.keys(flick)
            
            properties.forEach((propertyName) => {
                const span = this.renderProperty(propertyName, flick[propertyName])
                item.appendChild(span)
            })
            return item
        }
        renderProperty(name, value) {
            const span = document.createElement('span')
            span.classList.add(name)
            span.textContent = value
            return span
        }
        
    } 
const application = new App()