goog.provide('hyperfiddle.electric.impl.runtime');
hyperfiddle.electric.impl.runtime.fail = (function hyperfiddle$electric$impl$runtime$fail(x){
throw x;
});
hyperfiddle.electric.impl.runtime.failure = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$1((function (p1__32815_SHARP_){
if((p1__32815_SHARP_ instanceof hyperfiddle.electric.Failure)){
return p1__32815_SHARP_;
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
var len__5769__auto___34183 = arguments.length;
var i__5770__auto___34184 = (0);
while(true){
if((i__5770__auto___34184 < len__5769__auto___34183)){
args__5775__auto__.push((arguments[i__5770__auto___34184]));

var G__34185 = (i__5770__auto___34184 + (1));
i__5770__auto___34184 = G__34185;
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
var G__34186__delegate = function (f,args__$1){
var temp__5802__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.failure,f,args__$1);
if(cljs.core.truth_(temp__5802__auto__)){
var err = temp__5802__auto__;
return hyperfiddle.electric.debug.error(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.select_debug_info(debug_info),new cljs.core.Keyword("hyperfiddle.electric.debug","args","hyperfiddle.electric.debug/args",-1101355176),args__$1),err);
} else {
try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);
}catch (e32857){var e = e32857;
return hyperfiddle.electric.debug.error(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.select_debug_info(debug_info),new cljs.core.Keyword("hyperfiddle.electric.debug","args","hyperfiddle.electric.debug/args",-1101355176),args__$1),(new hyperfiddle.electric.Failure(e)));
}}
};
var G__34186 = function (f,var_args){
var args__$1 = null;
if (arguments.length > 1) {
var G__34187__i = 0, G__34187__a = new Array(arguments.length -  1);
while (G__34187__i < G__34187__a.length) {G__34187__a[G__34187__i] = arguments[G__34187__i + 1]; ++G__34187__i;}
  args__$1 = new cljs.core.IndexedSeq(G__34187__a,0,null);
} 
return G__34186__delegate.call(this,f,args__$1);};
G__34186.cljs$lang$maxFixedArity = 1;
G__34186.cljs$lang$applyTo = (function (arglist__34188){
var f = cljs.core.first(arglist__34188);
var args__$1 = cljs.core.rest(arglist__34188);
return G__34186__delegate(f,args__$1);
});
G__34186.cljs$core$IFn$_invoke$arity$variadic = G__34186__delegate;
return G__34186;
})()
,args);
}));

(hyperfiddle.electric.impl.runtime.latest_apply.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(hyperfiddle.electric.impl.runtime.latest_apply.cljs$lang$applyTo = (function (seq32854){
var G__32856 = cljs.core.first(seq32854);
var seq32854__$1 = cljs.core.next(seq32854);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32856,seq32854__$1);
}));

hyperfiddle.electric.impl.runtime.latest_first = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(missionary.core.latest,(function (x,y){
if((y instanceof hyperfiddle.electric.Failure)){
return y;
} else {
return x;
}
}));
hyperfiddle.electric.impl.runtime.pure = (function hyperfiddle$electric$impl$runtime$pure(x){
return missionary.core.cp_STAR_((function (){var cr32871_block_0 = (function hyperfiddle$electric$impl$runtime$pure_$_cr32871_block_0(cr32871_state){
try{var cr32871_place_0 = x;
(cr32871_state[(0)] = null);

return cr32871_place_0;
}catch (e32875){var cr32871_exception = e32875;
(cr32871_state[(0)] = null);

throw cr32871_exception;
}});
return cloroutine.impl.coroutine((function (){var G__32876 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__32876[(0)] = cr32871_block_0);

return G__32876;
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
(hyperfiddle.electric.impl.runtime.It.prototype.call = (function (unused__13640__auto__){
var self__ = this;
var self__ = this;
var G__32879 = (arguments.length - (1));
switch (G__32879) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.runtime.It.prototype.apply = (function (self__,args32878){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args32878)));
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

hyperfiddle.electric.impl.runtime.lift_cancelled = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,(function (it){
if((typeof hyperfiddle !== 'undefined') && (typeof hyperfiddle.electric !== 'undefined') && (typeof hyperfiddle.electric.impl !== 'undefined') && (typeof hyperfiddle.electric.impl.runtime !== 'undefined') && (typeof hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime32884 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime32884 = (function (it,meta32885){
this.it = it;
this.meta32885 = meta32885;
this.cljs$lang$protocol_mask$partition0$ = 425985;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime32884.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32886,meta32885__$1){
var self__ = this;
var _32886__$1 = this;
return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime32884(self__.it,meta32885__$1));
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime32884.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32886){
var self__ = this;
var _32886__$1 = this;
return self__.meta32885;
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime32884.prototype.call = (function (unused__13640__auto__){
var self__ = this;
var self__ = this;
var G__32892 = (arguments.length - (1));
switch (G__32892) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime32884.prototype.apply = (function (self__,args32888){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args32888)));
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime32884.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
return (self__.it.cljs$core$IFn$_invoke$arity$0 ? self__.it.cljs$core$IFn$_invoke$arity$0() : self__.it.call(null));
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime32884.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
try{return cljs.core.deref(self__.it);
}catch (e32899){if((e32899 instanceof missionary.Cancelled)){
var e = e32899;
return (new hyperfiddle.electric.Failure(e));
} else {
throw e32899;

}
}}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime32884.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"it","it",-1630841225,null),new cljs.core.Symbol(null,"meta32885","meta32885",786515893,null)], null);
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime32884.cljs$lang$type = true);

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime32884.cljs$lang$ctorStr = "hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime32884");

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime32884.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime32884");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime32884.
 */
hyperfiddle.electric.impl.runtime.__GT_t_hyperfiddle$electric$impl$runtime32884 = (function hyperfiddle$electric$impl$runtime$__GT_t_hyperfiddle$electric$impl$runtime32884(it__$1,meta32885){
return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime32884(it__$1,meta32885));
});

}

return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime32884(it,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32997 = arguments.length;
switch (G__32997) {
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
var len__5769__auto___34197 = arguments.length;
var i__5770__auto___34198 = (0);
while(true){
if((i__5770__auto___34198 < len__5769__auto___34197)){
args_arr__5794__auto__.push((arguments[i__5770__auto___34198]));

var G__34200 = (i__5770__auto___34198 + (1));
i__5770__auto___34198 = G__34200;
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
return (arr[slot] = (function (){var G__33007 = (arr[slot]);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__33007) : f.call(null,G__33007));
})());
}));

(hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$4 = (function (arr,slot,f,a){
return (arr[slot] = (function (){var G__33009 = (arr[slot]);
var G__33010 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__33009,G__33010) : f.call(null,G__33009,G__33010));
})());
}));

(hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$5 = (function (arr,slot,f,a,b){
return (arr[slot] = (function (){var G__33012 = (arr[slot]);
var G__33013 = a;
var G__33014 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__33012,G__33013,G__33014) : f.call(null,G__33012,G__33013,G__33014));
})());
}));

(hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$6 = (function (arr,slot,f,a,b,c){
return (arr[slot] = (function (){var G__33015 = (arr[slot]);
var G__33016 = a;
var G__33017 = b;
var G__33018 = c;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__33015,G__33016,G__33017,G__33018) : f.call(null,G__33015,G__33016,G__33017,G__33018));
})());
}));

(hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$variadic = (function (arr,slot,f,a,b,c,ds){
return (arr[slot] = cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,(arr[slot]),a,b,c,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ds], 0)));
}));

/** @this {Function} */
(hyperfiddle.electric.impl.runtime.aswap.cljs$lang$applyTo = (function (seq32990){
var G__32991 = cljs.core.first(seq32990);
var seq32990__$1 = cljs.core.next(seq32990);
var G__32992 = cljs.core.first(seq32990__$1);
var seq32990__$2 = cljs.core.next(seq32990__$1);
var G__32993 = cljs.core.first(seq32990__$2);
var seq32990__$3 = cljs.core.next(seq32990__$2);
var G__32994 = cljs.core.first(seq32990__$3);
var seq32990__$4 = cljs.core.next(seq32990__$3);
var G__32995 = cljs.core.first(seq32990__$4);
var seq32990__$5 = cljs.core.next(seq32990__$4);
var G__32996 = cljs.core.first(seq32990__$5);
var seq32990__$6 = cljs.core.next(seq32990__$5);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32991,G__32992,G__32993,G__32994,G__32995,G__32996,seq32990__$6);
}));

(hyperfiddle.electric.impl.runtime.aswap.cljs$lang$maxFixedArity = (6));

hyperfiddle.electric.impl.runtime.doto_aset = (function hyperfiddle$electric$impl$runtime$doto_aset(arr,k,v){
var G__33026 = arr;
(G__33026[(k | (0))] = v);

return G__33026;
});
hyperfiddle.electric.impl.runtime.make_context = (function hyperfiddle$electric$impl$runtime$make_context(){
var G__33030 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.runtime.context_slots);
(G__33030[hyperfiddle.electric.impl.runtime.context_slot_local_id] = cljs.core.identity((0)));

(G__33030[hyperfiddle.electric.impl.runtime.context_slot_remote_id] = cljs.core.identity((0)));

(G__33030[hyperfiddle.electric.impl.runtime.context_slot_pending_rpos] = cljs.core.identity((0)));

(G__33030[hyperfiddle.electric.impl.runtime.context_slot_pending_wpos] = cljs.core.identity((0)));

(G__33030[hyperfiddle.electric.impl.runtime.context_slot_pending_buffer] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2)));

(G__33030[hyperfiddle.electric.impl.runtime.context_slot_frame_store] = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY));

return G__33030;
});
hyperfiddle.electric.impl.runtime.make_tier = (function hyperfiddle$electric$impl$runtime$make_tier(parent,position){
return ((parent[hyperfiddle.electric.impl.runtime.frame_slot_tiers])[(position | (0))] = (function (){var G__33044 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.runtime.tier_slots);
(G__33044[hyperfiddle.electric.impl.runtime.tier_slot_parent] = parent);

(G__33044[hyperfiddle.electric.impl.runtime.tier_slot_position] = position);

(G__33044[hyperfiddle.electric.impl.runtime.tier_slot_buffer] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((8)));

(G__33044[hyperfiddle.electric.impl.runtime.tier_slot_size] = cljs.core.identity(((0) | (0))));

(G__33044[hyperfiddle.electric.impl.runtime.tier_slot_foreigns] = cljs.core.PersistentArrayMap.EMPTY);

(G__33044[hyperfiddle.electric.impl.runtime.tier_slot_hooks] = cljs.core.PersistentArrayMap.EMPTY);

return G__33044;
})());
});
hyperfiddle.electric.impl.runtime.make_frame = (function hyperfiddle$electric$impl$runtime$make_frame(context,parent,id,position,foreign,static$,dynamic,variable_count,source_count,constant_count,target_count,output_count,input_count,buffer,vars,boot){
var tier_count = (variable_count + source_count);
var frame = (function (){var G__33052 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.runtime.frame_slots);
(G__33052[hyperfiddle.electric.impl.runtime.frame_slot_context] = context);

(G__33052[hyperfiddle.electric.impl.runtime.frame_slot_parent] = parent);

(G__33052[hyperfiddle.electric.impl.runtime.frame_slot_id] = id);

(G__33052[hyperfiddle.electric.impl.runtime.frame_slot_position] = position);

(G__33052[hyperfiddle.electric.impl.runtime.frame_slot_foreign] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cljs.core.count(foreign)));

(G__33052[hyperfiddle.electric.impl.runtime.frame_slot_static] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cljs.core.count(static$)));

(G__33052[hyperfiddle.electric.impl.runtime.frame_slot_dynamic] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cljs.core.count(dynamic)));

