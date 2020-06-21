var formAdd = document.querySelector("#formAddItems");
formAdd.addEventListener('submit', function(){
    var item = document.querySelector('#additems').value;
    localStorage.setItem(item, item);  
});

var ul = document.querySelector('#items-list');
for(var i in localStorage){
    if(typeof localStorage[i] == 'string'){
    var li = document.createElement("li");
    li.append(localStorage[i]);
    ul.append(li);
    }
    
}
var formRemove = document.querySelector("#formRemoveItems");
formRemove.addEventListener('submit', function(){
    var item = document.querySelector('#remove').value;
    localStorage.removeItem(item);

});

