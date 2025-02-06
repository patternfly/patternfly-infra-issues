import Handlebars from 'handlebars';
import fs from 'fs/promises';
import path from 'path';

const hbs = Handlebars.create();

// Basic setup
hbs.registerHelper('pfv', () => 'pf-v6-');
hbs.registerPartial('partial-block', '{{> @partial-block}}');

// Load and register partials
export async function registerPartials() {
  const baseDir = path.join(process.cwd(), 'src', 'patternfly');

  try {
    // Recursively read and register .hbs files
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
    console.error('Error registering partials:', error);
    return false;
  }
}