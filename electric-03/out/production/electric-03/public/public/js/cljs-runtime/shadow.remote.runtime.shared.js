goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__34583){
var map__34584 = p__34583;
var map__34584__$1 = cljs.core.__destructure_map(map__34584);
var runtime = map__34584__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34584__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_34792 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_34792)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__34585 = runtime;
var G__34586 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_34792);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__34585,G__34586) : shadow.remote.runtime.shared.process.call(null,G__34585,G__34586));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__34587,res){
var map__34588 = p__34587;
var map__34588__$1 = cljs.core.__destructure_map(map__34588);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34588__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34588__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__34589 = res;
var G__34589__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34589,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__34589);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34589__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__34589__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__34595 = arguments.length;
switch (G__34595) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__34596,msg,handlers,timeout_after_ms){
var map__34597 = p__34596;
var map__34597__$1 = cljs.core.__destructure_map(map__34597);
var runtime = map__34597__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34597__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
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
var len__5769__auto___34795 = arguments.length;
var i__5770__auto___34796 = (0);
while(true){
if((i__5770__auto___34796 < len__5769__auto___34795)){
args__5775__auto__.push((arguments[i__5770__auto___34796]));

var G__34797 = (i__5770__auto___34796 + (1));
i__5770__auto___34796 = G__34797;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__34601,ev,args){
var map__34602 = p__34601;
var map__34602__$1 = cljs.core.__destructure_map(map__34602);
var runtime = map__34602__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34602__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__34607 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__34621 = null;
var count__34622 = (0);
var i__34623 = (0);
while(true){
if((i__34623 < count__34622)){
var ext = chunk__34621.cljs$core$IIndexed$_nth$arity$2(null,i__34623);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__34800 = seq__34607;
var G__34801 = chunk__34621;
var G__34802 = count__34622;
var G__34803 = (i__34623 + (1));
seq__34607 = G__34800;
chunk__34621 = G__34801;
count__34622 = G__34802;
i__34623 = G__34803;
continue;
} else {
var G__34805 = seq__34607;
var G__34806 = chunk__34621;
var G__34807 = count__34622;
var G__34808 = (i__34623 + (1));
seq__34607 = G__34805;
chunk__34621 = G__34806;
count__34622 = G__34807;
i__34623 = G__34808;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34607);
if(temp__5804__auto__){
var seq__34607__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34607__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34607__$1);
var G__34810 = cljs.core.chunk_rest(seq__34607__$1);
var G__34811 = c__5568__auto__;
var G__34812 = cljs.core.count(c__5568__auto__);
var G__34813 = (0);
seq__34607 = G__34810;
chunk__34621 = G__34811;
count__34622 = G__34812;
i__34623 = G__34813;
continue;
} else {
var ext = cljs.core.first(seq__34607__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__34814 = cljs.core.next(seq__34607__$1);
var G__34815 = null;
var G__34816 = (0);
var G__34817 = (0);
seq__34607 = G__34814;
chunk__34621 = G__34815;
count__34622 = G__34816;
i__34623 = G__34817;
continue;
} else {
var G__34818 = cljs.core.next(seq__34607__$1);
var G__34819 = null;
var G__34820 = (0);
var G__34821 = (0);
seq__34607 = G__34818;
chunk__34621 = G__34819;
count__34622 = G__34820;
i__34623 = G__34821;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq34598){
var G__34599 = cljs.core.first(seq34598);
var seq34598__$1 = cljs.core.next(seq34598);
var G__34600 = cljs.core.first(seq34598__$1);
var seq34598__$2 = cljs.core.next(seq34598__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34599,G__34600,seq34598__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__34640,p__34641){
var map__34642 = p__34640;
var map__34642__$1 = cljs.core.__destructure_map(map__34642);
var runtime = map__34642__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34642__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__34643 = p__34641;
var map__34643__$1 = cljs.core.__destructure_map(map__34643);
var msg = map__34643__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34643__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__34644 = cljs.core.deref(state_ref);
var map__34644__$1 = cljs.core.__destructure_map(map__34644);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34644__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34644__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__34668,msg){
var map__34670 = p__34668;
var map__34670__$1 = cljs.core.__destructure_map(map__34670);
var runtime = map__34670__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34670__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__34695,key,p__34696){
var map__34697 = p__34695;
var map__34697__$1 = cljs.core.__destructure_map(map__34697);
var state = map__34697__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34697__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__34698 = p__34696;
var map__34698__$1 = cljs.core.__destructure_map(map__34698);
var spec = map__34698__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34698__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__34724,key,spec){
var map__34725 = p__34724;
var map__34725__$1 = cljs.core.__destructure_map(map__34725);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34725__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__34726_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__34726_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__34727_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__34727_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__34728_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__34728_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__34729_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__34729_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__34730_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__34730_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__34732,key){
var map__34733 = p__34732;
var map__34733__$1 = cljs.core.__destructure_map(map__34733);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34733__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__34734,msg){
var map__34739 = p__34734;
var map__34739__$1 = cljs.core.__destructure_map(map__34739);
var runtime = map__34739__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34739__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__34751,p__34752){
var map__34753 = p__34751;
var map__34753__$1 = cljs.core.__destructure_map(map__34753);
var runtime = map__34753__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34753__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__34754 = p__34752;
var map__34754__$1 = cljs.core.__destructure_map(map__34754);
var msg = map__34754__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34754__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34754__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__34758 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__34760 = null;
var count__34761 = (0);
var i__34762 = (0);
while(true){
if((i__34762 < count__34761)){
var map__34778 = chunk__34760.cljs$core$IIndexed$_nth$arity$2(null,i__34762);
var map__34778__$1 = cljs.core.__destructure_map(map__34778);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34778__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__34833 = seq__34758;
var G__34834 = chunk__34760;
var G__34835 = count__34761;
var G__34836 = (i__34762 + (1));
seq__34758 = G__34833;
chunk__34760 = G__34834;
count__34761 = G__34835;
i__34762 = G__34836;
continue;
} else {
var G__34837 = seq__34758;
var G__34838 = chunk__34760;
var G__34839 = count__34761;
var G__34840 = (i__34762 + (1));
seq__34758 = G__34837;
chunk__34760 = G__34838;
count__34761 = G__34839;
i__34762 = G__34840;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34758);
if(temp__5804__auto__){
var seq__34758__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34758__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34758__$1);
var G__34844 = cljs.core.chunk_rest(seq__34758__$1);
var G__34845 = c__5568__auto__;
var G__34846 = cljs.core.count(c__5568__auto__);
var G__34847 = (0);
seq__34758 = G__34844;
chunk__34760 = G__34845;
count__34761 = G__34846;
i__34762 = G__34847;
continue;
} else {
var map__34790 = cljs.core.first(seq__34758__$1);
var map__34790__$1 = cljs.core.__destructure_map(map__34790);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34790__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__34849 = cljs.core.next(seq__34758__$1);
var G__34850 = null;
var G__34851 = (0);
var G__34852 = (0);
seq__34758 = G__34849;
chunk__34760 = G__34850;
count__34761 = G__34851;
i__34762 = G__34852;
continue;
} else {
var G__34853 = cljs.core.next(seq__34758__$1);
var G__34854 = null;
var G__34855 = (0);
var G__34856 = (0);
seq__34758 = G__34853;
chunk__34760 = G__34854;
count__34761 = G__34855;
i__34762 = G__34856;
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
