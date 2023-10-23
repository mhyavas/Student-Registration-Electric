goog.provide('hyperfiddle.electric.impl.runtime');
hyperfiddle.electric.impl.runtime.fail = (function hyperfiddle$electric$impl$runtime$fail(x){
throw x;
});
hyperfiddle.electric.impl.runtime.failure = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$1((function (p1__44260_SHARP_){
if((p1__44260_SHARP_ instanceof hyperfiddle.electric.Failure)){
return p1__44260_SHARP_;
} else {
return null;
}
}));
hyperfiddle.electric.impl.runtime.pending = (new hyperfiddle.electric.Failure((new hyperfiddle.electric.Pending())));
hyperfiddle.electric.impl.runtime.error = (function hyperfiddle$electric$impl$runtime$error(msg){
return (new Error(msg));
});
hyperfiddle.electric.impl.runtime.pst = (function hyperfiddle$electric$impl$runtime$pst(e){
return console.error(e);
});
hyperfiddle.electric.impl.runtime.select_debug_info = (function hyperfiddle$electric$impl$runtime$select_debug_info(debug_info){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(debug_info,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425)], null)),contrib.data.select_ns(new cljs.core.Keyword(null,"hyperfiddle.electric.debug","hyperfiddle.electric.debug",-987645572),debug_info)], 0));
});
hyperfiddle.electric.impl.runtime.check_failure = (function hyperfiddle$electric$impl$runtime$check_failure(debug_info,_LT_x){
return missionary.core.latest.cljs$core$IFn$_invoke$arity$variadic((function (x){
if((x instanceof hyperfiddle.electric.Failure)){
return hyperfiddle.electric.debug.error(hyperfiddle.electric.impl.runtime.select_debug_info(debug_info),x);
} else {
return x;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_LT_x], 0));
});
hyperfiddle.electric.impl.runtime.latest_apply = (function hyperfiddle$electric$impl$runtime$latest_apply(var_args){
var args__5775__auto__ = [];
var len__5769__auto___44690 = arguments.length;
var i__5770__auto___44691 = (0);
while(true){
if((i__5770__auto___44691 < len__5769__auto___44690)){
args__5775__auto__.push((arguments[i__5770__auto___44691]));

var G__44692 = (i__5770__auto___44691 + (1));
i__5770__auto___44691 = G__44692;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return hyperfiddle.electric.impl.runtime.latest_apply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(hyperfiddle.electric.impl.runtime.latest_apply.cljs$core$IFn$_invoke$arity$variadic = (function (debug_info,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(missionary.core.latest,(function() { 
var G__44694__delegate = function (f,args__$1){
var temp__5802__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.failure,f,args__$1);
if(cljs.core.truth_(temp__5802__auto__)){
var err = temp__5802__auto__;
return hyperfiddle.electric.debug.error(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.select_debug_info(debug_info),new cljs.core.Keyword("hyperfiddle.electric.debug","args","hyperfiddle.electric.debug/args",-1101355176),args__$1),err);
} else {
try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);
}catch (e44285){var e = e44285;
return hyperfiddle.electric.debug.error(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.select_debug_info(debug_info),new cljs.core.Keyword("hyperfiddle.electric.debug","args","hyperfiddle.electric.debug/args",-1101355176),args__$1),(new hyperfiddle.electric.Failure(e)));
}}
};
var G__44694 = function (f,var_args){
var args__$1 = null;
if (arguments.length > 1) {
var G__44695__i = 0, G__44695__a = new Array(arguments.length -  1);
while (G__44695__i < G__44695__a.length) {G__44695__a[G__44695__i] = arguments[G__44695__i + 1]; ++G__44695__i;}
  args__$1 = new cljs.core.IndexedSeq(G__44695__a,0,null);
} 
return G__44694__delegate.call(this,f,args__$1);};
G__44694.cljs$lang$maxFixedArity = 1;
G__44694.cljs$lang$applyTo = (function (arglist__44696){
var f = cljs.core.first(arglist__44696);
var args__$1 = cljs.core.rest(arglist__44696);
return G__44694__delegate(f,args__$1);
});
G__44694.cljs$core$IFn$_invoke$arity$variadic = G__44694__delegate;
return G__44694;
})()
,args);
}));

(hyperfiddle.electric.impl.runtime.latest_apply.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(hyperfiddle.electric.impl.runtime.latest_apply.cljs$lang$applyTo = (function (seq44273){
var G__44274 = cljs.core.first(seq44273);
var seq44273__$1 = cljs.core.next(seq44273);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44274,seq44273__$1);
}));

hyperfiddle.electric.impl.runtime.latest_first = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(missionary.core.latest,(function (x,y){
if((y instanceof hyperfiddle.electric.Failure)){
return y;
} else {
return x;
}
}));
hyperfiddle.electric.impl.runtime.pure = (function hyperfiddle$electric$impl$runtime$pure(x){
return missionary.core.cp_STAR_((function (){var cr44290_block_0 = (function hyperfiddle$electric$impl$runtime$pure_$_cr44290_block_0(cr44290_state){
try{var cr44290_place_0 = x;
(cr44290_state[(0)] = null);

return cr44290_place_0;
}catch (e44296){var cr44290_exception = e44296;
(cr44290_state[(0)] = null);

throw cr44290_exception;
}});
return cloroutine.impl.coroutine((function (){var G__44300 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__44300[(0)] = cr44290_block_0);

return G__44300;
})());
})());
});
hyperfiddle.electric.impl.runtime.empty_event = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"acks","acks",707064729),(0),new cljs.core.Keyword(null,"tree","tree",-196312028),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"change","change",-1163046502),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"freeze","freeze",2043466309),cljs.core.PersistentHashSet.EMPTY], null);

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
hyperfiddle.electric.impl.runtime.It = (function (state,cancel,transfer){
this.state = state;
this.cancel = cancel;
this.transfer = transfer;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.runtime.It.prototype.call = (function (unused__15668__auto__){
var self__ = this;
var self__ = this;
var G__44306 = (arguments.length - (1));
switch (G__44306) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.runtime.It.prototype.apply = (function (self__,args44304){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args44304)));
}));

(hyperfiddle.electric.impl.runtime.It.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
return (self__.cancel.cljs$core$IFn$_invoke$arity$1 ? self__.cancel.cljs$core$IFn$_invoke$arity$1(self__.state) : self__.cancel.call(null,self__.state));
}));

(hyperfiddle.electric.impl.runtime.It.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.transfer.cljs$core$IFn$_invoke$arity$1 ? self__.transfer.cljs$core$IFn$_invoke$arity$1(self__.state) : self__.transfer.call(null,self__.state));
}));

(hyperfiddle.electric.impl.runtime.It.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"cancel","cancel",-323556833,null),new cljs.core.Symbol(null,"transfer","transfer",1967954927,null)], null);
}));

(hyperfiddle.electric.impl.runtime.It.cljs$lang$type = true);

(hyperfiddle.electric.impl.runtime.It.cljs$lang$ctorStr = "hyperfiddle.electric.impl.runtime/It");

(hyperfiddle.electric.impl.runtime.It.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.runtime/It");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.runtime/It.
 */
hyperfiddle.electric.impl.runtime.__GT_It = (function hyperfiddle$electric$impl$runtime$__GT_It(state,cancel,transfer){
return (new hyperfiddle.electric.impl.runtime.It(state,cancel,transfer));
});


/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime44314 = (function (it,meta44315){
this.it = it;
this.meta44315 = meta44315;
this.cljs$lang$protocol_mask$partition0$ = 425985;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime44314.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44316,meta44315__$1){
var self__ = this;
var _44316__$1 = this;
return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime44314(self__.it,meta44315__$1));
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime44314.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44316){
var self__ = this;
var _44316__$1 = this;
return self__.meta44315;
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime44314.prototype.call = (function (unused__15668__auto__){
var self__ = this;
var self__ = this;
var G__44321 = (arguments.length - (1));
switch (G__44321) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime44314.prototype.apply = (function (self__,args44317){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args44317)));
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime44314.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
return (self__.it.cljs$core$IFn$_invoke$arity$0 ? self__.it.cljs$core$IFn$_invoke$arity$0() : self__.it.call(null));
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime44314.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
try{return cljs.core.deref(self__.it);
}catch (e44329){if((e44329 instanceof missionary.Cancelled)){
var e = e44329;
return (new hyperfiddle.electric.Failure(e));
} else {
throw e44329;

}
}}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime44314.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"it","it",-1630841225,null),new cljs.core.Symbol(null,"meta44315","meta44315",-204705423,null)], null);
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime44314.cljs$lang$type = true);

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime44314.cljs$lang$ctorStr = "hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime44314");

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime44314.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime44314");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime44314.
 */
hyperfiddle.electric.impl.runtime.__GT_t_hyperfiddle$electric$impl$runtime44314 = (function hyperfiddle$electric$impl$runtime$__GT_t_hyperfiddle$electric$impl$runtime44314(it,meta44315){
return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime44314(it,meta44315));
});


hyperfiddle.electric.impl.runtime.lift_cancelled = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,(function (it){
return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime44314(it,cljs.core.PersistentArrayMap.EMPTY));
}));
hyperfiddle.electric.impl.runtime.signal = (function hyperfiddle$electric$impl$runtime$signal(_LT_x){
return missionary.core.signal_BANG_(hyperfiddle.electric.impl.runtime.lift_cancelled(_LT_x));
});
hyperfiddle.electric.impl.runtime.this$ = cljs.core.volatile_BANG_(null);
hyperfiddle.electric.impl.runtime.context_slot_root = ((0) | (0));
hyperfiddle.electric.impl.runtime.context_slot_local_id = ((1) | (0));
hyperfiddle.electric.impl.runtime.context_slot_remote_id = ((2) | (0));
hyperfiddle.electric.impl.runtime.context_slot_pending_rpos = ((3) | (0));
hyperfiddle.electric.impl.runtime.context_slot_pending_wpos = ((4) | (0));
hyperfiddle.electric.impl.runtime.context_slot_pending_buffer = ((5) | (0));
hyperfiddle.electric.impl.runtime.context_slot_frame_store = ((6) | (0));
hyperfiddle.electric.impl.runtime.context_slot_event = ((7) | (0));
hyperfiddle.electric.impl.runtime.context_slot_check = ((8) | (0));
hyperfiddle.electric.impl.runtime.context_slot_notifier = ((9) | (0));
hyperfiddle.electric.impl.runtime.context_slot_terminator = ((10) | (0));
hyperfiddle.electric.impl.runtime.context_slot_incoming = ((11) | (0));
hyperfiddle.electric.impl.runtime.context_slots = ((12) | (0));
hyperfiddle.electric.impl.runtime.tier_slot_parent = ((0) | (0));
hyperfiddle.electric.impl.runtime.tier_slot_position = ((1) | (0));
hyperfiddle.electric.impl.runtime.tier_slot_buffer = ((2) | (0));
hyperfiddle.electric.impl.runtime.tier_slot_size = ((3) | (0));
hyperfiddle.electric.impl.runtime.tier_slot_foreigns = ((4) | (0));
hyperfiddle.electric.impl.runtime.tier_slot_hooks = ((5) | (0));
hyperfiddle.electric.impl.runtime.tier_slot_vars = ((6) | (0));
hyperfiddle.electric.impl.runtime.tier_slot_remote = ((7) | (0));
hyperfiddle.electric.impl.runtime.tier_slots = ((8) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_context = ((0) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_parent = ((1) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_id = ((2) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_position = ((3) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_foreign = ((4) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_static = ((5) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_dynamic = ((6) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_variables = ((7) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_sources = ((8) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_targets = ((9) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_inputs = ((10) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_tiers = ((11) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_constants = ((12) | (0));
hyperfiddle.electric.impl.runtime.frame_slots = ((13) | (0));
hyperfiddle.electric.impl.runtime.input_slot_frame = ((0) | (0));
hyperfiddle.electric.impl.runtime.input_slot_notifier = ((1) | (0));
hyperfiddle.electric.impl.runtime.input_slot_terminator = ((2) | (0));
hyperfiddle.electric.impl.runtime.input_slot_current = ((3) | (0));
hyperfiddle.electric.impl.runtime.input_slot_dirty = ((4) | (0));
hyperfiddle.electric.impl.runtime.input_slot_check = ((5) | (0));
hyperfiddle.electric.impl.runtime.input_slot_pending = ((6) | (0));
hyperfiddle.electric.impl.runtime.input_slot_cancel = ((7) | (0));
hyperfiddle.electric.impl.runtime.input_slots = ((8) | (0));
hyperfiddle.electric.impl.runtime.output_slot_input = ((0) | (0));
hyperfiddle.electric.impl.runtime.output_slot_id = ((1) | (0));
hyperfiddle.electric.impl.runtime.output_slot_iterator = ((2) | (0));
hyperfiddle.electric.impl.runtime.output_slot_current = ((3) | (0));
hyperfiddle.electric.impl.runtime.output_slot_dirty = ((4) | (0));
hyperfiddle.electric.impl.runtime.output_slot_done = ((5) | (0));
hyperfiddle.electric.impl.runtime.output_slot_prev = ((6) | (0));
hyperfiddle.electric.impl.runtime.output_slot_next = ((7) | (0));
hyperfiddle.electric.impl.runtime.output_slot_time = ((8) | (0));
hyperfiddle.electric.impl.runtime.output_slots = ((9) | (0));
hyperfiddle.electric.impl.runtime.aswap = (function hyperfiddle$electric$impl$runtime$aswap(var_args){
var G__44353 = arguments.length;
switch (G__44353) {
case 3:
return hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___44730 = arguments.length;
var i__5770__auto___44731 = (0);
while(true){
if((i__5770__auto___44731 < len__5769__auto___44730)){
args_arr__5794__auto__.push((arguments[i__5770__auto___44731]));

var G__44733 = (i__5770__auto___44731 + (1));
i__5770__auto___44731 = G__44733;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((6)),(0),null));
return hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__5795__auto__);

}
});

(hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$3 = (function (arr,slot,f){
return (arr[slot] = (function (){var G__44359 = (arr[slot]);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__44359) : f.call(null,G__44359));
})());
}));

(hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$4 = (function (arr,slot,f,a){
return (arr[slot] = (function (){var G__44360 = (arr[slot]);
var G__44361 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__44360,G__44361) : f.call(null,G__44360,G__44361));
})());
}));

(hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$5 = (function (arr,slot,f,a,b){
return (arr[slot] = (function (){var G__44363 = (arr[slot]);
var G__44364 = a;
var G__44365 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__44363,G__44364,G__44365) : f.call(null,G__44363,G__44364,G__44365));
})());
}));

(hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$6 = (function (arr,slot,f,a,b,c){
return (arr[slot] = (function (){var G__44366 = (arr[slot]);
var G__44367 = a;
var G__44368 = b;
var G__44369 = c;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__44366,G__44367,G__44368,G__44369) : f.call(null,G__44366,G__44367,G__44368,G__44369));
})());
}));

(hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$variadic = (function (arr,slot,f,a,b,c,ds){
return (arr[slot] = cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,(arr[slot]),a,b,c,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ds], 0)));
}));

/** @this {Function} */
(hyperfiddle.electric.impl.runtime.aswap.cljs$lang$applyTo = (function (seq44346){
var G__44347 = cljs.core.first(seq44346);
var seq44346__$1 = cljs.core.next(seq44346);
var G__44348 = cljs.core.first(seq44346__$1);
var seq44346__$2 = cljs.core.next(seq44346__$1);
var G__44349 = cljs.core.first(seq44346__$2);
var seq44346__$3 = cljs.core.next(seq44346__$2);
var G__44350 = cljs.core.first(seq44346__$3);
var seq44346__$4 = cljs.core.next(seq44346__$3);
var G__44351 = cljs.core.first(seq44346__$4);
var seq44346__$5 = cljs.core.next(seq44346__$4);
var G__44352 = cljs.core.first(seq44346__$5);
var seq44346__$6 = cljs.core.next(seq44346__$5);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44347,G__44348,G__44349,G__44350,G__44351,G__44352,seq44346__$6);
}));

(hyperfiddle.electric.impl.runtime.aswap.cljs$lang$maxFixedArity = (6));

hyperfiddle.electric.impl.runtime.doto_aset = (function hyperfiddle$electric$impl$runtime$doto_aset(arr,k,v){
var G__44374 = arr;
(G__44374[(k | (0))] = v);

return G__44374;
});
hyperfiddle.electric.impl.runtime.make_context = (function hyperfiddle$electric$impl$runtime$make_context(){
var G__44379 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.runtime.context_slots);
(G__44379[hyperfiddle.electric.impl.runtime.context_slot_local_id] = cljs.core.identity((0)));

(G__44379[hyperfiddle.electric.impl.runtime.context_slot_remote_id] = cljs.core.identity((0)));

(G__44379[hyperfiddle.electric.impl.runtime.context_slot_pending_rpos] = cljs.core.identity((0)));

(G__44379[hyperfiddle.electric.impl.runtime.context_slot_pending_wpos] = cljs.core.identity((0)));

(G__44379[hyperfiddle.electric.impl.runtime.context_slot_pending_buffer] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2)));

(G__44379[hyperfiddle.electric.impl.runtime.context_slot_frame_store] = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY));

return G__44379;
});
hyperfiddle.electric.impl.runtime.make_tier = (function hyperfiddle$electric$impl$runtime$make_tier(parent,position){
return ((parent[hyperfiddle.electric.impl.runtime.frame_slot_tiers])[(position | (0))] = (function (){var G__44385 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.runtime.tier_slots);
(G__44385[hyperfiddle.electric.impl.runtime.tier_slot_parent] = parent);

(G__44385[hyperfiddle.electric.impl.runtime.tier_slot_position] = position);

(G__44385[hyperfiddle.electric.impl.runtime.tier_slot_buffer] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((8)));

(G__44385[hyperfiddle.electric.impl.runtime.tier_slot_size] = cljs.core.identity(((0) | (0))));

(G__44385[hyperfiddle.electric.impl.runtime.tier_slot_foreigns] = cljs.core.PersistentArrayMap.EMPTY);

(G__44385[hyperfiddle.electric.impl.runtime.tier_slot_hooks] = cljs.core.PersistentArrayMap.EMPTY);

return G__44385;
})());
});
hyperfiddle.electric.impl.runtime.make_frame = (function hyperfiddle$electric$impl$runtime$make_frame(context,parent,id,position,foreign,static$,dynamic,variable_count,source_count,constant_count,target_count,output_count,input_count,buffer,vars,boot){
var tier_count = (variable_count + source_count);
var frame = (function (){var G__44400 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.runtime.frame_slots);
(G__44400[hyperfiddle.electric.impl.runtime.frame_slot_context] = context);

(G__44400[hyperfiddle.electric.impl.runtime.frame_slot_parent] = parent);

(G__44400[hyperfiddle.electric.impl.runtime.frame_slot_id] = id);

(G__44400[hyperfiddle.electric.impl.runtime.frame_slot_position] = position);

(G__44400[hyperfiddle.electric.impl.runtime.frame_slot_foreign] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cljs.core.count(foreign)));

(G__44400[hyperfiddle.electric.impl.runtime.frame_slot_static] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cljs.core.count(static$)));

(G__44400[hyperfiddle.electric.impl.runtime.frame_slot_dynamic] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cljs.core.count(dynamic)));

