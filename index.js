const button = document.querySelector('#change')
const changeText = function() {
    const heading = document.querySelector('#exciting')
    heading.textContent = "Bunch of Chrismesses"
}
button.addEventListener('click', changeText)

const submit = document.querySelector('#submit')

function changer() {
    const form = document.querySelector('form')
    const text = document.querySelector('#input').value
    if(text == '') {
            alert("enter value to change header!")
            return false;
    }
    const origHeading = document.querySelector('#exciting')
    origHeading.textContent = text
}

submit.addEventListener('click', changer)
