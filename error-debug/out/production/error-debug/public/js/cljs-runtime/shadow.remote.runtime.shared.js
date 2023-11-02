goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__33049){
var map__33050 = p__33049;
var map__33050__$1 = cljs.core.__destructure_map(map__33050);
var runtime = map__33050__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33050__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_33302 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_33302)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__33058 = runtime;
var G__33059 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_33302);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__33058,G__33059) : shadow.remote.runtime.shared.process.call(null,G__33058,G__33059));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__33064,res){
var map__33068 = p__33064;
var map__33068__$1 = cljs.core.__destructure_map(map__33068);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33068__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33068__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__33069 = res;
var G__33069__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33069,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__33069);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33069__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__33069__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__33074 = arguments.length;
switch (G__33074) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__33081,msg,handlers,timeout_after_ms){
var map__33082 = p__33081;
var map__33082__$1 = cljs.core.__destructure_map(map__33082);
var runtime = map__33082__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33082__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33308 = arguments.length;
var i__5770__auto___33309 = (0);
while(true){
if((i__5770__auto___33309 < len__5769__auto___33308)){
args__5775__auto__.push((arguments[i__5770__auto___33309]));

var G__33310 = (i__5770__auto___33309 + (1));
i__5770__auto___33309 = G__33310;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__33088,ev,args){
var map__33089 = p__33088;
var map__33089__$1 = cljs.core.__destructure_map(map__33089);
var runtime = map__33089__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33089__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__33090 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__33093 = null;
var count__33094 = (0);
var i__33095 = (0);
while(true){
if((i__33095 < count__33094)){
var ext = chunk__33093.cljs$core$IIndexed$_nth$arity$2(null,i__33095);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__33318 = seq__33090;
var G__33319 = chunk__33093;
var G__33320 = count__33094;
var G__33321 = (i__33095 + (1));
seq__33090 = G__33318;
chunk__33093 = G__33319;
count__33094 = G__33320;
i__33095 = G__33321;
continue;
} else {
var G__33322 = seq__33090;
var G__33323 = chunk__33093;
var G__33324 = count__33094;
var G__33325 = (i__33095 + (1));
seq__33090 = G__33322;
chunk__33093 = G__33323;
count__33094 = G__33324;
i__33095 = G__33325;
continue;
}
} else {
var temp__5816__auto__ = cljs.core.seq(seq__33090);
if(temp__5816__auto__){
var seq__33090__$1 = temp__5816__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33090__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33090__$1);
var G__33326 = cljs.core.chunk_rest(seq__33090__$1);
var G__33327 = c__5568__auto__;
var G__33328 = cljs.core.count(c__5568__auto__);
var G__33329 = (0);
seq__33090 = G__33326;
chunk__33093 = G__33327;
count__33094 = G__33328;
i__33095 = G__33329;
continue;
} else {
var ext = cljs.core.first(seq__33090__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__33330 = cljs.core.next(seq__33090__$1);
var G__33331 = null;
var G__33332 = (0);
var G__33333 = (0);
seq__33090 = G__33330;
chunk__33093 = G__33331;
count__33094 = G__33332;
i__33095 = G__33333;
continue;
} else {
var G__33334 = cljs.core.next(seq__33090__$1);
var G__33335 = null;
var G__33336 = (0);
var G__33337 = (0);
seq__33090 = G__33334;
chunk__33093 = G__33335;
count__33094 = G__33336;
i__33095 = G__33337;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq33083){
var G__33084 = cljs.core.first(seq33083);
var seq33083__$1 = cljs.core.next(seq33083);
var G__33085 = cljs.core.first(seq33083__$1);
var seq33083__$2 = cljs.core.next(seq33083__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33084,G__33085,seq33083__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__33106,p__33107){
var map__33108 = p__33106;
var map__33108__$1 = cljs.core.__destructure_map(map__33108);
var runtime = map__33108__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33108__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__33109 = p__33107;
var map__33109__$1 = cljs.core.__destructure_map(map__33109);
var msg = map__33109__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33109__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__33110 = cljs.core.deref(state_ref);
var map__33110__$1 = cljs.core.__destructure_map(map__33110);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33110__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33110__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__33111,msg){
var map__33112 = p__33111;
var map__33112__$1 = cljs.core.__destructure_map(map__33112);
var runtime = map__33112__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33112__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__33115,key,p__33116){
var map__33117 = p__33115;
var map__33117__$1 = cljs.core.__destructure_map(map__33117);
var state = map__33117__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33117__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__33118 = p__33116;
var map__33118__$1 = cljs.core.__destructure_map(map__33118);
var spec = map__33118__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33118__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__33124,key,spec){
var map__33125 = p__33124;
var map__33125__$1 = cljs.core.__destructure_map(map__33125);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33125__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__33126_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__33126_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__33127_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__33127_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__33128_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__33128_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__33129_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__33129_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__33130_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__33130_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__33186,key){
var map__33191 = p__33186;
var map__33191__$1 = cljs.core.__destructure_map(map__33191);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33191__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__33213,msg){
var map__33219 = p__33213;
var map__33219__$1 = cljs.core.__destructure_map(map__33219);
var runtime = map__33219__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33219__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__33258,p__33259){
var map__33260 = p__33258;
var map__33260__$1 = cljs.core.__destructure_map(map__33260);
var runtime = map__33260__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33260__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__33261 = p__33259;
var map__33261__$1 = cljs.core.__destructure_map(map__33261);
var msg = map__33261__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33261__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33261__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__33265 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__33267 = null;
var count__33268 = (0);
var i__33269 = (0);
while(true){
if((i__33269 < count__33268)){
var map__33294 = chunk__33267.cljs$core$IIndexed$_nth$arity$2(null,i__33269);
var map__33294__$1 = cljs.core.__destructure_map(map__33294);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33294__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__33369 = seq__33265;
var G__33370 = chunk__33267;
var G__33371 = count__33268;
var G__33372 = (i__33269 + (1));
seq__33265 = G__33369;
chunk__33267 = G__33370;
count__33268 = G__33371;
i__33269 = G__33372;
continue;
} else {
var G__33373 = seq__33265;
var G__33374 = chunk__33267;
var G__33375 = count__33268;
var G__33376 = (i__33269 + (1));
seq__33265 = G__33373;
chunk__33267 = G__33374;
count__33268 = G__33375;
i__33269 = G__33376;
continue;
}
} else {
var temp__5816__auto__ = cljs.core.seq(seq__33265);
if(temp__5816__auto__){
var seq__33265__$1 = temp__5816__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33265__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33265__$1);
var G__33377 = cljs.core.chunk_rest(seq__33265__$1);
var G__33378 = c__5568__auto__;
var G__33379 = cljs.core.count(c__5568__auto__);
var G__33380 = (0);
seq__33265 = G__33377;
chunk__33267 = G__33378;
count__33268 = G__33379;
i__33269 = G__33380;
continue;
} else {
var map__33298 = cljs.core.first(seq__33265__$1);
var map__33298__$1 = cljs.core.__destructure_map(map__33298);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33298__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__33381 = cljs.core.next(seq__33265__$1);
var G__33382 = null;
var G__33383 = (0);
var G__33384 = (0);
seq__33265 = G__33381;
chunk__33267 = G__33382;
count__33268 = G__33383;
i__33269 = G__33384;
continue;
} else {
var G__33385 = cljs.core.next(seq__33265__$1);
var G__33386 = null;
var G__33387 = (0);
var G__33388 = (0);
seq__33265 = G__33385;
chunk__33267 = G__33386;
count__33268 = G__33387;
i__33269 = G__33388;
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
