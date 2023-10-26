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
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr32937_block_0 = (function hyperfiddle$electric$pair_$_cr32937_block_0(cr32937_state){
try{var cr32937_place_0 = missionary.core.dfv;
var cr32937_place_1 = (function (){var fexpr__33001 = cr32937_place_0;
return (fexpr__33001.cljs$core$IFn$_invoke$arity$0 ? fexpr__33001.cljs$core$IFn$_invoke$arity$0() : fexpr__33001.call(null));
})();
var cr32937_place_2 = missionary.core.dfv;
var cr32937_place_3 = (function (){var fexpr__33002 = cr32937_place_2;
return (fexpr__33002.cljs$core$IFn$_invoke$arity$0 ? fexpr__33002.cljs$core$IFn$_invoke$arity$0() : fexpr__33002.call(null));
})();
var cr32937_place_4 = missionary.core.join;
var cr32937_place_5 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr32937_place_6 = (function (x){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr32940_block_0 = (function (cr32940_state){
try{var cr32940_place_0 = cr32937_place_1;
(cr32940_state[(0)] = cr32940_block_1);

return missionary.core.park(cr32940_place_0);
}catch (e33007){var e32946 = e33007;
var cr32940_exception = e32946;
(cr32940_state[(0)] = null);

throw cr32940_exception;
}});
var cr32940_block_1 = (function (cr32940_state){
try{var cr32940_place_1 = missionary.core.unpark();
var cr32940_place_2 = cr32940_place_1;
var cr32940_place_3 = x;
var cr32940_place_4 = (function (){var G__32949 = cr32940_place_3;
var fexpr__32948 = cr32940_place_2;
var G__33010 = G__32949;
var fexpr__33009 = fexpr__32948;
return (fexpr__33009.cljs$core$IFn$_invoke$arity$1 ? fexpr__33009.cljs$core$IFn$_invoke$arity$1(G__33010) : fexpr__33009.call(null,G__33010));
})();
(cr32940_state[(0)] = null);

return cr32940_place_4;
}catch (e33008){var e32947 = e33008;
var cr32940_exception = e32947;
(cr32940_state[(0)] = null);

throw cr32940_exception;
}});
return cloroutine.impl.coroutine((function (){var G__32950 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__32950[(0)] = cr32940_block_0);

return G__32950;
})());
})(),missionary.core.sp_run);
});
var cr32937_place_7 = (function (_BANG_){
var G__33012_33142 = _BANG_;
var fexpr__33011_33143 = cr32937_place_3;
(fexpr__33011_33143.cljs$core$IFn$_invoke$arity$1 ? fexpr__33011_33143.cljs$core$IFn$_invoke$arity$1(G__33012_33142) : fexpr__33011_33143.call(null,G__33012_33142));

return (function (){
return cljs.core.List.EMPTY;
});
});
var cr32937_place_8 = s;
var cr32937_place_9 = cr32937_place_6;
var cr32937_place_10 = cr32937_place_7;
var cr32937_place_11 = (function (){var G__33014 = cr32937_place_9;
var G__33015 = cr32937_place_10;
var fexpr__33013 = cr32937_place_8;
return (fexpr__33013.cljs$core$IFn$_invoke$arity$2 ? fexpr__33013.cljs$core$IFn$_invoke$arity$2(G__33014,G__33015) : fexpr__33013.call(null,G__33014,G__33015));
})();
var cr32937_place_12 = (function (x){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr32954_block_0 = (function (cr32954_state){
try{var cr32954_place_0 = cr32937_place_3;
(cr32954_state[(0)] = cr32954_block_1);

return missionary.core.park(cr32954_place_0);
}catch (e33020){var e32960 = e33020;
var cr32954_exception = e32960;
(cr32954_state[(0)] = null);

throw cr32954_exception;
}});
var cr32954_block_1 = (function (cr32954_state){
try{var cr32954_place_1 = missionary.core.unpark();
var cr32954_place_2 = cr32954_place_1;
var cr32954_place_3 = x;
var cr32954_place_4 = (function (){var G__32963 = cr32954_place_3;
var fexpr__32962 = cr32954_place_2;
var G__33023 = G__32963;
var fexpr__33022 = fexpr__32962;
return (fexpr__33022.cljs$core$IFn$_invoke$arity$1 ? fexpr__33022.cljs$core$IFn$_invoke$arity$1(G__33023) : fexpr__33022.call(null,G__33023));
})();
(cr32954_state[(0)] = null);

return cr32954_place_4;
}catch (e33021){var e32961 = e33021;
var cr32954_exception = e32961;
(cr32954_state[(0)] = null);

throw cr32954_exception;
}});
return cloroutine.impl.coroutine((function (){var G__32964 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__32964[(0)] = cr32954_block_0);

return G__32964;
})());
})(),missionary.core.sp_run);
});
var cr32937_place_13 = (function (_BANG_){
var G__33025_33144 = _BANG_;
var fexpr__33024_33145 = cr32937_place_1;
(fexpr__33024_33145.cljs$core$IFn$_invoke$arity$1 ? fexpr__33024_33145.cljs$core$IFn$_invoke$arity$1(G__33025_33144) : fexpr__33024_33145.call(null,G__33025_33144));

return (function (){
return cljs.core.List.EMPTY;
});
});
var cr32937_place_14 = (function (p1__32936_SHARP_){
throw p1__32936_SHARP_;
});
var cr32937_place_15 = c;
var cr32937_place_16 = cr32937_place_12;
var cr32937_place_17 = cr32937_place_13;
var cr32937_place_18 = cr32937_place_14;
var cr32937_place_19 = (function (){var G__33027 = cr32937_place_16;
var G__33028 = cr32937_place_17;
var G__33029 = cr32937_place_18;
var fexpr__33026 = cr32937_place_15;
return (fexpr__33026.cljs$core$IFn$_invoke$arity$3 ? fexpr__33026.cljs$core$IFn$_invoke$arity$3(G__33027,G__33028,G__33029) : fexpr__33026.call(null,G__33027,G__33028,G__33029));
})();
var cr32937_place_20 = (function (){var G__33031 = cr32937_place_5;
var G__33032 = cr32937_place_11;
var G__33033 = cr32937_place_19;
var fexpr__33030 = cr32937_place_4;
return (fexpr__33030.cljs$core$IFn$_invoke$arity$3 ? fexpr__33030.cljs$core$IFn$_invoke$arity$3(G__33031,G__33032,G__33033) : fexpr__33030.call(null,G__33031,G__33032,G__33033));
})();
(cr32937_state[(0)] = cr32937_block_1);

