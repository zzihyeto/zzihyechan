<script lang="ts">
	import { Select } from 'melt/builders';
	import { _ } from 'svelte-i18n';
	import { localeStore } from '../i18n.svelte';
	const select = new Select();

	const options = [$_('rsvp.select.yes'), $_('rsvp.select.no')];
</script>

<button class={localeStore.locale} {...select.trigger}>
	{select.value ?? $_('rsvp.select.select_attendance')}
</button>

<div class="content" {...select.content}>
	{#each options as option}
		<div {...select.getOption(option)}>
			<span class={localeStore.locale}>{option}</span>
		</div>
	{/each}
</div>

<style lang="scss">
	button {
		width: 100%;
		height: 2.5em;
		background-color: $white;
		border-radius: 4px;
	}
</style>
