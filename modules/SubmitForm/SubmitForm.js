import {tags} from './utils/tags.js'
export default class SubmitForm {
  constructor(selector = '', params = tags) {
    this.params = params;
    this.selector = selector;
    this.tags = Object.entries(this.params);
    this.elements = [];
    this.parseElements();
  }

  getContent() {
    return Object.values(this.tags).map((tag) => tag[1].content);
  }

  getTagName() {
    return Object.values(this.tags).map((tag) => tag[1].name);
  }

  getTagAttr() {
    return Object.values(this.tags).map((tag) => tag[1].attributes);
  }

  parseAttr() {
    return this.getTagAttr().map((el) => Object.values(el).join(' '));
  }

  parseElements(name = 'input' || 'img') {
    return this.getTagName().map((el, i) => {
      if (el === name) {
        this.elements.push(`<${el} ${this.parseAttr()[i]}>`);
      } else {
        this.elements.push(`<${el} ${this.parseAttr()[i]}>${this.getContent()[i]}</${el}>`);
      }
    });
  }

  getElements() {
    console.log(this.parseElements);
  }

  getForm() {
    return `
    <form class="${this.selector}">
      <div class="${this.selector}__container">
        ${this.elements.join(' ')}
      </div>
    </form>
    `;
  }
}
