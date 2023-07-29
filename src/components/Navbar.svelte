<script>
  import { page } from "$app/stores";
  import Logo from "$images/small_logo.png";
</script>

<nav>
  <ul>
    <!-- <li id=logo>IEEE McGill</li> -->
    <!-- <li id="logo">
      <p>
        <img src={Logo} alt="Logo"/>
      IEEE McGill
      </p>
    </li> -->

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
    <li aria-current={$page.url.pathname === "/contact" ? "page" : undefined}>
      <a href="/contact">Contact</a>
    </li>
  </ul>
</nav>

<style lang="postcss">
  nav {
    @apply bg-rose-600 rounded-lg m-3;

    /* #logo {
      @apply w-10 inline;
    } */

    ul {
      @apply list-none overflow-hidden flex items-center gap-2 justify-center;

      li {
        @apply float-left relative w-48 rounded-lg;
        
        :hover {
          transition: all 200ms ease-in-out;
          @apply bg-rose-900 shadow-lg rounded-lg cursor-pointer;
        }

        a {
          @apply text-2xl p-4 block text-center font-bold text-white;
        }
      }

      /* for the little arrow below */
      li[aria-current="page"] {
        @apply bg-rose-700 rounded-md;

        ::before {
          @apply w-0 h-0 absolute bottom-0;
          content: "";
          left: calc(50% - 0.5rem);
          border: 0.5rem solid transparent;
          border-bottom: 0.5rem solid #fff;
        }
      }
    }
  }

  
</style>
