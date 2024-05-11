const button = document.getElementById("btn");
const modal = document.getElementById("modal");
const close = document.getElementById("close");

button.addEventListener("click", function (e) {
  modal.style.display = "block";
});

close.addEventListener("click", function (e) {
  modal.style.display = "none";
});
