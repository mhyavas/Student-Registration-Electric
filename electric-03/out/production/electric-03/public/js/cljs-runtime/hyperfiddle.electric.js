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
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr33464_block_0 = (function hyperfiddle$electric$pair_$_cr33464_block_0(cr33464_state){
try{var cr33464_place_0 = missionary.core.dfv;
var cr33464_place_1 = (function (){var fexpr__33528 = cr33464_place_0;
return (fexpr__33528.cljs$core$IFn$_invoke$arity$0 ? fexpr__33528.cljs$core$IFn$_invoke$arity$0() : fexpr__33528.call(null));
})();
var cr33464_place_2 = missionary.core.dfv;
var cr33464_place_3 = (function (){var fexpr__33529 = cr33464_place_2;
return (fexpr__33529.cljs$core$IFn$_invoke$arity$0 ? fexpr__33529.cljs$core$IFn$_invoke$arity$0() : fexpr__33529.call(null));
})();
var cr33464_place_4 = missionary.core.join;
var cr33464_place_5 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr33464_place_6 = (function (x){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr33467_block_0 = (function (cr33467_state){
try{var cr33467_place_0 = cr33464_place_1;
(cr33467_state[(0)] = cr33467_block_1);

return missionary.core.park(cr33467_place_0);
}catch (e33534){var e33473 = e33534;
var cr33467_exception = e33473;
(cr33467_state[(0)] = null);

throw cr33467_exception;
}});
var cr33467_block_1 = (function (cr33467_state){
try{var cr33467_place_1 = missionary.core.unpark();
var cr33467_place_2 = cr33467_place_1;
var cr33467_place_3 = x;
var cr33467_place_4 = (function (){var G__33476 = cr33467_place_3;
var fexpr__33475 = cr33467_place_2;
var G__33537 = G__33476;
var fexpr__33536 = fexpr__33475;
return (fexpr__33536.cljs$core$IFn$_invoke$arity$1 ? fexpr__33536.cljs$core$IFn$_invoke$arity$1(G__33537) : fexpr__33536.call(null,G__33537));
})();
(cr33467_state[(0)] = null);

return cr33467_place_4;
}catch (e33535){var e33474 = e33535;
var cr33467_exception = e33474;
(cr33467_state[(0)] = null);

throw cr33467_exception;
}});
return cloroutine.impl.coroutine((function (){var G__33477 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__33477[(0)] = cr33467_block_0);

return G__33477;
})());
})(),missionary.core.sp_run);
});
var cr33464_place_7 = (function (_BANG_){
var G__33539_33692 = _BANG_;
var fexpr__33538_33693 = cr33464_place_3;
(fexpr__33538_33693.cljs$core$IFn$_invoke$arity$1 ? fexpr__33538_33693.cljs$core$IFn$_invoke$arity$1(G__33539_33692) : fexpr__33538_33693.call(null,G__33539_33692));

return (function (){
return cljs.core.List.EMPTY;
});
});
var cr33464_place_8 = s;
var cr33464_place_9 = cr33464_place_6;
var cr33464_place_10 = cr33464_place_7;
var cr33464_place_11 = (function (){var G__33541 = cr33464_place_9;
var G__33542 = cr33464_place_10;
var fexpr__33540 = cr33464_place_8;
return (fexpr__33540.cljs$core$IFn$_invoke$arity$2 ? fexpr__33540.cljs$core$IFn$_invoke$arity$2(G__33541,G__33542) : fexpr__33540.call(null,G__33541,G__33542));
})();
var cr33464_place_12 = (function (x){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr33481_block_0 = (function (cr33481_state){
try{var cr33481_place_0 = cr33464_place_3;
(cr33481_state[(0)] = cr33481_block_1);

return missionary.core.park(cr33481_place_0);
}catch (e33547){var e33487 = e33547;
var cr33481_exception = e33487;
(cr33481_state[(0)] = null);

throw cr33481_exception;
}});
var cr33481_block_1 = (function (cr33481_state){
try{var cr33481_place_1 = missionary.core.unpark();
var cr33481_place_2 = cr33481_place_1;
var cr33481_place_3 = x;
var cr33481_place_4 = (function (){var G__33490 = cr33481_place_3;
var fexpr__33489 = cr33481_place_2;
var G__33550 = G__33490;
var fexpr__33549 = fexpr__33489;
return (fexpr__33549.cljs$core$IFn$_invoke$arity$1 ? fexpr__33549.cljs$core$IFn$_invoke$arity$1(G__33550) : fexpr__33549.call(null,G__33550));
})();
(cr33481_state[(0)] = null);

return cr33481_place_4;
}catch (e33548){var e33488 = e33548;
var cr33481_exception = e33488;
(cr33481_state[(0)] = null);

throw cr33481_exception;
}});
return cloroutine.impl.coroutine((function (){var G__33491 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__33491[(0)] = cr33481_block_0);

return G__33491;
})());
})(),missionary.core.sp_run);
});
var cr33464_place_13 = (function (_BANG_){
var G__33552_33694 = _BANG_;
var fexpr__33551_33695 = cr33464_place_1;
(fexpr__33551_33695.cljs$core$IFn$_invoke$arity$1 ? fexpr__33551_33695.cljs$core$IFn$_invoke$arity$1(G__33552_33694) : fexpr__33551_33695.call(null,G__33552_33694));

return (function (){
return cljs.core.List.EMPTY;
});
});
var cr33464_place_14 = (function (p1__33463_SHARP_){
throw p1__33463_SHARP_;
});
var cr33464_place_15 = c;
var cr33464_place_16 = cr33464_place_12;
var cr33464_place_17 = cr33464_place_13;
var cr33464_place_18 = cr33464_place_14;
var cr33464_place_19 = (function (){var G__33554 = cr33464_place_16;
var G__33555 = cr33464_place_17;
var G__33556 = cr33464_place_18;
var fexpr__33553 = cr33464_place_15;
return (fexpr__33553.cljs$core$IFn$_invoke$arity$3 ? fexpr__33553.cljs$core$IFn$_invoke$arity$3(G__33554,G__33555,G__33556) : fexpr__33553.call(null,G__33554,G__33555,G__33556));
})();
var cr33464_place_20 = (function (){var G__33558 = cr33464_place_5;
var G__33559 = cr33464_place_11;
var G__33560 = cr33464_place_19;
var fexpr__33557 = cr33464_place_4;
return (fexpr__33557.cljs$core$IFn$_invoke$arity$3 ? fexpr__33557.cljs$core$IFn$_invoke$arity$3(G__33558,G__33559,G__33560) : fexpr__33557.call(null,G__33558,G__33559,G__33560));
})();
(cr33464_state[(0)] = cr33464_block_1);

