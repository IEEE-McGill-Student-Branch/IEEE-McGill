<script>
  import Section from "$components/Section.svelte";
  import EventPost from "$components/EventPost.svelte";
  export let data;
</script>

<head>
  <title>Events</title>
</head>

<Section>
  <h1>Event Posts</h1>

  <div id="eventPosts">
    {#each data.summaries as event}
      <EventPost eventSlug={event.slug}>
        <div slot="thumbnail">
          <img
            src={event.background}
            alt="Event {event.title} thumbnail"
          />
        </div>
        <div slot="title">{event.title}</div>
        <div slot=date>{event.date}</div>
        <div slot=location>{event.location}</div>
        <div slot="shortDescription">
          {@html event.shortDesc}
        </div>
      </EventPost>
    {/each}
  </div>
</Section>

<!-- Event Calendar -->
<!-- <Section>
  <h2>Events Calendar</h2>
  Advanced Atrributes: https://support.google.com/calendar/thread/23205641/advanced-embed-option-descriptions?hl=en
  <iframe
    title="IEEE McGill Calendar"
    src="https://calendar.google.com/calendar/embed?
		src=aWVlZS53ZWJAbWNnaWxsZXVzLmNh&
		src=ZW4uY2FuYWRpYW4jaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&
		title=IEEE%20McGill%20Calendar&
		wkst=2&
		bgcolor=%23ffffff&
		ctz=America%2FToronto&
		mode=MONTH&
		showTabs=0&
		showPrint=0&
		showTz=1&
		showNav=1&
		showDate=1&
		showTitle=1&
		mode=AGENDA&
		hl=en&
		color=%23039BE5"
    frameborder="10"
    scrolling="yes"
    id="calendar"
  />
</Section> -->

<style lang="postcss">
  h1 {
    @apply text-2xl text-center font-semibold px-4;
  }

  /* #calendar {
    text-align: center;
    size: 100px;
    margin: auto;
    display: block;
    width: inherit;
    height: 50rem;
    min-height: 80vh;
    min-width: 90%;
    padding: 0.5rem;
    margin: 1rem auto;
  } */

  #eventPosts {
    @apply p-5 flex flex-wrap justify-center lg:p-3 gap-8;

    img {
      @apply h-36 p-4 min-w-fit;
    }
  }
</style>
