let resetSizeBanner = () => {
  let newLink = "https://res.cloudinary.com/dtqqfmyqb/image/upload/v1614602083/Component_1_19_ofb8eg.png"
  document.querySelector("#banner0 > div > div > div > div > picture > source").setAttribute("srcset", newLink)
}

export default resetSizeBanner