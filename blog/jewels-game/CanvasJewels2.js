var CanvasJewels2 = (function () { var i=void 0,j=null,n,o=this;
    function p(a){var c=typeof a;if(c=="object")if(a){if(a instanceof Array)return"array";else if(a instanceof Object)return c;var b=Object.prototype.toString.call(a);if(b=="[object Window]")return"object";if(b=="[object Array]"||typeof a.length=="number"&&typeof a.splice!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("splice"))return"array";if(b=="[object Function]"||typeof a.call!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
    else if(c=="function"&&typeof a.call=="undefined")return"object";return c}var q="closure_uid_"+Math.floor(Math.random()*2147483648).toString(36),r=0;function aa(a,c,b){return a.call.apply(a.bind,arguments)}function ba(a,c,b){if(!a)throw Error();if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(b,d);return a.apply(c,b)}}else return function(){return a.apply(c,arguments)}}
    function t(a,c,b){t=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?aa:ba;return t.apply(j,arguments)};function u(a){this.o=!0;this.I=100;this.da=i;this.La=180;this.Ma=100;this.id=a.id;this.type=a.type?a.type:i;this.f={x:a.x*100,y:a.y*100};this.j={x:a.x*100,y:a.y*100};this.F=i;this.c={x:a.x,y:a.y};this.Wa=this.N=i;this.Va=0}
    u.prototype={l:function(){return this.f.x==this.j.x&&this.f.y==this.j.y},va:function(a){this.o=!1;this.da=a},ya:function(a,c){this.c.y+=a;this.A();this.F=c},O:function(a){this.c=a},Y:function(a,c,b){this.N=a;this.j=c;this.F=b},A:function(){this.N=i;this.j={x:this.c.x*100,y:this.c.y*100};this.F=i},wa:function(a){if(!this.o){this.I-=a.dt/4;return this.I<0?(this.da(this.id),!1):!0}},move:function(a){if(!(this.j.x==this.f.x&&this.j.y==this.f.y)){a=a.dt/10*(1E3/(this.N?this.La:this.Ma));if(this.j.x>this.f.x){if(this.f.x+=
    a,this.f.x>this.j.x)this.f.x=this.j.x}else if(this.j.x<this.f.x&&(this.f.x-=a,this.f.x<this.j.x))this.f.x=this.j.x;if(this.j.y>this.f.y){if(this.f.y+=a,this.f.y>this.j.y)this.f.y=this.j.y}else if(this.j.y<this.f.y&&(this.f.y-=a,this.f.y<this.j.y))this.f.y=this.j.y;this.j.x==this.f.x&&this.j.y==this.f.y&&typeof this.F=="function"&&this.F.apply(j,[this.id,this.N])}}};function ca(a){this.e=a.e;this.e.fire("LOG","CanvasSimple renderer ready")}
    ca.prototype={L:function(a,c,b){if(a.d.globalAlpha!==0.9)a.d.globalAlpha=0.9;this.U(a,c);b.showSwitches&&this.W(a,c);this.V(a,c)},V:function(a){for(var c="#ff9750,#92e9a2,#66ccff,#ff6fcf,#ffff66,#9468d5,#ccc,#aaa,#888".split(","),b=0;b<a.h;b++)for(var d=0;d<a.g;d++)if(a.a[b]&&a.a[b][d]){var e=a.width/(a.h*100)*a.b[a.a[b][d]].f.x+a.i/2,f=a.height/(a.g*100)*a.b[a.a[b][d]].f.y+a.k/2;if(a.b[a.a[b][d]].o)var g=a.i/2-4;else g=a.i/2-4,g/=100/a.b[a.a[b][d]].I;a.d.fillStyle=c[a.b[a.a[b][d]].type];a.d.beginPath();
    a.d.arc(e,f,g,0,Math.PI*2,!0);a.d.fill();if(a.b[a.a[b][d]].o)a.d.fillStyle="#222",a.d.fillText(a.a[b][d],e,f);if(a.m.position&&a.m.position.x>a.i*b&&a.m.position.x<a.i*b+a.i&&a.m.position.y>a.k*d&&a.m.position.y<a.k*d+a.k&&a.b[a.a[b][d]].l())a.d.strokeStyle="#fff",a.d.lineWidth=3,a.d.stroke();if(a.u==a.a[b][d])a.d.strokeStyle="#fff",a.d.lineWidth=6,a.d.stroke();a.d.closePath()}},U:function(a){a.d.fillStyle="rgb(0,0,0)";a.d.fillRect(0,0,a.width,a.height);a.d.restore()},W:function(a){a.d.lineWidth=
    10;a.d.strokeStyle="#fff";for(var c=0,b=a.p.length;c<b;c++){var d=a.b[a.p[c][0]],e=a.b[a.p[c][1]];d.l()&&d.o&&e.l()&&e.o&&(a.d.beginPath(),a.d.moveTo(a.width/a.h*d.c.x+a.i/2,a.height/a.g*d.c.y+a.k/2),a.d.lineTo(a.width/(a.h*100)*e.c.x*100+a.i/2,a.height/(a.g*100)*e.c.y*100+a.k/2),a.d.closePath(),a.d.stroke())}}};function v(a,c){if(a<c)return-1;else if(a>c)return 1;return 0};var w=Array.prototype,x=w.indexOf?function(a,c,b){return w.indexOf.call(a,c,b)}:function(a,c,b){b=b==j?0:b<0?Math.max(0,a.length+b):b;if(typeof a=="string")return typeof c!="string"||c.length!=1?-1:a.indexOf(c,b);for(;b<a.length;b++)if(b in a&&a[b]===c)return b;return-1},da=w.forEach?function(a,c,b){w.forEach.call(a,c,b)}:function(a,c,b){for(var d=a.length,e=typeof a=="string"?a.split(""):a,f=0;f<d;f++)f in e&&c.call(b,e[f],f,a)};function ea(a){this.images=[];this.e=a.e;this.e.fire("LOG","Image Loader ready")}
    ea.prototype={load:function(a,c,b,d){if(!(x(this.images,a)>=0)){arguments.length==1&&(c=a);this.images[a]={};this.images[a].object=new Image;this.images[a].loaded=!1;this.images[a].object.src=c;this.images[a].Ra=0;this.images[a].Qa=0;if(d)this.images[a].D=d;var e=this,f=this.images[a];this.images[a].object.onload=function(){f.loaded=!0;typeof b=="function"&&b();e.e.fire("SPRITE_LOADED:"+c)};this.images[a].object.onerror=function(){e.e.fire("LOG","Error loading image: "+a);setTimeout(function(){e.load(a,
    c,b,d)},1E3)}}},loaded:function(a){return!this.images[a]?!1:this.images[a].loaded===!0||this.images[a].object.complete===!0},Ga:function(a,c,b,d,e,f,g){a.drawImage(this.images[c].object,this.images[c].D.frames[b].left,this.images[c].D.frames[b].top,this.images[c].D.frames[b].width,this.images[c].D.frames[b].height,d,e,f?f:this.images[c].D.frames[b].width,g?g:this.images[c].D.frames[b].height)}};function fa(a){this.e=a.e;this.e.fire("LOG","CanvasProduction renderer ready");this.images=new ea({e:a.e});this.w=a.w?a.w:"img/";this.Aa();this.X=this.M=!1}
    fa.prototype={Aa:function(){this.images.load("blocks",this.w+"zookeeper.png",function(){},{Ta:80,frames:[{left:2,top:2,width:21,height:21},{left:2,top:30,width:21,height:21},{left:2,top:58,width:21,height:21},{left:96,top:2,width:21,height:21},{left:96,top:30,width:21,height:21},{left:96,top:58,width:21,height:21},{left:190,top:2,width:21,height:21},{left:190,top:30,width:21,height:21}]});this.e.listen("SPRITE_LOADED:"+this.w+"zookeeper.png",this.M,this)},M:function(){this.M=!0},L:function(a,c,b){if(this.M)this.U(a,
    c),this.V(a,c),b.showSwitches&&this.W(a,c);else if(!this.X){var d=this;setTimeout(function(){d.X=!1;d.L(a,c,b)},200);this.X=!0}},V:function(a){for(var c=0;c<a.h;c++)for(var b=0;b<a.g;b++)if(a.a[c]&&a.a[c][b]){var d=a.width/(a.h*100)*a.b[a.a[c][b]].f.x,e=a.height/(a.g*100)*a.b[a.a[c][b]].f.y;if(a.b[a.a[c][b]].o){if(a.d.globalAlpha!==1)a.d.globalAlpha=1}else a.d.globalAlpha=a.b[a.a[c][b]].I/100;this.images.Ga(a.d,"blocks",a.b[a.a[c][b]].type,d+3,e+3,a.i-6,a.k-6);if(a.m.position&&a.m.position.x>a.i*
    c&&a.m.position.x<a.i*c+a.i&&a.m.position.y>a.k*b&&a.m.position.y<a.k*b+a.k&&a.b[a.a[c][b]].l())a.d.beginPath(),a.d.arc(d+a.i/2,e+a.k/2,a.i/2,0,Math.PI*2,!0),a.d.strokeStyle="#000",a.d.lineWidth=5,a.d.stroke();if(a.u==a.a[c][b])a.d.beginPath(),a.d.arc(d+a.i/2,e+a.k/2,a.i/2,0,Math.PI*2,!0),a.d.strokeStyle="#000",a.d.lineWidth=5,a.d.stroke();a.d.closePath()}},U:function(a){a.d.fillStyle="rgb(255,255,255)";a.d.fillRect(0,0,a.width,a.height);a.d.restore()},W:function(a){a.d.lineWidth=10;a.d.strokeStyle=
    "#222";for(var c=0,b=a.p.length;c<b;c++){var d=a.b[a.p[c][0]],e=a.b[a.p[c][1]];d.l()&&d.o&&e.l()&&e.o&&(a.d.beginPath(),a.d.moveTo(a.width/a.h*d.c.x+a.i/2,a.height/a.g*d.c.y+a.k/2),a.d.lineTo(a.width/(a.h*100)*e.c.x*100+a.i/2,a.height/(a.g*100)*e.c.y*100+a.k/2),a.d.closePath(),a.d.stroke())}}};var y,A,B,C;function ga(){return o.navigator?o.navigator.userAgent:j}C=B=A=y=!1;var D;if(D=ga()){var ha=o.navigator;y=D.indexOf("Opera")==0;A=!y&&D.indexOf("MSIE")!=-1;B=!y&&D.indexOf("WebKit")!=-1;C=!y&&!B&&ha.product=="Gecko"}var ia=y,E=A,F=C,G=B,ja=o.navigator,ka=(ja&&ja.platform||"").indexOf("Mac")!=-1,H;
    a:{var I="",J;if(ia&&o.opera)var K=o.opera.version,I=typeof K=="function"?K():K;else if(F?J=/rv\:([^\);]+)(\)|;)/:E?J=/MSIE\s+([^\);]+)(\)|;)/:G&&(J=/WebKit\/(\S+)/),J)var la=J.exec(ga()),I=la?la[1]:"";if(E){var L,ma=o.document;L=ma?ma.documentMode:i;if(L>parseFloat(I)){H=String(L);break a}}H=I}var na={};
    function M(a){var c;if(!(c=na[a])){c=0;for(var b=String(H).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=Math.max(b.length,d.length),f=0;c==0&&f<e;f++){var g=b[f]||"",h=d[f]||"",k=RegExp("(\\d*)(\\D*)","g"),m=RegExp("(\\d*)(\\D*)","g");do{var z=k.exec(g)||["","",""],l=m.exec(h)||["","",""];if(z[0].length==0&&l[0].length==0)break;c=v(z[1].length==0?0:parseInt(z[1],10),l[1].length==0?0:parseInt(l[1],10))||v(z[2].length==0,l[2].length==
    0)||v(z[2],l[2])}while(c==0)}c=na[a]=c>=0}return c}var oa={};function N(){return oa[9]||(oa[9]=E&&!!document.documentMode&&document.documentMode>=9)};function pa(){}var qa=0;n=pa.prototype;n.key=0;n.C=!1;n.aa=!1;n.t=function(a,c,b,d,e,f){if(p(a)=="function")this.ia=!0;else if(a&&a.handleEvent&&p(a.handleEvent)=="function")this.ia=!1;else throw Error("Invalid listener argument");this.J=a;this.ka=c;this.src=b;this.type=d;this.capture=!!e;this.ha=f;this.aa=!1;this.key=++qa;this.C=!1};n.handleEvent=function(a){return this.ia?this.J.call(this.ha||this.src,a):this.J.handleEvent.call(this.J,a)};!E||N();var ra=!E||N(),sa=E&&!M("8");!G||M("528");F&&M("1.9b")||E&&M("8")||ia&&M("9.5")||G&&M("528");F&&!M("8")||E&&M("9");function P(a,c){this.type=a;this.currentTarget=this.target=c}P.prototype.T=!1;P.prototype.ea=!1;P.prototype.Ia=!0;P.prototype.preventDefault=function(){this.ea=!0;this.Ia=!1};function Q(a){Q[" "](a);return a}Q[" "]=function(){};function R(a,c){a&&this.t(a,c)}(function(){function a(){}a.prototype=P.prototype;R.Na=P.prototype;R.prototype=new a})();n=R.prototype;n.target=j;n.relatedTarget=j;n.offsetX=0;n.offsetY=0;n.clientX=0;n.clientY=0;n.screenX=0;n.screenY=0;n.button=0;n.keyCode=0;n.charCode=0;n.ctrlKey=!1;n.altKey=!1;n.shiftKey=!1;n.metaKey=!1;n.Ca=!1;n.fa=j;
    n.t=function(a,c){var b=this.type=a.type;P.call(this,b);this.target=a.target||a.srcElement;this.currentTarget=c;var d=a.relatedTarget;if(d){if(F){var e;a:{try{Q(d.nodeName);e=!0;break a}catch(f){}e=!1}e||(d=j)}}else if(b=="mouseover")d=a.fromElement;else if(b=="mouseout")d=a.toElement;this.relatedTarget=d;this.offsetX=G||a.offsetX!==i?a.offsetX:a.layerX;this.offsetY=G||a.offsetY!==i?a.offsetY:a.layerY;this.clientX=a.clientX!==i?a.clientX:a.pageX;this.clientY=a.clientY!==i?a.clientY:a.pageY;this.screenX=
    a.screenX||0;this.screenY=a.screenY||0;this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||(b=="keypress"?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.Ca=ka?a.metaKey:a.ctrlKey;this.state=a.state;this.fa=a;a.ea&&this.preventDefault();delete this.T};
    n.preventDefault=function(){R.Na.preventDefault.call(this);var a=this.fa;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,sa)try{if(a.ctrlKey||a.keyCode>=112&&a.keyCode<=123)a.keyCode=-1}catch(c){}};var S={},T={},U={},V={};
    function W(a,c,b,d,e){if(c)if(p(c)=="array")for(var f=0;f<c.length;f++)W(a,c[f],b,d,e);else{var d=!!d,g=T;c in g||(g[c]={s:0,z:0});g=g[c];d in g||(g[d]={s:0,z:0},g.s++);var g=g[d],h=a[q]||(a[q]=++r),k;g.z++;if(g[h]){k=g[h];for(f=0;f<k.length;f++)if(g=k[f],g.J==b&&g.ha==e){if(g.C)break;return}}else k=g[h]=[],g.s++;f=ta();f.src=a;g=new pa;g.t(b,f,a,c,d,e);b=g.key;f.key=b;k.push(g);S[b]=g;U[h]||(U[h]=[]);U[h].push(g);a.addEventListener?(a==o||!a.ua)&&a.addEventListener(c,f,d):a.attachEvent(c in V?V[c]:
    V[c]="on"+c,f)}else throw Error("Invalid event type");}function ta(){var a=ua,c=ra?function(b){return a.call(c.src,c.key,b)}:function(b){b=a.call(c.src,c.key,b);if(!b)return b};return c}function va(a,c,b,d){if(!d.K&&d.ja){for(var e=0,f=0;e<d.length;e++)d[e].C?d[e].ka.src=j:(e!=f&&(d[f]=d[e]),f++);d.length=f;d.ja=!1;f==0&&(delete T[a][c][b],T[a][c].s--,T[a][c].s==0&&(delete T[a][c],T[a].s--),T[a].s==0&&delete T[a])}}
    function wa(a,c,b,d,e){var f=1,c=c[q]||(c[q]=++r);if(a[c]){a.z--;a=a[c];a.K?a.K++:a.K=1;try{for(var g=a.length,h=0;h<g;h++){var k=a[h];k&&!k.C&&(f&=X(k,e)!==!1)}}finally{a.K--,va(b,d,c,a)}}return Boolean(f)}
    function X(a,c){if(a.aa){var b=a.key;if(S[b]){var d=S[b];if(!d.C){var e=d.src,f=d.type,g=d.ka,h=d.capture;e.removeEventListener?(e==o||!e.ua)&&e.removeEventListener(f,g,h):e.detachEvent&&e.detachEvent(f in V?V[f]:V[f]="on"+f,g);e=e[q]||(e[q]=++r);if(U[e]){var g=U[e],k=x(g,d);k>=0&&w.splice.call(g,k,1);g.length==0&&delete U[e]}d.C=!0;if(d=T[f][h][e])d.ja=!0,va(f,h,e,d);delete S[b]}}}return a.handleEvent(c)}
    function ua(a,c){if(!S[a])return!0;var b=S[a],d=b.type,e=T;if(!(d in e))return!0;var e=e[d],f,g;if(!ra){var h;if(!(h=c))a:{h="window.event".split(".");for(var k=o;f=h.shift();)if(k[f]!=j)k=k[f];else{h=j;break a}h=k}f=h;h=!0 in e;k=!1 in e;if(h){if(f.keyCode<0||f.returnValue!=i)return!0;a:{var m=!1;if(f.keyCode==0)try{f.keyCode=-1;break a}catch(z){m=!0}if(m||f.returnValue==i)f.returnValue=!0}}m=new R;m.t(f,this);f=!0;try{if(h){for(var l=[],O=m.currentTarget;O;O=O.parentNode)l.push(O);g=e[!0];g.z=g.s;
    for(var s=l.length-1;!m.T&&s>=0&&g.z;s--)m.currentTarget=l[s],f&=wa(g,l[s],d,!0,m);if(k){g=e[!1];g.z=g.s;for(s=0;!m.T&&s<l.length&&g.z;s++)m.currentTarget=l[s],f&=wa(g,l[s],d,!1,m)}}else f=X(b,m)}finally{if(l)l.length=0}return f}d=new R(c,this);return f=X(b,d)};function xa(a,c){this.x=a;this.y=c}xa.prototype={length:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},toString:function(){return" X: "+this.x+" Y: "+this.y}};function ya(a){this.position=i;this.e=a.e}ya.prototype={t:function(){},pa:function(a){var c=this;W(a,"mousemove",function(b){var d=b.offsetX-a.offsetLeft;d<0?(d=b.offsetX,b=b.offsetY):b=b.offsetY-a.offsetTop;c.position=new xa(d,b)});W(a,"click",function(){c.e.fire("MOUSE:CLICK",a)});W(a,"mousedown",function(){c.e.fire("MOUSE:DOWN",a)});W(a,"mouseup",function(){c.e.fire("MOUSE:UP",a)});W(a,"mouseout",function(){c.e.fire("MOUSE:OUT",a)})}};function za(a){this.enabled=a&&a.enabled?a.enabled:!0;this.e=a&&a.e?a.e:i;this.t()}za.prototype={t:function(){this.e&&this.log("Listening...")},log:function(a,c){this.enabled&&typeof console!=="undefined"&&(console.log("Logger: "+a),c&&console.log(c))}};!E||N();!F&&!E||E&&N()||F&&M("1.9.1");E&&M("9");function Aa(){var a=document;if(a.querySelectorAll&&a.querySelector)return a.querySelectorAll(".possibleSwitches");else if(a.getElementsByClassName)return a.getElementsByClassName("possibleSwitches");return Ba()}
    function Ba(){var a,c,b,d;a=document;if(a.querySelectorAll&&a.querySelector)return a.querySelectorAll(".possibleSwitches");if(a.getElementsByClassName){var e=a.getElementsByClassName("possibleSwitches");return e}e=a.getElementsByTagName("*");d={};for(c=b=0;a=e[c];c++){var f=a.className;typeof f.split=="function"&&x(f.split(/\s+/),"possibleSwitches")>=0&&(d[b++]=a)}d.length=b;return d};var Da=Ca,Y="CanvasJewels".split("."),Z=o;!(Y[0]in Z)&&Z.execScript&&Z.execScript("var "+Y[0]);for(var $;Y.length&&($=Y.shift());)!Y.length&&Da!==i?Z[$]=Da:Z=Z[$]?Z[$]:Z[$]={};function Ca(a){a||(a={});this.ca=a.renderer?a.renderer:"production";this.la=a.showSwitches?a.showSwitches:!1;this.Ea=a.destoryBlocks?a.destoryBlocks:!1;this.Fa=a.destroyRows?a.destroyRows:!1;this.qa=a.autoSwitch?a.autoSwitch:!1;this.w=a.imagePath?a.imagePath:!1;this.initalise=this.za}
    Ca.prototype={za:function(a){this.Pa=1E3;this.e=a.events;this.Ua=new za({e:this.e});this.width=a.width;this.height=a.height;this.m=new ya({e:this.e});this.ma={simple:new ca({e:this.e}),production:new fa({e:this.e,w:this.w})};this.h=this.g=8;this.a=[];this.r=[];this.b={};this.$=0;this.u=i;this.B=[];this.v=[];this.q=[];this.p=[];this.P={};this.S=!1;this.canvas=a.canvas;this.d=a.canvasContext;this.d.font="10pt Arial";this.d.textAlign="center";this.d.textBaseline="middle";this.e.listen("APP:RESIZE",this.Ha,
    this);this.t()},t:function(){this.m.pa(this.canvas);this.e.listen("APP:TICK",this.Oa,this);this.e.listen("MOUSE:CLICK",this.ga,this);this.e.listen("MOUSE:DOWN",this.ga,this);this.e.listen("MOUSE:OUT",this.Ba,this);this.Ja();this.ma[this.ca].L(this,{dt:0},{showSwitches:this.la});this.e.fire("LOG","Initalised Game.")},Ba:function(){this.m.position=i},ga:function(){for(var a=0;a<this.h;a++)for(var c=0;c<this.g;c++)if(this.m.position&&this.m.position.x>this.i*a&&this.m.position.x<this.i*a+this.i&&this.m.position.y>
    this.k*c&&this.m.position.y<this.k*c+this.k)if(this.u&&this.b[this.u]){var b=this.b[this.u].c;if(b.x==a&&(b.y==c-1||b.y==c+1)||b.y==c&&(b.x==a-1||b.x==a+1)){var d=this.a[a][c],b=this.a[b.x][b.y];if(d&&b&&this.b[d].l()&&this.b[b].l())this.B.push([d,b]),this.u=i}else this.u=this.a[a][c]}else this.u=this.a[a][c]},n:function(a,c){var b=a<c?a:c,d=a>c?a:c;this.P[b+"+"+d]||(this.p.push([b,d]),this.P[b+"+"+d]=!0)},sa:function(){this.p=[];this.P={};for(var a=this.ta(),c=this.b,b=0;b<this.h;b++)for(var d=0;d<
    this.g;d++){var e=c[a[b][d]].type;if(d+3<this.g&&c[a[b][d+3]].type===e&&(c[a[b][d+1]].type===e||c[a[b][d+2]].type===e))c[a[b][d+1]].type===e?this.n(a[b][d+2],a[b][d+3]):this.n(a[b][d],a[b][d+1]);if(b+3<this.h&&c[a[b+3][d]].type===e&&(c[a[b+1][d]].type===e||c[a[b+2][d]].type===e))c[a[b+1][d]].type===e?this.n(a[b+2][d],a[b+3][d]):this.n(a[b][d],a[b+1][d]);if(d+2<this.g&&b-1>=0&&(c[a[b][d+1]].type===e&&c[a[b-1][d+2]].type===e||c[a[b-1][d+1]].type===e&&c[a[b-1][d+2]].type===e))c[a[b][d+1]].type===e?this.n(a[b][d+
    2],a[b-1][d+2]):this.n(a[b][d],a[b-1][d]);if(d+2<this.g&&b+1<this.h&&(c[a[b][d+1]].type===e&&c[a[b+1][d+2]].type===e||c[a[b+1][d+1]].type===e&&c[a[b+1][d+2]].type===e))c[a[b][d+1]].type===e?this.n(a[b][d+2],a[b+1][d+2]):this.n(a[b][d],a[b+1][d]);if(b+2<this.h&&d-1>=0&&(c[a[b+1][d]].type===e&&c[a[b+2][d-1]].type===e||c[a[b+1][d-1]].type===e&&c[a[b+2][d-1]].type===e))c[a[b+1][d]].type===e?this.n(a[b+2][d],a[b+2][d-1]):this.n(a[b][d],a[b][d-1]);if(b+2<this.h&&d+1<this.g&&(c[a[b+1][d]].type===e&&c[a[b+
    2][d+1]].type===e||c[a[b+1][d+1]].type===e&&c[a[b+2][d+1]].type===e))c[a[b+1][d]].type===e?this.n(a[b+2][d],a[b+2][d+1]):this.n(a[b][d],a[b][d+1]);d+2<this.g&&b+1<this.h&&c[a[b][d+2]].type===e&&c[a[b+1][d+1]].type===e&&this.n(a[b][d+1],a[b+1][d+1]);d+2<this.g&&b-1>=0&&c[a[b][d+2]].type===e&&c[a[b-1][d+1]].type===e&&this.n(a[b][d+1],a[b-1][d+1]);b+2<this.h&&d+1<this.g&&c[a[b+2][d]].type===e&&c[a[b+1][d+1]].type===e&&this.n(a[b+1][d],a[b+1][d+1]);b+2<this.h&&d-1>=0&&c[a[b+2][d]].type===e&&c[a[b+1][d-
    1]].type===e&&this.n(a[b+1][d],a[b+1][d-1])}var f=this;da(Aa(),function(a){a.innerHTML=f.p.length})},ta:function(){for(var a=[],c=0;c<this.h;c++)a[c]=this.a[c].slice(0);return a},na:function(a,c){var b=this.b[a],d=this.b[c];!b.l()||!d.l()?this.e.fire("LOG","couldn't switch blocks: not ready"):(b.Y(d.id,{x:d.f.x,y:d.f.y},t(this.oa,this)),d.Y(b.id,{x:b.f.x,y:b.f.y},t(this.oa,this)))},oa:function(a,c){var b=this.b[a],d=this.b[c];if(b)if(d){var e={x:b.c.x,y:b.c.y},f={x:d.c.x,y:d.c.y};b.O(f);d.O(e);this.a[b.c.x][b.c.y]=
    b.id;this.a[d.c.x][d.c.y]=d.id;var g=this.H(b,!0),h=this.H(d,!0);g.max<3&&h.max<3?(b.O(e),d.O(f),b.A(),d.A(),this.a[b.c.x][b.c.y]=b.id,this.a[d.c.x][d.c.y]=d.id,this.e.fire("LOG","blocks switch rejected: "+a+" ("+g.max+") & "+c+" ("+h.max+")")):(b.A(),d.A(),this.e.fire("LOG","blocks switch accepted: "+a+" ("+g.max+") & "+c+" ("+h.max+")"),g.max>=3&&this.v.push(g.id),h.max>=3&&this.v.push(h.id))}else b.A();else d.A()},G:function(a){for(var c=0,b=a.length;c<b;c++)this.b[a[c]].va(t(this.xa,this)),this.q.push(a[c])},
    xa:function(a){typeof a!=="array"&&(a=[a]);for(var c=0,b=a.length;c<b;c++)for(var d=0,e=this.r.length;d<e;d++)if(this.r[d].id==a[c]){this.a[this.r[d].c.x][this.r[d].c.y]=i;this.b[a[c]]=i;this.r[d]=i;this.r.splice(d,1);break}this.S=!0},Da:function(){for(var a=0;a<this.h;a++){for(var c=0,b=this.g-1;b>=0;b--)this.a[a][b]?c&&(this.b[this.a[a][b]].ya(c,t(this.Z,this)),this.a[a][b+c]=this.a[a][b],this.a[a][b]=i):c++;for(b=c-1;b>=0;b--)this.ba(a,b,c-b)}},Z:function(a){this.v.push(a)},ra:function(a){this.b[a]&&
    (a=this.H(this.b[a],!0),a.max>=3&&(a.x.Q>=3&&this.G(a.x.R),a.y.Q>=3&&this.G(a.y.R)))},H:function(a,c){for(var b=1,d=[a.id],e=a.c.x+1;e<this.h;e++)if(this.a[e][a.c.y]&&this.b[this.a[e][a.c.y]]&&this.b[this.a[e][a.c.y]].o&&this.b[this.a[e][a.c.y]].type==a.type&&(!c||this.b[this.a[e][a.c.y]].l()))b++,d.push(this.a[e][a.c.y]);else break;for(e=a.c.x-1;e>=0;e--)if(this.a[e][a.c.y]&&this.b[this.a[e][a.c.y]]&&this.b[this.a[e][a.c.y]].o&&this.b[this.a[e][a.c.y]].type==a.type&&(!c||this.b[this.a[e][a.c.y]].l()))b++,
    d.push(this.a[e][a.c.y]);else break;for(var e=1,f=[a.id],g=a.c.y+1;g<this.g;g++)if(this.a[a.c.x][g]&&this.b[this.a[a.c.x][g]]&&this.b[this.a[a.c.x][g]].o&&this.b[this.a[a.c.x][g]].type==a.type&&(!c||this.b[this.a[a.c.x][g]].l()))e++,f.push(this.a[a.c.x][g]);else break;for(g=a.c.y-1;g>=0;g--)if(this.a[a.c.x][g]&&this.b[this.a[a.c.x][g]]&&this.b[this.a[a.c.x][g]].o&&this.b[this.a[a.c.x][g]].type==a.type&&(!c||this.b[this.a[a.c.x][g]].l()))e++,f.push(this.a[a.c.x][g]);else break;return{id:a.id,max:e>
    b?e:b,x:{Q:b,R:d},y:{Q:e,R:f}}},Ha:function(a){this.width=a.width;this.height=a.height;this.k=this.height/this.g;this.i=this.width/this.h},Oa:function(a){this.ma[this.ca].L(this,a,{showSwitches:this.la});if(this.qa&&this.p.length&&Math.random()*100<5){var c=Math.floor(Math.random()*this.p.length),b=this.b[this.p[c][0]],d=this.b[this.p[c][1]];b.l()&&d.l()&&b.o&&d.o&&this.na(this.p[c][0],this.p[c][1])}this.Ea&&Math.random()*100<5&&(c=Math.round(Math.random()*(this.h-1)),this.a[c][this.g-1]&&this.b[this.a[c][this.g-
    1]].l()&&this.G([this.a[c][this.g-1]]));if(this.Fa&&Math.random()*200<3){c=[];for(b=0;b<this.h;b++)this.a[b][this.g-1]&&c.push(this.a[b][this.g-1]);this.G(c)}if(this.B.length){c=0;for(b=this.B.length;c<b;c++)this.na(this.B[c][0],this.B[c][1]);this.B=[]}if(this.v.length){c=0;for(b=this.v.length;c<b;c++)this.ra(this.v[c]);this.v=[]}if(this.q.length){for(var d={},e=[],c=0,b=this.q.length;c<b;c++)d[this.q[c]]||(d[this.q[c]]=!0,this.b[this.q[c]]&&this.b[this.q[c]].wa(a)&&e.push(this.q[c]));this.q=e}c=
    0;for(b=this.r.length;c<b;c++)this.r[c].move(a);if(this.S)this.Da(),this.S=!1;this.sa()},ba:function(a,c,b){var d=new u({id:++this.$,x:a,y:c});this.a[a][c]=d.id;if(b){for(var e=0,f=0,g=this.g;f<g;f++)if(f!=c&&this.a[a][f]&&this.b[this.a[a][f]]){e=this.b[this.a[a][f]].f.y-100;break}d.f.y=e<b*-100?e:b*-100;d.j.Sa=t(this.Z,this)}this.b[this.$]=d;this.r.push(d);a=Math.round(Math.random()*7);for(f=0;f<7;f++)if(c=a+f,c>7&&(c-=7),d.type=c,this.H(d).max<3)break},Ka:function(){for(var a=0;a<this.h;a++)for(var c=
    0;c<this.g;c++)this.a[a]||(this.a[a]=[]),this.a[a][c]||(this.a[a][c]=i)},Ja:function(){this.Ka();for(var a=0;a<this.h;a++)for(var c=0;c<this.g;c++)this.ba(a,c);this.k=this.height/this.g;this.i=this.width/this.h}};
    return CanvasJewels;
    })();