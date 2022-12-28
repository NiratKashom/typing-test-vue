<script setup lang="ts">
import { score, page } from '../store/game';
import EditConfig from './EditConfig.vue';

function onGameStart() {
	score.value = 0;
	page.value = 'pre-start';
}
</script>

<template>
	<EditConfig></EditConfig>
	<button @click="onGameStart">
		<slot>Start Game</slot>
	</button>
</template>

<style scoped>
button {
	padding: 0.5rem 1rem;
	font-size: 1.1rem;
}
</style>