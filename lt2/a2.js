/**
 * Created by 小花 on 2019/7/19.
 */
function getHTTPObject(){
    if(typeof XMLHttpRequest=="underfined")
        XMLHttpRequest=function(){
            try{return new ActiveXObject("Msxml2.XMLHTTP.6.0");}
            catch(e){}
            try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}
            catch(e){}
            try{return new ActiveXObject("Msxml2.XMlHTTP")}
            catch(e){}
            return false;
        }
    return new XMLHttpRequest();
}