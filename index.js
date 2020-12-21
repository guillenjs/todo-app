let list = document.querySelector('.todo-items')
let circle = document.querySelector('.circle')

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