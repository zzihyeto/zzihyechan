<script lang="ts">
	import coverImage from '$lib/assets/cover-image.jpg';
	import { _ } from 'svelte-i18n';
	import { localeStore } from '../i18n.svelte';
	import { browser } from '$app/environment';

	let sectionHeight = $state(600);

	function setSectionHeight() {
		sectionHeight = window.outerHeight;
		console.log(`setting sectionHeight: ${sectionHeight}`);
	}

	if (browser && window.matchMedia('(max-width: 1024px)')) {
		setSectionHeight();
	}
</script>

<section style:height={`${sectionHeight}px`} class="top-cover"></section>

<style lang="scss">
	section.top-cover {
		background-image: url('/src/lib/assets/cover-image.jpg');
		background-repeat: no-repeat;
		background-position: center center;
		background-size: cover;
		height: 100svh;
		width: 100%;
		font-size: 1.2rem;
	}
</style>
