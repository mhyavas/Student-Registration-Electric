goog.provide('hyperfiddle.electric.impl.runtime');
hyperfiddle.electric.impl.runtime.fail = (function hyperfiddle$electric$impl$runtime$fail(x){
throw x;
});
hyperfiddle.electric.impl.runtime.failure = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$1((function (p1__46954_SHARP_){
if((p1__46954_SHARP_ instanceof hyperfiddle.electric.Failure)){
return p1__46954_SHARP_;
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
var len__5769__auto___47899 = arguments.length;
var i__5770__auto___47900 = (0);
while(true){
if((i__5770__auto___47900 < len__5769__auto___47899)){
args__5775__auto__.push((arguments[i__5770__auto___47900]));

var G__47901 = (i__5770__auto___47900 + (1));
i__5770__auto___47900 = G__47901;
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
var G__47902__delegate = function (f,args__$1){
var temp__5802__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.failure,f,args__$1);
if(cljs.core.truth_(temp__5802__auto__)){
var err = temp__5802__auto__;
return hyperfiddle.electric.debug.error(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.select_debug_info(debug_info),new cljs.core.Keyword("hyperfiddle.electric.debug","args","hyperfiddle.electric.debug/args",-1101355176),args__$1),err);
} else {
try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);
}catch (e46977){var e = e46977;
return hyperfiddle.electric.debug.error(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.select_debug_info(debug_info),new cljs.core.Keyword("hyperfiddle.electric.debug","args","hyperfiddle.electric.debug/args",-1101355176),args__$1),(new hyperfiddle.electric.Failure(e)));
}}
};
var G__47902 = function (f,var_args){
var args__$1 = null;
if (arguments.length > 1) {
var G__47903__i = 0, G__47903__a = new Array(arguments.length -  1);
while (G__47903__i < G__47903__a.length) {G__47903__a[G__47903__i] = arguments[G__47903__i + 1]; ++G__47903__i;}
  args__$1 = new cljs.core.IndexedSeq(G__47903__a,0,null);
} 
return G__47902__delegate.call(this,f,args__$1);};
G__47902.cljs$lang$maxFixedArity = 1;
G__47902.cljs$lang$applyTo = (function (arglist__47904){
var f = cljs.core.first(arglist__47904);
var args__$1 = cljs.core.rest(arglist__47904);
return G__47902__delegate(f,args__$1);
});
G__47902.cljs$core$IFn$_invoke$arity$variadic = G__47902__delegate;
return G__47902;
})()
,args);
}));

(hyperfiddle.electric.impl.runtime.latest_apply.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(hyperfiddle.electric.impl.runtime.latest_apply.cljs$lang$applyTo = (function (seq46973){
var G__46974 = cljs.core.first(seq46973);
var seq46973__$1 = cljs.core.next(seq46973);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46974,seq46973__$1);
}));

hyperfiddle.electric.impl.runtime.latest_first = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(missionary.core.latest,(function (x,y){
if((y instanceof hyperfiddle.electric.Failure)){
return y;
} else {
return x;
}
}));
hyperfiddle.electric.impl.runtime.pure = (function hyperfiddle$electric$impl$runtime$pure(x){
return missionary.core.cp_STAR_((function (){var cr46985_block_0 = (function hyperfiddle$electric$impl$runtime$pure_$_cr46985_block_0(cr46985_state){
try{var cr46985_place_0 = x;
(cr46985_state[(0)] = null);

return cr46985_place_0;
}catch (e46993){var cr46985_exception = e46993;
(cr46985_state[(0)] = null);

throw cr46985_exception;
}});
return cloroutine.impl.coroutine((function (){var G__46995 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__46995[(0)] = cr46985_block_0);

return G__46995;
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
(hyperfiddle.electric.impl.runtime.It.prototype.call = (function (unused__27532__auto__){
var self__ = this;
var self__ = this;
var G__47006 = (arguments.length - (1));
switch (G__47006) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.runtime.It.prototype.apply = (function (self__,args47004){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args47004)));
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
hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47022 = (function (it,meta47023){
this.it = it;
this.meta47023 = meta47023;
this.cljs$lang$protocol_mask$partition0$ = 425985;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47022.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47024,meta47023__$1){
var self__ = this;
var _47024__$1 = this;
return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47022(self__.it,meta47023__$1));
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47022.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47024){
var self__ = this;
var _47024__$1 = this;
return self__.meta47023;
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47022.prototype.call = (function (unused__27532__auto__){
var self__ = this;
var self__ = this;
var G__47028 = (arguments.length - (1));
switch (G__47028) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47022.prototype.apply = (function (self__,args47025){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args47025)));
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47022.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
return (self__.it.cljs$core$IFn$_invoke$arity$0 ? self__.it.cljs$core$IFn$_invoke$arity$0() : self__.it.call(null));
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47022.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
try{return cljs.core.deref(self__.it);
}catch (e47034){if((e47034 instanceof missionary.Cancelled)){
var e = e47034;
return (new hyperfiddle.electric.Failure(e));
} else {
throw e47034;

}
}}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47022.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"it","it",-1630841225,null),new cljs.core.Symbol(null,"meta47023","meta47023",-728986542,null)], null);
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47022.cljs$lang$type = true);

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47022.cljs$lang$ctorStr = "hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime47022");

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47022.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime47022");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime47022.
 */
hyperfiddle.electric.impl.runtime.__GT_t_hyperfiddle$electric$impl$runtime47022 = (function hyperfiddle$electric$impl$runtime$__GT_t_hyperfiddle$electric$impl$runtime47022(it,meta47023){
return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47022(it,meta47023));
});


hyperfiddle.electric.impl.runtime.lift_cancelled = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,(function (it){
return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47022(it,cljs.core.PersistentArrayMap.EMPTY));
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
var G__47084 = arguments.length;
switch (G__47084) {
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
var len__5769__auto___47913 = arguments.length;
var i__5770__auto___47914 = (0);
while(true){
if((i__5770__auto___47914 < len__5769__auto___47913)){
args_arr__5794__auto__.push((arguments[i__5770__auto___47914]));

var G__47918 = (i__5770__auto___47914 + (1));
i__5770__auto___47914 = G__47918;
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
return (arr[slot] = (function (){var G__47094 = (arr[slot]);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__47094) : f.call(null,G__47094));
})());
}));

(hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$4 = (function (arr,slot,f,a){
return (arr[slot] = (function (){var G__47098 = (arr[slot]);
var G__47099 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__47098,G__47099) : f.call(null,G__47098,G__47099));
})());
}));

(hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$5 = (function (arr,slot,f,a,b){
return (arr[slot] = (function (){var G__47103 = (arr[slot]);
var G__47104 = a;
var G__47105 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__47103,G__47104,G__47105) : f.call(null,G__47103,G__47104,G__47105));
})());
}));

(hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$6 = (function (arr,slot,f,a,b,c){
return (arr[slot] = (function (){var G__47106 = (arr[slot]);
var G__47107 = a;
var G__47108 = b;
var G__47109 = c;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__47106,G__47107,G__47108,G__47109) : f.call(null,G__47106,G__47107,G__47108,G__47109));
})());
}));

(hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$variadic = (function (arr,slot,f,a,b,c,ds){
return (arr[slot] = cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,(arr[slot]),a,b,c,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ds], 0)));
}));

/** @this {Function} */
(hyperfiddle.electric.impl.runtime.aswap.cljs$lang$applyTo = (function (seq47077){
var G__47078 = cljs.core.first(seq47077);
var seq47077__$1 = cljs.core.next(seq47077);
var G__47079 = cljs.core.first(seq47077__$1);
var seq47077__$2 = cljs.core.next(seq47077__$1);
var G__47080 = cljs.core.first(seq47077__$2);
var seq47077__$3 = cljs.core.next(seq47077__$2);
var G__47081 = cljs.core.first(seq47077__$3);
var seq47077__$4 = cljs.core.next(seq47077__$3);
var G__47082 = cljs.core.first(seq47077__$4);
var seq47077__$5 = cljs.core.next(seq47077__$4);
var G__47083 = cljs.core.first(seq47077__$5);
var seq47077__$6 = cljs.core.next(seq47077__$5);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47078,G__47079,G__47080,G__47081,G__47082,G__47083,seq47077__$6);
}));

(hyperfiddle.electric.impl.runtime.aswap.cljs$lang$maxFixedArity = (6));

hyperfiddle.electric.impl.runtime.doto_aset = (function hyperfiddle$electric$impl$runtime$doto_aset(arr,k,v){
var G__47115 = arr;
(G__47115[(k | (0))] = v);

return G__47115;
});
hyperfiddle.electric.impl.runtime.make_context = (function hyperfiddle$electric$impl$runtime$make_context(){
var G__47123 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.runtime.context_slots);
(G__47123[hyperfiddle.electric.impl.runtime.context_slot_local_id] = cljs.core.identity((0)));

(G__47123[hyperfiddle.electric.impl.runtime.context_slot_remote_id] = cljs.core.identity((0)));

(G__47123[hyperfiddle.electric.impl.runtime.context_slot_pending_rpos] = cljs.core.identity((0)));

(G__47123[hyperfiddle.electric.impl.runtime.context_slot_pending_wpos] = cljs.core.identity((0)));

(G__47123[hyperfiddle.electric.impl.runtime.context_slot_pending_buffer] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2)));

(G__47123[hyperfiddle.electric.impl.runtime.context_slot_frame_store] = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY));

return G__47123;
});
hyperfiddle.electric.impl.runtime.make_tier = (function hyperfiddle$electric$impl$runtime$make_tier(parent,position){
return ((parent[hyperfiddle.electric.impl.runtime.frame_slot_tiers])[(position | (0))] = (function (){var G__47131 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.runtime.tier_slots);
(G__47131[hyperfiddle.electric.impl.runtime.tier_slot_parent] = parent);

(G__47131[hyperfiddle.electric.impl.runtime.tier_slot_position] = position);

(G__47131[hyperfiddle.electric.impl.runtime.tier_slot_buffer] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((8)));

(G__47131[hyperfiddle.electric.impl.runtime.tier_slot_size] = cljs.core.identity(((0) | (0))));

(G__47131[hyperfiddle.electric.impl.runtime.tier_slot_foreigns] = cljs.core.PersistentArrayMap.EMPTY);

(G__47131[hyperfiddle.electric.impl.runtime.tier_slot_hooks] = cljs.core.PersistentArrayMap.EMPTY);

return G__47131;
})());
});
hyperfiddle.electric.impl.runtime.make_frame = (function hyperfiddle$electric$impl$runtime$make_frame(context,parent,id,position,foreign,static$,dynamic,variable_count,source_count,constant_count,target_count,output_count,input_count,buffer,vars,boot){
var tier_count = (variable_count + source_count);
var frame = (function (){var G__47133 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.runtime.frame_slots);
(G__47133[hyperfiddle.electric.impl.runtime.frame_slot_context] = context);

(G__47133[hyperfiddle.electric.impl.runtime.frame_slot_parent] = parent);

(G__47133[hyperfiddle.electric.impl.runtime.frame_slot_id] = id);

(G__47133[hyperfiddle.electric.impl.runtime.frame_slot_position] = position);

(G__47133[hyperfiddle.electric.impl.runtime.frame_slot_foreign] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cljs.core.count(foreign)));

(G__47133[hyperfiddle.electric.impl.runtime.frame_slot_static] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cljs.core.count(static$)));

(G__47133[hyperfiddle.electric.impl.runtime.frame_slot_dynamic] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cljs.core.count(dynamic)));

(G__47133[hyperfiddle.electric.impl.runtime.frame_slot_variables] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(variable_count));

(G__47133[hyperfiddle.electric.impl.runtime.frame_slot_sources] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(source_count));

(G__47133[hyperfiddle.electric.impl.runtime.frame_slot_targets] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(target_count));

(G__47133[hyperfiddle.electric.impl.runtime.frame_slot_inputs] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(input_count));

(G__47133[hyperfiddle.electric.impl.runtime.frame_slot_tiers] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(tier_count));

(G__47133[hyperfiddle.electric.impl.runtime.frame_slot_constants] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(constant_count));

return G__47133;
})();
var n__5636__auto___47942 = tier_count;
var i_47944 = (0);
while(true){
if((i_47944 < n__5636__auto___47942)){
hyperfiddle.electric.impl.runtime.make_tier(frame,i_47944);

var G__47945 = (i_47944 + (1));
i_47944 = G__47945;
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

var fexpr__47139 = (input[hyperfiddle.electric.impl.runtime.input_slot_notifier]);
return (fexpr__47139.cljs$core$IFn$_invoke$arity$0 ? fexpr__47139.cljs$core$IFn$_invoke$arity$0() : fexpr__47139.call(null));
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
var frame_47951 = (input[hyperfiddle.electric.impl.runtime.input_slot_frame]);
var context_47952 = (frame_47951[hyperfiddle.electric.impl.runtime.frame_slot_context]);
var check_47953 = (context_47952[hyperfiddle.electric.impl.runtime.context_slot_check]);
(context_47952[hyperfiddle.electric.impl.runtime.context_slot_check] = input);

(input[hyperfiddle.electric.impl.runtime.input_slot_check] = check_47953);

if(((context_47952[hyperfiddle.electric.impl.runtime.context_slot_event]) == null)){
(context_47952[hyperfiddle.electric.impl.runtime.context_slot_event] = hyperfiddle.electric.impl.runtime.empty_event);

var fexpr__47141_47955 = (context_47952[hyperfiddle.electric.impl.runtime.context_slot_notifier]);
(fexpr__47141_47955.cljs$core$IFn$_invoke$arity$0 ? fexpr__47141_47955.cljs$core$IFn$_invoke$arity$0() : fexpr__47141_47955.call(null));
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

(output[hyperfiddle.electric.impl.runtime.output_slot_iterator] = (function (){var G__47146 = (function (){
return hyperfiddle.electric.impl.runtime.output_dirty(output);
});
var G__47147 = (function (){
(output[hyperfiddle.electric.impl.runtime.output_slot_done] = true);

return hyperfiddle.electric.impl.runtime.output_dirty(output);
});
var fexpr__47145 = (output[hyperfiddle.electric.impl.runtime.output_slot_iterator]);
return (fexpr__47145.cljs$core$IFn$_invoke$arity$2 ? fexpr__47145.cljs$core$IFn$_invoke$arity$2(G__47146,G__47147) : fexpr__47145.call(null,G__47146,G__47147));
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
var fexpr__47149 = (input[hyperfiddle.electric.impl.runtime.input_slot_notifier]);
return (fexpr__47149.cljs$core$IFn$_invoke$arity$0 ? fexpr__47149.cljs$core$IFn$_invoke$arity$0() : fexpr__47149.call(null));
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

var fexpr__47152 = (input[hyperfiddle.electric.impl.runtime.input_slot_terminator]);
return (fexpr__47152.cljs$core$IFn$_invoke$arity$0 ? fexpr__47152.cljs$core$IFn$_invoke$arity$0() : fexpr__47152.call(null));
} else {
return null;
}
});
hyperfiddle.electric.impl.runtime.update_event = (function hyperfiddle$electric$impl$runtime$update_event(var_args){
var args__5775__auto__ = [];
var len__5769__auto___47960 = arguments.length;
var i__5770__auto___47962 = (0);
while(true){
if((i__5770__auto___47962 < len__5769__auto___47960)){
args__5775__auto__.push((arguments[i__5770__auto___47962]));

var G__47963 = (i__5770__auto___47962 + (1));
i__5770__auto___47962 = G__47963;
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

var fexpr__47162 = (context[hyperfiddle.electric.impl.runtime.context_slot_notifier]);
return (fexpr__47162.cljs$core$IFn$_invoke$arity$0 ? fexpr__47162.cljs$core$IFn$_invoke$arity$0() : fexpr__47162.call(null));
} else {
var event = temp__5806__auto__;
return (context[hyperfiddle.electric.impl.runtime.context_slot_event] = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update,event,k,f,args));
}
}));

(hyperfiddle.electric.impl.runtime.update_event.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(hyperfiddle.electric.impl.runtime.update_event.cljs$lang$applyTo = (function (seq47153){
var G__47154 = cljs.core.first(seq47153);
var seq47153__$1 = cljs.core.next(seq47153);
var G__47155 = cljs.core.first(seq47153__$1);
var seq47153__$2 = cljs.core.next(seq47153__$1);
var G__47156 = cljs.core.first(seq47153__$2);
var seq47153__$3 = cljs.core.next(seq47153__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47154,G__47155,G__47156,seq47153__$3);
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
var x_47966 = cljs.core.deref((output[hyperfiddle.electric.impl.runtime.output_slot_iterator]));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((output[hyperfiddle.electric.impl.runtime.output_slot_current]),(output[hyperfiddle.electric.impl.runtime.output_slot_current] = x_47966))){
} else {
var buffer_47967 = (context[hyperfiddle.electric.impl.runtime.context_slot_pending_buffer]);
var wpos_47968 = (context[hyperfiddle.electric.impl.runtime.context_slot_pending_wpos]);
var temp__5806__auto___47969__$1 = (output[hyperfiddle.electric.impl.runtime.output_slot_time]);
if((temp__5806__auto___47969__$1 == null)){
hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$3(input,hyperfiddle.electric.impl.runtime.input_slot_pending,cljs.core.inc);
} else {
var t_47970 = temp__5806__auto___47969__$1;
var p_47971 = (output[hyperfiddle.electric.impl.runtime.output_slot_prev]);
var n_47972 = (output[hyperfiddle.electric.impl.runtime.output_slot_next]);
(buffer_47967[t_47970] = (((p_47971 === output))?null:(function (){
(p_47971[hyperfiddle.electric.impl.runtime.output_slot_next] = n_47972);

return (n_47972[hyperfiddle.electric.impl.runtime.output_slot_prev] = p_47971);
})()
));
}

(output[hyperfiddle.electric.impl.runtime.output_slot_time] = wpos_47968);

var temp__5806__auto___47973__$1 = (buffer_47967[wpos_47968]);
if((temp__5806__auto___47973__$1 == null)){
(buffer_47967[wpos_47968] = output);

(output[hyperfiddle.electric.impl.runtime.output_slot_prev] = output);

(output[hyperfiddle.electric.impl.runtime.output_slot_next] = output);
} else {
var p_47974 = temp__5806__auto___47973__$1;
var n_47975 = (p_47974[hyperfiddle.electric.impl.runtime.output_slot_next]);
(p_47974[hyperfiddle.electric.impl.runtime.output_slot_next] = output);

(n_47975[hyperfiddle.electric.impl.runtime.output_slot_prev] = output);

(output[hyperfiddle.electric.impl.runtime.output_slot_prev] = p_47974);

(output[hyperfiddle.electric.impl.runtime.output_slot_next] = n_47975);
}

hyperfiddle.electric.impl.runtime.update_event.cljs$core$IFn$_invoke$arity$variadic(context,new cljs.core.Keyword(null,"change","change",-1163046502),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path,x_47966], 0));
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
var fexpr__47174_47976 = (input[hyperfiddle.electric.impl.runtime.input_slot_terminator]);
(fexpr__47174_47976.cljs$core$IFn$_invoke$arity$0 ? fexpr__47174_47976.cljs$core$IFn$_invoke$arity$0() : fexpr__47174_47976.call(null));

throw (new missionary.Cancelled());
} else {
var G__47177 = (input[hyperfiddle.electric.impl.runtime.input_slot_pending]);
switch (G__47177) {
case (-1):
var fexpr__47179_47978 = (input[hyperfiddle.electric.impl.runtime.input_slot_terminator]);
(fexpr__47179_47978.cljs$core$IFn$_invoke$arity$0 ? fexpr__47179_47978.cljs$core$IFn$_invoke$arity$0() : fexpr__47179_47978.call(null));

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
var G__47981 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,(function (){var tier = (tiers[i]);
var buf = (tier[hyperfiddle.electric.impl.runtime.tier_slot_buffer]);
var v__$1 = cljs.core.PersistentVector.EMPTY;
var i__$1 = ((0) | (0));
while(true){
if((i__$1 === (tier[hyperfiddle.electric.impl.runtime.tier_slot_size]))){
return v__$1;
} else {
var G__47983 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v__$1,(function (){var G__47207 = (buf[i__$1]);
return (hyperfiddle.electric.impl.runtime.tree.cljs$core$IFn$_invoke$arity$1 ? hyperfiddle.electric.impl.runtime.tree.cljs$core$IFn$_invoke$arity$1(G__47207) : hyperfiddle.electric.impl.runtime.tree.call(null,G__47207));
})());
var G__47984 = (i__$1 + (1));
v__$1 = G__47983;
i__$1 = G__47984;
continue;
}
break;
}
})());
var G__47982 = (i + (1));
v = G__47981;
i = G__47982;
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
var G__47986 = (tier[hyperfiddle.electric.impl.runtime.tier_slot_parent]);
var G__47987 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(s,cljs.core.keys((tier[hyperfiddle.electric.impl.runtime.tier_slot_hooks])));
f__$1 = G__47986;
s = G__47987;
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
var G__47989 = i__$1;
i = G__47989;
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
var G__47990 = i__$1;
i = G__47990;
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
var G__47992 = (tier[hyperfiddle.electric.impl.runtime.tier_slot_parent]);
f__$1 = G__47992;
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
var fexpr__47233_47993 = (arr[i]);
(fexpr__47233_47993.cljs$core$IFn$_invoke$arity$0 ? fexpr__47233_47993.cljs$core$IFn$_invoke$arity$0() : fexpr__47233_47993.call(null));

var G__47994 = (i + (1));
i = G__47994;
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
var i_47995 = to;
while(true){
if((i_47995 === size)){
} else {
var j_47997 = (i_47995 + (1));
var y_47998 = (buf[(j_47997 | (0))]);
(y_47998[hyperfiddle.electric.impl.runtime.frame_slot_position] = i_47995);

(buf[(i_47995 | (0))] = y_47998);

var G__47999 = j_47997;
i_47995 = G__47999;
continue;
}
break;
}

(tier[hyperfiddle.electric.impl.runtime.tier_slot_size] = size);

(buf[(size | (0))] = null);

return hyperfiddle.electric.impl.runtime.frame_dispose(f);
} else {
var i_48000 = from;
while(true){
var j_48001 = (i_48000 + step);
var y_48002 = (buf[(j_48001 | (0))]);
(y_48002[hyperfiddle.electric.impl.runtime.frame_slot_position] = i_48000);

(buf[(i_48000 | (0))] = y_48002);

if((to === j_48001)){
} else {
var G__48003 = j_48001;
i_48000 = G__48003;
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
var n__5636__auto___48011 = size;
var i_48012 = (0);
while(true){
if((i_48012 < n__5636__auto___48011)){
(dest[(dest_off + i_48012)] = (src[(src_off + i_48012)]));

var G__48014 = (i_48012 + (1));
i_48012 = G__48014;
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
(hyperfiddle.electric.impl.runtime.FrameIterator.prototype.call = (function (unused__27532__auto__){
var self__ = this;
var self__ = this;
var G__47242 = (arguments.length - (1));
switch (G__47242) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.runtime.FrameIterator.prototype.apply = (function (self__,args47241){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args47241)));
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
return hyperfiddle.electric.impl.runtime.__GT_FrameIterator(f,(function (){var G__47256 = n;
var G__47257 = (function (){
hyperfiddle.electric.impl.runtime.frame_cancel(f);

hyperfiddle.electric.impl.runtime.update_event.cljs$core$IFn$_invoke$arity$variadic(context,new cljs.core.Keyword(null,"tree","tree",-196312028),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.Keyword(null,"frame","frame",-1711082588),(- id)], null)], 0));

hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$4(context,hyperfiddle.electric.impl.runtime.context_slot_frame_store,cljs.core.dissoc_BANG_,(f[hyperfiddle.electric.impl.runtime.frame_slot_id]));

return (t.cljs$core$IFn$_invoke$arity$0 ? t.cljs$core$IFn$_invoke$arity$0() : t.call(null));
});
return (_LT_x.cljs$core$IFn$_invoke$arity$2 ? _LT_x.cljs$core$IFn$_invoke$arity$2(G__47256,G__47257) : _LT_x.call(null,G__47256,G__47257));
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
var len__5769__auto___48027 = arguments.length;
var i__5770__auto___48028 = (0);
while(true){
if((i__5770__auto___48028 < len__5769__auto___48027)){
args__5775__auto__.push((arguments[i__5770__auto___48028]));

var G__48029 = (i__5770__auto___48028 + (1));
i__5770__auto___48028 = G__48029;
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
try{var fexpr__47276 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,tier,args);
return (fexpr__47276.cljs$core$IFn$_invoke$arity$2 ? fexpr__47276.cljs$core$IFn$_invoke$arity$2(n,t) : fexpr__47276.call(null,n,t));
}catch (e47275){var e = e47275;
return hyperfiddle.electric.impl.failer.run(e,n,t);
}}
});
}));

(hyperfiddle.electric.impl.runtime.bind.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(hyperfiddle.electric.impl.runtime.bind.cljs$lang$applyTo = (function (seq47266){
var G__47267 = cljs.core.first(seq47266);
var seq47266__$1 = cljs.core.next(seq47266);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47267,seq47266__$1);
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
var G__47278 = arguments.length;
switch (G__47278) {
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
var G__47279 = hyperfiddle.electric.impl.runtime.pure(e);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__47279) : f.call(null,G__47279));
});
}));

