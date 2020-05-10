/**
 * Created by 小花 on 2019/7/19.
 */
function getNewContent() {
    var request = getHTTPObject();
    if (request) {
        request.open("GET", "example.txt", true);
        request.onreadystatechange = function () {
            if (request.readyState == 4) {
                alert("Response Received");
                var para=document.createElement("p");
                var txt=document.createTextNode(request.responseText);
                para.appendChild(txt);
                document.getElementById("new").appendChild(para);
            }
        };
        request.send(null);
    }else{
        alert("sorry,your browser doesn\'t support XMLHttpRequest");
    }
    alert("Function Done");
}
addFun(getNewContent);