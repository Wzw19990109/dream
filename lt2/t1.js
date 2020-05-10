/**
 * Created by 小花 on 2019/9/2.
 */
function displayabbr(){
    if(!document.getElementById||!document.getElementsByTagName||!document.createElement||!document.createTextNode)return false;
    //获取缩略语
    var abbr=document.getElementsByTagName("abbr");

    if(abbr.length<1)return false;
    var defs=new Array();
    //遍历缩略语
    for(var i=0;i<abbr.length;i++){
        if(abbr[i].childNodes.length<1)continue;
        var definition=abbr[i].getAttribute("title");
        var key=abbr[i].lastChild.nodeValue;
        defs[key]=definition;
    }

    var dlist=document.createElement("dl");
    for(var i in defs){
        var definition=defs[i];
        var dtitle=document.createElement("dt");
        var dtitle_text=document.createTextNode(i);
        dtitle.appendChild(dtitle_text);
        var ddesc=document.createElement("dd");
        var ddesc_text=document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
    if(dlist.childNodes.length<1)return false;
    var header=document.createElement("h2");
    var header_text=document.createTextNode("Abbr");
    header.appendChild(header_text);
    document.body.appendChild(header);
    document.body.appendChild(dlist);
}
function displayCitation(){
    var quotes =document.getElementsByTagName("blockquote");
    for(var i=0;i<quotes.length;i++){
        if(!quotes[i].getAttribute("cite"))continue;
        var url=quotes[i].getAttribute("cite");
        var quoteChildren=quotes[i].getElementsByTagName("*");
        if(quoteChildren.length<1)continue;
        var elem=quoteChildren[quoteChildren.length-1];
        var link=document.createElement("a");
        var link_txt=document.createTextNode("source");
        link.appendChild(link_txt);
        link.setAttribute("href",url);
        var superscript=document.createElement("sup");
        superscript.appendChild(link);
        elem.appendChild(superscript);

    }
}
function displayAccesskeys(){
    if(!document.getElementsByTagName||!document.createElement||!document.createTextNode)return false;
    var links=document.getElementsByTagName("a");
    var akeys =new Array();
    for(var i=0;i<links.length;i++) {
        var current_link = links[i];
        if (!current_link.getAttribute("accesskey"))continue;
        var key = current_link.getAttribute("accesskey");
        var text = current_link.lastChild.nodeValue;
        akeys[key] = text;
    }
        var list=document.createElement("ul");
        for(key in akeys){
            var  text=akeys[key];
            var str=key+":"+text;
            var item=document.createElement("li");
            var item_text=document.createTextNode(str);
            item.appendChild(item_text);
            list.appendChild(item);
        }
        var header=document.createElement("h3");
        var header_text=document.createTextNode("Accesskeys");
        header.appendChild(header_text);
        document.body.appendChild(header);
        document.body.appendChild(list);
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
addFun(displayAccesskeys);
addFun(displayCitation);
addFun(displayabbr);