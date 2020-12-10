import WhatsAppWidget from "../../../../components/WhatsAppWidget/wa-widget.js";

let sendHomeForm = () => {
  let sender = null
  let homeFormName = document.querySelector(".__container>.form__input:nth-child(1)").value;
  let homeFormPhone = document.querySelector(".__container>.form__input:nth-child(2)").value;
  let arrHome = [homeFormName, homeFormPhone]
  sender = new WhatsAppWidget("79150940619", "Хочу стать дилером!", arrHome, "Расскажите подробнее, пожалуйста.")
  return sender
}

let sender = () => {
  let homeFormBtn = document.querySelector(".form__button")
  homeFormBtn.addEventListener("click", () => {
    console.log(sendHomeForm())
  })
}

export default sender