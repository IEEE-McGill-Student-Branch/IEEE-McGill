<script>
  let { eventSlug, thumbnail, title, shortDescription } = $props();
</script>

<a href={`/events/${eventSlug}`} class="block">
  <article
    id={eventSlug}
    class="flex flex-col items-center justify-evenly px-3 m-2 w-80 h-72
           lg:p-6 lg:m-6
           border-4 border-gray-300 rounded-lg shadow-md overflow-hidden
           hover:border-rose-300 hover:shadow-lg hover:cursor-pointer transition-all duration-100 ease-out"
  >
    <div
      class="flex justify-center items-center m-6 h-24 object-cover object-center"
    >
      {#if thumbnail}
        <div>
          <img src={thumbnail} alt="Event {title} thumbnail" class="h-36 p-4"/>
        </div>
      {:else}
        <em class="text-gray-500 italic">Thumbnail in the making :)</em>
      {/if}
    </div>

    <h2
      class="text-xl font-bold text-center mb-2 border-b-2 border-gray-400 pb-2"
    >
      {#if title}
        <div>{title}</div>
      {:else}
        <em class="text-gray-500 italic">No title for this event post?</em>
      {/if}
    </h2>

    <p class="text-base text-center mb-4 px-3 md:px-0">{shortDescription}</p>
  </article>
</a>
