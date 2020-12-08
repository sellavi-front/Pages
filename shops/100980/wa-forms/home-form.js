import WhatsAppWidget from "../../../components/WhatsAppWidget/wa-widget.js"

let sendHomeForm = () => {
    let homeFormName = document.querySelector('[name="home__from_name"]').value;
    let homeFormPhone = document.querySelector('[name="home__from_phone"]').value;
    let homeFormEmail = document.querySelector('[name="home__from_email"]').value;
    let arrHome = [homeFormName, homeFormPhone, homeFormEmail]
    let sender = new WhatsAppWidget("79324247663", "Детальный план реализации проекта:", arrHome, "Расскажите поподробнее, пожалуйста.")
    sender.call()
}

export default sendHomeForm