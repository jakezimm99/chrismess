const button = document.querySelector('button')
const changeText = function() {
    const heading = document.querySelector('#exciting')
    heading.textContent = "Bunch of Chrismesses"
}

button.addEventListener('click', changeText)