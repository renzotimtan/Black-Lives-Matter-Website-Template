const menuList = document.querySelectorAll("#menu a li");
const input = document.querySelector("#menuToggle input");

for (let i = 0; i < menuList.length; i++) {
  menuList[i].addEventListener("click", function () {
    input.checked = false;
  });
}
