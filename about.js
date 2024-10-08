//ABOUT_PAGE-hiding and revealing faqs
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".faqbtn").forEach((button) => {
    button.addEventListener("click", () => {
      const faqans = button.parentElement.nextElementSibling;
      if (faqans.style.display === "block") {
        faqans.style.display = "none";
        button.classList.remove("active");
      } else {
        faqans.style.display = "block";
        button.classList.add("active");
      }
    });
  });
});
