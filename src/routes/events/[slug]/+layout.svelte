<script>
  import Section from "$components/Section.svelte";
  let { data, children } = $props();
</script>

<div class="flex flex-col lg:grid lg:grid-cols-3 lg:gap-0">
  <main class="lg:col-span-2">
    {@render children?.()}
  </main>

  <aside>
    <Section>
      <h2
        id="more-events"
        class="text-xl font-semibold border-b-2 border-gray-500 pb-2 mb-3"
      >
        More Events
      </h2>
      <ul class="list-inside list-disc space-y-2">
        {#each data.summaries as { slug, title, date }}
          <li>
            <a
              id="other-titles"
              href={`/events/${slug}`}
              class="box-decoration-clone cursor-pointer text-xl hover:underline hover:text-red-500 transition-colors duration-150"
            >
              {title}
            </a>
          </li>
        {/each}
      </ul>
    </Section>
  </aside>
</div>