(G__33052[hyperfiddle.electric.impl.runtime.frame_slot_variables] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(variable_count));

(G__33052[hyperfiddle.electric.impl.runtime.frame_slot_sources] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(source_count));

(G__33052[hyperfiddle.electric.impl.runtime.frame_slot_targets] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(target_count));

(G__33052[hyperfiddle.electric.impl.runtime.frame_slot_inputs] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(input_count));

(G__33052[hyperfiddle.electric.impl.runtime.frame_slot_tiers] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(tier_count));

(G__33052[hyperfiddle.electric.impl.runtime.frame_slot_constants] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(constant_count));

return G__33052;
})();
var n__5636__auto___34225 = tier_count;
var i_34226 = (0);
while(true){
if((i_34226 < n__5636__auto___34225)){
hyperfiddle.electric.impl.runtime.make_tier(frame,i_34226);

var G__34227 = (i_34226 + (1));
i_34226 = G__34227;
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

var fexpr__33085 = (input[hyperfiddle.electric.impl.runtime.input_slot_notifier]);
return (fexpr__33085.cljs$core$IFn$_invoke$arity$0 ? fexpr__33085.cljs$core$IFn$_invoke$arity$0() : fexpr__33085.call(null));
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
var frame_34230 = (input[hyperfiddle.electric.impl.runtime.input_slot_frame]);
var context_34231 = (frame_34230[hyperfiddle.electric.impl.runtime.frame_slot_context]);
var check_34232 = (context_34231[hyperfiddle.electric.impl.runtime.context_slot_check]);
(context_34231[hyperfiddle.electric.impl.runtime.context_slot_check] = input);

(input[hyperfiddle.electric.impl.runtime.input_slot_check] = check_34232);

if(((context_34231[hyperfiddle.electric.impl.runtime.context_slot_event]) == null)){
(context_34231[hyperfiddle.electric.impl.runtime.context_slot_event] = hyperfiddle.electric.impl.runtime.empty_event);

var fexpr__33143_34233 = (context_34231[hyperfiddle.electric.impl.runtime.context_slot_notifier]);
(fexpr__33143_34233.cljs$core$IFn$_invoke$arity$0 ? fexpr__33143_34233.cljs$core$IFn$_invoke$arity$0() : fexpr__33143_34233.call(null));
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

(output[hyperfiddle.electric.impl.runtime.output_slot_iterator] = (function (){var G__33147 = (function (){
return hyperfiddle.electric.impl.runtime.output_dirty(output);
});
var G__33148 = (function (){
(output[hyperfiddle.electric.impl.runtime.output_slot_done] = true);

return hyperfiddle.electric.impl.runtime.output_dirty(output);
});
var fexpr__33146 = (output[hyperfiddle.electric.impl.runtime.output_slot_iterator]);
return (fexpr__33146.cljs$core$IFn$_invoke$arity$2 ? fexpr__33146.cljs$core$IFn$_invoke$arity$2(G__33147,G__33148) : fexpr__33146.call(null,G__33147,G__33148));
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
var fexpr__33161 = (input[hyperfiddle.electric.impl.runtime.input_slot_notifier]);
return (fexpr__33161.cljs$core$IFn$_invoke$arity$0 ? fexpr__33161.cljs$core$IFn$_invoke$arity$0() : fexpr__33161.call(null));
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

var fexpr__33174 = (input[hyperfiddle.electric.impl.runtime.input_slot_terminator]);
return (fexpr__33174.cljs$core$IFn$_invoke$arity$0 ? fexpr__33174.cljs$core$IFn$_invoke$arity$0() : fexpr__33174.call(null));
} else {
return null;
}
});
hyperfiddle.electric.impl.runtime.update_event = (function hyperfiddle$electric$impl$runtime$update_event(var_args){
var args__5775__auto__ = [];
var len__5769__auto___34249 = arguments.length;
var i__5770__auto___34251 = (0);
while(true){
if((i__5770__auto___34251 < len__5769__auto___34249)){
args__5775__auto__.push((arguments[i__5770__auto___34251]));

var G__34252 = (i__5770__auto___34251 + (1));
i__5770__auto___34251 = G__34252;
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

var fexpr__33191 = (context[hyperfiddle.electric.impl.runtime.context_slot_notifier]);
return (fexpr__33191.cljs$core$IFn$_invoke$arity$0 ? fexpr__33191.cljs$core$IFn$_invoke$arity$0() : fexpr__33191.call(null));
} else {
var event = temp__5806__auto__;
return (context[hyperfiddle.electric.impl.runtime.context_slot_event] = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update,event,k,f,args));
}
}));

(hyperfiddle.electric.impl.runtime.update_event.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(hyperfiddle.electric.impl.runtime.update_event.cljs$lang$applyTo = (function (seq33176){
var G__33177 = cljs.core.first(seq33176);
var seq33176__$1 = cljs.core.next(seq33176);
var G__33178 = cljs.core.first(seq33176__$1);
var seq33176__$2 = cljs.core.next(seq33176__$1);
var G__33179 = cljs.core.first(seq33176__$2);
var seq33176__$3 = cljs.core.next(seq33176__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33177,G__33178,G__33179,seq33176__$3);
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
var x_34259 = cljs.core.deref((output[hyperfiddle.electric.impl.runtime.output_slot_iterator]));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((output[hyperfiddle.electric.impl.runtime.output_slot_current]),(output[hyperfiddle.electric.impl.runtime.output_slot_current] = x_34259))){
} else {
var buffer_34260 = (context[hyperfiddle.electric.impl.runtime.context_slot_pending_buffer]);
var wpos_34261 = (context[hyperfiddle.electric.impl.runtime.context_slot_pending_wpos]);
var temp__5806__auto___34262__$1 = (output[hyperfiddle.electric.impl.runtime.output_slot_time]);
if((temp__5806__auto___34262__$1 == null)){
hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$3(input,hyperfiddle.electric.impl.runtime.input_slot_pending,cljs.core.inc);
} else {
var t_34263 = temp__5806__auto___34262__$1;
var p_34264 = (output[hyperfiddle.electric.impl.runtime.output_slot_prev]);
var n_34265 = (output[hyperfiddle.electric.impl.runtime.output_slot_next]);
(buffer_34260[t_34263] = (((p_34264 === output))?null:(function (){
(p_34264[hyperfiddle.electric.impl.runtime.output_slot_next] = n_34265);

return (n_34265[hyperfiddle.electric.impl.runtime.output_slot_prev] = p_34264);
})()
));
}

(output[hyperfiddle.electric.impl.runtime.output_slot_time] = wpos_34261);

var temp__5806__auto___34266__$1 = (buffer_34260[wpos_34261]);
if((temp__5806__auto___34266__$1 == null)){
(buffer_34260[wpos_34261] = output);

(output[hyperfiddle.electric.impl.runtime.output_slot_prev] = output);

(output[hyperfiddle.electric.impl.runtime.output_slot_next] = output);
} else {
var p_34268 = temp__5806__auto___34266__$1;
var n_34269 = (p_34268[hyperfiddle.electric.impl.runtime.output_slot_next]);
(p_34268[hyperfiddle.electric.impl.runtime.output_slot_next] = output);

(n_34269[hyperfiddle.electric.impl.runtime.output_slot_prev] = output);

(output[hyperfiddle.electric.impl.runtime.output_slot_prev] = p_34268);

(output[hyperfiddle.electric.impl.runtime.output_slot_next] = n_34269);
}

hyperfiddle.electric.impl.runtime.update_event.cljs$core$IFn$_invoke$arity$variadic(context,new cljs.core.Keyword(null,"change","change",-1163046502),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path,x_34259], 0));
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
var fexpr__33212_34271 = (input[hyperfiddle.electric.impl.runtime.input_slot_terminator]);
(fexpr__33212_34271.cljs$core$IFn$_invoke$arity$0 ? fexpr__33212_34271.cljs$core$IFn$_invoke$arity$0() : fexpr__33212_34271.call(null));

throw (new missionary.Cancelled());
} else {
var G__33214 = (input[hyperfiddle.electric.impl.runtime.input_slot_pending]);
switch (G__33214) {
case (-1):
var fexpr__33215_34273 = (input[hyperfiddle.electric.impl.runtime.input_slot_terminator]);
(fexpr__33215_34273.cljs$core$IFn$_invoke$arity$0 ? fexpr__33215_34273.cljs$core$IFn$_invoke$arity$0() : fexpr__33215_34273.call(null));

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
var G__34276 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,(function (){var tier = (tiers[i]);
var buf = (tier[hyperfiddle.electric.impl.runtime.tier_slot_buffer]);
var v__$1 = cljs.core.PersistentVector.EMPTY;
var i__$1 = ((0) | (0));
while(true){
if((i__$1 === (tier[hyperfiddle.electric.impl.runtime.tier_slot_size]))){
return v__$1;
} else {
var G__34278 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v__$1,(function (){var G__33265 = (buf[i__$1]);
return (hyperfiddle.electric.impl.runtime.tree.cljs$core$IFn$_invoke$arity$1 ? hyperfiddle.electric.impl.runtime.tree.cljs$core$IFn$_invoke$arity$1(G__33265) : hyperfiddle.electric.impl.runtime.tree.call(null,G__33265));
})());
var G__34279 = (i__$1 + (1));
v__$1 = G__34278;
i__$1 = G__34279;
continue;
}
break;
}
})());
var G__34277 = (i + (1));
v = G__34276;
i = G__34277;
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
var G__34280 = (tier[hyperfiddle.electric.impl.runtime.tier_slot_parent]);
var G__34281 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(s,cljs.core.keys((tier[hyperfiddle.electric.impl.runtime.tier_slot_hooks])));
f__$1 = G__34280;
s = G__34281;
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
var G__34285 = i__$1;
i = G__34285;
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
var G__34286 = i__$1;
i = G__34286;
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
var G__34288 = (tier[hyperfiddle.electric.impl.runtime.tier_slot_parent]);
f__$1 = G__34288;
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
var fexpr__33289_34289 = (arr[i]);
(fexpr__33289_34289.cljs$core$IFn$_invoke$arity$0 ? fexpr__33289_34289.cljs$core$IFn$_invoke$arity$0() : fexpr__33289_34289.call(null));

var G__34290 = (i + (1));
i = G__34290;
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
var i_34299 = to;
while(true){
if((i_34299 === size)){
} else {
var j_34303 = (i_34299 + (1));
var y_34304 = (buf[(j_34303 | (0))]);
(y_34304[hyperfiddle.electric.impl.runtime.frame_slot_position] = i_34299);

(buf[(i_34299 | (0))] = y_34304);

var G__34305 = j_34303;
i_34299 = G__34305;
continue;
}
break;
}

(tier[hyperfiddle.electric.impl.runtime.tier_slot_size] = size);

(buf[(size | (0))] = null);

return hyperfiddle.electric.impl.runtime.frame_dispose(f);
} else {
var i_34308 = from;
while(true){
var j_34309 = (i_34308 + step);
var y_34310 = (buf[(j_34309 | (0))]);
(y_34310[hyperfiddle.electric.impl.runtime.frame_slot_position] = i_34308);

(buf[(i_34308 | (0))] = y_34310);

if((to === j_34309)){
} else {
var G__34311 = j_34309;
i_34308 = G__34311;
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
var n__5636__auto___34316 = size;
var i_34317 = (0);
while(true){
if((i_34317 < n__5636__auto___34316)){
(dest[(dest_off + i_34317)] = (src[(src_off + i_34317)]));

var G__34319 = (i_34317 + (1));
i_34317 = G__34319;
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
(hyperfiddle.electric.impl.runtime.FrameIterator.prototype.call = (function (unused__13640__auto__){
var self__ = this;
var self__ = this;
var G__33314 = (arguments.length - (1));
switch (G__33314) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.runtime.FrameIterator.prototype.apply = (function (self__,args33312){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args33312)));
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
return hyperfiddle.electric.impl.runtime.__GT_FrameIterator(f,(function (){var G__33345 = n;
var G__33346 = (function (){
hyperfiddle.electric.impl.runtime.frame_cancel(f);

hyperfiddle.electric.impl.runtime.update_event.cljs$core$IFn$_invoke$arity$variadic(context,new cljs.core.Keyword(null,"tree","tree",-196312028),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.Keyword(null,"frame","frame",-1711082588),(- id)], null)], 0));

hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$4(context,hyperfiddle.electric.impl.runtime.context_slot_frame_store,cljs.core.dissoc_BANG_,(f[hyperfiddle.electric.impl.runtime.frame_slot_id]));

return (t.cljs$core$IFn$_invoke$arity$0 ? t.cljs$core$IFn$_invoke$arity$0() : t.call(null));
});
return (_LT_x.cljs$core$IFn$_invoke$arity$2 ? _LT_x.cljs$core$IFn$_invoke$arity$2(G__33345,G__33346) : _LT_x.call(null,G__33345,G__33346));
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
var len__5769__auto___34342 = arguments.length;
var i__5770__auto___34343 = (0);
while(true){
if((i__5770__auto___34343 < len__5769__auto___34342)){
args__5775__auto__.push((arguments[i__5770__auto___34343]));

var G__34344 = (i__5770__auto___34343 + (1));
i__5770__auto___34343 = G__34344;
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
try{var fexpr__33377 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,tier,args);
return (fexpr__33377.cljs$core$IFn$_invoke$arity$2 ? fexpr__33377.cljs$core$IFn$_invoke$arity$2(n,t) : fexpr__33377.call(null,n,t));
}catch (e33376){var e = e33376;
return hyperfiddle.electric.impl.failer.run(e,n,t);
}}
});
}));

(hyperfiddle.electric.impl.runtime.bind.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(hyperfiddle.electric.impl.runtime.bind.cljs$lang$applyTo = (function (seq33365){
var G__33366 = cljs.core.first(seq33365);
var seq33365__$1 = cljs.core.next(seq33365);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33366,seq33365__$1);
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
var G__33400 = arguments.length;
switch (G__33400) {
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
var G__33416 = hyperfiddle.electric.impl.runtime.pure(e);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__33416) : f.call(null,G__33416));
});
}));

