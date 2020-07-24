var list = document.getElementById("list");
document.getElementById("addbtn").disabled = true;

function emptyvalue() {
    var inputvalue = document.getElementById("todoItem")
    if (inputvalue !== null) {
        document.getElementById("addbtn").disabled = false;
    }
}

function AddItem() {
    var todoitem = document.getElementById("todoItem")

    // create list item
    var li = document.createElement("li")
    var litext = document.createTextNode(todoitem.value)
    li.appendChild(litext)

    // create edit button
    var editBtn = document.createElement("button")
    var editText = document.createTextNode("Edit")
    editBtn.setAttribute("class", "btn btn-light libtn")
    editBtn.setAttribute("onclick", "editItem(this)")
    editBtn.appendChild(editText)

    // create delete button
    var delBtn = document.createElement("button")
    delBtn.setAttribute("class", "deleteBtn")
    var delText = document.createTextNode("Delete")
    delBtn.setAttribute("class", "btn btn-light libtn")
    delBtn.setAttribute("onclick", "DeleteItem(this)")
    delBtn.appendChild(delText)


    li.appendChild(editBtn)
    li.appendChild(delBtn)
    list.appendChild(li)

    todoitem.value = ""
}

function DeleteItem(e) {
    e.parentNode.remove()
}

function editItem(e) {
    var val = e.parentNode.firstChild.nodeValue;
    var editvalue = prompt("Enter edit text ", val)
    e.parentNode.firstChild.nodeValue = editvalue
}

function DeletAll() {
    list.innerHTML = ""
}