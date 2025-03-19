<script lang="ts">
	import CalendarWeddingDate from '../components/calendar-wedding-date.svelte';
	import InvitationMessage from '../components/invitation-message.svelte';
	import Rsvp from '../components/rsvp.svelte';
	import TopCover from '../components/top-cover.svelte';
	import WeddingLocation from '../components/wedding-location.svelte';

	let { form }: { form: ActionData } = $props();
	$inspect(form);
</script>

<TopCover />
<InvitationMessage />
<Rsvp {form} />
<CalendarWeddingDate />
<WeddingLocation />
