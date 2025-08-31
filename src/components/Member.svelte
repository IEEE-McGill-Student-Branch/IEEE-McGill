<!-- @migration-task Error while migrating Svelte code: This migration would change the name of a slot (email to email_1) making the component unusable -->
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
      <slot name="email">
        <span class="missing">email?</span>
      </slot>
    </a>
  </div>
</article>

<style lang="postcss">
  .member {
    @apply flex flex-col items-center w-80;
    word-break: break-word;
    @apply rounded-md p-4 m-4;
    @apply border-4 border-rose-400;
    @apply dark:border-rose-900;
    @apply shadow-lg;
    
    #info {
      @apply text-center;
    }

    #name {
      @apply text-xl font-semibold font-sans;
    }

    #pronouns {
      @apply text-base;
    }

    #role {
      @apply text-lg;
    }

    #email {
      @apply text-base text-rose-700 underline;
      @apply dark:text-rose-300;
    }

    .missing {
      color: #999;
    }
  }
</style>
