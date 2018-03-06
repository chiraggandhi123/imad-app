var counter =0;
var span = document.getElementById('count');
var button = document.getElementById('counter');
button.onclick=function(){
    counter=counter+1;
    span.innerHTML = counter.toString('count');
};