<script>
  import Section from "$components/Section.svelte";
  export let data;
</script>

<div class="layout">
  <main class="lg:col-span-2">
    <slot />
  </main>

  <aside>
    <Section>
      <h2 id="more-events">More Events</h2>
      ------
      <ul>
        {#each data.summaries as { slug, title, date }}
          <li>
            <a id="other-titles" href="/events/{slug}">{title} - {date}</a>
          </li>
        {/each}
      </ul>
    </Section>
  </aside>
</div>

<style lang="postcss">
  .layout {
    @apply grid grid-rows-2;
    @apply lg:grid-cols-3;
  }
  
  #more-events {
    @apply text-xl font-semibold;
  }

  #other-titles {
	@apply decoration-clone cursor-pointer text-xl;
  }  

  
</style>
