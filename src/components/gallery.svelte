<script lang="ts">
	import PhotoSwipeLightBox from 'photoswipe/lightbox';
	import PhotoSwipe from 'photoswipe';
	import 'photoswipe/style.css';
	import { onMount } from 'svelte';
	import { localeStore } from '../i18n.svelte';
	import { _ } from 'svelte-i18n';

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
	<div class="header">
		<h2 class="title {localeStore.locale}">{$_('gallery.title')}</h2>
		<p class="sub-title {localeStore.locale}">{$_('gallery.sub_title')}</p>
	</div>
	<div id="gallery">
		<div class="ha"></div>
		<div class="ha"></div>
		<div class="ha"></div>
		<div class="ha"></div>
		<div class="ha"></div>
		<div class="ha"></div>
		<div class="ha"></div>
		<div class="ha"></div>
		<div class="ha"></div>
		<div class="ha"></div>
	</div>
</section>

<style lang="scss">
	section.gallery {
		padding: 4.5em 2em 2em 2em;
		background-color: $white;
	}

	.header {
		margin-bottom: 2em;
	}

	h2.title {
		text-align: center;
		&.en {
			@extend .title-font-en;
			letter-spacing: 1px;
		}

		&.kr {
			@extend .title-font-kr;
			letter-spacing: 1px;
		}
	}

	p.sub-title {
		text-align: center;
		&.kr {
			margin-top: 0.9em;
			font-size: 0.9rem;
		}

		&.en {
			margin-top: 0.5em;
			font-size: 1.2rem;
		}
	}

	#gallery {
		display: grid;
		gap: 1em;
		grid-template-columns: repeat(2, 1fr);
		grid-auto-rows: 6.5em;
	}

	.ha {
		border-radius: 4px;
		background-color: $font-color-light;
	}

	.ha:nth-child(1),
	.ha:nth-child(2),
	.ha:nth-child(3),
	.ha:nth-child(5),
	.ha:nth-child(7),
	.ha:nth-child(8),
	.ha:nth-child(9),
	.ha:nth-child(10) {
		grid-row: span 2;
	}
</style>
