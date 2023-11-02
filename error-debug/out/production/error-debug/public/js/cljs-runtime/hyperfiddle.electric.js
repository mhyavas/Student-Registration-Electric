goog.provide('hyperfiddle.electric');
(hyperfiddle.electric.Pending.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.electric.Pending.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return (other instanceof hyperfiddle.electric.Pending);
}));
(hyperfiddle.electric.Failure.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.electric.Failure.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return (((other instanceof hyperfiddle.electric.Failure)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.error,other.error)));
}));
(hyperfiddle.electric.FailureInfo.prototype.__proto__ = cljs.core.ExceptionInfo.prototype);
(hyperfiddle.electric.FailureInfo.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.electric.FailureInfo.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return (((other instanceof hyperfiddle.electric.FailureInfo)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.cause,other.cause)));
}));
/**
 * Takes a resolve map and a program, returns a booting function.
 *   The booting function takes
 *   * as first argument a function Any->Task[Unit] returned task writes the value on the wire.
 *   * as second argument a flow producing the values read on the wire.
 *   and returning a task that runs the local reactor.
 */
hyperfiddle.electric.eval = hyperfiddle.electric.impl.runtime.eval;
hyperfiddle.electric.hook = hyperfiddle.electric.impl.runtime.hook;
hyperfiddle.electric.bind = hyperfiddle.electric.impl.runtime.bind;
hyperfiddle.electric.with$ = hyperfiddle.electric.impl.runtime.with$;
hyperfiddle.electric.pair = (function hyperfiddle$electric$pair(c,s){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr33060_block_0 = (function hyperfiddle$electric$pair_$_cr33060_block_0(cr33060_state){
try{var cr33060_place_0 = missionary.core.dfv;
var cr33060_place_1 = (function (){var fexpr__33124 = cr33060_place_0;
return (fexpr__33124.cljs$core$IFn$_invoke$arity$0 ? fexpr__33124.cljs$core$IFn$_invoke$arity$0() : fexpr__33124.call(null));
})();
var cr33060_place_2 = missionary.core.dfv;
var cr33060_place_3 = (function (){var fexpr__33125 = cr33060_place_2;
return (fexpr__33125.cljs$core$IFn$_invoke$arity$0 ? fexpr__33125.cljs$core$IFn$_invoke$arity$0() : fexpr__33125.call(null));
})();
var cr33060_place_4 = missionary.core.join;
var cr33060_place_5 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr33060_place_6 = (function (x){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr33063_block_0 = (function (cr33063_state){
try{var cr33063_place_0 = cr33060_place_1;
(cr33063_state[(0)] = cr33063_block_1);

return missionary.core.park(cr33063_place_0);
}catch (e33130){var e33069 = e33130;
var cr33063_exception = e33069;
(cr33063_state[(0)] = null);

throw cr33063_exception;
}});
var cr33063_block_1 = (function (cr33063_state){
try{var cr33063_place_1 = missionary.core.unpark();
var cr33063_place_2 = cr33063_place_1;
var cr33063_place_3 = x;
var cr33063_place_4 = (function (){var G__33072 = cr33063_place_3;
var fexpr__33071 = cr33063_place_2;
var G__33133 = G__33072;
var fexpr__33132 = fexpr__33071;
return (fexpr__33132.cljs$core$IFn$_invoke$arity$1 ? fexpr__33132.cljs$core$IFn$_invoke$arity$1(G__33133) : fexpr__33132.call(null,G__33133));
})();
(cr33063_state[(0)] = null);

return cr33063_place_4;
}catch (e33131){var e33070 = e33131;
var cr33063_exception = e33070;
(cr33063_state[(0)] = null);

throw cr33063_exception;
}});
return cloroutine.impl.coroutine((function (){var G__33073 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__33073[(0)] = cr33063_block_0);

return G__33073;
})());
})(),missionary.core.sp_run);
});
var cr33060_place_7 = (function (_BANG_){
var G__33135_33258 = _BANG_;
var fexpr__33134_33259 = cr33060_place_3;
(fexpr__33134_33259.cljs$core$IFn$_invoke$arity$1 ? fexpr__33134_33259.cljs$core$IFn$_invoke$arity$1(G__33135_33258) : fexpr__33134_33259.call(null,G__33135_33258));

return (function (){
return cljs.core.List.EMPTY;
});
});
var cr33060_place_8 = s;
var cr33060_place_9 = cr33060_place_6;
var cr33060_place_10 = cr33060_place_7;
var cr33060_place_11 = (function (){var G__33137 = cr33060_place_9;
var G__33138 = cr33060_place_10;
var fexpr__33136 = cr33060_place_8;
return (fexpr__33136.cljs$core$IFn$_invoke$arity$2 ? fexpr__33136.cljs$core$IFn$_invoke$arity$2(G__33137,G__33138) : fexpr__33136.call(null,G__33137,G__33138));
})();
var cr33060_place_12 = (function (x){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr33077_block_0 = (function (cr33077_state){
try{var cr33077_place_0 = cr33060_place_3;
(cr33077_state[(0)] = cr33077_block_1);

return missionary.core.park(cr33077_place_0);
}catch (e33143){var e33083 = e33143;
var cr33077_exception = e33083;
(cr33077_state[(0)] = null);

throw cr33077_exception;
}});
var cr33077_block_1 = (function (cr33077_state){
try{var cr33077_place_1 = missionary.core.unpark();
var cr33077_place_2 = cr33077_place_1;
var cr33077_place_3 = x;
var cr33077_place_4 = (function (){var G__33086 = cr33077_place_3;
var fexpr__33085 = cr33077_place_2;
var G__33146 = G__33086;
var fexpr__33145 = fexpr__33085;
return (fexpr__33145.cljs$core$IFn$_invoke$arity$1 ? fexpr__33145.cljs$core$IFn$_invoke$arity$1(G__33146) : fexpr__33145.call(null,G__33146));
})();
(cr33077_state[(0)] = null);

return cr33077_place_4;
}catch (e33144){var e33084 = e33144;
var cr33077_exception = e33084;
(cr33077_state[(0)] = null);

throw cr33077_exception;
}});
return cloroutine.impl.coroutine((function (){var G__33087 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__33087[(0)] = cr33077_block_0);

return G__33087;
})());
})(),missionary.core.sp_run);
});
var cr33060_place_13 = (function (_BANG_){
var G__33148_33260 = _BANG_;
var fexpr__33147_33261 = cr33060_place_1;
(fexpr__33147_33261.cljs$core$IFn$_invoke$arity$1 ? fexpr__33147_33261.cljs$core$IFn$_invoke$arity$1(G__33148_33260) : fexpr__33147_33261.call(null,G__33148_33260));

return (function (){
return cljs.core.List.EMPTY;
});
});
var cr33060_place_14 = (function (p1__33059_SHARP_){
throw p1__33059_SHARP_;
});
var cr33060_place_15 = c;
var cr33060_place_16 = cr33060_place_12;
var cr33060_place_17 = cr33060_place_13;
var cr33060_place_18 = cr33060_place_14;
var cr33060_place_19 = (function (){var G__33150 = cr33060_place_16;
var G__33151 = cr33060_place_17;
var G__33152 = cr33060_place_18;
var fexpr__33149 = cr33060_place_15;
return (fexpr__33149.cljs$core$IFn$_invoke$arity$3 ? fexpr__33149.cljs$core$IFn$_invoke$arity$3(G__33150,G__33151,G__33152) : fexpr__33149.call(null,G__33150,G__33151,G__33152));
})();
var cr33060_place_20 = (function (){var G__33154 = cr33060_place_5;
var G__33155 = cr33060_place_11;
var G__33156 = cr33060_place_19;
var fexpr__33153 = cr33060_place_4;
return (fexpr__33153.cljs$core$IFn$_invoke$arity$3 ? fexpr__33153.cljs$core$IFn$_invoke$arity$3(G__33154,G__33155,G__33156) : fexpr__33153.call(null,G__33154,G__33155,G__33156));
})();
(cr33060_state[(0)] = cr33060_block_1);

