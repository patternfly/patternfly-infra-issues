<script lang='ts'>

  // let { children, data, ...props }: PageProps = $props();

  import Handlebars from "handlebars";

  const hbs = Handlebars.create();
  hbs.registerPartial('@partial-block', '{{TEMPLATE}}');
  hbs.registerPartial('alert-icon', '<span class="pf-v6-c-alert__icon">{{alert-icon--type}}</span>');
  hbs.registerPartial('alert-title', '<h4 class="pf-v6-c-alert__title">{{> @partial-block}}</h4>');
  hbs.registerPartial('screen-reader', '<span class="pf-v6-u-screen-reader">{{> @partial-block}}</span>');
  hbs.registerPartial('alert', `<div class="pf-v6-c-alert{{#if alert--modifier}} {{alert--modifier}}{{/if}}"
    {{#if alert--attribute}}
      {{{alert--attribute}}}
    {{/if}}>
    {{> @partial-block}}
  </div>`);


  // <script lang="ts">
	// import type { PageProps } from './$types';

	// let { data }: PageProps = $props();
</script>

<div>
  <!-- <h1>{data.title}</h1>
  <div>{@html data.content}</div> -->
  <!-- {console.log($inspect(props))}; -->
  <!-- {@render children?.()} -->
  <slot />
</div>