<script>
  import { page } from "$app/stores";
  import Logo from "$images/small_logo.png";
</script>

<nav>
  <ul>
    <!-- <li id=logo>IEEE McGill</li> -->
    <!-- <img id="logo" src={Logo} alt="Logo"/> -->

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
  nav {
    @apply bg-rose-600 rounded-lg m-3;

    ul {
      @apply list-none overflow-hidden flex items-center gap-3 justify-evenly;

      li {
        @apply float-left relative w-48 transition-all;

        a {
          @apply text-2xl p-4 block text-center font-bold text-white;
        }
      }

      /* for the little arrow below */
      li[aria-current="page"] {
        @apply bg-rose-800 rounded-md;

        ::before {
          @apply w-0 h-0 absolute bottom-0;
          content: "";
          left: calc(50% - 0.5rem);
          border: 0.5rem solid transparent;
          border-bottom: 0.5rem solid #fff;
        }
        :hover {
          @apply bg-rose-950 text-slate-800 shadow-lg cursor-pointer;
        }
      }
    }
  }

  /* nav ul:first-child{
    @apply lg:m-auto;
  } */

  /* #logo {
    @apply rounded-lg bg-red-700; 
  } */

  /* ?@media  {
    nav {
    }
    nav ul {
      @apply flex-col;
      @apply items-center;
      @apply gap-2;
    }

    nav ul li {
      @apply text-2xl;
    }
  } */
</style>
