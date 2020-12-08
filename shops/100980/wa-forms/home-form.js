import WhatsAppWidget from "../../../components/WhatsAppWidget/wa-widget.js"

let sendHomeForm = () => {
    let homeFormBtn = document.querySelector(".banner__submit__form__btn")
    console.log(homeFormBtn)
    let homeFormName = document.querySelector('[name="home__form_name"]').value;
    let homeFormPhone = document.querySelector('[name="home__form_phone"]').value;
    let homeFormEmail = document.querySelector('[name="home__form_email"]').value;
    let arrHome = [homeFormName, homeFormPhone, homeFormEmail]

    let sender = new WhatsAppWidget(homeFormBtn, "79324247663", "Детальный план реализации проекта", arrHome, "Расскажите подробнее, пожалуйста.")
    sender.call()
}

export default sendHomeForm