(hyperfiddle.electric.impl.runtime.clause.cljs$core$IFn$_invoke$arity$2 = (function (f,c){
return (function (e){
if((hyperfiddle.electric.debug.unwrap(e) instanceof c)){
var G__47280 = hyperfiddle.electric.impl.runtime.pure(e);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__47280) : f.call(null,G__47280));
} else {
return null;
}
});
}));

(hyperfiddle.electric.impl.runtime.clause.cljs$lang$maxFixedArity = 2);

hyperfiddle.electric.impl.runtime.recover = (function hyperfiddle$electric$impl$runtime$recover(tier,catch$,_LT_x){
return hyperfiddle.electric.impl.yield2.yield$((function (x){
if((x instanceof hyperfiddle.electric.Failure)){
var temp__5808__auto__ = (function (){var G__47281 = x.error;
return (catch$.cljs$core$IFn$_invoke$arity$1 ? catch$.cljs$core$IFn$_invoke$arity$1(G__47281) : catch$.call(null,G__47281));
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

return ((frame[hyperfiddle.electric.impl.runtime.frame_slot_variables])[(slot | (0))] = missionary.core.signal_BANG_(missionary.core.cp_STAR_((function (){var cr47282_block_1 = (function hyperfiddle$electric$impl$runtime$variable_$_cr47282_block_1(cr47282_state){
try{var cr47282_place_2 = _LT__LT_x;
(cr47282_state[(0)] = cr47282_block_2);

return missionary.core.switch$(cr47282_place_2);
}catch (e47296){var cr47282_exception = e47296;
(cr47282_state[(0)] = cr47282_block_7);

(cr47282_state[(1)] = cr47282_exception);

return cr47282_state;
}});
var cr47282_block_2 = (function hyperfiddle$electric$impl$runtime$variable_$_cr47282_block_2(cr47282_state){
try{var cr47282_place_3 = missionary.core.unpark();
var cr47282_place_4 = hyperfiddle.electric.impl.runtime.failure;
var cr47282_place_5 = cr47282_place_3;
var cr47282_place_6 = cr47282_place_4(cr47282_place_5);
var cr47282_place_7 = null;
if(cljs.core.truth_(cr47282_place_6)){
(cr47282_state[(0)] = cr47282_block_5);

(cr47282_state[(3)] = cr47282_place_3);

(cr47282_state[(4)] = cr47282_place_7);

return cr47282_state;
} else {
(cr47282_state[(0)] = cr47282_block_3);

(cr47282_state[(3)] = cr47282_place_3);

(cr47282_state[(4)] = cr47282_place_7);

return cr47282_state;
}
}catch (e47297){var cr47282_exception = e47297;
(cr47282_state[(0)] = cr47282_block_7);

(cr47282_state[(1)] = cr47282_exception);

return cr47282_state;
}});
var cr47282_block_4 = (function hyperfiddle$electric$impl$runtime$variable_$_cr47282_block_4(cr47282_state){
try{var cr47282_place_12 = missionary.core.unpark();
(cr47282_state[(0)] = cr47282_block_6);

(cr47282_state[(4)] = cr47282_place_12);

return cr47282_state;
}catch (e47298){var cr47282_exception = e47298;
(cr47282_state[(0)] = cr47282_block_7);

(cr47282_state[(4)] = null);

(cr47282_state[(1)] = cr47282_exception);

return cr47282_state;
}});
var cr47282_block_5 = (function hyperfiddle$electric$impl$runtime$variable_$_cr47282_block_5(cr47282_state){
try{var cr47282_place_3 = (cr47282_state[(3)]);
var cr47282_place_13 = cr47282_place_3;
(cr47282_state[(0)] = cr47282_block_6);

(cr47282_state[(3)] = null);

(cr47282_state[(4)] = cr47282_place_13);

return cr47282_state;
}catch (e47299){var cr47282_exception = e47299;
(cr47282_state[(0)] = cr47282_block_7);

(cr47282_state[(3)] = null);

(cr47282_state[(4)] = null);

(cr47282_state[(1)] = cr47282_exception);

return cr47282_state;
}});
var cr47282_block_8 = (function hyperfiddle$electric$impl$runtime$variable_$_cr47282_block_8(cr47282_state){
try{var cr47282_place_0 = (cr47282_state[(1)]);
var cr47282_place_1 = (cr47282_state[(2)]);
var cr47282_place_17 = (cljs.core.truth_(cr47282_place_1)?(function(){throw cr47282_place_0})():cr47282_place_0);
(cr47282_state[(0)] = null);

(cr47282_state[(1)] = null);

(cr47282_state[(2)] = null);

return cr47282_place_17;
}catch (e47300){var cr47282_exception = e47300;
(cr47282_state[(0)] = null);

(cr47282_state[(1)] = null);

(cr47282_state[(2)] = null);

throw cr47282_exception;
}});
var cr47282_block_6 = (function hyperfiddle$electric$impl$runtime$variable_$_cr47282_block_6(cr47282_state){
try{var cr47282_place_7 = (cr47282_state[(4)]);
(cr47282_state[(0)] = cr47282_block_8);

(cr47282_state[(4)] = null);

(cr47282_state[(1)] = cr47282_place_7);

return cr47282_state;
}catch (e47301){var cr47282_exception = e47301;
(cr47282_state[(0)] = cr47282_block_7);

(cr47282_state[(4)] = null);

(cr47282_state[(1)] = cr47282_exception);

return cr47282_state;
}});
var cr47282_block_7 = (function hyperfiddle$electric$impl$runtime$variable_$_cr47282_block_7(cr47282_state){
try{var cr47282_place_0 = (cr47282_state[(1)]);
var cr47282_place_14 = cr47282_place_0;
var cr47282_place_15 = cr47282_place_14;
var cr47282_place_16 = (new hyperfiddle.electric.Failure(cr47282_place_15));
(cr47282_state[(0)] = cr47282_block_8);

(cr47282_state[(1)] = cr47282_place_16);

return cr47282_state;
}catch (e47302){var cr47282_exception = e47302;
(cr47282_state[(0)] = cr47282_block_8);

(cr47282_state[(2)] = true);

(cr47282_state[(1)] = cr47282_exception);

return cr47282_state;
}});
var cr47282_block_0 = (function hyperfiddle$electric$impl$runtime$variable_$_cr47282_block_0(cr47282_state){
try{var cr47282_place_0 = null;
var cr47282_place_1 = false;
(cr47282_state[(0)] = cr47282_block_1);

(cr47282_state[(1)] = cr47282_place_0);

(cr47282_state[(2)] = cr47282_place_1);

return cr47282_state;
}catch (e47303){var cr47282_exception = e47303;
(cr47282_state[(0)] = null);

throw cr47282_exception;
}});
var cr47282_block_3 = (function hyperfiddle$electric$impl$runtime$variable_$_cr47282_block_3(cr47282_state){
try{var cr47282_place_3 = (cr47282_state[(3)]);
var cr47282_place_8 = hyperfiddle.electric.impl.runtime.with$;
var cr47282_place_9 = tier;
var cr47282_place_10 = cr47282_place_3;
var cr47282_place_11 = (function (){var G__47306 = cr47282_place_9;
var G__47307 = cr47282_place_10;
var fexpr__47305 = cr47282_place_8;
return (fexpr__47305.cljs$core$IFn$_invoke$arity$2 ? fexpr__47305.cljs$core$IFn$_invoke$arity$2(G__47306,G__47307) : fexpr__47305.call(null,G__47306,G__47307));
})();
(cr47282_state[(0)] = cr47282_block_4);

(cr47282_state[(3)] = null);

return missionary.core.switch$(cr47282_place_11);
}catch (e47304){var cr47282_exception = e47304;
(cr47282_state[(0)] = cr47282_block_7);

(cr47282_state[(3)] = null);

(cr47282_state[(4)] = null);

(cr47282_state[(1)] = cr47282_exception);

return cr47282_state;
}});
return cloroutine.impl.coroutine((function (){var G__47308 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((5));
(G__47308[(0)] = cr47282_block_0);

return G__47308;
})());
})())));
});
hyperfiddle.electric.impl.runtime.source = (function hyperfiddle$electric$impl$runtime$source(frame,vars,position,slot){
((frame[hyperfiddle.electric.impl.runtime.frame_slot_sources])[(slot | (0))] = (function (){var G__47309 = ((frame[hyperfiddle.electric.impl.runtime.frame_slot_tiers])[(position | (0))]);
(G__47309[hyperfiddle.electric.impl.runtime.tier_slot_vars] = cljs.core.aclone(vars));

return G__47309;
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
var tier_48037__$1 = tier;
while(true){
var f_48038 = (tier_48037__$1[hyperfiddle.electric.impl.runtime.tier_slot_parent]);
var temp__5806__auto___48039__$1 = hyperfiddle.electric.impl.runtime.frame_walk_tiers(f_48038,(1),k,cljs.core.identity,(tier_48037__$1[hyperfiddle.electric.impl.runtime.tier_slot_position]));
if((temp__5806__auto___48039__$1 == null)){
var temp__5808__auto___48040 = (f_48038[hyperfiddle.electric.impl.runtime.frame_slot_parent]);
if((temp__5808__auto___48040 == null)){
} else {
var tier_48042__$2 = temp__5808__auto___48040;
var temp__5806__auto___48043__$2 = hyperfiddle.electric.impl.runtime.tier_walk_frames(tier_48042__$2,(1),k,cljs.core.identity,(f_48038[hyperfiddle.electric.impl.runtime.frame_slot_position]));
if((temp__5806__auto___48043__$2 == null)){
if(cljs.core.contains_QMARK_((tier_48042__$2[hyperfiddle.electric.impl.runtime.tier_slot_hooks]),k)){
(k.cljs$core$IFn$_invoke$arity$2 ? k.cljs$core$IFn$_invoke$arity$2(v,null) : k.call(null,v,null));
} else {
var G__48044 = tier_48042__$2;
tier_48037__$1 = G__48044;
continue;
}
} else {
var a_48045 = temp__5806__auto___48043__$2;
(k.cljs$core$IFn$_invoke$arity$2 ? k.cljs$core$IFn$_invoke$arity$2(v,a_48045) : k.call(null,v,a_48045));
}
}
} else {
var a_48046 = temp__5806__auto___48039__$1;
(k.cljs$core$IFn$_invoke$arity$2 ? k.cljs$core$IFn$_invoke$arity$2(v,a_48046) : k.call(null,v,a_48046));
}
break;
}

hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$5(tier,hyperfiddle.electric.impl.runtime.tier_slot_hooks,cljs.core.assoc,k,v);

var G__47310 = n;
var G__47311 = (function (){
hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$4(tier,hyperfiddle.electric.impl.runtime.tier_slot_hooks,cljs.core.dissoc,k);

(k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(v) : k.call(null,v));

return (t.cljs$core$IFn$_invoke$arity$0 ? t.cljs$core$IFn$_invoke$arity$0() : t.call(null));
});
return (_LT_x.cljs$core$IFn$_invoke$arity$2 ? _LT_x.cljs$core$IFn$_invoke$arity$2(G__47310,G__47311) : _LT_x.call(null,G__47310,G__47311));
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

var input_48048 = (output__$1[hyperfiddle.electric.impl.runtime.output_slot_input]);
if((hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$3(input_48048,hyperfiddle.electric.impl.runtime.input_slot_pending,cljs.core.dec) === (0))){
hyperfiddle.electric.impl.runtime.input_ready(input_48048);
} else {
}

var G__48049 = (output__$1[hyperfiddle.electric.impl.runtime.output_slot_next]);
output__$1 = G__48049;
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
var fexpr__47313_48053 = (context[hyperfiddle.electric.impl.runtime.context_slot_terminator]);
(fexpr__47313_48053.cljs$core$IFn$_invoke$arity$0 ? fexpr__47313_48053.cljs$core$IFn$_invoke$arity$0() : fexpr__47313_48053.call(null));

throw (new missionary.Cancelled());
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"change","change",-1163046502).cljs$core$IFn$_invoke$arity$1(event))){
} else {
var buffer_48054 = (context[hyperfiddle.electric.impl.runtime.context_slot_pending_buffer]);
var size_48055 = buffer_48054.length;
var rpos_48056 = (context[hyperfiddle.electric.impl.runtime.context_slot_pending_rpos]);
var wpos_48057 = (context[hyperfiddle.electric.impl.runtime.context_slot_pending_wpos]);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rpos_48056,(context[hyperfiddle.electric.impl.runtime.context_slot_pending_wpos] = ((wpos_48057 + (1)) & (size_48055 - (1)))))){
var larger_48058 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((size_48055 << (1)));
var split_48059 = (size_48055 - rpos_48056);
hyperfiddle.electric.impl.runtime.acopy(buffer_48054,rpos_48056,larger_48058,(0),split_48059);

hyperfiddle.electric.impl.runtime.acopy(buffer_48054,(0),larger_48058,split_48059,rpos_48056);

var n__5636__auto___48061 = size_48055;
var t_48062 = (0);
while(true){
if((t_48062 < n__5636__auto___48061)){
var temp__5808__auto___48063 = (larger_48058[t_48062]);
if((temp__5808__auto___48063 == null)){
} else {
var output_48064 = temp__5808__auto___48063;
var o_48065 = output_48064;
while(true){
(o_48065[hyperfiddle.electric.impl.runtime.output_slot_time] = t_48062);

var n_48066 = (o_48065[hyperfiddle.electric.impl.runtime.output_slot_next]);
if((n_48066 === output_48064)){
} else {
var G__48067 = n_48066;
o_48065 = G__48067;
continue;
}
break;
}
}

var G__48068 = (t_48062 + (1));
t_48062 = G__48068;
continue;
} else {
}
break;
}

(context[hyperfiddle.electric.impl.runtime.context_slot_pending_buffer] = larger_48058);

(context[hyperfiddle.electric.impl.runtime.context_slot_pending_wpos] = size_48055);

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
var G__47314_48070 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(inst);
var G__47314_48071__$1 = (((G__47314_48070 instanceof cljs.core.Keyword))?G__47314_48070.fqn:null);
switch (G__47314_48071__$1) {
case "create":
var map__47315_48073 = inst;
var map__47315_48074__$1 = cljs.core.__destructure_map(map__47315_48073);
var vec__47316_48075 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47315_48074__$1,new cljs.core.Keyword(null,"target","target",253001721));
var target_frame_48076 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47316_48075,(0),null);
var target_slot_48077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47316_48075,(1),null);
var vec__47319_48078 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47315_48074__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var source_frame_48079 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47319_48078,(0),null);
var source_slot_48080 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47319_48078,(1),null);
var G__47323_48081 = ((cljs.core.get.cljs$core$IFn$_invoke$arity$2((context[hyperfiddle.electric.impl.runtime.context_slot_frame_store]),source_frame_48079)[hyperfiddle.electric.impl.runtime.frame_slot_sources])[source_slot_48080]);
var G__47324_48082 = hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$3(context,hyperfiddle.electric.impl.runtime.context_slot_remote_id,cljs.core.dec);
var fexpr__47322_48083 = ((cljs.core.get.cljs$core$IFn$_invoke$arity$2((context[hyperfiddle.electric.impl.runtime.context_slot_frame_store]),target_frame_48076)[hyperfiddle.electric.impl.runtime.frame_slot_targets])[target_slot_48077]);
(fexpr__47322_48083.cljs$core$IFn$_invoke$arity$2 ? fexpr__47322_48083.cljs$core$IFn$_invoke$arity$2(G__47323_48081,G__47324_48082) : fexpr__47322_48083.call(null,G__47323_48081,G__47324_48082));

break;
case "rotate":
hyperfiddle.electric.impl.runtime.frame_rotate(cljs.core.get.cljs$core$IFn$_invoke$arity$2((context[hyperfiddle.electric.impl.runtime.context_slot_frame_store]),new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(inst)),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(inst));

break;
case "remove":
hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$4(context,hyperfiddle.electric.impl.runtime.context_slot_frame_store,cljs.core.dissoc_BANG_,new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(inst));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47314_48071__$1)].join('')));

}

return context;
});
hyperfiddle.electric.impl.runtime.eval_change_inst = (function hyperfiddle$electric$impl$runtime$eval_change_inst(context,p__47328,value){
var vec__47329 = p__47328;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47329,(0),null);
var slot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47329,(1),null);
hyperfiddle.electric.impl.runtime.input_change(((cljs.core.get.cljs$core$IFn$_invoke$arity$2((context[hyperfiddle.electric.impl.runtime.context_slot_frame_store]),id)[hyperfiddle.electric.impl.runtime.frame_slot_inputs])[slot]),value);

return context;
});
hyperfiddle.electric.impl.runtime.eval_freeze_inst = (function hyperfiddle$electric$impl$runtime$eval_freeze_inst(context,p__47334){
var vec__47335 = p__47334;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47335,(0),null);
var slot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47335,(1),null);
hyperfiddle.electric.impl.runtime.input_freeze(((cljs.core.get.cljs$core$IFn$_invoke$arity$2((context[hyperfiddle.electric.impl.runtime.context_slot_frame_store]),id)[hyperfiddle.electric.impl.runtime.frame_slot_inputs])[slot]));

