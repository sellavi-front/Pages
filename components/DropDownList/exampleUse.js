import DropDownList from "./DropDownList.js";

let arr = [
  {
    buttonTitle: "Test 1",
    description: "Hello"
  },
  {
    buttonTitle: "Test 2",
    description: "World"
  },
]



let test = new DropDownList(document.querySelector("body"), "afterbegin", arr)
test.render()