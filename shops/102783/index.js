import '../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js'
import '../../fixes/js/ButtonContainerInProductCard/ButtonContainerInProductCard.js'
import '../../fixes/js/RemoveBlur/RemoveBlur.js'

import Requisites from '../../modules/Requisites/Requisites.js'
import {requsites, dataContact } from './utils/requsites.js'
import '../../fixes/js/TranslateAboutUs/TranslateAboutUs.js'
/*import '../../fixes/js/FooterCopy/FooterCopy.js'*/
import renderContactsInCustomSection from "./blocks/contacts/contacts.js"


document.querySelector("body").insertAdjacentHTML("afterbegin", `
  <div class="custom-preloader">
      <span>
        <img src="https://ru.sellavi.com/assets/images/logo.svg"/>
    </span>
  </div>
`)

setTimeout(function() {
  /*window.addEventListener("load", function () {*/
    const preloader = document.querySelector(".custom-preloader");
    preloader.className += " hidden";
  /*});*/
}, 2000)

if (location.href.includes('term-of-use')) {
  const req = new Requisites(requsites, 'beforeend', 'ИП "Кучма Виктория Геннадьевна"')
  req.setTemplate()
}

document.querySelector("#home > div > footer > div.footer-widgets > div.container > div > div:nth-child(1) > div > h4").innerHTML = "О нас"

if (location.href.includes('contact')) {
  const media = document.querySelector('.contact-info > .media-list > .media:last-child')

  const req = new Requisites(requsites, 'afterend', 'ИП "Кучма Виктория Геннадьевна"', media)
  req.setTemplate()
}


if (location.href.includes('policy')) {
  const req = new Requisites(
    requsites,
    'afterend',
    'ИП "Кучма Виктория Геннадьевна"',

    document.querySelector('#content > div > div'),
  )
  req.setTemplate()
}

if (location.href.includes('pay-delivery')) {
  const req = new Requisites(
    requsites,
    'afterend',
    'ИП "Кучма Виктория Геннадьевна"',
    document.querySelector('#content > div > div'),
    dataContact,
  )
  req.setTemplate()
}

renderContactsInCustomSection()