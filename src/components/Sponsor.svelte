<script>
  /**
   * @typedef {Object} Props
   * @property {string} sponsorLink
   * @property {import('svelte').Snippet} [logo]
   */

  /** @type {Props} */
  let { sponsorLink, logo } = $props();
</script>

<div
  class="flex items-center justify-center bg-white dark:bg-zinc-100
         px-3 m-2 w-52 h-52 border-4 border-gray-300 rounded-md shadow-md
         hover:border-rose-300 hover:shadow-lg hover:cursor-pointer transition-all duration-150 ease-out"
>
  <a href={sponsorLink} rel="external" target="_blank">
    {#if logo}
      {@render logo()}
    {:else}
      <em>
        <img
          src="https://via.placeholder.com/150"
          alt="sponsor logo missing"
          class="object-contain w-full h-full"
        />
      </em>
    {/if}
  </a>
</div>
