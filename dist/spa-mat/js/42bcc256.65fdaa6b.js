(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["42bcc256"],{"68e7":function(t,e,s){"use strict";s.r(e);var a=s("caea"),i=s("91f0");for(var n in i)"default"!==n&&function(t){s.d(e,t,function(){return i[t]})}(n);s("fea6");var r=s("2877"),o=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,null,null);o.options.__file="QuestView.vue",e["default"]=o.exports},"91f0":function(t,e,s){"use strict";s.r(e);var a=s("92d0"),i=s.n(a);for(var n in a)"default"!==n&&function(t){s.d(e,t,function(){return a[t]})}(n);e["default"]=i.a},"92d0":function(t,e,s){"use strict";var a=s("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(s("278c"));s("96cf");var n=a(s("c973")),r=a(s("3156"));s("7f7f");var o=a(s("d722")),c=s("2f62"),l=o.default.service("tree-view");console.log("QVTV",l);var d={data:function(){return{rightDrawerOpen:this.$q.platform.is.desktop}},beforeRouterUpdate:function(){var t=this;alert("Ssx"),console.info("Router","start"),setTimeout(function(){t.initialize.apply(t).then(function(){console.info("Router","done")})},500)},mounted:function(){var t=this.$route.params.id;this.$data.rightDrawerOpen=!1;var e=this;try{l.get(t).then(function(t){console.info("QuestTreeView",t);var s=t.img;if("statics/images/ibis/map_sm.png"===s||"statics/images/bookmark_sm.png"===s){var a=[];a.push(t),e.$store.commit("tree",a)}})}catch(t){console.log("QuestViewTreeError",t)}this.initialize()},watch:{$route:function(t,e){console.info("Going ",e,"to",t);try{var s=t.name,a=t.params.id;"questview"===s&&a&&this.initialize(a)}catch(t){console.error(t)}}},methods:(0,r.default)({initialize:function(){var t=(0,n.default)(regeneratorRuntime.mark(function t(){var e,s,a,n,r,o=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=o.length>0&&void 0!==o[0]?o[0]:null,this.$store.commit("questView",!0),console.info("QV-1",e),s=e||this.$route.params.id,console.info("Initialize","fetching data for ",e),t.prev=5,t.next=8,this.findConversations({query:{nodeId:s},depth:1});case 8:a=t.sent,console.info("Initialize","result",{result:a}),n=(0,i.default)(a.data,1),r=n[0],this.setCurrentConversation(r),console.info("Initialize","fetching data for ",s,"success"),console.info("SINGLE",JSON.stringify(r)),t.next=19;break;case 16:t.prev=16,t.t0=t["catch"](5),console.info("Initialize","fetching data for ",s,"error",t.t0);case 19:case"end":return t.stop()}},t,this,[[5,16]])}));return function(){return t.apply(this,arguments)}}()},(0,c.mapActions)("conversation",{findConversations:"find"}),(0,c.mapMutations)("conversation",{setCurrentConversation:"setCurrent"})),computed:(0,r.default)({},(0,c.mapGetters)({q:"conversation/current"}),{isAuthenticated:function(){return this.$store.getters.isAuthenticated},canEdit:function(){var t,e,s=this.$store.getters.isAdmin;console.info("CE-1",s);var a=this.$store.getters.user;return a&&(t=this.$store.getters.node.creator,e=a._id),console.info("CE-2",t,e),s||!!a&&t===e}})};e.default=d},ac4c:function(t,e,s){},caea:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.q?s("q-page",{attrs:{padding:!0}},[s("div",{attrs:{id:"topbox"}},[s("span",{staticStyle:{float:"right","font-size":"small"}},[s("a",{attrs:{href:"/userview/"+t.q.creator}},[t._v(t._s(t.q.handle))]),t._v("\n      "+t._s(t.q.date)+"\n    ")]),s("h4",[s("img",{staticStyle:{"margin-right":"4px"},attrs:{src:t.q.img}}),t._v("\n      "+t._s(t.q.label)+"\n    ")]),t.q.url?s("span",[s("b",[t._v("URL:")]),s("a",{attrs:{href:t.q.url}},[t._v(t._s(t.q.url))]),s("br"),s("br")]):t._e(),t.q.parentLabel?s("span",[s("b",[t._v("Responds to")]),s("router-link",{attrs:{to:{name:"questview",params:{id:t.q.parentId}}}},[t._v(t._s(t.q.parentLabel))])],1):t._e(),s("hr"),s("q-scroll-area",{staticClass:"details"},[s("div",{domProps:{innerHTML:t._s(t.q.details)}})])],1),t.canEdit?s("router-link",{staticStyle:{"margin-left":"20px"},attrs:{to:{name:"nodeupdate",params:{type:"update",id:t.q.nodeId}}}},[s("b",[t._v("Edit This Node")])]):t._e(),s("div",{staticClass:"columnscroller"},[s("div",{staticClass:"columncontainer"},[s("div",{staticClass:"columnx",staticStyle:{"text-align":"center"}},[s("img",{staticClass:"headerimage",attrs:{src:"statics/images/ibis/issue.png"}}),t._v("Questions\n        "),t.isAuthenticated?s("a",{attrs:{href:"/nodeedit/question/"+t.q.type+"/"+t.q.nodeId+"/"+t.q.label}},[s("img",{staticClass:"respond",attrs:{src:"statics/images/respond_sm.png"}})]):t._e()]),s("div",{staticClass:"columnx",staticStyle:{"text-align":"center"}},[s("img",{staticClass:"headerimage",attrs:{src:"statics/images/ibis/position.png"}}),t._v("Answers/Ideas\n        "),t.isAuthenticated?s("a",{attrs:{href:"/nodeedit/answer/"+t.q.type+"/"+t.q.nodeId+"/"+t.q.label}},[s("img",{staticClass:"respond",attrs:{src:"statics/images/respond_sm.png"}})]):t._e()]),s("div",{staticClass:"columnx",staticStyle:{"text-align":"center"}},[s("img",{staticClass:"headerimage",attrs:{src:"statics/images/ibis/plus.png"}}),t._v("Pro\n        "),t.isAuthenticated?s("a",{attrs:{href:"/nodeedit/pro/"+t.q.type+"/"+t.q.nodeId+"/"+t.q.label}},[s("img",{staticClass:"respond",attrs:{src:"statics/images/respond_sm.png"}})]):t._e()]),s("div",{staticClass:"columnx",staticStyle:{"text-align":"center"}},[s("img",{staticClass:"headerimage",attrs:{src:"statics/images/ibis/minus.png"}}),t._v("Con\n        "),t.isAuthenticated?s("a",{attrs:{href:"/nodeedit/con/"+t.q.type+"/"+t.q.nodeId+"/"+t.q.label}},[s("img",{staticClass:"respond",attrs:{src:"statics/images/respond_sm.png"}})]):t._e()]),s("div",{staticClass:"columnx",staticStyle:{"text-align":"center"}},[s("img",{staticClass:"headerimage",attrs:{src:"statics/images/tag.png"}}),t._v("Tags\n        "),t.isAuthenticated?s("a",{attrs:{href:"/tagform/"+t.q.nodeId}},[s("img",{staticClass:"respond",attrs:{src:"statics/images/respond_sm.png"}})]):t._e()]),s("div",{staticClass:"columnx",staticStyle:{"text-align":"center"}},[s("img",{staticClass:"headerimage",attrs:{src:"statics/images/link.png"}}),t._v("Connections\n            "),t.isAuthenticated?s("a",{attrs:{href:"/connectionform/"+t.q.id+"/"+t.q.label}},[s("img",{staticClass:"respond",attrs:{src:"statics/images/respond_sm.png"}})]):t._e()])]),s("div",{staticClass:"datacontainer"},[s("q-list",{staticClass:"datacolumn"},t._l(t.q.questions,function(e){return s("q-item",{key:e.nodeId,staticClass:"node wordwrap"},[s("router-link",{attrs:{to:{name:"questview",params:{id:e.nodeId}}}},[t._v(t._s(e.label))])],1)}),1),s("q-list",{staticClass:"datacolumn"},t._l(t.q.answers,function(e){return s("q-item",{key:e.nodeId,staticClass:"node"},[s("router-link",{attrs:{to:{name:"questview",params:{id:e.nodeId}}}},[t._v(t._s(e.label))])],1)}),1),s("q-list",{staticClass:"datacolumn"},t._l(t.q.pros,function(e){return s("q-item",{key:e.nodeId,staticClass:"node"},[s("router-link",{attrs:{to:{name:"questview",params:{id:e.nodeId}}}},[t._v(t._s(e.label))])],1)}),1),s("q-list",{staticClass:"datacolumn"},t._l(t.q.cons,function(e){return s("q-item",{key:e.nodeId,staticClass:"node"},[s("router-link",{attrs:{to:{name:"questview",params:{id:e.nodeId}}}},[t._v(t._s(e.label))])],1)}),1),s("q-list",{staticClass:"datacolumn"},t._l(t.q.tags,function(e){return s("q-item",{key:e.nodeId,staticClass:"node"},[s("router-link",{attrs:{to:{name:"tagview",params:{id:e.nodeId}}}},[t._v(t._s(e.label))])],1)}),1),s("q-list",{staticClass:"datacolumn"},t._l(t.q.relations,function(e){return s("q-item",{key:e.id,staticClass:"node"},[s("router-link",{attrs:{to:{name:"topicview",params:{id:e.id}}}},[t._v(t._s(e.label))])],1)}),1)],1)])],1):t._e()},i=[];a._withStripped=!0,s.d(e,"a",function(){return a}),s.d(e,"b",function(){return i})},fea6:function(t,e,s){"use strict";var a=s("ac4c"),i=s.n(a);i.a}}]);