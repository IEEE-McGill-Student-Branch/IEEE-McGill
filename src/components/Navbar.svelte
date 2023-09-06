<script>
  import { page } from "$app/stores";
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
  import IEEELogo from '$images/small_logo.png';
</script>

<Navbar let:hidden let:toggle class="bg-rose-600 rounded-lg m-3 w-auto">
  <NavBrand href="/">
    <img src={IEEELogo} class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">IEEE McGill</span>
  </NavBrand>
  <NavHamburger on:click={toggle} />
  <NavUl {hidden}>
    <NavLi href="/" aria-current={$page.url.pathname === "/" ? "page" : undefined}>Home</NavLi>
    <NavLi href="/events">Events</NavLi>
    <NavLi href="/members">Members</NavLi>
  </NavUl>
</Navbar>

<!-- <nav>
  <ul>
    <li id="webTitle"><p>IEEE McGill</p></li>
    <div id="navContent">
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
      <li aria-current={$page.url.pathname === "/contacts" ? "page" : undefined}>
        <a href="/contacts">Contact Us</a>
      </li>
    </div>
  </ul>
</nav> -->

<style lang="postcss">
  /* nav {

    #navContent {
      @apply hidden w-full md:block md:w-auto;
    }

    ul {
      #webTitle {
        @apply block md:hidden;
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

      // for the little arrow below
      li[aria-current="page"] {
        @apply bg-rose-700 rounded-md;

        @media (min-width: 1024px) {
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
  } */
</style>