return context;
});
hyperfiddle.electric.impl.runtime.parse_event = (function hyperfiddle$electric$impl$runtime$parse_event(context,p__47338){
var map__47339 = p__47338;
var map__47339__$1 = cljs.core.__destructure_map(map__47339);
var acks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47339__$1,new cljs.core.Keyword(null,"acks","acks",707064729));
var tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47339__$1,new cljs.core.Keyword(null,"tree","tree",-196312028));
var change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47339__$1,new cljs.core.Keyword(null,"change","change",-1163046502));
var freeze = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47339__$1,new cljs.core.Keyword(null,"freeze","freeze",2043466309));
var n__5636__auto___48096 = acks;
var __48097 = (0);
while(true){
if((__48097 < n__5636__auto___48096)){
hyperfiddle.electric.impl.runtime.context_ack(context);

var G__48098 = (__48097 + (1));
__48097 = G__48098;
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
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr47342_block_0 = (function hyperfiddle$electric$impl$runtime$write_outgoing_events_$_cr47342_block_0(cr47342_state){
try{var cr47342_place_0 = (1);
var cr47342_place_1 = _GT_events;
(cr47342_state[(0)] = cr47342_block_1);

return missionary.core.fork(cr47342_place_0,cr47342_place_1);
}catch (e47356){var cr47342_exception = e47356;
(cr47342_state[(0)] = null);

throw cr47342_exception;
}});
var cr47342_block_1 = (function hyperfiddle$electric$impl$runtime$write_outgoing_events_$_cr47342_block_1(cr47342_state){
try{var cr47342_place_2 = missionary.core.unpark();
var cr47342_place_3 = cljs.core._EQ_;
var cr47342_place_4 = cr47342_place_2;
var cr47342_place_5 = hyperfiddle.electric.impl.runtime.empty_event;
var cr47342_place_6 = (function (){var G__47359 = cr47342_place_4;
var G__47360 = cr47342_place_5;
var fexpr__47358 = cr47342_place_3;
return (fexpr__47358.cljs$core$IFn$_invoke$arity$2 ? fexpr__47358.cljs$core$IFn$_invoke$arity$2(G__47359,G__47360) : fexpr__47358.call(null,G__47359,G__47360));
})();
var cr47342_place_7 = null;
if(cljs.core.truth_(cr47342_place_6)){
(cr47342_state[(0)] = cr47342_block_4);

(cr47342_state[(1)] = cr47342_place_7);

return cr47342_state;
} else {
(cr47342_state[(0)] = cr47342_block_2);

(cr47342_state[(2)] = cr47342_place_2);

(cr47342_state[(1)] = cr47342_place_7);

return cr47342_state;
}
}catch (e47357){var cr47342_exception = e47357;
(cr47342_state[(0)] = null);

throw cr47342_exception;
}});
var cr47342_block_2 = (function hyperfiddle$electric$impl$runtime$write_outgoing_events_$_cr47342_block_2(cr47342_state){
try{var cr47342_place_2 = (cr47342_state[(2)]);
var cr47342_place_8 = write;
var cr47342_place_9 = cr47342_place_2;
var cr47342_place_10 = (function (){var G__47363 = cr47342_place_9;
var fexpr__47362 = cr47342_place_8;
return (fexpr__47362.cljs$core$IFn$_invoke$arity$1 ? fexpr__47362.cljs$core$IFn$_invoke$arity$1(G__47363) : fexpr__47362.call(null,G__47363));
})();
(cr47342_state[(0)] = cr47342_block_3);

(cr47342_state[(2)] = null);

return missionary.core.park(cr47342_place_10);
}catch (e47361){var cr47342_exception = e47361;
(cr47342_state[(0)] = null);

(cr47342_state[(1)] = null);

(cr47342_state[(2)] = null);

throw cr47342_exception;
}});
var cr47342_block_3 = (function hyperfiddle$electric$impl$runtime$write_outgoing_events_$_cr47342_block_3(cr47342_state){
try{var cr47342_place_11 = missionary.core.unpark();
(cr47342_state[(0)] = cr47342_block_5);

(cr47342_state[(1)] = cr47342_place_11);

return cr47342_state;
}catch (e47364){var cr47342_exception = e47364;
(cr47342_state[(0)] = null);

(cr47342_state[(1)] = null);

throw cr47342_exception;
}});
var cr47342_block_4 = (function hyperfiddle$electric$impl$runtime$write_outgoing_events_$_cr47342_block_4(cr47342_state){
try{var cr47342_place_12 = null;
(cr47342_state[(0)] = cr47342_block_5);

(cr47342_state[(1)] = cr47342_place_12);

return cr47342_state;
}catch (e47365){var cr47342_exception = e47365;
(cr47342_state[(0)] = null);

(cr47342_state[(1)] = null);

throw cr47342_exception;
}});
var cr47342_block_5 = (function hyperfiddle$electric$impl$runtime$write_outgoing_events_$_cr47342_block_5(cr47342_state){
try{var cr47342_place_7 = (cr47342_state[(1)]);
(cr47342_state[(0)] = null);

(cr47342_state[(1)] = null);

return cr47342_place_7;
}catch (e47366){var cr47342_exception = e47366;
(cr47342_state[(0)] = null);

(cr47342_state[(1)] = null);

throw cr47342_exception;
}});
return cloroutine.impl.coroutine((function (){var G__47368 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((3));
(G__47368[(0)] = cr47342_block_0);

return G__47368;
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

var temp__5808__auto___48111 = hyperfiddle.electric.impl.runtime.make_frame(context,null,(0),(0),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY,dynamic,variable_count,source_count,constant_count,target_count,output_count,input_count,context,cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(var_count,hyperfiddle.electric.impl.runtime.unbound)),ctor);
if((temp__5808__auto___48111 == null)){
} else {
var _LT_main_48112 = temp__5808__auto___48111;
missionary.core.stream_BANG_(missionary.core.latest.cljs$core$IFn$_invoke$arity$variadic((function (x){
if((x instanceof hyperfiddle.electric.Failure)){
var G__47369 = x.error;
return (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(G__47369) : on_error.call(null,G__47369));
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_LT_main_48112], 0)));
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
var len__5769__auto___48115 = arguments.length;
var i__5770__auto___48116 = (0);
while(true){
if((i__5770__auto___48116 < len__5769__auto___48115)){
args__5775__auto__.push((arguments[i__5770__auto___48116]));

var G__48117 = (i__5770__auto___48116 + (1));
i__5770__auto___48116 = G__48117;
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
(hyperfiddle.electric.impl.runtime.collapse.cljs$lang$applyTo = (function (seq47370){
var G__47371 = cljs.core.first(seq47370);
var seq47370__$1 = cljs.core.next(seq47370);
var G__47372 = cljs.core.first(seq47370__$1);
var seq47370__$2 = cljs.core.next(seq47370__$1);
var G__47373 = cljs.core.first(seq47370__$2);
var seq47370__$3 = cljs.core.next(seq47370__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47371,G__47372,G__47373,seq47370__$3);
}));

hyperfiddle.electric.impl.runtime.snapshot = (function hyperfiddle$electric$impl$runtime$snapshot(var_args){
var args__5775__auto__ = [];
var len__5769__auto___48119 = arguments.length;
var i__5770__auto___48121 = (0);
while(true){
if((i__5770__auto___48121 < len__5769__auto___48119)){
args__5775__auto__.push((arguments[i__5770__auto___48121]));

var G__48122 = (i__5770__auto___48121 + (1));
i__5770__auto___48121 = G__48122;
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
(hyperfiddle.electric.impl.runtime.snapshot.cljs$lang$applyTo = (function (seq47378){
var G__47379 = cljs.core.first(seq47378);
var seq47378__$1 = cljs.core.next(seq47378);
var G__47380 = cljs.core.first(seq47378__$1);
var seq47378__$2 = cljs.core.next(seq47378__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47379,G__47380,seq47378__$2);
}));

hyperfiddle.electric.impl.runtime.reverse_index = (function hyperfiddle$electric$impl$runtime$reverse_index(m){
return cljs.core.reduce_kv((function (v,x,i){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,i,x);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(m),null)),m);
});
hyperfiddle.electric.impl.runtime.empty_frame = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"variable","variable",-281346492),(0),new cljs.core.Keyword(null,"source","source",-433931539),(0),new cljs.core.Keyword(null,"constant","constant",-379609303),(0),new cljs.core.Keyword(null,"target","target",253001721),(0),new cljs.core.Keyword(null,"output","output",-1105869043),(0),new cljs.core.Keyword(null,"input","input",556931961),(0),new cljs.core.Keyword(null,"static","static",1214358571),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dynamic","dynamic",704819571),cljs.core.PersistentArrayMap.EMPTY], null);
hyperfiddle.electric.impl.runtime.compile = (function hyperfiddle$electric$impl$runtime$compile(inst,p__47383){
var map__47384 = p__47383;
var map__47384__$1 = cljs.core.__destructure_map(map__47384);
var fns = map__47384__$1;
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47384__$1,new cljs.core.Keyword(null,"input","input",556931961));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47384__$1,new cljs.core.Keyword(null,"target","target",253001721));
var main = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47384__$1,new cljs.core.Keyword(null,"main","main",-2117802661));
var pub = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47384__$1,new cljs.core.Keyword(null,"pub","pub",-1189143908));
var bind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47384__$1,new cljs.core.Keyword(null,"bind","bind",-113428417));
var lift = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47384__$1,new cljs.core.Keyword(null,"lift","lift",903632035));
var variable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47384__$1,new cljs.core.Keyword(null,"variable","variable",-281346492));
var do$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47384__$1,new cljs.core.Keyword(null,"do","do",46310725));
var sub = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47384__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var global__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47384__$1,new cljs.core.Keyword(null,"global","global",93595047));
var constant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47384__$1,new cljs.core.Keyword(null,"constant","constant",-379609303));
var static$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47384__$1,new cljs.core.Keyword(null,"static","static",1214358571));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47384__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47384__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
var nop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47384__$1,new cljs.core.Keyword(null,"nop","nop",-1754075182));
var inject = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47384__$1,new cljs.core.Keyword(null,"inject","inject",-1882635533));
var dynamic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47384__$1,new cljs.core.Keyword(null,"dynamic","dynamic",704819571));
var literal = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47384__$1,new cljs.core.Keyword(null,"literal","literal",1664775605));
var invoke = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47384__$1,new cljs.core.Keyword(null,"invoke","invoke",1145927159));
var vget = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47384__$1,new cljs.core.Keyword(null,"vget","vget",1720343287));
return cljs.core.peek(hyperfiddle.electric.impl.runtime.collapse(new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot((function hyperfiddle$electric$impl$runtime$compile_$_walk(env,off,idx,dyn,inst__$1){
var G__47385 = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425).cljs$core$IFn$_invoke$arity$1(inst__$1);
var G__47385__$1 = (((G__47385 instanceof cljs.core.Keyword))?G__47385.fqn:null);
switch (G__47385__$1) {
case "hyperfiddle.electric.impl.ir/nop":
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj,nop);

break;
case "hyperfiddle.electric.impl.ir/sub":
var p = (idx - new cljs.core.Keyword("hyperfiddle.electric.impl.ir","index","hyperfiddle.electric.impl.ir/index",1690646129).cljs$core$IFn$_invoke$arity$1(inst__$1));
if((p < off)){
var f = new cljs.core.Keyword(null,"static","static",1214358571).cljs$core$IFn$_invoke$arity$1(env);
var i = (function (){var G__47386 = p;
var G__47387 = cljs.core.count(f);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__47386,G__47387) : f.call(null,G__47386,G__47387));
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
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj,(function (){var G__47389 = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","form","hyperfiddle.electric.impl.ir/form",-534651915).cljs$core$IFn$_invoke$arity$1(inst__$1);
var G__47390 = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","ns","hyperfiddle.electric.impl.ir/ns",1363348916).cljs$core$IFn$_invoke$arity$1(inst__$1);
var fexpr__47388 = new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(fns);
return (fexpr__47388.cljs$core$IFn$_invoke$arity$2 ? fexpr__47388.cljs$core$IFn$_invoke$arity$2(G__47389,G__47390) : fexpr__47388.call(null,G__47389,G__47390));
})());

break;
case "hyperfiddle.electric.impl.ir/node":
var v = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","slot","hyperfiddle.electric.impl.ir/slot",1432523351).cljs$core$IFn$_invoke$arity$1(inst__$1);
var env__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword(null,"vars","vars",-2046957217),cljs.core.max,v);
if(cljs.core.truth_((dyn.cljs$core$IFn$_invoke$arity$1 ? dyn.cljs$core$IFn$_invoke$arity$1(v) : dyn.call(null,v)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(env__$1,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj,(vget.cljs$core$IFn$_invoke$arity$1 ? vget.cljs$core$IFn$_invoke$arity$1(v) : vget.call(null,v)));
} else {
var d = new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(env__$1);
var i = (function (){var G__47391 = v;
var G__47392 = cljs.core.count(d);
return (d.cljs$core$IFn$_invoke$arity$2 ? d.cljs$core$IFn$_invoke$arity$2(G__47391,G__47392) : d.call(null,G__47391,G__47392));
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
var G__47393 = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425).cljs$core$IFn$_invoke$arity$1(f__$1);
var G__47393__$1 = (((G__47393 instanceof cljs.core.Keyword))?G__47393.fqn:null);
switch (G__47393__$1) {
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
var G__48138 = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","fn","hyperfiddle.electric.impl.ir/fn",1996468864).cljs$core$IFn$_invoke$arity$1(f__$1);
f__$1 = G__48138;
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
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj,(function (){var G__47395 = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","name","hyperfiddle.electric.impl.ir/name",655661733).cljs$core$IFn$_invoke$arity$1(inst__$1);
return (global__$1.cljs$core$IFn$_invoke$arity$1 ? global__$1.cljs$core$IFn$_invoke$arity$1(G__47395) : global__$1.call(null,G__47395));
})());

break;
case "hyperfiddle.electric.impl.ir/literal":
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj,(function (){var G__47396 = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","value","hyperfiddle.electric.impl.ir/value",-750005275).cljs$core$IFn$_invoke$arity$1(inst__$1);
return (literal.cljs$core$IFn$_invoke$arity$1 ? literal.cljs$core$IFn$_invoke$arity$1(G__47396) : literal.call(null,G__47396));
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47385__$1)].join('')));

}
})(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.empty_frame,new cljs.core.Keyword(null,"vars","vars",-2046957217),(-1)),(0),(0),cljs.core.PersistentHashSet.EMPTY,inst),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,new cljs.core.Keyword(null,"vars","vars",-2046957217))),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.runtime.reverse_index,new cljs.core.Keyword(null,"dynamic","dynamic",704819571))),new cljs.core.Keyword(null,"variable","variable",-281346492)),new cljs.core.Keyword(null,"source","source",-433931539)),new cljs.core.Keyword(null,"constant","constant",-379609303)),new cljs.core.Keyword(null,"target","target",253001721)),new cljs.core.Keyword(null,"output","output",-1105869043)),new cljs.core.Keyword(null,"input","input",556931961))),(9),main));
});
hyperfiddle.electric.impl.runtime.sym = (function hyperfiddle$electric$impl$runtime$sym(var_args){
var args__5775__auto__ = [];
var len__5769__auto___48145 = arguments.length;
var i__5770__auto___48146 = (0);
while(true){
if((i__5770__auto___48146 < len__5769__auto___48145)){
args__5775__auto__.push((arguments[i__5770__auto___48146]));

var G__48147 = (i__5770__auto___48146 + (1));
i__5770__auto___48146 = G__48147;
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
(hyperfiddle.electric.impl.runtime.sym.cljs$lang$applyTo = (function (seq47397){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47397));
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
var G__48175__delegate = function (debug_info,forms){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","latest-apply","hyperfiddle.electric.impl.runtime/latest-apply",694267757,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.select_debug_info(debug_info),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([forms], 0))));
};
var G__48175 = function (debug_info,var_args){
var forms = null;
if (arguments.length > 1) {
var G__48177__i = 0, G__48177__a = new Array(arguments.length -  1);
while (G__48177__i < G__48177__a.length) {G__48177__a[G__48177__i] = arguments[G__48177__i + 1]; ++G__48177__i;}
  forms = new cljs.core.IndexedSeq(G__48177__a,0,null);
} 
return G__48175__delegate.call(this,debug_info,forms);};
G__48175.cljs$lang$maxFixedArity = 1;
G__48175.cljs$lang$applyTo = (function (arglist__48178){
var debug_info = cljs.core.first(arglist__48178);
var forms = cljs.core.rest(arglist__48178);
return G__48175__delegate(debug_info,forms);
});
G__48175.cljs$core$IFn$_invoke$arity$variadic = G__48175__delegate;
return G__48175;
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

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47626 = (function (meta47627){
this.meta47627 = meta47627;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47626.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47628,meta47627__$1){
var self__ = this;
var _47628__$1 = this;
return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47626(meta47627__$1));
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47626.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47628){
var self__ = this;
var _47628__$1 = this;
return self__.meta47627;
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47626.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47626.prototype.call = (function (unused__27532__auto__){
var self__ = this;
var self__ = this;
var G__47630 = (arguments.length - (1));
switch (G__47630) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47626.prototype.apply = (function (self__,args47629){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args47629)));
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47626.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_47625){
var self__ = this;
var ___27185__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(8,done_47625);
try{var values__10777__auto___48203 = (new cljs.core.List(null,hyperfiddle.electric.impl.runtime.emit(null,hyperfiddle.electric.impl.ir.literal((5))),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-vars","-vars",2025560914,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,(5),null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(2),null));
var result__10778__auto___48204 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto___48203);
if(cljs.core.truth_(result__10778__auto___48204)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"emit","emit",313352509,null),null,cljs.core.list(new cljs.core.Symbol("ir","literal","ir/literal",-989689721,null),(5))),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-vars","-vars",2025560914,null)),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(5),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto___48203),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"emit","emit",313352509,null),null,cljs.core.list(new cljs.core.Symbol("ir","literal","ir/literal",-989689721,null),(5))),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-vars","-vars",2025560914,null)),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(5),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null))))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto___48203),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10777__auto___48203);
}catch (e47631){var t__10765__auto___48211 = e47631;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"emit","emit",313352509,null),null,cljs.core.list(new cljs.core.Symbol("ir","literal","ir/literal",-989689721,null),(5))),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-vars","-vars",2025560914,null)),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(5),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null))))),null,t__10765__auto___48211,null]));
}finally {RCF__done_BANG_();
}
try{var values__10777__auto___48216 = (new cljs.core.List(null,hyperfiddle.electric.impl.runtime.emit(null,hyperfiddle.electric.impl.ir.apply.cljs$core$IFn$_invoke$arity$variadic(hyperfiddle.electric.impl.ir.global(new cljs.core.Keyword("clojure.core","+","clojure.core/+",-1947503012)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hyperfiddle.electric.impl.ir.literal((2)),hyperfiddle.electric.impl.ir.literal((3))], 0))),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-vars","-vars",2025560914,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","latest-apply","hyperfiddle.electric.impl.runtime/latest-apply",694267757,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","global","hyperfiddle.electric.impl.ir/global",1116145715),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("hyperfiddle.electric.debug","type","hyperfiddle.electric.debug/type",-166806812),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"apply","apply",1320385493),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("hyperfiddle.electric.debug","name","hyperfiddle.electric.debug/name",-35961215),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("clojure.core","+","clojure.core/+",-306971485,null),null,(1),null))], 0))))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("clojure.core","+","clojure.core/+",-306971485,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,(2),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,(3),null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(2),null));
var result__10778__auto___48217 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto___48216);
if(cljs.core.truth_(result__10778__auto___48217)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"emit","emit",313352509,null),null,cljs.core.list(new cljs.core.Symbol("ir","apply","ir/apply",-1334046411,null),cljs.core.list(new cljs.core.Symbol("ir","global","ir/global",1734106421,null),new cljs.core.Keyword("clojure.core","+","clojure.core/+",-1947503012)),cljs.core.list(new cljs.core.Symbol("ir","literal","ir/literal",-989689721,null),(2)),cljs.core.list(new cljs.core.Symbol("ir","literal","ir/literal",-989689721,null),(3)))),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-vars","-vars",2025560914,null)),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","latest-apply","hyperfiddle.electric.impl.runtime/latest-apply",694267757,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","apply","clojure.core/apply",1654646389,null),new cljs.core.Symbol("clojure.core","array-map","clojure.core/array-map",-1351833961,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","global","hyperfiddle.electric.impl.ir/global",1116145715),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.debug","type","hyperfiddle.electric.debug/type",-166806812),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword(null,"apply","apply",1320385493),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.debug","name","hyperfiddle.electric.debug/name",-35961215),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("clojure.core","+","clojure.core/+",-306971485,null)),null,(1),null))))),null,(1),null)))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("clojure.core","+","clojure.core/+",-306971485,null)),null,(1),null)))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(2),null,(1),null)))),null,(1),null)))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(3),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto___48216),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"emit","emit",313352509,null),null,cljs.core.list(new cljs.core.Symbol("ir","apply","ir/apply",-1334046411,null),cljs.core.list(new cljs.core.Symbol("ir","global","ir/global",1734106421,null),new cljs.core.Keyword("clojure.core","+","clojure.core/+",-1947503012)),cljs.core.list(new cljs.core.Symbol("ir","literal","ir/literal",-989689721,null),(2)),cljs.core.list(new cljs.core.Symbol("ir","literal","ir/literal",-989689721,null),(3)))),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-vars","-vars",2025560914,null)),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","latest-apply","hyperfiddle.electric.impl.runtime/latest-apply",694267757,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","apply","clojure.core/apply",1654646389,null),new cljs.core.Symbol("clojure.core","array-map","clojure.core/array-map",-1351833961,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","global","hyperfiddle.electric.impl.ir/global",1116145715),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.debug","type","hyperfiddle.electric.debug/type",-166806812),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword(null,"apply","apply",1320385493),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.debug","name","hyperfiddle.electric.debug/name",-35961215),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("clojure.core","+","clojure.core/+",-306971485,null)),null,(1),null))))),null,(1),null)))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("clojure.core","+","clojure.core/+",-306971485,null)),null,(1),null)))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(2),null,(1),null)))),null,(1),null)))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(3),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null))))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto___48216),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10777__auto___48216);
}catch (e47632){var t__10765__auto___48234 = e47632;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"emit","emit",313352509,null),null,cljs.core.list(new cljs.core.Symbol("ir","apply","ir/apply",-1334046411,null),cljs.core.list(new cljs.core.Symbol("ir","global","ir/global",1734106421,null),new cljs.core.Keyword("clojure.core","+","clojure.core/+",-1947503012)),cljs.core.list(new cljs.core.Symbol("ir","literal","ir/literal",-989689721,null),(2)),cljs.core.list(new cljs.core.Symbol("ir","literal","ir/literal",-989689721,null),(3)))),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-vars","-vars",2025560914,null)),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","latest-apply","hyperfiddle.electric.impl.runtime/latest-apply",694267757,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","apply","clojure.core/apply",1654646389,null),new cljs.core.Symbol("clojure.core","array-map","clojure.core/array-map",-1351833961,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","global","hyperfiddle.electric.impl.ir/global",1116145715),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.debug","type","hyperfiddle.electric.debug/type",-166806812),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword(null,"apply","apply",1320385493),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.debug","name","hyperfiddle.electric.debug/name",-35961215),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("clojure.core","+","clojure.core/+",-306971485,null)),null,(1),null))))),null,(1),null)))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("clojure.core","+","clojure.core/+",-306971485,null)),null,(1),null)))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(2),null,(1),null)))),null,(1),null)))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(3),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null))))),null,t__10765__auto___48234,null]));
}finally {RCF__done_BANG_();
}
try{var values__10777__auto___48236 = (new cljs.core.List(null,hyperfiddle.electric.impl.runtime.emit(null,hyperfiddle.electric.impl.ir.pub(hyperfiddle.electric.impl.ir.literal((1)),hyperfiddle.electric.impl.ir.apply.cljs$core$IFn$_invoke$arity$variadic(hyperfiddle.electric.impl.ir.global(new cljs.core.Keyword("clojure.core","+","clojure.core/+",-1947503012)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hyperfiddle.electric.impl.ir.sub((1)),hyperfiddle.electric.impl.ir.literal((2))], 0)))),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-vars","-vars",2025560914,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"-pub-0","-pub-0",-702992988,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","signal","hyperfiddle.electric.impl.runtime/signal",340452693,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","latest-apply","hyperfiddle.electric.impl.runtime/latest-apply",694267757,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","global","hyperfiddle.electric.impl.ir/global",1116145715),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("hyperfiddle.electric.debug","type","hyperfiddle.electric.debug/type",-166806812),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"apply","apply",1320385493),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("hyperfiddle.electric.debug","name","hyperfiddle.electric.debug/name",-35961215),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("clojure.core","+","clojure.core/+",-306971485,null),null,(1),null))], 0))))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("clojure.core","+","clojure.core/+",-306971485,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-pub-0","-pub-0",-702992988,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,(2),null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(2),null));
var result__10778__auto___48237 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto___48236);
if(cljs.core.truth_(result__10778__auto___48237)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"emit","emit",313352509,null),null,cljs.core.list(new cljs.core.Symbol("ir","pub","ir/pub",451390874,null),cljs.core.list(new cljs.core.Symbol("ir","literal","ir/literal",-989689721,null),(1)),cljs.core.list(new cljs.core.Symbol("ir","apply","ir/apply",-1334046411,null),cljs.core.list(new cljs.core.Symbol("ir","global","ir/global",1734106421,null),new cljs.core.Keyword("clojure.core","+","clojure.core/+",-1947503012)),cljs.core.list(new cljs.core.Symbol("ir","sub","ir/sub",-453228841,null),(1)),cljs.core.list(new cljs.core.Symbol("ir","literal","ir/literal",-989689721,null),(2))))),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-vars","-vars",2025560914,null)),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-pub-0","-pub-0",-702992988,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","signal","hyperfiddle.electric.impl.runtime/signal",340452693,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(1),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","latest-apply","hyperfiddle.electric.impl.runtime/latest-apply",694267757,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","apply","clojure.core/apply",1654646389,null),new cljs.core.Symbol("clojure.core","array-map","clojure.core/array-map",-1351833961,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","global","hyperfiddle.electric.impl.ir/global",1116145715),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.debug","type","hyperfiddle.electric.debug/type",-166806812),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword(null,"apply","apply",1320385493),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.debug","name","hyperfiddle.electric.debug/name",-35961215),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("clojure.core","+","clojure.core/+",-306971485,null)),null,(1),null))))),null,(1),null)))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("clojure.core","+","clojure.core/+",-306971485,null)),null,(1),null)))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-pub-0","-pub-0",-702992988,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(2),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto___48236),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"emit","emit",313352509,null),null,cljs.core.list(new cljs.core.Symbol("ir","pub","ir/pub",451390874,null),cljs.core.list(new cljs.core.Symbol("ir","literal","ir/literal",-989689721,null),(1)),cljs.core.list(new cljs.core.Symbol("ir","apply","ir/apply",-1334046411,null),cljs.core.list(new cljs.core.Symbol("ir","global","ir/global",1734106421,null),new cljs.core.Keyword("clojure.core","+","clojure.core/+",-1947503012)),cljs.core.list(new cljs.core.Symbol("ir","sub","ir/sub",-453228841,null),(1)),cljs.core.list(new cljs.core.Symbol("ir","literal","ir/literal",-989689721,null),(2))))),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-vars","-vars",2025560914,null)),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-pub-0","-pub-0",-702992988,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","signal","hyperfiddle.electric.impl.runtime/signal",340452693,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(1),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","latest-apply","hyperfiddle.electric.impl.runtime/latest-apply",694267757,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","apply","clojure.core/apply",1654646389,null),new cljs.core.Symbol("clojure.core","array-map","clojure.core/array-map",-1351833961,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","global","hyperfiddle.electric.impl.ir/global",1116145715),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.debug","type","hyperfiddle.electric.debug/type",-166806812),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword(null,"apply","apply",1320385493),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.debug","name","hyperfiddle.electric.debug/name",-35961215),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("clojure.core","+","clojure.core/+",-306971485,null)),null,(1),null))))),null,(1),null)))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("clojure.core","+","clojure.core/+",-306971485,null)),null,(1),null)))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-pub-0","-pub-0",-702992988,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(2),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null))))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto___48236),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10777__auto___48236);
}catch (e47633){var t__10765__auto___48250 = e47633;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"emit","emit",313352509,null),null,cljs.core.list(new cljs.core.Symbol("ir","pub","ir/pub",451390874,null),cljs.core.list(new cljs.core.Symbol("ir","literal","ir/literal",-989689721,null),(1)),cljs.core.list(new cljs.core.Symbol("ir","apply","ir/apply",-1334046411,null),cljs.core.list(new cljs.core.Symbol("ir","global","ir/global",1734106421,null),new cljs.core.Keyword("clojure.core","+","clojure.core/+",-1947503012)),cljs.core.list(new cljs.core.Symbol("ir","sub","ir/sub",-453228841,null),(1)),cljs.core.list(new cljs.core.Symbol("ir","literal","ir/literal",-989689721,null),(2))))),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-vars","-vars",2025560914,null)),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-pub-0","-pub-0",-702992988,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","signal","hyperfiddle.electric.impl.runtime/signal",340452693,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(1),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","latest-apply","hyperfiddle.electric.impl.runtime/latest-apply",694267757,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","apply","clojure.core/apply",1654646389,null),new cljs.core.Symbol("clojure.core","array-map","clojure.core/array-map",-1351833961,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","global","hyperfiddle.electric.impl.ir/global",1116145715),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.debug","type","hyperfiddle.electric.debug/type",-166806812),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword(null,"apply","apply",1320385493),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.debug","name","hyperfiddle.electric.debug/name",-35961215),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("clojure.core","+","clojure.core/+",-306971485,null)),null,(1),null))))),null,(1),null)))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("clojure.core","+","clojure.core/+",-306971485,null)),null,(1),null)))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-pub-0","-pub-0",-702992988,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(2),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null))))),null,t__10765__auto___48250,null]));
}finally {RCF__done_BANG_();
}
try{var values__10777__auto___48252 = (new cljs.core.List(null,hyperfiddle.electric.impl.runtime.emit(null,hyperfiddle.electric.impl.ir.variable(hyperfiddle.electric.impl.ir.global(new cljs.core.Keyword("missionary.core","none","missionary.core/none",1289177165)))),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-vars","-vars",2025560914,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","variable","hyperfiddle.electric.impl.runtime/variable",510769532,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"-vars","-vars",2025560914,null),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("missionary.core","none","missionary.core/none",-1365258604,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(2),null));
var result__10778__auto___48253 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto___48252);
if(cljs.core.truth_(result__10778__auto___48253)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"emit","emit",313352509,null),null,cljs.core.list(new cljs.core.Symbol("ir","variable","ir/variable",1359212976,null),cljs.core.list(new cljs.core.Symbol("ir","global","ir/global",1734106421,null),new cljs.core.Keyword("missionary.core","none","missionary.core/none",1289177165)))),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(1),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-vars","-vars",2025560914,null)),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","variable","hyperfiddle.electric.impl.runtime/variable",510769532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-vars","-vars",2025560914,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("missionary.core","none","missionary.core/none",-1365258604,null)),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto___48252),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"emit","emit",313352509,null),null,cljs.core.list(new cljs.core.Symbol("ir","variable","ir/variable",1359212976,null),cljs.core.list(new cljs.core.Symbol("ir","global","ir/global",1734106421,null),new cljs.core.Keyword("missionary.core","none","missionary.core/none",1289177165)))),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(1),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-vars","-vars",2025560914,null)),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","variable","hyperfiddle.electric.impl.runtime/variable",510769532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-vars","-vars",2025560914,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("missionary.core","none","missionary.core/none",-1365258604,null)),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null))))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto___48252),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10777__auto___48252);
}catch (e47634){var t__10765__auto___48257 = e47634;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"emit","emit",313352509,null),null,cljs.core.list(new cljs.core.Symbol("ir","variable","ir/variable",1359212976,null),cljs.core.list(new cljs.core.Symbol("ir","global","ir/global",1734106421,null),new cljs.core.Keyword("missionary.core","none","missionary.core/none",1289177165)))),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(1),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-vars","-vars",2025560914,null)),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","variable","hyperfiddle.electric.impl.runtime/variable",510769532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-vars","-vars",2025560914,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("missionary.core","none","missionary.core/none",-1365258604,null)),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null))))),null,t__10765__auto___48257,null]));
}finally {RCF__done_BANG_();
}
try{var values__10777__auto___48260 = (new cljs.core.List(null,hyperfiddle.electric.impl.runtime.emit(null,hyperfiddle.electric.impl.ir.input(cljs.core.PersistentVector.EMPTY)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-vars","-vars",2025560914,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","input-spawn","hyperfiddle.electric.impl.runtime/input-spawn",1447350587,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(2),null));
var result__10778__auto___48261 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto___48260);
if(cljs.core.truth_(result__10778__auto___48261)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"emit","emit",313352509,null),null,cljs.core.list(new cljs.core.Symbol("ir","input","ir/input",-2097456085,null),cljs.core.PersistentVector.EMPTY)),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(1),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-vars","-vars",2025560914,null)),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","input-spawn","hyperfiddle.electric.impl.runtime/input-spawn",1447350587,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null)))),null,(1),null)))),null,(1),null))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto___48260),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"emit","emit",313352509,null),null,cljs.core.list(new cljs.core.Symbol("ir","input","ir/input",-2097456085,null),cljs.core.PersistentVector.EMPTY)),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(1),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-vars","-vars",2025560914,null)),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","input-spawn","hyperfiddle.electric.impl.runtime/input-spawn",1447350587,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null)))),null,(1),null)))),null,(1),null))))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto___48260),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10777__auto___48260);
}catch (e47635){var t__10765__auto___48266 = e47635;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"emit","emit",313352509,null),null,cljs.core.list(new cljs.core.Symbol("ir","input","ir/input",-2097456085,null),cljs.core.PersistentVector.EMPTY)),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(1),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-vars","-vars",2025560914,null)),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","input-spawn","hyperfiddle.electric.impl.runtime/input-spawn",1447350587,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null)))),null,(1),null)))),null,(1),null))))),null,t__10765__auto___48266,null]));
}finally {RCF__done_BANG_();
}
try{var values__10777__auto___48268 = (new cljs.core.List(null,hyperfiddle.electric.impl.runtime.emit(null,hyperfiddle.electric.impl.ir.constant(hyperfiddle.electric.impl.ir.literal(new cljs.core.Keyword(null,"foo","foo",1268894036)))),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-vars","-vars",2025560914,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","constant","hyperfiddle.electric.impl.runtime/constant",73011709,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","constructor","hyperfiddle.electric.impl.runtime/constructor",-1501318103,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-vars","-vars",2025560914,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","check-failure","hyperfiddle.electric.impl.runtime/check-failure",-1123078405,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","constant","hyperfiddle.electric.impl.ir/constant",-1502571107),null,(1),null)))))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"foo","foo",1268894036),null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(2),null));
var result__10778__auto___48269 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto___48268);
if(cljs.core.truth_(result__10778__auto___48269)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"emit","emit",313352509,null),null,cljs.core.list(new cljs.core.Symbol("ir","constant","ir/constant",1260923049,null),cljs.core.list(new cljs.core.Symbol("ir","literal","ir/literal",-989689721,null),new cljs.core.Keyword(null,"foo","foo",1268894036)))),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(1),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-vars","-vars",2025560914,null)),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","constant","hyperfiddle.electric.impl.runtime/constant",73011709,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","constructor","hyperfiddle.electric.impl.runtime/constructor",-1501318103,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-vars","-vars",2025560914,null)),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","check-failure","hyperfiddle.electric.impl.runtime/check-failure",-1123078405,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","apply","clojure.core/apply",1654646389,null),new cljs.core.Symbol("clojure.core","array-map","clojure.core/array-map",-1351833961,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","constant","hyperfiddle.electric.impl.ir/constant",-1502571107),null,(1),null))))),null,(1),null)))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword(null,"foo","foo",1268894036),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto___48268),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"emit","emit",313352509,null),null,cljs.core.list(new cljs.core.Symbol("ir","constant","ir/constant",1260923049,null),cljs.core.list(new cljs.core.Symbol("ir","literal","ir/literal",-989689721,null),new cljs.core.Keyword(null,"foo","foo",1268894036)))),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(1),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-vars","-vars",2025560914,null)),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","constant","hyperfiddle.electric.impl.runtime/constant",73011709,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","constructor","hyperfiddle.electric.impl.runtime/constructor",-1501318103,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-vars","-vars",2025560914,null)),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","check-failure","hyperfiddle.electric.impl.runtime/check-failure",-1123078405,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","apply","clojure.core/apply",1654646389,null),new cljs.core.Symbol("clojure.core","array-map","clojure.core/array-map",-1351833961,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","constant","hyperfiddle.electric.impl.ir/constant",-1502571107),null,(1),null))))),null,(1),null)))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword(null,"foo","foo",1268894036),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null))))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto___48268),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10777__auto___48268);
}catch (e47636){var t__10765__auto___48291 = e47636;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"emit","emit",313352509,null),null,cljs.core.list(new cljs.core.Symbol("ir","constant","ir/constant",1260923049,null),cljs.core.list(new cljs.core.Symbol("ir","literal","ir/literal",-989689721,null),new cljs.core.Keyword(null,"foo","foo",1268894036)))),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(1),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-vars","-vars",2025560914,null)),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","constant","hyperfiddle.electric.impl.runtime/constant",73011709,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","constructor","hyperfiddle.electric.impl.runtime/constructor",-1501318103,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-vars","-vars",2025560914,null)),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","check-failure","hyperfiddle.electric.impl.runtime/check-failure",-1123078405,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","apply","clojure.core/apply",1654646389,null),new cljs.core.Symbol("clojure.core","array-map","clojure.core/array-map",-1351833961,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","constant","hyperfiddle.electric.impl.ir/constant",-1502571107),null,(1),null))))),null,(1),null)))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword(null,"foo","foo",1268894036),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null))))),null,t__10765__auto___48291,null]));
}finally {RCF__done_BANG_();
}
hyperfiddle.electric.impl.runtime.emit(null,hyperfiddle.electric.impl.ir.variable(hyperfiddle.electric.impl.ir.pub(hyperfiddle.electric.impl.ir.constant(hyperfiddle.electric.impl.ir.literal((3))),hyperfiddle.electric.impl.ir.pub(hyperfiddle.electric.impl.ir.constant(hyperfiddle.electric.impl.ir.input(cljs.core.PersistentVector.EMPTY)),hyperfiddle.electric.impl.ir.apply.cljs$core$IFn$_invoke$arity$variadic(hyperfiddle.electric.impl.ir.apply.cljs$core$IFn$_invoke$arity$variadic(hyperfiddle.electric.impl.ir.global(new cljs.core.Keyword("clojure.core","hash-map","clojure.core/hash-map",-1301623122)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hyperfiddle.electric.impl.ir.literal((2)),hyperfiddle.electric.impl.ir.sub((2)),hyperfiddle.electric.impl.ir.literal((4)),hyperfiddle.electric.impl.ir.sub((1)),hyperfiddle.electric.impl.ir.literal((5)),hyperfiddle.electric.impl.ir.sub((1))], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hyperfiddle.electric.impl.ir.literal((1)),hyperfiddle.electric.impl.ir.constant(hyperfiddle.electric.impl.ir.literal((7)))], 0))))));

cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(3),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-vars","-vars",2025560914,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","variable","hyperfiddle.electric.impl.runtime/variable",510769532,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"-vars","-vars",2025560914,null),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"-pub-0","-pub-0",-702992988,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","signal","hyperfiddle.electric.impl.runtime/signal",340452693,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","constant","hyperfiddle.electric.impl.runtime/constant",73011709,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","constructor","hyperfiddle.electric.impl.runtime/constructor",-1501318103,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-vars","-vars",2025560914,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","check-failure","hyperfiddle.electric.impl.runtime/check-failure",-1123078405,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,(3),null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"-pub-1","-pub-1",1948183132,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","signal","hyperfiddle.electric.impl.runtime/signal",340452693,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","constant","hyperfiddle.electric.impl.runtime/constant",73011709,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(1),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","constructor","hyperfiddle.electric.impl.runtime/constructor",-1501318103,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-vars","-vars",2025560914,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","check-failure","hyperfiddle.electric.impl.runtime/check-failure",-1123078405,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","input-spawn","hyperfiddle.electric.impl.runtime/input-spawn",1447350587,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","latest-apply","hyperfiddle.electric.impl.runtime/latest-apply",694267757,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword("hyperfiddle.electric.debug","type","hyperfiddle.electric.debug/type",-166806812),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"unknown-apply","unknown-apply",-1407042085),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"op","op",-1882987955),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"apply","apply",1320385493),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"global","global",93595047),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("clojure.core","hash-map","clojure.core/hash-map",-1301623122),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,null,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"literal","literal",1664775605),null,(1),null)),(new cljs.core.List(null,(2),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"sub","sub",-2093760025),null,(1),null)),(new cljs.core.List(null,(2),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"literal","literal",1664775605),null,(1),null)),(new cljs.core.List(null,(4),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"sub","sub",-2093760025),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"literal","literal",1664775605),null,(1),null)),(new cljs.core.List(null,(5),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"sub","sub",-2093760025),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)))))),null,(1),null))], 0))))),null,(1),null))], 0))))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","latest-apply","hyperfiddle.electric.impl.runtime/latest-apply",694267757,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","global","hyperfiddle.electric.impl.ir/global",1116145715),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("hyperfiddle.electric.debug","type","hyperfiddle.electric.debug/type",-166806812),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"apply","apply",1320385493),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("hyperfiddle.electric.debug","name","hyperfiddle.electric.debug/name",-35961215),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","hash-map","cljs.core/hash-map",303385767,null),null,(1),null))], 0))))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","hash-map","cljs.core/hash-map",303385767,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,(2),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-pub-0","-pub-0",-702992988,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,(4),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-pub-1","-pub-1",1948183132,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,(5),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-pub-1","-pub-1",1948183132,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","constant","hyperfiddle.electric.impl.runtime/constant",73011709,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(2),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","constructor","hyperfiddle.electric.impl.runtime/constructor",-1501318103,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-vars","-vars",2025560914,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","check-failure","hyperfiddle.electric.impl.runtime/check-failure",-1123078405,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,(7),null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));

try{var values__10777__auto___48325 = (new cljs.core.List(null,hyperfiddle.electric.impl.runtime.emit(null,hyperfiddle.electric.impl.ir.inject((0))),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-vars","-vars",2025560914,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","inject","hyperfiddle.electric.impl.runtime/inject",-834159193,null),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(2),null));
var result__10778__auto___48326 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto___48325);
if(cljs.core.truth_(result__10778__auto___48326)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"emit","emit",313352509,null),null,cljs.core.list(new cljs.core.Symbol("ir","inject","ir/inject",-242092525,null),(0))),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(1),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-vars","-vars",2025560914,null)),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","inject","hyperfiddle.electric.impl.runtime/inject",-834159193,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto___48325),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"emit","emit",313352509,null),null,cljs.core.list(new cljs.core.Symbol("ir","inject","ir/inject",-242092525,null),(0))),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(1),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-vars","-vars",2025560914,null)),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","inject","hyperfiddle.electric.impl.runtime/inject",-834159193,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null))))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto___48325),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10777__auto___48325);
}catch (e47637){var t__10765__auto___48333 = e47637;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"emit","emit",313352509,null),null,cljs.core.list(new cljs.core.Symbol("ir","inject","ir/inject",-242092525,null),(0))),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(1),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-vars","-vars",2025560914,null)),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","inject","hyperfiddle.electric.impl.runtime/inject",-834159193,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null))))),null,t__10765__auto___48333,null]));
}finally {RCF__done_BANG_();
}
try{var values__10777__auto__ = (new cljs.core.List(null,hyperfiddle.electric.impl.runtime.emit(null,hyperfiddle.electric.impl.ir.pub(hyperfiddle.electric.impl.ir.literal(null),hyperfiddle.electric.impl.ir.constant(hyperfiddle.electric.impl.ir.sub((1))))),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-vars","-vars",2025560914,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"-pub-0","-pub-0",-702992988,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","signal","hyperfiddle.electric.impl.runtime/signal",340452693,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","constant","hyperfiddle.electric.impl.runtime/constant",73011709,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","constructor","hyperfiddle.electric.impl.runtime/constructor",-1501318103,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"-pub-0","-pub-0",-702992988,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-vars","-vars",2025560914,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","check-failure","hyperfiddle.electric.impl.runtime/check-failure",-1123078405,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","constant","hyperfiddle.electric.impl.ir/constant",-1502571107),null,(1),null)))))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","static","hyperfiddle.electric.impl.runtime/static",-547873025,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(0),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(2),null));
var result__10778__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto__);
if(cljs.core.truth_(result__10778__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"emit","emit",313352509,null),null,cljs.core.list(new cljs.core.Symbol("ir","pub","ir/pub",451390874,null),cljs.core.list(new cljs.core.Symbol("ir","literal","ir/literal",-989689721,null),null),cljs.core.list(new cljs.core.Symbol("ir","constant","ir/constant",1260923049,null),cljs.core.list(new cljs.core.Symbol("ir","sub","ir/sub",-453228841,null),(1))))),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(1),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-vars","-vars",2025560914,null)),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-pub-0","-pub-0",-702992988,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","signal","hyperfiddle.electric.impl.runtime/signal",340452693,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,null,null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","constant","hyperfiddle.electric.impl.runtime/constant",73011709,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","constructor","hyperfiddle.electric.impl.runtime/constructor",-1501318103,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-pub-0","-pub-0",-702992988,null)),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-vars","-vars",2025560914,null)),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","check-failure","hyperfiddle.electric.impl.runtime/check-failure",-1123078405,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","apply","clojure.core/apply",1654646389,null),new cljs.core.Symbol("clojure.core","array-map","clojure.core/array-map",-1351833961,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","constant","hyperfiddle.electric.impl.ir/constant",-1502571107),null,(1),null))))),null,(1),null)))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","static","hyperfiddle.electric.impl.runtime/static",-547873025,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"emit","emit",313352509,null),null,cljs.core.list(new cljs.core.Symbol("ir","pub","ir/pub",451390874,null),cljs.core.list(new cljs.core.Symbol("ir","literal","ir/literal",-989689721,null),null),cljs.core.list(new cljs.core.Symbol("ir","constant","ir/constant",1260923049,null),cljs.core.list(new cljs.core.Symbol("ir","sub","ir/sub",-453228841,null),(1))))),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(1),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-vars","-vars",2025560914,null)),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-pub-0","-pub-0",-702992988,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","signal","hyperfiddle.electric.impl.runtime/signal",340452693,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,null,null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","constant","hyperfiddle.electric.impl.runtime/constant",73011709,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","constructor","hyperfiddle.electric.impl.runtime/constructor",-1501318103,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-pub-0","-pub-0",-702992988,null)),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-vars","-vars",2025560914,null)),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","check-failure","hyperfiddle.electric.impl.runtime/check-failure",-1123078405,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","apply","clojure.core/apply",1654646389,null),new cljs.core.Symbol("clojure.core","array-map","clojure.core/array-map",-1351833961,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","constant","hyperfiddle.electric.impl.ir/constant",-1502571107),null,(1),null))))),null,(1),null)))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","static","hyperfiddle.electric.impl.runtime/static",-547873025,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null))))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return cljs.core.first(values__10777__auto__);
}catch (e47638){var t__10765__auto__ = e47638;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"emit","emit",313352509,null),null,cljs.core.list(new cljs.core.Symbol("ir","pub","ir/pub",451390874,null),cljs.core.list(new cljs.core.Symbol("ir","literal","ir/literal",-989689721,null),null),cljs.core.list(new cljs.core.Symbol("ir","constant","ir/constant",1260923049,null),cljs.core.list(new cljs.core.Symbol("ir","sub","ir/sub",-453228841,null),(1))))),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(1),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-vars","-vars",2025560914,null)),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-pub-0","-pub-0",-702992988,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","signal","hyperfiddle.electric.impl.runtime/signal",340452693,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,null,null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","constant","hyperfiddle.electric.impl.runtime/constant",73011709,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","constructor","hyperfiddle.electric.impl.runtime/constructor",-1501318103,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-pub-0","-pub-0",-702992988,null)),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-vars","-vars",2025560914,null)),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","check-failure","hyperfiddle.electric.impl.runtime/check-failure",-1123078405,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","apply","clojure.core/apply",1654646389,null),new cljs.core.Symbol("clojure.core","array-map","clojure.core/array-map",-1351833961,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","constant","hyperfiddle.electric.impl.ir/constant",-1502571107),null,(1),null))))),null,(1),null)))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","static","hyperfiddle.electric.impl.runtime/static",-547873025,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null))))),null,t__10765__auto__,null]));
}finally {RCF__done_BANG_();
}}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47626.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta47627","meta47627",1315555608,null)], null);
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47626.cljs$lang$type = true);

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47626.cljs$lang$ctorStr = "hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime47626");

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47626.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime47626");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime47626.
 */
hyperfiddle.electric.impl.runtime.__GT_t_hyperfiddle$electric$impl$runtime47626 = (function hyperfiddle$electric$impl$runtime$__GT_t_hyperfiddle$electric$impl$runtime47626(meta47627){
return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47626(meta47627));
});


hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1006 = (function hyperfiddle$electric$impl$runtime$generated__hyperfiddle_electric_impl_runtime_1006(){
return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47626(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1006;},new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","generated__hyperfiddle_electric_impl_runtime_1006","hyperfiddle.electric.impl.runtime/generated__hyperfiddle_electric_impl_runtime_1006",-1117564820,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"hyperfiddle/electric/impl/runtime.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"hyperfiddle.electric.impl.runtime","hyperfiddle.electric.impl.runtime",-92393903,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),1006,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__hyperfiddle_electric_impl_runtime_1006","generated__hyperfiddle_electric_impl_runtime_1006",1882553851,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1006)?hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1006.cljs$lang$test:null)], null)),hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1006));
} else {
}
hyperfiddle.electric.impl.runtime.juxt_with = (function hyperfiddle$electric$impl$runtime$juxt_with(var_args){
var G__47650 = arguments.length;
switch (G__47650) {
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
var len__5769__auto___48377 = arguments.length;
var i__5770__auto___48378 = (0);
while(true){
if((i__5770__auto___48378 < len__5769__auto___48377)){
args_arr__5794__auto__.push((arguments[i__5770__auto___48378]));

var G__48379 = (i__5770__auto___48378 + (1));
i__5770__auto___48378 = G__48379;
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
var G__48381 = null;
var G__48381__0 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__48381__1 = (function (a){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__48381__2 = (function (a,b){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__48381__3 = (function (a,b,c){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__48381__4 = (function() { 
var G__48383__delegate = function (a,b,c,ds){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
};
var G__48383 = function (a,b,c,var_args){
var ds = null;
if (arguments.length > 3) {
var G__48386__i = 0, G__48386__a = new Array(arguments.length -  3);
while (G__48386__i < G__48386__a.length) {G__48386__a[G__48386__i] = arguments[G__48386__i + 3]; ++G__48386__i;}
  ds = new cljs.core.IndexedSeq(G__48386__a,0,null);
} 
return G__48383__delegate.call(this,a,b,c,ds);};
G__48383.cljs$lang$maxFixedArity = 3;
G__48383.cljs$lang$applyTo = (function (arglist__48389){
var a = cljs.core.first(arglist__48389);
arglist__48389 = cljs.core.next(arglist__48389);
var b = cljs.core.first(arglist__48389);
arglist__48389 = cljs.core.next(arglist__48389);
var c = cljs.core.first(arglist__48389);
var ds = cljs.core.rest(arglist__48389);
return G__48383__delegate(a,b,c,ds);
});
G__48383.cljs$core$IFn$_invoke$arity$variadic = G__48383__delegate;
return G__48383;
})()
;
G__48381 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 0:
return G__48381__0.call(this);
case 1:
return G__48381__1.call(this,a);
case 2:
return G__48381__2.call(this,a,b);
case 3:
return G__48381__3.call(this,a,b,c);
default:
var G__48390 = null;
if (arguments.length > 3) {
var G__48392__i = 0, G__48392__a = new Array(arguments.length -  3);
while (G__48392__i < G__48392__a.length) {G__48392__a[G__48392__i] = arguments[G__48392__i + 3]; ++G__48392__i;}
G__48390 = new cljs.core.IndexedSeq(G__48392__a,0,null);
}
return G__48381__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, G__48390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__48381.cljs$lang$maxFixedArity = 3;
G__48381.cljs$lang$applyTo = G__48381__4.cljs$lang$applyTo;
G__48381.cljs$core$IFn$_invoke$arity$0 = G__48381__0;
G__48381.cljs$core$IFn$_invoke$arity$1 = G__48381__1;
G__48381.cljs$core$IFn$_invoke$arity$2 = G__48381__2;
G__48381.cljs$core$IFn$_invoke$arity$3 = G__48381__3;
G__48381.cljs$core$IFn$_invoke$arity$variadic = G__48381__4.cljs$core$IFn$_invoke$arity$variadic;
return G__48381;
})()
}));

(hyperfiddle.electric.impl.runtime.juxt_with.cljs$core$IFn$_invoke$arity$2 = (function (f,g){
return (function() {
var G__48394 = null;
var G__48394__0 = (function (){
var G__47651 = (g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__47651) : f.call(null,G__47651));
});
var G__48394__1 = (function (a){
var G__47652 = (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(a) : g.call(null,a));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__47652) : f.call(null,G__47652));
});
var G__48394__2 = (function (a,b){
var G__47653 = (g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(a,b) : g.call(null,a,b));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__47653) : f.call(null,G__47653));
});
var G__48394__3 = (function (a,b,c){
var G__47654 = (g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(a,b,c) : g.call(null,a,b,c));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__47654) : f.call(null,G__47654));
});
var G__48394__4 = (function() { 
var G__48397__delegate = function (a,b,c,ds){
var G__47655 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,a,b,c,ds);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__47655) : f.call(null,G__47655));
};
var G__48397 = function (a,b,c,var_args){
var ds = null;
if (arguments.length > 3) {
var G__48398__i = 0, G__48398__a = new Array(arguments.length -  3);
while (G__48398__i < G__48398__a.length) {G__48398__a[G__48398__i] = arguments[G__48398__i + 3]; ++G__48398__i;}
  ds = new cljs.core.IndexedSeq(G__48398__a,0,null);
} 
return G__48397__delegate.call(this,a,b,c,ds);};
G__48397.cljs$lang$maxFixedArity = 3;
G__48397.cljs$lang$applyTo = (function (arglist__48399){
var a = cljs.core.first(arglist__48399);
arglist__48399 = cljs.core.next(arglist__48399);
var b = cljs.core.first(arglist__48399);
arglist__48399 = cljs.core.next(arglist__48399);
var c = cljs.core.first(arglist__48399);
var ds = cljs.core.rest(arglist__48399);
return G__48397__delegate(a,b,c,ds);
});
G__48397.cljs$core$IFn$_invoke$arity$variadic = G__48397__delegate;
return G__48397;
})()
;
G__48394 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 0:
return G__48394__0.call(this);
case 1:
return G__48394__1.call(this,a);
case 2:
return G__48394__2.call(this,a,b);
case 3:
return G__48394__3.call(this,a,b,c);
default:
var G__48400 = null;
if (arguments.length > 3) {
var G__48401__i = 0, G__48401__a = new Array(arguments.length -  3);
while (G__48401__i < G__48401__a.length) {G__48401__a[G__48401__i] = arguments[G__48401__i + 3]; ++G__48401__i;}
G__48400 = new cljs.core.IndexedSeq(G__48401__a,0,null);
}
return G__48394__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, G__48400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__48394.cljs$lang$maxFixedArity = 3;
G__48394.cljs$lang$applyTo = G__48394__4.cljs$lang$applyTo;
G__48394.cljs$core$IFn$_invoke$arity$0 = G__48394__0;
G__48394.cljs$core$IFn$_invoke$arity$1 = G__48394__1;
G__48394.cljs$core$IFn$_invoke$arity$2 = G__48394__2;
G__48394.cljs$core$IFn$_invoke$arity$3 = G__48394__3;
G__48394.cljs$core$IFn$_invoke$arity$variadic = G__48394__4.cljs$core$IFn$_invoke$arity$variadic;
return G__48394;
})()
}));

(hyperfiddle.electric.impl.runtime.juxt_with.cljs$core$IFn$_invoke$arity$3 = (function (f,g,h){
return (function() {
var G__48402 = null;
var G__48402__0 = (function (){
var G__47656 = (g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null));
var G__47657 = (h.cljs$core$IFn$_invoke$arity$0 ? h.cljs$core$IFn$_invoke$arity$0() : h.call(null));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__47656,G__47657) : f.call(null,G__47656,G__47657));
});
var G__48402__1 = (function (a){
var G__47658 = (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(a) : g.call(null,a));
var G__47659 = (h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(a) : h.call(null,a));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__47658,G__47659) : f.call(null,G__47658,G__47659));
});
var G__48402__2 = (function (a,b){
var G__47660 = (g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(a,b) : g.call(null,a,b));
var G__47661 = (h.cljs$core$IFn$_invoke$arity$2 ? h.cljs$core$IFn$_invoke$arity$2(a,b) : h.call(null,a,b));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__47660,G__47661) : f.call(null,G__47660,G__47661));
});
var G__48402__3 = (function (a,b,c){
var G__47662 = (g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(a,b,c) : g.call(null,a,b,c));
var G__47663 = (h.cljs$core$IFn$_invoke$arity$3 ? h.cljs$core$IFn$_invoke$arity$3(a,b,c) : h.call(null,a,b,c));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__47662,G__47663) : f.call(null,G__47662,G__47663));
});
var G__48402__4 = (function() { 
var G__48405__delegate = function (a,b,c,ds){
var G__47664 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,a,b,c,ds);
var G__47665 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(h,a,b,c,ds);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__47664,G__47665) : f.call(null,G__47664,G__47665));
};
var G__48405 = function (a,b,c,var_args){
var ds = null;
if (arguments.length > 3) {
var G__48408__i = 0, G__48408__a = new Array(arguments.length -  3);
while (G__48408__i < G__48408__a.length) {G__48408__a[G__48408__i] = arguments[G__48408__i + 3]; ++G__48408__i;}
  ds = new cljs.core.IndexedSeq(G__48408__a,0,null);
} 
return G__48405__delegate.call(this,a,b,c,ds);};
G__48405.cljs$lang$maxFixedArity = 3;
G__48405.cljs$lang$applyTo = (function (arglist__48411){
var a = cljs.core.first(arglist__48411);
arglist__48411 = cljs.core.next(arglist__48411);
var b = cljs.core.first(arglist__48411);
arglist__48411 = cljs.core.next(arglist__48411);
var c = cljs.core.first(arglist__48411);
var ds = cljs.core.rest(arglist__48411);
return G__48405__delegate(a,b,c,ds);
});
G__48405.cljs$core$IFn$_invoke$arity$variadic = G__48405__delegate;
return G__48405;
})()
;
G__48402 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 0:
return G__48402__0.call(this);
case 1:
return G__48402__1.call(this,a);
case 2:
return G__48402__2.call(this,a,b);
case 3:
return G__48402__3.call(this,a,b,c);
default:
var G__48413 = null;
if (arguments.length > 3) {
var G__48414__i = 0, G__48414__a = new Array(arguments.length -  3);
while (G__48414__i < G__48414__a.length) {G__48414__a[G__48414__i] = arguments[G__48414__i + 3]; ++G__48414__i;}
G__48413 = new cljs.core.IndexedSeq(G__48414__a,0,null);
}
return G__48402__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, G__48413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__48402.cljs$lang$maxFixedArity = 3;
G__48402.cljs$lang$applyTo = G__48402__4.cljs$lang$applyTo;
G__48402.cljs$core$IFn$_invoke$arity$0 = G__48402__0;
G__48402.cljs$core$IFn$_invoke$arity$1 = G__48402__1;
G__48402.cljs$core$IFn$_invoke$arity$2 = G__48402__2;
G__48402.cljs$core$IFn$_invoke$arity$3 = G__48402__3;
G__48402.cljs$core$IFn$_invoke$arity$variadic = G__48402__4.cljs$core$IFn$_invoke$arity$variadic;
return G__48402;
})()
}));

(hyperfiddle.electric.impl.runtime.juxt_with.cljs$core$IFn$_invoke$arity$4 = (function (f,g,h,i){
return (function() {
var G__48415 = null;
var G__48415__0 = (function (){
var G__47666 = (g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null));
var G__47667 = (h.cljs$core$IFn$_invoke$arity$0 ? h.cljs$core$IFn$_invoke$arity$0() : h.call(null));
var G__47668 = (i.cljs$core$IFn$_invoke$arity$0 ? i.cljs$core$IFn$_invoke$arity$0() : i.call(null));
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__47666,G__47667,G__47668) : f.call(null,G__47666,G__47667,G__47668));
});
var G__48415__1 = (function (a){
var G__47669 = (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(a) : g.call(null,a));
var G__47670 = (h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(a) : h.call(null,a));
var G__47671 = (i.cljs$core$IFn$_invoke$arity$1 ? i.cljs$core$IFn$_invoke$arity$1(a) : i.call(null,a));
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__47669,G__47670,G__47671) : f.call(null,G__47669,G__47670,G__47671));
});
var G__48415__2 = (function (a,b){
var G__47672 = (g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(a,b) : g.call(null,a,b));
var G__47673 = (h.cljs$core$IFn$_invoke$arity$2 ? h.cljs$core$IFn$_invoke$arity$2(a,b) : h.call(null,a,b));
var G__47674 = (i.cljs$core$IFn$_invoke$arity$2 ? i.cljs$core$IFn$_invoke$arity$2(a,b) : i.call(null,a,b));
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__47672,G__47673,G__47674) : f.call(null,G__47672,G__47673,G__47674));
});
var G__48415__3 = (function (a,b,c){
var G__47675 = (g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(a,b,c) : g.call(null,a,b,c));
var G__47676 = (h.cljs$core$IFn$_invoke$arity$3 ? h.cljs$core$IFn$_invoke$arity$3(a,b,c) : h.call(null,a,b,c));
var G__47677 = (i.cljs$core$IFn$_invoke$arity$3 ? i.cljs$core$IFn$_invoke$arity$3(a,b,c) : i.call(null,a,b,c));
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__47675,G__47676,G__47677) : f.call(null,G__47675,G__47676,G__47677));
});
var G__48415__4 = (function() { 
var G__48419__delegate = function (a,b,c,ds){
var G__47678 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,a,b,c,ds);
var G__47679 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(h,a,b,c,ds);
var G__47680 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(i,a,b,c,ds);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__47678,G__47679,G__47680) : f.call(null,G__47678,G__47679,G__47680));
};
var G__48419 = function (a,b,c,var_args){
var ds = null;
if (arguments.length > 3) {
var G__48422__i = 0, G__48422__a = new Array(arguments.length -  3);
while (G__48422__i < G__48422__a.length) {G__48422__a[G__48422__i] = arguments[G__48422__i + 3]; ++G__48422__i;}
  ds = new cljs.core.IndexedSeq(G__48422__a,0,null);
} 
return G__48419__delegate.call(this,a,b,c,ds);};
G__48419.cljs$lang$maxFixedArity = 3;
G__48419.cljs$lang$applyTo = (function (arglist__48423){
var a = cljs.core.first(arglist__48423);
arglist__48423 = cljs.core.next(arglist__48423);
var b = cljs.core.first(arglist__48423);
arglist__48423 = cljs.core.next(arglist__48423);
var c = cljs.core.first(arglist__48423);
var ds = cljs.core.rest(arglist__48423);
return G__48419__delegate(a,b,c,ds);
});
G__48419.cljs$core$IFn$_invoke$arity$variadic = G__48419__delegate;
return G__48419;
})()
;
G__48415 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 0:
return G__48415__0.call(this);
case 1:
return G__48415__1.call(this,a);
case 2:
return G__48415__2.call(this,a,b);
case 3:
return G__48415__3.call(this,a,b,c);
default:
var G__48424 = null;
if (arguments.length > 3) {
var G__48425__i = 0, G__48425__a = new Array(arguments.length -  3);
while (G__48425__i < G__48425__a.length) {G__48425__a[G__48425__i] = arguments[G__48425__i + 3]; ++G__48425__i;}
G__48424 = new cljs.core.IndexedSeq(G__48425__a,0,null);
}
return G__48415__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, G__48424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__48415.cljs$lang$maxFixedArity = 3;
G__48415.cljs$lang$applyTo = G__48415__4.cljs$lang$applyTo;
G__48415.cljs$core$IFn$_invoke$arity$0 = G__48415__0;
G__48415.cljs$core$IFn$_invoke$arity$1 = G__48415__1;
G__48415.cljs$core$IFn$_invoke$arity$2 = G__48415__2;
G__48415.cljs$core$IFn$_invoke$arity$3 = G__48415__3;
G__48415.cljs$core$IFn$_invoke$arity$variadic = G__48415__4.cljs$core$IFn$_invoke$arity$variadic;
return G__48415;
})()
}));

(hyperfiddle.electric.impl.runtime.juxt_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,g,h,i,js){
return (function() {
var G__48426 = null;
var G__48426__0 = (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null)),(h.cljs$core$IFn$_invoke$arity$0 ? h.cljs$core$IFn$_invoke$arity$0() : h.call(null)),(i.cljs$core$IFn$_invoke$arity$0 ? i.cljs$core$IFn$_invoke$arity$0() : i.call(null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__47639_SHARP_){
return (p1__47639_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__47639_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__47639_SHARP_.call(null));
}),js));
});
var G__48426__1 = (function (a){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(a) : g.call(null,a)),(h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(a) : h.call(null,a)),(i.cljs$core$IFn$_invoke$arity$1 ? i.cljs$core$IFn$_invoke$arity$1(a) : i.call(null,a)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__47640_SHARP_){
return (p1__47640_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__47640_SHARP_.cljs$core$IFn$_invoke$arity$1(a) : p1__47640_SHARP_.call(null,a));
}),js));
});
var G__48426__2 = (function (a,b){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(a,b) : g.call(null,a,b)),(h.cljs$core$IFn$_invoke$arity$2 ? h.cljs$core$IFn$_invoke$arity$2(a,b) : h.call(null,a,b)),(i.cljs$core$IFn$_invoke$arity$2 ? i.cljs$core$IFn$_invoke$arity$2(a,b) : i.call(null,a,b)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__47641_SHARP_){
return (p1__47641_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p1__47641_SHARP_.cljs$core$IFn$_invoke$arity$2(a,b) : p1__47641_SHARP_.call(null,a,b));
}),js));
});
var G__48426__3 = (function (a,b,c){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(a,b,c) : g.call(null,a,b,c)),(h.cljs$core$IFn$_invoke$arity$3 ? h.cljs$core$IFn$_invoke$arity$3(a,b,c) : h.call(null,a,b,c)),(i.cljs$core$IFn$_invoke$arity$3 ? i.cljs$core$IFn$_invoke$arity$3(a,b,c) : i.call(null,a,b,c)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__47642_SHARP_){
return (p1__47642_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p1__47642_SHARP_.cljs$core$IFn$_invoke$arity$3(a,b,c) : p1__47642_SHARP_.call(null,a,b,c));
}),js));
});
var G__48426__4 = (function() { 
var G__48429__delegate = function (a,b,c,ds){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,a,b,c,ds),cljs.core.apply.cljs$core$IFn$_invoke$arity$5(h,a,b,c,ds),cljs.core.apply.cljs$core$IFn$_invoke$arity$5(i,a,b,c,ds),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__47643_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(p1__47643_SHARP_,a,b,c,ds);
}),js));
};
var G__48429 = function (a,b,c,var_args){
var ds = null;
if (arguments.length > 3) {
var G__48430__i = 0, G__48430__a = new Array(arguments.length -  3);
while (G__48430__i < G__48430__a.length) {G__48430__a[G__48430__i] = arguments[G__48430__i + 3]; ++G__48430__i;}
  ds = new cljs.core.IndexedSeq(G__48430__a,0,null);
} 
return G__48429__delegate.call(this,a,b,c,ds);};
G__48429.cljs$lang$maxFixedArity = 3;
G__48429.cljs$lang$applyTo = (function (arglist__48431){
var a = cljs.core.first(arglist__48431);
arglist__48431 = cljs.core.next(arglist__48431);
var b = cljs.core.first(arglist__48431);
arglist__48431 = cljs.core.next(arglist__48431);
var c = cljs.core.first(arglist__48431);
var ds = cljs.core.rest(arglist__48431);
return G__48429__delegate(a,b,c,ds);
});
G__48429.cljs$core$IFn$_invoke$arity$variadic = G__48429__delegate;
return G__48429;
})()
;
G__48426 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 0:
return G__48426__0.call(this);
case 1:
return G__48426__1.call(this,a);
case 2:
return G__48426__2.call(this,a,b);
case 3:
return G__48426__3.call(this,a,b,c);
default:
var G__48433 = null;
if (arguments.length > 3) {
var G__48434__i = 0, G__48434__a = new Array(arguments.length -  3);
while (G__48434__i < G__48434__a.length) {G__48434__a[G__48434__i] = arguments[G__48434__i + 3]; ++G__48434__i;}
G__48433 = new cljs.core.IndexedSeq(G__48434__a,0,null);
}
return G__48426__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, G__48433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__48426.cljs$lang$maxFixedArity = 3;
G__48426.cljs$lang$applyTo = G__48426__4.cljs$lang$applyTo;
G__48426.cljs$core$IFn$_invoke$arity$0 = G__48426__0;
G__48426.cljs$core$IFn$_invoke$arity$1 = G__48426__1;
G__48426.cljs$core$IFn$_invoke$arity$2 = G__48426__2;
G__48426.cljs$core$IFn$_invoke$arity$3 = G__48426__3;
G__48426.cljs$core$IFn$_invoke$arity$variadic = G__48426__4.cljs$core$IFn$_invoke$arity$variadic;
return G__48426;
})()
}));

/** @this {Function} */
(hyperfiddle.electric.impl.runtime.juxt_with.cljs$lang$applyTo = (function (seq47645){
var G__47646 = cljs.core.first(seq47645);
var seq47645__$1 = cljs.core.next(seq47645);
var G__47647 = cljs.core.first(seq47645__$1);
var seq47645__$2 = cljs.core.next(seq47645__$1);
var G__47648 = cljs.core.first(seq47645__$2);
var seq47645__$3 = cljs.core.next(seq47645__$2);
var G__47649 = cljs.core.first(seq47645__$3);
var seq47645__$4 = cljs.core.next(seq47645__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47646,G__47647,G__47648,G__47649,seq47645__$4);
}));

(hyperfiddle.electric.impl.runtime.juxt_with.cljs$lang$maxFixedArity = (4));

