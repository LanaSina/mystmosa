import{c as m}from"/mystmosa/build/_shared/chunk-RAQ24GF6.js";var A=m((M,a)=>{function u(e){return e?typeof e=="string"?e:e.source:null}function d(...e){return e.map(o=>u(o)).join("")}function b(e){let n={ruleDeclaration:/^[a-zA-Z][a-zA-Z0-9-]*/,unexpectedChars:/[!@#$^&',?+~`|:]/},o=["ALPHA","BIT","CHAR","CR","CRLF","CTL","DIGIT","DQUOTE","HEXDIG","HTAB","LF","LWSP","OCTET","SP","VCHAR","WSP"],t=e.COMMENT(/;/,/$/),s={className:"symbol",begin:/%b[0-1]+(-[0-1]+|(\.[0-1]+)+){0,1}/},c={className:"symbol",begin:/%d[0-9]+(-[0-9]+|(\.[0-9]+)+){0,1}/},i={className:"symbol",begin:/%x[0-9A-F]+(-[0-9A-F]+|(\.[0-9A-F]+)+){0,1}/},r={className:"symbol",begin:/%[si]/},l={className:"attribute",begin:d(n.ruleDeclaration,/(?=\s*=)/)};return{name:"Augmented Backus-Naur Form",illegal:n.unexpectedChars,keywords:o,contains:[l,t,s,c,i,r,e.QUOTE_STRING_MODE,e.NUMBER_MODE]}}a.exports=b});export{A as a};
