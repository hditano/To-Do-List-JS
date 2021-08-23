const addBtn = document.querySelector('.add-btn');
const textInput = document.querySelector('.text-input');
const containerList = document.querySelector('.container');
const checkBox = document.querySelector('#item-checkbox');
const delImg = document.querySelector('.del-img');
let list = ['Test 2', 'Papa'];

addBtn.addEventListener('click', function () {
    list.push(textInput.value);
    createTodoList();
    textInput.value = '';
})

checkBox.addEventListener('click', function (e) {
    console.log('checkbox clicked');
    console.log(e.target.value);

})


// delImg.addEventListener('click', function(e){
//     console.log(e.target.previousSibling.previousSibling.textContent);
// })


    
containerList.addEventListener('click', function(e) {
    if(e.target.classList.contains('del-img')) {
        list.splice(e.target.previousSibling.dataset, 1);
    }
})



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
    check.classList.add('checkbox-btn');

    containerList.appendChild(div);

    div.appendChild(check);
    div.appendChild(p);
    div.appendChild(delImg);
    for (let i = 0; i < list.length; i++) {
        p.textContent = list[i];
        p.dataset.id = `${i}`;
    }
}

createTodoList();