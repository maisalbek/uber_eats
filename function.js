let buttons = document.querySelectorAll(".nav-link");
buttons.forEach((but) => {
  but.addEventListener("click", function () {
    buttons.forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");
  });
});
