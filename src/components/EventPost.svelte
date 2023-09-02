<script>
  /**
   * @type {string}
   */
  export let eventSlug;
</script>

<article id={eventSlug}>
  <a href="/events/{eventSlug}">
    <div class="img">
      <slot name="thumbnail" />
    </div>

    <h2>
      <slot name="title">
        <em>No title for this event post?</em>
      </slot>
    </h2>

    <p>
      <slot name="date" />
      <slot name="location" />
    </p>

    <p>
      <slot name="shortDescription">
        <em>Empty description</em>
      </slot>
    </p>
  </a>
</article>

<style lang="postcss">
  * {
    transition: all 0.1s ease-out;
  }

  article {
    @apply px-3 m-1 max-w-sm bg-white lg:p-6 lg:m-6;
    @apply border-4 border-gray-300;
    @apply rounded-lg shadow-md;
    @apply overflow-hidden;
    /* When an event post is hovered over */
    @apply hover:border-rose-300 hover:shadow-lg hover:cursor-pointer;
    @apply flex items-center justify-center;
  }

  h2 {
    @apply text-xl text-left lg:text-justify;
    @apply font-bold;
    @apply mb-2;
  }

  p {
    @apply text-base text-gray-700 text-left lg:text-justify;
    @apply mb-4;
  }

  .img {
    @apply flex justify-center m-6 object-cover object-center h-24 items-center;
  }
</style>
