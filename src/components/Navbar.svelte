<script lang="ts">
  import { page } from "$app/stores";
</script>

<nav class="">
  <!-- <img src={Logo} alt="Logo" width="50px" /> -->
  <ul>
    <li aria-current={$page.url.pathname === "/" ? "page" : undefined}>
      <a href="/">Home</a>
    </li>
    <li aria-current={$page.url.pathname === "/events" ? "page" : undefined}>
      <a href="/events">Events</a>
    </li>
    <li aria-current={$page.url.pathname === "/sponsors" ? "page" : undefined}>
      <a href="/sponsors">Sponsors</a>
    </li>
    <li aria-current={$page.url.pathname === "/members" ? "page" : undefined}>
      <a href="/members">Members</a>
    </li>
  </ul>
</nav>

<style lang="postcss">
  /* Normal Desktop Settings */
  nav {
    width: 100%;
    @apply bg-rose-600;
  }

  nav ul {
    @apply list-none overflow-hidden flex items-center gap-3;
    @apply justify-evenly;
  }

  nav ul li {
    @apply float-left relative w-44;
    transition: all 0.1s linear;
  }

  /* for the little arrow on top */
  nav ul li[aria-current='page']::before {
    @apply w-0 h-0 absolute top-0;
    content: '';
		left: calc(50% - 0.5rem);
		border: 0.5rem solid transparent;
		border-top: 0.5rem solid #fff;
  }

  nav ul li[aria-current='page']{
    @apply bg-rose-800 ;
  }

  nav ul li:hover {
    @apply bg-rose-950 text-slate-800 shadow-lg cursor-pointer;
  }

  nav ul li a {
    margin: 0 1rem;
    @apply text-2xl p-4 block text-center font-bold text-white;
  }

  @media (max-width: 768px) {
    nav {
      display: none;
    }
    nav ul {
      @apply flex-col;
      @apply items-center;
      @apply gap-2;
    }

    nav ul li {
      @apply text-2xl;
    }
  }
</style>
