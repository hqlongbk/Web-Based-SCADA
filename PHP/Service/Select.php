<?php
require 'connect.php';
$sql="SELECT * FROM `infor` WHERE 1";
    
$result=mysqli_query($conn,$sql);
    
if(mysqli_num_rows($result)>0){
    while($row=mysqli_fetch_assoc($result)){
        echo "<pre>";
        print_r($row);
        echo "</pre>";
    }
}
?>