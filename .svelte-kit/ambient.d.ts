
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const NVM_INC: string;
	export const npm_package_devDependencies_stylelint_config_recess_order: string;
	export const COREPACK_ROOT: string;
	export const npm_package_devDependencies_stylelint_config_recommended: string;
	export const npm_package_devDependencies_prettier: string;
	export const npm_package_devDependencies__eslint_compat: string;
	export const TERM_PROGRAM: string;
	export const npm_package_devDependencies_typescript_eslint: string;
	export const npm_package_devDependencies_eslint_plugin_svelte: string;
	export const NODE: string;
	export const INIT_CWD: string;
	export const _P9K_TTY: string;
	export const NVM_CD_FLAGS: string;
	export const npm_package_devDependencies_typescript: string;
	export const npm_package_devDependencies_prettier_plugin_svelte: string;
	export const npm_config_version_git_tag: string;
	export const SHELL: string;
	export const TERM: string;
	export const npm_package_devDependencies_vite: string;
	export const TMPDIR: string;
	export const HOMEBREW_REPOSITORY: string;
	export const npm_package_scripts_lint: string;
	export const npm_config_init_license: string;
	export const TERM_PROGRAM_VERSION: string;
	export const npm_package_scripts_prepack: string;
	export const npm_package_scripts_dev: string;
	export const TERM_SESSION_ID: string;
	export const npm_package_devDependencies_stylelint_order: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const npm_package_exports___svelte: string;
	export const npm_config_registry: string;
	export const ZSH: string;
	export const PNPM_HOME: string;
	export const npm_package_devDependencies_stylelint_config_standard: string;
	export const npm_package_readmeFilename: string;
	export const npm_package_devDependencies_globals: string;
	export const USER: string;
	export const NVM_DIR: string;
	export const npm_package_description: string;
	export const LS_COLORS: string;
	export const npm_package_license: string;
	export const npm_package_devDependencies__eslint_js: string;
	export const npm_package_scripts_check_watch: string;
	export const COMMAND_MODE: string;
	export const npm_package_devDependencies_mdsvex: string;
	export const npm_package_devDependencies__sveltejs_adapter_static: string;
	export const npm_package_devDependencies_case_anything: string;
	export const npm_package_scripts_buildold: string;
	export const SSH_AUTH_SOCK: string;
	export const npm_package_scripts_lint_sass: string;
	export const npm_package_scripts_lint_sass_fix: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const npm_package_devDependencies_eslint: string;
	export const TERM_FEATURES: string;
	export const npm_execpath: string;
	export const npm_package_devDependencies_vite_plugin_markdown: string;
	export const PAGER: string;
	export const npm_package_devDependencies_svelte: string;
	export const npm_package_devDependencies_stylelint_use_logical_spec: string;
	export const LSCOLORS: string;
	export const PATH: string;
	export const TERMINFO_DIRS: string;
	export const npm_config_argv: string;
	export const npm_package_devDependencies__sveltejs_adapter_node: string;
	export const LaunchInstanceID: string;
	export const _: string;
	export const npm_package_dependencies_rollup: string;
	export const __CFBundleIdentifier: string;
	export const COREPACK_ENABLE_DOWNLOAD_PROMPT: string;
	export const npm_package_dependencies__starptech_prettyhtml: string;
	export const npm_package_devDependencies_handlebars: string;
	export const PWD: string;
	export const npm_package_devDependencies_publint: string;
	export const npm_package_devDependencies__sveltejs_package: string;
	export const npm_package_scripts_preview: string;
	export const P9K_SSH: string;
	export const npm_lifecycle_event: string;
	export const LANG: string;
	export const P9K_TTY: string;
	export const npm_package_packageManager: string;
	export const npm_package_devDependencies_marked: string;
	export const npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
	export const npm_package_types: string;
	export const npm_package_svelte: string;
	export const npm_package_name: string;
	export const ITERM_PROFILE: string;
	export const npm_package_devDependencies_stylelint_config_prettier: string;
	export const npm_package_devDependencies_stylelint_config_standard_scss: string;
	export const npm_package_devDependencies_sass: string;
	export const npm_package_exports___types: string;
	export const npm_package_scripts_build: string;
	export const npm_config_version_commit_hooks: string;
	export const XPC_FLAGS: string;
	export const npm_package_dependencies_path: string;
	export const npm_package_devDependencies_stylelint: string;
	export const npm_config_bin_links: string;
	export const npm_package_devDependencies_eslint_config_prettier: string;
	export const XPC_SERVICE_NAME: string;
	export const npm_package_devDependencies_vite_plugin_handlebars: string;
	export const npm_package_version: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const COLORFGBG: string;
	export const HOME: string;
	export const SHLVL: string;
	export const npm_package_type: string;
	export const npm_package_prepare: string;
	export const LC_TERMINAL_VERSION: string;
	export const npm_config_save_prefix: string;
	export const npm_config_strict_ssl: string;
	export const HOMEBREW_PREFIX: string;
	export const npm_config_version_git_message: string;
	export const npm_package_scripts_lint_js: string;
	export const ITERM_SESSION_ID: string;
	export const LOGNAME: string;
	export const LESS: string;
	export const YARN_WRAP_OUTPUT: string;
	export const npm_package_scripts_format: string;
	export const npm_lifecycle_script: string;
	export const npm_package_peerDependencies_svelte: string;
	export const RHPC_CODE_ROOT: string;
	export const NVM_BIN: string;
	export const BUN_INSTALL: string;
	export const npm_package_devDependencies__types_glob: string;
	export const npm_config_version_git_sign: string;
	export const npm_config_ignore_scripts: string;
	export const npm_config_user_agent: string;
	export const HOMEBREW_CELLAR: string;
	export const INFOPATH: string;
	export const npm_package_devDependencies__types_node: string;
	export const npm_package_files_2: string;
	export const LC_TERMINAL: string;
	export const _P9K_SSH_TTY: string;
	export const npm_package_files_1: string;
	export const npm_package_files_0: string;
	export const npm_config_init_version: string;
	export const npm_config_ignore_optional: string;
	export const SECURITYSESSIONID: string;
	export const npm_package_scripts_check: string;
	export const COLORTERM: string;
	export const npm_node_execpath: string;
	export const npm_package_sideEffects_0: string;
	export const npm_config_version_tag_prefix: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		NVM_INC: string;
		npm_package_devDependencies_stylelint_config_recess_order: string;
		COREPACK_ROOT: string;
		npm_package_devDependencies_stylelint_config_recommended: string;
		npm_package_devDependencies_prettier: string;
		npm_package_devDependencies__eslint_compat: string;
		TERM_PROGRAM: string;
		npm_package_devDependencies_typescript_eslint: string;
		npm_package_devDependencies_eslint_plugin_svelte: string;
		NODE: string;
		INIT_CWD: string;
		_P9K_TTY: string;
		NVM_CD_FLAGS: string;
		npm_package_devDependencies_typescript: string;
		npm_package_devDependencies_prettier_plugin_svelte: string;
		npm_config_version_git_tag: string;
		SHELL: string;
		TERM: string;
		npm_package_devDependencies_vite: string;
		TMPDIR: string;
		HOMEBREW_REPOSITORY: string;
		npm_package_scripts_lint: string;
		npm_config_init_license: string;
		TERM_PROGRAM_VERSION: string;
		npm_package_scripts_prepack: string;
		npm_package_scripts_dev: string;
		TERM_SESSION_ID: string;
		npm_package_devDependencies_stylelint_order: string;
		npm_package_devDependencies__sveltejs_kit: string;
		npm_package_exports___svelte: string;
		npm_config_registry: string;
		ZSH: string;
		PNPM_HOME: string;
		npm_package_devDependencies_stylelint_config_standard: string;
		npm_package_readmeFilename: string;
		npm_package_devDependencies_globals: string;
		USER: string;
		NVM_DIR: string;
		npm_package_description: string;
		LS_COLORS: string;
		npm_package_license: string;
		npm_package_devDependencies__eslint_js: string;
		npm_package_scripts_check_watch: string;
		COMMAND_MODE: string;
		npm_package_devDependencies_mdsvex: string;
		npm_package_devDependencies__sveltejs_adapter_static: string;
		npm_package_devDependencies_case_anything: string;
		npm_package_scripts_buildold: string;
		SSH_AUTH_SOCK: string;
		npm_package_scripts_lint_sass: string;
		npm_package_scripts_lint_sass_fix: string;
		__CF_USER_TEXT_ENCODING: string;
		npm_package_devDependencies_eslint: string;
		TERM_FEATURES: string;
		npm_execpath: string;
		npm_package_devDependencies_vite_plugin_markdown: string;
		PAGER: string;
		npm_package_devDependencies_svelte: string;
		npm_package_devDependencies_stylelint_use_logical_spec: string;
		LSCOLORS: string;
		PATH: string;
		TERMINFO_DIRS: string;
		npm_config_argv: string;
		npm_package_devDependencies__sveltejs_adapter_node: string;
		LaunchInstanceID: string;
		_: string;
		npm_package_dependencies_rollup: string;
		__CFBundleIdentifier: string;
		COREPACK_ENABLE_DOWNLOAD_PROMPT: string;
		npm_package_dependencies__starptech_prettyhtml: string;
		npm_package_devDependencies_handlebars: string;
		PWD: string;
		npm_package_devDependencies_publint: string;
		npm_package_devDependencies__sveltejs_package: string;
		npm_package_scripts_preview: string;
		P9K_SSH: string;
		npm_lifecycle_event: string;
		LANG: string;
		P9K_TTY: string;
		npm_package_packageManager: string;
		npm_package_devDependencies_marked: string;
		npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
		npm_package_types: string;
		npm_package_svelte: string;
		npm_package_name: string;
		ITERM_PROFILE: string;
		npm_package_devDependencies_stylelint_config_prettier: string;
		npm_package_devDependencies_stylelint_config_standard_scss: string;
		npm_package_devDependencies_sass: string;
		npm_package_exports___types: string;
		npm_package_scripts_build: string;
		npm_config_version_commit_hooks: string;
		XPC_FLAGS: string;
		npm_package_dependencies_path: string;
		npm_package_devDependencies_stylelint: string;
		npm_config_bin_links: string;
		npm_package_devDependencies_eslint_config_prettier: string;
		XPC_SERVICE_NAME: string;
		npm_package_devDependencies_vite_plugin_handlebars: string;
		npm_package_version: string;
		npm_package_devDependencies_svelte_check: string;
		COLORFGBG: string;
		HOME: string;
		SHLVL: string;
		npm_package_type: string;
		npm_package_prepare: string;
		LC_TERMINAL_VERSION: string;
		npm_config_save_prefix: string;
		npm_config_strict_ssl: string;
		HOMEBREW_PREFIX: string;
		npm_config_version_git_message: string;
		npm_package_scripts_lint_js: string;
		ITERM_SESSION_ID: string;
		LOGNAME: string;
		LESS: string;
		YARN_WRAP_OUTPUT: string;
		npm_package_scripts_format: string;
		npm_lifecycle_script: string;
		npm_package_peerDependencies_svelte: string;
		RHPC_CODE_ROOT: string;
		NVM_BIN: string;
		BUN_INSTALL: string;
		npm_package_devDependencies__types_glob: string;
		npm_config_version_git_sign: string;
		npm_config_ignore_scripts: string;
		npm_config_user_agent: string;
		HOMEBREW_CELLAR: string;
		INFOPATH: string;
		npm_package_devDependencies__types_node: string;
		npm_package_files_2: string;
		LC_TERMINAL: string;
		_P9K_SSH_TTY: string;
		npm_package_files_1: string;
		npm_package_files_0: string;
		npm_config_init_version: string;
		npm_config_ignore_optional: string;
		SECURITYSESSIONID: string;
		npm_package_scripts_check: string;
		COLORTERM: string;
		npm_node_execpath: string;
		npm_package_sideEffects_0: string;
		npm_config_version_tag_prefix: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
