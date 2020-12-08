import WhatsAppWidget from "../../../components/WhatsAppWidget/wa-widget.js"

let sendHomeForm = () => {
    let homeFormName = document.querySelector('[name="home__from_name"]').value;
    let homeFormPhone = document.querySelector('[name="home__from_phone"]').value;
    let homeFormEmail = document.querySelector('[name="home__from_email"]').value;
    let arrHome = [homeFormName, homeFormPhone, homeFormEmail]
    let sender = new WhatsAppWidget("89850646080", "HELLO WORLD", arrHome, "WORLD!!!")
    sender.call()
}

export default sendHomeForm