import { ref, reactive } from 'vue';

export type Page = 'home' | 'pre-start' | 'game' | 'result';
export const page = ref<Page>('home');

export const score = ref(0);

export const config = reactive({ //vuex stage
	wordPerMs: 3000,
	progressPerMs: 300
});