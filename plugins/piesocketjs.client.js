export default ({ app }, inject) => {
  let piesocket;
  let piesocketConnected = false;
  let pieSocketTracker = 0;
  function formMessage() {
    return `${++pieSocketTracker}. Хочу работать в Гео Техно Сот!`;
  }
  inject("connectPieSocket", saveToStore => {
    if (piesocketConnected === false) {
      const clusterId = "us-nyc-1";
      const channelId = 1;
      const apiKey = "kZNNVdhuWCmup7DQQyZ5eHYJElbljH90YcDLawby";
      piesocket = new WebSocket(
        `wss://${clusterId}.websocket.me/v3/${channelId}?api_key=${apiKey}&notify_self`
      );
      // wss://us-nyc-1.websocket.me/v3/1?api_key=kZNNVdhuWCmup7DQQyZ5eHYJElbljH90YcDLawby&notify_self


      piesocket.onopen = function() {
        console.log("piesocket connected");
        piesocketConnected = true;
        piesocket.send(formMessage());
      };

      piesocket.onmessage = function(message) {
        saveToStore(message.data);
      };

      piesocket.onclose = function() {
        console.log("piesocket disconnected");
        piesocketConnected = false;
      };

      piesocket.onerror = function(error) {
        console.log("error", error);
      };
    } else {
      piesocket.send(formMessage());
    }
  });
};
