const darkMode = () => {
  const themeBtn = document.querySelector('header .theme-checkbox');

  if (!themeBtn.checked) {
    console.log('Тема не применена');
  }

  themeBtn.addEventListener('click', () => {
    if (localStorage.getItem('theme') !== 'dark' && localStorage.getItem('theme')) {
      localStorage.setItem('theme', 'dark');
      localStorage.setItem('theme-checkbox', 'checked');
    } else {
      themeBtn.checked = true;
      localStorage.removeItem('theme');
    }
  });
}

export default darkMode;