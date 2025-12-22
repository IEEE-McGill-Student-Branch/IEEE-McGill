<script>
  import { page } from "$app/state";
  import { DarkMode } from "flowbite-svelte";
  import IEEELogo from "$images/small_logo.png";

  let activeUrl = $derived(page.url.pathname);
  let mobileMenuOpen = $state(false);

  function toggleMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }

  function closeMenu() {
    mobileMenuOpen = false;
  }

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/events", label: "Events" },
    { href: "/ourteam", label: "Our Team" },
  ];
</script>

<style>
  .nav-link {
    position: relative;
    transition: color 0.2s ease;
  }

  .nav-link::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--color-rose-main), var(--color-rose-light));
    transition: width 0.3s ease;
    border-radius: 2px;
  }

  .nav-link:hover::after,
  .nav-link.active::after {
    width: 100%;
  }

  .nav-link.active {
    color: var(--color-rose-main);
  }

  .mobile-menu {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-out, opacity 0.2s ease;
    opacity: 0;
  }

  .mobile-menu.open {
    max-height: 300px;
    opacity: 1;
  }

  .hamburger-line {
    transition: all 0.3s ease;
  }

  .hamburger-open .hamburger-line:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  .hamburger-open .hamburger-line:nth-child(2) {
    opacity: 0;
  }

  .hamburger-open .hamburger-line:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }
</style>

<nav class="navbar sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border-b border-gray-200/50 dark:border-gray-700/50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16 md:h-20">
      <!-- Logo and Brand -->
      <a href="/" class="flex items-center gap-3 group" onclick={closeMenu}>
        <div class="relative">
          <div class="absolute inset-0 bg-rose-500/20 rounded-full blur-lg group-hover:bg-rose-500/30 transition-all duration-300"></div>
          <img 
            src={IEEELogo} 
            class="relative h-10 md:h-12 w-auto transition-transform duration-300 group-hover:scale-105" 
            alt="IEEE McGill Logo" 
          />
        </div>
        <span class="text-xl md:text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
          <span class="bg-linear-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">IEEE McGill</span>
        </span>
      </a>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center gap-8">
        {#each navItems as item}
          <a 
            href={item.href}
            class="nav-link text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white font-medium text-lg"
            class:active={activeUrl === item.href}
          >
            {item.label}
          </a>
        {/each}
        
        <!-- CTA Button -->
        <a 
          href="https://www.ieee.org/membership/join/index.html"
          target="_blank"
          rel="noopener noreferrer"
          class="px-5 py-2.5 bg-linear-to-r from-rose-500 to-rose-600 text-white font-semibold rounded-xl
                 hover:from-rose-600 hover:to-rose-700 transition-all duration-300 shadow-md shadow-rose-500/20
                 hover:shadow-lg hover:shadow-rose-500/30 hover:-translate-y-0.5 text-sm"
        >
          IEEE Membership
        </a>

        <!-- Dark Mode Toggle -->
        <DarkMode 
          class="p-2.5 text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 
                 rounded-xl transition-colors duration-200"
        />
      </div>

      <!-- Mobile: Dark Mode + Hamburger -->
      <div class="flex items-center gap-2 md:hidden">
        <DarkMode 
          class="p-2 text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 
                 rounded-lg transition-colors duration-200"
        />
        <button 
          class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          class:hamburger-open={mobileMenuOpen}
          onclick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div class="w-6 h-5 flex flex-col justify-between">
            <span class="hamburger-line block w-full h-0.5 bg-gray-600 dark:bg-gray-300 rounded-full"></span>
            <span class="hamburger-line block w-full h-0.5 bg-gray-600 dark:bg-gray-300 rounded-full"></span>
            <span class="hamburger-line block w-full h-0.5 bg-gray-600 dark:bg-gray-300 rounded-full"></span>
          </div>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div class="mobile-menu md:hidden" class:open={mobileMenuOpen}>
      <div class="py-4 space-y-1 border-t border-gray-200/50 dark:border-gray-700/50">
        {#each navItems as item}
          {@const isActive = activeUrl === item.href}
          <a 
            href={item.href}
            onclick={closeMenu}
            class="block px-4 py-3 rounded-xl font-medium transition-all duration-200
                   {isActive 
                     ? 'text-rose-500 dark:text-rose-400 bg-rose-50 dark:bg-rose-900/20' 
                     : 'text-gray-600 dark:text-gray-200 hover:text-rose-500 dark:hover:text-rose-300 hover:bg-gray-50 dark:hover:bg-slate-700/50'}"
          >
            {item.label}
          </a>
        {/each}
        
        <div class="pt-3 px-4">
          <a 
            href="https://www.ieee.org/membership/join/index.html"
            target="_blank"
            rel="noopener noreferrer"
            onclick={closeMenu}
            class="block w-full text-center px-5 py-3 bg-linear-to-r from-rose-500 to-rose-600 text-white 
                   font-semibold rounded-xl hover:from-rose-600 hover:to-rose-700 transition-all duration-300 
                   shadow-md shadow-rose-500/20"
          >
            Join IEEE
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
