webpackJsonp([1],{"/eQD":function(t,e){},"4Uwr":function(t,e,n){t.exports=n.p+"static/img/logo.a07d14f.jpg"},"5kWq":function(t,e){},ANuU:function(t,e){},CMvz:function(t,e){},"Cj3+":function(t,e){},GZvD:function(t,e){},GrYt:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n("yIEv");var s=n("OIh9"),o=(n("jAcA"),n("86U2")),a=(n("4yKu"),n("wolx")),i=(n("mMXg"),n("qYlo")),r=(n("nI2B"),n("qWG/")),l=(n("I4j4"),n("7fQT")),u=(n("Kazo"),n("3EFv")),c=(n("1WEx"),n("jzDj")),d=(n("XmAh"),n("il3B")),h=(n("Xrj1"),n("1nur")),v=(n("MVd3"),n("XXPT")),p=(n("yffH"),n("sdMh")),g=(n("OLZS"),n("4j1Q")),f=(n("10Qn"),n("UQoe")),m=(n("3Lne"),n("SSsa")),b=(n("eqfM"),n("/QYm")),_=(n("RgoE"),n("0KWt")),w=(n("1E9F"),n("2Ux5")),y=(n("MY4N"),n("0zAV")),k=(n("i0mo"),n("Hkar")),x=(n("OWWB"),n("1fWZ")),q=(n("3ab0"),n("bHMa")),S=(n("FO5P"),n("woHG")),C=(n("k3b4"),n("+2ln")),I=n("mtWM"),A=n.n(I),T=(n("CMvz"),n("7+uW")),$=n("Rf8U"),F=n.n($),z={name:"App",data:function(){return{tabActive:0,username:localStorage.getItem("username"),token:localStorage.getItem("token"),navTitle:["计算机&应知刷题","题目搜索","高考数据","个人中心"],totalRecords:0}},created:function(){this.username&&this.getTotalRecords()},beforeUpdate:function(){},methods:{getTotalRecords:function(){if(console.log(mainUrl),this.username){this.username;var t=mainUrl+"user/listfav",e=this;this.axios.get(t,{params:{usr:this.username,token:this.token,page:999,cg:0}}).then(function(t){e.totalRecords=t.data.data.row_count})}},updataTitle:function(t){this.tabActive=t,console.log(t)},onClickLeft:function(){location.href="#/",this.tabActive=0},gotoUser:function(){location.href="#/user",this.tabActive=3}}},U={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("van-nav-bar",{attrs:{title:t.navTitle[t.tabActive]},on:{"click-left":t.onClickLeft,"click-right":t.gotoUser}},[n("van-icon",{attrs:{slot:"left",name:"wap-home"},slot:"left"}),t._v(" "),n("van-icon",{attrs:{slot:"right",name:"contact"},slot:"right"})],1),t._v(" "),n("transition",[n("keep-alive",[n("router-view",{staticStyle:{"margin-bottom":"25%"},attrs:{totalRecords:t.totalRecords},on:{updataTitle:t.updataTitle}})],1)],1),t._v(" "),n("van-tabbar",{model:{value:t.tabActive,callback:function(e){t.tabActive=e},expression:"tabActive"}},[n("van-tabbar-item",{attrs:{icon:"aim",to:"/"}},[t._v("做题")]),t._v(" "),n("van-tabbar-item",{attrs:{icon:"search",to:"/search"}},[t._v("题目搜索")]),t._v(" "),n("van-tabbar-item",{attrs:{icon:"records",to:"/info"}},[t._v("高考数据")]),t._v(" "),n("van-tabbar-item",{attrs:{icon:"contact",info:t.totalRecords,to:"/user"},on:{click:t.getTotalRecords}},[t._v("我的")])],1)],1)},staticRenderFns:[]};var P,R,D,L=n("VU/8")(z,U,!1,function(t){n("RNhU")},null,null).exports,Q=n("/ocq");localStorage.getItem("username")&&(R=localStorage.getItem("username")),localStorage.getItem("token")&&(D=localStorage.getItem("token"));var M={name:"quizbody",data:function(){return{message:"祝大家都能上天~",cg:0,category_id:0,questionCount:10,showPop:!1,showAnalysis:!1,showSetting:!1,noTips:!1,q_channel:1,showAddFav:!1,showRmFav:!0,isFavs:!1,categories:["信息理论","进制转换","信息安全","计算机系统","计算机硬件","程序设计","计算机网络","多媒体","AI、云计算、大数据、IOT","乐学随机","万维随机","全部随机"],questions:[{title:"数据加载中……",A:"数据加载中……",B:"数据加载中……",C:"数据加载中……",D:"数据加载中……",time:""}],userAnswer:[],btnTypes:{A:"button button-block button-rounded button-large",B:"button button-block button-rounded button-large",C:"button button-block button-rounded button-large",D:"button button-block button-rounded button-large"},questionIndex:0}},created:function(){this.getQuestions(),this.getMessage(),localStorage.setItem("alertCode","1")},computed:{favTimeFixed:function(){var t=this.questions,e=this.questionIndex;return t[e].time?"收藏时间:"+this.fmtDate(t[e].time):""},btnTypesFixed:function(){return this.btnTypes},percentage:function(){return parseInt((this.questionIndex+1)/this.questions.length*100)},catButton:function(){return this.category_id?"当前考点:"+this.categories[this.category_id-1]:"（当前默认随机）点击选择考点"},rightCount:function(){for(var t=0,e=0;e<this.questions.length;e++)this.userAnswer[e]==this.questions[e].answer&&t++;return t}},methods:{onOpenFavs:function(){if(!R||!D)return this.$toast('未登录哦，点击下方"我的"登录或注册后使用收藏功能~'),void(this.isFavs=!1);this.isFavs?this.$toast("开启后只会抽自己收藏的题目哦~"):this.$toast("已关闭收藏抽题~")},onOpenTips:function(){1==this.noTips?this.$toast({message:"开启考试模式后，将不再提示选项是否正确。\n\n                    完成所有题目后，系统将给出本次答题成绩。\n                    ",duration:4e3}):this.$toast({message:"已关闭考试模式"})},getMessage:function(){var t=mainUrl+"msg",e=this;this.axios.get(t).then(function(t){e.message=t.data})},onChangeCount:function(){this.$toast("抽题数："+this.questionCount)},onSelectCategory:function(t,e){this.cg="乐学随机"==t?10:"万维随机"==t?200:"全部随机"==t?0:e+1,this.category_id=e+1,this.showPop=!1},toaster:function(t,e){this.$toast({duration:e||400,message:t})},getQuestions:function(){P=this.$toast.loading({mask:!0,message:"加载中..."});var t=this,e=mainUrl+"randQuestion";this.axios.get(e,{params:{count:this.questionCount,cg:this.cg,isfav:this.isFavs?1:0,usr:R||!1,token:D||"false"}}).then(function(e){var n=e.data.data;t.userAnswer.length=n.length,t.questionCount=n.length,t.questions=n,P.clear(),t.$toast.success({message:"载入成功",duration:400})})},rmFav:function(t){var e=this,n=mainUrl+"user/rmfav";this.axios.get(n,{params:{usr:R,id:t,token:D}}).then(function(t){200==t.data.status&&e.toaster("已移除")})},showAnswer:function(){var t=this.questions[this.questionIndex].answer;this.btnTypes[t]="button button-block button-rounded button-primary button-large"},addfav:function(t){if(R&&D){var e=this,n=mainUrl+"user/addfav";this.axios.get(n,{params:{id:t,usr:R,token:D}}).then(function(t){200==t.data.status?e.$toast.success({message:"已收藏",duration:400}):e.$toast.fail({message:"已经收藏过啦",duration:400})})}else this.$toast('未登录哦，点击下方"我的"登录或注册后使用收藏功能~')},checkAnswer:function(t){var e=this.questions,n=this.questionIndex;if(this.clearOptions(),this.$set(this.userAnswer,this.questionIndex,t),this.noTips)return console.log(n),void(this.btnTypes[t]="button button-block button-rounded button-primary button-large");this.questionIndex+1==this.questionCount&&(this.showAnalysis=!0),t==e[n].answer?(this.toaster("回答正确"),this.btnTypes[t]="button button-block button-rounded button-primary button-large"):(this.toaster("回答错误"),this.btnTypes[t]="button button-block button-rounded button-caution button-large")},nextQuestion:function(){this.clearOptions(),this.questionIndex<this.questions.length-1?(this.questionIndex++,this.showUserOptions()):(this.showAnalysis=!0,this.toaster("到底啦！想继续做题请点继续做题哦~",1200))},lastQuestion:function(){this.questionIndex>0?(this.questionIndex--,this.showUserOptions()):this.toaster("到顶啦！",600),this.noTips||this.clearOptions()},clearOptions:function(){this.btnTypes.A="button button-block button-rounded button-large",this.btnTypes.B="button button-block button-rounded button-large",this.btnTypes.C="button button-block button-rounded button-large",this.btnTypes.D="button button-block button-rounded button-large",this.showAddFav=!1,this.showRmFav=!0},showUserOptions:function(){this.clearOptions();var t=this.userAnswer[this.questionIndex];this.btnTypes[t]="button button-block button-rounded button-primary button-large"},again:function(){this.getQuestions(),this.clearOptions(),this.userAnswer=[],this.questionIndex=0},fmtDate:function(t){var e=1900+(t=new Date(1e3*t)).getYear(),n="0"+(t.getMonth()+1),s="0"+t.getDate(),o="0"+t.getHours(),a="0"+t.getMinutes(),i="0"+t.getSeconds();return e+"-"+n.substring(n.length-2,n.length)+"-"+s.substring(s.length-2,s.length)+" "+o.substring(o.length-2,o.length)+":"+a.substring(a.length-2,a.length)+":"+i.substring(i.length-2,i.length)}}},E={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"quizbody",staticStyle:{"margin-top":"5px"}},[n("meta",{attrs:{content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",name:"viewport"}}),t._v(" "),n("van-popup",{staticStyle:{width:"100%",height:"84%"},attrs:{position:"right",overlay:!1},model:{value:t.showAnalysis,callback:function(e){t.showAnalysis=e},expression:"showAnalysis"}},[n("div",{staticStyle:{"padding-top":"20px"}},[n("h3",[t._v("答对:"),n("a",{staticStyle:{color:"green"}},[t._v(t._s(t.rightCount))]),t._v(" / "+t._s(t.questionCount))]),t._v(" "),n("h3",[t._v("得分:"),n("a",{staticStyle:{color:"green"}},[t._v(t._s((t.rightCount/t.questionCount*100).toFixed(2)))]),t._v(" / 100")]),t._v(" "),n("button",{staticClass:"button button-primary button-rounded button-mid",on:{click:function(e){t.again(),t.showAnalysis=!t.showAnalysis}}},[t._v("继续做题")]),t._v(" "),n("button",{staticClass:"button button-primary button-rounded button-mid",on:{click:function(e){t.showAnalysis=!t.showAnalysis}}},[t._v("返回")]),t._v(" "),n("h1",[t._v("本次错题")]),t._v(" "),n("table",t._l(t.userAnswer,function(e,s){return n("tbody",{directives:[{name:"show",rawName:"v-show",value:e!=t.questions[s].answer,expression:"answer != questions[key].answer"}],key:s},[n("tr",[n("td",{staticStyle:{"background-color":"rgba(0, 0, 0, 0.075)"},attrs:{colspan:"2"}},[n("a",{domProps:{innerHTML:t._s(s+1+"、"+t.questions[s].title)}}),t._v(" "),n("van-button",{attrs:{size:"small",plain:""},on:{click:function(e){t.addfav(t.questions[s].ID)}}},[t._v("\n                加入收藏")])],1)]),t._v(" "),n("tr",[n("td",[t._v(t._s(t.questions[s].A))]),t._v(" "),n("td",[t._v(t._s(t.questions[s].B))])]),t._v(" "),n("tr",[n("td",[t._v(t._s(t.questions[s].C))]),t._v(" "),n("td",[t._v(t._s(t.questions[s].D))])]),t._v(" "),n("tr",[n("td",[t._v("答案["),n("strong",{staticStyle:{color:"green"}},[t._v(t._s(t.questions[s].answer))]),t._v("]")]),t._v(" "),n("td",[t._v("我的答案:"),n("span",{staticStyle:{color:"red","font-weight":"bold"}},[t._v(t._s(e||"未选"))])])])])}))])]),t._v(" "),n("div",{attrs:{id:"options"}},[n("van-progress",{attrs:{percentage:parseFloat(t.percentage.toFixed(1))}}),t._v(" "),n("div",{attrs:{id:"title"}},[n("strong",[t._v(t._s(t.questionIndex+1+"、"+t.questions[t.questionIndex].title)),n("a",{staticStyle:{color:"green"}},[n("br"),t._v(" "+t._s(t.favTimeFixed))])])]),t._v(" "),n("button",{staticClass:"button button-block button-rounded button-large",class:t.btnTypes.A,attrs:{text:t.questions[t.questionIndex].A},on:{click:function(e){t.checkAnswer("A")}}},[t._v(t._s(t.questions[t.questionIndex].A))]),t._v(" "),n("button",{staticClass:"button button-block button-rounded button-large",class:t.btnTypes.B,attrs:{text:t.questions[t.questionIndex].B},on:{click:function(e){t.checkAnswer("B")}}},[t._v(t._s(t.questions[t.questionIndex].B))]),t._v(" "),n("button",{staticClass:"button button-block button-rounded button-large",class:t.btnTypes.C,attrs:{text:t.questions[t.questionIndex].C},on:{click:function(e){t.checkAnswer("C")}}},[t._v(t._s(t.questions[t.questionIndex].C))]),t._v(" "),n("button",{class:t.btnTypes.D,attrs:{text:t.questions[t.questionIndex].D},on:{click:function(e){t.checkAnswer("D")}}},[t._v(t._s(t.questions[t.questionIndex].D))])],1),t._v(" "),t._m(0),t._v(" "),n("van-popup",{attrs:{position:"bottom",overlay:!0},model:{value:t.showSetting,callback:function(e){t.showSetting=e},expression:"showSetting"}},[n("van-panel",{staticStyle:{border:"2px solid #eee"},attrs:{title:"当前抽题:"+t.questionCount,desc:t.catButton,status:""}},[n("div",[n("span",{staticStyle:{color:"#555"}},[t._v("滑动选择抽题数（5-100）")]),t._v(" "),n("van-slider",{staticStyle:{padding:"5px",margin:"10px"},attrs:{step:5,"bar-height":"10px",max:100,min:5},on:{change:t.onChangeCount},model:{value:t.questionCount,callback:function(e){t.questionCount=e},expression:"questionCount"}}),t._v(" "),n("van-button",{attrs:{type:"default",size:"large",plain:""},on:{click:function(e){t.showPop=!0}}},[t._v(t._s(t.catButton))]),t._v(" "),n("div",[n("van-switch-cell",{attrs:{title:"开启考试模式->"},on:{change:t.onOpenTips},model:{value:t.noTips,callback:function(e){t.noTips=e},expression:"noTips"}}),t._v(" "),n("van-switch-cell",{attrs:{title:"从我的收藏抽题->"},on:{change:t.onOpenFavs},model:{value:t.isFavs,callback:function(e){t.isFavs=e},expression:"isFavs"}})],1),t._v(" "),n("van-popup",{attrs:{position:"bottom"},model:{value:t.showPop,callback:function(e){t.showPop=e},expression:"showPop"}},[n("van-picker",{attrs:{"show-toolbar":"",columns:t.categories},on:{confirm:t.onSelectCategory,cancel:function(e){t.showPop=!1}}})],1)],1),t._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("van-button",{attrs:{type:"danger",size:"small"},on:{click:function(e){t.questionCount=10,t.category_id=0,t.cg=0,t.again()}}},[t._v("恢复默认")]),t._v(" "),n("van-button",{attrs:{size:"small",type:"danger"},on:{click:function(e){t.again(),t.showSetting=!t.showSetting}}},[t._v("应用设置")])],1)])],1),t._v(" "),n("div",{attrs:{id:"btns"}},[n("div",{staticStyle:{"margin-bottom":"-15px"}},[t.isFavs?n("div",[n("button",{directives:[{name:"show",rawName:"v-show",value:t.showAddFav,expression:"showAddFav"}],staticClass:"button button-royal  button-pill button-small",on:{click:function(e){t.showAddFav=!1,t.showRmFav=!0,t.addfav(t.questions[t.questionIndex].ID)}}},[n("van-icon",{attrs:{name:"like-o"}}),t._v("我点错了~重新收藏")],1),t._v(" "),n("button",{directives:[{name:"show",rawName:"v-show",value:t.showRmFav,expression:"showRmFav"}],staticClass:"button button-royal  button-pill button-small",on:{click:function(e){t.showAddFav=!0,t.showRmFav=!1,t.rmFav(t.questions[t.questionIndex].ID)}}},[n("van-icon",{attrs:{name:"clear"}}),t._v("我会做了~移除这题")],1)]):n("div",[n("button",{staticClass:"button button-primary button-pill button-small",on:{click:function(e){t.addfav(t.questions[t.questionIndex].ID)}}},[t._v("\n          加入收藏")])])]),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"button-group"},[n("button",{staticClass:"button button-primary button-pill button-mid",attrs:{nowrap:""},on:{click:t.lastQuestion}},[t._v("上一题")]),t._v(" "),n("button",{staticClass:"button button-primary button-pill button-mid",attrs:{nowrap:""},on:{click:t.nextQuestion}},[t._v("下一题")])]),t._v(" "),t.noTips?t._e():n("button",{staticClass:"button button-primary button-pill button-mid",staticStyle:{width:"70%"},on:{click:t.showAnswer}},[t._v("显示答案")]),t._v(" "),n("button",{staticClass:"button button-pill button-mid",staticStyle:{width:"70%","margin-top":"5px"},attrs:{round:!0},on:{click:function(e){t.showSetting=!t.showSetting}}},[n("van-icon",{attrs:{name:"setting",size:"large"}}),t._v("抽题设置\n    ")],1)])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"https://jq.qq.com/?_wv=1027&k=5iQT2Hb"}},[this._v("点击我加入群聊"),e("br"),this._v("【计算机技能高考】952346968")])}]};var O,B,H={name:"home",components:{quizbody:n("VU/8")(M,E,!1,function(t){n("k2ow")},"data-v-231be2cb",null).exports},created:function(){this.$emit("updataTitle",0)}},V={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"home"}},[e("quizbody")],1)},staticRenderFns:[]},j=n("VU/8")(H,V,!1,null,null,null).exports,W={name:"user",props:["totalRecords"],data:function(){return{username:localStorage.getItem("username")}},mounted:function(){this.$emit("updataTitle",3),this.fillGraph()},methods:{logout:function(){localStorage.clear(),location.reload()},fillGraph:function(){var t=mainUrl+"user/getFavRatio";this.axios.get(t,{params:{usr:this.username,token:localStorage.getItem("token")}}).then(function(t){var e=echarts.init(document.getElementById("chart")),n={title:{text:"我的收藏情况",x:"center"},series:[{name:"销量",type:"pie",radius:"43%",data:t.data.data,label:{normal:{show:!0,formatter:"{c}#{b}"}}}]};e.setOption(n)}).catch(function(t){console.log("网络错误!")})}}},N={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"user"}},[s("van-cell-group",[s("van-field",{attrs:{value:t.username,label:"用户名","left-icon":"contact",disabled:""}}),t._v(" "),s("van-cell",{attrs:{value:"查看",icon:"like-o",to:"/marked","is-link":""}},[s("template",{slot:"title"},[s("span",{staticClass:"van-cell-text"},[t._v("我的收藏")]),t._v(" "),s("van-tag",{attrs:{type:"danger"}},[t._v(" "+t._s(t.totalRecords))])],1)],2)],1),t._v(" "),s("br"),s("span",[t._v("我的收藏情况")]),t._v(" "),s("div",{staticStyle:{width:"95%",height:"400px"},attrs:{id:"chart"}}),t._v(" "),s("button",{staticClass:"button button-primary button-rounded button-mid",staticStyle:{width:"95%"},on:{click:t.logout}},[t._v("注销登录")]),t._v(" "),s("br"),t._m(0),t._v(" "),s("br"),s("img",{staticStyle:{width:"90px","border-radius":"50%","margin-bottom":"-3px"},attrs:{src:n("4Uwr")}})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",[this._v("懒得写修改密码功能了~"),e("br"),this._v("修改密码或找回密码请联系："),e("br"),this._v("作者"),e("a",{attrs:{href:"http://wpa.qq.com/msgrd?v=3&uin=861729091&menu=yes"}},[this._v("@alva")])])}]},G=n("VU/8")(W,N,!1,null,null,null).exports;localStorage.getItem("username")&&(O=localStorage.getItem("username")),localStorage.getItem("token")&&(B=localStorage.getItem("token"));var Y={name:"search",data:function(){return{keyword:null,questions:[]}},created:function(){this.$emit("updataTitle",1)},methods:{addfav:function(t){if(O&&B){var e=this,n=mainUrl+"user/addfav";this.axios.get(n,{params:{id:t,usr:O,token:B}}).then(function(t){200==t.data.status?e.$toast.success({message:"已收藏",duration:400}):e.$toast.fail({message:"已经收藏过啦",duration:400})})}else this.$toast('未登录哦，点击下方"我的"登录或注册后使用收藏功能~')},onSearch:function(){if(this.keyword){var t=this.$toast.loading({mask:!0,message:"加载中..."}),e=this.keyword,n=mainUrl+"search",s=this;this.axios.get(n,{params:{keyword:e}}).then(function(e){for(var n=e.data.data,o=n.row_count,a=n.result,i=0;i<a.length;i++)a[i].title=a[i].title.replace(s.keyword,'<span style="color:red;font-style:oblisque;font-weight:bold;">'+s.keyword+"</span>"),a[i].A=a[i].A.replace(s.keyword,'<span style="color:red;font-style:oblisque;font-weight:bold;">'+s.keyword+"</span>"),a[i].B=a[i].B.replace(s.keyword,'<span style="color:red;font-style:oblisque;font-weight:bold;">'+s.keyword+"</span>"),a[i].C=a[i].C.replace(s.keyword,'<span style="color:red;font-style:oblisque;font-weight:bold;">'+s.keyword+"</span>"),a[i].D=a[i].D.replace(s.keyword,'<span style="color:red;font-style:oblisque;font-weight:bold;">'+s.keyword+"</span>");s.questions=a;var r=s.questions.length;t.clear(),r>0?o>70?s.$toast("匹配到"+o+"题，考虑到性能，只显示前70个结果~"):s.$toast.success("匹配到"+o+"题~"):s.$toast.fail("没搜到哦，关键词两位最佳~")})}else this.$toast.fail("请输入搜索关键词~")}}},X={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"search"}},[n("van-search",{attrs:{placeholder:"关键词两位最佳~","show-action":""},on:{search:t.onSearch},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}},[n("div",{attrs:{slot:"action"},on:{click:t.onSearch},slot:"action"},[t._v("搜索")])]),t._v(" "),n("div",{staticStyle:{transition:"height 5"},attrs:{id:"qs"}},[t.questions.length>0?n("table",{attrs:{name:"fade"}},t._l(t.questions,function(e,s){return n("tbody",{key:s},[n("tr",[n("td",{staticStyle:{"background-color":"rgba(0, 0, 0, 0.075)"},attrs:{colspan:"2"}},[n("p",[n("span",{domProps:{innerHTML:t._s(s+1+"、"+e.title)}}),t._v(" "),n("van-button",{attrs:{size:"small",plain:""},on:{click:function(e){t.addfav(t.questions[s].ID)}}},[t._v("\n                加入收藏")])],1)])]),t._v(" "),n("tr",[n("td",{domProps:{innerHTML:t._s(e.A)}},[t._v("}")]),t._v(" "),n("td",{domProps:{innerHTML:t._s(e.B)}})]),t._v(" "),n("tr",[n("td",{domProps:{innerHTML:t._s(e.C)}}),t._v(" "),n("td",{domProps:{innerHTML:t._s(e.D)}})]),t._v(" "),n("tr",[n("td",[t._v("答案["),n("strong",{staticStyle:{color:"green"}},[t._v(t._s(e.answer))]),t._v("]")]),t._v(" "),n("td",[t._v("难度:"),n("span",{staticStyle:{color:"green","font-weight":"bold"}},[t._v(t._s(e.hard))])])])])})):n("van-notice-bar",{attrs:{text:"还没有搜到任何题目哦~"}})],1)],1)},staticRenderFns:[]};var K=n("VU/8")(Y,X,!1,function(t){n("kKFy")},null,null).exports,Z={name:"marked",data:function(){return{showPop:!1,PageList:[],questions:[],username:localStorage.getItem("username"),currentPage:1,pageCount:0,isLoading:!1,token:localStorage.getItem("token")}},computed:{currentQuestions:function(){this.updataQuestions(this.username,this.currentPage)}},created:function(){if(this.username){this.$emit("updataTitle",3);mainUrl}},activated:function(){this.updataQuestions(this.username,this.currentPage)},methods:{fmtDate:function(t){var e=1900+(t=new Date(1e3*t)).getYear(),n="0"+(t.getMonth()+1),s="0"+t.getDate(),o="0"+t.getHours(),a="0"+t.getMinutes(),i="0"+t.getSeconds();return e+"-"+n.substring(n.length-2,n.length)+"-"+s.substring(s.length-2,s.length)+" "+o.substring(o.length-2,o.length)+":"+a.substring(a.length-2,a.length)+":"+i.substring(i.length-2,i.length)},onSelectPage:function(t,e){this.currentPage=e+1,this.showPop=!1},onRefresh:function(){this.updataQuestions()},rmFav:function(t){var e=this,n=mainUrl+"user/rmfav";this.axios.get(n,{params:{usr:e.username,id:t,token:e.token}}).then(function(t){e.updataQuestions()})},updataQuestions:function(t,e){var n=this.$toast.loading({mask:!0,message:"加载中..."}),s=this,o=mainUrl+"user/listfav";this.axios.get(o,{params:{usr:this.username,page:this.currentPage,token:this.token,cg:0}}).then(function(t){var e=t.data.data.row_count,o=t.data.data.result;s.pageCount=Math.ceil(e/15);for(var a=1;a<=s.pageCount;a++)s.PageList.push(a);s.questions=o,s.isLoading=!1,n.clear()})}}},J={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"marked"}},[n("div",{staticStyle:{},attrs:{id:"container"}},[n("meta",{attrs:{name:"viewport",content:"width=device-width,initial-scale=1.0"}}),t._v(" "),n("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},[n("div",{attrs:{id:"qs"}},[t._v("\n        "+t._s(t.currentQuestions)+"\n        "),"string"!=typeof t.questions?n("table",t._l(t.questions,function(e,s){return 0!=s?n("tbody",{key:s},[n("tr",[n("td",{staticStyle:{"background-color":"rgba(0, 0, 0, 0.075)"},attrs:{colspan:"2"}},[t._v("\n                "+t._s(t.currentPage*s+"、"+e.title)+"\n                "),n("van-button",{staticStyle:{float:"right"},attrs:{size:"mini"},on:{click:function(n){t.rmFav(e.ID)}}},[t._v("删除")])],1)]),t._v(" "),n("tr",[n("td",[t._v(t._s(e.A))]),t._v(" "),n("td",[t._v(t._s(e.B))])]),t._v(" "),n("tr",[n("td",[t._v(t._s(e.C))]),t._v(" "),n("td",[t._v(t._s(e.D))])]),t._v(" "),n("tr",[n("td",[t._v("答案["),n("strong",{staticStyle:{color:"green"}},[t._v(t._s(e.answer))]),t._v("]")]),t._v(" "),n("td",{staticStyle:{color:"red"}},[t._v(t._s(t.fmtDate(e.time)))])])]):t._e()})):n("van-notice-bar",{attrs:{text:"还没有搜藏任何题目哦~"}})],1)])],1),t._v(" "),n("div",[n("button",{staticClass:"button button-block button-rounded button-royal button-large",staticStyle:{width:"100%"},on:{click:function(e){t.showPop=!0}}},[t._v("自定义跳转页")]),t._v(" "),n("van-popup",{attrs:{position:"bottom"},model:{value:t.showPop,callback:function(e){t.showPop=e},expression:"showPop"}},[n("van-picker",{attrs:{"show-toolbar":"",columns:t.PageList},on:{confirm:t.onSelectPage,cancel:function(e){t.showPop=!1}}})],1),t._v(" "),n("van-pagination",{staticStyle:{"margin-bottom":"25%"},attrs:{"page-count":t.pageCount,mode:"simple"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)])},staticRenderFns:[]};var tt=n("VU/8")(Z,J,!1,function(t){n("kwz9")},null,null).exports,et={name:"login",data:function(){return{username:localStorage.getItem("username"),password:localStorage.getItem("password"),token:localStorage.getItem("token"),passwordConfirm:null,isLogin:!1}},activated:function(){this.$emit("updataTitle",3)},computed:{pwdConfirm:function(){return this.password!=this.passwordConfirm?"两次输入的密码不一致！":null},pwdErr:function(){var t=this.password;return t?t.length<6?"密码长度必须大于6位！":null:"请输入密码"},usrErr:function(){var t=this.username;if(!t)return"请输入用户名";return t.includes(" ")?(this.username=this.username.replace(" ",""),"用户名不允许出现空格！"):t.length<6?"用户名长度至少6位！":null}},methods:{login:function(){var t=this.username,e=this.password;if(t)if(t){var n=this;this.axios.get(mainUrl+"user/login",{params:{usr:this.username,pwd:this.password}}).then(function(s){var o=s.data.data,a=(o.info,o.code,o.token);200==s.status?(n.saveUserInfo(t,e,a),n.$toast.success("登录成功"),location.reload()):n.$toast.fail("登录失败")})}else this.$toast.fail({message:"请输入密码",duration:600});else this.$toast.fail({message:"请输入用户名",duration:600})},reg:function(){},saveUserInfo:function(t,e,n){localStorage.setItem("username",t),localStorage.setItem("password",e),localStorage.setItem("token",n)},beforeClose:function(t,e){if(console.log("before"),"cancel"==t&&e(),!this.username)return this.$toast.fail("请输入账号！"),void e(!1);if(this.username.length<6)return this.$toast.fail("账号长度最少6位！"),void e(!1);if(!this.password)return this.$toast.fail("请输入密码！"),void e(!1);if(this.password.length<6)return this.$toast.fail("密码最少6位！"),void e(!1);if(this.password!=this.passwordConfirm)return this.$toast.fail("两次输入密码不一致！"),void e(!1);var n=this;if("confirm"===t){var s=mainUrl+"user/reg";this.axios.get(s,{params:{usr:n.username,pwd:n.password}}).then(function(t){200==t.data.status?n.$toast.success("注册成功，请登录~"):n.$toast.fail("注册失败，用户名可能已存在。")}).catch(function(t){n.$toast.fail("网络错误！")}),e()}else e()}}},nt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"login"}},[n("h4",[t._v("未登录，请登录或注册~")]),t._v(" "),n("van-cell-group",[n("van-field",{attrs:{label:"账号","left-icon":"contact",type:"text",placeholder:"请输入账号","error-message":"",border:""},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.login(e):null}},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),t._v(" "),n("van-field",{attrs:{label:"密码","left-icon":"idcard",type:"password",placeholder:"请输入密码",border:""},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.login(e):null}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),t.isLogin?t._e():n("button",{staticClass:"button button-primary button-block button-rounded button-large",staticStyle:{width:"98%"},on:{click:t.login}},[t._v("登录")]),t._v(" "),n("van-dialog",{attrs:{"confirm-button-text":"注册","show-cancel-button":"","before-close":t.beforeClose},model:{value:t.isLogin,callback:function(e){t.isLogin=e},expression:"isLogin"}},[n("van-field",{attrs:{label:"用户名","error-message":t.usrErr,placeholder:"请输入用户名"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),t._v(" "),n("van-field",{attrs:{type:"password","error-message":t.pwdErr,label:"密码",placeholder:"请输入密码"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),n("van-field",{attrs:{type:"password","error-message":t.pwdConfirm,label:"密码",placeholder:"再次确认密码"},model:{value:t.passwordConfirm,callback:function(e){t.passwordConfirm=e},expression:"passwordConfirm"}})],1),t._v(" "),n("div",{staticStyle:{"text-align":"auto"}},[n("a",{staticStyle:{float:"left"},on:{click:function(e){t.isLogin=!t.isLogin}}},[t._v("没有账号？点我注册")]),t._v(" "),n("a",{staticStyle:{float:"right"},on:{click:function(e){t.$toast("联系作者QQ:861729091，下面有按钮可直达~")}}},[t._v("忘记密码？")])]),t._v(" "),n("br")],1),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticStyle:{"text-align":"left",bottom:"0px"},attrs:{id:"msg"}},[e("br"),this._v("\n        题库来源于"),e("strong",{staticStyle:{color:"blue"}},[this._v("万维考试系统")]),this._v("，\n\t\t\t\t如有侵权请\n\t\t\t\t"),e("a",{staticStyle:{color:"blue"},attrs:{href:"http://wpa.qq.com/msgrd?v=3&uin=861729091&menu=yes"}},[this._v("联系作者。")])])}]};var st=n("VU/8")(et,nt,!1,function(t){n("Wrhh")},null,null).exports,ot={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-tabs",[n("van-tab",{attrs:{title:"本科"}},[n("table",{staticStyle:{width:"100%"}},[n("tbody",[t._l(t.ben_data,function(e,s){return[n("tr",[n("td",{staticStyle:{"text-align":"center","font-weight":"bold"},attrs:{colspan:"4"}},[t._v(" ↓↓"+t._s(e.school)+"↓↓ \n                                "),n("br"),t._v(" "),n("span",{style:s<=3?"color: red":""},[t._v("\n                                "+t._s(e.xz)+"\n                                ")])])]),t._v(" "),n("tr",[n("td",[t._v("2015")]),t._v(" "),n("td",[t._v("2016")]),t._v(" "),n("td",[t._v("2017")]),t._v(" "),n("td",[t._v("2018")])]),t._v(" "),n("tr",t._l(e.line,function(e,s){return n("td",{key:s},[e?[t._v("\n                                    "+t._s(e)+"\n                                ")]:[n("span",{staticStyle:{color:"blue"}},[t._v("未招")])]],2)}))]})],2)])]),t._v(" "),n("van-tab",{attrs:{title:"专科"}},[n("p",{staticStyle:{"font-weight":"bold"}},[t._v("数据量比较大，排版太麻烦，请下载表格食用。")]),t._v(" "),n("a",{attrs:{href:"http://132.232.7.38/files/2018zk.xlsx",download:"2018专科投档线"}},[t._v("点我下载excel表格")])]),t._v(" "),n("van-tab",{attrs:{title:"其他资料"}},[n("p",{staticStyle:{"font-weight":"bold"}},[t._v("都是excel表格，点击文字下载。")]),t._v(" "),n("p",[n("a",{attrs:{href:"http://132.232.7.38/files/ttlx.xlsx",download:"天天乐学2545题库.xlsx"}},[t._v("天天乐学2545题库")])]),t._v(" "),n("p",[n("a",{attrs:{href:"http://132.232.7.38/files/2018mf.xlsx",download:"2018技能申请满分情况.xlsx"}},[t._v("2018技能申请满分情况")])]),t._v(" "),n("p",[n("a",{attrs:{href:"http://132.232.7.38/files/2018bktjt.xlsx",download:"历年投档线走势图表.xlsx"}},[t._v("历年投档线走势图表")])])])],1)],1)},staticRenderFns:[]},at=n("VU/8")({data:function(){return{ben_data:[{school:"湖北理工学院",line:[610,632,628,645],xz:"公立二本"},{school:"武汉商学院",line:[612,632,634,644],xz:"公立二本"},{school:"湖北文理学院",line:[598,622,621,639],xz:"公立二本"},{school:"荆楚理工学院",line:[599,621,622,638],xz:"公立二本"},{school:"武昌首义学院",line:[,598,615,635],xz:"民办二本"},{school:"武汉华夏理工学院",line:[,604,600,627],xz:"民办二本"},{school:"武昌理工学院",line:[,599,600,627],xz:"民办二本"},{school:"武汉生物工程学院",line:[572,596,593,623],xz:"民办二本"},{school:"武汉工商学院",line:[569,592,594,622],xz:"民办二本"},{school:"湖北工业大学工程技术学院",line:[,577,589,618],xz:"民办二本"},{school:"湖北商贸学院",line:[570,598,591,618],xz:"民办二本"},{school:"武汉工程科技学院",line:[567,587,585,618],xz:"民办二本"},{school:"湖北大学知行学院",line:[569,594,585,616],xz:"民办二本"},{school:"武昌工学院",line:[568,582,585,615],xz:"民办二本"},{school:"湖北民族学院科技学院",line:[,,584,614],xz:"民办二本"},{school:"武汉科技大学城市学院",line:[,580,589,,],xz:"民办二本（不招了）"},{school:"汉口学院",line:[586,600,596,,],xz:"民办二本（不招了）"},{school:"湖北汽车工业学院",line:[598,621,,,],xz:"公立一本（不招了）"},{school:"武汉东湖学院",line:[591,,,,],xz:"民办二本（不招了）"},{school:"湖北工业大学",line:[621,,,,],xz:"公立一本（不招了）"}]}},activated:function(){this.$emit("updataTitle",2)}},ot,!1,null,null,null).exports;T.a.use(Q.a);var it=new Q.a({routes:[{path:"/info",name:"数据",component:at},{path:"/",name:"home",component:j},{path:"/user",name:"user",component:localStorage.getItem("username")&&localStorage.getItem("token")?G:st},{path:"/search",name:"search",component:K},{path:"/marked",name:"marked",component:tt}]});n("tuea");T.a.use(F.a,A.a),T.a.use(m.a).use(b.a).use(_.a).use(w.a).use(y.a).use(k.a).use(x.a).use(q.a).use(S.a).use(C.a),T.a.use(d.a).use(h.a).use(v.a).use(p.a).use(g.a).use(f.a),T.a.use(a.a).use(i.a).use(r.a).use(l.a).use(u.a).use(c.a),T.a.use(s.a).use(o.a),T.a.config.productionTip=!1,new T.a({el:"#app",router:it,components:{App:L},template:"<App/>"})},OBwy:function(t,e){},RNhU:function(t,e){},Wrhh:function(t,e){},ZmGI:function(t,e){},cJl5:function(t,e){},dSDO:function(t,e){},f4F5:function(t,e){},"g/xu":function(t,e){},k2ow:function(t,e){},kKFy:function(t,e){},kwz9:function(t,e){},kyYV:function(t,e){},lbtJ:function(t,e){},mx3f:function(t,e){},"oiM+":function(t,e){},tV7Q:function(t,e){},tuea:function(t,e){},uvvn:function(t,e){},wA3Z:function(t,e){},znX2:function(t,e){}},["NHnr"]);