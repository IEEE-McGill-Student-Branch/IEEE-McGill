<div class="section">
	<slot>
		<em>Put content here</em>
	</slot>
</div>

<style lang="postcss">
	.section {
        @apply text-lg p-4 bg-white shadow-md w-auto;
		@apply mx-2 my-4;
		@apply md:mx-8;
		@apply border-2 border-solid border-rose-400 rounded-lg;
		@apply dark:bg-gray-800 dark:border-gray-500;
		@apply text-justify;
	}
</style>
