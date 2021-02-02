const _removeTheme = () => {
  localStorage.removeItem('theme');
  document.querySelector('body').classList.remove('dark-mode');
};

const _setTheme = (btn) => {
  localStorage.setItem('theme', 'dark');
  document.querySelector('body').classList.add('dark-mode');
  btn.checked = true;
};

const _hasTheme = (btn) => {
  if (!localStorage.getItem('theme')) {
    _setTheme(btn);
  } else if (
    localStorage.getItem('theme') &&
    !document.querySelector('body').classList.contains('dark-mode')
  ) {
    _setTheme(btn);
  } else {
    _removeTheme();
  }
};

const setDarkTheme = () => {
  const themeBtn = document.querySelector('.button__list_elem .theme-checkbox');
  _hasTheme();
  themeBtn.addEventListener('input', () => _hasTheme(themeBtn));
};

export default setDarkTheme;
