<script>
  /**
   * @type {string}
   * The website link of the sponsor
   */
  export let sponsorLink;
</script>

<div class="sblock">
  <a href={sponsorLink} rel="external" target="_blank">
    <slot name="logo">
      <em><img src="https://via.placeholder.com/150" alt="sponsor-logo-missing"/></em>
    </slot>
  </a>
    <slot name="name"/>
</div>

<style lang="postcss">
  .sblock {
    @apply flex flex-row items-center justify-center;
    @apply p-4 m-6 bg-white dark:bg-zinc-100;
    @apply border-4 border-gray-300;
    @apply rounded-md;
    @apply shadow-md;
    
    @apply hover:border-rose-300 hover:shadow-lg hover:cursor-pointer;
  }
</style>
