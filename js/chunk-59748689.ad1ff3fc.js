(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-59748689"],{"4d63":function(t,i,e){var a=e("83ab"),n=e("da84"),o=e("94ca"),s=e("7156"),r=e("9bf2").f,l=e("241c").f,c=e("44e7"),u=e("ad6d"),h=e("9f7f"),d=e("6eeb"),m=e("d039"),g=e("69f3").set,f=e("2626"),p=e("b622"),b=p("match"),v=n.RegExp,D=v.prototype,y=/a/g,w=/a/g,_=new v(y)!==y,x=h.UNSUPPORTED_Y,C=a&&o("RegExp",!_||x||m((function(){return w[b]=!1,v(y)!=y||v(w)==w||"/a/i"!=v(y,"i")})));if(C){var V=function(t,i){var e,a=this instanceof V,n=c(t),o=void 0===i;if(!a&&n&&t.constructor===V&&o)return t;_?n&&!o&&(t=t.source):t instanceof V&&(o&&(i=u.call(t)),t=t.source),x&&(e=!!i&&i.indexOf("y")>-1,e&&(i=i.replace(/y/g,"")));var r=s(_?new v(t,i):v(t,i),a?this:D,V);return x&&e&&g(r,{sticky:e}),r},Y=function(t){t in V||r(V,t,{configurable:!0,get:function(){return v[t]},set:function(i){v[t]=i}})},S=l(v),O=0;while(S.length>O)Y(S[O++]);D.constructor=V,V.prototype=D,d(n,"RegExp",V)}f("RegExp")},9734:function(t,i,e){},b334:function(t,i,e){"use strict";e("4de4"),e("d81d"),e("b680");var a=e("c8d5"),n=e("70f2"),o=e("8946");function s(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,e=[];if(t=t.map((function(t){return[a(t[0],new Date),t[1]]})).filter((function(t,i,e){return!(i-1>=0&&e[i-1][1]==e[i][1])})),t.length<=1)return t;var s=t[0][0],r=n(s,"YYYY-MM-DD"),l=a(r,"YYYY-MM-DD",new Date),c=t[t.length-1][0],u=n(c,"YYYY-MM-DD"),h=0,d=1;while(u!=r){l=o(l,1),r=n(l,"YYYY-MM-DD");while(d+1<t.length&&t[d][0]<l)d++;while(h+2<t.length&&t[h+1][0].getTime()<l)h++;var m=t[d][1],g=t[d][0],f=t[h][1],p=t[h][0],b=f+(l-p)/(g-p)*(m-f);isNaN(b)||e.push([r,b])}var v=[],D=i;while(D<e.length){var y=e[D][1]-e[D-i][1];y=y>1||y<-1?Math.round(y):y.toFixed(2),v.push([e[D-1][0],y]),D++}return v}i["a"]=s},b44d:function(t,i,e){"use strict";e("4de4"),e("d81d"),e("b0c0"),e("4d63"),e("ac1f"),e("25f0"),e("5319");var a=e("191f"),n=e("70f2"),o=e.n(n);function s(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"line",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"YYYY-MM-DD HH:mm";if(0!=t.length){var n=t.map((function(t){var e=(new Date).getTimezoneOffset()/60,a=-8-e;t[0]=t[0].map((function(t){var i;return"string"==typeof t[0]?(i=new Date(t[0].replace(new RegExp(/-/gm),"/")),i.setHours(i.getHours()+a)):i=t[0],[i,t[1]]}));var n={name:t[1],data:t[0],smooth:!1,showSymbol:!1,color:t[2]};return"area"==i?(n.type="line",n.name+="增长",n.areaStyle={color:t[2]+"33"}):n.type=i,n})),s={legend:{selectedMode:"single"},grid:{left:"10px",right:"50px",top:"30px",containLabel:!0},dataZoom:[{type:"inside",filterMode:"weakFilter"},{handleSize:"100%",handleStyle:{},bottom:"20px"}],tooltip:{trigger:"axis",confine:!0,axisPointer:{label:{formatter:function(t){return o()(t.value,e)}}}},xAxis:{type:"time",axisPointer:{label:{formatter:function(t){return"日期："+o()(t.value,e)}}}},yAxis:[{type:"value",min:function(t){return t.min>0&&"area"==i?0:t.min},axisLabel:{formatter:a["a"]}}],series:n.filter((function(t){return 0!=t.data.length}))};return s}}i["a"]=s},e7a1:function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("VContainer",[void 0!=t.bangumiDetail?e("VRow",{attrs:{cols:"12",dense:""}},[e("VCol",[t.$vuetify.breakpoint.mdAndDown?e("BiliobBangumiInfo",{attrs:{"bangumi-info":t.bangumiDetail}}):e("VCard",[e("VCardText",[e("VRow",{staticClass:"pa-0"},[e("VCol",{attrs:{cols:"auto"}},[e("VImg",{staticStyle:{"border-radius":"5px"},attrs:{src:t.bangumiDetail.cover,height:"240px",width:"180px"}})],1),e("VCol",[t.bangumiDetail.score?e("div",{staticClass:"text-center",staticStyle:{position:"absolute",right:"16px"}},[e("VRow",{attrs:{"no-gutters":""}},[e("VSpacer"),e("VCol",{attrs:{cols:"auto"}},[e("h3",{class:"display-1 "+t.scoreColor+" font-weight-black"},[t._v(" "+t._s(t.bangumiDetail.score)+" ")]),e("div",{staticClass:"caption"},[t._v(" "+t._s(t.$numberFormat(t.bangumiDetail.scoreCount))+"人评分 ")])])],1)],1):t._e(),e("h2",[t._v(" "+t._s(t.bangumiDetail.name)+" "),e("div",{staticClass:"caption"},[t._v(" "+t._s(t.bangumiDetail.foreignName)+" ")])]),e("br"),e("div",{staticClass:"caption"},[e("BiliobBangumiType",{attrs:{type:t.bangumiDetail.type}}),e("BiliobBangumiCopyright",{attrs:{copyright:t.bangumiDetail.copyright,charge:t.bangumiDetail.charge}}),e("VChip",{staticClass:"px-1 mr-2",staticStyle:{"vertical-align":"unset"},attrs:{color:"primary",label:"",outlined:"","x-small":""}},[t._v(" "+t._s(t.bangumiDetail.area)+" ")]),e("BiliobBangumiStatus",{attrs:{state:t.bangumiDetail.state,finished:t.bangumiDetail.finished,serializing:t.bangumiDetail.serializing}}),e("div",{staticClass:"mt-2"},[t._v(" 发布时间: "+t._s(t.$timeFormat(t.bangumiDetail.pubDate,"YYYY-MM-DD HH:mm:ss"))+" ")]),e("div",[t._v(" 数据更新: "+t._s(t.$timeFormat(t.bangumiDetail.updateTime,"YYYY-MM-DD HH:mm:ss"))+" ")]),e("VRow",[e("VCol",{attrs:{cols:"auto"}},[e("VTooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(i){var a=i.on;return[e("VIcon",t._g({},a),[t._v(" mdi-play-circle-outline ")])]}}],null,!1,3154718872)},[e("span",[t._v(t._s(t.bangumiDetail.cView))])]),e("span",{staticStyle:{"vertical-align":"middle"}},[t._v(" "+t._s(t.$numberFormat(t.bangumiDetail.cView))+" ")])],1),e("VCol",{attrs:{cols:"auto"}},[e("VTooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(i){var a=i.on;return[e("VIcon",t._g({},a),[t._v(" mdi-coin ")])]}}],null,!1,1459263845)},[e("span",[t._v(t._s(t.bangumiDetail.cCoin))])]),e("span",{staticStyle:{"vertical-align":"middle"}},[t._v(" "+t._s(t.$numberFormat(t.bangumiDetail.cCoin))+" ")])],1),e("VCol",{attrs:{cols:"auto"}},[e("VTooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(i){var a=i.on;return[e("VIcon",t._g({},a),[t._v(" mdi-heart ")])]}}],null,!1,58317988)},[e("span",[t._v("新版："+t._s(t.bangumiDetail.newFollow)+"，旧版："+t._s(t.bangumiDetail.oldFollow)+"，系列："+t._s(t.bangumiDetail.bangumiHistoryData[t.bangumiDetail.bangumiHistoryData.length-1].followSeries))])]),e("span",{staticStyle:{"vertical-align":"middle"},attrs:{alt:"123"}},[t._v(" "+t._s(t.$numberFormat(t.bangumiDetail.oldFollow>t.bangumiDetail.newFollow?t.bangumiDetail.oldFollow:t.bangumiDetail.newFollow))+" ")])],1)],1)],1)])],1)],1)],1)],1),e("VCol",{attrs:{cols:"12"}},[e("MainDetailCharts",{attrs:{title:"专题历史数据",options:t.totalOptions}})],1),e("VCol",{attrs:{cols:"12"}},[e("MainDetailCharts",{attrs:{title:"专题周增数据",options:t.rateOptions}})],1)],1):t._e()],1)},n=[],o=(e("4160"),e("d81d"),e("a9e3"),e("159b"),e("b44d")),s=e("b334"),r={data:function(){return{bangumiDetail:{}}},computed:{scoreColor:function(){return this.bangumiDetail.score>9?"red--text":this.bangumiDetail.score>8?"red--text text--lighten-2":this.bangumiDetail.score>7?"yellow--text ":(this.bangumiDetail.score,"green--text")},datus:function(){var t=this;if(void 0==this.bangumiDetail.bangumiHistoryData)return[];var i=[["play","播放","#2b821d"],["danmaku","弹幕","#005eaa"],["coin","硬币","#32a487"],["followSeries","系列追番","#884422"],["followOld","旧版追番","#DD77aa"],["followNew","新版追番","#2288cc"],["undertake","承包","#444499"],["rate","评分","#c12e34"],["rateCount","评分人数","#f6dd00"]],e=i.map((function(t){return[[],t[1],t[2]]})).sort((function(i,e){return t.$dateParse(i)-t.$dateParse(e)}));return this.bangumiDetail.bangumiHistoryData.forEach((function(a){for(var n=0;n<i.length;n++){var o=i[n][0];a[o]>0&&e[n][0].push([t.$timeFormat(a.datetime,"YYYY-MM-DD HH:mm:ss"),a[o]])}})),e},totalOptions:function(){return Object(o["a"])(this.datus)},rateOptions:function(){var t=this.datus.map((function(t){return t[0]=Object(s["a"])(t[0],7),t}));return Object(o["a"])(t,"area")}},mounted:function(){var t=this;this.bangumiDetail=this.$db.bangumi.detail[Number(this.$route.params.sid)],void 0!=this.bangumiDetail&&void 0!=this.bangumiDetail.bangumiHistoryData||this.axios.get("/damn-you/bangumi/detail?sid=".concat(this.$route.params.sid)).then((function(i){t.$db.bangumi.detail[Number(t.$route.params.sid)]=i.data,t.bangumiDetail=i.data}))}},l=r,c=e("2877"),u=e("6544"),h=e.n(u),d=e("b0af"),m=e("99d9"),g=e("cc20"),f=e("62ad"),p=e("a523"),b=e("132d"),v=e("adda"),D=e("0fd9"),y=e("2fa4"),w=e("fc11"),_=(e("9734"),e("4ad4")),x=e("a9ad"),C=e("16b7"),V=e("b848"),Y=e("75eb"),S=e("f573"),O=e("f2e7"),M=e("80d2"),T=e("d9bd"),$=e("58df"),F=Object($["a"])(x["a"],C["a"],V["a"],Y["a"],S["a"],O["a"]).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,i=t.activator,e=t.content,a=!this.bottom&&!this.left&&!this.top&&!this.right,n=!1!==this.attach?i.offsetLeft:i.left,o=0;return this.top||this.bottom||a?o=n+i.width/2-e.width/2:(this.left||this.right)&&(o=n+(this.right?i.width:-e.width)+(this.right?10:-10)),this.nudgeLeft&&(o-=parseInt(this.nudgeLeft)),this.nudgeRight&&(o+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(o,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,i=t.activator,e=t.content,a=!1!==this.attach?i.offsetTop:i.top,n=0;return this.top||this.bottom?n=a+(this.bottom?i.height:-e.height)+(this.bottom?10:-10):(this.left||this.right)&&(n=a+i.height/2-e.height/2),this.nudgeTop&&(n-=parseInt(this.nudgeTop)),this.nudgeBottom&&(n+=parseInt(this.nudgeBottom)),"".concat(this.calcYOverflow(n+this.pageYOffset),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(M["g"])(this.maxWidth),minWidth:Object(M["g"])(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(M["t"])(this,"activator",!0)&&Object(T["b"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,i=_["a"].options.methods.genActivatorListeners.call(this);return i.focus=function(i){t.getActivator(i),t.runDelay("open")},i.blur=function(i){t.getActivator(i),t.runDelay("close")},i.keydown=function(i){i.keyCode===M["x"].esc&&(t.getActivator(i),t.runDelay("close"))},i},genTransition:function(){var t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(w["a"])(t,this.contentClass,!0),Object(w["a"])(t,"menuable__content__active",this.isActive),Object(w["a"])(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var i=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[i.genTransition()]})),this.genActivator()])}}),k=Object(c["a"])(l,a,n,!1,null,null,null);i["default"]=k.exports;h()(k,{VCard:d["a"],VCardText:m["b"],VChip:g["a"],VCol:f["a"],VContainer:p["a"],VIcon:b["a"],VImg:v["a"],VRow:D["a"],VSpacer:y["a"],VTooltip:F})}}]);