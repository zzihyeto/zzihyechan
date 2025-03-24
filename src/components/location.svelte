<script lang="ts">
	import locationTopWave from '$lib/assets/location-top-wave.svg';
	import locationDeco from '$lib/assets/location-deco.svg';
	import { _ } from 'svelte-i18n';
	import { localeStore } from '../i18n.svelte';
	import { Clipboard } from '@lucide/svelte';

	function copyAddress() {
		navigator.clipboard
			.writeText('108 Lamplighter, Irvine, CA 92620')
			.then(() => alert($_('location.address_copied')))
			.catch(() => null);
	}
</script>

<img src={locationTopWave} class="location-top-wave" alt="" />
<section class="location">
	<h2 class="title {localeStore.locale}">{$_('location.title')}</h2>
	<p class="venue en">Woodbury Community Center</p>
	{#if localeStore.isKr}
		<p class="venue kr">우드버리 커뮤니티 센터</p>
	{/if}
	<button class="copy-address en" onclick={copyAddress}>
		<span class="clipboard-icon">
			<Clipboard size="1.1em" />
		</span>
		<span class="address">108 Lamplighter, Irvine, CA 92620</span></button
	>
	<div class="map"></div>
	<p class="signature en">made with ♡ by Emily & Anthony</p>
	<img class="location-deco" src={locationDeco} alt="" />
</section>

<style lang="scss">
	img.location-top-wave {
		max-width: $content-max-width;
		margin: auto;
	}

	section.location {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		background-color: $bg-color-1;
		padding: 1em 2em 2em 2em;
	}

	h2.title {
		color: $primary-color;
		text-align: center;
		margin-bottom: 1em;

		&.kr {
			@extend .title-font-kr;
			letter-spacing: 1px;
		}

		&.en {
			@extend .title-font-en;
			letter-spacing: 1px;
		}
	}

	p.venue {
		&.kr {
			font-size: 1rem;
			font-weight: 500;
		}

		&.en {
			font-size: 1.2rem;
			font-weight: 600;
		}
	}

	button.copy-address {
		display: flex;
		align-items: center;
		margin-top: 0.5em;

		.clipboard-icon {
			height: 1em;
			display: inline-block;
			margin-right: 0.2em;
		}

		.address {
			display: inline-block;
			font-size: 1.2rem;
			text-decoration: underline;
		}
	}

	.map {
		margin-top: 1em;
		width: 100%;
		height: 16em;
		background-color: $gray-1;
		margin-bottom: 7em;
	}

	p.signature {
		font-size: 1rem;
	}

	img.location-deco {
		position: absolute;
		bottom: 2.4em;
		right: 1.3em;
	}
</style>
