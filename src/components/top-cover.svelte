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

	<div class="event-date-and-place-box" class:kr-locale={localeStore.isKr}>
		{#if localeStore.isKr}
			<span class="event-date-and-time kr">2025년 6월 7일 (토) 4시</span>
			<span class="event-place kr">Irvine, California</span>
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
			display: block;

			@include for-range($mobile-sm) {
				font-size: 15px;
				letter-spacing: 10px;
				line-height: 30px;
			}

			@include for-range($mobile-md) {
				font-size: 16px;
				letter-spacing: 12px;
				line-height: 32px;
			}

			@include for-range($mobile-lg) {
				font-size: 18px;
				letter-spacing: 14px;
				line-height: 34px;
			}
		}
	}

	.our-names-en-box {
		width: 100%;
		position: absolute;
		bottom: 12%;
		display: flex;
		justify-content: center;

		@include for-range($mobile-sm) {
			bottom: 13%;
		}

		@include for-range($mobile-md) {
			bottom: 12%;
		}

		@include for-range($mobile-lg) {
			bottom: 11%;
		}

		span.our-names {
			display: block;
			color: $white;
			word-spacing: 5px;

			@include for-range($mobile-sm) {
				font-size: 34px;
			}

			@include for-range($mobile-md) {
				font-size: 36px;
			}

			@include for-range($mobile-lg) {
				font-size: 40px;
			}
		}
	}

	.event-date-and-place-box {
		width: 100%;
		position: absolute;
		bottom: 3%;
		display: flex;
		flex-direction: column;
		align-items: center;

		span.event-date-and-time,
		span.event-place {
			display: block;
			color: $white;

			&.kr {
				@include for-range($mobile-sm) {
					font-size: 15px;
				}

				@include for-range($mobile-md) {
					font-size: 16px;
				}

				@include for-range($mobile-lg) {
					font-size: 17px;
				}
			}

			&.en {
				@include for-range($mobile-sm) {
					font-size: 20px;
				}

				@include for-range($mobile-md) {
					font-size: 21px;
				}

				@include for-range($mobile-lg) {
					font-size: 22px;
				}
			}
		}

		span.event-date-and-time.kr {
			margin-bottom: 4px;
		}
	}
</style>
