(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{339:function(t,n,e){"use strict";e.r(n);e(12),e(10),e(19);var c=e(16),o=e.n(c),r={meta:{title:"Contact"},transition:"fade",data:function(){return{contactContent:{}}},asyncData:function(t){var n,e,c;return regeneratorRuntime.async((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.app,r.next=3,regeneratorRuntime.awrap(o()({method:"POST",url:"https://prolog.iart.ch/api",data:{query:'{\n\t\t\t\t        entries(section: ["contact"], site : "'+n.i18n.locale+'") {\n\t\t\t\t      \t... on contact_contact_Entry {\n                            contact\n                            contactLocation\n                            }\n\t\t\t\t        }\n\t\t\t\t}'}}));case 3:return e=r.sent,c=e.data.data.entries[0],r.abrupt("return",{contactContent:c});case 6:case"end":return r.stop()}}))}},l=e(23),component=Object(l.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("article",{staticClass:"contact-page additional-page"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"flex-container"},[e("div",{domProps:{innerHTML:t._s(t.contactContent.contact)}},[t._v(t._s(t.contactContent.contact))]),t._v(" "),e("div",{domProps:{innerHTML:t._s(t.contactContent.contactLocation)}},[t._v(t._s(t.contactContent.contactLocation))])])])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("header",[n("h1",[this._v("Kontakt")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"responsive-map-container"},[n("iframe",{staticStyle:{border:"0"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d21533.883381681626!2d7.575502!3d47.572936!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xeca54cf06c262dd9!2siart%20ag!5e0!3m2!1sen!2sch!4v1579269568618!5m2!1sen!2sch",frameborder:"0",allowfullscreen:""}})])}],!1,null,null,null);n.default=component.exports}}]);