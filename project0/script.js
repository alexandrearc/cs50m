const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let count = 0;
let uncheckedCount = 0;

function newTodo() {
  var nodeLi = document.createElement('li');

  var inputCheckbox = document.createElement('input');
  inputCheckbox.type = 'checkbox';
  inputCheckbox.id = 'todoitem_' + count;
  inputCheckbox.onclick = function() {
    if (this.checked === true) {
      decrementUncheckCount()
    } else {
      incrementUnCheckCount();
    }
  };
  nodeLi.appendChild(inputCheckbox);

  var text = document.createTextNode('New Todo');
  nodeLi.appendChild(text);
  list.appendChild(nodeLi);
  incrementCount();
  incrementUnCheckCount();
}

function incrementCount() {
  count++
  itemCountSpan.textContent=count;
}

function incrementUnCheckCount(){
  uncheckedCount++
  uncheckedCountSpan.textContent=uncheckedCount;
}

function decrementUncheckCount(){
  uncheckedCount--;
  uncheckedCountSpan.textContent=uncheckedCount;
}

