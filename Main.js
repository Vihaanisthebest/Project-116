noseX = 0;
noseY = 0; 
function preload()
{
    mustache = loadImage("https://i.postimg.cc/CxknpmQn/Mustache-removebg-preview.png")
}

function setup()
{
    canvas= createCanvas(350, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
}

function modelLoaded()
{
    console.log("PoseNet Is Intailized");
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
        console.log("nosy x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}

function draw()
{
    image(video, 0, 0, 350, 300);
    image(mustache, noseX-25, noseY-12, 52, 52);
}

function take_snapshot()
{
    save("Vihaan.png");
}