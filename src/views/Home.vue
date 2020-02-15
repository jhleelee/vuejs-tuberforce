<template>
  <div class="home">
    <v-select :items="items" label="Outlined style" outlined></v-select>

    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div class="flex-container">
      <div class="flex-item">F</div>
      <div class="flex-item">L</div>
      <div class="flex-item">E</div>
      <div class="flex-item">X</div>
      <div class="flex-item">B</div>
      <div class="flex-item">O</div>
      <div class="flex-item">X</div>
    </div>
    <v-btn small color="primary">Normal</v-btn>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  data: () => ({
    items: ["Foo", "Bar", "Fizz", "Buzz"]
  }),
  components: {
    HelloWorld
  }
};
</script>

<style lang="scss">
.flex-container {
  display: flex;
  flex-direction: row; /* 기본값 */ /* flex-direction: row | row-reverse | column | column-reverse */
  justify-content: flex-start; /* 기본값 */ /* justify-content: flex-start | center | flex-end | space-between | space-around | space-evenly */
}
</style>
