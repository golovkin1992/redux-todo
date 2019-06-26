(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,n){e.exports=n(36)},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var o={};n.r(o),n.d(o,"removeTodoAction",function(){return b}),n.d(o,"toggleTodoAction",function(){return T}),n.d(o,"addTodoAction",function(){return A}),n.d(o,"editTodoAction",function(){return y}),n.d(o,"toggleAllTodosAction",function(){return g}),n.d(o,"removeCompletedTodosAction",function(){return j}),n.d(o,"setFilterAction",function(){return D}),n.d(o,"saveTodoAction",function(){return C}),n.d(o,"saveFilterAction",function(){return k});var a=n(0),r=n.n(a),c=n(11),l=n.n(c),i=n(5),s=n(8),u=n(18),d={visibleFilter:localStorage.getItem("filter")||"all"},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.visibleFilter,t=arguments.length>1?arguments[1]:void 0,n=t.type,o=t.payload;switch(n){case"SET_FILTER":return o;default:return e;case"SAVE_FILTER":return localStorage.setItem("filter",o),e}},m=n(19),p=n(10),h={todos:JSON.parse(localStorage.getItem("todo"))||[]},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h.todos,t=arguments.length>1?arguments[1]:void 0,n=t.type,o=t.payload;switch(n){case"ADD_TODO":return[].concat(Object(p.a)(e),[o]);case"REMOVE_TODO":return e.filter(function(e){return e.id!==o});case"TOGGLE_TODO":var a=e.findIndex(function(e){return e.id===o}),r=Object.assign({},e[a],{isComplete:!e[a].isComplete});return[].concat(Object(p.a)(e.slice(0,a)),[r],Object(p.a)(e.slice(a+1)));case"EDIT_TODO":var c=e.findIndex(function(e){return e.id===o.id}),l=Object.assign({},e[c],{text:o.text});return[].concat(Object(p.a)(e.slice(0,c)),[l],Object(p.a)(e.slice(c+1)));case"TOGGLE_ALL_TODOS":var i=e.every(function(e){return e.isComplete});return e.map(function(e){return Object(m.a)({},e,{isComplete:!i})});case"REMOVE_COMPLETED_TODOS":return e.filter(function(e){return!e.isComplete});case"SAVE_TODO":return localStorage.setItem("todo",JSON.stringify(e)),e;default:return e}},O=Object(s.combineReducers)({visibleFilter:f,todos:v}),E=Object(s.createStore)(O,Object(u.composeWithDevTools)()),b=function(e){return{type:"REMOVE_TODO",payload:e}},A=function(e){return{type:"ADD_TODO",payload:e}},T=function(e){return{type:"TOGGLE_TODO",payload:e}},y=function(e,t){return{type:"EDIT_TODO",payload:{id:e,text:t}}},C=function(){return{type:"SAVE_TODO"}},g=function(){return{type:"TOGGLE_ALL_TODOS"}},j=function(){return{type:"REMOVE_COMPLETED_TODOS"}},D=function(e){return{type:"SET_FILTER",payload:e}},k=function(e){return{type:"SAVE_FILTER",payload:e}},F=n(2),N=n(3),_=n(6),w=n(4),S=n(7),I=(n(30),function(e){function t(){var e,n;Object(F.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(_.a)(this,(e=Object(w.a)(t)).call.apply(e,[this].concat(a)))).handleClick=function(){var e=n.props,t=e.toggleAllTodosAction,o=e.saveTodoAction;t(),o()},n}return Object(S.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){var e=this.props,t=e.total,n=e.active;return r.a.createElement("label",{className:"label-select-all",hidden:0===t,htmlFor:"select-all"},r.a.createElement("input",{onClick:this.handleClick,onChange:function(){},checked:0===n,type:"checkbox",id:"select-all",className:"select-all"}),r.a.createElement("span",{className:"select-all-pseudo"}))}}]),t}(a.PureComponent)),L=(n(31),function(e){function t(){var e,n;Object(F.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(_.a)(this,(e=Object(w.a)(t)).call.apply(e,[this].concat(a)))).createElement=function(e){var t=n.props,o=t.addTodoAction,a=t.saveTodoAction;e.keyCode&&13!==e.keyCode||""!==e.target.value&&(o({id:Date.now(),text:e.target.value,isComplete:!1}),a(),e.target.value="")},n.handleBlur=function(e){n.createElement(e)},n.handleKeyDown=function(e){n.createElement(e)},n}return Object(S.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){return r.a.createElement("input",{className:"header__new-item",onBlur:this.handleBlur,onKeyDown:this.handleKeyDown,placeholder:"What needs to be done?"})}}]),t}(a.PureComponent)),R=function(e){var t=e.total,n=e.active,o=e.toggleAllTodosAction,a=e.addTodoAction,c=e.saveTodoAction;return r.a.createElement(r.a.Fragment,null,r.a.createElement(I,{toggleAllTodosAction:o,saveTodoAction:c,total:t,active:n}),r.a.createElement(L,{addTodoAction:a,saveTodoAction:c}))},x=Object(i.b)(function(e){return{total:e.todos.length,active:e.todos.filter(function(e){return!e.isComplete}).length}},{addTodoAction:A,toggleAllTodosAction:g,saveTodoAction:C})(R),B=function(e){function t(){var e,n;Object(F.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(_.a)(this,(e=Object(w.a)(t)).call.apply(e,[this].concat(a)))).handleClick=function(){var e=n.props,t=e.setFilterAction,o=e.filterName,a=e.saveFilterAction;t(o),a(o)},n}return Object(S.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){var e=this.props,t=e.isCurrent,n=e.filterName,o=e.filterLabel;return r.a.createElement("li",{className:"filters__item"},r.a.createElement("input",{className:"filter",defaultChecked:t,type:"radio",name:"group",id:n,onClick:this.handleClick}),r.a.createElement("label",{htmlFor:n,className:n},o))}}]),t}(a.PureComponent),V=[{name:"all",label:"All"},{name:"active",label:"Active"},{name:"completed",label:"Completed"}],G=(n(32),function(e){var t=e.selectedFilter,n=e.setFilterAction,o=e.saveFilterAction,a=V.map(function(e){var a=e.name,c=e.label;return r.a.createElement(B,{key:a,filterName:a,filterLabel:c,setFilterAction:n,saveFilterAction:o,isCurrent:t===a})});return r.a.createElement("ul",{className:"filters"},a)}),K=function(e){var t=e.total,n=e.completed,o=e.filter,a=e.removeCompletedTodosAction,c=e.setFilterAction,l=e.saveFilterAction;return r.a.createElement("footer",{className:"footer ".concat(0===t?" hidden":"")},r.a.createElement("span",{className:"counter"},"".concat(t-n," items left")),r.a.createElement(G,{selectedFilter:o,saveFilterAction:l,setFilterAction:c}),r.a.createElement("button",{className:"clear-completed",type:"submit",hidden:0===n,onClick:a},"Clear completed"))},M=Object(i.b)(function(e){return{filter:e.visibleFilter,total:e.todos.length,completed:e.todos.filter(function(e){return e.isComplete}).length}},{removeCompletedTodosAction:j,setFilterAction:D,saveFilterAction:k})(K),P=(n(33),n(20)),J=(n(34),function(e){function t(){var e,n;Object(F.a)(this,t);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(n=Object(_.a)(this,(e=Object(w.a)(t)).call.apply(e,[this].concat(a)))).state={isEdit:!1},n.inputFocusRef=r.a.createRef(),n.handleInputClick=function(){var e=n.props,t=e.id,o=e.isComplete,a=e.toggleTodoAction,r=e.saveTodoAction;a(t,o),r()},n.handleBtnDestroyClick=function(){var e=n.props,t=e.id,o=e.removeTodoAction,a=e.saveTodoAction;o(t),a()},n.handleLabelDblClick=function(){n.setState({isEdit:!0})},n.handleKeyDown=function(e){n.handleNewInputEdit(e)},n.handleBlur=function(e){n.handleNewInputEdit(e)},n.handleNewInputEdit=function(e){var t=n.props,o=t.id,a=t.editTodoAction,r=t.removeTodoAction,c=t.saveTodoAction;n.props.text;e.keyCode&&13!==e.keyCode||(""!==e.target.value?(a(o,e.target.value),n.setState({isEdit:!1}),c()):(r(o),c()))},n}return Object(S.a)(t,e),Object(N.a)(t,[{key:"componentDidUpdate",value:function(){this.state.isEdit&&this.inputFocusRef.current.focus()}},{key:"render",value:function(){var e=this.props,t=e.text,n=e.isComplete,o=this.state.isEdit;return r.a.createElement("li",{className:"item"},r.a.createElement("div",{className:"content-wrap"},r.a.createElement("input",{onClick:this.handleInputClick,onChange:function(){},className:"complete",type:"checkbox",checked:n}),o?r.a.createElement("input",{className:"edit",ref:this.inputFocusRef,onBlur:this.handleBlur,onKeyDown:this.handleKeyDown,defaultValue:t}):r.a.createElement("span",{className:"caption",onDoubleClick:this.handleLabelDblClick},t),r.a.createElement("button",{className:"destroy",type:"submit",onClick:this.handleBtnDestroyClick})))}}]),t}(a.PureComponent)),W=(n(35),function(e){var t=e.todos,n=Object(P.a)(e,["todos"]),o=t.map(function(e){return r.a.createElement(J,Object.assign({key:e.id},e,n))});return r.a.createElement("ul",{className:"todo-list"},o)}),U=function(e,t){switch(t){case"all":return e;case"completed":return e.filter(function(e){return e.isComplete});case"active":return e.filter(function(e){return!e.isComplete});default:return e}},q=Object(i.b)(function(e){return{todos:U(e.todos,e.visibleFilter)}},o)(W),z=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,null),r.a.createElement(q,null),r.a.createElement(M,null))};l.a.render(r.a.createElement(i.a,{store:E},r.a.createElement(z,null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.6a5af373.chunk.js.map