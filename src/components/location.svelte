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

	onMount(() => {
		// 신규 네이버 지도 API 스크립트 로드
		const script = document.createElement('script');
		script.src = 'https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=ygo4qwfjsa';
		script.onload = () => {
			// 네이버 지도 초기화
			const map = new (window as any).naver.maps.Map('naver-map', {
				center: new (window as any).naver.maps.LatLng(37.44436582740946, 127.1599992535768), // 성남 혜성 감리 교회 좌표 (임시)
				zoom: 16,
				mapTypeControl: false,
				scaleControl: false,
				logoControl: false,
				mapDataControl: false,
				zoomControl: true,
				zoomControlOptions: {
					position: (window as any).naver.maps.Position.TOP_RIGHT
				}
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
					'<h3 style="margin:0 0 5px 0;color:#4CAF50;">성남 혜성 감리 교회</h3>' +
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
	<h3 class="venue en">성남 혜성 감리 교회</h3>
	<div class="address-container">
		<span class="address">경기 성남시 중원구 광명로 304</span>
		<button class="copy-button" onclick={copyAddress}>
			<Clipboard size="1.1em" />
		</button>
	</div>
	<div class="map-container">
		<div id="naver-map" class="naver-map"></div>
		<div class="map-share">
			<button class="share-button naver" onclick={shareNaverMap}>
				네이버 지도
			</button>
			<button class="share-button kakao" onclick={shareKakaoMap}>
				카카오맵
			</button>
		</div>
	</div>
	<p class="copyright">© 2026. zzihyechan All rights reserved.</p>
	<a class="github-icon" href="https://github.com/anthopark/our-wedding-invitation" target="_blank"
		><Github size="1.1em" strokeWidth={1} /></a
	>
	<img class="location-deco" src={locationDeco} alt="" />
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

	.map-container {
		margin-top: 2em;
		width: 100%;
		height: 16em;
		margin-bottom: 7em;
		border-radius: 8px;
		overflow: hidden;
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
	}

	.naver-map {
		width: 100%;
		height: 12em;
	}

	.map-share {
		background-color: $white;
		padding: 1em;
		display: flex;
		gap: 1em;
		justify-content: center;
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

	p.signature {
		font-size: 1rem;
	}
	
	p.copyright {
		font-size: 0.8rem;
		color: $font-color-default;
		opacity: 0.7;
		margin-top: 0.5em;
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