return missionary.core.park(cr32937_place_20);
}catch (e33000){var cr32937_exception = e33000;
(cr32937_state[(0)] = null);

throw cr32937_exception;
}});
var cr32937_block_1 = (function hyperfiddle$electric$pair_$_cr32937_block_1(cr32937_state){
try{var cr32937_place_21 = missionary.core.unpark();
(cr32937_state[(0)] = null);

return cr32937_place_21;
}catch (e33034){var cr32937_exception = e33034;
(cr32937_state[(0)] = null);

throw cr32937_exception;
}});
return cloroutine.impl.coroutine((function (){var G__33035 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__33035[(0)] = cr32937_block_0);

return G__33035;
})());
})(),missionary.core.sp_run);
});
hyperfiddle.electric.failure_QMARK_ = (function hyperfiddle$electric$failure_QMARK_(x){
return (x instanceof hyperfiddle.electric.Failure);
});
hyperfiddle.electric.task__GT_cp = (function hyperfiddle$electric$task__GT_cp(var_args){
var G__33038 = arguments.length;
switch (G__33038) {
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
return missionary.core.reductions.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,pending,cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr33039_block_0 = (function hyperfiddle$electric$cr33039_block_0(cr33039_state){
try{var cr33039_place_0 = _BANG_x;
(cr33039_state[(0)] = cr33039_block_1);

return missionary.core.park(cr33039_place_0);
}catch (e33042){var cr33039_exception = e33042;
(cr33039_state[(0)] = null);

throw cr33039_exception;
}});
var cr33039_block_1 = (function hyperfiddle$electric$cr33039_block_1(cr33039_state){
try{var cr33039_place_1 = missionary.core.unpark();
(cr33039_state[(0)] = null);

return cr33039_place_1;
}catch (e33043){var cr33039_exception = e33043;
(cr33039_state[(0)] = null);

throw cr33039_exception;
}});
return cloroutine.impl.coroutine((function (){var G__33044 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__33044[(0)] = cr33039_block_0);

return G__33044;
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
var G__33046 = (arguments.length - (1));
switch (G__33046) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.Clock.prototype.apply = (function (self__,args33045){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args33045)));
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
hyperfiddle.electric._get_system_time_ms = (function hyperfiddle$electric$_get_system_time_ms(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33148 = arguments.length;
var i__5770__auto___33149 = (0);
while(true){
if((i__5770__auto___33149 < len__5769__auto___33148)){
args__5775__auto__.push((arguments[i__5770__auto___33149]));

var G__33150 = (i__5770__auto___33149 + (1));
i__5770__auto___33149 = G__33150;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return hyperfiddle.electric._get_system_time_ms.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(hyperfiddle.electric._get_system_time_ms.cljs$core$IFn$_invoke$arity$variadic = (function (p__33048){
var vec__33049 = p__33048;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33049,(0),null);
return Date.now();
}));

(hyperfiddle.electric._get_system_time_ms.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hyperfiddle.electric._get_system_time_ms.cljs$lang$applyTo = (function (seq33047){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33047));
}));

hyperfiddle.electric._listen = (function hyperfiddle$electric$_listen(node,typ,f,opts){
node.addEventListener(typ,f,opts);

return (function (){
return node.removeEventListener(typ,f);
});
});
hyperfiddle.electric.event_STAR_ = (function hyperfiddle$electric$event_STAR_(node,typ,f_BANG_,opts){
return missionary.core.relieve(cljs.core.PersistentArrayMap.EMPTY,missionary.core.observe((function (_BANG_){
(_BANG_.cljs$core$IFn$_invoke$arity$1 ? _BANG_.cljs$core$IFn$_invoke$arity$1(null) : _BANG_.call(null,null));

return hyperfiddle.electric._listen(node,typ,(function (p1__33052_SHARP_){
var G__33053 = (f_BANG_.cljs$core$IFn$_invoke$arity$1 ? f_BANG_.cljs$core$IFn$_invoke$arity$1(p1__33052_SHARP_) : f_BANG_.call(null,p1__33052_SHARP_));
return (_BANG_.cljs$core$IFn$_invoke$arity$1 ? _BANG_.cljs$core$IFn$_invoke$arity$1(G__33053) : _BANG_.call(null,G__33053));
}),cljs.core.clj__GT_js(opts));
})));
});
hyperfiddle.electric._LT_dom_visibility_state = missionary.core.latest.cljs$core$IFn$_invoke$arity$variadic((function (_){
return document.visibilityState;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hyperfiddle.electric.event_STAR_(document,"visibilitychange",cljs.core.identity,cljs.core.PersistentArrayMap.EMPTY)], 0));
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
var G__33057 = arguments.length;
switch (G__33057) {
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
return missionary.core.reductions.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,init,cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr33058_block_11 = (function hyperfiddle$electric$cr33058_block_11(cr33058_state){
try{var cr33058_place_12 = (cr33058_state[(1)]);
(cr33058_state[(0)] = cr33058_block_12);

(cr33058_state[(1)] = null);

(cr33058_state[(3)] = cr33058_place_12);

return cr33058_state;
}catch (e33076){var cr33058_exception = e33076;
(cr33058_state[(0)] = cr33058_block_12);

(cr33058_state[(1)] = null);

(cr33058_state[(2)] = true);

(cr33058_state[(3)] = cr33058_exception);

return cr33058_state;
}});
var cr33058_block_1 = (function hyperfiddle$electric$cr33058_block_1(cr33058_state){
try{var cr33058_place_1 = missionary.core.unpark();
var cr33058_place_2 = null;
var cr33058_place_3 = false;
(cr33058_state[(0)] = cr33058_block_2);

(cr33058_state[(1)] = cr33058_place_1);

(cr33058_state[(3)] = cr33058_place_2);

(cr33058_state[(2)] = cr33058_place_3);

return cr33058_state;
}catch (e33077){var cr33058_exception = e33077;
(cr33058_state[(0)] = null);

throw cr33058_exception;
}});
var cr33058_block_3 = (function hyperfiddle$electric$cr33058_block_3(cr33058_state){
try{var cr33058_place_8 = missionary.core.unpark();
(cr33058_state[(0)] = cr33058_block_12);

(cr33058_state[(3)] = cr33058_place_8);

return cr33058_state;
}catch (e33078){var cr33058_exception = e33078;
(cr33058_state[(0)] = cr33058_block_4);

(cr33058_state[(3)] = cr33058_exception);

return cr33058_state;
}});
var cr33058_block_5 = (function hyperfiddle$electric$cr33058_block_5(cr33058_state){
try{var cr33058_place_13 = new cljs.core.Keyword(null,"else","else",-1508377146);
var cr33058_place_14 = null;
if(cljs.core.truth_(cr33058_place_13)){
(cr33058_state[(0)] = cr33058_block_7);

(cr33058_state[(1)] = null);

return cr33058_state;
} else {
(cr33058_state[(0)] = cr33058_block_6);

(cr33058_state[(4)] = cr33058_place_14);

return cr33058_state;
}
}catch (e33079){var cr33058_exception = e33079;
(cr33058_state[(0)] = cr33058_block_12);

(cr33058_state[(1)] = null);

(cr33058_state[(2)] = true);

(cr33058_state[(3)] = cr33058_exception);

return cr33058_state;
}});
var cr33058_block_8 = (function hyperfiddle$electric$cr33058_block_8(cr33058_state){
try{var cr33058_place_14 = (cr33058_state[(4)]);
(cr33058_state[(0)] = cr33058_block_11);

(cr33058_state[(4)] = null);

(cr33058_state[(1)] = cr33058_place_14);

return cr33058_state;
}catch (e33080){var cr33058_exception = e33080;
(cr33058_state[(0)] = cr33058_block_12);

(cr33058_state[(4)] = null);

(cr33058_state[(1)] = null);

(cr33058_state[(2)] = true);

(cr33058_state[(3)] = cr33058_exception);

return cr33058_state;
}});
var cr33058_block_4 = (function hyperfiddle$electric$cr33058_block_4(cr33058_state){
try{var cr33058_place_2 = (cr33058_state[(3)]);
var cr33058_place_9 = cr33058_place_2;
var cr33058_place_10 = missionary.Cancelled;
var cr33058_place_11 = (cr33058_place_9 instanceof cr33058_place_10);
var cr33058_place_12 = null;
if(cr33058_place_11){
(cr33058_state[(0)] = cr33058_block_9);

(cr33058_state[(1)] = cr33058_place_12);

return cr33058_state;
} else {
(cr33058_state[(0)] = cr33058_block_5);

(cr33058_state[(1)] = cr33058_place_12);

return cr33058_state;
}
}catch (e33081){var cr33058_exception = e33081;
(cr33058_state[(0)] = cr33058_block_12);

(cr33058_state[(2)] = true);

(cr33058_state[(3)] = cr33058_exception);

return cr33058_state;
}});
var cr33058_block_12 = (function hyperfiddle$electric$cr33058_block_12(cr33058_state){
try{var cr33058_place_3 = (cr33058_state[(2)]);
var cr33058_place_2 = (cr33058_state[(3)]);
var cr33058_place_22 = (cljs.core.truth_(cr33058_place_3)?(function(){throw cr33058_place_2})():cr33058_place_2);
(cr33058_state[(0)] = null);

(cr33058_state[(2)] = null);

(cr33058_state[(3)] = null);

return cr33058_place_22;
}catch (e33082){var cr33058_exception = e33082;
(cr33058_state[(0)] = null);

(cr33058_state[(2)] = null);

(cr33058_state[(3)] = null);

throw cr33058_exception;
}});
var cr33058_block_7 = (function hyperfiddle$electric$cr33058_block_7(cr33058_state){
try{var cr33058_place_2 = (cr33058_state[(3)]);
var cr33058_place_16 = cr33058_place_2;
var cr33058_place_17 = (function(){throw cr33058_place_16})();
(cr33058_state[(0)] = null);

(cr33058_state[(2)] = null);

(cr33058_state[(3)] = null);

return null;
}catch (e33083){var cr33058_exception = e33083;
(cr33058_state[(0)] = cr33058_block_12);

(cr33058_state[(2)] = true);

(cr33058_state[(3)] = cr33058_exception);

return cr33058_state;
}});
var cr33058_block_10 = (function hyperfiddle$electric$cr33058_block_10(cr33058_state){
try{var cr33058_place_21 = missionary.core.unpark();
(cr33058_state[(0)] = cr33058_block_11);

(cr33058_state[(1)] = cr33058_place_21);

return cr33058_state;
}catch (e33084){var cr33058_exception = e33084;
(cr33058_state[(0)] = cr33058_block_12);

(cr33058_state[(1)] = null);

(cr33058_state[(2)] = true);

(cr33058_state[(3)] = cr33058_exception);

return cr33058_state;
}});
var cr33058_block_0 = (function hyperfiddle$electric$cr33058_block_0(cr33058_state){
try{var cr33058_place_0 = flow;
(cr33058_state[(0)] = cr33058_block_1);

return missionary.core.switch$(cr33058_place_0);
}catch (e33085){var cr33058_exception = e33085;
(cr33058_state[(0)] = null);

throw cr33058_exception;
}});
var cr33058_block_6 = (function hyperfiddle$electric$cr33058_block_6(cr33058_state){
try{var cr33058_place_15 = null;
(cr33058_state[(0)] = cr33058_block_8);

(cr33058_state[(4)] = cr33058_place_15);

return cr33058_state;
}catch (e33086){var cr33058_exception = e33086;
(cr33058_state[(0)] = cr33058_block_12);

(cr33058_state[(4)] = null);

(cr33058_state[(1)] = null);

(cr33058_state[(2)] = true);

(cr33058_state[(3)] = cr33058_exception);

return cr33058_state;
}});
var cr33058_block_2 = (function hyperfiddle$electric$cr33058_block_2(cr33058_state){
try{var cr33058_place_1 = (cr33058_state[(1)]);
var cr33058_place_4 = missionary.core.sleep;
var cr33058_place_5 = delay;
var cr33058_place_6 = cr33058_place_1;
var cr33058_place_7 = (function (){var G__33089 = cr33058_place_5;
var G__33090 = cr33058_place_6;
var fexpr__33088 = cr33058_place_4;
return (fexpr__33088.cljs$core$IFn$_invoke$arity$2 ? fexpr__33088.cljs$core$IFn$_invoke$arity$2(G__33089,G__33090) : fexpr__33088.call(null,G__33089,G__33090));
})();
(cr33058_state[(0)] = cr33058_block_3);

(cr33058_state[(1)] = null);

return missionary.core.park(cr33058_place_7);
}catch (e33087){var cr33058_exception = e33087;
(cr33058_state[(0)] = cr33058_block_4);

(cr33058_state[(1)] = null);

(cr33058_state[(3)] = cr33058_exception);

return cr33058_state;
}});
var cr33058_block_9 = (function hyperfiddle$electric$cr33058_block_9(cr33058_state){
try{var cr33058_place_2 = (cr33058_state[(3)]);
var cr33058_place_18 = cr33058_place_2;
var cr33058_place_19 = (1);
var cr33058_place_20 = missionary.core.none;
(cr33058_state[(0)] = cr33058_block_10);

return missionary.core.fork(cr33058_place_19,cr33058_place_20);
}catch (e33091){var cr33058_exception = e33091;
(cr33058_state[(0)] = cr33058_block_12);

(cr33058_state[(1)] = null);

(cr33058_state[(2)] = true);

(cr33058_state[(3)] = cr33058_exception);

return cr33058_state;
}});
return cloroutine.impl.coroutine((function (){var G__33092 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((5));
(G__33092[(0)] = cr33058_block_0);

return G__33092;
})());
})(),missionary.core.ap_run));
}));

