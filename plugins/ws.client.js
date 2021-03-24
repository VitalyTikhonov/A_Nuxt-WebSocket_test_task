export default ({ app }, inject) => {
  let ws;
  let webSocketOrgConnected = false;
  let webSocketOrgTracker = 0;
  function formMessage() {
    return `${++webSocketOrgTracker}. Люблю JS!`;
  }
  inject("connectWebSocketOrg", saveToStore => {
    if (webSocketOrgConnected === false) {
      ws = new WebSocket("wss://echo.websocket.org/");

      ws.onopen = function open() {
        console.log("webSocketOrg connected");
        webSocketOrgConnected = true;
        ws.send(formMessage());
      };

      ws.onmessage = function(message) {
        saveToStore(message.data);
      };

      ws.onclose = function close() {
        console.log("webSocketOrg disconnected");
        webSocketOrgConnected = false;
      };
    } else {
      ws.send(formMessage());
    }
  });
};