return missionary.core.park(cr33060_place_20);
}catch (e33123){var cr33060_exception = e33123;
(cr33060_state[(0)] = null);

throw cr33060_exception;
}});
var cr33060_block_1 = (function hyperfiddle$electric$pair_$_cr33060_block_1(cr33060_state){
try{var cr33060_place_21 = missionary.core.unpark();
(cr33060_state[(0)] = null);

return cr33060_place_21;
}catch (e33157){var cr33060_exception = e33157;
(cr33060_state[(0)] = null);

throw cr33060_exception;
}});
return cloroutine.impl.coroutine((function (){var G__33158 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__33158[(0)] = cr33060_block_0);

return G__33158;
})());
})(),missionary.core.sp_run);
});
hyperfiddle.electric.failure_QMARK_ = (function hyperfiddle$electric$failure_QMARK_(x){
return (x instanceof hyperfiddle.electric.Failure);
});
hyperfiddle.electric.task__GT_cp = (function hyperfiddle$electric$task__GT_cp(var_args){
var G__33161 = arguments.length;
switch (G__33161) {
case 1:
return hyperfiddle.electric.task__GT_cp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hyperfiddle.electric.task__GT_cp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hyperfiddle.electric.task__GT_cp.cljs$core$IFn$_invoke$arity$1 = (function (_BANG_x){
return hyperfiddle.electric.task__GT_cp.cljs$core$IFn$_invoke$arity$2(_BANG_x,(new hyperfiddle.electric.Failure((new hyperfiddle.electric.Pending()))));
}));

(hyperfiddle.electric.task__GT_cp.cljs$core$IFn$_invoke$arity$2 = (function (_BANG_x,pending){
return missionary.core.reductions.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,pending,cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr33162_block_0 = (function hyperfiddle$electric$cr33162_block_0(cr33162_state){
try{var cr33162_place_0 = _BANG_x;
(cr33162_state[(0)] = cr33162_block_1);

return missionary.core.park(cr33162_place_0);
}catch (e33165){var cr33162_exception = e33165;
(cr33162_state[(0)] = null);

throw cr33162_exception;
}});
var cr33162_block_1 = (function hyperfiddle$electric$cr33162_block_1(cr33162_state){
try{var cr33162_place_1 = missionary.core.unpark();
(cr33162_state[(0)] = null);

return cr33162_place_1;
}catch (e33166){var cr33162_exception = e33166;
(cr33162_state[(0)] = null);

throw cr33162_exception;
}});
return cloroutine.impl.coroutine((function (){var G__33167 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__33167[(0)] = cr33162_block_0);

return G__33167;
})());
})(),missionary.core.ap_run));
}));

