(function(t){function e(e){for(var s,i,o=e[0],c=e[1],u=e[2],l=0,p=[];l<o.length;l++)i=o[l],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(e);while(p.length)p.shift()();return r.push.apply(r,u||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(s=!1)}s&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},n={app:0},r=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="https://nidzajov.github.io/vezbe-repo/VueVezbe/tasks-app/dist/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var d=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"04ed":function(t,e,a){},"0664":function(t,e,a){},"0a91":function(t,e,a){"use strict";a("83e8")},3053:function(t,e,a){"use strict";a("74e4")},"4b62":function(t,e,a){"use strict";a("04ed")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},r=[],i={name:"App"},o=i,c=(a("b77a"),a("783c"),a("2877")),u=Object(c["a"])(o,n,r,!1,null,"f8b0e1a6",null),d=u.exports,l=a("2f62"),p=a("1da1"),h=(a("96cf"),a("498a"),a("d3b7"),a("a434"),"http://localhost:3000"),m={namespaced:!0,state:{searchParams:{searchText:"",hideCompleted:!1},tasksData:null},actions:{getTasksApi:function(t){return Object(p["a"])(regeneratorRuntime.mark((function e(){var a,s,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit("setAllTasks",null),a="".concat(h,"/tasks?"),t.state.searchParams.hideCompleted&&(a+="done=".concat(!t.state.searchParams.hideCompleted)),t.state.searchParams.searchText.trim().length>0&&(a+="&q=".concat(t.state.searchParams.searchText.trim())),e.next=6,fetch(a);case 6:if(s=e.sent,!s.ok){e.next=12;break}return e.next=10,s.json();case 10:n=e.sent,t.commit("setAllTasks",n);case 12:case"end":return e.stop()}}),e)})))()},deleteTask:function(t,e){return Object(p["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,fetch("".concat(h,"/tasks/").concat(e),{method:"DELETE"});case 2:s=a.sent,s.ok&&t.dispatch("getTasksApi");case 4:case"end":return a.stop()}}),a)})))()},editTask:function(t,e){return Object(p["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,fetch("".concat(h,"/tasks/").concat(e.id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});case 2:s=a.sent,s.ok&&t.dispatch("getTasksApi");case 4:case"end":return a.stop()}}),a)})))()},addTask:function(t,e){return Object(p["a"])(regeneratorRuntime.mark((function a(){var s,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return s={text:e,done:!1},a.next=3,fetch("".concat(h,"/tasks"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});case 3:n=a.sent,n.ok&&t.dispatch("getTasksApi");case 5:case"end":return a.stop()}}),a)})))()},setSearchParams:function(t,e){t.commit("setParams",e),t.dispatch("getTasksApi")}},mutations:{spliceTask:function(t,e){t.tasksData.splice(e,1)},pushTask:function(t,e){t.tasksData.push(e)},setParams:function(t,e){t.searchParams=e},setAllTasks:function(t,e){t.tasksData=e}}};s["a"].use(l["a"]);var k=new l["a"].Store({state:{},mutations:{},actions:{},getters:{},modules:{tasks:m}}),f=a("8c4f"),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mainContainer"},[a("h1",{staticClass:"title"},[t._v("Tasks App")]),a("router-view",{attrs:{name:"helper"}}),a("router-view")],1)},x=[],b=a("5530"),T={name:"MainContainer",created:function(){this.getTasksApi()},methods:Object(b["a"])({},Object(l["b"])("tasks",["getTasksApi"]))},y=T,g=(a("0a91"),Object(c["a"])(y,v,x,!1,null,"f76269fa",null)),w=g.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"task-form pl"},[a("div",{staticClass:"form-add"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.taskText,expression:"taskText"}],staticClass:"task-text ps",attrs:{type:"text",placeholder:"Add a new task"},domProps:{value:t.taskText},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTaskHandler.apply(null,arguments)},input:function(e){e.target.composing||(t.taskText=e.target.value)}}}),a("my-button",{on:{click:t.addTaskHandler}},[t._v("Add")]),a("my-button",{on:{click:function(e){t.showSearch=!t.showSearch}}},[a("span",{directives:[{name:"show",rawName:"v-show",value:!t.showSearch,expression:"!showSearch"}]}),a("span",{directives:[{name:"show",rawName:"v-show",value:t.showSearch,expression:"showSearch"}]},[t._v("V")])])],1),t.showSearch?a("div",{staticClass:"form-search"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],staticClass:"task-text search-text ps",attrs:{type:"text",placeholder:"Search..."},domProps:{value:t.searchText},on:{keyup:t.changeInputHandler,input:function(e){e.target.composing||(t.searchText=e.target.value)}}}),a("label",{staticClass:"filter"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.hideCompleted,expression:"hideCompleted"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.hideCompleted)?t._i(t.hideCompleted,null)>-1:t.hideCompleted},on:{change:[function(e){var a=t.hideCompleted,s=e.target,n=!!s.checked;if(Array.isArray(a)){var r=null,i=t._i(a,r);s.checked?i<0&&(t.hideCompleted=a.concat([r])):i>-1&&(t.hideCompleted=a.slice(0,i).concat(a.slice(i+1)))}else t.hideCompleted=n},t.changeInputHandler]}}),t._v(" Hide ")])]):t._e()])},C=[],O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"task-button ps",on:{click:t.emitClick}},[t._t("default",(function(){return[t._v("Submit")]}))],2)},j=[],P={name:"MyButton",props:{stop:{type:Boolean,default:!1}},methods:{emitClick:function(t){this.stop&&t.stopPropagation(),this.$emit("click")}}},A=P,S=(a("4b62"),Object(c["a"])(A,O,j,!1,null,"94cab632",null)),E=S.exports,$={name:"TaskForm",components:{MyButton:E},data:function(){return{taskText:"",showSearch:!1,searchText:"",hideCompleted:!1}},methods:Object(b["a"])(Object(b["a"])({},Object(l["b"])("tasks",["addTask","setSearchParams"])),{},{changeInputHandler:function(){this.setSearchParams({searchText:this.searchText,hideCompleted:this.hideCompleted})},addTaskHandler:function(){this.addTask(this.taskText),this.taskText="",this.goToList()},goToList:function(){this.$router.push({name:"TaskList"})}})},M=$,N=(a("9304"),Object(c["a"])(M,_,C,!1,null,"2b440c0c",null)),D=N.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"task-list"},[t._l(t.tasksData,(function(t){return a("single-task",{key:t.id,attrs:{id:t.id,text:t.text}})})),a("my-button",{on:{click:t.openNewTask}},[t._v("Add new task")])],2)},R=[],H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.task?a("div",{staticClass:"single-task ps",on:{click:t.toggleDone}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.task.done,expression:"task.done"}],staticClass:"check-box",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.task.done)?t._i(t.task.done,null)>-1:t.task.done},on:{change:function(e){var a=t.task.done,s=e.target,n=!!s.checked;if(Array.isArray(a)){var r=null,i=t._i(a,r);s.checked?i<0&&t.$set(t.task,"done",a.concat([r])):i>-1&&t.$set(t.task,"done",a.slice(0,i).concat(a.slice(i+1)))}else t.$set(t.task,"done",n)}}}),t.editMode?t._e():a("span",{staticClass:"text",class:t.spanClass},[t._v(" "+t._s(t.task.text)+" ")]),t.editMode?a("input",{directives:[{name:"model",rawName:"v-model",value:t.editedText,expression:"editedText"}],staticClass:"text",attrs:{type:"text"},domProps:{value:t.editedText},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.saveEdit.apply(null,arguments)},click:function(t){t.stopPropagation()},input:function(e){e.target.composing||(t.editedText=e.target.value)}}}):t._e(),a("my-button",{directives:[{name:"show",rawName:"v-show",value:!t.editMode,expression:"!editMode"}],attrs:{stop:!0},on:{click:t.startEdit}},[t._v("Edit")]),a("my-button",{directives:[{name:"show",rawName:"v-show",value:t.editMode,expression:"editMode"}],attrs:{stop:!0},on:{click:t.cancelEdit}},[t._v("Cancel")]),a("my-button",{attrs:{stop:!0},on:{click:t.handleDelete}},[t._v("X")])],1):t._e()},B=[],I=(a("a9e3"),a("7db0"),a("b0c0"),{name:"SingleTask",components:{MyButton:E},props:{id:{type:Number,required:!0},text:{type:String,required:!1}},data:function(){return{editedText:this.text}},methods:Object(b["a"])(Object(b["a"])({},Object(l["b"])("tasks",["deleteTask","editTask"])),{},{toggleDone:function(){this.task.done=!this.task.done,this.editTask({id:this.task.id,text:this.task.text,done:this.task.done})},handleDelete:function(){this.deleteTask(this.task.id)},startEdit:function(){this.$router.push({name:"EditTask",params:{id:this.task.id,text:this.task.text}})},cancelEdit:function(){this.$router.push({name:"TaskList"})},saveEdit:function(){this.editTask({id:this.task.id,text:this.editedText,done:this.task.done}),this.editedText="",this.$router.push({name:"TaskList"})}}),computed:Object(b["a"])(Object(b["a"])({},Object(l["c"])("tasks",["tasksData"])),{},{spanClass:function(){return{"is-checked":this.task.done}},task:function(){var t=this;if(this.tasksData){var e=this.tasksData.find((function(e){return e.id===t.id}));return e}return!1},editMode:function(){return"EditTask"===this.$route.name}})}),J=I,q=(a("3053"),Object(c["a"])(J,H,B,!1,null,"7fb9b69a",null)),z=q.exports,F={name:"TaskList",components:{SingleTask:z,MyButton:E},computed:Object(b["a"])({},Object(l["c"])("tasks",["tasksData"])),methods:{openNewTask:function(){this.$router.push({name:"TaskAdd"})}}},V=F,G=Object(c["a"])(V,L,R,!1,null,"55d31ff0",null),U=G.exports,X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v(" 404 Not Found "),a("router-link",{attrs:{to:{name:"TaskList"},tag:"button"}},[t._v(" Go to home page ")])],1)},K=[],Q={name:"NotFound"},W=Q,Y=Object(c["a"])(W,X,K,!1,null,null,null),Z=Y.exports;s["a"].use(f["a"]);var tt=[{path:"/",name:"Root",component:w,redirect:"/list",children:[{path:"list",name:"TaskList",components:{default:U,helper:!1}},{path:"list/add",name:"TaskAdd",components:{default:U,helper:D}},{path:"list/edit/:id",name:"EditTask",components:{default:z,helper:!1},props:{default:function(t){return{id:parseInt(t.params.id,10),text:t.params.text}},helper:!1}}]},{path:"/*",component:Z}],et=new f["a"]({routes:tt,mode:"history"}),at=et;s["a"].config.productionTip=!1;var st=new s["a"]({store:k,router:at,render:function(t){return t(d)}});st.$mount("#app")},"74e4":function(t,e,a){},"783c":function(t,e,a){"use strict";a("b9af")},"83e8":function(t,e,a){},9304:function(t,e,a){"use strict";a("a501")},a501:function(t,e,a){},b77a:function(t,e,a){"use strict";a("0664")},b9af:function(t,e,a){}});
//# sourceMappingURL=app.3d540739.js.map