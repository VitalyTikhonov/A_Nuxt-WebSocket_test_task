import Vue from "vue";
import PieSocket from "piesocket-js";

export default ({ app }, inject) => {
  let piesocket;
  let pieSocketTracker = 0;
  inject("connectPieSocket", (saveToStore) => {
    piesocket = new PieSocket({
      clusterId: "us-nyc-1",
      apiKey: "kZNNVdhuWCmup7DQQyZ5eHYJElbljH90YcDLawby"
    });
    const channelId = 1;
    const channel = piesocket.subscribe(channelId);
    channel.on("open", () => {
      console.log("piesocket connected");
      channel.connection.send(
        `${++pieSocketTracker}. Хочу работать в Гео Техно Сот!`
      );
    });
    channel.on("message", message => {
      // state.commit("setState", message.data);
      // console.log("message", message);
      console.log("message.data", message.data);
      saveToStore(message.data);
    });
    channel.on("close", () => console.log("piesocket disconnected"));
    // console.log("this.$store", this.$store);
    // console.log("channel", channel);
  });

  // inject("messagePieSocket", () => {
  //   channel.send(`${++pieSocketTracker}. Хочу работать в Гео Техно Сот!`);
  // })

  // Vue.use(
  //   new PieSocket({
  //     clusterId: "us-nyc-1",
  //     apiKey: "kZNNVdhuWCmup7DQQyZ5eHYJElbljH90YcDLawby"
  //   })
  // );
  // const channelId = 1;
  // const channel = piesocket.subscribe(channelId);
  // channel.on("open", () => console.log("piesocket connected"));
  // channel.on("message", message => state.commit("setState", message.data));
  // channel.on("close", () => console.log("piesocket disconnected"));
};
