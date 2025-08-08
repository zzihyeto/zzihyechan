<script lang="ts">
	// Calendar component
</script>

<section class="calendar">
	<h2 class="title en">January 2026</h2>
	<div class="calendar-grid">
		<div class="weekdays">
			<div class="weekday">Sun</div>
			<div class="weekday">Mon</div>
			<div class="weekday">Tue</div>
			<div class="weekday">Wed</div>
			<div class="weekday">Thu</div>
			<div class="weekday">Fri</div>
			<div class="weekday">Sat</div>
		</div>
		<div class="days">
			<!-- 1월 1일은 목요일 -->
			<div class="day empty"></div>
			<div class="day empty"></div>
			<div class="day empty"></div>
			<div class="day empty"></div>
			<div class="day">1</div>
			<div class="day">2</div>
			<div class="day">3</div>
			<div class="day">4</div>
			<div class="day">5</div>
			<div class="day">6</div>
			<div class="day">7</div>
			<div class="day">8</div>
			<div class="day">9</div>
			<div class="day">10</div>
			<div class="day">11</div>
			<div class="day">12</div>
			<div class="day">13</div>
			<div class="day">14</div>
			<div class="day">15</div>
			<div class="day">16</div>
			<div class="day">17</div>
			<div class="day">18</div>
			<div class="day">19</div>
			<div class="day">20</div>
			<div class="day">21</div>
			<div class="day">22</div>
			<div class="day">23</div>
			<div class="day">24</div>
			<div class="day">25</div>
			<div class="day">26</div>
			<div class="day">27</div>
			<div class="day">28</div>
			<div class="day">29</div>
			<div class="day">30</div>
			<div class="day wedding-day">31</div>
		</div>
	</div>
	<!-- Calendar decoration removed -->
</section>

<style lang="scss">
	section.calendar {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: $bg-color-1;
		padding: 2em 1em 4em 1em;
	}

	h2.title {
		color: $primary-color;
		text-align: center;
		margin-bottom: 2em;

		&.en {
			@extend .title-font-en;
			letter-spacing: 1px;
		}
	}

	.calendar-grid {
		width: 100%;
		max-width: 400px;
	}

	.weekdays {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		gap: 8px;
		margin-bottom: 1em;
	}

	.weekday {
		text-align: center;
		font-weight: 600;
		color: $primary-color;
		font-size: 0.9rem;
		padding: 0.5em 0;
	}

	.days {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		gap: 8px;
	}

	.day {
		text-align: center;
		padding: 0.8em 0;
		font-size: 1rem;
		color: $font-color-default;
		border-radius: 50%;
		transition: all 0.3s ease;

		&.empty {
			visibility: hidden;
		}

		&.wedding-day {
			background-color: $primary-color;
			color: white;
			font-weight: 600;
			box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
			transform: scale(1.1);
		}
	}

	/* Calendar decoration CSS removed */
</style>
