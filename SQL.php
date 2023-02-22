<?php
require './PHP/Service/connect.php';
if(isset($_POST['btn_submit'])){
    $username=$_POST['username'];
    $password=$_POST['password'];

    $sql="SELECT * FROM `Login` WHERE user='".$username."'AND pass='".$password."' limit 1";
    
    $result=mysqli_query($conn,$sql);
    
    if(mysqli_num_rows($result)==1){ // so sánh user/pass với sql server nếu đúng thì thực hiện
        $row=mysqli_fetch_array($result);
        if($row['aurth']=="PC"){ // phân quyền admin
            header("Location: ./PHP/MainPC.php");
        }else if($row['aurth']=="WC"){ // phân quyền client
            header("Location: ./PHP/Main.php");// đúng thì trỏ tới file này
        }
    }
    else{
        echo " You Have Entered Incorrect Password";
        exit();
    }
}
?>