(hyperfiddle.electric.task__GT_cp.cljs$lang$maxFixedArity = 2);


/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
hyperfiddle.electric.Clock = (function (raf,callback,terminator){
this.raf = raf;
this.callback = callback;
this.terminator = terminator;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.Clock.prototype.call = (function (unused__13656__auto__){
var self__ = this;
var self__ = this;
var G__33169 = (arguments.length - (1));
switch (G__33169) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.Clock.prototype.apply = (function (self__,args33168){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args33168)));
}));

(hyperfiddle.electric.Clock.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
if((self__.raf === (0))){
return (self__.callback = null);
} else {
window.cancelAnimationFrame(self__.raf);

return (self__.terminator.cljs$core$IFn$_invoke$arity$0 ? self__.terminator.cljs$core$IFn$_invoke$arity$0() : self__.terminator.call(null));
}
}));

(hyperfiddle.electric.Clock.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if((self__.callback == null)){
(self__.terminator.cljs$core$IFn$_invoke$arity$0 ? self__.terminator.cljs$core$IFn$_invoke$arity$0() : self__.terminator.call(null));
} else {
(self__.raf = window.requestAnimationFrame(self__.callback));
}

return new cljs.core.Keyword("hyperfiddle.electric","tick","hyperfiddle.electric/tick",-1268517293);
}));

