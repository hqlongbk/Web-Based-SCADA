	var connected_flag=0	
	var mqtt;
	var reconnectTimeout = 2000;
window.onload = function() // luôn chạy code liên tục 
{
    MQTTconnect();
};
	function onConnectionLost(){
	console.log("connection lost");
	connected_flag=0;
	}
	function onFailure(message) {
		console.log("Failed");
        setTimeout(MQTTconnect, reconnectTimeout);
    }
	function onMessageArrived(r_message){
		out_msg="Message received "+r_message.payloadString+"<br>";
		out_msg=out_msg+"Message received Topic "+r_message.destinationName;
		//console.log("Message received ",r_message.payloadString);
		if(r_message.destinationName=="HK17-Test"){
			document.getElementById("vl_index").innerHTML =r_message.payloadString;
		}
		//////////////////////////VAN THU NƯỚC SẠCH//////////////////////////////
		if(r_message.destinationName=="VOUT1"){ // địa chỉ tên topic 
			var adress = document.getElementById('VOUT1'); // địa chỉ ID trog html (php) main.PC
			message = r_message.payloadString; // nội dung tin nhắn gửi lên 
			Pum(adress,message); // thực hiện chương trình con PUMP
		}
		//VAN THU NƯỚC SẠCH:     ĐÈN CHẠY//
		if(r_message.destinationName=="LRVOUT1"){
			var adress = document.getElementById('LRVOUT1');
			message = r_message.payloadString;
			ChangeColor(adress,message,"green")
		}
		//VAN THU NƯỚC SẠCH:     ĐÈN DỪNG//
		if(r_message.destinationName=="LSVOUT1"){
			var adress = document.getElementById('LSVOUT1');
			message = r_message.payloadString;
			ChangeRed(adress,message,"red")
		}
		//VAN THU NƯỚC SẠCH:     ĐÈN LỖI//
		if(r_message.destinationName=="LEVOUT1"){
			var adress = document.getElementById('LEVOUT1');
			message = r_message.payloadString;
			ChangeYellow(adress,message,"yellow")
		}
		//----------------------------------------VAN XẢ RỬA LỌC 1--------------------------------------------//
		if(r_message.destinationName=="VXRL1"){
			var adress = document.getElementById('VXRL1');
			message = r_message.payloadString;
			Pum(adress,message);
		}
		if(r_message.destinationName=="LRVXRL1"){
			var adress = document.getElementById('LRVXRL1');
			message = r_message.payloadString;
			ChangeColor(adress,message,"green")
		}
		if(r_message.destinationName=="LSVXRL1"){
			var adress = document.getElementById('LSVXRL1');
			message = r_message.payloadString;
			ChangeRed(adress,message,"red")
		}
		if(r_message.destinationName=="LEVXRL1"){
			var adress = document.getElementById('LEVXRL1');
			message = r_message.payloadString;
			ChangeYellow(adress,message,"yellow")
		}
		//-----------------------------------VAN NƯỚC THÔ 1-------------------------------------------------//

		if(r_message.destinationName=="VIN1"){
			var adress = document.getElementById('VIN1');
			message = r_message.payloadString;
			Pum(adress,message);
		}
		if(r_message.destinationName=="LRVIN1"){
			var adress = document.getElementById('LRVIN1');
			message = r_message.payloadString;
			ChangeColor(adress,message,"green")
		}
		if(r_message.destinationName=="LSVIN1"){
			var adress = document.getElementById('LSVIN1');
			message = r_message.payloadString;
			ChangeRed(adress,message,"red")
		}
		if(r_message.destinationName=="LEVIN1"){
			var adress = document.getElementById('LEVIN1');
			message = r_message.payloadString;
			ChangeYellow(adress,message,"yellow")
		}
		//------------------------------------------VAN XẢ KHÍ 1------------------------------------------//
		if(r_message.destinationName=="VXK1"){
			var adress = document.getElementById('VXK1');
			message = r_message.payloadString;
			Pum(adress,message);
		}
		if(r_message.destinationName=="LRVXK1"){
			var adress = document.getElementById('LRVXK1');
			message = r_message.payloadString;
			ChangeColor(adress,message,"green")
		}
		if(r_message.destinationName=="LSVXK1"){
			var adress = document.getElementById('LSVXK1');
			message = r_message.payloadString;
			ChangeRed(adress,message,"red")
		}
		if(r_message.destinationName=="LEVXK1"){
			var adress = document.getElementById('LEVXK1');
			message = r_message.payloadString;
			ChangeYellow(adress,message,"yellow")
		}
		//--------------------------------------VAN RỬA LỌC 1----------------------------------------------//
		
		if(r_message.destinationName=="VRL1"){
			var adress = document.getElementById('VRL1');
			message = r_message.payloadString;
			Pum(adress,message);
		}
		if(r_message.destinationName=="LRVRL1"){
			var adress = document.getElementById('LRVRL1');
			message = r_message.payloadString;
			ChangeColor(adress,message,"green")
		}
		if(r_message.destinationName=="LSVRL1"){
			var adress = document.getElementById('LSVRL1');
			message = r_message.payloadString;
			ChangeRed(adress,message,"red")
		}
		if(r_message.destinationName=="LEVRL1"){
			var adress = document.getElementById('LEVRL1');
			message = r_message.payloadString;
			ChangeYellow(adress,message,"yellow")
		}
		//------------------------------------------------------------------------------------//
		//-------------------------------------BƠM 1-----------------------------------------------//
		
		if(r_message.destinationName=="PUMP2"){
			var adress = document.getElementById('PUMP2');
			message = r_message.payloadString;
			Valve(adress,message); // THỰC HIỆN KHỐI VAVLUE
		}
		if(r_message.destinationName=="LRPUMP2"){
			var adress = document.getElementById('LRPUMP2');
			message = r_message.payloadString;
			ChangeColor(adress,message,"green")
		}
		if(r_message.destinationName=="LSPUMP2"){
			var adress = document.getElementById('LSPUMP2');
			message = r_message.payloadString;
			ChangeRed(adress,message,"red")
		}
		if(r_message.destinationName=="LEPUMP2"){
			var adress = document.getElementById('LEPUMP2');
			message = r_message.payloadString;
			ChangeYellow(adress,message,"yellow")
		}
		//------------------------------------MỨC NƯỚC BỂ LỌC------------------------------------------------//
		if(r_message.destinationName=="V_B1"){
			var adress = document.getElementById('V_B1');
			message = r_message.payloadString;
			var lamtron = Math.round(message*100)/100;
			adress.innerHTML=lamtron;
		}
		if(r_message.destinationName=="TLHT"){
			var adress = document.getElementById('TLHT');
			message = r_message.payloadString;
			adress.innerHTML=message;
		}
		if(r_message.destinationName=="TRLHT"){
			var adress = document.getElementById('TRLHT');
			message = r_message.payloadString;
			adress.innerHTML=message;
		}
		if(r_message.destinationName=="TLTL"){
			var adress = document.getElementById('TLTL');
			message = r_message.payloadString;
			adress.innerHTML=message;
		}
		if(r_message.destinationName=="TRLTL"){
			var adress = document.getElementById('TRLTL');
			message = r_message.payloadString;
			adress.innerHTML=message;
		}
		//---------------------------------KHÔNG SỬ DỤNG---------------------------------------------------//
		if(r_message.destinationName=="VOUT2"){
			var adress = document.getElementById('VOUT2');
			message = r_message.payloadString;
			Pum(adress,message);
		}
		if(r_message.destinationName=="VXRL2"){
			var adress = document.getElementById('VXRL2');
			message = r_message.payloadString;
			Pum(adress,message);
		}
		if(r_message.destinationName=="VIN2"){
			var adress = document.getElementById('VIN2');
			message = r_message.payloadString;
			Pum(adress,message);
		}
		if(r_message.destinationName=="VXK2"){
			var adress = document.getElementById('VXK2');
			message = r_message.payloadString;
			Pum(adress,message);
		}
		if(r_message.destinationName=="VRL2"){
			var adress = document.getElementById('VRL2');
			message = r_message.payloadString;
			Pum(adress,message);
		}
		//////////////////------MỨC NƯỚC BỂ CHỨA--------------///////////////
		if(r_message.destinationName=="V_B2"){
			var adress = document.getElementById('V_B2');
			message = r_message.payloadString;
			var lamtron = Math.round(message*100)/100;
			adress.innerHTML=lamtron
		}
		//------------------------------TRANGJ THAIS----------------------------//
		if(r_message.destinationName=="TRANGTHAI"){
			var adress = document.getElementById('TRANGTHAI');
			message = r_message.payloadString;
			if(message == "1"){
				adress.innerHTML="Đang Lọc";
			}
			else if(message == "2"){
				adress.innerHTML="Đang Rửa Lọc"
			}
			else if(message == "3"){
				adress.innerHTML="Đang Dừng"
			}
			else if(message == "4"){
				adress.innerHTML="Tự Động"
			}
			else if(message == "5"){
				adress.innerHTML="Đang Chờ"
			}
		}		
		//----------------------------------------------------------//
		//------------------------------ĐÈN LỖI HỆ THỐNG----------------------------//
		if(r_message.destinationName=="LOIHT"){
			var adress = document.getElementById('LOIHT');
			message = r_message.payloadString;
			Canhbao(adress,message,"yellow")
			
		}
		//----------------------------------------------------------------------//
		console.log(out_msg);
	}
	function onConnected(recon,url){
		console.log(" in onConnected " +reconn);
	}
	function onConnect() {
	  	// Once a connection has been made, make a subscription and send a message.
		connected_flag=1 // tạo các topic được đăng kí 
		console.log("on Connect "+connected_flag);
		mqtt.subscribe("HK17-Test");
		mqtt.subscribe("VOUT1");
		mqtt.subscribe("VXRL1");
		mqtt.subscribe("VIN1");
		mqtt.subscribe("VXK1");
		mqtt.subscribe("VRL1");
		mqtt.subscribe("PUMP2");
		mqtt.subscribe("V_B1");
		mqtt.subscribe("TLHT");
		mqtt.subscribe("TRLHT");
		mqtt.subscribe("TLTL");
		mqtt.subscribe("TRLTL");
		//----------------------------------------------------------//
		mqtt.subscribe("VOUT2");
		mqtt.subscribe("VXRL2");
		mqtt.subscribe("VIN2");
		mqtt.subscribe("VXK2");
		mqtt.subscribe("VRL2");
		mqtt.subscribe("V_B2");
		//----------------------------------------------------------//
		mqtt.subscribe("AMVXRL1"); // nút auto/manual
		mqtt.subscribe("RSVXRL1"); // nút chạy
		mqtt.subscribe("DEVXRL1"); // nút xoá lỗi 
		mqtt.subscribe("LRVXRL1"); // đèn run
		mqtt.subscribe("LSVXRL1"); // đèn dừng
		mqtt.subscribe("LEVXRL1"); // đèn lỗi
		//----------------------------------------------------------//
		mqtt.subscribe("AMVIN1");
		mqtt.subscribe("RSVIN1");
		mqtt.subscribe("DEVIN1");
		mqtt.subscribe("LRVIN1");
		mqtt.subscribe("LSVIN1");
		mqtt.subscribe("LEVIN1");
		//----------------------------------------------------------//
		mqtt.subscribe("AMVXK1");
		mqtt.subscribe("RSVXK1");
		mqtt.subscribe("DEVXK1");
		mqtt.subscribe("LRVXK1");
		mqtt.subscribe("LSVXK1");
		mqtt.subscribe("LEVXK1");
		//----------------------------------------------------------//
		mqtt.subscribe("AMVRL1");
		mqtt.subscribe("RSVRL1");
		mqtt.subscribe("DEVRL1");
		mqtt.subscribe("LRVRL1");
		mqtt.subscribe("LSVRL1");
		mqtt.subscribe("LEVRL1");
		//----------------------------------------------------------//
		mqtt.subscribe("AMVOUT1");
		mqtt.subscribe("RSVOUT1");
		mqtt.subscribe("DEVOUT1");
		mqtt.subscribe("LRVOUT1");
		mqtt.subscribe("LSVOUT1");
		mqtt.subscribe("LEVOUT1");
		//----------------------------------------------------------//
		mqtt.subscribe("AMPUMP2");
		mqtt.subscribe("RSPUMP2");
		mqtt.subscribe("DEPUMP2");
		mqtt.subscribe("LRPUMP2");
		mqtt.subscribe("LSPUMP2");
		mqtt.subscribe("LEPUMP2");
		//----------------------------------------------------------//
		
		//------------------------------TRANGJ THAIS----------------------------//
		mqtt.subscribe("TRANGTHAI");
		mqtt.subscribe("LOIHT");
		//----------------------------------------------------------//
	}
    function MQTTconnect() { // tạo khối mqtt connect
		var s = "driver.cloudmqtt.com";
		var p = "38573";

		if (p!=""){
			console.log("ports"); // nếu k có thì in lỗi trên console
			port=parseInt(p); // ép kiểu string - int 
			console.log("port" +port);
		}
		if (s!=""){
			host=s;
			console.log("host");
		}

		console.log("connecting to "+ host +" "+ port); // kết nối lại 1 lần nữa
		var x=Math.floor(Math.random() * 10000); 
		var cname="orderform-"+x;
		mqtt = new Paho.MQTT.Client(host,port,cname); // lệnh dùng kết nối mqtt
		//document.write("connecting to "+ host);
		var options = { // đăng nhập mqtt
			timeout: 3,
			onSuccess: onConnect,
			onFailure: onFailure,
			useSSL:true,
    		userName:"gxydnpxk",
    		password:"_1iAvgYu6M7L",
		};
		
		mqtt.onConnectionLost = onConnectionLost;
		mqtt.onMessageArrived = onMessageArrived;
		//mqtt.onConnected = onConnected;

		mqtt.connect(options);
		return false;
	}
	function Pum( adress,  message){ // chương trình con 
		if(message=="1")
		{
			adress.setAttribute('src','../Image/ValveOn.png') // thực hiện in ảnh ON lên 
		}else if(message=="0")
		{
			adress.setAttribute('src','../Image/ValveOff.png')
		}
		else if(message=="2")
		{
			adress.setAttribute('src','../Image/ValveLoi.png')
		}

		
	}
	function Valve(adress,  message){// THỰC HIỆN IN ẢNH CỦA BƠM LÊN
		if(message=="1")
		{
			adress.setAttribute('src','../Image/POn.png')
		}else if(message=="0")
		{
			adress.setAttribute('src','../Image/POff.png')
		}
		else if(message=="2")
		{
			adress.setAttribute('src','../Image/PLoi.png')
		}
	}
	function ChangeColor( adress,message,color){ // k xài
		if(message=="1")
			{
				adress.style.backgroundColor = color
			}
			else {
				adress.style.backgroundColor = "#fff"
			}	
	}
	
	function ChangeRed( adress,message,color){ // k xài
		if(message=="0")
			{
				adress.style.backgroundColor = color
			}
			else {
				adress.style.backgroundColor = "#fff"
			}	
	}
	function ChangeYellow( adress,message,color){ // k xài
		if(message=="2")
			{
				adress.style.backgroundColor = color
				alert("CẢNH BÁO LỖI: KHÔNG NHẬN ĐƯỢC TÍN HIỆU TRẢ VỀ TỪ VAN/BƠM");
			}
			else {
				adress.style.backgroundColor = "#fff"
			}	
	}
	/////////////
	function Canhbao( adress,message,color){ // k xài
		if(message=="1")
			{
				adress.style.backgroundColor = color
				alert("CẢNH BÁO: HỆ THỐNG ĐANG BỊ LỖI, DỪNG TOÀN BỘ HỆ THỐNG!!!!!!!!")
			}
			else {
				adress.style.backgroundColor = "#fff"
			}	
	}
	

	

	//-------------------------------------------------------------BẢNG ĐIỀU KHIỂN-----------------------------------------//
	//----------------------------POP-UP VAN XẢ RỬA LỌC------------------------------//
	function AUTO(){
		var topic = "AM";
		changeOn(topic);
	}
	function MANUAL(){
		var topic = "AM";
		changeOff(topic);
	}
	//----------------------------------------------------------//
	function RUNDK(){
		var topic = "RUNDK";
		changeOn(topic);
		var topic = "STOPDK";
		changeOff(topic);
		var topic = "XOALOI";
		changeOff(topic);	
	}
	function STOPDK(){
		var topic = "STOPDK";
		changeOn(topic);
		var topic = "RUNDK";
		changeOff(topic);
		var topic = "XOALOI";
		changeOff(topic);
		var topic = "TATLOC";
		changeOn(topic);
		var topic = "LOC";
		changeOff(topic);
		var topic = "RUALOC";
		changeOff(topic);	
	}
	function XOALOI(){
		var topic = "XOALOI";
		changeOn(topic);
		var topic = "RUNDK";
		changeOff(topic);
		var topic = "STOPDK";
		changeOff(topic);
		var topic = "XOALOI";
		changeOff(topic);
		var topic = "XACNHAN";
		changeOff(topic);	
	}
	function LOC(){
		var topic = "TATLOC";
		changeOff(topic);
		var topic = "LOC";
		changeOn(topic);
		var topic = "RUALOC";
		changeOff(topic);	
	}
	function RUALOC(){
		var topic = "RUALOC";
		changeOn(topic);
		var topic = "LOC";
		changeOff(topic);	
	}
	//////NÚT XÁC NHẬN////////////
	function XACNHAN(){
		var topic = "XACNHAN";
		changeOn(topic);	
	}
	function CAIDATLOC(){
		var topic = "CAIDATLOC";
		changeOn(topic);	
	}
	function CAIDATRUALOC(){
		var topic = "CAIDATRUALOC";
		changeOn(topic);	
	}
	//--------------------- CÀI ĐẶT THỜI GIAN LỌC-------------//
	
	function themgiatri(){
		var input_text = document.getElementById("HTTL1");
		var text = input_text.value;
		result.innerHTML = text;
		send_message("Time",text);
	}
	function themgiatri2(){
		var input_text = document.getElementById("HTTL2");
		var text = input_text.value;
		result2.innerHTML = text;
		send_message("Time2",text);
	}
	function themgiatri3(){
		var input_text = document.getElementById("HTTL3");
		var text = input_text.value;
		result3.innerHTML = text;
		send_message("Time3",text);
	}
	function themgiatri4(){
		var input_text = document.getElementById("HTTL4");
		var text = input_text.value;
		result4.innerHTML = text;
		send_message("Time4",text);
	}
	function themgiatri5(){
		var input_text = document.getElementById("HTRL1");
		var text = input_text.value;
		result5.innerHTML = text;
		send_message("Time5",text);
	}

	

	//---------------------------------------------------------------------------------------------------------------------//
	//----------------------------------------------------------//

	//----------------------------------------------------------//
	//----------------------------POP-UP VAN XẢ RỬA LỌC------------------------------//
	function RUNVXRL1(){
		var topic = "RSVXRL1";
		changeOn(topic);
	}
	function STOPVXRL1(){
		var topic = "RSVXRL1";
		changeOff(topic);
	}
	function DEVXRL1(){ // xoá lỗi 
		var topic = "DEVXRL1";
		changeOn(topic);
	}

	//----------------------------------------------------------//
	//----------------------------POP-UP VAN NƯỚC THÔ------------------------------//
	
	function RUNVIN1(){
		var topic = "RSVIN1";
		changeOn(topic);
	}
	function STOPVIN1(){
		var topic = "RSVIN1";
		changeOff(topic);
	}
	function DEVIN1(){
		var topic = "DEVIN1";
		changeOn(topic);
	}
	//----------------------------------------------------------//
	//---------------------------POP-UP VAN XẢ KHÍ-------------------------------//
	function RUNVXK1(){
		var topic = "RSVXK1";
		changeOn(topic);
	}
	function STOPVXK1(){
		var topic = "RSVXK1";
		changeOff(topic);
	}
	function DEVXK1(){
		var topic = "DEVXK1";
		changeOn(topic);
	}
	//----------------------------------------------------------//
	//----------------------------POP-UP VAN XẢ RỬA LỌC------------------------------//
	
	function RUNVRL1(){
		var topic = "RSVRL1";
		changeOn(topic);
	}
	function STOPVRL1(){
		var topic = "RSVRL1";
		changeOff(topic);
	}
	function DEVRL1(){
		var topic = "DEVRL1";
		changeOn(topic);
	}
	//----------------------------------------------------------//
	//---------------------------POP-UP VAN THU NƯỚC SẠCH-------------------------------//
	
	function RUNVOUT1(){
		var topic = "RSVOUT1";
		changeOn(topic);
	}
	function STOPVOUT1(){
		var topic = "RSVOUT1";
		changeOff(topic);
	}
	function DEVOUT1(){
		var topic = "DEVOUT1";
		changeOn(topic);
	}

	//----------------------------------------------------------//
	//--------------------------POP-UP ĐIỀU KHIỂN BƠM 1--------------------------------//
	
	function RUNPUMP2(){
		var topic = "RSPUMP2";
		changeOn(topic);
	}
	function STOPPUMP2(){
		var topic = "RSPUMP2";
		changeOff(topic);
	}
	function DEPUMP2(){
		var topic = "DEPUMP2";
		changeOn(topic);
	}

	//----------------------------------------------------------//
	function VIN1(){
		var topic = "VIN1";
		var x = document.getElementById("TVIN1");
		change(topic,x);
	}
	function VXK1(){
		var topic = "VXK1";
		var x = document.getElementById("TVXK1");
		change(topic,x);
	}
	function VRL1(){
		var topic = "VRL1";
		var x = document.getElementById("TVRL1");
		change(topic,x);
	}
	function VOUT1(){
		var topic = "VOUT1";
		var x = document.getElementById("TVOUT1");
		change(topic,x);
	}

//----------------------------------------------------------//

	function VXRL2(){
		var topic = "VXRL2";
		var x = document.getElementById("TVXRL2");
		change(topic,x);
	}
	function VIN2(){
		var topic = "VIN2";
		var x = document.getElementById("TVIN2");
		change(topic,x);
	}
	function VXK2(){
		var topic = "VXK2";
		var x = document.getElementById("TVXK2");
		change(topic,x);
	}
	function VRL2(){
		var topic = "VRL2";
		var x = document.getElementById("TVRL2");
		change(topic,x);
	}
	function VOUT2(){
		var topic = "VOUT2";
		var x = document.getElementById("TVOUT2");
		change(topic,x);
	}
	function changeOn(topic){
		send_message(topic,"1")
	}
	function changeOff(topic){
		send_message(topic,"0")
	}
	function send_message(topic,msg){
		if (connected_flag==0){
		out_msg="<b>Not Connected so can't send</b>"
		console.log(out_msg);
		return false;
		}
		message = new Paho.MQTT.Message(msg);
		message.destinationName = topic;
		mqtt.send(message);
		return false;
	}

	