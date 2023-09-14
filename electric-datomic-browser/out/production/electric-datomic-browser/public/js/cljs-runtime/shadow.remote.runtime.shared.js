goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__34918){
var map__34919 = p__34918;
var map__34919__$1 = cljs.core.__destructure_map(map__34919);
var runtime = map__34919__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34919__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_35023 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_35023)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__34922 = runtime;
var G__34923 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_35023);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__34922,G__34923) : shadow.remote.runtime.shared.process.call(null,G__34922,G__34923));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__34924,res){
var map__34925 = p__34924;
var map__34925__$1 = cljs.core.__destructure_map(map__34925);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34925__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34925__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__34930 = res;
var G__34930__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34930,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__34930);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34930__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__34930__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__34932 = arguments.length;
switch (G__34932) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__34936,msg,handlers,timeout_after_ms){
var map__34937 = p__34936;
var map__34937__$1 = cljs.core.__destructure_map(map__34937);
var runtime = map__34937__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34937__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
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
var len__5769__auto___35028 = arguments.length;
var i__5770__auto___35029 = (0);
while(true){
if((i__5770__auto___35029 < len__5769__auto___35028)){
args__5775__auto__.push((arguments[i__5770__auto___35029]));

var G__35030 = (i__5770__auto___35029 + (1));
i__5770__auto___35029 = G__35030;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__34941,ev,args){
var map__34942 = p__34941;
var map__34942__$1 = cljs.core.__destructure_map(map__34942);
var runtime = map__34942__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34942__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__34943 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__34946 = null;
var count__34947 = (0);
var i__34948 = (0);
while(true){
if((i__34948 < count__34947)){
var ext = chunk__34946.cljs$core$IIndexed$_nth$arity$2(null,i__34948);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__35031 = seq__34943;
var G__35032 = chunk__34946;
var G__35033 = count__34947;
var G__35034 = (i__34948 + (1));
seq__34943 = G__35031;
chunk__34946 = G__35032;
count__34947 = G__35033;
i__34948 = G__35034;
continue;
} else {
var G__35035 = seq__34943;
var G__35036 = chunk__34946;
var G__35037 = count__34947;
var G__35038 = (i__34948 + (1));
seq__34943 = G__35035;
chunk__34946 = G__35036;
count__34947 = G__35037;
i__34948 = G__35038;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34943);
if(temp__5804__auto__){
var seq__34943__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34943__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34943__$1);
var G__35039 = cljs.core.chunk_rest(seq__34943__$1);
var G__35040 = c__5568__auto__;
var G__35041 = cljs.core.count(c__5568__auto__);
var G__35042 = (0);
seq__34943 = G__35039;
chunk__34946 = G__35040;
count__34947 = G__35041;
i__34948 = G__35042;
continue;
} else {
var ext = cljs.core.first(seq__34943__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__35043 = cljs.core.next(seq__34943__$1);
var G__35044 = null;
var G__35045 = (0);
var G__35046 = (0);
seq__34943 = G__35043;
chunk__34946 = G__35044;
count__34947 = G__35045;
i__34948 = G__35046;
continue;
} else {
var G__35047 = cljs.core.next(seq__34943__$1);
var G__35048 = null;
var G__35049 = (0);
var G__35050 = (0);
seq__34943 = G__35047;
chunk__34946 = G__35048;
count__34947 = G__35049;
i__34948 = G__35050;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq34938){
var G__34939 = cljs.core.first(seq34938);
var seq34938__$1 = cljs.core.next(seq34938);
var G__34940 = cljs.core.first(seq34938__$1);
var seq34938__$2 = cljs.core.next(seq34938__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34939,G__34940,seq34938__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__34955,p__34956){
var map__34957 = p__34955;
var map__34957__$1 = cljs.core.__destructure_map(map__34957);
var runtime = map__34957__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34957__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__34958 = p__34956;
var map__34958__$1 = cljs.core.__destructure_map(map__34958);
var msg = map__34958__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34958__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__34960 = cljs.core.deref(state_ref);
var map__34960__$1 = cljs.core.__destructure_map(map__34960);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34960__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34960__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__34963,msg){
var map__34964 = p__34963;
var map__34964__$1 = cljs.core.__destructure_map(map__34964);
var runtime = map__34964__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34964__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__34969,key,p__34970){
var map__34971 = p__34969;
var map__34971__$1 = cljs.core.__destructure_map(map__34971);
var state = map__34971__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34971__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__34972 = p__34970;
var map__34972__$1 = cljs.core.__destructure_map(map__34972);
var spec = map__34972__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34972__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__34975,key,spec){
var map__34976 = p__34975;
var map__34976__$1 = cljs.core.__destructure_map(map__34976);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34976__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__34977_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__34977_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__34978_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__34978_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__34979_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__34979_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__34980_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__34980_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__34981_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__34981_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__34995,key){
var map__34996 = p__34995;
var map__34996__$1 = cljs.core.__destructure_map(map__34996);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34996__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__35000,msg){
var map__35001 = p__35000;
var map__35001__$1 = cljs.core.__destructure_map(map__35001);
var runtime = map__35001__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35001__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__35006,p__35007){
var map__35008 = p__35006;
var map__35008__$1 = cljs.core.__destructure_map(map__35008);
var runtime = map__35008__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35008__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__35009 = p__35007;
var map__35009__$1 = cljs.core.__destructure_map(map__35009);
var msg = map__35009__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35009__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35009__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__35012 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__35014 = null;
var count__35015 = (0);
var i__35016 = (0);
while(true){
if((i__35016 < count__35015)){
var map__35021 = chunk__35014.cljs$core$IIndexed$_nth$arity$2(null,i__35016);
var map__35021__$1 = cljs.core.__destructure_map(map__35021);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35021__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__35064 = seq__35012;
var G__35065 = chunk__35014;
var G__35066 = count__35015;
var G__35067 = (i__35016 + (1));
seq__35012 = G__35064;
chunk__35014 = G__35065;
count__35015 = G__35066;
i__35016 = G__35067;
continue;
} else {
var G__35068 = seq__35012;
var G__35069 = chunk__35014;
var G__35070 = count__35015;
var G__35071 = (i__35016 + (1));
seq__35012 = G__35068;
chunk__35014 = G__35069;
count__35015 = G__35070;
i__35016 = G__35071;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35012);
if(temp__5804__auto__){
var seq__35012__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35012__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__35012__$1);
var G__35074 = cljs.core.chunk_rest(seq__35012__$1);
var G__35075 = c__5568__auto__;
var G__35076 = cljs.core.count(c__5568__auto__);
var G__35077 = (0);
seq__35012 = G__35074;
chunk__35014 = G__35075;
count__35015 = G__35076;
i__35016 = G__35077;
continue;
} else {
var map__35022 = cljs.core.first(seq__35012__$1);
var map__35022__$1 = cljs.core.__destructure_map(map__35022);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35022__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__35078 = cljs.core.next(seq__35012__$1);
var G__35079 = null;
var G__35080 = (0);
var G__35081 = (0);
seq__35012 = G__35078;
chunk__35014 = G__35079;
count__35015 = G__35080;
i__35016 = G__35081;
continue;
} else {
var G__35082 = cljs.core.next(seq__35012__$1);
var G__35083 = null;
var G__35084 = (0);
var G__35085 = (0);
seq__35012 = G__35082;
chunk__35014 = G__35083;
count__35015 = G__35084;
i__35016 = G__35085;
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
