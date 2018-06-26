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
    list.innerHTML += `<li>${f.flickName.value}</li>`
    f.flickName.value = ''
}


form.addEventListener('submit', change)