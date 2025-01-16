<script lang="ts">
	import coverImage from '$lib/assets/cover-image.jpg';
	import { _ } from 'svelte-i18n';
	import { localeStore } from '../i18n.svelte';
	import { browser } from '$app/environment';

	let sectionHeight = $state(0);

	function setSectionHeight() {
		sectionHeight = window.innerHeight;
		console.log(`setting sectionHeight: ${sectionHeight}`);
	}

	if (browser && window.matchMedia('(max-width: 1024px)')) {
		setSectionHeight();
	}
</script>

<section style:height={`${sectionHeight}px`} class="top-cover">
	<div class="top">
		<img
			class="cover-image"
			style:height={`${sectionHeight * 0.8}px`}
			src={coverImage}
			alt="Wedding cover"
		/>
		<div class="vertical-text-container">
			<div class="korean-text-container">
				{#if localeStore.isKr}
					<span class="getting-married-kr kr">결혼합니다</span>
				{:else}
					<span class="getting-married-en">We're getting married</span>
				{/if}
			</div>
		</div>
	</div>
	<div class="bottom">
		<div class="description kr">
			<div class="names">
				<p>신랑 박건희</p>
				<p>신부 피아영</p>
			</div>
			<div class="time-location">
				<p>2025년 6월 7일 (토) 4시</p>
				<p>Irvine, CA</p>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	section.top-cover {
		height: 100svh;
		width: 100%;
		background-color: $white;
		font-size: 1.2rem;
	}

	.top {
		display: grid;
		grid-template-columns: 8.5fr 1.5fr;
	}

	.cover-image {
		height: 84svh;
		width: auto;
		object-fit: cover;
	}

	.vertical-text-container {
		padding-top: 3.6rem;

		.korean-text-container {
			width: 100%;
			display: flex;
			justify-content: center;
		}
	}

	.getting-married-kr {
		writing-mode: vertical-lr;
		text-orientation: upright;
		letter-spacing: 1.8rem;
		font-size: 1.8rem;
	}

	.getting-married-en {
		letter-spacing: 0.3rem;
		word-spacing: 1rem;
		font-size: 1.8rem;
		writing-mode: vertical-rl;
		text-orientation: mixed;
	}

	.description {
		display: flex;
		justify-content: space-between;
		width: 100%;
		padding: 32px 16px;
		font-size: 1.5rem;

		.names,
		.time-location {
			display: flex;
			flex-direction: column;
			row-gap: 4px;
		}
	}
</style>
