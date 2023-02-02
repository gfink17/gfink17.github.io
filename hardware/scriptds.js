/* Place your JavaScript in this file */

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption

var img2  = document.getElementById("myImg2");
var img3  = document.getElementById("myImg3");
var img4  = document.getElementById("myImg4");
var img5  = document.getElementById("myImg5");
var img6  = document.getElementById("myImg6");
var img7  = document.getElementById("myImg7");
var img8  = document.getElementById("myImg8");
var img9  = document.getElementById("myImg9");
var img0  = document.getElementById("myImg0");
var img11 = document.getElementById("myImg11");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

modal.onclick = function() {
  modal.style.display = "none";
}

img2.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "cpu.jpg";
  captionText.innerHTML = this.alt;
}
img3.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "gpu.jpg";
  captionText.innerHTML = this.alt;
}
img4.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "motherboard.jpg";
  captionText.innerHTML = this.alt;
}
img5.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "keyboard.jpg";
  captionText.innerHTML = this.alt;
}
img6.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "mouse.jpg";
  captionText.innerHTML = this.alt;
}
img7.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "monitor.jpg";
  captionText.innerHTML = this.alt;
}
img8.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "ram.jpg";
  captionText.innerHTML = this.alt;
}
img9.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "storage.jpg";
  captionText.innerHTML = this.alt;
}
img0.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "modem.jpg";
  captionText.innerHTML = this.alt;
}
img11.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "drives.jpg";
  captionText.innerHTML = this.alt;
}
