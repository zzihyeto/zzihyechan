<script lang="ts">
	import invitationMessage from '$lib/assets/invitation-message.png';
	import { localeStore } from '../i18n.svelte';

	const nameDivider = `
    <svg width="3" height="3" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="1.5" cy="1.5" r="1.5" fill="#B99493"/>
    </svg>`;
</script>

<section class="invitaion-message">
	<div class="invitaion-message__top">
		<div>
			{#if localeStore.isKr}
				<h2 class="wedding-date kr">2025.6.7</h2>
				<p class="sub-heading kr">두 사람의 결혼식에 초대합니다.</p>
			{:else}
				<h2 class="wedding-date en">6.7.2025</h2>
				<p class="sub-heading en">You're invited to our wedding!</p>
			{/if}
		</div>

		<div>
			{#if localeStore.isKr}
				<p class="main-body-text kr">
					평생을 같이하고 싶은 사람을 만났습니다. 서로 아껴주고 이해하며 사랑을베풀며 살고싶습니다.
					저희 약속 위에 따뜻한 격려로 축복해 주셔서 힘찬 출발의 디딤이 되어 주십시오.
				</p>
			{:else}
				<p class="main-body-text en">
					You've been with us through so many unforgettable moments&mdash;college days, camping
					trips, and celebrating life together. Please join us for one of the biggest milestones
					yet! We'd be overjoyed to have you witness and celebrate our wedding as we embark on this
					new chapter together.
				</p>

				<div class="ending-text-box">
					<p class="ending-text en">Love,</p>
					<p class="ending-text en">Emily and Anthony</p>
				</div>
			{/if}
		</div>

		{#if localeStore.isKr}
			<div class="bride-groom-family-description kr">
				<p>
					박주용<span class="name-divider">{@html nameDivider}</span> 김명숙
					<span class="son">의 아들</span>박건희
				</p>
				<p>
					피세광<span class="name-divider">{@html nameDivider}</span> 윤은주<span class="daughter"
						>의 딸</span
					>피아영
				</p>
			</div>
		{/if}
	</div>
	<div class="invitaion-message__bottom">
		<img src={invitationMessage} alt="Wedding Invitation" />
	</div>
</section>

<style lang="scss">
	.invitaion-message {
		width: 100%;
		font-size: 1.5rem;

		&__top {
			padding: 8rem 5rem;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			row-gap: 6rem;

			.wedding-date {
				color: $primary-color;
				letter-spacing: 0.1rem;
				margin-bottom: 0.4rem;

				&.kr {
					font-size: 1.7rem;
				}

				&.en {
					font-size: 2.4rem;
					font-weight: 700;
				}
			}

			.sub-heading {
				color: $primary-color;
				font-weight: 500;

				&.kr {
					font-size: 1.6rem;
				}

				&.en {
					font-size: 2rem;
					font-weight: 600;
				}
			}

			.main-body-text {
				text-align: left;

				&.kr {
					line-height: 3.2rem;
				}
				&.en {
					line-height: 3rem;
					font-size: 1.8rem;
				}
			}

			.ending-text-box {
				margin-top: 2rem;
				padding-right: 2.5rem;
			}

			.ending-text {
				text-align: right;
				font-size: 1.8rem;
			}

			.bride-groom-family-description {
				p {
					display: grid;
					grid-template-columns: repeat(5, 1fr);
					column-gap: 12px;
					margin-bottom: 20px;

					.name-divider {
						display: flex;
						justify-content: center;
						align-items: center;
					}

					.son,
					.daughter {
						display: flex;
						justify-content: center;
						font-size: 1.2rem;
						color: $primary-color;
					}
				}
			}
		}

		&__bottom {
		}
	}
</style>
