<script>
  import Logo from "$images/small_logo.png";
  import GroupPhoto from "$images/exec/IEEE-AllExecs.jpg";
  import Section from "$components/Section.svelte";
  import Sponsor from "$components/Sponsor.svelte";
  import { AccordionItem, Accordion } from "flowbite-svelte";
  import "../app.css";

  let { data } = $props();
</script>

<svelte:head>
  <title>IEEE McGill</title>
</svelte:head>

<style>
  /* Light mode hero */
  .hero {
    background: linear-gradient(135deg, #fafafa 0%, #f1f5f9 50%, #fafafa 100%);
    position: relative;
    overflow: hidden;
  }

  .hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: 
      radial-gradient(circle at 25% 25%, rgba(244, 63, 94, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.06) 0%, transparent 50%);
  }

  /* Dark mode hero */
  :global(.dark) .hero {
    background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%);
  }

  :global(.dark) .hero::before {
    background-image: 
      radial-gradient(circle at 25% 25%, rgba(244, 63, 94, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.1) 0%, transparent 50%);
  }

  .grid-pattern {
    position: absolute;
    inset: 0;
    background-image: 
      linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px);
    background-size: 60px 60px;
    mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
  }

  :global(.dark) .grid-pattern {
    background-image: 
      linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
  }

  .floating {
    animation: float 6s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  .glow-ring {
    position: absolute;
    border-radius: 50%;
    border: 1px solid rgba(244, 63, 94, 0.2);
    animation: pulse-glow 4s ease-in-out infinite;
  }

  :global(.dark) .glow-ring {
    border-color: rgba(244, 63, 94, 0.3);
  }

  @keyframes pulse-glow {
    0%, 100% { opacity: 0.3; transform: scale(1); }
    50% { opacity: 0.6; transform: scale(1.02); }
  }

  /* Light mode text adjustments */
  .hero-subtitle {
    color: #64748b;
  }

  :global(.dark) .hero-subtitle {
    color: white;
  }

  .hero-tagline {
    color: #475569;
  }

  :global(.dark) .hero-tagline {
    color: #cbd5e1;
  }

  .hero-btn-secondary {
    background: rgba(0, 0, 0, 0.05);
    color: #1e293b;
    border-color: rgba(0, 0, 0, 0.1);
  }

  .hero-btn-secondary:hover {
    background: rgba(0, 0, 0, 0.1);
    border-color: rgba(0, 0, 0, 0.2);
  }

  :global(.dark) .hero-btn-secondary {
    background: rgba(255, 255, 255, 0.05);
    color: white;
    border-color: rgba(255, 255, 255, 0.2);
  }

  :global(.dark) .hero-btn-secondary:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.4);
  }

  /* Light mode corner accents */
  .corner-accent-1 {
    background: linear-gradient(to bottom left, rgba(244, 63, 94, 0.1), transparent);
  }

  .corner-accent-2 {
    background: linear-gradient(to top right, rgba(139, 92, 246, 0.1), transparent);
  }

  :global(.dark) .corner-accent-1 {
    background: linear-gradient(to bottom left, rgba(244, 63, 94, 0.2), transparent);
  }

  :global(.dark) .corner-accent-2 {
    background: linear-gradient(to top right, rgba(139, 92, 246, 0.2), transparent);
  }
</style>

<!-- Hero Section -->
<div class="hero min-h-[85vh] flex items-center justify-center px-4">
  <div class="grid-pattern"></div>
  
  <!-- Decorative rings -->
  <div class="glow-ring w-[300px] h-[300px] md:w-[500px] md:h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
  <div class="glow-ring w-[400px] h-[400px] md:w-[650px] md:h-[650px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style="animation-delay: 1s;"></div>
  
  <!-- Corner accents -->
  <div class="corner-accent-1 absolute top-0 right-0 w-64 h-64"></div>
  <div class="corner-accent-2 absolute bottom-0 left-0 w-64 h-64"></div>

  <div class="relative z-10 text-center max-w-4xl mx-auto">
    <!-- Logo with glow -->
    <div class="floating mb-8">
      <div class="relative inline-block">
        <div class="absolute inset-0 bg-rose-500/30 blur-2xl rounded-full scale-150"></div>
        <img 
          src={Logo} 
          alt="IEEE McGill Emblem" 
          class="relative w-28 h-28 md:w-36 md:h-36 mx-auto"
        />
      </div>
    </div>

    <!-- Main heading -->
    <h1 class="text-5xl md:text-7xl lg:text-8xl font-black mb-4 tracking-tight text-rose-500">
      IEEE McGill
    </h1>
    
    <p class="hero-subtitle text-lg md:text-xl mb-3 tracking-widest uppercase font-medium">
      Student Branch
    </p>

    <!-- Tagline -->
    <p class="hero-tagline text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
      Empowering the next generation of engineers and innovators through workshops, networking, and hands-on experiences.
    </p>

    <!-- CTA Buttons -->
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a 
        href="/events" 
        class="group px-8 py-4 bg-rose-500 hover:bg-rose-400 text-white font-bold rounded-2xl
               transition-all duration-300 hover:shadow-lg hover:shadow-rose-500/30 hover:-translate-y-1"
      >
        <span class="flex items-center justify-center gap-2">
          Explore Events
          <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </a>
      <a 
        href="https://www.ieee.org/membership/join/index.html" 
        target="_blank"
        class="hero-btn-secondary px-8 py-4 font-bold rounded-2xl border backdrop-blur-sm
               transition-all duration-300 hover:-translate-y-1"
      >
        IEEE Membership
      </a>
    </div>
  </div>
