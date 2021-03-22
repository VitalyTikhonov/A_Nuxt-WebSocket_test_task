export const state = () => ({
  echo: []
});

export const mutations = {
  setState(state, newValue) {
    state.echo.push(newValue);
  }
};

export const actions = {
  queryPieSocket(state) {
    const piesocket = new WebSocket(
      `wss://demo.websocket.me/v3/1?api_key=Bn2tRlu7XP7qrbNB0VbhpDDojC1HXbfJRj1Jb8XV&notify_self`
    );

    piesocket.onopen = function() {
      piesocket.send("Хочу работать в Гео Техно Сот!");
    };

    piesocket.onmessage = function(message) {
      const payload = message.data;
      console.log("payload", payload);
      return state.commit("setState", payload);
    };
  },

  queryWebSocketOrg() {
    const wsUri = "wss://echo.websocket.org/";
    let output;

    const websocket = new WebSocket(wsUri);
    websocket.onopen = function(evt) {
      websocket.send("Обожаю программировать!");
    };

    websocket.onclose = function(evt) {
      onClose(evt);
    };
    websocket.onmessage = function(evt) {
      onMessage(evt);
    };
    websocket.onerror = function(evt) {
      onError(evt);
    };

    function onOpen(evt) {
      writeToScreen("CONNECTED");
      doSend("WebSocket rocks");
    }

    function onClose(evt) {
      writeToScreen("DISCONNECTED");
    }

    function onMessage(evt) {
      writeToScreen(
        '<span style="color: blue;">RESPONSE: ' + evt.data + "</span>"
      );
      websocket.close();
    }

    function onError(evt) {
      writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data);
    }

    function doSend(message) {
      writeToScreen("SENT: " + message);
    }
  }
};

export const getters = {
  getEcho(state) {
    return state.echo;
  }
};
