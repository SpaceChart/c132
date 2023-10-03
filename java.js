objectDetector = "";

img = "";
objects = "";
status = "";

function preload() {
    img = loadImage('dog_cat.jpg');
}
function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Estatus: Detectando objetos";
}
function modelLoaded() {
    console.log("¡Modelo Cargado")
    status = true;
    objectDetector.detec(img, gotResult);
}
function gotResult(error, results) {

    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}
function draw() {
    
}