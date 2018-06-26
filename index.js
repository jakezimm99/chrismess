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
    const flick = f.flickName.value
    const year = f.year.value
    const list = document.querySelector('#flicks')
    const item = createSpanItem(flick, year)
    addListItem(list, item)
    f.reset()
}
function createListItem(firstSpan, secondSpan) {
    let item = document.createElement('li')
    item.innerHTML = firstSpan + ' ' + secondSpan
    return item
}

function createSpanItem(oneFlick, theYear) {
        let flickSpan = "<span class = \"Flicky\">" + oneFlick + "</span>"
        let yearSpan = "<span class = \"yearFilmed\">" + theYear + "</span>"
        return createListItem(flickSpan, yearSpan)
        
}

function addListItem(list, item) {
    list.appendChild(item)
}


form.addEventListener('submit', addtoList)