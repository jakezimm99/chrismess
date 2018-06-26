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
    const flicksDiv = document.querySelector('#flicks')
    flicksDiv.innerHTML += `<p>${f.flickName.value}</p>`
    f.flickName.value = ''
}


form.addEventListener('submit', change)