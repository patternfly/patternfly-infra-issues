import path from "path";

export const GLOBAL_ALIASES = {
  alias: {

    // Modules
    '$modules': path.resolve('./src/lib/modules'),
    '$components': path.resolve('./src/lib/modules/components'),
    '$hbs': path.resolve('./src/lib/modules/hbs'),
    '$layouts': path.resolve('./src/lib/modules/layouts'),
    '$utils': path.resolve('./src/lib/utils'),
    '$config': path.resolve('./src/config'),
    '$page': path.resolve('./src/lib/modules/page'),

    '$helpers': path.resolve('./src/lib/helpers'),

    // Styles
    '$patternfly': path.resolve('./src/lib/patternfly'),

    // Library
    '$types': path.resolve('./src/lib/types'),
    '$stores': path.resolve('./src/lib/stores'),
    '$routes': path.resolve('./src/routes'),
  }
};