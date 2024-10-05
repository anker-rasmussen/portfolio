import{t as L,a as U,S as q,i as B}from"./index.28409b7f.js";import{u as E,s as O,f as P,g as K,h as Q,d as T,j as C,i as V,n as R}from"./scheduler.7a274a43.js";import{w as W,b as H}from"./paths.36b9a035.js";function ss(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function es(e,t){L(e,1,1,()=>{t.delete(e.key)})}function ts(e,t,a,n,c,i,r,S,m,h,g,v){let d=e.length,u=i.length,f=d;const b={};for(;f--;)b[e[f].key]=f;const y=[],k=new Map,J=new Map,_=[];for(f=u;f--;){const o=v(c,i,f),l=a(o);let p=r.get(l);p?n&&_.push(()=>p.p(o,t)):(p=h(l,o),p.c()),k.set(l,y[f]=p),l in b&&J.set(l,Math.abs(f-b[l]))}const j=new Set,N=new Set;function x(o){U(o,1),o.m(S,g),r.set(o.key,o),g=o.first,u--}for(;d&&u;){const o=y[u-1],l=e[d-1],p=o.key,w=l.key;o===l?(g=o.first,d--,u--):k.has(w)?!r.has(p)||j.has(p)?x(o):N.has(w)?d--:J.get(p)>J.get(w)?(N.add(p),x(o)):(j.add(w),d--):(m(l,r),d--)}for(;d--;){const o=e[d];k.has(o.key)||m(o,r)}for(;u;)x(y[u-1]);return E(_),y}const D="@riadh-adrani-theme",G=e=>{localStorage.setItem(D,JSON.stringify(e))},F=W(!1),A=e=>F.update(t=>{var n;const a=typeof e=="boolean"?e:!t;return G(a),(n=document.querySelector(":root"))==null||n.setAttribute("data-theme",a?"dark":"light"),a}),ns=()=>{const e=localStorage.getItem(D);e?A(JSON.parse(e)):window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?A(!0):A(!1)},M=e=>`${H}/logos/${e}`,s=(e,t)=>t?{dark:M(t),light:M(e)}:M(e),as={AWS:s("aws.svg"),Robo:s("robo.png"),Bootstrap:s("bootstrap.svg"),Windows:s("Windows.png"),Office:s("msoft.png"),Mac:s("macOS.png"),Be:s("Be.png"),C:s("c.svg"),Cpp:s("cpp.svg"),City:s("city.png"),Celery:s("celery.svg"),Linux:s("Tux.png"),Django:s("django.svg"),FastApi:s("fastapi"),Flask:s("flask.svg"),Go:s("go.svg"),Kafka:s("kafka.svg"),Neo4j:s("neo4j.svg"),Nginx:s("nginx.svg"),Numpy:s("numpy.svg"),Pandas:s("pandas.svg"),RabbitMQ:s("rabbitmq.svg"),Rust:s("rust.svg","rust-dark.png"),Scrapy:s("scrapy.png"),Selenium:s("selenium.svg"),Docker:s("docker.svg"),Kubernetes:s("kubernetes.svg"),Csharp:s("csharp.svg"),Xamarin:s("xamarin.svg"),TypeScript:s("ts.png"),VueJs:s("vue.png"),ReactJs:s("react.svg"),Dart:s("dart.png"),Kotlin:s("kotlin.png"),Python:s("python.png"),NodeJs:s("node.png"),Deno:s("deno.png","deno-dark.png"),Svelte:s("svelte.png"),ExpressJs:s("express.png"),JavaScript:s("js.png"),Fastify:s("fastify.svg","fastify-dark.png"),NestJs:s("nest.svg"),Quasar:s("quasar.svg"),SolidJs:s("solid.svg"),Electron:s("electron.png"),Flutter:s("flutter.svg"),Java:s("java.png"),AdonisJs:s("adonis.png"),Android:s("android.png"),Angular:s("angular.png"),PostgreSQL:s("postgres.png"),Firebase:s("firebase.png"),Sass:s("sass.png"),Unknown:s("no-img.svg"),MongoDB:s("mongodb.svg"),Redis:s("redis.svg"),Tailwind:s("tailwind.svg"),HTML:s("html.svg"),Premiere:s("premiere.svg"),Photoshop:s("photoshop.svg"),CSS:s("css.svg"),AfterEffects:s("after-effects.svg"),Illustrator:s("illustrator.svg"),Nuxt:s("nuxt.png"),Vite:s("vite.png"),Vitest:s("vitest.svg"),Jest:s("jest.png"),Unocss:s("unocss.svg"),Ruvy:s("ruvy.svg"),Postcss:s("postcss.svg")};let I;F.subscribe(e=>I=e);const os=e=>typeof e=="string"?e:I?e.dark:e.light;globalThis&&globalThis.__awaiter;function X(e){let t,a;return{c(){t=P("i"),this.h()},l(n){t=K(n,"I",{class:!0}),Q(t).forEach(T),this.h()},h(){C(t,"class",a=`${e[0]} ${e[1]}`)},m(n,c){V(n,t,c)},p(n,[c]){c&3&&a!==(a=`${n[0]} ${n[1]}`)&&C(t,"class",a)},i:R,o:R,d(n){n&&T(t)}}}function z(e,t,a){let{icon:n=void 0}=t,{classes:c=""}=t;return e.$$set=i=>{"icon"in i&&a(0,n=i.icon),"classes"in i&&a(1,c=i.classes)},[n,c]}class is extends q{constructor(t){super(),B(this,t,z,X,O,{icon:0,classes:1})}}export{as as A,is as U,A as a,es as b,ss as e,os as g,ns as o,F as t,ts as u};
