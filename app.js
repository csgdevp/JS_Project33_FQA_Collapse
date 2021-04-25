const toogleBtns = document.querySelectorAll(".faq-toggle");

toogleBtns.forEach((toogleBtn) => {
  toogleBtn.addEventListener("click", () => {
    toogleBtn.parentNode.classList.toggle("active");
  });
});
