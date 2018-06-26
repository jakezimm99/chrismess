const button = document.querySelector('#change')
const changeText = function() {
    const heading = document.querySelector('#exciting')
    heading.textContent = "Bunch of Chrismesses"
}
button.addEventListener('click', changeText)

const form = document.querySelector('form')

const change = function(ev) {
    ev.preventDefault()
    const f = ev.target
    const list = document.querySelector('#flicks')
    let item = document.createElement('li')
    item.textContent = f.flickName.value
    list.appendChild(item)
    f.reset()
}


form.addEventListener('submit', change)