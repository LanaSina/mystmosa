import{c as o}from"/mystmosa/build/_shared/chunk-RAQ24GF6.js";var g=o((N,s)=>{function l(e){return e?typeof e=="string"?e:e.source:null}function u(e){return E("(?=",e,")")}function E(...e){return e.map(t=>l(t)).join("")}function a(e,n={}){return n.variants=e,n}function d(e){let n="[A-Za-z0-9_$]+",t=a([e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{begin:/\w+@/,relevance:0},{className:"doctag",begin:"@[A-Za-z]+"}]})]),i={className:"regexp",begin:/~?\/[^\/\n]+\//,contains:[e.BACKSLASH_ESCAPE]},r=a([e.BINARY_NUMBER_MODE,e.C_NUMBER_MODE]),c=a([{begin:/"""/,end:/"""/},{begin:/'''/,end:/'''/},{begin:"\\$/",end:"/\\$",relevance:10},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE],{className:"string"});return{name:"Groovy",keywords:{built_in:"this super",literal:"true false null",keyword:"byte short char int long boolean float double void def as in assert trait abstract static volatile transient public private protected synchronized final class interface enum if else for while switch case break default continue throw throws try catch finally implements extends new import package return instanceof"},contains:[e.SHEBANG({binary:"groovy",relevance:10}),t,c,i,r,{className:"class",beginKeywords:"class interface trait enum",end:/\{/,illegal:":",contains:[{beginKeywords:"extends implements"},e.UNDERSCORE_TITLE_MODE]},{className:"meta",begin:"@[A-Za-z]+",relevance:0},{className:"attr",begin:n+"[ 	]*:",relevance:0},{begin:/\?/,end:/:/,relevance:0,contains:[t,c,i,r,"self"]},{className:"symbol",begin:"^[ 	]*"+u(n+":"),excludeBegin:!0,end:n+":",relevance:0}],illegal:/#|<\//}}s.exports=d});export{g as a};
