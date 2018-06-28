class App {
    constructor() {
        const form = document.querySelector('form')
        this.list = document.querySelector('#flicks')
        form.addEventListener('submit', (ev) => {
            ev.preventDefault()
            this.handleSubmit(ev)
        })
        this.allFlicks  = []
    }

        
        handleSubmit(ev) {
            const f = ev.target
            const flickObject = {
                flick: f.flickName.value,
                name: f.Chris.value,
                favorite: false,
            }
            this.allFlicks.push(flickObject)
            const item = this.renderItem(flickObject)
            this.list.appendChild(item)
            f.reset()
            f.flickName.focus()
        }
        renderItem(flick) {
            const item = document.createElement('li')
            item.classList.add('flick')
            
            const properties = Object.keys(flick)
            
            properties.forEach((propertyName) => {
                const span = this.renderProperty(propertyName, flick[propertyName])
                item.appendChild(span)
            })

            const deleter = this.addDeleteButton()
            deleter.addEventListener('click', (_ev) =>  this.removeFlick(flick, item))
            item.appendChild(deleter)

            const favorite = document.createElement('button')
            favorite.textContent = 'favorite'
            favorite.addEventListener('click', (_ev) => this.toggleFavorite(flick, item))


            item.appendChild(favorite)
            
            return item
        }

        removeFlick(flick, item) {
            this.list.removeChild(item)

            const i = this.allFlicks.indexOf(flick)
            this.allFlicks.splice(i, 1)
        }
        renderProperty(name, value) {
            if(name === 'favorite') {
                return document.createElement('span')
            }
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

        toggleFavorite(flick, item) {
                flick.favorite = item.classList.toggle('fav')
        }
        
    } 
const application = new App()