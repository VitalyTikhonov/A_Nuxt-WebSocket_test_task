# GEO_TECHNO_SOT_test_task
Тестовое задание для компании "Гео Техно Сот". SSR-приложение на Nuxt.js (Vue) с использованием Vuetify. Основной функционал – тестовое подключение к websocket-серверам piesocket.com и www.websocket.org с отображением результатов на странице.

A test task for a job at GEO TECHNO SOT. An SSR app on Nuxt.js (Vue) with Vuetify. The principal functionality is test connection to the websocket servers [piesocket.com](piesocket.com) and [www.websocket.org](www.websocket.org) and display of the results on the page.

#### Используемые технологии // Technologies Used
- Nuxt.js
– websockets
- Vuetify

#### Инструкции по запуску // Launch Instruction
Для запуска кода необходимо:
- скачать его и распаковать;
- выполнить установку зависимостей командой _npm install_;
- зарегистрироваться на сайте [www.piesocket.com](www.piesocket.com) и в разделе _/settings/dashboard_ получить актуальные _clusterId_ и _apiKey_, после чего обновить их в файле _\plugins\piesocketjs.client.js_ (актуальность имеющихся в проекте не гарантируется);
- запустить проект командой _npm run dev_;
- протестировать проект, переходя между страницами _/_, _/echo_ и _/site_.

To launch the program:
- download and unpack it;
- run _npm install_ to install all the dependencies;
- sign up at [www.piesocket.com](www.piesocket.com), go to _/settings/dashboard_ and get your _clusterId_ and _apiKey_, then use them to update the corresponding variables in the project's _\plugins\piesocketjs.client.js_ (the current values are not guaranteed to work);
- start the project with _npm run dev_;
- test the project by visiting _/_, _/echo_ and _/site_.
