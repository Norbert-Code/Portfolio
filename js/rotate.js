var circle = document.getElementById("circle");
var upBtn = document.getElementById("upBtn");
var downBtn = document.getElementById("downBtn");
var first = document.getElementById("first");
var second = document.getElementById("second");
var third = document.getElementById("third");
var fourth = document.getElementById("fourth");
var about = document.getElementById("about");
var experience = document.getElementById("experience");
var education = document.getElementById("education");
var skills = document.getElementById("skills");

var rotateValue = circle.style.transform;
var rotatSum;
var rotat=0;

about.onclick = function(){
    rotat=0;
    rotateSum = "rotate(360deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
    opacity(rotat);
}
experience.onclick = function(){
    rotat=90;
    rotateSum = "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
    opacity(rotat);
}
education.onclick = function(){
    rotat=180;
    rotateSum = "rotate(180deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
    opacity(rotat);  
}
skills.onclick = function(){
    rotat=270;
    rotateSum = "rotate(270deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
    opacity(rotat);  
}
upBtn.onclick = function(){
    rotat=rotat-90;
    if(rotat%360==0){
        rotat=0;
    }
    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
    opacity(rotat);
}
downBtn.onclick = function(){
    rotat=rotat+90;
    if(rotat%360==0){
        rotat=0;
    }
    rotateSum = rotateValue + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
    opacity(rotat);

}
function opacity(rotat){
    if(rotat==0){
        first.style.color="white";
        second.style.color="transparent";
        third.style.color="transparent";
        fourth.style.color="transparent";
    }else if(rotat==-270 || rotat==90){
        first.style.color="transparent";
        second.style.color="white";
        third.style.color="transparent";
        fourth.style.color="transparent";
    }else if(rotat==-180 || rotat==180){
        first.style.color="transparent";
        second.style.color="transparent";
        third.style.color="white";
        fourth.style.color="transparent";
    }else if(rotat==-90 || rotat==270){
        first.style.color="transparent";
        second.style.color="transparent";
        third.style.color="transparent";
        fourth.style.color="white";
        fourth.classList.add("line","anim-typewriter");
    }    
}