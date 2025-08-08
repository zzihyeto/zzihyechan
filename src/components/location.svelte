<script lang="ts">
	import locationTopWave from '$lib/assets/location-top-wave.svg';
	import locationDeco from '$lib/assets/location-deco.svg';
	import { _ } from 'svelte-i18n';
	import { localeStore } from '../i18n.svelte';
	import { Clipboard, Github } from '@lucide/svelte';
	import { onMount } from 'svelte';

	function copyAddress() {
		navigator.clipboard
			.writeText('경기 성남시 중원구 광명로 304')
			.then(() => alert($_('location.address_copied')))
			.catch(() => null);
	}

	function shareNaverMap() {
		const url = 'https://map.naver.com/p/search/성남%20혜성%20감리%20교회';
		window.open(url, '_blank');
	}

	function shareKakaoMap() {
		const url = 'https://map.kakao.com/link/search/성남%20혜성%20감리%20교회';
		window.open(url, '_blank');
	}

	function shareKakaoTalk() {
		const url = window.location.href;
		const text = '임찬교와 이지혜의 결혼식에 초대합니다!';
		
		// KakaoTalk 앱으로 직접 공유 (모바일에서만 작동)
		if (navigator.share) {
			navigator.share({
				title: '임찬교와 이지혜의 결혼식에 초대합니다!',
				text: text,
				url: url
			}).catch(() => {
				// Web Share API가 지원되지 않거나 취소된 경우
				// 클립보드에 복사하고 안내
				navigator.clipboard.writeText(`${text}\n${url}`).then(() => {
					alert('청첩장 정보가 복사되었습니다. 카카오톡에서 붙여넣기 해주세요.');
				}).catch(() => {
					alert('복사에 실패했습니다.');
				});
			});
		} else {
			// Web Share API가 지원되지 않는 경우
			navigator.clipboard.writeText(`${text}\n${url}`).then(() => {
				alert('청첩장 정보가 복사되었습니다. 카카오톡에서 붙여넣기 해주세요.');
			}).catch(() => {
				alert('복사에 실패했습니다.');
			});
		}
	}

	function copyInvitationLink() {
		const url = window.location.href;
		navigator.clipboard.writeText(url).then(() => {
			alert('청첩장 주소가 복사되었습니다!');
		}).catch(() => {
			alert('복사에 실패했습니다.');
		});
	}

	onMount(() => {
		// 신규 네이버 지도 API 스크립트 로드
		const script = document.createElement('script');
		script.src = 'https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=ygo4qwfjsa';
		script.onload = () => {
			// 네이버 지도 초기화
			const map = new (window as any).naver.maps.Map('naver-map', {
				center: new (window as any).naver.maps.LatLng(37.44436582740946, 127.1599992535768), // 성남 혜성 감리 교회 좌표 (임시)
				zoom: 15,
				mapTypeControl: false,
				scaleControl: false,
				logoControl: false,
				mapDataControl: false,
				zoomControl: false,
				panControl: false
			});

			// 마커 추가 (압정 모양)
			const marker = new (window as any).naver.maps.Marker({
				position: new (window as any).naver.maps.LatLng(37.44436582740946, 127.1599992535768),
				map: map,
				icon: {
					content: '<div style="background-color: #e74c3c; width: 20px; height: 20px; border-radius: 50% 50% 50% 0; transform: rotate(-45deg); margin: -10px -10px; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>',
					size: new (window as any).naver.maps.Size(20, 20),
					anchor: new (window as any).naver.maps.Point(10, 10)
				}
			});

			// 정보창 추가
			const infoWindow = new (window as any).naver.maps.InfoWindow({
				content: '<div style="padding:10px;min-width:200px;text-align:center;">' +
					'<h3 style="margin:0 0 5px 0;color:#4CAF50;">성남 혜성 감리 교회 3층 본당</h3>' +
					'<p style="margin:0;font-size:12px;">경기 성남시 중원구 광명로 304</p>' +
					'</div>'
			});

			// 마커 클릭 시 정보창 표시
			(window as any).naver.maps.Event.addListener(marker, 'click', () => {
				if (infoWindow.getMap()) {
					infoWindow.close();
				} else {
					infoWindow.open(map, marker);
				}
			});
		};
		document.head.appendChild(script);
	});
</script>

