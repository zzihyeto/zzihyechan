<script lang="ts">
	import coverImage from '$lib/assets/cover-image.jpg';
</script>

<section class="invitation-main">
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
	<div class="description kr">
    <div class="names">
      <p>신랑 박건희</p>
      <p>신부 피아영</p>
    </div>
    <div class="time-location">
      <p>2025년 6월 7일 (토) 4시</p>
      <p>Irvine, CA</p>
    </div>
</section>

<style lang="scss">
	.invitation-main {
		width: 100%;
		height: 100vh;
		background-color: $white;
		font-size: 1.2rem;
	}

	.top {
		height: 82vh;
		display: grid;
		grid-template-columns: 8.5fr 1.5fr;
	}

	.cover-image {
		height: 100%;
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

	.getting-married {
		writing-mode: vertical-lr;
		text-orientation: upright;
		letter-spacing: 1.4rem;
		font-size: 1.8rem;
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
