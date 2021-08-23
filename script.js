const addBtn = document.querySelector('.add-btn');
const textInput = document.querySelector('.text-input');
const containerList = document.querySelector('.container');
let list = [];

addBtn.addEventListener('click', function () {
    list.push(textInput.value);
    renderTodoList();
})

function renderTodoList() {
    const div = document.createElement('div')
    div.classList.add('list-container');
    const p = document.createElement('p');
    const check = document.createElement('input');
    check.type = 'checkbox';
    check.name = 'checkbox';
    p.classList.add('list-p');
    check.classList.add('checkbox-btn');
    containerList.appendChild(div);
    div.appendChild(check);
    div.appendChild(p);
    for (let i = 0; i < list.length; i++) {
        p.textContent = list[i];
    }
}