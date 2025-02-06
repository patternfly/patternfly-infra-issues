// src/lib/handlebars.js
import path from 'path';
import fs from 'fs';
import Handlebars from 'handlebars';
import glob from 'glob';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, './src/patternfly');

export const hbs = Handlebars.create();
export const hbsFileMap = {};

function registerHBSPartial(file) {
 const partialName = path.basename(file, '.hbs');
 const partialNameFull = path.dirname(file.replace(/^.*src\/patternfly\//g, '')) + '/' + partialName;
 const partialContents = fs.readFileSync(file, 'utf8');

 hbsFileMap[partialName] = file;
 hbs.registerPartial(partialName, partialContents);
 hbs.registerPartial(partialNameFull, partialContents);
}

function compileHBS(globPattern) {
 const files = glob.sync(globPattern);
 files.forEach(registerHBSPartial);
}

// compileHBS(path.join(projectRoot, 'src/patternfly/**/*.hbs'), `!${path.join(projectRoot, 'src/patternfly/**/example/**/*.hbs')}`);
compileHBS(path.join(projectRoot, 'src/patternfly/**/*.hbs'));