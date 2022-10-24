const bar = document.querySelector(".bars");
const navItem = document.querySelector(".nav-items");

bar.addEventListener("click", () => {
  navItem.classList.toggle("active");
});
