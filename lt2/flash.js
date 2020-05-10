/**
 * Created by 小花 on 2019/10/21.
 */
function positionMessage(){
    if(!document.getElementById)return false;
    if(!document.getElementById("message"))return false;
    var elem=document.getElementById("message");
    elem.style.position="absolute";
    elem.style.left="50px";
    elem.style.top="100px";
}
function addLoadEvent(fun){
    var a=window.onload;
    if(typeof window.onload!="function"){
        window.onload=fun;
    }else{
        window.onload=function(){
            a();
            fun();
        }
    }
}
addLoadEvent(positionMessage);