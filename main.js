//const Webcam = require("./webcam.min");

//const Webcam = require("./webcam");

var SpeechRecognition = window.webkitSpeechRecognition;
console.log(SpeechRecognition)
var recognition = new SpeechRecognition();

function start() {

    document.getElementById("textbox").innerHTML = "";
    
    recognition.start()
}
recognition.onresult = function (event) {

    console.log(event);

    var content = event.results[0][0].transcript;

    console.log(content);

    document.getElementById("textbox").innerHTML = content;

    if (content == "take my selfie")
    {

        console.log("Taking Selfie");

        speak();

    }
    
}

function speak(){
    var synth = window.speechSynthesis;

    speak_data = "taking your selfie in 5 seconds";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    setTimeout(function(){}, 5000);

    Webcam.attach(camera);

    setTimeout(function()
    {

        take_snapshot();

        save();

    }, 5000);
}


camera = document.getElementById("camera");

function take_snapshot()
{

    Webcam.snap(function(data_uri)
    {
        document.getElementById("selfie").innerHTML = '<img id="selfie_image" src="'+data_uri+'">';
    });
}

function save()
{

    link=document.getElementById("link");

    image = document.getElementById("selfie_image").src;

    link.href = image;

    link.click();

}

Webcam.set({

    width: 369,
    height: 250,
    image_format: 'png',
    png_quality: 90

});



