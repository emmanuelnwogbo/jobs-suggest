(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1094:function(e,_,t){var r=t(1095);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};t(25)(r,a);r.locals&&(e.exports=r.locals)},1095:function(e,_,t){(e.exports=t(24)(!1)).push([e.i,".suggestcard{display:flex;align-items:center;height:6rem;padding:0 1rem;cursor:pointer;transition:all 0.2s cubic-bezier(0.165, 0.84, 0.44, 1)}.suggestcard:hover{background:rgba(48,51,107,0.3)}.suggestcard figure{height:5rem;width:5rem;overflow:hidden;border-radius:50%}.suggestcard figure img{width:100%;height:100%;object-fit:cover;display:block}.suggestcard__right{margin-left:2rem}.suggestcard__right h3{font-weight:900;font-size:1.5rem;color:#30336b}.suggestcard__right p{font-weight:900;font-size:1.2rem;color:rgba(30,39,46,0.6);text-transform:uppercase}\n",""])},15:function(e,_,t){"use strict";(function(e){t.d(_,"b",function(){return n}),t.d(_,"a",function(){return u});var r,a=t(31),o=t(5);(r=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(1)).enterModule)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var s,l,n=function(e){return console.log(e),{type:o.b,payload:e}},u=function(){return{type:o.a,payload:a.a}};(s=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(1)).default)&&(s.register(n,"triggerSuggestions","C:\\Users\\USER\\Desktop\\MY WORK\\jobs-suggest\\src\\actions.js"),s.register(u,"getResults","C:\\Users\\USER\\Desktop\\MY WORK\\jobs-suggest\\src\\actions.js")),(l=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(1)).leaveModule)&&l(e)}).call(this,t(3)(e))},21:function(e,_,t){"use strict";(function(e){t.d(_,"a",function(){return n}),t.d(_,"b",function(){return u});var r,a=t(5);(r=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(1)).enterModule)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var o,s,l={searchvalue:"",results:[]},n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,_=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(_.type){case a.b:return Object.assign({},e,{searchvalue:_.payload});case a.a:return Object.assign({},e,{results:_.payload});default:return e}},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,_=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(_.type){case a.b:return Object.assign({},e,{searchvalue:_.payload});case a.a:return Object.assign({},e,{results:_.payload});default:return e}};(o=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(1)).default)&&(o.register(l,"initialState","C:\\Users\\USER\\Desktop\\MY WORK\\jobs-suggest\\src\\reducers.js"),o.register(n,"resultsReducer","C:\\Users\\USER\\Desktop\\MY WORK\\jobs-suggest\\src\\reducers.js"),o.register(u,"resultsReducer2","C:\\Users\\USER\\Desktop\\MY WORK\\jobs-suggest\\src\\reducers.js")),(s=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(1)).leaveModule)&&s(e)}).call(this,t(3)(e))},22:function(e,_,t){"use strict";(function(e){var r,a=t(0),o=t.n(a);t(1094);(r=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(1)).enterModule)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var s,l,n=function(e){var _=e.name,t=e.image,r=e.profession,a=(e.state,e.companyName),s=e.role;return o.a.createElement("div",{className:"suggestcard"},o.a.createElement("figure",null,o.a.createElement("img",{src:t})),o.a.createElement("div",{className:"suggestcard__right"},o.a.createElement("h3",null,_||a),o.a.createElement("p",null,r||s)))},u=n;_.a=u,(s=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(1)).default)&&(s.register(n,"Suggestcard","C:\\Users\\USER\\Desktop\\MY WORK\\jobs-suggest\\src\\components\\SuggestCard.jsx"),s.register(u,"default","C:\\Users\\USER\\Desktop\\MY WORK\\jobs-suggest\\src\\components\\SuggestCard.jsx")),(l=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(1)).leaveModule)&&l(e)}).call(this,t(3)(e))},30:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(10),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(11),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(12),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(13),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(14),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),faker__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(2),faker__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_6__),react_redux__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(7),_actions__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(15),_components_SuggestArea__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(32),enterModule;enterModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).enterModule,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},App=function(_Component){function App(e){return _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this,App),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(App).call(this,e))}return _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(App,_Component),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(App,[{key:"componentDidMount",value:function(){this.props.getResults(),console.log(this.props)}},{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"container",style:{minHeight:"100vh"}},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"container__top"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1",null,"JoboSearch."),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_SuggestArea__WEBPACK_IMPORTED_MODULE_9__.a,null))))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),App}(react__WEBPACK_IMPORTED_MODULE_5__.Component);function mapStateToProps(e){return{state:e.resultsReducer}}var _default=Object(react_redux__WEBPACK_IMPORTED_MODULE_7__.b)(mapStateToProps,{getResults:_actions__WEBPACK_IMPORTED_MODULE_8__.a})(App),reactHotLoader,leaveModule;__webpack_exports__.a=_default,reactHotLoader=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).default,reactHotLoader&&(reactHotLoader.register(App,"App","C:\\Users\\USER\\Desktop\\MY WORK\\jobs-suggest\\src\\App.jsx"),reactHotLoader.register(mapStateToProps,"mapStateToProps","C:\\Users\\USER\\Desktop\\MY WORK\\jobs-suggest\\src\\App.jsx"),reactHotLoader.register(_default,"default","C:\\Users\\USER\\Desktop\\MY WORK\\jobs-suggest\\src\\App.jsx")),leaveModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).leaveModule,leaveModule&&leaveModule(module)}).call(this,__webpack_require__(3)(module))},31:function(e,_,t){"use strict";(function(e){var r,a=t(2),o=t.n(a);(r=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(1)).enterModule)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var s=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100],l=[];s.map(function(e){if(e%2==0){var _={id:o.a.random.uuid(),image:o.a.image.avatar(),name:o.a.name.findName(),profession:o.a.name.jobTitle(),state:"Open to Hire"};l.push(_)}if(e%2!=0){var t={id:o.a.random.uuid(),image:o.a.image.business(),companyName:o.a.company.companyName(),role:o.a.name.jobTitle(),state:"Position open"};l.push(t)}});var n,u,i=l;_.a=i,(n=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(1)).default)&&(n.register(s,"dbAmount","C:\\Users\\USER\\Desktop\\MY WORK\\jobs-suggest\\src\\db.js"),n.register(l,"db","C:\\Users\\USER\\Desktop\\MY WORK\\jobs-suggest\\src\\db.js"),n.register(i,"default","C:\\Users\\USER\\Desktop\\MY WORK\\jobs-suggest\\src\\db.js")),(u=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(1)).leaveModule)&&u(e)}).call(this,t(3)(e))},32:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(10),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(11),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(12),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(13),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__),_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(18),_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(14),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(33),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__),react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__),react_redux__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(7),_actions__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(15),_SuggestCard__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(22),enterModule;enterModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).enterModule,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},SuggestArea=function(_Component){function SuggestArea(e){var _;return _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this,SuggestArea),_=_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(SuggestArea).call(this,e)),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_),"returnSuggestions",function(){if(_.props.state.results.length>0){if(""===_.props.state.searchvalue)return;return _.props.state.results.map(function(e){return e.profession&&e.profession.toLowerCase().includes(_.props.state.searchvalue.toLowerCase())?react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_SuggestCard__WEBPACK_IMPORTED_MODULE_10__.a,{key:e.id,name:e.name,image:e.image,profession:e.profession,state:e.state}):e.role&&e.role.toLowerCase().includes(_.props.state.searchvalue.toLowerCase())?react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_SuggestCard__WEBPACK_IMPORTED_MODULE_10__.a,{key:e.id,companyName:e.companyName,image:e.image,role:e.role,state:e.state}):void 0})}}),_.state={inputStyle:{position:"relative",padding:"1.5rem",fontSize:"1.7rem",outline:"none",background:"rgba(48, 51, 107,.2)",color:"#000000",borderRadius:".5rem"}},_}return _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(SuggestArea,_Component),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SuggestArea,[{key:"render",value:function(){var e=this;return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{style:{width:"100%"},className:"container__top__inputarea",onClick:this.openSuggestions},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input",{className:"container__top--input",style:this.state.inputStyle,id:"search-input",onChange:function(_){return e.props.triggerSuggestions(_.target.value)}}),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{className:"container__top__suggestions"},this.returnSuggestions()))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),SuggestArea}(react__WEBPACK_IMPORTED_MODULE_7__.Component);function mapStateToProps(e){return{state:e.resultsReducer2}}var _default=Object(react_redux__WEBPACK_IMPORTED_MODULE_8__.b)(mapStateToProps,{triggerSuggestions:_actions__WEBPACK_IMPORTED_MODULE_9__.b})(SuggestArea),reactHotLoader,leaveModule;__webpack_exports__.a=_default,reactHotLoader=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).default,reactHotLoader&&(reactHotLoader.register(SuggestArea,"SuggestArea","C:\\Users\\USER\\Desktop\\MY WORK\\jobs-suggest\\src\\components\\SuggestArea.jsx"),reactHotLoader.register(mapStateToProps,"mapStateToProps","C:\\Users\\USER\\Desktop\\MY WORK\\jobs-suggest\\src\\components\\SuggestArea.jsx"),reactHotLoader.register(_default,"default","C:\\Users\\USER\\Desktop\\MY WORK\\jobs-suggest\\src\\components\\SuggestArea.jsx")),leaveModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).leaveModule,leaveModule&&leaveModule(module)}).call(this,__webpack_require__(3)(module))},34:function(e,_,t){"use strict";t.r(_),function(e){t(37);var _,r=t(0),a=t.n(r),o=t(9),s=t.n(o),l=t(7),n=t(8),u=t(28),i=t(29),c=t(21),d=t(30);(_=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(1)).enterModule)&&_(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var p,b,E=Object(u.createLogger)(),f=Object(n.c)({resultsReducer:c.a,resultsReducer2:c.b}),g=Object(n.d)(f,Object(n.a)(i.a,E));s.a.render(a.a.createElement(l.a,{store:g},a.a.createElement(d.a,null)),document.getElementById("app")),(p=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(1)).default)&&(p.register(E,"logger","C:\\Users\\USER\\Desktop\\MY WORK\\jobs-suggest\\src\\index.js"),p.register(f,"rootReducer","C:\\Users\\USER\\Desktop\\MY WORK\\jobs-suggest\\src\\index.js"),p.register(g,"store","C:\\Users\\USER\\Desktop\\MY WORK\\jobs-suggest\\src\\index.js")),(b=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(1)).leaveModule)&&b(e)}.call(this,t(3)(e))},37:function(e,_,t){var r=t(38);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};t(25)(r,a);r.locals&&(e.exports=r.locals)},38:function(e,_,t){(e.exports=t(24)(!1)).push([e.i,'*,*::after,*::before{margin:0;padding:0;box-sizing:inherit}html{box-sizing:border-box;font-size:69%}body{overflow-x:hidden}.container__top{position:fixed;top:20%;left:0;width:100%;display:flex;justify-content:center;align-items:center;flex-direction:column}.container__top h1{font-weight:900;font-size:4rem;margin-bottom:1rem;color:#30336b}.container__top__inputarea{display:flex;justify-content:center;align-items:center;flex-direction:column}.container__top input{width:48%;border:#30336b solid 1px;box-shadow:#30336b 0px 1rem 17rem}.container__top input:focus ~ .container__top__suggestions{display:block}.container__top__suggestions{width:48%;margin-top:.3rem;box-shadow:0 1rem 2rem rgba(0,0,0,0.4);border-radius:0 0 .5rem .5rem;overflow:hidden;max-height:40vh;overflow:scroll;overflow-x:hidden;display:none}.container__top__suggestions:focus{display:block}body{font-family:"Lato", sans-serif;font-weight:400;line-height:1.7}\n',""])},5:function(e,_,t){"use strict";(function(e){var r;t.d(_,"b",function(){return s}),t.d(_,"a",function(){return l}),(r=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(1)).enterModule)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var a,o,s="RENDER_SUGGESTIONS",l="GET_RESULTS";(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(1)).default)&&(a.register(s,"RENDER_SUGGESTIONS","C:\\Users\\USER\\Desktop\\MY WORK\\jobs-suggest\\src\\constants.js"),a.register(l,"GET_RESULTS","C:\\Users\\USER\\Desktop\\MY WORK\\jobs-suggest\\src\\constants.js")),(o=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(1)).leaveModule)&&o(e)}).call(this,t(3)(e))}},[[34,1,2]]]);