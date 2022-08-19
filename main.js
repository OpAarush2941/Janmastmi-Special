var XposNose = 0;
var YposNose = 0;
var XposLear = 0;
var YposLear = 0;
var matki_cracks = 0;
var MatkiX = 150;
var MatkiY = 0;

function preload(){
    clown_nose = loadImage("https://i.postimg.cc/cHW3sXK6/clown-red-nose.png");
    clown_cap = loadImage("https://i.postimg.cc/9fxfS23m/clown-hat.png");
    matki = loadImage("https://i.postimg.cc/XqWxh3pL/4.png")
}

function setup(){
    canvas = createCanvas(400,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500,400);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded());
    poseNet.on('pose',gotPoses);
}

function draw(){
    image(video,0,0,400,300);
    image(matki,MatkiX,MatkiY,100,100);
    fill("red");
    image(clown_nose,XposNose-72,YposNose-70,30,30);
    //image(clown_cap,XposLear-200,YposLear-200,200,100);
    if((XposNose>=150 && XposNose<=250)&&(YposNose>=150 && YposNose<=250)){
        console.log("helo world")
        window.location = "Janmastmi.html";
    }
}

/*if((XposNose==MatkiX)&&(YposNose==MatkiY)){
    randxpos=Math.random(400);
    randypos=Math.random(300);
    console.log(randxpos);
    console.log(randypos);
    image(matki,randxpos,randypos,100,100);
    matki_cracks = matki_cracks + 1;
}*/

function takeSnapshot(){
    save("myFilterImage.png");
}

function modelLoaded(){
    console.log("model is loaded");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("x="+results[0].pose.nose.x);
        console.log("y="+results[0].pose.nose.y);
        XposNose = results[0].pose.nose.x;
        YposNose = results[0].pose.nose.y;
        XposLear = results[0].pose.leftEar.x;
        YposLear = results[0].pose.leftEar.y;
    }
}