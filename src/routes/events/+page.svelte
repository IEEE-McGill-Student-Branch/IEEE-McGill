<script>
  import EventPost from "$components/EventPost.svelte";
  let { data } = $props();
</script>

<svelte:head>
  <title>Events | IEEE McGill</title>
</svelte:head>

<div class="min-h-screen bg-white dark:bg-gray-900">
  <!-- Page Header -->
  <div class="py-12 px-4 border-b border-gray-200 dark:border-gray-800">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-white">
        Our Events
      </h1>
      <p class="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
        Discover workshops, competitions, networking events, and more. Join us to learn, connect, and grow!
      </p>
    </div>
  </div>

  <!-- Events Grid -->
  <div class="py-12 px-4">
    <div class="max-w-7xl mx-auto">
      {#if data.summaries && data.summaries.length > 0}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {#each data.summaries as event, i}
            <div class="fade-in" style="animation-delay: {0.05 * i}s;">
              <EventPost
                eventSlug={event.slug}
                thumbnail={event.background}
                title={event.title}
                shortDescription={event.shortDesc}
              />
            </div>
          {/each}
        </div>
      {:else}
        <div class="text-center py-16">
          <div class="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-600 dark:text-gray-300 mb-1">No events yet</h3>
          <p class="text-gray-500 dark:text-gray-400 text-sm">Check back soon for upcoming events!</p>
        </div>
      {/if}
    </div>
  </div>
</div>