return missionary.core.park(cr33464_place_20);
}catch (e33527){var cr33464_exception = e33527;
(cr33464_state[(0)] = null);

throw cr33464_exception;
}});
var cr33464_block_1 = (function hyperfiddle$electric$pair_$_cr33464_block_1(cr33464_state){
try{var cr33464_place_21 = missionary.core.unpark();
(cr33464_state[(0)] = null);

return cr33464_place_21;
}catch (e33561){var cr33464_exception = e33561;
(cr33464_state[(0)] = null);

throw cr33464_exception;
}});
return cloroutine.impl.coroutine((function (){var G__33562 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__33562[(0)] = cr33464_block_0);

return G__33562;
})());
})(),missionary.core.sp_run);
});
hyperfiddle.electric.failure_QMARK_ = (function hyperfiddle$electric$failure_QMARK_(x){
return (x instanceof hyperfiddle.electric.Failure);
});
hyperfiddle.electric.task__GT_cp = (function hyperfiddle$electric$task__GT_cp(var_args){
var G__33565 = arguments.length;
switch (G__33565) {
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
return missionary.core.reductions.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,pending,cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr33566_block_0 = (function hyperfiddle$electric$cr33566_block_0(cr33566_state){
try{var cr33566_place_0 = _BANG_x;
(cr33566_state[(0)] = cr33566_block_1);

return missionary.core.park(cr33566_place_0);
}catch (e33569){var cr33566_exception = e33569;
(cr33566_state[(0)] = null);

throw cr33566_exception;
}});
var cr33566_block_1 = (function hyperfiddle$electric$cr33566_block_1(cr33566_state){
try{var cr33566_place_1 = missionary.core.unpark();
(cr33566_state[(0)] = null);

return cr33566_place_1;
}catch (e33570){var cr33566_exception = e33570;
(cr33566_state[(0)] = null);

throw cr33566_exception;
}});
return cloroutine.impl.coroutine((function (){var G__33571 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__33571[(0)] = cr33566_block_0);

return G__33571;
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
(hyperfiddle.electric.Clock.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__33573 = (arguments.length - (1));
switch (G__33573) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.Clock.prototype.apply = (function (self__,args33572){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args33572)));
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
var len__5769__auto___33698 = arguments.length;
var i__5770__auto___33699 = (0);
while(true){
if((i__5770__auto___33699 < len__5769__auto___33698)){
args__5775__auto__.push((arguments[i__5770__auto___33699]));

var G__33700 = (i__5770__auto___33699 + (1));
i__5770__auto___33699 = G__33700;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return hyperfiddle.electric._get_system_time_ms.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(hyperfiddle.electric._get_system_time_ms.cljs$core$IFn$_invoke$arity$variadic = (function (p__33575){
var vec__33576 = p__33575;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33576,(0),null);
return Date.now();
}));

(hyperfiddle.electric._get_system_time_ms.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hyperfiddle.electric._get_system_time_ms.cljs$lang$applyTo = (function (seq33574){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33574));
}));

hyperfiddle.electric.dom_listener = (function hyperfiddle$electric$dom_listener(node,typ,f,opts){
node.addEventListener(typ,f,cljs.core.clj__GT_js(opts));

return (function (){
return node.removeEventListener(typ,f);
});
});
hyperfiddle.electric.listen_GT_ = (function hyperfiddle$electric$listen_GT_(var_args){
var G__33581 = arguments.length;
switch (G__33581) {
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
return hyperfiddle.electric.dom_listener(node,event_type,(function (p1__33579_SHARP_){
var temp__5808__auto__ = (keep_fn_BANG_.cljs$core$IFn$_invoke$arity$1 ? keep_fn_BANG_.cljs$core$IFn$_invoke$arity$1(p1__33579_SHARP_) : keep_fn_BANG_.call(null,p1__33579_SHARP_));
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
var G__33585 = arguments.length;
switch (G__33585) {
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
return missionary.core.reductions.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,init,cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr33586_block_10 = (function hyperfiddle$electric$cr33586_block_10(cr33586_state){
try{var cr33586_place_21 = missionary.core.unpark();
(cr33586_state[(0)] = cr33586_block_11);

(cr33586_state[(2)] = cr33586_place_21);

return cr33586_state;
}catch (e33604){var cr33586_exception = e33604;
(cr33586_state[(0)] = cr33586_block_12);

(cr33586_state[(2)] = null);

(cr33586_state[(3)] = true);

(cr33586_state[(1)] = cr33586_exception);

return cr33586_state;
}});
var cr33586_block_5 = (function hyperfiddle$electric$cr33586_block_5(cr33586_state){
try{var cr33586_place_13 = new cljs.core.Keyword(null,"else","else",-1508377146);
var cr33586_place_14 = null;
if(cljs.core.truth_(cr33586_place_13)){
(cr33586_state[(0)] = cr33586_block_7);

(cr33586_state[(2)] = null);

return cr33586_state;
} else {
(cr33586_state[(0)] = cr33586_block_6);

(cr33586_state[(4)] = cr33586_place_14);

return cr33586_state;
}
}catch (e33605){var cr33586_exception = e33605;
(cr33586_state[(0)] = cr33586_block_12);

(cr33586_state[(2)] = null);

(cr33586_state[(3)] = true);

(cr33586_state[(1)] = cr33586_exception);

return cr33586_state;
}});
var cr33586_block_8 = (function hyperfiddle$electric$cr33586_block_8(cr33586_state){
try{var cr33586_place_14 = (cr33586_state[(4)]);
(cr33586_state[(0)] = cr33586_block_11);

(cr33586_state[(4)] = null);

(cr33586_state[(2)] = cr33586_place_14);

return cr33586_state;
}catch (e33606){var cr33586_exception = e33606;
(cr33586_state[(0)] = cr33586_block_12);

(cr33586_state[(2)] = null);

(cr33586_state[(4)] = null);

(cr33586_state[(3)] = true);

(cr33586_state[(1)] = cr33586_exception);

return cr33586_state;
}});
var cr33586_block_4 = (function hyperfiddle$electric$cr33586_block_4(cr33586_state){
try{var cr33586_place_2 = (cr33586_state[(1)]);
var cr33586_place_9 = cr33586_place_2;
var cr33586_place_10 = missionary.Cancelled;
var cr33586_place_11 = (cr33586_place_9 instanceof cr33586_place_10);
var cr33586_place_12 = null;
if(cr33586_place_11){
(cr33586_state[(0)] = cr33586_block_9);

(cr33586_state[(2)] = cr33586_place_12);

return cr33586_state;
} else {
(cr33586_state[(0)] = cr33586_block_5);

(cr33586_state[(2)] = cr33586_place_12);

return cr33586_state;
}
}catch (e33607){var cr33586_exception = e33607;
(cr33586_state[(0)] = cr33586_block_12);

(cr33586_state[(3)] = true);

(cr33586_state[(1)] = cr33586_exception);

return cr33586_state;
}});
var cr33586_block_7 = (function hyperfiddle$electric$cr33586_block_7(cr33586_state){
try{var cr33586_place_2 = (cr33586_state[(1)]);
var cr33586_place_16 = cr33586_place_2;
var cr33586_place_17 = (function(){throw cr33586_place_16})();
(cr33586_state[(0)] = null);

(cr33586_state[(1)] = null);

(cr33586_state[(3)] = null);

return null;
}catch (e33608){var cr33586_exception = e33608;
(cr33586_state[(0)] = cr33586_block_12);

(cr33586_state[(3)] = true);

(cr33586_state[(1)] = cr33586_exception);

return cr33586_state;
}});
var cr33586_block_6 = (function hyperfiddle$electric$cr33586_block_6(cr33586_state){
try{var cr33586_place_15 = null;
(cr33586_state[(0)] = cr33586_block_8);

(cr33586_state[(4)] = cr33586_place_15);

return cr33586_state;
}catch (e33609){var cr33586_exception = e33609;
(cr33586_state[(0)] = cr33586_block_12);

(cr33586_state[(2)] = null);

(cr33586_state[(4)] = null);

(cr33586_state[(3)] = true);

(cr33586_state[(1)] = cr33586_exception);

return cr33586_state;
}});
var cr33586_block_0 = (function hyperfiddle$electric$cr33586_block_0(cr33586_state){
try{var cr33586_place_0 = flow;
(cr33586_state[(0)] = cr33586_block_1);

return missionary.core.switch$(cr33586_place_0);
}catch (e33610){var cr33586_exception = e33610;
(cr33586_state[(0)] = null);

throw cr33586_exception;
}});
var cr33586_block_2 = (function hyperfiddle$electric$cr33586_block_2(cr33586_state){
try{var cr33586_place_1 = (cr33586_state[(2)]);
var cr33586_place_4 = missionary.core.sleep;
var cr33586_place_5 = delay;
var cr33586_place_6 = cr33586_place_1;
var cr33586_place_7 = (function (){var G__33613 = cr33586_place_5;
var G__33614 = cr33586_place_6;
var fexpr__33612 = cr33586_place_4;
return (fexpr__33612.cljs$core$IFn$_invoke$arity$2 ? fexpr__33612.cljs$core$IFn$_invoke$arity$2(G__33613,G__33614) : fexpr__33612.call(null,G__33613,G__33614));
})();
(cr33586_state[(0)] = cr33586_block_3);

(cr33586_state[(2)] = null);

return missionary.core.park(cr33586_place_7);
}catch (e33611){var cr33586_exception = e33611;
(cr33586_state[(0)] = cr33586_block_4);

(cr33586_state[(2)] = null);

(cr33586_state[(1)] = cr33586_exception);

return cr33586_state;
}});
var cr33586_block_1 = (function hyperfiddle$electric$cr33586_block_1(cr33586_state){
try{var cr33586_place_1 = missionary.core.unpark();
var cr33586_place_2 = null;
var cr33586_place_3 = false;
(cr33586_state[(0)] = cr33586_block_2);

(cr33586_state[(2)] = cr33586_place_1);

(cr33586_state[(1)] = cr33586_place_2);

(cr33586_state[(3)] = cr33586_place_3);

return cr33586_state;
}catch (e33615){var cr33586_exception = e33615;
(cr33586_state[(0)] = null);

throw cr33586_exception;
}});
var cr33586_block_11 = (function hyperfiddle$electric$cr33586_block_11(cr33586_state){
try{var cr33586_place_12 = (cr33586_state[(2)]);
(cr33586_state[(0)] = cr33586_block_12);

(cr33586_state[(2)] = null);

(cr33586_state[(1)] = cr33586_place_12);

return cr33586_state;
}catch (e33616){var cr33586_exception = e33616;
(cr33586_state[(0)] = cr33586_block_12);

(cr33586_state[(2)] = null);

(cr33586_state[(3)] = true);

(cr33586_state[(1)] = cr33586_exception);

return cr33586_state;
}});
var cr33586_block_3 = (function hyperfiddle$electric$cr33586_block_3(cr33586_state){
try{var cr33586_place_8 = missionary.core.unpark();
(cr33586_state[(0)] = cr33586_block_12);

(cr33586_state[(1)] = cr33586_place_8);

return cr33586_state;
}catch (e33617){var cr33586_exception = e33617;
(cr33586_state[(0)] = cr33586_block_4);

(cr33586_state[(1)] = cr33586_exception);

return cr33586_state;
}});
var cr33586_block_9 = (function hyperfiddle$electric$cr33586_block_9(cr33586_state){
try{var cr33586_place_2 = (cr33586_state[(1)]);
var cr33586_place_18 = cr33586_place_2;
var cr33586_place_19 = (1);
var cr33586_place_20 = missionary.core.none;
(cr33586_state[(0)] = cr33586_block_10);

return missionary.core.fork(cr33586_place_19,cr33586_place_20);
}catch (e33618){var cr33586_exception = e33618;
(cr33586_state[(0)] = cr33586_block_12);

(cr33586_state[(2)] = null);

(cr33586_state[(3)] = true);

(cr33586_state[(1)] = cr33586_exception);

return cr33586_state;
}});
var cr33586_block_12 = (function hyperfiddle$electric$cr33586_block_12(cr33586_state){
try{var cr33586_place_2 = (cr33586_state[(1)]);
var cr33586_place_3 = (cr33586_state[(3)]);
var cr33586_place_22 = (cljs.core.truth_(cr33586_place_3)?(function(){throw cr33586_place_2})():cr33586_place_2);
(cr33586_state[(0)] = null);

(cr33586_state[(1)] = null);

(cr33586_state[(3)] = null);

return cr33586_place_22;
}catch (e33619){var cr33586_exception = e33619;
(cr33586_state[(0)] = null);

(cr33586_state[(1)] = null);

(cr33586_state[(3)] = null);

throw cr33586_exception;
}});
return cloroutine.impl.coroutine((function (){var G__33620 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((5));
(G__33620[(0)] = cr33586_block_0);

return G__33620;
})());
})(),missionary.core.ap_run));
}));

(hyperfiddle.electric.debounce_discreet.cljs$lang$maxFixedArity = 3);

hyperfiddle.electric.throttle = (function hyperfiddle$electric$throttle(dur,_GT_in){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr33621_block_7 = (function hyperfiddle$electric$throttle_$_cr33621_block_7(cr33621_state){
try{var cr33621_place_12 = (cr33621_state[(1)]);
var cr33621_place_23 = "No matching clause: ";
var cr33621_place_24 = cr33621_place_12;
var cr33621_place_25 = [cr33621_place_23,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr33621_place_24)].join('');
var cr33621_place_26 = (new Error(cr33621_place_25));
var cr33621_place_27 = (function(){throw cr33621_place_26})();
(cr33621_state[(0)] = null);

(cr33621_state[(1)] = null);

return null;
}catch (e33642){var cr33621_exception = e33642;
(cr33621_state[(0)] = null);

(cr33621_state[(1)] = null);

throw cr33621_exception;
}});
var cr33621_block_5 = (function hyperfiddle$electric$throttle_$_cr33621_block_5(cr33621_state){
try{var cr33621_place_19 = missionary.core.unpark();
var cr33621_place_20 = (1);
var cr33621_place_21 = missionary.core.none;
(cr33621_state[(0)] = cr33621_block_6);

return missionary.core.fork(cr33621_place_20,cr33621_place_21);
}catch (e33643){var cr33621_exception = e33643;
(cr33621_state[(0)] = null);

(cr33621_state[(2)] = null);

throw cr33621_exception;
}});
var cr33621_block_8 = (function hyperfiddle$electric$throttle_$_cr33621_block_8(cr33621_state){
try{var cr33621_place_14 = (cr33621_state[(2)]);
(cr33621_state[(0)] = null);

(cr33621_state[(2)] = null);

return cr33621_place_14;
}catch (e33644){var cr33621_exception = e33644;
(cr33621_state[(0)] = null);

(cr33621_state[(2)] = null);

throw cr33621_exception;
}});
var cr33621_block_1 = (function hyperfiddle$electric$throttle_$_cr33621_block_1(cr33621_state){
try{var cr33621_place_5 = missionary.core.unpark();
var cr33621_place_6 = (1);
var cr33621_place_7 = missionary.core.seed;
var cr33621_place_8 = cljs.core.range;
var cr33621_place_9 = (2);
var cr33621_place_10 = (function (){var G__33647 = cr33621_place_9;
var fexpr__33646 = cr33621_place_8;
return (fexpr__33646.cljs$core$IFn$_invoke$arity$1 ? fexpr__33646.cljs$core$IFn$_invoke$arity$1(G__33647) : fexpr__33646.call(null,G__33647));
})();
var cr33621_place_11 = (function (){var G__33649 = cr33621_place_10;
var fexpr__33648 = cr33621_place_7;
return (fexpr__33648.cljs$core$IFn$_invoke$arity$1 ? fexpr__33648.cljs$core$IFn$_invoke$arity$1(G__33649) : fexpr__33648.call(null,G__33649));
})();
(cr33621_state[(0)] = cr33621_block_2);

(cr33621_state[(1)] = cr33621_place_5);

return missionary.core.fork(cr33621_place_6,cr33621_place_11);
}catch (e33645){var cr33621_exception = e33645;
(cr33621_state[(0)] = null);

throw cr33621_exception;
}});
var cr33621_block_4 = (function hyperfiddle$electric$throttle_$_cr33621_block_4(cr33621_state){
try{var cr33621_place_16 = missionary.core.sleep;
var cr33621_place_17 = dur;
var cr33621_place_18 = (function (){var G__33652 = cr33621_place_17;
var fexpr__33651 = cr33621_place_16;
return (fexpr__33651.cljs$core$IFn$_invoke$arity$1 ? fexpr__33651.cljs$core$IFn$_invoke$arity$1(G__33652) : fexpr__33651.call(null,G__33652));
})();
(cr33621_state[(0)] = cr33621_block_5);

return missionary.core.park(cr33621_place_18);
}catch (e33650){var cr33621_exception = e33650;
(cr33621_state[(0)] = null);

(cr33621_state[(2)] = null);

throw cr33621_exception;
}});
var cr33621_block_0 = (function hyperfiddle$electric$throttle_$_cr33621_block_0(cr33621_state){
try{var cr33621_place_0 = (1);
var cr33621_place_1 = missionary.core.relieve;
var cr33621_place_2 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr33621_place_3 = _GT_in;
var cr33621_place_4 = (function (){var G__33655 = cr33621_place_2;
var G__33656 = cr33621_place_3;
var fexpr__33654 = cr33621_place_1;
return (fexpr__33654.cljs$core$IFn$_invoke$arity$2 ? fexpr__33654.cljs$core$IFn$_invoke$arity$2(G__33655,G__33656) : fexpr__33654.call(null,G__33655,G__33656));
})();
(cr33621_state[(0)] = cr33621_block_1);

return missionary.core.fork(cr33621_place_0,cr33621_place_4);
}catch (e33653){var cr33621_exception = e33653;
(cr33621_state[(0)] = null);

throw cr33621_exception;
}});
var cr33621_block_6 = (function hyperfiddle$electric$throttle_$_cr33621_block_6(cr33621_state){
try{var cr33621_place_22 = missionary.core.unpark();
(cr33621_state[(0)] = cr33621_block_8);

(cr33621_state[(2)] = cr33621_place_22);

return cr33621_state;
}catch (e33657){var cr33621_exception = e33657;
(cr33621_state[(0)] = null);

(cr33621_state[(2)] = null);

throw cr33621_exception;
}});
var cr33621_block_2 = (function hyperfiddle$electric$throttle_$_cr33621_block_2(cr33621_state){
try{var cr33621_place_12 = missionary.core.unpark();
var cr33621_place_13 = cr33621_place_12;
var cr33621_place_14 = null;
var G__33659 = cr33621_place_13;
switch (G__33659) {
case (0):
(cr33621_state[(0)] = cr33621_block_3);

(cr33621_state[(2)] = cr33621_place_14);

return cr33621_state;

break;
case (1):
(cr33621_state[(0)] = cr33621_block_4);

(cr33621_state[(1)] = null);

(cr33621_state[(2)] = cr33621_place_14);

return cr33621_state;

break;
default:
(cr33621_state[(0)] = cr33621_block_7);

(cr33621_state[(1)] = null);

(cr33621_state[(1)] = cr33621_place_12);

return cr33621_state;

}
}catch (e33658){var cr33621_exception = e33658;
(cr33621_state[(0)] = null);

(cr33621_state[(1)] = null);

throw cr33621_exception;
}});
var cr33621_block_3 = (function hyperfiddle$electric$throttle_$_cr33621_block_3(cr33621_state){
try{var cr33621_place_5 = (cr33621_state[(1)]);
var cr33621_place_15 = cr33621_place_5;
(cr33621_state[(0)] = cr33621_block_8);

(cr33621_state[(1)] = null);

(cr33621_state[(2)] = cr33621_place_15);

return cr33621_state;
}catch (e33660){var cr33621_exception = e33660;
(cr33621_state[(0)] = null);

(cr33621_state[(2)] = null);

(cr33621_state[(1)] = null);

throw cr33621_exception;
}});
return cloroutine.impl.coroutine((function (){var G__33661 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((3));
(G__33661[(0)] = cr33621_block_0);

return G__33661;
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
