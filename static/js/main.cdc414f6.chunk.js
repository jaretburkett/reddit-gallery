(this["webpackJsonpreddit-imgs"]=this["webpackJsonpreddit-imgs"]||[]).push([[0],{123:function(t,e,n){"use strict";n.r(e);var i=n(5),a=n(1),c=n.n(a),o=n(11),r=n.n(o),s=(n(98),n(73)),l=n.n(s),d=n(57),h=n(43),j=n(36),u=n(18),b=n(165),g=n(180),p=n(173),O=n(174),f=n(170),m=n(175),x=n(172),w=n(181),v=n(85),y=n(81),k=n.n(y),N=n(80),C=n.n(N),I=n(78),z=n.n(I),L=n(79),T=n.n(L),F=n(42),S=n(56),A=n.n(S),P=n(74),R=n(178),B=n(179),U=n(171),M=n(47),_=n.n(M),E=n(12),J=n(75),q=n.n(J),G={kind:"string",data:{modhash:"",dist:0,children:[],after:null,before:null}},V=Object(b.a)((function(t){var e,n;return Object(g.a)({search:(e={position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(E.c)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(E.c)(t.palette.common.white,.25)},marginRight:t.spacing(2),marginLeft:0,width:"100%"},Object(u.a)(e,t.breakpoints.up("sm"),{marginLeft:t.spacing(3),width:"auto"}),Object(u.a)(e,"flexGrow",1),Object(u.a)(e,"maxWidth",400),e),searchIcon:{padding:t.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:(n={padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),"px)"),transition:t.transitions.create("width"),width:"100%"},Object(u.a)(n,t.breakpoints.up("md"),{width:"20ch"}),Object(u.a)(n,"color","#fff"),n),textField:{width:"100%"}})})),D=function(){var t=Object(P.a)(A.a.mark((function t(e){var n,i,a,c=arguments;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=c.length>1&&void 0!==c[1]?c[1]:"sr",i=c.length>2&&void 0!==c[2]?c[2]:"top",a=!(c.length>3&&void 0!==c[3])||c[3],t.abrupt("return",new Promise((function(t){var c="https://www.reddit.com/search.json"+"?q=".concat(encodeURIComponent(e))+"&type=".concat(n)+"&show=all"+"&sort=".concat(i)+"&include_over_18=".concat(a?"on":"off");console.log(c),_.a.get(c).then((function(e){console.log(e.data),t(e.data)})).catch((function(e){console.log(e),t(G)}))})));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),W=function(t){var e=V(),n=Object(a.useState)(G),o=Object(j.a)(n,2),r=o[0],s=o[1],l=r&&r.data&&r.data.children?r.data.children:[],d=c.a.useState(!1),h=Object(j.a)(d,2),u=h[0],b=h[1],g=u&&0===l.length;return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:e.search,children:[Object(i.jsx)("div",{className:e.searchIcon,children:Object(i.jsx)(q.a,{})}),Object(i.jsx)(B.a,{id:"search-bar",freeSolo:!0,open:u,onChange:function(e,n){console.log("search change",n),n&&t.store.navigateTo(n)},classes:{root:e.inputRoot},onOpen:function(){b(!0)},onClose:function(){b(!1)},options:l.map((function(t){return t.data.url})),style:{width:"100%"},renderInput:function(t){return Object(i.jsx)(R.a,Object(F.a)(Object(F.a)({},t),{},{InputProps:Object(F.a)(Object(F.a)({},t.InputProps),{},{endAdornment:Object(i.jsxs)(c.a.Fragment,{children:[g?Object(i.jsx)(U.a,{color:"inherit",size:20}):null,t.InputProps.endAdornment]}),classes:{root:e.inputInput}}),classes:{root:e.textField},onChange:function(t){D(t.target.value).then((function(t){s(t)})),console.log(t.target.value)}}))}})]})})},H=Object(b.a)((function(t){return Object(g.a)({grow:{flexGrow:1},menuButton:{marginRight:t.spacing(2)},title:Object(u.a)({display:"none"},t.breakpoints.up("sm"),{display:"block"}),sectionDesktop:Object(u.a)({display:"none"},t.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(u.a)({display:"flex"},t.breakpoints.up("md"),{display:"none"})})})),K=function(t){var e=H(),n=c.a.useState(null),a=Object(j.a)(n,2),o=a[0],r=a[1],s=c.a.useState(null),l=Object(j.a)(s,2),d=l[0],h=l[1],u=Boolean(o),b=Boolean(d),g=function(){h(null)},y=function(){r(null),g()},N=Object(i.jsxs)(v.a,{anchorEl:o,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:u,onClose:y,children:[Object(i.jsx)(w.a,{onClick:y,children:"Profile"}),Object(i.jsx)(w.a,{onClick:y,children:"My account"})]}),I=Object(i.jsxs)(v.a,{anchorEl:d,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:b,onClose:g,children:[Object(i.jsxs)(w.a,{children:[Object(i.jsx)(f.a,{"aria-label":"show 4 new mails",color:"inherit",children:Object(i.jsx)(x.a,{badgeContent:4,color:"secondary",children:Object(i.jsx)(z.a,{})})}),Object(i.jsx)("p",{children:"Messages"})]}),Object(i.jsxs)(w.a,{children:[Object(i.jsx)(f.a,{"aria-label":"show 11 new notifications",color:"inherit",children:Object(i.jsx)(x.a,{badgeContent:11,color:"secondary",children:Object(i.jsx)(T.a,{})})}),Object(i.jsx)("p",{children:"Notifications"})]}),Object(i.jsxs)(w.a,{onClick:function(t){r(t.currentTarget)},children:[Object(i.jsx)(f.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit",children:Object(i.jsx)(C.a,{})}),Object(i.jsx)("p",{children:"Profile"})]})]});return Object(i.jsxs)("div",{className:e.grow,children:[Object(i.jsx)(p.a,{position:"fixed",children:Object(i.jsxs)(O.a,{children:[Object(i.jsx)(f.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"open drawer",children:Object(i.jsx)(k.a,{})}),Object(i.jsx)(m.a,{className:e.title,variant:"h6",noWrap:!0,children:"React Gallery"}),Object(i.jsx)("div",{className:e.grow}),Object(i.jsx)(W,{store:t.store})]})}),I,N]})},Q=n(82),X=n(83),Y=n(21),Z=function(t){return t.replace(/&amp;/g,"&")},$=new function t(){var e=this;Object(Q.a)(this,t),this.history=Object(X.a)(),this.isLoading=Object(Y.a)(!1),this.size=Object(Y.a)(400),this.loaderVisible=!1,this.redditSorting=Object(Y.a)("new"),this.redditType=Object(Y.a)(null),this.redditAsset=Object(Y.a)(null),this.last=null,this.imageObj=Object(Y.a)([]),this.shownImgUrls=[],this.navigateTo=function(t){e.history.push(t,{})},this.fetchNext=function(){if(!e.isLoading.get()&&e.redditType.get()&&e.redditAsset.get()){var t;e.isLoading.set(!0),t="r"===e.redditType.get()?"https://www.reddit.com/".concat(e.redditType.get(),"/").concat(e.redditAsset.get(),"/").concat(e.redditSorting.get(),".json?limit=50").concat(e.last?"&after=".concat(e.last):""):"https://www.reddit.com/".concat(e.redditType.get(),"/").concat(e.redditAsset.get(),"/.json?limit=50").concat(e.last?"&after=".concat(e.last):"");var n=(c=e.imageObj.get(),JSON.parse(JSON.stringify(c))),i=0;_.a.get(t).then((function(t){if(t.data){e.last=t.data.data.after;for(var a=t.data.data.children,c=0;c<a.length;c++){var o=a[c].data;if(o.preview&&o.preview.images&&o.preview.images.length>0)for(var r=o.author,s=o.preview.images,l=o.title,d=0;d<s.length;d++){var h=Z(s[d].source.url);if(!e.shownImgUrls.includes(h)){var j={author:r,image:h,title:l,post:"https://www.reddit.com".concat(o.permalink)};n.push(j),e.shownImgUrls.push(h)}}i++}}e.imageObj.set(n),e.isLoading.set(!1),window.requestAnimationFrame((function(){e.loaderVisible&&i>0&&e.fetchNext()}))})).catch((function(t){e.isLoading.set(!1),console.log(t)}))}else(a=500,new Promise((function(t){window.setTimeout((function(){t()}),a)}))).then((function(){e.fetchNext()}));var a,c},this.updateLocation=function(t){console.log("location updated",t);var n=t.split("/reddit-gallery").join("").split("/").filter((function(t){return""!==t}));2===n.length?(e.redditType.set(n[0]),e.redditAsset.set(n[1])):(e.redditType.set(null),e.redditAsset.set(null)),e.imageObj.set([]),new Promise((function(t){window.requestAnimationFrame((function(){t()}))})).then((function(){e.fetchNext()}))},this.updateLocation(window.location.pathname),this.history.listen((function(t){e.updateLocation(t.location.pathname)}))};window.store=$;var tt=$;console.log("publicUrl","/reddit-gallery");var et=function(){var t=Object(Y.b)(tt.imageObj),e=Object(Y.b)(tt.size),n=t.get().map((function(t,n){return Object(i.jsxs)("div",{className:"img-cont",style:{height:e.get(),width:e.get()},children:[Object(i.jsx)("img",{src:t.image}),Object(i.jsxs)("div",{className:"info-bar",children:[Object(i.jsx)("a",{href:"https://www.reddit.com/user/".concat(t.author,"/"),target:"_blank",title:t.author,children:Object(i.jsx)(d.b,{})}),Object(i.jsx)("a",{href:t.post,target:"_blank",title:t.title,children:Object(i.jsx)(d.a,{})}),Object(i.jsx)("a",{href:"".concat(window.location.origin,"/user/").concat(t.author),target:"_blank",title:"User images",children:Object(i.jsx)(h.a,{})})]})]},n)}));return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(K,{store:tt}),Object(i.jsxs)("div",{className:"imgs",style:{marginTop:64},children:[n,Object(i.jsx)(l.a,{onChange:function(t){tt.loaderVisible=t,t&&(console.log("fetching next"),tt.fetchNext())},children:Object(i.jsx)("div",{style:{height:200,fontSize:40,color:"#fff"},children:tt.isLoading?Object(i.jsx)(h.b,{className:"icon-spin"}):null})})]}),Object(i.jsxs)("div",{className:"zoom-box",children:[Object(i.jsx)("div",{className:"zoom-btn",onClick:function(){var t=1.1*e.get();t>1e3&&(t=1e3),tt.size.set(t)},children:Object(i.jsx)(h.c,{})}),Object(i.jsx)("div",{className:"zoom-btn",onClick:function(){var t=.9*tt.size.get();t<200&&(t=200),tt.size.set(t)},children:Object(i.jsx)(h.d,{})})]})]})},nt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,182)).then((function(e){var n=e.getCLS,i=e.getFID,a=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),i(t),a(t),c(t),o(t)}))},it=n(84),at=n(176),ct=n(177),ot=Object(it.a)({palette:{primary:{main:"#bf360c"},secondary:{main:"#d84315"}}});r.a.render(Object(i.jsxs)(at.a,{theme:ot,children:[Object(i.jsx)(ct.a,{}),Object(i.jsx)(et,{})]}),document.getElementById("root")),nt()},98:function(t,e,n){}},[[123,1,2]]]);
//# sourceMappingURL=main.cdc414f6.chunk.js.map