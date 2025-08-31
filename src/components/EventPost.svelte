<script>
  
  /**
   * @typedef {Object} Props
   * @property {string} eventSlug
   * @property {import('svelte').Snippet} [thumbnail]
   * @property {import('svelte').Snippet} [title]
   * @property {import('svelte').Snippet} [shortDescription]
   */

  /** @type {Props} */
  let {
    eventSlug,
    thumbnail,
    title,
    shortDescription
  } = $props();
</script>

<a href="/events/{eventSlug}">
  <article id={eventSlug}>
    <div class="img">
      {#if thumbnail}{@render thumbnail()}{:else}
        <em>Thumbnail in the making :)</em>
      {/if}
    </div>

    <h2>
      {#if title}{@render title()}{:else}
        <em>No title for this event post?</em>
      {/if}
    </h2>

    <!-- <p>
      <slot name="date"/> <slot name="location"/>
    </p> -->

    <p>
      {#if shortDescription}{@render shortDescription()}{:else}
        <em>Empty description</em>
      {/if}
    </p>
  </article>
</a>

<style lang="postcss">
  * {
    transition: all 0.1s ease-out;
  }

  article {
    @apply flex flex-col place-content-evenly items-center;
    @apply px-3 m-2 w-80 h-72;
    @apply lg:grid lg:p-6 lg:m-6;
    @apply border-4 border-gray-300;
    @apply rounded-lg shadow-md;
    @apply overflow-hidden;
    /* When an event post is hovered over */
    @apply hover:border-rose-300 hover:shadow-lg hover:cursor-pointer;
  }

  h2 {
    @apply text-xl text-center;
    @apply font-bold;
    @apply mb-2 border-b-2 border-gray-400 pb-2;
  }

  p {
    @apply text-base text-center;
    @apply mb-4 px-3 md:px-0;
  }

  .img {
    @apply flex justify-center m-6 object-cover object-center h-24 items-center;
  }
</style>
