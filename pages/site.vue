<template>
  <v-row justify="center">
    <v-expansion-panels accordion>
      <v-expansion-panel v-for="(item, i) in items" :key="i">
        <v-expansion-panel-header>{{ item.title }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <iframe class="site-frame" :src="item.src"></iframe>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "PieSocket",
          src: "https://www.piesocket.com/websocket-tester"
        },
        {
          title: "websocket.org",
          src: "https://www.websocket.org/echo.html"
        }
      ]
    };
  }
};
</script>

<style>
.site-frame {
  width: 100%;
  height: 70vh;
  margin-left: auto;
  margin-right: auto;
}
</style>
