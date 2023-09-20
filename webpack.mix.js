const mix = require('laravel-mix');

mix.js('resources/js/bootstrap.js', 'public/js')
    .js('resources/js/app.js', 'public/js').vue()
    .postCss('resources/css/loginRegister.css', 'public/css');
