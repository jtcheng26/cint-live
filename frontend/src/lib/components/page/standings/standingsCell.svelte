<script lang="ts">
	export let className = '';
	export let left = false;
</script>

<div class="inline-block w-12 text-{left ? 'left' : 'center'} {className}">
	<slot />
</div>
