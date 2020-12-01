import DeleteElements from '../../modules/DeleteElements/DeleteElements.js';

export default class CopyMenu {
  constructor(...styles) {
    this.styles = styles;
    this.menuList = document.querySelectorAll('.navigate-menu>li');
    this.newMenuList = document.querySelectorAll('.mobile_side_nav_menu>li');
    this.arrows = document.querySelectorAll('.navigate-menu > li > .arrow');

    this.removeArrows = new DeleteElements(this.arrows);
    this.removeArrows.remove();
  }

  _arrowRemove() {
    this.arrows.forEach((el) => el.remove());
  }

  _onHover(item) {
      item.addEventListener('mouseenter', (el) => {
        el.querySelector('.panel-collapse').style.cssText =
          `display: block; background: ${this.styles.bgOnHover};`;
      });

      item.addEventListener('mouseleave', (el) => {
        el.querySelector('.panel-collapse').style.cssText = `display: none; background: ${this.styles.bgOnLeave};`;
      });
  }

  forEachItem() {
    this.menuList.forEach((item) => this._onHover(item));
  }
}

