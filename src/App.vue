<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'

const route =useRoute();
</script>

<template>
  <v-app>
    <RouterView></RouterView>
  </v-app>
</template>

<style>
.v-col::-webkit-scrollbar {
  width: 0px !important;
  display: none !important;
  background: transparent; /* make scrollbar transparent */
}
::-webkit-scrollbar {
  height: 0;
  width: 0;
  display: none;
}
::-webkit-scrollbar-thumb {
  display: none;
}
</style>
