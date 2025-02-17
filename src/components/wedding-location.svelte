<script lang="ts">
	import waveSectionCover from '$lib/assets/location-wave-top.svg';
	let venueAddress: HTMLElement;

	const copyVenueAddress = (event: Event) => {
		event?.preventDefault();

		const addressText = venueAddress.textContent;
		if (addressText) {
			navigator.clipboard
				.writeText(addressText)
				.then(() => alert('Copied the address :)'))
				.catch((error) => console.log('error'));
		}
	};
</script>

<section class="wedding-location en">
	<img src={waveSectionCover} class="wave-cover-top-img" />
	<h2 class="location-heading">Location</h2>

	<div class="location en">
		<p>Woodbury Community Center</p>
		<a class="copy-address" on:click={copyVenueAddress} bind:this={venueAddress}>
			108 Lamplighter, Irvine, CA 92620
		</a>
	</div>
</section>

<style lang="scss">
	.wedding-location {
		position: relative;
		background-color: $bg-color-1;
		padding-top: 50px;
		padding-bottom: 30px;

		.wave-cover-top-img {
			position: absolute;
			width: 100%;
			left: 0;
			top: 0;
		}

		.location-heading {
			color: $primary-color;
			font-size: 32px;
			font-weight: 700;
			text-align: center;
		}

		.location {
			font-size: 1.1rem;
			line-height: 1.3;
			text-align: center;
		}

		.copy-address {
			cursor: pointer;
		}
	}
</style>
