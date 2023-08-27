goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__38785,p__38786){
var map__38791 = p__38785;
var map__38791__$1 = cljs.core.__destructure_map(map__38791);
var svc = map__38791__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38791__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38791__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38791__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__38792 = p__38786;
var map__38792__$1 = cljs.core.__destructure_map(map__38792);
var msg = map__38792__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38792__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38792__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38792__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38792__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__38821,p__38822){
var map__38832 = p__38821;
var map__38832__$1 = cljs.core.__destructure_map(map__38832);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38832__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__38833 = p__38822;
var map__38833__$1 = cljs.core.__destructure_map(map__38833);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38833__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__38857,p__38858){
var map__38863 = p__38857;
var map__38863__$1 = cljs.core.__destructure_map(map__38863);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38863__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38863__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__38864 = p__38858;
var map__38864__$1 = cljs.core.__destructure_map(map__38864);
var msg = map__38864__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38864__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__38895,tid){
var map__38896 = p__38895;
var map__38896__$1 = cljs.core.__destructure_map(map__38896);
var svc = map__38896__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38896__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__38905 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__38906 = null;
var count__38907 = (0);
var i__38908 = (0);
while(true){
if((i__38908 < count__38907)){
var vec__38920 = chunk__38906.cljs$core$IIndexed$_nth$arity$2(null,i__38908);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38920,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38920,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__38936 = seq__38905;
var G__38937 = chunk__38906;
var G__38938 = count__38907;
var G__38939 = (i__38908 + (1));
seq__38905 = G__38936;
chunk__38906 = G__38937;
count__38907 = G__38938;
i__38908 = G__38939;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38905);
if(temp__5804__auto__){
var seq__38905__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38905__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38905__$1);
var G__38940 = cljs.core.chunk_rest(seq__38905__$1);
var G__38941 = c__5568__auto__;
var G__38942 = cljs.core.count(c__5568__auto__);
var G__38943 = (0);
seq__38905 = G__38940;
chunk__38906 = G__38941;
count__38907 = G__38942;
i__38908 = G__38943;
continue;
} else {
var vec__38925 = cljs.core.first(seq__38905__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38925,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38925,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__38944 = cljs.core.next(seq__38905__$1);
var G__38945 = null;
var G__38946 = (0);
var G__38947 = (0);
seq__38905 = G__38944;
chunk__38906 = G__38945;
count__38907 = G__38946;
i__38908 = G__38947;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__38900_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__38900_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__38901_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__38901_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__38902_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__38902_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__38903_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__38903_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__38929){
var map__38930 = p__38929;
var map__38930__$1 = cljs.core.__destructure_map(map__38930);
var svc = map__38930__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38930__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38930__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
