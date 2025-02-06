import"../chunks/Bg9kRutz.js";import"../chunks/69_IOA4Y.js";import{p as l,u as o,x as s,y as p}from"../chunks/ChzcytEk.js";import{t as n,b as c}from"../chunks/Bxzg7UnF.js";import{s as f}from"../chunks/CrneTvMS.js";import{i as d}from"../chunks/jeE_Am1a.js";import{H as m}from"../chunks/CSEJpVsk.js";function u(){return{title:"Your Title Here"}}const T=Object.freeze(Object.defineProperty({__proto__:null,load:u},Symbol.toStringTag,{value:"Module"}));var v=n("<div><!></div>");function H(e,t){l(t,!1);const r=m.create();r.registerPartial("@partial-block","{{TEMPLATE}}"),r.registerPartial("alert-icon",'<span class="pf-v6-c-alert__icon">{{alert-icon--type}}</span>'),r.registerPartial("alert-title",'<h4 class="pf-v6-c-alert__title">{{> @partial-block}}</h4>'),r.registerPartial("screen-reader",'<span class="pf-v6-u-screen-reader">{{> @partial-block}}</span>'),r.registerPartial("alert",`<div class="pf-v6-c-alert{{#if alert--modifier}} {{alert--modifier}}{{/if}}"
    {{#if alert--attribute}}
      {{{alert--attribute}}}
    {{/if}}>
    {{> @partial-block}}
  </div>`),d();var a=v(),i=s(a);f(i,t,"default",{}),p(a),c(e,a),o()}export{H as component,T as universal};
