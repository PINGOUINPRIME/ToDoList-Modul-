const toDoInput = document.querySelector('#todo-input');
const toDoBtn = document.querySelector('#todo-btn');
const toDoResult = document.querySelector('#todo-result');
const toDoTotal = document.querySelector('#todo-total');
let toDoIndex = 0;

toDoBtn.addEventListener('click', (e) => {
    //toDoResult.innerHTML += `<li>${toDoInput.value}</li>`;
    if (toDoInput.value === '') return;
    toDoCreateDeliteElements(toDoInput.value);
    toDoInput.value = '';
})

function toDoCreateDeliteElements(value){
    toDoIndex++;
    const toDoLi = document.createElement('li');
    toDoLi.className = 'todo-li';
    toDoLi.textContent = value;

    const toDoBtn = document.createElement('button');
    toDoBtn.className = 'todo-btn';
    toDoBtn.textContent = 'DEL';
    toDoLi.appendChild(toDoBtn);

    toDoBtn.addEventListener('click', (e) => {
        toDoIndex--;
        toDoTotal.textContent = toDoIndex;
        toDoResult.removeChild(toDoLi);
    })
    toDoLi.addEventListener('click', (e) => {
        toDoLi.classList.toggle('active');
    })

    toDoTotal.textContent = toDoIndex;
    toDoResult.appendChild(toDoLi);
    
}
