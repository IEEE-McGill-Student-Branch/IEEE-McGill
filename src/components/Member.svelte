<script>
  /**
   * @type {string}
   */
  export let email;
</script>

<article class="member">
  <slot name="profilepic">
    <span class="missing">N/A</span>
  </slot>
  <div id="info">
    <p id="name">
      <slot name="name" />
    </p>
    <p id="pronouns">
      <slot name="pronouns">
        <span class="missing">pro/noun</span>
      </slot>
    </p>
    <p id="role">
      <slot name="role">
        <span class="missing">no role?</span>
      </slot>
    </p>
    <a id="email" href="mailto:{email}">
      <slot name=email>
        <span class=missing>email?</span>
      </slot>
    </a>
  </div>
</article>

<style lang="postcss">
  * {
    transition: all 0.7s ease-in-out;
  }

  .member {
    @apply flex flex-col items-center;
    @apply rounded-md w-96 p-4 m-4;
    @apply border-x-2 border-x-rose-300 border-y-4 border-y-rose-500;
    @apply shadow-lg;
  }

  #info {
    @apply text-center;
  }

  #name {
    @apply text-xl font-semibold font-sans;
  }

  #pronouns {
    @apply text-base ;
  }

  #role {
    @apply text-lg;
  }

  #email {
    @apply text-rose-700 underline;
  }

  .missing {
    color: #999;
  }
</style>
