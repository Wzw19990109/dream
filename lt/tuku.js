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
function addNode(a,b){
    var parent=b.parentNode;
    if(parent.lastChild==b){
        parent.appendChild(a);
    }else{
        parent.insertBefore(a,b.nextSibling);
    }
}
function showPic(a){
    var fun=a.getAttribute("href");
    var place=document.getElementById("placeholder");
    place.setAttribute("src",fun);
    var txt=a.getAttribute("title");
    var p1=document.getElementById("p1");
    p1.firstChild.nodeValue=txt;
    return false;
}
function addOn(){
    var gallery=document.getElementById("gallery");
    var a=gallery.getElementsByTagName("a");
    for(var i=0;i<a.length;i++){
        a[i].onclick=function(){
            return showPic(this);
        }
    }
}
function create(){
    var imge=document.createElement("img");
    imge.setAttribute("id","placeholder");
    imge.setAttribute("src","../../images/placeholder.png");
    imge.setAttribute("alt","beijing");
    var txt=document.createElement("p");
    txt.setAttribute("id","p1");
    var txte=document.createTextNode("beijing");
    txt.appendChild(txte);
    var gallery=document.getElementById("gallery");
    addNode(imge,gallery);
    addNode(txt,gallery);
}
addFun(create);
addFun(addOn);

