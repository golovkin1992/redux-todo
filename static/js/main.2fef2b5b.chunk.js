(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n(35)},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(11),r=n.n(l),i=n(2),c=n(3),s=n(18),u={visibleFilter:localStorage.getItem("filter")||"all"},d=n(19),m=n(10),f={todos:JSON.parse(localStorage.getItem("todo"))||[]},p=Object(c.combineReducers)({visibleFilter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"SET_FILTER":return localStorage.setItem("filter",a),{visibleFilter:a};default:return e}},todos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0,n=e.todos,a=t.type,o=t.payload;switch(a){case"ADD_TODO":var l={todos:[].concat(Object(m.a)(n),[o])};return localStorage.setItem("todo",JSON.stringify(l.todos)),l;case"REMOVE_TODO":var r={todos:n.filter(function(e){return e.id!==o})};return localStorage.setItem("todo",JSON.stringify(r.todos)),r;case"TOGGLE_TODO":var i=n.findIndex(function(e){return e.id===o}),c=Object.assign({},n[i],{isComplete:!n[i].isComplete}),s={todos:[].concat(Object(m.a)(n.slice(0,i)),[c],Object(m.a)(n.slice(i+1)))};return localStorage.setItem("todo",JSON.stringify(s.todos)),s;case"EDIT_TODO":var u=o.id,p=o.text,h=n.findIndex(function(e){return e.id===u}),O=Object.assign({},n[h],{text:p}),g={todos:[].concat(Object(m.a)(n.slice(0,h)),[O],Object(m.a)(n.slice(h+1)))};return localStorage.setItem("todo",JSON.stringify(g.todos)),g;case"TOGGLE_ALL_TODOS":var v=n.every(function(e){return e.isComplete}),b={todos:n.map(function(e){return Object(d.a)({},e,{isComplete:!v})})};return localStorage.setItem("todo",JSON.stringify(b.todos)),b;case"REMOVE_COMPLETED_TODOS":var E={todos:n.filter(function(e){return!e.isComplete})};return localStorage.setItem("todo",JSON.stringify(E.todos)),E;default:return e}}}),h=Object(c.createStore)(p,Object(s.composeWithDevTools)()),O=(n(29),function(e){var t=e.total,n=e.active,a=e.toggleAllTodos;return o.a.createElement("label",{className:"label-select-all",hidden:0===t,htmlFor:"select-all"},o.a.createElement("input",{onChange:a,checked:0===n,type:"checkbox",id:"select-all",className:"select-all"}),o.a.createElement("span",{className:"select-all-pseudo"}))}),g=n(5),v=n(6),b=n(8),E=n(7),y=n(9),T=(n(30),function(e){function t(){var e,n;Object(g.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(b.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(o)))).state={text:""},n.createElement=function(e){var t=n.props.addTodo,a=n.state.text;e.keyCode&&13!==e.keyCode||""!==a&&(t({id:Date.now(),text:a,isComplete:!1}),n.setState({text:""}))},n.handleChange=function(e){n.setState({text:e.target.value})},n.handleBlur=function(e){n.createElement(e)},n.handleKeyDown=function(e){n.createElement(e)},n}return Object(y.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this.state.text;return o.a.createElement("input",{className:"header__new-item",onBlur:this.handleBlur,onKeyDown:this.handleKeyDown,onChange:this.handleChange,placeholder:"What needs to be done?",value:e})}}]),t}(a.PureComponent)),C=function(e){var t=e.total,n=e.active,l=e.toggleAllTodos,r=e.addTodo;return o.a.createElement(a.Fragment,null,o.a.createElement(O,{toggleAllTodos:l,total:t,active:n}),o.a.createElement(T,{addTodo:r}))},D=Object(i.b)(function(e){var t=e.todos.todos;return{total:t.length,active:t.filter(function(e){return!e.isComplete}).length}},{addTodo:function(e){return{type:"ADD_TODO",payload:e}},toggleAllTodos:function(){return{type:"TOGGLE_ALL_TODOS"}}})(C),j=function(e){function t(){var e,n;Object(g.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(b.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(o)))).handleInputChange=function(){var e=n.props;(0,e.setFilter)(e.filterName)},n}return Object(y.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this.props,t=e.isCurrent,n=e.filterName,a=e.filterLabel;return o.a.createElement("li",{className:"filters__item"},o.a.createElement("input",{className:"filter",checked:t,type:"radio",name:"group",id:n,onChange:this.handleInputChange}),o.a.createElement("label",{htmlFor:n,className:n},a))}}]),t}(a.PureComponent),N=[{name:"all",label:"All"},{name:"active",label:"Active"},{name:"completed",label:"Completed"}],S=(n(31),function(e){var t=e.selectedFilter,n=e.setFilter,a=N.map(function(e){var a=e.name,l=e.label;return o.a.createElement(j,{key:a,filterName:a,filterLabel:l,setFilter:n,isCurrent:t===a})});return o.a.createElement("ul",{className:"filters"},a)}),k=function(e){var t=e.total,n=e.completed,a=e.filter,l=e.removeCompletedTodos,r=e.setFilter;return o.a.createElement("footer",{className:"footer ".concat(0===t?" hidden":"")},o.a.createElement("span",{className:"counter"},"".concat(t-n," items left")),o.a.createElement(S,{selectedFilter:a,setFilter:r}),o.a.createElement("button",{className:"clear-completed",type:"submit",hidden:0===n,onClick:l},"Clear completed"))},F=Object(i.b)(function(e){var t=e.todos.todos;return{filter:e.visibleFilter.visibleFilter,total:t.length,completed:t.filter(function(e){return e.isComplete}).length}},{removeCompletedTodos:function(){return{type:"REMOVE_COMPLETED_TODOS"}},setFilter:function(e){return{type:"SET_FILTER",payload:e}}})(k),I=(n(32),n(33),function(e){function t(){var e,n;Object(g.a)(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(n=Object(b.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(l)))).state={isEditing:!1},n.inputFocusRef=o.a.createRef(),n.handleInputChange=function(){var e=n.props,t=e.id;(0,e.toggleTodo)(t)},n.handleBtnDeleteClick=function(){var e=n.props,t=e.id;(0,e.removeTodo)(t)},n.handleLabelDblClick=function(){n.setState({isEditing:!0})},n.handleKeyDown=function(e){n.handleInputEdit(e)},n.handleBlur=function(e){n.handleInputEdit(e)},n.handleInputEdit=function(e){var t=n.props,a=t.id,o=t.editTodo,l=t.removeTodo;e.keyCode&&13!==e.keyCode||(""!==e.target.value?(o(a,e.target.value),n.setState({isEditing:!1})):l(a))},n}return Object(y.a)(t,e),Object(v.a)(t,[{key:"componentDidUpdate",value:function(){this.state.isEditing&&this.inputFocusRef.current.focus()}},{key:"render",value:function(){var e=this.props,t=e.text,n=e.isComplete,a=this.state.isEditing;return o.a.createElement("li",{className:"item"},o.a.createElement("div",{className:"content-wrap"},o.a.createElement("input",{className:"complete",type:"checkbox",checked:n,onChange:this.handleInputChange}),a?o.a.createElement("input",{className:"edit",ref:this.inputFocusRef,onBlur:this.handleBlur,onKeyDown:this.handleKeyDown,defaultValue:t}):o.a.createElement("span",{className:"caption",onDoubleClick:this.handleLabelDblClick},t),o.a.createElement("button",{className:"delete",type:"submit",onClick:this.handleBtnDeleteClick})))}}]),t}(a.PureComponent)),_=(n(34),function(e){var t=e.todos,n=e.toggleTodo,a=e.editTodo,l=e.removeTodo,r=t.map(function(e){return o.a.createElement(I,Object.assign({key:e.id},e,{toggleTodo:n,editTodo:a,removeTodo:l}))});return o.a.createElement("ul",{className:"todo-list"},r)}),w=function(e,t){switch(t){case"all":return e;case"completed":return e.filter(function(e){return e.isComplete});case"active":return e.filter(function(e){return!e.isComplete});default:return e}},L=Object(i.b)(function(e){var t=e.todos.todos,n=e.visibleFilter.visibleFilter;return{todos:w(t,n)}},{removeTodo:function(e){return{type:"REMOVE_TODO",payload:e}},toggleTodo:function(e){return{type:"TOGGLE_TODO",payload:e}},editTodo:function(e,t){return{type:"EDIT_TODO",payload:{id:e,text:t}}}})(_),x=function(){return o.a.createElement(a.Fragment,null,o.a.createElement(D,null),o.a.createElement(L,null),o.a.createElement(F,null))};r.a.render(o.a.createElement(i.a,{store:h},o.a.createElement(x,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.2fef2b5b.chunk.js.map