(hyperfiddle.electric.Clock.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"raf","raf",345121375,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"callback","callback",935395299,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"terminator","terminator",-1051388676,null)], null);
}));

(hyperfiddle.electric.Clock.cljs$lang$type = true);

(hyperfiddle.electric.Clock.cljs$lang$ctorStr = "hyperfiddle.electric/Clock");

(hyperfiddle.electric.Clock.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric/Clock");
}));

/**
 * Positional factory function for hyperfiddle.electric/Clock.
 */
hyperfiddle.electric.__GT_Clock = (function hyperfiddle$electric$__GT_Clock(raf,callback,terminator){
return (new hyperfiddle.electric.Clock(raf,callback,terminator));
});

/**
 * lazy & efficient logical clock that schedules no work unless sampled
 */
hyperfiddle.electric._LT_clock = (function hyperfiddle$electric$_LT_clock(n,t){
var cancel = hyperfiddle.electric.__GT_Clock((0),null,t);
(cancel.callback = (function (_){
(cancel.raf = (0));

return (n.cljs$core$IFn$_invoke$arity$0 ? n.cljs$core$IFn$_invoke$arity$0() : n.call(null));
}));

(n.cljs$core$IFn$_invoke$arity$0 ? n.cljs$core$IFn$_invoke$arity$0() : n.call(null));

return cancel;
});
hyperfiddle.electric._get_system_time_ms = (function hyperfiddle$electric$_get_system_time_ms(_){
return Date.now();
});
hyperfiddle.electric._check_fn_arity_BANG_ = (function hyperfiddle$electric$_check_fn_arity_BANG_(name,expected,actual){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(expected,actual)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["You called ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = name;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("hyperfiddle.electric","unnamed-efn","hyperfiddle.electric/unnamed-efn",1016396331)], 0));
}
})()),", a ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected),"-arg e/fn with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual)," arguments."].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name], null));
} else {
return null;
}
});
hyperfiddle.electric.watchable_QMARK_ = (function hyperfiddle$electric$watchable_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition1$ & (2))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IWatchable$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,x);
}
});
hyperfiddle.electric.checked_watch = (function hyperfiddle$electric$checked_watch(_BANG_x){
if(hyperfiddle.electric.watchable_QMARK_(_BANG_x)){
} else {
throw (new Error(["Assert failed: ","Provided argument is not Watchable.","\n","(watchable? !x)"].join('')));
}

return missionary.core.watch(_BANG_x);
});
hyperfiddle.electric._invalid_watch_usage_message = "Invalid e/watch (use from Electric code only, maybe you forgot a e/def?)";
hyperfiddle.electric.debounce_discreet = (function hyperfiddle$electric$debounce_discreet(var_args){
var G__33173 = arguments.length;
switch (G__33173) {
case 2:
return hyperfiddle.electric.debounce_discreet.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hyperfiddle.electric.debounce_discreet.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hyperfiddle.electric.debounce_discreet.cljs$core$IFn$_invoke$arity$2 = (function (delay,flow){
return hyperfiddle.electric.debounce_discreet.cljs$core$IFn$_invoke$arity$3(delay,null,flow);
}));

(hyperfiddle.electric.debounce_discreet.cljs$core$IFn$_invoke$arity$3 = (function (delay,init,flow){
return missionary.core.reductions.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,init,cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr33174_block_12 = (function hyperfiddle$electric$cr33174_block_12(cr33174_state){
try{var cr33174_place_3 = (cr33174_state[(1)]);
var cr33174_place_2 = (cr33174_state[(3)]);
var cr33174_place_22 = (cljs.core.truth_(cr33174_place_3)?(function(){throw cr33174_place_2})():cr33174_place_2);
(cr33174_state[(0)] = null);

(cr33174_state[(1)] = null);

(cr33174_state[(3)] = null);

return cr33174_place_22;
}catch (e33192){var cr33174_exception = e33192;
(cr33174_state[(0)] = null);

(cr33174_state[(1)] = null);

(cr33174_state[(3)] = null);

throw cr33174_exception;
}});
var cr33174_block_1 = (function hyperfiddle$electric$cr33174_block_1(cr33174_state){
try{var cr33174_place_1 = missionary.core.unpark();
var cr33174_place_2 = null;
var cr33174_place_3 = false;
(cr33174_state[(0)] = cr33174_block_2);

(cr33174_state[(2)] = cr33174_place_1);

(cr33174_state[(3)] = cr33174_place_2);

(cr33174_state[(1)] = cr33174_place_3);

return cr33174_state;
}catch (e33193){var cr33174_exception = e33193;
(cr33174_state[(0)] = null);

throw cr33174_exception;
}});
var cr33174_block_4 = (function hyperfiddle$electric$cr33174_block_4(cr33174_state){
try{var cr33174_place_2 = (cr33174_state[(3)]);
var cr33174_place_9 = cr33174_place_2;
var cr33174_place_10 = missionary.Cancelled;
var cr33174_place_11 = (cr33174_place_9 instanceof cr33174_place_10);
var cr33174_place_12 = null;
if(cr33174_place_11){
(cr33174_state[(0)] = cr33174_block_9);

(cr33174_state[(2)] = cr33174_place_12);

return cr33174_state;
} else {
(cr33174_state[(0)] = cr33174_block_5);

(cr33174_state[(2)] = cr33174_place_12);

return cr33174_state;
}
}catch (e33194){var cr33174_exception = e33194;
(cr33174_state[(0)] = cr33174_block_12);

(cr33174_state[(1)] = true);

(cr33174_state[(3)] = cr33174_exception);

return cr33174_state;
}});
var cr33174_block_6 = (function hyperfiddle$electric$cr33174_block_6(cr33174_state){
try{var cr33174_place_15 = null;
(cr33174_state[(0)] = cr33174_block_8);

(cr33174_state[(4)] = cr33174_place_15);

return cr33174_state;
}catch (e33195){var cr33174_exception = e33195;
(cr33174_state[(0)] = cr33174_block_12);

(cr33174_state[(4)] = null);

(cr33174_state[(2)] = null);

(cr33174_state[(1)] = true);

(cr33174_state[(3)] = cr33174_exception);

return cr33174_state;
}});
var cr33174_block_11 = (function hyperfiddle$electric$cr33174_block_11(cr33174_state){
try{var cr33174_place_12 = (cr33174_state[(2)]);
(cr33174_state[(0)] = cr33174_block_12);

(cr33174_state[(2)] = null);

(cr33174_state[(3)] = cr33174_place_12);

return cr33174_state;
}catch (e33196){var cr33174_exception = e33196;
(cr33174_state[(0)] = cr33174_block_12);

(cr33174_state[(2)] = null);

(cr33174_state[(1)] = true);

(cr33174_state[(3)] = cr33174_exception);

return cr33174_state;
}});
var cr33174_block_7 = (function hyperfiddle$electric$cr33174_block_7(cr33174_state){
try{var cr33174_place_2 = (cr33174_state[(3)]);
var cr33174_place_16 = cr33174_place_2;
var cr33174_place_17 = (function(){throw cr33174_place_16})();
(cr33174_state[(0)] = null);

(cr33174_state[(1)] = null);

(cr33174_state[(3)] = null);

return null;
}catch (e33197){var cr33174_exception = e33197;
(cr33174_state[(0)] = cr33174_block_12);

(cr33174_state[(1)] = true);

(cr33174_state[(3)] = cr33174_exception);

return cr33174_state;
}});
var cr33174_block_3 = (function hyperfiddle$electric$cr33174_block_3(cr33174_state){
try{var cr33174_place_8 = missionary.core.unpark();
(cr33174_state[(0)] = cr33174_block_12);

(cr33174_state[(3)] = cr33174_place_8);

return cr33174_state;
}catch (e33198){var cr33174_exception = e33198;
(cr33174_state[(0)] = cr33174_block_4);

(cr33174_state[(3)] = cr33174_exception);

return cr33174_state;
}});
var cr33174_block_9 = (function hyperfiddle$electric$cr33174_block_9(cr33174_state){
try{var cr33174_place_2 = (cr33174_state[(3)]);
var cr33174_place_18 = cr33174_place_2;
var cr33174_place_19 = (1);
var cr33174_place_20 = missionary.core.none;
(cr33174_state[(0)] = cr33174_block_10);

return missionary.core.fork(cr33174_place_19,cr33174_place_20);
}catch (e33199){var cr33174_exception = e33199;
(cr33174_state[(0)] = cr33174_block_12);

(cr33174_state[(2)] = null);

(cr33174_state[(1)] = true);

(cr33174_state[(3)] = cr33174_exception);

return cr33174_state;
}});
var cr33174_block_8 = (function hyperfiddle$electric$cr33174_block_8(cr33174_state){
try{var cr33174_place_14 = (cr33174_state[(4)]);
(cr33174_state[(0)] = cr33174_block_11);

(cr33174_state[(4)] = null);

(cr33174_state[(2)] = cr33174_place_14);

return cr33174_state;
}catch (e33200){var cr33174_exception = e33200;
(cr33174_state[(0)] = cr33174_block_12);

(cr33174_state[(4)] = null);

(cr33174_state[(2)] = null);

(cr33174_state[(1)] = true);

(cr33174_state[(3)] = cr33174_exception);

return cr33174_state;
}});
var cr33174_block_5 = (function hyperfiddle$electric$cr33174_block_5(cr33174_state){
try{var cr33174_place_13 = new cljs.core.Keyword(null,"else","else",-1508377146);
var cr33174_place_14 = null;
if(cljs.core.truth_(cr33174_place_13)){
(cr33174_state[(0)] = cr33174_block_7);

(cr33174_state[(2)] = null);

return cr33174_state;
} else {
(cr33174_state[(0)] = cr33174_block_6);

(cr33174_state[(4)] = cr33174_place_14);

return cr33174_state;
}
}catch (e33201){var cr33174_exception = e33201;
(cr33174_state[(0)] = cr33174_block_12);

(cr33174_state[(2)] = null);

(cr33174_state[(1)] = true);

(cr33174_state[(3)] = cr33174_exception);

return cr33174_state;
}});
var cr33174_block_10 = (function hyperfiddle$electric$cr33174_block_10(cr33174_state){
try{var cr33174_place_21 = missionary.core.unpark();
(cr33174_state[(0)] = cr33174_block_11);

(cr33174_state[(2)] = cr33174_place_21);

return cr33174_state;
}catch (e33202){var cr33174_exception = e33202;
(cr33174_state[(0)] = cr33174_block_12);

(cr33174_state[(2)] = null);

(cr33174_state[(1)] = true);

(cr33174_state[(3)] = cr33174_exception);

return cr33174_state;
}});
var cr33174_block_2 = (function hyperfiddle$electric$cr33174_block_2(cr33174_state){
try{var cr33174_place_1 = (cr33174_state[(2)]);
var cr33174_place_4 = missionary.core.sleep;
var cr33174_place_5 = delay;
var cr33174_place_6 = cr33174_place_1;
var cr33174_place_7 = (function (){var G__33205 = cr33174_place_5;
var G__33206 = cr33174_place_6;
var fexpr__33204 = cr33174_place_4;
return (fexpr__33204.cljs$core$IFn$_invoke$arity$2 ? fexpr__33204.cljs$core$IFn$_invoke$arity$2(G__33205,G__33206) : fexpr__33204.call(null,G__33205,G__33206));
})();
(cr33174_state[(0)] = cr33174_block_3);

(cr33174_state[(2)] = null);

return missionary.core.park(cr33174_place_7);
}catch (e33203){var cr33174_exception = e33203;
(cr33174_state[(0)] = cr33174_block_4);

(cr33174_state[(2)] = null);

(cr33174_state[(3)] = cr33174_exception);

return cr33174_state;
}});
var cr33174_block_0 = (function hyperfiddle$electric$cr33174_block_0(cr33174_state){
try{var cr33174_place_0 = flow;
(cr33174_state[(0)] = cr33174_block_1);

return missionary.core.switch$(cr33174_place_0);
}catch (e33207){var cr33174_exception = e33207;
(cr33174_state[(0)] = null);

throw cr33174_exception;
}});
return cloroutine.impl.coroutine((function (){var G__33208 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((5));
(G__33208[(0)] = cr33174_block_0);

return G__33208;
})());
})(),missionary.core.ap_run));
}));

