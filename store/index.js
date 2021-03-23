
export const state = () => ({
  echo: []
});

export const mutations = {
  setState(state, newValue) {
    state.echo.push(newValue);
  }
};

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
