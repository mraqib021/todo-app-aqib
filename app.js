var a = document.getElementById("list");
var x = document.getElementById("input");
var flag = false;

function add(){
    var li = document.createElement("li")
    a.appendChild(li)
    li.setAttribute("style", "list-style-type:none")
    li.innerHTML = x.value
    x.value = ""
    var edit = document.createElement("button")
    var dlt = document.createElement("button")
    edit.innerHTML = "Edit"
    dlt.innerHTML = "Delete"
    li.appendChild(edit);
    li.appendChild(dlt); 
}
function dlte(){
    a.remove();
    flag = true;
}
