<article class="member">
  <slot name="profilepic">
    <span class="missing">N/A</span>
  </slot>
  <div id="info">
    <p id="name">
      <slot name="name"/>
    </p>
    <p id="pronouns">
    <slot name="pronouns">
      <span class="missing">N/A</span>
    </slot>
  </p>
    <p id=role>
      <slot name="role">
        <span class="missing">Role?</span>
      </slot>
    </p>
  </div>
</article>

<style lang="postcss">
  * {
    transition: all 1s ease-in-out;
  }

  .member {
    @apply flex flex-col items-center;
    width: 20rem;
    /* height: 36rem; */
    border: #da5555af 5px solid;
    border-radius: 13px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    margin: 1rem 1.2rem;
  }

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
  .missing {
    color: #999;
  }
</style>
