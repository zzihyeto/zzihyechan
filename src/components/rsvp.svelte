<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { localeStore } from '../i18n.svelte';
	import { LoaderCircle } from '@lucide/svelte';
	import { enhance } from '$app/forms';
	import RsvpSelect from './rsvp-select.svelte';

	let { form } = $props();

	let fullName = $state<string | null>(null);
	let rsvp = $state<string | null>(null);
	let submitting = $state(false);

	$inspect(submitting, fullName, rsvp);
</script>

<section class="rsvp">
	<h2 class="title {localeStore.locale}">{$_('rsvp.title')}</h2>
	<p class="reply-by {localeStore.locale}">
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
			class="fullname {localeStore.locale}"
			name="fullname"
			value={form?.name ?? ''}
			placeholder={$_('rsvp.fullname_placeholder')}
		/>
		<div class="select-container">
			<RsvpSelect />
		</div>
		<button class="send {localeStore.locale}" type="submit" disabled={submitting}>
			{#if submitting}
				<div class="spinning">
					<LoaderCircle />
				</div>
			{:else}
				{$_('rsvp.send')}
			{/if}
		</button>
	</form>
	<div class="submit-message">
		{#if form?.success}
			<p class="success {localeStore.locale}">
				{$_('rsvp.email_success')}
			</p>
		{/if}
		{#if form?.emailError}
			<p class="error {localeStore.locale}">
				{$_('rsvp.email_error')}
			</p>
		{/if}
		{#if form?.nameValidationError}
			<p class="error {localeStore.locale}">
				{$_('rsvp.name_validation_error')}
			</p>
		{/if}
	</div>
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
			font-size: 0.95rem;
		}

		&.en {
			font-size: 1.2rem;
		}
	}

	form.rsvp-form {
		margin-top: 4em;
	}

	input.fullname {
		padding: 0.4em 0.8em;
		width: 100%;
		height: 2.5em;
		border: 1px solid $white-2;
		border-radius: 4px;
		letter-spacing: 0.02em;

		&:active,
		&:focus {
			@extend .input-focused;
		}
		&::placeholder {
			color: $font-color-light;
		}
	}

	.select-container {
		margin-top: 1em;
	}

	button.send {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 2em;
		height: 2.5em;
		width: 100%;
		background-color: $primary-color;
		border-radius: 4px;
		color: $white;
		letter-spacing: 0.05em;

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

	.submit-message {
		margin-top: 0.5em;

		.kr {
			font-size: 0.9rem;
		}

		.en {
			font-size: 1.1rem;
		}

		p.success {
			color: $green-1;
		}

		p.error {
			color: $red-1;
		}
	}
</style>
