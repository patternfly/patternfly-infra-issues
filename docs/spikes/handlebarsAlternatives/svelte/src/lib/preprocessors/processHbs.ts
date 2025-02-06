// src/lib/preprocessors/processHbs.ts

import Handlebars from 'handlebars';
import fs from 'fs/promises';
import path from 'path';

const hbs = Handlebars.create();

// 1. Register HBS templates
export async function registerHbsTemplates() {
  // Basic setup
  hbs.registerHelper('pfv', () => 'pf-v5-');
  hbs.registerPartial('partial-block', '{{> @partial-block}}');

  const baseDir = path.join(process.cwd(), 'src', 'patternfly');

  try {
    async function loadHbsFiles(dir: string) {
      const entries = await fs.readdir(dir, { withFileTypes: true });

      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
          await loadHbsFiles(fullPath);
        } else if (entry.name.endsWith('.hbs')) {
          const content = await fs.readFile(fullPath, 'utf-8');
          const name = path.basename(entry.name, '.hbs');
          hbs.registerPartial(name, content);
        }
      }
    }

    await loadHbsFiles(baseDir);
    return true;
  } catch (error) {
    console.error('Error registering HBS templates:', error);
    return false;
  }
}

// 2. Parse and render HBS fence blocks
export function createHbsPreprocessor() {
  let isRegistered = false;

  return {
    name: 'hbs-preprocessor',
    markup: async ({ content, filename }) => {
      // Only process markdown files
      if (!filename?.endsWith('.md')) {
        return { code: content };
      }

      // Ensure templates are registered
      if (!isRegistered) {
        isRegistered = await registerHbsTemplates();
      }

      try {
        const processedContent = content.replace(
          /```hbs([\s\S]*?)```/g,
          (match, hbsContent) => {
            try {
              const template = hbs.compile(hbsContent.trim());
              const result = template({});
              return '```html\n' + result + '\n```';
            } catch (error) {
              console.error('Error processing HBS block:', error);
              return match;
            }
          }
        );

        return {
          code: processedContent
        };
      } catch (error) {
        console.error('Error in HBS preprocessor:', error);
        return { code: content };
      }
    }
  };
}

// 3. Update svelte.config.js to handle the sequence
export function setupHbsProcessing(config) {
  return {
    ...config,
    preprocess: [
      createHbsPreprocessor(),
      // mdsvex will run after HBS processing
      config.preprocess
    ]
  };
}