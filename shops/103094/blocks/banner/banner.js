let resetSizeBanner = () => {
  let newLink = "https://cdn.sellavi.com/image/upload/v1612186757/ru/clients/103094/6b584576f338311db0e8a87b9cf5a8a8261e31e1.webp"
  document.querySelector("#banner0 > div > div > div > div > picture > source").setAttribute("srcset", newLink)
}

export default resetSizeBanner