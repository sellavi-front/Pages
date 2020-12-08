export default class WhatsAppWidget {

  constructor(phoneNumber, titleMessage, dataFromInput, message) {
    console.log(phoneNumber, titleMessage, dataFromInput, message)
    this.phoneNumber = phoneNumber
    this.titleMessage = titleMessage
    this.dataFromInput = dataFromInput
    this.message = message
  }

  setTemplate = () => {
    return 123
  }

  call = () => {
    this.setTemplate()
  }
}