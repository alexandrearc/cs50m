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
  var li = document.createElement('li');
  li.className = classNames.TODO_ITEM;
  li.appendChild(createCheckbox());
  li.appendChild(createItem());
  li.appendChild(createDelete());
  list.appendChild(li);

  incrementCount();
  incrementUnCheckCount();
}

function incrementCount() {
  count++;
  itemCountSpan.textContent=count;
}

function decrementCount() {
  count--;
  itemCountSpan.textContent=count;
}

function incrementUnCheckCount() {
  uncheckedCount++;
  uncheckedCountSpan.textContent=uncheckedCount;
}

function decrementUncheckCount() {
  uncheckedCount--;
  uncheckedCountSpan.textContent=uncheckedCount;
}

function createItem(){
  var item = document.createElement('input');  
  item.setAttribute('type', 'text')
  item.className = classNames.TODO_TEXT;
  item.placeholder = '"New Todo"'
  return item;
}

function createCheckbox() {
  var checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = 'todoitem_' + count;
  checkbox.className = classNames.TODO_CHECKBOX;
  checkbox.onclick = function() {
    if (this.checked === true) {
      decrementUncheckCount();
    } else {
      incrementUnCheckCount();
    }
  };
  return checkbox;
}

function createDelete(){
  var span = document.createElement('span');
  var x = document.createTextNode("\u00D7");
  span.className = classNames.TODO_DELETE;
  span.onclick = function () {
    var li = this.parentElement;
    li.remove();
    decrementCount();
    decrementUncheckCount();
  }
  span.appendChild(x);
  return span;
}

