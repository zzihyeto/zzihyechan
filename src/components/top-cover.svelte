<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { localeStore } from '../i18n.svelte';
	import { browser } from '$app/environment';
	import { Confetti } from 'svelte-confetti';

	const maxSectionHeight = 900;
	let sectionHeight = $state(maxSectionHeight);

	function setSectionHeight() {
		sectionHeight = window.innerHeight < maxSectionHeight ? window.innerHeight : maxSectionHeight;
		console.log(`setting sectionHeight: ${sectionHeight}`);
	}

	if (browser && window.matchMedia('(max-width: 1024px)')) {
		setSectionHeight();
	}
</script>

<section style:height={`${sectionHeight}px`} class="top-cover">
	<div class="confetti-area">
		<Confetti
			x={[-5, 5]}
			y={[0, 0.1]}
			delay={[500, 2000]}
			infinite
			duration={5000}
			amount={70}
			fallDistance={`${sectionHeight}px`}
		/>
	</div>

	<div class="our-names-kr-box">
		<span class="our-names kr">박건희</span>
		<span class="our-names kr">그리고</span>
		<span class="our-names kr">피아영</span>
	</div>

	<div class="our-names-en-box">
		<span class="our-names en-sacramento">Anthony & Emily</span>
	</div>

	<div class="event-date-and-place-box">
		{#if localeStore.isKr}
			<span class="event-date-and-time kr">2025년 6월 7일 (토) 4시</span>
			<span class="event-place kr">Irvine, CA</span>
		{:else}
			<span class="event-date-and-time en">6.7.2025 Sat 4:00 pm</span>
			<span class="event-place en">Irvine, CA</span>
		{/if}
	</div>
</section>

<style lang="scss">
	section.top-cover {
		position: relative;
		background-image: url('/src/lib/assets/cover-image.jpg');
		background-repeat: no-repeat;
		background-position: center center;
		background-size: cover;
	}
	.confetti-area {
		position: absolute;
		top: -50px;
		left: 0;
		height: 100vh;
		width: 100vw;
		overflow: hidden;
		pointer-events: none;
	}
	.our-names-kr-box {
		position: absolute;
		top: 5%;
		left: 15%;

		span.our-names {
			font-size: 1.7rem;
			display: block;
			letter-spacing: 1rem;
			line-height: 3rem;
		}
	}

	.our-names-en-box {
		width: 100%;
		position: absolute;
		bottom: 17%;
		display: flex;
		justify-content: center;

		span.our-names {
			display: block;
			color: $white;
			font-size: 3.4rem;
			word-spacing: 0.5rem;
		}
	}

	.event-date-and-place-box {
		width: 100%;
		position: absolute;
		bottom: 7%;
		display: flex;
		flex-direction: column;
		align-items: center;

		span.event-date-and-time,
		span.event-place {
			display: block;
			color: $white;

			&.kr {
				font-size: 1.4rem;
			}

			&.en {
				font-size: 2rem;
			}
		}
	}
</style>
