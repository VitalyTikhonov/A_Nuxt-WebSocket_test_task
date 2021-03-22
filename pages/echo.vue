<template>
  <div>
    <p v-for="(item, index) in echo" :key="index">{{ item }}</p>
    <!-- <v-card
      class="mx-auto"
      max-width="344"
      v-for="(item, index) in echo"
      :key="index"
    >
      <v-card-title>
        {{ item }}
      </v-card-title>
    </v-card> -->
  </div>
</template>
<script>
export default {
  head: {
    title: "Тест – В. Тихонов"
  },
  beforeMount() {
    this.$store.dispatch("queryPieSocket");
  },
  computed: {
    echo() {
      return this.$store.getters["echo/getEcho"];
    }
  }
};
</script>
