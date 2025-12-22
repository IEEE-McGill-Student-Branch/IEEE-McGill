<script>
  let { eventSlug, thumbnail, title, shortDescription } = $props();
</script>

<style>
  .event-card {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .event-card:hover {
    transform: translateY(-8px);
  }

  .event-card:hover .thumbnail-container {
    transform: scale(1.05);
  }

  .thumbnail-container {
    transition: transform 0.3s ease;
  }
</style>

<a href={`/events/${eventSlug}`} class="block h-full">
  <article
    id={eventSlug}
    class="event-card h-full flex flex-col bg-white dark:bg-slate-800 rounded-2xl shadow-lg 
           hover:shadow-2xl hover:shadow-rose-500/10 overflow-hidden
           border border-gray-100 dark:border-slate-600"
  >
    <!-- Thumbnail -->
    <div class="relative h-48 bg-linear-to-br from-gray-100 to-white dark:from-slate-700 dark:to-slate-800 overflow-hidden">
      {#if thumbnail}
        <div class="thumbnail-container w-full h-full flex items-center justify-center p-6">
          <img 
            src={thumbnail} 
            alt="Event {title} thumbnail" 
            class="max-h-full max-w-full object-contain"
          />
        </div>
      {:else}
        <div class="w-full h-full flex items-center justify-center">
          <div class="text-center">
            <svg class="w-12 h-12 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span class="text-gray-400 text-sm">Image coming soon</span>
          </div>
        </div>
      {/if}
      
      <!-- Gradient overlay -->
      <div class="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-white dark:from-slate-800 to-transparent"></div>
    </div>

    <!-- Content -->
    <div class="flex-1 p-6 flex flex-col">
      <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
        {#if title}
          {title}
        {:else}
          <span class="text-gray-400 italic">Untitled Event</span>
        {/if}
      </h2>

      <p class="text-gray-600 dark:text-gray-200 text-sm leading-relaxed flex-1 line-clamp-3">
        {shortDescription || "More details coming soon..."}
      </p>

      <!-- Read more link -->
      <div class="mt-4 pt-4 border-t border-gray-100 dark:border-slate-600">
        <span class="inline-flex items-center text-rose-500 dark:text-rose-300 font-medium text-sm group-hover:text-rose-600">
          Learn more
          <svg class="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </div>
  </article>
</a>