(hyperfiddle.electric.impl.runtime.clause.cljs$core$IFn$_invoke$arity$2 = (function (f,c){
return (function (e){
if((hyperfiddle.electric.debug.unwrap(e) instanceof c)){
var G__33418 = hyperfiddle.electric.impl.runtime.pure(e);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__33418) : f.call(null,G__33418));
} else {
return null;
}
});
}));

(hyperfiddle.electric.impl.runtime.clause.cljs$lang$maxFixedArity = 2);

hyperfiddle.electric.impl.runtime.recover = (function hyperfiddle$electric$impl$runtime$recover(tier,catch$,_LT_x){
return hyperfiddle.electric.impl.yield2.yield$((function (x){
if((x instanceof hyperfiddle.electric.Failure)){
var temp__5808__auto__ = (function (){var G__33423 = x.error;
return (catch$.cljs$core$IFn$_invoke$arity$1 ? catch$.cljs$core$IFn$_invoke$arity$1(G__33423) : catch$.call(null,G__33423));
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

return ((frame[hyperfiddle.electric.impl.runtime.frame_slot_variables])[(slot | (0))] = missionary.core.signal_BANG_(missionary.core.cp_STAR_((function (){var cr33430_block_7 = (function hyperfiddle$electric$impl$runtime$variable_$_cr33430_block_7(cr33430_state){
try{var cr33430_place_0 = (cr33430_state[(2)]);
var cr33430_place_14 = cr33430_place_0;
var cr33430_place_15 = cr33430_place_14;
var cr33430_place_16 = (new hyperfiddle.electric.Failure(cr33430_place_15));
(cr33430_state[(0)] = cr33430_block_8);

(cr33430_state[(2)] = cr33430_place_16);

return cr33430_state;
}catch (e33485){var cr33430_exception = e33485;
(cr33430_state[(0)] = cr33430_block_8);

(cr33430_state[(1)] = true);

(cr33430_state[(2)] = cr33430_exception);

return cr33430_state;
}});
var cr33430_block_3 = (function hyperfiddle$electric$impl$runtime$variable_$_cr33430_block_3(cr33430_state){
try{var cr33430_place_3 = (cr33430_state[(4)]);
var cr33430_place_8 = hyperfiddle.electric.impl.runtime.with$;
var cr33430_place_9 = tier;
var cr33430_place_10 = cr33430_place_3;
var cr33430_place_11 = (function (){var G__33492 = cr33430_place_9;
var G__33493 = cr33430_place_10;
var fexpr__33491 = cr33430_place_8;
return (fexpr__33491.cljs$core$IFn$_invoke$arity$2 ? fexpr__33491.cljs$core$IFn$_invoke$arity$2(G__33492,G__33493) : fexpr__33491.call(null,G__33492,G__33493));
})();
(cr33430_state[(0)] = cr33430_block_4);

(cr33430_state[(4)] = null);

return missionary.core.switch$(cr33430_place_11);
}catch (e33490){var cr33430_exception = e33490;
(cr33430_state[(0)] = cr33430_block_7);

(cr33430_state[(3)] = null);

(cr33430_state[(4)] = null);

(cr33430_state[(2)] = cr33430_exception);

return cr33430_state;
}});
var cr33430_block_8 = (function hyperfiddle$electric$impl$runtime$variable_$_cr33430_block_8(cr33430_state){
try{var cr33430_place_1 = (cr33430_state[(1)]);
var cr33430_place_0 = (cr33430_state[(2)]);
var cr33430_place_17 = (cljs.core.truth_(cr33430_place_1)?(function(){throw cr33430_place_0})():cr33430_place_0);
(cr33430_state[(0)] = null);

(cr33430_state[(1)] = null);

(cr33430_state[(2)] = null);

return cr33430_place_17;
}catch (e33502){var cr33430_exception = e33502;
(cr33430_state[(0)] = null);

(cr33430_state[(1)] = null);

(cr33430_state[(2)] = null);

throw cr33430_exception;
}});
var cr33430_block_5 = (function hyperfiddle$electric$impl$runtime$variable_$_cr33430_block_5(cr33430_state){
try{var cr33430_place_3 = (cr33430_state[(4)]);
var cr33430_place_13 = cr33430_place_3;
(cr33430_state[(0)] = cr33430_block_6);

(cr33430_state[(4)] = null);

(cr33430_state[(3)] = cr33430_place_13);

return cr33430_state;
}catch (e33504){var cr33430_exception = e33504;
(cr33430_state[(0)] = cr33430_block_7);

(cr33430_state[(3)] = null);

(cr33430_state[(4)] = null);

(cr33430_state[(2)] = cr33430_exception);

return cr33430_state;
}});
var cr33430_block_6 = (function hyperfiddle$electric$impl$runtime$variable_$_cr33430_block_6(cr33430_state){
try{var cr33430_place_7 = (cr33430_state[(3)]);
(cr33430_state[(0)] = cr33430_block_8);

(cr33430_state[(3)] = null);

(cr33430_state[(2)] = cr33430_place_7);

return cr33430_state;
}catch (e33506){var cr33430_exception = e33506;
(cr33430_state[(0)] = cr33430_block_7);

(cr33430_state[(3)] = null);

(cr33430_state[(2)] = cr33430_exception);

return cr33430_state;
}});
var cr33430_block_0 = (function hyperfiddle$electric$impl$runtime$variable_$_cr33430_block_0(cr33430_state){
try{var cr33430_place_0 = null;
var cr33430_place_1 = false;
(cr33430_state[(0)] = cr33430_block_1);

(cr33430_state[(2)] = cr33430_place_0);

(cr33430_state[(1)] = cr33430_place_1);

return cr33430_state;
}catch (e33511){var cr33430_exception = e33511;
(cr33430_state[(0)] = null);

throw cr33430_exception;
}});
var cr33430_block_1 = (function hyperfiddle$electric$impl$runtime$variable_$_cr33430_block_1(cr33430_state){
try{var cr33430_place_2 = _LT__LT_x;
(cr33430_state[(0)] = cr33430_block_2);

return missionary.core.switch$(cr33430_place_2);
}catch (e33512){var cr33430_exception = e33512;
(cr33430_state[(0)] = cr33430_block_7);

(cr33430_state[(2)] = cr33430_exception);

return cr33430_state;
}});
var cr33430_block_4 = (function hyperfiddle$electric$impl$runtime$variable_$_cr33430_block_4(cr33430_state){
try{var cr33430_place_12 = missionary.core.unpark();
(cr33430_state[(0)] = cr33430_block_6);

(cr33430_state[(3)] = cr33430_place_12);

return cr33430_state;
}catch (e33514){var cr33430_exception = e33514;
(cr33430_state[(0)] = cr33430_block_7);

(cr33430_state[(3)] = null);

(cr33430_state[(2)] = cr33430_exception);

return cr33430_state;
}});
var cr33430_block_2 = (function hyperfiddle$electric$impl$runtime$variable_$_cr33430_block_2(cr33430_state){
try{var cr33430_place_3 = missionary.core.unpark();
var cr33430_place_4 = hyperfiddle.electric.impl.runtime.failure;
var cr33430_place_5 = cr33430_place_3;
var cr33430_place_6 = cr33430_place_4(cr33430_place_5);
var cr33430_place_7 = null;
if(cljs.core.truth_(cr33430_place_6)){
(cr33430_state[(0)] = cr33430_block_5);

(cr33430_state[(4)] = cr33430_place_3);

(cr33430_state[(3)] = cr33430_place_7);

return cr33430_state;
} else {
(cr33430_state[(0)] = cr33430_block_3);

(cr33430_state[(4)] = cr33430_place_3);

(cr33430_state[(3)] = cr33430_place_7);

return cr33430_state;
}
}catch (e33519){var cr33430_exception = e33519;
(cr33430_state[(0)] = cr33430_block_7);

(cr33430_state[(2)] = cr33430_exception);

return cr33430_state;
}});
return cloroutine.impl.coroutine((function (){var G__33522 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((5));
(G__33522[(0)] = cr33430_block_0);

return G__33522;
})());
})())));
});
hyperfiddle.electric.impl.runtime.source = (function hyperfiddle$electric$impl$runtime$source(frame,vars,position,slot){
((frame[hyperfiddle.electric.impl.runtime.frame_slot_sources])[(slot | (0))] = (function (){var G__33531 = ((frame[hyperfiddle.electric.impl.runtime.frame_slot_tiers])[(position | (0))]);
(G__33531[hyperfiddle.electric.impl.runtime.tier_slot_vars] = cljs.core.aclone(vars));

return G__33531;
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
var tier_34364__$1 = tier;
while(true){
var f_34365 = (tier_34364__$1[hyperfiddle.electric.impl.runtime.tier_slot_parent]);
var temp__5806__auto___34366__$1 = hyperfiddle.electric.impl.runtime.frame_walk_tiers(f_34365,(1),k,cljs.core.identity,(tier_34364__$1[hyperfiddle.electric.impl.runtime.tier_slot_position]));
if((temp__5806__auto___34366__$1 == null)){
var temp__5808__auto___34367 = (f_34365[hyperfiddle.electric.impl.runtime.frame_slot_parent]);
if((temp__5808__auto___34367 == null)){
} else {
var tier_34368__$2 = temp__5808__auto___34367;
var temp__5806__auto___34369__$2 = hyperfiddle.electric.impl.runtime.tier_walk_frames(tier_34368__$2,(1),k,cljs.core.identity,(f_34365[hyperfiddle.electric.impl.runtime.frame_slot_position]));
if((temp__5806__auto___34369__$2 == null)){
if(cljs.core.contains_QMARK_((tier_34368__$2[hyperfiddle.electric.impl.runtime.tier_slot_hooks]),k)){
(k.cljs$core$IFn$_invoke$arity$2 ? k.cljs$core$IFn$_invoke$arity$2(v,null) : k.call(null,v,null));
} else {
var G__34370 = tier_34368__$2;
tier_34364__$1 = G__34370;
continue;
}
} else {
var a_34371 = temp__5806__auto___34369__$2;
(k.cljs$core$IFn$_invoke$arity$2 ? k.cljs$core$IFn$_invoke$arity$2(v,a_34371) : k.call(null,v,a_34371));
}
}
} else {
var a_34372 = temp__5806__auto___34366__$1;
(k.cljs$core$IFn$_invoke$arity$2 ? k.cljs$core$IFn$_invoke$arity$2(v,a_34372) : k.call(null,v,a_34372));
}
break;
}

hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$5(tier,hyperfiddle.electric.impl.runtime.tier_slot_hooks,cljs.core.assoc,k,v);

var G__33548 = n;
var G__33549 = (function (){
hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$4(tier,hyperfiddle.electric.impl.runtime.tier_slot_hooks,cljs.core.dissoc,k);

(k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(v) : k.call(null,v));

return (t.cljs$core$IFn$_invoke$arity$0 ? t.cljs$core$IFn$_invoke$arity$0() : t.call(null));
});
return (_LT_x.cljs$core$IFn$_invoke$arity$2 ? _LT_x.cljs$core$IFn$_invoke$arity$2(G__33548,G__33549) : _LT_x.call(null,G__33548,G__33549));
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

var input_34374 = (output__$1[hyperfiddle.electric.impl.runtime.output_slot_input]);
if((hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$3(input_34374,hyperfiddle.electric.impl.runtime.input_slot_pending,cljs.core.dec) === (0))){
hyperfiddle.electric.impl.runtime.input_ready(input_34374);
} else {
}

var G__34376 = (output__$1[hyperfiddle.electric.impl.runtime.output_slot_next]);
output__$1 = G__34376;
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
var fexpr__33581_34377 = (context[hyperfiddle.electric.impl.runtime.context_slot_terminator]);
(fexpr__33581_34377.cljs$core$IFn$_invoke$arity$0 ? fexpr__33581_34377.cljs$core$IFn$_invoke$arity$0() : fexpr__33581_34377.call(null));

throw (new missionary.Cancelled());
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"change","change",-1163046502).cljs$core$IFn$_invoke$arity$1(event))){
} else {
var buffer_34378 = (context[hyperfiddle.electric.impl.runtime.context_slot_pending_buffer]);
var size_34379 = buffer_34378.length;
var rpos_34380 = (context[hyperfiddle.electric.impl.runtime.context_slot_pending_rpos]);
var wpos_34381 = (context[hyperfiddle.electric.impl.runtime.context_slot_pending_wpos]);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rpos_34380,(context[hyperfiddle.electric.impl.runtime.context_slot_pending_wpos] = ((wpos_34381 + (1)) & (size_34379 - (1)))))){
var larger_34385 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((size_34379 << (1)));
var split_34386 = (size_34379 - rpos_34380);
hyperfiddle.electric.impl.runtime.acopy(buffer_34378,rpos_34380,larger_34385,(0),split_34386);

hyperfiddle.electric.impl.runtime.acopy(buffer_34378,(0),larger_34385,split_34386,rpos_34380);

var n__5636__auto___34387 = size_34379;
var t_34388 = (0);
while(true){
if((t_34388 < n__5636__auto___34387)){
var temp__5808__auto___34389 = (larger_34385[t_34388]);
if((temp__5808__auto___34389 == null)){
} else {
var output_34390 = temp__5808__auto___34389;
var o_34391 = output_34390;
while(true){
(o_34391[hyperfiddle.electric.impl.runtime.output_slot_time] = t_34388);

var n_34392 = (o_34391[hyperfiddle.electric.impl.runtime.output_slot_next]);
if((n_34392 === output_34390)){
} else {
var G__34393 = n_34392;
o_34391 = G__34393;
continue;
}
break;
}
}

var G__34394 = (t_34388 + (1));
t_34388 = G__34394;
continue;
} else {
}
break;
}

(context[hyperfiddle.electric.impl.runtime.context_slot_pending_buffer] = larger_34385);

(context[hyperfiddle.electric.impl.runtime.context_slot_pending_wpos] = size_34379);

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
var G__33595_34397 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(inst);
var G__33595_34398__$1 = (((G__33595_34397 instanceof cljs.core.Keyword))?G__33595_34397.fqn:null);
switch (G__33595_34398__$1) {
case "create":
var map__33596_34402 = inst;
var map__33596_34403__$1 = cljs.core.__destructure_map(map__33596_34402);
var vec__33597_34404 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33596_34403__$1,new cljs.core.Keyword(null,"target","target",253001721));
var target_frame_34405 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33597_34404,(0),null);
var target_slot_34406 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33597_34404,(1),null);
var vec__33600_34407 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33596_34403__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var source_frame_34408 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33600_34407,(0),null);
var source_slot_34409 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33600_34407,(1),null);
var G__33610_34412 = ((cljs.core.get.cljs$core$IFn$_invoke$arity$2((context[hyperfiddle.electric.impl.runtime.context_slot_frame_store]),source_frame_34408)[hyperfiddle.electric.impl.runtime.frame_slot_sources])[source_slot_34409]);
var G__33611_34413 = hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$3(context,hyperfiddle.electric.impl.runtime.context_slot_remote_id,cljs.core.dec);
var fexpr__33609_34414 = ((cljs.core.get.cljs$core$IFn$_invoke$arity$2((context[hyperfiddle.electric.impl.runtime.context_slot_frame_store]),target_frame_34405)[hyperfiddle.electric.impl.runtime.frame_slot_targets])[target_slot_34406]);
(fexpr__33609_34414.cljs$core$IFn$_invoke$arity$2 ? fexpr__33609_34414.cljs$core$IFn$_invoke$arity$2(G__33610_34412,G__33611_34413) : fexpr__33609_34414.call(null,G__33610_34412,G__33611_34413));

break;
case "rotate":
hyperfiddle.electric.impl.runtime.frame_rotate(cljs.core.get.cljs$core$IFn$_invoke$arity$2((context[hyperfiddle.electric.impl.runtime.context_slot_frame_store]),new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(inst)),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(inst));

break;
case "remove":
hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$4(context,hyperfiddle.electric.impl.runtime.context_slot_frame_store,cljs.core.dissoc_BANG_,new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(inst));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33595_34398__$1)].join('')));

}

