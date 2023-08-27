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
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr37262_block_0 = (function hyperfiddle$electric$pair_$_cr37262_block_0(cr37262_state){
try{var cr37262_place_0 = missionary.core.dfv;
var cr37262_place_1 = (function (){var fexpr__37326 = cr37262_place_0;
return (fexpr__37326.cljs$core$IFn$_invoke$arity$0 ? fexpr__37326.cljs$core$IFn$_invoke$arity$0() : fexpr__37326.call(null));
})();
var cr37262_place_2 = missionary.core.dfv;
var cr37262_place_3 = (function (){var fexpr__37327 = cr37262_place_2;
return (fexpr__37327.cljs$core$IFn$_invoke$arity$0 ? fexpr__37327.cljs$core$IFn$_invoke$arity$0() : fexpr__37327.call(null));
})();
var cr37262_place_4 = missionary.core.join;
var cr37262_place_5 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr37262_place_6 = (function (x){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr37265_block_0 = (function (cr37265_state){
try{var cr37265_place_0 = cr37262_place_1;
(cr37265_state[(0)] = cr37265_block_1);

return missionary.core.park(cr37265_place_0);
}catch (e37332){var e37271 = e37332;
var cr37265_exception = e37271;
(cr37265_state[(0)] = null);

throw cr37265_exception;
}});
var cr37265_block_1 = (function (cr37265_state){
try{var cr37265_place_1 = missionary.core.unpark();
var cr37265_place_2 = cr37265_place_1;
var cr37265_place_3 = x;
var cr37265_place_4 = (function (){var G__37274 = cr37265_place_3;
var fexpr__37273 = cr37265_place_2;
var G__37335 = G__37274;
var fexpr__37334 = fexpr__37273;
return (fexpr__37334.cljs$core$IFn$_invoke$arity$1 ? fexpr__37334.cljs$core$IFn$_invoke$arity$1(G__37335) : fexpr__37334.call(null,G__37335));
})();
(cr37265_state[(0)] = null);

return cr37265_place_4;
}catch (e37333){var e37272 = e37333;
var cr37265_exception = e37272;
(cr37265_state[(0)] = null);

throw cr37265_exception;
}});
return cloroutine.impl.coroutine((function (){var G__37275 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__37275[(0)] = cr37265_block_0);

return G__37275;
})());
})(),missionary.core.sp_run);
});
var cr37262_place_7 = (function (_BANG_){
var G__37337_37490 = _BANG_;
var fexpr__37336_37491 = cr37262_place_3;
(fexpr__37336_37491.cljs$core$IFn$_invoke$arity$1 ? fexpr__37336_37491.cljs$core$IFn$_invoke$arity$1(G__37337_37490) : fexpr__37336_37491.call(null,G__37337_37490));

return (function (){
return cljs.core.List.EMPTY;
});
});
var cr37262_place_8 = s;
var cr37262_place_9 = cr37262_place_6;
var cr37262_place_10 = cr37262_place_7;
var cr37262_place_11 = (function (){var G__37339 = cr37262_place_9;
var G__37340 = cr37262_place_10;
var fexpr__37338 = cr37262_place_8;
return (fexpr__37338.cljs$core$IFn$_invoke$arity$2 ? fexpr__37338.cljs$core$IFn$_invoke$arity$2(G__37339,G__37340) : fexpr__37338.call(null,G__37339,G__37340));
})();
var cr37262_place_12 = (function (x){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr37279_block_0 = (function (cr37279_state){
try{var cr37279_place_0 = cr37262_place_3;
(cr37279_state[(0)] = cr37279_block_1);

return missionary.core.park(cr37279_place_0);
}catch (e37345){var e37285 = e37345;
var cr37279_exception = e37285;
(cr37279_state[(0)] = null);

throw cr37279_exception;
}});
var cr37279_block_1 = (function (cr37279_state){
try{var cr37279_place_1 = missionary.core.unpark();
var cr37279_place_2 = cr37279_place_1;
var cr37279_place_3 = x;
var cr37279_place_4 = (function (){var G__37288 = cr37279_place_3;
var fexpr__37287 = cr37279_place_2;
var G__37348 = G__37288;
var fexpr__37347 = fexpr__37287;
return (fexpr__37347.cljs$core$IFn$_invoke$arity$1 ? fexpr__37347.cljs$core$IFn$_invoke$arity$1(G__37348) : fexpr__37347.call(null,G__37348));
})();
(cr37279_state[(0)] = null);

return cr37279_place_4;
}catch (e37346){var e37286 = e37346;
var cr37279_exception = e37286;
(cr37279_state[(0)] = null);

throw cr37279_exception;
}});
return cloroutine.impl.coroutine((function (){var G__37289 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__37289[(0)] = cr37279_block_0);

return G__37289;
})());
})(),missionary.core.sp_run);
});
var cr37262_place_13 = (function (_BANG_){
var G__37350_37492 = _BANG_;
var fexpr__37349_37493 = cr37262_place_1;
(fexpr__37349_37493.cljs$core$IFn$_invoke$arity$1 ? fexpr__37349_37493.cljs$core$IFn$_invoke$arity$1(G__37350_37492) : fexpr__37349_37493.call(null,G__37350_37492));

return (function (){
return cljs.core.List.EMPTY;
});
});
var cr37262_place_14 = (function (p1__37261_SHARP_){
throw p1__37261_SHARP_;
});
var cr37262_place_15 = c;
var cr37262_place_16 = cr37262_place_12;
var cr37262_place_17 = cr37262_place_13;
var cr37262_place_18 = cr37262_place_14;
var cr37262_place_19 = (function (){var G__37352 = cr37262_place_16;
var G__37353 = cr37262_place_17;
var G__37354 = cr37262_place_18;
var fexpr__37351 = cr37262_place_15;
return (fexpr__37351.cljs$core$IFn$_invoke$arity$3 ? fexpr__37351.cljs$core$IFn$_invoke$arity$3(G__37352,G__37353,G__37354) : fexpr__37351.call(null,G__37352,G__37353,G__37354));
})();
var cr37262_place_20 = (function (){var G__37356 = cr37262_place_5;
var G__37357 = cr37262_place_11;
var G__37358 = cr37262_place_19;
var fexpr__37355 = cr37262_place_4;
return (fexpr__37355.cljs$core$IFn$_invoke$arity$3 ? fexpr__37355.cljs$core$IFn$_invoke$arity$3(G__37356,G__37357,G__37358) : fexpr__37355.call(null,G__37356,G__37357,G__37358));
})();
(cr37262_state[(0)] = cr37262_block_1);

