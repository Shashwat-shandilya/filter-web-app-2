function setup(){
    canvas = createCanvas(500,500);
    canvas.position(480,200);
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet has been initialised")
}
    
function draw(){
    image(video, 0,0,500,500);
}

function takeSnapshot(){
    save('your_face.png');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}