<script lang="ts">
	import { Select } from 'melt/builders';
	import { _ } from 'svelte-i18n';
	import { localeStore } from '../i18n.svelte';
	import { Check, ChevronDown } from '@lucide/svelte';

	let { rsvp = $bindable(null), clearForm }: { rsvp: string | null; clearForm: () => void } =
		$props();

	const options = [$_('rsvp.select.yes'), $_('rsvp.select.no')];
	const select = new Select<string>({
		onValueChange: (value) => {
			rsvp = value ?? null;
			clearForm();
		},
		value: () => rsvp ?? undefined
	});
</script>

<button
	class={localeStore.locale}
	class:selected={Boolean(select.value)}
	class:not-selected={!Boolean(select.value)}
	class:opened={select.open}
	{...select.trigger}
>
	<span>{select.value ?? $_('rsvp.select.select_attendance')}</span>
	<div class="chevron-down-container">
		<ChevronDown />
	</div>
</button>

<div class="content" {...select.content}>
	{#each options as option}
		<div class="option" {...select.getOption(option)}>
			{#if select.isSelected(option)}
				<span class="check-container">
					<Check size="20" />
				</span>
			{/if}
			<span class="option-label {localeStore.locale}" class:selected={select.isSelected(option)}>
				{option}
			</span>
		</div>
	{/each}
</div>

<style lang="scss">
	button {
		position: relative;
		padding: 0.4em 0.8em;
		width: 100%;
		height: 2.5em;
		background-color: $white;
		border-radius: 4px;
		text-align: left;
		letter-spacing: 0.02em;

		&.not-selected {
			color: $font-color-light;
		}

		&.opened {
			@extend .input-focused;
		}

		.chevron-down-container {
			position: absolute;
			top: 0.55em;
			right: 0.6em;
			color: $font-color-light;
		}
	}

	div.content {
		border: 1px solid $primary-color-light;
		box-shadow: 0 4px 12px $font-color-light;
		border-radius: 4px;
		padding: 0.8em;

		&:focus {
			outline: none;
		}

		div.option {
			display: flex;
			align-items: center;
			height: 2.5em;
			position: relative;
			border-radius: 4px;
			padding: 0.7em;
			letter-spacing: 0.02em;

			&:not(:last-child) {
				margin-bottom: 0.5em;
			}

			&[data-highlighted] {
				background-color: $primary-color-light-2;
			}

			.check-container {
				position: absolute;
				top: 0.7em;
				color: $primary-color-dark;
			}

			span.option-label.selected {
				margin-left: 1.5em;
			}
		}
	}
</style>
