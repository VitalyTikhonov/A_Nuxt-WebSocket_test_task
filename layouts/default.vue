<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" :clipped="clipped" fixed app>
      <v-list>
        <v-list-item
          v-for="(item, i) in clickHandlingRoutes"
          :key="item.title + i"
          :to="item.to"
          @click.stop="connectSockets"
          router
          exact
        >
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          v-for="(item, i) in plainRoutes"
          :key="item.title + i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar fixed :clipped-left="clipped" app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-toolbar-title v-text="title" />

      <v-spacer />
    </v-app-bar>

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: true,
      drawer: true,
      items: [
        {
          title: "echo",
          to: "/echo"
        },
        {
          title: "site",
          to: "/site"
        }
      ],
      title: "Тестовое задание Виталия Тихонова"
    };
  },
  methods: {
    connectSockets() {
      this.$connectPieSocket(message => {
        this.$store.dispatch("queryPieSocket", message);
      });
      this.$connectWebSocketOrg(message => {
        this.$store.dispatch("queryPieSocket", message);
      });
    }
  },
  computed: {
    clickHandlingRoutes() {
      return this.items.filter(item => item.title === "echo");
    },
    plainRoutes() {
      return this.items.filter(item => item.title !== "echo");
    }
  }
};
</script>
