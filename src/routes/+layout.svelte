<script lang="ts">
	import '/src/styles/global.scss';
	import '/src/i18n.svelte.ts';
	import { localeStore } from '../i18n.svelte';

	let { children } = $props();
</script>

{#if !localeStore.isLoading && localeStore.locale}
	{@render children()}
{/if}

<style lang="scss">
</style>
