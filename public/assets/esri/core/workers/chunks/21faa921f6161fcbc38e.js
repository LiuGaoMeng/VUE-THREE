(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[5387],{50312:(t,e,n)=>{"use strict";n.d(e,{a:()=>i,c:()=>l,f:()=>E,g:()=>p,i:()=>s,m:()=>a,n:()=>_,p:()=>M,s:()=>c,t:()=>u});var r=n(88230),o=n(19153);function s(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function i(t,e){const n=e[0],r=e[1],o=e[2],s=e[3],i=e[4],a=e[5],u=e[6],c=e[7],l=e[8],_=e[9],f=e[10],P=e[11],h=e[12],p=e[13],E=e[14],M=e[15],g=n*a-r*i,d=n*u-o*i,T=n*c-s*i,S=r*u-o*a,y=r*c-s*a,m=o*c-s*u,O=l*p-_*h,R=l*E-f*h,N=l*M-P*h,A=_*E-f*p,w=_*M-P*p,I=f*M-P*E;let b=g*I-d*w+T*A+S*N-y*R+m*O;return b?(b=1/b,t[0]=(a*I-u*w+c*A)*b,t[1]=(o*w-r*I-s*A)*b,t[2]=(p*m-E*y+M*S)*b,t[3]=(f*y-_*m-P*S)*b,t[4]=(u*N-i*I-c*R)*b,t[5]=(n*I-o*N+s*R)*b,t[6]=(E*T-h*m-M*d)*b,t[7]=(l*m-f*T+P*d)*b,t[8]=(i*w-a*N+c*O)*b,t[9]=(r*N-n*w-s*O)*b,t[10]=(h*y-p*T+M*g)*b,t[11]=(_*T-l*y-P*g)*b,t[12]=(a*R-i*A-u*O)*b,t[13]=(n*A-r*R+o*O)*b,t[14]=(p*d-h*S-E*g)*b,t[15]=(l*S-_*d+f*g)*b,t):null}function a(t,e,n){const r=e[0],o=e[1],s=e[2],i=e[3],a=e[4],u=e[5],c=e[6],l=e[7],_=e[8],f=e[9],P=e[10],h=e[11],p=e[12],E=e[13],M=e[14],g=e[15];let d=n[0],T=n[1],S=n[2],y=n[3];return t[0]=d*r+T*a+S*_+y*p,t[1]=d*o+T*u+S*f+y*E,t[2]=d*s+T*c+S*P+y*M,t[3]=d*i+T*l+S*h+y*g,d=n[4],T=n[5],S=n[6],y=n[7],t[4]=d*r+T*a+S*_+y*p,t[5]=d*o+T*u+S*f+y*E,t[6]=d*s+T*c+S*P+y*M,t[7]=d*i+T*l+S*h+y*g,d=n[8],T=n[9],S=n[10],y=n[11],t[8]=d*r+T*a+S*_+y*p,t[9]=d*o+T*u+S*f+y*E,t[10]=d*s+T*c+S*P+y*M,t[11]=d*i+T*l+S*h+y*g,d=n[12],T=n[13],S=n[14],y=n[15],t[12]=d*r+T*a+S*_+y*p,t[13]=d*o+T*u+S*f+y*E,t[14]=d*s+T*c+S*P+y*M,t[15]=d*i+T*l+S*h+y*g,t}function u(t,e,n){const r=n[0],o=n[1],s=n[2];let i,a,u,c,l,_,f,P,h,p,E,M;return e===t?(t[12]=e[0]*r+e[4]*o+e[8]*s+e[12],t[13]=e[1]*r+e[5]*o+e[9]*s+e[13],t[14]=e[2]*r+e[6]*o+e[10]*s+e[14],t[15]=e[3]*r+e[7]*o+e[11]*s+e[15]):(i=e[0],a=e[1],u=e[2],c=e[3],l=e[4],_=e[5],f=e[6],P=e[7],h=e[8],p=e[9],E=e[10],M=e[11],t[0]=i,t[1]=a,t[2]=u,t[3]=c,t[4]=l,t[5]=_,t[6]=f,t[7]=P,t[8]=h,t[9]=p,t[10]=E,t[11]=M,t[12]=i*r+l*o+h*s+e[12],t[13]=a*r+_*o+p*s+e[13],t[14]=u*r+f*o+E*s+e[14],t[15]=c*r+P*o+M*s+e[15]),t}function c(t,e,n){const r=n[0],o=n[1],s=n[2];return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t[3]=e[3]*r,t[4]=e[4]*o,t[5]=e[5]*o,t[6]=e[6]*o,t[7]=e[7]*o,t[8]=e[8]*s,t[9]=e[9]*s,t[10]=e[10]*s,t[11]=e[11]*s,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function l(t,e,n,r){let s,i,a,u,c,l,_,f,P,h,p,E,M,g,d,T,S,y,m,O,R,N,A,w,I=r[0],b=r[1],G=r[2],D=Math.sqrt(I*I+b*b+G*G);return D<o.E?null:(D=1/D,I*=D,b*=D,G*=D,s=Math.sin(n),i=Math.cos(n),a=1-i,u=e[0],c=e[1],l=e[2],_=e[3],f=e[4],P=e[5],h=e[6],p=e[7],E=e[8],M=e[9],g=e[10],d=e[11],T=I*I*a+i,S=b*I*a+G*s,y=G*I*a-b*s,m=I*b*a-G*s,O=b*b*a+i,R=G*b*a+I*s,N=I*G*a+b*s,A=b*G*a-I*s,w=G*G*a+i,t[0]=u*T+f*S+E*y,t[1]=c*T+P*S+M*y,t[2]=l*T+h*S+g*y,t[3]=_*T+p*S+d*y,t[4]=u*m+f*O+E*R,t[5]=c*m+P*O+M*R,t[6]=l*m+h*O+g*R,t[7]=_*m+p*O+d*R,t[8]=u*N+f*A+E*w,t[9]=c*N+P*A+M*w,t[10]=l*N+h*A+g*w,t[11]=_*N+p*A+d*w,e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t)}function _(t,e){const n=Math.sin(e),r=Math.cos(e);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=r,t[6]=n,t[7]=0,t[8]=0,t[9]=-n,t[10]=r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function f(t,e,n){const r=e[0],o=e[1],s=e[2],i=e[3],a=r+r,u=o+o,c=s+s,l=r*a,_=r*u,f=r*c,P=o*u,h=o*c,p=s*c,E=i*a,M=i*u,g=i*c;return t[0]=1-(P+p),t[1]=_+g,t[2]=f-M,t[3]=0,t[4]=_-g,t[5]=1-(l+p),t[6]=h+E,t[7]=0,t[8]=f+M,t[9]=h-E,t[10]=1-(l+P),t[11]=0,t[12]=n[0],t[13]=n[1],t[14]=n[2],t[15]=1,t}const P=(0,r.c)();function h(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2],t[3]=e[3]-n[3],t[4]=e[4]-n[4],t[5]=e[5]-n[5],t[6]=e[6]-n[6],t[7]=e[7]-n[7],t[8]=e[8]-n[8],t[9]=e[9]-n[9],t[10]=e[10]-n[10],t[11]=e[11]-n[11],t[12]=e[12]-n[12],t[13]=e[13]-n[13],t[14]=e[14]-n[14],t[15]=e[15]-n[15],t}function p(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]&&t[4]===e[4]&&t[5]===e[5]&&t[6]===e[6]&&t[7]===e[7]&&t[8]===e[8]&&t[9]===e[9]&&t[10]===e[10]&&t[11]===e[11]&&t[12]===e[12]&&t[13]===e[13]&&t[14]===e[14]&&t[15]===e[15]}function E(t,e){const n=t[0],r=t[1],s=t[2],i=t[3],a=t[4],u=t[5],c=t[6],l=t[7],_=t[8],f=t[9],P=t[10],h=t[11],p=t[12],E=t[13],M=t[14],g=t[15],d=e[0],T=e[1],S=e[2],y=e[3],m=e[4],O=e[5],R=e[6],N=e[7],A=e[8],w=e[9],I=e[10],b=e[11],G=e[12],D=e[13],k=e[14],C=e[15];return Math.abs(n-d)<=o.E*Math.max(1,Math.abs(n),Math.abs(d))&&Math.abs(r-T)<=o.E*Math.max(1,Math.abs(r),Math.abs(T))&&Math.abs(s-S)<=o.E*Math.max(1,Math.abs(s),Math.abs(S))&&Math.abs(i-y)<=o.E*Math.max(1,Math.abs(i),Math.abs(y))&&Math.abs(a-m)<=o.E*Math.max(1,Math.abs(a),Math.abs(m))&&Math.abs(u-O)<=o.E*Math.max(1,Math.abs(u),Math.abs(O))&&Math.abs(c-R)<=o.E*Math.max(1,Math.abs(c),Math.abs(R))&&Math.abs(l-N)<=o.E*Math.max(1,Math.abs(l),Math.abs(N))&&Math.abs(_-A)<=o.E*Math.max(1,Math.abs(_),Math.abs(A))&&Math.abs(f-w)<=o.E*Math.max(1,Math.abs(f),Math.abs(w))&&Math.abs(P-I)<=o.E*Math.max(1,Math.abs(P),Math.abs(I))&&Math.abs(h-b)<=o.E*Math.max(1,Math.abs(h),Math.abs(b))&&Math.abs(p-G)<=o.E*Math.max(1,Math.abs(p),Math.abs(G))&&Math.abs(E-D)<=o.E*Math.max(1,Math.abs(E),Math.abs(D))&&Math.abs(M-k)<=o.E*Math.max(1,Math.abs(M),Math.abs(k))&&Math.abs(g-C)<=o.E*Math.max(1,Math.abs(g),Math.abs(C))}function M(t){const e=o.E,n=t[0],r=t[1],s=t[2],i=t[4],a=t[5],u=t[6],c=t[8],l=t[9],_=t[10];return Math.abs(1-(n*n+i*i+c*c))<=e&&Math.abs(1-(r*r+a*a+l*l))<=e&&Math.abs(1-(s*s+u*u+_*_))<=e}const g=a,d=h;Object.freeze({__proto__:null,copy:function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t},set:function(t,e,n,r,o,s,i,a,u,c,l,_,f,P,h,p,E){return t[0]=e,t[1]=n,t[2]=r,t[3]=o,t[4]=s,t[5]=i,t[6]=a,t[7]=u,t[8]=c,t[9]=l,t[10]=_,t[11]=f,t[12]=P,t[13]=h,t[14]=p,t[15]=E,t},identity:s,transpose:function(t,e){if(t===e){const n=e[1],r=e[2],o=e[3],s=e[6],i=e[7],a=e[11];t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=n,t[6]=e[9],t[7]=e[13],t[8]=r,t[9]=s,t[11]=e[14],t[12]=o,t[13]=i,t[14]=a}else t[0]=e[0],t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=e[1],t[5]=e[5],t[6]=e[9],t[7]=e[13],t[8]=e[2],t[9]=e[6],t[10]=e[10],t[11]=e[14],t[12]=e[3],t[13]=e[7],t[14]=e[11],t[15]=e[15];return t},invert:i,adjoint:function(t,e){const n=e[0],r=e[1],o=e[2],s=e[3],i=e[4],a=e[5],u=e[6],c=e[7],l=e[8],_=e[9],f=e[10],P=e[11],h=e[12],p=e[13],E=e[14],M=e[15];return t[0]=a*(f*M-P*E)-_*(u*M-c*E)+p*(u*P-c*f),t[1]=-(r*(f*M-P*E)-_*(o*M-s*E)+p*(o*P-s*f)),t[2]=r*(u*M-c*E)-a*(o*M-s*E)+p*(o*c-s*u),t[3]=-(r*(u*P-c*f)-a*(o*P-s*f)+_*(o*c-s*u)),t[4]=-(i*(f*M-P*E)-l*(u*M-c*E)+h*(u*P-c*f)),t[5]=n*(f*M-P*E)-l*(o*M-s*E)+h*(o*P-s*f),t[6]=-(n*(u*M-c*E)-i*(o*M-s*E)+h*(o*c-s*u)),t[7]=n*(u*P-c*f)-i*(o*P-s*f)+l*(o*c-s*u),t[8]=i*(_*M-P*p)-l*(a*M-c*p)+h*(a*P-c*_),t[9]=-(n*(_*M-P*p)-l*(r*M-s*p)+h*(r*P-s*_)),t[10]=n*(a*M-c*p)-i*(r*M-s*p)+h*(r*c-s*a),t[11]=-(n*(a*P-c*_)-i*(r*P-s*_)+l*(r*c-s*a)),t[12]=-(i*(_*E-f*p)-l*(a*E-u*p)+h*(a*f-u*_)),t[13]=n*(_*E-f*p)-l*(r*E-o*p)+h*(r*f-o*_),t[14]=-(n*(a*E-u*p)-i*(r*E-o*p)+h*(r*u-o*a)),t[15]=n*(a*f-u*_)-i*(r*f-o*_)+l*(r*u-o*a),t},determinant:function(t){const e=t[0],n=t[1],r=t[2],o=t[3],s=t[4],i=t[5],a=t[6],u=t[7],c=t[8],l=t[9],_=t[10],f=t[11],P=t[12],h=t[13],p=t[14],E=t[15];return(e*i-n*s)*(_*E-f*p)-(e*a-r*s)*(l*E-f*h)+(e*u-o*s)*(l*p-_*h)+(n*a-r*i)*(c*E-f*P)-(n*u-o*i)*(c*p-_*P)+(r*u-o*a)*(c*h-l*P)},multiply:a,translate:u,scale:c,rotate:l,rotateX:function(t,e,n){const r=Math.sin(n),o=Math.cos(n),s=e[4],i=e[5],a=e[6],u=e[7],c=e[8],l=e[9],_=e[10],f=e[11];return e!==t&&(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[4]=s*o+c*r,t[5]=i*o+l*r,t[6]=a*o+_*r,t[7]=u*o+f*r,t[8]=c*o-s*r,t[9]=l*o-i*r,t[10]=_*o-a*r,t[11]=f*o-u*r,t},rotateY:function(t,e,n){const r=Math.sin(n),o=Math.cos(n),s=e[0],i=e[1],a=e[2],u=e[3],c=e[8],l=e[9],_=e[10],f=e[11];return e!==t&&(t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=s*o-c*r,t[1]=i*o-l*r,t[2]=a*o-_*r,t[3]=u*o-f*r,t[8]=s*r+c*o,t[9]=i*r+l*o,t[10]=a*r+_*o,t[11]=u*r+f*o,t},rotateZ:function(t,e,n){const r=Math.sin(n),o=Math.cos(n),s=e[0],i=e[1],a=e[2],u=e[3],c=e[4],l=e[5],_=e[6],f=e[7];return e!==t&&(t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=s*o+c*r,t[1]=i*o+l*r,t[2]=a*o+_*r,t[3]=u*o+f*r,t[4]=c*o-s*r,t[5]=l*o-i*r,t[6]=_*o-a*r,t[7]=f*o-u*r,t},fromTranslation:function(t,e){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e[0],t[13]=e[1],t[14]=e[2],t[15]=1,t},fromScaling:function(t,e){return t[0]=e[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=e[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},fromRotation:function(t,e,n){let r,s,i,a=n[0],u=n[1],c=n[2],l=Math.sqrt(a*a+u*u+c*c);return l<o.E?null:(l=1/l,a*=l,u*=l,c*=l,r=Math.sin(e),s=Math.cos(e),i=1-s,t[0]=a*a*i+s,t[1]=u*a*i+c*r,t[2]=c*a*i-u*r,t[3]=0,t[4]=a*u*i-c*r,t[5]=u*u*i+s,t[6]=c*u*i+a*r,t[7]=0,t[8]=a*c*i+u*r,t[9]=u*c*i-a*r,t[10]=c*c*i+s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t)},fromXRotation:_,fromYRotation:function(t,e){const n=Math.sin(e),r=Math.cos(e);return t[0]=r,t[1]=0,t[2]=-n,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=n,t[9]=0,t[10]=r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},fromZRotation:function(t,e){const n=Math.sin(e),r=Math.cos(e);return t[0]=r,t[1]=n,t[2]=0,t[3]=0,t[4]=-n,t[5]=r,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},fromRotationTranslation:f,fromQuat2:function(t,e){const n=P,r=-e[0],o=-e[1],s=-e[2],i=e[3],a=e[4],u=e[5],c=e[6],l=e[7],_=r*r+o*o+s*s+i*i;return _>0?(n[0]=2*(a*i+l*r+u*s-c*o)/_,n[1]=2*(u*i+l*o+c*r-a*s)/_,n[2]=2*(c*i+l*s+a*o-u*r)/_):(n[0]=2*(a*i+l*r+u*s-c*o),n[1]=2*(u*i+l*o+c*r-a*s),n[2]=2*(c*i+l*s+a*o-u*r)),f(t,e,n),t},getTranslation:function(t,e){return t[0]=e[12],t[1]=e[13],t[2]=e[14],t},getScaling:function(t,e){const n=e[0],r=e[1],o=e[2],s=e[4],i=e[5],a=e[6],u=e[8],c=e[9],l=e[10];return t[0]=Math.sqrt(n*n+r*r+o*o),t[1]=Math.sqrt(s*s+i*i+a*a),t[2]=Math.sqrt(u*u+c*c+l*l),t},getRotation:function(t,e){const n=e[0]+e[5]+e[10];let r=0;return n>0?(r=2*Math.sqrt(n+1),t[3]=.25*r,t[0]=(e[6]-e[9])/r,t[1]=(e[8]-e[2])/r,t[2]=(e[1]-e[4])/r):e[0]>e[5]&&e[0]>e[10]?(r=2*Math.sqrt(1+e[0]-e[5]-e[10]),t[3]=(e[6]-e[9])/r,t[0]=.25*r,t[1]=(e[1]+e[4])/r,t[2]=(e[8]+e[2])/r):e[5]>e[10]?(r=2*Math.sqrt(1+e[5]-e[0]-e[10]),t[3]=(e[8]-e[2])/r,t[0]=(e[1]+e[4])/r,t[1]=.25*r,t[2]=(e[6]+e[9])/r):(r=2*Math.sqrt(1+e[10]-e[0]-e[5]),t[3]=(e[1]-e[4])/r,t[0]=(e[8]+e[2])/r,t[1]=(e[6]+e[9])/r,t[2]=.25*r),t},fromRotationTranslationScale:function(t,e,n,r){const o=e[0],s=e[1],i=e[2],a=e[3],u=o+o,c=s+s,l=i+i,_=o*u,f=o*c,P=o*l,h=s*c,p=s*l,E=i*l,M=a*u,g=a*c,d=a*l,T=r[0],S=r[1],y=r[2];return t[0]=(1-(h+E))*T,t[1]=(f+d)*T,t[2]=(P-g)*T,t[3]=0,t[4]=(f-d)*S,t[5]=(1-(_+E))*S,t[6]=(p+M)*S,t[7]=0,t[8]=(P+g)*y,t[9]=(p-M)*y,t[10]=(1-(_+h))*y,t[11]=0,t[12]=n[0],t[13]=n[1],t[14]=n[2],t[15]=1,t},fromRotationTranslationScaleOrigin:function(t,e,n,r,o){const s=e[0],i=e[1],a=e[2],u=e[3],c=s+s,l=i+i,_=a+a,f=s*c,P=s*l,h=s*_,p=i*l,E=i*_,M=a*_,g=u*c,d=u*l,T=u*_,S=r[0],y=r[1],m=r[2],O=o[0],R=o[1],N=o[2],A=(1-(p+M))*S,w=(P+T)*S,I=(h-d)*S,b=(P-T)*y,G=(1-(f+M))*y,D=(E+g)*y,k=(h+d)*m,C=(E-g)*m,v=(1-(f+p))*m;return t[0]=A,t[1]=w,t[2]=I,t[3]=0,t[4]=b,t[5]=G,t[6]=D,t[7]=0,t[8]=k,t[9]=C,t[10]=v,t[11]=0,t[12]=n[0]+O-(A*O+b*R+k*N),t[13]=n[1]+R-(w*O+G*R+C*N),t[14]=n[2]+N-(I*O+D*R+v*N),t[15]=1,t},fromQuat:function(t,e){const n=e[0],r=e[1],o=e[2],s=e[3],i=n+n,a=r+r,u=o+o,c=n*i,l=r*i,_=r*a,f=o*i,P=o*a,h=o*u,p=s*i,E=s*a,M=s*u;return t[0]=1-_-h,t[1]=l+M,t[2]=f-E,t[3]=0,t[4]=l-M,t[5]=1-c-h,t[6]=P+p,t[7]=0,t[8]=f+E,t[9]=P-p,t[10]=1-c-_,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},frustum:function(t,e,n,r,o,s,i){const a=1/(n-e),u=1/(o-r),c=1/(s-i);return t[0]=2*s*a,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=2*s*u,t[6]=0,t[7]=0,t[8]=(n+e)*a,t[9]=(o+r)*u,t[10]=(i+s)*c,t[11]=-1,t[12]=0,t[13]=0,t[14]=i*s*2*c,t[15]=0,t},perspective:function(t,e,n,r,o){const s=1/Math.tan(e/2);let i;return t[0]=s/n,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=s,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,null!=o&&o!==1/0?(i=1/(r-o),t[10]=(o+r)*i,t[14]=2*o*r*i):(t[10]=-1,t[14]=-2*r),t},perspectiveFromFieldOfView:function(t,e,n,r){const o=Math.tan(e.upDegrees*Math.PI/180),s=Math.tan(e.downDegrees*Math.PI/180),i=Math.tan(e.leftDegrees*Math.PI/180),a=Math.tan(e.rightDegrees*Math.PI/180),u=2/(i+a),c=2/(o+s);return t[0]=u,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=c,t[6]=0,t[7]=0,t[8]=-(i-a)*u*.5,t[9]=(o-s)*c*.5,t[10]=r/(n-r),t[11]=-1,t[12]=0,t[13]=0,t[14]=r*n/(n-r),t[15]=0,t},ortho:function(t,e,n,r,o,s,i){const a=1/(e-n),u=1/(r-o),c=1/(s-i);return t[0]=-2*a,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*u,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*c,t[11]=0,t[12]=(e+n)*a,t[13]=(o+r)*u,t[14]=(i+s)*c,t[15]=1,t},lookAt:function(t,e,n,r){let i,a,u,c,l,_,f,P,h,p;const E=e[0],M=e[1],g=e[2],d=r[0],T=r[1],S=r[2],y=n[0],m=n[1],O=n[2];return Math.abs(E-y)<o.E&&Math.abs(M-m)<o.E&&Math.abs(g-O)<o.E?s(t):(f=E-y,P=M-m,h=g-O,p=1/Math.sqrt(f*f+P*P+h*h),f*=p,P*=p,h*=p,i=T*h-S*P,a=S*f-d*h,u=d*P-T*f,p=Math.sqrt(i*i+a*a+u*u),p?(p=1/p,i*=p,a*=p,u*=p):(i=0,a=0,u=0),c=P*u-h*a,l=h*i-f*u,_=f*a-P*i,p=Math.sqrt(c*c+l*l+_*_),p?(p=1/p,c*=p,l*=p,_*=p):(c=0,l=0,_=0),t[0]=i,t[1]=c,t[2]=f,t[3]=0,t[4]=a,t[5]=l,t[6]=P,t[7]=0,t[8]=u,t[9]=_,t[10]=h,t[11]=0,t[12]=-(i*E+a*M+u*g),t[13]=-(c*E+l*M+_*g),t[14]=-(f*E+P*M+h*g),t[15]=1,t)},targetTo:function(t,e,n,r){const o=e[0],s=e[1],i=e[2],a=r[0],u=r[1],c=r[2];let l=o-n[0],_=s-n[1],f=i-n[2],P=l*l+_*_+f*f;P>0&&(P=1/Math.sqrt(P),l*=P,_*=P,f*=P);let h=u*f-c*_,p=c*l-a*f,E=a*_-u*l;return P=h*h+p*p+E*E,P>0&&(P=1/Math.sqrt(P),h*=P,p*=P,E*=P),t[0]=h,t[1]=p,t[2]=E,t[3]=0,t[4]=_*E-f*p,t[5]=f*h-l*E,t[6]=l*p-_*h,t[7]=0,t[8]=l,t[9]=_,t[10]=f,t[11]=0,t[12]=o,t[13]=s,t[14]=i,t[15]=1,t},str:function(t){return"mat4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+", "+t[9]+", "+t[10]+", "+t[11]+", "+t[12]+", "+t[13]+", "+t[14]+", "+t[15]+")"},frob:function(t){return Math.sqrt(t[0]**2+t[1]**2+t[2]**2+t[3]**2+t[4]**2+t[5]**2+t[6]**2+t[7]**2+t[8]**2+t[9]**2+t[10]**2+t[11]**2+t[12]**2+t[13]**2+t[14]**2+t[15]**2)},add:function(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t[3]=e[3]+n[3],t[4]=e[4]+n[4],t[5]=e[5]+n[5],t[6]=e[6]+n[6],t[7]=e[7]+n[7],t[8]=e[8]+n[8],t[9]=e[9]+n[9],t[10]=e[10]+n[10],t[11]=e[11]+n[11],t[12]=e[12]+n[12],t[13]=e[13]+n[13],t[14]=e[14]+n[14],t[15]=e[15]+n[15],t},subtract:h,multiplyScalar:function(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t[3]=e[3]*n,t[4]=e[4]*n,t[5]=e[5]*n,t[6]=e[6]*n,t[7]=e[7]*n,t[8]=e[8]*n,t[9]=e[9]*n,t[10]=e[10]*n,t[11]=e[11]*n,t[12]=e[12]*n,t[13]=e[13]*n,t[14]=e[14]*n,t[15]=e[15]*n,t},multiplyScalarAndAdd:function(t,e,n,r){return t[0]=e[0]+n[0]*r,t[1]=e[1]+n[1]*r,t[2]=e[2]+n[2]*r,t[3]=e[3]+n[3]*r,t[4]=e[4]+n[4]*r,t[5]=e[5]+n[5]*r,t[6]=e[6]+n[6]*r,t[7]=e[7]+n[7]*r,t[8]=e[8]+n[8]*r,t[9]=e[9]+n[9]*r,t[10]=e[10]+n[10]*r,t[11]=e[11]+n[11]*r,t[12]=e[12]+n[12]*r,t[13]=e[13]+n[13]*r,t[14]=e[14]+n[14]*r,t[15]=e[15]+n[15]*r,t},exactEquals:p,equals:E,isOrthoNormal:M,mul:g,sub:d})},45387:(t,e,n)=>{"use strict";n.d(e,{Up:()=>ut,P_:()=>Et,iQ:()=>ct,kR:()=>nt,Gb:()=>rt,zD:()=>ot,iV:()=>st,CM:()=>ht,oj:()=>it,KC:()=>ft,Wt:()=>lt});var r=n(8811),o=n(68589),s=n(67380),i=n(8764),a=n(30817),u=n(50312),c=(n(10188),n(88230)),l=n(56368),_=n(81787),f=n(57474),P=n(77645);let h,p=null;function E(){return!!p}function M(){return h||(h=n.e(5097).then(n.bind(n,5097)).then((function(t){return t.p})).then((({default:t})=>t({locateFile:t=>(0,f.V)(`esri/geometry/support/${t}`)}))).then((t=>{D(t)})),h)}var g,d,T,S;!function(t){function e(t,e,n){p.ensureCache.prepare();const r=v(n),o=n===r,s=p.ensureFloat64(r),i=p._pe_geog_to_proj(p.getPointer(t),e,s);return i&&x(n,e,s,o),i}function n(t,e,n){return r(t,e,n,0)}function r(t,e,n,r){p.ensureCache.prepare();const o=v(n),s=n===o,i=p.ensureFloat64(o),a=p._pe_proj_to_geog_center(p.getPointer(t),e,i,r);return a&&x(n,e,i,s),a}t.geogToProj=e,t.projGeog=function(t,r,o,s){switch(s){case d.PE_TRANSFORM_P_TO_G:return n(t,r,o);case d.PE_TRANSFORM_G_TO_P:return e(t,r,o)}return 0},t.projToGeog=n,t.projToGeogCenter=r}(g||(g={})),(S=d||(d={})).init=function(){S.PE_BUFFER_MAX=p.PeDefs.prototype.PE_BUFFER_MAX,S.PE_NAME_MAX=p.PeDefs.prototype.PE_NAME_MAX,S.PE_MGRS_MAX=p.PeDefs.prototype.PE_MGRS_MAX,S.PE_USNG_MAX=p.PeDefs.prototype.PE_USNG_MAX,S.PE_DD_MAX=p.PeDefs.prototype.PE_DD_MAX,S.PE_DDM_MAX=p.PeDefs.prototype.PE_DDM_MAX,S.PE_DMS_MAX=p.PeDefs.prototype.PE_DMS_MAX,S.PE_UTM_MAX=p.PeDefs.prototype.PE_UTM_MAX,S.PE_PARM_MAX=p.PeDefs.prototype.PE_PARM_MAX,S.PE_TYPE_NONE=p.PeDefs.prototype.PE_TYPE_NONE,S.PE_TYPE_GEOGCS=p.PeDefs.prototype.PE_TYPE_GEOGCS,S.PE_TYPE_PROJCS=p.PeDefs.prototype.PE_TYPE_PROJCS,S.PE_TYPE_GEOGTRAN=p.PeDefs.prototype.PE_TYPE_GEOGTRAN,S.PE_TYPE_COORDSYS=p.PeDefs.prototype.PE_TYPE_COORDSYS,S.PE_TYPE_UNIT=p.PeDefs.prototype.PE_TYPE_UNIT,S.PE_TYPE_LINUNIT=p.PeDefs.prototype.PE_TYPE_LINUNIT,S.PE_STR_OPTS_NONE=p.PeDefs.prototype.PE_STR_OPTS_NONE,S.PE_STR_AUTH_NONE=p.PeDefs.prototype.PE_STR_AUTH_NONE,S.PE_STR_AUTH_TOP=p.PeDefs.prototype.PE_STR_AUTH_TOP,S.PE_STR_NAME_CANON=p.PeDefs.prototype.PE_STR_NAME_CANON,S.PE_PARM_X0=p.PeDefs.prototype.PE_PARM_X0,S.PE_PARM_ND=p.PeDefs.prototype.PE_PARM_ND,S.PE_TRANSFORM_1_TO_2=p.PeDefs.prototype.PE_TRANSFORM_1_TO_2,S.PE_TRANSFORM_2_TO_1=p.PeDefs.prototype.PE_TRANSFORM_2_TO_1,S.PE_TRANSFORM_P_TO_G=p.PeDefs.prototype.PE_TRANSFORM_P_TO_G,S.PE_TRANSFORM_G_TO_P=p.PeDefs.prototype.PE_TRANSFORM_G_TO_P,S.PE_HORIZON_RECT=p.PeDefs.prototype.PE_HORIZON_RECT,S.PE_HORIZON_POLY=p.PeDefs.prototype.PE_HORIZON_POLY,S.PE_HORIZON_LINE=p.PeDefs.prototype.PE_HORIZON_LINE,S.PE_HORIZON_DELTA=p.PeDefs.prototype.PE_HORIZON_DELTA},function(t){const e={},n={},r=t=>{if(t){const e=t.getType();switch(e){case d.PE_TYPE_GEOGCS:t=p.castObject(t,p.PeGeogcs);break;case d.PE_TYPE_PROJCS:t=p.castObject(t,p.PeProjcs);break;case d.PE_TYPE_GEOGTRAN:t=p.castObject(t,p.PeGeogtran);break;default:e&d.PE_TYPE_UNIT&&(t=p.castObject(t,p.PeUnit))}}return t};function o(t,n){let o=null,s=e[t];if(s||(s={},e[t]=s),s.hasOwnProperty(String(n)))o=s[n];else{const e=p.PeFactory.prototype.factoryByType(t,n);p.compare(e,p.NULL)||(o=e,s[n]=o)}return o=r(o),o}t.initialize=function(){p.PeFactory.prototype.initialize(null)},t.coordsys=function(t){return o(d.PE_TYPE_COORDSYS,t)},t.factoryByType=o,t.fromString=function(t,e){let o=null,s=n[t];if(s||(s={},n[t]=s),s.hasOwnProperty(e))o=s[e];else{const n=p.PeFactory.prototype.fromString(t,e);p.compare(n,p.NULL)||(o=n,s[e]=o)}return o=r(o),o},t.geogcs=function(t){return o(d.PE_TYPE_GEOGCS,t)},t.geogtran=function(t){return o(d.PE_TYPE_GEOGTRAN,t)},t.getCode=function(t){return p.PeFactory.prototype.getCode(t)},t.projcs=function(t){return o(d.PE_TYPE_PROJCS,t)},t.unit=function(t){return o(d.PE_TYPE_UNIT,t)}}(T||(T={}));let y=null;var m,O,R,N,A,w,I,b,G;function D(t){function e(t,e,n){t[e]=n(t[e])}p=t,d.init(),m.init(),A.init(),I.init(),b.init(),y=class extends p.PeGCSExtent{destroy(){p.destroy(this)}};const n=[p.PeDatum,p.PeGeogcs,p.PeGeogtran,p.PeObject,p.PeParameter,p.PePrimem,p.PeProjcs,p.PeSpheroid,p.PeUnit];for(const t of n)e(t.prototype,"getName",(t=>function(){return t.call(this,new Array(d.PE_NAME_MAX))}));for(const t of[p.PeGeogtran,p.PeProjcs])e(t.prototype,"getParameters",(t=>function(){const e=new Array(d.PE_PARM_MAX);let n=t.call(this);for(let t=0;t<e.length;t++){const r=p.getValue(n,"*");e[t]=r?p.wrapPointer(r,p.PeParameter):null,n+=Int32Array.BYTES_PER_ELEMENT}return e}));e(p.PeHorizon.prototype,"getCoord",(t=>function(){const e=this.getSize();if(!e)return null;const n=[];return x(n,e,t.call(this)),n})),e(p.PeGTlistExtendedEntry.prototype,"getEntries",(t=>{const e=p._pe_getPeGTlistExtendedGTsSize();return function(){let n=null;const r=t.call(this);if(!p.compare(r,p.NULL)){n=[r];const t=this.getSteps();if(t>1){const o=p.getPointer(r);for(let r=1;r<t;r++)n.push(p.wrapPointer(o+e*r,p.PeGTlistExtendedGTs))}}return n}}));const r=p._pe_getPeHorizonSize(),o=t=>function(){let e=this._cache;if(e||(e=new Map,this._cache=e),e.has(t))return e.get(t);let n=null;const o=t.call(this);if(!p.compare(o,p.NULL)){n=[o];const t=o.getNump();if(t>1){const e=p.getPointer(o);for(let o=1;o<t;o++)n.push(p.wrapPointer(e+r*o,p.PeHorizon))}}return e.set(t,n),n};e(p.PeProjcs.prototype,"horizonGcsGenerate",o),e(p.PeProjcs.prototype,"horizonPcsGenerate",o),p.PeObject.prototype.toString=function(t=d.PE_STR_OPTS_NONE){p.ensureCache.prepare();const e=p.getPointer(this),n=p.ensureInt8(new Array(d.PE_BUFFER_MAX));return p.UTF8ToString(p._pe_object_to_string_ext(e,t,n))}}function k(t){if(!t)return;const e=p.getClass(t);if(!e)return;const n=p.getCache(e);if(!n)return;const r=p.getPointer(t);r&&delete n[r]}function C(t,e){const n=[],r=new Array(e);for(let e=0;e<t;e++)n.push(p.ensureInt8(r));return n}function v(t){let e;return Array.isArray(t[0])?(e=[],t.forEach((t=>{e.push(t[0],t[1])}))):e=t,e}function x(t,e,n,r=!1){if(r)for(let r=0;r<2*e;r++)t[r]=p.getValue(n+r*Float64Array.BYTES_PER_ELEMENT,"double");else{const r=0===t.length;for(let o=0;o<e;o++)r&&(t[o]=new Array(2)),t[o][0]=p.getValue(n,"double"),t[o][1]=p.getValue(n+Float64Array.BYTES_PER_ELEMENT,"double"),n+=2*Float64Array.BYTES_PER_ELEMENT}}!function(t){let e;t.init=function(){t.PE_GTLIST_OPTS_COMMON=p.PeGTlistExtended.prototype.PE_GTLIST_OPTS_COMMON,e=p._pe_getPeGTlistExtendedEntrySize()},t.getGTlist=function(t,n,r,o,s,i){let a=null;const u=new p.PeInteger(i);try{const c=p.PeGTlistExtended.prototype.getGTlist(t,n,r,o,s,u);if((i=u.val)&&(a=[c],i>1)){const t=p.getPointer(c);for(let n=1;n<i;n++)a.push(p.wrapPointer(t+e*n,p.PeGTlistExtendedEntry))}}finally{p.destroy(u)}return a}}(m||(m={})),function(t){t.destroy=function(t){if(t&&t.length){for(const e of t)k(e),e.getEntries().forEach((t=>{k(t);const e=t.getGeogtran();k(e),e.getParameters().forEach(k),[e.getGeogcs1(),e.getGeogcs2()].forEach((t=>{k(t);const e=t.getDatum();k(e),k(e.getSpheroid()),k(t.getPrimem()),k(t.getUnit())}))}));p.PeGTlistExtendedEntry.prototype.Delete(t[0])}}}(O||(O={})),function(t){t.geogToGeog=function(t,e,n,r,o){p.ensureCache.prepare();const s=v(n),i=n===s,a=p.ensureFloat64(s);let u=0;r&&(u=p.ensureFloat64(r));const c=p._pe_geog_to_geog(p.getPointer(t),e,a,u,o);return c&&x(n,e,a,i),c}}(R||(R={})),function(t){const e=(t,e,n,r,o,s)=>{let i,a;switch(p.ensureCache.prepare(),t){case"dd":i=p._pe_geog_to_dd,a=d.PE_DD_MAX;break;case"ddm":i=p._pe_geog_to_ddm,a=d.PE_DDM_MAX;break;case"dms":i=p._pe_geog_to_dms,a=d.PE_DMS_MAX}let u=0;e&&(u=p.getPointer(e));const c=v(r),l=p.ensureFloat64(c),_=C(n,a),f=i(u,n,l,o,p.ensureInt32(_));if(f)for(let t=0;t<n;t++)s[t]=p.UTF8ToString(_[t]);return f},n=(t,e,n,r,o)=>{let s;switch(p.ensureCache.prepare(),t){case"dd":s=p._pe_dd_to_geog;break;case"ddm":s=p._pe_ddm_to_geog;break;case"dms":s=p._pe_dms_to_geog}let i=0;e&&(i=p.getPointer(e));const a=r.map((t=>p.ensureString(t))),u=p.ensureInt32(a),c=p.ensureFloat64(new Array(2*n)),l=s(i,n,u,c);return l&&x(o,n,c),l};t.geog_to_dms=function(t,n,r,o,s){return e("dms",t,n,r,o,s)},t.dms_to_geog=function(t,e,r,o){return n("dms",t,e,r,o)},t.geog_to_ddm=function(t,n,r,o,s){return e("ddm",t,n,r,o,s)},t.ddm_to_geog=function(t,e,r,o){return n("ddm",t,e,r,o)},t.geog_to_dd=function(t,n,r,o,s){return e("dd",t,n,r,o,s)},t.dd_to_geog=function(t,e,r,o){return n("dd",t,e,r,o)}}(N||(N={})),function(t){t.init=function(){t.PE_MGRS_STYLE_NEW=p.PeNotationMgrs.prototype.PE_MGRS_STYLE_NEW,t.PE_MGRS_STYLE_OLD=p.PeNotationMgrs.prototype.PE_MGRS_STYLE_OLD,t.PE_MGRS_STYLE_AUTO=p.PeNotationMgrs.prototype.PE_MGRS_STYLE_AUTO,t.PE_MGRS_180_ZONE_1_PLUS=p.PeNotationMgrs.prototype.PE_MGRS_180_ZONE_1_PLUS,t.PE_MGRS_ADD_SPACES=p.PeNotationMgrs.prototype.PE_MGRS_ADD_SPACES},t.geog_to_mgrs_extended=function(t,e,n,r,o,s,i){p.ensureCache.prepare();let a=0;t&&(a=p.getPointer(t));const u=v(n),c=p.ensureFloat64(u),l=C(e,d.PE_MGRS_MAX),_=p.ensureInt32(l),f=p._pe_geog_to_mgrs_extended(a,e,c,r,o,s,_);if(f)for(let t=0;t<e;t++)i[t]=p.UTF8ToString(l[t]);return f},t.mgrs_to_geog_extended=function(t,e,n,r,o){p.ensureCache.prepare();let s=0;t&&(s=p.getPointer(t));const i=n.map((t=>p.ensureString(t))),a=p.ensureInt32(i),u=p.ensureFloat64(new Array(2*e)),c=p._pe_mgrs_to_geog_extended(s,e,a,r,u);return c&&x(o,e,u),c}}(A||(A={})),function(t){t.geog_to_usng=function(t,e,n,r,o,s,i){p.ensureCache.prepare();let a=0;t&&(a=p.getPointer(t));const u=v(n),c=p.ensureFloat64(u),l=C(e,d.PE_MGRS_MAX),_=p.ensureInt32(l),f=p._pe_geog_to_usng(a,e,c,r,o,s,_);if(f)for(let t=0;t<e;t++)i[t]=p.UTF8ToString(l[t]);return f},t.usng_to_geog=function(t,e,n,r){p.ensureCache.prepare();let o=0;t&&(o=p.getPointer(t));const s=n.map((t=>p.ensureString(t))),i=p.ensureInt32(s),a=p.ensureFloat64(new Array(2*e)),u=p._pe_usng_to_geog(o,e,i,a);return u&&x(r,e,a),u}}(w||(w={})),function(t){t.init=function(){t.PE_UTM_OPTS_NONE=p.PeNotationUtm.prototype.PE_UTM_OPTS_NONE,t.PE_UTM_OPTS_ADD_SPACES=p.PeNotationUtm.prototype.PE_UTM_OPTS_ADD_SPACES,t.PE_UTM_OPTS_NS=p.PeNotationUtm.prototype.PE_UTM_OPTS_NS},t.geog_to_utm=function(t,e,n,r,o){p.ensureCache.prepare();let s=0;t&&(s=p.getPointer(t));const i=v(n),a=p.ensureFloat64(i),u=C(e,d.PE_UTM_MAX),c=p.ensureInt32(u),l=p._pe_geog_to_utm(s,e,a,r,c);if(l)for(let t=0;t<e;t++)o[t]=p.UTF8ToString(u[t]);return l},t.utm_to_geog=function(t,e,n,r,o){p.ensureCache.prepare();let s=0;t&&(s=p.getPointer(t));const i=n.map((t=>p.ensureString(t))),a=p.ensureInt32(i),u=p.ensureFloat64(new Array(2*e)),c=p._pe_utm_to_geog(s,e,a,r,u);return c&&x(o,e,u),c}}(I||(I={})),function(t){const e=new Map;t.init=function(){t.PE_PCSINFO_OPTION_NONE=p.PePCSInfo.prototype.PE_PCSINFO_OPTION_NONE,t.PE_PCSINFO_OPTION_DOMAIN=p.PePCSInfo.prototype.PE_PCSINFO_OPTION_DOMAIN,t.PE_POLE_OUTSIDE_BOUNDARY=p.PePCSInfo.prototype.PE_POLE_OUTSIDE_BOUNDARY,t.PE_POLE_POINT=p.PePCSInfo.prototype.PE_POLE_POINT},t.generate=function(n,r=t.PE_PCSINFO_OPTION_DOMAIN){let o,s;return e.has(n)&&(s=e.get(n),s[r]&&(o=s[r])),o||(o=p.PePCSInfo.prototype.generate(n,r),s||(s=[],e.set(n,s)),s[r]=o),o}}(b||(b={})),function(t){t.version_string=function(){return p.PeVersion.prototype.version_string()}}(G||(G={}));var U=Object.freeze({__proto__:null,get _pe(){return p},isLoaded:E,isSupported:function(){return!!(0,P.Z)("esri-wasm")},load:M,get PeCSTransformations(){return g},get PeDefs(){return d},get PeFactory(){return T},get PeGCSExtent(){return y},get PeGTlistExtended(){return m},get PeGTlistExtendedEntry(){return O},get PeGTTransformations(){return R},get PeNotationDms(){return N},get PeNotationMgrs(){return A},get PeNotationUsng(){return w},get PeNotationUtm(){return I},get PePCSInfo(){return b},get PeVersion(){return G},_init:D}),F=n(59499),Y=n(60716),j=n(70049),L=n(390),Z=(n(79326),n(13834));Math.PI;const X=Z.sv.radius,q=Z.sv.eccentricitySquared,W={a1:X*q,a2:X*q*X*q,a3:X*q*q/2,a4:X*q*X*q*2.5,a5:X*q+X*q*q/2,a6:1-q};Z.sv.radius,Z.sv.flattening,Z.Z1.radius,Z.Z1.flattening,Z.yr.radius,Z.yr.flattening,Z.yr.radius;let z=0;class H{constructor(t=null){this.uid=z++,t?(this._wkt=void 0!==t.wkt?t.wkt:null,this._wkid=void 0!==t.wkid?t.wkid:-1,this._isInverse=void 0!==t.isInverse&&!0===t.isInverse):(this._wkt=null,this._wkid=-1,this._isInverse=!1)}static fromGE(t){const e=new H;return e._wkt=t.wkt,e._wkid=t.wkid,e._isInverse=t.isInverse,e}get wkt(){return this._wkt}set wkt(t){this._wkt=t,this.uid=z++}get wkid(){return this._wkid}set wkid(t){this._wkid=t,this.uid=z++}get isInverse(){return this._isInverse}set isInverse(t){this._isInverse=t,this.uid=z++}getInverse(){const t=new H;return t._wkt=this.wkt,t._wkid=this._wkid,t._isInverse=!this.isInverse,t}}const B=H;class V{constructor(t){if(this.steps=[],this._cached_projection={},this._chain="",this._gtlistentry=null,t&&t.steps)for(const e of t.steps)e instanceof B?this.steps.push(e):this.steps.push(new B({wkid:e.wkid,wkt:e.wkt,isInverse:e.isInverse}))}static cacheKey(t,e){return[void 0!==t.wkid&&null!==t.wkid?t.wkid.toString():"-1",void 0!==t.wkt&&null!==t.wkt?t.wkt.toString():"",void 0!==e.wkid&&null!==e.wkid?e.wkid.toString():"-1",void 0!==e.wkt&&null!==e.wkt?e.wkt.toString():""].join(",")}static fromGE(t){const e=new V;let n="";for(const r of t.steps){const t=B.fromGE(r);e.steps.push(t),n+=t.uid.toString()+","}return e._cached_projection={},e._gtlistentry=null,e._chain=n,e}getInverse(){const t=new V;t.steps=[];for(let e=this.steps.length-1;e>=0;e--){const n=this.steps[e];t.steps.push(n.getInverse())}return t}getGTListEntry(){let t="";for(const e of this.steps)t+=e.uid.toString()+",";return t!==this._chain&&(this._gtlistentry=null,this._cached_projection={},this._chain=t),this._gtlistentry}assignCachedGe(t,e,n){this._cached_projection[V.cacheKey(t,e)]=n}getCachedGeTransformation(t,e){let n="";for(const t of this.steps)n+=t.uid.toString()+",";n!==this._chain&&(this._gtlistentry=null,this._cached_projection={},this._chain=n);const r=this._cached_projection[V.cacheKey(t,e)];return void 0===r?null:r}}const J=V;var K=n(31174);let Q=null,$=null,tt=null,et={};function nt(){return!!Q&&E()}function rt(){return!0}function ot(t){return(0,s.Wi)(tt)&&(tt=Promise.all([M(),n.e(4248).then(n.bind(n,64248)).then((function(t){return t.g})),n.e(1081).then(n.bind(n,81081))])),tt.then((([,e,{hydratedAdapter:n}])=>{(0,i.k_)(t),$=n,Q=e.default,Q._enableProjection(U)}))}function st(t,e,n=null){return Array.isArray(t)?0===t.length?[]:it($,t,t[0].spatialReference,e,n):it($,[t],t.spatialReference,e,n)[0]}function it(t,e,n,r,o=null){if((0,s.Wi)(n)||(0,s.Wi)(r))return e;if(ut(n,r,o))return e.map((t=>function(t,e,n){if(!t)return t;if("x"in t){const r=new F.Z;return function(t,e,n,r,o=0){Xt[0]=t.x,Xt[1]=t.y;const s=t.z;return Xt[2]=void 0!==s?s:o,!!ht(Xt,e,0,Xt,r,0,1)&&(n.x=Xt[0],n.y=Xt[1],n.spatialReference=r,void 0===s?(n.z=void 0,n.hasZ=!1):(n.z=Xt[2],n.hasZ=!0),void 0===t.m?(n.m=void 0,n.hasM=!1):(n.m=t.m,n.hasM=!0),!0)}(t,e,r,n)?r:null}if("xmin"in t){const r=new l.Z;return function(t,e,n,r,o=0){const{xmin:s,ymin:i,xmax:a,ymax:u,hasZ:c,hasM:l}=t;return!!Pt(s,i,c?t.zmin:o,e,Xt,r)&&(n.xmin=Xt[0],n.ymin=Xt[1],c&&(n.zmin=Xt[2]),!!Pt(a,u,c?t.zmax:o,e,Xt,r)&&(n.xmax=Xt[0],n.ymax=Xt[1],c&&(n.zmax=Xt[2]),l&&(n.mmin=t.mmin,n.mmax=t.mmax),n.spatialReference=r,!0))}(t,e,r,n)?r:null}if("rings"in t){const r=new Y.Z;return _t(t,e,r,n)?r:null}if("paths"in t){const r=new j.Z;return function(t,e,n,r,o=0){const{paths:s,hasZ:i,hasM:a}=t,u=[];return!!pt(s,i,a,e,u,r,o)&&(n.paths=u,n.spatialReference=r,n.hasZ=i,n.hasM=a,!0)}(t,e,r,n)?r:null}if("points"in t){const r=new _.Z;return function(t,e,n,r,o=0){const{points:s,hasZ:i,hasM:a}=t,u=[],c=s.length,l=[];for(const t of s)l.push(t[0],t[1],i?t[2]:o);if(!ht(l,e,0,l,r,0,c))return!1;for(let t=0;t<c;++t){const e=3*t,n=l[e],r=l[e+1];i&&a?u.push([n,r,l[e+2],s[t][3]]):i?u.push([n,r,l[e+2]]):a?u.push([n,r,s[t][2]]):u.push([n,r])}return n.points=u,n.spatialReference=r,n.hasZ=i,n.hasM=a,!0}(t,e,r,n)?r:null}return null}(t,n,r)));if((0,s.Wi)(o)){const t=J.cacheKey(n,r);void 0!==et[t]?o=et[t]:(o=function(t,e,n=null){if((0,s.Wi)(Q))throw new at;if((0,s.Wi)(t)||(0,s.Wi)(e))return null;const r=Q._getTransformation($,t,e,n,null==n?void 0:n.spatialReference);return null!==r?J.fromGE(r):null}(n,r,null),(0,s.Wi)(o)&&(o=new J),et[t]=o)}if((0,s.Wi)(Q))throw new at;return Q._project(t,e,n,r,o)}class at extends r.Z{constructor(){super("projection:not-loaded","projection engine not fully loaded yet, please call load()")}}function ut(t,e,n){return!n&&(!!(0,K.fS)(t,e)||(0,K.JY)(t)&&(0,K.JY)(e)&&!!kt(t,e,Ut))}async function ct(t,e,n,r){if(!nt())if(Array.isArray(t)){for(const{source:e,dest:n,geographicTransformation:o}of t)if(!ut(e,n,o))return ot(r)}else if(!ut(t,e,n))return ot(r)}function lt(t,e,n=e.spatialReference,r=0){return!(0,s.Wi)(n)&&_t(t,t.spatialReference,e,n,r)}function _t(t,e,n,r,o=0){const{rings:s,hasZ:i,hasM:a}=t,u=[];return!!pt(s,i,a,e,u,r,o)&&(n.rings=u,n.spatialReference=r,n.hasZ=i,n.hasM=a,!0)}function ft(t,e,n,r=0){Xt[0]=t.x,Xt[1]=t.y;const o=t.z;return Xt[2]=void 0!==o?o:r,ht(Xt,t.spatialReference,0,e,n,0,1)}function Pt(t,e,n,r,o,s){return jt[0]=t,jt[1]=e,jt[2]=n,ht(jt,r,0,o,s,0,1)}function ht(t,e,n,r,o,i,a=1){const u=kt(e,o,Ut);if((0,s.Wi)(u))return!1;if(u===dt){if(t===r&&n===i)return!0;const e=n+3*a;for(let o=n,s=i;o<e;o++,s++)r[s]=t[o];return!0}const c=n+3*a;for(let e=n,o=i;e<c;e+=3,o+=3)u(t,e,r,o);return!0}function pt(t,e,n,r,o,s,i=0){const a=new Array;for(const n of t)for(const t of n)a.push(t[0],t[1],e?t[2]:i);if(!ht(a,r,0,a,s,0,a.length/3))return!1;let u=0;o.length=0;for(const r of t){const t=new Array;for(const o of r)e&&n?t.push([a[u++],a[u++],a[u++],o[3]]):e?t.push([a[u++],a[u++],a[u++]]):n?(t.push([a[u++],a[u++],o[2]]),u++):(t.push([a[u++],a[u++]]),u++);o.push(t)}return!0}function Et(t,e,n,r){if((0,s.Wi)(t)||(0,s.Wi)(r))return!1;const o=gt(t,vt),i=gt(r,xt);if(o===i&&!Mt(i)&&(0!==o||(0,K.fS)(t,r)))return(0,u.i)(n),(0,u.t)(n,n,e),!0;if(Mt(i)){let t=0,r=0;const a=Dt[o][11],u=Dt[11][i];return!(0,s.Wi)(a)&&!(0,s.Wi)(u)&&(a(e,0,Lt,0),u(Lt,0,Zt,0),t=Ft*Lt[0],r=Ft*Lt[1],function(t,e,n){const r=Math.sin(e),o=Math.cos(e),s=Math.sin(t),i=Math.cos(t),a=n;a[0]=-r,a[4]=-s*o,a[8]=i*o,a[12]=0,a[1]=o,a[5]=-s*r,a[9]=i*r,a[13]=0,a[2]=0,a[6]=i,a[10]=s,a[14]=0,a[3]=0,a[7]=0,a[11]=0,a[15]=1}(r,t,n),n[12]=Zt[0],n[13]=Zt[1],n[14]=Zt[2],!0)}if(3===i&&(2===o||1===o)){const t=Dt[o][11];if((0,s.Wi)(t))return!1;t(e,0,Lt,0);const r=Ft*Lt[1];St(Lt,0,Zt,0),(0,u.i)(n),(0,u.t)(n,n,Zt);const i=1/Math.cos(r);return(0,u.s)(n,n,[i,i,1]),!0}return!1}function Mt(t){return 1===t||7===t||9===t}function gt(t,e){return e.spatialReference===t?e.spatialReferenceId:(e.spatialReference=t,"metersPerUnit"in e&&(e.metersPerUnit=(0,a.c9)(t,1)),t.wkt===L.GG.wkt?e.spatialReferenceId=1:(0,K.oR)(t)?e.spatialReferenceId=2:(0,K.sS)(t)?e.spatialReferenceId=3:t.wkt===L.wY.wkt?e.spatialReferenceId=4:4490===t.wkid?e.spatialReferenceId=5:t.wkt===L.HQ.wkt?e.spatialReferenceId=7:t.wkt===L.VY.wkt?e.spatialReferenceId=9:(0,K.BZ)(t)?e.spatialReferenceId=8:(0,K.V2)(t)?e.spatialReferenceId=10:e.spatialReferenceId=0)}function dt(t,e,n,r){t!==n&&(n[r++]=t[e++],n[r++]=t[e++],n[r]=t[e])}function Tt(t,e,n,r){n[r++]=Yt*(t[e++]/Z.sv.radius),n[r++]=Yt*(Math.PI/2-2*Math.atan(Math.exp(-1*t[e++]/Z.sv.radius))),n[r]=t[e]}function St(t,e,n,r){!function(t,e,n,r,s){const i=.4999999*Math.PI,a=(0,o.uZ)(Ft*t[e+1],-i,i),u=Math.sin(a);n[r++]=Ft*t[e]*s.radius,n[r++]=s.halfSemiMajorAxis*Math.log((1+u)/(1-u)),n[r]=t[e+2]}(t,e,n,r,Z.sv)}function yt(t,e,n,r,o){const s=o+t[e+2],i=Ft*t[e+1],a=Ft*t[e],u=Math.cos(i);n[r++]=Math.cos(a)*u*s,n[r++]=Math.sin(a)*u*s,n[r]=Math.sin(i)*s}function mt(t,e,n,r){yt(t,e,n,r,Z.Z1.radius)}function Ot(t,e,n,r){yt(t,e,n,r,Z.yr.radius)}function Rt(t,e,n,r){yt(t,e,n,r,Z.sv.radius)}function Nt(t,e,n,r,s){const i=t[e],a=t[e+1],u=t[e+2],c=Math.sqrt(i*i+a*a+u*u),l=(0,o.Kt)(u/(0===c?1:c)),_=Math.atan2(a,i);n[r++]=Yt*_,n[r++]=Yt*l,n[r]=c-s}function At(t,e,n,r){Nt(t,e,n,r,Z.Z1.radius)}function wt(t,e,n,r){Nt(t,e,n,r,Z.yr.radius)}function It(t,e,n,r){Nt(t,e,n,r,Z.sv.radius)}function bt(t,e,n,r){!function(t,e,n,r,o){const s=Ft*t[e],i=Ft*t[e+1],a=t[e+2],u=Math.sin(i),c=Math.cos(i),l=o.radius/Math.sqrt(1-o.eccentricitySquared*u*u);n[r++]=(l+a)*c*Math.cos(s),n[r++]=(l+a)*c*Math.sin(s),n[r++]=(l*(1-o.eccentricitySquared)+a)*u}(t,e,n,r,Z.sv)}function Gt(t,e,n,r){const o=W,s=t[e],i=t[e+1],a=t[e+2];let u,c,l,_,f,P,h,p,E,M,g,d,T,S,y,m,O,R,N,A,w;u=Math.abs(a),c=s*s+i*i,l=Math.sqrt(c),_=c+a*a,f=Math.sqrt(_),A=Math.atan2(i,s),P=a*a/_,h=c/_,S=o.a2/f,y=o.a3-o.a4/f,h>.3?(p=u/f*(1+h*(o.a1+S+P*y)/f),N=Math.asin(p),M=p*p,E=Math.sqrt(1-M)):(E=l/f*(1-P*(o.a5-S-h*y)/f),N=Math.acos(E),M=1-E*E,p=Math.sqrt(M)),g=1-Z.sv.eccentricitySquared*M,d=Z.sv.radius/Math.sqrt(g),T=o.a6*d,S=l-d*E,y=u-T*p,O=E*S+p*y,m=E*y-p*S,R=m/(T/g+O),N+=R,w=O+m*R/2,a<0&&(N=-N),n[r++]=Yt*A,n[r++]=Yt*N,n[r]=w}const Dt={2:{5:null,8:null,10:null,11:dt,6:dt,1:Rt,7:null,9:null,0:null,3:St,2:dt,4:bt},5:{5:dt,8:null,10:null,11:dt,6:dt,1:Rt,7:null,9:null,0:null,3:null,2:null,4:bt},8:{5:null,8:dt,10:null,11:dt,6:null,1:null,7:Ot,9:null,0:null,3:null,2:null,4:null},10:{5:null,8:null,10:dt,11:dt,6:null,1:null,7:null,9:mt,0:null,3:null,2:null,4:null},3:{5:null,8:null,10:null,11:Tt,6:Tt,1:function(t,e,n,r){Tt(t,e,n,r),Rt(n,r,n,r)},7:null,9:null,0:null,3:dt,2:Tt,4:function(t,e,n,r){Tt(t,e,n,r),bt(n,r,n,r)}},4:{5:Gt,8:null,10:null,11:Gt,6:Gt,1:function(t,e,n,r){Gt(t,e,n,r),Rt(n,r,n,r)},7:null,9:null,0:null,3:function(t,e,n,r){Gt(t,e,n,r),St(n,r,n,r)},2:Gt,4:dt},1:{5:It,8:null,10:null,11:It,6:It,1:dt,7:null,9:null,0:null,3:function(t,e,n,r){It(t,e,n,r),St(n,r,n,r)},2:It,4:function(t,e,n,r){It(t,e,n,r),bt(n,r,n,r)}},7:{5:null,8:wt,10:null,11:wt,6:null,1:null,7:dt,9:null,0:null,3:null,2:null,4:null},9:{5:null,8:null,10:At,11:At,6:null,1:null,7:null,9:dt,0:null,3:null,2:null,4:null},0:{5:null,8:null,10:null,11:null,6:null,1:null,7:null,9:null,0:dt,3:null,2:null,4:null},11:{5:dt,8:dt,10:dt,11:dt,6:dt,1:Rt,7:Ot,9:mt,0:null,3:St,2:dt,4:bt},6:{5:null,8:null,10:null,11:dt,6:dt,1:Rt,7:null,9:null,0:null,3:null,2:dt,4:bt}};function kt(t,e,n=Ct()){return(0,s.Wi)(t)||(0,s.Wi)(e)?null:function(t,e,n){if((0,s.Wi)(t)||(0,s.Wi)(e)||n.source.spatialReference===t&&n.dest.spatialReference===e)return n;const r=gt(t,n.source),o=gt(e,n.dest);return 0===r&&0===o?(0,K.fS)(t,e)?n.projector=dt:n.projector=null:n.projector=Dt[r][o],n}(t,e,n).projector}function Ct(){return{source:{spatialReference:null,spatialReferenceId:0,metersPerUnit:1},dest:{spatialReference:null,spatialReferenceId:0,metersPerUnit:1},projector:dt}}const vt={spatialReference:null,spatialReferenceId:0},xt={spatialReference:null,spatialReferenceId:0},Ut=Ct(),Ft=(Ct(),(0,o.Vl)(1)),Yt=(0,o.BV)(1),jt=(0,c.c)(),Lt=(0,c.c)(),Zt=(0,c.c)(),Xt=(0,c.c)();(0,c.c)()}}]);