(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,function(e,t,n){"use strict";n.d(t,"o",function(){return r}),n.d(t,"a",function(){return a}),n.d(t,"u",function(){return c}),n.d(t,"w",function(){return u}),n.d(t,"j",function(){return o}),n.d(t,"t",function(){return i}),n.d(t,"q",function(){return l}),n.d(t,"r",function(){return d}),n.d(t,"s",function(){return s}),n.d(t,"p",function(){return f}),n.d(t,"k",function(){return m}),n.d(t,"m",function(){return p}),n.d(t,"n",function(){return b}),n.d(t,"l",function(){return g}),n.d(t,"b",function(){return _}),n.d(t,"i",function(){return E}),n.d(t,"g",function(){return h}),n.d(t,"h",function(){return v}),n.d(t,"d",function(){return y}),n.d(t,"e",function(){return O}),n.d(t,"f",function(){return k}),n.d(t,"c",function(){return j}),n.d(t,"v",function(){return x});var r="INIT_INGREDIENTS",a="ADD_INGREDIENT",c="REMOVE_INGREDIENT",u="SET_INGREDIENTS",o="FETCH_INGREDIENTS_FAILED",i="PURCHASE_INIT",l="PURCHASE_BURGER_INIT",d="PURCHASE_BURGER_START",s="PURCHASE_BURGER_SUCCESS",f="PURCHASE_BURGER_FAIL",m="FETCH_ORDERS",p="FETCH_ORDERS_START",b="FETCH_ORDERS_SUCCESS",g="FETCH_ORDERS_FAIL",_="AUTH_CHECK_STATE",E="AUTH_USER",h="AUTH_START",v="AUTH_SUCCESS",y="AUTH_FAIL",O="AUTH_INITIATE_LOGOUT",k="AUTH_LOGOUT",j="AUTH_CHECK_TIMEOUT",x="SET_AUTH_REDIRECT"},,,,,function(e,t,n){"use strict";var r=n(2),a=function(e){return{type:r.a,payload:{ingredientName:e}}},c=function(e){return{type:r.u,payload:{ingredientName:e}}},u=function(e){return{type:r.w,payload:{ingredients:e}}},o=function(e){return console.log(e),{type:r.j}},i=function(){return{type:r.o}},l=function(e,t){return{type:r.s,payload:{orderId:e,orderData:t}}},d=function(e){return{type:r.p,payload:{error:e}}},s=function(){return{type:r.r}},f=function(e,t){return{type:r.q,payload:{orderData:e,token:t}}},m=function(){return{type:r.t}},p=function(e){return{type:r.n,payload:{orders:e}}},b=function(e){return{type:r.l,payload:{error:e}}},g=function(){return{type:r.m}},_=function(e,t){return{type:r.k,payload:{token:e,userId:t}}},E=n(14);n.d(t,"a",function(){return a}),n.d(t,"u",function(){return c}),n.d(t,"m",function(){return i}),n.d(t,"h",function(){return o}),n.d(t,"w",function(){return u}),n.d(t,"p",function(){return f}),n.d(t,"t",function(){return m}),n.d(t,"i",function(){return _}),n.d(t,"r",function(){return s}),n.d(t,"s",function(){return l}),n.d(t,"q",function(){return d}),n.d(t,"k",function(){return g}),n.d(t,"j",function(){return b}),n.d(t,"l",function(){return p}),n.d(t,"b",function(){return E.a}),n.d(t,"n",function(){return E.g}),n.d(t,"v",function(){return E.i}),n.d(t,"c",function(){return E.b}),n.d(t,"o",function(){return E.h}),n.d(t,"e",function(){return E.d}),n.d(t,"f",function(){return E.e}),n.d(t,"g",function(){return E.f}),n.d(t,"d",function(){return E.c})},,function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return c});var r=n(26),a=function(e,t){return Object(r.a)({},e,t)},c=function(e,t){var n=!0;if(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),t.isEmail){n=/[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&n}if(t.isNumeric){n=/^\d+$/.text(e)&&n}return n}},,,function(e,t,n){"use strict";t.a=function(e){return e.children}},,function(e,t,n){"use strict";n.d(t,"d",function(){return a}),n.d(t,"e",function(){return c}),n.d(t,"c",function(){return u}),n.d(t,"f",function(){return o}),n.d(t,"g",function(){return i}),n.d(t,"h",function(){return l}),n.d(t,"a",function(){return d}),n.d(t,"i",function(){return s}),n.d(t,"b",function(){return f});var r=n(2),a=function(){return{type:r.g}},c=function(e){var t=e.localId,n=e.idToken;return{type:r.h,payload:{userId:t,idToken:n}}},u=function(e){return{type:r.d,payload:{error:e}}},o=function(e){return{type:r.c,payload:{expirationTime:e}}},i=function(){return{type:r.e}},l=function(){return{type:r.f}},d=function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return{type:r.i,payload:{email:e,password:t,isSignup:n}}},s=function(e){return{type:r.v,payload:{path:e}}},f=function(){return{type:r.b}}},,,,,,,function(e,t,n){e.exports={BreadBottom:"BurgerIngredient__BreadBottom__2z9NQ",BreadTop:"BurgerIngredient__BreadTop__2Pkwe",Seeds1:"BurgerIngredient__Seeds1__2k2x7",Seeds2:"BurgerIngredient__Seeds2__9Mret",Meat:"BurgerIngredient__Meat__1LdrR",Cheese:"BurgerIngredient__Cheese__1eqwP",Salad:"BurgerIngredient__Salad__2WBlr",Bacon:"BurgerIngredient__Bacon__2RZZH"}},,,function(e,t,n){"use strict";var r=n(37),a=n.n(r).a.create({baseURL:"https://react-my-burger-62bf3.firebaseio.com/"});t.a=a},,,function(e,t,n){e.exports={SideDrawer:"SideDrawer__SideDrawer__3wvlM",Logo:"SideDrawer__Logo__10IHv",Open:"SideDrawer__Open__3xsf8",Close:"SideDrawer__Close__2S6c7"}},,,function(e,t,n){e.exports={BuildControl:"BuildControl__BuildControl__ibcUQ",Label:"BuildControl__Label__2VLnR",Less:"BuildControl__Less__3X6hg",More:"BuildControl__More__2eQpV"}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(70),u=n.n(c);t.a=function(){return a.a.createElement("div",{className:u.a.Loader},"Loading...")}},,,,function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(67),u=n.n(c);t.a=function(e){return e.show?a.a.createElement("div",{className:u.a.Backdrop,onClick:e.clicked}):null}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(69),u=n.n(c),o=n(12),i=n(35);t.a=a.a.memo(function(e){return a.a.createElement(o.a,null,a.a.createElement(i.a,{show:e.show,clicked:e.modalClosed}),a.a.createElement("div",{className:u.a.Modal,style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"}},e.children))},function(e,t){return t.show===e.show&&t.children===e.children})},,function(e,t,n){e.exports={Toolbar:"Toolbar__Toolbar__2hkfg",Logo:"Toolbar__Logo__24rue",DesktopOnly:"Toolbar__DesktopOnly__15Sc_"}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(46),u=n.n(c);t.a=function(e){return a.a.createElement("button",{className:[u.a.Button,u.a[e.btnType]].join(" "),onClick:e.clicked,disabled:e.disabled},e.children)}},,,function(e,t,n){e.exports={NavigationItem:"NavigationItem__NavigationItem__3YSjr",active:"NavigationItem__active__2GQz1"}},,,function(e,t,n){e.exports={BuildControls:"BuildControls__BuildControls__220uz",OrderButton:"BuildControls__OrderButton__1ScSk",enable:"BuildControls__enable__3XAWA"}},function(e,t,n){e.exports={Button:"Button__Button__ajevi",Success:"Button__Success__1DMln",Danger:"Button__Danger__18hYt"}},function(e,t,n){"use strict";var r=n(22),a=n(0),c=n.n(a),u=n(36),o=n(12);t.a=function(e,t){return function(n){var i=function(e){var t=Object(a.useState)(null),n=Object(r.a)(t,2),c=n[0],u=n[1],o=e.interceptors.request.use(function(e){return u(null),e}),i=e.interceptors.response.use(function(e){return e},function(e){u(e)});return Object(a.useEffect)(function(){return function(){e.interceptors.request.eject(o),e.interceptors.response.eject(i)}},[o,i]),[c,function(){u(null)}]}(t),l=Object(r.a)(i,2),d=l[0],s=l[1];return c.a.createElement(o.a,null,c.a.createElement(u.a,{show:d,modalClosed:s},d?d.message:null),c.a.createElement(e,n))}}},,,,,,,,,,,function(e,t,n){"use strict";var r=n(71),a=n(0),c=n.n(a),u=n(68),o=n.n(u),i=n(21),l=n.n(i),d=function(e){var t=null;switch(e.type){case"bread-bottom":t=c.a.createElement("div",{className:l.a.BreadBottom});break;case"bread-top":t=c.a.createElement("div",{className:l.a.BreadTop},c.a.createElement("div",{className:l.a.Seeds1}),c.a.createElement("div",{className:l.a.Seeds2}));break;case"meat":t=c.a.createElement("div",{className:l.a.Meat});break;case"cheese":t=c.a.createElement("div",{className:l.a.Cheese});break;case"salad":t=c.a.createElement("div",{className:l.a.Salad});break;case"bacon":t=c.a.createElement("div",{className:l.a.Bacon});break;default:t=null}return t};t.a=function(e){var t=Object.keys(e.ingredients).map(function(t){return Object(r.a)(Array(e.ingredients[t])).map(function(e,n){return c.a.createElement(d,{key:t+n,type:t})})}).reduce(function(e,t){return e.concat(t)},[]);return 0===t.length&&(t=c.a.createElement("p",null,"Please start adding ingredients")),c.a.createElement("div",{className:o.a.Burger},c.a.createElement(d,{type:"bread-top"}),t,c.a.createElement(d,{type:"bread-bottom"}))}},,,function(e,t,n){e.exports={Content:"Layout__Content__3KSp3"}},function(e,t,n){e.exports={NavigationItems:"NavigationItems__NavigationItems__3HY9i"}},,function(e,t,n){e.exports={DrawerToggle:"DrawerToggle__DrawerToggle__1eThf"}},function(e,t,n){e.exports={Logo:"Logo__Logo__2A07e"}},function(e,t,n){e.exports=n.p+"static/media/burger-logo.b8503d26.png"},function(e,t,n){e.exports={Backdrop:"Backdrop__Backdrop__eeZpu"}},function(e,t,n){e.exports={Burger:"Burger__Burger__2h2kL"}},function(e,t,n){e.exports={Modal:"Modal__Modal__cd320"}},function(e,t,n){e.exports={Loader:"Spinner__Loader__3dgUo",load6:"Spinner__load6__3Ebkm",round:"Spinner__round__2-YqU"}},,,function(e,t,n){e.exports=n(103)},,,,,,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(32),u=n.n(c),o=n(25),i=n(18),l=n(20),d=n(60),s=n(72),f=(n(82),n(23)),m=n(22),p=n(12),b=n(61),g=n.n(b),_=n(38),E=n.n(_),h=n(62),v=n.n(h),y=n(42),O=n.n(y),k=function(e){return a.a.createElement("li",{className:O.a.NavigationItem},a.a.createElement(o.b,{activeClassName:O.a.active,to:e.link,exact:e.exact},e.children))},j=function(e){return a.a.createElement("ul",{className:v.a.NavigationItems},a.a.createElement(k,{link:"/",exact:!0},"Burger Builder"),e.isAuth?a.a.createElement(r.Fragment,null,a.a.createElement(k,{link:"/orders"},"Orders"),a.a.createElement(k,{link:"/logout"},"Logout")):a.a.createElement(k,{link:"/auth"},"Authenticate"))},x=n(64),I=n.n(x),S=function(e){return a.a.createElement("div",{className:I.a.DrawerToggle,onClick:e.clicked},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null))},T=n(65),w=n.n(T),N=n(66),C=n.n(N),B=function(e){return a.a.createElement("div",{className:w.a.Logo},a.a.createElement("img",{src:C.a,alt:"Burger Logo"}))},A=function(e){return a.a.createElement("header",{className:E.a.Toolbar},a.a.createElement(S,{clicked:e.drawerToggleClick}),a.a.createElement("div",{className:E.a.Logo},a.a.createElement(B,null)),a.a.createElement("nav",{className:E.a.DesktopOnly},a.a.createElement(j,{isAuth:e.isAuth})))},R=n(27),D=n.n(R),L=n(35),U=function(e){var t=[D.a.SideDrawer,D.a.Close];return e.open&&(t=[D.a.SideDrawer,D.a.Open]),a.a.createElement(p.a,null,a.a.createElement(L.a,{show:e.open,clicked:e.closed}),a.a.createElement("div",{className:t.join(" "),onClick:e.closed},a.a.createElement("div",{className:D.a.Logo},a.a.createElement(B,null)),a.a.createElement("nav",null,a.a.createElement(j,{isAuth:e.isAuth}))))},P=Object(i.b)(function(e){return{isAuth:null!==e.auth.token}})(function(e){var t=Object(r.useState)(!1),n=Object(m.a)(t,2),c=n[0],u=n[1];return a.a.createElement(p.a,null,a.a.createElement(A,{isAuth:e.isAuth,drawerToggleClick:function(){u(!c)}}),a.a.createElement(U,{isAuth:e.isAuth,open:c,closed:function(){u(!1)}}),a.a.createElement("main",{className:g.a.Content},e.children))}),H=n(26),M=n(58),z=n(45),q=n.n(z),F=n(30),G=n.n(F),V=function(e){return a.a.createElement("div",{className:G.a.BuildControl},a.a.createElement("div",{className:G.a.Label},e.label),a.a.createElement("button",{className:G.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),a.a.createElement("button",{className:G.a.More,onClick:e.added},"More"))},Y=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],Q=function(e){return a.a.createElement("div",{className:q.a.BuildControls},a.a.createElement("p",null,"Current Price: ",a.a.createElement("strong",null,e.price.toFixed(2))),Y.map(function(t){return a.a.createElement(V,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})}),a.a.createElement("button",{className:q.a.OrderButton,disabled:!e.isPurchasable,onClick:e.ordered},e.isAuth?"EAT NOW":"SIGN UP TO ORDER"))},J=n(36),W=n(39),X=function(e){var t=Object.keys(e.ingredients).map(function(t){return a.a.createElement("li",{key:t},a.a.createElement("span",{style:{textTransform:"capitalize"}},t),":",e.ingredients[t])});return a.a.createElement(p.a,null,a.a.createElement("h3",null,"Your Order"),a.a.createElement("p",null,"A delicious burger with following ingredients"),a.a.createElement("ul",null,t),a.a.createElement("p",null,a.a.createElement("strong",null,"Total Price: $",e.price.toFixed(2))),a.a.createElement("p",null,"Continue to Checkout?"),a.a.createElement(W.a,{btnType:"Danger",clicked:e.purchaseCanceled},"CANCEL"),a.a.createElement(W.a,{btnType:"Success",clicked:e.purchaseContinued},"CONTINUE"))},$=n(31),K=n(47),Z=n(7),ee=n(24),te=Object(i.b)(function(e){return{ingredients:e.burgerBuilder.ingredients,totalPrice:e.burgerBuilder.totalPrice,error:e.burgerBuilder.error,isAuth:null!==e.auth.token}},function(e){return{onIngredientAdded:function(t){return e(Z.a(t))},onIngredientRemoved:function(t){return e(Z.u(t))},onInitIngredients:function(){return e(Z.m())},onInitPurchase:function(){return e(Z.t())},onSetAuthRedirectPath:function(t){return e(Z.v(t))}}})(Object(K.a)(function(e){var t=Object(r.useState)(!1),n=Object(m.a)(t,2),c=n[0],u=n[1],o=function(){u(!1)};Object(r.useEffect)(function(){e.onInitIngredients()},[]);var i=Object(H.a)({},e.ingredients);for(var l in i)i[l]=i[l]<=0;var d,s=null,f=e.error?a.a.createElement("p",{style:{textAlign:"center"}},"Ingredients can't be received"," ",a.a.createElement("span",{role:"img","aria-label":"Sad Face"},"\ud83d\ude22")):a.a.createElement($.a,null);return e.ingredients&&(f=a.a.createElement(p.a,null,a.a.createElement(M.a,{ingredients:e.ingredients}),a.a.createElement(Q,{ingredientAdded:e.onIngredientAdded,ingredientRemoved:e.onIngredientRemoved,disabled:i,ordered:function(){e.isAuth?u(!0):(e.onSetAuthRedirectPath("/checkout"),e.history.push("/auth"))},isPurchasable:(d=e.ingredients,Object.keys(d).map(function(e){return d[e]}).reduce(function(e,t){return e+t},0)>0),isAuth:e.isAuth,price:e.totalPrice})),s=a.a.createElement(X,{price:e.totalPrice,ingredients:e.ingredients,purchaseCanceled:o,purchaseContinued:function(){e.onInitPurchase(),e.history.push("/checkout")}})),a.a.createElement(p.a,null,a.a.createElement(J.a,{show:c,modalClosed:o},s),f)},ee.a)),ne=n(14),re=Object(i.b)(null,function(e){return{onLogout:function(){return e(ne.g())}}})(function(e){return Object(r.useEffect)(function(){e.onLogout()}),a.a.createElement(f.a,{to:"/"})}),ae=a.a.lazy(function(){return n.e(3).then(n.bind(null,111))}),ce=a.a.lazy(function(){return n.e(5).then(n.bind(null,112))}),ue=a.a.lazy(function(){return n.e(4).then(n.bind(null,110))}),oe=Object(f.g)(Object(i.b)(function(e){return{isAuthenticated:null!==e.auth.token}},function(e){return{onTryAutoSignup:function(){return e(Z.c())}}})(function(e){Object(r.useEffect)(function(){e.onTryAutoSignup()},[]);var t=a.a.createElement(f.d,null,a.a.createElement(f.b,{path:"/auth",render:function(e){return a.a.createElement(ue,e)}}),a.a.createElement(f.b,{path:"/",component:te}),a.a.createElement(f.a,{to:"/"}));return e.isAuthenticated&&(t=a.a.createElement(f.d,null,a.a.createElement(f.b,{path:"/checkout",render:function(e){return a.a.createElement(ae,e)}}),a.a.createElement(f.b,{path:"/orders",render:function(e){return a.a.createElement(ce,e)}}),a.a.createElement(f.b,{path:"/logout",component:re}),a.a.createElement(f.b,{path:"/auth",render:function(e){return a.a.createElement(ue,e)}}),a.a.createElement(f.b,{path:"/",component:te}),a.a.createElement(f.a,{to:"/"}))),a.a.createElement("div",null,a.a.createElement(P,null,a.a.createElement(r.Suspense,{fallback:a.a.createElement($.a,null)},t)))})),ie=n(28),le=n(2),de=n(9),se={ingredients:null,totalPrice:5,error:!1,building:!1},fe={salad:.5,cheese:.6,meat:1.4,bacon:.9},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case le.a:return function(e,t){var n=Object(ie.a)({},t.payload.ingredientName,e.ingredients[t.payload.ingredientName]+1),r={ingredients:Object(de.b)(e.ingredients,n),totalPrice:e.totalPrice+fe[t.payload.ingredientName],building:!0};return Object(de.b)(e,r)}(e,t);case le.u:return function(e,t){var n=Object(ie.a)({},t.payload.ingredientName,e.ingredients[t.payload.ingredientName]-1),r={ingredients:Object(de.b)(e.ingredients,n),totalPrice:e.totalPrice-fe[t.payload.ingredientName],building:!0};return Object(de.b)(e,r)}(e,t);case le.w:return function(e,t){return Object(de.b)(e,{ingredients:t.payload.ingredients,error:!1,totalPrice:5,building:!1})}(e,t);case le.j:return function(e,t){return Object(de.b)(e,{error:!0})}(e);default:return e}},pe={orders:[],loading:!1,purchased:!1},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case le.t:return function(e,t){return Object(de.b)(e,{purchased:!1})}(e);case le.r:return function(e,t){return Object(de.b)(e,{loading:!0})}(e);case le.s:return function(e,t){return Object(de.b)(e,{loading:!1,purchased:!0,orders:e.orders.concat(t.payload)})}(e,t);case le.p:return function(e,t){return Object(de.b)(e,{loading:!1})}(e);case le.m:return function(e,t){return Object(de.b)(e,{loading:!0})}(e);case le.n:return function(e,t){return Object(de.b)(e,{loading:!1,orders:t.payload.orders})}(e,t);case le.l:return function(e,t){return Object(de.b)(e,{loading:!1})}(e);default:return e}},ge={token:null,userId:null,error:null,loading:!1,authRedirectPath:"/"},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case le.g:return function(e,t){return Object(de.b)(e,{error:null,loading:!0})}(e);case le.h:return function(e,t){return Object(de.b)(e,{token:t.payload.idToken,userId:t.payload.userId,error:null,loading:!1})}(e,t);case le.d:return function(e,t){return Object(de.b)(e,{error:t.payload.error,loading:!1})}(e,t);case le.f:return function(e,t){return Object(de.b)(e,{token:null,userId:null})}(e);case le.v:return function(e,t){return Object(de.b)(e,{authRedirectPath:t.payload.path})}(e,t);default:return e}},Ee=n(8),he=n.n(Ee),ve=n(5),ye=n(37),Oe=n.n(ye),ke=he.a.mark(we),je=he.a.mark(Ne),xe=he.a.mark(Ce),Ie=he.a.mark(Be),Se="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=".concat("AIzaSyD3kUORgz4VTQJ8dTMMh4sR0EXVHTSqhPk"),Te="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=".concat("AIzaSyD3kUORgz4VTQJ8dTMMh4sR0EXVHTSqhPk");function we(e){return he.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ve.b)([localStorage,"removeItem"],"token");case 2:return e.next=4,Object(ve.b)([localStorage,"removeItem"],"expirationDate");case 4:return e.next=6,Object(ve.b)([localStorage,"removeItem"],"userId");case 6:return e.next=8,Object(ve.d)(Z.o());case 8:case"end":return e.stop()}},ke)}function Ne(e){return he.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(ve.c)(1e3*e.payload.expirationTime);case 2:return t.next=4,Object(ve.d)(Z.n());case 4:case"end":return t.stop()}},je)}function Ce(e){var t,n,r,a;return he.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(ve.d)(Z.e());case 2:return t={email:e.payload.email,password:e.payload.password,returnSecureToken:!0},n="".concat(Se),e.payload.isSignup||(n="".concat(Te)),c.prev=5,c.next=8,Oe.a.post(n,t);case 8:return r=c.sent,c.next=11,new Date((new Date).getTime()+1e3*r.data.expiresIn);case 11:return a=c.sent,c.next=14,localStorage.setItem("token",r.data.idToken);case 14:return c.next=16,localStorage.setItem("expirationDate",a);case 16:return c.next=18,localStorage.setItem("userId",r.data.localId);case 18:return c.next=20,Object(ve.d)(Z.f(r.data));case 20:return c.next=22,Object(ve.d)(Z.g(r.data.expiresIn));case 22:c.next=28;break;case 24:return c.prev=24,c.t0=c.catch(5),c.next=28,Object(ve.d)(Z.d(c.t0.response.data.error));case 28:case"end":return c.stop()}},xe,null,[[5,24]])}function Be(e){var t,n,r,a;return he.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("token");case 2:if(t=e.sent){e.next=8;break}return e.next=6,Object(ve.d)(Z.n());case 6:e.next=24;break;case 8:return e.next=10,new Date(localStorage.getItem("expirationDate"));case 10:if(!((n=e.sent)<=new Date)){e.next=16;break}return e.next=14,Object(ve.d)(Z.n());case 14:e.next=24;break;case 16:return e.next=18,localStorage.getItem("userId");case 18:return r=e.sent,a={localId:r,idToken:t},e.next=22,Object(ve.d)(Z.f(a));case 22:return e.next=24,Object(ve.d)(Z.g((n.getTime()-(new Date).getTime())/1e3));case 24:case"end":return e.stop()}},Ie)}var Ae=he.a.mark(Re);function Re(e){var t;return he.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ee.a.get("/ingredients.json");case 3:return t=e.sent,e.next=6,Object(ve.d)(Z.w(t.data));case 6:e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),e.next=12,Object(ve.d)(Z.h(e.t0));case 12:case"end":return e.stop()}},Ae,null,[[0,8]])}var De=he.a.mark(Ue),Le=he.a.mark(Pe);function Ue(e){var t,n;return he.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(ve.d)(Z.r());case 2:return r.prev=2,r.next=5,ee.a.post("/orders.json?auth="+e.payload.token,e.payload.orderData);case 5:return t=r.sent,n=t.data.name,r.next=9,Object(ve.d)(Z.s(n,e.payload.orderData));case 9:r.next=15;break;case 11:return r.prev=11,r.t0=r.catch(2),r.next=15,Object(ve.d)(Z.q(r.t0));case 15:case"end":return r.stop()}},De,null,[[2,11]])}function Pe(e){var t,n,r,a;return he.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(ve.d)(Z.k());case 2:return t="?auth="+e.payload.token+'&orderBy="userId"&equalTo="'+e.payload.userId+'"',c.prev=3,c.next=6,ee.a.get("/orders.json"+t);case 6:for(a in n=c.sent,r=[],n.data)r.push(Object(H.a)({},n.data[a],{id:a}));return c.next=11,Object(ve.d)(Z.l(r));case 11:c.next=17;break;case 13:return c.prev=13,c.t0=c.catch(3),c.next=17,Object(ve.d)(Z.j(c.t0));case 17:case"end":return c.stop()}},Le,null,[[3,13]])}var He=he.a.mark(qe),Me=he.a.mark(Fe),ze=he.a.mark(Ge);function qe(){return he.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ve.a)([Object(ve.e)(le.e,we),Object(ve.e)(le.c,Ne),Object(ve.e)(le.i,Ce),Object(ve.e)(le.b,Be)]);case 2:case"end":return e.stop()}},He)}function Fe(){return he.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ve.e)(le.o,Re);case 2:case"end":return e.stop()}},Me)}function Ge(){return he.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ve.f)(le.q,Ue);case 2:return e.next=4,Object(ve.e)(le.k,Pe);case 4:case"end":return e.stop()}},ze)}var Ve=l.d,Ye=Object(l.c)({burgerBuilder:me,order:be,auth:_e}),Qe=Object(s.a)(),Je=Object(l.e)(Ye,Ve(Object(l.a)(d.a,Qe)));Qe.run(qe),Qe.run(Fe),Qe.run(Ge);var We=a.a.createElement(i.a,{store:Je},a.a.createElement(o.a,null,a.a.createElement(oe,null),","));u.a.render(We,document.getElementById("root"))}],[[73,1,2]]]);
//# sourceMappingURL=main.371fb861.chunk.js.map