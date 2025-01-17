<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { localeStore } from '../i18n.svelte';
	import { browser } from '$app/environment';

	const maxSectionHeight = 1000;
	let sectionHeight = $state(750);

	function setSectionHeight() {
		sectionHeight = window.outerHeight < maxSectionHeight ? window.outerHeight : maxSectionHeight;
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
	}
</style>
