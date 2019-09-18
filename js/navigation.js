function myFunction() {
  var x = document.getElementById("myLinks");
    var y = document.getElementById("icon");
  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.backgroundColor = "#276d75";
  } else {
    x.style.display = "block";
      y.style.backgroundColor = "#276d75";
  }
}