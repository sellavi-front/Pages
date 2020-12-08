import WhatsAppWidget from "../../../components/WhatsAppWidget/wa-widget.js"

let sendComplexForm = () => {
  let sender = null
  let complexFormBtn = document.querySelector(".complex__submit__form__btn")
  let complexFormName = document.querySelector('[name="complex__form_name"]').value;
  let complexFormPhone = document.querySelector('[name="complex__form_phone"]').value;
  let complexFormEmail = document.querySelector('[name="complex__form_email"]').value;
  let complexFormSquare = document.querySelector('[name="complex__form_square"]').value;
  let complexFormCountSeats = document.querySelector('[name="complex__form_count_seats"]').value;
  let arrHome = [complexFormName, complexFormPhone, complexFormEmail, "площадь: " + complexFormSquare + "м2", "кол-во мест: " + complexFormCountSeats + " мест"]
  sender = new WhatsAppWidget(complexFormBtn, "79324247663", "Бесплатный расчет стоимости коммерческого предложения.", arrHome, "Расскажите подробнее, пожалуйста.")
  return sender
}

export default sendComplexForm