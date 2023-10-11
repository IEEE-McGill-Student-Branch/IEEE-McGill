<div class="flex justify-center">
	<div class="section">
		<slot>
			<em>Put content here</em>
		</slot>
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
