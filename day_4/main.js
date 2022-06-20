"use strict"

const text = document.getElementById('p')
const links = document.querySelectorAll('.link')

text.addEventListener('mousemove', (e) => {
    console.log(e.target.nodeName)
    if (e.target.className == "link") {
        links.forEach(linkElement => {
            if (linkElement.innerText == e.target.innerText) linkElement.classList.add('link-active')
        })
    }
    if (e.target.id == 'p') {
        links.forEach(linkElement => linkElement.classList.remove('link-active'))
    }
})

text.addEventListener('mouseleave', (e) => {
    links.forEach(linkElement => linkElement.classList.remove('link-active'))
})
