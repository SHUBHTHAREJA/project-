song="";
leftwristX=0;
leftwristy=0;
rightwristX=0;
rightwristY=0;
scoreleftWrist=0;
scoreRightWrist=0;

function setup(){
    canvas=createCanvas(600,500);
    canvas.center()
    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);

    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("model loaded");
}


