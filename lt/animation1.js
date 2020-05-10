function addFun(a){
    var fun=window.onload;
    if(typeof window.onload!="function"){
        window.onload=a;
    }else{
        window.onload=function(){
            fun();
            a();
        }
    }
}
function posiT(){
 var ani=document.getElementById("animation");
 ani.style.position="absolute";
 ani.style.left="1px";
 ani.style.top="1px";
 chouX("animation",200,200,20);
 var ani2=document.getElementById("animation2");
 ani2.style.position="absolute";
 ani2.style.left="1px";
 ani2.style.top="1px";
 chouX("animation2",200,200,50);
}
function chouX(elementID,fin_x,fin_y,interV){
    var ele=document.getElementById(elementID);
    var colX=parseInt(ele.style.left);
    var colY=parseInt(ele.style.top);
    // if(colX==fin_x&&colY==fin_y){
    //         return true;
    //     }
    if(colX>0&&colX<fin_x) {
        colX++;
    }else if(colX==fin_x){
        colX--;
    }
    if(colY>0&&colY<fin_y){
        colY++;
    }else if(colY==fin_y){
        colY--;
    }
    ele.style.left=colX+"px";
    ele.style.top=colY+"px";
    var score="chouX('"+elementID+"',"+fin_x+","+fin_y+","+interV+")";
    setTimeout(score,interV);
}
addFun(posiT);