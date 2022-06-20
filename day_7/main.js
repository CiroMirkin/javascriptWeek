"use strict"
const video = document.getElementById('video')
const speed = document.getElementById('speed')
const speedBar = document.querySelector('.speed-bar')

speed.addEventListener('mousemove', (e) => {
    // e.preventDefault()
    const minSpeed = 0.4;
    const maxSpeed = 25;

    const y = e.pageX - speed.offsetLeft
    const percent = Math.round((y / speed.offsetWidth) * 100)

    speedBar.style.width = `${percent}%`
    speedBar.innerText = `${percent}%`

    console.log(Math.round(percent / (maxSpeed - minSpeed)))
    video.playbackRate = percent / (maxSpeed - minSpeed) - minSpeed
})