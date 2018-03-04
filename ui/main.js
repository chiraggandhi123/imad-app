var element=document.getElementById('heading')
element.innerHTML='new value' 
var img=document.getElementById('madi')
function moveRight(){
    var marginLeft=marginLeft + 10;
    img.style.marginLeft= marginLeft+'px';
}
img.onclick = function(){
    var interval = setInterval(moveRight,100);
    
}