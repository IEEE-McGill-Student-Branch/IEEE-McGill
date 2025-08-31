<script>
  /**
   * @typedef {Object} Props
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
  let { children } = $props();
</script>

<div class="flex justify-center">
  <div
    class="w-[90%] text-lg p-4 bg-white shadow-md mx-2 my-4 md:mx-8 border-2 border-solid
	border-rose-400 rounded-lg dark:bg-gray-800 dark:border-gray-500 text-justify"
  >
    {#if children}{@render children()}{:else}
      <em>Put content here</em>
    {/if}
  </div>
</div>
