const list = document.getElementById('list') 

list.addEventListener('click', e =>{
    console.log(e.target.id)
    if(e.target.id == 'checkbox'){
        const text = e.path[1].children[1]
        text.classList.toggle('line-through')
        // const text = document.getElementById('item-text')
        // text.innerHTML += `<del>${text.textContent}</del>`
    }
    // console.log(e.path[1].children[1])
})