const menuList = document.querySelector(".navBarMenuList");
const menu = document.querySelector(".navBarMenu");

menuList.addEventListener("click", () => {
    menu.classList.toggle("active");
});
