function mouseEnter(eyeID) {
    document.getElementById(eyeID).style.backgroundColor = "white"
}

function mouseLeave(eyeID) {
    document.getElementById(eyeID).style.backgroundColor = "black"
}

for (let i = 1; i <= 25; i++) {
    let eyeID = "e" + i;
    document.getElementById(eyeID).addEventListener("mouseenter",
        function() {mouseEnter(eyeID);});
    document.getElementById(eyeID).addEventListener("mouseleave",
        function() {mouseLeave(eyeID);});
}

document.addEventListener('mouseleave', function() {
    for (let i = 1; i <= 25; i++) {
        document.getElementById("e" + i).style.backgroundColor = "white";
    }
});
document.addEventListener('mouseenter', function() {
    for (let i = 1; i <= 25; i++) {
        document.getElementById("e" + i).style.backgroundColor = "black";
    }
});