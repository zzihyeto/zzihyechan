<script lang="ts">
	import sundayCol from '$lib/assets/calendar/calendar-sunday.svg';
	import mondayCol from '$lib/assets/calendar/calendar-monday.svg';
	import tuesdayCol from '$lib/assets/calendar/calendar-tuesday.svg';
	import wednesdayCol from '$lib/assets/calendar/calendar-wednesday.svg';
	import thursdayCol from '$lib/assets/calendar/calendar-thursday.svg';
	import fridayCol from '$lib/assets/calendar/calendar-friday.svg';
	import saturdayCol from '$lib/assets/calendar/calendar-saturday.svg';
</script>

<section class="calendar-wedding-date en">
	<h2 class="calendar-heading">June</h2>
	<div class="calendar-body">
		<img class="week-col" src={sundayCol} />
		<img class="week-col" src={mondayCol} />
		<img class="week-col" src={tuesdayCol} />
		<img class="week-col" src={wednesdayCol} />
		<img class="week-col" src={thursdayCol} />
		<img class="week-col" src={fridayCol} />
		<img class="week-col" src={saturdayCol} />
	</div>
</section>

<style lang="scss">
	.calendar-wedding-date {
		background-color: #fff;
		display: flex;
		flex-direction: column;
		row-gap: 4em;
		padding: 4em 3.5em;

		@include for-range($mobile-sm) {
			padding-inline: 3em;
		}

		.calendar-heading {
			color: $primary-color;
			font-size: 2rem;
			font-weight: 700;
			text-align: center;
		}

		.calendar-body {
			display: flex;
			justify-content: space-between;
			gap: 1.4em;

			.week-col {
				height: 100%;
			}
		}
	}
</style>
