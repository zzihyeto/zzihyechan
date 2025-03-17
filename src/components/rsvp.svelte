<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { localeStore } from '../i18n.svelte';
	import { LoaderCircle } from '@lucide/svelte';
	import { enhance } from '$app/forms';

	let fullName = $state<string | null>(null);
	let rsvp = $state<'yes' | 'no' | null>(null);
	let submitting = $state(false);

	$inspect(submitting, fullName, rsvp);
</script>

<section class="rsvp">
	<h2 class="title" class:kr={localeStore.isKr} class:en={localeStore.isEn}>{$_('rsvp.title')}</h2>
	<p class="reply-by" class:kr={localeStore.isKr} class:en={localeStore.isEn}>
		{$_('rsvp.reply_by')}
	</p>

	<form
		class="rsvp-form"
		method="POST"
		action="?/rsvp"
		use:enhance={() => {
			submitting = true;
			return ({ update }) => {
				update().finally(() => {
					submitting = false;
				});
			};
		}}
	>
		<input
			class="fullname"
			name="fullname"
			class:kr={localeStore.isKr}
			class:en={localeStore.isEn}
			bind:value={fullName}
			placeholder={$_('rsvp.fullname_placeholder')}
		/>
		<button
			class="send"
			type="submit"
			class:kr={localeStore.isKr}
			class:en={localeStore.isEn}
			disabled={submitting}
		>
			{#if submitting}
				<div class="spinning">
					<LoaderCircle />
				</div>
			{:else}
				{$_('rsvp.send')}
			{/if}
		</button>
	</form>
</section>

<style lang="scss">
	section.rsvp {
		padding: 4.5em 3.5em;
	}

	h2.title {
		color: $primary-color;

		&.kr {
			font-size: 1.3rem;
			font-weight: 600;
		}

		&.en {
			font-size: 1.8rem;
			font-weight: 700;
		}
	}

	p.reply-by {
		margin-top: 0.5em;

		&.kr {
			font-size: 1rem;
		}

		&.en {
			font-size: 1.2rem;
		}
	}

	form.rsvp-form {
		margin-top: 4em;
	}

	input.fullname {
		width: 100%;
		height: 2.5em;
		border: 1px solid #eaeaea;
		border-radius: 4px;
	}

	button.send {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 1em;
		height: 2.5em;
		width: 100%;
		background-color: $primary-color;
		border-radius: 4px;
		color: $white;

		&[disabled] {
			background-color: $primary-color-light;
			cursor: not-allowed;
		}

		&:active {
			background-color: $primary-color-dark;
		}

		&.kr {
			font-weight: 600;
		}

		&.en {
			font-weight: 700;
		}
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(359deg);
		}
	}

	.spinning {
		animation: spin 1s linear infinite;
	}
</style>
