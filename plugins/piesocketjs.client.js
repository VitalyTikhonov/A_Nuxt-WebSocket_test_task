import Vue from "vue";
import PieSocket from "piesocket-js";

export default ({ app }, inject) => {
  let channel;
  let piesocketConnected = false;
  let pieSocketTracker = 0;
  function formMessage() {
    return `${++pieSocketTracker}. Хочу работать в Гео Техно Сот!`;
  }
  inject("connectPieSocket", saveToStore => {
    if (piesocketConnected === false) {
      const piesocket = new PieSocket({
        clusterId: "us-nyc-1",
        apiKey: "kZNNVdhuWCmup7DQQyZ5eHYJElbljH90YcDLawby"
      });

      const channelId = 1;
      channel = piesocket.subscribe(channelId);

      channel.on("open", () => {
        console.log("piesocket connected");
        piesocketConnected = true;
        channel.connection.send(formMessage());
      });

      channel.on("message", message => {
        console.log("message.data", message.data);
        saveToStore(message.data);
      });

      channel.on("close", () => {
        console.log("piesocket disconnected");
        piesocketConnected = false;
      });
    } else {
      channel.connection.send(formMessage());
    }
  });
};
