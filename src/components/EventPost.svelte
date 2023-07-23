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
        @apply p-4 m-6 w-96 bg-blue-50;
        @apply border-4 border-gray-300;
        @apply rounded-md;
        @apply shadow-md;
    }

    article:hover {
      @apply border-blue-500 cursor-pointer shadow-lg;
    }
    
    h2 {
        @apply text-2xl;
        @apply font-bold;
        @apply mb-2;
    }
    
    p {
        @apply text-gray-700 text-justify;
        @apply mb-4;
    }

    .img {
        @apply m-4 h-64 object-cover object-center;
    }
</style>
