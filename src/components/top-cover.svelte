<script lang="ts">
	import coverImage from '$lib/assets/cover-image.jpg';
</script>

<section>
	<div class="top">
		<div class="cover-image-container">
			<img class="cover-image" src={coverImage} alt="Wedding cover" />
		</div>
		<div class="vertical-text-container">
			<div class="korean-text-container">
				<span class="getting-married kr">결혼합니다</span>
			</div>
		</div>
	</div>
	<div class="bottom"></div>
</section>

<style lang="scss">
	section {
		width: 100%;
		height: 100vh;
		background-color: $white;
		font-size: 1.2rem;
	}

	.top {
		height: 80vh;
		display: grid;
		grid-template-columns: 8.5fr 1.5fr;
	}

	.cover-image {
		height: 100%;
		width: auto;
		object-fit: cover;
	}

	.vertical-text-container {
		display: flex;
		justify-content: center;
		padding-top: 3.6rem;
	}

	.getting-married {
		writing-mode: vertical-lr;
		text-orientation: upright;
		letter-spacing: 1.4rem;
		font-size: 2rem;
	}
</style>
