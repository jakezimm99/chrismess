class App {
    constructor() {
        const form = document.querySelector('form')
        this.list = document.querySelector('#flicks')
        form.addEventListener('submit', (ev) => {
            ev.preventDefault()
            this.handleSubmit(ev)
        })
        this.allFlicks  = []
        this.counter = 0
    }

        
        handleSubmit(ev) {
            const f = ev.target
            const flickObject = {
                flick: f.flickName.value,
                name: f.Chris.value
            }
            this.allFlicks.push(flickObject)
            const item = this.renderItem(flickObject)
            this.list.appendChild(item)
            f.reset()
            f.flickName.focus()
        }
        renderItem(flick) {
            this.counter++
            const item = document.createElement('li')
            item.id = this.counter
            
            const properties = Object.keys(flick)
            
            properties.forEach((propertyName) => {
                const span = this.renderProperty(propertyName, flick[propertyName])
                item.appendChild(span)
            })
            const deleter = this.addDeleteButton()
            deleter.id = item.id
            deleter.addEventListener('click', (_ev) =>  this.removeFlick(item))
            item.appendChild(deleter)
            const favorite = this.addFavoriteButton()
            item.appendChild(favorite)
            
            return item
        }

        removeFlick(item) {
            this.list.removeChild(item)
        }
        renderProperty(name, value) {
            const span = document.createElement('span')
            span.classList.add(name)
            span.textContent = value
            
            return span
        }

        addDeleteButton() {
            const remove = document.createElement('button')
            remove.textContent = 'Delete Entry'
            return remove
        }

        addFavoriteButton() {
            const fav = document.createElement('input')
            fav.setAttribute('type', 'checkbox')
            return fav

        }
        
    } 
const application = new App()