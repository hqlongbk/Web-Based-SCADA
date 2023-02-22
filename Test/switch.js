function change(){
    let x = document.getElementById("light-text");
    var element = document.body;

    if(x.innerHTML==="OFF"){
        x.innerHTML="ON";
        element.classList.toggle("light-on");
    }else{
        x.innerHTML="OFF";
    }
}
function myFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("click");
    // Get the output text
    var text = document.getElementById("box1");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      text.style.visibility = "visible";
    } else {
      text.style.visibility = "hidden";
    }
  }
