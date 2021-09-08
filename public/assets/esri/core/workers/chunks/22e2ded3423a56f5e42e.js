(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[5826,3100],{57474:(e,t,n)=>{"use strict";n.d(t,{V:()=>c});var r=n(13664),s=(n(93100),n(8811)),i=n(45851),a=n(99204);const o=i.Z.getLogger("esri.assets");function c(e){if(!r.Z.assetsPath)throw o.errorOnce("The API assets location needs to be set using config.assetsPath. More information: https://arcg.is/1OzLe50"),new s.Z("assets:path-not-set","config.assetsPath is not set");return(0,a.v_)(r.Z.assetsPath,e)}},19153:(e,t,n)=>{"use strict";n.d(t,{E:()=>r,R:()=>s});const r=1e-6,s=Math.random,i=Math.PI/180,a=180/Math.PI;Object.freeze({__proto__:null,EPSILON:r,RANDOM:s,toRadian:function(e){return e*i},toDegree:function(e){return e*a},equals:function(e,t){return Math.abs(e-t)<=r*Math.max(1,Math.abs(e),Math.abs(t))}})},56647:(e,t,n)=>{"use strict";n.d(t,{q:()=>a});var r,s,i={exports:{}};r=i,void 0!==(s=function(){function e(n,r,s,i,a){for(;i>s;){if(i-s>600){var o=i-s+1,c=r-s+1,u=Math.log(o),l=.5*Math.exp(2*u/3),h=.5*Math.sqrt(u*l*(o-l)/o)*(c-o/2<0?-1:1);e(n,r,Math.max(s,Math.floor(r-c*l/o+h)),Math.min(i,Math.floor(r+(o-c)*l/o+h)),a)}var d=n[r],f=s,m=i;for(t(n,s,r),a(n[i],d)>0&&t(n,s,i);f<m;){for(t(n,f,m),f++,m--;a(n[f],d)<0;)f++;for(;a(n[m],d)>0;)m--}0===a(n[s],d)?t(n,s,m):t(n,++m,i),m<=r&&(s=m+1),r<=m&&(i=m-1)}}function t(e,t,n){var r=e[t];e[t]=e[n],e[n]=r}function n(e,t){return e<t?-1:e>t?1:0}return function(t,r,s,i,a){e(t,r,s||0,i||t.length-1,a||n)}}())&&(r.exports=s);var a=i.exports},10188:(e,t,n)=>{"use strict";n.d(t,{E:()=>h,a:()=>d,b:()=>c,c:()=>x,d:()=>g,e:()=>w,f:()=>u,g:()=>a,h:()=>m,i:()=>f,k:()=>_,l:()=>i,m:()=>b,n:()=>M,p:()=>p,q:()=>q,r:()=>v,s:()=>o,t:()=>y,u:()=>Y});var r=n(88230),s=n(19153);function i(e){const t=e[0],n=e[1],r=e[2];return Math.sqrt(t*t+n*n+r*r)}function a(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}function o(e,t,n,r){return e[0]=t,e[1]=n,e[2]=r,e}function c(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e}function u(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e}function l(e,t,n){return e[0]=t[0]*n[0],e[1]=t[1]*n[1],e[2]=t[2]*n[2],e}function h(e,t,n){return e[0]=t[0]/n[0],e[1]=t[1]/n[1],e[2]=t[2]/n[2],e}function d(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e}function f(e,t){const n=t[0]-e[0],r=t[1]-e[1],s=t[2]-e[2];return Math.sqrt(n*n+r*r+s*s)}function m(e,t){const n=t[0]-e[0],r=t[1]-e[1],s=t[2]-e[2];return n*n+r*r+s*s}function p(e){const t=e[0],n=e[1],r=e[2];return t*t+n*n+r*r}function M(e,t){const n=t[0],r=t[1],s=t[2];let i=n*n+r*r+s*s;return i>0&&(i=1/Math.sqrt(i),e[0]=t[0]*i,e[1]=t[1]*i,e[2]=t[2]*i),e}function g(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function x(e,t,n){const r=t[0],s=t[1],i=t[2],a=n[0],o=n[1],c=n[2];return e[0]=s*c-i*o,e[1]=i*a-r*c,e[2]=r*o-s*a,e}function w(e,t,n,r){const s=t[0],i=t[1],a=t[2];return e[0]=s+r*(n[0]-s),e[1]=i+r*(n[1]-i),e[2]=a+r*(n[2]-a),e}function b(e,t,n){const r=t[0],s=t[1],i=t[2];return e[0]=n[0]*r+n[4]*s+n[8]*i+n[12],e[1]=n[1]*r+n[5]*s+n[9]*i+n[13],e[2]=n[2]*r+n[6]*s+n[10]*i+n[14],e}function y(e,t,n){const r=t[0],s=t[1],i=t[2];return e[0]=r*n[0]+s*n[3]+i*n[6],e[1]=r*n[1]+s*n[4]+i*n[7],e[2]=r*n[2]+s*n[5]+i*n[8],e}function q(e,t,n){const r=n[0],s=n[1],i=n[2],a=n[3],o=t[0],c=t[1],u=t[2];let l=s*u-i*c,h=i*o-r*u,d=r*c-s*o,f=s*d-i*h,m=i*l-r*d,p=r*h-s*l;const M=2*a;return l*=M,h*=M,d*=M,f*=2,m*=2,p*=2,e[0]=o+l+f,e[1]=c+h+m,e[2]=u+d+p,e}const B=(0,r.c)(),S=(0,r.c)();function _(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]}function v(e,t,n){const r=n[0]-t[0],s=n[1]-t[1],i=n[2]-t[2];let a=r*r+s*s+i*i;return a>0?(a=1/Math.sqrt(a),e[0]=r*a,e[1]=s*a,e[2]=i*a,e):(e[0]=0,e[1]=0,e[2]=0,e)}const E=u,T=l,k=h,U=f,O=m,Y=i,I=p;Object.freeze({__proto__:null,length:i,copy:a,set:o,add:c,subtract:u,multiply:l,divide:h,ceil:function(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e},floor:function(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e},min:function(e,t,n){return e[0]=Math.min(t[0],n[0]),e[1]=Math.min(t[1],n[1]),e[2]=Math.min(t[2],n[2]),e},max:function(e,t,n){return e[0]=Math.max(t[0],n[0]),e[1]=Math.max(t[1],n[1]),e[2]=Math.max(t[2],n[2]),e},round:function(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e[2]=Math.round(t[2]),e},scale:d,scaleAndAdd:function(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e[2]=t[2]+n[2]*r,e},distance:f,squaredDistance:m,squaredLength:p,negate:function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e},inverse:function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e},normalize:M,dot:g,cross:x,lerp:w,hermite:function(e,t,n,r,s,i){const a=i*i,o=a*(2*i-3)+1,c=a*(i-2)+i,u=a*(i-1),l=a*(3-2*i);return e[0]=t[0]*o+n[0]*c+r[0]*u+s[0]*l,e[1]=t[1]*o+n[1]*c+r[1]*u+s[1]*l,e[2]=t[2]*o+n[2]*c+r[2]*u+s[2]*l,e},bezier:function(e,t,n,r,s,i){const a=1-i,o=a*a,c=i*i,u=o*a,l=3*i*o,h=3*c*a,d=c*i;return e[0]=t[0]*u+n[0]*l+r[0]*h+s[0]*d,e[1]=t[1]*u+n[1]*l+r[1]*h+s[1]*d,e[2]=t[2]*u+n[2]*l+r[2]*h+s[2]*d,e},random:function(e,t){t=t||1;const n=2*(0,s.R)()*Math.PI,r=2*(0,s.R)()-1,i=Math.sqrt(1-r*r)*t;return e[0]=Math.cos(n)*i,e[1]=Math.sin(n)*i,e[2]=r*t,e},transformMat4:b,transformMat3:y,transformQuat:q,rotateX:function(e,t,n,r){const s=[],i=[];return s[0]=t[0]-n[0],s[1]=t[1]-n[1],s[2]=t[2]-n[2],i[0]=s[0],i[1]=s[1]*Math.cos(r)-s[2]*Math.sin(r),i[2]=s[1]*Math.sin(r)+s[2]*Math.cos(r),e[0]=i[0]+n[0],e[1]=i[1]+n[1],e[2]=i[2]+n[2],e},rotateY:function(e,t,n,r){const s=[],i=[];return s[0]=t[0]-n[0],s[1]=t[1]-n[1],s[2]=t[2]-n[2],i[0]=s[2]*Math.sin(r)+s[0]*Math.cos(r),i[1]=s[1],i[2]=s[2]*Math.cos(r)-s[0]*Math.sin(r),e[0]=i[0]+n[0],e[1]=i[1]+n[1],e[2]=i[2]+n[2],e},rotateZ:function(e,t,n,r){const s=[],i=[];return s[0]=t[0]-n[0],s[1]=t[1]-n[1],s[2]=t[2]-n[2],i[0]=s[0]*Math.cos(r)-s[1]*Math.sin(r),i[1]=s[0]*Math.sin(r)+s[1]*Math.cos(r),i[2]=s[2],e[0]=i[0]+n[0],e[1]=i[1]+n[1],e[2]=i[2]+n[2],e},angle:function(e,t){a(B,e),a(S,t),M(B,B),M(S,S);const n=g(B,S);return n>1?0:n<-1?Math.PI:Math.acos(n)},str:function(e){return"vec3("+e[0]+", "+e[1]+", "+e[2]+")"},exactEquals:_,equals:function(e,t){const n=e[0],r=e[1],i=e[2],a=t[0],o=t[1],c=t[2];return Math.abs(n-a)<=s.E*Math.max(1,Math.abs(n),Math.abs(a))&&Math.abs(r-o)<=s.E*Math.max(1,Math.abs(r),Math.abs(o))&&Math.abs(i-c)<=s.E*Math.max(1,Math.abs(i),Math.abs(c))},direction:v,sub:E,mul:T,div:k,dist:U,sqrDist:O,len:Y,sqrLen:I})},88230:(e,t,n)=>{"use strict";function r(){return[0,0,0]}function s(e){return[e[0],e[1],e[2]]}function i(e,t,n){return[e,t,n]}function a(e){const t=[0,0,0],n=Math.min(3,e.length);for(let r=0;r<n;++r)t[r]=e[r];return t}function o(e,t){return new Float64Array(e,t,3)}function c(){return i(1,1,1)}function u(){return i(1,0,0)}function l(){return i(0,1,0)}function h(){return i(0,0,1)}n.d(t,{O:()=>f,Z:()=>d,a:()=>s,b:()=>o,c:()=>r,d:()=>a,f:()=>i});const d=[0,0,0],f=c(),m=u(),p=l(),M=h();Object.freeze({__proto__:null,create:r,clone:s,fromValues:i,fromArray:a,createView:o,zeros:function(){return[0,0,0]},ones:c,unitX:u,unitY:l,unitZ:h,ZEROS:d,ONES:f,UNIT_X:m,UNIT_Y:p,UNIT_Z:M})},4609:(e,t,n)=>{"use strict";n.d(t,{QB:()=>o});var r=n(69288),s=n(67380),i=n(37384),a=n(56647);class o{constructor(e=9,t){this.compareMinX=h,this.compareMinY=d,this.toBBox=function(e){return e},this._maxEntries=Math.max(4,e||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),t&&("function"==typeof t?this.toBBox=t:this._initFormat(t)),this.clear()}destroy(){this.clear(),b.prune(),y.prune(),q.prune(),B.prune()}all(e){this._all(this.data,e)}search(e,t){let n=this.data;const r=this.toBBox;if(x(e,n))for(b.clear();n;){for(let s=0,i=n.children.length;s<i;s++){const i=n.children[s],a=n.leaf?r(i):i;x(e,a)&&(n.leaf?t(i):g(e,a)?this._all(i,t):b.push(i))}n=b.pop()}}collides(e){let t=this.data;const n=this.toBBox;if(!x(e,t))return!1;for(b.clear();t;){for(let r=0,s=t.children.length;r<s;r++){const s=t.children[r],i=t.leaf?n(s):s;if(x(e,i)){if(t.leaf||g(e,i))return!0;b.push(s)}}t=b.pop()}return!1}load(e){if(!e.length)return this;if(e.length<this._minEntries){for(let t=0,n=e.length;t<n;t++)this.insert(e[t]);return this}let t=this._build(e.slice(0,e.length),0,e.length-1,0);if(this.data.children.length)if(this.data.height===t.height)this._splitRoot(this.data,t);else{if(this.data.height<t.height){const e=this.data;this.data=t,t=e}this._insert(t,this.data.height-t.height-1,!0)}else this.data=t;return this}insert(e){return e&&this._insert(e,this.data.height-1),this}clear(){return this.data=new _([]),this}remove(e){if(!e)return this;let t,n=this.data,i=null,a=0,o=!1;const c=this.toBBox(e);for(q.clear(),B.clear();n||q.length>0;){var u;if(n||(n=(0,s.j0)(q.pop()),i=q.data[q.length-1],a=null!=(u=B.pop())?u:0,o=!0),n.leaf&&(t=(0,r.cq)(n.children,e,n.children.length,n.indexHint),-1!==t))return n.children.splice(t,1),q.push(n),this._condense(q),this;o||n.leaf||!g(n,c)?i?(a++,n=i.children[a],o=!1):n=null:(q.push(n),B.push(a),a=0,i=n,n=n.children[0])}return this}toJSON(){return this.data}fromJSON(e){return this.data=e,this}_all(e,t){let n=e;for(y.clear();n;){var r;if(!0===n.leaf)for(const e of n.children)t(e);else y.pushArray(n.children);n=null!=(r=y.pop())?r:null}}_build(e,t,n,r){const s=n-t+1;let i=this._maxEntries;if(s<=i){const r=new _(e.slice(t,n+1));return c(r,this.toBBox),r}r||(r=Math.ceil(Math.log(s)/Math.log(i)),i=Math.ceil(s/i**(r-1)));const a=new v([]);a.height=r;const o=Math.ceil(s/i),u=o*Math.ceil(Math.sqrt(i));w(e,t,n,u,this.compareMinX);for(let s=t;s<=n;s+=u){const t=Math.min(s+u-1,n);w(e,s,t,o,this.compareMinY);for(let n=s;n<=t;n+=o){const s=Math.min(n+o-1,t);a.children.push(this._build(e,n,s,r-1))}}return c(a,this.toBBox),a}_chooseSubtree(e,t,n,r){for(;r.push(t),!0!==t.leaf&&r.length-1!==n;){let n,r=1/0,s=1/0;for(let i=0,a=t.children.length;i<a;i++){const a=t.children[i],o=f(a),c=p(e,a)-o;c<s?(s=c,r=o<r?o:r,n=a):c===s&&o<r&&(r=o,n=a)}t=n||t.children[0]}return t}_insert(e,t,n){const r=this.toBBox,s=n?e:r(e);q.clear();const i=this._chooseSubtree(s,this.data,t,q);for(i.children.push(e),l(i,s);t>=0&&q.data[t].children.length>this._maxEntries;)this._split(q,t),t--;this._adjustParentBBoxes(s,q,t)}_split(e,t){const n=e.data[t],r=n.children.length,s=this._minEntries;this._chooseSplitAxis(n,s,r);const i=this._chooseSplitIndex(n,s,r);if(!i)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const a=n.children.splice(i,n.children.length-i),o=n.leaf?new _(a):new v(a);o.height=n.height,c(n,this.toBBox),c(o,this.toBBox),t?e.data[t-1].children.push(o):this._splitRoot(n,o)}_splitRoot(e,t){this.data=new v([e,t]),this.data.height=e.height+1,c(this.data,this.toBBox)}_chooseSplitIndex(e,t,n){let r,s,i;r=s=1/0;for(let a=t;a<=n-t;a++){const t=u(e,0,a,this.toBBox),o=u(e,a,n,this.toBBox),c=M(t,o),l=f(t)+f(o);c<r?(r=c,i=a,s=l<s?l:s):c===r&&l<s&&(s=l,i=a)}return i}_chooseSplitAxis(e,t,n){const r=e.leaf?this.compareMinX:h,s=e.leaf?this.compareMinY:d;this._allDistMargin(e,t,n,r)<this._allDistMargin(e,t,n,s)&&e.children.sort(r)}_allDistMargin(e,t,n,r){e.children.sort(r);const s=this.toBBox,i=u(e,0,t,s),a=u(e,n-t,n,s);let o=m(i)+m(a);for(let r=t;r<n-t;r++){const t=e.children[r];l(i,e.leaf?s(t):t),o+=m(i)}for(let r=n-t-1;r>=t;r--){const t=e.children[r];l(a,e.leaf?s(t):t),o+=m(a)}return o}_adjustParentBBoxes(e,t,n){for(let r=n;r>=0;r--)l(t.data[r],e)}_condense(e){for(let t=e.length-1;t>=0;t--){const n=e.data[t];if(0===n.children.length)if(t>0){const s=e.data[t-1],i=s.children;i.splice((0,r.cq)(i,n,i.length,s.indexHint),1)}else this.clear();else c(n,this.toBBox)}}_initFormat(e){const t=["return a"," - b",";"];this.compareMinX=new Function("a","b",t.join(e[0])),this.compareMinY=new Function("a","b",t.join(e[1])),this.toBBox=new Function("a","return {minX: a"+e[0]+", minY: a"+e[1]+", maxX: a"+e[2]+", maxY: a"+e[3]+"};")}}function c(e,t){u(e,0,e.children.length,t,e)}function u(e,t,n,r,s){s||(s=new _([])),s.minX=1/0,s.minY=1/0,s.maxX=-1/0,s.maxY=-1/0;for(let i,a=t;a<n;a++)i=e.children[a],l(s,e.leaf?r(i):i);return s}function l(e,t){e.minX=Math.min(e.minX,t.minX),e.minY=Math.min(e.minY,t.minY),e.maxX=Math.max(e.maxX,t.maxX),e.maxY=Math.max(e.maxY,t.maxY)}function h(e,t){return e.minX-t.minX}function d(e,t){return e.minY-t.minY}function f(e){return(e.maxX-e.minX)*(e.maxY-e.minY)}function m(e){return e.maxX-e.minX+(e.maxY-e.minY)}function p(e,t){return(Math.max(t.maxX,e.maxX)-Math.min(t.minX,e.minX))*(Math.max(t.maxY,e.maxY)-Math.min(t.minY,e.minY))}function M(e,t){const n=Math.max(e.minX,t.minX),r=Math.max(e.minY,t.minY),s=Math.min(e.maxX,t.maxX),i=Math.min(e.maxY,t.maxY);return Math.max(0,s-n)*Math.max(0,i-r)}function g(e,t){return e.minX<=t.minX&&e.minY<=t.minY&&t.maxX<=e.maxX&&t.maxY<=e.maxY}function x(e,t){return t.minX<=e.maxX&&t.minY<=e.maxY&&t.maxX>=e.minX&&t.maxY>=e.minY}function w(e,t,n,r,i){const o=[t,n];for(;o.length;){const t=(0,s.j0)(o.pop()),n=(0,s.j0)(o.pop());if(t-n<=r)continue;const c=n+Math.ceil((t-n)/r/2)*r;(0,a.q)(e,c,n,t,i),o.push(n,c,c,t)}}const b=new i.Z,y=new i.Z,q=new i.Z,B=new i.Z({deallocator:void 0});class S extends class{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}{constructor(){super(...arguments),this.height=1,this.indexHint=new r.SO}}class _ extends S{constructor(e){super(),this.children=e,this.leaf=!0}}class v extends S{constructor(e){super(),this.children=e,this.leaf=!1}}},68589:(e,t,n)=>{"use strict";n.d(t,{ZF:()=>m,Kt:()=>p,jE:()=>M,uZ:()=>c,Vl:()=>d,xV:()=>i,i2:()=>a,wt:()=>u,t7:()=>h,k3:()=>l,Sf:()=>o,BV:()=>f});var r=n(10188);const s=new Float32Array(1),i=Number.isFinite||function(e){return"number"==typeof e&&window.isFinite(e)},a=Number.isNaN||function(e){return e!=e};function o(e){--e;for(let t=1;t<32;t<<=1)e|=e>>t;return e+1}function c(e,t,n){return Math.min(Math.max(e,t),n)}function u(e){return 0==(e&e-1)}Math.sign;const l=Math.log2||function(e){return Math.log(e)/Math.LN2};function h(e,t,n){return e+(t-e)*n}function d(e){return e*Math.PI/180}function f(e){return 180*e/Math.PI}function m(e){return Math.acos(c(e,-1,1))}function p(e){return Math.asin(c(e,-1,1))}function M(e,t){const n=(0,r.l)(e),s=p(e[2]/n),i=Math.atan2(e[1]/n,e[0]/n);return(0,r.s)(t,n,s,i),t}var g;g=34028234663852886e22,s[0]=g,s[0]},30817:(e,t,n)=>{"use strict";n.d(t,{gV:()=>Y,En:()=>q,Z7:()=>T,c9:()=>E,_R:()=>_,qE:()=>k,cM:()=>v,hd:()=>u,ty:()=>B,Jo:()=>I,$C:()=>S}),n(77645);var r=n(30223),s=n(390),i=n(61948),a=n(13834),o=n(31174),c=n(38742);const u=39.37,l=a.sv.radius*Math.PI/200,h=/UNIT\[([^\]]+)\]\]$/i,d=c.Z,f=/UNIT\[([^\]]+)\]/i,m=new Set([4261,4305,4807,4810,4811,4812,4816,4819,4821,4901,4902,37225,104139,104140]),p=(0,r.wY)()({meter:"meters",foot:"feet",foot_us:"us-feet",foot_clarke:"clarke-feet",yard_clarke:"clarke-yards",link_clarke:"clarke-links",yard_sears:"sears-yards",foot_sears:"sears-feet",chain_sears:"sears-chains",chain_benoit_1895_b:"benoit-1895-b-chains",yard_indian:"indian-yards",yard_indian_1937:"indian-1937-yards",foot_gold_coast:"gold-coast-feet",chain_sears_1922_truncated:"sears-1922-truncated-chains","50_kilometers":"50-kilometers","150_kilometers":"150-kilometers"}),M=e=>e*e,g=e=>e*e*e,x={length:{baseUnit:"meters",units:{millimeters:{inBaseUnits:.001},centimeters:{inBaseUnits:.01},decimeters:{inBaseUnits:.1},meters:{inBaseUnits:1},kilometers:{inBaseUnits:1e3},inches:{inBaseUnits:.0254},feet:{inBaseUnits:.3048},yards:{inBaseUnits:.9144},miles:{inBaseUnits:1609.344},"nautical-miles":{inBaseUnits:1852},"us-feet":{inBaseUnits:1200/3937}}},area:{baseUnit:"square-meters",units:{"square-millimeters":{inBaseUnits:M(.001)},"square-centimeters":{inBaseUnits:M(.01)},"square-decimeters":{inBaseUnits:M(.1)},"square-meters":{inBaseUnits:1},"square-kilometers":{inBaseUnits:M(1e3)},"square-inches":{inBaseUnits:M(.0254)},"square-feet":{inBaseUnits:M(.3048)},"square-yards":{inBaseUnits:M(.9144)},"square-miles":{inBaseUnits:M(1609.344)},"square-us-feet":{inBaseUnits:M(1200/3937)},acres:{inBaseUnits:.0015625*M(1609.344)},ares:{inBaseUnits:100},hectares:{inBaseUnits:1e4}}},volume:{baseUnit:"liters",units:{liters:{inBaseUnits:1},"cubic-millimeters":{inBaseUnits:1e3*g(.001)},"cubic-centimeters":{inBaseUnits:1e3*g(.01)},"cubic-decimeters":{inBaseUnits:1e3*g(.1)},"cubic-meters":{inBaseUnits:1e3},"cubic-kilometers":{inBaseUnits:1e3*g(1e3)},"cubic-inches":{inBaseUnits:1e3*g(.0254)},"cubic-feet":{inBaseUnits:1e3*g(.3048)},"cubic-yards":{inBaseUnits:1e3*g(.9144)},"cubic-miles":{inBaseUnits:1e3*g(1609.344)}}},angle:{baseUnit:"radians",units:{radians:{inBaseUnits:1},degrees:{inBaseUnits:Math.PI/180}}}},w=function(){const e={};for(const t in x)for(const n in x[t].units)e[n]=t;return e}();function b(e){const t=w[e];if(t)return t;throw new Error("unknown measure")}function y(e,t=null){return t=t||b(e),x[t].baseUnit===e}function q(e,t,n){if(t===n)return e;const r=b(t);if(r!==b(n))throw new Error("incompatible units");const s=y(t,r)?e:function(e,t,n){return e*x[n].units[t].inBaseUnits}(e,t,r);return y(n,r)?s:function(e,t,n){return e/x[n].units[t].inBaseUnits}(s,n,r)}function B(e,t,n){return q(e,t,"meters")/(n*Math.PI/180)}function S(e){return p.fromJSON(e.toLowerCase())||null}function _(e){if(e&&"object"==typeof e&&!(0,o.N$)(e))return 1;const t=E(e);return t>1e5?1:t}function v(e){return E(e)>=(e instanceof i.Z?(0,s.Iu)(e).metersPerDegree:1e5)?"meters":k(e)}function E(e,t=a.sv.metersPerDegree){return T(e,!0)||t}function T(e,t=!1){let n,r,s=null;if(null!=e&&("object"==typeof e?(n=e.wkid,r=e.wkt):"number"==typeof e?n=e:"string"==typeof e&&(r=e)),n){if((0,o.o$)(n))return a.yr.metersPerDegree;if((0,o.ME)(n))return a.Z1.metersPerDegree;s=d.values[d[n]],!s&&t&&m.has(n)&&(s=l)}else if(r)if(-1!==r.search(/^PROJCS/i)){const e=h.exec(r);e&&e[1]&&(s=parseFloat(e[1].split(",")[1]))}else if(-1!==r.search(/^GEOCCS/i)){const e=f.exec(r);e&&e[1]&&(s=parseFloat(e[1].split(",")[1]))}return s}function k(e){let t,n,r=null;if(null!=e&&("object"==typeof e?(t=e.wkid,n=e.wkt):"number"==typeof e?t=e:"string"==typeof e&&(n=e)),t)r=d.units[d[t]];else if(n&&-1!==n.search(/^PROJCS/i)){let e=h.exec(n);e&&e[1]&&(e=/[\\"\\']{1}([^\\"\\']+)/.exec(e[1]),r=e&&e[1])}return r?S(r):null}const U={esriAcres:"acres",esriAres:"ares",esriHectares:"hectares",esriSquareCentimeters:"square-centimeters",esriSquareDecimeters:"square-decimeters",esriSquareFeet:"square-feet",esriSquareInches:"square-inches",esriSquareKilometers:"square-kilometers",esriSquareMeters:"square-meters",esriSquareMiles:"square-miles",esriSquareMillimeters:"square-millimeters",esriSquareUsFeet:"square-us-feet",esriSquareYards:"square-yards"},O={esriCentimeters:"centimeters",esriDecimeters:"decimeters",esriFeet:"feet",esriInches:"inches",esriKilometers:"kilometers",esriMeters:"meters",esriMiles:"miles",esriMillimeters:"millimeters",esriNauticalMiles:"nautical-miles",esriYards:"yards"},Y=(0,r.wY)()(U),I=(0,r.wY)()(O);(0,r.wY)()({...U,...O})},390:(e,t,n)=>{"use strict";n.d(t,{GG:()=>o,HQ:()=>c,VY:()=>u,wY:()=>l,Iu:()=>f,e8:()=>m,rS:()=>d,N_:()=>h});var r=n(61948),s=n(13834),i=n(31174);function a(e){return new r.Z({wkt:`GEOCCS["Spherical geocentric",\n    DATUM["Not specified",\n      SPHEROID["Sphere",${e.radius},0]],\n    PRIMEM["Greenwich",0.0,\n      AUTHORITY["EPSG","8901"]],\n    UNIT["m",1.0],\n    AXIS["Geocentric X",OTHER],\n    AXIS["Geocentric Y",EAST],\n    AXIS["Geocentric Z",NORTH]\n  ]`})}const o=a(s.sv),c=a(s.yr),u=a(s.Z1),l=new r.Z({wkt:`GEOCCS["WGS 84",\n  DATUM["WGS_1984",\n    SPHEROID["WGS 84",${s.sv.radius},298.257223563,\n      AUTHORITY["EPSG","7030"]],\n    AUTHORITY["EPSG","6326"]],\n  PRIMEM["Greenwich",0,\n    AUTHORITY["EPSG","8901"]],\n  UNIT["m",1.0,\n    AUTHORITY["EPSG","9001"]],\n  AXIS["Geocentric X",OTHER],\n  AXIS["Geocentric Y",OTHER],\n  AXIS["Geocentric Z",NORTH],\n  AUTHORITY["EPSG","4978"]\n]`});function h(e){return e&&e===s.yr?c:e&&e===s.Z1?u:o}function d(e){return e&&((0,i.BZ)(e)||e===c)?c:e&&((0,i.V2)(e)||e===u)?u:o}function f(e){return e&&((0,i.BZ)(e)||e===c)?s.yr:e&&((0,i.V2)(e)||e===u)?s.Z1:s.sv}function m(e){return(0,i.o$)(e)?s.yr:(0,i.ME)(e)?s.Z1:s.sv}},32138:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>u,ElevationSamplerWorker:()=>o});var r=n(77645),s=n(67380),i=n(4609),a=n(69130);class o{async createIndex(e,t){const n=new Array;if(!e.vertexAttributes||!e.vertexAttributes.position)return new i.QB;const r=this.createMeshData(e),a=(0,s.pC)(t)?await t.invoke("createIndexThread",r,{transferList:n}):this.createIndexThread(r).result;return this.createPooledRBush().fromJSON(a)}createIndexThread(e){const t=new Float64Array(e.position),n=this.createPooledRBush();return e.components?this.createIndexComponentsThread(n,t,e.components.map((e=>new Uint32Array(e)))):this.createIndexAllThread(n,t)}createIndexAllThread(e,t){const n=new Array(t.length/9);let r=0;for(let e=0;e<t.length;e+=9)n[r++]=c(t,e+0,e+3,e+6);return e.load(n),{result:e.toJSON()}}createIndexComponentsThread(e,t,n){let r=0;for(const e of n)r+=e.length/3;const s=new Array(r);let i=0;for(const e of n)for(let n=0;n<e.length;n+=3)s[i++]=c(t,3*e[n+0],3*e[n+1],3*e[n+2]);return e.load(s),{result:e.toJSON()}}createMeshData(e){const t=(e.transform?(0,a.I5)({position:e.vertexAttributes.position,normal:null,tangent:null},e.transform,e.spatialReference).position:e.vertexAttributes.position).buffer;return!e.components||e.components.some((e=>!e.faces))?{position:t}:{position:t,components:e.components.map((e=>e.faces))}}createPooledRBush(){return new i.QB(9,(0,r.Z)("csp-restrictions")?e=>e:[".minX",".minY",".maxX",".maxY"])}}function c(e,t,n,r){return{minX:Math.min(e[t+0],e[n+0],e[r+0]),maxX:Math.max(e[t+0],e[n+0],e[r+0]),minY:Math.min(e[t+1],e[n+1],e[r+1]),maxY:Math.max(e[t+1],e[n+1],e[r+1]),p0:[e[t+0],e[t+1],e[t+2]],p1:[e[n+0],e[n+1],e[n+2]],p2:[e[r+0],e[r+1],e[r+2]]}}const u=o},93100:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>O});var r=n(13664),s=n(27512),i=n(8811),a=n(327),o=n(77645),c=n(14483),u=n(67380),l=n(8764),h=n(99204),d=n(52096),f=n(36727);async function m(e,t){const c=(0,h.HK)(e),f=(0,h.jc)(e);f||c||(e=(0,h.Fv)(e));const x={url:e,requestOptions:{...(0,u.Wg)(t)}};let w=(0,h.oh)(e);if(w){const e=await async function(e,t){if(null!=e.responseData)return e.responseData;if(e.headers&&(t.requestOptions.headers={...t.requestOptions.headers,...e.headers}),e.query&&(t.requestOptions.query={...t.requestOptions.query,...e.query}),e.before){let n,r;try{r=await e.before(t)}catch(e){n=S("request:interceptor",e,t)}if((r instanceof Error||r instanceof i.Z)&&(n=S("request:interceptor",r,t)),n)throw e.error&&e.error(n),n;return r}}(w,x);if(null!=e)return{data:e,getHeader:y,requestOptions:x.requestOptions,url:x.url};w.after||w.error||(w=null)}if(e=x.url,"image"===(t=x.requestOptions).responseType){if((0,o.Z)("host-webworker")||(0,o.Z)("host-node"))throw S("request:invalid-parameters",new Error("responseType 'image' is not supported in Web Workers or Node environment"),x)}else if(c)throw S("request:invalid-parameters",new Error("Data URLs are not supported for responseType = "+t.responseType),x);if("head"===t.method){if(t.body)throw S("request:invalid-parameters",new Error("body parameter cannot be set when method is 'head'"),x);if(c||f)throw S("request:invalid-parameters",new Error("data and blob URLs are not supported for method 'head'"),x)}if(await async function(){(0,o.Z)("host-webworker")?p||(p=await n.e(739).then(n.bind(n,90739))):m._abortableFetch||(m._abortableFetch=a.Z.fetch.bind(a.Z))}(),p)return p.execute(e,t);const b=(0,l.yi)();(0,l.fu)(t,(()=>b.abort()));const q={controller:b,credential:null,credentialToken:null,fetchOptions:null,hasToken:!1,interceptor:w,params:x,redoRequest:!1,useIdentity:M.useIdentity,useProxy:!1,useSSL:!1,withCredentials:!1},B=await async function(e){var t,n;let i,o;await async function(e){const t=e.params.url,n=e.params.requestOptions,i=e.controller.signal,o=n.body;let c=null,u=null,h=null;if(g&&"HTMLFormElement"in a.Z&&(o instanceof FormData?c=o:o instanceof HTMLFormElement&&(u=o,c=new FormData(u))),"string"==typeof o&&(h=o),e.fetchOptions={cache:n.cacheBust&&!m._abortableFetch.polyfill?"no-cache":"default",credentials:"same-origin",headers:n.headers||{},method:"head"===n.method?"HEAD":"GET",mode:"cors",redirect:"follow",signal:i},(c||h)&&(e.fetchOptions.body=c||h),"anonymous"===n.authMode&&(e.useIdentity=!1),e.hasToken=!!(/token=/i.test(t)||n.query&&n.query.token||c&&c.get&&c.get("token")||u&&u.elements.token),!e.hasToken&&r.Z.apiKey&&(0,d.r)(t)&&(n.query||(n.query={}),n.query.token=r.Z.apiKey,e.hasToken=!0),e.useIdentity&&!e.hasToken&&!e.credentialToken&&!v(t)&&!(0,l.Hc)(i)){let r;"immediate"===n.authMode?(await _(),r=await s.id.getCredential(t,{signal:i}),e.credential=r):"no-prompt"===n.authMode?(await _(),r=await s.id.getCredential(t,{prompt:!1,signal:i}).catch((()=>{})),e.credential=r):s.id&&(r=s.id.findCredential(t)),r&&(e.credentialToken=r.token,e.useSSL=!!r.ssl)}}(e);try{do{[i,o]=await E(e)}while(!await k(e,i,o))}catch(t){const n=S("request:server",t,e.params,i);throw n.details.ssl=e.useSSL,e.interceptor&&e.interceptor.error&&e.interceptor.error(n),n}const c=e.params.url;if(/\/sharing\/rest\/(accounts|portals)\/self/i.test(c)&&!e.hasToken&&!e.credentialToken&&null!=(t=o)&&null!=(n=t.user)&&n.username&&!(0,h.kl)(c)){const e=(0,h.P$)(c,!0);e&&M.trustedServers.push(e)}const u=e.credential;if(u&&s.id){const e=s.id.findServerInfo(u.server);let t=e&&e.owningSystemUrl;if(t){t=t.replace(/\/?$/,"/sharing");const e=s.id.findCredential(t,u.userId);e&&-1===s.id._getIdenticalSvcIdx(t,e)&&e.resources.unshift(t)}}return{data:o,getHeader:i?e=>i.headers.get(e):y,requestOptions:e.params.requestOptions,ssl:e.useSSL,url:e.params.url}}(q);return w&&w.after&&w.after(B),B}let p;const M=r.Z.request,g="FormData"in a.Z,x=[499,498,403,401],w=["COM_0056","COM_0057","SB_0008"],b=[/\/arcgis\/tokens/i,/\/sharing(\/rest)?\/generatetoken/i,/\/rest\/info/i],y=()=>null,q=Symbol();function B(e){const t=(0,h.P$)(e);return!t||t.endsWith(".arcgis.com")||m._corsServers.includes(t)||(0,h.kl)(t)}function S(e,t,n,r){let s="Error";const a={url:n.url,requestOptions:n.requestOptions,getHeader:y,ssl:!1};if(t instanceof i.Z)return t.details?(t.details=(0,c.d9)(t.details),t.details.url=n.url,t.details.requestOptions=n.requestOptions):t.details=a,t;if(t){const e=r&&(e=>r.headers.get(e)),n=r&&r.status,i=t.message;i&&(s=i),e&&(a.getHeader=e),a.httpStatus=(null!=t.httpCode?t.httpCode:t.code)||n||0,a.subCode=t.subcode,a.messageCode=t.messageCode,"string"==typeof t.details?a.messages=[t.details]:a.messages=t.details,a.raw=q in t?t[q]:t}return(0,l.D_)(t)?(0,l.zE)():new i.Z(e,s,a)}async function _(){s.id||await Promise.all([n.e(2261),n.e(7189),n.e(5973),n.e(6730)]).then(n.bind(n,29683))}function v(e){return b.some((t=>t.test(e)))}async function E(e){let t=e.params.url;const n=e.params.requestOptions,r=e.fetchOptions,i=(0,h.jc)(t)||(0,h.HK)(t),a=n.responseType||"json",c=i?0:null!=n.timeout?n.timeout:M.timeout;let u=!1;if(!i){e.useSSL&&(t=(0,h.hO)(t)),n.cacheBust&&"default"===r.cache&&(t=(0,h.ZN)(t,"request.preventCache",Date.now()));let i={...n.query};e.credentialToken&&(i.token=e.credentialToken);let a=(0,h.B7)(i);(0,o.Z)("esri-url-encodes-apostrophe")&&(a=a.replace(/'/g,"%27"));const c=t.length+1+a.length;let l;u="delete"===n.method||"post"===n.method||"put"===n.method||!!n.body||c>M.maxUrlLength;const d=n.useProxy||!!(0,h.ed)(t);if(d){const e=(0,h.b7)(t);l=e.path,!u&&l.length+1+c>M.maxUrlLength&&(u=!0),e.query&&(i={...e.query,...i})}if("HEAD"===r.method&&(u||d)){if(u){if(c>M.maxUrlLength)throw S("request:invalid-parameters",new Error("URL exceeds maximum length"),e.params);throw S("request:invalid-parameters",new Error("cannot use POST request when method is 'head'"),e.params)}if(d)throw S("request:invalid-parameters",new Error("cannot use proxy when method is 'head'"),e.params)}if(u?(r.method="delete"===n.method?"DELETE":"put"===n.method?"PUT":"POST",n.body?t=(0,h.fl)(t,i):(r.body=(0,h.B7)(i),r.headers["Content-Type"]="application/x-www-form-urlencoded")):t=(0,h.fl)(t,i),d&&(e.useProxy=!0,t=`${l}?${t}`),i.token&&g&&r.body instanceof FormData){const e=r.body;e.set?e.set("token",i.token):e.append("token",i.token)}if(n.hasOwnProperty("withCredentials"))e.withCredentials=n.withCredentials;else if(!(0,h.D6)(t,h.Gd))if((0,h.kl)(t))e.withCredentials=!0;else if(s.id){const n=s.id.findServerInfo(t);n&&n.webTierAuth&&(e.withCredentials=!0)}e.withCredentials&&(r.credentials="include")}let d,f,p=0,x=!1;c>0&&(p=setTimeout((()=>{x=!0,e.controller.abort()}),c));try{if("native-request-init"===n.responseType)f=r,f.url=t;else if("image"!==n.responseType||"default"!==r.cache||"GET"!==r.method||u||function(e){if(e)for(const t of Object.getOwnPropertyNames(e))if(e[t])return!0;return!1}(n.headers)||!i&&!e.useProxy&&M.proxyUrl&&!B(t)){if(d=await m._abortableFetch(t,r),e.useProxy||function(e){const t=(0,h.P$)(e);t&&!m._corsServers.includes(t)&&m._corsServers.push(t)}(t),"native"===n.responseType)f=d;else if("HEAD"!==r.method)if(d.ok){switch(a){case"array-buffer":f=await d.arrayBuffer();break;case"blob":case"image":f=await d.blob();break;default:f=await d.text()}if(p&&(clearTimeout(p),p=0),"json"===a||"xml"===a||"document"===a)if(f)switch(a){case"json":f=JSON.parse(f);break;case"xml":f=T(f,"application/xml");break;case"document":f=T(f,"text/html")}else f=null;if(f){if("array-buffer"===a||"blob"===a){const e=d.headers.get("Content-Type");if(/application\/json|text\/plain/i.test(e)&&f["blob"===a?"size":"byteLength"]<=750)try{const e=await new Response(f).json();e.error&&(f=e)}catch{}}"image"===a&&f instanceof Blob&&(f=await U(URL.createObjectURL(f),e,!0))}}else f=await d.text()}else f=await U(t,e)}catch(r){if("AbortError"===r.name){if(x)throw new Error("Timeout exceeded");throw(0,l.zE)("Request canceled")}if(!(!d&&r instanceof TypeError&&M.proxyUrl)||n.body||"delete"===n.method||"head"===n.method||"post"===n.method||"put"===n.method||e.useProxy||B(t))throw r;e.redoRequest=!0,(0,h.tD)({proxyUrl:M.proxyUrl,urlPrefix:(0,h.P$)(t)})}finally{p&&clearTimeout(p)}return[d,f]}function T(e,t){let n;try{n=(new DOMParser).parseFromString(e,t)}catch{}if(!n||n.getElementsByTagName("parsererror").length)throw new SyntaxError("XML Parse error");return n}async function k(e,t,n){if(e.redoRequest)return e.redoRequest=!1,!1;const r=e.params.requestOptions;if(!t||"native"===r.responseType||"native-request-init"===r.responseType)return!0;let i,a,o,c;if(!t.ok)throw i=new Error(`Unable to load ${t.url} status: ${t.status}`),i[q]=n,i;null!=n&&n.error&&(i=n.error),i&&(a=Number(i.code),o=i.hasOwnProperty("subcode")?Number(i.subcode):null,c=i.messageCode,c=c&&c.toUpperCase());const u=r.authMode;if(403===a&&(4===o||i.message&&i.message.toLowerCase().indexOf("ssl")>-1&&-1===i.message.toLowerCase().indexOf("permission"))){if(!e.useSSL)return e.useSSL=!0,!1}else if(!e.hasToken&&e.useIdentity&&("no-prompt"!==u||498===a)&&-1!==x.indexOf(a)&&!v(e.params.url)&&(403!==a||-1===w.indexOf(c)&&(null==o||2===o&&e.credentialToken))){await _();try{const t=await s.id.getCredential(e.params.url,{error:S("request:server",i,e.params),prompt:"no-prompt"!==u,signal:e.controller.signal,token:e.credentialToken});return e.credential=t,e.credentialToken=t.token,e.useSSL=e.useSSL||t.ssl,!1}catch(t){if("no-prompt"===u)return e.credential=null,e.credentialToken=null,!1;i=t}}if(i)throw i;return!0}function U(e,t,n=!1){const r=t.controller.signal,s=new Image;return t.withCredentials?s.crossOrigin="use-credentials":s.crossOrigin="anonymous",s.alt="",s.src=e,(0,f.f)(s,e,n,r)}m._abortableFetch=null,m._corsServers=["https://server.arcgisonline.com","https://services.arcgisonline.com"];const O=m},52096:(e,t,n)=>{"use strict";n.d(t,{r:()=>i});var r=n(99204);const s=["elevation3d.arcgis.com","js.arcgis.com","jsdev.arcgis.com","jsqa.arcgis.com","static.arcgis.com"];function i(e){const t=(0,r.P$)(e,!0);return t&&t.endsWith(".arcgis.com")&&!s.includes(t)&&!e.endsWith("/sharing/rest/generateToken")}},36727:(e,t,n)=>{"use strict";n.d(t,{f:()=>a});var r=n(77645),s=n(67380),i=n(8764);function a(e,t,n=!1,a){return new Promise(((c,u)=>{if((0,i.Hc)(a))return void u(o());let l=()=>{f(),u(new Error(`Unable to load ${t}`))},h=()=>{const t=e;f(),c(t)},d=()=>{if(!e)return;const t=e;f(),t.src="",u(o())};const f=()=>{(0,r.Z)("esri-image-decode")||(e.removeEventListener("error",l),e.removeEventListener("load",h)),l=null,h=null,e=null,(0,s.pC)(a)&&a.removeEventListener("abort",d),d=null,n&&URL.revokeObjectURL(t)};(0,s.pC)(a)&&a.addEventListener("abort",d),(0,r.Z)("esri-image-decode")?e.decode().then(h,l):(e.addEventListener("error",l),e.addEventListener("load",h))}))}function o(){try{return new DOMException("Aborted","AbortError")}catch{const e=new Error;return e.name="AbortError",e}}}}]);