<script setup lang="ts">
import PagePreStart from './views/PagePreStart.vue';
import PageHome from './views/PageHome.vue';
import PageGame from './views/PageGame.vue';
import PageResult from './views/PageResult.vue';
import { page } from './store/game';

</script>

<template>
  <div class="container">
    <PageHome v-if="page === 'home'" />
    <PagePreStart v-if="page === 'pre-start'" />
    <PageGame v-if="page === 'game'" />
    <PageResult v-if="page === 'result'" />
  </div>
</template>

<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}



.container {
  padding: 1rem;
}

.center {
  text-align: center;
}
</style>