(G__44400[hyperfiddle.electric.impl.runtime.frame_slot_variables] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(variable_count));

(G__44400[hyperfiddle.electric.impl.runtime.frame_slot_sources] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(source_count));

(G__44400[hyperfiddle.electric.impl.runtime.frame_slot_targets] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(target_count));

(G__44400[hyperfiddle.electric.impl.runtime.frame_slot_inputs] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(input_count));

(G__44400[hyperfiddle.electric.impl.runtime.frame_slot_tiers] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(tier_count));

(G__44400[hyperfiddle.electric.impl.runtime.frame_slot_constants] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(constant_count));

return G__44400;
})();
var n__5636__auto___44750 = tier_count;
var i_44751 = (0);
while(true){
if((i_44751 < n__5636__auto___44750)){
hyperfiddle.electric.impl.runtime.make_tier(frame,i_44751);

var G__44753 = (i_44751 + (1));
i_44751 = G__44753;
continue;
} else {
}
break;
}

(buffer[(position | (0))] = frame);

hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$5(context,hyperfiddle.electric.impl.runtime.context_slot_frame_store,cljs.core.assoc_BANG_,id,frame);

var prevs = cljs.core.reduce_kv((function (m,v,_LT_x){
var prev = (vars[(v | (0))]);
var proc = hyperfiddle.electric.impl.runtime.signal(_LT_x);
((frame[hyperfiddle.electric.impl.runtime.frame_slot_foreign])[cljs.core.count(m)] = proc);

(vars[(v | (0))] = proc);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,v,prev);
}),cljs.core.PersistentArrayMap.EMPTY,foreign);
cljs.core.reduce_kv((function (arr,i,_LT_x){
(arr[(i | (0))] = hyperfiddle.electric.impl.runtime.signal(_LT_x));

return arr;
}),(frame[hyperfiddle.electric.impl.runtime.frame_slot_static]),static$);

cljs.core.reduce_kv((function (arr,i,v){
(arr[(i | (0))] = hyperfiddle.electric.impl.runtime.signal((vars[(v | (0))])));

return arr;
}),(frame[hyperfiddle.electric.impl.runtime.frame_slot_dynamic]),dynamic);

var result = (boot.cljs$core$IFn$_invoke$arity$2 ? boot.cljs$core$IFn$_invoke$arity$2(frame,vars) : boot.call(null,frame,vars));
cljs.core.reduce_kv(hyperfiddle.electric.impl.runtime.doto_aset,vars,prevs);

return result;
});
hyperfiddle.electric.impl.runtime.input_ready = (function hyperfiddle$electric$impl$runtime$input_ready(input){
if(((input[hyperfiddle.electric.impl.runtime.input_slot_cancel]) == null)){
(input[hyperfiddle.electric.impl.runtime.input_slot_cancel] = false);

var fexpr__44419 = (input[hyperfiddle.electric.impl.runtime.input_slot_notifier]);
return (fexpr__44419.cljs$core$IFn$_invoke$arity$0 ? fexpr__44419.cljs$core$IFn$_invoke$arity$0() : fexpr__44419.call(null));
} else {
return null;
}
});
hyperfiddle.electric.impl.runtime.output_dirty = (function hyperfiddle$electric$impl$runtime$output_dirty(output){
var input = (output[hyperfiddle.electric.impl.runtime.output_slot_input]);
var dirty = (input[hyperfiddle.electric.impl.runtime.input_slot_dirty]);
(output[hyperfiddle.electric.impl.runtime.output_slot_dirty] = dirty);

(input[hyperfiddle.electric.impl.runtime.input_slot_dirty] = output);

if((dirty == null)){
if((input === (input[hyperfiddle.electric.impl.runtime.input_slot_check]))){
var frame_44759 = (input[hyperfiddle.electric.impl.runtime.input_slot_frame]);
var context_44760 = (frame_44759[hyperfiddle.electric.impl.runtime.frame_slot_context]);
var check_44761 = (context_44760[hyperfiddle.electric.impl.runtime.context_slot_check]);
(context_44760[hyperfiddle.electric.impl.runtime.context_slot_check] = input);

(input[hyperfiddle.electric.impl.runtime.input_slot_check] = check_44761);

if(((context_44760[hyperfiddle.electric.impl.runtime.context_slot_event]) == null)){
(context_44760[hyperfiddle.electric.impl.runtime.context_slot_event] = hyperfiddle.electric.impl.runtime.empty_event);

var fexpr__44427_44762 = (context_44760[hyperfiddle.electric.impl.runtime.context_slot_notifier]);
(fexpr__44427_44762.cljs$core$IFn$_invoke$arity$0 ? fexpr__44427_44762.cljs$core$IFn$_invoke$arity$0() : fexpr__44427_44762.call(null));
} else {
}
} else {
}
} else {
}

return hyperfiddle.electric.impl.runtime.input_ready(input);
});
hyperfiddle.electric.impl.runtime.output_spawn = (function hyperfiddle$electric$impl$runtime$output_spawn(input,output){
if((output == null)){
} else {
(output[hyperfiddle.electric.impl.runtime.output_slot_input] = input);

(output[hyperfiddle.electric.impl.runtime.output_slot_iterator] = (function (){var G__44432 = (function (){
return hyperfiddle.electric.impl.runtime.output_dirty(output);
});
var G__44433 = (function (){
(output[hyperfiddle.electric.impl.runtime.output_slot_done] = true);

return hyperfiddle.electric.impl.runtime.output_dirty(output);
});
var fexpr__44431 = (output[hyperfiddle.electric.impl.runtime.output_slot_iterator]);
return (fexpr__44431.cljs$core$IFn$_invoke$arity$2 ? fexpr__44431.cljs$core$IFn$_invoke$arity$2(G__44432,G__44433) : fexpr__44431.call(null,G__44432,G__44433));
})());
}

return input;
});
hyperfiddle.electric.impl.runtime.make_output = (function hyperfiddle$electric$impl$runtime$make_output(id,_LT_x){
var output = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.runtime.output_slots);
(output[hyperfiddle.electric.impl.runtime.output_slot_id] = id);

(output[hyperfiddle.electric.impl.runtime.output_slot_done] = false);

(output[hyperfiddle.electric.impl.runtime.output_slot_prev] = output);

(output[hyperfiddle.electric.impl.runtime.output_slot_next] = output);

(output[hyperfiddle.electric.impl.runtime.output_slot_dirty] = output);

(output[hyperfiddle.electric.impl.runtime.output_slot_current] = output);

(output[hyperfiddle.electric.impl.runtime.output_slot_iterator] = _LT_x);

return output;
});
hyperfiddle.electric.impl.runtime.input_cancel = (function hyperfiddle$electric$impl$runtime$input_cancel(input){
var c = (input[hyperfiddle.electric.impl.runtime.input_slot_cancel]);
(input[hyperfiddle.electric.impl.runtime.input_slot_cancel] = true);

if((c == null)){
var fexpr__44448 = (input[hyperfiddle.electric.impl.runtime.input_slot_notifier]);
return (fexpr__44448.cljs$core$IFn$_invoke$arity$0 ? fexpr__44448.cljs$core$IFn$_invoke$arity$0() : fexpr__44448.call(null));
} else {
return null;
}
});
hyperfiddle.electric.impl.runtime.input_change = (function hyperfiddle$electric$impl$runtime$input_change(input,x){
(input[hyperfiddle.electric.impl.runtime.input_slot_current] = x);

return hyperfiddle.electric.impl.runtime.input_ready(input);
});
hyperfiddle.electric.impl.runtime.input_freeze = (function hyperfiddle$electric$impl$runtime$input_freeze(input){
(input[hyperfiddle.electric.impl.runtime.input_slot_pending] = (-1));

if(((input[hyperfiddle.electric.impl.runtime.input_slot_cancel]) == null)){
(input[hyperfiddle.electric.impl.runtime.input_slot_cancel] = false);

var fexpr__44461 = (input[hyperfiddle.electric.impl.runtime.input_slot_terminator]);
return (fexpr__44461.cljs$core$IFn$_invoke$arity$0 ? fexpr__44461.cljs$core$IFn$_invoke$arity$0() : fexpr__44461.call(null));
} else {
return null;
}
});
hyperfiddle.electric.impl.runtime.update_event = (function hyperfiddle$electric$impl$runtime$update_event(var_args){
var args__5775__auto__ = [];
var len__5769__auto___44767 = arguments.length;
var i__5770__auto___44768 = (0);
while(true){
if((i__5770__auto___44768 < len__5769__auto___44767)){
args__5775__auto__.push((arguments[i__5770__auto___44768]));

var G__44769 = (i__5770__auto___44768 + (1));
i__5770__auto___44768 = G__44769;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return hyperfiddle.electric.impl.runtime.update_event.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(hyperfiddle.electric.impl.runtime.update_event.cljs$core$IFn$_invoke$arity$variadic = (function (context,k,f,args){
var temp__5806__auto__ = (context[hyperfiddle.electric.impl.runtime.context_slot_event]);
if((temp__5806__auto__ == null)){
(context[hyperfiddle.electric.impl.runtime.context_slot_event] = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update,hyperfiddle.electric.impl.runtime.empty_event,k,f,args));

var fexpr__44472 = (context[hyperfiddle.electric.impl.runtime.context_slot_notifier]);
return (fexpr__44472.cljs$core$IFn$_invoke$arity$0 ? fexpr__44472.cljs$core$IFn$_invoke$arity$0() : fexpr__44472.call(null));
} else {
var event = temp__5806__auto__;
return (context[hyperfiddle.electric.impl.runtime.context_slot_event] = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update,event,k,f,args));
}
}));

(hyperfiddle.electric.impl.runtime.update_event.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(hyperfiddle.electric.impl.runtime.update_event.cljs$lang$applyTo = (function (seq44463){
var G__44464 = cljs.core.first(seq44463);
var seq44463__$1 = cljs.core.next(seq44463);
var G__44465 = cljs.core.first(seq44463__$1);
var seq44463__$2 = cljs.core.next(seq44463__$1);
var G__44466 = cljs.core.first(seq44463__$2);
var seq44463__$3 = cljs.core.next(seq44463__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44464,G__44465,G__44466,seq44463__$3);
}));

hyperfiddle.electric.impl.runtime.input_check = (function hyperfiddle$electric$impl$runtime$input_check(input){
var frame = (input[hyperfiddle.electric.impl.runtime.input_slot_frame]);
var context = (frame[hyperfiddle.electric.impl.runtime.frame_slot_context]);
while(true){
var temp__5806__auto__ = (input[hyperfiddle.electric.impl.runtime.input_slot_dirty]);
if((temp__5806__auto__ == null)){
return null;
} else {
var output = temp__5806__auto__;
var path = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- (frame[hyperfiddle.electric.impl.runtime.frame_slot_id])),(output[hyperfiddle.electric.impl.runtime.output_slot_id])], null);
(input[hyperfiddle.electric.impl.runtime.input_slot_dirty] = (output[hyperfiddle.electric.impl.runtime.output_slot_dirty]));

(output[hyperfiddle.electric.impl.runtime.output_slot_dirty] = output);

if(cljs.core.truth_((output[hyperfiddle.electric.impl.runtime.output_slot_done]))){
hyperfiddle.electric.impl.runtime.update_event.cljs$core$IFn$_invoke$arity$variadic(context,new cljs.core.Keyword(null,"freeze","freeze",2043466309),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0));
} else {
var x_44777 = cljs.core.deref((output[hyperfiddle.electric.impl.runtime.output_slot_iterator]));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((output[hyperfiddle.electric.impl.runtime.output_slot_current]),(output[hyperfiddle.electric.impl.runtime.output_slot_current] = x_44777))){
} else {
var buffer_44779 = (context[hyperfiddle.electric.impl.runtime.context_slot_pending_buffer]);
var wpos_44780 = (context[hyperfiddle.electric.impl.runtime.context_slot_pending_wpos]);
var temp__5806__auto___44781__$1 = (output[hyperfiddle.electric.impl.runtime.output_slot_time]);
if((temp__5806__auto___44781__$1 == null)){
hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$3(input,hyperfiddle.electric.impl.runtime.input_slot_pending,cljs.core.inc);
} else {
var t_44782 = temp__5806__auto___44781__$1;
var p_44783 = (output[hyperfiddle.electric.impl.runtime.output_slot_prev]);
var n_44784 = (output[hyperfiddle.electric.impl.runtime.output_slot_next]);
(buffer_44779[t_44782] = (((p_44783 === output))?null:(function (){
(p_44783[hyperfiddle.electric.impl.runtime.output_slot_next] = n_44784);

return (n_44784[hyperfiddle.electric.impl.runtime.output_slot_prev] = p_44783);
})()
));
}

(output[hyperfiddle.electric.impl.runtime.output_slot_time] = wpos_44780);

var temp__5806__auto___44788__$1 = (buffer_44779[wpos_44780]);
if((temp__5806__auto___44788__$1 == null)){
(buffer_44779[wpos_44780] = output);

(output[hyperfiddle.electric.impl.runtime.output_slot_prev] = output);

(output[hyperfiddle.electric.impl.runtime.output_slot_next] = output);
} else {
var p_44789 = temp__5806__auto___44788__$1;
var n_44790 = (p_44789[hyperfiddle.electric.impl.runtime.output_slot_next]);
(p_44789[hyperfiddle.electric.impl.runtime.output_slot_next] = output);

(n_44790[hyperfiddle.electric.impl.runtime.output_slot_prev] = output);

(output[hyperfiddle.electric.impl.runtime.output_slot_prev] = p_44789);

(output[hyperfiddle.electric.impl.runtime.output_slot_next] = n_44790);
}

hyperfiddle.electric.impl.runtime.update_event.cljs$core$IFn$_invoke$arity$variadic(context,new cljs.core.Keyword(null,"change","change",-1163046502),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path,x_44777], 0));
}
}

