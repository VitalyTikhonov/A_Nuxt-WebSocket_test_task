# A_Nuxt_&_WebSocket_test_task
Тестовое задание на Nuxt и WebSocket. SSR-приложение на Nuxt.js (Vue) с использованием Vuetify. Основной функционал – тестовое подключение к websocket-серверам [piesocket.com](https://www.piesocket.com/) и [websocket.org](https://www.websocket.org) с отображением результатов на странице.

A Nuxt & WebSocket test task. An SSR app on Nuxt.js (Vue) with Vuetify. The principal functionality is test connection to the websocket servers [piesocket.com](https://www.piesocket.com/) and [websocket.org](https://www.websocket.org) and display of the results on the page.

#### Используемые технологии // Technologies Used
- Nuxt.js
- websockets
- Vuetify

#### Инструкции по запуску // Launch Instruction
Для запуска кода необходимо:
- скачать его и распаковать;
- выполнить установку зависимостей командой _npm install_;
- зарегистрироваться на сайте [piesocket.com](https://www.piesocket.com) и в разделе _/settings/dashboard_ получить актуальные _clusterId_ и _apiKey_, после чего обновить их в файле _\plugins\piesocketjs.client.js_ (актуальность имеющихся в проекте не гарантируется);
- запустить проект командой _npm run dev_;
- протестировать проект, переходя между главной страницей и роутами _/echo_ и _/site_.

To launch the program:
- download and unpack it;
- run _npm install_ to install all the dependencies;
- sign up at [piesocket.com](https://www.piesocket.com), go to _/settings/dashboard_ and get your _clusterId_ and _apiKey_, then use them to update the corresponding variables in the project's _\plugins\piesocketjs.client.js_ (the current values are not guaranteed to work);
- start the project with _npm run dev_;
- test the project by visiting the home page, _/echo_ and _/site_.
..
