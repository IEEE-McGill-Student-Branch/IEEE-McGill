<article class="member">
  <slot name="profilepic">
    <span class="missing">N/A</span>
  </slot>
  <div>
    <slot name="name" id="name">
      <span class="missing">Who?</span>
    </slot>
    <slot name="pronouns">
      <span class="missing">N/A</span>
    </slot>
    <slot name="role">
      <span class="missing">Role?</span>
    </slot>
  </div>
</article>

<style lang="postcss">
  * {
    transition: all 1s ease-in-out;
  }

  .member {
    @apply flex items-center;
    width: 40rem;
    height: 24rem;
    border: #da5555af 5px solid;
    border-radius: 13px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
    padding: 1em;
    margin: 2rem 2rem;
  }

  .missing {
    color: #999;
  }

  /* .moreInfo {
		visibility: hidden;
		transition: all 1s ease-in-out;
	}

	.member:hover > .moreInfo {
		cursor: pointer;
		visibility: visible;
	} */
</style>
