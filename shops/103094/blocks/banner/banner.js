let resetSizeBanner = () => {
  let newLink = "https://cdn.sellavi.com/image/upload/v1612349974/ru/clients/103094/71b24d86245d92e4b65b7c49fa8142c0a77bf550.webp"
  document.querySelector("#banner0 > div > div > div > div > picture > source").setAttribute("srcset", newLink)
}

export default resetSizeBanner