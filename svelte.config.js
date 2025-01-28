import { mdsvex } from 'mdsvex';
import handlebars from 'handlebars';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-static';
import { GLOBAL_STATIC_IMPORTS } from "./src/config/helpers/global.injections.js";
import { GLOBAL_ALIASES } from "./src/config/helpers/global.aliases.js";

function processHbs(value) {
  return value.replace(/```hbs([\s\S]*?)```/g, (_, templateCode) => {
    return `<div>${handlebars.compile(templateCode.trim())({})}</div>`;
  });
}

const config = {
  extensions: [".svelte", ".svx", ".md"],
  resolve: GLOBAL_ALIASES,
  preprocess: [
    {
      markup: ({ content }) => processHbs(content),
    },
    mdsvex({
      extensions: ['.svx', '.md'],
    }),
    vitePreprocess()
  ],
  plugins: [
    {
      name: 'global-utilities',
      transform(code, id) {
        if (id.endsWith('.svelte') || id.endsWith('.svx') || id.endsWith('.md')) {
          const baseImports = [...GLOBAL_STATIC_IMPORTS];
          // const dynamicImports = [ ...GLOBAL_DYNAMIC_IMPORTS ];
          // const allImports = [...baseImports, ...dynamicImports];
          const allImports = [...baseImports];

          // Dynamic import example:
          // if (code.includes('pfPrefix')) {
          //   dynamicImports.push("import { pfPrefix } from '$scripts/helpers';");
          // }

          return {
            code: allImports.join('\n') + '\n\n' + code,
            map: null
          };
        }
      }
    },
  ],
  kit: {
    adapter: adapter()
  }
};

export default config;