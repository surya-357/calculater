var val=document.getElementById("surya");
        
function add(v){
val.value+=v;
}


function cls(){
val.value="";
}

function exe(){
val.value=eval(val.value);
}


function cancel(){
val.value=val.value.slice(0,val.value.length-1);
}