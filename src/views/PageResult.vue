<script setup lang="ts">
import ButtonStartGame from '../components/ButtonStartGame.vue';
import { score } from '../store/game';
</script>

<template>
	<h1>Result: {{ score }}</h1>
	<ButtonStartGame>Restart Game</ButtonStartGame>
</template>

