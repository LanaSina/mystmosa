import{c as n}from"/myst_NCA/build/_shared/chunk-RAQ24GF6.js";var i=n((u,t)=>{t.exports=r;r.displayName="csp";r.aliases=[];function r(s){(function(o){function e(a){return RegExp(/([ \t])/.source+"(?:"+a+")"+/(?=[\s;]|$)/.source,"i")}o.languages.csp={directive:{pattern:/(^|[\s;])(?:base-uri|block-all-mixed-content|(?:child|connect|default|font|frame|img|manifest|media|object|prefetch|script|style|worker)-src|disown-opener|form-action|frame-(?:ancestors|options)|input-protection(?:-(?:clip|selectors))?|navigate-to|plugin-types|policy-uri|referrer|reflected-xss|report-(?:to|uri)|require-sri-for|sandbox|(?:script|style)-src-(?:attr|elem)|upgrade-insecure-requests)(?=[\s;]|$)/i,lookbehind:!0,alias:"property"},scheme:{pattern:e(/[a-z][a-z0-9.+-]*:/.source),lookbehind:!0},none:{pattern:e(/'none'/.source),lookbehind:!0,alias:"keyword"},nonce:{pattern:e(/'nonce-[-+/\w=]+'/.source),lookbehind:!0,alias:"number"},hash:{pattern:e(/'sha(?:256|384|512)-[-+/\w=]+'/.source),lookbehind:!0,alias:"number"},host:{pattern:e(/[a-z][a-z0-9.+-]*:\/\/[^\s;,']*/.source+"|"+/\*[^\s;,']*/.source+"|"+/[a-z0-9-]+(?:\.[a-z0-9-]+)+(?::[\d*]+)?(?:\/[^\s;,']*)?/.source),lookbehind:!0,alias:"url",inside:{important:/\*/}},keyword:[{pattern:e(/'unsafe-[a-z-]+'/.source),lookbehind:!0,alias:"unsafe"},{pattern:e(/'[a-z-]+'/.source),lookbehind:!0,alias:"safe"}],punctuation:/;/}})(s)}});export{i as a};
