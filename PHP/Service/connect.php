<?php
 $host = "sql6.freemysqlhosting.net";
 $username = "sql6505561";
 $password = "UUjB2zra8b";
 $dbname = "sql6505561";

$conn= new mysqli($host,$username,$password,$dbname);

if($conn->connect_error){
    die("ket noi khong thanh cong".$conn->connect_error);
}
?>