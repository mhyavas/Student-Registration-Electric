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
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr48885_block_0 = (function hyperfiddle$electric$pair_$_cr48885_block_0(cr48885_state){
try{var cr48885_place_0 = missionary.core.dfv;
var cr48885_place_1 = (function (){var fexpr__48952 = cr48885_place_0;
return (fexpr__48952.cljs$core$IFn$_invoke$arity$0 ? fexpr__48952.cljs$core$IFn$_invoke$arity$0() : fexpr__48952.call(null));
})();
var cr48885_place_2 = missionary.core.dfv;
var cr48885_place_3 = (function (){var fexpr__48953 = cr48885_place_2;
return (fexpr__48953.cljs$core$IFn$_invoke$arity$0 ? fexpr__48953.cljs$core$IFn$_invoke$arity$0() : fexpr__48953.call(null));
})();
var cr48885_place_4 = missionary.core.join;
var cr48885_place_5 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr48885_place_6 = (function (x){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr48888_block_0 = (function (cr48888_state){
try{var cr48888_place_0 = cr48885_place_1;
(cr48888_state[(0)] = cr48888_block_1);

return missionary.core.park(cr48888_place_0);
}catch (e48958){var e48895 = e48958;
var cr48888_exception = e48895;
(cr48888_state[(0)] = null);

throw cr48888_exception;
}});
var cr48888_block_1 = (function (cr48888_state){
try{var cr48888_place_1 = missionary.core.unpark();
var cr48888_place_2 = cr48888_place_1;
var cr48888_place_3 = x;
var cr48888_place_4 = (function (){var G__48898 = cr48888_place_3;
var fexpr__48897 = cr48888_place_2;
var G__48961 = G__48898;
var fexpr__48960 = fexpr__48897;
return (fexpr__48960.cljs$core$IFn$_invoke$arity$1 ? fexpr__48960.cljs$core$IFn$_invoke$arity$1(G__48961) : fexpr__48960.call(null,G__48961));
})();
(cr48888_state[(0)] = null);

return cr48888_place_4;
}catch (e48959){var e48896 = e48959;
var cr48888_exception = e48896;
(cr48888_state[(0)] = null);

throw cr48888_exception;
}});
return cloroutine.impl.coroutine((function (){var G__48899 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__48899[(0)] = cr48888_block_0);

return G__48899;
})());
})(),missionary.core.sp_run);
});
var cr48885_place_7 = (function (_BANG_){
var G__48963_49086 = _BANG_;
var fexpr__48962_49087 = cr48885_place_3;
(fexpr__48962_49087.cljs$core$IFn$_invoke$arity$1 ? fexpr__48962_49087.cljs$core$IFn$_invoke$arity$1(G__48963_49086) : fexpr__48962_49087.call(null,G__48963_49086));

return (function (){
return cljs.core.List.EMPTY;
});
});
var cr48885_place_8 = s;
var cr48885_place_9 = cr48885_place_6;
var cr48885_place_10 = cr48885_place_7;
var cr48885_place_11 = (function (){var G__48965 = cr48885_place_9;
var G__48966 = cr48885_place_10;
var fexpr__48964 = cr48885_place_8;
return (fexpr__48964.cljs$core$IFn$_invoke$arity$2 ? fexpr__48964.cljs$core$IFn$_invoke$arity$2(G__48965,G__48966) : fexpr__48964.call(null,G__48965,G__48966));
})();
var cr48885_place_12 = (function (x){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr48903_block_0 = (function (cr48903_state){
try{var cr48903_place_0 = cr48885_place_3;
(cr48903_state[(0)] = cr48903_block_1);

return missionary.core.park(cr48903_place_0);
}catch (e48971){var e48909 = e48971;
var cr48903_exception = e48909;
(cr48903_state[(0)] = null);

throw cr48903_exception;
}});
var cr48903_block_1 = (function (cr48903_state){
try{var cr48903_place_1 = missionary.core.unpark();
var cr48903_place_2 = cr48903_place_1;
var cr48903_place_3 = x;
var cr48903_place_4 = (function (){var G__48912 = cr48903_place_3;
var fexpr__48911 = cr48903_place_2;
var G__48974 = G__48912;
var fexpr__48973 = fexpr__48911;
return (fexpr__48973.cljs$core$IFn$_invoke$arity$1 ? fexpr__48973.cljs$core$IFn$_invoke$arity$1(G__48974) : fexpr__48973.call(null,G__48974));
})();
(cr48903_state[(0)] = null);

return cr48903_place_4;
}catch (e48972){var e48910 = e48972;
var cr48903_exception = e48910;
(cr48903_state[(0)] = null);

throw cr48903_exception;
}});
return cloroutine.impl.coroutine((function (){var G__48913 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__48913[(0)] = cr48903_block_0);

return G__48913;
})());
})(),missionary.core.sp_run);
});
var cr48885_place_13 = (function (_BANG_){
var G__48976_49088 = _BANG_;
var fexpr__48975_49089 = cr48885_place_1;
(fexpr__48975_49089.cljs$core$IFn$_invoke$arity$1 ? fexpr__48975_49089.cljs$core$IFn$_invoke$arity$1(G__48976_49088) : fexpr__48975_49089.call(null,G__48976_49088));

return (function (){
return cljs.core.List.EMPTY;
});
});
var cr48885_place_14 = (function (p1__48884_SHARP_){
throw p1__48884_SHARP_;
});
var cr48885_place_15 = c;
var cr48885_place_16 = cr48885_place_12;
var cr48885_place_17 = cr48885_place_13;
var cr48885_place_18 = cr48885_place_14;
var cr48885_place_19 = (function (){var G__48978 = cr48885_place_16;
var G__48979 = cr48885_place_17;
var G__48980 = cr48885_place_18;
var fexpr__48977 = cr48885_place_15;
return (fexpr__48977.cljs$core$IFn$_invoke$arity$3 ? fexpr__48977.cljs$core$IFn$_invoke$arity$3(G__48978,G__48979,G__48980) : fexpr__48977.call(null,G__48978,G__48979,G__48980));
})();
var cr48885_place_20 = (function (){var G__48982 = cr48885_place_5;
var G__48983 = cr48885_place_11;
var G__48984 = cr48885_place_19;
var fexpr__48981 = cr48885_place_4;
return (fexpr__48981.cljs$core$IFn$_invoke$arity$3 ? fexpr__48981.cljs$core$IFn$_invoke$arity$3(G__48982,G__48983,G__48984) : fexpr__48981.call(null,G__48982,G__48983,G__48984));
})();
(cr48885_state[(0)] = cr48885_block_1);

