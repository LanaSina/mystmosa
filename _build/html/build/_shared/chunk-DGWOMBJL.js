import{c as n}from"/myst_NCA/build/_shared/chunk-RAQ24GF6.js";var i=n((a,r)=>{r.exports=t;t.displayName="bicep";t.aliases=[];function t(e){e.languages.bicep={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],property:[{pattern:/([\r\n][ \t]*)[a-z_]\w*(?=[ \t]*:)/i,lookbehind:!0},{pattern:/([\r\n][ \t]*)'(?:\\.|\$(?!\{)|[^'\\\r\n$])*'(?=[ \t]*:)/,lookbehind:!0,greedy:!0}],string:[{pattern:/'''[^'][\s\S]*?'''/,greedy:!0},{pattern:/(^|[^\\'])'(?:\\.|\$(?!\{)|[^'\\\r\n$])*'/,lookbehind:!0,greedy:!0}],"interpolated-string":{pattern:/(^|[^\\'])'(?:\\.|\$(?:(?!\{)|\{[^{}\r\n]*\})|[^'\\\r\n$])*'/,lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:/\$\{[^{}\r\n]*\}/,inside:{expression:{pattern:/(^\$\{)[\s\S]+(?=\}$)/,lookbehind:!0},punctuation:/^\$\{|\}$/}},string:/[\s\S]+/}},datatype:{pattern:/(\b(?:output|param)\b[ \t]+\w+[ \t]+)\w+\b/,lookbehind:!0,alias:"class-name"},boolean:/\b(?:false|true)\b/,keyword:/\b(?:existing|for|if|in|module|null|output|param|resource|targetScope|var)\b/,decorator:/@\w+\b/,function:/\b[a-z_]\w*(?=[ \t]*\()/i,number:/(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:E[+-]?\d+)?/i,operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,punctuation:/[{}[\];(),.:]/},e.languages.bicep["interpolated-string"].inside.interpolation.inside.expression.inside=e.languages.bicep}});export{i as a};
