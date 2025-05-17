window.onload = function(){
 sad.pause()
 bat2.pause()
}

document.addEventListener('DOMContentLoaded', function(){
//load all the data before the html is loaded

navigator.mediaDevices.getUserMedia({ video: true }).then(stream => stream.getTracks().forEach(track => track.stop()));


let buttons = document.getElementById("buttons")
let coolbutton = document.getElementById("coolbutton")
let wait = document.getElementById("wait")
let jumpscare = document.getElementById("jumpscare")
let sadSong = document.getElementById("sadSong")
let same = document.getElementById("same")

buttons.addEventListener("click", function(){

sad.play()
wait.textContent="okay wait lang"
setTimeout(()=>{
sana.textContent="sana miss ka din nya" 
},2000);
setTimeout(()=>{
secQFunc();
},5500);
})

function secQFunc(){
 firQ.style.display="none"
 secQ.style.display="block"
}

yes.addEventListener("click", function(){
secQ.style.display="none"
thiQ.style.display="block"
jumpscare.play()
bat2.play()
same.classList.add("show")

setInterval(()=>{
console.log("flashlight on")
navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: "environment",
            torch: true
          }
        });
setInterval(()=>{
console.log("flashlight off")
navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: "environment",
            torch: false
          }
        });
},500);
},1000);


})









document.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", () => {
    bat.play()
  });
});

})