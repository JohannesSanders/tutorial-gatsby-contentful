webpackJsonp([0xd2a57dc1d883],{133:function(e,t){"use strict";function n(e,t,n){var o=r.map(function(n){if(n.plugin[e]){var o=n.plugin[e](t,n.options);return o}});return o=o.filter(function(e){return"undefined"!=typeof e}),o.length>0?o:n?[n]:[]}function o(e,t,n){return r.reduce(function(n,o){return o.plugin[e]?n.then(function(){return o.plugin[e](t,o.options)}):n},Promise.resolve())}t.__esModule=!0,t.apiRunner=n,t.apiRunnerAsync=o;var r=[]},252:function(e,t,n){"use strict";var o;t.components={"component---src-templates-blog-post-js":n(370),"component---src-pages-blog-js":n(368),"component---src-pages-index-js":n(369)},t.json=(o={"layout-index.json":n(125),"blog-down-the-rabbit-hole.json":n(372)},o["layout-index.json"]=n(125),o["blog-seven-tips-from-ernest-hemingway-on-how-to-write-fiction.json"]=n(373),o["layout-index.json"]=n(125),o["blog.json"]=n(371),o["layout-index.json"]=n(125),o["index.json"]=n(374),o),t.layouts={"layout---index":n(367)}},253:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c=n(2),s=o(c),l=n(7),f=o(l),d=n(187),p=o(d),h=n(114),g=o(h),m=n(133),v=n(486),y=o(v),R=function(e){var t=e.children;return s.default.createElement("div",null,t())},w=function(e){function t(n){r(this,t);var o=a(this,e.call(this)),u=n.location;return p.default.getPage(u.pathname)||(u=i({},u,{pathname:"/404.html"})),o.state={location:u,pageResources:p.default.getResourcesForPathname(u.pathname)},o}return u(t,e),t.prototype.componentWillReceiveProps=function(e){var t=this;if(this.state.location.pathname!==e.location.pathname){var n=p.default.getResourcesForPathname(e.location.pathname);if(n)this.setState({location:e.location,pageResources:n});else{var o=e.location;p.default.getPage(o.pathname)||(o=i({},o,{pathname:"/404.html"})),p.default.getResourcesForPathname(o.pathname,function(e){t.setState({location:o,pageResources:e})})}}},t.prototype.componentDidMount=function(){var e=this;g.default.on("onPostLoadPageResources",function(t){p.default.getPage(e.state.location.pathname)&&t.page.path===p.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:t.pageResources})})},t.prototype.shouldComponentUpdate=function(e,t){return!t.pageResources||(!(this.state.pageResources||!t.pageResources)||(this.state.pageResources.component!==t.pageResources.component||(this.state.pageResources.json!==t.pageResources.json||(!(this.state.location.key===t.location.key||!t.pageResources.page||!t.pageResources.page.matchPath&&!t.pageResources.page.path)||(0,y.default)(this,e,t)))))},t.prototype.render=function(){var e=(0,m.apiRunner)("replaceComponentRenderer",{props:i({},this.props,{pageResources:this.state.pageResources}),loader:d.publicLoader}),t=e[0];return this.props.page?this.state.pageResources?t||(0,c.createElement)(this.state.pageResources.component,i({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?t||(0,c.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:R,i({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},t}(s.default.Component);w.propTypes={page:f.default.bool,layout:f.default.bool,location:f.default.object},t.default=w,e.exports=t.default},114:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(387),a=o(r),u=(0,a.default)();e.exports=u},254:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(132),a=n(188),u=o(a),i={};e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(n){var o=decodeURIComponent(n),a=(0,u.default)(o,t);if(a.split("#").length>1&&(a=a.split("#").slice(0,-1).join("")),a.split("?").length>1&&(a=a.split("?").slice(0,-1).join("")),i[a])return i[a];var c=void 0;return e.some(function(e){if(e.matchPath){if((0,r.matchPath)(a,{path:e.path})||(0,r.matchPath)(a,{path:e.matchPath}))return c=e,i[a]=e,!0}else{if((0,r.matchPath)(a,{path:e.path,exact:!0}))return c=e,i[a]=e,!0;if((0,r.matchPath)(a,{path:e.path+"index.html"}))return c=e,i[a]=e,!0}return!1}),c}}},255:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(163),a=o(r),u=n(133),i=(0,u.apiRunner)("replaceHistory"),c=i[0],s=c||(0,a.default)();e.exports=s},372:function(e,t,n){n(24),e.exports=function(e){return n.e(0xe27dd9405763,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(381)})})}},373:function(e,t,n){n(24),e.exports=function(e){return n.e(88728586850661,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(382)})})}},371:function(e,t,n){n(24),e.exports=function(e){return n.e(49683490770531,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(383)})})}},374:function(e,t,n){n(24),e.exports=function(e){return n.e(0x81b8806e4260,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(384)})})}},125:function(e,t,n){n(24),e.exports=function(e){return n.e(60335399758886,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(166)})})}},367:function(e,t,n){n(24),e.exports=function(e){return n.e(0x67ef26645b2a,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(256)})})}},187:function(e,t,n){(function(e){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.publicLoader=void 0;var r=n(2),a=(o(r),n(254)),u=o(a),i=n(114),c=o(i),s=n(188),l=o(s),f=void 0,d={},p={},h={},g={},m={},v=[],y=[],R={},w="",_=[],P={},b=function(e){return e&&e.default||e},x=void 0,j=!0,E=[],C={},k={},N=5;x=n(257)({getNextQueuedResources:function(){return _.slice(-1)[0]},createResourceDownload:function(e){T(e,function(){_=_.filter(function(t){return t!==e}),x.onResourcedFinished(e)})}}),c.default.on("onPreLoadPageResources",function(e){x.onPreLoadPageResources(e)}),c.default.on("onPostLoadPageResources",function(e){x.onPostLoadPageResources(e)});var O=function(e,t){return P[e]>P[t]?1:P[e]<P[t]?-1:0},L=function(e,t){return R[e]>R[t]?1:R[e]<R[t]?-1:0},T=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(g[t])e.nextTick(function(){n(null,g[t])});else{var o=void 0;o="component---"===t.slice(0,12)?p.components[t]:"layout---"===t.slice(0,9)?p.layouts[t]:p.json[t],o(function(e,o){g[t]=o,E.push({resource:t,succeeded:!e}),k[t]||(k[t]=e),E=E.slice(-N),n(e,o)})}},S=function(t,n){m[t]?e.nextTick(function(){n(null,m[t])}):k[t]?e.nextTick(function(){n(k[t])}):T(t,function(e,o){if(e)n(e);else{var r=b(o());m[t]=r,n(e,r)}})},A=function(){var e=navigator.onLine;if("boolean"==typeof e)return e;var t=E.find(function(e){return e.succeeded});return!!t},D=function(e,t){console.log(t),C[e]||(C[e]=t),A()&&window.location.pathname.replace(/\/$/g,"")!==e.replace(/\/$/g,"")&&(window.location.pathname=e)},M=1,U={empty:function(){y=[],R={},P={},_=[],v=[],w=""},addPagesArray:function(e){v=e,w="/gatsby-contentful-starter",f=(0,u.default)(e,w)},addDevRequires:function(e){d=e},addProdRequires:function(e){p=e},dequeue:function(){return y.pop()},enqueue:function(e){var t=(0,l.default)(e,w);if(!v.some(function(e){return e.path===t}))return!1;var n=1/M;M+=1,R[t]?R[t]+=1:R[t]=1,U.has(t)||y.unshift(t),y.sort(L);var o=f(t);return o.jsonName&&(P[o.jsonName]?P[o.jsonName]+=1+n:P[o.jsonName]=1+n,_.indexOf(o.jsonName)!==-1||g[o.jsonName]||_.unshift(o.jsonName)),o.componentChunkName&&(P[o.componentChunkName]?P[o.componentChunkName]+=1+n:P[o.componentChunkName]=1+n,_.indexOf(o.componentChunkName)!==-1||g[o.jsonName]||_.unshift(o.componentChunkName)),_.sort(O),x.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:_,resourcesCount:P}},getPages:function(){return{pathArray:y,pathCount:R}},getPage:function(e){return f(e)},has:function(e){return y.some(function(t){return t===e})},getResourcesForPathname:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};j&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(f(t)||navigator.serviceWorker.getRegistrations().then(function(e){if(e.length){for(var t=e,n=Array.isArray(t),o=0,t=n?t:t[Symbol.iterator]();;){var r;if(n){if(o>=t.length)break;r=t[o++]}else{if(o=t.next(),o.done)break;r=o.value}var a=r;a.unregister()}window.location.reload()}})),j=!1;if(C[t])return D(t,'Previously detected load failure for "'+t+'"'),n();var o=f(t);if(!o)return D(t,"A page wasn't found for \""+t+'"'),n();if(t=o.path,h[t])return e.nextTick(function(){n(h[t]),c.default.emit("onPostLoadPageResources",{page:o,pageResources:h[t]})}),h[t];c.default.emit("onPreLoadPageResources",{path:t});var r=void 0,a=void 0,u=void 0,i=function(){if(r&&a&&(!o.layoutComponentChunkName||u)){h[t]={component:r,json:a,layout:u,page:o};var e={component:r,json:a,layout:u,page:o};n(e),c.default.emit("onPostLoadPageResources",{page:o,pageResources:e})}};return S(o.componentChunkName,function(e,t){e&&D(o.path,"Loading the component for "+o.path+" failed"),r=t,i()}),S(o.jsonName,function(e,t){e&&D(o.path,"Loading the JSON for "+o.path+" failed"),a=t,i()}),void(o.layoutComponentChunkName&&S(o.layout,function(e,t){e&&D(o.path,"Loading the Layout for "+o.path+" failed"),u=t,i()}))},peek:function(e){return y.slice(-1)[0]},length:function(){return y.length},indexOf:function(e){return y.length-y.indexOf(e)-1}};t.publicLoader={getResourcesForPathname:U.getResourcesForPathname};t.default=U}).call(t,n(167))},385:function(e,t){e.exports=[{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-down-the-rabbit-hole.json",path:"/blog/down-the-rabbit-hole/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-seven-tips-from-ernest-hemingway-on-how-to-write-fiction.json",path:"/blog/seven-tips-from-ernest-hemingway-on-how-to-write-fiction/"},{componentChunkName:"component---src-pages-blog-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog.json",path:"/blog/"},{componentChunkName:"component---src-pages-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"}]},257:function(e,t){"use strict";e.exports=function(e){var t=e.getNextQueuedResources,n=e.createResourceDownload,o=[],r=[],a=function(){var e=t();e&&(r.push(e),n(e))},u=function(e){switch(e.type){case"RESOURCE_FINISHED":r=r.filter(function(t){return t!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(t){return t!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===o.length&&a()},0)};return{onResourcedFinished:function(e){u({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:r}},empty:function(){o=[],r=[]}}}},0:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=n(133),u=n(2),i=o(u),c=n(222),s=o(c),l=n(132),f=n(378),d=n(349),p=o(d),h=n(165),g=n(255),m=o(g),v=n(114),y=o(v),R=n(385),w=o(R),_=n(386),P=o(_),b=n(253),x=o(b),j=n(252),E=o(j),C=n(187),k=o(C);n(275),window.___history=m.default,window.___emitter=y.default,k.default.addPagesArray(w.default),k.default.addProdRequires(E.default),window.asyncRequires=E.default,window.___loader=k.default,window.matchPath=l.matchPath;var N=P.default.reduce(function(e,t){return e[t.fromPath]=t,e},{}),O=function(e){var t=N[e];return null!=t&&(m.default.replace(t.toPath),!0)};O(window.location.pathname),(0,a.apiRunnerAsync)("onClientEntry").then(function(){function e(e){window.___history&&c!==!1||(window.___history=e,c=!0,e.listen(function(e,t){O(e.pathname)||setTimeout(function(){(0,a.apiRunner)("onRouteUpdate",{location:e,action:t})},0)}))}function t(e,t){var n=t.location.pathname,o=(0,a.apiRunner)("shouldUpdateScroll",{prevRouterProps:e,pathname:n});if(o.length>0)return o[0];if(e){var r=e.location.pathname;if(r===n)return!1}return!0}(0,a.apiRunner)("registerServiceWorker").length>0&&n(258);var o=function(e){function t(e){e.page.path===k.default.getPage(o).path&&(y.default.off("onPostLoadPageResources",t),clearTimeout(a),window.___history.push(n))}var n=(0,h.createLocation)(e,null,null,m.default.location),o=n.pathname,r=N[o];if(r&&(o=r.toPath),window.location.pathname!==o){var a=setTimeout(function(){y.default.off("onPostLoadPageResources",t),y.default.emit("onDelayedLoadPageResources",{pathname:o}),window.___history.push(n)},1e3);k.default.getResourcesForPathname(o)?(clearTimeout(a),window.___history.push(n)):y.default.on("onPostLoadPageResources",t)}};window.___navigateTo=o,(0,a.apiRunner)("onRouteUpdate",{location:m.default.location,action:m.default.action});var c=!1,d=(0,a.apiRunner)("replaceRouterComponent",{history:m.default})[0],g=function(e){var t=e.children;return i.default.createElement(l.Router,{history:m.default},t)},v=(0,l.withRouter)(x.default);k.default.getResourcesForPathname(window.location.pathname,function(){var n=function(){return(0,u.createElement)(d?d:g,null,(0,u.createElement)(f.ScrollContext,{shouldUpdateScroll:t},(0,u.createElement)(v,{layout:!0,children:function(t){return(0,u.createElement)(l.Route,{render:function(n){e(n.history);var o=t?t:n;return k.default.getPage(o.location.pathname)?(0,u.createElement)(x.default,r({page:!0},o)):(0,u.createElement)(x.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},o=(0,a.apiRunner)("wrapRootComponent",{Root:n},n)[0];(0,p.default)(function(){return s.default.render(i.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,a.apiRunner)("onInitialClientRender")})})})})},386:function(e,t){e.exports=[]},258:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(114),a=o(r),u="/";u="/gatsby-contentful-starter/","serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var t=e.installing;console.log("installingWorker",t),t.addEventListener("statechange",function(){switch(t.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},188:function(e,t){"use strict";t.__esModule=!0,t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.substr(0,t.length)===t?e.slice(t.length):e},e.exports=t.default},349:function(e,t,n){!function(t,n){e.exports=n()}("domready",function(){var e,t=[],n=document,o=n.documentElement.doScroll,r="DOMContentLoaded",a=(o?/^loaded|^c/:/^loaded|^i|^c/).test(n.readyState);return a||n.addEventListener(r,e=function(){for(n.removeEventListener(r,e),a=1;e=t.shift();)e()}),function(e){a?setTimeout(e,0):t.push(e)}})},24:function(e,t,n){"use strict";function o(){function e(e){var t=o.lastChild;return"SCRIPT"!==t.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",t)):void(t.onload=t.onerror=function(){t.onload=t.onerror=null,setTimeout(e,0)})}var t,o=document.querySelector("head"),r=n.e,a=n.s;n.e=function(o,u){var i=!1,c=!0,s=function(e){u&&(u(n,e),u=null)};return!a&&t&&t[o]?void s(!0):(r(o,function(){i||(i=!0,c?setTimeout(function(){s()}):s())}),void(i||(c=!1,e(function(){i||(i=!0,a?a[o]=void 0:(t||(t={}),t[o]=!0),s(!0))}))))}}o()},387:function(e,t){function n(e){return e=e||Object.create(null),{on:function(t,n){(e[t]||(e[t]=[])).push(n)},off:function(t,n){e[t]&&e[t].splice(e[t].indexOf(n)>>>0,1)},emit:function(t,n){(e[t]||[]).slice().map(function(e){e(n)}),(e["*"]||[]).slice().map(function(e){e(t,n)})}}}e.exports=n},167:function(e,t){function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function a(e){if(f===clearTimeout)return clearTimeout(e);if((f===o||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function u(){g&&p&&(g=!1,p.length?h=p.concat(h):m=-1,h.length&&i())}function i(){if(!g){var e=r(u);g=!0;for(var t=h.length;t;){for(p=h,h=[];++m<t;)p&&p[m].run();m=-1,t=h.length}p=null,g=!1,a(e)}}function c(e,t){this.fun=e,this.array=t}function s(){}var l,f,d=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{f="function"==typeof clearTimeout?clearTimeout:o}catch(e){f=o}}();var p,h=[],g=!1,m=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new c(e,t)),1!==h.length||g||r(i)},c.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=s,d.addListener=s,d.once=s,d.off=s,d.removeListener=s,d.removeAllListeners=s,d.emit=s,d.prependListener=s,d.prependOnceListener=s,d.listeners=function(e){return[]},d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},486:function(e,t){"use strict";function n(e,t){for(var n in e)if(!(n in t))return!0;for(var o in t)if(e[o]!==t[o])return!0;return!1}t.__esModule=!0,t.default=function(e,t,o){return n(e.props,t)||n(e.state,o)},e.exports=t.default},368:function(e,t,n){n(24),e.exports=function(e){return n.e(0xc19374f83753,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(263)})})}},369:function(e,t,n){n(24),e.exports=function(e){return n.e(35783957827783,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(264)})})}},370:function(e,t,n){n(24),e.exports=function(e){return n.e(0x620f737b6699,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(265)})})}}});
//# sourceMappingURL=app-2a6b57d1cf7cdd5bf525.js.map