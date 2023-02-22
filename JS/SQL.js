function Send_Data(){
    var user = document.getElementById('username').value;
    var pass = document.getElementById('password').value;

    console.log(user);
    console.log(pass);
    var httpr=new XMLHttpRequest();
    httpr.open("POST","../PHP/SQL.php",true);
    httpr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    httpr.onreadystatechange=function(){
        if(httpr.readyState==4 && httpr.status==200){
            document.getElementById("not").innerHTML=httpr.responseText;
            console.log(httpr.responseText);
        }
    }
    httpr.send("user="+user+"&pass="+pass);
}