class App {
    constructor() {
        const form = document.querySelector('form')
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
            const list = document.querySelector('#flicks')
            const item = this.renderItem(flickObject)
            list.appendChild(item)
            this.allFlicks.push(item)
            console.log(this.allFlicks)
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
            item.appendChild(deleter)
            deleter.id = item.id
            deleter.addEventListener('click', (ev) => {
                ev.preventDefault()
                const unordered = document.getElementById('flicks')
                const nested = document.getElementById(`${item.id}`)
                unordered.removeChild(nested)
                for(let i=0;i < this.allFlicks.length; i++) {
                        if(this.allFlicks[i] == item) {
                            this.allFlicks.splice(i, 1)
                        }
                }
                console.log(this.allFlicks)
                
            })
            return item
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
        
    } 
const application = new App()