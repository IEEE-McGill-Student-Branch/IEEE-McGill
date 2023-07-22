<script>
  import Section from "$components/Section.svelte";
  export let data;
</script>

<head>
  <title>Events</title>
</head>

<Section>
  <h1>Event Posts</h1>

  <ul>
    {#each data.summaries as { slug, title }}
      <li><a href="/events/{slug}">{title}</a></li>
    {/each}
  </ul>
</Section>

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
</style>
