import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { GLOBAL_ALIASES } from "./src/config/helpers/global.aliases.js";
// import path from 'path';

export default defineConfig({
	resolve: GLOBAL_ALIASES,
	build: {  },
    // lib: {
		// 	name: 'pfbuild',
    //   entry: ['src/main.js'],
    //   fileName: (format, entryName) => `my-lib-${entryName}.${format}.js`,
    //   // cssFileName: 'my-lib-style',
    // }
	plugins: [
		sveltekit(),
		// rollupPlugin()
	],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler' // or "modern"
      }
    }
  },
	server: {
		fs: {
			allow: ['./src']
		}
	},
});
