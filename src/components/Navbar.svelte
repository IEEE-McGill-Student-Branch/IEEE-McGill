<script lang="ts">
</script>

<nav class="">
  <!-- <img src={Logo} alt="Logo" width="50px" /> -->
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/events">Events</a></li>
    <li><a href="/sponsors">Sponsors</a></li>
    <li><a href="/members">Members</a></li>
  </ul>
</nav>

<style lang="postcss">
  nav {
    @apply bg-rose-600 px-4 py-2 shadow-md;
  }

  nav ul {
    @apply flex items-center gap-3 justify-center;
  }

  nav ul li {
    @apply text-xl px-4 py-2 fill-inherit;
    transition: all 0.2s ease-in-out;
  }

  nav ul li:hover {
    @apply bg-rose-950 text-slate-800 shadow-lg cursor-pointer;
  }

  nav ul li a {
    margin: 0 1rem;
    @apply text-center font-bold text-white;
  }
</style>
