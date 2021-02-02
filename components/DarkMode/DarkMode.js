

const _removeTheme = () => {
  localStorage.removeItem('theme');
  document.querySelector('body').classList.remove('dark-mode');
};

const _setTheme = () => {
  localStorage.setItem('theme', 'dark');
  document.querySelector('body').classList.add('dark-mode');
  btn.checked = true;
};

const _hasTheme = (btn) => {
  if (!localStorage.getItem('theme')) {
    _setTheme();
  } else if (localStorage.getItem('theme') && !btn.checked) {
    _setTheme();
  } else {
    _removeTheme()
  }
};

const setDarkTheme = () => {
  const themeBtn = document.querySelector('.button__list_elem .theme-checkbox');
  _hasTheme();
  themeBtn.addEventListener('input', () => _hasTheme(themeBtn));
}

export default setDarkTheme;
