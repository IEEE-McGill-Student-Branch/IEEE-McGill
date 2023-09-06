<script>
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
  import { DarkMode } from 'flowbite-svelte';
  
  let darkModeClasses = 'text-red-500 dark:text-rose-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-xl p-2';
  import IEEELogo from '$images/small_logo.png';
</script>

<Navbar let:hidden let:toggle rounded fluid color="form" >
  <NavBrand href="/">
    <img src={IEEELogo} class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
    <span class="self-center whitespace-nowrap text-xl font-semibold text-white">IEEE McGill</span>
  </NavBrand>
  <NavHamburger on:click={toggle} />
  <NavUl {hidden} class="transition-all">
    <NavLi class="text-white hover:bg-black dark:text-white" href="/">Home</NavLi>
    <NavLi class="NavItem" href="/events">Events</NavLi>
    <NavLi class="NavItem" href="/members">Members</NavLi>
  </NavUl>
  <DarkMode btnClass={darkModeClasses}/>
</Navbar>
