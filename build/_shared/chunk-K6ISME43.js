import{b as d,d as p}from"/mystmosa/build/_shared/chunk-RAQ24GF6.js";function n(t){return t?t.match(R)!==null:!1}var R,s=d(()=>{R=/^10.\d{4,9}\/[-._;()/:A-Z0-9]+$/i});function h(t){let e=t.pathname.split("/").filter(r=>!!r);return e.slice(0,-1).map((r,a)=>`${r}/${e[a+1]}`)}var m,E,S,L,T,i,o,c=d(()=>{s();m={test(t){return!!t.hostname.match(/(?:dx\.)?(?:www\.)?doi\.org/)},parse(t){return t.pathname.replace(/^\//,"")}},E={test(t){return t.hostname.endsWith("elifesciences.org")&&t.pathname.startsWith("/articles/")},parse(t){return`10.7554/eLife.${t.pathname.replace("/articles/","")}`}},S={test(t){return t.hostname.endsWith("zenodo.org")&&!!t.pathname.match(/^\/(?:record|badge\/latestdoi)\//)},parse(t){return`10.5281/zenodo.${t.pathname.replace(/^\/(?:record|badge\/latestdoi)\//,"")}`}};L={test(t){return!!h(t).find(n)},parse(t){return h(t).find(n)}},T={test(t){return n(t.searchParams.get("id"))},parse(t){return t.searchParams.get("id")}},i=[m],o=[m,L,E,S,T]});var P={};p(P,{DEFAULT_RESOLVERS:()=>o,STRICT_RESOLVERS:()=>i,default:()=>_});function g(t,e){return t?!!u(t,e):!1}function u(t,e){let r;if(!!t){if(n(t))return t;if(t.startsWith("doi:")&&(r=t.slice(4),n(r)))return r;try{let a=new URL(t.startsWith("http")?t:`http://${t}`),f=(e?.strict?i:o).find(l=>l.test(a));if(!f)return;r=f.parse(a)}catch{}if(n(r))return r}}function v(t,e){let r=u(t,e);if(!!r)return`https://doi.org/${r}`}var _,A=d(()=>{c();s();c();_={validatePart:n,validate:g,normalize:u,buildUrl:v}});export{_ as a,P as b,A as c};
