(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{367:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(368),i=a.n(o);t.a=function(e){var t=e.children,a=e.loading;return void 0===a||a?r.a.createElement("div",{className:i.a.loadingContainer},r.a.createElement("i",{className:"fa fa-spinner fa-pulse"})):r.a.createElement(n.Fragment,null,t)}},368:function(e,t,a){e.exports={loadingContainer:"style_loadingContainer__3Pquw"}},372:function(e,t,a){},374:function(e,t,a){e.exports={container:"style_container__Zb8RY",header:"style_header__3uDEC",navItem:"style_navItem__1wdaT",active:"style_active__1gcS-",articlesContainer:"style_articlesContainer__2mYTI"}},574:function(e,t,a){"use strict";a.r(t);var n=a(24),r=a(360),o=a(361),i=a(363),c=a(362),s=a(364),l=a(0),u=a.n(l),p=a(87),f=a(365),m=a.n(f),y=a(366),d=a(367),v=a(1),h=a.n(v),b=a(371),g=a(5),E=a.n(g),O=a(157),C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};function j(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var _=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},N=function(e){function t(){var a,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return a=n=j(this,e.call.apply(e,[this].concat(o))),n.handleClick=function(e){if(n.props.onClick&&n.props.onClick(e),!e.defaultPrevented&&0===e.button&&!n.props.target&&!_(e)){e.preventDefault();var t=n.context.router.history,a=n.props,r=a.replace,o=a.to;r?t.replace(o):t.push(o)}},j(n,a)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),a=e.innerRef,n=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["replace","to","innerRef"]);E()(this.context.router,"You should not use <Link> outside a <Router>"),E()(void 0!==t,'You must specify the "to" property');var r=this.context.router.history,o="string"===typeof t?Object(O.b)(t,null,null,r.location):t,i=r.createHref(o);return u.a.createElement("a",C({},n,{onClick:this.handleClick,href:i,ref:a}))},t}(u.a.Component);N.propTypes={onClick:h.a.func,target:h.a.string,replace:h.a.bool,to:h.a.oneOfType([h.a.string,h.a.object]).isRequired,innerRef:h.a.oneOfType([h.a.string,h.a.func])},N.defaultProps={replace:!1},N.contextTypes={router:h.a.shape({history:h.a.shape({push:h.a.func.isRequired,replace:h.a.func.isRequired,createHref:h.a.func.isRequired}).isRequired}).isRequired};var w=N,k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},x="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var R=function(e){var t=e.to,a=e.exact,n=e.strict,r=e.location,o=e.activeClassName,i=e.className,c=e.activeStyle,s=e.style,l=e.isActive,p=e["aria-current"],f=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["to","exact","strict","location","activeClassName","className","activeStyle","style","isActive","aria-current"]),m="object"===("undefined"===typeof t?"undefined":x(t))?t.pathname:t,y=m&&m.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1");return u.a.createElement(b.a,{path:y,exact:a,strict:n,location:r,children:function(e){var a=e.location,n=e.match,r=!!(l?l(n,a):n);return u.a.createElement(w,k({to:t,className:r?[i,o].filter(function(e){return e}).join(" "):i,style:r?k({},s,c):s,"aria-current":r&&p||null},f))}})};R.propTypes={to:w.propTypes.to,exact:h.a.bool,strict:h.a.bool,location:h.a.object,activeClassName:h.a.string,className:h.a.string,activeStyle:h.a.object,style:h.a.object,isActive:h.a.func,"aria-current":h.a.oneOf(["page","step","location","date","time","true"])},R.defaultProps={activeClassName:"active","aria-current":"page"};var S=R,T=a(370),I=a.n(T),P=a(372),Y=a.n(P),q=function(e){var t=e.article;return u.a.createElement("article",{className:Y.a.article,key:t.id},u.a.createElement(S,{to:"/article/".concat(t.number)},u.a.createElement("h3",{className:Y.a.articleTitle},t.title)),u.a.createElement("p",{className:Y.a.articleInfo},u.a.createElement("span",null,u.a.createElement("i",{className:"fa fa-calendar","aria-hidden":"true"}),I()(t.createdAt).format("YYYY-MM-DD")),u.a.createElement("span",null,u.a.createElement("i",{className:"fa fa-th-list","aria-hidden":"true"}),t.milestone&&t.milestone.title&&u.a.createElement("span",{className:Y.a.articleCategory},t.milestone.title)),u.a.createElement("span",null,u.a.createElement("i",{className:"fa fa-tags","aria-hidden":"true"}),t.labels.nodes.map(function(e){return u.a.createElement("span",{key:e.id,className:Y.a.articleLabel,style:{background:"#".concat(e.color)}},e.name)}))))},A=function(e){var t=e.data;return u.a.createElement("div",null,t.map(function(e){return u.a.createElement(q,{article:e})}))},L=a(374),M=a.n(L),D={title:"\u6700\u65b0",id:"default_milestone"},K={nodes:[],pageInfo:{},totalCount:0},H=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).state={activeMilestone:D},a.handleCategoryClick=function(e){var t=a.props.dispatch;a.setState({activeMilestone:e});var n=e.id===D.id?"*":e.title;t.repository.searchIssues({milestone:n})},a}return Object(s.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch.repository.initIndex()}},{key:"render",value:function(){var e=this,t=this.state.activeMilestone,a=this.props,r=a.loading,o=a.issuesList,i=a.milestonesList;return u.a.createElement(d.a,{loading:r},u.a.createElement("div",{className:M.a.container},u.a.createElement("header",{className:M.a.header},u.a.createElement("nav",null,i.map(function(a){return u.a.createElement("span",{onClick:function(){return e.handleCategoryClick(a)},key:a.id,className:m()(M.a.navItem,Object(n.a)({},M.a.active,a.title===t.title))},a.title)}))),u.a.createElement("main",{className:M.a.articlesContainer},u.a.createElement(A,{data:o}))))}}]),t}(l.Component),J=Object(y.a)([function(e){return e.repository.result},function(e){return e.repository.loading},function(e){return e.entities.repositories},function(e){return e.entities.issues},function(e){return e.entities.milestones},function(e){return e.entities.labels}],function(e,t,a,n,r,o){var i=a[e],c=Object.keys(r).map(function(e){return r[e]});c.length&&c.unshift(D);var s=[],l=K;return i&&i.issues&&i.issues.nodes&&(s=(l=i.issues).nodes.map(function(e){var t=n[e];return t.milestone=r[t.milestone],t.labels&&t.labels.nodes&&(t.labels.nodes=t.labels.nodes.map(function(e){return o[e]})),t})),{loading:t,issuesList:s,milestonesList:c,pageInfo:l.pageInfo,totalCount:l.totalCount}});t.default=Object(p.b)(J)(H)}}]);
//# sourceMappingURL=2.b41b561b.chunk.js.map