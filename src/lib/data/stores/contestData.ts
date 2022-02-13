import type { ContestData } from 'src/types';
import { writable, derived } from 'svelte/store';

export const contestData = writable<ContestData>({} as ContestData);

export const problemNames = derived(contestData, ($contestData) => {
	return $contestData.Problems || [];
});

export const problemPages = derived(contestData, ($contestData) => {
	return $contestData.ProblemPages || {};
});

export const contestInfo = derived(contestData, ($contestData) => {
	return $contestData.Info || {};
});

export const contestLanguages = derived(contestData, ($contestData) => {
	return $contestData.Languages || [];
});

export const startTime = derived(contestData, ($contestData) => {
	return $contestData.StartTime ? new Date($contestData.StartTime) : new Date();
});

export const stopTime = derived(contestData, ($contestData) => {
	return $contestData.StopTime ? new Date($contestData.StopTime) : new Date();
});
