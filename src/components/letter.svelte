<script lang="ts">
	import invitationMessage from '$lib/assets/invitation-message.png';
	import { _ } from 'svelte-i18n';
	import { localeStore } from '../i18n.svelte';

	const nameDivider = `
    <svg width="3" height="3" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="1.5" cy="1.5" r="1.5" fill="#B99493"/>
    </svg>`;
</script>

<section class="invitation-message">
	<div class="invitation-message__top">
		<div>
			<h2 class="wedding-date {localeStore.locale}">{$_('letter.date')}</h2>
			<p class="sub-heading {localeStore.locale}">{$_('letter.sub_title')}</p>
		</div>

		<div>
			{#if localeStore.isKr}
				<p class="main-body-text kr">
					지금까지 함께해 주시며 나누었던 소중한 순간들이 저희에게 큰 기쁨과 힘이 되었습니다. 이제
					저희 인생의 또 하나의 특별한 순간을 맞이하며, 소중한 여러분을 이 자리에 초대하고 싶습니다.
					서로에게 큰 사랑과 믿음으로 새로운 여정을 시작하려 합니다. 따뜻한 축복과 응원의 마음을
					전해 주시면 더없이 기쁠 것 같아요. 그날 뵙기를 손꼽아 기다리고 있겠습니다!
				</p>
			{:else}
				<p class="main-body-text en">
					You've been with us through so many unforgettable moments&mdash;college days, camping
					trips, and celebrating life together. Please join us for one of the biggest milestones
					yet! We'd be overjoyed to have you witness and celebrate our wedding as we embark on this
					new chapter together.
				</p>

				<div class="ending-text-box">
					<p class="ending-text en">with love</p>
					<p class="ending-text en">Emily & Anthony</p>
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
	<div class="invitation-message__bottom">
		<img src={invitationMessage} alt="Wedding Invitation" />
	</div>
</section>

<style lang="scss">
	.invitation-message {
		width: 100%;
		font-size: 1rem;

		&__top {
			padding: 4.5em 3.5em;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			row-gap: 3em;

			.wedding-date {
				color: $primary-color;
				letter-spacing: 1px;
				margin-bottom: 0.3em;

				&.kr {
					@extend .title-font-kr;
				}

				&.en {
					@extend .title-font-en;
				}
			}

			.sub-heading {
				color: $primary-color;
				&.kr {
					font-weight: 500;
					font-size: 1rem;
				}

				&.en {
					font-size: 1.3rem;
					font-weight: 600;
				}
			}

			.main-body-text {
				text-align: left;

				&.kr {
					line-height: 2.3em;
					font-size: 0.9rem;
				}
				&.en {
					line-height: 1.8em;
					font-size: 1.2rem;
				}
			}

			.ending-text-box {
				margin-top: 2em;
			}

			.ending-text {
				text-align: right;
				@include for-range($mobile-sm) {
					font-size: 18px;
				}

				@include for-range($mobile-md) {
					font-size: 19px;
				}

				@include for-range($mobile-lg) {
					font-size: 20px;
				}
			}

			.bride-groom-family-description {
				p {
					color: $font-color-default;
					display: grid;
					grid-template-columns: repeat(5, 1fr);
					column-gap: 12px;
					margin-bottom: 20px;
					align-items: center;

					.name-divider {
						display: flex;
						justify-content: center;
						align-items: center;
					}

					.son,
					.daughter {
						display: flex;
						justify-content: center;
						font-size: 12px;
						color: $primary-color;
					}
				}
			}
		}
	}
</style>
