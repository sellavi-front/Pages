/*Sticky and colorable header */
let elem = $('header.sticky_trigger');
let doc = $(document);
let scrolled = () => {
  let threshold = doc.scrollTop() > 50;
  elem.toggleClass('scrolled', threshold);
  if(document.querySelector("header").classList.contains("scrolled")) {
    document.querySelector("#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div > div.logo.navbar__block > div > button").style.cssText = "color: #333"
    document.querySelector("#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div > div.logo.navbar__block > a:nth-child(3)").style.cssText = "color: #333"
    document.querySelector("#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div > div.logo.navbar__block > a:nth-child(4)").style.cssText = "color: #333"
    document.querySelector("#search > button > i").style.cssText = "color: #333"
    document.querySelector("#cart").style.cssText = "color: #333"
    document.querySelector("#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div > div.logo.navbar__block > div > div").cssText = "color: #333"
    document.querySelector("#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div > div.logo.navbar__block > div > div > a:nth-child(1)").style.cssText = "color: #333"
    document.querySelector("#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div > div.logo.navbar__block > div > div > a:nth-child(2)").style.cssText = "color: #333"
    document.querySelector("#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div > div.logo.navbar__block > div > div > a:nth-child(3)").style.cssText = "color: #333"
    document.querySelector("#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div > div.logo.navbar__block > div > div").style.cssText = "background-color: #fff"
  } else {
    document.querySelector("#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div > div.logo.navbar__block > div > button").style.cssText = "color: #fff"
    document.querySelector("#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div > div.logo.navbar__block > a:nth-child(3)").style.cssText = "color: #fff"
    document.querySelector("#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div > div.logo.navbar__block > a:nth-child(4)").style.cssText = "color: #fff"
    document.querySelector("#search > button > i").style.cssText = "color: #fff"
    document.querySelector("#cart").style.cssText = "color: #fff"
    document.querySelector("#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div > div.logo.navbar__block > div > div").cssText = "color: #fff"
    document.querySelector("#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div > div.logo.navbar__block > div > div > a:nth-child(1)").style.cssText = "color: #fff"
    document.querySelector("#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div > div.logo.navbar__block > div > div > a:nth-child(2)").style.cssText = "color: #fff"
    document.querySelector("#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div > div.logo.navbar__block > div > div > a:nth-child(3)").style.cssText = "color: #fff"
    document.querySelector("#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div > div.logo.navbar__block > div > div").style.cssText = "background-color: transparent"
  }
}

let addScrolledHeader = () => {
  $(window).on({ scroll: scrolled })
}

export default addScrolledHeader
