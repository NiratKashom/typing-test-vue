<script setup lang="ts">
import { config } from '../store/game';

</script>

<template>
	<div>
		<div>Word Per Millisecond: {{ config.wordPerMs }}</div>
		<input v-model="config.wordPerMs" type="range" min="100" max="5000" step="100">
	</div>

	<div>
		<div>Progress Per Millisecond: {{ config.progressPerMs }}</div>
		<input v-model="config.progressPerMs" type="range" min="100" max="1000" step="100">
	</div>
</template>