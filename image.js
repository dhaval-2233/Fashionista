var imageSources = ["mbg1.jpg", "mbg2.jpg","mbg3.jpg"]

var index = 0;
setInterval (function(){
  if (index === imageSources.length) {
    index = 0;
  }
  document.getElementById("image").src = imageSources[index];
  index++;
} , 3000);