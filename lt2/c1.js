/**
 * Created by 小花 on 2019/9/3.
 */
function addLoadEvent(fun){
    var old=window.onload;
    if(typeof window.onload!="function"){
        window.onload=fun;
    }else{
        window.onload=function(){
            old();
            fun();
        }
    }
}
function stripeTables(){
    if(!document.getElementsByTagName)return false;
    var table=document.getElementsByTagName("table");
    var odd,rows;
    for(var i=0;i<table.length;i++){
        odd=false;
        rows=table[i].getElementsByTagName("tr");
        for(var j=0;j<rows.length;j++){
           if(odd){
               rows[j].style.backgroundColor="plum";
               odd=false;
           }else{
               odd=true;
           }
        }
    }
}
function highlightRows(){
    if(!document.getElementsByTagName)return false;
    var rows=document.getElementsByTagName("tr");
    for(var i=0;i<rows.length;i++){
        rows[i].onmouseover=function(){
            this.style.fontWeight="bold";
            this.style.cursor="pointer";
        };
        rows[i].onmouseout=function(){
            this.style.fontWeight="normal";
        }
    }
}
addLoadEvent(stripeTables);
addLoadEvent(highlightRows);