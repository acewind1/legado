import{r as we,o as c,c as b,a as ne,b as re,d as B,e as h,w as a,f as S,u as i,l as F,g as m,F as I,E as xe,h as ae,p as Be,i as Ue,j as ue,s as X,t as Q,n as de,k as Ee,m as $,q as te,v as A,x as pe,y as Ve,z as Ne,A as se,V as Te,B as w,C as Y,D as he,G as Ie,H as $e,I as _e,J as Le,K as V,L as Re,M as J,N as ge,O as me,P as Oe,Q as q,R as Pe,S as De,T as Je,U as Ae,W as Ke,X as je,Y as He,Z as Fe,_ as qe,$ as ze,a0 as Me}from"./vendor-b52b0953.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const We="modulepreload",Ge=function(e,t){return new URL(e,t).href},ie={},oe=function(t,n,s){if(!n||n.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=Ge(r,s),r in ie)return;ie[r]=!0;const d=r.endsWith(".css"),k=d?'[rel="stylesheet"]':"";if(!!s)for(let x=o.length-1;x>=0;x--){const p=o[x];if(p.href===r&&(!d||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${k}`))return;const f=document.createElement("link");if(f.rel=d?"stylesheet":We,d||(f.as="script",f.crossOrigin=""),f.href=r,document.head.appendChild(f),d)return new Promise((x,p)=>{f.addEventListener("load",x),f.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())},L=(e,t)=>{const n=e.__vccOpts||e;for(const[s,o]of t)n[s]=o;return n},Qe={};function Xe(e,t){const n=we("router-view");return c(),b(n)}const Ye=L(Qe,[["render",Xe]]),Se=[{path:"/",name:"shelf",component:()=>oe(()=>import("./BookShelf-7e6e49e9.js"),["./BookShelf-7e6e49e9.js","./vendor-b52b0953.js","./vendor-6f0d1692.css","./el-loading-15d78e2b.js","./el-loading-d0f2d079.css","./BookShelf-a8a609c2.css"],import.meta.url)},{path:"/chapter",name:"chapter",component:()=>oe(()=>import("./BookChapter-910aa70b.js"),["./BookChapter-910aa70b.js","./vendor-b52b0953.js","./vendor-6f0d1692.css","./el-loading-15d78e2b.js","./el-loading-d0f2d079.css","./BookChapter-3e045df4.css"],import.meta.url)}];ne({history:re(),routes:Se});const N=e=>(Be("data-v-aee57c78"),e=e(),Ue(),e),Ze=N(()=>m("br",null,null,-1)),et=N(()=>m("br",null,null,-1)),tt=N(()=>m("br",null,null,-1)),ot=N(()=>m("br",null,null,-1)),nt=N(()=>m("br",null,null,-1)),rt={style:{"margin-top":"20px"}},st=N(()=>m("code",null,"^$()[]{}.?+*|",-1)),it=N(()=>m("br",null,null,-1)),lt=N(()=>m("code",null,"(?s)",-1)),ct=N(()=>m("br",null,null,-1)),at=N(()=>m("code",null,"(?m)",-1)),ut=N(()=>m("br",null,null,-1)),dt=N(()=>m("code",null,"(?i)",-1)),pt=N(()=>m("br",null,null,-1)),ht={__name:"SourceHelp",setup(e){return(t,n)=>{const s=xe,o=ae;return c(),B(I,null,[h(s,{icon:i(F),href:"https://alanskycn.gitee.io/teachme/",target:"_blank"},{default:a(()=>[S("书源制作教程")]),_:1},8,["icon"]),Ze,h(s,{icon:i(F),href:"https://zhuanlan.zhihu.com/p/29436838",target:"_blank"},{default:a(()=>[S("xpath基础教程")]),_:1},8,["icon"]),et,h(s,{icon:i(F),href:"https://zhuanlan.zhihu.com/p/32187820",target:"_blank"},{default:a(()=>[S("xpath高级教程")]),_:1},8,["icon"]),tt,h(s,{icon:i(F),href:"https://www.w3cschool.cn/regex_rmjc",target:"_blank"},{default:a(()=>[S("正则表达式教程")]),_:1},8,["icon"]),ot,h(s,{icon:i(F),href:"https://regexr-cn.com/",target:"_blank"},{default:a(()=>[S("正则表达式在线验证工具")]),_:1},8,["icon"]),nt,m("div",rt,[m("span",null,[h(o,null,{default:a(()=>[st,S(" 这些是Java正则特殊符号,匹配需转义")]),_:1})]),it,m("span",null,[h(o,null,{default:a(()=>[lt,S(" 前缀表示跨行解析")]),_:1})]),ct,m("span",null,[h(o,null,{default:a(()=>[at,S(" 前缀表示逐行匹配")]),_:1})]),ut,m("span",null,[h(o,null,{default:a(()=>[dt,S(" 前缀表示忽略大小写")]),_:1})]),pt])],64)}}},_t=L(ht,[["__scopeId","data-v-aee57c78"]]),z=e=>e==null||e.length===0||/^\s+$/.test(e),ye=e=>"bookSourceName"in e,gt=e=>ye(e)?!z(e.bookSourceName)&&!z(e.bookSourceUrl)&&!z(e.bookSourceType):!z(e.sourceName)&&!z(e.sourceName),mt=(e,t)=>{var n,s,o,r,d,k,y,f;return ye(e)?(((n=e.bookSourceName)==null?void 0:n.includes(t))||((s=e.bookSourceUrl)==null?void 0:s.includes(t))||((o=e.bookSourceGroup)==null?void 0:o.includes(t))||((r=e.bookSourceComment)==null?void 0:r.includes(t)))??!1:(((d=e.sourceName)==null?void 0:d.includes(t))||((k=e.sourceUrl)==null?void 0:k.includes(t))||((y=e.sourceGroup)==null?void 0:y.includes(t))||((f=e.sourceComment)==null?void 0:f.includes(t)))??!1},St={ruleSearch:{},ruleBookInfo:{},ruleToc:{},ruleContent:{},ruleReview:{},ruleExplore:{}},yt={},O=/bookSource/i.test(location.href),le=O?St:yt,K=ue("source",{state:()=>({bookSources:[],rssSources:[],errorPushSources:[],currentSource:le,currentTab:localStorage.getItem("tabName")||"editTab",editTabSource:{},isDebuging:!1}),getters:{sources:e=>O?e.bookSources:e.rssSources,currentSourceUrl:e=>O?e.currentSource.bookSourceUrl:e.currentSource.sourceUrl,searchKey:e=>O?e.currentSource.ruleSearch.checkKeyWord||"我的":null},actions:{startDebug(){this.currentTab="editDebug",this.isDebuging=!0},debugFinish(){this.isDebuging=!1},saveSources(e){O?this.bookSources=e:this.rssSources=e},deleteSources(e){let t=O?this.bookSources:this.rssSources;e.forEach(n=>{let s=t.indexOf(n);s>-1&&t.splice(s,1)})},saveCurrentSource(){let e=this.currentSource,t,n;O?(t=this.bookSources,n="bookSourceUrl"):(t=this.rssSources,n="sourceUrl");let s=t.findIndex(o=>o[n]===e[n]);e=JSON.parse(JSON.stringify(e)),s>-1?t.splice(s,1,e):t.push(e)},changeCurrentSource(e){const t=JSON.stringify(e);this.currentSource=JSON.parse(t)},async setPushReturnSources(e){O?this.errorPushSources=this.sources.filter(t=>e.every(n=>n.bookSourceUrl!==t.bookSourceUrl)):this.errorPushSources=this.sources.filter(t=>e.every(n=>n.sourceUrl!==t.sourceUrl))},changeTabName(e){this.currentTab=e,localStorage.setItem("tabName",e)},changeEditTabSource(e){const t=JSON.stringify(e);this.editTabSource=JSON.parse(t)},editHistory(e){let t;if(localStorage.getItem("history"))t=JSON.parse(localStorage.getItem("history")),t.new.push(e),t.new.length>50&&t.new.shift(),t.old.length>50&&t.old.shift(),localStorage.setItem("history",JSON.stringify(t));else{const n={new:[e],old:[]};localStorage.setItem("history",JSON.stringify(n))}},editHistoryUndo(){if(localStorage.getItem("history")){let e=JSON.parse(localStorage.getItem("history"));e.old.push(this.currentSource),e.new.length&&(this.currentSource=e.new.pop()),localStorage.setItem("history",JSON.stringify(e))}},clearAllHistory(){localStorage.setItem("history",JSON.stringify({new:[],old:[]}))},clearEdit(){this.editTabSource={},this.currentSource=le},clearAllSource(){this.bookSources=[],this.rssSources=[]}}}),ft={__name:"SourceItem",props:["source"],setup(e){const t=K(),{errorPushSources:n}=X(t),s=o=>{t.changeCurrentSource(o)};return(o,r)=>{const d=Ee;return c(),b(d,{size:"large",border:"",label:e.source,class:de({error:i(n).includes(e.source)}),onChange:r[0]||(r[0]=k=>s(e.source)),key:e.source.bookSourceUrl},{default:a(()=>[S(Q(e.source.bookSourceName||e.source.sourceName),1)]),_:1},8,["label","class"])}}};const bt={class:"tool"},kt={__name:"SourceList",setup(e){const t=K(),n=$([]),s=$(""),{sources:o}=X(t),r=te(()=>/bookSource/.test(window.location.href)),d=()=>{t.deleteSources(n.value),n.value=[]},k=()=>{t.clearAllSource(),n.value=[]},y=te(()=>{let p=s.value;return p===""?o.value:o.value.filter(_=>mt(_,p))}),f=()=>{const p=document.createElement("input");p.type="file",p.accept=".json,.txt",p.addEventListener("change",_=>{const v=_.target.files[0];var E=new FileReader;E.readAsText(v),E.onload=()=>{try{const P=JSON.parse(E.result);t.saveSources(P)}catch{w({message:"上传的源格式错误",type:"error"})}}}),p.click()},x=()=>{const p=document.createElement("a");let _=n.value.length===0?y.value:n.value,v=r.value?"BookSource":"RssSource";p.download=`${v}_${Date().replace(/.*?\s(\d+)\s(\d+)\s(\d+:\d+:\d+).*/,"$2$1$3").replace(/:/g,"")}.json`;let E=new Blob([JSON.stringify(_,null,4)],{type:"application/json"});p.href=window.URL.createObjectURL(E),p.click()};return(p,_)=>{const v=Y,E=he,P=Ie;return c(),B(I,null,[h(v,{modelValue:i(s),"onUpdate:modelValue":_[0]||(_[0]=R=>A(s)?s.value=R:null),class:"search","prefix-icon":i(pe),placeholder:"筛选源"},null,8,["modelValue","prefix-icon"]),m("div",bt,[h(E,{onClick:f,icon:i(Ve)},{default:a(()=>[S(" 打开 ")]),_:1},8,["icon"]),h(E,{disabled:i(y).length===0,onClick:x,icon:i(Ne)},{default:a(()=>[S(" 导出")]),_:1},8,["disabled","icon"]),h(E,{icon:i(se),onClick:d,disabled:i(n).length===0},{default:a(()=>[S("删除")]),_:1},8,["icon","disabled"]),h(E,{type:"danger",icon:i(se),onClick:k,disabled:i(o).length===0},{default:a(()=>[S("清空")]),_:1},8,["icon","disabled"])]),h(P,{id:"source-list",modelValue:i(n),"onUpdate:modelValue":_[1]||(_[1]=R=>A(n)?n.value=R:null)},{default:a(()=>[h(i(Te),{style:{height:"100%","overflow-y":"auto","overflow-x":"hidden"},"data-key":"bookSourceUrl","data-sources":i(y),"data-component":ft,"estimate-size":45},null,8,["data-sources"])]),_:1},8,["modelValue"])],64)}}},vt=L(kt,[["__scopeId","data-v-2f7954aa"]]),Ct=1e3,U=$e.create({baseURL:location.origin,timeout:120*Ct}),{hostname:fe,port:be}=new URL(location.href),wt=/source/i.test(location.href),xt=e=>{throw wt&&w({message:"后端错误，检查网络或者阅读app",type:"error"}),e};U.interceptors.response.use(e=>e,xt);const Bt=()=>U.get("/getReadConfig"),Ut=e=>U.post("/saveReadConfig",e),Et=e=>U.post("/saveBookProgress",e),Vt=()=>U.get("/getBookshelf"),Nt=e=>U.get("/getChapterList?url="+encodeURIComponent(e)),Tt=(e,t)=>U.get("/getBookContent?url="+encodeURIComponent(e)+"&index="+t),It=(e,t,n)=>{const s=`ws://${fe}:${Number(be)+1}/searchBook`,o=new WebSocket(s);o.onopen=()=>{o.send(`{"key":"${e}"}`)},o.onmessage=({data:r})=>t(r),o.onclose=()=>{n()}},$t=e=>U.post("/saveBook",e),Lt=e=>U.post("/deleteBook",e),M=/bookSource/i.test(location.href),Rt=()=>M?U.get("getBookSources"):U.get("getRssSources"),Ot=e=>M?U.post("saveBookSource",e):U.post("saveRssSource",e),Pt=e=>M?U.post("saveBookSources",e):U.post("saveRssSources",e),Dt=e=>M?U.post("deleteBookSources",e):U.post("deleteRssSources",e),Jt=(e,t,n,s)=>{const o=`ws://${fe}:${Number(be)+1}/${M?"bookSource":"rssSource"}Debug`,r=new WebSocket(o);r.onopen=()=>{r.send(`{"tag":"${e}", "key":"${t}"}`)},r.onmessage=({data:d})=>n(d),r.onclose=()=>{w({message:"调试已关闭！",type:"info"}),s()}},j={getReadConfig:Bt,saveReadConfig:Ut,saveBookProcess:Et,getBookShelf:Vt,getChapterList:Nt,getBookContent:Tt,search:It,saveBook:$t,deleteBook:Lt,getSources:Rt,saveSources:Pt,saveSource:Ot,deleteSource:Dt,debug:Jt};const At={__name:"SourceDebug",setup(e){const t=K(),n=$(""),s=$("");_e(()=>{t.isDebuging&&r()});const o=k=>{let y=document.querySelector("#debug-text");y.scrollTop=y.scrollHeight,n.value+=k+`
`},r=async()=>{n.value="",await j.saveSource(t.currentSource),j.debug(t.currentSourceUrl,s.value||t.searchKey,o,t.debugFinish)},d=te(()=>/bookSource/.test(window.location.href));return(k,y)=>{const f=Y;return c(),B(I,null,[i(d)?(c(),b(f,{key:0,id:"debug-key",modelValue:i(s),"onUpdate:modelValue":y[0]||(y[0]=x=>A(s)?s.value=x:null),placeholder:"搜索书名、作者","prefix-icon":i(pe),style:{"padding-bottom":"4px"},onKeydown:Le(r,["enter"])},null,8,["modelValue","prefix-icon","onKeydown"])):V("",!0),h(f,{id:"debug-text",modelValue:i(n),"onUpdate:modelValue":y[1]||(y[1]=x=>A(n)?n.value=x:null),type:"textarea",readonly:"",rows:"29",placeholder:"这里用于输出调试信息"},null,8,["modelValue"])],64)}}},Kt=L(At,[["__scopeId","data-v-fe904689"]]),po=ue("book",{state:()=>({connectStatus:"正在连接后端服务器……",connectType:"",newConnect:!0,searchBooks:[],shelf:[],catalog:[],readingBook:{index:0,chapterPos:0},popCataVisible:!1,contentLoading:!0,showContent:!1,config:{theme:0,font:0,fontSize:18,readWidth:800,infiniteLoading:!1,customFontName:""},miniInterface:!1,readSettingsVisible:!1}),actions:{setConnectStatus(e){this.connectStatus=e},setConnectType(e){this.connectType=e},setNewConnect(e){this.newConnect=e},addBooks(e){this.shelf=e},setCatalog(e){this.catalog=e},setPopCataVisible(e){this.popCataVisible=e},setContentLoading(e){this.contentLoading=e},setReadingBook(e){this.readingBook=e},setConfig(e){this.config=e},setReadSettingsVisible(e){this.readSettingsVisible=e},setShowContent(e){this.showContent=e},setMiniInterface(e){this.miniInterface=e},async setSearchBooks(e){e.forEach(t=>{this.shelf.find(s=>s.bookUrl==t.bookUrl)===void 0&&this.searchBooks.push(t)})},clearSearchBooks(){this.searchBooks=[]},async saveBookProcess(){var r;if(this.catalog.length==0)return;const{index:e,chapterPos:t,bookName:n,bookAuthor:s}=this.readingBook;let o=(r=this.catalog[e])==null?void 0:r.title;o&&j.saveBookProcess({name:n,author:s,durChapterIndex:e,durChapterPos:t,durChapterTime:new Date().getTime(),durChapterTitle:o})}}}),jt=Re();const Ht={__name:"SourceJson",setup(e){const t=K(),n=$(""),s=async o=>{try{t.changeEditTabSource(JSON.parse(o))}catch{w({message:"粘贴的源格式错误",type:"error"})}};return _e(async()=>{let o=t.editTabSource;Object.keys(o).length>0?n.value=JSON.stringify(o,null,4):n.value=""}),(o,r)=>{const d=Y;return c(),b(d,{id:"source-json",modelValue:i(n),"onUpdate:modelValue":r[0]||(r[0]=k=>A(n)?n.value=k:null),type:"textarea",placeholder:"这里输出序列化的JSON数据,可直接导入'阅读'APP",rows:"30",onChange:s,style:{"margin-bottom":"4px"}},null,8,["modelValue"])}}},Ft=L(Ht,[["__scopeId","data-v-7e91a802"]]);const qt={__name:"SourceTabTools",setup(e){const t=K(),{currentTab:n}=X(t),s=$([["editTab","编辑源"],["editDebug","调试源"],["editList","源列表"],["editHelp","帮助信息"]]);return(o,r)=>{const d=Ft,k=Kt,y=vt,f=_t,x=ge,p=me;return c(),b(p,{modelValue:i(n),"onUpdate:modelValue":r[0]||(r[0]=_=>A(n)?n.value=_:null)},{default:a(()=>[(c(!0),B(I,null,J(i(s),(_,v)=>(c(),b(x,{key:_[0],name:_[0],label:_[1]},{default:a(()=>[v==0?(c(),b(d,{key:0})):V("",!0),v==1?(c(),b(k,{key:1})):V("",!0),v==2?(c(),b(y,{key:2})):V("",!0),v==3?(c(),b(f,{key:3})):V("",!0)]),_:2},1032,["name","label"]))),128))]),_:1},8,["modelValue"])}}},zt=L(qt,[["__scopeId","data-v-dcce2457"]]);const Mt={class:"menu flex-column-center"},Wt={class:"hotkeys-header flex-space-between"},Gt=["id"],Qt={key:0},Xt={class:"hotkeys-settings flex-column-center"},Yt={class:"title"},Zt={class:"hotkeys-item__content"},eo={key:0},to={key:0},oo={__name:"ToolBar",setup(e){const t=K(),n=()=>{const u=w({message:"加载中……",showClose:!0,duration:0});j.getSources().then(({data:l})=>{l.isSuccess?(t.changeTabName("editList"),t.saveSources(l.data),w({message:`成功拉取${l.data.length}条源`,type:"success"})):w({message:l.errorMsg??"后端错误",type:"error"})}).finally(()=>u.close())},s=()=>{let u=t.sources;if(t.changeTabName("editList"),u.length===0)return w({message:"空空如也",type:"info"});w({message:"正在推送中",type:"info"}),j.saveSources(u).then(({data:l})=>{if(l.isSuccess){let C=l.data;if(Array.isArray(C)){let T="";u.length>C.length&&(T=`
推送失败的源将用红色字体标注!`,t.setPushReturnSources(C)),w({message:`批量推送源到「阅读3.0APP」
共计: ${u.length} 条
成功: ${C.length} 条
失败: ${u.length-C.length} 条${T}`,type:"success"})}}else w({message:`批量推送源失败!
ErrorMsg: ${l.errorMsg}`,type:"error"})})},o=()=>{t.changeTabName("editTab"),t.changeEditTabSource(t.currentSource)},r=()=>{t.changeCurrentSource(t.editTabSource)},d=()=>{t.editHistoryUndo()},k=()=>{t.clearEdit(),w({message:"已清除",type:"success"})},y=()=>{t.clearEdit(),t.clearAllHistory(),w({message:"已清除所有历史记录",type:"success"})},f=()=>{let u=/bookSource/.test(location.href),l=t.currentSource;gt(l)?j.saveSource(l).then(({data:C})=>{C.isSuccess?(w({message:`源《${u?l.bookSourceName:l.sourceName}》已成功保存到「阅读3.0APP」`,type:"success"}),t.saveCurrentSource()):w({message:`源《${u?l.bookSourceName:l.sourceName}》保存失败!
ErrorMsg: ${C.errorMsg}`,type:"error"})}):w({message:"请检查<必填>项是否全部填写",type:"error"})},x=()=>{t.startDebug()},p=$(Array.of({name:"⇈推送源",hotKeys:[],action:s},{name:"⇊拉取源",hotKeys:[],action:n},{name:"⋙生成源",hotKeys:[],action:o},{name:"⋘编辑源",hotKeys:[],action:r},{name:"✗清空表单",hotKeys:[],action:k},{name:"↶撤销操作",hotKeys:[],action:d},{name:"↷重做操作",hotKeys:[],action:y},{name:"⇏调试源",hotKeys:[],action:x},{name:"✓保存源",hotKeys:[],action:f})),_=$(!0),v=$(!1),E=$(-1),P=()=>{v.value=!1};Oe(_,u=>{if(!u)return q.unbind("*");q.unbind(),q("*",l=>{l.preventDefault(),v.value&&E.value>-1&&(p.value[E.value].hotKeys=q.getPressedKeyString())})});const R=u=>{v.value=!0,w({message:"按ESC键或者点击空白处结束录入",type:"info"}),p.value[u].hotKeys=[],E.value=u},W=()=>{_.value=!1;const u=[];p.value.forEach(({hotKeys:l,action:C})=>{q(l.join("+"),T=>{T.preventDefault(),C.call(null)}),u.push(l)}),D(u)},D=u=>{localStorage.setItem("legado_web_hotkeys",JSON.stringify(u))},G=()=>{try{const u=JSON.parse(localStorage.getItem("legado_web_hotkeys"));if(!Array.isArray(u)||u.length==0)return;p.value.forEach((l,C)=>l.hotKeys=u[C]),_.value=!1,W()}catch{w({message:"快捷键配置错误",type:"error"}),localStorage.removeItem("legado_web_hotkeys")}};return Pe(()=>{G()}),(u,l)=>{const C=he,T=ae,Z=Ae;return c(),B(I,null,[m("div",Mt,[(c(!0),B(I,null,J(i(p),g=>(c(),b(C,{size:"large",key:g.name,onClick:g.action},{default:a(()=>[S(Q(g.name),1)]),_:2},1032,["onClick"]))),128)),h(C,{size:"large",onClick:l[0]||(l[0]=()=>_.value=!0)},{default:a(()=>[S("快捷键")]),_:1})]),h(Z,{modelValue:i(_),"onUpdate:modelValue":l[1]||(l[1]=g=>A(_)?_.value=g:null),"show-close":!1,"before-close":P},{header:a(({titleClass:g,titleId:H})=>[m("div",Wt,[m("div",{id:H,class:de(g)},[S(" 快捷键设置 "),i(v)?(c(),B("span",Qt,[h(T,null,{default:a(()=>[S(" / 录入中 ")]),_:1})])):V("",!0)],10,Gt),h(C,{disabled:i(v),onClick:W,icon:i(De)},{default:a(()=>[S("保存")]),_:1},8,["disabled","icon"])])]),default:a(()=>[m("div",Xt,[(c(!0),B(I,null,J(i(p),(g,H)=>(c(),B("div",{key:g.name,class:"hotkeys-item flex-space-between"},[m("span",Yt,[h(T,null,{default:a(()=>[S(Q(g.name),1)]),_:2},1024)]),m("div",Zt,[(c(!0),B(I,null,J(g.hotKeys,(ee,Ce)=>(c(),B("div",{key:ee},[m("kbd",null,Q(ee),1),Ce+1<g.hotKeys.length?(c(),B("span",eo,[h(T,null,{default:a(()=>[S("+")]),_:1})])):V("",!0)]))),128)),g.hotKeys.length==0?(c(),B("span",to,"未设置")):V("",!0)]),h(C,{disabled:i(v),text:"",icon:i(Je),onClick:ee=>R(H)},{default:a(()=>[S("编辑")]),_:2},1032,["disabled","icon","onClick"])]))),128))])]),_:1},8,["modelValue"])],64)}}},no=L(oo,[["__scopeId","data-v-18524ea3"]]);const ro={__name:"SourceTabForm",props:["config"],setup(e){const t=e,n=K(),s=Object.values(t.config),{currentSource:o}=X(n);return(r,d)=>{const k=Y,y=Ke,f=je,x=He,p=Fe,_=qe,v=ze,E=ge,P=me;return c(),b(P,{id:"source-edit"},{default:a(()=>[(c(!0),B(I,null,J(i(s),({name:R,children:W})=>(c(),b(E,{label:R,key:R},{default:a(()=>[h(v,{"label-position":"right","label-width":"5em"},{default:a(()=>[(c(!0),B(I,null,J(W,({type:D,title:G,namespace:u,id:l,array:C,hint:T,required:Z})=>(c(),b(_,{label:G,key:G,required:Z},{default:a(()=>[D=="String"&&typeof u>"u"?(c(),b(k,{key:0,type:"textarea",modelValue:i(o)[l],"onUpdate:modelValue":g=>i(o)[l]=g,placeholder:T,autosize:""},null,8,["modelValue","onUpdate:modelValue","placeholder"])):V("",!0),D=="String"&&typeof u<"u"?(c(),b(k,{key:1,type:"textarea",modelValue:i(o)[u][l],"onUpdate:modelValue":g=>i(o)[u][l]=g,placeholder:T,autosize:""},null,8,["modelValue","onUpdate:modelValue","placeholder"])):V("",!0),D=="Boolean"?(c(),b(y,{key:2,modelValue:i(o)[l],"onUpdate:modelValue":g=>i(o)[l]=g},null,8,["modelValue","onUpdate:modelValue"])):V("",!0),D=="Number"?(c(),b(f,{key:3,modelValue:i(o)[l],"onUpdate:modelValue":g=>i(o)[l]=g,min:0},null,8,["modelValue","onUpdate:modelValue"])):V("",!0),D=="Array"?(c(),b(p,{key:4,modelValue:i(o)[l],"onUpdate:modelValue":g=>i(o)[l]=g},{default:a(()=>[(c(!0),B(I,null,J(C,(g,H)=>(c(),b(x,{value:H,key:g,label:g},null,8,["value","label"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])):V("",!0)]),_:2},1032,["label","required"]))),128))]),_:2},1024)]),_:2},1032,["label"]))),128))]),_:1})}}},so=L(ro,[["__scopeId","data-v-d4af52d7"]]),io={base:{name:"基础",children:[{title:"源类型",id:"bookSourceType",type:"Array",array:["文本","音频","图片","文件"],required:!0},{title:"源域名",id:"bookSourceUrl",type:"String",hint:"通常填写网站主页,例: https://www.qidian.com",required:!0},{title:"源名称",id:"bookSourceName",type:"String",hint:"会显示在源列表",required:!0},{title:"源分组",id:"bookSourceGroup",type:"String",hint:"描述源的特征信息"},{title:"源注释",id:"bookSourceComment",type:"String",hint:"描述源作者和状态"},{title:"书源变量",id:"variableComment",type:"String",hint:"书源变量说明"},{title:"登录地址",id:"loginUrl",type:"String",hint:"填写网站登录网址,仅在需要登录的源有用"},{title:"登录界面",id:"loginUi",type:"String",hint:"自定义登录界面"},{title:"登录检测",id:"loginCheckJs",type:"String",hint:"登录检测js"},{title:"封面解密",id:"coverDecodeJs",type:"String",hint:"封面解密js"},{title:"并发率",id:"concurrentRate",type:"String",hint:"并发率"},{title:"js库",id:"jsLib",type:"String",hint:"js库"},{title:"请求头",id:"header",type:"String",hint:"客户端标识"},{title:"链接验证",id:"bookUrlPattern",type:"String",hint:"当详情页URL与源URL的域名不一致时有效，用于添加网址"}]},search:{name:"搜索",children:[{title:"搜索地址",id:"searchUrl",type:"String",hint:"[域名可省略]/search.php@kw={{key}}"},{title:"校验文字",namespace:"ruleSearch",id:"checkKeyWord",type:"String",hint:"校验关键字"},{title:"列表规则",namespace:"ruleSearch",id:"bookList",type:"String",hint:"选择书籍节点 (规则结果为List<Element>)"},{title:"书名规则",namespace:"ruleSearch",id:"name",type:"String",hint:"选择节点书名 (规则结果为String)"},{title:"作者规则",namespace:"ruleSearch",id:"author",type:"String",hint:"选择节点作者 (规则结果为String)"},{title:"分类规则",namespace:"ruleSearch",id:"kind",type:"String",hint:"选择节点分类信息 (规则结果为String)"},{title:"字数规则",namespace:"ruleSearch",id:"wordCount",type:"String",hint:"选择节点字数信息 (规则结果为String)"},{title:"最新章节",namespace:"ruleSearch",id:"lastChapter",type:"String",hint:"选择节点最新章节 (规则结果为String)"},{title:"简介规则",namespace:"ruleSearch",id:"intro",type:"String",hint:"选择节点书籍简介 (规则结果为String)"},{title:"封面规则",namespace:"ruleSearch",id:"coverUrl",type:"String",hint:"选择节点书籍封面 (规则结果为String类型的url)"},{title:"详情地址",namespace:"ruleSearch",id:"bookUrl",type:"String",hint:"选择书籍详情页网址 (规则结果为String类型的url)"}]},find:{name:"发现",children:[{title:"发现地址",id:"exploreUrl",type:"String",hint:`内容能显示在发现菜单
每行一条发现分类(网址域名可省略)，例：
名称1::网址(Url)1
名称2::网址(Url)2
...`},{title:"发现筛选",id:"exploreScreen",type:"String",hint:"发现筛选规则"},{title:"列表规则",namespace:"ruleExplore",id:"bookList",type:"String",hint:"选择书籍节点 (规则结果为List<Element>)"},{title:"书名规则",namespace:"ruleExplore",id:"name",type:"String",hint:"选择节点书名 (规则结果为String)"},{title:"作者规则",namespace:"ruleExplore",id:"author",type:"String",hint:"选择节点作者 (规则结果为String)"},{title:"分类规则",namespace:"ruleExplore",id:"kind",type:"String",hint:"选择节点分类信息 (规则结果为String)"},{title:"字数规则",namespace:"ruleExplore",id:"wordCount",type:"String",hint:"选择节点字数信息 (规则结果为String)"},{title:"最新章节",namespace:"ruleExplore",id:"lastChapter",type:"String",hint:"选择节点最新章节 (规则结果为String)"},{title:"简介规则",namespace:"ruleExplore",id:"intro",type:"String",hint:"选择节点书籍简介 (规则结果为String)"},{title:"封面规则",namespace:"ruleExplore",id:"coverUrl",type:"String",hint:"选择节点书籍封面 (规则结果为String类型的url)"},{title:"详情地址",namespace:"ruleExplore",id:"bookUrl",type:"String",hint:"选择书籍详情页网址 (规则结果为String类型的url)"}]},detail:{name:"详情",children:[{title:"预处理",namespace:"ruleBookInfo",id:"init",type:"String",hint:"用于加速详情信息检索，只支持AllInOne规则"},{title:"书名规则",namespace:"ruleBookInfo",id:"name",type:"String",hint:"选择节点书名 (规则结果为String)"},{title:"作者规则",namespace:"ruleBookInfo",id:"author",type:"String",hint:"选择节点作者 (规则结果为String)"},{title:"分类规则",namespace:"ruleBookInfo",id:"kind",type:"String",hint:"选择节点分类信息 (规则结果为String)"},{title:"字数规则",namespace:"ruleBookInfo",id:"wordCount",type:"String",hint:"选择节点字数信息 (规则结果为String)"},{title:"最新章节",namespace:"ruleBookInfo",id:"lastChapter",type:"String",hint:"选择节点最新章节 (规则结果为String)"},{title:"简介规则",namespace:"ruleBookInfo",id:"intro",type:"String",hint:"选择节点书籍简介 (规则结果为String)"},{title:"封面规则",namespace:"ruleBookInfo",id:"coverUrl",type:"String",hint:"选择节点书籍封面 (规则结果为String类型的url)"},{title:"目录地址",namespace:"ruleBookInfo",id:"tocUrl",type:"String",hint:"选择书籍详情页网址 (规则结果为String类型的url, 与详情页相同时可省略)"},{title:"下载URL",namespace:"ruleBookInfo",id:"downloadUrls",type:"String",hint:"文件类书源下载地址 (规则结果为String类型的url, 多个链接返回数组)"},{title:"修改书籍",namespace:"ruleBookInfo",id:"canReName",type:"String",hint:"允许修改书名作者(规则结果为String类型, 默认不允许)"}]},directory:{name:"目录",children:[{title:"预处理",namespace:"ruleToc",id:"preUpdateJs",type:"String",hint:"更新目录前调用JS 动态更新目录链接"},{title:"列表规则",namespace:"ruleToc",id:"chapterList",type:"String",hint:"选择目录列表的章节节点 (规则结果为List<Element>)"},{title:"章节名称",namespace:"ruleToc",id:"chapterName",type:"String",hint:"选择章节名称 (规则结果为String)"},{title:"章节地址",namespace:"ruleToc",id:"chapterUrl",type:"String",hint:"选择章节链接 (规则结果为String类型的Url)"},{title:"卷名标识",namespace:"ruleToc",id:"isVolume",type:"String",hint:"章节名称是否是卷名 (规则结果为Bool)"},{title:"收费标识",namespace:"ruleToc",id:"isVip",type:"String",hint:"章节是否为VIP章节 (规则结果为Bool)"},{title:"购买标识",namespace:"ruleToc",id:"isPay",type:"String",hint:"章节是否为已购买 (规则结果为Bool)"},{title:"章节信息",namespace:"ruleToc",id:"updateTime",type:"String",hint:"选择章节信息 (规则结果为String)"},{title:"翻页规则",namespace:"ruleToc",id:"nextTocUrl",type:"String",hint:"选择目录下一页链接 (规则结果为List<String>或String)"}]},content:{name:"正文",children:[{title:"脚本注入",namespace:"ruleContent",id:"webJs",type:"String",hint:"注入javascript，用于模拟鼠标点击等，必须有返回值，一般为String类型"},{title:"正文规则",namespace:"ruleContent",id:"content",type:"String",hint:"选择正文内容 (规则结果为String)"},{title:"翻页规则",namespace:"ruleContent",id:"nextContentUrl",type:"String",hint:"选择下一分页(不是下一章)链接 (规则结果为String类型的Url)"},{title:"资源正则",namespace:"ruleContent",id:"sourceRegex",type:"String",hint:"匹配资源的url特征，用于嗅探"},{title:"替换规则",namespace:"ruleContent",id:"replaceRegex",type:"String",hint:"多页内容合并后替换，用于正文净化"},{title:"图片样式",namespace:"ruleContent",id:"imageStyle",type:"String",hint:"FULL:铺满 不填:默认样式"},{title:"购买操作",namespace:"ruleContent",id:"payAction",type:"String",hint:"填写JavaScript 返回购买链接或者调用购买接口"},{title:"图片解密",namespace:"ruleContent",id:"imageDecode",type:"String",hint:"填写JavaScript 返回解密图片的bytes "}]},other:{name:"其他",children:[{title:"启用搜索",id:"enabled",type:"Boolean"},{title:"启用发现",id:"enabledExplore",type:"Boolean"},{title:"Cookie",id:"enabledCookieJar",type:"Boolean"},{title:"搜索权重",id:"weight",type:"Number"},{title:"排序编号",id:"customOrder",type:"Number"}]}},lo={base:{name:"基础",children:[{title:"源域名",id:"sourceUrl",type:"String",hint:"通常填写网站主页,例: https://www.qidian.com",required:!0},{title:"图标",id:"sourceIcon",type:"String",hint:"填写图片网络链接"},{title:"源名称",id:"sourceName",type:"String",hint:"会显示在源列表",required:!0},{title:"源分组",id:"sourceGroup",type:"String",hint:"描述源的特征信息"},{title:"源注释",id:"sourceComment",type:"String",hint:"描述源作者和状态"},{title:"分类地址",id:"sortUrl",type:"String",hint:`名称1::链接1
名称2::链接2`},{title:"登录地址",id:"loginUrl",type:"String",hint:"填写网站登录网址,仅在需要登录的源有用"},{title:"登录界面",id:"loginUi",type:"String",hint:"自定义登录界面"},{title:"登录检测",id:"loginCheckJs",type:"String",hint:"登录检测js"},{title:"封面解密",id:"coverDecodeJs",type:"String",hint:"封面解密js"},{title:"请求头",id:"header",type:"String",hint:"客户端标识"},{title:"变量说明",id:"variableComment",type:"String",hint:"源变量说明"},{title:"并发率",id:"concurrentRate",type:"String",hint:"并发率"}]},list:{name:"列表",children:[{title:"列表规则",id:"ruleArticles",type:"String",hint:"规则结果为List<Element>"},{title:"翻页规则",id:"ruleNextPage",type:"String",hint:"下一页链接 规则结果为List<String>或String"},{title:"标题规则",id:"ruleTitle",type:"String",hint:"文章标题 规则结果为String"},{title:"时间规则",id:"rulePubDate",type:"String",hint:"文章发布时间 规则结果为String"},{title:"描述规则",id:"ruleDescription",type:"String",hint:"文章简要描述 规则结果为String"},{title:"图片规则",id:"ruleImage",type:"String",hint:"文章图片链接 规则结果为String"},{title:"链接规则",id:"ruleLink",type:"String",hint:"文章链接 规则结果为String"}]},webView:{name:"WebView",children:[{title:"内容规则",id:"ruleContent",type:"String",hint:"文章正文"},{title:"样式规则",id:"style",type:"String",hint:"文章正文样式 填写css"},{title:"注入规则",id:"injectJs",type:"String",hint:"注入网页的JavaScript"},{title:"黑名单",id:"contentBlacklist",type:"String",hint:"webView链接加载黑名单，英文逗号隔开"},{title:"白名单",id:"contentWhitelist",type:"String",hint:"webView链接加载白名单，英文逗号隔开"}]},other:{name:"其他",children:[{title:"列表样式",id:"articleStyle",type:"Array",array:["默认","大图","双列"]},{title:"加载地址",id:"loadWithBaseUrl",type:"Boolean"},{title:"启用JS",id:"enableJs",type:"Boolean"},{title:"启用",id:"enabled",type:"Boolean"},{title:"Cookie",id:"enabledCookieJar",type:"Boolean"},{title:"单URL",id:"singleUrl",type:"Boolean"},{title:"排序编号",id:"customOrder",type:"Number"}]}};const co={class:"editor"},ao={__name:"SourceEditor",setup(e){const t=$({});return/bookSource/i.test(location.href)?(t.value=io,document.title="书源管理"):(t.value=lo,document.title="订阅源管理"),(n,s)=>{const o=so,r=no,d=zt;return c(),B("div",co,[h(o,{class:"left",config:i(t)},null,8,["config"]),h(r),h(d,{class:"right"})])}}},ce=L(ao,[["__scopeId","data-v-ef32d41f"]]),ke=[{path:"/bookSource",name:"book-home",component:ce},{path:"/rssSource",name:"rss-home",component:ce}];ne({history:re(),routes:ke});const ve=ne({history:re(),routes:Se.concat(ke)});ve.afterEach(e=>{e.name=="shelf"&&(document.title="书架")});Me(Ye).use(jt).use(ve).mount("#app");oe(()=>import("./config-fcddf6b1.js"),["./config-fcddf6b1.js","./vendor-b52b0953.js","./vendor-6f0d1692.css","./config-811f2a0b.css"],import.meta.url);export{j as A,L as _,po as u};
