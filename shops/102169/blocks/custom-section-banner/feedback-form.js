import WhatsAppWidget from "../../../../components/WhatsAppWidget/wa-widget.js";



let sender = () => {
  let homeFormBtn = document.querySelector(".form__button")
  homeFormBtn.addEventListener("click", () => {
    let sender = null
    let homeFormName = document.querySelector(".form-grp__container>.form__input:nth-child(1)").value;
    let homeFormPhone = document.querySelector(".form-grp__container>.form__input:nth-child(2)").value;
    let arrHome = [homeFormName, homeFormPhone]
    sender = new WhatsAppWidget("79262547856", "Хочу стать дилером!", arrHome, "Расскажите подробнее, пожалуйста.")
    sender.sendWA()
  })
}

export default sender