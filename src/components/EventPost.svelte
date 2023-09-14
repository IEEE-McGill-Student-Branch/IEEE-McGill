<script>
  /**
   * @type {string}
   */
  export let eventSlug;
</script>

<a href="/events/{eventSlug}">
<article id={eventSlug}>
    <div class="img">
      <slot name="thumbnail">
        <em>Thumbnail in the making :)</em>
      </slot>
    </div>

    <h2>
      <slot name="title">
        <em>No title for this event post?</em>
      </slot>
    </h2>

    <!-- <p>
      <slot name="date"/> <slot name="location"/>
    </p> -->

    <p>
      <slot name="shortDescription">
        <em>Empty description</em>
      </slot>
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
