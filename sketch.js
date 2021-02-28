var canvas;
var music;
var blueob;
var orangeob;
var pinkob;
var greenob;
var boxob;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    blueob=createSprite(0,580,360,30);
    blueob.shapeColor="blue";
    orangeob=createSprite(295,580,200,30);
    orangeob.shapeColor="orange"
    pinkob=createSprite(515,580,200,30);
    pinkob.shapeColor="pink";
    greenob=createSprite(740,580,220,30);
    greenob.shapeColor="green";

    //create box sprite and give velocity
    boxob = createSprite(random(20,750),100,20,20);
    boxob.velocityX = 4;
    boxob.velocityY=4;
    boxob.shapeColor="white";
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges= createEdgeSprites();
    boxob.bounceOff(edges);

    //add condition to check if box touching surface and make it box
    if(blueob.isTouching(boxob)){
        //change color here
        boxob.bounceOff(blueob)
        boxob.shapeColor = "blue";
    }
    if(orangeob.isTouching(boxob)){
        //change color here
        boxob.bounceOff(orangeob)
        boxob.shapeColor = "orange";
    }
    if(pinkob.isTouching(boxob)){
        //change color here
        boxob.bounceOff(pinkob)
        boxob.shapeColor = "pink";
    }
    if(greenob.isTouching(boxob)){
        //change color here
        boxob.bounceOff(greenob)
        boxob.shapeColor = "green";
    }
    drawSprites();
}
