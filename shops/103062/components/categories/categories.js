let fixCategories = () => {
  document.querySelector("#home > div > div.content-area > section > div > div > div:nth-child(1) > div > div > a > picture > img").setAttribute("src", "https://cdn.sellavi.com/image/upload/ru/clients/103062/c83ae92794c00af6d4103a65f731cb01381b6835.jpg")
  document.querySelector("#home > div > div.content-area > section > div > div > div:nth-child(2) > div > div > a > picture > img").setAttribute("src", "https://cdn.sellavi.com/image/upload/ru/clients/103062/6aa122b875e287c26e941abb67d188136f4d7143.jpg")
  document.querySelector("#home > div > div.content-area > section > div > div > div:nth-child(2) > div > div > a > div").remove()
  document.querySelector("#home > div > div.content-area > section > div > div > div:nth-child(1) > div > div > a > div").remove()
}

export default fixCategories