return context;
});
hyperfiddle.electric.impl.runtime.eval_change_inst = (function hyperfiddle$electric$impl$runtime$eval_change_inst(context,p__33616,value){
var vec__33618 = p__33616;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33618,(0),null);
var slot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33618,(1),null);
hyperfiddle.electric.impl.runtime.input_change(((cljs.core.get.cljs$core$IFn$_invoke$arity$2((context[hyperfiddle.electric.impl.runtime.context_slot_frame_store]),id)[hyperfiddle.electric.impl.runtime.frame_slot_inputs])[slot]),value);

return context;
});
hyperfiddle.electric.impl.runtime.eval_freeze_inst = (function hyperfiddle$electric$impl$runtime$eval_freeze_inst(context,p__33633){
var vec__33636 = p__33633;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33636,(0),null);
var slot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33636,(1),null);
hyperfiddle.electric.impl.runtime.input_freeze(((cljs.core.get.cljs$core$IFn$_invoke$arity$2((context[hyperfiddle.electric.impl.runtime.context_slot_frame_store]),id)[hyperfiddle.electric.impl.runtime.frame_slot_inputs])[slot]));

return context;
});
hyperfiddle.electric.impl.runtime.parse_event = (function hyperfiddle$electric$impl$runtime$parse_event(context,p__33643){
var map__33645 = p__33643;
var map__33645__$1 = cljs.core.__destructure_map(map__33645);
var acks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33645__$1,new cljs.core.Keyword(null,"acks","acks",707064729));
var tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33645__$1,new cljs.core.Keyword(null,"tree","tree",-196312028));
var change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33645__$1,new cljs.core.Keyword(null,"change","change",-1163046502));
var freeze = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33645__$1,new cljs.core.Keyword(null,"freeze","freeze",2043466309));
var n__5636__auto___34421 = acks;
var __34422 = (0);
while(true){
if((__34422 < n__5636__auto___34421)){
hyperfiddle.electric.impl.runtime.context_ack(context);

var G__34423 = (__34422 + (1));
__34422 = G__34423;
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
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr33657_block_0 = (function hyperfiddle$electric$impl$runtime$write_outgoing_events_$_cr33657_block_0(cr33657_state){
try{var cr33657_place_0 = (1);
var cr33657_place_1 = _GT_events;
(cr33657_state[(0)] = cr33657_block_1);

return missionary.core.fork(cr33657_place_0,cr33657_place_1);
}catch (e33693){var cr33657_exception = e33693;
(cr33657_state[(0)] = null);

throw cr33657_exception;
}});
var cr33657_block_1 = (function hyperfiddle$electric$impl$runtime$write_outgoing_events_$_cr33657_block_1(cr33657_state){
try{var cr33657_place_2 = missionary.core.unpark();
var cr33657_place_3 = cljs.core._EQ_;
var cr33657_place_4 = cr33657_place_2;
var cr33657_place_5 = hyperfiddle.electric.impl.runtime.empty_event;
var cr33657_place_6 = (function (){var G__33703 = cr33657_place_4;
var G__33704 = cr33657_place_5;
var fexpr__33702 = cr33657_place_3;
return (fexpr__33702.cljs$core$IFn$_invoke$arity$2 ? fexpr__33702.cljs$core$IFn$_invoke$arity$2(G__33703,G__33704) : fexpr__33702.call(null,G__33703,G__33704));
})();
var cr33657_place_7 = null;
if(cljs.core.truth_(cr33657_place_6)){
(cr33657_state[(0)] = cr33657_block_4);

(cr33657_state[(2)] = cr33657_place_7);

return cr33657_state;
} else {
(cr33657_state[(0)] = cr33657_block_2);

(cr33657_state[(1)] = cr33657_place_2);

(cr33657_state[(2)] = cr33657_place_7);

return cr33657_state;
}
}catch (e33700){var cr33657_exception = e33700;
(cr33657_state[(0)] = null);

throw cr33657_exception;
}});
var cr33657_block_2 = (function hyperfiddle$electric$impl$runtime$write_outgoing_events_$_cr33657_block_2(cr33657_state){
try{var cr33657_place_2 = (cr33657_state[(1)]);
var cr33657_place_8 = write;
var cr33657_place_9 = cr33657_place_2;
var cr33657_place_10 = (function (){var G__33707 = cr33657_place_9;
var fexpr__33706 = cr33657_place_8;
return (fexpr__33706.cljs$core$IFn$_invoke$arity$1 ? fexpr__33706.cljs$core$IFn$_invoke$arity$1(G__33707) : fexpr__33706.call(null,G__33707));
})();
(cr33657_state[(0)] = cr33657_block_3);

(cr33657_state[(1)] = null);

return missionary.core.park(cr33657_place_10);
}catch (e33705){var cr33657_exception = e33705;
(cr33657_state[(0)] = null);

(cr33657_state[(1)] = null);

(cr33657_state[(2)] = null);

throw cr33657_exception;
}});
var cr33657_block_3 = (function hyperfiddle$electric$impl$runtime$write_outgoing_events_$_cr33657_block_3(cr33657_state){
try{var cr33657_place_11 = missionary.core.unpark();
(cr33657_state[(0)] = cr33657_block_5);

(cr33657_state[(2)] = cr33657_place_11);

return cr33657_state;
}catch (e33708){var cr33657_exception = e33708;
(cr33657_state[(0)] = null);

(cr33657_state[(2)] = null);

throw cr33657_exception;
}});
var cr33657_block_4 = (function hyperfiddle$electric$impl$runtime$write_outgoing_events_$_cr33657_block_4(cr33657_state){
try{var cr33657_place_12 = null;
(cr33657_state[(0)] = cr33657_block_5);

(cr33657_state[(2)] = cr33657_place_12);

return cr33657_state;
}catch (e33711){var cr33657_exception = e33711;
(cr33657_state[(0)] = null);

(cr33657_state[(2)] = null);

throw cr33657_exception;
}});
var cr33657_block_5 = (function hyperfiddle$electric$impl$runtime$write_outgoing_events_$_cr33657_block_5(cr33657_state){
try{var cr33657_place_7 = (cr33657_state[(2)]);
(cr33657_state[(0)] = null);

(cr33657_state[(2)] = null);

return cr33657_place_7;
}catch (e33715){var cr33657_exception = e33715;
(cr33657_state[(0)] = null);

(cr33657_state[(2)] = null);

throw cr33657_exception;
}});
return cloroutine.impl.coroutine((function (){var G__33716 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((3));
(G__33716[(0)] = cr33657_block_0);

return G__33716;
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

var temp__5808__auto___34432 = hyperfiddle.electric.impl.runtime.make_frame(context,null,(0),(0),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY,dynamic,variable_count,source_count,constant_count,target_count,output_count,input_count,context,cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(var_count,hyperfiddle.electric.impl.runtime.unbound)),ctor);
if((temp__5808__auto___34432 == null)){
} else {
var _LT_main_34433 = temp__5808__auto___34432;
missionary.core.stream_BANG_(missionary.core.latest.cljs$core$IFn$_invoke$arity$variadic((function (x){
if((x instanceof hyperfiddle.electric.Failure)){
var G__33730 = x.error;
return (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(G__33730) : on_error.call(null,G__33730));
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_LT_main_34433], 0)));
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
var len__5769__auto___34441 = arguments.length;
var i__5770__auto___34442 = (0);
while(true){
if((i__5770__auto___34442 < len__5769__auto___34441)){
args__5775__auto__.push((arguments[i__5770__auto___34442]));

var G__34446 = (i__5770__auto___34442 + (1));
i__5770__auto___34442 = G__34446;
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
(hyperfiddle.electric.impl.runtime.collapse.cljs$lang$applyTo = (function (seq33742){
var G__33743 = cljs.core.first(seq33742);
var seq33742__$1 = cljs.core.next(seq33742);
var G__33744 = cljs.core.first(seq33742__$1);
var seq33742__$2 = cljs.core.next(seq33742__$1);
var G__33745 = cljs.core.first(seq33742__$2);
var seq33742__$3 = cljs.core.next(seq33742__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33743,G__33744,G__33745,seq33742__$3);
}));

hyperfiddle.electric.impl.runtime.snapshot = (function hyperfiddle$electric$impl$runtime$snapshot(var_args){
var args__5775__auto__ = [];
var len__5769__auto___34454 = arguments.length;
var i__5770__auto___34455 = (0);
while(true){
if((i__5770__auto___34455 < len__5769__auto___34454)){
args__5775__auto__.push((arguments[i__5770__auto___34455]));

var G__34458 = (i__5770__auto___34455 + (1));
i__5770__auto___34455 = G__34458;
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
(hyperfiddle.electric.impl.runtime.snapshot.cljs$lang$applyTo = (function (seq33754){
var G__33755 = cljs.core.first(seq33754);
var seq33754__$1 = cljs.core.next(seq33754);
var G__33756 = cljs.core.first(seq33754__$1);
var seq33754__$2 = cljs.core.next(seq33754__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33755,G__33756,seq33754__$2);
}));

hyperfiddle.electric.impl.runtime.reverse_index = (function hyperfiddle$electric$impl$runtime$reverse_index(m){
return cljs.core.reduce_kv((function (v,x,i){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,i,x);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(m),null)),m);
});
hyperfiddle.electric.impl.runtime.empty_frame = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"variable","variable",-281346492),(0),new cljs.core.Keyword(null,"source","source",-433931539),(0),new cljs.core.Keyword(null,"constant","constant",-379609303),(0),new cljs.core.Keyword(null,"target","target",253001721),(0),new cljs.core.Keyword(null,"output","output",-1105869043),(0),new cljs.core.Keyword(null,"input","input",556931961),(0),new cljs.core.Keyword(null,"static","static",1214358571),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dynamic","dynamic",704819571),cljs.core.PersistentArrayMap.EMPTY], null);
hyperfiddle.electric.impl.runtime.compile = (function hyperfiddle$electric$impl$runtime$compile(inst,p__33772){
var map__33773 = p__33772;
var map__33773__$1 = cljs.core.__destructure_map(map__33773);
var fns = map__33773__$1;
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33773__$1,new cljs.core.Keyword(null,"input","input",556931961));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33773__$1,new cljs.core.Keyword(null,"target","target",253001721));
var main = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33773__$1,new cljs.core.Keyword(null,"main","main",-2117802661));
var pub = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33773__$1,new cljs.core.Keyword(null,"pub","pub",-1189143908));
var bind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33773__$1,new cljs.core.Keyword(null,"bind","bind",-113428417));
var lift = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33773__$1,new cljs.core.Keyword(null,"lift","lift",903632035));
var variable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33773__$1,new cljs.core.Keyword(null,"variable","variable",-281346492));
var do$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33773__$1,new cljs.core.Keyword(null,"do","do",46310725));
var sub = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33773__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var global__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33773__$1,new cljs.core.Keyword(null,"global","global",93595047));
var constant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33773__$1,new cljs.core.Keyword(null,"constant","constant",-379609303));
var static$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33773__$1,new cljs.core.Keyword(null,"static","static",1214358571));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33773__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33773__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
var nop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33773__$1,new cljs.core.Keyword(null,"nop","nop",-1754075182));
var inject = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33773__$1,new cljs.core.Keyword(null,"inject","inject",-1882635533));
var dynamic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33773__$1,new cljs.core.Keyword(null,"dynamic","dynamic",704819571));
var literal = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33773__$1,new cljs.core.Keyword(null,"literal","literal",1664775605));
var invoke = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33773__$1,new cljs.core.Keyword(null,"invoke","invoke",1145927159));
var vget = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33773__$1,new cljs.core.Keyword(null,"vget","vget",1720343287));
return cljs.core.peek(hyperfiddle.electric.impl.runtime.collapse(new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot((function hyperfiddle$electric$impl$runtime$compile_$_walk(env,off,idx,dyn,inst__$1){
var G__33775 = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425).cljs$core$IFn$_invoke$arity$1(inst__$1);
var G__33775__$1 = (((G__33775 instanceof cljs.core.Keyword))?G__33775.fqn:null);
switch (G__33775__$1) {
case "hyperfiddle.electric.impl.ir/nop":
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj,nop);

break;
case "hyperfiddle.electric.impl.ir/sub":
var p = (idx - new cljs.core.Keyword("hyperfiddle.electric.impl.ir","index","hyperfiddle.electric.impl.ir/index",1690646129).cljs$core$IFn$_invoke$arity$1(inst__$1));
if((p < off)){
var f = new cljs.core.Keyword(null,"static","static",1214358571).cljs$core$IFn$_invoke$arity$1(env);
var i = (function (){var G__33776 = p;
var G__33777 = cljs.core.count(f);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__33776,G__33777) : f.call(null,G__33776,G__33777));
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
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj,(function (){var G__33787 = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","form","hyperfiddle.electric.impl.ir/form",-534651915).cljs$core$IFn$_invoke$arity$1(inst__$1);
var G__33788 = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","ns","hyperfiddle.electric.impl.ir/ns",1363348916).cljs$core$IFn$_invoke$arity$1(inst__$1);
var fexpr__33786 = new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(fns);
return (fexpr__33786.cljs$core$IFn$_invoke$arity$2 ? fexpr__33786.cljs$core$IFn$_invoke$arity$2(G__33787,G__33788) : fexpr__33786.call(null,G__33787,G__33788));
})());

break;
case "hyperfiddle.electric.impl.ir/node":
var v = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","slot","hyperfiddle.electric.impl.ir/slot",1432523351).cljs$core$IFn$_invoke$arity$1(inst__$1);
var env__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword(null,"vars","vars",-2046957217),cljs.core.max,v);
if(cljs.core.truth_((dyn.cljs$core$IFn$_invoke$arity$1 ? dyn.cljs$core$IFn$_invoke$arity$1(v) : dyn.call(null,v)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(env__$1,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj,(vget.cljs$core$IFn$_invoke$arity$1 ? vget.cljs$core$IFn$_invoke$arity$1(v) : vget.call(null,v)));
} else {
var d = new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(env__$1);
var i = (function (){var G__33790 = v;
var G__33791 = cljs.core.count(d);
return (d.cljs$core$IFn$_invoke$arity$2 ? d.cljs$core$IFn$_invoke$arity$2(G__33790,G__33791) : d.call(null,G__33790,G__33791));
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
var G__33793 = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425).cljs$core$IFn$_invoke$arity$1(f__$1);
var G__33793__$1 = (((G__33793 instanceof cljs.core.Keyword))?G__33793.fqn:null);
switch (G__33793__$1) {
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
var G__34479 = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","fn","hyperfiddle.electric.impl.ir/fn",1996468864).cljs$core$IFn$_invoke$arity$1(f__$1);
f__$1 = G__34479;
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
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj,(function (){var G__33795 = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","name","hyperfiddle.electric.impl.ir/name",655661733).cljs$core$IFn$_invoke$arity$1(inst__$1);
return (global__$1.cljs$core$IFn$_invoke$arity$1 ? global__$1.cljs$core$IFn$_invoke$arity$1(G__33795) : global__$1.call(null,G__33795));
})());

break;
case "hyperfiddle.electric.impl.ir/literal":
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj,(function (){var G__33796 = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","value","hyperfiddle.electric.impl.ir/value",-750005275).cljs$core$IFn$_invoke$arity$1(inst__$1);
return (literal.cljs$core$IFn$_invoke$arity$1 ? literal.cljs$core$IFn$_invoke$arity$1(G__33796) : literal.call(null,G__33796));
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33775__$1)].join('')));

}
})(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.empty_frame,new cljs.core.Keyword(null,"vars","vars",-2046957217),(-1)),(0),(0),cljs.core.PersistentHashSet.EMPTY,inst),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,new cljs.core.Keyword(null,"vars","vars",-2046957217))),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.runtime.reverse_index,new cljs.core.Keyword(null,"dynamic","dynamic",704819571))),new cljs.core.Keyword(null,"variable","variable",-281346492)),new cljs.core.Keyword(null,"source","source",-433931539)),new cljs.core.Keyword(null,"constant","constant",-379609303)),new cljs.core.Keyword(null,"target","target",253001721)),new cljs.core.Keyword(null,"output","output",-1105869043)),new cljs.core.Keyword(null,"input","input",556931961))),(9),main));
});
hyperfiddle.electric.impl.runtime.sym = (function hyperfiddle$electric$impl$runtime$sym(var_args){
var args__5775__auto__ = [];
var len__5769__auto___34484 = arguments.length;
var i__5770__auto___34485 = (0);
while(true){
if((i__5770__auto___34485 < len__5769__auto___34484)){
args__5775__auto__.push((arguments[i__5770__auto___34485]));

var G__34486 = (i__5770__auto___34485 + (1));
i__5770__auto___34485 = G__34486;
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
(hyperfiddle.electric.impl.runtime.sym.cljs$lang$applyTo = (function (seq33806){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33806));
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
var G__34513__delegate = function (debug_info,forms){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","latest-apply","hyperfiddle.electric.impl.runtime/latest-apply",694267757,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.select_debug_info(debug_info),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([forms], 0))));
};
var G__34513 = function (debug_info,var_args){
var forms = null;
if (arguments.length > 1) {
var G__34514__i = 0, G__34514__a = new Array(arguments.length -  1);
while (G__34514__i < G__34514__a.length) {G__34514__a[G__34514__i] = arguments[G__34514__i + 1]; ++G__34514__i;}
  forms = new cljs.core.IndexedSeq(G__34514__a,0,null);
} 
return G__34513__delegate.call(this,debug_info,forms);};
G__34513.cljs$lang$maxFixedArity = 1;
G__34513.cljs$lang$applyTo = (function (arglist__34515){
var debug_info = cljs.core.first(arglist__34515);
var forms = cljs.core.rest(arglist__34515);
return G__34513__delegate(debug_info,forms);
});
G__34513.cljs$core$IFn$_invoke$arity$variadic = G__34513__delegate;
return G__34513;
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
var G__33847 = arguments.length;
switch (G__33847) {
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
var len__5769__auto___34528 = arguments.length;
var i__5770__auto___34529 = (0);
while(true){
if((i__5770__auto___34529 < len__5769__auto___34528)){
args_arr__5794__auto__.push((arguments[i__5770__auto___34529]));

var G__34530 = (i__5770__auto___34529 + (1));
i__5770__auto___34529 = G__34530;
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
var G__34531 = null;
var G__34531__0 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__34531__1 = (function (a){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__34531__2 = (function (a,b){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__34531__3 = (function (a,b,c){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__34531__4 = (function() { 
var G__34532__delegate = function (a,b,c,ds){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
};
var G__34532 = function (a,b,c,var_args){
var ds = null;
if (arguments.length > 3) {
var G__34533__i = 0, G__34533__a = new Array(arguments.length -  3);
while (G__34533__i < G__34533__a.length) {G__34533__a[G__34533__i] = arguments[G__34533__i + 3]; ++G__34533__i;}
  ds = new cljs.core.IndexedSeq(G__34533__a,0,null);
} 
return G__34532__delegate.call(this,a,b,c,ds);};
G__34532.cljs$lang$maxFixedArity = 3;
G__34532.cljs$lang$applyTo = (function (arglist__34534){
var a = cljs.core.first(arglist__34534);
arglist__34534 = cljs.core.next(arglist__34534);
var b = cljs.core.first(arglist__34534);
arglist__34534 = cljs.core.next(arglist__34534);
var c = cljs.core.first(arglist__34534);
var ds = cljs.core.rest(arglist__34534);
return G__34532__delegate(a,b,c,ds);
});
G__34532.cljs$core$IFn$_invoke$arity$variadic = G__34532__delegate;
return G__34532;
})()
;
G__34531 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 0:
return G__34531__0.call(this);
case 1:
return G__34531__1.call(this,a);
case 2:
return G__34531__2.call(this,a,b);
case 3:
return G__34531__3.call(this,a,b,c);
default:
var G__34535 = null;
if (arguments.length > 3) {
var G__34536__i = 0, G__34536__a = new Array(arguments.length -  3);
while (G__34536__i < G__34536__a.length) {G__34536__a[G__34536__i] = arguments[G__34536__i + 3]; ++G__34536__i;}
G__34535 = new cljs.core.IndexedSeq(G__34536__a,0,null);
}
return G__34531__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, G__34535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34531.cljs$lang$maxFixedArity = 3;
G__34531.cljs$lang$applyTo = G__34531__4.cljs$lang$applyTo;
G__34531.cljs$core$IFn$_invoke$arity$0 = G__34531__0;
G__34531.cljs$core$IFn$_invoke$arity$1 = G__34531__1;
G__34531.cljs$core$IFn$_invoke$arity$2 = G__34531__2;
G__34531.cljs$core$IFn$_invoke$arity$3 = G__34531__3;
G__34531.cljs$core$IFn$_invoke$arity$variadic = G__34531__4.cljs$core$IFn$_invoke$arity$variadic;
return G__34531;
})()
}));

(hyperfiddle.electric.impl.runtime.juxt_with.cljs$core$IFn$_invoke$arity$2 = (function (f,g){
return (function() {
var G__34537 = null;
var G__34537__0 = (function (){
var G__33863 = (g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__33863) : f.call(null,G__33863));
});
var G__34537__1 = (function (a){
var G__33868 = (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(a) : g.call(null,a));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__33868) : f.call(null,G__33868));
});
var G__34537__2 = (function (a,b){
var G__33873 = (g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(a,b) : g.call(null,a,b));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__33873) : f.call(null,G__33873));
});
var G__34537__3 = (function (a,b,c){
var G__33875 = (g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(a,b,c) : g.call(null,a,b,c));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__33875) : f.call(null,G__33875));
});
var G__34537__4 = (function() { 
var G__34539__delegate = function (a,b,c,ds){
var G__33880 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,a,b,c,ds);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__33880) : f.call(null,G__33880));
};
var G__34539 = function (a,b,c,var_args){
var ds = null;
if (arguments.length > 3) {
var G__34541__i = 0, G__34541__a = new Array(arguments.length -  3);
while (G__34541__i < G__34541__a.length) {G__34541__a[G__34541__i] = arguments[G__34541__i + 3]; ++G__34541__i;}
  ds = new cljs.core.IndexedSeq(G__34541__a,0,null);
} 
return G__34539__delegate.call(this,a,b,c,ds);};
G__34539.cljs$lang$maxFixedArity = 3;
G__34539.cljs$lang$applyTo = (function (arglist__34542){
var a = cljs.core.first(arglist__34542);
arglist__34542 = cljs.core.next(arglist__34542);
var b = cljs.core.first(arglist__34542);
arglist__34542 = cljs.core.next(arglist__34542);
var c = cljs.core.first(arglist__34542);
var ds = cljs.core.rest(arglist__34542);
return G__34539__delegate(a,b,c,ds);
});
G__34539.cljs$core$IFn$_invoke$arity$variadic = G__34539__delegate;
return G__34539;
})()
;
G__34537 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 0:
return G__34537__0.call(this);
case 1:
return G__34537__1.call(this,a);
case 2:
return G__34537__2.call(this,a,b);
case 3:
return G__34537__3.call(this,a,b,c);
default:
var G__34543 = null;
if (arguments.length > 3) {
var G__34544__i = 0, G__34544__a = new Array(arguments.length -  3);
while (G__34544__i < G__34544__a.length) {G__34544__a[G__34544__i] = arguments[G__34544__i + 3]; ++G__34544__i;}
G__34543 = new cljs.core.IndexedSeq(G__34544__a,0,null);
}
return G__34537__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, G__34543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34537.cljs$lang$maxFixedArity = 3;
G__34537.cljs$lang$applyTo = G__34537__4.cljs$lang$applyTo;
G__34537.cljs$core$IFn$_invoke$arity$0 = G__34537__0;
G__34537.cljs$core$IFn$_invoke$arity$1 = G__34537__1;
G__34537.cljs$core$IFn$_invoke$arity$2 = G__34537__2;
G__34537.cljs$core$IFn$_invoke$arity$3 = G__34537__3;
G__34537.cljs$core$IFn$_invoke$arity$variadic = G__34537__4.cljs$core$IFn$_invoke$arity$variadic;
return G__34537;
})()
}));