return missionary.core.park(cr48885_place_20);
}catch (e48951){var cr48885_exception = e48951;
(cr48885_state[(0)] = null);

throw cr48885_exception;
}});
var cr48885_block_1 = (function hyperfiddle$electric$pair_$_cr48885_block_1(cr48885_state){
try{var cr48885_place_21 = missionary.core.unpark();
(cr48885_state[(0)] = null);

return cr48885_place_21;
}catch (e48985){var cr48885_exception = e48985;
(cr48885_state[(0)] = null);

throw cr48885_exception;
}});
return cloroutine.impl.coroutine((function (){var G__48986 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__48986[(0)] = cr48885_block_0);

return G__48986;
})());
})(),missionary.core.sp_run);
});
hyperfiddle.electric.failure_QMARK_ = (function hyperfiddle$electric$failure_QMARK_(x){
return (x instanceof hyperfiddle.electric.Failure);
});
hyperfiddle.electric.task__GT_cp = (function hyperfiddle$electric$task__GT_cp(var_args){
var G__48989 = arguments.length;
switch (G__48989) {
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
return missionary.core.reductions.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,pending,cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr48990_block_0 = (function hyperfiddle$electric$cr48990_block_0(cr48990_state){
try{var cr48990_place_0 = _BANG_x;
(cr48990_state[(0)] = cr48990_block_1);

return missionary.core.park(cr48990_place_0);
}catch (e48993){var cr48990_exception = e48993;
(cr48990_state[(0)] = null);

throw cr48990_exception;
}});
var cr48990_block_1 = (function hyperfiddle$electric$cr48990_block_1(cr48990_state){
try{var cr48990_place_1 = missionary.core.unpark();
(cr48990_state[(0)] = null);

return cr48990_place_1;
}catch (e48994){var cr48990_exception = e48994;
(cr48990_state[(0)] = null);

throw cr48990_exception;
}});
return cloroutine.impl.coroutine((function (){var G__48995 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__48995[(0)] = cr48990_block_0);

return G__48995;
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
(hyperfiddle.electric.Clock.prototype.call = (function (unused__27532__auto__){
var self__ = this;
var self__ = this;
var G__48997 = (arguments.length - (1));
switch (G__48997) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.Clock.prototype.apply = (function (self__,args48996){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args48996)));
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
var G__49001 = arguments.length;
switch (G__49001) {
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
return missionary.core.reductions.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,init,cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr49002_block_7 = (function hyperfiddle$electric$cr49002_block_7(cr49002_state){
try{var cr49002_place_2 = (cr49002_state[(1)]);
var cr49002_place_16 = cr49002_place_2;
var cr49002_place_17 = (function(){throw cr49002_place_16})();
(cr49002_state[(0)] = null);

(cr49002_state[(1)] = null);

(cr49002_state[(3)] = null);

return null;
}catch (e49020){var cr49002_exception = e49020;
(cr49002_state[(0)] = cr49002_block_12);

(cr49002_state[(3)] = true);

(cr49002_state[(1)] = cr49002_exception);

return cr49002_state;
}});
var cr49002_block_5 = (function hyperfiddle$electric$cr49002_block_5(cr49002_state){
try{var cr49002_place_13 = new cljs.core.Keyword(null,"else","else",-1508377146);
var cr49002_place_14 = null;
if(cljs.core.truth_(cr49002_place_13)){
(cr49002_state[(0)] = cr49002_block_7);

(cr49002_state[(2)] = null);

return cr49002_state;
} else {
(cr49002_state[(0)] = cr49002_block_6);

(cr49002_state[(4)] = cr49002_place_14);

return cr49002_state;
}
}catch (e49021){var cr49002_exception = e49021;
(cr49002_state[(0)] = cr49002_block_12);

(cr49002_state[(2)] = null);

(cr49002_state[(3)] = true);

(cr49002_state[(1)] = cr49002_exception);

return cr49002_state;
}});
var cr49002_block_2 = (function hyperfiddle$electric$cr49002_block_2(cr49002_state){
try{var cr49002_place_1 = (cr49002_state[(2)]);
var cr49002_place_4 = missionary.core.sleep;
var cr49002_place_5 = delay;
var cr49002_place_6 = cr49002_place_1;
var cr49002_place_7 = (function (){var G__49024 = cr49002_place_5;
var G__49025 = cr49002_place_6;
var fexpr__49023 = cr49002_place_4;
return (fexpr__49023.cljs$core$IFn$_invoke$arity$2 ? fexpr__49023.cljs$core$IFn$_invoke$arity$2(G__49024,G__49025) : fexpr__49023.call(null,G__49024,G__49025));
})();
(cr49002_state[(0)] = cr49002_block_3);

(cr49002_state[(2)] = null);

return missionary.core.park(cr49002_place_7);
}catch (e49022){var cr49002_exception = e49022;
(cr49002_state[(0)] = cr49002_block_4);

(cr49002_state[(2)] = null);

(cr49002_state[(1)] = cr49002_exception);

return cr49002_state;
}});
var cr49002_block_3 = (function hyperfiddle$electric$cr49002_block_3(cr49002_state){
try{var cr49002_place_8 = missionary.core.unpark();
(cr49002_state[(0)] = cr49002_block_12);

(cr49002_state[(1)] = cr49002_place_8);

return cr49002_state;
}catch (e49026){var cr49002_exception = e49026;
(cr49002_state[(0)] = cr49002_block_4);

(cr49002_state[(1)] = cr49002_exception);

return cr49002_state;
}});
var cr49002_block_9 = (function hyperfiddle$electric$cr49002_block_9(cr49002_state){
try{var cr49002_place_2 = (cr49002_state[(1)]);
var cr49002_place_18 = cr49002_place_2;
var cr49002_place_19 = (1);
var cr49002_place_20 = missionary.core.none;
(cr49002_state[(0)] = cr49002_block_10);

return missionary.core.fork(cr49002_place_19,cr49002_place_20);
}catch (e49027){var cr49002_exception = e49027;
(cr49002_state[(0)] = cr49002_block_12);

(cr49002_state[(2)] = null);

(cr49002_state[(3)] = true);

(cr49002_state[(1)] = cr49002_exception);

return cr49002_state;
}});
var cr49002_block_12 = (function hyperfiddle$electric$cr49002_block_12(cr49002_state){
try{var cr49002_place_2 = (cr49002_state[(1)]);
var cr49002_place_3 = (cr49002_state[(3)]);
var cr49002_place_22 = (cljs.core.truth_(cr49002_place_3)?(function(){throw cr49002_place_2})():cr49002_place_2);
(cr49002_state[(0)] = null);

(cr49002_state[(1)] = null);

(cr49002_state[(3)] = null);

return cr49002_place_22;
}catch (e49028){var cr49002_exception = e49028;
(cr49002_state[(0)] = null);

(cr49002_state[(1)] = null);

(cr49002_state[(3)] = null);

throw cr49002_exception;
}});
var cr49002_block_6 = (function hyperfiddle$electric$cr49002_block_6(cr49002_state){
try{var cr49002_place_15 = null;
(cr49002_state[(0)] = cr49002_block_8);

(cr49002_state[(4)] = cr49002_place_15);

return cr49002_state;
}catch (e49029){var cr49002_exception = e49029;
(cr49002_state[(0)] = cr49002_block_12);

(cr49002_state[(2)] = null);

(cr49002_state[(4)] = null);

(cr49002_state[(3)] = true);

(cr49002_state[(1)] = cr49002_exception);

return cr49002_state;
}});
var cr49002_block_8 = (function hyperfiddle$electric$cr49002_block_8(cr49002_state){
try{var cr49002_place_14 = (cr49002_state[(4)]);
(cr49002_state[(0)] = cr49002_block_11);

(cr49002_state[(4)] = null);

(cr49002_state[(2)] = cr49002_place_14);

return cr49002_state;
}catch (e49030){var cr49002_exception = e49030;
(cr49002_state[(0)] = cr49002_block_12);

(cr49002_state[(2)] = null);

(cr49002_state[(4)] = null);

(cr49002_state[(3)] = true);

(cr49002_state[(1)] = cr49002_exception);

return cr49002_state;
}});
var cr49002_block_0 = (function hyperfiddle$electric$cr49002_block_0(cr49002_state){
try{var cr49002_place_0 = flow;
(cr49002_state[(0)] = cr49002_block_1);

return missionary.core.switch$(cr49002_place_0);
}catch (e49031){var cr49002_exception = e49031;
(cr49002_state[(0)] = null);

throw cr49002_exception;
}});
var cr49002_block_11 = (function hyperfiddle$electric$cr49002_block_11(cr49002_state){
try{var cr49002_place_12 = (cr49002_state[(2)]);
(cr49002_state[(0)] = cr49002_block_12);

(cr49002_state[(2)] = null);

(cr49002_state[(1)] = cr49002_place_12);

return cr49002_state;
}catch (e49032){var cr49002_exception = e49032;
(cr49002_state[(0)] = cr49002_block_12);

(cr49002_state[(2)] = null);

(cr49002_state[(3)] = true);

(cr49002_state[(1)] = cr49002_exception);

return cr49002_state;
}});
var cr49002_block_1 = (function hyperfiddle$electric$cr49002_block_1(cr49002_state){
try{var cr49002_place_1 = missionary.core.unpark();
var cr49002_place_2 = null;
var cr49002_place_3 = false;
(cr49002_state[(0)] = cr49002_block_2);

(cr49002_state[(2)] = cr49002_place_1);

(cr49002_state[(1)] = cr49002_place_2);

(cr49002_state[(3)] = cr49002_place_3);

return cr49002_state;
}catch (e49033){var cr49002_exception = e49033;
(cr49002_state[(0)] = null);

throw cr49002_exception;
}});
var cr49002_block_10 = (function hyperfiddle$electric$cr49002_block_10(cr49002_state){
try{var cr49002_place_21 = missionary.core.unpark();
(cr49002_state[(0)] = cr49002_block_11);

(cr49002_state[(2)] = cr49002_place_21);

return cr49002_state;
}catch (e49034){var cr49002_exception = e49034;
(cr49002_state[(0)] = cr49002_block_12);

(cr49002_state[(2)] = null);

(cr49002_state[(3)] = true);

(cr49002_state[(1)] = cr49002_exception);

return cr49002_state;
}});
var cr49002_block_4 = (function hyperfiddle$electric$cr49002_block_4(cr49002_state){
try{var cr49002_place_2 = (cr49002_state[(1)]);
var cr49002_place_9 = cr49002_place_2;
var cr49002_place_10 = missionary.Cancelled;
var cr49002_place_11 = (cr49002_place_9 instanceof cr49002_place_10);
var cr49002_place_12 = null;
if(cr49002_place_11){
(cr49002_state[(0)] = cr49002_block_9);

(cr49002_state[(2)] = cr49002_place_12);

return cr49002_state;
} else {
(cr49002_state[(0)] = cr49002_block_5);

(cr49002_state[(2)] = cr49002_place_12);

return cr49002_state;
}
}catch (e49035){var cr49002_exception = e49035;
(cr49002_state[(0)] = cr49002_block_12);

(cr49002_state[(3)] = true);

(cr49002_state[(1)] = cr49002_exception);

return cr49002_state;
}});
return cloroutine.impl.coroutine((function (){var G__49036 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((5));
(G__49036[(0)] = cr49002_block_0);

return G__49036;
})());
})(),missionary.core.ap_run));
}));

(hyperfiddle.electric.debounce_discreet.cljs$lang$maxFixedArity = 3);

hyperfiddle.electric.throttle = (function hyperfiddle$electric$throttle(dur,_GT_in){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr49037_block_6 = (function hyperfiddle$electric$throttle_$_cr49037_block_6(cr49037_state){
try{var cr49037_place_22 = missionary.core.unpark();
(cr49037_state[(0)] = cr49037_block_8);

(cr49037_state[(2)] = cr49037_place_22);

return cr49037_state;
}catch (e49058){var cr49037_exception = e49058;
(cr49037_state[(0)] = null);

(cr49037_state[(2)] = null);

throw cr49037_exception;
}});
var cr49037_block_8 = (function hyperfiddle$electric$throttle_$_cr49037_block_8(cr49037_state){
try{var cr49037_place_14 = (cr49037_state[(2)]);
(cr49037_state[(0)] = null);

(cr49037_state[(2)] = null);

return cr49037_place_14;
}catch (e49059){var cr49037_exception = e49059;
(cr49037_state[(0)] = null);

(cr49037_state[(2)] = null);

throw cr49037_exception;
}});
var cr49037_block_5 = (function hyperfiddle$electric$throttle_$_cr49037_block_5(cr49037_state){
try{var cr49037_place_19 = missionary.core.unpark();
var cr49037_place_20 = (1);
var cr49037_place_21 = missionary.core.none;
(cr49037_state[(0)] = cr49037_block_6);

return missionary.core.fork(cr49037_place_20,cr49037_place_21);
}catch (e49060){var cr49037_exception = e49060;
(cr49037_state[(0)] = null);

(cr49037_state[(2)] = null);

throw cr49037_exception;
}});
var cr49037_block_1 = (function hyperfiddle$electric$throttle_$_cr49037_block_1(cr49037_state){
try{var cr49037_place_5 = missionary.core.unpark();
var cr49037_place_6 = (1);
var cr49037_place_7 = missionary.core.seed;
var cr49037_place_8 = cljs.core.range;
var cr49037_place_9 = (2);
var cr49037_place_10 = (function (){var G__49063 = cr49037_place_9;
var fexpr__49062 = cr49037_place_8;
return (fexpr__49062.cljs$core$IFn$_invoke$arity$1 ? fexpr__49062.cljs$core$IFn$_invoke$arity$1(G__49063) : fexpr__49062.call(null,G__49063));
})();
var cr49037_place_11 = (function (){var G__49065 = cr49037_place_10;
var fexpr__49064 = cr49037_place_7;
return (fexpr__49064.cljs$core$IFn$_invoke$arity$1 ? fexpr__49064.cljs$core$IFn$_invoke$arity$1(G__49065) : fexpr__49064.call(null,G__49065));
})();
(cr49037_state[(0)] = cr49037_block_2);

(cr49037_state[(1)] = cr49037_place_5);

return missionary.core.fork(cr49037_place_6,cr49037_place_11);
}catch (e49061){var cr49037_exception = e49061;
(cr49037_state[(0)] = null);

throw cr49037_exception;
}});
var cr49037_block_2 = (function hyperfiddle$electric$throttle_$_cr49037_block_2(cr49037_state){
try{var cr49037_place_12 = missionary.core.unpark();
var cr49037_place_13 = cr49037_place_12;
var cr49037_place_14 = null;
var G__49067 = cr49037_place_13;
switch (G__49067) {
case (0):
(cr49037_state[(0)] = cr49037_block_3);

(cr49037_state[(2)] = cr49037_place_14);

return cr49037_state;

break;
case (1):
(cr49037_state[(0)] = cr49037_block_4);

(cr49037_state[(1)] = null);

(cr49037_state[(2)] = cr49037_place_14);

return cr49037_state;

break;
default:
(cr49037_state[(0)] = cr49037_block_7);

(cr49037_state[(1)] = null);

(cr49037_state[(1)] = cr49037_place_12);

return cr49037_state;

}
}catch (e49066){var cr49037_exception = e49066;
(cr49037_state[(0)] = null);

(cr49037_state[(1)] = null);

throw cr49037_exception;
}});
var cr49037_block_4 = (function hyperfiddle$electric$throttle_$_cr49037_block_4(cr49037_state){
try{var cr49037_place_16 = missionary.core.sleep;
var cr49037_place_17 = dur;
var cr49037_place_18 = (function (){var G__49070 = cr49037_place_17;
var fexpr__49069 = cr49037_place_16;
return (fexpr__49069.cljs$core$IFn$_invoke$arity$1 ? fexpr__49069.cljs$core$IFn$_invoke$arity$1(G__49070) : fexpr__49069.call(null,G__49070));
})();
(cr49037_state[(0)] = cr49037_block_5);

return missionary.core.park(cr49037_place_18);
}catch (e49068){var cr49037_exception = e49068;
(cr49037_state[(0)] = null);

(cr49037_state[(2)] = null);

throw cr49037_exception;
}});
var cr49037_block_3 = (function hyperfiddle$electric$throttle_$_cr49037_block_3(cr49037_state){
try{var cr49037_place_5 = (cr49037_state[(1)]);
var cr49037_place_15 = cr49037_place_5;
(cr49037_state[(0)] = cr49037_block_8);

(cr49037_state[(1)] = null);

(cr49037_state[(2)] = cr49037_place_15);

return cr49037_state;
}catch (e49071){var cr49037_exception = e49071;
(cr49037_state[(0)] = null);

(cr49037_state[(1)] = null);

(cr49037_state[(2)] = null);

throw cr49037_exception;
}});
var cr49037_block_0 = (function hyperfiddle$electric$throttle_$_cr49037_block_0(cr49037_state){
try{var cr49037_place_0 = (1);
var cr49037_place_1 = missionary.core.relieve;
var cr49037_place_2 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr49037_place_3 = _GT_in;
var cr49037_place_4 = (function (){var G__49074 = cr49037_place_2;
var G__49075 = cr49037_place_3;
var fexpr__49073 = cr49037_place_1;
return (fexpr__49073.cljs$core$IFn$_invoke$arity$2 ? fexpr__49073.cljs$core$IFn$_invoke$arity$2(G__49074,G__49075) : fexpr__49073.call(null,G__49074,G__49075));
})();
(cr49037_state[(0)] = cr49037_block_1);

return missionary.core.fork(cr49037_place_0,cr49037_place_4);
}catch (e49072){var cr49037_exception = e49072;
(cr49037_state[(0)] = null);

throw cr49037_exception;
}});
var cr49037_block_7 = (function hyperfiddle$electric$throttle_$_cr49037_block_7(cr49037_state){
try{var cr49037_place_12 = (cr49037_state[(1)]);
var cr49037_place_23 = "No matching clause: ";
var cr49037_place_24 = cr49037_place_12;
var cr49037_place_25 = [cr49037_place_23,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr49037_place_24)].join('');
var cr49037_place_26 = (new Error(cr49037_place_25));
var cr49037_place_27 = (function(){throw cr49037_place_26})();
(cr49037_state[(0)] = null);

(cr49037_state[(1)] = null);

return null;
}catch (e49076){var cr49037_exception = e49076;
(cr49037_state[(0)] = null);

(cr49037_state[(1)] = null);

throw cr49037_exception;
}});
return cloroutine.impl.coroutine((function (){var G__49077 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((3));
(G__49077[(0)] = cr49037_block_0);

return G__49077;
})());
})(),missionary.core.ap_run);
});
/**
 * Bound to the HTTP request of the page in which the current Electric program is running.
 */
hyperfiddle.electric._STAR_http_request_STAR_ = null;

//# sourceMappingURL=hyperfiddle.electric.js.map
