import{n as c,s as h}from"./scheduler.7a274a43.js";const t=[];function d(i,l=c){let o;const n=new Set;function r(e){if(h(i,e)&&(i=e,o)){const b=!t.length;for(const s of n)s[1](),t.push(s,i);if(b){for(let s=0;s<t.length;s+=2)t[s][0](t[s+1]);t.length=0}}}function f(e){r(e(i))}function _(e,b=c){const s=[e,b];return n.add(s),n.size===1&&(o=l(r,f)||c),e(i),()=>{n.delete(s),n.size===0&&o&&(o(),o=null)}}return{set:r,update:f,subscribe:_}}var u;const p=((u=globalThis.__sveltekit_1oi5z8e)==null?void 0:u.base)??"";var a;const z=((a=globalThis.__sveltekit_1oi5z8e)==null?void 0:a.assets)??p;export{z as a,p as b,d as w};
