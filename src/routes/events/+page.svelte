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
    {#each data.summaries as { slug, title, shortDesc, date, location }}
      <EventPost eventSlug={slug}>
        <div slot="thumbnail">
          <img
            src="https://images.unsplash.com/photo-1682686581663-179efad3cd2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="Event {title} thumbnail"
          />
        </div>
        <div slot="title">{title}</div>
        <div slot=date>{date}</div>
        <div slot=location>{location}</div>
        <div slot="shortDescription">
          {@html shortDesc}
        </div>
      </EventPost>
    {/each}
  </div>
</Section>

<!-- Event Calendar -->
<Section>
  <h2>Events Calendar</h2>
  <!-- Advanced Atrributes: https://support.google.com/calendar/thread/23205641/advanced-embed-option-descriptions?hl=en -->
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
</Section>

<style lang="postcss">
  h1,
  h2 {
    @apply text-2xl text-center font-semibold px-4;
  }

  #calendar {
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
  }

  #eventPosts {
    @apply flex flex-wrap justify-center p-3;
  }
</style>
