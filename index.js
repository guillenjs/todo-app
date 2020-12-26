let list = document.querySelector('.todo-items')
let circle = document.querySelector('.circle')
let header = document.querySelector('.header')
let nightmodeIcon = document.querySelector('.night-mode')

let body  = document.querySelector('body')
let entry = document.querySelector('.entry')


let currentIcon = '<path fill="#FFF" fill-rule="evenodd" d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"/>'
    nightmodeIcon.innerHTML = currentIcon
    
let nightmode = false

const renderListItems = (items) => {
    

    for(let i = 0; i < items.length; i++){
        let item = document.createElement('div')
        let button = document.createElement('button')
            
        let text = document.createElement('div')
            text.innerText = items[i]
            className = 'text'
           
             button.className = 'circle'

            item.className = `item`
            item.id = i
            
  
        
            item.append(button, text)
            list.append(item)
    }
}

renderListItems(['item1', 'item1', 'item1', 'item1', 'item1' ,'item1'])

nightmodeIcon.addEventListener('click', (evt) => {
    console.log('hello')
    let list = document.querySelector('.todo-items')

    if(nightmode === false ){
        nightmodeIcon.innerHTML = '<path fill="#FFF" fill-rule="evenodd" d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"/>'
        nightmode = true
    }
    else{
        nightmodeIcon.innerHTML = currentIcon
        nightmode = false
    }

    list.classList.toggle('dark-mode-list')
    body.classList.toggle('dark-mode')
})