(hyperfiddle.electric.impl.runtime.juxt_with.cljs$core$IFn$_invoke$arity$3 = (function (f,g,h){
return (function() {
var G__34546 = null;
var G__34546__0 = (function (){
var G__33881 = (g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null));
var G__33882 = (h.cljs$core$IFn$_invoke$arity$0 ? h.cljs$core$IFn$_invoke$arity$0() : h.call(null));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__33881,G__33882) : f.call(null,G__33881,G__33882));
});
var G__34546__1 = (function (a){
var G__33883 = (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(a) : g.call(null,a));
var G__33884 = (h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(a) : h.call(null,a));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__33883,G__33884) : f.call(null,G__33883,G__33884));
});
var G__34546__2 = (function (a,b){
var G__33885 = (g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(a,b) : g.call(null,a,b));
var G__33886 = (h.cljs$core$IFn$_invoke$arity$2 ? h.cljs$core$IFn$_invoke$arity$2(a,b) : h.call(null,a,b));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__33885,G__33886) : f.call(null,G__33885,G__33886));
});
var G__34546__3 = (function (a,b,c){
var G__33888 = (g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(a,b,c) : g.call(null,a,b,c));
var G__33889 = (h.cljs$core$IFn$_invoke$arity$3 ? h.cljs$core$IFn$_invoke$arity$3(a,b,c) : h.call(null,a,b,c));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__33888,G__33889) : f.call(null,G__33888,G__33889));
});
var G__34546__4 = (function() { 
var G__34548__delegate = function (a,b,c,ds){
var G__33890 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,a,b,c,ds);
var G__33891 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(h,a,b,c,ds);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__33890,G__33891) : f.call(null,G__33890,G__33891));
};
var G__34548 = function (a,b,c,var_args){
var ds = null;
if (arguments.length > 3) {
var G__34549__i = 0, G__34549__a = new Array(arguments.length -  3);
while (G__34549__i < G__34549__a.length) {G__34549__a[G__34549__i] = arguments[G__34549__i + 3]; ++G__34549__i;}
  ds = new cljs.core.IndexedSeq(G__34549__a,0,null);
} 
return G__34548__delegate.call(this,a,b,c,ds);};
G__34548.cljs$lang$maxFixedArity = 3;
G__34548.cljs$lang$applyTo = (function (arglist__34550){
var a = cljs.core.first(arglist__34550);
arglist__34550 = cljs.core.next(arglist__34550);
var b = cljs.core.first(arglist__34550);
arglist__34550 = cljs.core.next(arglist__34550);
var c = cljs.core.first(arglist__34550);
var ds = cljs.core.rest(arglist__34550);
return G__34548__delegate(a,b,c,ds);
});
G__34548.cljs$core$IFn$_invoke$arity$variadic = G__34548__delegate;
return G__34548;
})()
;
G__34546 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 0:
return G__34546__0.call(this);
case 1:
return G__34546__1.call(this,a);
case 2:
return G__34546__2.call(this,a,b);
case 3:
return G__34546__3.call(this,a,b,c);
default:
var G__34552 = null;
if (arguments.length > 3) {
var G__34553__i = 0, G__34553__a = new Array(arguments.length -  3);
while (G__34553__i < G__34553__a.length) {G__34553__a[G__34553__i] = arguments[G__34553__i + 3]; ++G__34553__i;}
G__34552 = new cljs.core.IndexedSeq(G__34553__a,0,null);
}
return G__34546__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, G__34552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34546.cljs$lang$maxFixedArity = 3;
G__34546.cljs$lang$applyTo = G__34546__4.cljs$lang$applyTo;
G__34546.cljs$core$IFn$_invoke$arity$0 = G__34546__0;
G__34546.cljs$core$IFn$_invoke$arity$1 = G__34546__1;
G__34546.cljs$core$IFn$_invoke$arity$2 = G__34546__2;
G__34546.cljs$core$IFn$_invoke$arity$3 = G__34546__3;
G__34546.cljs$core$IFn$_invoke$arity$variadic = G__34546__4.cljs$core$IFn$_invoke$arity$variadic;
return G__34546;
})()
}));

