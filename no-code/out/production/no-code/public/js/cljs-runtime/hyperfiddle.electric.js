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
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr33189_block_0 = (function hyperfiddle$electric$pair_$_cr33189_block_0(cr33189_state){
try{var cr33189_place_0 = missionary.core.dfv;
var cr33189_place_1 = (function (){var fexpr__33253 = cr33189_place_0;
return (fexpr__33253.cljs$core$IFn$_invoke$arity$0 ? fexpr__33253.cljs$core$IFn$_invoke$arity$0() : fexpr__33253.call(null));
})();
var cr33189_place_2 = missionary.core.dfv;
var cr33189_place_3 = (function (){var fexpr__33254 = cr33189_place_2;
return (fexpr__33254.cljs$core$IFn$_invoke$arity$0 ? fexpr__33254.cljs$core$IFn$_invoke$arity$0() : fexpr__33254.call(null));
})();
var cr33189_place_4 = missionary.core.join;
var cr33189_place_5 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr33189_place_6 = (function (x){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr33192_block_0 = (function (cr33192_state){
try{var cr33192_place_0 = cr33189_place_1;
(cr33192_state[(0)] = cr33192_block_1);

return missionary.core.park(cr33192_place_0);
}catch (e33259){var e33198 = e33259;
var cr33192_exception = e33198;
(cr33192_state[(0)] = null);

throw cr33192_exception;
}});
var cr33192_block_1 = (function (cr33192_state){
try{var cr33192_place_1 = missionary.core.unpark();
var cr33192_place_2 = cr33192_place_1;
var cr33192_place_3 = x;
var cr33192_place_4 = (function (){var G__33201 = cr33192_place_3;
var fexpr__33200 = cr33192_place_2;
var G__33262 = G__33201;
var fexpr__33261 = fexpr__33200;
return (fexpr__33261.cljs$core$IFn$_invoke$arity$1 ? fexpr__33261.cljs$core$IFn$_invoke$arity$1(G__33262) : fexpr__33261.call(null,G__33262));
})();
(cr33192_state[(0)] = null);

return cr33192_place_4;
}catch (e33260){var e33199 = e33260;
var cr33192_exception = e33199;
(cr33192_state[(0)] = null);

throw cr33192_exception;
}});
return cloroutine.impl.coroutine((function (){var G__33202 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__33202[(0)] = cr33192_block_0);

return G__33202;
})());
})(),missionary.core.sp_run);
});
var cr33189_place_7 = (function (_BANG_){
var G__33264_33387 = _BANG_;
var fexpr__33263_33388 = cr33189_place_3;
(fexpr__33263_33388.cljs$core$IFn$_invoke$arity$1 ? fexpr__33263_33388.cljs$core$IFn$_invoke$arity$1(G__33264_33387) : fexpr__33263_33388.call(null,G__33264_33387));

return (function (){
return cljs.core.List.EMPTY;
});
});
var cr33189_place_8 = s;
var cr33189_place_9 = cr33189_place_6;
var cr33189_place_10 = cr33189_place_7;
var cr33189_place_11 = (function (){var G__33266 = cr33189_place_9;
var G__33267 = cr33189_place_10;
var fexpr__33265 = cr33189_place_8;
return (fexpr__33265.cljs$core$IFn$_invoke$arity$2 ? fexpr__33265.cljs$core$IFn$_invoke$arity$2(G__33266,G__33267) : fexpr__33265.call(null,G__33266,G__33267));
})();
var cr33189_place_12 = (function (x){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr33206_block_0 = (function (cr33206_state){
try{var cr33206_place_0 = cr33189_place_3;
(cr33206_state[(0)] = cr33206_block_1);

return missionary.core.park(cr33206_place_0);
}catch (e33272){var e33212 = e33272;
var cr33206_exception = e33212;
(cr33206_state[(0)] = null);

throw cr33206_exception;
}});
var cr33206_block_1 = (function (cr33206_state){
try{var cr33206_place_1 = missionary.core.unpark();
var cr33206_place_2 = cr33206_place_1;
var cr33206_place_3 = x;
var cr33206_place_4 = (function (){var G__33215 = cr33206_place_3;
var fexpr__33214 = cr33206_place_2;
var G__33275 = G__33215;
var fexpr__33274 = fexpr__33214;
return (fexpr__33274.cljs$core$IFn$_invoke$arity$1 ? fexpr__33274.cljs$core$IFn$_invoke$arity$1(G__33275) : fexpr__33274.call(null,G__33275));
})();
(cr33206_state[(0)] = null);

return cr33206_place_4;
}catch (e33273){var e33213 = e33273;
var cr33206_exception = e33213;
(cr33206_state[(0)] = null);

throw cr33206_exception;
}});
return cloroutine.impl.coroutine((function (){var G__33216 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__33216[(0)] = cr33206_block_0);

return G__33216;
})());
})(),missionary.core.sp_run);
});
var cr33189_place_13 = (function (_BANG_){
var G__33277_33389 = _BANG_;
var fexpr__33276_33390 = cr33189_place_1;
(fexpr__33276_33390.cljs$core$IFn$_invoke$arity$1 ? fexpr__33276_33390.cljs$core$IFn$_invoke$arity$1(G__33277_33389) : fexpr__33276_33390.call(null,G__33277_33389));

return (function (){
return cljs.core.List.EMPTY;
});
});
var cr33189_place_14 = (function (p1__33188_SHARP_){
throw p1__33188_SHARP_;
});
var cr33189_place_15 = c;
var cr33189_place_16 = cr33189_place_12;
var cr33189_place_17 = cr33189_place_13;
var cr33189_place_18 = cr33189_place_14;
var cr33189_place_19 = (function (){var G__33279 = cr33189_place_16;
var G__33280 = cr33189_place_17;
var G__33281 = cr33189_place_18;
var fexpr__33278 = cr33189_place_15;
return (fexpr__33278.cljs$core$IFn$_invoke$arity$3 ? fexpr__33278.cljs$core$IFn$_invoke$arity$3(G__33279,G__33280,G__33281) : fexpr__33278.call(null,G__33279,G__33280,G__33281));
})();
var cr33189_place_20 = (function (){var G__33283 = cr33189_place_5;
var G__33284 = cr33189_place_11;
var G__33285 = cr33189_place_19;
var fexpr__33282 = cr33189_place_4;
return (fexpr__33282.cljs$core$IFn$_invoke$arity$3 ? fexpr__33282.cljs$core$IFn$_invoke$arity$3(G__33283,G__33284,G__33285) : fexpr__33282.call(null,G__33283,G__33284,G__33285));
})();
(cr33189_state[(0)] = cr33189_block_1);