hyperfiddle.electric.impl.runtime.globals = (function hyperfiddle$electric$impl$runtime$globals(program){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace,cljs.core.name),cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.vector_QMARK_),cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p__47681){
var vec__47682 = p__47681;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47682,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47682,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"global","global",93595047),a);
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.second),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.distinct.cljs$core$IFn$_invoke$arity$0()], 0)),cljs.core.tree_seq(cljs.core.coll_QMARK_,cljs.core.seq,program)], 0)));
});
hyperfiddle.electric.impl.runtime.missing_exports = (function hyperfiddle$electric$impl$runtime$missing_exports(resolvef,program){
return cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(resolvef,new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","not-found","hyperfiddle.electric.impl.runtime/not-found",-1898753095)),cljs.core.identity)),cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__47685_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","not-found","hyperfiddle.electric.impl.runtime/not-found",-1898753095),cljs.core.first(p1__47685_SHARP_));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.second),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol),hyperfiddle.electric.impl.runtime.globals(program)], 0));
});
hyperfiddle.electric.impl.runtime.dynamic_resolve = (function hyperfiddle$electric$impl$runtime$dynamic_resolve(nf,x){
return nf;
});
hyperfiddle.electric.impl.runtime.eval = (function hyperfiddle$electric$impl$runtime$eval(var_args){
var G__47687 = arguments.length;
switch (G__47687) {
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
var G__47688 = r;
var G__47688__$1 = (((G__47688 instanceof cljs.core.Keyword))?G__47688.fqn:null);
switch (G__47688__$1) {
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
var G__48442__delegate = function (args){
return hyperfiddle.electric.impl.runtime.check_failure(debug_info,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(form,pubs,args));
};
var G__48442 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48443__i = 0, G__48443__a = new Array(arguments.length -  0);
while (G__48443__i < G__48443__a.length) {G__48443__a[G__48443__i] = arguments[G__48443__i + 0]; ++G__48443__i;}
  args = new cljs.core.IndexedSeq(G__48443__a,0,null);
} 
return G__48442__delegate.call(this,args);};
G__48442.cljs$lang$maxFixedArity = 0;
G__48442.cljs$lang$applyTo = (function (arglist__48444){
var args = cljs.core.seq(arglist__48444);
return G__48442__delegate(args);
});
G__48442.cljs$core$IFn$_invoke$arity$variadic = G__48442__delegate;
return G__48442;
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
var G__48445__delegate = function (debug_info,forms){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.juxt_with,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.runtime.latest_apply,debug_info),forms);
};
var G__48445 = function (debug_info,var_args){
var forms = null;
if (arguments.length > 1) {
var G__48447__i = 0, G__48447__a = new Array(arguments.length -  1);
while (G__48447__i < G__48447__a.length) {G__48447__a[G__48447__i] = arguments[G__48447__i + 1]; ++G__48447__i;}
  forms = new cljs.core.IndexedSeq(G__48447__a,0,null);
} 
return G__48445__delegate.call(this,debug_info,forms);};
G__48445.cljs$lang$maxFixedArity = 1;
G__48445.cljs$lang$applyTo = (function (arglist__48448){
var debug_info = cljs.core.first(arglist__48448);
var forms = cljs.core.rest(arglist__48448);
return G__48445__delegate(debug_info,forms);
});
G__48445.cljs$core$IFn$_invoke$arity$variadic = G__48445__delegate;
return G__48445;
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
var G__47689 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pubs,hyperfiddle.electric.impl.runtime.signal((form.cljs$core$IFn$_invoke$arity$3 ? form.cljs$core$IFn$_invoke$arity$3(pubs,frame,vars) : form.call(null,pubs,frame,vars))));
var G__47690 = frame;
var G__47691 = vars;
return (cont.cljs$core$IFn$_invoke$arity$3 ? cont.cljs$core$IFn$_invoke$arity$3(G__47689,G__47690,G__47691) : cont.call(null,G__47689,G__47690,G__47691));
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
var temp__5806__auto__ = (function (){var G__47692 = ns;
if((G__47692 == null)){
return null;
} else {
return cljs.core.find_ns(G__47692);
}
})();
if((temp__5806__auto__ == null)){
return cljs.core.constantly(hyperfiddle.electric.impl.runtime.pure(cljs.core.eval(form)));
} else {
var ns__$1 = temp__5806__auto__;
return cljs.core.constantly(hyperfiddle.electric.impl.runtime.pure((function (){var _STAR_ns_STAR__orig_val__47693 = cljs.core._STAR_ns_STAR_;
var _STAR_ns_STAR__temp_val__47694 = ns__$1;
(cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__47694);

try{return cljs.core.eval(form);
}finally {(cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__47693);
}})()));
}
})]));
}));

(hyperfiddle.electric.impl.runtime.eval.cljs$lang$maxFixedArity = 2);

hyperfiddle.electric.impl.runtime.queue = (function hyperfiddle$electric$impl$runtime$queue(){
var q = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((0));
return (function() {
var G__48452 = null;
var G__48452__0 = (function (){
if((q.length === (0))){
throw (new Error("No such element."));
} else {
}

return q.shift();
});
var G__48452__1 = (function (x){
q.push(x);

return x;
});
G__48452 = function(x){
switch(arguments.length){
case 0:
return G__48452__0.call(this);
case 1:
return G__48452__1.call(this,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__48452.cljs$core$IFn$_invoke$arity$0 = G__48452__0;
G__48452.cljs$core$IFn$_invoke$arity$1 = G__48452__1;
return G__48452;
})()
});

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47697 = (function (meta47698){
this.meta47698 = meta47698;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47699,meta47698__$1){
var self__ = this;
var _47699__$1 = this;
return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47697(meta47698__$1));
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47697.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47699){
var self__ = this;
var _47699__$1 = this;
return self__.meta47698;
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47697.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47697.prototype.call = (function (unused__27532__auto__){
var self__ = this;
var self__ = this;
var G__47701 = (arguments.length - (1));
switch (G__47701) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47697.prototype.apply = (function (self__,args47700){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args47700)));
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47697.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_47696){
var self__ = this;
var ___27185__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(2,done_47696);
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["uncaught exception crash"], 0));

try{var q = hyperfiddle.electric.impl.runtime.queue();
var _BANG_x = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var c = (function (){var fexpr__47706 = (function (){var G__47708 = (function (x){
q(x);

return (function (s,_){
q((function (){
return (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(null) : s.call(null,null));
}));

return (function (){
return cljs.core.List.EMPTY;
});
});
});
var G__47709 = (function (_BANG_){
q(_BANG_);

return (function (){
return cljs.core.List.EMPTY;
});
});
var G__47710 = (function (e){
throw e;
});
var fexpr__47707 = hyperfiddle.electric.impl.runtime.eval.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.ir.apply.cljs$core$IFn$_invoke$arity$variadic(hyperfiddle.electric.impl.ir.literal(q),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hyperfiddle.electric.impl.ir.apply.cljs$core$IFn$_invoke$arity$variadic(hyperfiddle.electric.impl.ir.literal((function (p1__47695_SHARP_){
if(cljs.core.truth_(p1__47695_SHARP_)){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("boom",cljs.core.PersistentArrayMap.EMPTY);
}
})),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hyperfiddle.electric.impl.ir.variable(hyperfiddle.electric.impl.ir.literal(missionary.core.watch(_BANG_x)))], 0))], 0)));
return (fexpr__47707.cljs$core$IFn$_invoke$arity$3 ? fexpr__47707.cljs$core$IFn$_invoke$arity$3(G__47708,G__47709,G__47710) : fexpr__47707.call(null,G__47708,G__47709,G__47710));
})();
return (fexpr__47706.cljs$core$IFn$_invoke$arity$2 ? fexpr__47706.cljs$core$IFn$_invoke$arity$2(q,q) : fexpr__47706.call(null,q,q));
})();
try{var values__10777__auto___48455 = (new cljs.core.List(null,q(),(new cljs.core.List(null,null,null,(1),null)),(2),null));
var result__10778__auto___48456 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto___48455);
if(cljs.core.truth_(result__10778__auto___48456)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),null),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto___48455),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),null),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto___48455),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10777__auto___48455);
}catch (e47711){var t__10765__auto___48458 = e47711;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),null),null,t__10765__auto___48458,null]));
}finally {RCF__done_BANG_();
}
q();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_x,cljs.core.not);

try{var values__10777__auto__ = (new cljs.core.List(null,cljs.core.ex_message(q()),(new cljs.core.List(null,"boom",null,(1),null)),(2),null));
var result__10778__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto__);
if(cljs.core.truth_(result__10778__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"ex-message","ex-message",-1128293394,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null))),"boom"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"ex-message","ex-message",-1128293394,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null))),"boom"),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return cljs.core.first(values__10777__auto__);
}catch (e47712){var t__10765__auto__ = e47712;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"ex-message","ex-message",-1128293394,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null))),"boom"),null,t__10765__auto__,null]));
}finally {RCF__done_BANG_();
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47697.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta47698","meta47698",456131440,null)], null);
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47697.cljs$lang$type = true);

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47697.cljs$lang$ctorStr = "hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime47697");

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47697.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime47697");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime47697.
 */
hyperfiddle.electric.impl.runtime.__GT_t_hyperfiddle$electric$impl$runtime47697 = (function hyperfiddle$electric$impl$runtime$__GT_t_hyperfiddle$electric$impl$runtime47697(meta47698){
return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47697(meta47698));
});


hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1281 = (function hyperfiddle$electric$impl$runtime$generated__hyperfiddle_electric_impl_runtime_1281(){
return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47697(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1281;},new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","generated__hyperfiddle_electric_impl_runtime_1281","hyperfiddle.electric.impl.runtime/generated__hyperfiddle_electric_impl_runtime_1281",834978110,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"hyperfiddle/electric/impl/runtime.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"hyperfiddle.electric.impl.runtime","hyperfiddle.electric.impl.runtime",-92393903,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),1281,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__hyperfiddle_electric_impl_runtime_1281","generated__hyperfiddle_electric_impl_runtime_1281",-89580877,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1281)?hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1281.cljs$lang$test:null)], null)),hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1281));
} else {
}

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47723 = (function (meta47724){
this.meta47724 = meta47724;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47723.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47725,meta47724__$1){
var self__ = this;
var _47725__$1 = this;
return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47723(meta47724__$1));
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47723.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47725){
var self__ = this;
var _47725__$1 = this;
return self__.meta47724;
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47723.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47723.prototype.call = (function (unused__27532__auto__){
var self__ = this;
var self__ = this;
var G__47727 = (arguments.length - (1));
switch (G__47727) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47723.prototype.apply = (function (self__,args47726){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args47726)));
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47723.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_47722){
var self__ = this;
var ___27185__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(4,done_47722);
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["simple input"], 0));

try{var q = hyperfiddle.electric.impl.runtime.queue();
var c = (function (){var fexpr__47732 = (function (){var G__47734 = (function (x){
q(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","write","hyperfiddle.electric.impl.runtime/write",638884353),x], null));

return (function (s,_){
q(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","backpressure","hyperfiddle.electric.impl.runtime/backpressure",-1307431533),(function (){
return (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(null) : s.call(null,null));
})], null));

return (function (){
return cljs.core.List.EMPTY;
});
});
});
var G__47735 = (function (_BANG_){
q(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","read","hyperfiddle.electric.impl.runtime/read",117808796),_BANG_], null));

return (function (){
return cljs.core.List.EMPTY;
});
});
var G__47736 = (function (e){
return q(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","error","hyperfiddle.electric.impl.runtime/error",1884319145),e], null));
});
var fexpr__47733 = hyperfiddle.electric.impl.runtime.eval.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.ir.input(cljs.core.PersistentVector.EMPTY));
return (fexpr__47733.cljs$core$IFn$_invoke$arity$3 ? fexpr__47733.cljs$core$IFn$_invoke$arity$3(G__47734,G__47735,G__47736) : fexpr__47733.call(null,G__47734,G__47735,G__47736));
})();
return (fexpr__47732.cljs$core$IFn$_invoke$arity$2 ? fexpr__47732.cljs$core$IFn$_invoke$arity$2(q,q) : fexpr__47732.call(null,q,q));
})();
try{var values__10777__auto___48470 = (new cljs.core.List(null,q(),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","error","hyperfiddle.electric.impl.runtime/error",1884319145),(new hyperfiddle.electric.Pending())], null),null,(1),null)),(2),null));
var result__10778__auto___48471 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto___48470);
if(cljs.core.truth_(result__10778__auto___48471)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","error","hyperfiddle.electric.impl.runtime/error",1884319145),cljs.core.list(new cljs.core.Symbol(null,"Pending.","Pending.",-1051702240,null))], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto___48470),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","error","hyperfiddle.electric.impl.runtime/error",1884319145),cljs.core.list(new cljs.core.Symbol(null,"Pending.","Pending.",-1051702240,null))], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto___48470),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10777__auto___48470);
}catch (e47737){var t__10765__auto___48479 = e47737;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","error","hyperfiddle.electric.impl.runtime/error",1884319145),cljs.core.list(new cljs.core.Symbol(null,"Pending.","Pending.",-1051702240,null))], null)),null,t__10765__auto___48479,null]));
}finally {RCF__done_BANG_();
}
var vec__47713 = q();
var _read = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47713,(0),null);
var _BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47713,(1),null);
var G__47738_48481 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"change","change",-1163046502),cljs.core.assoc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"a","a",-2123407586));
(_BANG_.cljs$core$IFn$_invoke$arity$1 ? _BANG_.cljs$core$IFn$_invoke$arity$1(G__47738_48481) : _BANG_.call(null,G__47738_48481));

try{var values__10777__auto___48484 = (new cljs.core.List(null,q(),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","write","hyperfiddle.electric.impl.runtime/write",638884353),cljs.core.update.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"acks","acks",707064729),cljs.core.inc)], null),null,(1),null)),(2),null));
var result__10778__auto___48485 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto___48484);
if(cljs.core.truth_(result__10778__auto___48485)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","write","hyperfiddle.electric.impl.runtime/write",638884353),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"acks","acks",707064729),new cljs.core.Symbol(null,"inc","inc",324505433,null))], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto___48484),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","write","hyperfiddle.electric.impl.runtime/write",638884353),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"acks","acks",707064729),new cljs.core.Symbol(null,"inc","inc",324505433,null))], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto___48484),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10777__auto___48484);
}catch (e47739){var t__10765__auto___48489 = e47739;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","write","hyperfiddle.electric.impl.runtime/write",638884353),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"acks","acks",707064729),new cljs.core.Symbol(null,"inc","inc",324505433,null))], null)),null,t__10765__auto___48489,null]));
}finally {RCF__done_BANG_();
}
var vec__47716_48490 = q();
var _backpressure_48491 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47716_48490,(0),null);
var ack_48492 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47716_48490,(1),null);
(ack_48492.cljs$core$IFn$_invoke$arity$0 ? ack_48492.cljs$core$IFn$_invoke$arity$0() : ack_48492.call(null));

var G__47740_48493 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"change","change",-1163046502),cljs.core.assoc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"b","b",1482224470));
(_BANG_.cljs$core$IFn$_invoke$arity$1 ? _BANG_.cljs$core$IFn$_invoke$arity$1(G__47740_48493) : _BANG_.call(null,G__47740_48493));

try{var values__10777__auto___48495 = (new cljs.core.List(null,q(),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","write","hyperfiddle.electric.impl.runtime/write",638884353),cljs.core.update.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"acks","acks",707064729),cljs.core.inc)], null),null,(1),null)),(2),null));
var result__10778__auto___48496 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto___48495);
if(cljs.core.truth_(result__10778__auto___48496)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","write","hyperfiddle.electric.impl.runtime/write",638884353),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"acks","acks",707064729),new cljs.core.Symbol(null,"inc","inc",324505433,null))], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto___48495),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","write","hyperfiddle.electric.impl.runtime/write",638884353),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"acks","acks",707064729),new cljs.core.Symbol(null,"inc","inc",324505433,null))], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto___48495),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10777__auto___48495);
}catch (e47741){var t__10765__auto___48497 = e47741;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","write","hyperfiddle.electric.impl.runtime/write",638884353),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"acks","acks",707064729),new cljs.core.Symbol(null,"inc","inc",324505433,null))], null)),null,t__10765__auto___48497,null]));
}finally {RCF__done_BANG_();
}
var vec__47719_48498 = q();
var _backpressure_48499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47719_48498,(0),null);
var ack_48500 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47719_48498,(1),null);
(ack_48500.cljs$core$IFn$_invoke$arity$0 ? ack_48500.cljs$core$IFn$_invoke$arity$0() : ack_48500.call(null));

(c.cljs$core$IFn$_invoke$arity$0 ? c.cljs$core$IFn$_invoke$arity$0() : c.call(null));

try{var values__10777__auto__ = (new cljs.core.List(null,cljs.core.type(q()),(new cljs.core.List(null,missionary.Cancelled,null,(1),null)),(2),null));
var result__10778__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto__);
if(cljs.core.truth_(result__10778__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null))),new cljs.core.Symbol(null,"Cancelled","Cancelled",1665043842,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null))),new cljs.core.Symbol(null,"Cancelled","Cancelled",1665043842,null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return cljs.core.first(values__10777__auto__);
}catch (e47742){var t__10765__auto__ = e47742;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null))),new cljs.core.Symbol(null,"Cancelled","Cancelled",1665043842,null)),null,t__10765__auto__,null]));
}finally {RCF__done_BANG_();
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47723.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta47724","meta47724",-116440491,null)], null);
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47723.cljs$lang$type = true);

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47723.cljs$lang$ctorStr = "hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime47723");

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47723.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime47723");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime47723.
 */
hyperfiddle.electric.impl.runtime.__GT_t_hyperfiddle$electric$impl$runtime47723 = (function hyperfiddle$electric$impl$runtime$__GT_t_hyperfiddle$electric$impl$runtime47723(meta47724){
return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47723(meta47724));
});


hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1297 = (function hyperfiddle$electric$impl$runtime$generated__hyperfiddle_electric_impl_runtime_1297(){
return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47723(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1297;},new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","generated__hyperfiddle_electric_impl_runtime_1297","hyperfiddle.electric.impl.runtime/generated__hyperfiddle_electric_impl_runtime_1297",-173646202,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"hyperfiddle/electric/impl/runtime.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"hyperfiddle.electric.impl.runtime","hyperfiddle.electric.impl.runtime",-92393903,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),1297,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__hyperfiddle_electric_impl_runtime_1297","generated__hyperfiddle_electric_impl_runtime_1297",948963601,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1297)?hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1297.cljs$lang$test:null)], null)),hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1297));
} else {
}

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47756 = (function (meta47757){
this.meta47757 = meta47757;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47756.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47758,meta47757__$1){
var self__ = this;
var _47758__$1 = this;
return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47756(meta47757__$1));
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47756.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47758){
var self__ = this;
var _47758__$1 = this;
return self__.meta47757;
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47756.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47756.prototype.call = (function (unused__27532__auto__){
var self__ = this;
var self__ = this;
var G__47760 = (arguments.length - (1));
switch (G__47760) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47756.prototype.apply = (function (self__,args47759){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args47759)));
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47756.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_47755){
var self__ = this;
var ___27185__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(5,done_47755);
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Fast changes to simulate backpressure"], 0));

try{var q = hyperfiddle.electric.impl.runtime.queue();
var c = (function (){var fexpr__47765 = (function (){var G__47767 = (function (x){
q(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","write","hyperfiddle.electric.impl.runtime/write",638884353),x], null));

return (function (s,_){
q(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","backpressure","hyperfiddle.electric.impl.runtime/backpressure",-1307431533),(function (){
return (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(null) : s.call(null,null));
})], null));

return (function (){
return cljs.core.List.EMPTY;
});
});
});
var G__47768 = (function (_BANG_){
q(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","read","hyperfiddle.electric.impl.runtime/read",117808796),_BANG_], null));

return (function (){
return cljs.core.List.EMPTY;
});
});
var G__47769 = (function (e){
return q(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","error","hyperfiddle.electric.impl.runtime/error",1884319145),e], null));
});
var fexpr__47766 = hyperfiddle.electric.impl.runtime.eval.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.ir.input(cljs.core.PersistentVector.EMPTY));
return (fexpr__47766.cljs$core$IFn$_invoke$arity$3 ? fexpr__47766.cljs$core$IFn$_invoke$arity$3(G__47767,G__47768,G__47769) : fexpr__47766.call(null,G__47767,G__47768,G__47769));
})();
return (fexpr__47765.cljs$core$IFn$_invoke$arity$2 ? fexpr__47765.cljs$core$IFn$_invoke$arity$2(q,q) : fexpr__47765.call(null,q,q));
})();
try{var values__10777__auto___48507 = (new cljs.core.List(null,q(),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","error","hyperfiddle.electric.impl.runtime/error",1884319145),(new hyperfiddle.electric.Pending())], null),null,(1),null)),(2),null));
var result__10778__auto___48508 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto___48507);
if(cljs.core.truth_(result__10778__auto___48508)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","error","hyperfiddle.electric.impl.runtime/error",1884319145),cljs.core.list(new cljs.core.Symbol(null,"Pending.","Pending.",-1051702240,null))], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto___48507),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","error","hyperfiddle.electric.impl.runtime/error",1884319145),cljs.core.list(new cljs.core.Symbol(null,"Pending.","Pending.",-1051702240,null))], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto___48507),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10777__auto___48507);
}catch (e47770){var t__10765__auto___48510 = e47770;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","error","hyperfiddle.electric.impl.runtime/error",1884319145),cljs.core.list(new cljs.core.Symbol(null,"Pending.","Pending.",-1051702240,null))], null)),null,t__10765__auto___48510,null]));
}finally {RCF__done_BANG_();
}
var vec__47743 = q();
var _read = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47743,(0),null);
var _BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47743,(1),null);
var G__47771_48511 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"change","change",-1163046502),cljs.core.assoc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"a","a",-2123407586));
(_BANG_.cljs$core$IFn$_invoke$arity$1 ? _BANG_.cljs$core$IFn$_invoke$arity$1(G__47771_48511) : _BANG_.call(null,G__47771_48511));

var G__47772_48512 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"change","change",-1163046502),cljs.core.assoc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"b","b",1482224470));
(_BANG_.cljs$core$IFn$_invoke$arity$1 ? _BANG_.cljs$core$IFn$_invoke$arity$1(G__47772_48512) : _BANG_.call(null,G__47772_48512));

var G__47773_48514 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"change","change",-1163046502),cljs.core.assoc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"c","c",-1763192079));
(_BANG_.cljs$core$IFn$_invoke$arity$1 ? _BANG_.cljs$core$IFn$_invoke$arity$1(G__47773_48514) : _BANG_.call(null,G__47773_48514));

var G__47774_48515 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"change","change",-1163046502),cljs.core.assoc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"d","d",1972142424));
(_BANG_.cljs$core$IFn$_invoke$arity$1 ? _BANG_.cljs$core$IFn$_invoke$arity$1(G__47774_48515) : _BANG_.call(null,G__47774_48515));

try{var values__10777__auto___48516 = (new cljs.core.List(null,q(),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","write","hyperfiddle.electric.impl.runtime/write",638884353),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"acks","acks",707064729),(1))], null),null,(1),null)),(2),null));
var result__10778__auto___48517 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto___48516);
if(cljs.core.truth_(result__10778__auto___48517)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","write","hyperfiddle.electric.impl.runtime/write",638884353),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"acks","acks",707064729),(1))], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto___48516),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","write","hyperfiddle.electric.impl.runtime/write",638884353),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"acks","acks",707064729),(1))], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto___48516),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10777__auto___48516);
}catch (e47775){var t__10765__auto___48519 = e47775;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","write","hyperfiddle.electric.impl.runtime/write",638884353),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"acks","acks",707064729),(1))], null)),null,t__10765__auto___48519,null]));
}finally {RCF__done_BANG_();
}
var vec__47746_48521 = q();
var _backpressure_48522 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47746_48521,(0),null);
var ack_48523 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47746_48521,(1),null);
(ack_48523.cljs$core$IFn$_invoke$arity$0 ? ack_48523.cljs$core$IFn$_invoke$arity$0() : ack_48523.call(null));

