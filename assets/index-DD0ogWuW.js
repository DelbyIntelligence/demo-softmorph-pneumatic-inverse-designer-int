(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function V0(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Jf={exports:{}},Lo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x_;function Lx(){if(x_)return Lo;x_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:c}}return Lo.Fragment=t,Lo.jsx=i,Lo.jsxs=i,Lo}var y_;function Nx(){return y_||(y_=1,Jf.exports=Lx()),Jf.exports}var Et=Nx(),$f={exports:{}},ee={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M_;function Ox(){if(M_)return ee;M_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),x=Symbol.iterator;function y(N){return N===null||typeof N!="object"?null:(N=x&&N[x]||N["@@iterator"],typeof N=="function"?N:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,M={};function v(N,nt,St){this.props=N,this.context=nt,this.refs=M,this.updater=St||E}v.prototype.isReactComponent={},v.prototype.setState=function(N,nt){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,nt,"setState")},v.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function O(){}O.prototype=v.prototype;function L(N,nt,St){this.props=N,this.context=nt,this.refs=M,this.updater=St||E}var D=L.prototype=new O;D.constructor=L,A(D,v.prototype),D.isPureReactComponent=!0;var et=Array.isArray;function H(){}var z={H:null,A:null,T:null,S:null},Y=Object.prototype.hasOwnProperty;function w(N,nt,St){var j=St.ref;return{$$typeof:r,type:N,key:nt,ref:j!==void 0?j:null,props:St}}function C(N,nt){return w(N.type,nt,N.props)}function B(N){return typeof N=="object"&&N!==null&&N.$$typeof===r}function ot(N){var nt={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(St){return nt[St]})}var st=/\/+/g;function gt(N,nt){return typeof N=="object"&&N!==null&&N.key!=null?ot(""+N.key):nt.toString(36)}function dt(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(H,H):(N.status="pending",N.then(function(nt){N.status==="pending"&&(N.status="fulfilled",N.value=nt)},function(nt){N.status==="pending"&&(N.status="rejected",N.reason=nt)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function P(N,nt,St,j,ct){var Mt=typeof N;(Mt==="undefined"||Mt==="boolean")&&(N=null);var vt=!1;if(N===null)vt=!0;else switch(Mt){case"bigint":case"string":case"number":vt=!0;break;case"object":switch(N.$$typeof){case r:case t:vt=!0;break;case _:return vt=N._init,P(vt(N._payload),nt,St,j,ct)}}if(vt)return ct=ct(N),vt=j===""?"."+gt(N,0):j,et(ct)?(St="",vt!=null&&(St=vt.replace(st,"$&/")+"/"),P(ct,nt,St,"",function(ne){return ne})):ct!=null&&(B(ct)&&(ct=C(ct,St+(ct.key==null||N&&N.key===ct.key?"":(""+ct.key).replace(st,"$&/")+"/")+vt)),nt.push(ct)),1;vt=0;var Ht=j===""?".":j+":";if(et(N))for(var Ft=0;Ft<N.length;Ft++)j=N[Ft],Mt=Ht+gt(j,Ft),vt+=P(j,nt,St,Mt,ct);else if(Ft=y(N),typeof Ft=="function")for(N=Ft.call(N),Ft=0;!(j=N.next()).done;)j=j.value,Mt=Ht+gt(j,Ft++),vt+=P(j,nt,St,Mt,ct);else if(Mt==="object"){if(typeof N.then=="function")return P(dt(N),nt,St,j,ct);throw nt=String(N),Error("Objects are not valid as a React child (found: "+(nt==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":nt)+"). If you meant to render a collection of children, use an array instead.")}return vt}function W(N,nt,St){if(N==null)return N;var j=[],ct=0;return P(N,j,"","",function(Mt){return nt.call(St,Mt,ct++)}),j}function Z(N){if(N._status===-1){var nt=N._result;nt=nt(),nt.then(function(St){(N._status===0||N._status===-1)&&(N._status=1,N._result=St)},function(St){(N._status===0||N._status===-1)&&(N._status=2,N._result=St)}),N._status===-1&&(N._status=0,N._result=nt)}if(N._status===1)return N._result.default;throw N._result}var xt=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var nt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(nt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},bt={map:W,forEach:function(N,nt,St){W(N,function(){nt.apply(this,arguments)},St)},count:function(N){var nt=0;return W(N,function(){nt++}),nt},toArray:function(N){return W(N,function(nt){return nt})||[]},only:function(N){if(!B(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return ee.Activity=g,ee.Children=bt,ee.Component=v,ee.Fragment=i,ee.Profiler=l,ee.PureComponent=L,ee.StrictMode=s,ee.Suspense=p,ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,ee.__COMPILER_RUNTIME={__proto__:null,c:function(N){return z.H.useMemoCache(N)}},ee.cache=function(N){return function(){return N.apply(null,arguments)}},ee.cacheSignal=function(){return null},ee.cloneElement=function(N,nt,St){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var j=A({},N.props),ct=N.key;if(nt!=null)for(Mt in nt.key!==void 0&&(ct=""+nt.key),nt)!Y.call(nt,Mt)||Mt==="key"||Mt==="__self"||Mt==="__source"||Mt==="ref"&&nt.ref===void 0||(j[Mt]=nt[Mt]);var Mt=arguments.length-2;if(Mt===1)j.children=St;else if(1<Mt){for(var vt=Array(Mt),Ht=0;Ht<Mt;Ht++)vt[Ht]=arguments[Ht+2];j.children=vt}return w(N.type,ct,j)},ee.createContext=function(N){return N={$$typeof:h,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},ee.createElement=function(N,nt,St){var j,ct={},Mt=null;if(nt!=null)for(j in nt.key!==void 0&&(Mt=""+nt.key),nt)Y.call(nt,j)&&j!=="key"&&j!=="__self"&&j!=="__source"&&(ct[j]=nt[j]);var vt=arguments.length-2;if(vt===1)ct.children=St;else if(1<vt){for(var Ht=Array(vt),Ft=0;Ft<vt;Ft++)Ht[Ft]=arguments[Ft+2];ct.children=Ht}if(N&&N.defaultProps)for(j in vt=N.defaultProps,vt)ct[j]===void 0&&(ct[j]=vt[j]);return w(N,Mt,ct)},ee.createRef=function(){return{current:null}},ee.forwardRef=function(N){return{$$typeof:d,render:N}},ee.isValidElement=B,ee.lazy=function(N){return{$$typeof:_,_payload:{_status:-1,_result:N},_init:Z}},ee.memo=function(N,nt){return{$$typeof:m,type:N,compare:nt===void 0?null:nt}},ee.startTransition=function(N){var nt=z.T,St={};z.T=St;try{var j=N(),ct=z.S;ct!==null&&ct(St,j),typeof j=="object"&&j!==null&&typeof j.then=="function"&&j.then(H,xt)}catch(Mt){xt(Mt)}finally{nt!==null&&St.types!==null&&(nt.types=St.types),z.T=nt}},ee.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},ee.use=function(N){return z.H.use(N)},ee.useActionState=function(N,nt,St){return z.H.useActionState(N,nt,St)},ee.useCallback=function(N,nt){return z.H.useCallback(N,nt)},ee.useContext=function(N){return z.H.useContext(N)},ee.useDebugValue=function(){},ee.useDeferredValue=function(N,nt){return z.H.useDeferredValue(N,nt)},ee.useEffect=function(N,nt){return z.H.useEffect(N,nt)},ee.useEffectEvent=function(N){return z.H.useEffectEvent(N)},ee.useId=function(){return z.H.useId()},ee.useImperativeHandle=function(N,nt,St){return z.H.useImperativeHandle(N,nt,St)},ee.useInsertionEffect=function(N,nt){return z.H.useInsertionEffect(N,nt)},ee.useLayoutEffect=function(N,nt){return z.H.useLayoutEffect(N,nt)},ee.useMemo=function(N,nt){return z.H.useMemo(N,nt)},ee.useOptimistic=function(N,nt){return z.H.useOptimistic(N,nt)},ee.useReducer=function(N,nt,St){return z.H.useReducer(N,nt,St)},ee.useRef=function(N){return z.H.useRef(N)},ee.useState=function(N){return z.H.useState(N)},ee.useSyncExternalStore=function(N,nt,St){return z.H.useSyncExternalStore(N,nt,St)},ee.useTransition=function(){return z.H.useTransition()},ee.version="19.2.5",ee}var E_;function Ed(){return E_||(E_=1,$f.exports=Ox()),$f.exports}var qe=Ed();const Px=V0(qe);var th={exports:{}},No={},eh={exports:{}},nh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b_;function zx(){return b_||(b_=1,(function(r){function t(P,W){var Z=P.length;P.push(W);t:for(;0<Z;){var xt=Z-1>>>1,bt=P[xt];if(0<l(bt,W))P[xt]=W,P[Z]=bt,Z=xt;else break t}}function i(P){return P.length===0?null:P[0]}function s(P){if(P.length===0)return null;var W=P[0],Z=P.pop();if(Z!==W){P[0]=Z;t:for(var xt=0,bt=P.length,N=bt>>>1;xt<N;){var nt=2*(xt+1)-1,St=P[nt],j=nt+1,ct=P[j];if(0>l(St,Z))j<bt&&0>l(ct,St)?(P[xt]=ct,P[j]=Z,xt=j):(P[xt]=St,P[nt]=Z,xt=nt);else if(j<bt&&0>l(ct,Z))P[xt]=ct,P[j]=Z,xt=j;else break t}}return W}function l(P,W){var Z=P.sortIndex-W.sortIndex;return Z!==0?Z:P.id-W.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var p=[],m=[],_=1,g=null,x=3,y=!1,E=!1,A=!1,M=!1,v=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function D(P){for(var W=i(m);W!==null;){if(W.callback===null)s(m);else if(W.startTime<=P)s(m),W.sortIndex=W.expirationTime,t(p,W);else break;W=i(m)}}function et(P){if(A=!1,D(P),!E)if(i(p)!==null)E=!0,H||(H=!0,ot());else{var W=i(m);W!==null&&dt(et,W.startTime-P)}}var H=!1,z=-1,Y=5,w=-1;function C(){return M?!0:!(r.unstable_now()-w<Y)}function B(){if(M=!1,H){var P=r.unstable_now();w=P;var W=!0;try{t:{E=!1,A&&(A=!1,O(z),z=-1),y=!0;var Z=x;try{e:{for(D(P),g=i(p);g!==null&&!(g.expirationTime>P&&C());){var xt=g.callback;if(typeof xt=="function"){g.callback=null,x=g.priorityLevel;var bt=xt(g.expirationTime<=P);if(P=r.unstable_now(),typeof bt=="function"){g.callback=bt,D(P),W=!0;break e}g===i(p)&&s(p),D(P)}else s(p);g=i(p)}if(g!==null)W=!0;else{var N=i(m);N!==null&&dt(et,N.startTime-P),W=!1}}break t}finally{g=null,x=Z,y=!1}W=void 0}}finally{W?ot():H=!1}}}var ot;if(typeof L=="function")ot=function(){L(B)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,gt=st.port2;st.port1.onmessage=B,ot=function(){gt.postMessage(null)}}else ot=function(){v(B,0)};function dt(P,W){z=v(function(){P(r.unstable_now())},W)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(P){P.callback=null},r.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<P?Math.floor(1e3/P):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(P){switch(x){case 1:case 2:case 3:var W=3;break;default:W=x}var Z=x;x=W;try{return P()}finally{x=Z}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(P,W){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var Z=x;x=P;try{return W()}finally{x=Z}},r.unstable_scheduleCallback=function(P,W,Z){var xt=r.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?xt+Z:xt):Z=xt,P){case 1:var bt=-1;break;case 2:bt=250;break;case 5:bt=1073741823;break;case 4:bt=1e4;break;default:bt=5e3}return bt=Z+bt,P={id:_++,callback:W,priorityLevel:P,startTime:Z,expirationTime:bt,sortIndex:-1},Z>xt?(P.sortIndex=Z,t(m,P),i(p)===null&&P===i(m)&&(A?(O(z),z=-1):A=!0,dt(et,Z-xt))):(P.sortIndex=bt,t(p,P),E||y||(E=!0,H||(H=!0,ot()))),P},r.unstable_shouldYield=C,r.unstable_wrapCallback=function(P){var W=x;return function(){var Z=x;x=W;try{return P.apply(this,arguments)}finally{x=Z}}}})(nh)),nh}var T_;function Ix(){return T_||(T_=1,eh.exports=zx()),eh.exports}var ih={exports:{}},An={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A_;function Bx(){if(A_)return An;A_=1;var r=Ed();function t(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)m+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,m,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:p,containerInfo:m,implementation:_}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return An.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,An.createPortal=function(p,m){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return c(p,m,null,_)},An.flushSync=function(p){var m=h.T,_=s.p;try{if(h.T=null,s.p=2,p)return p()}finally{h.T=m,s.p=_,s.d.f()}},An.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(p,m))},An.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},An.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var _=m.as,g=d(_,m.crossOrigin),x=typeof m.integrity=="string"?m.integrity:void 0,y=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;_==="style"?s.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:g,integrity:x,fetchPriority:y}):_==="script"&&s.d.X(p,{crossOrigin:g,integrity:x,fetchPriority:y,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},An.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var _=d(m.as,m.crossOrigin);s.d.M(p,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(p)},An.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var _=m.as,g=d(_,m.crossOrigin);s.d.L(p,_,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},An.preloadModule=function(p,m){if(typeof p=="string")if(m){var _=d(m.as,m.crossOrigin);s.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(p)},An.requestFormReset=function(p){s.d.r(p)},An.unstable_batchedUpdates=function(p,m){return p(m)},An.useFormState=function(p,m,_){return h.H.useFormState(p,m,_)},An.useFormStatus=function(){return h.H.useHostTransitionStatus()},An.version="19.2.5",An}var R_;function Fx(){if(R_)return ih.exports;R_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),ih.exports=Bx(),ih.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C_;function Hx(){if(C_)return No;C_=1;var r=Ix(),t=Ed(),i=Fx();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(s(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return p(u),e;if(f===o)return p(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var S=!1,b=u.child;b;){if(b===a){S=!0,a=u,o=f;break}if(b===o){S=!0,o=u,a=f;break}b=b.sibling}if(!S){for(b=f.child;b;){if(b===a){S=!0,a=f,o=u;break}if(b===o){S=!0,o=f,a=u;break}b=b.sibling}if(!S)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),L=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),et=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),B=Symbol.iterator;function ot(e){return e===null||typeof e!="object"?null:(e=B&&e[B]||e["@@iterator"],typeof e=="function"?e:null)}var st=Symbol.for("react.client.reference");function gt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===st?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case v:return"Profiler";case M:return"StrictMode";case et:return"Suspense";case H:return"SuspenseList";case w:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case L:return e.displayName||"Context";case O:return(e._context.displayName||"Context")+".Consumer";case D:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return n=e.displayName||null,n!==null?n:gt(e.type)||"Memo";case Y:n=e._payload,e=e._init;try{return gt(e(n))}catch{}}return null}var dt=Array.isArray,P=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},xt=[],bt=-1;function N(e){return{current:e}}function nt(e){0>bt||(e.current=xt[bt],xt[bt]=null,bt--)}function St(e,n){bt++,xt[bt]=e.current,e.current=n}var j=N(null),ct=N(null),Mt=N(null),vt=N(null);function Ht(e,n){switch(St(Mt,n),St(ct,e),St(j,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?kg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=kg(n),e=Xg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}nt(j),St(j,e)}function Ft(){nt(j),nt(ct),nt(Mt)}function ne(e){e.memoizedState!==null&&St(vt,e);var n=j.current,a=Xg(n,e.type);n!==a&&(St(ct,e),St(j,a))}function Le(e){ct.current===e&&(nt(j),nt(ct)),vt.current===e&&(nt(vt),Co._currentValue=Z)}var he,ke;function X(e){if(he===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);he=n&&n[1]||"",ke=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+he+e+ke}var En=!1;function ue(e,n){if(!e||En)return"";En=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(rt){var $=rt}Reflect.construct(e,[],mt)}else{try{mt.call()}catch(rt){$=rt}e.call(mt.prototype)}}else{try{throw Error()}catch(rt){$=rt}(mt=e())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(rt){if(rt&&$&&typeof rt.stack=="string")return[rt.stack,$.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),S=f[0],b=f[1];if(S&&b){var I=S.split(`
`),Q=b.split(`
`);for(u=o=0;o<I.length&&!I[o].includes("DetermineComponentFrameRoot");)o++;for(;u<Q.length&&!Q[u].includes("DetermineComponentFrameRoot");)u++;if(o===I.length||u===Q.length)for(o=I.length-1,u=Q.length-1;1<=o&&0<=u&&I[o]!==Q[u];)u--;for(;1<=o&&0<=u;o--,u--)if(I[o]!==Q[u]){if(o!==1||u!==1)do if(o--,u--,0>u||I[o]!==Q[u]){var ut=`
`+I[o].replace(" at new "," at ");return e.displayName&&ut.includes("<anonymous>")&&(ut=ut.replace("<anonymous>",e.displayName)),ut}while(1<=o&&0<=u);break}}}finally{En=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?X(a):""}function me(e,n){switch(e.tag){case 26:case 27:case 5:return X(e.type);case 16:return X("Lazy");case 13:return e.child!==n&&n!==null?X("Suspense Fallback"):X("Suspense");case 19:return X("SuspenseList");case 0:case 15:return ue(e.type,!1);case 11:return ue(e.type.render,!1);case 1:return ue(e.type,!0);case 31:return X("Activity");default:return""}}function Zt(e){try{var n="",a=null;do n+=me(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Ce=Object.prototype.hasOwnProperty,Yt=r.unstable_scheduleCallback,U=r.unstable_cancelCallback,T=r.unstable_shouldYield,tt=r.unstable_requestPaint,ft=r.unstable_now,yt=r.unstable_getCurrentPriorityLevel,pt=r.unstable_ImmediatePriority,Xt=r.unstable_UserBlockingPriority,Ut=r.unstable_NormalPriority,Pt=r.unstable_LowPriority,ge=r.unstable_IdlePriority,At=r.log,zt=r.unstable_setDisableYieldValue,jt=null,Wt=null;function Ot(e){if(typeof At=="function"&&zt(e),Wt&&typeof Wt.setStrictMode=="function")try{Wt.setStrictMode(jt,e)}catch{}}var Jt=Math.clz32?Math.clz32:G,ae=Math.log,Ne=Math.LN2;function G(e){return e>>>=0,e===0?32:31-(ae(e)/Ne|0)|0}var Rt=256,lt=262144,_t=4194304;function Ct(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Lt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var b=o&134217727;return b!==0?(o=b&~f,o!==0?u=Ct(o):(S&=b,S!==0?u=Ct(S):a||(a=b&~e,a!==0&&(u=Ct(a))))):(b=o&~f,b!==0?u=Ct(b):S!==0?u=Ct(S):a||(a=o&~e,a!==0&&(u=Ct(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function $t(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Xe(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rn(){var e=_t;return _t<<=1,(_t&62914560)===0&&(_t=4194304),e}function Me(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function mn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function mi(e,n,a,o,u,f){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var b=e.entanglements,I=e.expirationTimes,Q=e.hiddenUpdates;for(a=S&~a;0<a;){var ut=31-Jt(a),mt=1<<ut;b[ut]=0,I[ut]=-1;var $=Q[ut];if($!==null)for(Q[ut]=null,ut=0;ut<$.length;ut++){var rt=$[ut];rt!==null&&(rt.lane&=-536870913)}a&=~mt}o!==0&&Hr(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(S&~n))}function Hr(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Jt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Gr(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Jt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Ci(e,n){var a=n&-n;return a=(a&42)!==0?1:$a(a),(a&(e.suspendedLanes|n))!==0?0:a}function $a(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ls(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Vr(){var e=W.p;return e!==0?e:(e=window.event,e===void 0?32:d_(e.type))}function ts(e,n){var a=W.p;try{return W.p=e,n()}finally{W.p=a}}var gi=Math.random().toString(36).slice(2),je="__reactFiber$"+gi,gn="__reactProps$"+gi,Fi="__reactContainer$"+gi,kr="__reactEvents$"+gi,Wc="__reactListeners$"+gi,qc="__reactHandles$"+gi,R="__reactResources$"+gi,V="__reactMarker$"+gi;function at(e){delete e[je],delete e[gn],delete e[kr],delete e[Wc],delete e[qc]}function it(e){var n=e[je];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Fi]||a[je]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Qg(e);e!==null;){if(a=e[je])return a;e=Qg(e)}return n}e=a,a=e.parentNode}return null}function k(e){if(e=e[je]||e[Fi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Tt(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function wt(e){var n=e[R];return n||(n=e[R]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Dt(e){e[V]=!0}var Gt=new Set,te={};function Qt(e,n){It(e,n),It(e+"Capture",n)}function It(e,n){for(te[e]=n,e=0;e<n.length;e++)Gt.add(n[e])}var ye=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),we={},Oe={};function bn(e){return Ce.call(Oe,e)?!0:Ce.call(we,e)?!1:ye.test(e)?Oe[e]=!0:(we[e]=!0,!1)}function Se(e,n,a){if(bn(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Vt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function on(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function ie(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Nn(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function ma(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){a=""+S,f.call(this,S)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function _n(e){if(!e._valueTracker){var n=Nn(e)?"checked":"value";e._valueTracker=ma(e,n,""+e[n])}}function ga(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Nn(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Re(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ti=/[\n"\\]/g;function hn(e){return e.replace(ti,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Tn(e,n,a,o,u,f,S,b){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ie(n)):e.value!==""+ie(n)&&(e.value=""+ie(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?ei(e,S,ie(n)):a!=null?ei(e,S,ie(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+ie(b):e.removeAttribute("name")}function _i(e,n,a,o,u,f,S,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){_n(e);return}a=a!=null?""+ie(a):"",n=n!=null?""+ie(n):a,b||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=b?e.checked:!!o,e.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),_n(e)}function ei(e,n,a){n==="number"&&Re(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Hi(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+ie(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Bd(e,n,a){if(n!=null&&(n=""+ie(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ie(a):""}function Fd(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(dt(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ie(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),_n(e)}function Ns(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Rv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Hd(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Rv.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Gd(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Hd(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&Hd(e,f,n[f])}function Yc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),wv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Yo(e){return wv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Gi(){}var jc=null;function Zc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Os=null,Ps=null;function Vd(e){var n=k(e);if(n&&(e=n.stateNode)){var a=e[gn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Tn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+hn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[gn]||null;if(!u)throw Error(s(90));Tn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&ga(o)}break t;case"textarea":Bd(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Hi(e,!!a.multiple,n,!1)}}}var Kc=!1;function kd(e,n,a){if(Kc)return e(n,a);Kc=!0;try{var o=e(n);return o}finally{if(Kc=!1,(Os!==null||Ps!==null)&&(Ol(),Os&&(n=Os,e=Ps,Ps=Os=null,Vd(n),e)))for(n=0;n<e.length;n++)Vd(e[n])}}function Xr(e,n){var a=e.stateNode;if(a===null)return null;var o=a[gn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Vi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qc=!1;if(Vi)try{var Wr={};Object.defineProperty(Wr,"passive",{get:function(){Qc=!0}}),window.addEventListener("test",Wr,Wr),window.removeEventListener("test",Wr,Wr)}catch{Qc=!1}var _a=null,Jc=null,jo=null;function Xd(){if(jo)return jo;var e,n=Jc,a=n.length,o,u="value"in _a?_a.value:_a.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var S=a-e;for(o=1;o<=S&&n[a-o]===u[f-o];o++);return jo=u.slice(e,1<o?1-o:void 0)}function Zo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Ko(){return!0}function Wd(){return!1}function On(e){function n(a,o,u,f,S){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(a=e[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Ko:Wd,this.isPropagationStopped=Wd,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ko)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ko)},persist:function(){},isPersistent:Ko}),n}var es={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qo=On(es),qr=g({},es,{view:0,detail:0}),Dv=On(qr),$c,tu,Yr,Jo=g({},qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Yr&&(Yr&&e.type==="mousemove"?($c=e.screenX-Yr.screenX,tu=e.screenY-Yr.screenY):tu=$c=0,Yr=e),$c)},movementY:function(e){return"movementY"in e?e.movementY:tu}}),qd=On(Jo),Uv=g({},Jo,{dataTransfer:0}),Lv=On(Uv),Nv=g({},qr,{relatedTarget:0}),eu=On(Nv),Ov=g({},es,{animationName:0,elapsedTime:0,pseudoElement:0}),Pv=On(Ov),zv=g({},es,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Iv=On(zv),Bv=g({},es,{data:0}),Yd=On(Bv),Fv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Gv[e])?!!n[e]:!1}function nu(){return Vv}var kv=g({},qr,{key:function(e){if(e.key){var n=Fv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Zo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Hv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nu,charCode:function(e){return e.type==="keypress"?Zo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Xv=On(kv),Wv=g({},Jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jd=On(Wv),qv=g({},qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nu}),Yv=On(qv),jv=g({},es,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zv=On(jv),Kv=g({},Jo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Qv=On(Kv),Jv=g({},es,{newState:0,oldState:0}),$v=On(Jv),tS=[9,13,27,32],iu=Vi&&"CompositionEvent"in window,jr=null;Vi&&"documentMode"in document&&(jr=document.documentMode);var eS=Vi&&"TextEvent"in window&&!jr,Zd=Vi&&(!iu||jr&&8<jr&&11>=jr),Kd=" ",Qd=!1;function Jd(e,n){switch(e){case"keyup":return tS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $d(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var zs=!1;function nS(e,n){switch(e){case"compositionend":return $d(n);case"keypress":return n.which!==32?null:(Qd=!0,Kd);case"textInput":return e=n.data,e===Kd&&Qd?null:e;default:return null}}function iS(e,n){if(zs)return e==="compositionend"||!iu&&Jd(e,n)?(e=Xd(),jo=Jc=_a=null,zs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Zd&&n.locale!=="ko"?null:n.data;default:return null}}var aS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!aS[e.type]:n==="textarea"}function ep(e,n,a,o){Os?Ps?Ps.push(o):Ps=[o]:Os=o,n=Gl(n,"onChange"),0<n.length&&(a=new Qo("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Zr=null,Kr=null;function sS(e){Ig(e,0)}function $o(e){var n=Tt(e);if(ga(n))return e}function np(e,n){if(e==="change")return n}var ip=!1;if(Vi){var au;if(Vi){var su="oninput"in document;if(!su){var ap=document.createElement("div");ap.setAttribute("oninput","return;"),su=typeof ap.oninput=="function"}au=su}else au=!1;ip=au&&(!document.documentMode||9<document.documentMode)}function sp(){Zr&&(Zr.detachEvent("onpropertychange",rp),Kr=Zr=null)}function rp(e){if(e.propertyName==="value"&&$o(Kr)){var n=[];ep(n,Kr,e,Zc(e)),kd(sS,n)}}function rS(e,n,a){e==="focusin"?(sp(),Zr=n,Kr=a,Zr.attachEvent("onpropertychange",rp)):e==="focusout"&&sp()}function oS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $o(Kr)}function lS(e,n){if(e==="click")return $o(n)}function cS(e,n){if(e==="input"||e==="change")return $o(n)}function uS(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Xn=typeof Object.is=="function"?Object.is:uS;function Qr(e,n){if(Xn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Ce.call(n,u)||!Xn(e[u],n[u]))return!1}return!0}function op(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function lp(e,n){var a=op(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=op(a)}}function cp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?cp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function up(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Re(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Re(e.document)}return n}function ru(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var fS=Vi&&"documentMode"in document&&11>=document.documentMode,Is=null,ou=null,Jr=null,lu=!1;function fp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;lu||Is==null||Is!==Re(o)||(o=Is,"selectionStart"in o&&ru(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Jr&&Qr(Jr,o)||(Jr=o,o=Gl(ou,"onSelect"),0<o.length&&(n=new Qo("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Is)))}function ns(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Bs={animationend:ns("Animation","AnimationEnd"),animationiteration:ns("Animation","AnimationIteration"),animationstart:ns("Animation","AnimationStart"),transitionrun:ns("Transition","TransitionRun"),transitionstart:ns("Transition","TransitionStart"),transitioncancel:ns("Transition","TransitionCancel"),transitionend:ns("Transition","TransitionEnd")},cu={},hp={};Vi&&(hp=document.createElement("div").style,"AnimationEvent"in window||(delete Bs.animationend.animation,delete Bs.animationiteration.animation,delete Bs.animationstart.animation),"TransitionEvent"in window||delete Bs.transitionend.transition);function is(e){if(cu[e])return cu[e];if(!Bs[e])return e;var n=Bs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in hp)return cu[e]=n[a];return e}var dp=is("animationend"),pp=is("animationiteration"),mp=is("animationstart"),hS=is("transitionrun"),dS=is("transitionstart"),pS=is("transitioncancel"),gp=is("transitionend"),_p=new Map,uu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");uu.push("scrollEnd");function vi(e,n){_p.set(e,n),Qt(n,[e])}var tl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ni=[],Fs=0,fu=0;function el(){for(var e=Fs,n=fu=Fs=0;n<e;){var a=ni[n];ni[n++]=null;var o=ni[n];ni[n++]=null;var u=ni[n];ni[n++]=null;var f=ni[n];if(ni[n++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}f!==0&&vp(a,u,f)}}function nl(e,n,a,o){ni[Fs++]=e,ni[Fs++]=n,ni[Fs++]=a,ni[Fs++]=o,fu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function hu(e,n,a,o){return nl(e,n,a,o),il(e)}function as(e,n){return nl(e,null,null,n),il(e)}function vp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Jt(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function il(e){if(50<yo)throw yo=0,Mf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Hs={};function mS(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(e,n,a,o){return new mS(e,n,a,o)}function du(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ki(e,n){var a=e.alternate;return a===null?(a=Wn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Sp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function al(e,n,a,o,u,f){var S=0;if(o=e,typeof e=="function")du(e)&&(S=1);else if(typeof e=="string")S=xx(e,a,j.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case w:return e=Wn(31,a,n,u),e.elementType=w,e.lanes=f,e;case A:return ss(a.children,u,f,n);case M:S=8,u|=24;break;case v:return e=Wn(12,a,n,u|2),e.elementType=v,e.lanes=f,e;case et:return e=Wn(13,a,n,u),e.elementType=et,e.lanes=f,e;case H:return e=Wn(19,a,n,u),e.elementType=H,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:S=10;break t;case O:S=9;break t;case D:S=11;break t;case z:S=14;break t;case Y:S=16,o=null;break t}S=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=Wn(S,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function ss(e,n,a,o){return e=Wn(7,e,o,n),e.lanes=a,e}function pu(e,n,a){return e=Wn(6,e,null,n),e.lanes=a,e}function xp(e){var n=Wn(18,null,null,0);return n.stateNode=e,n}function mu(e,n,a){return n=Wn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var yp=new WeakMap;function ii(e,n){if(typeof e=="object"&&e!==null){var a=yp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Zt(n)},yp.set(e,n),n)}return{value:e,source:n,stack:Zt(n)}}var Gs=[],Vs=0,sl=null,$r=0,ai=[],si=0,va=null,wi=1,Di="";function Xi(e,n){Gs[Vs++]=$r,Gs[Vs++]=sl,sl=e,$r=n}function Mp(e,n,a){ai[si++]=wi,ai[si++]=Di,ai[si++]=va,va=e;var o=wi;e=Di;var u=32-Jt(o)-1;o&=~(1<<u),a+=1;var f=32-Jt(n)+u;if(30<f){var S=u-u%5;f=(o&(1<<S)-1).toString(32),o>>=S,u-=S,wi=1<<32-Jt(n)+u|a<<u|o,Di=f+e}else wi=1<<f|a<<u|o,Di=e}function gu(e){e.return!==null&&(Xi(e,1),Mp(e,1,0))}function _u(e){for(;e===sl;)sl=Gs[--Vs],Gs[Vs]=null,$r=Gs[--Vs],Gs[Vs]=null;for(;e===va;)va=ai[--si],ai[si]=null,Di=ai[--si],ai[si]=null,wi=ai[--si],ai[si]=null}function Ep(e,n){ai[si++]=wi,ai[si++]=Di,ai[si++]=va,wi=n.id,Di=n.overflow,va=e}var vn=null,Ge=null,xe=!1,Sa=null,ri=!1,vu=Error(s(519));function xa(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw to(ii(n,e)),vu}function bp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[je]=e,n[gn]=o,a){case"dialog":pe("cancel",n),pe("close",n);break;case"iframe":case"object":case"embed":pe("load",n);break;case"video":case"audio":for(a=0;a<Eo.length;a++)pe(Eo[a],n);break;case"source":pe("error",n);break;case"img":case"image":case"link":pe("error",n),pe("load",n);break;case"details":pe("toggle",n);break;case"input":pe("invalid",n),_i(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":pe("invalid",n);break;case"textarea":pe("invalid",n),Fd(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Gg(n.textContent,a)?(o.popover!=null&&(pe("beforetoggle",n),pe("toggle",n)),o.onScroll!=null&&pe("scroll",n),o.onScrollEnd!=null&&pe("scrollend",n),o.onClick!=null&&(n.onclick=Gi),n=!0):n=!1,n||xa(e,!0)}function Tp(e){for(vn=e.return;vn;)switch(vn.tag){case 5:case 31:case 13:ri=!1;return;case 27:case 3:ri=!0;return;default:vn=vn.return}}function ks(e){if(e!==vn)return!1;if(!xe)return Tp(e),xe=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||If(e.type,e.memoizedProps)),a=!a),a&&Ge&&xa(e),Tp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ge=Kg(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ge=Kg(e)}else n===27?(n=Ge,Oa(e.type)?(e=Vf,Vf=null,Ge=e):Ge=n):Ge=vn?li(e.stateNode.nextSibling):null;return!0}function rs(){Ge=vn=null,xe=!1}function Su(){var e=Sa;return e!==null&&(Bn===null?Bn=e:Bn.push.apply(Bn,e),Sa=null),e}function to(e){Sa===null?Sa=[e]:Sa.push(e)}var xu=N(null),os=null,Wi=null;function ya(e,n,a){St(xu,n._currentValue),n._currentValue=a}function qi(e){e._currentValue=xu.current,nt(xu)}function yu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Mu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var S=u.child;f=f.firstContext;t:for(;f!==null;){var b=f;f=u;for(var I=0;I<n.length;I++)if(b.context===n[I]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),yu(f.return,a,e),o||(S=null);break t}f=b.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(s(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),yu(S,a,e),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===e){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function Xs(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var b=u.type;Xn(u.pendingProps.value,S.value)||(e!==null?e.push(b):e=[b])}}else if(u===vt.current){if(S=u.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Co):e=[Co])}u=u.return}e!==null&&Mu(n,e,a,o),n.flags|=262144}function rl(e){for(e=e.firstContext;e!==null;){if(!Xn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ls(e){os=e,Wi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Sn(e){return Ap(os,e)}function ol(e,n){return os===null&&ls(e),Ap(e,n)}function Ap(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Wi===null){if(e===null)throw Error(s(308));Wi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Wi=Wi.next=n;return a}var gS=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},_S=r.unstable_scheduleCallback,vS=r.unstable_NormalPriority,tn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Eu(){return{controller:new gS,data:new Map,refCount:0}}function eo(e){e.refCount--,e.refCount===0&&_S(vS,function(){e.controller.abort()})}var no=null,bu=0,Ws=0,qs=null;function SS(e,n){if(no===null){var a=no=[];bu=0,Ws=Cf(),qs={status:"pending",value:void 0,then:function(o){a.push(o)}}}return bu++,n.then(Rp,Rp),n}function Rp(){if(--bu===0&&no!==null){qs!==null&&(qs.status="fulfilled");var e=no;no=null,Ws=0,qs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function xS(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Cp=P.S;P.S=function(e,n){fg=ft(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&SS(e,n),Cp!==null&&Cp(e,n)};var cs=N(null);function Tu(){var e=cs.current;return e!==null?e:He.pooledCache}function ll(e,n){n===null?St(cs,cs.current):St(cs,n.pool)}function wp(){var e=Tu();return e===null?null:{parent:tn._currentValue,pool:e}}var Ys=Error(s(460)),Au=Error(s(474)),cl=Error(s(542)),ul={then:function(){}};function Dp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Up(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Gi,Gi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Np(e),e;default:if(typeof n.status=="string")n.then(Gi,Gi);else{if(e=He,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Np(e),e}throw fs=n,Ys}}function us(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(fs=a,Ys):a}}var fs=null;function Lp(){if(fs===null)throw Error(s(459));var e=fs;return fs=null,e}function Np(e){if(e===Ys||e===cl)throw Error(s(483))}var js=null,io=0;function fl(e){var n=io;return io+=1,js===null&&(js=[]),Up(js,e,n)}function ao(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function hl(e,n){throw n.$$typeof===x?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Op(e){function n(q,F){if(e){var K=q.deletions;K===null?(q.deletions=[F],q.flags|=16):K.push(F)}}function a(q,F){if(!e)return null;for(;F!==null;)n(q,F),F=F.sibling;return null}function o(q){for(var F=new Map;q!==null;)q.key!==null?F.set(q.key,q):F.set(q.index,q),q=q.sibling;return F}function u(q,F){return q=ki(q,F),q.index=0,q.sibling=null,q}function f(q,F,K){return q.index=K,e?(K=q.alternate,K!==null?(K=K.index,K<F?(q.flags|=67108866,F):K):(q.flags|=67108866,F)):(q.flags|=1048576,F)}function S(q){return e&&q.alternate===null&&(q.flags|=67108866),q}function b(q,F,K,ht){return F===null||F.tag!==6?(F=pu(K,q.mode,ht),F.return=q,F):(F=u(F,K),F.return=q,F)}function I(q,F,K,ht){var qt=K.type;return qt===A?ut(q,F,K.props.children,ht,K.key):F!==null&&(F.elementType===qt||typeof qt=="object"&&qt!==null&&qt.$$typeof===Y&&us(qt)===F.type)?(F=u(F,K.props),ao(F,K),F.return=q,F):(F=al(K.type,K.key,K.props,null,q.mode,ht),ao(F,K),F.return=q,F)}function Q(q,F,K,ht){return F===null||F.tag!==4||F.stateNode.containerInfo!==K.containerInfo||F.stateNode.implementation!==K.implementation?(F=mu(K,q.mode,ht),F.return=q,F):(F=u(F,K.children||[]),F.return=q,F)}function ut(q,F,K,ht,qt){return F===null||F.tag!==7?(F=ss(K,q.mode,ht,qt),F.return=q,F):(F=u(F,K),F.return=q,F)}function mt(q,F,K){if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return F=pu(""+F,q.mode,K),F.return=q,F;if(typeof F=="object"&&F!==null){switch(F.$$typeof){case y:return K=al(F.type,F.key,F.props,null,q.mode,K),ao(K,F),K.return=q,K;case E:return F=mu(F,q.mode,K),F.return=q,F;case Y:return F=us(F),mt(q,F,K)}if(dt(F)||ot(F))return F=ss(F,q.mode,K,null),F.return=q,F;if(typeof F.then=="function")return mt(q,fl(F),K);if(F.$$typeof===L)return mt(q,ol(q,F),K);hl(q,F)}return null}function $(q,F,K,ht){var qt=F!==null?F.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return qt!==null?null:b(q,F,""+K,ht);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case y:return K.key===qt?I(q,F,K,ht):null;case E:return K.key===qt?Q(q,F,K,ht):null;case Y:return K=us(K),$(q,F,K,ht)}if(dt(K)||ot(K))return qt!==null?null:ut(q,F,K,ht,null);if(typeof K.then=="function")return $(q,F,fl(K),ht);if(K.$$typeof===L)return $(q,F,ol(q,K),ht);hl(q,K)}return null}function rt(q,F,K,ht,qt){if(typeof ht=="string"&&ht!==""||typeof ht=="number"||typeof ht=="bigint")return q=q.get(K)||null,b(F,q,""+ht,qt);if(typeof ht=="object"&&ht!==null){switch(ht.$$typeof){case y:return q=q.get(ht.key===null?K:ht.key)||null,I(F,q,ht,qt);case E:return q=q.get(ht.key===null?K:ht.key)||null,Q(F,q,ht,qt);case Y:return ht=us(ht),rt(q,F,K,ht,qt)}if(dt(ht)||ot(ht))return q=q.get(K)||null,ut(F,q,ht,qt,null);if(typeof ht.then=="function")return rt(q,F,K,fl(ht),qt);if(ht.$$typeof===L)return rt(q,F,K,ol(F,ht),qt);hl(F,ht)}return null}function Bt(q,F,K,ht){for(var qt=null,be=null,kt=F,re=F=0,ve=null;kt!==null&&re<K.length;re++){kt.index>re?(ve=kt,kt=null):ve=kt.sibling;var Te=$(q,kt,K[re],ht);if(Te===null){kt===null&&(kt=ve);break}e&&kt&&Te.alternate===null&&n(q,kt),F=f(Te,F,re),be===null?qt=Te:be.sibling=Te,be=Te,kt=ve}if(re===K.length)return a(q,kt),xe&&Xi(q,re),qt;if(kt===null){for(;re<K.length;re++)kt=mt(q,K[re],ht),kt!==null&&(F=f(kt,F,re),be===null?qt=kt:be.sibling=kt,be=kt);return xe&&Xi(q,re),qt}for(kt=o(kt);re<K.length;re++)ve=rt(kt,q,re,K[re],ht),ve!==null&&(e&&ve.alternate!==null&&kt.delete(ve.key===null?re:ve.key),F=f(ve,F,re),be===null?qt=ve:be.sibling=ve,be=ve);return e&&kt.forEach(function(Fa){return n(q,Fa)}),xe&&Xi(q,re),qt}function Kt(q,F,K,ht){if(K==null)throw Error(s(151));for(var qt=null,be=null,kt=F,re=F=0,ve=null,Te=K.next();kt!==null&&!Te.done;re++,Te=K.next()){kt.index>re?(ve=kt,kt=null):ve=kt.sibling;var Fa=$(q,kt,Te.value,ht);if(Fa===null){kt===null&&(kt=ve);break}e&&kt&&Fa.alternate===null&&n(q,kt),F=f(Fa,F,re),be===null?qt=Fa:be.sibling=Fa,be=Fa,kt=ve}if(Te.done)return a(q,kt),xe&&Xi(q,re),qt;if(kt===null){for(;!Te.done;re++,Te=K.next())Te=mt(q,Te.value,ht),Te!==null&&(F=f(Te,F,re),be===null?qt=Te:be.sibling=Te,be=Te);return xe&&Xi(q,re),qt}for(kt=o(kt);!Te.done;re++,Te=K.next())Te=rt(kt,q,re,Te.value,ht),Te!==null&&(e&&Te.alternate!==null&&kt.delete(Te.key===null?re:Te.key),F=f(Te,F,re),be===null?qt=Te:be.sibling=Te,be=Te);return e&&kt.forEach(function(Ux){return n(q,Ux)}),xe&&Xi(q,re),qt}function Ie(q,F,K,ht){if(typeof K=="object"&&K!==null&&K.type===A&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case y:t:{for(var qt=K.key;F!==null;){if(F.key===qt){if(qt=K.type,qt===A){if(F.tag===7){a(q,F.sibling),ht=u(F,K.props.children),ht.return=q,q=ht;break t}}else if(F.elementType===qt||typeof qt=="object"&&qt!==null&&qt.$$typeof===Y&&us(qt)===F.type){a(q,F.sibling),ht=u(F,K.props),ao(ht,K),ht.return=q,q=ht;break t}a(q,F);break}else n(q,F);F=F.sibling}K.type===A?(ht=ss(K.props.children,q.mode,ht,K.key),ht.return=q,q=ht):(ht=al(K.type,K.key,K.props,null,q.mode,ht),ao(ht,K),ht.return=q,q=ht)}return S(q);case E:t:{for(qt=K.key;F!==null;){if(F.key===qt)if(F.tag===4&&F.stateNode.containerInfo===K.containerInfo&&F.stateNode.implementation===K.implementation){a(q,F.sibling),ht=u(F,K.children||[]),ht.return=q,q=ht;break t}else{a(q,F);break}else n(q,F);F=F.sibling}ht=mu(K,q.mode,ht),ht.return=q,q=ht}return S(q);case Y:return K=us(K),Ie(q,F,K,ht)}if(dt(K))return Bt(q,F,K,ht);if(ot(K)){if(qt=ot(K),typeof qt!="function")throw Error(s(150));return K=qt.call(K),Kt(q,F,K,ht)}if(typeof K.then=="function")return Ie(q,F,fl(K),ht);if(K.$$typeof===L)return Ie(q,F,ol(q,K),ht);hl(q,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,F!==null&&F.tag===6?(a(q,F.sibling),ht=u(F,K),ht.return=q,q=ht):(a(q,F),ht=pu(K,q.mode,ht),ht.return=q,q=ht),S(q)):a(q,F)}return function(q,F,K,ht){try{io=0;var qt=Ie(q,F,K,ht);return js=null,qt}catch(kt){if(kt===Ys||kt===cl)throw kt;var be=Wn(29,kt,null,q.mode);return be.lanes=ht,be.return=q,be}finally{}}}var hs=Op(!0),Pp=Op(!1),Ma=!1;function Ru(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Cu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ea(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ba(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ae&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=il(e),vp(e,null,a),n}return nl(e,o,n,a),il(e)}function so(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Gr(e,a)}}function wu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Du=!1;function ro(){if(Du){var e=qs;if(e!==null)throw e}}function oo(e,n,a,o){Du=!1;var u=e.updateQueue;Ma=!1;var f=u.firstBaseUpdate,S=u.lastBaseUpdate,b=u.shared.pending;if(b!==null){u.shared.pending=null;var I=b,Q=I.next;I.next=null,S===null?f=Q:S.next=Q,S=I;var ut=e.alternate;ut!==null&&(ut=ut.updateQueue,b=ut.lastBaseUpdate,b!==S&&(b===null?ut.firstBaseUpdate=Q:b.next=Q,ut.lastBaseUpdate=I))}if(f!==null){var mt=u.baseState;S=0,ut=Q=I=null,b=f;do{var $=b.lane&-536870913,rt=$!==b.lane;if(rt?(_e&$)===$:(o&$)===$){$!==0&&$===Ws&&(Du=!0),ut!==null&&(ut=ut.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var Bt=e,Kt=b;$=n;var Ie=a;switch(Kt.tag){case 1:if(Bt=Kt.payload,typeof Bt=="function"){mt=Bt.call(Ie,mt,$);break t}mt=Bt;break t;case 3:Bt.flags=Bt.flags&-65537|128;case 0:if(Bt=Kt.payload,$=typeof Bt=="function"?Bt.call(Ie,mt,$):Bt,$==null)break t;mt=g({},mt,$);break t;case 2:Ma=!0}}$=b.callback,$!==null&&(e.flags|=64,rt&&(e.flags|=8192),rt=u.callbacks,rt===null?u.callbacks=[$]:rt.push($))}else rt={lane:$,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ut===null?(Q=ut=rt,I=mt):ut=ut.next=rt,S|=$;if(b=b.next,b===null){if(b=u.shared.pending,b===null)break;rt=b,b=rt.next,rt.next=null,u.lastBaseUpdate=rt,u.shared.pending=null}}while(!0);ut===null&&(I=mt),u.baseState=I,u.firstBaseUpdate=Q,u.lastBaseUpdate=ut,f===null&&(u.shared.lanes=0),wa|=S,e.lanes=S,e.memoizedState=mt}}function zp(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Ip(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)zp(a[e],n)}var Zs=N(null),dl=N(0);function Bp(e,n){e=ea,St(dl,e),St(Zs,n),ea=e|n.baseLanes}function Uu(){St(dl,ea),St(Zs,Zs.current)}function Lu(){ea=dl.current,nt(Zs),nt(dl)}var qn=N(null),oi=null;function Ta(e){var n=e.alternate;St(Je,Je.current&1),St(qn,e),oi===null&&(n===null||Zs.current!==null||n.memoizedState!==null)&&(oi=e)}function Nu(e){St(Je,Je.current),St(qn,e),oi===null&&(oi=e)}function Fp(e){e.tag===22?(St(Je,Je.current),St(qn,e),oi===null&&(oi=e)):Aa()}function Aa(){St(Je,Je.current),St(qn,qn.current)}function Yn(e){nt(qn),oi===e&&(oi=null),nt(Je)}var Je=N(0);function pl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Hf(a)||Gf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Yi=0,se=null,Pe=null,en=null,ml=!1,Ks=!1,ds=!1,gl=0,lo=0,Qs=null,yS=0;function Ze(){throw Error(s(321))}function Ou(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Xn(e[a],n[a]))return!1;return!0}function Pu(e,n,a,o,u,f){return Yi=f,se=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=e===null||e.memoizedState===null?Mm:Ku,ds=!1,f=a(o,u),ds=!1,Ks&&(f=Gp(n,a,o,u)),Hp(e),f}function Hp(e){P.H=fo;var n=Pe!==null&&Pe.next!==null;if(Yi=0,en=Pe=se=null,ml=!1,lo=0,Qs=null,n)throw Error(s(300));e===null||nn||(e=e.dependencies,e!==null&&rl(e)&&(nn=!0))}function Gp(e,n,a,o){se=e;var u=0;do{if(Ks&&(Qs=null),lo=0,Ks=!1,25<=u)throw Error(s(301));if(u+=1,en=Pe=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=Em,f=n(a,o)}while(Ks);return f}function MS(){var e=P.H,n=e.useState()[0];return n=typeof n.then=="function"?co(n):n,e=e.useState()[0],(Pe!==null?Pe.memoizedState:null)!==e&&(se.flags|=1024),n}function zu(){var e=gl!==0;return gl=0,e}function Iu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Bu(e){if(ml){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}ml=!1}Yi=0,en=Pe=se=null,Ks=!1,lo=gl=0,Qs=null}function Dn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return en===null?se.memoizedState=en=e:en=en.next=e,en}function $e(){if(Pe===null){var e=se.alternate;e=e!==null?e.memoizedState:null}else e=Pe.next;var n=en===null?se.memoizedState:en.next;if(n!==null)en=n,Pe=e;else{if(e===null)throw se.alternate===null?Error(s(467)):Error(s(310));Pe=e,e={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},en===null?se.memoizedState=en=e:en=en.next=e}return en}function _l(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function co(e){var n=lo;return lo+=1,Qs===null&&(Qs=[]),e=Up(Qs,e,n),n=se,(en===null?n.memoizedState:en.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?Mm:Ku),e}function vl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return co(e);if(e.$$typeof===L)return Sn(e)}throw Error(s(438,String(e)))}function Fu(e){var n=null,a=se.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=se.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=_l(),se.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=C;return n.index++,a}function ji(e,n){return typeof n=="function"?n(e):n}function Sl(e){var n=$e();return Hu(n,Pe,e)}function Hu(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var S=u.next;u.next=f.next,f.next=S}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var b=S=null,I=null,Q=n,ut=!1;do{var mt=Q.lane&-536870913;if(mt!==Q.lane?(_e&mt)===mt:(Yi&mt)===mt){var $=Q.revertLane;if($===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),mt===Ws&&(ut=!0);else if((Yi&$)===$){Q=Q.next,$===Ws&&(ut=!0);continue}else mt={lane:0,revertLane:Q.revertLane,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},I===null?(b=I=mt,S=f):I=I.next=mt,se.lanes|=$,wa|=$;mt=Q.action,ds&&a(f,mt),f=Q.hasEagerState?Q.eagerState:a(f,mt)}else $={lane:mt,revertLane:Q.revertLane,gesture:Q.gesture,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},I===null?(b=I=$,S=f):I=I.next=$,se.lanes|=mt,wa|=mt;Q=Q.next}while(Q!==null&&Q!==n);if(I===null?S=f:I.next=b,!Xn(f,e.memoizedState)&&(nn=!0,ut&&(a=qs,a!==null)))throw a;e.memoizedState=f,e.baseState=S,e.baseQueue=I,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Gu(e){var n=$e(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do f=e(f,S.action),S=S.next;while(S!==u);Xn(f,n.memoizedState)||(nn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Vp(e,n,a){var o=se,u=$e(),f=xe;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var S=!Xn((Pe||u).memoizedState,a);if(S&&(u.memoizedState=a,nn=!0),u=u.queue,Xu(Wp.bind(null,o,u,e),[e]),u.getSnapshot!==n||S||en!==null&&en.memoizedState.tag&1){if(o.flags|=2048,Js(9,{destroy:void 0},Xp.bind(null,o,u,a,n),null),He===null)throw Error(s(349));f||(Yi&127)!==0||kp(o,n,a)}return a}function kp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=se.updateQueue,n===null?(n=_l(),se.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Xp(e,n,a,o){n.value=a,n.getSnapshot=o,qp(n)&&Yp(e)}function Wp(e,n,a){return a(function(){qp(n)&&Yp(e)})}function qp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Xn(e,a)}catch{return!0}}function Yp(e){var n=as(e,2);n!==null&&Fn(n,e,2)}function Vu(e){var n=Dn();if(typeof e=="function"){var a=e;if(e=a(),ds){Ot(!0);try{a()}finally{Ot(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:e},n}function jp(e,n,a,o){return e.baseState=a,Hu(e,Pe,typeof o=="function"?o:ji)}function ES(e,n,a,o,u){if(Ml(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};P.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Zp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Zp(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=P.T,S={};P.T=S;try{var b=a(u,o),I=P.S;I!==null&&I(S,b),Kp(e,n,b)}catch(Q){ku(e,n,Q)}finally{f!==null&&S.types!==null&&(f.types=S.types),P.T=f}}else try{f=a(u,o),Kp(e,n,f)}catch(Q){ku(e,n,Q)}}function Kp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Qp(e,n,o)},function(o){return ku(e,n,o)}):Qp(e,n,a)}function Qp(e,n,a){n.status="fulfilled",n.value=a,Jp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Zp(e,a)))}function ku(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Jp(n),n=n.next;while(n!==o)}e.action=null}function Jp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function $p(e,n){return n}function tm(e,n){if(xe){var a=He.formState;if(a!==null){t:{var o=se;if(xe){if(Ge){e:{for(var u=Ge,f=ri;u.nodeType!==8;){if(!f){u=null;break e}if(u=li(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Ge=li(u.nextSibling),o=u.data==="F!";break t}}xa(o)}o=!1}o&&(n=a[0])}}return a=Dn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$p,lastRenderedState:n},a.queue=o,a=Sm.bind(null,se,o),o.dispatch=a,o=Vu(!1),f=Zu.bind(null,se,!1,o.queue),o=Dn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=ES.bind(null,se,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function em(e){var n=$e();return nm(n,Pe,e)}function nm(e,n,a){if(n=Hu(e,n,$p)[0],e=Sl(ji)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=co(n)}catch(S){throw S===Ys?cl:S}else o=n;n=$e();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(se.flags|=2048,Js(9,{destroy:void 0},bS.bind(null,u,a),null)),[o,f,e]}function bS(e,n){e.action=n}function im(e){var n=$e(),a=Pe;if(a!==null)return nm(n,a,e);$e(),n=n.memoizedState,a=$e();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Js(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=se.updateQueue,n===null&&(n=_l(),se.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function am(){return $e().memoizedState}function xl(e,n,a,o){var u=Dn();se.flags|=e,u.memoizedState=Js(1|n,{destroy:void 0},a,o===void 0?null:o)}function yl(e,n,a,o){var u=$e();o=o===void 0?null:o;var f=u.memoizedState.inst;Pe!==null&&o!==null&&Ou(o,Pe.memoizedState.deps)?u.memoizedState=Js(n,f,a,o):(se.flags|=e,u.memoizedState=Js(1|n,f,a,o))}function sm(e,n){xl(8390656,8,e,n)}function Xu(e,n){yl(2048,8,e,n)}function TS(e){se.flags|=4;var n=se.updateQueue;if(n===null)n=_l(),se.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function rm(e){var n=$e().memoizedState;return TS({ref:n,nextImpl:e}),function(){if((Ae&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function om(e,n){return yl(4,2,e,n)}function lm(e,n){return yl(4,4,e,n)}function cm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function um(e,n,a){a=a!=null?a.concat([e]):null,yl(4,4,cm.bind(null,n,e),a)}function Wu(){}function fm(e,n){var a=$e();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Ou(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function hm(e,n){var a=$e();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Ou(n,o[1]))return o[0];if(o=e(),ds){Ot(!0);try{e()}finally{Ot(!1)}}return a.memoizedState=[o,n],o}function qu(e,n,a){return a===void 0||(Yi&1073741824)!==0&&(_e&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=dg(),se.lanes|=e,wa|=e,a)}function dm(e,n,a,o){return Xn(a,n)?a:Zs.current!==null?(e=qu(e,a,o),Xn(e,n)||(nn=!0),e):(Yi&42)===0||(Yi&1073741824)!==0&&(_e&261930)===0?(nn=!0,e.memoizedState=a):(e=dg(),se.lanes|=e,wa|=e,n)}function pm(e,n,a,o,u){var f=W.p;W.p=f!==0&&8>f?f:8;var S=P.T,b={};P.T=b,Zu(e,!1,n,a);try{var I=u(),Q=P.S;if(Q!==null&&Q(b,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var ut=xS(I,o);uo(e,n,ut,Kn(e))}else uo(e,n,o,Kn(e))}catch(mt){uo(e,n,{then:function(){},status:"rejected",reason:mt},Kn())}finally{W.p=f,S!==null&&b.types!==null&&(S.types=b.types),P.T=S}}function AS(){}function Yu(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=mm(e).queue;pm(e,u,n,Z,a===null?AS:function(){return gm(e),a(o)})}function mm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:Z},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function gm(e){var n=mm(e);n.next===null&&(n=e.alternate.memoizedState),uo(e,n.next.queue,{},Kn())}function ju(){return Sn(Co)}function _m(){return $e().memoizedState}function vm(){return $e().memoizedState}function RS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Kn();e=Ea(a);var o=ba(n,e,a);o!==null&&(Fn(o,n,a),so(o,n,a)),n={cache:Eu()},e.payload=n;return}n=n.return}}function CS(e,n,a){var o=Kn();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ml(e)?xm(n,a):(a=hu(e,n,a,o),a!==null&&(Fn(a,e,o),ym(a,n,o)))}function Sm(e,n,a){var o=Kn();uo(e,n,a,o)}function uo(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ml(e))xm(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,b=f(S,a);if(u.hasEagerState=!0,u.eagerState=b,Xn(b,S))return nl(e,n,u,0),He===null&&el(),!1}catch{}finally{}if(a=hu(e,n,u,o),a!==null)return Fn(a,e,o),ym(a,n,o),!0}return!1}function Zu(e,n,a,o){if(o={lane:2,revertLane:Cf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Ml(e)){if(n)throw Error(s(479))}else n=hu(e,a,o,2),n!==null&&Fn(n,e,2)}function Ml(e){var n=e.alternate;return e===se||n!==null&&n===se}function xm(e,n){Ks=ml=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function ym(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Gr(e,a)}}var fo={readContext:Sn,use:vl,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useLayoutEffect:Ze,useInsertionEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useSyncExternalStore:Ze,useId:Ze,useHostTransitionStatus:Ze,useFormState:Ze,useActionState:Ze,useOptimistic:Ze,useMemoCache:Ze,useCacheRefresh:Ze};fo.useEffectEvent=Ze;var Mm={readContext:Sn,use:vl,useCallback:function(e,n){return Dn().memoizedState=[e,n===void 0?null:n],e},useContext:Sn,useEffect:sm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,xl(4194308,4,cm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return xl(4194308,4,e,n)},useInsertionEffect:function(e,n){xl(4,2,e,n)},useMemo:function(e,n){var a=Dn();n=n===void 0?null:n;var o=e();if(ds){Ot(!0);try{e()}finally{Ot(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Dn();if(a!==void 0){var u=a(n);if(ds){Ot(!0);try{a(n)}finally{Ot(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=CS.bind(null,se,e),[o.memoizedState,e]},useRef:function(e){var n=Dn();return e={current:e},n.memoizedState=e},useState:function(e){e=Vu(e);var n=e.queue,a=Sm.bind(null,se,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Wu,useDeferredValue:function(e,n){var a=Dn();return qu(a,e,n)},useTransition:function(){var e=Vu(!1);return e=pm.bind(null,se,e.queue,!0,!1),Dn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=se,u=Dn();if(xe){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),He===null)throw Error(s(349));(_e&127)!==0||kp(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,sm(Wp.bind(null,o,f,e),[e]),o.flags|=2048,Js(9,{destroy:void 0},Xp.bind(null,o,f,a,n),null),a},useId:function(){var e=Dn(),n=He.identifierPrefix;if(xe){var a=Di,o=wi;a=(o&~(1<<32-Jt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=gl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=yS++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:ju,useFormState:tm,useActionState:tm,useOptimistic:function(e){var n=Dn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Zu.bind(null,se,!0,a),a.dispatch=n,[e,n]},useMemoCache:Fu,useCacheRefresh:function(){return Dn().memoizedState=RS.bind(null,se)},useEffectEvent:function(e){var n=Dn(),a={impl:e};return n.memoizedState=a,function(){if((Ae&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Ku={readContext:Sn,use:vl,useCallback:fm,useContext:Sn,useEffect:Xu,useImperativeHandle:um,useInsertionEffect:om,useLayoutEffect:lm,useMemo:hm,useReducer:Sl,useRef:am,useState:function(){return Sl(ji)},useDebugValue:Wu,useDeferredValue:function(e,n){var a=$e();return dm(a,Pe.memoizedState,e,n)},useTransition:function(){var e=Sl(ji)[0],n=$e().memoizedState;return[typeof e=="boolean"?e:co(e),n]},useSyncExternalStore:Vp,useId:_m,useHostTransitionStatus:ju,useFormState:em,useActionState:em,useOptimistic:function(e,n){var a=$e();return jp(a,Pe,e,n)},useMemoCache:Fu,useCacheRefresh:vm};Ku.useEffectEvent=rm;var Em={readContext:Sn,use:vl,useCallback:fm,useContext:Sn,useEffect:Xu,useImperativeHandle:um,useInsertionEffect:om,useLayoutEffect:lm,useMemo:hm,useReducer:Gu,useRef:am,useState:function(){return Gu(ji)},useDebugValue:Wu,useDeferredValue:function(e,n){var a=$e();return Pe===null?qu(a,e,n):dm(a,Pe.memoizedState,e,n)},useTransition:function(){var e=Gu(ji)[0],n=$e().memoizedState;return[typeof e=="boolean"?e:co(e),n]},useSyncExternalStore:Vp,useId:_m,useHostTransitionStatus:ju,useFormState:im,useActionState:im,useOptimistic:function(e,n){var a=$e();return Pe!==null?jp(a,Pe,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Fu,useCacheRefresh:vm};Em.useEffectEvent=rm;function Qu(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ju={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=Kn(),u=Ea(o);u.payload=n,a!=null&&(u.callback=a),n=ba(e,u,o),n!==null&&(Fn(n,e,o),so(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=Kn(),u=Ea(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ba(e,u,o),n!==null&&(Fn(n,e,o),so(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Kn(),o=Ea(a);o.tag=2,n!=null&&(o.callback=n),n=ba(e,o,a),n!==null&&(Fn(n,e,a),so(n,e,a))}};function bm(e,n,a,o,u,f,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,S):n.prototype&&n.prototype.isPureReactComponent?!Qr(a,o)||!Qr(u,f):!0}function Tm(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Ju.enqueueReplaceState(n,n.state,null)}function ps(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Am(e){tl(e)}function Rm(e){console.error(e)}function Cm(e){tl(e)}function El(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function wm(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function $u(e,n,a){return a=Ea(a),a.tag=3,a.payload={element:null},a.callback=function(){El(e,n)},a}function Dm(e){return e=Ea(e),e.tag=3,e}function Um(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){wm(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){wm(n,a,o),typeof u!="function"&&(Da===null?Da=new Set([this]):Da.add(this));var b=o.stack;this.componentDidCatch(o.value,{componentStack:b!==null?b:""})})}function wS(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Xs(n,a,u,!0),a=qn.current,a!==null){switch(a.tag){case 31:case 13:return oi===null?Pl():a.alternate===null&&Ke===0&&(Ke=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===ul?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Tf(e,o,u)),!1;case 22:return a.flags|=65536,o===ul?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Tf(e,o,u)),!1}throw Error(s(435,a.tag))}return Tf(e,o,u),Pl(),!1}if(xe)return n=qn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==vu&&(e=Error(s(422),{cause:o}),to(ii(e,a)))):(o!==vu&&(n=Error(s(423),{cause:o}),to(ii(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=ii(o,a),u=$u(e.stateNode,o,u),wu(e,u),Ke!==4&&(Ke=2)),!1;var f=Error(s(520),{cause:o});if(f=ii(f,a),xo===null?xo=[f]:xo.push(f),Ke!==4&&(Ke=2),n===null)return!0;o=ii(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=$u(a.stateNode,o,e),wu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Da===null||!Da.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Dm(u),Um(u,e,a,o),wu(a,u),!1}a=a.return}while(a!==null);return!1}var tf=Error(s(461)),nn=!1;function xn(e,n,a,o){n.child=e===null?Pp(n,null,a,o):hs(n,e.child,a,o)}function Lm(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var S={};for(var b in o)b!=="ref"&&(S[b]=o[b])}else S=o;return ls(n),o=Pu(e,n,a,S,f,u),b=zu(),e!==null&&!nn?(Iu(e,n,u),Zi(e,n,u)):(xe&&b&&gu(n),n.flags|=1,xn(e,n,o,u),n.child)}function Nm(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!du(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Om(e,n,f,o,u)):(e=al(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!cf(e,u)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:Qr,a(S,o)&&e.ref===n.ref)return Zi(e,n,u)}return n.flags|=1,e=ki(f,o),e.ref=n.ref,e.return=n,n.child=e}function Om(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(Qr(f,o)&&e.ref===n.ref)if(nn=!1,n.pendingProps=o=f,cf(e,u))(e.flags&131072)!==0&&(nn=!0);else return n.lanes=e.lanes,Zi(e,n,u)}return ef(e,n,a,o,u)}function Pm(e,n,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return zm(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&ll(n,f!==null?f.cachePool:null),f!==null?Bp(n,f):Uu(),Fp(n);else return o=n.lanes=536870912,zm(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(ll(n,f.cachePool),Bp(n,f),Aa(),n.memoizedState=null):(e!==null&&ll(n,null),Uu(),Aa());return xn(e,n,u,a),n.child}function ho(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function zm(e,n,a,o,u){var f=Tu();return f=f===null?null:{parent:tn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&ll(n,null),Uu(),Fp(n),e!==null&&Xs(e,n,o,!0),n.childLanes=u,null}function bl(e,n){return n=Al({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Im(e,n,a){return hs(n,e.child,null,a),e=bl(n,n.pendingProps),e.flags|=2,Yn(n),n.memoizedState=null,e}function DS(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(xe){if(o.mode==="hidden")return e=bl(n,o),n.lanes=536870912,ho(null,e);if(Nu(n),(e=Ge)?(e=Zg(e,ri),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:va!==null?{id:wi,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},a=xp(e),a.return=n,n.child=a,vn=n,Ge=null)):e=null,e===null)throw xa(n);return n.lanes=536870912,null}return bl(n,o)}var f=e.memoizedState;if(f!==null){var S=f.dehydrated;if(Nu(n),u)if(n.flags&256)n.flags&=-257,n=Im(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(nn||Xs(e,n,a,!1),u=(a&e.childLanes)!==0,nn||u){if(o=He,o!==null&&(S=Ci(o,a),S!==0&&S!==f.retryLane))throw f.retryLane=S,as(e,S),Fn(o,e,S),tf;Pl(),n=Im(e,n,a)}else e=f.treeContext,Ge=li(S.nextSibling),vn=n,xe=!0,Sa=null,ri=!1,e!==null&&Ep(n,e),n=bl(n,o),n.flags|=4096;return n}return e=ki(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Tl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function ef(e,n,a,o,u){return ls(n),a=Pu(e,n,a,o,void 0,u),o=zu(),e!==null&&!nn?(Iu(e,n,u),Zi(e,n,u)):(xe&&o&&gu(n),n.flags|=1,xn(e,n,a,u),n.child)}function Bm(e,n,a,o,u,f){return ls(n),n.updateQueue=null,a=Gp(n,o,a,u),Hp(e),o=zu(),e!==null&&!nn?(Iu(e,n,f),Zi(e,n,f)):(xe&&o&&gu(n),n.flags|=1,xn(e,n,a,f),n.child)}function Fm(e,n,a,o,u){if(ls(n),n.stateNode===null){var f=Hs,S=a.contextType;typeof S=="object"&&S!==null&&(f=Sn(S)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Ju,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Ru(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?Sn(S):Hs,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Qu(n,a,S,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&Ju.enqueueReplaceState(f,f.state,null),oo(n,o,f,u),ro(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var b=n.memoizedProps,I=ps(a,b);f.props=I;var Q=f.context,ut=a.contextType;S=Hs,typeof ut=="object"&&ut!==null&&(S=Sn(ut));var mt=a.getDerivedStateFromProps;ut=typeof mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,ut||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||Q!==S)&&Tm(n,f,o,S),Ma=!1;var $=n.memoizedState;f.state=$,oo(n,o,f,u),ro(),Q=n.memoizedState,b||$!==Q||Ma?(typeof mt=="function"&&(Qu(n,a,mt,o),Q=n.memoizedState),(I=Ma||bm(n,a,I,o,$,Q,S))?(ut||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=Q),f.props=o,f.state=Q,f.context=S,o=I):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Cu(e,n),S=n.memoizedProps,ut=ps(a,S),f.props=ut,mt=n.pendingProps,$=f.context,Q=a.contextType,I=Hs,typeof Q=="object"&&Q!==null&&(I=Sn(Q)),b=a.getDerivedStateFromProps,(Q=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==mt||$!==I)&&Tm(n,f,o,I),Ma=!1,$=n.memoizedState,f.state=$,oo(n,o,f,u),ro();var rt=n.memoizedState;S!==mt||$!==rt||Ma||e!==null&&e.dependencies!==null&&rl(e.dependencies)?(typeof b=="function"&&(Qu(n,a,b,o),rt=n.memoizedState),(ut=Ma||bm(n,a,ut,o,$,rt,I)||e!==null&&e.dependencies!==null&&rl(e.dependencies))?(Q||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,rt,I),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,rt,I)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&$===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&$===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=rt),f.props=o,f.state=rt,f.context=I,o=ut):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&$===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&$===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Tl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=hs(n,e.child,null,u),n.child=hs(n,null,a,u)):xn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=Zi(e,n,u),e}function Hm(e,n,a,o){return rs(),n.flags|=256,xn(e,n,a,o),n.child}var nf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function af(e){return{baseLanes:e,cachePool:wp()}}function sf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Zn),e}function Gm(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=e!==null&&e.memoizedState===null?!1:(Je.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(xe){if(u?Ta(n):Aa(),(e=Ge)?(e=Zg(e,ri),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:va!==null?{id:wi,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},a=xp(e),a.return=n,n.child=a,vn=n,Ge=null)):e=null,e===null)throw xa(n);return Gf(e)?n.lanes=32:n.lanes=536870912,null}var b=o.children;return o=o.fallback,u?(Aa(),u=n.mode,b=Al({mode:"hidden",children:b},u),o=ss(o,u,a,null),b.return=n,o.return=n,b.sibling=o,n.child=b,o=n.child,o.memoizedState=af(a),o.childLanes=sf(e,S,a),n.memoizedState=nf,ho(null,o)):(Ta(n),rf(n,b))}var I=e.memoizedState;if(I!==null&&(b=I.dehydrated,b!==null)){if(f)n.flags&256?(Ta(n),n.flags&=-257,n=of(e,n,a)):n.memoizedState!==null?(Aa(),n.child=e.child,n.flags|=128,n=null):(Aa(),b=o.fallback,u=n.mode,o=Al({mode:"visible",children:o.children},u),b=ss(b,u,a,null),b.flags|=2,o.return=n,b.return=n,o.sibling=b,n.child=o,hs(n,e.child,null,a),o=n.child,o.memoizedState=af(a),o.childLanes=sf(e,S,a),n.memoizedState=nf,n=ho(null,o));else if(Ta(n),Gf(b)){if(S=b.nextSibling&&b.nextSibling.dataset,S)var Q=S.dgst;S=Q,o=Error(s(419)),o.stack="",o.digest=S,to({value:o,source:null,stack:null}),n=of(e,n,a)}else if(nn||Xs(e,n,a,!1),S=(a&e.childLanes)!==0,nn||S){if(S=He,S!==null&&(o=Ci(S,a),o!==0&&o!==I.retryLane))throw I.retryLane=o,as(e,o),Fn(S,e,o),tf;Hf(b)||Pl(),n=of(e,n,a)}else Hf(b)?(n.flags|=192,n.child=e.child,n=null):(e=I.treeContext,Ge=li(b.nextSibling),vn=n,xe=!0,Sa=null,ri=!1,e!==null&&Ep(n,e),n=rf(n,o.children),n.flags|=4096);return n}return u?(Aa(),b=o.fallback,u=n.mode,I=e.child,Q=I.sibling,o=ki(I,{mode:"hidden",children:o.children}),o.subtreeFlags=I.subtreeFlags&65011712,Q!==null?b=ki(Q,b):(b=ss(b,u,a,null),b.flags|=2),b.return=n,o.return=n,o.sibling=b,n.child=o,ho(null,o),o=n.child,b=e.child.memoizedState,b===null?b=af(a):(u=b.cachePool,u!==null?(I=tn._currentValue,u=u.parent!==I?{parent:I,pool:I}:u):u=wp(),b={baseLanes:b.baseLanes|a,cachePool:u}),o.memoizedState=b,o.childLanes=sf(e,S,a),n.memoizedState=nf,ho(e.child,o)):(Ta(n),a=e.child,e=a.sibling,a=ki(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function rf(e,n){return n=Al({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Al(e,n){return e=Wn(22,e,null,n),e.lanes=0,e}function of(e,n,a){return hs(n,e.child,null,a),e=rf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Vm(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),yu(e.return,n,a)}function lf(e,n,a,o,u,f){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=a,S.tailMode=u,S.treeForkCount=f)}function km(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var S=Je.current,b=(S&2)!==0;if(b?(S=S&1|2,n.flags|=128):S&=1,St(Je,S),xn(e,n,o,a),o=xe?$r:0,!b&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Vm(e,a,n);else if(e.tag===19)Vm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&pl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),lf(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&pl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}lf(n,!0,a,null,f,o);break;case"together":lf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Zi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),wa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Xs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ki(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ki(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function cf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&rl(e)))}function US(e,n,a){switch(n.tag){case 3:Ht(n,n.stateNode.containerInfo),ya(n,tn,e.memoizedState.cache),rs();break;case 27:case 5:ne(n);break;case 4:Ht(n,n.stateNode.containerInfo);break;case 10:ya(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Nu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ta(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Gm(e,n,a):(Ta(n),e=Zi(e,n,a),e!==null?e.sibling:null);Ta(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Xs(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return km(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),St(Je,Je.current),o)break;return null;case 22:return n.lanes=0,Pm(e,n,a,n.pendingProps);case 24:ya(n,tn,e.memoizedState.cache)}return Zi(e,n,a)}function Xm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)nn=!0;else{if(!cf(e,a)&&(n.flags&128)===0)return nn=!1,US(e,n,a);nn=(e.flags&131072)!==0}else nn=!1,xe&&(n.flags&1048576)!==0&&Mp(n,$r,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=us(n.elementType),n.type=e,typeof e=="function")du(e)?(o=ps(e,o),n.tag=1,n=Fm(null,n,e,o,a)):(n.tag=0,n=ef(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===D){n.tag=11,n=Lm(null,n,e,o,a);break t}else if(u===z){n.tag=14,n=Nm(null,n,e,o,a);break t}}throw n=gt(e)||e,Error(s(306,n,""))}}return n;case 0:return ef(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=ps(o,n.pendingProps),Fm(e,n,o,u,a);case 3:t:{if(Ht(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Cu(e,n),oo(n,o,null,a);var S=n.memoizedState;if(o=S.cache,ya(n,tn,o),o!==f.cache&&Mu(n,[tn],a,!0),ro(),o=S.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Hm(e,n,o,a);break t}else if(o!==u){u=ii(Error(s(424)),n),to(u),n=Hm(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ge=li(e.firstChild),vn=n,xe=!0,Sa=null,ri=!0,a=Pp(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(rs(),o===u){n=Zi(e,n,a);break t}xn(e,n,o,a)}n=n.child}return n;case 26:return Tl(e,n),e===null?(a=e_(n.type,null,n.pendingProps,null))?n.memoizedState=a:xe||(a=n.type,e=n.pendingProps,o=Vl(Mt.current).createElement(a),o[je]=n,o[gn]=e,yn(o,a,e),Dt(o),n.stateNode=o):n.memoizedState=e_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ne(n),e===null&&xe&&(o=n.stateNode=Jg(n.type,n.pendingProps,Mt.current),vn=n,ri=!0,u=Ge,Oa(n.type)?(Vf=u,Ge=li(o.firstChild)):Ge=u),xn(e,n,n.pendingProps.children,a),Tl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&xe&&((u=o=Ge)&&(o=ox(o,n.type,n.pendingProps,ri),o!==null?(n.stateNode=o,vn=n,Ge=li(o.firstChild),ri=!1,u=!0):u=!1),u||xa(n)),ne(n),u=n.type,f=n.pendingProps,S=e!==null?e.memoizedProps:null,o=f.children,If(u,f)?o=null:S!==null&&If(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=Pu(e,n,MS,null,null,a),Co._currentValue=u),Tl(e,n),xn(e,n,o,a),n.child;case 6:return e===null&&xe&&((e=a=Ge)&&(a=lx(a,n.pendingProps,ri),a!==null?(n.stateNode=a,vn=n,Ge=null,e=!0):e=!1),e||xa(n)),null;case 13:return Gm(e,n,a);case 4:return Ht(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=hs(n,null,o,a):xn(e,n,o,a),n.child;case 11:return Lm(e,n,n.type,n.pendingProps,a);case 7:return xn(e,n,n.pendingProps,a),n.child;case 8:return xn(e,n,n.pendingProps.children,a),n.child;case 12:return xn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,ya(n,n.type,o.value),xn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,ls(n),u=Sn(u),o=o(u),n.flags|=1,xn(e,n,o,a),n.child;case 14:return Nm(e,n,n.type,n.pendingProps,a);case 15:return Om(e,n,n.type,n.pendingProps,a);case 19:return km(e,n,a);case 31:return DS(e,n,a);case 22:return Pm(e,n,a,n.pendingProps);case 24:return ls(n),o=Sn(tn),e===null?(u=Tu(),u===null&&(u=He,f=Eu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Ru(n),ya(n,tn,u)):((e.lanes&a)!==0&&(Cu(e,n),oo(n,null,null,a),ro()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ya(n,tn,o)):(o=f.cache,ya(n,tn,o),o!==u.cache&&Mu(n,[tn],a,!0))),xn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Ki(e){e.flags|=4}function uf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(_g())e.flags|=8192;else throw fs=ul,Au}else e.flags&=-16777217}function Wm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!r_(n))if(_g())e.flags|=8192;else throw fs=ul,Au}function Rl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?rn():536870912,e.lanes|=n,nr|=n)}function po(e,n){if(!xe)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ve(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function LS(e,n,a){var o=n.pendingProps;switch(_u(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(n),null;case 1:return Ve(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),qi(tn),Ft(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ks(n)?Ki(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Su())),Ve(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(Ki(n),f!==null?(Ve(n),Wm(n,f)):(Ve(n),uf(n,u,null,o,a))):f?f!==e.memoizedState?(Ki(n),Ve(n),Wm(n,f)):(Ve(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&Ki(n),Ve(n),uf(n,u,e,o,a)),null;case 27:if(Le(n),a=Mt.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Ki(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ve(n),null}e=j.current,ks(n)?bp(n):(e=Jg(u,o,a),n.stateNode=e,Ki(n))}return Ve(n),null;case 5:if(Le(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Ki(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ve(n),null}if(f=j.current,ks(n))bp(n);else{var S=Vl(Mt.current);switch(f){case 1:f=S.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=S.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=S.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?S.createElement(u,{is:o.is}):S.createElement(u)}}f[je]=n,f[gn]=o;t:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)f.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break t;for(;S.sibling===null;){if(S.return===null||S.return===n)break t;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=f;t:switch(yn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&Ki(n)}}return Ve(n),uf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Ki(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=Mt.current,ks(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=vn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[je]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Gg(e.nodeValue,a)),e||xa(n,!0)}else e=Vl(e).createTextNode(o),e[je]=n,n.stateNode=e}return Ve(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=ks(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[je]=n}else rs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ve(n),e=!1}else a=Su(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Yn(n),n):(Yn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ve(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=ks(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[je]=n}else rs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ve(n),u=!1}else u=Su(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Yn(n),n):(Yn(n),null)}return Yn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Rl(n,n.updateQueue),Ve(n),null);case 4:return Ft(),e===null&&Lf(n.stateNode.containerInfo),Ve(n),null;case 10:return qi(n.type),Ve(n),null;case 19:if(nt(Je),o=n.memoizedState,o===null)return Ve(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)po(o,!1);else{if(Ke!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=pl(e),f!==null){for(n.flags|=128,po(o,!1),e=f.updateQueue,n.updateQueue=e,Rl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Sp(a,e),a=a.sibling;return St(Je,Je.current&1|2),xe&&Xi(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&ft()>Ll&&(n.flags|=128,u=!0,po(o,!1),n.lanes=4194304)}else{if(!u)if(e=pl(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Rl(n,e),po(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!xe)return Ve(n),null}else 2*ft()-o.renderingStartTime>Ll&&a!==536870912&&(n.flags|=128,u=!0,po(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=ft(),e.sibling=null,a=Je.current,St(Je,u?a&1|2:a&1),xe&&Xi(n,o.treeForkCount),e):(Ve(n),null);case 22:case 23:return Yn(n),Lu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ve(n),n.subtreeFlags&6&&(n.flags|=8192)):Ve(n),a=n.updateQueue,a!==null&&Rl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&nt(cs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),qi(tn),Ve(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function NS(e,n){switch(_u(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return qi(tn),Ft(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Le(n),null;case 31:if(n.memoizedState!==null){if(Yn(n),n.alternate===null)throw Error(s(340));rs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Yn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));rs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return nt(Je),null;case 4:return Ft(),null;case 10:return qi(n.type),null;case 22:case 23:return Yn(n),Lu(),e!==null&&nt(cs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return qi(tn),null;case 25:return null;default:return null}}function qm(e,n){switch(_u(n),n.tag){case 3:qi(tn),Ft();break;case 26:case 27:case 5:Le(n);break;case 4:Ft();break;case 31:n.memoizedState!==null&&Yn(n);break;case 13:Yn(n);break;case 19:nt(Je);break;case 10:qi(n.type);break;case 22:case 23:Yn(n),Lu(),e!==null&&nt(cs);break;case 24:qi(tn)}}function mo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,S=a.inst;o=f(),S.destroy=o}a=a.next}while(a!==u)}}catch(b){Ue(n,n.return,b)}}function Ra(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var S=o.inst,b=S.destroy;if(b!==void 0){S.destroy=void 0,u=n;var I=a,Q=b;try{Q()}catch(ut){Ue(u,I,ut)}}}o=o.next}while(o!==f)}}catch(ut){Ue(n,n.return,ut)}}function Ym(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Ip(n,a)}catch(o){Ue(e,e.return,o)}}}function jm(e,n,a){a.props=ps(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ue(e,n,o)}}function go(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Ue(e,n,u)}}function Ui(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ue(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ue(e,n,u)}else a.current=null}function Zm(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ue(e,e.return,u)}}function ff(e,n,a){try{var o=e.stateNode;ex(o,e.type,a,n),o[gn]=n}catch(u){Ue(e,e.return,u)}}function Km(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Oa(e.type)||e.tag===4}function hf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Km(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Oa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function df(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Gi));else if(o!==4&&(o===27&&Oa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(df(e,n,a),e=e.sibling;e!==null;)df(e,n,a),e=e.sibling}function Cl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Oa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Cl(e,n,a),e=e.sibling;e!==null;)Cl(e,n,a),e=e.sibling}function Qm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);yn(n,o,a),n[je]=e,n[gn]=a}catch(f){Ue(e,e.return,f)}}var Qi=!1,an=!1,pf=!1,Jm=typeof WeakSet=="function"?WeakSet:Set,dn=null;function OS(e,n){if(e=e.containerInfo,Pf=Zl,e=up(e),ru(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var S=0,b=-1,I=-1,Q=0,ut=0,mt=e,$=null;e:for(;;){for(var rt;mt!==a||u!==0&&mt.nodeType!==3||(b=S+u),mt!==f||o!==0&&mt.nodeType!==3||(I=S+o),mt.nodeType===3&&(S+=mt.nodeValue.length),(rt=mt.firstChild)!==null;)$=mt,mt=rt;for(;;){if(mt===e)break e;if($===a&&++Q===u&&(b=S),$===f&&++ut===o&&(I=S),(rt=mt.nextSibling)!==null)break;mt=$,$=mt.parentNode}mt=rt}a=b===-1||I===-1?null:{start:b,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(zf={focusedElem:e,selectionRange:a},Zl=!1,dn=n;dn!==null;)if(n=dn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,dn=e;else for(;dn!==null;){switch(n=dn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Bt=ps(a.type,u);e=o.getSnapshotBeforeUpdate(Bt,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(Kt){Ue(a,a.return,Kt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Ff(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ff(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,dn=e;break}dn=n.return}}function $m(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:$i(e,a),o&4&&mo(5,a);break;case 1:if($i(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){Ue(a,a.return,S)}else{var u=ps(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Ue(a,a.return,S)}}o&64&&Ym(a),o&512&&go(a,a.return);break;case 3:if($i(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Ip(e,n)}catch(S){Ue(a,a.return,S)}}break;case 27:n===null&&o&4&&Qm(a);case 26:case 5:$i(e,a),n===null&&o&4&&Zm(a),o&512&&go(a,a.return);break;case 12:$i(e,a);break;case 31:$i(e,a),o&4&&ng(e,a);break;case 13:$i(e,a),o&4&&ig(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=kS.bind(null,a),cx(e,a))));break;case 22:if(o=a.memoizedState!==null||Qi,!o){n=n!==null&&n.memoizedState!==null||an,u=Qi;var f=an;Qi=o,(an=n)&&!f?ta(e,a,(a.subtreeFlags&8772)!==0):$i(e,a),Qi=u,an=f}break;case 30:break;default:$i(e,a)}}function tg(e){var n=e.alternate;n!==null&&(e.alternate=null,tg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&at(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var We=null,Pn=!1;function Ji(e,n,a){for(a=a.child;a!==null;)eg(e,n,a),a=a.sibling}function eg(e,n,a){if(Wt&&typeof Wt.onCommitFiberUnmount=="function")try{Wt.onCommitFiberUnmount(jt,a)}catch{}switch(a.tag){case 26:an||Ui(a,n),Ji(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:an||Ui(a,n);var o=We,u=Pn;Oa(a.type)&&(We=a.stateNode,Pn=!1),Ji(e,n,a),To(a.stateNode),We=o,Pn=u;break;case 5:an||Ui(a,n);case 6:if(o=We,u=Pn,We=null,Ji(e,n,a),We=o,Pn=u,We!==null)if(Pn)try{(We.nodeType===9?We.body:We.nodeName==="HTML"?We.ownerDocument.body:We).removeChild(a.stateNode)}catch(f){Ue(a,n,f)}else try{We.removeChild(a.stateNode)}catch(f){Ue(a,n,f)}break;case 18:We!==null&&(Pn?(e=We,Yg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),ur(e)):Yg(We,a.stateNode));break;case 4:o=We,u=Pn,We=a.stateNode.containerInfo,Pn=!0,Ji(e,n,a),We=o,Pn=u;break;case 0:case 11:case 14:case 15:Ra(2,a,n),an||Ra(4,a,n),Ji(e,n,a);break;case 1:an||(Ui(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&jm(a,n,o)),Ji(e,n,a);break;case 21:Ji(e,n,a);break;case 22:an=(o=an)||a.memoizedState!==null,Ji(e,n,a),an=o;break;default:Ji(e,n,a)}}function ng(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ur(e)}catch(a){Ue(n,n.return,a)}}}function ig(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ur(e)}catch(a){Ue(n,n.return,a)}}function PS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Jm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Jm),n;default:throw Error(s(435,e.tag))}}function wl(e,n){var a=PS(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=XS.bind(null,e,o);o.then(u,u)}})}function zn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,S=n,b=S;t:for(;b!==null;){switch(b.tag){case 27:if(Oa(b.type)){We=b.stateNode,Pn=!1;break t}break;case 5:We=b.stateNode,Pn=!1;break t;case 3:case 4:We=b.stateNode.containerInfo,Pn=!0;break t}b=b.return}if(We===null)throw Error(s(160));eg(f,S,u),We=null,Pn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)ag(n,e),n=n.sibling}var Si=null;function ag(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:zn(n,e),In(e),o&4&&(Ra(3,e,e.return),mo(3,e),Ra(5,e,e.return));break;case 1:zn(n,e),In(e),o&512&&(an||a===null||Ui(a,a.return)),o&64&&Qi&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Si;if(zn(n,e),In(e),o&512&&(an||a===null||Ui(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[V]||f[je]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),yn(f,o,a),f[je]=e,Dt(f),o=f;break t;case"link":var S=a_("link","href",u).get(o+(a.href||""));if(S){for(var b=0;b<S.length;b++)if(f=S[b],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(b,1);break e}}f=u.createElement(o),yn(f,o,a),u.head.appendChild(f);break;case"meta":if(S=a_("meta","content",u).get(o+(a.content||""))){for(b=0;b<S.length;b++)if(f=S[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(b,1);break e}}f=u.createElement(o),yn(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[je]=e,Dt(f),o=f}e.stateNode=o}else s_(u,e.type,e.stateNode);else e.stateNode=i_(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?s_(u,e.type,e.stateNode):i_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&ff(e,e.memoizedProps,a.memoizedProps)}break;case 27:zn(n,e),In(e),o&512&&(an||a===null||Ui(a,a.return)),a!==null&&o&4&&ff(e,e.memoizedProps,a.memoizedProps);break;case 5:if(zn(n,e),In(e),o&512&&(an||a===null||Ui(a,a.return)),e.flags&32){u=e.stateNode;try{Ns(u,"")}catch(Bt){Ue(e,e.return,Bt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,ff(e,u,a!==null?a.memoizedProps:u)),o&1024&&(pf=!0);break;case 6:if(zn(n,e),In(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Bt){Ue(e,e.return,Bt)}}break;case 3:if(Wl=null,u=Si,Si=kl(n.containerInfo),zn(n,e),Si=u,In(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{ur(n.containerInfo)}catch(Bt){Ue(e,e.return,Bt)}pf&&(pf=!1,sg(e));break;case 4:o=Si,Si=kl(e.stateNode.containerInfo),zn(n,e),In(e),Si=o;break;case 12:zn(n,e),In(e);break;case 31:zn(n,e),In(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,wl(e,o)));break;case 13:zn(n,e),In(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ul=ft()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,wl(e,o)));break;case 22:u=e.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,Q=Qi,ut=an;if(Qi=Q||u,an=ut||I,zn(n,e),an=ut,Qi=Q,In(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||I||Qi||an||ms(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(f=I.stateNode,u)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{b=I.stateNode;var mt=I.memoizedProps.style,$=mt!=null&&mt.hasOwnProperty("display")?mt.display:null;b.style.display=$==null||typeof $=="boolean"?"":(""+$).trim()}}catch(Bt){Ue(I,I.return,Bt)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=u?"":I.memoizedProps}catch(Bt){Ue(I,I.return,Bt)}}}else if(n.tag===18){if(a===null){I=n;try{var rt=I.stateNode;u?jg(rt,!0):jg(I.stateNode,!1)}catch(Bt){Ue(I,I.return,Bt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,wl(e,a))));break;case 19:zn(n,e),In(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,wl(e,o)));break;case 30:break;case 21:break;default:zn(n,e),In(e)}}function In(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Km(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=hf(e);Cl(e,f,u);break;case 5:var S=a.stateNode;a.flags&32&&(Ns(S,""),a.flags&=-33);var b=hf(e);Cl(e,b,S);break;case 3:case 4:var I=a.stateNode.containerInfo,Q=hf(e);df(e,Q,I);break;default:throw Error(s(161))}}catch(ut){Ue(e,e.return,ut)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function sg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;sg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function $i(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)$m(e,n.alternate,n),n=n.sibling}function ms(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ra(4,n,n.return),ms(n);break;case 1:Ui(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&jm(n,n.return,a),ms(n);break;case 27:To(n.stateNode);case 26:case 5:Ui(n,n.return),ms(n);break;case 22:n.memoizedState===null&&ms(n);break;case 30:ms(n);break;default:ms(n)}e=e.sibling}}function ta(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:ta(u,f,a),mo(4,f);break;case 1:if(ta(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(Q){Ue(o,o.return,Q)}if(o=f,u=o.updateQueue,u!==null){var b=o.stateNode;try{var I=u.shared.hiddenCallbacks;if(I!==null)for(u.shared.hiddenCallbacks=null,u=0;u<I.length;u++)zp(I[u],b)}catch(Q){Ue(o,o.return,Q)}}a&&S&64&&Ym(f),go(f,f.return);break;case 27:Qm(f);case 26:case 5:ta(u,f,a),a&&o===null&&S&4&&Zm(f),go(f,f.return);break;case 12:ta(u,f,a);break;case 31:ta(u,f,a),a&&S&4&&ng(u,f);break;case 13:ta(u,f,a),a&&S&4&&ig(u,f);break;case 22:f.memoizedState===null&&ta(u,f,a),go(f,f.return);break;case 30:break;default:ta(u,f,a)}n=n.sibling}}function mf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&eo(a))}function gf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&eo(e))}function xi(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)rg(e,n,a,o),n=n.sibling}function rg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:xi(e,n,a,o),u&2048&&mo(9,n);break;case 1:xi(e,n,a,o);break;case 3:xi(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&eo(e)));break;case 12:if(u&2048){xi(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,S=f.id,b=f.onPostCommit;typeof b=="function"&&b(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){Ue(n,n.return,I)}}else xi(e,n,a,o);break;case 31:xi(e,n,a,o);break;case 13:xi(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,S=n.alternate,n.memoizedState!==null?f._visibility&2?xi(e,n,a,o):_o(e,n):f._visibility&2?xi(e,n,a,o):(f._visibility|=2,$s(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&mf(S,n);break;case 24:xi(e,n,a,o),u&2048&&gf(n.alternate,n);break;default:xi(e,n,a,o)}}function $s(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,S=n,b=a,I=o,Q=S.flags;switch(S.tag){case 0:case 11:case 15:$s(f,S,b,I,u),mo(8,S);break;case 23:break;case 22:var ut=S.stateNode;S.memoizedState!==null?ut._visibility&2?$s(f,S,b,I,u):_o(f,S):(ut._visibility|=2,$s(f,S,b,I,u)),u&&Q&2048&&mf(S.alternate,S);break;case 24:$s(f,S,b,I,u),u&&Q&2048&&gf(S.alternate,S);break;default:$s(f,S,b,I,u)}n=n.sibling}}function _o(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:_o(a,o),u&2048&&mf(o.alternate,o);break;case 24:_o(a,o),u&2048&&gf(o.alternate,o);break;default:_o(a,o)}n=n.sibling}}var vo=8192;function tr(e,n,a){if(e.subtreeFlags&vo)for(e=e.child;e!==null;)og(e,n,a),e=e.sibling}function og(e,n,a){switch(e.tag){case 26:tr(e,n,a),e.flags&vo&&e.memoizedState!==null&&yx(a,Si,e.memoizedState,e.memoizedProps);break;case 5:tr(e,n,a);break;case 3:case 4:var o=Si;Si=kl(e.stateNode.containerInfo),tr(e,n,a),Si=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=vo,vo=16777216,tr(e,n,a),vo=o):tr(e,n,a));break;default:tr(e,n,a)}}function lg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function So(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];dn=o,ug(o,e)}lg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)cg(e),e=e.sibling}function cg(e){switch(e.tag){case 0:case 11:case 15:So(e),e.flags&2048&&Ra(9,e,e.return);break;case 3:So(e);break;case 12:So(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Dl(e)):So(e);break;default:So(e)}}function Dl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];dn=o,ug(o,e)}lg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ra(8,n,n.return),Dl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Dl(n));break;default:Dl(n)}e=e.sibling}}function ug(e,n){for(;dn!==null;){var a=dn;switch(a.tag){case 0:case 11:case 15:Ra(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:eo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,dn=o;else t:for(a=e;dn!==null;){o=dn;var u=o.sibling,f=o.return;if(tg(o),o===a){dn=null;break t}if(u!==null){u.return=f,dn=u;break t}dn=f}}}var zS={getCacheForType:function(e){var n=Sn(tn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Sn(tn).controller.signal}},IS=typeof WeakMap=="function"?WeakMap:Map,Ae=0,He=null,de=null,_e=0,De=0,jn=null,Ca=!1,er=!1,_f=!1,ea=0,Ke=0,wa=0,gs=0,vf=0,Zn=0,nr=0,xo=null,Bn=null,Sf=!1,Ul=0,fg=0,Ll=1/0,Nl=null,Da=null,ln=0,Ua=null,ir=null,na=0,xf=0,yf=null,hg=null,yo=0,Mf=null;function Kn(){return(Ae&2)!==0&&_e!==0?_e&-_e:P.T!==null?Cf():Vr()}function dg(){if(Zn===0)if((_e&536870912)===0||xe){var e=lt;lt<<=1,(lt&3932160)===0&&(lt=262144),Zn=e}else Zn=536870912;return e=qn.current,e!==null&&(e.flags|=32),Zn}function Fn(e,n,a){(e===He&&(De===2||De===9)||e.cancelPendingCommit!==null)&&(ar(e,0),La(e,_e,Zn,!1)),mn(e,a),((Ae&2)===0||e!==He)&&(e===He&&((Ae&2)===0&&(gs|=a),Ke===4&&La(e,_e,Zn,!1)),Li(e))}function pg(e,n,a){if((Ae&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||$t(e,n),u=o?HS(e,n):bf(e,n,!0),f=o;do{if(u===0){er&&!o&&La(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!BS(a)){u=bf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var b=e;u=xo;var I=b.current.memoizedState.isDehydrated;if(I&&(ar(b,S).flags|=256),S=bf(b,S,!1),S!==2){if(_f&&!I){b.errorRecoveryDisabledLanes|=f,gs|=f,u=4;break t}f=Bn,Bn=u,f!==null&&(Bn===null?Bn=f:Bn.push.apply(Bn,f))}u=S}if(f=!1,u!==2)continue}}if(u===1){ar(e,0),La(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:La(o,n,Zn,!Ca);break t;case 2:Bn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Ul+300-ft(),10<u)){if(La(o,n,Zn,!Ca),Lt(o,0,!0)!==0)break t;na=n,o.timeoutHandle=Wg(mg.bind(null,o,a,Bn,Nl,Sf,n,Zn,gs,nr,Ca,f,"Throttled",-0,0),u);break t}mg(o,a,Bn,Nl,Sf,n,Zn,gs,nr,Ca,f,null,-0,0)}}break}while(!0);Li(e)}function mg(e,n,a,o,u,f,S,b,I,Q,ut,mt,$,rt){if(e.timeoutHandle=-1,mt=n.subtreeFlags,mt&8192||(mt&16785408)===16785408){mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Gi},og(n,f,mt);var Bt=(f&62914560)===f?Ul-ft():(f&4194048)===f?fg-ft():0;if(Bt=Mx(mt,Bt),Bt!==null){na=f,e.cancelPendingCommit=Bt(Eg.bind(null,e,n,f,a,o,u,S,b,I,ut,mt,null,$,rt)),La(e,f,S,!Q);return}}Eg(e,n,f,a,o,u,S,b,I)}function BS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!Xn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function La(e,n,a,o){n&=~vf,n&=~gs,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-Jt(u),S=1<<f;o[f]=-1,u&=~S}a!==0&&Hr(e,a,n)}function Ol(){return(Ae&6)===0?(Mo(0),!1):!0}function Ef(){if(de!==null){if(De===0)var e=de.return;else e=de,Wi=os=null,Bu(e),js=null,io=0,e=de;for(;e!==null;)qm(e.alternate,e),e=e.return;de=null}}function ar(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,ax(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),na=0,Ef(),He=e,de=a=ki(e.current,null),_e=n,De=0,jn=null,Ca=!1,er=$t(e,n),_f=!1,nr=Zn=vf=gs=wa=Ke=0,Bn=xo=null,Sf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Jt(o),f=1<<u;n|=e[u],o&=~f}return ea=n,el(),a}function gg(e,n){se=null,P.H=fo,n===Ys||n===cl?(n=Lp(),De=3):n===Au?(n=Lp(),De=4):De=n===tf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,jn=n,de===null&&(Ke=1,El(e,ii(n,e.current)))}function _g(){var e=qn.current;return e===null?!0:(_e&4194048)===_e?oi===null:(_e&62914560)===_e||(_e&536870912)!==0?e===oi:!1}function vg(){var e=P.H;return P.H=fo,e===null?fo:e}function Sg(){var e=P.A;return P.A=zS,e}function Pl(){Ke=4,Ca||(_e&4194048)!==_e&&qn.current!==null||(er=!0),(wa&134217727)===0&&(gs&134217727)===0||He===null||La(He,_e,Zn,!1)}function bf(e,n,a){var o=Ae;Ae|=2;var u=vg(),f=Sg();(He!==e||_e!==n)&&(Nl=null,ar(e,n)),n=!1;var S=Ke;t:do try{if(De!==0&&de!==null){var b=de,I=jn;switch(De){case 8:Ef(),S=6;break t;case 3:case 2:case 9:case 6:qn.current===null&&(n=!0);var Q=De;if(De=0,jn=null,sr(e,b,I,Q),a&&er){S=0;break t}break;default:Q=De,De=0,jn=null,sr(e,b,I,Q)}}FS(),S=Ke;break}catch(ut){gg(e,ut)}while(!0);return n&&e.shellSuspendCounter++,Wi=os=null,Ae=o,P.H=u,P.A=f,de===null&&(He=null,_e=0,el()),S}function FS(){for(;de!==null;)xg(de)}function HS(e,n){var a=Ae;Ae|=2;var o=vg(),u=Sg();He!==e||_e!==n?(Nl=null,Ll=ft()+500,ar(e,n)):er=$t(e,n);t:do try{if(De!==0&&de!==null){n=de;var f=jn;e:switch(De){case 1:De=0,jn=null,sr(e,n,f,1);break;case 2:case 9:if(Dp(f)){De=0,jn=null,yg(n);break}n=function(){De!==2&&De!==9||He!==e||(De=7),Li(e)},f.then(n,n);break t;case 3:De=7;break t;case 4:De=5;break t;case 7:Dp(f)?(De=0,jn=null,yg(n)):(De=0,jn=null,sr(e,n,f,7));break;case 5:var S=null;switch(de.tag){case 26:S=de.memoizedState;case 5:case 27:var b=de;if(S?r_(S):b.stateNode.complete){De=0,jn=null;var I=b.sibling;if(I!==null)de=I;else{var Q=b.return;Q!==null?(de=Q,zl(Q)):de=null}break e}}De=0,jn=null,sr(e,n,f,5);break;case 6:De=0,jn=null,sr(e,n,f,6);break;case 8:Ef(),Ke=6;break t;default:throw Error(s(462))}}GS();break}catch(ut){gg(e,ut)}while(!0);return Wi=os=null,P.H=o,P.A=u,Ae=a,de!==null?0:(He=null,_e=0,el(),Ke)}function GS(){for(;de!==null&&!T();)xg(de)}function xg(e){var n=Xm(e.alternate,e,ea);e.memoizedProps=e.pendingProps,n===null?zl(e):de=n}function yg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Bm(a,n,n.pendingProps,n.type,void 0,_e);break;case 11:n=Bm(a,n,n.pendingProps,n.type.render,n.ref,_e);break;case 5:Bu(n);default:qm(a,n),n=de=Sp(n,ea),n=Xm(a,n,ea)}e.memoizedProps=e.pendingProps,n===null?zl(e):de=n}function sr(e,n,a,o){Wi=os=null,Bu(n),js=null,io=0;var u=n.return;try{if(wS(e,u,n,a,_e)){Ke=1,El(e,ii(a,e.current)),de=null;return}}catch(f){if(u!==null)throw de=u,f;Ke=1,El(e,ii(a,e.current)),de=null;return}n.flags&32768?(xe||o===1?e=!0:er||(_e&536870912)!==0?e=!1:(Ca=e=!0,(o===2||o===9||o===3||o===6)&&(o=qn.current,o!==null&&o.tag===13&&(o.flags|=16384))),Mg(n,e)):zl(n)}function zl(e){var n=e;do{if((n.flags&32768)!==0){Mg(n,Ca);return}e=n.return;var a=LS(n.alternate,n,ea);if(a!==null){de=a;return}if(n=n.sibling,n!==null){de=n;return}de=n=e}while(n!==null);Ke===0&&(Ke=5)}function Mg(e,n){do{var a=NS(e.alternate,e);if(a!==null){a.flags&=32767,de=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){de=e;return}de=e=a}while(e!==null);Ke=6,de=null}function Eg(e,n,a,o,u,f,S,b,I){e.cancelPendingCommit=null;do Il();while(ln!==0);if((Ae&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=fu,mi(e,a,f,S,b,I),e===He&&(de=He=null,_e=0),ir=n,Ua=e,na=a,xf=f,yf=u,hg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,WS(Ut,function(){return Cg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,u=W.p,W.p=2,S=Ae,Ae|=4;try{OS(e,n,a)}finally{Ae=S,W.p=u,P.T=o}}ln=1,bg(),Tg(),Ag()}}function bg(){if(ln===1){ln=0;var e=Ua,n=ir,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var o=W.p;W.p=2;var u=Ae;Ae|=4;try{ag(n,e);var f=zf,S=up(e.containerInfo),b=f.focusedElem,I=f.selectionRange;if(S!==b&&b&&b.ownerDocument&&cp(b.ownerDocument.documentElement,b)){if(I!==null&&ru(b)){var Q=I.start,ut=I.end;if(ut===void 0&&(ut=Q),"selectionStart"in b)b.selectionStart=Q,b.selectionEnd=Math.min(ut,b.value.length);else{var mt=b.ownerDocument||document,$=mt&&mt.defaultView||window;if($.getSelection){var rt=$.getSelection(),Bt=b.textContent.length,Kt=Math.min(I.start,Bt),Ie=I.end===void 0?Kt:Math.min(I.end,Bt);!rt.extend&&Kt>Ie&&(S=Ie,Ie=Kt,Kt=S);var q=lp(b,Kt),F=lp(b,Ie);if(q&&F&&(rt.rangeCount!==1||rt.anchorNode!==q.node||rt.anchorOffset!==q.offset||rt.focusNode!==F.node||rt.focusOffset!==F.offset)){var K=mt.createRange();K.setStart(q.node,q.offset),rt.removeAllRanges(),Kt>Ie?(rt.addRange(K),rt.extend(F.node,F.offset)):(K.setEnd(F.node,F.offset),rt.addRange(K))}}}}for(mt=[],rt=b;rt=rt.parentNode;)rt.nodeType===1&&mt.push({element:rt,left:rt.scrollLeft,top:rt.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<mt.length;b++){var ht=mt[b];ht.element.scrollLeft=ht.left,ht.element.scrollTop=ht.top}}Zl=!!Pf,zf=Pf=null}finally{Ae=u,W.p=o,P.T=a}}e.current=n,ln=2}}function Tg(){if(ln===2){ln=0;var e=Ua,n=ir,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var o=W.p;W.p=2;var u=Ae;Ae|=4;try{$m(e,n.alternate,n)}finally{Ae=u,W.p=o,P.T=a}}ln=3}}function Ag(){if(ln===4||ln===3){ln=0,tt();var e=Ua,n=ir,a=na,o=hg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?ln=5:(ln=0,ir=Ua=null,Rg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Da=null),Ls(a),n=n.stateNode,Wt&&typeof Wt.onCommitFiberRoot=="function")try{Wt.onCommitFiberRoot(jt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=P.T,u=W.p,W.p=2,P.T=null;try{for(var f=e.onRecoverableError,S=0;S<o.length;S++){var b=o[S];f(b.value,{componentStack:b.stack})}}finally{P.T=n,W.p=u}}(na&3)!==0&&Il(),Li(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Mf?yo++:(yo=0,Mf=e):yo=0,Mo(0)}}function Rg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,eo(n)))}function Il(){return bg(),Tg(),Ag(),Cg()}function Cg(){if(ln!==5)return!1;var e=Ua,n=xf;xf=0;var a=Ls(na),o=P.T,u=W.p;try{W.p=32>a?32:a,P.T=null,a=yf,yf=null;var f=Ua,S=na;if(ln=0,ir=Ua=null,na=0,(Ae&6)!==0)throw Error(s(331));var b=Ae;if(Ae|=4,cg(f.current),rg(f,f.current,S,a),Ae=b,Mo(0,!1),Wt&&typeof Wt.onPostCommitFiberRoot=="function")try{Wt.onPostCommitFiberRoot(jt,f)}catch{}return!0}finally{W.p=u,P.T=o,Rg(e,n)}}function wg(e,n,a){n=ii(a,n),n=$u(e.stateNode,n,2),e=ba(e,n,2),e!==null&&(mn(e,2),Li(e))}function Ue(e,n,a){if(e.tag===3)wg(e,e,a);else for(;n!==null;){if(n.tag===3){wg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Da===null||!Da.has(o))){e=ii(a,e),a=Dm(2),o=ba(n,a,2),o!==null&&(Um(a,o,n,e),mn(o,2),Li(o));break}}n=n.return}}function Tf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new IS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(_f=!0,u.add(a),e=VS.bind(null,e,n,a),n.then(e,e))}function VS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,He===e&&(_e&a)===a&&(Ke===4||Ke===3&&(_e&62914560)===_e&&300>ft()-Ul?(Ae&2)===0&&ar(e,0):vf|=a,nr===_e&&(nr=0)),Li(e)}function Dg(e,n){n===0&&(n=rn()),e=as(e,n),e!==null&&(mn(e,n),Li(e))}function kS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Dg(e,a)}function XS(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),Dg(e,a)}function WS(e,n){return Yt(e,n)}var Bl=null,rr=null,Af=!1,Fl=!1,Rf=!1,Na=0;function Li(e){e!==rr&&e.next===null&&(rr===null?Bl=rr=e:rr=rr.next=e),Fl=!0,Af||(Af=!0,YS())}function Mo(e,n){if(!Rf&&Fl){Rf=!0;do for(var a=!1,o=Bl;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var S=o.suspendedLanes,b=o.pingedLanes;f=(1<<31-Jt(42|e)+1)-1,f&=u&~(S&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Og(o,f))}else f=_e,f=Lt(o,o===He?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||$t(o,f)||(a=!0,Og(o,f));o=o.next}while(a);Rf=!1}}function qS(){Ug()}function Ug(){Fl=Af=!1;var e=0;Na!==0&&ix()&&(e=Na);for(var n=ft(),a=null,o=Bl;o!==null;){var u=o.next,f=Lg(o,n);f===0?(o.next=null,a===null?Bl=u:a.next=u,u===null&&(rr=a)):(a=o,(e!==0||(f&3)!==0)&&(Fl=!0)),o=u}ln!==0&&ln!==5||Mo(e),Na!==0&&(Na=0)}function Lg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var S=31-Jt(f),b=1<<S,I=u[S];I===-1?((b&a)===0||(b&o)!==0)&&(u[S]=Xe(b,n)):I<=n&&(e.expiredLanes|=b),f&=~b}if(n=He,a=_e,a=Lt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(De===2||De===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&U(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||$t(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&U(o),Ls(a)){case 2:case 8:a=Xt;break;case 32:a=Ut;break;case 268435456:a=ge;break;default:a=Ut}return o=Ng.bind(null,e),a=Yt(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&U(o),e.callbackPriority=2,e.callbackNode=null,2}function Ng(e,n){if(ln!==0&&ln!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Il()&&e.callbackNode!==a)return null;var o=_e;return o=Lt(e,e===He?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(pg(e,o,n),Lg(e,ft()),e.callbackNode!=null&&e.callbackNode===a?Ng.bind(null,e):null)}function Og(e,n){if(Il())return null;pg(e,n,!0)}function YS(){sx(function(){(Ae&6)!==0?Yt(pt,qS):Ug()})}function Cf(){if(Na===0){var e=Ws;e===0&&(e=Rt,Rt<<=1,(Rt&261888)===0&&(Rt=256)),Na=e}return Na}function Pg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Yo(""+e)}function zg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function jS(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=Pg((u[gn]||null).action),S=o.submitter;S&&(n=(n=S[gn]||null)?Pg(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var b=new Qo("action","action",null,o,u);e.push({event:b,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Na!==0){var I=S?zg(u,S):new FormData(u);Yu(a,{pending:!0,data:I,method:u.method,action:f},null,I)}}else typeof f=="function"&&(b.preventDefault(),I=S?zg(u,S):new FormData(u),Yu(a,{pending:!0,data:I,method:u.method,action:f},f,I))},currentTarget:u}]})}}for(var wf=0;wf<uu.length;wf++){var Df=uu[wf],ZS=Df.toLowerCase(),KS=Df[0].toUpperCase()+Df.slice(1);vi(ZS,"on"+KS)}vi(dp,"onAnimationEnd"),vi(pp,"onAnimationIteration"),vi(mp,"onAnimationStart"),vi("dblclick","onDoubleClick"),vi("focusin","onFocus"),vi("focusout","onBlur"),vi(hS,"onTransitionRun"),vi(dS,"onTransitionStart"),vi(pS,"onTransitionCancel"),vi(gp,"onTransitionEnd"),It("onMouseEnter",["mouseout","mouseover"]),It("onMouseLeave",["mouseout","mouseover"]),It("onPointerEnter",["pointerout","pointerover"]),It("onPointerLeave",["pointerout","pointerover"]),Qt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Qt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Qt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Qt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Qt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Qt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),QS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Eo));function Ig(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var S=o.length-1;0<=S;S--){var b=o[S],I=b.instance,Q=b.currentTarget;if(b=b.listener,I!==f&&u.isPropagationStopped())break t;f=b,u.currentTarget=Q;try{f(u)}catch(ut){tl(ut)}u.currentTarget=null,f=I}else for(S=0;S<o.length;S++){if(b=o[S],I=b.instance,Q=b.currentTarget,b=b.listener,I!==f&&u.isPropagationStopped())break t;f=b,u.currentTarget=Q;try{f(u)}catch(ut){tl(ut)}u.currentTarget=null,f=I}}}}function pe(e,n){var a=n[kr];a===void 0&&(a=n[kr]=new Set);var o=e+"__bubble";a.has(o)||(Bg(n,e,2,!1),a.add(o))}function Uf(e,n,a){var o=0;n&&(o|=4),Bg(a,e,o,n)}var Hl="_reactListening"+Math.random().toString(36).slice(2);function Lf(e){if(!e[Hl]){e[Hl]=!0,Gt.forEach(function(a){a!=="selectionchange"&&(QS.has(a)||Uf(a,!1,e),Uf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Hl]||(n[Hl]=!0,Uf("selectionchange",!1,n))}}function Bg(e,n,a,o){switch(d_(n)){case 2:var u=Tx;break;case 8:u=Ax;break;default:u=Yf}a=u.bind(null,n,a,e),u=void 0,!Qc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Nf(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var b=o.stateNode.containerInfo;if(b===u)break;if(S===4)for(S=o.return;S!==null;){var I=S.tag;if((I===3||I===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;b!==null;){if(S=it(b),S===null)return;if(I=S.tag,I===5||I===6||I===26||I===27){o=f=S;continue t}b=b.parentNode}}o=o.return}kd(function(){var Q=f,ut=Zc(a),mt=[];t:{var $=_p.get(e);if($!==void 0){var rt=Qo,Bt=e;switch(e){case"keypress":if(Zo(a)===0)break t;case"keydown":case"keyup":rt=Xv;break;case"focusin":Bt="focus",rt=eu;break;case"focusout":Bt="blur",rt=eu;break;case"beforeblur":case"afterblur":rt=eu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":rt=qd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":rt=Lv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":rt=Yv;break;case dp:case pp:case mp:rt=Pv;break;case gp:rt=Zv;break;case"scroll":case"scrollend":rt=Dv;break;case"wheel":rt=Qv;break;case"copy":case"cut":case"paste":rt=Iv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":rt=jd;break;case"toggle":case"beforetoggle":rt=$v}var Kt=(n&4)!==0,Ie=!Kt&&(e==="scroll"||e==="scrollend"),q=Kt?$!==null?$+"Capture":null:$;Kt=[];for(var F=Q,K;F!==null;){var ht=F;if(K=ht.stateNode,ht=ht.tag,ht!==5&&ht!==26&&ht!==27||K===null||q===null||(ht=Xr(F,q),ht!=null&&Kt.push(bo(F,ht,K))),Ie)break;F=F.return}0<Kt.length&&($=new rt($,Bt,null,a,ut),mt.push({event:$,listeners:Kt}))}}if((n&7)===0){t:{if($=e==="mouseover"||e==="pointerover",rt=e==="mouseout"||e==="pointerout",$&&a!==jc&&(Bt=a.relatedTarget||a.fromElement)&&(it(Bt)||Bt[Fi]))break t;if((rt||$)&&($=ut.window===ut?ut:($=ut.ownerDocument)?$.defaultView||$.parentWindow:window,rt?(Bt=a.relatedTarget||a.toElement,rt=Q,Bt=Bt?it(Bt):null,Bt!==null&&(Ie=c(Bt),Kt=Bt.tag,Bt!==Ie||Kt!==5&&Kt!==27&&Kt!==6)&&(Bt=null)):(rt=null,Bt=Q),rt!==Bt)){if(Kt=qd,ht="onMouseLeave",q="onMouseEnter",F="mouse",(e==="pointerout"||e==="pointerover")&&(Kt=jd,ht="onPointerLeave",q="onPointerEnter",F="pointer"),Ie=rt==null?$:Tt(rt),K=Bt==null?$:Tt(Bt),$=new Kt(ht,F+"leave",rt,a,ut),$.target=Ie,$.relatedTarget=K,ht=null,it(ut)===Q&&(Kt=new Kt(q,F+"enter",Bt,a,ut),Kt.target=K,Kt.relatedTarget=Ie,ht=Kt),Ie=ht,rt&&Bt)e:{for(Kt=JS,q=rt,F=Bt,K=0,ht=q;ht;ht=Kt(ht))K++;ht=0;for(var qt=F;qt;qt=Kt(qt))ht++;for(;0<K-ht;)q=Kt(q),K--;for(;0<ht-K;)F=Kt(F),ht--;for(;K--;){if(q===F||F!==null&&q===F.alternate){Kt=q;break e}q=Kt(q),F=Kt(F)}Kt=null}else Kt=null;rt!==null&&Fg(mt,$,rt,Kt,!1),Bt!==null&&Ie!==null&&Fg(mt,Ie,Bt,Kt,!0)}}t:{if($=Q?Tt(Q):window,rt=$.nodeName&&$.nodeName.toLowerCase(),rt==="select"||rt==="input"&&$.type==="file")var be=np;else if(tp($))if(ip)be=cS;else{be=oS;var kt=rS}else rt=$.nodeName,!rt||rt.toLowerCase()!=="input"||$.type!=="checkbox"&&$.type!=="radio"?Q&&Yc(Q.elementType)&&(be=np):be=lS;if(be&&(be=be(e,Q))){ep(mt,be,a,ut);break t}kt&&kt(e,$,Q),e==="focusout"&&Q&&$.type==="number"&&Q.memoizedProps.value!=null&&ei($,"number",$.value)}switch(kt=Q?Tt(Q):window,e){case"focusin":(tp(kt)||kt.contentEditable==="true")&&(Is=kt,ou=Q,Jr=null);break;case"focusout":Jr=ou=Is=null;break;case"mousedown":lu=!0;break;case"contextmenu":case"mouseup":case"dragend":lu=!1,fp(mt,a,ut);break;case"selectionchange":if(fS)break;case"keydown":case"keyup":fp(mt,a,ut)}var re;if(iu)t:{switch(e){case"compositionstart":var ve="onCompositionStart";break t;case"compositionend":ve="onCompositionEnd";break t;case"compositionupdate":ve="onCompositionUpdate";break t}ve=void 0}else zs?Jd(e,a)&&(ve="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(Zd&&a.locale!=="ko"&&(zs||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&zs&&(re=Xd()):(_a=ut,Jc="value"in _a?_a.value:_a.textContent,zs=!0)),kt=Gl(Q,ve),0<kt.length&&(ve=new Yd(ve,e,null,a,ut),mt.push({event:ve,listeners:kt}),re?ve.data=re:(re=$d(a),re!==null&&(ve.data=re)))),(re=eS?nS(e,a):iS(e,a))&&(ve=Gl(Q,"onBeforeInput"),0<ve.length&&(kt=new Yd("onBeforeInput","beforeinput",null,a,ut),mt.push({event:kt,listeners:ve}),kt.data=re)),jS(mt,e,Q,a,ut)}Ig(mt,n)})}function bo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Gl(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Xr(e,a),u!=null&&o.unshift(bo(e,u,f)),u=Xr(e,n),u!=null&&o.push(bo(e,u,f))),e.tag===3)return o;e=e.return}return[]}function JS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Fg(e,n,a,o,u){for(var f=n._reactName,S=[];a!==null&&a!==o;){var b=a,I=b.alternate,Q=b.stateNode;if(b=b.tag,I!==null&&I===o)break;b!==5&&b!==26&&b!==27||Q===null||(I=Q,u?(Q=Xr(a,f),Q!=null&&S.unshift(bo(a,Q,I))):u||(Q=Xr(a,f),Q!=null&&S.push(bo(a,Q,I)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var $S=/\r\n?/g,tx=/\u0000|\uFFFD/g;function Hg(e){return(typeof e=="string"?e:""+e).replace($S,`
`).replace(tx,"")}function Gg(e,n){return n=Hg(n),Hg(e)===n}function ze(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Ns(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Ns(e,""+o);break;case"className":Vt(e,"class",o);break;case"tabIndex":Vt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Vt(e,a,o);break;case"style":Gd(e,o,f);break;case"data":if(n!=="object"){Vt(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Yo(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&ze(e,n,"name",u.name,u,null),ze(e,n,"formEncType",u.formEncType,u,null),ze(e,n,"formMethod",u.formMethod,u,null),ze(e,n,"formTarget",u.formTarget,u,null)):(ze(e,n,"encType",u.encType,u,null),ze(e,n,"method",u.method,u,null),ze(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Yo(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Gi);break;case"onScroll":o!=null&&pe("scroll",e);break;case"onScrollEnd":o!=null&&pe("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Yo(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":pe("beforetoggle",e),pe("toggle",e),Se(e,"popover",o);break;case"xlinkActuate":on(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":on(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":on(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":on(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":on(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":on(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":on(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":on(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":on(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Se(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Cv.get(a)||a,Se(e,a,o))}}function Of(e,n,a,o,u,f){switch(a){case"style":Gd(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Ns(e,o):(typeof o=="number"||typeof o=="bigint")&&Ns(e,""+o);break;case"onScroll":o!=null&&pe("scroll",e);break;case"onScrollEnd":o!=null&&pe("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Gi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!te.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[gn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Se(e,a,o)}}}function yn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pe("error",e),pe("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:ze(e,n,f,S,a,null)}}u&&ze(e,n,"srcSet",a.srcSet,a,null),o&&ze(e,n,"src",a.src,a,null);return;case"input":pe("invalid",e);var b=f=S=u=null,I=null,Q=null;for(o in a)if(a.hasOwnProperty(o)){var ut=a[o];if(ut!=null)switch(o){case"name":u=ut;break;case"type":S=ut;break;case"checked":I=ut;break;case"defaultChecked":Q=ut;break;case"value":f=ut;break;case"defaultValue":b=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(s(137,n));break;default:ze(e,n,o,ut,a,null)}}_i(e,f,b,I,Q,S,u,!1);return;case"select":pe("invalid",e),o=S=f=null;for(u in a)if(a.hasOwnProperty(u)&&(b=a[u],b!=null))switch(u){case"value":f=b;break;case"defaultValue":S=b;break;case"multiple":o=b;default:ze(e,n,u,b,a,null)}n=f,a=S,e.multiple=!!o,n!=null?Hi(e,!!o,n,!1):a!=null&&Hi(e,!!o,a,!0);return;case"textarea":pe("invalid",e),f=u=o=null;for(S in a)if(a.hasOwnProperty(S)&&(b=a[S],b!=null))switch(S){case"value":o=b;break;case"defaultValue":u=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:ze(e,n,S,b,a,null)}Fd(e,o,u,f);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(o=a[I],o!=null))switch(I){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:ze(e,n,I,o,a,null)}return;case"dialog":pe("beforetoggle",e),pe("toggle",e),pe("cancel",e),pe("close",e);break;case"iframe":case"object":pe("load",e);break;case"video":case"audio":for(o=0;o<Eo.length;o++)pe(Eo[o],e);break;case"image":pe("error",e),pe("load",e);break;case"details":pe("toggle",e);break;case"embed":case"source":case"link":pe("error",e),pe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(o=a[Q],o!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:ze(e,n,Q,o,a,null)}return;default:if(Yc(n)){for(ut in a)a.hasOwnProperty(ut)&&(o=a[ut],o!==void 0&&Of(e,n,ut,o,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(o=a[b],o!=null&&ze(e,n,b,o,a,null))}function ex(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,S=null,b=null,I=null,Q=null,ut=null;for(rt in a){var mt=a[rt];if(a.hasOwnProperty(rt)&&mt!=null)switch(rt){case"checked":break;case"value":break;case"defaultValue":I=mt;default:o.hasOwnProperty(rt)||ze(e,n,rt,null,o,mt)}}for(var $ in o){var rt=o[$];if(mt=a[$],o.hasOwnProperty($)&&(rt!=null||mt!=null))switch($){case"type":f=rt;break;case"name":u=rt;break;case"checked":Q=rt;break;case"defaultChecked":ut=rt;break;case"value":S=rt;break;case"defaultValue":b=rt;break;case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(s(137,n));break;default:rt!==mt&&ze(e,n,$,rt,o,mt)}}Tn(e,S,b,I,Q,ut,f,u);return;case"select":rt=S=b=$=null;for(f in a)if(I=a[f],a.hasOwnProperty(f)&&I!=null)switch(f){case"value":break;case"multiple":rt=I;default:o.hasOwnProperty(f)||ze(e,n,f,null,o,I)}for(u in o)if(f=o[u],I=a[u],o.hasOwnProperty(u)&&(f!=null||I!=null))switch(u){case"value":$=f;break;case"defaultValue":b=f;break;case"multiple":S=f;default:f!==I&&ze(e,n,u,f,o,I)}n=b,a=S,o=rt,$!=null?Hi(e,!!a,$,!1):!!o!=!!a&&(n!=null?Hi(e,!!a,n,!0):Hi(e,!!a,a?[]:"",!1));return;case"textarea":rt=$=null;for(b in a)if(u=a[b],a.hasOwnProperty(b)&&u!=null&&!o.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:ze(e,n,b,null,o,u)}for(S in o)if(u=o[S],f=a[S],o.hasOwnProperty(S)&&(u!=null||f!=null))switch(S){case"value":$=u;break;case"defaultValue":rt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&ze(e,n,S,u,o,f)}Bd(e,$,rt);return;case"option":for(var Bt in a)if($=a[Bt],a.hasOwnProperty(Bt)&&$!=null&&!o.hasOwnProperty(Bt))switch(Bt){case"selected":e.selected=!1;break;default:ze(e,n,Bt,null,o,$)}for(I in o)if($=o[I],rt=a[I],o.hasOwnProperty(I)&&$!==rt&&($!=null||rt!=null))switch(I){case"selected":e.selected=$&&typeof $!="function"&&typeof $!="symbol";break;default:ze(e,n,I,$,o,rt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Kt in a)$=a[Kt],a.hasOwnProperty(Kt)&&$!=null&&!o.hasOwnProperty(Kt)&&ze(e,n,Kt,null,o,$);for(Q in o)if($=o[Q],rt=a[Q],o.hasOwnProperty(Q)&&$!==rt&&($!=null||rt!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(s(137,n));break;default:ze(e,n,Q,$,o,rt)}return;default:if(Yc(n)){for(var Ie in a)$=a[Ie],a.hasOwnProperty(Ie)&&$!==void 0&&!o.hasOwnProperty(Ie)&&Of(e,n,Ie,void 0,o,$);for(ut in o)$=o[ut],rt=a[ut],!o.hasOwnProperty(ut)||$===rt||$===void 0&&rt===void 0||Of(e,n,ut,$,o,rt);return}}for(var q in a)$=a[q],a.hasOwnProperty(q)&&$!=null&&!o.hasOwnProperty(q)&&ze(e,n,q,null,o,$);for(mt in o)$=o[mt],rt=a[mt],!o.hasOwnProperty(mt)||$===rt||$==null&&rt==null||ze(e,n,mt,$,o,rt)}function Vg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function nx(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,S=u.initiatorType,b=u.duration;if(f&&b&&Vg(S)){for(S=0,b=u.responseEnd,o+=1;o<a.length;o++){var I=a[o],Q=I.startTime;if(Q>b)break;var ut=I.transferSize,mt=I.initiatorType;ut&&Vg(mt)&&(I=I.responseEnd,S+=ut*(I<b?1:(b-Q)/(I-Q)))}if(--o,n+=8*(f+S)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Pf=null,zf=null;function Vl(e){return e.nodeType===9?e:e.ownerDocument}function kg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Xg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function If(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Bf=null;function ix(){var e=window.event;return e&&e.type==="popstate"?e===Bf?!1:(Bf=e,!0):(Bf=null,!1)}var Wg=typeof setTimeout=="function"?setTimeout:void 0,ax=typeof clearTimeout=="function"?clearTimeout:void 0,qg=typeof Promise=="function"?Promise:void 0,sx=typeof queueMicrotask=="function"?queueMicrotask:typeof qg<"u"?function(e){return qg.resolve(null).then(e).catch(rx)}:Wg;function rx(e){setTimeout(function(){throw e})}function Oa(e){return e==="head"}function Yg(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),ur(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")To(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,To(a);for(var f=a.firstChild;f;){var S=f.nextSibling,b=f.nodeName;f[V]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=S}}else a==="body"&&To(e.ownerDocument.body);a=u}while(a);ur(n)}function jg(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Ff(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ff(a),at(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function ox(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[V])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=li(e.nextSibling),e===null)break}return null}function lx(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=li(e.nextSibling),e===null))return null;return e}function Zg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=li(e.nextSibling),e===null))return null;return e}function Hf(e){return e.data==="$?"||e.data==="$~"}function Gf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function cx(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function li(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Vf=null;function Kg(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return li(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Qg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Jg(e,n,a){switch(n=Vl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function To(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);at(e)}var ci=new Map,$g=new Set;function kl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ia=W.d;W.d={f:ux,r:fx,D:hx,C:dx,L:px,m:mx,X:_x,S:gx,M:vx};function ux(){var e=ia.f(),n=Ol();return e||n}function fx(e){var n=k(e);n!==null&&n.tag===5&&n.type==="form"?gm(n):ia.r(e)}var or=typeof document>"u"?null:document;function t_(e,n,a){var o=or;if(o&&typeof n=="string"&&n){var u=hn(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),$g.has(u)||($g.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),yn(n,"link",e),Dt(n),o.head.appendChild(n)))}}function hx(e){ia.D(e),t_("dns-prefetch",e,null)}function dx(e,n){ia.C(e,n),t_("preconnect",e,n)}function px(e,n,a){ia.L(e,n,a);var o=or;if(o&&e&&n){var u='link[rel="preload"][as="'+hn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+hn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+hn(a.imageSizes)+'"]')):u+='[href="'+hn(e)+'"]';var f=u;switch(n){case"style":f=lr(e);break;case"script":f=cr(e)}ci.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ci.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Ao(f))||n==="script"&&o.querySelector(Ro(f))||(n=o.createElement("link"),yn(n,"link",e),Dt(n),o.head.appendChild(n)))}}function mx(e,n){ia.m(e,n);var a=or;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+hn(o)+'"][href="'+hn(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=cr(e)}if(!ci.has(f)&&(e=g({rel:"modulepreload",href:e},n),ci.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ro(f)))return}o=a.createElement("link"),yn(o,"link",e),Dt(o),a.head.appendChild(o)}}}function gx(e,n,a){ia.S(e,n,a);var o=or;if(o&&e){var u=wt(o).hoistableStyles,f=lr(e);n=n||"default";var S=u.get(f);if(!S){var b={loading:0,preload:null};if(S=o.querySelector(Ao(f)))b.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ci.get(f))&&kf(e,a);var I=S=o.createElement("link");Dt(I),yn(I,"link",e),I._p=new Promise(function(Q,ut){I.onload=Q,I.onerror=ut}),I.addEventListener("load",function(){b.loading|=1}),I.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Xl(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:b},u.set(f,S)}}}function _x(e,n){ia.X(e,n);var a=or;if(a&&e){var o=wt(a).hoistableScripts,u=cr(e),f=o.get(u);f||(f=a.querySelector(Ro(u)),f||(e=g({src:e,async:!0},n),(n=ci.get(u))&&Xf(e,n),f=a.createElement("script"),Dt(f),yn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function vx(e,n){ia.M(e,n);var a=or;if(a&&e){var o=wt(a).hoistableScripts,u=cr(e),f=o.get(u);f||(f=a.querySelector(Ro(u)),f||(e=g({src:e,async:!0,type:"module"},n),(n=ci.get(u))&&Xf(e,n),f=a.createElement("script"),Dt(f),yn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function e_(e,n,a,o){var u=(u=Mt.current)?kl(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=lr(a.href),a=wt(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=lr(a.href);var f=wt(u).hoistableStyles,S=f.get(e);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,S),(f=u.querySelector(Ao(e)))&&!f._p&&(S.instance=f,S.state.loading=5),ci.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ci.set(e,a),f||Sx(u,e,a,S.state))),n&&o===null)throw Error(s(528,""));return S}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=cr(a),a=wt(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function lr(e){return'href="'+hn(e)+'"'}function Ao(e){return'link[rel="stylesheet"]['+e+"]"}function n_(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function Sx(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),yn(n,"link",a),Dt(n),e.head.appendChild(n))}function cr(e){return'[src="'+hn(e)+'"]'}function Ro(e){return"script[async]"+e}function i_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+hn(a.href)+'"]');if(o)return n.instance=o,Dt(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Dt(o),yn(o,"style",u),Xl(o,a.precedence,e),n.instance=o;case"stylesheet":u=lr(a.href);var f=e.querySelector(Ao(u));if(f)return n.state.loading|=4,n.instance=f,Dt(f),f;o=n_(a),(u=ci.get(u))&&kf(o,u),f=(e.ownerDocument||e).createElement("link"),Dt(f);var S=f;return S._p=new Promise(function(b,I){S.onload=b,S.onerror=I}),yn(f,"link",o),n.state.loading|=4,Xl(f,a.precedence,e),n.instance=f;case"script":return f=cr(a.src),(u=e.querySelector(Ro(f)))?(n.instance=u,Dt(u),u):(o=a,(u=ci.get(f))&&(o=g({},a),Xf(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),Dt(u),yn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Xl(o,a.precedence,e));return n.instance}function Xl(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,S=0;S<o.length;S++){var b=o[S];if(b.dataset.precedence===n)f=b;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function kf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Xf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Wl=null;function a_(e,n,a){if(Wl===null){var o=new Map,u=Wl=new Map;u.set(a,o)}else u=Wl,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[V]||f[je]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=e+S;var b=o.get(S);b?b.push(f):o.set(S,[f])}}return o}function s_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function xx(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function r_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function yx(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=lr(o.href),f=n.querySelector(Ao(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=ql.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,Dt(f);return}f=n.ownerDocument||n,o=n_(o),(u=ci.get(u))&&kf(o,u),f=f.createElement("link"),Dt(f);var S=f;S._p=new Promise(function(b,I){S.onload=b,S.onerror=I}),yn(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=ql.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Wf=0;function Mx(e,n){return e.stylesheets&&e.count===0&&jl(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&jl(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Wf===0&&(Wf=62500*nx());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&jl(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Wf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function ql(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)jl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yl=null;function jl(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yl=new Map,n.forEach(Ex,e),Yl=null,ql.call(e))}function Ex(e,n){if(!(n.state.loading&4)){var a=Yl.get(e);if(a)var o=a.get(null);else{a=new Map,Yl.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var S=u[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}u=n.instance,S=u.getAttribute("data-precedence"),f=a.get(S)||o,f===o&&a.set(null,u),a.set(S,u),this.count++,o=ql.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Co={$$typeof:L,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function bx(e,n,a,o,u,f,S,b,I){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Me(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Me(0),this.hiddenUpdates=Me(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function o_(e,n,a,o,u,f,S,b,I,Q,ut,mt){return e=new bx(e,n,a,S,I,Q,ut,mt,b),n=1,f===!0&&(n|=24),f=Wn(3,null,null,n),e.current=f,f.stateNode=e,n=Eu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Ru(f),e}function l_(e){return e?(e=Hs,e):Hs}function c_(e,n,a,o,u,f){u=l_(u),o.context===null?o.context=u:o.pendingContext=u,o=Ea(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=ba(e,o,n),a!==null&&(Fn(a,e,n),so(a,e,n))}function u_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function qf(e,n){u_(e,n),(e=e.alternate)&&u_(e,n)}function f_(e){if(e.tag===13||e.tag===31){var n=as(e,67108864);n!==null&&Fn(n,e,67108864),qf(e,67108864)}}function h_(e){if(e.tag===13||e.tag===31){var n=Kn();n=$a(n);var a=as(e,n);a!==null&&Fn(a,e,n),qf(e,n)}}var Zl=!0;function Tx(e,n,a,o){var u=P.T;P.T=null;var f=W.p;try{W.p=2,Yf(e,n,a,o)}finally{W.p=f,P.T=u}}function Ax(e,n,a,o){var u=P.T;P.T=null;var f=W.p;try{W.p=8,Yf(e,n,a,o)}finally{W.p=f,P.T=u}}function Yf(e,n,a,o){if(Zl){var u=jf(o);if(u===null)Nf(e,n,o,Kl,a),p_(e,o);else if(Cx(u,e,n,a,o))o.stopPropagation();else if(p_(e,o),n&4&&-1<Rx.indexOf(e)){for(;u!==null;){var f=k(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=Ct(f.pendingLanes);if(S!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;S;){var I=1<<31-Jt(S);b.entanglements[1]|=I,S&=~I}Li(f),(Ae&6)===0&&(Ll=ft()+500,Mo(0))}}break;case 31:case 13:b=as(f,2),b!==null&&Fn(b,f,2),Ol(),qf(f,2)}if(f=jf(o),f===null&&Nf(e,n,o,Kl,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Nf(e,n,o,null,a)}}function jf(e){return e=Zc(e),Zf(e)}var Kl=null;function Zf(e){if(Kl=null,e=it(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Kl=e,null}function d_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(yt()){case pt:return 2;case Xt:return 8;case Ut:case Pt:return 32;case ge:return 268435456;default:return 32}default:return 32}}var Kf=!1,Pa=null,za=null,Ia=null,wo=new Map,Do=new Map,Ba=[],Rx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function p_(e,n){switch(e){case"focusin":case"focusout":Pa=null;break;case"dragenter":case"dragleave":za=null;break;case"mouseover":case"mouseout":Ia=null;break;case"pointerover":case"pointerout":wo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Do.delete(n.pointerId)}}function Uo(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=k(n),n!==null&&f_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Cx(e,n,a,o,u){switch(n){case"focusin":return Pa=Uo(Pa,e,n,a,o,u),!0;case"dragenter":return za=Uo(za,e,n,a,o,u),!0;case"mouseover":return Ia=Uo(Ia,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return wo.set(f,Uo(wo.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Do.set(f,Uo(Do.get(f)||null,e,n,a,o,u)),!0}return!1}function m_(e){var n=it(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,ts(e.priority,function(){h_(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,ts(e.priority,function(){h_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ql(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=jf(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);jc=o,a.target.dispatchEvent(o),jc=null}else return n=k(a),n!==null&&f_(n),e.blockedOn=a,!1;n.shift()}return!0}function g_(e,n,a){Ql(e)&&a.delete(n)}function wx(){Kf=!1,Pa!==null&&Ql(Pa)&&(Pa=null),za!==null&&Ql(za)&&(za=null),Ia!==null&&Ql(Ia)&&(Ia=null),wo.forEach(g_),Do.forEach(g_)}function Jl(e,n){e.blockedOn===n&&(e.blockedOn=null,Kf||(Kf=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,wx)))}var $l=null;function __(e){$l!==e&&($l=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){$l===e&&($l=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Zf(o||a)===null)continue;break}var f=k(a);f!==null&&(e.splice(n,3),n-=3,Yu(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function ur(e){function n(I){return Jl(I,e)}Pa!==null&&Jl(Pa,e),za!==null&&Jl(za,e),Ia!==null&&Jl(Ia,e),wo.forEach(n),Do.forEach(n);for(var a=0;a<Ba.length;a++){var o=Ba[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Ba.length&&(a=Ba[0],a.blockedOn===null);)m_(a),a.blockedOn===null&&Ba.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],S=u[gn]||null;if(typeof f=="function")S||__(a);else if(S){var b=null;if(f&&f.hasAttribute("formAction")){if(u=f,S=f[gn]||null)b=S.formAction;else if(Zf(u)!==null)continue}else b=S.action;typeof b=="function"?a[o+1]=b:(a.splice(o,3),o-=3),__(a)}}}function v_(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(S){return u=S})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Qf(e){this._internalRoot=e}tc.prototype.render=Qf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=Kn();c_(a,o,e,n,null,null)},tc.prototype.unmount=Qf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;c_(e.current,2,null,e,null,null),Ol(),n[Fi]=null}};function tc(e){this._internalRoot=e}tc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Vr();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ba.length&&n!==0&&n<Ba[a].priority;a++);Ba.splice(a,0,e),a===0&&m_(e)}};var S_=t.version;if(S_!=="19.2.5")throw Error(s(527,S_,"19.2.5"));W.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var Dx={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ec=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ec.isDisabled&&ec.supportsFiber)try{jt=ec.inject(Dx),Wt=ec}catch{}}return No.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=Am,f=Rm,S=Cm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=o_(e,1,!1,null,null,a,o,null,u,f,S,v_),e[Fi]=n.current,Lf(e),new Qf(n)},No.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",f=Am,S=Rm,b=Cm,I=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=o_(e,1,!0,n,a??null,o,u,I,f,S,b,v_),n.context=l_(null),a=n.current,o=Kn(),o=$a(o),u=Ea(o),u.callback=null,ba(a,u,o),a=o,n.current.lanes=a,mn(n,a),Li(n),e[Fi]=n.current,Lf(e),new tc(n)},No.version="19.2.5",No}var w_;function Gx(){if(w_)return th.exports;w_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),th.exports=Hx(),th.exports}var Vx=Gx();const kx=V0(Vx);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bd="170",Rr={ROTATE:0,DOLLY:1,PAN:2},Tr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Xx=0,D_=1,Wx=2,k0=1,qx=2,ua=3,Qa=0,Vn=1,Oi=2,Za=0,Cr=1,U_=2,L_=3,N_=4,Yx=5,bs=100,jx=101,Zx=102,Kx=103,Qx=104,Jx=200,$x=201,ty=202,ey=203,zh=204,Ih=205,ny=206,iy=207,ay=208,sy=209,ry=210,oy=211,ly=212,cy=213,uy=214,Bh=0,Fh=1,Hh=2,Ur=3,Gh=4,Vh=5,kh=6,Xh=7,Td=0,fy=1,hy=2,Ka=0,dy=1,py=2,my=3,gy=4,_y=5,vy=6,Sy=7,X0=300,Lr=301,Nr=302,Wh=303,qh=304,Fc=306,Yh=1e3,As=1001,jh=1002,Ri=1003,xy=1004,nc=1005,Pi=1006,ah=1007,Rs=1008,pa=1009,W0=1010,q0=1011,Vo=1012,Ad=1013,Cs=1014,fa=1015,ko=1016,Rd=1017,Cd=1018,Or=1020,Y0=35902,j0=1021,Z0=1022,Ai=1023,K0=1024,Q0=1025,wr=1026,Pr=1027,J0=1028,wd=1029,$0=1030,Dd=1031,Ud=1033,Rc=33776,Cc=33777,wc=33778,Dc=33779,Zh=35840,Kh=35841,Qh=35842,Jh=35843,$h=36196,td=37492,ed=37496,nd=37808,id=37809,ad=37810,sd=37811,rd=37812,od=37813,ld=37814,cd=37815,ud=37816,fd=37817,hd=37818,dd=37819,pd=37820,md=37821,Uc=36492,gd=36494,_d=36495,tv=36283,vd=36284,Sd=36285,xd=36286,yy=3200,My=3201,ev=0,Ey=1,ja="",hi="srgb",Ir="srgb-linear",Hc="linear",Be="srgb",fr=7680,O_=519,by=512,Ty=513,Ay=514,nv=515,Ry=516,Cy=517,wy=518,Dy=519,P_=35044,z_="300 es",ha=2e3,Oc=2001;class Us{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){if(this._listeners===void 0)return!1;const s=this._listeners;return s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){if(this._listeners===void 0)return;const l=this._listeners[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const s=this._listeners[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lc=Math.PI/180,yd=180/Math.PI;function Xo(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Rn[r&255]+Rn[r>>8&255]+Rn[r>>16&255]+Rn[r>>24&255]+"-"+Rn[t&255]+Rn[t>>8&255]+"-"+Rn[t>>16&15|64]+Rn[t>>24&255]+"-"+Rn[i&63|128]+Rn[i>>8&255]+"-"+Rn[i>>16&255]+Rn[i>>24&255]+Rn[s&255]+Rn[s>>8&255]+Rn[s>>16&255]+Rn[s>>24&255]).toLowerCase()}function Ln(r,t,i){return Math.max(t,Math.min(i,r))}function Uy(r,t){return(r%t+t)%t}function sh(r,t,i){return(1-i)*r+i*t}function Oo(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Hn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Ly={DEG2RAD:Lc};class le{constructor(t=0,i=0){le.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(t,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ln(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class oe{constructor(t,i,s,l,c,h,d,p,m){oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,p,m)}set(t,i,s,l,c,h,d,p,m){const _=this.elements;return _[0]=t,_[1]=l,_[2]=d,_[3]=i,_[4]=c,_[5]=p,_[6]=s,_[7]=h,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],p=s[6],m=s[1],_=s[4],g=s[7],x=s[2],y=s[5],E=s[8],A=l[0],M=l[3],v=l[6],O=l[1],L=l[4],D=l[7],et=l[2],H=l[5],z=l[8];return c[0]=h*A+d*O+p*et,c[3]=h*M+d*L+p*H,c[6]=h*v+d*D+p*z,c[1]=m*A+_*O+g*et,c[4]=m*M+_*L+g*H,c[7]=m*v+_*D+g*z,c[2]=x*A+y*O+E*et,c[5]=x*M+y*L+E*H,c[8]=x*v+y*D+E*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],p=t[6],m=t[7],_=t[8];return i*h*_-i*d*m-s*c*_+s*d*p+l*c*m-l*h*p}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],p=t[6],m=t[7],_=t[8],g=_*h-d*m,x=d*p-_*c,y=m*c-h*p,E=i*g+s*x+l*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return t[0]=g*A,t[1]=(l*m-_*s)*A,t[2]=(d*s-l*h)*A,t[3]=x*A,t[4]=(_*i-l*p)*A,t[5]=(l*c-d*i)*A,t[6]=y*A,t[7]=(s*p-m*i)*A,t[8]=(h*i-s*c)*A,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,d){const p=Math.cos(c),m=Math.sin(c);return this.set(s*p,s*m,-s*(p*h+m*d)+h+t,-l*m,l*p,-l*(-m*h+p*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(rh.makeScale(t,i)),this}rotate(t){return this.premultiply(rh.makeRotation(-t)),this}translate(t,i){return this.premultiply(rh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const rh=new oe;function iv(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Pc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Ny(){const r=Pc("canvas");return r.style.display="block",r}const I_={};function Ho(r){r in I_||(I_[r]=!0,console.warn(r))}function Oy(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}function Py(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function zy(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Ee={enabled:!0,workingColorSpace:Ir,spaces:{},convert:function(r,t,i){return this.enabled===!1||t===i||!t||!i||(this.spaces[t].transfer===Be&&(r.r=da(r.r),r.g=da(r.g),r.b=da(r.b)),this.spaces[t].primaries!==this.spaces[i].primaries&&(r.applyMatrix3(this.spaces[t].toXYZ),r.applyMatrix3(this.spaces[i].fromXYZ)),this.spaces[i].transfer===Be&&(r.r=Dr(r.r),r.g=Dr(r.g),r.b=Dr(r.b))),r},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ja?Hc:this.spaces[r].transfer},getLuminanceCoefficients:function(r,t=this.workingColorSpace){return r.fromArray(this.spaces[t].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,t,i){return r.copy(this.spaces[t].toXYZ).multiply(this.spaces[i].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function da(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Dr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const B_=[.64,.33,.3,.6,.15,.06],F_=[.2126,.7152,.0722],H_=[.3127,.329],G_=new oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),V_=new oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ee.define({[Ir]:{primaries:B_,whitePoint:H_,transfer:Hc,toXYZ:G_,fromXYZ:V_,luminanceCoefficients:F_,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:B_,whitePoint:H_,transfer:Be,toXYZ:G_,fromXYZ:V_,luminanceCoefficients:F_,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}});let hr;class Iy{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{hr===void 0&&(hr=Pc("canvas")),hr.width=t.width,hr.height=t.height;const s=hr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=hr}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Pc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=da(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(da(i[s]/255)*255):i[s]=da(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let By=0;class av{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:By++}),this.uuid=Xo(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(oh(l[h].image)):c.push(oh(l[h]))}else c=oh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function oh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Iy.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Fy=0;class kn extends Us{constructor(t=kn.DEFAULT_IMAGE,i=kn.DEFAULT_MAPPING,s=As,l=As,c=Pi,h=Rs,d=Ai,p=pa,m=kn.DEFAULT_ANISOTROPY,_=ja){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fy++}),this.uuid=Xo(),this.name="",this.source=new av(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==X0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Yh:t.x=t.x-Math.floor(t.x);break;case As:t.x=t.x<0?0:1;break;case jh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Yh:t.y=t.y-Math.floor(t.y);break;case As:t.y=t.y<0?0:1;break;case jh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=X0;kn.DEFAULT_ANISOTROPY=1;class Qe{constructor(t=0,i=0,s=0,l=1){Qe.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const p=t.elements,m=p[0],_=p[4],g=p[8],x=p[1],y=p[5],E=p[9],A=p[2],M=p[6],v=p[10];if(Math.abs(_-x)<.01&&Math.abs(g-A)<.01&&Math.abs(E-M)<.01){if(Math.abs(_+x)<.1&&Math.abs(g+A)<.1&&Math.abs(E+M)<.1&&Math.abs(m+y+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(m+1)/2,D=(y+1)/2,et=(v+1)/2,H=(_+x)/4,z=(g+A)/4,Y=(E+M)/4;return L>D&&L>et?L<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(L),l=H/s,c=z/s):D>et?D<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),s=H/l,c=Y/l):et<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(et),s=z/c,l=Y/c),this.set(s,l,c,i),this}let O=Math.sqrt((M-E)*(M-E)+(g-A)*(g-A)+(x-_)*(x-_));return Math.abs(O)<.001&&(O=1),this.x=(M-E)/O,this.y=(g-A)/O,this.z=(x-_)/O,this.w=Math.acos((m+y+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this.w=Math.max(t.w,Math.min(i.w,this.w)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this.w=Math.max(t,Math.min(i,this.w)),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(t,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hy extends Us{constructor(t=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new Qe(0,0,t,i),this.scissorTest=!1,this.viewport=new Qe(0,0,t,i);const l={width:t,height:i,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const c=new kn(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);c.flipY=!1,c.generateMipmaps=s.generateMipmaps,c.internalFormat=s.internalFormat,this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let s=0,l=t.textures.length;s<l;s++)this.textures[s]=t.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0;const i=Object.assign({},t.texture.image);return this.texture.source=new av(i),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ws extends Hy{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class sv extends kn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ri,this.minFilter=Ri,this.wrapR=As,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Gy extends kn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ri,this.minFilter=Ri,this.wrapR=As,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ds{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,d){let p=s[l+0],m=s[l+1],_=s[l+2],g=s[l+3];const x=c[h+0],y=c[h+1],E=c[h+2],A=c[h+3];if(d===0){t[i+0]=p,t[i+1]=m,t[i+2]=_,t[i+3]=g;return}if(d===1){t[i+0]=x,t[i+1]=y,t[i+2]=E,t[i+3]=A;return}if(g!==A||p!==x||m!==y||_!==E){let M=1-d;const v=p*x+m*y+_*E+g*A,O=v>=0?1:-1,L=1-v*v;if(L>Number.EPSILON){const et=Math.sqrt(L),H=Math.atan2(et,v*O);M=Math.sin(M*H)/et,d=Math.sin(d*H)/et}const D=d*O;if(p=p*M+x*D,m=m*M+y*D,_=_*M+E*D,g=g*M+A*D,M===1-d){const et=1/Math.sqrt(p*p+m*m+_*_+g*g);p*=et,m*=et,_*=et,g*=et}}t[i]=p,t[i+1]=m,t[i+2]=_,t[i+3]=g}static multiplyQuaternionsFlat(t,i,s,l,c,h){const d=s[l],p=s[l+1],m=s[l+2],_=s[l+3],g=c[h],x=c[h+1],y=c[h+2],E=c[h+3];return t[i]=d*E+_*g+p*y-m*x,t[i+1]=p*E+_*x+m*g-d*y,t[i+2]=m*E+_*y+d*x-p*g,t[i+3]=_*E-d*g-p*x-m*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,p=Math.sin,m=d(s/2),_=d(l/2),g=d(c/2),x=p(s/2),y=p(l/2),E=p(c/2);switch(h){case"XYZ":this._x=x*_*g+m*y*E,this._y=m*y*g-x*_*E,this._z=m*_*E+x*y*g,this._w=m*_*g-x*y*E;break;case"YXZ":this._x=x*_*g+m*y*E,this._y=m*y*g-x*_*E,this._z=m*_*E-x*y*g,this._w=m*_*g+x*y*E;break;case"ZXY":this._x=x*_*g-m*y*E,this._y=m*y*g+x*_*E,this._z=m*_*E+x*y*g,this._w=m*_*g-x*y*E;break;case"ZYX":this._x=x*_*g-m*y*E,this._y=m*y*g+x*_*E,this._z=m*_*E-x*y*g,this._w=m*_*g+x*y*E;break;case"YZX":this._x=x*_*g+m*y*E,this._y=m*y*g+x*_*E,this._z=m*_*E-x*y*g,this._w=m*_*g-x*y*E;break;case"XZY":this._x=x*_*g-m*y*E,this._y=m*y*g-x*_*E,this._z=m*_*E+x*y*g,this._w=m*_*g+x*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],p=i[9],m=i[2],_=i[6],g=i[10],x=s+d+g;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(_-p)*y,this._y=(c-m)*y,this._z=(h-l)*y}else if(s>d&&s>g){const y=2*Math.sqrt(1+s-d-g);this._w=(_-p)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(c+m)/y}else if(d>g){const y=2*Math.sqrt(1+d-s-g);this._w=(c-m)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(p+_)/y}else{const y=2*Math.sqrt(1+g-s-d);this._w=(h-l)/y,this._x=(c+m)/y,this._y=(p+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ln(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,d=i._x,p=i._y,m=i._z,_=i._w;return this._x=s*_+h*d+l*m-c*p,this._y=l*_+h*p+c*d-s*m,this._z=c*_+h*m+s*p-l*d,this._w=h*_-s*d-l*p-c*m,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,c=this._z,h=this._w;let d=h*t._w+s*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=s,this._y=l,this._z=c,this;const p=1-d*d;if(p<=Number.EPSILON){const y=1-i;return this._w=y*h+i*this._w,this._x=y*s+i*this._x,this._y=y*l+i*this._y,this._z=y*c+i*this._z,this.normalize(),this}const m=Math.sqrt(p),_=Math.atan2(m,d),g=Math.sin((1-i)*_)/m,x=Math.sin(i*_)/m;return this._w=h*g+this._w*x,this._x=s*g+this._x*x,this._y=l*g+this._y*x,this._z=c*g+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(t=0,i=0,s=0){J.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(k_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(k_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,d=t.z,p=t.w,m=2*(h*l-d*s),_=2*(d*i-c*l),g=2*(c*s-h*i);return this.x=i+p*m+h*g-d*_,this.y=s+p*_+d*m-c*g,this.z=l+p*g+c*_-h*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(t,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,d=i.y,p=i.z;return this.x=l*p-c*d,this.y=c*h-s*p,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return lh.copy(this).projectOnVector(t),this.sub(lh)}reflect(t){return this.sub(lh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ln(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const lh=new J,k_=new Ds;class Wo{constructor(t=new J(1/0,1/0,1/0),i=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(yi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(yi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=yi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,yi):yi.fromBufferAttribute(c,h),yi.applyMatrix4(t.matrixWorld),this.expandByPoint(yi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ic.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),ic.copy(s.boundingBox)),ic.applyMatrix4(t.matrixWorld),this.union(ic)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yi),yi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Po),ac.subVectors(this.max,Po),dr.subVectors(t.a,Po),pr.subVectors(t.b,Po),mr.subVectors(t.c,Po),Ha.subVectors(pr,dr),Ga.subVectors(mr,pr),_s.subVectors(dr,mr);let i=[0,-Ha.z,Ha.y,0,-Ga.z,Ga.y,0,-_s.z,_s.y,Ha.z,0,-Ha.x,Ga.z,0,-Ga.x,_s.z,0,-_s.x,-Ha.y,Ha.x,0,-Ga.y,Ga.x,0,-_s.y,_s.x,0];return!ch(i,dr,pr,mr,ac)||(i=[1,0,0,0,1,0,0,0,1],!ch(i,dr,pr,mr,ac))?!1:(sc.crossVectors(Ha,Ga),i=[sc.x,sc.y,sc.z],ch(i,dr,pr,mr,ac))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(aa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),aa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),aa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),aa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),aa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),aa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),aa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),aa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(aa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const aa=[new J,new J,new J,new J,new J,new J,new J,new J],yi=new J,ic=new Wo,dr=new J,pr=new J,mr=new J,Ha=new J,Ga=new J,_s=new J,Po=new J,ac=new J,sc=new J,vs=new J;function ch(r,t,i,s,l){for(let c=0,h=r.length-3;c<=h;c+=3){vs.fromArray(r,c);const d=l.x*Math.abs(vs.x)+l.y*Math.abs(vs.y)+l.z*Math.abs(vs.z),p=t.dot(vs),m=i.dot(vs),_=s.dot(vs);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>d)return!1}return!0}const Vy=new Wo,zo=new J,uh=new J;class Gc{constructor(t=new J,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):Vy.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zo.subVectors(t,this.center);const i=zo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(zo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(uh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zo.copy(t.center).add(uh)),this.expandByPoint(zo.copy(t.center).sub(uh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const sa=new J,fh=new J,rc=new J,Va=new J,hh=new J,oc=new J,dh=new J;class Ld{constructor(t=new J,i=new J(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,sa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=sa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(sa.copy(this.origin).addScaledVector(this.direction,i),sa.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){fh.copy(t).add(i).multiplyScalar(.5),rc.copy(i).sub(t).normalize(),Va.copy(this.origin).sub(fh);const c=t.distanceTo(i)*.5,h=-this.direction.dot(rc),d=Va.dot(this.direction),p=-Va.dot(rc),m=Va.lengthSq(),_=Math.abs(1-h*h);let g,x,y,E;if(_>0)if(g=h*p-d,x=h*d-p,E=c*_,g>=0)if(x>=-E)if(x<=E){const A=1/_;g*=A,x*=A,y=g*(g+h*x+2*d)+x*(h*g+x+2*p)+m}else x=c,g=Math.max(0,-(h*x+d)),y=-g*g+x*(x+2*p)+m;else x=-c,g=Math.max(0,-(h*x+d)),y=-g*g+x*(x+2*p)+m;else x<=-E?(g=Math.max(0,-(-h*c+d)),x=g>0?-c:Math.min(Math.max(-c,-p),c),y=-g*g+x*(x+2*p)+m):x<=E?(g=0,x=Math.min(Math.max(-c,-p),c),y=x*(x+2*p)+m):(g=Math.max(0,-(h*c+d)),x=g>0?c:Math.min(Math.max(-c,-p),c),y=-g*g+x*(x+2*p)+m);else x=h>0?-c:c,g=Math.max(0,-(h*x+d)),y=-g*g+x*(x+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(fh).addScaledVector(rc,x),y}intersectSphere(t,i){sa.subVectors(t.center,this.origin);const s=sa.dot(this.direction),l=sa.dot(sa)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,p=s+h;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,d,p;const m=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,x=this.origin;return m>=0?(s=(t.min.x-x.x)*m,l=(t.max.x-x.x)*m):(s=(t.max.x-x.x)*m,l=(t.min.x-x.x)*m),_>=0?(c=(t.min.y-x.y)*_,h=(t.max.y-x.y)*_):(c=(t.max.y-x.y)*_,h=(t.min.y-x.y)*_),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),g>=0?(d=(t.min.z-x.z)*g,p=(t.max.z-x.z)*g):(d=(t.max.z-x.z)*g,p=(t.min.z-x.z)*g),s>p||d>l)||((d>s||s!==s)&&(s=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,sa)!==null}intersectTriangle(t,i,s,l,c){hh.subVectors(i,t),oc.subVectors(s,t),dh.crossVectors(hh,oc);let h=this.direction.dot(dh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Va.subVectors(this.origin,t);const p=d*this.direction.dot(oc.crossVectors(Va,oc));if(p<0)return null;const m=d*this.direction.dot(hh.cross(Va));if(m<0||p+m>h)return null;const _=-d*Va.dot(dh);return _<0?null:this.at(_/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ye{constructor(t,i,s,l,c,h,d,p,m,_,g,x,y,E,A,M){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,p,m,_,g,x,y,E,A,M)}set(t,i,s,l,c,h,d,p,m,_,g,x,y,E,A,M){const v=this.elements;return v[0]=t,v[4]=i,v[8]=s,v[12]=l,v[1]=c,v[5]=h,v[9]=d,v[13]=p,v[2]=m,v[6]=_,v[10]=g,v[14]=x,v[3]=y,v[7]=E,v[11]=A,v[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/gr.setFromMatrixColumn(t,0).length(),c=1/gr.setFromMatrixColumn(t,1).length(),h=1/gr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),d=Math.sin(s),p=Math.cos(l),m=Math.sin(l),_=Math.cos(c),g=Math.sin(c);if(t.order==="XYZ"){const x=h*_,y=h*g,E=d*_,A=d*g;i[0]=p*_,i[4]=-p*g,i[8]=m,i[1]=y+E*m,i[5]=x-A*m,i[9]=-d*p,i[2]=A-x*m,i[6]=E+y*m,i[10]=h*p}else if(t.order==="YXZ"){const x=p*_,y=p*g,E=m*_,A=m*g;i[0]=x+A*d,i[4]=E*d-y,i[8]=h*m,i[1]=h*g,i[5]=h*_,i[9]=-d,i[2]=y*d-E,i[6]=A+x*d,i[10]=h*p}else if(t.order==="ZXY"){const x=p*_,y=p*g,E=m*_,A=m*g;i[0]=x-A*d,i[4]=-h*g,i[8]=E+y*d,i[1]=y+E*d,i[5]=h*_,i[9]=A-x*d,i[2]=-h*m,i[6]=d,i[10]=h*p}else if(t.order==="ZYX"){const x=h*_,y=h*g,E=d*_,A=d*g;i[0]=p*_,i[4]=E*m-y,i[8]=x*m+A,i[1]=p*g,i[5]=A*m+x,i[9]=y*m-E,i[2]=-m,i[6]=d*p,i[10]=h*p}else if(t.order==="YZX"){const x=h*p,y=h*m,E=d*p,A=d*m;i[0]=p*_,i[4]=A-x*g,i[8]=E*g+y,i[1]=g,i[5]=h*_,i[9]=-d*_,i[2]=-m*_,i[6]=y*g+E,i[10]=x-A*g}else if(t.order==="XZY"){const x=h*p,y=h*m,E=d*p,A=d*m;i[0]=p*_,i[4]=-g,i[8]=m*_,i[1]=x*g+A,i[5]=h*_,i[9]=y*g-E,i[2]=E*g-y,i[6]=d*_,i[10]=A*g+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ky,t,Xy)}lookAt(t,i,s){const l=this.elements;return Qn.subVectors(t,i),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),ka.crossVectors(s,Qn),ka.lengthSq()===0&&(Math.abs(s.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),ka.crossVectors(s,Qn)),ka.normalize(),lc.crossVectors(Qn,ka),l[0]=ka.x,l[4]=lc.x,l[8]=Qn.x,l[1]=ka.y,l[5]=lc.y,l[9]=Qn.y,l[2]=ka.z,l[6]=lc.z,l[10]=Qn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],p=s[8],m=s[12],_=s[1],g=s[5],x=s[9],y=s[13],E=s[2],A=s[6],M=s[10],v=s[14],O=s[3],L=s[7],D=s[11],et=s[15],H=l[0],z=l[4],Y=l[8],w=l[12],C=l[1],B=l[5],ot=l[9],st=l[13],gt=l[2],dt=l[6],P=l[10],W=l[14],Z=l[3],xt=l[7],bt=l[11],N=l[15];return c[0]=h*H+d*C+p*gt+m*Z,c[4]=h*z+d*B+p*dt+m*xt,c[8]=h*Y+d*ot+p*P+m*bt,c[12]=h*w+d*st+p*W+m*N,c[1]=_*H+g*C+x*gt+y*Z,c[5]=_*z+g*B+x*dt+y*xt,c[9]=_*Y+g*ot+x*P+y*bt,c[13]=_*w+g*st+x*W+y*N,c[2]=E*H+A*C+M*gt+v*Z,c[6]=E*z+A*B+M*dt+v*xt,c[10]=E*Y+A*ot+M*P+v*bt,c[14]=E*w+A*st+M*W+v*N,c[3]=O*H+L*C+D*gt+et*Z,c[7]=O*z+L*B+D*dt+et*xt,c[11]=O*Y+L*ot+D*P+et*bt,c[15]=O*w+L*st+D*W+et*N,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],d=t[5],p=t[9],m=t[13],_=t[2],g=t[6],x=t[10],y=t[14],E=t[3],A=t[7],M=t[11],v=t[15];return E*(+c*p*g-l*m*g-c*d*x+s*m*x+l*d*y-s*p*y)+A*(+i*p*y-i*m*x+c*h*x-l*h*y+l*m*_-c*p*_)+M*(+i*m*g-i*d*y-c*h*g+s*h*y+c*d*_-s*m*_)+v*(-l*d*_-i*p*g+i*d*x+l*h*g-s*h*x+s*p*_)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],p=t[6],m=t[7],_=t[8],g=t[9],x=t[10],y=t[11],E=t[12],A=t[13],M=t[14],v=t[15],O=g*M*m-A*x*m+A*p*y-d*M*y-g*p*v+d*x*v,L=E*x*m-_*M*m-E*p*y+h*M*y+_*p*v-h*x*v,D=_*A*m-E*g*m+E*d*y-h*A*y-_*d*v+h*g*v,et=E*g*p-_*A*p-E*d*x+h*A*x+_*d*M-h*g*M,H=i*O+s*L+l*D+c*et;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/H;return t[0]=O*z,t[1]=(A*x*c-g*M*c-A*l*y+s*M*y+g*l*v-s*x*v)*z,t[2]=(d*M*c-A*p*c+A*l*m-s*M*m-d*l*v+s*p*v)*z,t[3]=(g*p*c-d*x*c-g*l*m+s*x*m+d*l*y-s*p*y)*z,t[4]=L*z,t[5]=(_*M*c-E*x*c+E*l*y-i*M*y-_*l*v+i*x*v)*z,t[6]=(E*p*c-h*M*c-E*l*m+i*M*m+h*l*v-i*p*v)*z,t[7]=(h*x*c-_*p*c+_*l*m-i*x*m-h*l*y+i*p*y)*z,t[8]=D*z,t[9]=(E*g*c-_*A*c-E*s*y+i*A*y+_*s*v-i*g*v)*z,t[10]=(h*A*c-E*d*c+E*s*m-i*A*m-h*s*v+i*d*v)*z,t[11]=(_*d*c-h*g*c-_*s*m+i*g*m+h*s*y-i*d*y)*z,t[12]=et*z,t[13]=(_*A*l-E*g*l+E*s*x-i*A*x-_*s*M+i*g*M)*z,t[14]=(E*d*l-h*A*l-E*s*p+i*A*p+h*s*M-i*d*M)*z,t[15]=(h*g*l-_*d*l+_*s*p-i*g*p-h*s*x+i*d*x)*z,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,d=t.y,p=t.z,m=c*h,_=c*d;return this.set(m*h+s,m*d-l*p,m*p+l*d,0,m*d+l*p,_*d+s,_*p-l*h,0,m*p-l*d,_*p+l*h,c*p*p+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,p=i._w,m=c+c,_=h+h,g=d+d,x=c*m,y=c*_,E=c*g,A=h*_,M=h*g,v=d*g,O=p*m,L=p*_,D=p*g,et=s.x,H=s.y,z=s.z;return l[0]=(1-(A+v))*et,l[1]=(y+D)*et,l[2]=(E-L)*et,l[3]=0,l[4]=(y-D)*H,l[5]=(1-(x+v))*H,l[6]=(M+O)*H,l[7]=0,l[8]=(E+L)*z,l[9]=(M-O)*z,l[10]=(1-(x+A))*z,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let c=gr.set(l[0],l[1],l[2]).length();const h=gr.set(l[4],l[5],l[6]).length(),d=gr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],Mi.copy(this);const m=1/c,_=1/h,g=1/d;return Mi.elements[0]*=m,Mi.elements[1]*=m,Mi.elements[2]*=m,Mi.elements[4]*=_,Mi.elements[5]*=_,Mi.elements[6]*=_,Mi.elements[8]*=g,Mi.elements[9]*=g,Mi.elements[10]*=g,i.setFromRotationMatrix(Mi),s.x=c,s.y=h,s.z=d,this}makePerspective(t,i,s,l,c,h,d=ha){const p=this.elements,m=2*c/(i-t),_=2*c/(s-l),g=(i+t)/(i-t),x=(s+l)/(s-l);let y,E;if(d===ha)y=-(h+c)/(h-c),E=-2*h*c/(h-c);else if(d===Oc)y=-h/(h-c),E=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=_,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=y,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,h,d=ha){const p=this.elements,m=1/(i-t),_=1/(s-l),g=1/(h-c),x=(i+t)*m,y=(s+l)*_;let E,A;if(d===ha)E=(h+c)*g,A=-2*g;else if(d===Oc)E=c*g,A=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*_,p[9]=0,p[13]=-y,p[2]=0,p[6]=0,p[10]=A,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const gr=new J,Mi=new Ye,ky=new J(0,0,0),Xy=new J(1,1,1),ka=new J,lc=new J,Qn=new J,X_=new Ye,W_=new Ds;class Bi{constructor(t=0,i=0,s=0,l=Bi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],p=l[1],m=l[5],_=l[9],g=l[2],x=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Ln(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Ln(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ln(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-h,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Ln(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-h,m));break;case"YZX":this._z=Math.asin(Ln(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-Ln(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return X_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(X_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return W_.setFromEuler(this),this.setFromQuaternion(W_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bi.DEFAULT_ORDER="XYZ";class rv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Wy=0;const q_=new J,_r=new Ds,ra=new Ye,cc=new J,Io=new J,qy=new J,Yy=new Ds,Y_=new J(1,0,0),j_=new J(0,1,0),Z_=new J(0,0,1),K_={type:"added"},jy={type:"removed"},vr={type:"childadded",child:null},ph={type:"childremoved",child:null};class Mn extends Us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wy++}),this.uuid=Xo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mn.DEFAULT_UP.clone();const t=new J,i=new Bi,s=new Ds,l=new J(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ye},normalMatrix:{value:new oe}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=Mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return _r.setFromAxisAngle(t,i),this.quaternion.multiply(_r),this}rotateOnWorldAxis(t,i){return _r.setFromAxisAngle(t,i),this.quaternion.premultiply(_r),this}rotateX(t){return this.rotateOnAxis(Y_,t)}rotateY(t){return this.rotateOnAxis(j_,t)}rotateZ(t){return this.rotateOnAxis(Z_,t)}translateOnAxis(t,i){return q_.copy(t).applyQuaternion(this.quaternion),this.position.add(q_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Y_,t)}translateY(t){return this.translateOnAxis(j_,t)}translateZ(t){return this.translateOnAxis(Z_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ra.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?cc.copy(t):cc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ra.lookAt(Io,cc,this.up):ra.lookAt(cc,Io,this.up),this.quaternion.setFromRotationMatrix(ra),l&&(ra.extractRotation(l.matrixWorld),_r.setFromRotationMatrix(ra),this.quaternion.premultiply(_r.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(K_),vr.child=t,this.dispatchEvent(vr),vr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(jy),ph.child=t,this.dispatchEvent(ph),ph.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ra.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ra.multiply(t.parent.matrixWorld)),t.applyMatrix4(ra),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(K_),vr.child=t,this.dispatchEvent(vr),vr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,t,qy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,Yy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const g=p[m];c(t.shapes,g)}else c(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(c(t.materials,this.material[p]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(c(t.animations,p))}}if(i){const d=h(t.geometries),p=h(t.materials),m=h(t.textures),_=h(t.images),g=h(t.shapes),x=h(t.skeletons),y=h(t.animations),E=h(t.nodes);d.length>0&&(s.geometries=d),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),_.length>0&&(s.images=_),g.length>0&&(s.shapes=g),x.length>0&&(s.skeletons=x),y.length>0&&(s.animations=y),E.length>0&&(s.nodes=E)}return s.object=l,s;function h(d){const p=[];for(const m in d){const _=d[m];delete _.metadata,p.push(_)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Mn.DEFAULT_UP=new J(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ei=new J,oa=new J,mh=new J,la=new J,Sr=new J,xr=new J,Q_=new J,gh=new J,_h=new J,vh=new J,Sh=new Qe,xh=new Qe,yh=new Qe;class Ti{constructor(t=new J,i=new J,s=new J){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ei.subVectors(t,i),l.cross(Ei);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Ei.subVectors(l,i),oa.subVectors(s,i),mh.subVectors(t,i);const h=Ei.dot(Ei),d=Ei.dot(oa),p=Ei.dot(mh),m=oa.dot(oa),_=oa.dot(mh),g=h*m-d*d;if(g===0)return c.set(0,0,0),null;const x=1/g,y=(m*p-d*_)*x,E=(h*_-d*p)*x;return c.set(1-y-E,E,y)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,la)===null?!1:la.x>=0&&la.y>=0&&la.x+la.y<=1}static getInterpolation(t,i,s,l,c,h,d,p){return this.getBarycoord(t,i,s,l,la)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,la.x),p.addScaledVector(h,la.y),p.addScaledVector(d,la.z),p)}static getInterpolatedAttribute(t,i,s,l,c,h){return Sh.setScalar(0),xh.setScalar(0),yh.setScalar(0),Sh.fromBufferAttribute(t,i),xh.fromBufferAttribute(t,s),yh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Sh,c.x),h.addScaledVector(xh,c.y),h.addScaledVector(yh,c.z),h}static isFrontFacing(t,i,s,l){return Ei.subVectors(s,i),oa.subVectors(t,i),Ei.cross(oa).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ei.subVectors(this.c,this.b),oa.subVectors(this.a,this.b),Ei.cross(oa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ti.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ti.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Ti.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Ti.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ti.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,d;Sr.subVectors(l,s),xr.subVectors(c,s),gh.subVectors(t,s);const p=Sr.dot(gh),m=xr.dot(gh);if(p<=0&&m<=0)return i.copy(s);_h.subVectors(t,l);const _=Sr.dot(_h),g=xr.dot(_h);if(_>=0&&g<=_)return i.copy(l);const x=p*g-_*m;if(x<=0&&p>=0&&_<=0)return h=p/(p-_),i.copy(s).addScaledVector(Sr,h);vh.subVectors(t,c);const y=Sr.dot(vh),E=xr.dot(vh);if(E>=0&&y<=E)return i.copy(c);const A=y*m-p*E;if(A<=0&&m>=0&&E<=0)return d=m/(m-E),i.copy(s).addScaledVector(xr,d);const M=_*E-y*g;if(M<=0&&g-_>=0&&y-E>=0)return Q_.subVectors(c,l),d=(g-_)/(g-_+(y-E)),i.copy(l).addScaledVector(Q_,d);const v=1/(M+A+x);return h=A*v,d=x*v,i.copy(s).addScaledVector(Sr,h).addScaledVector(xr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ov={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xa={h:0,s:0,l:0},uc={h:0,s:0,l:0};function Mh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class fe{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=hi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ee.toWorkingColorSpace(this,i),this}setRGB(t,i,s,l=Ee.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ee.toWorkingColorSpace(this,l),this}setHSL(t,i,s,l=Ee.workingColorSpace){if(t=Uy(t,1),i=Ln(i,0,1),s=Ln(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=Mh(h,c,t+1/3),this.g=Mh(h,c,t),this.b=Mh(h,c,t-1/3)}return Ee.toWorkingColorSpace(this,l),this}setStyle(t,i=hi){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=hi){const s=ov[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=da(t.r),this.g=da(t.g),this.b=da(t.b),this}copyLinearToSRGB(t){return this.r=Dr(t.r),this.g=Dr(t.g),this.b=Dr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hi){return Ee.fromWorkingColorSpace(Cn.copy(this),t),Math.round(Ln(Cn.r*255,0,255))*65536+Math.round(Ln(Cn.g*255,0,255))*256+Math.round(Ln(Cn.b*255,0,255))}getHexString(t=hi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ee.workingColorSpace){Ee.fromWorkingColorSpace(Cn.copy(this),i);const s=Cn.r,l=Cn.g,c=Cn.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let p,m;const _=(d+h)/2;if(d===h)p=0,m=0;else{const g=h-d;switch(m=_<=.5?g/(h+d):g/(2-h-d),h){case s:p=(l-c)/g+(l<c?6:0);break;case l:p=(c-s)/g+2;break;case c:p=(s-l)/g+4;break}p/=6}return t.h=p,t.s=m,t.l=_,t}getRGB(t,i=Ee.workingColorSpace){return Ee.fromWorkingColorSpace(Cn.copy(this),i),t.r=Cn.r,t.g=Cn.g,t.b=Cn.b,t}getStyle(t=hi){Ee.fromWorkingColorSpace(Cn.copy(this),t);const i=Cn.r,s=Cn.g,l=Cn.b;return t!==hi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Xa),this.setHSL(Xa.h+t,Xa.s+i,Xa.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Xa),t.getHSL(uc);const s=sh(Xa.h,uc.h,i),l=sh(Xa.s,uc.s,i),c=sh(Xa.l,uc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new fe;fe.NAMES=ov;let Zy=0;class Br extends Us{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zy++}),this.uuid=Xo(),this.name="",this.blending=Cr,this.side=Qa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zh,this.blendDst=Ih,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fe(0,0,0),this.blendAlpha=0,this.depthFunc=Ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=O_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fr,this.stencilZFail=fr,this.stencilZPass=fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Cr&&(s.blending=this.blending),this.side!==Qa&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==zh&&(s.blendSrc=this.blendSrc),this.blendDst!==Ih&&(s.blendDst=this.blendDst),this.blendEquation!==bs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Ur&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==O_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==fr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==fr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const p=c[d];delete p.metadata,h.push(p)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class lv extends Br{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=Td,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const sn=new J,fc=new le;class Ii{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=P_,this.updateRanges=[],this.gpuType=fa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)fc.fromBufferAttribute(this,i),fc.applyMatrix3(t),this.setXY(i,fc.x,fc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)sn.fromBufferAttribute(this,i),sn.applyMatrix3(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)sn.fromBufferAttribute(this,i),sn.applyMatrix4(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)sn.fromBufferAttribute(this,i),sn.applyNormalMatrix(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)sn.fromBufferAttribute(this,i),sn.transformDirection(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Oo(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Hn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Oo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Oo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Oo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Oo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Hn(i,this.array),s=Hn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Hn(i,this.array),s=Hn(s,this.array),l=Hn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Hn(i,this.array),s=Hn(s,this.array),l=Hn(l,this.array),c=Hn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==P_&&(t.usage=this.usage),t}}class cv extends Ii{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class uv extends Ii{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class wn extends Ii{constructor(t,i,s){super(new Float32Array(t),i,s)}}let Ky=0;const ui=new Ye,Eh=new Mn,yr=new J,Jn=new Wo,Bo=new Wo,pn=new J;class pi extends Us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ky++}),this.uuid=Xo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(iv(t)?uv:cv)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new oe().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ui.makeRotationFromQuaternion(t),this.applyMatrix4(ui),this}rotateX(t){return ui.makeRotationX(t),this.applyMatrix4(ui),this}rotateY(t){return ui.makeRotationY(t),this.applyMatrix4(ui),this}rotateZ(t){return ui.makeRotationZ(t),this.applyMatrix4(ui),this}translate(t,i,s){return ui.makeTranslation(t,i,s),this.applyMatrix4(ui),this}scale(t,i,s){return ui.makeScale(t,i,s),this.applyMatrix4(ui),this}lookAt(t){return Eh.lookAt(t),Eh.updateMatrix(),this.applyMatrix4(Eh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yr).negate(),this.translate(yr.x,yr.y,yr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new wn(s,3))}else{for(let s=0,l=i.count;s<l;s++){const c=t[s];i.setXYZ(s,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];Jn.setFromBufferAttribute(c),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(t){const s=this.boundingSphere.center;if(Jn.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Bo.setFromBufferAttribute(d),this.morphTargetsRelative?(pn.addVectors(Jn.min,Bo.min),Jn.expandByPoint(pn),pn.addVectors(Jn.max,Bo.max),Jn.expandByPoint(pn)):(Jn.expandByPoint(Bo.min),Jn.expandByPoint(Bo.max))}Jn.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)pn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(pn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],p=this.morphTargetsRelative;for(let m=0,_=d.count;m<_;m++)pn.fromBufferAttribute(d,m),p&&(yr.fromBufferAttribute(t,m),pn.add(yr)),l=Math.max(l,s.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ii(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],p=[];for(let Y=0;Y<s.count;Y++)d[Y]=new J,p[Y]=new J;const m=new J,_=new J,g=new J,x=new le,y=new le,E=new le,A=new J,M=new J;function v(Y,w,C){m.fromBufferAttribute(s,Y),_.fromBufferAttribute(s,w),g.fromBufferAttribute(s,C),x.fromBufferAttribute(c,Y),y.fromBufferAttribute(c,w),E.fromBufferAttribute(c,C),_.sub(m),g.sub(m),y.sub(x),E.sub(x);const B=1/(y.x*E.y-E.x*y.y);isFinite(B)&&(A.copy(_).multiplyScalar(E.y).addScaledVector(g,-y.y).multiplyScalar(B),M.copy(g).multiplyScalar(y.x).addScaledVector(_,-E.x).multiplyScalar(B),d[Y].add(A),d[w].add(A),d[C].add(A),p[Y].add(M),p[w].add(M),p[C].add(M))}let O=this.groups;O.length===0&&(O=[{start:0,count:t.count}]);for(let Y=0,w=O.length;Y<w;++Y){const C=O[Y],B=C.start,ot=C.count;for(let st=B,gt=B+ot;st<gt;st+=3)v(t.getX(st+0),t.getX(st+1),t.getX(st+2))}const L=new J,D=new J,et=new J,H=new J;function z(Y){et.fromBufferAttribute(l,Y),H.copy(et);const w=d[Y];L.copy(w),L.sub(et.multiplyScalar(et.dot(w))).normalize(),D.crossVectors(H,w);const B=D.dot(p[Y])<0?-1:1;h.setXYZW(Y,L.x,L.y,L.z,B)}for(let Y=0,w=O.length;Y<w;++Y){const C=O[Y],B=C.start,ot=C.count;for(let st=B,gt=B+ot;st<gt;st+=3)z(t.getX(st+0)),z(t.getX(st+1)),z(t.getX(st+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ii(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,y=s.count;x<y;x++)s.setXYZ(x,0,0,0);const l=new J,c=new J,h=new J,d=new J,p=new J,m=new J,_=new J,g=new J;if(t)for(let x=0,y=t.count;x<y;x+=3){const E=t.getX(x+0),A=t.getX(x+1),M=t.getX(x+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,A),h.fromBufferAttribute(i,M),_.subVectors(h,c),g.subVectors(l,c),_.cross(g),d.fromBufferAttribute(s,E),p.fromBufferAttribute(s,A),m.fromBufferAttribute(s,M),d.add(_),p.add(_),m.add(_),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(A,p.x,p.y,p.z),s.setXYZ(M,m.x,m.y,m.z)}else for(let x=0,y=i.count;x<y;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),_.subVectors(h,c),g.subVectors(l,c),_.cross(g),s.setXYZ(x+0,_.x,_.y,_.z),s.setXYZ(x+1,_.x,_.y,_.z),s.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)pn.fromBufferAttribute(t,i),pn.normalize(),t.setXYZ(i,pn.x,pn.y,pn.z)}toNonIndexed(){function t(d,p){const m=d.array,_=d.itemSize,g=d.normalized,x=new m.constructor(p.length*_);let y=0,E=0;for(let A=0,M=p.length;A<M;A++){d.isInterleavedBufferAttribute?y=p[A]*d.data.stride+d.offset:y=p[A]*_;for(let v=0;v<_;v++)x[E++]=m[y++]}return new Ii(x,_,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new pi,s=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=t(p,s);i.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const p=[],m=c[d];for(let _=0,g=m.length;_<g;_++){const x=m[_],y=t(x,s);p.push(y)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const m=h[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const m=s[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let g=0,x=m.length;g<x;g++){const y=m[g];_.push(y.toJSON(t.data))}_.length>0&&(l[p]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone(i));const l=t.attributes;for(const m in l){const _=l[m];this.setAttribute(m,_.clone(i))}const c=t.morphAttributes;for(const m in c){const _=[],g=c[m];for(let x=0,y=g.length;x<y;x++)_.push(g[x].clone(i));this.morphAttributes[m]=_}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let m=0,_=h.length;m<_;m++){const g=h[m];this.addGroup(g.start,g.count,g.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const J_=new Ye,Ss=new Ld,hc=new Gc,$_=new J,dc=new J,pc=new J,mc=new J,bh=new J,gc=new J,t0=new J,_c=new J;class zi extends Mn{constructor(t=new pi,i=new lv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){gc.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const _=d[p],g=c[p];_!==0&&(bh.fromBufferAttribute(g,t),h?gc.addScaledVector(bh,_):gc.addScaledVector(bh.sub(i),_))}i.add(gc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),hc.copy(s.boundingSphere),hc.applyMatrix4(c),Ss.copy(t.ray).recast(t.near),!(hc.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(hc,$_)===null||Ss.origin.distanceToSquared($_)>(t.far-t.near)**2))&&(J_.copy(c).invert(),Ss.copy(t.ray).applyMatrix4(J_),!(s.boundingBox!==null&&Ss.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Ss)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,d=c.index,p=c.attributes.position,m=c.attributes.uv,_=c.attributes.uv1,g=c.attributes.normal,x=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,A=x.length;E<A;E++){const M=x[E],v=h[M.materialIndex],O=Math.max(M.start,y.start),L=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let D=O,et=L;D<et;D+=3){const H=d.getX(D),z=d.getX(D+1),Y=d.getX(D+2);l=vc(this,v,t,s,m,_,g,H,z,Y),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),A=Math.min(d.count,y.start+y.count);for(let M=E,v=A;M<v;M+=3){const O=d.getX(M),L=d.getX(M+1),D=d.getX(M+2);l=vc(this,h,t,s,m,_,g,O,L,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(h))for(let E=0,A=x.length;E<A;E++){const M=x[E],v=h[M.materialIndex],O=Math.max(M.start,y.start),L=Math.min(p.count,Math.min(M.start+M.count,y.start+y.count));for(let D=O,et=L;D<et;D+=3){const H=D,z=D+1,Y=D+2;l=vc(this,v,t,s,m,_,g,H,z,Y),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),A=Math.min(p.count,y.start+y.count);for(let M=E,v=A;M<v;M+=3){const O=M,L=M+1,D=M+2;l=vc(this,h,t,s,m,_,g,O,L,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function Qy(r,t,i,s,l,c,h,d){let p;if(t.side===Vn?p=s.intersectTriangle(h,c,l,!0,d):p=s.intersectTriangle(l,c,h,t.side===Qa,d),p===null)return null;_c.copy(d),_c.applyMatrix4(r.matrixWorld);const m=i.ray.origin.distanceTo(_c);return m<i.near||m>i.far?null:{distance:m,point:_c.clone(),object:r}}function vc(r,t,i,s,l,c,h,d,p,m){r.getVertexPosition(d,dc),r.getVertexPosition(p,pc),r.getVertexPosition(m,mc);const _=Qy(r,t,i,s,dc,pc,mc,t0);if(_){const g=new J;Ti.getBarycoord(t0,dc,pc,mc,g),l&&(_.uv=Ti.getInterpolatedAttribute(l,d,p,m,g,new le)),c&&(_.uv1=Ti.getInterpolatedAttribute(c,d,p,m,g,new le)),h&&(_.normal=Ti.getInterpolatedAttribute(h,d,p,m,g,new J),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const x={a:d,b:p,c:m,normal:new J,materialIndex:0};Ti.getNormal(dc,pc,mc,x.normal),_.face=x,_.barycoord=g}return _}class qo extends pi{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const p=[],m=[],_=[],g=[];let x=0,y=0;E("z","y","x",-1,-1,s,i,t,h,c,0),E("z","y","x",1,-1,s,i,-t,h,c,1),E("x","z","y",1,1,t,s,i,l,h,2),E("x","z","y",1,-1,t,s,-i,l,h,3),E("x","y","z",1,-1,t,i,s,l,c,4),E("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(p),this.setAttribute("position",new wn(m,3)),this.setAttribute("normal",new wn(_,3)),this.setAttribute("uv",new wn(g,2));function E(A,M,v,O,L,D,et,H,z,Y,w){const C=D/z,B=et/Y,ot=D/2,st=et/2,gt=H/2,dt=z+1,P=Y+1;let W=0,Z=0;const xt=new J;for(let bt=0;bt<P;bt++){const N=bt*B-st;for(let nt=0;nt<dt;nt++){const St=nt*C-ot;xt[A]=St*O,xt[M]=N*L,xt[v]=gt,m.push(xt.x,xt.y,xt.z),xt[A]=0,xt[M]=0,xt[v]=H>0?1:-1,_.push(xt.x,xt.y,xt.z),g.push(nt/z),g.push(1-bt/Y),W+=1}}for(let bt=0;bt<Y;bt++)for(let N=0;N<z;N++){const nt=x+N+dt*bt,St=x+N+dt*(bt+1),j=x+(N+1)+dt*(bt+1),ct=x+(N+1)+dt*bt;p.push(nt,St,ct),p.push(St,j,ct),Z+=6}d.addGroup(y,Z,w),y+=Z,x+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function zr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Un(r){const t={};for(let i=0;i<r.length;i++){const s=zr(r[i]);for(const l in s)t[l]=s[l]}return t}function Jy(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function fv(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ee.workingColorSpace}const $y={clone:zr,merge:Un};var tM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ja extends Br{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tM,this.fragmentShader=eM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=zr(t.uniforms),this.uniformsGroups=Jy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class hv extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=ha}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wa=new J,e0=new le,n0=new le;class di extends hv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=yd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Lc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return yd*2*Math.atan(Math.tan(Lc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Wa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wa.x,Wa.y).multiplyScalar(-t/Wa.z),Wa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Wa.x,Wa.y).multiplyScalar(-t/Wa.z)}getViewSize(t,i){return this.getViewBounds(t,e0,n0),i.subVectors(n0,e0)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Lc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,m=h.fullHeight;c+=h.offsetX*l/p,i-=h.offsetY*s/m,l*=h.width/p,s*=h.height/m}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Mr=-90,Er=1;class nM extends Mn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new di(Mr,Er,t,i);l.layers=this.layers,this.add(l);const c=new di(Mr,Er,t,i);c.layers=this.layers,this.add(c);const h=new di(Mr,Er,t,i);h.layers=this.layers,this.add(h);const d=new di(Mr,Er,t,i);d.layers=this.layers,this.add(d);const p=new di(Mr,Er,t,i);p.layers=this.layers,this.add(p);const m=new di(Mr,Er,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,p]=i;for(const m of i)this.remove(m);if(t===ha)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Oc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,p,m,_]=this.children,g=t.getRenderTarget(),x=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const A=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,p),t.setRenderTarget(s,4,l),t.render(i,m),s.texture.generateMipmaps=A,t.setRenderTarget(s,5,l),t.render(i,_),t.setRenderTarget(g,x,y),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class dv extends kn{constructor(t,i,s,l,c,h,d,p,m,_){t=t!==void 0?t:[],i=i!==void 0?i:Lr,super(t,i,s,l,c,h,d,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class iM extends ws{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new dv(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Pi}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new qo(5,5,5),c=new Ja({name:"CubemapFromEquirect",uniforms:zr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Vn,blending:Za});c.uniforms.tEquirect.value=i;const h=new zi(l,c),d=i.minFilter;return i.minFilter===Rs&&(i.minFilter=Pi),new nM(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i,s,l){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}const Th=new J,aM=new J,sM=new oe;class Ya{constructor(t=new J(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Th.subVectors(s,i).cross(aM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Th),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||sM.getNormalMatrix(t),l=this.coplanarPoint(Th).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xs=new Gc,Sc=new J;class Nd{constructor(t=new Ya,i=new Ya,s=new Ya,l=new Ya,c=new Ya,h=new Ya){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=ha){const s=this.planes,l=t.elements,c=l[0],h=l[1],d=l[2],p=l[3],m=l[4],_=l[5],g=l[6],x=l[7],y=l[8],E=l[9],A=l[10],M=l[11],v=l[12],O=l[13],L=l[14],D=l[15];if(s[0].setComponents(p-c,x-m,M-y,D-v).normalize(),s[1].setComponents(p+c,x+m,M+y,D+v).normalize(),s[2].setComponents(p+h,x+_,M+E,D+O).normalize(),s[3].setComponents(p-h,x-_,M-E,D-O).normalize(),s[4].setComponents(p-d,x-g,M-A,D-L).normalize(),i===ha)s[5].setComponents(p+d,x+g,M+A,D+L).normalize();else if(i===Oc)s[5].setComponents(d,g,A,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),xs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xs)}intersectsSprite(t){return xs.center.set(0,0,0),xs.radius=.7071067811865476,xs.applyMatrix4(t.matrixWorld),this.intersectsSphere(xs)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Sc.x=l.normal.x>0?t.max.x:t.min.x,Sc.y=l.normal.y>0?t.max.y:t.min.y,Sc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Sc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function pv(){let r=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function rM(r){const t=new WeakMap;function i(d,p){const m=d.array,_=d.usage,g=m.byteLength,x=r.createBuffer();r.bindBuffer(p,x),r.bufferData(p,m,_),d.onUploadCallback();let y;if(m instanceof Float32Array)y=r.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=r.SHORT;else if(m instanceof Uint32Array)y=r.UNSIGNED_INT;else if(m instanceof Int32Array)y=r.INT;else if(m instanceof Int8Array)y=r.BYTE;else if(m instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:g}}function s(d,p,m){const _=p.array,g=p.updateRanges;if(r.bindBuffer(m,d),g.length===0)r.bufferSubData(m,0,_);else{g.sort((y,E)=>y.start-E.start);let x=0;for(let y=1;y<g.length;y++){const E=g[x],A=g[y];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++x,g[x]=A)}g.length=x+1;for(let y=0,E=g.length;y<E;y++){const A=g[y];r.bufferSubData(m,A.start*_.BYTES_PER_ELEMENT,_,A.start,A.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=t.get(d);p&&(r.deleteBuffer(p.buffer),t.delete(d))}function h(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=t.get(d);(!_||_.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=t.get(d);if(m===void 0)t.set(d,i(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,d,p),m.version=d.version}}return{get:l,remove:c,update:h}}class Vc extends pi{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(s),p=Math.floor(l),m=d+1,_=p+1,g=t/d,x=i/p,y=[],E=[],A=[],M=[];for(let v=0;v<_;v++){const O=v*x-h;for(let L=0;L<m;L++){const D=L*g-c;E.push(D,-O,0),A.push(0,0,1),M.push(L/d),M.push(1-v/p)}}for(let v=0;v<p;v++)for(let O=0;O<d;O++){const L=O+m*v,D=O+m*(v+1),et=O+1+m*(v+1),H=O+1+m*v;y.push(L,D,H),y.push(D,et,H)}this.setIndex(y),this.setAttribute("position",new wn(E,3)),this.setAttribute("normal",new wn(A,3)),this.setAttribute("uv",new wn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vc(t.width,t.height,t.widthSegments,t.heightSegments)}}var oM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,cM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,pM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,gM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_M=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,SM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,MM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,EM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,TM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,AM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,RM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,CM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,wM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,DM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,UM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,LM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,NM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,OM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,PM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,IM="gl_FragColor = linearToOutputTexel( gl_FragColor );",BM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,FM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,HM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,GM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,VM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,XM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,WM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,YM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ZM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,KM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,QM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,JM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,$M=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,tE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,aE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,sE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,oE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_E=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,SE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ME=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,EE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,TE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,AE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,DE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,UE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,LE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,NE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,OE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,PE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,zE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,IE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,BE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,FE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,HE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,GE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,VE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,kE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,XE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,WE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,YE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ZE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,KE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,QE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,JE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$E=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,tb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,eb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,nb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ib=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ab=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,sb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ob=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ub=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,db=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,pb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,gb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_b=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,yb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Eb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Tb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ab=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Rb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Cb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Db=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ub=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ob=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Pb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ib=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Bb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ce={alphahash_fragment:oM,alphahash_pars_fragment:lM,alphamap_fragment:cM,alphamap_pars_fragment:uM,alphatest_fragment:fM,alphatest_pars_fragment:hM,aomap_fragment:dM,aomap_pars_fragment:pM,batching_pars_vertex:mM,batching_vertex:gM,begin_vertex:_M,beginnormal_vertex:vM,bsdfs:SM,iridescence_fragment:xM,bumpmap_pars_fragment:yM,clipping_planes_fragment:MM,clipping_planes_pars_fragment:EM,clipping_planes_pars_vertex:bM,clipping_planes_vertex:TM,color_fragment:AM,color_pars_fragment:RM,color_pars_vertex:CM,color_vertex:wM,common:DM,cube_uv_reflection_fragment:UM,defaultnormal_vertex:LM,displacementmap_pars_vertex:NM,displacementmap_vertex:OM,emissivemap_fragment:PM,emissivemap_pars_fragment:zM,colorspace_fragment:IM,colorspace_pars_fragment:BM,envmap_fragment:FM,envmap_common_pars_fragment:HM,envmap_pars_fragment:GM,envmap_pars_vertex:VM,envmap_physical_pars_fragment:$M,envmap_vertex:kM,fog_vertex:XM,fog_pars_vertex:WM,fog_fragment:qM,fog_pars_fragment:YM,gradientmap_pars_fragment:jM,lightmap_pars_fragment:ZM,lights_lambert_fragment:KM,lights_lambert_pars_fragment:QM,lights_pars_begin:JM,lights_toon_fragment:tE,lights_toon_pars_fragment:eE,lights_phong_fragment:nE,lights_phong_pars_fragment:iE,lights_physical_fragment:aE,lights_physical_pars_fragment:sE,lights_fragment_begin:rE,lights_fragment_maps:oE,lights_fragment_end:lE,logdepthbuf_fragment:cE,logdepthbuf_pars_fragment:uE,logdepthbuf_pars_vertex:fE,logdepthbuf_vertex:hE,map_fragment:dE,map_pars_fragment:pE,map_particle_fragment:mE,map_particle_pars_fragment:gE,metalnessmap_fragment:_E,metalnessmap_pars_fragment:vE,morphinstance_vertex:SE,morphcolor_vertex:xE,morphnormal_vertex:yE,morphtarget_pars_vertex:ME,morphtarget_vertex:EE,normal_fragment_begin:bE,normal_fragment_maps:TE,normal_pars_fragment:AE,normal_pars_vertex:RE,normal_vertex:CE,normalmap_pars_fragment:wE,clearcoat_normal_fragment_begin:DE,clearcoat_normal_fragment_maps:UE,clearcoat_pars_fragment:LE,iridescence_pars_fragment:NE,opaque_fragment:OE,packing:PE,premultiplied_alpha_fragment:zE,project_vertex:IE,dithering_fragment:BE,dithering_pars_fragment:FE,roughnessmap_fragment:HE,roughnessmap_pars_fragment:GE,shadowmap_pars_fragment:VE,shadowmap_pars_vertex:kE,shadowmap_vertex:XE,shadowmask_pars_fragment:WE,skinbase_vertex:qE,skinning_pars_vertex:YE,skinning_vertex:jE,skinnormal_vertex:ZE,specularmap_fragment:KE,specularmap_pars_fragment:QE,tonemapping_fragment:JE,tonemapping_pars_fragment:$E,transmission_fragment:tb,transmission_pars_fragment:eb,uv_pars_fragment:nb,uv_pars_vertex:ib,uv_vertex:ab,worldpos_vertex:sb,background_vert:rb,background_frag:ob,backgroundCube_vert:lb,backgroundCube_frag:cb,cube_vert:ub,cube_frag:fb,depth_vert:hb,depth_frag:db,distanceRGBA_vert:pb,distanceRGBA_frag:mb,equirect_vert:gb,equirect_frag:_b,linedashed_vert:vb,linedashed_frag:Sb,meshbasic_vert:xb,meshbasic_frag:yb,meshlambert_vert:Mb,meshlambert_frag:Eb,meshmatcap_vert:bb,meshmatcap_frag:Tb,meshnormal_vert:Ab,meshnormal_frag:Rb,meshphong_vert:Cb,meshphong_frag:wb,meshphysical_vert:Db,meshphysical_frag:Ub,meshtoon_vert:Lb,meshtoon_frag:Nb,points_vert:Ob,points_frag:Pb,shadow_vert:zb,shadow_frag:Ib,sprite_vert:Bb,sprite_frag:Fb},Nt={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},Ni={basic:{uniforms:Un([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:Un([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new fe(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:Un([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:Un([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:Un([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new fe(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:Un([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:Un([Nt.points,Nt.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:Un([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:Un([Nt.common,Nt.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:Un([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:Un([Nt.sprite,Nt.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:Un([Nt.common,Nt.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:Un([Nt.lights,Nt.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};Ni.physical={uniforms:Un([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const xc={r:0,b:0,g:0},ys=new Bi,Hb=new Ye;function Gb(r,t,i,s,l,c,h){const d=new fe(0);let p=c===!0?0:1,m,_,g=null,x=0,y=null;function E(O){let L=O.isScene===!0?O.background:null;return L&&L.isTexture&&(L=(O.backgroundBlurriness>0?i:t).get(L)),L}function A(O){let L=!1;const D=E(O);D===null?v(d,p):D&&D.isColor&&(v(D,1),L=!0);const et=r.xr.getEnvironmentBlendMode();et==="additive"?s.buffers.color.setClear(0,0,0,1,h):et==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(r.autoClear||L)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function M(O,L){const D=E(L);D&&(D.isCubeTexture||D.mapping===Fc)?(_===void 0&&(_=new zi(new qo(1,1,1),new Ja({name:"BackgroundCubeMaterial",uniforms:zr(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(et,H,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),ys.copy(L.backgroundRotation),ys.x*=-1,ys.y*=-1,ys.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),_.material.uniforms.envMap.value=D,_.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(Hb.makeRotationFromEuler(ys)),_.material.toneMapped=Ee.getTransfer(D.colorSpace)!==Be,(g!==D||x!==D.version||y!==r.toneMapping)&&(_.material.needsUpdate=!0,g=D,x=D.version,y=r.toneMapping),_.layers.enableAll(),O.unshift(_,_.geometry,_.material,0,0,null)):D&&D.isTexture&&(m===void 0&&(m=new zi(new Vc(2,2),new Ja({name:"BackgroundMaterial",uniforms:zr(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:Qa,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=D,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.toneMapped=Ee.getTransfer(D.colorSpace)!==Be,D.matrixAutoUpdate===!0&&D.updateMatrix(),m.material.uniforms.uvTransform.value.copy(D.matrix),(g!==D||x!==D.version||y!==r.toneMapping)&&(m.material.needsUpdate=!0,g=D,x=D.version,y=r.toneMapping),m.layers.enableAll(),O.unshift(m,m.geometry,m.material,0,0,null))}function v(O,L){O.getRGB(xc,fv(r)),s.buffers.color.setClear(xc.r,xc.g,xc.b,L,h)}return{getClearColor:function(){return d},setClearColor:function(O,L=1){d.set(O),p=L,v(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(O){p=O,v(d,p)},render:A,addToRenderList:M}}function Vb(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=x(null);let c=l,h=!1;function d(C,B,ot,st,gt){let dt=!1;const P=g(st,ot,B);c!==P&&(c=P,m(c.object)),dt=y(C,st,ot,gt),dt&&E(C,st,ot,gt),gt!==null&&t.update(gt,r.ELEMENT_ARRAY_BUFFER),(dt||h)&&(h=!1,D(C,B,ot,st),gt!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(gt).buffer))}function p(){return r.createVertexArray()}function m(C){return r.bindVertexArray(C)}function _(C){return r.deleteVertexArray(C)}function g(C,B,ot){const st=ot.wireframe===!0;let gt=s[C.id];gt===void 0&&(gt={},s[C.id]=gt);let dt=gt[B.id];dt===void 0&&(dt={},gt[B.id]=dt);let P=dt[st];return P===void 0&&(P=x(p()),dt[st]=P),P}function x(C){const B=[],ot=[],st=[];for(let gt=0;gt<i;gt++)B[gt]=0,ot[gt]=0,st[gt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:ot,attributeDivisors:st,object:C,attributes:{},index:null}}function y(C,B,ot,st){const gt=c.attributes,dt=B.attributes;let P=0;const W=ot.getAttributes();for(const Z in W)if(W[Z].location>=0){const bt=gt[Z];let N=dt[Z];if(N===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(N=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(N=C.instanceColor)),bt===void 0||bt.attribute!==N||N&&bt.data!==N.data)return!0;P++}return c.attributesNum!==P||c.index!==st}function E(C,B,ot,st){const gt={},dt=B.attributes;let P=0;const W=ot.getAttributes();for(const Z in W)if(W[Z].location>=0){let bt=dt[Z];bt===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(bt=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(bt=C.instanceColor));const N={};N.attribute=bt,bt&&bt.data&&(N.data=bt.data),gt[Z]=N,P++}c.attributes=gt,c.attributesNum=P,c.index=st}function A(){const C=c.newAttributes;for(let B=0,ot=C.length;B<ot;B++)C[B]=0}function M(C){v(C,0)}function v(C,B){const ot=c.newAttributes,st=c.enabledAttributes,gt=c.attributeDivisors;ot[C]=1,st[C]===0&&(r.enableVertexAttribArray(C),st[C]=1),gt[C]!==B&&(r.vertexAttribDivisor(C,B),gt[C]=B)}function O(){const C=c.newAttributes,B=c.enabledAttributes;for(let ot=0,st=B.length;ot<st;ot++)B[ot]!==C[ot]&&(r.disableVertexAttribArray(ot),B[ot]=0)}function L(C,B,ot,st,gt,dt,P){P===!0?r.vertexAttribIPointer(C,B,ot,gt,dt):r.vertexAttribPointer(C,B,ot,st,gt,dt)}function D(C,B,ot,st){A();const gt=st.attributes,dt=ot.getAttributes(),P=B.defaultAttributeValues;for(const W in dt){const Z=dt[W];if(Z.location>=0){let xt=gt[W];if(xt===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&(xt=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&(xt=C.instanceColor)),xt!==void 0){const bt=xt.normalized,N=xt.itemSize,nt=t.get(xt);if(nt===void 0)continue;const St=nt.buffer,j=nt.type,ct=nt.bytesPerElement,Mt=j===r.INT||j===r.UNSIGNED_INT||xt.gpuType===Ad;if(xt.isInterleavedBufferAttribute){const vt=xt.data,Ht=vt.stride,Ft=xt.offset;if(vt.isInstancedInterleavedBuffer){for(let ne=0;ne<Z.locationSize;ne++)v(Z.location+ne,vt.meshPerAttribute);C.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let ne=0;ne<Z.locationSize;ne++)M(Z.location+ne);r.bindBuffer(r.ARRAY_BUFFER,St);for(let ne=0;ne<Z.locationSize;ne++)L(Z.location+ne,N/Z.locationSize,j,bt,Ht*ct,(Ft+N/Z.locationSize*ne)*ct,Mt)}else{if(xt.isInstancedBufferAttribute){for(let vt=0;vt<Z.locationSize;vt++)v(Z.location+vt,xt.meshPerAttribute);C.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let vt=0;vt<Z.locationSize;vt++)M(Z.location+vt);r.bindBuffer(r.ARRAY_BUFFER,St);for(let vt=0;vt<Z.locationSize;vt++)L(Z.location+vt,N/Z.locationSize,j,bt,N*ct,N/Z.locationSize*vt*ct,Mt)}}else if(P!==void 0){const bt=P[W];if(bt!==void 0)switch(bt.length){case 2:r.vertexAttrib2fv(Z.location,bt);break;case 3:r.vertexAttrib3fv(Z.location,bt);break;case 4:r.vertexAttrib4fv(Z.location,bt);break;default:r.vertexAttrib1fv(Z.location,bt)}}}}O()}function et(){Y();for(const C in s){const B=s[C];for(const ot in B){const st=B[ot];for(const gt in st)_(st[gt].object),delete st[gt];delete B[ot]}delete s[C]}}function H(C){if(s[C.id]===void 0)return;const B=s[C.id];for(const ot in B){const st=B[ot];for(const gt in st)_(st[gt].object),delete st[gt];delete B[ot]}delete s[C.id]}function z(C){for(const B in s){const ot=s[B];if(ot[C.id]===void 0)continue;const st=ot[C.id];for(const gt in st)_(st[gt].object),delete st[gt];delete ot[C.id]}}function Y(){w(),h=!0,c!==l&&(c=l,m(c.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Y,resetDefaultState:w,dispose:et,releaseStatesOfGeometry:H,releaseStatesOfProgram:z,initAttributes:A,enableAttribute:M,disableUnusedAttributes:O}}function kb(r,t,i){let s;function l(m){s=m}function c(m,_){r.drawArrays(s,m,_),i.update(_,s,1)}function h(m,_,g){g!==0&&(r.drawArraysInstanced(s,m,_,g),i.update(_,s,g))}function d(m,_,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,_,0,g);let y=0;for(let E=0;E<g;E++)y+=_[E];i.update(y,s,1)}function p(m,_,g,x){if(g===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<m.length;E++)h(m[E],_[E],x[E]);else{y.multiDrawArraysInstancedWEBGL(s,m,0,_,0,x,0,g);let E=0;for(let A=0;A<g;A++)E+=_[A]*x[A];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function Xb(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(z){return!(z!==Ai&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const Y=z===ko&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==pa&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==fa&&!Y)}function p(z){if(z==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const _=p(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const g=i.logarithmicDepthBuffer===!0,x=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),O=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),et=E>0,H=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:h,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:g,reverseDepthBuffer:x,maxTextures:y,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:M,maxAttributes:v,maxVertexUniforms:O,maxVaryings:L,maxFragmentUniforms:D,vertexTextures:et,maxSamples:H}}function Wb(r){const t=this;let i=null,s=0,l=!1,c=!1;const h=new Ya,d=new oe,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const y=g.length!==0||x||s!==0||l;return l=x,s=g.length,y},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,x){i=_(g,x,0)},this.setState=function(g,x,y){const E=g.clippingPlanes,A=g.clipIntersection,M=g.clipShadows,v=r.get(g);if(!l||E===null||E.length===0||c&&!M)c?_(null):m();else{const O=c?0:s,L=O*4;let D=v.clippingState||null;p.value=D,D=_(E,x,L,y);for(let et=0;et!==L;++et)D[et]=i[et];v.clippingState=D,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=O}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(g,x,y,E){const A=g!==null?g.length:0;let M=null;if(A!==0){if(M=p.value,E!==!0||M===null){const v=y+A*4,O=x.matrixWorldInverse;d.getNormalMatrix(O),(M===null||M.length<v)&&(M=new Float32Array(v));for(let L=0,D=y;L!==A;++L,D+=4)h.copy(g[L]).applyMatrix4(O,d),h.normal.toArray(M,D),M[D+3]=h.constant}p.value=M,p.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,M}}function qb(r){let t=new WeakMap;function i(h,d){return d===Wh?h.mapping=Lr:d===qh&&(h.mapping=Nr),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Wh||d===qh)if(t.has(h)){const p=t.get(h).texture;return i(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const m=new iM(p.height);return m.fromEquirectangularTexture(r,h),t.set(h,m),h.addEventListener("dispose",l),i(m.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}class mv extends hv{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,h=c+m*this.view.width,d-=_*this.view.offsetY,p=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Ar=4,i0=[.125,.215,.35,.446,.526,.582],Ts=20,Ah=new mv,a0=new fe;let Rh=null,Ch=0,wh=0,Dh=!1;const Es=(1+Math.sqrt(5))/2,br=1/Es,s0=[new J(-Es,br,0),new J(Es,br,0),new J(-br,0,Es),new J(br,0,Es),new J(0,Es,-br),new J(0,Es,br),new J(-1,1,-1),new J(1,1,-1),new J(-1,1,1),new J(1,1,1)];class r0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100){Rh=this._renderer.getRenderTarget(),Ch=this._renderer.getActiveCubeFace(),wh=this._renderer.getActiveMipmapLevel(),Dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,s,l,c),i>0&&this._blur(c,0,0,i),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=c0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=l0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Rh,Ch,wh),this._renderer.xr.enabled=Dh,t.scissorTest=!1,yc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Lr||t.mapping===Nr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Rh=this._renderer.getRenderTarget(),Ch=this._renderer.getActiveCubeFace(),wh=this._renderer.getActiveMipmapLevel(),Dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Pi,minFilter:Pi,generateMipmaps:!1,type:ko,format:Ai,colorSpace:Ir,depthBuffer:!1},l=o0(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=o0(t,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Yb(c)),this._blurMaterial=jb(c,t,i)}return l}_compileMaterial(t){const i=new zi(this._lodPlanes[0],t);this._renderer.compile(i,Ah)}_sceneToCubeUV(t,i,s,l){const d=new di(90,1,i,s),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,x=_.toneMapping;_.getClearColor(a0),_.toneMapping=Ka,_.autoClear=!1;const y=new lv({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1}),E=new zi(new qo,y);let A=!1;const M=t.background;M?M.isColor&&(y.color.copy(M),t.background=null,A=!0):(y.color.copy(a0),A=!0);for(let v=0;v<6;v++){const O=v%3;O===0?(d.up.set(0,p[v],0),d.lookAt(m[v],0,0)):O===1?(d.up.set(0,0,p[v]),d.lookAt(0,m[v],0)):(d.up.set(0,p[v],0),d.lookAt(0,0,m[v]));const L=this._cubeSize;yc(l,O*L,v>2?L:0,L,L),_.setRenderTarget(l),A&&_.render(E,d),_.render(t,d)}E.geometry.dispose(),E.material.dispose(),_.toneMapping=x,_.autoClear=g,t.background=M}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Lr||t.mapping===Nr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=c0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=l0());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new zi(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const p=this._cubeSize;yc(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(h,Ah)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=s0[(l-c-1)%s0.length];this._blur(t,c-1,c,h,d)}i.autoClear=s}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,d){const p=this._renderer,m=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,g=new zi(this._lodPlanes[l],m),x=m.uniforms,y=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Ts-1),A=c/E,M=isFinite(c)?1+Math.floor(_*A):Ts;M>Ts&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Ts}`);const v=[];let O=0;for(let z=0;z<Ts;++z){const Y=z/A,w=Math.exp(-Y*Y/2);v.push(w),z===0?O+=w:z<M&&(O+=2*w)}for(let z=0;z<v.length;z++)v[z]=v[z]/O;x.envMap.value=t.texture,x.samples.value=M,x.weights.value=v,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:L}=this;x.dTheta.value=E,x.mipInt.value=L-s;const D=this._sizeLods[l],et=3*D*(l>L-Ar?l-L+Ar:0),H=4*(this._cubeSize-D);yc(i,et,H,3*D,2*D),p.setRenderTarget(i),p.render(g,Ah)}}function Yb(r){const t=[],i=[],s=[];let l=r;const c=r-Ar+1+i0.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let p=1/d;h>r-Ar?p=i0[h-r+Ar-1]:h===0&&(p=0),s.push(p);const m=1/(d-2),_=-m,g=1+m,x=[_,_,g,_,g,g,_,_,g,g,_,g],y=6,E=6,A=3,M=2,v=1,O=new Float32Array(A*E*y),L=new Float32Array(M*E*y),D=new Float32Array(v*E*y);for(let H=0;H<y;H++){const z=H%3*2/3-1,Y=H>2?0:-1,w=[z,Y,0,z+2/3,Y,0,z+2/3,Y+1,0,z,Y,0,z+2/3,Y+1,0,z,Y+1,0];O.set(w,A*E*H),L.set(x,M*E*H);const C=[H,H,H,H,H,H];D.set(C,v*E*H)}const et=new pi;et.setAttribute("position",new Ii(O,A)),et.setAttribute("uv",new Ii(L,M)),et.setAttribute("faceIndex",new Ii(D,v)),t.push(et),l>Ar&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function o0(r,t,i){const s=new ws(r,t,i);return s.texture.mapping=Fc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function yc(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function jb(r,t,i){const s=new Float32Array(Ts),l=new J(0,1,0);return new Ja({name:"SphericalGaussianBlur",defines:{n:Ts,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Od(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Za,depthTest:!1,depthWrite:!1})}function l0(){return new Ja({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Od(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Za,depthTest:!1,depthWrite:!1})}function c0(){return new Ja({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Od(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Za,depthTest:!1,depthWrite:!1})}function Od(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Zb(r){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const p=d.mapping,m=p===Wh||p===qh,_=p===Lr||p===Nr;if(m||_){let g=t.get(d);const x=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new r0(r)),g=m?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{const y=d.image;return m&&y&&y.height>0||_&&y&&l(y)?(i===null&&(i=new r0(r)),g=m?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",c),g.texture):null}}}return d}function l(d){let p=0;const m=6;for(let _=0;_<m;_++)d[_]!==void 0&&p++;return p===m}function c(d){const p=d.target;p.removeEventListener("dispose",c);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function Kb(r){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Ho("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function Qb(r,t,i,s){const l={},c=new WeakMap;function h(g){const x=g.target;x.index!==null&&t.remove(x.index);for(const E in x.attributes)t.remove(x.attributes[E]);for(const E in x.morphAttributes){const A=x.morphAttributes[E];for(let M=0,v=A.length;M<v;M++)t.remove(A[M])}x.removeEventListener("dispose",h),delete l[x.id];const y=c.get(x);y&&(t.remove(y),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(g,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function p(g){const x=g.attributes;for(const E in x)t.update(x[E],r.ARRAY_BUFFER);const y=g.morphAttributes;for(const E in y){const A=y[E];for(let M=0,v=A.length;M<v;M++)t.update(A[M],r.ARRAY_BUFFER)}}function m(g){const x=[],y=g.index,E=g.attributes.position;let A=0;if(y!==null){const O=y.array;A=y.version;for(let L=0,D=O.length;L<D;L+=3){const et=O[L+0],H=O[L+1],z=O[L+2];x.push(et,H,H,z,z,et)}}else if(E!==void 0){const O=E.array;A=E.version;for(let L=0,D=O.length/3-1;L<D;L+=3){const et=L+0,H=L+1,z=L+2;x.push(et,H,H,z,z,et)}}else return;const M=new(iv(x)?uv:cv)(x,1);M.version=A;const v=c.get(g);v&&t.remove(v),c.set(g,M)}function _(g){const x=c.get(g);if(x){const y=g.index;y!==null&&x.version<y.version&&m(g)}else m(g);return c.get(g)}return{get:d,update:p,getWireframeAttribute:_}}function Jb(r,t,i){let s;function l(x){s=x}let c,h;function d(x){c=x.type,h=x.bytesPerElement}function p(x,y){r.drawElements(s,y,c,x*h),i.update(y,s,1)}function m(x,y,E){E!==0&&(r.drawElementsInstanced(s,y,c,x*h,E),i.update(y,s,E))}function _(x,y,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,x,0,E);let M=0;for(let v=0;v<E;v++)M+=y[v];i.update(M,s,1)}function g(x,y,E,A){if(E===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let v=0;v<x.length;v++)m(x[v]/h,y[v],A[v]);else{M.multiDrawElementsInstancedWEBGL(s,y,0,c,x,0,A,0,E);let v=0;for(let O=0;O<E;O++)v+=y[O]*A[O];i.update(v,s,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function $b(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function tT(r,t,i){const s=new WeakMap,l=new Qe;function c(h,d,p){const m=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=_!==void 0?_.length:0;let x=s.get(d);if(x===void 0||x.count!==g){let C=function(){Y.dispose(),s.delete(d),d.removeEventListener("dispose",C)};var y=C;x!==void 0&&x.texture.dispose();const E=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],O=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let D=0;E===!0&&(D=1),A===!0&&(D=2),M===!0&&(D=3);let et=d.attributes.position.count*D,H=1;et>t.maxTextureSize&&(H=Math.ceil(et/t.maxTextureSize),et=t.maxTextureSize);const z=new Float32Array(et*H*4*g),Y=new sv(z,et,H,g);Y.type=fa,Y.needsUpdate=!0;const w=D*4;for(let B=0;B<g;B++){const ot=v[B],st=O[B],gt=L[B],dt=et*H*4*B;for(let P=0;P<ot.count;P++){const W=P*w;E===!0&&(l.fromBufferAttribute(ot,P),z[dt+W+0]=l.x,z[dt+W+1]=l.y,z[dt+W+2]=l.z,z[dt+W+3]=0),A===!0&&(l.fromBufferAttribute(st,P),z[dt+W+4]=l.x,z[dt+W+5]=l.y,z[dt+W+6]=l.z,z[dt+W+7]=0),M===!0&&(l.fromBufferAttribute(gt,P),z[dt+W+8]=l.x,z[dt+W+9]=l.y,z[dt+W+10]=l.z,z[dt+W+11]=gt.itemSize===4?l.w:1)}}x={count:g,texture:Y,size:new le(et,H)},s.set(d,x),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let E=0;for(let M=0;M<m.length;M++)E+=m[M];const A=d.morphTargetsRelative?1:1-E;p.getUniforms().setValue(r,"morphTargetBaseInfluence",A),p.getUniforms().setValue(r,"morphTargetInfluences",m)}p.getUniforms().setValue(r,"morphTargetsTexture",x.texture,i),p.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:c}}function eT(r,t,i,s){let l=new WeakMap;function c(p){const m=s.render.frame,_=p.geometry,g=t.get(p,_);if(l.get(g)!==m&&(t.update(g),l.set(g,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==m&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;l.get(x)!==m&&(x.update(),l.set(x,m))}return g}function h(){l=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:c,dispose:h}}class gv extends kn{constructor(t,i,s,l,c,h,d,p,m,_=wr){if(_!==wr&&_!==Pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&_===wr&&(s=Cs),s===void 0&&_===Pr&&(s=Or),super(null,l,c,h,d,p,_,s,m),this.isDepthTexture=!0,this.image={width:t,height:i},this.magFilter=d!==void 0?d:Ri,this.minFilter=p!==void 0?p:Ri,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const _v=new kn,u0=new gv(1,1),vv=new sv,Sv=new Gy,xv=new dv,f0=[],h0=[],d0=new Float32Array(16),p0=new Float32Array(9),m0=new Float32Array(4);function Fr(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=f0[l];if(c===void 0&&(c=new Float32Array(l),f0[l]=c),t!==0){s.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,r[h].toArray(c,d)}return c}function un(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function fn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function kc(r,t){let i=h0[t];i===void 0&&(i=new Int32Array(t),h0[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function nT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function iT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(un(i,t))return;r.uniform2fv(this.addr,t),fn(i,t)}}function aT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(un(i,t))return;r.uniform3fv(this.addr,t),fn(i,t)}}function sT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(un(i,t))return;r.uniform4fv(this.addr,t),fn(i,t)}}function rT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(un(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),fn(i,t)}else{if(un(i,s))return;m0.set(s),r.uniformMatrix2fv(this.addr,!1,m0),fn(i,s)}}function oT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(un(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),fn(i,t)}else{if(un(i,s))return;p0.set(s),r.uniformMatrix3fv(this.addr,!1,p0),fn(i,s)}}function lT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(un(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),fn(i,t)}else{if(un(i,s))return;d0.set(s),r.uniformMatrix4fv(this.addr,!1,d0),fn(i,s)}}function cT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function uT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(un(i,t))return;r.uniform2iv(this.addr,t),fn(i,t)}}function fT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(un(i,t))return;r.uniform3iv(this.addr,t),fn(i,t)}}function hT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(un(i,t))return;r.uniform4iv(this.addr,t),fn(i,t)}}function dT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function pT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(un(i,t))return;r.uniform2uiv(this.addr,t),fn(i,t)}}function mT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(un(i,t))return;r.uniform3uiv(this.addr,t),fn(i,t)}}function gT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(un(i,t))return;r.uniform4uiv(this.addr,t),fn(i,t)}}function _T(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(u0.compareFunction=nv,c=u0):c=_v,i.setTexture2D(t||c,l)}function vT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Sv,l)}function ST(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||xv,l)}function xT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||vv,l)}function yT(r){switch(r){case 5126:return nT;case 35664:return iT;case 35665:return aT;case 35666:return sT;case 35674:return rT;case 35675:return oT;case 35676:return lT;case 5124:case 35670:return cT;case 35667:case 35671:return uT;case 35668:case 35672:return fT;case 35669:case 35673:return hT;case 5125:return dT;case 36294:return pT;case 36295:return mT;case 36296:return gT;case 35678:case 36198:case 36298:case 36306:case 35682:return _T;case 35679:case 36299:case 36307:return vT;case 35680:case 36300:case 36308:case 36293:return ST;case 36289:case 36303:case 36311:case 36292:return xT}}function MT(r,t){r.uniform1fv(this.addr,t)}function ET(r,t){const i=Fr(t,this.size,2);r.uniform2fv(this.addr,i)}function bT(r,t){const i=Fr(t,this.size,3);r.uniform3fv(this.addr,i)}function TT(r,t){const i=Fr(t,this.size,4);r.uniform4fv(this.addr,i)}function AT(r,t){const i=Fr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function RT(r,t){const i=Fr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function CT(r,t){const i=Fr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function wT(r,t){r.uniform1iv(this.addr,t)}function DT(r,t){r.uniform2iv(this.addr,t)}function UT(r,t){r.uniform3iv(this.addr,t)}function LT(r,t){r.uniform4iv(this.addr,t)}function NT(r,t){r.uniform1uiv(this.addr,t)}function OT(r,t){r.uniform2uiv(this.addr,t)}function PT(r,t){r.uniform3uiv(this.addr,t)}function zT(r,t){r.uniform4uiv(this.addr,t)}function IT(r,t,i){const s=this.cache,l=t.length,c=kc(i,l);un(s,c)||(r.uniform1iv(this.addr,c),fn(s,c));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||_v,c[h])}function BT(r,t,i){const s=this.cache,l=t.length,c=kc(i,l);un(s,c)||(r.uniform1iv(this.addr,c),fn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||Sv,c[h])}function FT(r,t,i){const s=this.cache,l=t.length,c=kc(i,l);un(s,c)||(r.uniform1iv(this.addr,c),fn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||xv,c[h])}function HT(r,t,i){const s=this.cache,l=t.length,c=kc(i,l);un(s,c)||(r.uniform1iv(this.addr,c),fn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||vv,c[h])}function GT(r){switch(r){case 5126:return MT;case 35664:return ET;case 35665:return bT;case 35666:return TT;case 35674:return AT;case 35675:return RT;case 35676:return CT;case 5124:case 35670:return wT;case 35667:case 35671:return DT;case 35668:case 35672:return UT;case 35669:case 35673:return LT;case 5125:return NT;case 36294:return OT;case 36295:return PT;case 36296:return zT;case 35678:case 36198:case 36298:case 36306:case 35682:return IT;case 35679:case 36299:case 36307:return BT;case 35680:case 36300:case 36308:case 36293:return FT;case 36289:case 36303:case 36311:case 36292:return HT}}class VT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=yT(i.type)}}class kT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=GT(i.type)}}class XT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const Uh=/(\w+)(\])?(\[|\.)?/g;function g0(r,t){r.seq.push(t),r.map[t.id]=t}function WT(r,t,i){const s=r.name,l=s.length;for(Uh.lastIndex=0;;){const c=Uh.exec(s),h=Uh.lastIndex;let d=c[1];const p=c[2]==="]",m=c[3];if(p&&(d=d|0),m===void 0||m==="["&&h+2===l){g0(i,m===void 0?new VT(d,r,t):new kT(d,r,t));break}else{let g=i.map[d];g===void 0&&(g=new XT(d),g0(i,g)),i=g}}}class Nc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=t.getActiveUniform(i,l),h=t.getUniformLocation(i,c.name);WT(c,h,this)}}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],p=s[d.id];p.needsUpdate!==!1&&d.setValue(t,p.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function _0(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const qT=37297;let YT=0;function jT(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const v0=new oe;function ZT(r){Ee._getMatrix(v0,Ee.workingColorSpace,r);const t=`mat3( ${v0.elements.map(i=>i.toFixed(4))} )`;switch(Ee.getTransfer(r)){case Hc:return[t,"LinearTransferOETF"];case Be:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function S0(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),l=r.getShaderInfoLog(t).trim();if(s&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const h=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+jT(r.getShaderSource(t),h)}else return l}function KT(r,t){const i=ZT(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function QT(r,t){let i;switch(t){case dy:i="Linear";break;case py:i="Reinhard";break;case my:i="Cineon";break;case gy:i="ACESFilmic";break;case vy:i="AgX";break;case Sy:i="Neutral";break;case _y:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Mc=new J;function JT(){Ee.getLuminanceCoefficients(Mc);const r=Mc.x.toFixed(4),t=Mc.y.toFixed(4),i=Mc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $T(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Go).join(`
`)}function t1(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function e1(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),h=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:r.getAttribLocation(t,h),locationSize:d}}return i}function Go(r){return r!==""}function x0(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function y0(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const n1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Md(r){return r.replace(n1,a1)}const i1=new Map;function a1(r,t){let i=ce[t];if(i===void 0){const s=i1.get(t);if(s!==void 0)i=ce[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Md(i)}const s1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function M0(r){return r.replace(s1,r1)}function r1(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function E0(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function o1(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===k0?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===qx?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ua&&(t="SHADOWMAP_TYPE_VSM"),t}function l1(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Lr:case Nr:t="ENVMAP_TYPE_CUBE";break;case Fc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function c1(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Nr:t="ENVMAP_MODE_REFRACTION";break}return t}function u1(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Td:t="ENVMAP_BLENDING_MULTIPLY";break;case fy:t="ENVMAP_BLENDING_MIX";break;case hy:t="ENVMAP_BLENDING_ADD";break}return t}function f1(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function h1(r,t,i,s){const l=r.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const p=o1(i),m=l1(i),_=c1(i),g=u1(i),x=f1(i),y=$T(i),E=t1(c),A=l.createProgram();let M,v,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Go).join(`
`),M.length>0&&(M+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Go).join(`
`),v.length>0&&(v+=`
`)):(M=[E0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Go).join(`
`),v=[E0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+_:"",i.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ka?"#define TONE_MAPPING":"",i.toneMapping!==Ka?ce.tonemapping_pars_fragment:"",i.toneMapping!==Ka?QT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,KT("linearToOutputTexel",i.outputColorSpace),JT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Go).join(`
`)),h=Md(h),h=x0(h,i),h=y0(h,i),d=Md(d),d=x0(d,i),d=y0(d,i),h=M0(h),d=M0(d),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,v=["#define varying in",i.glslVersion===z_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===z_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const L=O+M+h,D=O+v+d,et=_0(l,l.VERTEX_SHADER,L),H=_0(l,l.FRAGMENT_SHADER,D);l.attachShader(A,et),l.attachShader(A,H),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function z(B){if(r.debug.checkShaderErrors){const ot=l.getProgramInfoLog(A).trim(),st=l.getShaderInfoLog(et).trim(),gt=l.getShaderInfoLog(H).trim();let dt=!0,P=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(dt=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,A,et,H);else{const W=S0(l,et,"vertex"),Z=S0(l,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+ot+`
`+W+`
`+Z)}else ot!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ot):(st===""||gt==="")&&(P=!1);P&&(B.diagnostics={runnable:dt,programLog:ot,vertexShader:{log:st,prefix:M},fragmentShader:{log:gt,prefix:v}})}l.deleteShader(et),l.deleteShader(H),Y=new Nc(l,A),w=e1(l,A)}let Y;this.getUniforms=function(){return Y===void 0&&z(this),Y};let w;this.getAttributes=function(){return w===void 0&&z(this),w};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(A,qT)),C},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=YT++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=et,this.fragmentShader=H,this}let d1=0;class p1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new m1(t),i.set(t,s)),s}}class m1{constructor(t){this.id=d1++,this.code=t,this.usedTimes=0}}function g1(r,t,i,s,l,c,h){const d=new rv,p=new p1,m=new Set,_=[],g=l.logarithmicDepthBuffer,x=l.vertexTextures;let y=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(w){return m.add(w),w===0?"uv":`uv${w}`}function M(w,C,B,ot,st){const gt=ot.fog,dt=st.geometry,P=w.isMeshStandardMaterial?ot.environment:null,W=(w.isMeshStandardMaterial?i:t).get(w.envMap||P),Z=W&&W.mapping===Fc?W.image.height:null,xt=E[w.type];w.precision!==null&&(y=l.getMaxPrecision(w.precision),y!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",y,"instead."));const bt=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,N=bt!==void 0?bt.length:0;let nt=0;dt.morphAttributes.position!==void 0&&(nt=1),dt.morphAttributes.normal!==void 0&&(nt=2),dt.morphAttributes.color!==void 0&&(nt=3);let St,j,ct,Mt;if(xt){const Me=Ni[xt];St=Me.vertexShader,j=Me.fragmentShader}else St=w.vertexShader,j=w.fragmentShader,p.update(w),ct=p.getVertexShaderID(w),Mt=p.getFragmentShaderID(w);const vt=r.getRenderTarget(),Ht=r.state.buffers.depth.getReversed(),Ft=st.isInstancedMesh===!0,ne=st.isBatchedMesh===!0,Le=!!w.map,he=!!w.matcap,ke=!!W,X=!!w.aoMap,En=!!w.lightMap,ue=!!w.bumpMap,me=!!w.normalMap,Zt=!!w.displacementMap,Ce=!!w.emissiveMap,Yt=!!w.metalnessMap,U=!!w.roughnessMap,T=w.anisotropy>0,tt=w.clearcoat>0,ft=w.dispersion>0,yt=w.iridescence>0,pt=w.sheen>0,Xt=w.transmission>0,Ut=T&&!!w.anisotropyMap,Pt=tt&&!!w.clearcoatMap,ge=tt&&!!w.clearcoatNormalMap,At=tt&&!!w.clearcoatRoughnessMap,zt=yt&&!!w.iridescenceMap,jt=yt&&!!w.iridescenceThicknessMap,Wt=pt&&!!w.sheenColorMap,Ot=pt&&!!w.sheenRoughnessMap,Jt=!!w.specularMap,ae=!!w.specularColorMap,Ne=!!w.specularIntensityMap,G=Xt&&!!w.transmissionMap,Rt=Xt&&!!w.thicknessMap,lt=!!w.gradientMap,_t=!!w.alphaMap,Ct=w.alphaTest>0,Lt=!!w.alphaHash,$t=!!w.extensions;let Xe=Ka;w.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(Xe=r.toneMapping);const rn={shaderID:xt,shaderType:w.type,shaderName:w.name,vertexShader:St,fragmentShader:j,defines:w.defines,customVertexShaderID:ct,customFragmentShaderID:Mt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:y,batching:ne,batchingColor:ne&&st._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&st.instanceColor!==null,instancingMorph:Ft&&st.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:vt===null?r.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:Ir,alphaToCoverage:!!w.alphaToCoverage,map:Le,matcap:he,envMap:ke,envMapMode:ke&&W.mapping,envMapCubeUVHeight:Z,aoMap:X,lightMap:En,bumpMap:ue,normalMap:me,displacementMap:x&&Zt,emissiveMap:Ce,normalMapObjectSpace:me&&w.normalMapType===Ey,normalMapTangentSpace:me&&w.normalMapType===ev,metalnessMap:Yt,roughnessMap:U,anisotropy:T,anisotropyMap:Ut,clearcoat:tt,clearcoatMap:Pt,clearcoatNormalMap:ge,clearcoatRoughnessMap:At,dispersion:ft,iridescence:yt,iridescenceMap:zt,iridescenceThicknessMap:jt,sheen:pt,sheenColorMap:Wt,sheenRoughnessMap:Ot,specularMap:Jt,specularColorMap:ae,specularIntensityMap:Ne,transmission:Xt,transmissionMap:G,thicknessMap:Rt,gradientMap:lt,opaque:w.transparent===!1&&w.blending===Cr&&w.alphaToCoverage===!1,alphaMap:_t,alphaTest:Ct,alphaHash:Lt,combine:w.combine,mapUv:Le&&A(w.map.channel),aoMapUv:X&&A(w.aoMap.channel),lightMapUv:En&&A(w.lightMap.channel),bumpMapUv:ue&&A(w.bumpMap.channel),normalMapUv:me&&A(w.normalMap.channel),displacementMapUv:Zt&&A(w.displacementMap.channel),emissiveMapUv:Ce&&A(w.emissiveMap.channel),metalnessMapUv:Yt&&A(w.metalnessMap.channel),roughnessMapUv:U&&A(w.roughnessMap.channel),anisotropyMapUv:Ut&&A(w.anisotropyMap.channel),clearcoatMapUv:Pt&&A(w.clearcoatMap.channel),clearcoatNormalMapUv:ge&&A(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&A(w.clearcoatRoughnessMap.channel),iridescenceMapUv:zt&&A(w.iridescenceMap.channel),iridescenceThicknessMapUv:jt&&A(w.iridescenceThicknessMap.channel),sheenColorMapUv:Wt&&A(w.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&A(w.sheenRoughnessMap.channel),specularMapUv:Jt&&A(w.specularMap.channel),specularColorMapUv:ae&&A(w.specularColorMap.channel),specularIntensityMapUv:Ne&&A(w.specularIntensityMap.channel),transmissionMapUv:G&&A(w.transmissionMap.channel),thicknessMapUv:Rt&&A(w.thicknessMap.channel),alphaMapUv:_t&&A(w.alphaMap.channel),vertexTangents:!!dt.attributes.tangent&&(me||T),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,pointsUvs:st.isPoints===!0&&!!dt.attributes.uv&&(Le||_t),fog:!!gt,useFog:w.fog===!0,fogExp2:!!gt&&gt.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:Ht,skinning:st.isSkinnedMesh===!0,morphTargets:dt.morphAttributes.position!==void 0,morphNormals:dt.morphAttributes.normal!==void 0,morphColors:dt.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:nt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:r.shadowMap.enabled&&B.length>0,shadowMapType:r.shadowMap.type,toneMapping:Xe,decodeVideoTexture:Le&&w.map.isVideoTexture===!0&&Ee.getTransfer(w.map.colorSpace)===Be,decodeVideoTextureEmissive:Ce&&w.emissiveMap.isVideoTexture===!0&&Ee.getTransfer(w.emissiveMap.colorSpace)===Be,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Oi,flipSided:w.side===Vn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:$t&&w.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($t&&w.extensions.multiDraw===!0||ne)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return rn.vertexUv1s=m.has(1),rn.vertexUv2s=m.has(2),rn.vertexUv3s=m.has(3),m.clear(),rn}function v(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const B in w.defines)C.push(B),C.push(w.defines[B]);return w.isRawShaderMaterial===!1&&(O(C,w),L(C,w),C.push(r.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function O(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function L(w,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),w.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),w.push(d.mask)}function D(w){const C=E[w.type];let B;if(C){const ot=Ni[C];B=$y.clone(ot.uniforms)}else B=w.uniforms;return B}function et(w,C){let B;for(let ot=0,st=_.length;ot<st;ot++){const gt=_[ot];if(gt.cacheKey===C){B=gt,++B.usedTimes;break}}return B===void 0&&(B=new h1(r,C,w,c),_.push(B)),B}function H(w){if(--w.usedTimes===0){const C=_.indexOf(w);_[C]=_[_.length-1],_.pop(),w.destroy()}}function z(w){p.remove(w)}function Y(){p.dispose()}return{getParameters:M,getProgramCacheKey:v,getUniforms:D,acquireProgram:et,releaseProgram:H,releaseShaderCache:z,programs:_,dispose:Y}}function _1(){let r=new WeakMap;function t(h){return r.has(h)}function i(h){let d=r.get(h);return d===void 0&&(d={},r.set(h,d)),d}function s(h){r.delete(h)}function l(h,d,p){r.get(h)[d]=p}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function v1(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function b0(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function T0(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(g,x,y,E,A,M){let v=r[t];return v===void 0?(v={id:g.id,object:g,geometry:x,material:y,groupOrder:E,renderOrder:g.renderOrder,z:A,group:M},r[t]=v):(v.id=g.id,v.object=g,v.geometry=x,v.material=y,v.groupOrder=E,v.renderOrder=g.renderOrder,v.z=A,v.group=M),t++,v}function d(g,x,y,E,A,M){const v=h(g,x,y,E,A,M);y.transmission>0?s.push(v):y.transparent===!0?l.push(v):i.push(v)}function p(g,x,y,E,A,M){const v=h(g,x,y,E,A,M);y.transmission>0?s.unshift(v):y.transparent===!0?l.unshift(v):i.unshift(v)}function m(g,x){i.length>1&&i.sort(g||v1),s.length>1&&s.sort(x||b0),l.length>1&&l.sort(x||b0)}function _(){for(let g=t,x=r.length;g<x;g++){const y=r[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:p,finish:_,sort:m}}function S1(){let r=new WeakMap;function t(s,l){const c=r.get(s);let h;return c===void 0?(h=new T0,r.set(s,[h])):l>=c.length?(h=new T0,c.push(h)):h=c[l],h}function i(){r=new WeakMap}return{get:t,dispose:i}}function x1(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new J,color:new fe};break;case"SpotLight":i={position:new J,direction:new J,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new J,color:new fe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new J,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":i={color:new fe,position:new J,halfWidth:new J,halfHeight:new J};break}return r[t.id]=i,i}}}function y1(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let M1=0;function E1(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function b1(r){const t=new x1,i=y1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new J);const l=new J,c=new Ye,h=new Ye;function d(m){let _=0,g=0,x=0;for(let w=0;w<9;w++)s.probe[w].set(0,0,0);let y=0,E=0,A=0,M=0,v=0,O=0,L=0,D=0,et=0,H=0,z=0;m.sort(E1);for(let w=0,C=m.length;w<C;w++){const B=m[w],ot=B.color,st=B.intensity,gt=B.distance,dt=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)_+=ot.r*st,g+=ot.g*st,x+=ot.b*st;else if(B.isLightProbe){for(let P=0;P<9;P++)s.probe[P].addScaledVector(B.sh.coefficients[P],st);z++}else if(B.isDirectionalLight){const P=t.get(B);if(P.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const W=B.shadow,Z=i.get(B);Z.shadowIntensity=W.intensity,Z.shadowBias=W.bias,Z.shadowNormalBias=W.normalBias,Z.shadowRadius=W.radius,Z.shadowMapSize=W.mapSize,s.directionalShadow[y]=Z,s.directionalShadowMap[y]=dt,s.directionalShadowMatrix[y]=B.shadow.matrix,O++}s.directional[y]=P,y++}else if(B.isSpotLight){const P=t.get(B);P.position.setFromMatrixPosition(B.matrixWorld),P.color.copy(ot).multiplyScalar(st),P.distance=gt,P.coneCos=Math.cos(B.angle),P.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),P.decay=B.decay,s.spot[A]=P;const W=B.shadow;if(B.map&&(s.spotLightMap[et]=B.map,et++,W.updateMatrices(B),B.castShadow&&H++),s.spotLightMatrix[A]=W.matrix,B.castShadow){const Z=i.get(B);Z.shadowIntensity=W.intensity,Z.shadowBias=W.bias,Z.shadowNormalBias=W.normalBias,Z.shadowRadius=W.radius,Z.shadowMapSize=W.mapSize,s.spotShadow[A]=Z,s.spotShadowMap[A]=dt,D++}A++}else if(B.isRectAreaLight){const P=t.get(B);P.color.copy(ot).multiplyScalar(st),P.halfWidth.set(B.width*.5,0,0),P.halfHeight.set(0,B.height*.5,0),s.rectArea[M]=P,M++}else if(B.isPointLight){const P=t.get(B);if(P.color.copy(B.color).multiplyScalar(B.intensity),P.distance=B.distance,P.decay=B.decay,B.castShadow){const W=B.shadow,Z=i.get(B);Z.shadowIntensity=W.intensity,Z.shadowBias=W.bias,Z.shadowNormalBias=W.normalBias,Z.shadowRadius=W.radius,Z.shadowMapSize=W.mapSize,Z.shadowCameraNear=W.camera.near,Z.shadowCameraFar=W.camera.far,s.pointShadow[E]=Z,s.pointShadowMap[E]=dt,s.pointShadowMatrix[E]=B.shadow.matrix,L++}s.point[E]=P,E++}else if(B.isHemisphereLight){const P=t.get(B);P.skyColor.copy(B.color).multiplyScalar(st),P.groundColor.copy(B.groundColor).multiplyScalar(st),s.hemi[v]=P,v++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Nt.LTC_FLOAT_1,s.rectAreaLTC2=Nt.LTC_FLOAT_2):(s.rectAreaLTC1=Nt.LTC_HALF_1,s.rectAreaLTC2=Nt.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=g,s.ambient[2]=x;const Y=s.hash;(Y.directionalLength!==y||Y.pointLength!==E||Y.spotLength!==A||Y.rectAreaLength!==M||Y.hemiLength!==v||Y.numDirectionalShadows!==O||Y.numPointShadows!==L||Y.numSpotShadows!==D||Y.numSpotMaps!==et||Y.numLightProbes!==z)&&(s.directional.length=y,s.spot.length=A,s.rectArea.length=M,s.point.length=E,s.hemi.length=v,s.directionalShadow.length=O,s.directionalShadowMap.length=O,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=O,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=D+et-H,s.spotLightMap.length=et,s.numSpotLightShadowsWithMaps=H,s.numLightProbes=z,Y.directionalLength=y,Y.pointLength=E,Y.spotLength=A,Y.rectAreaLength=M,Y.hemiLength=v,Y.numDirectionalShadows=O,Y.numPointShadows=L,Y.numSpotShadows=D,Y.numSpotMaps=et,Y.numLightProbes=z,s.version=M1++)}function p(m,_){let g=0,x=0,y=0,E=0,A=0;const M=_.matrixWorldInverse;for(let v=0,O=m.length;v<O;v++){const L=m[v];if(L.isDirectionalLight){const D=s.directional[g];D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),g++}else if(L.isSpotLight){const D=s.spot[y];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(M),D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),y++}else if(L.isRectAreaLight){const D=s.rectArea[E];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(M),h.identity(),c.copy(L.matrixWorld),c.premultiply(M),h.extractRotation(c),D.halfWidth.set(L.width*.5,0,0),D.halfHeight.set(0,L.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),E++}else if(L.isPointLight){const D=s.point[x];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(M),x++}else if(L.isHemisphereLight){const D=s.hemi[A];D.direction.setFromMatrixPosition(L.matrixWorld),D.direction.transformDirection(M),A++}}}return{setup:d,setupView:p,state:s}}function A0(r){const t=new b1(r),i=[],s=[];function l(_){m.camera=_,i.length=0,s.length=0}function c(_){i.push(_)}function h(_){s.push(_)}function d(){t.setup(i)}function p(_){t.setupView(i,_)}const m={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:d,setupLightsView:p,pushLight:c,pushShadow:h}}function T1(r){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new A0(r),t.set(l,[d])):c>=h.length?(d=new A0(r),h.push(d)):d=h[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}class A1 extends Br{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=yy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class R1 extends Br{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const C1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,w1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function D1(r,t,i){let s=new Nd;const l=new le,c=new le,h=new Qe,d=new A1({depthPacking:My}),p=new R1,m={},_=i.maxTextureSize,g={[Qa]:Vn,[Vn]:Qa,[Oi]:Oi},x=new Ja({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:C1,fragmentShader:w1}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const E=new pi;E.setAttribute("position",new Ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new zi(E,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=k0;let v=this.type;this.render=function(H,z,Y){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||H.length===0)return;const w=r.getRenderTarget(),C=r.getActiveCubeFace(),B=r.getActiveMipmapLevel(),ot=r.state;ot.setBlending(Za),ot.buffers.color.setClear(1,1,1,1),ot.buffers.depth.setTest(!0),ot.setScissorTest(!1);const st=v!==ua&&this.type===ua,gt=v===ua&&this.type!==ua;for(let dt=0,P=H.length;dt<P;dt++){const W=H[dt],Z=W.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;l.copy(Z.mapSize);const xt=Z.getFrameExtents();if(l.multiply(xt),c.copy(Z.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/xt.x),l.x=c.x*xt.x,Z.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/xt.y),l.y=c.y*xt.y,Z.mapSize.y=c.y)),Z.map===null||st===!0||gt===!0){const N=this.type!==ua?{minFilter:Ri,magFilter:Ri}:{};Z.map!==null&&Z.map.dispose(),Z.map=new ws(l.x,l.y,N),Z.map.texture.name=W.name+".shadowMap",Z.camera.updateProjectionMatrix()}r.setRenderTarget(Z.map),r.clear();const bt=Z.getViewportCount();for(let N=0;N<bt;N++){const nt=Z.getViewport(N);h.set(c.x*nt.x,c.y*nt.y,c.x*nt.z,c.y*nt.w),ot.viewport(h),Z.updateMatrices(W,N),s=Z.getFrustum(),D(z,Y,Z.camera,W,this.type)}Z.isPointLightShadow!==!0&&this.type===ua&&O(Z,Y),Z.needsUpdate=!1}v=this.type,M.needsUpdate=!1,r.setRenderTarget(w,C,B)};function O(H,z){const Y=t.update(A);x.defines.VSM_SAMPLES!==H.blurSamples&&(x.defines.VSM_SAMPLES=H.blurSamples,y.defines.VSM_SAMPLES=H.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new ws(l.x,l.y)),x.uniforms.shadow_pass.value=H.map.texture,x.uniforms.resolution.value=H.mapSize,x.uniforms.radius.value=H.radius,r.setRenderTarget(H.mapPass),r.clear(),r.renderBufferDirect(z,null,Y,x,A,null),y.uniforms.shadow_pass.value=H.mapPass.texture,y.uniforms.resolution.value=H.mapSize,y.uniforms.radius.value=H.radius,r.setRenderTarget(H.map),r.clear(),r.renderBufferDirect(z,null,Y,y,A,null)}function L(H,z,Y,w){let C=null;const B=Y.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(B!==void 0)C=B;else if(C=Y.isPointLight===!0?p:d,r.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0){const ot=C.uuid,st=z.uuid;let gt=m[ot];gt===void 0&&(gt={},m[ot]=gt);let dt=gt[st];dt===void 0&&(dt=C.clone(),gt[st]=dt,z.addEventListener("dispose",et)),C=dt}if(C.visible=z.visible,C.wireframe=z.wireframe,w===ua?C.side=z.shadowSide!==null?z.shadowSide:z.side:C.side=z.shadowSide!==null?z.shadowSide:g[z.side],C.alphaMap=z.alphaMap,C.alphaTest=z.alphaTest,C.map=z.map,C.clipShadows=z.clipShadows,C.clippingPlanes=z.clippingPlanes,C.clipIntersection=z.clipIntersection,C.displacementMap=z.displacementMap,C.displacementScale=z.displacementScale,C.displacementBias=z.displacementBias,C.wireframeLinewidth=z.wireframeLinewidth,C.linewidth=z.linewidth,Y.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ot=r.properties.get(C);ot.light=Y}return C}function D(H,z,Y,w,C){if(H.visible===!1)return;if(H.layers.test(z.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&C===ua)&&(!H.frustumCulled||s.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,H.matrixWorld);const st=t.update(H),gt=H.material;if(Array.isArray(gt)){const dt=st.groups;for(let P=0,W=dt.length;P<W;P++){const Z=dt[P],xt=gt[Z.materialIndex];if(xt&&xt.visible){const bt=L(H,xt,w,C);H.onBeforeShadow(r,H,z,Y,st,bt,Z),r.renderBufferDirect(Y,null,st,bt,H,Z),H.onAfterShadow(r,H,z,Y,st,bt,Z)}}}else if(gt.visible){const dt=L(H,gt,w,C);H.onBeforeShadow(r,H,z,Y,st,dt,null),r.renderBufferDirect(Y,null,st,dt,H,null),H.onAfterShadow(r,H,z,Y,st,dt,null)}}const ot=H.children;for(let st=0,gt=ot.length;st<gt;st++)D(ot[st],z,Y,w,C)}function et(H){H.target.removeEventListener("dispose",et);for(const Y in m){const w=m[Y],C=H.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}const U1={[Bh]:Fh,[Hh]:kh,[Gh]:Xh,[Ur]:Vh,[Fh]:Bh,[kh]:Hh,[Xh]:Gh,[Vh]:Ur};function L1(r,t){function i(){let G=!1;const Rt=new Qe;let lt=null;const _t=new Qe(0,0,0,0);return{setMask:function(Ct){lt!==Ct&&!G&&(r.colorMask(Ct,Ct,Ct,Ct),lt=Ct)},setLocked:function(Ct){G=Ct},setClear:function(Ct,Lt,$t,Xe,rn){rn===!0&&(Ct*=Xe,Lt*=Xe,$t*=Xe),Rt.set(Ct,Lt,$t,Xe),_t.equals(Rt)===!1&&(r.clearColor(Ct,Lt,$t,Xe),_t.copy(Rt))},reset:function(){G=!1,lt=null,_t.set(-1,0,0,0)}}}function s(){let G=!1,Rt=!1,lt=null,_t=null,Ct=null;return{setReversed:function(Lt){if(Rt!==Lt){const $t=t.get("EXT_clip_control");Rt?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT);const Xe=Ct;Ct=null,this.setClear(Xe)}Rt=Lt},getReversed:function(){return Rt},setTest:function(Lt){Lt?vt(r.DEPTH_TEST):Ht(r.DEPTH_TEST)},setMask:function(Lt){lt!==Lt&&!G&&(r.depthMask(Lt),lt=Lt)},setFunc:function(Lt){if(Rt&&(Lt=U1[Lt]),_t!==Lt){switch(Lt){case Bh:r.depthFunc(r.NEVER);break;case Fh:r.depthFunc(r.ALWAYS);break;case Hh:r.depthFunc(r.LESS);break;case Ur:r.depthFunc(r.LEQUAL);break;case Gh:r.depthFunc(r.EQUAL);break;case Vh:r.depthFunc(r.GEQUAL);break;case kh:r.depthFunc(r.GREATER);break;case Xh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}_t=Lt}},setLocked:function(Lt){G=Lt},setClear:function(Lt){Ct!==Lt&&(Rt&&(Lt=1-Lt),r.clearDepth(Lt),Ct=Lt)},reset:function(){G=!1,lt=null,_t=null,Ct=null,Rt=!1}}}function l(){let G=!1,Rt=null,lt=null,_t=null,Ct=null,Lt=null,$t=null,Xe=null,rn=null;return{setTest:function(Me){G||(Me?vt(r.STENCIL_TEST):Ht(r.STENCIL_TEST))},setMask:function(Me){Rt!==Me&&!G&&(r.stencilMask(Me),Rt=Me)},setFunc:function(Me,mn,mi){(lt!==Me||_t!==mn||Ct!==mi)&&(r.stencilFunc(Me,mn,mi),lt=Me,_t=mn,Ct=mi)},setOp:function(Me,mn,mi){(Lt!==Me||$t!==mn||Xe!==mi)&&(r.stencilOp(Me,mn,mi),Lt=Me,$t=mn,Xe=mi)},setLocked:function(Me){G=Me},setClear:function(Me){rn!==Me&&(r.clearStencil(Me),rn=Me)},reset:function(){G=!1,Rt=null,lt=null,_t=null,Ct=null,Lt=null,$t=null,Xe=null,rn=null}}}const c=new i,h=new s,d=new l,p=new WeakMap,m=new WeakMap;let _={},g={},x=new WeakMap,y=[],E=null,A=!1,M=null,v=null,O=null,L=null,D=null,et=null,H=null,z=new fe(0,0,0),Y=0,w=!1,C=null,B=null,ot=null,st=null,gt=null;const dt=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,W=0;const Z=r.getParameter(r.VERSION);Z.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(Z)[1]),P=W>=1):Z.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),P=W>=2);let xt=null,bt={};const N=r.getParameter(r.SCISSOR_BOX),nt=r.getParameter(r.VIEWPORT),St=new Qe().fromArray(N),j=new Qe().fromArray(nt);function ct(G,Rt,lt,_t){const Ct=new Uint8Array(4),Lt=r.createTexture();r.bindTexture(G,Lt),r.texParameteri(G,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(G,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let $t=0;$t<lt;$t++)G===r.TEXTURE_3D||G===r.TEXTURE_2D_ARRAY?r.texImage3D(Rt,0,r.RGBA,1,1,_t,0,r.RGBA,r.UNSIGNED_BYTE,Ct):r.texImage2D(Rt+$t,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ct);return Lt}const Mt={};Mt[r.TEXTURE_2D]=ct(r.TEXTURE_2D,r.TEXTURE_2D,1),Mt[r.TEXTURE_CUBE_MAP]=ct(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[r.TEXTURE_2D_ARRAY]=ct(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Mt[r.TEXTURE_3D]=ct(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),vt(r.DEPTH_TEST),h.setFunc(Ur),ue(!1),me(D_),vt(r.CULL_FACE),X(Za);function vt(G){_[G]!==!0&&(r.enable(G),_[G]=!0)}function Ht(G){_[G]!==!1&&(r.disable(G),_[G]=!1)}function Ft(G,Rt){return g[G]!==Rt?(r.bindFramebuffer(G,Rt),g[G]=Rt,G===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Rt),G===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Rt),!0):!1}function ne(G,Rt){let lt=y,_t=!1;if(G){lt=x.get(Rt),lt===void 0&&(lt=[],x.set(Rt,lt));const Ct=G.textures;if(lt.length!==Ct.length||lt[0]!==r.COLOR_ATTACHMENT0){for(let Lt=0,$t=Ct.length;Lt<$t;Lt++)lt[Lt]=r.COLOR_ATTACHMENT0+Lt;lt.length=Ct.length,_t=!0}}else lt[0]!==r.BACK&&(lt[0]=r.BACK,_t=!0);_t&&r.drawBuffers(lt)}function Le(G){return E!==G?(r.useProgram(G),E=G,!0):!1}const he={[bs]:r.FUNC_ADD,[jx]:r.FUNC_SUBTRACT,[Zx]:r.FUNC_REVERSE_SUBTRACT};he[Kx]=r.MIN,he[Qx]=r.MAX;const ke={[Jx]:r.ZERO,[$x]:r.ONE,[ty]:r.SRC_COLOR,[zh]:r.SRC_ALPHA,[ry]:r.SRC_ALPHA_SATURATE,[ay]:r.DST_COLOR,[ny]:r.DST_ALPHA,[ey]:r.ONE_MINUS_SRC_COLOR,[Ih]:r.ONE_MINUS_SRC_ALPHA,[sy]:r.ONE_MINUS_DST_COLOR,[iy]:r.ONE_MINUS_DST_ALPHA,[oy]:r.CONSTANT_COLOR,[ly]:r.ONE_MINUS_CONSTANT_COLOR,[cy]:r.CONSTANT_ALPHA,[uy]:r.ONE_MINUS_CONSTANT_ALPHA};function X(G,Rt,lt,_t,Ct,Lt,$t,Xe,rn,Me){if(G===Za){A===!0&&(Ht(r.BLEND),A=!1);return}if(A===!1&&(vt(r.BLEND),A=!0),G!==Yx){if(G!==M||Me!==w){if((v!==bs||D!==bs)&&(r.blendEquation(r.FUNC_ADD),v=bs,D=bs),Me)switch(G){case Cr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case U_:r.blendFunc(r.ONE,r.ONE);break;case L_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case N_:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Cr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case U_:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case L_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case N_:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}O=null,L=null,et=null,H=null,z.set(0,0,0),Y=0,M=G,w=Me}return}Ct=Ct||Rt,Lt=Lt||lt,$t=$t||_t,(Rt!==v||Ct!==D)&&(r.blendEquationSeparate(he[Rt],he[Ct]),v=Rt,D=Ct),(lt!==O||_t!==L||Lt!==et||$t!==H)&&(r.blendFuncSeparate(ke[lt],ke[_t],ke[Lt],ke[$t]),O=lt,L=_t,et=Lt,H=$t),(Xe.equals(z)===!1||rn!==Y)&&(r.blendColor(Xe.r,Xe.g,Xe.b,rn),z.copy(Xe),Y=rn),M=G,w=!1}function En(G,Rt){G.side===Oi?Ht(r.CULL_FACE):vt(r.CULL_FACE);let lt=G.side===Vn;Rt&&(lt=!lt),ue(lt),G.blending===Cr&&G.transparent===!1?X(Za):X(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),h.setFunc(G.depthFunc),h.setTest(G.depthTest),h.setMask(G.depthWrite),c.setMask(G.colorWrite);const _t=G.stencilWrite;d.setTest(_t),_t&&(d.setMask(G.stencilWriteMask),d.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),d.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Ce(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?vt(r.SAMPLE_ALPHA_TO_COVERAGE):Ht(r.SAMPLE_ALPHA_TO_COVERAGE)}function ue(G){C!==G&&(G?r.frontFace(r.CW):r.frontFace(r.CCW),C=G)}function me(G){G!==Xx?(vt(r.CULL_FACE),G!==B&&(G===D_?r.cullFace(r.BACK):G===Wx?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ht(r.CULL_FACE),B=G}function Zt(G){G!==ot&&(P&&r.lineWidth(G),ot=G)}function Ce(G,Rt,lt){G?(vt(r.POLYGON_OFFSET_FILL),(st!==Rt||gt!==lt)&&(r.polygonOffset(Rt,lt),st=Rt,gt=lt)):Ht(r.POLYGON_OFFSET_FILL)}function Yt(G){G?vt(r.SCISSOR_TEST):Ht(r.SCISSOR_TEST)}function U(G){G===void 0&&(G=r.TEXTURE0+dt-1),xt!==G&&(r.activeTexture(G),xt=G)}function T(G,Rt,lt){lt===void 0&&(xt===null?lt=r.TEXTURE0+dt-1:lt=xt);let _t=bt[lt];_t===void 0&&(_t={type:void 0,texture:void 0},bt[lt]=_t),(_t.type!==G||_t.texture!==Rt)&&(xt!==lt&&(r.activeTexture(lt),xt=lt),r.bindTexture(G,Rt||Mt[G]),_t.type=G,_t.texture=Rt)}function tt(){const G=bt[xt];G!==void 0&&G.type!==void 0&&(r.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function ft(){try{r.compressedTexImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function yt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function pt(){try{r.texSubImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Xt(){try{r.texSubImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ut(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Pt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ge(){try{r.texStorage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function At(){try{r.texStorage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function zt(){try{r.texImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function jt(){try{r.texImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Wt(G){St.equals(G)===!1&&(r.scissor(G.x,G.y,G.z,G.w),St.copy(G))}function Ot(G){j.equals(G)===!1&&(r.viewport(G.x,G.y,G.z,G.w),j.copy(G))}function Jt(G,Rt){let lt=m.get(Rt);lt===void 0&&(lt=new WeakMap,m.set(Rt,lt));let _t=lt.get(G);_t===void 0&&(_t=r.getUniformBlockIndex(Rt,G.name),lt.set(G,_t))}function ae(G,Rt){const _t=m.get(Rt).get(G);p.get(Rt)!==_t&&(r.uniformBlockBinding(Rt,_t,G.__bindingPointIndex),p.set(Rt,_t))}function Ne(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},xt=null,bt={},g={},x=new WeakMap,y=[],E=null,A=!1,M=null,v=null,O=null,L=null,D=null,et=null,H=null,z=new fe(0,0,0),Y=0,w=!1,C=null,B=null,ot=null,st=null,gt=null,St.set(0,0,r.canvas.width,r.canvas.height),j.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:vt,disable:Ht,bindFramebuffer:Ft,drawBuffers:ne,useProgram:Le,setBlending:X,setMaterial:En,setFlipSided:ue,setCullFace:me,setLineWidth:Zt,setPolygonOffset:Ce,setScissorTest:Yt,activeTexture:U,bindTexture:T,unbindTexture:tt,compressedTexImage2D:ft,compressedTexImage3D:yt,texImage2D:zt,texImage3D:jt,updateUBOMapping:Jt,uniformBlockBinding:ae,texStorage2D:ge,texStorage3D:At,texSubImage2D:pt,texSubImage3D:Xt,compressedTexSubImage2D:Ut,compressedTexSubImage3D:Pt,scissor:Wt,viewport:Ot,reset:Ne}}function R0(r,t,i,s){const l=N1(s);switch(i){case j0:return r*t;case K0:return r*t;case Q0:return r*t*2;case J0:return r*t/l.components*l.byteLength;case wd:return r*t/l.components*l.byteLength;case $0:return r*t*2/l.components*l.byteLength;case Dd:return r*t*2/l.components*l.byteLength;case Z0:return r*t*3/l.components*l.byteLength;case Ai:return r*t*4/l.components*l.byteLength;case Ud:return r*t*4/l.components*l.byteLength;case Rc:case Cc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case wc:case Dc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Kh:case Jh:return Math.max(r,16)*Math.max(t,8)/4;case Zh:case Qh:return Math.max(r,8)*Math.max(t,8)/2;case $h:case td:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ed:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case nd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case id:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case ad:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case sd:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case rd:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case od:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case ld:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case cd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case ud:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case fd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case hd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case dd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case pd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case md:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Uc:case gd:case _d:return Math.ceil(r/4)*Math.ceil(t/4)*16;case tv:case vd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Sd:case xd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function N1(r){switch(r){case pa:case W0:return{byteLength:1,components:1};case Vo:case q0:case ko:return{byteLength:2,components:1};case Rd:case Cd:return{byteLength:2,components:4};case Cs:case Ad:case fa:return{byteLength:4,components:1};case Y0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function O1(r,t,i,s,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new le,_=new WeakMap;let g;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(U,T){return y?new OffscreenCanvas(U,T):Pc("canvas")}function A(U,T,tt){let ft=1;const yt=Yt(U);if((yt.width>tt||yt.height>tt)&&(ft=tt/Math.max(yt.width,yt.height)),ft<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const pt=Math.floor(ft*yt.width),Xt=Math.floor(ft*yt.height);g===void 0&&(g=E(pt,Xt));const Ut=T?E(pt,Xt):g;return Ut.width=pt,Ut.height=Xt,Ut.getContext("2d").drawImage(U,0,0,pt,Xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+yt.width+"x"+yt.height+") to ("+pt+"x"+Xt+")."),Ut}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+yt.width+"x"+yt.height+")."),U;return U}function M(U){return U.generateMipmaps}function v(U){r.generateMipmap(U)}function O(U){return U.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?r.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(U,T,tt,ft,yt=!1){if(U!==null){if(r[U]!==void 0)return r[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let pt=T;if(T===r.RED&&(tt===r.FLOAT&&(pt=r.R32F),tt===r.HALF_FLOAT&&(pt=r.R16F),tt===r.UNSIGNED_BYTE&&(pt=r.R8)),T===r.RED_INTEGER&&(tt===r.UNSIGNED_BYTE&&(pt=r.R8UI),tt===r.UNSIGNED_SHORT&&(pt=r.R16UI),tt===r.UNSIGNED_INT&&(pt=r.R32UI),tt===r.BYTE&&(pt=r.R8I),tt===r.SHORT&&(pt=r.R16I),tt===r.INT&&(pt=r.R32I)),T===r.RG&&(tt===r.FLOAT&&(pt=r.RG32F),tt===r.HALF_FLOAT&&(pt=r.RG16F),tt===r.UNSIGNED_BYTE&&(pt=r.RG8)),T===r.RG_INTEGER&&(tt===r.UNSIGNED_BYTE&&(pt=r.RG8UI),tt===r.UNSIGNED_SHORT&&(pt=r.RG16UI),tt===r.UNSIGNED_INT&&(pt=r.RG32UI),tt===r.BYTE&&(pt=r.RG8I),tt===r.SHORT&&(pt=r.RG16I),tt===r.INT&&(pt=r.RG32I)),T===r.RGB_INTEGER&&(tt===r.UNSIGNED_BYTE&&(pt=r.RGB8UI),tt===r.UNSIGNED_SHORT&&(pt=r.RGB16UI),tt===r.UNSIGNED_INT&&(pt=r.RGB32UI),tt===r.BYTE&&(pt=r.RGB8I),tt===r.SHORT&&(pt=r.RGB16I),tt===r.INT&&(pt=r.RGB32I)),T===r.RGBA_INTEGER&&(tt===r.UNSIGNED_BYTE&&(pt=r.RGBA8UI),tt===r.UNSIGNED_SHORT&&(pt=r.RGBA16UI),tt===r.UNSIGNED_INT&&(pt=r.RGBA32UI),tt===r.BYTE&&(pt=r.RGBA8I),tt===r.SHORT&&(pt=r.RGBA16I),tt===r.INT&&(pt=r.RGBA32I)),T===r.RGB&&tt===r.UNSIGNED_INT_5_9_9_9_REV&&(pt=r.RGB9_E5),T===r.RGBA){const Xt=yt?Hc:Ee.getTransfer(ft);tt===r.FLOAT&&(pt=r.RGBA32F),tt===r.HALF_FLOAT&&(pt=r.RGBA16F),tt===r.UNSIGNED_BYTE&&(pt=Xt===Be?r.SRGB8_ALPHA8:r.RGBA8),tt===r.UNSIGNED_SHORT_4_4_4_4&&(pt=r.RGBA4),tt===r.UNSIGNED_SHORT_5_5_5_1&&(pt=r.RGB5_A1)}return(pt===r.R16F||pt===r.R32F||pt===r.RG16F||pt===r.RG32F||pt===r.RGBA16F||pt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),pt}function D(U,T){let tt;return U?T===null||T===Cs||T===Or?tt=r.DEPTH24_STENCIL8:T===fa?tt=r.DEPTH32F_STENCIL8:T===Vo&&(tt=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Cs||T===Or?tt=r.DEPTH_COMPONENT24:T===fa?tt=r.DEPTH_COMPONENT32F:T===Vo&&(tt=r.DEPTH_COMPONENT16),tt}function et(U,T){return M(U)===!0||U.isFramebufferTexture&&U.minFilter!==Ri&&U.minFilter!==Pi?Math.log2(Math.max(T.width,T.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?T.mipmaps.length:1}function H(U){const T=U.target;T.removeEventListener("dispose",H),Y(T),T.isVideoTexture&&_.delete(T)}function z(U){const T=U.target;T.removeEventListener("dispose",z),C(T)}function Y(U){const T=s.get(U);if(T.__webglInit===void 0)return;const tt=U.source,ft=x.get(tt);if(ft){const yt=ft[T.__cacheKey];yt.usedTimes--,yt.usedTimes===0&&w(U),Object.keys(ft).length===0&&x.delete(tt)}s.remove(U)}function w(U){const T=s.get(U);r.deleteTexture(T.__webglTexture);const tt=U.source,ft=x.get(tt);delete ft[T.__cacheKey],h.memory.textures--}function C(U){const T=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(T.__webglFramebuffer[ft]))for(let yt=0;yt<T.__webglFramebuffer[ft].length;yt++)r.deleteFramebuffer(T.__webglFramebuffer[ft][yt]);else r.deleteFramebuffer(T.__webglFramebuffer[ft]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[ft])}else{if(Array.isArray(T.__webglFramebuffer))for(let ft=0;ft<T.__webglFramebuffer.length;ft++)r.deleteFramebuffer(T.__webglFramebuffer[ft]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ft=0;ft<T.__webglColorRenderbuffer.length;ft++)T.__webglColorRenderbuffer[ft]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[ft]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const tt=U.textures;for(let ft=0,yt=tt.length;ft<yt;ft++){const pt=s.get(tt[ft]);pt.__webglTexture&&(r.deleteTexture(pt.__webglTexture),h.memory.textures--),s.remove(tt[ft])}s.remove(U)}let B=0;function ot(){B=0}function st(){const U=B;return U>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),B+=1,U}function gt(U){const T=[];return T.push(U.wrapS),T.push(U.wrapT),T.push(U.wrapR||0),T.push(U.magFilter),T.push(U.minFilter),T.push(U.anisotropy),T.push(U.internalFormat),T.push(U.format),T.push(U.type),T.push(U.generateMipmaps),T.push(U.premultiplyAlpha),T.push(U.flipY),T.push(U.unpackAlignment),T.push(U.colorSpace),T.join()}function dt(U,T){const tt=s.get(U);if(U.isVideoTexture&&Zt(U),U.isRenderTargetTexture===!1&&U.version>0&&tt.__version!==U.version){const ft=U.image;if(ft===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(tt,U,T);return}}i.bindTexture(r.TEXTURE_2D,tt.__webglTexture,r.TEXTURE0+T)}function P(U,T){const tt=s.get(U);if(U.version>0&&tt.__version!==U.version){j(tt,U,T);return}i.bindTexture(r.TEXTURE_2D_ARRAY,tt.__webglTexture,r.TEXTURE0+T)}function W(U,T){const tt=s.get(U);if(U.version>0&&tt.__version!==U.version){j(tt,U,T);return}i.bindTexture(r.TEXTURE_3D,tt.__webglTexture,r.TEXTURE0+T)}function Z(U,T){const tt=s.get(U);if(U.version>0&&tt.__version!==U.version){ct(tt,U,T);return}i.bindTexture(r.TEXTURE_CUBE_MAP,tt.__webglTexture,r.TEXTURE0+T)}const xt={[Yh]:r.REPEAT,[As]:r.CLAMP_TO_EDGE,[jh]:r.MIRRORED_REPEAT},bt={[Ri]:r.NEAREST,[xy]:r.NEAREST_MIPMAP_NEAREST,[nc]:r.NEAREST_MIPMAP_LINEAR,[Pi]:r.LINEAR,[ah]:r.LINEAR_MIPMAP_NEAREST,[Rs]:r.LINEAR_MIPMAP_LINEAR},N={[by]:r.NEVER,[Dy]:r.ALWAYS,[Ty]:r.LESS,[nv]:r.LEQUAL,[Ay]:r.EQUAL,[wy]:r.GEQUAL,[Ry]:r.GREATER,[Cy]:r.NOTEQUAL};function nt(U,T){if(T.type===fa&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Pi||T.magFilter===ah||T.magFilter===nc||T.magFilter===Rs||T.minFilter===Pi||T.minFilter===ah||T.minFilter===nc||T.minFilter===Rs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(U,r.TEXTURE_WRAP_S,xt[T.wrapS]),r.texParameteri(U,r.TEXTURE_WRAP_T,xt[T.wrapT]),(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)&&r.texParameteri(U,r.TEXTURE_WRAP_R,xt[T.wrapR]),r.texParameteri(U,r.TEXTURE_MAG_FILTER,bt[T.magFilter]),r.texParameteri(U,r.TEXTURE_MIN_FILTER,bt[T.minFilter]),T.compareFunction&&(r.texParameteri(U,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(U,r.TEXTURE_COMPARE_FUNC,N[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ri||T.minFilter!==nc&&T.minFilter!==Rs||T.type===fa&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const tt=t.get("EXT_texture_filter_anisotropic");r.texParameterf(U,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function St(U,T){let tt=!1;U.__webglInit===void 0&&(U.__webglInit=!0,T.addEventListener("dispose",H));const ft=T.source;let yt=x.get(ft);yt===void 0&&(yt={},x.set(ft,yt));const pt=gt(T);if(pt!==U.__cacheKey){yt[pt]===void 0&&(yt[pt]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,tt=!0),yt[pt].usedTimes++;const Xt=yt[U.__cacheKey];Xt!==void 0&&(yt[U.__cacheKey].usedTimes--,Xt.usedTimes===0&&w(T)),U.__cacheKey=pt,U.__webglTexture=yt[pt].texture}return tt}function j(U,T,tt){let ft=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ft=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ft=r.TEXTURE_3D);const yt=St(U,T),pt=T.source;i.bindTexture(ft,U.__webglTexture,r.TEXTURE0+tt);const Xt=s.get(pt);if(pt.version!==Xt.__version||yt===!0){i.activeTexture(r.TEXTURE0+tt);const Ut=Ee.getPrimaries(Ee.workingColorSpace),Pt=T.colorSpace===ja?null:Ee.getPrimaries(T.colorSpace),ge=T.colorSpace===ja||Ut===Pt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);let At=A(T.image,!1,l.maxTextureSize);At=Ce(T,At);const zt=c.convert(T.format,T.colorSpace),jt=c.convert(T.type);let Wt=L(T.internalFormat,zt,jt,T.colorSpace,T.isVideoTexture);nt(ft,T);let Ot;const Jt=T.mipmaps,ae=T.isVideoTexture!==!0,Ne=Xt.__version===void 0||yt===!0,G=pt.dataReady,Rt=et(T,At);if(T.isDepthTexture)Wt=D(T.format===Pr,T.type),Ne&&(ae?i.texStorage2D(r.TEXTURE_2D,1,Wt,At.width,At.height):i.texImage2D(r.TEXTURE_2D,0,Wt,At.width,At.height,0,zt,jt,null));else if(T.isDataTexture)if(Jt.length>0){ae&&Ne&&i.texStorage2D(r.TEXTURE_2D,Rt,Wt,Jt[0].width,Jt[0].height);for(let lt=0,_t=Jt.length;lt<_t;lt++)Ot=Jt[lt],ae?G&&i.texSubImage2D(r.TEXTURE_2D,lt,0,0,Ot.width,Ot.height,zt,jt,Ot.data):i.texImage2D(r.TEXTURE_2D,lt,Wt,Ot.width,Ot.height,0,zt,jt,Ot.data);T.generateMipmaps=!1}else ae?(Ne&&i.texStorage2D(r.TEXTURE_2D,Rt,Wt,At.width,At.height),G&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,At.width,At.height,zt,jt,At.data)):i.texImage2D(r.TEXTURE_2D,0,Wt,At.width,At.height,0,zt,jt,At.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ae&&Ne&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Rt,Wt,Jt[0].width,Jt[0].height,At.depth);for(let lt=0,_t=Jt.length;lt<_t;lt++)if(Ot=Jt[lt],T.format!==Ai)if(zt!==null)if(ae){if(G)if(T.layerUpdates.size>0){const Ct=R0(Ot.width,Ot.height,T.format,T.type);for(const Lt of T.layerUpdates){const $t=Ot.data.subarray(Lt*Ct/Ot.data.BYTES_PER_ELEMENT,(Lt+1)*Ct/Ot.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,lt,0,0,Lt,Ot.width,Ot.height,1,zt,$t)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,lt,0,0,0,Ot.width,Ot.height,At.depth,zt,Ot.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,lt,Wt,Ot.width,Ot.height,At.depth,0,Ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ae?G&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,lt,0,0,0,Ot.width,Ot.height,At.depth,zt,jt,Ot.data):i.texImage3D(r.TEXTURE_2D_ARRAY,lt,Wt,Ot.width,Ot.height,At.depth,0,zt,jt,Ot.data)}else{ae&&Ne&&i.texStorage2D(r.TEXTURE_2D,Rt,Wt,Jt[0].width,Jt[0].height);for(let lt=0,_t=Jt.length;lt<_t;lt++)Ot=Jt[lt],T.format!==Ai?zt!==null?ae?G&&i.compressedTexSubImage2D(r.TEXTURE_2D,lt,0,0,Ot.width,Ot.height,zt,Ot.data):i.compressedTexImage2D(r.TEXTURE_2D,lt,Wt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?G&&i.texSubImage2D(r.TEXTURE_2D,lt,0,0,Ot.width,Ot.height,zt,jt,Ot.data):i.texImage2D(r.TEXTURE_2D,lt,Wt,Ot.width,Ot.height,0,zt,jt,Ot.data)}else if(T.isDataArrayTexture)if(ae){if(Ne&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Rt,Wt,At.width,At.height,At.depth),G)if(T.layerUpdates.size>0){const lt=R0(At.width,At.height,T.format,T.type);for(const _t of T.layerUpdates){const Ct=At.data.subarray(_t*lt/At.data.BYTES_PER_ELEMENT,(_t+1)*lt/At.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,_t,At.width,At.height,1,zt,jt,Ct)}T.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,zt,jt,At.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Wt,At.width,At.height,At.depth,0,zt,jt,At.data);else if(T.isData3DTexture)ae?(Ne&&i.texStorage3D(r.TEXTURE_3D,Rt,Wt,At.width,At.height,At.depth),G&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,zt,jt,At.data)):i.texImage3D(r.TEXTURE_3D,0,Wt,At.width,At.height,At.depth,0,zt,jt,At.data);else if(T.isFramebufferTexture){if(Ne)if(ae)i.texStorage2D(r.TEXTURE_2D,Rt,Wt,At.width,At.height);else{let lt=At.width,_t=At.height;for(let Ct=0;Ct<Rt;Ct++)i.texImage2D(r.TEXTURE_2D,Ct,Wt,lt,_t,0,zt,jt,null),lt>>=1,_t>>=1}}else if(Jt.length>0){if(ae&&Ne){const lt=Yt(Jt[0]);i.texStorage2D(r.TEXTURE_2D,Rt,Wt,lt.width,lt.height)}for(let lt=0,_t=Jt.length;lt<_t;lt++)Ot=Jt[lt],ae?G&&i.texSubImage2D(r.TEXTURE_2D,lt,0,0,zt,jt,Ot):i.texImage2D(r.TEXTURE_2D,lt,Wt,zt,jt,Ot);T.generateMipmaps=!1}else if(ae){if(Ne){const lt=Yt(At);i.texStorage2D(r.TEXTURE_2D,Rt,Wt,lt.width,lt.height)}G&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,zt,jt,At)}else i.texImage2D(r.TEXTURE_2D,0,Wt,zt,jt,At);M(T)&&v(ft),Xt.__version=pt.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function ct(U,T,tt){if(T.image.length!==6)return;const ft=St(U,T),yt=T.source;i.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+tt);const pt=s.get(yt);if(yt.version!==pt.__version||ft===!0){i.activeTexture(r.TEXTURE0+tt);const Xt=Ee.getPrimaries(Ee.workingColorSpace),Ut=T.colorSpace===ja?null:Ee.getPrimaries(T.colorSpace),Pt=T.colorSpace===ja||Xt===Ut?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);const ge=T.isCompressedTexture||T.image[0].isCompressedTexture,At=T.image[0]&&T.image[0].isDataTexture,zt=[];for(let _t=0;_t<6;_t++)!ge&&!At?zt[_t]=A(T.image[_t],!0,l.maxCubemapSize):zt[_t]=At?T.image[_t].image:T.image[_t],zt[_t]=Ce(T,zt[_t]);const jt=zt[0],Wt=c.convert(T.format,T.colorSpace),Ot=c.convert(T.type),Jt=L(T.internalFormat,Wt,Ot,T.colorSpace),ae=T.isVideoTexture!==!0,Ne=pt.__version===void 0||ft===!0,G=yt.dataReady;let Rt=et(T,jt);nt(r.TEXTURE_CUBE_MAP,T);let lt;if(ge){ae&&Ne&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Rt,Jt,jt.width,jt.height);for(let _t=0;_t<6;_t++){lt=zt[_t].mipmaps;for(let Ct=0;Ct<lt.length;Ct++){const Lt=lt[Ct];T.format!==Ai?Wt!==null?ae?G&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct,0,0,Lt.width,Lt.height,Wt,Lt.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct,Jt,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ae?G&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct,0,0,Lt.width,Lt.height,Wt,Ot,Lt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct,Jt,Lt.width,Lt.height,0,Wt,Ot,Lt.data)}}}else{if(lt=T.mipmaps,ae&&Ne){lt.length>0&&Rt++;const _t=Yt(zt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Rt,Jt,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(At){ae?G&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,zt[_t].width,zt[_t].height,Wt,Ot,zt[_t].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,Jt,zt[_t].width,zt[_t].height,0,Wt,Ot,zt[_t].data);for(let Ct=0;Ct<lt.length;Ct++){const $t=lt[Ct].image[_t].image;ae?G&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct+1,0,0,$t.width,$t.height,Wt,Ot,$t.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct+1,Jt,$t.width,$t.height,0,Wt,Ot,$t.data)}}else{ae?G&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Wt,Ot,zt[_t]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,Jt,Wt,Ot,zt[_t]);for(let Ct=0;Ct<lt.length;Ct++){const Lt=lt[Ct];ae?G&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct+1,0,0,Wt,Ot,Lt.image[_t]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct+1,Jt,Wt,Ot,Lt.image[_t])}}}M(T)&&v(r.TEXTURE_CUBE_MAP),pt.__version=yt.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function Mt(U,T,tt,ft,yt,pt){const Xt=c.convert(tt.format,tt.colorSpace),Ut=c.convert(tt.type),Pt=L(tt.internalFormat,Xt,Ut,tt.colorSpace),ge=s.get(T),At=s.get(tt);if(At.__renderTarget=T,!ge.__hasExternalTextures){const zt=Math.max(1,T.width>>pt),jt=Math.max(1,T.height>>pt);yt===r.TEXTURE_3D||yt===r.TEXTURE_2D_ARRAY?i.texImage3D(yt,pt,Pt,zt,jt,T.depth,0,Xt,Ut,null):i.texImage2D(yt,pt,Pt,zt,jt,0,Xt,Ut,null)}i.bindFramebuffer(r.FRAMEBUFFER,U),me(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ft,yt,At.__webglTexture,0,ue(T)):(yt===r.TEXTURE_2D||yt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&yt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ft,yt,At.__webglTexture,pt),i.bindFramebuffer(r.FRAMEBUFFER,null)}function vt(U,T,tt){if(r.bindRenderbuffer(r.RENDERBUFFER,U),T.depthBuffer){const ft=T.depthTexture,yt=ft&&ft.isDepthTexture?ft.type:null,pt=D(T.stencilBuffer,yt),Xt=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ut=ue(T);me(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ut,pt,T.width,T.height):tt?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ut,pt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,pt,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Xt,r.RENDERBUFFER,U)}else{const ft=T.textures;for(let yt=0;yt<ft.length;yt++){const pt=ft[yt],Xt=c.convert(pt.format,pt.colorSpace),Ut=c.convert(pt.type),Pt=L(pt.internalFormat,Xt,Ut,pt.colorSpace),ge=ue(T);tt&&me(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ge,Pt,T.width,T.height):me(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ge,Pt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Pt,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ht(U,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,U),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ft=s.get(T.depthTexture);ft.__renderTarget=T,(!ft.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),dt(T.depthTexture,0);const yt=ft.__webglTexture,pt=ue(T);if(T.depthTexture.format===wr)me(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,yt,0,pt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,yt,0);else if(T.depthTexture.format===Pr)me(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,yt,0,pt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,yt,0);else throw new Error("Unknown depthTexture format")}function Ft(U){const T=s.get(U),tt=U.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==U.depthTexture){const ft=U.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ft){const yt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ft.removeEventListener("dispose",yt)};ft.addEventListener("dispose",yt),T.__depthDisposeCallback=yt}T.__boundDepthTexture=ft}if(U.depthTexture&&!T.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");Ht(T.__webglFramebuffer,U)}else if(tt){T.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[ft]),T.__webglDepthbuffer[ft]===void 0)T.__webglDepthbuffer[ft]=r.createRenderbuffer(),vt(T.__webglDepthbuffer[ft],U,!1);else{const yt=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pt=T.__webglDepthbuffer[ft];r.bindRenderbuffer(r.RENDERBUFFER,pt),r.framebufferRenderbuffer(r.FRAMEBUFFER,yt,r.RENDERBUFFER,pt)}}else if(i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),vt(T.__webglDepthbuffer,U,!1);else{const ft=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,yt=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,yt),r.framebufferRenderbuffer(r.FRAMEBUFFER,ft,r.RENDERBUFFER,yt)}i.bindFramebuffer(r.FRAMEBUFFER,null)}function ne(U,T,tt){const ft=s.get(U);T!==void 0&&Mt(ft.__webglFramebuffer,U,U.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),tt!==void 0&&Ft(U)}function Le(U){const T=U.texture,tt=s.get(U),ft=s.get(T);U.addEventListener("dispose",z);const yt=U.textures,pt=U.isWebGLCubeRenderTarget===!0,Xt=yt.length>1;if(Xt||(ft.__webglTexture===void 0&&(ft.__webglTexture=r.createTexture()),ft.__version=T.version,h.memory.textures++),pt){tt.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(T.mipmaps&&T.mipmaps.length>0){tt.__webglFramebuffer[Ut]=[];for(let Pt=0;Pt<T.mipmaps.length;Pt++)tt.__webglFramebuffer[Ut][Pt]=r.createFramebuffer()}else tt.__webglFramebuffer[Ut]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){tt.__webglFramebuffer=[];for(let Ut=0;Ut<T.mipmaps.length;Ut++)tt.__webglFramebuffer[Ut]=r.createFramebuffer()}else tt.__webglFramebuffer=r.createFramebuffer();if(Xt)for(let Ut=0,Pt=yt.length;Ut<Pt;Ut++){const ge=s.get(yt[Ut]);ge.__webglTexture===void 0&&(ge.__webglTexture=r.createTexture(),h.memory.textures++)}if(U.samples>0&&me(U)===!1){tt.__webglMultisampledFramebuffer=r.createFramebuffer(),tt.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let Ut=0;Ut<yt.length;Ut++){const Pt=yt[Ut];tt.__webglColorRenderbuffer[Ut]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,tt.__webglColorRenderbuffer[Ut]);const ge=c.convert(Pt.format,Pt.colorSpace),At=c.convert(Pt.type),zt=L(Pt.internalFormat,ge,At,Pt.colorSpace,U.isXRRenderTarget===!0),jt=ue(U);r.renderbufferStorageMultisample(r.RENDERBUFFER,jt,zt,U.width,U.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ut,r.RENDERBUFFER,tt.__webglColorRenderbuffer[Ut])}r.bindRenderbuffer(r.RENDERBUFFER,null),U.depthBuffer&&(tt.__webglDepthRenderbuffer=r.createRenderbuffer(),vt(tt.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(pt){i.bindTexture(r.TEXTURE_CUBE_MAP,ft.__webglTexture),nt(r.TEXTURE_CUBE_MAP,T);for(let Ut=0;Ut<6;Ut++)if(T.mipmaps&&T.mipmaps.length>0)for(let Pt=0;Pt<T.mipmaps.length;Pt++)Mt(tt.__webglFramebuffer[Ut][Pt],U,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,Pt);else Mt(tt.__webglFramebuffer[Ut],U,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);M(T)&&v(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Xt){for(let Ut=0,Pt=yt.length;Ut<Pt;Ut++){const ge=yt[Ut],At=s.get(ge);i.bindTexture(r.TEXTURE_2D,At.__webglTexture),nt(r.TEXTURE_2D,ge),Mt(tt.__webglFramebuffer,U,ge,r.COLOR_ATTACHMENT0+Ut,r.TEXTURE_2D,0),M(ge)&&v(r.TEXTURE_2D)}i.unbindTexture()}else{let Ut=r.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ut=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ut,ft.__webglTexture),nt(Ut,T),T.mipmaps&&T.mipmaps.length>0)for(let Pt=0;Pt<T.mipmaps.length;Pt++)Mt(tt.__webglFramebuffer[Pt],U,T,r.COLOR_ATTACHMENT0,Ut,Pt);else Mt(tt.__webglFramebuffer,U,T,r.COLOR_ATTACHMENT0,Ut,0);M(T)&&v(Ut),i.unbindTexture()}U.depthBuffer&&Ft(U)}function he(U){const T=U.textures;for(let tt=0,ft=T.length;tt<ft;tt++){const yt=T[tt];if(M(yt)){const pt=O(U),Xt=s.get(yt).__webglTexture;i.bindTexture(pt,Xt),v(pt),i.unbindTexture()}}}const ke=[],X=[];function En(U){if(U.samples>0){if(me(U)===!1){const T=U.textures,tt=U.width,ft=U.height;let yt=r.COLOR_BUFFER_BIT;const pt=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Xt=s.get(U),Ut=T.length>1;if(Ut)for(let Pt=0;Pt<T.length;Pt++)i.bindFramebuffer(r.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Xt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer);for(let Pt=0;Pt<T.length;Pt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(yt|=r.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(yt|=r.STENCIL_BUFFER_BIT)),Ut){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Xt.__webglColorRenderbuffer[Pt]);const ge=s.get(T[Pt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ge,0)}r.blitFramebuffer(0,0,tt,ft,0,0,tt,ft,yt,r.NEAREST),p===!0&&(ke.length=0,X.length=0,ke.push(r.COLOR_ATTACHMENT0+Pt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(ke.push(pt),X.push(pt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,X)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ke))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ut)for(let Pt=0;Pt<T.length;Pt++){i.bindFramebuffer(r.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pt,r.RENDERBUFFER,Xt.__webglColorRenderbuffer[Pt]);const ge=s.get(T[Pt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Xt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pt,r.TEXTURE_2D,ge,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&p){const T=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function ue(U){return Math.min(l.maxSamples,U.samples)}function me(U){const T=s.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Zt(U){const T=h.render.frame;_.get(U)!==T&&(_.set(U,T),U.update())}function Ce(U,T){const tt=U.colorSpace,ft=U.format,yt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||tt!==Ir&&tt!==ja&&(Ee.getTransfer(tt)===Be?(ft!==Ai||yt!==pa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),T}function Yt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(m.width=U.naturalWidth||U.width,m.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(m.width=U.displayWidth,m.height=U.displayHeight):(m.width=U.width,m.height=U.height),m}this.allocateTextureUnit=st,this.resetTextureUnits=ot,this.setTexture2D=dt,this.setTexture2DArray=P,this.setTexture3D=W,this.setTextureCube=Z,this.rebindTextures=ne,this.setupRenderTarget=Le,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=En,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=me}function P1(r,t){function i(s,l=ja){let c;const h=Ee.getTransfer(l);if(s===pa)return r.UNSIGNED_BYTE;if(s===Rd)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Cd)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Y0)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===W0)return r.BYTE;if(s===q0)return r.SHORT;if(s===Vo)return r.UNSIGNED_SHORT;if(s===Ad)return r.INT;if(s===Cs)return r.UNSIGNED_INT;if(s===fa)return r.FLOAT;if(s===ko)return r.HALF_FLOAT;if(s===j0)return r.ALPHA;if(s===Z0)return r.RGB;if(s===Ai)return r.RGBA;if(s===K0)return r.LUMINANCE;if(s===Q0)return r.LUMINANCE_ALPHA;if(s===wr)return r.DEPTH_COMPONENT;if(s===Pr)return r.DEPTH_STENCIL;if(s===J0)return r.RED;if(s===wd)return r.RED_INTEGER;if(s===$0)return r.RG;if(s===Dd)return r.RG_INTEGER;if(s===Ud)return r.RGBA_INTEGER;if(s===Rc||s===Cc||s===wc||s===Dc)if(h===Be)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Rc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Cc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===wc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Dc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Rc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Cc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===wc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Dc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Zh||s===Kh||s===Qh||s===Jh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Zh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Kh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Qh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Jh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===$h||s===td||s===ed)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===$h||s===td)return h===Be?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===ed)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===nd||s===id||s===ad||s===sd||s===rd||s===od||s===ld||s===cd||s===ud||s===fd||s===hd||s===dd||s===pd||s===md)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===nd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===id)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ad)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===sd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===rd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===od)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ld)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===cd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ud)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===fd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===hd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===dd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===pd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===md)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Uc||s===gd||s===_d)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Uc)return h===Be?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===gd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===_d)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===tv||s===vd||s===Sd||s===xd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Uc)return c.COMPRESSED_RED_RGTC1_EXT;if(s===vd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Sd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===xd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Or?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}class z1 extends di{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ec extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const I1={type:"move"};class Lh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ec,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ec,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ec,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const d=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){h=!0;for(const A of t.hand.values()){const M=i.getJointPose(A,s),v=this._getHandJoint(m,A);M!==null&&(v.matrix.fromArray(M.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=M.radius),v.visible=M!==null}const _=m.joints["index-finger-tip"],g=m.joints["thumb-tip"],x=_.position.distanceTo(g.position),y=.02,E=.005;m.inputState.pinching&&x>y+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&x<=y-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(I1)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Ec;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const B1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,F1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class H1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,s){if(this.texture===null){const l=new kn,c=t.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!=s.depthNear||i.depthFar!=s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Ja({vertexShader:B1,fragmentShader:F1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new zi(new Vc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class G1 extends Us{constructor(t,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",p=1,m=null,_=null,g=null,x=null,y=null,E=null;const A=new H1,M=i.getContextAttributes();let v=null,O=null;const L=[],D=[],et=new le;let H=null;const z=new di;z.viewport=new Qe;const Y=new di;Y.viewport=new Qe;const w=[z,Y],C=new z1;let B=null,ot=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ct=L[j];return ct===void 0&&(ct=new Lh,L[j]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(j){let ct=L[j];return ct===void 0&&(ct=new Lh,L[j]=ct),ct.getGripSpace()},this.getHand=function(j){let ct=L[j];return ct===void 0&&(ct=new Lh,L[j]=ct),ct.getHandSpace()};function st(j){const ct=D.indexOf(j.inputSource);if(ct===-1)return;const Mt=L[ct];Mt!==void 0&&(Mt.update(j.inputSource,j.frame,m||h),Mt.dispatchEvent({type:j.type,data:j.inputSource}))}function gt(){l.removeEventListener("select",st),l.removeEventListener("selectstart",st),l.removeEventListener("selectend",st),l.removeEventListener("squeeze",st),l.removeEventListener("squeezestart",st),l.removeEventListener("squeezeend",st),l.removeEventListener("end",gt),l.removeEventListener("inputsourceschange",dt);for(let j=0;j<L.length;j++){const ct=D[j];ct!==null&&(D[j]=null,L[j].disconnect(ct))}B=null,ot=null,A.reset(),t.setRenderTarget(v),y=null,x=null,g=null,l=null,O=null,St.stop(),s.isPresenting=!1,t.setPixelRatio(H),t.setSize(et.width,et.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){c=j,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){d=j,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||h},this.setReferenceSpace=function(j){m=j},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return g},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(j){if(l=j,l!==null){if(v=t.getRenderTarget(),l.addEventListener("select",st),l.addEventListener("selectstart",st),l.addEventListener("selectend",st),l.addEventListener("squeeze",st),l.addEventListener("squeezestart",st),l.addEventListener("squeezeend",st),l.addEventListener("end",gt),l.addEventListener("inputsourceschange",dt),M.xrCompatible!==!0&&await i.makeXRCompatible(),H=t.getPixelRatio(),t.getSize(et),l.renderState.layers===void 0){const ct={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,ct),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),O=new ws(y.framebufferWidth,y.framebufferHeight,{format:Ai,type:pa,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil})}else{let ct=null,Mt=null,vt=null;M.depth&&(vt=M.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ct=M.stencil?Pr:wr,Mt=M.stencil?Or:Cs);const Ht={colorFormat:i.RGBA8,depthFormat:vt,scaleFactor:c};g=new XRWebGLBinding(l,i),x=g.createProjectionLayer(Ht),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),O=new ws(x.textureWidth,x.textureHeight,{format:Ai,type:pa,depthTexture:new gv(x.textureWidth,x.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(p),m=null,h=await l.requestReferenceSpace(d),St.setContext(l),St.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function dt(j){for(let ct=0;ct<j.removed.length;ct++){const Mt=j.removed[ct],vt=D.indexOf(Mt);vt>=0&&(D[vt]=null,L[vt].disconnect(Mt))}for(let ct=0;ct<j.added.length;ct++){const Mt=j.added[ct];let vt=D.indexOf(Mt);if(vt===-1){for(let Ft=0;Ft<L.length;Ft++)if(Ft>=D.length){D.push(Mt),vt=Ft;break}else if(D[Ft]===null){D[Ft]=Mt,vt=Ft;break}if(vt===-1)break}const Ht=L[vt];Ht&&Ht.connect(Mt)}}const P=new J,W=new J;function Z(j,ct,Mt){P.setFromMatrixPosition(ct.matrixWorld),W.setFromMatrixPosition(Mt.matrixWorld);const vt=P.distanceTo(W),Ht=ct.projectionMatrix.elements,Ft=Mt.projectionMatrix.elements,ne=Ht[14]/(Ht[10]-1),Le=Ht[14]/(Ht[10]+1),he=(Ht[9]+1)/Ht[5],ke=(Ht[9]-1)/Ht[5],X=(Ht[8]-1)/Ht[0],En=(Ft[8]+1)/Ft[0],ue=ne*X,me=ne*En,Zt=vt/(-X+En),Ce=Zt*-X;if(ct.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ce),j.translateZ(Zt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ht[10]===-1)j.projectionMatrix.copy(ct.projectionMatrix),j.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const Yt=ne+Zt,U=Le+Zt,T=ue-Ce,tt=me+(vt-Ce),ft=he*Le/U*Yt,yt=ke*Le/U*Yt;j.projectionMatrix.makePerspective(T,tt,ft,yt,Yt,U),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function xt(j,ct){ct===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ct.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(l===null)return;let ct=j.near,Mt=j.far;A.texture!==null&&(A.depthNear>0&&(ct=A.depthNear),A.depthFar>0&&(Mt=A.depthFar)),C.near=Y.near=z.near=ct,C.far=Y.far=z.far=Mt,(B!==C.near||ot!==C.far)&&(l.updateRenderState({depthNear:C.near,depthFar:C.far}),B=C.near,ot=C.far),z.layers.mask=j.layers.mask|2,Y.layers.mask=j.layers.mask|4,C.layers.mask=z.layers.mask|Y.layers.mask;const vt=j.parent,Ht=C.cameras;xt(C,vt);for(let Ft=0;Ft<Ht.length;Ft++)xt(Ht[Ft],vt);Ht.length===2?Z(C,z,Y):C.projectionMatrix.copy(z.projectionMatrix),bt(j,C,vt)};function bt(j,ct,Mt){Mt===null?j.matrix.copy(ct.matrixWorld):(j.matrix.copy(Mt.matrixWorld),j.matrix.invert(),j.matrix.multiply(ct.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ct.projectionMatrix),j.projectionMatrixInverse.copy(ct.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=yd*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(x===null&&y===null))return p},this.setFoveation=function(j){p=j,x!==null&&(x.fixedFoveation=j),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=j)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(C)};let N=null;function nt(j,ct){if(_=ct.getViewerPose(m||h),E=ct,_!==null){const Mt=_.views;y!==null&&(t.setRenderTargetFramebuffer(O,y.framebuffer),t.setRenderTarget(O));let vt=!1;Mt.length!==C.cameras.length&&(C.cameras.length=0,vt=!0);for(let Ft=0;Ft<Mt.length;Ft++){const ne=Mt[Ft];let Le=null;if(y!==null)Le=y.getViewport(ne);else{const ke=g.getViewSubImage(x,ne);Le=ke.viewport,Ft===0&&(t.setRenderTargetTextures(O,ke.colorTexture,x.ignoreDepthValues?void 0:ke.depthStencilTexture),t.setRenderTarget(O))}let he=w[Ft];he===void 0&&(he=new di,he.layers.enable(Ft),he.viewport=new Qe,w[Ft]=he),he.matrix.fromArray(ne.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(ne.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(Le.x,Le.y,Le.width,Le.height),Ft===0&&(C.matrix.copy(he.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),vt===!0&&C.cameras.push(he)}const Ht=l.enabledFeatures;if(Ht&&Ht.includes("depth-sensing")){const Ft=g.getDepthInformation(Mt[0]);Ft&&Ft.isValid&&Ft.texture&&A.init(t,Ft,l.renderState)}}for(let Mt=0;Mt<L.length;Mt++){const vt=D[Mt],Ht=L[Mt];vt!==null&&Ht!==void 0&&Ht.update(vt,ct,m||h)}N&&N(j,ct),ct.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ct}),E=null}const St=new pv;St.setAnimationLoop(nt),this.setAnimationLoop=function(j){N=j},this.dispose=function(){}}}const Ms=new Bi,V1=new Ye;function k1(r,t){function i(M,v){M.matrixAutoUpdate===!0&&M.updateMatrix(),v.value.copy(M.matrix)}function s(M,v){v.color.getRGB(M.fogColor.value,fv(r)),v.isFog?(M.fogNear.value=v.near,M.fogFar.value=v.far):v.isFogExp2&&(M.fogDensity.value=v.density)}function l(M,v,O,L,D){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(M,v):v.isMeshToonMaterial?(c(M,v),g(M,v)):v.isMeshPhongMaterial?(c(M,v),_(M,v)):v.isMeshStandardMaterial?(c(M,v),x(M,v),v.isMeshPhysicalMaterial&&y(M,v,D)):v.isMeshMatcapMaterial?(c(M,v),E(M,v)):v.isMeshDepthMaterial?c(M,v):v.isMeshDistanceMaterial?(c(M,v),A(M,v)):v.isMeshNormalMaterial?c(M,v):v.isLineBasicMaterial?(h(M,v),v.isLineDashedMaterial&&d(M,v)):v.isPointsMaterial?p(M,v,O,L):v.isSpriteMaterial?m(M,v):v.isShadowMaterial?(M.color.value.copy(v.color),M.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(M,v){M.opacity.value=v.opacity,v.color&&M.diffuse.value.copy(v.color),v.emissive&&M.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.bumpMap&&(M.bumpMap.value=v.bumpMap,i(v.bumpMap,M.bumpMapTransform),M.bumpScale.value=v.bumpScale,v.side===Vn&&(M.bumpScale.value*=-1)),v.normalMap&&(M.normalMap.value=v.normalMap,i(v.normalMap,M.normalMapTransform),M.normalScale.value.copy(v.normalScale),v.side===Vn&&M.normalScale.value.negate()),v.displacementMap&&(M.displacementMap.value=v.displacementMap,i(v.displacementMap,M.displacementMapTransform),M.displacementScale.value=v.displacementScale,M.displacementBias.value=v.displacementBias),v.emissiveMap&&(M.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,M.emissiveMapTransform)),v.specularMap&&(M.specularMap.value=v.specularMap,i(v.specularMap,M.specularMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest);const O=t.get(v),L=O.envMap,D=O.envMapRotation;L&&(M.envMap.value=L,Ms.copy(D),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),M.envMapRotation.value.setFromMatrix4(V1.makeRotationFromEuler(Ms)),M.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=v.reflectivity,M.ior.value=v.ior,M.refractionRatio.value=v.refractionRatio),v.lightMap&&(M.lightMap.value=v.lightMap,M.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,M.lightMapTransform)),v.aoMap&&(M.aoMap.value=v.aoMap,M.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,M.aoMapTransform))}function h(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform))}function d(M,v){M.dashSize.value=v.dashSize,M.totalSize.value=v.dashSize+v.gapSize,M.scale.value=v.scale}function p(M,v,O,L){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.size.value=v.size*O,M.scale.value=L*.5,v.map&&(M.map.value=v.map,i(v.map,M.uvTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function m(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.rotation.value=v.rotation,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function _(M,v){M.specular.value.copy(v.specular),M.shininess.value=Math.max(v.shininess,1e-4)}function g(M,v){v.gradientMap&&(M.gradientMap.value=v.gradientMap)}function x(M,v){M.metalness.value=v.metalness,v.metalnessMap&&(M.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,M.metalnessMapTransform)),M.roughness.value=v.roughness,v.roughnessMap&&(M.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,M.roughnessMapTransform)),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)}function y(M,v,O){M.ior.value=v.ior,v.sheen>0&&(M.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),M.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(M.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,M.sheenColorMapTransform)),v.sheenRoughnessMap&&(M.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,M.sheenRoughnessMapTransform))),v.clearcoat>0&&(M.clearcoat.value=v.clearcoat,M.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(M.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,M.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(M.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Vn&&M.clearcoatNormalScale.value.negate())),v.dispersion>0&&(M.dispersion.value=v.dispersion),v.iridescence>0&&(M.iridescence.value=v.iridescence,M.iridescenceIOR.value=v.iridescenceIOR,M.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(M.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,M.iridescenceMapTransform)),v.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),v.transmission>0&&(M.transmission.value=v.transmission,M.transmissionSamplerMap.value=O.texture,M.transmissionSamplerSize.value.set(O.width,O.height),v.transmissionMap&&(M.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,M.transmissionMapTransform)),M.thickness.value=v.thickness,v.thicknessMap&&(M.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=v.attenuationDistance,M.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(M.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(M.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=v.specularIntensity,M.specularColor.value.copy(v.specularColor),v.specularColorMap&&(M.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,M.specularColorMapTransform)),v.specularIntensityMap&&(M.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,v){v.matcap&&(M.matcap.value=v.matcap)}function A(M,v){const O=t.get(v).light;M.referencePosition.value.setFromMatrixPosition(O.matrixWorld),M.nearDistance.value=O.shadow.camera.near,M.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function X1(r,t,i,s){let l={},c={},h=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function p(O,L){const D=L.program;s.uniformBlockBinding(O,D)}function m(O,L){let D=l[O.id];D===void 0&&(E(O),D=_(O),l[O.id]=D,O.addEventListener("dispose",M));const et=L.program;s.updateUBOMapping(O,et);const H=t.render.frame;c[O.id]!==H&&(x(O),c[O.id]=H)}function _(O){const L=g();O.__bindingPointIndex=L;const D=r.createBuffer(),et=O.__size,H=O.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,et,H),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,D),D}function g(){for(let O=0;O<d;O++)if(h.indexOf(O)===-1)return h.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(O){const L=l[O.id],D=O.uniforms,et=O.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let H=0,z=D.length;H<z;H++){const Y=Array.isArray(D[H])?D[H]:[D[H]];for(let w=0,C=Y.length;w<C;w++){const B=Y[w];if(y(B,H,w,et)===!0){const ot=B.__offset,st=Array.isArray(B.value)?B.value:[B.value];let gt=0;for(let dt=0;dt<st.length;dt++){const P=st[dt],W=A(P);typeof P=="number"||typeof P=="boolean"?(B.__data[0]=P,r.bufferSubData(r.UNIFORM_BUFFER,ot+gt,B.__data)):P.isMatrix3?(B.__data[0]=P.elements[0],B.__data[1]=P.elements[1],B.__data[2]=P.elements[2],B.__data[3]=0,B.__data[4]=P.elements[3],B.__data[5]=P.elements[4],B.__data[6]=P.elements[5],B.__data[7]=0,B.__data[8]=P.elements[6],B.__data[9]=P.elements[7],B.__data[10]=P.elements[8],B.__data[11]=0):(P.toArray(B.__data,gt),gt+=W.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,ot,B.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(O,L,D,et){const H=O.value,z=L+"_"+D;if(et[z]===void 0)return typeof H=="number"||typeof H=="boolean"?et[z]=H:et[z]=H.clone(),!0;{const Y=et[z];if(typeof H=="number"||typeof H=="boolean"){if(Y!==H)return et[z]=H,!0}else if(Y.equals(H)===!1)return Y.copy(H),!0}return!1}function E(O){const L=O.uniforms;let D=0;const et=16;for(let z=0,Y=L.length;z<Y;z++){const w=Array.isArray(L[z])?L[z]:[L[z]];for(let C=0,B=w.length;C<B;C++){const ot=w[C],st=Array.isArray(ot.value)?ot.value:[ot.value];for(let gt=0,dt=st.length;gt<dt;gt++){const P=st[gt],W=A(P),Z=D%et,xt=Z%W.boundary,bt=Z+xt;D+=xt,bt!==0&&et-bt<W.storage&&(D+=et-bt),ot.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),ot.__offset=D,D+=W.storage}}}const H=D%et;return H>0&&(D+=et-H),O.__size=D,O.__cache={},this}function A(O){const L={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(L.boundary=4,L.storage=4):O.isVector2?(L.boundary=8,L.storage=8):O.isVector3||O.isColor?(L.boundary=16,L.storage=12):O.isVector4?(L.boundary=16,L.storage=16):O.isMatrix3?(L.boundary=48,L.storage=48):O.isMatrix4?(L.boundary=64,L.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),L}function M(O){const L=O.target;L.removeEventListener("dispose",M);const D=h.indexOf(L.__bindingPointIndex);h.splice(D,1),r.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function v(){for(const O in l)r.deleteBuffer(l[O]);h=[],l={},c={}}return{bind:p,update:m,dispose:v}}class W1{constructor(t={}){const{canvas:i=Ny(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let y;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=s.getContextAttributes().alpha}else y=h;const E=new Uint32Array(4),A=new Int32Array(4);let M=null,v=null;const O=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=hi,this.toneMapping=Ka,this.toneMappingExposure=1;const D=this;let et=!1,H=0,z=0,Y=null,w=-1,C=null;const B=new Qe,ot=new Qe;let st=null;const gt=new fe(0);let dt=0,P=i.width,W=i.height,Z=1,xt=null,bt=null;const N=new Qe(0,0,P,W),nt=new Qe(0,0,P,W);let St=!1;const j=new Nd;let ct=!1,Mt=!1;const vt=new Ye,Ht=new Ye,Ft=new J,ne=new Qe,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let he=!1;function ke(){return Y===null?Z:1}let X=s;function En(R,V){return i.getContext(R,V)}try{const R={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${bd}`),i.addEventListener("webglcontextlost",_t,!1),i.addEventListener("webglcontextrestored",Ct,!1),i.addEventListener("webglcontextcreationerror",Lt,!1),X===null){const V="webgl2";if(X=En(V,R),X===null)throw En(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ue,me,Zt,Ce,Yt,U,T,tt,ft,yt,pt,Xt,Ut,Pt,ge,At,zt,jt,Wt,Ot,Jt,ae,Ne,G;function Rt(){ue=new Kb(X),ue.init(),ae=new P1(X,ue),me=new Xb(X,ue,t,ae),Zt=new L1(X,ue),me.reverseDepthBuffer&&x&&Zt.buffers.depth.setReversed(!0),Ce=new $b(X),Yt=new _1,U=new O1(X,ue,Zt,Yt,me,ae,Ce),T=new qb(D),tt=new Zb(D),ft=new rM(X),Ne=new Vb(X,ft),yt=new Qb(X,ft,Ce,Ne),pt=new eT(X,yt,ft,Ce),Wt=new tT(X,me,U),At=new Wb(Yt),Xt=new g1(D,T,tt,ue,me,Ne,At),Ut=new k1(D,Yt),Pt=new S1,ge=new T1(ue),jt=new Gb(D,T,tt,Zt,pt,y,p),zt=new D1(D,pt,me),G=new X1(X,Ce,me,Zt),Ot=new kb(X,ue,Ce),Jt=new Jb(X,ue,Ce),Ce.programs=Xt.programs,D.capabilities=me,D.extensions=ue,D.properties=Yt,D.renderLists=Pt,D.shadowMap=zt,D.state=Zt,D.info=Ce}Rt();const lt=new G1(D,X);this.xr=lt,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const R=ue.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ue.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(R){R!==void 0&&(Z=R,this.setSize(P,W,!1))},this.getSize=function(R){return R.set(P,W)},this.setSize=function(R,V,at=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=R,W=V,i.width=Math.floor(R*Z),i.height=Math.floor(V*Z),at===!0&&(i.style.width=R+"px",i.style.height=V+"px"),this.setViewport(0,0,R,V)},this.getDrawingBufferSize=function(R){return R.set(P*Z,W*Z).floor()},this.setDrawingBufferSize=function(R,V,at){P=R,W=V,Z=at,i.width=Math.floor(R*at),i.height=Math.floor(V*at),this.setViewport(0,0,R,V)},this.getCurrentViewport=function(R){return R.copy(B)},this.getViewport=function(R){return R.copy(N)},this.setViewport=function(R,V,at,it){R.isVector4?N.set(R.x,R.y,R.z,R.w):N.set(R,V,at,it),Zt.viewport(B.copy(N).multiplyScalar(Z).round())},this.getScissor=function(R){return R.copy(nt)},this.setScissor=function(R,V,at,it){R.isVector4?nt.set(R.x,R.y,R.z,R.w):nt.set(R,V,at,it),Zt.scissor(ot.copy(nt).multiplyScalar(Z).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(R){Zt.setScissorTest(St=R)},this.setOpaqueSort=function(R){xt=R},this.setTransparentSort=function(R){bt=R},this.getClearColor=function(R){return R.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor.apply(jt,arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha.apply(jt,arguments)},this.clear=function(R=!0,V=!0,at=!0){let it=0;if(R){let k=!1;if(Y!==null){const Tt=Y.texture.format;k=Tt===Ud||Tt===Dd||Tt===wd}if(k){const Tt=Y.texture.type,wt=Tt===pa||Tt===Cs||Tt===Vo||Tt===Or||Tt===Rd||Tt===Cd,Dt=jt.getClearColor(),Gt=jt.getClearAlpha(),te=Dt.r,Qt=Dt.g,It=Dt.b;wt?(E[0]=te,E[1]=Qt,E[2]=It,E[3]=Gt,X.clearBufferuiv(X.COLOR,0,E)):(A[0]=te,A[1]=Qt,A[2]=It,A[3]=Gt,X.clearBufferiv(X.COLOR,0,A))}else it|=X.COLOR_BUFFER_BIT}V&&(it|=X.DEPTH_BUFFER_BIT),at&&(it|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",_t,!1),i.removeEventListener("webglcontextrestored",Ct,!1),i.removeEventListener("webglcontextcreationerror",Lt,!1),Pt.dispose(),ge.dispose(),Yt.dispose(),T.dispose(),tt.dispose(),pt.dispose(),Ne.dispose(),G.dispose(),Xt.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",Hr),lt.removeEventListener("sessionend",Gr),Ci.stop()};function _t(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),et=!0}function Ct(){console.log("THREE.WebGLRenderer: Context Restored."),et=!1;const R=Ce.autoReset,V=zt.enabled,at=zt.autoUpdate,it=zt.needsUpdate,k=zt.type;Rt(),Ce.autoReset=R,zt.enabled=V,zt.autoUpdate=at,zt.needsUpdate=it,zt.type=k}function Lt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function $t(R){const V=R.target;V.removeEventListener("dispose",$t),Xe(V)}function Xe(R){rn(R),Yt.remove(R)}function rn(R){const V=Yt.get(R).programs;V!==void 0&&(V.forEach(function(at){Xt.releaseProgram(at)}),R.isShaderMaterial&&Xt.releaseShaderCache(R))}this.renderBufferDirect=function(R,V,at,it,k,Tt){V===null&&(V=Le);const wt=k.isMesh&&k.matrixWorld.determinant()<0,Dt=kr(R,V,at,it,k);Zt.setMaterial(it,wt);let Gt=at.index,te=1;if(it.wireframe===!0){if(Gt=yt.getWireframeAttribute(at),Gt===void 0)return;te=2}const Qt=at.drawRange,It=at.attributes.position;let ye=Qt.start*te,we=(Qt.start+Qt.count)*te;Tt!==null&&(ye=Math.max(ye,Tt.start*te),we=Math.min(we,(Tt.start+Tt.count)*te)),Gt!==null?(ye=Math.max(ye,0),we=Math.min(we,Gt.count)):It!=null&&(ye=Math.max(ye,0),we=Math.min(we,It.count));const Oe=we-ye;if(Oe<0||Oe===1/0)return;Ne.setup(k,it,Dt,at,Gt);let bn,Se=Ot;if(Gt!==null&&(bn=ft.get(Gt),Se=Jt,Se.setIndex(bn)),k.isMesh)it.wireframe===!0?(Zt.setLineWidth(it.wireframeLinewidth*ke()),Se.setMode(X.LINES)):Se.setMode(X.TRIANGLES);else if(k.isLine){let Vt=it.linewidth;Vt===void 0&&(Vt=1),Zt.setLineWidth(Vt*ke()),k.isLineSegments?Se.setMode(X.LINES):k.isLineLoop?Se.setMode(X.LINE_LOOP):Se.setMode(X.LINE_STRIP)}else k.isPoints?Se.setMode(X.POINTS):k.isSprite&&Se.setMode(X.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Se.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(ue.get("WEBGL_multi_draw"))Se.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Vt=k._multiDrawStarts,on=k._multiDrawCounts,ie=k._multiDrawCount,Nn=Gt?ft.get(Gt).bytesPerElement:1,ma=Yt.get(it).currentProgram.getUniforms();for(let _n=0;_n<ie;_n++)ma.setValue(X,"_gl_DrawID",_n),Se.render(Vt[_n]/Nn,on[_n])}else if(k.isInstancedMesh)Se.renderInstances(ye,Oe,k.count);else if(at.isInstancedBufferGeometry){const Vt=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,on=Math.min(at.instanceCount,Vt);Se.renderInstances(ye,Oe,on)}else Se.render(ye,Oe)};function Me(R,V,at){R.transparent===!0&&R.side===Oi&&R.forceSinglePass===!1?(R.side=Vn,R.needsUpdate=!0,je(R,V,at),R.side=Qa,R.needsUpdate=!0,je(R,V,at),R.side=Oi):je(R,V,at)}this.compile=function(R,V,at=null){at===null&&(at=R),v=ge.get(at),v.init(V),L.push(v),at.traverseVisible(function(k){k.isLight&&k.layers.test(V.layers)&&(v.pushLight(k),k.castShadow&&v.pushShadow(k))}),R!==at&&R.traverseVisible(function(k){k.isLight&&k.layers.test(V.layers)&&(v.pushLight(k),k.castShadow&&v.pushShadow(k))}),v.setupLights();const it=new Set;return R.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const Tt=k.material;if(Tt)if(Array.isArray(Tt))for(let wt=0;wt<Tt.length;wt++){const Dt=Tt[wt];Me(Dt,at,k),it.add(Dt)}else Me(Tt,at,k),it.add(Tt)}),L.pop(),v=null,it},this.compileAsync=function(R,V,at=null){const it=this.compile(R,V,at);return new Promise(k=>{function Tt(){if(it.forEach(function(wt){Yt.get(wt).currentProgram.isReady()&&it.delete(wt)}),it.size===0){k(R);return}setTimeout(Tt,10)}ue.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let mn=null;function mi(R){mn&&mn(R)}function Hr(){Ci.stop()}function Gr(){Ci.start()}const Ci=new pv;Ci.setAnimationLoop(mi),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(R){mn=R,lt.setAnimationLoop(R),R===null?Ci.stop():Ci.start()},lt.addEventListener("sessionstart",Hr),lt.addEventListener("sessionend",Gr),this.render=function(R,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(et===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(V),V=lt.getCamera()),R.isScene===!0&&R.onBeforeRender(D,R,V,Y),v=ge.get(R,L.length),v.init(V),L.push(v),Ht.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),j.setFromProjectionMatrix(Ht),Mt=this.localClippingEnabled,ct=At.init(this.clippingPlanes,Mt),M=Pt.get(R,O.length),M.init(),O.push(M),lt.enabled===!0&&lt.isPresenting===!0){const Tt=D.xr.getDepthSensingMesh();Tt!==null&&$a(Tt,V,-1/0,D.sortObjects)}$a(R,V,0,D.sortObjects),M.finish(),D.sortObjects===!0&&M.sort(xt,bt),he=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,he&&jt.addToRenderList(M,R),this.info.render.frame++,ct===!0&&At.beginShadows();const at=v.state.shadowsArray;zt.render(at,R,V),ct===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset();const it=M.opaque,k=M.transmissive;if(v.setupLights(),V.isArrayCamera){const Tt=V.cameras;if(k.length>0)for(let wt=0,Dt=Tt.length;wt<Dt;wt++){const Gt=Tt[wt];Vr(it,k,R,Gt)}he&&jt.render(R);for(let wt=0,Dt=Tt.length;wt<Dt;wt++){const Gt=Tt[wt];Ls(M,R,Gt,Gt.viewport)}}else k.length>0&&Vr(it,k,R,V),he&&jt.render(R),Ls(M,R,V);Y!==null&&(U.updateMultisampleRenderTarget(Y),U.updateRenderTargetMipmap(Y)),R.isScene===!0&&R.onAfterRender(D,R,V),Ne.resetDefaultState(),w=-1,C=null,L.pop(),L.length>0?(v=L[L.length-1],ct===!0&&At.setGlobalState(D.clippingPlanes,v.state.camera)):v=null,O.pop(),O.length>0?M=O[O.length-1]:M=null};function $a(R,V,at,it){if(R.visible===!1)return;if(R.layers.test(V.layers)){if(R.isGroup)at=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(V);else if(R.isLight)v.pushLight(R),R.castShadow&&v.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||j.intersectsSprite(R)){it&&ne.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ht);const wt=pt.update(R),Dt=R.material;Dt.visible&&M.push(R,wt,Dt,at,ne.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||j.intersectsObject(R))){const wt=pt.update(R),Dt=R.material;if(it&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ne.copy(R.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),ne.copy(wt.boundingSphere.center)),ne.applyMatrix4(R.matrixWorld).applyMatrix4(Ht)),Array.isArray(Dt)){const Gt=wt.groups;for(let te=0,Qt=Gt.length;te<Qt;te++){const It=Gt[te],ye=Dt[It.materialIndex];ye&&ye.visible&&M.push(R,wt,ye,at,ne.z,It)}}else Dt.visible&&M.push(R,wt,Dt,at,ne.z,null)}}const Tt=R.children;for(let wt=0,Dt=Tt.length;wt<Dt;wt++)$a(Tt[wt],V,at,it)}function Ls(R,V,at,it){const k=R.opaque,Tt=R.transmissive,wt=R.transparent;v.setupLightsView(at),ct===!0&&At.setGlobalState(D.clippingPlanes,at),it&&Zt.viewport(B.copy(it)),k.length>0&&ts(k,V,at),Tt.length>0&&ts(Tt,V,at),wt.length>0&&ts(wt,V,at),Zt.buffers.depth.setTest(!0),Zt.buffers.depth.setMask(!0),Zt.buffers.color.setMask(!0),Zt.setPolygonOffset(!1)}function Vr(R,V,at,it){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[it.id]===void 0&&(v.state.transmissionRenderTarget[it.id]=new ws(1,1,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float")?ko:pa,minFilter:Rs,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ee.workingColorSpace}));const Tt=v.state.transmissionRenderTarget[it.id],wt=it.viewport||B;Tt.setSize(wt.z,wt.w);const Dt=D.getRenderTarget();D.setRenderTarget(Tt),D.getClearColor(gt),dt=D.getClearAlpha(),dt<1&&D.setClearColor(16777215,.5),D.clear(),he&&jt.render(at);const Gt=D.toneMapping;D.toneMapping=Ka;const te=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),v.setupLightsView(it),ct===!0&&At.setGlobalState(D.clippingPlanes,it),ts(R,at,it),U.updateMultisampleRenderTarget(Tt),U.updateRenderTargetMipmap(Tt),ue.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let It=0,ye=V.length;It<ye;It++){const we=V[It],Oe=we.object,bn=we.geometry,Se=we.material,Vt=we.group;if(Se.side===Oi&&Oe.layers.test(it.layers)){const on=Se.side;Se.side=Vn,Se.needsUpdate=!0,gi(Oe,at,it,bn,Se,Vt),Se.side=on,Se.needsUpdate=!0,Qt=!0}}Qt===!0&&(U.updateMultisampleRenderTarget(Tt),U.updateRenderTargetMipmap(Tt))}D.setRenderTarget(Dt),D.setClearColor(gt,dt),te!==void 0&&(it.viewport=te),D.toneMapping=Gt}function ts(R,V,at){const it=V.isScene===!0?V.overrideMaterial:null;for(let k=0,Tt=R.length;k<Tt;k++){const wt=R[k],Dt=wt.object,Gt=wt.geometry,te=it===null?wt.material:it,Qt=wt.group;Dt.layers.test(at.layers)&&gi(Dt,V,at,Gt,te,Qt)}}function gi(R,V,at,it,k,Tt){R.onBeforeRender(D,V,at,it,k,Tt),R.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),k.onBeforeRender(D,V,at,it,R,Tt),k.transparent===!0&&k.side===Oi&&k.forceSinglePass===!1?(k.side=Vn,k.needsUpdate=!0,D.renderBufferDirect(at,V,it,k,R,Tt),k.side=Qa,k.needsUpdate=!0,D.renderBufferDirect(at,V,it,k,R,Tt),k.side=Oi):D.renderBufferDirect(at,V,it,k,R,Tt),R.onAfterRender(D,V,at,it,k,Tt)}function je(R,V,at){V.isScene!==!0&&(V=Le);const it=Yt.get(R),k=v.state.lights,Tt=v.state.shadowsArray,wt=k.state.version,Dt=Xt.getParameters(R,k.state,Tt,V,at),Gt=Xt.getProgramCacheKey(Dt);let te=it.programs;it.environment=R.isMeshStandardMaterial?V.environment:null,it.fog=V.fog,it.envMap=(R.isMeshStandardMaterial?tt:T).get(R.envMap||it.environment),it.envMapRotation=it.environment!==null&&R.envMap===null?V.environmentRotation:R.envMapRotation,te===void 0&&(R.addEventListener("dispose",$t),te=new Map,it.programs=te);let Qt=te.get(Gt);if(Qt!==void 0){if(it.currentProgram===Qt&&it.lightsStateVersion===wt)return Fi(R,Dt),Qt}else Dt.uniforms=Xt.getUniforms(R),R.onBeforeCompile(Dt,D),Qt=Xt.acquireProgram(Dt,Gt),te.set(Gt,Qt),it.uniforms=Dt.uniforms;const It=it.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(It.clippingPlanes=At.uniform),Fi(R,Dt),it.needsLights=qc(R),it.lightsStateVersion=wt,it.needsLights&&(It.ambientLightColor.value=k.state.ambient,It.lightProbe.value=k.state.probe,It.directionalLights.value=k.state.directional,It.directionalLightShadows.value=k.state.directionalShadow,It.spotLights.value=k.state.spot,It.spotLightShadows.value=k.state.spotShadow,It.rectAreaLights.value=k.state.rectArea,It.ltc_1.value=k.state.rectAreaLTC1,It.ltc_2.value=k.state.rectAreaLTC2,It.pointLights.value=k.state.point,It.pointLightShadows.value=k.state.pointShadow,It.hemisphereLights.value=k.state.hemi,It.directionalShadowMap.value=k.state.directionalShadowMap,It.directionalShadowMatrix.value=k.state.directionalShadowMatrix,It.spotShadowMap.value=k.state.spotShadowMap,It.spotLightMatrix.value=k.state.spotLightMatrix,It.spotLightMap.value=k.state.spotLightMap,It.pointShadowMap.value=k.state.pointShadowMap,It.pointShadowMatrix.value=k.state.pointShadowMatrix),it.currentProgram=Qt,it.uniformsList=null,Qt}function gn(R){if(R.uniformsList===null){const V=R.currentProgram.getUniforms();R.uniformsList=Nc.seqWithValue(V.seq,R.uniforms)}return R.uniformsList}function Fi(R,V){const at=Yt.get(R);at.outputColorSpace=V.outputColorSpace,at.batching=V.batching,at.batchingColor=V.batchingColor,at.instancing=V.instancing,at.instancingColor=V.instancingColor,at.instancingMorph=V.instancingMorph,at.skinning=V.skinning,at.morphTargets=V.morphTargets,at.morphNormals=V.morphNormals,at.morphColors=V.morphColors,at.morphTargetsCount=V.morphTargetsCount,at.numClippingPlanes=V.numClippingPlanes,at.numIntersection=V.numClipIntersection,at.vertexAlphas=V.vertexAlphas,at.vertexTangents=V.vertexTangents,at.toneMapping=V.toneMapping}function kr(R,V,at,it,k){V.isScene!==!0&&(V=Le),U.resetTextureUnits();const Tt=V.fog,wt=it.isMeshStandardMaterial?V.environment:null,Dt=Y===null?D.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Ir,Gt=(it.isMeshStandardMaterial?tt:T).get(it.envMap||wt),te=it.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,Qt=!!at.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),It=!!at.morphAttributes.position,ye=!!at.morphAttributes.normal,we=!!at.morphAttributes.color;let Oe=Ka;it.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Oe=D.toneMapping);const bn=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,Se=bn!==void 0?bn.length:0,Vt=Yt.get(it),on=v.state.lights;if(ct===!0&&(Mt===!0||R!==C)){const Tn=R===C&&it.id===w;At.setState(it,R,Tn)}let ie=!1;it.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==on.state.version||Vt.outputColorSpace!==Dt||k.isBatchedMesh&&Vt.batching===!1||!k.isBatchedMesh&&Vt.batching===!0||k.isBatchedMesh&&Vt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Vt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Vt.instancing===!1||!k.isInstancedMesh&&Vt.instancing===!0||k.isSkinnedMesh&&Vt.skinning===!1||!k.isSkinnedMesh&&Vt.skinning===!0||k.isInstancedMesh&&Vt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Vt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Vt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Vt.instancingMorph===!1&&k.morphTexture!==null||Vt.envMap!==Gt||it.fog===!0&&Vt.fog!==Tt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==At.numPlanes||Vt.numIntersection!==At.numIntersection)||Vt.vertexAlphas!==te||Vt.vertexTangents!==Qt||Vt.morphTargets!==It||Vt.morphNormals!==ye||Vt.morphColors!==we||Vt.toneMapping!==Oe||Vt.morphTargetsCount!==Se)&&(ie=!0):(ie=!0,Vt.__version=it.version);let Nn=Vt.currentProgram;ie===!0&&(Nn=je(it,V,k));let ma=!1,_n=!1,ga=!1;const Re=Nn.getUniforms(),ti=Vt.uniforms;if(Zt.useProgram(Nn.program)&&(ma=!0,_n=!0,ga=!0),it.id!==w&&(w=it.id,_n=!0),ma||C!==R){Zt.buffers.depth.getReversed()?(vt.copy(R.projectionMatrix),Py(vt),zy(vt),Re.setValue(X,"projectionMatrix",vt)):Re.setValue(X,"projectionMatrix",R.projectionMatrix),Re.setValue(X,"viewMatrix",R.matrixWorldInverse);const _i=Re.map.cameraPosition;_i!==void 0&&_i.setValue(X,Ft.setFromMatrixPosition(R.matrixWorld)),me.logarithmicDepthBuffer&&Re.setValue(X,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&Re.setValue(X,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,_n=!0,ga=!0)}if(k.isSkinnedMesh){Re.setOptional(X,k,"bindMatrix"),Re.setOptional(X,k,"bindMatrixInverse");const Tn=k.skeleton;Tn&&(Tn.boneTexture===null&&Tn.computeBoneTexture(),Re.setValue(X,"boneTexture",Tn.boneTexture,U))}k.isBatchedMesh&&(Re.setOptional(X,k,"batchingTexture"),Re.setValue(X,"batchingTexture",k._matricesTexture,U),Re.setOptional(X,k,"batchingIdTexture"),Re.setValue(X,"batchingIdTexture",k._indirectTexture,U),Re.setOptional(X,k,"batchingColorTexture"),k._colorsTexture!==null&&Re.setValue(X,"batchingColorTexture",k._colorsTexture,U));const hn=at.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&Wt.update(k,at,Nn),(_n||Vt.receiveShadow!==k.receiveShadow)&&(Vt.receiveShadow=k.receiveShadow,Re.setValue(X,"receiveShadow",k.receiveShadow)),it.isMeshGouraudMaterial&&it.envMap!==null&&(ti.envMap.value=Gt,ti.flipEnvMap.value=Gt.isCubeTexture&&Gt.isRenderTargetTexture===!1?-1:1),it.isMeshStandardMaterial&&it.envMap===null&&V.environment!==null&&(ti.envMapIntensity.value=V.environmentIntensity),_n&&(Re.setValue(X,"toneMappingExposure",D.toneMappingExposure),Vt.needsLights&&Wc(ti,ga),Tt&&it.fog===!0&&Ut.refreshFogUniforms(ti,Tt),Ut.refreshMaterialUniforms(ti,it,Z,W,v.state.transmissionRenderTarget[R.id]),Nc.upload(X,gn(Vt),ti,U)),it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(Nc.upload(X,gn(Vt),ti,U),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&Re.setValue(X,"center",k.center),Re.setValue(X,"modelViewMatrix",k.modelViewMatrix),Re.setValue(X,"normalMatrix",k.normalMatrix),Re.setValue(X,"modelMatrix",k.matrixWorld),it.isShaderMaterial||it.isRawShaderMaterial){const Tn=it.uniformsGroups;for(let _i=0,ei=Tn.length;_i<ei;_i++){const Hi=Tn[_i];G.update(Hi,Nn),G.bind(Hi,Nn)}}return Nn}function Wc(R,V){R.ambientLightColor.needsUpdate=V,R.lightProbe.needsUpdate=V,R.directionalLights.needsUpdate=V,R.directionalLightShadows.needsUpdate=V,R.pointLights.needsUpdate=V,R.pointLightShadows.needsUpdate=V,R.spotLights.needsUpdate=V,R.spotLightShadows.needsUpdate=V,R.rectAreaLights.needsUpdate=V,R.hemisphereLights.needsUpdate=V}function qc(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(R,V,at){Yt.get(R.texture).__webglTexture=V,Yt.get(R.depthTexture).__webglTexture=at;const it=Yt.get(R);it.__hasExternalTextures=!0,it.__autoAllocateDepthBuffer=at===void 0,it.__autoAllocateDepthBuffer||ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),it.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,V){const at=Yt.get(R);at.__webglFramebuffer=V,at.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(R,V=0,at=0){Y=R,H=V,z=at;let it=!0,k=null,Tt=!1,wt=!1;if(R){const Gt=Yt.get(R);if(Gt.__useDefaultFramebuffer!==void 0)Zt.bindFramebuffer(X.FRAMEBUFFER,null),it=!1;else if(Gt.__webglFramebuffer===void 0)U.setupRenderTarget(R);else if(Gt.__hasExternalTextures)U.rebindTextures(R,Yt.get(R.texture).__webglTexture,Yt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const It=R.depthTexture;if(Gt.__boundDepthTexture!==It){if(It!==null&&Yt.has(It)&&(R.width!==It.image.width||R.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(R)}}const te=R.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(wt=!0);const Qt=Yt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Qt[V])?k=Qt[V][at]:k=Qt[V],Tt=!0):R.samples>0&&U.useMultisampledRTT(R)===!1?k=Yt.get(R).__webglMultisampledFramebuffer:Array.isArray(Qt)?k=Qt[at]:k=Qt,B.copy(R.viewport),ot.copy(R.scissor),st=R.scissorTest}else B.copy(N).multiplyScalar(Z).floor(),ot.copy(nt).multiplyScalar(Z).floor(),st=St;if(Zt.bindFramebuffer(X.FRAMEBUFFER,k)&&it&&Zt.drawBuffers(R,k),Zt.viewport(B),Zt.scissor(ot),Zt.setScissorTest(st),Tt){const Gt=Yt.get(R.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+V,Gt.__webglTexture,at)}else if(wt){const Gt=Yt.get(R.texture),te=V||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,Gt.__webglTexture,at||0,te)}w=-1},this.readRenderTargetPixels=function(R,V,at,it,k,Tt,wt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=Yt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&wt!==void 0&&(Dt=Dt[wt]),Dt){Zt.bindFramebuffer(X.FRAMEBUFFER,Dt);try{const Gt=R.texture,te=Gt.format,Qt=Gt.type;if(!me.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!me.textureTypeReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=R.width-it&&at>=0&&at<=R.height-k&&X.readPixels(V,at,it,k,ae.convert(te),ae.convert(Qt),Tt)}finally{const Gt=Y!==null?Yt.get(Y).__webglFramebuffer:null;Zt.bindFramebuffer(X.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(R,V,at,it,k,Tt,wt){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=Yt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&wt!==void 0&&(Dt=Dt[wt]),Dt){const Gt=R.texture,te=Gt.format,Qt=Gt.type;if(!me.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!me.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=R.width-it&&at>=0&&at<=R.height-k){Zt.bindFramebuffer(X.FRAMEBUFFER,Dt);const It=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,It),X.bufferData(X.PIXEL_PACK_BUFFER,Tt.byteLength,X.STREAM_READ),X.readPixels(V,at,it,k,ae.convert(te),ae.convert(Qt),0);const ye=Y!==null?Yt.get(Y).__webglFramebuffer:null;Zt.bindFramebuffer(X.FRAMEBUFFER,ye);const we=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await Oy(X,we,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,It),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Tt),X.deleteBuffer(It),X.deleteSync(we),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,V=null,at=0){R.isTexture!==!0&&(Ho("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,R=arguments[1]);const it=Math.pow(2,-at),k=Math.floor(R.image.width*it),Tt=Math.floor(R.image.height*it),wt=V!==null?V.x:0,Dt=V!==null?V.y:0;U.setTexture2D(R,0),X.copyTexSubImage2D(X.TEXTURE_2D,at,0,0,wt,Dt,k,Tt),Zt.unbindTexture()},this.copyTextureToTexture=function(R,V,at=null,it=null,k=0){R.isTexture!==!0&&(Ho("WebGLRenderer: copyTextureToTexture function signature has changed."),it=arguments[0]||null,R=arguments[1],V=arguments[2],k=arguments[3]||0,at=null);let Tt,wt,Dt,Gt,te,Qt,It,ye,we;const Oe=R.isCompressedTexture?R.mipmaps[k]:R.image;at!==null?(Tt=at.max.x-at.min.x,wt=at.max.y-at.min.y,Dt=at.isBox3?at.max.z-at.min.z:1,Gt=at.min.x,te=at.min.y,Qt=at.isBox3?at.min.z:0):(Tt=Oe.width,wt=Oe.height,Dt=Oe.depth||1,Gt=0,te=0,Qt=0),it!==null?(It=it.x,ye=it.y,we=it.z):(It=0,ye=0,we=0);const bn=ae.convert(V.format),Se=ae.convert(V.type);let Vt;V.isData3DTexture?(U.setTexture3D(V,0),Vt=X.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(U.setTexture2DArray(V,0),Vt=X.TEXTURE_2D_ARRAY):(U.setTexture2D(V,0),Vt=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,V.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,V.unpackAlignment);const on=X.getParameter(X.UNPACK_ROW_LENGTH),ie=X.getParameter(X.UNPACK_IMAGE_HEIGHT),Nn=X.getParameter(X.UNPACK_SKIP_PIXELS),ma=X.getParameter(X.UNPACK_SKIP_ROWS),_n=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,Oe.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Oe.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Gt),X.pixelStorei(X.UNPACK_SKIP_ROWS,te),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Qt);const ga=R.isDataArrayTexture||R.isData3DTexture,Re=V.isDataArrayTexture||V.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const ti=Yt.get(R),hn=Yt.get(V),Tn=Yt.get(ti.__renderTarget),_i=Yt.get(hn.__renderTarget);Zt.bindFramebuffer(X.READ_FRAMEBUFFER,Tn.__webglFramebuffer),Zt.bindFramebuffer(X.DRAW_FRAMEBUFFER,_i.__webglFramebuffer);for(let ei=0;ei<Dt;ei++)ga&&X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Yt.get(R).__webglTexture,k,Qt+ei),R.isDepthTexture?(Re&&X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Yt.get(V).__webglTexture,k,we+ei),X.blitFramebuffer(Gt,te,Tt,wt,It,ye,Tt,wt,X.DEPTH_BUFFER_BIT,X.NEAREST)):Re?X.copyTexSubImage3D(Vt,k,It,ye,we+ei,Gt,te,Tt,wt):X.copyTexSubImage2D(Vt,k,It,ye,we+ei,Gt,te,Tt,wt);Zt.bindFramebuffer(X.READ_FRAMEBUFFER,null),Zt.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Re?R.isDataTexture||R.isData3DTexture?X.texSubImage3D(Vt,k,It,ye,we,Tt,wt,Dt,bn,Se,Oe.data):V.isCompressedArrayTexture?X.compressedTexSubImage3D(Vt,k,It,ye,we,Tt,wt,Dt,bn,Oe.data):X.texSubImage3D(Vt,k,It,ye,we,Tt,wt,Dt,bn,Se,Oe):R.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,k,It,ye,Tt,wt,bn,Se,Oe.data):R.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,k,It,ye,Oe.width,Oe.height,bn,Oe.data):X.texSubImage2D(X.TEXTURE_2D,k,It,ye,Tt,wt,bn,Se,Oe);X.pixelStorei(X.UNPACK_ROW_LENGTH,on),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,ie),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Nn),X.pixelStorei(X.UNPACK_SKIP_ROWS,ma),X.pixelStorei(X.UNPACK_SKIP_IMAGES,_n),k===0&&V.generateMipmaps&&X.generateMipmap(Vt),Zt.unbindTexture()},this.copyTextureToTexture3D=function(R,V,at=null,it=null,k=0){return R.isTexture!==!0&&(Ho("WebGLRenderer: copyTextureToTexture3D function signature has changed."),at=arguments[0]||null,it=arguments[1]||null,R=arguments[2],V=arguments[3],k=arguments[4]||0),Ho('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,V,at,it,k)},this.initRenderTarget=function(R){Yt.get(R).__webglFramebuffer===void 0&&U.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?U.setTextureCube(R,0):R.isData3DTexture?U.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?U.setTexture2DArray(R,0):U.setTexture2D(R,0),Zt.unbindTexture()},this.resetState=function(){H=0,z=0,Y=null,Zt.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ha}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorspace=Ee._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ee._getUnpackColorSpace()}}class q1 extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bi,this.environmentIntensity=1,this.environmentRotation=new Bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class Xc extends Br{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const zc=new J,Ic=new J,C0=new Ye,Fo=new Ld,bc=new Gc,Nh=new J,w0=new J;class Y1 extends Mn{constructor(t=new pi,i=new Xc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)zc.fromBufferAttribute(i,l-1),Ic.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=zc.distanceTo(Ic);t.setAttribute("lineDistance",new wn(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),bc.copy(s.boundingSphere),bc.applyMatrix4(l),bc.radius+=c,t.ray.intersectsSphere(bc)===!1)return;C0.copy(l).invert(),Fo.copy(t.ray).applyMatrix4(C0);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=this.isLineSegments?2:1,_=s.index,x=s.attributes.position;if(_!==null){const y=Math.max(0,h.start),E=Math.min(_.count,h.start+h.count);for(let A=y,M=E-1;A<M;A+=m){const v=_.getX(A),O=_.getX(A+1),L=Tc(this,t,Fo,p,v,O);L&&i.push(L)}if(this.isLineLoop){const A=_.getX(E-1),M=_.getX(y),v=Tc(this,t,Fo,p,A,M);v&&i.push(v)}}else{const y=Math.max(0,h.start),E=Math.min(x.count,h.start+h.count);for(let A=y,M=E-1;A<M;A+=m){const v=Tc(this,t,Fo,p,A,A+1);v&&i.push(v)}if(this.isLineLoop){const A=Tc(this,t,Fo,p,E-1,y);A&&i.push(A)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Tc(r,t,i,s,l,c){const h=r.geometry.attributes.position;if(zc.fromBufferAttribute(h,l),Ic.fromBufferAttribute(h,c),i.distanceSqToSegment(zc,Ic,Nh,w0)>s)return;Nh.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(Nh);if(!(p<t.near||p>t.far))return{distance:p,point:w0.clone().applyMatrix4(r.matrixWorld),index:l,face:null,faceIndex:null,barycoord:null,object:r}}const D0=new J,U0=new J;class Pd extends Y1{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)D0.fromBufferAttribute(i,l),U0.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+D0.distanceTo(U0);t.setAttribute("lineDistance",new wn(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class j1 extends pi{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const i=[],s=new Set,l=new J,c=new J;if(t.index!==null){const h=t.attributes.position,d=t.index;let p=t.groups;p.length===0&&(p=[{start:0,count:d.count,materialIndex:0}]);for(let m=0,_=p.length;m<_;++m){const g=p[m],x=g.start,y=g.count;for(let E=x,A=x+y;E<A;E+=3)for(let M=0;M<3;M++){const v=d.getX(E+M),O=d.getX(E+(M+1)%3);l.fromBufferAttribute(h,v),c.fromBufferAttribute(h,O),L0(l,c,s)===!0&&(i.push(l.x,l.y,l.z),i.push(c.x,c.y,c.z))}}}else{const h=t.attributes.position;for(let d=0,p=h.count/3;d<p;d++)for(let m=0;m<3;m++){const _=3*d+m,g=3*d+(m+1)%3;l.fromBufferAttribute(h,_),c.fromBufferAttribute(h,g),L0(l,c,s)===!0&&(i.push(l.x,l.y,l.z),i.push(c.x,c.y,c.z))}}this.setAttribute("position",new wn(i,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function L0(r,t,i){const s=`${r.x},${r.y},${r.z}-${t.x},${t.y},${t.z}`,l=`${t.x},${t.y},${t.z}-${r.x},${r.y},${r.z}`;return i.has(s)===!0||i.has(l)===!0?!1:(i.add(s),i.add(l),!0)}class Z1 extends Br{static get type(){return"MeshPhongMaterial"}constructor(t){super(),this.isMeshPhongMaterial=!0,this.color=new fe(16777215),this.specular=new fe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ev,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=Td,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class yv extends Mn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new fe(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Oh=new Ye,N0=new J,O0=new J;class K1{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nd,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;N0.setFromMatrixPosition(t.matrixWorld),i.position.copy(N0),O0.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(O0),i.updateMatrixWorld(),Oh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oh),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Oh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Q1 extends K1{constructor(){super(new mv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class P0 extends yv{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.target=new Mn,this.shadow=new Q1}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class J1 extends yv{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class z0{constructor(t=1,i=0,s=0){return this.radius=t,this.phi=i,this.theta=s,this}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(Ln(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class $1 extends Pd{constructor(t=10,i=10,s=4473924,l=8947848){s=new fe(s),l=new fe(l);const c=i/2,h=t/i,d=t/2,p=[],m=[];for(let x=0,y=0,E=-d;x<=i;x++,E+=h){p.push(-d,0,E,d,0,E),p.push(E,0,-d,E,0,d);const A=x===c?s:l;A.toArray(m,y),y+=3,A.toArray(m,y),y+=3,A.toArray(m,y),y+=3,A.toArray(m,y),y+=3}const _=new pi;_.setAttribute("position",new wn(p,3)),_.setAttribute("color",new wn(m,3));const g=new Xc({vertexColors:!0,toneMapped:!1});super(_,g),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class tA extends Pd{constructor(t=1){const i=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],s=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],l=new pi;l.setAttribute("position",new wn(i,3)),l.setAttribute("color",new wn(s,3));const c=new Xc({vertexColors:!0,toneMapped:!1});super(l,c),this.type="AxesHelper"}setColors(t,i,s){const l=new fe,c=this.geometry.attributes.color.array;return l.set(t),l.toArray(c,0),l.toArray(c,3),l.set(i),l.toArray(c,6),l.toArray(c,9),l.set(s),l.toArray(c,12),l.toArray(c,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class eA extends Us{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bd);const I0={type:"change"},zd={type:"start"},Mv={type:"end"},Ac=new Ld,B0=new Ya,nA=Math.cos(70*Ly.DEG2RAD),cn=new J,Gn=2*Math.PI,Fe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ph=1e-6;class iA extends eA{constructor(t,i=null){super(t,i),this.state=Fe.NONE,this.enabled=!0,this.target=new J,this.cursor=new J,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Rr.ROTATE,MIDDLE:Rr.DOLLY,RIGHT:Rr.PAN},this.touches={ONE:Tr.ROTATE,TWO:Tr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new J,this._lastQuaternion=new Ds,this._lastTargetPosition=new J,this._quat=new Ds().setFromUnitVectors(t.up,new J(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new z0,this._sphericalDelta=new z0,this._scale=1,this._panOffset=new J,this._rotateStart=new le,this._rotateEnd=new le,this._rotateDelta=new le,this._panStart=new le,this._panEnd=new le,this._panDelta=new le,this._dollyStart=new le,this._dollyEnd=new le,this._dollyDelta=new le,this._dollyDirection=new J,this._mouse=new le,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=sA.bind(this),this._onPointerDown=aA.bind(this),this._onPointerUp=rA.bind(this),this._onContextMenu=dA.bind(this),this._onMouseWheel=cA.bind(this),this._onKeyDown=uA.bind(this),this._onTouchStart=fA.bind(this),this._onTouchMove=hA.bind(this),this._onMouseDown=oA.bind(this),this._onMouseMove=lA.bind(this),this._interceptControlDown=pA.bind(this),this._interceptControlUp=mA.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(I0),this.update(),this.state=Fe.NONE}update(t=null){const i=this.object.position;cn.copy(i).sub(this.target),cn.applyQuaternion(this._quat),this._spherical.setFromVector3(cn),this.autoRotate&&this.state===Fe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Gn:s>Math.PI&&(s-=Gn),l<-Math.PI?l+=Gn:l>Math.PI&&(l-=Gn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=h!=this._spherical.radius}if(cn.setFromSpherical(this._spherical),cn.applyQuaternion(this._quatInverse),i.copy(this.target).add(cn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=cn.length();h=this._clampDistance(d*this._scale);const p=d-h;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),c=!!p}else if(this.object.isOrthographicCamera){const d=new J(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=p!==this.object.zoom;const m=new J(this._mouse.x,this._mouse.y,0);m.unproject(this.object),this.object.position.sub(m).add(d),this.object.updateMatrixWorld(),h=cn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Ac.origin.copy(this.object.position),Ac.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ac.direction))<nA?this.object.lookAt(this.target):(B0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ac.intersectPlane(B0,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Ph||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ph||this._lastTargetPosition.distanceToSquared(this.target)>Ph?(this.dispatchEvent(I0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Gn/60*this.autoRotateSpeed*t:Gn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){cn.setFromMatrixColumn(i,0),cn.multiplyScalar(-t),this._panOffset.add(cn)}_panUp(t,i){this.screenSpacePanning===!0?cn.setFromMatrixColumn(i,1):(cn.setFromMatrixColumn(i,0),cn.crossVectors(this.object.up,cn)),cn.multiplyScalar(t),this._panOffset.add(cn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;cn.copy(l).sub(this.target);let c=cn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Gn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Gn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Gn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Gn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Gn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Gn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Gn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Gn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new le,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function aA(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function sA(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function rA(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Mv),this.state=Fe.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function oA(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Rr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Fe.DOLLY;break;case Rr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Fe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Fe.ROTATE}break;case Rr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Fe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Fe.PAN}break;default:this.state=Fe.NONE}this.state!==Fe.NONE&&this.dispatchEvent(zd)}function lA(r){switch(this.state){case Fe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Fe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Fe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function cA(r){this.enabled===!1||this.enableZoom===!1||this.state!==Fe.NONE||(r.preventDefault(),this.dispatchEvent(zd),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Mv))}function uA(r){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(r)}function fA(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Tr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Fe.TOUCH_ROTATE;break;case Tr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Fe.TOUCH_PAN;break;default:this.state=Fe.NONE}break;case 2:switch(this.touches.TWO){case Tr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Fe.TOUCH_DOLLY_PAN;break;case Tr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Fe.TOUCH_DOLLY_ROTATE;break;default:this.state=Fe.NONE}break;default:this.state=Fe.NONE}this.state!==Fe.NONE&&this.dispatchEvent(zd)}function hA(r){switch(this._trackPointer(r),this.state){case Fe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Fe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Fe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Fe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Fe.NONE}}function dA(r){this.enabled!==!1&&r.preventDefault()}function pA(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function mA(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function gA({mesh:r,stresses:t,maxStress:i}){const s=qe.useRef(null),l=qe.useRef(null),c=qe.useRef(null),h=qe.useRef(null),d=qe.useRef(null);return qe.useEffect(()=>{if(!s.current)return;const p=new q1;p.background=new fe(658964),l.current=p;const m=new di(60,s.current.clientWidth/s.current.clientHeight,.001,10);m.position.set(.15,.15,.15);const _=new W1({antialias:!0});_.setSize(s.current.clientWidth,s.current.clientHeight),_.setPixelRatio(window.devicePixelRatio),s.current.appendChild(_.domElement),c.current=_;const g=new iA(m,_.domElement);g.enableDamping=!0,g.dampingFactor=.05,h.current=g;const x=new J1(16777215,.5);p.add(x);const y=new P0(55807,.8);y.position.set(1,1,1),p.add(y);const E=new P0(16711935,.4);E.position.set(-1,-1,.5),p.add(E);const A=new $1(.3,10,2963272,1711915);A.position.y=-.05,p.add(A);const M=new tA(.05);p.add(M);function v(){requestAnimationFrame(v),g.update(),_.render(p,m)}v();const O=()=>{if(!s.current)return;const L=s.current.clientWidth,D=s.current.clientHeight;m.aspect=L/D,m.updateProjectionMatrix(),_.setSize(L,D)};return window.addEventListener("resize",O),()=>{window.removeEventListener("resize",O),_.dispose(),s.current&&_.domElement&&s.current.removeChild(_.domElement)}},[]),qe.useEffect(()=>{if(!r||!l.current)return;d.current&&(l.current.remove(d.current),d.current.geometry.dispose(),d.current.material.dispose());const p=new pi,m=[],_=[];r.nodes.forEach(v=>{const O=[v.position[0]+v.displacement[0],v.position[1]+v.displacement[1],v.position[2]+v.displacement[2]];m.push(...O);const L=t&&t.length>0?t[Math.floor(Math.random()*t.length)]:0,D=i>0?Math.min(L/i,1):0,et=new fe;et.setHSL(.6*(1-D),.8,.5),_.push(et.r,et.g,et.b)}),p.setAttribute("position",new wn(m,3)),p.setAttribute("color",new wn(_,3));const g=[];r.elements.forEach(v=>{const O=v.nodes.slice(0,4);O.length>=3&&(g.push(O[0],O[1],O[2]),g.push(O[0],O[2],O[3]||O[0]),g.push(O[0],O[3]||O[1],O[1]),g.push(O[1],O[3]||O[2],O[2]))}),p.setIndex(g),p.computeVertexNormals();const x=new Z1({vertexColors:!0,side:Oi,shininess:80,transparent:!0,opacity:.9}),y=new zi(p,x);d.current=y,l.current.add(y);const E=new j1(p),A=new Xc({color:55807,transparent:!0,opacity:.2}),M=new Pd(E,A);y.add(M)},[r,t,i]),Et.jsxs("div",{style:{width:"100%",height:"100%",position:"relative"},children:[Et.jsx("div",{ref:s,style:{width:"100%",height:"100%"}}),Et.jsxs("div",{style:{position:"absolute",top:"1rem",left:"1rem",background:"rgba(10, 14, 20, 0.8)",padding:"0.75rem",borderRadius:"6px",border:"1px solid var(--border-color)",fontSize:"0.8125rem",fontFamily:"JetBrains Mono, monospace"},children:[Et.jsx("div",{style:{color:"var(--text-secondary)"},children:"Stress Visualization"}),Et.jsx("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginTop:"0.5rem"},children:Et.jsx("div",{style:{width:"100px",height:"8px",background:"linear-gradient(90deg, #00ff88, #ffaa00, #ff4444)",borderRadius:"4px"}})}),Et.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.75rem",marginTop:"0.25rem",color:"var(--text-tertiary)"},children:[Et.jsx("span",{children:"Low"}),Et.jsx("span",{children:"High"})]})]})]})}const _A=[{id:"cable-grasp",title:"2mm Cable Grasping",description:"Grasp a delicate 2mm cable without exceeding 5N force or causing permanent deformation.",targetShape:vA(),difficulty:"Hard"},{id:"ffc-insertion",title:"FFC Connector Handling",description:"Handle flexible flat cable connector with precise pressure distribution. Max stress: 3 MPa.",targetShape:SA(),difficulty:"Very Hard"},{id:"gasket-grip",title:"Gasket Manipulation",description:"Grasp rubber gasket without deformation. Maintain uniform contact pressure < 2 MPa.",targetShape:xA(),difficulty:"Medium"},{id:"fragile-object",title:"Fragile Object Handling",description:"Pick up thin-walled plastic part. Avoid stress concentration and damage.",targetShape:yA(),difficulty:"Hard"}];function vA(){const r=[];for(let t=0;t<20;t++){const i=t/19;r.push([.05*Math.cos(i*Math.PI),.001*Math.sin(i*Math.PI*4),.05+i*.05])}return r}function SA(){const r=[];for(let t=0;t<15;t++)for(let i=0;i<3;i++)r.push([t*.005-.035,i*.003-.003,.06]);return r}function xA(){const r=[];for(let t=0;t<24;t++){const i=t/24*Math.PI*2,s=.03;r.push([Math.cos(i)*s,Math.sin(i)*s,.07])}return r}function yA(){const r=[];for(let t=-3;t<=3;t++)for(let i=-3;i<=3;i++)r.push([t*.008,i*.008,.065]);return r}function MA({selectedChallenge:r,onSelectChallenge:t}){return Et.jsxs("div",{className:"panel",children:[Et.jsx("div",{className:"panel-header",children:Et.jsxs("div",{children:[Et.jsx("div",{className:"panel-title",children:"Industrial Challenges"}),Et.jsx("div",{className:"panel-subtitle",children:"Select a manipulation task"})]})}),Et.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:_A.map(i=>Et.jsxs("div",{className:`challenge-card ${(r==null?void 0:r.id)===i.id?"active":""}`,onClick:()=>t(i),children:[Et.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.5rem"},children:[Et.jsx("div",{className:"challenge-title",children:i.title}),Et.jsx("span",{className:"status-badge",style:{background:i.difficulty==="Very Hard"?"rgba(255, 68, 68, 0.1)":i.difficulty==="Hard"?"rgba(255, 170, 0, 0.1)":"rgba(0, 255, 136, 0.1)",color:i.difficulty==="Very Hard"?"var(--accent-danger)":i.difficulty==="Hard"?"var(--accent-warning)":"var(--accent-success)"},children:i.difficulty})]}),Et.jsx("div",{className:"challenge-desc",children:i.description})]},i.id))})]})}function EA({optimizers:r,isRunning:t}){return Et.jsxs("div",{className:"panel",children:[Et.jsxs("div",{className:"panel-header",children:[Et.jsxs("div",{children:[Et.jsx("div",{className:"panel-title",children:"Algorithm Racing Arena"}),Et.jsx("div",{className:"panel-subtitle",children:"Real-time optimization comparison"})]}),Et.jsx("div",{className:`status-badge ${t?"status-running":"status-idle"}`,children:t?"● Running":"○ Idle"})]}),Et.jsx("div",{className:"race-container",children:r.map((i,s)=>Et.jsxs("div",{className:"race-item",children:[Et.jsxs("div",{className:"race-header",children:[Et.jsx("div",{className:"race-name",children:i.name}),Et.jsxs("div",{className:"race-score",children:[(i.score*100).toFixed(1),"%"]})]}),Et.jsx("div",{className:"progress-bar",children:Et.jsx("div",{className:"progress-fill",style:{width:`${i.progress*100}%`,background:s===0?"linear-gradient(90deg, #00d9ff, #0099cc)":s===1?"linear-gradient(90deg, #ff00ff, #cc00cc)":"linear-gradient(90deg, #00ff88, #00cc66)"}})}),Et.jsxs("div",{className:"iteration-count",children:["Iteration: ",i.iteration," / ",i.maxIterations,i.converged&&" ✓ Converged"]})]},s))}),Et.jsxs("div",{className:"metric-grid",style:{marginTop:"1.5rem"},children:[Et.jsxs("div",{className:"metric-card",children:[Et.jsx("div",{className:"metric-label",children:"Winner"}),Et.jsx("div",{className:"metric-value",style:{fontSize:"1rem",color:"var(--accent-success)"},children:r.length>0?r.reduce((i,s)=>s.score>i.score?s:i,r[0]).name:"None"})]}),Et.jsxs("div",{className:"metric-card",children:[Et.jsx("div",{className:"metric-label",children:"Best Score"}),Et.jsxs("div",{className:"metric-value",style:{fontSize:"1rem"},children:[r.length>0?(Math.max(...r.map(i=>i.score))*100).toFixed(1):"0.0",Et.jsx("span",{className:"metric-unit",children:"%"})]})]})]})]})}function bA({pressure:r,onPressureChange:t,material:i,onMaterialChange:s,actuatorType:l,onActuatorTypeChange:c}){const h=[{id:"softRubber",name:"Soft Rubber",stiffness:"Low"},{id:"stiffRubber",name:"Stiff Rubber",stiffness:"High"},{id:"silicone",name:"Silicone",stiffness:"Medium"},{id:"tpu",name:"TPU",stiffness:"Medium-Low"},{id:"fiberSilicone",name:"Fiber-Reinforced",stiffness:"Variable"}],d=[{id:"gripper",name:"Cylindrical Gripper"},{id:"multiChamber",name:"Multi-Chamber"},{id:"mckibben",name:"McKibben Muscle"}];return Et.jsxs("div",{className:"panel",children:[Et.jsx("div",{className:"panel-header",children:Et.jsxs("div",{children:[Et.jsx("div",{className:"panel-title",children:"Design Parameters"}),Et.jsx("div",{className:"panel-subtitle",children:"Configure actuator properties"})]})}),Et.jsxs("div",{className:"slider-control",children:[Et.jsxs("div",{className:"slider-label",children:[Et.jsx("span",{className:"slider-label-text",children:"Pressure"}),Et.jsxs("span",{className:"slider-value",children:[(r/1e3).toFixed(1)," kPa"]})]}),Et.jsx("input",{type:"range",min:"0",max:"100000",step:"1000",value:r,onChange:p=>t(parseFloat(p.target.value))})]}),Et.jsxs("div",{style:{marginBottom:"1.5rem"},children:[Et.jsx("div",{className:"slider-label-text",style:{marginBottom:"0.75rem"},children:"Material Model"}),Et.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"0.5rem"},children:h.map(p=>Et.jsx("button",{className:`btn ${i===p.id?"btn-primary":"btn-secondary"}`,onClick:()=>s(p.id),style:{padding:"0.5rem",fontSize:"0.8125rem"},children:p.name},p.id))})]}),Et.jsxs("div",{children:[Et.jsx("div",{className:"slider-label-text",style:{marginBottom:"0.75rem"},children:"Actuator Type"}),Et.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:d.map(p=>Et.jsx("button",{className:`btn ${l===p.id?"btn-primary":"btn-secondary"}`,onClick:()=>c(p.id),style:{justifyContent:"flex-start"},children:p.name},p.id))})]}),Et.jsxs("div",{className:"mesh-stats",children:[Et.jsxs("div",{className:"mesh-stat",children:[Et.jsx("div",{className:"mesh-stat-label",children:"Elements"}),Et.jsx("div",{className:"mesh-stat-value",children:"240"})]}),Et.jsxs("div",{className:"mesh-stat",children:[Et.jsx("div",{className:"mesh-stat-label",children:"Nodes"}),Et.jsx("div",{className:"mesh-stat-value",children:"180"})]}),Et.jsxs("div",{className:"mesh-stat",children:[Et.jsx("div",{className:"mesh-stat-label",children:"DOFs"}),Et.jsx("div",{className:"mesh-stat-value",children:"540"})]})]})]})}function TA(r=10){const t=[],i=[],s=[],h=r,d=Math.floor(r*1.5);for(let p=0;p<=d;p++){const m=p/d*.1;for(let _=0;_<h;_++){const g=_/h*Math.PI*2,x=.015*(1-.3*(p/d)),y=Math.cos(g)*x,E=Math.sin(g)*x;t.push({x:y,y:E,z:m}),s.push({id:t.length-1,position:[y,E,m],displacement:[0,0,0],velocity:[0,0,0],fixed:p===0})}}for(let p=0;p<d;p++)for(let m=0;m<h;m++){const _=p*h+m,g=p*h+(m+1)%h,x=(p+1)*h+m,y=(p+1)*h+(m+1)%h;i.push({nodes:[_,g,x,y],density:1050,thickness:.002,fiberAngle:0,pressure:0})}return{vertices:t,nodes:s,elements:i,bounds:{min:[-.015,-.015,0],max:[.015,.015,.1]}}}function F0(r=3,t=8){const i=[],s=[],l=[],p=t,m=Math.floor(t/2),_=Math.floor(t*1.5);for(let g=0;g<=_;g++)for(let x=0;x<=m;x++)for(let y=0;y<=p;y++){const E=y/p*.12-.06,A=x/m*.04-.04/2,M=g/_*.02;i.push({x:E,y:A,z:M}),l.push({id:i.length-1,position:[E,A,M],displacement:[0,0,0],velocity:[0,0,0],fixed:g===0})}for(let g=0;g<_;g++)for(let x=0;x<m;x++)for(let y=0;y<p;y++){const E=(M,v,O)=>O*(p+1)*(m+1)+v*(p+1)+M,A=Math.floor(x/m*r);s.push({nodes:[E(y,x,g),E(y+1,x,g),E(y+1,x+1,g),E(y,x+1,g),E(y,x,g+1),E(y+1,x,g+1),E(y+1,x+1,g+1),E(y,x+1,g+1)],density:1050,thickness:.002,fiberAngle:20,pressure:0,chamber:A})}return{vertices:i,nodes:l,elements:s,numChambers:r,bounds:{min:[-.12/2,-.04/2,0],max:[.12/2,.04/2,.02]}}}function AA(r=12){const t=[],i=[],s=[],d=r*2;for(let p=0;p<=d;p++){const m=p/d*.15,_=p/d*Math.PI*4;for(let g=0;g<8;g++){const x=g/8*Math.PI*2+_,y=Math.cos(x)*.02,E=Math.sin(x)*.02;t.push({x:y,y:E,z:m}),s.push({id:t.length-1,position:[y,E,m],displacement:[0,0,0],velocity:[0,0,0],fixed:p===0||p===d})}}for(let p=0;p<d;p++)for(let m=0;m<8;m++){const _=p*8+m,g=p*8+(m+1)%8,x=(p+1)*8+m;i.push({nodes:[_,g,x],density:1050,thickness:.001,fiberAngle:45,pressure:0})}return{vertices:t,nodes:s,elements:i,bounds:{min:[-.02,-.02,0],max:[.02,.02,.15]}}}function Ev(r,t){const i=r.length,s=r[0].length,l=t[0].length,c=Array(i).fill(0).map(()=>Array(l).fill(0));for(let h=0;h<i;h++)for(let d=0;d<l;d++)for(let p=0;p<s;p++)c[h][d]+=r[h][p]*t[p][d];return c}function $n(r){return Math.sqrt(r.reduce((t,i)=>t+i*i,0))}function bi(r,t){return r.map((i,s)=>i+t[s])}function fi(r,t){return r.map((i,s)=>i-t[s])}function qa(r,t){return r.map(i=>i*t)}function ca(r,t){return r.reduce((i,s,l)=>i+s*t[l],0)}function bv(r,t,i){return Math.max(t,Math.min(i,r))}function RA(r,t,i=1e-5){const s=[],l=r(t);for(let c=0;c<t.length;c++){const h=[...t];h[c]+=i;const d=r(h);s.push((d-l)/i)}return s}function Tv(r=0,t=1){const i=Math.random(),s=Math.random(),l=Math.sqrt(-2*Math.log(i))*Math.cos(2*Math.PI*s);return r+t*l}class Bc{constructor(t,i){this.mu=t||1e5,this.lambda=i||15e4,this.name="Neo-Hookean"}strainEnergy(t){const i=this.rightCauchyGreen(t),s=this.firstInvariant(i),l=this.jacobian(t);return .5*this.mu*(s-3)-this.mu*Math.log(l)+.5*this.lambda*Math.pow(Math.log(l),2)}stress(t){const i=this.jacobian(t),s=this.matrixInverse(t),l=this.transpose(s);return t.map((h,d)=>h.map((p,m)=>this.mu*(p-l[d][m])+this.lambda*Math.log(i)*l[d][m]))}rightCauchyGreen(t){const i=this.transpose(t);return Ev(i,t)}firstInvariant(t){return t[0][0]+t[1][1]+t[2][2]}jacobian(t){return this.determinant(t)}determinant(t){return t.length===2?t[0][0]*t[1][1]-t[0][1]*t[1][0]:t[0][0]*(t[1][1]*t[2][2]-t[1][2]*t[2][1])-t[0][1]*(t[1][0]*t[2][2]-t[1][2]*t[2][0])+t[0][2]*(t[1][0]*t[2][1]-t[1][1]*t[2][0])}matrixInverse(t){const i=this.determinant(t);return Math.abs(i)<1e-10?t.map(l=>[...l]):[[(t[1][1]*t[2][2]-t[1][2]*t[2][1])/i,(t[0][2]*t[2][1]-t[0][1]*t[2][2])/i,(t[0][1]*t[1][2]-t[0][2]*t[1][1])/i],[(t[1][2]*t[2][0]-t[1][0]*t[2][2])/i,(t[0][0]*t[2][2]-t[0][2]*t[2][0])/i,(t[0][2]*t[1][0]-t[0][0]*t[1][2])/i],[(t[1][0]*t[2][1]-t[1][1]*t[2][0])/i,(t[0][1]*t[2][0]-t[0][0]*t[2][1])/i,(t[0][0]*t[1][1]-t[0][1]*t[1][0])/i]]}transpose(t){return t[0].map((i,s)=>t.map(l=>l[s]))}}class H0{constructor(t,i,s){this.C10=t||5e4,this.C01=i||25e3,this.D1=s||.001,this.name="Mooney-Rivlin"}strainEnergy(t){const i=this.rightCauchyGreen(t),s=this.firstInvariant(i),l=this.secondInvariant(i),c=this.jacobian(t);return this.C10*(s-3)+this.C01*(l-3)+1/this.D1*Math.pow(c-1,2)}stress(t){const i=this.jacobian(t),s=this.rightCauchyGreen(t),l=this.firstInvariant(s),c=this.matrixInverse(t),h=this.transpose(c);return t.map((p,m)=>p.map((_,g)=>2*this.C10*_+2*this.C01*(l*_-s[m][g])+2/this.D1*(i-1)*i*h[m][g]))}rightCauchyGreen(t){const i=this.transpose(t);return Ev(i,t)}firstInvariant(t){return t[0][0]+t[1][1]+t[2][2]}secondInvariant(t){return .5*(Math.pow(this.firstInvariant(t),2)-(t[0][0]*t[0][0]+t[1][1]*t[1][1]+t[2][2]*t[2][2]))}jacobian(t){return this.determinant(t)}determinant(t){return t[0][0]*(t[1][1]*t[2][2]-t[1][2]*t[2][1])-t[0][1]*(t[1][0]*t[2][2]-t[1][2]*t[2][0])+t[0][2]*(t[1][0]*t[2][1]-t[1][1]*t[2][0])}matrixInverse(t){const i=this.determinant(t);return Math.abs(i)<1e-10?t.map(l=>[...l]):[[(t[1][1]*t[2][2]-t[1][2]*t[2][1])/i,(t[0][2]*t[2][1]-t[0][1]*t[2][2])/i,(t[0][1]*t[1][2]-t[0][2]*t[1][1])/i],[(t[1][2]*t[2][0]-t[1][0]*t[2][2])/i,(t[0][0]*t[2][2]-t[0][2]*t[2][0])/i,(t[0][2]*t[1][0]-t[0][0]*t[1][2])/i],[(t[1][0]*t[2][1]-t[1][1]*t[2][0])/i,(t[0][1]*t[2][0]-t[0][0]*t[2][1])/i,(t[0][0]*t[1][1]-t[0][1]*t[1][0])/i]]}transpose(t){return t[0].map((i,s)=>t.map(l=>l[s]))}}class CA extends Bc{constructor(t,i,s,l,c){super(t,i),this.k1=s||1e4,this.k2=l||.1,this.fiberAngle=c||0,this.name="Fiber-Reinforced"}strainEnergy(t){const i=super.strainEnergy(t),s=this.fiberAngle*Math.PI/180,l=[Math.cos(s),Math.sin(s),0],c=t.map(m=>m.reduce((_,g,x)=>_+g*l[x],0)),h=$n(c),d=h*h,p=this.k1/(2*this.k2)*(Math.exp(this.k2*Math.pow(d-1,2))-1);return i+p}}function G0(){return{softRubber:new Bc(1e5,15e4),stiffRubber:new Bc(5e5,75e4),silicone:new H0(5e4,25e3,.001),tpu:new H0(3e4,15e3,.0015),fiberSilicone:new CA(5e4,75e3,1e4,.1,20)}}class Av{constructor(t,i,s=.001){this.mesh=t,this.material=i||new Bc,this.dt=s,this.damping=.1,this.gravity=[0,0,-9.81],this.maxStress=0}step(){return this.computeForces(),this.integrate(),this.enforceConstraints(),this.mesh}computeForces(){this.mesh.nodes.forEach(t=>{t.force=[0,0,0]}),this.mesh.elements.forEach((t,i)=>{const l=t.nodes.slice(0,4).map(g=>this.mesh.nodes[g]),c=l.map(g=>bi(g.position,g.displacement)),h=this.computeDeformationGradient(c,l.map(g=>g.position)),d=this.material.stress(h),p=this.computeElementVolume(l.map(g=>g.position)),m=this.stressToVector(d),_=$n(m);_>this.maxStress&&(this.maxStress=_),l.forEach((g,x)=>{const y=qa(m,p/l.length);g.force=bi(g.force,y)}),t.pressure>0&&this.addPressureForce(t,l)}),this.mesh.nodes.forEach(t=>{if(!t.fixed){const s=qa(this.gravity,.001);t.force=bi(t.force,s)}}),this.mesh.nodes.forEach(t=>{if(!t.fixed){const i=qa(t.velocity,-this.damping);t.force=bi(t.force,i)}})}integrate(){this.mesh.nodes.forEach(i=>{if(!i.fixed){const s=qa(i.force,1e3);i.velocity=bi(i.velocity,qa(s,this.dt)),i.displacement=bi(i.displacement,qa(i.velocity,this.dt))}})}enforceConstraints(){this.mesh.nodes.forEach(t=>{t.fixed&&(t.displacement=[0,0,0],t.velocity=[0,0,0]),t.position[2]+t.displacement[2]<0&&(t.displacement[2]=-t.position[2],t.velocity[2]=Math.max(0,t.velocity[2]))})}computeDeformationGradient(t,i){if(t.length<3)return[[1,0,0],[0,1,0],[0,0,1]];const s=fi(t[1],t[0]),l=fi(t[2],t[0]),c=t.length>3?fi(t[3],t[0]):[0,0,1],h=fi(i[1],i[0]),d=fi(i[2],i[0]),p=i.length>3?fi(i[3],i[0]):[0,0,1],m=Math.max($n(h),1e-6),_=Math.max($n(d),1e-6),g=Math.max($n(p),1e-6);return[[ca(s,h)/(m*m),ca(l,h)/(m*_),ca(c,h)/(m*g)],[ca(s,d)/(_*m),ca(l,d)/(_*_),ca(c,d)/(_*g)],[ca(s,p)/(g*m),ca(l,p)/(g*_),ca(c,p)/(g*g)]]}computeElementVolume(t){if(t.length<4)return 1e-4;const[i,s,l,c]=t,h=fi(s,i),d=fi(l,i),p=fi(c,i),m=h[0]*(d[1]*p[2]-d[2]*p[1])-h[1]*(d[0]*p[2]-d[2]*p[0])+h[2]*(d[0]*p[1]-d[1]*p[0]);return Math.abs(m)/6}addPressureForce(t,i){const s=t.pressure;i.forEach(l=>{if(!l.fixed){const c=l.position,h=$n(c),d=h>1e-6?qa(c,1/h):[0,0,1],m=qa(d,s*1e-4);l.force=bi(l.force,m)}})}stressToVector(t){return[t[0][0],t[1][1],t[2][2]]}getMaxDisplacement(){let t=0;return this.mesh.nodes.forEach(i=>{const s=$n(i.displacement);s>t&&(t=s)}),t}getStressDistribution(){return this.mesh.elements.map(i=>{const s=i.nodes.slice(0,4).map(p=>this.mesh.nodes[p]),l=s.map(p=>bi(p.position,p.displacement)),c=s.map(p=>p.position),h=this.computeDeformationGradient(l,c),d=this.material.stress(h);return $n(this.stressToVector(d))})}reset(){this.mesh.nodes.forEach(t=>{t.displacement=[0,0,0],t.velocity=[0,0,0],t.force=[0,0,0]}),this.maxStress=0}setPressure(t,i){this.mesh.elements.forEach(s=>{(s.chamber===t||t===-1)&&(s.pressure=i)})}}function Id(r,t,i,s=50){const l=new Av(r,t,.01);l.setPressure(-1,i);for(let c=0;c<s;c++){l.step();const h=l.getMaxDisplacement();if(c>10&&h<1e-4)break}return{mesh:l.mesh,maxDisplacement:l.getMaxDisplacement(),maxStress:l.maxStress,stresses:l.getStressDistribution()}}class wA{constructor(t,i,s){this.mesh=t,this.material=i,this.targetShape=s,this.learningRate=.01,this.momentum=.9,this.iteration=0,this.maxIterations=100,this.velocity=[],this.history=[],this.currentScore=0,this.converged=!1,this.name="Gradient Descent"}initialize(){const t=this.mesh.elements.length,i=this.mesh.numChambers||1;this.designVars=[...Array(t).fill(.5),...Array(i).fill(.5),...Array(t).fill(.5)],this.velocity=Array(this.designVars.length).fill(0),this.iteration=0,this.converged=!1}step(){if(this.converged||this.iteration>=this.maxIterations)return this.converged=!0,{converged:!0,score:this.currentScore};const t=this.computeObjective(this.designVars),i=RA(s=>this.computeObjective(s),this.designVars,.001);return this.velocity=this.velocity.map((s,l)=>this.momentum*s-this.learningRate*i[l]),this.designVars=this.designVars.map((s,l)=>{const c=s+this.velocity[l];return Math.max(0,Math.min(1,c))}),this.currentScore=1/(1+t),this.iteration++,this.history.push({iteration:this.iteration,score:this.currentScore,objective:t,gradientNorm:$n(i)}),$n(i)<.001&&(this.converged=!0),{converged:this.converged,score:this.currentScore,iteration:this.iteration}}computeObjective(t){this.applyDesignVars(t);const i=this.getAveragePressure(t),s=Id(this.mesh,this.material,i,20),l=this.computeShapeError(s.mesh),c=Math.max(0,s.maxStress-5e6)/1e6,h=this.computeThicknessPenalty(t);return l+.1*c+.05*h}applyDesignVars(t){const i=this.mesh.elements.length,s=this.mesh.numChambers||1;this.mesh.elements.forEach((l,c)=>{l.thickness=.001+t[c]*.004});for(let l=0;l<s;l++){const c=t[i+l]*1e5;this.mesh.elements.forEach(h=>{(h.chamber===l||!h.chamber)&&(h.pressure=c)})}this.mesh.elements.forEach((l,c)=>{l.fiberAngle=t[i+s+c]*90})}computeShapeError(t){if(!this.targetShape||this.targetShape.length===0)return 0;let i=0,s=0;return t.nodes.forEach(l=>{if(l.fixed)return;const c=bi(l.position,l.displacement);let h=1/0;this.targetShape.forEach(d=>{const p=$n(fi(c,d));p<h&&(h=p)}),i+=h*h,s++}),s>0?Math.sqrt(i/s):0}computeThicknessPenalty(t){const i=this.mesh.elements.length;return t.slice(0,i).reduce((l,c)=>l+c,0)/i}getAveragePressure(t){const i=this.mesh.elements.length,s=this.mesh.numChambers||1;return t.slice(i,i+s).reduce((c,h)=>c+h,0)/s*1e5}getProgress(){return this.iteration/this.maxIterations}getBestDesign(){return{designVars:this.designVars,score:this.currentScore,iteration:this.iteration}}reset(){this.initialize(),this.history=[]}}class DA{constructor(t,i,s){this.mesh=t,this.material=i,this.targetShape=s,this.populationSize=20,this.mutationRate=.1,this.crossoverRate=.7,this.eliteSize=3,this.generation=0,this.maxGenerations=50,this.population=[],this.bestIndividual=null,this.currentScore=0,this.converged=!1,this.history=[],this.name="Evolutionary Algorithm"}initialize(){const t=this.mesh.elements.length,i=this.mesh.numChambers||1,s=t*2+i;this.population=[];for(let l=0;l<this.populationSize;l++){const c={genes:Array(s).fill(0).map(()=>Math.random()),fitness:0};this.population.push(c)}this.generation=0,this.converged=!1,this.evaluatePopulation()}step(){if(this.converged||this.generation>=this.maxGenerations)return this.converged=!0,{converged:!0,score:this.currentScore};const t=this.selectParents(),i=this.generateOffspring(t),s=[...this.population].sort((c,h)=>h.fitness-c.fitness).slice(0,this.eliteSize);this.population=[...s,...i.slice(0,this.populationSize-this.eliteSize)],this.evaluatePopulation(),this.generation++;const l=this.population[0];return this.bestIndividual=l,this.currentScore=l.fitness,this.history.push({generation:this.generation,bestFitness:l.fitness,avgFitness:this.population.reduce((c,h)=>c+h.fitness,0)/this.population.length,diversity:this.computeDiversity()}),this.computeDiversity()<.01&&(this.converged=!0),{converged:this.converged,score:this.currentScore,iteration:this.generation}}evaluatePopulation(){this.population.forEach(t=>{t.fitness=this.evaluateFitness(t.genes)}),this.population.sort((t,i)=>i.fitness-t.fitness)}evaluateFitness(t){this.applyGenes(t);const i=this.getAveragePressure(t),s=Id(this.mesh,this.material,i,20),l=this.computeShapeError(s.mesh),c=Math.max(0,s.maxStress-5e6)/1e6,h=this.computeMaterialPenalty(t);return 1/(1+(l+.1*c+.05*h))}applyGenes(t){const i=this.mesh.elements.length,s=this.mesh.numChambers||1;this.mesh.elements.forEach((l,c)=>{l.thickness=.001+t[c]*.004});for(let l=0;l<s;l++){const c=t[i+l]*1e5;this.mesh.elements.forEach(h=>{(h.chamber===l||!h.chamber)&&(h.pressure=c)})}this.mesh.elements.forEach((l,c)=>{l.fiberAngle=t[i+s+c]*90})}selectParents(){const t=[];for(let s=0;s<this.populationSize;s++){const l=[];for(let c=0;c<3;c++){const h=Math.floor(Math.random()*this.population.length);l.push(this.population[h])}l.sort((c,h)=>h.fitness-c.fitness),t.push(l[0])}return t}generateOffspring(t){const i=[];for(let s=0;s<t.length-1;s+=2){const l=t[s],c=t[s+1];let h,d;Math.random()<this.crossoverRate?[h,d]=this.crossover(l,c):(h={genes:[...l.genes],fitness:0},d={genes:[...c.genes],fitness:0}),this.mutate(h),this.mutate(d),i.push(h,d)}return i}crossover(t,i){const s=[],l=[];for(let c=0;c<t.genes.length;c++)Math.random()<.5?(s.push(t.genes[c]),l.push(i.genes[c])):(s.push(i.genes[c]),l.push(t.genes[c]));return[{genes:s,fitness:0},{genes:l,fitness:0}]}mutate(t){for(let i=0;i<t.genes.length;i++)Math.random()<this.mutationRate&&(t.genes[i]=bv(t.genes[i]+Tv(0,.1),0,1))}computeShapeError(t){if(!this.targetShape||this.targetShape.length===0)return 0;let i=0,s=0;return t.nodes.forEach(l=>{if(l.fixed)return;const c=bi(l.position,l.displacement);let h=1/0;this.targetShape.forEach(d=>{const p=$n(fi(c,d));p<h&&(h=p)}),i+=h*h,s++}),s>0?Math.sqrt(i/s):0}computeMaterialPenalty(t){const i=this.mesh.elements.length;return t.slice(0,i).reduce((l,c)=>l+c,0)/i}getAveragePressure(t){const i=this.mesh.elements.length,s=this.mesh.numChambers||1;return t.slice(i,i+s).reduce((c,h)=>c+h,0)/s*1e5}computeDiversity(){if(this.population.length<2)return 1;let t=0,i=0;for(let s=0;s<this.population.length;s++)for(let l=s+1;l<this.population.length;l++){const c=this.hammingDistance(this.population[s].genes,this.population[l].genes);t+=c,i++}return t/i}hammingDistance(t,i){let s=0;for(let l=0;l<t.length;l++)s+=Math.abs(t[l]-i[l]);return s/t.length}getProgress(){return this.generation/this.maxGenerations}getBestDesign(){var t;return{designVars:((t=this.bestIndividual)==null?void 0:t.genes)||[],score:this.currentScore,iteration:this.generation}}reset(){this.initialize(),this.history=[]}}class UA{constructor(t,i,s){this.mesh=t,this.material=i,this.targetShape=s,this.iteration=0,this.maxIterations=40,this.observations=[],this.currentScore=0,this.converged=!1,this.history=[],this.bestPoint=null,this.name="Bayesian Optimization",this.lengthScale=.2,this.signalVariance=1,this.noiseVariance=.01,this.explorationWeight=2}initialize(){const t=this.mesh.elements.length,i=this.mesh.numChambers||1,s=t*2+i;this.dimension=s,this.observations=[],this.iteration=0,this.converged=!1;const l=Math.min(5,this.maxIterations);for(let c=0;c<l;c++){const h=Array(s).fill(0).map(()=>Math.random()),d=this.evaluate(h);this.observations.push({point:h,value:d}),this.iteration++}this.updateBest()}step(){if(this.converged||this.iteration>=this.maxIterations)return this.converged=!0,{converged:!0,score:this.currentScore};const t=this.selectNextPoint(),i=this.evaluate(t);if(this.observations.push({point:t,value:i}),this.iteration++,this.updateBest(),this.history.push({iteration:this.iteration,bestValue:this.currentScore,numObservations:this.observations.length,explorationWeight:this.explorationWeight}),this.iteration>10){const s=this.history.slice(-5).map(c=>c.bestValue);Math.max(...s)-Math.min(...s)<.001&&(this.converged=!0)}return{converged:this.converged,score:this.currentScore,iteration:this.iteration}}selectNextPoint(){let i=null,s=-1/0;for(let l=0;l<100;l++){const c=Array(this.dimension).fill(0).map(()=>Math.random()),h=this.acquisitionFunction(c);h>s&&(s=h,i=c)}for(let l=0;l<10;l++){const c=Array(this.dimension).fill(0).map(()=>Tv(0,.05)),h=i.map((p,m)=>bv(p+c[m],0,1)),d=this.acquisitionFunction(h);d>s&&(s=d,i=h)}return i}acquisitionFunction(t){const{mean:i,variance:s}=this.predict(t);return i+this.explorationWeight*Math.sqrt(s)}predict(t){if(this.observations.length===0)return{mean:0,variance:this.signalVariance};const i=this.observations.map(_=>this.kernel(t,_.point)),s=this.observations.map((_,g)=>this.observations.map((x,y)=>this.kernel(_.point,x.point)+(g===y?this.noiseVariance:0))),l=this.observations.map(_=>_.value),c=this.solveLinearSystem(s,l),h=i.reduce((_,g,x)=>_+g*c[x],0),d=this.kernel(t,t),p=this.solveLinearSystem(s,i),m=d-i.reduce((_,g,x)=>_+g*p[x],0);return{mean:h,variance:Math.max(0,m)}}kernel(t,i){const s=t.reduce((l,c,h)=>l+Math.pow(c-i[h],2),0);return this.signalVariance*Math.exp(-s/(2*this.lengthScale*this.lengthScale))}solveLinearSystem(t,i){const s=t.length;let l=Array(s).fill(0),c=i.map((p,m)=>p-this.matVecMul(t,l)[m]),h=[...c],d=c.reduce((p,m)=>p+m*m,0);for(let p=0;p<s;p++){const m=this.matVecMul(t,h),_=d/h.reduce((y,E,A)=>y+E*m[A],0);l=l.map((y,E)=>y+_*h[E]),c=c.map((y,E)=>y-_*m[E]);const g=c.reduce((y,E)=>y+E*E,0);if(Math.sqrt(g)<1e-10)break;const x=g/d;h=c.map((y,E)=>y+x*h[E]),d=g}return l}matVecMul(t,i){return t.map(s=>s.reduce((l,c,h)=>l+c*i[h],0))}evaluate(t){this.applyDesignVars(t);const i=this.getAveragePressure(t),s=Id(this.mesh,this.material,i,20),l=this.computeShapeError(s.mesh),c=Math.max(0,s.maxStress-5e6)/1e6,h=this.computeMaterialPenalty(t);return 1/(1+(l+.1*c+.05*h))}applyDesignVars(t){const i=this.mesh.elements.length,s=this.mesh.numChambers||1;this.mesh.elements.forEach((l,c)=>{l.thickness=.001+t[c]*.004});for(let l=0;l<s;l++){const c=t[i+l]*1e5;this.mesh.elements.forEach(h=>{(h.chamber===l||!h.chamber)&&(h.pressure=c)})}this.mesh.elements.forEach((l,c)=>{l.fiberAngle=t[i+s+c]*90})}computeShapeError(t){if(!this.targetShape||this.targetShape.length===0)return 0;let i=0,s=0;return t.nodes.forEach(l=>{if(l.fixed)return;const c=bi(l.position,l.displacement);let h=1/0;this.targetShape.forEach(d=>{const p=$n(fi(c,d));p<h&&(h=p)}),i+=h*h,s++}),s>0?Math.sqrt(i/s):0}computeMaterialPenalty(t){const i=this.mesh.elements.length;return t.slice(0,i).reduce((l,c)=>l+c,0)/i}getAveragePressure(t){const i=this.mesh.elements.length,s=this.mesh.numChambers||1;return t.slice(i,i+s).reduce((c,h)=>c+h,0)/s*1e5}updateBest(){const t=this.observations.reduce((i,s)=>s.value>i.value?s:i,{value:-1/0,point:null});this.bestPoint=t.point,this.currentScore=t.value}getProgress(){return this.iteration/this.maxIterations}getBestDesign(){return{designVars:this.bestPoint||[],score:this.currentScore,iteration:this.iteration}}reset(){this.initialize(),this.history=[]}}function LA(){const[r,t]=qe.useState(null),[i,s]=qe.useState("silicone"),[l,c]=qe.useState("multiChamber"),[h,d]=qe.useState(5e4),[p,m]=qe.useState(null),[_,g]=qe.useState(!1),[x,y]=qe.useState([]),[E,A]=qe.useState([]),[M,v]=qe.useState(0),O=qe.useRef(null),L=qe.useRef(null);qe.useEffect(()=>{let z;switch(l){case"gripper":z=TA(10);break;case"multiChamber":z=F0(3,8);break;case"mckibben":z=AA(12);break;default:z=F0(3,8)}t(z);const Y=G0(),w=Y[i]||Y.silicone;L.current=new Av(z,w)},[l,i]),qe.useEffect(()=>{if(L.current&&!_){L.current.setPressure(-1,h);for(let z=0;z<20;z++)L.current.step();t({...L.current.mesh}),A(L.current.getStressDistribution()),v(L.current.maxStress)}},[h,_]);const D=qe.useCallback(()=>{if(!r||!p){alert("Please select a challenge first!");return}g(!0);const z=G0(),Y=z[i]||z.silicone,w=new wA(JSON.parse(JSON.stringify(r)),Y,p.targetShape);w.initialize();const C=new DA(JSON.parse(JSON.stringify(r)),Y,p.targetShape);C.initialize();const B=new UA(JSON.parse(JSON.stringify(r)),Y,p.targetShape);B.initialize();const ot=[{instance:w,name:w.name,score:w.currentScore,progress:w.getProgress(),iteration:w.iteration,maxIterations:w.maxIterations,converged:w.converged},{instance:C,name:C.name,score:C.currentScore,progress:C.getProgress(),iteration:C.generation,maxIterations:C.maxGenerations,converged:C.converged},{instance:B,name:B.name,score:B.currentScore,progress:B.getProgress(),iteration:B.iteration,maxIterations:B.maxIterations,converged:B.converged}];y(ot);const st=()=>{if(ot.every(dt=>dt.converged))g(!1);else{ot.forEach(P=>{if(!P.converged){const W=P.instance.step();P.score=W.score,P.progress=P.instance.getProgress(),P.iteration=W.iteration||P.iteration,P.converged=W.converged}}),y([...ot]);const dt=ot.reduce((P,W)=>W.score>P.score?W:P);dt.instance.mesh&&(t({...dt.instance.mesh}),L.current&&(A(L.current.getStressDistribution()),v(L.current.maxStress))),O.current=setTimeout(st,100)}};st()},[r,p,i]),et=qe.useCallback(()=>{g(!1),O.current&&(clearTimeout(O.current),O.current=null)},[]),H=qe.useCallback(()=>{if(et(),y([]),m(null),L.current){L.current.reset(),L.current.setPressure(-1,h);for(let z=0;z<20;z++)L.current.step();t({...L.current.mesh}),A(L.current.getStressDistribution()),v(L.current.maxStress)}},[et,h]);return Et.jsxs("div",{className:"app-container",children:[Et.jsx("header",{className:"header",children:Et.jsxs("div",{className:"header-content",children:[Et.jsx("div",{className:"logo",children:Et.jsx("div",{className:"logo-text",children:"DELBY AI"})}),Et.jsx("div",{className:"tagline",children:"Sensor Data Platform for Autonomous Vehicles"})]})}),Et.jsxs("div",{style:{padding:"2rem",textAlign:"center",background:"var(--bg-secondary)",borderBottom:"1px solid var(--border-color)"},children:[Et.jsx("h1",{style:{fontSize:"2rem",fontWeight:700,marginBottom:"0.5rem",background:"linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"SoftMorph: Pneumatic Inverse Designer"}),Et.jsx("p",{style:{fontSize:"1.125rem",color:"var(--text-secondary)",maxWidth:"900px",margin:"0 auto"},children:"Interactive real-time FEM soft actuator topology optimization. Race three algorithms to discover optimal pneumatic gripper designs."})]}),Et.jsxs("main",{className:"main-content",children:[Et.jsxs("div",{className:"canvas-section",children:[Et.jsx(gA,{mesh:r,stresses:E,maxStress:M}),Et.jsxs("div",{style:{padding:"1rem",background:"var(--bg-tertiary)",borderTop:"1px solid var(--border-color)",display:"flex",gap:"1rem",justifyContent:"center",flexWrap:"wrap"},children:[Et.jsx("button",{className:"btn btn-success",onClick:D,disabled:_||!p,children:"🏁 Start Optimization Race"}),Et.jsx("button",{className:"btn btn-danger",onClick:et,disabled:!_,children:"⏹ Stop"}),Et.jsx("button",{className:"btn btn-secondary",onClick:H,children:"🔄 Reset"})]})]}),Et.jsxs("div",{className:"control-panel",children:[Et.jsx(MA,{selectedChallenge:p,onSelectChallenge:m}),Et.jsx(EA,{optimizers:x,isRunning:_}),Et.jsx(bA,{pressure:h,onPressureChange:d,material:i,onMaterialChange:s,actuatorType:l,onActuatorTypeChange:c})]})]}),Et.jsxs("footer",{style:{padding:"2rem",textAlign:"center",background:"var(--bg-secondary)",borderTop:"1px solid var(--border-color)",color:"var(--text-tertiary)",fontSize:"0.875rem"},children:[Et.jsx("p",{children:"Built with Three.js, React, real FEM simulation, and competitive optimization algorithms."}),Et.jsx("p",{style:{marginTop:"0.5rem"},children:"Features: Neo-Hookean & Mooney-Rivlin hyperelastic models • Gradient Descent, Evolutionary & Bayesian optimization • Contact mechanics • Stress visualization"})]})]})}kx.createRoot(document.getElementById("root")).render(Et.jsx(Px.StrictMode,{children:Et.jsx(LA,{})}));
