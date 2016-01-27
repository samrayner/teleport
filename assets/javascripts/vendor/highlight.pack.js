!function(e){"undefined"!=typeof exports?e(exports):(window.hljs=e({}),"function"==typeof define&&define.amd&&define("hljs",[],function(){return window.hljs}))}(function(e){function t(e){return e.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;")}function n(e){return e.nodeName.toLowerCase()}function r(e,t){var n=e&&e.exec(t);return n&&0==n.index}function a(e){return/^(no-?highlight|plain|text)$/i.test(e)}function c(e){var t,n,r,c=e.className+" ";if(c+=e.parentNode?e.parentNode.className:"",n=/\blang(?:uage)?-([\w-]+)\b/i.exec(c))return E(n[1])?n[1]:"no-highlight";for(c=c.split(/\s+/),t=0,r=c.length;r>t;t++)if(E(c[t])||a(c[t]))return c[t]}function i(e,t){var n,r={};for(n in e)r[n]=e[n];if(t)for(n in t)r[n]=t[n];return r}function o(e){var t=[];return function r(e,a){for(var c=e.firstChild;c;c=c.nextSibling)3==c.nodeType?a+=c.nodeValue.length:1==c.nodeType&&(t.push({event:"start",offset:a,node:c}),a=r(c,a),n(c).match(/br|hr|img|input/)||t.push({event:"stop",offset:a,node:c}));return a}(e,0),t}function u(e,r,a){function c(){return e.length&&r.length?e[0].offset!=r[0].offset?e[0].offset<r[0].offset?e:r:"start"==r[0].event?e:r:e.length?e:r}function i(e){function r(e){return" "+e.nodeName+'="'+t(e.value)+'"'}l+="<"+n(e)+Array.prototype.map.call(e.attributes,r).join("")+">"}function o(e){l+="</"+n(e)+">"}function u(e){("start"==e.event?i:o)(e.node)}for(var s=0,l="",f=[];e.length||r.length;){var g=c();if(l+=t(a.substr(s,g[0].offset-s)),s=g[0].offset,g==e){f.reverse().forEach(o);do u(g.splice(0,1)[0]),g=c();while(g==e&&g.length&&g[0].offset==s);f.reverse().forEach(i)}else"start"==g[0].event?f.push(g[0].node):f.pop(),u(g.splice(0,1)[0])}return l+t(a.substr(s))}function s(e){function t(e){return e&&e.source||e}function n(n,r){return new RegExp(t(n),"m"+(e.cI?"i":"")+(r?"g":""))}function r(a,c){if(!a.compiled){if(a.compiled=!0,a.k=a.k||a.bK,a.k){var o={},u=function(t,n){e.cI&&(n=n.toLowerCase()),n.split(" ").forEach(function(e){var n=e.split("|");o[n[0]]=[t,n[1]?Number(n[1]):1]})};"string"==typeof a.k?u("keyword",a.k):Object.keys(a.k).forEach(function(e){u(e,a.k[e])}),a.k=o}a.lR=n(a.l||/\b\w+\b/,!0),c&&(a.bK&&(a.b="\\b("+a.bK.split(" ").join("|")+")\\b"),a.b||(a.b=/\B|\b/),a.bR=n(a.b),a.e||a.eW||(a.e=/\B|\b/),a.e&&(a.eR=n(a.e)),a.tE=t(a.e)||"",a.eW&&c.tE&&(a.tE+=(a.e?"|":"")+c.tE)),a.i&&(a.iR=n(a.i)),void 0===a.r&&(a.r=1),a.c||(a.c=[]);var s=[];a.c.forEach(function(e){e.v?e.v.forEach(function(t){s.push(i(e,t))}):s.push("self"==e?a:e)}),a.c=s,a.c.forEach(function(e){r(e,a)}),a.starts&&r(a.starts,c);var l=a.c.map(function(e){return e.bK?"\\.?("+e.b+")\\.?":e.b}).concat([a.tE,a.i]).map(t).filter(Boolean);a.t=l.length?n(l.join("|"),!0):{exec:function(){return null}}}}r(e)}function l(e,n,a,c){function i(e,t){for(var n=0;n<t.c.length;n++)if(r(t.c[n].bR,e))return t.c[n]}function o(e,t){if(r(e.eR,t)){for(;e.endsParent&&e.parent;)e=e.parent;return e}return e.eW?o(e.parent,t):void 0}function u(e,t){return!a&&r(t.iR,e)}function g(e,t){var n=m.cI?t[0].toLowerCase():t[0];return e.k.hasOwnProperty(n)&&e.k[n]}function b(e,t,n,r){var a=r?"":w.classPrefix,c='<span class="'+a,i=n?"":"</span>";return c+=e+'">',c+t+i}function p(){if(!C.k)return t(y);var e="",n=0;C.lR.lastIndex=0;for(var r=C.lR.exec(y);r;){e+=t(y.substr(n,r.index-n));var a=g(C,r);a?(B+=a[1],e+=b(a[0],t(r[0]))):e+=t(r[0]),n=C.lR.lastIndex,r=C.lR.exec(y)}return e+t(y.substr(n))}function h(){var e="string"==typeof C.sL;if(e&&!x[C.sL])return t(y);var n=e?l(C.sL,y,!0,M[C.sL]):f(y,C.sL.length?C.sL:void 0);return C.r>0&&(B+=n.r),e&&(M[C.sL]=n.top),b(n.language,n.value,!1,!0)}function d(){return void 0!==C.sL?h():p()}function v(e,n){var r=e.cN?b(e.cN,"",!0):"";e.rB?(L+=r,y=""):e.eB?(L+=t(n)+r,y=""):(L+=r,y=n),C=Object.create(e,{parent:{value:C}})}function N(e,n){if(y+=e,void 0===n)return L+=d(),0;var r=i(n,C);if(r)return L+=d(),v(r,n),r.rB?0:n.length;var a=o(C,n);if(a){var c=C;c.rE||c.eE||(y+=n),L+=d();do C.cN&&(L+="</span>"),B+=C.r,C=C.parent;while(C!=a.parent);return c.eE&&(L+=t(n)),y="",a.starts&&v(a.starts,""),c.rE?0:n.length}if(u(n,C))throw new Error('Illegal lexeme "'+n+'" for mode "'+(C.cN||"<unnamed>")+'"');return y+=n,n.length||1}var m=E(e);if(!m)throw new Error('Unknown language: "'+e+'"');s(m);var R,C=c||m,M={},L="";for(R=C;R!=m;R=R.parent)R.cN&&(L=b(R.cN,"",!0)+L);var y="",B=0;try{for(var k,S,A=0;C.t.lastIndex=A,k=C.t.exec(n),k;)S=N(n.substr(A,k.index-A),k[0]),A=k.index+S;for(N(n.substr(A)),R=C;R.parent;R=R.parent)R.cN&&(L+="</span>");return{r:B,value:L,language:e,top:C}}catch(j){if(-1!=j.message.indexOf("Illegal"))return{r:0,value:t(n)};throw j}}function f(e,n){n=n||w.languages||Object.keys(x);var r={r:0,value:t(e)},a=r;return n.forEach(function(t){if(E(t)){var n=l(t,e,!1);n.language=t,n.r>a.r&&(a=n),n.r>r.r&&(a=r,r=n)}}),a.language&&(r.second_best=a),r}function g(e){return w.tabReplace&&(e=e.replace(/^((<[^>]+>|\t)+)/gm,function(e,t){return t.replace(/\t/g,w.tabReplace)})),w.useBR&&(e=e.replace(/\n/g,"<br>")),e}function b(e,t,n){var r=t?R[t]:n,a=[e.trim()];return e.match(/\bhljs\b/)||a.push("hljs"),-1===e.indexOf(r)&&a.push(r),a.join(" ").trim()}function p(e){var t=c(e);if(!a(t)){var n;w.useBR?(n=document.createElementNS("http://www.w3.org/1999/xhtml","div"),n.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")):n=e;var r=n.textContent,i=t?l(t,r,!0):f(r),s=o(n);if(s.length){var p=document.createElementNS("http://www.w3.org/1999/xhtml","div");p.innerHTML=i.value,i.value=u(s,o(p),r)}i.value=g(i.value),e.innerHTML=i.value,e.className=b(e.className,t,i.language),e.result={language:i.language,re:i.r},i.second_best&&(e.second_best={language:i.second_best.language,re:i.second_best.r})}}function h(e){w=i(w,e)}function d(){if(!d.called){d.called=!0;var e=document.querySelectorAll("pre code");Array.prototype.forEach.call(e,p)}}function v(){addEventListener("DOMContentLoaded",d,!1),addEventListener("load",d,!1)}function N(t,n){var r=x[t]=n(e);r.aliases&&r.aliases.forEach(function(e){R[e]=t})}function m(){return Object.keys(x)}function E(e){return e=(e||"").toLowerCase(),x[e]||x[R[e]]}var w={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0},x={},R={};return e.highlight=l,e.highlightAuto=f,e.fixMarkup=g,e.highlightBlock=p,e.configure=h,e.initHighlighting=d,e.initHighlightingOnLoad=v,e.registerLanguage=N,e.listLanguages=m,e.getLanguage=E,e.inherit=i,e.IR="[a-zA-Z]\\w*",e.UIR="[a-zA-Z_]\\w*",e.NR="\\b\\d+(\\.\\d+)?",e.CNR="(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BNR="\\b(0b[01]+)",e.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BE={b:"\\\\[\\s\\S]",r:0},e.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[e.BE]},e.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[e.BE]},e.PWM={b:/\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|like)\b/},e.C=function(t,n,r){var a=e.inherit({cN:"comment",b:t,e:n,c:[]},r||{});return a.c.push(e.PWM),a.c.push({cN:"doctag",b:"(?:TODO|FIXME|NOTE|BUG|XXX):",r:0}),a},e.CLCM=e.C("//","$"),e.CBCM=e.C("/\\*","\\*/"),e.HCM=e.C("#","$"),e.NM={cN:"number",b:e.NR,r:0},e.CNM={cN:"number",b:e.CNR,r:0},e.BNM={cN:"number",b:e.BNR,r:0},e.CSSNM={cN:"number",b:e.NR+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",r:0},e.RM={cN:"regexp",b:/\//,e:/\/[gimuy]*/,i:/\n/,c:[e.BE,{b:/\[/,e:/\]/,r:0,c:[e.BE]}]},e.TM={cN:"title",b:e.IR,r:0},e.UTM={cN:"title",b:e.UIR,r:0},e}),hljs.registerLanguage("xml",function(e){var t="[A-Za-z0-9\\._:-]+",n={b:/<\?(php)?(?!\w)/,e:/\?>/,sL:"php"},r={eW:!0,i:/</,r:0,c:[n,{cN:"attribute",b:t,r:0},{b:"=",r:0,c:[{cN:"value",c:[n],v:[{b:/"/,e:/"/},{b:/'/,e:/'/},{b:/[^\s\/>]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xsl","plist"],cI:!0,c:[{cN:"doctype",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},e.C("<!--","-->",{r:10}),{cN:"cdata",b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{cN:"tag",b:"<style(?=\\s|>|$)",e:">",k:{title:"style"},c:[r],starts:{e:"</style>",rE:!0,sL:"css"}},{cN:"tag",b:"<script(?=\\s|>|$)",e:">",k:{title:"script"},c:[r],starts:{e:"</script>",rE:!0,sL:["actionscript","javascript","handlebars"]}},n,{cN:"pi",b:/<\?\w+/,e:/\?>/,r:10},{cN:"tag",b:"</?",e:"/?>",c:[{cN:"title",b:/[^ \/><\n\t]+/,r:0},r]}]}}),hljs.registerLanguage("css",function(e){var t="[a-zA-Z-][a-zA-Z0-9_-]*",n={cN:"function",b:t+"\\(",rB:!0,eE:!0,e:"\\("},r={cN:"rule",b:/[A-Z\_\.\-]+\s*:/,rB:!0,e:";",eW:!0,c:[{cN:"attribute",b:/\S/,e:":",eE:!0,starts:{cN:"value",eW:!0,eE:!0,c:[n,e.CSSNM,e.QSM,e.ASM,e.CBCM,{cN:"hexcolor",b:"#[0-9A-Fa-f]+"},{cN:"important",b:"!important"}]}}]};return{cI:!0,i:/[=\/|'\$]/,c:[e.CBCM,{cN:"id",b:/\#[A-Za-z0-9_-]+/},{cN:"class",b:/\.[A-Za-z0-9_-]+/},{cN:"attr_selector",b:/\[/,e:/\]/,i:"$"},{cN:"pseudo",b:/:(:)?[a-zA-Z0-9\_\-\+\(\)"']+/},{cN:"at_rule",b:"@(font-face|page)",l:"[a-z-]+",k:"font-face page"},{cN:"at_rule",b:"@",e:"[{;]",c:[{cN:"keyword",b:/\S+/},{b:/\s/,eW:!0,eE:!0,r:0,c:[n,e.ASM,e.QSM,e.CSSNM]}]},{cN:"tag",b:t,r:0},{cN:"rules",b:"{",e:"}",i:/\S/,c:[e.CBCM,r]}]}});