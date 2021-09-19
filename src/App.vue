<template>
  <div id="nav">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";

export default {
  components: {
    AppHeader,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  font-family: "Nunito Sans", sans-serif;
}
</style>
