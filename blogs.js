//BLOG_PAGE-loading more blogs
const loadmorebtn = document.getElementById("loadmorebtn");
loadmorebtn.addEventListener("click", () => {
  const moreblog = document.getElementsByClassName("loadmore");
  Array.from(moreblog).forEach((blog) => {
    blog.style.display = "block";
  });
  loadmorebtn.style.display = "none";
});
