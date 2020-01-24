//sir sorry ang messy na naman ng code HAHAHAHAHHAHA
var b1 = document.getElementById("rock");
var b2 = document.getElementById("paper");
var b3 = document.getElementById("scissors");
var uscore = document.getElementById("uscore"),count1 = 0;
var escore = document.getElementById("escore"),count2 = 0;
var uimg = document.getElementById("umove");
var eimg = document.getElementById("emove");
var mine = ["1.png", "2.png", "3.png"];
var comp = ["a.png", "b.png", "c.png"];
var x;
var y;
b1.addEventListener("click", ComputerMove);
b1.addEventListener("click", Rock);
b1.addEventListener("click", Tezt);

b2.addEventListener("click", ComputerMove);
b2.addEventListener("click", Paper);
b2.addEventListener("click", Tezt);

b3.addEventListener("click", ComputerMove);
b3.addEventListener("click", Scissors);
b3.addEventListener("click", Tezt);

function Rock() {
    uimg.src = mine[0]
    x = 0
}

function Paper() {
    uimg.src = mine[1]
    x = 1
}

function Scissors() {
    uimg.src = mine[2]
    x = 2
}

function cwin() {
    var notif = document.getElementById("notif").innerHTML = "Computer Wins";
    count2 += 1;
    escore.innerHTML = count2;
}
function uwin() {
    var notif = document.getElementById("notif").innerHTML = "User Wins";
    count1 += 1;
    uscore.innerHTML = count1;
}
function draw() {
    var notif = document.getElementById("notif").innerHTML = "Draw";
}

function ComputerMove() {
    var rMove = Math.floor(Math.random() * comp.length) + 0;
    eimg.src = comp[rMove];
    if (rMove == 0) {
        y = 0;
    }
    else if (rMove == 1) {
        y = 1;
    }
    else if (rMove == 2) {
        y = 2;
    }
}

function Tezt() {
    var element = document.getElementById("umove");
    element.classList.toggle("drop");
    var element2 = document.getElementById("emove");
    element2.classList.toggle("drop");
    if (x == 0){
        if (y == 1){
            cwin()
        }
        else if (y == 2){
            uwin()
        }
        else{
            draw()
        }
    }
    if (x == 1){
        if (y == 2){
            cwin()
        }
        else if (y == 0){
            uwin()
        }
        else{
            draw()
        }
    }
    if (x == 2){
        if (y == 0){
            cwin()
        }
        else if (y == 1){
            uwin()
        }
        else{
            draw()
        }
    }   
}