<img src={locationTopWave} class="location-top-wave" alt="" />
<section class="location">
	<h2 class="title {localeStore.locale}">{$_('location.title')}</h2>
	<h3 class="venue en">성남 혜성 감리 교회 3층 본당</h3>
	<div class="address-container">
		<span class="address">경기 성남시 중원구 광명로 304</span>
		<button class="copy-button" onclick={copyAddress}>
			<Clipboard size="1.1em" />
		</button>
	</div>
	<div class="map-section">
		<div id="naver-map" class="naver-map-wide"></div>
		<div class="map-buttons">
			<button class="share-button naver" onclick={shareNaverMap}>
				네이버 지도
			</button>
			<button class="share-button kakao" onclick={shareKakaoMap}>
				카카오맵
			</button>
		</div>
	</div>
	
	<div class="invitation-share">
		<button class="share-button kakao-talk" onclick={shareKakaoTalk}>
			카카오톡으로 청첩장 전하기
		</button>
		<button class="share-button copy-link" onclick={copyInvitationLink}>
			청첩장 주소 복사하기
		</button>
	</div>
	
	<p class="copyright">© 2026. zzihyechan All rights reserved.</p>
	<!-- <a class="github-icon" href="https://github.com/anthopark/our-wedding-invitation" target="_blank"
	 	><Github size="1.1em" strokeWidth={1} /></a
	> 
	<img class="location-deco" src={locationDeco} alt="" />
	-->
</section>

<style lang="scss">
	img.location-top-wave {
		max-width: $content-max-width;
		margin: auto;
	}

	section.location {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		background-color: $bg-color-1;
		padding: 1em 2em 1em 2em;
	}

	h2.title {
		color: $primary-color;
		text-align: center;
		margin-bottom: 1em;

		&.kr {
			@extend .title-font-kr;
			letter-spacing: 1px;
		}

		&.en {
			@extend .title-font-en;
			letter-spacing: 1px;
		}
	}

	h3.venue {
		&.en {
			font-size: 1.5rem;
			font-weight: 600;
			color: black;
			margin-bottom: 0.5em;
		}
	}

	.address-container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 0.5em;
		padding: 0.5em 1em;
		background-color: $white;
		border-radius: 8px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

		.address {
			font-size: 1.2rem;
			color: $font-color-default;
		}

		.copy-button {
			background: none;
			border: none;
			color: $primary-color;
			cursor: pointer;
			padding: 0.1em;
			border-radius: 4px;
			transition: background-color 0.2s;
			font-size: 0.9em;

			&:hover {
				background-color: $primary-color-light-2;
			}
		}
	}

	.map-section {
		margin-top: 2em;
		width: 100%;
		height: 25em;
		position: relative;
		border-radius: 12px;
		overflow: hidden;
	}

	.naver-map-wide {
		width: 100%;
		height: 100%;
	}

	.map-buttons {
		background-color: rgba(255, 255, 255, 0.95);
		padding: 1em;
		display: flex;
		gap: 1em;
		justify-content: center;
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		z-index: 10;
		backdrop-filter: blur(5px);
	}

	.share-button {
		padding: 0.8em 1.5em;
		border: none;
		border-radius: 6px;
		font-size: 0.9rem;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.2s;

		&.naver {
			background-color: #03c75a;
			color: white;

			&:hover {
				background-color: #02a94a;
			}
		}

		&.kakao {
			background-color: #fee500;
			color: #3c1e1e;

			&:hover {
				background-color: #fdd835;
			}
		}
	}

	.invitation-share {
		margin-top: 2em;
		display: flex;
		flex-direction: column;
		gap: 1em;
		width: 100%;
		max-width: 400px;
	}

	.share-button.kakao-talk {
		background-color: #fee500;
		color: #3c1e1e;
		padding: 1em 1.5em;

		&:hover {
			background-color: #fdd835;
		}
	}

	.share-button.copy-link {
		background-color: $primary-color;
		color: white;
		padding: 1em 1.5em;

		&:hover {
			background-color: $primary-color-dark;
		}
	}

	p.signature {
		font-size: 1rem;
	}
	
	p.copyright {
		font-size: 0.8rem;
		color: $font-color-default;
		opacity: 0.7;
		margin-top: 2em;
	}
	
	.github-icon {
		margin-top: 0.2em;
		color: $font-color-default;
		cursor: pointer;
	}

	img.location-deco {
		position: absolute;
		bottom: 2.5em;
		right: 1.5em;
	}
</style>
