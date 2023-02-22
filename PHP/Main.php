<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../CSS/Formart.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />
    <title>Dashboard management center</title>
</head>

<body>
    <div class="header">
        <h2><br>BẢNG ĐIỀU KHIỂN VÀ GIÁM SÁT HỆ THỐNG CẤP NƯỚC BẰNG WEBSCADA</h2>
    </div>
    <div class="Main_board">
        <hr>
        <!--<div class="ds_Over">
            <div class="Tittle"></div>
        </div>-->
        <div id="form_infor1">
            <p id="V_B1" class="vl_index">0.0</p>
            <p class="vl_unit">M³</p>
        </div>
        <img id="VXRL1" src="../Image/ValveOff.png" alt="" srcset="">
        <img id="VIN1" src="../Image/ValveOff.png" alt="" srcset="">
        <img id="VXK1" src="../Image/ValveOff.png" alt="" srcset="">
        <img id="VRL1" src="../Image/ValveOff.png" alt="" srcset="">
        <img id="VOUT1" src="../Image/ValveOff.png" alt="" srcset="">
        <img id="PUMP2" src="../Image/POff.png" alt="" srcset="">
        <!--Bể 2-->
        <div id="form_infor2">
            <p id="V_B2" class="vl_index">0.0</p>
            <p class="vl_unit">M³</p>
        </div>
        <img id="VXRL2" src="../Image/ValveOff.png" alt="" srcset="">
        <img id="VIN2" src="../Image/ValveOff.png" alt="" srcset="">
        <img id="VXK2" src="../Image/ValveOff.png" alt="" srcset="">
        <img id="VRL2" src="../Image/ValveOff.png" alt="" srcset="">
        <img id="VOUT2" src="../Image/ValveOff.png" alt="" srcset="">
    </div>
</body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/paho-mqtt/1.0.1/mqttws31.js" type="text/javascript"></script>
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="../JS/MQTT_File.js"></script>
</html>