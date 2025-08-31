<script>
  import Section from "$components/Section.svelte";
  import EventPost from "$components/EventPost.svelte";
  let { data } = $props();
</script>

<head>
  <title>Events</title>
</head>

<Section>
  <h1 class="text-2xl text-center font-semibold px-4">Checkout our events!</h1>

  <div class="p-5 flex flex-wrap justify-center lg:p-3 gap-8;">
    {#each data.summaries as event}
      <EventPost
        eventSlug={event.slug}
        thumbnail={event.background}
        title={event.title}
        shortDescription={event.shortDesc}
      />
    {/each}
  </div>
</Section>
