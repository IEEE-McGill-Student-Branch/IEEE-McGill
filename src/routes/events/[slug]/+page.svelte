<script>
  import Section from "$components/Section.svelte";
  export let data;
</script>

<title>{data.post.title}</title>

<Section>
  <h1>{data.post.title}</h1>
  <h2>
    DATE: {data.post.date} - LOCATION: {data.post.location}
  </h2>

  <div class="content">{@html data.post.content}</div>
</Section>

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
