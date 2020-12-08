import WhatsAppWidget from "../../../components/WhatsAppWidget/wa-widget.js"

let sendComplexForm = () => {
  let complexFormName = document.querySelector('[name="complex__form_name"]').value;
  let complexFormPhone = document.querySelector('[name="complex__form_phone"]').value;
  let complexFormEmail = document.querySelector('[name="complex__form_email"]').value;
  let complexFormSquare = document.querySelector('[name="complex__form_square"]').value;
  let complexFormCountSeats = document.querySelector('[name="complex__form_count_seats"]').value;
  let arrHome = [complexFormName, complexFormPhone, complexFormEmail, "площадь: " + complexFormSquare + "м3", "кол-во мест: " + complexFormCountSeats + " мест"]
  let sender = new WhatsAppWidget("79324247663", "Расчет стоимости коммерческого предложения", arrHome, "Расскажите подробнее, пожалуйста.")
  sender.call()
}

export default sendComplexForm