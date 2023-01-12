(self["webpackChunkmy_dictionary2"]=self["webpackChunkmy_dictionary2"]||[]).push([[998],{4444:function(t,e,n){"use strict";n.d(e,{BH:function(){return m},DV:function(){return $},GJ:function(){return L},L:function(){return h},LL:function(){return k},Pz:function(){return A},UI:function(){return M},US:function(){return l},Yr:function(){return w},ZR:function(){return T},b$:function(){return _},cI:function(){return O},dS:function(){return G},eu:function(){return S},g5:function(){return s},gK:function(){return K},gQ:function(){return z},h$:function(){return c},hl:function(){return C},hu:function(){return r},m9:function(){return X},ne:function(){return H},p$:function(){return d},pd:function(){return U},r3:function(){return R},ru:function(){return y},tV:function(){return u},uI:function(){return v},ug:function(){return Y},vZ:function(){return F},w1:function(){return b},w9:function(){return N},xO:function(){return B},xb:function(){return D},z$:function(){return g},zd:function(){return V}});
/**
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
 */
const i={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},r=function(t,e){if(!t)throw s(e)},s=function(t){return new Error("Firebase Database ("+i.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)},o=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):55296===(64512&r)&&i+1<t.length&&56320===(64512&t.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++i)),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e},a=function(t){const e=[];let n=0,i=0;while(n<t.length){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],l=((7&r)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(1023&l))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return e.join("")},l={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const e=t[r],s=r+1<t.length,o=s?t[r+1]:0,a=r+2<t.length,l=a?t[r+2]:0,c=e>>2,h=(3&e)<<4|o>>4;let u=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(u=64)),i.push(n[c],n[h],n[u],n[d])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(o(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):a(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const e=n[t.charAt(r++)],s=r<t.length,o=s?n[t.charAt(r)]:0;++r;const a=r<t.length,l=a?n[t.charAt(r)]:64;++r;const c=r<t.length,h=c?n[t.charAt(r)]:64;if(++r,null==e||null==o||null==l||null==h)throw Error();const u=e<<2|o>>4;if(i.push(u),64!==l){const t=o<<4&240|l>>2;if(i.push(t),64!==h){const t=l<<6&192|h;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},c=function(t){const e=o(t);return l.encodeByteArray(e,!0)},h=function(t){return c(t).replace(/\./g,"")},u=function(t){try{return l.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
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
 */
/**
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
 */
function d(t){return p(void 0,t)}function p(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)e.hasOwnProperty(n)&&f(n)&&(t[n]=p(t[n],e[n]));return t}function f(t){return"__proto__"!==t}
/**
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
 */class m{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
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
 */
/**
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
 */
function g(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function v(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(g())}function y(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function _(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function b(){const t=g();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function w(){return!0===i.NODE_CLIENT||!0===i.NODE_ADMIN}function C(){return"object"===typeof indexedDB}function S(){return new Promise(((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}
/**
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
 */
const E="FirebaseError";class T extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=E,Object.setPrototypeOf(this,T.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,k.prototype.create)}}class k{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,r=this.errors[t],s=r?I(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`,a=new T(i,o,n);return a}}function I(t,e){return t.replace(x,((t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`}))}const x=/\{\$([^}]+)}/g;
/**
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
 */function O(t){return JSON.parse(t)}function A(t){return JSON.stringify(t)}
/**
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
 */const P=function(t){let e={},n={},i={},r="";try{const s=t.split(".");e=O(u(s[0])||""),n=O(u(s[1])||""),r=s[2],i=n["d"]||{},delete n["d"]}catch(s){}return{header:e,claims:n,data:i,signature:r}},N=function(t){const e=P(t),n=e.claims;return!!n&&"object"===typeof n&&n.hasOwnProperty("iat")},L=function(t){const e=P(t).claims;return"object"===typeof e&&!0===e["admin"]};
/**
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
 */
function R(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function $(t,e){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:void 0}function D(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function M(t,e,n){const i={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=e.call(n,t[r],r,t));return i}function F(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const n=t[r],s=e[r];if(j(n)&&j(s)){if(!F(n,s))return!1}else if(n!==s)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function j(t){return null!==t&&"object"===typeof t}
/**
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
 */
/**
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
 */
function B(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function V(t){const e={},n=t.replace(/^\?/,"").split("&");return n.forEach((t=>{if(t){const[n,i]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(i)}})),e}function U(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
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
 */class z{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,e){e||(e=0);const n=this.W_;if("string"===typeof t)for(let h=0;h<16;h++)n[h]=t.charCodeAt(e)<<24|t.charCodeAt(e+1)<<16|t.charCodeAt(e+2)<<8|t.charCodeAt(e+3),e+=4;else for(let h=0;h<16;h++)n[h]=t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3],e+=4;for(let h=16;h<80;h++){const t=n[h-3]^n[h-8]^n[h-14]^n[h-16];n[h]=4294967295&(t<<1|t>>>31)}let i,r,s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],l=this.chain_[3],c=this.chain_[4];for(let h=0;h<80;h++){h<40?h<20?(i=l^o&(a^l),r=1518500249):(i=o^a^l,r=1859775393):h<60?(i=o&a|l&(o|a),r=2400959708):(i=o^a^l,r=3395469782);const t=(s<<5|s>>>27)+i+c+r+n[h]&4294967295;c=l,l=a,a=4294967295&(o<<30|o>>>2),o=s,s=t}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(t,e){if(null==t)return;void 0===e&&(e=t.length);const n=e-this.blockSize;let i=0;const r=this.buf_;let s=this.inbuf_;while(i<e){if(0===s)while(i<=n)this.compress_(t,i),i+=this.blockSize;if("string"===typeof t){while(i<e)if(r[s]=t.charCodeAt(i),++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}else while(i<e)if(r[s]=t[i],++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}this.inbuf_=s,this.total_+=e}digest(){const t=[];let e=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=255&e,e/=256;this.compress_(this.buf_);let n=0;for(let i=0;i<5;i++)for(let e=24;e>=0;e-=8)t[n]=this.chain_[i]>>e&255,++n;return t}}function H(t,e){const n=new q(t,e);return n.subscribe.bind(n)}class q{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let i;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");i=W(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===i.next&&(i.next=Z),void 0===i.error&&(i.error=Z),void 0===i.complete&&(i.complete=Z);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(t){}})),this.observers.push(i),r}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function W(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function Z(){}
/**
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
 */function K(t,e){return`${t} failed: ${e} argument `}
/**
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
 */
const G=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const e=s-55296;i++,r(i<t.length,"Surrogate pair missing trail surrogate.");const n=t.charCodeAt(i)-56320;s=65536+(e<<10)+n}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=63&s|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=63&s|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=63&s|128)}return e},Y=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};
/**
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
 */
function X(t){return t&&t._delegate?t._delegate:t}},1001:function(t,e,n){"use strict";function i(t,e,n,i,r,s,o,a){var l,c="function"===typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),s&&(c._scopeId="data-v-"+s),o?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=l):r&&(l=a?function(){r.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:r),l)if(c.functional){c._injectStyles=l;var h=c.render;c.render=function(t,e){return l.call(e),h(t,e)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,l):[l]}return{exports:t,options:c}}n.d(e,{Z:function(){return i}})},9662:function(t,e,n){var i=n(614),r=n(6330),s=TypeError;t.exports=function(t){if(i(t))return t;throw s(r(t)+" is not a function")}},6077:function(t,e,n){var i=n(614),r=String,s=TypeError;t.exports=function(t){if("object"==typeof t||i(t))return t;throw s("Can't set "+r(t)+" as a prototype")}},1223:function(t,e,n){var i=n(5112),r=n(30),s=n(3070).f,o=i("unscopables"),a=Array.prototype;void 0==a[o]&&s(a,o,{configurable:!0,value:r(null)}),t.exports=function(t){a[o][t]=!0}},9670:function(t,e,n){var i=n(111),r=String,s=TypeError;t.exports=function(t){if(i(t))return t;throw s(r(t)+" is not an object")}},1318:function(t,e,n){var i=n(5656),r=n(1400),s=n(6244),o=function(t){return function(e,n,o){var a,l=i(e),c=s(l),h=r(o,c);if(t&&n!=n){while(c>h)if(a=l[h++],a!=a)return!0}else for(;c>h;h++)if((t||h in l)&&l[h]===n)return t||h||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},4326:function(t,e,n){var i=n(1702),r=i({}.toString),s=i("".slice);t.exports=function(t){return s(r(t),8,-1)}},648:function(t,e,n){var i=n(1694),r=n(614),s=n(4326),o=n(5112),a=o("toStringTag"),l=Object,c="Arguments"==s(function(){return arguments}()),h=function(t,e){try{return t[e]}catch(n){}};t.exports=i?s:function(t){var e,n,i;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=h(e=l(t),a))?n:c?s(e):"Object"==(i=s(e))&&r(e.callee)?"Arguments":i}},7741:function(t,e,n){var i=n(1702),r=Error,s=i("".replace),o=function(t){return String(r(t).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,l=a.test(o);t.exports=function(t,e){if(l&&"string"==typeof t&&!r.prepareStackTrace)while(e--)t=s(t,a,"");return t}},9920:function(t,e,n){var i=n(2597),r=n(3887),s=n(1236),o=n(3070);t.exports=function(t,e,n){for(var a=r(e),l=o.f,c=s.f,h=0;h<a.length;h++){var u=a[h];i(t,u)||n&&i(n,u)||l(t,u,c(e,u))}}},8880:function(t,e,n){var i=n(9781),r=n(3070),s=n(9114);t.exports=i?function(t,e,n){return r.f(t,e,s(1,n))}:function(t,e,n){return t[e]=n,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},8052:function(t,e,n){var i=n(614),r=n(3070),s=n(6339),o=n(3072);t.exports=function(t,e,n,a){a||(a={});var l=a.enumerable,c=void 0!==a.name?a.name:e;if(i(n)&&s(n,c,a),a.global)l?t[e]=n:o(e,n);else{try{a.unsafe?t[e]&&(l=!0):delete t[e]}catch(h){}l?t[e]=n:r.f(t,e,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return t}},3072:function(t,e,n){var i=n(7854),r=Object.defineProperty;t.exports=function(t,e){try{r(i,t,{value:e,configurable:!0,writable:!0})}catch(n){i[t]=e}return e}},9781:function(t,e,n){var i=n(7293);t.exports=!i((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,e,n){var i=n(7854),r=n(111),s=i.document,o=r(s)&&r(s.createElement);t.exports=function(t){return o?s.createElement(t):{}}},8113:function(t,e,n){var i=n(5005);t.exports=i("navigator","userAgent")||""},7392:function(t,e,n){var i,r,s=n(7854),o=n(8113),a=s.process,l=s.Deno,c=a&&a.versions||l&&l.version,h=c&&c.v8;h&&(i=h.split("."),r=i[0]>0&&i[0]<4?1:+(i[0]+i[1])),!r&&o&&(i=o.match(/Edge\/(\d+)/),(!i||i[1]>=74)&&(i=o.match(/Chrome\/(\d+)/),i&&(r=+i[1]))),t.exports=r},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2914:function(t,e,n){var i=n(7293),r=n(9114);t.exports=!i((function(){var t=Error("a");return!("stack"in t)||(Object.defineProperty(t,"stack",r(1,7)),7!==t.stack)}))},2109:function(t,e,n){var i=n(7854),r=n(1236).f,s=n(8880),o=n(8052),a=n(3072),l=n(9920),c=n(4705);t.exports=function(t,e){var n,h,u,d,p,f,m=t.target,g=t.global,v=t.stat;if(h=g?i:v?i[m]||a(m,{}):(i[m]||{}).prototype,h)for(u in e){if(p=e[u],t.dontCallGetSet?(f=r(h,u),d=f&&f.value):d=h[u],n=c(g?u:m+(v?".":"#")+u,t.forced),!n&&void 0!==d){if(typeof p==typeof d)continue;l(p,d)}(t.sham||d&&d.sham)&&s(p,"sham",!0),o(h,u,p,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},2104:function(t,e,n){var i=n(4374),r=Function.prototype,s=r.apply,o=r.call;t.exports="object"==typeof Reflect&&Reflect.apply||(i?o.bind(s):function(){return o.apply(s,arguments)})},4374:function(t,e,n){var i=n(7293);t.exports=!i((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,e,n){var i=n(4374),r=Function.prototype.call;t.exports=i?r.bind(r):function(){return r.apply(r,arguments)}},6530:function(t,e,n){var i=n(9781),r=n(2597),s=Function.prototype,o=i&&Object.getOwnPropertyDescriptor,a=r(s,"name"),l=a&&"something"===function(){}.name,c=a&&(!i||i&&o(s,"name").configurable);t.exports={EXISTS:a,PROPER:l,CONFIGURABLE:c}},1702:function(t,e,n){var i=n(4374),r=Function.prototype,s=r.bind,o=r.call,a=i&&s.bind(o,o);t.exports=i?function(t){return t&&a(t)}:function(t){return t&&function(){return o.apply(t,arguments)}}},5005:function(t,e,n){var i=n(7854),r=n(614),s=function(t){return r(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?s(i[t]):i[t]&&i[t][e]}},8173:function(t,e,n){var i=n(9662);t.exports=function(t,e){var n=t[e];return null==n?void 0:i(n)}},7854:function(t,e,n){var i=function(t){return t&&t.Math==Math&&t};t.exports=i("object"==typeof globalThis&&globalThis)||i("object"==typeof window&&window)||i("object"==typeof self&&self)||i("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(t,e,n){var i=n(1702),r=n(7908),s=i({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return s(r(t),e)}},3501:function(t){t.exports={}},490:function(t,e,n){var i=n(5005);t.exports=i("document","documentElement")},4664:function(t,e,n){var i=n(9781),r=n(7293),s=n(317);t.exports=!i&&!r((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,n){var i=n(1702),r=n(7293),s=n(4326),o=Object,a=i("".split);t.exports=r((function(){return!o("z").propertyIsEnumerable(0)}))?function(t){return"String"==s(t)?a(t,""):o(t)}:o},9587:function(t,e,n){var i=n(614),r=n(111),s=n(7674);t.exports=function(t,e,n){var o,a;return s&&i(o=e.constructor)&&o!==n&&r(a=o.prototype)&&a!==n.prototype&&s(t,a),t}},2788:function(t,e,n){var i=n(1702),r=n(614),s=n(5465),o=i(Function.toString);r(s.inspectSource)||(s.inspectSource=function(t){return o(t)}),t.exports=s.inspectSource},8340:function(t,e,n){var i=n(111),r=n(8880);t.exports=function(t,e){i(e)&&"cause"in e&&r(t,"cause",e.cause)}},9909:function(t,e,n){var i,r,s,o=n(8536),a=n(7854),l=n(1702),c=n(111),h=n(8880),u=n(2597),d=n(5465),p=n(6200),f=n(3501),m="Object already initialized",g=a.TypeError,v=a.WeakMap,y=function(t){return s(t)?r(t):i(t,{})},_=function(t){return function(e){var n;if(!c(e)||(n=r(e)).type!==t)throw g("Incompatible receiver, "+t+" required");return n}};if(o||d.state){var b=d.state||(d.state=new v),w=l(b.get),C=l(b.has),S=l(b.set);i=function(t,e){if(C(b,t))throw new g(m);return e.facade=t,S(b,t,e),e},r=function(t){return w(b,t)||{}},s=function(t){return C(b,t)}}else{var E=p("state");f[E]=!0,i=function(t,e){if(u(t,E))throw new g(m);return e.facade=t,h(t,E,e),e},r=function(t){return u(t,E)?t[E]:{}},s=function(t){return u(t,E)}}t.exports={set:i,get:r,has:s,enforce:y,getterFor:_}},614:function(t){t.exports=function(t){return"function"==typeof t}},4705:function(t,e,n){var i=n(7293),r=n(614),s=/#|\.prototype\./,o=function(t,e){var n=l[a(t)];return n==h||n!=c&&(r(e)?i(e):!!e)},a=o.normalize=function(t){return String(t).replace(s,".").toLowerCase()},l=o.data={},c=o.NATIVE="N",h=o.POLYFILL="P";t.exports=o},111:function(t,e,n){var i=n(614);t.exports=function(t){return"object"==typeof t?null!==t:i(t)}},1913:function(t){t.exports=!1},2190:function(t,e,n){var i=n(5005),r=n(614),s=n(7976),o=n(3307),a=Object;t.exports=o?function(t){return"symbol"==typeof t}:function(t){var e=i("Symbol");return r(e)&&s(e.prototype,a(t))}},6244:function(t,e,n){var i=n(7466);t.exports=function(t){return i(t.length)}},6339:function(t,e,n){var i=n(7293),r=n(614),s=n(2597),o=n(9781),a=n(6530).CONFIGURABLE,l=n(2788),c=n(9909),h=c.enforce,u=c.get,d=Object.defineProperty,p=o&&!i((function(){return 8!==d((function(){}),"length",{value:8}).length})),f=String(String).split("String"),m=t.exports=function(t,e,n){"Symbol("===String(e).slice(0,7)&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!s(t,"name")||a&&t.name!==e)&&(o?d(t,"name",{value:e,configurable:!0}):t.name=e),p&&n&&s(n,"arity")&&t.length!==n.arity&&d(t,"length",{value:n.arity});try{n&&s(n,"constructor")&&n.constructor?o&&d(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(r){}var i=h(t);return s(i,"source")||(i.source=f.join("string"==typeof e?e:"")),t};Function.prototype.toString=m((function(){return r(this)&&u(this).source||l(this)}),"toString")},4758:function(t){var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var i=+t;return(i>0?n:e)(i)}},133:function(t,e,n){var i=n(7392),r=n(7293);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&i&&i<41}))},8536:function(t,e,n){var i=n(7854),r=n(614),s=n(2788),o=i.WeakMap;t.exports=r(o)&&/native code/.test(s(o))},6277:function(t,e,n){var i=n(1340);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:i(t)}},30:function(t,e,n){var i,r=n(9670),s=n(6048),o=n(748),a=n(3501),l=n(490),c=n(317),h=n(6200),u=">",d="<",p="prototype",f="script",m=h("IE_PROTO"),g=function(){},v=function(t){return d+f+u+t+d+"/"+f+u},y=function(t){t.write(v("")),t.close();var e=t.parentWindow.Object;return t=null,e},_=function(){var t,e=c("iframe"),n="java"+f+":";return e.style.display="none",l.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(v("document.F=Object")),t.close(),t.F},b=function(){try{i=new ActiveXObject("htmlfile")}catch(e){}b="undefined"!=typeof document?document.domain&&i?y(i):_():y(i);var t=o.length;while(t--)delete b[p][o[t]];return b()};a[m]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(g[p]=r(t),n=new g,g[p]=null,n[m]=t):n=b(),void 0===e?n:s.f(n,e)}},6048:function(t,e,n){var i=n(9781),r=n(3353),s=n(3070),o=n(9670),a=n(5656),l=n(1956);e.f=i&&!r?Object.defineProperties:function(t,e){o(t);var n,i=a(e),r=l(e),c=r.length,h=0;while(c>h)s.f(t,n=r[h++],i[n]);return t}},3070:function(t,e,n){var i=n(9781),r=n(4664),s=n(3353),o=n(9670),a=n(4948),l=TypeError,c=Object.defineProperty,h=Object.getOwnPropertyDescriptor,u="enumerable",d="configurable",p="writable";e.f=i?s?function(t,e,n){if(o(t),e=a(e),o(n),"function"===typeof t&&"prototype"===e&&"value"in n&&p in n&&!n[p]){var i=h(t,e);i&&i[p]&&(t[e]=n.value,n={configurable:d in n?n[d]:i[d],enumerable:u in n?n[u]:i[u],writable:!1})}return c(t,e,n)}:c:function(t,e,n){if(o(t),e=a(e),o(n),r)try{return c(t,e,n)}catch(i){}if("get"in n||"set"in n)throw l("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:function(t,e,n){var i=n(9781),r=n(6916),s=n(5296),o=n(9114),a=n(5656),l=n(4948),c=n(2597),h=n(4664),u=Object.getOwnPropertyDescriptor;e.f=i?u:function(t,e){if(t=a(t),e=l(e),h)try{return u(t,e)}catch(n){}if(c(t,e))return o(!r(s.f,t,e),t[e])}},8006:function(t,e,n){var i=n(6324),r=n(748),s=r.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return i(t,s)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},7976:function(t,e,n){var i=n(1702);t.exports=i({}.isPrototypeOf)},6324:function(t,e,n){var i=n(1702),r=n(2597),s=n(5656),o=n(1318).indexOf,a=n(3501),l=i([].push);t.exports=function(t,e){var n,i=s(t),c=0,h=[];for(n in i)!r(a,n)&&r(i,n)&&l(h,n);while(e.length>c)r(i,n=e[c++])&&(~o(h,n)||l(h,n));return h}},1956:function(t,e,n){var i=n(6324),r=n(748);t.exports=Object.keys||function(t){return i(t,r)}},5296:function(t,e){"use strict";var n={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,r=i&&!n.call({1:2},1);e.f=r?function(t){var e=i(this,t);return!!e&&e.enumerable}:n},7674:function(t,e,n){var i=n(1702),r=n(9670),s=n(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=i(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),t(n,[]),e=n instanceof Array}catch(o){}return function(n,i){return r(n),s(i),e?t(n,i):n.__proto__=i,n}}():void 0)},2140:function(t,e,n){var i=n(6916),r=n(614),s=n(111),o=TypeError;t.exports=function(t,e){var n,a;if("string"===e&&r(n=t.toString)&&!s(a=i(n,t)))return a;if(r(n=t.valueOf)&&!s(a=i(n,t)))return a;if("string"!==e&&r(n=t.toString)&&!s(a=i(n,t)))return a;throw o("Can't convert object to primitive value")}},3887:function(t,e,n){var i=n(5005),r=n(1702),s=n(8006),o=n(5181),a=n(9670),l=r([].concat);t.exports=i("Reflect","ownKeys")||function(t){var e=s.f(a(t)),n=o.f;return n?l(e,n(t)):e}},2626:function(t,e,n){var i=n(3070).f;t.exports=function(t,e,n){n in t||i(t,n,{configurable:!0,get:function(){return e[n]},set:function(t){e[n]=t}})}},4488:function(t){var e=TypeError;t.exports=function(t){if(void 0==t)throw e("Can't call method on "+t);return t}},6200:function(t,e,n){var i=n(2309),r=n(9711),s=i("keys");t.exports=function(t){return s[t]||(s[t]=r(t))}},5465:function(t,e,n){var i=n(7854),r=n(3072),s="__core-js_shared__",o=i[s]||r(s,{});t.exports=o},2309:function(t,e,n){var i=n(1913),r=n(5465);(t.exports=function(t,e){return r[t]||(r[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.23.4",mode:i?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.23.4/LICENSE",source:"https://github.com/zloirock/core-js"})},1400:function(t,e,n){var i=n(9303),r=Math.max,s=Math.min;t.exports=function(t,e){var n=i(t);return n<0?r(n+e,0):s(n,e)}},5656:function(t,e,n){var i=n(8361),r=n(4488);t.exports=function(t){return i(r(t))}},9303:function(t,e,n){var i=n(4758);t.exports=function(t){var e=+t;return e!==e||0===e?0:i(e)}},7466:function(t,e,n){var i=n(9303),r=Math.min;t.exports=function(t){return t>0?r(i(t),9007199254740991):0}},7908:function(t,e,n){var i=n(4488),r=Object;t.exports=function(t){return r(i(t))}},7593:function(t,e,n){var i=n(6916),r=n(111),s=n(2190),o=n(8173),a=n(2140),l=n(5112),c=TypeError,h=l("toPrimitive");t.exports=function(t,e){if(!r(t)||s(t))return t;var n,l=o(t,h);if(l){if(void 0===e&&(e="default"),n=i(l,t,e),!r(n)||s(n))return n;throw c("Can't convert object to primitive value")}return void 0===e&&(e="number"),a(t,e)}},4948:function(t,e,n){var i=n(7593),r=n(2190);t.exports=function(t){var e=i(t,"string");return r(e)?e:e+""}},1694:function(t,e,n){var i=n(5112),r=i("toStringTag"),s={};s[r]="z",t.exports="[object z]"===String(s)},1340:function(t,e,n){var i=n(648),r=String;t.exports=function(t){if("Symbol"===i(t))throw TypeError("Cannot convert a Symbol value to a string");return r(t)}},6330:function(t){var e=String;t.exports=function(t){try{return e(t)}catch(n){return"Object"}}},9711:function(t,e,n){var i=n(1702),r=0,s=Math.random(),o=i(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+o(++r+s,36)}},3307:function(t,e,n){var i=n(133);t.exports=i&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,e,n){var i=n(9781),r=n(7293);t.exports=i&&r((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5112:function(t,e,n){var i=n(7854),r=n(2309),s=n(2597),o=n(9711),a=n(133),l=n(3307),c=r("wks"),h=i.Symbol,u=h&&h["for"],d=l?h:h&&h.withoutSetter||o;t.exports=function(t){if(!s(c,t)||!a&&"string"!=typeof c[t]){var e="Symbol."+t;a&&s(h,t)?c[t]=h[t]:c[t]=l&&u?u(e):d(e)}return c[t]}},9191:function(t,e,n){"use strict";var i=n(5005),r=n(2597),s=n(8880),o=n(7976),a=n(7674),l=n(9920),c=n(2626),h=n(9587),u=n(6277),d=n(8340),p=n(7741),f=n(2914),m=n(9781),g=n(1913);t.exports=function(t,e,n,v){var y="stackTraceLimit",_=v?2:1,b=t.split("."),w=b[b.length-1],C=i.apply(null,b);if(C){var S=C.prototype;if(!g&&r(S,"cause")&&delete S.cause,!n)return C;var E=i("Error"),T=e((function(t,e){var n=u(v?e:t,void 0),i=v?new C(t):new C;return void 0!==n&&s(i,"message",n),f&&s(i,"stack",p(i.stack,2)),this&&o(S,this)&&h(i,this,T),arguments.length>_&&d(i,arguments[_]),i}));if(T.prototype=S,"Error"!==w?a?a(T,E):l(T,E,{name:!0}):m&&y in C&&(c(T,C,y),c(T,C,"prepareStackTrace")),l(T,C),!g)try{S.name!==w&&s(S,"name",w),S.constructor=T}catch(k){}return T}}},6699:function(t,e,n){"use strict";var i=n(2109),r=n(1318).includes,s=n(7293),o=n(1223),a=s((function(){return!Array(1).includes()}));i({target:"Array",proto:!0,forced:a},{includes:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),o("includes")},1703:function(t,e,n){var i=n(2109),r=n(7854),s=n(2104),o=n(9191),a="WebAssembly",l=r[a],c=7!==Error("e",{cause:7}).cause,h=function(t,e){var n={};n[t]=o(t,e,c),i({global:!0,constructor:!0,arity:1,forced:c},n)},u=function(t,e){if(l&&l[t]){var n={};n[t]=o(a+"."+t,e,c),i({target:a,stat:!0,constructor:!0,arity:1,forced:c},n)}};h("Error",(function(t){return function(e){return s(t,this,arguments)}})),h("EvalError",(function(t){return function(e){return s(t,this,arguments)}})),h("RangeError",(function(t){return function(e){return s(t,this,arguments)}})),h("ReferenceError",(function(t){return function(e){return s(t,this,arguments)}})),h("SyntaxError",(function(t){return function(e){return s(t,this,arguments)}})),h("TypeError",(function(t){return function(e){return s(t,this,arguments)}})),h("URIError",(function(t){return function(e){return s(t,this,arguments)}})),u("CompileError",(function(t){return function(e){return s(t,this,arguments)}})),u("LinkError",(function(t){return function(e){return s(t,this,arguments)}})),u("RuntimeError",(function(t){return function(e){return s(t,this,arguments)}}))},5503:function(t,e,n){"use strict";n.d(e,{ZF:function(){return i.ZF}});var i=n(5816),r="firebase",s="9.9.0";
/**
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
 */
(0,i.KN)(r,s,"app")},65:function(t,e,n){"use strict";n.d(e,{Xb:function(){return le},v0:function(){return li},e5:function(){return ce}});var i=n(4444),r=n(5816);function s(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]])}return n}Object.create;Object.create;var o=n(3333),a=n(8463);function l(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const c=l,h=new i.LL("auth","Firebase",l()),u=new o.Yd("@firebase/auth");function d(t,...e){u.logLevel<=o["in"].ERROR&&u.error(`Auth (${r.Jn}): ${t}`,...e)}
/**
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
 */function p(t,...e){throw g(t,...e)}function f(t,...e){return g(t,...e)}function m(t,e,n){const r=Object.assign(Object.assign({},c()),{[e]:n}),s=new i.LL("auth","Firebase",r);return s.create(e,{appName:t.name})}function g(t,...e){if("string"!==typeof t){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return h.create(t,...e)}function v(t,e,...n){if(!t)throw g(e,...n)}function y(t){const e="INTERNAL ASSERTION FAILED: "+t;throw d(e),new Error(e)}function _(t,e){t||y(e)}
/**
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
 */const b=new Map;function w(t){_(t instanceof Function,"Expected a class definition");let e=b.get(t);return e?(_(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,b.set(t,e),e)}
/**
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
 */function C(t,e){const n=(0,r.qX)(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),r=n.getOptions();if((0,i.vZ)(r,null!==e&&void 0!==e?e:{}))return t;p(t,"already-initialized")}const s=n.initialize({options:e});return s}function S(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(w);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,null===e||void 0===e?void 0:e.popupRedirectResolver)}
/**
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
 */function E(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function T(){return"http:"===k()||"https:"===k()}function k(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
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
 */function I(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(T()||(0,i.ru)()||"connection"in navigator))||navigator.onLine}function x(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
/**
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
 */class O{constructor(t,e){this.shortDelay=t,this.longDelay=e,_(e>t,"Short delay should be less than long delay!"),this.isMobile=(0,i.uI)()||(0,i.b$)()}get(){return I()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
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
 */function A(t,e){_(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
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
 */class P{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void y("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void y("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void y("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
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
 */const N={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},L=new O(3e4,6e4);
/**
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
 */function R(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function $(t,e,n,r,s={}){return D(t,s,(async()=>{let s={},o={};r&&("GET"===e?o=r:s={body:JSON.stringify(r)});const a=(0,i.xO)(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),P.fetch()(F(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))}))}async function D(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},N),e);try{const e=new j(t),i=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw B(t,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const e=i.ok?s.errorMessage:s.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw B(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw B(t,"email-already-in-use",s);if("USER_DISABLED"===n)throw B(t,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw m(t,a,o);p(t,a)}}catch(s){if(s instanceof i.ZR)throw s;p(t,"network-request-failed")}}async function M(t,e,n,i,r={}){const s=await $(t,e,n,i,r);return"mfaPendingCredential"in s&&p(t,"multi-factor-auth-required",{_serverResponse:s}),s}function F(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?A(t.config,r):`${t.config.apiScheme}://${r}`}class j{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(f(this.auth,"network-request-failed"))),L.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function B(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=f(t,e,i);return r.customData._tokenResponse=n,r}
/**
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
 */async function V(t,e){return $(t,"POST","/v1/accounts:delete",e)}async function U(t,e){return $(t,"POST","/v1/accounts:lookup",e)}
/**
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
 */function z(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
/**
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
 */async function H(t,e=!1){const n=(0,i.m9)(t),r=await n.getIdToken(e),s=W(r);v(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:r,authTime:z(q(s.auth_time)),issuedAtTime:z(q(s.iat)),expirationTime:z(q(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function q(t){return 1e3*Number(t)}function W(t){var e;const[n,r,s]=t.split(".");if(void 0===n||void 0===r||void 0===s)return d("JWT malformed, contained fewer than 3 sections"),null;try{const t=(0,i.tV)(r);return t?JSON.parse(t):(d("Failed to decode base64 JWT payload"),null)}catch(o){return d("Caught error parsing JWT payload as JSON",null===(e=o)||void 0===e?void 0:e.toString()),null}}function Z(t){const e=W(t);return v(e,"internal-error"),v("undefined"!==typeof e.exp,"internal-error"),v("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
/**
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
 */async function K(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof i.ZR&&G(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function G({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
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
 */class Y{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,n=t-Date.now()-3e5;return Math.max(0,n)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){var t;try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===(t=e)||void 0===t?void 0:t.code)&&this.schedule(!0))}this.schedule()}}
/**
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
 */class X{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=z(this.lastLoginAt),this.creationTime=z(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
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
 */async function J(t){var e;const n=t.auth,i=await t.getIdToken(),r=await K(t,U(n,{idToken:i}));v(null===r||void 0===r?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=(null===(e=s.providerUserInfo)||void 0===e?void 0:e.length)?et(s.providerUserInfo):[],a=tt(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),h=!!l&&c,u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new X(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,u)}async function Q(t){const e=(0,i.m9)(t);await J(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tt(t,e){const n=t.filter((t=>!e.some((e=>e.providerId===t.providerId))));return[...n,...e]}function et(t){return t.map((t=>{var{providerId:e}=t,n=s(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
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
 */async function nt(t,e){const n=await D(t,{},(async()=>{const n=(0,i.xO)({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=F(t,r,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",P.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
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
 */class it{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){v(t.idToken,"internal-error"),v("undefined"!==typeof t.idToken,"internal-error"),v("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):Z(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return v(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:i,expiresIn:r}=await nt(t,e);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:i,expirationTime:r}=e,s=new it;return n&&(v("string"===typeof n,"internal-error",{appName:t}),s.refreshToken=n),i&&(v("string"===typeof i,"internal-error",{appName:t}),s.accessToken=i),r&&(v("number"===typeof r,"internal-error",{appName:t}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new it,this.toJSON())}_performRefresh(){return y("not implemented")}}
/**
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
 */function rt(t,e){v("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class st{constructor(t){var{uid:e,auth:n,stsTokenManager:i}=t,r=s(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Y(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new X(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(t){const e=await K(this,this.stsTokenManager.getToken(this.auth,t));return v(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return H(this,t)}reload(){return Q(this)}_assign(t){this!==t&&(v(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new st(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await J(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await K(this,V(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,i,r,s,o,a,l,c;const h=null!==(n=e.displayName)&&void 0!==n?n:void 0,u=null!==(i=e.email)&&void 0!==i?i:void 0,d=null!==(r=e.phoneNumber)&&void 0!==r?r:void 0,p=null!==(s=e.photoURL)&&void 0!==s?s:void 0,f=null!==(o=e.tenantId)&&void 0!==o?o:void 0,m=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,g=null!==(l=e.createdAt)&&void 0!==l?l:void 0,y=null!==(c=e.lastLoginAt)&&void 0!==c?c:void 0,{uid:_,emailVerified:b,isAnonymous:w,providerData:C,stsTokenManager:S}=e;v(_&&S,t,"internal-error");const E=it.fromJSON(this.name,S);v("string"===typeof _,t,"internal-error"),rt(h,t.name),rt(u,t.name),v("boolean"===typeof b,t,"internal-error"),v("boolean"===typeof w,t,"internal-error"),rt(d,t.name),rt(p,t.name),rt(f,t.name),rt(m,t.name),rt(g,t.name),rt(y,t.name);const T=new st({uid:_,auth:t,email:u,emailVerified:b,displayName:h,isAnonymous:w,photoURL:p,phoneNumber:d,tenantId:f,stsTokenManager:E,createdAt:g,lastLoginAt:y});return C&&Array.isArray(C)&&(T.providerData=C.map((t=>Object.assign({},t)))),m&&(T._redirectEventId=m),T}static async _fromIdTokenResponse(t,e,n=!1){const i=new it;i.updateFromServerResponse(e);const r=new st({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:n});return await J(r),r}}
/**
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
 */class ot{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}ot.type="NONE";const at=ot;
/**
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
 */function lt(t,e,n){return`firebase:${t}:${e}:${n}`}class ct{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=lt(this.userKey,i.apiKey,r),this.fullPersistenceKey=lt("persistence",i.apiKey,r),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?st._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new ct(w(at),t,n);const i=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let r=i[0]||w(at);const s=lt(n,t.config.apiKey,t.name);let o=null;for(const c of e)try{const e=await c._get(s);if(e){const n=st._fromJSON(t,e);c!==r&&(o=n),r=c;break}}catch(l){}const a=i.filter((t=>t._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==r)try{await t._remove(s)}catch(l){}}))),new ct(r,t,n)):new ct(r,t,n)}}
/**
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
 */function ht(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ft(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ut(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(gt(e))return"Blackberry";if(vt(e))return"Webos";if(dt(e))return"Safari";if((e.includes("chrome/")||pt(e))&&!e.includes("edge/"))return"Chrome";if(mt(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ut(t=(0,i.z$)()){return/firefox\//i.test(t)}function dt(t=(0,i.z$)()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function pt(t=(0,i.z$)()){return/crios\//i.test(t)}function ft(t=(0,i.z$)()){return/iemobile/i.test(t)}function mt(t=(0,i.z$)()){return/android/i.test(t)}function gt(t=(0,i.z$)()){return/blackberry/i.test(t)}function vt(t=(0,i.z$)()){return/webos/i.test(t)}function yt(t=(0,i.z$)()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function _t(t=(0,i.z$)()){var e;return yt(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function bt(){return(0,i.w1)()&&10===document.documentMode}function wt(t=(0,i.z$)()){return yt(t)||mt(t)||vt(t)||gt(t)||/windows phone/i.test(t)||ft(t)}function Ct(){try{return!(!window||window===window.top)}catch(t){return!1}}
/**
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
 */function St(t,e=[]){let n;switch(t){case"Browser":n=ht((0,i.z$)());break;case"Worker":n=`${ht((0,i.z$)())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${r.Jn}/${s}`}
/**
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
 */class Et{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const n=e=>new Promise(((n,i)=>{try{const i=t(e);n(i)}catch(r){i(r)}}));n.onAbort=e,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){var e;if(this.auth.currentUser===t)return;const n=[];try{for(const e of this.queue)await e(t),e.onAbort&&n.push(e.onAbort)}catch(i){n.reverse();for(const t of n)try{t()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(e=i)||void 0===e?void 0:e.message})}}}
/**
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
 */class Tt{constructor(t,e,n){this.app=t,this.heartbeatServiceProvider=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new It(this),this.idTokenSubscription=new It(this),this.beforeStateQueue=new Et(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=h,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=w(e)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await ct.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(r){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUser(t){var e;const n=await this.assertedPersistence.getCurrentUser();let i=n,r=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,s=null===i||void 0===i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(t);n&&n!==s||!(null===o||void 0===o?void 0:o.user)||(i=o.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){var e;try{await J(t)}catch(n){if("auth/network-request-failed"!==(null===(e=n)||void 0===e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=x()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?(0,i.m9)(t):null;return e&&v(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&v(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(w(t))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new i.LL("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&w(t)||this._popupRedirectResolver;v(e,this,"argument-error"),this.redirectPersistenceManager=await ct.create(this,[w(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,i){if(this._deleted)return()=>{};const r="function"===typeof e?e:e.next.bind(e),s=this._isInitialized?Promise.resolve():this._initializationPromise;return v(s,this,"internal-error"),s.then((()=>r(this.currentUser))),"function"===typeof e?t.addObserver(e,n,i):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=St(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());return n&&(e["X-Firebase-Client"]=n),e}}function kt(t){return(0,i.m9)(t)}class It{constructor(t){this.auth=t,this.observer=null,this.addObserver=(0,i.ne)((t=>this.observer=t))}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
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
 */
class xt{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return y("not implemented")}_getIdTokenResponse(t){return y("not implemented")}_linkToIdToken(t,e){return y("not implemented")}_getReauthenticationResolver(t){return y("not implemented")}}
/**
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
 */async function Ot(t,e){return $(t,"POST","/v1/accounts:update",e)}
/**
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
 */
async function At(t,e){return M(t,"POST","/v1/accounts:signInWithPassword",R(t,e))}
/**
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
 */
async function Pt(t,e){return M(t,"POST","/v1/accounts:signInWithEmailLink",R(t,e))}async function Nt(t,e){return M(t,"POST","/v1/accounts:signInWithEmailLink",R(t,e))}
/**
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
 */class Lt extends xt{constructor(t,e,n,i=null){super("password",n),this._email=t,this._password=e,this._tenantId=i}static _fromEmailAndPassword(t,e){return new Lt(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new Lt(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return At(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Pt(t,{email:this._email,oobCode:this._password});default:p(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return Ot(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Nt(t,{idToken:e,email:this._email,oobCode:this._password});default:p(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
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
 */async function Rt(t,e){return M(t,"POST","/v1/accounts:signInWithIdp",R(t,e))}
/**
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
 */const $t="http://localhost";class Dt extends xt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Dt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):p("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:i}=e,r=s(e,["providerId","signInMethod"]);if(!n||!i)return null;const o=new Dt(n,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return Rt(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,Rt(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Rt(t,e)}buildRequest(){const t={requestUri:$t,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=(0,i.xO)(e)}return t}}
/**
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
 */async function Mt(t,e){return $(t,"POST","/v1/accounts:sendVerificationCode",R(t,e))}async function Ft(t,e){return M(t,"POST","/v1/accounts:signInWithPhoneNumber",R(t,e))}async function jt(t,e){const n=await M(t,"POST","/v1/accounts:signInWithPhoneNumber",R(t,e));if(n.temporaryProof)throw B(t,"account-exists-with-different-credential",n);return n}const Bt={["USER_NOT_FOUND"]:"user-not-found"};async function Vt(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return M(t,"POST","/v1/accounts:signInWithPhoneNumber",R(t,n),Bt)}
/**
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
 */class Ut extends xt{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new Ut({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new Ut({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return Ft(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return jt(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return Vt(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:i}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:i}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:r}=t;return n||e||i||r?new Ut({verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}}
/**
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
 */function zt(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ht(t){const e=(0,i.zd)((0,i.pd)(t))["link"],n=e?(0,i.zd)((0,i.pd)(e))["deep_link_id"]:null,r=(0,i.zd)((0,i.pd)(t))["deep_link_id"],s=r?(0,i.zd)((0,i.pd)(r))["link"]:null;return s||r||n||e||t}class qt{constructor(t){var e,n,r,s,o,a;const l=(0,i.zd)((0,i.pd)(t)),c=null!==(e=l["apiKey"])&&void 0!==e?e:null,h=null!==(n=l["oobCode"])&&void 0!==n?n:null,u=zt(null!==(r=l["mode"])&&void 0!==r?r:null);v(c&&h&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=h,this.continueUrl=null!==(s=l["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=l["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=l["tenantId"])&&void 0!==a?a:null}static parseLink(t){const e=Ht(t);try{return new qt(e)}catch(n){return null}}}
/**
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
 */
class Wt{constructor(){this.providerId=Wt.PROVIDER_ID}static credential(t,e){return Lt._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=qt.parseLink(e);return v(n,"argument-error"),Lt._fromEmailAndCode(t,n.code,n.tenantId)}}Wt.PROVIDER_ID="password",Wt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Wt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
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
 */
class Zt{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
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
 */class Kt extends Zt{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
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
 */
class Gt extends Kt{constructor(){super("facebook.com")}static credential(t){return Dt._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Gt.credentialFromTaggedObject(t)}static credentialFromError(t){return Gt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Gt.credential(t.oauthAccessToken)}catch(e){return null}}}Gt.FACEBOOK_SIGN_IN_METHOD="facebook.com",Gt.PROVIDER_ID="facebook.com";
/**
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
 */
class Yt extends Kt{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Dt._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Yt.credentialFromTaggedObject(t)}static credentialFromError(t){return Yt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return Yt.credential(e,n)}catch(i){return null}}}Yt.GOOGLE_SIGN_IN_METHOD="google.com",Yt.PROVIDER_ID="google.com";
/**
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
 */
class Xt extends Kt{constructor(){super("github.com")}static credential(t){return Dt._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Xt.credentialFromTaggedObject(t)}static credentialFromError(t){return Xt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Xt.credential(t.oauthAccessToken)}catch(e){return null}}}Xt.GITHUB_SIGN_IN_METHOD="github.com",Xt.PROVIDER_ID="github.com";
/**
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
 */
class Jt extends Kt{constructor(){super("twitter.com")}static credential(t,e){return Dt._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Jt.credentialFromTaggedObject(t)}static credentialFromError(t){return Jt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return Jt.credential(e,n)}catch(i){return null}}}
/**
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
 */
async function Qt(t,e){return M(t,"POST","/v1/accounts:signUp",R(t,e))}
/**
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
 */Jt.TWITTER_SIGN_IN_METHOD="twitter.com",Jt.PROVIDER_ID="twitter.com";class te{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,i=!1){const r=await st._fromIdTokenResponse(t,n,i),s=ee(n),o=new te({user:r,providerId:s,_tokenResponse:n,operationType:e});return o}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const i=ee(n);return new te({user:t,providerId:i,_tokenResponse:n,operationType:e})}}function ee(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
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
 */
/**
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
 */
class ne extends i.ZR{constructor(t,e,n,i){var r;super(e.code,e.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,ne.prototype),this.customData={appName:t.name,tenantId:null!==(r=t.tenantId)&&void 0!==r?r:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,i){return new ne(t,e,n,i)}}function ie(t,e,n,i){const r="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return r.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw ne._fromErrorAndOperation(t,n,e,i);throw n}))}
/**
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
 */async function re(t,e,n=!1){const i=await K(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return te._forOperation(t,"link",i)}
/**
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
 */
async function se(t,e,n=!1){var i;const{auth:r}=t,s="reauthenticate";try{const i=await K(t,ie(r,s,e,t),n);v(i.idToken,r,"internal-error");const o=W(i.idToken);v(o,r,"internal-error");const{sub:a}=o;return v(t.uid===a,r,"user-mismatch"),te._forOperation(t,s,i)}catch(o){throw"auth/user-not-found"===(null===(i=o)||void 0===i?void 0:i.code)&&p(r,"user-mismatch"),o}}
/**
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
 */async function oe(t,e,n=!1){const i="signIn",r=await ie(t,i,e),s=await te._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}async function ae(t,e){return oe(kt(t),e)}async function le(t,e,n){const i=kt(t),r=await Qt(i,{returnSecureToken:!0,email:e,password:n}),s=await te._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(s.user),s}function ce(t,e,n){return ae((0,i.m9)(t),Wt.credential(e,n))}
/**
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
 */
/**
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
 */
function he(t,e){return $(t,"POST","/v2/accounts/mfaEnrollment:start",R(t,e))}function ue(t,e){return $(t,"POST","/v2/accounts/mfaEnrollment:finalize",R(t,e))}new WeakMap;const de="__sak";
/**
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
 */class pe{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(de,"1"),this.storage.removeItem(de),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
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
 */function fe(){const t=(0,i.z$)();return dt(t)||yt(t)}const me=1e3,ge=10;class ve extends pe{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=fe()&&Ct(),this.fallbackToPolling=wt(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),i=this.localCache[e];n!==i&&t(e,i,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(t.newValue!==i)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const i=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},r=this.storage.getItem(n);bt()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,ge):i()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const i of Array.from(n))i(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),me)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}ve.type="LOCAL";const ye=ve;
/**
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
 */class _e extends pe{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(t,e){}_removeListener(t,e){}}_e.type="SESSION";const be=_e;
/**
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
 */function we(t){return Promise.all(t.map((async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}})))}
/**
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
 */class Ce{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new Ce(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:i,data:r}=e.data,s=this.handlersMap[i];if(!(null===s||void 0===s?void 0:s.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(s).map((async t=>t(e.origin,r))),a=await we(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
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
 */
function Se(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(10*Math.random());return t+n}
/**
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
 */Ce.receivers=[];class Ee{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const i="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise(((o,a)=>{const l=Se("",20);i.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:i,onMessage(t){const e=t;if(e.data.eventId===l)switch(e.data.status){case"ack":clearTimeout(c),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),o(e.data.response);break;default:clearTimeout(c),clearTimeout(r),a(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:l,data:e},[i.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
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
 */function Te(){return window}function ke(t){Te().location.href=t}
/**
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
 */function Ie(){return"undefined"!==typeof Te()["WorkerGlobalScope"]&&"function"===typeof Te()["importScripts"]}async function xe(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(t){return null}}function Oe(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function Ae(){return Ie()?self:null}
/**
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
 */const Pe="firebaseLocalStorageDb",Ne=1,Le="firebaseLocalStorage",Re="fbase_key";class $e{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function De(t,e){return t.transaction([Le],e?"readwrite":"readonly").objectStore(Le)}function Me(){const t=indexedDB.deleteDatabase(Pe);return new $e(t).toPromise()}function Fe(){const t=indexedDB.open(Pe,Ne);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(Le,{keyPath:Re})}catch(i){n(i)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains(Le)?e(n):(n.close(),await Me(),e(await Fe()))}))}))}async function je(t,e,n){const i=De(t,!0).put({[Re]:e,value:n});return new $e(i).toPromise()}async function Be(t,e){const n=De(t,!1).get(e),i=await new $e(n).toPromise();return void 0===i?null:i.value}function Ve(t,e){const n=De(t,!0).delete(e);return new $e(n).toPromise()}const Ue=800,ze=3;class He{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Fe()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>ze)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ie()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ce._getInstance(Ae()),this.receiver._subscribe("keyChanged",(async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}})),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await xe(),!this.activeServiceWorker)return;this.sender=new Ee(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&Oe()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Fe();return await je(t,de,"1"),await Ve(t,de),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>je(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>Be(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>Ve(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=De(t,!1).getAll();return new $e(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:i,value:r}of t)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),e.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),e.push(i));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const i of Array.from(n))i(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),Ue)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}He.type="LOCAL";const qe=He;
/**
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
 */function We(t,e){return $(t,"POST","/v2/accounts/mfaSignIn:start",R(t,e))}function Ze(t,e){return $(t,"POST","/v2/accounts/mfaSignIn:finalize",R(t,e))}
/**
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
 */
/**
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
 */
function Ke(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}function Ge(t){return new Promise(((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=t=>{const e=f("internal-error");e.customData=t,n(e)},i.type="text/javascript",i.charset="UTF-8",Ke().appendChild(i)}))}function Ye(t){return`__${t}${Math.floor(1e6*Math.random())}`}
/**
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
 */
/**
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
 */
Ye("rcb"),new O(3e4,6e4);
/**
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
 */
const Xe="recaptcha";async function Je(t,e,n){var i;const r=await n.verify();try{let s;if(v("string"===typeof r,t,"argument-error"),v(n.type===Xe,t,"argument-error"),s="string"===typeof e?{phoneNumber:e}:e,"session"in s){const e=s.session;if("phoneNumber"in s){v("enroll"===e.type,t,"internal-error");const n=await he(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{v("signin"===e.type,t,"internal-error");const n=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid;v(n,t,"missing-multi-factor-info");const o=await We(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await Mt(t,{phoneNumber:s.phoneNumber,recaptchaToken:r});return e}}finally{n._reset()}}
/**
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
 */
class Qe{constructor(t){this.providerId=Qe.PROVIDER_ID,this.auth=kt(t)}verifyPhoneNumber(t,e){return Je(this.auth,t,(0,i.m9)(e))}static credential(t,e){return Ut._fromVerification(t,e)}static credentialFromResult(t){const e=t;return Qe.credentialFromTaggedObject(e)}static credentialFromError(t){return Qe.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?Ut._fromTokenResponse(e,n):null}}
/**
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
 */
function tn(t,e){return e?w(e):(v(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
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
 */Qe.PROVIDER_ID="phone",Qe.PHONE_SIGN_IN_METHOD="phone";class en extends xt{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Rt(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Rt(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Rt(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function nn(t){return oe(t.auth,new en(t),t.bypassAuthState)}function rn(t){const{auth:e,user:n}=t;return v(n,e,"internal-error"),se(n,new en(t),t.bypassAuthState)}async function sn(t){const{auth:e,user:n}=t;return v(n,e,"internal-error"),re(n,new en(t),t.bypassAuthState)}
/**
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
 */class on{constructor(t,e,n,i,r=!1){this.auth=t,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:i,tenantId:r,error:s,type:o}=t;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return nn;case"linkViaPopup":case"linkViaRedirect":return sn;case"reauthViaPopup":case"reauthViaRedirect":return rn;default:p(this.auth,"internal-error")}}resolve(t){_(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){_(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
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
 */const an=new O(2e3,1e4);class ln extends on{constructor(t,e,n,i,r){super(t,e,i,r),this.provider=n,this.authWindow=null,this.pollId=null,ln.currentPopupAction&&ln.currentPopupAction.cancel(),ln.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return v(t,this.auth,"internal-error"),t}async onExecution(){_(1===this.filter.length,"Popup operations only handle one event");const t=Se();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(f(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(f(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ln.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(f(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(t,an.get())};t()}}ln.currentPopupAction=null;
/**
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
 */
const cn="pendingRedirect",hn=new Map;class un extends on{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=hn.get(this.auth._key());if(!t){try{const e=await dn(this.resolver,this.auth),n=e?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}hn.set(this.auth._key(),t)}return this.bypassAuthState||hn.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function dn(t,e){const n=mn(e),i=fn(t);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}function pn(t,e){hn.set(t._key(),e)}function fn(t){return w(t._redirectPersistence)}function mn(t){return lt(cn,t.config.apiKey,t.name)}
/**
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
 */async function gn(t,e,n=!1){const i=kt(t),r=tn(i,e),s=new un(i,r,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}
/**
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
 */
const vn=6e5;class yn{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!wn(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!bn(t)){const i=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(f(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=vn&&this.cachedEventUids.clear(),this.cachedEventUids.has(_n(t))}saveEventToCache(t){this.cachedEventUids.add(_n(t)),this.lastProcessedEventTime=Date.now()}}function _n(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function bn({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function wn(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return bn(t);default:return!1}}
/**
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
 */async function Cn(t,e={}){return $(t,"GET","/v1/projects",e)}
/**
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
 */const Sn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,En=/^https?/;async function Tn(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Cn(t);for(const i of e)try{if(kn(i))return}catch(n){}p(t,"unauthorized-domain")}function kn(t){const e=E(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const r=new URL(t);return""===r.hostname&&""===i?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!En.test(n))return!1;if(Sn.test(t))return i===t;const r=t.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+r+"|"+r+")$","i");return s.test(i)}
/**
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
 */const In=new O(3e4,6e4);function xn(){const t=Te().___jsl;if(null===t||void 0===t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function On(t){return new Promise(((e,n)=>{var i,r,s;function o(){xn(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{xn(),n(f(t,"network-request-failed"))},timeout:In.get()})}if(null===(r=null===(i=Te().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)e(gapi.iframes.getContext());else{if(!(null===(s=Te().gapi)||void 0===s?void 0:s.load)){const e=Ye("iframefcb");return Te()[e]=()=>{gapi.load?o():n(f(t,"network-request-failed"))},Ge(`https://apis.google.com/js/api.js?onload=${e}`).catch((t=>n(t)))}o()}})).catch((t=>{throw An=null,t}))}let An=null;function Pn(t){return An=An||On(t),An}
/**
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
 */const Nn=new O(5e3,15e3),Ln="__/auth/iframe",Rn="emulator/auth/iframe",$n={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Dn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Mn(t){const e=t.config;v(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?A(e,Rn):`https://${t.config.authDomain}/${Ln}`,s={apiKey:e.apiKey,appName:t.name,v:r.Jn},o=Dn.get(t.config.apiHost);o&&(s.eid=o);const a=t._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${(0,i.xO)(s).slice(1)}`}async function Fn(t){const e=await Pn(t),n=Te().gapi;return v(n,t,"internal-error"),e.open({where:document.body,url:Mn(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$n,dontclear:!0},(e=>new Promise((async(n,i)=>{await e.restyle({setHideOnLeave:!1});const r=f(t,"network-request-failed"),s=Te().setTimeout((()=>{i(r)}),Nn.get());function o(){Te().clearTimeout(s),n(e)}e.ping(o).then(o,(()=>{i(r)}))}))))}
/**
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
 */const jn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Bn=500,Vn=600,Un="_blank",zn="http://localhost";class Hn{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function qn(t,e,n,r=Bn,s=Vn){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},jn),{width:r.toString(),height:s.toString(),top:o,left:a}),h=(0,i.z$)().toLowerCase();n&&(l=pt(h)?Un:n),ut(h)&&(e=e||zn,c.scrollbars="yes");const u=Object.entries(c).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(_t(h)&&"_self"!==l)return Wn(e||"",l),new Hn(null);const d=window.open(e||"",l,u);v(d,t,"popup-blocked");try{d.focus()}catch(p){}return new Hn(d)}function Wn(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
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
 */const Zn="__/auth/handler",Kn="emulator/auth/handler";function Gn(t,e,n,s,o,a){v(t.config.authDomain,t,"auth-domain-config-required"),v(t.config.apiKey,t,"invalid-api-key");const l={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:r.Jn,eventId:o};if(e instanceof Zt){e.setDefaultLanguage(t.languageCode),l.providerId=e.providerId||"",(0,i.xb)(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(a||{}))l[t]=e}if(e instanceof Kt){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(l.scopes=t.join(","))}t.tenantId&&(l.tid=t.tenantId);const c=l;for(const i of Object.keys(c))void 0===c[i]&&delete c[i];return`${Yn(t)}?${(0,i.xO)(c).slice(1)}`}function Yn({config:t}){return t.emulator?A(t,Kn):`https://${t.authDomain}/${Zn}`}
/**
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
 */const Xn="webStorageSupport";class Jn{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=be,this._completeRedirectFn=gn,this._overrideRedirectResult=pn}async _openPopup(t,e,n,i){var r;_(null===(r=this.eventManagers[t._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");const s=Gn(t,e,n,E(),i);return qn(t,s,Se())}async _openRedirect(t,e,n,i){return await this._originValidation(t),ke(Gn(t,e,n,E(),i)),new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(_(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await Fn(t),n=new yn(t);return e.register("authEvent",(e=>{v(null===e||void 0===e?void 0:e.authEvent,t,"invalid-auth-event");const i=n.onEvent(e.authEvent);return{status:i?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){const n=this.iframes[t._key()];n.send(Xn,{type:Xn},(n=>{var i;const r=null===(i=null===n||void 0===n?void 0:n[0])||void 0===i?void 0:i[Xn];void 0!==r&&e(!!r),p(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Tn(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return wt()||dt()||yt()}}const Qn=Jn;class ti{constructor(t){this.factorId=t}_process(t,e,n){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,n);case"signin":return this._finalizeSignIn(t,e.credential);default:return y("unexpected MultiFactorSessionType")}}}class ei extends ti{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new ei(t)}_finalizeEnroll(t,e,n){return ue(t,{idToken:e,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return Ze(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class ni{constructor(){}static assertion(t){return ei._fromCredential(t)}}ni.FACTOR_ID="phone";var ii="@firebase/auth",ri="0.20.5";
/**
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
 */
class si{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{var n;t((null===(n=e)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
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
 */function oi(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ai(t){(0,r.Xd)(new a.wA("auth",((e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=i.options;return((e,i)=>{v(s&&!s.includes(":"),"invalid-api-key",{appName:e.name}),v(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:e.name});const r={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:St(t)},a=new Tt(e,i,r);return S(a,n),a})(i,r)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{const i=t.getProvider("auth-internal");i.initialize()}))),(0,r.Xd)(new a.wA("auth-internal",(t=>{const e=kt(t.getProvider("auth").getImmediate());return(t=>new si(t))(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,r.KN)(ii,ri,oi(t)),(0,r.KN)(ii,ri,"esm2017")}
/**
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
 */function li(t=(0,r.Mq)()){const e=(0,r.qX)(t,"auth");return e.isInitialized()?e.getImmediate():C(t,{popupRedirectResolver:Qn,persistence:[qe,ye,be]})}ai("Browser")},7663:function(t,e,n){"use strict";n.d(e,{iU:function(){return Lo},U2:function(){return Mo},N8:function(){return qo},VF:function(){return Ro},iH:function(){return No},Od:function(){return $o},t8:function(){return Do}});var i=n(5816),r=n(8463),s=n(4444),o=n(3333);const a="@firebase/database",l="0.13.3";
/**
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
 */
let c="";function h(t){c=t}
/**
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
 */class u{constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,e){null==e?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),(0,s.Pz)(e))}get(t){const e=this.domStorage_.getItem(this.prefixedName_(t));return null==e?null:(0,s.cI)(e)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}
/**
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
 */class d{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,e){null==e?delete this.cache_[t]:this.cache_[t]=e}get(t){return(0,s.r3)(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}
/**
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
 */const p=function(t){try{if("undefined"!==typeof window&&"undefined"!==typeof window[t]){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new u(e)}}catch(e){}return new d},f=p("localStorage"),m=p("sessionStorage"),g=new o.Yd("@firebase/database"),v=function(){let t=1;return function(){return t++}}(),y=function(t){const e=(0,s.dS)(t),n=new s.gQ;n.update(e);const i=n.digest();return s.US.encodeByteArray(i)},_=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&"object"===typeof i&&"number"===typeof i.length?e+=_.apply(null,i):e+="object"===typeof i?(0,s.Pz)(i):i,e+=" "}return e};let b=null,w=!0;const C=function(t,e){(0,s.hu)(!e||!0===t||!1===t,"Can't turn on custom loggers persistently."),!0===t?(g.logLevel=o["in"].VERBOSE,b=g.log.bind(g),e&&m.set("logging_enabled",!0)):"function"===typeof t?b=t:(b=null,m.remove("logging_enabled"))},S=function(...t){if(!0===w&&(w=!1,null===b&&!0===m.get("logging_enabled")&&C(!0)),b){const e=_.apply(null,t);b(e)}},E=function(t){return function(...e){S(t,...e)}},T=function(...t){const e="FIREBASE INTERNAL ERROR: "+_(...t);g.error(e)},k=function(...t){const e=`FIREBASE FATAL ERROR: ${_(...t)}`;throw g.error(e),new Error(e)},I=function(...t){const e="FIREBASE WARNING: "+_(...t);g.warn(e)},x=function(){"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&I("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},O=function(t){return"number"===typeof t&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},A=function(t){if((0,s.Yr)()||"complete"===document.readyState)t();else{let e=!1;const n=function(){document.body?e||(e=!0,t()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}},P="[MIN_NAME]",N="[MAX_NAME]",L=function(t,e){if(t===e)return 0;if(t===P||e===N)return-1;if(e===P||t===N)return 1;{const n=W(t),i=W(e);return null!==n?null!==i?n-i===0?t.length-e.length:n-i:-1:null!==i?1:t<e?-1:1}},R=function(t,e){return t===e?0:t<e?-1:1},$=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+(0,s.Pz)(e))},D=function(t){if("object"!==typeof t||null===t)return(0,s.Pz)(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)0!==i&&(n+=","),n+=(0,s.Pz)(e[i]),n+=":",n+=D(t[e[i]]);return n+="}",n},M=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let r=0;r<n;r+=e)r+e>n?i.push(t.substring(r,n)):i.push(t.substring(r,r+e));return i};function F(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const j=function(t){(0,s.hu)(!O(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let r,o,a,l,c;0===t?(o=0,a=0,r=1/t===-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),i),o=l+i,a=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(o=0,a=Math.round(t/Math.pow(2,1-i-n))));const h=[];for(c=n;c;c-=1)h.push(a%2?1:0),a=Math.floor(a/2);for(c=e;c;c-=1)h.push(o%2?1:0),o=Math.floor(o/2);h.push(r?1:0),h.reverse();const u=h.join("");let d="";for(c=0;c<64;c+=8){let t=parseInt(u.substr(c,8),2).toString(16);1===t.length&&(t="0"+t),d+=t}return d.toLowerCase()},B=function(){return!("object"!==typeof window||!window["chrome"]||!window["chrome"]["extension"]||/^chrome/.test(window.location.href))},V=function(){return"object"===typeof Windows&&"object"===typeof Windows.UI};function U(t,e){let n="Unknown Error";"too_big"===t?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===t?n="Client doesn't have permission to access the desired data.":"unavailable"===t&&(n="The service is unavailable");const i=new Error(t+" at "+e._path.toString()+": "+n);return i.code=t.toUpperCase(),i}const z=new RegExp("^-?(0*)\\d{1,10}$"),H=-2147483648,q=2147483647,W=function(t){if(z.test(t)){const e=Number(t);if(e>=H&&e<=q)return e}return null},Z=function(t){try{t()}catch(e){setTimeout((()=>{const t=e.stack||"";throw I("Exception was thrown by user callback.",t),e}),Math.floor(0))}},K=function(){const t="object"===typeof window&&window["navigator"]&&window["navigator"]["userAgent"]||"";return t.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},G=function(t,e){const n=setTimeout(t,e);return"object"===typeof n&&n["unref"]&&n["unref"](),n};
/**
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
 */
class Y{constructor(t,e){this.appName_=t,this.appCheckProvider=e,this.appCheck=null===e||void 0===e?void 0:e.getImmediate({optional:!0}),this.appCheck||null===e||void 0===e||e.get().then((t=>this.appCheck=t))}getToken(t){return this.appCheck?this.appCheck.getToken(t):new Promise(((e,n)=>{setTimeout((()=>{this.appCheck?this.getToken(t).then(e,n):e(null)}),0)}))}addTokenChangeListener(t){var e;null===(e=this.appCheckProvider)||void 0===e||e.get().then((e=>e.addTokenListener(t)))}notifyForInvalidToken(){I(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
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
 */class X{constructor(t,e,n){this.appName_=t,this.firebaseOptions_=e,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((t=>this.auth_=t))}getToken(t){return this.auth_?this.auth_.getToken(t).catch((t=>t&&"auth/token-not-initialized"===t.code?(S("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t))):new Promise(((e,n)=>{setTimeout((()=>{this.auth_?this.getToken(t).then(e,n):e(null)}),0)}))}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then((e=>e.addAuthTokenListener(t)))}removeTokenChangeListener(t){this.authProvider_.get().then((e=>e.removeAuthTokenListener(t)))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',I(t)}}class J{constructor(t){this.accessToken=t}getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}}J.OWNER="owner";
/**
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
 */
const Q="5",tt="v",et="s",nt="r",it="f",rt=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,st="ls",ot="p",at="ac",lt="websocket",ct="long_polling";
/**
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
 */
class ht{constructor(t,e,n,i,r=!1,s="",o=!1){this.secure=e,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=f.get("host:"+t)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&f.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",e=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${e}`}}function ut(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function dt(t,e,n){let i;if((0,s.hu)("string"===typeof e,"typeof type must == string"),(0,s.hu)("object"===typeof n,"typeof params must == object"),e===lt)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else{if(e!==ct)throw new Error("Unknown connection type: "+e);i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?"}ut(t)&&(n["ns"]=t.namespace);const r=[];return F(n,((t,e)=>{r.push(t+"="+e)})),i+r.join("&")}
/**
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
 */class pt{constructor(){this.counters_={}}incrementCounter(t,e=1){(0,s.r3)(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=e}get(){return(0,s.p$)(this.counters_)}}
/**
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
 */const ft={},mt={};function gt(t){const e=t.toString();return ft[e]||(ft[e]=new pt),ft[e]}function vt(t,e){const n=t.toString();return mt[n]||(mt[n]=e()),mt[n]}
/**
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
 */class yt{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,e){this.closeAfterResponse=t,this.onClose=e,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,e){this.pendingResponses[t]=e;while(this.pendingResponses[this.currentResponseNum]){const t=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let e=0;e<t.length;++e)t[e]&&Z((()=>{this.onMessage_(t[e])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
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
 */const _t="start",bt="close",wt="pLPCommand",Ct="pRTLPCB",St="id",Et="pw",Tt="ser",kt="cb",It="seg",xt="ts",Ot="d",At="dframe",Pt=1870,Nt=30,Lt=Pt-Nt,Rt=25e3,$t=3e4;class Dt{constructor(t,e,n,i,r,s,o){this.connId=t,this.repoInfo=e,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=E(t),this.stats_=gt(e),this.urlFn=t=>(this.appCheckToken&&(t[at]=this.appCheckToken),dt(e,ct,t))}open(t,e){this.curSegmentNum=0,this.onDisconnect_=e,this.myPacketOrderer=new yt(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor($t)),A((()=>{if(this.isClosed_)return;this.scriptTagHolder=new Mt(((...t)=>{const[e,n,i,r,s]=t;if(this.incrementIncomingBytes_(t),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,e===_t)this.id=n,this.password=i;else{if(e!==bt)throw new Error("Unrecognized command received: "+e);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...t)=>{const[e,n]=t;this.incrementIncomingBytes_(t),this.myPacketOrderer.handleResponse(e,n)}),(()=>{this.onClosed_()}),this.urlFn);const t={};t[_t]="t",t[Tt]=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(t[kt]=this.scriptTagHolder.uniqueCallbackIdentifier),t[tt]=Q,this.transportSessionId&&(t[et]=this.transportSessionId),this.lastSessionId&&(t[st]=this.lastSessionId),this.applicationId&&(t[ot]=this.applicationId),this.appCheckToken&&(t[at]=this.appCheckToken),"undefined"!==typeof location&&location.hostname&&rt.test(location.hostname)&&(t[nt]=it);const e=this.urlFn(t);this.log_("Connecting via long-poll to "+e),this.scriptTagHolder.addTag(e,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Dt.forceAllow_=!0}static forceDisallow(){Dt.forceDisallow_=!0}static isAvailable(){return!(0,s.Yr)()&&(!!Dt.forceAllow_||!Dt.forceDisallow_&&"undefined"!==typeof document&&null!=document.createElement&&!B()&&!V())}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const e=(0,s.Pz)(t);this.bytesSent+=e.length,this.stats_.incrementCounter("bytes_sent",e.length);const n=(0,s.h$)(e),i=M(n,Lt);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(t,e){if((0,s.Yr)())return;this.myDisconnFrame=document.createElement("iframe");const n={};n[At]="t",n[St]=t,n[Et]=e,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const e=(0,s.Pz)(t).length;this.bytesReceived+=e,this.stats_.incrementCounter("bytes_received",e)}}class Mt{constructor(t,e,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,(0,s.Yr)())this.commandCB=t,this.onMessageCB=e;else{this.uniqueCallbackIdentifier=v(),window[wt+this.uniqueCallbackIdentifier]=t,window[Ct+this.uniqueCallbackIdentifier]=e,this.myIFrame=Mt.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)){const t=document.domain;n='<script>document.domain="'+t+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(r){S("frame writing exception"),r.stack&&S(r.stack),S(r)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(t);try{const e=t.contentWindow.document;e||S("No IE domain setting required")}catch(e){const n=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,e){this.myID=t,this.myPW=e,this.alive=!0;while(this.newRequest_());}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[St]=this.myID,t[Et]=this.myPW,t[Tt]=this.currentSerial;let e=this.urlFn(t),n="",i=0;while(this.pendingSegs.length>0){const t=this.pendingSegs[0];if(!(t.d.length+Nt+n.length<=Pt))break;{const t=this.pendingSegs.shift();n=n+"&"+It+i+"="+t.seg+"&"+xt+i+"="+t.ts+"&"+Ot+i+"="+t.d,i++}}return e+=n,this.addLongPollTag_(e,this.currentSerial),!0}return!1}enqueueSegment(t,e,n){this.pendingSegs.push({seg:t,ts:e,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(t,e){this.outstandingRequests.add(e);const n=()=>{this.outstandingRequests.delete(e),this.newRequest_()},i=setTimeout(n,Math.floor(Rt)),r=()=>{clearTimeout(i),n()};this.addTag(t,r)}addTag(t,e){(0,s.Yr)()?this.doNodeLongPoll(t,e):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=t,n.onload=n.onreadystatechange=function(){const t=n.readyState;t&&"loaded"!==t&&"complete"!==t||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),e())},n.onerror=()=>{S("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}}),Math.floor(1))}}
/**
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
 */const Ft=16384,jt=45e3;let Bt=null;"undefined"!==typeof MozWebSocket?Bt=MozWebSocket:"undefined"!==typeof WebSocket&&(Bt=WebSocket);class Vt{constructor(t,e,n,i,r,s,o){this.connId=t,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=E(this.connId),this.stats_=gt(e),this.connURL=Vt.connectionURL_(e,s,o,i,n),this.nodeAdmin=e.nodeAdmin}static connectionURL_(t,e,n,i,r){const o={};return o[tt]=Q,!(0,s.Yr)()&&"undefined"!==typeof location&&location.hostname&&rt.test(location.hostname)&&(o[nt]=it),e&&(o[et]=e),n&&(o[st]=n),i&&(o[at]=i),r&&(o[ot]=r),dt(t,lt,o)}open(t,e){this.onDisconnect=e,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,f.set("previous_websocket_failure",!0);try{let t;if((0,s.Yr)()){const e=this.nodeAdmin?"AdminNode":"Node";t={headers:{"User-Agent":`Firebase/${Q}/${c}/${process.platform}/${e}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(t.headers["Authorization"]=`Bearer ${this.authToken}`),this.appCheckToken&&(t.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={NODE_ENV:"production",BASE_URL:"/MyDictionary/"},i=0===this.connURL.indexOf("wss://")?n["HTTPS_PROXY"]||n["https_proxy"]:n["HTTP_PROXY"]||n["http_proxy"];i&&(t["proxy"]={origin:i})}this.mySock=new Bt(this.connURL,[],t)}catch(n){this.log_("Error instantiating WebSocket.");const t=n.message||n.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=t=>{this.handleIncomingFrame(t)},this.mySock.onerror=t=>{this.log_("WebSocket error.  Closing connection.");const e=t.message||t.data;e&&this.log_(e),this.onClosed_()}}start(){}static forceDisallow(){Vt.forceDisallow_=!0}static isAvailable(){let t=!1;if("undefined"!==typeof navigator&&navigator.userAgent){const e=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(e);n&&n.length>1&&parseFloat(n[1])<4.4&&(t=!0)}return!t&&null!==Bt&&!Vt.forceDisallow_}static previouslyFailed(){return f.isInMemoryStorage||!0===f.get("previous_websocket_failure")}markConnectionHealthy(){f.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const e=(0,s.cI)(t);this.onMessage(e)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if((0,s.hu)(null===this.frames,"We already have a frame buffer"),t.length<=6){const e=Number(t);if(!isNaN(e))return this.handleNewFrameCount_(e),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(null===this.mySock)return;const e=t["data"];if(this.bytesReceived+=e.length,this.stats_.incrementCounter("bytes_received",e.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(e);else{const t=this.extractFrameCount_(e);null!==t&&this.appendFrame_(t)}}send(t){this.resetKeepAlive();const e=(0,s.Pz)(t);this.bytesSent+=e.length,this.stats_.incrementCounter("bytes_sent",e.length);const n=M(e,Ft);n.length>1&&this.sendString_(String(n.length));for(let i=0;i<n.length;i++)this.sendString_(n[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(jt))}sendString_(t){try{this.mySock.send(t)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Vt.responsesRequiredToBeHealthy=2,Vt.healthyTimeout=3e4;
/**
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
 */
class Ut{constructor(t){this.initTransports_(t)}static get ALL_TRANSPORTS(){return[Dt,Vt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(t){const e=Vt&&Vt["isAvailable"]();let n=e&&!Vt.previouslyFailed();if(t.webSocketOnly&&(e||I("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[Vt];else{const t=this.transports_=[];for(const e of Ut.ALL_TRANSPORTS)e&&e["isAvailable"]()&&t.push(e);Ut.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ut.globalTransportInitialized_=!1;
/**
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
 */
const zt=6e4,Ht=5e3,qt=10240,Wt=102400,Zt="t",Kt="d",Gt="s",Yt="r",Xt="e",Jt="o",Qt="a",te="n",ee="p",ne="h";class ie{constructor(t,e,n,i,r,s,o,a,l,c){this.id=t,this.repoInfo_=e,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=E("c:"+this.id+":"),this.transportManager_=new Ut(e),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t["responsesRequiredToBeHealthy"]||0;const e=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(e,n)}),Math.floor(0));const i=t["healthyTimeout"]||0;i>0&&(this.healthyTimeout_=G((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Wt?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>qt?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return e=>{t===this.conn_?this.onConnectionLost_(e):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return e=>{2!==this.state_&&(t===this.rx_?this.onPrimaryMessageReceived_(e):t===this.secondaryConn_?this.onSecondaryMessageReceived_(e):this.log_("message on old connection"))}}sendRequest(t){const e={t:"d",d:t};this.sendData_(e)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(Zt in t){const e=t[Zt];e===Qt?this.upgradeIfSecondaryHealthy_():e===Yt?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):e===Jt&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const e=$("t",t),n=$("d",t);if("c"===e)this.onSecondaryControl_(n);else{if("d"!==e)throw new Error("Unknown protocol layer: "+e);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ee,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Qt,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:te,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const e=$("t",t),n=$("d",t);"c"===e?this.onControl_(n):"d"===e&&this.onDataMessage_(n)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const e=$(Zt,t);if(Kt in t){const n=t[Kt];if(e===ne)this.onHandshake_(n);else if(e===te){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let t=0;t<this.pendingDataMessages.length;++t)this.onDataMessage_(this.pendingDataMessages[t]);this.pendingDataMessages=[],this.tryCleanupConnection()}else e===Gt?this.onConnectionShutdown_(n):e===Yt?this.onReset_(n):e===Xt?T("Server Error: "+n):e===Jt?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):T("Unknown control packet command: "+e)}}onHandshake_(t){const e=t.ts,n=t.v,i=t.h;this.sessionId=t.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,e),Q!==n&&I("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t["responsesRequiredToBeHealthy"]||0;const e=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(e,n),G((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(zt))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,e){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(e,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):G((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(Ht))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ee,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==t&&this.rx_!==t||this.close()}onConnectionLost_(t){this.conn_=null,t||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(f.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(t)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
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
 */class re{put(t,e,n,i){}merge(t,e,n,i){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,e,n){}onDisconnectMerge(t,e,n){}onDisconnectCancel(t,e){}reportStats(t){}}
/**
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
 */class se{constructor(t){this.allowedEvents_=t,this.listeners_={},(0,s.hu)(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...e){if(Array.isArray(this.listeners_[t])){const n=[...this.listeners_[t]];for(let t=0;t<n.length;t++)n[t].callback.apply(n[t].context,e)}}on(t,e,n){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:e,context:n});const i=this.getInitialEvent(t);i&&e.apply(n,i)}off(t,e,n){this.validateEventType_(t);const i=this.listeners_[t]||[];for(let r=0;r<i.length;r++)if(i[r].callback===e&&(!n||n===i[r].context))return void i.splice(r,1)}validateEventType_(t){(0,s.hu)(this.allowedEvents_.find((e=>e===t)),"Unknown event: "+t)}}
/**
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
 */class oe extends se{constructor(){super(["online"]),this.online_=!0,"undefined"===typeof window||"undefined"===typeof window.addEventListener||(0,s.uI)()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new oe}getInitialEvent(t){return(0,s.hu)("online"===t,"Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}
/**
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
 */const ae=32,le=768;class ce{constructor(t,e){if(void 0===e){this.pieces_=t.split("/");let e=0;for(let t=0;t<this.pieces_.length;t++)this.pieces_[t].length>0&&(this.pieces_[e]=this.pieces_[t],e++);this.pieces_.length=e,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=e}toString(){let t="";for(let e=this.pieceNum_;e<this.pieces_.length;e++)""!==this.pieces_[e]&&(t+="/"+this.pieces_[e]);return t||"/"}}function he(){return new ce("")}function ue(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function de(t){return t.pieces_.length-t.pieceNum_}function pe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ce(t.pieces_,e)}function fe(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function me(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)""!==t.pieces_[n]&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ge(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function ve(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ce(e,0)}function ye(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof ce)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const t=e.split("/");for(let e=0;e<t.length;e++)t[e].length>0&&n.push(t[e])}return new ce(n,0)}function _e(t){return t.pieceNum_>=t.pieces_.length}function be(t,e){const n=ue(t),i=ue(e);if(null===n)return e;if(n===i)return be(pe(t),pe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function we(t,e){if(de(t)!==de(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function Ce(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(de(t)>de(e))return!1;while(n<t.pieces_.length){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class Se{constructor(t,e){this.errorPrefix_=e,this.parts_=ge(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=(0,s.ug)(this.parts_[n]);ke(this)}}function Ee(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=(0,s.ug)(e),ke(t)}function Te(t){const e=t.parts_.pop();t.byteLength_-=(0,s.ug)(e),t.parts_.length>0&&(t.byteLength_-=1)}function ke(t){if(t.byteLength_>le)throw new Error(t.errorPrefix_+"has a key path longer than "+le+" bytes ("+t.byteLength_+").");if(t.parts_.length>ae)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ae+") or object contains a cycle "+Ie(t))}function Ie(t){return 0===t.parts_.length?"":"in property '"+t.parts_.join(".")+"'"}
/**
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
 */class xe extends se{constructor(){let t,e;super(["visible"]),"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document["hidden"]?(e="visibilitychange",t="hidden"):"undefined"!==typeof document["mozHidden"]?(e="mozvisibilitychange",t="mozHidden"):"undefined"!==typeof document["msHidden"]?(e="msvisibilitychange",t="msHidden"):"undefined"!==typeof document["webkitHidden"]&&(e="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,e&&document.addEventListener(e,(()=>{const e=!document[t];e!==this.visible_&&(this.visible_=e,this.trigger("visible",e))}),!1)}static getInstance(){return new xe}getInitialEvent(t){return(0,s.hu)("visible"===t,"Unknown event type: "+t),[this.visible_]}}
/**
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
 */const Oe=1e3,Ae=3e5,Pe=3e4,Ne=1.3,Le=3e4,Re="server_kill",$e=3;class De extends re{constructor(t,e,n,i,r,o,a,l){if(super(),this.repoInfo_=t,this.applicationId_=e,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=De.nextPersistentConnectionId_++,this.log_=E("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Oe,this.maxReconnectDelay_=Ae,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!(0,s.Yr)())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");xe.getInstance().on("visible",this.onVisible_,this),-1===t.host.indexOf("fblocal")&&oe.getInstance().on("online",this.onOnline_,this)}sendRequest(t,e,n){const i=++this.requestNumber_,r={r:i,a:t,b:e};this.log_((0,s.Pz)(r)),(0,s.hu)(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),n&&(this.requestCBHash_[i]=n)}get(t){this.initConnection_();const e=new s.BH,n={p:t._path.toString(),q:t._queryObject},i={action:"g",request:n,onComplete:t=>{const n=t["d"];"ok"===t["s"]?e.resolve(n):e.reject(n)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),e.promise}listen(t,e,n,i){this.initConnection_();const r=t._queryIdentifier,o=t._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),(0,s.hu)(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),(0,s.hu)(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:e,query:t,tag:n};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(t){const e=this.outstandingGets_[t];this.sendRequest("g",e.request,(n=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),e.onComplete&&e.onComplete(n)}))}sendListen_(t){const e=t.query,n=e._path.toString(),i=e._queryIdentifier;this.log_("Listen on "+n+" for "+i);const r={p:n},s="q";t.tag&&(r["q"]=e._queryObject,r["t"]=t.tag),r["h"]=t.hashFn(),this.sendRequest(s,r,(r=>{const s=r["d"],o=r["s"];De.warnOnListenWarnings_(s,e);const a=this.listens.get(n)&&this.listens.get(n).get(i);a===t&&(this.log_("listen response",r),"ok"!==o&&this.removeListen_(n,i),t.onComplete&&t.onComplete(o,s))}))}static warnOnListenWarnings_(t,e){if(t&&"object"===typeof t&&(0,s.r3)(t,"w")){const n=(0,s.DV)(t,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const t='".indexOn": "'+e._queryParams.getIndex().toString()+'"',n=e._path.toString();I(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${t} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){const e=t&&40===t.length;(e||(0,s.GJ)(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Pe)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,e=(0,s.w9)(t)?"auth":"gauth",n={cred:t};null===this.authOverride_?n["noauth"]=!0:"object"===typeof this.authOverride_&&(n["authvar"]=this.authOverride_),this.sendRequest(e,n,(e=>{const n=e["s"],i=e["d"]||"error";this.authToken_===t&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(t=>{const e=t["s"],n=t["d"]||"error";"ok"===e?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(e,n)}))}unlisten(t,e){const n=t._path.toString(),i=t._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),(0,s.hu)(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");const r=this.removeListen_(n,i);r&&this.connected_&&this.sendUnlisten_(n,i,t._queryObject,e)}sendUnlisten_(t,e,n,i){this.log_("Unlisten on "+t+" for "+e);const r={p:t},s="n";i&&(r["q"]=n,r["t"]=i),this.sendRequest(s,r)}onDisconnectPut(t,e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,e,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:e,onComplete:n})}onDisconnectMerge(t,e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,e,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:e,onComplete:n})}onDisconnectCancel(t,e){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,e):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:e})}sendOnDisconnect_(t,e,n,i){const r={p:e,d:n};this.log_("onDisconnect "+t,r),this.sendRequest(t,r,(t=>{i&&setTimeout((()=>{i(t["s"],t["d"])}),Math.floor(0))}))}put(t,e,n,i){this.putInternal("p",t,e,n,i)}merge(t,e,n,i){this.putInternal("m",t,e,n,i)}putInternal(t,e,n,i,r){this.initConnection_();const s={p:e,d:n};void 0!==r&&(s["h"]=r),this.outstandingPuts_.push({action:t,request:s,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+e)}sendPut_(t){const e=this.outstandingPuts_[t].action,n=this.outstandingPuts_[t].request,i=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(e,n,(n=>{this.log_(e+" response",n),delete this.outstandingPuts_[t],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n["s"],n["d"])}))}reportStats(t){if(this.connected_){const e={c:t};this.log_("reportStats",e),this.sendRequest("s",e,(t=>{const e=t["s"];if("ok"!==e){const e=t["d"];this.log_("reportStats","Error sending stats: "+e)}}))}}onDataMessage_(t){if("r"in t){this.log_("from server: "+(0,s.Pz)(t));const e=t["r"],n=this.requestCBHash_[e];n&&(delete this.requestCBHash_[e],n(t["b"]))}else{if("error"in t)throw"A server-side error has occurred: "+t["error"];"a"in t&&this.onDataPush_(t["a"],t["b"])}}onDataPush_(t,e){this.log_("handleServerMessage",t,e),"d"===t?this.onDataUpdate_(e["p"],e["d"],!1,e["t"]):"m"===t?this.onDataUpdate_(e["p"],e["d"],!0,e["t"]):"c"===t?this.onListenRevoked_(e["p"],e["q"]):"ac"===t?this.onAuthRevoked_(e["s"],e["d"]):"apc"===t?this.onAppCheckRevoked_(e["s"],e["d"]):"sd"===t?this.onSecurityDebugPacket_(e):T("Unrecognized action received from server: "+(0,s.Pz)(t)+"\nAre you using the latest client?")}onReady_(t,e){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(t),this.lastSessionId=e,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){(0,s.hu)(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Oe,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=Oe,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){const t=(new Date).getTime()-this.lastConnectionEstablishedTime_;t>Le&&(this.reconnectDelay_=Oe),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const t=(new Date).getTime()-this.lastConnectionAttemptTime_;let e=Math.max(0,this.reconnectDelay_-t);e=Math.random()*e,this.log_("Trying to reconnect in "+e+"ms"),this.scheduleConnect_(e),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Ne)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),e=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+De.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,n())},c=function(t){(0,s.hu)(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(t)};this.realtime_={close:l,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[s,l]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?S("getToken() completed but was canceled"):(S("getToken() completed. Creating connection."),this.authToken_=s&&s.accessToken,this.appCheckToken_=l&&l.token,a=new ie(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,e,n,(t=>{I(t+" ("+this.repoInfo_.toString()+")"),this.interrupt(Re)}),r))}catch(T){this.log_("Failed to get token: "+T),o||(this.repoInfo_.nodeAdmin&&I(T),l())}}}interrupt(t){S("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){S("Resuming connection for reason: "+t),delete this.interruptReasons_[t],(0,s.xb)(this.interruptReasons_)&&(this.reconnectDelay_=Oe,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const e=t-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:e})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const e=this.outstandingPuts_[t];e&&"h"in e.request&&e.queued&&(e.onComplete&&e.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(t,e){let n;n=e?e.map((t=>D(t))).join("$"):"default";const i=this.removeListen_(t,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(t,e){const n=new ce(t).toString();let i;if(this.listens.has(n)){const t=this.listens.get(n);i=t.get(e),t.delete(e),0===t.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(t,e){S("Auth token revoked: "+t+"/"+e),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==t&&"permission_denied"!==t||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=$e&&(this.reconnectDelay_=Pe,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,e){S("App check token revoked: "+t+"/"+e),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==t&&"permission_denied"!==t||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=$e&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t["msg"].replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const e of t.values())this.sendListen_(e);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);while(this.onDisconnectRequestQueue_.length){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let e="js";(0,s.Yr)()&&(e=this.repoInfo_.nodeAdmin?"admin_node":"node"),t["sdk."+e+"."+c.replace(/\./g,"-")]=1,(0,s.uI)()?t["framework.cordova"]=1:(0,s.b$)()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=oe.getInstance().currentlyOnline();return(0,s.xb)(this.interruptReasons_)&&t}}De.nextPersistentConnectionId_=0,De.nextConnectionId_=0;
/**
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
 */
class Me{constructor(t,e){this.name=t,this.node=e}static Wrap(t,e){return new Me(t,e)}}
/**
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
 */class Fe{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,e){const n=new Me(P,t),i=new Me(P,e);return 0!==this.compare(n,i)}minPost(){return Me.MIN}}
/**
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
 */let je;class Be extends Fe{static get __EMPTY_NODE(){return je}static set __EMPTY_NODE(t){je=t}compare(t,e){return L(t.name,e.name)}isDefinedOn(t){throw(0,s.g5)("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,e){return!1}minPost(){return Me.MIN}maxPost(){return new Me(N,je)}makePost(t,e){return(0,s.hu)("string"===typeof t,"KeyIndex indexValue must always be a string."),new Me(t,je)}toString(){return".key"}}const Ve=new Be;
/**
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
 */class Ue{constructor(t,e,n,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let s=1;while(!t.isEmpty())if(s=e?n(t.key,e):1,i&&(s*=-1),s<0)t=this.isReverse_?t.left:t.right;else{if(0===s){this.nodeStack_.push(t);break}this.nodeStack_.push(t),t=this.isReverse_?t.right:t.left}}getNext(){if(0===this.nodeStack_.length)return null;let t,e=this.nodeStack_.pop();if(t=this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value},this.isReverse_){e=e.left;while(!e.isEmpty())this.nodeStack_.push(e),e=e.right}else{e=e.right;while(!e.isEmpty())this.nodeStack_.push(e),e=e.left}return t}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class ze{constructor(t,e,n,i,r){this.key=t,this.value=e,this.color=null!=n?n:ze.RED,this.left=null!=i?i:qe.EMPTY_NODE,this.right=null!=r?r:qe.EMPTY_NODE}copy(t,e,n,i,r){return new ze(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const r=n(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===r?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return qe.EMPTY_NODE;let t=this;return t.left.isRed_()||t.left.left.isRed_()||(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,e){let n,i;if(n=this,e(t,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(t,e),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===e(t,n.key)){if(n.right.isEmpty())return qe.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(t,e))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}ze.RED=!0,ze.BLACK=!1;class He{copy(t,e,n,i,r){return this}insert(t,e,n){return new ze(t,e,null)}remove(t,e){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class qe{constructor(t,e=qe.EMPTY_NODE){this.comparator_=t,this.root_=e}insert(t,e){return new qe(this.comparator_,this.root_.insert(t,e,this.comparator_).copy(null,null,ze.BLACK,null,null))}remove(t){return new qe(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,ze.BLACK,null,null))}get(t){let e,n=this.root_;while(!n.isEmpty()){if(e=this.comparator_(t,n.key),0===e)return n.value;e<0?n=n.left:e>0&&(n=n.right)}return null}getPredecessorKey(t){let e,n=this.root_,i=null;while(!n.isEmpty()){if(e=this.comparator_(t,n.key),0===e){if(n.left.isEmpty())return i?i.key:null;n=n.left;while(!n.right.isEmpty())n=n.right;return n.key}e<0?n=n.left:e>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new Ue(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,e){return new Ue(this.root_,t,this.comparator_,!1,e)}getReverseIteratorFrom(t,e){return new Ue(this.root_,t,this.comparator_,!0,e)}getReverseIterator(t){return new Ue(this.root_,null,this.comparator_,!0,t)}}
/**
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
 */
function We(t,e){return L(t.name,e.name)}function Ze(t,e){return L(t,e)}
/**
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
 */let Ke;function Ge(t){Ke=t}qe.EMPTY_NODE=new He;const Ye=function(t){return"number"===typeof t?"number:"+j(t):"string:"+t},Xe=function(t){if(t.isLeafNode()){const e=t.val();(0,s.hu)("string"===typeof e||"number"===typeof e||"object"===typeof e&&(0,s.r3)(e,".sv"),"Priority must be a string or number.")}else(0,s.hu)(t===Ke||t.isEmpty(),"priority of unexpected type.");(0,s.hu)(t===Ke||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
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
 */
let Je,Qe,tn;class en{constructor(t,e=en.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=e,this.lazyHash_=null,(0,s.hu)(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Xe(this.priorityNode_)}static set __childrenNodeConstructor(t){Je=t}static get __childrenNodeConstructor(){return Je}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new en(this.value_,t)}getImmediateChild(t){return".priority"===t?this.priorityNode_:en.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return _e(t)?this:".priority"===ue(t)?this.priorityNode_:en.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,e){return null}updateImmediateChild(t,e){return".priority"===t?this.updatePriority(e):e.isEmpty()&&".priority"!==t?this:en.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,e).updatePriority(this.priorityNode_)}updateChild(t,e){const n=ue(t);return null===n?e:e.isEmpty()&&".priority"!==n?this:((0,s.hu)(".priority"!==n||1===de(t),".priority must be the last token in a path"),this.updateImmediateChild(n,en.__childrenNodeConstructor.EMPTY_NODE.updateChild(pe(t),e)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,e){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+Ye(this.priorityNode_.val())+":");const e=typeof this.value_;t+=e+":",t+="number"===e?j(this.value_):this.value_,this.lazyHash_=y(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===en.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof en.__childrenNodeConstructor?-1:((0,s.hu)(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const e=typeof t.value_,n=typeof this.value_,i=en.VALUE_TYPE_ORDER.indexOf(e),r=en.VALUE_TYPE_ORDER.indexOf(n);return(0,s.hu)(i>=0,"Unknown leaf type: "+e),(0,s.hu)(r>=0,"Unknown leaf type: "+n),i===r?"object"===n?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const e=t;return this.value_===e.value_&&this.priorityNode_.equals(e.priorityNode_)}return!1}}function nn(t){Qe=t}function rn(t){tn=t}en.VALUE_TYPE_ORDER=["object","boolean","number","string"];class sn extends Fe{compare(t,e){const n=t.node.getPriority(),i=e.node.getPriority(),r=n.compareTo(i);return 0===r?L(t.name,e.name):r}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,e){return!t.getPriority().equals(e.getPriority())}minPost(){return Me.MIN}maxPost(){return new Me(N,new en("[PRIORITY-POST]",tn))}makePost(t,e){const n=Qe(t);return new Me(e,new en("[PRIORITY-POST]",n))}toString(){return".priority"}}const on=new sn,an=Math.log(2);
/**
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
 */class ln{constructor(t){const e=t=>parseInt(Math.log(t)/an,10),n=t=>parseInt(Array(t+1).join("1"),2);this.count=e(t+1),this.current_=this.count-1;const i=n(this.count);this.bits_=t+1&i}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const cn=function(t,e,n,i){t.sort(e);const r=function(e,i){const s=i-e;let o,a;if(0===s)return null;if(1===s)return o=t[e],a=n?n(o):o,new ze(a,o.node,ze.BLACK,null,null);{const l=parseInt(s/2,10)+e,c=r(e,l),h=r(l+1,i);return o=t[l],a=n?n(o):o,new ze(a,o.node,ze.BLACK,c,h)}},s=function(e){let i=null,s=null,o=t.length;const a=function(e,i){const s=o-e,a=o;o-=e;const c=r(s+1,a),h=t[s],u=n?n(h):h;l(new ze(u,h.node,i,null,c))},l=function(t){i?(i.left=t,i=t):(s=t,i=t)};for(let t=0;t<e.count;++t){const n=e.nextBitIsOne(),i=Math.pow(2,e.count-(t+1));n?a(i,ze.BLACK):(a(i,ze.BLACK),a(i,ze.RED))}return s},o=new ln(t.length),a=s(o);return new qe(i||e,a)};
/**
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
 */let hn;const un={};class dn{constructor(t,e){this.indexes_=t,this.indexSet_=e}static get Default(){return(0,s.hu)(un&&on,"ChildrenNode.ts has not been loaded"),hn=hn||new dn({".priority":un},{".priority":on}),hn}get(t){const e=(0,s.DV)(this.indexes_,t);if(!e)throw new Error("No index defined for "+t);return e instanceof qe?e:null}hasIndex(t){return(0,s.r3)(this.indexSet_,t.toString())}addIndex(t,e){(0,s.hu)(t!==Ve,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const r=e.getIterator(Me.Wrap);let o,a=r.getNext();while(a)i=i||t.isDefinedOn(a.node),n.push(a),a=r.getNext();o=i?cn(n,t.getCompare()):un;const l=t.toString(),c=Object.assign({},this.indexSet_);c[l]=t;const h=Object.assign({},this.indexes_);return h[l]=o,new dn(h,c)}addToIndexes(t,e){const n=(0,s.UI)(this.indexes_,((n,i)=>{const r=(0,s.DV)(this.indexSet_,i);if((0,s.hu)(r,"Missing index implementation for "+i),n===un){if(r.isDefinedOn(t.node)){const n=[],i=e.getIterator(Me.Wrap);let s=i.getNext();while(s)s.name!==t.name&&n.push(s),s=i.getNext();return n.push(t),cn(n,r.getCompare())}return un}{const i=e.get(t.name);let r=n;return i&&(r=r.remove(new Me(t.name,i))),r.insert(t,t.node)}}));return new dn(n,this.indexSet_)}removeFromIndexes(t,e){const n=(0,s.UI)(this.indexes_,(n=>{if(n===un)return n;{const i=e.get(t.name);return i?n.remove(new Me(t.name,i)):n}}));return new dn(n,this.indexSet_)}}
/**
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
 */let pn;class fn{constructor(t,e,n){this.children_=t,this.priorityNode_=e,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Xe(this.priorityNode_),this.children_.isEmpty()&&(0,s.hu)(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return pn||(pn=new fn(new qe(Ze),null,dn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||pn}updatePriority(t){return this.children_.isEmpty()?this:new fn(this.children_,t,this.indexMap_)}getImmediateChild(t){if(".priority"===t)return this.getPriority();{const e=this.children_.get(t);return null===e?pn:e}}getChild(t){const e=ue(t);return null===e?this:this.getImmediateChild(e).getChild(pe(t))}hasChild(t){return null!==this.children_.get(t)}updateImmediateChild(t,e){if((0,s.hu)(e,"We should always be passing snapshot nodes"),".priority"===t)return this.updatePriority(e);{const n=new Me(t,e);let i,r;e.isEmpty()?(i=this.children_.remove(t),r=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(t,e),r=this.indexMap_.addToIndexes(n,this.children_));const s=i.isEmpty()?pn:this.priorityNode_;return new fn(i,s,r)}}updateChild(t,e){const n=ue(t);if(null===n)return e;{(0,s.hu)(".priority"!==ue(t)||1===de(t),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(pe(t),e);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const e={};let n=0,i=0,r=!0;if(this.forEachChild(on,((s,o)=>{e[s]=o.val(t),n++,r&&fn.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):r=!1})),!t&&r&&i<2*n){const t=[];for(const n in e)t[n]=e[n];return t}return t&&!this.getPriority().isEmpty()&&(e[".priority"]=this.getPriority().val()),e}hash(){if(null===this.lazyHash_){let t="";this.getPriority().isEmpty()||(t+="priority:"+Ye(this.getPriority().val())+":"),this.forEachChild(on,((e,n)=>{const i=n.hash();""!==i&&(t+=":"+e+":"+i)})),this.lazyHash_=""===t?"":y(t)}return this.lazyHash_}getPredecessorChildName(t,e,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new Me(t,e));return n?n.name:null}return this.children_.getPredecessorKey(t)}getFirstChildName(t){const e=this.resolveIndex_(t);if(e){const t=e.minKey();return t&&t.name}return this.children_.minKey()}getFirstChild(t){const e=this.getFirstChildName(t);return e?new Me(e,this.children_.get(e)):null}getLastChildName(t){const e=this.resolveIndex_(t);if(e){const t=e.maxKey();return t&&t.name}return this.children_.maxKey()}getLastChild(t){const e=this.getLastChildName(t);return e?new Me(e,this.children_.get(e)):null}forEachChild(t,e){const n=this.resolveIndex_(t);return n?n.inorderTraversal((t=>e(t.name,t.node))):this.children_.inorderTraversal(e)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,e){const n=this.resolveIndex_(e);if(n)return n.getIteratorFrom(t,(t=>t));{const n=this.children_.getIteratorFrom(t.name,Me.Wrap);let i=n.peek();while(null!=i&&e.compare(i,t)<0)n.getNext(),i=n.peek();return n}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,e){const n=this.resolveIndex_(e);if(n)return n.getReverseIteratorFrom(t,(t=>t));{const n=this.children_.getReverseIteratorFrom(t.name,Me.Wrap);let i=n.peek();while(null!=i&&e.compare(i,t)>0)n.getNext(),i=n.peek();return n}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===gn?-1:0}withIndex(t){if(t===Ve||this.indexMap_.hasIndex(t))return this;{const e=this.indexMap_.addIndex(t,this.children_);return new fn(this.children_,this.priorityNode_,e)}}isIndexed(t){return t===Ve||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const e=t;if(this.getPriority().equals(e.getPriority())){if(this.children_.count()===e.children_.count()){const t=this.getIterator(on),n=e.getIterator(on);let i=t.getNext(),r=n.getNext();while(i&&r){if(i.name!==r.name||!i.node.equals(r.node))return!1;i=t.getNext(),r=n.getNext()}return null===i&&null===r}return!1}return!1}}resolveIndex_(t){return t===Ve?null:this.indexMap_.get(t.toString())}}fn.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class mn extends fn{constructor(){super(new qe(Ze),fn.EMPTY_NODE,dn.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return fn.EMPTY_NODE}isEmpty(){return!1}}const gn=new mn;Object.defineProperties(Me,{MIN:{value:new Me(P,fn.EMPTY_NODE)},MAX:{value:new Me(N,gn)}}),Be.__EMPTY_NODE=fn.EMPTY_NODE,en.__childrenNodeConstructor=fn,Ge(gn),rn(gn);
/**
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
 */
const vn=!0;function yn(t,e=null){if(null===t)return fn.EMPTY_NODE;if("object"===typeof t&&".priority"in t&&(e=t[".priority"]),(0,s.hu)(null===e||"string"===typeof e||"number"===typeof e||"object"===typeof e&&".sv"in e,"Invalid priority type found: "+typeof e),"object"===typeof t&&".value"in t&&null!==t[".value"]&&(t=t[".value"]),"object"!==typeof t||".sv"in t){const n=t;return new en(n,yn(e))}if(t instanceof Array||!vn){let n=fn.EMPTY_NODE;return F(t,((e,i)=>{if((0,s.r3)(t,e)&&"."!==e.substring(0,1)){const t=yn(i);!t.isLeafNode()&&t.isEmpty()||(n=n.updateImmediateChild(e,t))}})),n.updatePriority(yn(e))}{const n=[];let i=!1;const r=t;if(F(r,((t,e)=>{if("."!==t.substring(0,1)){const r=yn(e);r.isEmpty()||(i=i||!r.getPriority().isEmpty(),n.push(new Me(t,r)))}})),0===n.length)return fn.EMPTY_NODE;const s=cn(n,We,(t=>t.name),Ze);if(i){const t=cn(n,on.getCompare());return new fn(s,yn(e),new dn({".priority":t},{".priority":on}))}return new fn(s,yn(e),dn.Default)}}nn(yn);
/**
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
 */
class _n extends Fe{constructor(t){super(),this.indexPath_=t,(0,s.hu)(!_e(t)&&".priority"!==ue(t),"Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,e){const n=this.extractChild(t.node),i=this.extractChild(e.node),r=n.compareTo(i);return 0===r?L(t.name,e.name):r}makePost(t,e){const n=yn(t),i=fn.EMPTY_NODE.updateChild(this.indexPath_,n);return new Me(e,i)}maxPost(){const t=fn.EMPTY_NODE.updateChild(this.indexPath_,gn);return new Me(N,t)}toString(){return ge(this.indexPath_,0).join("/")}}
/**
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
 */class bn extends Fe{compare(t,e){const n=t.node.compareTo(e.node);return 0===n?L(t.name,e.name):n}isDefinedOn(t){return!0}indexedValueChanged(t,e){return!t.equals(e)}minPost(){return Me.MIN}maxPost(){return Me.MAX}makePost(t,e){const n=yn(t);return new Me(e,n)}toString(){return".value"}}const wn=new bn,Cn="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Sn=function(){let t=0;const e=[];return function(n){const i=n===t;let r;t=n;const o=new Array(8);for(r=7;r>=0;r--)o[r]=Cn.charAt(n%64),n=Math.floor(n/64);(0,s.hu)(0===n,"Cannot push at time == 0");let a=o.join("");if(i){for(r=11;r>=0&&63===e[r];r--)e[r]=0;e[r]++}else for(r=0;r<12;r++)e[r]=Math.floor(64*Math.random());for(r=0;r<12;r++)a+=Cn.charAt(e[r]);return(0,s.hu)(20===a.length,"nextPushId: Length should be 20."),a}}();
/**
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
 */
/**
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
 */
function En(t){return{type:"value",snapshotNode:t}}function Tn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function kn(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function In(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function xn(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}
/**
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
 */class On{constructor(t){this.index_=t}updateChild(t,e,n,i,r,o){(0,s.hu)(t.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=t.getImmediateChild(e);return a.getChild(i).equals(n.getChild(i))&&a.isEmpty()===n.isEmpty()?t:(null!=o&&(n.isEmpty()?t.hasChild(e)?o.trackChildChange(kn(e,a)):(0,s.hu)(t.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Tn(e,n)):o.trackChildChange(In(e,n,a))),t.isLeafNode()&&n.isEmpty()?t:t.updateImmediateChild(e,n).withIndex(this.index_))}updateFullNode(t,e,n){return null!=n&&(t.isLeafNode()||t.forEachChild(on,((t,i)=>{e.hasChild(t)||n.trackChildChange(kn(t,i))})),e.isLeafNode()||e.forEachChild(on,((e,i)=>{if(t.hasChild(e)){const r=t.getImmediateChild(e);r.equals(i)||n.trackChildChange(In(e,i,r))}else n.trackChildChange(Tn(e,i))}))),e.withIndex(this.index_)}updatePriority(t,e){return t.isEmpty()?fn.EMPTY_NODE:t.updatePriority(e)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
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
 */class An{constructor(t){this.indexedFilter_=new On(t.getIndex()),this.index_=t.getIndex(),this.startPost_=An.getStartPost_(t),this.endPost_=An.getEndPost_(t)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(t){return this.index_.compare(this.getStartPost(),t)<=0&&this.index_.compare(t,this.getEndPost())<=0}updateChild(t,e,n,i,r,s){return this.matches(new Me(e,n))||(n=fn.EMPTY_NODE),this.indexedFilter_.updateChild(t,e,n,i,r,s)}updateFullNode(t,e,n){e.isLeafNode()&&(e=fn.EMPTY_NODE);let i=e.withIndex(this.index_);i=i.updatePriority(fn.EMPTY_NODE);const r=this;return e.forEachChild(on,((t,e)=>{r.matches(new Me(t,e))||(i=i.updateImmediateChild(t,fn.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(t,i,n)}updatePriority(t,e){return t}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(t){if(t.hasStart()){const e=t.getIndexStartName();return t.getIndex().makePost(t.getIndexStartValue(),e)}return t.getIndex().minPost()}static getEndPost_(t){if(t.hasEnd()){const e=t.getIndexEndName();return t.getIndex().makePost(t.getIndexEndValue(),e)}return t.getIndex().maxPost()}}
/**
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
 */class Pn{constructor(t){this.rangedFilter_=new An(t),this.index_=t.getIndex(),this.limit_=t.getLimit(),this.reverse_=!t.isViewFromLeft()}updateChild(t,e,n,i,r,s){return this.rangedFilter_.matches(new Me(e,n))||(n=fn.EMPTY_NODE),t.getImmediateChild(e).equals(n)?t:t.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(t,e,n,i,r,s):this.fullLimitUpdateChild_(t,e,n,r,s)}updateFullNode(t,e,n){let i;if(e.isLeafNode()||e.isEmpty())i=fn.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<e.numChildren()&&e.isIndexed(this.index_)){let t;i=fn.EMPTY_NODE.withIndex(this.index_),t=this.reverse_?e.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):e.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;while(t.hasNext()&&n<this.limit_){const e=t.getNext();let r;if(r=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),e)<=0:this.index_.compare(e,this.rangedFilter_.getEndPost())<=0,!r)break;i=i.updateImmediateChild(e.name,e.node),n++}}else{let t,n,r,s;if(i=e.withIndex(this.index_),i=i.updatePriority(fn.EMPTY_NODE),this.reverse_){s=i.getReverseIterator(this.index_),t=this.rangedFilter_.getEndPost(),n=this.rangedFilter_.getStartPost();const e=this.index_.getCompare();r=(t,n)=>e(n,t)}else s=i.getIterator(this.index_),t=this.rangedFilter_.getStartPost(),n=this.rangedFilter_.getEndPost(),r=this.index_.getCompare();let o=0,a=!1;while(s.hasNext()){const e=s.getNext();!a&&r(t,e)<=0&&(a=!0);const l=a&&o<this.limit_&&r(e,n)<=0;l?o++:i=i.updateImmediateChild(e.name,fn.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(t,i,n)}updatePriority(t,e){return t}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(t,e,n,i,r){let o;if(this.reverse_){const t=this.index_.getCompare();o=(e,n)=>t(n,e)}else o=this.index_.getCompare();const a=t;(0,s.hu)(a.numChildren()===this.limit_,"");const l=new Me(e,n),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(e)){const t=a.getImmediateChild(e);let s=i.getChildAfterChild(this.index_,c,this.reverse_);while(null!=s&&(s.name===e||a.hasChild(s.name)))s=i.getChildAfterChild(this.index_,s,this.reverse_);const u=null==s?1:o(s,l),d=h&&!n.isEmpty()&&u>=0;if(d)return null!=r&&r.trackChildChange(In(e,n,t)),a.updateImmediateChild(e,n);{null!=r&&r.trackChildChange(kn(e,t));const n=a.updateImmediateChild(e,fn.EMPTY_NODE),i=null!=s&&this.rangedFilter_.matches(s);return i?(null!=r&&r.trackChildChange(Tn(s.name,s.node)),n.updateImmediateChild(s.name,s.node)):n}}return n.isEmpty()?t:h&&o(c,l)>=0?(null!=r&&(r.trackChildChange(kn(c.name,c.node)),r.trackChildChange(Tn(e,n))),a.updateImmediateChild(e,n).updateImmediateChild(c.name,fn.EMPTY_NODE)):t}}
/**
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
 */class Nn{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=on}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return(0,s.hu)(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return(0,s.hu)(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:P}hasEnd(){return this.endSet_}getIndexEndValue(){return(0,s.hu)(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return(0,s.hu)(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:N}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return(0,s.hu)(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===on}copy(){const t=new Nn;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function Ln(t){return t.loadsAllData()?new On(t.getIndex()):t.hasLimit()?new Pn(t):new An(t)}function Rn(t){const e={};if(t.isDefault())return e;let n;return t.index_===on?n="$priority":t.index_===wn?n="$value":t.index_===Ve?n="$key":((0,s.hu)(t.index_ instanceof _n,"Unrecognized index type!"),n=t.index_.toString()),e["orderBy"]=(0,s.Pz)(n),t.startSet_&&(e["startAt"]=(0,s.Pz)(t.indexStartValue_),t.startNameSet_&&(e["startAt"]+=","+(0,s.Pz)(t.indexStartName_))),t.endSet_&&(e["endAt"]=(0,s.Pz)(t.indexEndValue_),t.endNameSet_&&(e["endAt"]+=","+(0,s.Pz)(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e["limitToFirst"]=t.limit_:e["limitToLast"]=t.limit_),e}function $n(t){const e={};if(t.startSet_&&(e["sp"]=t.indexStartValue_,t.startNameSet_&&(e["sn"]=t.indexStartName_)),t.endSet_&&(e["ep"]=t.indexEndValue_,t.endNameSet_&&(e["en"]=t.indexEndName_)),t.limitSet_){e["l"]=t.limit_;let n=t.viewFrom_;""===n&&(n=t.isViewFromLeft()?"l":"r"),e["vf"]=n}return t.index_!==on&&(e["i"]=t.index_.toString()),e}
/**
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
 */class Dn extends re{constructor(t,e,n,i){super(),this.repoInfo_=t,this.onDataUpdate_=e,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=E("p:rest:"),this.listens_={}}reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,e){return void 0!==e?"tag$"+e:((0,s.hu)(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}listen(t,e,n,i){const r=t._path.toString();this.log_("Listen called for "+r+" "+t._queryIdentifier);const o=Dn.getListenId_(t,n),a={};this.listens_[o]=a;const l=Rn(t._queryParams);this.restRequest_(r+".json",l,((t,e)=>{let l=e;if(404===t&&(l=null,t=null),null===t&&this.onDataUpdate_(r,l,!1,n),(0,s.DV)(this.listens_,o)===a){let e;e=t?401===t?"permission_denied":"rest_error:"+t:"ok",i(e,null)}}))}unlisten(t,e){const n=Dn.getListenId_(t,e);delete this.listens_[n]}get(t){const e=Rn(t._queryParams),n=t._path.toString(),i=new s.BH;return this.restRequest_(n+".json",e,((t,e)=>{let r=e;404===t&&(r=null,t=null),null===t?(this.onDataUpdate_(n,r,!1,null),i.resolve(r)):i.reject(new Error(r))})),i.promise}refreshAuthToken(t){}restRequest_(t,e={},n){return e["format"]="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,r])=>{i&&i.accessToken&&(e["auth"]=i.accessToken),r&&r.token&&(e["ac"]=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+(0,s.xO)(e);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&4===a.readyState){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let e=null;if(a.status>=200&&a.status<300){try{e=(0,s.cI)(a.responseText)}catch(t){I("Failed to parse JSON response for "+o+": "+a.responseText)}n(null,e)}else 401!==a.status&&404!==a.status&&I("Got unsuccessful REST response for "+o+" Status: "+a.status),n(a.status);n=null}},a.open("GET",o,!0),a.send()}))}}
/**
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
 */class Mn{constructor(){this.rootNode_=fn.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,e){this.rootNode_=this.rootNode_.updateChild(t,e)}}
/**
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
 */function Fn(){return{value:null,children:new Map}}function jn(t,e,n){if(_e(e))t.value=n,t.children.clear();else if(null!==t.value)t.value=t.value.updateChild(e,n);else{const i=ue(e);t.children.has(i)||t.children.set(i,Fn());const r=t.children.get(i);e=pe(e),jn(r,e,n)}}function Bn(t,e,n){null!==t.value?n(e,t.value):Vn(t,((t,i)=>{const r=new ce(e.toString()+"/"+t);Bn(i,r,n)}))}function Vn(t,e){t.children.forEach(((t,n)=>{e(n,t)}))}
/**
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
 */class Un{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),e=Object.assign({},t);return this.last_&&F(this.last_,((t,n)=>{e[t]=e[t]-n})),this.last_=t,e}}
/**
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
 */const zn=1e4,Hn=3e4,qn=3e5;class Wn{constructor(t,e){this.server_=e,this.statsToReport_={},this.statsListener_=new Un(t);const n=zn+(Hn-zn)*Math.random();G(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const t=this.statsListener_.get(),e={};let n=!1;F(t,((t,i)=>{i>0&&(0,s.r3)(this.statsToReport_,t)&&(e[t]=i,n=!0)})),n&&this.server_.reportStats(e),G(this.reportStats_.bind(this),Math.floor(2*Math.random()*qn))}}
/**
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
 */var Zn;function Kn(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Gn(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Yn(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}
/**
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
 */(function(t){t[t["OVERWRITE"]=0]="OVERWRITE",t[t["MERGE"]=1]="MERGE",t[t["ACK_USER_WRITE"]=2]="ACK_USER_WRITE",t[t["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE"})(Zn||(Zn={}));class Xn{constructor(t,e,n){this.path=t,this.affectedTree=e,this.revert=n,this.type=Zn.ACK_USER_WRITE,this.source=Kn()}operationForChild(t){if(_e(this.path)){if(null!=this.affectedTree.value)return(0,s.hu)(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const e=this.affectedTree.subtree(new ce(t));return new Xn(he(),e,this.revert)}}return(0,s.hu)(ue(this.path)===t,"operationForChild called for unrelated child."),new Xn(pe(this.path),this.affectedTree,this.revert)}}
/**
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
 */class Jn{constructor(t,e){this.source=t,this.path=e,this.type=Zn.LISTEN_COMPLETE}operationForChild(t){return _e(this.path)?new Jn(this.source,he()):new Jn(this.source,pe(this.path))}}
/**
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
 */class Qn{constructor(t,e,n){this.source=t,this.path=e,this.snap=n,this.type=Zn.OVERWRITE}operationForChild(t){return _e(this.path)?new Qn(this.source,he(),this.snap.getImmediateChild(t)):new Qn(this.source,pe(this.path),this.snap)}}
/**
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
 */class ti{constructor(t,e,n){this.source=t,this.path=e,this.children=n,this.type=Zn.MERGE}operationForChild(t){if(_e(this.path)){const e=this.children.subtree(new ce(t));return e.isEmpty()?null:e.value?new Qn(this.source,he(),e.value):new ti(this.source,he(),e)}return(0,s.hu)(ue(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new ti(this.source,pe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
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
 */class ei{constructor(t,e,n){this.node_=t,this.fullyInitialized_=e,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(_e(t))return this.isFullyInitialized()&&!this.filtered_;const e=ue(t);return this.isCompleteForChild(e)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}
/**
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
 */class ni{constructor(t){this.query_=t,this.index_=this.query_._queryParams.getIndex()}}function ii(t,e,n,i){const r=[],s=[];return e.forEach((e=>{"child_changed"===e.type&&t.index_.indexedValueChanged(e.oldSnap,e.snapshotNode)&&s.push(xn(e.childName,e.snapshotNode))})),ri(t,r,"child_removed",e,i,n),ri(t,r,"child_added",e,i,n),ri(t,r,"child_moved",s,i,n),ri(t,r,"child_changed",e,i,n),ri(t,r,"value",e,i,n),r}function ri(t,e,n,i,r,s){const o=i.filter((t=>t.type===n));o.sort(((e,n)=>oi(t,e,n))),o.forEach((n=>{const i=si(t,n,s);r.forEach((r=>{r.respondsTo(n.type)&&e.push(r.createEvent(i,t.query_))}))}))}function si(t,e,n){return"value"===e.type||"child_removed"===e.type||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function oi(t,e,n){if(null==e.childName||null==n.childName)throw(0,s.g5)("Should only compare child_ events.");const i=new Me(e.childName,e.snapshotNode),r=new Me(n.childName,n.snapshotNode);return t.index_.compare(i,r)}
/**
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
 */function ai(t,e){return{eventCache:t,serverCache:e}}function li(t,e,n,i){return ai(new ei(e,n,i),t.serverCache)}function ci(t,e,n,i){return ai(t.eventCache,new ei(e,n,i))}function hi(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ui(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}
/**
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
 */let di;const pi=()=>(di||(di=new qe(R)),di);class fi{constructor(t,e=pi()){this.value=t,this.children=e}static fromObject(t){let e=new fi(null);return F(t,((t,n)=>{e=e.set(new ce(t),n)})),e}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,e){if(null!=this.value&&e(this.value))return{path:he(),value:this.value};if(_e(t))return null;{const n=ue(t),i=this.children.get(n);if(null!==i){const r=i.findRootMostMatchingPathAndValue(pe(t),e);if(null!=r){const t=ye(new ce(n),r.path);return{path:t,value:r.value}}return null}return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,(()=>!0))}subtree(t){if(_e(t))return this;{const e=ue(t),n=this.children.get(e);return null!==n?n.subtree(pe(t)):new fi(null)}}set(t,e){if(_e(t))return new fi(e,this.children);{const n=ue(t),i=this.children.get(n)||new fi(null),r=i.set(pe(t),e),s=this.children.insert(n,r);return new fi(this.value,s)}}remove(t){if(_e(t))return this.children.isEmpty()?new fi(null):new fi(null,this.children);{const e=ue(t),n=this.children.get(e);if(n){const i=n.remove(pe(t));let r;return r=i.isEmpty()?this.children.remove(e):this.children.insert(e,i),null===this.value&&r.isEmpty()?new fi(null):new fi(this.value,r)}return this}}get(t){if(_e(t))return this.value;{const e=ue(t),n=this.children.get(e);return n?n.get(pe(t)):null}}setTree(t,e){if(_e(t))return e;{const n=ue(t),i=this.children.get(n)||new fi(null),r=i.setTree(pe(t),e);let s;return s=r.isEmpty()?this.children.remove(n):this.children.insert(n,r),new fi(this.value,s)}}fold(t){return this.fold_(he(),t)}fold_(t,e){const n={};return this.children.inorderTraversal(((i,r)=>{n[i]=r.fold_(ye(t,i),e)})),e(t,this.value,n)}findOnPath(t,e){return this.findOnPath_(t,he(),e)}findOnPath_(t,e,n){const i=!!this.value&&n(e,this.value);if(i)return i;if(_e(t))return null;{const i=ue(t),r=this.children.get(i);return r?r.findOnPath_(pe(t),ye(e,i),n):null}}foreachOnPath(t,e){return this.foreachOnPath_(t,he(),e)}foreachOnPath_(t,e,n){if(_e(t))return this;{this.value&&n(e,this.value);const i=ue(t),r=this.children.get(i);return r?r.foreachOnPath_(pe(t),ye(e,i),n):new fi(null)}}foreach(t){this.foreach_(he(),t)}foreach_(t,e){this.children.inorderTraversal(((n,i)=>{i.foreach_(ye(t,n),e)})),this.value&&e(t,this.value)}foreachChild(t){this.children.inorderTraversal(((e,n)=>{n.value&&t(e,n.value)}))}}
/**
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
 */class mi{constructor(t){this.writeTree_=t}static empty(){return new mi(new fi(null))}}function gi(t,e,n){if(_e(e))return new mi(new fi(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(null!=i){const r=i.path;let s=i.value;const o=be(r,e);return s=s.updateChild(o,n),new mi(t.writeTree_.set(r,s))}{const i=new fi(n),r=t.writeTree_.setTree(e,i);return new mi(r)}}}function vi(t,e,n){let i=t;return F(n,((t,n)=>{i=gi(i,ye(e,t),n)})),i}function yi(t,e){if(_e(e))return mi.empty();{const n=t.writeTree_.setTree(e,new fi(null));return new mi(n)}}function _i(t,e){return null!=bi(t,e)}function bi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return null!=n?t.writeTree_.get(n.path).getChild(be(n.path,e)):null}function wi(t){const e=[],n=t.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(on,((t,n)=>{e.push(new Me(t,n))})):t.writeTree_.children.inorderTraversal(((t,n)=>{null!=n.value&&e.push(new Me(t,n.value))})),e}function Ci(t,e){if(_e(e))return t;{const n=bi(t,e);return new mi(null!=n?new fi(n):t.writeTree_.subtree(e))}}function Si(t){return t.writeTree_.isEmpty()}function Ei(t,e){return Ti(he(),t.writeTree_,e)}function Ti(t,e,n){if(null!=e.value)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal(((e,r)=>{".priority"===e?((0,s.hu)(null!==r.value,"Priority writes must always be leaf nodes"),i=r.value):n=Ti(ye(t,e),r,n)})),n.getChild(t).isEmpty()||null===i||(n=n.updateChild(ye(t,".priority"),i)),n}}
/**
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
 */function ki(t,e){return Ki(e,t)}function Ii(t,e,n,i,r){(0,s.hu)(i>t.lastWriteId,"Stacking an older write on top of newer ones"),void 0===r&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:r}),r&&(t.visibleWrites=gi(t.visibleWrites,e,n)),t.lastWriteId=i}function xi(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function Oi(t,e){const n=t.allWrites.findIndex((t=>t.writeId===e));(0,s.hu)(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let r=i.visible,o=!1,a=t.allWrites.length-1;while(r&&a>=0){const e=t.allWrites[a];e.visible&&(a>=n&&Ai(e,i.path)?r=!1:Ce(i.path,e.path)&&(o=!0)),a--}if(r){if(o)return Pi(t),!0;if(i.snap)t.visibleWrites=yi(t.visibleWrites,i.path);else{const e=i.children;F(e,(e=>{t.visibleWrites=yi(t.visibleWrites,ye(i.path,e))}))}return!0}return!1}function Ai(t,e){if(t.snap)return Ce(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ce(ye(t.path,n),e))return!0;return!1}function Pi(t){t.visibleWrites=Li(t.allWrites,Ni,he()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Ni(t){return t.visible}function Li(t,e,n){let i=mi.empty();for(let r=0;r<t.length;++r){const o=t[r];if(e(o)){const t=o.path;let e;if(o.snap)Ce(n,t)?(e=be(n,t),i=gi(i,e,o.snap)):Ce(t,n)&&(e=be(t,n),i=gi(i,he(),o.snap.getChild(e)));else{if(!o.children)throw(0,s.g5)("WriteRecord should have .snap or .children");if(Ce(n,t))e=be(n,t),i=vi(i,e,o.children);else if(Ce(t,n))if(e=be(t,n),_e(e))i=vi(i,he(),o.children);else{const t=(0,s.DV)(o.children,ue(e));if(t){const n=t.getChild(pe(e));i=gi(i,he(),n)}}}}}return i}function Ri(t,e,n,i,r){if(i||r){const s=Ci(t.visibleWrites,e);if(!r&&Si(s))return n;if(r||null!=n||_i(s,he())){const s=function(t){return(t.visible||r)&&(!i||!~i.indexOf(t.writeId))&&(Ce(t.path,e)||Ce(e,t.path))},o=Li(t.allWrites,s,e),a=n||fn.EMPTY_NODE;return Ei(o,a)}return null}{const i=bi(t.visibleWrites,e);if(null!=i)return i;{const i=Ci(t.visibleWrites,e);if(Si(i))return n;if(null!=n||_i(i,he())){const t=n||fn.EMPTY_NODE;return Ei(i,t)}return null}}}function $i(t,e,n){let i=fn.EMPTY_NODE;const r=bi(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(on,((t,e)=>{i=i.updateImmediateChild(t,e)})),i;if(n){const r=Ci(t.visibleWrites,e);return n.forEachChild(on,((t,e)=>{const n=Ei(Ci(r,new ce(t)),e);i=i.updateImmediateChild(t,n)})),wi(r).forEach((t=>{i=i.updateImmediateChild(t.name,t.node)})),i}{const n=Ci(t.visibleWrites,e);return wi(n).forEach((t=>{i=i.updateImmediateChild(t.name,t.node)})),i}}function Di(t,e,n,i,r){(0,s.hu)(i||r,"Either existingEventSnap or existingServerSnap must exist");const o=ye(e,n);if(_i(t.visibleWrites,o))return null;{const e=Ci(t.visibleWrites,o);return Si(e)?r.getChild(n):Ei(e,r.getChild(n))}}function Mi(t,e,n,i){const r=ye(e,n),s=bi(t.visibleWrites,r);if(null!=s)return s;if(i.isCompleteForChild(n)){const e=Ci(t.visibleWrites,r);return Ei(e,i.getNode().getImmediateChild(n))}return null}function Fi(t,e){return bi(t.visibleWrites,e)}function ji(t,e,n,i,r,s,o){let a;const l=Ci(t.visibleWrites,e),c=bi(l,he());if(null!=c)a=c;else{if(null==n)return[];a=Ei(l,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const t=[],e=o.getCompare(),n=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let l=n.getNext();while(l&&t.length<r)0!==e(l,i)&&t.push(l),l=n.getNext();return t}}function Bi(){return{visibleWrites:mi.empty(),allWrites:[],lastWriteId:-1}}function Vi(t,e,n,i){return Ri(t.writeTree,t.treePath,e,n,i)}function Ui(t,e){return $i(t.writeTree,t.treePath,e)}function zi(t,e,n,i){return Di(t.writeTree,t.treePath,e,n,i)}function Hi(t,e){return Fi(t.writeTree,ye(t.treePath,e))}function qi(t,e,n,i,r,s){return ji(t.writeTree,t.treePath,e,n,i,r,s)}function Wi(t,e,n){return Mi(t.writeTree,t.treePath,e,n)}function Zi(t,e){return Ki(ye(t.treePath,e),t.writeTree)}function Ki(t,e){return{treePath:t,writeTree:e}}
/**
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
 */class Gi{constructor(){this.changeMap=new Map}trackChildChange(t){const e=t.type,n=t.childName;(0,s.hu)("child_added"===e||"child_changed"===e||"child_removed"===e,"Only child changes supported for tracking"),(0,s.hu)(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const r=i.type;if("child_added"===e&&"child_removed"===r)this.changeMap.set(n,In(n,t.snapshotNode,i.snapshotNode));else if("child_removed"===e&&"child_added"===r)this.changeMap.delete(n);else if("child_removed"===e&&"child_changed"===r)this.changeMap.set(n,kn(n,i.oldSnap));else if("child_changed"===e&&"child_added"===r)this.changeMap.set(n,Tn(n,t.snapshotNode));else{if("child_changed"!==e||"child_changed"!==r)throw(0,s.g5)("Illegal combination of changes: "+t+" occurred after "+i);this.changeMap.set(n,In(n,t.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,t)}getChanges(){return Array.from(this.changeMap.values())}}
/**
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
 */class Yi{getCompleteChild(t){return null}getChildAfterChild(t,e,n){return null}}const Xi=new Yi;class Ji{constructor(t,e,n=null){this.writes_=t,this.viewCache_=e,this.optCompleteServerCache_=n}getCompleteChild(t){const e=this.viewCache_.eventCache;if(e.isCompleteForChild(t))return e.getNode().getImmediateChild(t);{const e=null!=this.optCompleteServerCache_?new ei(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Wi(this.writes_,t,e)}}getChildAfterChild(t,e,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:ui(this.viewCache_),r=qi(this.writes_,i,e,1,n,t);return 0===r.length?null:r[0]}}
/**
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
 */function Qi(t){return{filter:t}}function tr(t,e){(0,s.hu)(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),(0,s.hu)(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function er(t,e,n,i,r){const o=new Gi;let a,l;if(n.type===Zn.OVERWRITE){const c=n;c.source.fromUser?a=sr(t,e,c.path,c.snap,i,r,o):((0,s.hu)(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!_e(c.path),a=rr(t,e,c.path,c.snap,i,r,l,o))}else if(n.type===Zn.MERGE){const c=n;c.source.fromUser?a=ar(t,e,c.path,c.children,i,r,o):((0,s.hu)(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),a=cr(t,e,c.path,c.children,i,r,l,o))}else if(n.type===Zn.ACK_USER_WRITE){const s=n;a=s.revert?dr(t,e,s.path,i,r,o):hr(t,e,s.path,s.affectedTree,i,r,o)}else{if(n.type!==Zn.LISTEN_COMPLETE)throw(0,s.g5)("Unknown operation type: "+n.type);a=ur(t,e,n.path,i,o)}const c=o.getChanges();return nr(e,a,c),{viewCache:a,changes:c}}function nr(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=hi(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(En(hi(e)))}}function ir(t,e,n,i,r,o){const a=e.eventCache;if(null!=Hi(i,n))return e;{let l,c;if(_e(n))if((0,s.hu)(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const n=ui(e),r=n instanceof fn?n:fn.EMPTY_NODE,s=Ui(i,r);l=t.filter.updateFullNode(e.eventCache.getNode(),s,o)}else{const n=Vi(i,ui(e));l=t.filter.updateFullNode(e.eventCache.getNode(),n,o)}else{const h=ue(n);if(".priority"===h){(0,s.hu)(1===de(n),"Can't have a priority with additional path components");const r=a.getNode();c=e.serverCache.getNode();const o=zi(i,n,r,c);l=null!=o?t.filter.updatePriority(r,o):a.getNode()}else{const s=pe(n);let u;if(a.isCompleteForChild(h)){c=e.serverCache.getNode();const t=zi(i,n,a.getNode(),c);u=null!=t?a.getNode().getImmediateChild(h).updateChild(s,t):a.getNode().getImmediateChild(h)}else u=Wi(i,h,e.serverCache);l=null!=u?t.filter.updateChild(a.getNode(),h,u,s,r,o):a.getNode()}}return li(e,l,a.isFullyInitialized()||_e(n),t.filter.filtersNodes())}}function rr(t,e,n,i,r,s,o,a){const l=e.serverCache;let c;const h=o?t.filter:t.filter.getIndexedFilter();if(_e(n))c=h.updateFullNode(l.getNode(),i,null);else if(h.filtersNodes()&&!l.isFiltered()){const t=l.getNode().updateChild(n,i);c=h.updateFullNode(l.getNode(),t,null)}else{const t=ue(n);if(!l.isCompleteForPath(n)&&de(n)>1)return e;const r=pe(n),s=l.getNode().getImmediateChild(t),o=s.updateChild(r,i);c=".priority"===t?h.updatePriority(l.getNode(),o):h.updateChild(l.getNode(),t,o,r,Xi,null)}const u=ci(e,c,l.isFullyInitialized()||_e(n),h.filtersNodes()),d=new Ji(r,u,s);return ir(t,u,n,r,d,a)}function sr(t,e,n,i,r,s,o){const a=e.eventCache;let l,c;const h=new Ji(r,e,s);if(_e(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=li(e,c,!0,t.filter.filtersNodes());else{const r=ue(n);if(".priority"===r)c=t.filter.updatePriority(e.eventCache.getNode(),i),l=li(e,c,a.isFullyInitialized(),a.isFiltered());else{const s=pe(n),c=a.getNode().getImmediateChild(r);let u;if(_e(s))u=i;else{const t=h.getCompleteChild(r);u=null!=t?".priority"===fe(s)&&t.getChild(ve(s)).isEmpty()?t:t.updateChild(s,i):fn.EMPTY_NODE}if(c.equals(u))l=e;else{const n=t.filter.updateChild(a.getNode(),r,u,s,h,o);l=li(e,n,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function or(t,e){return t.eventCache.isCompleteForChild(e)}function ar(t,e,n,i,r,s,o){let a=e;return i.foreach(((i,l)=>{const c=ye(n,i);or(e,ue(c))&&(a=sr(t,a,c,l,r,s,o))})),i.foreach(((i,l)=>{const c=ye(n,i);or(e,ue(c))||(a=sr(t,a,c,l,r,s,o))})),a}function lr(t,e,n){return n.foreach(((t,n)=>{e=e.updateChild(t,n)})),e}function cr(t,e,n,i,r,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l,c=e;l=_e(n)?i:new fi(null).setTree(n,i);const h=e.serverCache.getNode();return l.children.inorderTraversal(((n,i)=>{if(h.hasChild(n)){const l=e.serverCache.getNode().getImmediateChild(n),h=lr(t,l,i);c=rr(t,c,new ce(n),h,r,s,o,a)}})),l.children.inorderTraversal(((n,i)=>{const l=!e.serverCache.isCompleteForChild(n)&&void 0===i.value;if(!h.hasChild(n)&&!l){const l=e.serverCache.getNode().getImmediateChild(n),h=lr(t,l,i);c=rr(t,c,new ce(n),h,r,s,o,a)}})),c}function hr(t,e,n,i,r,s,o){if(null!=Hi(r,n))return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(null!=i.value){if(_e(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return rr(t,e,n,l.getNode().getChild(n),r,s,a,o);if(_e(n)){let i=new fi(null);return l.getNode().forEachChild(Ve,((t,e)=>{i=i.set(new ce(t),e)})),cr(t,e,n,i,r,s,a,o)}return e}{let c=new fi(null);return i.foreach(((t,e)=>{const i=ye(n,t);l.isCompleteForPath(i)&&(c=c.set(t,l.getNode().getChild(i)))})),cr(t,e,n,c,r,s,a,o)}}function ur(t,e,n,i,r){const s=e.serverCache,o=ci(e,s.getNode(),s.isFullyInitialized()||_e(n),s.isFiltered());return ir(t,o,n,i,Xi,r)}function dr(t,e,n,i,r,o){let a;if(null!=Hi(i,n))return e;{const l=new Ji(i,e,r),c=e.eventCache.getNode();let h;if(_e(n)||".priority"===ue(n)){let n;if(e.serverCache.isFullyInitialized())n=Vi(i,ui(e));else{const t=e.serverCache.getNode();(0,s.hu)(t instanceof fn,"serverChildren would be complete if leaf node"),n=Ui(i,t)}h=t.filter.updateFullNode(c,n,o)}else{const r=ue(n);let s=Wi(i,r,e.serverCache);null==s&&e.serverCache.isCompleteForChild(r)&&(s=c.getImmediateChild(r)),h=null!=s?t.filter.updateChild(c,r,s,pe(n),l,o):e.eventCache.getNode().hasChild(r)?t.filter.updateChild(c,r,fn.EMPTY_NODE,pe(n),l,o):c,h.isEmpty()&&e.serverCache.isFullyInitialized()&&(a=Vi(i,ui(e)),a.isLeafNode()&&(h=t.filter.updateFullNode(h,a,o)))}return a=e.serverCache.isFullyInitialized()||null!=Hi(i,he()),li(e,h,a,t.filter.filtersNodes())}}
/**
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
 */class pr{constructor(t,e){this.query_=t,this.eventRegistrations_=[];const n=this.query_._queryParams,i=new On(n.getIndex()),r=Ln(n);this.processor_=Qi(r);const s=e.serverCache,o=e.eventCache,a=i.updateFullNode(fn.EMPTY_NODE,s.getNode(),null),l=r.updateFullNode(fn.EMPTY_NODE,o.getNode(),null),c=new ei(a,s.isFullyInitialized(),i.filtersNodes()),h=new ei(l,o.isFullyInitialized(),r.filtersNodes());this.viewCache_=ai(h,c),this.eventGenerator_=new ni(this.query_)}get query(){return this.query_}}function fr(t){return t.viewCache_.serverCache.getNode()}function mr(t){return hi(t.viewCache_)}function gr(t,e){const n=ui(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!_e(e)&&!n.getImmediateChild(ue(e)).isEmpty())?n.getChild(e):null}function vr(t){return 0===t.eventRegistrations_.length}function yr(t,e,n){const i=[];if(n){(0,s.hu)(null==e,"A cancel should cancel all event registrations.");const r=t.query._path;t.eventRegistrations_.forEach((t=>{const e=t.createCancelEvent(n,r);e&&i.push(e)}))}if(e){let n=[];for(let i=0;i<t.eventRegistrations_.length;++i){const r=t.eventRegistrations_[i];if(r.matches(e)){if(e.hasAnyCallback()){n=n.concat(t.eventRegistrations_.slice(i+1));break}}else n.push(r)}t.eventRegistrations_=n}else t.eventRegistrations_=[];return i}function _r(t,e,n,i){e.type===Zn.MERGE&&null!==e.source.queryId&&((0,s.hu)(ui(t.viewCache_),"We should always have a full cache before handling merges"),(0,s.hu)(hi(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,o=er(t.processor_,r,e,n,i);return tr(t.processor_,o.viewCache),(0,s.hu)(o.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=o.viewCache,br(t,o.changes,o.viewCache.eventCache.getNode(),null)}function br(t,e,n,i){const r=i?[i]:t.eventRegistrations_;return ii(t.eventGenerator_,e,n,r)}
/**
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
 */let wr,Cr;class Sr{constructor(){this.views=new Map}}function Er(t){(0,s.hu)(!wr,"__referenceConstructor has already been defined"),wr=t}function Tr(){return(0,s.hu)(wr,"Reference.ts has not been loaded"),wr}function kr(t){return 0===t.views.size}function Ir(t,e,n,i){const r=e.source.queryId;if(null!==r){const o=t.views.get(r);return(0,s.hu)(null!=o,"SyncTree gave us an op for an invalid query."),_r(o,e,n,i)}{let r=[];for(const s of t.views.values())r=r.concat(_r(s,e,n,i));return r}}function xr(t,e,n,i,r){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let t=Vi(n,r?i:null),s=!1;t?s=!0:i instanceof fn?(t=Ui(n,i),s=!1):(t=fn.EMPTY_NODE,s=!1);const o=ai(new ei(t,s,!1),new ei(i,r,!1));return new pr(e,o)}return o}function Or(t,e,n,i){const r=e._queryIdentifier,s=[];let o=[];const a=Rr(t);if("default"===r)for(const[l,c]of t.views.entries())o=o.concat(yr(c,n,i)),vr(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const e=t.views.get(r);e&&(o=o.concat(yr(e,n,i)),vr(e)&&(t.views.delete(r),e.query._queryParams.loadsAllData()||s.push(e.query)))}return a&&!Rr(t)&&s.push(new(Tr())(e._repo,e._path)),{removed:s,events:o}}function Ar(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Pr(t,e){let n=null;for(const i of t.views.values())n=n||gr(i,e);return n}function Nr(t,e){const n=e._queryParams;if(n.loadsAllData())return $r(t);{const n=e._queryIdentifier;return t.views.get(n)}}function Lr(t,e){return null!=Nr(t,e)}function Rr(t){return null!=$r(t)}function $r(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}
/**
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
 */function Dr(t){(0,s.hu)(!Cr,"__referenceConstructor has already been defined"),Cr=t}function Mr(){return(0,s.hu)(Cr,"Reference.ts has not been loaded"),Cr}let Fr=1;class jr{constructor(t){this.listenProvider_=t,this.syncPointTree_=new fi(null),this.pendingWriteTree_=Bi(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Br(t,e,n,i,r){return Ii(t.pendingWriteTree_,e,n,i,r),r?Qr(t,new Qn(Kn(),e,n)):[]}function Vr(t,e,n=!1){const i=xi(t.pendingWriteTree_,e),r=Oi(t.pendingWriteTree_,e);if(r){let e=new fi(null);return null!=i.snap?e=e.set(he(),!0):F(i.children,(t=>{e=e.set(new ce(t),!0)})),Qr(t,new Xn(i.path,e,n))}return[]}function Ur(t,e,n){return Qr(t,new Qn(Gn(),e,n))}function zr(t,e,n){const i=fi.fromObject(n);return Qr(t,new ti(Gn(),e,i))}function Hr(t,e){return Qr(t,new Jn(Gn(),e))}function qr(t,e,n){const i=ss(t,n);if(i){const n=os(i),r=n.path,s=n.queryId,o=be(r,e),a=new Jn(Yn(s),o);return as(t,r,a)}return[]}function Wr(t,e,n,i){const r=e._path,s=t.syncPointTree_.get(r);let o=[];if(s&&("default"===e._queryIdentifier||Lr(s,e))){const a=Or(s,e,n,i);kr(s)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const l=a.removed;o=a.events;const c=-1!==l.findIndex((t=>t._queryParams.loadsAllData())),h=t.syncPointTree_.findOnPath(r,((t,e)=>Rr(e)));if(c&&!h){const e=t.syncPointTree_.subtree(r);if(!e.isEmpty()){const n=ls(e);for(let e=0;e<n.length;++e){const i=n[e],r=i.query,s=ns(t,i);t.listenProvider_.startListening(cs(r),is(t,r),s.hashFn,s.onComplete)}}}if(!h&&l.length>0&&!i)if(c){const n=null;t.listenProvider_.stopListening(cs(e),n)}else l.forEach((e=>{const n=t.queryToTagMap.get(rs(e));t.listenProvider_.stopListening(cs(e),n)}));hs(t,l)}return o}function Zr(t,e){const{syncPoint:n,serverCache:i,writesCache:r,serverCacheComplete:s}=Yr(e,t),o=xr(n,e,r,i,s);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),e._queryParams.loadsAllData()?null:is(t,e)}function Kr(t,e,n,i){const r=ss(t,i);if(null!=r){const i=os(r),s=i.path,o=i.queryId,a=be(s,e),l=new Qn(Yn(o),a,n);return as(t,s,l)}return[]}function Gr(t,e,n,i){const r=ss(t,i);if(r){const i=os(r),s=i.path,o=i.queryId,a=be(s,e),l=fi.fromObject(n),c=new ti(Yn(o),a,l);return as(t,s,c)}return[]}function Yr(t,e){const n=t._path;let i=null,r=!1;e.syncPointTree_.foreachOnPath(n,((t,e)=>{const s=be(t,n);i=i||Pr(e,s),r=r||Rr(e)}));let o,a=e.syncPointTree_.get(n);if(a?(r=r||Rr(a),i=i||Pr(a,he())):(a=new Sr,e.syncPointTree_=e.syncPointTree_.set(n,a)),null!=i)o=!0;else{o=!1,i=fn.EMPTY_NODE;const t=e.syncPointTree_.subtree(n);t.foreachChild(((t,e)=>{const n=Pr(e,he());n&&(i=i.updateImmediateChild(t,n))}))}const l=Lr(a,t);if(!l&&!t._queryParams.loadsAllData()){const n=rs(t);(0,s.hu)(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const i=us();e.queryToTagMap.set(n,i),e.tagToQueryMap.set(i,n)}const c=ki(e.pendingWriteTree_,n);return{syncPoint:a,writesCache:c,serverCache:i,serverCacheComplete:o,foundAncestorDefaultView:r,viewAlreadyExists:l}}function Xr(t,e,n){const i=!0,r=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,((t,n)=>{const i=be(t,e),r=Pr(n,i);if(r)return r}));return Ri(r,e,s,n,i)}function Jr(t,e){const n=e._path;let i=null;t.syncPointTree_.foreachOnPath(n,((t,e)=>{const r=be(t,n);i=i||Pr(e,r)}));let r=t.syncPointTree_.get(n);r?i=i||Pr(r,he()):(r=new Sr,t.syncPointTree_=t.syncPointTree_.set(n,r));const s=null!=i,o=s?new ei(i,!0,!1):null,a=ki(t.pendingWriteTree_,e._path),l=xr(r,e,a,s?o.getNode():fn.EMPTY_NODE,s);return mr(l)}function Qr(t,e){return ts(e,t.syncPointTree_,null,ki(t.pendingWriteTree_,he()))}function ts(t,e,n,i){if(_e(t.path))return es(t,e,n,i);{const r=e.get(he());null==n&&null!=r&&(n=Pr(r,he()));let s=[];const o=ue(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const t=n?n.getImmediateChild(o):null,e=Zi(i,o);s=s.concat(ts(a,l,t,e))}return r&&(s=s.concat(Ir(r,t,i,n))),s}}function es(t,e,n,i){const r=e.get(he());null==n&&null!=r&&(n=Pr(r,he()));let s=[];return e.children.inorderTraversal(((e,r)=>{const o=n?n.getImmediateChild(e):null,a=Zi(i,e),l=t.operationForChild(e);l&&(s=s.concat(es(l,r,o,a)))})),r&&(s=s.concat(Ir(r,t,i,n))),s}function ns(t,e){const n=e.query,i=is(t,n);return{hashFn:()=>{const t=fr(e)||fn.EMPTY_NODE;return t.hash()},onComplete:e=>{if("ok"===e)return i?qr(t,n._path,i):Hr(t,n._path);{const i=U(e,n);return Wr(t,n,null,i)}}}}function is(t,e){const n=rs(e);return t.queryToTagMap.get(n)}function rs(t){return t._path.toString()+"$"+t._queryIdentifier}function ss(t,e){return t.tagToQueryMap.get(e)}function os(t){const e=t.indexOf("$");return(0,s.hu)(-1!==e&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ce(t.substr(0,e))}}function as(t,e,n){const i=t.syncPointTree_.get(e);(0,s.hu)(i,"Missing sync point for query tag that we're tracking");const r=ki(t.pendingWriteTree_,e);return Ir(i,n,r,null)}function ls(t){return t.fold(((t,e,n)=>{if(e&&Rr(e)){const t=$r(e);return[t]}{let t=[];return e&&(t=Ar(e)),F(n,((e,n)=>{t=t.concat(n)})),t}}))}function cs(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Mr())(t._repo,t._path):t}function hs(t,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const e=rs(i),n=t.queryToTagMap.get(e);t.queryToTagMap.delete(e),t.tagToQueryMap.delete(n)}}}function us(){return Fr++}
/**
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
 */
class ds{constructor(t){this.node_=t}getImmediateChild(t){const e=this.node_.getImmediateChild(t);return new ds(e)}node(){return this.node_}}class ps{constructor(t,e){this.syncTree_=t,this.path_=e}getImmediateChild(t){const e=ye(this.path_,t);return new ps(this.syncTree_,e)}node(){return Xr(this.syncTree_,this.path_)}}const fs=function(t){return t=t||{},t["timestamp"]=t["timestamp"]||(new Date).getTime(),t},ms=function(t,e,n){return t&&"object"===typeof t?((0,s.hu)(".sv"in t,"Unexpected leaf node or priority contents"),"string"===typeof t[".sv"]?gs(t[".sv"],e,n):"object"===typeof t[".sv"]?vs(t[".sv"],e):void(0,s.hu)(!1,"Unexpected server value: "+JSON.stringify(t,null,2))):t},gs=function(t,e,n){switch(t){case"timestamp":return n["timestamp"];default:(0,s.hu)(!1,"Unexpected server value: "+t)}},vs=function(t,e,n){t.hasOwnProperty("increment")||(0,s.hu)(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t["increment"];"number"!==typeof i&&(0,s.hu)(!1,"Unexpected increment value: "+i);const r=e.node();if((0,s.hu)(null!==r&&"undefined"!==typeof r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r,a=o.getValue();return"number"!==typeof a?i:a+i},ys=function(t,e,n,i){return bs(e,new ps(n,t),i)},_s=function(t,e,n){return bs(t,new ds(e),n)};function bs(t,e,n){const i=t.getPriority().val(),r=ms(i,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const i=t,s=ms(i.getValue(),e,n);return s!==i.getValue()||r!==i.getPriority().val()?new en(s,yn(r)):t}{const i=t;return s=i,r!==i.getPriority().val()&&(s=s.updatePriority(new en(r))),i.forEachChild(on,((t,i)=>{const r=bs(i,e.getImmediateChild(t),n);r!==i&&(s=s.updateImmediateChild(t,r))})),s}}
/**
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
 */class ws{constructor(t="",e=null,n={children:{},childCount:0}){this.name=t,this.parent=e,this.node=n}}function Cs(t,e){let n=e instanceof ce?e:new ce(e),i=t,r=ue(n);while(null!==r){const t=(0,s.DV)(i.node.children,r)||{children:{},childCount:0};i=new ws(r,i,t),n=pe(n),r=ue(n)}return i}function Ss(t){return t.node.value}function Es(t,e){t.node.value=e,Ps(t)}function Ts(t){return t.node.childCount>0}function ks(t){return void 0===Ss(t)&&!Ts(t)}function Is(t,e){F(t.node.children,((n,i)=>{e(new ws(n,t,i))}))}function xs(t,e,n,i){n&&!i&&e(t),Is(t,(t=>{xs(t,e,!0,i)})),n&&i&&e(t)}function Os(t,e,n){let i=n?t:t.parent;while(null!==i){if(e(i))return!0;i=i.parent}return!1}function As(t){return new ce(null===t.parent?t.name:As(t.parent)+"/"+t.name)}function Ps(t){null!==t.parent&&Ns(t.parent,t.name,t)}function Ns(t,e,n){const i=ks(n),r=(0,s.r3)(t.node.children,e);i&&r?(delete t.node.children[e],t.node.childCount--,Ps(t)):i||r||(t.node.children[e]=n.node,t.node.childCount++,Ps(t))}
/**
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
 */const Ls=/[\[\].#$\/\u0000-\u001F\u007F]/,Rs=/[\[\].#$\u0000-\u001F\u007F]/,$s=10485760,Ds=function(t){return"string"===typeof t&&0!==t.length&&!Ls.test(t)},Ms=function(t){return"string"===typeof t&&0!==t.length&&!Rs.test(t)},Fs=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Ms(t)},js=function(t,e,n,i){i&&void 0===e||Bs((0,s.gK)(t,"value"),e,n)},Bs=function(t,e,n){const i=n instanceof ce?new Se(n,t):n;if(void 0===e)throw new Error(t+"contains undefined "+Ie(i));if("function"===typeof e)throw new Error(t+"contains a function "+Ie(i)+" with contents = "+e.toString());if(O(e))throw new Error(t+"contains "+e.toString()+" "+Ie(i));if("string"===typeof e&&e.length>$s/3&&(0,s.ug)(e)>$s)throw new Error(t+"contains a string greater than "+$s+" utf8 bytes "+Ie(i)+" ('"+e.substring(0,50)+"...')");if(e&&"object"===typeof e){let n=!1,r=!1;if(F(e,((e,s)=>{if(".value"===e)n=!0;else if(".priority"!==e&&".sv"!==e&&(r=!0,!Ds(e)))throw new Error(t+" contains an invalid key ("+e+") "+Ie(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');Ee(i,e),Bs(t,s,i),Te(i)})),n&&r)throw new Error(t+' contains ".value" child '+Ie(i)+" in addition to actual children.")}},Vs=function(t,e,n,i){if((!i||void 0!==n)&&!Ms(n))throw new Error((0,s.gK)(t,e)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Us=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Vs(t,e,n,i)},zs=function(t,e){if(".info"===ue(e))throw new Error(t+" failed = Can't modify data under /.info/")},Hs=function(t,e){const n=e.path.toString();if("string"!==typeof e.repoInfo.host||0===e.repoInfo.host.length||!Ds(e.repoInfo.namespace)&&"localhost"!==e.repoInfo.host.split(":")[0]||0!==n.length&&!Fs(n))throw new Error((0,s.gK)(t,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
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
 */
class qs{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ws(t,e){let n=null;for(let i=0;i<e.length;i++){const r=e[i],s=r.getPath();null===n||we(s,n.path)||(t.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(r)}n&&t.eventLists_.push(n)}function Zs(t,e,n){Ws(t,n),Ks(t,(t=>Ce(t,e)||Ce(e,t)))}function Ks(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const r=t.eventLists_[i];if(r){const s=r.path;e(s)?(Gs(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Gs(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(null!==n){t.events[e]=null;const i=n.getEventRunner();b&&S("event: "+n.toString()),Z(i)}}}
/**
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
 */const Ys="repo_interrupt",Xs=25;class Js{constructor(t,e,n,i){this.repoInfo_=t,this.forceRestClient_=e,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new qs,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Fn(),this.transactionQueueTree_=new ws,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Qs(t,e,n){if(t.stats_=gt(t.repoInfo_),t.forceRestClient_||K())t.server_=new Dn(t.repoInfo_,((e,n,i,r)=>{no(t,e,n,i,r)}),t.authTokenProvider_,t.appCheckProvider_),setTimeout((()=>io(t,!0)),0);else{if("undefined"!==typeof n&&null!==n){if("object"!==typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{(0,s.Pz)(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new De(t.repoInfo_,e,((e,n,i,r)=>{no(t,e,n,i,r)}),(e=>{io(t,e)}),(e=>{ro(t,e)}),t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener((e=>{t.server_.refreshAuthToken(e)})),t.appCheckProvider_.addTokenChangeListener((e=>{t.server_.refreshAppCheckToken(e.token)})),t.statsReporter_=vt(t.repoInfo_,(()=>new Wn(t.stats_,t.server_))),t.infoData_=new Mn,t.infoSyncTree_=new jr({startListening:(e,n,i,r)=>{let s=[];const o=t.infoData_.getNode(e._path);return o.isEmpty()||(s=Ur(t.infoSyncTree_,e._path,o),setTimeout((()=>{r("ok")}),0)),s},stopListening:()=>{}}),so(t,"connected",!1),t.serverSyncTree_=new jr({startListening:(e,n,i,r)=>(t.server_.listen(e,i,n,((n,i)=>{const s=r(n,i);Zs(t.eventQueue_,e._path,s)})),[]),stopListening:(e,n)=>{t.server_.unlisten(e,n)}})}function to(t){const e=t.infoData_.getNode(new ce(".info/serverTimeOffset")),n=e.val()||0;return(new Date).getTime()+n}function eo(t){return fs({timestamp:to(t)})}function no(t,e,n,i,r){t.dataUpdateCount++;const o=new ce(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let a=[];if(r)if(i){const e=(0,s.UI)(n,(t=>yn(t)));a=Gr(t.serverSyncTree_,o,e,r)}else{const e=yn(n);a=Kr(t.serverSyncTree_,o,e,r)}else if(i){const e=(0,s.UI)(n,(t=>yn(t)));a=zr(t.serverSyncTree_,o,e)}else{const e=yn(n);a=Ur(t.serverSyncTree_,o,e)}let l=o;a.length>0&&(l=vo(t,o)),Zs(t.eventQueue_,l,a)}function io(t,e){so(t,"connected",e),!1===e&&co(t)}function ro(t,e){F(e,((e,n)=>{so(t,e,n)}))}function so(t,e,n){const i=new ce("/.info/"+e),r=yn(n);t.infoData_.updateSnapshot(i,r);const s=Ur(t.infoSyncTree_,i,r);Zs(t.eventQueue_,i,s)}function oo(t){return t.nextWriteId_++}function ao(t,e){const n=Jr(t.serverSyncTree_,e);return null!=n?Promise.resolve(n):t.server_.get(e).then((n=>{const i=yn(n).withIndex(e._queryParams.getIndex());if(e._queryParams.loadsAllData())Ur(t.serverSyncTree_,e._path,i);else{const n=Zr(t.serverSyncTree_,e);Kr(t.serverSyncTree_,e._path,i,n)}const r=Wr(t.serverSyncTree_,e,null);return r.length>0&&uo(t,"unexpected cancel events in repoGetValue"),i}),(n=>(uo(t,"get for query "+(0,s.Pz)(e)+" failed: "+n),Promise.reject(new Error(n)))))}function lo(t,e,n,i,r){uo(t,"set",{path:e.toString(),value:n,priority:i});const s=eo(t),o=yn(n,i),a=Xr(t.serverSyncTree_,e),l=_s(o,a,s),c=oo(t),h=Br(t.serverSyncTree_,e,l,c,!0);Ws(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),((n,i)=>{const s="ok"===n;s||I("set at "+e+" failed: "+n);const o=Vr(t.serverSyncTree_,c,!s);Zs(t.eventQueue_,e,o),po(t,r,n,i)}));const u=So(t,e);vo(t,u),Zs(t.eventQueue_,u,[])}function co(t){uo(t,"onDisconnectEvents");const e=eo(t),n=Fn();Bn(t.onDisconnect_,he(),((i,r)=>{const s=ys(i,r,t.serverSyncTree_,e);jn(n,i,s)}));let i=[];Bn(n,he(),((e,n)=>{i=i.concat(Ur(t.serverSyncTree_,e,n));const r=So(t,e);vo(t,r)})),t.onDisconnect_=Fn(),Zs(t.eventQueue_,he(),i)}function ho(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Ys)}function uo(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),S(n,...e)}function po(t,e,n,i){e&&Z((()=>{if("ok"===n)e(null);else{const t=(n||"error").toUpperCase();let r=t;i&&(r+=": "+i);const s=new Error(r);s.code=t,e(s)}}))}function fo(t,e,n){return Xr(t.serverSyncTree_,e,n)||fn.EMPTY_NODE}function mo(t,e=t.transactionQueueTree_){if(e||Co(t,e),Ss(e)){const n=bo(t,e);(0,s.hu)(n.length>0,"Sending zero length transaction queue");const i=n.every((t=>0===t.status));i&&go(t,As(e),n)}else Ts(e)&&Is(e,(e=>{mo(t,e)}))}function go(t,e,n){const i=n.map((t=>t.currentWriteId)),r=fo(t,e,i);let o=r;const a=r.hash();for(let h=0;h<n.length;h++){const t=n[h];(0,s.hu)(0===t.status,"tryToSendTransactionQueue_: items in queue should all be run."),t.status=1,t.retryCount++;const i=be(e,t.path);o=o.updateChild(i,t.currentOutputSnapshotRaw)}const l=o.val(!0),c=e;t.server_.put(c.toString(),l,(i=>{uo(t,"transaction put response",{path:c.toString(),status:i});let r=[];if("ok"===i){const i=[];for(let e=0;e<n.length;e++)n[e].status=2,r=r.concat(Vr(t.serverSyncTree_,n[e].currentWriteId)),n[e].onComplete&&i.push((()=>n[e].onComplete(null,!0,n[e].currentOutputSnapshotResolved))),n[e].unwatcher();Co(t,Cs(t.transactionQueueTree_,e)),mo(t,t.transactionQueueTree_),Zs(t.eventQueue_,e,r);for(let t=0;t<i.length;t++)Z(i[t])}else{if("datastale"===i)for(let t=0;t<n.length;t++)3===n[t].status?n[t].status=4:n[t].status=0;else{I("transaction at "+c.toString()+" failed: "+i);for(let t=0;t<n.length;t++)n[t].status=4,n[t].abortReason=i}vo(t,e)}}),a)}function vo(t,e){const n=_o(t,e),i=As(n),r=bo(t,n);return yo(t,r,i),i}function yo(t,e,n){if(0===e.length)return;const i=[];let r=[];const o=e.filter((t=>0===t.status)),a=o.map((t=>t.currentWriteId));for(let l=0;l<e.length;l++){const o=e[l],c=be(n,o.path);let h,u=!1;if((0,s.hu)(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===o.status)u=!0,h=o.abortReason,r=r.concat(Vr(t.serverSyncTree_,o.currentWriteId,!0));else if(0===o.status)if(o.retryCount>=Xs)u=!0,h="maxretry",r=r.concat(Vr(t.serverSyncTree_,o.currentWriteId,!0));else{const n=fo(t,o.path,a);o.currentInputSnapshot=n;const i=e[l].update(n.val());if(void 0!==i){Bs("transaction failed: Data returned ",i,o.path);let e=yn(i);const l="object"===typeof i&&null!=i&&(0,s.r3)(i,".priority");l||(e=e.updatePriority(n.getPriority()));const c=o.currentWriteId,h=eo(t),u=_s(e,n,h);o.currentOutputSnapshotRaw=e,o.currentOutputSnapshotResolved=u,o.currentWriteId=oo(t),a.splice(a.indexOf(c),1),r=r.concat(Br(t.serverSyncTree_,o.path,u,o.currentWriteId,o.applyLocally)),r=r.concat(Vr(t.serverSyncTree_,c,!0))}else u=!0,h="nodata",r=r.concat(Vr(t.serverSyncTree_,o.currentWriteId,!0))}Zs(t.eventQueue_,n,r),r=[],u&&(e[l].status=2,function(t){setTimeout(t,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&("nodata"===h?i.push((()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot))):i.push((()=>e[l].onComplete(new Error(h),!1,null)))))}Co(t,t.transactionQueueTree_);for(let s=0;s<i.length;s++)Z(i[s]);mo(t,t.transactionQueueTree_)}function _o(t,e){let n,i=t.transactionQueueTree_;n=ue(e);while(null!==n&&void 0===Ss(i))i=Cs(i,n),e=pe(e),n=ue(e);return i}function bo(t,e){const n=[];return wo(t,e,n),n.sort(((t,e)=>t.order-e.order)),n}function wo(t,e,n){const i=Ss(e);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);Is(e,(e=>{wo(t,e,n)}))}function Co(t,e){const n=Ss(e);if(n){let t=0;for(let e=0;e<n.length;e++)2!==n[e].status&&(n[t]=n[e],t++);n.length=t,Es(e,n.length>0?n:void 0)}Is(e,(e=>{Co(t,e)}))}function So(t,e){const n=As(_o(t,e)),i=Cs(t.transactionQueueTree_,e);return Os(i,(e=>{Eo(t,e)})),Eo(t,i),xs(i,(e=>{Eo(t,e)})),n}function Eo(t,e){const n=Ss(e);if(n){const i=[];let r=[],o=-1;for(let e=0;e<n.length;e++)3===n[e].status||(1===n[e].status?((0,s.hu)(o===e-1,"All SENT items should be at beginning of queue."),o=e,n[e].status=3,n[e].abortReason="set"):((0,s.hu)(0===n[e].status,"Unexpected transaction status in abort"),n[e].unwatcher(),r=r.concat(Vr(t.serverSyncTree_,n[e].currentWriteId,!0)),n[e].onComplete&&i.push(n[e].onComplete.bind(null,new Error("set"),!1,null))));-1===o?Es(e,void 0):n.length=o+1,Zs(t.eventQueue_,As(e),r);for(let t=0;t<i.length;t++)Z(i[t])}}
/**
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
 */function To(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let t=n[r];try{t=decodeURIComponent(t.replace(/\+/g," "))}catch(i){}e+="/"+t}return e}function ko(t){const e={};"?"===t.charAt(0)&&(t=t.substring(1));for(const n of t.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):I(`Invalid query segment '${n}' in query '${t}'`)}return e}const Io=function(t,e){const n=xo(t),i=n.namespace;"firebase.com"===n.domain&&k(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||k("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||x();const r="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new ht(n.host,n.secure,i,r,e,"",i!==n.subdomain),path:new ce(n.pathString)}},xo=function(t){let e="",n="",i="",r="",s="",o=!0,a="https",l=443;if("string"===typeof t){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let h=t.indexOf("/");-1===h&&(h=t.length);let u=t.indexOf("?");-1===u&&(u=t.length),e=t.substring(0,Math.min(h,u)),h<u&&(r=To(t.substring(h,u)));const d=ko(t.substring(Math.min(t.length,u)));c=e.indexOf(":"),c>=0?(o="https"===a||"wss"===a,l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const t=e.indexOf(".");i=e.substring(0,t).toLowerCase(),n=e.substring(t+1),s=i}"ns"in d&&(s=d["ns"])}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};
/**
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
 */
class Oo{constructor(t,e,n,i){this._repo=t,this._path=e,this._queryParams=n,this._orderByCalled=i}get key(){return _e(this._path)?null:fe(this._path)}get ref(){return new Ao(this._repo,this._path)}get _queryIdentifier(){const t=$n(this._queryParams),e=D(t);return"{}"===e?"default":e}get _queryObject(){return $n(this._queryParams)}isEqual(t){if(t=(0,s.m9)(t),!(t instanceof Oo))return!1;const e=this._repo===t._repo,n=we(this._path,t._path),i=this._queryIdentifier===t._queryIdentifier;return e&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+me(this._path)}}class Ao extends Oo{constructor(t,e){super(t,e,new Nn,!1)}get parent(){const t=ve(this._path);return null===t?null:new Ao(this._repo,t)}get root(){let t=this;while(null!==t.parent)t=t.parent;return t}}class Po{constructor(t,e,n){this._node=t,this.ref=e,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(t){const e=new ce(t),n=Lo(this.ref,t);return new Po(this._node.getChild(e),n,on)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(t){if(this._node.isLeafNode())return!1;const e=this._node;return!!e.forEachChild(this._index,((e,n)=>t(new Po(n,Lo(this.ref,e),on))))}hasChild(t){const e=new ce(t);return!this._node.getChild(e).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function No(t,e){return t=(0,s.m9)(t),t._checkNotDeleted("ref"),void 0!==e?Lo(t._root,e):t._root}function Lo(t,e){return t=(0,s.m9)(t),null===ue(t._path)?Us("child","path",e,!1):Vs("child","path",e,!1),new Ao(t._repo,ye(t._path,e))}function Ro(t,e){t=(0,s.m9)(t),zs("push",t._path),js("push",e,t._path,!0);const n=to(t._repo),i=Sn(n),r=Lo(t,i),o=Lo(t,i);let a;return a=null!=e?Do(o,e).then((()=>o)):Promise.resolve(o),r.then=a.then.bind(a),r.catch=a.then.bind(a,void 0),r}function $o(t){return zs("remove",t._path),Do(t,null)}function Do(t,e){t=(0,s.m9)(t),zs("set",t._path),js("set",e,t._path,!1);const n=new s.BH;return lo(t._repo,t._path,e,null,n.wrapCallback((()=>{}))),n.promise}function Mo(t){return t=(0,s.m9)(t),ao(t._repo,t).then((e=>new Po(e,new Ao(t._repo,t._path),t._queryParams.getIndex())))}Er(Ao),Dr(Ao);
/**
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
 */
const Fo="FIREBASE_DATABASE_EMULATOR_HOST",jo={};let Bo=!1;function Vo(t,e,n,i,r){let s=i||t.options.databaseURL;void 0===s&&(t.options.projectId||k("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),S("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o,a,l=Io(s,r),c=l.repoInfo;"undefined"!==typeof process&&(a={NODE_ENV:"production",BASE_URL:"/MyDictionary/"}[Fo]),a?(o=!0,s=`http://${a}?ns=${c.namespace}`,l=Io(s,r),c=l.repoInfo):o=!l.repoInfo.secure;const h=r&&o?new J(J.OWNER):new X(t.name,t.options,e);Hs("Invalid Firebase Database URL",l),_e(l.path)||k("Database URL must point to the root of a Firebase Database (not including a child path).");const u=zo(c,t,h,new Y(t.name,n));return new Ho(u,t)}function Uo(t,e){const n=jo[e];n&&n[t.key]===t||k(`Database ${e}(${t.repoInfo_}) has already been deleted.`),ho(t),delete n[t.key]}function zo(t,e,n,i){let r=jo[e.name];r||(r={},jo[e.name]=r);let s=r[t.toURLString()];return s&&k("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new Js(t,Bo,n,i),r[t.toURLString()]=s,s}class Ho{constructor(t,e){this._repoInternal=t,this.app=e,this["type"]="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Qs(this._repoInternal,this.app.options.appId,this.app.options["databaseAuthVariableOverride"]),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ao(this._repo,he())),this._rootInternal}_delete(){return null!==this._rootInternal&&(Uo(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){null===this._rootInternal&&k("Cannot call "+t+" on a deleted database.")}}function qo(t=(0,i.Mq)(),e){return(0,i.qX)(t,"database").getImmediate({identifier:e})}
/**
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
 */
function Wo(t){h(i.Jn),(0,i.Xd)(new r.wA("database",((t,{instanceIdentifier:e})=>{const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return Vo(n,i,r,e)}),"PUBLIC").setMultipleInstances(!0)),(0,i.KN)(a,l,t),(0,i.KN)(a,l,"esm2017")}
/**
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
 */De.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)},De.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Wo()},5321:function(t,e,n){"use strict";n.d(e,{ad:function(){return Rr}});var i,r=n(5816),s=n(8463),o=n(3333),a=n(4444),l="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},c={},h=h||{},u=l||self;function d(){}function p(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function f(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function m(t){return Object.prototype.hasOwnProperty.call(t,g)&&t[g]||(t[g]=++v)}var g="closure_uid_"+(1e9*Math.random()>>>0),v=0;function y(t,e,n){return t.call.apply(t.bind,arguments)}function _(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function b(t,e,n){return b=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?y:_,b.apply(null,arguments)}function w(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function C(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return e.prototype[n].apply(t,r)}}function S(){this.s=this.s,this.o=this.o}var E=0,T={};S.prototype.s=!1,S.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=E)){var t=m(this);delete T[t]}},S.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const k=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},I=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const i=t.length,r="string"===typeof t?t.split(""):t;for(let s=0;s<i;s++)s in r&&e.call(n,r[s],s,t)};function x(t){t:{var e=Wn;const n=t.length,i="string"===typeof t?t.split(""):t;for(let r=0;r<n;r++)if(r in i&&e.call(void 0,i[r],r,t)){e=r;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function O(t){return Array.prototype.concat.apply([],arguments)}function A(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function P(t){return/^[\s\xa0]*$/.test(t)}var N,L=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function R(t,e){return-1!=t.indexOf(e)}function $(t,e){return t<e?-1:t>e?1:0}t:{var D=u.navigator;if(D){var M=D.userAgent;if(M){N=M;break t}}N=""}function F(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function j(t){const e={};for(const n in t)e[n]=t[n];return e}var B="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function V(t,e){let n,i;for(let r=1;r<arguments.length;r++){for(n in i=arguments[r],i)t[n]=i[n];for(let e=0;e<B.length;e++)n=B[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function U(t){return U[" "](t),t}function z(t){var e=nt;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}U[" "]=d;var H,q=R(N,"Opera"),W=R(N,"Trident")||R(N,"MSIE"),Z=R(N,"Edge"),K=Z||W,G=R(N,"Gecko")&&!(R(N.toLowerCase(),"webkit")&&!R(N,"Edge"))&&!(R(N,"Trident")||R(N,"MSIE"))&&!R(N,"Edge"),Y=R(N.toLowerCase(),"webkit")&&!R(N,"Edge");function X(){var t=u.document;return t?t.documentMode:void 0}t:{var J="",Q=function(){var t=N;return G?/rv:([^\);]+)(\)|;)/.exec(t):Z?/Edge\/([\d\.]+)/.exec(t):W?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):Y?/WebKit\/(\S+)/.exec(t):q?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(Q&&(J=Q?Q[1]:""),W){var tt=X();if(null!=tt&&tt>parseFloat(J)){H=String(tt);break t}}H=J}var et,nt={};function it(){return z((function(){let t=0;const e=L(String(H)).split("."),n=L("9").split("."),i=Math.max(e.length,n.length);for(let o=0;0==t&&o<i;o++){var r=e[o]||"",s=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==r[0].length&&0==s[0].length)break;t=$(0==r[1].length?0:parseInt(r[1],10),0==s[1].length?0:parseInt(s[1],10))||$(0==r[2].length,0==s[2].length)||$(r[2],s[2]),r=r[3],s=s[3]}while(0==t)}return 0<=t}))}if(u.document&&W){var rt=X();et=rt||(parseInt(H,10)||void 0)}else et=void 0;var st=et,ot=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{u.addEventListener("test",d,e),u.removeEventListener("test",d,e)}catch(n){}return t}();function at(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function lt(t,e){if(at.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(G){t:{try{U(e.nodeName);var r=!0;break t}catch(s){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:ct[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&lt.Z.h.call(this)}}at.prototype.h=function(){this.defaultPrevented=!0},C(lt,at);var ct={2:"touch",3:"pen",4:"mouse"};lt.prototype.h=function(){lt.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ht="closure_listenable_"+(1e6*Math.random()|0),ut=0;function dt(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ia=r,this.key=++ut,this.ca=this.fa=!1}function pt(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function ft(t){this.src=t,this.g={},this.h=0}function mt(t,e){var n=e.type;if(n in t.g){var i,r=t.g[n],s=k(r,e);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(pt(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function gt(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==i)return r}return-1}ft.prototype.add=function(t,e,n,i,r){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=gt(t,e,i,r);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new dt(e,this.src,s,!!i,r),e.fa=n,t.push(e)),e};var vt="closure_lm_"+(1e6*Math.random()|0),yt={};function _t(t,e,n,i,r){if(i&&i.once)return Ct(t,e,n,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)_t(t,e[s],n,i,r);return null}return n=Ot(n),t&&t[ht]?t.N(e,n,f(i)?!!i.capture:!!i,r):bt(t,e,n,!1,i,r)}function bt(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var o=f(r)?!!r.capture:!!r,a=It(t);if(a||(t[vt]=a=new ft(t)),n=a.add(e,n,i,o,s),n.proxy)return n;if(i=wt(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)ot||(r=o),void 0===r&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(Tt(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return n}function wt(){function t(n){return e.call(t.src,t.listener,n)}var e=kt;return t}function Ct(t,e,n,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Ct(t,e[s],n,i,r);return null}return n=Ot(n),t&&t[ht]?t.O(e,n,f(i)?!!i.capture:!!i,r):bt(t,e,n,!0,i,r)}function St(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)St(t,e[s],n,i,r);else i=f(i)?!!i.capture:!!i,n=Ot(n),t&&t[ht]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=gt(s,n,i,r),-1<n&&(pt(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=It(t))&&(e=t.g[e.toString()],t=-1,e&&(t=gt(e,n,i,r)),(n=-1<t?e[t]:null)&&Et(n))}function Et(t){if("number"!==typeof t&&t&&!t.ca){var e=t.src;if(e&&e[ht])mt(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(Tt(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=It(e))?(mt(n,t),0==n.h&&(n.src=null,e[vt]=null)):pt(t)}}}function Tt(t){return t in yt?yt[t]:yt[t]="on"+t}function kt(t,e){if(t.ca)t=!0;else{e=new lt(e,this);var n=t.listener,i=t.ia||t.src;t.fa&&Et(t),t=n.call(i,e)}return t}function It(t){return t=t[vt],t instanceof ft?t:null}var xt="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ot(t){return"function"===typeof t?t:(t[xt]||(t[xt]=function(e){return t.handleEvent(e)}),t[xt])}function At(){S.call(this),this.i=new ft(this),this.P=this,this.I=null}function Pt(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,"string"===typeof e)e=new at(e,t);else if(e instanceof at)e.target=e.target||t;else{var r=e;e=new at(i,t),V(e,r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=Nt(o,i,!0,e)&&r}if(o=e.g=t,r=Nt(o,i,!0,e)&&r,r=Nt(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)o=e.g=n[s],r=Nt(o,i,!1,e)&&r}function Nt(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&mt(t.i,o),r=!1!==a.call(l,i)&&r}}return r&&!i.defaultPrevented}C(At,S),At.prototype[ht]=!0,At.prototype.removeEventListener=function(t,e,n,i){St(this,t,e,n,i)},At.prototype.M=function(){if(At.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)pt(n[i]);delete e.g[t],e.h--}}this.I=null},At.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},At.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};var Lt=u.JSON.stringify;function Rt(){var t=zt;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class $t{constructor(){this.h=this.g=null}add(t,e){const n=Mt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Dt,Mt=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Ft),(t=>t.reset()));class Ft{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function jt(t){u.setTimeout((()=>{throw t}),0)}function Bt(t,e){Dt||Vt(),Ut||(Dt(),Ut=!0),zt.add(t,e)}function Vt(){var t=u.Promise.resolve(void 0);Dt=function(){t.then(Ht)}}var Ut=!1,zt=new $t;function Ht(){for(var t;t=Rt();){try{t.h.call(t.g)}catch(n){jt(n)}var e=Mt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ut=!1}function qt(t,e){At.call(this),this.h=t||1,this.g=e||u,this.j=b(this.kb,this),this.l=Date.now()}function Wt(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function Zt(t,e,n){if("function"===typeof t)n&&(t=b(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=b(t.handleEvent,t)}return 2147483647<Number(e)?-1:u.setTimeout(t,e||0)}function Kt(t){t.g=Zt((()=>{t.g=null,t.i&&(t.i=!1,Kt(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}C(qt,At),i=qt.prototype,i.da=!1,i.S=null,i.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Pt(this,"tick"),this.da&&(Wt(this),this.start()))}},i.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},i.M=function(){qt.Z.M.call(this),Wt(this),delete this.g};class Gt extends S{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Kt(this)}M(){super.M(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Yt(t){S.call(this),this.h=t,this.g={}}C(Yt,S);var Xt=[];function Jt(t,e,n,i){Array.isArray(n)||(n&&(Xt[0]=n.toString()),n=Xt);for(var r=0;r<n.length;r++){var s=_t(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Qt(t){F(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Et(t)}),t),t.g={}}function te(){this.g=!0}function ee(t,e,n,i,r,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var h=c[0];c=c[1];var u=h.split("_");o=2<=u.length&&"type"==u[1]?o+(h+"=")+c+"&":o+(h+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+"\n"+n+"\n"+o}))}function ne(t,e,n,i,r,s,o){t.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+s+" "+o}))}function ie(t,e,n,i){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+se(t,n)+(i?" "+i:"")}))}function re(t,e){t.info((function(){return"TIMEOUT: "+e}))}function se(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}return Lt(n)}catch(a){return e}}Yt.prototype.M=function(){Yt.Z.M.call(this),Qt(this)},Yt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},te.prototype.Aa=function(){this.g=!1},te.prototype.info=function(){};var oe={},ae=null;function le(){return ae=ae||new At}function ce(t){at.call(this,oe.Ma,t)}function he(t){const e=le();Pt(e,new ce(e,t))}function ue(t,e){at.call(this,oe.STAT_EVENT,t),this.stat=e}function de(t){const e=le();Pt(e,new ue(e,t))}function pe(t,e){at.call(this,oe.Na,t),this.size=e}function fe(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return u.setTimeout((function(){t()}),e)}oe.Ma="serverreachability",C(ce,at),oe.STAT_EVENT="statevent",C(ue,at),oe.Na="timingevent",C(pe,at);var me={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},ge={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ve(){}function ye(t){return t.h||(t.h=t.i())}function _e(){}ve.prototype.h=null;var be,we={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Ce(){at.call(this,"d")}function Se(){at.call(this,"c")}function Ee(){}function Te(t,e,n,i){this.l=t,this.j=e,this.m=n,this.X=i||1,this.V=new Yt(this),this.P=Ie,t=K?125:void 0,this.W=new qt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new ke}function ke(){this.i=null,this.g="",this.h=!1}C(Ce,at),C(Se,at),C(Ee,ve),Ee.prototype.g=function(){return new XMLHttpRequest},Ee.prototype.i=function(){return{}},be=new Ee;var Ie=45e3,xe={},Oe={};function Ae(t,e,n){t.K=1,t.v=en(Ge(e)),t.s=n,t.U=!0,Pe(t,null)}function Pe(t,e){t.F=Date.now(),$e(t),t.A=Ge(t.v);var n=t.A,i=t.X;Array.isArray(i)||(i=[String(i)]),vn(n.h,"t",i),t.C=0,n=t.l.H,t.h=new ke,t.g=Si(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Gt(b(t.Ia,t,t.g),t.O)),Jt(t.V,t.g,"readystatechange",t.gb),e=t.H?j(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),he(1),ee(t.j,t.u,t.A,t.m,t.X,t.s)}function Ne(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function Le(t,e,n){let i,r=!0;for(;!t.I&&t.C<n.length;){if(i=Re(t,n),i==Oe){4==e&&(t.o=4,de(14),r=!1),ie(t.j,t.m,null,"[Incomplete Response]");break}if(i==xe){t.o=4,de(15),ie(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}ie(t.j,t.m,i,null),Be(t,i)}Ne(t)&&i!=Oe&&i!=xe&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,de(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),mi(e),e.L=!0,de(11))):(ie(t.j,t.m,n,"[Invalid Chunked Response]"),je(t),Fe(t))}function Re(t,e){var n=t.C,i=e.indexOf("\n",n);return-1==i?Oe:(n=Number(e.substring(n,i)),isNaN(n)?xe:(i+=1,i+n>e.length?Oe:(e=e.substr(i,n),t.C=i+n,e)))}function $e(t){t.Y=Date.now()+t.P,De(t,t.P)}function De(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=fe(b(t.eb,t),e)}function Me(t){t.B&&(u.clearTimeout(t.B),t.B=null)}function Fe(t){0==t.l.G||t.I||yi(t.l,t)}function je(t){Me(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Wt(t.W),Qt(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Be(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||Tn(n.i,t)))if(n.I=t.N,!t.J&&Tn(n.i,t)&&3==n.G){try{var i=n.Ca.g.parse(e)}catch(c){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;vi(n),si(n)}fi(n),de(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&0==n.A&&!n.v&&(n.v=fe(b(n.ab,n),6e3));if(1>=En(n.i)&&n.ka){try{n.ka()}catch(c){}n.ka=void 0}}else bi(n,11)}else if((t.J||n.g==t)&&vi(n),!P(e))for(r=n.Ca.g.parse(e),e=0;e<r.length;e++){let c=r[e];if(n.U=c[0],c=c[1],2==n.G)if("c"==c[0]){n.J=c[1],n.la=c[2];const e=c[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const r=c[4];null!=r&&(n.za=r,n.h.info("SVER="+n.za));const h=c[5];null!=h&&"number"===typeof h&&0<h&&(i=1.5*h,n.K=i,n.h.info("backChannelRequestTimeoutMs_="+i)),i=n;const u=t.g;if(u){const t=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=i.i;!s.g&&(R(t,"spdy")||R(t,"quic")||R(t,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(kn(s,s.h),s.h=null))}if(i.D){const t=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.sa=t,tn(i.F,i.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),i=n;var o=t;if(i.oa=Ci(i,i.H?i.la:null,i.W),o.J){In(i.i,o);var a=o,l=i.K;l&&a.setTimeout(l),a.B&&(Me(a),$e(a)),i.g=o}else pi(i);0<n.l.length&&li(n)}else"stop"!=c[0]&&"close"!=c[0]||bi(n,7);else 3==n.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?bi(n,7):ri(n):"noop"!=c[0]&&n.j&&n.j.wa(c),n.A=0)}he(4)}catch(c){}}function Ve(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"===typeof t)return t.split("");if(p(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}function Ue(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(p(t)||"string"===typeof t)I(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(p(t)||"string"===typeof t){n=[];for(var i=t.length,r=0;r<i;r++)n.push(r)}else for(r in n=[],i=0,t)n[i++]=r;i=Ve(t),r=i.length;for(var s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}}function ze(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(t)if(t instanceof ze)for(n=t.T(),i=0;i<n.length;i++)this.set(n[i],t.get(n[i]));else for(i in t)this.set(i,t[i])}function He(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var i=t.g[e];qe(t.h,i)&&(t.g[n++]=i),e++}t.g.length=n}if(t.i!=t.g.length){var r={};for(n=e=0;e<t.g.length;)i=t.g[e],qe(r,i)||(t.g[n++]=i,r[i]=1),e++;t.g.length=n}}function qe(t,e){return Object.prototype.hasOwnProperty.call(t,e)}i=Te.prototype,i.setTimeout=function(t){this.P=t},i.gb=function(t){t=t.target;const e=this.L;e&&3==Jn(t)?e.l():this.Ia(t)},i.Ia=function(t){try{if(t==this.g)t:{const h=Jn(this.g);var e=this.g.Da();const d=this.g.ba();if(!(3>h)&&(3!=h||K||this.g&&(this.h.h||this.g.ga()||Qn(this.g)))){this.I||4!=h||7==e||he(8==e||0>=d?3:2),Me(this);var n=this.g.ba();this.N=n;e:if(Ne(this)){var i=Qn(this.g);t="";var r=i.length,s=4==Jn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){je(this),Fe(this);var o="";break e}this.h.i=new u.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,ne(this.j,this.u,this.A,this.m,this.X,h,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!P(a)){var c=a;break e}}c=null}if(!(n=c)){this.i=!1,this.o=3,de(12),je(this),Fe(this);break t}ie(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Be(this,n)}this.U?(Le(this,h,o),K&&this.i&&3==h&&(Jt(this.V,this.W,"tick",this.fb),this.W.start())):(ie(this.j,this.m,o,null),Be(this,o)),4==h&&je(this),this.i&&!this.I&&(4==h?yi(this.l,this):(this.i=!1,$e(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,de(12)):(this.o=0,de(13)),je(this),Fe(this)}}}catch(h){}},i.fb=function(){if(this.g){var t=Jn(this.g),e=this.g.ga();this.C<e.length&&(Me(this),Le(this,t,e),this.i&&4!=t&&$e(this))}},i.cancel=function(){this.I=!0,je(this)},i.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(re(this.j,this.A),2!=this.K&&(he(3),de(17)),je(this),this.o=2,Fe(this)):De(this,this.Y-t)},i=ze.prototype,i.R=function(){He(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},i.T=function(){return He(this),this.g.concat()},i.get=function(t,e){return qe(this.h,t)?this.h[t]:e},i.set=function(t,e){qe(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},i.forEach=function(t,e){for(var n=this.T(),i=0;i<n.length;i++){var r=n[i],s=this.get(r);t.call(e,s,r,this)}};var We=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Ze(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Ke(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Ke){this.g=void 0!==e?e:t.g,Ye(this,t.j),this.s=t.s,Xe(this,t.i),Je(this,t.m),this.l=t.l,e=t.h;var n=new pn;n.i=e.i,e.g&&(n.g=new ze(e.g),n.h=e.h),Qe(this,n),this.o=t.o}else t&&(n=String(t).match(We))?(this.g=!!e,Ye(this,n[1]||"",!0),this.s=sn(n[2]||""),Xe(this,n[3]||"",!0),Je(this,n[4]),this.l=sn(n[5]||"",!0),Qe(this,n[6]||"",!0),this.o=sn(n[7]||"")):(this.g=!!e,this.h=new pn(null,this.g))}function Ge(t){return new Ke(t)}function Ye(t,e,n){t.j=n?sn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Xe(t,e,n){t.i=n?sn(e,!0):e}function Je(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Qe(t,e,n){e instanceof pn?(t.h=e,_n(t.h,t.g)):(n||(e=on(e,un)),t.h=new pn(e,t.g))}function tn(t,e,n){t.h.set(e,n)}function en(t){return tn(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function nn(t){return t instanceof Ke?Ge(t):new Ke(t,void 0)}function rn(t,e,n,i){var r=new Ke(null,void 0);return t&&Ye(r,t),e&&Xe(r,e),n&&Je(r,n),i&&(r.l=i),r}function sn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function on(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,an),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function an(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Ke.prototype.toString=function(){var t=[],e=this.j;e&&t.push(on(e,ln,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(on(e,ln,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(on(n,"/"==n.charAt(0)?hn:cn,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",on(n,dn)),t.join("")};var ln=/[#\/\?@]/g,cn=/[#\?:]/g,hn=/[#\?]/g,un=/[#\?@]/g,dn=/#/g;function pn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function fn(t){t.g||(t.g=new ze,t.h=0,t.i&&Ze(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function mn(t,e){fn(t),e=yn(t,e),qe(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,qe(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&He(t)))}function gn(t,e){return fn(t),e=yn(t,e),qe(t.g.h,e)}function vn(t,e,n){mn(t,e),0<n.length&&(t.i=null,t.g.set(yn(t,e),A(n)),t.h+=n.length)}function yn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function _n(t,e){e&&!t.j&&(fn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(mn(this,e),vn(this,n,t))}),t)),t.j=e}i=pn.prototype,i.add=function(t,e){fn(this),this.i=null,t=yn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},i.forEach=function(t,e){fn(this),this.g.forEach((function(n,i){I(n,(function(n){t.call(e,n,i,this)}),this)}),this)},i.T=function(){fn(this);for(var t=this.g.R(),e=this.g.T(),n=[],i=0;i<e.length;i++)for(var r=t[i],s=0;s<r.length;s++)n.push(e[i]);return n},i.R=function(t){fn(this);var e=[];if("string"===typeof t)gn(this,t)&&(e=O(e,this.g.get(yn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=O(e,t[n])}return e},i.set=function(t,e){return fn(this),this.i=null,t=yn(this,t),gn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},i.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e},i.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var i=e[n],r=encodeURIComponent(String(i));i=this.R(i);for(var s=0;s<i.length;s++){var o=r;""!==i[s]&&(o+="="+encodeURIComponent(String(i[s]))),t.push(o)}}return this.i=t.join("&")};var bn=class{constructor(t,e){this.h=t,this.g=e}};function wn(t){this.l=t||Cn,u.PerformanceNavigationTiming?(t=u.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(u.g&&u.g.Ea&&u.g.Ea()&&u.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Cn=10;function Sn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function En(t){return t.h?1:t.g?t.g.size:0}function Tn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function kn(t,e){t.g?t.g.add(e):t.h=e}function In(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function xn(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return A(t.i)}function On(){}function An(){this.g=new On}function Pn(t,e,n){const i=n||"";try{Ue(t,(function(t,n){let r=t;f(t)&&(r=Lt(t)),e.push(i+n+"="+encodeURIComponent(r))}))}catch(r){throw e.push(i+"type="+encodeURIComponent("_badmap")),r}}function Nn(t,e){const n=new te;if(u.Image){const i=new Image;i.onload=w(Ln,n,i,"TestLoadImage: loaded",!0,e),i.onerror=w(Ln,n,i,"TestLoadImage: error",!1,e),i.onabort=w(Ln,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=w(Ln,n,i,"TestLoadImage: timeout",!1,e),u.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=t}else e(!1)}function Ln(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch(s){}}function Rn(t){this.l=t.$b||null,this.j=t.ib||!1}function $n(t,e){At.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Dn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}wn.prototype.cancel=function(){if(this.i=xn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},On.prototype.stringify=function(t){return u.JSON.stringify(t,void 0)},On.prototype.parse=function(t){return u.JSON.parse(t,void 0)},C(Rn,ve),Rn.prototype.g=function(){return new $n(this.l,this.j)},Rn.prototype.i=function(t){return function(){return t}}({}),C($n,At);var Dn=0;function Mn(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Fn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,jn(t)}function jn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}i=$n.prototype,i.open=function(t,e){if(this.readyState!=Dn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,jn(this)},i.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||u).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},i.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Fn(this)),this.readyState=Dn},i.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,jn(this)),this.g&&(this.readyState=3,jn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof u.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Mn(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},i.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Fn(this):jn(this),3==this.readyState&&Mn(this)}},i.Ua=function(t){this.g&&(this.response=this.responseText=t,Fn(this))},i.Ta=function(t){this.g&&(this.response=t,Fn(this))},i.ha=function(){this.g&&Fn(this)},i.setRequestHeader=function(t,e){this.v.append(t,e)},i.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty($n.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Bn=u.JSON.parse;function Vn(t){At.call(this),this.headers=new ze,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Un,this.K=this.L=!1}C(Vn,At);var Un="",zn=/^https?$/i,Hn=["POST","PUT"];function qn(t){return W&&it()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Wn(t){return"content-type"==t.toLowerCase()}function Zn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Kn(t),Yn(t)}function Kn(t){t.D||(t.D=!0,Pt(t,"complete"),Pt(t,"error"))}function Gn(t){if(t.h&&"undefined"!=typeof h&&(!t.C[1]||4!=Jn(t)||2!=t.ba()))if(t.v&&4==Jn(t))Zt(t.Fa,0,t);else if(Pt(t,"readystatechange"),4==Jn(t)){t.h=!1;try{const l=t.ba();t:switch(l){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=0===l){var r=String(t.H).match(We)[1]||null;if(!r&&u.self&&u.self.location){var s=u.self.location.protocol;r=s.substr(0,s.length-1)}i=!zn.test(r?r.toLowerCase():"")}n=i}if(n)Pt(t,"complete"),Pt(t,"success");else{t.m=6;try{var o=2<Jn(t)?t.g.statusText:""}catch(a){o=""}t.j=o+" ["+t.ba()+"]",Kn(t)}}finally{Yn(t)}}}function Yn(t,e){if(t.g){Xn(t);const i=t.g,r=t.C[0]?d:null;t.g=null,t.C=null,e||Pt(t,"ready");try{i.onreadystatechange=r}catch(n){}}}function Xn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(u.clearTimeout(t.A),t.A=null)}function Jn(t){return t.g?t.g.readyState:0}function Qn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Un:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function ti(t){let e="";return F(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function ei(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=ti(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):tn(t,e,n))}function ni(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function ii(t){this.za=0,this.l=[],this.h=new te,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=ni("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=ni("baseRetryDelayMs",5e3,t),this.$a=ni("retryDelaySeedMs",1e4,t),this.Ya=ni("forwardChannelMaxRetries",2,t),this.ra=ni("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new wn(t&&t.concurrentRequestLimit),this.Ca=new An,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function ri(t){if(oi(t),3==t.G){var e=t.V++,n=Ge(t.F);tn(n,"SID",t.J),tn(n,"RID",e),tn(n,"TYPE","terminate"),ui(t,n),e=new Te(t,t.h,e,void 0),e.K=2,e.v=en(Ge(n)),n=!1,u.navigator&&u.navigator.sendBeacon&&(n=u.navigator.sendBeacon(e.v.toString(),"")),!n&&u.Image&&((new Image).src=e.v,n=!0),n||(e.g=Si(e.l,null),e.g.ea(e.v)),e.F=Date.now(),$e(e)}wi(t)}function si(t){t.g&&(mi(t),t.g.cancel(),t.g=null)}function oi(t){si(t),t.u&&(u.clearTimeout(t.u),t.u=null),vi(t),t.i.cancel(),t.m&&("number"===typeof t.m&&u.clearTimeout(t.m),t.m=null)}function ai(t,e){t.l.push(new bn(t.Za++,e)),3==t.G&&li(t)}function li(t){Sn(t.i)||t.m||(t.m=!0,Bt(t.Ha,t),t.C=0)}function ci(t,e){return!(En(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=fe(b(t.Ha,t,e),_i(t,t.C)),t.C++,!0))}function hi(t,e){var n;n=e?e.m:t.V++;const i=Ge(t.F);tn(i,"SID",t.J),tn(i,"RID",n),tn(i,"AID",t.U),ui(t,i),t.o&&t.s&&ei(i,t.o,t.s),n=new Te(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=di(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),kn(t.i,n),Ae(n,i,e)}function ui(t,e){t.j&&Ue({},(function(t,n){tn(e,n,t)}))}function di(t,e,n){n=Math.min(t.l.length,n);var i=t.j?b(t.j.Oa,t.j,t):null;t:{var r=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=r[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let o=0;o<n;o++){let n=r[o].h;const a=r[o].g;if(n-=e,0>n)e=Math.max(0,r[o].h-100),s=!1;else try{Pn(a,t,"req"+n+"_")}catch(ji){i&&i(a)}}if(s){i=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,i}function pi(t){t.g||t.u||(t.Y=1,Bt(t.Ga,t),t.A=0)}function fi(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=fe(b(t.Ga,t),_i(t,t.A)),t.A++,!0)}function mi(t){null!=t.B&&(u.clearTimeout(t.B),t.B=null)}function gi(t){t.g=new Te(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=Ge(t.oa);tn(e,"RID","rpc"),tn(e,"SID",t.J),tn(e,"CI",t.N?"0":"1"),tn(e,"AID",t.U),ui(t,e),tn(e,"TYPE","xmlhttp"),t.o&&t.s&&ei(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=en(Ge(e)),n.s=null,n.U=!0,Pe(n,t)}function vi(t){null!=t.v&&(u.clearTimeout(t.v),t.v=null)}function yi(t,e){var n=null;if(t.g==e){vi(t),mi(t),t.g=null;var i=2}else{if(!Tn(t.i,e))return;n=e.D,In(t.i,e),i=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==i){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;i=le(),Pt(i,new pe(i,n,e,r)),li(t)}else pi(t);else if(r=e.o,3==r||0==r&&0<t.I||!(1==i&&ci(t,e)||2==i&&fi(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:bi(t,5);break;case 4:bi(t,10);break;case 3:bi(t,6);break;default:bi(t,2)}}function _i(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function bi(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var i=b(t.jb,t);n||(n=new Ke("//www.google.com/images/cleardot.gif"),u.location&&"http"==u.location.protocol||Ye(n,"https"),en(n)),Nn(n.toString(),i)}else de(2);t.G=0,t.j&&t.j.va(e),wi(t),oi(t)}function wi(t){t.G=0,t.I=-1,t.j&&(0==xn(t.i).length&&0==t.l.length||(t.i.i.length=0,A(t.l),t.l.length=0),t.j.ua())}function Ci(t,e,n){let i=nn(n);if(""!=i.i)e&&Xe(i,e+"."+i.i),Je(i,i.m);else{const t=u.location;i=rn(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&F(t.aa,(function(t,e){tn(i,e,t)})),e=t.D,n=t.sa,e&&n&&tn(i,e,n),tn(i,"VER",t.ma),ui(t,i),i}function Si(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Vn(new Rn({ib:!0})):new Vn(t.qa),e.L=t.H,e}function Ei(){}function Ti(){if(W&&!(10<=Number(st)))throw Error("Environmental error: no available transport.")}function ki(t,e){At.call(this),this.g=new ii(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!P(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!P(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Oi(this)}function Ii(t){Ce.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function xi(){Se.call(this),this.status=1}function Oi(t){this.g=t}i=Vn.prototype,i.ea=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():be.g(),this.C=this.u?ye(this.u):ye(be),this.g.onreadystatechange=b(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){return void Zn(this,s)}t=n||"";const r=new ze(this.headers);i&&Ue(i,(function(t,e){r.set(e,t)})),i=x(r.T()),n=u.FormData&&t instanceof u.FormData,!(0<=k(Hn,e))||i||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Xn(this),0<this.B&&((this.K=qn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=b(this.pa,this)):this.A=Zt(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Zn(this,s)}},i.pa=function(){"undefined"!=typeof h&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Pt(this,"timeout"),this.abort(8))},i.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Pt(this,"complete"),Pt(this,"abort"),Yn(this))},i.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Yn(this,!0)),Vn.Z.M.call(this)},i.Fa=function(){this.s||(this.F||this.v||this.l?Gn(this):this.cb())},i.cb=function(){Gn(this)},i.ba=function(){try{return 2<Jn(this)?this.g.status:-1}catch(t){return-1}},i.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},i.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Bn(e)}},i.Da=function(){return this.m},i.La=function(){return"string"===typeof this.j?this.j:String(this.j)},i=ii.prototype,i.ma=8,i.G=1,i.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},i.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new Te(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=j(s),V(s,this.P)):s=this.P),null===this.o&&(r.H=s),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var i=this.l[n];if(i="__data__"in i.g&&(i=i.g.__data__,"string"===typeof i)?i.length:void 0,void 0===i)break;if(e+=i,4096<e){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=di(this,r,e),n=Ge(this.F),tn(n,"RID",t),tn(n,"CVER",22),this.D&&tn(n,"X-HTTP-Session-Id",this.D),ui(this,n),this.o&&s&&ei(n,this.o,s),kn(this.i,r),this.Ra&&tn(n,"TYPE","init"),this.ja?(tn(n,"$req",e),tn(n,"SID","null"),r.$=!0,Ae(r,n,null)):Ae(r,n,e),this.G=2}}else 3==this.G&&(t?hi(this,t):0==this.l.length||Sn(this.i)||hi(this))},i.Ga=function(){if(this.u=null,gi(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=fe(b(this.bb,this),t)}},i.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,de(10),si(this),gi(this))},i.ab=function(){null!=this.v&&(this.v=null,si(this),fi(this),de(19))},i.jb=function(t){t?(this.h.info("Successfully pinged google.com"),de(2)):(this.h.info("Failed to ping google.com"),de(1))},i=Ei.prototype,i.xa=function(){},i.wa=function(){},i.va=function(){},i.ua=function(){},i.Oa=function(){},Ti.prototype.g=function(t,e){return new ki(t,e)},C(ki,At),ki.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Bt(b(t.hb,t,e))),de(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Ci(t,null,t.W),li(t)},ki.prototype.close=function(){ri(this.g)},ki.prototype.u=function(t){if("string"===typeof t){var e={};e.__data__=t,ai(this.g,e)}else this.v?(e={},e.__data__=Lt(t),ai(this.g,e)):ai(this.g,t)},ki.prototype.M=function(){this.g.j=null,delete this.j,ri(this.g),delete this.g,ki.Z.M.call(this)},C(Ii,Ce),C(xi,Se),C(Oi,Ei),Oi.prototype.xa=function(){Pt(this.g,"a")},Oi.prototype.wa=function(t){Pt(this.g,new Ii(t))},Oi.prototype.va=function(t){Pt(this.g,new xi(t))},Oi.prototype.ua=function(){Pt(this.g,"b")},Ti.prototype.createWebChannel=Ti.prototype.g,ki.prototype.send=ki.prototype.u,ki.prototype.open=ki.prototype.m,ki.prototype.close=ki.prototype.close,me.NO_ERROR=0,me.TIMEOUT=8,me.HTTP_ERROR=6,ge.COMPLETE="complete",_e.EventType=we,we.OPEN="a",we.CLOSE="b",we.ERROR="c",we.MESSAGE="d",At.prototype.listen=At.prototype.N,Vn.prototype.listenOnce=Vn.prototype.O,Vn.prototype.getLastError=Vn.prototype.La,Vn.prototype.getLastErrorCode=Vn.prototype.Da,Vn.prototype.getStatus=Vn.prototype.ba,Vn.prototype.getResponseJson=Vn.prototype.Qa,Vn.prototype.getResponseText=Vn.prototype.ga,Vn.prototype.send=Vn.prototype.ea;c.createWebChannelTransport=function(){return new Ti},c.getStatEventTarget=function(){return le()},c.ErrorCode=me,c.EventType=ge,c.Event=oe,c.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},c.FetchXmlHttpFactory=Rn,c.WebChannel=_e,c.XhrIo=Vn;const Ai="@firebase/firestore";
/**
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
 */class Pi{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Pi.UNAUTHENTICATED=new Pi(null),Pi.GOOGLE_CREDENTIALS=new Pi("google-credentials-uid"),Pi.FIRST_PARTY=new Pi("first-party-uid"),Pi.MOCK_USER=new Pi("mock-user");
/**
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
 */
let Ni="9.9.0";
/**
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
 */const Li=new o.Yd("@firebase/firestore");function Ri(t,...e){if(Li.logLevel<=o["in"].DEBUG){const n=e.map(Di);Li.debug(`Firestore (${Ni}): ${t}`,...n)}}function $i(t,...e){if(Li.logLevel<=o["in"].ERROR){const n=e.map(Di);Li.error(`Firestore (${Ni}): ${t}`,...n)}}function Di(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
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
 */var e}
/**
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
 */function Mi(t="Unexpected state"){const e=`FIRESTORE (${Ni}) INTERNAL ASSERTION FAILED: `+t;throw $i(e),new Error(e)}function Fi(t,e){t||Mi()}
/**
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
 */
const ji={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Bi extends a.ZR{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
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
 */class Vi{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
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
 */class Ui{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class zi{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Pi.UNAUTHENTICATED)))}shutdown(){}}class Hi{constructor(t){this.t=t,this.currentUser=Pi.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let r=new Vi;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Vi,t.enqueueRetryable((()=>i(this.currentUser)))};const s=()=>{const e=r;t.enqueueRetryable((async()=>{await e.promise,await i(this.currentUser)}))},o=t=>{Ri("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Ri("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Vi)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Ri("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Fi("string"==typeof e.accessToken),new Ui(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Fi(null===t||"string"==typeof t),new Pi(t)}}class qi{constructor(t,e,n){this.type="FirstParty",this.user=Pi.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const i=t.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class Wi{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new qi(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(Pi.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Zi{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ki{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,e){const n=t=>{null!=t.error&&Ri("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.p;return this.p=t.token,Ri("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const i=t=>{Ri("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit((t=>i(t))),setTimeout((()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?i(t):Ri("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Fi("string"==typeof t.token),this.p=t.token,new Zi(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
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
 */
function Gi(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}
/**
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
 */class Yi{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=Gi(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<e&&(n+=t.charAt(i[r]%t.length))}return n}}function Xi(t,e){return t<e?-1:t>e?1:0}
/**
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
 */
class Ji{constructor(t,e,n){void 0===e?e=0:e>t.length&&Mi(),void 0===n?n=t.length-e:n>t.length-e&&Mi(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Ji.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ji?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=t.get(i),r=e.get(i);if(n<r)return-1;if(n>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Qi extends Ji{construct(t,e,n){return new Qi(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Bi(ji.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new Qi(e)}static emptyPath(){return new Qi([])}}
/**
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
 */
class tr{constructor(t){this.path=t}static fromPath(t){return new tr(Qi.fromString(t))}static fromName(t){return new tr(Qi.fromString(t).popFirst(5))}static empty(){return new tr(Qi.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===Qi.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Qi.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new tr(new Qi(t.slice()))}}
/**
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
 */class er{constructor(t,e,n,i){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=i}}er.UNKNOWN_ID=-1;function nr(t){return"IndexedDbTransactionError"===t.name}
/**
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
 */
class ir{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.it(t),this.rt=t=>e.writeSequenceNumber(t))}it(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.rt&&this.rt(t),t}}
/**
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
 */
/**
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
 */
ir.ot=-1;class rr{constructor(t,e){this.comparator=t,this.root=e||or.EMPTY}insert(t,e){return new rr(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,or.BLACK,null,null))}remove(t){return new rr(this.comparator,this.root.remove(t,this.comparator).copy(null,null,or.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new sr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new sr(this.root,t,this.comparator,!1)}getReverseIterator(){return new sr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new sr(this.root,t,this.comparator,!0)}}class sr{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,e&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class or{constructor(t,e,n,i,r){this.key=t,this.value=e,this.color=null!=n?n:or.RED,this.left=null!=i?i:or.EMPTY,this.right=null!=r?r:or.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,r){return new or(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const r=n(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===r?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return or.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return or.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,or.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,or.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Mi();if(this.right.isRed())throw Mi();const t=this.left.check();if(t!==this.right.check())throw Mi();return t+(this.isRed()?0:1)}}or.EMPTY=null,or.RED=!0,or.BLACK=!1,or.EMPTY=new class{constructor(){this.size=0}get key(){throw Mi()}get value(){throw Mi()}get color(){throw Mi()}get left(){throw Mi()}get right(){throw Mi()}copy(t,e,n,i,r){return this}insert(t,e,n){return new or(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
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
 */
class ar{constructor(t){this.comparator=t,this.data=new rr(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new lr(this.data.getIterator())}getIteratorFrom(t){return new lr(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof ar))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new ar(this.comparator);return e.data=t,e}}class lr{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
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
 */
class cr{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new cr(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new cr(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Xi(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}cr.EMPTY_BYTE_STRING=new cr("");function hr(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function ur(t){return"string"==typeof t?cr.fromBase64String(t):cr.fromUint8Array(t)}
/**
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
 */
/**
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
 */
class dr{constructor(t,e,n,i,r,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class pr{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new pr("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof pr&&t.projectId===this.projectId&&t.database===this.database}}
/**
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
 */function fr(t){return 0===t&&1/t==-1/0}function mr(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
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
 */
var gr,vr;(vr=gr||(gr={}))[vr.OK=0]="OK",vr[vr.CANCELLED=1]="CANCELLED",vr[vr.UNKNOWN=2]="UNKNOWN",vr[vr.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",vr[vr.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",vr[vr.NOT_FOUND=5]="NOT_FOUND",vr[vr.ALREADY_EXISTS=6]="ALREADY_EXISTS",vr[vr.PERMISSION_DENIED=7]="PERMISSION_DENIED",vr[vr.UNAUTHENTICATED=16]="UNAUTHENTICATED",vr[vr.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",vr[vr.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",vr[vr.ABORTED=10]="ABORTED",vr[vr.OUT_OF_RANGE=11]="OUT_OF_RANGE",vr[vr.UNIMPLEMENTED=12]="UNIMPLEMENTED",vr[vr.INTERNAL=13]="INTERNAL",vr[vr.UNAVAILABLE=14]="UNAVAILABLE",vr[vr.DATA_LOSS=15]="DATA_LOSS";
/**
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
 */
new rr(tr.comparator);new rr(tr.comparator);new rr(tr.comparator),new ar(tr.comparator);new ar(Xi);
/**
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
 */
(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"}})(),(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}})();const yr=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],_r=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],br=_r;
/**
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
 */
/**
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
 */
class wr{constructor(){}re(t,e){this.oe(t,e),e.ue()}oe(t,e){if("nullValue"in t)this.ce(e,5);else if("booleanValue"in t)this.ce(e,10),e.ae(t.booleanValue?1:0);else if("integerValue"in t)this.ce(e,15),e.ae(hr(t.integerValue));else if("doubleValue"in t){const n=hr(t.doubleValue);isNaN(n)?this.ce(e,13):(this.ce(e,15),fr(n)?e.ae(0):e.ae(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ce(e,20),"string"==typeof n?e.he(n):(e.he(`${n.seconds||""}`),e.ae(n.nanos||0))}else if("stringValue"in t)this.le(t.stringValue,e),this.fe(e);else if("bytesValue"in t)this.ce(e,30),e.de(ur(t.bytesValue)),this.fe(e);else if("referenceValue"in t)this._e(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ce(e,45),e.ae(n.latitude||0),e.ae(n.longitude||0)}else"mapValue"in t?mr(t)?this.ce(e,Number.MAX_SAFE_INTEGER):(this.we(t.mapValue,e),this.fe(e)):"arrayValue"in t?(this.me(t.arrayValue,e),this.fe(e)):Mi()}le(t,e){this.ce(e,25),this.ge(t,e)}ge(t,e){e.he(t)}we(t,e){const n=t.fields||{};this.ce(e,55);for(const i of Object.keys(n))this.le(i,e),this.oe(n[i],e)}me(t,e){const n=t.values||[];this.ce(e,50);for(const i of n)this.oe(i,e)}_e(t,e){this.ce(e,37),tr.fromName(t).path.forEach((t=>{this.ce(e,60),this.ge(t,e)}))}ce(t,e){t.ae(e)}fe(t){t.ae(2)}}wr.ye=new wr;
/**
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
 */
new Uint8Array(0);class Cr{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Cr(t,Cr.DEFAULT_COLLECTION_PERCENTILE,Cr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
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
 */
/**
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
 */Cr.DEFAULT_COLLECTION_PERCENTILE=10,Cr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Cr.DEFAULT=new Cr(41943040,Cr.DEFAULT_COLLECTION_PERCENTILE,Cr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Cr.DISABLED=new Cr(-1,0,0);function Sr(){return"undefined"!=typeof document?document:null}
/**
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
 */class Er{constructor(t,e,n=1e3,i=1.5,r=6e4){this.js=t,this.timerId=e,this.lo=n,this.fo=i,this._o=r,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(t){this.cancel();const e=Math.floor(this.wo+this.To()),n=Math.max(0,Date.now()-this.yo),i=Math.max(0,e-n);i>0&&Ri("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.wo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,i,(()=>(this.yo=Date.now(),t()))),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){null!==this.mo&&(this.mo.skipDelay(),this.mo=null)}cancel(){null!==this.mo&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}
/**
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
 */
/**
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
 */
class Tr{constructor(t,e,n,i,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new Vi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,i,r){const s=Date.now()+n,o=new Tr(t,e,s,i,r);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Bi(ji.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function kr(t,e){if($i("AsyncQueue",`${e}: ${t}`),nr(t))return new Bi(ji.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
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
 */
/**
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
 */
class Ir{constructor(t,e,n,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=Pi.UNAUTHENTICATED,this.clientId=Yi.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Ri("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Ri("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Bi(ji.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Vi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=kr(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}const xr=new Map;
/**
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
 */function Or(t,e,n,i){if(!0===e&&!0===i)throw new Bi(ji.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}
/**
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
 */
class Ar{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new Bi(ji.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Bi(ji.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Or("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
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
 */class Pr{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ar({}),this._settingsFrozen=!1,t instanceof pr?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Bi(ji.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new pr(t.options.projectId)}(t))}get app(){if(!this._app)throw new Bi(ji.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Bi(ji.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ar(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new zi;switch(t.type){case"gapi":const e=t.client;return Fi(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new Wi(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new Bi(ji.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=xr.get(t);e&&(Ri("ComponentProvider","Removing Datastore"),xr.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
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
 */
class Nr{constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new Er(this,"async_queue_retry"),this.Kc=()=>{const t=Sr();t&&Ri("AsyncQueue","Visibility state changed to "+t.visibilityState),this.So.Eo()};const t=Sr();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Gc(),this.Qc(t)}enterRestrictedMode(t){if(!this.Fc){this.Fc=!0,this.Uc=t||!1;const e=Sr();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Kc)}}enqueue(t){if(this.Gc(),this.Fc)return new Promise((()=>{}));const e=new Vi;return this.Qc((()=>this.Fc&&this.Uc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Mc.push(t),this.jc())))}async jc(){if(0!==this.Mc.length){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(C){if(!nr(C))throw C;Ri("AsyncQueue","Operation failed with retryable error: "+C)}this.Mc.length>0&&this.So.Io((()=>this.jc()))}}Qc(t){const e=this.Oc.then((()=>(this.Lc=!0,t().catch((t=>{this.Bc=t,this.Lc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
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
 */(t);throw $i("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Lc=!1,t))))));return this.Oc=e,e}enqueueAfterDelay(t,e,n){this.Gc(),this.qc.indexOf(t)>-1&&(e=0);const i=Tr.createAndSchedule(this,t,e,n,(t=>this.Wc(t)));return this.$c.push(i),i}Gc(){this.Bc&&Mi()}verifyOperationInProgress(){}async zc(){let t;do{t=this.Oc,await t}while(t!==this.Oc)}Hc(t){for(const e of this.$c)if(e.timerId===t)return!0;return!1}Jc(t){return this.zc().then((()=>{this.$c.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.$c)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.zc()}))}Yc(t){this.qc.push(t)}Wc(t){const e=this.$c.indexOf(t);this.$c.splice(e,1)}}class Lr extends Pr{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new Nr,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||$r(this),this._firestoreClient.terminate()}}function Rr(t=(0,r.Mq)()){return(0,r.qX)(t,"firestore").getImmediate()}function $r(t){var e;const n=t._freezeSettings(),i=function(t,e,n,i){return new dr(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Ir(t._authCredentials,t._appCheckCredentials,t._queue,i)}!function(t,e=!0){!function(t){Ni=t}(r.Jn),(0,r.Xd)(new s.wA("firestore",((t,{options:n})=>{const i=t.getProvider("app").getImmediate(),r=new Lr(i,new Hi(t.getProvider("auth-internal")),new Ki(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),r._setSettings(n),r}),"PUBLIC")),(0,r.KN)(Ai,"3.4.12",t),(0,r.KN)(Ai,"3.4.12","esm2017")}()},1884:function(){},9027:function(){},998:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});n(1703);var i=n(6669),r=n(7678),s=(0,r.Z)(i.Z).extend({name:"v-app",props:{dark:{type:Boolean,default:void 0},id:{type:String,default:"app"},light:{type:Boolean,default:void 0}},computed:{isDark(){return this.$vuetify.theme.dark}},beforeCreate(){if(!this.$vuetify||this.$vuetify===this.$root)throw new Error("Vuetify is not properly initialized, see https://vuetifyjs.com/getting-started/quick-start#bootstrapping-the-vuetify-object")},render(t){const e=t("div",{staticClass:"v-application--wrap"},this.$slots.default);return t("div",{staticClass:"v-application",class:{"v-application--is-rtl":this.$vuetify.rtl,"v-application--is-ltr":!this.$vuetify.rtl,...this.themeClasses},attrs:{"data-app":!0},domProps:{id:this.id}},[e])}})},704:function(t,e,n){"use strict";n.d(e,{Z:function(){return b}});var i=n(7423),r=n(5495),s=n(5352),o=n(4101),a=i.Z.extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"}},data:()=>({isExtended:!1}),computed:{computedHeight(){const t=this.computedContentHeight;if(!this.isExtended)return t;const e=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(e)?0:e)},computedContentHeight(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes(){return{...i.Z.options.computed.classes.call(this),"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent}},isCollapsed(){return this.collapse},isProminent(){return this.prominent},styles(){return{...this.measurableStyles,height:(0,s.kb)(this.computedHeight)}}},created(){const t=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];t.forEach((([t,e])=>{this.$attrs.hasOwnProperty(t)&&(0,o.fK)(t,e,this)}))},methods:{genBackground(){const t={height:(0,s.kb)(this.computedHeight),src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(r.Z,{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[e])},genContent(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:(0,s.kb)(this.computedContentHeight)}},(0,s.z9)(this))},genExtension(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:(0,s.kb)(this.extensionHeight)}},(0,s.z9)(this,"extension"))}},render(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;const e=[this.genContent()],n=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&e.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&e.unshift(this.genBackground()),t(this.tag,n,e)}});function l(t,e,n){const{self:i=!1}=e.modifiers||{},r=e.value,s="object"===typeof r&&r.options||{passive:!0},o="function"===typeof r||"handleEvent"in r?r:r.handler,a=i?t:e.arg?document.querySelector(e.arg):window;a&&(a.addEventListener("scroll",o,s),t._onScroll=Object(t._onScroll),t._onScroll[n.context._uid]={handler:o,options:s,target:i?void 0:a})}function c(t,e,n){var i;if(null==(i=t._onScroll)||!i[n.context._uid])return;const{handler:r,options:s,target:o=t}=t._onScroll[n.context._uid];o.removeEventListener("scroll",r,s),delete t._onScroll[n.context._uid]}const h={inserted:l,unbind:c};var u=h,d=n(4263),p=n(7678);function f(t,e=[]){return(0,p.Z)((0,d.d)(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty(){return t}},watch:{app(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated(){this.callUpdate()},created(){for(let t=0,n=e.length;t<n;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted(){this.callUpdate()},deactivated(){this.removeApplication()},destroyed(){this.removeApplication()},methods:{callUpdate(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication(t=!1){(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:()=>0}})}var m=n(144),g=m.ZP.extend({name:"scrollable",directives:{Scroll:h},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:()=>({currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}),computed:{canScroll(){return"undefined"!==typeof window},computedScrollThreshold(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp(){this.savedScroll=this.savedScroll||this.currentScroll},isActive(){this.savedScroll=0}},mounted(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||(0,o.Kd)(`Unable to locate element with identifier ${this.scrollTarget}`,this))},methods:{onScroll(){this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick((()=>{Math.abs(this.currentScroll-this.savedScroll)>this.computedScrollThreshold&&this.thresholdMet()})))},thresholdMet(){}}}),v=n(9131),y=n(1444);const _=(0,p.Z)(a,g,v.Z,y.Z,f("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"]));var b=_.extend({name:"v-app-bar",directives:{Scroll:u},provide(){return{VAppBar:this}},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data(){return{isActive:this.value}},computed:{applicationProperty(){return this.bottom?"bottom":"top"},canScroll(){return g.options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes(){return{...a.options.computed.classes.call(this),"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll}},scrollRatio(){const t=this.computedScrollThreshold;return Math.max((t-this.currentScroll)/t,0)},computedContentHeight(){if(!this.shrinkOnScroll)return a.options.computed.computedContentHeight.call(this);const t=this.dense?48:56,e=this.computedOriginalHeight;return t+(e-t)*this.scrollRatio},computedFontSize(){if(!this.isProminent)return;const t=1.25,e=1.5;return t+(e-t)*this.scrollRatio},computedLeft(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop(){return this.app?this.$vuetify.application.bar:0},computedOpacity(){if(this.fadeImgOnScroll)return this.scrollRatio},computedOriginalHeight(){let t=a.options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;const t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed(){return this.collapseOnScroll?this.currentScroll>0:a.options.computed.isCollapsed.call(this)},isProminent(){return a.options.computed.isProminent.call(this)||this.shrinkOnScroll},styles(){return{...a.options.computed.styles.call(this),fontSize:(0,s.kb)(this.computedFontSize,"rem"),marginTop:(0,s.kb)(this.computedMarginTop),transform:`translateY(${(0,s.kb)(this.computedTransform)})`,left:(0,s.kb)(this.computedLeft),right:(0,s.kb)(this.computedRight)}}},watch:{canScroll:"onScroll",computedTransform(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll(t){this.isActive=!t||0!==this.currentScroll},hideOnScroll(t){this.isActive=!t||this.currentScroll<this.computedScrollThreshold}},created(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground(){const t=a.options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:(this.hideOnScroll&&(this.isActive=this.isScrollingUp||this.currentScroll<this.computedScrollThreshold),this.currentThreshold<this.computedScrollThreshold||(this.savedScroll=this.currentScroll))}},render(t){const e=a.options.render.call(this,t);return e.data=e.data||{},this.canScroll&&(e.data.directives=e.data.directives||[],e.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),e}})},5550:function(t,e,n){"use strict";var i=n(2240),r=n(6570),s=n(144);e["Z"]=s.ZP.extend({name:"v-app-bar-nav-icon",functional:!0,render(t,{slots:e,listeners:n,props:s,data:o}){const a=Object.assign(o,{staticClass:`v-app-bar__nav-icon ${o.staticClass||""}`.trim(),props:{...s,icon:!0},on:n}),l=e().default;return t(r.Z,a,l||[t(i.Z,"$menu")])}})},3423:function(t,e,n){"use strict";n.d(e,{Z:function(){return l}});var i=n(6878),r=n(8846),s=n(2637),o=n(5352),a=n(7678),l=(0,a.Z)(i.Z,r.Z,s.Z).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48}},computed:{classes(){return{"v-avatar--left":this.left,"v-avatar--right":this.right,...this.roundedClasses}},styles(){return{height:(0,o.kb)(this.size),minWidth:(0,o.kb)(this.size),width:(0,o.kb)(this.size),...this.measurableStyles}}},render(t){const e={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,e),this.$slots.default)}})},6570:function(t,e,n){"use strict";n.d(e,{Z:function(){return _}});n(6699);var i=n(7423),r=i.Z,s=n(6750),o=n(6878),a=n(5352),l=o.Z.extend({name:"v-progress-circular",directives:{intersect:s.Z},props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:()=>({radius:20,isVisible:!0}),computed:{calculatedSize(){return Number(this.size)+(this.button?8:0)},circumference(){return 2*Math.PI*this.radius},classes(){return{"v-progress-circular--visible":this.isVisible,"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles(){return{height:(0,a.kb)(this.calculatedSize),width:(0,a.kb)(this.calculatedSize)}},svgStyles(){return{transform:`rotate(${Number(this.rotate)}deg)`}},viewBoxSize(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle(t,e){return this.$createElement("circle",{class:`v-progress-circular__${t}`,attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg(){const t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:`${this.viewBoxSize} ${this.viewBoxSize} ${2*this.viewBoxSize} ${2*this.viewBoxSize}`}},t)},genInfo(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)},onObserve(t,e,n){this.isVisible=n}},render(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}}),c=l,h=n(3037),u=n(1444),d=n(4390),p=n(4263),f=n(8860),m=n(4338),g=n(7678),v=n(4101);const y=(0,g.Z)(r,f.Z,p.Z,m.Z,(0,h.d)("btnToggle"),(0,u.d)("inputValue"));var _=y.extend().extend({name:"v-btn",props:{activeClass:{type:String,default(){return this.btnToggle?this.btnToggle.activeClass:""}},block:Boolean,depressed:Boolean,fab:Boolean,icon:Boolean,loading:Boolean,outlined:Boolean,plain:Boolean,retainFocusOnClick:Boolean,rounded:Boolean,tag:{type:String,default:"button"},text:Boolean,tile:Boolean,type:{type:String,default:"button"},value:null},data:()=>({proxyClass:"v-btn--active"}),computed:{classes(){return{"v-btn":!0,...f.Z.options.computed.classes.call(this),"v-btn--absolute":this.absolute,"v-btn--block":this.block,"v-btn--bottom":this.bottom,"v-btn--disabled":this.disabled,"v-btn--is-elevated":this.isElevated,"v-btn--fab":this.fab,"v-btn--fixed":this.fixed,"v-btn--has-bg":this.hasBg,"v-btn--icon":this.icon,"v-btn--left":this.left,"v-btn--loading":this.loading,"v-btn--outlined":this.outlined,"v-btn--plain":this.plain,"v-btn--right":this.right,"v-btn--round":this.isRound,"v-btn--rounded":this.rounded,"v-btn--router":this.to,"v-btn--text":this.text,"v-btn--tile":this.tile,"v-btn--top":this.top,...this.themeClasses,...this.groupClasses,...this.elevationClasses,...this.sizeableClasses}},computedElevation(){if(!this.disabled)return d.Z.options.computed.computedElevation.call(this)},computedRipple(){var t;const e=!this.icon&&!this.fab||{circle:!0};return!this.disabled&&(null!=(t=this.ripple)?t:e)},hasBg(){return!this.text&&!this.plain&&!this.outlined&&!this.icon},isElevated(){return Boolean(!this.icon&&!this.text&&!this.outlined&&!this.depressed&&!this.disabled&&!this.plain&&(null==this.elevation||Number(this.elevation)>0))},isRound(){return Boolean(this.icon||this.fab)},styles(){return{...this.measurableStyles}}},created(){const t=[["flat","text"],["outline","outlined"],["round","rounded"]];t.forEach((([t,e])=>{this.$attrs.hasOwnProperty(t)&&(0,v.fK)(t,e,this)}))},methods:{click(t){!this.retainFocusOnClick&&!this.fab&&t.detail&&this.$el.blur(),this.$emit("click",t),this.btnToggle&&this.toggle()},genContent(){return this.$createElement("span",{staticClass:"v-btn__content"},this.$slots.default)},genLoader(){return this.$createElement("span",{class:"v-btn__loader"},this.$slots.loader||[this.$createElement(c,{props:{indeterminate:!0,size:23,width:2}})])}},render(t){const e=[this.genContent(),this.loading&&this.genLoader()],{tag:n,data:i}=this.generateRouteLink(),r=this.hasBg?this.setBackgroundColor:this.setTextColor;return"button"===n&&(i.attrs.type=this.type,i.attrs.disabled=this.disabled),i.attrs.value=["string","number"].includes(typeof this.value)?this.value:JSON.stringify(this.value),t(n,this.disabled?i:r(this.color,i),e)}})},8598:function(t,e,n){"use strict";n.d(e,{Z:function(){return y}});var i=n(4802),r=n(6570),s=r.Z,o=n(2240),a=n(144),l=n(5352),c=a.ZP.extend({name:"comparable",props:{valueComparator:{type:Function,default:l.vZ}}}),h=n(3457),u=n(6669),d=n(7678),p=n(4101);const f=(0,d.Z)(c,h.Z,u.Z).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean,tag:{type:String,default:"div"}},data(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes(){return{"v-item-group":!0,...this.themeClasses}},selectedIndex(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem(){if(!this.multiple)return this.selectedItems[0]},selectedItems(){return this.items.filter(((t,e)=>this.toggleMethod(this.getValue(t,e))))},selectedValues(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod(){if(!this.multiple)return t=>this.valueComparator(this.internalValue,t);const t=this.internalValue;return Array.isArray(t)?e=>t.some((t=>this.valueComparator(t,e))):()=>!1}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created(){this.multiple&&!Array.isArray(this.internalValue)&&(0,p.Kd)("Model must be bound to an array if the multiple property is true.",this)},methods:{genData(){return{class:this.classes}},getValue(t,e){return void 0===t.value?e:t.value},onClick(t){this.updateInternalValue(this.getValue(t,this.items.indexOf(t)))},register(t){const e=this.items.push(t)-1;t.$on("change",(()=>this.onClick(t))),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(t,e)},unregister(t){if(this._isDestroyed)return;const e=this.items.indexOf(t),n=this.getValue(t,e);this.items.splice(e,1);const i=this.selectedValues.indexOf(n);if(!(i<0)){if(!this.mandatory)return this.updateInternalValue(n);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((t=>t!==n)):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}},updateItem(t,e){const n=this.getValue(t,e);t.isActive=this.toggleMethod(n)},updateItemsState(){this.$nextTick((()=>{if(this.mandatory&&!this.selectedItems.length)return this.updateMandatory();this.items.forEach(this.updateItem)}))},updateInternalValue(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory(t){if(!this.items.length)return;const e=this.items.slice();t&&e.reverse();const n=e.find((t=>!t.disabled));if(!n)return;const i=this.items.indexOf(n);this.updateInternalValue(this.getValue(n,i))},updateMultiple(t){const e=Array.isArray(this.internalValue)?this.internalValue:[],n=e.slice(),i=n.findIndex((e=>e===t));this.mandatory&&i>-1&&n.length-1<1||null!=this.max&&i<0&&n.length+1>this.max||(i>-1?n.splice(i,1):n.push(t),this.internalValue=n)},updateSingle(t){const e=t===this.internalValue;this.mandatory&&e||(this.internalValue=e?void 0:t)}},render(t){return t(this.tag,this.genData(),this.$slots.default)}});f.extend({name:"v-item-group",provide(){return{itemGroup:this}}});var m=f.extend({name:"v-window",directives:{Touch:i.Z},provide(){return{windowGroup:this}},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$next"},prevIcon:{type:[Boolean,String],default:"$prev"},reverse:Boolean,showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data(){return{changedByDelimiters:!1,internalHeight:void 0,transitionHeight:void 0,transitionCount:0,isBooted:!1,isReverse:!1}},computed:{isActive(){return this.transitionCount>0},classes(){return{...f.options.computed.classes.call(this),"v-window--show-arrows-on-hover":this.showArrowsOnHover}},computedTransition(){if(!this.isBooted)return"";const t=this.vertical?"y":"x",e=this.internalReverse?!this.isReverse:this.isReverse,n=e?"-reverse":"";return`v-window-${t}${n}-transition`},hasActiveItems(){return Boolean(this.items.find((t=>!t.disabled)))},hasNext(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev(){return this.continuous||this.internalIndex>0},internalIndex(){return this.items.findIndex(((t,e)=>this.internalValue===this.getValue(t,e)))},internalReverse(){return this.$vuetify.rtl?!this.reverse:this.reverse}},watch:{internalIndex(t,e){this.isReverse=this.updateReverse(t,e)}},mounted(){window.requestAnimationFrame((()=>this.isBooted=!0))},methods:{genDefaultSlot(){return this.$slots.default},genContainer(){const t=[this.genDefaultSlot()];return this.showArrows&&t.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight||this.transitionHeight}},t)},genIcon(t,e,n){var i,r,a;const l={click:t=>{t.stopPropagation(),this.changedByDelimiters=!0,n()}},c={"aria-label":this.$vuetify.lang.t(`$vuetify.carousel.${t}`)},h=null!=(i=null==(r=(a=this.$scopedSlots)[t])?void 0:r.call(a,{on:l,attrs:c}))?i:[this.$createElement(s,{props:{icon:!0},attrs:c,on:l},[this.$createElement(o.Z,{props:{large:!0}},e)])];return this.$createElement("div",{staticClass:`v-window__${t}`},h)},genControlIcons(){const t=[],e=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&e&&"string"===typeof e){const n=this.genIcon("prev",e,this.prev);n&&t.push(n)}const n=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&n&&"string"===typeof n){const e=this.genIcon("next",n,this.next);e&&t.push(e)}return t},getNextIndex(t){const e=(t+1)%this.items.length,n=this.items[e];return n.disabled?this.getNextIndex(e):e},getPrevIndex(t){const e=(t+this.items.length-1)%this.items.length,n=this.items[e];return n.disabled?this.getPrevIndex(e):e},next(){if(!this.hasActiveItems||!this.hasNext)return;const t=this.getNextIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)},prev(){if(!this.hasActiveItems||!this.hasPrev)return;const t=this.getPrevIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)},updateReverse(t,e){const n=this.items.length,i=n-1;return n<=2?t<e:t===i&&0===e||(0!==t||e!==i)&&t<e}},render(t){const e={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){const t=this.touch||{left:()=>{this.$vuetify.rtl?this.prev():this.next()},right:()=>{this.$vuetify.rtl?this.next():this.prev()},end:t=>{t.stopPropagation()},start:t=>{t.stopPropagation()}};e.directives.push({name:"touch",value:t})}return t("div",e,[this.genContainer()])}}),g=n(13),v=f.extend({name:"button-group",provide(){return{btnToggle:this}},computed:{classes(){return f.options.computed.classes.call(this)}},methods:{genData:f.options.methods.genData}}),y=m.extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:t=>t>0},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},provide(){return{parentTheme:this.theme}},data(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes(){return{...m.options.computed.classes.call(this),"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical}},isDark(){return this.dark||!this.light},isVertical(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height(t,e){t!==e&&t&&(this.internalHeight=t)},cycle(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created(){this.$attrs.hasOwnProperty("hide-controls")&&(0,p.fK)("hide-controls",':show-arrows="false"',this)},mounted(){this.startTimeout()},methods:{genControlIcons(){return this.isVertical?null:m.options.methods.genControlIcons.call(this)},genDelimiters(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems(){const t=this.items.length,e=[];for(let n=0;n<t;n++){const i=this.$createElement(s,{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",n+1,t)},props:{icon:!0,small:!0,value:this.getValue(this.items[n],n)}},[this.$createElement(o.Z,{props:{size:18}},this.delimiterIcon)]);e.push(i)}return this.$createElement(v,{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:t=>{this.internalValue=t}}},e)},genProgress(){return this.$createElement(g.Z,{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render(t){const e=m.options.render.call(this,t);return e.data.style=`height: ${(0,l.kb)(this.height)};`,this.hideDelimiters||e.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&e.children.push(this.genProgress()),e}})},6760:function(t,e,n){"use strict";n.d(e,{Z:function(){return p}});var i=n(8223),r=n(3037),s=n(4802),o=n(5352),a=n(7678);const l=(0,a.Z)(i.Z,(0,r.d)("windowGroup","v-window-item","v-window"));var c=l.extend().extend().extend({name:"v-window-item",directives:{Touch:s.Z},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data(){return{isActive:!1,inTransition:!1}},computed:{classes(){return this.groupClasses},computedTransition(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot(){return this.$slots.default},genWindowItem(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=(0,o.kb)(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled(){this.onAfterTransition()},onEnter(t){this.inTransition&&this.$nextTick((()=>{this.computedTransition&&this.inTransition&&(this.windowGroup.transitionHeight=(0,o.kb)(t.clientHeight))}))}},render(t){return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((()=>[this.genWindowItem()])))}}),h=n(5495),u=n(8860);const d=(0,a.Z)(c,u.Z);var p=d.extend().extend({name:"v-carousel-item",inject:{parentTheme:{default:{isDark:!1}}},provide(){return{theme:this.parentTheme}},inheritAttrs:!1,methods:{genDefaultSlot(){return[this.$createElement(h.Z,{staticClass:"v-carousel__item",props:{...this.$attrs,height:this.windowGroup.internalHeight},on:this.$listeners,scopedSlots:{placeholder:this.$scopedSlots.placeholder}},(0,o.z9)(this))]},genWindowItem(){const{tag:t,data:e}=this.generateRouteLink();return e.staticClass="v-window-item",e.directives.push({name:"show",value:this.isActive}),this.$createElement(t,e,this.genDefaultSlot())}}})},6718:function(t,e,n){"use strict";n.d(e,{Z:function(){return R}});n(6699);var i=n(6669),r=i.Z.extend({name:"v-theme-provider",props:{root:Boolean},computed:{isDark(){return this.root?this.rootIsDark:i.Z.options.computed.isDark.call(this)}},render(){return this.$slots.default&&this.$slots.default.find((t=>!t.isComment&&" "!==t.text))}}),s=n(144),o=s.ZP.extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:()=>({openTimeout:void 0,closeTimeout:void 0}),methods:{clearDelay(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay(t,e){this.clearDelay();const n=parseInt(this[`${t}Delay`],10);this[`${t}Timeout`]=setTimeout(e||(()=>{this.isActive={open:!0,close:!1}[t]}),n)}}}),a=n(1444),l=n(7678),c=n(5352),h=n(4101);const u=(0,l.Z)(o,a.Z);var d=u.extend({name:"activatable",props:{activator:{default:null,validator:t=>["string","object"].includes(typeof t)},disabled:Boolean,internalActivator:Boolean,openOnClick:{type:Boolean,default:!0},openOnHover:Boolean,openOnFocus:Boolean},data:()=>({activatorElement:null,activatorNode:[],events:["click","mouseenter","mouseleave","focus"],listeners:{}}),watch:{activator:"resetActivator",openOnFocus:"resetActivator",openOnHover:"resetActivator"},mounted(){const t=(0,c.sp)(this,"activator",!0);t&&["v-slot","normal"].includes(t)&&(0,h.N6)('The activator slot must be bound, try \'<template v-slot:activator="{ on }"><v-btn v-on="on">\'',this),this.addActivatorEvents()},beforeDestroy(){this.removeActivatorEvents()},methods:{addActivatorEvents(){if(!this.activator||this.disabled||!this.getActivator())return;this.listeners=this.genActivatorListeners();const t=Object.keys(this.listeners);for(const e of t)this.getActivator().addEventListener(e,this.listeners[e])},genActivator(){const t=(0,c.z9)(this,"activator",Object.assign(this.getValueProxy(),{on:this.genActivatorListeners(),attrs:this.genActivatorAttributes()}))||[];return this.activatorNode=t,t},genActivatorAttributes(){return{role:this.openOnClick&&!this.openOnHover?"button":void 0,"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genActivatorListeners(){if(this.disabled)return{};const t={};return this.openOnHover?(t.mouseenter=t=>{this.getActivator(t),this.runDelay("open")},t.mouseleave=t=>{this.getActivator(t),this.runDelay("close")}):this.openOnClick&&(t.click=t=>{const e=this.getActivator(t);e&&e.focus(),t.stopPropagation(),this.isActive=!this.isActive}),this.openOnFocus&&(t.focus=t=>{this.getActivator(t),t.stopPropagation(),this.isActive=!this.isActive}),t},getActivator(t){var e;if(this.activatorElement)return this.activatorElement;let n=null;if(this.activator){const t=this.internalActivator?this.$el:document;n="string"===typeof this.activator?t.querySelector(this.activator):this.activator.$el?this.activator.$el:this.activator}else if(1===this.activatorNode.length||this.activatorNode.length&&!t){const t=this.activatorNode[0].componentInstance;n=t&&t.$options.mixins&&t.$options.mixins.some((t=>t.options&&["activatable","menuable"].includes(t.options.name)))?t.getActivator():this.activatorNode[0].elm}else t&&(n=t.currentTarget||t.target);return this.activatorElement=(null==(e=n)?void 0:e.nodeType)===Node.ELEMENT_NODE?n:null,this.activatorElement},getContentSlot(){return(0,c.z9)(this,"default",this.getValueProxy(),!0)},getValueProxy(){const t=this;return{get value(){return t.isActive},set value(e){t.isActive=e}}},removeActivatorEvents(){if(!this.activator||!this.activatorElement)return;const t=Object.keys(this.listeners);for(const e of t)this.activatorElement.removeEventListener(e,this.listeners[e]);this.listeners={}},resetActivator(){this.removeActivatorEvents(),this.activatorElement=null,this.getActivator(),this.addActivatorEvents()}}});function p(t){const e=[];for(let n=0;n<t.length;n++){const i=t[n];i.isActive&&i.isDependent?e.push(i):e.push(...p(i.$children))}return e}var f=(0,l.Z)().extend({name:"dependent",data(){return{closeDependents:!0,isActive:!1,isDependent:!0}},watch:{isActive(t){if(t)return;const e=this.getOpenDependents();for(let n=0;n<e.length;n++)e[n].isActive=!1}},methods:{getOpenDependents(){return this.closeDependents?p(this.$children):[]},getOpenDependentElements(){const t=[],e=this.getOpenDependents();for(let n=0;n<e.length;n++)t.push(...e[n].getClickableDependentElements());return t},getClickableDependentElements(){const t=[this.$el];return this.$refs.content&&t.push(this.$refs.content),this.overlay&&t.push(this.overlay.$el),t.push(...this.getOpenDependentElements()),t}}}),m=n(8223);function g(t){const e=typeof t;return"boolean"===e||"string"===e||t.nodeType===Node.ELEMENT_NODE}function v(t){t.forEach((t=>{t.elm&&t.elm.parentNode&&t.elm.parentNode.removeChild(t.elm)}))}var y=(0,l.Z)(m.Z).extend({name:"detachable",props:{attach:{default:!1,validator:g},contentClass:{type:String,default:""}},data:()=>({activatorNode:null,hasDetached:!1}),watch:{attach(){this.hasDetached=!1,this.initDetach()},hasContent(){this.$nextTick(this.initDetach)}},beforeMount(){this.$nextTick((()=>{if(this.activatorNode){const t=Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode];t.forEach((t=>{if(!t.elm)return;if(!this.$el.parentNode)return;const e=this.$el===this.$el.parentNode.firstChild?this.$el:this.$el.nextSibling;this.$el.parentNode.insertBefore(t.elm,e)}))}}))},mounted(){this.hasContent&&this.initDetach()},deactivated(){this.isActive=!1},beforeDestroy(){this.$refs.content&&this.$refs.content.parentNode&&this.$refs.content.parentNode.removeChild(this.$refs.content)},destroyed(){if(this.activatorNode){const t=Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode];if(this.$el.isConnected){const e=new MutationObserver((n=>{n.some((t=>Array.from(t.removedNodes).includes(this.$el)))&&(e.disconnect(),v(t))}));e.observe(this.$el.parentNode,{subtree:!1,childList:!0})}else v(t)}},methods:{getScopeIdAttrs(){const t=(0,c.vO)(this.$vnode,"context.$options._scopeId");return t&&{[t]:""}},initDetach(){if(this._isDestroyed||!this.$refs.content||this.hasDetached||""===this.attach||!0===this.attach||"attach"===this.attach)return;let t;t=!1===this.attach?document.querySelector("[data-app]"):"string"===typeof this.attach?document.querySelector(this.attach):this.attach,t?(t.appendChild(this.$refs.content),this.hasDetached=!0):(0,h.Kd)(`Unable to locate target ${this.attach||"[data-app]"}`,this)}}}),_=n(6878),b=(0,l.Z)(_.Z,i.Z,a.Z).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim(){const t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes(){return{"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive,...this.themeClasses}},computedOpacity(){return Number(this.isActive?this.opacity:0)},styles(){return{zIndex:this.zIndex}}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render(t){const e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",on:this.$listeners,class:this.classes,style:this.styles},e)}}),w=b,C=s.ZP.extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data(){return{animationFrame:0,overlay:null}},watch:{hideOverlay(t){this.isActive&&(t?this.removeOverlay():this.genOverlay())}},beforeDestroy(){this.removeOverlay()},methods:{createOverlay(){const t=new w({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});t.$mount();const e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");e&&e.insertBefore(t.$el,e.firstChild),this.overlay=t},genOverlay(){if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame((()=>{this.overlay&&(void 0!==this.activeZIndex?this.overlay.zIndex=String(this.activeZIndex-1):this.$el&&(this.overlay.zIndex=(0,c.KK)(this.$el)),this.overlay.value=!0)})),!0},removeOverlay(t=!0){this.overlay&&((0,c.qh)(this.overlay.$el,"transitionend",(()=>{this.overlay&&this.overlay.$el&&this.overlay.$el.parentNode&&!this.overlay.value&&!this.isActive&&(this.overlay.$el.parentNode.removeChild(this.overlay.$el),this.overlay.$destroy(),this.overlay=null)})),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),t&&this.showScroll()},scrollListener(t){if("keydown"===t.type){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;const e=[c.Do.up,c.Do.pageup],n=[c.Do.down,c.Do.pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!n.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;const e=window.getComputedStyle(t);return(["auto","scroll"].includes(e.overflowY)||"SELECT"===t.tagName)&&t.scrollHeight>t.clientHeight||["auto","scroll"].includes(e.overflowX)&&t.scrollWidth>t.clientWidth},shouldScroll(t,e){if(t.hasAttribute("data-app"))return!1;const n=e.shiftKey||e.deltaX?"x":"y",i="y"===n?e.deltaY:e.deltaX||e.deltaY;let r,s;"y"===n?(r=0===t.scrollTop,s=t.scrollTop+t.clientHeight===t.scrollHeight):(r=0===t.scrollLeft,s=t.scrollLeft+t.clientWidth===t.scrollWidth);const o=i<0,a=i>0;return!(r||!o)||(!(s||!a)||!(!r&&!s)&&this.shouldScroll(t.parentNode,e))},isInside(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath(t){const e=(0,c.iZ)(t);if("keydown"===t.type&&e[0]===document.body){const e=this.$refs.dialog,n=window.getSelection().anchorNode;return!(e&&this.hasScrollbar(e)&&this.isInside(n,e))||!this.shouldScroll(e,t)}for(let n=0;n<e.length;n++){const i=e[n];if(i===document)return!0;if(i===document.documentElement)return!0;if(i===this.$refs.content)return!0;if(this.hasScrollbar(i))return!this.shouldScroll(i,t)}return!0},hideScroll(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):((0,c.lj)(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}}),S=s.ZP.extend({name:"returnable",props:{returnValue:null},data:()=>({isActive:!1,originalValue:null}),watch:{isActive(t){t?this.originalValue=this.returnValue:this.$emit("update:return-value",this.originalValue)}},methods:{save(t){this.originalValue=t,setTimeout((()=>{this.isActive=!1}))}}}),E=s.ZP.extend().extend({name:"stackable",data(){return{stackElement:null,stackExclude:null,stackMinZIndex:0,isActive:!1}},computed:{activeZIndex(){if("undefined"===typeof window)return 0;const t=this.stackElement||this.$refs.content,e=this.isActive?this.getMaxZIndex(this.stackExclude||[t])+2:(0,c.KK)(t);return null==e?e:parseInt(e)}},methods:{getMaxZIndex(t=[]){const e=this.$el,n=[this.stackMinZIndex,(0,c.KK)(e)],i=[...document.getElementsByClassName("v-menu__content--active"),...document.getElementsByClassName("v-dialog__content--active")];for(let r=0;r<i.length;r++)t.includes(i[r])||n.push((0,c.KK)(i[r]));return Math.max(...n)}}}),T=n(8856);function k(){return!0}function I(t,e,n){if(!t||!1===x(t,n))return!1;const i=(0,T.e)(e);if("undefined"!==typeof ShadowRoot&&i instanceof ShadowRoot&&i.host===t.target)return!1;const r=("object"===typeof n.value&&n.value.include||(()=>[]))();return r.push(e),!r.some((e=>e.contains(t.target)))}function x(t,e){const n="object"===typeof e.value&&e.value.closeConditional||k;return n(t)}function O(t,e,n,i){const r="function"===typeof n.value?n.value:n.value.handler;e._clickOutside.lastMousedownWasOutside&&I(t,e,n)&&setTimeout((()=>{x(t,n)&&r&&r(t)}),0)}function A(t,e){const n=(0,T.e)(t);e(document),"undefined"!==typeof ShadowRoot&&n instanceof ShadowRoot&&e(n)}const P={inserted(t,e,n){const i=i=>O(i,t,e,n),r=n=>{t._clickOutside.lastMousedownWasOutside=I(n,t,e)};A(t,(t=>{t.addEventListener("click",i,!0),t.addEventListener("mousedown",r,!0)})),t._clickOutside||(t._clickOutside={lastMousedownWasOutside:!0}),t._clickOutside[n.context._uid]={onClick:i,onMousedown:r}},unbind(t,e,n){t._clickOutside&&(A(t,(e=>{var i;if(!e||null==(i=t._clickOutside)||!i[n.context._uid])return;const{onClick:r,onMousedown:s}=t._clickOutside[n.context._uid];e.removeEventListener("click",r,!0),e.removeEventListener("mousedown",s,!0)})),delete t._clickOutside[n.context._uid])}};var N=P;const L=(0,l.Z)(f,y,C,S,E,d);var R=L.extend({name:"v-dialog",directives:{ClickOutside:N},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data(){return{activatedBy:null,animate:!1,animateTimeout:-1,stackMinZIndex:200,previousActiveElement:null}},computed:{classes(){return{[`v-dialog ${this.contentClass}`.trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created(){this.$attrs.hasOwnProperty("full-width")&&(0,h.Jk)("full-width",this)},beforeMount(){this.$nextTick((()=>{this.isBooted=this.isActive,this.isActive&&this.show()}))},beforeDestroy(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick((()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout((()=>this.animate=!1),150)}))},closeConditional(t){const e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):C.options.methods.hideScroll.call(this)},show(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((()=>{this.$nextTick((()=>{var t,e;null!=(t=this.$refs.dialog)&&t.contains(document.activeElement)||(this.previousActiveElement=document.activeElement,null==(e=this.$refs.dialog)||e.focus());this.bind()}))}))},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown(t){if(t.keyCode===c.Do.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;const t=this.getActivator();this.$nextTick((()=>t&&t.focus()))}this.$emit("keydown",t)},onFocusin(t){if(!t||!this.retainFocus)return;const e=t.target;if(e&&this.$refs.dialog&&![document,this.$refs.dialog].includes(e)&&!this.$refs.dialog.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((t=>t.contains(e)))){const t=this.$refs.dialog.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),e=[...t].find((t=>!t.hasAttribute("disabled")));e&&e.focus()}},genContent(){return this.showLazyContent((()=>[this.$createElement(r,{props:{root:!0,light:this.light,dark:this.dark}},[this.$createElement("div",{class:this.contentClasses,attrs:{role:"dialog","aria-modal":this.hideOverlay?void 0:"true",...this.getScopeIdAttrs()},on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.genTransition()])])]))},genTransition(){const t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent(){const t={class:this.classes,attrs:{tabindex:this.isActive?0:void 0},ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style={...t.style,maxWidth:(0,c.kb)(this.maxWidth),width:(0,c.kb)(this.width)}),this.$createElement("div",t,this.getContentSlot())}},render(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}})},266:function(t,e,n){"use strict";n(6699),n(1884);var i=n(144),r=n(1767),s=n(5352);const o=["sm","md","lg","xl"],a=(()=>o.reduce(((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t)),{}))(),l=(()=>o.reduce(((t,e)=>(t["offset"+(0,s.jC)(e)]={type:[String,Number],default:null},t)),{}))(),c=(()=>o.reduce(((t,e)=>(t["order"+(0,s.jC)(e)]={type:[String,Number],default:null},t)),{}))(),h={col:Object.keys(a),offset:Object.keys(l),order:Object.keys(c)};function u(t,e,n){let i=t;if(null!=n&&!1!==n){if(e){const n=e.replace(t,"");i+=`-${n}`}return"col"!==t||""!==n&&!0!==n?(i+=`-${n}`,i.toLowerCase()):i.toLowerCase()}}const d=new Map;e["Z"]=i.ZP.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...a,offset:{type:[String,Number],default:null},...l,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:n,children:i,parent:s}){let o="";for(const r in e)o+=String(e[r]);let a=d.get(o);if(!a){let t;for(t in a=[],h)h[t].forEach((n=>{const i=e[n],r=u(t,n,i);r&&a.push(r)}));const n=a.some((t=>t.startsWith("col-")));a.push({col:!n||!e.cols,[`col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),d.set(o,a)}return t(e.tag,(0,r.ZP)(n,{class:a}),i)}})},2118:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});n(9027),n(1884);var i=n(144);function r(t){return i.ZP.extend({name:`v-${t}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:n,data:i,children:r}){i.staticClass=`${t} ${i.staticClass||""}`.trim();const{attrs:s}=i;if(s){i.attrs={};const t=Object.keys(s).filter((t=>{if("slot"===t)return!1;const e=s[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e}));t.length&&(i.staticClass+=` ${t.join(" ")}`)}return n.id&&(i.domProps=i.domProps||{},i.domProps.id=n.id),e(n.tag,i,r)}})}var s=n(1767),o=r("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:n,children:i}){let r;const{attrs:o}=n;return o&&(n.attrs={},r=Object.keys(o).filter((t=>{if("slot"===t)return!1;const e=o[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e}))),e.id&&(n.domProps=n.domProps||{},n.domProps.id=e.id),t(e.tag,(0,s.ZP)(n,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(r||[])}),i)}})},1713:function(t,e,n){"use strict";n(6699),n(1884);var i=n(144),r=n(1767),s=n(5352);const o=["sm","md","lg","xl"],a=["start","end","center"];function l(t,e){return o.reduce(((n,i)=>(n[t+(0,s.jC)(i)]=e(),n)),{})}const c=t=>[...a,"baseline","stretch"].includes(t),h=l("align",(()=>({type:String,default:null,validator:c}))),u=t=>[...a,"space-between","space-around"].includes(t),d=l("justify",(()=>({type:String,default:null,validator:u}))),p=t=>[...a,"space-between","space-around","stretch"].includes(t),f=l("alignContent",(()=>({type:String,default:null,validator:p}))),m={align:Object.keys(h),justify:Object.keys(d),alignContent:Object.keys(f)},g={align:"align",justify:"justify",alignContent:"align-content"};function v(t,e,n){let i=g[t];if(null!=n){if(e){const n=e.replace(t,"");i+=`-${n}`}return i+=`-${n}`,i.toLowerCase()}}const y=new Map;e["Z"]=i.ZP.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...h,justify:{type:String,default:null,validator:u},...d,alignContent:{type:String,default:null,validator:p},...f},render(t,{props:e,data:n,children:i}){let s="";for(const r in e)s+=String(e[r]);let o=y.get(s);if(!o){let t;for(t in o=[],m)m[t].forEach((n=>{const i=e[n],r=v(t,n,i);r&&o.push(r)}));o.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),y.set(s,o)}return t(e.tag,(0,r.ZP)(n,{staticClass:"row",class:o}),i)}})},3687:function(t,e,n){"use strict";n(9027);var i=n(5352);e["Z"]=(0,i.Ji)("spacer","div","v-spacer")},4324:function(t,e,n){"use strict";n.d(e,{Z:function(){return f}});n(6699);var i,r=n(2500),s=n(6878),o=n(4338),a=n(6669),l=n(5352),c=n(144),h=n(7678);function u(t){return["fas","far","fal","fab","fad","fak"].some((e=>t.includes(e)))}function d(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(i||(i={}));const p=(0,h.Z)(r.Z,s.Z,o.Z,a.Z).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium(){return!1},hasClickListener(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon(){let t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),(0,l.RB)(this,t)},getSize(){const t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=(0,l.XP)(t).find((e=>t[e]));return e&&i[e]||(0,l.kb)(this.size)},getDefaultData(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:{"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0,...this.attrs$},on:this.listeners$}},getSvgWrapperData(){const t=this.getSize(),e={...this.getDefaultData(),style:t?{fontSize:t,height:t,width:t}:void 0};return this.applyColors(e),e},applyColors(t){t.class={...t.class,...this.themeClasses},this.setTextColor(this.color,t)},renderFontIcon(t,e){const n=[],i=this.getDefaultData();let r="material-icons";const s=t.indexOf("-"),o=s<=-1;o?n.push(t):(r=t.slice(0,s),u(r)&&(r="")),i.class[r]=!0,i.class[t]=!o;const a=this.getSize();return a&&(i.style={fontSize:a}),this.applyColors(i),e(this.hasClickListener?"button":this.tag,i,n)},renderSvgIcon(t,e){const n={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},i=this.getSize();return i&&(n.style={fontSize:i,height:i,width:i}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",n,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent(t,e){const n={class:{"v-icon__component":!0}},i=this.getSize();i&&(n.style={fontSize:i,height:i,width:i}),this.applyColors(n);const r=t.component;return n.props=t.props,n.nativeOn=n.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(r,n)])}},render(t){const e=this.getIcon();return"string"===typeof e?d(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});var f=c.ZP.extend({name:"v-icon",$_wrapperFor:p,functional:!0,render(t,{data:e,children:n}){let i="";return e.domProps&&(i=e.domProps.textContent||e.domProps.innerHTML||i,delete e.domProps.textContent,delete e.domProps.innerHTML),t(p,e,i?[i]:n)}})},2240:function(t,e,n){"use strict";var i=n(4324);e["Z"]=i.Z},5495:function(t,e,n){"use strict";n.d(e,{Z:function(){return p}});var i=n(6750),r=n(8846),s=n(7678),o=n(5352),a=(0,s.Z)(r.Z).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio(){return Number(this.aspectRatio)},aspectStyle(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},(0,o.z9)(this))}},render(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),l=a,c=n(6669),h=n(1767),u=n(4101);const d="undefined"!==typeof window&&"IntersectionObserver"in window;var p=(0,s.Z)(l,c.Z).extend({name:"v-img",directives:{intersect:i.Z},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc(){return this.src&&"object"===typeof this.src?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];const t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push(`linear-gradient(${this.gradient})`),e&&t.push(`url("${e}")`);const n=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[n]):n}},watch:{src(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted(){this.init()},methods:{init(t,e,n){if(!d||n||this.eager){if(this.normalisedSrc.lazySrc){const t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError(){this.hasError=!0,this.$emit("error",this.src)},getSrc(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage(){const t=new Image;this.image=t,t.onload=()=>{t.decode?t.decode().catch((t=>{(0,u.Kd)(`Failed to decode image, trying to render anyway\n\nsrc: ${this.normalisedSrc.src}`+(t.message?`\nOriginal error: ${t.message}`:""),this)})).then(this.onLoad):this.onLoad()},t.onerror=this.onError,this.hasError=!1,this.sizes&&(t.sizes=this.sizes),this.normalisedSrc.srcset&&(t.srcset=this.normalisedSrc.srcset),t.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(t),this.getSrc()},pollForSize(t,e=100){const n=()=>{const{naturalHeight:i,naturalWidth:r}=t;i||r?(this.naturalWidth=r,this.calculatedAspectRatio=r/i):t.complete||!this.isLoading||this.hasError||null==e||setTimeout(n,e)};n()},genContent(){const t=l.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:`${this.naturalWidth}px`}}),t},__genPlaceholder(){const t=(0,o.z9)(this,"placeholder");if(t){const e=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},t)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},e):e[0]}}},render(t){const e=l.options.render.call(this,t),n=(0,h.ZP)(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:d?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,n,e.children)}})},3059:function(t,e,n){"use strict";n.d(e,{Z:function(){return r}});var i=n(9131),r=i.Z.extend({name:"v-main",props:{tag:{type:String,default:"main"}},computed:{styles(){const{bar:t,top:e,right:n,footer:i,insetFooter:r,bottom:s,left:o}=this.$vuetify.application;return{paddingTop:`${e+t}px`,paddingRight:`${n}px`,paddingBottom:`${i+r+s}px`,paddingLeft:`${o}px`}}},render(t){const e={staticClass:"v-main",style:this.styles,ref:"main"};return t(this.tag,e,[t("div",{staticClass:"v-main__wrap"},this.$slots.default)])}})},13:function(t,e,n){"use strict";n.d(e,{Z:function(){return _}});var i=n(1767);function r(t=[],...e){return Array().concat(t,...e)}function s(t,e="top center 0",n){return{name:t,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:n},origin:{type:String,default:e}},render(e,n){const s="transition"+(n.props.group?"-group":""),o={props:{name:t,mode:n.props.mode},on:{beforeEnter(t){t.style.transformOrigin=n.props.origin,t.style.webkitTransformOrigin=n.props.origin}}};return n.props.leaveAbsolute&&(o.on.leave=r(o.on.leave,(t=>{const{offsetTop:e,offsetLeft:n,offsetWidth:i,offsetHeight:r}=t;t._transitionInitialStyles={position:t.style.position,top:t.style.top,left:t.style.left,width:t.style.width,height:t.style.height},t.style.position="absolute",t.style.top=e+"px",t.style.left=n+"px",t.style.width=i+"px",t.style.height=r+"px"})),o.on.afterLeave=r(o.on.afterLeave,(t=>{if(t&&t._transitionInitialStyles){const{position:e,top:n,left:i,width:r,height:s}=t._transitionInitialStyles;delete t._transitionInitialStyles,t.style.position=e||"",t.style.top=n||"",t.style.left=i||"",t.style.width=r||"",t.style.height=s||""}}))),n.props.hideOnLeave&&(o.on.leave=r(o.on.leave,(t=>{t.style.setProperty("display","none","important")}))),e(s,(0,i.ZP)(n.data,o),n.children)}}}function o(t,e,n="in-out"){return{name:t,functional:!0,props:{mode:{type:String,default:n}},render(n,r){return n("transition",(0,i.ZP)(r.data,{props:{name:t},on:e}),r.children)}}}var a=n(5352);function l(t="",e=!1){const n=e?"width":"height",i=`offset${(0,a.jC)(n)}`;return{beforeEnter(t){t._parent=t.parentNode,t._initialStyle={transition:t.style.transition,overflow:t.style.overflow,[n]:t.style[n]}},enter(e){const r=e._initialStyle;e.style.setProperty("transition","none","important"),e.style.overflow="hidden";const s=`${e[i]}px`;e.style[n]="0",e.offsetHeight,e.style.transition=r.transition,t&&e._parent&&e._parent.classList.add(t),requestAnimationFrame((()=>{e.style[n]=s}))},afterEnter:s,enterCancelled:s,leave(t){t._initialStyle={transition:"",overflow:t.style.overflow,[n]:t.style[n]},t.style.overflow="hidden",t.style[n]=`${t[i]}px`,t.offsetHeight,requestAnimationFrame((()=>t.style[n]="0"))},afterLeave:r,leaveCancelled:r};function r(e){t&&e._parent&&e._parent.classList.remove(t),s(e)}function s(t){const e=t._initialStyle[n];t.style.overflow=t._initialStyle.overflow,null!=e&&(t.style[n]=e),delete t._initialStyle}}s("carousel-transition"),s("carousel-reverse-transition"),s("tab-transition"),s("tab-reverse-transition"),s("menu-transition"),s("fab-transition","center center","out-in"),s("dialog-transition"),s("dialog-bottom-transition"),s("dialog-top-transition");const c=s("fade-transition"),h=(s("scale-transition"),s("scroll-x-transition"),s("scroll-x-reverse-transition"),s("scroll-y-transition"),s("scroll-y-reverse-transition"),s("slide-x-transition"));s("slide-x-reverse-transition"),s("slide-y-transition"),s("slide-y-reverse-transition"),o("expand-transition",l()),o("expand-x-transition",l("",!0));var u=n(6750),d=n(6878),p=n(4263),f=n(3457),m=n(6669),g=n(7678);const v=(0,g.Z)(d.Z,(0,p.d)(["absolute","fixed","top","bottom"]),f.Z,m.Z);var y=v.extend({name:"v-progress-linear",directives:{intersect:u.Z},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:(0,a.kb)(this.normalizedValue,"%")}}))},__cachedIndeterminate(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:(0,a.kb)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle(){const t=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return{opacity:t,[this.isReversed?"right":"left"]:(0,a.kb)(this.normalizedValue,"%"),width:(0,a.kb)(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")}},classes(){return{"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible,...this.themeClasses}},computedTransition(){return this.indeterminate?c:h},isReversed(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer(){return this.normalize(this.bufferValue)},normalizedValue(){return this.normalize(this.internalLazyValue)},reactive(){return Boolean(this.$listeners.change)},styles(){const t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=(0,a.kb)(this.normalizedBuffer,"%")),t}},methods:{genContent(){const t=(0,a.z9)(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners(){const t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:{[t]:!0}}))},onClick(t){if(!this.reactive)return;const{width:e}=this.$el.getBoundingClientRect();this.internalValue=t.offsetX/e*100},onObserve(t,e,n){this.isVisible=n},normalize(t){return t<0?0:t>100?100:parseFloat(t)}},render(t){const e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?(0,a.kb)(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),_=y},7423:function(t,e,n){"use strict";n.d(e,{Z:function(){return h}});var i=n(2500),r=n(6878),s=n(4390),o=n(8846),a=n(2637),l=n(6669),c=n(7678),h=(0,c.Z)(i.Z,r.Z,s.Z,o.Z,a.Z,l.Z).extend({name:"v-sheet",props:{outlined:Boolean,shaped:Boolean,tag:{type:String,default:"div"}},computed:{classes(){return{"v-sheet":!0,"v-sheet--outlined":this.outlined,"v-sheet--shaped":this.shaped,...this.themeClasses,...this.elevationClasses,...this.roundedClasses}},styles(){return this.measurableStyles}},render(t){const e={class:this.classes,style:this.styles,on:this.listeners$};return t(this.tag,this.setBackgroundColor(this.color,e),this.$slots.default)}})},153:function(t,e,n){"use strict";n.d(e,{Z:function(){return D}});n(6699);var i=n(2240),r=n(6878),s=n(6669),o=n(7678),a=n(5352),l=(0,o.Z)(s.Z).extend({name:"v-label",functional:!0,props:{absolute:Boolean,color:{type:String,default:"primary"},disabled:Boolean,focused:Boolean,for:String,left:{type:[Number,String],default:0},right:{type:[Number,String],default:"auto"},value:Boolean},render(t,e){const{children:n,listeners:i,props:o}=e,l={staticClass:"v-label",class:{"v-label--active":o.value,"v-label--is-disabled":o.disabled,...(0,s.X)(e)},attrs:{for:o.for,"aria-hidden":!o.for},on:i,style:{left:(0,a.kb)(o.left),right:(0,a.kb)(o.right),position:o.absolute?"absolute":"relative"},ref:"label"};return t("label",r.Z.options.methods.setTextColor(o.focused&&o.color,l),n)}}),c=l,h=(0,o.Z)(r.Z,s.Z).extend({name:"v-messages",props:{value:{type:Array,default:()=>[]}},methods:{genChildren(){return this.$createElement("transition-group",{staticClass:"v-messages__wrapper",attrs:{name:"message-transition",tag:"div"}},this.value.map(this.genMessage))},genMessage(t,e){return this.$createElement("div",{staticClass:"v-messages__message",key:e},(0,a.z9)(this,"default",{message:t,key:e})||[t])}},render(t){return t("div",this.setTextColor(this.color,{staticClass:"v-messages",class:this.themeClasses}),[this.genChildren()])}}),u=h,d=n(2500),p=n(4712),f=n(4101);const m=(0,o.Z)(r.Z,(0,p.f)("form"),s.Z);var g=m.extend({name:"validatable",props:{disabled:Boolean,error:Boolean,errorCount:{type:[Number,String],default:1},errorMessages:{type:[String,Array],default:()=>[]},messages:{type:[String,Array],default:()=>[]},readonly:Boolean,rules:{type:Array,default:()=>[]},success:Boolean,successMessages:{type:[String,Array],default:()=>[]},validateOnBlur:Boolean,value:{required:!1}},data(){return{errorBucket:[],hasColor:!1,hasFocused:!1,hasInput:!1,isFocused:!1,isResetting:!1,lazyValue:this.value,valid:!1}},computed:{computedColor(){if(!this.isDisabled)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},hasError(){return this.internalErrorMessages.length>0||this.errorBucket.length>0||this.error},hasSuccess(){return this.internalSuccessMessages.length>0||this.success},externalError(){return this.internalErrorMessages.length>0||this.error},hasMessages(){return this.validationTarget.length>0},hasState(){return!this.isDisabled&&(this.hasSuccess||this.shouldValidate&&this.hasError)},internalErrorMessages(){return this.genInternalMessages(this.errorMessages)},internalMessages(){return this.genInternalMessages(this.messages)},internalSuccessMessages(){return this.genInternalMessages(this.successMessages)},internalValue:{get(){return this.lazyValue},set(t){this.lazyValue=t,this.$emit("input",t)}},isDisabled(){return this.disabled||!!this.form&&this.form.disabled},isInteractive(){return!this.isDisabled&&!this.isReadonly},isReadonly(){return this.readonly||!!this.form&&this.form.readonly},shouldValidate(){return!!this.externalError||!this.isResetting&&(this.validateOnBlur?this.hasFocused&&!this.isFocused:this.hasInput||this.hasFocused)},validations(){return this.validationTarget.slice(0,Number(this.errorCount))},validationState(){if(!this.isDisabled)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":this.hasColor?this.computedColor:void 0},validationTarget(){return this.internalErrorMessages.length>0?this.internalErrorMessages:this.successMessages&&this.successMessages.length>0?this.internalSuccessMessages:this.messages&&this.messages.length>0?this.internalMessages:this.shouldValidate?this.errorBucket:[]}},watch:{rules:{handler(t,e){(0,a.vZ)(t,e)||this.validate()},deep:!0},internalValue(){this.hasInput=!0,this.validateOnBlur||this.$nextTick(this.validate)},isFocused(t){t||this.isDisabled||(this.hasFocused=!0,this.validateOnBlur&&this.$nextTick(this.validate))},isResetting(){setTimeout((()=>{this.hasInput=!1,this.hasFocused=!1,this.isResetting=!1,this.validate()}),0)},hasError(t){this.shouldValidate&&this.$emit("update:error",t)},value(t){this.lazyValue=t}},beforeMount(){this.validate()},created(){this.form&&this.form.register(this)},beforeDestroy(){this.form&&this.form.unregister(this)},methods:{genInternalMessages(t){return t?Array.isArray(t)?t:[t]:[]},reset(){this.isResetting=!0,this.internalValue=Array.isArray(this.internalValue)?[]:null},resetValidation(){this.isResetting=!0},validate(t=!1,e){const n=[];e=e||this.internalValue,t&&(this.hasInput=this.hasFocused=!0);for(let i=0;i<this.rules.length;i++){const t=this.rules[i],r="function"===typeof t?t(e):t;!1===r||"string"===typeof r?n.push(r||""):"boolean"!==typeof r&&(0,f.N6)(`Rules should return a string or boolean, received '${typeof r}' instead`,this)}return this.errorBucket=n,this.valid=0===n.length,this.valid}}}),v=n(1767);const y=(0,o.Z)(d.Z,g);var _=y.extend().extend({name:"v-input",inheritAttrs:!1,props:{appendIcon:String,backgroundColor:{type:String,default:""},dense:Boolean,height:[Number,String],hideDetails:[Boolean,String],hideSpinButtons:Boolean,hint:String,id:String,label:String,loading:Boolean,persistentHint:Boolean,prependIcon:String,value:null},data(){return{lazyValue:this.value,hasMouseDown:!1}},computed:{classes(){return{"v-input--has-state":this.hasState,"v-input--hide-details":!this.showDetails,"v-input--is-label-active":this.isLabelActive,"v-input--is-dirty":this.isDirty,"v-input--is-disabled":this.isDisabled,"v-input--is-focused":this.isFocused,"v-input--is-loading":!1!==this.loading&&null!=this.loading,"v-input--is-readonly":this.isReadonly,"v-input--dense":this.dense,"v-input--hide-spin-buttons":this.hideSpinButtons,...this.themeClasses}},computedId(){return this.id||`input-${this._uid}`},hasDetails(){return this.messagesToDisplay.length>0},hasHint(){return!this.hasMessages&&!!this.hint&&(this.persistentHint||this.isFocused)},hasLabel(){return!(!this.$slots.label&&!this.label)},internalValue:{get(){return this.lazyValue},set(t){this.lazyValue=t,this.$emit(this.$_modelEvent,t)}},isDirty(){return!!this.lazyValue},isLabelActive(){return this.isDirty},messagesToDisplay(){return this.hasHint?[this.hint]:this.hasMessages?this.validations.map((t=>{if("string"===typeof t)return t;const e=t(this.internalValue);return"string"===typeof e?e:""})).filter((t=>""!==t)):[]},showDetails(){return!1===this.hideDetails||"auto"===this.hideDetails&&this.hasDetails}},watch:{value(t){this.lazyValue=t}},beforeCreate(){this.$_modelEvent=this.$options.model&&this.$options.model.event||"input"},methods:{genContent(){return[this.genPrependSlot(),this.genControl(),this.genAppendSlot()]},genControl(){return this.$createElement("div",{staticClass:"v-input__control",attrs:{title:this.attrs$.title}},[this.genInputSlot(),this.genMessages()])},genDefaultSlot(){return[this.genLabel(),this.$slots.default]},genIcon(t,e,n={}){const r=this[`${t}Icon`],s=`click:${(0,a.GL)(t)}`,o=!(!this.listeners$[s]&&!e),l=(0,v.ZP)({attrs:{"aria-label":o?(0,a.GL)(t).split("-")[0]+" icon":void 0,color:this.validationState,dark:this.dark,disabled:this.isDisabled,light:this.light},on:o?{click:t=>{t.preventDefault(),t.stopPropagation(),this.$emit(s,t),e&&e(t)},mouseup:t=>{t.preventDefault(),t.stopPropagation()}}:void 0},n);return this.$createElement("div",{staticClass:"v-input__icon",class:t?`v-input__icon--${(0,a.GL)(t)}`:void 0},[this.$createElement(i.Z,l,r)])},genInputSlot(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor,{staticClass:"v-input__slot",style:{height:(0,a.kb)(this.height)},on:{click:this.onClick,mousedown:this.onMouseDown,mouseup:this.onMouseUp},ref:"input-slot"}),[this.genDefaultSlot()])},genLabel(){return this.hasLabel?this.$createElement(c,{props:{color:this.validationState,dark:this.dark,disabled:this.isDisabled,focused:this.hasState,for:this.computedId,light:this.light}},this.$slots.label||this.label):null},genMessages(){return this.showDetails?this.$createElement(u,{props:{color:this.hasHint?"":this.validationState,dark:this.dark,light:this.light,value:this.messagesToDisplay},attrs:{role:this.hasMessages?"alert":null},scopedSlots:{default:t=>(0,a.z9)(this,"message",t)}}):null},genSlot(t,e,n){if(!n.length)return null;const i=`${t}-${e}`;return this.$createElement("div",{staticClass:`v-input__${i}`,ref:i},n)},genPrependSlot(){const t=[];return this.$slots.prepend?t.push(this.$slots.prepend):this.prependIcon&&t.push(this.genIcon("prepend")),this.genSlot("prepend","outer",t)},genAppendSlot(){const t=[];return this.$slots.append?t.push(this.$slots.append):this.appendIcon&&t.push(this.genIcon("append")),this.genSlot("append","outer",t)},onClick(t){this.$emit("click",t)},onMouseDown(t){this.hasMouseDown=!0,this.$emit("mousedown",t)},onMouseUp(t){this.hasMouseDown=!1,this.$emit("mouseup",t)}},render(t){return t("div",this.setTextColor(this.validationState,{staticClass:"v-input",class:this.classes}),this.genContent())}}),b=_,w=(0,o.Z)(s.Z).extend({name:"v-counter",functional:!0,props:{value:{type:[Number,String],default:""},max:[Number,String]},render(t,e){const{props:n}=e,i=parseInt(n.max,10),r=parseInt(n.value,10),o=i?`${r} / ${i}`:String(n.value),a=i&&r>i;return t("div",{staticClass:"v-counter",class:{"error--text":a,...(0,s.X)(e)}},o)}}),C=w,S=n(6750),E=n(144);function T(t){return E.ZP.extend({name:"intersectable",data:()=>({isIntersecting:!1}),mounted(){S.Z.inserted(this.$el,{name:"intersect",value:this.onObserve},this.$vnode)},destroyed(){S.Z.unbind(this.$el,{name:"intersect",value:this.onObserve},this.$vnode)},methods:{onObserve(e,n,i){if(this.isIntersecting=i,i)for(let r=0,s=t.onVisible.length;r<s;r++){const e=this[t.onVisible[r]];"function"!==typeof e?(0,f.Kd)(t.onVisible[r]+" method is not available on the instance but referenced in intersectable mixin options"):e()}}}})}var k=n(13),I=E.ZP.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress(){return!1===this.loading?null:this.$slots.progress||this.$createElement(k.Z,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}});function x(t,e,n){const i=e.value,r=e.options||{passive:!0};window.addEventListener("resize",i,r),t._onResize=Object(t._onResize),t._onResize[n.context._uid]={callback:i,options:r},e.modifiers&&e.modifiers.quiet||i()}function O(t,e,n){var i;if(null==(i=t._onResize)||!i[n.context._uid])return;const{callback:r,options:s}=t._onResize[n.context._uid];window.removeEventListener("resize",r,s),delete t._onResize[n.context._uid]}const A={inserted:x,unbind:O};var P=A,N=n(7069),L=n(8856);const R=(0,o.Z)(b,T({onVisible:["onResize","tryAutofocus"]}),I),$=["color","file","time","date","datetime-local","week","month"];var D=R.extend().extend({name:"v-text-field",directives:{resize:P,ripple:N.Z},inheritAttrs:!1,props:{appendOuterIcon:String,autofocus:Boolean,clearable:Boolean,clearIcon:{type:String,default:"$clear"},counter:[Boolean,Number,String],counterValue:Function,filled:Boolean,flat:Boolean,fullWidth:Boolean,label:String,outlined:Boolean,placeholder:String,prefix:String,prependInnerIcon:String,persistentPlaceholder:Boolean,reverse:Boolean,rounded:Boolean,shaped:Boolean,singleLine:Boolean,solo:Boolean,soloInverted:Boolean,suffix:String,type:{type:String,default:"text"}},data:()=>({badInput:!1,labelWidth:0,prefixWidth:0,prependWidth:0,initialValue:null,isBooted:!1,isClearing:!1}),computed:{classes(){return{...b.options.computed.classes.call(this),"v-text-field":!0,"v-text-field--full-width":this.fullWidth,"v-text-field--prefix":this.prefix,"v-text-field--single-line":this.isSingle,"v-text-field--solo":this.isSolo,"v-text-field--solo-inverted":this.soloInverted,"v-text-field--solo-flat":this.flat,"v-text-field--filled":this.filled,"v-text-field--is-booted":this.isBooted,"v-text-field--enclosed":this.isEnclosed,"v-text-field--reverse":this.reverse,"v-text-field--outlined":this.outlined,"v-text-field--placeholder":this.placeholder,"v-text-field--rounded":this.rounded,"v-text-field--shaped":this.shaped}},computedColor(){const t=g.options.computed.computedColor.call(this);return this.soloInverted&&this.isFocused?this.color||"primary":t},computedCounterValue(){return"function"===typeof this.counterValue?this.counterValue(this.internalValue):[...(this.internalValue||"").toString()].length},hasCounter(){return!1!==this.counter&&null!=this.counter},hasDetails(){return b.options.computed.hasDetails.call(this)||this.hasCounter},internalValue:{get(){return this.lazyValue},set(t){this.lazyValue=t,this.$emit("input",this.lazyValue)}},isDirty(){var t;return(null==(t=this.lazyValue)?void 0:t.toString().length)>0||this.badInput},isEnclosed(){return this.filled||this.isSolo||this.outlined},isLabelActive(){return this.isDirty||$.includes(this.type)},isSingle(){return this.isSolo||this.singleLine||this.fullWidth||this.filled&&!this.hasLabel},isSolo(){return this.solo||this.soloInverted},labelPosition(){let t=this.prefix&&!this.labelValue?this.prefixWidth:0;return this.labelValue&&this.prependWidth&&(t-=this.prependWidth),this.$vuetify.rtl===this.reverse?{left:t,right:"auto"}:{left:"auto",right:t}},showLabel(){return this.hasLabel&&!(this.isSingle&&this.labelValue)},labelValue(){return this.isFocused||this.isLabelActive||this.persistentPlaceholder}},watch:{outlined:"setLabelWidth",label(){this.$nextTick(this.setLabelWidth)},prefix(){this.$nextTick(this.setPrefixWidth)},isFocused:"updateValue",value(t){this.lazyValue=t}},created(){this.$attrs.hasOwnProperty("box")&&(0,f.fK)("box","filled",this),this.$attrs.hasOwnProperty("browser-autocomplete")&&(0,f.fK)("browser-autocomplete","autocomplete",this),this.shaped&&!(this.filled||this.outlined||this.isSolo)&&(0,f.Kd)("shaped should be used with either filled or outlined",this)},mounted(){this.$watch((()=>this.labelValue),this.setLabelWidth),this.autofocus&&this.tryAutofocus(),requestAnimationFrame((()=>{this.isBooted=!0,requestAnimationFrame((()=>{this.isIntersecting||this.onResize()}))}))},methods:{focus(){this.onFocus()},blur(t){window.requestAnimationFrame((()=>{this.$refs.input&&this.$refs.input.blur()}))},clearableCallback(){this.$refs.input&&this.$refs.input.focus(),this.$nextTick((()=>this.internalValue=null))},genAppendSlot(){const t=[];return this.$slots["append-outer"]?t.push(this.$slots["append-outer"]):this.appendOuterIcon&&t.push(this.genIcon("appendOuter")),this.genSlot("append","outer",t)},genPrependInnerSlot(){const t=[];return this.$slots["prepend-inner"]?t.push(this.$slots["prepend-inner"]):this.prependInnerIcon&&t.push(this.genIcon("prependInner")),this.genSlot("prepend","inner",t)},genIconSlot(){const t=[];return this.$slots.append?t.push(this.$slots.append):this.appendIcon&&t.push(this.genIcon("append")),this.genSlot("append","inner",t)},genInputSlot(){const t=b.options.methods.genInputSlot.call(this),e=this.genPrependInnerSlot();return e&&(t.children=t.children||[],t.children.unshift(e)),t},genClearIcon(){return this.clearable?this.isDirty?this.genSlot("append","inner",[this.genIcon("clear",this.clearableCallback)]):this.genSlot("append","inner",[this.$createElement("div")]):null},genCounter(){var t,e,n;if(!this.hasCounter)return null;const i=!0===this.counter?this.attrs$.maxlength:this.counter,r={dark:this.dark,light:this.light,max:i,value:this.computedCounterValue};return null!=(t=null==(e=(n=this.$scopedSlots).counter)?void 0:e.call(n,{props:r}))?t:this.$createElement(C,{props:r})},genControl(){return b.options.methods.genControl.call(this)},genDefaultSlot(){return[this.genFieldset(),this.genTextFieldSlot(),this.genClearIcon(),this.genIconSlot(),this.genProgress()]},genFieldset(){return this.outlined?this.$createElement("fieldset",{attrs:{"aria-hidden":!0}},[this.genLegend()]):null},genLabel(){if(!this.showLabel)return null;const t={props:{absolute:!0,color:this.validationState,dark:this.dark,disabled:this.isDisabled,focused:!this.isSingle&&(this.isFocused||!!this.validationState),for:this.computedId,left:this.labelPosition.left,light:this.light,right:this.labelPosition.right,value:this.labelValue}};return this.$createElement(c,t,this.$slots.label||this.label)},genLegend(){const t=this.singleLine||!this.labelValue&&!this.isDirty?0:this.labelWidth,e=this.$createElement("span",{domProps:{innerHTML:"&#8203;"},staticClass:"notranslate"});return this.$createElement("legend",{style:{width:this.isSingle?void 0:(0,a.kb)(t)}},[e])},genInput(){const t=Object.assign({},this.listeners$);delete t.change;const{title:e,...n}=this.attrs$;return this.$createElement("input",{style:{},domProps:{value:"number"===this.type&&Object.is(this.lazyValue,-0)?"-0":this.lazyValue},attrs:{...n,autofocus:this.autofocus,disabled:this.isDisabled,id:this.computedId,placeholder:this.persistentPlaceholder||this.isFocused||!this.hasLabel?this.placeholder:void 0,readonly:this.isReadonly,type:this.type},on:Object.assign(t,{blur:this.onBlur,input:this.onInput,focus:this.onFocus,keydown:this.onKeyDown}),ref:"input",directives:[{name:"resize",modifiers:{quiet:!0},value:this.onResize}]})},genMessages(){if(!this.showDetails)return null;const t=b.options.methods.genMessages.call(this),e=this.genCounter();return this.$createElement("div",{staticClass:"v-text-field__details"},[t,e])},genTextFieldSlot(){return this.$createElement("div",{staticClass:"v-text-field__slot"},[this.genLabel(),this.prefix?this.genAffix("prefix"):null,this.genInput(),this.suffix?this.genAffix("suffix"):null])},genAffix(t){return this.$createElement("div",{class:`v-text-field__${t}`,ref:t},this[t])},onBlur(t){this.isFocused=!1,t&&this.$nextTick((()=>this.$emit("blur",t)))},onClick(){this.isFocused||this.isDisabled||!this.$refs.input||this.$refs.input.focus()},onFocus(t){if(!this.$refs.input)return;const e=(0,L.e)(this.$el);return e?e.activeElement!==this.$refs.input?this.$refs.input.focus():void(this.isFocused||(this.isFocused=!0,t&&this.$emit("focus",t))):void 0},onInput(t){const e=t.target;this.internalValue=e.value,this.badInput=e.validity&&e.validity.badInput},onKeyDown(t){t.keyCode===a.Do.enter&&this.lazyValue!==this.initialValue&&(this.initialValue=this.lazyValue,this.$emit("change",this.initialValue)),this.$emit("keydown",t)},onMouseDown(t){t.target!==this.$refs.input&&(t.preventDefault(),t.stopPropagation()),b.options.methods.onMouseDown.call(this,t)},onMouseUp(t){this.hasMouseDown&&this.focus(),b.options.methods.onMouseUp.call(this,t)},setLabelWidth(){this.outlined&&(this.labelWidth=this.$refs.label?Math.min(.75*this.$refs.label.scrollWidth+6,this.$el.offsetWidth-24):0)},setPrefixWidth(){this.$refs.prefix&&(this.prefixWidth=this.$refs.prefix.offsetWidth)},setPrependWidth(){this.outlined&&this.$refs["prepend-inner"]&&(this.prependWidth=this.$refs["prepend-inner"].offsetWidth)},tryAutofocus(){if(!this.autofocus||"undefined"===typeof document||!this.$refs.input)return!1;const t=(0,L.e)(this.$el);return!(!t||t.activeElement===this.$refs.input)&&(this.$refs.input.focus(),!0)},updateValue(t){this.hasColor=t,t?this.initialValue=this.lazyValue:this.initialValue!==this.lazyValue&&this.$emit("change",this.lazyValue)},onResize(){this.setLabelWidth(),this.setPrefixWidth(),this.setPrependWidth()}}})},6750:function(t,e,n){"use strict";function i(t,e,n){if("undefined"===typeof window||!("IntersectionObserver"in window))return;const i=e.modifiers||{},s=e.value,{handler:o,options:a}="object"===typeof s?s:{handler:s,options:{}},l=new IntersectionObserver(((s=[],a)=>{var l;const c=null==(l=t._observe)?void 0:l[n.context._uid];if(!c)return;const h=s.some((t=>t.isIntersecting));!o||i.quiet&&!c.init||i.once&&!h&&!c.init||o(s,a,h),h&&i.once?r(t,e,n):c.init=!0}),a);t._observe=Object(t._observe),t._observe[n.context._uid]={init:!1,observer:l},l.observe(t)}function r(t,e,n){var i;const r=null==(i=t._observe)?void 0:i[n.context._uid];r&&(r.observer.unobserve(t),delete t._observe[n.context._uid])}const s={inserted:i,unbind:r};e["Z"]=s},7069:function(t,e,n){"use strict";n.d(e,{Z:function(){return E}});var i=n(5352);const r=80;function s(t,e){t.style.transform=e,t.style.webkitTransform=e}function o(t){return"TouchEvent"===t.constructor.name}function a(t){return"KeyboardEvent"===t.constructor.name}const l=(t,e,n={})=>{let i=0,r=0;if(!a(t)){const n=e.getBoundingClientRect(),s=o(t)?t.touches[t.touches.length-1]:t;i=s.clientX-n.left,r=s.clientY-n.top}let s=0,l=.3;e._ripple&&e._ripple.circle?(l=.15,s=e.clientWidth/2,s=n.center?s:s+Math.sqrt((i-s)**2+(r-s)**2)/4):s=Math.sqrt(e.clientWidth**2+e.clientHeight**2)/2;const c=(e.clientWidth-2*s)/2+"px",h=(e.clientHeight-2*s)/2+"px",u=n.center?c:i-s+"px",d=n.center?h:r-s+"px";return{radius:s,scale:l,x:u,y:d,centerX:c,centerY:h}},c={show(t,e,n={}){if(!e._ripple||!e._ripple.enabled)return;const i=document.createElement("span"),r=document.createElement("span");i.appendChild(r),i.className="v-ripple__container",n.class&&(i.className+=` ${n.class}`);const{radius:o,scale:a,x:c,y:h,centerX:u,centerY:d}=l(t,e,n),p=2*o+"px";r.className="v-ripple__animation",r.style.width=p,r.style.height=p,e.appendChild(i);const f=window.getComputedStyle(e);f&&"static"===f.position&&(e.style.position="relative",e.dataset.previousPosition="static"),r.classList.add("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--visible"),s(r,`translate(${c}, ${h}) scale3d(${a},${a},${a})`),r.dataset.activated=String(performance.now()),setTimeout((()=>{r.classList.remove("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--in"),s(r,`translate(${u}, ${d}) scale3d(1,1,1)`)}),0)},hide(t){if(!t||!t._ripple||!t._ripple.enabled)return;const e=t.getElementsByClassName("v-ripple__animation");if(0===e.length)return;const n=e[e.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const i=performance.now()-Number(n.dataset.activated),r=Math.max(250-i,0);setTimeout((()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout((()=>{const e=t.getElementsByClassName("v-ripple__animation");1===e.length&&t.dataset.previousPosition&&(t.style.position=t.dataset.previousPosition,delete t.dataset.previousPosition),n.parentNode&&t.removeChild(n.parentNode)}),300)}),r)}};function h(t){return"undefined"===typeof t||!!t}function u(t){const e={},n=t.currentTarget;if(n&&n._ripple&&!n._ripple.touched&&!t.rippleStop){if(t.rippleStop=!0,o(t))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(e.center=n._ripple.centered||a(t),n._ripple.class&&(e.class=n._ripple.class),o(t)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{c.show(t,n,e)},n._ripple.showTimer=window.setTimeout((()=>{n&&n._ripple&&n._ripple.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)}),r)}else c.show(t,n,e)}}function d(t){const e=t.currentTarget;if(e&&e._ripple){if(window.clearTimeout(e._ripple.showTimer),"touchend"===t.type&&e._ripple.showTimerCommit)return e._ripple.showTimerCommit(),e._ripple.showTimerCommit=null,void(e._ripple.showTimer=setTimeout((()=>{d(t)})));window.setTimeout((()=>{e._ripple&&(e._ripple.touched=!1)})),c.hide(e)}}function p(t){const e=t.currentTarget;e&&e._ripple&&(e._ripple.showTimerCommit&&(e._ripple.showTimerCommit=null),window.clearTimeout(e._ripple.showTimer))}let f=!1;function m(t){f||t.keyCode!==i.Do.enter&&t.keyCode!==i.Do.space||(f=!0,u(t))}function g(t){f=!1,d(t)}function v(t){!0===f&&(f=!1,d(t))}function y(t,e,n){const i=h(e.value);i||c.hide(t),t._ripple=t._ripple||{},t._ripple.enabled=i;const r=e.value||{};r.center&&(t._ripple.centered=!0),r.class&&(t._ripple.class=e.value.class),r.circle&&(t._ripple.circle=r.circle),i&&!n?(t.addEventListener("touchstart",u,{passive:!0}),t.addEventListener("touchend",d,{passive:!0}),t.addEventListener("touchmove",p,{passive:!0}),t.addEventListener("touchcancel",d),t.addEventListener("mousedown",u),t.addEventListener("mouseup",d),t.addEventListener("mouseleave",d),t.addEventListener("keydown",m),t.addEventListener("keyup",g),t.addEventListener("blur",v),t.addEventListener("dragstart",d,{passive:!0})):!i&&n&&_(t)}function _(t){t.removeEventListener("mousedown",u),t.removeEventListener("touchstart",u),t.removeEventListener("touchend",d),t.removeEventListener("touchmove",p),t.removeEventListener("touchcancel",d),t.removeEventListener("mouseup",d),t.removeEventListener("mouseleave",d),t.removeEventListener("keydown",m),t.removeEventListener("keyup",g),t.removeEventListener("dragstart",d),t.removeEventListener("blur",v)}function b(t,e,n){y(t,e,!1)}function w(t){delete t._ripple,_(t)}function C(t,e){if(e.value===e.oldValue)return;const n=h(e.oldValue);y(t,e,n)}const S={bind:b,unbind:w,update:C};var E=S},4802:function(t,e,n){"use strict";var i=n(5352);const r=t=>{const{touchstartX:e,touchendX:n,touchstartY:i,touchendY:r}=t,s=.5,o=16;t.offsetX=n-e,t.offsetY=r-i,Math.abs(t.offsetY)<s*Math.abs(t.offsetX)&&(t.left&&n<e-o&&t.left(t),t.right&&n>e+o&&t.right(t)),Math.abs(t.offsetX)<s*Math.abs(t.offsetY)&&(t.up&&r<i-o&&t.up(t),t.down&&r>i+o&&t.down(t))};function s(t,e){const n=t.changedTouches[0];e.touchstartX=n.clientX,e.touchstartY=n.clientY,e.start&&e.start(Object.assign(t,e))}function o(t,e){const n=t.changedTouches[0];e.touchendX=n.clientX,e.touchendY=n.clientY,e.end&&e.end(Object.assign(t,e)),r(e)}function a(t,e){const n=t.changedTouches[0];e.touchmoveX=n.clientX,e.touchmoveY=n.clientY,e.move&&e.move(Object.assign(t,e))}function l(t){const e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:t=>s(t,e),touchend:t=>o(t,e),touchmove:t=>a(t,e)}}function c(t,e,n){const r=e.value,s=r.parent?t.parentElement:t,o=r.options||{passive:!0};if(!s)return;const a=l(e.value);s._touchHandlers=Object(s._touchHandlers),s._touchHandlers[n.context._uid]=a,(0,i.XP)(a).forEach((t=>{s.addEventListener(t,a[t],o)}))}function h(t,e,n){const r=e.value.parent?t.parentElement:t;if(!r||!r._touchHandlers)return;const s=r._touchHandlers[n.context._uid];(0,i.XP)(s).forEach((t=>{r.removeEventListener(t,s[t])})),delete r._touchHandlers[n.context._uid]}const u={inserted:c,unbind:h};e["Z"]=u},8864:function(t,e,n){"use strict";n.d(e,{Z:function(){return _t}});var i={};n.r(i),n.d(i,{easeInCubic:function(){return y},easeInOutCubic:function(){return b},easeInOutQuad:function(){return v},easeInOutQuart:function(){return S},easeInOutQuint:function(){return k},easeInQuad:function(){return m},easeInQuart:function(){return w},easeInQuint:function(){return E},easeOutCubic:function(){return _},easeOutQuad:function(){return g},easeOutQuart:function(){return C},easeOutQuint:function(){return T},linear:function(){return f}});n(6699);var r=n(144),s=n(4101);function o(t,e={}){if(o.installed)return;o.installed=!0,r.ZP!==t&&(0,s.N6)("Multiple instances of Vue detected\nSee https://github.com/vuetifyjs/vuetify/issues/4068\n\nIf you're seeing \"$attrs is readonly\", it's caused by this");const n=e.components||{},i=e.directives||{};for(const r in i){const e=i[r];t.directive(r,e)}(function e(n){if(n){for(const i in n){const r=n[i];r&&!e(r.$_vuetify_subcomponents)&&t.component(i,r)}return!0}return!1})(n),t.$_vuetify_installed||(t.$_vuetify_installed=!0,t.mixin({beforeCreate(){const e=this.$options;e.vuetify?(e.vuetify.init(this,this.$ssrContext),this.$vuetify=t.observable(e.vuetify.framework)):this.$vuetify=e.parent&&e.parent.$vuetify||this},beforeMount(){this.$options.vuetify&&this.$el&&this.$el.hasAttribute("data-server-rendered")&&(this.$vuetify.isHydrating=!0,this.$vuetify.breakpoint.update(!0))},mounted(){this.$options.vuetify&&this.$vuetify.isHydrating&&(this.$vuetify.isHydrating=!1,this.$vuetify.breakpoint.update())}}))}var a={badge:"Badge",close:"Close",dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},datePicker:{itemsSelected:"{0} selected",nextMonthAriaLabel:"Next month",nextYearAriaLabel:"Next year",prevMonthAriaLabel:"Previous month",prevYearAriaLabel:"Previous year"},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM"},pagination:{ariaLabel:{wrapper:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Goto Page {0}",currentPage:"Current Page, Page {0}"}},rating:{ariaLabel:{icon:"Rating {0} of {1}"}}};const l={breakpoint:{mobileBreakpoint:1264,scrollBarWidth:16,thresholds:{xs:600,sm:960,md:1280,lg:1920}},icons:{iconfont:"mdi",values:{}},lang:{current:"en",locales:{en:a},t:void 0},rtl:!1,theme:{dark:!1,default:"light",disable:!1,options:{cspNonce:void 0,customProperties:void 0,minifyTheme:void 0,themeCache:void 0,variations:!0},themes:{light:{primary:"#1976D2",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},dark:{primary:"#2196F3",secondary:"#424242",accent:"#FF4081",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"}}}};var c=n(5352);class h{constructor(){this.framework={}}init(t,e){}}class u extends h{constructor(t,e){super();const n=(0,c.Ee)({},l),{userPreset:i}=e,{preset:r={},...o}=i;null!=r.preset&&(0,s.Kd)("Global presets do not support the **preset** option, it can be safely omitted"),e.preset=(0,c.Ee)((0,c.Ee)(n,r),o)}}u.property="presets";class d extends h{constructor(){super(...arguments),this.bar=0,this.top=0,this.left=0,this.insetFooter=0,this.right=0,this.bottom=0,this.footer=0,this.application={bar:{},top:{},left:{},insetFooter:{},right:{},bottom:{},footer:{}}}register(t,e,n){this.application[e][t]=n,this.update(e)}unregister(t,e){null!=this.application[e][t]&&(delete this.application[e][t],this.update(e))}update(t){this[t]=Object.values(this.application[t]).reduce(((t,e)=>t+e),0)}}d.property="application";class p extends h{constructor(t){super(),this.xs=!1,this.sm=!1,this.md=!1,this.lg=!1,this.xl=!1,this.xsOnly=!1,this.smOnly=!1,this.smAndDown=!1,this.smAndUp=!1,this.mdOnly=!1,this.mdAndDown=!1,this.mdAndUp=!1,this.lgOnly=!1,this.lgAndDown=!1,this.lgAndUp=!1,this.xlOnly=!1,this.name="xs",this.height=0,this.width=0,this.mobile=!0,this.resizeTimeout=0;const{mobileBreakpoint:e,scrollBarWidth:n,thresholds:i}=t[p.property];this.mobileBreakpoint=e,this.scrollBarWidth=n,this.thresholds=i}init(){this.update(),"undefined"!==typeof window&&window.addEventListener("resize",this.onResize.bind(this),{passive:!0})}update(t=!1){const e=t?0:this.getClientHeight(),n=t?0:this.getClientWidth(),i=n<this.thresholds.xs,r=n<this.thresholds.sm&&!i,s=n<this.thresholds.md-this.scrollBarWidth&&!(r||i),o=n<this.thresholds.lg-this.scrollBarWidth&&!(s||r||i),a=n>=this.thresholds.lg-this.scrollBarWidth;switch(this.height=e,this.width=n,this.xs=i,this.sm=r,this.md=s,this.lg=o,this.xl=a,this.xsOnly=i,this.smOnly=r,this.smAndDown=(i||r)&&!(s||o||a),this.smAndUp=!i&&(r||s||o||a),this.mdOnly=s,this.mdAndDown=(i||r||s)&&!(o||a),this.mdAndUp=!(i||r)&&(s||o||a),this.lgOnly=o,this.lgAndDown=(i||r||s||o)&&!a,this.lgAndUp=!(i||r||s)&&(o||a),this.xlOnly=a,!0){case i:this.name="xs";break;case r:this.name="sm";break;case s:this.name="md";break;case o:this.name="lg";break;default:this.name="xl";break}if("number"===typeof this.mobileBreakpoint)return void(this.mobile=n<parseInt(this.mobileBreakpoint,10));const l={xs:0,sm:1,md:2,lg:3,xl:4},c=l[this.name],h=l[this.mobileBreakpoint];this.mobile=c<=h}onResize(){clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.update.bind(this),200)}getClientWidth(){return"undefined"===typeof document?0:Math.max(document.documentElement.clientWidth,window.innerWidth||0)}getClientHeight(){return"undefined"===typeof document?0:Math.max(document.documentElement.clientHeight,window.innerHeight||0)}}p.property="breakpoint";n(1703);const f=t=>t,m=t=>t**2,g=t=>t*(2-t),v=t=>t<.5?2*t**2:(4-2*t)*t-1,y=t=>t**3,_=t=>--t**3+1,b=t=>t<.5?4*t**3:(t-1)*(2*t-2)*(2*t-2)+1,w=t=>t**4,C=t=>1- --t**4,S=t=>t<.5?8*t*t*t*t:1-8*--t*t*t*t,E=t=>t**5,T=t=>1+--t**5,k=t=>t<.5?16*t**5:1+16*--t**5;function I(t){if("number"===typeof t)return t;let e=A(t);if(!e)throw"string"===typeof t?new Error(`Target element "${t}" not found.`):new TypeError(`Target must be a Number/Selector/HTMLElement/VueComponent, received ${O(t)} instead.`);let n=0;while(e)n+=e.offsetTop,e=e.offsetParent;return n}function x(t){const e=A(t);if(e)return e;throw"string"===typeof t?new Error(`Container element "${t}" not found.`):new TypeError(`Container must be a Selector/HTMLElement/VueComponent, received ${O(t)} instead.`)}function O(t){return null==t?t:t.constructor.name}function A(t){return"string"===typeof t?document.querySelector(t):t&&t._isVue?t.$el:t instanceof HTMLElement?t:null}function P(t,e={}){const n={container:document.scrollingElement||document.body||document.documentElement,duration:500,offset:0,easing:"easeInOutCubic",appOffset:!0,...e},r=x(n.container);if(n.appOffset&&P.framework.application){const t=r.classList.contains("v-navigation-drawer"),e=r.classList.contains("v-navigation-drawer--clipped"),{bar:i,top:s}=P.framework.application;n.offset+=i,t&&!e||(n.offset+=s)}const s=performance.now();let o;o="number"===typeof t?I(t)-n.offset:I(t)-I(r)-n.offset;const a=r.scrollTop;if(o===a)return Promise.resolve(o);const l="function"===typeof n.easing?n.easing:i[n.easing];if(!l)throw new TypeError(`Easing function "${n.easing}" not found.`);return new Promise((t=>requestAnimationFrame((function e(i){const c=i-s,h=Math.abs(n.duration?Math.min(c/n.duration,1):1);r.scrollTop=Math.floor(a+(o-a)*l(h));const u=r===document.body?document.documentElement.clientHeight:r.clientHeight,d=u+r.scrollTop>=r.scrollHeight;if(1===h||o>r.scrollTop&&d)return t(o);requestAnimationFrame(e)}))))}P.framework={},P.init=()=>{};class N extends h{constructor(){return super(),P}}N.property="goTo";const L={complete:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",cancel:"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",close:"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",delete:"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",clear:"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",success:"M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z",info:"M13,9H11V7H13M13,17H11V11H13M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2ZM13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",warning:"M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",error:"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",prev:"M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z",next:"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z",checkboxOn:"M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z",checkboxOff:"M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z",checkboxIndeterminate:"M17,13H7V11H17M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z",delimiter:"M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",sort:"M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z",expand:"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",menu:"M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z",subgroup:"M7,10L12,15L17,10H7Z",dropdown:"M7,10L12,15L17,10H7Z",radioOn:"M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,7C9.24,7 7,9.24 7,12C7,14.76 9.24,17 12,17C14.76,17 17,14.76 17,12C17,9.24 14.76,7 12,7Z",radioOff:"M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",edit:"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z",ratingEmpty:"M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z",ratingFull:"M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z",ratingHalf:"M12,15.4V6.1L13.71,10.13L18.09,10.5L14.77,13.39L15.76,17.67M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z",loading:"M19,8L15,12H18C18,15.31 15.31,18 12,18C11,18 10.03,17.75 9.2,17.3L7.74,18.76C8.97,19.54 10.43,20 12,20C16.42,20 20,16.42 20,12H23M6,12C6,8.69 8.69,6 12,6C13,6 13.97,6.25 14.8,6.7L16.26,5.24C15.03,4.46 13.57,4 12,4C7.58,4 4,7.58 4,12H1L5,16L9,12",first:"M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z",last:"M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z",unfold:"M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z",file:"M16.5,6V17.5C16.5,19.71 14.71,21.5 12.5,21.5C10.29,21.5 8.5,19.71 8.5,17.5V5C8.5,3.62 9.62,2.5 11,2.5C12.38,2.5 13.5,3.62 13.5,5V15.5C13.5,16.05 13.05,16.5 12.5,16.5C11.95,16.5 11.5,16.05 11.5,15.5V6H10V15.5C10,16.88 11.12,18 12.5,18C13.88,18 15,16.88 15,15.5V5C15,2.79 13.21,1 11,1C8.79,1 7,2.79 7,5V17.5C7,20.54 9.46,23 12.5,23C15.54,23 18,20.54 18,17.5V6H16.5Z",plus:"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",minus:"M19,13H5V11H19V13Z"};var R=L;const $={complete:"check",cancel:"cancel",close:"close",delete:"cancel",clear:"clear",success:"check_circle",info:"info",warning:"priority_high",error:"warning",prev:"chevron_left",next:"chevron_right",checkboxOn:"check_box",checkboxOff:"check_box_outline_blank",checkboxIndeterminate:"indeterminate_check_box",delimiter:"fiber_manual_record",sort:"arrow_upward",expand:"keyboard_arrow_down",menu:"menu",subgroup:"arrow_drop_down",dropdown:"arrow_drop_down",radioOn:"radio_button_checked",radioOff:"radio_button_unchecked",edit:"edit",ratingEmpty:"star_border",ratingFull:"star",ratingHalf:"star_half",loading:"cached",first:"first_page",last:"last_page",unfold:"unfold_more",file:"attach_file",plus:"add",minus:"remove"};var D=$;const M={complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-exclamation",error:"mdi-alert",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sort:"mdi-arrow-up",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus"};var F=M;const j={complete:"fas fa-check",cancel:"fas fa-times-circle",close:"fas fa-times",delete:"fas fa-times-circle",clear:"fas fa-times-circle",success:"fas fa-check-circle",info:"fas fa-info-circle",warning:"fas fa-exclamation",error:"fas fa-exclamation-triangle",prev:"fas fa-chevron-left",next:"fas fa-chevron-right",checkboxOn:"fas fa-check-square",checkboxOff:"far fa-square",checkboxIndeterminate:"fas fa-minus-square",delimiter:"fas fa-circle",sort:"fas fa-sort-up",expand:"fas fa-chevron-down",menu:"fas fa-bars",subgroup:"fas fa-caret-down",dropdown:"fas fa-caret-down",radioOn:"far fa-dot-circle",radioOff:"far fa-circle",edit:"fas fa-edit",ratingEmpty:"far fa-star",ratingFull:"fas fa-star",ratingHalf:"fas fa-star-half",loading:"fas fa-sync",first:"fas fa-step-backward",last:"fas fa-step-forward",unfold:"fas fa-arrows-alt-v",file:"fas fa-paperclip",plus:"fas fa-plus",minus:"fas fa-minus"};var B=j;const V={complete:"fa fa-check",cancel:"fa fa-times-circle",close:"fa fa-times",delete:"fa fa-times-circle",clear:"fa fa-times-circle",success:"fa fa-check-circle",info:"fa fa-info-circle",warning:"fa fa-exclamation",error:"fa fa-exclamation-triangle",prev:"fa fa-chevron-left",next:"fa fa-chevron-right",checkboxOn:"fa fa-check-square",checkboxOff:"fa fa-square-o",checkboxIndeterminate:"fa fa-minus-square",delimiter:"fa fa-circle",sort:"fa fa-sort-up",expand:"fa fa-chevron-down",menu:"fa fa-bars",subgroup:"fa fa-caret-down",dropdown:"fa fa-caret-down",radioOn:"fa fa-dot-circle-o",radioOff:"fa fa-circle-o",edit:"fa fa-pencil",ratingEmpty:"fa fa-star-o",ratingFull:"fa fa-star",ratingHalf:"fa fa-star-half-o",loading:"fa fa-refresh",first:"fa fa-step-backward",last:"fa fa-step-forward",unfold:"fa fa-angle-double-down",file:"fa fa-paperclip",plus:"fa fa-plus",minus:"fa fa-minus"};var U=V;function z(t,e){const n={};for(const i in e)n[i]={component:t,props:{icon:e[i].split(" fa-")}};return n}var H=z("font-awesome-icon",B),q=Object.freeze({mdiSvg:R,md:D,mdi:F,fa:B,fa4:U,faSvg:H});class W extends h{constructor(t){super();const{iconfont:e,values:n,component:i}=t[W.property];this.component=i,this.iconfont=e,this.values=(0,c.Ee)(q[e],n)}}W.property="icons";const Z="$vuetify.",K=Symbol("Lang fallback");function G(t,e,n=!1,i){const r=e.replace(Z,"");let o=(0,c.vO)(t,r,K);return o===K&&(n?((0,s.N6)(`Translation key "${r}" not found in fallback`),o=e):((0,s.Kd)(`Translation key "${r}" not found, falling back to default`),o=G(i,e,!0,i))),o}class Y extends h{constructor(t){super(),this.defaultLocale="en";const{current:e,locales:n,t:i}=t[Y.property];this.current=e,this.locales=n,this.translator=i||this.defaultTranslator}currentLocale(t){const e=this.locales[this.current],n=this.locales[this.defaultLocale];return G(e,t,!1,n)}t(t,...e){return t.startsWith(Z)?this.translator(t,...e):this.replace(t,e)}defaultTranslator(t,...e){return this.replace(this.currentLocale(t),e)}replace(t,e){return t.replace(/\{(\d+)\}/g,((t,n)=>String(e[+n])))}}Y.property="lang";var X=n(937);const J=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],Q=t=>t<=.0031308?12.92*t:1.055*t**(1/2.4)-.055,tt=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],et=t=>t<=.04045?t/12.92:((t+.055)/1.055)**2.4;function nt(t){const e=Array(3),n=Q,i=J;for(let r=0;r<3;++r)e[r]=Math.round(255*(0,c.uZ)(n(i[r][0]*t[0]+i[r][1]*t[1]+i[r][2]*t[2])));return(e[0]<<16)+(e[1]<<8)+(e[2]<<0)}function it(t){const e=[0,0,0],n=et,i=tt,r=n((t>>16&255)/255),s=n((t>>8&255)/255),o=n((t>>0&255)/255);for(let a=0;a<3;++a)e[a]=i[a][0]*r+i[a][1]*s+i[a][2]*o;return e}const rt=.20689655172413793,st=t=>t>rt**3?Math.cbrt(t):t/(3*rt**2)+4/29,ot=t=>t>rt?t**3:3*rt**2*(t-4/29);function at(t){const e=st,n=e(t[1]);return[116*n-16,500*(e(t[0]/.95047)-n),200*(n-e(t[2]/1.08883))]}function lt(t){const e=ot,n=(t[0]+16)/116;return[.95047*e(n+t[1]/500),e(n),1.08883*e(n-t[2]/200)]}function ct(t,e=!1,n=!0){const{anchor:i,...r}=t,s=Object.keys(r),o={};for(let a=0;a<s.length;++a){const i=s[a],r=t[i];null!=r&&(n?e?("base"===i||i.startsWith("lighten")||i.startsWith("darken"))&&(o[i]=(0,X.hq)(r)):o[i]="object"===typeof r?ct(r,!0,n):mt(i,(0,X.jx)(r)):o[i]={base:(0,X.I4)((0,X.jx)(r))})}return e||(o.anchor=i||o.base||o.primary.base),o}const ht=(t,e)=>`\n.v-application .${t} {\n  background-color: ${e} !important;\n  border-color: ${e} !important;\n}\n.v-application .${t}--text {\n  color: ${e} !important;\n  caret-color: ${e} !important;\n}`,ut=(t,e,n)=>{const[i,r]=e.split(/(\d)/,2);return`\n.v-application .${t}.${i}-${r} {\n  background-color: ${n} !important;\n  border-color: ${n} !important;\n}\n.v-application .${t}--text.text--${i}-${r} {\n  color: ${n} !important;\n  caret-color: ${n} !important;\n}`},dt=(t,e="base")=>`--v-${t}-${e}`,pt=(t,e="base")=>`var(${dt(t,e)})`;function ft(t,e=!1){const{anchor:n,...i}=t,r=Object.keys(i);if(!r.length)return"";let s="",o="";const a=e?pt("anchor"):n;o+=`.v-application a { color: ${a}; }`,e&&(s+=`  ${dt("anchor")}: ${n};\n`);for(let l=0;l<r.length;++l){const n=r[l],i=t[n];o+=ht(n,e?pt(n):i.base),e&&(s+=`  ${dt(n)}: ${i.base};\n`);const a=(0,c.XP)(i);for(let t=0;t<a.length;++t){const r=a[t],l=i[r];"base"!==r&&(o+=ut(n,r,e?pt(n,r):l),e&&(s+=`  ${dt(n,r)}: ${l};\n`))}}return e&&(s=`:root {\n${s}}\n\n`),s+o}function mt(t,e){const n={base:(0,X.I4)(e)};for(let i=5;i>0;--i)n[`lighten${i}`]=(0,X.I4)(gt(e,i));for(let i=1;i<=4;++i)n[`darken${i}`]=(0,X.I4)(vt(e,i));return n}function gt(t,e){const n=at(it(t));return n[0]=n[0]+10*e,nt(lt(n))}function vt(t,e){const n=at(it(t));return n[0]=n[0]-10*e,nt(lt(n))}class yt extends h{constructor(t){super(),this.disabled=!1,this.isDark=null,this.unwatch=null,this.vueMeta=null;const{dark:e,disable:n,options:i,themes:r}=t[yt.property];this.dark=Boolean(e),this.defaults=this.themes=r,this.options=i,n?this.disabled=!0:this.themes={dark:this.fillVariant(r.dark,!0),light:this.fillVariant(r.light,!1)}}set css(t){this.vueMeta?this.isVueMeta23&&this.applyVueMeta23():this.checkOrCreateStyleElement()&&(this.styleEl.innerHTML=t)}set dark(t){const e=this.isDark;this.isDark=t,null!=e&&this.applyTheme()}get dark(){return Boolean(this.isDark)}applyTheme(){if(this.disabled)return this.clearCss();this.css=this.generatedStyles}clearCss(){this.css=""}init(t,e){this.disabled||(t.$meta?this.initVueMeta(t):e&&this.initSSR(e),this.initTheme(t))}setTheme(t,e){this.themes[t]=Object.assign(this.themes[t],e),this.applyTheme()}resetThemes(){this.themes.light=Object.assign({},this.defaults.light),this.themes.dark=Object.assign({},this.defaults.dark),this.applyTheme()}checkOrCreateStyleElement(){return this.styleEl=document.getElementById("vuetify-theme-stylesheet"),!!this.styleEl||(this.genStyleElement(),Boolean(this.styleEl))}fillVariant(t={},e){const n=this.themes[e?"dark":"light"];return Object.assign({},n,t)}genStyleElement(){"undefined"!==typeof document&&(this.styleEl=document.createElement("style"),this.styleEl.type="text/css",this.styleEl.id="vuetify-theme-stylesheet",this.options.cspNonce&&this.styleEl.setAttribute("nonce",this.options.cspNonce),document.head.appendChild(this.styleEl))}initVueMeta(t){if(this.vueMeta=t.$meta(),this.isVueMeta23)return void t.$nextTick((()=>{this.applyVueMeta23()}));const e="function"===typeof this.vueMeta.getOptions?this.vueMeta.getOptions().keyName:"metaInfo",n=t.$options[e]||{};t.$options[e]=()=>{n.style=n.style||[];const t=n.style.find((t=>"vuetify-theme-stylesheet"===t.id));return t?t.cssText=this.generatedStyles:n.style.push({cssText:this.generatedStyles,type:"text/css",id:"vuetify-theme-stylesheet",nonce:(this.options||{}).cspNonce}),n}}applyVueMeta23(){const{set:t}=this.vueMeta.addApp("vuetify");t({style:[{cssText:this.generatedStyles,type:"text/css",id:"vuetify-theme-stylesheet",nonce:this.options.cspNonce}]})}initSSR(t){const e=this.options.cspNonce?` nonce="${this.options.cspNonce}"`:"";t.head=t.head||"",t.head+=`<style type="text/css" id="vuetify-theme-stylesheet"${e}>${this.generatedStyles}</style>`}initTheme(t){"undefined"!==typeof document&&(this.unwatch&&(this.unwatch(),this.unwatch=null),t.$once("hook:created",(()=>{const e=r.ZP.observable({themes:this.themes});this.unwatch=t.$watch((()=>e.themes),(()=>this.applyTheme()),{deep:!0})})),this.applyTheme())}get currentTheme(){const t=this.dark?"dark":"light";return this.themes[t]}get generatedStyles(){const t=this.parsedTheme,e=this.options||{};let n;return null!=e.themeCache&&(n=e.themeCache.get(t),null!=n)||(n=ft(t,e.customProperties),null!=e.minifyTheme&&(n=e.minifyTheme(n)),null!=e.themeCache&&e.themeCache.set(t,n)),n}get parsedTheme(){return ct(this.currentTheme||{},void 0,(0,c.qw)(this.options,["variations"],!0))}get isVueMeta23(){return"function"===typeof this.vueMeta.addApp}}yt.property="theme";class _t{constructor(t={}){this.framework={isHydrating:!1},this.installed=[],this.preset={},this.userPreset={},this.userPreset=t,this.use(u),this.use(d),this.use(p),this.use(N),this.use(W),this.use(Y),this.use(yt)}init(t,e){this.installed.forEach((n=>{const i=this.framework[n];i.framework=this.framework,i.init(t,e)})),this.framework.rtl=Boolean(this.preset.rtl)}use(t){const e=t.property;this.installed.includes(e)||(this.framework[e]=new t(this.preset,this),this.installed.push(e))}}_t.install=o,_t.installed=!1,_t.version="2.6.7",_t.config={silent:!1}},2500:function(t,e,n){"use strict";var i=n(144);function r(t){return function(e,n){for(const i in n)Object.prototype.hasOwnProperty.call(e,i)||this.$delete(this.$data[t],i);for(const i in e)this.$set(this.$data[t],i,e[i])}}e["Z"]=i.ZP.extend({data:()=>({attrs$:{},listeners$:{}}),created(){this.$watch("$attrs",r("attrs$"),{immediate:!0}),this.$watch("$listeners",r("listeners$"),{immediate:!0})}})},8223:function(t,e,n){"use strict";var i=n(4101),r=n(144);e["Z"]=r.ZP.extend().extend({name:"bootable",props:{eager:Boolean},data:()=>({isBooted:!1}),computed:{hasContent(){return this.isBooted||this.eager||this.isActive}},watch:{isActive(){this.isBooted=!0}},created(){"lazy"in this.$attrs&&(0,i.Jk)("lazy",this)},methods:{showLazyContent(t){return this.hasContent&&t?t():[this.$createElement()]}}})},6878:function(t,e,n){"use strict";var i=n(144),r=n(4101),s=n(937);e["Z"]=i.ZP.extend({name:"colorable",props:{color:String},methods:{setBackgroundColor(t,e={}){return"string"===typeof e.style?((0,r.N6)("style must be an object",this),e):"string"===typeof e.class?((0,r.N6)("class must be an object",this),e):((0,s.NA)(t)?e.style={...e.style,"background-color":`${t}`,"border-color":`${t}`}:t&&(e.class={...e.class,[t]:!0}),e)},setTextColor(t,e={}){if("string"===typeof e.style)return(0,r.N6)("style must be an object",this),e;if("string"===typeof e.class)return(0,r.N6)("class must be an object",this),e;if((0,s.NA)(t))e.style={...e.style,color:`${t}`,"caret-color":`${t}`};else if(t){const[n,i]=t.toString().trim().split(" ",2);e.class={...e.class,[n+"--text"]:!0},i&&(e.class["text--"+i]=!0)}return e}}})},4390:function(t,e,n){"use strict";var i=n(144);e["Z"]=i.ZP.extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation(){return this.elevation},elevationClasses(){const t=this.computedElevation;return null==t||isNaN(parseInt(t))?{}:{[`elevation-${this.elevation}`]:!0}}}})},3037:function(t,e,n){"use strict";n.d(e,{d:function(){return r}});var i=n(4712);function r(t,e,n){return(0,i.f)(t,e,n).extend({name:"groupable",props:{activeClass:{type:String,default(){if(this[t])return this[t].activeClass}},disabled:Boolean},data(){return{isActive:!1}},computed:{groupClasses(){return this.activeClass?{[this.activeClass]:this.isActive}:{}}},created(){this[t]&&this[t].register(this)},beforeDestroy(){this[t]&&this[t].unregister(this)},methods:{toggle(){this.$emit("change")}}})}r("itemGroup")},8846:function(t,e,n){"use strict";var i=n(5352),r=n(144);e["Z"]=r.ZP.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles(){const t={},e=(0,i.kb)(this.height),n=(0,i.kb)(this.minHeight),r=(0,i.kb)(this.minWidth),s=(0,i.kb)(this.maxHeight),o=(0,i.kb)(this.maxWidth),a=(0,i.kb)(this.width);return e&&(t.height=e),n&&(t.minHeight=n),r&&(t.minWidth=r),s&&(t.maxHeight=s),o&&(t.maxWidth=o),a&&(t.width=a),t}}})},4263:function(t,e,n){"use strict";n.d(e,{d:function(){return o}});var i=n(144),r=n(5352);const s={absolute:Boolean,bottom:Boolean,fixed:Boolean,left:Boolean,right:Boolean,top:Boolean};function o(t=[]){return i.ZP.extend({name:"positionable",props:t.length?(0,r.ji)(s,t):s})}e["Z"]=o()},3457:function(t,e,n){"use strict";var i=n(144);function r(t="value",e="change"){return i.ZP.extend({name:"proxyable",model:{prop:t,event:e},props:{[t]:{required:!1}},data(){return{internalLazyValue:this[t]}},computed:{internalValue:{get(){return this.internalLazyValue},set(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:{[t](t){this.internalLazyValue=t}}})}const s=r();e["Z"]=s},4712:function(t,e,n){"use strict";n.d(e,{f:function(){return o}});var i=n(144),r=n(4101);function s(t,e){return()=>(0,r.Kd)(`The ${t} component must be used inside a ${e}`)}function o(t,e,n){const r=e&&n?{register:s(e,n),unregister:s(e,n)}:null;return i.ZP.extend({name:"registrable-inject",inject:{[t]:{default:r}}})}},2637:function(t,e,n){"use strict";var i=n(144);e["Z"]=i.ZP.extend({name:"roundable",props:{rounded:[Boolean,String],tile:Boolean},computed:{roundedClasses(){const t=[],e="string"===typeof this.rounded?String(this.rounded):!0===this.rounded;if(this.tile)t.push("rounded-0");else if("string"===typeof e){const n=e.split(" ");for(const e of n)t.push(`rounded-${e}`)}else e&&t.push("rounded");return t.length>0?{[t.join(" ")]:!0}:{}}}})},8860:function(t,e,n){"use strict";var i=n(144),r=n(7069),s=n(5352);e["Z"]=i.ZP.extend({name:"routable",directives:{Ripple:r.Z},props:{activeClass:String,append:Boolean,disabled:Boolean,exact:{type:Boolean,default:void 0},exactPath:Boolean,exactActiveClass:String,link:Boolean,href:[String,Object],to:[String,Object],nuxt:Boolean,replace:Boolean,ripple:{type:[Boolean,Object],default:null},tag:String,target:String},data:()=>({isActive:!1,proxyClass:""}),computed:{classes(){const t={};return this.to||(this.activeClass&&(t[this.activeClass]=this.isActive),this.proxyClass&&(t[this.proxyClass]=this.isActive)),t},computedRipple(){var t;return null!=(t=this.ripple)?t:!this.disabled&&this.isClickable},isClickable(){return!this.disabled&&Boolean(this.isLink||this.$listeners.click||this.$listeners["!click"]||this.$attrs.tabindex)},isLink(){return this.to||this.href||this.link},styles:()=>({})},watch:{$route:"onRouteChange"},mounted(){this.onRouteChange()},methods:{generateRouteLink(){let t,e=this.exact;const n={attrs:{tabindex:"tabindex"in this.$attrs?this.$attrs.tabindex:void 0},class:this.classes,style:this.styles,props:{},directives:[{name:"ripple",value:this.computedRipple}],[this.to?"nativeOn":"on"]:{...this.$listeners,..."click"in this?{click:this.click}:void 0},ref:"link"};if("undefined"===typeof this.exact&&(e="/"===this.to||this.to===Object(this.to)&&"/"===this.to.path),this.to){let i=this.activeClass,r=this.exactActiveClass||i;this.proxyClass&&(i=`${i} ${this.proxyClass}`.trim(),r=`${r} ${this.proxyClass}`.trim()),t=this.nuxt?"nuxt-link":"router-link",Object.assign(n.props,{to:this.to,exact:e,exactPath:this.exactPath,activeClass:i,exactActiveClass:r,append:this.append,replace:this.replace})}else t=(this.href?"a":this.tag)||"div","a"===t&&this.href&&(n.attrs.href=this.href);return this.target&&(n.attrs.target=this.target),{tag:t,data:n}},onRouteChange(){if(!this.to||!this.$refs.link||!this.$route)return;const t=`${this.activeClass||""} ${this.proxyClass||""}`.trim(),e=`${this.exactActiveClass||""} ${this.proxyClass||""}`.trim()||t,n="_vnode.data.class."+(this.exact?e:t);this.$nextTick((()=>{!(0,s.vO)(this.$refs.link,n)===this.isActive&&this.toggle()}))},toggle(){this.isActive=!this.isActive}}})},4338:function(t,e,n){"use strict";var i=n(144);e["Z"]=i.ZP.extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium(){return Boolean(!this.xSmall&&!this.small&&!this.large&&!this.xLarge)},sizeableClasses(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}})},9131:function(t,e,n){"use strict";var i=n(144);e["Z"]=i.ZP.extend({name:"ssr-bootable",data:()=>({isBooted:!1}),mounted(){window.requestAnimationFrame((()=>{this.$el.setAttribute("data-booted","true"),this.isBooted=!0}))}})},6669:function(t,e,n){"use strict";n.d(e,{X:function(){return s}});var i=n(144);const r=i.ZP.extend().extend({name:"themeable",provide(){return{theme:this.themeableProvide}},inject:{theme:{default:{isDark:!1}}},props:{dark:{type:Boolean,default:null},light:{type:Boolean,default:null}},data(){return{themeableProvide:{isDark:!1}}},computed:{appIsDark(){return this.$vuetify.theme.dark||!1},isDark(){return!0===this.dark||!0!==this.light&&this.theme.isDark},themeClasses(){return{"theme--dark":this.isDark,"theme--light":!this.isDark}},rootIsDark(){return!0===this.dark||!0!==this.light&&this.appIsDark},rootThemeClasses(){return{"theme--dark":this.rootIsDark,"theme--light":!this.rootIsDark}}},watch:{isDark:{handler(t,e){t!==e&&(this.themeableProvide.isDark=this.isDark)},immediate:!0}}});function s(t){const e={...t.props,...t.injections},n=r.options.computed.isDark.call(e);return r.options.computed.themeClasses.call({isDark:n})}e["Z"]=r},1444:function(t,e,n){"use strict";n.d(e,{d:function(){return r}});var i=n(144);function r(t="value",e="input"){return i.ZP.extend({name:"toggleable",model:{prop:t,event:e},props:{[t]:{required:!1}},data(){return{isActive:!!this[t]}},watch:{[t](t){this.isActive=!!t},isActive(n){!!n!==this[t]&&this.$emit(e,n)}}})}const s=r();e["Z"]=s},937:function(t,e,n){"use strict";n.d(e,{I4:function(){return o},NA:function(){return r},hq:function(){return a},jx:function(){return s}});n(1703);var i=n(4101);function r(t){return!!t&&!!t.match(/^(#|var\(--|(rgb|hsl)a?\()/)}function s(t){let e;if("number"===typeof t)e=t;else{if("string"!==typeof t)throw new TypeError(`Colors can only be numbers or strings, recieved ${null==t?t:t.constructor.name} instead`);{let n="#"===t[0]?t.substring(1):t;3===n.length&&(n=n.split("").map((t=>t+t)).join("")),6!==n.length&&(0,i.Kd)(`'${t}' is not a valid rgb color`),e=parseInt(n,16)}}return e<0?((0,i.Kd)(`Colors cannot be negative: '${t}'`),e=0):(e>16777215||isNaN(e))&&((0,i.Kd)(`'${t}' is not a valid rgb color`),e=16777215),e}function o(t){let e=t.toString(16);return e.length<6&&(e="0".repeat(6-e.length)+e),"#"+e}function a(t){return o(s(t))}},4101:function(t,e,n){"use strict";n.d(e,{Jk:function(){return l},Kd:function(){return s},N6:function(){return o},fK:function(){return a}});n(6699);var i=n(8864);function r(t,e,n){if(!i.Z.config.silent){if(n&&(e={_isVue:!0,$parent:n,$options:e}),e){if(e.$_alreadyWarned=e.$_alreadyWarned||[],e.$_alreadyWarned.includes(t))return;e.$_alreadyWarned.push(t)}return`[Vuetify] ${t}`+(e?d(e):"")}}function s(t,e,n){const i=r(t,e,n);null!=i&&console.warn(i)}function o(t,e,n){const i=r(t,e,n);null!=i&&console.error(i)}function a(t,e,n,i){o(`[BREAKING] '${t}' has been removed, use '${e}' instead. For more information, see the upgrade guide https://github.com/vuetifyjs/vuetify/releases/tag/v2.0.0#user-content-upgrade-guide`,n,i)}function l(t,e,n){s(`[REMOVED] '${t}' has been removed. You can safely omit it.`,e,n)}const c=/(?:^|[-_])(\w)/g,h=t=>t.replace(c,(t=>t.toUpperCase())).replace(/[-_]/g,"");function u(t,e){if(t.$root===t)return"<Root>";const n="function"===typeof t&&null!=t.cid?t.options:t._isVue?t.$options||t.constructor.options:t||{};let i=n.name||n._componentTag;const r=n.__file;if(!i&&r){const t=r.match(/([^/\\]+)\.vue$/);i=t&&t[1]}return(i?`<${h(i)}>`:"<Anonymous>")+(r&&!1!==e?` at ${r}`:"")}function d(t){if(t._isVue&&t.$parent){const e=[];let n=0;while(t){if(e.length>0){const i=e[e.length-1];if(i.constructor===t.constructor){n++,t=t.$parent;continue}n>0&&(e[e.length-1]=[i,n],n=0)}e.push(t),t=t.$parent}return"\n\nfound in\n\n"+e.map(((t,e)=>`${0===e?"---\x3e ":" ".repeat(5+2*e)}${Array.isArray(t)?`${u(t[0])}... (${t[1]} recursive calls)`:u(t)}`)).join("\n")}return`\n\n(found in ${u(t)})`}},8856:function(t,e,n){"use strict";function i(t){if("function"!==typeof t.getRootNode){while(t.parentNode)t=t.parentNode;return t!==document?null:document}const e=t.getRootNode();return e!==document&&e.getRootNode({composed:!0})!==document?null:e}n.d(e,{e:function(){return i}})},5352:function(t,e,n){"use strict";n.d(e,{Do:function(){return g},Ee:function(){return k},GL:function(){return f},Ji:function(){return r},KK:function(){return u},RB:function(){return v},TI:function(){return C},XP:function(){return y},_A:function(){return b},iZ:function(){return I},jC:function(){return w},ji:function(){return d},kb:function(){return p},lj:function(){return a},qh:function(){return s},qw:function(){return l},sp:function(){return S},uZ:function(){return T},vO:function(){return h},vZ:function(){return c},z9:function(){return E}});var i=n(144);function r(t,e="div",n){return i.ZP.extend({name:n||t.replace(/__/g,"-"),functional:!0,props:{tag:{type:String,default:e}},render(e,{data:n,props:i,children:r}){return n.staticClass=`${t} ${n.staticClass||""}`.trim(),e(i.tag,n,r)}})}function s(t,e,n,i=!1){const r=s=>{n(s),t.removeEventListener(e,r,i)};t.addEventListener(e,r,i)}let o=!1;try{if("undefined"!==typeof window){const t=Object.defineProperty({},"passive",{get:()=>{o=!0}});window.addEventListener("testListener",t,t),window.removeEventListener("testListener",t,t)}}catch(x){console.warn(x)}function a(t,e,n,i){t.addEventListener(e,n,!!o&&i)}function l(t,e,n){const i=e.length-1;if(i<0)return void 0===t?n:t;for(let r=0;r<i;r++){if(null==t)return n;t=t[e[r]]}return null==t||void 0===t[e[i]]?n:t[e[i]]}function c(t,e){if(t===e)return!0;if(t instanceof Date&&e instanceof Date&&t.getTime()!==e.getTime())return!1;if(t!==Object(t)||e!==Object(e))return!1;const n=Object.keys(t);return n.length===Object.keys(e).length&&n.every((n=>c(t[n],e[n])))}function h(t,e,n){return null!=t&&e&&"string"===typeof e?void 0!==t[e]?t[e]:(e=e.replace(/\[(\w+)\]/g,".$1"),e=e.replace(/^\./,""),l(t,e.split("."),n)):n}function u(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return 0;const e=+window.getComputedStyle(t).getPropertyValue("z-index");return e||u(t.parentNode)}function d(t,e){const n={};for(let i=0;i<e.length;i++){const r=e[i];"undefined"!==typeof t[r]&&(n[r]=t[r])}return n}function p(t,e="px"){return null==t||""===t?void 0:isNaN(+t)?String(t):`${Number(t)}${e}`}function f(t){return(t||"").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function m(t){return null!==t&&"object"===typeof t}const g=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});function v(t,e){const n=t.$vuetify.icons.component;if(e.startsWith("$")){const n=`$vuetify.icons.values.${e.split("$").pop().split(".").pop()}`,i=h(t,n,e);if("string"!==typeof i)return i;e=i}return null==n?e:{component:n,props:{icon:e}}}function y(t){return Object.keys(t)}const _=/-(\w)/g,b=t=>t.replace(_,((t,e)=>e?e.toUpperCase():""));function w(t){return t.charAt(0).toUpperCase()+t.slice(1)}function C(t){return null!=t?Array.isArray(t)?t:[t]:[]}function S(t,e,n){return t.$slots.hasOwnProperty(e)&&t.$scopedSlots.hasOwnProperty(e)&&t.$scopedSlots[e].name?n?"v-slot":"scoped":t.$slots.hasOwnProperty(e)?"normal":t.$scopedSlots.hasOwnProperty(e)?"scoped":void 0}function E(t,e="default",n,i=!1){return t.$scopedSlots.hasOwnProperty(e)?t.$scopedSlots[e](n instanceof Function?n():n):!t.$slots.hasOwnProperty(e)||n&&!i?void 0:t.$slots[e]}function T(t,e=0,n=1){return Math.max(e,Math.min(n,t))}function k(t={},e={}){for(const n in e){const i=t[n],r=e[n];m(i)&&m(r)?t[n]=k(i,r):t[n]=r}return t}function I(t){if(t.composedPath)return t.composedPath();const e=[];let n=t.target;while(n){if(e.push(n),"HTML"===n.tagName)return e.push(document),e.push(window),e;n=n.parentElement}return e}},1767:function(t,e,n){"use strict";n.d(e,{ZP:function(){return o}});var i=n(5352);const r={styleList:/;(?![^(]*\))/g,styleProp:/:(.*)/};function s(t){const e={};for(const n of t.split(r.styleList)){let[t,s]=n.split(r.styleProp);t=t.trim(),t&&("string"===typeof s&&(s=s.trim()),e[(0,i._A)(t)]=s)}return e}function o(){const t={};let e,n=arguments.length;while(n--)for(e of Object.keys(arguments[n]))switch(e){case"class":case"directives":arguments[n][e]&&(t[e]=l(t[e],arguments[n][e]));break;case"style":arguments[n][e]&&(t[e]=a(t[e],arguments[n][e]));break;case"staticClass":if(!arguments[n][e])break;void 0===t[e]&&(t[e]=""),t[e]&&(t[e]+=" "),t[e]+=arguments[n][e].trim();break;case"on":case"nativeOn":arguments[n][e]&&(t[e]=c(t[e],arguments[n][e]));break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[n][e])break;t[e]||(t[e]={}),t[e]={...arguments[n][e],...t[e]};break;default:t[e]||(t[e]=arguments[n][e])}return t}function a(t,e){return t?e?(t=(0,i.TI)("string"===typeof t?s(t):t),t.concat("string"===typeof e?s(e):e)):t:e}function l(t,e){return e?t&&t?(0,i.TI)(t).concat(e):e:t}function c(...t){if(!t[0])return t[1];if(!t[1])return t[0];const e={};for(let n=2;n--;){const i=t[n];for(const t in i)i[t]&&(e[t]?e[t]=[].concat(i[t],e[t]):e[t]=i[t])}return e}},7678:function(t,e,n){"use strict";n.d(e,{Z:function(){return r}});var i=n(144);function r(...t){return i.ZP.extend({mixins:t})}},8345:function(t,e){"use strict";
/*!
  * vue-router v3.5.4
  * (c) 2022 Evan You
  * @license MIT
  */function n(t,e){for(var n in e)t[n]=e[n];return t}var i=/[!'()*]/g,r=function(t){return"%"+t.charCodeAt(0).toString(16)},s=/%2C/g,o=function(t){return encodeURIComponent(t).replace(i,r).replace(s,",")};function a(t){try{return decodeURIComponent(t)}catch(e){0}return t}function l(t,e,n){void 0===e&&(e={});var i,r=n||h;try{i=r(t||"")}catch(a){i={}}for(var s in e){var o=e[s];i[s]=Array.isArray(o)?o.map(c):c(o)}return i}var c=function(t){return null==t||"object"===typeof t?t:String(t)};function h(t){var e={};return t=t.trim().replace(/^(\?|#|&)/,""),t?(t.split("&").forEach((function(t){var n=t.replace(/\+/g," ").split("="),i=a(n.shift()),r=n.length>0?a(n.join("=")):null;void 0===e[i]?e[i]=r:Array.isArray(e[i])?e[i].push(r):e[i]=[e[i],r]})),e):e}function u(t){var e=t?Object.keys(t).map((function(e){var n=t[e];if(void 0===n)return"";if(null===n)return o(e);if(Array.isArray(n)){var i=[];return n.forEach((function(t){void 0!==t&&(null===t?i.push(o(e)):i.push(o(e)+"="+o(t)))})),i.join("&")}return o(e)+"="+o(n)})).filter((function(t){return t.length>0})).join("&"):null;return e?"?"+e:""}var d=/\/?$/;function p(t,e,n,i){var r=i&&i.options.stringifyQuery,s=e.query||{};try{s=f(s)}catch(a){}var o={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:s,params:e.params||{},fullPath:v(e,r),matched:t?g(t):[]};return n&&(o.redirectedFrom=v(n,r)),Object.freeze(o)}function f(t){if(Array.isArray(t))return t.map(f);if(t&&"object"===typeof t){var e={};for(var n in t)e[n]=f(t[n]);return e}return t}var m=p(null,{path:"/"});function g(t){var e=[];while(t)e.unshift(t),t=t.parent;return e}function v(t,e){var n=t.path,i=t.query;void 0===i&&(i={});var r=t.hash;void 0===r&&(r="");var s=e||u;return(n||"/")+s(i)+r}function y(t,e,n){return e===m?t===e:!!e&&(t.path&&e.path?t.path.replace(d,"")===e.path.replace(d,"")&&(n||t.hash===e.hash&&_(t.query,e.query)):!(!t.name||!e.name)&&(t.name===e.name&&(n||t.hash===e.hash&&_(t.query,e.query)&&_(t.params,e.params))))}function _(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var n=Object.keys(t).sort(),i=Object.keys(e).sort();return n.length===i.length&&n.every((function(n,r){var s=t[n],o=i[r];if(o!==n)return!1;var a=e[n];return null==s||null==a?s===a:"object"===typeof s&&"object"===typeof a?_(s,a):String(s)===String(a)}))}function b(t,e){return 0===t.path.replace(d,"/").indexOf(e.path.replace(d,"/"))&&(!e.hash||t.hash===e.hash)&&w(t.query,e.query)}function w(t,e){for(var n in e)if(!(n in t))return!1;return!0}function C(t){for(var e=0;e<t.matched.length;e++){var n=t.matched[e];for(var i in n.instances){var r=n.instances[i],s=n.enteredCbs[i];if(r&&s){delete n.enteredCbs[i];for(var o=0;o<s.length;o++)r._isBeingDestroyed||s[o](r)}}}}var S={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var i=e.props,r=e.children,s=e.parent,o=e.data;o.routerView=!0;var a=s.$createElement,l=i.name,c=s.$route,h=s._routerViewCache||(s._routerViewCache={}),u=0,d=!1;while(s&&s._routerRoot!==s){var p=s.$vnode?s.$vnode.data:{};p.routerView&&u++,p.keepAlive&&s._directInactive&&s._inactive&&(d=!0),s=s.$parent}if(o.routerViewDepth=u,d){var f=h[l],m=f&&f.component;return m?(f.configProps&&E(m,o,f.route,f.configProps),a(m,o,r)):a()}var g=c.matched[u],v=g&&g.components[l];if(!g||!v)return h[l]=null,a();h[l]={component:v},o.registerRouteInstance=function(t,e){var n=g.instances[l];(e&&n!==t||!e&&n===t)&&(g.instances[l]=e)},(o.hook||(o.hook={})).prepatch=function(t,e){g.instances[l]=e.componentInstance},o.hook.init=function(t){t.data.keepAlive&&t.componentInstance&&t.componentInstance!==g.instances[l]&&(g.instances[l]=t.componentInstance),C(c)};var y=g.props&&g.props[l];return y&&(n(h[l],{route:c,configProps:y}),E(v,o,c,y)),a(v,o,r)}};function E(t,e,i,r){var s=e.props=T(i,r);if(s){s=e.props=n({},s);var o=e.attrs=e.attrs||{};for(var a in s)t.props&&a in t.props||(o[a]=s[a],delete s[a])}}function T(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0;default:0}}function k(t,e,n){var i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;var r=e.split("/");n&&r[r.length-1]||r.pop();for(var s=t.replace(/^\//,"").split("/"),o=0;o<s.length;o++){var a=s[o];".."===a?r.pop():"."!==a&&r.push(a)}return""!==r[0]&&r.unshift(""),r.join("/")}function I(t){var e="",n="",i=t.indexOf("#");i>=0&&(e=t.slice(i),t=t.slice(0,i));var r=t.indexOf("?");return r>=0&&(n=t.slice(r+1),t=t.slice(0,r)),{path:t,query:n,hash:e}}function x(t){return t.replace(/\/(?:\s*\/)+/g,"/")}var O=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},A=G,P=D,N=M,L=B,R=K,$=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function D(t,e){var n,i=[],r=0,s=0,o="",a=e&&e.delimiter||"/";while(null!=(n=$.exec(t))){var l=n[0],c=n[1],h=n.index;if(o+=t.slice(s,h),s=h+l.length,c)o+=c[1];else{var u=t[s],d=n[2],p=n[3],f=n[4],m=n[5],g=n[6],v=n[7];o&&(i.push(o),o="");var y=null!=d&&null!=u&&u!==d,_="+"===g||"*"===g,b="?"===g||"*"===g,w=n[2]||a,C=f||m;i.push({name:p||r++,prefix:d||"",delimiter:w,optional:b,repeat:_,partial:y,asterisk:!!v,pattern:C?U(C):v?".*":"[^"+V(w)+"]+?"})}}return s<t.length&&(o+=t.substr(s)),o&&i.push(o),i}function M(t,e){return B(D(t,e),e)}function F(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function j(t){return encodeURI(t).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function B(t,e){for(var n=new Array(t.length),i=0;i<t.length;i++)"object"===typeof t[i]&&(n[i]=new RegExp("^(?:"+t[i].pattern+")$",H(e)));return function(e,i){for(var r="",s=e||{},o=i||{},a=o.pretty?F:encodeURIComponent,l=0;l<t.length;l++){var c=t[l];if("string"!==typeof c){var h,u=s[c.name];if(null==u){if(c.optional){c.partial&&(r+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(O(u)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(u)+"`");if(0===u.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var d=0;d<u.length;d++){if(h=a(u[d]),!n[l].test(h))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(h)+"`");r+=(0===d?c.prefix:c.delimiter)+h}}else{if(h=c.asterisk?j(u):a(u),!n[l].test(h))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+h+'"');r+=c.prefix+h}}else r+=c}return r}}function V(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function U(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function z(t,e){return t.keys=e,t}function H(t){return t&&t.sensitive?"":"i"}function q(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var i=0;i<n.length;i++)e.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return z(t,e)}function W(t,e,n){for(var i=[],r=0;r<t.length;r++)i.push(G(t[r],e,n).source);var s=new RegExp("(?:"+i.join("|")+")",H(n));return z(s,e)}function Z(t,e,n){return K(D(t,n),e,n)}function K(t,e,n){O(e)||(n=e||n,e=[]),n=n||{};for(var i=n.strict,r=!1!==n.end,s="",o=0;o<t.length;o++){var a=t[o];if("string"===typeof a)s+=V(a);else{var l=V(a.prefix),c="(?:"+a.pattern+")";e.push(a),a.repeat&&(c+="(?:"+l+c+")*"),c=a.optional?a.partial?l+"("+c+")?":"(?:"+l+"("+c+"))?":l+"("+c+")",s+=c}}var h=V(n.delimiter||"/"),u=s.slice(-h.length)===h;return i||(s=(u?s.slice(0,-h.length):s)+"(?:"+h+"(?=$))?"),s+=r?"$":i&&u?"":"(?="+h+"|$)",z(new RegExp("^"+s,H(n)),e)}function G(t,e,n){return O(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?q(t,e):O(t)?W(t,e,n):Z(t,e,n)}A.parse=P,A.compile=N,A.tokensToFunction=L,A.tokensToRegExp=R;var Y=Object.create(null);function X(t,e,n){e=e||{};try{var i=Y[t]||(Y[t]=A.compile(t));return"string"===typeof e.pathMatch&&(e[0]=e.pathMatch),i(e,{pretty:!0})}catch(r){return""}finally{delete e[0]}}function J(t,e,i,r){var s="string"===typeof t?{path:t}:t;if(s._normalized)return s;if(s.name){s=n({},t);var o=s.params;return o&&"object"===typeof o&&(s.params=n({},o)),s}if(!s.path&&s.params&&e){s=n({},s),s._normalized=!0;var a=n(n({},e.params),s.params);if(e.name)s.name=e.name,s.params=a;else if(e.matched.length){var c=e.matched[e.matched.length-1].path;s.path=X(c,a,"path "+e.path)}else 0;return s}var h=I(s.path||""),u=e&&e.path||"/",d=h.path?k(h.path,u,i||s.append):u,p=l(h.query,s.query,r&&r.options.parseQuery),f=s.hash||h.hash;return f&&"#"!==f.charAt(0)&&(f="#"+f),{_normalized:!0,path:d,query:p,hash:f}}var Q,tt=[String,Object],et=[String,Array],nt=function(){},it={name:"RouterLink",props:{to:{type:tt,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:et,default:"click"}},render:function(t){var e=this,i=this.$router,r=this.$route,s=i.resolve(this.to,r,this.append),o=s.location,a=s.route,l=s.href,c={},h=i.options.linkActiveClass,u=i.options.linkExactActiveClass,d=null==h?"router-link-active":h,f=null==u?"router-link-exact-active":u,m=null==this.activeClass?d:this.activeClass,g=null==this.exactActiveClass?f:this.exactActiveClass,v=a.redirectedFrom?p(null,J(a.redirectedFrom),null,i):a;c[g]=y(r,v,this.exactPath),c[m]=this.exact||this.exactPath?c[g]:b(r,v);var _=c[g]?this.ariaCurrentValue:null,w=function(t){rt(t)&&(e.replace?i.replace(o,nt):i.push(o,nt))},C={click:rt};Array.isArray(this.event)?this.event.forEach((function(t){C[t]=w})):C[this.event]=w;var S={class:c},E=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:l,route:a,navigate:w,isActive:c[m],isExactActive:c[g]});if(E){if(1===E.length)return E[0];if(E.length>1||!E.length)return 0===E.length?t():t("span",{},E)}if("a"===this.tag)S.on=C,S.attrs={href:l,"aria-current":_};else{var T=st(this.$slots.default);if(T){T.isStatic=!1;var k=T.data=n({},T.data);for(var I in k.on=k.on||{},k.on){var x=k.on[I];I in C&&(k.on[I]=Array.isArray(x)?x:[x])}for(var O in C)O in k.on?k.on[O].push(C[O]):k.on[O]=w;var A=T.data.attrs=n({},T.data.attrs);A.href=l,A["aria-current"]=_}else S.on=C}return t(this.tag,S,this.$slots.default)}};function rt(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function st(t){if(t)for(var e,n=0;n<t.length;n++){if(e=t[n],"a"===e.tag)return e;if(e.children&&(e=st(e.children)))return e}}function ot(t){if(!ot.installed||Q!==t){ot.installed=!0,Q=t;var e=function(t){return void 0!==t},n=function(t,n){var i=t.$options._parentVnode;e(i)&&e(i=i.data)&&e(i=i.registerRouteInstance)&&i(t,n)};t.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("RouterView",S),t.component("RouterLink",it);var i=t.config.optionMergeStrategies;i.beforeRouteEnter=i.beforeRouteLeave=i.beforeRouteUpdate=i.created}}var at="undefined"!==typeof window;function lt(t,e,n,i,r){var s=e||[],o=n||Object.create(null),a=i||Object.create(null);t.forEach((function(t){ct(s,o,a,t,r)}));for(var l=0,c=s.length;l<c;l++)"*"===s[l]&&(s.push(s.splice(l,1)[0]),c--,l--);return{pathList:s,pathMap:o,nameMap:a}}function ct(t,e,n,i,r,s){var o=i.path,a=i.name;var l=i.pathToRegexpOptions||{},c=ut(o,r,l.strict);"boolean"===typeof i.caseSensitive&&(l.sensitive=i.caseSensitive);var h={path:c,regex:ht(c,l),components:i.components||{default:i.component},alias:i.alias?"string"===typeof i.alias?[i.alias]:i.alias:[],instances:{},enteredCbs:{},name:a,parent:r,matchAs:s,redirect:i.redirect,beforeEnter:i.beforeEnter,meta:i.meta||{},props:null==i.props?{}:i.components?i.props:{default:i.props}};if(i.children&&i.children.forEach((function(i){var r=s?x(s+"/"+i.path):void 0;ct(t,e,n,i,h,r)})),e[h.path]||(t.push(h.path),e[h.path]=h),void 0!==i.alias)for(var u=Array.isArray(i.alias)?i.alias:[i.alias],d=0;d<u.length;++d){var p=u[d];0;var f={path:p,children:i.children};ct(t,e,n,f,r,h.path||"/")}a&&(n[a]||(n[a]=h))}function ht(t,e){var n=A(t,[],e);return n}function ut(t,e,n){return n||(t=t.replace(/\/$/,"")),"/"===t[0]||null==e?t:x(e.path+"/"+t)}function dt(t,e){var n=lt(t),i=n.pathList,r=n.pathMap,s=n.nameMap;function o(t){lt(t,i,r,s)}function a(t,e){var n="object"!==typeof t?s[t]:void 0;lt([e||t],i,r,s,n),n&&n.alias.length&&lt(n.alias.map((function(t){return{path:t,children:[e]}})),i,r,s,n)}function l(){return i.map((function(t){return r[t]}))}function c(t,n,o){var a=J(t,n,!1,e),l=a.name;if(l){var c=s[l];if(!c)return d(null,a);var h=c.regex.keys.filter((function(t){return!t.optional})).map((function(t){return t.name}));if("object"!==typeof a.params&&(a.params={}),n&&"object"===typeof n.params)for(var u in n.params)!(u in a.params)&&h.indexOf(u)>-1&&(a.params[u]=n.params[u]);return a.path=X(c.path,a.params,'named route "'+l+'"'),d(c,a,o)}if(a.path){a.params={};for(var p=0;p<i.length;p++){var f=i[p],m=r[f];if(pt(m.regex,a.path,a.params))return d(m,a,o)}}return d(null,a)}function h(t,n){var i=t.redirect,r="function"===typeof i?i(p(t,n,null,e)):i;if("string"===typeof r&&(r={path:r}),!r||"object"!==typeof r)return d(null,n);var o=r,a=o.name,l=o.path,h=n.query,u=n.hash,f=n.params;if(h=o.hasOwnProperty("query")?o.query:h,u=o.hasOwnProperty("hash")?o.hash:u,f=o.hasOwnProperty("params")?o.params:f,a){s[a];return c({_normalized:!0,name:a,query:h,hash:u,params:f},void 0,n)}if(l){var m=ft(l,t),g=X(m,f,'redirect route with path "'+m+'"');return c({_normalized:!0,path:g,query:h,hash:u},void 0,n)}return d(null,n)}function u(t,e,n){var i=X(n,e.params,'aliased route with path "'+n+'"'),r=c({_normalized:!0,path:i});if(r){var s=r.matched,o=s[s.length-1];return e.params=r.params,d(o,e)}return d(null,e)}function d(t,n,i){return t&&t.redirect?h(t,i||n):t&&t.matchAs?u(t,n,t.matchAs):p(t,n,i,e)}return{match:c,addRoute:a,getRoutes:l,addRoutes:o}}function pt(t,e,n){var i=e.match(t);if(!i)return!1;if(!n)return!0;for(var r=1,s=i.length;r<s;++r){var o=t.keys[r-1];o&&(n[o.name||"pathMatch"]="string"===typeof i[r]?a(i[r]):i[r])}return!0}function ft(t,e){return k(t,e.parent?e.parent.path:"/",!0)}var mt=at&&window.performance&&window.performance.now?window.performance:Date;function gt(){return mt.now().toFixed(3)}var vt=gt();function yt(){return vt}function _t(t){return vt=t}var bt=Object.create(null);function wt(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var t=window.location.protocol+"//"+window.location.host,e=window.location.href.replace(t,""),i=n({},window.history.state);return i.key=yt(),window.history.replaceState(i,"",e),window.addEventListener("popstate",Et),function(){window.removeEventListener("popstate",Et)}}function Ct(t,e,n,i){if(t.app){var r=t.options.scrollBehavior;r&&t.app.$nextTick((function(){var s=Tt(),o=r.call(t,e,n,i?s:null);o&&("function"===typeof o.then?o.then((function(t){Nt(t,s)})).catch((function(t){0})):Nt(o,s))}))}}function St(){var t=yt();t&&(bt[t]={x:window.pageXOffset,y:window.pageYOffset})}function Et(t){St(),t.state&&t.state.key&&_t(t.state.key)}function Tt(){var t=yt();if(t)return bt[t]}function kt(t,e){var n=document.documentElement,i=n.getBoundingClientRect(),r=t.getBoundingClientRect();return{x:r.left-i.left-e.x,y:r.top-i.top-e.y}}function It(t){return At(t.x)||At(t.y)}function xt(t){return{x:At(t.x)?t.x:window.pageXOffset,y:At(t.y)?t.y:window.pageYOffset}}function Ot(t){return{x:At(t.x)?t.x:0,y:At(t.y)?t.y:0}}function At(t){return"number"===typeof t}var Pt=/^#\d/;function Nt(t,e){var n="object"===typeof t;if(n&&"string"===typeof t.selector){var i=Pt.test(t.selector)?document.getElementById(t.selector.slice(1)):document.querySelector(t.selector);if(i){var r=t.offset&&"object"===typeof t.offset?t.offset:{};r=Ot(r),e=kt(i,r)}else It(t)&&(e=xt(t))}else n&&It(t)&&(e=xt(t));e&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:e.x,top:e.y,behavior:t.behavior}):window.scrollTo(e.x,e.y))}var Lt=at&&function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"function"===typeof window.history.pushState)}();function Rt(t,e){St();var i=window.history;try{if(e){var r=n({},i.state);r.key=yt(),i.replaceState(r,"",t)}else i.pushState({key:_t(gt())},"",t)}catch(s){window.location[e?"replace":"assign"](t)}}function $t(t){Rt(t,!0)}function Dt(t,e,n){var i=function(r){r>=t.length?n():t[r]?e(t[r],(function(){i(r+1)})):i(r+1)};i(0)}var Mt={redirected:2,aborted:4,cancelled:8,duplicated:16};function Ft(t,e){return Ut(t,e,Mt.redirected,'Redirected when going from "'+t.fullPath+'" to "'+Ht(e)+'" via a navigation guard.')}function jt(t,e){var n=Ut(t,e,Mt.duplicated,'Avoided redundant navigation to current location: "'+t.fullPath+'".');return n.name="NavigationDuplicated",n}function Bt(t,e){return Ut(t,e,Mt.cancelled,'Navigation cancelled from "'+t.fullPath+'" to "'+e.fullPath+'" with a new navigation.')}function Vt(t,e){return Ut(t,e,Mt.aborted,'Navigation aborted from "'+t.fullPath+'" to "'+e.fullPath+'" via a navigation guard.')}function Ut(t,e,n,i){var r=new Error(i);return r._isRouter=!0,r.from=t,r.to=e,r.type=n,r}var zt=["params","query","hash"];function Ht(t){if("string"===typeof t)return t;if("path"in t)return t.path;var e={};return zt.forEach((function(n){n in t&&(e[n]=t[n])})),JSON.stringify(e,null,2)}function qt(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function Wt(t,e){return qt(t)&&t._isRouter&&(null==e||t.type===e)}function Zt(t){return function(e,n,i){var r=!1,s=0,o=null;Kt(t,(function(t,e,n,a){if("function"===typeof t&&void 0===t.cid){r=!0,s++;var l,c=Jt((function(e){Xt(e)&&(e=e.default),t.resolved="function"===typeof e?e:Q.extend(e),n.components[a]=e,s--,s<=0&&i()})),h=Jt((function(t){var e="Failed to resolve async component "+a+": "+t;o||(o=qt(t)?t:new Error(e),i(o))}));try{l=t(c,h)}catch(d){h(d)}if(l)if("function"===typeof l.then)l.then(c,h);else{var u=l.component;u&&"function"===typeof u.then&&u.then(c,h)}}})),r||i()}}function Kt(t,e){return Gt(t.map((function(t){return Object.keys(t.components).map((function(n){return e(t.components[n],t.instances[n],t,n)}))})))}function Gt(t){return Array.prototype.concat.apply([],t)}var Yt="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag;function Xt(t){return t.__esModule||Yt&&"Module"===t[Symbol.toStringTag]}function Jt(t){var e=!1;return function(){var n=[],i=arguments.length;while(i--)n[i]=arguments[i];if(!e)return e=!0,t.apply(this,n)}}var Qt=function(t,e){this.router=t,this.base=te(e),this.current=m,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function te(t){if(!t)if(at){var e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^https?:\/\/[^\/]+/,"")}else t="/";return"/"!==t.charAt(0)&&(t="/"+t),t.replace(/\/$/,"")}function ee(t,e){var n,i=Math.max(t.length,e.length);for(n=0;n<i;n++)if(t[n]!==e[n])break;return{updated:e.slice(0,n),activated:e.slice(n),deactivated:t.slice(n)}}function ne(t,e,n,i){var r=Kt(t,(function(t,i,r,s){var o=ie(t,e);if(o)return Array.isArray(o)?o.map((function(t){return n(t,i,r,s)})):n(o,i,r,s)}));return Gt(i?r.reverse():r)}function ie(t,e){return"function"!==typeof t&&(t=Q.extend(t)),t.options[e]}function re(t){return ne(t,"beforeRouteLeave",oe,!0)}function se(t){return ne(t,"beforeRouteUpdate",oe)}function oe(t,e){if(e)return function(){return t.apply(e,arguments)}}function ae(t){return ne(t,"beforeRouteEnter",(function(t,e,n,i){return le(t,n,i)}))}function le(t,e,n){return function(i,r,s){return t(i,r,(function(t){"function"===typeof t&&(e.enteredCbs[n]||(e.enteredCbs[n]=[]),e.enteredCbs[n].push(t)),s(t)}))}}Qt.prototype.listen=function(t){this.cb=t},Qt.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},Qt.prototype.onError=function(t){this.errorCbs.push(t)},Qt.prototype.transitionTo=function(t,e,n){var i,r=this;try{i=this.router.match(t,this.current)}catch(o){throw this.errorCbs.forEach((function(t){t(o)})),o}var s=this.current;this.confirmTransition(i,(function(){r.updateRoute(i),e&&e(i),r.ensureURL(),r.router.afterHooks.forEach((function(t){t&&t(i,s)})),r.ready||(r.ready=!0,r.readyCbs.forEach((function(t){t(i)})))}),(function(t){n&&n(t),t&&!r.ready&&(Wt(t,Mt.redirected)&&s===m||(r.ready=!0,r.readyErrorCbs.forEach((function(e){e(t)}))))}))},Qt.prototype.confirmTransition=function(t,e,n){var i=this,r=this.current;this.pending=t;var s=function(t){!Wt(t)&&qt(t)&&(i.errorCbs.length?i.errorCbs.forEach((function(e){e(t)})):console.error(t)),n&&n(t)},o=t.matched.length-1,a=r.matched.length-1;if(y(t,r)&&o===a&&t.matched[o]===r.matched[a])return this.ensureURL(),t.hash&&Ct(this.router,r,t,!1),s(jt(r,t));var l=ee(this.current.matched,t.matched),c=l.updated,h=l.deactivated,u=l.activated,d=[].concat(re(h),this.router.beforeHooks,se(c),u.map((function(t){return t.beforeEnter})),Zt(u)),p=function(e,n){if(i.pending!==t)return s(Bt(r,t));try{e(t,r,(function(e){!1===e?(i.ensureURL(!0),s(Vt(r,t))):qt(e)?(i.ensureURL(!0),s(e)):"string"===typeof e||"object"===typeof e&&("string"===typeof e.path||"string"===typeof e.name)?(s(Ft(r,t)),"object"===typeof e&&e.replace?i.replace(e):i.push(e)):n(e)}))}catch(o){s(o)}};Dt(d,p,(function(){var n=ae(u),o=n.concat(i.router.resolveHooks);Dt(o,p,(function(){if(i.pending!==t)return s(Bt(r,t));i.pending=null,e(t),i.router.app&&i.router.app.$nextTick((function(){C(t)}))}))}))},Qt.prototype.updateRoute=function(t){this.current=t,this.cb&&this.cb(t)},Qt.prototype.setupListeners=function(){},Qt.prototype.teardown=function(){this.listeners.forEach((function(t){t()})),this.listeners=[],this.current=m,this.pending=null};var ce=function(t){function e(e,n){t.call(this,e,n),this._startLocation=he(this.base)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,i=Lt&&n;i&&this.listeners.push(wt());var r=function(){var n=t.current,r=he(t.base);t.current===m&&r===t._startLocation||t.transitionTo(r,(function(t){i&&Ct(e,t,n,!0)}))};window.addEventListener("popstate",r),this.listeners.push((function(){window.removeEventListener("popstate",r)}))}},e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,n){var i=this,r=this,s=r.current;this.transitionTo(t,(function(t){Rt(x(i.base+t.fullPath)),Ct(i.router,t,s,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var i=this,r=this,s=r.current;this.transitionTo(t,(function(t){$t(x(i.base+t.fullPath)),Ct(i.router,t,s,!1),e&&e(t)}),n)},e.prototype.ensureURL=function(t){if(he(this.base)!==this.current.fullPath){var e=x(this.base+this.current.fullPath);t?Rt(e):$t(e)}},e.prototype.getCurrentLocation=function(){return he(this.base)},e}(Qt);function he(t){var e=window.location.pathname,n=e.toLowerCase(),i=t.toLowerCase();return!t||n!==i&&0!==n.indexOf(x(i+"/"))||(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var ue=function(t){function e(e,n,i){t.call(this,e,n),i&&de(this.base)||pe()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,i=Lt&&n;i&&this.listeners.push(wt());var r=function(){var e=t.current;pe()&&t.transitionTo(fe(),(function(n){i&&Ct(t.router,n,e,!0),Lt||ve(n.fullPath)}))},s=Lt?"popstate":"hashchange";window.addEventListener(s,r),this.listeners.push((function(){window.removeEventListener(s,r)}))}},e.prototype.push=function(t,e,n){var i=this,r=this,s=r.current;this.transitionTo(t,(function(t){ge(t.fullPath),Ct(i.router,t,s,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var i=this,r=this,s=r.current;this.transitionTo(t,(function(t){ve(t.fullPath),Ct(i.router,t,s,!1),e&&e(t)}),n)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;fe()!==e&&(t?ge(e):ve(e))},e.prototype.getCurrentLocation=function(){return fe()},e}(Qt);function de(t){var e=he(t);if(!/^\/#/.test(e))return window.location.replace(x(t+"/#"+e)),!0}function pe(){var t=fe();return"/"===t.charAt(0)||(ve("/"+t),!1)}function fe(){var t=window.location.href,e=t.indexOf("#");return e<0?"":(t=t.slice(e+1),t)}function me(t){var e=window.location.href,n=e.indexOf("#"),i=n>=0?e.slice(0,n):e;return i+"#"+t}function ge(t){Lt?Rt(me(t)):window.location.hash=t}function ve(t){Lt?$t(me(t)):window.location.replace(me(t))}var ye=function(t){function e(e,n){t.call(this,e,n),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,n){var i=this;this.transitionTo(t,(function(t){i.stack=i.stack.slice(0,i.index+1).concat(t),i.index++,e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var i=this;this.transitionTo(t,(function(t){i.stack=i.stack.slice(0,i.index).concat(t),e&&e(t)}),n)},e.prototype.go=function(t){var e=this,n=this.index+t;if(!(n<0||n>=this.stack.length)){var i=this.stack[n];this.confirmTransition(i,(function(){var t=e.current;e.index=n,e.updateRoute(i),e.router.afterHooks.forEach((function(e){e&&e(i,t)}))}),(function(t){Wt(t,Mt.duplicated)&&(e.index=n)}))}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(Qt),_e=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=dt(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!Lt&&!1!==t.fallback,this.fallback&&(e="hash"),at||(e="abstract"),this.mode=e,e){case"history":this.history=new ce(this,t.base);break;case"hash":this.history=new ue(this,t.base,this.fallback);break;case"abstract":this.history=new ye(this,t.base);break;default:0}},be={currentRoute:{configurable:!0}};function we(t,e){return t.push(e),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function Ce(t,e,n){var i="hash"===n?"#"+e:e;return t?x(t+"/"+i):i}_e.prototype.match=function(t,e,n){return this.matcher.match(t,e,n)},be.currentRoute.get=function(){return this.history&&this.history.current},_e.prototype.init=function(t){var e=this;if(this.apps.push(t),t.$once("hook:destroyed",(function(){var n=e.apps.indexOf(t);n>-1&&e.apps.splice(n,1),e.app===t&&(e.app=e.apps[0]||null),e.app||e.history.teardown()})),!this.app){this.app=t;var n=this.history;if(n instanceof ce||n instanceof ue){var i=function(t){var i=n.current,r=e.options.scrollBehavior,s=Lt&&r;s&&"fullPath"in t&&Ct(e,t,i,!1)},r=function(t){n.setupListeners(),i(t)};n.transitionTo(n.getCurrentLocation(),r,r)}n.listen((function(t){e.apps.forEach((function(e){e._route=t}))}))}},_e.prototype.beforeEach=function(t){return we(this.beforeHooks,t)},_e.prototype.beforeResolve=function(t){return we(this.resolveHooks,t)},_e.prototype.afterEach=function(t){return we(this.afterHooks,t)},_e.prototype.onReady=function(t,e){this.history.onReady(t,e)},_e.prototype.onError=function(t){this.history.onError(t)},_e.prototype.push=function(t,e,n){var i=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise((function(e,n){i.history.push(t,e,n)}));this.history.push(t,e,n)},_e.prototype.replace=function(t,e,n){var i=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise((function(e,n){i.history.replace(t,e,n)}));this.history.replace(t,e,n)},_e.prototype.go=function(t){this.history.go(t)},_e.prototype.back=function(){this.go(-1)},_e.prototype.forward=function(){this.go(1)},_e.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map((function(t){return Object.keys(t.components).map((function(e){return t.components[e]}))}))):[]},_e.prototype.resolve=function(t,e,n){e=e||this.history.current;var i=J(t,e,n,this),r=this.match(i,e),s=r.redirectedFrom||r.fullPath,o=this.history.base,a=Ce(o,s,this.mode);return{location:i,route:r,href:a,normalizedTo:i,resolved:r}},_e.prototype.getRoutes=function(){return this.matcher.getRoutes()},_e.prototype.addRoute=function(t,e){this.matcher.addRoute(t,e),this.history.current!==m&&this.history.transitionTo(this.history.getCurrentLocation())},_e.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==m&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(_e.prototype,be),_e.install=ot,_e.version="3.5.4",_e.isNavigationFailure=Wt,_e.NavigationFailureType=Mt,_e.START_LOCATION=m,at&&window.Vue&&window.Vue.use(_e),e["Z"]=_e},144:function(t,e,n){"use strict";n.d(e,{ZP:function(){return Ki}});
/*!
 * Vue.js v2.7.5
 * (c) 2014-2022 Evan You
 * Released under the MIT License.
 */
var i=Object.freeze({}),r=Array.isArray;function s(t){return void 0===t||null===t}function o(t){return void 0!==t&&null!==t}function a(t){return!0===t}function l(t){return!1===t}function c(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function h(t){return"function"===typeof t}function u(t){return null!==t&&"object"===typeof t}var d=Object.prototype.toString;function p(t){return"[object Object]"===d.call(t)}function f(t){return"[object RegExp]"===d.call(t)}function m(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function g(t){return o(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function v(t){return null==t?"":Array.isArray(t)||p(t)&&t.toString===d?JSON.stringify(t,null,2):String(t)}function y(t){var e=parseFloat(t);return isNaN(e)?t:e}function _(t,e){for(var n=Object.create(null),i=t.split(","),r=0;r<i.length;r++)n[i[r]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}_("slot,component",!0);var b=_("key,ref,slot,slot-scope,is");function w(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var C=Object.prototype.hasOwnProperty;function S(t,e){return C.call(t,e)}function E(t){var e=Object.create(null);return function(n){var i=e[n];return i||(e[n]=t(n))}}var T=/-(\w)/g,k=E((function(t){return t.replace(T,(function(t,e){return e?e.toUpperCase():""}))})),I=E((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})),x=/\B([A-Z])/g,O=E((function(t){return t.replace(x,"-$1").toLowerCase()}));function A(t,e){function n(n){var i=arguments.length;return i?i>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function P(t,e){return t.bind(e)}var N=Function.prototype.bind?P:A;function L(t,e){e=e||0;var n=t.length-e,i=new Array(n);while(n--)i[n]=t[n+e];return i}function R(t,e){for(var n in e)t[n]=e[n];return t}function $(t){for(var e={},n=0;n<t.length;n++)t[n]&&R(e,t[n]);return e}function D(t,e,n){}var M=function(t,e,n){return!1},F=function(t){return t};function j(t,e){if(t===e)return!0;var n=u(t),i=u(e);if(!n||!i)return!n&&!i&&String(t)===String(e);try{var r=Array.isArray(t),s=Array.isArray(e);if(r&&s)return t.length===e.length&&t.every((function(t,n){return j(t,e[n])}));if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(r||s)return!1;var o=Object.keys(t),a=Object.keys(e);return o.length===a.length&&o.every((function(n){return j(t[n],e[n])}))}catch(l){return!1}}function B(t,e){for(var n=0;n<t.length;n++)if(j(t[n],e))return n;return-1}function V(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}function U(t,e){return t===e?0===t&&1/t!==1/e:t===t||e===e}var z="data-server-rendered",H=["component","directive","filter"],q=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch","renderTracked","renderTriggered"],W={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:M,isReservedAttr:M,isUnknownElement:M,getTagNamespace:D,parsePlatformTagName:F,mustUseProp:M,async:!0,_lifecycleHooks:q},Z=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function K(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function G(t,e,n,i){Object.defineProperty(t,e,{value:n,enumerable:!!i,writable:!0,configurable:!0})}var Y=new RegExp("[^".concat(Z.source,".$_\\d]"));function X(t){if(!Y.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var J="__proto__"in{},Q="undefined"!==typeof window,tt=Q&&window.navigator.userAgent.toLowerCase(),et=tt&&/msie|trident/.test(tt),nt=tt&&tt.indexOf("msie 9.0")>0,it=tt&&tt.indexOf("edge/")>0;tt&&tt.indexOf("android");var rt=tt&&/iphone|ipad|ipod|ios/.test(tt);tt&&/chrome\/\d+/.test(tt),tt&&/phantomjs/.test(tt);var st,ot=tt&&tt.match(/firefox\/(\d+)/),at={}.watch,lt=!1;if(Q)try{var ct={};Object.defineProperty(ct,"passive",{get:function(){lt=!0}}),window.addEventListener("test-passive",null,ct)}catch(Go){}var ht=function(){return void 0===st&&(st=!Q&&"undefined"!==typeof n.g&&(n.g["process"]&&"server"===n.g["process"].env.VUE_ENV)),st},ut=Q&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function dt(t){return"function"===typeof t&&/native code/.test(t.toString())}var pt,ft="undefined"!==typeof Symbol&&dt(Symbol)&&"undefined"!==typeof Reflect&&dt(Reflect.ownKeys);pt="undefined"!==typeof Set&&dt(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var mt=null;function gt(t){void 0===t&&(t=null),t||mt&&mt._scope.off(),mt=t,t&&t._scope.on()}var vt=function(){function t(t,e,n,i,r,s,o,a){this.tag=t,this.data=e,this.children=n,this.text=i,this.elm=r,this.ns=void 0,this.context=s,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=o,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1}return Object.defineProperty(t.prototype,"child",{get:function(){return this.componentInstance},enumerable:!1,configurable:!0}),t}(),yt=function(t){void 0===t&&(t="");var e=new vt;return e.text=t,e.isComment=!0,e};function _t(t){return new vt(void 0,void 0,void 0,String(t))}function bt(t){var e=new vt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var wt=0,Ct=function(){function t(){this.id=wt++,this.subs=[]}return t.prototype.addSub=function(t){this.subs.push(t)},t.prototype.removeSub=function(t){w(this.subs,t)},t.prototype.depend=function(e){t.target&&t.target.addDep(this)},t.prototype.notify=function(t){var e=this.subs.slice();for(var n=0,i=e.length;n<i;n++){e[n].update()}},t}();Ct.target=null;var St=[];function Et(t){St.push(t),Ct.target=t}function Tt(){St.pop(),Ct.target=St[St.length-1]}var kt=Array.prototype,It=Object.create(kt),xt=["push","pop","shift","unshift","splice","sort","reverse"];xt.forEach((function(t){var e=kt[t];G(It,t,(function(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];var r,s=e.apply(this,n),o=this.__ob__;switch(t){case"push":case"unshift":r=n;break;case"splice":r=n.slice(2);break}return r&&o.observeArray(r),o.dep.notify(),s}))}));var Ot=Object.getOwnPropertyNames(It),At={},Pt=!0;function Nt(t){Pt=t}var Lt={notify:D,depend:D,addSub:D,removeSub:D},Rt=function(){function t(t,e,n){if(void 0===e&&(e=!1),void 0===n&&(n=!1),this.value=t,this.shallow=e,this.mock=n,this.dep=n?Lt:new Ct,this.vmCount=0,G(t,"__ob__",this),r(t)){if(!n)if(J)t.__proto__=It;else for(var i=0,s=Ot.length;i<s;i++){var o=Ot[i];G(t,o,It[o])}e||this.observeArray(t)}else{var a=Object.keys(t);for(i=0;i<a.length;i++){o=a[i];Dt(t,o,At,void 0,e,n)}}}return t.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)$t(t[e],!1,this.mock)},t}();function $t(t,e,n){var i;if(!(!u(t)||zt(t)||t instanceof vt))return S(t,"__ob__")&&t.__ob__ instanceof Rt?i=t.__ob__:!Pt||!n&&ht()||!r(t)&&!p(t)||!Object.isExtensible(t)||t.__v_skip||(i=new Rt(t,e,n)),i}function Dt(t,e,n,i,s,o){var a=new Ct,l=Object.getOwnPropertyDescriptor(t,e);if(!l||!1!==l.configurable){var c=l&&l.get,h=l&&l.set;c&&!h||n!==At&&2!==arguments.length||(n=t[e]);var u=!s&&$t(n,!1,o);return Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=c?c.call(t):n;return Ct.target&&(a.depend(),u&&(u.dep.depend(),r(e)&&jt(e))),zt(e)&&!s?e.value:e},set:function(e){var i=c?c.call(t):n;if(U(i,e)){if(h)h.call(t,e);else{if(c)return;if(zt(i)&&!zt(e))return void(i.value=e);n=e}u=!s&&$t(e,!1,o),a.notify()}}}),a}}function Mt(t,e,n){if(!Ut(t)){var i=t.__ob__;return r(t)&&m(e)?(t.length=Math.max(t.length,e),t.splice(e,1,n),i&&!i.shallow&&i.mock&&$t(n,!1,!0),n):e in t&&!(e in Object.prototype)?(t[e]=n,n):t._isVue||i&&i.vmCount?n:i?(Dt(i.value,e,n,void 0,i.shallow,i.mock),i.dep.notify(),n):(t[e]=n,n)}}function Ft(t,e){if(r(t)&&m(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||Ut(t)||S(t,e)&&(delete t[e],n&&n.dep.notify())}}function jt(t){for(var e=void 0,n=0,i=t.length;n<i;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),r(e)&&jt(e)}function Bt(t){return Vt(t,!0),G(t,"__v_isShallow",!0),t}function Vt(t,e){if(!Ut(t)){$t(t,e,ht());0}}function Ut(t){return!(!t||!t.__v_isReadonly)}function zt(t){return!(!t||!0!==t.__v_isRef)}function Ht(t,e,n){Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:function(){var t=e[n];if(zt(t))return t.value;var i=t&&t.__ob__;return i&&i.dep.depend(),t},set:function(t){var i=e[n];zt(i)&&!zt(t)?i.value=t:e[n]=t}})}var qt="watcher";"".concat(qt," callback"),"".concat(qt," getter"),"".concat(qt," cleanup");var Wt;var Zt=function(){function t(t){void 0===t&&(t=!1),this.active=!0,this.effects=[],this.cleanups=[],!t&&Wt&&(this.parent=Wt,this.index=(Wt.scopes||(Wt.scopes=[])).push(this)-1)}return t.prototype.run=function(t){if(this.active){var e=Wt;try{return Wt=this,t()}finally{Wt=e}}else 0},t.prototype.on=function(){Wt=this},t.prototype.off=function(){Wt=this.parent},t.prototype.stop=function(t){if(this.active){var e=void 0,n=void 0;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].teardown();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(this.parent&&!t){var i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}},t}();function Kt(t,e){void 0===e&&(e=Wt),e&&e.active&&e.effects.push(t)}function Gt(t,e){if(mt){var n=mt._provided,i=mt.$parent&&mt.$parent._provided;i===n&&(n=mt._provided=Object.create(i)),n[t]=e}else 0}var Yt=E((function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var i="!"===t.charAt(0);return t=i?t.slice(1):t,{name:t,once:n,capture:i,passive:e}}));function Xt(t,e){function n(){var t=n.fns;if(!r(t))return Ke(t,null,arguments,e,"v-on handler");for(var i=t.slice(),s=0;s<i.length;s++)Ke(i[s],null,arguments,e,"v-on handler")}return n.fns=t,n}function Jt(t,e,n,i,r,o){var l,c,h,u;for(l in t)c=t[l],h=e[l],u=Yt(l),s(c)||(s(h)?(s(c.fns)&&(c=t[l]=Xt(c,o)),a(u.once)&&(c=t[l]=r(u.name,c,u.capture)),n(u.name,c,u.capture,u.passive,u.params)):c!==h&&(h.fns=c,t[l]=h));for(l in e)s(t[l])&&(u=Yt(l),i(u.name,e[l],u.capture))}function Qt(t,e,n){var i;t instanceof vt&&(t=t.data.hook||(t.data.hook={}));var r=t[e];function l(){n.apply(this,arguments),w(i.fns,l)}s(r)?i=Xt([l]):o(r.fns)&&a(r.merged)?(i=r,i.fns.push(l)):i=Xt([r,l]),i.merged=!0,t[e]=i}function te(t,e,n){var i=e.options.props;if(!s(i)){var r={},a=t.attrs,l=t.props;if(o(a)||o(l))for(var c in i){var h=O(c);ee(r,l,c,h,!0)||ee(r,a,c,h,!1)}return r}}function ee(t,e,n,i,r){if(o(e)){if(S(e,n))return t[n]=e[n],r||delete e[n],!0;if(S(e,i))return t[n]=e[i],r||delete e[i],!0}return!1}function ne(t){for(var e=0;e<t.length;e++)if(r(t[e]))return Array.prototype.concat.apply([],t);return t}function ie(t){return c(t)?[_t(t)]:r(t)?se(t):void 0}function re(t){return o(t)&&o(t.text)&&l(t.isComment)}function se(t,e){var n,i,l,h,u=[];for(n=0;n<t.length;n++)i=t[n],s(i)||"boolean"===typeof i||(l=u.length-1,h=u[l],r(i)?i.length>0&&(i=se(i,"".concat(e||"","_").concat(n)),re(i[0])&&re(h)&&(u[l]=_t(h.text+i[0].text),i.shift()),u.push.apply(u,i)):c(i)?re(h)?u[l]=_t(h.text+i):""!==i&&u.push(_t(i)):re(i)&&re(h)?u[l]=_t(h.text+i.text):(a(t._isVList)&&o(i.tag)&&s(i.key)&&o(e)&&(i.key="__vlist".concat(e,"_").concat(n,"__")),u.push(i)));return u}function oe(t,e){var n,i,s,a,l=null;if(r(t)||"string"===typeof t)for(l=new Array(t.length),n=0,i=t.length;n<i;n++)l[n]=e(t[n],n);else if("number"===typeof t)for(l=new Array(t),n=0;n<t;n++)l[n]=e(n+1,n);else if(u(t))if(ft&&t[Symbol.iterator]){l=[];var c=t[Symbol.iterator](),h=c.next();while(!h.done)l.push(e(h.value,l.length)),h=c.next()}else for(s=Object.keys(t),l=new Array(s.length),n=0,i=s.length;n<i;n++)a=s[n],l[n]=e(t[a],a,n);return o(l)||(l=[]),l._isVList=!0,l}function ae(t,e,n,i){var r,s=this.$scopedSlots[t];s?(n=n||{},i&&(n=R(R({},i),n)),r=s(n)||(h(e)?e():e)):r=this.$slots[t]||(h(e)?e():e);var o=n&&n.slot;return o?this.$createElement("template",{slot:o},r):r}function le(t){return wi(this.$options,"filters",t,!0)||F}function ce(t,e){return r(t)?-1===t.indexOf(e):t!==e}function he(t,e,n,i,r){var s=W.keyCodes[e]||n;return r&&i&&!W.keyCodes[e]?ce(r,i):s?ce(s,t):i?O(i)!==e:void 0===t}function ue(t,e,n,i,s){if(n)if(u(n)){r(n)&&(n=$(n));var o=void 0,a=function(r){if("class"===r||"style"===r||b(r))o=t;else{var a=t.attrs&&t.attrs.type;o=i||W.mustUseProp(e,a,r)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var l=k(r),c=O(r);if(!(l in o)&&!(c in o)&&(o[r]=n[r],s)){var h=t.on||(t.on={});h["update:".concat(r)]=function(t){n[r]=t}}};for(var l in n)a(l)}else;return t}function de(t,e){var n=this._staticTrees||(this._staticTrees=[]),i=n[t];return i&&!e||(i=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,this._c,this),fe(i,"__static__".concat(t),!1)),i}function pe(t,e,n){return fe(t,"__once__".concat(e).concat(n?"_".concat(n):""),!0),t}function fe(t,e,n){if(r(t))for(var i=0;i<t.length;i++)t[i]&&"string"!==typeof t[i]&&me(t[i],"".concat(e,"_").concat(i),n);else me(t,e,n)}function me(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function ge(t,e){if(e)if(p(e)){var n=t.on=t.on?R({},t.on):{};for(var i in e){var r=n[i],s=e[i];n[i]=r?[].concat(r,s):s}}else;return t}function ve(t,e,n,i){e=e||{$stable:!n};for(var s=0;s<t.length;s++){var o=t[s];r(o)?ve(o,e,n):o&&(o.proxy&&(o.fn.proxy=!0),e[o.key]=o.fn)}return i&&(e.$key=i),e}function ye(t,e){for(var n=0;n<e.length;n+=2){var i=e[n];"string"===typeof i&&i&&(t[e[n]]=e[n+1])}return t}function _e(t,e){return"string"===typeof t?e+t:t}function be(t){t._o=pe,t._n=y,t._s=v,t._l=oe,t._t=ae,t._q=j,t._i=B,t._m=de,t._f=le,t._k=he,t._b=ue,t._v=_t,t._e=yt,t._u=ve,t._g=ge,t._d=ye,t._p=_e}function we(t,e){if(!t||!t.length)return{};for(var n={},i=0,r=t.length;i<r;i++){var s=t[i],o=s.data;if(o&&o.attrs&&o.attrs.slot&&delete o.attrs.slot,s.context!==e&&s.fnContext!==e||!o||null==o.slot)(n.default||(n.default=[])).push(s);else{var a=o.slot,l=n[a]||(n[a]=[]);"template"===s.tag?l.push.apply(l,s.children||[]):l.push(s)}}for(var c in n)n[c].every(Ce)&&delete n[c];return n}function Ce(t){return t.isComment&&!t.asyncFactory||" "===t.text}function Se(t){return t.isComment&&t.asyncFactory}function Ee(t,e,n,r){var s,o=Object.keys(n).length>0,a=e?!!e.$stable:!o,l=e&&e.$key;if(e){if(e._normalized)return e._normalized;if(a&&r&&r!==i&&l===r.$key&&!o&&!r.$hasNormal)return r;for(var c in s={},e)e[c]&&"$"!==c[0]&&(s[c]=Te(t,n,c,e[c]))}else s={};for(var h in n)h in s||(s[h]=ke(n,h));return e&&Object.isExtensible(e)&&(e._normalized=s),G(s,"$stable",a),G(s,"$key",l),G(s,"$hasNormal",o),s}function Te(t,e,n,i){var s=function(){var e=mt;gt(t);var n=arguments.length?i.apply(null,arguments):i({});n=n&&"object"===typeof n&&!r(n)?[n]:ie(n);var s=n&&n[0];return gt(e),n&&(!s||1===n.length&&s.isComment&&!Se(s))?void 0:n};return i.proxy&&Object.defineProperty(e,n,{get:s,enumerable:!0,configurable:!0}),s}function ke(t,e){return function(){return t[e]}}function Ie(t){var e=t.$options,n=e.setup;if(n){var i=t._setupContext=xe(t);gt(t),Et();var r=Ke(n,null,[t._props||Bt({}),i],t,"setup");if(Tt(),gt(),h(r))e.render=r;else if(u(r))if(t._setupState=r,r.__sfc){var s=t._setupProxy={};for(var o in r)"__sfc"!==o&&Ht(s,r,o)}else for(var o in r)K(o)||Ht(t,r,o);else 0}}function xe(t){return{get attrs(){return Oe(t)},get slots(){return Ne(t)},emit:N(t.$emit,t),expose:function(e){e&&Object.keys(e).forEach((function(n){return Ht(t,e,n)}))}}}function Oe(t){if(!t._attrsProxy){var e=t._attrsProxy={};G(e,"_v_attr_proxy",!0),Ae(e,t.$attrs,i,t)}return t._attrsProxy}function Ae(t,e,n,i){var r=!1;for(var s in e)s in t?e[s]!==n[s]&&(r=!0):(r=!0,Pe(t,s,i));for(var s in t)s in e||(r=!0,delete t[s]);return r}function Pe(t,e,n){Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){return n.$attrs[e]}})}function Ne(t){return t._slotsProxy||Le(t._slotsProxy={},t.$scopedSlots),t._slotsProxy}function Le(t,e){for(var n in e)t[n]=e[n];for(var n in t)n in e||delete t[n]}function Re(t){t._vnode=null,t._staticTrees=null;var e=t.$options,n=t.$vnode=e._parentVnode,r=n&&n.context;t.$slots=we(e._renderChildren,r),t.$scopedSlots=i,t._c=function(e,n,i,r){return ze(t,e,n,i,r,!1)},t.$createElement=function(e,n,i,r){return ze(t,e,n,i,r,!0)};var s=n&&n.data;Dt(t,"$attrs",s&&s.attrs||i,null,!0),Dt(t,"$listeners",e._parentListeners||i,null,!0)}var $e=null;function De(t){be(t.prototype),t.prototype.$nextTick=function(t){return an(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,i=n.render,s=n._parentVnode;s&&(e.$scopedSlots=Ee(e.$parent,s.data.scopedSlots,e.$slots,e.$scopedSlots),e._slotsProxy&&Le(e._slotsProxy,e.$scopedSlots)),e.$vnode=s;try{gt(e),$e=e,t=i.call(e._renderProxy,e.$createElement)}catch(Go){Ze(Go,e,"render"),t=e._vnode}finally{$e=null,gt()}return r(t)&&1===t.length&&(t=t[0]),t instanceof vt||(t=yt()),t.parent=s,t}}function Me(t,e){return(t.__esModule||ft&&"Module"===t[Symbol.toStringTag])&&(t=t.default),u(t)?e.extend(t):t}function Fe(t,e,n,i,r){var s=yt();return s.asyncFactory=t,s.asyncMeta={data:e,context:n,children:i,tag:r},s}function je(t,e){if(a(t.error)&&o(t.errorComp))return t.errorComp;if(o(t.resolved))return t.resolved;var n=$e;if(n&&o(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),a(t.loading)&&o(t.loadingComp))return t.loadingComp;if(n&&!o(t.owners)){var i=t.owners=[n],r=!0,l=null,c=null;n.$on("hook:destroyed",(function(){return w(i,n)}));var h=function(t){for(var e=0,n=i.length;e<n;e++)i[e].$forceUpdate();t&&(i.length=0,null!==l&&(clearTimeout(l),l=null),null!==c&&(clearTimeout(c),c=null))},d=V((function(n){t.resolved=Me(n,e),r?i.length=0:h(!0)})),p=V((function(e){o(t.errorComp)&&(t.error=!0,h(!0))})),f=t(d,p);return u(f)&&(g(f)?s(t.resolved)&&f.then(d,p):g(f.component)&&(f.component.then(d,p),o(f.error)&&(t.errorComp=Me(f.error,e)),o(f.loading)&&(t.loadingComp=Me(f.loading,e),0===f.delay?t.loading=!0:l=setTimeout((function(){l=null,s(t.resolved)&&s(t.error)&&(t.loading=!0,h(!1))}),f.delay||200)),o(f.timeout)&&(c=setTimeout((function(){c=null,s(t.resolved)&&p(null)}),f.timeout)))),r=!1,t.loading?t.loadingComp:t.resolved}}function Be(t){if(r(t))for(var e=0;e<t.length;e++){var n=t[e];if(o(n)&&(o(n.componentOptions)||Se(n)))return n}}var Ve=1,Ue=2;function ze(t,e,n,i,s,o){return(r(n)||c(n))&&(s=i,i=n,n=void 0),a(o)&&(s=Ue),He(t,e,n,i,s)}function He(t,e,n,i,s){if(o(n)&&o(n.__ob__))return yt();if(o(n)&&o(n.is)&&(e=n.is),!e)return yt();var a,l;if(r(i)&&h(i[0])&&(n=n||{},n.scopedSlots={default:i[0]},i.length=0),s===Ue?i=ie(i):s===Ve&&(i=ne(i)),"string"===typeof e){var c=void 0;l=t.$vnode&&t.$vnode.ns||W.getTagNamespace(e),a=W.isReservedTag(e)?new vt(W.parsePlatformTagName(e),n,i,void 0,void 0,t):n&&n.pre||!o(c=wi(t.$options,"components",e))?new vt(e,n,i,void 0,void 0,t):ri(c,n,t,i,e)}else a=ri(e,n,t,i);return r(a)?a:o(a)?(o(l)&&qe(a,l),o(n)&&We(n),a):yt()}function qe(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),o(t.children))for(var i=0,r=t.children.length;i<r;i++){var l=t.children[i];o(l.tag)&&(s(l.ns)||a(n)&&"svg"!==l.tag)&&qe(l,e,n)}}function We(t){u(t.style)&&dn(t.style),u(t.class)&&dn(t.class)}function Ze(t,e,n){Et();try{if(e){var i=e;while(i=i.$parent){var r=i.$options.errorCaptured;if(r)for(var s=0;s<r.length;s++)try{var o=!1===r[s].call(i,t,e,n);if(o)return}catch(Go){Ge(Go,i,"errorCaptured hook")}}}Ge(t,e,n)}finally{Tt()}}function Ke(t,e,n,i,r){var s;try{s=n?t.apply(e,n):t.call(e),s&&!s._isVue&&g(s)&&!s._handled&&(s.catch((function(t){return Ze(t,i,r+" (Promise/async)")})),s._handled=!0)}catch(Go){Ze(Go,i,r)}return s}function Ge(t,e,n){if(W.errorHandler)try{return W.errorHandler.call(null,t,e,n)}catch(Go){Go!==t&&Ye(Go,null,"config.errorHandler")}Ye(t,e,n)}function Ye(t,e,n){if(!Q||"undefined"===typeof console)throw t;console.error(t)}var Xe,Je=!1,Qe=[],tn=!1;function en(){tn=!1;var t=Qe.slice(0);Qe.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&dt(Promise)){var nn=Promise.resolve();Xe=function(){nn.then(en),rt&&setTimeout(D)},Je=!0}else if(et||"undefined"===typeof MutationObserver||!dt(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())Xe="undefined"!==typeof setImmediate&&dt(setImmediate)?function(){setImmediate(en)}:function(){setTimeout(en,0)};else{var rn=1,sn=new MutationObserver(en),on=document.createTextNode(String(rn));sn.observe(on,{characterData:!0}),Xe=function(){rn=(rn+1)%2,on.data=String(rn)},Je=!0}function an(t,e){var n;if(Qe.push((function(){if(t)try{t.call(e)}catch(Go){Ze(Go,e,"nextTick")}else n&&n(e)})),tn||(tn=!0,Xe()),!t&&"undefined"!==typeof Promise)return new Promise((function(t){n=t}))}function ln(t){return function(e,n){if(void 0===n&&(n=mt),n)return cn(n,t,e)}}function cn(t,e,n){var i=t.$options;i[e]=pi(i[e],n)}ln("beforeMount"),ln("mounted"),ln("beforeUpdate"),ln("updated"),ln("beforeDestroy"),ln("destroyed"),ln("errorCaptured"),ln("activated"),ln("deactivated"),ln("serverPrefetch"),ln("renderTracked"),ln("renderTriggered");var hn="2.7.5";var un=new pt;function dn(t){return pn(t,un),un.clear(),t}function pn(t,e){var n,i,s=r(t);if(!(!s&&!u(t)||Object.isFrozen(t)||t instanceof vt)){if(t.__ob__){var o=t.__ob__.dep.id;if(e.has(o))return;e.add(o)}if(s){n=t.length;while(n--)pn(t[n],e)}else if(zt(t))pn(t.value,e);else{i=Object.keys(t),n=i.length;while(n--)pn(t[i[n]],e)}}}var fn,mn=0,gn=function(){function t(t,e,n,i,r){Kt(this,Wt||(t?t._scope:void 0)),(this.vm=t)&&r&&(t._watcher=this),i?(this.deep=!!i.deep,this.user=!!i.user,this.lazy=!!i.lazy,this.sync=!!i.sync,this.before=i.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++mn,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new pt,this.newDepIds=new pt,this.expression="",h(e)?this.getter=e:(this.getter=X(e),this.getter||(this.getter=D)),this.value=this.lazy?void 0:this.get()}return t.prototype.get=function(){var t;Et(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(Go){if(!this.user)throw Go;Ze(Go,e,'getter for watcher "'.concat(this.expression,'"'))}finally{this.deep&&dn(t),Tt(),this.cleanupDeps()}return t},t.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},t.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},t.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Zn(this)},t.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||u(t)||this.deep){var e=this.value;if(this.value=t,this.user){var n='callback for watcher "'.concat(this.expression,'"');Ke(this.cb,this.vm,[t,e],this.vm,n)}else this.cb.call(this.vm,t,e)}}},t.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},t.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},t.prototype.teardown=function(){if(this.vm&&!this.vm._isBeingDestroyed&&w(this.vm._scope.effects,this),this.active){var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1,this.onStop&&this.onStop()}},t}();function vn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&wn(t,e)}function yn(t,e){fn.$on(t,e)}function _n(t,e){fn.$off(t,e)}function bn(t,e){var n=fn;return function i(){var r=e.apply(null,arguments);null!==r&&n.$off(t,i)}}function wn(t,e,n){fn=t,Jt(e,n||{},yn,_n,bn,t),fn=void 0}function Cn(t){var e=/^hook:/;t.prototype.$on=function(t,n){var i=this;if(r(t))for(var s=0,o=t.length;s<o;s++)i.$on(t[s],n);else(i._events[t]||(i._events[t]=[])).push(n),e.test(t)&&(i._hasHookEvent=!0);return i},t.prototype.$once=function(t,e){var n=this;function i(){n.$off(t,i),e.apply(n,arguments)}return i.fn=e,n.$on(t,i),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(r(t)){for(var i=0,s=t.length;i<s;i++)n.$off(t[i],e);return n}var o,a=n._events[t];if(!a)return n;if(!e)return n._events[t]=null,n;var l=a.length;while(l--)if(o=a[l],o===e||o.fn===e){a.splice(l,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?L(n):n;for(var i=L(arguments,1),r='event handler for "'.concat(t,'"'),s=0,o=n.length;s<o;s++)Ke(n[s],e,i,e,r)}return e}}var Sn=null;function En(t){var e=Sn;return Sn=t,function(){Sn=e}}function Tn(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._provided=n?n._provided:Object.create(null),t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function kn(t){t.prototype._update=function(t,e){var n=this,i=n.$el,r=n._vnode,s=En(n);n._vnode=t,n.$el=r?n.__patch__(r,t):n.__patch__(n.$el,t,e,!1),s(),i&&(i.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Nn(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||w(e.$children,t),t._scope.stop(),t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Nn(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function In(t,e,n){var i;t.$el=e,t.$options.render||(t.$options.render=yt),Nn(t,"beforeMount"),i=function(){t._update(t._render(),n)};var r={before:function(){t._isMounted&&!t._isDestroyed&&Nn(t,"beforeUpdate")}};new gn(t,i,D,r,!0),n=!1;var s=t._preWatchers;if(s)for(var o=0;o<s.length;o++)s[o].run();return null==t.$vnode&&(t._isMounted=!0,Nn(t,"mounted")),t}function xn(t,e,n,r,s){var o=r.data.scopedSlots,a=t.$scopedSlots,l=!!(o&&!o.$stable||a!==i&&!a.$stable||o&&t.$scopedSlots.$key!==o.$key||!o&&t.$scopedSlots.$key),c=!!(s||t.$options._renderChildren||l),h=t.$vnode;t.$options._parentVnode=r,t.$vnode=r,t._vnode&&(t._vnode.parent=r),t.$options._renderChildren=s;var u=r.data.attrs||i;if(t._attrsProxy&&Ae(t._attrsProxy,u,h.data&&h.data.attrs||i,t)&&(c=!0),t.$attrs=u,t.$listeners=n||i,e&&t.$options.props){Nt(!1);for(var d=t._props,p=t.$options._propKeys||[],f=0;f<p.length;f++){var m=p[f],g=t.$options.props;d[m]=Ci(m,g,e,t)}Nt(!0),t.$options.propsData=e}n=n||i;var v=t.$options._parentListeners;t.$options._parentListeners=n,wn(t,n,v),c&&(t.$slots=we(s,r.context),t.$forceUpdate())}function On(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function An(t,e){if(e){if(t._directInactive=!1,On(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)An(t.$children[n]);Nn(t,"activated")}}function Pn(t,e){if((!e||(t._directInactive=!0,!On(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Pn(t.$children[n]);Nn(t,"deactivated")}}function Nn(t,e,n,i){void 0===i&&(i=!0),Et();var r=mt;i&&gt(t);var s=t.$options[e],o="".concat(e," hook");if(s)for(var a=0,l=s.length;a<l;a++)Ke(s[a],t,n||null,t,o);t._hasHookEvent&&t.$emit("hook:"+e),i&&gt(r),Tt()}var Ln=[],Rn=[],$n={},Dn=!1,Mn=!1,Fn=0;function jn(){Fn=Ln.length=Rn.length=0,$n={},Dn=Mn=!1}var Bn=0,Vn=Date.now;if(Q&&!et){var Un=window.performance;Un&&"function"===typeof Un.now&&Vn()>document.createEvent("Event").timeStamp&&(Vn=function(){return Un.now()})}function zn(){var t,e;for(Bn=Vn(),Mn=!0,Ln.sort((function(t,e){return t.id-e.id})),Fn=0;Fn<Ln.length;Fn++)t=Ln[Fn],t.before&&t.before(),e=t.id,$n[e]=null,t.run();var n=Rn.slice(),i=Ln.slice();jn(),Wn(n),Hn(i),ut&&W.devtools&&ut.emit("flush")}function Hn(t){var e=t.length;while(e--){var n=t[e],i=n.vm;i&&i._watcher===n&&i._isMounted&&!i._isDestroyed&&Nn(i,"updated")}}function qn(t){t._inactive=!1,Rn.push(t)}function Wn(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,An(t[e],!0)}function Zn(t){var e=t.id;if(null==$n[e]&&(t!==Ct.target||!t.noRecurse)){if($n[e]=!0,Mn){var n=Ln.length-1;while(n>Fn&&Ln[n].id>t.id)n--;Ln.splice(n+1,0,t)}else Ln.push(t);Dn||(Dn=!0,an(zn))}}function Kn(t){var e=t.$options.provide;if(e){var n=h(e)?e.call(t):e;if(!u(n))return;var i=ft?Reflect.ownKeys(n):Object.keys(n);gt(t);for(var r=0;r<i.length;r++)Gt(i[r],n[i[r]]);gt()}}function Gn(t){var e=Yn(t.$options.inject,t);e&&(Nt(!1),Object.keys(e).forEach((function(n){Dt(t,n,e[n])})),Nt(!0))}function Yn(t,e){if(t){for(var n=Object.create(null),i=ft?Reflect.ownKeys(t):Object.keys(t),r=0;r<i.length;r++){var s=i[r];if("__ob__"!==s){var o=t[s].from;if(o in e._provided)n[s]=e._provided[o];else if("default"in t[s]){var a=t[s].default;n[s]=h(a)?a.call(e):a}else 0}}return n}}function Xn(t,e,n,s,o){var l,c=this,h=o.options;S(s,"_uid")?(l=Object.create(s),l._original=s):(l=s,s=s._original);var u=a(h._compiled),d=!u;this.data=t,this.props=e,this.children=n,this.parent=s,this.listeners=t.on||i,this.injections=Yn(h.inject,s),this.slots=function(){return c.$slots||Ee(s,t.scopedSlots,c.$slots=we(n,s)),c.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Ee(s,t.scopedSlots,this.slots())}}),u&&(this.$options=h,this.$slots=this.slots(),this.$scopedSlots=Ee(s,t.scopedSlots,this.$slots)),h._scopeId?this._c=function(t,e,n,i){var o=ze(l,t,e,n,i,d);return o&&!r(o)&&(o.fnScopeId=h._scopeId,o.fnContext=s),o}:this._c=function(t,e,n,i){return ze(l,t,e,n,i,d)}}function Jn(t,e,n,s,a){var l=t.options,c={},h=l.props;if(o(h))for(var u in h)c[u]=Ci(u,h,e||i);else o(n.attrs)&&ti(c,n.attrs),o(n.props)&&ti(c,n.props);var d=new Xn(n,c,a,s,t),p=l.render.call(null,d._c,d);if(p instanceof vt)return Qn(p,n,d.parent,l,d);if(r(p)){for(var f=ie(p)||[],m=new Array(f.length),g=0;g<f.length;g++)m[g]=Qn(f[g],n,d.parent,l,d);return m}}function Qn(t,e,n,i,r){var s=bt(t);return s.fnContext=n,s.fnOptions=i,e.slot&&((s.data||(s.data={})).slot=e.slot),s}function ti(t,e){for(var n in e)t[k(n)]=e[n]}function ei(t){return t.name||t.__name||t._componentTag}be(Xn.prototype);var ni={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;ni.prepatch(n,n)}else{var i=t.componentInstance=si(t,Sn);i.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,i=e.componentInstance=t.componentInstance;xn(i,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,Nn(n,"mounted")),t.data.keepAlive&&(e._isMounted?qn(n):An(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Pn(e,!0):e.$destroy())}},ii=Object.keys(ni);function ri(t,e,n,i,r){if(!s(t)){var l=n.$options._base;if(u(t)&&(t=l.extend(t)),"function"===typeof t){var c;if(s(t.cid)&&(c=t,t=je(c,l),void 0===t))return Fe(c,e,n,i,r);e=e||{},Wi(t),o(e.model)&&li(t.options,e);var h=te(e,t,r);if(a(t.options.functional))return Jn(t,h,e,n,i);var d=e.on;if(e.on=e.nativeOn,a(t.options.abstract)){var p=e.slot;e={},p&&(e.slot=p)}oi(e);var f=ei(t.options)||r,m=new vt("vue-component-".concat(t.cid).concat(f?"-".concat(f):""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:h,listeners:d,tag:r,children:i},c);return m}}}function si(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},i=t.data.inlineTemplate;return o(i)&&(n.render=i.render,n.staticRenderFns=i.staticRenderFns),new t.componentOptions.Ctor(n)}function oi(t){for(var e=t.hook||(t.hook={}),n=0;n<ii.length;n++){var i=ii[n],r=e[i],s=ni[i];r===s||r&&r._merged||(e[i]=r?ai(s,r):s)}}function ai(t,e){var n=function(n,i){t(n,i),e(n,i)};return n._merged=!0,n}function li(t,e){var n=t.model&&t.model.prop||"value",i=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var s=e.on||(e.on={}),a=s[i],l=e.model.callback;o(a)?(r(a)?-1===a.indexOf(l):a!==l)&&(s[i]=[l].concat(a)):s[i]=l}var ci=D,hi=W.optionMergeStrategies;function ui(t,e){if(!e)return t;for(var n,i,r,s=ft?Reflect.ownKeys(e):Object.keys(e),o=0;o<s.length;o++)n=s[o],"__ob__"!==n&&(i=t[n],r=e[n],S(t,n)?i!==r&&p(i)&&p(r)&&ui(i,r):Mt(t,n,r));return t}function di(t,e,n){return n?function(){var i=h(e)?e.call(n,n):e,r=h(t)?t.call(n,n):t;return i?ui(i,r):r}:e?t?function(){return ui(h(e)?e.call(this,this):e,h(t)?t.call(this,this):t)}:e:t}function pi(t,e){var n=e?t?t.concat(e):r(e)?e:[e]:t;return n?fi(n):n}function fi(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function mi(t,e,n,i){var r=Object.create(t||null);return e?R(r,e):r}hi.data=function(t,e,n){return n?di(t,e,n):e&&"function"!==typeof e?t:di(t,e)},q.forEach((function(t){hi[t]=pi})),H.forEach((function(t){hi[t+"s"]=mi})),hi.watch=function(t,e,n,i){if(t===at&&(t=void 0),e===at&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var s={};for(var o in R(s,t),e){var a=s[o],l=e[o];a&&!r(a)&&(a=[a]),s[o]=a?a.concat(l):r(l)?l:[l]}return s},hi.props=hi.methods=hi.inject=hi.computed=function(t,e,n,i){if(!t)return e;var r=Object.create(null);return R(r,t),e&&R(r,e),r},hi.provide=di;var gi=function(t,e){return void 0===e?t:e};function vi(t,e){var n=t.props;if(n){var i,s,o,a={};if(r(n)){i=n.length;while(i--)s=n[i],"string"===typeof s&&(o=k(s),a[o]={type:null})}else if(p(n))for(var l in n)s=n[l],o=k(l),a[o]=p(s)?s:{type:s};else 0;t.props=a}}function yi(t,e){var n=t.inject;if(n){var i=t.inject={};if(r(n))for(var s=0;s<n.length;s++)i[n[s]]={from:n[s]};else if(p(n))for(var o in n){var a=n[o];i[o]=p(a)?R({from:o},a):{from:a}}else 0}}function _i(t){var e=t.directives;if(e)for(var n in e){var i=e[n];h(i)&&(e[n]={bind:i,update:i})}}function bi(t,e,n){if(h(e)&&(e=e.options),vi(e,n),yi(e,n),_i(e),!e._base&&(e.extends&&(t=bi(t,e.extends,n)),e.mixins))for(var i=0,r=e.mixins.length;i<r;i++)t=bi(t,e.mixins[i],n);var s,o={};for(s in t)a(s);for(s in e)S(t,s)||a(s);function a(i){var r=hi[i]||gi;o[i]=r(t[i],e[i],n,i)}return o}function wi(t,e,n,i){if("string"===typeof n){var r=t[e];if(S(r,n))return r[n];var s=k(n);if(S(r,s))return r[s];var o=I(s);if(S(r,o))return r[o];var a=r[n]||r[s]||r[o];return a}}function Ci(t,e,n,i){var r=e[t],s=!S(n,t),o=n[t],a=Ii(Boolean,r.type);if(a>-1)if(s&&!S(r,"default"))o=!1;else if(""===o||o===O(t)){var l=Ii(String,r.type);(l<0||a<l)&&(o=!0)}if(void 0===o){o=Si(i,r,t);var c=Pt;Nt(!0),$t(o),Nt(c)}return o}function Si(t,e,n){if(S(e,"default")){var i=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:h(i)&&"Function"!==Ti(e.type)?i.call(t):i}}var Ei=/^\s*function (\w+)/;function Ti(t){var e=t&&t.toString().match(Ei);return e?e[1]:""}function ki(t,e){return Ti(t)===Ti(e)}function Ii(t,e){if(!r(e))return ki(e,t)?0:-1;for(var n=0,i=e.length;n<i;n++)if(ki(e[n],t))return n;return-1}var xi={enumerable:!0,configurable:!0,get:D,set:D};function Oi(t,e,n){xi.get=function(){return this[e][n]},xi.set=function(t){this[e][n]=t},Object.defineProperty(t,n,xi)}function Ai(t){var e=t.$options;if(e.props&&Pi(t,e.props),Ie(t),e.methods&&ji(t,e.methods),e.data)Ni(t);else{var n=$t(t._data={});n&&n.vmCount++}e.computed&&$i(t,e.computed),e.watch&&e.watch!==at&&Bi(t,e.watch)}function Pi(t,e){var n=t.$options.propsData||{},i=t._props=Bt({}),r=t.$options._propKeys=[],s=!t.$parent;s||Nt(!1);var o=function(s){r.push(s);var o=Ci(s,e,n,t);Dt(i,s,o),s in t||Oi(t,"_props",s)};for(var a in e)o(a);Nt(!0)}function Ni(t){var e=t.$options.data;e=t._data=h(e)?Li(e,t):e||{},p(e)||(e={});var n=Object.keys(e),i=t.$options.props,r=(t.$options.methods,n.length);while(r--){var s=n[r];0,i&&S(i,s)||K(s)||Oi(t,"_data",s)}var o=$t(e);o&&o.vmCount++}function Li(t,e){Et();try{return t.call(e,e)}catch(Go){return Ze(Go,e,"data()"),{}}finally{Tt()}}var Ri={lazy:!0};function $i(t,e){var n=t._computedWatchers=Object.create(null),i=ht();for(var r in e){var s=e[r],o=h(s)?s:s.get;0,i||(n[r]=new gn(t,o||D,D,Ri)),r in t||Di(t,r,s)}}function Di(t,e,n){var i=!ht();h(n)?(xi.get=i?Mi(e):Fi(n),xi.set=D):(xi.get=n.get?i&&!1!==n.cache?Mi(e):Fi(n.get):D,xi.set=n.set||D),Object.defineProperty(t,e,xi)}function Mi(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),Ct.target&&e.depend(),e.value}}function Fi(t){return function(){return t.call(this,this)}}function ji(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?D:N(e[n],t)}function Bi(t,e){for(var n in e){var i=e[n];if(r(i))for(var s=0;s<i.length;s++)Vi(t,n,i[s]);else Vi(t,n,i)}}function Vi(t,e,n,i){return p(n)&&(i=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,i)}function Ui(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Mt,t.prototype.$delete=Ft,t.prototype.$watch=function(t,e,n){var i=this;if(p(e))return Vi(i,t,e,n);n=n||{},n.user=!0;var r=new gn(i,t,e,n);if(n.immediate){var s='callback for immediate watcher "'.concat(r.expression,'"');Et(),Ke(e,i,[r.value],i,s),Tt()}return function(){r.teardown()}}}var zi=0;function Hi(t){t.prototype._init=function(t){var e=this;e._uid=zi++,e._isVue=!0,e.__v_skip=!0,e._scope=new Zt(!0),t&&t._isComponent?qi(e,t):e.$options=bi(Wi(e.constructor),t||{},e),e._renderProxy=e,e._self=e,Tn(e),vn(e),Re(e),Nn(e,"beforeCreate",void 0,!1),Gn(e),Ai(e),Kn(e),Nn(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function qi(t,e){var n=t.$options=Object.create(t.constructor.options),i=e._parentVnode;n.parent=e.parent,n._parentVnode=i;var r=i.componentOptions;n.propsData=r.propsData,n._parentListeners=r.listeners,n._renderChildren=r.children,n._componentTag=r.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function Wi(t){var e=t.options;if(t.super){var n=Wi(t.super),i=t.superOptions;if(n!==i){t.superOptions=n;var r=Zi(t);r&&R(t.extendOptions,r),e=t.options=bi(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function Zi(t){var e,n=t.options,i=t.sealedOptions;for(var r in n)n[r]!==i[r]&&(e||(e={}),e[r]=n[r]);return e}function Ki(t){this._init(t)}function Gi(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=L(arguments,1);return n.unshift(this),h(t.install)?t.install.apply(t,n):h(t)&&t.apply(null,n),e.push(t),this}}function Yi(t){t.mixin=function(t){return this.options=bi(this.options,t),this}}function Xi(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,i=n.cid,r=t._Ctor||(t._Ctor={});if(r[i])return r[i];var s=ei(t)||ei(n.options);var o=function(t){this._init(t)};return o.prototype=Object.create(n.prototype),o.prototype.constructor=o,o.cid=e++,o.options=bi(n.options,t),o["super"]=n,o.options.props&&Ji(o),o.options.computed&&Qi(o),o.extend=n.extend,o.mixin=n.mixin,o.use=n.use,H.forEach((function(t){o[t]=n[t]})),s&&(o.options.components[s]=o),o.superOptions=n.options,o.extendOptions=t,o.sealedOptions=R({},o.options),r[i]=o,o}}function Ji(t){var e=t.options.props;for(var n in e)Oi(t.prototype,"_props",n)}function Qi(t){var e=t.options.computed;for(var n in e)Di(t.prototype,n,e[n])}function tr(t){H.forEach((function(e){t[e]=function(t,n){return n?("component"===e&&p(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&h(n)&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}}))}function er(t){return t&&(ei(t.Ctor.options)||t.tag)}function nr(t,e){return r(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!f(t)&&t.test(e)}function ir(t,e){var n=t.cache,i=t.keys,r=t._vnode;for(var s in n){var o=n[s];if(o){var a=o.name;a&&!e(a)&&rr(n,s,i,r)}}}function rr(t,e,n,i){var r=t[e];!r||i&&r.tag===i.tag||r.componentInstance.$destroy(),t[e]=null,w(n,e)}Hi(Ki),Ui(Ki),Cn(Ki),kn(Ki),De(Ki);var sr=[String,RegExp,Array],or={name:"keep-alive",abstract:!0,props:{include:sr,exclude:sr,max:[String,Number]},methods:{cacheVNode:function(){var t=this,e=t.cache,n=t.keys,i=t.vnodeToCache,r=t.keyToCache;if(i){var s=i.tag,o=i.componentInstance,a=i.componentOptions;e[r]={name:er(a),tag:s,componentInstance:o},n.push(r),this.max&&n.length>parseInt(this.max)&&rr(e,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)rr(this.cache,t,this.keys)},mounted:function(){var t=this;this.cacheVNode(),this.$watch("include",(function(e){ir(t,(function(t){return nr(e,t)}))})),this.$watch("exclude",(function(e){ir(t,(function(t){return!nr(e,t)}))}))},updated:function(){this.cacheVNode()},render:function(){var t=this.$slots.default,e=Be(t),n=e&&e.componentOptions;if(n){var i=er(n),r=this,s=r.include,o=r.exclude;if(s&&(!i||!nr(s,i))||o&&i&&nr(o,i))return e;var a=this,l=a.cache,c=a.keys,h=null==e.key?n.Ctor.cid+(n.tag?"::".concat(n.tag):""):e.key;l[h]?(e.componentInstance=l[h].componentInstance,w(c,h),c.push(h)):(this.vnodeToCache=e,this.keyToCache=h),e.data.keepAlive=!0}return e||t&&t[0]}},ar={KeepAlive:or};function lr(t){var e={get:function(){return W}};Object.defineProperty(t,"config",e),t.util={warn:ci,extend:R,mergeOptions:bi,defineReactive:Dt},t.set=Mt,t.delete=Ft,t.nextTick=an,t.observable=function(t){return $t(t),t},t.options=Object.create(null),H.forEach((function(e){t.options[e+"s"]=Object.create(null)})),t.options._base=t,R(t.options.components,ar),Gi(t),Yi(t),Xi(t),tr(t)}lr(Ki),Object.defineProperty(Ki.prototype,"$isServer",{get:ht}),Object.defineProperty(Ki.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Ki,"FunctionalRenderContext",{value:Xn}),Ki.version=hn;var cr=_("style,class"),hr=_("input,textarea,option,select,progress"),ur=function(t,e,n){return"value"===n&&hr(t)&&"button"!==e||"selected"===n&&"option"===t||"checked"===n&&"input"===t||"muted"===n&&"video"===t},dr=_("contenteditable,draggable,spellcheck"),pr=_("events,caret,typing,plaintext-only"),fr=function(t,e){return _r(e)||"false"===e?"false":"contenteditable"===t&&pr(e)?e:"true"},mr=_("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),gr="http://www.w3.org/1999/xlink",vr=function(t){return":"===t.charAt(5)&&"xlink"===t.slice(0,5)},yr=function(t){return vr(t)?t.slice(6,t.length):""},_r=function(t){return null==t||!1===t};function br(t){var e=t.data,n=t,i=t;while(o(i.componentInstance))i=i.componentInstance._vnode,i&&i.data&&(e=wr(i.data,e));while(o(n=n.parent))n&&n.data&&(e=wr(e,n.data));return Cr(e.staticClass,e.class)}function wr(t,e){return{staticClass:Sr(t.staticClass,e.staticClass),class:o(t.class)?[t.class,e.class]:e.class}}function Cr(t,e){return o(t)||o(e)?Sr(t,Er(e)):""}function Sr(t,e){return t?e?t+" "+e:t:e||""}function Er(t){return Array.isArray(t)?Tr(t):u(t)?kr(t):"string"===typeof t?t:""}function Tr(t){for(var e,n="",i=0,r=t.length;i<r;i++)o(e=Er(t[i]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function kr(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var Ir={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},xr=_("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),Or=_("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),Ar=function(t){return xr(t)||Or(t)};function Pr(t){return Or(t)?"svg":"math"===t?"math":void 0}var Nr=Object.create(null);function Lr(t){if(!Q)return!0;if(Ar(t))return!1;if(t=t.toLowerCase(),null!=Nr[t])return Nr[t];var e=document.createElement(t);return t.indexOf("-")>-1?Nr[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:Nr[t]=/HTMLUnknownElement/.test(e.toString())}var Rr=_("text,number,password,search,email,tel,url");function $r(t){if("string"===typeof t){var e=document.querySelector(t);return e||document.createElement("div")}return t}function Dr(t,e){var n=document.createElement(t);return"select"!==t||e.data&&e.data.attrs&&void 0!==e.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n}function Mr(t,e){return document.createElementNS(Ir[t],e)}function Fr(t){return document.createTextNode(t)}function jr(t){return document.createComment(t)}function Br(t,e,n){t.insertBefore(e,n)}function Vr(t,e){t.removeChild(e)}function Ur(t,e){t.appendChild(e)}function zr(t){return t.parentNode}function Hr(t){return t.nextSibling}function qr(t){return t.tagName}function Wr(t,e){t.textContent=e}function Zr(t,e){t.setAttribute(e,"")}var Kr=Object.freeze({__proto__:null,createElement:Dr,createElementNS:Mr,createTextNode:Fr,createComment:jr,insertBefore:Br,removeChild:Vr,appendChild:Ur,parentNode:zr,nextSibling:Hr,tagName:qr,setTextContent:Wr,setStyleScope:Zr}),Gr={create:function(t,e){Yr(e)},update:function(t,e){t.data.ref!==e.data.ref&&(Yr(t,!0),Yr(e))},destroy:function(t){Yr(t,!0)}};function Yr(t,e){var n=t.data.ref;if(o(n)){var i=t.context,s=t.componentInstance||t.elm,a=e?null:s,l=e?void 0:s;if(h(n))Ke(n,i,[a],i,"template ref function");else{var c=t.data.refInFor,u="string"===typeof n||"number"===typeof n,d=zt(n),p=i.$refs;if(u||d)if(c){var f=u?p[n]:n.value;e?r(f)&&w(f,s):r(f)?f.includes(s)||f.push(s):u?(p[n]=[s],Xr(i,n,p[n])):n.value=[s]}else if(u){if(e&&p[n]!==s)return;p[n]=l,Xr(i,n,a)}else if(d){if(e&&n.value!==s)return;n.value=a}else 0}}}function Xr(t,e,n){var i=t._setupState;i&&S(i,e)&&(zt(i[e])?i[e].value=n:i[e]=n)}var Jr=new vt("",{},[]),Qr=["create","activate","update","remove","destroy"];function ts(t,e){return t.key===e.key&&t.asyncFactory===e.asyncFactory&&(t.tag===e.tag&&t.isComment===e.isComment&&o(t.data)===o(e.data)&&es(t,e)||a(t.isAsyncPlaceholder)&&s(e.asyncFactory.error))}function es(t,e){if("input"!==t.tag)return!0;var n,i=o(n=t.data)&&o(n=n.attrs)&&n.type,r=o(n=e.data)&&o(n=n.attrs)&&n.type;return i===r||Rr(i)&&Rr(r)}function ns(t,e,n){var i,r,s={};for(i=e;i<=n;++i)r=t[i].key,o(r)&&(s[r]=i);return s}function is(t){var e,n,i={},l=t.modules,h=t.nodeOps;for(e=0;e<Qr.length;++e)for(i[Qr[e]]=[],n=0;n<l.length;++n)o(l[n][Qr[e]])&&i[Qr[e]].push(l[n][Qr[e]]);function u(t){return new vt(h.tagName(t).toLowerCase(),{},[],void 0,t)}function d(t,e){function n(){0===--n.listeners&&p(t)}return n.listeners=e,n}function p(t){var e=h.parentNode(t);o(e)&&h.removeChild(e,t)}function f(t,e,n,i,r,s,l){if(o(t.elm)&&o(s)&&(t=s[l]=bt(t)),t.isRootInsert=!r,!m(t,e,n,i)){var c=t.data,u=t.children,d=t.tag;o(d)?(t.elm=t.ns?h.createElementNS(t.ns,d):h.createElement(d,t),S(t),b(t,u,e),o(c)&&C(t,e),y(n,t.elm,i)):a(t.isComment)?(t.elm=h.createComment(t.text),y(n,t.elm,i)):(t.elm=h.createTextNode(t.text),y(n,t.elm,i))}}function m(t,e,n,i){var r=t.data;if(o(r)){var s=o(t.componentInstance)&&r.keepAlive;if(o(r=r.hook)&&o(r=r.init)&&r(t,!1),o(t.componentInstance))return g(t,e),y(n,t.elm,i),a(s)&&v(t,e,n,i),!0}}function g(t,e){o(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,w(t)?(C(t,e),S(t)):(Yr(t),e.push(t))}function v(t,e,n,r){var s,a=t;while(a.componentInstance)if(a=a.componentInstance._vnode,o(s=a.data)&&o(s=s.transition)){for(s=0;s<i.activate.length;++s)i.activate[s](Jr,a);e.push(a);break}y(n,t.elm,r)}function y(t,e,n){o(t)&&(o(n)?h.parentNode(n)===t&&h.insertBefore(t,e,n):h.appendChild(t,e))}function b(t,e,n){if(r(e)){0;for(var i=0;i<e.length;++i)f(e[i],n,t.elm,null,!0,e,i)}else c(t.text)&&h.appendChild(t.elm,h.createTextNode(String(t.text)))}function w(t){while(t.componentInstance)t=t.componentInstance._vnode;return o(t.tag)}function C(t,n){for(var r=0;r<i.create.length;++r)i.create[r](Jr,t);e=t.data.hook,o(e)&&(o(e.create)&&e.create(Jr,t),o(e.insert)&&n.push(t))}function S(t){var e;if(o(e=t.fnScopeId))h.setStyleScope(t.elm,e);else{var n=t;while(n)o(e=n.context)&&o(e=e.$options._scopeId)&&h.setStyleScope(t.elm,e),n=n.parent}o(e=Sn)&&e!==t.context&&e!==t.fnContext&&o(e=e.$options._scopeId)&&h.setStyleScope(t.elm,e)}function E(t,e,n,i,r,s){for(;i<=r;++i)f(n[i],s,t,e,!1,n,i)}function T(t){var e,n,r=t.data;if(o(r))for(o(e=r.hook)&&o(e=e.destroy)&&e(t),e=0;e<i.destroy.length;++e)i.destroy[e](t);if(o(e=t.children))for(n=0;n<t.children.length;++n)T(t.children[n])}function k(t,e,n){for(;e<=n;++e){var i=t[e];o(i)&&(o(i.tag)?(I(i),T(i)):p(i.elm))}}function I(t,e){if(o(e)||o(t.data)){var n,r=i.remove.length+1;for(o(e)?e.listeners+=r:e=d(t.elm,r),o(n=t.componentInstance)&&o(n=n._vnode)&&o(n.data)&&I(n,e),n=0;n<i.remove.length;++n)i.remove[n](t,e);o(n=t.data.hook)&&o(n=n.remove)?n(t,e):e()}else p(t.elm)}function x(t,e,n,i,r){var a,l,c,u,d=0,p=0,m=e.length-1,g=e[0],v=e[m],y=n.length-1,_=n[0],b=n[y],w=!r;while(d<=m&&p<=y)s(g)?g=e[++d]:s(v)?v=e[--m]:ts(g,_)?(A(g,_,i,n,p),g=e[++d],_=n[++p]):ts(v,b)?(A(v,b,i,n,y),v=e[--m],b=n[--y]):ts(g,b)?(A(g,b,i,n,y),w&&h.insertBefore(t,g.elm,h.nextSibling(v.elm)),g=e[++d],b=n[--y]):ts(v,_)?(A(v,_,i,n,p),w&&h.insertBefore(t,v.elm,g.elm),v=e[--m],_=n[++p]):(s(a)&&(a=ns(e,d,m)),l=o(_.key)?a[_.key]:O(_,e,d,m),s(l)?f(_,i,t,g.elm,!1,n,p):(c=e[l],ts(c,_)?(A(c,_,i,n,p),e[l]=void 0,w&&h.insertBefore(t,c.elm,g.elm)):f(_,i,t,g.elm,!1,n,p)),_=n[++p]);d>m?(u=s(n[y+1])?null:n[y+1].elm,E(t,u,n,p,y,i)):p>y&&k(e,d,m)}function O(t,e,n,i){for(var r=n;r<i;r++){var s=e[r];if(o(s)&&ts(t,s))return r}}function A(t,e,n,r,l,c){if(t!==e){o(e.elm)&&o(r)&&(e=r[l]=bt(e));var u=e.elm=t.elm;if(a(t.isAsyncPlaceholder))o(e.asyncFactory.resolved)?L(t.elm,e,n):e.isAsyncPlaceholder=!0;else if(a(e.isStatic)&&a(t.isStatic)&&e.key===t.key&&(a(e.isCloned)||a(e.isOnce)))e.componentInstance=t.componentInstance;else{var d,p=e.data;o(p)&&o(d=p.hook)&&o(d=d.prepatch)&&d(t,e);var f=t.children,m=e.children;if(o(p)&&w(e)){for(d=0;d<i.update.length;++d)i.update[d](t,e);o(d=p.hook)&&o(d=d.update)&&d(t,e)}s(e.text)?o(f)&&o(m)?f!==m&&x(u,f,m,n,c):o(m)?(o(t.text)&&h.setTextContent(u,""),E(u,null,m,0,m.length-1,n)):o(f)?k(f,0,f.length-1):o(t.text)&&h.setTextContent(u,""):t.text!==e.text&&h.setTextContent(u,e.text),o(p)&&o(d=p.hook)&&o(d=d.postpatch)&&d(t,e)}}}function P(t,e,n){if(a(n)&&o(t.parent))t.parent.data.pendingInsert=e;else for(var i=0;i<e.length;++i)e[i].data.hook.insert(e[i])}var N=_("attrs,class,staticClass,staticStyle,key");function L(t,e,n,i){var r,s=e.tag,l=e.data,c=e.children;if(i=i||l&&l.pre,e.elm=t,a(e.isComment)&&o(e.asyncFactory))return e.isAsyncPlaceholder=!0,!0;if(o(l)&&(o(r=l.hook)&&o(r=r.init)&&r(e,!0),o(r=e.componentInstance)))return g(e,n),!0;if(o(s)){if(o(c))if(t.hasChildNodes())if(o(r=l)&&o(r=r.domProps)&&o(r=r.innerHTML)){if(r!==t.innerHTML)return!1}else{for(var h=!0,u=t.firstChild,d=0;d<c.length;d++){if(!u||!L(u,c[d],n,i)){h=!1;break}u=u.nextSibling}if(!h||u)return!1}else b(e,c,n);if(o(l)){var p=!1;for(var f in l)if(!N(f)){p=!0,C(e,n);break}!p&&l["class"]&&dn(l["class"])}}else t.data!==e.text&&(t.data=e.text);return!0}return function(t,e,n,r){if(!s(e)){var l=!1,c=[];if(s(t))l=!0,f(e,c);else{var d=o(t.nodeType);if(!d&&ts(t,e))A(t,e,c,null,null,r);else{if(d){if(1===t.nodeType&&t.hasAttribute(z)&&(t.removeAttribute(z),n=!0),a(n)&&L(t,e,c))return P(e,c,!0),t;t=u(t)}var p=t.elm,m=h.parentNode(p);if(f(e,c,p._leaveCb?null:m,h.nextSibling(p)),o(e.parent)){var g=e.parent,v=w(e);while(g){for(var y=0;y<i.destroy.length;++y)i.destroy[y](g);if(g.elm=e.elm,v){for(var _=0;_<i.create.length;++_)i.create[_](Jr,g);var b=g.data.hook.insert;if(b.merged)for(var C=1;C<b.fns.length;C++)b.fns[C]()}else Yr(g);g=g.parent}}o(m)?k([t],0,0):o(t.tag)&&T(t)}}return P(e,c,l),e.elm}o(t)&&T(t)}}var rs={create:ss,update:ss,destroy:function(t){ss(t,Jr)}};function ss(t,e){(t.data.directives||e.data.directives)&&os(t,e)}function os(t,e){var n,i,r,s=t===Jr,o=e===Jr,a=ls(t.data.directives,t.context),l=ls(e.data.directives,e.context),c=[],h=[];for(n in l)i=a[n],r=l[n],i?(r.oldValue=i.value,r.oldArg=i.arg,hs(r,"update",e,t),r.def&&r.def.componentUpdated&&h.push(r)):(hs(r,"bind",e,t),r.def&&r.def.inserted&&c.push(r));if(c.length){var u=function(){for(var n=0;n<c.length;n++)hs(c[n],"inserted",e,t)};s?Qt(e,"insert",u):u()}if(h.length&&Qt(e,"postpatch",(function(){for(var n=0;n<h.length;n++)hs(h[n],"componentUpdated",e,t)})),!s)for(n in a)l[n]||hs(a[n],"unbind",t,t,o)}var as=Object.create(null);function ls(t,e){var n,i,r=Object.create(null);if(!t)return r;for(n=0;n<t.length;n++)i=t[n],i.modifiers||(i.modifiers=as),r[cs(i)]=i,e._setupState&&e._setupState.__sfc&&(i.def=i.def||wi(e,"_setupState","v-"+i.name)),i.def=i.def||wi(e.$options,"directives",i.name,!0);return r}function cs(t){return t.rawName||"".concat(t.name,".").concat(Object.keys(t.modifiers||{}).join("."))}function hs(t,e,n,i,r){var s=t.def&&t.def[e];if(s)try{s(n.elm,t,n,i,r)}catch(Go){Ze(Go,n.context,"directive ".concat(t.name," ").concat(e," hook"))}}var us=[Gr,rs];function ds(t,e){var n=e.componentOptions;if((!o(n)||!1!==n.Ctor.options.inheritAttrs)&&(!s(t.data.attrs)||!s(e.data.attrs))){var i,r,l,c=e.elm,h=t.data.attrs||{},u=e.data.attrs||{};for(i in(o(u.__ob__)||a(u._v_attr_proxy))&&(u=e.data.attrs=R({},u)),u)r=u[i],l=h[i],l!==r&&ps(c,i,r,e.data.pre);for(i in(et||it)&&u.value!==h.value&&ps(c,"value",u.value),h)s(u[i])&&(vr(i)?c.removeAttributeNS(gr,yr(i)):dr(i)||c.removeAttribute(i))}}function ps(t,e,n,i){i||t.tagName.indexOf("-")>-1?fs(t,e,n):mr(e)?_r(n)?t.removeAttribute(e):(n="allowfullscreen"===e&&"EMBED"===t.tagName?"true":e,t.setAttribute(e,n)):dr(e)?t.setAttribute(e,fr(e,n)):vr(e)?_r(n)?t.removeAttributeNS(gr,yr(e)):t.setAttributeNS(gr,e,n):fs(t,e,n)}function fs(t,e,n){if(_r(n))t.removeAttribute(e);else{if(et&&!nt&&"TEXTAREA"===t.tagName&&"placeholder"===e&&""!==n&&!t.__ieph){var i=function(e){e.stopImmediatePropagation(),t.removeEventListener("input",i)};t.addEventListener("input",i),t.__ieph=!0}t.setAttribute(e,n)}}var ms={create:ds,update:ds};function gs(t,e){var n=e.elm,i=e.data,r=t.data;if(!(s(i.staticClass)&&s(i.class)&&(s(r)||s(r.staticClass)&&s(r.class)))){var a=br(e),l=n._transitionClasses;o(l)&&(a=Sr(a,Er(l))),a!==n._prevClass&&(n.setAttribute("class",a),n._prevClass=a)}}var vs,ys={create:gs,update:gs},_s="__r",bs="__c";function ws(t){if(o(t[_s])){var e=et?"change":"input";t[e]=[].concat(t[_s],t[e]||[]),delete t[_s]}o(t[bs])&&(t.change=[].concat(t[bs],t.change||[]),delete t[bs])}function Cs(t,e,n){var i=vs;return function r(){var s=e.apply(null,arguments);null!==s&&Ts(t,r,n,i)}}var Ss=Je&&!(ot&&Number(ot[1])<=53);function Es(t,e,n,i){if(Ss){var r=Bn,s=e;e=s._wrapper=function(t){if(t.target===t.currentTarget||t.timeStamp>=r||t.timeStamp<=0||t.target.ownerDocument!==document)return s.apply(this,arguments)}}vs.addEventListener(t,e,lt?{capture:n,passive:i}:n)}function Ts(t,e,n,i){(i||vs).removeEventListener(t,e._wrapper||e,n)}function ks(t,e){if(!s(t.data.on)||!s(e.data.on)){var n=e.data.on||{},i=t.data.on||{};vs=e.elm||t.elm,ws(n),Jt(n,i,Es,Ts,Cs,e.context),vs=void 0}}var Is,xs={create:ks,update:ks,destroy:function(t){return ks(t,Jr)}};function Os(t,e){if(!s(t.data.domProps)||!s(e.data.domProps)){var n,i,r=e.elm,l=t.data.domProps||{},c=e.data.domProps||{};for(n in(o(c.__ob__)||a(c._v_attr_proxy))&&(c=e.data.domProps=R({},c)),l)n in c||(r[n]="");for(n in c){if(i=c[n],"textContent"===n||"innerHTML"===n){if(e.children&&(e.children.length=0),i===l[n])continue;1===r.childNodes.length&&r.removeChild(r.childNodes[0])}if("value"===n&&"PROGRESS"!==r.tagName){r._value=i;var h=s(i)?"":String(i);As(r,h)&&(r.value=h)}else if("innerHTML"===n&&Or(r.tagName)&&s(r.innerHTML)){Is=Is||document.createElement("div"),Is.innerHTML="<svg>".concat(i,"</svg>");var u=Is.firstChild;while(r.firstChild)r.removeChild(r.firstChild);while(u.firstChild)r.appendChild(u.firstChild)}else if(i!==l[n])try{r[n]=i}catch(Go){}}}}function As(t,e){return!t.composing&&("OPTION"===t.tagName||Ps(t,e)||Ns(t,e))}function Ps(t,e){var n=!0;try{n=document.activeElement!==t}catch(Go){}return n&&t.value!==e}function Ns(t,e){var n=t.value,i=t._vModifiers;if(o(i)){if(i.number)return y(n)!==y(e);if(i.trim)return n.trim()!==e.trim()}return n!==e}var Ls={create:Os,update:Os},Rs=E((function(t){var e={},n=/;(?![^(]*\))/g,i=/:(.+)/;return t.split(n).forEach((function(t){if(t){var n=t.split(i);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}));function $s(t){var e=Ds(t.style);return t.staticStyle?R(t.staticStyle,e):e}function Ds(t){return Array.isArray(t)?$(t):"string"===typeof t?Rs(t):t}function Ms(t,e){var n,i={};if(e){var r=t;while(r.componentInstance)r=r.componentInstance._vnode,r&&r.data&&(n=$s(r.data))&&R(i,n)}(n=$s(t.data))&&R(i,n);var s=t;while(s=s.parent)s.data&&(n=$s(s.data))&&R(i,n);return i}var Fs,js=/^--/,Bs=/\s*!important$/,Vs=function(t,e,n){if(js.test(e))t.style.setProperty(e,n);else if(Bs.test(n))t.style.setProperty(O(e),n.replace(Bs,""),"important");else{var i=zs(e);if(Array.isArray(n))for(var r=0,s=n.length;r<s;r++)t.style[i]=n[r];else t.style[i]=n}},Us=["Webkit","Moz","ms"],zs=E((function(t){if(Fs=Fs||document.createElement("div").style,t=k(t),"filter"!==t&&t in Fs)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<Us.length;n++){var i=Us[n]+e;if(i in Fs)return i}}));function Hs(t,e){var n=e.data,i=t.data;if(!(s(n.staticStyle)&&s(n.style)&&s(i.staticStyle)&&s(i.style))){var r,a,l=e.elm,c=i.staticStyle,h=i.normalizedStyle||i.style||{},u=c||h,d=Ds(e.data.style)||{};e.data.normalizedStyle=o(d.__ob__)?R({},d):d;var p=Ms(e,!0);for(a in u)s(p[a])&&Vs(l,a,"");for(a in p)r=p[a],r!==u[a]&&Vs(l,a,null==r?"":r)}}var qs={create:Hs,update:Hs},Ws=/\s+/;function Zs(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(Ws).forEach((function(e){return t.classList.add(e)})):t.classList.add(e);else{var n=" ".concat(t.getAttribute("class")||""," ");n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}}function Ks(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(Ws).forEach((function(e){return t.classList.remove(e)})):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{var n=" ".concat(t.getAttribute("class")||""," "),i=" "+e+" ";while(n.indexOf(i)>=0)n=n.replace(i," ");n=n.trim(),n?t.setAttribute("class",n):t.removeAttribute("class")}}function Gs(t){if(t){if("object"===typeof t){var e={};return!1!==t.css&&R(e,Ys(t.name||"v")),R(e,t),e}return"string"===typeof t?Ys(t):void 0}}var Ys=E((function(t){return{enterClass:"".concat(t,"-enter"),enterToClass:"".concat(t,"-enter-to"),enterActiveClass:"".concat(t,"-enter-active"),leaveClass:"".concat(t,"-leave"),leaveToClass:"".concat(t,"-leave-to"),leaveActiveClass:"".concat(t,"-leave-active")}})),Xs=Q&&!nt,Js="transition",Qs="animation",to="transition",eo="transitionend",no="animation",io="animationend";Xs&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(to="WebkitTransition",eo="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(no="WebkitAnimation",io="webkitAnimationEnd"));var ro=Q?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(t){return t()};function so(t){ro((function(){ro(t)}))}function oo(t,e){var n=t._transitionClasses||(t._transitionClasses=[]);n.indexOf(e)<0&&(n.push(e),Zs(t,e))}function ao(t,e){t._transitionClasses&&w(t._transitionClasses,e),Ks(t,e)}function lo(t,e,n){var i=ho(t,e),r=i.type,s=i.timeout,o=i.propCount;if(!r)return n();var a=r===Js?eo:io,l=0,c=function(){t.removeEventListener(a,h),n()},h=function(e){e.target===t&&++l>=o&&c()};setTimeout((function(){l<o&&c()}),s+1),t.addEventListener(a,h)}var co=/\b(transform|all)(,|$)/;function ho(t,e){var n,i=window.getComputedStyle(t),r=(i[to+"Delay"]||"").split(", "),s=(i[to+"Duration"]||"").split(", "),o=uo(r,s),a=(i[no+"Delay"]||"").split(", "),l=(i[no+"Duration"]||"").split(", "),c=uo(a,l),h=0,u=0;e===Js?o>0&&(n=Js,h=o,u=s.length):e===Qs?c>0&&(n=Qs,h=c,u=l.length):(h=Math.max(o,c),n=h>0?o>c?Js:Qs:null,u=n?n===Js?s.length:l.length:0);var d=n===Js&&co.test(i[to+"Property"]);return{type:n,timeout:h,propCount:u,hasTransform:d}}function uo(t,e){while(t.length<e.length)t=t.concat(t);return Math.max.apply(null,e.map((function(e,n){return po(e)+po(t[n])})))}function po(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function fo(t,e){var n=t.elm;o(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var i=Gs(t.data.transition);if(!s(i)&&!o(n._enterCb)&&1===n.nodeType){var r=i.css,a=i.type,l=i.enterClass,c=i.enterToClass,d=i.enterActiveClass,p=i.appearClass,f=i.appearToClass,m=i.appearActiveClass,g=i.beforeEnter,v=i.enter,_=i.afterEnter,b=i.enterCancelled,w=i.beforeAppear,C=i.appear,S=i.afterAppear,E=i.appearCancelled,T=i.duration,k=Sn,I=Sn.$vnode;while(I&&I.parent)k=I.context,I=I.parent;var x=!k._isMounted||!t.isRootInsert;if(!x||C||""===C){var O=x&&p?p:l,A=x&&m?m:d,P=x&&f?f:c,N=x&&w||g,L=x&&h(C)?C:v,R=x&&S||_,$=x&&E||b,D=y(u(T)?T.enter:T);0;var M=!1!==r&&!nt,F=vo(L),j=n._enterCb=V((function(){M&&(ao(n,P),ao(n,A)),j.cancelled?(M&&ao(n,O),$&&$(n)):R&&R(n),n._enterCb=null}));t.data.show||Qt(t,"insert",(function(){var e=n.parentNode,i=e&&e._pending&&e._pending[t.key];i&&i.tag===t.tag&&i.elm._leaveCb&&i.elm._leaveCb(),L&&L(n,j)})),N&&N(n),M&&(oo(n,O),oo(n,A),so((function(){ao(n,O),j.cancelled||(oo(n,P),F||(go(D)?setTimeout(j,D):lo(n,a,j)))}))),t.data.show&&(e&&e(),L&&L(n,j)),M||F||j()}}}function mo(t,e){var n=t.elm;o(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var i=Gs(t.data.transition);if(s(i)||1!==n.nodeType)return e();if(!o(n._leaveCb)){var r=i.css,a=i.type,l=i.leaveClass,c=i.leaveToClass,h=i.leaveActiveClass,d=i.beforeLeave,p=i.leave,f=i.afterLeave,m=i.leaveCancelled,g=i.delayLeave,v=i.duration,_=!1!==r&&!nt,b=vo(p),w=y(u(v)?v.leave:v);0;var C=n._leaveCb=V((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[t.key]=null),_&&(ao(n,c),ao(n,h)),C.cancelled?(_&&ao(n,l),m&&m(n)):(e(),f&&f(n)),n._leaveCb=null}));g?g(S):S()}function S(){C.cancelled||(!t.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[t.key]=t),d&&d(n),_&&(oo(n,l),oo(n,h),so((function(){ao(n,l),C.cancelled||(oo(n,c),b||(go(w)?setTimeout(C,w):lo(n,a,C)))}))),p&&p(n,C),_||b||C())}}function go(t){return"number"===typeof t&&!isNaN(t)}function vo(t){if(s(t))return!1;var e=t.fns;return o(e)?vo(Array.isArray(e)?e[0]:e):(t._length||t.length)>1}function yo(t,e){!0!==e.data.show&&fo(e)}var _o=Q?{create:yo,activate:yo,remove:function(t,e){!0!==t.data.show?mo(t,e):e()}}:{},bo=[ms,ys,xs,Ls,qs,_o],wo=bo.concat(us),Co=is({nodeOps:Kr,modules:wo});nt&&document.addEventListener("selectionchange",(function(){var t=document.activeElement;t&&t.vmodel&&Ao(t,"input")}));var So={inserted:function(t,e,n,i){"select"===n.tag?(i.elm&&!i.elm._vOptions?Qt(n,"postpatch",(function(){So.componentUpdated(t,e,n)})):Eo(t,e,n.context),t._vOptions=[].map.call(t.options,Io)):("textarea"===n.tag||Rr(t.type))&&(t._vModifiers=e.modifiers,e.modifiers.lazy||(t.addEventListener("compositionstart",xo),t.addEventListener("compositionend",Oo),t.addEventListener("change",Oo),nt&&(t.vmodel=!0)))},componentUpdated:function(t,e,n){if("select"===n.tag){Eo(t,e,n.context);var i=t._vOptions,r=t._vOptions=[].map.call(t.options,Io);if(r.some((function(t,e){return!j(t,i[e])}))){var s=t.multiple?e.value.some((function(t){return ko(t,r)})):e.value!==e.oldValue&&ko(e.value,r);s&&Ao(t,"change")}}}};function Eo(t,e,n){To(t,e,n),(et||it)&&setTimeout((function(){To(t,e,n)}),0)}function To(t,e,n){var i=e.value,r=t.multiple;if(!r||Array.isArray(i)){for(var s,o,a=0,l=t.options.length;a<l;a++)if(o=t.options[a],r)s=B(i,Io(o))>-1,o.selected!==s&&(o.selected=s);else if(j(Io(o),i))return void(t.selectedIndex!==a&&(t.selectedIndex=a));r||(t.selectedIndex=-1)}}function ko(t,e){return e.every((function(e){return!j(e,t)}))}function Io(t){return"_value"in t?t._value:t.value}function xo(t){t.target.composing=!0}function Oo(t){t.target.composing&&(t.target.composing=!1,Ao(t.target,"input"))}function Ao(t,e){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}function Po(t){return!t.componentInstance||t.data&&t.data.transition?t:Po(t.componentInstance._vnode)}var No={bind:function(t,e,n){var i=e.value;n=Po(n);var r=n.data&&n.data.transition,s=t.__vOriginalDisplay="none"===t.style.display?"":t.style.display;i&&r?(n.data.show=!0,fo(n,(function(){t.style.display=s}))):t.style.display=i?s:"none"},update:function(t,e,n){var i=e.value,r=e.oldValue;if(!i!==!r){n=Po(n);var s=n.data&&n.data.transition;s?(n.data.show=!0,i?fo(n,(function(){t.style.display=t.__vOriginalDisplay})):mo(n,(function(){t.style.display="none"}))):t.style.display=i?t.__vOriginalDisplay:"none"}},unbind:function(t,e,n,i,r){r||(t.style.display=t.__vOriginalDisplay)}},Lo={model:So,show:No},Ro={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function $o(t){var e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?$o(Be(e.children)):t}function Do(t){var e={},n=t.$options;for(var i in n.propsData)e[i]=t[i];var r=n._parentListeners;for(var i in r)e[k(i)]=r[i];return e}function Mo(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}function Fo(t){while(t=t.parent)if(t.data.transition)return!0}function jo(t,e){return e.key===t.key&&e.tag===t.tag}var Bo=function(t){return t.tag||Se(t)},Vo=function(t){return"show"===t.name},Uo={name:"transition",props:Ro,abstract:!0,render:function(t){var e=this,n=this.$slots.default;if(n&&(n=n.filter(Bo),n.length)){0;var i=this.mode;0;var r=n[0];if(Fo(this.$vnode))return r;var s=$o(r);if(!s)return r;if(this._leaving)return Mo(t,r);var o="__transition-".concat(this._uid,"-");s.key=null==s.key?s.isComment?o+"comment":o+s.tag:c(s.key)?0===String(s.key).indexOf(o)?s.key:o+s.key:s.key;var a=(s.data||(s.data={})).transition=Do(this),l=this._vnode,h=$o(l);if(s.data.directives&&s.data.directives.some(Vo)&&(s.data.show=!0),h&&h.data&&!jo(s,h)&&!Se(h)&&(!h.componentInstance||!h.componentInstance._vnode.isComment)){var u=h.data.transition=R({},a);if("out-in"===i)return this._leaving=!0,Qt(u,"afterLeave",(function(){e._leaving=!1,e.$forceUpdate()})),Mo(t,r);if("in-out"===i){if(Se(s))return l;var d,p=function(){d()};Qt(a,"afterEnter",p),Qt(a,"enterCancelled",p),Qt(u,"delayLeave",(function(t){d=t}))}}return r}}},zo=R({tag:String,moveClass:String},Ro);delete zo.mode;var Ho={props:zo,beforeMount:function(){var t=this,e=this._update;this._update=function(n,i){var r=En(t);t.__patch__(t._vnode,t.kept,!1,!0),t._vnode=t.kept,r(),e.call(t,n,i)}},render:function(t){for(var e=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),i=this.prevChildren=this.children,r=this.$slots.default||[],s=this.children=[],o=Do(this),a=0;a<r.length;a++){var l=r[a];if(l.tag)if(null!=l.key&&0!==String(l.key).indexOf("__vlist"))s.push(l),n[l.key]=l,(l.data||(l.data={})).transition=o;else;}if(i){var c=[],h=[];for(a=0;a<i.length;a++){l=i[a];l.data.transition=o,l.data.pos=l.elm.getBoundingClientRect(),n[l.key]?c.push(l):h.push(l)}this.kept=t(e,null,c),this.removed=h}return t(e,null,s)},updated:function(){var t=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";t.length&&this.hasMove(t[0].elm,e)&&(t.forEach(qo),t.forEach(Wo),t.forEach(Zo),this._reflow=document.body.offsetHeight,t.forEach((function(t){if(t.data.moved){var n=t.elm,i=n.style;oo(n,e),i.transform=i.WebkitTransform=i.transitionDuration="",n.addEventListener(eo,n._moveCb=function t(i){i&&i.target!==n||i&&!/transform$/.test(i.propertyName)||(n.removeEventListener(eo,t),n._moveCb=null,ao(n,e))})}})))},methods:{hasMove:function(t,e){if(!Xs)return!1;if(this._hasMove)return this._hasMove;var n=t.cloneNode();t._transitionClasses&&t._transitionClasses.forEach((function(t){Ks(n,t)})),Zs(n,e),n.style.display="none",this.$el.appendChild(n);var i=ho(n);return this.$el.removeChild(n),this._hasMove=i.hasTransform}}};function qo(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function Wo(t){t.data.newPos=t.elm.getBoundingClientRect()}function Zo(t){var e=t.data.pos,n=t.data.newPos,i=e.left-n.left,r=e.top-n.top;if(i||r){t.data.moved=!0;var s=t.elm.style;s.transform=s.WebkitTransform="translate(".concat(i,"px,").concat(r,"px)"),s.transitionDuration="0s"}}var Ko={Transition:Uo,TransitionGroup:Ho};Ki.config.mustUseProp=ur,Ki.config.isReservedTag=Ar,Ki.config.isReservedAttr=cr,Ki.config.getTagNamespace=Pr,Ki.config.isUnknownElement=Lr,R(Ki.options.directives,Lo),R(Ki.options.components,Ko),Ki.prototype.__patch__=Q?Co:D,Ki.prototype.$mount=function(t,e){return t=t&&Q?$r(t):void 0,In(this,t,e)},Q&&setTimeout((function(){W.devtools&&ut&&ut.emit("init",Ki)}),0)},8627:function(t){function e(t){return-1!==t.type.indexOf("mouse")?t.clientX:t.touches[0].clientX}function n(t){return-1!==t.type.indexOf("mouse")?t.clientY:t.touches[0].clientY}var i=function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(n){}return t}(),r=0,s={install:function(t,s){var o=Object.assign({},{disableClick:!1,tapTolerance:10,swipeTolerance:30,touchHoldTolerance:400,longTapTimeInterval:400,touchClass:"",namespace:"touch"},s);function a(t){var i=this.$$touchObj,s=t.type.indexOf("touch")>=0,o=t.type.indexOf("mouse")>=0,a=this;s&&(r=t.timeStamp),o&&r&&t.timeStamp-r<350||i.touchStarted||(f(this),i.touchStarted=!0,i.touchMoved=!1,i.swipeOutBounded=!1,i.startX=e(t),i.startY=n(t),i.currentX=0,i.currentY=0,i.touchStartTime=t.timeStamp,i.touchHoldTimer=setTimeout((function(){i.touchHoldTimer=null,p(t,a,"touchhold")}),i.options.touchHoldTolerance),p(t,this,"start"))}function l(t){var i=this.$$touchObj;if(i.currentX=e(t),i.currentY=n(t),i.touchMoved){if(!i.swipeOutBounded){var r=i.options.swipeTolerance;i.swipeOutBounded=Math.abs(i.startX-i.currentX)>r&&Math.abs(i.startY-i.currentY)>r}}else{var s=i.options.tapTolerance;i.touchMoved=Math.abs(i.startX-i.currentX)>s||Math.abs(i.startY-i.currentY)>s,i.touchMoved&&(g(i),p(t,this,"moved"))}i.touchMoved&&p(t,this,"moving")}function c(){var t=this.$$touchObj;g(t),m(this),t.touchStarted=t.touchMoved=!1,t.startX=t.startY=0}function h(t){var e=this.$$touchObj,n=t.type.indexOf("touch")>=0,i=t.type.indexOf("mouse")>=0;n&&(r=t.timeStamp);var s=n&&!e.touchHoldTimer;if(g(e),e.touchStarted=!1,m(this),!(i&&r&&t.timeStamp-r<350))if(p(t,this,"end"),e.touchMoved){if(!e.swipeOutBounded){var o,a=e.options.swipeTolerance,l=Math.abs(e.startY-e.currentY),c=Math.abs(e.startX-e.currentX);(l>a||c>a)&&(o=l>a?e.startY>e.currentY?"top":"bottom":e.startX>e.currentX?"left":"right",e.callbacks["swipe."+o]?p(t,this,"swipe."+o,o):p(t,this,"swipe",o))}}else if(e.callbacks.longtap&&t.timeStamp-e.touchStartTime>e.options.longTapTimeInterval)t.cancelable&&t.preventDefault(),p(t,this,"longtap");else{if(e.callbacks.touchhold&&s)return void(t.cancelable&&t.preventDefault());p(t,this,"tap")}}function u(){f(this)}function d(){m(this)}function p(t,e,n,i){var r=e.$$touchObj,s=r&&r.callbacks[n]||[];if(0===s.length)return null;for(var o=0;o<s.length;o++){var a=s[o];a.modifiers.stop&&t.stopPropagation(),a.modifiers.prevent&&t.cancelable&&t.preventDefault(),a.modifiers.self&&t.target!==t.currentTarget||"function"===typeof a.value&&(i?a.value(i,t):a.value(t))}}function f(t){var e=t.$$touchObj.options.touchClass;e&&t.classList.add(e)}function m(t){var e=t.$$touchObj.options.touchClass;e&&t.classList.remove(e)}function g(t){t.touchHoldTimer&&(clearTimeout(t.touchHoldTimer),t.touchHoldTimer=null)}function v(t,e){var n=t.$$touchObj||{callbacks:{},hasBindTouchEvents:!1,options:o};return e&&(n.options=Object.assign({},n.options,e)),t.$$touchObj=n,t.$$touchObj}t.directive(o.namespace,{bind:function(t,e){var n=v(t),r=!!i&&{passive:!0},s=e.arg||"tap";switch(s){case"swipe":var o=e.modifiers;if(o.left||o.right||o.top||o.bottom){for(var p in e.modifiers)if(["left","right","top","bottom"].indexOf(p)>=0){var f="swipe."+p;n.callbacks[f]=n.callbacks[f]||[],n.callbacks[f].push(e)}}else n.callbacks.swipe=n.callbacks.swipe||[],n.callbacks.swipe.push(e);break;case"start":case"moving":e.modifiers.disablePassive&&(r=!1);default:n.callbacks[s]=n.callbacks[s]||[],n.callbacks[s].push(e)}n.hasBindTouchEvents||(t.addEventListener("touchstart",a,r),t.addEventListener("touchmove",l,r),t.addEventListener("touchcancel",c),t.addEventListener("touchend",h),n.options.disableClick||(t.addEventListener("mousedown",a),t.addEventListener("mousemove",l),t.addEventListener("mouseup",h),t.addEventListener("mouseenter",u),t.addEventListener("mouseleave",d)),n.hasBindTouchEvents=!0)},unbind:function(t){t.removeEventListener("touchstart",a),t.removeEventListener("touchmove",l),t.removeEventListener("touchcancel",c),t.removeEventListener("touchend",h),t.$$touchObj&&!t.$$touchObj.options.disableClick&&(t.removeEventListener("mousedown",a),t.removeEventListener("mousemove",l),t.removeEventListener("mouseup",h),t.removeEventListener("mouseenter",u),t.removeEventListener("mouseleave",d)),delete t.$$touchObj}}),t.directive(o.namespace+"-class",{bind:function(t,e){v(t,{touchClass:e.value})}}),t.directive(o.namespace+"-options",{bind:function(t,e){v(t,e.value)}})}};t.exports=s},629:function(t,e,n){"use strict";
/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */
function i(t){var e=Number(t.version.split(".")[0]);if(e>=2)t.mixin({beforeCreate:i});else{var n=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[i].concat(t.init):i,n.call(this,t)}}function i(){var t=this.$options;t.store?this.$store="function"===typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}}n.d(e,{OI:function(){return R},Se:function(){return $}});var r="undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{},s=r.__VUE_DEVTOOLS_GLOBAL_HOOK__;function o(t){s&&(t._devtoolHook=s,s.emit("vuex:init",t),s.on("vuex:travel-to-state",(function(e){t.replaceState(e)})),t.subscribe((function(t,e){s.emit("vuex:mutation",t,e)}),{prepend:!0}),t.subscribeAction((function(t,e){s.emit("vuex:action",t,e)}),{prepend:!0}))}function a(t,e){return t.filter(e)[0]}function l(t,e){if(void 0===e&&(e=[]),null===t||"object"!==typeof t)return t;var n=a(e,(function(e){return e.original===t}));if(n)return n.copy;var i=Array.isArray(t)?[]:{};return e.push({original:t,copy:i}),Object.keys(t).forEach((function(n){i[n]=l(t[n],e)})),i}function c(t,e){Object.keys(t).forEach((function(n){return e(t[n],n)}))}function h(t){return null!==t&&"object"===typeof t}function u(t){return t&&"function"===typeof t.then}function d(t,e){return function(){return t(e)}}var p=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},f={namespaced:{configurable:!0}};f.namespaced.get=function(){return!!this._rawModule.namespaced},p.prototype.addChild=function(t,e){this._children[t]=e},p.prototype.removeChild=function(t){delete this._children[t]},p.prototype.getChild=function(t){return this._children[t]},p.prototype.hasChild=function(t){return t in this._children},p.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},p.prototype.forEachChild=function(t){c(this._children,t)},p.prototype.forEachGetter=function(t){this._rawModule.getters&&c(this._rawModule.getters,t)},p.prototype.forEachAction=function(t){this._rawModule.actions&&c(this._rawModule.actions,t)},p.prototype.forEachMutation=function(t){this._rawModule.mutations&&c(this._rawModule.mutations,t)},Object.defineProperties(p.prototype,f);var m=function(t){this.register([],t,!1)};function g(t,e,n){if(e.update(n),n.modules)for(var i in n.modules){if(!e.getChild(i))return void 0;g(t.concat(i),e.getChild(i),n.modules[i])}}m.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},m.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")}),"")},m.prototype.update=function(t){g([],this.root,t)},m.prototype.register=function(t,e,n){var i=this;void 0===n&&(n=!0);var r=new p(e,n);if(0===t.length)this.root=r;else{var s=this.get(t.slice(0,-1));s.addChild(t[t.length-1],r)}e.modules&&c(e.modules,(function(e,r){i.register(t.concat(r),e,n)}))},m.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1],i=e.getChild(n);i&&i.runtime&&e.removeChild(n)},m.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];return!!e&&e.hasChild(n)};var v;var y=function(t){var e=this;void 0===t&&(t={}),!v&&"undefined"!==typeof window&&window.Vue&&N(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var i=t.strict;void 0===i&&(i=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new m(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new v,this._makeLocalGettersCache=Object.create(null);var r=this,s=this,a=s.dispatch,l=s.commit;this.dispatch=function(t,e){return a.call(r,t,e)},this.commit=function(t,e,n){return l.call(r,t,e,n)},this.strict=i;var c=this._modules.root.state;S(this,c,[],this._modules.root),C(this,c),n.forEach((function(t){return t(e)}));var h=void 0!==t.devtools?t.devtools:v.config.devtools;h&&o(this)},_={state:{configurable:!0}};function b(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function w(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;S(t,n,[],t._modules.root,!0),C(t,n,e)}function C(t,e,n){var i=t._vm;t.getters={},t._makeLocalGettersCache=Object.create(null);var r=t._wrappedGetters,s={};c(r,(function(e,n){s[n]=d(e,t),Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})}));var o=v.config.silent;v.config.silent=!0,t._vm=new v({data:{$$state:e},computed:s}),v.config.silent=o,t.strict&&O(t),i&&(n&&t._withCommit((function(){i._data.$$state=null})),v.nextTick((function(){return i.$destroy()})))}function S(t,e,n,i,r){var s=!n.length,o=t._modules.getNamespace(n);if(i.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=i),!s&&!r){var a=A(e,n.slice(0,-1)),l=n[n.length-1];t._withCommit((function(){v.set(a,l,i.state)}))}var c=i.context=E(t,o,n);i.forEachMutation((function(e,n){var i=o+n;k(t,i,e,c)})),i.forEachAction((function(e,n){var i=e.root?n:o+n,r=e.handler||e;I(t,i,r,c)})),i.forEachGetter((function(e,n){var i=o+n;x(t,i,e,c)})),i.forEachChild((function(i,s){S(t,e,n.concat(s),i,r)}))}function E(t,e,n){var i=""===e,r={dispatch:i?t.dispatch:function(n,i,r){var s=P(n,i,r),o=s.payload,a=s.options,l=s.type;return a&&a.root||(l=e+l),t.dispatch(l,o)},commit:i?t.commit:function(n,i,r){var s=P(n,i,r),o=s.payload,a=s.options,l=s.type;a&&a.root||(l=e+l),t.commit(l,o,a)}};return Object.defineProperties(r,{getters:{get:i?function(){return t.getters}:function(){return T(t,e)}},state:{get:function(){return A(t.state,n)}}}),r}function T(t,e){if(!t._makeLocalGettersCache[e]){var n={},i=e.length;Object.keys(t.getters).forEach((function(r){if(r.slice(0,i)===e){var s=r.slice(i);Object.defineProperty(n,s,{get:function(){return t.getters[r]},enumerable:!0})}})),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function k(t,e,n,i){var r=t._mutations[e]||(t._mutations[e]=[]);r.push((function(e){n.call(t,i.state,e)}))}function I(t,e,n,i){var r=t._actions[e]||(t._actions[e]=[]);r.push((function(e){var r=n.call(t,{dispatch:i.dispatch,commit:i.commit,getters:i.getters,state:i.state,rootGetters:t.getters,rootState:t.state},e);return u(r)||(r=Promise.resolve(r)),t._devtoolHook?r.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):r}))}function x(t,e,n,i){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(i.state,i.getters,t.state,t.getters)})}function O(t){t._vm.$watch((function(){return this._data.$$state}),(function(){0}),{deep:!0,sync:!0})}function A(t,e){return e.reduce((function(t,e){return t[e]}),t)}function P(t,e,n){return h(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function N(t){v&&t===v||(v=t,i(v))}_.state.get=function(){return this._vm._data.$$state},_.state.set=function(t){0},y.prototype.commit=function(t,e,n){var i=this,r=P(t,e,n),s=r.type,o=r.payload,a=(r.options,{type:s,payload:o}),l=this._mutations[s];l&&(this._withCommit((function(){l.forEach((function(t){t(o)}))})),this._subscribers.slice().forEach((function(t){return t(a,i.state)})))},y.prototype.dispatch=function(t,e){var n=this,i=P(t,e),r=i.type,s=i.payload,o={type:r,payload:s},a=this._actions[r];if(a){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(o,n.state)}))}catch(c){0}var l=a.length>1?Promise.all(a.map((function(t){return t(s)}))):a[0](s);return new Promise((function(t,e){l.then((function(e){try{n._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(o,n.state)}))}catch(c){0}t(e)}),(function(t){try{n._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(o,n.state,t)}))}catch(c){0}e(t)}))}))}},y.prototype.subscribe=function(t,e){return b(t,this._subscribers,e)},y.prototype.subscribeAction=function(t,e){var n="function"===typeof t?{before:t}:t;return b(n,this._actionSubscribers,e)},y.prototype.watch=function(t,e,n){var i=this;return this._watcherVM.$watch((function(){return t(i.state,i.getters)}),e,n)},y.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._vm._data.$$state=t}))},y.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),S(this,this.state,t,this._modules.get(t),n.preserveState),C(this,this.state)},y.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit((function(){var n=A(e.state,t.slice(0,-1));v.delete(n,t[t.length-1])})),w(this)},y.prototype.hasModule=function(t){return"string"===typeof t&&(t=[t]),this._modules.isRegistered(t)},y.prototype.hotUpdate=function(t){this._modules.update(t),w(this,!0)},y.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(y.prototype,_);var L=B((function(t,e){var n={};return F(e).forEach((function(e){var i=e.key,r=e.val;n[i]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var i=V(this.$store,"mapState",t);if(!i)return;e=i.context.state,n=i.context.getters}return"function"===typeof r?r.call(this,e,n):e[r]},n[i].vuex=!0})),n})),R=B((function(t,e){var n={};return F(e).forEach((function(e){var i=e.key,r=e.val;n[i]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var i=this.$store.commit;if(t){var s=V(this.$store,"mapMutations",t);if(!s)return;i=s.context.commit}return"function"===typeof r?r.apply(this,[i].concat(e)):i.apply(this.$store,[r].concat(e))}})),n})),$=B((function(t,e){var n={};return F(e).forEach((function(e){var i=e.key,r=e.val;r=t+r,n[i]=function(){if(!t||V(this.$store,"mapGetters",t))return this.$store.getters[r]},n[i].vuex=!0})),n})),D=B((function(t,e){var n={};return F(e).forEach((function(e){var i=e.key,r=e.val;n[i]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var i=this.$store.dispatch;if(t){var s=V(this.$store,"mapActions",t);if(!s)return;i=s.context.dispatch}return"function"===typeof r?r.apply(this,[i].concat(e)):i.apply(this.$store,[r].concat(e))}})),n})),M=function(t){return{mapState:L.bind(null,t),mapGetters:$.bind(null,t),mapMutations:R.bind(null,t),mapActions:D.bind(null,t)}};function F(t){return j(t)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}})):[]}function j(t){return Array.isArray(t)||h(t)}function B(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function V(t,e,n){var i=t._modulesNamespaceMap[n];return i}function U(t){void 0===t&&(t={});var e=t.collapsed;void 0===e&&(e=!0);var n=t.filter;void 0===n&&(n=function(t,e,n){return!0});var i=t.transformer;void 0===i&&(i=function(t){return t});var r=t.mutationTransformer;void 0===r&&(r=function(t){return t});var s=t.actionFilter;void 0===s&&(s=function(t,e){return!0});var o=t.actionTransformer;void 0===o&&(o=function(t){return t});var a=t.logMutations;void 0===a&&(a=!0);var c=t.logActions;void 0===c&&(c=!0);var h=t.logger;return void 0===h&&(h=console),function(t){var u=l(t.state);"undefined"!==typeof h&&(a&&t.subscribe((function(t,s){var o=l(s);if(n(t,u,o)){var a=q(),c=r(t),d="mutation "+t.type+a;z(h,d,e),h.log("%c prev state","color: #9E9E9E; font-weight: bold",i(u)),h.log("%c mutation","color: #03A9F4; font-weight: bold",c),h.log("%c next state","color: #4CAF50; font-weight: bold",i(o)),H(h)}u=o})),c&&t.subscribeAction((function(t,n){if(s(t,n)){var i=q(),r=o(t),a="action "+t.type+i;z(h,a,e),h.log("%c action","color: #03A9F4; font-weight: bold",r),H(h)}})))}}function z(t,e,n){var i=n?t.groupCollapsed:t.group;try{i.call(t,e)}catch(r){t.log(e)}}function H(t){try{t.groupEnd()}catch(e){t.log("—— log end ——")}}function q(){var t=new Date;return" @ "+Z(t.getHours(),2)+":"+Z(t.getMinutes(),2)+":"+Z(t.getSeconds(),2)+"."+Z(t.getMilliseconds(),3)}function W(t,e){return new Array(e+1).join(t)}function Z(t,e){return W("0",e-t.toString().length)+t}var K={Store:y,install:N,version:"3.6.2",mapState:L,mapMutations:R,mapGetters:$,mapActions:D,createNamespacedHelpers:M,createLogger:U};e["ZP"]=K},5816:function(t,e,n){"use strict";n.d(e,{Jn:function(){return mt},qX:function(){return ut},Xd:function(){return ht},Mq:function(){return vt},ZF:function(){return gt},KN:function(){return yt}});var i=n(8463),r=n(3333),s=n(4444);const o=(t,e)=>e.some((e=>t instanceof e));let a,l;function c(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function h(){return l||(l=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const u=new WeakMap,d=new WeakMap,p=new WeakMap,f=new WeakMap,m=new WeakMap;function g(t){const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",s)},r=()=>{e(C(t.result)),i()},s=()=>{n(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&u.set(e,t)})).catch((()=>{})),m.set(e,t),e}function v(t){if(d.has(t))return;const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",s),t.removeEventListener("abort",s)},r=()=>{e(),i()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",s),t.addEventListener("abort",s)}));d.set(t,e)}let y={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return d.get(t);if("objectStoreNames"===e)return t.objectStoreNames||p.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return C(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function _(t){y=t(y)}function b(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?h().includes(t)?function(...e){return t.apply(S(this),e),C(u.get(this))}:function(...e){return C(t.apply(S(this),e))}:function(e,...n){const i=t.call(S(this),e,...n);return p.set(i,e.sort?e.sort():[e]),C(i)}}function w(t){return"function"===typeof t?b(t):(t instanceof IDBTransaction&&v(t),o(t,c())?new Proxy(t,y):t)}function C(t){if(t instanceof IDBRequest)return g(t);if(f.has(t))return f.get(t);const e=w(t);return e!==t&&(f.set(t,e),m.set(e,t)),e}const S=t=>m.get(t);function E(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=C(o);return i&&o.addEventListener("upgradeneeded",(t=>{i(C(o.result),t.oldVersion,t.newVersion,C(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{s&&t.addEventListener("close",(()=>s())),r&&t.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),a}const T=["get","getKey","getAll","getAllKeys","count"],k=["put","add","delete","clear"],I=new Map;function x(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(I.get(e))return I.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=k.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!T.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),r&&s.done]))[0]};return I.set(e,s),s}_((t=>({...t,get:(e,n,i)=>x(e,n)||t.get(e,n,i),has:(e,n)=>!!x(e,n)||t.has(e,n)})));
/**
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
 */
class O{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(A(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function A(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const P="@firebase/app",N="0.7.28",L=new r.Yd("@firebase/app"),R="@firebase/app-compat",$="@firebase/analytics-compat",D="@firebase/analytics",M="@firebase/app-check-compat",F="@firebase/app-check",j="@firebase/auth",B="@firebase/auth-compat",V="@firebase/database",U="@firebase/database-compat",z="@firebase/functions",H="@firebase/functions-compat",q="@firebase/installations",W="@firebase/installations-compat",Z="@firebase/messaging",K="@firebase/messaging-compat",G="@firebase/performance",Y="@firebase/performance-compat",X="@firebase/remote-config",J="@firebase/remote-config-compat",Q="@firebase/storage",tt="@firebase/storage-compat",et="@firebase/firestore",nt="@firebase/firestore-compat",it="firebase",rt="9.9.0",st="[DEFAULT]",ot={[P]:"fire-core",[R]:"fire-core-compat",[D]:"fire-analytics",[$]:"fire-analytics-compat",[F]:"fire-app-check",[M]:"fire-app-check-compat",[j]:"fire-auth",[B]:"fire-auth-compat",[V]:"fire-rtdb",[U]:"fire-rtdb-compat",[z]:"fire-fn",[H]:"fire-fn-compat",[q]:"fire-iid",[W]:"fire-iid-compat",[Z]:"fire-fcm",[K]:"fire-fcm-compat",[G]:"fire-perf",[Y]:"fire-perf-compat",[X]:"fire-rc",[J]:"fire-rc-compat",[Q]:"fire-gcs",[tt]:"fire-gcs-compat",[et]:"fire-fst",[nt]:"fire-fst-compat","fire-js":"fire-js",[it]:"fire-js-all"},at=new Map,lt=new Map;function ct(t,e){try{t.container.addComponent(e)}catch(n){L.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ht(t){const e=t.name;if(lt.has(e))return L.debug(`There were multiple attempts to register component ${e}.`),!1;lt.set(e,t);for(const n of at.values())ct(n,t);return!0}function ut(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
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
 */
const dt={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},pt=new s.LL("app","Firebase",dt);
/**
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
 */
class ft{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new i.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw pt.create("app-deleted",{appName:this._name})}}
/**
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
 */const mt=rt;function gt(t,e={}){if("object"!==typeof e){const t=e;e={name:t}}const n=Object.assign({name:st,automaticDataCollectionEnabled:!1},e),r=n.name;if("string"!==typeof r||!r)throw pt.create("bad-app-name",{appName:String(r)});const o=at.get(r);if(o){if((0,s.vZ)(t,o.options)&&(0,s.vZ)(n,o.config))return o;throw pt.create("duplicate-app",{appName:r})}const a=new i.H0(r);for(const i of lt.values())a.addComponent(i);const l=new ft(t,n,a);return at.set(r,l),l}function vt(t=st){const e=at.get(t);if(!e)throw pt.create("no-app",{appName:t});return e}function yt(t,e,n){var r;let s=null!==(r=ot[t])&&void 0!==r?r:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${s}" with version "${e}":`];return o&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void L.warn(t.join(" "))}ht(new i.wA(`${s}-version`,(()=>({library:s,version:e})),"VERSION"))}
/**
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
 */
const _t="firebase-heartbeat-database",bt=1,wt="firebase-heartbeat-store";let Ct=null;function St(){return Ct||(Ct=E(_t,bt,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(wt)}}}).catch((t=>{throw pt.create("storage-open",{originalErrorMessage:t.message})}))),Ct}async function Et(t){var e;try{const e=await St();return e.transaction(wt).objectStore(wt).get(kt(t))}catch(n){throw pt.create("storage-get",{originalErrorMessage:null===(e=n)||void 0===e?void 0:e.message})}}async function Tt(t,e){var n;try{const n=await St(),i=n.transaction(wt,"readwrite"),r=i.objectStore(wt);return await r.put(e,kt(t)),i.done}catch(i){throw pt.create("storage-set",{originalErrorMessage:null===(n=i)||void 0===n?void 0:n.message})}}function kt(t){return`${t.name}!${t.options.appId}`}
/**
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
 */const It=1024,xt=2592e6;class Ot{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Nt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=At();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((t=>t.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=xt})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=At(),{heartbeatsToSend:e,unsentEntries:n}=Pt(this._heartbeatsCache.heartbeats),i=(0,s.L)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function At(){const t=new Date;return t.toISOString().substring(0,10)}function Pt(t,e=It){const n=[];let i=t.slice();for(const r of t){const t=n.find((t=>t.agent===r.agent));if(t){if(t.dates.push(r.date),Lt(n)>e){t.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Lt(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Nt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.hl)()&&(0,s.eu)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await Et(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Tt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Tt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Lt(t){return(0,s.L)(JSON.stringify({version:2,heartbeats:t})).length}
/**
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
 */function Rt(t){ht(new i.wA("platform-logger",(t=>new O(t)),"PRIVATE")),ht(new i.wA("heartbeat",(t=>new Ot(t)),"PRIVATE")),yt(P,N,t),yt(P,N,"esm2017"),yt("fire-js","")}Rt("")},8463:function(t,e,n){"use strict";n.d(e,{H0:function(){return c},wA:function(){return r}});var i=n(4444);class r{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
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
 */const s="[DEFAULT]";
/**
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
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new i.BH;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),i=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(i)return null;throw r}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(l(t))try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:i});n.resolve(t)}catch(e){}}}}clearInstance(t=s){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=s){return this.instances.has(t)}getOptions(t=s){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[r,s]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(r);n===t&&s.resolve(i)}return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(t),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&t(s,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch(i){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(i){}return n||null}normalizeInstanceIdentifier(t=s){return this.component?this.component.multipleInstances?t:s:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===s?void 0:t}function l(t){return"EAGER"===t.instantiationMode}
/**
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
 */class c{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},3333:function(t,e,n){"use strict";n.d(e,{Yd:function(){return c},in:function(){return r}});
/**
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
 */
const i=[];var r;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(r||(r={}));const s={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},o=r.INFO,a={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},l=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),r=a[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${i}]  ${t.name}:`,...n)};class c{constructor(t){this.name=t,this._logLevel=o,this._logHandler=l,this._userLogHandler=null,i.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in r))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?s[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...t),this._logHandler(this,r.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...t),this._logHandler(this,r.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,r.INFO,...t),this._logHandler(this,r.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,r.WARN,...t),this._logHandler(this,r.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...t),this._logHandler(this,r.ERROR,...t)}}}}]);
//# sourceMappingURL=chunk-vendors.4f281c37.js.map