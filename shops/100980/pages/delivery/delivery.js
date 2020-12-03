import contentOptimizer from "../contentOptimizer.js"
import DropDownList from "../../../../components/DropDownList/DropDownList.js";
import deliveryTemplate from "./accordionTemplates/delivery/delivery.js"
import paymentTemplate from "./accordionTemplates/payment/payment.js"
import rulesTemplate from "./accordionTemplates/rulesOfReturn/rulesOfReturn.js";


let DropDown = [
  {
    buttonTitle: "Доставка",
    description: deliveryTemplate
  },
  {
    buttonTitle: "Оплата",
    description: paymentTemplate
  },
  {
    buttonTitle: "Оплата",
    description: rulesTemplate
  },
]



let test = new DropDownList(DropDown)
let container = test.render()
console.log(container)

let sectionTitles = document.querySelector(".page-section.titles")
let information = document.querySelector(".page-section.color.information")


let renderDeliveryTemplate = () => {
  contentOptimizer(container, sectionTitles, information)
}

export default renderDeliveryTemplate