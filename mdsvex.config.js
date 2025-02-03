import { defineMDSveXConfig as defineConfig } from 'mdsvex';

const config = defineConfig({
  extensions: ['.svelte.md', '.md', '.svx'],

  remarkPlugins: [
    // This runs before mdsvex processes markdown
    () => (tree) => {
      // Initialize Handlebars here
      return tree;
    }
  ],
});

export default config;