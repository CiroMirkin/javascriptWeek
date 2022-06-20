"use strict"

const video = document.getElementById('video')

const progress = document.getElementById('progress')
const playBtn = document.getElementById('play')
const volume = document.getElementById('volume')
const playbackRate = document.getElementById('playbackRate')
// <<10 and 25>>
const m10 = document.getElementById('10')
const m25 = document.getElementById('25')

video.addEventListener('timeupdate', () => {
    progress.style.flexBasis = `${(video.currentTime / video.duration) * 100}%`
})

/** Play and pause the video  */
const playAndPause = () => {
    video.paused ? (
        video.play(), playBtn.innerText = '❚ ❚'
    ) : (
        video.pause(), playBtn.innerText = '►'
    )
}
playBtn.addEventListener('click', () => playAndPause())
video.addEventListener('click', () => playAndPause())

volume.addEventListener('change', () => video.volume = '0.' + volume.value)
playbackRate.addEventListener('change', () => video.playbackRate = playbackRate.value)

m10.addEventListener('click', () => video.currentTime += -10)
m25.addEventListener('click', () => {
    if (video.currentTime <= video.duration) video.currentTime += 25
})