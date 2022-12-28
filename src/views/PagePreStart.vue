<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { page } from '../store/game';


const countDown = ref(3);
let interval: number;

onMounted(() => {
	interval = setInterval(() => {
		countDown.value--;
		if (countDown.value <= 0) {
			clearInterval(interval);
			page.value = 'game';
		}
	}, 1000);
})

</script>

<template>
	<h1>Game start in {{ countDown }}</h1>

</template>