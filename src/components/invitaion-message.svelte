<script lang="ts">
	import invitationMessage from '$lib/assets/invitation-message.png';

	const nameDivider = `
    <svg width="3" height="3" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="1.5" cy="1.5" r="1.5" fill="#B99493"/>
    </svg>`;
</script>

<section class="invitaion-message">
	<div class="invitaion-message__top">
		<div>
			<h2 class="heading">06.07.2025</h2>
			<p class="sub-heading kr">두사람의 결혼식에 초대합니다.</p>
		</div>

		<div>
			<p class="main-body-text kr">
				평생을 같이하고 싶은 사람을 만났습니다. 서로 아껴주고 이해하며 사랑을베풀며 살고싶습니다.
				저희 약속 위에 따뜻한 격려로 축복해 주셔서 힘찬 출발의 디딤이 되어 주십시오.
			</p>
		</div>
		<div class="bride-groom-family-description kr">
			<p>박주용<span class="name-divider">{@html nameDivider}</span> 김명숙 <span class="son">의 아들</span>박건희</p>
			<p>피세광<span class="name-divider">{@html nameDivider}</span> 윤은주<span class="daughter">의 딸</span>피아영</p>
		</div>
	</div>
	<div class="invitaion-message__bottom">
		<img src={invitationMessage} alt="Wedding Invitation" />
	</div>
</section>

<style lang="scss">
	.invitaion-message {
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
    font-size: 1.5rem;

    &__top {
      padding: $section-padding;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      row-gap: 70px;

      .heading {
        font-size: 2.1rem;
        color: $primary-color;
      }

      .sub-heading {
        color: $primary-color;
        font-size: 1.6rem;
        font-weight: 500;
      }

      .main-body-text {
        text-align: left;
        line-height: 32px;
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
