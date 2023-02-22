function myFunction(checkBox,text) {
  // If the checkbox is checked, display the output text
  if (checkBox.checked == true) {
    text.style.visibility = "visible";
  } else {
    text.style.visibility = "hidden";
  }
}
function Hiden() {
  var text1 = document.getElementById("bVXRL1");
  text1.style.visibility = "hidden";
  var text2 = document.getElementById("bVIN1");
  text2.style.visibility = "hidden";
  var text3 = document.getElementById("bVXK1");
  text3.style.visibility = "hidden";
  var text4 = document.getElementById("bVRL1");
  text4.style.visibility = "hidden";
  var text5 = document.getElementById("bVOUT1");
  text5.style.visibility = "hidden";
  var text6 = document.getElementById("bPUMP2");
  text6.style.visibility = "hidden";
}
//---------------------------NÚT CLOSE CHO POP UP BỂ LỌC 1------------------------------////
function Hiden2() {
  var text1 = document.getElementById("bVXRL1");
  text1.style.visibility = "hidden";
  var text2 = document.getElementById("bVIN1");
  text2.style.visibility = "hidden";
  var text3 = document.getElementById("bVXK1");
  text3.style.visibility = "hidden";
  var text4 = document.getElementById("bVRL1");
  text4.style.visibility = "hidden";
  var text5 = document.getElementById("bVOUT1");
  text5.style.visibility = "hidden";
  var text6 = document.getElementById("bPUMP2");
  text6.style.visibility = "hidden";
  var text7 = document.getElementById("bBL1");
  text7.style.visibility = "hidden";
}
//----------------------------------------TEST POPUP---------------------------------------------////
function ShowBL1(){
  //get the output checkbox
  var checkBox = document.getElementById("cBL1"); // click vào khung muốn show
  // Get the output text
  var text2 = document.getElementById("bVIN1"); // tắt các pop-up khác đi 
  text2.style.visibility = "hidden";
  var text3 = document.getElementById("bVXK1");
  text3.style.visibility = "hidden";
  var text4 = document.getElementById("bVRL1");
  text4.style.visibility = "hidden";
  var text5 = document.getElementById("bVOUT1");
  text5.style.visibility = "hidden";
  var text6 = document.getElementById("bPUMP2");
  text6.style.visibility = "hidden";
  /////////////////////
  var text = document.getElementById("bBL1");
  myFunction(checkBox,text) // show pop-up lên 
}
//----------------------------------------TEST POP UP ----------------------------------/////
function ShowVXRL1(){
  //get the output checkbox
  var checkBox = document.getElementById("cVXRL1"); // click vào khung muốn show
  // Get the output text
  var text2 = document.getElementById("bVIN1"); // tắt các pop-up khác đi 
  text2.style.visibility = "hidden";
  var text3 = document.getElementById("bVXK1");
  text3.style.visibility = "hidden";
  var text4 = document.getElementById("bVRL1");
  text4.style.visibility = "hidden";
  var text5 = document.getElementById("bVOUT1");
  text5.style.visibility = "hidden";
  var text6 = document.getElementById("bPUMP2");
  text6.style.visibility = "hidden";
  /////////////////////
  var text = document.getElementById("bVXRL1");
  myFunction(checkBox,text) // show pop-up lên 
}
function ShowVIN1(){
  //get the output checkbox
  var checkBox = document.getElementById("cVIN1");
  // Get the output text
  var text1 = document.getElementById("bVXRL1");
  text1.style.visibility = "hidden";
  var text3 = document.getElementById("bVXK1");
  text3.style.visibility = "hidden";
  var text4 = document.getElementById("bVRL1");
  text4.style.visibility = "hidden";
  var text5 = document.getElementById("bVOUT1");
  text5.style.visibility = "hidden";
  var text6 = document.getElementById("bPUMP2");
  text6.style.visibility = "hidden";
  /////////////////////
  var text = document.getElementById("bVIN1");
  myFunction(checkBox,text)
}
function ShowVXK1(){
  //get the output checkbox
  var checkBox = document.getElementById("cVXK1");
  // Get the output text
  var text1 = document.getElementById("bVXRL1");
  text1.style.visibility = "hidden";
  var text2 = document.getElementById("bVIN1");
  text2.style.visibility = "hidden";
  var text4 = document.getElementById("bVRL1");
  text4.style.visibility = "hidden";
  var text5 = document.getElementById("bVOUT1");
  text5.style.visibility = "hidden";
  var text6 = document.getElementById("bPUMP2");
  text6.style.visibility = "hidden";
  ///////////////////////////////////////
  var text = document.getElementById("bVXK1");
  myFunction(checkBox,text)
}
function ShowVRL1(){
  //get the output checkbox
  var checkBox = document.getElementById("cVRL1");
  // Get the output text
  var text1 = document.getElementById("bVXRL1");
  text1.style.visibility = "hidden";
  var text2 = document.getElementById("bVIN1");
  text2.style.visibility = "hidden";
  var text3 = document.getElementById("bVXK1");
  text3.style.visibility = "hidden";
  var text5 = document.getElementById("bVOUT1");
  text5.style.visibility = "hidden";
  var text6 = document.getElementById("bPUMP2");
  text6.style.visibility = "hidden";
  //////////////////////
  var text = document.getElementById("bVRL1");
  myFunction(checkBox,text)
}
function ShowVOUT1(){
  //get the output checkbox
  var checkBox = document.getElementById("cVOUT1");
  // Get the output text
  var text1 = document.getElementById("bVXRL1");
  text1.style.visibility = "hidden";
  var text2 = document.getElementById("bVIN1");
  text2.style.visibility = "hidden";
  var text3 = document.getElementById("bVXK1");
  text3.style.visibility = "hidden";
  var text4 = document.getElementById("bVRL1");
  text4.style.visibility = "hidden";
  var text6 = document.getElementById("bPUMP2");
  text6.style.visibility = "hidden";
  ////////////////////////////////////
  var text = document.getElementById("bVOUT1");
  myFunction(checkBox,text)
}
function ShowPUMP1(){ 
  //get the output checkbox
  var checkBox = document.getElementById("cPUMP2");
  // Get the output text
  var text1 = document.getElementById("bVXRL1");
  text1.style.visibility = "hidden";
  var text2 = document.getElementById("bVIN1");
  text2.style.visibility = "hidden";
  var text3 = document.getElementById("bVXK1");
  text3.style.visibility = "hidden";
  var text4 = document.getElementById("bVRL1");
  text4.style.visibility = "hidden";
  var text5 = document.getElementById("bVOUT1");
  text5.style.visibility = "hidden";
  ///////////////////////
  var text = document.getElementById("bPUMP2");
  myFunction(checkBox,text)
}
/*
function themgiatri(){
  var input_text = document.getElementById("HTTL1");
  var input_text = document.getElementById("result");
  var text = input_text.value;
  result.innerHTML = text; 
}
*/