function changeImage() {
  var image = document.getElementById('guava');
  if (image.src.match("bite")) {
      image.src = "imgs/full.png";
  }
  else {
        image.src = "imgs/2-bites.png";
  }
}
