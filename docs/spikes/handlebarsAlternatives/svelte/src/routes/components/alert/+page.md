---
title: Alert
---

# {title}

<script lang='ts'>
  import { pfv } from "$lib/modules/components/helpers";
  import { Alert, AlertTitle } from "$components/alert";

  import Handlebars from 'handlebars';
  const hbs = Handlebars.create();

  hbs.registerPartial('alert-icon', '<span class="pf-v6-c-alert__icon">{{alert-icon--type}}</span>');
  hbs.registerPartial('alert-title', '<h4 class="pf-v6-c-alert__title">{{> @partial-block}}</h4>');
  hbs.registerPartial('alert-description', `<div class="pf-v6-c-alert__description{{#if alert-description--modifier}} {{alert-description--modifier}}{{/if}}"
  {{#if alert-description--attribute}}
    {{{alert-description--attribute}}}
  {{/if}}
  {{#if alert--IsExpandable}}
    {{#unless alert--IsExpanded}}
      hidden
    {{/unless}}
  {{/if}}>
  <p>{{> @partial-block}}</p>
</div>
`);
  hbs.registerPartial('screen-reader', `<{{#if screen-reader--element}}{{screen-reader--element}}{{else}}span{{/if}} class="pf-v6-u-screen-reader{{#if screen-reader--modifier}} {{screen-reader--modifier}}{{/if}}"
  {{#if screen-reader--attribute}}
    {{{screen-reader--attribute}}}
  {{/if}}>
  {{#if screen-reader--text}}
    {{screen-reader--text}}
  {{else if @partial-block}}
    {{> @partial-block}}
  {{else}}
    Actions
  {{/if}}
</{{#if screen-reader--element}}{{screen-reader--element}}{{else}}span{{/if}}>`);

  hbs.registerPartial('alert', `<div class="pf-v6-c-alert{{#if alert--modifier}} {{alert--modifier}}{{/if}}"
    {{#if alert--attribute}}
      {{{alert--attribute}}}
    {{/if}}>
    {{> @partial-block}}
  </div>`);

  const alert1 = `
<br>
{{#> alert alert--modifier="pf-m-success" alert--attribute='aria-label="Success alert"'}}
  {{> alert-icon alert-icon--type="check-circle"}}
  {{#> alert-title}}
    {{#> screen-reader}}Success alert:{{/screen-reader}}
      Alert From HBS - Success alert title
  {{/alert-title}}
{{/alert}}
<br>
{{#> alert alert--modifier="pf-m-success" alert--attribute='aria-label="Success alert with title truncation"'}}
  {{> alert-icon alert-icon--type="check-circle"}}
  {{#> alert-title alert-title--modifier="pf-m-truncate"}}
    {{#> screen-reader}}Success alert:{{/screen-reader}}
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque cursus enim fringilla tincidunt. Proin lobortis aliquam dictum. Nam vel ullamcorper nulla, nec blandit dolor. Vivamus pellentesque neque justo, nec accumsan nulla rhoncus id. Suspendisse mollis, tortor quis faucibus volutpat, sem leo fringilla turpis, ac lacinia augue metus in nulla. Cras vestibulum lacinia orci. Pellentesque sodales consequat interdum. Sed porttitor tincidunt metus nec iaculis. Pellentesque non commodo justo. Morbi feugiat rhoncus neque, vitae facilisis diam aliquam nec. Sed dapibus vitae quam at tristique. Nunc vel commodo mi. Mauris et rhoncus leo.
  {{/alert-title}}
  {{#> alert-description}}
    This example uses ".pf-m-truncate" to limit the title to a single line and truncate any overflow text with ellipses.
  {{/alert-description}}
{{/alert}}`;

  $: renderAlert1 = hbs.compile(alert1);

</script>

<Alert>
  <AlertTitle>
    Alert from svelte, page.md
  </AlertTitle>
</Alert>

{@html renderAlert1({alert1})}
