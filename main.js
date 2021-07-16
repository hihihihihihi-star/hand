Webcam.set({
    width:350, 
    height:300,
    image_format:'png',
    png_quality:90
});

camera= document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    })
}
console.log('ml5 verison',ml5.version);
classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/dSrOMu_PL/j.son',modelLoaded);

function modelloaded(){
    console.log('modelLoaded');
}
function speak(){
    var synth=window.speachSynthesis;
    speak_data_1="the 1 guess is"+prediction_1;
    speak_data_2="the 2 guess is"+prediction_2;
    var utterThis=new SpeachSynthesisUtteran(speak_data_1+speak_data_2);
    synth.speak(utterThis);
}
