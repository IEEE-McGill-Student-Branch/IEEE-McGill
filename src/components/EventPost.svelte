<script>
    /**
     * @type {string}
     */
    export let eventSlug;
</script>

<article id="{eventSlug}">
    <a href="/events/{eventSlug}">
    <div class="img">
        <slot name="thumbnail"/>
    </div>

  <h2>
    <slot name="title">
      <em>No title for this event post?</em>
    </slot>
  </h2>

  <p>
    <slot name=date/>
    <slot name=location/>
  </p>

  <p>
    <slot name="shortDescription">
      <em>No short description :(</em>
    </slot>
  </p>
</a>
</article>

<style lang="postcss">
    * {
      transition: all 0.1s ease-out; 
    }

    article {
        @apply p-4 m-6 max-w-sm bg-neutral-50;
        @apply border-4 border-gray-300;
        @apply rounded-md shadow-md;
        @apply overflow-hidden;
        /* When an event post is hovered over */
        @apply hover:border-rose-300 hover:shadow-lg hover:cursor-pointer;
    }

    h2 {
        @apply text-2xl;
        @apply font-bold;
        @apply mb-2;
    }
    
    p {
        @apply text-lg text-gray-700 text-justify;
        @apply mb-4;
    }

    .img {
        @apply m-5 object-cover object-center;
    }
</style>
