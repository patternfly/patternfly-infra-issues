---
title: Alert Examples
section: components
cssPrefix: ['pf-v6-c-alert','pf-v6-c-alert-group']
---

# {title}

<script>
  import Handlebars from 'handlebars';

  const hbs = Handlebars.create();
  hbs.registerPartial('alert-icon', '<span class="pf-v6-c-alert__icon">{{alert-icon--type}}</span>');
  hbs.registerPartial('alert-title', '<h4 class="pf-v6-c-alert__title">{{> @partial-block}}</h4>');
  hbs.registerPartial('screen-reader', '<span class="pf-v6-u-screen-reader">{{> @partial-block}}</span>');
  hbs.registerPartial('alert', `<div class="pf-v6-c-alert{{#if alert--modifier}} {{alert--modifier}}{{/if}}"
    {{#if alert--attribute}}
      {{{alert--attribute}}}
    {{/if}}>
    {{> @partial-block}}
  </div>`);

  const alert = ``;

  const template2 = `{{#> alert alert--modifier="pf-m-info" alert--attribute='aria-label="Information alert"'}}
    {{#> alert-title}}
      {{#> screen-reader}}Info alert:{{/screen-reader}}
      Alert from hbs
    {{/alert-title}}
  {{/alert}}`;

  $: renderAlert = hbs.compile(alert);
  $: renderAlert2 = hbs.compile(template2);
  import Alert from "$components/alert/Alert.svelte";
</script>

{@html renderAlert({alert})}
{@html renderAlert2({template2})}
