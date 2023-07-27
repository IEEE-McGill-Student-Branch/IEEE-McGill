<script>
  /**
   * @type {string}
   * The website link of the sponsor
   */
  export let sponsorLink;
</script>

<div class="sponsor-block">
  <a href={sponsorLink} rel="external" target="_blank">
    <slot name="logo">
      <em><img src="https://via.placeholder.com/150" alt="sponsor logo" /></em>
    </slot>
    <!-- <slot name="name">
      <em>Sponsor's name missing</em>
    </slot> -->
  </a>
</div>

<style lang="postcss">
  .sponsor-block {
    @apply flex flex-col items-center justify-center;
    @apply p-4 m-6 w-80 bg-blue-50;
    @apply border-4 border-gray-300;
    @apply rounded-md;
    @apply shadow-md;
  }
</style>
