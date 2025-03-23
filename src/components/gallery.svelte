<script lang="ts">
	import PhotoSwipeLightBox from 'photoswipe/lightbox';
	import PhotoSwipe from 'photoswipe';
	import 'photoswipe/style.css';
	import { onMount } from 'svelte';
	import { localeStore } from '../i18n.svelte';

	onMount(() => {
		const lightbox = new PhotoSwipeLightBox({
			gallery: '#gallery',
			children: 'a',
			pswpModule: PhotoSwipe
		});

		lightbox.init();
	});
</script>

<section class="gallery">
	<div id="gallery"></div>
</section>

<style lang="scss">
	section.gallery {
		border-top: 1px solid black;
		padding: 4.5em 3.5em;
	}
</style>
