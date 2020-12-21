export default class ChangeAgreement {
  constructor() {
    this.checkbox = document.querySelector('.checkbox>label');
  }

  change() {
    this.checkbox.textContent = '';
    this.checkbox.insertAdjacentHTML(
      'beforeend',
      `Согласен (-а) с условиями <a href="/term-of-use/" style="text-decoration: none !important;"><b>Публичной оферты</b></a>`,
    );
  }
}

if (location.href.includes('/checkout')) {
  const newChange = new ChangeAgreement();
  newChange.change();
}


	Cookie = {
    'set': function(name, value, timeout, path) {
	      // цвет фона 24 часа хранится в Cookie
	      var timeout = timeout || 1000*3600*24;
	      var date = (new Date((new Date()).getTime() + timeout)).toUTCString();
	        document.cookie = name + '=' + encodeURIComponent( value );
            expires = ' + date + ';
            path = (path || '/');
	    },
	// метод для считывания определенного параметра из куков
	  'get': function(name) {
	    name = name || null
	    var cookieVars = document.cookie.split(/; /)
	    for( var i in cookieVars) {
	      var cookie = cookieVars[i].split('=')
	      if( name == cookie[0] ) return decodeURIComponent(cookie[1]);
	    }
	  }
	};

	 function CSSThemeChanger( url ){
	var url = url || '';
	var head = document.getElementsByTagName('head')[0];
	var myCSSTheme = document.getElementById('myCSSTheme') || null;
	// создаем и добавляем элемент стилей на страницу
	 if( !myCSSTheme )
	{
	myCSSTheme = document.createElement('link');
	myCSSTheme.id = 'myCSSTheme';
	myCSSTheme.rel = 'stylesheet';
	myCSSTheme.media = 'all';
	head.appendChild( myCSSTheme );

	}
	// устанавливаем текущую тему (указанный адрес CSS-файла)
	myCSSTheme.href = url;
	// записываем значение выбранного фона в Cookie
	Cookie.set('theme', url);
	}
	// обновляем тему страницы, если пользователь заменил фон
	CSSThemeChanger( Cookie.get('theme') );