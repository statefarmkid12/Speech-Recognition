x=0
y=0
draw_rect=""
draw_circ=""

function setup(){
    canvas = createCanvas(1000, 800)
} 

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition;

function start(){
    document.getElementById("status").innerHTML = "System is listening, please speak";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript; 

    document.getElementById("status").innerHTML = "The Speech recognized is: "+content;
    if(content == "circle"&&"Circle"){
        x = Math.floor(Math.random()* 250);
        y = Math.floor(Math.random()* 225);
        draw_circ = "set"
        console.log("Circle is being drawn")
    }

    if(content == "rectangle"&&"Rectangle"){
        x = Math.floor(Math.random()* 250);
        y = Math.floor(Math.random()* 225);
        draw_rect = "set"
        console.log("Rectangle is being drawn")
    }

}

function draw(){
    if(draw_circ == "set"){
        radius = Math.floor(Math.random()*200)
        circle(x, y, radius);
        document.getElementById("status").innerHTML = "Circle has been generated";
    }

    if(draw_rect == "set"){
        rect(x, y, 200, 180);
        document.getElementById("status").innerHTML = "Rectangle has been generated";
    }
}




