import{c as r}from"/myst_NCA/build/_shared/chunk-RAQ24GF6.js";var l=r((o,t)=>{t.exports=s;s.displayName="diff";s.aliases=[];function s(d){(function(i){i.languages.diff={coord:[/^(?:\*{3}|-{3}|\+{3}).*$/m,/^@@.*@@$/m,/^\d.*$/m]};var f={"deleted-sign":"-","deleted-arrow":"<","inserted-sign":"+","inserted-arrow":">",unchanged:" ",diff:"!"};Object.keys(f).forEach(function(e){var n=f[e],a=[];/^\w+$/.test(e)||a.push(/\w+/.exec(e)[0]),e==="diff"&&a.push("bold"),i.languages.diff[e]={pattern:RegExp("^(?:["+n+`].*(?:\r
?|
|(?![\\s\\S])))+`,"m"),alias:a,inside:{line:{pattern:/(.)(?=[\s\S]).*(?:\r\n?|\n)?/,lookbehind:!0},prefix:{pattern:/[\s\S]/,alias:/\w+/.exec(e)[0]}}}}),Object.defineProperty(i.languages.diff,"PREFIXES",{value:f})})(d)}});export{l as a};
