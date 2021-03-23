
export const state = () => ({
  echo: []
});

export const mutations = {
  setState(state, newValue) {
    state.echo.push(newValue);
  }
};

// let pieSocketTracker = 0;
// let webSocketOrgTracker = 0;
// const piesocket = new WebSocket(
//   `wss://us-nyc-1.websocket.me/v3/1?api_key=kZNNVdhuWCmup7DQQyZ5eHYJElbljH90YcDLawby&notify_self`
// );
// piesocket.onopen = function() {
//   console.log("onopen");
// };
// piesocket.onmessage = function(message) {
//   console.log("message", message);
//   return state.commit("setState", message.data);
// };
// piesocket.onclose = function() {
//   console.log("onclose");
// };

///////////////
// const websocket = new WebSocket("wss://echo.websocket.org/");
// websocket.onclose = function(evt) {
//   state.commit("setState", "WebSocketOrg отключено");
// };
// websocket.onmessage = function(evt) {
//   state.commit("setState", evt.data);
// };
// websocket.onerror = function(evt) {
//   state.commit("setState", evt.data);
// };

export const actions = {
  queryPieSocket(state, message) {
    state.commit("setState", message);
    // channel.send(`${++pieSocketTracker}. Хочу работать в Гео Техно Сот!`);
    // piesocket.send(`${++pieSocketTracker}. Хочу работать в Гео Техно Сот!`);
    // this.$messagePieSocket();
  }

  // queryWebSocketOrg(state) {
  //   websocket.send(`${++webSocketOrgTracker}. Обожаю программировать!`);
  // }
};

export const getters = {
  getEcho(state) {
    return state.echo;
  }
};
