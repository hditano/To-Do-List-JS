const addBtn = document.querySelector('.add-btn');
const textInput = document.querySelector('.text-input');
const containerList = document.querySelector('.container');
const listContainer = document.querySelector('.list-container');
const checkBox = document.querySelector('#item-checkbox');
const delImg = document.querySelector('.del-img');
let list = ['Bread', 'Water'];
let colors = ['red', 'orange', 'yellow', 'light blue'];

createTodoList();

addBtn.addEventListener('click', function () {
    list.push(textInput.value);
    createTodoList();
    textInput.value = '';
})


    
containerList.addEventListener('click', function(e) {
    if(e.target.classList.contains('del-img')) {
        console.log(e.target.previousSibling.textContent);
        const index = list.indexOf(e.target.previousSibling.textContent);
        if(index > -1){
            list.splice(index, 1);
        }
    removeChildNodes(containerList);
    createTodoList();
    }
})

function removeChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function backgroundColor() {
    const random = Math.floor(Math.random() * colors.length);
    return colors[random];
}


function createTodoList() {
    const div = document.createElement('div')
    div.classList.add('list-container');
    const p = document.createElement('p');
    const check = document.createElement('input');
    const delImg = document.createElement('img');
    check.type = 'checkbox';
    check.name = 'checkbox';
    check.id = 'item-checkbox';
    delImg.src = '/images/delete.png';
    delImg.classList.add('del-img');
    p.classList.add('list-p');
    backgroundColor();
    check.classList.add('checkbox-btn');
    containerList.appendChild(div);
    p.style.backgroundColor = backgroundColor();
    div.appendChild(check);
    div.appendChild(p);
    div.appendChild(delImg);
    for (let i = 0; i < list.length; i++) {
        p.textContent = list[i];
    }
}
