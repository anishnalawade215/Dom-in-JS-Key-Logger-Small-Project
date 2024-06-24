const logdiv = document.getElementById("log");
const statediv = document.getElementById("state");
const startButton = document.getElementById("start-btn");
const stopButton = document.getElementById("stop-btn");


function handleDown(e){
    logdiv.textContent = `key ${e.key} pressed down`;
    statediv.textContent = "key is down";
    
}

function handleUp(e){
    logdiv.textContent = `key ${e.key} pressed up`;
    statediv.textContent = "key is up";
    
}

startButton.addEventListener("click",() => {
    document.addEventListener("keydown", handleDown)
    document.addEventListener("keyup", handleUp)
startButton.disabled=true;
stopButton.disabled=false;
});

stopButton.addEventListener("click", () => {
    document.removeEventListener("keydown", handleDown);
    document.removeEventListener("keyup", handleUp);
    logdiv.textContent = "";
    statediv.textContent =" ";
stopButton.disabled=true;
startButton.disabled=false;
});