(hyperfiddle.electric.impl.runtime.juxt_with.cljs$core$IFn$_invoke$arity$4 = (function (f,g,h,i){
return (function() {
var G__34554 = null;
var G__34554__0 = (function (){
var G__33905 = (g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null));
var G__33906 = (h.cljs$core$IFn$_invoke$arity$0 ? h.cljs$core$IFn$_invoke$arity$0() : h.call(null));
var G__33907 = (i.cljs$core$IFn$_invoke$arity$0 ? i.cljs$core$IFn$_invoke$arity$0() : i.call(null));
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__33905,G__33906,G__33907) : f.call(null,G__33905,G__33906,G__33907));
});
var G__34554__1 = (function (a){
var G__33913 = (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(a) : g.call(null,a));
var G__33914 = (h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(a) : h.call(null,a));
var G__33915 = (i.cljs$core$IFn$_invoke$arity$1 ? i.cljs$core$IFn$_invoke$arity$1(a) : i.call(null,a));
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__33913,G__33914,G__33915) : f.call(null,G__33913,G__33914,G__33915));
});
var G__34554__2 = (function (a,b){
var G__33929 = (g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(a,b) : g.call(null,a,b));
var G__33930 = (h.cljs$core$IFn$_invoke$arity$2 ? h.cljs$core$IFn$_invoke$arity$2(a,b) : h.call(null,a,b));
var G__33931 = (i.cljs$core$IFn$_invoke$arity$2 ? i.cljs$core$IFn$_invoke$arity$2(a,b) : i.call(null,a,b));
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__33929,G__33930,G__33931) : f.call(null,G__33929,G__33930,G__33931));
});
var G__34554__3 = (function (a,b,c){
var G__33932 = (g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(a,b,c) : g.call(null,a,b,c));
var G__33933 = (h.cljs$core$IFn$_invoke$arity$3 ? h.cljs$core$IFn$_invoke$arity$3(a,b,c) : h.call(null,a,b,c));
var G__33934 = (i.cljs$core$IFn$_invoke$arity$3 ? i.cljs$core$IFn$_invoke$arity$3(a,b,c) : i.call(null,a,b,c));
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__33932,G__33933,G__33934) : f.call(null,G__33932,G__33933,G__33934));
});
var G__34554__4 = (function() { 
var G__34556__delegate = function (a,b,c,ds){
var G__33939 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,a,b,c,ds);
var G__33940 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(h,a,b,c,ds);
var G__33941 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(i,a,b,c,ds);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__33939,G__33940,G__33941) : f.call(null,G__33939,G__33940,G__33941));
};
var G__34556 = function (a,b,c,var_args){
var ds = null;
if (arguments.length > 3) {
var G__34557__i = 0, G__34557__a = new Array(arguments.length -  3);
while (G__34557__i < G__34557__a.length) {G__34557__a[G__34557__i] = arguments[G__34557__i + 3]; ++G__34557__i;}
  ds = new cljs.core.IndexedSeq(G__34557__a,0,null);
} 
return G__34556__delegate.call(this,a,b,c,ds);};
G__34556.cljs$lang$maxFixedArity = 3;
G__34556.cljs$lang$applyTo = (function (arglist__34558){
var a = cljs.core.first(arglist__34558);
arglist__34558 = cljs.core.next(arglist__34558);
var b = cljs.core.first(arglist__34558);
arglist__34558 = cljs.core.next(arglist__34558);
var c = cljs.core.first(arglist__34558);
var ds = cljs.core.rest(arglist__34558);
return G__34556__delegate(a,b,c,ds);
});
G__34556.cljs$core$IFn$_invoke$arity$variadic = G__34556__delegate;
return G__34556;
})()
;
G__34554 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 0:
return G__34554__0.call(this);
case 1:
return G__34554__1.call(this,a);
case 2:
return G__34554__2.call(this,a,b);
case 3:
return G__34554__3.call(this,a,b,c);
default:
var G__34559 = null;
if (arguments.length > 3) {
var G__34560__i = 0, G__34560__a = new Array(arguments.length -  3);
while (G__34560__i < G__34560__a.length) {G__34560__a[G__34560__i] = arguments[G__34560__i + 3]; ++G__34560__i;}
G__34559 = new cljs.core.IndexedSeq(G__34560__a,0,null);
}
return G__34554__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, G__34559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34554.cljs$lang$maxFixedArity = 3;
G__34554.cljs$lang$applyTo = G__34554__4.cljs$lang$applyTo;
G__34554.cljs$core$IFn$_invoke$arity$0 = G__34554__0;
G__34554.cljs$core$IFn$_invoke$arity$1 = G__34554__1;
G__34554.cljs$core$IFn$_invoke$arity$2 = G__34554__2;
G__34554.cljs$core$IFn$_invoke$arity$3 = G__34554__3;
G__34554.cljs$core$IFn$_invoke$arity$variadic = G__34554__4.cljs$core$IFn$_invoke$arity$variadic;
return G__34554;
})()
}));

