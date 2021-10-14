camera=document.getElementById("camera");

Webcam.attach ( '#camera' );

function take_snapshot() {

    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = "<img id='captured_image src='"+data_uri+"'/>"; 
    });
}
console.log("ml5 version:", ml5.version);


classifier=ml5.imageclassifier("https://teachablemachine.withgoogle.com/models/A_SNNjSCU/model.json", modelLoaded);
function modelLoaded() {
    console.log("model loaded");
}

function Speak() {
    var synth = window.speechSynthesis
    Speak_data1="the prediction is "+prediction_1;
    var utterThis= new SpeechSynthesisUtterance(Speak_data1);
    synth.speak(utterThis); f4
}