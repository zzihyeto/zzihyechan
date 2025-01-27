<script lang="ts">
	import calendarSunday from '$lib/assets/calendar/calendar-sunday.svg';
	import calendarMonday from '$lib/assets/calendar/calendar-monday.svg';
	import calendarTuesday from '$lib/assets/calendar/calendar-tuesday.svg';
	import calendarWednesday from '$lib/assets/calendar/calendar-wednesday.svg';
	import calendarThursday from '$lib/assets/calendar/calendar-thursday.svg';
	import calendarFriday from '$lib/assets/calendar/calendar-friday.svg';
	import calendarSaturday from '$lib/assets/calendar/calendar-saturday.svg';
</script>

<section class="calendar-wedding-date en">
	<h2 class="calendar-heading">June</h2>
	<div class="calendar-body">
		<img class="week-col" src={calendarSunday} />
		<img class="week-col" src={calendarMonday} />
		<img class="week-col" src={calendarTuesday} />
		<img class="week-col" src={calendarWednesday} />
		<img class="week-col" src={calendarThursday} />
		<img class="week-col" src={calendarFriday} />
		<img class="week-col" src={calendarSaturday} />
	</div>
</section>

<style lang="scss">
	.calendar-wedding-date {
    background-color: #fff;
		display: flex;
		flex-direction: column;
		row-gap: 60px;
		padding: 80px 60px;

    @include for-range($mobile-sm) {
      padding-inline: 50px;
    }
 
		.calendar-heading {
			color: $primary-color;
			font-size: 32px;
			font-weight: 700;
			text-align: center;
		}

		.calendar-body {
			display: flex;
      justify-content: space-between;
			gap: 24px;

      .week-col {
        height: 100%;
      }
		}
	}
</style>
