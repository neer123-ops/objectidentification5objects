function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

img = "";

function preload() {
    img = loadImage('books.jpeg');
}
 function draw() {
     image(img, 0, 0 , 640, 420);
     fill('#FF0000');
     text("BOOKS", 45, 75);
     noFill();
     stroke("#FF0000");
     rect(30, 60, 450, 350 );
 }

 function goback() {
    window.location = "index.html";
}