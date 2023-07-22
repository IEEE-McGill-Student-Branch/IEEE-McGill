<script>
	export let data;
</script>

<h1>{data.post.title}</h1>
<div class='content'>{@html data.post.content}</div>

<style lang="postcss">
	h1 {
		@apply text-4xl;
		@apply font-bold;
		@apply mb-4;
	}

	.content {
		@apply text-gray-700;
		@apply text-justify;
		@apply mb-4;
	}
</style>
