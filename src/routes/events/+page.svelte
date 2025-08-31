<script>
  import Section from "$components/Section.svelte";
  import EventPost from "$components/EventPost.svelte";
  let { data } = $props();

</script>

<head>
  <title>Events</title>
</head>

<Section>
  <h1>Checkout our events!</h1>

  <div id="eventPosts">
    {#each data.summaries as event}
      <EventPost eventSlug={event.slug}>
        {#snippet thumbnail()}
                <div >
            <img
              src={event.background}
              alt="Event {event.title} thumbnail"
            />
          </div>
              {/snippet}
        {#snippet title()}
                <div >{event.title}</div>
              {/snippet}
        <!-- <div slot=date>{event.date}</div>
        <div slot=location>{event.location}</div> -->
        {#snippet shortDescription()}
                <div >
            {@html event.shortDesc}
          </div>
              {/snippet}
      </EventPost>
    {/each}
  </div>
</Section>

<style lang="postcss">
  h1 {
    @apply text-2xl text-center font-semibold px-4;
  }

  #eventPosts {
    @apply p-5 flex flex-wrap justify-center lg:p-3 gap-8;

    img {
      @apply h-36 p-4;
    }
  }
</style>
