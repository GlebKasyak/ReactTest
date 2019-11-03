﻿#  ReactTest

Это приложение, которое я создал, умеет показывать следующие страницы: 
 `/` - Главная
 `/login` - страница ввода логина и пароля
 `/posts` - страница постов
 `/profile` - страница недоступная без авторизации

На странице `/login`, осуществляется авторизация пользователя, путём проверки введённого (имени и пароля).
Если пользователь не авторизован и при этом пытается перейти на страницу `/profile`, его перенаправлят на страницу `/login`, для авторизации.
При успешной авторизации идёт перенаправление на страницу `/profile`(успешная авторизация: username: Admin, password: 123123).
Данные имени и пароля пользователя храняться в localstorage.
------------------------------------------------------------------------------------------------------------------------------------------

На страние `/posts` идёт запрос на https://jsonplaceholder.typicode.com/posts , для получения и обработки данных. 
Также на данной странице реализована "бесконечная прокрутка", при помощи библиотеки `react-infinite-scroll-component`.
------------------------------------------------------------------------------------------------------------------------------------------

### Используемые библиотеки
	
 -react-router-dom
 -bootstrap -v 4.3.1
 -react-infinite-scroll-component

### Установка приложения

Для запуска приложения сначала клонируйте репозиторий
```sh
git clone https://github.com/GlebKasyak/ReactTest.git
```

Установите все зависимости
```sh
npm install
```

### Запуск приложения

```sh
npm start
```


