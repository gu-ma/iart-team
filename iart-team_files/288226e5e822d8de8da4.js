(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{343:function(t,e,n){"use strict";n.r(e);n(12),n(10),n(19);var r=n(16),o=n.n(r),l={head:function(){return{title:"iart - "+this.historyBlocks.title.toLowerCase()}},transition:"fade",data:function(){return{historyBlocks:[]}},asyncData:function(t){var e,n,r;return regeneratorRuntime.async((function(l){for(;;)switch(l.prev=l.next){case 0:return e=t.app,l.next=3,regeneratorRuntime.awrap(o()({method:"POST",url:"https://prolog.iart.ch/api",data:{query:'{\n\t\t\t\t\tentries(section: ["history"], site : "'+e.i18n.locale+'") {\n\t\t\t\t\t\ttitle\n\t\t\t\t\t\t... on history_history_Entry {\n\t\t\t\t\t\t\thistoryBlock {\n\t\t\t\t\t\t\t\t...on historyBlock_year_BlockType {\n\t\t\t\t\t\t\t\t\ttypeHandle\n\t\t\t\t\t\t\t\t\tyear\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t... on historyBlock_hardFacts_BlockType {\n\t\t\t\t\t\t\t\t\ttypeHandle\n\t\t\t\t\t\t\t\t\thardFacts\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t... on historyBlock_milestone_BlockType {\n\t\t\t\t\t\t\t\t\ttypeHandle\n\t\t\t\t\t\t\t\t\tmilestone\n\t\t\t\t\t\t\t\t\timages {\n                                        url @transform(handle : "medium")\n                                        width\n                                        height\n\t\t\t\t\t\t\t\t\t\t ... on history_Asset {\n\t\t\t\t\t\t\t\t\t\t\talignRight\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}'}}));case 3:return n=l.sent,r=n.data.data.entries[0],l.abrupt("return",{historyBlocks:r});case 6:case"end":return l.stop()}}))}},c=n(23),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"about about--history"},[n("h1",{staticClass:"section-title"},[t._v(t._s(t.historyBlocks.title))]),t._v(" "),n("div",{staticClass:"history-wrapper"},[t._l(t.historyBlocks.historyBlock,(function(e){return["year"==e.typeHandle?n("div",{directives:[{name:"in-viewport",rawName:"v-in-viewport"}],staticClass:"year"},[t._v("\n                "+t._s(e.year)+"\n            ")]):"hardFacts"==e.typeHandle?n("div",{directives:[{name:"in-viewport",rawName:"v-in-viewport"}],staticClass:"hard-facts"},[n("div",{domProps:{innerHTML:t._s(e.hardFacts)}},[t._v(t._s(e.hardFacts))])]):"milestone"==e.typeHandle?n("div",{directives:[{name:"in-viewport",rawName:"v-in-viewport"}],staticClass:"milestone"},[n("div",{domProps:{innerHTML:t._s(e.milestone)}},[t._v(t._s(e.milestone))]),t._v(" "),n("div",{staticClass:"images"},t._l(e.images,(function(img){return n("figure",{directives:[{name:"in-viewport",rawName:"v-in-viewport"}],class:{right:img.alignRight}},[n("img",{class:{portrait:img.height>img.width},attrs:{src:img.url,alt:""}})])})),0)]):t._e()]})),t._v(" "),n("span",{staticClass:"line"})],2)])}),[],!1,null,null,null);e.default=component.exports}}]);