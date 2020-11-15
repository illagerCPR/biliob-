(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ab41a"],{1500:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("VContainer",[void 0!=e.videoData?a("VRow",{attrs:{dense:""}},[a("VCol",{attrs:{cols:"12",md:"7"}},[a("VideoDetailTitle",{attrs:{title:e.videoData.title,aid:e.videoData.aid,pic:e.videoData.pic,bv:e.videoData.bvid}})],1),a("VCol",{attrs:{cols:"12",md:"5"}},[a("AuthorInfo",{staticStyle:{height:"100%"},attrs:{"author-data":e.videoData.author}})],1)],1):e._e(),void 0!=e.videoData?a("VRow",{attrs:{dense:""}},[a("VCol",{attrs:{cols:"12"}},[a("BiliobVideoOperation",{staticClass:"mb-2",attrs:{slot:"video-to-bilibili",aid:e.videoData.aid,pic:e.videoData.pic,title:e.videoData.title},slot:"video-to-bilibili"})],1)],1):e._e(),a("VRow",{attrs:{dense:""}},[a("VCol",{attrs:{cols:"12"}},[a("DetailCharts",{staticClass:"mb-2",attrs:{title:"视频详细历史数据",options:e.mainChart}}),a("DetailCharts",{staticClass:"mb-2",attrs:{slot:"like-rate",title:"各指标比率统计",options:e.likeRateChart},slot:"like-rate"}),e.hasDanmakuAggregate?a("BiliobCard",{staticClass:"mb-2",attrs:{slot:"danmaku-switch",light:"",border:"bottom",title:"弹幕统计-分P选择"},slot:"danmaku-switch"},[a("div",[a("VSelect",{staticClass:"mb-2",attrs:{solo:"","prepend-inner-icon":"mdi-video-outline",items:e.pageItems,messages:"<span>选择分P</span><span style='float: right'>更新时间: "+e.danmakuUpdateTime+"</span>"},on:{change:e.pageChange},model:{value:e.defaultPage,callback:function(t){e.defaultPage=t},expression:"defaultPage"}})],1)]):e._e(),e.hasDanmakuAggregate?a("DetailCharts",{staticClass:"mb-2",attrs:{slot:"danmaku-density",options:e.danmakuDensityOptions,title:"弹幕统计-弹幕密度"},slot:"danmaku-density"}):e._e(),e.hasDanmakuAggregate?a("DetailCharts",{staticClass:"mb-2",attrs:{slot:"danmaku-cloud",title:"弹幕统计-弹幕云关键词",options:e.wordCloudOptions},slot:"danmaku-cloud"}):e._e()],1)],1)],1)},n=[],o=(a("99af"),a("fb6a"),a("2344")),s=a("bfa6"),r=a("17b5"),d=(a("4160"),a("ac1f"),a("5319"),a("159b"),a("c8d5")),l=a("70f2"),u=a("216f"),m=u.convertDateToUTC;function c(e){var t=d(e.data[e.data.length-1].datetime)-d(e.datetime);t<2592e6&&e.data.unshift({view:0,danmaku:0,like:0,dislike:0,share:0,favorite:0,coin:0,datetime:e.datetime}),e.data.sort((function(e,t){return new Date(e.datetime.replace("+00:00",""))-new Date(t.datetime.replace("+00:00",""))}));var a={title:{left:"center",top:"-5px"},dataset:{source:e.data},dataZoom:[{type:"inside",filterMode:"weakFilter"},{handleSize:"100%",handleStyle:{},bottom:"10px"}],tooltip:{confine:!0,trigger:"axis",axisPointer:{label:{formatter:function(e){return Math.round(e.value)}}},formatter:function(e){var t=e[0].axisValueLabel,a=[];return e.forEach((function(e){null!=e.data[e.seriesId]&&a.push([e.seriesName,e.color,e.data[e.seriesId]])})),a.sort((function(e,t){return t[2]-e[2]})).forEach((function(e){t+='<div>\n          <span style="color:'.concat(e[1],';width:10px;height:10px"> ● </span>\n          <span">').concat(e[0],": ").concat(e[2],"</span> \n          </div>\n          ")})),t}},grid:{left:"10px",right:"10px",top:"10px",containLabel:!0},xAxis:{type:"time",axisPointer:{label:{formatter:function(e){return"日期："+l(m(new Date(e.value)),"YYYY-MM-DD HH:mm")}}}},yAxis:[{type:"value",name:"其他指标",min:"dataMin",splitLine:{show:!1},axisLabel:{formatter:function(e){return e>1e4?Math.round(e/100)/100+"万":e}}},{type:"value",name:"播放量",splitLine:{show:!1},min:"dataMin",axisLabel:{formatter:function(e){return e>1e4?Math.round(e/100)/100+"万":e}}}],series:[{type:"line",dimensions:["datetime","view"],name:"播放",id:"view",smooth:!1,showSymbol:!1,yAxisIndex:1},{type:"line",dimensions:["datetime","danmaku"],name:"弹幕",id:"danmaku",smooth:!1,showSymbol:!1,yAxisIndex:0},{type:"line",dimensions:["datetime","coin"],name:"硬币",id:"coin",smooth:!1,showSymbol:!1,yAxisIndex:0},{type:"line",dimensions:["datetime","favorite"],name:"收藏",id:"favorite",smooth:!1,showSymbol:!1,yAxisIndex:0},{type:"line",dimensions:["datetime","share"],name:"分享",id:"share",smooth:!1,showSymbol:!1,yAxisIndex:0},{type:"line",dimensions:["datetime","like"],name:"点赞",id:"like",smooth:!1,showSymbol:!1,yAxisIndex:0}]};return a}var h=c;function p(e){var t={title:[{left:"50%",top:"40%",textAlign:"center",subtext:"各维度数据比较"}],tooltip:{trigger:"item",confine:!0,formatter:"{a} <br/>{b} : {c} ({d}%)"},series:[{type:"pie",selectedOffset:1,name:"弹幕率（弹幕数:百次播放）",radius:["25%","30%"],center:["50%","25%"],hoverOffset:2,emphasis:{},label:{position:"inner"},data:[{value:e.cView/100,selected:!0,name:"百次播放"},{value:e.cDanmaku,name:"弹幕",selected:!0}]},{type:"pie",selectedOffset:1,name:"硬币率（硬币数:百次播放）",radius:["25%","30%"],center:["75%","25%"],hoverOffset:2,emphasis:{},label:{position:"inner"},data:[{value:e.cView/100,selected:!0,name:"百次播放"},{value:e.cCoin,name:"硬币",selected:!0}]},{type:"pie",selectedOffset:1,name:"收藏率（收藏数:百次播放）",radius:["25%","30%"],center:["75%","75%"],hoverOffset:2,emphasis:{},label:{position:"inner"},data:[{value:e.cView/100,selected:!0,name:"百次播放"},{value:e.cFavorite,name:"收藏",selected:!0}]},{type:"pie",selectedOffset:1,name:"分享率（分享数:百次播放）",radius:["25%","30%"],center:["50%","75%"],hoverOffset:2,emphasis:{},label:{position:"inner"},data:[{value:e.cView/100,selected:!0,name:"百次播放"},{value:e.cShare,name:"分享",selected:!0}]},{type:"pie",selectedOffset:1,name:"点赞率（点赞数:百次播放）",radius:["25%","30%"],center:["25%","75%"],hoverOffset:2,emphasis:{},label:{position:"inner"},data:[{value:e.cView/100,selected:!0,name:"百次播放"},{value:e.cLike,name:"点赞",selected:!0}]},{type:"pie",selectedOffset:1,name:"三维(点赞：硬币：收藏)",radius:["25%","30%"],center:["25%","25%"],hoverOffset:2,emphasis:{},label:{position:"inner"},data:[{value:e.cLike,name:"点赞",selected:!0},{value:e.cCoin,name:"硬币",selected:!0},{value:e.cFavorite,name:"收藏",selected:!0}]}]};return t}var f=p;function v(e){var t=[],a=0,i=0;for(var n in e)a+=e[n],i+=1,t.push({name:n,value:e[n]});var o=a/i,s=64;o<=.06?s=92:o<=.07?s=88:o<=.08?s=84:o<=.09?s=80:o<=.1?s=76:o<=.11?s=72:o<=.12&&(s=68);var r={title:[{}],tooltip:{trigger:"item",confine:!0,formatter:"{a} <br/>{b}"},series:[{name:"关键词",type:"wordCloud",shape:function(e){return Math.min(1/Math.abs(Math.cos(e)),1/Math.abs(Math.sin(e)))},left:"center",top:"center",width:"90%",height:"90%",right:null,bottom:null,sizeRange:[16,s],rotationRange:[0,0],rotationStep:45,gridSize:8,drawOutOfBound:!1,textStyle:{normal:{fontWeight:"bold"}},data:t}]};return r}var g=v;a("a9e3");function b(e){var t=parseInt(e),a=0,i=0;function n(e){var t;return t=e<10?"0"+String(e):String(e),t}t>60&&(a=parseInt(t/60),t=parseInt(t%60),a>60&&(i=parseInt(a/60),a=parseInt(a%60)));var o=""+n(t);return a>=0&&(o=n(a)+":"+o),i>0&&(o=""+n(i)+o),o}function y(e,t){for(var a=t/50,i=[],n=0;n<50;n++)i.push(a*n);var o={title:{left:"center",subtext:"弹幕密度变化趋势"},legend:{data:["粉丝增量"],bottom:"5px"},tooltip:{trigger:"axis",confine:!0},grid:{left:"10px",right:"50px",bottom:"10px",top:"10px",containLabel:!0},xAxis:{type:"category",data:i,axisLabel:{formatter:function(e){return b(e)}},axisPointer:{label:{formatter:function(e){return"时间："+b(e.value)+"~"+b(Number(e.value)+a)}}}},yAxis:[{type:"value",min:function(e){return e.min>0?0:e.min},splitLine:{show:!0}}],series:[{name:"弹幕数",data:e,smooth:!0,showSymbol:!1,type:"line",areaStyle:{}}]};return o}var k=y,D=function e(t){if(t instanceof Array){for(var a=[],i=0;i<t.length;++i)a[i]=e(t[i]);return a}if(t instanceof Object){var n={};for(var o in t)n[o]=e(t[o]);return n}return t},w={name:"VideoDetail",components:{VideoDetailTitle:o["default"],DetailCharts:s["default"],AuthorInfo:r["default"]},data:function(){return{videoData:void 0,authorData:Object(),mainChart:Object(),likeRateChart:Object(),wordCloudOptions:Object(),otherVideo:void 0,danmakuDensityOptions:Object(),hasDanmakuAggregate:!1,pageItems:Array(),danmakuUpdateTime:"未记录",defaultPage:String(),rank:{pViewRank:-1,updateTime:Date()}}},watch:{"$route.params.aid":function(){this.getDataFromAid()}},mounted:function(){this.getDataFromAid()},methods:{pageChange:function(e){this.redrawDanmakuCharts(e)},getVideoData:function(e){this.videoData=e.data;var t=this.videoData.title;if(document.title="".concat(t," - 视频详细数据 - biliOB观测者 - B站历史数据统计分析站点"),this.rank=this.videoData.rank,this.videoData.pic=this.videoData.pic.slice(5),this.mainChart=h(D(e.data)),this.likeRateChart=f(D(e.data)),this.drawDanmakuCloud=f(D(e.data)),Object.prototype.hasOwnProperty.call(e.data,"danmakuAggregate")){this.hasDanmakuAggregate=!0;var a=[];for(var i in e.data.danmakuAggregate)a.push(i),"updatetime"!=i?(this.pageItems.push({text:"P".concat(i,": ").concat(e.data.danmakuAggregate[i]["p_name"]),value:i}),this.defaultPage=this.pageItems[0]):this.danmakuUpdateTime=e.data.danmakuAggregate.updatetime;this.redrawDanmakuCharts(a[0])}else this.hasDanmakuAggregate=!1},getDataFromAid:function(){var e=this;if(this.$store.commit("toVideo"),void 0!=this.$route.params.bvid)var t="/video/v2/BV"+this.$route.params.bvid;else t="/video/v2/av"+this.$route.params.aid;this.axios.get(t).then((function(t){e.getVideoData(t)}))},redrawDanmakuCharts:function(e){Object.prototype.hasOwnProperty.call(this.videoData.danmakuAggregate[e],"word_frequency")&&(this.wordCloudOptions=g(this.videoData.danmakuAggregate[e]["word_frequency"])),this.danmakuDensityOptions=k(this.videoData.danmakuAggregate[e]["danmaku_density"],this.videoData.danmakuAggregate[e]["duration"])}}},x=w,C=a("2877"),O=a("6544"),A=a.n(O),V=a("62ad"),S=a("a523"),I=a("0fd9"),M=a("b974"),P=Object(C["a"])(x,i,n,!1,null,null,null);t["default"]=P.exports;A()(P,{VCol:V["a"],VContainer:S["a"],VRow:I["a"],VSelect:M["a"]})}}]);