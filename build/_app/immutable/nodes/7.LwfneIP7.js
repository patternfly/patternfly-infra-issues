import"../chunks/Bg9kRutz.js";import"../chunks/69_IOA4Y.js";import{p as h,z as n,A as g,v as u,u as A,w as p,B as c,C as f,D as m}from"../chunks/ChzcytEk.js";import{t as P,b as k}from"../chunks/Bxzg7UnF.js";import{h as d}from"../chunks/zjc63Z6l.js";import{i as x}from"../chunks/jeE_Am1a.js";import{H as y}from"../chunks/CSEJpVsk.js";const C={title:"Alert Examples"},{title:H}=C;var I=P("<h1></h1> <!> <!>",1);function F(_,b){h(b,!1);const t=f(),a=f(),e=y.create();e.registerPartial("alert-icon",'<span class="pf-v6-c-alert__icon">{{alert-icon--type}}</span>'),e.registerPartial("alert-title",'<h4 class="pf-v6-c-alert__title">{{> @partial-block}}</h4>'),e.registerPartial("screen-reader",'<span class="pf-v6-u-screen-reader">{{> @partial-block}}</span>'),e.registerPartial("alert",`<div class="pf-v6-c-alert{{#if alert--modifier}} {{alert--modifier}}{{/if}}"
    {{#if alert--attribute}}
      {{{alert--attribute}}}
    {{/if}}>
    {{> @partial-block}}
  </div>`);const r="",l=`{{#> alert alert--modifier="pf-m-info" alert--attribute='aria-label="Information alert"'}}
    {{#> alert-title}}
      {{#> screen-reader}}Info alert:{{/screen-reader}}
      Alert from hbs
    {{/alert-title}}
  {{/alert}}`;n(()=>{},()=>{c(t,e.compile(r))}),n(()=>{},()=>{c(a,e.compile(l))}),g(),x();var i=I(),s=u(i);s.textContent=H;var o=p(s,2);d(o,()=>m(t)({alert:r}));var v=p(o,2);d(v,()=>m(a)({template2:l})),k(_,i),A()}export{F as component};
