<template>
  <div>
    <v-card
      class="mx-auto"
      max-width="360"
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
  computed: {
    echo() {
      return this.$store.getters["getEcho"];
    }
  }
};
</script>