(hyperfiddle.electric.impl.runtime.juxt_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,g,h,i,js){
return (function() {
var G__34562 = null;
var G__34562__0 = (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null)),(h.cljs$core$IFn$_invoke$arity$0 ? h.cljs$core$IFn$_invoke$arity$0() : h.call(null)),(i.cljs$core$IFn$_invoke$arity$0 ? i.cljs$core$IFn$_invoke$arity$0() : i.call(null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__33836_SHARP_){
return (p1__33836_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__33836_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__33836_SHARP_.call(null));
}),js));
});
var G__34562__1 = (function (a){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(a) : g.call(null,a)),(h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(a) : h.call(null,a)),(i.cljs$core$IFn$_invoke$arity$1 ? i.cljs$core$IFn$_invoke$arity$1(a) : i.call(null,a)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__33837_SHARP_){
return (p1__33837_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33837_SHARP_.cljs$core$IFn$_invoke$arity$1(a) : p1__33837_SHARP_.call(null,a));
}),js));
});
var G__34562__2 = (function (a,b){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(a,b) : g.call(null,a,b)),(h.cljs$core$IFn$_invoke$arity$2 ? h.cljs$core$IFn$_invoke$arity$2(a,b) : h.call(null,a,b)),(i.cljs$core$IFn$_invoke$arity$2 ? i.cljs$core$IFn$_invoke$arity$2(a,b) : i.call(null,a,b)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__33838_SHARP_){
return (p1__33838_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p1__33838_SHARP_.cljs$core$IFn$_invoke$arity$2(a,b) : p1__33838_SHARP_.call(null,a,b));
}),js));
});
var G__34562__3 = (function (a,b,c){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(a,b,c) : g.call(null,a,b,c)),(h.cljs$core$IFn$_invoke$arity$3 ? h.cljs$core$IFn$_invoke$arity$3(a,b,c) : h.call(null,a,b,c)),(i.cljs$core$IFn$_invoke$arity$3 ? i.cljs$core$IFn$_invoke$arity$3(a,b,c) : i.call(null,a,b,c)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__33839_SHARP_){
return (p1__33839_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p1__33839_SHARP_.cljs$core$IFn$_invoke$arity$3(a,b,c) : p1__33839_SHARP_.call(null,a,b,c));
}),js));
});
var G__34562__4 = (function() { 
var G__34564__delegate = function (a,b,c,ds){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,a,b,c,ds),cljs.core.apply.cljs$core$IFn$_invoke$arity$5(h,a,b,c,ds),cljs.core.apply.cljs$core$IFn$_invoke$arity$5(i,a,b,c,ds),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__33840_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(p1__33840_SHARP_,a,b,c,ds);
}),js));
};
var G__34564 = function (a,b,c,var_args){
var ds = null;
if (arguments.length > 3) {
var G__34565__i = 0, G__34565__a = new Array(arguments.length -  3);
while (G__34565__i < G__34565__a.length) {G__34565__a[G__34565__i] = arguments[G__34565__i + 3]; ++G__34565__i;}
  ds = new cljs.core.IndexedSeq(G__34565__a,0,null);
} 
return G__34564__delegate.call(this,a,b,c,ds);};
G__34564.cljs$lang$maxFixedArity = 3;
G__34564.cljs$lang$applyTo = (function (arglist__34566){
var a = cljs.core.first(arglist__34566);
arglist__34566 = cljs.core.next(arglist__34566);
var b = cljs.core.first(arglist__34566);
arglist__34566 = cljs.core.next(arglist__34566);
var c = cljs.core.first(arglist__34566);
var ds = cljs.core.rest(arglist__34566);
return G__34564__delegate(a,b,c,ds);
});
G__34564.cljs$core$IFn$_invoke$arity$variadic = G__34564__delegate;
return G__34564;
})()
;
G__34562 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 0:
return G__34562__0.call(this);
case 1:
return G__34562__1.call(this,a);
case 2:
return G__34562__2.call(this,a,b);
case 3:
return G__34562__3.call(this,a,b,c);
default:
var G__34567 = null;
if (arguments.length > 3) {
var G__34568__i = 0, G__34568__a = new Array(arguments.length -  3);
while (G__34568__i < G__34568__a.length) {G__34568__a[G__34568__i] = arguments[G__34568__i + 3]; ++G__34568__i;}
G__34567 = new cljs.core.IndexedSeq(G__34568__a,0,null);
}
return G__34562__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, G__34567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34562.cljs$lang$maxFixedArity = 3;
G__34562.cljs$lang$applyTo = G__34562__4.cljs$lang$applyTo;
G__34562.cljs$core$IFn$_invoke$arity$0 = G__34562__0;
G__34562.cljs$core$IFn$_invoke$arity$1 = G__34562__1;
G__34562.cljs$core$IFn$_invoke$arity$2 = G__34562__2;
G__34562.cljs$core$IFn$_invoke$arity$3 = G__34562__3;
G__34562.cljs$core$IFn$_invoke$arity$variadic = G__34562__4.cljs$core$IFn$_invoke$arity$variadic;
return G__34562;
})()
}));

