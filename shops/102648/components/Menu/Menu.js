let secondaryCategories = document.querySelectorAll(".mobile_side_nav_menu > li > .panel-collapse > .closed > li > a")
let secondCatArr = Array.from(secondaryCategories)
secondCatArr.map(item => {
  console.log(item)
})