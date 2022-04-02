import{l as m,a as V,u as x,r as Z,c as f,w as c,Q as ce,o as u,b as a,d as ue,e as S,f as E,g as Se,h as ie,i as ge,j as me,k as J,m as z,n as o,t as l,p as _,q as C,s as F,v as Ee,x as N,F as D,y as _e,z as K,A as Y,B as Ie,C as Te,D as re,E as le,G as H,H as ee,I as U,J as j,K as $,L as de,M as fe,N as te,O as pe,P as ve,R as Ne,S as he,T as Oe,U as Re,V as we,W as Ce,X as Ae,Y as be,Z as ye}from"./vendor.1bf2fc46.js";const Le=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const d of r)if(d.type==="childList")for(const s of d.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function i(r){const d={};return r.integrity&&(d.integrity=r.integrity),r.referrerpolicy&&(d.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?d.credentials="include":r.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function t(r){if(r.ep)return;r.ep=!0;const d=i(r);fetch(r.href,d)}};Le();const Ve={},X={ERROR:"error",RESET_ERROR:"resetError",LOADING:"setLoading"},Fe=()=>({error:null,loading:!1}),De={},Ue={[X.ERROR](e,n){e.error=n},[X.RESET_ERROR](e){e.error=null},[X.LOADING](e,n){e.loading=n}};var G={name:"Global",namespaced:!0,state:Fe,actions:De,mutations:Ue,mutationTypes:m.exports.mapValues(X,e=>`Global/${e}`),actionTypes:m.exports.mapValues(Ve,e=>`Global/${e}`)};const A={LOAD_CONFIG:"loadConfig",SAVE_CONFIG:"saveConfig",LOAD_STATS:"loadStats",LOAD_CLIENTS:"loadClients",SAVE_CLIENTS:"saveClients",RESTART_SERVICE:"restartService",LOAD_SITES:"loadSites"},g={STORE_CONFIG:"storeConfig",SHOW_TWO_FACTOR:"showTwoFactor",HIDE_TWO_FACTOR:"hideTwoFactor",STORE_STATS:"storeStats",SET_LOGIN_REQUIRED:"setLoginRequired",SET_LOGIN_ERROR:"setLoginError",SET_CONNECTION_ERROR:"setConnectionError",SET_CLIENTS:"setClients",SET_CONFIG_CLIENTS:"setConfigClients",SET_SERVICE_STATUS:"setServiceStatus",SET_SITES:"setSites"},Ge=()=>({config:{},showTwoFactor:!1,version:null,versionError:!1,stats:{},loginRequired:!1,loginError:!1,connectionError:!1,existingClients:[],clients:[],serviceStatus:"DISCONNECTED",sites:[{label:"Default",value:"default"}]}),P=async(e,n)=>{try{e.commit(G.mutationTypes.RESET_ERROR,null,{root:!0}),await n(),e.commit(g.SET_CONNECTION_ERROR,!1)}catch(i){if(i.response){if(i.response.status===499)throw e.commit(g.SHOW_TWO_FACTOR),i;if(i.response.status===403)throw e.commit(g.SET_LOGIN_REQUIRED,!0),e.commit(g.SET_LOGIN_ERROR,!0),i;if(i.response.status===408)throw e.commit(g.SET_CONNECTION_ERROR,!0),i;const t=m.exports.get(i,"response.data.error",i.message);e.commit(G.mutationTypes.ERROR,t,{root:!0})}else e.commit(G.mutationTypes.ERROR,i.message,{root:!0});throw i}},Pe={async[A.LOAD_CONFIG](e){return P(e,async()=>{const n=await V.get("/admin/plugins/unifi_presence/api/config");e.commit(g.STORE_CONFIG,n.data)})},async[A.SAVE_CONFIG](e){return e.commit(g.HIDE_TWO_FACTOR),e.commit(g.SET_LOGIN_ERROR,!1),P(e,async()=>{const n=await V.put("/admin/plugins/unifi_presence/api/config",Object.assign(e.state.config,{loginRequired:e.state.loginRequired}));e.commit(g.STORE_CONFIG,n.data)})},async[A.LOAD_STATS](e){return P(e,async()=>{const n=await V.get("/admin/plugins/unifi_presence/api/stats");e.commit(g.STORE_STATS,n.data),e.commit(g.SET_LOGIN_REQUIRED,!1)})},async[A.LOAD_CLIENTS](e){return P(e,async()=>{const n=await V.get("/admin/plugins/unifi_presence/api/clients");e.commit(g.SET_CLIENTS,n.data.clients)})},async[A.SAVE_CLIENTS](e,{mac:n,value:i}){return P(e,async()=>{const t=e.state.clients.filter(d=>d.mac!=n&&d.watched||d.mac==n&&i===!0).map(d=>{const s=Object.assign({},d);return delete s.watched,s}),r=await V.put("/admin/plugins/unifi_presence/api/config",{clients:t});e.commit(g.SET_CONFIG_CLIENTS,r.data.clients)})},async[A.RESTART_SERVICE](e){return P(e,async()=>{await V.post("/admin/plugins/unifi_presence/api/restartService")})},async[A.LOAD_SITES](e){return P(e,async()=>{const n=await V.get("/admin/plugins/unifi_presence/api/sites");e.commit(g.SET_SITES,n.data.sites)})}},ke={[g.STORE_CONFIG](e,n){e.config=n,e.existingClients=n.clients.map(i=>i.mac)},[g.STORE_STATS](e,n){n.version&&(e.version=n.version,e.versionError=n.versionError),n.wan&&n.www&&(e.stats={wan:n.wan,www:n.www})},[g.SHOW_TWO_FACTOR](e){e.showTwoFactor=!0,e.config.token=null,e.twoFaEnabled=!0},[g.HIDE_TWO_FACTOR](e){e.showTwoFactor=!1},[g.SET_LOGIN_REQUIRED](e,n){e.loginRequired=n},[g.SET_LOGIN_ERROR](e,n){e.loginError=n,e.twoFaEnabled=!1},[g.SET_CONNECTION_ERROR](e,n){e.connectionError=n},[g.SET_CLIENTS](e,n){n=n.map(i=>(i.watched=e.existingClients.includes(i.mac),i)),e.clients=m.exports.orderBy(n,["watched","type"],["desc","desc"])},[g.SET_CONFIG_CLIENTS](e,n){e.config.clients=n},[g.SET_SERVICE_STATUS](e,n){e.serviceStatus=n},[g.SET_SITES](e,n){e.sites=n}};var p={name:"Settings",namespaced:!0,state:Ge,actions:Pe,mutations:ke,mutationTypes:m.exports.mapValues(g,e=>`Settings/${e}`),actionTypes:m.exports.mapValues(A,e=>`Settings/${e}`)};var q=(e,n)=>{for(const[i,t]of n)e[i]=t;return e};const Me={name:"App",setup(){const e=x();let n=null;const i=()=>{const t=`ws://${document.location.hostname}:3000/plugins/unifi_presence/api/socket`,r=new WebSocket(t,"webClient");r.onopen=d=>{n=setInterval(()=>r.send("ping"),2e4)},r.onmessage=d=>{if(d.data==="pong")return;const s=JSON.parse(d.data);switch(s.type){case"stats":return e.commit(p.mutationTypes.STORE_STATS,s.data);case"serviceStatus":return e.commit(p.mutationTypes.SET_SERVICE_STATUS,s.data.status)}},r.onclose=()=>{clearInterval(n),setTimeout(i,5e3)}};i()}};function We(e,n,i,t,r,d){const s=Z("router-view");return u(),f(ce,{view:"hHh lpR fFf"},{default:c(()=>[a(ue,null,{default:c(()=>[a(s)]),_:1})]),_:1})}var Qe=q(Me,[["render",We]]);const qe={},k={LOAD_SETTINGS:"LOAD_SETTINGS",SAVE_SETTINGS:"SAVE_SETTINGS",LOAD_CLIENTS:"LOAD_CLIENTS",SAVE_CLIENTS:"SAVE_CLIENTS",RESTART_SERVICE:"RESTART_SERVICE"},ne=async(e,n)=>{e.commit(G.mutationTypes.LOADING,!0,{root:!0});try{await n()}finally{e.commit(G.mutationTypes.LOADING,!1,{root:!0})}},ze={async[k.LOAD_SETTINGS](e){return ne(e,async()=>{await e.dispatch(p.actionTypes.LOAD_CONFIG,null,{root:!0});const n=e.rootState.Settings.config;n.ipaddress&&n.username&&n.password&&(await e.dispatch(p.actionTypes.LOAD_STATS,null,{root:!0}),await e.dispatch(p.actionTypes.LOAD_SITES,null,{root:!0}))})},async[k.SAVE_SETTINGS](e){return ne(e,async()=>{await e.dispatch(p.actionTypes.SAVE_CONFIG,null,{root:!0}),await e.dispatch(p.actionTypes.LOAD_STATS,null,{root:!0}),await e.dispatch(p.actionTypes.LOAD_SITES,null,{root:!0})})},async[k.LOAD_CLIENTS](e){return ne(e,async()=>{m.exports.isEmpty(e.rootState.Settings.config)&&await e.dispatch(k.LOAD_SETTINGS),await e.dispatch(p.actionTypes.LOAD_CLIENTS,null,{root:!0})})},async[k.SAVE_CLIENTS](e,{mac:n,value:i}){return e.dispatch(p.actionTypes.SAVE_CLIENTS,{mac:n,value:i},{root:!0})},async[k.RESTART_SERVICE](e){return e.dispatch(p.actionTypes.RESTART_SERVICE,null,{root:!0})}};var M={name:"Actions",namespaced:!0,actions:ze,actionTypes:m.exports.mapValues(k,e=>`Actions/${e}`),mutationTypes:m.exports.mapValues(qe,e=>`Actions/${e}`)},He="/admin/plugins/unifi_presence/assets/udm.c8127c61.png";const $e={name:"UnifiController",setup(){const e=x(),n=S(()=>e.state.Settings.config),i=S(()=>e.state.Global.loading),t=S(()=>e.state.Settings.loginRequired),r=S(()=>e.state.Settings.version),d=S(()=>e.state.Settings.versionError),s=S(()=>e.state.Settings.stats),I=S(()=>e.state.Settings.serviceStatus),b=S(()=>e.state.Global.error),W=S(()=>e.state.Settings.connectionError),Q=S(()=>!(t.value||b.value||W.value||r.value===null||r.value<"6.4.54"||!n.value.username||!n.value.ipaddress||!n.value.password||I.value!=="CONNECTED")),y=T=>T<3600?`${Math.round(T/60)}m`:T<86400?`${Math.round(T/60/60)}h`:`${Math.floor(T/60/60/24)}d`,h=S(()=>y(s.value.www.uptime)),R=S(()=>y(s.value.wan.stats.uptime)),L=E(!1);return{isLoading:i,version:r,versionError:d,loginRequired:t,error:b,connected:Q,stats:s,ispUptime:h,udmUptime:R,serviceStatus:I,restartLoading:L,restartService:async()=>{L.value=!0,await e.dispatch(M.actionTypes.RESTART_SERVICE,null,{root:!0}),L.value=!1},udm:He}}},Be={class:"text-h6"},xe={key:0,class:"text-weight-medium text-negative"},Ke={key:1,class:"text-subtitle2"},Ye={key:2,class:"text-weight-medium text-negative"},je={class:"text-h6"},Xe={class:"text-subtitle2"},Ze={class:"row"},Je={class:"col-4 text-weight-light"},et={class:"text-weight-medium"},tt={class:"col-5 text-weight-light"},nt={class:"text-weight-medium"},st={class:"col-3 text-weight-light"},at={class:"text-weight-medium"},ot={class:"col-9 text-weight-light"},it={class:"text-weight-medium"},rt={class:"col-3 text-weight-light"},lt={class:"text-weight-medium"};function dt(e,n,i,t,r,d){return u(),f(Ie,{class:"my-card"},{default:c(()=>[a(Se,{src:t.udm,"spinner-color":"white"},null,8,["src"]),t.isLoading?(u(),f(ie,{key:0,align:"center"},{default:c(()=>[a(ge,{color:"primary",size:"3em",class:"q-mb-md"})]),_:1})):(u(),f(me,{key:1},{default:c(()=>[a(_e,null,{default:c(()=>[t.connected?(u(),_(D,{key:1},[a(J,null,{default:c(()=>[a(z,null,{default:c(()=>[o("div",je,l(t.stats.wan.name),1),o("div",Xe,l(e.$t(`SERVICE.${t.serviceStatus}`)),1),a(Ee,{caption:""},{default:c(()=>[N(l(e.$t("UNIFI.VERSION",{version:t.version})),1)]),_:1})]),_:1}),a(z,{avatar:""},{default:c(()=>[a(F,{size:"40px",name:"verified",color:"light-green-7"})]),_:1})]),_:1}),a(J,null,{default:c(()=>[a(z,null,{default:c(()=>[o("div",Ze,[o("div",Je,[o("span",et,l(e.$t("UNIFI.CPU"))+":",1),N(" "+l(t.stats.wan.stats.cpu)+"%",1)]),o("div",tt,[o("span",nt,l(e.$t("UNIFI.MEMORY"))+":",1),N(" "+l(t.stats.wan.stats.mem)+"Mb",1)]),o("div",st,[o("span",at,l(e.$t("UNIFI.UPTIME"))+":",1),N(" "+l(t.udmUptime),1)]),o("div",ot,[o("span",it,l(e.$t("UNIFI.ISP"))+":",1),N(" "+l(t.stats.www.isp),1)]),o("div",rt,[o("span",lt,l(e.$t("UNIFI.UPTIME"))+":",1),N(" "+l(t.ispUptime),1)])])]),_:1})]),_:1})],64)):(u(),f(J,{key:0},{default:c(()=>[a(z,null,{default:c(()=>[o("div",Be,l(e.$t(`SERVICE.${t.serviceStatus}`)),1),t.versionError?(u(),_("div",xe,l(e.$t("COMMON.VERSION_ERROR",{version:t.version})),1)):C("",!0),t.loginRequired?(u(),_("div",Ke,l(e.$t("UNIFI.LOGIN_REQUIRED")),1)):C("",!0),t.error?(u(),_("div",Ye,l(t.error),1)):C("",!0)]),_:1}),a(z,{avatar:""},{default:c(()=>[a(F,{size:"40px",name:"warning_amber",color:"orange-14"})]),_:1})]),_:1}))]),_:1})]),_:1})),a(K),a(ie,null,{default:c(()=>[a(Y,{class:"q-ml-md",outline:"",icon:"restart_alt",size:"sm",color:"orange-14",loading:t.restartLoading,onClick:t.restartService,"data-role":"none"},{default:c(()=>[N(l(e.$t("SERVICE.RESTART")),1)]),_:1},8,["loading","onClick"])]),_:1})]),_:1})}var ct=q($e,[["render",dt]]);const ut={name:"Page",components:{UnifiController:ct},setup(){return{}}},St={class:"q-pa-s,"},gt={class:"q-gutter-y-md bg-light-green-7"},mt={class:"row"},Et={class:"col-5 col-md-4 col-lg-3 q-pt-md"},_t={class:"col-6 col-md-7 col-lg-8"};function It(e,n,i,t,r,d){const s=Z("UnifiController"),I=Z("router-view");return u(),_(D,null,[o("div",St,[o("div",gt,[a(Te,{"inline-label":"",dense:"",class:"text-grey-3 bg-light-green-6","active-color":"white bg-light-green-7","indicator-color":"light-green-9",align:"justify"},{default:c(()=>[a(le,{name:"mails",to:{name:"settings"},icon:"settings",label:e.$t("UNIFI.SETTINGS"),"data-role":"none"},null,8,["label"]),a(le,{name:"alarms",to:{name:"clients"},icon:"router",label:e.$t("UNIFI.DEVICES"),"data-role":"none"},null,8,["label"])]),_:1})])]),a(re,{padding:""},{default:c(()=>[o("div",mt,[o("div",Et,[a(s)]),a(H),o("div",_t,[a(I)])])]),_:1})],64)}var Tt=q(ut,[["render",It]]),ft=e=>({required:[n=>!!n||e("VALIDATION.REQUIRED")],topic:[n=>/^[\w-]+((?:\/[\w-]+)+)?$/.test(n)||e("VALIDATION.INVALID_TOPIC")],ipAddress:[n=>/\b((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.|$)){4}\b/.test(n)||e("VALIDATION.INVALID_IP")],port:[n=>n==null||/^((6553[0-5])|(655[0-2][0-9])|(65[0-4][0-9]{2})|(6[0-4][0-9]{3})|([1-5][0-9]{4})|([0-5]{0,5})|([0-9]{1,4}))$/.test(n)||e("VALIDATION.INVALID_PORT")]});const pt={name:"Settings",components:{},setup(){const{t:e}=ee.exports.useI18n({useScope:"global"}),n=x();n.dispatch(M.actionTypes.LOAD_SETTINGS);const i=S(()=>n.state.Settings.config),t=S(()=>n.state.Settings.showTwoFactor),r=S(()=>n.state.Settings.loginRequired),d=S(()=>n.state.Settings.versionError),s=S(()=>n.state.Settings.version),I=S(()=>n.state.Settings.sites),b=S(()=>n.state.Settings.loginError),W=S(()=>n.state.Global.loading),Q=S(()=>n.state.Settings.serviceStatus),y=S(()=>Q.value!=="NO_MQTT"),h=E(!1),R={topic:E(null),native:E(null),ipAddress:E(null),port:E(null),username:E(null),password:E(null),twoFa:E(null),site:E(null)},L=async()=>{const O=Object.values(R).filter(v=>v.value&&v.value.validate);if(O.forEach(v=>v.value.validate()),O.find(v=>(v.value.name==="username"||v.value.name==="password")&&b.value||v.value.name==="twoFa"&&t?!1:v.value.hasError)===void 0){h.value=!0;try{await n.dispatch(M.actionTypes.SAVE_SETTINGS)}finally{h.value=!1}}};return{config:i,showPassword:E(!0),showTwoFactor:t,isLoading:W,validationRules:ft(e),formFields:R,saveSettings:L,isSaving:h,loginRequired:r,loginError:b,sites:I,versionError:d,version:s,hasMqtt:y}}},vt={class:"row"},Nt={class:"col-12"},ht={class:"text-h5 self-end"},Ot={class:"text-h5 q-mt-xl self-end"},Rt={key:3,class:"row"},wt={class:"col-6"},Ct={class:"row q-pt-md"},At={class:"col-12"};function bt(e,n,i,t,r,d){return u(),_(D,null,[o("div",vt,[o("div",Nt,[o("div",ht,l(e.$t("UNIFI.MQTT_SETTINGS")),1),a(K,{spaced:""}),t.hasMqtt?(u(),f(U,{key:0,name:"topic",ref:t.formFields.topic,disable:t.isSaving||t.isLoading,loading:t.isLoading,modelValue:t.config.topic,"onUpdate:modelValue":n[0]||(n[0]=s=>t.config.topic=s),label:e.$t("UNIFI.TOPIC"),hint:e.$t("UNIFI.TOPIC_HINT"),rules:t.validationRules.topic,"data-role":"none"},null,8,["disable","loading","modelValue","label","hint","rules"])):(u(),f(j,{key:1,rounded:"",class:"bg-red text-white q-mt-md"},{default:c(()=>[N(l(e.$t("UNIFI.NEED_MQTT")),1)]),_:1})),o("div",Ot,l(e.$t("UNIFI.CONTROLLER")),1),a(K,{spaced:""}),a($,{name:"native",ref:t.formFields.native,disable:t.isSaving||t.isLoading,loading:t.isLoading,modelValue:t.config.native,"onUpdate:modelValue":n[1]||(n[1]=s=>t.config.native=s),size:"lg",label:e.$t("UNIFI.NATIVE_HINT")},null,8,["disable","loading","modelValue","label"]),a(U,{name:"ip",ref:t.formFields.ipAddress,disable:t.isSaving||t.isLoading,loading:t.isLoading,modelValue:t.config.ipaddress,"onUpdate:modelValue":n[2]||(n[2]=s=>t.config.ipaddress=s),label:e.$t("UNIFI.IP"),hint:e.$t("UNIFI.IP_HINT"),rules:t.validationRules.ipAddress,"data-role":"none"},null,8,["disable","loading","modelValue","label","hint","rules"]),t.config.native?C("",!0):(u(),f(U,{key:2,name:"port",ref:t.formFields.port,disable:t.isSaving||t.isLoading,loading:t.isLoading,modelValue:t.config.port,"onUpdate:modelValue":n[3]||(n[3]=s=>t.config.port=s),label:e.$t("UNIFI.PORT"),hint:e.$t("UNIFI.PORT_HINT"),rules:t.validationRules.port,"data-role":"none"},null,8,["disable","loading","modelValue","label","hint","rules"])),a(U,{name:"username",ref:t.formFields.username,disable:t.isSaving||t.isLoading,loading:t.isLoading,modelValue:t.config.username,"onUpdate:modelValue":n[4]||(n[4]=s=>t.config.username=s),label:e.$t("UNIFI.USERNAME"),rules:t.validationRules.required,error:t.loginError,"data-role":"none"},null,8,["disable","loading","modelValue","label","rules","error"]),a(U,{name:"password",ref:t.formFields.password,disable:t.isSaving||t.isLoading,loading:t.isLoading,type:t.showPassword?"password":"text",modelValue:t.config.password,"onUpdate:modelValue":n[6]||(n[6]=s=>t.config.password=s),label:e.$t("UNIFI.PASSWORD"),rules:t.validationRules.required,error:t.loginError,"data-role":"none"},{append:c(()=>[a(F,{name:t.showPassword?"visibility_off":"visibility",class:"cursor-pointer",onClick:n[5]||(n[5]=s=>t.showPassword=!t.showPassword)},null,8,["name"])]),_:1},8,["disable","loading","type","modelValue","label","rules","error"]),a(de,{ref:t.formFields.site,modelValue:t.config.site,"onUpdate:modelValue":n[7]||(n[7]=s=>t.config.site=s),disable:t.isSaving||t.isLoading,loading:t.isLoading,"emit-value":"","map-options":"",options:t.sites,label:e.$t("UNIFI.SITE")},null,8,["modelValue","disable","loading","options","label"]),t.showTwoFactor?(u(),_("div",Rt,[o("div",wt,[a(U,{name:"twoFa",ref:t.formFields.twoFa,disable:t.isSaving||t.isLoading,loading:t.isLoading,type:"text",modelValue:t.config.token,"onUpdate:modelValue":n[8]||(n[8]=s=>t.config.token=s),label:e.$t("UNIFI.TWO_FA"),error:"","data-role":"none"},{append:c(()=>[a(F,{name:"lock",class:"cursor-pointer"})]),_:1},8,["disable","loading","modelValue","label"])]),a(H)])):C("",!0)])]),a(H),o("div",Ct,[o("div",At,[t.versionError?(u(),f(j,{key:0,rounded:"",class:"bg-red text-white q-mt-md"},{default:c(()=>[N(l(e.$t("COMMON.VERSION_ERROR",{version:t.version})),1)]),_:1})):(u(),f(Y,{key:1,loading:t.isSaving,disable:!t.isSaving&&t.isLoading,push:"",color:"light-green-7",icon:"save",size:"md",label:e.$t(t.loginRequired?"COMMON.SAVE_AND_LOGIN_BTN":"COMMON.SAVE_BTN"),onClick:t.saveSettings},null,8,["loading","disable","label","onClick"]))]),a(H)])],64)}var yt=q(pt,[["render",bt]]);const Lt={name:"Clients",setup(){const{t:e}=ee.exports.useI18n({useScope:"global"}),n=x(),i=S(()=>n.state.Settings.versionError),t=S(()=>n.state.Settings.version);i.value===!1&&n.dispatch(M.actionTypes.LOAD_CLIENTS);const r=S(()=>n.state.Global.loading),d=S(()=>{const T=n.state.Settings.clients.filter(w=>{const se=w.type==="WIRELESS",ae=w.type==="WIRED",oe=w.type==="WIRELESS"&&!w.experience;return se&&W.value!==se||ae&&y.value!==ae||oe&&Q.value===!oe?!1:h.value?!!(m.exports.lowerCase(w.name).indexOf(m.exports.lowerCase(h.value))!=-1||m.exports.lowerCase(w.mac).indexOf(m.exports.lowerCase(h.value))!=-1||w.ssid&&m.exports.lowerCase(w.ssid).indexOf(m.exports.lowerCase(h.value))!=-1):!0});if(R.value==="standard")return T;const v=["signalPercentage","watched"].includes(R.value)?"desc":"asc";return m.exports.orderBy(T,[R.value],[v])}),s=S(()=>n.state.Settings.clients.filter(T=>/google/i.test(T.system)).length>0),I=O=>O>77?"wifi":O>33?"wifi_2_bar":"wifi_1_bar",b=(O,T,v)=>{n.dispatch(M.actionTypes.SAVE_CLIENTS,{mac:O,value:T})},W=E(!0),Q=E(!0),y=E(!0),h=E(""),R=E("standard"),L=[{label:e("SORTING.STANDARD"),value:"standard"},{label:e("SORTING.SELECTED"),value:"watched"},{label:e("SORTING.NAME"),value:"name"},{label:e("SORTING.SSID"),value:"ssid"},{label:e("SORTING.EXPERIENCE"),value:"signalPercentage"},{label:e("SORTING.TYPE"),value:"type"}];return{isLoading:r,clients:d,update:b,wifiIcon:I,showWifi:W,showOffline:Q,showWired:y,search:h,sorting:R,sortOptions:L,versionError:i,version:t,hasAndroid:s}}},Vt=e=>(pe("data-v-580bc5f2"),e=e(),ve(),e),Ft={key:1,class:"row"},Dt={class:"col-12"},Ut={class:"text-h5 self-end"},Gt={class:"row"},Pt={class:"col-3"},kt={class:"col-4"},Mt={class:"col-2"},Wt={class:"col-2"},Qt={class:"bg-light-green-7 text-white"},qt=Vt(()=>o("th",{class:"text-left"},null,-1)),zt={class:"text-left"},Ht={class:"text-left"},$t={class:"text-left"},Bt={class:"text-left"},xt={class:"text-left"},Kt={class:""},Yt={key:0},jt={key:1},Xt={key:2};function Zt(e,n,i,t,r,d){return u(),_(D,null,[t.versionError?(u(),f(j,{key:0,rounded:"",class:"bg-red text-white q-mt-md"},{default:c(()=>[N(l(e.$t("COMMON.VERSION_ERROR",{version:t.version})),1)]),_:1})):C("",!0),t.versionError?C("",!0):(u(),_("div",Ft,[o("div",Dt,[o("div",Ut,l(e.$t("UNIFI.DEVICES")),1),a(K,{spaced:""}),o("p",null,l(e.$t("UNIFI.CLIENT_SELECTION")),1),t.hasAndroid?(u(),f(j,{key:0,dense:"",rounded:"",class:"bg-orange-13 text-white q-my-md"},{avatar:c(()=>[a(F,{name:"warning",color:"white"})]),action:c(()=>[a(Y,{flat:"",color:"white",label:e.$t("UNIFI.ANDROID_DEVICE_LINK"),href:"https://www.hotsplots.de/fileadmin/Daten/Support/Downloads/Kurzanleitung_MAC-Adresse.pdf",target:"_blank"},null,8,["label"])]),default:c(()=>[N(" "+l(e.$t("UNIFI.ANDROID_DEVICES")),1)]),_:1})):C("",!0),o("div",Gt,[o("div",Pt,[a(U,{clearable:"","bottom-slots":"",modelValue:t.search,"onUpdate:modelValue":n[0]||(n[0]=s=>t.search=s),label:e.$t("UNIFI.SEARCH"),dense:""},{append:c(()=>[a(F,{name:"search"})]),_:1},8,["modelValue","label"])]),a(H),o("div",kt,[a($,{modelValue:t.showWifi,"onUpdate:modelValue":n[1]||(n[1]=s=>t.showWifi=s),label:e.$t("UNIFI.SHOW_WIFI")},null,8,["modelValue","label"]),a($,{modelValue:t.showWired,"onUpdate:modelValue":n[2]||(n[2]=s=>t.showWired=s),label:e.$t("UNIFI.SHOW_WIRED")},null,8,["modelValue","label"])]),o("div",Mt,[a($,{modelValue:t.showOffline,"onUpdate:modelValue":n[3]||(n[3]=s=>t.showOffline=s),label:e.$t("UNIFI.SHOW_OFFLINE")},null,8,["modelValue","label"])]),o("div",Wt,[a(de,{modelValue:t.sorting,"onUpdate:modelValue":n[4]||(n[4]=s=>t.sorting=s),dense:"","emit-value":"","map-options":"",options:t.sortOptions,label:e.$t("UNIFI.SORT")},null,8,["modelValue","options","label"])])]),a(fe,{bordered:"",separator:"vertical"},{default:c(()=>[o("thead",Qt,[o("tr",null,[qt,o("th",zt,l(e.$t("UNIFI.NAME")),1),o("th",Ht,l(e.$t("UNIFI.MAC")),1),o("th",$t,l(e.$t("UNIFI.SSID")),1),o("th",Bt,l(e.$t("UNIFI.EXPERIENCE")),1),o("th",xt,l(e.$t("UNIFI.TYPE")),1)])]),o("tbody",Kt,[t.isLoading?(u(),_(D,{key:0},te(10,s=>o("tr",{key:s},[(u(),_(D,null,te(6,I=>o("td",{key:I},[a(Ne,{animation:"blink",type:"text"})])),64))])),64)):(u(!0),_(D,{key:1},te(t.clients,s=>(u(),_("tr",{key:s.mac},[o("td",null,[a($,{name:s.mac,"onUpdate:modelValue":[I=>t.update(s.mac,!s.watched),I=>s.watched=I],modelValue:s.watched,size:"md"},null,8,["name","onUpdate:modelValue","modelValue"])]),o("td",null,l(s.name),1),o("td",null,l(s.mac),1),o("td",null,l(s.ssid),1),s.type==="WIRELESS"&&s.experience?(u(),_("td",Yt,[N(l(s.experience)+" ",1),a(F,{class:"float-right",name:t.wifiIcon(s.signalPercentage),size:"22px"},null,8,["name"])])):s.type==="WIRELESS"?(u(),_("td",jt,"Offline")):(u(),_("td",Xt,"-")),o("td",null,l(s.type),1)]))),128))])]),_:1})])]))],64)}var Jt=q(Lt,[["render",Zt],["__scopeId","data-v-580bc5f2"]]);const en={setup(){const e=he(),n=Oe();console.log(n,e)}},tn=o("h3",null,"Not Found",-1);function nn(e,n,i,t,r,d){return u(),f(re,{padding:""},{default:c(()=>[tn,a(Y,{to:{name:"settings"},label:"open Settings"})]),_:1})}var sn=q(en,[["render",nn]]),an=[{base:"/admin/plugins/unifi_presence",path:"/",component:Tt,children:[{name:"settings",path:"",component:yt},{name:"clients",path:"clients",component:Jt}]},{path:"/:pathMatch(.*)*",name:"NotFound",component:sn}],on={COMMON:{SAVE_BTN:"Speichern",SAVE_AND_LOGIN_BTN:"Speichern und Einloggen",VERSION_ERROR:"Die Version deines UniFi Controller ist kleiner als 6.4.54. Bitte aktualisiere zuerst deinen Controller um das Plugin nutzen zu k\xF6nnen. Deine aktuelle Version ist: {version}"},UNIFI:{SETTINGS:"Einstellungen",DEVICES:"Ger\xE4te",MQTT_SETTINGS:"MQTT Einstellungen",CONTROLLER:"UniFi Controller Einstellungen",TOPIC:"MQTT Topic",TOPIC_HINT:"Das Mqtt Topic in dem die Werte geschrieben werden sollen. Z.B. UniFi/clients. Kein Slash am Anfang oder Ende und keine Leer- oder Sonderzeichen",IP:"IP Adresse",IP_HINT:"Gebe hier die IP Adresse des UniFi Controllers an. Stelle Sicher, dass Loxberry zugriff darauf hat.",USERNAME:"Benutzername",PASSWORD:"Passwort",SITE:"UniFi Site",NEED_MQTT:"Um dises Plugin nutzen zu k\xF6nnen, muss das MQTT Gateway Plugin in der Version >= 2.0.4 installiert sein.",CLIENTS:"UniFi WiFi Ger\xE4te",CLIENT_SELECTION:"Alle selektierten Ger\xE4te werden \xFCberwacht und an MQTT \xFCbermittelt. Alle anderen Ger\xE4te werden ignoriert. Um den Status der Ger\xE4te zu erhalten, m\xFCssen diese Selektiert werden. Es wird automatisch gespeichert.",NAME:"Name",MAC:"Mac Adresse",SSID:"WLAN SSID",EXPERIENCE:"Erfahrung / Signal",TYPE:"Typ",TWO_FA:"Bitte gebe dein 2 Faktor Code ein.",NATIVE_HINT:"Wenn du eine UniFi Dream Machine oder die Dream Machine Pro benutzt, aktiviere bitte den Schalter. Wenn dein Controller woanders l\xE4uft, dann lasse den Schalter bitte aus.",PORT:"Der port um das Dashbaord zu \xF6ffnen - sofern ben\xF6tigt.",PORT_HINT:"Wenn du einen port f\xFCr den Zugriff auf den Controller im Browser brauchst, dann geben diesen bitte hier an.",LOGIN_REQUIRED:"Ausgeloggt, Bitte neu einloggen.",VERSION:"Version {version}",CPU:"CPU",MEMORY:"Mem",UPTIME:"Aktiv",ISP:"ISP",SHOW_WIRED:"Kabelgebunden anzeigen",SHOW_WIFI:"Wifi anzeigen",SHOW_OFFLINE:"Zeige Offline",SORT:"Sortierung",SEARCH:"Suche",ANDROID_DEVICES:"Es befinden sich Android Ger\xE4te in der Liste. Andoid neigt dazu eine zuf\xE4llige Mac Adresse zu vergeben. Ist dieses Feature aktiviert, dann kann das Plugin keine eindeutige zuweisung des Ger\xE4tes vornehmen und die Erkennung des Ger\xE4tes funktioniert nicht. Das m\xFCsste dann deaktiviert werden.",ANDROID_DEVICE_LINK:"Hinweise zum Deaktivieren"},SERVICE:{WAIT_FOR_CONFIG:"Konfigurationsfehler, wartet auf \xC4nderungen",CONNECTED:"Verbunden mit UniFi Controller",DISCONNECTED:"Nicht Verbunden - Neue Verbindung wird hergestellt",UNAUTHORIZED:"Nicht eingeloggt",LOST:"UniFi Event Service nicht erreichbar",RESTART:"Hintergrund Service Neustarten",NO_MQTT:"Mqtt Plugin ist nicht installiert"},SORTING:{STANDARD:"Standard",SELECTED:"Selectiert",NAME:"Name",SSID:"Wlan SSID",EXPERIENCE:"Erfahrung",TYPE:"Typ"},VALIDATION:{REQUIRED:"Diese Feld wird zwingend ben\xF6tigt.",INVALID_TOPIC:"Das Topic darf nur alphanumerisch sein und wird mit einem / gruppiert. Beispielsweise test/topic.",INVALID_IP:"Bitte gebe eine g\xFCltige V4 IP-Addresse ein.",INVALID_PORT:"Bitte gebe einen Port zwischen 0 und 65535 an."}};const B=Re(Qe),rn=we({history:Ce(),routes:an}),ln=ee.exports.createI18n({locale:"de",fallbackLocale:"en",messages:{de:on}}),dn=Ae({modules:{[G.name]:G,[p.name]:p,[M.name]:M}});B.use(be,{plugins:{Loading:ye}});B.use(rn);B.use(dn);B.use(ln);B.mount("#unifiPresence");