continue;
}
break;
}
});
hyperfiddle.electric.impl.runtime.input_transfer = (function hyperfiddle$electric$impl$runtime$input_transfer(input){
hyperfiddle.electric.impl.runtime.input_check(input);

if(cljs.core.truth_((input[hyperfiddle.electric.impl.runtime.input_slot_cancel]))){
var fexpr__44486_44792 = (input[hyperfiddle.electric.impl.runtime.input_slot_terminator]);
(fexpr__44486_44792.cljs$core$IFn$_invoke$arity$0 ? fexpr__44486_44792.cljs$core$IFn$_invoke$arity$0() : fexpr__44486_44792.call(null));

throw (new missionary.Cancelled());
} else {
var G__44487 = (input[hyperfiddle.electric.impl.runtime.input_slot_pending]);
switch (G__44487) {
case (-1):
var fexpr__44489_44794 = (input[hyperfiddle.electric.impl.runtime.input_slot_terminator]);
(fexpr__44489_44794.cljs$core$IFn$_invoke$arity$0 ? fexpr__44489_44794.cljs$core$IFn$_invoke$arity$0() : fexpr__44489_44794.call(null));

return (input[hyperfiddle.electric.impl.runtime.input_slot_current]);

break;
case (0):
(input[hyperfiddle.electric.impl.runtime.input_slot_cancel] = null);

return (input[hyperfiddle.electric.impl.runtime.input_slot_current]);

break;
default:
(input[hyperfiddle.electric.impl.runtime.input_slot_cancel] = null);

return hyperfiddle.electric.impl.runtime.pending;

}
}
});
hyperfiddle.electric.impl.runtime.make_input = (function hyperfiddle$electric$impl$runtime$make_input(frame,deps){
var input = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.runtime.input_slots);
(input[hyperfiddle.electric.impl.runtime.input_slot_frame] = frame);

(input[hyperfiddle.electric.impl.runtime.input_slot_pending] = (0));

(input[hyperfiddle.electric.impl.runtime.input_slot_current] = hyperfiddle.electric.impl.runtime.pending);

(input[hyperfiddle.electric.impl.runtime.input_slot_cancel] = false);

(input[hyperfiddle.electric.impl.runtime.input_slot_check] = input);

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.output_spawn,input,deps);
});
hyperfiddle.electric.impl.runtime.input_spawn = (function hyperfiddle$electric$impl$runtime$input_spawn(frame,slot,deps){
return missionary.core.signal_BANG_((function (n,t){
var input = hyperfiddle.electric.impl.runtime.make_input(frame,deps);
(input[hyperfiddle.electric.impl.runtime.input_slot_notifier] = n);

(input[hyperfiddle.electric.impl.runtime.input_slot_terminator] = t);

((frame[hyperfiddle.electric.impl.runtime.frame_slot_inputs])[(slot | (0))] = input);

(n.cljs$core$IFn$_invoke$arity$0 ? n.cljs$core$IFn$_invoke$arity$0() : n.call(null));

return hyperfiddle.electric.impl.runtime.__GT_It(input,hyperfiddle.electric.impl.runtime.input_cancel,hyperfiddle.electric.impl.runtime.input_transfer);
}));
});
hyperfiddle.electric.impl.runtime.check_unbound_var = (function hyperfiddle$electric$impl$runtime$check_unbound_var(debug_info,_LT_x){
return missionary.core.latest.cljs$core$IFn$_invoke$arity$variadic((function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","unbound","hyperfiddle.electric.impl.runtime/unbound",63043117),x)){
return (new hyperfiddle.electric.Failure(hyperfiddle.electric.impl.runtime.error(["Unbound var `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("hyperfiddle.electric.debug","name","hyperfiddle.electric.debug/name",-35961215).cljs$core$IFn$_invoke$arity$1(debug_info)),"`"].join(''))));
} else {
return x;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_LT_x], 0));
});
hyperfiddle.electric.impl.runtime.static$ = (function hyperfiddle$electric$impl$runtime$static(frame,slot){
return ((frame[hyperfiddle.electric.impl.runtime.frame_slot_static])[(slot | (0))]);
});
hyperfiddle.electric.impl.runtime.dynamic = (function hyperfiddle$electric$impl$runtime$dynamic(frame,slot,debug_info){
return hyperfiddle.electric.impl.runtime.check_unbound_var(debug_info,((frame[hyperfiddle.electric.impl.runtime.frame_slot_dynamic])[(slot | (0))]));
});
/**
 * A snapshot of the tree below given frame, as nested vectors. Frame vectors start with their id.
 */
hyperfiddle.electric.impl.runtime.tree = (function hyperfiddle$electric$impl$runtime$tree(f){
var tiers = (f[hyperfiddle.electric.impl.runtime.frame_slot_tiers]);
var v = cljs.core.PersistentVector.EMPTY;
var i = ((0) | (0));
while(true){
if((i === tiers.length)){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),(f[hyperfiddle.electric.impl.runtime.frame_slot_id]),new cljs.core.Keyword(null,"inputs","inputs",865803858),(f[hyperfiddle.electric.impl.runtime.frame_slot_inputs]).length,new cljs.core.Keyword(null,"targets","targets",2014963406),(f[hyperfiddle.electric.impl.runtime.frame_slot_targets]).length,new cljs.core.Keyword(null,"sources","sources",-321166424),(f[hyperfiddle.electric.impl.runtime.frame_slot_sources]).length,new cljs.core.Keyword(null,"tiers","tiers",-46242789),v], null);
} else {
var G__44812 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,(function (){var tier = (tiers[i]);
var buf = (tier[hyperfiddle.electric.impl.runtime.tier_slot_buffer]);
var v__$1 = cljs.core.PersistentVector.EMPTY;
var i__$1 = ((0) | (0));
while(true){
if((i__$1 === (tier[hyperfiddle.electric.impl.runtime.tier_slot_size]))){
return v__$1;
} else {
var G__44814 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v__$1,(function (){var G__44503 = (buf[i__$1]);
return (hyperfiddle.electric.impl.runtime.tree.cljs$core$IFn$_invoke$arity$1 ? hyperfiddle.electric.impl.runtime.tree.cljs$core$IFn$_invoke$arity$1(G__44503) : hyperfiddle.electric.impl.runtime.tree.call(null,G__44503));
})());
var G__44815 = (i__$1 + (1));
v__$1 = G__44814;
i__$1 = G__44815;
continue;
}
break;
}
})());
var G__44813 = (i + (1));
v = G__44812;
i = G__44813;
continue;
}
break;
}
});
hyperfiddle.electric.impl.runtime.find_scope = (function hyperfiddle$electric$impl$runtime$find_scope(f){
var f__$1 = f;
var s = cljs.core.PersistentHashSet.EMPTY;
while(true){
var temp__5806__auto__ = (f__$1[hyperfiddle.electric.impl.runtime.frame_slot_parent]);
if((temp__5806__auto__ == null)){
return s;
} else {
var tier = temp__5806__auto__;
var G__44818 = (tier[hyperfiddle.electric.impl.runtime.tier_slot_parent]);
var G__44819 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(s,cljs.core.keys((tier[hyperfiddle.electric.impl.runtime.tier_slot_hooks])));
f__$1 = G__44818;
s = G__44819;
continue;
}
break;
}
});
hyperfiddle.electric.impl.runtime.frame_walk_tiers = (function hyperfiddle$electric$impl$runtime$frame_walk_tiers(frame,step,k,cb,start){
var tiers = (frame[hyperfiddle.electric.impl.runtime.frame_slot_tiers]);
var size = tiers.length;
var back = (((1) - step) >> (1));
var back_inc_size = (back * (size + (1)));
var stop = (size - back_inc_size);
var i = (((start == null))?(back_inc_size - (1)):start);
while(true){
var i__$1 = (i + step);
if((i__$1 === stop)){
return null;
} else {
var temp__5806__auto__ = (function (){var tier = (tiers[i__$1]);
var temp__5806__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((tier[hyperfiddle.electric.impl.runtime.tier_slot_hooks]),k);
if((temp__5806__auto__ == null)){
return (hyperfiddle.electric.impl.runtime.tier_walk_frames.cljs$core$IFn$_invoke$arity$5 ? hyperfiddle.electric.impl.runtime.tier_walk_frames.cljs$core$IFn$_invoke$arity$5(tier,step,k,cb,null) : hyperfiddle.electric.impl.runtime.tier_walk_frames.call(null,tier,step,k,cb,null));
} else {
var v = temp__5806__auto__;
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(v) : cb.call(null,v));
}
})();
if((temp__5806__auto__ == null)){
var G__44823 = i__$1;
i = G__44823;
continue;
} else {
var x = temp__5806__auto__;
return x;
}
}
break;
}
});
hyperfiddle.electric.impl.runtime.tier_walk_frames = (function hyperfiddle$electric$impl$runtime$tier_walk_frames(tier,step,k,cb,start){
var buf = (tier[hyperfiddle.electric.impl.runtime.tier_slot_buffer]);
var size = (tier[hyperfiddle.electric.impl.runtime.tier_slot_size]);
var back = (((1) - step) >> (1));
var back_inc_size = (back * (size + (1)));
var stop = (size - back_inc_size);
var i = (((start == null))?(back_inc_size - (1)):start);
while(true){
var i__$1 = (i + step);
if((i__$1 === stop)){
return null;
} else {
var temp__5806__auto__ = hyperfiddle.electric.impl.runtime.frame_walk_tiers((buf[i__$1]),step,k,cb,null);
if((temp__5806__auto__ == null)){
var G__44834 = i__$1;
i = G__44834;
continue;
} else {
var x = temp__5806__auto__;
return x;
}
}
break;
}
});
hyperfiddle.electric.impl.runtime.notify_rotate = (function hyperfiddle$electric$impl$runtime$notify_rotate(f,k){
var anchor = (function (){var f__$1 = f;
while(true){
var tier = (f__$1[hyperfiddle.electric.impl.runtime.frame_slot_parent]);
if(cljs.core.contains_QMARK_((tier[hyperfiddle.electric.impl.runtime.tier_slot_hooks]),k)){
return null;
} else {
var temp__5806__auto__ = hyperfiddle.electric.impl.runtime.tier_walk_frames(tier,(1),k,cljs.core.identity,(f__$1[hyperfiddle.electric.impl.runtime.frame_slot_position]));
if((temp__5806__auto__ == null)){
var G__44838 = (tier[hyperfiddle.electric.impl.runtime.tier_slot_parent]);
f__$1 = G__44838;
continue;
} else {
var a = temp__5806__auto__;
return a;
}
}
break;
}
})();
hyperfiddle.electric.impl.runtime.frame_walk_tiers(f,(1),k,(function (target){
return (k.cljs$core$IFn$_invoke$arity$2 ? k.cljs$core$IFn$_invoke$arity$2(target,anchor) : k.call(null,target,anchor));
}),null);

return f;
});
hyperfiddle.electric.impl.runtime.array_call = (function hyperfiddle$electric$impl$runtime$array_call(arr){
var n__5636__auto__ = arr.length;
var i = (0);
while(true){
if((i < n__5636__auto__)){
var fexpr__44517_44840 = (arr[i]);
(fexpr__44517_44840.cljs$core$IFn$_invoke$arity$0 ? fexpr__44517_44840.cljs$core$IFn$_invoke$arity$0() : fexpr__44517_44840.call(null));

var G__44841 = (i + (1));
i = G__44841;
continue;
} else {
return null;
}
break;
}
});
hyperfiddle.electric.impl.runtime.frame_dispose = (function hyperfiddle$electric$impl$runtime$frame_dispose(f){
(f[hyperfiddle.electric.impl.runtime.frame_slot_position] = null);

hyperfiddle.electric.impl.runtime.array_call((f[hyperfiddle.electric.impl.runtime.frame_slot_static]));

hyperfiddle.electric.impl.runtime.array_call((f[hyperfiddle.electric.impl.runtime.frame_slot_dynamic]));

hyperfiddle.electric.impl.runtime.array_call((f[hyperfiddle.electric.impl.runtime.frame_slot_foreign]));

hyperfiddle.electric.impl.runtime.array_call((f[hyperfiddle.electric.impl.runtime.frame_slot_variables]));

return hyperfiddle.electric.impl.runtime.array_call((f[hyperfiddle.electric.impl.runtime.frame_slot_constants]));
});
hyperfiddle.electric.impl.runtime.frame_rotate = (function hyperfiddle$electric$impl$runtime$frame_rotate(f,to){
var from = (f[hyperfiddle.electric.impl.runtime.frame_slot_position]);
var step = cljs.core.compare(to,from);
var tier = (f[hyperfiddle.electric.impl.runtime.frame_slot_parent]);
var buf = (tier[hyperfiddle.electric.impl.runtime.tier_slot_buffer]);
if((to === from)){
var size = ((tier[hyperfiddle.electric.impl.runtime.tier_slot_size]) - (1));
var i_44843 = to;
while(true){
if((i_44843 === size)){
} else {
var j_44844 = (i_44843 + (1));
var y_44845 = (buf[(j_44844 | (0))]);
(y_44845[hyperfiddle.electric.impl.runtime.frame_slot_position] = i_44843);

(buf[(i_44843 | (0))] = y_44845);

var G__44846 = j_44844;
i_44843 = G__44846;
continue;
}
break;
}

(tier[hyperfiddle.electric.impl.runtime.tier_slot_size] = size);

(buf[(size | (0))] = null);

return hyperfiddle.electric.impl.runtime.frame_dispose(f);
} else {
var i_44847 = from;
while(true){
var j_44848 = (i_44847 + step);
var y_44849 = (buf[(j_44848 | (0))]);
(y_44849[hyperfiddle.electric.impl.runtime.frame_slot_position] = i_44847);

(buf[(i_44847 | (0))] = y_44849);

if((to === j_44848)){
} else {
var G__44850 = j_44848;
i_44847 = G__44850;
continue;
}
break;
}

(f[hyperfiddle.electric.impl.runtime.frame_slot_position] = to);

(buf[(to | (0))] = f);

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.notify_rotate,f,hyperfiddle.electric.impl.runtime.find_scope(f));
}
});
/**
 * Move a frame. If origin position is equal to target position, frame is removed. Will search and call `hook`.
 */
hyperfiddle.electric.impl.runtime.move = (function hyperfiddle$electric$impl$runtime$move(tier,from,to){
var f = ((tier[hyperfiddle.electric.impl.runtime.tier_slot_buffer])[(from | (0))]);
hyperfiddle.electric.impl.runtime.update_event.cljs$core$IFn$_invoke$arity$variadic((f[hyperfiddle.electric.impl.runtime.frame_slot_context]),new cljs.core.Keyword(null,"tree","tree",-196312028),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"rotate","rotate",152705015),new cljs.core.Keyword(null,"frame","frame",-1711082588),(- (f[hyperfiddle.electric.impl.runtime.frame_slot_id])),new cljs.core.Keyword(null,"position","position",-2011731912),to], null)], 0));

return hyperfiddle.electric.impl.runtime.frame_rotate(f,to);
});
hyperfiddle.electric.impl.runtime.frame_cancel = (function hyperfiddle$electric$impl$runtime$frame_cancel(f){
var temp__5808__auto__ = (f[hyperfiddle.electric.impl.runtime.frame_slot_position]);
if((temp__5808__auto__ == null)){
return null;
} else {
var pos = temp__5808__auto__;
hyperfiddle.electric.impl.runtime.update_event.cljs$core$IFn$_invoke$arity$variadic((f[hyperfiddle.electric.impl.runtime.frame_slot_context]),new cljs.core.Keyword(null,"tree","tree",-196312028),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"rotate","rotate",152705015),new cljs.core.Keyword(null,"frame","frame",-1711082588),(- (f[hyperfiddle.electric.impl.runtime.frame_slot_id])),new cljs.core.Keyword(null,"position","position",-2011731912),pos], null)], 0));

return hyperfiddle.electric.impl.runtime.frame_rotate(f,pos);
}
});
hyperfiddle.electric.impl.runtime.acopy = (function hyperfiddle$electric$impl$runtime$acopy(src,src_off,dest,dest_off,size){
var n__5636__auto___44853 = size;
var i_44854 = (0);
while(true){
if((i_44854 < n__5636__auto___44853)){
(dest[(dest_off + i_44854)] = (src[(src_off + i_44854)]));

var G__44855 = (i_44854 + (1));
i_44854 = G__44855;
continue;
} else {
}
break;
}

return dest;
});
hyperfiddle.electric.impl.runtime.constructor$ = (function hyperfiddle$electric$impl$runtime$constructor(static$,dynamic,variable_count,source_count,constant_count,target_count,output_count,input_count,boot){
return (function (tier,id){
var par = (tier[hyperfiddle.electric.impl.runtime.tier_slot_parent]);
var buf = (tier[hyperfiddle.electric.impl.runtime.tier_slot_buffer]);
var pos = (tier[hyperfiddle.electric.impl.runtime.tier_slot_size]);
var cap = buf.length;
var buf__$1 = (((pos < cap))?buf:(tier[hyperfiddle.electric.impl.runtime.tier_slot_buffer] = hyperfiddle.electric.impl.runtime.acopy(buf,(0),cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((cap << (1))),(0),cap)));
(tier[hyperfiddle.electric.impl.runtime.tier_slot_size] = (pos + (1)));

return hyperfiddle.electric.impl.runtime.make_frame((par[hyperfiddle.electric.impl.runtime.frame_slot_context]),tier,id,pos,(tier[hyperfiddle.electric.impl.runtime.tier_slot_foreigns]),static$,dynamic,variable_count,source_count,constant_count,target_count,output_count,input_count,buf__$1,(tier[hyperfiddle.electric.impl.runtime.tier_slot_vars]),boot);
});
});

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
hyperfiddle.electric.impl.runtime.FrameIterator = (function (f,it){
this.f = f;
this.it = it;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.runtime.FrameIterator.prototype.call = (function (unused__15668__auto__){
var self__ = this;
var self__ = this;
var G__44519 = (arguments.length - (1));
switch (G__44519) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.runtime.FrameIterator.prototype.apply = (function (self__,args44518){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args44518)));
}));

(hyperfiddle.electric.impl.runtime.FrameIterator.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
return hyperfiddle.electric.impl.runtime.frame_cancel(self__.f);
}));

(hyperfiddle.electric.impl.runtime.FrameIterator.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.it);
}));

(hyperfiddle.electric.impl.runtime.FrameIterator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)], null);
}));

(hyperfiddle.electric.impl.runtime.FrameIterator.cljs$lang$type = true);

(hyperfiddle.electric.impl.runtime.FrameIterator.cljs$lang$ctorStr = "hyperfiddle.electric.impl.runtime/FrameIterator");

(hyperfiddle.electric.impl.runtime.FrameIterator.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.runtime/FrameIterator");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.runtime/FrameIterator.
 */
hyperfiddle.electric.impl.runtime.__GT_FrameIterator = (function hyperfiddle$electric$impl$runtime$__GT_FrameIterator(f,it){
return (new hyperfiddle.electric.impl.runtime.FrameIterator(f,it));
});

hyperfiddle.electric.impl.runtime.constant = (function hyperfiddle$electric$impl$runtime$constant(frame,slot,ctor){
var consts = (frame[hyperfiddle.electric.impl.runtime.frame_slot_constants]);
var context = (frame[hyperfiddle.electric.impl.runtime.frame_slot_context]);
return (consts[slot] = hyperfiddle.electric.impl.runtime.signal(missionary.core.watch(cljs.core.atom.cljs$core$IFn$_invoke$arity$1((function (n,t){
var temp__5806__auto__ = cljs.core.deref(hyperfiddle.electric.impl.runtime.this$);
if((temp__5806__auto__ == null)){
return hyperfiddle.electric.impl.failer.run(hyperfiddle.electric.impl.runtime.error("Unable to build frame - not an object."),n,t);
} else {
var tier = temp__5806__auto__;
var parent = (tier[hyperfiddle.electric.impl.runtime.tier_slot_parent]);
var id = hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$3(context,hyperfiddle.electric.impl.runtime.context_slot_local_id,cljs.core.inc);
hyperfiddle.electric.impl.runtime.update_event.cljs$core$IFn$_invoke$arity$variadic(context,new cljs.core.Keyword(null,"tree","tree",-196312028),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"create","create",-1301499256),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- (frame[hyperfiddle.electric.impl.runtime.frame_slot_id])),slot], null),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- (parent[hyperfiddle.electric.impl.runtime.frame_slot_id])),(tier[hyperfiddle.electric.impl.runtime.tier_slot_remote])], null)], null)], 0));

var _LT_x = (ctor.cljs$core$IFn$_invoke$arity$2 ? ctor.cljs$core$IFn$_invoke$arity$2(tier,id) : ctor.call(null,tier,id));
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2((context[hyperfiddle.electric.impl.runtime.context_slot_frame_store]),id);
return hyperfiddle.electric.impl.runtime.__GT_FrameIterator(f,(function (){var G__44521 = n;
var G__44522 = (function (){
hyperfiddle.electric.impl.runtime.frame_cancel(f);

hyperfiddle.electric.impl.runtime.update_event.cljs$core$IFn$_invoke$arity$variadic(context,new cljs.core.Keyword(null,"tree","tree",-196312028),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.Keyword(null,"frame","frame",-1711082588),(- id)], null)], 0));

hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$4(context,hyperfiddle.electric.impl.runtime.context_slot_frame_store,cljs.core.dissoc_BANG_,(f[hyperfiddle.electric.impl.runtime.frame_slot_id]));

return (t.cljs$core$IFn$_invoke$arity$0 ? t.cljs$core$IFn$_invoke$arity$0() : t.call(null));
});
return (_LT_x.cljs$core$IFn$_invoke$arity$2 ? _LT_x.cljs$core$IFn$_invoke$arity$2(G__44521,G__44522) : _LT_x.call(null,G__44521,G__44522));
})());
}
})))));
});
hyperfiddle.electric.impl.runtime.inject = (function hyperfiddle$electric$impl$runtime$inject(v){
return (function (_LT_x,_LT_y){
return (function (n,t){
var temp__5806__auto__ = cljs.core.deref(hyperfiddle.electric.impl.runtime.this$);
if((temp__5806__auto__ == null)){
return hyperfiddle.electric.impl.failer.run(hyperfiddle.electric.impl.runtime.error("Unable to inject - not an object."),n,t);
} else {
var tier = temp__5806__auto__;
var foreigns = (tier[hyperfiddle.electric.impl.runtime.tier_slot_foreigns]);
(tier[hyperfiddle.electric.impl.runtime.tier_slot_foreigns] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(foreigns,v,_LT_y));

try{return (_LT_x.cljs$core$IFn$_invoke$arity$2 ? _LT_x.cljs$core$IFn$_invoke$arity$2(n,t) : _LT_x.call(null,n,t));
}finally {(tier[hyperfiddle.electric.impl.runtime.tier_slot_foreigns] = foreigns);
}}
});
});
});
hyperfiddle.electric.impl.runtime.bind = (function hyperfiddle$electric$impl$runtime$bind(var_args){
var args__5775__auto__ = [];
var len__5769__auto___44885 = arguments.length;
var i__5770__auto___44886 = (0);
while(true){
if((i__5770__auto___44886 < len__5769__auto___44885)){
args__5775__auto__.push((arguments[i__5770__auto___44886]));

var G__44887 = (i__5770__auto___44886 + (1));
i__5770__auto___44886 = G__44887;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return hyperfiddle.electric.impl.runtime.bind.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(hyperfiddle.electric.impl.runtime.bind.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return (function (n,t){
var temp__5806__auto__ = cljs.core.deref(hyperfiddle.electric.impl.runtime.this$);
if((temp__5806__auto__ == null)){
return hyperfiddle.electric.impl.failer.run(hyperfiddle.electric.impl.runtime.error("Unable to bind - not an object."),n,t);
} else {
var tier = temp__5806__auto__;
try{var fexpr__44529 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,tier,args);
return (fexpr__44529.cljs$core$IFn$_invoke$arity$2 ? fexpr__44529.cljs$core$IFn$_invoke$arity$2(n,t) : fexpr__44529.call(null,n,t));
}catch (e44528){var e = e44528;
return hyperfiddle.electric.impl.failer.run(e,n,t);
}}
});
}));

(hyperfiddle.electric.impl.runtime.bind.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(hyperfiddle.electric.impl.runtime.bind.cljs$lang$applyTo = (function (seq44526){
var G__44527 = cljs.core.first(seq44526);
var seq44526__$1 = cljs.core.next(seq44526);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44527,seq44526__$1);
}));

hyperfiddle.electric.impl.runtime.with$ = (function hyperfiddle$electric$impl$runtime$with(tier,_LT_x){
return (function (n,t){
var prev = cljs.core.deref(hyperfiddle.electric.impl.runtime.this$);
cljs.core.vreset_BANG_(hyperfiddle.electric.impl.runtime.this$,tier);

try{return (_LT_x.cljs$core$IFn$_invoke$arity$2 ? _LT_x.cljs$core$IFn$_invoke$arity$2(n,t) : _LT_x.call(null,n,t));
}finally {cljs.core.vreset_BANG_(hyperfiddle.electric.impl.runtime.this$,prev);
}});
});
hyperfiddle.electric.impl.runtime.clause = (function hyperfiddle$electric$impl$runtime$clause(var_args){
var G__44531 = arguments.length;
switch (G__44531) {
case 1:
return hyperfiddle.electric.impl.runtime.clause.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hyperfiddle.electric.impl.runtime.clause.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hyperfiddle.electric.impl.runtime.clause.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (e){
var G__44532 = hyperfiddle.electric.impl.runtime.pure(e);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__44532) : f.call(null,G__44532));
});
}));

(hyperfiddle.electric.impl.runtime.clause.cljs$core$IFn$_invoke$arity$2 = (function (f,c){
return (function (e){
if((hyperfiddle.electric.debug.unwrap(e) instanceof c)){
var G__44533 = hyperfiddle.electric.impl.runtime.pure(e);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__44533) : f.call(null,G__44533));
} else {
return null;
}
});
}));

(hyperfiddle.electric.impl.runtime.clause.cljs$lang$maxFixedArity = 2);

hyperfiddle.electric.impl.runtime.recover = (function hyperfiddle$electric$impl$runtime$recover(tier,catch$,_LT_x){
return hyperfiddle.electric.impl.yield2.yield$((function (x){
if((x instanceof hyperfiddle.electric.Failure)){
var temp__5808__auto__ = (function (){var G__44534 = x.error;
return (catch$.cljs$core$IFn$_invoke$arity$1 ? catch$.cljs$core$IFn$_invoke$arity$1(G__44534) : catch$.call(null,G__44534));
})();
if((temp__5808__auto__ == null)){
return null;
} else {
var _LT_c = temp__5808__auto__;
return hyperfiddle.electric.impl.runtime.with$(tier,_LT_c);
}
} else {
return null;
}
}),_LT_x);
});
hyperfiddle.electric.impl.runtime.variable = (function hyperfiddle$electric$impl$runtime$variable(frame,vars,position,slot,_LT__LT_x){
var tier = ((frame[hyperfiddle.electric.impl.runtime.frame_slot_tiers])[(position | (0))]);
(tier[hyperfiddle.electric.impl.runtime.tier_slot_remote] = slot);

(tier[hyperfiddle.electric.impl.runtime.tier_slot_vars] = cljs.core.aclone(vars));

return ((frame[hyperfiddle.electric.impl.runtime.frame_slot_variables])[(slot | (0))] = missionary.core.signal_BANG_(missionary.core.cp_STAR_((function (){var cr44535_block_3 = (function hyperfiddle$electric$impl$runtime$variable_$_cr44535_block_3(cr44535_state){
try{var cr44535_place_3 = (cr44535_state[(3)]);
var cr44535_place_8 = hyperfiddle.electric.impl.runtime.with$;
var cr44535_place_9 = tier;
var cr44535_place_10 = cr44535_place_3;
var cr44535_place_11 = (function (){var G__44551 = cr44535_place_9;
var G__44552 = cr44535_place_10;
var fexpr__44550 = cr44535_place_8;
return (fexpr__44550.cljs$core$IFn$_invoke$arity$2 ? fexpr__44550.cljs$core$IFn$_invoke$arity$2(G__44551,G__44552) : fexpr__44550.call(null,G__44551,G__44552));
})();
(cr44535_state[(0)] = cr44535_block_4);

(cr44535_state[(3)] = null);

return missionary.core.switch$(cr44535_place_11);
}catch (e44549){var cr44535_exception = e44549;
(cr44535_state[(0)] = cr44535_block_7);

(cr44535_state[(3)] = null);

(cr44535_state[(4)] = null);

(cr44535_state[(2)] = cr44535_exception);

return cr44535_state;
}});
var cr44535_block_6 = (function hyperfiddle$electric$impl$runtime$variable_$_cr44535_block_6(cr44535_state){
try{var cr44535_place_7 = (cr44535_state[(4)]);
(cr44535_state[(0)] = cr44535_block_8);

(cr44535_state[(4)] = null);

(cr44535_state[(2)] = cr44535_place_7);

return cr44535_state;
}catch (e44553){var cr44535_exception = e44553;
(cr44535_state[(0)] = cr44535_block_7);

(cr44535_state[(4)] = null);

(cr44535_state[(2)] = cr44535_exception);

return cr44535_state;
}});
var cr44535_block_4 = (function hyperfiddle$electric$impl$runtime$variable_$_cr44535_block_4(cr44535_state){
try{var cr44535_place_12 = missionary.core.unpark();
(cr44535_state[(0)] = cr44535_block_6);

(cr44535_state[(4)] = cr44535_place_12);

return cr44535_state;
}catch (e44554){var cr44535_exception = e44554;
(cr44535_state[(0)] = cr44535_block_7);

(cr44535_state[(4)] = null);

(cr44535_state[(2)] = cr44535_exception);

return cr44535_state;
}});
var cr44535_block_1 = (function hyperfiddle$electric$impl$runtime$variable_$_cr44535_block_1(cr44535_state){
try{var cr44535_place_2 = _LT__LT_x;
(cr44535_state[(0)] = cr44535_block_2);

return missionary.core.switch$(cr44535_place_2);
}catch (e44555){var cr44535_exception = e44555;
(cr44535_state[(0)] = cr44535_block_7);

(cr44535_state[(2)] = cr44535_exception);

return cr44535_state;
}});
var cr44535_block_2 = (function hyperfiddle$electric$impl$runtime$variable_$_cr44535_block_2(cr44535_state){
try{var cr44535_place_3 = missionary.core.unpark();
var cr44535_place_4 = hyperfiddle.electric.impl.runtime.failure;
var cr44535_place_5 = cr44535_place_3;
var cr44535_place_6 = cr44535_place_4(cr44535_place_5);
var cr44535_place_7 = null;
if(cljs.core.truth_(cr44535_place_6)){
(cr44535_state[(0)] = cr44535_block_5);

(cr44535_state[(3)] = cr44535_place_3);

(cr44535_state[(4)] = cr44535_place_7);

return cr44535_state;
} else {
(cr44535_state[(0)] = cr44535_block_3);

(cr44535_state[(3)] = cr44535_place_3);

(cr44535_state[(4)] = cr44535_place_7);

return cr44535_state;
}
}catch (e44556){var cr44535_exception = e44556;
(cr44535_state[(0)] = cr44535_block_7);

(cr44535_state[(2)] = cr44535_exception);

return cr44535_state;
}});
var cr44535_block_5 = (function hyperfiddle$electric$impl$runtime$variable_$_cr44535_block_5(cr44535_state){
try{var cr44535_place_3 = (cr44535_state[(3)]);
var cr44535_place_13 = cr44535_place_3;
(cr44535_state[(0)] = cr44535_block_6);

(cr44535_state[(3)] = null);

(cr44535_state[(4)] = cr44535_place_13);

return cr44535_state;
}catch (e44557){var cr44535_exception = e44557;
(cr44535_state[(0)] = cr44535_block_7);

(cr44535_state[(3)] = null);

(cr44535_state[(4)] = null);

(cr44535_state[(2)] = cr44535_exception);

return cr44535_state;
}});
var cr44535_block_0 = (function hyperfiddle$electric$impl$runtime$variable_$_cr44535_block_0(cr44535_state){
try{var cr44535_place_0 = null;
var cr44535_place_1 = false;
(cr44535_state[(0)] = cr44535_block_1);

(cr44535_state[(2)] = cr44535_place_0);

(cr44535_state[(1)] = cr44535_place_1);

return cr44535_state;
}catch (e44558){var cr44535_exception = e44558;
(cr44535_state[(0)] = null);

throw cr44535_exception;
}});
var cr44535_block_7 = (function hyperfiddle$electric$impl$runtime$variable_$_cr44535_block_7(cr44535_state){
try{var cr44535_place_0 = (cr44535_state[(2)]);
var cr44535_place_14 = cr44535_place_0;
var cr44535_place_15 = cr44535_place_14;
var cr44535_place_16 = (new hyperfiddle.electric.Failure(cr44535_place_15));
(cr44535_state[(0)] = cr44535_block_8);

(cr44535_state[(2)] = cr44535_place_16);

return cr44535_state;
}catch (e44559){var cr44535_exception = e44559;
(cr44535_state[(0)] = cr44535_block_8);

(cr44535_state[(1)] = true);

(cr44535_state[(2)] = cr44535_exception);

return cr44535_state;
}});
var cr44535_block_8 = (function hyperfiddle$electric$impl$runtime$variable_$_cr44535_block_8(cr44535_state){
try{var cr44535_place_1 = (cr44535_state[(1)]);
var cr44535_place_0 = (cr44535_state[(2)]);
var cr44535_place_17 = (cljs.core.truth_(cr44535_place_1)?(function(){throw cr44535_place_0})():cr44535_place_0);
(cr44535_state[(0)] = null);

(cr44535_state[(1)] = null);

(cr44535_state[(2)] = null);

return cr44535_place_17;
}catch (e44560){var cr44535_exception = e44560;
(cr44535_state[(0)] = null);

(cr44535_state[(1)] = null);

(cr44535_state[(2)] = null);

throw cr44535_exception;
}});
return cloroutine.impl.coroutine((function (){var G__44561 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((5));
(G__44561[(0)] = cr44535_block_0);

return G__44561;
})());
})())));
});
hyperfiddle.electric.impl.runtime.source = (function hyperfiddle$electric$impl$runtime$source(frame,vars,position,slot){
((frame[hyperfiddle.electric.impl.runtime.frame_slot_sources])[(slot | (0))] = (function (){var G__44562 = ((frame[hyperfiddle.electric.impl.runtime.frame_slot_tiers])[(position | (0))]);
(G__44562[hyperfiddle.electric.impl.runtime.tier_slot_vars] = cljs.core.aclone(vars));

return G__44562;
})());

return null;
});
hyperfiddle.electric.impl.runtime.target = (function hyperfiddle$electric$impl$runtime$target(frame,slot,ctor){
((frame[hyperfiddle.electric.impl.runtime.frame_slot_targets])[(slot | (0))] = ctor);

return null;
});
hyperfiddle.electric.impl.runtime.hook = (function hyperfiddle$electric$impl$runtime$hook(k,v,_LT_x){
if((!((v == null)))){
} else {
throw (new Error(["Assert failed: ","hook value must be non-nil.","\n","(some? v)"].join('')));
}

return (function (n,t){
var temp__5806__auto__ = cljs.core.deref(hyperfiddle.electric.impl.runtime.this$);
if((temp__5806__auto__ == null)){
return hyperfiddle.electric.impl.failer.run(hyperfiddle.electric.impl.runtime.error("Unable to hook - not an object."),n,t);
} else {
var tier = temp__5806__auto__;
var tier_44919__$1 = tier;
while(true){
var f_44921 = (tier_44919__$1[hyperfiddle.electric.impl.runtime.tier_slot_parent]);
var temp__5806__auto___44922__$1 = hyperfiddle.electric.impl.runtime.frame_walk_tiers(f_44921,(1),k,cljs.core.identity,(tier_44919__$1[hyperfiddle.electric.impl.runtime.tier_slot_position]));
if((temp__5806__auto___44922__$1 == null)){
var temp__5808__auto___44923 = (f_44921[hyperfiddle.electric.impl.runtime.frame_slot_parent]);
if((temp__5808__auto___44923 == null)){
} else {
var tier_44924__$2 = temp__5808__auto___44923;
var temp__5806__auto___44925__$2 = hyperfiddle.electric.impl.runtime.tier_walk_frames(tier_44924__$2,(1),k,cljs.core.identity,(f_44921[hyperfiddle.electric.impl.runtime.frame_slot_position]));
if((temp__5806__auto___44925__$2 == null)){
if(cljs.core.contains_QMARK_((tier_44924__$2[hyperfiddle.electric.impl.runtime.tier_slot_hooks]),k)){
(k.cljs$core$IFn$_invoke$arity$2 ? k.cljs$core$IFn$_invoke$arity$2(v,null) : k.call(null,v,null));
} else {
var G__44927 = tier_44924__$2;
tier_44919__$1 = G__44927;
continue;
}
} else {
var a_44928 = temp__5806__auto___44925__$2;
(k.cljs$core$IFn$_invoke$arity$2 ? k.cljs$core$IFn$_invoke$arity$2(v,a_44928) : k.call(null,v,a_44928));
}
}
} else {
var a_44929 = temp__5806__auto___44922__$1;
(k.cljs$core$IFn$_invoke$arity$2 ? k.cljs$core$IFn$_invoke$arity$2(v,a_44929) : k.call(null,v,a_44929));
}
break;
}

hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$5(tier,hyperfiddle.electric.impl.runtime.tier_slot_hooks,cljs.core.assoc,k,v);

var G__44563 = n;
var G__44564 = (function (){
hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$4(tier,hyperfiddle.electric.impl.runtime.tier_slot_hooks,cljs.core.dissoc,k);

(k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(v) : k.call(null,v));

return (t.cljs$core$IFn$_invoke$arity$0 ? t.cljs$core$IFn$_invoke$arity$0() : t.call(null));
});
return (_LT_x.cljs$core$IFn$_invoke$arity$2 ? _LT_x.cljs$core$IFn$_invoke$arity$2(G__44563,G__44564) : _LT_x.call(null,G__44563,G__44564));
}
});
});
hyperfiddle.electric.impl.runtime.unbound = hyperfiddle.electric.impl.runtime.pure(new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","unbound","hyperfiddle.electric.impl.runtime/unbound",63043117));
hyperfiddle.electric.impl.runtime.subject_at = (function hyperfiddle$electric$impl$runtime$subject_at(arr,slot){
return (function (_BANG_){
(arr[slot] = _BANG_);

return (function (){
return (arr[slot] = null);
});
});
});
hyperfiddle.electric.impl.runtime.context_ack = (function hyperfiddle$electric$impl$runtime$context_ack(context){
var rpos = (context[hyperfiddle.electric.impl.runtime.context_slot_pending_rpos]);
var buffer = (context[hyperfiddle.electric.impl.runtime.context_slot_pending_buffer]);
var output = (buffer[rpos]);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rpos,(context[hyperfiddle.electric.impl.runtime.context_slot_pending_wpos]))){
throw hyperfiddle.electric.impl.runtime.error("Unexpected ack.");
} else {
}

(context[hyperfiddle.electric.impl.runtime.context_slot_pending_rpos] = ((rpos + (1)) & (buffer.length - (1))));

(buffer[rpos] = null);

var output__$1 = output;
while(true){
if((output__$1 == null)){
return null;
} else {
((output__$1[hyperfiddle.electric.impl.runtime.output_slot_prev])[hyperfiddle.electric.impl.runtime.output_slot_next] = null);

(output__$1[hyperfiddle.electric.impl.runtime.output_slot_prev] = null);

(output__$1[hyperfiddle.electric.impl.runtime.output_slot_time] = null);

var input_44942 = (output__$1[hyperfiddle.electric.impl.runtime.output_slot_input]);
if((hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$3(input_44942,hyperfiddle.electric.impl.runtime.input_slot_pending,cljs.core.dec) === (0))){
hyperfiddle.electric.impl.runtime.input_ready(input_44942);
} else {
}

var G__44943 = (output__$1[hyperfiddle.electric.impl.runtime.output_slot_next]);
output__$1 = G__44943;
continue;
}
break;
}
});
hyperfiddle.electric.impl.runtime.context_cancel = (function hyperfiddle$electric$impl$runtime$context_cancel(context){
return hyperfiddle.electric.impl.runtime.update_event(context,new cljs.core.Keyword(null,"cancel","cancel",-1964088360),cljs.core.identity);
});
hyperfiddle.electric.impl.runtime.context_transfer = (function hyperfiddle$electric$impl$runtime$context_transfer(context){
while(true){
var temp__5806__auto__ = (context[hyperfiddle.electric.impl.runtime.context_slot_check]);
if((temp__5806__auto__ == null)){
var event = (context[hyperfiddle.electric.impl.runtime.context_slot_event]);
if(cljs.core.contains_QMARK_(event,new cljs.core.Keyword(null,"cancel","cancel",-1964088360))){
var fexpr__44565_44949 = (context[hyperfiddle.electric.impl.runtime.context_slot_terminator]);
(fexpr__44565_44949.cljs$core$IFn$_invoke$arity$0 ? fexpr__44565_44949.cljs$core$IFn$_invoke$arity$0() : fexpr__44565_44949.call(null));

throw (new missionary.Cancelled());
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"change","change",-1163046502).cljs$core$IFn$_invoke$arity$1(event))){
} else {
var buffer_44950 = (context[hyperfiddle.electric.impl.runtime.context_slot_pending_buffer]);
var size_44951 = buffer_44950.length;
var rpos_44952 = (context[hyperfiddle.electric.impl.runtime.context_slot_pending_rpos]);
var wpos_44953 = (context[hyperfiddle.electric.impl.runtime.context_slot_pending_wpos]);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rpos_44952,(context[hyperfiddle.electric.impl.runtime.context_slot_pending_wpos] = ((wpos_44953 + (1)) & (size_44951 - (1)))))){
var larger_44954 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((size_44951 << (1)));
var split_44955 = (size_44951 - rpos_44952);
hyperfiddle.electric.impl.runtime.acopy(buffer_44950,rpos_44952,larger_44954,(0),split_44955);

hyperfiddle.electric.impl.runtime.acopy(buffer_44950,(0),larger_44954,split_44955,rpos_44952);

var n__5636__auto___44956 = size_44951;
var t_44958 = (0);
while(true){
if((t_44958 < n__5636__auto___44956)){
var temp__5808__auto___44959 = (larger_44954[t_44958]);
if((temp__5808__auto___44959 == null)){
} else {
var output_44960 = temp__5808__auto___44959;
var o_44961 = output_44960;
while(true){
(o_44961[hyperfiddle.electric.impl.runtime.output_slot_time] = t_44958);

var n_44962 = (o_44961[hyperfiddle.electric.impl.runtime.output_slot_next]);
if((n_44962 === output_44960)){
} else {
var G__44963 = n_44962;
o_44961 = G__44963;
continue;
}
break;
}
}

var G__44964 = (t_44958 + (1));
t_44958 = G__44964;
continue;
} else {
}
break;
}

(context[hyperfiddle.electric.impl.runtime.context_slot_pending_buffer] = larger_44954);

(context[hyperfiddle.electric.impl.runtime.context_slot_pending_wpos] = size_44951);

(context[hyperfiddle.electric.impl.runtime.context_slot_pending_rpos] = (0));
} else {
}
}

(context[hyperfiddle.electric.impl.runtime.context_slot_event] = null);

return event;
} else {
var input = temp__5806__auto__;
(context[hyperfiddle.electric.impl.runtime.context_slot_check] = (input[hyperfiddle.electric.impl.runtime.input_slot_check]));

(input[hyperfiddle.electric.impl.runtime.input_slot_check] = input);

hyperfiddle.electric.impl.runtime.input_check(input);

continue;
}
break;
}
});
hyperfiddle.electric.impl.runtime.eval_tree_inst = (function hyperfiddle$electric$impl$runtime$eval_tree_inst(context,inst){
var G__44566_44968 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(inst);
var G__44566_44969__$1 = (((G__44566_44968 instanceof cljs.core.Keyword))?G__44566_44968.fqn:null);
switch (G__44566_44969__$1) {
case "create":
var map__44567_44971 = inst;
var map__44567_44972__$1 = cljs.core.__destructure_map(map__44567_44971);
var vec__44568_44973 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44567_44972__$1,new cljs.core.Keyword(null,"target","target",253001721));
var target_frame_44974 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44568_44973,(0),null);
var target_slot_44975 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44568_44973,(1),null);
var vec__44571_44976 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44567_44972__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var source_frame_44977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44571_44976,(0),null);
var source_slot_44978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44571_44976,(1),null);
var G__44575_44980 = ((cljs.core.get.cljs$core$IFn$_invoke$arity$2((context[hyperfiddle.electric.impl.runtime.context_slot_frame_store]),source_frame_44977)[hyperfiddle.electric.impl.runtime.frame_slot_sources])[source_slot_44978]);
var G__44576_44981 = hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$3(context,hyperfiddle.electric.impl.runtime.context_slot_remote_id,cljs.core.dec);
var fexpr__44574_44982 = ((cljs.core.get.cljs$core$IFn$_invoke$arity$2((context[hyperfiddle.electric.impl.runtime.context_slot_frame_store]),target_frame_44974)[hyperfiddle.electric.impl.runtime.frame_slot_targets])[target_slot_44975]);
(fexpr__44574_44982.cljs$core$IFn$_invoke$arity$2 ? fexpr__44574_44982.cljs$core$IFn$_invoke$arity$2(G__44575_44980,G__44576_44981) : fexpr__44574_44982.call(null,G__44575_44980,G__44576_44981));

break;
case "rotate":
hyperfiddle.electric.impl.runtime.frame_rotate(cljs.core.get.cljs$core$IFn$_invoke$arity$2((context[hyperfiddle.electric.impl.runtime.context_slot_frame_store]),new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(inst)),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(inst));

break;
case "remove":
hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$4(context,hyperfiddle.electric.impl.runtime.context_slot_frame_store,cljs.core.dissoc_BANG_,new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(inst));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44566_44969__$1)].join('')));

}

return context;
});
hyperfiddle.electric.impl.runtime.eval_change_inst = (function hyperfiddle$electric$impl$runtime$eval_change_inst(context,p__44577,value){
var vec__44578 = p__44577;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44578,(0),null);
var slot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44578,(1),null);
hyperfiddle.electric.impl.runtime.input_change(((cljs.core.get.cljs$core$IFn$_invoke$arity$2((context[hyperfiddle.electric.impl.runtime.context_slot_frame_store]),id)[hyperfiddle.electric.impl.runtime.frame_slot_inputs])[slot]),value);

return context;
});
hyperfiddle.electric.impl.runtime.eval_freeze_inst = (function hyperfiddle$electric$impl$runtime$eval_freeze_inst(context,p__44581){
var vec__44582 = p__44581;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44582,(0),null);
var slot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44582,(1),null);
hyperfiddle.electric.impl.runtime.input_freeze(((cljs.core.get.cljs$core$IFn$_invoke$arity$2((context[hyperfiddle.electric.impl.runtime.context_slot_frame_store]),id)[hyperfiddle.electric.impl.runtime.frame_slot_inputs])[slot]));

return context;
});
hyperfiddle.electric.impl.runtime.parse_event = (function hyperfiddle$electric$impl$runtime$parse_event(context,p__44585){
var map__44586 = p__44585;
var map__44586__$1 = cljs.core.__destructure_map(map__44586);
var acks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44586__$1,new cljs.core.Keyword(null,"acks","acks",707064729));
var tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44586__$1,new cljs.core.Keyword(null,"tree","tree",-196312028));
var change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44586__$1,new cljs.core.Keyword(null,"change","change",-1163046502));
var freeze = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44586__$1,new cljs.core.Keyword(null,"freeze","freeze",2043466309));
var n__5636__auto___44986 = acks;
var __44987 = (0);
while(true){
if((__44987 < n__5636__auto___44986)){
hyperfiddle.electric.impl.runtime.context_ack(context);

var G__44988 = (__44987 + (1));
__44987 = G__44988;
continue;
} else {
}
break;
}

cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.eval_tree_inst,context,tree);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,change)){
} else {
hyperfiddle.electric.impl.runtime.update_event(context,new cljs.core.Keyword(null,"acks","acks",707064729),cljs.core.inc);

cljs.core.reduce_kv(hyperfiddle.electric.impl.runtime.eval_change_inst,context,change);
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.eval_freeze_inst,context,freeze);
});
hyperfiddle.electric.impl.runtime.process_incoming_events = (function hyperfiddle$electric$impl$runtime$process_incoming_events(context,_GT_incoming){
return missionary.core.sample(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.reduce,hyperfiddle.electric.impl.runtime.parse_event,context),_GT_incoming);
});
hyperfiddle.electric.impl.runtime.write_outgoing_events = (function hyperfiddle$electric$impl$runtime$write_outgoing_events(write,_GT_events){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr44587_block_0 = (function hyperfiddle$electric$impl$runtime$write_outgoing_events_$_cr44587_block_0(cr44587_state){
try{var cr44587_place_0 = (1);
var cr44587_place_1 = _GT_events;
(cr44587_state[(0)] = cr44587_block_1);

return missionary.core.fork(cr44587_place_0,cr44587_place_1);
}catch (e44599){var cr44587_exception = e44599;
(cr44587_state[(0)] = null);

throw cr44587_exception;
}});
var cr44587_block_1 = (function hyperfiddle$electric$impl$runtime$write_outgoing_events_$_cr44587_block_1(cr44587_state){
try{var cr44587_place_2 = missionary.core.unpark();
var cr44587_place_3 = cljs.core._EQ_;
var cr44587_place_4 = cr44587_place_2;
var cr44587_place_5 = hyperfiddle.electric.impl.runtime.empty_event;
var cr44587_place_6 = (function (){var G__44602 = cr44587_place_4;
var G__44603 = cr44587_place_5;
var fexpr__44601 = cr44587_place_3;
return (fexpr__44601.cljs$core$IFn$_invoke$arity$2 ? fexpr__44601.cljs$core$IFn$_invoke$arity$2(G__44602,G__44603) : fexpr__44601.call(null,G__44602,G__44603));
})();
var cr44587_place_7 = null;
if(cljs.core.truth_(cr44587_place_6)){
(cr44587_state[(0)] = cr44587_block_4);

(cr44587_state[(1)] = cr44587_place_7);

return cr44587_state;
} else {
(cr44587_state[(0)] = cr44587_block_2);

(cr44587_state[(2)] = cr44587_place_2);

(cr44587_state[(1)] = cr44587_place_7);

return cr44587_state;
}
}catch (e44600){var cr44587_exception = e44600;
(cr44587_state[(0)] = null);

throw cr44587_exception;
}});
var cr44587_block_2 = (function hyperfiddle$electric$impl$runtime$write_outgoing_events_$_cr44587_block_2(cr44587_state){
try{var cr44587_place_2 = (cr44587_state[(2)]);
var cr44587_place_8 = write;
var cr44587_place_9 = cr44587_place_2;
var cr44587_place_10 = (function (){var G__44606 = cr44587_place_9;
var fexpr__44605 = cr44587_place_8;
return (fexpr__44605.cljs$core$IFn$_invoke$arity$1 ? fexpr__44605.cljs$core$IFn$_invoke$arity$1(G__44606) : fexpr__44605.call(null,G__44606));
})();
(cr44587_state[(0)] = cr44587_block_3);

(cr44587_state[(2)] = null);

return missionary.core.park(cr44587_place_10);
}catch (e44604){var cr44587_exception = e44604;
(cr44587_state[(0)] = null);

(cr44587_state[(1)] = null);

(cr44587_state[(2)] = null);

throw cr44587_exception;
}});
var cr44587_block_3 = (function hyperfiddle$electric$impl$runtime$write_outgoing_events_$_cr44587_block_3(cr44587_state){
try{var cr44587_place_11 = missionary.core.unpark();
(cr44587_state[(0)] = cr44587_block_5);

(cr44587_state[(1)] = cr44587_place_11);

return cr44587_state;
}catch (e44607){var cr44587_exception = e44607;
(cr44587_state[(0)] = null);

(cr44587_state[(1)] = null);

throw cr44587_exception;
}});
var cr44587_block_4 = (function hyperfiddle$electric$impl$runtime$write_outgoing_events_$_cr44587_block_4(cr44587_state){
try{var cr44587_place_12 = null;
(cr44587_state[(0)] = cr44587_block_5);

(cr44587_state[(1)] = cr44587_place_12);

return cr44587_state;
}catch (e44608){var cr44587_exception = e44608;
(cr44587_state[(0)] = null);

(cr44587_state[(1)] = null);

throw cr44587_exception;
}});
var cr44587_block_5 = (function hyperfiddle$electric$impl$runtime$write_outgoing_events_$_cr44587_block_5(cr44587_state){
try{var cr44587_place_7 = (cr44587_state[(1)]);
(cr44587_state[(0)] = null);

(cr44587_state[(1)] = null);

return cr44587_place_7;
}catch (e44609){var cr44587_exception = e44609;
(cr44587_state[(0)] = null);

(cr44587_state[(1)] = null);

throw cr44587_exception;
}});
return cloroutine.impl.coroutine((function (){var G__44610 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((3));
(G__44610[(0)] = cr44587_block_0);

return G__44610;
})());
})(),missionary.core.ap_run);
});
hyperfiddle.electric.impl.runtime.peer = (function hyperfiddle$electric$impl$runtime$peer(var_count,dynamic,variable_count,source_count,constant_count,target_count,output_count,input_count,ctor){
return (function() {
var hyperfiddle$electric$impl$runtime$peer_$_rec = null;
var hyperfiddle$electric$impl$runtime$peer_$_rec__2 = (function (write,_QMARK_read){
return hyperfiddle$electric$impl$runtime$peer_$_rec.cljs$core$IFn$_invoke$arity$3(write,_QMARK_read,hyperfiddle.electric.impl.runtime.pst);
});
var hyperfiddle$electric$impl$runtime$peer_$_rec__3 = (function (write,_QMARK_read,on_error){
return missionary.core.reactor_call((function (){
var context = hyperfiddle.electric.impl.runtime.make_context();
missionary.core.stream_BANG_(hyperfiddle.electric.impl.runtime.write_outgoing_events(write,missionary.core.stream_BANG_((function (n,t){
(context[hyperfiddle.electric.impl.runtime.context_slot_notifier] = n);

(context[hyperfiddle.electric.impl.runtime.context_slot_terminator] = t);

var temp__5808__auto___44998 = hyperfiddle.electric.impl.runtime.make_frame(context,null,(0),(0),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY,dynamic,variable_count,source_count,constant_count,target_count,output_count,input_count,context,cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(var_count,hyperfiddle.electric.impl.runtime.unbound)),ctor);
if((temp__5808__auto___44998 == null)){
} else {
var _LT_main_45000 = temp__5808__auto___44998;
missionary.core.stream_BANG_(missionary.core.latest.cljs$core$IFn$_invoke$arity$variadic((function (x){
if((x instanceof hyperfiddle.electric.Failure)){
var G__44611 = x.error;
return (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(G__44611) : on_error.call(null,G__44611));
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_LT_main_45000], 0)));
}

return hyperfiddle.electric.impl.runtime.__GT_It(context,hyperfiddle.electric.impl.runtime.context_cancel,hyperfiddle.electric.impl.runtime.context_transfer);
}))));

return missionary.core.stream_BANG_(hyperfiddle.electric.impl.runtime.process_incoming_events(context,missionary.core.stream_BANG_(missionary.core.relieve(cljs.core.into,missionary.core.sample(cljs.core.vector,missionary.core.observe(_QMARK_read))))));
}));
});
hyperfiddle$electric$impl$runtime$peer_$_rec = function(write,_QMARK_read,on_error){
switch(arguments.length){
case 2:
return hyperfiddle$electric$impl$runtime$peer_$_rec__2.call(this,write,_QMARK_read);
case 3:
return hyperfiddle$electric$impl$runtime$peer_$_rec__3.call(this,write,_QMARK_read,on_error);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hyperfiddle$electric$impl$runtime$peer_$_rec.cljs$core$IFn$_invoke$arity$2 = hyperfiddle$electric$impl$runtime$peer_$_rec__2;
hyperfiddle$electric$impl$runtime$peer_$_rec.cljs$core$IFn$_invoke$arity$3 = hyperfiddle$electric$impl$runtime$peer_$_rec__3;
return hyperfiddle$electric$impl$runtime$peer_$_rec;
})()
});
hyperfiddle.electric.impl.runtime.collapse = (function hyperfiddle$electric$impl$runtime$collapse(var_args){
var args__5775__auto__ = [];
var len__5769__auto___45002 = arguments.length;
var i__5770__auto___45004 = (0);
while(true){
if((i__5770__auto___45004 < len__5769__auto___45002)){
args__5775__auto__.push((arguments[i__5770__auto___45004]));

var G__45005 = (i__5770__auto___45004 + (1));
i__5770__auto___45004 = G__45005;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return hyperfiddle.electric.impl.runtime.collapse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(hyperfiddle.electric.impl.runtime.collapse.cljs$core$IFn$_invoke$arity$variadic = (function (s,n,f,args){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.iterate(cljs.core.pop,s),n),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.peek),cljs.core.take.cljs$core$IFn$_invoke$arity$1(n)),cljs.core.conj,args,cljs.core.iterate(cljs.core.pop,s))));
}));

(hyperfiddle.electric.impl.runtime.collapse.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(hyperfiddle.electric.impl.runtime.collapse.cljs$lang$applyTo = (function (seq44612){
var G__44613 = cljs.core.first(seq44612);
var seq44612__$1 = cljs.core.next(seq44612);
var G__44614 = cljs.core.first(seq44612__$1);
var seq44612__$2 = cljs.core.next(seq44612__$1);
var G__44615 = cljs.core.first(seq44612__$2);
var seq44612__$3 = cljs.core.next(seq44612__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44613,G__44614,G__44615,seq44612__$3);
}));

hyperfiddle.electric.impl.runtime.snapshot = (function hyperfiddle$electric$impl$runtime$snapshot(var_args){
var args__5775__auto__ = [];
var len__5769__auto___45011 = arguments.length;
var i__5770__auto___45012 = (0);
while(true){
if((i__5770__auto___45012 < len__5769__auto___45011)){
args__5775__auto__.push((arguments[i__5770__auto___45012]));

var G__45013 = (i__5770__auto___45012 + (1));
i__5770__auto___45012 = G__45013;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return hyperfiddle.electric.impl.runtime.snapshot.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(hyperfiddle.electric.impl.runtime.snapshot.cljs$core$IFn$_invoke$arity$variadic = (function (env,f,args){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,env,args));
}));

(hyperfiddle.electric.impl.runtime.snapshot.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(hyperfiddle.electric.impl.runtime.snapshot.cljs$lang$applyTo = (function (seq44616){
var G__44617 = cljs.core.first(seq44616);
var seq44616__$1 = cljs.core.next(seq44616);
var G__44618 = cljs.core.first(seq44616__$1);
var seq44616__$2 = cljs.core.next(seq44616__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44617,G__44618,seq44616__$2);
}));

hyperfiddle.electric.impl.runtime.reverse_index = (function hyperfiddle$electric$impl$runtime$reverse_index(m){
return cljs.core.reduce_kv((function (v,x,i){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,i,x);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(m),null)),m);
});
hyperfiddle.electric.impl.runtime.empty_frame = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"variable","variable",-281346492),(0),new cljs.core.Keyword(null,"source","source",-433931539),(0),new cljs.core.Keyword(null,"constant","constant",-379609303),(0),new cljs.core.Keyword(null,"target","target",253001721),(0),new cljs.core.Keyword(null,"output","output",-1105869043),(0),new cljs.core.Keyword(null,"input","input",556931961),(0),new cljs.core.Keyword(null,"static","static",1214358571),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dynamic","dynamic",704819571),cljs.core.PersistentArrayMap.EMPTY], null);
hyperfiddle.electric.impl.runtime.compile = (function hyperfiddle$electric$impl$runtime$compile(inst,p__44619){
var map__44620 = p__44619;
var map__44620__$1 = cljs.core.__destructure_map(map__44620);
var fns = map__44620__$1;
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44620__$1,new cljs.core.Keyword(null,"input","input",556931961));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44620__$1,new cljs.core.Keyword(null,"target","target",253001721));
var main = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44620__$1,new cljs.core.Keyword(null,"main","main",-2117802661));
var pub = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44620__$1,new cljs.core.Keyword(null,"pub","pub",-1189143908));
var bind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44620__$1,new cljs.core.Keyword(null,"bind","bind",-113428417));
var lift = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44620__$1,new cljs.core.Keyword(null,"lift","lift",903632035));
var variable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44620__$1,new cljs.core.Keyword(null,"variable","variable",-281346492));
var do$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44620__$1,new cljs.core.Keyword(null,"do","do",46310725));
var sub = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44620__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var global__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44620__$1,new cljs.core.Keyword(null,"global","global",93595047));
var constant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44620__$1,new cljs.core.Keyword(null,"constant","constant",-379609303));
var static$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44620__$1,new cljs.core.Keyword(null,"static","static",1214358571));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44620__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44620__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
var nop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44620__$1,new cljs.core.Keyword(null,"nop","nop",-1754075182));
var inject = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44620__$1,new cljs.core.Keyword(null,"inject","inject",-1882635533));
var dynamic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44620__$1,new cljs.core.Keyword(null,"dynamic","dynamic",704819571));
var literal = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44620__$1,new cljs.core.Keyword(null,"literal","literal",1664775605));
var invoke = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44620__$1,new cljs.core.Keyword(null,"invoke","invoke",1145927159));
var vget = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44620__$1,new cljs.core.Keyword(null,"vget","vget",1720343287));
return cljs.core.peek(hyperfiddle.electric.impl.runtime.collapse(new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot((function hyperfiddle$electric$impl$runtime$compile_$_walk(env,off,idx,dyn,inst__$1){
var G__44621 = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425).cljs$core$IFn$_invoke$arity$1(inst__$1);
var G__44621__$1 = (((G__44621 instanceof cljs.core.Keyword))?G__44621.fqn:null);
switch (G__44621__$1) {
case "hyperfiddle.electric.impl.ir/nop":
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj,nop);

break;
case "hyperfiddle.electric.impl.ir/sub":
var p = (idx - new cljs.core.Keyword("hyperfiddle.electric.impl.ir","index","hyperfiddle.electric.impl.ir/index",1690646129).cljs$core$IFn$_invoke$arity$1(inst__$1));
if((p < off)){
var f = new cljs.core.Keyword(null,"static","static",1214358571).cljs$core$IFn$_invoke$arity$1(env);
var i = (function (){var G__44622 = p;
var G__44623 = cljs.core.count(f);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__44622,G__44623) : f.call(null,G__44622,G__44623));
})();
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"static","static",1214358571),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,p,i)),new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj,(static$.cljs$core$IFn$_invoke$arity$1 ? static$.cljs$core$IFn$_invoke$arity$1(i) : static$.call(null,i)));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj,(sub.cljs$core$IFn$_invoke$arity$1 ? sub.cljs$core$IFn$_invoke$arity$1(p) : sub.call(null,p)));
}

break;
case "hyperfiddle.electric.impl.ir/pub":
return cljs.core.update.cljs$core$IFn$_invoke$arity$6(hyperfiddle$electric$impl$runtime$compile_$_walk(hyperfiddle$electric$impl$runtime$compile_$_walk(env,off,idx,dyn,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","init","hyperfiddle.electric.impl.ir/init",-819637966).cljs$core$IFn$_invoke$arity$1(inst__$1)),off,(idx + (1)),dyn,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","inst","hyperfiddle.electric.impl.ir/inst",-420394775).cljs$core$IFn$_invoke$arity$1(inst__$1)),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,(2),pub,idx);

break;
case "hyperfiddle.electric.impl.ir/do":
var deps = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","deps","hyperfiddle.electric.impl.ir/deps",-1313673773).cljs$core$IFn$_invoke$arity$1(inst__$1);
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(hyperfiddle$electric$impl$runtime$compile_$_walk(cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (env__$1,arg){
return hyperfiddle$electric$impl$runtime$compile_$_walk(env__$1,off,idx,dyn,arg);
}),env,deps),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,cljs.core.count(deps),cljs.core.vector),off,idx,dyn,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","inst","hyperfiddle.electric.impl.ir/inst",-420394775).cljs$core$IFn$_invoke$arity$1(inst__$1)),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,(2),do$);

break;
case "hyperfiddle.electric.impl.ir/def":
var v = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","slot","hyperfiddle.electric.impl.ir/slot",1432523351).cljs$core$IFn$_invoke$arity$1(inst__$1);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword(null,"vars","vars",-2046957217),cljs.core.max,v),new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj,(inject.cljs$core$IFn$_invoke$arity$1 ? inject.cljs$core$IFn$_invoke$arity$1(v) : inject.call(null,v)));

break;
case "hyperfiddle.electric.impl.ir/lift":
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(hyperfiddle$electric$impl$runtime$compile_$_walk(env,off,idx,dyn,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","init","hyperfiddle.electric.impl.ir/init",-819637966).cljs$core$IFn$_invoke$arity$1(inst__$1)),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,(1),lift);

break;
case "hyperfiddle.electric.impl.ir/eval":
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj,(function (){var G__44625 = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","form","hyperfiddle.electric.impl.ir/form",-534651915).cljs$core$IFn$_invoke$arity$1(inst__$1);
var G__44626 = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","ns","hyperfiddle.electric.impl.ir/ns",1363348916).cljs$core$IFn$_invoke$arity$1(inst__$1);
var fexpr__44624 = new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(fns);
return (fexpr__44624.cljs$core$IFn$_invoke$arity$2 ? fexpr__44624.cljs$core$IFn$_invoke$arity$2(G__44625,G__44626) : fexpr__44624.call(null,G__44625,G__44626));
})());

break;
case "hyperfiddle.electric.impl.ir/node":
var v = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","slot","hyperfiddle.electric.impl.ir/slot",1432523351).cljs$core$IFn$_invoke$arity$1(inst__$1);
var env__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword(null,"vars","vars",-2046957217),cljs.core.max,v);
if(cljs.core.truth_((dyn.cljs$core$IFn$_invoke$arity$1 ? dyn.cljs$core$IFn$_invoke$arity$1(v) : dyn.call(null,v)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(env__$1,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj,(vget.cljs$core$IFn$_invoke$arity$1 ? vget.cljs$core$IFn$_invoke$arity$1(v) : vget.call(null,v)));
} else {
var d = new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(env__$1);
var i = (function (){var G__44627 = v;
var G__44628 = cljs.core.count(d);
return (d.cljs$core$IFn$_invoke$arity$2 ? d.cljs$core$IFn$_invoke$arity$2(G__44627,G__44628) : d.call(null,G__44627,G__44628));
})();
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,new cljs.core.Keyword(null,"dynamic","dynamic",704819571),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,v,i)),new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj,(dynamic.cljs$core$IFn$_invoke$arity$2 ? dynamic.cljs$core$IFn$_invoke$arity$2(i,inst__$1) : dynamic.call(null,i,inst__$1)));
}

break;
case "hyperfiddle.electric.impl.ir/bind":
var v = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","slot","hyperfiddle.electric.impl.ir/slot",1432523351).cljs$core$IFn$_invoke$arity$1(inst__$1);
return cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(hyperfiddle$electric$impl$runtime$compile_$_walk(cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword(null,"vars","vars",-2046957217),cljs.core.max,v),off,idx,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(dyn,v),new cljs.core.Keyword("hyperfiddle.electric.impl.ir","inst","hyperfiddle.electric.impl.ir/inst",-420394775).cljs$core$IFn$_invoke$arity$1(inst__$1)),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,(1),bind,v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(idx - new cljs.core.Keyword("hyperfiddle.electric.impl.ir","index","hyperfiddle.electric.impl.ir/index",1690646129).cljs$core$IFn$_invoke$arity$1(inst__$1))], 0));

break;
case "hyperfiddle.electric.impl.ir/apply":
var f = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","fn","hyperfiddle.electric.impl.ir/fn",1996468864).cljs$core$IFn$_invoke$arity$1(inst__$1);
var args = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","args","hyperfiddle.electric.impl.ir/args",291275628).cljs$core$IFn$_invoke$arity$1(inst__$1);
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (env__$1,inst__$2){
return hyperfiddle$electric$impl$runtime$compile_$_walk(env__$1,off,idx,dyn,inst__$2);
}),env,cljs.core.cons(f,args)),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,(cljs.core.count(args) + (1)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(invoke,(function (){var f__$1 = f;
while(true){
var G__44629 = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425).cljs$core$IFn$_invoke$arity$1(f__$1);
var G__44629__$1 = (((G__44629 instanceof cljs.core.Keyword))?G__44629.fqn:null);
switch (G__44629__$1) {
case "hyperfiddle.electric.impl.ir/global":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(f__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","type","hyperfiddle.electric.debug/type",-166806812),new cljs.core.Keyword(null,"apply","apply",1320385493),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("hyperfiddle.electric.debug","name","hyperfiddle.electric.debug/name",-35961215),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("hyperfiddle.electric.impl.ir","name","hyperfiddle.electric.impl.ir/name",655661733).cljs$core$IFn$_invoke$arity$1(f__$1))], 0));

break;
case "hyperfiddle.electric.impl.ir/node":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","type","hyperfiddle.electric.debug/type",-166806812),new cljs.core.Keyword(null,"apply","apply",1320385493));

break;
case "hyperfiddle.electric.impl.ir/literal":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("hyperfiddle.electric.debug","type","hyperfiddle.electric.debug/type",-166806812),new cljs.core.Keyword(null,"apply","apply",1320385493),new cljs.core.Keyword("hyperfiddle.electric.debug","name","hyperfiddle.electric.debug/name",-35961215),new cljs.core.Keyword("hyperfiddle.electric.impl.ir","value","hyperfiddle.electric.impl.ir/value",-750005275).cljs$core$IFn$_invoke$arity$1(f__$1)], null);

break;
case "hyperfiddle.electric.impl.ir/eval":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","type","hyperfiddle.electric.debug/type",-166806812),new cljs.core.Keyword(null,"eval","eval",-1103567905));

break;
case "hyperfiddle.electric.impl.ir/sub":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","type","hyperfiddle.electric.debug/type",-166806812),new cljs.core.Keyword(null,"apply","apply",1320385493));

break;
case "hyperfiddle.electric.impl.ir/input":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","type","hyperfiddle.electric.debug/type",-166806812),new cljs.core.Keyword(null,"apply","apply",1320385493));

break;
case "hyperfiddle.electric.impl.ir/apply":
var G__45027 = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","fn","hyperfiddle.electric.impl.ir/fn",1996468864).cljs$core$IFn$_invoke$arity$1(f__$1);
f__$1 = G__45027;
continue;

break;
default:
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("hyperfiddle.electric.debug","type","hyperfiddle.electric.debug/type",-166806812),new cljs.core.Keyword(null,"unknown-apply","unknown-apply",-1407042085),new cljs.core.Keyword(null,"op","op",-1882987955),f__$1], null);

}
break;
}
})()));

break;
case "hyperfiddle.electric.impl.ir/input":
var deps = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","deps","hyperfiddle.electric.impl.ir/deps",-1313673773).cljs$core$IFn$_invoke$arity$1(inst__$1);
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.snapshot(cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (env__$1,arg){
return hyperfiddle$electric$impl$runtime$compile_$_walk(env__$1,off,idx,dyn,arg);
}),env,deps),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,cljs.core.count(deps),cljs.core.vector),new cljs.core.Keyword(null,"input","input",556931961)),new cljs.core.Keyword(null,"input","input",556931961),cljs.core.inc),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,(2),input);

break;
case "hyperfiddle.electric.impl.ir/output":
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle$electric$impl$runtime$compile_$_walk(env,off,idx,dyn,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","init","hyperfiddle.electric.impl.ir/init",-819637966).cljs$core$IFn$_invoke$arity$1(inst__$1)),new cljs.core.Keyword(null,"output","output",-1105869043)),new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.inc),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,(2),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(output,inst__$1));

break;
case "hyperfiddle.electric.impl.ir/global":
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj,(function (){var G__44630 = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","name","hyperfiddle.electric.impl.ir/name",655661733).cljs$core$IFn$_invoke$arity$1(inst__$1);
return (global__$1.cljs$core$IFn$_invoke$arity$1 ? global__$1.cljs$core$IFn$_invoke$arity$1(G__44630) : global__$1.call(null,G__44630));
})());

break;
case "hyperfiddle.electric.impl.ir/literal":
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj,(function (){var G__44631 = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","value","hyperfiddle.electric.impl.ir/value",-750005275).cljs$core$IFn$_invoke$arity$1(inst__$1);
return (literal.cljs$core$IFn$_invoke$arity$1 ? literal.cljs$core$IFn$_invoke$arity$1(G__44631) : literal.call(null,G__44631));
})());

break;
case "hyperfiddle.electric.impl.ir/variable":
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle$electric$impl$runtime$compile_$_walk(env,off,idx,dyn,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","init","hyperfiddle.electric.impl.ir/init",-819637966).cljs$core$IFn$_invoke$arity$1(inst__$1)),new cljs.core.Keyword(null,"source","source",-433931539)),new cljs.core.Keyword(null,"variable","variable",-281346492)),new cljs.core.Keyword(null,"variable","variable",-281346492),cljs.core.inc),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,(3),variable);

break;
case "hyperfiddle.electric.impl.ir/source":
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(env,new cljs.core.Keyword(null,"variable","variable",-281346492)),new cljs.core.Keyword(null,"source","source",-433931539)),new cljs.core.Keyword(null,"source","source",-433931539),cljs.core.inc),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,(2),source);

break;
case "hyperfiddle.electric.impl.ir/constant":
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.snapshot(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle$electric$impl$runtime$compile_$_walk(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env,hyperfiddle.electric.impl.runtime.empty_frame], 0)),idx,idx,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","init","hyperfiddle.electric.impl.ir/init",-819637966).cljs$core$IFn$_invoke$arity$1(inst__$1)),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.runtime.reverse_index,new cljs.core.Keyword(null,"static","static",1214358571))),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.runtime.reverse_index,new cljs.core.Keyword(null,"dynamic","dynamic",704819571))),new cljs.core.Keyword(null,"variable","variable",-281346492)),new cljs.core.Keyword(null,"source","source",-433931539)),new cljs.core.Keyword(null,"constant","constant",-379609303)),new cljs.core.Keyword(null,"target","target",253001721)),new cljs.core.Keyword(null,"output","output",-1105869043)),new cljs.core.Keyword(null,"input","input",556931961)),cljs.core.select_keys(env,cljs.core.keys(hyperfiddle.electric.impl.runtime.empty_frame))], 0)),new cljs.core.Keyword(null,"constant","constant",-379609303)),new cljs.core.Keyword(null,"constant","constant",-379609303),cljs.core.inc),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,(10),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(constant,inst__$1));

break;
case "hyperfiddle.electric.impl.ir/target":
var deps = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","deps","hyperfiddle.electric.impl.ir/deps",-1313673773).cljs$core$IFn$_invoke$arity$1(inst__$1);
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.snapshot(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (env__$1,inst__$2){
return hyperfiddle$electric$impl$runtime$compile_$_walk(env__$1,idx,idx,cljs.core.PersistentHashSet.EMPTY,inst__$2);
}),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env,hyperfiddle.electric.impl.runtime.empty_frame], 0)),deps),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,cljs.core.count(deps),cljs.core.vector),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.runtime.reverse_index,new cljs.core.Keyword(null,"static","static",1214358571))),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.runtime.reverse_index,new cljs.core.Keyword(null,"dynamic","dynamic",704819571))),new cljs.core.Keyword(null,"variable","variable",-281346492)),new cljs.core.Keyword(null,"source","source",-433931539)),new cljs.core.Keyword(null,"constant","constant",-379609303)),new cljs.core.Keyword(null,"target","target",253001721)),new cljs.core.Keyword(null,"output","output",-1105869043)),new cljs.core.Keyword(null,"input","input",556931961)),cljs.core.select_keys(env,cljs.core.keys(hyperfiddle.electric.impl.runtime.empty_frame))], 0)),new cljs.core.Keyword(null,"target","target",253001721)),new cljs.core.Keyword(null,"target","target",253001721),cljs.core.inc),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,(10),target);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44621__$1)].join('')));

}
})(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.empty_frame,new cljs.core.Keyword(null,"vars","vars",-2046957217),(-1)),(0),(0),cljs.core.PersistentHashSet.EMPTY,inst),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,new cljs.core.Keyword(null,"vars","vars",-2046957217))),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.runtime.reverse_index,new cljs.core.Keyword(null,"dynamic","dynamic",704819571))),new cljs.core.Keyword(null,"variable","variable",-281346492)),new cljs.core.Keyword(null,"source","source",-433931539)),new cljs.core.Keyword(null,"constant","constant",-379609303)),new cljs.core.Keyword(null,"target","target",253001721)),new cljs.core.Keyword(null,"output","output",-1105869043)),new cljs.core.Keyword(null,"input","input",556931961))),(9),main));
});
hyperfiddle.electric.impl.runtime.sym = (function hyperfiddle$electric$impl$runtime$sym(var_args){
var args__5775__auto__ = [];
var len__5769__auto___45030 = arguments.length;
var i__5770__auto___45031 = (0);
while(true){
if((i__5770__auto___45031 < len__5769__auto___45030)){
args__5775__auto__.push((arguments[i__5770__auto___45031]));

var G__45032 = (i__5770__auto___45031 + (1));
i__5770__auto___45031 = G__45032;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",args));
}));

(hyperfiddle.electric.impl.runtime.sym.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hyperfiddle.electric.impl.runtime.sym.cljs$lang$applyTo = (function (seq44632){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44632));
}));

hyperfiddle.electric.impl.runtime.emit = (function hyperfiddle$electric$impl$runtime$emit(prefix,inst){
return hyperfiddle.electric.impl.runtime.compile(inst,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"lift","lift",903632035),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"do","do",46310725),new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.Keyword(null,"sub","sub",-2093760025),new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"static","static",1214358571),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"nop","nop",-1754075182),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"inject","inject",-1882635533),new cljs.core.Keyword(null,"literal","literal",1664775605),new cljs.core.Keyword(null,"invoke","invoke",1145927159),new cljs.core.Keyword(null,"vget","vget",1720343287),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"pub","pub",-1189143908),new cljs.core.Keyword(null,"bind","bind",-113428417),new cljs.core.Keyword(null,"eval","eval",-1103567905)],[(function (f){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null),null,(1),null)),(new cljs.core.List(null,f,null,(1),null)))));
}),(function (form,remote,slot){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","variable","hyperfiddle.electric.impl.runtime/variable",510769532,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"frame","frame",-70551061,null)], 0)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"vars","vars",-406425690,null)], 0)),null,(1),null)),(new cljs.core.List(null,(remote + slot),null,(1),null)),(new cljs.core.List(null,slot,null,(1),null)),(new cljs.core.List(null,form,null,(1),null))], 0))));
}),(function (deps,form){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","make-input","hyperfiddle.electric.impl.runtime/make-input",566179856,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"frame","frame",-70551061,null)], 0)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,deps,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,form,null,(1),null))], 0))));
}),(function (x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null),null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(x),null,(1),null)))));
}),(function (idx){
return hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"pub","pub",451387619,null),idx], 0));
}),(function (debug_info,form,static$,dynamic,variable_count,source_count,constant_count,target_count,output_count,input_count,slot){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","constant","hyperfiddle.electric.impl.runtime/constant",73011709,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"frame","frame",-70551061,null)], 0)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,slot,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","constructor","hyperfiddle.electric.impl.runtime/constructor",-1501318103,null),null,(1),null)),(new cljs.core.List(null,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p){
return hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"pub","pub",451387619,null),p], 0));
}),static$),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,dynamic,null,(1),null)),(new cljs.core.List(null,variable_count,null,(1),null)),(new cljs.core.List(null,source_count,null,(1),null)),(new cljs.core.List(null,constant_count,null,(1),null)),(new cljs.core.List(null,target_count,null,(1),null)),(new cljs.core.List(null,output_count,null,(1),null)),(new cljs.core.List(null,input_count,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"frame","frame",-70551061,null)], 0)),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"vars","vars",-406425690,null)], 0)),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","check-failure","hyperfiddle.electric.impl.runtime/check-failure",-1123078405,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.select_debug_info(debug_info),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,form,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}),(function (i){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","static","hyperfiddle.electric.impl.runtime/static",-547873025,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"frame","frame",-70551061,null)], 0)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,i,null,(1),null))], 0))));
}),(function (remote,slot){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","source","hyperfiddle.electric.impl.runtime/source",-2004538047,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"frame","frame",-70551061,null)], 0)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"vars","vars",-406425690,null)], 0)),null,(1),null)),(new cljs.core.List(null,(remote + slot),null,(1),null)),(new cljs.core.List(null,slot,null,(1),null))], 0))));
}),(function (debug_info,form,slot){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","make-output","hyperfiddle.electric.impl.runtime/make-output",1149148798,null),null,(1),null)),(new cljs.core.List(null,slot,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","check-failure","hyperfiddle.electric.impl.runtime/check-failure",-1123078405,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.select_debug_info(debug_info),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,form,null,(1),null))], 0)))),null,(1),null))], 0))));
}),null,(function (i,debug_info){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","dynamic","hyperfiddle.electric.impl.runtime/dynamic",1076292141,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"frame","frame",-70551061,null)], 0)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,i,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.select_debug_info(debug_info),null,(1),null))))),null,(1),null))], 0))));
}),(function (v){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","inject","hyperfiddle.electric.impl.runtime/inject",-834159193,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null))))),null,(1),null)))));
}),(function (x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))))),null,(1),null)))));
}),(function() { 
var G__45045__delegate = function (debug_info,forms){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","latest-apply","hyperfiddle.electric.impl.runtime/latest-apply",694267757,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.select_debug_info(debug_info),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([forms], 0))));
};
var G__45045 = function (debug_info,var_args){
var forms = null;
if (arguments.length > 1) {
var G__45047__i = 0, G__45047__a = new Array(arguments.length -  1);
while (G__45047__i < G__45047__a.length) {G__45047__a[G__45047__i] = arguments[G__45047__i + 1]; ++G__45047__i;}
  forms = new cljs.core.IndexedSeq(G__45047__a,0,null);
} 
return G__45045__delegate.call(this,debug_info,forms);};
G__45045.cljs$lang$maxFixedArity = 1;
G__45045.cljs$lang$applyTo = (function (arglist__45048){
var debug_info = cljs.core.first(arglist__45048);
var forms = cljs.core.rest(arglist__45048);
return G__45045__delegate(debug_info,forms);
});
G__45045.cljs$core$IFn$_invoke$arity$variadic = G__45045__delegate;
return G__45045;
})()
,(function (v){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","aget","cljs.core/aget",6345791,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"vars","vars",-406425690,null)], 0)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","int","cljs.core/int",20935062,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null))))),null,(1),null))], 0))));
}),(function (deps,slot){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","input-spawn","hyperfiddle.electric.impl.runtime/input-spawn",1447350587,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"frame","frame",-70551061,null)], 0)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,slot,null,(1),null)),(new cljs.core.List(null,deps,null,(1),null))], 0))));
}),(function (deps,static$,dynamic,variable_count,source_count,constant_count,target_count,output_count,input_count,slot){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","target","hyperfiddle.electric.impl.runtime/target",1172525771,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"frame","frame",-70551061,null)], 0)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,slot,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","constructor","hyperfiddle.electric.impl.runtime/constructor",-1501318103,null),null,(1),null)),(new cljs.core.List(null,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p){
return hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"pub","pub",451387619,null),p], 0));
}),static$),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,dynamic,null,(1),null)),(new cljs.core.List(null,variable_count,null,(1),null)),(new cljs.core.List(null,source_count,null,(1),null)),(new cljs.core.List(null,constant_count,null,(1),null)),(new cljs.core.List(null,target_count,null,(1),null)),(new cljs.core.List(null,output_count,null,(1),null)),(new cljs.core.List(null,input_count,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"frame","frame",-70551061,null)], 0)),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"vars","vars",-406425690,null)], 0)),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","make-input","hyperfiddle.electric.impl.runtime/make-input",566179856,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"frame","frame",-70551061,null)], 0)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,deps,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}),(function (form,var_count,dynamic,variable_count,source_count,constant_count,target_count,output_count,input_count){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null),null,(1),null)),(new cljs.core.List(null,var_count,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,dynamic,null,(1),null)),(new cljs.core.List(null,variable_count,null,(1),null)),(new cljs.core.List(null,source_count,null,(1),null)),(new cljs.core.List(null,constant_count,null,(1),null)),(new cljs.core.List(null,target_count,null,(1),null)),(new cljs.core.List(null,output_count,null,(1),null)),(new cljs.core.List(null,input_count,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"frame","frame",-70551061,null)], 0)),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"vars","vars",-406425690,null)], 0)),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,form,null,(1),null))], 0)))),null,(1),null))], 0))));
}),(function (form,cont,idx){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"pub","pub",451387619,null),idx], 0)),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","signal","hyperfiddle.electric.impl.runtime/signal",340452693,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cont,null,(1),null))], 0))));
}),(function (form,slot,idx){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"prev","prev",43462301,null)], 0)),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","aget","cljs.core/aget",6345791,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"vars","vars",-406425690,null)], 0)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,slot,null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","aset","cljs.core/aset",-898215545,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"vars","vars",-406425690,null)], 0)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","int","cljs.core/int",20935062,null),null,(1),null)),(new cljs.core.List(null,slot,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"pub","pub",451387619,null),idx], 0)),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"res","res",245523648,null)], 0)),null,(1),null)),(new cljs.core.List(null,form,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","aset","cljs.core/aset",-898215545,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"vars","vars",-406425690,null)], 0)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","int","cljs.core/int",20935062,null),null,(1),null)),(new cljs.core.List(null,slot,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"prev","prev",43462301,null)], 0)),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"res","res",245523648,null)], 0)),null,(1),null))], 0)))),null,(1),null))], 0))));
}),(function (form,_ns){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null)))));
})]));
});
hyperfiddle.electric.impl.runtime.juxt_with = (function hyperfiddle$electric$impl$runtime$juxt_with(var_args){
var G__44644 = arguments.length;
switch (G__44644) {
case 1:
return hyperfiddle.electric.impl.runtime.juxt_with.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hyperfiddle.electric.impl.runtime.juxt_with.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hyperfiddle.electric.impl.runtime.juxt_with.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return hyperfiddle.electric.impl.runtime.juxt_with.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___45071 = arguments.length;
var i__5770__auto___45072 = (0);
while(true){
if((i__5770__auto___45072 < len__5769__auto___45071)){
args_arr__5794__auto__.push((arguments[i__5770__auto___45072]));

var G__45073 = (i__5770__auto___45072 + (1));
i__5770__auto___45072 = G__45073;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((4)),(0),null));
return hyperfiddle.electric.impl.runtime.juxt_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5795__auto__);

}
});

(hyperfiddle.electric.impl.runtime.juxt_with.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function() {
var G__45075 = null;
var G__45075__0 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__45075__1 = (function (a){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__45075__2 = (function (a,b){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__45075__3 = (function (a,b,c){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__45075__4 = (function() { 
var G__45076__delegate = function (a,b,c,ds){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
};
var G__45076 = function (a,b,c,var_args){
var ds = null;
if (arguments.length > 3) {
var G__45078__i = 0, G__45078__a = new Array(arguments.length -  3);
while (G__45078__i < G__45078__a.length) {G__45078__a[G__45078__i] = arguments[G__45078__i + 3]; ++G__45078__i;}
  ds = new cljs.core.IndexedSeq(G__45078__a,0,null);
} 
return G__45076__delegate.call(this,a,b,c,ds);};
G__45076.cljs$lang$maxFixedArity = 3;
G__45076.cljs$lang$applyTo = (function (arglist__45079){
var a = cljs.core.first(arglist__45079);
arglist__45079 = cljs.core.next(arglist__45079);
var b = cljs.core.first(arglist__45079);
arglist__45079 = cljs.core.next(arglist__45079);
var c = cljs.core.first(arglist__45079);
var ds = cljs.core.rest(arglist__45079);
return G__45076__delegate(a,b,c,ds);
});
G__45076.cljs$core$IFn$_invoke$arity$variadic = G__45076__delegate;
return G__45076;
})()
;
G__45075 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 0:
return G__45075__0.call(this);
case 1:
return G__45075__1.call(this,a);
case 2:
return G__45075__2.call(this,a,b);
case 3:
return G__45075__3.call(this,a,b,c);
default:
var G__45080 = null;
if (arguments.length > 3) {
var G__45081__i = 0, G__45081__a = new Array(arguments.length -  3);
while (G__45081__i < G__45081__a.length) {G__45081__a[G__45081__i] = arguments[G__45081__i + 3]; ++G__45081__i;}
G__45080 = new cljs.core.IndexedSeq(G__45081__a,0,null);
}
return G__45075__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, G__45080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45075.cljs$lang$maxFixedArity = 3;
G__45075.cljs$lang$applyTo = G__45075__4.cljs$lang$applyTo;
G__45075.cljs$core$IFn$_invoke$arity$0 = G__45075__0;
G__45075.cljs$core$IFn$_invoke$arity$1 = G__45075__1;
G__45075.cljs$core$IFn$_invoke$arity$2 = G__45075__2;
G__45075.cljs$core$IFn$_invoke$arity$3 = G__45075__3;
G__45075.cljs$core$IFn$_invoke$arity$variadic = G__45075__4.cljs$core$IFn$_invoke$arity$variadic;
return G__45075;
})()
}));

(hyperfiddle.electric.impl.runtime.juxt_with.cljs$core$IFn$_invoke$arity$2 = (function (f,g){
return (function() {
var G__45083 = null;
var G__45083__0 = (function (){
var G__44645 = (g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__44645) : f.call(null,G__44645));
});
var G__45083__1 = (function (a){
var G__44646 = (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(a) : g.call(null,a));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__44646) : f.call(null,G__44646));
});
var G__45083__2 = (function (a,b){
var G__44647 = (g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(a,b) : g.call(null,a,b));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__44647) : f.call(null,G__44647));
});
var G__45083__3 = (function (a,b,c){
var G__44648 = (g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(a,b,c) : g.call(null,a,b,c));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__44648) : f.call(null,G__44648));
});
var G__45083__4 = (function() { 
var G__45085__delegate = function (a,b,c,ds){
var G__44649 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,a,b,c,ds);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__44649) : f.call(null,G__44649));
};
var G__45085 = function (a,b,c,var_args){
var ds = null;
if (arguments.length > 3) {
var G__45086__i = 0, G__45086__a = new Array(arguments.length -  3);
while (G__45086__i < G__45086__a.length) {G__45086__a[G__45086__i] = arguments[G__45086__i + 3]; ++G__45086__i;}
  ds = new cljs.core.IndexedSeq(G__45086__a,0,null);
} 
return G__45085__delegate.call(this,a,b,c,ds);};
G__45085.cljs$lang$maxFixedArity = 3;
G__45085.cljs$lang$applyTo = (function (arglist__45087){
var a = cljs.core.first(arglist__45087);
arglist__45087 = cljs.core.next(arglist__45087);
var b = cljs.core.first(arglist__45087);
arglist__45087 = cljs.core.next(arglist__45087);
var c = cljs.core.first(arglist__45087);
var ds = cljs.core.rest(arglist__45087);
return G__45085__delegate(a,b,c,ds);
});
G__45085.cljs$core$IFn$_invoke$arity$variadic = G__45085__delegate;
return G__45085;
})()
;
G__45083 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 0:
return G__45083__0.call(this);
case 1:
return G__45083__1.call(this,a);
case 2:
return G__45083__2.call(this,a,b);
case 3:
return G__45083__3.call(this,a,b,c);
default:
var G__45089 = null;
if (arguments.length > 3) {
var G__45090__i = 0, G__45090__a = new Array(arguments.length -  3);
while (G__45090__i < G__45090__a.length) {G__45090__a[G__45090__i] = arguments[G__45090__i + 3]; ++G__45090__i;}
G__45089 = new cljs.core.IndexedSeq(G__45090__a,0,null);
}
return G__45083__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, G__45089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45083.cljs$lang$maxFixedArity = 3;
G__45083.cljs$lang$applyTo = G__45083__4.cljs$lang$applyTo;
G__45083.cljs$core$IFn$_invoke$arity$0 = G__45083__0;
G__45083.cljs$core$IFn$_invoke$arity$1 = G__45083__1;
G__45083.cljs$core$IFn$_invoke$arity$2 = G__45083__2;
G__45083.cljs$core$IFn$_invoke$arity$3 = G__45083__3;
G__45083.cljs$core$IFn$_invoke$arity$variadic = G__45083__4.cljs$core$IFn$_invoke$arity$variadic;
return G__45083;
})()
}));

(hyperfiddle.electric.impl.runtime.juxt_with.cljs$core$IFn$_invoke$arity$3 = (function (f,g,h){
return (function() {
var G__45091 = null;
var G__45091__0 = (function (){
var G__44650 = (g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null));
var G__44651 = (h.cljs$core$IFn$_invoke$arity$0 ? h.cljs$core$IFn$_invoke$arity$0() : h.call(null));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__44650,G__44651) : f.call(null,G__44650,G__44651));
});
var G__45091__1 = (function (a){
var G__44652 = (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(a) : g.call(null,a));
var G__44653 = (h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(a) : h.call(null,a));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__44652,G__44653) : f.call(null,G__44652,G__44653));
});
var G__45091__2 = (function (a,b){
var G__44654 = (g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(a,b) : g.call(null,a,b));
var G__44655 = (h.cljs$core$IFn$_invoke$arity$2 ? h.cljs$core$IFn$_invoke$arity$2(a,b) : h.call(null,a,b));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__44654,G__44655) : f.call(null,G__44654,G__44655));
});
var G__45091__3 = (function (a,b,c){
var G__44656 = (g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(a,b,c) : g.call(null,a,b,c));
var G__44657 = (h.cljs$core$IFn$_invoke$arity$3 ? h.cljs$core$IFn$_invoke$arity$3(a,b,c) : h.call(null,a,b,c));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__44656,G__44657) : f.call(null,G__44656,G__44657));
});
var G__45091__4 = (function() { 
var G__45097__delegate = function (a,b,c,ds){
var G__44658 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,a,b,c,ds);
var G__44659 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(h,a,b,c,ds);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__44658,G__44659) : f.call(null,G__44658,G__44659));
};
var G__45097 = function (a,b,c,var_args){
var ds = null;
if (arguments.length > 3) {
var G__45098__i = 0, G__45098__a = new Array(arguments.length -  3);
while (G__45098__i < G__45098__a.length) {G__45098__a[G__45098__i] = arguments[G__45098__i + 3]; ++G__45098__i;}
  ds = new cljs.core.IndexedSeq(G__45098__a,0,null);
} 
return G__45097__delegate.call(this,a,b,c,ds);};
G__45097.cljs$lang$maxFixedArity = 3;
G__45097.cljs$lang$applyTo = (function (arglist__45099){
var a = cljs.core.first(arglist__45099);
arglist__45099 = cljs.core.next(arglist__45099);
var b = cljs.core.first(arglist__45099);
arglist__45099 = cljs.core.next(arglist__45099);
var c = cljs.core.first(arglist__45099);
var ds = cljs.core.rest(arglist__45099);
return G__45097__delegate(a,b,c,ds);
});
G__45097.cljs$core$IFn$_invoke$arity$variadic = G__45097__delegate;
return G__45097;
})()
;
G__45091 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 0:
return G__45091__0.call(this);
case 1:
return G__45091__1.call(this,a);
case 2:
return G__45091__2.call(this,a,b);
case 3:
return G__45091__3.call(this,a,b,c);
default:
var G__45100 = null;
if (arguments.length > 3) {
var G__45101__i = 0, G__45101__a = new Array(arguments.length -  3);
while (G__45101__i < G__45101__a.length) {G__45101__a[G__45101__i] = arguments[G__45101__i + 3]; ++G__45101__i;}
G__45100 = new cljs.core.IndexedSeq(G__45101__a,0,null);
}
return G__45091__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, G__45100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45091.cljs$lang$maxFixedArity = 3;
G__45091.cljs$lang$applyTo = G__45091__4.cljs$lang$applyTo;
G__45091.cljs$core$IFn$_invoke$arity$0 = G__45091__0;
G__45091.cljs$core$IFn$_invoke$arity$1 = G__45091__1;
G__45091.cljs$core$IFn$_invoke$arity$2 = G__45091__2;
G__45091.cljs$core$IFn$_invoke$arity$3 = G__45091__3;
G__45091.cljs$core$IFn$_invoke$arity$variadic = G__45091__4.cljs$core$IFn$_invoke$arity$variadic;
return G__45091;
})()
}));

(hyperfiddle.electric.impl.runtime.juxt_with.cljs$core$IFn$_invoke$arity$4 = (function (f,g,h,i){
return (function() {
var G__45103 = null;
var G__45103__0 = (function (){
var G__44660 = (g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null));
var G__44661 = (h.cljs$core$IFn$_invoke$arity$0 ? h.cljs$core$IFn$_invoke$arity$0() : h.call(null));
var G__44662 = (i.cljs$core$IFn$_invoke$arity$0 ? i.cljs$core$IFn$_invoke$arity$0() : i.call(null));
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__44660,G__44661,G__44662) : f.call(null,G__44660,G__44661,G__44662));
});
var G__45103__1 = (function (a){
var G__44663 = (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(a) : g.call(null,a));
var G__44664 = (h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(a) : h.call(null,a));
var G__44665 = (i.cljs$core$IFn$_invoke$arity$1 ? i.cljs$core$IFn$_invoke$arity$1(a) : i.call(null,a));
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__44663,G__44664,G__44665) : f.call(null,G__44663,G__44664,G__44665));
});
var G__45103__2 = (function (a,b){
var G__44666 = (g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(a,b) : g.call(null,a,b));
var G__44667 = (h.cljs$core$IFn$_invoke$arity$2 ? h.cljs$core$IFn$_invoke$arity$2(a,b) : h.call(null,a,b));
var G__44668 = (i.cljs$core$IFn$_invoke$arity$2 ? i.cljs$core$IFn$_invoke$arity$2(a,b) : i.call(null,a,b));
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__44666,G__44667,G__44668) : f.call(null,G__44666,G__44667,G__44668));
});
var G__45103__3 = (function (a,b,c){
var G__44669 = (g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(a,b,c) : g.call(null,a,b,c));
var G__44670 = (h.cljs$core$IFn$_invoke$arity$3 ? h.cljs$core$IFn$_invoke$arity$3(a,b,c) : h.call(null,a,b,c));
var G__44671 = (i.cljs$core$IFn$_invoke$arity$3 ? i.cljs$core$IFn$_invoke$arity$3(a,b,c) : i.call(null,a,b,c));
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__44669,G__44670,G__44671) : f.call(null,G__44669,G__44670,G__44671));
});
var G__45103__4 = (function() { 
var G__45106__delegate = function (a,b,c,ds){
var G__44672 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,a,b,c,ds);
var G__44673 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(h,a,b,c,ds);
var G__44674 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(i,a,b,c,ds);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__44672,G__44673,G__44674) : f.call(null,G__44672,G__44673,G__44674));
};
var G__45106 = function (a,b,c,var_args){
var ds = null;
if (arguments.length > 3) {
var G__45107__i = 0, G__45107__a = new Array(arguments.length -  3);
while (G__45107__i < G__45107__a.length) {G__45107__a[G__45107__i] = arguments[G__45107__i + 3]; ++G__45107__i;}
  ds = new cljs.core.IndexedSeq(G__45107__a,0,null);
} 
return G__45106__delegate.call(this,a,b,c,ds);};
G__45106.cljs$lang$maxFixedArity = 3;
G__45106.cljs$lang$applyTo = (function (arglist__45108){
var a = cljs.core.first(arglist__45108);
arglist__45108 = cljs.core.next(arglist__45108);
var b = cljs.core.first(arglist__45108);
arglist__45108 = cljs.core.next(arglist__45108);
var c = cljs.core.first(arglist__45108);
var ds = cljs.core.rest(arglist__45108);
return G__45106__delegate(a,b,c,ds);
});
G__45106.cljs$core$IFn$_invoke$arity$variadic = G__45106__delegate;
return G__45106;
})()
;
G__45103 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 0:
return G__45103__0.call(this);
case 1:
return G__45103__1.call(this,a);
case 2:
return G__45103__2.call(this,a,b);
case 3:
return G__45103__3.call(this,a,b,c);
default:
var G__45109 = null;
if (arguments.length > 3) {
var G__45110__i = 0, G__45110__a = new Array(arguments.length -  3);
while (G__45110__i < G__45110__a.length) {G__45110__a[G__45110__i] = arguments[G__45110__i + 3]; ++G__45110__i;}
G__45109 = new cljs.core.IndexedSeq(G__45110__a,0,null);
}
return G__45103__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, G__45109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45103.cljs$lang$maxFixedArity = 3;
G__45103.cljs$lang$applyTo = G__45103__4.cljs$lang$applyTo;
G__45103.cljs$core$IFn$_invoke$arity$0 = G__45103__0;
G__45103.cljs$core$IFn$_invoke$arity$1 = G__45103__1;
G__45103.cljs$core$IFn$_invoke$arity$2 = G__45103__2;
G__45103.cljs$core$IFn$_invoke$arity$3 = G__45103__3;
G__45103.cljs$core$IFn$_invoke$arity$variadic = G__45103__4.cljs$core$IFn$_invoke$arity$variadic;
return G__45103;
})()
}));

(hyperfiddle.electric.impl.runtime.juxt_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,g,h,i,js){
return (function() {
var G__45112 = null;
var G__45112__0 = (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null)),(h.cljs$core$IFn$_invoke$arity$0 ? h.cljs$core$IFn$_invoke$arity$0() : h.call(null)),(i.cljs$core$IFn$_invoke$arity$0 ? i.cljs$core$IFn$_invoke$arity$0() : i.call(null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44633_SHARP_){
return (p1__44633_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__44633_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__44633_SHARP_.call(null));
}),js));
});
var G__45112__1 = (function (a){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(a) : g.call(null,a)),(h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(a) : h.call(null,a)),(i.cljs$core$IFn$_invoke$arity$1 ? i.cljs$core$IFn$_invoke$arity$1(a) : i.call(null,a)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44634_SHARP_){
return (p1__44634_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__44634_SHARP_.cljs$core$IFn$_invoke$arity$1(a) : p1__44634_SHARP_.call(null,a));
}),js));
});
var G__45112__2 = (function (a,b){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(a,b) : g.call(null,a,b)),(h.cljs$core$IFn$_invoke$arity$2 ? h.cljs$core$IFn$_invoke$arity$2(a,b) : h.call(null,a,b)),(i.cljs$core$IFn$_invoke$arity$2 ? i.cljs$core$IFn$_invoke$arity$2(a,b) : i.call(null,a,b)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44635_SHARP_){
return (p1__44635_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p1__44635_SHARP_.cljs$core$IFn$_invoke$arity$2(a,b) : p1__44635_SHARP_.call(null,a,b));
}),js));
});
var G__45112__3 = (function (a,b,c){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(a,b,c) : g.call(null,a,b,c)),(h.cljs$core$IFn$_invoke$arity$3 ? h.cljs$core$IFn$_invoke$arity$3(a,b,c) : h.call(null,a,b,c)),(i.cljs$core$IFn$_invoke$arity$3 ? i.cljs$core$IFn$_invoke$arity$3(a,b,c) : i.call(null,a,b,c)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44636_SHARP_){
return (p1__44636_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p1__44636_SHARP_.cljs$core$IFn$_invoke$arity$3(a,b,c) : p1__44636_SHARP_.call(null,a,b,c));
}),js));
});
var G__45112__4 = (function() { 
var G__45115__delegate = function (a,b,c,ds){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,a,b,c,ds),cljs.core.apply.cljs$core$IFn$_invoke$arity$5(h,a,b,c,ds),cljs.core.apply.cljs$core$IFn$_invoke$arity$5(i,a,b,c,ds),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44637_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(p1__44637_SHARP_,a,b,c,ds);
}),js));
};
var G__45115 = function (a,b,c,var_args){
var ds = null;
if (arguments.length > 3) {
var G__45117__i = 0, G__45117__a = new Array(arguments.length -  3);
while (G__45117__i < G__45117__a.length) {G__45117__a[G__45117__i] = arguments[G__45117__i + 3]; ++G__45117__i;}
  ds = new cljs.core.IndexedSeq(G__45117__a,0,null);
} 
return G__45115__delegate.call(this,a,b,c,ds);};
G__45115.cljs$lang$maxFixedArity = 3;
G__45115.cljs$lang$applyTo = (function (arglist__45118){
var a = cljs.core.first(arglist__45118);
arglist__45118 = cljs.core.next(arglist__45118);
var b = cljs.core.first(arglist__45118);
arglist__45118 = cljs.core.next(arglist__45118);
var c = cljs.core.first(arglist__45118);
var ds = cljs.core.rest(arglist__45118);
return G__45115__delegate(a,b,c,ds);
});
G__45115.cljs$core$IFn$_invoke$arity$variadic = G__45115__delegate;
return G__45115;
})()
;
G__45112 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 0:
return G__45112__0.call(this);
case 1:
return G__45112__1.call(this,a);
case 2:
return G__45112__2.call(this,a,b);
case 3:
return G__45112__3.call(this,a,b,c);
default:
var G__45120 = null;
if (arguments.length > 3) {
var G__45121__i = 0, G__45121__a = new Array(arguments.length -  3);
while (G__45121__i < G__45121__a.length) {G__45121__a[G__45121__i] = arguments[G__45121__i + 3]; ++G__45121__i;}
G__45120 = new cljs.core.IndexedSeq(G__45121__a,0,null);
}
return G__45112__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, G__45120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45112.cljs$lang$maxFixedArity = 3;
G__45112.cljs$lang$applyTo = G__45112__4.cljs$lang$applyTo;
G__45112.cljs$core$IFn$_invoke$arity$0 = G__45112__0;
G__45112.cljs$core$IFn$_invoke$arity$1 = G__45112__1;
G__45112.cljs$core$IFn$_invoke$arity$2 = G__45112__2;
G__45112.cljs$core$IFn$_invoke$arity$3 = G__45112__3;
G__45112.cljs$core$IFn$_invoke$arity$variadic = G__45112__4.cljs$core$IFn$_invoke$arity$variadic;
return G__45112;
})()
}));

/** @this {Function} */
(hyperfiddle.electric.impl.runtime.juxt_with.cljs$lang$applyTo = (function (seq44639){
var G__44640 = cljs.core.first(seq44639);
var seq44639__$1 = cljs.core.next(seq44639);
var G__44641 = cljs.core.first(seq44639__$1);
var seq44639__$2 = cljs.core.next(seq44639__$1);
var G__44642 = cljs.core.first(seq44639__$2);
var seq44639__$3 = cljs.core.next(seq44639__$2);
var G__44643 = cljs.core.first(seq44639__$3);
var seq44639__$4 = cljs.core.next(seq44639__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44640,G__44641,G__44642,G__44643,seq44639__$4);
}));

(hyperfiddle.electric.impl.runtime.juxt_with.cljs$lang$maxFixedArity = (4));

hyperfiddle.electric.impl.runtime.globals = (function hyperfiddle$electric$impl$runtime$globals(program){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace,cljs.core.name),cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.vector_QMARK_),cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p__44675){
var vec__44676 = p__44675;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44676,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44676,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"global","global",93595047),a);
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.second),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.distinct.cljs$core$IFn$_invoke$arity$0()], 0)),cljs.core.tree_seq(cljs.core.coll_QMARK_,cljs.core.seq,program)], 0)));
});
hyperfiddle.electric.impl.runtime.missing_exports = (function hyperfiddle$electric$impl$runtime$missing_exports(resolvef,program){
return cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(resolvef,new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","not-found","hyperfiddle.electric.impl.runtime/not-found",-1898753095)),cljs.core.identity)),cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__44679_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","not-found","hyperfiddle.electric.impl.runtime/not-found",-1898753095),cljs.core.first(p1__44679_SHARP_));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.second),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol),hyperfiddle.electric.impl.runtime.globals(program)], 0));
});
hyperfiddle.electric.impl.runtime.dynamic_resolve = (function hyperfiddle$electric$impl$runtime$dynamic_resolve(nf,x){
return nf;
});
hyperfiddle.electric.impl.runtime.eval = (function hyperfiddle$electric$impl$runtime$eval(var_args){
var G__44681 = arguments.length;
switch (G__44681) {
case 1:
return hyperfiddle.electric.impl.runtime.eval.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hyperfiddle.electric.impl.runtime.eval.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hyperfiddle.electric.impl.runtime.eval.cljs$core$IFn$_invoke$arity$1 = (function (inst){
return hyperfiddle.electric.impl.runtime.eval.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.runtime.dynamic_resolve,inst);
}));

(hyperfiddle.electric.impl.runtime.eval.cljs$core$IFn$_invoke$arity$2 = (function (resolvef,inst){
return hyperfiddle.electric.impl.runtime.compile(inst,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"lift","lift",903632035),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"do","do",46310725),new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.Keyword(null,"sub","sub",-2093760025),new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"static","static",1214358571),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"nop","nop",-1754075182),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"inject","inject",-1882635533),new cljs.core.Keyword(null,"literal","literal",1664775605),new cljs.core.Keyword(null,"invoke","invoke",1145927159),new cljs.core.Keyword(null,"vget","vget",1720343287),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"pub","pub",-1189143908),new cljs.core.Keyword(null,"bind","bind",-113428417),new cljs.core.Keyword(null,"eval","eval",-1103567905)],[(function (form){
return (function (pubs,frame,vars){
return hyperfiddle.electric.impl.runtime.pure((form.cljs$core$IFn$_invoke$arity$3 ? form.cljs$core$IFn$_invoke$arity$3(pubs,frame,vars) : form.call(null,pubs,frame,vars)));
});
}),(function (form,remote,slot){
return (function (pubs,frame,vars){
return hyperfiddle.electric.impl.runtime.variable(frame,vars,(remote + slot),slot,(form.cljs$core$IFn$_invoke$arity$3 ? form.cljs$core$IFn$_invoke$arity$3(pubs,frame,vars) : form.call(null,pubs,frame,vars)));
});
}),(function (deps,inst__$1){
return (function (pubs,frame,vars){
hyperfiddle.electric.impl.runtime.make_input(frame,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (inst__$2){
return (inst__$2.cljs$core$IFn$_invoke$arity$3 ? inst__$2.cljs$core$IFn$_invoke$arity$3(pubs,frame,vars) : inst__$2.call(null,pubs,frame,vars));
}),deps));

return (inst__$1.cljs$core$IFn$_invoke$arity$3 ? inst__$1.cljs$core$IFn$_invoke$arity$3(pubs,frame,vars) : inst__$1.call(null,pubs,frame,vars));
});
}),(function (x){
var r = (resolvef.cljs$core$IFn$_invoke$arity$2 ? resolvef.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","not-found","hyperfiddle.electric.impl.runtime/not-found",-1898753095),x) : resolvef.call(null,new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","not-found","hyperfiddle.electric.impl.runtime/not-found",-1898753095),x));
var G__44682 = r;
var G__44682__$1 = (((G__44682 instanceof cljs.core.Keyword))?G__44682.fqn:null);
switch (G__44682__$1) {
case "hyperfiddle.electric.impl.runtime/not-found":
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Unable to resolve symbol: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(x))].join(''),cljs.core.PersistentArrayMap.EMPTY);

break;
default:
return cljs.core.constantly(hyperfiddle.electric.impl.runtime.pure(r));

}
}),(function (idx){
return (function (pubs,frame,vars){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(pubs,idx);
});
}),(function (debug_info,form,static$,dynamic,variable_count,source_count,constant_count,target_count,output_count,input_count,slot){
return (function (pubs,frame,vars){
return hyperfiddle.electric.impl.runtime.constant(frame,slot,hyperfiddle.electric.impl.runtime.constructor$(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(pubs,static$),dynamic,variable_count,source_count,constant_count,target_count,output_count,input_count,(function() { 
var G__45135__delegate = function (args){
return hyperfiddle.electric.impl.runtime.check_failure(debug_info,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(form,pubs,args));
};
var G__45135 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45136__i = 0, G__45136__a = new Array(arguments.length -  0);
while (G__45136__i < G__45136__a.length) {G__45136__a[G__45136__i] = arguments[G__45136__i + 0]; ++G__45136__i;}
  args = new cljs.core.IndexedSeq(G__45136__a,0,null);
} 
return G__45135__delegate.call(this,args);};
G__45135.cljs$lang$maxFixedArity = 0;
G__45135.cljs$lang$applyTo = (function (arglist__45137){
var args = cljs.core.seq(arglist__45137);
return G__45135__delegate(args);
});
G__45135.cljs$core$IFn$_invoke$arity$variadic = G__45135__delegate;
return G__45135;
})()
));
});
}),(function (slot){
return (function (pubs,frame,vars){
return hyperfiddle.electric.impl.runtime.static$(frame,slot);
});
}),(function (remote,slot){
return (function (pubs,frame,vars){
return hyperfiddle.electric.impl.runtime.source(frame,vars,(remote + slot),slot);
});
}),(function (debug_info,form,slot){
return (function (pubs,frame,vars){
return hyperfiddle.electric.impl.runtime.make_output(slot,hyperfiddle.electric.impl.runtime.check_failure(debug_info,(form.cljs$core$IFn$_invoke$arity$3 ? form.cljs$core$IFn$_invoke$arity$3(pubs,frame,vars) : form.call(null,pubs,frame,vars))));
});
}),cljs.core.constantly(null),(function (slot,debug_info){
return (function (pubs,frame,vars){
return hyperfiddle.electric.impl.runtime.dynamic(frame,slot,debug_info);
});
}),(function (slot){
return cljs.core.constantly(hyperfiddle.electric.impl.runtime.pure(hyperfiddle.electric.impl.runtime.inject(slot)));
}),(function (x){
return cljs.core.constantly(hyperfiddle.electric.impl.runtime.pure(x));
}),(function() { 
var G__45140__delegate = function (debug_info,forms){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.juxt_with,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.runtime.latest_apply,debug_info),forms);
};
var G__45140 = function (debug_info,var_args){
var forms = null;
if (arguments.length > 1) {
var G__45143__i = 0, G__45143__a = new Array(arguments.length -  1);
while (G__45143__i < G__45143__a.length) {G__45143__a[G__45143__i] = arguments[G__45143__i + 1]; ++G__45143__i;}
  forms = new cljs.core.IndexedSeq(G__45143__a,0,null);
} 
return G__45140__delegate.call(this,debug_info,forms);};
G__45140.cljs$lang$maxFixedArity = 1;
G__45140.cljs$lang$applyTo = (function (arglist__45144){
var debug_info = cljs.core.first(arglist__45144);
var forms = cljs.core.rest(arglist__45144);
return G__45140__delegate(debug_info,forms);
});
G__45140.cljs$core$IFn$_invoke$arity$variadic = G__45140__delegate;
return G__45140;
})()
,(function (slot){
return (function (pubs,frame,vars){
return (vars[(slot | (0))]);
});
}),(function (deps,slot){
return (function (pubs,frame,vars){
return hyperfiddle.electric.impl.runtime.input_spawn(frame,slot,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (inst__$1){
return (inst__$1.cljs$core$IFn$_invoke$arity$3 ? inst__$1.cljs$core$IFn$_invoke$arity$3(pubs,frame,vars) : inst__$1.call(null,pubs,frame,vars));
}),deps));
});
}),(function (deps,static$,dynamic,variable_count,source_count,constant_count,target_count,output_count,input_count,slot){
return (function (pubs,frame,vars){
return hyperfiddle.electric.impl.runtime.target(frame,slot,hyperfiddle.electric.impl.runtime.constructor$(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(pubs,static$),dynamic,variable_count,source_count,constant_count,target_count,output_count,input_count,(function (frame__$1,vars__$1){
return hyperfiddle.electric.impl.runtime.make_input(frame__$1,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (inst__$1){
return (inst__$1.cljs$core$IFn$_invoke$arity$3 ? inst__$1.cljs$core$IFn$_invoke$arity$3(pubs,frame__$1,vars__$1) : inst__$1.call(null,pubs,frame__$1,vars__$1));
}),deps));
})));
});
}),(function (form,var_count,dynamic,variable_count,source_count,constant_count,target_count,output_count,input_count){
return hyperfiddle.electric.impl.runtime.peer(var_count,dynamic,variable_count,source_count,constant_count,target_count,output_count,input_count,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(form,cljs.core.PersistentVector.EMPTY));
}),(function (form,cont,_){
return (function (pubs,frame,vars){
var G__44683 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pubs,hyperfiddle.electric.impl.runtime.signal((form.cljs$core$IFn$_invoke$arity$3 ? form.cljs$core$IFn$_invoke$arity$3(pubs,frame,vars) : form.call(null,pubs,frame,vars))));
var G__44684 = frame;
var G__44685 = vars;
return (cont.cljs$core$IFn$_invoke$arity$3 ? cont.cljs$core$IFn$_invoke$arity$3(G__44683,G__44684,G__44685) : cont.call(null,G__44683,G__44684,G__44685));
});
}),(function (form,slot,s){
return (function (pubs,frame,vars){
var prev = (vars[(slot | (0))]);
(vars[(slot | (0))] = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(pubs,s));

var res = (form.cljs$core$IFn$_invoke$arity$3 ? form.cljs$core$IFn$_invoke$arity$3(pubs,frame,vars) : form.call(null,pubs,frame,vars));
(vars[(slot | (0))] = prev);

return res;
});
}),(function (form,ns){
var temp__5806__auto__ = (function (){var G__44686 = ns;
if((G__44686 == null)){
return null;
} else {
return cljs.core.find_ns(G__44686);
}
})();
if((temp__5806__auto__ == null)){
return cljs.core.constantly(hyperfiddle.electric.impl.runtime.pure(cljs.core.eval(form)));
} else {
var ns__$1 = temp__5806__auto__;
return cljs.core.constantly(hyperfiddle.electric.impl.runtime.pure((function (){var _STAR_ns_STAR__orig_val__44687 = cljs.core._STAR_ns_STAR_;
var _STAR_ns_STAR__temp_val__44688 = ns__$1;
(cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__44688);

try{return cljs.core.eval(form);
}finally {(cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__44687);
}})()));
}
})]));
}));

(hyperfiddle.electric.impl.runtime.eval.cljs$lang$maxFixedArity = 2);

hyperfiddle.electric.impl.runtime.queue = (function hyperfiddle$electric$impl$runtime$queue(){
var q = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((0));
return (function() {
var G__45150 = null;
var G__45150__0 = (function (){
if((q.length === (0))){
throw (new Error("No such element."));
} else {
}

return q.shift();
});
var G__45150__1 = (function (x){
q.push(x);

return x;
});
G__45150 = function(x){
switch(arguments.length){
case 0:
return G__45150__0.call(this);
case 1:
return G__45150__1.call(this,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45150.cljs$core$IFn$_invoke$arity$0 = G__45150__0;
G__45150.cljs$core$IFn$_invoke$arity$1 = G__45150__1;
return G__45150;
})()
});

//# sourceMappingURL=hyperfiddle.electric.impl.runtime.js.map
