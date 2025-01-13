<script lang="ts">
	import '/src/styles/global.scss';

	let { children } = $props();
</script>

{@render children()}

<style lang="scss">
	:global(section) {
		max-width: 450px;
		margin: auto;
	}
</style>
