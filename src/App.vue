<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center" justify="center">
        <!-- <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        /> -->

        <v-btn href="http://tuberforce.com" target="_blank" text>
          <span class="title font-weight-bold	">TuberForce</span>
        </v-btn>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <MostPopularVideos />
    </v-content>
  </v-app>
</template>

<script>
import MostPopularVideos from "./components/MostPopularVideos";

export default {
  name: "App",

  components: {
    MostPopularVideos
  },

  data: () => ({
    items: ["Foo", "Bar", "Fizz", "Buzz"]
  })
  // methods: {
  //   track() {
  //     this.$ga.page("/");
  //   }
  // }
};
</script>
