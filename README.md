# Lravel-React

Для запуска проекта неоходимо:
- Установить пакеты
```sd
$ composer install
$ npm install
```
- Настроить файл .env для подключения к БД
```sd
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=
```
- Запускаем миграции и сиды
```sd
$ php artisan migrate
$ php artisan db:seed
```
- В файле `\resources\js\config.js` прописываем путь к API, например
```sd
api: 'http://127.0.0.1:8000/api/'
```
- Запускаем проект
```sd
$ php artisan serve
```