goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__50964,p__50965){
var map__50966 = p__50964;
var map__50966__$1 = cljs.core.__destructure_map(map__50966);
var svc = map__50966__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50966__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50966__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50966__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__50967 = p__50965;
var map__50967__$1 = cljs.core.__destructure_map(map__50967);
var msg = map__50967__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50967__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50967__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50967__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50967__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__50980,p__50981){
var map__50982 = p__50980;
var map__50982__$1 = cljs.core.__destructure_map(map__50982);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50982__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__50983 = p__50981;
var map__50983__$1 = cljs.core.__destructure_map(map__50983);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50983__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__50985,p__50986){
var map__50987 = p__50985;
var map__50987__$1 = cljs.core.__destructure_map(map__50987);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50987__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50987__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__50988 = p__50986;
var map__50988__$1 = cljs.core.__destructure_map(map__50988);
var msg = map__50988__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50988__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__50994,tid){
var map__50995 = p__50994;
var map__50995__$1 = cljs.core.__destructure_map(map__50995);
var svc = map__50995__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50995__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__51004 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__51005 = null;
var count__51006 = (0);
var i__51007 = (0);
while(true){
if((i__51007 < count__51006)){
var vec__51016 = chunk__51005.cljs$core$IIndexed$_nth$arity$2(null,i__51007);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51016,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51016,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__51037 = seq__51004;
var G__51038 = chunk__51005;
var G__51039 = count__51006;
var G__51040 = (i__51007 + (1));
seq__51004 = G__51037;
chunk__51005 = G__51038;
count__51006 = G__51039;
i__51007 = G__51040;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__51004);
if(temp__5804__auto__){
var seq__51004__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51004__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__51004__$1);
var G__51044 = cljs.core.chunk_rest(seq__51004__$1);
var G__51045 = c__5568__auto__;
var G__51046 = cljs.core.count(c__5568__auto__);
var G__51047 = (0);
seq__51004 = G__51044;
chunk__51005 = G__51045;
count__51006 = G__51046;
i__51007 = G__51047;
continue;
} else {
var vec__51019 = cljs.core.first(seq__51004__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51019,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51019,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__51048 = cljs.core.next(seq__51004__$1);
var G__51049 = null;
var G__51050 = (0);
var G__51051 = (0);
seq__51004 = G__51048;
chunk__51005 = G__51049;
count__51006 = G__51050;
i__51007 = G__51051;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__51000_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__51000_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__51001_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__51001_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__51002_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__51002_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__51003_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__51003_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__51022){
var map__51026 = p__51022;
var map__51026__$1 = cljs.core.__destructure_map(map__51026);
var svc = map__51026__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51026__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51026__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
