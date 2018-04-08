function showButton(){
var button = document.getElementsByClassName('button');
var i;
for(i=0; i<button.length; i++) {
    console.log(button[i].innerText);
}
}

showButton();