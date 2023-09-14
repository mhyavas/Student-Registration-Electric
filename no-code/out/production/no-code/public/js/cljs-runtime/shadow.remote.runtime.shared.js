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
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__47570,res){
var map__47571 = p__47570;
var map__47571__$1 = cljs.core.__destructure_map(map__47571);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47571__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47571__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__47572 = res;
var G__47572__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47572,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__47572);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47572__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__47572__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__47574 = arguments.length;
switch (G__47574) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__47579,msg,handlers,timeout_after_ms){
var map__47580 = p__47579;
var map__47580__$1 = cljs.core.__destructure_map(map__47580);
var runtime = map__47580__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47580__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___47690 = arguments.length;
var i__5770__auto___47691 = (0);
while(true){
if((i__5770__auto___47691 < len__5769__auto___47690)){
args__5775__auto__.push((arguments[i__5770__auto___47691]));

var G__47692 = (i__5770__auto___47691 + (1));
i__5770__auto___47691 = G__47692;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__47584,ev,args){
var map__47586 = p__47584;
var map__47586__$1 = cljs.core.__destructure_map(map__47586);
var runtime = map__47586__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47586__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__47587 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__47590 = null;
var count__47591 = (0);
var i__47592 = (0);
while(true){
if((i__47592 < count__47591)){
var ext = chunk__47590.cljs$core$IIndexed$_nth$arity$2(null,i__47592);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__47695 = seq__47587;
var G__47696 = chunk__47590;
var G__47697 = count__47591;
var G__47698 = (i__47592 + (1));
seq__47587 = G__47695;
chunk__47590 = G__47696;
count__47591 = G__47697;
i__47592 = G__47698;
continue;
} else {
var G__47699 = seq__47587;
var G__47700 = chunk__47590;
var G__47701 = count__47591;
var G__47702 = (i__47592 + (1));
seq__47587 = G__47699;
chunk__47590 = G__47700;
count__47591 = G__47701;
i__47592 = G__47702;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__47587);
if(temp__5804__auto__){
var seq__47587__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47587__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__47587__$1);
var G__47703 = cljs.core.chunk_rest(seq__47587__$1);
var G__47704 = c__5568__auto__;
var G__47705 = cljs.core.count(c__5568__auto__);
var G__47706 = (0);
seq__47587 = G__47703;
chunk__47590 = G__47704;
count__47591 = G__47705;
i__47592 = G__47706;
continue;
} else {
var ext = cljs.core.first(seq__47587__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__47709 = cljs.core.next(seq__47587__$1);
var G__47710 = null;
var G__47711 = (0);
var G__47712 = (0);
seq__47587 = G__47709;
chunk__47590 = G__47710;
count__47591 = G__47711;
i__47592 = G__47712;
continue;
} else {
var G__47713 = cljs.core.next(seq__47587__$1);
var G__47714 = null;
var G__47715 = (0);
var G__47716 = (0);
seq__47587 = G__47713;
chunk__47590 = G__47714;
count__47591 = G__47715;
i__47592 = G__47716;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq47581){
var G__47582 = cljs.core.first(seq47581);
var seq47581__$1 = cljs.core.next(seq47581);
var G__47583 = cljs.core.first(seq47581__$1);
var seq47581__$2 = cljs.core.next(seq47581__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47582,G__47583,seq47581__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__47599,p__47600){
var map__47601 = p__47599;
var map__47601__$1 = cljs.core.__destructure_map(map__47601);
var runtime = map__47601__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47601__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__47603 = p__47600;
var map__47603__$1 = cljs.core.__destructure_map(map__47603);
var msg = map__47603__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47603__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__47606 = cljs.core.deref(state_ref);
var map__47606__$1 = cljs.core.__destructure_map(map__47606);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47606__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47606__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__47609){
var map__47610 = p__47609;
var map__47610__$1 = cljs.core.__destructure_map(map__47610);
var runtime = map__47610__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47610__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__47613,msg){
var map__47614 = p__47613;
var map__47614__$1 = cljs.core.__destructure_map(map__47614);
var runtime = map__47614__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47614__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__47620,key,p__47621){
var map__47622 = p__47620;
var map__47622__$1 = cljs.core.__destructure_map(map__47622);
var state = map__47622__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47622__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__47623 = p__47621;
var map__47623__$1 = cljs.core.__destructure_map(map__47623);
var spec = map__47623__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47623__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__47625,key,spec){
var map__47626 = p__47625;
var map__47626__$1 = cljs.core.__destructure_map(map__47626);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47626__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__47627_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__47627_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__47628_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__47628_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__47629_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__47629_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__47630_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__47630_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__47631_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__47631_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__47635,key){
var map__47636 = p__47635;
var map__47636__$1 = cljs.core.__destructure_map(map__47636);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47636__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__47638,msg){
var map__47639 = p__47638;
var map__47639__$1 = cljs.core.__destructure_map(map__47639);
var runtime = map__47639__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47639__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__47641,p__47642){
var map__47643 = p__47641;
var map__47643__$1 = cljs.core.__destructure_map(map__47643);
var runtime = map__47643__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47643__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__47644 = p__47642;
var map__47644__$1 = cljs.core.__destructure_map(map__47644);
var msg = map__47644__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47644__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47644__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__47653 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__47655 = null;
var count__47656 = (0);
var i__47657 = (0);
while(true){
if((i__47657 < count__47656)){
var map__47678 = chunk__47655.cljs$core$IIndexed$_nth$arity$2(null,i__47657);
var map__47678__$1 = cljs.core.__destructure_map(map__47678);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47678__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__47741 = seq__47653;
var G__47742 = chunk__47655;
var G__47743 = count__47656;
var G__47744 = (i__47657 + (1));
seq__47653 = G__47741;
chunk__47655 = G__47742;
count__47656 = G__47743;
i__47657 = G__47744;
continue;
} else {
var G__47745 = seq__47653;
var G__47746 = chunk__47655;
var G__47747 = count__47656;
var G__47748 = (i__47657 + (1));
seq__47653 = G__47745;
chunk__47655 = G__47746;
count__47656 = G__47747;
i__47657 = G__47748;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__47653);
if(temp__5804__auto__){
var seq__47653__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47653__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__47653__$1);
var G__47749 = cljs.core.chunk_rest(seq__47653__$1);
var G__47750 = c__5568__auto__;
var G__47751 = cljs.core.count(c__5568__auto__);
var G__47752 = (0);
seq__47653 = G__47749;
chunk__47655 = G__47750;
count__47656 = G__47751;
i__47657 = G__47752;
continue;
} else {
var map__47681 = cljs.core.first(seq__47653__$1);
var map__47681__$1 = cljs.core.__destructure_map(map__47681);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47681__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__47756 = cljs.core.next(seq__47653__$1);
var G__47757 = null;
var G__47758 = (0);
var G__47759 = (0);
seq__47653 = G__47756;
chunk__47655 = G__47757;
count__47656 = G__47758;
i__47657 = G__47759;
continue;
} else {
var G__47761 = cljs.core.next(seq__47653__$1);
var G__47762 = null;
var G__47763 = (0);
var G__47764 = (0);
seq__47653 = G__47761;
chunk__47655 = G__47762;
count__47656 = G__47763;
i__47657 = G__47764;
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
