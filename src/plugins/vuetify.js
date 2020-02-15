import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: colors.cyan.darken2,
        secondary: colors.amber.accent1,
        accent: colors.cyan.accent3,
        error: colors.red.accent3,
        anchor: colors.yellow.accent3
      }
    }
  }
});
