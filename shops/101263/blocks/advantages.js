import AdvantagesTypeTwo from "../../../components/AdvantagesTypeTwo/AdvantagesTypeTwo.js"
import {adv} from "../utils/advantages-object.js"

export default class Advantages {
  render() {
    let afterBanner = document.querySelector("#home > div.wrapper.wrapper-closed > div.content-area > section.page-section.latest-section > div")
    let advantages = new AdvantagesTypeTwo(afterBanner, adv)
    advantages.render()
  }

}