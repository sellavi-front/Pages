export default class WhatsAppWidget {

  constructor(phoneNumber, titleMessage, dataFromInput, message) {
    console.log(phoneNumber, titleMessage, dataFromInput, message)
    this.phoneNumber = phoneNumber
    this.titleMessage = titleMessage
    this.dataFromInput = dataFromInput
    this.message = message
  }

  setTemplate = () => {
    window.open(`https://wa.me/${this.phoneNumber}?text=Здравствуйте!%20${this.titleMessage}%20Данные: ${this.dataFromInput}.%20${this.message}`, '_blank')
  }

  call = () => {
    this.setTemplate()
  }
}