goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__34992,res){
var map__34993 = p__34992;
var map__34993__$1 = cljs.core.__destructure_map(map__34993);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34993__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34993__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__34994 = res;
var G__34994__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34994,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__34994);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34994__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__34994__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__34998 = arguments.length;
switch (G__34998) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__35009,msg,handlers,timeout_after_ms){
var map__35010 = p__35009;
var map__35010__$1 = cljs.core.__destructure_map(map__35010);
var runtime = map__35010__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35010__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___35179 = arguments.length;
var i__5770__auto___35180 = (0);
while(true){
if((i__5770__auto___35180 < len__5769__auto___35179)){
args__5775__auto__.push((arguments[i__5770__auto___35180]));

var G__35184 = (i__5770__auto___35180 + (1));
i__5770__auto___35180 = G__35184;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__35023,ev,args){
var map__35024 = p__35023;
var map__35024__$1 = cljs.core.__destructure_map(map__35024);
var runtime = map__35024__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35024__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__35025 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__35028 = null;
var count__35029 = (0);
var i__35030 = (0);
while(true){
if((i__35030 < count__35029)){
var ext = chunk__35028.cljs$core$IIndexed$_nth$arity$2(null,i__35030);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__35196 = seq__35025;
var G__35197 = chunk__35028;
var G__35198 = count__35029;
var G__35199 = (i__35030 + (1));
seq__35025 = G__35196;
chunk__35028 = G__35197;
count__35029 = G__35198;
i__35030 = G__35199;
continue;
} else {
var G__35200 = seq__35025;
var G__35201 = chunk__35028;
var G__35202 = count__35029;
var G__35203 = (i__35030 + (1));
seq__35025 = G__35200;
chunk__35028 = G__35201;
count__35029 = G__35202;
i__35030 = G__35203;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35025);
if(temp__5804__auto__){
var seq__35025__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35025__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__35025__$1);
var G__35206 = cljs.core.chunk_rest(seq__35025__$1);
var G__35207 = c__5568__auto__;
var G__35208 = cljs.core.count(c__5568__auto__);
var G__35209 = (0);
seq__35025 = G__35206;
chunk__35028 = G__35207;
count__35029 = G__35208;
i__35030 = G__35209;
continue;
} else {
var ext = cljs.core.first(seq__35025__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__35212 = cljs.core.next(seq__35025__$1);
var G__35213 = null;
var G__35214 = (0);
var G__35215 = (0);
seq__35025 = G__35212;
chunk__35028 = G__35213;
count__35029 = G__35214;
i__35030 = G__35215;
continue;
} else {
var G__35216 = cljs.core.next(seq__35025__$1);
var G__35217 = null;
var G__35218 = (0);
var G__35219 = (0);
seq__35025 = G__35216;
chunk__35028 = G__35217;
count__35029 = G__35218;
i__35030 = G__35219;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq35017){
var G__35018 = cljs.core.first(seq35017);
var seq35017__$1 = cljs.core.next(seq35017);
var G__35019 = cljs.core.first(seq35017__$1);
var seq35017__$2 = cljs.core.next(seq35017__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35018,G__35019,seq35017__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__35038,p__35039){
var map__35040 = p__35038;
var map__35040__$1 = cljs.core.__destructure_map(map__35040);
var runtime = map__35040__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35040__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__35041 = p__35039;
var map__35041__$1 = cljs.core.__destructure_map(map__35041);
var msg = map__35041__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35041__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__35046 = cljs.core.deref(state_ref);
var map__35046__$1 = cljs.core.__destructure_map(map__35046);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35046__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35046__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__35067){
var map__35068 = p__35067;
var map__35068__$1 = cljs.core.__destructure_map(map__35068);
var runtime = map__35068__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35068__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__35071,msg){
var map__35072 = p__35071;
var map__35072__$1 = cljs.core.__destructure_map(map__35072);
var runtime = map__35072__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35072__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__35074,key,p__35075){
var map__35076 = p__35074;
var map__35076__$1 = cljs.core.__destructure_map(map__35076);
var state = map__35076__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35076__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__35077 = p__35075;
var map__35077__$1 = cljs.core.__destructure_map(map__35077);
var spec = map__35077__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35077__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__35081,key,spec){
var map__35083 = p__35081;
var map__35083__$1 = cljs.core.__destructure_map(map__35083);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35083__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__35087_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__35087_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__35088_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__35088_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__35089_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__35089_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__35090_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__35090_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__35091_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__35091_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__35098,key){
var map__35100 = p__35098;
var map__35100__$1 = cljs.core.__destructure_map(map__35100);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35100__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__35105,msg){
var map__35106 = p__35105;
var map__35106__$1 = cljs.core.__destructure_map(map__35106);
var runtime = map__35106__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35106__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__35113,p__35114){
var map__35116 = p__35113;
var map__35116__$1 = cljs.core.__destructure_map(map__35116);
var runtime = map__35116__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35116__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__35117 = p__35114;
var map__35117__$1 = cljs.core.__destructure_map(map__35117);
var msg = map__35117__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35117__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35117__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__35120 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__35122 = null;
var count__35123 = (0);
var i__35124 = (0);
while(true){
if((i__35124 < count__35123)){
var map__35139 = chunk__35122.cljs$core$IIndexed$_nth$arity$2(null,i__35124);
var map__35139__$1 = cljs.core.__destructure_map(map__35139);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35139__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__35315 = seq__35120;
var G__35316 = chunk__35122;
var G__35317 = count__35123;
var G__35318 = (i__35124 + (1));
seq__35120 = G__35315;
chunk__35122 = G__35316;
count__35123 = G__35317;
i__35124 = G__35318;
continue;
} else {
var G__35319 = seq__35120;
var G__35320 = chunk__35122;
var G__35321 = count__35123;
var G__35322 = (i__35124 + (1));
seq__35120 = G__35319;
chunk__35122 = G__35320;
count__35123 = G__35321;
i__35124 = G__35322;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35120);
if(temp__5804__auto__){
var seq__35120__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35120__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__35120__$1);
var G__35324 = cljs.core.chunk_rest(seq__35120__$1);
var G__35325 = c__5568__auto__;
var G__35326 = cljs.core.count(c__5568__auto__);
var G__35327 = (0);
seq__35120 = G__35324;
chunk__35122 = G__35325;
count__35123 = G__35326;
i__35124 = G__35327;
continue;
} else {
var map__35143 = cljs.core.first(seq__35120__$1);
var map__35143__$1 = cljs.core.__destructure_map(map__35143);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35143__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__35331 = cljs.core.next(seq__35120__$1);
var G__35332 = null;
var G__35333 = (0);
var G__35334 = (0);
seq__35120 = G__35331;
chunk__35122 = G__35332;
count__35123 = G__35333;
i__35124 = G__35334;
continue;
} else {
var G__35335 = cljs.core.next(seq__35120__$1);
var G__35336 = null;
var G__35337 = (0);
var G__35338 = (0);
seq__35120 = G__35335;
chunk__35122 = G__35336;
count__35123 = G__35337;
i__35124 = G__35338;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
