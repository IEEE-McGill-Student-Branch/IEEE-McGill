<script lang="ts">
  import { page } from "$app/stores";
</script>

<nav class="">
  <!-- <img src={Logo} alt="Logo" width="50px" /> -->
  <ul>
    <li><a href="/" aria-current={$page.url.pathname === '/'}>Home</a></li>
    <li><a href="/events" aria-current={$page.url.pathname === '/events'}>Events</a></li>
    <li><a href="/sponsors">Sponsors</a></li>
    <li><a href="/members">Members</a></li>
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
    @apply float-left;
    transition: all 0.2s ease-in-out;
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
