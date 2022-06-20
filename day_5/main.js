"use strict"
const nav = document.getElementById('nav')
const header = document.getElementById('header')

const verifuVisibility = (entries) => {
    // console.log(entries)
    const nav = entries[0]
    entries.forEach(entry => {
        if (entry.target.id === 'nav' && !entry.isIntersecting) {
            // console.log('No esta', entry.target.id)
            document.body.classList.add('fixed-nav')
        } else if (entry.target.id ===  'header' && entry.isIntersecting) {
            // console.log('si esta', entry.target.id)
            document.body.classList.remove('fixed-nav')
        }
    })
}

const observer = new IntersectionObserver(verifuVisibility)
observer.observe(nav)
observer.observe(header)