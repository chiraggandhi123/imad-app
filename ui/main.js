var counter =0;

var button = document.getElementById('counter');
button.onclick=function(){ 
    var request = new XMLHttprequest();
    request.onreadystatechange=function(){
      if(request.readyState===XMLHttprequest.DONE)
      {
          if(request.status===200){
              var counter = request.responseText;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();

          }
      }
    };
    
};