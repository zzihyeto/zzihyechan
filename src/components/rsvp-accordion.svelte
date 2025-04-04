<script lang="ts">
	import { Accordion, type AccordionItem } from 'melt/builders';
	import { _ } from 'svelte-i18n';
	import { localeStore } from '../i18n.svelte';
	import { slide } from 'svelte/transition';
	import { ChevronDown } from '@lucide/svelte';
	import { type Snippet } from 'svelte';

	type Item = AccordionItem<{
		title: string;
	}>;

	const items: Item[] = [
		{ id: '1', title: $_('rsvp.accordion.dress_code') },
		{ id: '2', title: $_('rsvp.accordion.the_menu') }
	];

	const accordion = new Accordion({
		multiple: true
	});

	const dressCodeItem = accordion.getItem(items[0]);
	const menuItem = accordion.getItem(items[1]);
</script>

{#snippet accordionItem(item: ReturnType<Accordion['getItem']>, content: Snippet)}
	<div class="item">
		<div {...item.heading} class="heading">
			<button {...item.trigger} class="trigger {localeStore.locale}">
				{item.item.title}
			</button>
			<div class="chevron-down-container" class:rotate={item.isExpanded}>
				<ChevronDown />
			</div>
		</div>

		{#if item.isExpanded}
			<div
				{...item.content}
				class="content {localeStore.locale}"
				transition:slide={{ duration: 250 }}
			>
				{@render content()}
			</div>
		{/if}
	</div>
{/snippet}

{#snippet dressCodeContent()}
	<p class="semi-formal">{$_('rsvp.accordion.semi_formal')}</p>
	<p>{$_('rsvp.accordion.suit_and_tie')}</p>
{/snippet}

{#snippet menuContent()}
	<p class="menu-title">{$_('rsvp.accordion.menu_title')}</p>
	<p class="beef">{$_('rsvp.accordion.beef')}</p>
	<p>&</p>
	<p class="fish">{$_('rsvp.accordion.fish')}</p>
	<p class="vegetarian">
		{$_('rsvp.accordion.vegetarian')}
	</p>
{/snippet}

<div class="accordion-root" {...accordion.root}>
	{@render accordionItem(dressCodeItem, dressCodeContent)}
	{@render accordionItem(menuItem, menuContent)}
</div>

<style lang="scss">
	.accordion-root {
		width: 100%;
	}

	.item {
		margin-bottom: 1em;
	}

	.heading {
		border-top: 1px solid $primary-color-light;
		position: relative;
	}

	button.trigger {
		color: $primary-color;
		width: 100%;
		height: 2.6em;

		&.en {
			letter-spacing: 1px;
			font-weight: 600;
			font-size: 1.4rem;
		}

		&.kr {
			letter-spacing: 1px;
			font-weight: 500;
			font-size: 1.2rem;
		}
	}

	.chevron-down-container {
		position: absolute;
		width: 1.5em;
		height: 1.5em;
		top: 1em;
		right: 0.6em;
		color: $primary-color;
		transition: transform 250ms ease;

		&.rotate {
			transform: rotate(180deg);
		}
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0.5em 0.5em 1em 0.5em;

		p {
			text-align: center;
		}

		&.en p {
			font-size: 1.1rem;

			&.semi-formal {
				margin-bottom: 0.5em;
			}

			&.menu-title {
				margin-bottom: 1em;
			}

			&.beef,
			&.fish {
				font-weight: 700;
			}

			&.vegetarian {
				margin-top: 1em;
			}
		}

		&.kr p {
			font-size: 0.9rem;

			&:not(:last-child) {
				margin-bottom: 0.5em;
			}

			&.semi-formal,
			&.menu-title {
				margin-bottom: 1.5em;
			}

			&.beef,
			&.fish {
				font-weight: 600;
			}

			&.vegetarian {
				margin-top: 1.5em;
			}
		}
	}
</style>
