# Design Notes 
> to be added to the Wiki

## About
- [Antoine Phan](https://github.com/notkaramel) here! I build this while learning so I'm pretty sure there are different and better ways to approach this project. 
- Hence, this file is a record of my thought process, design decisions, what I learned while building and reading through the documentation. I hope this would be useful for future maintainers to understand the project and make changes accordingly.

## Upfront Design Decisions
### SvelteKit?
- I chose SvelteKit because it's relatively new, has great documentation and tutorials, and most importantly, it's a framework that can handles both server-side (backend) and client-side (frontend) rendering. 

### TailwindCSS?
- I chose TailwindCSS because of its built-in classes and ease of use within SvelteKit. 
- TailwindCSS also has great documentation, core concepts & design philosophy that I find friendly and easy to understand.

## Development (& Tips)
### Routing
- The main reason I chose SvelteKit is because of its routing system. Simply, each page is a `.svelte` file in the `src/routes` directory.
- Main page is the `+page.svelte` file in the `src/routes` directory. Other pages are in their respective folders, with a same filename. At first this may be confusing, so I suggest working one page (or maybe up to two) at a time.

### Type Safety
- TL;DR: I used JSDoc for type safety and documentation.
- When I first started this project, SvelteKit supported TypeScript in its infancy state. After a few months, they dropped TypeScript and moved on to use JSDoc for type safety and documentation. This was mainly TypeScript requires a compile stage, which is not ideal for package developers/maintainers. This didn't apply to our project, but I moved to JSDoc anyway because the codebase was simple.

### Styling
- Please install TailwindCSS IntelliSense extension for VSCode and disable GitHub Copilot (or any AI co-pilot) while using it. It gives you the TailwindCSS classes as you type, which is very helpful.
- Each element uses `@apply` to apply TailwindCSS  classes. I avoid adding classes or style tag to the element itself because it's not as clean and easy to read.

#### Nesting Syntax
- One of my favorite feature of SCSS is nesting syntax. In TailwindCSS, here is what you have to do:
  - Add `tailwindcss/nesting` plugin to your PostCSS config file.
```js
// in postcss.config.js
export default {
plugins: {
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
},
}
```
  - Add the following in `svelte.config.js`:
```js
// ...
import nesting from 'tailwindcss';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // ...
    preprocess: vitePreprocess({
            postcss: {
                plugins: [
                    nesting()
                ]
            }
        })
    // ...
}

``` 
  - Now you can use nesting syntax in your `.svelte` files:
```html
<style lang="postcss">
  nav {
    ul {
      @apply bg-rose-500;
    }
  }    
</style>
```
#### Responsive Styling
- TailwindCSS core concept on responsive styling is mobile-first. This means that the default styling is for mobile, and you add classes to style for larger screens.

