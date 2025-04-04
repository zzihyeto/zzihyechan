<script lang="ts">
	import '/src/styles/global.scss';
	import '/src/i18n.svelte.ts';
	import { localeStore } from '../i18n.svelte';
	import { onMount } from 'svelte';
	import { _ } from 'svelte-i18n';

	let { children } = $props();

	onMount(() => {
		document.body.classList.add('loaded');
	});
</script>

<svelte:head>
	<title>Emily and Anthony's Wedding Day</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Noto+Serif+KR:wght@200..900&family=Sacramento&display=swap"
	/>
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
	/>
	<meta property="og:title" content={$_('meta.title')} />
	<!-- <meta property="og:description" content="You're invited to our most special day!" />
  <meta property="og:image" content={image} />
  <meta property="og:type" content="website" /> -->
</svelte:head>

{#if !localeStore.isLoading && localeStore.locale}
	{@render children()}
{/if}

<style lang="scss">
</style>
