let resetSizeBanner = () => {
  let newLink = "https://cdn.sellavi.com/image/upload/v1612257265/ru/clients/103094/165829d93913748820ec43abf3bb9fa35066a765.webp"
  document.querySelector("#banner0 > div > div > div > div > picture > source").setAttribute("srcset", newLink)
}

export default resetSizeBanner