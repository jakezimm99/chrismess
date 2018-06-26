const button = document.querySelector('#change')
const changeText = function() {
    const heading = document.querySelector('#exciting')
    heading.textContent = "Bunch of Chrismesses"
}
button.addEventListener('click', changeText)

const form = document.querySelector('form')

const addtoList = function(ev) {
    ev.preventDefault()
    const f = ev.target
    const word = f.flickName.value
    const list = document.querySelector('#flicks')
    const listItem = createListItem(word)
    addListItem(list, listItem)
    f.reset()
}
function createListItem(wording) {
    let item = document.createElement('li')
    item.textContent = wording
    return item
}

function addListItem(list, item) {
    list.appendChild(item)
}


form.addEventListener('submit', addtoList)