try{var values__10777__auto___48524 = (new cljs.core.List(null,q(),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","write","hyperfiddle.electric.impl.runtime/write",638884353),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"acks","acks",707064729),(1))], null),null,(1),null)),(2),null));
var result__10778__auto___48525 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto___48524);
if(cljs.core.truth_(result__10778__auto___48525)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","write","hyperfiddle.electric.impl.runtime/write",638884353),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"acks","acks",707064729),(1))], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto___48524),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","write","hyperfiddle.electric.impl.runtime/write",638884353),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"acks","acks",707064729),(1))], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto___48524),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10777__auto___48524);
}catch (e47776){var t__10765__auto___48529 = e47776;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","write","hyperfiddle.electric.impl.runtime/write",638884353),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"acks","acks",707064729),(1))], null)),null,t__10765__auto___48529,null]));
}finally {RCF__done_BANG_();
}
var vec__47749_48530 = q();
var _backpressure_48531 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47749_48530,(0),null);
var ack_48532 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47749_48530,(1),null);
(ack_48532.cljs$core$IFn$_invoke$arity$0 ? ack_48532.cljs$core$IFn$_invoke$arity$0() : ack_48532.call(null));

try{var values__10777__auto___48533 = (new cljs.core.List(null,q(),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","write","hyperfiddle.electric.impl.runtime/write",638884353),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"acks","acks",707064729),(2))], null),null,(1),null)),(2),null));
var result__10778__auto___48534 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto___48533);
if(cljs.core.truth_(result__10778__auto___48534)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","write","hyperfiddle.electric.impl.runtime/write",638884353),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"acks","acks",707064729),(2))], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto___48533),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","write","hyperfiddle.electric.impl.runtime/write",638884353),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"acks","acks",707064729),(2))], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto___48533),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10777__auto___48533);
}catch (e47777){var t__10765__auto___48535 = e47777;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","write","hyperfiddle.electric.impl.runtime/write",638884353),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"acks","acks",707064729),(2))], null)),null,t__10765__auto___48535,null]));
}finally {RCF__done_BANG_();
}
var vec__47752_48536 = q();
var _backpressure_48537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47752_48536,(0),null);
var ack_48538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47752_48536,(1),null);
(ack_48538.cljs$core$IFn$_invoke$arity$0 ? ack_48538.cljs$core$IFn$_invoke$arity$0() : ack_48538.call(null));

(c.cljs$core$IFn$_invoke$arity$0 ? c.cljs$core$IFn$_invoke$arity$0() : c.call(null));

try{var values__10777__auto__ = (new cljs.core.List(null,cljs.core.type(q()),(new cljs.core.List(null,missionary.Cancelled,null,(1),null)),(2),null));
var result__10778__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto__);
if(cljs.core.truth_(result__10778__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null))),new cljs.core.Symbol(null,"Cancelled","Cancelled",1665043842,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null))),new cljs.core.Symbol(null,"Cancelled","Cancelled",1665043842,null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return cljs.core.first(values__10777__auto__);
}catch (e47778){var t__10765__auto__ = e47778;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null))),new cljs.core.Symbol(null,"Cancelled","Cancelled",1665043842,null)),null,t__10765__auto__,null]));
}finally {RCF__done_BANG_();
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47756.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta47757","meta47757",-2104093305,null)], null);
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47756.cljs$lang$type = true);

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47756.cljs$lang$ctorStr = "hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime47756");

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47756.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime47756");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime47756.
 */
hyperfiddle.electric.impl.runtime.__GT_t_hyperfiddle$electric$impl$runtime47756 = (function hyperfiddle$electric$impl$runtime$__GT_t_hyperfiddle$electric$impl$runtime47756(meta47757){
return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47756(meta47757));
});


hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1316 = (function hyperfiddle$electric$impl$runtime$generated__hyperfiddle_electric_impl_runtime_1316(){
return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47756(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1316;},new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","generated__hyperfiddle_electric_impl_runtime_1316","hyperfiddle.electric.impl.runtime/generated__hyperfiddle_electric_impl_runtime_1316",102477018,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"hyperfiddle/electric/impl/runtime.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"hyperfiddle.electric.impl.runtime","hyperfiddle.electric.impl.runtime",-92393903,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),1316,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__hyperfiddle_electric_impl_runtime_1316","generated__hyperfiddle_electric_impl_runtime_1316",-915040177,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1316)?hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1316.cljs$lang$test:null)], null)),hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1316));
} else {
}

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47780 = (function (meta47781){
this.meta47781 = meta47781;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47780.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47782,meta47781__$1){
var self__ = this;
var _47782__$1 = this;
return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47780(meta47781__$1));
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47780.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47782){
var self__ = this;
var _47782__$1 = this;
return self__.meta47781;
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47780.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47780.prototype.call = (function (unused__27532__auto__){
var self__ = this;
var self__ = this;
var G__47784 = (arguments.length - (1));
switch (G__47784) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47780.prototype.apply = (function (self__,args47783){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args47783)));
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47780.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_47779){
var self__ = this;
var ___27185__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(7,done_47779);

var q_48540 = hyperfiddle.electric.impl.runtime.queue();
var c_48541 = (function (){var fexpr__47789 = (function (){var G__47791 = (function hyperfiddle$electric$impl$runtime$write_to_network(x){
q_48540(x);

return (function (s,_){
q_48540((function (){
return (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(null) : s.call(null,null));
}));

return (function (){
return cljs.core.List.EMPTY;
});
});
});
var G__47792 = (function hyperfiddle$electric$impl$runtime$read_subject(_BANG_){
q_48540(_BANG_);

return (function (){
return cljs.core.List.EMPTY;
});
});
var G__47793 = (function hyperfiddle$electric$impl$runtime$error_handler(e){
return q_48540(e);
});
var fexpr__47790 = hyperfiddle.electric.impl.runtime.eval.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.ir.apply.cljs$core$IFn$_invoke$arity$variadic(hyperfiddle.electric.impl.ir.literal(q_48540),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hyperfiddle.electric.impl.ir.input(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hyperfiddle.electric.impl.ir.target(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hyperfiddle.electric.impl.ir.output(hyperfiddle.electric.impl.ir.literal((1)))], null)),hyperfiddle.electric.impl.ir.source], null))], 0)));
return (fexpr__47790.cljs$core$IFn$_invoke$arity$3 ? fexpr__47790.cljs$core$IFn$_invoke$arity$3(G__47791,G__47792,G__47793) : fexpr__47790.call(null,G__47791,G__47792,G__47793));
})();
return (fexpr__47789.cljs$core$IFn$_invoke$arity$2 ? fexpr__47789.cljs$core$IFn$_invoke$arity$2(q_48540,q_48540) : fexpr__47789.call(null,q_48540,q_48540));
})();
try{var values__10777__auto___48542 = (new cljs.core.List(null,q_48540(),(new cljs.core.List(null,(new hyperfiddle.electric.Pending()),null,(1),null)),(2),null));
var result__10778__auto___48543 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto___48542);
if(cljs.core.truth_(result__10778__auto___48543)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"Pending.","Pending.",-1051702240,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto___48542),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"Pending.","Pending.",-1051702240,null))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto___48542),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10777__auto___48542);
}catch (e47794){var t__10765__auto___48544 = e47794;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"Pending.","Pending.",-1051702240,null))),null,t__10765__auto___48544,null]));
}finally {RCF__done_BANG_();
}
var _BANG__48545 = q_48540();
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["client recieves event"], 0));

try{var G__47795_48546 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"tree","tree",-196312028),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"create","create",-1301499256),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"change","change",-1163046502),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),hyperfiddle.electric.impl.runtime.pending])], 0));
(_BANG__48545.cljs$core$IFn$_invoke$arity$1 ? _BANG__48545.cljs$core$IFn$_invoke$arity$1(G__47795_48546) : _BANG__48545.call(null,G__47795_48546));

try{var values__10777__auto___48547 = (new cljs.core.List(null,q_48540(),(new cljs.core.List(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"acks","acks",707064729),(1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"change","change",-1163046502),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),(1)]),new cljs.core.Keyword(null,"freeze","freeze",2043466309),cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)])], 0)),null,(1),null)),(2),null));
var result__10778__auto___48548 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto___48547);
if(cljs.core.truth_(result__10778__auto___48548)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"acks","acks",707064729),(1),new cljs.core.Keyword(null,"change","change",-1163046502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),(1)], null),new cljs.core.Keyword(null,"freeze","freeze",2043466309),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),"null"], null), null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto___48547),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"acks","acks",707064729),(1),new cljs.core.Keyword(null,"change","change",-1163046502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),(1)], null),new cljs.core.Keyword(null,"freeze","freeze",2043466309),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),"null"], null), null))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto___48547),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10777__auto___48547);
}catch (e47796){var t__10765__auto___48549 = e47796;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"acks","acks",707064729),(1),new cljs.core.Keyword(null,"change","change",-1163046502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),(1)], null),new cljs.core.Keyword(null,"freeze","freeze",2043466309),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),"null"], null), null))),null,t__10765__auto___48549,null]));
}finally {RCF__done_BANG_();
}
var fexpr__47797_48550 = q_48540();
(fexpr__47797_48550.cljs$core$IFn$_invoke$arity$0 ? fexpr__47797_48550.cljs$core$IFn$_invoke$arity$0() : fexpr__47797_48550.call(null));

var G__47798_48551 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"acks","acks",707064729),(1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"change","change",-1163046502),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(1)])], 0));
(_BANG__48545.cljs$core$IFn$_invoke$arity$1 ? _BANG__48545.cljs$core$IFn$_invoke$arity$1(G__47798_48551) : _BANG__48545.call(null,G__47798_48551));

try{var values__10777__auto___48552 = (new cljs.core.List(null,q_48540(),(new cljs.core.List(null,(1),null,(1),null)),(2),null));
var result__10778__auto___48553 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto___48552);
if(cljs.core.truth_(result__10778__auto___48553)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto___48552),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto___48552),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10777__auto___48552);
}catch (e47799){var t__10765__auto___48554 = e47799;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),(1)),null,t__10765__auto___48554,null]));
}finally {RCF__done_BANG_();
}
try{var values__10777__auto___48555 = (new cljs.core.List(null,q_48540(),(new cljs.core.List(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"acks","acks",707064729),(1)),null,(1),null)),(2),null));
var result__10778__auto___48556 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto___48555);
if(cljs.core.truth_(result__10778__auto___48556)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"acks","acks",707064729),(1))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto___48555),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"acks","acks",707064729),(1))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto___48555),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10777__auto___48555);
}catch (e47800){var t__10765__auto___48557 = e47800;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"acks","acks",707064729),(1))),null,t__10765__auto___48557,null]));
}finally {RCF__done_BANG_();
}
var fexpr__47801_48558 = q_48540();
(fexpr__47801_48558.cljs$core$IFn$_invoke$arity$0 ? fexpr__47801_48558.cljs$core$IFn$_invoke$arity$0() : fexpr__47801_48558.call(null));

var G__47802_48559 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"tree","tree",-196312028),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"rotate","rotate",152705015),new cljs.core.Keyword(null,"frame","frame",-1711082588),(-1),new cljs.core.Keyword(null,"position","position",-2011731912),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.Keyword(null,"frame","frame",-1711082588),(-1)], null)], null));
(_BANG__48545.cljs$core$IFn$_invoke$arity$1 ? _BANG__48545.cljs$core$IFn$_invoke$arity$1(G__47802_48559) : _BANG__48545.call(null,G__47802_48559));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
var q = hyperfiddle.electric.impl.runtime.queue();
var c = (function (){var fexpr__47807 = (function (){var G__47809 = (function (x){
q(x);

return (function (s,_){
q((function (){
return (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(null) : s.call(null,null));
}));

return (function (){
return cljs.core.List.EMPTY;
});
});
});
var G__47810 = (function (_BANG_){
q(_BANG_);

return (function (){
return cljs.core.List.EMPTY;
});
});
var G__47811 = (function (e){
return q(e);
});
var fexpr__47808 = hyperfiddle.electric.impl.runtime.eval.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.ir.do$(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hyperfiddle.electric.impl.ir.output(hyperfiddle.electric.impl.ir.pub(hyperfiddle.electric.impl.ir.constant(hyperfiddle.electric.impl.ir.input(cljs.core.PersistentVector.EMPTY)),hyperfiddle.electric.impl.ir.apply.cljs$core$IFn$_invoke$arity$variadic(hyperfiddle.electric.impl.ir.literal(cljs.core.PersistentArrayMap.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hyperfiddle.electric.impl.ir.sub((1)),hyperfiddle.electric.impl.ir.pub(hyperfiddle.electric.impl.ir.literal((0)),hyperfiddle.electric.impl.ir.apply.cljs$core$IFn$_invoke$arity$variadic(hyperfiddle.electric.impl.ir.literal(cljs.core.PersistentArrayMap.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hyperfiddle.electric.impl.ir.sub((1)),hyperfiddle.electric.impl.ir.bind((0),(1),hyperfiddle.electric.impl.ir.variable(hyperfiddle.electric.impl.ir.sub((2))))], 0)))], 0))))], null),hyperfiddle.electric.impl.ir.nop));
return (fexpr__47808.cljs$core$IFn$_invoke$arity$3 ? fexpr__47808.cljs$core$IFn$_invoke$arity$3(G__47809,G__47810,G__47811) : fexpr__47808.call(null,G__47809,G__47810,G__47811));
})();
return (fexpr__47807.cljs$core$IFn$_invoke$arity$2 ? fexpr__47807.cljs$core$IFn$_invoke$arity$2(q,q) : fexpr__47807.call(null,q,q));
})();
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["server sends event, frame got created, output is pending"], 0));

try{try{var values__10777__auto___48560 = (new cljs.core.List(null,q(),(new cljs.core.List(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"tree","tree",-196312028),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"create","create",-1301499256),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"change","change",-1163046502),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),hyperfiddle.electric.impl.runtime.pending])], 0)),null,(1),null)),(2),null));
var result__10778__auto___48561 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto___48560);
if(cljs.core.truth_(result__10778__auto___48561)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"tree","tree",-196312028),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"create","create",-1301499256),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null)], null),new cljs.core.Keyword(null,"change","change",-1163046502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Symbol(null,"pending","pending",1420494800,null)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto___48560),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"tree","tree",-196312028),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"create","create",-1301499256),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null)], null),new cljs.core.Keyword(null,"change","change",-1163046502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Symbol(null,"pending","pending",1420494800,null)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto___48560),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10777__auto___48560);
}catch (e47812){var t__10765__auto___48563 = e47812;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"tree","tree",-196312028),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"create","create",-1301499256),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null)], null),new cljs.core.Keyword(null,"change","change",-1163046502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Symbol(null,"pending","pending",1420494800,null)], null))),null,t__10765__auto___48563,null]));
}finally {RCF__done_BANG_();
}
var fexpr__47813_48564 = q();
(fexpr__47813_48564.cljs$core$IFn$_invoke$arity$0 ? fexpr__47813_48564.cljs$core$IFn$_invoke$arity$0() : fexpr__47813_48564.call(null));

var _BANG_ = q();
var G__47814_48568 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"acks","acks",707064729),(1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"change","change",-1163046502),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),(1)]),new cljs.core.Keyword(null,"freeze","freeze",2043466309),cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)])], 0));
(_BANG_.cljs$core$IFn$_invoke$arity$1 ? _BANG_.cljs$core$IFn$_invoke$arity$1(G__47814_48568) : _BANG_.call(null,G__47814_48568));

try{var values__10777__auto___48569 = (new cljs.core.List(null,q(),(new cljs.core.List(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"acks","acks",707064729),(1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"change","change",-1163046502),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(1)])], 0)),null,(1),null)),(2),null));
var result__10778__auto___48570 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto___48569);
if(cljs.core.truth_(result__10778__auto___48570)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"acks","acks",707064729),(1),new cljs.core.Keyword(null,"change","change",-1163046502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(1)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto___48569),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"acks","acks",707064729),(1),new cljs.core.Keyword(null,"change","change",-1163046502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(1)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto___48569),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10777__auto___48569);
}catch (e47815){var t__10765__auto___48572 = e47815;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"acks","acks",707064729),(1),new cljs.core.Keyword(null,"change","change",-1163046502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(1)], null))),null,t__10765__auto___48572,null]));
}finally {RCF__done_BANG_();
}
var fexpr__47816_48573 = q();
(fexpr__47816_48573.cljs$core$IFn$_invoke$arity$0 ? fexpr__47816_48573.cljs$core$IFn$_invoke$arity$0() : fexpr__47816_48573.call(null));

var G__47817_48574 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"acks","acks",707064729),(1));
(_BANG_.cljs$core$IFn$_invoke$arity$1 ? _BANG_.cljs$core$IFn$_invoke$arity$1(G__47817_48574) : _BANG_.call(null,G__47817_48574));

try{var values__10777__auto___48577 = (new cljs.core.List(null,q(),(new cljs.core.List(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"tree","tree",-196312028),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"rotate","rotate",152705015),new cljs.core.Keyword(null,"frame","frame",-1711082588),(-1),new cljs.core.Keyword(null,"position","position",-2011731912),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.Keyword(null,"frame","frame",-1711082588),(-1)], null)], null)),null,(1),null)),(2),null));
var result__10778__auto___48578 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto___48577);
if(cljs.core.truth_(result__10778__auto___48578)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"tree","tree",-196312028),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"rotate","rotate",152705015),new cljs.core.Keyword(null,"frame","frame",-1711082588),(-1),new cljs.core.Keyword(null,"position","position",-2011731912),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.Keyword(null,"frame","frame",-1711082588),(-1)], null)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto___48577),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"tree","tree",-196312028),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"rotate","rotate",152705015),new cljs.core.Keyword(null,"frame","frame",-1711082588),(-1),new cljs.core.Keyword(null,"position","position",-2011731912),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.Keyword(null,"frame","frame",-1711082588),(-1)], null)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto___48577),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10777__auto___48577);
}catch (e47818){var t__10765__auto___48586 = e47818;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"tree","tree",-196312028),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"rotate","rotate",152705015),new cljs.core.Keyword(null,"frame","frame",-1711082588),(-1),new cljs.core.Keyword(null,"position","position",-2011731912),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.Keyword(null,"frame","frame",-1711082588),(-1)], null)], null))),null,t__10765__auto___48586,null]));
}finally {RCF__done_BANG_();
}
var fexpr__47819 = q();
return (fexpr__47819.cljs$core$IFn$_invoke$arity$0 ? fexpr__47819.cljs$core$IFn$_invoke$arity$0() : fexpr__47819.call(null));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47780.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta47781","meta47781",305155985,null)], null);
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47780.cljs$lang$type = true);

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47780.cljs$lang$ctorStr = "hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime47780");

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47780.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime47780");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime47780.
 */
hyperfiddle.electric.impl.runtime.__GT_t_hyperfiddle$electric$impl$runtime47780 = (function hyperfiddle$electric$impl$runtime$__GT_t_hyperfiddle$electric$impl$runtime47780(meta47781){
return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47780(meta47781));
});


hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1342 = (function hyperfiddle$electric$impl$runtime$generated__hyperfiddle_electric_impl_runtime_1342(){
return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47780(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1342;},new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","generated__hyperfiddle_electric_impl_runtime_1342","hyperfiddle.electric.impl.runtime/generated__hyperfiddle_electric_impl_runtime_1342",-1261420215,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"hyperfiddle/electric/impl/runtime.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"hyperfiddle.electric.impl.runtime","hyperfiddle.electric.impl.runtime",-92393903,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),1342,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__hyperfiddle_electric_impl_runtime_1342","generated__hyperfiddle_electric_impl_runtime_1342",-2115584830,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1342)?hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1342.cljs$lang$test:null)], null)),hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1342));
} else {
}

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47821 = (function (meta47822){
this.meta47822 = meta47822;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47821.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47823,meta47822__$1){
var self__ = this;
var _47823__$1 = this;
return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47821(meta47822__$1));
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47821.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47823){
var self__ = this;
var _47823__$1 = this;
return self__.meta47822;
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47821.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47821.prototype.call = (function (unused__27532__auto__){
var self__ = this;
var self__ = this;
var G__47825 = (arguments.length - (1));
switch (G__47825) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47821.prototype.apply = (function (self__,args47824){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args47824)));
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47821.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_47820){
var self__ = this;
var ___27185__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(7,done_47820);
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["d-glitch"], 0));

try{var q = hyperfiddle.electric.impl.runtime.queue();
var _BANG_x = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((1));
var c = (function (){var fexpr__47830 = (function (){var G__47832 = (function (x){
q(x);

return (function (s,_){
q((function (){
return (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(null) : s.call(null,null));
}));

return (function (){
return cljs.core.List.EMPTY;
});
});
});
var G__47833 = (function (_BANG_){
q(_BANG_);

return (function (){
return cljs.core.List.EMPTY;
});
});
var G__47834 = (function (e){
return q(e);
});
var fexpr__47831 = hyperfiddle.electric.impl.runtime.eval.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.ir.apply.cljs$core$IFn$_invoke$arity$variadic(hyperfiddle.electric.impl.ir.literal(q),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hyperfiddle.electric.impl.ir.input(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hyperfiddle.electric.impl.ir.output(hyperfiddle.electric.impl.ir.variable(hyperfiddle.electric.impl.ir.literal(missionary.core.watch(_BANG_x))))], null))], 0)));
return (fexpr__47831.cljs$core$IFn$_invoke$arity$3 ? fexpr__47831.cljs$core$IFn$_invoke$arity$3(G__47832,G__47833,G__47834) : fexpr__47831.call(null,G__47832,G__47833,G__47834));
})();
return (fexpr__47830.cljs$core$IFn$_invoke$arity$2 ? fexpr__47830.cljs$core$IFn$_invoke$arity$2(q,q) : fexpr__47830.call(null,q,q));
})();
try{var values__10777__auto___48592 = (new cljs.core.List(null,q(),(new cljs.core.List(null,(new hyperfiddle.electric.Pending()),null,(1),null)),(2),null));
var result__10778__auto___48593 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto___48592);
if(cljs.core.truth_(result__10778__auto___48593)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"Pending.","Pending.",-1051702240,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto___48592),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"Pending.","Pending.",-1051702240,null))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto___48592),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10777__auto___48592);
}catch (e47835){var t__10765__auto___48595 = e47835;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"Pending.","Pending.",-1051702240,null))),null,t__10765__auto___48595,null]));
}finally {RCF__done_BANG_();
}
try{var values__10777__auto___48596 = (new cljs.core.List(null,q(),(new cljs.core.List(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"change","change",-1163046502),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(1)])),null,(1),null)),(2),null));
var result__10778__auto___48597 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto___48596);
if(cljs.core.truth_(result__10778__auto___48597)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"change","change",-1163046502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(1)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto___48596),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"change","change",-1163046502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(1)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto___48596),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10777__auto___48596);
}catch (e47836){var t__10765__auto___48599 = e47836;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"change","change",-1163046502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(1)], null))),null,t__10765__auto___48599,null]));
}finally {RCF__done_BANG_();
}
var fexpr__47837_48600 = q();
(fexpr__47837_48600.cljs$core$IFn$_invoke$arity$0 ? fexpr__47837_48600.cljs$core$IFn$_invoke$arity$0() : fexpr__47837_48600.call(null));

var _BANG_ = q();
var G__47838_48601 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"acks","acks",707064729),(1));
(_BANG_.cljs$core$IFn$_invoke$arity$1 ? _BANG_.cljs$core$IFn$_invoke$arity$1(G__47838_48601) : _BANG_.call(null,G__47838_48601));

