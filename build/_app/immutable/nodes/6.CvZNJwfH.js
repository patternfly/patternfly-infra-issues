import"../chunks/Bg9kRutz.js";import"../chunks/69_IOA4Y.js";import{v as c,R as d,p as q,z as P,A as x,u as S,w as u,B as y,C as A,M as k,D as C}from"../chunks/ChzcytEk.js";import{c as p,b as n,t as w,e as H}from"../chunks/Bxzg7UnF.js";import{h as M}from"../chunks/zjc63Z6l.js";import{i as j}from"../chunks/jeE_Am1a.js";import{C as m,s as f}from"../chunks/NLtzt37d.js";import{s as v,r as b}from"../chunks/DH3la-m_.js";import{H as B}from"../chunks/CSEJpVsk.js";function E(l,r){let a=b(r,["$$slots","$$events","$$legacy","children"]);m(l,v(()=>a,{name:"alert",children:(e,s)=>{var t=p(),i=c(t);f(i,()=>r.children??d),n(e,t)},$$slots:{default:!0}}))}function I(l,r){let a=b(r,["$$slots","$$events","$$legacy","children"]);m(l,v(()=>a,{name:"alert__title",children:(e,s)=>{var t=p(),i=c(t);f(i,()=>r.children??d),n(e,t)},$$slots:{default:!0}}))}const N={title:"Alert"},{title:T}=N;var z=w("<h1></h1> <!> <!>",1);function W(l,r){q(r,!1);const a=A(),e=B.create();e.registerPartial("alert-icon",'<span class="pf-v6-c-alert__icon">{{alert-icon--type}}</span>'),e.registerPartial("alert-title",'<h4 class="pf-v6-c-alert__title">{{> @partial-block}}</h4>'),e.registerPartial("alert-description",`<div class="pf-v6-c-alert__description{{#if alert-description--modifier}} {{alert-description--modifier}}{{/if}}"
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
`),e.registerPartial("screen-reader",`<{{#if screen-reader--element}}{{screen-reader--element}}{{else}}span{{/if}} class="pf-v6-u-screen-reader{{#if screen-reader--modifier}} {{screen-reader--modifier}}{{/if}}"
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
</{{#if screen-reader--element}}{{screen-reader--element}}{{else}}span{{/if}}>`),e.registerPartial("alert",`<div class="pf-v6-c-alert{{#if alert--modifier}} {{alert--modifier}}{{/if}}"
    {{#if alert--attribute}}
      {{{alert--attribute}}}
    {{/if}}>
    {{> @partial-block}}
  </div>`);const s=`
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
{{/alert}}`;P(()=>{},()=>{y(a,e.compile(s))}),x(),j();var t=z(),i=c(t);i.textContent=T;var o=u(i,2);E(o,{children:($,D)=>{I($,{children:(g,F)=>{k();var _=H("Alert from svelte, page.md");n(g,_)},$$slots:{default:!0}})},$$slots:{default:!0}});var h=u(o,2);M(h,()=>C(a)({alert1:s})),n(l,t),S()}export{W as component};
