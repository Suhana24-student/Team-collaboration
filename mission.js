function toggleMore(element) {
  let dots = element.previousElementSibling.previousElementSibling;
  let moreText = element.previousElementSibling;

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    moreText.style.display = "none";
    element.textContent = "more";
  } else {
    dots.style.display = "none";
    moreText.style.display = "inline";
    element.textContent = "less";
  }
}
