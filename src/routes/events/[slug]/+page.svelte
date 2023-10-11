<script>
  import Section from "$components/Section.svelte";
  import style from "$lib/markdown.css?inline";
  const stylesheet = `<style> + ${style} + </style>`

  export let data;
</script>

<title>{data.post.title}</title>

<Section>
  <h1>{data.post.title}</h1>
  <h2>
    <p>⏰ Time: {data.post.date}</p>
    <p>🗺️ Location: {data.post.location}</p>
  </h2>

  <div class="content">
    {@html stylesheet}
    {@html data.postContent}
  </div>
</Section>

<style lang="postcss">
  h1 {
    @apply text-3xl text-center md:text-left;
    @apply font-bold;
    @apply mb-4;
  }

  h2 {
    @apply text-xl text-left;
    @apply py-1;
  }

  .content {
    @apply text-gray-700;
    @apply text-justify;
    @apply mb-4;
  }
</style>
