goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__37003,p__37004){
var map__37005 = p__37003;
var map__37005__$1 = cljs.core.__destructure_map(map__37005);
var svc = map__37005__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37005__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37005__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37005__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__37006 = p__37004;
var map__37006__$1 = cljs.core.__destructure_map(map__37006);
var msg = map__37006__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37006__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37006__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37006__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37006__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__37007,p__37008){
var map__37009 = p__37007;
var map__37009__$1 = cljs.core.__destructure_map(map__37009);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37009__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__37010 = p__37008;
var map__37010__$1 = cljs.core.__destructure_map(map__37010);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37010__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__37011,p__37012){
var map__37013 = p__37011;
var map__37013__$1 = cljs.core.__destructure_map(map__37013);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37013__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37013__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__37014 = p__37012;
var map__37014__$1 = cljs.core.__destructure_map(map__37014);
var msg = map__37014__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37014__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__37018,tid){
var map__37019 = p__37018;
var map__37019__$1 = cljs.core.__destructure_map(map__37019);
var svc = map__37019__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37019__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__37030 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__37031 = null;
var count__37032 = (0);
var i__37033 = (0);
while(true){
if((i__37033 < count__37032)){
var vec__37047 = chunk__37031.cljs$core$IIndexed$_nth$arity$2(null,i__37033);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37047,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37047,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__37079 = seq__37030;
var G__37080 = chunk__37031;
var G__37081 = count__37032;
var G__37082 = (i__37033 + (1));
seq__37030 = G__37079;
chunk__37031 = G__37080;
count__37032 = G__37081;
i__37033 = G__37082;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37030);
if(temp__5804__auto__){
var seq__37030__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37030__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37030__$1);
var G__37085 = cljs.core.chunk_rest(seq__37030__$1);
var G__37086 = c__5568__auto__;
var G__37087 = cljs.core.count(c__5568__auto__);
var G__37088 = (0);
seq__37030 = G__37085;
chunk__37031 = G__37086;
count__37032 = G__37087;
i__37033 = G__37088;
continue;
} else {
var vec__37053 = cljs.core.first(seq__37030__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37053,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37053,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__37089 = cljs.core.next(seq__37030__$1);
var G__37090 = null;
var G__37091 = (0);
var G__37092 = (0);
seq__37030 = G__37089;
chunk__37031 = G__37090;
count__37032 = G__37091;
i__37033 = G__37092;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__37022_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__37022_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__37023_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__37023_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__37024_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__37024_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__37026_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__37026_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__37064){
var map__37066 = p__37064;
var map__37066__$1 = cljs.core.__destructure_map(map__37066);
var svc = map__37066__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37066__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37066__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
