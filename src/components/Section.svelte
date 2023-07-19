<div class="section">
	<slot>
		<em>There suppose to be a paragrpah of text here :)</em>
	</slot>
</div>

<style lang="postcss">
	.section {
        text-align: justify;
		width: inherit;
		border: 1px solid #ed5d5d82;
		border-radius: 8px;
		/* box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1); */
        @apply text-lg px-4 py-2 bg-white shadow-md m-4;
	}
</style>
