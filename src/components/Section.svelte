<div class="section">
	<slot>
		<em>Put content here</em>
	</slot>
</div>

<style lang="postcss">
	.section {
        @apply text-lg p-4 bg-white shadow-md m-4 text-justify;
		@apply min-w-fit;
		border: 1px solid #ed5d5d82;
		border-radius: 2px;
	}
</style>