return missionary.core.park(cr33189_place_20);
}catch (e33252){var cr33189_exception = e33252;
(cr33189_state[(0)] = null);

throw cr33189_exception;
}});
var cr33189_block_1 = (function hyperfiddle$electric$pair_$_cr33189_block_1(cr33189_state){
try{var cr33189_place_21 = missionary.core.unpark();
(cr33189_state[(0)] = null);

return cr33189_place_21;
}catch (e33286){var cr33189_exception = e33286;
(cr33189_state[(0)] = null);

throw cr33189_exception;
}});
return cloroutine.impl.coroutine((function (){var G__33287 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__33287[(0)] = cr33189_block_0);

return G__33287;
})());
})(),missionary.core.sp_run);
});
hyperfiddle.electric.failure_QMARK_ = (function hyperfiddle$electric$failure_QMARK_(x){
return (x instanceof hyperfiddle.electric.Failure);
});
hyperfiddle.electric.task__GT_cp = (function hyperfiddle$electric$task__GT_cp(var_args){
var G__33290 = arguments.length;
switch (G__33290) {
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
return missionary.core.reductions.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,pending,cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr33291_block_0 = (function hyperfiddle$electric$cr33291_block_0(cr33291_state){
try{var cr33291_place_0 = _BANG_x;
(cr33291_state[(0)] = cr33291_block_1);

return missionary.core.park(cr33291_place_0);
}catch (e33294){var cr33291_exception = e33294;
(cr33291_state[(0)] = null);

throw cr33291_exception;
}});
var cr33291_block_1 = (function hyperfiddle$electric$cr33291_block_1(cr33291_state){
try{var cr33291_place_1 = missionary.core.unpark();
(cr33291_state[(0)] = null);

return cr33291_place_1;
}catch (e33295){var cr33291_exception = e33295;
(cr33291_state[(0)] = null);

throw cr33291_exception;
}});
return cloroutine.impl.coroutine((function (){var G__33296 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__33296[(0)] = cr33291_block_0);

return G__33296;
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
(hyperfiddle.electric.Clock.prototype.call = (function (unused__13625__auto__){
var self__ = this;
var self__ = this;
var G__33298 = (arguments.length - (1));
switch (G__33298) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.Clock.prototype.apply = (function (self__,args33297){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args33297)));
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
var G__33302 = arguments.length;
switch (G__33302) {
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
return missionary.core.reductions.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,init,cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr33303_block_8 = (function hyperfiddle$electric$cr33303_block_8(cr33303_state){
try{var cr33303_place_14 = (cr33303_state[(4)]);
(cr33303_state[(0)] = cr33303_block_11);

(cr33303_state[(4)] = null);

(cr33303_state[(3)] = cr33303_place_14);

return cr33303_state;
}catch (e33321){var cr33303_exception = e33321;
(cr33303_state[(0)] = cr33303_block_12);

(cr33303_state[(3)] = null);

(cr33303_state[(4)] = null);

(cr33303_state[(2)] = true);

(cr33303_state[(1)] = cr33303_exception);

return cr33303_state;
}});
var cr33303_block_5 = (function hyperfiddle$electric$cr33303_block_5(cr33303_state){
try{var cr33303_place_13 = new cljs.core.Keyword(null,"else","else",-1508377146);
var cr33303_place_14 = null;
if(cljs.core.truth_(cr33303_place_13)){
(cr33303_state[(0)] = cr33303_block_7);

(cr33303_state[(3)] = null);

return cr33303_state;
} else {
(cr33303_state[(0)] = cr33303_block_6);

(cr33303_state[(4)] = cr33303_place_14);

return cr33303_state;
}
}catch (e33322){var cr33303_exception = e33322;
(cr33303_state[(0)] = cr33303_block_12);

(cr33303_state[(3)] = null);

(cr33303_state[(2)] = true);

(cr33303_state[(1)] = cr33303_exception);

return cr33303_state;
}});
var cr33303_block_3 = (function hyperfiddle$electric$cr33303_block_3(cr33303_state){
try{var cr33303_place_8 = missionary.core.unpark();
(cr33303_state[(0)] = cr33303_block_12);

(cr33303_state[(1)] = cr33303_place_8);

return cr33303_state;
}catch (e33323){var cr33303_exception = e33323;
(cr33303_state[(0)] = cr33303_block_4);

(cr33303_state[(1)] = cr33303_exception);

return cr33303_state;
}});
var cr33303_block_10 = (function hyperfiddle$electric$cr33303_block_10(cr33303_state){
try{var cr33303_place_21 = missionary.core.unpark();
(cr33303_state[(0)] = cr33303_block_11);

(cr33303_state[(3)] = cr33303_place_21);

return cr33303_state;
}catch (e33324){var cr33303_exception = e33324;
(cr33303_state[(0)] = cr33303_block_12);

(cr33303_state[(3)] = null);

(cr33303_state[(2)] = true);

(cr33303_state[(1)] = cr33303_exception);

return cr33303_state;
}});
var cr33303_block_11 = (function hyperfiddle$electric$cr33303_block_11(cr33303_state){
try{var cr33303_place_12 = (cr33303_state[(3)]);
(cr33303_state[(0)] = cr33303_block_12);

(cr33303_state[(3)] = null);

(cr33303_state[(1)] = cr33303_place_12);

return cr33303_state;
}catch (e33325){var cr33303_exception = e33325;
(cr33303_state[(0)] = cr33303_block_12);

(cr33303_state[(3)] = null);

(cr33303_state[(2)] = true);

(cr33303_state[(1)] = cr33303_exception);

return cr33303_state;
}});
var cr33303_block_12 = (function hyperfiddle$electric$cr33303_block_12(cr33303_state){
try{var cr33303_place_2 = (cr33303_state[(1)]);
var cr33303_place_3 = (cr33303_state[(2)]);
var cr33303_place_22 = (cljs.core.truth_(cr33303_place_3)?(function(){throw cr33303_place_2})():cr33303_place_2);
(cr33303_state[(0)] = null);

(cr33303_state[(1)] = null);

(cr33303_state[(2)] = null);

return cr33303_place_22;
}catch (e33326){var cr33303_exception = e33326;
(cr33303_state[(0)] = null);

(cr33303_state[(1)] = null);

(cr33303_state[(2)] = null);

throw cr33303_exception;
}});
var cr33303_block_1 = (function hyperfiddle$electric$cr33303_block_1(cr33303_state){
try{var cr33303_place_1 = missionary.core.unpark();
var cr33303_place_2 = null;
var cr33303_place_3 = false;
(cr33303_state[(0)] = cr33303_block_2);

(cr33303_state[(3)] = cr33303_place_1);

(cr33303_state[(1)] = cr33303_place_2);

(cr33303_state[(2)] = cr33303_place_3);

return cr33303_state;
}catch (e33327){var cr33303_exception = e33327;
(cr33303_state[(0)] = null);

throw cr33303_exception;
}});
var cr33303_block_7 = (function hyperfiddle$electric$cr33303_block_7(cr33303_state){
try{var cr33303_place_2 = (cr33303_state[(1)]);
var cr33303_place_16 = cr33303_place_2;
var cr33303_place_17 = (function(){throw cr33303_place_16})();
(cr33303_state[(0)] = null);

(cr33303_state[(1)] = null);

(cr33303_state[(2)] = null);

return null;
}catch (e33328){var cr33303_exception = e33328;
(cr33303_state[(0)] = cr33303_block_12);

(cr33303_state[(2)] = true);

(cr33303_state[(1)] = cr33303_exception);

return cr33303_state;
}});
var cr33303_block_0 = (function hyperfiddle$electric$cr33303_block_0(cr33303_state){
try{var cr33303_place_0 = flow;
(cr33303_state[(0)] = cr33303_block_1);

return missionary.core.switch$(cr33303_place_0);
}catch (e33329){var cr33303_exception = e33329;
(cr33303_state[(0)] = null);

throw cr33303_exception;
}});
var cr33303_block_2 = (function hyperfiddle$electric$cr33303_block_2(cr33303_state){
try{var cr33303_place_1 = (cr33303_state[(3)]);
var cr33303_place_4 = missionary.core.sleep;
var cr33303_place_5 = delay;
var cr33303_place_6 = cr33303_place_1;
var cr33303_place_7 = (function (){var G__33332 = cr33303_place_5;
var G__33333 = cr33303_place_6;
var fexpr__33331 = cr33303_place_4;
return (fexpr__33331.cljs$core$IFn$_invoke$arity$2 ? fexpr__33331.cljs$core$IFn$_invoke$arity$2(G__33332,G__33333) : fexpr__33331.call(null,G__33332,G__33333));
})();
(cr33303_state[(0)] = cr33303_block_3);

(cr33303_state[(3)] = null);

return missionary.core.park(cr33303_place_7);
}catch (e33330){var cr33303_exception = e33330;
(cr33303_state[(0)] = cr33303_block_4);

(cr33303_state[(3)] = null);

(cr33303_state[(1)] = cr33303_exception);

return cr33303_state;
}});
var cr33303_block_6 = (function hyperfiddle$electric$cr33303_block_6(cr33303_state){
try{var cr33303_place_15 = null;
(cr33303_state[(0)] = cr33303_block_8);

(cr33303_state[(4)] = cr33303_place_15);

return cr33303_state;
}catch (e33334){var cr33303_exception = e33334;
(cr33303_state[(0)] = cr33303_block_12);

(cr33303_state[(3)] = null);

(cr33303_state[(4)] = null);

(cr33303_state[(2)] = true);

(cr33303_state[(1)] = cr33303_exception);

return cr33303_state;
}});
var cr33303_block_9 = (function hyperfiddle$electric$cr33303_block_9(cr33303_state){
try{var cr33303_place_2 = (cr33303_state[(1)]);
var cr33303_place_18 = cr33303_place_2;
var cr33303_place_19 = (1);
var cr33303_place_20 = missionary.core.none;
(cr33303_state[(0)] = cr33303_block_10);

return missionary.core.fork(cr33303_place_19,cr33303_place_20);
}catch (e33335){var cr33303_exception = e33335;
(cr33303_state[(0)] = cr33303_block_12);

(cr33303_state[(3)] = null);

(cr33303_state[(2)] = true);

(cr33303_state[(1)] = cr33303_exception);

return cr33303_state;
}});
var cr33303_block_4 = (function hyperfiddle$electric$cr33303_block_4(cr33303_state){
try{var cr33303_place_2 = (cr33303_state[(1)]);
var cr33303_place_9 = cr33303_place_2;
var cr33303_place_10 = missionary.Cancelled;
var cr33303_place_11 = (cr33303_place_9 instanceof cr33303_place_10);
var cr33303_place_12 = null;
if(cr33303_place_11){
(cr33303_state[(0)] = cr33303_block_9);

(cr33303_state[(3)] = cr33303_place_12);

return cr33303_state;
} else {
(cr33303_state[(0)] = cr33303_block_5);

(cr33303_state[(3)] = cr33303_place_12);

return cr33303_state;
}
}catch (e33336){var cr33303_exception = e33336;
(cr33303_state[(0)] = cr33303_block_12);

(cr33303_state[(2)] = true);

(cr33303_state[(1)] = cr33303_exception);

return cr33303_state;
}});
return cloroutine.impl.coroutine((function (){var G__33337 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((5));
(G__33337[(0)] = cr33303_block_0);

return G__33337;
})());
})(),missionary.core.ap_run));
}));

(hyperfiddle.electric.debounce_discreet.cljs$lang$maxFixedArity = 3);

hyperfiddle.electric.throttle = (function hyperfiddle$electric$throttle(dur,_GT_in){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr33338_block_7 = (function hyperfiddle$electric$throttle_$_cr33338_block_7(cr33338_state){
try{var cr33338_place_12 = (cr33338_state[(1)]);
var cr33338_place_23 = "No matching clause: ";
var cr33338_place_24 = cr33338_place_12;
var cr33338_place_25 = [cr33338_place_23,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr33338_place_24)].join('');
var cr33338_place_26 = (new Error(cr33338_place_25));
var cr33338_place_27 = (function(){throw cr33338_place_26})();
(cr33338_state[(0)] = null);

(cr33338_state[(1)] = null);

return null;
}catch (e33359){var cr33338_exception = e33359;
(cr33338_state[(0)] = null);

(cr33338_state[(1)] = null);

throw cr33338_exception;
}});
var cr33338_block_4 = (function hyperfiddle$electric$throttle_$_cr33338_block_4(cr33338_state){
try{var cr33338_place_16 = missionary.core.sleep;
var cr33338_place_17 = dur;
var cr33338_place_18 = (function (){var G__33362 = cr33338_place_17;
var fexpr__33361 = cr33338_place_16;
return (fexpr__33361.cljs$core$IFn$_invoke$arity$1 ? fexpr__33361.cljs$core$IFn$_invoke$arity$1(G__33362) : fexpr__33361.call(null,G__33362));
})();
(cr33338_state[(0)] = cr33338_block_5);

return missionary.core.park(cr33338_place_18);
}catch (e33360){var cr33338_exception = e33360;
(cr33338_state[(0)] = null);

(cr33338_state[(2)] = null);

throw cr33338_exception;
}});
var cr33338_block_5 = (function hyperfiddle$electric$throttle_$_cr33338_block_5(cr33338_state){
try{var cr33338_place_19 = missionary.core.unpark();
var cr33338_place_20 = (1);
var cr33338_place_21 = missionary.core.none;
(cr33338_state[(0)] = cr33338_block_6);

return missionary.core.fork(cr33338_place_20,cr33338_place_21);
}catch (e33363){var cr33338_exception = e33363;
(cr33338_state[(0)] = null);

(cr33338_state[(2)] = null);

throw cr33338_exception;
}});
var cr33338_block_3 = (function hyperfiddle$electric$throttle_$_cr33338_block_3(cr33338_state){
try{var cr33338_place_5 = (cr33338_state[(1)]);
var cr33338_place_15 = cr33338_place_5;
(cr33338_state[(0)] = cr33338_block_8);

(cr33338_state[(1)] = null);

(cr33338_state[(2)] = cr33338_place_15);

return cr33338_state;
}catch (e33364){var cr33338_exception = e33364;
(cr33338_state[(0)] = null);

(cr33338_state[(1)] = null);

(cr33338_state[(2)] = null);

throw cr33338_exception;
}});
var cr33338_block_0 = (function hyperfiddle$electric$throttle_$_cr33338_block_0(cr33338_state){
try{var cr33338_place_0 = (1);
var cr33338_place_1 = missionary.core.relieve;
var cr33338_place_2 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr33338_place_3 = _GT_in;
var cr33338_place_4 = (function (){var G__33367 = cr33338_place_2;
var G__33368 = cr33338_place_3;
var fexpr__33366 = cr33338_place_1;
return (fexpr__33366.cljs$core$IFn$_invoke$arity$2 ? fexpr__33366.cljs$core$IFn$_invoke$arity$2(G__33367,G__33368) : fexpr__33366.call(null,G__33367,G__33368));
})();
(cr33338_state[(0)] = cr33338_block_1);

return missionary.core.fork(cr33338_place_0,cr33338_place_4);
}catch (e33365){var cr33338_exception = e33365;
(cr33338_state[(0)] = null);

throw cr33338_exception;
}});
var cr33338_block_8 = (function hyperfiddle$electric$throttle_$_cr33338_block_8(cr33338_state){
try{var cr33338_place_14 = (cr33338_state[(2)]);
(cr33338_state[(0)] = null);

(cr33338_state[(2)] = null);

return cr33338_place_14;
}catch (e33369){var cr33338_exception = e33369;
(cr33338_state[(0)] = null);

(cr33338_state[(2)] = null);

throw cr33338_exception;
}});
var cr33338_block_1 = (function hyperfiddle$electric$throttle_$_cr33338_block_1(cr33338_state){
try{var cr33338_place_5 = missionary.core.unpark();
var cr33338_place_6 = (1);
var cr33338_place_7 = missionary.core.seed;
var cr33338_place_8 = cljs.core.range;
var cr33338_place_9 = (2);
var cr33338_place_10 = (function (){var G__33372 = cr33338_place_9;
var fexpr__33371 = cr33338_place_8;
return (fexpr__33371.cljs$core$IFn$_invoke$arity$1 ? fexpr__33371.cljs$core$IFn$_invoke$arity$1(G__33372) : fexpr__33371.call(null,G__33372));
})();
var cr33338_place_11 = (function (){var G__33374 = cr33338_place_10;
var fexpr__33373 = cr33338_place_7;
return (fexpr__33373.cljs$core$IFn$_invoke$arity$1 ? fexpr__33373.cljs$core$IFn$_invoke$arity$1(G__33374) : fexpr__33373.call(null,G__33374));
})();
(cr33338_state[(0)] = cr33338_block_2);

(cr33338_state[(1)] = cr33338_place_5);

return missionary.core.fork(cr33338_place_6,cr33338_place_11);
}catch (e33370){var cr33338_exception = e33370;
(cr33338_state[(0)] = null);

throw cr33338_exception;
}});
var cr33338_block_6 = (function hyperfiddle$electric$throttle_$_cr33338_block_6(cr33338_state){
try{var cr33338_place_22 = missionary.core.unpark();
(cr33338_state[(0)] = cr33338_block_8);

(cr33338_state[(2)] = cr33338_place_22);

return cr33338_state;
}catch (e33375){var cr33338_exception = e33375;
(cr33338_state[(0)] = null);

(cr33338_state[(2)] = null);

throw cr33338_exception;
}});
var cr33338_block_2 = (function hyperfiddle$electric$throttle_$_cr33338_block_2(cr33338_state){
try{var cr33338_place_12 = missionary.core.unpark();
var cr33338_place_13 = cr33338_place_12;
var cr33338_place_14 = null;
var G__33377 = cr33338_place_13;
switch (G__33377) {
case (0):
(cr33338_state[(0)] = cr33338_block_3);

(cr33338_state[(2)] = cr33338_place_14);

return cr33338_state;

break;
case (1):
(cr33338_state[(0)] = cr33338_block_4);

(cr33338_state[(1)] = null);

(cr33338_state[(2)] = cr33338_place_14);

return cr33338_state;

break;
default:
(cr33338_state[(0)] = cr33338_block_7);

(cr33338_state[(1)] = null);

(cr33338_state[(1)] = cr33338_place_12);

return cr33338_state;

}
}catch (e33376){var cr33338_exception = e33376;
(cr33338_state[(0)] = null);

(cr33338_state[(1)] = null);

throw cr33338_exception;
}});
return cloroutine.impl.coroutine((function (){var G__33378 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((3));
(G__33378[(0)] = cr33338_block_0);

return G__33378;
})());
})(),missionary.core.ap_run);
});
/**
 * Bound to the HTTP request of the page in which the current Electric program is running.
 */
hyperfiddle.electric._STAR_http_request_STAR_ = null;

//# sourceMappingURL=hyperfiddle.electric.js.map
