<script>
  import Section from "$components/Section.svelte";
  export let data;
</script>

<div class="layout">
  <main>
    <slot />
  </main>

  <aside>
    <Section>
      <h2 id="more-events">More Events</h2>
      ------------
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
    display: grid;
    gap: 1em;
    grid-template-columns: 2fr 1fr;
  }
  
  #more-events {
    @apply text-lg font-semibold;
  }

  #other-titles {
	@apply decoration-clone cursor-pointer italic;
  }  

  
</style>
