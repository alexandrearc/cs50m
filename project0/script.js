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
  var item = document.createElement('input');  
  item.setAttribute('type', 'text')
  item.setAttribute('value', 'New Todo')

  li.appendChild(createCheckbox());
  li.appendChild(item);
  li.appendChild(createClose());
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

function createCheckbox() {
  var checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = 'todoitem_' + count;
  checkbox.onclick = function() {
    if (this.checked === true) {
      decrementUncheckCount();
    } else {
      incrementUnCheckCount();
    }
  };
  return checkbox;
}

function createClose(){
  var span = document.createElement('span');
  var x = document.createTextNode("\u00D7");
  span.className = "close";
  span.onclick = function () {
    var li = this.parentElement;
    li.remove();
    decrementCount();
    decrementUncheckCount();
  }
  span.appendChild(x);
  return span;
}

