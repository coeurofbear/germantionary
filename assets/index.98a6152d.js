const fA=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}};fA();/**
* @vue/shared v3.4.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Pd(t,e){const n=new Set(t.split(","));return e?r=>n.has(r.toLowerCase()):r=>n.has(r)}const Se={},fs=[],Kt=()=>{},pA=()=>!1,bu=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Cd=t=>t.startsWith("onUpdate:"),ft=Object.assign,kd=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},mA=Object.prototype.hasOwnProperty,pe=(t,e)=>mA.call(t,e),Z=Array.isArray,ps=t=>Da(t)==="[object Map]",Ru=t=>Da(t)==="[object Set]",em=t=>Da(t)==="[object Date]",se=t=>typeof t=="function",Qe=t=>typeof t=="string",Pr=t=>typeof t=="symbol",be=t=>t!==null&&typeof t=="object",Z_=t=>(be(t)||se(t))&&se(t.then)&&se(t.catch),ey=Object.prototype.toString,Da=t=>ey.call(t),gA=t=>Da(t).slice(8,-1),ty=t=>Da(t)==="[object Object]",Dd=t=>Qe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,bc=Pd(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Su=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},_A=/-(\w)/g,Mn=Su(t=>t.replace(_A,(e,n)=>n?n.toUpperCase():"")),yA=/\B([A-Z])/g,Gs=Su(t=>t.replace(yA,"-$1").toLowerCase()),Pu=Su(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ll=Su(t=>t?`on${Pu(t)}`:""),Cr=(t,e)=>!Object.is(t,e),Rc=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Bc=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},$c=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let tm;const xd=()=>tm||(tm=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});function Nd(t){if(Z(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=Qe(r)?EA(r):Nd(r);if(i)for(const s in i)e[s]=i[s]}return e}else if(Qe(t)||be(t))return t}const vA=/;(?![^(]*\))/g,IA=/:([^]+)/,wA=/\/\*[^]*?\*\//g;function EA(t){const e={};return t.replace(wA,"").split(vA).forEach(n=>{if(n){const r=n.split(IA);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Jn(t){let e="";if(Qe(t))e=t;else if(Z(t))for(let n=0;n<t.length;n++){const r=Jn(t[n]);r&&(e+=r+" ")}else if(be(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const TA="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",AA=Pd(TA);function ny(t){return!!t||t===""}function bA(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Cu(t[r],e[r]);return n}function Cu(t,e){if(t===e)return!0;let n=em(t),r=em(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Pr(t),r=Pr(e),n||r)return t===e;if(n=Z(t),r=Z(e),n||r)return n&&r?bA(t,e):!1;if(n=be(t),r=be(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,s=Object.keys(e).length;if(i!==s)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Cu(t[o],e[o]))return!1}}return String(t)===String(e)}function RA(t,e){return t.findIndex(n=>Cu(n,e))}const wt=t=>Qe(t)?t:t==null?"":Z(t)||be(t)&&(t.toString===ey||!se(t.toString))?JSON.stringify(t,ry,2):String(t),ry=(t,e)=>e&&e.__v_isRef?ry(t,e.value):ps(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i],s)=>(n[Ml(r,s)+" =>"]=i,n),{})}:Ru(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ml(n))}:Pr(e)?Ml(e):be(e)&&!Z(e)&&!ty(e)?String(e):e,Ml=(t,e="")=>{var n;return Pr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let sn;class iy{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=sn,!e&&sn&&(this.index=(sn.scopes||(sn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=sn;try{return sn=this,e()}finally{sn=n}}}on(){sn=this}off(){sn=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function SA(t){return new iy(t)}function PA(t,e=sn){e&&e.active&&e.effects.push(t)}function CA(){return sn}let gi;class Vd{constructor(e,n,r,i){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=3,this._trackId=0,this._runnings=0,this._queryings=0,this._depsLength=0,PA(this,i)}get dirty(){if(this._dirtyLevel===1){this._dirtyLevel=0,this._queryings++,Vi();for(const e of this.deps)if(e.computed&&(kA(e.computed),this._dirtyLevel>=2))break;Oi(),this._queryings--}return this._dirtyLevel>=2}set dirty(e){this._dirtyLevel=e?3:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Ar,n=gi;try{return Ar=!0,gi=this,this._runnings++,nm(this),this.fn()}finally{rm(this),this._runnings--,gi=n,Ar=e}}stop(){var e;this.active&&(nm(this),rm(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function kA(t){return t.value}function nm(t){t._trackId++,t._depsLength=0}function rm(t){if(t.deps&&t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)sy(t.deps[e],t);t.deps.length=t._depsLength}}function sy(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Ar=!0,_h=0;const oy=[];function Vi(){oy.push(Ar),Ar=!1}function Oi(){const t=oy.pop();Ar=t===void 0?!0:t}function Od(){_h++}function Ld(){for(_h--;!_h&&yh.length;)yh.shift()()}function ay(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&sy(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const yh=[];function cy(t,e,n){Od();for(const r of t.keys())if(!(!r.allowRecurse&&r._runnings)&&r._dirtyLevel<e&&(!r._runnings||e!==2)){const i=r._dirtyLevel;r._dirtyLevel=e,i===0&&(!r._queryings||e!==2)&&(r.trigger(),r.scheduler&&yh.push(r.scheduler))}Ld()}const uy=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},vh=new WeakMap,_i=Symbol(""),Ih=Symbol("");function $t(t,e,n){if(Ar&&gi){let r=vh.get(t);r||vh.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=uy(()=>r.delete(n))),ay(gi,i)}}function Hn(t,e,n,r,i,s){const o=vh.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Z(t)){const c=Number(r);o.forEach((u,l)=>{(l==="length"||!Pr(l)&&l>=c)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Z(t)?Dd(n)&&a.push(o.get("length")):(a.push(o.get(_i)),ps(t)&&a.push(o.get(Ih)));break;case"delete":Z(t)||(a.push(o.get(_i)),ps(t)&&a.push(o.get(Ih)));break;case"set":ps(t)&&a.push(o.get(_i));break}Od();for(const c of a)c&&cy(c,3);Ld()}const DA=Pd("__proto__,__v_isRef,__isVue"),ly=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Pr)),im=xA();function xA(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=ge(this);for(let s=0,o=this.length;s<o;s++)$t(r,"get",s+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(ge)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Vi(),Od();const r=ge(this)[e].apply(this,n);return Ld(),Oi(),r}}),t}function NA(t){const e=ge(this);return $t(e,"has",t),e.hasOwnProperty(t)}class hy{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const i=this._isReadonly,s=this._shallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return s;if(n==="__v_raw")return r===(i?s?zA:my:s?py:fy).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=Z(e);if(!i){if(o&&pe(im,n))return Reflect.get(im,n,r);if(n==="hasOwnProperty")return NA}const a=Reflect.get(e,n,r);return(Pr(n)?ly.has(n):DA(n))||(i||$t(e,"get",n),s)?a:qt(a)?o&&Dd(n)?a:a.value:be(a)?i?_y(a):xa(a):a}}class dy extends hy{constructor(e=!1){super(!1,e)}set(e,n,r,i){let s=e[n];if(!this._shallow){const c=Rs(s);if(!qc(r)&&!Rs(r)&&(s=ge(s),r=ge(r)),!Z(e)&&qt(s)&&!qt(r))return c?!1:(s.value=r,!0)}const o=Z(e)&&Dd(n)?Number(n)<e.length:pe(e,n),a=Reflect.set(e,n,r,i);return e===ge(i)&&(o?Cr(r,s)&&Hn(e,"set",n,r):Hn(e,"add",n,r)),a}deleteProperty(e,n){const r=pe(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&r&&Hn(e,"delete",n,void 0),i}has(e,n){const r=Reflect.has(e,n);return(!Pr(n)||!ly.has(n))&&$t(e,"has",n),r}ownKeys(e){return $t(e,"iterate",Z(e)?"length":_i),Reflect.ownKeys(e)}}class VA extends hy{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const OA=new dy,LA=new VA,MA=new dy(!0),Md=t=>t,ku=t=>Reflect.getPrototypeOf(t);function cc(t,e,n=!1,r=!1){t=t.__v_raw;const i=ge(t),s=ge(e);n||(Cr(e,s)&&$t(i,"get",e),$t(i,"get",s));const{has:o}=ku(i),a=r?Md:n?Bd:Ho;if(o.call(i,e))return a(t.get(e));if(o.call(i,s))return a(t.get(s));t!==i&&t.get(e)}function uc(t,e=!1){const n=this.__v_raw,r=ge(n),i=ge(t);return e||(Cr(t,i)&&$t(r,"has",t),$t(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function lc(t,e=!1){return t=t.__v_raw,!e&&$t(ge(t),"iterate",_i),Reflect.get(t,"size",t)}function sm(t){t=ge(t);const e=ge(this);return ku(e).has.call(e,t)||(e.add(t),Hn(e,"add",t,t)),this}function om(t,e){e=ge(e);const n=ge(this),{has:r,get:i}=ku(n);let s=r.call(n,t);s||(t=ge(t),s=r.call(n,t));const o=i.call(n,t);return n.set(t,e),s?Cr(e,o)&&Hn(n,"set",t,e):Hn(n,"add",t,e),this}function am(t){const e=ge(this),{has:n,get:r}=ku(e);let i=n.call(e,t);i||(t=ge(t),i=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return i&&Hn(e,"delete",t,void 0),s}function cm(){const t=ge(this),e=t.size!==0,n=t.clear();return e&&Hn(t,"clear",void 0,void 0),n}function hc(t,e){return function(r,i){const s=this,o=s.__v_raw,a=ge(o),c=e?Md:t?Bd:Ho;return!t&&$t(a,"iterate",_i),o.forEach((u,l)=>r.call(i,c(u),c(l),s))}}function dc(t,e,n){return function(...r){const i=this.__v_raw,s=ge(i),o=ps(s),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=i[t](...r),l=n?Md:e?Bd:Ho;return!e&&$t(s,"iterate",c?Ih:_i),{next(){const{value:h,done:d}=u.next();return d?{value:h,done:d}:{value:a?[l(h[0]),l(h[1])]:l(h),done:d}},[Symbol.iterator](){return this}}}}function lr(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function FA(){const t={get(s){return cc(this,s)},get size(){return lc(this)},has:uc,add:sm,set:om,delete:am,clear:cm,forEach:hc(!1,!1)},e={get(s){return cc(this,s,!1,!0)},get size(){return lc(this)},has:uc,add:sm,set:om,delete:am,clear:cm,forEach:hc(!1,!0)},n={get(s){return cc(this,s,!0)},get size(){return lc(this,!0)},has(s){return uc.call(this,s,!0)},add:lr("add"),set:lr("set"),delete:lr("delete"),clear:lr("clear"),forEach:hc(!0,!1)},r={get(s){return cc(this,s,!0,!0)},get size(){return lc(this,!0)},has(s){return uc.call(this,s,!0)},add:lr("add"),set:lr("set"),delete:lr("delete"),clear:lr("clear"),forEach:hc(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=dc(s,!1,!1),n[s]=dc(s,!0,!1),e[s]=dc(s,!1,!0),r[s]=dc(s,!0,!0)}),[t,n,e,r]}const[UA,BA,$A,qA]=FA();function Fd(t,e){const n=e?t?qA:$A:t?BA:UA;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(pe(n,i)&&i in r?n:r,i,s)}const jA={get:Fd(!1,!1)},WA={get:Fd(!1,!0)},GA={get:Fd(!0,!1)},fy=new WeakMap,py=new WeakMap,my=new WeakMap,zA=new WeakMap;function KA(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function HA(t){return t.__v_skip||!Object.isExtensible(t)?0:KA(gA(t))}function xa(t){return Rs(t)?t:Ud(t,!1,OA,jA,fy)}function gy(t){return Ud(t,!1,MA,WA,py)}function _y(t){return Ud(t,!0,LA,GA,my)}function Ud(t,e,n,r,i){if(!be(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=HA(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return i.set(t,a),a}function ms(t){return Rs(t)?ms(t.__v_raw):!!(t&&t.__v_isReactive)}function Rs(t){return!!(t&&t.__v_isReadonly)}function qc(t){return!!(t&&t.__v_isShallow)}function yy(t){return ms(t)||Rs(t)}function ge(t){const e=t&&t.__v_raw;return e?ge(e):t}function vy(t){return Bc(t,"__v_skip",!0),t}const Ho=t=>be(t)?xa(t):t,Bd=t=>be(t)?_y(t):t;class Iy{constructor(e,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Vd(()=>e(this._value),()=>wh(this,1)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=ge(this);return wy(e),(!e._cacheable||e.effect.dirty)&&Cr(e._value,e._value=e.effect.run())&&wh(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function QA(t,e,n=!1){let r,i;const s=se(t);return s?(r=t,i=Kt):(r=t.get,i=t.set),new Iy(r,i,s||!i,n)}function wy(t){Ar&&gi&&(t=ge(t),ay(gi,t.dep||(t.dep=uy(()=>t.dep=void 0,t instanceof Iy?t:void 0))))}function wh(t,e=3,n){t=ge(t);const r=t.dep;r&&cy(r,e)}function qt(t){return!!(t&&t.__v_isRef===!0)}function Na(t){return Ey(t,!1)}function YA(t){return Ey(t,!0)}function Ey(t,e){return qt(t)?t:new JA(t,e)}class JA{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ge(e),this._value=n?e:Ho(e)}get value(){return wy(this),this._value}set value(e){const n=this.__v_isShallow||qc(e)||Rs(e);e=n?e:ge(e),Cr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ho(e),wh(this,3))}}function Pt(t){return qt(t)?t.value:t}const XA={get:(t,e,n)=>Pt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return qt(i)&&!qt(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function Ty(t){return ms(t)?t:new Proxy(t,XA)}/**
* @vue/runtime-core v3.4.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function br(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){Du(s,e,n)}return i}function cn(t,e,n,r){if(se(t)){const s=br(t,e,n,r);return s&&Z_(s)&&s.catch(o=>{Du(o,e,n)}),s}const i=[];for(let s=0;s<t.length;s++)i.push(cn(t[s],e,n,r));return i}function Du(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=`https://vuejs.org/errors/#runtime-${n}`;for(;s;){const u=s.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](t,o,a)===!1)return}s=s.parent}const c=e.appContext.config.errorHandler;if(c){br(c,null,10,[t,o,a]);return}}ZA(t,n,i,r)}function ZA(t,e,n,r=!0){console.error(t)}let Qo=!1,Eh=!1;const vt=[];let wn=0;const gs=[];let gr=null,ri=0;const Ay=Promise.resolve();let $d=null;function by(t){const e=$d||Ay;return t?e.then(this?t.bind(this):t):e}function eb(t){let e=wn+1,n=vt.length;for(;e<n;){const r=e+n>>>1,i=vt[r],s=Yo(i);s<t||s===t&&i.pre?e=r+1:n=r}return e}function qd(t){(!vt.length||!vt.includes(t,Qo&&t.allowRecurse?wn+1:wn))&&(t.id==null?vt.push(t):vt.splice(eb(t.id),0,t),Ry())}function Ry(){!Qo&&!Eh&&(Eh=!0,$d=Ay.then(Py))}function tb(t){const e=vt.indexOf(t);e>wn&&vt.splice(e,1)}function nb(t){Z(t)?gs.push(...t):(!gr||!gr.includes(t,t.allowRecurse?ri+1:ri))&&gs.push(t),Ry()}function um(t,e,n=Qo?wn+1:0){for(;n<vt.length;n++){const r=vt[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;vt.splice(n,1),n--,r()}}}function Sy(t){if(gs.length){const e=[...new Set(gs)].sort((n,r)=>Yo(n)-Yo(r));if(gs.length=0,gr){gr.push(...e);return}for(gr=e,ri=0;ri<gr.length;ri++)gr[ri]();gr=null,ri=0}}const Yo=t=>t.id==null?1/0:t.id,rb=(t,e)=>{const n=Yo(t)-Yo(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Py(t){Eh=!1,Qo=!0,vt.sort(rb);const e=Kt;try{for(wn=0;wn<vt.length;wn++){const n=vt[wn];n&&n.active!==!1&&br(n,null,14)}}finally{wn=0,vt.length=0,Sy(),Qo=!1,$d=null,(vt.length||gs.length)&&Py()}}function ib(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Se;let i=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[l]||Se;d&&(i=n.map(f=>Qe(f)?f.trim():f)),h&&(i=n.map($c))}let a,c=r[a=Ll(e)]||r[a=Ll(Mn(e))];!c&&s&&(c=r[a=Ll(Gs(e))]),c&&cn(c,t,6,i);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,cn(u,t,6,i)}}function Cy(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!se(t)){const c=u=>{const l=Cy(u,e,!0);l&&(a=!0,ft(o,l))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!s&&!a?(be(t)&&r.set(t,null),null):(Z(s)?s.forEach(c=>o[c]=null):ft(o,s),be(t)&&r.set(t,o),o)}function xu(t,e){return!t||!bu(e)?!1:(e=e.slice(2).replace(/Once$/,""),pe(t,e[0].toLowerCase()+e.slice(1))||pe(t,Gs(e))||pe(t,e))}let nt=null,Nu=null;function jc(t){const e=nt;return nt=t,Nu=t&&t.type.__scopeId||null,e}function Li(t){Nu=t}function Mi(){Nu=null}function Xn(t,e=nt,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&Im(-1);const s=jc(e);let o;try{o=t(...i)}finally{jc(s),r._d&&Im(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Fl(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:h,data:d,setupState:f,ctx:v,inheritAttrs:I}=t;let w,S;const V=jc(t);try{if(n.shapeFlag&4){const H=i||r,ee=H;w=In(l.call(ee,H,h,s,f,d,v)),S=c}else{const H=e;w=In(H.length>1?H(s,{attrs:c,slots:a,emit:u}):H(s,null)),S=e.props?c:sb(c)}}catch(H){Oo.length=0,Du(H,t,1),w=ae(kr)}let N=w;if(S&&I!==!1){const H=Object.keys(S),{shapeFlag:ee}=N;H.length&&ee&7&&(o&&H.some(Cd)&&(S=ob(S,o)),N=Ss(N,S))}return n.dirs&&(N=Ss(N),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&(N.transition=n.transition),w=N,jc(V),w}const sb=t=>{let e;for(const n in t)(n==="class"||n==="style"||bu(n))&&((e||(e={}))[n]=t[n]);return e},ob=(t,e)=>{const n={};for(const r in t)(!Cd(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function ab(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:c}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?lm(r,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let h=0;h<l.length;h++){const d=l[h];if(o[d]!==r[d]&&!xu(u,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?lm(r,o,u):!0:!!o;return!1}function lm(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!xu(n,s))return!0}return!1}function cb({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const jd="components";function Ge(t,e){return Dy(jd,t,!0,e)||t}const ky=Symbol.for("v-ndc");function ub(t){return Qe(t)?Dy(jd,t,!1)||t:t||ky}function Dy(t,e,n=!0,r=!1){const i=nt||It;if(i){const s=i.type;if(t===jd){const a=nR(s,!1);if(a&&(a===e||a===Mn(e)||a===Pu(Mn(e))))return s}const o=hm(i[t]||s[t],e)||hm(i.appContext[t],e);return!o&&r?s:o}}function hm(t,e){return t&&(t[e]||t[Mn(e)]||t[Pu(Mn(e))])}const lb=t=>t.__isSuspense;function hb(t,e){e&&e.pendingBranch?Z(t)?e.effects.push(...t):e.effects.push(t):nb(t)}const db=Symbol.for("v-scx"),fb=()=>Nn(db),fc={};function _s(t,e,n){return xy(t,e,n)}function xy(t,e,{immediate:n,deep:r,flush:i,once:s,onTrack:o,onTrigger:a}=Se){if(e&&s){const $=e;e=(...he)=>{$(...he),ee()}}const c=It,u=$=>r===!0?$:li($,r===!1?1:void 0);let l,h=!1,d=!1;if(qt(t)?(l=()=>t.value,h=qc(t)):ms(t)?(l=()=>u(t),h=!0):Z(t)?(d=!0,h=t.some($=>ms($)||qc($)),l=()=>t.map($=>{if(qt($))return $.value;if(ms($))return u($);if(se($))return br($,c,2)})):se(t)?e?l=()=>br(t,c,2):l=()=>(f&&f(),cn(t,c,3,[v])):l=Kt,e&&r){const $=l;l=()=>li($())}let f,v=$=>{f=N.onStop=()=>{br($,c,4),f=N.onStop=void 0}},I;if(Mu)if(v=Kt,e?n&&cn(e,c,3,[l(),d?[]:void 0,v]):l(),i==="sync"){const $=fb();I=$.__watcherHandles||($.__watcherHandles=[])}else return Kt;let w=d?new Array(t.length).fill(fc):fc;const S=()=>{if(!(!N.active||!N.dirty))if(e){const $=N.run();(r||h||(d?$.some((he,je)=>Cr(he,w[je])):Cr($,w)))&&(f&&f(),cn(e,c,3,[$,w===fc?void 0:d&&w[0]===fc?[]:w,v]),w=$)}else N.run()};S.allowRecurse=!!e;let V;i==="sync"?V=S:i==="post"?V=()=>Ot(S,c&&c.suspense):(S.pre=!0,c&&(S.id=c.uid),V=()=>qd(S));const N=new Vd(l,Kt,V),H=CA(),ee=()=>{N.stop(),H&&kd(H.effects,N)};return e?n?S():w=N.run():i==="post"?Ot(N.run.bind(N),c&&c.suspense):N.run(),I&&I.push(ee),ee}function pb(t,e,n){const r=this.proxy,i=Qe(t)?t.includes(".")?Ny(r,t):()=>r[t]:t.bind(r,r);let s;se(e)?s=e:(s=e.handler,n=e);const o=Va(this),a=xy(i,s.bind(r),n);return o(),a}function Ny(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function li(t,e,n=0,r){if(!be(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(r=r||new Set,r.has(t))return t;if(r.add(t),qt(t))li(t.value,e,n,r);else if(Z(t))for(let i=0;i<t.length;i++)li(t[i],e,n,r);else if(Ru(t)||ps(t))t.forEach(i=>{li(i,e,n,r)});else if(ty(t))for(const i in t)li(t[i],e,n,r);return t}function Sn(t,e){if(nt===null)return t;const n=Fu(nt)||nt.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[s,o,a,c=Se]=e[i];s&&(se(s)&&(s={mounted:s,updated:s}),s.deep&&li(o),r.push({dir:s,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function Xr(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(Vi(),cn(c,n,8,[t.el,a,t,e]),Oi())}}/*! #__NO_SIDE_EFFECTS__ */function Vy(t,e){return se(t)?(()=>ft({name:t.name},e,{setup:t}))():t}const xo=t=>!!t.type.__asyncLoader,Oy=t=>t.type.__isKeepAlive;function mb(t,e){Ly(t,"a",e)}function gb(t,e){Ly(t,"da",e)}function Ly(t,e,n=It){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Vu(e,r,n),n){let i=n.parent;for(;i&&i.parent;)Oy(i.parent.vnode)&&_b(r,e,n,i),i=i.parent}}function _b(t,e,n,r){const i=Vu(e,t,r,!0);Fy(()=>{kd(r[e],i)},n)}function Vu(t,e,n=It,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Vi();const a=Va(n),c=cn(e,n,t,o);return a(),Oi(),c});return r?i.unshift(s):i.push(s),s}}const nr=t=>(e,n=It)=>(!Mu||t==="sp")&&Vu(t,(...r)=>e(...r),n),yb=nr("bm"),My=nr("m"),vb=nr("bu"),Ib=nr("u"),wb=nr("bum"),Fy=nr("um"),Eb=nr("sp"),Tb=nr("rtg"),Ab=nr("rtc");function bb(t,e=It){Vu("ec",t,e)}function No(t,e,n,r){let i;const s=n&&n[r];if(Z(t)||Qe(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(be(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];i[a]=e(t[u],u,a,s&&s[a])}}else i=[];return n&&(n[r]=i),i}function Wd(t,e,n={},r,i){if(nt.isCE||nt.parent&&xo(nt.parent)&&nt.parent.isCE)return e!=="default"&&(n.name=e),ae("slot",n,r&&r());let s=t[e];s&&s._c&&(s._d=!1),Y();const o=s&&Uy(s(n)),a=ln(yt,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function Uy(t){return t.some(e=>zc(e)?!(e.type===kr||e.type===yt&&!Uy(e.children)):!0)?t:null}const Th=t=>t?Jy(t)?Fu(t)||t.proxy:Th(t.parent):null,Vo=ft(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Th(t.parent),$root:t=>Th(t.root),$emit:t=>t.emit,$options:t=>Gd(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,qd(t.update)}),$nextTick:t=>t.n||(t.n=by.bind(t.proxy)),$watch:t=>pb.bind(t)}),Ul=(t,e)=>t!==Se&&!t.__isScriptSetup&&pe(t,e),Rb={get({_:t},e){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(Ul(r,e))return o[e]=1,r[e];if(i!==Se&&pe(i,e))return o[e]=2,i[e];if((u=t.propsOptions[0])&&pe(u,e))return o[e]=3,s[e];if(n!==Se&&pe(n,e))return o[e]=4,n[e];Ah&&(o[e]=0)}}const l=Vo[e];let h,d;if(l)return e==="$attrs"&&$t(t,"get",e),l(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Se&&pe(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,pe(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return Ul(i,e)?(i[e]=n,!0):r!==Se&&pe(r,e)?(r[e]=n,!0):pe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||t!==Se&&pe(t,o)||Ul(e,o)||(a=s[0])&&pe(a,o)||pe(r,o)||pe(Vo,o)||pe(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:pe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function dm(t){return Z(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ah=!0;function Sb(t){const e=Gd(t),n=t.proxy,r=t.ctx;Ah=!1,e.beforeCreate&&fm(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:h,mounted:d,beforeUpdate:f,updated:v,activated:I,deactivated:w,beforeDestroy:S,beforeUnmount:V,destroyed:N,unmounted:H,render:ee,renderTracked:$,renderTriggered:he,errorCaptured:je,serverPrefetch:Jt,expose:At,inheritAttrs:cr,components:Jr,directives:gn,filters:uo}=e;if(u&&Pb(u,r,null),o)for(const Ee in o){const _e=o[Ee];se(_e)&&(r[Ee]=_e.bind(n))}if(i){const Ee=i.call(n,n);be(Ee)&&(t.data=xa(Ee))}if(Ah=!0,s)for(const Ee in s){const _e=s[Ee],qn=se(_e)?_e.bind(n,n):se(_e.get)?_e.get.bind(n,n):Kt,ur=!se(_e)&&se(_e.set)?_e.set.bind(n):Kt,_n=zt({get:qn,set:ur});Object.defineProperty(r,Ee,{enumerable:!0,configurable:!0,get:()=>_n.value,set:Vt=>_n.value=Vt})}if(a)for(const Ee in a)By(a[Ee],r,n,Ee);if(c){const Ee=se(c)?c.call(n):c;Reflect.ownKeys(Ee).forEach(_e=>{Sc(_e,Ee[_e])})}l&&fm(l,t,"c");function Xe(Ee,_e){Z(_e)?_e.forEach(qn=>Ee(qn.bind(n))):_e&&Ee(_e.bind(n))}if(Xe(yb,h),Xe(My,d),Xe(vb,f),Xe(Ib,v),Xe(mb,I),Xe(gb,w),Xe(bb,je),Xe(Ab,$),Xe(Tb,he),Xe(wb,V),Xe(Fy,H),Xe(Eb,Jt),Z(At))if(At.length){const Ee=t.exposed||(t.exposed={});At.forEach(_e=>{Object.defineProperty(Ee,_e,{get:()=>n[_e],set:qn=>n[_e]=qn})})}else t.exposed||(t.exposed={});ee&&t.render===Kt&&(t.render=ee),cr!=null&&(t.inheritAttrs=cr),Jr&&(t.components=Jr),gn&&(t.directives=gn)}function Pb(t,e,n=Kt){Z(t)&&(t=bh(t));for(const r in t){const i=t[r];let s;be(i)?"default"in i?s=Nn(i.from||r,i.default,!0):s=Nn(i.from||r):s=Nn(i),qt(s)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[r]=s}}function fm(t,e,n){cn(Z(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function By(t,e,n,r){const i=r.includes(".")?Ny(n,r):()=>n[r];if(Qe(t)){const s=e[t];se(s)&&_s(i,s)}else if(se(t))_s(i,t.bind(n));else if(be(t))if(Z(t))t.forEach(s=>By(s,e,n,r));else{const s=se(t.handler)?t.handler.bind(n):e[t.handler];se(s)&&_s(i,s,t)}}function Gd(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let c;return a?c=a:!i.length&&!n&&!r?c=e:(c={},i.length&&i.forEach(u=>Wc(c,u,o,!0)),Wc(c,e,o)),be(e)&&s.set(e,c),c}function Wc(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&Wc(t,s,n,!0),i&&i.forEach(o=>Wc(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Cb[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Cb={data:pm,props:mm,emits:mm,methods:Ao,computed:Ao,beforeCreate:bt,created:bt,beforeMount:bt,mounted:bt,beforeUpdate:bt,updated:bt,beforeDestroy:bt,beforeUnmount:bt,destroyed:bt,unmounted:bt,activated:bt,deactivated:bt,errorCaptured:bt,serverPrefetch:bt,components:Ao,directives:Ao,watch:Db,provide:pm,inject:kb};function pm(t,e){return e?t?function(){return ft(se(t)?t.call(this,this):t,se(e)?e.call(this,this):e)}:e:t}function kb(t,e){return Ao(bh(t),bh(e))}function bh(t){if(Z(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function bt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ao(t,e){return t?ft(Object.create(null),t,e):e}function mm(t,e){return t?Z(t)&&Z(e)?[...new Set([...t,...e])]:ft(Object.create(null),dm(t),dm(e!=null?e:{})):e}function Db(t,e){if(!t)return e;if(!e)return t;const n=ft(Object.create(null),t);for(const r in e)n[r]=bt(t[r],e[r]);return n}function $y(){return{app:null,config:{isNativeTag:pA,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let xb=0;function Nb(t,e){return function(r,i=null){se(r)||(r=ft({},r)),i!=null&&!be(i)&&(i=null);const s=$y(),o=new WeakSet;let a=!1;const c=s.app={_uid:xb++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:iR,get config(){return s.config},set config(u){},use(u,...l){return o.has(u)||(u&&se(u.install)?(o.add(u),u.install(c,...l)):se(u)&&(o.add(u),u(c,...l))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,l){return l?(s.components[u]=l,c):s.components[u]},directive(u,l){return l?(s.directives[u]=l,c):s.directives[u]},mount(u,l,h){if(!a){const d=ae(r,i);return d.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),l&&e?e(d,u):t(d,u,h),a=!0,c._container=u,u.__vue_app__=c,Fu(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,l){return s.provides[u]=l,c},runWithContext(u){Gc=c;try{return u()}finally{Gc=null}}};return c}}let Gc=null;function Sc(t,e){if(It){let n=It.provides;const r=It.parent&&It.parent.provides;r===n&&(n=It.provides=Object.create(r)),n[t]=e}}function Nn(t,e,n=!1){const r=It||nt;if(r||Gc){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Gc._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&se(e)?e.call(r&&r.proxy):e}}function Vb(t,e,n,r=!1){const i={},s={};Bc(s,Lu,1),t.propsDefaults=Object.create(null),qy(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:gy(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function Ob(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=ge(i),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let h=0;h<l.length;h++){let d=l[h];if(xu(t.emitsOptions,d))continue;const f=e[d];if(c)if(pe(s,d))f!==s[d]&&(s[d]=f,u=!0);else{const v=Mn(d);i[v]=Rh(c,a,v,f,t,!1)}else f!==s[d]&&(s[d]=f,u=!0)}}}else{qy(t,e,i,s)&&(u=!0);let l;for(const h in a)(!e||!pe(e,h)&&((l=Gs(h))===h||!pe(e,l)))&&(c?n&&(n[h]!==void 0||n[l]!==void 0)&&(i[h]=Rh(c,a,h,void 0,t,!0)):delete i[h]);if(s!==a)for(const h in s)(!e||!pe(e,h)&&!0)&&(delete s[h],u=!0)}u&&Hn(t,"set","$attrs")}function qy(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(bc(c))continue;const u=e[c];let l;i&&pe(i,l=Mn(c))?!s||!s.includes(l)?n[l]=u:(a||(a={}))[l]=u:xu(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(s){const c=ge(n),u=a||Se;for(let l=0;l<s.length;l++){const h=s[l];n[h]=Rh(i,c,h,u[h],t,!pe(u,h))}}return o}function Rh(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=pe(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&se(c)){const{propsDefaults:u}=i;if(n in u)r=u[n];else{const l=Va(i);r=u[n]=c.call(null,e),l()}}else r=c}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===Gs(n))&&(r=!0))}return r}function jy(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let c=!1;if(!se(t)){const l=h=>{c=!0;const[d,f]=jy(h,e,!0);ft(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!s&&!c)return be(t)&&r.set(t,fs),fs;if(Z(s))for(let l=0;l<s.length;l++){const h=Mn(s[l]);gm(h)&&(o[h]=Se)}else if(s)for(const l in s){const h=Mn(l);if(gm(h)){const d=s[l],f=o[h]=Z(d)||se(d)?{type:d}:ft({},d);if(f){const v=vm(Boolean,f.type),I=vm(String,f.type);f[0]=v>-1,f[1]=I<0||v<I,(v>-1||pe(f,"default"))&&a.push(h)}}}const u=[o,a];return be(t)&&r.set(t,u),u}function gm(t){return t[0]!=="$"}function _m(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function ym(t,e){return _m(t)===_m(e)}function vm(t,e){return Z(e)?e.findIndex(n=>ym(n,t)):se(e)&&ym(e,t)?0:-1}const Wy=t=>t[0]==="_"||t==="$stable",zd=t=>Z(t)?t.map(In):[In(t)],Lb=(t,e,n)=>{if(e._n)return e;const r=Xn((...i)=>zd(e(...i)),n);return r._c=!1,r},Gy=(t,e,n)=>{const r=t._ctx;for(const i in t){if(Wy(i))continue;const s=t[i];if(se(s))e[i]=Lb(i,s,r);else if(s!=null){const o=zd(s);e[i]=()=>o}}},zy=(t,e)=>{const n=zd(e);t.slots.default=()=>n},Mb=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ge(e),Bc(e,"_",n)):Gy(e,t.slots={})}else t.slots={},e&&zy(t,e);Bc(t.slots,Lu,1)},Fb=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=Se;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(ft(i,e),!n&&a===1&&delete i._):(s=!e.$stable,Gy(e,i)),o=e}else e&&(zy(t,e),o={default:1});if(s)for(const a in i)!Wy(a)&&o[a]==null&&delete i[a]};function Sh(t,e,n,r,i=!1){if(Z(t)){t.forEach((d,f)=>Sh(d,e&&(Z(e)?e[f]:e),n,r,i));return}if(xo(r)&&!i)return;const s=r.shapeFlag&4?Fu(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:c}=t,u=e&&e.r,l=a.refs===Se?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==c&&(Qe(u)?(l[u]=null,pe(h,u)&&(h[u]=null)):qt(u)&&(u.value=null)),se(c))br(c,a,12,[o,l]);else{const d=Qe(c),f=qt(c);if(d||f){const v=()=>{if(t.f){const I=d?pe(h,c)?h[c]:l[c]:c.value;i?Z(I)&&kd(I,s):Z(I)?I.includes(s)||I.push(s):d?(l[c]=[s],pe(h,c)&&(h[c]=l[c])):(c.value=[s],t.k&&(l[t.k]=c.value))}else d?(l[c]=o,pe(h,c)&&(h[c]=o)):f&&(c.value=o,t.k&&(l[t.k]=o))};o?(v.id=-1,Ot(v,n)):v()}}}function Ub(){typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__!="boolean"&&(xd().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=!1)}const Ot=hb;function Bb(t){return $b(t)}function $b(t,e){Ub();const n=xd();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:h,nextSibling:d,setScopeId:f=Kt,insertStaticContent:v}=t,I=(p,m,_,A=null,E=null,x=null,B=void 0,k=null,L=!!m.dynamicChildren)=>{if(p===m)return;p&&!ho(p,m)&&(A=T(p),Vt(p,E,x,!0),p=null),m.patchFlag===-2&&(L=!1,m.dynamicChildren=null);const{type:P,ref:W,shapeFlag:X}=m;switch(P){case Ou:w(p,m,_,A);break;case kr:S(p,m,_,A);break;case $l:p==null&&V(m,_,A,B);break;case yt:Jr(p,m,_,A,E,x,B,k,L);break;default:X&1?ee(p,m,_,A,E,x,B,k,L):X&6?gn(p,m,_,A,E,x,B,k,L):(X&64||X&128)&&P.process(p,m,_,A,E,x,B,k,L,z)}W!=null&&E&&Sh(W,p&&p.ref,x,m||p,!m)},w=(p,m,_,A)=>{if(p==null)r(m.el=a(m.children),_,A);else{const E=m.el=p.el;m.children!==p.children&&u(E,m.children)}},S=(p,m,_,A)=>{p==null?r(m.el=c(m.children||""),_,A):m.el=p.el},V=(p,m,_,A)=>{[p.el,p.anchor]=v(p.children,m,_,A,p.el,p.anchor)},N=({el:p,anchor:m},_,A)=>{let E;for(;p&&p!==m;)E=d(p),r(p,_,A),p=E;r(m,_,A)},H=({el:p,anchor:m})=>{let _;for(;p&&p!==m;)_=d(p),i(p),p=_;i(m)},ee=(p,m,_,A,E,x,B,k,L)=>{m.type==="svg"?B="svg":m.type==="math"&&(B="mathml"),p==null?$(m,_,A,E,x,B,k,L):Jt(p,m,E,x,B,k,L)},$=(p,m,_,A,E,x,B,k)=>{let L,P;const{props:W,shapeFlag:X,transition:Q,dirs:ne}=p;if(L=p.el=o(p.type,x,W&&W.is,W),X&8?l(L,p.children):X&16&&je(p.children,L,null,A,E,Bl(p,x),B,k),ne&&Xr(p,null,A,"created"),he(L,p,p.scopeId,B,A),W){for(const Te in W)Te!=="value"&&!bc(Te)&&s(L,Te,null,W[Te],x,p.children,A,E,gt);"value"in W&&s(L,"value",null,W.value,x),(P=W.onVnodeBeforeMount)&&vn(P,A,p)}ne&&Xr(p,null,A,"beforeMount");const ue=qb(E,Q);ue&&Q.beforeEnter(L),r(L,m,_),((P=W&&W.onVnodeMounted)||ue||ne)&&Ot(()=>{P&&vn(P,A,p),ue&&Q.enter(L),ne&&Xr(p,null,A,"mounted")},E)},he=(p,m,_,A,E)=>{if(_&&f(p,_),A)for(let x=0;x<A.length;x++)f(p,A[x]);if(E){let x=E.subTree;if(m===x){const B=E.vnode;he(p,B,B.scopeId,B.slotScopeIds,E.parent)}}},je=(p,m,_,A,E,x,B,k,L=0)=>{for(let P=L;P<p.length;P++){const W=p[P]=k?_r(p[P]):In(p[P]);I(null,W,m,_,A,E,x,B,k)}},Jt=(p,m,_,A,E,x,B)=>{const k=m.el=p.el;let{patchFlag:L,dynamicChildren:P,dirs:W}=m;L|=p.patchFlag&16;const X=p.props||Se,Q=m.props||Se;let ne;if(_&&Zr(_,!1),(ne=Q.onVnodeBeforeUpdate)&&vn(ne,_,m,p),W&&Xr(m,p,_,"beforeUpdate"),_&&Zr(_,!0),P?At(p.dynamicChildren,P,k,_,A,Bl(m,E),x):B||_e(p,m,k,null,_,A,Bl(m,E),x,!1),L>0){if(L&16)cr(k,m,X,Q,_,A,E);else if(L&2&&X.class!==Q.class&&s(k,"class",null,Q.class,E),L&4&&s(k,"style",X.style,Q.style,E),L&8){const ue=m.dynamicProps;for(let Te=0;Te<ue.length;Te++){const xe=ue[Te],Ze=X[xe],rn=Q[xe];(rn!==Ze||xe==="value")&&s(k,xe,Ze,rn,E,p.children,_,A,gt)}}L&1&&p.children!==m.children&&l(k,m.children)}else!B&&P==null&&cr(k,m,X,Q,_,A,E);((ne=Q.onVnodeUpdated)||W)&&Ot(()=>{ne&&vn(ne,_,m,p),W&&Xr(m,p,_,"updated")},A)},At=(p,m,_,A,E,x,B)=>{for(let k=0;k<m.length;k++){const L=p[k],P=m[k],W=L.el&&(L.type===yt||!ho(L,P)||L.shapeFlag&70)?h(L.el):_;I(L,P,W,null,A,E,x,B,!0)}},cr=(p,m,_,A,E,x,B)=>{if(_!==A){if(_!==Se)for(const k in _)!bc(k)&&!(k in A)&&s(p,k,_[k],null,B,m.children,E,x,gt);for(const k in A){if(bc(k))continue;const L=A[k],P=_[k];L!==P&&k!=="value"&&s(p,k,P,L,B,m.children,E,x,gt)}"value"in A&&s(p,"value",_.value,A.value,B)}},Jr=(p,m,_,A,E,x,B,k,L)=>{const P=m.el=p?p.el:a(""),W=m.anchor=p?p.anchor:a("");let{patchFlag:X,dynamicChildren:Q,slotScopeIds:ne}=m;ne&&(k=k?k.concat(ne):ne),p==null?(r(P,_,A),r(W,_,A),je(m.children||[],_,W,E,x,B,k,L)):X>0&&X&64&&Q&&p.dynamicChildren?(At(p.dynamicChildren,Q,_,E,x,B,k),(m.key!=null||E&&m===E.subTree)&&Ky(p,m,!0)):_e(p,m,_,W,E,x,B,k,L)},gn=(p,m,_,A,E,x,B,k,L)=>{m.slotScopeIds=k,p==null?m.shapeFlag&512?E.ctx.activate(m,_,A,B,L):uo(m,_,A,E,x,B,L):Ki(p,m,L)},uo=(p,m,_,A,E,x,B)=>{const k=p.component=Jb(p,A,E);if(Oy(p)&&(k.ctx.renderer=z),Xb(k),k.asyncDep){if(E&&E.registerDep(k,Xe),!p.el){const L=k.subTree=ae(kr);S(null,L,m,_)}}else Xe(k,p,m,_,E,x,B)},Ki=(p,m,_)=>{const A=m.component=p.component;if(ab(p,m,_))if(A.asyncDep&&!A.asyncResolved){Ee(A,m,_);return}else A.next=m,tb(A.update),A.effect.dirty=!0,A.update();else m.el=p.el,A.vnode=m},Xe=(p,m,_,A,E,x,B)=>{const k=()=>{if(p.isMounted){let{next:W,bu:X,u:Q,parent:ne,vnode:ue}=p;{const Yi=Hy(p);if(Yi){W&&(W.el=ue.el,Ee(p,W,B)),Yi.asyncDep.then(()=>{p.isUnmounted||k()});return}}let Te=W,xe;Zr(p,!1),W?(W.el=ue.el,Ee(p,W,B)):W=ue,X&&Rc(X),(xe=W.props&&W.props.onVnodeBeforeUpdate)&&vn(xe,ne,W,ue),Zr(p,!0);const Ze=Fl(p),rn=p.subTree;p.subTree=Ze,I(rn,Ze,h(rn.el),T(rn),p,E,x),W.el=Ze.el,Te===null&&cb(p,Ze.el),Q&&Ot(Q,E),(xe=W.props&&W.props.onVnodeUpdated)&&Ot(()=>vn(xe,ne,W,ue),E)}else{let W;const{el:X,props:Q}=m,{bm:ne,m:ue,parent:Te}=p,xe=xo(m);if(Zr(p,!1),ne&&Rc(ne),!xe&&(W=Q&&Q.onVnodeBeforeMount)&&vn(W,Te,m),Zr(p,!0),X&&De){const Ze=()=>{p.subTree=Fl(p),De(X,p.subTree,p,E,null)};xe?m.type.__asyncLoader().then(()=>!p.isUnmounted&&Ze()):Ze()}else{const Ze=p.subTree=Fl(p);I(null,Ze,_,A,p,E,x),m.el=Ze.el}if(ue&&Ot(ue,E),!xe&&(W=Q&&Q.onVnodeMounted)){const Ze=m;Ot(()=>vn(W,Te,Ze),E)}(m.shapeFlag&256||Te&&xo(Te.vnode)&&Te.vnode.shapeFlag&256)&&p.a&&Ot(p.a,E),p.isMounted=!0,m=_=A=null}},L=p.effect=new Vd(k,Kt,()=>qd(P),p.scope),P=p.update=()=>{L.dirty&&L.run()};P.id=p.uid,Zr(p,!0),P()},Ee=(p,m,_)=>{m.component=p;const A=p.vnode.props;p.vnode=m,p.next=null,Ob(p,m.props,A,_),Fb(p,m.children,_),Vi(),um(p),Oi()},_e=(p,m,_,A,E,x,B,k,L=!1)=>{const P=p&&p.children,W=p?p.shapeFlag:0,X=m.children,{patchFlag:Q,shapeFlag:ne}=m;if(Q>0){if(Q&128){ur(P,X,_,A,E,x,B,k,L);return}else if(Q&256){qn(P,X,_,A,E,x,B,k,L);return}}ne&8?(W&16&&gt(P,E,x),X!==P&&l(_,X)):W&16?ne&16?ur(P,X,_,A,E,x,B,k,L):gt(P,E,x,!0):(W&8&&l(_,""),ne&16&&je(X,_,A,E,x,B,k,L))},qn=(p,m,_,A,E,x,B,k,L)=>{p=p||fs,m=m||fs;const P=p.length,W=m.length,X=Math.min(P,W);let Q;for(Q=0;Q<X;Q++){const ne=m[Q]=L?_r(m[Q]):In(m[Q]);I(p[Q],ne,_,null,E,x,B,k,L)}P>W?gt(p,E,x,!0,!1,X):je(m,_,A,E,x,B,k,L,X)},ur=(p,m,_,A,E,x,B,k,L)=>{let P=0;const W=m.length;let X=p.length-1,Q=W-1;for(;P<=X&&P<=Q;){const ne=p[P],ue=m[P]=L?_r(m[P]):In(m[P]);if(ho(ne,ue))I(ne,ue,_,null,E,x,B,k,L);else break;P++}for(;P<=X&&P<=Q;){const ne=p[X],ue=m[Q]=L?_r(m[Q]):In(m[Q]);if(ho(ne,ue))I(ne,ue,_,null,E,x,B,k,L);else break;X--,Q--}if(P>X){if(P<=Q){const ne=Q+1,ue=ne<W?m[ne].el:A;for(;P<=Q;)I(null,m[P]=L?_r(m[P]):In(m[P]),_,ue,E,x,B,k,L),P++}}else if(P>Q)for(;P<=X;)Vt(p[P],E,x,!0),P++;else{const ne=P,ue=P,Te=new Map;for(P=ue;P<=Q;P++){const Wt=m[P]=L?_r(m[P]):In(m[P]);Wt.key!=null&&Te.set(Wt.key,P)}let xe,Ze=0;const rn=Q-ue+1;let Yi=!1,Jp=0;const lo=new Array(rn);for(P=0;P<rn;P++)lo[P]=0;for(P=ne;P<=X;P++){const Wt=p[P];if(Ze>=rn){Vt(Wt,E,x,!0);continue}let yn;if(Wt.key!=null)yn=Te.get(Wt.key);else for(xe=ue;xe<=Q;xe++)if(lo[xe-ue]===0&&ho(Wt,m[xe])){yn=xe;break}yn===void 0?Vt(Wt,E,x,!0):(lo[yn-ue]=P+1,yn>=Jp?Jp=yn:Yi=!0,I(Wt,m[yn],_,null,E,x,B,k,L),Ze++)}const Xp=Yi?jb(lo):fs;for(xe=Xp.length-1,P=rn-1;P>=0;P--){const Wt=ue+P,yn=m[Wt],Zp=Wt+1<W?m[Wt+1].el:A;lo[P]===0?I(null,yn,_,Zp,E,x,B,k,L):Yi&&(xe<0||P!==Xp[xe]?_n(yn,_,Zp,2):xe--)}}},_n=(p,m,_,A,E=null)=>{const{el:x,type:B,transition:k,children:L,shapeFlag:P}=p;if(P&6){_n(p.component.subTree,m,_,A);return}if(P&128){p.suspense.move(m,_,A);return}if(P&64){B.move(p,m,_,z);return}if(B===yt){r(x,m,_);for(let X=0;X<L.length;X++)_n(L[X],m,_,A);r(p.anchor,m,_);return}if(B===$l){N(p,m,_);return}if(A!==2&&P&1&&k)if(A===0)k.beforeEnter(x),r(x,m,_),Ot(()=>k.enter(x),E);else{const{leave:X,delayLeave:Q,afterLeave:ne}=k,ue=()=>r(x,m,_),Te=()=>{X(x,()=>{ue(),ne&&ne()})};Q?Q(x,ue,Te):Te()}else r(x,m,_)},Vt=(p,m,_,A=!1,E=!1)=>{const{type:x,props:B,ref:k,children:L,dynamicChildren:P,shapeFlag:W,patchFlag:X,dirs:Q}=p;if(k!=null&&Sh(k,null,_,p,!0),W&256){m.ctx.deactivate(p);return}const ne=W&1&&Q,ue=!xo(p);let Te;if(ue&&(Te=B&&B.onVnodeBeforeUnmount)&&vn(Te,m,p),W&6)ac(p.component,_,A);else{if(W&128){p.suspense.unmount(_,A);return}ne&&Xr(p,null,m,"beforeUnmount"),W&64?p.type.remove(p,m,_,E,z,A):P&&(x!==yt||X>0&&X&64)?gt(P,m,_,!1,!0):(x===yt&&X&384||!E&&W&16)&&gt(L,m,_),A&&Hi(p)}(ue&&(Te=B&&B.onVnodeUnmounted)||ne)&&Ot(()=>{Te&&vn(Te,m,p),ne&&Xr(p,null,m,"unmounted")},_)},Hi=p=>{const{type:m,el:_,anchor:A,transition:E}=p;if(m===yt){Qi(_,A);return}if(m===$l){H(p);return}const x=()=>{i(_),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(p.shapeFlag&1&&E&&!E.persisted){const{leave:B,delayLeave:k}=E,L=()=>B(_,x);k?k(p.el,x,L):L()}else x()},Qi=(p,m)=>{let _;for(;p!==m;)_=d(p),i(p),p=_;i(m)},ac=(p,m,_)=>{const{bum:A,scope:E,update:x,subTree:B,um:k}=p;A&&Rc(A),E.stop(),x&&(x.active=!1,Vt(B,p,m,_)),k&&Ot(k,m),Ot(()=>{p.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},gt=(p,m,_,A=!1,E=!1,x=0)=>{for(let B=x;B<p.length;B++)Vt(p[B],m,_,A,E)},T=p=>p.shapeFlag&6?T(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el);let j=!1;const U=(p,m,_)=>{p==null?m._vnode&&Vt(m._vnode,null,null,!0):I(m._vnode||null,p,m,null,null,null,_),j||(j=!0,um(),Sy(),j=!1),m._vnode=p},z={p:I,um:Vt,m:_n,r:Hi,mt:uo,mc:je,pc:_e,pbc:At,n:T,o:t};let ye,De;return e&&([ye,De]=e(z)),{render:U,hydrate:ye,createApp:Nb(U,ye)}}function Bl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Zr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function qb(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ky(t,e,n=!1){const r=t.children,i=e.children;if(Z(r)&&Z(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=_r(i[s]),a.el=o.el),n||Ky(o,a)),a.type===Ou&&(a.el=o.el)}}function jb(t){const e=t.slice(),n=[0];let r,i,s,o,a;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(i=n[n.length-1],t[i]<u){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<u?s=a+1:o=a;u<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function Hy(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Hy(e)}const Wb=t=>t.__isTeleport,yt=Symbol.for("v-fgt"),Ou=Symbol.for("v-txt"),kr=Symbol.for("v-cmt"),$l=Symbol.for("v-stc"),Oo=[];let on=null;function Y(t=!1){Oo.push(on=t?null:[])}function Gb(){Oo.pop(),on=Oo[Oo.length-1]||null}let Jo=1;function Im(t){Jo+=t}function Qy(t){return t.dynamicChildren=Jo>0?on||fs:null,Gb(),Jo>0&&on&&on.push(t),t}function ie(t,e,n,r,i,s){return Qy(D(t,e,n,r,i,s,!0))}function ln(t,e,n,r,i){return Qy(ae(t,e,n,r,i,!0))}function zc(t){return t?t.__v_isVNode===!0:!1}function ho(t,e){return t.type===e.type&&t.key===e.key}const Lu="__vInternal",Yy=({key:t})=>t!=null?t:null,Pc=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Qe(t)||qt(t)||se(t)?{i:nt,r:t,k:e,f:!!n}:t:null);function D(t,e=null,n=null,r=0,i=null,s=t===yt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Yy(e),ref:e&&Pc(e),scopeId:Nu,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:nt};return a?(Kd(c,n),s&128&&t.normalize(c)):n&&(c.shapeFlag|=Qe(n)?8:16),Jo>0&&!o&&on&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&on.push(c),c}const ae=zb;function zb(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===ky)&&(t=kr),zc(t)){const a=Ss(t,e,!0);return n&&Kd(a,n),Jo>0&&!s&&on&&(a.shapeFlag&6?on[on.indexOf(t)]=a:on.push(a)),a.patchFlag|=-2,a}if(rR(t)&&(t=t.__vccOpts),e){e=Kb(e);let{class:a,style:c}=e;a&&!Qe(a)&&(e.class=Jn(a)),be(c)&&(yy(c)&&!Z(c)&&(c=ft({},c)),e.style=Nd(c))}const o=Qe(t)?1:lb(t)?128:Wb(t)?64:be(t)?4:se(t)?2:0;return D(t,e,n,r,i,o,s,!0)}function Kb(t){return t?yy(t)||Lu in t?ft({},t):t:null}function Ss(t,e,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=t,a=e?Hb(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Yy(a),ref:e&&e.ref?n&&i?Z(i)?i.concat(Pc(e)):[i,Pc(e)]:Pc(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==yt?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ss(t.ssContent),ssFallback:t.ssFallback&&Ss(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function kt(t=" ",e=0){return ae(Ou,null,t,e)}function en(t="",e=!1){return e?(Y(),ln(kr,null,t)):ae(kr,null,t)}function In(t){return t==null||typeof t=="boolean"?ae(kr):Z(t)?ae(yt,null,t.slice()):typeof t=="object"?_r(t):ae(Ou,null,String(t))}function _r(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ss(t)}function Kd(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(Z(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),Kd(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Lu in e)?e._ctx=nt:i===3&&nt&&(nt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else se(e)?(e={default:e,_ctx:nt},n=32):(e=String(e),r&64?(n=16,e=[kt(e)]):n=8);t.children=e,t.shapeFlag|=n}function Hb(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=Jn([e.class,r.class]));else if(i==="style")e.style=Nd([e.style,r.style]);else if(bu(i)){const s=e[i],o=r[i];o&&s!==o&&!(Z(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function vn(t,e,n,r=null){cn(t,e,7,[n,r])}const Qb=$y();let Yb=0;function Jb(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||Qb,s={uid:Yb++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new iy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:jy(r,i),emitsOptions:Cy(r,i),emit:null,emitted:null,propsDefaults:Se,inheritAttrs:r.inheritAttrs,ctx:Se,data:Se,props:Se,attrs:Se,slots:Se,refs:Se,setupState:Se,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=ib.bind(null,s),t.ce&&t.ce(s),s}let It=null,Kc,Ph;{const t=xd(),e=(n,r)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(r),s=>{i.length>1?i.forEach(o=>o(s)):i[0](s)}};Kc=e("__VUE_INSTANCE_SETTERS__",n=>It=n),Ph=e("__VUE_SSR_SETTERS__",n=>Mu=n)}const Va=t=>{const e=It;return Kc(t),t.scope.on(),()=>{t.scope.off(),Kc(e)}},wm=()=>{It&&It.scope.off(),Kc(null)};function Jy(t){return t.vnode.shapeFlag&4}let Mu=!1;function Xb(t,e=!1){e&&Ph(e);const{props:n,children:r}=t.vnode,i=Jy(t);Vb(t,n,i,e),Mb(t,r);const s=i?Zb(t,e):void 0;return e&&Ph(!1),s}function Zb(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=vy(new Proxy(t.ctx,Rb));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?tR(t):null,s=Va(t);Vi();const o=br(r,t,0,[t.props,i]);if(Oi(),s(),Z_(o)){if(o.then(wm,wm),e)return o.then(a=>{Em(t,a,e)}).catch(a=>{Du(a,t,0)});t.asyncDep=o}else Em(t,o,e)}else Xy(t,e)}function Em(t,e,n){se(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:be(e)&&(t.setupState=Ty(e)),Xy(t,n)}let Tm;function Xy(t,e,n){const r=t.type;if(!t.render){if(!e&&Tm&&!r.render){const i=r.template||Gd(t).template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,u=ft(ft({isCustomElement:s,delimiters:a},o),c);r.render=Tm(i,u)}}t.render=r.render||Kt}{const i=Va(t);Vi();try{Sb(t)}finally{Oi(),i()}}}function eR(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return $t(t,"get","$attrs"),e[n]}}))}function tR(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return eR(t)},slots:t.slots,emit:t.emit,expose:e}}function Fu(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Ty(vy(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Vo)return Vo[n](t)},has(e,n){return n in e||n in Vo}}))}function nR(t,e=!0){return se(t)?t.displayName||t.name:t.name||e&&t.__name}function rR(t){return se(t)&&"__vccOpts"in t}const zt=(t,e)=>QA(t,e,Mu);function Zy(t,e,n){const r=arguments.length;return r===2?be(e)&&!Z(e)?zc(e)?ae(t,null,[e]):ae(t,e):ae(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&zc(n)&&(n=[n]),ae(t,e,n))}const iR="3.4.10";/**
* @vue/runtime-dom v3.4.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const sR="http://www.w3.org/2000/svg",oR="http://www.w3.org/1998/Math/MathML",yr=typeof document!="undefined"?document:null,Am=yr&&yr.createElement("template"),aR={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e==="svg"?yr.createElementNS(sR,t):e==="mathml"?yr.createElementNS(oR,t):yr.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>yr.createTextNode(t),createComment:t=>yr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>yr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{Am.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const a=Am.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},cR=Symbol("_vtc");function uR(t,e,n){const r=t[cR];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const lR=Symbol("_vod"),hR=Symbol("");function dR(t,e,n){const r=t.style,i=r.display,s=Qe(n);if(n&&!s){if(e&&!Qe(e))for(const o in e)n[o]==null&&Ch(r,o,"");for(const o in n)Ch(r,o,n[o])}else if(s){if(e!==n){const o=r[hR];o&&(n+=";"+o),r.cssText=n}}else e&&t.removeAttribute("style");lR in t&&(r.display=i)}const bm=/\s*!important$/;function Ch(t,e,n){if(Z(n))n.forEach(r=>Ch(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=fR(t,e);bm.test(n)?t.setProperty(Gs(r),n.replace(bm,""),"important"):t[r]=n}}const Rm=["Webkit","Moz","ms"],ql={};function fR(t,e){const n=ql[e];if(n)return n;let r=Mn(e);if(r!=="filter"&&r in t)return ql[e]=r;r=Pu(r);for(let i=0;i<Rm.length;i++){const s=Rm[i]+r;if(s in t)return ql[e]=s}return e}const Sm="http://www.w3.org/1999/xlink";function pR(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Sm,e.slice(6,e.length)):t.setAttributeNS(Sm,e,n);else{const s=AA(e);n==null||s&&!ny(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function mR(t,e,n,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),t[e]=n==null?"":n;return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const u=a==="OPTION"?t.getAttribute("value"):t.value,l=n==null?"":n;u!==l&&(t.value=l),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const u=typeof t[e];u==="boolean"?n=ny(n):n==null&&u==="string"?(n="",c=!0):u==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function ii(t,e,n,r){t.addEventListener(e,n,r)}function gR(t,e,n,r){t.removeEventListener(e,n,r)}const Pm=Symbol("_vei");function _R(t,e,n,r,i=null){const s=t[Pm]||(t[Pm]={}),o=s[e];if(r&&o)o.value=r;else{const[a,c]=yR(e);if(r){const u=s[e]=wR(r,i);ii(t,a,u,c)}else o&&(gR(t,a,o,c),s[e]=void 0)}}const Cm=/(?:Once|Passive|Capture)$/;function yR(t){let e;if(Cm.test(t)){e={};let r;for(;r=t.match(Cm);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Gs(t.slice(2)),e]}let jl=0;const vR=Promise.resolve(),IR=()=>jl||(vR.then(()=>jl=0),jl=Date.now());function wR(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;cn(ER(r,n.value),e,5,[r])};return n.value=t,n.attached=IR(),n}function ER(t,e){if(Z(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const km=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,TR=(t,e,n,r,i,s,o,a,c)=>{const u=i==="svg";e==="class"?uR(t,r,u):e==="style"?dR(t,n,r):bu(e)?Cd(e)||_R(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):AR(t,e,r,u))?mR(t,e,r,s,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),pR(t,e,r,u))};function AR(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&km(e)&&se(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return km(e)&&Qe(n)?!1:e in t}const Hc=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Z(e)?n=>Rc(e,n):e};function bR(t){t.target.composing=!0}function Dm(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ys=Symbol("_assign"),Rr={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t[ys]=Hc(i);const s=r||i.props&&i.props.type==="number";ii(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),s&&(a=$c(a)),t[ys](a)}),n&&ii(t,"change",()=>{t.value=t.value.trim()}),e||(ii(t,"compositionstart",bR),ii(t,"compositionend",Dm),ii(t,"change",Dm))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:i}},s){if(t[ys]=Hc(s),t.composing)return;const o=i||t.type==="number"?$c(t.value):t.value,a=e==null?"":e;o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===a)||(t.value=a))}},xm={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const i=Ru(e);ii(t,"change",()=>{const s=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?$c(Qc(o)):Qc(o));t[ys](t.multiple?i?new Set(s):s:s[0])}),t[ys]=Hc(r)},mounted(t,{value:e}){Nm(t,e)},beforeUpdate(t,e,n){t[ys]=Hc(n)},updated(t,{value:e}){Nm(t,e)}};function Nm(t,e){const n=t.multiple;if(!(n&&!Z(e)&&!Ru(e))){for(let r=0,i=t.options.length;r<i;r++){const s=t.options[r],o=Qc(s);if(n)Z(e)?s.selected=RA(e,o)>-1:s.selected=e.has(o);else if(Cu(Qc(s),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Qc(t){return"_value"in t?t._value:t.value}const RR=["ctrl","shift","alt","meta"],SR={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>RR.some(n=>t[`${n}Key`]&&!e.includes(n))},Hd=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(i,...s)=>{for(let o=0;o<e.length;o++){const a=SR[e[o]];if(a&&a(i,e))return}return t(i,...s)})},PR=ft({patchProp:TR},aR);let Vm;function CR(){return Vm||(Vm=Bb(PR))}const kR=(...t)=>{const e=CR().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=xR(r);if(!i)return;const s=e._component;!se(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,DR(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function DR(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function xR(t){return Qe(t)?document.querySelector(t):t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},NR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},tv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,l=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;c||(f=64,o||(d=64)),r.push(n[l],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ev(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):NR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new VR;const d=s<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const v=u<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class VR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const OR=function(t){const e=ev(t);return tv.encodeByteArray(e,!0)},Yc=function(t){return OR(t).replace(/\./g,"")},nv=function(t){try{return tv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Jc(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!LR(n)||(t[n]=Jc(t[n],e[n]));return t}function LR(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MR(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FR=()=>MR().__FIREBASE_DEFAULTS__,UR=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},BR=()=>{if(typeof document=="undefined")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&nv(t[1]);return e&&JSON.parse(e)},Qd=()=>{try{return FR()||UR()||BR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},rv=()=>{var t;return(t=Qd())===null||t===void 0?void 0:t.config},$R=t=>{var e;return(e=Qd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jR(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Yc(JSON.stringify(n)),Yc(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function WR(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Le())}function Yd(){var t;const e=(t=Qd())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function GR(){return typeof self=="object"&&self.self===self}function iv(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Jd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sv(){const t=Le();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function zR(){return!Yd()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Xo(){try{return typeof indexedDB=="object"}catch{return!1}}function KR(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HR="FirebaseError";class Dt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=HR,Object.setPrototypeOf(this,Dt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fi.prototype.create)}}class Fi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?QR(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Dt(i,a,r)}}function QR(t,e){return t.replace(YR,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const YR=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Om(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function JR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function kh(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Lm(s)&&Lm(o)){if(!kh(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Lm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function hs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function bo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function ov(t,e){const n=new XR(t,e);return n.subscribe.bind(n)}class XR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ZR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Wl),i.error===void 0&&(i.error=Wl),i.complete===void 0&&(i.complete=Wl);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ZR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Wl(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(t){return t&&t._delegate?t._delegate:t}class Fn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new qR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(nS(e))try{this.getOrInitializeService({instanceIdentifier:ti})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ti){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ti){return this.instances.has(e)}getOptions(e=ti){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:tS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ti){return this.component?this.component.multipleInstances?e:ti:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function tS(t){return t===ti?void 0:t}function nS(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new eS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd=[];var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const av={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},iS=ce.INFO,sS={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},oS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=sS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Uu{constructor(e){this.name=e,this._logLevel=iS,this._logHandler=oS,this._userLogHandler=null,Xd.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?av[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}function aS(t){Xd.forEach(e=>{e.setLogLevel(t)})}function cS(t,e){for(const n of Xd){let r=null;e&&e.level&&(r=av[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");s>=(r!=null?r:i.logLevel)&&t({level:ce[s].toLowerCase(),message:a,args:o,type:i.name})}}}const uS=(t,e)=>e.some(n=>t instanceof n);let Mm,Fm;function lS(){return Mm||(Mm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hS(){return Fm||(Fm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cv=new WeakMap,Dh=new WeakMap,uv=new WeakMap,Gl=new WeakMap,Zd=new WeakMap;function dS(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Sr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&cv.set(n,t)}).catch(()=>{}),Zd.set(e,t),e}function fS(t){if(Dh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Dh.set(t,e)}let xh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Dh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||uv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Sr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function pS(t){xh=t(xh)}function mS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(zl(this),e,...n);return uv.set(r,e.sort?e.sort():[e]),Sr(r)}:hS().includes(t)?function(...e){return t.apply(zl(this),e),Sr(cv.get(this))}:function(...e){return Sr(t.apply(zl(this),e))}}function gS(t){return typeof t=="function"?mS(t):(t instanceof IDBTransaction&&fS(t),uS(t,lS())?new Proxy(t,xh):t)}function Sr(t){if(t instanceof IDBRequest)return dS(t);if(Gl.has(t))return Gl.get(t);const e=gS(t);return e!==t&&(Gl.set(t,e),Zd.set(e,t)),e}const zl=t=>Zd.get(t);function _S(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Sr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Sr(o.result),c.oldVersion,c.newVersion,Sr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const yS=["get","getKey","getAll","getAllKeys","count"],vS=["put","add","delete","clear"],Kl=new Map;function Um(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Kl.get(e))return Kl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=vS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||yS.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&c.done]))[0]};return Kl.set(e,s),s}pS(t=>({...t,get:(e,n,r)=>Um(e,n)||t.get(e,n,r),has:(e,n)=>!!Um(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(wS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function wS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Nh="@firebase/app",Bm="0.9.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei=new Uu("@firebase/app"),ES="@firebase/app-compat",TS="@firebase/analytics-compat",AS="@firebase/analytics",bS="@firebase/app-check-compat",RS="@firebase/app-check",SS="@firebase/auth",PS="@firebase/auth-compat",CS="@firebase/database",kS="@firebase/database-compat",DS="@firebase/functions",xS="@firebase/functions-compat",NS="@firebase/installations",VS="@firebase/installations-compat",OS="@firebase/messaging",LS="@firebase/messaging-compat",MS="@firebase/performance",FS="@firebase/performance-compat",US="@firebase/remote-config",BS="@firebase/remote-config-compat",$S="@firebase/storage",qS="@firebase/storage-compat",jS="@firebase/firestore",WS="@firebase/firestore-compat",GS="firebase",zS="10.7.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr="[DEFAULT]",KS={[Nh]:"fire-core",[ES]:"fire-core-compat",[AS]:"fire-analytics",[TS]:"fire-analytics-compat",[RS]:"fire-app-check",[bS]:"fire-app-check-compat",[SS]:"fire-auth",[PS]:"fire-auth-compat",[CS]:"fire-rtdb",[kS]:"fire-rtdb-compat",[DS]:"fire-fn",[xS]:"fire-fn-compat",[NS]:"fire-iid",[VS]:"fire-iid-compat",[OS]:"fire-fcm",[LS]:"fire-fcm-compat",[MS]:"fire-perf",[FS]:"fire-perf-compat",[US]:"fire-rc",[BS]:"fire-rc-compat",[$S]:"fire-gcs",[qS]:"fire-gcs-compat",[jS]:"fire-fst",[WS]:"fire-fst-compat","fire-js":"fire-js",[GS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr=new Map,Zo=new Map;function Xc(t,e){try{t.container.addComponent(e)}catch(n){Ei.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function lv(t,e){t.container.addOrOverwriteComponent(e)}function Nr(t){const e=t.name;if(Zo.has(e))return Ei.debug(`There were multiple attempts to register component ${e}.`),!1;Zo.set(e,t);for(const n of xr.values())Xc(n,t);return!0}function hv(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function HS(t,e,n=Dr){hv(t,e).clearInstance(n)}function QS(){Zo.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YS={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Qn=new Fi("app","Firebase",YS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr=zS;function ef(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Dr,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Qn.create("bad-app-name",{appName:String(i)});if(n||(n=rv()),!n)throw Qn.create("no-options");const s=xr.get(i);if(s){if(kh(n,s.options)&&kh(r,s.config))return s;throw Qn.create("duplicate-app",{appName:i})}const o=new rS(i);for(const c of Zo.values())o.addComponent(c);const a=new JS(n,r,o);return xr.set(i,a),a}function XS(t=Dr){const e=xr.get(t);if(!e&&t===Dr&&rv())return ef();if(!e)throw Qn.create("no-app",{appName:t});return e}function ZS(){return Array.from(xr.values())}async function dv(t){const e=t.name;xr.has(e)&&(xr.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function Vn(t,e,n){var r;let i=(r=KS[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ei.warn(a.join(" "));return}Nr(new Fn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function fv(t,e){if(t!==null&&typeof t!="function")throw Qn.create("invalid-log-argument");cS(t,e)}function pv(t){aS(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e0="firebase-heartbeat-database",t0=1,ea="firebase-heartbeat-store";let Hl=null;function mv(){return Hl||(Hl=_S(e0,t0,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ea)}}}).catch(t=>{throw Qn.create("idb-open",{originalErrorMessage:t.message})})),Hl}async function n0(t){try{return await(await mv()).transaction(ea).objectStore(ea).get(gv(t))}catch(e){if(e instanceof Dt)Ei.warn(e.message);else{const n=Qn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ei.warn(n.message)}}}async function $m(t,e){try{const r=(await mv()).transaction(ea,"readwrite");await r.objectStore(ea).put(e,gv(t)),await r.done}catch(n){if(n instanceof Dt)Ei.warn(n.message);else{const r=Qn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ei.warn(r.message)}}}function gv(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r0=1024,i0=30*24*60*60*1e3;class s0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new a0(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=qm();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=i0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=qm(),{heartbeatsToSend:r,unsentEntries:i}=o0(this._heartbeatsCache.heartbeats),s=Yc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function qm(){return new Date().toISOString().substring(0,10)}function o0(t,e=r0){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),jm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),jm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class a0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xo()?KR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await n0(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return $m(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return $m(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function jm(t){return Yc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c0(t){Nr(new Fn("platform-logger",e=>new IS(e),"PRIVATE")),Nr(new Fn("heartbeat",e=>new s0(e),"PRIVATE")),Vn(Nh,Bm,t),Vn(Nh,Bm,"esm2017"),Vn("fire-js","")}c0("");var u0=Object.freeze(Object.defineProperty({__proto__:null,SDK_VERSION:jr,_DEFAULT_ENTRY_NAME:Dr,_addComponent:Xc,_addOrOverwriteComponent:lv,_apps:xr,_clearComponents:QS,_components:Zo,_getProvider:hv,_registerComponent:Nr,_removeServiceInstance:HS,deleteApp:dv,getApp:XS,getApps:ZS,initializeApp:ef,onLog:fv,registerVersion:Vn,setLogLevel:pv,FirebaseError:Dt},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(e,n){this._delegate=e,this.firebase=n,Xc(e,new Fn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),dv(this._delegate)))}_getService(e,n=Dr){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Dr){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Xc(this._delegate,e)}_addOrOverwriteComponent(e){lv(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h0={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},Wm=new Fi("app-compat","Firebase",h0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d0(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:Vn,setLogLevel:pv,onLog:fv,apps:null,SDK_VERSION:jr,INTERNAL:{registerComponent:a,removeApp:r,useAsService:c,modularAPIs:u0}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||Dr,!Om(e,u))throw Wm.create("no-app",{appName:u});return e[u]}i.App=t;function s(u,l={}){const h=ef(u,l);if(Om(e,h.name))return e[h.name];const d=new t(h,n);return e[h.name]=d,d}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const l=u.name,h=l.replace("-compat","");if(Nr(u)&&u.type==="PUBLIC"){const d=(f=i())=>{if(typeof f[h]!="function")throw Wm.create("invalid-app-argument",{appName:l});return f[h]()};u.serviceProps!==void 0&&Jc(d,u.serviceProps),n[h]=d,t.prototype[h]=function(...f){return this._getService.bind(this,l).apply(this,u.multipleInstances?f:[])}}return u.type==="PUBLIC"?n[h]:null}function c(u,l){return l==="serverAuth"?null:l}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _v(){const t=d0(l0);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:_v,extendNamespace:e,createSubscribe:ov,ErrorFactory:Fi,deepExtend:Jc});function e(n){Jc(t,n)}return t}const f0=_v();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gm=new Uu("@firebase/app-compat"),p0="@firebase/app-compat",m0="0.2.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g0(t){Vn(p0,m0,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(GR()&&self.firebase!==void 0){Gm.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&Gm.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const tn=f0;g0();var _0="firebase",y0="10.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tn.registerVersion(_0,y0,"app-compat");function tf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const fo={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Ji={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v0(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is incorrect, malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-password"]:"A non-empty password must be provided",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",["missing-recaptcha-token"]:"The reCAPTCHA token is missing when sending request to the backend.",["invalid-recaptcha-token"]:"The reCAPTCHA token is invalid when sending request to the backend.",["invalid-recaptcha-action"]:"The reCAPTCHA action is invalid when sending request to the backend.",["recaptcha-not-enabled"]:"reCAPTCHA Enterprise integration is not enabled for this project.",["missing-client-type"]:"The reCAPTCHA client type is missing when sending request to the backend.",["missing-recaptcha-version"]:"The reCAPTCHA version is missing when sending request to the backend.",["invalid-req-type"]:"Invalid request parameters.",["invalid-recaptcha-version"]:"The reCAPTCHA version is invalid when sending request to the backend.",["unsupported-password-policy-schema-version"]:"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.",["password-does-not-meet-requirements"]:"The password does not meet the requirements."}}function yv(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const I0=v0,w0=yv,vv=new Fi("auth","Firebase",yv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zc=new Uu("@firebase/auth");function E0(t,...e){Zc.logLevel<=ce.WARN&&Zc.warn(`Auth (${jr}): ${t}`,...e)}function Cc(t,...e){Zc.logLevel<=ce.ERROR&&Zc.error(`Auth (${jr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(t,...e){throw nf(t,...e)}function ht(t,...e){return nf(t,...e)}function Iv(t,e,n){const r=Object.assign(Object.assign({},w0()),{[e]:n});return new Fi("auth","Firebase",r).create(e,{appName:t.name})}function Ks(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&pt(t,"argument-error"),Iv(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function nf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return vv.create(t,...e)}function C(t,e,...n){if(!t)throw nf(e,...n)}function Pn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Cc(e),new Error(e)}function hn(t,e){t||Pn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function rf(){return zm()==="http:"||zm()==="https:"}function zm(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T0(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(rf()||iv()||"connection"in navigator)?navigator.onLine:!0}function A0(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e,n){this.shortDelay=e,this.longDelay=n,hn(n>e,"Short delay should be less than long delay!"),this.isMobile=WR()||Jd()}get(){return T0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sf(t,e){hn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;if(typeof globalThis!="undefined"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch!="undefined")return fetch;Pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;if(typeof globalThis!="undefined"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers!="undefined")return Headers;Pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;if(typeof globalThis!="undefined"&&globalThis.Response)return globalThis.Response;if(typeof Response!="undefined")return Response;Pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R0=new Oa(3e4,6e4);function $e(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function qe(t,e,n,r,i={}){return Ev(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=zs(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),wv.fetch()(Tv(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function Ev(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},b0),e);try{const i=new P0(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ro(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ro(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ro(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ro(t,"user-disabled",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Iv(t,l,u);pt(t,l)}}catch(i){if(i instanceof Dt)throw i;pt(t,"network-request-failed",{message:String(i)})}}async function rr(t,e,n,r,i={}){const s=await qe(t,e,n,r,i);return"mfaPendingCredential"in s&&pt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Tv(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?sf(t.config,i):`${t.config.apiScheme}://${i}`}function S0(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class P0{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ht(this.auth,"network-request-failed")),R0.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ro(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ht(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Km(t){return t!==void 0&&t.getResponse!==void 0}function Hm(t){return t!==void 0&&t.enterprise!==void 0}class C0{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return S0(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k0(t){return(await qe(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function D0(t,e){return qe(t,"GET","/v2/recaptchaConfig",$e(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x0(t,e){return qe(t,"POST","/v1/accounts:delete",e)}async function N0(t,e){return qe(t,"POST","/v1/accounts:update",e)}async function V0(t,e){return qe(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lo(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function O0(t,e=!1){const n=J(t),r=await n.getIdToken(e),i=Bu(r);C(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Lo(Ql(i.auth_time)),issuedAtTime:Lo(Ql(i.iat)),expirationTime:Lo(Ql(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ql(t){return Number(t)*1e3}function Bu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Cc("JWT malformed, contained fewer than 3 sections"),null;try{const i=nv(n);return i?JSON.parse(i):(Cc("Failed to decode base64 JWT payload"),null)}catch(i){return Cc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function L0(t){const e=Bu(t);return C(e,"internal-error"),C(typeof e.exp!="undefined","internal-error"),C(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Dt&&M0(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function M0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Lo(this.lastLoginAt),this.creationTime=Lo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function na(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Zn(t,V0(n,{idToken:r}));C(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?$0(s.providerUserInfo):[],a=B0(t.providerData,o),c=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Av(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function U0(t){const e=J(t);await na(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function B0(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function $0(t){return t.map(e=>{var{providerId:n}=e,r=tf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q0(t,e){const n=await Ev(t,{},async()=>{const r=zs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Tv(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",wv.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function j0(t,e){return qe(t,"POST","/v2/accounts:revokeToken",$e(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){C(e.idToken,"internal-error"),C(typeof e.idToken!="undefined","internal-error"),C(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):L0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return C(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await q0(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ra;return r&&(C(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(C(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(C(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ra,this.toJSON())}_performRefresh(){return Pn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(t,e){C(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class yi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=tf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new F0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Av(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Zn(this,this.stsTokenManager.getToken(this.auth,e));return C(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return O0(this,e)}reload(){return U0(this)}_assign(e){this!==e&&(C(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new yi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){C(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await na(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Zn(this,x0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,c,u,l;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,I=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,S=(u=n.createdAt)!==null&&u!==void 0?u:void 0,V=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:N,emailVerified:H,isAnonymous:ee,providerData:$,stsTokenManager:he}=n;C(N&&he,e,"internal-error");const je=ra.fromJSON(this.name,he);C(typeof N=="string",e,"internal-error"),hr(h,e.name),hr(d,e.name),C(typeof H=="boolean",e,"internal-error"),C(typeof ee=="boolean",e,"internal-error"),hr(f,e.name),hr(v,e.name),hr(I,e.name),hr(w,e.name),hr(S,e.name),hr(V,e.name);const Jt=new yi({uid:N,auth:e,email:d,emailVerified:H,displayName:h,isAnonymous:ee,photoURL:v,phoneNumber:f,tenantId:I,stsTokenManager:je,createdAt:S,lastLoginAt:V});return $&&Array.isArray($)&&(Jt.providerData=$.map(At=>Object.assign({},At))),w&&(Jt._redirectEventId=w),Jt}static async _fromIdTokenResponse(e,n,r=!1){const i=new ra;i.updateFromServerResponse(n);const s=new yi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await na(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qm=new Map;function Ht(t){hn(t instanceof Function,"Expected a class definition");let e=Qm.get(t);return e?(hn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Qm.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}bv.type="NONE";const Ps=bv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(t,e,n){return`firebase:${t}:${e}:${n}`}class vs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=vi(this.userKey,i.apiKey,s),this.fullPersistenceKey=vi("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?yi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new vs(Ht(Ps),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Ht(Ps);const o=vi(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const h=yi._fromJSON(e,l);u!==s&&(a=h),s=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new vs(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new vs(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ym(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Pv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Rv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Cv(e))return"Blackberry";if(kv(e))return"Webos";if(of(e))return"Safari";if((e.includes("chrome/")||Sv(e))&&!e.includes("edge/"))return"Chrome";if(La(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Rv(t=Le()){return/firefox\//i.test(t)}function of(t=Le()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Sv(t=Le()){return/crios\//i.test(t)}function Pv(t=Le()){return/iemobile/i.test(t)}function La(t=Le()){return/android/i.test(t)}function Cv(t=Le()){return/blackberry/i.test(t)}function kv(t=Le()){return/webos/i.test(t)}function Hs(t=Le()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function W0(t=Le()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function G0(t=Le()){var e;return Hs(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function z0(){return sv()&&document.documentMode===10}function Dv(t=Le()){return Hs(t)||La(t)||kv(t)||Cv(t)||/windows phone/i.test(t)||Pv(t)}function K0(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xv(t,e=[]){let n;switch(t){case"Browser":n=Ym(Le());break;case"Worker":n=`${Ym(Le())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${jr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q0(t,e={}){return qe(t,"GET","/v2/passwordPolicy",$e(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y0=6;class J0{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Y0,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Jm(this),this.idTokenSubscription=new Jm(this),this.beforeStateQueue=new H0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ht(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await vs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return C(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await na(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=A0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?J(e):null;return n&&C(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&C(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ht(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Q0(this),n=new J0(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Fi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await j0(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ht(e)||this._popupRedirectResolver;C(n,this,"argument-error"),this.redirectPersistenceManager=await vs.create(this,[Ht(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(C(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,i);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return C(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&E0(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Fe(t){return J(t)}class Jm{constructor(e){this.auth=e,this.observer=null,this.addObserver=ov(n=>this.observer=n)}get next(){return C(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function af(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=ht("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Z0().appendChild(r)})}function Nv(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const eP="https://www.google.com/recaptcha/enterprise.js?render=",tP="recaptcha-enterprise",nP="NO_RECAPTCHA";class rP{constructor(e){this.type=tP,this.auth=Fe(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{D0(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new C0(c);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function i(s,o,a){const c=window.grecaptcha;Hm(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(nP)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Hm(window.grecaptcha))i(a,s,o);else{if(typeof window=="undefined"){o(new Error("RecaptchaVerifier is only supported in browser"));return}af(eP+a).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Xm(t,e,n,r=!1){const i=new rP(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function ia(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Xm(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Xm(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}function iP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ht);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function sP(t,e,n){const r=Fe(t);C(r._canInitEmulator,r,"emulator-config-failed"),C(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Vv(e),{host:o,port:a}=oP(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||aP()}function Vv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function oP(t){const e=Vv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Zm(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Zm(o)}}}function Zm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function aP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Pn("not implemented")}_getIdTokenResponse(e){return Pn("not implemented")}_linkToIdToken(e,n){return Pn("not implemented")}_getReauthenticationResolver(e){return Pn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ov(t,e){return qe(t,"POST","/v1/accounts:resetPassword",$e(t,e))}async function cP(t,e){return qe(t,"POST","/v1/accounts:update",e)}async function uP(t,e){return qe(t,"POST","/v1/accounts:signUp",e)}async function lP(t,e){return qe(t,"POST","/v1/accounts:update",$e(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hP(t,e){return rr(t,"POST","/v1/accounts:signInWithPassword",$e(t,e))}async function $u(t,e){return qe(t,"POST","/v1/accounts:sendOobCode",$e(t,e))}async function dP(t,e){return $u(t,e)}async function fP(t,e){return $u(t,e)}async function pP(t,e){return $u(t,e)}async function mP(t,e){return $u(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gP(t,e){return rr(t,"POST","/v1/accounts:signInWithEmailLink",$e(t,e))}async function _P(t,e){return rr(t,"POST","/v1/accounts:signInWithEmailLink",$e(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa extends Qs{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new sa(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new sa(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ia(e,n,"signInWithPassword",hP);case"emailLink":return gP(e,{email:this._email,oobCode:this._password});default:pt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ia(e,r,"signUpPassword",uP);case"emailLink":return _P(e,{idToken:n,email:this._email,oobCode:this._password});default:pt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yn(t,e){return rr(t,"POST","/v1/accounts:signInWithIdp",$e(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yP="http://localhost";class Un extends Qs{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Un(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):pt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=tf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Un(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Yn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Yn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Yn(e,n)}buildRequest(){const e={requestUri:yP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=zs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vP(t,e){return qe(t,"POST","/v1/accounts:sendVerificationCode",$e(t,e))}async function IP(t,e){return rr(t,"POST","/v1/accounts:signInWithPhoneNumber",$e(t,e))}async function wP(t,e){const n=await rr(t,"POST","/v1/accounts:signInWithPhoneNumber",$e(t,e));if(n.temporaryProof)throw Ro(t,"account-exists-with-different-credential",n);return n}const EP={USER_NOT_FOUND:"user-not-found"};async function TP(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return rr(t,"POST","/v1/accounts:signInWithPhoneNumber",$e(t,n),EP)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii extends Qs{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Ii({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Ii({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return IP(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return wP(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return TP(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Ii({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function bP(t){const e=hs(bo(t)).link,n=e?hs(bo(e)).deep_link_id:null,r=hs(bo(t)).deep_link_id;return(r?hs(bo(r)).link:null)||r||n||e||t}class qu{constructor(e){var n,r,i,s,o,a;const c=hs(bo(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,l=(r=c.oobCode)!==null&&r!==void 0?r:null,h=AP((i=c.mode)!==null&&i!==void 0?i:null);C(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=bP(e);try{return new qu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(){this.providerId=Wr.PROVIDER_ID}static credential(e,n){return sa._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=qu.parseLink(n);return C(r,"argument-error"),sa._fromEmailAndCode(e,r.code,r.tenantId)}}Wr.PROVIDER_ID="password";Wr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Wr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys extends ir{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Is extends Ys{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return C("providerId"in n&&"signInMethod"in n,"argument-error"),Un._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return C(e.idToken||e.accessToken,"argument-error"),Un._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Is.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Is.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new Is(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En extends Ys{constructor(){super("facebook.com")}static credential(e){return Un._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return En.credential(e.oauthAccessToken)}catch{return null}}}En.FACEBOOK_SIGN_IN_METHOD="facebook.com";En.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn extends Ys{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Un._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Tn.credential(n,r)}catch{return null}}}Tn.GOOGLE_SIGN_IN_METHOD="google.com";Tn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends Ys{constructor(){super("github.com")}static credential(e){return Un._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return An.credential(e.oauthAccessToken)}catch{return null}}}An.GITHUB_SIGN_IN_METHOD="github.com";An.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RP="http://localhost";class Cs extends Qs{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return Yn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Yn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Yn(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new Cs(r,s)}static _create(e,n){return new Cs(e,n)}buildRequest(){return{requestUri:RP,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SP="saml.";class eu extends ir{constructor(e){C(e.startsWith(SP),"argument-error"),super(e)}static credentialFromResult(e){return eu.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return eu.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=Cs.fromJSON(e);return C(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return Cs._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends Ys{constructor(){super("twitter.com")}static credential(e,n){return Un._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return bn.credential(n,r)}catch{return null}}}bn.TWITTER_SIGN_IN_METHOD="twitter.com";bn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lv(t,e){return rr(t,"POST","/v1/accounts:signUp",$e(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await yi._fromIdTokenResponse(e,r,i),o=eg(r);return new nn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=eg(r);return new nn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function eg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PP(t){var e;const n=Fe(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new nn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Lv(n,{returnSecureToken:!0}),i=await nn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu extends Dt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,tu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new tu(e,n,r,i)}}function Mv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?tu._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fv(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CP(t,e){const n=J(t);await ju(!0,n,e);const{providerUserInfo:r}=await N0(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=Fv(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function cf(t,e,n=!1){const r=await Zn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return nn._forOperation(t,"link",r)}async function ju(t,e,n){await na(e);const r=Fv(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";C(r.has(n)===t,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uv(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Zn(t,Mv(r,i,e,t),n);C(s.idToken,r,"internal-error");const o=Bu(s.idToken);C(o,r,"internal-error");const{sub:a}=o;return C(t.uid===a,r,"user-mismatch"),nn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&pt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bv(t,e,n=!1){const r="signIn",i=await Mv(t,r,e),s=await nn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Wu(t,e){return Bv(Fe(t),e)}async function $v(t,e){const n=J(t);return await ju(!1,n,e.providerId),cf(n,e)}async function qv(t,e){return Uv(J(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kP(t,e){return rr(t,"POST","/v1/accounts:signInWithCustomToken",$e(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DP(t,e){const n=Fe(t),r=await kP(n,{token:e,returnSecureToken:!0}),i=await nn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?uf._fromServerResponse(e,n):"totpInfo"in n?lf._fromServerResponse(e,n):pt(e,"internal-error")}}class uf extends Ma{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new uf(n)}}class lf extends Ma{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new lf(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(t,e,n){var r;C(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),C(typeof n.dynamicLinkDomain=="undefined"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(C(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(C(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hf(t){const e=Fe(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function xP(t,e,n){const r=Fe(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&Gu(r,i,n),await ia(r,i,"getOobCode",fP)}async function NP(t,e,n){await Ov(J(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&hf(t),r})}async function VP(t,e){await lP(J(t),{oobCode:e})}async function jv(t,e){const n=J(t),r=await Ov(n,{oobCode:e}),i=r.requestType;switch(C(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":C(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":C(r.mfaInfo,n,"internal-error");default:C(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=Ma._fromServerResponse(Fe(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function OP(t,e){const{data:n}=await jv(J(t),e);return n.email}async function LP(t,e,n){const r=Fe(t),o=await ia(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Lv).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&hf(t),c}),a=await nn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function MP(t,e,n){return Wu(J(t),Wr.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&hf(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FP(t,e,n){const r=Fe(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,a){C(a.handleCodeInApp,r,"argument-error"),a&&Gu(r,o,a)}s(i,n),await ia(r,i,"getOobCode",pP)}function UP(t,e){const n=qu.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function BP(t,e,n){const r=J(t),i=Wr.credentialWithLink(e,n||ta());return C(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Wu(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $P(t,e){return qe(t,"POST","/v1/accounts:createAuthUri",$e(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qP(t,e){const n=rf()?ta():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await $P(J(t),r);return i||[]}async function jP(t,e){const n=J(t),r=await t.getIdToken(),i={requestType:"VERIFY_EMAIL",idToken:r};e&&Gu(n.auth,i,e);const{email:s}=await dP(n.auth,i);s!==t.email&&await t.reload()}async function WP(t,e,n){const r=J(t),i=await t.getIdToken(),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:i,newEmail:e};n&&Gu(r.auth,s,n);const{email:o}=await mP(r.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GP(t,e){return qe(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zP(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=J(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Zn(r,GP(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function KP(t,e){return Wv(J(t),e,null)}function HP(t,e){return Wv(J(t),null,e)}async function Wv(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Zn(t,cP(r,s));await t._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QP(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t==null?void 0:t.idToken)){const o=(n=(e=Bu(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new ws(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new YP(s,i);case"github.com":return new JP(s,i);case"google.com":return new XP(s,i);case"twitter.com":return new ZP(s,i,t.screenName||null);case"custom":case"anonymous":return new ws(s,null);default:return new ws(s,r,i)}}class ws{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class Gv extends ws{constructor(e,n,r,i){super(e,n,r),this.username=i}}class YP extends ws{constructor(e,n){super(e,"facebook.com",n)}}class JP extends Gv{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class XP extends ws{constructor(e,n){super(e,"google.com",n)}}class ZP extends Gv{constructor(e,n,r){super(e,"twitter.com",n,r)}}function eC(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:QP(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,n,r){this.type=e,this.credential=n,this.user=r}static _fromIdtoken(e,n){return new hi("enroll",e,n)}static _fromMfaPendingCredential(e){return new hi("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return hi._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return hi._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=Fe(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>Ma._fromServerResponse(r,a));C(i.mfaPendingCredential,r,"internal-error");const o=hi._fromMfaPendingCredential(i.mfaPendingCredential);return new df(o,s,async a=>{const c=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:c.idToken,refreshToken:c.refreshToken});switch(n.operationType){case"signIn":const l=await nn._fromIdTokenResponse(r,n.operationType,u);return await r._updateCurrentUser(l.user),l;case"reauthenticate":return C(n.user,r,"internal-error"),nn._forOperation(n.user,n.operationType,u);default:pt(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function tC(t,e){var n;const r=J(t),i=e;return C(e.customData.operationType,r,"argument-error"),C((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),df._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nC(t,e){return qe(t,"POST","/v2/accounts/mfaEnrollment:start",$e(t,e))}function rC(t,e){return qe(t,"POST","/v2/accounts/mfaEnrollment:finalize",$e(t,e))}function iC(t,e){return qe(t,"POST","/v2/accounts/mfaEnrollment:withdraw",$e(t,e))}class ff{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>Ma._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new ff(e)}async getSession(){return hi._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const r=e,i=await this.getSession(),s=await Zn(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await Zn(this.user,iC(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const Yl=new WeakMap;function sC(t){const e=J(t);return Yl.has(e)||Yl.set(e,ff._fromUser(e)),Yl.get(e)}const nu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(nu,"1"),this.storage.removeItem(nu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oC(){const t=Le();return of(t)||Hs(t)}const aC=1e3,cC=10;class Kv extends zv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=oC()&&K0(),this.fallbackToPolling=Dv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);z0()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,cC):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},aC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Kv.type="LOCAL";const pf=Kv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv extends zv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Hv.type="SESSION";const Ti=Hv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uC(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new zu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),c=await uC(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}zu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const u=Fa("",20);i.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(l),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(){return window}function hC(t){He().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mf(){return typeof He().WorkerGlobalScope!="undefined"&&typeof He().importScripts=="function"}async function dC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function fC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function pC(){return mf()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qv="firebaseLocalStorageDb",mC=1,ru="firebaseLocalStorage",Yv="fbase_key";class Ua{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ku(t,e){return t.transaction([ru],e?"readwrite":"readonly").objectStore(ru)}function gC(){const t=indexedDB.deleteDatabase(Qv);return new Ua(t).toPromise()}function Vh(){const t=indexedDB.open(Qv,mC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ru,{keyPath:Yv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ru)?e(r):(r.close(),await gC(),e(await Vh()))})})}async function tg(t,e,n){const r=Ku(t,!0).put({[Yv]:e,value:n});return new Ua(r).toPromise()}async function _C(t,e){const n=Ku(t,!1).get(e),r=await new Ua(n).toPromise();return r===void 0?null:r.value}function ng(t,e){const n=Ku(t,!0).delete(e);return new Ua(n).toPromise()}const yC=800,vC=3;class Jv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Vh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>vC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return mf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zu._getInstance(pC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await dC(),!this.activeServiceWorker)return;this.sender=new lC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||fC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Vh();return await tg(e,nu,"1"),await ng(e,nu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>tg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>_C(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ng(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ku(i,!1).getAll();return new Ua(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),yC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Jv.type="LOCAL";const oa=Jv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IC(t,e){return qe(t,"POST","/v2/accounts/mfaSignIn:start",$e(t,e))}function wC(t,e){return qe(t,"POST","/v2/accounts/mfaSignIn:finalize",$e(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EC=500,TC=6e4,pc=1e12;class AC{constructor(e){this.auth=e,this.counter=pc,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new bC(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||pc;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||pc;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||pc;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class bC{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;C(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=RC(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},TC)},EC))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function RC(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jl=Nv("rcb"),SC=new Oa(3e4,6e4),PC="https://www.google.com/recaptcha/api.js?";class CC{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=He().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return C(kC(n),e,"argument-error"),this.shouldResolveImmediately(n)&&Km(He().grecaptcha)?Promise.resolve(He().grecaptcha):new Promise((r,i)=>{const s=He().setTimeout(()=>{i(ht(e,"network-request-failed"))},SC.get());He()[Jl]=()=>{He().clearTimeout(s),delete He()[Jl];const a=He().grecaptcha;if(!a||!Km(a)){i(ht(e,"internal-error"));return}const c=a.render;a.render=(u,l)=>{const h=c(u,l);return this.counter++,h},this.hostLanguage=n,r(a)};const o=`${PC}?${zs({onload:Jl,render:"explicit",hl:n})}`;af(o).catch(()=>{clearTimeout(s),i(ht(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=He().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function kC(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class DC{async load(e){return new AC(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xv="recaptcha",xC={theme:"light",type:"image"};class NC{constructor(e,n,r=Object.assign({},xC)){this.parameters=r,this.type=Xv,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Fe(e),this.isInvisible=this.parameters.size==="invisible",C(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;C(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new DC:new CC,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{!o||(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){C(!this.parameters.sitekey,this.auth,"argument-error"),C(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),C(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=He()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){C(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){C(rf()&&!mf(),this.auth,"internal-error"),await VC(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await k0(this.auth);C(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return C(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function VC(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Ii._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function OC(t,e,n){const r=Fe(t),i=await Hu(r,e,J(n));return new gf(i,s=>Wu(r,s))}async function LC(t,e,n){const r=J(t);await ju(!1,r,"phone");const i=await Hu(r.auth,e,J(n));return new gf(i,s=>$v(r,s))}async function MC(t,e,n){const r=J(t),i=await Hu(r.auth,e,J(n));return new gf(i,s=>qv(r,s))}async function Hu(t,e,n){var r;const i=await n.verify();try{C(typeof i=="string",t,"argument-error"),C(n.type===Xv,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return C(o.type==="enroll",t,"internal-error"),(await nC(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{C(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return C(a,t,"missing-multi-factor-info"),(await IC(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await vP(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function FC(t,e){await cf(J(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e){this.providerId=un.PROVIDER_ID,this.auth=Fe(e)}verifyPhoneNumber(e,n){return Hu(this.auth,e,J(n))}static credential(e,n){return Ii._fromVerification(e,n)}static credentialFromResult(e){const n=e;return un.credentialFromTaggedObject(n)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Ii._fromTokenResponse(n,r):null}}un.PROVIDER_ID="phone";un.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(t,e){return e?Ht(e):(C(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f extends Qs{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Yn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Yn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Yn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function UC(t){return Bv(t.auth,new _f(t),t.bypassAuthState)}function BC(t){const{auth:e,user:n}=t;return C(n,e,"internal-error"),Uv(n,new _f(t),t.bypassAuthState)}async function $C(t){const{auth:e,user:n}=t;return C(n,e,"internal-error"),cf(n,new _f(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return UC;case"linkViaPopup":case"linkViaRedirect":return $C;case"reauthViaPopup":case"reauthViaRedirect":return BC;default:pt(this.auth,"internal-error")}}resolve(e){hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qC=new Oa(2e3,1e4);async function jC(t,e,n){const r=Fe(t);Ks(t,e,ir);const i=Ui(r,n);return new Wn(r,"signInViaPopup",e,i).executeNotNull()}async function WC(t,e,n){const r=J(t);Ks(r.auth,e,ir);const i=Ui(r.auth,n);return new Wn(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function GC(t,e,n){const r=J(t);Ks(r.auth,e,ir);const i=Ui(r.auth,n);return new Wn(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Wn extends Zv{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Wn.currentPopupAction&&Wn.currentPopupAction.cancel(),Wn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return C(e,this.auth,"internal-error"),e}async onExecution(){hn(this.filter.length===1,"Popup operations only handle one event");const e=Fa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ht(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ht(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Wn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ht(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,qC.get())};e()}}Wn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zC="pendingRedirect",Mo=new Map;class KC extends Zv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Mo.get(this.auth._key());if(!e){try{const r=await HC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Mo.set(this.auth._key(),e)}return this.bypassAuthState||Mo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function HC(t,e){const n=tI(e),r=eI(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function yf(t,e){return eI(t)._set(tI(e),"true")}function QC(){Mo.clear()}function vf(t,e){Mo.set(t._key(),e)}function eI(t){return Ht(t._redirectPersistence)}function tI(t){return vi(zC,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YC(t,e,n){return JC(t,e,n)}async function JC(t,e,n){const r=Fe(t);Ks(t,e,ir),await r._initializationPromise;const i=Ui(r,n);return await yf(i,r),i._openRedirect(r,e,"signInViaRedirect")}function XC(t,e,n){return ZC(t,e,n)}async function ZC(t,e,n){const r=J(t);Ks(r.auth,e,ir),await r.auth._initializationPromise;const i=Ui(r.auth,n);await yf(i,r.auth);const s=await nI(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function ek(t,e,n){return tk(t,e,n)}async function tk(t,e,n){const r=J(t);Ks(r.auth,e,ir),await r.auth._initializationPromise;const i=Ui(r.auth,n);await ju(!1,r,e.providerId),await yf(i,r.auth);const s=await nI(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function nk(t,e){return await Fe(t)._initializationPromise,Qu(t,e,!1)}async function Qu(t,e,n=!1){const r=Fe(t),i=Ui(r,e),o=await new KC(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function nI(t){const e=Fa(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rk=10*60*1e3;class rI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ik(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!iI(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ht(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=rk&&this.cachedEventUids.clear(),this.cachedEventUids.has(rg(e))}saveEventToCache(e){this.cachedEventUids.add(rg(e)),this.lastProcessedEventTime=Date.now()}}function rg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function iI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ik(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return iI(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sI(t,e={}){return qe(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ok=/^https?/;async function ak(t){if(t.config.emulator)return;const{authorizedDomains:e}=await sI(t);for(const n of e)try{if(ck(n))return}catch{}pt(t,"unauthorized-domain")}function ck(t){const e=ta(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ok.test(n))return!1;if(sk.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uk=new Oa(3e4,6e4);function ig(){const t=He().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function lk(t){return new Promise((e,n)=>{var r,i,s;function o(){ig(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ig(),n(ht(t,"network-request-failed"))},timeout:uk.get()})}if(!((i=(r=He().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=He().gapi)===null||s===void 0)&&s.load)o();else{const a=Nv("iframefcb");return He()[a]=()=>{gapi.load?o():n(ht(t,"network-request-failed"))},af(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw kc=null,e})}let kc=null;function hk(t){return kc=kc||lk(t),kc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dk=new Oa(5e3,15e3),fk="__/auth/iframe",pk="emulator/auth/iframe",mk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},gk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _k(t){const e=t.config;C(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?sf(e,pk):`https://${t.config.authDomain}/${fk}`,r={apiKey:e.apiKey,appName:t.name,v:jr},i=gk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${zs(r).slice(1)}`}async function yk(t){const e=await hk(t),n=He().gapi;return C(n,t,"internal-error"),e.open({where:document.body,url:_k(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:mk,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ht(t,"network-request-failed"),a=He().setTimeout(()=>{s(o)},dk.get());function c(){He().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ik=500,wk=600,Ek="_blank",Tk="http://localhost";class sg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ak(t,e,n,r=Ik,i=wk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},vk),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Le().toLowerCase();n&&(a=Sv(u)?Ek:n),Rv(u)&&(e=e||Tk,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[f,v])=>`${d}${f}=${v},`,"");if(G0(u)&&a!=="_self")return bk(e||"",a),new sg(null);const h=window.open(e||"",a,l);C(h,t,"popup-blocked");try{h.focus()}catch{}return new sg(h)}function bk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rk="__/auth/handler",Sk="emulator/auth/handler",Pk=encodeURIComponent("fac");async function Oh(t,e,n,r,i,s){C(t.config.authDomain,t,"auth-domain-config-required"),C(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:jr,eventId:i};if(e instanceof ir){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",JR(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,h]of Object.entries(s||{}))o[l]=h}if(e instanceof Ys){const l=e.getScopes().filter(h=>h!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];const c=await t._getAppCheckToken(),u=c?`#${Pk}=${encodeURIComponent(c)}`:"";return`${Ck(t)}?${zs(a).slice(1)}${u}`}function Ck({config:t}){return t.emulator?sf(t,Sk):`https://${t.authDomain}/${Rk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xl="webStorageSupport";class kk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ti,this._completeRedirectFn=Qu,this._overrideRedirectResult=vf}async _openPopup(e,n,r,i){var s;hn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Oh(e,n,r,ta(),i);return Ak(e,o,Fa())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Oh(e,n,r,ta(),i);return hC(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(hn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await yk(e),r=new rI(e);return n.register("authEvent",i=>(C(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Xl,{type:Xl},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Xl];o!==void 0&&n(!!o),pt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ak(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Dv()||of()||Hs()}}const Dk=kk;class xk{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return Pn("unexpected MultiFactorSessionType")}}}class If extends xk{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new If(e)}_finalizeEnroll(e,n,r){return rC(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return wC(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class oI{constructor(){}static assertion(e){return If._fromCredential(e)}}oI.FACTOR_ID="phone";var og="@firebase/auth",ag="1.5.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){C(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Ok(t){Nr(new Fn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;C(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xv(t)},u=new X0(r,i,s,c);return iP(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Nr(new Fn("auth-internal",e=>{const n=Fe(e.getProvider("auth").getImmediate());return(r=>new Nk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Vn(og,ag,Vk(t)),Vn(og,ag,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lk=5*60;$R("authIdTokenMaxAge");Ok("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ai(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mk=2e3;async function Fk(t,e,n){var r;const{BuildInfo:i}=Ai();hn(e.sessionId,"AuthEvent did not contain a session ID");const s=await jk(e.sessionId),o={};return Hs()?o.ibi=i.packageName:La()?o.apn=i.packageName:pt(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,Oh(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function Uk(t){const{BuildInfo:e}=Ai(),n={};Hs()?n.iosBundleId=e.packageName:La()?n.androidPackageName=e.packageName:pt(t,"operation-not-supported-in-this-environment"),await sI(t,n)}function Bk(t){const{cordova:e}=Ai();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,W0()?"_blank":"_system","location=yes"),n(i)})})}async function $k(t,e,n){const{cordova:r}=Ai();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function c(){var h;s();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function u(){a||(a=window.setTimeout(()=>{o(ht(t,"redirect-cancelled-by-user"))},Mk))}function l(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(c),document.addEventListener("resume",u,!1),La()&&document.addEventListener("visibilitychange",l,!1),i=()=>{e.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}})}finally{i()}}function qk(t){var e,n,r,i,s,o,a,c,u,l;const h=Ai();C(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),C(typeof((n=h==null?void 0:h.BuildInfo)===null||n===void 0?void 0:n.packageName)!="undefined",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),C(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),C(typeof((c=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||c===void 0?void 0:c.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),C(typeof((l=(u=h==null?void 0:h.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||l===void 0?void 0:l.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function jk(t){const e=Wk(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function Wk(t){if(hn(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder!="undefined")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gk=20;class zk extends rI{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function Kk(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:Yk(),postBody:null,tenantId:t.tenantId,error:ht(t,"no-auth-event")}}function Hk(t,e){return Lh()._set(Mh(t),e)}async function cg(t){const e=await Lh()._get(Mh(t));return e&&await Lh()._remove(Mh(t)),e}function Qk(t,e){var n,r;const i=Xk(e);if(i.includes("/__/auth/callback")){const s=Dc(i),o=s.firebaseError?Jk(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],c=a?ht(a):null;return c?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:c,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function Yk(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<Gk;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function Lh(){return Ht(pf)}function Mh(t){return vi("authEvent",t.config.apiKey,t.name)}function Jk(t){try{return JSON.parse(t)}catch{return null}}function Xk(t){const e=Dc(t),n=e.link?decodeURIComponent(e.link):void 0,r=Dc(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Dc(i).link||i||r||n||t}function Dc(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return hs(n.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zk=500;class eD{constructor(){this._redirectPersistence=Ti,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Qu,this._overrideRedirectResult=vf}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new zk(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){pt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){qk(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),QC(),await this._originValidation(e);const o=Kk(e,r,i);await Hk(e,o);const a=await Fk(e,o,n),c=await Bk(a);return $k(e,s,c)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Uk(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Ai(),o=setTimeout(async()=>{await cg(e),n.onEvent(ug())},Zk),a=async l=>{clearTimeout(o);const h=await cg(e);let d=null;h&&(l==null?void 0:l.url)&&(d=Qk(h,l.url)),n.onEvent(d||ug())};typeof r!="undefined"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const c=i,u=`${s.packageName.toLowerCase()}://`;Ai().handleOpenURL=async l=>{if(l.toLowerCase().startsWith(u)&&a({url:l}),typeof c=="function")try{c(l)}catch(h){console.error(h)}}}}const tD=eD;function ug(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:ht("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nD(t,e){Fe(t)._logFramework(e)}var rD="@firebase/auth-compat",iD="0.5.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sD=1e3;function Fo(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function oD(){return Fo()==="http:"||Fo()==="https:"}function aI(t=Le()){return!!((Fo()==="file:"||Fo()==="ionic:"||Fo()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function aD(){return Jd()||Yd()}function cD(){return sv()&&(document==null?void 0:document.documentMode)===11}function uD(t=Le()){return/Edge\/\d+/.test(t)}function lD(t=Le()){return cD()||uD(t)}function cI(){try{const t=self.localStorage,e=Fa();if(t)return t.setItem(e,"1"),t.removeItem(e),lD()?Xo():!0}catch{return wf()&&Xo()}return!1}function wf(){return typeof global!="undefined"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Zl(){return(oD()||iv()||aI())&&!aD()&&cI()&&!wf()}function uI(){return aI()&&typeof document!="undefined"}async function hD(){return uI()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},sD);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function dD(){return typeof window!="undefined"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt={LOCAL:"local",NONE:"none",SESSION:"session"},po=C,lI="persistence";function fD(t,e){if(po(Object.values(Gt).includes(e),t,"invalid-persistence-type"),Jd()){po(e!==Gt.SESSION,t,"unsupported-persistence-type");return}if(Yd()){po(e===Gt.NONE,t,"unsupported-persistence-type");return}if(wf()){po(e===Gt.NONE||e===Gt.LOCAL&&Xo(),t,"unsupported-persistence-type");return}po(e===Gt.NONE||cI(),t,"unsupported-persistence-type")}async function Fh(t){await t._initializationPromise;const e=hI(),n=vi(lI,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function pD(t,e){const n=hI();if(!n)return[];const r=vi(lI,t,e);switch(n.getItem(r)){case Gt.NONE:return[Ps];case Gt.LOCAL:return[oa,Ti];case Gt.SESSION:return[Ti];default:return[]}}function hI(){var t;try{return((t=dD())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mD=C;class Er{constructor(){this.browserResolver=Ht(Dk),this.cordovaResolver=Ht(tD),this.underlyingResolver=null,this._redirectPersistence=Ti,this._completeRedirectFn=Qu,this._overrideRedirectResult=vf}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return uI()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return mD(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await hD();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dI(t){return t.unwrap()}function gD(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _D(t){return fI(t)}function yD(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new vD(t,tC(t,e))}else if(r){const i=fI(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function fI(t){const{_tokenResponse:e}=t instanceof Dt?t.customData:t;if(!e)return null;if(!(t instanceof Dt)&&"temporaryProof"in e&&"phoneNumber"in e)return un.credentialFromResult(t);const n=e.providerId;if(!n||n===fo.PASSWORD)return null;let r;switch(n){case fo.GOOGLE:r=Tn;break;case fo.FACEBOOK:r=En;break;case fo.GITHUB:r=An;break;case fo.TWITTER:r=bn;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:c}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?Cs._create(n,a):Un._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new Is(n).credential({idToken:i,accessToken:s,rawNonce:c})}return t instanceof Dt?r.credentialFromError(t):r.credentialFromResult(t)}function Lt(t,e){return e.catch(n=>{throw n instanceof Dt&&yD(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:_D(n),additionalUserInfo:eC(n),user:Gn.getOrCreate(i)}})}async function Uh(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>Lt(t,n.confirm(r))}}class vD{constructor(e,n){this.resolver=n,this.auth=gD(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Lt(dI(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e){this._delegate=e,this.multiFactor=sC(e)}static getOrCreate(e){return Gn.USER_MAP.has(e)||Gn.USER_MAP.set(e,new Gn(e)),Gn.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Lt(this.auth,$v(this._delegate,e))}async linkWithPhoneNumber(e,n){return Uh(this.auth,LC(this._delegate,e,n))}async linkWithPopup(e){return Lt(this.auth,GC(this._delegate,e,Er))}async linkWithRedirect(e){return await Fh(Fe(this.auth)),ek(this._delegate,e,Er)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Lt(this.auth,qv(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Uh(this.auth,MC(this._delegate,e,n))}reauthenticateWithPopup(e){return Lt(this.auth,WC(this._delegate,e,Er))}async reauthenticateWithRedirect(e){return await Fh(Fe(this.auth)),XC(this._delegate,e,Er)}sendEmailVerification(e){return jP(this._delegate,e)}async unlink(e){return await CP(this._delegate,e),this}updateEmail(e){return KP(this._delegate,e)}updatePassword(e){return HP(this._delegate,e)}updatePhoneNumber(e){return FC(this._delegate,e)}updateProfile(e){return zP(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return WP(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Gn.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo=C;class Bh{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;mo(r,"invalid-api-key",{appName:e.name}),mo(r,"invalid-api-key",{appName:e.name});const i=typeof window!="undefined"?Er:void 0;this._delegate=n.initialize({options:{persistence:ID(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(I0),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Gn.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){sP(this._delegate,e,n)}applyActionCode(e){return VP(this._delegate,e)}checkActionCode(e){return jv(this._delegate,e)}confirmPasswordReset(e,n){return NP(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return Lt(this._delegate,LP(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return qP(this._delegate,e)}isSignInWithEmailLink(e){return UP(this._delegate,e)}async getRedirectResult(){mo(Zl(),this._delegate,"operation-not-supported-in-this-environment");const e=await nk(this._delegate,Er);return e?Lt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){nD(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=lg(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=lg(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return FP(this._delegate,e,n)}sendPasswordResetEmail(e,n){return xP(this._delegate,e,n||void 0)}async setPersistence(e){fD(this._delegate,e);let n;switch(e){case Gt.SESSION:n=Ti;break;case Gt.LOCAL:n=await Ht(oa)._isAvailable()?oa:pf;break;case Gt.NONE:n=Ps;break;default:return pt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Lt(this._delegate,PP(this._delegate))}signInWithCredential(e){return Lt(this._delegate,Wu(this._delegate,e))}signInWithCustomToken(e){return Lt(this._delegate,DP(this._delegate,e))}signInWithEmailAndPassword(e,n){return Lt(this._delegate,MP(this._delegate,e,n))}signInWithEmailLink(e,n){return Lt(this._delegate,BP(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Uh(this._delegate,OC(this._delegate,e,n))}async signInWithPopup(e){return mo(Zl(),this._delegate,"operation-not-supported-in-this-environment"),Lt(this._delegate,jC(this._delegate,e,Er))}async signInWithRedirect(e){return mo(Zl(),this._delegate,"operation-not-supported-in-this-environment"),await Fh(this._delegate),YC(this._delegate,e,Er)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return OP(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Bh.Persistence=Gt;function lg(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&Gn.getOrCreate(o)),error:e,complete:n}}function ID(t,e){const n=pD(t,e);if(typeof self!="undefined"&&!n.includes(oa)&&n.push(oa),typeof window!="undefined")for(const r of[pf,Ti])n.includes(r)||n.push(r);return n.includes(Ps)||n.push(Ps),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(){this.providerId="phone",this._delegate=new un(dI(tn.auth()))}static credential(e,n){return un.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}Ef.PHONE_SIGN_IN_METHOD=un.PHONE_SIGN_IN_METHOD;Ef.PROVIDER_ID=un.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wD=C;class ED{constructor(e,n,r=tn.app()){var i;wD((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new NC(r.auth(),e,n),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TD="auth-compat";function AD(t){t.INTERNAL.registerComponent(new Fn(TD,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Bh(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Ji.EMAIL_SIGNIN,PASSWORD_RESET:Ji.PASSWORD_RESET,RECOVER_EMAIL:Ji.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Ji.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Ji.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Ji.VERIFY_EMAIL}},EmailAuthProvider:Wr,FacebookAuthProvider:En,GithubAuthProvider:An,GoogleAuthProvider:Tn,OAuthProvider:Is,SAMLAuthProvider:eu,PhoneAuthProvider:Ef,PhoneMultiFactorGenerator:oI,RecaptchaVerifier:ED,TwitterAuthProvider:bn,Auth:Bh,AuthCredential:Qs,Error:Dt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(rD,iD)}AD(tn);var bD=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},F,Tf=Tf||{},te=bD||self;function Yu(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ba(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function RD(t){return Object.prototype.hasOwnProperty.call(t,eh)&&t[eh]||(t[eh]=++SD)}var eh="closure_uid_"+(1e9*Math.random()>>>0),SD=0;function PD(t,e,n){return t.call.apply(t.bind,arguments)}function CD(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Et(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Et=PD:Et=CD,Et.apply(null,arguments)}function mc(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function st(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Gr(){this.s=this.s,this.o=this.o}var kD=0;Gr.prototype.s=!1;Gr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),kD!=0)&&RD(this)};Gr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const pI=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Af(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function hg(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Yu(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Tt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Tt.prototype.h=function(){this.defaultPrevented=!0};var DD=function(){if(!te.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};te.addEventListener("test",n,e),te.removeEventListener("test",n,e)}catch{}return t}();function aa(t){return/^[\s\xa0]*$/.test(t)}function Ju(){var t=te.navigator;return t&&(t=t.userAgent)?t:""}function Rn(t){return Ju().indexOf(t)!=-1}function bf(t){return bf[" "](t),t}bf[" "]=function(){};function xD(t,e){var n=Ax;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var ND=Rn("Opera"),ks=Rn("Trident")||Rn("MSIE"),mI=Rn("Edge"),$h=mI||ks,gI=Rn("Gecko")&&!(Ju().toLowerCase().indexOf("webkit")!=-1&&!Rn("Edge"))&&!(Rn("Trident")||Rn("MSIE"))&&!Rn("Edge"),VD=Ju().toLowerCase().indexOf("webkit")!=-1&&!Rn("Edge");function _I(){var t=te.document;return t?t.documentMode:void 0}var qh;e:{var th="",nh=function(){var t=Ju();if(gI)return/rv:([^\);]+)(\)|;)/.exec(t);if(mI)return/Edge\/([\d\.]+)/.exec(t);if(ks)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(VD)return/WebKit\/(\S+)/.exec(t);if(ND)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(nh&&(th=nh?nh[1]:""),ks){var rh=_I();if(rh!=null&&rh>parseFloat(th)){qh=String(rh);break e}}qh=th}var jh;if(te.document&&ks){var dg=_I();jh=dg||parseInt(qh,10)||void 0}else jh=void 0;var OD=jh;function ca(t,e){if(Tt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(gI){e:{try{bf(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:LD[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ca.$.h.call(this)}}st(ca,Tt);var LD={2:"touch",3:"pen",4:"mouse"};ca.prototype.h=function(){ca.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var $a="closure_listenable_"+(1e6*Math.random()|0),MD=0;function FD(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++MD,this.fa=this.ia=!1}function Xu(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Rf(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function UD(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function yI(t){const e={};for(const n in t)e[n]=t[n];return e}const fg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function vI(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<fg.length;s++)n=fg[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Zu(t){this.src=t,this.g={},this.h=0}Zu.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Gh(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new FD(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Wh(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=pI(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Xu(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Gh(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Sf="closure_lm_"+(1e6*Math.random()|0),ih={};function II(t,e,n,r,i){if(r&&r.once)return EI(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)II(t,e[s],n,r,i);return null}return n=kf(n),t&&t[$a]?t.O(e,n,Ba(r)?!!r.capture:!!r,i):wI(t,e,n,!1,r,i)}function wI(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Ba(i)?!!i.capture:!!i,a=Cf(t);if(a||(t[Sf]=a=new Zu(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=BD(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)DD||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(AI(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function BD(){function t(n){return e.call(t.src,t.listener,n)}const e=$D;return t}function EI(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)EI(t,e[s],n,r,i);return null}return n=kf(n),t&&t[$a]?t.P(e,n,Ba(r)?!!r.capture:!!r,i):wI(t,e,n,!0,r,i)}function TI(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)TI(t,e[s],n,r,i);else r=Ba(r)?!!r.capture:!!r,n=kf(n),t&&t[$a]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Gh(s,n,r,i),-1<n&&(Xu(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Cf(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Gh(e,n,r,i)),(n=-1<t?e[t]:null)&&Pf(n))}function Pf(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[$a])Wh(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(AI(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Cf(e))?(Wh(n,t),n.h==0&&(n.src=null,e[Sf]=null)):Xu(t)}}}function AI(t){return t in ih?ih[t]:ih[t]="on"+t}function $D(t,e){if(t.fa)t=!0;else{e=new ca(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Pf(t),t=n.call(r,e)}return t}function Cf(t){return t=t[Sf],t instanceof Zu?t:null}var sh="__closure_events_fn_"+(1e9*Math.random()>>>0);function kf(t){return typeof t=="function"?t:(t[sh]||(t[sh]=function(e){return t.handleEvent(e)}),t[sh])}function it(){Gr.call(this),this.i=new Zu(this),this.S=this,this.J=null}st(it,Gr);it.prototype[$a]=!0;it.prototype.removeEventListener=function(t,e,n,r){TI(this,t,e,n,r)};function dt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Tt(e,t);else if(e instanceof Tt)e.target=e.target||t;else{var i=e;e=new Tt(r,t),vI(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=gc(o,r,!0,e)&&i}if(o=e.g=t,i=gc(o,r,!0,e)&&i,i=gc(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=gc(o,r,!1,e)&&i}it.prototype.N=function(){if(it.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Xu(n[r]);delete t.g[e],t.h--}}this.J=null};it.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};it.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function gc(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Wh(t.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var Df=te.JSON.stringify;class qD{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function jD(){var t=xf;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class WD{constructor(){this.h=this.g=null}add(e,n){const r=bI.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var bI=new qD(()=>new GD,t=>t.reset());class GD{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function zD(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function KD(t){te.setTimeout(()=>{throw t},0)}let ua,la=!1,xf=new WD,RI=()=>{const t=te.Promise.resolve(void 0);ua=()=>{t.then(HD)}};var HD=()=>{for(var t;t=jD();){try{t.h.call(t.g)}catch(n){KD(n)}var e=bI;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}la=!1};function el(t,e){it.call(this),this.h=t||1,this.g=e||te,this.j=Et(this.qb,this),this.l=Date.now()}st(el,it);F=el.prototype;F.ga=!1;F.T=null;F.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),dt(this,"tick"),this.ga&&(Nf(this),this.start()))}};F.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Nf(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}F.N=function(){el.$.N.call(this),Nf(this),delete this.g};function Vf(t,e,n){if(typeof t=="function")n&&(t=Et(t,n));else if(t&&typeof t.handleEvent=="function")t=Et(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:te.setTimeout(t,e||0)}function SI(t){t.g=Vf(()=>{t.g=null,t.i&&(t.i=!1,SI(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class QD extends Gr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:SI(this)}N(){super.N(),this.g&&(te.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ha(t){Gr.call(this),this.h=t,this.g={}}st(ha,Gr);var pg=[];function PI(t,e,n,r){Array.isArray(n)||(n&&(pg[0]=n.toString()),n=pg);for(var i=0;i<n.length;i++){var s=II(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function CI(t){Rf(t.g,function(e,n){this.g.hasOwnProperty(n)&&Pf(e)},t),t.g={}}ha.prototype.N=function(){ha.$.N.call(this),CI(this)};ha.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function tl(){this.g=!0}tl.prototype.Ea=function(){this.g=!1};function YD(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function JD(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function ds(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+ZD(t,n)+(r?" "+r:"")})}function XD(t,e){t.info(function(){return"TIMEOUT: "+e})}tl.prototype.info=function(){};function ZD(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Df(n)}catch{return e}}var Bi={},mg=null;function nl(){return mg=mg||new it}Bi.Ta="serverreachability";function kI(t){Tt.call(this,Bi.Ta,t)}st(kI,Tt);function da(t){const e=nl();dt(e,new kI(e))}Bi.STAT_EVENT="statevent";function DI(t,e){Tt.call(this,Bi.STAT_EVENT,t),this.stat=e}st(DI,Tt);function Ct(t){const e=nl();dt(e,new DI(e,t))}Bi.Ua="timingevent";function xI(t,e){Tt.call(this,Bi.Ua,t),this.size=e}st(xI,Tt);function qa(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return te.setTimeout(function(){t()},e)}var rl={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},NI={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Of(){}Of.prototype.h=null;function gg(t){return t.h||(t.h=t.i())}function VI(){}var ja={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Lf(){Tt.call(this,"d")}st(Lf,Tt);function Mf(){Tt.call(this,"c")}st(Mf,Tt);var zh;function il(){}st(il,Of);il.prototype.g=function(){return new XMLHttpRequest};il.prototype.i=function(){return{}};zh=new il;function Wa(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new ha(this),this.P=ex,t=$h?125:void 0,this.V=new el(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new OI}function OI(){this.i=null,this.g="",this.h=!1}var ex=45e3,LI={},Kh={};F=Wa.prototype;F.setTimeout=function(t){this.P=t};function Hh(t,e,n){t.L=1,t.A=ol(er(e)),t.u=n,t.S=!0,MI(t,null)}function MI(t,e){t.G=Date.now(),Ga(t),t.B=er(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),GI(n.i,"t",r),t.o=0,n=t.l.J,t.h=new OI,t.g=dw(t.l,n?e:null,!t.u),0<t.O&&(t.M=new QD(Et(t.Pa,t,t.g),t.O)),PI(t.U,t.g,"readystatechange",t.nb),e=t.I?yI(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),da(),YD(t.j,t.v,t.B,t.m,t.W,t.u)}F.nb=function(t){t=t.target;const e=this.M;e&&Cn(t)==3?e.l():this.Pa(t)};F.Pa=function(t){try{if(t==this.g)e:{const l=Cn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||$h||this.g&&(this.h.h||this.g.ja()||Ig(this.g)))){this.J||l!=4||e==7||(e==8||0>=h?da(3):da(2)),sl(this);var n=this.g.da();this.ca=n;t:if(FI(this)){var r=Ig(this.g);t="";var i=r.length,s=Cn(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){di(this),Uo(this);var o="";break t}this.h.i=new te.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,JD(this.j,this.v,this.B,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!aa(a)){var u=a;break t}}u=null}if(n=u)ds(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Qh(this,n);else{this.i=!1,this.s=3,Ct(12),di(this),Uo(this);break e}}this.S?(UI(this,l,o),$h&&this.i&&l==3&&(PI(this.U,this.V,"tick",this.mb),this.V.start())):(ds(this.j,this.m,o,null),Qh(this,o)),l==4&&di(this),this.i&&!this.J&&(l==4?cw(this.l,this):(this.i=!1,Ga(this)))}else wx(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,Ct(12)):(this.s=0,Ct(13)),di(this),Uo(this)}}}catch{}finally{}};function FI(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function UI(t,e,n){let r=!0,i;for(;!t.J&&t.o<n.length;)if(i=tx(t,n),i==Kh){e==4&&(t.s=4,Ct(14),r=!1),ds(t.j,t.m,null,"[Incomplete Response]");break}else if(i==LI){t.s=4,Ct(15),ds(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else ds(t.j,t.m,i,null),Qh(t,i);FI(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,Ct(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),jf(e),e.M=!0,Ct(11))):(ds(t.j,t.m,n,"[Invalid Chunked Response]"),di(t),Uo(t))}F.mb=function(){if(this.g){var t=Cn(this.g),e=this.g.ja();this.o<e.length&&(sl(this),UI(this,t,e),this.i&&t!=4&&Ga(this))}};function tx(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?Kh:(n=Number(e.substring(n,r)),isNaN(n)?LI:(r+=1,r+n>e.length?Kh:(e=e.slice(r,r+n),t.o=r+n,e)))}F.cancel=function(){this.J=!0,di(this)};function Ga(t){t.Y=Date.now()+t.P,BI(t,t.P)}function BI(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=qa(Et(t.lb,t),e)}function sl(t){t.C&&(te.clearTimeout(t.C),t.C=null)}F.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(XD(this.j,this.B),this.L!=2&&(da(),Ct(17)),di(this),this.s=2,Uo(this)):BI(this,this.Y-t)};function Uo(t){t.l.H==0||t.J||cw(t.l,t)}function di(t){sl(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Nf(t.V),CI(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Qh(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Yh(n.i,t))){if(!t.K&&Yh(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)ou(n),ll(n);else break e;qf(n),Ct(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=qa(Et(n.ib,n),6e3));if(1>=HI(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else fi(n,11)}else if((t.K||n.g==t)&&ou(n),!aa(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const l=u[3];l!=null&&(n.ra=l,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const v=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.i;s.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Ff(s,s.h),s.h=null))}if(r.F){const I=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;I&&(r.Da=I,Pe(r.I,r.F,I))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=hw(r,r.J?r.pa:null,r.Y),o.K){QI(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.C&&(sl(a),Ga(a)),r.g=o}else ow(r);0<n.j.length&&hl(n)}else u[0]!="stop"&&u[0]!="close"||fi(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?fi(n,7):$f(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}da(4)}catch{}}function nx(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map!="undefined"&&t instanceof Map||typeof Set!="undefined"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Yu(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function rx(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map!="undefined"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set!="undefined"&&t instanceof Set)){if(Yu(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function $I(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Yu(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=rx(t),r=nx(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var qI=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ix(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function wi(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof wi){this.h=t.h,iu(this,t.j),this.s=t.s,this.g=t.g,su(this,t.m),this.l=t.l;var e=t.i,n=new fa;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),_g(this,n),this.o=t.o}else t&&(e=String(t).match(qI))?(this.h=!1,iu(this,e[1]||"",!0),this.s=So(e[2]||""),this.g=So(e[3]||"",!0),su(this,e[4]),this.l=So(e[5]||"",!0),_g(this,e[6]||"",!0),this.o=So(e[7]||"")):(this.h=!1,this.i=new fa(null,this.h))}wi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Po(e,yg,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Po(e,yg,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Po(n,n.charAt(0)=="/"?ax:ox,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Po(n,ux)),t.join("")};function er(t){return new wi(t)}function iu(t,e,n){t.j=n?So(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function su(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function _g(t,e,n){e instanceof fa?(t.i=e,lx(t.i,t.h)):(n||(e=Po(e,cx)),t.i=new fa(e,t.h))}function Pe(t,e,n){t.i.set(e,n)}function ol(t){return Pe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function So(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Po(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,sx),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function sx(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var yg=/[#\/\?@]/g,ox=/[#\?:]/g,ax=/[#\?]/g,cx=/[#\?@]/g,ux=/#/g;function fa(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function zr(t){t.g||(t.g=new Map,t.h=0,t.i&&ix(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}F=fa.prototype;F.add=function(t,e){zr(this),this.i=null,t=Js(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function jI(t,e){zr(t),e=Js(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function WI(t,e){return zr(t),e=Js(t,e),t.g.has(e)}F.forEach=function(t,e){zr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};F.ta=function(){zr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};F.Z=function(t){zr(this);let e=[];if(typeof t=="string")WI(this,t)&&(e=e.concat(this.g.get(Js(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};F.set=function(t,e){return zr(this),this.i=null,t=Js(this,t),WI(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};F.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function GI(t,e,n){jI(t,e),0<n.length&&(t.i=null,t.g.set(Js(t,e),Af(n)),t.h+=n.length)}F.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Js(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function lx(t,e){e&&!t.j&&(zr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(jI(this,r),GI(this,i,n))},t)),t.j=e}var hx=class{constructor(t,e){this.g=t,this.map=e}};function zI(t){this.l=t||dx,te.PerformanceNavigationTiming?(t=te.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(te.g&&te.g.Ka&&te.g.Ka()&&te.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var dx=10;function KI(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function HI(t){return t.h?1:t.g?t.g.size:0}function Yh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Ff(t,e){t.g?t.g.add(e):t.h=e}function QI(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}zI.prototype.cancel=function(){if(this.i=YI(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function YI(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Af(t.i)}var fx=class{stringify(t){return te.JSON.stringify(t,void 0)}parse(t){return te.JSON.parse(t,void 0)}};function px(){this.g=new fx}function mx(t,e,n){const r=n||"";try{$I(t,function(i,s){let o=i;Ba(i)&&(o=Df(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function gx(t,e){const n=new tl;if(te.Image){const r=new Image;r.onload=mc(_c,n,r,"TestLoadImage: loaded",!0,e),r.onerror=mc(_c,n,r,"TestLoadImage: error",!1,e),r.onabort=mc(_c,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=mc(_c,n,r,"TestLoadImage: timeout",!1,e),te.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function _c(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function al(t){this.l=t.ec||null,this.j=t.ob||!1}st(al,Of);al.prototype.g=function(){return new cl(this.l,this.j)};al.prototype.i=function(t){return function(){return t}}({});function cl(t,e){it.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Uf,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}st(cl,it);var Uf=0;F=cl.prototype;F.open=function(t,e){if(this.readyState!=Uf)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,pa(this)};F.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||te).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};F.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,za(this)),this.readyState=Uf};F.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,pa(this)),this.g&&(this.readyState=3,pa(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof te.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;JI(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function JI(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}F.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?za(this):pa(this),this.readyState==3&&JI(this)}};F.Za=function(t){this.g&&(this.response=this.responseText=t,za(this))};F.Ya=function(t){this.g&&(this.response=t,za(this))};F.ka=function(){this.g&&za(this)};function za(t){t.readyState=4,t.l=null,t.j=null,t.A=null,pa(t)}F.setRequestHeader=function(t,e){this.v.append(t,e)};F.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};F.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function pa(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(cl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var _x=te.JSON.parse;function Ue(t){it.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=XI,this.L=this.M=!1}st(Ue,it);var XI="",yx=/^https?$/i,vx=["POST","PUT"];F=Ue.prototype;F.Oa=function(t){this.M=t};F.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():zh.g(),this.C=this.u?gg(this.u):gg(zh),this.g.onreadystatechange=Et(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){vg(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=te.FormData&&t instanceof te.FormData,!(0<=pI(vx,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{tw(this),0<this.B&&((this.L=Ix(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Et(this.ua,this)):this.A=Vf(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){vg(this,s)}};function Ix(t){return ks&&typeof t.timeout=="number"&&t.ontimeout!==void 0}F.ua=function(){typeof Tf!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,dt(this,"timeout"),this.abort(8))};function vg(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,ZI(t),ul(t)}function ZI(t){t.F||(t.F=!0,dt(t,"complete"),dt(t,"error"))}F.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,dt(this,"complete"),dt(this,"abort"),ul(this))};F.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ul(this,!0)),Ue.$.N.call(this)};F.La=function(){this.s||(this.G||this.v||this.l?ew(this):this.kb())};F.kb=function(){ew(this)};function ew(t){if(t.h&&typeof Tf!="undefined"&&(!t.C[1]||Cn(t)!=4||t.da()!=2)){if(t.v&&Cn(t)==4)Vf(t.La,0,t);else if(dt(t,"readystatechange"),Cn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(qI)[1]||null;!i&&te.self&&te.self.location&&(i=te.self.location.protocol.slice(0,-1)),r=!yx.test(i?i.toLowerCase():"")}n=r}if(n)dt(t,"complete"),dt(t,"success");else{t.m=6;try{var s=2<Cn(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",ZI(t)}}finally{ul(t)}}}}function ul(t,e){if(t.g){tw(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||dt(t,"ready");try{n.onreadystatechange=r}catch{}}}function tw(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(te.clearTimeout(t.A),t.A=null)}F.isActive=function(){return!!this.g};function Cn(t){return t.g?t.g.readyState:0}F.da=function(){try{return 2<Cn(this)?this.g.status:-1}catch{return-1}};F.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};F.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),_x(e)}};function Ig(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case XI:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function wx(t){const e={};t=(t.g&&2<=Cn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(aa(t[r]))continue;var n=zD(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}UD(e,function(r){return r.join(", ")})}F.Ia=function(){return this.m};F.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function nw(t){let e="";return Rf(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Bf(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=nw(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Pe(t,e,n))}function go(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function rw(t){this.Ga=0,this.j=[],this.l=new tl,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=go("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=go("baseRetryDelayMs",5e3,t),this.hb=go("retryDelaySeedMs",1e4,t),this.eb=go("forwardChannelMaxRetries",2,t),this.xa=go("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new zI(t&&t.concurrentRequestLimit),this.Ja=new px,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}F=rw.prototype;F.ra=8;F.H=1;function $f(t){if(iw(t),t.H==3){var e=t.W++,n=er(t.I);if(Pe(n,"SID",t.K),Pe(n,"RID",e),Pe(n,"TYPE","terminate"),Ka(t,n),e=new Wa(t,t.l,e),e.L=2,e.A=ol(er(n)),n=!1,te.navigator&&te.navigator.sendBeacon)try{n=te.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&te.Image&&(new Image().src=e.A,n=!0),n||(e.g=dw(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Ga(e)}lw(t)}function ll(t){t.g&&(jf(t),t.g.cancel(),t.g=null)}function iw(t){ll(t),t.u&&(te.clearTimeout(t.u),t.u=null),ou(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&te.clearTimeout(t.m),t.m=null)}function hl(t){if(!KI(t.i)&&!t.m){t.m=!0;var e=t.Na;ua||RI(),la||(ua(),la=!0),xf.add(e,t),t.C=0}}function Ex(t,e){return HI(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=qa(Et(t.Na,t,e),uw(t,t.C)),t.C++,!0)}F.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Wa(this,this.l,t);let s=this.s;if(this.U&&(s?(s=yI(s),vI(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=sw(this,i,e),n=er(this.I),Pe(n,"RID",t),Pe(n,"CVER",22),this.F&&Pe(n,"X-HTTP-Session-Id",this.F),Ka(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(nw(s)))+"&"+e:this.o&&Bf(n,this.o,s)),Ff(this.i,i),this.bb&&Pe(n,"TYPE","init"),this.P?(Pe(n,"$req",e),Pe(n,"SID","null"),i.aa=!0,Hh(i,n,null)):Hh(i,n,e),this.H=2}}else this.H==3&&(t?wg(this,t):this.j.length==0||KI(this.i)||wg(this))};function wg(t,e){var n;e?n=e.m:n=t.W++;const r=er(t.I);Pe(r,"SID",t.K),Pe(r,"RID",n),Pe(r,"AID",t.V),Ka(t,r),t.o&&t.s&&Bf(r,t.o,t.s),n=new Wa(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=sw(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Ff(t.i,n),Hh(n,r,e)}function Ka(t,e){t.na&&Rf(t.na,function(n,r){Pe(e,r,n)}),t.h&&$I({},function(n,r){Pe(e,r,n)})}function sw(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Et(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<n;c++){let u=i[c].g;const l=i[c].map;if(u-=s,0>u)s=Math.max(0,i[c].g-100),a=!1;else try{mx(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function ow(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;ua||RI(),la||(ua(),la=!0),xf.add(e,t),t.A=0}}function qf(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=qa(Et(t.Ma,t),uw(t,t.A)),t.A++,!0)}F.Ma=function(){if(this.u=null,aw(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=qa(Et(this.jb,this),t)}};F.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Ct(10),ll(this),aw(this))};function jf(t){t.B!=null&&(te.clearTimeout(t.B),t.B=null)}function aw(t){t.g=new Wa(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=er(t.wa);Pe(e,"RID","rpc"),Pe(e,"SID",t.K),Pe(e,"AID",t.V),Pe(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Pe(e,"TO",t.qa),Pe(e,"TYPE","xmlhttp"),Ka(t,e),t.o&&t.s&&Bf(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=ol(er(e)),n.u=null,n.S=!0,MI(n,t)}F.ib=function(){this.v!=null&&(this.v=null,ll(this),qf(this),Ct(19))};function ou(t){t.v!=null&&(te.clearTimeout(t.v),t.v=null)}function cw(t,e){var n=null;if(t.g==e){ou(t),jf(t),t.g=null;var r=2}else if(Yh(t.i,e))n=e.F,QI(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var i=t.C;r=nl(),dt(r,new xI(r,n)),hl(t)}else ow(t);else if(i=e.s,i==3||i==0&&0<e.ca||!(r==1&&Ex(t,e)||r==2&&qf(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:fi(t,5);break;case 4:fi(t,10);break;case 3:fi(t,6);break;default:fi(t,2)}}}function uw(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function fi(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Et(t.pb,t);n||(n=new wi("//www.google.com/images/cleardot.gif"),te.location&&te.location.protocol=="http"||iu(n,"https"),ol(n)),gx(n.toString(),r)}else Ct(2);t.H=0,t.h&&t.h.za(e),lw(t),iw(t)}F.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Ct(2)):(this.l.info("Failed to ping google.com"),Ct(1))};function lw(t){if(t.H=0,t.ma=[],t.h){const e=YI(t.i);(e.length!=0||t.j.length!=0)&&(hg(t.ma,e),hg(t.ma,t.j),t.i.i.length=0,Af(t.j),t.j.length=0),t.h.ya()}}function hw(t,e,n){var r=n instanceof wi?er(n):new wi(n);if(r.g!="")e&&(r.g=e+"."+r.g),su(r,r.m);else{var i=te.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new wi(null);r&&iu(s,r),e&&(s.g=e),i&&su(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&Pe(r,n,e),Pe(r,"VER",t.ra),Ka(t,r),r}function dw(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new Ue(new al({ob:n})):new Ue(t.va),e.Oa(t.J),e}F.isActive=function(){return!!this.h&&this.h.isActive(this)};function fw(){}F=fw.prototype;F.Ba=function(){};F.Aa=function(){};F.za=function(){};F.ya=function(){};F.isActive=function(){return!0};F.Va=function(){};function au(){if(ks&&!(10<=Number(OD)))throw Error("Environmental error: no available transport.")}au.prototype.g=function(t,e){return new Qt(t,e)};function Qt(t,e){it.call(this),this.g=new rw(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!aa(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!aa(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Xs(this)}st(Qt,it);Qt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Ct(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=hw(t,null,t.Y),hl(t)};Qt.prototype.close=function(){$f(this.g)};Qt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Df(t),t=n);e.j.push(new hx(e.fb++,t)),e.H==3&&hl(e)};Qt.prototype.N=function(){this.g.h=null,delete this.j,$f(this.g),delete this.g,Qt.$.N.call(this)};function pw(t){Lf.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}st(pw,Lf);function mw(){Mf.call(this),this.status=1}st(mw,Mf);function Xs(t){this.g=t}st(Xs,fw);Xs.prototype.Ba=function(){dt(this.g,"a")};Xs.prototype.Aa=function(t){dt(this.g,new pw(t))};Xs.prototype.za=function(t){dt(this.g,new mw)};Xs.prototype.ya=function(){dt(this.g,"b")};function Tx(){this.blockSize=-1}function dn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}st(dn,Tx);dn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function oh(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}dn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)oh(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){oh(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){oh(this,r),i=0;break}}this.h=i,this.i+=e};dn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function we(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var Ax={};function Wf(t){return-128<=t&&128>t?xD(t,function(e){return new we([e|0],0>e?-1:0)}):new we([t|0],0>t?-1:0)}function kn(t){if(isNaN(t)||!isFinite(t))return Es;if(0>t)return ut(kn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Jh;return new we(e,0)}function gw(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return ut(gw(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=kn(Math.pow(e,8)),r=Es,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=kn(Math.pow(e,s)),r=r.R(s).add(kn(o))):(r=r.R(n),r=r.add(kn(o)))}return r}var Jh=4294967296,Es=Wf(0),Xh=Wf(1),Eg=Wf(16777216);F=we.prototype;F.ea=function(){if(Xt(this))return-ut(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Jh+r)*e,e*=Jh}return t};F.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(zn(this))return"0";if(Xt(this))return"-"+ut(this).toString(t);for(var e=kn(Math.pow(t,6)),n=this,r="";;){var i=uu(n,e).g;n=cu(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,zn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};F.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function zn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Xt(t){return t.h==-1}F.X=function(t){return t=cu(this,t),Xt(t)?-1:zn(t)?0:1};function ut(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new we(n,~t.h).add(Xh)}F.abs=function(){return Xt(this)?ut(this):this};F.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new we(n,n[n.length-1]&-2147483648?-1:0)};function cu(t,e){return t.add(ut(e))}F.R=function(t){if(zn(this)||zn(t))return Es;if(Xt(this))return Xt(t)?ut(this).R(ut(t)):ut(ut(this).R(t));if(Xt(t))return ut(this.R(ut(t)));if(0>this.X(Eg)&&0>t.X(Eg))return kn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,c=t.D(i)&65535;n[2*r+2*i]+=o*c,yc(n,2*r+2*i),n[2*r+2*i+1]+=s*c,yc(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,yc(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,yc(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new we(n,0)};function yc(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function _o(t,e){this.g=t,this.h=e}function uu(t,e){if(zn(e))throw Error("division by zero");if(zn(t))return new _o(Es,Es);if(Xt(t))return e=uu(ut(t),e),new _o(ut(e.g),ut(e.h));if(Xt(e))return e=uu(t,ut(e)),new _o(ut(e.g),e.h);if(30<t.g.length){if(Xt(t)||Xt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Xh,r=e;0>=r.X(t);)n=Tg(n),r=Tg(r);var i=Xi(n,1),s=Xi(r,1);for(r=Xi(r,2),n=Xi(n,2);!zn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Xi(r,1),n=Xi(n,1)}return e=cu(t,i.R(e)),new _o(i,e)}for(i=Es;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=kn(n),o=s.R(e);Xt(o)||0<o.X(t);)n-=r,s=kn(n),o=s.R(e);zn(s)&&(s=Xh),i=i.add(s),t=cu(t,o)}return new _o(i,t)}F.gb=function(t){return uu(this,t).h};F.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new we(n,this.h&t.h)};F.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new we(n,this.h|t.h)};F.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new we(n,this.h^t.h)};function Tg(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new we(n,t.h)}function Xi(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new we(i,t.h)}au.prototype.createWebChannel=au.prototype.g;Qt.prototype.send=Qt.prototype.u;Qt.prototype.open=Qt.prototype.m;Qt.prototype.close=Qt.prototype.close;rl.NO_ERROR=0;rl.TIMEOUT=8;rl.HTTP_ERROR=6;NI.COMPLETE="complete";VI.EventType=ja;ja.OPEN="a";ja.CLOSE="b";ja.ERROR="c";ja.MESSAGE="d";it.prototype.listen=it.prototype.O;Ue.prototype.listenOnce=Ue.prototype.P;Ue.prototype.getLastError=Ue.prototype.Sa;Ue.prototype.getLastErrorCode=Ue.prototype.Ia;Ue.prototype.getStatus=Ue.prototype.da;Ue.prototype.getResponseJson=Ue.prototype.Wa;Ue.prototype.getResponseText=Ue.prototype.ja;Ue.prototype.send=Ue.prototype.ha;Ue.prototype.setWithCredentials=Ue.prototype.Oa;dn.prototype.digest=dn.prototype.l;dn.prototype.reset=dn.prototype.reset;dn.prototype.update=dn.prototype.j;we.prototype.add=we.prototype.add;we.prototype.multiply=we.prototype.R;we.prototype.modulo=we.prototype.gb;we.prototype.compare=we.prototype.X;we.prototype.toNumber=we.prototype.ea;we.prototype.toString=we.prototype.toString;we.prototype.getBits=we.prototype.D;we.fromNumber=kn;we.fromString=gw;var bx=function(){return new au},Rx=function(){return nl()},ah=rl,Sx=NI,Px=Bi,Ag={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},vc=VI,Cx=Ue,kx=dn,Ts=we;const bg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}tt.UNAUTHENTICATED=new tt(null),tt.GOOGLE_CREDENTIALS=new tt("google-credentials-uid"),tt.FIRST_PARTY=new tt("first-party-uid"),tt.MOCK_USER=new tt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zs="10.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr=new Uu("@firebase/firestore");function ss(){return Vr.logLevel}function Dx(t){Vr.setLogLevel(t)}function R(t,...e){if(Vr.logLevel<=ce.DEBUG){const n=e.map(Gf);Vr.debug(`Firestore (${Zs}): ${t}`,...n)}}function We(t,...e){if(Vr.logLevel<=ce.ERROR){const n=e.map(Gf);Vr.error(`Firestore (${Zs}): ${t}`,...n)}}function fn(t,...e){if(Vr.logLevel<=ce.WARN){const n=e.map(Gf);Vr.warn(`Firestore (${Zs}): ${t}`,...n)}}function Gf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(t="Unexpected state"){const e=`FIRESTORE (${Zs}) INTERNAL ASSERTION FAILED: `+t;throw We(e),new Error(e)}function G(t,e){t||q()}function xx(t,e){t||q()}function M(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class b extends Dt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Nx{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(tt.UNAUTHENTICATED))}shutdown(){}}class Vx{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Ox{constructor(e){this.t=e,this.currentUser=tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new rt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new rt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{R("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(R("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new rt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(R("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(G(typeof r.accessToken=="string"),new _w(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return G(e===null||typeof e=="string"),new tt(e)}}class Lx{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=tt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Mx{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Lx(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Fx{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ux{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&R("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,R("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{R("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):R("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(G(typeof n.token=="string"),this.R=n.token,new Fx(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bx(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Bx(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function re(t,e){return t<e?-1:t>e?1:0}function Ds(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function vw(t){return t+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new b(y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new b(y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new b(y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new b(y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Oe.fromMillis(Date.now())}static fromDate(e){return Oe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Oe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?re(this.nanoseconds,e.nanoseconds):re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.timestamp=e}static fromTimestamp(e){return new K(e)}static min(){return new K(new Oe(0,0))}static max(){return new K(new Oe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e,n,r){n===void 0?n=0:n>e.length&&q(),r===void 0?r=e.length-n:r>e.length-n&&q(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ma.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ma?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class fe extends ma{construct(e,n,r){return new fe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new b(y.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new fe(n)}static emptyPath(){return new fe([])}}const $x=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ne extends ma{construct(e,n,r){return new Ne(e,n,r)}static isValidIdentifier(e){return $x.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ne.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ne(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new b(y.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new b(y.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new b(y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new b(y.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ne(n)}static emptyPath(){return new Ne([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.path=e}static fromPath(e){return new O(fe.fromString(e))}static fromName(e){return new O(fe.fromString(e).popFirst(5))}static empty(){return new O(fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new O(new fe(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function Zh(t){return t.fields.find(e=>e.kind===2)}function ni(t){return t.fields.filter(e=>e.kind!==2)}lu.UNKNOWN_ID=-1;class xc{constructor(e,n){this.fieldPath=e,this.kind=n}}class ga{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new ga(0,Yt.min())}}function Iw(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=K.fromTimestamp(r===1e9?new Oe(n+1,0):new Oe(n,r));return new Yt(i,O.empty(),e)}function ww(t){return new Yt(t.readTime,t.key,-1)}class Yt{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Yt(K.min(),O.empty(),-1)}static max(){return new Yt(K.max(),O.empty(),-1)}}function zf(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=O.comparator(t.documentKey,e.documentKey),n!==0?n:re(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ew="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Tw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kr(t){if(t.code!==y.FAILED_PRECONDITION||t.message!==Ew)throw t;R("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new g((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof g?n:g.resolve(n)}catch(n){return g.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):g.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):g.reject(n)}static resolve(e){return new g((n,r)=>{n(e)})}static reject(e){return new g((n,r)=>{r(e)})}static waitFor(e){return new g((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(e){let n=g.resolve(!1);for(const r of e)n=n.next(i=>i?g.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new g((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const u=c;n(e[u]).next(l=>{o[u]=l,++a,a===s&&r(o)},l=>i(l))}})}static doWhile(e,n){return new g((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new rt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new Bo(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=Kf(r.target.error);this.V.reject(new Bo(e,i))}}static open(e,n,r,i){try{return new dl(n,e.transaction(i,r))}catch(s){throw new Bo(n,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(R("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new jx(n)}}class an{constructor(e,n,r){this.name=e,this.version=n,this.p=r,an.S(Le())===12.2&&We("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return R("SimpleDb","Removing database:",e),si(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Xo())return!1;if(an.C())return!0;const e=Le(),n=an.S(e),r=0<n&&n<10,i=an.v(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process!="undefined"&&((e=process.env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(R("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new Bo(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new b(y.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new b(y.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Bo(e,o))},i.onupgradeneeded=s=>{R("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.N(o,i.transaction,s.oldVersion,this.version).next(()=>{R("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=dl.open(this.db,e,s?"readonly":"readwrite",r),c=i(a).next(u=>(a.g(),u)).catch(u=>(a.abort(u),g.reject(u))).toPromise();return c.catch(()=>{}),await a.m,c}catch(a){const c=a,u=c.name!=="FirebaseError"&&o<3;if(R("SimpleDb","Transaction failed with error:",c.message,"Retrying:",u),this.close(),!u)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class qx{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return si(this.k.delete())}}class Bo extends b{constructor(e,n){super(y.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Hr(t){return t.name==="IndexedDbTransactionError"}class jx{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(R("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(R("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),si(r)}add(e){return R("SimpleDb","ADD",this.store.name,e,e),si(this.store.add(e))}get(e){return si(this.store.get(e)).next(n=>(n===void 0&&(n=null),R("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return R("SimpleDb","DELETE",this.store.name,e),si(this.store.delete(e))}count(){return R("SimpleDb","COUNT",this.store.name),si(this.store.count())}W(e,n){const r=this.options(e,n);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.G(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new g((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}j(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new g((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}H(e,n){R("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.J=!1;const i=this.cursor(r);return this.G(i,(s,o,a)=>a.delete())}Y(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.G(i,n)}Z(e){const n=this.cursor({});return new g((r,i)=>{n.onerror=s=>{const o=Kf(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(e,n){const r=[];return new g((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const c=new qx(a),u=n(a.primaryKey,a.value,c);if(u instanceof g){const l=u.catch(h=>(c.done(),g.reject(h)));r.push(l)}c.isDone?i():c.$===null?a.continue():a.continue(c.$)}}).next(()=>g.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.J?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function si(t){return new g((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=Kf(r.target.error);n(i)}})}let Rg=!1;function Kf(t){const e=an.S(Le());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new b("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Rg||(Rg=!0,setTimeout(()=>{throw r},0)),r}}return t}class Wx{constructor(e,n){this.asyncQueue=e,this.X=n,this.task=null}start(){this.ee(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}ee(e){R("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{R("IndexBackiller",`Documents written: ${await this.X.te()}`)}catch(n){Hr(n)?R("IndexBackiller","Ignoring IndexedDB error during index backfill: ",n):await Kr(n)}await this.ee(6e4)})}}class Gx{constructor(e,n){this.localStore=e,this.persistence=n}async te(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.ne(n,e))}ne(e,n){const r=new Set;let i=n,s=!0;return g.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return R("IndexBackiller",`Processing collection: ${o}`),this.re(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}re(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.ie(i,s)).next(a=>(R("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}ie(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=ww(s);zf(o,r)>0&&(r=o)}),new Yt(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}Ft._e=-1;function Ha(t){return t==null}function _a(t){return t===0&&1/t==-1/0}function Aw(t){return typeof t=="number"&&Number.isInteger(t)&&!_a(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Sg(e)),e=zx(t.get(n),e);return Sg(e)}function zx(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function Sg(t){return t+""}function Dn(t){const e=t.length;if(G(e>=2),e===2)return G(t.charAt(0)===""&&t.charAt(1)===""),fe.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&q(),t.charAt(o+1)){case"":const a=t.substring(s,o);let c;i.length===0?c=a:(i+=a,c=i,i=""),r.push(c);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:q()}s=o+2}return new fe(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nc(t,e){return[t,xt(e)]}function bw(t,e,n){return[t,xt(e),n]}const Kx={},Hx=["prefixPath","collectionGroup","readTime","documentId"],Qx=["prefixPath","collectionGroup","documentId"],Yx=["collectionGroup","readTime","prefixPath","documentId"],Jx=["canonicalId","targetId"],Xx=["targetId","path"],Zx=["path","targetId"],eN=["collectionId","parent"],tN=["indexId","uid"],nN=["uid","sequenceNumber"],rN=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],iN=["indexId","uid","orderedDocumentKey"],sN=["userId","collectionPath","documentId"],oN=["userId","collectionPath","largestBatchId"],aN=["userId","collectionGroup","largestBatchId"],Rw=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],cN=[...Rw,"documentOverlays"],Sw=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Pw=Sw,uN=[...Pw,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed extends Tw{constructor(e,n){super(),this.ae=e,this.currentSequenceNumber=n}}function ot(t,e){const n=M(t);return an.M(n.ae,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function $i(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Cw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,n){this.comparator=e,this.root=n||ct.EMPTY}insert(e,n){return new Re(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ct.BLACK,null,null))}remove(e){return new Re(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ct.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ic(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ic(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ic(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ic(this.root,e,this.comparator,!0)}}class Ic{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ct{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:ct.RED,this.left=i!=null?i:ct.EMPTY,this.right=s!=null?s:ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new ct(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ct.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ct.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw q();const e=this.left.check();if(e!==this.right.check())throw q();return e+(this.isRed()?0:1)}}ct.EMPTY=null,ct.RED=!0,ct.BLACK=!1;ct.EMPTY=new class{constructor(){this.size=0}get key(){throw q()}get value(){throw q()}get color(){throw q()}get left(){throw q()}get right(){throw q()}copy(e,n,r,i,s){return this}insert(e,n,r){return new ct(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e){this.comparator=e,this.data=new Re(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new kg(this.data.getIterator())}getIteratorFrom(e){return new kg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ae)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ae(this.comparator);return n.data=e,n}}class kg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Zi(t){return t.hasNext()?t.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.fields=e,e.sort(Ne.comparator)}static empty(){return new Ut([])}unionWith(e){let n=new Ae(Ne.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ut(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ds(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lN(){return typeof atob!="undefined"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException!="undefined"&&s instanceof DOMException?new kw("Invalid base64 string: "+s):s}}(e);return new Je(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Je(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Je.EMPTY_BYTE_STRING=new Je("");const hN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Or(t){if(G(!!t),typeof t=="string"){let e=0;const n=hN.exec(t);if(G(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Me(t.seconds),nanos:Me(t.nanos)}}function Me(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Lr(t){return typeof t=="string"?Je.fromBase64String(t):Je.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Hf(t){const e=t.mapValue.fields.__previous_value__;return fl(e)?Hf(e):e}function ya(t){const e=Or(t.mapValue.fields.__local_write_time__.timestampValue);return new Oe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dN{constructor(e,n,r,i,s,o,a,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class Mr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Mr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Mr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Vc={nullValue:"NULL_VALUE"};function bi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?fl(t)?4:Dw(t)?9007199254740991:10:q()}function Bn(t,e){if(t===e)return!0;const n=bi(t);if(n!==bi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ya(t).isEqual(ya(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Or(i.timestampValue),a=Or(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Lr(i.bytesValue).isEqual(Lr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Me(i.geoPointValue.latitude)===Me(s.geoPointValue.latitude)&&Me(i.geoPointValue.longitude)===Me(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Me(i.integerValue)===Me(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Me(i.doubleValue),a=Me(s.doubleValue);return o===a?_a(o)===_a(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Ds(t.arrayValue.values||[],e.arrayValue.values||[],Bn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Cg(o)!==Cg(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Bn(o[c],a[c])))return!1;return!0}(t,e);default:return q()}}function va(t,e){return(t.values||[]).find(n=>Bn(n,e))!==void 0}function Fr(t,e){if(t===e)return 0;const n=bi(t),r=bi(e);if(n!==r)return re(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return re(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Me(s.integerValue||s.doubleValue),c=Me(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return Dg(t.timestampValue,e.timestampValue);case 4:return Dg(ya(t),ya(e));case 5:return re(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Lr(s),c=Lr(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const l=re(a[u],c[u]);if(l!==0)return l}return re(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=re(Me(s.latitude),Me(o.latitude));return a!==0?a:re(Me(s.longitude),Me(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],c=o.values||[];for(let u=0;u<a.length&&u<c.length;++u){const l=Fr(a[u],c[u]);if(l)return l}return re(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Tr.mapValue&&o===Tr.mapValue)return 0;if(s===Tr.mapValue)return 1;if(o===Tr.mapValue)return-1;const a=s.fields||{},c=Object.keys(a),u=o.fields||{},l=Object.keys(u);c.sort(),l.sort();for(let h=0;h<c.length&&h<l.length;++h){const d=re(c[h],l[h]);if(d!==0)return d;const f=Fr(a[c[h]],u[l[h]]);if(f!==0)return f}return re(c.length,l.length)}(t.mapValue,e.mapValue);default:throw q()}}function Dg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return re(t,e);const n=Or(t),r=Or(e),i=re(n.seconds,r.seconds);return i!==0?i:re(n.nanos,r.nanos)}function xs(t){return td(t)}function td(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Or(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Lr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return O.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=td(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${td(n.fields[o])}`;return i+"}"}(t.mapValue):q()}function Ri(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function nd(t){return!!t&&"integerValue"in t}function Ia(t){return!!t&&"arrayValue"in t}function xg(t){return!!t&&"nullValue"in t}function Ng(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Oc(t){return!!t&&"mapValue"in t}function $o(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return $i(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=$o(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=$o(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Dw(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function fN(t){return"nullValue"in t?Vc:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?Ri(Mr.empty(),O.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:q()}function pN(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?Ri(Mr.empty(),O.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?Tr:q()}function Vg(t,e){const n=Fr(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function Og(t,e){const n=Fr(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.value=e}static empty(){return new lt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Oc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=$o(n)}setAll(e){let n=Ne.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=$o(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Oc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Bn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Oc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){$i(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new lt($o(this.value))}}function xw(t){const e=[];return $i(t.fields,(n,r)=>{const i=new Ne([n]);if(Oc(r)){const s=xw(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ut(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ce(e,0,K.min(),K.min(),K.min(),lt.empty(),0)}static newFoundDocument(e,n,r,i){return new Ce(e,1,n,K.min(),r,i,0)}static newNoDocument(e,n){return new Ce(e,2,n,K.min(),K.min(),lt.empty(),0)}static newUnknownDocument(e,n){return new Ce(e,3,n,K.min(),K.min(),lt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(K.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=lt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=lt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=K.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ce&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ce(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,n){this.position=e,this.inclusive=n}}function Lg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=O.comparator(O.fromName(o.referenceValue),n.key):r=Fr(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Mg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Bn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e,n="asc"){this.field=e,this.dir=n}}function mN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{}class le extends Nw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new gN(e,n,r):n==="array-contains"?new vN(e,r):n==="in"?new Uw(e,r):n==="not-in"?new IN(e,r):n==="array-contains-any"?new wN(e,r):new le(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new _N(e,r):new yN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Fr(n,this.value)):n!==null&&bi(this.value)===bi(n)&&this.matchesComparison(Fr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ie extends Nw{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new Ie(e,n)}matches(e){return Ns(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function Ns(t){return t.op==="and"}function rd(t){return t.op==="or"}function Qf(t){return Vw(t)&&Ns(t)}function Vw(t){for(const e of t.filters)if(e instanceof Ie)return!1;return!0}function id(t){if(t instanceof le)return t.field.canonicalString()+t.op.toString()+xs(t.value);if(Qf(t))return t.filters.map(e=>id(e)).join(",");{const e=t.filters.map(n=>id(n)).join(",");return`${t.op}(${e})`}}function Ow(t,e){return t instanceof le?function(r,i){return i instanceof le&&r.op===i.op&&r.field.isEqual(i.field)&&Bn(r.value,i.value)}(t,e):t instanceof Ie?function(r,i){return i instanceof Ie&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&Ow(o,i.filters[a]),!0):!1}(t,e):void q()}function Lw(t,e){const n=t.filters.concat(e);return Ie.create(n,t.op)}function Mw(t){return t instanceof le?function(n){return`${n.field.canonicalString()} ${n.op} ${xs(n.value)}`}(t):t instanceof Ie?function(n){return n.op.toString()+" {"+n.getFilters().map(Mw).join(" ,")+"}"}(t):"Filter"}class gN extends le{constructor(e,n,r){super(e,n,r),this.key=O.fromName(r.referenceValue)}matches(e){const n=O.comparator(e.key,this.key);return this.matchesComparison(n)}}class _N extends le{constructor(e,n){super(e,"in",n),this.keys=Fw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class yN extends le{constructor(e,n){super(e,"not-in",n),this.keys=Fw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Fw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>O.fromName(r.referenceValue))}class vN extends le{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ia(n)&&va(n.arrayValue,this.value)}}class Uw extends le{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&va(this.value.arrayValue,n)}}class IN extends le{constructor(e,n){super(e,"not-in",n)}matches(e){if(va(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!va(this.value.arrayValue,n)}}class wN extends le{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ia(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>va(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EN{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function sd(t,e=null,n=[],r=[],i=null,s=null,o=null){return new EN(t,e,n,r,i,s,o)}function Si(t){const e=M(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>id(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Ha(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>xs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>xs(r)).join(",")),e.ce=n}return e.ce}function Qa(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!mN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Ow(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Mg(t.startAt,e.startAt)&&Mg(t.endAt,e.endAt)}function hu(t){return O.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function du(t,e){return t.filters.filter(n=>n instanceof le&&n.field.isEqual(e))}function Fg(t,e,n){let r=Vc,i=!0;for(const s of du(t,e)){let o=Vc,a=!0;switch(s.op){case"<":case"<=":o=fN(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=Vc}Vg({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];Vg({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function Ug(t,e,n){let r=Tr,i=!0;for(const s of du(t,e)){let o=Tr,a=!0;switch(s.op){case">=":case">":o=pN(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=Tr}Og({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];Og({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function Bw(t,e,n,r,i,s,o,a){return new sr(t,e,n,r,i,s,o,a)}function eo(t){return new sr(t)}function Bg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Yf(t){return t.collectionGroup!==null}function As(t){const e=M(t);if(e.le===null){e.le=[];const n=new Set;for(const s of e.explicitOrderBy)e.le.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Ae(Ne.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.le.push(new wa(s,r))}),n.has(Ne.keyField().canonicalString())||e.le.push(new wa(Ne.keyField(),r))}return e.le}function Nt(t){const e=M(t);return e.he||(e.he=TN(e,As(t))),e.he}function TN(t,e){if(t.limitType==="F")return sd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new wa(i.field,s)});const n=t.endAt?new Ur(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ur(t.startAt.position,t.startAt.inclusive):null;return sd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function od(t,e){const n=t.filters.concat([e]);return new sr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function fu(t,e,n){return new sr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ya(t,e){return Qa(Nt(t),Nt(e))&&t.limitType===e.limitType}function $w(t){return`${Si(Nt(t))}|lt:${t.limitType}`}function os(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Mw(i)).join(", ")}]`),Ha(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>xs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>xs(i)).join(",")),`Target(${r})`}(Nt(t))}; limitType=${t.limitType})`}function Ja(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):O.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of As(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,c){const u=Lg(o,a,c);return o.inclusive?u<=0:u<0}(r.startAt,As(r),i)||r.endAt&&!function(o,a,c){const u=Lg(o,a,c);return o.inclusive?u>=0:u>0}(r.endAt,As(r),i))}(t,e)}function qw(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function jw(t){return(e,n)=>{let r=!1;for(const i of As(t)){const s=AN(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function AN(t,e,n){const r=t.field.isKeyField()?O.comparator(e.key,n.key):function(s,o,a){const c=o.data.field(s),u=a.data.field(s);return c!==null&&u!==null?Fr(c,u):q()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return q()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){$i(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Cw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bN=new Re(O.comparator);function Bt(){return bN}const Ww=new Re(O.comparator);function Co(...t){let e=Ww;for(const n of t)e=e.insert(n.key,n);return e}function Gw(t){let e=Ww;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function xn(){return qo()}function zw(){return qo()}function qo(){return new Qr(t=>t.toString(),(t,e)=>t.isEqual(e))}const RN=new Re(O.comparator),SN=new Ae(O.comparator);function oe(...t){let e=SN;for(const n of t)e=e.add(n);return e}const PN=new Ae(re);function Jf(){return PN}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kw(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_a(e)?"-0":e}}function Hw(t){return{integerValue:""+t}}function Qw(t,e){return Aw(e)?Hw(e):Kw(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(){this._=void 0}}function CN(t,e,n){return t instanceof Vs?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&fl(s)&&(s=Hf(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Pi?Jw(t,e):t instanceof Ci?Xw(t,e):function(i,s){const o=Yw(i,s),a=$g(o)+$g(i.Ie);return nd(o)&&nd(i.Ie)?Hw(a):Kw(i.serializer,a)}(t,e)}function kN(t,e,n){return t instanceof Pi?Jw(t,e):t instanceof Ci?Xw(t,e):n}function Yw(t,e){return t instanceof Os?function(r){return nd(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Vs extends pl{}class Pi extends pl{constructor(e){super(),this.elements=e}}function Jw(t,e){const n=Zw(e);for(const r of t.elements)n.some(i=>Bn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ci extends pl{constructor(e){super(),this.elements=e}}function Xw(t,e){let n=Zw(e);for(const r of t.elements)n=n.filter(i=>!Bn(i,r));return{arrayValue:{values:n}}}class Os extends pl{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function $g(t){return Me(t.integerValue||t.doubleValue)}function Zw(t){return Ia(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e,n){this.field=e,this.transform=n}}function DN(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Pi&&i instanceof Pi||r instanceof Ci&&i instanceof Ci?Ds(r.elements,i.elements,Bn):r instanceof Os&&i instanceof Os?Bn(r.Ie,i.Ie):r instanceof Vs&&i instanceof Vs}(t.transform,e.transform)}class xN{constructor(e,n){this.version=e,this.transformResults=n}}class Ve{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ve}static exists(e){return new Ve(void 0,e)}static updateTime(e){return new Ve(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Lc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ml{}function eE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new no(t.key,Ve.none()):new to(t.key,t.data,Ve.none());{const n=t.data,r=lt.empty();let i=new Ae(Ne.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new or(t.key,r,new Ut(i.toArray()),Ve.none())}}function NN(t,e,n){t instanceof to?function(i,s,o){const a=i.value.clone(),c=jg(i.fieldTransforms,s,o.transformResults);a.setAll(c),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof or?function(i,s,o){if(!Lc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=jg(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(tE(i)),c.setAll(a),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function jo(t,e,n,r){return t instanceof to?function(s,o,a,c){if(!Lc(s.precondition,o))return a;const u=s.value.clone(),l=Wg(s.fieldTransforms,c,o);return u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof or?function(s,o,a,c){if(!Lc(s.precondition,o))return a;const u=Wg(s.fieldTransforms,c,o),l=o.data;return l.setAll(tE(s)),l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return Lc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function VN(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Yw(r.transform,i||null);s!=null&&(n===null&&(n=lt.empty()),n.set(r.field,s))}return n||null}function qg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ds(r,i,(s,o)=>DN(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class to extends ml{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class or extends ml{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function tE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function jg(t,e,n){const r=new Map;G(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,kN(o,a,n[i]))}return r}function Wg(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,CN(s,o,e))}return r}class no extends ml{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Xf extends ml{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&NN(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=jo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=jo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=zw();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const c=eE(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(K.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),oe())}isEqual(e){return this.batchId===e.batchId&&Ds(this.mutations,e.mutations,(n,r)=>qg(n,r))&&Ds(this.baseMutations,e.baseMutations,(n,r)=>qg(n,r))}}class ep{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){G(e.mutations.length===r.length);let i=function(){return RN}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new ep(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ON{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ke,de;function nE(t){switch(t){default:return q();case y.CANCELLED:case y.UNKNOWN:case y.DEADLINE_EXCEEDED:case y.RESOURCE_EXHAUSTED:case y.INTERNAL:case y.UNAVAILABLE:case y.UNAUTHENTICATED:return!1;case y.INVALID_ARGUMENT:case y.NOT_FOUND:case y.ALREADY_EXISTS:case y.PERMISSION_DENIED:case y.FAILED_PRECONDITION:case y.ABORTED:case y.OUT_OF_RANGE:case y.UNIMPLEMENTED:case y.DATA_LOSS:return!0}}function rE(t){if(t===void 0)return We("GRPC error has no .code"),y.UNKNOWN;switch(t){case Ke.OK:return y.OK;case Ke.CANCELLED:return y.CANCELLED;case Ke.UNKNOWN:return y.UNKNOWN;case Ke.DEADLINE_EXCEEDED:return y.DEADLINE_EXCEEDED;case Ke.RESOURCE_EXHAUSTED:return y.RESOURCE_EXHAUSTED;case Ke.INTERNAL:return y.INTERNAL;case Ke.UNAVAILABLE:return y.UNAVAILABLE;case Ke.UNAUTHENTICATED:return y.UNAUTHENTICATED;case Ke.INVALID_ARGUMENT:return y.INVALID_ARGUMENT;case Ke.NOT_FOUND:return y.NOT_FOUND;case Ke.ALREADY_EXISTS:return y.ALREADY_EXISTS;case Ke.PERMISSION_DENIED:return y.PERMISSION_DENIED;case Ke.FAILED_PRECONDITION:return y.FAILED_PRECONDITION;case Ke.ABORTED:return y.ABORTED;case Ke.OUT_OF_RANGE:return y.OUT_OF_RANGE;case Ke.UNIMPLEMENTED:return y.UNIMPLEMENTED;case Ke.DATA_LOSS:return y.DATA_LOSS;default:return q()}}(de=Ke||(Ke={}))[de.OK=0]="OK",de[de.CANCELLED=1]="CANCELLED",de[de.UNKNOWN=2]="UNKNOWN",de[de.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",de[de.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",de[de.NOT_FOUND=5]="NOT_FOUND",de[de.ALREADY_EXISTS=6]="ALREADY_EXISTS",de[de.PERMISSION_DENIED=7]="PERMISSION_DENIED",de[de.UNAUTHENTICATED=16]="UNAUTHENTICATED",de[de.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",de[de.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",de[de.ABORTED=10]="ABORTED",de[de.OUT_OF_RANGE=11]="OUT_OF_RANGE",de[de.UNIMPLEMENTED=12]="UNIMPLEMENTED",de[de.INTERNAL=13]="INTERNAL",de[de.UNAVAILABLE=14]="UNAVAILABLE",de[de.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iE(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LN=new Ts([4294967295,4294967295],0);function Gg(t){const e=iE().encode(t),n=new kx;return n.update(e),new Uint8Array(n.digest())}function zg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ts([n,r],0),new Ts([i,s],0)]}class np{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ko(`Invalid padding: ${n}`);if(r<0)throw new ko(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ko(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ko(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=Ts.fromNumber(this.Te)}de(e,n,r){let i=e.add(n.multiply(Ts.fromNumber(r)));return i.compare(LN)===1&&(i=new Ts([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=Gg(e),[r,i]=zg(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new np(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=Gg(e),[r,i]=zg(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ko extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ec.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Za(K.min(),i,new Re(re),Bt(),oe())}}class ec{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ec(r,n,oe(),oe(),oe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e,n,r,i){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=i}}class sE{constructor(e,n){this.targetId=e,this.fe=n}}class oE{constructor(e,n,r=Je.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Kg{constructor(){this.ge=0,this.pe=Qg(),this.ye=Je.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=oe(),n=oe(),r=oe();return this.pe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:q()}}),new ec(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=Qg()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,G(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class MN{constructor(e){this.Le=e,this.ke=new Map,this.qe=Bt(),this.Qe=Hg(),this.Ke=new Re(re)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,r=e.fe.count,i=this.Ye(n);if(i){const s=i.target;if(hu(s))if(r===0){const o=new O(s.path);this.We(n,o,Ce.newNoDocument(o,K.min()))}else G(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),c=a?this.et(a,e,o):1;if(c!==0){this.He(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Lr(r).toUint8Array()}catch(c){if(c instanceof kw)return fn("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new np(o,i,s)}catch(c){return fn(c instanceof ko?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.We(n,s,null),i++)}),i}it(e){const n=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&hu(a.target)){const c=new O(a.target.path);this.qe.get(c)!==null||this.st(o,c)||this.We(o,c,Ce.newNoDocument(c,e))}s.De&&(n.set(o,s.ve()),s.Fe())}});let r=oe();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Ye(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(e));const i=new Za(e,n,this.Ke,this.qe,r);return this.qe=Bt(),this.Qe=Hg(),this.Ke=new Re(re),i}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const i=this.ze(e);this.st(e,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new Kg,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new Ae(re),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||R("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new Kg),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Hg(){return new Re(O.comparator)}function Qg(){return new Re(O.comparator)}const FN=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),UN=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),BN=(()=>({and:"AND",or:"OR"}))();class $N{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ad(t,e){return t.useProto3Json||Ha(e)?e:{value:e}}function Ls(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function aE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function qN(t,e){return Ls(t,e.toTimestamp())}function ze(t){return G(!!t),K.fromTimestamp(function(n){const r=Or(n);return new Oe(r.seconds,r.nanos)}(t))}function rp(t,e){return function(r){return new fe(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function cE(t){const e=fe.fromString(t);return G(_E(e)),e}function Ea(t,e){return rp(t.databaseId,e.path)}function On(t,e){const n=cE(e);if(n.get(1)!==t.databaseId.projectId)throw new b(y.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new b(y.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new O(lE(n))}function cd(t,e){return rp(t.databaseId,e)}function uE(t){const e=cE(t);return e.length===4?fe.emptyPath():lE(e)}function Ta(t){return new fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function lE(t){return G(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Yg(t,e,n){return{name:Ea(t,e),fields:n.value.mapValue.fields}}function hE(t,e,n){const r=On(t,e.name),i=ze(e.updateTime),s=e.createTime?ze(e.createTime):K.min(),o=new lt({mapValue:{fields:e.fields}}),a=Ce.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function jN(t,e){return"found"in e?function(r,i){G(!!i.found),i.found.name,i.found.updateTime;const s=On(r,i.found.name),o=ze(i.found.updateTime),a=i.found.createTime?ze(i.found.createTime):K.min(),c=new lt({mapValue:{fields:i.found.fields}});return Ce.newFoundDocument(s,o,a,c)}(t,e):"missing"in e?function(r,i){G(!!i.missing),G(!!i.readTime);const s=On(r,i.missing),o=ze(i.readTime);return Ce.newNoDocument(s,o)}(t,e):q()}function WN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,l){return u.useProto3Json?(G(l===void 0||typeof l=="string"),Je.fromBase64String(l||"")):(G(l===void 0||l instanceof Uint8Array),Je.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const l=u.code===void 0?y.UNKNOWN:rE(u.code);return new b(l,u.message||"")}(o);n=new oE(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=On(t,r.document.name),s=ze(r.document.updateTime),o=r.document.createTime?ze(r.document.createTime):K.min(),a=new lt({mapValue:{fields:r.document.fields}}),c=Ce.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new Mc(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=On(t,r.document),s=r.readTime?ze(r.readTime):K.min(),o=Ce.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Mc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=On(t,r.document),s=r.removedTargetIds||[];n=new Mc([],s,i,null)}else{if(!("filter"in e))return q();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new ON(i,s),a=r.targetId;n=new sE(a,o)}}return n}function Aa(t,e){let n;if(e instanceof to)n={update:Yg(t,e.key,e.value)};else if(e instanceof no)n={delete:Ea(t,e.key)};else if(e instanceof or)n={update:Yg(t,e.key,e.data),updateMask:YN(e.fieldMask)};else{if(!(e instanceof Xf))return q();n={verify:Ea(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Vs)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Pi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ci)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Os)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw q()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:qN(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:q()}(t,e.precondition)),n}function ud(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?Ve.updateTime(ze(s.updateTime)):s.exists!==void 0?Ve.exists(s.exists):Ve.none()}(e.currentDocument):Ve.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let c=null;if("setToServerValue"in a)G(a.setToServerValue==="REQUEST_TIME"),c=new Vs;else if("appendMissingElements"in a){const l=a.appendMissingElements.values||[];c=new Pi(l)}else if("removeAllFromArray"in a){const l=a.removeAllFromArray.values||[];c=new Ci(l)}else"increment"in a?c=new Os(o,a.increment):q();const u=Ne.fromServerFormat(a.fieldPath);return new Xa(u,c)}(t,i)):[];if(e.update){e.update.name;const i=On(t,e.update.name),s=new lt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(c){const u=c.fieldPaths||[];return new Ut(u.map(l=>Ne.fromServerFormat(l)))}(e.updateMask);return new or(i,s,o,n,r)}return new to(i,s,n,r)}if(e.delete){const i=On(t,e.delete);return new no(i,n)}if(e.verify){const i=On(t,e.verify);return new Xf(i,n)}return q()}function GN(t,e){return t&&t.length>0?(G(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?ze(i.updateTime):ze(s);return o.isEqual(K.min())&&(o=ze(s)),new xN(o,i.transformResults||[])}(n,e))):[]}function dE(t,e){return{documents:[cd(t,e.path)]}}function fE(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=cd(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=cd(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length!==0)return gE(Ie.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(u=>function(h){return{field:as(h.field),direction:KN(h.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=ad(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function pE(t){let e=uE(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){G(r===1);const l=n.from[0];l.allDescendants?i=l.collectionId:e=e.child(l.collectionId)}let s=[];n.where&&(s=function(h){const d=mE(h);return d instanceof Ie&&Qf(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(v){return new wa(cs(v.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Ha(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(h){const d=!!h.before,f=h.values||[];return new Ur(f,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,f=h.values||[];return new Ur(f,d)}(n.endAt)),Bw(e,i,o,s,a,"F",c,u)}function zN(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return q()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function mE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=cs(n.unaryFilter.field);return le.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=cs(n.unaryFilter.field);return le.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=cs(n.unaryFilter.field);return le.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=cs(n.unaryFilter.field);return le.create(o,"!=",{nullValue:"NULL_VALUE"});default:return q()}}(t):t.fieldFilter!==void 0?function(n){return le.create(cs(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return q()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Ie.create(n.compositeFilter.filters.map(r=>mE(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return q()}}(n.compositeFilter.op))}(t):q()}function KN(t){return FN[t]}function HN(t){return UN[t]}function QN(t){return BN[t]}function as(t){return{fieldPath:t.canonicalString()}}function cs(t){return Ne.fromServerFormat(t.fieldPath)}function gE(t){return t instanceof le?function(n){if(n.op==="=="){if(Ng(n.value))return{unaryFilter:{field:as(n.field),op:"IS_NAN"}};if(xg(n.value))return{unaryFilter:{field:as(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Ng(n.value))return{unaryFilter:{field:as(n.field),op:"IS_NOT_NAN"}};if(xg(n.value))return{unaryFilter:{field:as(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:as(n.field),op:HN(n.op),value:n.value}}}(t):t instanceof Ie?function(n){const r=n.getFilters().map(i=>gE(i));return r.length===1?r[0]:{compositeFilter:{op:QN(n.op),filters:r}}}(t):q()}function YN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function _E(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e,n,r,i,s=K.min(),o=K.min(),a=Je.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Kn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Kn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{constructor(e){this.ut=e}}function JN(t,e){let n;if(e.document)n=hE(t.ut,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=O.fromSegments(e.noDocument.path),i=Di(e.noDocument.readTime);n=Ce.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return q();{const r=O.fromSegments(e.unknownDocument.path),i=Di(e.unknownDocument.version);n=Ce.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(i){const s=new Oe(i[0],i[1]);return K.fromTimestamp(s)}(e.readTime)),n}function Jg(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:pu(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:Ea(s,o.key),fields:o.data.value.mapValue.fields,updateTime:Ls(s,o.version.toTimestamp()),createTime:Ls(s,o.createTime.toTimestamp())}}(t.ut,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:ki(e.version)};else{if(!e.isUnknownDocument())return q();r.unknownDocument={path:n.path.toArray(),version:ki(e.version)}}return r}function pu(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function ki(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Di(t){const e=new Oe(t.seconds,t.nanoseconds);return K.fromTimestamp(e)}function oi(t,e){const n=(e.baseMutations||[]).map(s=>ud(t.ut,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>ud(t.ut,s)),i=Oe.fromMillis(e.localWriteTimeMs);return new Zf(e.batchId,i,n,r)}function Do(t){const e=Di(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?Di(t.lastLimboFreeSnapshotVersion):K.min();let r;return r=function(s){return s.documents!==void 0}(t.query)?function(s){return G(s.documents.length===1),Nt(eo(uE(s.documents[0])))}(t.query):function(s){return Nt(pE(s))}(t.query),new Kn(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,Je.fromBase64String(t.resumeToken))}function vE(t,e){const n=ki(e.snapshotVersion),r=ki(e.lastLimboFreeSnapshotVersion);let i;i=hu(e.target)?dE(t.ut,e.target):fE(t.ut,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Si(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function ip(t){const e=pE({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?fu(e,e.limit,"L"):e}function ch(t,e){return new tp(e.largestBatchId,ud(t.ut,e.overlayMutation))}function Xg(t,e){const n=e.path.lastSegment();return[t,xt(e.path.popLast()),n]}function Zg(t,e,n,r){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:ki(r.readTime),documentKey:xt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XN{getBundleMetadata(e,n){return e_(e).get(n).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:Di(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,n){return e_(e).put(function(i){return{bundleId:i.id,createTime:ki(ze(i.createTime)),version:i.version}}(n))}getNamedQuery(e,n){return t_(e).get(n).next(r=>{if(r)return function(s){return{name:s.name,query:ip(s.bundledQuery),readTime:Di(s.readTime)}}(r)})}saveNamedQuery(e,n){return t_(e).put(function(i){return{name:i.name,readTime:ki(ze(i.readTime)),bundledQuery:i.bundledQuery}}(n))}}function e_(t){return ot(t,"bundles")}function t_(t){return ot(t,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e,n){this.serializer=e,this.userId=n}static ct(e,n){const r=n.uid||"";return new gl(e,r)}getOverlay(e,n){return yo(e).get(Xg(this.userId,n)).next(r=>r?ch(this.serializer,r):null)}getOverlays(e,n){const r=xn();return g.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new tp(n,o);i.push(this.lt(e,a))}),g.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(xt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(yo(e).H("collectionPathOverlayIndex",a))}),g.waitFor(s)}getOverlaysForCollection(e,n,r){const i=xn(),s=xt(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return yo(e).W("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const u=ch(this.serializer,c);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=xn();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return yo(e).Y({index:"collectionGroupOverlayIndex",range:a},(c,u,l)=>{const h=ch(this.serializer,u);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):l.done()}).next(()=>s)}lt(e,n){return yo(e).put(function(i,s,o){const[a,c,u]=Xg(s,o.mutation.key);return{userId:s,collectionPath:c,documentId:u,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Aa(i.ut,o.mutation)}}(this.serializer,this.userId,n))}}function yo(t){return ot(t,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(){}ht(e,n){this.Pt(e,n),n.It()}Pt(e,n){if("nullValue"in e)this.Tt(n,5);else if("booleanValue"in e)this.Tt(n,10),n.Et(e.booleanValue?1:0);else if("integerValue"in e)this.Tt(n,15),n.Et(Me(e.integerValue));else if("doubleValue"in e){const r=Me(e.doubleValue);isNaN(r)?this.Tt(n,13):(this.Tt(n,15),_a(r)?n.Et(0):n.Et(r))}else if("timestampValue"in e){const r=e.timestampValue;this.Tt(n,20),typeof r=="string"?n.dt(r):(n.dt(`${r.seconds||""}`),n.Et(r.nanos||0))}else if("stringValue"in e)this.At(e.stringValue,n),this.Rt(n);else if("bytesValue"in e)this.Tt(n,30),n.Vt(Lr(e.bytesValue)),this.Rt(n);else if("referenceValue"in e)this.ft(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.Tt(n,45),n.Et(r.latitude||0),n.Et(r.longitude||0)}else"mapValue"in e?Dw(e)?this.Tt(n,Number.MAX_SAFE_INTEGER):(this.gt(e.mapValue,n),this.Rt(n)):"arrayValue"in e?(this.yt(e.arrayValue,n),this.Rt(n)):q()}At(e,n){this.Tt(n,25),this.wt(e,n)}wt(e,n){n.dt(e)}gt(e,n){const r=e.fields||{};this.Tt(n,55);for(const i of Object.keys(r))this.At(i,n),this.Pt(r[i],n)}yt(e,n){const r=e.values||[];this.Tt(n,50);for(const i of r)this.Pt(i,n)}ft(e,n){this.Tt(n,37),O.fromName(e).path.forEach(r=>{this.Tt(n,60),this.wt(r,n)})}Tt(e,n){e.Et(n)}Rt(e){e.Et(2)}}ai.St=new ai;function ZN(t){if(t===0)return 8;let e=0;return t>>4==0&&(e+=4,t<<=4),t>>6==0&&(e+=2,t<<=2),t>>7==0&&(e+=1),e}function n_(t){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=ZN(255&r[s]);if(i+=o,o!==8)break}return i}(t);return Math.ceil(e/8)}class eV{constructor(){this.buffer=new Uint8Array(1024),this.position=0}bt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Dt(r.value),r=n.next();this.Ct()}vt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ft(r.value),r=n.next();this.Mt()}xt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Dt(r);else if(r<2048)this.Dt(960|r>>>6),this.Dt(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Dt(480|r>>>12),this.Dt(128|63&r>>>6),this.Dt(128|63&r);else{const i=n.codePointAt(0);this.Dt(240|i>>>18),this.Dt(128|63&i>>>12),this.Dt(128|63&i>>>6),this.Dt(128|63&i)}}this.Ct()}Ot(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{const i=n.codePointAt(0);this.Ft(240|i>>>18),this.Ft(128|63&i>>>12),this.Ft(128|63&i>>>6),this.Ft(128|63&i)}}this.Mt()}Nt(e){const n=this.Bt(e),r=n_(n);this.Lt(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}kt(e){const n=this.Bt(e),r=n_(n);this.Lt(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}qt(){this.Qt(255),this.Qt(255)}Kt(){this.$t(255),this.$t(255)}reset(){this.position=0}seed(e){this.Lt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Ut(){return this.buffer.slice(0,this.position)}Bt(e){const n=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Dt(e){const n=255&e;n===0?(this.Qt(0),this.Qt(255)):n===255?(this.Qt(255),this.Qt(0)):this.Qt(n)}Ft(e){const n=255&e;n===0?(this.$t(0),this.$t(255)):n===255?(this.$t(255),this.$t(0)):this.$t(e)}Ct(){this.Qt(0),this.Qt(1)}Mt(){this.$t(0),this.$t(1)}Qt(e){this.Lt(1),this.buffer[this.position++]=e}$t(e){this.Lt(1),this.buffer[this.position++]=~e}Lt(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class tV{constructor(e){this.Wt=e}Vt(e){this.Wt.bt(e)}dt(e){this.Wt.xt(e)}Et(e){this.Wt.Nt(e)}It(){this.Wt.qt()}}class nV{constructor(e){this.Wt=e}Vt(e){this.Wt.vt(e)}dt(e){this.Wt.Ot(e)}Et(e){this.Wt.kt(e)}It(){this.Wt.Kt()}}class vo{constructor(){this.Wt=new eV,this.Gt=new tV(this.Wt),this.zt=new nV(this.Wt)}seed(e){this.Wt.seed(e)}jt(e){return e===0?this.Gt:this.zt}Ut(){return this.Wt.Ut()}reset(){this.Wt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Ht(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new ci(this.indexId,this.documentKey,this.arrayValue,r)}}function dr(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=r_(t.arrayValue,e.arrayValue),n!==0?n:(n=r_(t.directionalValue,e.directionalValue),n!==0?n:O.comparator(t.documentKey,e.documentKey)))}function r_(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(e){this.Jt=new Ae((n,r)=>Ne.comparator(n.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Yt=e.orderBy,this.Zt=[];for(const n of e.filters){const r=n;r.isInequality()?this.Jt=this.Jt.add(r):this.Zt.push(r)}}get Xt(){return this.Jt.size>1}en(e){if(G(e.collectionGroup===this.collectionId),this.Xt)return!1;const n=Zh(e);if(n!==void 0&&!this.tn(n))return!1;const r=ni(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.tn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Jt.size>0){const a=this.Jt.getIterator().getNext();if(!i.has(a.field.canonicalString())){const c=r[s];if(!this.nn(a,c)||!this.rn(this.Yt[o++],c))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.Yt.length||!this.rn(this.Yt[o++],a))return!1}return!0}sn(){if(this.Xt)return null;let e=new Ae(Ne.comparator);const n=[];for(const r of this.Zt)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")n.push(new xc(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),n.push(new xc(r.field,0))}for(const r of this.Yt)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),n.push(new xc(r.field,r.dir==="asc"?0:1)));return new lu(lu.UNKNOWN_ID,this.collectionId,n,ga.empty())}tn(e){for(const n of this.Zt)if(this.nn(n,e))return!0;return!1}nn(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}rn(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IE(t){var e,n;if(G(t instanceof le||t instanceof Ie),t instanceof le){if(t instanceof Uw){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>le.create(t.field,"==",s)))||[];return Ie.create(i,"or")}return t}const r=t.filters.map(i=>IE(i));return Ie.create(r,t.op)}function rV(t){if(t.getFilters().length===0)return[];const e=dd(IE(t));return G(wE(e)),ld(e)||hd(e)?[e]:e.getFilters()}function ld(t){return t instanceof le}function hd(t){return t instanceof Ie&&Qf(t)}function wE(t){return ld(t)||hd(t)||function(n){if(n instanceof Ie&&rd(n)){for(const r of n.getFilters())if(!ld(r)&&!hd(r))return!1;return!0}return!1}(t)}function dd(t){if(G(t instanceof le||t instanceof Ie),t instanceof le)return t;if(t.filters.length===1)return dd(t.filters[0]);const e=t.filters.map(r=>dd(r));let n=Ie.create(e,t.op);return n=mu(n),wE(n)?n:(G(n instanceof Ie),G(Ns(n)),G(n.filters.length>1),n.filters.reduce((r,i)=>sp(r,i)))}function sp(t,e){let n;return G(t instanceof le||t instanceof Ie),G(e instanceof le||e instanceof Ie),n=t instanceof le?e instanceof le?function(i,s){return Ie.create([i,s],"and")}(t,e):s_(t,e):e instanceof le?s_(e,t):function(i,s){if(G(i.filters.length>0&&s.filters.length>0),Ns(i)&&Ns(s))return Lw(i,s.getFilters());const o=rd(i)?i:s,a=rd(i)?s:i,c=o.filters.map(u=>sp(u,a));return Ie.create(c,"or")}(t,e),mu(n)}function s_(t,e){if(Ns(e))return Lw(e,t.getFilters());{const n=e.filters.map(r=>sp(t,r));return Ie.create(n,"or")}}function mu(t){if(G(t instanceof le||t instanceof Ie),t instanceof le)return t;const e=t.getFilters();if(e.length===1)return mu(e[0]);if(Vw(t))return t;const n=e.map(i=>mu(i)),r=[];return n.forEach(i=>{i instanceof le?r.push(i):i instanceof Ie&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:Ie.create(r,t.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iV{constructor(){this.on=new op}addToCollectionParentIndex(e,n){return this.on.add(n),g.resolve()}getCollectionParents(e,n){return g.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return g.resolve()}deleteFieldIndex(e,n){return g.resolve()}deleteAllFieldIndexes(e){return g.resolve()}createTargetIndexes(e,n){return g.resolve()}getDocumentsMatchingTarget(e,n){return g.resolve(null)}getIndexType(e,n){return g.resolve(0)}getFieldIndexes(e,n){return g.resolve([])}getNextCollectionGroupToUpdate(e){return g.resolve(null)}getMinOffset(e,n){return g.resolve(Yt.min())}getMinOffsetFromCollectionGroup(e,n){return g.resolve(Yt.min())}updateCollectionGroup(e,n,r){return g.resolve()}updateIndexEntries(e,n){return g.resolve()}}class op{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ae(fe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ae(fe.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc=new Uint8Array(0);class sV{constructor(e,n){this.user=e,this.databaseId=n,this._n=new op,this.an=new Qr(r=>Si(r),(r,i)=>Qa(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this._n.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this._n.add(n)});const s={collectionId:r,parent:xt(i)};return o_(e).put(s)}return g.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[vw(n),""],!1,!0);return o_(e).W(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(Dn(o.parent))}return r})}addFieldIndex(e,n){const r=Io(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(c=>[c.fieldPath.canonicalString(),c.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=ts(e);return s.next(a=>{o.put(Zg(a,this.user,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=Io(e),i=ts(e),s=es(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const n=Io(e),r=es(e),i=ts(e);return n.H().next(()=>r.H()).next(()=>i.H())}createTargetIndexes(e,n){return g.forEach(this.un(n),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new i_(r).sn();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,n){const r=es(e);let i=!0;const s=new Map;return g.forEach(this.un(n),o=>this.cn(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=oe();const a=[];return g.forEach(s,(c,u)=>{R("IndexedDbIndexManager",`Using index ${function(N){return`id=${N.indexId}|cg=${N.collectionGroup}|f=${N.fields.map(H=>`${H.fieldPath}:${H.kind}`).join(",")}`}(c)} to execute ${Si(n)}`);const l=function(N,H){const ee=Zh(H);if(ee===void 0)return null;for(const $ of du(N,ee.fieldPath))switch($.op){case"array-contains-any":return $.value.arrayValue.values||[];case"array-contains":return[$.value]}return null}(u,c),h=function(N,H){const ee=new Map;for(const $ of ni(H))for(const he of du(N,$.fieldPath))switch(he.op){case"==":case"in":ee.set($.fieldPath.canonicalString(),he.value);break;case"not-in":case"!=":return ee.set($.fieldPath.canonicalString(),he.value),Array.from(ee.values())}return null}(u,c),d=function(N,H){const ee=[];let $=!0;for(const he of ni(H)){const je=he.kind===0?Fg(N,he.fieldPath,N.startAt):Ug(N,he.fieldPath,N.startAt);ee.push(je.value),$&&($=je.inclusive)}return new Ur(ee,$)}(u,c),f=function(N,H){const ee=[];let $=!0;for(const he of ni(H)){const je=he.kind===0?Ug(N,he.fieldPath,N.endAt):Fg(N,he.fieldPath,N.endAt);ee.push(je.value),$&&($=je.inclusive)}return new Ur(ee,$)}(u,c),v=this.ln(c,u,d),I=this.ln(c,u,f),w=this.hn(c,u,h),S=this.Pn(c.indexId,l,v,d.inclusive,I,f.inclusive,w);return g.forEach(S,V=>r.j(V,n.limit).next(N=>{N.forEach(H=>{const ee=O.fromSegments(H.documentKey);o.has(ee)||(o=o.add(ee),a.push(ee))})}))}).next(()=>a)}return g.resolve(null)})}un(e){let n=this.an.get(e);return n||(e.filters.length===0?n=[e]:n=rV(Ie.create(e.filters,"and")).map(r=>sd(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.an.set(e,n),n)}Pn(e,n,r,i,s,o,a){const c=(n!=null?n.length:1)*Math.max(r.length,s.length),u=c/(n!=null?n.length:1),l=[];for(let h=0;h<c;++h){const d=n?this.In(n[h/u]):wc,f=this.Tn(e,d,r[h%u],i),v=this.En(e,d,s[h%u],o),I=a.map(w=>this.Tn(e,d,w,!0));l.push(...this.createRange(f,v,I))}return l}Tn(e,n,r,i){const s=new ci(e,O.empty(),n,r);return i?s:s.Ht()}En(e,n,r,i){const s=new ci(e,O.empty(),n,r);return i?s.Ht():s}cn(e,n){const r=new i_(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.en(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.un(n);return g.forEach(i,s=>this.cn(e,s).next(o=>{o?r!==0&&o.fields.length<function(c){let u=new Ae(Ne.comparator),l=!1;for(const h of c.filters)for(const d of h.getFlattenedFilters())d.field.isKeyField()||(d.op==="array-contains"||d.op==="array-contains-any"?l=!0:u=u.add(d.field));for(const h of c.orderBy)h.field.isKeyField()||(u=u.add(h.field));return u.size+(l?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(n)&&i.length>1&&r===2?1:r)}dn(e,n){const r=new vo;for(const i of ni(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.jt(i.kind);ai.St.ht(s,o)}return r.Ut()}In(e){const n=new vo;return ai.St.ht(e,n.jt(0)),n.Ut()}An(e,n){const r=new vo;return ai.St.ht(Ri(this.databaseId,n),r.jt(function(s){const o=ni(s);return o.length===0?0:o[o.length-1].kind}(e))),r.Ut()}hn(e,n,r){if(r===null)return[];let i=[];i.push(new vo);let s=0;for(const o of ni(e)){const a=r[s++];for(const c of i)if(this.Rn(n,o.fieldPath)&&Ia(a))i=this.Vn(i,o,a);else{const u=c.jt(o.kind);ai.St.ht(a,u)}}return this.mn(i)}ln(e,n,r){return this.hn(e,n,r.position)}mn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].Ut();return n}Vn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const c=new vo;c.seed(a.Ut()),ai.St.ht(o,c.jt(n.kind)),s.push(c)}return s}Rn(e,n){return!!e.filters.find(r=>r instanceof le&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=Io(e),i=ts(e);return(n?r.W("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.W()).next(s=>{const o=[];return g.forEach(s,a=>i.get([a.indexId,this.uid]).next(c=>{o.push(function(l,h){const d=h?new ga(h.sequenceNumber,new Yt(Di(h.readTime),new O(Dn(h.documentKey)),h.largestBatchId)):ga.empty(),f=l.fields.map(([v,I])=>new xc(Ne.fromServerFormat(v),I));return new lu(l.indexId,l.collectionGroup,f,d)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:re(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=Io(e),s=ts(e);return this.fn(e).next(o=>i.W("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>g.forEach(a,c=>s.put(Zg(c.indexId,this.user,o,r)))))}updateIndexEntries(e,n){const r=new Map;return g.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?g.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),g.forEach(a,c=>this.gn(e,i,c).next(u=>{const l=this.pn(s,c);return u.isEqual(l)?g.resolve():this.yn(e,s,c,u,l)}))))})}wn(e,n,r,i){return es(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.An(r,n.key),documentKey:n.key.path.toArray()})}Sn(e,n,r,i){return es(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.An(r,n.key),n.key.path.toArray()])}gn(e,n,r){const i=es(e);let s=new Ae(dr);return i.Y({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.An(r,n)])},(o,a)=>{s=s.add(new ci(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}pn(e,n){let r=new Ae(dr);const i=this.dn(n,e);if(i==null)return r;const s=Zh(n);if(s!=null){const o=e.data.field(s.fieldPath);if(Ia(o))for(const a of o.arrayValue.values||[])r=r.add(new ci(n.indexId,e.key,this.In(a),i))}else r=r.add(new ci(n.indexId,e.key,wc,i));return r}yn(e,n,r,i,s){R("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(c,u,l,h,d){const f=c.getIterator(),v=u.getIterator();let I=Zi(f),w=Zi(v);for(;I||w;){let S=!1,V=!1;if(I&&w){const N=l(I,w);N<0?V=!0:N>0&&(S=!0)}else I!=null?V=!0:S=!0;S?(h(w),w=Zi(v)):V?(d(I),I=Zi(f)):(I=Zi(f),w=Zi(v))}}(i,s,dr,a=>{o.push(this.wn(e,n,r,a))},a=>{o.push(this.Sn(e,n,r,a))}),g.waitFor(o)}fn(e){let n=1;return ts(e).Y({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>dr(o,a)).filter((o,a,c)=>!a||dr(o,c[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=dr(o,e),c=dr(o,n);if(a===0)i[0]=e.Ht();else if(a>0&&c<0)i.push(o),i.push(o.Ht());else if(c>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.bn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,wc,[]],c=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,wc,[]];s.push(IDBKeyRange.bound(a,c))}return s}bn(e,n){return dr(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(a_)}getMinOffset(e,n){return g.mapArray(this.un(n),r=>this.cn(e,r).next(i=>i||q())).next(a_)}}function o_(t){return ot(t,"collectionParents")}function es(t){return ot(t,"indexEntries")}function Io(t){return ot(t,"indexConfiguration")}function ts(t){return ot(t,"indexState")}function a_(t){G(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;zf(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new Yt(e.readTime,e.documentKey,n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Mt{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Mt(e,Mt.DEFAULT_COLLECTION_PERCENTILE,Mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EE(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.Y({range:o},(l,h,d)=>(a++,d.delete()));s.push(c.next(()=>{G(a===1)}));const u=[];for(const l of n.mutations){const h=bw(e,l.key.path,n.batchId);s.push(i.delete(h)),u.push(l.key)}return g.waitFor(s).next(()=>u)}function gu(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw q();e=t.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mt.DEFAULT_COLLECTION_PERCENTILE=10,Mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Mt.DEFAULT=new Mt(41943040,Mt.DEFAULT_COLLECTION_PERCENTILE,Mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Mt.DISABLED=new Mt(-1,0,0);class _l{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.Dn={}}static ct(e,n,r,i){G(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new _l(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return fr(e).Y({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=us(e),o=fr(e);return o.add({}).next(a=>{G(typeof a=="number");const c=new Zf(a,n,r,i),u=function(f,v,I){const w=I.baseMutations.map(V=>Aa(f.ut,V)),S=I.mutations.map(V=>Aa(f.ut,V));return{userId:v,batchId:I.batchId,localWriteTimeMs:I.localWriteTime.toMillis(),baseMutations:w,mutations:S}}(this.serializer,this.userId,c),l=[];let h=new Ae((d,f)=>re(d.canonicalString(),f.canonicalString()));for(const d of i){const f=bw(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),l.push(o.put(u)),l.push(s.put(f,Kx))}return h.forEach(d=>{l.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.Dn[a]=c.keys()}),g.waitFor(l).next(()=>c)})}lookupMutationBatch(e,n){return fr(e).get(n).next(r=>r?(G(r.userId===this.userId),oi(this.serializer,r)):null)}Cn(e,n){return this.Dn[n]?g.resolve(this.Dn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Dn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return fr(e).Y({index:"userMutationsIndex",range:i},(o,a,c)=>{a.userId===this.userId&&(G(a.batchId>=r),s=oi(this.serializer,a)),c.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return fr(e).Y({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return fr(e).W("userMutationsIndex",n).next(r=>r.map(i=>oi(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=Nc(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return us(e).Y({range:i},(o,a,c)=>{const[u,l,h]=o,d=Dn(l);if(u===this.userId&&n.path.isEqual(d))return fr(e).get(h).next(f=>{if(!f)throw q();G(f.userId===this.userId),s.push(oi(this.serializer,f))});c.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ae(re);const i=[];return n.forEach(s=>{const o=Nc(this.userId,s.path),a=IDBKeyRange.lowerBound(o),c=us(e).Y({range:a},(u,l,h)=>{const[d,f,v]=u,I=Dn(f);d===this.userId&&s.path.isEqual(I)?r=r.add(v):h.done()});i.push(c)}),g.waitFor(i).next(()=>this.vn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=Nc(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new Ae(re);return us(e).Y({range:o},(c,u,l)=>{const[h,d,f]=c,v=Dn(d);h===this.userId&&r.isPrefixOf(v)?v.length===i&&(a=a.add(f)):l.done()}).next(()=>this.vn(e,a))}vn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(fr(e).get(s).next(o=>{if(o===null)throw q();G(o.userId===this.userId),r.push(oi(this.serializer,o))}))}),g.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return EE(e.ae,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.Fn(n.batchId)}),g.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Fn(e){delete this.Dn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return g.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return us(e).Y({range:r},(s,o,a)=>{if(s[0]===this.userId){const c=Dn(s[1]);i.push(c)}else a.done()}).next(()=>{G(i.length===0)})})}containsKey(e,n){return TE(e,this.userId,n)}Mn(e){return AE(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function TE(t,e,n){const r=Nc(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return us(t).Y({range:s,J:!0},(a,c,u)=>{const[l,h,d]=a;l===e&&h===i&&(o=!0),u.done()}).next(()=>o)}function fr(t){return ot(t,"mutations")}function us(t){return ot(t,"documentMutations")}function AE(t){return ot(t,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new xi(0)}static Nn(){return new xi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oV{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.Bn(e).next(n=>{const r=new xi(n.highestTargetId);return n.highestTargetId=r.next(),this.Ln(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Bn(e).next(n=>K.fromTimestamp(new Oe(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Bn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.Bn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.Ln(e,i)))}addTargetData(e,n){return this.kn(e,n).next(()=>this.Bn(e).next(r=>(r.targetCount+=1,this.qn(n,r),this.Ln(e,r))))}updateTargetData(e,n){return this.kn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>ns(e).delete(n.targetId)).next(()=>this.Bn(e)).next(r=>(G(r.targetCount>0),r.targetCount-=1,this.Ln(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return ns(e).Y((o,a)=>{const c=Do(a);c.sequenceNumber<=n&&r.get(c.targetId)===null&&(i++,s.push(this.removeTargetData(e,c)))}).next(()=>g.waitFor(s)).next(()=>i)}forEachTarget(e,n){return ns(e).Y((r,i)=>{const s=Do(i);n(s)})}Bn(e){return u_(e).get("targetGlobalKey").next(n=>(G(n!==null),n))}Ln(e,n){return u_(e).put("targetGlobalKey",n)}kn(e,n){return ns(e).put(vE(this.serializer,n))}qn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Bn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=Si(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return ns(e).Y({range:i,index:"queryTargetsIndex"},(o,a,c)=>{const u=Do(a);Qa(n,u.target)&&(s=u,c.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=Ir(e);return n.forEach(o=>{const a=xt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),g.waitFor(i)}removeMatchingKeys(e,n,r){const i=Ir(e);return g.forEach(n,s=>{const o=xt(s.path);return g.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=Ir(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=Ir(e);let s=oe();return i.Y({range:r,J:!0},(o,a,c)=>{const u=Dn(o[1]),l=new O(u);s=s.add(l)}).next(()=>s)}containsKey(e,n){const r=xt(n.path),i=IDBKeyRange.bound([r],[vw(r)],!1,!0);let s=0;return Ir(e).Y({index:"documentTargetsIndex",J:!0,range:i},([o,a],c,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}_t(e,n){return ns(e).get(n).next(r=>r?Do(r):null)}}function ns(t){return ot(t,"targets")}function u_(t){return ot(t,"targetGlobal")}function Ir(t){return ot(t,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l_([t,e],[n,r]){const i=re(t,n);return i===0?re(e,r):i}class aV{constructor(e){this.Qn=e,this.buffer=new Ae(l_),this.Kn=0}$n(){return++this.Kn}Un(e){const n=[e,this.$n()];if(this.buffer.size<this.Qn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();l_(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class cV{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Wn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Gn(6e4)}stop(){this.Wn&&(this.Wn.cancel(),this.Wn=null)}get started(){return this.Wn!==null}Gn(e){R("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Wn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Wn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Hr(n)?R("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Kr(n)}await this.Gn(3e5)})}}class uV{constructor(e,n){this.zn=e,this.params=n}calculateTargetCount(e,n){return this.zn.jn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return g.resolve(Ft._e);const r=new aV(n);return this.zn.forEachTarget(e,i=>r.Un(i.sequenceNumber)).next(()=>this.zn.Hn(e,i=>r.Un(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.zn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(R("LruGarbageCollector","Garbage collection skipped; disabled"),g.resolve(c_)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(R("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),c_):this.Jn(e,n))}getCacheSize(e){return this.zn.getCacheSize(e)}Jn(e,n){let r,i,s,o,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(R("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,n))).next(h=>(s=h,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),ss()<=ce.DEBUG&&R("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-l}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(u-c)+`ms
Total Duration: ${u-l}ms`),g.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}function lV(t,e){return new uV(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hV{constructor(e,n){this.db=e,this.garbageCollector=lV(this,n)}jn(e){const n=this.Yn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Yn(e){let n=0;return this.Hn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Hn(e,n){return this.Zn(e,(r,i)=>n(i))}addReference(e,n,r){return Ec(e,r)}removeReference(e,n,r){return Ec(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return Ec(e,n)}Xn(e,n){return function(i,s){let o=!1;return AE(i).Z(a=>TE(i,a,s).next(c=>(c&&(o=!0),g.resolve(!c)))).next(()=>o)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Zn(e,(o,a)=>{if(a<=n){const c=this.Xn(e,o).next(u=>{if(!u)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,K.min()),Ir(e).delete(function(h){return[0,xt(h.path)]}(o))))});i.push(c)}}).next(()=>g.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return Ec(e,n)}Zn(e,n){const r=Ir(e);let i,s=Ft._e;return r.Y({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:u})=>{o===0?(s!==Ft._e&&n(new O(Dn(i)),s),s=u,i=c):s=Ft._e}).next(()=>{s!==Ft._e&&n(new O(Dn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Ec(t,e){return Ir(t).put(function(r,i){return{targetId:0,path:xt(r.path),sequenceNumber:i}}(e,t.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(){this.changes=new Qr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ce.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?g.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dV{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return ei(e).put(r)}removeEntry(e,n,r){return ei(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],pu(o),a[a.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.er(e,r)))}getEntry(e,n){let r=Ce.newInvalidDocument(n);return ei(e).Y({index:"documentKeyIndex",range:IDBKeyRange.only(wo(n))},(i,s)=>{r=this.tr(n,s)}).next(()=>r)}nr(e,n){let r={size:0,document:Ce.newInvalidDocument(n)};return ei(e).Y({index:"documentKeyIndex",range:IDBKeyRange.only(wo(n))},(i,s)=>{r={document:this.tr(n,s),size:gu(s)}}).next(()=>r)}getEntries(e,n){let r=Bt();return this.rr(e,n,(i,s)=>{const o=this.tr(i,s);r=r.insert(i,o)}).next(()=>r)}ir(e,n){let r=Bt(),i=new Re(O.comparator);return this.rr(e,n,(s,o)=>{const a=this.tr(s,o);r=r.insert(s,a),i=i.insert(s,gu(o))}).next(()=>({documents:r,sr:i}))}rr(e,n,r){if(n.isEmpty())return g.resolve();let i=new Ae(f_);n.forEach(c=>i=i.add(c));const s=IDBKeyRange.bound(wo(i.first()),wo(i.last())),o=i.getIterator();let a=o.getNext();return ei(e).Y({index:"documentKeyIndex",range:s},(c,u,l)=>{const h=O.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&f_(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?l.U(wo(a)):l.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i,s){const o=n.path,a=[o.popLast().toArray(),o.lastSegment(),pu(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],c=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return ei(e).W(IDBKeyRange.bound(a,c,!0)).next(u=>{s==null||s.incrementDocumentReadCount(u.length);let l=Bt();for(const h of u){const d=this.tr(O.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);d.isFoundDocument()&&(Ja(n,d)||i.has(d.key))&&(l=l.insert(d.key,d))}return l})}getAllFromCollectionGroup(e,n,r,i){let s=Bt();const o=d_(n,r),a=d_(n,Yt.max());return ei(e).Y({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,u,l)=>{const h=this.tr(O.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(h.key,h),s.size===i&&l.done()}).next(()=>s)}newChangeBuffer(e){return new fV(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return h_(e).get("remoteDocumentGlobalKey").next(n=>(G(!!n),n))}er(e,n){return h_(e).put("remoteDocumentGlobalKey",n)}tr(e,n){if(n){const r=JN(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(K.min())))return r}return Ce.newInvalidDocument(e)}}function RE(t){return new dV(t)}class fV extends bE{constructor(e,n){super(),this._r=e,this.trackRemovals=n,this.ar=new Qr(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new Ae((s,o)=>re(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.ar.get(s);if(n.push(this._r.removeEntry(e,s,a.readTime)),o.isValidDocument()){const c=Jg(this._r.serializer,o);i=i.add(s.path.popLast()),r+=gu(c)-a.size,n.push(this._r.addEntry(e,s,c))}else if(r-=a.size,this.trackRemovals){const c=Jg(this._r.serializer,o.convertToNoDocument(K.min()));n.push(this._r.addEntry(e,s,c))}}),i.forEach(s=>{n.push(this._r.indexManager.addToCollectionParentIndex(e,s))}),n.push(this._r.updateMetadata(e,r)),g.waitFor(n)}getFromCache(e,n){return this._r.nr(e,n).next(r=>(this.ar.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this._r.ir(e,n).next(({documents:r,sr:i})=>(i.forEach((s,o)=>{this.ar.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function h_(t){return ot(t,"remoteDocumentGlobal")}function ei(t){return ot(t,"remoteDocumentsV14")}function wo(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function d_(t,e){const n=e.documentKey.path.toArray();return[t,pu(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function f_(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=re(n[s],r[s]),i)return i;return i=re(n.length,r.length),i||(i=re(n[n.length-2],r[r.length-2]),i||re(n[n.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pV{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&jo(r.mutation,i,Ut.empty(),Oe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,oe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=oe()){const i=xn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Co();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=xn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,oe()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Bt();const o=qo(),a=function(){return qo()}();return n.forEach((c,u)=>{const l=r.get(u.key);i.has(u.key)&&(l===void 0||l.mutation instanceof or)?s=s.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),jo(l.mutation,u,l.mutation.getFieldMask(),Oe.now())):o.set(u.key,Ut.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new pV(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=qo();let i=new Re((o,a)=>o-a),s=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=r.get(c)||Ut.empty();l=a.applyToLocalView(u,l),r.set(c,l);const h=(i.get(a.batchId)||oe()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=zw();l.forEach(d=>{if(!s.has(d)){const f=eE(n.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return g.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return O.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Yf(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):g.resolve(xn());let a=-1,c=s;return o.next(u=>g.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(l)?g.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,c,u,oe())).next(l=>({batchId:a,changes:Gw(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new O(n)).next(r=>{let i=Co();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Co();return this.indexManager.getCollectionParents(e,s).next(a=>g.forEach(a,c=>{const u=function(h,d){return new sr(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(l=>{l.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((c,u)=>{const l=u.getKey();o.get(l)===null&&(o=o.insert(l,Ce.newInvalidDocument(l)))});let a=Co();return o.forEach((c,u)=>{const l=s.get(c);l!==void 0&&jo(l.mutation,u,Ut.empty(),Oe.now()),Ja(n,u)&&(a=a.insert(c,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mV{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return g.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(i){return{id:i.id,version:i.version,createTime:ze(i.createTime)}}(n)),g.resolve()}getNamedQuery(e,n){return g.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(i){return{name:i.name,query:ip(i.bundledQuery),readTime:ze(i.readTime)}}(n)),g.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gV{constructor(){this.overlays=new Re(O.comparator),this.lr=new Map}getOverlay(e,n){return g.resolve(this.overlays.get(n))}getOverlays(e,n){const r=xn();return g.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.lt(e,n,s)}),g.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.lr.delete(r)),g.resolve()}getOverlaysForCollection(e,n,r){const i=xn(),s=n.length+1,o=new O(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return g.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Re((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let l=s.get(u.largestBatchId);l===null&&(l=xn(),s=s.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=xn(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=i)););return g.resolve(a)}lt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new tp(n,r));let s=this.lr.get(n);s===void 0&&(s=oe(),this.lr.set(n,s)),this.lr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(){this.hr=new Ae(et.Pr),this.Ir=new Ae(et.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const r=new et(e,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.dr(new et(e,n))}Ar(e,n){e.forEach(r=>this.removeReference(r,n))}Rr(e){const n=new O(new fe([])),r=new et(n,e),i=new et(n,e+1),s=[];return this.Ir.forEachInRange([r,i],o=>{this.dr(o),s.push(o.key)}),s}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new O(new fe([])),r=new et(n,e),i=new et(n,e+1);let s=oe();return this.Ir.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new et(e,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class et{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return O.comparator(e.key,n.key)||re(e.gr,n.gr)}static Tr(e,n){return re(e.gr,n.gr)||O.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _V{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new Ae(et.Pr)}checkEmpty(e){return g.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Zf(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.yr=this.yr.add(new et(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return g.resolve(o)}lookupMutationBatch(e,n){return g.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Sr(r),s=i<0?0:i;return g.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return g.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return g.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new et(n,0),i=new et(n,Number.POSITIVE_INFINITY),s=[];return this.yr.forEachInRange([r,i],o=>{const a=this.wr(o.gr);s.push(a)}),g.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ae(re);return n.forEach(i=>{const s=new et(i,0),o=new et(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([s,o],a=>{r=r.add(a.gr)})}),g.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;O.isDocumentKey(s)||(s=s.child(""));const o=new et(new O(s),0);let a=new Ae(re);return this.yr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.gr)),!0)},o),g.resolve(this.br(a))}br(e){const n=[];return e.forEach(r=>{const i=this.wr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){G(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return g.forEach(n.mutations,i=>{const s=new et(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,n){const r=new et(n,0),i=this.yr.firstAfterOrEqual(r);return g.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,g.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yV{constructor(e){this.Cr=e,this.docs=function(){return new Re(O.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return g.resolve(r?r.document.mutableCopy():Ce.newInvalidDocument(n))}getEntries(e,n){let r=Bt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ce.newInvalidDocument(i))}),g.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Bt();const o=n.path,a=new O(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||zf(ww(l),r)<=0||(i.has(l.key)||Ja(n,l))&&(s=s.insert(l.key,l.mutableCopy()))}return g.resolve(s)}getAllFromCollectionGroup(e,n,r,i){q()}vr(e,n){return g.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new vV(this)}getSize(e){return g.resolve(this.size)}}class vV extends bE{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this._r.addEntry(e,i)):this._r.removeEntry(r)}),g.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IV{constructor(e){this.persistence=e,this.Fr=new Qr(n=>Si(n),Qa),this.lastRemoteSnapshotVersion=K.min(),this.highestTargetId=0,this.Mr=0,this.Or=new ap,this.targetCount=0,this.Nr=xi.On()}forEachTarget(e,n){return this.Fr.forEach((r,i)=>n(i)),g.resolve()}getLastRemoteSnapshotVersion(e){return g.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return g.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),g.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),g.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new xi(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,g.resolve()}updateTargetData(e,n){return this.kn(n),g.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,g.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),g.waitFor(s).next(()=>i)}getTargetCount(e){return g.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fr.get(n)||null;return g.resolve(r)}addMatchingKeys(e,n,r){return this.Or.Er(n,r),g.resolve()}removeMatchingKeys(e,n,r){this.Or.Ar(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),g.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),g.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Or.mr(n);return g.resolve(r)}containsKey(e,n){return g.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(e,n){this.Br={},this.overlays={},this.Lr=new Ft(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new IV(this),this.indexManager=new iV,this.remoteDocumentCache=function(i){return new yV(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new yE(n),this.Kr=new mV(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new gV,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new _V(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,r){R("MemoryPersistence","Starting transaction:",e);const i=new wV(this.Lr.next());return this.referenceDelegate.$r(),r(i).next(s=>this.referenceDelegate.Ur(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Wr(e,n){return g.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class wV extends Tw{constructor(e){super(),this.currentSequenceNumber=e}}class yl{constructor(e){this.persistence=e,this.Gr=new ap,this.zr=null}static jr(e){return new yl(e)}get Hr(){if(this.zr)return this.zr;throw q()}addReference(e,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),g.resolve()}removeReference(e,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),g.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),g.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Hr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return g.forEach(this.Hr,r=>{const i=O.fromPath(r);return this.Jr(e,i).next(s=>{s||n.removeEntry(i,K.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return g.or([()=>g.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EV{constructor(e){this.serializer=e}N(e,n,r,i){const s=new dl("createOrUpgrade",n);r<1&&i>=1&&(function(c){c.createObjectStore("owner")}(e),function(c){c.createObjectStore("mutationQueues",{keyPath:"userId"}),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Pg,{unique:!0}),c.createObjectStore("documentMutations")}(e),p_(e),function(c){c.createObjectStore("remoteDocuments")}(e));let o=g.resolve();return r<3&&i>=3&&(r!==0&&(function(c){c.deleteObjectStore("targetDocuments"),c.deleteObjectStore("targets"),c.deleteObjectStore("targetGlobal")}(e),p_(e)),o=o.next(()=>function(c){const u=c.store("targetGlobal"),l={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:K.min().toTimestamp(),targetCount:0};return u.put("targetGlobalKey",l)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(c,u){return u.store("mutations").W().next(l=>{c.deleteObjectStore("mutations"),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Pg,{unique:!0});const h=u.store("mutations"),d=l.map(f=>h.put(f));return g.waitFor(d)})}(e,s))),o=o.next(()=>{(function(c){c.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Zr(s))),r<6&&i>=6&&(o=o.next(()=>(function(c){c.createObjectStore("remoteDocumentGlobal")}(e),this.Xr(s)))),r<7&&i>=7&&(o=o.next(()=>this.ei(s))),r<8&&i>=8&&(o=o.next(()=>this.ti(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(c){c.objectStoreNames.contains("remoteDocumentChanges")&&c.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ni(s))),r<11&&i>=11&&(o=o.next(()=>{(function(c){c.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(c){c.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(c){const u=c.createObjectStore("documentOverlays",{keyPath:sN});u.createIndex("collectionPathOverlayIndex",oN,{unique:!1}),u.createIndex("collectionGroupOverlayIndex",aN,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(c){const u=c.createObjectStore("remoteDocumentsV14",{keyPath:Hx});u.createIndex("documentKeyIndex",Qx),u.createIndex("collectionGroupIndex",Yx)}(e)).next(()=>this.ri(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.ii(e,s))),r<15&&i>=15&&(o=o.next(()=>function(c){c.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),c.createObjectStore("indexState",{keyPath:tN}).createIndex("sequenceNumberIndex",nN,{unique:!1}),c.createObjectStore("indexEntries",{keyPath:rN}).createIndex("documentKeyIndex",iN,{unique:!1})}(e))),o}Xr(e){let n=0;return e.store("remoteDocuments").Y((r,i)=>{n+=gu(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Zr(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.W().next(i=>g.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.W("userMutationsIndex",o).next(a=>g.forEach(a,c=>{G(c.userId===s.userId);const u=oi(this.serializer,c);return EE(e,s.userId,u).next(()=>{})}))}))}ei(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.Y((o,a)=>{const c=new fe(o),u=function(h){return[0,xt(h)]}(c);s.push(n.get(u).next(l=>l?g.resolve():(h=>n.put({targetId:0,path:xt(h),sequenceNumber:i.highestListenSequenceNumber}))(c)))}).next(()=>g.waitFor(s))})}ti(e,n){e.createObjectStore("collectionParents",{keyPath:eN});const r=n.store("collectionParents"),i=new op,s=o=>{if(i.add(o)){const a=o.lastSegment(),c=o.popLast();return r.put({collectionId:a,parent:xt(c)})}};return n.store("remoteDocuments").Y({J:!0},(o,a)=>{const c=new fe(o);return s(c.popLast())}).next(()=>n.store("documentMutations").Y({J:!0},([o,a,c],u)=>{const l=Dn(a);return s(l.popLast())}))}ni(e){const n=e.store("targets");return n.Y((r,i)=>{const s=Do(i),o=vE(this.serializer,s);return n.put(o)})}ri(e,n){const r=n.store("remoteDocuments"),i=[];return r.Y((s,o)=>{const a=n.store("remoteDocumentsV14"),c=function(h){return h.document?new O(fe.fromString(h.document.name).popFirst(5)):h.noDocument?O.fromSegments(h.noDocument.path):h.unknownDocument?O.fromSegments(h.unknownDocument.path):q()}(o).path.toArray(),u={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(u))}).next(()=>g.waitFor(i))}ii(e,n){const r=n.store("mutations"),i=RE(this.serializer),s=new PE(yl.jr,this.serializer.ut);return r.W().next(o=>{const a=new Map;return o.forEach(c=>{var u;let l=(u=a.get(c.userId))!==null&&u!==void 0?u:oe();oi(this.serializer,c).keys().forEach(h=>l=l.add(h)),a.set(c.userId,l)}),g.forEach(a,(c,u)=>{const l=new tt(u),h=gl.ct(this.serializer,l),d=s.getIndexManager(l),f=_l.ct(l,this.serializer,d,s.referenceDelegate);return new SE(i,f,h,d).recalculateAndSaveOverlaysForDocumentKeys(new ed(n,Ft._e),c).next()})})}}function p_(t){t.createObjectStore("targetDocuments",{keyPath:Xx}).createIndex("documentTargetsIndex",Zx,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",Jx,{unique:!0}),t.createObjectStore("targetGlobal")}const uh="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class cp{constructor(e,n,r,i,s,o,a,c,u,l,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.si=s,this.window=o,this.document=a,this.oi=u,this._i=l,this.ai=h,this.Lr=null,this.kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ui=null,this.inForeground=!1,this.ci=null,this.li=null,this.hi=Number.NEGATIVE_INFINITY,this.Pi=d=>Promise.resolve(),!cp.D())throw new b(y.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new hV(this,i),this.Ii=n+"main",this.serializer=new yE(c),this.Ti=new an(this.Ii,this.ai,new EV(this.serializer)),this.qr=new oV(this.referenceDelegate,this.serializer),this.remoteDocumentCache=RE(this.serializer),this.Kr=new XN,this.window&&this.window.localStorage?this.Ei=this.window.localStorage:(this.Ei=null,l===!1&&We("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.di().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new b(y.FAILED_PRECONDITION,uh);return this.Ai(),this.Ri(),this.Vi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.qr.getHighestSequenceNumber(e))}).then(e=>{this.Lr=new Ft(e,this.oi)}).then(()=>{this.kr=!0}).catch(e=>(this.Ti&&this.Ti.close(),Promise.reject(e)))}mi(e){return this.Pi=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ti.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.si.enqueueAndForget(async()=>{this.started&&await this.di()}))}di(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Tc(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.fi(e).next(n=>{n||(this.isPrimary=!1,this.si.enqueueRetryable(()=>this.Pi(!1)))})}).next(()=>this.gi(e)).next(n=>this.isPrimary&&!n?this.pi(e).next(()=>!1):!!n&&this.yi(e).next(()=>!0))).catch(e=>{if(Hr(e))return R("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return R("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.si.enqueueRetryable(()=>this.Pi(e)),this.isPrimary=e})}fi(e){return Eo(e).get("owner").next(n=>g.resolve(this.wi(n)))}Si(e){return Tc(e).delete(this.clientId)}async bi(){if(this.isPrimary&&!this.Di(this.hi,18e5)){this.hi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=ot(n,"clientMetadata");return r.W().next(i=>{const s=this.Ci(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return g.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ei)for(const n of e)this.Ei.removeItem(this.vi(n.clientId))}}Vi(){this.li=this.si.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.di().then(()=>this.bi()).then(()=>this.Vi()))}wi(e){return!!e&&e.ownerId===this.clientId}gi(e){return this._i?g.resolve(!0):Eo(e).get("owner").next(n=>{if(n!==null&&this.Di(n.leaseTimestampMs,5e3)&&!this.Fi(n.ownerId)){if(this.wi(n)&&this.networkEnabled)return!0;if(!this.wi(n)){if(!n.allowTabSynchronization)throw new b(y.FAILED_PRECONDITION,uh);return!1}}return!(!this.networkEnabled||!this.inForeground)||Tc(e).W().next(r=>this.Ci(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&R("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.kr=!1,this.Mi(),this.li&&(this.li.cancel(),this.li=null),this.xi(),this.Oi(),await this.Ti.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new ed(e,Ft._e);return this.pi(n).next(()=>this.Si(n))}),this.Ti.close(),this.Ni()}Ci(e,n){return e.filter(r=>this.Di(r.updateTimeMs,n)&&!this.Fi(r.clientId))}Bi(){return this.runTransaction("getActiveClients","readonly",e=>Tc(e).W().next(n=>this.Ci(n,18e5).map(r=>r.clientId)))}get started(){return this.kr}getMutationQueue(e,n){return _l.ct(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new sV(e,this.serializer.ut.databaseId)}getDocumentOverlayCache(e){return gl.ct(this.serializer,e)}getBundleCache(){return this.Kr}runTransaction(e,n,r){R("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=function(c){return c===15?uN:c===14?Pw:c===13?Sw:c===12?cN:c===11?Rw:void q()}(this.ai);let o;return this.Ti.runTransaction(e,i,s,a=>(o=new ed(a,this.Lr?this.Lr.next():Ft._e),n==="readwrite-primary"?this.fi(o).next(c=>!!c||this.gi(o)).next(c=>{if(!c)throw We(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.si.enqueueRetryable(()=>this.Pi(!1)),new b(y.FAILED_PRECONDITION,Ew);return r(o)}).next(c=>this.yi(o).next(()=>c)):this.Li(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}Li(e){return Eo(e).get("owner").next(n=>{if(n!==null&&this.Di(n.leaseTimestampMs,5e3)&&!this.Fi(n.ownerId)&&!this.wi(n)&&!(this._i||this.allowTabSynchronization&&n.allowTabSynchronization))throw new b(y.FAILED_PRECONDITION,uh)})}yi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Eo(e).put("owner",n)}static D(){return an.D()}pi(e){const n=Eo(e);return n.get("owner").next(r=>this.wi(r)?(R("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):g.resolve())}Di(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(We(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Ai(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ci=()=>{this.si.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.di()))},this.document.addEventListener("visibilitychange",this.ci),this.inForeground=this.document.visibilityState==="visible")}xi(){this.ci&&(this.document.removeEventListener("visibilitychange",this.ci),this.ci=null)}Ri(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ui=()=>{this.Mi();const n=/(?:Version|Mobile)\/1[456]/;zR()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.si.enterRestrictedMode(!0),this.si.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ui))}Oi(){this.ui&&(this.window.removeEventListener("pagehide",this.ui),this.ui=null)}Fi(e){var n;try{const r=((n=this.Ei)===null||n===void 0?void 0:n.getItem(this.vi(e)))!==null;return R("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return We("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Mi(){if(this.Ei)try{this.Ei.setItem(this.vi(this.clientId),String(Date.now()))}catch(e){We("Failed to set zombie client id.",e)}}Ni(){if(this.Ei)try{this.Ei.removeItem(this.vi(this.clientId))}catch{}}vi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Eo(t){return ot(t,"owner")}function Tc(t){return ot(t,"clientMetadata")}function up(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.ki=r,this.qi=i}static Qi(e,n){let r=oe(),i=oe();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new lp(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TV{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.zi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ji(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new TV;return this.Hi(e,n,o).next(a=>{if(s.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>s.result)}Ji(e,n,r,i){return r.documentReadCount<this.Ui?(ss()<=ce.DEBUG&&R("QueryEngine","SDK will not create cache indexes for query:",os(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),g.resolve()):(ss()<=ce.DEBUG&&R("QueryEngine","Query:",os(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Wi*i?(ss()<=ce.DEBUG&&R("QueryEngine","The SDK decides to create cache indexes for query:",os(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Nt(n))):g.resolve())}zi(e,n){if(Bg(n))return g.resolve(null);let r=Nt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=fu(n,null,"F"),r=Nt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=oe(...s);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.Yi(n,a);return this.Zi(n,u,o,c.readTime)?this.zi(e,fu(n,null,"F")):this.Xi(e,u,n,c)}))})))}ji(e,n,r,i){return Bg(n)||i.isEqual(K.min())?g.resolve(null):this.Gi.getDocuments(e,r).next(s=>{const o=this.Yi(n,s);return this.Zi(n,o,r,i)?g.resolve(null):(ss()<=ce.DEBUG&&R("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),os(n)),this.Xi(e,o,n,Iw(i,-1)).next(a=>a))})}Yi(e,n){let r=new Ae(jw(e));return n.forEach((i,s)=>{Ja(e,s)&&(r=r.add(s))}),r}Zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Hi(e,n,r){return ss()<=ce.DEBUG&&R("QueryEngine","Using full collection scan to execute query:",os(n)),this.Gi.getDocumentsMatchingQuery(e,n,Yt.min(),r)}Xi(e,n,r,i){return this.Gi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AV{constructor(e,n,r,i){this.persistence=e,this.es=n,this.serializer=i,this.ts=new Re(re),this.ns=new Qr(s=>Si(s),Qa),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new SE(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function kE(t,e,n,r){return new AV(t,e,n,r)}async function DE(t,e){const n=M(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=oe();for(const u of i){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of s){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(r,c).next(u=>({_s:u,removedBatchIds:o,addedBatchIds:a}))})})}function bV(t,e){const n=M(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,c,u,l){const h=u.batch,d=h.keys();let f=g.resolve();return d.forEach(v=>{f=f.next(()=>l.getEntry(c,v)).next(I=>{const w=u.docVersions.get(v);G(w!==null),I.version.compareTo(w)<0&&(h.applyToRemoteDocument(I,u),I.isValidDocument()&&(I.setReadTime(u.commitVersion),l.addEntry(I)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=oe();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function xE(t){const e=M(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function RV(t,e){const n=M(t),r=e.snapshotVersion;let i=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});i=n.ts;const a=[];e.targetChanges.forEach((l,h)=>{const d=i.get(h);if(!d)return;a.push(n.qr.removeMatchingKeys(s,l.removedDocuments,h).next(()=>n.qr.addMatchingKeys(s,l.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(Je.EMPTY_BYTE_STRING,K.min()).withLastLimboFreeSnapshotVersion(K.min()):l.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(l.resumeToken,r)),i=i.insert(h,f),function(I,w,S){return I.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-I.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(d,f,l)&&a.push(n.qr.updateTargetData(s,f))});let c=Bt(),u=oe();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(NE(s,o,e.documentUpdates).next(l=>{c=l.us,u=l.cs})),!r.isEqual(K.min())){const l=n.qr.getLastRemoteSnapshotVersion(s).next(h=>n.qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return g.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(n.ts=i,s))}function NE(t,e,n){let r=oe(),i=oe();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Bt();return n.forEach((a,c)=>{const u=s.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(K.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):R("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{us:o,cs:i}})}function SV(t,e){const n=M(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Ms(t,e){const n=M(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.qr.getTargetData(r,e).next(s=>s?(i=s,g.resolve(i)):n.qr.allocateTargetId(r).next(o=>(i=new Kn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(e,r.targetId)),r})}async function Fs(t,e,n){const r=M(t),i=r.ts.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Hr(o))throw o;R("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ts=r.ts.remove(e),r.ns.delete(i.target)}function _u(t,e,n){const r=M(t);let i=K.min(),s=oe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,l){const h=M(c),d=h.ns.get(l);return d!==void 0?g.resolve(h.ts.get(d)):h.qr.getTargetData(u,l)}(r,o,Nt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.es.getDocumentsMatchingQuery(o,e,n?i:K.min(),n?s:oe())).next(a=>(LE(r,qw(e),a),{documents:a,ls:s})))}function VE(t,e){const n=M(t),r=M(n.qr),i=n.ts.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r._t(s,e).next(o=>o?o.target:null))}function OE(t,e){const n=M(t),r=n.rs.get(e)||K.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.ss.getAllFromCollectionGroup(i,e,Iw(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(LE(n,e,i),i))}function LE(t,e,n){let r=t.rs.get(e)||K.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.rs.set(e,r)}async function PV(t,e,n,r){const i=M(t);let s=oe(),o=Bt();for(const u of n){const l=e.hs(u.metadata.name);u.document&&(s=s.add(l));const h=e.Ps(u);h.setReadTime(e.Is(u.metadata.readTime)),o=o.insert(l,h)}const a=i.ss.newChangeBuffer({trackRemovals:!0}),c=await Ms(i,function(l){return Nt(eo(fe.fromString(`__bundle__/docs/${l}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",u=>NE(u,a,o).next(l=>(a.apply(u),l)).next(l=>i.qr.removeMatchingKeysForTargetId(u,c.targetId).next(()=>i.qr.addMatchingKeys(u,s,c.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(u,l.us,l.cs)).next(()=>l.us)))}async function CV(t,e,n=oe()){const r=await Ms(t,Nt(ip(e.bundledQuery))),i=M(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=ze(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Kr.saveNamedQuery(s,e);const a=r.withResumeToken(Je.EMPTY_BYTE_STRING,o);return i.ts=i.ts.insert(a.targetId,a),i.qr.updateTargetData(s,a).next(()=>i.qr.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.qr.addMatchingKeys(s,n,r.targetId)).next(()=>i.Kr.saveNamedQuery(s,e))})}function m_(t,e){return`firestore_clients_${t}_${e}`}function g_(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function lh(t,e){return`firestore_targets_${t}_${e}`}class yu{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static Ts(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new b(i.error.code,i.error.message))),o?new yu(e,n,i.state,s):(We("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}Es(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Wo{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static Ts(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new b(r.error.code,r.error.message))),s?new Wo(e,r.state,i):(We("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}Es(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class vu{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Ts(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=Jf();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=Aw(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new vu(e,s):(We("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class hp{constructor(e,n){this.clientId=e,this.onlineState=n}static Ts(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new hp(n.clientId,n.onlineState):(We("SharedClientState",`Failed to parse online state: ${e}`),null)}}class fd{constructor(){this.activeTargetIds=Jf()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class hh{constructor(e,n,r,i,s){this.window=e,this.si=n,this.persistenceKey=r,this.Rs=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Vs=this.fs.bind(this),this.gs=new Re(re),this.started=!1,this.ps=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.ys=m_(this.persistenceKey,this.Rs),this.ws=function(c){return`firestore_sequence_number_${c}`}(this.persistenceKey),this.gs=this.gs.insert(this.Rs,new fd),this.Ss=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.bs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ds=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.Cs=function(c){return`firestore_online_state_${c}`}(this.persistenceKey),this.vs=function(c){return`firestore_bundle_loaded_v2_${c}`}(this.persistenceKey),this.window.addEventListener("storage",this.Vs)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Bi();for(const r of e){if(r===this.Rs)continue;const i=this.getItem(m_(this.persistenceKey,r));if(i){const s=vu.Ts(r,i);s&&(this.gs=this.gs.insert(s.clientId,s))}}this.Fs();const n=this.storage.getItem(this.Cs);if(n){const r=this.Ms(n);r&&this.xs(r)}for(const r of this.ps)this.fs(r);this.ps=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.ws,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Os(this.gs)}isActiveQueryTarget(e){let n=!1;return this.gs.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Ns(e,"pending")}updateMutationState(e,n,r){this.Ns(e,n,r),this.Bs(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(lh(this.persistenceKey,e));if(r){const i=Wo.Ts(e,r);i&&(n=i.state)}}return this.Ls.ds(e),this.Fs(),n}removeLocalQueryTarget(e){this.Ls.As(e),this.Fs()}isLocalQueryTarget(e){return this.Ls.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(lh(this.persistenceKey,e))}updateQueryState(e,n,r){this.ks(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Bs(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.qs(e)}notifyBundleLoaded(e){this.Qs(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Vs),this.removeItem(this.ys),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return R("SharedClientState","READ",e,n),n}setItem(e,n){R("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){R("SharedClientState","REMOVE",e),this.storage.removeItem(e)}fs(e){const n=e;if(n.storageArea===this.storage){if(R("SharedClientState","EVENT",n.key,n.newValue),n.key===this.ys)return void We("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.si.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.Ss.test(n.key)){if(n.newValue==null){const r=this.Ks(n.key);return this.$s(r,null)}{const r=this.Us(n.key,n.newValue);if(r)return this.$s(r.clientId,r)}}else if(this.bs.test(n.key)){if(n.newValue!==null){const r=this.Ws(n.key,n.newValue);if(r)return this.Gs(r)}}else if(this.Ds.test(n.key)){if(n.newValue!==null){const r=this.zs(n.key,n.newValue);if(r)return this.js(r)}}else if(n.key===this.Cs){if(n.newValue!==null){const r=this.Ms(n.newValue);if(r)return this.xs(r)}}else if(n.key===this.ws){const r=function(s){let o=Ft._e;if(s!=null)try{const a=JSON.parse(s);G(typeof a=="number"),o=a}catch(a){We("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(n.newValue);r!==Ft._e&&this.sequenceNumberHandler(r)}else if(n.key===this.vs){const r=this.Hs(n.newValue);await Promise.all(r.map(i=>this.syncEngine.Js(i)))}}}else this.ps.push(n)})}}get Ls(){return this.gs.get(this.Rs)}Fs(){this.setItem(this.ys,this.Ls.Es())}Ns(e,n,r){const i=new yu(this.currentUser,e,n,r),s=g_(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Es())}Bs(e){const n=g_(this.persistenceKey,this.currentUser,e);this.removeItem(n)}qs(e){const n={clientId:this.Rs,onlineState:e};this.storage.setItem(this.Cs,JSON.stringify(n))}ks(e,n,r){const i=lh(this.persistenceKey,e),s=new Wo(e,n,r);this.setItem(i,s.Es())}Qs(e){const n=JSON.stringify(Array.from(e));this.setItem(this.vs,n)}Ks(e){const n=this.Ss.exec(e);return n?n[1]:null}Us(e,n){const r=this.Ks(e);return vu.Ts(r,n)}Ws(e,n){const r=this.bs.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return yu.Ts(new tt(s),i,n)}zs(e,n){const r=this.Ds.exec(e),i=Number(r[1]);return Wo.Ts(i,n)}Ms(e){return hp.Ts(e)}Hs(e){return JSON.parse(e)}async Gs(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Ys(e.batchId,e.state,e.error);R("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}js(e){return this.syncEngine.Zs(e.targetId,e.state,e.error)}$s(e,n){const r=n?this.gs.insert(e,n):this.gs.remove(e),i=this.Os(this.gs),s=this.Os(r),o=[],a=[];return s.forEach(c=>{i.has(c)||o.push(c)}),i.forEach(c=>{s.has(c)||a.push(c)}),this.syncEngine.Xs(o,a).then(()=>{this.gs=r})}xs(e){this.gs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Os(e){let n=Jf();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class ME{constructor(){this.eo=new fd,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,r){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new fd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kV{ro(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){R("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){R("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ac=null;function dh(){return Ac===null?Ac=function(){return 268435456+Math.round(2147483648*Math.random())}():Ac++,"0x"+Ac.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DV={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xV{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t="WebChannelConnection";class NV extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${i}/databases/${s}`,this.po=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get yo(){return!1}wo(n,r,i,s,o){const a=dh(),c=this.So(n,r);R("RestConnection",`Sending RPC '${n}' ${a}:`,c,i);const u={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(u,s,o),this.Do(n,c,u,i).then(l=>(R("RestConnection",`Received RPC '${n}' ${a}: `,l),l),l=>{throw fn("RestConnection",`RPC '${n}' ${a} failed with error: `,l,"url: ",c,"request:",i),l})}Co(n,r,i,s,o,a){return this.wo(n,r,i,s,o)}bo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Zs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}So(n,r){const i=DV[n];return`${this.mo}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,n,r,i){const s=dh();return new Promise((o,a)=>{const c=new Cx;c.setWithCredentials(!0),c.listenOnce(Sx.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case ah.NO_ERROR:const l=c.getResponseJson();R(_t,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(l)),o(l);break;case ah.TIMEOUT:R(_t,`RPC '${e}' ${s} timed out`),a(new b(y.DEADLINE_EXCEEDED,"Request time out"));break;case ah.HTTP_ERROR:const h=c.getStatus();if(R(_t,`RPC '${e}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const v=function(w){const S=w.toLowerCase().replace(/_/g,"-");return Object.values(y).indexOf(S)>=0?S:y.UNKNOWN}(f.status);a(new b(v,f.message))}else a(new b(y.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new b(y.UNAVAILABLE,"Connection failed."));break;default:q()}}finally{R(_t,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);R(_t,`RPC '${e}' ${s} sending request:`,i),c.send(n,"POST",u,r,15)})}vo(e,n,r){const i=dh(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=bx(),a=Rx(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.bo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const l=s.join("");R(_t,`Creating RPC '${e}' stream ${i}: ${l}`,c);const h=o.createWebChannel(l,c);let d=!1,f=!1;const v=new xV({co:w=>{f?R(_t,`Not sending because RPC '${e}' stream ${i} is closed:`,w):(d||(R(_t,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),R(_t,`RPC '${e}' stream ${i} sending:`,w),h.send(w))},lo:()=>h.close()}),I=(w,S,V)=>{w.listen(S,N=>{try{V(N)}catch(H){setTimeout(()=>{throw H},0)}})};return I(h,vc.EventType.OPEN,()=>{f||R(_t,`RPC '${e}' stream ${i} transport opened.`)}),I(h,vc.EventType.CLOSE,()=>{f||(f=!0,R(_t,`RPC '${e}' stream ${i} transport closed`),v.Ro())}),I(h,vc.EventType.ERROR,w=>{f||(f=!0,fn(_t,`RPC '${e}' stream ${i} transport errored:`,w),v.Ro(new b(y.UNAVAILABLE,"The operation could not be completed")))}),I(h,vc.EventType.MESSAGE,w=>{var S;if(!f){const V=w.data[0];G(!!V);const N=V,H=N.error||((S=N[0])===null||S===void 0?void 0:S.error);if(H){R(_t,`RPC '${e}' stream ${i} received error:`,H);const ee=H.status;let $=function(Jt){const At=Ke[Jt];if(At!==void 0)return rE(At)}(ee),he=H.message;$===void 0&&($=y.INTERNAL,he="Unknown error status: "+ee+" with message "+H.message),f=!0,v.Ro(new b($,he)),h.close()}else R(_t,`RPC '${e}' stream ${i} received:`,V),v.Vo(V)}}),I(a,Px.STAT_EVENT,w=>{w.stat===Ag.PROXY?R(_t,`RPC '${e}' stream ${i} detected buffering proxy`):w.stat===Ag.NOPROXY&&R(_t,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{v.Ao()},0),v}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FE(){return typeof window!="undefined"?window:null}function Fc(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tc(t){return new $N(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(e,n,r=1e3,i=1.5,s=6e4){this.si=e,this.timerId=n,this.Fo=r,this.Mo=i,this.xo=s,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-r);i>0&&R("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{constructor(e,n,r,i,s,o,a,c){this.si=e,this.Ko=r,this.$o=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new dp(e,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():n&&n.code===y.RESOURCE_EXHAUSTED?(We(n.toString()),We("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===y.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(n)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Uo===n&&this.s_(r,i)},r=>{e(()=>{const i=new b(y.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(i)})})}s_(e,n){const r=this.i_(this.Uo);this.stream=this.__(e,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(i=>{r(()=>this.o_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return R("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return n=>{this.si.enqueueAndForget(()=>this.Uo===e?n():(R("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class VV extends UE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}__(e,n){return this.connection.vo("Listen",e,n)}onMessage(e){this.zo.reset();const n=WN(this.serializer,e),r=function(s){if(!("targetChange"in s))return K.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?K.min():o.readTime?ze(o.readTime):K.min()}(e);return this.listener.a_(n,r)}u_(e){const n={};n.database=Ta(this.serializer),n.addTarget=function(s,o){let a;const c=o.target;if(a=hu(c)?{documents:dE(s,c)}:{query:fE(s,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=aE(s,o.resumeToken);const u=ad(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(K.min())>0){a.readTime=Ls(s,o.snapshotVersion.toTimestamp());const u=ad(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=zN(this.serializer,e);r&&(n.labels=r),this.e_(n)}c_(e){const n={};n.database=Ta(this.serializer),n.removeTarget=e,this.e_(n)}}class OV extends UE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,n){return this.connection.vo("Write",e,n)}onMessage(e){if(G(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const n=GN(e.writeResults,e.commitTime),r=ze(e.commitTime);return this.listener.I_(r,n)}return G(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=Ta(this.serializer),this.e_(e)}P_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Aa(this.serializer,r))};this.e_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LV extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.d_=!1}A_(){if(this.d_)throw new b(y.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.wo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new b(y.UNKNOWN,i.toString())})}Co(e,n,r,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new b(y.UNKNOWN,s.toString())})}terminate(){this.d_=!0}}class MV{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(We(n),this.f_=!1):R("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FV{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=s,this.F_.ro(o=>{r.enqueueAndForget(async()=>{Yr(this)&&(R("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=M(c);u.C_.add(4),await ro(u),u.M_.set("Unknown"),u.C_.delete(4),await nc(u)}(this))})}),this.M_=new MV(r,i)}}async function nc(t){if(Yr(t))for(const e of t.v_)await e(!0)}async function ro(t){for(const e of t.v_)await e(!1)}function vl(t,e){const n=M(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),mp(n)?pp(n):so(n).Ho()&&fp(n,e))}function ba(t,e){const n=M(t),r=so(n);n.D_.delete(e),r.Ho()&&BE(n,e),n.D_.size===0&&(r.Ho()?r.Zo():Yr(n)&&n.M_.set("Unknown"))}function fp(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(K.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}so(t).u_(e)}function BE(t,e){t.x_.Oe(e),so(t).c_(e)}function pp(t){t.x_=new MN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),so(t).start(),t.M_.g_()}function mp(t){return Yr(t)&&!so(t).jo()&&t.D_.size>0}function Yr(t){return M(t).C_.size===0}function $E(t){t.x_=void 0}async function UV(t){t.D_.forEach((e,n)=>{fp(t,e)})}async function BV(t,e){$E(t),mp(t)?(t.M_.w_(e),pp(t)):t.M_.set("Unknown")}async function $V(t,e,n){if(t.M_.set("Online"),e instanceof oE&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.D_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.D_.delete(a),i.x_.removeTarget(a))}(t,e)}catch(r){R("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Iu(t,r)}else if(e instanceof Mc?t.x_.$e(e):e instanceof sE?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(K.min()))try{const r=await xE(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.x_.it(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const l=s.D_.get(u);l&&s.D_.set(u,l.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const l=s.D_.get(c);if(!l)return;s.D_.set(c,l.withResumeToken(Je.EMPTY_BYTE_STRING,l.snapshotVersion)),BE(s,c);const h=new Kn(l.target,c,u,l.sequenceNumber);fp(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){R("RemoteStore","Failed to raise snapshot:",r),await Iu(t,r)}}async function Iu(t,e,n){if(!Hr(e))throw e;t.C_.add(1),await ro(t),t.M_.set("Offline"),n||(n=()=>xE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{R("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await nc(t)})}function qE(t,e){return e().catch(n=>Iu(t,n,e))}async function io(t){const e=M(t),n=Br(e);let r=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;qV(e);)try{const i=await SV(e.localStore,r);if(i===null){e.b_.length===0&&n.Zo();break}r=i.batchId,jV(e,i)}catch(i){await Iu(e,i)}jE(e)&&WE(e)}function qV(t){return Yr(t)&&t.b_.length<10}function jV(t,e){t.b_.push(e);const n=Br(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function jE(t){return Yr(t)&&!Br(t).jo()&&t.b_.length>0}function WE(t){Br(t).start()}async function WV(t){Br(t).E_()}async function GV(t){const e=Br(t);for(const n of t.b_)e.P_(n.mutations)}async function zV(t,e,n){const r=t.b_.shift(),i=ep.from(r,e,n);await qE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await io(t)}async function KV(t,e){e&&Br(t).h_&&await async function(r,i){if(function(o){return nE(o)&&o!==y.ABORTED}(i.code)){const s=r.b_.shift();Br(r).Yo(),await qE(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await io(r)}}(t,e),jE(t)&&WE(t)}async function y_(t,e){const n=M(t);n.asyncQueue.verifyOperationInProgress(),R("RemoteStore","RemoteStore received new credentials");const r=Yr(n);n.C_.add(3),await ro(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await nc(n)}async function pd(t,e){const n=M(t);e?(n.C_.delete(2),await nc(n)):e||(n.C_.add(2),await ro(n),n.M_.set("Unknown"))}function so(t){return t.O_||(t.O_=function(n,r,i){const s=M(n);return s.A_(),new VV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{ho:UV.bind(null,t),Io:BV.bind(null,t),a_:$V.bind(null,t)}),t.v_.push(async e=>{e?(t.O_.Yo(),mp(t)?pp(t):t.M_.set("Unknown")):(await t.O_.stop(),$E(t))})),t.O_}function Br(t){return t.N_||(t.N_=function(n,r,i){const s=M(n);return s.A_(),new OV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{ho:WV.bind(null,t),Io:KV.bind(null,t),T_:GV.bind(null,t),I_:zV.bind(null,t)}),t.v_.push(async e=>{e?(t.N_.Yo(),await io(t)):(await t.N_.stop(),t.b_.length>0&&(R("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))})),t.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new rt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new gp(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new b(y.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function oo(t,e){if(We("AsyncQueue",`${e}: ${t}`),Hr(t))return new b(y.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||O.comparator(n.key,r.key):(n,r)=>O.comparator(n.key,r.key),this.keyedMap=Co(),this.sortedSet=new Re(this.comparator)}static emptySet(e){return new bs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof bs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new bs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(){this.B_=new Re(O.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):q():this.B_=this.B_.insert(n,e)}L_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Us{constructor(e,n,r,i,s,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Us(e,n,bs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ya(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HV{constructor(){this.k_=void 0,this.listeners=[]}}class QV{constructor(){this.queries=new Qr(e=>$w(e),Ya),this.onlineState="Unknown",this.q_=new Set}}async function _p(t,e){const n=M(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new HV),i)try{s.k_=await n.onListen(r)}catch(o){const a=oo(o,`Initialization of query '${os(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Q_(n.onlineState),s.k_&&e.K_(s.k_)&&vp(n)}async function yp(t,e){const n=M(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function YV(t,e){const n=M(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.K_(i)&&(r=!0);o.k_=i}}r&&vp(n)}function JV(t,e,n){const r=M(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function vp(t){t.q_.forEach(e=>{e.next()})}class Ip{constructor(e,n,r){this.query=e,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Us(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.W_?this.z_(e)&&(this.U_.next(e),n=!0):this.j_(e,this.onlineState)&&(this.H_(e),n=!0),this.G_=e,n}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),n=!0),n}j_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.J_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(e){e=Us.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XV{constructor(e,n){this.Y_=e,this.byteLength=n}Z_(){return"metadata"in this.Y_}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(e){this.serializer=e}hs(e){return On(this.serializer,e)}Ps(e){return e.metadata.exists?hE(this.serializer,e.document,!1):Ce.newNoDocument(this.hs(e.metadata.name),this.Is(e.metadata.readTime))}Is(e){return ze(e)}}class ZV{constructor(e,n,r){this.X_=e,this.localStore=n,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=GE(e)}ea(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.Y_.namedQuery)this.queries.push(e.Y_.namedQuery);else if(e.Y_.documentMetadata){this.documents.push({metadata:e.Y_.documentMetadata}),e.Y_.documentMetadata.exists||++n;const r=fe.fromString(e.Y_.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.Y_.document&&(this.documents[this.documents.length-1].document=e.Y_.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}ta(e){const n=new Map,r=new I_(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.hs(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||oe()).add(s);n.set(o,a)}}return n}async complete(){const e=await PV(this.localStore,new I_(this.serializer),this.documents,this.X_.id),n=this.ta(this.documents);for(const r of this.queries)await CV(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,na:this.collectionGroups,ra:e}}}function GE(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(e){this.key=e}}class KE{constructor(e){this.key=e}}class HE{constructor(e,n){this.query=e,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=oe(),this.mutatedKeys=oe(),this._a=jw(e),this.aa=new bs(this._a)}get ua(){return this.ia}ca(e,n){const r=n?n.la:new v_,i=n?n.aa:this.aa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((l,h)=>{const d=i.get(l),f=Ja(this.query,h)?h:null,v=!!d&&this.mutatedKeys.has(d.key),I=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let w=!1;d&&f?d.data.isEqual(f.data)?v!==I&&(r.track({type:3,doc:f}),w=!0):this.ha(d,f)||(r.track({type:2,doc:f}),w=!0,(c&&this._a(f,c)>0||u&&this._a(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),w=!0):d&&!f&&(r.track({type:1,doc:d}),w=!0,(c||u)&&(a=!0)),w&&(f?(o=o.add(f),s=I?s.add(l):s.delete(l)):(o=o.delete(l),s=s.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),s=s.delete(l.key),r.track({type:1,doc:l})}return{aa:o,la:r,Zi:a,mutatedKeys:s}}ha(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const o=e.la.L_();o.sort((l,h)=>function(f,v){const I=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q()}};return I(f)-I(v)}(l.type,h.type)||this._a(l.doc,h.doc)),this.Pa(r),i=i!=null&&i;const a=n&&!i?this.Ia():[],c=this.oa.size===0&&this.current&&!i?1:0,u=c!==this.sa;return this.sa=c,o.length!==0||u?{snapshot:new Us(this.query,e.aa,s,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:a}:{Ta:a}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new v_,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=oe(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const n=[];return e.forEach(r=>{this.oa.has(r)||n.push(new KE(r))}),this.oa.forEach(r=>{e.has(r)||n.push(new zE(r))}),n}da(e){this.ia=e.ls,this.oa=oe();const n=this.ca(e.documents);return this.applyChanges(n,!0)}Aa(){return Us.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class e1{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class t1{constructor(e){this.key=e,this.Ra=!1}}class n1{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new Qr(a=>$w(a),Ya),this.fa=new Map,this.ga=new Set,this.pa=new Re(O.comparator),this.ya=new Map,this.wa=new ap,this.Sa={},this.ba=new Map,this.Da=xi.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function r1(t,e){const n=bp(t);let r,i;const s=n.ma.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Aa();else{const o=await Ms(n.localStore,Nt(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await wp(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&vl(n.remoteStore,o)}return i}async function wp(t,e,n,r,i){t.va=(h,d,f)=>async function(I,w,S,V){let N=w.view.ca(S);N.Zi&&(N=await _u(I.localStore,w.query,!1).then(({documents:he})=>w.view.ca(he,N)));const H=V&&V.targetChanges.get(w.targetId),ee=V&&V.targetMismatches.get(w.targetId)!=null,$=w.view.applyChanges(N,I.isPrimaryClient,H,ee);return md(I,w.targetId,$.Ta),$.snapshot}(t,h,d,f);const s=await _u(t.localStore,e,!0),o=new HE(e,s.ls),a=o.ca(s.documents),c=ec.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,c);md(t,n,u.Ta);const l=new e1(e,n,o);return t.ma.set(e,l),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),u.snapshot}async function i1(t,e){const n=M(t),r=n.ma.get(e),i=n.fa.get(r.targetId);if(i.length>1)return n.fa.set(r.targetId,i.filter(s=>!Ya(s,e))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Fs(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),ba(n.remoteStore,r.targetId),Bs(n,r.targetId)}).catch(Kr)):(Bs(n,r.targetId),await Fs(n.localStore,r.targetId,!0))}async function s1(t,e,n){const r=Rp(t);try{const i=await function(o,a){const c=M(o),u=Oe.now(),l=a.reduce((f,v)=>f.add(v.key),oe());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",f=>{let v=Bt(),I=oe();return c.ss.getEntries(f,l).next(w=>{v=w,v.forEach((S,V)=>{V.isValidDocument()||(I=I.add(S))})}).next(()=>c.localDocuments.getOverlayedDocuments(f,v)).next(w=>{h=w;const S=[];for(const V of a){const N=VN(V,h.get(V.key).overlayedDocument);N!=null&&S.push(new or(V.key,N,xw(N.value.mapValue),Ve.exists(!0)))}return c.mutationQueue.addMutationBatch(f,u,S,a)}).next(w=>{d=w;const S=w.applyToLocalDocumentSet(h,I);return c.documentOverlayCache.saveOverlays(f,w.batchId,S)})}).then(()=>({batchId:d.batchId,changes:Gw(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let u=o.Sa[o.currentUser.toKey()];u||(u=new Re(re)),u=u.insert(a,c),o.Sa[o.currentUser.toKey()]=u}(r,i.batchId,n),await ar(r,i.changes),await io(r.remoteStore)}catch(i){const s=oo(i,"Failed to persist write");n.reject(s)}}async function QE(t,e){const n=M(t);try{const r=await RV(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.ya.get(s);o&&(G(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ra=!0:i.modifiedDocuments.size>0?G(o.Ra):i.removedDocuments.size>0&&(G(o.Ra),o.Ra=!1))}),await ar(n,r,e)}catch(r){await Kr(r)}}function w_(t,e,n){const r=M(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ma.forEach((s,o)=>{const a=o.view.Q_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=M(o);c.onlineState=a;let u=!1;c.queries.forEach((l,h)=>{for(const d of h.listeners)d.Q_(a)&&(u=!0)}),u&&vp(c)}(r.eventManager,e),i.length&&r.Va.a_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function o1(t,e,n){const r=M(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.ya.get(e),s=i&&i.key;if(s){let o=new Re(O.comparator);o=o.insert(s,Ce.newNoDocument(s,K.min()));const a=oe().add(s),c=new Za(K.min(),new Map,new Re(re),o,a);await QE(r,c),r.pa=r.pa.remove(s),r.ya.delete(e),Ap(r)}else await Fs(r.localStore,e,!1).then(()=>Bs(r,e,n)).catch(Kr)}async function a1(t,e){const n=M(t),r=e.batch.batchId;try{const i=await bV(n.localStore,e);Tp(n,r,null),Ep(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ar(n,i)}catch(i){await Kr(i)}}async function c1(t,e,n){const r=M(t);try{const i=await function(o,a){const c=M(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return c.mutationQueue.lookupMutationBatch(u,a).next(h=>(G(h!==null),l=h.keys(),c.mutationQueue.removeMutationBatch(u,h))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,l,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,l)).next(()=>c.localDocuments.getDocuments(u,l))})}(r.localStore,e);Tp(r,e,n),Ep(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ar(r,i)}catch(i){await Kr(i)}}async function u1(t,e){const n=M(t);Yr(n.remoteStore)||R("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=M(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",c=>a.mutationQueue.getHighestUnacknowledgedBatchId(c))}(n.localStore);if(r===-1)return void e.resolve();const i=n.ba.get(r)||[];i.push(e),n.ba.set(r,i)}catch(r){const i=oo(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function Ep(t,e){(t.ba.get(e)||[]).forEach(n=>{n.resolve()}),t.ba.delete(e)}function Tp(t,e,n){const r=M(t);let i=r.Sa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Sa[r.currentUser.toKey()]=i}}function Bs(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.fa.get(e))t.ma.delete(r),n&&t.Va.Fa(r,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach(r=>{t.wa.containsKey(r)||YE(t,r)})}function YE(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);n!==null&&(ba(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),Ap(t))}function md(t,e,n){for(const r of n)r instanceof zE?(t.wa.addReference(r.key,e),l1(t,r)):r instanceof KE?(R("SyncEngine","Document no longer in limbo: "+r.key),t.wa.removeReference(r.key,e),t.wa.containsKey(r.key)||YE(t,r.key)):q()}function l1(t,e){const n=e.key,r=n.path.canonicalString();t.pa.get(n)||t.ga.has(r)||(R("SyncEngine","New document in limbo: "+n),t.ga.add(r),Ap(t))}function Ap(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new O(fe.fromString(e)),r=t.Da.next();t.ya.set(r,new t1(n)),t.pa=t.pa.insert(n,r),vl(t.remoteStore,new Kn(Nt(eo(n.path)),r,"TargetPurposeLimboResolution",Ft._e))}}async function ar(t,e,n){const r=M(t),i=[],s=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,c)=>{o.push(r.va(c,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const l=lp.Qi(c.targetId,u);s.push(l)}}))}),await Promise.all(o),r.Va.a_(i),await async function(c,u){const l=M(c);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>g.forEach(u,d=>g.forEach(d.ki,f=>l.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>g.forEach(d.qi,f=>l.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!Hr(h))throw h;R("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const f=l.ts.get(d),v=f.snapshotVersion,I=f.withLastLimboFreeSnapshotVersion(v);l.ts=l.ts.insert(d,I)}}}(r.localStore,s))}async function h1(t,e){const n=M(t);if(!n.currentUser.isEqual(e)){R("SyncEngine","User change. New user:",e.toKey());const r=await DE(n.localStore,e);n.currentUser=e,function(s,o){s.ba.forEach(a=>{a.forEach(c=>{c.reject(new b(y.CANCELLED,o))})}),s.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ar(n,r._s)}}function d1(t,e){const n=M(t),r=n.ya.get(e);if(r&&r.Ra)return oe().add(r.key);{let i=oe();const s=n.fa.get(e);if(!s)return i;for(const o of s){const a=n.ma.get(o);i=i.unionWith(a.view.ua)}return i}}async function f1(t,e){const n=M(t),r=await _u(n.localStore,e.query,!0),i=e.view.da(r);return n.isPrimaryClient&&md(n,e.targetId,i.Ta),i}async function p1(t,e){const n=M(t);return OE(n.localStore,e).then(r=>ar(n,r))}async function m1(t,e,n,r){const i=M(t),s=await function(a,c){const u=M(a),l=M(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",h=>l.Cn(h,c).next(d=>d?u.localDocuments.getDocuments(h,d):g.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await io(i.remoteStore):n==="acknowledged"||n==="rejected"?(Tp(i,e,r||null),Ep(i,e),function(a,c){M(M(a).mutationQueue).Fn(c)}(i.localStore,e)):q(),await ar(i,s)):R("SyncEngine","Cannot apply mutation batch with id: "+e)}async function g1(t,e){const n=M(t);if(bp(n),Rp(n),e===!0&&n.Ca!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await E_(n,r.toArray());n.Ca=!0,await pd(n.remoteStore,!0);for(const s of i)vl(n.remoteStore,s)}else if(e===!1&&n.Ca!==!1){const r=[];let i=Promise.resolve();n.fa.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(Bs(n,o),Fs(n.localStore,o,!0))),ba(n.remoteStore,o)}),await i,await E_(n,r),function(o){const a=M(o);a.ya.forEach((c,u)=>{ba(a.remoteStore,u)}),a.wa.Vr(),a.ya=new Map,a.pa=new Re(O.comparator)}(n),n.Ca=!1,await pd(n.remoteStore,!1)}}async function E_(t,e,n){const r=M(t),i=[],s=[];for(const o of e){let a;const c=r.fa.get(o);if(c&&c.length!==0){a=await Ms(r.localStore,Nt(c[0]));for(const u of c){const l=r.ma.get(u),h=await f1(r,l);h.snapshot&&s.push(h.snapshot)}}else{const u=await VE(r.localStore,o);a=await Ms(r.localStore,u),await wp(r,JE(u),o,!1,a.resumeToken)}i.push(a)}return r.Va.a_(s),i}function JE(t){return Bw(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function _1(t){return function(n){return M(M(n).persistence).Bi()}(M(t).localStore)}async function y1(t,e,n,r){const i=M(t);if(i.Ca)return void R("SyncEngine","Ignoring unexpected query state notification.");const s=i.fa.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await OE(i.localStore,qw(s[0])),a=Za.createSynthesizedRemoteEventForCurrentChange(e,n==="current",Je.EMPTY_BYTE_STRING);await ar(i,o,a);break}case"rejected":await Fs(i.localStore,e,!0),Bs(i,e,r);break;default:q()}}async function v1(t,e,n){const r=bp(t);if(r.Ca){for(const i of e){if(r.fa.has(i)){R("SyncEngine","Adding an already active target "+i);continue}const s=await VE(r.localStore,i),o=await Ms(r.localStore,s);await wp(r,JE(s),o.targetId,!1,o.resumeToken),vl(r.remoteStore,o)}for(const i of n)r.fa.has(i)&&await Fs(r.localStore,i,!1).then(()=>{ba(r.remoteStore,i),Bs(r,i)}).catch(Kr)}}function bp(t){const e=M(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=QE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=d1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=o1.bind(null,e),e.Va.a_=YV.bind(null,e.eventManager),e.Va.Fa=JV.bind(null,e.eventManager),e}function Rp(t){const e=M(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=a1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=c1.bind(null,e),e}function I1(t,e,n){const r=M(t);(async function(s,o,a){try{const c=await o.getMetadata();if(await function(f,v){const I=M(f),w=ze(v.createTime);return I.persistence.runTransaction("hasNewerBundle","readonly",S=>I.Kr.getBundleMetadata(S,v.id)).then(S=>!!S&&S.createTime.compareTo(w)>=0)}(s.localStore,c))return await o.close(),a._completeWith(function(f){return{taskState:"Success",documentsLoaded:f.totalDocuments,bytesLoaded:f.totalBytes,totalDocuments:f.totalDocuments,totalBytes:f.totalBytes}}(c)),Promise.resolve(new Set);a._updateProgress(GE(c));const u=new ZV(c,s.localStore,o.serializer);let l=await o.Ma();for(;l;){const d=await u.ea(l);d&&a._updateProgress(d),l=await o.Ma()}const h=await u.complete();return await ar(s,h.ra,void 0),await function(f,v){const I=M(f);return I.persistence.runTransaction("Save bundle","readwrite",w=>I.Kr.saveBundleMetadata(w,v))}(s.localStore,c),a._completeWith(h.progress),Promise.resolve(h.na)}catch(c){return fn("SyncEngine",`Loading bundle failed with ${c}`),a._failWith(c),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class gd{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=tc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return kE(this.persistence,new CE,e.initialUser,this.serializer)}createPersistence(e){return new PE(yl.jr,this.serializer)}createSharedClientState(e){return new ME}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class XE extends gd{constructor(e,n,r){super(),this.xa=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.xa.initialize(this,e),await Rp(this.xa.syncEngine),await io(this.xa.remoteStore),await this.persistence.mi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return kE(this.persistence,new CE,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new cV(r,e.asyncQueue,n)}createIndexBackfillerScheduler(e,n){const r=new Gx(n,this.persistence);return new Wx(e.asyncQueue,r)}createPersistence(e){const n=up(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Mt.withCacheSize(this.cacheSizeBytes):Mt.DEFAULT;return new cp(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,FE(),Fc(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new ME}}class w1 extends XE{constructor(e,n){super(e,n,!1),this.xa=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.xa.syncEngine;this.sharedClientState instanceof hh&&(this.sharedClientState.syncEngine={Ys:m1.bind(null,n),Zs:y1.bind(null,n),Xs:v1.bind(null,n),Bi:_1.bind(null,n),Js:p1.bind(null,n)},await this.sharedClientState.start()),await this.persistence.mi(async r=>{await g1(this.xa.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const n=FE();if(!hh.D(n))throw new b(y.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=up(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new hh(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class Sp{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>w_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=h1.bind(null,this.syncEngine),await pd(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new QV}()}createDatastore(e){const n=tc(e.databaseInfo.databaseId),r=function(s){return new NV(s)}(e.databaseInfo);return function(s,o,a,c){return new LV(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new FV(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>w_(this.syncEngine,n,0),function(){return __.D()?new __:new kV}())}createSyncEngine(e,n){return function(i,s,o,a,c,u,l){const h=new n1(i,s,o,a,c,u);return l&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=M(n);R("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await ro(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T_(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):We("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E1{constructor(e,n){this.Ba=e,this.serializer=n,this.metadata=new rt,this.buffer=new Uint8Array,this.La=function(){return new TextDecoder("utf-8")}(),this.ka().then(r=>{r&&r.Z_()?this.metadata.resolve(r.Y_.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.Y_)}`))},r=>this.metadata.reject(r))}close(){return this.Ba.cancel()}async getMetadata(){return this.metadata.promise}async Ma(){return await this.getMetadata(),this.ka()}async ka(){const e=await this.qa();if(e===null)return null;const n=this.La.decode(e),r=Number(n);isNaN(r)&&this.Qa(`length string (${n}) is not valid number`);const i=await this.Ka(r);return new XV(JSON.parse(i),e.length+r)}$a(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async qa(){for(;this.$a()<0&&!await this.Ua(););if(this.buffer.length===0)return null;const e=this.$a();e<0&&this.Qa("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async Ka(e){for(;this.buffer.length<e;)await this.Ua()&&this.Qa("Reached the end of bundle when more is expected.");const n=this.La.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}Qa(e){throw this.Ba.cancel(),new Error(`Invalid bundle format: ${e}`)}async Ua(){const e=await this.Ba.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T1{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new b(y.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(i,s){const o=M(i),a=Ta(o.serializer)+"/documents",c={documents:s.map(d=>Ea(o.serializer,d))},u=await o.Co("BatchGetDocuments",a,c,s.length),l=new Map;u.forEach(d=>{const f=jN(o.serializer,d);l.set(f.key.toString(),f)});const h=[];return s.forEach(d=>{const f=l.get(d.toString());G(!!f),h.push(f)}),h}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new no(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=O.fromPath(r);this.mutations.push(new Xf(i,this.precondition(i)))}),await async function(r,i){const s=M(r),o=Ta(s.serializer)+"/documents",a={writes:i.map(c=>Aa(s.serializer,c))};await s.wo("Commit",o,a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw q();n=K.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new b(y.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(K.min())?Ve.exists(!1):Ve.updateTime(n):Ve.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(K.min()))throw new b(y.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ve.updateTime(n)}return Ve.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A1{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.Wa=r.maxAttempts,this.zo=new dp(this.asyncQueue,"transaction_retry")}run(){this.Wa-=1,this.Ga()}Ga(){this.zo.ko(async()=>{const e=new T1(this.datastore),n=this.za(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.ja(i)}))}).catch(r=>{this.ja(r)})})}za(e){try{const n=this.updateFunction(e);return!Ha(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}ja(e){this.Wa>0&&this.Ha(e)?(this.Wa-=1,this.asyncQueue.enqueueAndForget(()=>(this.Ga(),Promise.resolve()))):this.deferred.reject(e)}Ha(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!nE(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b1{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=tt.UNAUTHENTICATED,this.clientId=yw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{R("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(R("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new b(y.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new rt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=oo(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Uc(t,e){t.asyncQueue.verifyOperationInProgress(),R("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await DE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function _d(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Pp(t);R("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>y_(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>y_(e.remoteStore,s)),t._onlineComponents=e}function ZE(t){return t.name==="FirebaseError"?t.code===y.FAILED_PRECONDITION||t.code===y.UNIMPLEMENTED:!(typeof DOMException!="undefined"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Pp(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){R("FirestoreClient","Using user provided OfflineComponentProvider");try{await Uc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!ZE(n))throw n;fn("Error using user provided cache. Falling back to memory cache: "+n),await Uc(t,new gd)}}else R("FirestoreClient","Using default OfflineComponentProvider"),await Uc(t,new gd);return t._offlineComponents}async function wl(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(R("FirestoreClient","Using user provided OnlineComponentProvider"),await _d(t,t._uninitializedComponentsProvider._online)):(R("FirestoreClient","Using default OnlineComponentProvider"),await _d(t,new Sp))),t._onlineComponents}function eT(t){return Pp(t).then(e=>e.persistence)}function Cp(t){return Pp(t).then(e=>e.localStore)}function tT(t){return wl(t).then(e=>e.remoteStore)}function kp(t){return wl(t).then(e=>e.syncEngine)}function R1(t){return wl(t).then(e=>e.datastore)}async function $s(t){const e=await wl(t),n=e.eventManager;return n.onListen=r1.bind(null,e.syncEngine),n.onUnlisten=i1.bind(null,e.syncEngine),n}function S1(t){return t.asyncQueue.enqueue(async()=>{const e=await eT(t),n=await tT(t);return e.setNetworkEnabled(!0),function(i){const s=M(i);return s.C_.delete(0),nc(s)}(n)})}function P1(t){return t.asyncQueue.enqueue(async()=>{const e=await eT(t),n=await tT(t);return e.setNetworkEnabled(!1),async function(i){const s=M(i);s.C_.add(0),await ro(s),s.M_.set("Offline")}(n)})}function C1(t,e){const n=new rt;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(u,l){const h=M(u);return h.persistence.runTransaction("read document","readonly",d=>h.localDocuments.getDocument(d,l))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new b(y.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const c=oo(a,`Failed to get document '${s} from cache`);o.reject(c)}}(await Cp(t),e,n)),n.promise}function nT(t,e,n={}){const r=new rt;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,u){const l=new Il({next:d=>{o.enqueueAndForget(()=>yp(s,h));const f=d.docs.has(a);!f&&d.fromCache?u.reject(new b(y.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&c&&c.source==="server"?u.reject(new b(y.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new Ip(eo(a.path),l,{includeMetadataChanges:!0,J_:!0});return _p(s,h)}(await $s(t),t.asyncQueue,e,n,r)),r.promise}function k1(t,e){const n=new rt;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await _u(i,s,!0),c=new HE(s,a.ls),u=c.ca(a.documents),l=c.applyChanges(u,!1);o.resolve(l.snapshot)}catch(a){const c=oo(a,`Failed to execute query '${s} against cache`);o.reject(c)}}(await Cp(t),e,n)),n.promise}function rT(t,e,n={}){const r=new rt;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,u){const l=new Il({next:d=>{o.enqueueAndForget(()=>yp(s,h)),d.fromCache&&c.source==="server"?u.reject(new b(y.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new Ip(a,l,{includeMetadataChanges:!0,J_:!0});return _p(s,h)}(await $s(t),t.asyncQueue,e,n,r)),r.promise}function D1(t,e){const n=new Il(e);return t.asyncQueue.enqueueAndForget(async()=>function(i,s){M(i).q_.add(s),s.next()}(await $s(t),n)),()=>{n.Na(),t.asyncQueue.enqueueAndForget(async()=>function(i,s){M(i).q_.delete(s)}(await $s(t),n))}}function x1(t,e,n,r){const i=function(o,a){let c;return c=typeof o=="string"?iE().encode(o):o,function(l,h){return new E1(l,h)}(function(l,h){if(l instanceof Uint8Array)return T_(l,h);if(l instanceof ArrayBuffer)return T_(new Uint8Array(l),h);if(l instanceof ReadableStream)return l.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(c),a)}(n,tc(e));t.asyncQueue.enqueueAndForget(async()=>{I1(await kp(t),i,r)})}function N1(t,e){return t.asyncQueue.enqueue(async()=>function(r,i){const s=M(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.Kr.getNamedQuery(o,i))}(await Cp(t),e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dp(t,e,n){if(!n)throw new b(y.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function sT(t,e,n,r){if(e===!0&&r===!0)throw new b(y.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function b_(t){if(!O.isDocumentKey(t))throw new b(y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function R_(t){if(O.isDocumentKey(t))throw new b(y.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function El(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":q()}function me(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new b(y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=El(t);throw new b(y.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function oT(t,e){if(e<=0)throw new b(y.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new b(y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new b(y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}sT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=iT((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new b(y.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new b(y.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new b(y.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class rc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new S_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new b(y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new b(y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new S_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Nx;switch(r.type){case"firstParty":return new Mx(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new b(y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=A_.get(n);r&&(R("ComponentProvider","Removing Datastore"),A_.delete(n),r.terminate())}(this),Promise.resolve()}}function V1(t,e,n,r={}){var i;const s=(t=me(t,rc))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&fn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=tt.MOCK_USER;else{a=jR(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new b(y.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new tt(u)}t._authCredentials=new Vx(new _w(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new mt(this.firestore,e,this._query)}}class ke{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ln(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ke(this.firestore,e,this._key)}}class Ln extends mt{constructor(e,n,r){super(e,n,eo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ke(this.firestore,null,new O(e))}withConverter(e){return new Ln(this.firestore,e,this._path)}}function aT(t,e,...n){if(t=J(t),Dp("collection","path",e),t instanceof rc){const r=fe.fromString(e,...n);return R_(r),new Ln(t,null,r)}{if(!(t instanceof ke||t instanceof Ln))throw new b(y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(fe.fromString(e,...n));return R_(r),new Ln(t.firestore,null,r)}}function O1(t,e){if(t=me(t,rc),Dp("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new b(y.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new mt(t,null,function(r){return new sr(fe.emptyPath(),r)}(e))}function wu(t,e,...n){if(t=J(t),arguments.length===1&&(e=yw.newId()),Dp("doc","path",e),t instanceof rc){const r=fe.fromString(e,...n);return b_(r),new ke(t,null,new O(r))}{if(!(t instanceof ke||t instanceof Ln))throw new b(y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(fe.fromString(e,...n));return b_(r),new ke(t.firestore,t instanceof Ln?t.converter:null,new O(r))}}function cT(t,e){return t=J(t),e=J(e),(t instanceof ke||t instanceof Ln)&&(e instanceof ke||e instanceof Ln)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function uT(t,e){return t=J(t),e=J(e),t instanceof mt&&e instanceof mt&&t.firestore===e.firestore&&Ya(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new dp(this,"async_queue_retry"),this.iu=()=>{const n=Fc();n&&R("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=Fc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=Fc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new rt;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!Hr(e))throw e;R("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(r=>{this.eu=r,this.tu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw We("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(e,n,r){this.su(),this.ru.indexOf(e)>-1&&(n=0);const i=gp.createAndSchedule(this,e,n,r,s=>this.au(s));return this.Xa.push(i),i}su(){this.eu&&q()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}function yd(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class M1{constructor(){this._progressObserver={},this._taskCompletionResolver=new rt,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F1=-1;class Be extends rc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new L1}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||lT(this),this._firestoreClient.terminate()}}function at(t){return t._firestoreClient||lT(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function lT(t){var e,n,r;const i=t._freezeSettings(),s=function(a,c,u,l){return new dN(a,c,u,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,iT(l.experimentalLongPollingOptions),l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new b1(t._authCredentials,t._appCheckCredentials,t._queue,s),((n=i.localCache)===null||n===void 0?void 0:n._offlineComponentProvider)&&((r=i.localCache)===null||r===void 0?void 0:r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}function U1(t,e){dT(t=me(t,Be));const n=at(t);if(n._uninitializedComponentsProvider)throw new b(y.FAILED_PRECONDITION,"SDK cache is already specified.");fn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=t._freezeSettings(),i=new Sp;return hT(n,i,new XE(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function B1(t){dT(t=me(t,Be));const e=at(t);if(e._uninitializedComponentsProvider)throw new b(y.FAILED_PRECONDITION,"SDK cache is already specified.");fn("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings(),r=new Sp;return hT(e,r,new w1(r,n.cacheSizeBytes))}function hT(t,e,n){const r=new rt;return t.asyncQueue.enqueue(async()=>{try{await Uc(t,n),await _d(t,e),r.resolve()}catch(i){const s=i;if(!ZE(s))throw s;fn("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function $1(t){if(t._initialized&&!t._terminated)throw new b(y.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new rt;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!an.D())return Promise.resolve();const i=r+"main";await an.delete(i)}(up(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function q1(t){return function(n){const r=new rt;return n.asyncQueue.enqueueAndForget(async()=>u1(await kp(n),r)),r.promise}(at(t=me(t,Be)))}function j1(t){return S1(at(t=me(t,Be)))}function W1(t){return P1(at(t=me(t,Be)))}function G1(t,e){const n=at(t=me(t,Be)),r=new M1;return x1(n,t._databaseId,e,r),r}function z1(t,e){return N1(at(t=me(t,Be)),e).then(n=>n?new mt(t,null,n.query):null)}function dT(t){if(t._initialized||t._terminated)throw new b(y.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e){this._byteString=e}static fromBase64String(e){try{return new $n(Je.fromBase64String(e))}catch(n){throw new b(y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new $n(Je.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new b(y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ne(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new b(y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new b(y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return re(this._lat,e._lat)||re(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K1=/^__.*__$/;class H1{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new or(e,this.data,this.fieldMask,n,this.fieldTransforms):new to(e,this.data,n,this.fieldTransforms)}}class fT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new or(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function pT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q()}}class Al{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Pu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new Al(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Tu({path:r,du:!1});return i.Au(e),i}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Tu({path:r,du:!1});return i.Pu(),i}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return Eu(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(pT(this.Iu)&&K1.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class Q1{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||tc(e)}pu(e,n,r,i=!1){return new Al({Iu:e,methodName:n,gu:r,path:Ne.emptyPath(),du:!1,fu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ji(t){const e=t._freezeSettings(),n=tc(t._databaseId);return new Q1(t._databaseId,!!e.ignoreUndefinedProperties,n)}function bl(t,e,n,r,i,s={}){const o=t.pu(s.merge||s.mergeFields?2:0,e,n,i);Op("Data must be an object, but it was:",o,r);const a=_T(r,o);let c,u;if(s.merge)c=new Ut(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const l=[];for(const h of s.mergeFields){const d=vd(e,h,n);if(!o.contains(d))throw new b(y.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);vT(l,d)||l.push(d)}c=new Ut(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new H1(new lt(a),c,u)}class ic extends qi{_toFieldTransform(e){if(e.Iu!==2)throw e.Iu===1?e.mu(`${this._methodName}() can only appear at the top level of your update data`):e.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ic}}function mT(t,e,n){return new Al({Iu:3,gu:e.settings.gu,methodName:t._methodName,du:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class xp extends qi{_toFieldTransform(e){return new Xa(e.path,new Vs)}isEqual(e){return e instanceof xp}}class Y1 extends qi{constructor(e,n){super(e),this.yu=n}_toFieldTransform(e){const n=mT(this,e,!0),r=this.yu.map(s=>Wi(s,n)),i=new Pi(r);return new Xa(e.path,i)}isEqual(e){return this===e}}class J1 extends qi{constructor(e,n){super(e),this.yu=n}_toFieldTransform(e){const n=mT(this,e,!0),r=this.yu.map(s=>Wi(s,n)),i=new Ci(r);return new Xa(e.path,i)}isEqual(e){return this===e}}class X1 extends qi{constructor(e,n){super(e),this.wu=n}_toFieldTransform(e){const n=new Os(e.serializer,Qw(e.serializer,this.wu));return new Xa(e.path,n)}isEqual(e){return this===e}}function Np(t,e,n,r){const i=t.pu(1,e,n);Op("Data must be an object, but it was:",i,r);const s=[],o=lt.empty();$i(r,(c,u)=>{const l=Lp(e,c,n);u=J(u);const h=i.Ru(l);if(u instanceof ic)s.push(l);else{const d=Wi(u,h);d!=null&&(s.push(l),o.set(l,d))}});const a=new Ut(s);return new fT(o,a,i.fieldTransforms)}function Vp(t,e,n,r,i,s){const o=t.pu(1,e,n),a=[vd(e,r,n)],c=[i];if(s.length%2!=0)throw new b(y.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(vd(e,s[d])),c.push(s[d+1]);const u=[],l=lt.empty();for(let d=a.length-1;d>=0;--d)if(!vT(u,a[d])){const f=a[d];let v=c[d];v=J(v);const I=o.Ru(f);if(v instanceof ic)u.push(f);else{const w=Wi(v,I);w!=null&&(u.push(f),l.set(f,w))}}const h=new Ut(u);return new fT(l,h,o.fieldTransforms)}function gT(t,e,n,r=!1){return Wi(n,t.pu(r?4:3,e))}function Wi(t,e){if(yT(t=J(t)))return Op("Unsupported field value:",e,t),_T(t,e);if(t instanceof qi)return function(r,i){if(!pT(i.Iu))throw i.mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.mu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let c=Wi(a,i.Vu(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=J(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Qw(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Oe.fromDate(r);return{timestampValue:Ls(i.serializer,s)}}if(r instanceof Oe){const s=new Oe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ls(i.serializer,s)}}if(r instanceof Tl)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof $n)return{bytesValue:aE(i.serializer,r._byteString)};if(r instanceof ke){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:rp(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.mu(`Unsupported field value: ${El(r)}`)}(t,e)}function _T(t,e){const n={};return Cw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):$i(t,(r,i)=>{const s=Wi(i,e.Eu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function yT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Oe||t instanceof Tl||t instanceof $n||t instanceof ke||t instanceof qi)}function Op(t,e,n){if(!yT(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=El(n);throw r==="an object"?e.mu(t+" a custom object"):e.mu(t+" "+r)}}function vd(t,e,n){if((e=J(e))instanceof $r)return e._internalPath;if(typeof e=="string")return Lp(t,e);throw Eu("Field path arguments must be of type string or ",t,!1,void 0,n)}const Z1=new RegExp("[~\\*/\\[\\]]");function Lp(t,e,n){if(e.search(Z1)>=0)throw Eu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new $r(...e.split("."))._internalPath}catch{throw Eu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Eu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new b(y.INVALID_ARGUMENT,a+t+c)}function vT(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ke(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new eO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Rl("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class eO extends Ra{data(){return super.data()}}function Rl(t,e){return typeof e=="string"?Lp(t,e):e instanceof $r?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IT(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new b(y.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Mp{}class sc extends Mp{}function pr(t,e,...n){let r=[];e instanceof Mp&&r.push(e),r=r.concat(n),function(s){const o=s.filter(c=>c instanceof Fp).length,a=s.filter(c=>c instanceof Sl).length;if(o>1||o>0&&a>0)throw new b(y.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Sl extends sc{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Sl(e,n,r)}_apply(e){const n=this._parse(e);return ET(e._query,n),new mt(e.firestore,e.converter,od(e._query,n))}_parse(e){const n=ji(e.firestore);return function(s,o,a,c,u,l,h){let d;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new b(y.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){C_(h,l);const f=[];for(const v of h)f.push(P_(c,s,v));d={arrayValue:{values:f}}}else d=P_(c,s,h)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||C_(h,l),d=gT(a,o,h,l==="in"||l==="not-in");return le.create(u,l,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function tO(t,e,n){const r=e,i=Rl("where",t);return Sl._create(i,r,n)}class Fp extends Mp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Fp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Ie.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const c of a)ET(o,c),o=od(o,c)}(e._query,n),new mt(e.firestore,e.converter,od(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Up extends sc{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Up(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new b(y.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new b(y.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new wa(s,o)}(e._query,this._field,this._direction);return new mt(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new sr(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function nO(t,e="asc"){const n=e,r=Rl("orderBy",t);return Up._create(r,n)}class Pl extends sc{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Pl(e,n,r)}_apply(e){return new mt(e.firestore,e.converter,fu(e._query,this._limit,this._limitType))}}function rO(t){return oT("limit",t),Pl._create("limit",t,"F")}function iO(t){return oT("limitToLast",t),Pl._create("limitToLast",t,"L")}class Cl extends sc{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Cl(e,n,r)}_apply(e){const n=wT(e,this.type,this._docOrFields,this._inclusive);return new mt(e.firestore,e.converter,function(i,s){return new sr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function sO(...t){return Cl._create("startAt",t,!0)}function oO(...t){return Cl._create("startAfter",t,!1)}class kl extends sc{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new kl(e,n,r)}_apply(e){const n=wT(e,this.type,this._docOrFields,this._inclusive);return new mt(e.firestore,e.converter,function(i,s){return new sr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,n))}}function aO(...t){return kl._create("endBefore",t,!1)}function cO(...t){return kl._create("endAt",t,!0)}function wT(t,e,n,r){if(n[0]=J(n[0]),n[0]instanceof Ra)return function(s,o,a,c,u){if(!c)throw new b(y.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const l=[];for(const h of As(s))if(h.field.isKeyField())l.push(Ri(o,c.key));else{const d=c.data.field(h.field);if(fl(d))throw new b(y.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+h.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(d===null){const f=h.field.canonicalString();throw new b(y.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${f}' (used as the orderBy) does not exist.`)}l.push(d)}return new Ur(l,u)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=ji(t.firestore);return function(o,a,c,u,l,h){const d=o.explicitOrderBy;if(l.length>d.length)throw new b(y.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const f=[];for(let v=0;v<l.length;v++){const I=l[v];if(d[v].field.isKeyField()){if(typeof I!="string")throw new b(y.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof I}`);if(!Yf(o)&&I.indexOf("/")!==-1)throw new b(y.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${I}' contains a slash.`);const w=o.path.child(fe.fromString(I));if(!O.isDocumentKey(w))throw new b(y.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${w}' is not because it contains an odd number of segments.`);const S=new O(w);f.push(Ri(a,S))}else{const w=gT(c,u,I);f.push(w)}}return new Ur(f,h)}(t._query,t.firestore._databaseId,i,e,n,r)}}function P_(t,e,n){if(typeof(n=J(n))=="string"){if(n==="")throw new b(y.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Yf(e)&&n.indexOf("/")!==-1)throw new b(y.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(fe.fromString(n));if(!O.isDocumentKey(r))throw new b(y.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ri(t,new O(r))}if(n instanceof ke)return Ri(t,n._key);throw new b(y.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${El(n)}.`)}function C_(t,e){if(!Array.isArray(t)||t.length===0)throw new b(y.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ET(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new b(y.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new b(y.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class Bp{convertValue(e,n="none"){switch(bi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Lr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw q()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return $i(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Tl(Me(e.latitude),Me(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Hf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ya(e));default:return null}}convertTimestamp(e){const n=Or(e);return new Oe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=fe.fromString(e);G(_E(r));const i=new Mr(r.get(1),r.get(3)),s=new O(r.popFirst(5));return i.isEqual(n)||We(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dl(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class uO extends Bp{constructor(e){super(),this.firestore=e}convertBytes(e){return new $n(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ke(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class tr extends Ra{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Go(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Rl("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Go extends tr{data(e={}){return super.data(e)}}class qr{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new pi(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Go(this._firestore,this._userDataWriter,r.key,r,new pi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new b(y.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const c=new Go(i._firestore,i._userDataWriter,a.doc.key,a.doc,new pi(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const c=new Go(i._firestore,i._userDataWriter,a.doc.key,a.doc,new pi(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,l=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),l=o.indexOf(a.doc.key)),{type:lO(a.type),doc:c,oldIndex:u,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function lO(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q()}}function TT(t,e){return t instanceof tr&&e instanceof tr?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof qr&&e instanceof qr&&t._firestore===e._firestore&&uT(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hO(t){t=me(t,ke);const e=me(t.firestore,Be);return nT(at(e),t._key).then(n=>$p(e,t,n))}class Gi extends Bp{constructor(e){super(),this.firestore=e}convertBytes(e){return new $n(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ke(this.firestore,null,n)}}function dO(t){t=me(t,ke);const e=me(t.firestore,Be),n=at(e),r=new Gi(e);return C1(n,t._key).then(i=>new tr(e,r,t._key,i,new pi(i!==null&&i.hasLocalMutations,!0),t.converter))}function fO(t){t=me(t,ke);const e=me(t.firestore,Be);return nT(at(e),t._key,{source:"server"}).then(n=>$p(e,t,n))}function pO(t){t=me(t,mt);const e=me(t.firestore,Be),n=at(e),r=new Gi(e);return IT(t._query),rT(n,t._query).then(i=>new qr(e,r,t,i))}function mO(t){t=me(t,mt);const e=me(t.firestore,Be),n=at(e),r=new Gi(e);return k1(n,t._query).then(i=>new qr(e,r,t,i))}function gO(t){t=me(t,mt);const e=me(t.firestore,Be),n=at(e),r=new Gi(e);return rT(n,t._query,{source:"server"}).then(i=>new qr(e,r,t,i))}function k_(t,e,n){t=me(t,ke);const r=me(t.firestore,Be),i=Dl(t.converter,e,n);return oc(r,[bl(ji(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Ve.none())])}function D_(t,e,n,...r){t=me(t,ke);const i=me(t.firestore,Be),s=ji(i);let o;return o=typeof(e=J(e))=="string"||e instanceof $r?Vp(s,"updateDoc",t._key,e,n,r):Np(s,"updateDoc",t._key,e),oc(i,[o.toMutation(t._key,Ve.exists(!0))])}function _O(t){return oc(me(t.firestore,Be),[new no(t._key,Ve.none())])}function yO(t,e){const n=me(t.firestore,Be),r=wu(t),i=Dl(t.converter,e);return oc(n,[bl(ji(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Ve.exists(!1))]).then(()=>r)}function AT(t,...e){var n,r,i;t=J(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||yd(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(yd(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,u,l;if(t instanceof ke)u=me(t.firestore,Be),l=eo(t._key.path),c={next:h=>{e[o]&&e[o]($p(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=me(t,mt);u=me(h.firestore,Be),l=h._query;const d=new Gi(u);c={next:f=>{e[o]&&e[o](new qr(u,d,h,f))},error:e[o+1],complete:e[o+2]},IT(t._query)}return function(d,f,v,I){const w=new Il(I),S=new Ip(f,w,v);return d.asyncQueue.enqueueAndForget(async()=>_p(await $s(d),S)),()=>{w.Na(),d.asyncQueue.enqueueAndForget(async()=>yp(await $s(d),S))}}(at(u),l,a,c)}function vO(t,e){return D1(at(t=me(t,Be)),yd(e)?e:{next:e})}function oc(t,e){return function(r,i){const s=new rt;return r.asyncQueue.enqueueAndForget(async()=>s1(await kp(r),i,s)),s.promise}(at(t),e)}function $p(t,e,n){const r=n.docs.get(e._key),i=new Gi(t);return new tr(t,i,e._key,r,new pi(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IO={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wO{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=ji(e)}set(e,n,r){this._verifyNotCommitted();const i=wr(e,this._firestore),s=Dl(i.converter,n,r),o=bl(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Ve.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=wr(e,this._firestore);let o;return o=typeof(n=J(n))=="string"||n instanceof $r?Vp(this._dataReader,"WriteBatch.update",s._key,n,r,i):Np(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Ve.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=wr(e,this._firestore);return this._mutations=this._mutations.concat(new no(n._key,Ve.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new b(y.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function wr(t,e){if((t=J(t)).firestore!==e)throw new b(y.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EO extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=ji(n)}get(n){const r=wr(n,this._firestore),i=new uO(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return q();const o=s[0];if(o.isFoundDocument())return new Ra(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new Ra(this._firestore,i,r._key,null,r.converter);throw q()})}set(n,r,i){const s=wr(n,this._firestore),o=Dl(s.converter,r,i),a=bl(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(n,r,i,...s){const o=wr(n,this._firestore);let a;return a=typeof(r=J(r))=="string"||r instanceof $r?Vp(this._dataReader,"Transaction.update",o._key,r,i,s):Np(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(n){const r=wr(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=wr(e,this._firestore),r=new Gi(this._firestore);return super.get(e).then(i=>new tr(this._firestore,r,n._key,i._document,new pi(!1,!1),n.converter))}}function TO(t,e,n){t=me(t,Be);const r=Object.assign(Object.assign({},IO),n);return function(s){if(s.maxAttempts<1)throw new b(y.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const c=new rt;return s.asyncQueue.enqueueAndForget(async()=>{const u=await R1(s);new A1(s.asyncQueue,u,a,o,c).run()}),c.promise}(at(t),i=>e(new EO(t,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AO(){return new ic("deleteField")}function bO(){return new xp("serverTimestamp")}function RO(...t){return new Y1("arrayUnion",t)}function SO(...t){return new J1("arrayRemove",t)}function PO(t){return new X1("increment",t)}(function(e,n=!0){(function(i){Zs=i})(jr),Nr(new Fn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Be(new Ox(r.getProvider("auth-internal")),new Ux(r.getProvider("app-check-internal")),function(u,l){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new b(y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Mr(u.options.projectId,l)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Vn(bg,"4.4.0",e),Vn(bg,"4.4.0","esm2017")})();const CO="@firebase/firestore-compat",kO="0.3.23";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qp(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new b("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x_(){if(typeof Uint8Array=="undefined")throw new b("unimplemented","Uint8Arrays are not available in this environment.")}function N_(){if(!lN())throw new b("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Sa{constructor(e){this._delegate=e}static fromBase64String(e){return N_(),new Sa($n.fromBase64String(e))}static fromUint8Array(e){return x_(),new Sa($n.fromUint8Array(e))}toBase64(){return N_(),this._delegate.toBase64()}toUint8Array(){return x_(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Id(t){return DO(t,["next","error","complete"])}function DO(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xO{enableIndexedDbPersistence(e,n){return U1(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return B1(e._delegate)}clearIndexedDbPersistence(e){return $1(e._delegate)}}class bT{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Mr||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&fn("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){V1(this._delegate,e,n,r)}enableNetwork(){return j1(this._delegate)}disableNetwork(){return W1(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,sT("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return q1(this._delegate)}onSnapshotsInSync(e){return vO(this._delegate,e)}get app(){if(!this._appCompat)throw new b("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new qs(this,aT(this._delegate,e))}catch(n){throw St(n,"collection()","Firestore.collection()")}}doc(e){try{return new Zt(this,wu(this._delegate,e))}catch(n){throw St(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Rt(this,O1(this._delegate,e))}catch(n){throw St(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return TO(this._delegate,n=>e(new RT(this,n)))}batch(){return at(this._delegate),new ST(new wO(this._delegate,e=>oc(this._delegate,e)))}loadBundle(e){return G1(this._delegate,e)}namedQuery(e){return z1(this._delegate,e).then(n=>n?new Rt(this,n):null)}}class xl extends Bp{constructor(e){super(),this.firestore=e}convertBytes(e){return new Sa(new $n(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return Zt.forKey(n,this.firestore,null)}}function NO(t){Dx(t)}class RT{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new xl(e)}get(e){const n=mi(e);return this._delegate.get(n).then(r=>new Pa(this._firestore,new tr(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=mi(e);return r?(qp("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=mi(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=mi(e);return this._delegate.delete(n),this}}class ST{constructor(e){this._delegate=e}set(e,n,r){const i=mi(e);return r?(qp("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=mi(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=mi(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class Ni{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new Go(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Ca(this._firestore,r),n!=null?n:{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=Ni.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new Ni(e,new xl(e),n),i.set(n,s)),s}}Ni.INSTANCES=new WeakMap;class Zt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new xl(e)}static forPath(e,n,r){if(e.length%2!==0)throw new b("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Zt(n,new ke(n._delegate,r,new O(e)))}static forKey(e,n,r){return new Zt(n,new ke(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new qs(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new qs(this.firestore,aT(this._delegate,e))}catch(n){throw St(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=J(e),e instanceof ke?cT(this._delegate,e):!1}set(e,n){n=qp("DocumentReference.set",n);try{return n?k_(this._delegate,e,n):k_(this._delegate,e)}catch(r){throw St(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?D_(this._delegate,e):D_(this._delegate,e,n,...r)}catch(i){throw St(i,"updateDoc()","DocumentReference.update()")}}delete(){return _O(this._delegate)}onSnapshot(...e){const n=PT(e),r=CT(e,i=>new Pa(this.firestore,new tr(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return AT(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=dO(this._delegate):(e==null?void 0:e.source)==="server"?n=fO(this._delegate):n=hO(this._delegate),n.then(r=>new Pa(this.firestore,new tr(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new Zt(this.firestore,e?this._delegate.withConverter(Ni.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function St(t,e,n){return t.message=t.message.replace(e,n),t}function PT(t){for(const e of t)if(typeof e=="object"&&!Id(e))return e;return{}}function CT(t,e){var n,r;let i;return Id(t[0])?i=t[0]:Id(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class Pa{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new Zt(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return TT(this._delegate,e._delegate)}}class Ca extends Pa{data(e){const n=this._delegate.data(e);return this._delegate._converter||xx(n!==void 0),n}}class Rt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new xl(e)}where(e,n,r){try{return new Rt(this.firestore,pr(this._delegate,tO(e,n,r)))}catch(i){throw St(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new Rt(this.firestore,pr(this._delegate,nO(e,n)))}catch(r){throw St(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Rt(this.firestore,pr(this._delegate,rO(e)))}catch(n){throw St(n,"limit()","Query.limit()")}}limitToLast(e){try{return new Rt(this.firestore,pr(this._delegate,iO(e)))}catch(n){throw St(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Rt(this.firestore,pr(this._delegate,sO(...e)))}catch(n){throw St(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Rt(this.firestore,pr(this._delegate,oO(...e)))}catch(n){throw St(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Rt(this.firestore,pr(this._delegate,aO(...e)))}catch(n){throw St(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Rt(this.firestore,pr(this._delegate,cO(...e)))}catch(n){throw St(n,"endAt()","Query.endAt()")}}isEqual(e){return uT(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=mO(this._delegate):(e==null?void 0:e.source)==="server"?n=gO(this._delegate):n=pO(this._delegate),n.then(r=>new wd(this.firestore,new qr(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=PT(e),r=CT(e,i=>new wd(this.firestore,new qr(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return AT(this._delegate,n,r)}withConverter(e){return new Rt(this.firestore,e?this._delegate.withConverter(Ni.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class VO{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new Ca(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class wd{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new Rt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Ca(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new VO(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new Ca(this._firestore,r))})}isEqual(e){return TT(this._delegate,e._delegate)}}class qs extends Rt{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Zt(this.firestore,e):null}doc(e){try{return e===void 0?new Zt(this.firestore,wu(this._delegate)):new Zt(this.firestore,wu(this._delegate,e))}catch(n){throw St(n,"doc()","CollectionReference.doc()")}}add(e){return yO(this._delegate,e).then(n=>new Zt(this.firestore,n))}isEqual(e){return cT(this._delegate,e._delegate)}withConverter(e){return new qs(this.firestore,e?this._delegate.withConverter(Ni.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function mi(t){return me(t,ke)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{constructor(...e){this._delegate=new $r(...e)}static documentId(){return new jp(Ne.keyField().canonicalString())}isEqual(e){return e=J(e),e instanceof $r?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e){this._delegate=e}static serverTimestamp(){const e=bO();return e._methodName="FieldValue.serverTimestamp",new ui(e)}static delete(){const e=AO();return e._methodName="FieldValue.delete",new ui(e)}static arrayUnion(...e){const n=RO(...e);return n._methodName="FieldValue.arrayUnion",new ui(n)}static arrayRemove(...e){const n=SO(...e);return n._methodName="FieldValue.arrayRemove",new ui(n)}static increment(e){const n=PO(e);return n._methodName="FieldValue.increment",new ui(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OO={Firestore:bT,GeoPoint:Tl,Timestamp:Oe,Blob:Sa,Transaction:RT,WriteBatch:ST,DocumentReference:Zt,DocumentSnapshot:Pa,Query:Rt,QueryDocumentSnapshot:Ca,QuerySnapshot:wd,CollectionReference:qs,FieldPath:jp,FieldValue:ui,setLogLevel:NO,CACHE_SIZE_UNLIMITED:F1};function LO(t,e){t.INTERNAL.registerComponent(new Fn("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},OO)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MO(t){LO(t,(e,n)=>new bT(e,n,new xO)),t.registerVersion(CO,kO)}MO(tn);const FO={apiKey:"AIzaSyAoKT3kZJG7ahjBKbjbUncgMroOSjFD2cg",authDomain:"vue-firebase-coeurofbear-1.firebaseapp.com",projectId:"vue-firebase-coeurofbear-1",storageBucket:"vue-firebase-coeurofbear-1.appspot.com",messagingSenderId:"469551062869",appId:"1:469551062869:web:f1ca5e33e56ae6039499dc",measurementId:"G-PKFPZBCHK2"};tn.initializeApp(FO);const ao=tn.firestore(),Wp=tn.auth(),Ed=Na(null),UO=async()=>{Ed.value=null;try{await Wp.signOut()}catch(t){console.log(t.message),Ed.value=t.message}},BO=()=>({error:Ed,logout:UO});function $O(){return kT().__VUE_DEVTOOLS_GLOBAL_HOOK__}function kT(){return typeof navigator!="undefined"&&typeof window!="undefined"?window:typeof global!="undefined"?global:{}}const qO=typeof Proxy=="function",jO="devtools-plugin:setup",WO="plugin:settings:set";let rs,Td;function GO(){var t;return rs!==void 0||(typeof window!="undefined"&&window.performance?(rs=!0,Td=window.performance):typeof global!="undefined"&&((t=global.perf_hooks)===null||t===void 0?void 0:t.performance)?(rs=!0,Td=global.perf_hooks.performance):rs=!1),rs}function zO(){return GO()?Td.now():Date.now()}class KO{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const r={};if(e.settings)for(const o in e.settings){const a=e.settings[o];r[o]=a.defaultValue}const i=`__vue-devtools-plugin-settings__${e.id}`;let s=Object.assign({},r);try{const o=localStorage.getItem(i),a=JSON.parse(o);Object.assign(s,a)}catch{}this.fallbacks={getSettings(){return s},setSettings(o){try{localStorage.setItem(i,JSON.stringify(o))}catch{}s=o},now(){return zO()}},n&&n.on(WO,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(u=>{this.targetQueue.push({method:a,args:c,resolve:u})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function HO(t,e){const n=t,r=kT(),i=$O(),s=qO&&n.enableEarlyProxy;if(i&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!s))i.emit(jO,t,e);else{const o=s?new KO(n,i):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */var DT="store";function Nl(t){return t===void 0&&(t=null),Nn(t!==null?t:DT)}function co(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function QO(t){return t!==null&&typeof t=="object"}function YO(t){return t&&typeof t.then=="function"}function JO(t,e){return function(){return t(e)}}function xT(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var r=e.indexOf(t);r>-1&&e.splice(r,1)}}function NT(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;Vl(t,n,[],t._modules.root,!0),Gp(t,n,e)}function Gp(t,e,n){var r=t._state,i=t._scope;t.getters={},t._makeLocalGettersCache=Object.create(null);var s=t._wrappedGetters,o={},a={},c=SA(!0);c.run(function(){co(s,function(u,l){o[l]=JO(u,t),a[l]=zt(function(){return o[l]()}),Object.defineProperty(t.getters,l,{get:function(){return a[l].value},enumerable:!0})})}),t._state=xa({data:e}),t._scope=c,t.strict&&nL(t),r&&n&&t._withCommit(function(){r.data=null}),i&&i.stop()}function Vl(t,e,n,r,i){var s=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=r),!s&&!i){var a=zp(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){a[c]=r.state})}var u=r.context=XO(t,o,n);r.forEachMutation(function(l,h){var d=o+h;ZO(t,d,l,u)}),r.forEachAction(function(l,h){var d=l.root?h:o+h,f=l.handler||l;eL(t,d,f,u)}),r.forEachGetter(function(l,h){var d=o+h;tL(t,d,l,u)}),r.forEachChild(function(l,h){Vl(t,e,n.concat(h),l,i)})}function XO(t,e,n){var r=e==="",i={dispatch:r?t.dispatch:function(s,o,a){var c=Tu(s,o,a),u=c.payload,l=c.options,h=c.type;return(!l||!l.root)&&(h=e+h),t.dispatch(h,u)},commit:r?t.commit:function(s,o,a){var c=Tu(s,o,a),u=c.payload,l=c.options,h=c.type;(!l||!l.root)&&(h=e+h),t.commit(h,u,l)}};return Object.defineProperties(i,{getters:{get:r?function(){return t.getters}:function(){return VT(t,e)}},state:{get:function(){return zp(t.state,n)}}}),i}function VT(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach(function(i){if(i.slice(0,r)===e){var s=i.slice(r);Object.defineProperty(n,s,{get:function(){return t.getters[i]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function ZO(t,e,n,r){var i=t._mutations[e]||(t._mutations[e]=[]);i.push(function(o){n.call(t,r.state,o)})}function eL(t,e,n,r){var i=t._actions[e]||(t._actions[e]=[]);i.push(function(o){var a=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},o);return YO(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(c){throw t._devtoolHook.emit("vuex:error",c),c}):a})}function tL(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(s){return n(r.state,r.getters,s.state,s.getters)})}function nL(t){_s(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function zp(t,e){return e.reduce(function(n,r){return n[r]},t)}function Tu(t,e,n){return QO(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var rL="vuex bindings",V_="vuex:mutations",fh="vuex:actions",is="vuex",iL=0;function sL(t,e){HO({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[rL]},function(n){n.addTimelineLayer({id:V_,label:"Vuex Mutations",color:O_}),n.addTimelineLayer({id:fh,label:"Vuex Actions",color:O_}),n.addInspector({id:is,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(r){if(r.app===t&&r.inspectorId===is)if(r.filter){var i=[];FT(i,e._modules.root,r.filter,""),r.rootNodes=i}else r.rootNodes=[MT(e._modules.root,"")]}),n.on.getInspectorState(function(r){if(r.app===t&&r.inspectorId===is){var i=r.nodeId;VT(e,i),r.state=cL(lL(e._modules,i),i==="root"?e.getters:e._makeLocalGettersCache,i)}}),n.on.editInspectorState(function(r){if(r.app===t&&r.inspectorId===is){var i=r.nodeId,s=r.path;i!=="root"&&(s=i.split("/").filter(Boolean).concat(s)),e._withCommit(function(){r.set(e._state.data,s,r.state.value)})}}),e.subscribe(function(r,i){var s={};r.payload&&(s.payload=r.payload),s.state=i,n.notifyComponentUpdate(),n.sendInspectorTree(is),n.sendInspectorState(is),n.addTimelineEvent({layerId:V_,event:{time:Date.now(),title:r.type,data:s}})}),e.subscribeAction({before:function(r,i){var s={};r.payload&&(s.payload=r.payload),r._id=iL++,r._time=Date.now(),s.state=i,n.addTimelineEvent({layerId:fh,event:{time:r._time,title:r.type,groupId:r._id,subtitle:"start",data:s}})},after:function(r,i){var s={},o=Date.now()-r._time;s.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},r.payload&&(s.payload=r.payload),s.state=i,n.addTimelineEvent({layerId:fh,event:{time:Date.now(),title:r.type,groupId:r._id,subtitle:"end",data:s}})}})})}var O_=8702998,oL=6710886,aL=16777215,OT={label:"namespaced",textColor:aL,backgroundColor:oL};function LT(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function MT(t,e){return{id:e||"root",label:LT(e),tags:t.namespaced?[OT]:[],children:Object.keys(t._children).map(function(n){return MT(t._children[n],e+n+"/")})}}function FT(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[OT]:[]}),Object.keys(e._children).forEach(function(i){FT(t,e._children[i],n,r+i+"/")})}function cL(t,e,n){e=n==="root"?e:e[n];var r=Object.keys(e),i={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(r.length){var s=uL(e);i.getters=Object.keys(s).map(function(o){return{key:o.endsWith("/")?LT(o):o,editable:!1,value:Ad(function(){return s[o]})}})}return i}function uL(t){var e={};return Object.keys(t).forEach(function(n){var r=n.split("/");if(r.length>1){var i=e,s=r.pop();r.forEach(function(o){i[o]||(i[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),i=i[o]._custom.value}),i[s]=Ad(function(){return t[n]})}else e[n]=Ad(function(){return t[n]})}),e}function lL(t,e){var n=e.split("/").filter(function(r){return r});return n.reduce(function(r,i,s){var o=r[i];if(!o)throw new Error('Missing module "'+i+'" for path "'+e+'".');return s===n.length-1?o:o._children},e==="root"?t:t.root._children)}function Ad(t){try{return t()}catch(e){return e}}var mn=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var r=e.state;this.state=(typeof r=="function"?r():r)||{}},UT={namespaced:{configurable:!0}};UT.namespaced.get=function(){return!!this._rawModule.namespaced};mn.prototype.addChild=function(e,n){this._children[e]=n};mn.prototype.removeChild=function(e){delete this._children[e]};mn.prototype.getChild=function(e){return this._children[e]};mn.prototype.hasChild=function(e){return e in this._children};mn.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};mn.prototype.forEachChild=function(e){co(this._children,e)};mn.prototype.forEachGetter=function(e){this._rawModule.getters&&co(this._rawModule.getters,e)};mn.prototype.forEachAction=function(e){this._rawModule.actions&&co(this._rawModule.actions,e)};mn.prototype.forEachMutation=function(e){this._rawModule.mutations&&co(this._rawModule.mutations,e)};Object.defineProperties(mn.prototype,UT);var zi=function(e){this.register([],e,!1)};zi.prototype.get=function(e){return e.reduce(function(n,r){return n.getChild(r)},this.root)};zi.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(r,i){return n=n.getChild(i),r+(n.namespaced?i+"/":"")},"")};zi.prototype.update=function(e){BT([],this.root,e)};zi.prototype.register=function(e,n,r){var i=this;r===void 0&&(r=!0);var s=new mn(n,r);if(e.length===0)this.root=s;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],s)}n.modules&&co(n.modules,function(a,c){i.register(e.concat(c),a,r)})};zi.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1],i=n.getChild(r);!i||!i.runtime||n.removeChild(r)};zi.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1];return n?n.hasChild(r):!1};function BT(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return;BT(t.concat(r),e.getChild(r),n.modules[r])}}function hL(t){return new jt(t)}var jt=function(e){var n=this;e===void 0&&(e={});var r=e.plugins;r===void 0&&(r=[]);var i=e.strict;i===void 0&&(i=!1);var s=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new zi(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=s;var o=this,a=this,c=a.dispatch,u=a.commit;this.dispatch=function(d,f){return c.call(o,d,f)},this.commit=function(d,f,v){return u.call(o,d,f,v)},this.strict=i;var l=this._modules.root.state;Vl(this,l,[],this._modules.root),Gp(this,l),r.forEach(function(h){return h(n)})},Kp={state:{configurable:!0}};jt.prototype.install=function(e,n){e.provide(n||DT,this),e.config.globalProperties.$store=this;var r=this._devtools!==void 0?this._devtools:!1;r&&sL(e,this)};Kp.state.get=function(){return this._state.data};Kp.state.set=function(t){};jt.prototype.commit=function(e,n,r){var i=this,s=Tu(e,n,r),o=s.type,a=s.payload,c={type:o,payload:a},u=this._mutations[o];!u||(this._withCommit(function(){u.forEach(function(h){h(a)})}),this._subscribers.slice().forEach(function(l){return l(c,i.state)}))};jt.prototype.dispatch=function(e,n){var r=this,i=Tu(e,n),s=i.type,o=i.payload,a={type:s,payload:o},c=this._actions[s];if(!!c){try{this._actionSubscribers.slice().filter(function(l){return l.before}).forEach(function(l){return l.before(a,r.state)})}catch{}var u=c.length>1?Promise.all(c.map(function(l){return l(o)})):c[0](o);return new Promise(function(l,h){u.then(function(d){try{r._actionSubscribers.filter(function(f){return f.after}).forEach(function(f){return f.after(a,r.state)})}catch{}l(d)},function(d){try{r._actionSubscribers.filter(function(f){return f.error}).forEach(function(f){return f.error(a,r.state,d)})}catch{}h(d)})})}};jt.prototype.subscribe=function(e,n){return xT(e,this._subscribers,n)};jt.prototype.subscribeAction=function(e,n){var r=typeof e=="function"?{before:e}:e;return xT(r,this._actionSubscribers,n)};jt.prototype.watch=function(e,n,r){var i=this;return _s(function(){return e(i.state,i.getters)},n,Object.assign({},r))};jt.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};jt.prototype.registerModule=function(e,n,r){r===void 0&&(r={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),Vl(this,this.state,e,this._modules.get(e),r.preserveState),Gp(this,this.state)};jt.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var r=zp(n.state,e.slice(0,-1));delete r[e[e.length-1]]}),NT(this)};jt.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};jt.prototype.hotUpdate=function(e){this._modules.update(e),NT(this,!0)};jt.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(jt.prototype,Kp);var Ye=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n};const dL=t=>(Li("data-v-2835d45a"),t=t(),Mi(),t),fL={class:"header"},pL={class:"container"},mL={class:"links"},gL=dL(()=>D("span",{class:"text-[#fff] text-4xl font-bold"},"Germantionary",-1)),_L={key:0,class:"flex"},yL={class:"text-[#fff]"},vL={key:1,class:"links"},IL={class:"text-[#fff]"},wL={__name:"Header",setup(t){const e=Nl(),n=zt(()=>e.state.user),{logout:r}=BO(),i=async()=>{await r()};return(s,o)=>{const a=Ge("router-link");return Y(),ie("header",fL,[D("div",pL,[D("div",mL,[ae(a,{to:"/"},{default:Xn(()=>[gL]),_:1}),n.value?(Y(),ie("div",_L,[D("span",yL,[kt("Hi, "+wt(n.value.displayName)+", ",1),D("span",{onClick:i,class:"link text-[#fff]"},"Logout")])])):(Y(),ie("div",vL,[D("span",IL,[kt("New? "),ae(a,{class:"link text-[#fff]",to:"/signup"},{default:Xn(()=>[kt(" Signup here")]),_:1})])]))])])])}}};var $T=Ye(wL,[["__scopeId","data-v-2835d45a"]]),EL="/assets/search.51aa8b4d.svg";const TL={name:"SearchBar",data(){return{searchValue:""}},watch:{searchValue(t){this.$emit("send-input",t)}}},AL=t=>(Li("data-v-5976db2e"),t=t(),Mi(),t),bL={class:"search-wrapper"},RL=AL(()=>D("img",{src:EL,alt:""},null,-1));function SL(t,e,n,r,i,s){return Y(),ie("div",bL,[Sn(D("input",{class:"search-bar",type:"text",placeholder:"Search for a word","onUpdate:modelValue":e[0]||(e[0]=o=>i.searchValue=o)},null,512),[[Rr,i.searchValue]]),RL])}var PL=Ye(TL,[["render",SL],["__scopeId","data-v-5976db2e"]]);const CL={name:"ItemTag",props:{word:{type:String,default:null},clear:{type:Boolean,default:!1}},computed:{typeOfWordColor(){return{green:this.word==="noun",blue:this.word==="verb",red:this.word==="adjetive",purple:this.word==="adverb",pink:this.word==="article"}}}};function kL(t,e,n,r,i,s){return Y(),ie("div",{class:Jn(["tag",[s.typeOfWordColor,{clear:this.clear}]])},wt(n.word),3)}var qT=Ye(CL,[["render",kL],["__scopeId","data-v-77a85e35"]]);const DL={name:"ItemDate",props:{wordDate:{type:Number,default:null}},computed:{dateFormat(){return new Date(this.wordDate*1e3).toLocaleString("en-GB",{year:"numeric",month:"numeric",day:"numeric"})}}},xL={class:"date"};function NL(t,e,n,r,i,s){return Y(),ie("div",xL,[Wd(t.$slots,"default",{},void 0,!0),D("span",null,wt(s.dateFormat),1)])}var jT=Ye(DL,[["render",NL],["__scopeId","data-v-42ace813"]]),VL="/assets/delete.00ff1e46.svg";const OL={name:"Item",components:{Tag:qT,Date:jT},props:{date:{type:Boolean},search:{type:Boolean,default:!1},word:{type:Object},edit:{type:Function}},computed:{classes(){return{search:this.search,regular:!this.search}}},methods:{async deleteItem(t){const e=await ao.collection(this.$store.state.user.uid).doc(t),n=await e.get().then(i=>i.data());confirm(`Please confirm that you want to delete '${n.word}'`)&&e.delete()},goToDetail(t){this.$route.params.id!==t&&this.$router.push(`/words/${t}`)}}},WT=t=>(Li("data-v-e98d7566"),t=t(),Mi(),t),LL={class:"word"},ML={class:"meaning"},FL={class:"elements"},UL={class:"elements"},BL={class:"elements"},$L=WT(()=>D("div",{class:"line"},null,-1)),qL=WT(()=>D("img",{src:VL,alt:""},null,-1)),jL=[qL];function WL(t,e,n,r,i,s){const o=Ge("Date"),a=Ge("Tag");return Y(),ie("li",{class:Jn([s.classes,"bar"]),onClick:e[3]||(e[3]=c=>t.$store.commit("setWordId",n.word.wordId))},[D("div",{class:Jn(["left",n.date?"inline":""])},[D("div",{class:"main-word",onClick:e[0]||(e[0]=c=>s.goToDetail(n.word.wordId))},[D("div",LL,wt(n.word.word),1),kt(" / "),D("div",ML,wt(n.word.meaning),1)]),n.date?(Y(),ln(o,{key:0,wordDate:n.word.date.seconds,onClick:e[1]||(e[1]=c=>s.goToDetail(n.word.wordId))},{default:Xn(()=>[kt("Added in: ")]),_:1},8,["wordDate"])):en("",!0)],2),D("div",FL,[D("div",UL,[n.word.gender?(Y(),ln(a,{key:0,word:n.word.gender.charAt(0),clear:""},null,8,["word"])):en("",!0),ae(a,{word:n.word.type},null,8,["word"])]),D("div",BL,[$L,D("div",{onClick:e[2]||(e[2]=c=>s.deleteItem(n.word.wordId)),class:"circle-icon yellow"},jL)])])],2)}var GT=Ye(OL,[["render",WL],["__scopeId","data-v-e98d7566"]]);const GL={name:"SearchResults",components:{Item:GT},data(){return{words:[],filteredWords:[]}},props:{searchedWord:{type:String,default:""}},watch:{searchedWord(){this.filterData(this.searchedWord)},words(){this.filterData(this.searchedWord)}},mounted(){this.getData()},methods:{getData(){ao.collection(this.$store.state.user.uid).onSnapshot(t=>{this.words=t.docs.map(e=>({...e.data(),wordId:e.id}))})},filterData(t){this.filteredWords=this.words.filter(e=>{if(t.length>0)return e.word&&e.word.toUpperCase().includes(t.toUpperCase())||e.meaning&&e.meaning.toUpperCase().includes(t.toUpperCase())})}}},zL={key:0},KL={key:1},HL={key:2},QL={class:"list"};function YL(t,e,n,r,i,s){const o=Ge("Item");return Y(),ie("div",null,[n.searchedWord?(Y(),ie("h3",zL,"Search results for '"+wt(n.searchedWord)+"'",1)):en("",!0),n.searchedWord&&!i.filteredWords.length?(Y(),ie("div",KL,[D("p",null,"No results for '"+wt(n.searchedWord)+"'",1)])):(Y(),ie("div",HL,[D("ul",QL,[(Y(!0),ie(yt,null,No(i.filteredWords,(a,c)=>(Y(),ln(o,{date:"",search:"",word:a,key:c},null,8,["word"]))),128))])]))])}var JL=Ye(GL,[["render",YL],["__scopeId","data-v-29c95b5e"]]);const XL={name:"SearchSection",components:{SearchResults:JL,SearchBar:PL},data(){return{searchedWord:""}},watch:{"$route.path"(){this.searchedWord=""}}},ZL={class:"search-section"},eM={class:"container"};function tM(t,e,n,r,i,s){const o=Ge("SearchBar"),a=Ge("SearchResults");return Y(),ie("div",ZL,[D("div",eM,[ae(o,{onSendInput:e[0]||(e[0]=c=>i.searchedWord=c)}),ae(a,{searchedWord:i.searchedWord},null,8,["searchedWord"])])])}var nM=Ye(XL,[["render",tM],["__scopeId","data-v-cbc9ee72"]]);const rM=D("footer",null,null,-1),iM={__name:"default",setup(t){return(e,n)=>(Y(),ie("main",null,[ae($T),ae(nM),Wd(e.$slots,"default"),rM]))}},sM=D("footer",null,null,-1),oM={__name:"simple",setup(t){return(e,n)=>(Y(),ie("main",null,[ae($T),Wd(e.$slots,"default"),sM]))}},zT=Na(Wp.currentUser);Wp.onAuthStateChanged(t=>{zT.value=t});const aM=()=>({user:zT});const cM={id:"app"},uM={__name:"App",setup(t){const{user:e}=aM(),n=Nl();return My(()=>{n.commit("setUser",e)}),(r,i)=>{const s=Ge("router-view");return Y(),ie("div",cM,[(Y(),ln(ub(Pt(e)?iM:oM),{user:Pt(e)},{default:Xn(()=>[ae(s)]),_:1},8,["user"]))])}}},lM="modulepreload",L_={},hM="/",dM=function(e,n){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=`${hM}${r}`,r in L_)return;L_[r]=!0;const i=r.endsWith(".css"),s=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${s}`))return;const o=document.createElement("link");if(o.rel=i?"stylesheet":lM,i||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),i)return new Promise((a,c)=>{o.addEventListener("load",a),o.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const ls=typeof window!="undefined";function fM(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ve=Object.assign;function ph(t,e){const n={};for(const r in e){const i=e[r];n[r]=pn(i)?i.map(t):t(i)}return n}const zo=()=>{},pn=Array.isArray,pM=/\/$/,mM=t=>t.replace(pM,"");function mh(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),s=e.slice(c+1,a>-1?a:e.length),i=t(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=vM(r!=null?r:e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function gM(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function M_(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function _M(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&js(e.matched[r],n.matched[i])&&KT(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function js(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function KT(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!yM(t[n],e[n]))return!1;return!0}function yM(t,e){return pn(t)?F_(t,e):pn(e)?F_(e,t):t===e}function F_(t,e){return pn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function vM(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var ka;(function(t){t.pop="pop",t.push="push"})(ka||(ka={}));var Ko;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ko||(Ko={}));function IM(t){if(!t)if(ls){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),mM(t)}const wM=/^[^#]+#/;function EM(t,e){return t.replace(wM,"#")+e}function TM(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ol=()=>({left:window.pageXOffset,top:window.pageYOffset});function AM(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=TM(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function U_(t,e){return(history.state?history.state.position-e:-1)+t}const bd=new Map;function bM(t,e){bd.set(t,e)}function RM(t){const e=bd.get(t);return bd.delete(t),e}let SM=()=>location.protocol+"//"+location.host;function HT(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let a=i.includes(t.slice(s))?t.slice(s).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),M_(c,"")}return M_(n,t)+r+i}function PM(t,e,n,r){let i=[],s=[],o=null;const a=({state:d})=>{const f=HT(t,location),v=n.value,I=e.value;let w=0;if(d){if(n.value=f,e.value=d,o&&o===v){o=null;return}w=I?d.position-I.position:0}else r(f);i.forEach(S=>{S(n.value,v,{delta:w,type:ka.pop,direction:w?w>0?Ko.forward:Ko.back:Ko.unknown})})};function c(){o=n.value}function u(d){i.push(d);const f=()=>{const v=i.indexOf(d);v>-1&&i.splice(v,1)};return s.push(f),f}function l(){const{history:d}=window;!d.state||d.replaceState(ve({},d.state,{scroll:Ol()}),"")}function h(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l,{passive:!0}),{pauseListeners:c,listen:u,destroy:h}}function B_(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?Ol():null}}function CM(t){const{history:e,location:n}=window,r={value:HT(t,n)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(c,u,l){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:SM()+t+c;try{e[l?"replaceState":"pushState"](u,"",d),i.value=u}catch(f){console.error(f),n[l?"replace":"assign"](d)}}function o(c,u){const l=ve({},e.state,B_(i.value.back,c,i.value.forward,!0),u,{position:i.value.position});s(c,l,!0),r.value=c}function a(c,u){const l=ve({},i.value,e.state,{forward:c,scroll:Ol()});s(l.current,l,!0);const h=ve({},B_(r.value,c,null),{position:l.position+1},u);s(c,h,!1),r.value=c}return{location:r,state:i,push:a,replace:o}}function kM(t){t=IM(t);const e=CM(t),n=PM(t,e.state,e.location,e.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=ve({location:"",base:t,go:r,createHref:EM.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function DM(t){return typeof t=="string"||t&&typeof t=="object"}function QT(t){return typeof t=="string"||typeof t=="symbol"}const mr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},YT=Symbol("");var $_;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})($_||($_={}));function Ws(t,e){return ve(new Error,{type:t,[YT]:!0},e)}function jn(t,e){return t instanceof Error&&YT in t&&(e==null||!!(t.type&e))}const q_="[^/]+?",xM={sensitive:!1,strict:!1,start:!0,end:!0},NM=/[.+*?^${}()[\]/\\]/g;function VM(t,e){const n=ve({},xM,e),r=[];let i=n.start?"^":"";const s=[];for(const u of t){const l=u.length?[]:[90];n.strict&&!u.length&&(i+="/");for(let h=0;h<u.length;h++){const d=u[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(NM,"\\$&"),f+=40;else if(d.type===1){const{value:v,repeatable:I,optional:w,regexp:S}=d;s.push({name:v,repeatable:I,optional:w});const V=S||q_;if(V!==q_){f+=10;try{new RegExp(`(${V})`)}catch(H){throw new Error(`Invalid custom RegExp for param "${v}" (${V}): `+H.message)}}let N=I?`((?:${V})(?:/(?:${V}))*)`:`(${V})`;h||(N=w&&u.length<2?`(?:/${N})`:"/"+N),w&&(N+="?"),i+=N,f+=20,w&&(f+=-8),I&&(f+=-20),V===".*"&&(f+=-50)}l.push(f)}r.push(l)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(u){const l=u.match(o),h={};if(!l)return null;for(let d=1;d<l.length;d++){const f=l[d]||"",v=s[d-1];h[v.name]=f&&v.repeatable?f.split("/"):f}return h}function c(u){let l="",h=!1;for(const d of t){(!h||!l.endsWith("/"))&&(l+="/"),h=!1;for(const f of d)if(f.type===0)l+=f.value;else if(f.type===1){const{value:v,repeatable:I,optional:w}=f,S=v in u?u[v]:"";if(pn(S)&&!I)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const V=pn(S)?S.join("/"):S;if(!V)if(w)d.length<2&&(l.endsWith("/")?l=l.slice(0,-1):h=!0);else throw new Error(`Missing required param "${v}"`);l+=V}}return l||"/"}return{re:o,score:r,keys:s,parse:a,stringify:c}}function OM(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function LM(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const s=OM(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(j_(r))return 1;if(j_(i))return-1}return i.length-r.length}function j_(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const MM={type:0,value:""},FM=/[a-zA-Z0-9_]/;function UM(t){if(!t)return[[]];if(t==="/")return[[MM]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${u}": ${f}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,c,u="",l="";function h(){!u||(n===0?s.push({type:0,value:u}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function d(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:FM.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),i}function BM(t,e,n){const r=VM(UM(t.path),n),i=ve(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function $M(t,e){const n=[],r=new Map;e=z_({strict:!1,end:!0,sensitive:!1},e);function i(l){return r.get(l)}function s(l,h,d){const f=!d,v=qM(l);v.aliasOf=d&&d.record;const I=z_(e,l),w=[v];if("alias"in l){const N=typeof l.alias=="string"?[l.alias]:l.alias;for(const H of N)w.push(ve({},v,{components:d?d.record.components:v.components,path:H,aliasOf:d?d.record:v}))}let S,V;for(const N of w){const{path:H}=N;if(h&&H[0]!=="/"){const ee=h.record.path,$=ee[ee.length-1]==="/"?"":"/";N.path=h.record.path+(H&&$+H)}if(S=BM(N,h,I),d?d.alias.push(S):(V=V||S,V!==S&&V.alias.push(S),f&&l.name&&!G_(S)&&o(l.name)),v.children){const ee=v.children;for(let $=0;$<ee.length;$++)s(ee[$],S,d&&d.children[$])}d=d||S,(S.record.components&&Object.keys(S.record.components).length||S.record.name||S.record.redirect)&&c(S)}return V?()=>{o(V)}:zo}function o(l){if(QT(l)){const h=r.get(l);h&&(r.delete(l),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(l);h>-1&&(n.splice(h,1),l.record.name&&r.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return n}function c(l){let h=0;for(;h<n.length&&LM(l,n[h])>=0&&(l.record.path!==n[h].record.path||!JT(l,n[h]));)h++;n.splice(h,0,l),l.record.name&&!G_(l)&&r.set(l.record.name,l)}function u(l,h){let d,f={},v,I;if("name"in l&&l.name){if(d=r.get(l.name),!d)throw Ws(1,{location:l});I=d.record.name,f=ve(W_(h.params,d.keys.filter(V=>!V.optional).map(V=>V.name)),l.params&&W_(l.params,d.keys.map(V=>V.name))),v=d.stringify(f)}else if("path"in l)v=l.path,d=n.find(V=>V.re.test(v)),d&&(f=d.parse(v),I=d.record.name);else{if(d=h.name?r.get(h.name):n.find(V=>V.re.test(h.path)),!d)throw Ws(1,{location:l,currentLocation:h});I=d.record.name,f=ve({},h.params,l.params),v=d.stringify(f)}const w=[];let S=d;for(;S;)w.unshift(S.record),S=S.parent;return{name:I,path:v,params:f,matched:w,meta:WM(w)}}return t.forEach(l=>s(l)),{addRoute:s,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function W_(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function qM(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:jM(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function jM(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function G_(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function WM(t){return t.reduce((e,n)=>ve(e,n.meta),{})}function z_(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function JT(t,e){return e.children.some(n=>n===t||JT(t,n))}const XT=/#/g,GM=/&/g,zM=/\//g,KM=/=/g,HM=/\?/g,ZT=/\+/g,QM=/%5B/g,YM=/%5D/g,eA=/%5E/g,JM=/%60/g,tA=/%7B/g,XM=/%7C/g,nA=/%7D/g,ZM=/%20/g;function Hp(t){return encodeURI(""+t).replace(XM,"|").replace(QM,"[").replace(YM,"]")}function eF(t){return Hp(t).replace(tA,"{").replace(nA,"}").replace(eA,"^")}function Rd(t){return Hp(t).replace(ZT,"%2B").replace(ZM,"+").replace(XT,"%23").replace(GM,"%26").replace(JM,"`").replace(tA,"{").replace(nA,"}").replace(eA,"^")}function tF(t){return Rd(t).replace(KM,"%3D")}function nF(t){return Hp(t).replace(XT,"%23").replace(HM,"%3F")}function rF(t){return t==null?"":nF(t).replace(zM,"%2F")}function Au(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function iF(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(ZT," "),o=s.indexOf("="),a=Au(o<0?s:s.slice(0,o)),c=o<0?null:Au(s.slice(o+1));if(a in e){let u=e[a];pn(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function K_(t){let e="";for(let n in t){const r=t[n];if(n=tF(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(pn(r)?r.map(s=>s&&Rd(s)):[r&&Rd(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function sF(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=pn(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const oF=Symbol(""),H_=Symbol(""),Qp=Symbol(""),rA=Symbol(""),Sd=Symbol("");function To(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function vr(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Ws(4,{from:n,to:e})):h instanceof Error?a(h):DM(h)?a(Ws(2,{from:e,to:h})):(s&&r.enterCallbacks[i]===s&&typeof h=="function"&&s.push(h),o())},u=t.call(r&&r.instances[i],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(h=>a(h))})}function gh(t,e,n,r){const i=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(aF(a)){const u=(a.__vccOpts||a)[e];u&&i.push(vr(u,n,r,s,o))}else{let c=a();i.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const l=fM(u)?u.default:u;s.components[o]=l;const d=(l.__vccOpts||l)[e];return d&&vr(d,n,r,s,o)()}))}}return i}function aF(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Q_(t){const e=Nn(Qp),n=Nn(rA),r=zt(()=>e.resolve(Pt(t.to))),i=zt(()=>{const{matched:c}=r.value,{length:u}=c,l=c[u-1],h=n.matched;if(!l||!h.length)return-1;const d=h.findIndex(js.bind(null,l));if(d>-1)return d;const f=Y_(c[u-2]);return u>1&&Y_(l)===f&&h[h.length-1].path!==f?h.findIndex(js.bind(null,c[u-2])):d}),s=zt(()=>i.value>-1&&hF(n.params,r.value.params)),o=zt(()=>i.value>-1&&i.value===n.matched.length-1&&KT(n.params,r.value.params));function a(c={}){return lF(c)?e[Pt(t.replace)?"replace":"push"](Pt(t.to)).catch(zo):Promise.resolve()}return{route:r,href:zt(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const cF=Vy({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Q_,setup(t,{slots:e}){const n=xa(Q_(t)),{options:r}=Nn(Qp),i=zt(()=>({[J_(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[J_(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:Zy("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),uF=cF;function lF(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function hF(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!pn(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function Y_(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const J_=(t,e,n)=>t!=null?t:e!=null?e:n,dF=Vy({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Nn(Sd),i=zt(()=>t.route||r.value),s=Nn(H_,0),o=zt(()=>{let u=Pt(s);const{matched:l}=i.value;let h;for(;(h=l[u])&&!h.components;)u++;return u}),a=zt(()=>i.value.matched[o.value]);Sc(H_,zt(()=>o.value+1)),Sc(oF,a),Sc(Sd,i);const c=Na();return _s(()=>[c.value,a.value,t.name],([u,l,h],[d,f,v])=>{l&&(l.instances[h]=u,f&&f!==l&&u&&u===d&&(l.leaveGuards.size||(l.leaveGuards=f.leaveGuards),l.updateGuards.size||(l.updateGuards=f.updateGuards))),u&&l&&(!f||!js(l,f)||!d)&&(l.enterCallbacks[h]||[]).forEach(I=>I(u))},{flush:"post"}),()=>{const u=i.value,l=t.name,h=a.value,d=h&&h.components[l];if(!d)return X_(n.default,{Component:d,route:u});const f=h.props[l],v=f?f===!0?u.params:typeof f=="function"?f(u):f:null,w=Zy(d,ve({},v,e,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(h.instances[l]=null)},ref:c}));return X_(n.default,{Component:w,route:u})||w}}});function X_(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const fF=dF;function pF(t){const e=$M(t.routes,t),n=t.parseQuery||iF,r=t.stringifyQuery||K_,i=t.history,s=To(),o=To(),a=To(),c=YA(mr);let u=mr;ls&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=ph.bind(null,T=>""+T),h=ph.bind(null,rF),d=ph.bind(null,Au);function f(T,j){let U,z;return QT(T)?(U=e.getRecordMatcher(T),z=j):z=T,e.addRoute(z,U)}function v(T){const j=e.getRecordMatcher(T);j&&e.removeRoute(j)}function I(){return e.getRoutes().map(T=>T.record)}function w(T){return!!e.getRecordMatcher(T)}function S(T,j){if(j=ve({},j||c.value),typeof T=="string"){const m=mh(n,T,j.path),_=e.resolve({path:m.path},j),A=i.createHref(m.fullPath);return ve(m,_,{params:d(_.params),hash:Au(m.hash),redirectedFrom:void 0,href:A})}let U;if("path"in T)U=ve({},T,{path:mh(n,T.path,j.path).path});else{const m=ve({},T.params);for(const _ in m)m[_]==null&&delete m[_];U=ve({},T,{params:h(m)}),j.params=h(j.params)}const z=e.resolve(U,j),ye=T.hash||"";z.params=l(d(z.params));const De=gM(r,ve({},T,{hash:eF(ye),path:z.path})),p=i.createHref(De);return ve({fullPath:De,hash:ye,query:r===K_?sF(T.query):T.query||{}},z,{redirectedFrom:void 0,href:p})}function V(T){return typeof T=="string"?mh(n,T,c.value.path):ve({},T)}function N(T,j){if(u!==T)return Ws(8,{from:j,to:T})}function H(T){return he(T)}function ee(T){return H(ve(V(T),{replace:!0}))}function $(T){const j=T.matched[T.matched.length-1];if(j&&j.redirect){const{redirect:U}=j;let z=typeof U=="function"?U(T):U;return typeof z=="string"&&(z=z.includes("?")||z.includes("#")?z=V(z):{path:z},z.params={}),ve({query:T.query,hash:T.hash,params:"path"in z?{}:T.params},z)}}function he(T,j){const U=u=S(T),z=c.value,ye=T.state,De=T.force,p=T.replace===!0,m=$(U);if(m)return he(ve(V(m),{state:typeof m=="object"?ve({},ye,m.state):ye,force:De,replace:p}),j||U);const _=U;_.redirectedFrom=j;let A;return!De&&_M(r,z,U)&&(A=Ws(16,{to:_,from:z}),_n(z,z,!0,!1)),(A?Promise.resolve(A):At(_,z)).catch(E=>jn(E)?jn(E,2)?E:ur(E):_e(E,_,z)).then(E=>{if(E){if(jn(E,2))return he(ve({replace:p},V(E.to),{state:typeof E.to=="object"?ve({},ye,E.to.state):ye,force:De}),j||_)}else E=Jr(_,z,!0,p,ye);return cr(_,z,E),E})}function je(T,j){const U=N(T,j);return U?Promise.reject(U):Promise.resolve()}function Jt(T){const j=Qi.values().next().value;return j&&typeof j.runWithContext=="function"?j.runWithContext(T):T()}function At(T,j){let U;const[z,ye,De]=mF(T,j);U=gh(z.reverse(),"beforeRouteLeave",T,j);for(const m of z)m.leaveGuards.forEach(_=>{U.push(vr(_,T,j))});const p=je.bind(null,T,j);return U.push(p),gt(U).then(()=>{U=[];for(const m of s.list())U.push(vr(m,T,j));return U.push(p),gt(U)}).then(()=>{U=gh(ye,"beforeRouteUpdate",T,j);for(const m of ye)m.updateGuards.forEach(_=>{U.push(vr(_,T,j))});return U.push(p),gt(U)}).then(()=>{U=[];for(const m of De)if(m.beforeEnter)if(pn(m.beforeEnter))for(const _ of m.beforeEnter)U.push(vr(_,T,j));else U.push(vr(m.beforeEnter,T,j));return U.push(p),gt(U)}).then(()=>(T.matched.forEach(m=>m.enterCallbacks={}),U=gh(De,"beforeRouteEnter",T,j),U.push(p),gt(U))).then(()=>{U=[];for(const m of o.list())U.push(vr(m,T,j));return U.push(p),gt(U)}).catch(m=>jn(m,8)?m:Promise.reject(m))}function cr(T,j,U){a.list().forEach(z=>Jt(()=>z(T,j,U)))}function Jr(T,j,U,z,ye){const De=N(T,j);if(De)return De;const p=j===mr,m=ls?history.state:{};U&&(z||p?i.replace(T.fullPath,ve({scroll:p&&m&&m.scroll},ye)):i.push(T.fullPath,ye)),c.value=T,_n(T,j,U,p),ur()}let gn;function uo(){gn||(gn=i.listen((T,j,U)=>{if(!ac.listening)return;const z=S(T),ye=$(z);if(ye){he(ve(ye,{replace:!0}),z).catch(zo);return}u=z;const De=c.value;ls&&bM(U_(De.fullPath,U.delta),Ol()),At(z,De).catch(p=>jn(p,12)?p:jn(p,2)?(he(p.to,z).then(m=>{jn(m,20)&&!U.delta&&U.type===ka.pop&&i.go(-1,!1)}).catch(zo),Promise.reject()):(U.delta&&i.go(-U.delta,!1),_e(p,z,De))).then(p=>{p=p||Jr(z,De,!1),p&&(U.delta&&!jn(p,8)?i.go(-U.delta,!1):U.type===ka.pop&&jn(p,20)&&i.go(-1,!1)),cr(z,De,p)}).catch(zo)}))}let Ki=To(),Xe=To(),Ee;function _e(T,j,U){ur(T);const z=Xe.list();return z.length?z.forEach(ye=>ye(T,j,U)):console.error(T),Promise.reject(T)}function qn(){return Ee&&c.value!==mr?Promise.resolve():new Promise((T,j)=>{Ki.add([T,j])})}function ur(T){return Ee||(Ee=!T,uo(),Ki.list().forEach(([j,U])=>T?U(T):j()),Ki.reset()),T}function _n(T,j,U,z){const{scrollBehavior:ye}=t;if(!ls||!ye)return Promise.resolve();const De=!U&&RM(U_(T.fullPath,0))||(z||!U)&&history.state&&history.state.scroll||null;return by().then(()=>ye(T,j,De)).then(p=>p&&AM(p)).catch(p=>_e(p,T,j))}const Vt=T=>i.go(T);let Hi;const Qi=new Set,ac={currentRoute:c,listening:!0,addRoute:f,removeRoute:v,hasRoute:w,getRoutes:I,resolve:S,options:t,push:H,replace:ee,go:Vt,back:()=>Vt(-1),forward:()=>Vt(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:Xe.add,isReady:qn,install(T){const j=this;T.component("RouterLink",uF),T.component("RouterView",fF),T.config.globalProperties.$router=j,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>Pt(c)}),ls&&!Hi&&c.value===mr&&(Hi=!0,H(i.location).catch(ye=>{}));const U={};for(const ye in mr)Object.defineProperty(U,ye,{get:()=>c.value[ye],enumerable:!0});T.provide(Qp,j),T.provide(rA,gy(U)),T.provide(Sd,c);const z=T.unmount;Qi.add(T),T.unmount=function(){Qi.delete(T),Qi.size<1&&(u=mr,gn&&gn(),gn=null,c.value=mr,Hi=!1,Ee=!1),z()}}};function gt(T){return T.reduce((j,U)=>j.then(()=>Jt(U)),Promise.resolve())}return ac}function mF(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(u=>js(u,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>js(u,c))||i.push(c))}return[n,r,i]}var iA={methods:{__capitalizeFirstLetter(t){return t.charAt(0).toUpperCase()+t.slice(1)}}},gF="/assets/plus.cb3813de.svg";const _F={name:"AddNewWord",mixins:[iA],data(){return{errors:[],word:{word:"",meaning:"",type:"",gender:""},success:null,typesOfWords:["noun","verb","adjetive","adverb","article"],genders:["masculine","femenine","neutral"]}},methods:{addNewWord(){if(this.errors=[],!this.word.word||!this.word.meaning||!this.word.type){this.errors.push("Please fill all the fields.");return}ao.collection(this.$store.state.user.uid).add({word:this.word.word,meaning:this.word.meaning,type:this.word.type,gender:this.word.gender,date:new Date}),this.success=`'${this.word.word}' has been added to the list.`,this.word.word=this.word.meaning=this.word.type=this.word.gender="",setTimeout(()=>{this.success=null},4e3)}}},yF=D("option",{disabled:"",selected:"",value:""},"Type",-1),vF=["value"],IF=D("option",{disabled:"",selected:"",value:""},"Gender",-1),wF=["value"],EF=D("button",{class:"circle-icon green margin-bottom-form flex-none"},[D("img",{src:gF,alt:""})],-1),TF={key:0},AF={key:1,class:"success"};function bF(t,e,n,r,i,s){return Y(),ie("div",null,[D("form",{onSubmit:e[4]||(e[4]=Hd(o=>s.addNewWord(),["prevent"])),id:"formVue",class:"flex items-center"},[Sn(D("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>i.word.word=o),required:"",type:"text",class:"mr-3 word-input margin-bottom-form",placeholder:"Add a word"},null,512),[[Rr,i.word.word]]),Sn(D("input",{"onUpdate:modelValue":e[1]||(e[1]=o=>i.word.meaning=o),required:"",type:"text",class:"mr-3 word-input margin-bottom-form",placeholder:"Meaning"},null,512),[[Rr,i.word.meaning]]),Sn(D("select",{"onUpdate:modelValue":e[2]||(e[2]=o=>i.word.type=o),class:"mr-3 margin-bottom-form",required:"",name:"type",id:"type"},[yF,(Y(!0),ie(yt,null,No(i.typesOfWords,(o,a)=>(Y(),ie("option",{key:a,value:o},wt(t.__capitalizeFirstLetter(o)),9,vF))),128))],512),[[xm,i.word.type]]),Sn(D("select",{"onUpdate:modelValue":e[3]||(e[3]=o=>i.word.gender=o),class:"mr-3 margin-bottom-form",name:"gender",id:"gender"},[IF,(Y(!0),ie(yt,null,No(i.genders,(o,a)=>(Y(),ie("option",{key:a,value:o},wt(t.__capitalizeFirstLetter(o)),9,wF))),128))],512),[[xm,i.word.gender]]),EF],32),i.errors.length?(Y(),ie("div",TF,[D("ul",null,[(Y(!0),ie(yt,null,No(i.errors,(o,a)=>(Y(),ie("li",{key:a},wt(o),1))),128))])])):en("",!0),i.success?(Y(),ie("p",AF,wt(i.success),1)):en("",!0)])}var RF=Ye(_F,[["render",bF]]);const SF={name:"NewWords",components:{AddNewWord:RF}},PF=t=>(Li("data-v-1a1af56c"),t=t(),Mi(),t),CF={class:"add-word-section"},kF=PF(()=>D("h3",{class:"h3"},"Add a new word",-1));function DF(t,e,n,r,i,s){const o=Ge("AddNewWord");return Y(),ie("div",CF,[kF,ae(o)])}var xF=Ye(SF,[["render",DF],["__scopeId","data-v-1a1af56c"]]);const NF={key:0,class:"list"},VF={__name:"AllAddedWords",props:{words:Object,itemsToShow:{type:Number,default:9999},date:{type:Boolean,default:!1}},setup(t){return(e,n)=>t.words?(Y(),ie("ul",NF,[(Y(!0),ie(yt,null,No(t.words.slice(0,t.itemsToShow),(r,i)=>(Y(),ln(GT,{word:r,key:i,date:t.date},null,8,["word","date"]))),128))])):en("",!0)}};var sA=Ye(VF,[["__scopeId","data-v-6010dc2c"]]);const oA=Na([]),aA=Na(null),OF=async t=>{try{(await ao.collection(t.state.user.uid).orderBy("date","desc")).onSnapshot(n=>{oA.value=n.docs.map(r=>({...r.data(),wordId:r.id}))})}catch(e){aA.value=e.message}},cA=()=>({words:oA,error:aA,load:OF});const LF=t=>(Li("data-v-77081fc2"),t=t(),Mi(),t),MF={class:"h3"},FF=LF(()=>D("br",null,null,-1)),UF={key:0,class:"button"},BF={__name:"LatestAddedSection",setup(t){const e=Nl(),{words:n,load:r}=cA();return r(e),(i,s)=>{const o=Ge("router-link");return Y(),ie("div",null,[D("h3",MF,"Latest added words: "+wt(Pt(n)&&Pt(n).length),1),FF,ae(sA,{words:Pt(n),itemsToShow:10},null,8,["words"]),Pt(n)&&Pt(n).length>10?(Y(),ie("div",UF,[ae(o,{class:"link",to:"/words"},{default:Xn(()=>[kt("See all")]),_:1})])):en("",!0)])}}};var $F=Ye(BF,[["__scopeId","data-v-77081fc2"]]);const qF={name:"ItemDetailDisplay",components:{ItemTag:qT,ItemDate:jT},mixins:[iA],data(){return{word:{},meaning:"",seconds:null}},props:{wordId:{type:String,default:null},bg:{type:Boolean,default:!1}},watch:{async wordIdPath(){this.word=await this.getItem(),this.meaning=await this.word.meaning,this.seconds=await this.word.date.seconds}},computed:{wordIdPath(){return this.$route.params.id||this.wordId}},async mounted(){this.word=await this.getItem(),this.meaning=this.word&&this.word.meaning,this.seconds=this.word&&this.word.date.seconds},methods:{getItem(){return ao.collection(this.$store.state.user.uid).doc(this.wordIdPath).get().then(t=>t.data())}}},Yp=t=>(Li("data-v-0832dfe2"),t=t(),Mi(),t),jF={class:"title bold"},WF={class:"elements"},GF=Yp(()=>D("div",{class:"line vertical"},null,-1)),zF={class:"meaning"},KF=["href"],HF=Yp(()=>D("div",{class:"line vertical"},null,-1)),QF=Yp(()=>D("div",{class:"notas"},[D("div",null,[D("h3",null,"More info"),D("p",null," Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolor asperiores molestias inventore repellendus omnis deserunt ab quisquam, cupiditate molestiae veniam esse, ipsa rem aliquid illo perferendis praesentium provident ut! ")])],-1));function YF(t,e,n,r,i,s){const o=Ge("ItemDate"),a=Ge("ItemTag");return Y(),ie("div",{class:Jn(["wrapper",{"with-background":n.bg}])},[ae(o,{class:"date",wordDate:i.seconds},null,8,["wordDate"]),D("h1",jF,wt(i.word.word),1),D("div",WF,[i.word.gender?(Y(),ln(a,{key:0,word:i.word.gender.charAt(0),clear:""},null,8,["word"])):en("",!0),ae(a,{word:i.word.type},null,8,["word"])]),GF,D("div",zF,[D("p",null,wt(t.__capitalizeFirstLetter(i.meaning)),1),D("a",{href:`http://google.com/${i.word.word}`,target:"_blank"},[ae(a,{word:"Go to definition"})],8,KF)]),HF,QF],2)}var uA=Ye(qF,[["render",YF],["__scopeId","data-v-0832dfe2"]]);const JF={},XF={class:"row"},ZF={class:"col-12 col-sm-10 offset-sm-1 col-md-6 offset-md-3 col-lg-4 offset-lg-4"},eU=D("h1",null,"Please log in",-1),tU={class:"small-text"};function nU(t,e){const n=Ge("router-link");return Y(),ie("div",XF,[D("div",ZF,[eU,D("p",tU,[kt(" In order to use Germantionary, you'll need to log in or create an account "),ae(n,{class:"link",to:"/login"},{default:Xn(()=>[kt("here")]),_:1}),kt(". ")])])])}var rU=Ye(JF,[["render",nU]]);const iU={name:"Home",components:{AddWordsSection:xF,LatestAddedSection:$F,ItemDetailDisplay:uA,Login:rU},data(){return{wordId:""}},watch:{"$store.state.wordId"(){this.wordId=this.$store.state.wordId}},computed:{itemSelected(){return this.wordId},user(){return this.$store.state.user}}},sU={class:"container"},oU={key:1,class:"row"},aU={class:"col-12"},cU={class:"col-12 col-xl-6"},uU={class:"col-12 col-xl-5 offset-xl-1"};function lU(t,e,n,r,i,s){const o=Ge("Login"),a=Ge("AddWordsSection"),c=Ge("LatestAddedSection"),u=Ge("ItemDetailDisplay");return Y(),ie("div",sU,[s.user?(Y(),ie("div",oU,[D("div",aU,[ae(a)]),D("div",cU,[ae(c)]),D("div",uU,[s.itemSelected?(Y(),ln(u,{key:0,wordId:i.wordId},null,8,["wordId"])):en("",!0)])])):(Y(),ln(o,{key:0}))])}var hU=Ye(iU,[["render",lU]]);const dU={};function fU(t,e){return Y(),ie("div",{onClick:e[0]||(e[0]=n=>t.$router.push("/")),class:"link go-back"},"Go Back")}var lA=Ye(dU,[["render",fU],["__scopeId","data-v-018cd0d6"]]),pU="/assets/arrow-left.b61dd5c8.svg",mU="/assets/arrow-right.641d62f4.svg";const gU={name:"Detail",components:{ItemDetailDisplay:uA,GoBackButton:lA},data(){return{wordsIdArray:[],invalid:!1}},methods:{getData(){ao.collection(this.$store.state.user.uid).orderBy("date","desc").onSnapshot(t=>{this.wordsIdArray=t.docs.map(e=>e.id)})},goToPrevious(t){this.getIndex!==-1&&t==="back"&&!this.hasNoMoreItemsLeft&&this.$router.push(this.wordsIdArray[this.getIndex-1]),this.getIndex!==-1&&t==="next"&&!this.hasNoMoreItemsRight&&this.$router.push(this.wordsIdArray[this.getIndex+1])}},computed:{getIndex(){return this.wordsIdArray.indexOf(this.$route.params.id)},hasNoMoreItemsLeft(){return this.getIndex===0},hasNoMoreItemsRight(){return this.wordsIdArray.length===this.getIndex+1}},mounted(){this.getData()}},hA=t=>(Li("data-v-1cd91ede"),t=t(),Mi(),t),_U={class:"container"},yU={class:"row"},vU={class:"col-sm-1 col-md-2 col-lg-3 col-xl-4 buttons"},IU=hA(()=>D("img",{src:pU,alt:""},null,-1)),wU=[IU],EU={class:"col-12 col-lg-6 col-sm-10 col-md-8 col-xl-4"},TU={class:"col-sm-1 col-md-2 col-lg-3 col-xl-4 buttons"},AU=hA(()=>D("img",{src:mU,alt:""},null,-1)),bU=[AU];function RU(t,e,n,r,i,s){const o=Ge("GoBackButton"),a=Ge("ItemDetailDisplay");return Y(),ie("div",_U,[ae(o),D("div",yU,[D("div",vU,[D("div",{onClick:e[0]||(e[0]=c=>s.goToPrevious("back")),class:Jn(["circle-icon green",{invalid:s.hasNoMoreItemsLeft}])},wU,2)]),D("div",EU,[ae(a,{bg:""})]),D("div",TU,[D("div",{onClick:e[1]||(e[1]=c=>s.goToPrevious("next")),class:Jn(["circle-icon green",{invalid:s.hasNoMoreItemsRight}])},bU,2)])])])}var SU=Ye(gU,[["render",RU],["__scopeId","data-v-1cd91ede"]]);const PU={class:"container"},CU={class:"row"},kU={key:0,class:"col-12"},DU={__name:"AllWords",setup(t){const e=Nl(),{words:n,load:r}=cA();return r(e),(i,s)=>(Y(),ie("div",PU,[ae(lA),D("div",CU,[Pt(n)?(Y(),ie("div",kU,[ae(sA,{words:Pt(n),date:""},null,8,["words"])])):en("",!0)])]))}},xU={data(){return{user:{email:"",password:""},response:null,error:null}},methods:{goToIndex(){this.$router.push("/")},login(){tn.auth().signInWithEmailAndPassword(this.user.email,this.user.password).then(t=>{this.response=t,this.goToIndex()},t=>{console.error(t),this.error=t})}}},NU={class:"container"},VU={class:"row"},OU={class:"col-12 col-sm-10 offset-sm-1 col-md-6 offset-md-3 col-lg-4 offset-lg-4"},LU={class:"login"},MU=D("h3",null,"Login",-1),FU={key:0,class:"input"},UU=D("input",{class:"btn",type:"submit",placeholder:"Login"},null,-1),BU={class:"small-text"};function $U(t,e,n,r,i,s){const o=Ge("router-link");return Y(),ie("div",NU,[D("div",VU,[D("div",OU,[D("div",LU,[MU,D("form",{onSubmit:e[2]||(e[2]=Hd((...a)=>s.login&&s.login(...a),["prevent"]))},[Sn(D("input",{autocomplete:"email",class:"input","onUpdate:modelValue":e[0]||(e[0]=a=>i.user.email=a),type:"email",placeholder:"E-mail"},null,512),[[Rr,i.user.email]]),Sn(D("input",{class:"input","onUpdate:modelValue":e[1]||(e[1]=a=>i.user.password=a),type:"password",placeholder:"Password"},null,512),[[Rr,i.user.password]]),i.error?(Y(),ie("div",FU,wt(i.error),1)):en("",!0),UU,D("p",BU,[kt(" If you don't have an account you can create one "),ae(o,{class:"link",to:"/signup"},{default:Xn(()=>[kt("here")]),_:1}),kt(". ")])],32)])])])])}var qU=Ye(xU,[["render",$U]]);const jU={data(){return{user:{name:"",email:"",password:""},error:null}},methods:{async signup(){const t=tn.auth();t.createUserWithEmailAndPassword(this.user.email,this.user.password).then(()=>{this.error=null,t.currentUser.updateProfile({displayName:this.user.name}),this.$store.commit("setDisplayName",this.user.name),this.$router.push("/")},e=>{console.error(e),this.error=e})}}},WU={class:"container"},GU={class:"row"},zU={class:"col-12 col-sm-10 offset-sm-1 col-md-6 offset-md-3 col-lg-4 offset-lg-4"},KU={class:"login"},HU=D("h3",null,"Sign up",-1),QU={key:0,class:"input"},YU=D("input",{class:"btn",type:"submit",placeholder:"Sign up"},null,-1),JU={class:"small-text"};function XU(t,e,n,r,i,s){const o=Ge("router-link");return Y(),ie("div",WU,[D("div",GU,[D("div",zU,[D("div",KU,[HU,D("form",{onSubmit:e[3]||(e[3]=Hd((...a)=>s.signup&&s.signup(...a),["prevent"]))},[Sn(D("input",{autocomplete:"name",class:"input","onUpdate:modelValue":e[0]||(e[0]=a=>i.user.name=a),type:"text",placeholder:"Name"},null,512),[[Rr,i.user.name]]),Sn(D("input",{autocomplete:"email",class:"input","onUpdate:modelValue":e[1]||(e[1]=a=>i.user.email=a),type:"email",placeholder:"E-mail"},null,512),[[Rr,i.user.email]]),Sn(D("input",{class:"input","onUpdate:modelValue":e[2]||(e[2]=a=>i.user.password=a),type:"password",placeholder:"Password"},null,512),[[Rr,i.user.password]]),i.error?(Y(),ie("div",QU,wt(i.error),1)):en("",!0),YU,D("p",JU,[kt(" Have already an account? "),ae(o,{class:"link",to:"/login"},{default:Xn(()=>[kt("Login")]),_:1})])],32)])])])])}var ZU=Ye(jU,[["render",XU]]);const e2={};function t2(t,e){const n=Ge("router-view");return Y(),ln(n)}var n2=Ye(e2,[["render",t2]]);const r2={};function i2(t,e){return Y(),ie("div",null,"Error")}var s2=Ye(r2,[["render",i2]]);const o2=[{path:"/",name:"Home",component:hU},{path:"/words",component:n2,children:[{name:"words",path:"",component:DU},{name:"words:id",path:":id",component:SU}]},{path:"/about",name:"About",component:()=>dM(()=>import("./About.039faec0.js"),[])},{path:"/login",name:"Login",component:qU},{path:"/signup",name:"SignUp",component:ZU},{path:"/*",name:"Error",component:s2}],a2=pF({history:kM(),routes:o2});var c2=hL({state:{wordId:null,user:{},displayName:""},mutations:{setWordId(t,e){t.wordId=e},setUser(t,e){t.user=e},setDisplayName(t,e){t.displayName=e}},actions:{getUserAsync({commit:t}){tn.auth().onAuthStateChanged(e=>{t("setUser",e)})},getCurrentUserAsync({commit:t}){const e=tn.auth().currentUser;t("setUser",e)}},modules:{}});const dA=kR(uM);dA.config.errorHandler=(t,e,n)=>{console.log("Global error:",t),console.log("Vue instance:",e),console.log("Error info:",n)};dA.use(a2).use(c2).mount("#app");export{Ye as _,D as a,ie as c,Y as o};
