import{c as t}from"/myst_NCA/build/_shared/chunk-RAQ24GF6.js";var o=t((c,n)=>{function r(s){let e=["add","and","cmp","cmpg","cmpl","const","div","double","float","goto","if","int","long","move","mul","neg","new","nop","not","or","rem","return","shl","shr","sput","sub","throw","ushr","xor"],a=["aget","aput","array","check","execute","fill","filled","goto/16","goto/32","iget","instance","invoke","iput","monitor","packed","sget","sparse"],i=["transient","constructor","abstract","final","synthetic","public","private","protected","static","bridge","system"];return{name:"Smali",contains:[{className:"string",begin:'"',end:'"',relevance:0},s.COMMENT("#","$",{relevance:0}),{className:"keyword",variants:[{begin:"\\s*\\.end\\s[a-zA-Z0-9]*"},{begin:"^[ ]*\\.[a-zA-Z]*",relevance:0},{begin:"\\s:[a-zA-Z_0-9]*",relevance:0},{begin:"\\s("+i.join("|")+")"}]},{className:"built_in",variants:[{begin:"\\s("+e.join("|")+")\\s"},{begin:"\\s("+e.join("|")+")((-|/)[a-zA-Z0-9]+)+\\s",relevance:10},{begin:"\\s("+a.join("|")+")((-|/)[a-zA-Z0-9]+)*\\s",relevance:10}]},{className:"class",begin:`L[^(;:
]*;`,relevance:0},{begin:"[vp][0-9]+"}]}}n.exports=r});export{o as a};
