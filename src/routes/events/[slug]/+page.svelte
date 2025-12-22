<script>
  let { data } = $props();
</script>

<svelte:head>
  <title>{data.post.title} | IEEE McGill</title>
</svelte:head>

<style>
  /* Light mode hero */
  .event-hero {
    background: linear-gradient(135deg, #fafafa 0%, #f1f5f9 50%, #fafafa 100%);
    position: relative;
    overflow: hidden;
  }

  .event-hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: 
      radial-gradient(circle at 0% 0%, rgba(244, 63, 94, 0.06) 0%, transparent 50%),
      radial-gradient(circle at 100% 100%, rgba(139, 92, 246, 0.05) 0%, transparent 50%);
  }

  /* Dark mode hero */
  :global(.dark) .event-hero {
    background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%);
  }

  :global(.dark) .event-hero::before {
    background-image: 
      radial-gradient(circle at 0% 0%, rgba(244, 63, 94, 0.2) 0%, transparent 50%),
      radial-gradient(circle at 100% 100%, rgba(139, 92, 246, 0.15) 0%, transparent 50%);
  }

  .grid-pattern {
    position: absolute;
    inset: 0;
    background-image: 
      linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px);
    background-size: 40px 40px;
  }

  :global(.dark) .grid-pattern {
    background-image: 
      linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
  }

  .accent-line {
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, #f43f5e, #8b5cf6);
    border-radius: 2px;
  }

  /* Light mode corner accent */
  .corner-accent {
    background: linear-gradient(to bottom left, rgba(244, 63, 94, 0.08), transparent);
  }

  :global(.dark) .corner-accent {
    background: linear-gradient(to bottom left, rgba(244, 63, 94, 0.1), transparent);
  }

  /* Light/dark mode text */
  .hero-back-link {
    color: #64748b;
  }

  .hero-back-link:hover {
    color: #f43f5e;
  }

  :global(.dark) .hero-back-link {
    color: #94a3b8;
  }

  :global(.dark) .hero-back-link:hover {
    color: white;
  }

  .hero-title {
    color: #0f172a;
  }

  :global(.dark) .hero-title {
    color: white;
  }

  .hero-meta-label {
    color: #94a3b8;
  }

  .hero-meta-value {
    color: #1e293b;
  }

  :global(.dark) .hero-meta-value {
    color: white;
  }

  .hero-meta-icon-bg {
    background: rgba(244, 63, 94, 0.1);
  }

  :global(.dark) .hero-meta-icon-bg {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(4px);
  }
</style>

<div class="min-h-screen bg-white dark:bg-gray-900">
  <!-- Event Hero Header -->
  <div class="event-hero py-16 md:py-20 px-4">
    <div class="grid-pattern"></div>
    
    <!-- Decorative corner -->
    <div class="corner-accent absolute top-0 right-0 w-48 h-48"></div>
    
    <div class="relative z-10 max-w-4xl mx-auto">
      <!-- Back link -->
      <a 
        href="/events" 
        class="hero-back-link inline-flex items-center gap-2 transition-colors mb-6 text-sm group"
      >
        <svg class="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        Back to Events
      </a>

      <!-- Accent line -->
      <div class="accent-line mb-6"></div>

      <!-- Title -->
      <h1 class="hero-title text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
        {data.post.title}
      </h1>

      <!-- Event Meta -->
      <div class="flex flex-wrap gap-6">
        {#if data.post.date}
          <div class="flex items-center gap-3">
            <div class="hero-meta-icon-bg w-10 h-10 rounded-lg flex items-center justify-center">
              <svg class="w-5 h-5 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p class="hero-meta-label text-xs uppercase tracking-wider">Date & Time</p>
              <p class="hero-meta-value font-medium">{data.post.date}</p>
            </div>
          </div>
        {/if}

        {#if data.post.location}
          <div class="flex items-center gap-3">
            <div class="hero-meta-icon-bg w-10 h-10 rounded-lg flex items-center justify-center">
              <svg class="w-5 h-5 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <p class="hero-meta-label text-xs uppercase tracking-wider">Location</p>
              <p class="hero-meta-value font-medium">{data.post.location}</p>
            </div>
          </div>
        {/if}
      </div>
    </div>
  </div>

  <!-- Content -->
  <div class="py-12 px-4">
    <div class="max-w-4xl mx-auto">
      <article class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 md:p-10 border border-gray-200 dark:border-gray-700">
        <div class="content prose prose-gray dark:prose-invert max-w-none
                    prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white
                    prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-p:leading-relaxed
                    prose-a:text-rose-500 dark:prose-a:text-rose-400 prose-a:no-underline hover:prose-a:underline
                    prose-strong:text-gray-900 dark:prose-strong:text-white
                    prose-code:bg-gray-200 dark:prose-code:bg-gray-700 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded dark:prose-code:text-rose-300
                    prose-pre:bg-gray-900 prose-pre:rounded-xl
                    prose-img:rounded-xl prose-img:shadow-lg
                    prose-blockquote:border-rose-400 prose-blockquote:text-gray-500 dark:prose-blockquote:text-gray-400">
          {@html data.postContent}
        </div>
      </article>
    </div>
  </div>
</div>
