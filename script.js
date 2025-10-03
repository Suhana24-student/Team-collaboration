document.addEventListener("DOMContentLoaded", function() {
  const readMoreBtn = document.getElementById("readMoreBtn");
  const fullText = document.querySelector(".full-text");

  readMoreBtn.addEventListener("click", function() {
    if (fullText.classList.contains("show")) {
      fullText.classList.remove("show");
      readMoreBtn.textContent = "Read More";
    } else {
      fullText.classList.add("show");
      readMoreBtn.textContent = "Read Less";
    }
  });
});
