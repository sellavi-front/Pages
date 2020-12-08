import WhatsAppWidget from "https://coospir.github.io/Pages/components/WhatsAppWidget/wa-widget.js"
let sendHomeForm = () => {
    let sender = null
    let homeFormName = document.querySelector('#home > div > div > section > div:nth-child(4) > div > form > div > input:nth-child(1)').value;
    let homeFormPhone = document.querySelector('#home > div > div > section > div:nth-child(4) > div > form > div > input:nth-child(2)').value;
    // let homeFormEmail = document.querySelector('[name="home__form_email"]').value;
    let arrHome = [homeFormName, homeFormPhone]
    console.log(arrHome);
    sender = new WhatsAppWidget("79178434344", "Консультация.", arrHome, "////")
    return sender
}

export default sendHomeForm