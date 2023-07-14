// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init () {

const takeOffButton = document.getElementById("takeoff");
const landButton = document.getElementById("landing");
const missionAbortButton = document.getElementById("missionAbort");
const upButton = document.getElementById("up");
const downButton = document.getElementById("down");
const rightButton = document.getElementById("right");
const leftButton = document.getElementById("left");
const flightStatusParagraph = document.getElementById("flightStatus");
const shuttleBacground = document.getElementById("shuttleBackground");
const shuttleHeightParagraph = document.getElementById("spaceShuttleHeight");

let shuttleAlt = Number(shuttleHeightParagraph.innerHTML);
let shuttleImage = document.getElementById('rocket')


shuttleImage.style.position = 'absolute'
shuttleImage.style.left = '100px'
shuttleImage.style.bottom = '1px'

takeOffButton.addEventListener('click',function(){
    let takeOffResponse = window.confirm('Confirm that the shuttle is ready for takeoff.');

    if (takeOffResponse) {
        flightStatusParagraph.innerHTML = "Shuttle in flight." ;
        shuttleBacground.style.backgroundColor = 'blue';
       
        shuttleAlt += 10000;
        shuttleHeightParagraph.innerHTML = shuttleAlt;
    };
});

landButton.addEventListener('click', function(){
    window.alert('The shuttle is landing. Landing gear engaged.');
    flightStatusParagraph.innerHTML = "The shuttle has landed.";
    shuttleBacground.style.backgroundColor = "green";
    shuttleAlt = 0;
    shuttleHeightParagraph.innerHTML = shuttleAlt;
});


missionAbortButton.addEventListener('click', function(){
    let abortConfirm = window.confirm("Confirm that you want to abort the mission.")

    if (abortConfirm){
        flightStatusParagraph.innerHTML = 'Mission aborted.';
        shuttleBacground.style.backgroundColor = 'green';
        shuttleAlt = 0;
        shuttleHeightParagraph.innerHTML = shuttleAlt;
    }

});



upButton.addEventListener('click', function(){
    let up = parseInt(shuttleImage.style.bottom);
    shuttleAlt += 10000;
    shuttleHeightParagraph.innerHTML = shuttleAlt;
    shuttleImage.style.bottom = (up += 10) + 'px'
});

downButton.addEventListener('click', function(){
    let down = parseInt(shuttleImage.style.bottom);
    shuttleAlt -= 10000;
    shuttleHeightParagraph.innerHTML = shuttleAlt;
    shuttleImage.style.bottom = (down -= 10) + 'px'

});

leftButton.addEventListener('click', function(){
    let left = parseInt(shuttleImage.style.left);
    shuttleImage.style.left = (left -= 10) + "px"
   
});
rightButton.addEventListener('click', function(){
    let right = parseInt(shuttleImage.style.left);
    shuttleImage.style.left = (right += 10) + "px"
   
});















}

window.addEventListener("load", init);