var RendererTest = (function () {  var j=void 0,l=null,m,n=this;function aa(a,b){var c=a.split("."),d=n;!(c[0]in d)&&d.execScript&&d.execScript("var "+c[0]);for(var f;c.length&&(f=c.shift());)!c.length&&b!==j?d[f]=b:d=d[f]?d[f]:d[f]={}}
function p(a){var b=typeof a;if(b=="object")if(a){if(a instanceof Array)return"array";else if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if(c=="[object Window]")return"object";if(c=="[object Array]"||typeof a.length=="number"&&typeof a.splice!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("splice"))return"array";if(c=="[object Function]"||typeof a.call!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if(b=="function"&&typeof a.call=="undefined")return"object";return b}function q(a){return typeof a=="string"}function r(a){return a[ba]||(a[ba]=++ca)}var ba="closure_uid_"+Math.floor(Math.random()*2147483648).toString(36),ca=0;function da(a,b,c){return a.call.apply(a.bind,arguments)}
function ea(a,b,c){if(!a)throw Error();if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}else return function(){return a.apply(b,arguments)}}function s(a,b,c){s=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?da:ea;return s.apply(l,arguments)}
function t(a,b){function c(){}c.prototype=b.prototype;a.Rb=b.prototype;a.prototype=new c};function fa(a){this.direction="NORTH";this.ea=this.da=8;this.aa=a.aa;this.aa.ha("LOG","CanvasSimple renderer ready");this.ca={x:0,y:0};this.ga={x:0,y:0};this.ba=a.ba||48;this.Ga=a.Ga||320;this.Fa=a.Fa||180;this.ya=a.ya||0;this.za=a.za||0;this.Ea=a.Ea||!1;this.zb={x:5,y:37}}
fa.prototype={Bb:function(a,b){this.ca={x:this.ca.x+a,y:this.ca.y+b};this.ga={x:this.ca.x+a,y:this.ca.y+b}},Ab:function(a,b){this.ga={x:this.ca.x+a,y:this.ca.y+b}},fb:function(a,b,c){this.Nb(a,b);c.clear&&this.gb(a,b);this.Ea&&this.Ea(a,b,c,c.width,c.height,this.ca.x,this.ca.y);this.Pb(a,b,c,c.width,c.height,this.ca.x,this.ca.y);this.hb(a,b,c,c.width,c.height,this.ca.x,this.ca.y);if(c.Qb)a.$.strokeStyle="rgb(20,20,20)",a.$.lineWidth=2,a.$.strokeRect(this.ya,this.za,this.Ga,this.Fa)},Nb:function(a,
b){if(!(this.ga.x==this.ca.x&&this.ga.y==this.ca.y)){var c=550/b.pb;if(this.ca.x-this.ga.x<c&&this.ca.x-this.ga.x>-c)this.ca.x=this.ga.x;if(this.ca.y-this.ga.y<c&&this.ca.y-this.ga.y>-c)this.ca.y=this.ga.y;this.ga.x>this.ca.x?this.ca.x+=c:this.ga.x<this.ca.x?this.ca.x-=c:this.ga.y>this.ca.y?this.ca.y+=c:this.ga.y<this.ca.y&&(this.ca.y-=c)}},ta:function(a,b,c,d,f){var e=d/2,g=f/2,d=d-1-a,f=f-1-b;switch(c){case "NORTH":c=a-(b-g);a=b/2+(a-e)/2;break;case "EAST":c=d-(b-g);a=f/2+(a-e)/2;break;case "SOUTH":c=
d-(f-g);a=f/2+(d-e)/2;break;case "WEST":c=a-(f-g);a=b/2+(d-e)/2;break;default:c=a,a=b}return{x:c,y:a}},Ea:function(a,b,c,d,f,e,g){a.$.fillStyle="rgb(180,180,180)";a.$.strokeStyle="rgb(80,80,80)";a.$.textAlign="center";b=d/a.da/2;b=this.ba;a.$.lineWidth=b/20;for(var h=0;h<=a.da;h++){var i=this.ta(h-0.5,-0.5,c.direction,a.da,a.ea,d,f),k=this.ta(h-0.5,a.ea-0.5,c.direction,a.da,a.ea,d,f);a.$.beginPath();a.$.moveTo(e+i.x*b,g+i.y*b);a.$.lineTo(e+k.x*b,g+k.y*b);a.$.closePath();a.$.stroke()}for(h=0;h<=a.ea;h++)i=
this.ta(-0.5,h-0.5,c.direction,a.da,a.ea,d,f),k=this.ta(a.da-0.5,h-0.5,c.direction,a.da,a.ea,d,f),a.$.beginPath(),a.$.moveTo(e+i.x*b,g+i.y*b),a.$.lineTo(e+k.x*b,g+k.y*b),a.$.closePath(),a.$.stroke()},gb:function(a){a.$.fillStyle="rgb(245,245,245)";a.$.fillRect(0,0,a.lb,a.kb);a.$.restore()},Pb:function(a,b,c,d,f,e,g){a.$.font=Math.round(this.ba/5)+"pt Arial";a.$.textAlign="center";a.$.textBaseline="middle";a.$.strokeStyle="#64974a";a.$.lineWidth=this.ba/96;for(b=0;b<a.da;b++)for(var h=0;h<a.ea;h++){var i=
this.ta(b,h,c.direction,a.da,a.ea,d,f);if(!((i.x+1)*this.ba<e*-1+this.ya)&&!((i.x-1)*this.ba>e*-1+this.ya+this.Ga)&&!((i.y+0.5)*this.ba<g*-1+this.za)&&!((i.y-0.5)*this.ba>g*-1+this.za+this.Fa)){switch(Math.round(4)%4){case 0:a.$.fillStyle="#b6d995";break;case 1:a.$.fillStyle="rgb(220,220,220)";break;case 2:a.$.fillStyle="rgb(215,215,215)";break;case 3:a.$.fillStyle="rgb(220,220,220)"}if(this.zb.x===b&&this.zb.y===h)a.$.fillStyle="rgb(255,255,156)";a.$.beginPath();a.$.moveTo(e+i.x*this.ba,g+i.y*this.ba-
this.ba/2);a.$.lineTo(e+(i.x+1)*this.ba,g+i.y*this.ba);a.$.lineTo(e+i.x*this.ba,g+i.y*this.ba+this.ba/2);a.$.lineTo(e+(i.x-1)*this.ba,g+i.y*this.ba);a.$.closePath();a.$.fill();a.$.stroke();a.$.fillStyle="#64974a";a.$.fillText(b+"x"+h,e+i.x*this.ba,g+i.y*this.ba)}}},hb:function(a,b,c,d,f,e,g){b=d/a.da/2;b=this.ba;a.$.strokeStyle="rgb(50,50,50)";a.$.lineWidth=this.ba/32;for(var h=0;h<a.ka.length;h++){var i=this.ta(a.ka[h].coords.x,a.ka[h].coords.y,c.direction,a.da,a.ea,d,f),k=this.ta(a.ka[h].coords.x,
a.ka[h].coords.y-0.5,c.direction,a.da,a.ea,d,f);if(!((k.x+1)*this.ba<e*-1+this.ya)&&!((k.x-1)*this.ba>e*-1+this.ya+this.Ga)&&!((k.y+0.5)*this.ba<g*-1+this.za)&&!((k.y-0.5)*this.ba>g*-1+this.za+this.Fa))a.$.fillStyle=a.ka[h].mb,a.$.fillRect(e+(i.x-0.15)*b,g+i.y*b,b/3.5,-(b*0.7)),a.$.strokeRect(e+(i.x-0.15)*b,g+i.y*b,b/3.5,-(b*0.7))}}};function ga(a,b){this.Aa=a;this.options=b;this.$=this.canvas=j;this.wa=!1;this.ia()}
ga.prototype={ia:function(){this.Db();this.Eb();this.Aa.ia(this.canvas,this.$);this.Aa.Ma.xa();this.Aa.aa.Ia("TICK",this.Cb,this)},Db:function(){this.canvas=document.createElement("canvas");if(!this.canvas.getContext)throw this.aa.ha("LOG","Failed to create canvas element"),"Failed to create canvas element";this.$=this.canvas.getContext("2d");this.canvas.id=this.options.id+"_canvas";this.canvas.width=this.options.width;this.canvas.height=this.options.height;this.canvas.style.width="100%";var a=document.getElementById(this.options.id);
a.style.position="relative";a.style.backgroundColor="#444";a.style.border="1px solid #111";a.style.maxWidth=this.options.width+"px";a.style.margin="10px auto 10px auto";a.style.ib="0 0 5px 5px";a.appendChild(this.canvas);var b=document.createElement("div");b.style.backgroundColor="#111";b.style.height="22px";b.style.padding="5px";b.style.textAlign="left";this.ja=document.createElement("button");this.ja.style.backgroundColor="#ff8000";this.ja.style.color="rgb(255,255,255)";this.ja.style.ib="5px";this.ja.style.border=
"0px";this.ja.style.width="70px";this.ja.innerHTML="PLAY";this.ja.style.font="12px Arial";this.ja.style.fontWeight="bold";this.ja.style.marginRight="10px";this.ja.style.cursor="hand";u(this.ja,"click",s(this.toggle,this));b.appendChild(this.ja);var c=document.createElement("span");c.style.color="rgb(180,180,180)";c.style.font="12px Arial";c.style.fontWeight="bold";var d=document.createElement("span");d.style.color="#ff8000";d.style.font="12px Arial";d.innerHTML=this.options.title.toUpperCase();d.style.fontWeight=
"bold";c.appendChild(document.createTextNode("DEMO: "));c.appendChild(d);b.appendChild(c);a.appendChild(b);c=document.createElement("span");c.style.color="rgb(180,180,180)";c.style.font="12px Arial";this.oa=document.createElement("span");this.oa.style.color="#ff8000";this.oa.style.font="12px Arial";this.oa.style.fontWeight="bold";this.oa.innerHTML="...";c.appendChild(document.createTextNode("FPS: "));c.appendChild(this.oa);b.appendChild(c);a.appendChild(b);b=document.createElement("div");b.style.backgroundColor=
"#333";b.style.color="#777";b.style.padding="5px 5px 7px 5px";b.style.textAlign="left";b.style.font="12px Arial";b.style.ib="0 0 5px 5px";b.appendChild(document.createTextNode(this.options.description));a.appendChild(b)},toggle:function(){this.Aa.Ma.wa?(this.la.style.display="block",this.Aa.Ma.pause(),this.wa=!1,this.ja.innerHTML="PLAY"):(this.Aa.Ma.start(),this.la.style.display="none",this.wa=!0,demoRunning=this.options.id,this.ja.innerHTML="PAUSE")},Cb:function(a){this.oa.innerHTML=a.oa?a.oa:"...";
this.wa&&demoRunning!==this.options.id&&this.toggle()},Eb:function(){this.la=document.createElement("div");this.la.style.backgroundColor="rgba(0,0,0,0.35)";this.la.style.width="100%";this.la.style.height=this.options.height+"px";this.la.style.position="absolute";this.la.style.top=0;this.la.style.left=0;this.la.style.cursor="hand";this.eb=document.createElement("img");this.eb.src="http://channel9.msdn.com/styles/images/PlayButton.png";this.eb.margin="auto auto auto auto";this.la.appendChild(this.eb);
document.getElementById(this.options.id).appendChild(this.la);u(this.la,"mousemove",s(this.toggle,this));u(this.la,"click",s(this.toggle,this))}};function ha(a,b,c){this.coords={x:a,y:b};this.fa={x:a,y:b};this.mb=c}
ha.prototype={xa:function(a,b,c){a=a.pb/500;if(this.coords.x==this.fa.x&&this.coords.y==this.fa.y)switch(Math.round(Math.random()*1)){case 0:this.fa.x=Math.floor(Math.random()*b);break;case 1:this.fa.y=Math.floor(Math.random()*c)}this.fa.x>this.coords.x?this.coords.x+=a:this.fa.x<this.coords.x?this.coords.x-=a:this.fa.y>this.coords.y?this.coords.y+=a:this.fa.y<this.coords.y&&(this.coords.y-=a);if(this.coords.x-this.fa.x<a&&this.coords.x-this.fa.x>-a)this.coords.x=this.fa.x;if(this.coords.y-this.fa.y<
a&&this.coords.y-this.fa.y>-a)this.coords.y=this.fa.y}};function w(a,b){if(a<b)return-1;else if(a>b)return 1;return 0};var x=Array.prototype,ia=x.indexOf?function(a,b,c){return x.indexOf.call(a,b,c)}:function(a,b,c){c=c==l?0:c<0?Math.max(0,a.length+c):c;if(q(a))return!q(b)||b.length!=1?-1:a.indexOf(b,c);for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ja=x.forEach?function(a,b,c){x.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,f=q(a)?a.split(""):a,e=0;e<d;e++)e in f&&b.call(c,f[e],e,a)};function ka(){this.Ka={}}ka.prototype={rb:function(a){this.Ka||(this.Ka={});this.Ka[a]||(this.Ka[a]=[]);return this.Ka[a]},Ia:function(a,b,c){this.ha("LOG","Events: Listener Attached: "+a);a=this.rb(a);c&&(b=s(b,c));a.push(b)},ha:function(a,b){a!=="LOG"&&a!=="TICK"&&a!=="CURSOR:MOVE"&&a!=="MOUSE:MOVE"&&a!=="KEYBOARD:KEY"&&this.ha("LOG","Events: Fired: "+a,b);ja(this.rb(a),function(a){a.apply(l,!b?[]:typeof b=="array"?b:[b])})}};var y,z,B,C;function la(){return n.navigator?n.navigator.userAgent:l}C=B=z=y=!1;var D;if(D=la()){var ma=n.navigator;y=D.indexOf("Opera")==0;z=!y&&D.indexOf("MSIE")!=-1;B=!y&&D.indexOf("WebKit")!=-1;C=!y&&!B&&ma.product=="Gecko"}var E=y,F=z,G=C,H=B,na=n.navigator,I=(na&&na.platform||"").indexOf("Mac")!=-1,J;
a:{var K="",L;if(E&&n.opera)var M=n.opera.version,K=typeof M=="function"?M():M;else if(G?L=/rv\:([^\);]+)(\)|;)/:F?L=/MSIE\s+([^\);]+)(\)|;)/:H&&(L=/WebKit\/(\S+)/),L)var oa=L.exec(la()),K=oa?oa[1]:"";if(F){var pa,qa=n.document;pa=qa?qa.documentMode:j;if(pa>parseFloat(K)){J=String(pa);break a}}J=K}var ra={};
function N(a){var b;if(!(b=ra[a])){b=0;for(var c=String(J).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),f=Math.max(c.length,d.length),e=0;b==0&&e<f;e++){var g=c[e]||"",h=d[e]||"",i=RegExp("(\d*)(\D*)","g"),k=RegExp("(\d*)(\D*)","g");do{var A=i.exec(g)||["","",""],o=k.exec(h)||["","",""];if(A[0].length==0&&o[0].length==0)break;b=w(A[1].length==0?0:parseInt(A[1],10),o[1].length==0?0:parseInt(o[1],10))||w(A[2].length==0,o[2].length==
0)||w(A[2],o[2])}while(b==0)}b=ra[a]=b>=0}return b}var sa={};function O(){return sa[9]||(sa[9]=F&&!!document.documentMode&&document.documentMode>=9)};function ta(){}var ua=0;m=ta.prototype;m.key=0;m.Da=!1;m.jb=!1;m.ia=function(a,b,c,d,f,e){if(p(a)=="function")this.sb=!0;else if(a&&a.handleEvent&&p(a.handleEvent)=="function")this.sb=!1;else throw Error("Invalid listener argument");this.Ja=a;this.xb=b;this.src=c;this.type=d;this.capture=!!f;this.ua=e;this.jb=!1;this.key=++ua;this.Da=!1};m.handleEvent=function(a){return this.sb?this.Ja.call(this.ua||this.src,a):this.Ja.handleEvent.call(this.Ja,a)};var va="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");function wa(a,b){for(var c,d,f=1;f<arguments.length;f++){d=arguments[f];for(c in d)a[c]=d[c];for(var e=0;e<va.length;e++)c=va[e],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};!F||O();var xa=!F||O(),ya=F&&!N("8");!H||N("528");G&&N("1.9b")||F&&N("8")||E&&N("9.5")||H&&N("528");G&&!N("8")||F&&N("9");function za(){};function P(a,b){this.type=a;this.currentTarget=this.target=b}P.prototype.Ca=!1;P.prototype.ob=!1;P.prototype.Va=!0;P.prototype.preventDefault=function(){this.ob=!0;this.Va=!1};function Aa(a){Aa[" "](a);return a}Aa[" "]=function(){};function Q(a,b){a&&this.ia(a,b)}t(Q,P);m=Q.prototype;m.target=l;m.relatedTarget=l;m.offsetX=0;m.offsetY=0;m.clientX=0;m.clientY=0;m.screenX=0;m.screenY=0;m.button=0;m.keyCode=0;m.charCode=0;m.ctrlKey=!1;m.altKey=!1;m.shiftKey=!1;m.metaKey=!1;m.Ob=!1;m.ab=l;
m.ia=function(a,b){var c=this.type=a.type;P.call(this,c);this.target=a.target||a.srcElement;this.currentTarget=b;var d=a.relatedTarget;if(d){if(G){var f;a:{try{Aa(d.nodeName);f=!0;break a}catch(e){}f=!1}f||(d=l)}}else if(c=="mouseover")d=a.fromElement;else if(c=="mouseout")d=a.toElement;this.relatedTarget=d;this.offsetX=H||a.offsetX!==j?a.offsetX:a.layerX;this.offsetY=H||a.offsetY!==j?a.offsetY:a.layerY;this.clientX=a.clientX!==j?a.clientX:a.pageX;this.clientY=a.clientY!==j?a.clientY:a.pageY;this.screenX=
a.screenX||0;this.screenY=a.screenY||0;this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||(c=="keypress"?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.Ob=I?a.metaKey:a.ctrlKey;this.state=a.state;this.ab=a;a.ob&&this.preventDefault();delete this.Ca};
m.preventDefault=function(){Q.Rb.preventDefault.call(this);var a=this.ab;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,ya)try{if(a.ctrlKey||a.keyCode>=112&&a.keyCode<=123)a.keyCode=-1}catch(b){}};var R={},T={},U={},V={};
function u(a,b,c,d,f){if(b)if(p(b)=="array"){for(var e=0;e<b.length;e++)u(a,b[e],c,d,f);return l}else{var d=!!d,g=T;b in g||(g[b]={na:0,ma:0});g=g[b];d in g||(g[d]={na:0,ma:0},g.na++);var g=g[d],h=r(a),i;g.ma++;if(g[h]){i=g[h];for(e=0;e<i.length;e++)if(g=i[e],g.Ja==c&&g.ua==f){if(g.Da)break;return i[e].key}}else i=g[h]=[],g.na++;e=Ba();e.src=a;g=new ta;g.ia(c,e,a,b,d,f);c=g.key;e.key=c;i.push(g);R[c]=g;U[h]||(U[h]=[]);U[h].push(g);a.addEventListener?(a==n||!a.nb)&&a.addEventListener(b,e,d):a.attachEvent(b in
V?V[b]:V[b]="on"+b,e);return c}else throw Error("Invalid event type");}function Ba(){var a=Ca,b=xa?function(c){return a.call(b.src,b.key,c)}:function(c){c=a.call(b.src,b.key,c);if(!c)return c};return b}function Da(a,b,c,d,f){if(p(b)=="array")for(var e=0;e<b.length;e++)Da(a,b[e],c,d,f);else{d=!!d;a:{e=T;if(b in e&&(e=e[b],d in e&&(e=e[d],a=r(a),e[a]))){a=e[a];break a}a=l}if(a)for(e=0;e<a.length;e++)if(a[e].Ja==c&&a[e].capture==d&&a[e].ua==f){W(a[e].key);break}}}
function W(a){if(R[a]){var b=R[a];if(!b.Da){var c=b.src,d=b.type,f=b.xb,e=b.capture;c.removeEventListener?(c==n||!c.nb)&&c.removeEventListener(d,f,e):c.detachEvent&&c.detachEvent(d in V?V[d]:V[d]="on"+d,f);c=r(c);if(U[c]){var f=U[c],g=ia(f,b);g>=0&&x.splice.call(f,g,1);f.length==0&&delete U[c]}b.Da=!0;if(b=T[d][e][c])b.ub=!0,Ea(d,e,c,b);delete R[a]}}}
function Ea(a,b,c,d){if(!d.Ta&&d.ub){for(var f=0,e=0;f<d.length;f++)d[f].Da?d[f].xb.src=l:(f!=e&&(d[e]=d[f]),e++);d.length=e;d.ub=!1;e==0&&(delete T[a][b][c],T[a][b].na--,T[a][b].na==0&&(delete T[a][b],T[a].na--),T[a].na==0&&delete T[a])}}function X(a,b,c,d,f){var e=1,b=r(b);if(a[b]){a.ma--;a=a[b];a.Ta?a.Ta++:a.Ta=1;try{for(var g=a.length,h=0;h<g;h++){var i=a[h];i&&!i.Da&&(e&=Fa(i,f)!==!1)}}finally{a.Ta--,Ea(c,d,b,a)}}return Boolean(e)}function Fa(a,b){a.jb&&W(a.key);return a.handleEvent(b)}
function Ca(a,b){if(!R[a])return!0;var c=R[a],d=c.type,f=T;if(!(d in f))return!0;var f=f[d],e,g;if(!xa){var h;if(!(h=b))a:{h="window.event".split(".");for(var i=n;e=h.shift();)if(i[e]!=l)i=i[e];else{h=l;break a}h=i}e=h;h=!0 in f;i=!1 in f;if(h){if(e.keyCode<0||e.returnValue!=j)return!0;a:{var k=!1;if(e.keyCode==0)try{e.keyCode=-1;break a}catch(A){k=!0}if(k||e.returnValue==j)e.returnValue=!0}}k=new Q;k.ia(e,this);e=!0;try{if(h){for(var o=[],S=k.currentTarget;S;S=S.parentNode)o.push(S);g=f[!0];g.ma=
g.na;for(var v=o.length-1;!k.Ca&&v>=0&&g.ma;v--)k.currentTarget=o[v],e&=X(g,o[v],d,!0,k);if(i){g=f[!1];g.ma=g.na;for(v=0;!k.Ca&&v<o.length&&g.ma;v++)k.currentTarget=o[v],e&=X(g,o[v],d,!1,k)}}else e=Fa(c,k)}finally{if(o)o.length=0}return e}d=new Q(b,this);return e=Fa(c,d)};function Ga(a,b,c,d,f){if(!F&&(!H||!N("525")))return!0;if(I&&f)return Y(a);if(f&&!d)return!1;if(!c&&(b==17||b==18))return!1;if(F&&d&&b==a)return!1;switch(a){case 13:return!(F&&O());case 27:return!H}return Y(a)}
function Y(a){if(a>=48&&a<=57)return!0;if(a>=96&&a<=106)return!0;if(a>=65&&a<=90)return!0;if(H&&a==0)return!0;switch(a){case 32:case 63:case 107:case 109:case 110:case 111:case 186:case 59:case 189:case 187:case 61:case 188:case 190:case 191:case 192:case 222:case 219:case 220:case 221:return!0;default:return!1}}function Ha(a){switch(a){case 61:return 187;case 59:return 186;case 224:return 91;case 0:return 224;default:return a}};function Ia(){}t(Ia,za);m=Ia.prototype;m.nb=!0;m.vb=l;m.addEventListener=function(a,b,c,d){u(this,a,b,c,d)};m.removeEventListener=function(a,b,c,d){Da(this,a,b,c,d)};
m.dispatchEvent=function(a){var b=a.type||a,c=T;if(b in c){if(q(a))a=new P(a,this);else if(a instanceof P)a.target=a.target||this;else{var d=a,a=new P(b,this);wa(a,d)}var d=1,f,c=c[b],b=!0 in c,e;if(b){f=[];for(e=this;e;e=e.vb)f.push(e);e=c[!0];e.ma=e.na;for(var g=f.length-1;!a.Ca&&g>=0&&e.ma;g--)a.currentTarget=f[g],d&=X(e,f[g],a.type,!0,a)&&a.Va!=!1}if(!1 in c)if(e=c[!1],e.ma=e.na,b)for(g=0;!a.Ca&&g<f.length&&e.ma;g++)a.currentTarget=f[g],d&=X(e,f[g],a.type,!1,a)&&a.Va!=!1;else for(f=this;!a.Ca&&
f&&e.ma;f=f.vb)a.currentTarget=f,d&=X(e,f,a.type,!1,a)&&a.Va!=!1;a=Boolean(d)}else a=!0;return a};function Z(a,b){if(a)this.Sa&&this.detach(),this.Ha=a,this.Ra=u(this.Ha,"keypress",this,b),this.cb=u(this.Ha,"keydown",this.Fb,b,this),this.Sa=u(this.Ha,"keyup",this.Gb,b,this)}t(Z,Ia);m=Z.prototype;m.Ha=l;m.Ra=l;m.cb=l;m.Sa=l;m.ra=-1;m.qa=-1;m.Ya=!1;
var Ja={3:13,12:144,63232:38,63233:40,63234:37,63235:39,63236:112,63237:113,63238:114,63239:115,63240:116,63241:117,63242:118,63243:119,63244:120,63245:121,63246:122,63247:123,63248:44,63272:46,63273:36,63275:35,63276:33,63277:34,63289:144,63302:45},Ka={Up:38,Down:40,Left:37,Right:39,Enter:13,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,"U+007F":46,Home:36,End:35,PageUp:33,PageDown:34,Insert:45},La=F||H&&N("525"),Ma=I&&G;
Z.prototype.Fb=function(a){if(H&&(this.ra==17&&!a.ctrlKey||this.ra==18&&!a.altKey))this.qa=this.ra=-1;if(La&&!Ga(a.keyCode,this.ra,a.shiftKey,a.ctrlKey,a.altKey))this.handleEvent(a);else if(this.qa=G?Ha(a.keyCode):a.keyCode,Ma)this.Ya=a.altKey};Z.prototype.Gb=function(a){this.qa=this.ra=-1;this.Ya=a.altKey};
Z.prototype.handleEvent=function(a){var b=a.ab,c,d,f=b.altKey;if(F&&a.type=="keypress")c=this.qa,d=c!=13&&c!=27?b.keyCode:0;else if(H&&a.type=="keypress")c=this.qa,d=b.charCode>=0&&b.charCode<63232&&Y(c)?b.charCode:0;else if(E)c=this.qa,d=Y(c)?b.keyCode:0;else{c=b.keyCode||this.qa;d=b.charCode||0;if(Ma)f=this.Ya;I&&d==63&&c==224&&(c=191)}var e=c,g=b.keyIdentifier;c?c>=63232&&c in Ja?e=Ja[c]:c==25&&a.shiftKey&&(e=9):g&&g in Ka&&(e=Ka[g]);a=e==this.ra;this.ra=e;b=new Na(e,d,a,b);b.altKey=f;this.dispatchEvent(b)};
Z.prototype.detach=function(){if(this.Ra)W(this.Ra),W(this.cb),W(this.Sa),this.Sa=this.cb=this.Ra=l;this.Ha=l;this.qa=this.ra=-1};function Na(a,b,c,d){d&&this.ia(d,j);this.type="key";this.keyCode=a;this.charCode=b;this.repeat=c}t(Na,Q);function Oa(a){this.aa=a.aa;this.Ub={a:97,A:65,b:98,B:66,c:99,C:67,d:100,D:68,e:101,E:69,f:102,F:70,g:103,G:71,h:104,H:72,i:105,I:73,j:106,J:74,k:107,K:75,l:108,L:76,m:109,M:77,n:110,N:78,o:111,O:79,p:112,P:80,q:113,Q:81,r:114,R:82,s:115,S:83,t:116,T:84,u:117,U:85,v:118,V:86,w:119,W:87,x:120,X:88,y:121,Y:89,z:122,Z:90,0:48,1:49,2:50,3:51,4:52,5:53,6:54,7:55,8:56,9:57,space:32,enter:13};this.Vb={65:"A",66:"B",67:"C",68:"D",69:"E",70:"F",71:"G",72:"H",73:"I",74:"J",75:"K",76:"L",77:"M",78:"N",79:"O",
80:"P",81:"Q",82:"R",83:"S",84:"T",85:"U",86:"V",87:"W",88:"X",89:"Y",90:"Z",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",32:"space",13:"enter"};this.Wb={}}Oa.prototype={Na:function(a){var b=this,a=new Z(a);u(a,"key",function(a){b.aa.ha("KEYBOARD:KEY",{va:a,handler:b})});typeof console!=="undefined"&&console.log("Keyboard binded")}};function $(a,b){this.x=a;this.y=b}$.prototype={sub:function(a){this.x-=a.x;this.y-=a.y},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},toString:function(){return" X: "+this.x+" Y: "+this.y}};function Pa(a){this.position=j;this.aa=a.aa;this.Oa=this.Qa=!1;this.Za=j}
Pa.prototype={ia:function(){typeof console!=="undefined"&&console.log("Mouse Initalised")},Na:function(a){var b=this;u(a,"mousemove",function(c){var d=c.offsetX,c=c.offsetY;if(b.position){var f=new $(d,c);f.sub(b.position);b.wb=f}b.position=new $(d,c);b.aa.ha("MOUSE:MOVE",{Pa:a,handler:b});b.Qa=!0});u(a,"click",function(){b.aa.ha("MOUSE:CLICK",{Pa:a,handler:b})});u(a,"mousedown",function(c){b.Za=new $(c.offsetX-a.offsetLeft,c.offsetY-a.offsetTop);b.Qa=!0;b.Oa=!0;b.aa.ha("MOUSE:DOWN",{Pa:a,handler:b})});
u(a,"mouseup",function(){b.Za=j;b.Oa=!1;b.aa.ha("MOUSE:UP",{Pa:a,handler:b})});u(a,"mouseout",function(){b.Qa=!1;b.Za=j;b.Oa=!1;b.aa.ha("MOUSE:OUT",{Pa:a,handler:b})});console.log("attached to element")}};function Qa(a){this.aa=a.aa;this.aa.ha("LOG","CanvasSimple renderer ready")}
Qa.prototype={fb:function(a,b,c){c.clear&&this.gb(a,b);this.hb(a,b,c.width,c.height,c.Kb,c.Tb)},Ea:function(a,b,c,d,f,e){a.$.fillStyle="rgb(180,180,180)";a.$.strokeStyle="rgb(80,80,80)";a.$.textAlign="center";b=c/a.da;a.$.lineWidth=b/20;a.$.font=Math.round(b/3)+"pt Arial";for(c=0;c<=a.ea;c++)a.$.beginPath(),a.$.moveTo(f,e+c*b),a.$.lineTo(f+a.da*b,e+c*b),a.$.closePath(),a.$.stroke();for(d=0;d<=a.da;d++)a.$.beginPath(),a.$.moveTo(f+d*b,e),a.$.lineTo(f+d*b,e+a.ea*b),a.$.closePath(),a.$.stroke();if(b>
15)for(d=0;d<a.da;d++)for(c=0;c<a.ea;c++)a.$.fillText(d+"x"+c,f+d*b+b/2,e+c*b+b/2)},hb:function(a,b,c,d,f,e){b=c/a.da;c=b/3;for(d=0;d<a.ka.length;d++)a.$.fillStyle=a.ka[d].mb,a.$.beginPath(),a.$.arc(f+a.ka[d].coords.x*b+b/2,e+a.ka[d].coords.y*b+b/2,c,0,Math.PI*2,!0),a.$.fill(),a.$.closePath()},gb:function(a){a.$.fillStyle="rgb(230,230,230)";a.$.fillRect(0,0,a.lb,a.kb);a.$.restore()}};function Ra(a){this.enabled=a&&a.enabled?a.enabled:!0;this.aa=a&&a.aa?a.aa:j;this.ia()}Ra.prototype={ia:function(){this.aa&&(this.log("Listening..."),this.aa.Ia("LOG",this.log,this))},log:function(a,b){this.enabled&&typeof console!=="undefined"&&(console.log("Logger: "+a),b&&console.log(b))}};!F||O();!G&&!F||F&&O()||G&&N("1.9.1");F&&N("9");function Sa(){var a=document;if(a.querySelectorAll&&a.querySelector)return a.querySelectorAll(".fps");else if(a.getElementsByClassName)return a.getElementsByClassName("fps");return Ta()}
function Ta(){var a,b,c,d;a=document;if(a.querySelectorAll&&a.querySelector)return a.querySelectorAll(".fps");if(a.getElementsByClassName){var f=a.getElementsByClassName("fps");return f}f=a.getElementsByTagName("*");d={};for(b=c=0;a=f[b];b++){var e=a.className;typeof e.split=="function"&&ia(e.split(/\s+/),"fps")>=0&&(d[c++]=a)}d.length=c;return d};function Ua(a){this.aa=a.aa;this.Xa=this.La=l;this.Ba=[];this.bb=j;this.Wa=a&&a.Wa?a.Wa:1;this.pa=a&&a.pa?a.pa:30;this.Sb=j;this.$a=0;this.wa=!1}
Ua.prototype={ia:function(a){this.Sb=a;this.aa.ha("LOG","Initalised Timer. FPS Cap: "+this.pa+" speed: "+Math.round(this.Wa*100))},start:function(){this.xa();this.wa=!0;this.Ib=setInterval(s(this.xa,this),1E3/this.pa)},pause:function(){this.wa=!1;clearInterval(this.Ib)},xa:function(){this.Xa=(new Date).getTime();if(!this.La)this.La=0;var a=this.Xa-this.La;a>0&&(a>1E3/this.pa&&(a=1E3/this.pa),this.$a+=a/100);this.aa.ha("TICK",{pb:a,oa:this.bb,$a:this.$a});this.oa=1E3/(this.Xa-this.La);this.Ba.push(this.oa);
if(this.Ba.length>this.pa){for(var b=a=0,c=this.Ba.length;b<c;b++)a+=this.Ba[b];this.bb=Math.round(a/this.Ba.length);this.Ba=[];var d=this;ja(Sa(),function(a){a.innerHTML=d.bb})}this.La=this.Xa}};aa("RendererTest",Va);aa("DemoPlayer",ga);
function Va(){this.aa=new ka;this.Xb=new Ra({aa:this.aa});this.ba=48;this.Ma=new Ua({aa:this.aa,Wa:1,pa:30});this.Lb=new Pa({aa:this.aa});this.tb=new Oa({aa:this.aa});this.Ua={isometric:new fa({aa:this.aa,ba:this.ba,ya:60,za:50,Ga:500,Fa:250,Ea:!1}),topDown:new Qa({aa:this.aa})};this.lb=900;this.kb=450;this.ea=this.da=16;this.sa=0;this.ka=[];this.Yb="rgb(20,20,180);rgb(20,180,20);rgb(180,20,20);rgb(20,180,180);rgb(180, 20,180);rgb(180,180,20)".split(";")}
Va.prototype={ia:function(a,b){this.$=b;this.Hb();this.Lb.Na(a);this.tb.Na(a);this.tb.Na(document);this.aa.Ia("MOUSE:MOVE",this.Mb,this);this.aa.Ia("KEYBOARD:KEY",this.Jb,this);this.Ma.ia();this.aa.Ia("TICK",this.xa,this);this.aa.ha("LOG","Initalised Game.")},Hb:function(){for(var a=0,b=this.da*this.ea/16;a<b;a++)this.ka.push(new ha(Math.round(Math.random()*(this.da-1)),Math.round(Math.random()*(this.ea-1)),"rgb("+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+","+Math.round(Math.random()*
255)+")"))},xa:function(a){for(var b=0,c=this.ka.length;b<c;b++)this.ka[b].xa(a,this.da,this.ea);this.Ua.isometric.fb(this,a,{clear:!0,direction:this.qb(this.sa),Ga:this.da*64,Fa:this.ea*64,Qb:!0});this.$.strokeStyle="#111";this.$.lineWidth=1;this.$.fillStyle="rgba(255,255,255, 0.8)";this.$.fillRect(595,50,160,160);this.$.strokeRect(595,50,160,160);this.Ua.topDown.fb(this,a,{clear:!1,width:150,height:150,Kb:600,Tb:55});this.$.font="9pt Arial";this.$.textAlign="left";this.$.fillStyle="rgb(80,80,80)";
this.$.fillText("Isometric Camera: "+this.qb(this.sa),25,285)},Mb:function(a){a.ua.Oa&&a.ua.Qa&&this.Ua.isometric.Bb(a.ua.wb.x,a.ua.wb.y)},Jb:function(a){var b=0,c=0;switch(a.va.keyCode){case 38:c=this.ba;break;case 40:c=-this.ba;break;case 37:if(!a.va.repeat&&a.va.shiftKey===!0)this.yb(-1);else if(!a.va.shiftKey)b=this.ba;break;case 39:!a.va.repeat&&a.va.shiftKey===!0?this.yb(1):a.va.shiftKey||(b=-this.ba)}this.Ua.isometric.Ab(b*3.5,c*2.5)},qb:function(a){a>3&&(a-=4);switch(a){case 0:return"NORTH";
case 1:return"EAST";case 2:return"SOUTH";case 3:return"WEST"}},yb:function(a){this.sa+=a||1;if(this.sa>3)this.sa=0;if(this.sa<0)this.sa=3}};   return RendererTest; })();