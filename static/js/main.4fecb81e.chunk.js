(this["webpackJsonpfastexplorer-js"]=this["webpackJsonpfastexplorer-js"]||[]).push([[0],{126:function(e,t,a){e.exports=a(140)},139:function(e,t,a){},140:function(e,t,a){"use strict";a.r(t);var n,r=a(16),c=a(1),l=a.n(c),o=a(33),s=a.n(o),i=a(15),u=a(51),m=function(e){var t=e.url,a="renato.hermoza@pucp.edu.pe";return l.a.createElement("footer",{className:"w-full mt-10"},l.a.createElement("p",{className:"text-gray-600 pl-4 text-sm"},"Made by: Renato Hermoza, check the"," ",l.a.createElement("a",{href:"https://github.com/renato145/".concat(t),target:"_black"},"source code"),"."),l.a.createElement("hr",{className:"m-2"}),l.a.createElement("div",{className:"flex flex-wrap justify-center"},l.a.createElement("div",{className:"px-4"},l.a.createElement("a",{href:"mailto:".concat(a)},a)),l.a.createElement("div",{className:"px-4"},l.a.createElement("a",{href:"https://twitter.com/".concat("renato145".twitter),target:"_black"},"Twitter")),l.a.createElement("div",{className:"px-4"},l.a.createElement("a",{href:"https://github.com/".concat("renato145".github),target:"_black"},"GitHub")),l.a.createElement("div",{className:"px-4"},l.a.createElement("a",{href:"https://".concat("renato145",".github.io"),target:"_black"},"Blog"))))},d=a(10),f=a(21),v=function(){return window.location.reload(!1)},p=function(e){var t=e.text,a=void 0===t?"refresh":t,n=e.tw;return l.a.createElement("button",{className:"text-sm py-1 px-2 ".concat(n),onClick:v},a)},h="LOAD_INPUT",b="GET_HEATMAP",x="GET_LOSS_LANDSCAPE",g="waiting",E="connected",y="closed",w=(n={},Object(d.a)(n,g,"text-blue-600"),Object(d.a)(n,E,"text-green-600"),Object(d.a)(n,y,"text-red-600"),n),O=Object(f.b)((function(e){return{status:e.socket.status,connectedBefore:e.socket.connectedBefore}}),null)((function(e){var t=e.status,a=e.connectedBefore;return l.a.createElement("div",null,l.a.createElement("p",{className:"font-mono text-sm text-gray-800 font-semibold inline"},"Socket status: ",l.a.createElement("span",{className:w[t]},t)," "),"closed"===t&&a&&l.a.createElement(p,null))})),j=a(41),k=function(e){var t=e.children,a=Object(j.a)(e,["children"]);return l.a.createElement(u.b,Object.assign({exact:!0,className:"mr-6 text-gray-600 hover:text-gray-800",activeClassName:"text-lg font-bold"},a),t)},N=function(){return l.a.createElement("nav",{className:"flex flex-wrap items-center px-6 py-3 bg-gray-300"},l.a.createElement(k,{to:"/"},"Home"),l.a.createElement(k,{to:"/loss_landscape"},"Loss Landscape"))},q=function(){return l.a.createElement("div",{className:"max-w-screen-md mx-4 bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-800 px-4 py-3 shadow",role:"alert"},l.a.createElement("div",{className:"flex"},l.a.createElement("div",{className:"py-1"},l.a.createElement("svg",{className:"fill-current h-6 w-6 md:h-8 md:w-8 xl:h-10 xl:w-10 text-teal-500 mr-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},l.a.createElement("path",{d:"M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"}))),l.a.createElement("div",null,l.a.createElement("p",{className:"font-bold text-lg md:text-xl xl:text-2xl"},"Socket is not connected"),l.a.createElement("p",null,"This utility helps you visualize information about"," ",l.a.createElement("a",{href:"https://dev.fast.ai/"},"fastai2")," models. To use this, you need to launch the server in python via"," ",l.a.createElement("a",{href:"https://renato145.github.io/fastexplorer/"},"fastexplorer"),"."),l.a.createElement("p",{className:"mt-1"},"Once you launch the server,"," ",l.a.createElement(p,{tw:"bg-teal-500 hover:bg-teal-400 active:bg-teal-700"})," this page."))))},z=a(52),C=a(13),S=a(35),I=a(36),M=a(57),_=a(56),R=function(e){return l.a.createElement("svg",Object.assign({},e,{viewBox:"64 -65 897 897"}),l.a.createElement("g",null,l.a.createElement("path",{d:"M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 347h-442q-14 0 -25 10.5t-11 25.5v0q0 15 11 25.5t25 10.5h442q14 0 25 -10.5t11 -25.5v0 q0 -15 -11 -25.5t-25 -10.5z"})))},A=function(e){return l.a.createElement("svg",Object.assign({},e,{viewBox:"64 -65 897 897"}),l.a.createElement("g",null,l.a.createElement("path",{d:"M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z"})))},L=function(e){return l.a.createElement("svg",Object.assign({},e,{viewBox:"64 -65 897 897"}),l.a.createElement("g",null,l.a.createElement("path",{d:"M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z"})))},B=a(17),U=a.n(B),D=a(44),H=a(45),T=a(27),P=a(31),F=Object(P.c)({name:"socket",initialState:{status:"waiting",connectedBefore:!1,data:null,inputImage:null,heatmap:null,heatmaps:[],lossLandscape:null},reducers:{socketConnected:function(e){e.status="connected",e.connectedBefore=!0},socketClosed:function(e){e.status="closed"},socketReceiveData:function(e,t){var a=t.payload.data;e.data=JSON.parse(a)},socketInvalidEvent:function(e,t){var a=t.payload.type;console.error("Type not recognized by server:",a)},socketReceiveImageInput:function(e,t){e.inputImage=t.payload},socketNoImageHeatmap:function(e,t){console.error("Heatmap not valid.")},socketReceiveHeatmap:function(e,t){e.heatmap=t.payload},socketReceiveLossLandscape:function(e,t){e.lossLandscape=t.payload},socketError:function(e,t){var a=t.payload.msg;console.error("Error:",a)},socketServerClosed:function(e,t){var a=t.payload.msg;console.error(a)}}}),J=F.actions,G=J.socketConnected,V=J.socketClosed,W=(J.socketReceiveData,F.reducer),K={"<u1":{name:"uint8",size:8,arrayConstructor:Uint8Array},"|u1":{name:"uint8",size:8,arrayConstructor:Uint8Array},"|i1":{name:"int8",size:8,arrayConstructor:Int8Array},"<u4":{name:"uint32",size:32,arrayConstructor:Int32Array},"<i4":{name:"int32",size:32,arrayConstructor:Int32Array},"<f4":{name:"float32",size:32,arrayConstructor:Float32Array},"<f8":{name:"float64",size:64,arrayConstructor:Float64Array}},Q=function(e){return JSON.parse(e.replace(/'/g,'"').replace("False","false").replace("(","[").replace(")","]").replace(", }","}").replace(",]","]"))},X=function(){var e=Object(D.a)(U.a.mark((function e(t){var a,n,r,c,l,o,s,i,u,m,d,f,v;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.arrayBuffer();case 2:return a=e.sent,n=a.slice(0,100),r=a.slice(128),c=new DataView(r.slice(8,10)).getUint8(0),l=138+c,o=new TextDecoder("utf-8"),s=o.decode(new Uint8Array(n)),i=o.decode(new Uint8Array(r.slice(10,10+c))),u=Q(s),m=Q(i),d=m.shape,f=m.descr,v=URL.createObjectURL(t.slice(l)),e.abrupt("return",{type:u.type,payload:Object(z.a)({dataUrl:v,shape:d,descr:f},u)});case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(D.a)(U.a.mark((function e(t){var a,n,r,c,l,o;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.dataUrl,n=t.shape,r=t.descr,c=new URL(a),e.next=4,fetch(c);case 4:return l=e.sent,e.next=7,l.arrayBuffer();case 7:return o=e.sent,e.abrupt("return",{data:new K[r].arrayConstructor(o),shape:n});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=U.a.mark(re),$=U.a.mark(ce),ee=U.a.mark(le),te=U.a.mark(oe),ae=Object(P.b)("socket/sendEvent");function ne(e){return Object(H.c)((function(t){return e.onopen=function(){t(G()),console.log("WebSocket connected."),e.send(JSON.stringify({type:"CONNECTED",payload:{client:"web_client"}}))},e.onmessage=function(){var e=Object(D.a)(U.a.mark((function e(a){var n,r;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("string"!==typeof(n=a.data)){e.next=5;break}e.t0=JSON.parse(n),e.next=8;break;case 5:return e.next=7,X(n);case 7:e.t0=e.sent;case 8:(r=e.t0).type?(console.log("Event from WebSocket: ",r.type),t(r)):console.error("Invalid message from socket server",r);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.onclose=function(){console.log("WebSocket closed."),t(V()),t(H.a)},e.onerror=function(e){t(new Error(e.reason))},function(){return e.close()}}))}function re(e,t){return U.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.send(JSON.stringify(t));case 2:case"end":return a.stop()}}),Z)}function ce(e){return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(T.a)([Object(T.f)(ae,re,e)]);case 2:case"end":return t.stop()}}),$)}function le(e){var t;return U.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=1,a.next=4,Object(T.e)(e);case 4:return t=a.sent,a.next=7,Object(T.d)(t);case 7:a.next=12;break;case 9:a.prev=9,a.t0=a.catch(1),console.error(a.t0);case 12:a.next=0;break;case 14:case"end":return a.stop()}}),ee,null,[[1,9]])}function oe(){var e,t;return U.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,new WebSocket("ws://localhost:8000/ws");case 2:return e=a.sent,a.next=5,Object(T.b)(ne,e);case 5:return t=a.sent,a.next=8,Object(T.c)(ce,e);case 8:return a.next=10,Object(T.c)(le,t);case 10:case"end":return a.stop()}}),te)}var se={send_event:ae},ie=Object(f.b)(null,se)((function(e){var t=e.name,a=e.shape,n=e.path,r=e.send_event;return l.a.createElement("span",{className:"align-middle cursor-pointer",onClick:function(){return r({event:b,path:n})}},t,a?" [".concat(a.toString(),"]"):"")}));function ue(){var e=Object(S.a)(["\n  margin-left: 6px;\n  padding: 0px 0px 0px 14px;\n  border-left: 2px dashed rgba(0, 0, 0, 0.25);\n  overflow: hidden;\n"]);return ue=function(){return e},e}function me(){var e=Object(S.a)(["\n  position: relative;\n  padding: 4px 0px 0px 0px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow-x: hidden;\n  vertical-align: middle;\n"]);return me=function(){return e},e}var de=Object(I.a)("div")(me()),fe=Object(I.a)(M.a.div)(ue()),ve={width:"1em",height:"1em",marginRight:10,cursor:"pointer",verticalAlign:"middle"},pe=Object(c.memo)((function(e){var t,a,n,r=e.data,o=e.level,s=e.parentPath,i=r.name,u=r.nodes,m=null===r||void 0===r||null===(t=r.xtra)||void 0===t?void 0:t.shape,d=null===r||void 0===r||null===(a=r.xtra)||void 0===a?void 0:a.path,f=s?"".concat(s,"/").concat(d):d,v=Object(c.useState)(null===r||void 0===r||null===(n=r.xtra)||void 0===n?void 0:n.open),p=Object(C.a)(v,2),h=p[0],b=p[1],x=function(e){var t=Object(c.useRef)();return Object(c.useEffect)((function(){t.current=e}),[e]),t.current}(h),g=function(){var e=Object(c.useRef)(),t=Object(c.useState)(0),a=Object(C.a)(t,2),n=a[0],r=a[1],l=Object(c.useState)(0),o=Object(C.a)(l,2),s=o[0],i=o[1],u=Object(c.useMemo)((function(){return new _.a((function(e){var t=e[0];r(t.contentRect.width),i(t.contentRect.height)}))}),[]);return Object(c.useEffect)((function(){var t=e.current;return t&&u.observe(t),function(){return u.unobserve(t)}}),[u]),{ref:e,width:n,height:s}}(),E=g.ref,y=g.height,w=Object(M.b)({from:{height:0,opacity:0,transform:"translate3d(20px,0,0)"},to:{height:h?y:0,opacity:h?1:0,transform:"translate3d(".concat(h?0:20,"px,0,0)")}}),O=w.height,j=w.opacity,k=w.transform,N=u?h?R:A:L;return l.a.createElement(de,null,l.a.createElement(N,{className:"inline-block",style:Object(z.a)({},ve,{opacity:u?1:.3}),onClick:function(){return b(!h)}}),l.a.createElement(ie,{name:i,shape:m,path:f}),l.a.createElement(fe,{style:{opacity:j,height:h&&x===h?"auto":O}},l.a.createElement(M.a.div,{ref:E,style:{transform:k},children:u&&u.map((function(e,t){return l.a.createElement(pe,{key:t,data:e,level:o+1,parentPath:f})}))})))})),he=function(e){var t=e.data;return l.a.createElement(pe,{data:t,level:0,parentPath:""})},be=a(28);function xe(){var e=Object(S.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.2em 0em;\n"]);return xe=function(){return e},e}var ge={Magma:be.f,RdBu:be.h,Inferno:be.e,Warm:be.j,Cool:be.c,Spectral:be.i,Plasma:be.g,Greys:be.d},Ee=I.a.div(xe()),ye=function(e){var t=e.url,a=e.title,n=e.defaultCmap,o=void 0===n?"RdBu":n,s=Object(c.useRef)(),i=Object(c.useState)(),u=Object(C.a)(i,2),m=u[0],d=u[1],f=Object(c.useState)(o),v=Object(C.a)(f,2),p=v[0],h=v[1];return Object(c.useEffect)((function(){t&&Y(t).then((function(e){var t=e.data,a=e.shape,n=s.current,c=3===a.length?a:[1].concat(Object(r.a)(a)),l=Object(C.a)(c,3),o=l[0],i=l[1],u=l[2];d(o);var m=n.getContext("2d");n.width=u,n.height=i;var f=m.getImageData(0,0,n.width,n.height),v=f.data;if(1===o)for(var h=0;h<v.length/4;h++){var b=4*h,x=Object(be.b)(ge[p](t[h]));v[b]=x.r,v[b+1]=x.b,v[b+2]=x.g,v[b+3]=255}else for(var g=u*i,E=0;E<v.length/4;E++){var y=4*E;v[y]=255*t[E],v[y+1]=255*t[E+g],v[y+2]=255*t[E+2*g],v[y+3]=255}m.putImageData(f,0,0)}))}),[t,p]),l.a.createElement(l.a.Fragment,null,l.a.createElement(Ee,null,l.a.createElement("div",{className:"ml-1 font-medium text-gray-900"},a),1===m&&l.a.createElement("div",null,l.a.createElement("select",{className:"px-2 h-auto text-xs bg-white border-gray-400 border rounded-sm focus:outline-none",defaultValue:p,onChange:function(e){return h(e.target.value)}},Object.keys(ge).sort(be.a).map((function(e){return l.a.createElement("option",{key:e,value:e,className:"py-2"},e)}))))),l.a.createElement("canvas",{ref:s,style:{width:"100%",background:"#eee"}}))},we={send_event:ae},Oe=Object(f.b)((function(e){return{inputImage:e.socket.inputImage}}),we)((function(e){var t=e.inputImage,a=e.send_event;return l.a.createElement(l.a.Fragment,null,l.a.createElement(ye,{url:t,title:"Input image"}),l.a.createElement("div",{className:"text-right mt-1 mr-1"},l.a.createElement("button",{className:"text-sm",onClick:function(){return a({event:h})}},"Load Input")))})),je=Object(f.b)((function(e){return{heatmap:e.socket.heatmap}}),null)((function(e){var t=e.heatmap;return l.a.createElement(ye,{url:t,title:"Heatmap"})})),ke=function(e){var t=e.children,a=e.tw,n=Object(j.a)(e,["children","tw"]);return l.a.createElement("div",Object.assign({className:"w-full flex-auto sm:flex-1 md:flex-auto lg:flex-1 max-w-sm lg:max-w-md ".concat(a)},n),t)},Ne=Object(f.b)((function(e){return{data:e.socket.data}}),null)((function(e){var t=e.data;return t?l.a.createElement("div",{className:"flex flex-wrap justify-start"},l.a.createElement("div",{className:"flex-none"},l.a.createElement(he,{data:t})),l.a.createElement("div",{className:"flex flex-wrap flex-auto md:flex-1"},l.a.createElement(ke,null,l.a.createElement(Oe,null)),l.a.createElement(ke,{tw:"sm:ml-3 md:ml-0 lg:ml-3"},l.a.createElement(je,null)))):l.a.createElement(q,null)})),qe=a(0),ze=a(12);function Ce(){var e=Object(S.a)(["\n  height: 75vh;\n  min-height: 300px;\n  width: 100%;\n  background-color: #000;\n  & canvas:focus {\n    outline-width: 0px;\n  }\n"]);return Ce=function(){return e},e}var Se=I.a.div(Ce()),Ie=function(e){var t=e.children,a=Object(j.a)(e,["children"]);return l.a.createElement(Se,a,l.a.createElement(ze.a,null,t))},Me=a(107),_e={send_event:ae},Re=function(e){var t=e.data,a=Object(c.useRef)(),n=Object(c.useRef)(),r=Object(c.useMemo)((function(){return{vertexShader:"\n  varying vec3 pos;\n\n  void main() {\n    pos = position;\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n  }\n",fragmentShader:"\n  varying vec3 pos;\n\n  void main() {\n    vec4 col = vec4(0.0, 0.1, 0.3, 1.0);\n    col.r = max(0.0, (1.0 - pos.z/2.0)) * (1.0 - distance(pos.xy, vec2(0.0))/10.0);\n    gl_FragColor = col;\n  }\n",uniforms:{}}}),[]);return Object(c.useEffect)((function(){var e;if(t){var a=n.current,r=null!==(e=t.max_z)&&void 0!==e?e:1;Y(t).then((function(e){var t=e.data;e.shape;t.forEach((function(e,t){a.vertices[t].z=e/r})),a.verticesNeedUpdate=!0}))}}),[t,r]),l.a.createElement("mesh",{ref:a,"rotation-x":-Math.PI/2.1,"position-y":-1.5},l.a.createElement("planeGeometry",{ref:n,attach:"geometry",args:[5,5,100,100]}),l.a.createElement("shaderMaterial",Object.assign({attach:"material"},r,{side:qe.DoubleSide})),l.a.createElement(Me.a,null))},Ae=Object(f.b)((function(e){return{data:e.socket.lossLandscape}}),_e)((function(e){var t=e.data,a=e.send_event;return l.a.createElement("div",null,l.a.createElement(Ie,null,l.a.createElement("ambientLight",null),l.a.createElement("pointLight",{position:[10,10,10]}),l.a.createElement(Re,{data:t})),l.a.createElement("div",{className:"text-right mt-2 mr-2"},l.a.createElement("button",{onClick:function(){return a({event:x})}},"Load landscape")))})),Le=(a(139),function(){var e="/"===Object(i.f)().pathname;return l.a.createElement("div",{className:"w-auto md:mx-4 pb-2 bg-white border shadow-md"},l.a.createElement("header",null,l.a.createElement(N,null)),l.a.createElement("main",{className:"px-2 mt-2"},e&&l.a.createElement("h1",{className:"text-gray-900"},"FastExplorer"),l.a.createElement("div",null,l.a.createElement(O,null)),l.a.createElement("div",{className:"mt-2"},l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/"},l.a.createElement(Ne,null)),l.a.createElement(i.a,{path:"/loss_landscape"},l.a.createElement(Ae,null))))),l.a.createElement(m,{url:"fastexplorer-js"}))}),Be=function(){return l.a.createElement(u.a,{basename:"/"},l.a.createElement(Le,null))},Ue=a(22),De=Object(Ue.c)({socket:W}),He=U.a.mark(Te);function Te(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.c)(oe);case 2:return e.next=4,Object(T.a)([]);case 4:case"end":return e.stop()}}),He)}var Pe=Object(H.b)(),Fe=[].concat(Object(r.a)(Object(P.d)({thunk:!1})),[Pe]),Je=Object(P.a)({reducer:De,middleware:Fe});Pe.run(Te),s.a.render(l.a.createElement(f.a,{store:Je},l.a.createElement(Be,null)),document.getElementById("root"))}},[[126,1,2]]]);
//# sourceMappingURL=main.4fecb81e.chunk.js.map