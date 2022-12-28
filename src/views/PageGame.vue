<script setup lang="ts">
import { ref, watch } from 'vue';
import { faker } from '@faker-js/faker';
import { sample } from 'lodash';
import { config, page, score } from '../store/game';

interface WordItem {
	word: string;
	progress: number;
}

const words = ref<WordItem[]>([]);


setInterval(() => {
	const select = sample([
		'adjective',
		'adverb',
		'conjunction',
		'interjection',
		'noun',
		'preposition',
		'verb',
	]) as 'adjective' | 'adverb' | 'conjunction' | 'interjection' | 'noun' | 'preposition' | 'verb';
	const word = faker.word[select]();
	const currentIdx = words.value.length;

	words.value.push({
		word,
		progress: 0
	});

	const currentWord = words.value[currentIdx];

	const interval = setInterval(() => {
		if (currentWord) {
			currentWord.progress += 1;
		} else {
			clearInterval(interval);
		}
	}, config.progressPerMs);
}, config.wordPerMs);

const wordInput = ref('');
function onTyped() {
	const correctWordCount = words.value.filter(item => item.word === wordInput.value).length;
	score.value += correctWordCount <= 0 ? -1 : correctWordCount;
	words.value = words.value.filter(item => item.word !== wordInput.value);
	wordInput.value = '';
}

watch(words, (newValue) => {
	const shouldGameOver = newValue.some(item => item.progress >= 100);
	if (shouldGameOver) {
		page.value = 'result';
	}
}, { deep: true })

</script>

<template>
	<h1>SCORE : {{ score }}</h1>
	<form @submit.prevent="onTyped">
		<div style="display:flex">
			<input type="text" v-model="wordInput" style="flex-grow: 1;">
		</div>
		<button style="display: none;"></button>
	</form>
	<pre>{{ words }}</pre>
</template>

<style scoped>
input {
	padding: 0.5rem;
	font-size: 1.5rem;
}
</style>