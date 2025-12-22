<script>
  let { data, children } = $props();
</script>

<div class="min-h-screen bg-white dark:bg-gray-900">
  <!-- Main Content -->
  <main>
    {@render children?.()}
  </main>

  <!-- More Events Section -->
  <div class="py-12 px-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-8">
        <h2 class="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
          More Events
        </h2>
        <p class="text-gray-500 dark:text-gray-400 text-sm">
          Discover other events from IEEE McGill
        </p>
      </div>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {#each data.summaries.slice(0, 6) as { slug, title, date }}
          <a
            href={`/events/${slug}`}
            class="block p-4 bg-white dark:bg-gray-900 rounded-xl 
                   border border-gray-200 dark:border-gray-700
                   hover:border-rose-300 dark:hover:border-rose-500
                   hover:shadow-md transition-all duration-200"
          >
            <p class="font-semibold text-gray-900 dark:text-white mb-1 line-clamp-2 text-sm">
              {title}
            </p>
            {#if date}
              <p class="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
                <svg class="w-3.5 h-3.5 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {date}
              </p>
            {/if}
          </a>
        {/each}
      </div>

      <!-- View All Events Button -->
      <div class="text-center mt-8">
        <a 
          href="/events"
          class="inline-flex items-center gap-2 px-6 py-3 
                 bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-xl 
                 transition-all duration-200 hover:-translate-y-0.5"
        >
          View All Events
        </a>
      </div>
    </div>
  </div>
</div>
