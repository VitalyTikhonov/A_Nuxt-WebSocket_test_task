import Vue from "vue";
import WS from "ws";

export default ({ app }, inject) => {
  let ws;
  let webSocketOrgConnected = false;
  let webSocketOrgTracker = 0;
  function formMessage() {
    return `${++webSocketOrgTracker}. Люблю JS!`;
  }
  inject("connectWebSocketOrg", saveToStore => {
    if (webSocketOrgConnected === false) {
      ws = new WS("wss://echo.websocket.org/", {
        origin: "https://websocket.org"
      });

      ws.on("open", function open() {
        console.log("webSocketOrg connected");
        webSocketOrgConnected = true;
        ws.send(formMessage());
      });

      ws.on("message", function incoming(data) {
        // console.log("data", data);
        saveToStore(data);
      });

      ws.on("close", function close() {
        console.log("piesocket disconnected");
        webSocketOrgConnected = false;
      });
    } else {
      ws.send(formMessage());
    }
  });
};
