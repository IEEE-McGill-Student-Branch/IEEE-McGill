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
      <ul class="list-inside list-disc">
        {#each data.summaries as { slug, title, date }}
          <li>
            <a
              id="other-titles"
              href="/events/{slug}"
              class="hover:underline hover:text-red-500">{title}</a
            >
          </li>
        {/each}
      </ul>
    </Section>
  </aside>
</div>

<style lang="postcss">
  .layout {
    @apply flex flex-col;
    @apply lg:grid lg:grid-cols-3 lg:gap-0;
  }

  #more-events {
    @apply text-xl font-semibold border-b-2 border-gray-500 pb-2 mb-3;
  }

  #other-titles {
    @apply decoration-clone cursor-pointer text-xl;
  }
</style>
