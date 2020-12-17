let socialLayout = `
    <li class="social__li"><h4 class="widget-title">Мы в соц. сетях</h4></li>
    <li>
        <a href="#"><img src="https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1607516742/sellavi/102169/Group_t9ghfm.png" alt="instagram"></a>
        <a href="#"><img src="https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1607516743/sellavi/102169/Group_1_o2dhef.png" alt="wa"></a>
    </li>
`

let renderSocialLayoutFooter = () => {
  document.querySelector(".footer-widgets>.container>.row>div:nth-child(3)>.widget>ul>li:nth-child(3)").insertAdjacentHTML("afterend", socialLayout)
}

export default renderSocialLayoutFooter