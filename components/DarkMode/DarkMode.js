const themeBtn = document.querySelector('.button__list_elem .theme-checkbox');
const body = document.querySelector('body');

const _removeTheme = () => {
  localStorage.removeItem('theme');
  body.classList.remove('dark-mode');
};

const _setTheme = () => {
  localStorage.setItem('theme', 'dark');
  body.classList.add('dark-mode');
};

const _hasTheme = () => {
  if (!themeBtn.checked && localStorage.getItem('theme') === 'dark') {
    _setTheme();
    themeBtn.checked = true;
  } else {
    _removeTheme()
  }
};

const setDarkTheme = () => {
  themeBtn.addEventListener('click', () => _hasTheme());
}

export default setDarkTheme;
