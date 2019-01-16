require('dotenv').config()
const translate = require('translate');
translate.engine = 'yandex';
translate.key = process.env.YANDEX_KEY;

// 'es' can be a language string or an object like { to: 'es' }
translate('Hello world', 'es').then(text => {
  console.log(text);  // Hola mundo
});

translate('Hello Matt, my name is Corey', 'it').then(text => {
  console.log(text)
})