var G__47839_48603 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"change","change",-1163046502),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"a","a",-2123407586)]));
(_BANG_.cljs$core$IFn$_invoke$arity$1 ? _BANG_.cljs$core$IFn$_invoke$arity$1(G__47839_48603) : _BANG_.call(null,G__47839_48603));

try{var values__10777__auto___48604 = (new cljs.core.List(null,q(),(new cljs.core.List(null,new cljs.core.Keyword(null,"a","a",-2123407586),null,(1),null)),(2),null));
var result__10778__auto___48605 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto___48604);
if(cljs.core.truth_(result__10778__auto___48605)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.Keyword(null,"a","a",-2123407586)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto___48604),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.Keyword(null,"a","a",-2123407586)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto___48604),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10777__auto___48604);
}catch (e47840){var t__10765__auto___48606 = e47840;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.Keyword(null,"a","a",-2123407586)),null,t__10765__auto___48606,null]));
}finally {RCF__done_BANG_();
}
try{var values__10777__auto___48610 = (new cljs.core.List(null,q(),(new cljs.core.List(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"acks","acks",707064729),(1)),null,(1),null)),(2),null));
var result__10778__auto___48611 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto___48610);
if(cljs.core.truth_(result__10778__auto___48611)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"acks","acks",707064729),(1))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto___48610),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"acks","acks",707064729),(1))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto___48610),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10777__auto___48610);
}catch (e47841){var t__10765__auto___48613 = e47841;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"acks","acks",707064729),(1))),null,t__10765__auto___48613,null]));
}finally {RCF__done_BANG_();
}
var fexpr__47842_48614 = q();
(fexpr__47842_48614.cljs$core$IFn$_invoke$arity$0 ? fexpr__47842_48614.cljs$core$IFn$_invoke$arity$0() : fexpr__47842_48614.call(null));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_x,cljs.core.inc);

try{var values__10777__auto___48615 = (new cljs.core.List(null,q(),(new cljs.core.List(null,(new hyperfiddle.electric.Pending()),null,(1),null)),(2),null));
var result__10778__auto___48616 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto___48615);
if(cljs.core.truth_(result__10778__auto___48616)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"Pending.","Pending.",-1051702240,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto___48615),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"Pending.","Pending.",-1051702240,null))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto___48615),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10777__auto___48615);
}catch (e47843){var t__10765__auto___48617 = e47843;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"Pending.","Pending.",-1051702240,null))),null,t__10765__auto___48617,null]));
}finally {RCF__done_BANG_();
}
try{var values__10777__auto___48619 = (new cljs.core.List(null,q(),(new cljs.core.List(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"change","change",-1163046502),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(2)])),null,(1),null)),(2),null));
var result__10778__auto___48620 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto___48619);
if(cljs.core.truth_(result__10778__auto___48620)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"change","change",-1163046502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(2)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto___48619),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"change","change",-1163046502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(2)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto___48619),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10777__auto___48619);
}catch (e47844){var t__10765__auto___48624 = e47844;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"change","change",-1163046502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(2)], null))),null,t__10765__auto___48624,null]));
}finally {RCF__done_BANG_();
}
var fexpr__47845_48625 = q();
(fexpr__47845_48625.cljs$core$IFn$_invoke$arity$0 ? fexpr__47845_48625.cljs$core$IFn$_invoke$arity$0() : fexpr__47845_48625.call(null));

var G__47846_48626 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"acks","acks",707064729),(1));
(_BANG_.cljs$core$IFn$_invoke$arity$1 ? _BANG_.cljs$core$IFn$_invoke$arity$1(G__47846_48626) : _BANG_.call(null,G__47846_48626));

try{var values__10777__auto__ = (new cljs.core.List(null,q(),(new cljs.core.List(null,new cljs.core.Keyword(null,"a","a",-2123407586),null,(1),null)),(2),null));
var result__10778__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto__);
if(cljs.core.truth_(result__10778__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.Keyword(null,"a","a",-2123407586)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.Keyword(null,"a","a",-2123407586)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return cljs.core.first(values__10777__auto__);
}catch (e47847){var t__10765__auto__ = e47847;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.Keyword(null,"a","a",-2123407586)),null,t__10765__auto__,null]));
}finally {RCF__done_BANG_();
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47821.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta47822","meta47822",-718837431,null)], null);
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47821.cljs$lang$type = true);

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47821.cljs$lang$ctorStr = "hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime47821");

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47821.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime47821");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime47821.
 */
hyperfiddle.electric.impl.runtime.__GT_t_hyperfiddle$electric$impl$runtime47821 = (function hyperfiddle$electric$impl$runtime$__GT_t_hyperfiddle$electric$impl$runtime47821(meta47822){
return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47821(meta47822));
});


hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1412 = (function hyperfiddle$electric$impl$runtime$generated__hyperfiddle_electric_impl_runtime_1412(){
return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47821(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1412;},new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","generated__hyperfiddle_electric_impl_runtime_1412","hyperfiddle.electric.impl.runtime/generated__hyperfiddle_electric_impl_runtime_1412",197444912,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"hyperfiddle/electric/impl/runtime.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"hyperfiddle.electric.impl.runtime","hyperfiddle.electric.impl.runtime",-92393903,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),1412,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__hyperfiddle_electric_impl_runtime_1412","generated__hyperfiddle_electric_impl_runtime_1412",-560555585,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1412)?hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1412.cljs$lang$test:null)], null)),hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1412));
} else {
}

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47849 = (function (meta47850){
this.meta47850 = meta47850;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47851,meta47850__$1){
var self__ = this;
var _47851__$1 = this;
return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47849(meta47850__$1));
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47849.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47851){
var self__ = this;
var _47851__$1 = this;
return self__.meta47850;
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47849.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47849.prototype.call = (function (unused__27532__auto__){
var self__ = this;
var self__ = this;
var G__47853 = (arguments.length - (1));
switch (G__47853) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47849.prototype.apply = (function (self__,args47852){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args47852)));
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47849.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_47848){
var self__ = this;
var ___27185__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(5,done_47848);
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["infinite loop bug"], 0));

try{var q = hyperfiddle.electric.impl.runtime.queue();
var _BANG_x = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((1));
var c = (function (){var fexpr__47858 = (function (){var G__47860 = (function (x){
q(x);

return (function (s,_){
q((function (){
return (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(null) : s.call(null,null));
}));

return (function (){
return cljs.core.List.EMPTY;
});
});
});
var G__47861 = (function (_BANG_){
q(_BANG_);

return (function (){
return cljs.core.List.EMPTY;
});
});
var G__47862 = (function (e){
return q(e);
});
var fexpr__47859 = hyperfiddle.electric.impl.runtime.eval.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.ir.apply.cljs$core$IFn$_invoke$arity$variadic(hyperfiddle.electric.impl.ir.literal(q),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hyperfiddle.electric.impl.ir.pub(hyperfiddle.electric.impl.ir.variable(hyperfiddle.electric.impl.ir.literal(missionary.core.watch(_BANG_x))),hyperfiddle.electric.impl.ir.input(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hyperfiddle.electric.impl.ir.output(hyperfiddle.electric.impl.ir.sub((1))),hyperfiddle.electric.impl.ir.output(hyperfiddle.electric.impl.ir.sub((1)))], null)))], 0)));
return (fexpr__47859.cljs$core$IFn$_invoke$arity$3 ? fexpr__47859.cljs$core$IFn$_invoke$arity$3(G__47860,G__47861,G__47862) : fexpr__47859.call(null,G__47860,G__47861,G__47862));
})();
return (fexpr__47858.cljs$core$IFn$_invoke$arity$2 ? fexpr__47858.cljs$core$IFn$_invoke$arity$2(q,q) : fexpr__47858.call(null,q,q));
})();
try{var values__10777__auto___48632 = (new cljs.core.List(null,q(),(new cljs.core.List(null,(new hyperfiddle.electric.Pending()),null,(1),null)),(2),null));
var result__10778__auto___48633 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto___48632);
if(cljs.core.truth_(result__10778__auto___48633)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"Pending.","Pending.",-1051702240,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto___48632),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"Pending.","Pending.",-1051702240,null))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto___48632),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10777__auto___48632);
}catch (e47863){var t__10765__auto___48635 = e47863;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"Pending.","Pending.",-1051702240,null))),null,t__10765__auto___48635,null]));
}finally {RCF__done_BANG_();
}
try{var values__10777__auto___48637 = (new cljs.core.List(null,q(),(new cljs.core.List(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"change","change",-1163046502),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(1)])),null,(1),null)),(2),null));
var result__10778__auto___48638 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto___48637);
if(cljs.core.truth_(result__10778__auto___48638)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"change","change",-1163046502),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(1)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto___48637),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"change","change",-1163046502),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(1)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto___48637),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10777__auto___48637);
}catch (e47864){var t__10765__auto___48639 = e47864;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"change","change",-1163046502),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(1)], null))),null,t__10765__auto___48639,null]));
}finally {RCF__done_BANG_();
}
var fexpr__47865_48641 = q();
(fexpr__47865_48641.cljs$core$IFn$_invoke$arity$0 ? fexpr__47865_48641.cljs$core$IFn$_invoke$arity$0() : fexpr__47865_48641.call(null));

var _BANG_ = q();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_x,cljs.core.inc);

try{var values__10777__auto___48642 = (new cljs.core.List(null,q(),(new cljs.core.List(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"change","change",-1163046502),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(2)])),null,(1),null)),(2),null));
var result__10778__auto___48643 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto___48642);
if(cljs.core.truth_(result__10778__auto___48643)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"change","change",-1163046502),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(2)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto___48642),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"change","change",-1163046502),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(2)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto___48642),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10777__auto___48642);
}catch (e47866){var t__10765__auto___48645 = e47866;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"change","change",-1163046502),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(2)], null))),null,t__10765__auto___48645,null]));
}finally {RCF__done_BANG_();
}
var fexpr__47867_48646 = q();
(fexpr__47867_48646.cljs$core$IFn$_invoke$arity$0 ? fexpr__47867_48646.cljs$core$IFn$_invoke$arity$0() : fexpr__47867_48646.call(null));

var G__47868_48647 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"acks","acks",707064729),(1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"change","change",-1163046502),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"foo","foo",1268894036)])], 0));
(_BANG_.cljs$core$IFn$_invoke$arity$1 ? _BANG_.cljs$core$IFn$_invoke$arity$1(G__47868_48647) : _BANG_.call(null,G__47868_48647));

try{var values__10777__auto___48649 = (new cljs.core.List(null,q(),(new cljs.core.List(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"acks","acks",707064729),(1)),null,(1),null)),(2),null));
var result__10778__auto___48650 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto___48649);
if(cljs.core.truth_(result__10778__auto___48650)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"acks","acks",707064729),(1))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto___48649),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"acks","acks",707064729),(1))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto___48649),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10777__auto___48649);
}catch (e47869){var t__10765__auto___48651 = e47869;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"acks","acks",707064729),(1))),null,t__10765__auto___48651,null]));
}finally {RCF__done_BANG_();
}
var fexpr__47870_48653 = q();
(fexpr__47870_48653.cljs$core$IFn$_invoke$arity$0 ? fexpr__47870_48653.cljs$core$IFn$_invoke$arity$0() : fexpr__47870_48653.call(null));

var G__47871_48654 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"acks","acks",707064729),(1));
(_BANG_.cljs$core$IFn$_invoke$arity$1 ? _BANG_.cljs$core$IFn$_invoke$arity$1(G__47871_48654) : _BANG_.call(null,G__47871_48654));

try{var values__10777__auto__ = (new cljs.core.List(null,q(),(new cljs.core.List(null,new cljs.core.Keyword(null,"foo","foo",1268894036),null,(1),null)),(2),null));
var result__10778__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto__);
if(cljs.core.truth_(result__10778__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.Keyword(null,"foo","foo",1268894036)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.Keyword(null,"foo","foo",1268894036)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return cljs.core.first(values__10777__auto__);
}catch (e47872){var t__10765__auto__ = e47872;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.Keyword(null,"foo","foo",1268894036)),null,t__10765__auto__,null]));
}finally {RCF__done_BANG_();
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47849.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta47850","meta47850",447873062,null)], null);
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47849.cljs$lang$type = true);

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47849.cljs$lang$ctorStr = "hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime47849");

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47849.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime47849");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime47849.
 */
hyperfiddle.electric.impl.runtime.__GT_t_hyperfiddle$electric$impl$runtime47849 = (function hyperfiddle$electric$impl$runtime$__GT_t_hyperfiddle$electric$impl$runtime47849(meta47850){
return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47849(meta47850));
});


hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1440 = (function hyperfiddle$electric$impl$runtime$generated__hyperfiddle_electric_impl_runtime_1440(){
return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47849(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1440;},new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","generated__hyperfiddle_electric_impl_runtime_1440","hyperfiddle.electric.impl.runtime/generated__hyperfiddle_electric_impl_runtime_1440",1129512823,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"hyperfiddle/electric/impl/runtime.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"hyperfiddle.electric.impl.runtime","hyperfiddle.electric.impl.runtime",-92393903,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),1440,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__hyperfiddle_electric_impl_runtime_1440","generated__hyperfiddle_electric_impl_runtime_1440",-1095969798,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1440)?hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1440.cljs$lang$test:null)], null)),hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1440));
} else {
}

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47874 = (function (meta47875){
this.meta47875 = meta47875;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47874.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47876,meta47875__$1){
var self__ = this;
var _47876__$1 = this;
return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47874(meta47875__$1));
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47874.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47876){
var self__ = this;
var _47876__$1 = this;
return self__.meta47875;
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47874.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47874.prototype.call = (function (unused__27532__auto__){
var self__ = this;
var self__ = this;
var G__47878 = (arguments.length - (1));
switch (G__47878) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47874.prototype.apply = (function (self__,args47877){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args47877)));
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47874.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_47873){
var self__ = this;
var ___27185__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(3,done_47873);
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["FailureInfo equality"], 0));

try{var q = hyperfiddle.electric.impl.runtime.queue();
var c = (function (){var fexpr__47883 = (function (){var G__47885 = (function (x){
q(x);

return (function (s,_){
q((function (){
return (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(null) : s.call(null,null));
}));

return (function (){
return cljs.core.List.EMPTY;
});
});
});
var G__47886 = (function (_BANG_){
q(_BANG_);

return (function (){
return cljs.core.List.EMPTY;
});
});
var G__47887 = (function (e){
return q(e);
});
var fexpr__47884 = hyperfiddle.electric.impl.runtime.eval.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.ir.do$(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hyperfiddle.electric.impl.ir.output(hyperfiddle.electric.impl.ir.input(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hyperfiddle.electric.impl.ir.source], null)))], null),hyperfiddle.electric.impl.ir.nop));
return (fexpr__47884.cljs$core$IFn$_invoke$arity$3 ? fexpr__47884.cljs$core$IFn$_invoke$arity$3(G__47885,G__47886,G__47887) : fexpr__47884.call(null,G__47885,G__47886,G__47887));
})();
return (fexpr__47883.cljs$core$IFn$_invoke$arity$2 ? fexpr__47883.cljs$core$IFn$_invoke$arity$2(q,q) : fexpr__47883.call(null,q,q));
})();
try{var values__10777__auto___48665 = (new cljs.core.List(null,q(),(new cljs.core.List(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"change","change",-1163046502),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(new hyperfiddle.electric.Failure((new hyperfiddle.electric.Pending())))])),null,(1),null)),(2),null));
var result__10778__auto___48666 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto___48665);
if(cljs.core.truth_(result__10778__auto___48666)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"change","change",-1163046502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.list(new cljs.core.Symbol(null,"Failure.","Failure.",-1636320856,null),cljs.core.list(new cljs.core.Symbol(null,"Pending.","Pending.",-1051702240,null)))], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto___48665),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"change","change",-1163046502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.list(new cljs.core.Symbol(null,"Failure.","Failure.",-1636320856,null),cljs.core.list(new cljs.core.Symbol(null,"Pending.","Pending.",-1051702240,null)))], null))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto___48665),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10777__auto___48665);
}catch (e47888){var t__10765__auto___48669 = e47888;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"change","change",-1163046502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.list(new cljs.core.Symbol(null,"Failure.","Failure.",-1636320856,null),cljs.core.list(new cljs.core.Symbol(null,"Pending.","Pending.",-1051702240,null)))], null))),null,t__10765__auto___48669,null]));
}finally {RCF__done_BANG_();
}
var fexpr__47889_48671 = q();
(fexpr__47889_48671.cljs$core$IFn$_invoke$arity$0 ? fexpr__47889_48671.cljs$core$IFn$_invoke$arity$0() : fexpr__47889_48671.call(null));

var _BANG_ = q();
var G__47890_48672 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"change","change",-1163046502),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(new hyperfiddle.electric.Failure(hyperfiddle.electric.debug.ex_info_STAR_.cljs$core$IFn$_invoke$arity$4("0",cljs.core.PersistentArrayMap.EMPTY,"f0f38709-0191-45b7-85e9-1266abb467df",null)))]));
(_BANG_.cljs$core$IFn$_invoke$arity$1 ? _BANG_.cljs$core$IFn$_invoke$arity$1(G__47890_48672) : _BANG_.call(null,G__47890_48672));

try{var lhs__10787__auto___48673 = cljs.core.identity(q());
var rhs__10788__auto___48674 = cljs.core.identity(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"acks","acks",707064729),(1),new cljs.core.Keyword(null,"tree","tree",-196312028),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"change","change",-1163046502),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Symbol(null,"_","_",-1201019570,null)]),new cljs.core.Keyword(null,"freeze","freeze",2043466309),cljs.core.PersistentHashSet.EMPTY], null));
var vec__47892_48675 = hyperfiddle.rcf.unify.unifier_STAR_(lhs__10787__auto___48673,rhs__10788__auto___48674);
var result__10789__auto___48676 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47892_48675,(0),null);
var env__10790__auto___48677 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47892_48675,(1),null);
if((!(hyperfiddle.rcf.unify.failed_QMARK_(env__10790__auto___48677)))){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Keyword(null,"=","=",1152933628),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"acks","acks",707064729),(1),new cljs.core.Keyword(null,"tree","tree",-196312028),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"change","change",-1163046502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"_","_",-1201019570,null))], null),new cljs.core.Keyword(null,"freeze","freeze",2043466309),cljs.core.PersistentHashSet.EMPTY], null)),new cljs.core.Keyword(null,"actual","actual",107306363),result__10789__auto___48676,new cljs.core.Keyword(null,"message","message",-406056002),null], null));

} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Keyword(null,"=","=",1152933628),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"acks","acks",707064729),(1),new cljs.core.Keyword(null,"tree","tree",-196312028),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"change","change",-1163046502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"_","_",-1201019570,null))], null),new cljs.core.Keyword(null,"freeze","freeze",2043466309),cljs.core.PersistentHashSet.EMPTY], null)),new cljs.core.Keyword(null,"actual","actual",107306363),hyperfiddle.rcf.unify.explain(env__10790__auto___48677),new cljs.core.Keyword(null,"message","message",-406056002),null], null));

}
}catch (e47891){var t__10765__auto___48680 = e47891;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Keyword("hyperfiddle.rcf","=","hyperfiddle.rcf/=",-249719063),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"acks","acks",707064729),(1),new cljs.core.Keyword(null,"tree","tree",-196312028),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"change","change",-1163046502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"_","_",-1201019570,null))], null),new cljs.core.Keyword(null,"freeze","freeze",2043466309),cljs.core.PersistentHashSet.EMPTY], null)),null,t__10765__auto___48680,null]));
}finally {RCF__done_BANG_();
}
var fexpr__47895_48681 = q();
(fexpr__47895_48681.cljs$core$IFn$_invoke$arity$0 ? fexpr__47895_48681.cljs$core$IFn$_invoke$arity$0() : fexpr__47895_48681.call(null));

var G__47896_48682 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"change","change",-1163046502),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(new hyperfiddle.electric.Failure(hyperfiddle.electric.debug.ex_info_STAR_.cljs$core$IFn$_invoke$arity$4("1",cljs.core.PersistentArrayMap.EMPTY,"064710fe-35bb-4dc6-bfdf-667702434acd",null)))]));
(_BANG_.cljs$core$IFn$_invoke$arity$1 ? _BANG_.cljs$core$IFn$_invoke$arity$1(G__47896_48682) : _BANG_.call(null,G__47896_48682));

try{var values__10777__auto___48683 = (new cljs.core.List(null,q(),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"acks","acks",707064729),(1),new cljs.core.Keyword(null,"tree","tree",-196312028),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"change","change",-1163046502),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"freeze","freeze",2043466309),cljs.core.PersistentHashSet.EMPTY], null),null,(1),null)),(2),null));
var result__10778__auto___48684 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto___48683);
if(cljs.core.truth_(result__10778__auto___48684)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"acks","acks",707064729),(1),new cljs.core.Keyword(null,"tree","tree",-196312028),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"change","change",-1163046502),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"freeze","freeze",2043466309),cljs.core.PersistentHashSet.EMPTY], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto___48683),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"acks","acks",707064729),(1),new cljs.core.Keyword(null,"tree","tree",-196312028),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"change","change",-1163046502),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"freeze","freeze",2043466309),cljs.core.PersistentHashSet.EMPTY], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto___48683),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10777__auto___48683);
}catch (e47897){var t__10765__auto___48687 = e47897;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"acks","acks",707064729),(1),new cljs.core.Keyword(null,"tree","tree",-196312028),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"change","change",-1163046502),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"freeze","freeze",2043466309),cljs.core.PersistentHashSet.EMPTY], null)),null,t__10765__auto___48687,null]));
}finally {RCF__done_BANG_();
}
var fexpr__47898 = q();
return (fexpr__47898.cljs$core$IFn$_invoke$arity$0 ? fexpr__47898.cljs$core$IFn$_invoke$arity$0() : fexpr__47898.call(null));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47874.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta47875","meta47875",-1830657316,null)], null);
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47874.cljs$lang$type = true);

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47874.cljs$lang$ctorStr = "hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime47874");

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47874.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime47874");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime47874.
 */
hyperfiddle.electric.impl.runtime.__GT_t_hyperfiddle$electric$impl$runtime47874 = (function hyperfiddle$electric$impl$runtime$__GT_t_hyperfiddle$electric$impl$runtime47874(meta47875){
return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47874(meta47875));
});


hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1469 = (function hyperfiddle$electric$impl$runtime$generated__hyperfiddle_electric_impl_runtime_1469(){
return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47874(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1469;},new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","generated__hyperfiddle_electric_impl_runtime_1469","hyperfiddle.electric.impl.runtime/generated__hyperfiddle_electric_impl_runtime_1469",1917403477,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"hyperfiddle/electric/impl/runtime.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"hyperfiddle.electric.impl.runtime","hyperfiddle.electric.impl.runtime",-92393903,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),1469,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__hyperfiddle_electric_impl_runtime_1469","generated__hyperfiddle_electric_impl_runtime_1469",662648270,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1469)?hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1469.cljs$lang$test:null)], null)),hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1469));
} else {
}

//# sourceMappingURL=hyperfiddle.electric.impl.runtime.js.map