return missionary.core.park(cr37262_place_20);
}catch (e37325){var cr37262_exception = e37325;
(cr37262_state[(0)] = null);

throw cr37262_exception;
}});
var cr37262_block_1 = (function hyperfiddle$electric$pair_$_cr37262_block_1(cr37262_state){
try{var cr37262_place_21 = missionary.core.unpark();
(cr37262_state[(0)] = null);

return cr37262_place_21;
}catch (e37359){var cr37262_exception = e37359;
(cr37262_state[(0)] = null);

throw cr37262_exception;
}});
return cloroutine.impl.coroutine((function (){var G__37360 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__37360[(0)] = cr37262_block_0);

return G__37360;
})());
})(),missionary.core.sp_run);
});
hyperfiddle.electric.failure_QMARK_ = (function hyperfiddle$electric$failure_QMARK_(x){
return (x instanceof hyperfiddle.electric.Failure);
});
hyperfiddle.electric.task__GT_cp = (function hyperfiddle$electric$task__GT_cp(var_args){
var G__37363 = arguments.length;
switch (G__37363) {
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
return missionary.core.reductions.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,pending,cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr37364_block_0 = (function hyperfiddle$electric$cr37364_block_0(cr37364_state){
try{var cr37364_place_0 = _BANG_x;
(cr37364_state[(0)] = cr37364_block_1);

return missionary.core.park(cr37364_place_0);
}catch (e37367){var cr37364_exception = e37367;
(cr37364_state[(0)] = null);

throw cr37364_exception;
}});
var cr37364_block_1 = (function hyperfiddle$electric$cr37364_block_1(cr37364_state){
try{var cr37364_place_1 = missionary.core.unpark();
(cr37364_state[(0)] = null);

return cr37364_place_1;
}catch (e37368){var cr37364_exception = e37368;
(cr37364_state[(0)] = null);

throw cr37364_exception;
}});
return cloroutine.impl.coroutine((function (){var G__37369 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__37369[(0)] = cr37364_block_0);

return G__37369;
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
(hyperfiddle.electric.Clock.prototype.call = (function (unused__13640__auto__){
var self__ = this;
var self__ = this;
var G__37371 = (arguments.length - (1));
switch (G__37371) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.Clock.prototype.apply = (function (self__,args37370){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args37370)));
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
var len__5769__auto___37496 = arguments.length;
var i__5770__auto___37497 = (0);
while(true){
if((i__5770__auto___37497 < len__5769__auto___37496)){
args__5775__auto__.push((arguments[i__5770__auto___37497]));

var G__37498 = (i__5770__auto___37497 + (1));
i__5770__auto___37497 = G__37498;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return hyperfiddle.electric._get_system_time_ms.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(hyperfiddle.electric._get_system_time_ms.cljs$core$IFn$_invoke$arity$variadic = (function (p__37373){
var vec__37374 = p__37373;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37374,(0),null);
return Date.now();
}));

(hyperfiddle.electric._get_system_time_ms.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hyperfiddle.electric._get_system_time_ms.cljs$lang$applyTo = (function (seq37372){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37372));
}));

hyperfiddle.electric.dom_listener = (function hyperfiddle$electric$dom_listener(node,typ,f,opts){
node.addEventListener(typ,f,cljs.core.clj__GT_js(opts));

return (function (){
return node.removeEventListener(typ,f);
});
});
hyperfiddle.electric.listen_GT_ = (function hyperfiddle$electric$listen_GT_(var_args){
var G__37379 = arguments.length;
switch (G__37379) {
case 2:
return hyperfiddle.electric.listen_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hyperfiddle.electric.listen_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return hyperfiddle.electric.listen_GT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hyperfiddle.electric.listen_GT_.cljs$core$IFn$_invoke$arity$2 = (function (node,event_type){
return hyperfiddle.electric.listen_GT_.cljs$core$IFn$_invoke$arity$4(node,event_type,cljs.core.identity,cljs.core.PersistentArrayMap.EMPTY);
}));

(hyperfiddle.electric.listen_GT_.cljs$core$IFn$_invoke$arity$3 = (function (node,event_type,keep_fn_BANG_){
return hyperfiddle.electric.listen_GT_.cljs$core$IFn$_invoke$arity$4(node,event_type,keep_fn_BANG_,cljs.core.PersistentArrayMap.EMPTY);
}));

(hyperfiddle.electric.listen_GT_.cljs$core$IFn$_invoke$arity$4 = (function (node,event_type,keep_fn_BANG_,opts){
return missionary.core.relieve(cljs.core.PersistentArrayMap.EMPTY,missionary.core.observe((function (_BANG_){
return hyperfiddle.electric.dom_listener(node,event_type,(function (p1__37377_SHARP_){
var temp__5808__auto__ = (keep_fn_BANG_.cljs$core$IFn$_invoke$arity$1 ? keep_fn_BANG_.cljs$core$IFn$_invoke$arity$1(p1__37377_SHARP_) : keep_fn_BANG_.call(null,p1__37377_SHARP_));
if((temp__5808__auto__ == null)){
return null;
} else {
var v = temp__5808__auto__;
return (_BANG_.cljs$core$IFn$_invoke$arity$1 ? _BANG_.cljs$core$IFn$_invoke$arity$1(v) : _BANG_.call(null,v));
}
}),opts);
})));
}));

(hyperfiddle.electric.listen_GT_.cljs$lang$maxFixedArity = 4);

hyperfiddle.electric._LT_dom_visibility_state = missionary.core.latest.cljs$core$IFn$_invoke$arity$variadic((function (_){
return document.visibilityState;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([missionary.core.reductions.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,document.visibilityState,hyperfiddle.electric.listen_GT_.cljs$core$IFn$_invoke$arity$2(document,"visibilitychange"))], 0));
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
var G__37383 = arguments.length;
switch (G__37383) {
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
return missionary.core.reductions.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,init,cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr37384_block_1 = (function hyperfiddle$electric$cr37384_block_1(cr37384_state){
try{var cr37384_place_1 = missionary.core.unpark();
var cr37384_place_2 = null;
var cr37384_place_3 = false;
(cr37384_state[(0)] = cr37384_block_2);

(cr37384_state[(3)] = cr37384_place_1);

(cr37384_state[(2)] = cr37384_place_2);

(cr37384_state[(1)] = cr37384_place_3);

return cr37384_state;
}catch (e37402){var cr37384_exception = e37402;
(cr37384_state[(0)] = null);

throw cr37384_exception;
}});
var cr37384_block_7 = (function hyperfiddle$electric$cr37384_block_7(cr37384_state){
try{var cr37384_place_2 = (cr37384_state[(2)]);
var cr37384_place_16 = cr37384_place_2;
var cr37384_place_17 = (function(){throw cr37384_place_16})();
(cr37384_state[(0)] = null);

(cr37384_state[(1)] = null);

(cr37384_state[(2)] = null);

return null;
}catch (e37403){var cr37384_exception = e37403;
(cr37384_state[(0)] = cr37384_block_12);

(cr37384_state[(1)] = true);

(cr37384_state[(2)] = cr37384_exception);

return cr37384_state;
}});
var cr37384_block_6 = (function hyperfiddle$electric$cr37384_block_6(cr37384_state){
try{var cr37384_place_15 = null;
(cr37384_state[(0)] = cr37384_block_8);

(cr37384_state[(4)] = cr37384_place_15);

return cr37384_state;
}catch (e37404){var cr37384_exception = e37404;
(cr37384_state[(0)] = cr37384_block_12);

(cr37384_state[(3)] = null);

(cr37384_state[(4)] = null);

(cr37384_state[(1)] = true);

(cr37384_state[(2)] = cr37384_exception);

return cr37384_state;
}});
var cr37384_block_11 = (function hyperfiddle$electric$cr37384_block_11(cr37384_state){
try{var cr37384_place_12 = (cr37384_state[(3)]);
(cr37384_state[(0)] = cr37384_block_12);

(cr37384_state[(3)] = null);

(cr37384_state[(2)] = cr37384_place_12);

return cr37384_state;
}catch (e37405){var cr37384_exception = e37405;
(cr37384_state[(0)] = cr37384_block_12);

(cr37384_state[(3)] = null);

(cr37384_state[(1)] = true);

(cr37384_state[(2)] = cr37384_exception);

return cr37384_state;
}});
var cr37384_block_5 = (function hyperfiddle$electric$cr37384_block_5(cr37384_state){
try{var cr37384_place_13 = new cljs.core.Keyword(null,"else","else",-1508377146);
var cr37384_place_14 = null;
if(cljs.core.truth_(cr37384_place_13)){
(cr37384_state[(0)] = cr37384_block_7);

(cr37384_state[(3)] = null);

return cr37384_state;
} else {
(cr37384_state[(0)] = cr37384_block_6);

(cr37384_state[(4)] = cr37384_place_14);

return cr37384_state;
}
}catch (e37406){var cr37384_exception = e37406;
(cr37384_state[(0)] = cr37384_block_12);

(cr37384_state[(3)] = null);

(cr37384_state[(1)] = true);

(cr37384_state[(2)] = cr37384_exception);

return cr37384_state;
}});
var cr37384_block_3 = (function hyperfiddle$electric$cr37384_block_3(cr37384_state){
try{var cr37384_place_8 = missionary.core.unpark();
(cr37384_state[(0)] = cr37384_block_12);

(cr37384_state[(2)] = cr37384_place_8);

return cr37384_state;
}catch (e37407){var cr37384_exception = e37407;
(cr37384_state[(0)] = cr37384_block_4);

(cr37384_state[(2)] = cr37384_exception);

return cr37384_state;
}});
var cr37384_block_10 = (function hyperfiddle$electric$cr37384_block_10(cr37384_state){
try{var cr37384_place_21 = missionary.core.unpark();
(cr37384_state[(0)] = cr37384_block_11);

(cr37384_state[(3)] = cr37384_place_21);

return cr37384_state;
}catch (e37408){var cr37384_exception = e37408;
(cr37384_state[(0)] = cr37384_block_12);

(cr37384_state[(3)] = null);

(cr37384_state[(1)] = true);

(cr37384_state[(2)] = cr37384_exception);

return cr37384_state;
}});
var cr37384_block_9 = (function hyperfiddle$electric$cr37384_block_9(cr37384_state){
try{var cr37384_place_2 = (cr37384_state[(2)]);
var cr37384_place_18 = cr37384_place_2;
var cr37384_place_19 = (1);
var cr37384_place_20 = missionary.core.none;
(cr37384_state[(0)] = cr37384_block_10);

return missionary.core.fork(cr37384_place_19,cr37384_place_20);
}catch (e37409){var cr37384_exception = e37409;
(cr37384_state[(0)] = cr37384_block_12);

(cr37384_state[(3)] = null);

(cr37384_state[(1)] = true);

(cr37384_state[(2)] = cr37384_exception);

return cr37384_state;
}});
var cr37384_block_0 = (function hyperfiddle$electric$cr37384_block_0(cr37384_state){
try{var cr37384_place_0 = flow;
(cr37384_state[(0)] = cr37384_block_1);

return missionary.core.switch$(cr37384_place_0);
}catch (e37410){var cr37384_exception = e37410;
(cr37384_state[(0)] = null);

throw cr37384_exception;
}});
var cr37384_block_8 = (function hyperfiddle$electric$cr37384_block_8(cr37384_state){
try{var cr37384_place_14 = (cr37384_state[(4)]);
(cr37384_state[(0)] = cr37384_block_11);

(cr37384_state[(4)] = null);

(cr37384_state[(3)] = cr37384_place_14);

return cr37384_state;
}catch (e37411){var cr37384_exception = e37411;
(cr37384_state[(0)] = cr37384_block_12);

(cr37384_state[(3)] = null);

(cr37384_state[(4)] = null);

(cr37384_state[(1)] = true);

(cr37384_state[(2)] = cr37384_exception);

return cr37384_state;
}});
var cr37384_block_4 = (function hyperfiddle$electric$cr37384_block_4(cr37384_state){
try{var cr37384_place_2 = (cr37384_state[(2)]);
var cr37384_place_9 = cr37384_place_2;
var cr37384_place_10 = missionary.Cancelled;
var cr37384_place_11 = (cr37384_place_9 instanceof cr37384_place_10);
var cr37384_place_12 = null;
if(cr37384_place_11){
(cr37384_state[(0)] = cr37384_block_9);

(cr37384_state[(3)] = cr37384_place_12);

return cr37384_state;
} else {
(cr37384_state[(0)] = cr37384_block_5);

(cr37384_state[(3)] = cr37384_place_12);

return cr37384_state;
}
}catch (e37412){var cr37384_exception = e37412;
(cr37384_state[(0)] = cr37384_block_12);

(cr37384_state[(1)] = true);

(cr37384_state[(2)] = cr37384_exception);

return cr37384_state;
}});
var cr37384_block_12 = (function hyperfiddle$electric$cr37384_block_12(cr37384_state){
try{var cr37384_place_3 = (cr37384_state[(1)]);
var cr37384_place_2 = (cr37384_state[(2)]);
var cr37384_place_22 = (cljs.core.truth_(cr37384_place_3)?(function(){throw cr37384_place_2})():cr37384_place_2);
(cr37384_state[(0)] = null);

(cr37384_state[(1)] = null);

(cr37384_state[(2)] = null);

return cr37384_place_22;
}catch (e37413){var cr37384_exception = e37413;
(cr37384_state[(0)] = null);

(cr37384_state[(1)] = null);

(cr37384_state[(2)] = null);

throw cr37384_exception;
}});
var cr37384_block_2 = (function hyperfiddle$electric$cr37384_block_2(cr37384_state){
try{var cr37384_place_1 = (cr37384_state[(3)]);
var cr37384_place_4 = missionary.core.sleep;
var cr37384_place_5 = delay;
var cr37384_place_6 = cr37384_place_1;
var cr37384_place_7 = (function (){var G__37416 = cr37384_place_5;
var G__37417 = cr37384_place_6;
var fexpr__37415 = cr37384_place_4;
return (fexpr__37415.cljs$core$IFn$_invoke$arity$2 ? fexpr__37415.cljs$core$IFn$_invoke$arity$2(G__37416,G__37417) : fexpr__37415.call(null,G__37416,G__37417));
})();
(cr37384_state[(0)] = cr37384_block_3);

(cr37384_state[(3)] = null);

return missionary.core.park(cr37384_place_7);
}catch (e37414){var cr37384_exception = e37414;
(cr37384_state[(0)] = cr37384_block_4);

(cr37384_state[(3)] = null);

(cr37384_state[(2)] = cr37384_exception);

return cr37384_state;
}});
return cloroutine.impl.coroutine((function (){var G__37418 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((5));
(G__37418[(0)] = cr37384_block_0);

return G__37418;
})());
})(),missionary.core.ap_run));
}));

(hyperfiddle.electric.debounce_discreet.cljs$lang$maxFixedArity = 3);

hyperfiddle.electric.throttle = (function hyperfiddle$electric$throttle(dur,_GT_in){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr37419_block_1 = (function hyperfiddle$electric$throttle_$_cr37419_block_1(cr37419_state){
try{var cr37419_place_5 = missionary.core.unpark();
var cr37419_place_6 = (1);
var cr37419_place_7 = missionary.core.seed;
var cr37419_place_8 = cljs.core.range;
var cr37419_place_9 = (2);
var cr37419_place_10 = (function (){var G__37442 = cr37419_place_9;
var fexpr__37441 = cr37419_place_8;
return (fexpr__37441.cljs$core$IFn$_invoke$arity$1 ? fexpr__37441.cljs$core$IFn$_invoke$arity$1(G__37442) : fexpr__37441.call(null,G__37442));
})();
var cr37419_place_11 = (function (){var G__37444 = cr37419_place_10;
var fexpr__37443 = cr37419_place_7;
return (fexpr__37443.cljs$core$IFn$_invoke$arity$1 ? fexpr__37443.cljs$core$IFn$_invoke$arity$1(G__37444) : fexpr__37443.call(null,G__37444));
})();
(cr37419_state[(0)] = cr37419_block_2);

(cr37419_state[(1)] = cr37419_place_5);

return missionary.core.fork(cr37419_place_6,cr37419_place_11);
}catch (e37440){var cr37419_exception = e37440;
(cr37419_state[(0)] = null);

throw cr37419_exception;
}});
var cr37419_block_8 = (function hyperfiddle$electric$throttle_$_cr37419_block_8(cr37419_state){
try{var cr37419_place_14 = (cr37419_state[(2)]);
(cr37419_state[(0)] = null);

(cr37419_state[(2)] = null);

return cr37419_place_14;
}catch (e37445){var cr37419_exception = e37445;
(cr37419_state[(0)] = null);

(cr37419_state[(2)] = null);

throw cr37419_exception;
}});
var cr37419_block_3 = (function hyperfiddle$electric$throttle_$_cr37419_block_3(cr37419_state){
try{var cr37419_place_5 = (cr37419_state[(1)]);
var cr37419_place_15 = cr37419_place_5;
(cr37419_state[(0)] = cr37419_block_8);

(cr37419_state[(1)] = null);

(cr37419_state[(2)] = cr37419_place_15);

return cr37419_state;
}catch (e37446){var cr37419_exception = e37446;
(cr37419_state[(0)] = null);

(cr37419_state[(1)] = null);

(cr37419_state[(2)] = null);

throw cr37419_exception;
}});
var cr37419_block_2 = (function hyperfiddle$electric$throttle_$_cr37419_block_2(cr37419_state){
try{var cr37419_place_12 = missionary.core.unpark();
var cr37419_place_13 = cr37419_place_12;
var cr37419_place_14 = null;
var G__37448 = cr37419_place_13;
switch (G__37448) {
case (0):
(cr37419_state[(0)] = cr37419_block_3);

(cr37419_state[(2)] = cr37419_place_14);

return cr37419_state;

break;
case (1):
(cr37419_state[(0)] = cr37419_block_4);

(cr37419_state[(1)] = null);

(cr37419_state[(2)] = cr37419_place_14);

return cr37419_state;

break;
default:
(cr37419_state[(0)] = cr37419_block_7);

(cr37419_state[(1)] = null);

(cr37419_state[(1)] = cr37419_place_12);

return cr37419_state;

}
}catch (e37447){var cr37419_exception = e37447;
(cr37419_state[(0)] = null);

(cr37419_state[(1)] = null);

throw cr37419_exception;
}});
var cr37419_block_6 = (function hyperfiddle$electric$throttle_$_cr37419_block_6(cr37419_state){
try{var cr37419_place_22 = missionary.core.unpark();
(cr37419_state[(0)] = cr37419_block_8);

(cr37419_state[(2)] = cr37419_place_22);

return cr37419_state;
}catch (e37449){var cr37419_exception = e37449;
(cr37419_state[(0)] = null);

(cr37419_state[(2)] = null);

throw cr37419_exception;
}});
var cr37419_block_5 = (function hyperfiddle$electric$throttle_$_cr37419_block_5(cr37419_state){
try{var cr37419_place_19 = missionary.core.unpark();
var cr37419_place_20 = (1);
var cr37419_place_21 = missionary.core.none;
(cr37419_state[(0)] = cr37419_block_6);

return missionary.core.fork(cr37419_place_20,cr37419_place_21);
}catch (e37450){var cr37419_exception = e37450;
(cr37419_state[(0)] = null);

(cr37419_state[(2)] = null);

throw cr37419_exception;
}});
var cr37419_block_0 = (function hyperfiddle$electric$throttle_$_cr37419_block_0(cr37419_state){
try{var cr37419_place_0 = (1);
var cr37419_place_1 = missionary.core.relieve;
var cr37419_place_2 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr37419_place_3 = _GT_in;
var cr37419_place_4 = (function (){var G__37453 = cr37419_place_2;
var G__37454 = cr37419_place_3;
var fexpr__37452 = cr37419_place_1;
return (fexpr__37452.cljs$core$IFn$_invoke$arity$2 ? fexpr__37452.cljs$core$IFn$_invoke$arity$2(G__37453,G__37454) : fexpr__37452.call(null,G__37453,G__37454));
})();
(cr37419_state[(0)] = cr37419_block_1);

return missionary.core.fork(cr37419_place_0,cr37419_place_4);
}catch (e37451){var cr37419_exception = e37451;
(cr37419_state[(0)] = null);

throw cr37419_exception;
}});
var cr37419_block_7 = (function hyperfiddle$electric$throttle_$_cr37419_block_7(cr37419_state){
try{var cr37419_place_12 = (cr37419_state[(1)]);
var cr37419_place_23 = "No matching clause: ";
var cr37419_place_24 = cr37419_place_12;
var cr37419_place_25 = [cr37419_place_23,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr37419_place_24)].join('');
var cr37419_place_26 = (new Error(cr37419_place_25));
var cr37419_place_27 = (function(){throw cr37419_place_26})();
(cr37419_state[(0)] = null);

(cr37419_state[(1)] = null);

return null;
}catch (e37455){var cr37419_exception = e37455;
(cr37419_state[(0)] = null);

(cr37419_state[(1)] = null);

throw cr37419_exception;
}});
var cr37419_block_4 = (function hyperfiddle$electric$throttle_$_cr37419_block_4(cr37419_state){
try{var cr37419_place_16 = missionary.core.sleep;
var cr37419_place_17 = dur;
var cr37419_place_18 = (function (){var G__37458 = cr37419_place_17;
var fexpr__37457 = cr37419_place_16;
return (fexpr__37457.cljs$core$IFn$_invoke$arity$1 ? fexpr__37457.cljs$core$IFn$_invoke$arity$1(G__37458) : fexpr__37457.call(null,G__37458));
})();
(cr37419_state[(0)] = cr37419_block_5);

return missionary.core.park(cr37419_place_18);
}catch (e37456){var cr37419_exception = e37456;
(cr37419_state[(0)] = null);

(cr37419_state[(2)] = null);

throw cr37419_exception;
}});
return cloroutine.impl.coroutine((function (){var G__37459 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((3));
(G__37459[(0)] = cr37419_block_0);

return G__37459;
})());
})(),missionary.core.ap_run);
});
/**
 * Bound to the HTTP request of the page in which the current Electric program is running.
 */
hyperfiddle.electric._STAR_http_request_STAR_ = null;
hyperfiddle.electric._snapshot = (function hyperfiddle$electric$_snapshot(flow){
return missionary.core.eduction.cljs$core$IFn$_invoke$arity$2(contrib.data.take_upto(cljs.core.complement(cljs.core.PersistentHashSet.createAsIfByAssoc([hyperfiddle.electric.impl.runtime.pending]))),flow);
});
hyperfiddle.electric.__GT_Object = (function hyperfiddle$electric$__GT_Object(){
return (new Object());
});
hyperfiddle.electric.pending = (new hyperfiddle.electric.Pending());

//# sourceMappingURL=hyperfiddle.electric.js.map
