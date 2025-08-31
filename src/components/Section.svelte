<script>
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props();
</script>

<div class="flex justify-center">
	<div class="section">
		{#if children}{@render children()}{:else}
			<em>Put content here</em>
		{/if}
	</div>
</div>
	

<style lang="postcss">
	.section {
		width: 90%;
        @apply text-lg p-4 bg-white shadow-md;
		@apply mx-2 my-4;
		@apply md:mx-8;
		@apply border-2 border-solid border-rose-400 rounded-lg;
		@apply dark:bg-gray-800 dark:border-gray-500;
		@apply text-justify;
	}
</style>
