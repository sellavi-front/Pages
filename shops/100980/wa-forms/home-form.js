import WhatsAppWidget from "../../../components/WhatsAppWidget/wa-widget.js"

let sendHomeForm = () => {
    let homeFormName = document.querySelector('[name="home__form_name"]').value;
    let homeFormPhone = document.querySelector('[name="home__form_phone"]').value;
    let homeFormEmail = document.querySelector('[name="home__form_email"]').value;
    let arrHome = [homeFormName, homeFormPhone, homeFormEmail]

    let sender = new WhatsAppWidget("79324247663", "Детальный план реализации проекта", arrHome, "Расскажите подробнее, пожалуйста.")
    return sender
}

export default sendHomeForm