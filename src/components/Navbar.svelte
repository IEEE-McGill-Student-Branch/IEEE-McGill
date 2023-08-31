<script>
  import { page } from "$app/stores";
</script>

<nav>
  <ul>
    <li id="webTitle"><p>IEEE McGill</p></li>
    <button
      data-collapse-toggle="navbar-default"
      type="button"
      class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg lg:hidden hover:bg-gray-200 ring-gray-200 text-white"
      aria-controls="navbar-default"
      aria-expanded="false"
    >
      <svg
        class="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 15 14"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
    </button>
    <div id="navContent">
      <li aria-current={$page.url.pathname === "/" ? "page" : undefined}>
        <a href="/">Home</a>
      </li>
      <li aria-current={$page.url.pathname === "/events" ? "page" : undefined}>
        <a href="/events">Events</a>
      </li>
      <!-- <li aria-current={$page.url.pathname === "/sponsors" ? "page" : undefined}>
        <a href="/sponsors">Sponsors</a>
      </li> -->
      <li aria-current={$page.url.pathname === "/members" ? "page" : undefined}>
        <a href="/members">Members</a>
      </li>
    </div>
  </ul>
</nav>

<style lang="postcss">
  nav {
    @apply bg-rose-700 rounded-lg m-3;

    #navContent {
      @apply hidden w-full lg:block lg:w-auto;
    }

    ul {
      #webTitle {
        @apply block lg:hidden;
      }

      @apply overflow-hidden flex items-center gap-2 justify-center;

      li {
        @apply float-left relative w-48 rounded-lg;

        :hover {
          transition: all 200ms ease-in-out;
          @apply bg-rose-900 shadow-lg rounded-lg cursor-pointer;
        }

        a,
        p {
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
      }
    }
  }
</style>
