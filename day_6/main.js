"use strict"

const listItems = document.getElementById('items')
let isDown = false
let start = 0, scrollLeft
let scrollSize = 10

listItems.addEventListener('mousedown', (e) => {
    listItems.classList.add('active')
    isDown = true
    start = e.pageX - listItems.offsetLeft
    scrollLeft = listItems.scrollLeft
    // console.log("start: ", start, "scrollLeft: ", scrollLeft)
})
listItems.addEventListener('mouseup', (e) => {
    isDown = false
    listItems.classList.remove('active')
})

listItems.addEventListener('mousemove', (e) => {
    if (isDown) {
        // listItems.scrollLeft = scrollSize
        // scrollSize += 20
        e.preventDefault()
        const now = e.pageX - listItems.offsetLeft
        const moveTo = now - start
        listItems.scrollLeft = scrollLeft - moveTo
    }
})
