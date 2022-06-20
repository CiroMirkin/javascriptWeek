"use strict"
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const dif = canvas.getBoundingClientRect() //Propiedades

//Canvas size
canvas.width = window.innerWidth -4
canvas.height = window.innerHeight -4
//Line style
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

//Styles vars
const colors = ['#001e1d','#e8e4e6','#f9bc60','#abd1c6','#e16162','#004643', '#abd1c6', '#f9bc60', '#001e1d']
let lineWith = '5', lineColor = '#000'
/**
 * This mark if increment or decrement the line with.
 * @type {String}
 */
let op = 's'

//Draw vars
let difX, difY
let drawing = false

canvas.addEventListener('mousedown', (e) => {
    difX = e.clientX - dif.left
    difY = e.clientY - dif.top

    drawing = true
    ctx.beginPath() //Inicia el recorrido
})
/**
 * Aument and decrement the line With.
 */
const aumentLineWidth = () => {
    lineWith = Number(lineWith)
    if(op === 's') lineWith += 5
    else if(op === 'r') lineWith -= 5
    lineWith = lineWith + ''
}
/**
 * Update the color.
 */
const changeColor = () =>{
    // lineColor `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, '0')}`
    const color = Math.floor(Math.random() * colors.length)  
    lineColor = colors[color]
} 
canvas.addEventListener('mousemove', (e) => {
    if (drawing) {
        draw(difX, difY, e.clientX - dif.left, e.clientY - dif.top)
        difX = e.clientX - difX.left
        difY = e.clientY - difY.top

        aumentLineWidth()
        changeColor()
        ctx.beginPath()
        draw(difX, difY, e.clientX - dif.left, e.clientY - dif.top)
        // difX = e.clientX - difX
        // difY = e.clientY - difY
    }
    if(lineWith >= 100) op = 'r'
    else if(lineWith <= 6) op = 's'
    // console.log(lineWith)
})
canvas.addEventListener('mouseup', (e) => {
    ctx.closePath()
    drawing = false
})
/**
 * Drawing one line.
 * @param {Number} x 
 * @param {Number} y 
 * @param {Number} actX 
 * @param {number} actY 
 */
const draw = (x, y, actX, actY) => {
    ctx.strokeStyle = lineColor
    ctx.lineWidth = lineWith

    ctx.moveTo(x, y)
    ctx.lineTo(actX, actY)

    ctx.stroke() //Crea la linea
}