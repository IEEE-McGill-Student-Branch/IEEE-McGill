import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [sveltekit(), tailwindcss()],
  server: {
    watch: {
      // Watch the posts directory for changes to enable hot-reloading
      ignored: ['!**/posts/**']
    }
  }
});
