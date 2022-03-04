"use strict";(self.webpackChunkmemory=self.webpackChunkmemory||[]).push([[691],{883:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.r(t),n.d(t,{default:function(){return $}});var i=n(294),o=function(e){var t=e.children,n=e.variant,r=void 0===n?"primary":n,o=e.fullWidth,s=void 0!==o&&o,u=e.isActive,c=e.className,l=void 0===c?"":c,f=e.onClick,d=["py-3","px-4","transition-colors","ease-in-out","duration-150","rounded-full","text-white"];return s&&d.push("w-full"),"primary"===r?d=d.concat("bg-orange hover:bg-orange-hover"):"secondary"===r?d=d.concat("bg-grey hover:bg-blue-hover text-grey-dark"):"menu"===r&&(u?d.push("bg-grey-dark"):d=d.concat("bg-blue-light")),i.createElement("button",{className:a(d,l),onClick:f},t)},s=n(935);function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}var l=n(721);function f(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var d=!1,m=i.createContext(null),p="unmounted",v="exited",g="entering",E="entered",h="exiting",x=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var a,i=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?i?(a=v,r.appearStatus=g):a=E:a=t.unmountOnExit||t.mountOnEnter?p:v,r.state={status:a},r.nextCallback=null,r}(0,l.Z)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===p?{status:v}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==g&&n!==E&&(t=g):n!==g&&n!==E||(t=h)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),t===g?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&this.state.status===v&&this.setState({status:p})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,a=this.props.nodeRef?[r]:[s.findDOMNode(this),r],i=a[0],o=a[1],u=this.getTimeouts(),c=r?u.appear:u.enter;!e&&!n||d?this.safeSetState({status:E},(function(){t.props.onEntered(i)})):(this.props.onEnter(i,o),this.safeSetState({status:g},(function(){t.props.onEntering(i,o),t.onTransitionEnd(c,(function(){t.safeSetState({status:E},(function(){t.props.onEntered(i,o)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:s.findDOMNode(this);t&&!d?(this.props.onExit(r),this.safeSetState({status:h},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:v},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:v},(function(){e.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:s.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=a[0],o=a[1];this.props.addEndListener(i,o)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===p)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,c(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return i.createElement(m.Provider,{value:null},"function"==typeof n?n(e,r):i.cloneElement(i.Children.only(n),r))},t}(i.Component);function b(){}x.contextType=m,x.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:b,onEntering:b,onEntered:b,onExit:b,onExiting:b,onExited:b},x.UNMOUNTED=p,x.EXITED=v,x.ENTERING=g,x.ENTERED=E,x.EXITING=h;var y=x,w=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return r=t,void((n=e).classList?n.classList.remove(r):"string"==typeof n.className?n.className=f(n.className,r):n.setAttribute("class",f(n.className&&n.className.baseVal||"",r)));var n,r}))},N=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(e,n){var r=t.resolveArguments(e,n),a=r[0],i=r[1];t.removeClasses(a,"exit"),t.addClass(a,i?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var r=t.resolveArguments(e,n),a=r[0],i=r[1]?"appear":"enter";t.addClass(a,i,"active"),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var r=t.resolveArguments(e,n),a=r[0],i=r[1]?"appear":"enter";t.removeClasses(a,i),t.addClass(a,i,"done"),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"appear"),t.removeClasses(n,"enter"),t.addClass(n,"exit","base"),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var n=t.resolveArguments(e)[0];t.addClass(n,"exit","active"),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"exit"),t.addClass(n,"exit","done"),t.props.onExited&&t.props.onExited(e)},t.resolveArguments=function(e,n){return t.props.nodeRef?[t.props.nodeRef.current,e]:[e,n]},t.getClassNames=function(e){var n=t.props.classNames,r="string"==typeof n,a=r?""+(r&&n?n+"-":"")+e:n[e];return{baseClassName:a,activeClassName:r?a+"-active":n[e+"Active"],doneClassName:r?a+"-done":n[e+"Done"]}},t}(0,l.Z)(t,e);var n=t.prototype;return n.addClass=function(e,t,n){var r=this.getClassNames(t)[n+"ClassName"],a=this.getClassNames("enter").doneClassName;"appear"===t&&"done"===n&&a&&(r+=" "+a),"active"===n&&e&&e.scrollTop,r&&(this.appliedClasses[t][n]=r,function(e,t){e&&t&&t.split(" ").forEach((function(t){return r=t,void((n=e).classList?n.classList.add(r):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(n,r)||("string"==typeof n.className?n.className=n.className+" "+r:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+r)));var n,r}))}(e,r))},n.removeClasses=function(e,t){var n=this.appliedClasses[t],r=n.base,a=n.active,i=n.done;this.appliedClasses[t]={},r&&w(e,r),a&&w(e,a),i&&w(e,i)},n.render=function(){var e=this.props,t=(e.classNames,c(e,["classNames"]));return i.createElement(y,u({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(i.Component);N.defaultProps={classNames:""};var C=N,k=function(e){var t=e.show,n=e.dismissOnBackdropClick,r=void 0!==n&&n,a=e.children,o=e.onClickBackdrop,u=void 0===o?null:o,c="undefined"!=typeof window&&document.querySelector("#modal-root");return c?(0,s.createPortal)(i.createElement(i.Fragment,null,i.createElement(C,{appear:!0,in:t,timeout:300,unmountOnExit:!0,classNames:"overlay"},i.createElement("div",{role:"presentation",className:"absolute top-0 left-0 h-full w-full z-[10]",onClick:function(){r&&u&&u()}})),i.createElement(C,{appear:!0,in:t,timeout:300,unmountOnExit:!0,classNames:"dialog-content"},i.createElement("div",{className:"z-[11] w-[327px] p-6 rounded-lg bg-white absolute top-1/2 left-1/2"},a))),c):null},S=function(e){var t=e.variant,n=void 0===t?"Body":t,r=e.color,o=void 0===r?"white":r,s=e.className,u=void 0===s?"":s,c=e.children,l=["font-sans"].concat(u);switch(o){case"white":l=l.concat("text-white");break;case"dark":l=l.concat("text-dark");break;case"grey-light":l=l.concat("text-grey-light");break;case"grey-dark":l=l.concat("text-grey-dark")}return"H1"===n?i.createElement("h1",{className:a(l,"text-H1")},c):"H2"===n?i.createElement("h2",{className:a(l,"text-H2")},c):"H3"===n?i.createElement("h2",{className:a(l,"text-H3")},c):"4X4"===n?i.createElement("p",{className:a(l,"text-4X4-mobile tablet:text-4X4")},c):"6X6"===n?i.createElement("p",{className:a(l,"text-6X6-mobile tablet:text-6X6")},c):i.createElement("p",{className:a(l,"text-Body")},c)};var T=n(181);function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,i=[],o=!0,s=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);o=!0);}catch(u){s=!0,a=u}finally{try{o||null==n.return||n.return()}finally{if(s)throw a}}return i}}(e,t)||(0,T.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(e){var t,n=new Set,r=function(e,r){var a="function"==typeof e?e(t):e;if(a!==t){var i=t;t=r?a:Object.assign({},t,a),n.forEach((function(e){return e(t,i)}))}},a=function(){return t},i={setState:r,getState:a,subscribe:function(e,r,i){return r||i?function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Object.is;console.warn("[DEPRECATED] Please use `subscribeWithSelector` middleware");var o=r(t);function s(){var n=r(t);if(!i(o,n)){var a=o;e(o=n,a)}}return n.add(s),function(){return n.delete(s)}}(e,r,i):(n.add(e),function(){return n.delete(e)})},destroy:function(){return n.clear()}};return t=e(r,a,i),i}var j="undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent)?i.useEffect:i.useLayoutEffect;var M=n(982),A=function(e){return{grid:null,gridSize:4,boardType:"numbers",currentlyViewing:[],setRevealCell:function(t){var n=t.row,r=t.column;return e((function(e){var t=e.currentlyViewing,a=e.grid;if(null===a)return e;var i=(0,M.Z)(a),o=i[n][r];if(!o)return e;if(!o.revealed&&!o.viewing){if(o.viewing=!0,0===t.length)return Object.assign({},e,{currentlyViewing:[{row:n,column:r}],grid:i});if(1===t.length)return Object.assign({},e,{currentlyViewing:[].concat((0,M.Z)(t),[{row:n,column:r}]),grid:i})}}))},initializeBoard:function(){return e((function(e){for(var t=e.gridSize,n=Math.pow(t,2)/2,r=[],a=1;a<=n;a+=1)r.push(a),r.push(a);r=function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),r=[e[n],e[t]];e[t]=r[0],e[n]=r[1]}return e}(r);for(var i=[],o=0;o<t;o+=1)i[o]=[];for(var s=r.length-1,u=0;u<t;u+=1)for(var c=0;c<t;c+=1)i[u][c]={revealed:!1,viewing:!1,value:r[s]},s--;return Object.assign({},e,{grid:i})}))},detectMatch:function(){return e((function(e){var t=e.grid,n=e.currentlyViewing;if(null===t)return e;var r=(0,M.Z)(t),a=n[0],i=a.row,o=a.column,s=n[1],u=s.row,c=s.column;return r[i][o].viewing=!1,r[i][o].revealed=!0,r[u][c].viewing=!1,r[u][c].revealed=!0,Object.assign({},e,{grid:r,currentlyViewing:[]})}))},hideViewing:function(){return e((function(e){var t=e.currentlyViewing,n=e.grid;if(null===n)return e;var r=(0,M.Z)(n),a=t[0],i=t[1];return r[a.row][a.column].viewing=!1,r[i.row][i.column].viewing=!1,Object.assign({},e,{currentlyViewing:[],grid:r})}))},setBoardType:function(t){return e((function(e){return Object.assign({},e,{boardType:t})}))},setGridSize:function(t){return e((function(e){return Object.assign({},e,{gridSize:t})}))}}},G=function(e){var t="function"==typeof e?R(e):e,n=function(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.getState,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Object.is,a=(0,i.useReducer)((function(e){return e+1}),0),o=O(a,2),s=o[1],u=t.getState(),c=(0,i.useRef)(u),l=(0,i.useRef)(n),f=(0,i.useRef)(r),d=(0,i.useRef)(!1),m=(0,i.useRef)();void 0===m.current&&(m.current=n(u));var p=!1;(c.current!==u||l.current!==n||f.current!==r||d.current)&&(e=n(u),p=!r(m.current,e)),j((function(){p&&(m.current=e),c.current=u,l.current=n,f.current=r,d.current=!1}));var v=(0,i.useRef)(u);j((function(){var e=function(){try{var e=t.getState(),n=l.current(e);f.current(m.current,n)||(c.current=e,m.current=n,s())}catch(r){d.current=!0,s()}},n=t.subscribe(e);return t.getState()!==v.current&&e(),n}),[]);var g=p?e:m.current;return(0,i.useDebugValue)(g),g};return Object.assign(n,t),n[Symbol.iterator]=function(){console.warn("[useStore, api] = create() is deprecated and will be removed in v4");var e=[n,t];return{next:function(){var t=e.length<=0;return{value:e.shift(),done:t}}}},n}((function(e){return Object.assign({},A(e),function(e){return{moves:0,resetMoves:function(){return e((function(){return{moves:0}}))},tickMoves:function(){return e((function(e){return{moves:e.moves+1}}))}}}(e),function(e){return{elapsedTime:0,tickElapsedTime:function(){return e((function(e){return{elapsedTime:e.elapsedTime+1}}))},resetElapsedTime:function(){return e((function(){return{elapsedTime:0}}))}}}(e),function(e){return{gameStarted:!1,gameEnded:!1,setGameStarted:function(t){return e((function(){return{gameStarted:t}}))},setGameEnded:function(t){return e((function(){return{gameEnded:t}}))}}}(e))})),z=function(){var e=G((function(e){return e.gridSize})),t=G((function(e){return e.boardType})),n=G((function(e){return e.setBoardType})),r=G((function(e){return e.setGridSize})),a=G((function(e){return e.setGameStarted}));return i.createElement("div",{role:"presentation",className:"absolute top-0 left-0 h-full w-full bg-dark"},i.createElement(S,{className:"absolute left-1/2 transform -translate-x-1/2 top-[20%]",variant:"H2",color:"white"},"memory"),i.createElement("div",{className:"z-[11] w-[327px] p-6 rounded-lg bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"},i.createElement("div",null,i.createElement(S,{variant:"Body",color:"grey-dark"},"Select Theme"),i.createElement("div",{className:"flex mt-3 space-x-2"},i.createElement(o,{fullWidth:!0,variant:"menu",isActive:"numbers"===t,onClick:function(){return n("numbers")}},"Numbers"),i.createElement(o,{fullWidth:!0,variant:"menu",isActive:"icons"===t,onClick:function(){return n("icons")}},"Icons"))),i.createElement("div",{className:"mt-6"},i.createElement(S,{variant:"Body",color:"grey-dark"},"Select Grid Size"),i.createElement("div",{className:"flex mt-3 space-x-2"},i.createElement(o,{fullWidth:!0,variant:"menu",isActive:4===e,onClick:function(){return r(4)}},"4x4"),i.createElement(o,{fullWidth:!0,variant:"menu",isActive:5===e,onClick:function(){return r(5)}},"5x5"),i.createElement(o,{fullWidth:!0,variant:"menu",isActive:6===e,onClick:function(){return r(6)}},"6x6"))),i.createElement(o,{className:"mt-8",fullWidth:!0,variant:"primary",onClick:function(){return a(!0)}},"Start Game")))},W={sm:640,md:768,lg:1024,xl:1280},B=function(e){var t=e.value,n=e.revealed,r=void 0!==n&&n,o=e.viewing,s=void 0!==o&&o,u=e.onClick,c=["flex-1 flex justify-center items-center rounded-full w-full h-full transition-colors duration-300 ease-in-out"];return r||s?s&&!r?c.push("bg-orange"):r&&!s&&c.push("bg-blue-light"):c.push("bg-blue hover:bg-blue-hover"),i.createElement("button",{className:a(c),onClick:u},(s||r)&&i.createElement(S,{variant:"4X4",color:"white"},t))},V=function(){var e=(0,i.useState)(0),t=e[0],n=e[1],r=G((function(e){return e.grid})),o=G((function(e){return e.gridSize})),s=G((function(e){return e.currentlyViewing})),u=G((function(e){return e.gameStarted})),c=G((function(e){return e.gameEnded})),l=G((function(e){return e.setRevealCell})),f=G((function(e){return e.hideViewing})),d=G((function(e){return e.detectMatch})),m=G((function(e){return e.initializeBoard})),p=G((function(e){return e.setGameEnded})),v=G((function(e){return e.tickMoves})),g=(0,i.useRef)(null),E=(0,i.useMemo)((function(){return o*o}),[o]);(0,i.useEffect)((function(){m()}),[u,m]),(0,i.useEffect)((function(){n(0)}),[c]),(0,i.useEffect)((function(){E===t&&p(!0)}),[t,E,p]);var h=(0,i.useCallback)((function(e){if(null!==r){var t=e.row,a=e.column,i=Object.assign({},r[t][a]);if(i&&!i.viewing&&!i.revealed)if(0===s.length)l(e);else if(1===s.length){v();var o=s[0],u=r[o.row][o.column];i.value===u.value?(l(e),d(),n((function(e){return e+2}))):(l(e),g.current=setTimeout(f,1e3))}else 2===s.length&&(g.current&&clearTimeout(g.current),f(),l(e))}}),[r,s,l,v,d,f]);if(null===r)return null;var x="grid gap-2 h-[327px] w-[327px] sm:h-[550px] sm:w-[550px] m-auto".split(" ");switch(o){case 4:x=x.concat("grid-cols-4 grid-rows-4");break;case 5:x=x.concat("grid-cols-5 grid-rows-5");break;case 6:x=x.concat("grid-cols-6 grid-rows-6")}return i.createElement("div",{className:a(x)},r.map((function(e,t){return e.map((function(e,n){return i.createElement(B,Object.assign({key:t+"_"+n},e,{onClick:function(){return h({row:t,column:n})}}))}))})))},D=function(){var e=G((function(e){return e.moves}));return i.createElement("div",{className:"bg-grey flex flex-col items-center flex-1 p-2 rounded-[5px]"},i.createElement(S,{color:"grey-dark"},"Moves"),i.createElement(S,{variant:"H3",className:"mt-2",color:"grey-light"},e))},H=function(e){var t=e%60;return Math.floor(e/60).toString().padStart(2,"0")+":"+t.toString().padStart(2,"0")},L=function(){var e=G((function(e){return e.elapsedTime})),t=G((function(e){return e.gameStarted})),n=G((function(e){return e.gameEnded})),r=(0,i.useRef)(null),a=G((0,i.useCallback)((function(e){return e.tickElapsedTime}),[]));return(0,i.useEffect)((function(){t&&!n?r.current=setInterval((function(){a()}),1e3):n&&r.current&&clearInterval(r.current)}),[t,n,a]),i.createElement("div",{className:"bg-grey flex flex-col items-center flex-1 p-2 rounded-[5px]"},i.createElement(S,{color:"grey-dark"},"Time"),i.createElement(S,{variant:"H3",className:"mt-2",color:"grey-light"},H(e)))},I=function(){return i.createElement("div",{className:"flex justify-between space-x-4"},i.createElement(L,null),i.createElement(D,null))},X=function(e){var t=e.onClickMenu,n=G((function(e){return e.setGameStarted})),r=G((function(e){return e.setGameEnded})),a=G((function(e){return e.resetElapsedTime})),s=G((function(e){return e.resetMoves})),u=G((function(e){return e.initializeBoard}));return i.createElement("div",{className:"flex justify-between items-center"},i.createElement(S,{className:"flex-1",variant:"H2",color:"dark"},"memory"),i.createElement("div",{className:"flex-1 hidden sm:flex space-x-4"},i.createElement(o,{fullWidth:!0,variant:"primary",onClick:function(){s(),a(),u(),r(!1)}},"Restart"),i.createElement(o,{fullWidth:!0,variant:"secondary",onClick:function(){s(),a(),r(!1),n(!1)}},"New Game")),i.createElement(o,{className:"sm:hidden",variant:"primary",onClick:t},"Menu"))},P=function(e){var t=e.show,n=e.onClose,r=G((function(e){return e.setGameStarted})),a=G((function(e){return e.setGameEnded})),s=G((function(e){return e.resetElapsedTime})),u=G((function(e){return e.resetMoves})),c=G((function(e){return e.initializeBoard}));return i.createElement(k,{dismissOnBackdropClick:!0,show:t,onClickBackdrop:n},i.createElement("div",{className:"z-[11] w-[327px] p-6 rounded-lg bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"},i.createElement("div",{className:"space-y-4"},i.createElement(o,{fullWidth:!0,variant:"primary",onClick:function(){u(),s(),c(),a(!1)}},"Restart"),i.createElement(o,{fullWidth:!0,variant:"secondary",onClick:function(){u(),s(),a(!1),r(!1)}},"Setup New Game"),i.createElement(o,{fullWidth:!0,variant:"secondary",onClick:n},"Resume Game"))))},Z=function(){var e=(0,i.useState)(!1),t=e[0],n=e[1],r=function(e){var t=(0,i.useState)(!1),n=t[0],r=t[1],a=function(){window.innerWidth<=W[e]?r(!0):r(!1)};return(0,i.useEffect)((function(){return window.addEventListener("resize",a),function(){return window.removeEventListener("resize",a)}}),[]),n}("sm");return(0,i.useEffect)((function(){!r&&t&&n(!1)}),[r]),i.createElement(i.Fragment,null,i.createElement(P,{show:t,onClose:function(){return n(!1)}}),i.createElement("div",{className:"p-6 h-full flex flex-col justify-between"},i.createElement(X,{onClickMenu:function(){return n(!0)}}),i.createElement(V,null),i.createElement(I,null)))},F=(0,i.memo)(Z),U=function(e){var t=e.show,n=G((function(e){return e.elapsedTime})),r=G((function(e){return e.moves})),a=G((function(e){return e.setGameStarted})),s=G((function(e){return e.setGameEnded})),u=G((function(e){return e.resetElapsedTime})),c=G((function(e){return e.resetMoves})),l=G((function(e){return e.initializeBoard}));return i.createElement(k,{show:t},i.createElement("div",{className:"z-[11] w-[327px] p-6 rounded-lg bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"},i.createElement(S,{variant:"H2",color:"dark",className:"text-center"},"You did it!"),i.createElement(S,{variant:"Body",color:"grey-light",className:"text-center"},"Game over! Here's how got on..."),i.createElement("div",{className:"mt-8 space-y-2"},i.createElement("div",{className:"bg-grey flex items-center flex-1 py-2 px-4 justify-between rounded-[5px]"},i.createElement(S,{color:"grey-light"},"Elapsed Time"),i.createElement(S,{variant:"H3",color:"grey-dark"},H(n))),i.createElement("div",{className:"bg-grey flex items-center flex-1 py-2 px-4 justify-between rounded-[5px]"},i.createElement(S,{color:"grey-light"},"Moves"),i.createElement(S,{variant:"H3",color:"grey-dark"},r))),i.createElement("div",{className:"mt-6 space-y-3"},i.createElement(o,{fullWidth:!0,variant:"primary",onClick:function(){c(),u(),l(),s(!1)}},"Restart"),i.createElement(o,{fullWidth:!0,variant:"secondary",onClick:function(){c(),u(),s(!1),a(!1)}},"Setup New Game"))))},$=function(){var e=G((function(e){return e.gameStarted})),t=G((function(e){return e.gameEnded}));return i.createElement(i.Fragment,null,i.createElement("div",{id:"modal-root"}),!e&&i.createElement(z,null),i.createElement(U,{show:t}),e&&i.createElement(F,null))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-dc94a7e004bc287b03c9.js.map