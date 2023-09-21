function volume_sphere() {
    //Write your code here
	const form = document.getElementById("MyForm");
const rad = document.getElementById("radius");
 
const vol = document.getElementById("volume");

const button = document.getElementById("submit");

button.addEventListener("click", ()=>{
  let volCircle = (4/3) * 3.14 * rad.value * rad.value * rad.value;
  vol.value = volCircle;
});
  
}

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
