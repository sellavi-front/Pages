import WhatsAppWidget from "../../../components/WhatsAppWidget/wa-widget.js"

let homeFormBtn = document.querySelector(".banner__submit__form__btn")
let sendHomeForm = () => {
  homeFormBtn.addEventListener("click", () => {
    let homeFormName = document.querySelector('[name="home__from_name"]').value;
    let homeFormPhone = document.querySelector('[name="home__from_phone"]').value;
    let homeFormEmail = document.querySelector('[name="home__from_email"]').value;
    console.log(homeFormEmail, homeFormName, homeFormPhone)
  })
}

export default sendHomeForm