/** @this {Function} */
(hyperfiddle.electric.impl.runtime.juxt_with.cljs$lang$applyTo = (function (seq33842){
var G__33843 = cljs.core.first(seq33842);
var seq33842__$1 = cljs.core.next(seq33842);
var G__33844 = cljs.core.first(seq33842__$1);
var seq33842__$2 = cljs.core.next(seq33842__$1);
var G__33845 = cljs.core.first(seq33842__$2);
var seq33842__$3 = cljs.core.next(seq33842__$2);
var G__33846 = cljs.core.first(seq33842__$3);
var seq33842__$4 = cljs.core.next(seq33842__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33843,G__33844,G__33845,G__33846,seq33842__$4);
}));

(hyperfiddle.electric.impl.runtime.juxt_with.cljs$lang$maxFixedArity = (4));

hyperfiddle.electric.impl.runtime.globals = (function hyperfiddle$electric$impl$runtime$globals(program){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace,cljs.core.name),cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.vector_QMARK_),cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p__34023){
var vec__34029 = p__34023;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34029,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34029,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"global","global",93595047),a);
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.second),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.distinct.cljs$core$IFn$_invoke$arity$0()], 0)),cljs.core.tree_seq(cljs.core.coll_QMARK_,cljs.core.seq,program)], 0)));
});
hyperfiddle.electric.impl.runtime.missing_exports = (function hyperfiddle$electric$impl$runtime$missing_exports(resolvef,program){
return cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(resolvef,new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","not-found","hyperfiddle.electric.impl.runtime/not-found",-1898753095)),cljs.core.identity)),cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__34057_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","not-found","hyperfiddle.electric.impl.runtime/not-found",-1898753095),cljs.core.first(p1__34057_SHARP_));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.second),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol),hyperfiddle.electric.impl.runtime.globals(program)], 0));
});
hyperfiddle.electric.impl.runtime.dynamic_resolve = (function hyperfiddle$electric$impl$runtime$dynamic_resolve(nf,x){
return nf;
});
hyperfiddle.electric.impl.runtime.eval = (function hyperfiddle$electric$impl$runtime$eval(var_args){
var G__34150 = arguments.length;
switch (G__34150) {
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
var G__34175 = r;
var G__34175__$1 = (((G__34175 instanceof cljs.core.Keyword))?G__34175.fqn:null);
switch (G__34175__$1) {
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
var G__34588__delegate = function (args){
return hyperfiddle.electric.impl.runtime.check_failure(debug_info,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(form,pubs,args));
};
var G__34588 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34589__i = 0, G__34589__a = new Array(arguments.length -  0);
while (G__34589__i < G__34589__a.length) {G__34589__a[G__34589__i] = arguments[G__34589__i + 0]; ++G__34589__i;}
  args = new cljs.core.IndexedSeq(G__34589__a,0,null);
} 
return G__34588__delegate.call(this,args);};
G__34588.cljs$lang$maxFixedArity = 0;
G__34588.cljs$lang$applyTo = (function (arglist__34590){
var args = cljs.core.seq(arglist__34590);
return G__34588__delegate(args);
});
G__34588.cljs$core$IFn$_invoke$arity$variadic = G__34588__delegate;
return G__34588;
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
var G__34591__delegate = function (debug_info,forms){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.juxt_with,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.runtime.latest_apply,debug_info),forms);
};
var G__34591 = function (debug_info,var_args){
var forms = null;
if (arguments.length > 1) {
var G__34592__i = 0, G__34592__a = new Array(arguments.length -  1);
while (G__34592__i < G__34592__a.length) {G__34592__a[G__34592__i] = arguments[G__34592__i + 1]; ++G__34592__i;}
  forms = new cljs.core.IndexedSeq(G__34592__a,0,null);
} 
return G__34591__delegate.call(this,debug_info,forms);};
G__34591.cljs$lang$maxFixedArity = 1;
G__34591.cljs$lang$applyTo = (function (arglist__34593){
var debug_info = cljs.core.first(arglist__34593);
var forms = cljs.core.rest(arglist__34593);
return G__34591__delegate(debug_info,forms);
});
G__34591.cljs$core$IFn$_invoke$arity$variadic = G__34591__delegate;
return G__34591;
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
var G__34176 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pubs,hyperfiddle.electric.impl.runtime.signal((form.cljs$core$IFn$_invoke$arity$3 ? form.cljs$core$IFn$_invoke$arity$3(pubs,frame,vars) : form.call(null,pubs,frame,vars))));
var G__34177 = frame;
var G__34178 = vars;
return (cont.cljs$core$IFn$_invoke$arity$3 ? cont.cljs$core$IFn$_invoke$arity$3(G__34176,G__34177,G__34178) : cont.call(null,G__34176,G__34177,G__34178));
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
var temp__5806__auto__ = (function (){var G__34179 = ns;
if((G__34179 == null)){
return null;
} else {
return cljs.core.find_ns(G__34179);
}
})();
if((temp__5806__auto__ == null)){
return cljs.core.constantly(hyperfiddle.electric.impl.runtime.pure(cljs.core.eval(form)));
} else {
var ns__$1 = temp__5806__auto__;
return cljs.core.constantly(hyperfiddle.electric.impl.runtime.pure((function (){var _STAR_ns_STAR__orig_val__34180 = cljs.core._STAR_ns_STAR_;
var _STAR_ns_STAR__temp_val__34181 = ns__$1;
(cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__34181);

try{return cljs.core.eval(form);
}finally {(cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__34180);
}})()));
}
})]));
}));

(hyperfiddle.electric.impl.runtime.eval.cljs$lang$maxFixedArity = 2);

hyperfiddle.electric.impl.runtime.queue = (function hyperfiddle$electric$impl$runtime$queue(){
var q = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((0));
return (function() {
var G__34599 = null;
var G__34599__0 = (function (){
if((q.length === (0))){
throw (new Error("No such element."));
} else {
}

return q.shift();
});
var G__34599__1 = (function (x){
q.push(x);

return x;
});
G__34599 = function(x){
switch(arguments.length){
case 0:
return G__34599__0.call(this);
case 1:
return G__34599__1.call(this,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34599.cljs$core$IFn$_invoke$arity$0 = G__34599__0;
G__34599.cljs$core$IFn$_invoke$arity$1 = G__34599__1;
return G__34599;
})()
});

//# sourceMappingURL=hyperfiddle.electric.impl.runtime.js.map
