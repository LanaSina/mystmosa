import{l as i}from"/myst_NCA/build/_shared/chunk-QCCLA5MS.js";import"/myst_NCA/build/_shared/chunk-RAQ24GF6.js";var o={name:"grid",arg:{type:i.string},body:{type:i.parsed,required:!0},run(r){return[{type:"grid",columns:n(r.arg),children:r.body}]}};function n(r){let t=(r??"1 2 2 3").split(/\s/).map(e=>Number(e.trim())).filter(e=>!Number.isNaN(e)).map(e=>Math.min(Math.max(Math.floor(e),1),12));return t.length===0||t.length>4?[1,2,2,3]:t}export{o as gridDirective};
