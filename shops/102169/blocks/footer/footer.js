let socialLayout = `
    <li><h4 class="widget-title">Мы в соц. сетях</h4></li>
    <li class="social__li">
        <a href="https://www.instagram.com/_organic_stories_/" target="_blank"><img src="https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1607516742/sellavi/102169/Group_t9ghfm.png" alt="instagram"></a>
        <a target="_blank" onclick="window.open('https://wa.me/79150940619?text=Здравствуйте!%20Заинтересовала%20Ваша%20продукция.')"><img src="https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1607516743/sellavi/102169/Group_1_o2dhef.png" alt="wa"></a>
    </li>
`

let renderSocialLayoutFooter = () => {
  document.querySelector(".footer-widgets>.container>.row>div:nth-child(3)>.widget>ul>li:nth-child(3)").insertAdjacentHTML("afterend", socialLayout)
}

export default renderSocialLayoutFooter