import{c as x}from"/mystmosa/build/_shared/chunk-RAQ24GF6.js";var $=x((S,h)=>{h.exports=f;f.displayName="markdown";f.aliases=["md"];function f(k){(function(e){var _=/(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;function d(n){return n=n.replace(/<inner>/g,function(){return _}),RegExp(/((?:^|[^\\])(?:\\{2})*)/.source+"(?:"+n+")")}var g=/(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,p=/\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g,function(){return g}),c=/\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;e.languages.markdown=e.languages.extend("markup",{}),e.languages.insertBefore("markdown","prolog",{"front-matter-block":{pattern:/(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,lookbehind:!0,greedy:!0,inside:{punctuation:/^---|---$/,"front-matter":{pattern:/\S+(?:\s+\S+)*/,alias:["yaml","language-yaml"],inside:e.languages.yaml}}},blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},table:{pattern:RegExp("^"+p+c+"(?:"+p+")*","m"),inside:{"table-data-rows":{pattern:RegExp("^("+p+c+")(?:"+p+")*$"),lookbehind:!0,inside:{"table-data":{pattern:RegExp(g),inside:e.languages.markdown},punctuation:/\|/}},"table-line":{pattern:RegExp("^("+p+")"+c+"$"),lookbehind:!0,inside:{punctuation:/\||:?-{3,}:?/}},"table-header-row":{pattern:RegExp("^"+p+"$"),inside:{"table-header":{pattern:RegExp(g),alias:"important",inside:e.languages.markdown},punctuation:/\|/}}}},code:[{pattern:/((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,lookbehind:!0,alias:"keyword"},{pattern:/^```[\s\S]*?^```$/m,greedy:!0,inside:{"code-block":{pattern:/^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,lookbehind:!0},"code-language":{pattern:/^(```).+/,lookbehind:!0},punctuation:/```/}}],title:[{pattern:/\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:d(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^..)[\s\S]+(?=..$)/,lookbehind:!0,inside:{}},punctuation:/\*\*|__/}},italic:{pattern:d(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^.)[\s\S]+(?=.$)/,lookbehind:!0,inside:{}},punctuation:/[*_]/}},strike:{pattern:d(/(~~?)(?:(?!~)<inner>)+\2/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^~~?)[\s\S]+(?=\1$)/,lookbehind:!0,inside:{}},punctuation:/~~?/}},"code-snippet":{pattern:/(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,lookbehind:!0,greedy:!0,alias:["code","keyword"]},url:{pattern:d(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),lookbehind:!0,greedy:!0,inside:{operator:/^!/,content:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0,inside:{}},variable:{pattern:/(^\][ \t]?\[)[^\]]+(?=\]$)/,lookbehind:!0},url:{pattern:/(^\]\()[^\s)]+/,lookbehind:!0},string:{pattern:/(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,lookbehind:!0}}}}),["url","bold","italic","strike"].forEach(function(n){["url","bold","italic","strike","code-snippet"].forEach(function(t){n!==t&&(e.languages.markdown[n].inside.content.inside[t]=e.languages.markdown[t])})}),e.hooks.add("after-tokenize",function(n){if(n.language!=="markdown"&&n.language!=="md")return;function t(i){if(!(!i||typeof i=="string"))for(var a=0,u=i.length;a<u;a++){var o=i[a];if(o.type!=="code"){t(o.content);continue}var l=o.content[1],r=o.content[3];if(l&&r&&l.type==="code-language"&&r.type==="code-block"&&typeof l.content=="string"){var s=l.content.replace(/\b#/g,"sharp").replace(/\b\+\+/g,"pp");s=(/[a-z][\w-]*/i.exec(s)||[""])[0].toLowerCase();var b="language-"+s;r.alias?typeof r.alias=="string"?r.alias=[r.alias,b]:r.alias.push(b):r.alias=[b]}}}t(n.tokens)}),e.hooks.add("wrap",function(n){if(n.type==="code-block"){for(var t="",i=0,a=n.classes.length;i<a;i++){var u=n.classes[i],o=/language-(.+)/.exec(u);if(o){t=o[1];break}}var l=e.languages[t];if(l)n.content=e.highlight(v(n.content.value),l,t);else if(t&&t!=="none"&&e.plugins.autoloader){var r="md-"+new Date().valueOf()+"-"+Math.floor(Math.random()*1e16);n.attributes.id=r,e.plugins.autoloader.loadLanguages(t,function(){var s=document.getElementById(r);s&&(s.innerHTML=e.highlight(s.textContent,e.languages[t],t))})}}});var m=RegExp(e.languages.markup.tag.pattern.source,"gi"),w={amp:"&",lt:"<",gt:">",quot:'"'},y=String.fromCodePoint||String.fromCharCode;function v(n){var t=n.replace(m,"");return t=t.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi,function(i,a){if(a=a.toLowerCase(),a[0]==="#"){var u;return a[1]==="x"?u=parseInt(a.slice(2),16):u=Number(a.slice(1)),y(u)}else{var o=w[a];return o||i}}),t}e.languages.md=e.languages.markdown})(k)}});export{$ as a};
