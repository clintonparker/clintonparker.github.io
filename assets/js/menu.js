document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".menu-toggle");
  const menuItems = document.querySelector(".menu-items");

  toggleButton.addEventListener("click", function () {
    menuItems.classList.toggle("show");
  });
});
