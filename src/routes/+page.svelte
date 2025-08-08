<script lang="ts">
	import Calendar from '../components/calendar.svelte';
	import Letter from '../components/letter.svelte';
	import Rsvp from '../components/rsvp.svelte';
	import Cover from '../components/cover.svelte';
	import Location from '../components/location.svelte';
	import type { PageProps } from './$types';
	import Gallery from '../components/gallery.svelte';
	import AudioPlayer from '../components/audio-player.svelte';
	import { onMount } from 'svelte';

	let { form }: PageProps = $props();

	onMount(() => {
		const observerOptions = {
			threshold: 0.1,
			rootMargin: '0px 0px -50px 0px'
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('animate-in');
				}
			});
		}, observerOptions);

		const elements = document.querySelectorAll('.scroll-animate');
		elements.forEach((el) => observer.observe(el));

		return () => {
			elements.forEach((el) => observer.unobserve(el));
		};
	});
</script>

<Cover class="scroll-animate" />
<Letter class="scroll-animate" />
<Rsvp {form} class="scroll-animate" />
<Gallery class="scroll-animate" />
<Calendar class="scroll-animate" />
<Location class="scroll-animate" />
<AudioPlayer />

<style lang="scss">
	.scroll-animate {
		opacity: 0;
		transform: translateY(30px);
		transition: opacity 0.6s ease-out, transform 0.6s ease-out;

		&.animate-in {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
