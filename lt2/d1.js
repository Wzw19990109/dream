/**
 * Created by 小花 on 2019/7/16.
 */
function showPic(a){
    if(!document.getElementById("placeholder"))return false;
    var score=a.getAttribute("href");
    var placeholder=document.getElementById("placeholder");
    if(placeholder.nodeName!="IMG")return false;
    placeholder.setAttribute("src",score);
    if(document.getElementById("description")){
        var text=a.getAttribute("title")?a.getAttribute("title"):"";
        var description=document.getElementById("description");
        if(description.firstChild.nodeType==3){
            description.firstChild.nodeValue=text;
        }
    }
    return true;
}
function pregallery(){
    if(!document.getElementsByTagName)return false;
    if(!document.getElementById)return false;
    if(!document.getElementById("gallery"))return false;
    var gallery=document.getElementById("gallery");
    var links=gallery.getElementsByTagName("a");
    for(var i=0;i<links.length;i++){
        links[i].onclick=function(){
            return showPic(this)?false:true;

        }
    }
}
function addFun(fun){
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
function insert(newEle,a){
    // var parent=a.parentNode;
    // parent.insertBefore(newEle,a)
     var parent=a.parentNode;
     if(parent.lastChild==a){
         parent.appendChild(newEle);
     }else{
         parent.insertBefore(newEle,a.nextSibling);
     }
}
function preplaceholder(){
    var image=document.createElement("img");
    image.setAttribute("id","placeholder");
    image.setAttribute("src","../../images/placeholder.png");
    image.setAttribute("alt","水");
    var p1=document.createElement("p");
    p1.setAttribute("id","description");
    var txt=document.createTextNode("Water");
    p1.appendChild(txt);
    var gallery=document.getElementById("gallery");
    insert(p1,gallery);
    insert(image,gallery);


}
addFun(pregallery);
addFun(preplaceholder);
