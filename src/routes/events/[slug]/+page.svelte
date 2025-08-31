<script>
  import Section from "$components/Section.svelte";
  let { data } = $props();
</script>

<title>{data.post.title}</title>

<Section>
  <h1 class="text-4xl font-bold text-center md:text-left mb-4">
    {data.post.title}
  </h1>
  <h2 class="text-xl mb-3">
    <p>⏰ Time: {data.post.date}</p>
    <p>🗺️ Location: {data.post.location}</p>
  </h2>

  <div class="content prose prose-neutral dark:prose-invert max-w-none">
    {@html data.postContent}
  </div>
</Section>
