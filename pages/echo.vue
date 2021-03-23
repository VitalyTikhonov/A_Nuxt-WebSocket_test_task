<template>
  <div>
    <v-card
      class="mx-auto"
      max-width="344"
      v-for="(item, index) in echo"
      :key="index"
    >
      <v-card-title>
        {{ item }}
      </v-card-title>
    </v-card>
  </div>
</template>
<script>
export default {
  head: {
    title: "Тест – В. Тихонов"
  },
  // beforeMount() {
  //   this.$store.dispatch("queryPieSocket");
  //   this.$store.dispatch("queryWebSocketOrg");
  // },
  async fetch({ store, route }) {
    await store.dispatch('queryPieSocket');
    await store.dispatch('queryWebSocketOrg');
  },
  computed: {
    echo() {
      return this.$store.getters["getEcho"];
    }
  }
};
</script>
