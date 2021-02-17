let secondaryCategories = document.querySelectorAll(".mobile_side_nav_menu > li > .panel-collapse > .closed > li > a")
let secondCatArr = Array.from(secondaryCategories)
for (let i = 0; i < secondCatArr.length; i++) {
  let c = secondCatArr[i].innerHTML.replace('-', '');
  secondCatArr[i].innerHTML = c;
}
