<script lang="ts">
	import { currentPage } from '$lib/data/stores/currentPage';
	import { brand } from '$lib/data/stores/userInfo';
	import Home from 'svelte-material-icons/Home.svelte';
	import Poll from 'svelte-material-icons/Poll.svelte';
	import CodeTags from 'svelte-material-icons/CodeTags.svelte';

	export let to = '/';
	export let tabId = '';

	let selected = false;
	$: selected = tabId === $currentPage;
</script>

<a href={to} on:click={() => currentPage.set(tabId)} class="group">
	<div
		class="flex items-center no-underline text-gray-300 bg-{$brand} bg-opacity-0 px-2 py-1 max-w-full rounded-md text-base font-medium font-body transition-colors {!selected &&
			'hover'} {selected && 'bg-opacity-0'}"
	>
		{#if tabId === 'home'}
			<span class="mr-2"><Home width="20" height="20" /></span>
		{:else if tabId === 'standings'}
			<span class="mr-2"><Poll width="20" height="20" /></span>
		{:else if tabId === 'challenges'}
			<span class="mr-2"><CodeTags width="20" height="20" /></span>
		{/if}
		<span class="max-w-10 overflow-hidden overflow-ellipsis whitespace-nowrap">
			<slot />
		</span>
	</div>
	<div
		class="h-2 bg-{$brand} {selected
			? 'w-full'
			: 'w-0'} group-hover:w-full rounded-full transition-width"
	/>
</a>
