<script>
  
  /**
   * @typedef {Object} Props
   * @property {string} sponsorLink
   * @property {import('svelte').Snippet} [logo]
   */

  /** @type {Props} */
  let { sponsorLink, logo } = $props();
</script>

<div class="sblock">
  <a href={sponsorLink} rel="external" target="_blank">
    {#if logo}{@render logo()}{:else}
      <em><img src="https://via.placeholder.com/150" alt="sponsor-logo-missing"/></em>
    {/if}
  </a>
</div>

<style lang="postcss">
  .sblock {
    @apply flex flex-row items-center place-content-evenly justify-center;
    @apply bg-white dark:bg-zinc-100;
    @apply px-3 m-2 w-52 h-52;
    @apply border-4 border-gray-300;
    @apply rounded-md;
    @apply shadow-md;
    
    @apply hover:border-rose-300 hover:shadow-lg hover:cursor-pointer;
  }
</style>
