song1=""
song2=""
leftwristx=0
leftwristy=0
rightwristx=0
rightwristy=0
function preload() {
    song1=loadSound("music.mp3")
    song2=loadSound("music2.mp3")
}
function setup() {

    canvas= createCanvas(300,300)
    canvas.center()
    video=createCapture(VIDEO)
video.hide()
posenet=ml5.poseNet(video,modelloaded)
posenet.on("pose",gotposes)
}
function draw() {
    image(video,0,0,300,300)
}
function modelloaded() {
    console.log("modelloaded")
}
function gotposes(result) {
    if (result.length>0) {
        console.log(result)
        rightwristx=result[0].pose.rightWrist.x
        rightwristy=result[0].pose.rightWrist.y
        leftwristx=result[0].pose.leftWrist.x
        leftwristy=result[0].pose.leftWrist.y
        console.log("rightwristx "+rightwristx+"rightwristy "+rightwristy)
        console.log("leftwristx "+leftwristx+"leftwristy "+leftwristy)
    }
}