</div>

<!-- Main Content -->
<div class="bg-white dark:bg-gray-900">
  <!-- About Section -->
  <div class="py-20 px-4">
    <div class="max-w-6xl mx-auto">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Image side -->
        <div class="relative">
          <div class="absolute inset-0 bg-rose-500 rounded-2xl transform rotate-2"></div>
          <img 
            src={GroupPhoto} 
            alt="IEEE McGill Team" 
            class="relative rounded-2xl shadow-xl w-full object-cover aspect-4/3"
          />
        </div>
        
        <!-- Text side -->
        <div class="space-y-6">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Who We Are
          </h2>
          <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
            The McGill University IEEE Student Branch was established in April 1968 and is one of the largest IEEE student branches in Eastern Canada. We're dedicated to the development of professional skills of electrical & computer engineering students and the larger academic community.
          </p>
          <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
            We are a group of passionate undergraduate and graduate ECE & CS students who want to have a great time, create a friendly community, and most importantly learn about research and new innovations.
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Features Section -->
  <div class="py-20 px-4 bg-gray-50 dark:bg-gray-800">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          What We Offer
        </h2>
        <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Join us for exciting opportunities to learn, connect, and grow as future leaders in technology.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-6">
        <!-- Card 1 -->
        <div class="card-hover bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
          <div class="w-12 h-12 bg-rose-500 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
            </svg>
          </div>
          <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Technical Workshops</h3>
          <p class="text-gray-600 dark:text-gray-300 text-sm">Hands-on sessions covering cutting-edge technologies, from embedded systems to machine learning.</p>
        </div>

        <!-- Card 2 -->
        <div class="card-hover bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
          <div class="w-12 h-12 bg-rose-500 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
          </div>
          <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Networking Events</h3>
          <p class="text-gray-600 dark:text-gray-300 text-sm">Connect with industry professionals, alumni, and fellow students at our social and professional events.</p>
        </div>

        <!-- Card 3 -->
        <div class="card-hover bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
          <div class="w-12 h-12 bg-rose-500 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
            </svg>
          </div>
          <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Competitions</h3>
          <p class="text-gray-600 dark:text-gray-300 text-sm">Participate in IEEEXtreme and other competitions to test your skills and win exciting prizes.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Sponsors Section -->
  <div class="py-20 px-4">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Our Sponsors
        </h2>
        <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Special thanks to our amazing sponsors who make our events possible.
        </p>
      </div>

      <div class="flex flex-wrap justify-center items-center gap-6">
        {#each data.sponsors as sponsor}
          <a 
            href={sponsor.link} 
            target="_blank" 
            rel="noopener noreferrer"
            class="group bg-gray-50 dark:bg-gray-800 p-4 rounded-xl hover:shadow-md 
                   transition-all duration-200 hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
          >
            <img 
              src={sponsor.logo} 
              alt={sponsor.name} 
              class="h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-200"
            />
          </a>
        {/each}
      </div>
    </div>
  </div>

  <!-- FAQ Section -->
  <div class="py-20 px-4 bg-gray-50 dark:bg-gray-800">
    <div class="max-w-3xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Frequently Asked Questions
        </h2>
        <p class="text-gray-600 dark:text-gray-400">
          Got questions? We've got answers.
        </p>
      </div>

      <div class="space-y-3">
        <Accordion multiple class="border-none">
          <AccordionItem
            class="bg-white dark:bg-gray-900 rounded-xl mb-3 border border-gray-200 dark:border-gray-700"
          >
            {#snippet header()}
              <span class="font-semibold text-gray-900 dark:text-white">How to register for IEEE Student Membership?</span>
            {/snippet}
            <p class="text-gray-600 dark:text-gray-300 pb-4">
              Follow the link to <a
                href="https://www.ieee.org/membership/join/index.html"
                target="_blank"
                class="text-rose-500 dark:text-rose-400 hover:underline font-medium">IEEE Membership</a>
              and select <strong>"Join as a student"</strong>. Follow the steps to create your account!
            </p>
          </AccordionItem>

          <AccordionItem class="bg-white dark:bg-gray-900 rounded-xl mb-3 border border-gray-200 dark:border-gray-700">
            {#snippet header()}
              <span class="font-semibold text-gray-900 dark:text-white">Is there any discount for the membership?</span>
            {/snippet}
            <p class="text-gray-600 dark:text-gray-300 pb-4">
              Unfortunately, there is no discount code available at the moment. Stay tuned to our newsletter for updates!
            </p>
          </AccordionItem>

          <AccordionItem class="bg-white dark:bg-gray-900 rounded-xl mb-3 border border-gray-200 dark:border-gray-700">
            {#snippet header()}
              <span class="font-semibold text-gray-900 dark:text-white">How can I get updates on events by IEEE McGill?</span>
            {/snippet}
            <p class="text-gray-600 dark:text-gray-300 pb-4">
              You can sign up to 
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfBLRxNxYmR7UxWEuJAscu5ZIueQRd3guV9stMVClLK3zghig/viewform"
                target="_blank"
                class="text-rose-500 dark:text-rose-400 hover:underline font-medium"
              >our newsletter</a> to receive the latest updates about our events and activities.
            </p>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  </div>
</div>
