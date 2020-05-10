 /**
 * Created by 小花 on 2019/7/19.
 */
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