(hyperfiddle.electric.debounce_discreet.cljs$lang$maxFixedArity = 3);

hyperfiddle.electric.throttle = (function hyperfiddle$electric$throttle(dur,_GT_in){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr33209_block_1 = (function hyperfiddle$electric$throttle_$_cr33209_block_1(cr33209_state){
try{var cr33209_place_5 = missionary.core.unpark();
var cr33209_place_6 = (1);
var cr33209_place_7 = missionary.core.seed;
var cr33209_place_8 = cljs.core.range;
var cr33209_place_9 = (2);
var cr33209_place_10 = (function (){var G__33232 = cr33209_place_9;
var fexpr__33231 = cr33209_place_8;
return (fexpr__33231.cljs$core$IFn$_invoke$arity$1 ? fexpr__33231.cljs$core$IFn$_invoke$arity$1(G__33232) : fexpr__33231.call(null,G__33232));
})();
var cr33209_place_11 = (function (){var G__33234 = cr33209_place_10;
var fexpr__33233 = cr33209_place_7;
return (fexpr__33233.cljs$core$IFn$_invoke$arity$1 ? fexpr__33233.cljs$core$IFn$_invoke$arity$1(G__33234) : fexpr__33233.call(null,G__33234));
})();
(cr33209_state[(0)] = cr33209_block_2);

(cr33209_state[(1)] = cr33209_place_5);

return missionary.core.fork(cr33209_place_6,cr33209_place_11);
}catch (e33230){var cr33209_exception = e33230;
(cr33209_state[(0)] = null);

throw cr33209_exception;
}});
var cr33209_block_5 = (function hyperfiddle$electric$throttle_$_cr33209_block_5(cr33209_state){
try{var cr33209_place_19 = missionary.core.unpark();
var cr33209_place_20 = (1);
var cr33209_place_21 = missionary.core.none;
(cr33209_state[(0)] = cr33209_block_6);

return missionary.core.fork(cr33209_place_20,cr33209_place_21);
}catch (e33235){var cr33209_exception = e33235;
(cr33209_state[(0)] = null);

(cr33209_state[(2)] = null);

throw cr33209_exception;
}});
var cr33209_block_6 = (function hyperfiddle$electric$throttle_$_cr33209_block_6(cr33209_state){
try{var cr33209_place_22 = missionary.core.unpark();
(cr33209_state[(0)] = cr33209_block_8);

(cr33209_state[(2)] = cr33209_place_22);

return cr33209_state;
}catch (e33236){var cr33209_exception = e33236;
(cr33209_state[(0)] = null);

(cr33209_state[(2)] = null);

throw cr33209_exception;
}});
var cr33209_block_4 = (function hyperfiddle$electric$throttle_$_cr33209_block_4(cr33209_state){
try{var cr33209_place_16 = missionary.core.sleep;
var cr33209_place_17 = dur;
var cr33209_place_18 = (function (){var G__33239 = cr33209_place_17;
var fexpr__33238 = cr33209_place_16;
return (fexpr__33238.cljs$core$IFn$_invoke$arity$1 ? fexpr__33238.cljs$core$IFn$_invoke$arity$1(G__33239) : fexpr__33238.call(null,G__33239));
})();
(cr33209_state[(0)] = cr33209_block_5);

return missionary.core.park(cr33209_place_18);
}catch (e33237){var cr33209_exception = e33237;
(cr33209_state[(0)] = null);

(cr33209_state[(2)] = null);

throw cr33209_exception;
}});
var cr33209_block_2 = (function hyperfiddle$electric$throttle_$_cr33209_block_2(cr33209_state){
try{var cr33209_place_12 = missionary.core.unpark();
var cr33209_place_13 = cr33209_place_12;
var cr33209_place_14 = null;
var G__33241 = cr33209_place_13;
switch (G__33241) {
case (0):
(cr33209_state[(0)] = cr33209_block_3);

(cr33209_state[(2)] = cr33209_place_14);

return cr33209_state;

break;
case (1):
(cr33209_state[(0)] = cr33209_block_4);

(cr33209_state[(1)] = null);

(cr33209_state[(2)] = cr33209_place_14);

return cr33209_state;

break;
default:
(cr33209_state[(0)] = cr33209_block_7);

(cr33209_state[(1)] = null);

(cr33209_state[(1)] = cr33209_place_12);

return cr33209_state;

}
}catch (e33240){var cr33209_exception = e33240;
(cr33209_state[(0)] = null);

(cr33209_state[(1)] = null);

throw cr33209_exception;
}});
var cr33209_block_8 = (function hyperfiddle$electric$throttle_$_cr33209_block_8(cr33209_state){
try{var cr33209_place_14 = (cr33209_state[(2)]);
(cr33209_state[(0)] = null);

(cr33209_state[(2)] = null);

return cr33209_place_14;
}catch (e33242){var cr33209_exception = e33242;
(cr33209_state[(0)] = null);

(cr33209_state[(2)] = null);

throw cr33209_exception;
}});
var cr33209_block_7 = (function hyperfiddle$electric$throttle_$_cr33209_block_7(cr33209_state){
try{var cr33209_place_12 = (cr33209_state[(1)]);
var cr33209_place_23 = "No matching clause: ";
var cr33209_place_24 = cr33209_place_12;
var cr33209_place_25 = [cr33209_place_23,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr33209_place_24)].join('');
var cr33209_place_26 = (new Error(cr33209_place_25));
var cr33209_place_27 = (function(){throw cr33209_place_26})();
(cr33209_state[(0)] = null);

(cr33209_state[(1)] = null);

return null;
}catch (e33243){var cr33209_exception = e33243;
(cr33209_state[(0)] = null);

(cr33209_state[(1)] = null);

throw cr33209_exception;
}});
var cr33209_block_0 = (function hyperfiddle$electric$throttle_$_cr33209_block_0(cr33209_state){
try{var cr33209_place_0 = (1);
var cr33209_place_1 = missionary.core.relieve;
var cr33209_place_2 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr33209_place_3 = _GT_in;
var cr33209_place_4 = (function (){var G__33246 = cr33209_place_2;
var G__33247 = cr33209_place_3;
var fexpr__33245 = cr33209_place_1;
return (fexpr__33245.cljs$core$IFn$_invoke$arity$2 ? fexpr__33245.cljs$core$IFn$_invoke$arity$2(G__33246,G__33247) : fexpr__33245.call(null,G__33246,G__33247));
})();
(cr33209_state[(0)] = cr33209_block_1);

return missionary.core.fork(cr33209_place_0,cr33209_place_4);
}catch (e33244){var cr33209_exception = e33244;
(cr33209_state[(0)] = null);

throw cr33209_exception;
}});
var cr33209_block_3 = (function hyperfiddle$electric$throttle_$_cr33209_block_3(cr33209_state){
try{var cr33209_place_5 = (cr33209_state[(1)]);
var cr33209_place_15 = cr33209_place_5;
(cr33209_state[(0)] = cr33209_block_8);

(cr33209_state[(1)] = null);

(cr33209_state[(2)] = cr33209_place_15);

return cr33209_state;
}catch (e33248){var cr33209_exception = e33248;
(cr33209_state[(0)] = null);

(cr33209_state[(1)] = null);

(cr33209_state[(2)] = null);

throw cr33209_exception;
}});
return cloroutine.impl.coroutine((function (){var G__33249 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((3));
(G__33249[(0)] = cr33209_block_0);

return G__33249;
})());
})(),missionary.core.ap_run);
});
/**
 * Bound to the HTTP request of the page in which the current Electric program is running.
 */
hyperfiddle.electric._STAR_http_request_STAR_ = null;

//# sourceMappingURL=hyperfiddle.electric.js.map
