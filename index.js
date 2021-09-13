var num=0;
document.getElementById("button").innerText=num;
function plus(){
    num++;
    document.getElementById("button").innerText=num;
}
function minus(){
    if(num>0){
        num--;
        document.getElementById("button").innerText=num;
    }else
    {
        alert("Already Zero")
    }
    
}
function reset(){
    num=0;
    document.getElementById("button").innerText=num;
}