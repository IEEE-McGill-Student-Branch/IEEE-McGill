<div class="section">
	<slot>
		<em>Put content here</em>
	</slot>
</div>

<style lang="postcss">
	.section {
        text-align: justify;
		width: inherit;
		border: 1px solid #ed5d5d82;
		border-radius: 2px;
		/* box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1); */
        @apply text-lg p-4 bg-white shadow-md m-4;
	}
</style>