(hyperfiddle.electric.debounce_discreet.cljs$lang$maxFixedArity = 3);

hyperfiddle.electric.throttle = (function hyperfiddle$electric$throttle(dur,_GT_in){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr33093_block_4 = (function hyperfiddle$electric$throttle_$_cr33093_block_4(cr33093_state){
try{var cr33093_place_16 = missionary.core.sleep;
var cr33093_place_17 = dur;
var cr33093_place_18 = (function (){var G__33116 = cr33093_place_17;
var fexpr__33115 = cr33093_place_16;
return (fexpr__33115.cljs$core$IFn$_invoke$arity$1 ? fexpr__33115.cljs$core$IFn$_invoke$arity$1(G__33116) : fexpr__33115.call(null,G__33116));
})();
(cr33093_state[(0)] = cr33093_block_5);

return missionary.core.park(cr33093_place_18);
}catch (e33114){var cr33093_exception = e33114;
(cr33093_state[(0)] = null);

(cr33093_state[(2)] = null);

throw cr33093_exception;
}});
var cr33093_block_7 = (function hyperfiddle$electric$throttle_$_cr33093_block_7(cr33093_state){
try{var cr33093_place_12 = (cr33093_state[(1)]);
var cr33093_place_23 = "No matching clause: ";
var cr33093_place_24 = cr33093_place_12;
var cr33093_place_25 = [cr33093_place_23,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr33093_place_24)].join('');
var cr33093_place_26 = (new Error(cr33093_place_25));
var cr33093_place_27 = (function(){throw cr33093_place_26})();
(cr33093_state[(0)] = null);

(cr33093_state[(1)] = null);

return null;
}catch (e33117){var cr33093_exception = e33117;
(cr33093_state[(0)] = null);

(cr33093_state[(1)] = null);

throw cr33093_exception;
}});
var cr33093_block_8 = (function hyperfiddle$electric$throttle_$_cr33093_block_8(cr33093_state){
try{var cr33093_place_14 = (cr33093_state[(2)]);
(cr33093_state[(0)] = null);

(cr33093_state[(2)] = null);

return cr33093_place_14;
}catch (e33118){var cr33093_exception = e33118;
(cr33093_state[(0)] = null);

(cr33093_state[(2)] = null);

throw cr33093_exception;
}});
var cr33093_block_0 = (function hyperfiddle$electric$throttle_$_cr33093_block_0(cr33093_state){
try{var cr33093_place_0 = (1);
var cr33093_place_1 = missionary.core.relieve;
var cr33093_place_2 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr33093_place_3 = _GT_in;
var cr33093_place_4 = (function (){var G__33121 = cr33093_place_2;
var G__33122 = cr33093_place_3;
var fexpr__33120 = cr33093_place_1;
return (fexpr__33120.cljs$core$IFn$_invoke$arity$2 ? fexpr__33120.cljs$core$IFn$_invoke$arity$2(G__33121,G__33122) : fexpr__33120.call(null,G__33121,G__33122));
})();
(cr33093_state[(0)] = cr33093_block_1);

return missionary.core.fork(cr33093_place_0,cr33093_place_4);
}catch (e33119){var cr33093_exception = e33119;
(cr33093_state[(0)] = null);

throw cr33093_exception;
}});
var cr33093_block_6 = (function hyperfiddle$electric$throttle_$_cr33093_block_6(cr33093_state){
try{var cr33093_place_22 = missionary.core.unpark();
(cr33093_state[(0)] = cr33093_block_8);

(cr33093_state[(2)] = cr33093_place_22);

return cr33093_state;
}catch (e33123){var cr33093_exception = e33123;
(cr33093_state[(0)] = null);

(cr33093_state[(2)] = null);

throw cr33093_exception;
}});
var cr33093_block_1 = (function hyperfiddle$electric$throttle_$_cr33093_block_1(cr33093_state){
try{var cr33093_place_5 = missionary.core.unpark();
var cr33093_place_6 = (1);
var cr33093_place_7 = missionary.core.seed;
var cr33093_place_8 = cljs.core.range;
var cr33093_place_9 = (2);
var cr33093_place_10 = (function (){var G__33126 = cr33093_place_9;
var fexpr__33125 = cr33093_place_8;
return (fexpr__33125.cljs$core$IFn$_invoke$arity$1 ? fexpr__33125.cljs$core$IFn$_invoke$arity$1(G__33126) : fexpr__33125.call(null,G__33126));
})();
var cr33093_place_11 = (function (){var G__33128 = cr33093_place_10;
var fexpr__33127 = cr33093_place_7;
return (fexpr__33127.cljs$core$IFn$_invoke$arity$1 ? fexpr__33127.cljs$core$IFn$_invoke$arity$1(G__33128) : fexpr__33127.call(null,G__33128));
})();
(cr33093_state[(0)] = cr33093_block_2);

(cr33093_state[(1)] = cr33093_place_5);

return missionary.core.fork(cr33093_place_6,cr33093_place_11);
}catch (e33124){var cr33093_exception = e33124;
(cr33093_state[(0)] = null);

throw cr33093_exception;
}});
var cr33093_block_3 = (function hyperfiddle$electric$throttle_$_cr33093_block_3(cr33093_state){
try{var cr33093_place_5 = (cr33093_state[(1)]);
var cr33093_place_15 = cr33093_place_5;
(cr33093_state[(0)] = cr33093_block_8);

(cr33093_state[(1)] = null);

(cr33093_state[(2)] = cr33093_place_15);

return cr33093_state;
}catch (e33129){var cr33093_exception = e33129;
(cr33093_state[(0)] = null);

(cr33093_state[(1)] = null);

(cr33093_state[(2)] = null);

throw cr33093_exception;
}});
var cr33093_block_2 = (function hyperfiddle$electric$throttle_$_cr33093_block_2(cr33093_state){
try{var cr33093_place_12 = missionary.core.unpark();
var cr33093_place_13 = cr33093_place_12;
var cr33093_place_14 = null;
var G__33131 = cr33093_place_13;
switch (G__33131) {
case (0):
(cr33093_state[(0)] = cr33093_block_3);

(cr33093_state[(2)] = cr33093_place_14);

return cr33093_state;

break;
case (1):
(cr33093_state[(0)] = cr33093_block_4);

(cr33093_state[(1)] = null);

(cr33093_state[(2)] = cr33093_place_14);

return cr33093_state;

break;
default:
(cr33093_state[(0)] = cr33093_block_7);

(cr33093_state[(1)] = null);

(cr33093_state[(1)] = cr33093_place_12);

return cr33093_state;

}
}catch (e33130){var cr33093_exception = e33130;
(cr33093_state[(0)] = null);

(cr33093_state[(1)] = null);

throw cr33093_exception;
}});
var cr33093_block_5 = (function hyperfiddle$electric$throttle_$_cr33093_block_5(cr33093_state){
try{var cr33093_place_19 = missionary.core.unpark();
var cr33093_place_20 = (1);
var cr33093_place_21 = missionary.core.none;
(cr33093_state[(0)] = cr33093_block_6);

return missionary.core.fork(cr33093_place_20,cr33093_place_21);
}catch (e33132){var cr33093_exception = e33132;
(cr33093_state[(0)] = null);

(cr33093_state[(2)] = null);

throw cr33093_exception;
}});
return cloroutine.impl.coroutine((function (){var G__33133 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((3));
(G__33133[(0)] = cr33093_block_0);

return G__33133;
})());
})(),missionary.core.ap_run);
});
/**
 * Bound to the HTTP request of the page in which the current Electric program is running.
 */
hyperfiddle.electric._STAR_http_request_STAR_ = null;

//# sourceMappingURL=hyperfiddle.electric.js.map
