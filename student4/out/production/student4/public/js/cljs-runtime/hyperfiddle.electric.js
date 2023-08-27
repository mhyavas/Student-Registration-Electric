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
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr47691_block_0 = (function hyperfiddle$electric$pair_$_cr47691_block_0(cr47691_state){
try{var cr47691_place_0 = missionary.core.dfv;
var cr47691_place_1 = (function (){var fexpr__47755 = cr47691_place_0;
return (fexpr__47755.cljs$core$IFn$_invoke$arity$0 ? fexpr__47755.cljs$core$IFn$_invoke$arity$0() : fexpr__47755.call(null));
})();
var cr47691_place_2 = missionary.core.dfv;
var cr47691_place_3 = (function (){var fexpr__47756 = cr47691_place_2;
return (fexpr__47756.cljs$core$IFn$_invoke$arity$0 ? fexpr__47756.cljs$core$IFn$_invoke$arity$0() : fexpr__47756.call(null));
})();
var cr47691_place_4 = missionary.core.join;
var cr47691_place_5 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr47691_place_6 = (function (x){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr47694_block_0 = (function (cr47694_state){
try{var cr47694_place_0 = cr47691_place_1;
(cr47694_state[(0)] = cr47694_block_1);

return missionary.core.park(cr47694_place_0);
}catch (e47761){var e47700 = e47761;
var cr47694_exception = e47700;
(cr47694_state[(0)] = null);

throw cr47694_exception;
}});
var cr47694_block_1 = (function (cr47694_state){
try{var cr47694_place_1 = missionary.core.unpark();
var cr47694_place_2 = cr47694_place_1;
var cr47694_place_3 = x;
var cr47694_place_4 = (function (){var G__47703 = cr47694_place_3;
var fexpr__47702 = cr47694_place_2;
var G__47764 = G__47703;
var fexpr__47763 = fexpr__47702;
return (fexpr__47763.cljs$core$IFn$_invoke$arity$1 ? fexpr__47763.cljs$core$IFn$_invoke$arity$1(G__47764) : fexpr__47763.call(null,G__47764));
})();
(cr47694_state[(0)] = null);

return cr47694_place_4;
}catch (e47762){var e47701 = e47762;
var cr47694_exception = e47701;
(cr47694_state[(0)] = null);

throw cr47694_exception;
}});
return cloroutine.impl.coroutine((function (){var G__47704 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__47704[(0)] = cr47694_block_0);

return G__47704;
})());
})(),missionary.core.sp_run);
});
var cr47691_place_7 = (function (_BANG_){
var G__47766_47920 = _BANG_;
var fexpr__47765_47921 = cr47691_place_3;
(fexpr__47765_47921.cljs$core$IFn$_invoke$arity$1 ? fexpr__47765_47921.cljs$core$IFn$_invoke$arity$1(G__47766_47920) : fexpr__47765_47921.call(null,G__47766_47920));

return (function (){
return cljs.core.List.EMPTY;
});
});
var cr47691_place_8 = s;
var cr47691_place_9 = cr47691_place_6;
var cr47691_place_10 = cr47691_place_7;
var cr47691_place_11 = (function (){var G__47768 = cr47691_place_9;
var G__47769 = cr47691_place_10;
var fexpr__47767 = cr47691_place_8;
return (fexpr__47767.cljs$core$IFn$_invoke$arity$2 ? fexpr__47767.cljs$core$IFn$_invoke$arity$2(G__47768,G__47769) : fexpr__47767.call(null,G__47768,G__47769));
})();
var cr47691_place_12 = (function (x){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr47708_block_0 = (function (cr47708_state){
try{var cr47708_place_0 = cr47691_place_3;
(cr47708_state[(0)] = cr47708_block_1);

return missionary.core.park(cr47708_place_0);
}catch (e47774){var e47714 = e47774;
var cr47708_exception = e47714;
(cr47708_state[(0)] = null);

throw cr47708_exception;
}});
var cr47708_block_1 = (function (cr47708_state){
try{var cr47708_place_1 = missionary.core.unpark();
var cr47708_place_2 = cr47708_place_1;
var cr47708_place_3 = x;
var cr47708_place_4 = (function (){var G__47717 = cr47708_place_3;
var fexpr__47716 = cr47708_place_2;
var G__47777 = G__47717;
var fexpr__47776 = fexpr__47716;
return (fexpr__47776.cljs$core$IFn$_invoke$arity$1 ? fexpr__47776.cljs$core$IFn$_invoke$arity$1(G__47777) : fexpr__47776.call(null,G__47777));
})();
(cr47708_state[(0)] = null);

return cr47708_place_4;
}catch (e47775){var e47715 = e47775;
var cr47708_exception = e47715;
(cr47708_state[(0)] = null);

throw cr47708_exception;
}});
return cloroutine.impl.coroutine((function (){var G__47718 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__47718[(0)] = cr47708_block_0);

return G__47718;
})());
})(),missionary.core.sp_run);
});
var cr47691_place_13 = (function (_BANG_){
var G__47779_47922 = _BANG_;
var fexpr__47778_47923 = cr47691_place_1;
(fexpr__47778_47923.cljs$core$IFn$_invoke$arity$1 ? fexpr__47778_47923.cljs$core$IFn$_invoke$arity$1(G__47779_47922) : fexpr__47778_47923.call(null,G__47779_47922));

return (function (){
return cljs.core.List.EMPTY;
});
});
var cr47691_place_14 = (function (p1__47690_SHARP_){
throw p1__47690_SHARP_;
});
var cr47691_place_15 = c;
var cr47691_place_16 = cr47691_place_12;
var cr47691_place_17 = cr47691_place_13;
var cr47691_place_18 = cr47691_place_14;
var cr47691_place_19 = (function (){var G__47781 = cr47691_place_16;
var G__47782 = cr47691_place_17;
var G__47783 = cr47691_place_18;
var fexpr__47780 = cr47691_place_15;
return (fexpr__47780.cljs$core$IFn$_invoke$arity$3 ? fexpr__47780.cljs$core$IFn$_invoke$arity$3(G__47781,G__47782,G__47783) : fexpr__47780.call(null,G__47781,G__47782,G__47783));
})();
var cr47691_place_20 = (function (){var G__47785 = cr47691_place_5;
var G__47786 = cr47691_place_11;
var G__47787 = cr47691_place_19;
var fexpr__47784 = cr47691_place_4;
return (fexpr__47784.cljs$core$IFn$_invoke$arity$3 ? fexpr__47784.cljs$core$IFn$_invoke$arity$3(G__47785,G__47786,G__47787) : fexpr__47784.call(null,G__47785,G__47786,G__47787));
})();
(cr47691_state[(0)] = cr47691_block_1);

return missionary.core.park(cr47691_place_20);
}catch (e47754){var cr47691_exception = e47754;
(cr47691_state[(0)] = null);

throw cr47691_exception;
}});
var cr47691_block_1 = (function hyperfiddle$electric$pair_$_cr47691_block_1(cr47691_state){
try{var cr47691_place_21 = missionary.core.unpark();
(cr47691_state[(0)] = null);

return cr47691_place_21;
}catch (e47788){var cr47691_exception = e47788;
(cr47691_state[(0)] = null);

throw cr47691_exception;
}});
return cloroutine.impl.coroutine((function (){var G__47789 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__47789[(0)] = cr47691_block_0);

return G__47789;
})());
})(),missionary.core.sp_run);
});
hyperfiddle.electric.failure_QMARK_ = (function hyperfiddle$electric$failure_QMARK_(x){
return (x instanceof hyperfiddle.electric.Failure);
});
hyperfiddle.electric.task__GT_cp = (function hyperfiddle$electric$task__GT_cp(var_args){
var G__47793 = arguments.length;
switch (G__47793) {
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
return missionary.core.reductions.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,pending,cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr47794_block_0 = (function hyperfiddle$electric$cr47794_block_0(cr47794_state){
try{var cr47794_place_0 = _BANG_x;
(cr47794_state[(0)] = cr47794_block_1);

return missionary.core.park(cr47794_place_0);
}catch (e47797){var cr47794_exception = e47797;
(cr47794_state[(0)] = null);

throw cr47794_exception;
}});
var cr47794_block_1 = (function hyperfiddle$electric$cr47794_block_1(cr47794_state){
try{var cr47794_place_1 = missionary.core.unpark();
(cr47794_state[(0)] = null);

return cr47794_place_1;
}catch (e47798){var cr47794_exception = e47798;
(cr47794_state[(0)] = null);

throw cr47794_exception;
}});
return cloroutine.impl.coroutine((function (){var G__47799 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__47799[(0)] = cr47794_block_0);

return G__47799;
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
(hyperfiddle.electric.Clock.prototype.call = (function (unused__15562__auto__){
var self__ = this;
var self__ = this;
var G__47801 = (arguments.length - (1));
switch (G__47801) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.Clock.prototype.apply = (function (self__,args47800){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args47800)));
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
var len__5769__auto___47926 = arguments.length;
var i__5770__auto___47927 = (0);
while(true){
if((i__5770__auto___47927 < len__5769__auto___47926)){
args__5775__auto__.push((arguments[i__5770__auto___47927]));

var G__47928 = (i__5770__auto___47927 + (1));
i__5770__auto___47927 = G__47928;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return hyperfiddle.electric._get_system_time_ms.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(hyperfiddle.electric._get_system_time_ms.cljs$core$IFn$_invoke$arity$variadic = (function (p__47803){
var vec__47804 = p__47803;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47804,(0),null);
return Date.now();
}));

(hyperfiddle.electric._get_system_time_ms.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hyperfiddle.electric._get_system_time_ms.cljs$lang$applyTo = (function (seq47802){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47802));
}));

hyperfiddle.electric.dom_listener = (function hyperfiddle$electric$dom_listener(node,typ,f,opts){
node.addEventListener(typ,f,cljs.core.clj__GT_js(opts));

return (function (){
return node.removeEventListener(typ,f);
});
});
hyperfiddle.electric.listen_GT_ = (function hyperfiddle$electric$listen_GT_(var_args){
var G__47809 = arguments.length;
switch (G__47809) {
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
return hyperfiddle.electric.dom_listener(node,event_type,(function (p1__47807_SHARP_){
var temp__5808__auto__ = (keep_fn_BANG_.cljs$core$IFn$_invoke$arity$1 ? keep_fn_BANG_.cljs$core$IFn$_invoke$arity$1(p1__47807_SHARP_) : keep_fn_BANG_.call(null,p1__47807_SHARP_));
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
var G__47813 = arguments.length;
switch (G__47813) {
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
return missionary.core.reductions.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,init,cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr47814_block_11 = (function hyperfiddle$electric$cr47814_block_11(cr47814_state){
try{var cr47814_place_12 = (cr47814_state[(3)]);
(cr47814_state[(0)] = cr47814_block_12);

(cr47814_state[(3)] = null);

(cr47814_state[(1)] = cr47814_place_12);

return cr47814_state;
}catch (e47832){var cr47814_exception = e47832;
(cr47814_state[(0)] = cr47814_block_12);

(cr47814_state[(3)] = null);

(cr47814_state[(2)] = true);

(cr47814_state[(1)] = cr47814_exception);

return cr47814_state;
}});
var cr47814_block_1 = (function hyperfiddle$electric$cr47814_block_1(cr47814_state){
try{var cr47814_place_1 = missionary.core.unpark();
var cr47814_place_2 = null;
var cr47814_place_3 = false;
(cr47814_state[(0)] = cr47814_block_2);

(cr47814_state[(3)] = cr47814_place_1);

(cr47814_state[(1)] = cr47814_place_2);

(cr47814_state[(2)] = cr47814_place_3);

return cr47814_state;
}catch (e47833){var cr47814_exception = e47833;
(cr47814_state[(0)] = null);

throw cr47814_exception;
}});
var cr47814_block_2 = (function hyperfiddle$electric$cr47814_block_2(cr47814_state){
try{var cr47814_place_1 = (cr47814_state[(3)]);
var cr47814_place_4 = missionary.core.sleep;
var cr47814_place_5 = delay;
var cr47814_place_6 = cr47814_place_1;
var cr47814_place_7 = (function (){var G__47836 = cr47814_place_5;
var G__47837 = cr47814_place_6;
var fexpr__47835 = cr47814_place_4;
return (fexpr__47835.cljs$core$IFn$_invoke$arity$2 ? fexpr__47835.cljs$core$IFn$_invoke$arity$2(G__47836,G__47837) : fexpr__47835.call(null,G__47836,G__47837));
})();
(cr47814_state[(0)] = cr47814_block_3);

(cr47814_state[(3)] = null);

return missionary.core.park(cr47814_place_7);
}catch (e47834){var cr47814_exception = e47834;
(cr47814_state[(0)] = cr47814_block_4);

(cr47814_state[(3)] = null);

(cr47814_state[(1)] = cr47814_exception);

return cr47814_state;
}});
var cr47814_block_12 = (function hyperfiddle$electric$cr47814_block_12(cr47814_state){
try{var cr47814_place_2 = (cr47814_state[(1)]);
var cr47814_place_3 = (cr47814_state[(2)]);
var cr47814_place_22 = (cljs.core.truth_(cr47814_place_3)?(function(){throw cr47814_place_2})():cr47814_place_2);
(cr47814_state[(0)] = null);

(cr47814_state[(1)] = null);

(cr47814_state[(2)] = null);

return cr47814_place_22;
}catch (e47838){var cr47814_exception = e47838;
(cr47814_state[(0)] = null);

(cr47814_state[(1)] = null);

(cr47814_state[(2)] = null);

throw cr47814_exception;
}});
var cr47814_block_9 = (function hyperfiddle$electric$cr47814_block_9(cr47814_state){
try{var cr47814_place_2 = (cr47814_state[(1)]);
var cr47814_place_18 = cr47814_place_2;
var cr47814_place_19 = (1);
var cr47814_place_20 = missionary.core.none;
(cr47814_state[(0)] = cr47814_block_10);

return missionary.core.fork(cr47814_place_19,cr47814_place_20);
}catch (e47839){var cr47814_exception = e47839;
(cr47814_state[(0)] = cr47814_block_12);

(cr47814_state[(3)] = null);

(cr47814_state[(2)] = true);

(cr47814_state[(1)] = cr47814_exception);

return cr47814_state;
}});
var cr47814_block_4 = (function hyperfiddle$electric$cr47814_block_4(cr47814_state){
try{var cr47814_place_2 = (cr47814_state[(1)]);
var cr47814_place_9 = cr47814_place_2;
var cr47814_place_10 = missionary.Cancelled;
var cr47814_place_11 = (cr47814_place_9 instanceof cr47814_place_10);
var cr47814_place_12 = null;
if(cr47814_place_11){
(cr47814_state[(0)] = cr47814_block_9);

(cr47814_state[(3)] = cr47814_place_12);

return cr47814_state;
} else {
(cr47814_state[(0)] = cr47814_block_5);

(cr47814_state[(3)] = cr47814_place_12);

return cr47814_state;
}
}catch (e47840){var cr47814_exception = e47840;
(cr47814_state[(0)] = cr47814_block_12);

(cr47814_state[(2)] = true);

(cr47814_state[(1)] = cr47814_exception);

return cr47814_state;
}});
var cr47814_block_10 = (function hyperfiddle$electric$cr47814_block_10(cr47814_state){
try{var cr47814_place_21 = missionary.core.unpark();
(cr47814_state[(0)] = cr47814_block_11);

(cr47814_state[(3)] = cr47814_place_21);

return cr47814_state;
}catch (e47841){var cr47814_exception = e47841;
(cr47814_state[(0)] = cr47814_block_12);

(cr47814_state[(3)] = null);

(cr47814_state[(2)] = true);

(cr47814_state[(1)] = cr47814_exception);

return cr47814_state;
}});
var cr47814_block_6 = (function hyperfiddle$electric$cr47814_block_6(cr47814_state){
try{var cr47814_place_15 = null;
(cr47814_state[(0)] = cr47814_block_8);

(cr47814_state[(4)] = cr47814_place_15);

return cr47814_state;
}catch (e47842){var cr47814_exception = e47842;
(cr47814_state[(0)] = cr47814_block_12);

(cr47814_state[(4)] = null);

(cr47814_state[(3)] = null);

(cr47814_state[(2)] = true);

(cr47814_state[(1)] = cr47814_exception);

return cr47814_state;
}});
var cr47814_block_8 = (function hyperfiddle$electric$cr47814_block_8(cr47814_state){
try{var cr47814_place_14 = (cr47814_state[(4)]);
(cr47814_state[(0)] = cr47814_block_11);

(cr47814_state[(4)] = null);

(cr47814_state[(3)] = cr47814_place_14);

return cr47814_state;
}catch (e47843){var cr47814_exception = e47843;
(cr47814_state[(0)] = cr47814_block_12);

(cr47814_state[(4)] = null);

(cr47814_state[(3)] = null);

(cr47814_state[(2)] = true);

(cr47814_state[(1)] = cr47814_exception);

return cr47814_state;
}});
var cr47814_block_5 = (function hyperfiddle$electric$cr47814_block_5(cr47814_state){
try{var cr47814_place_13 = new cljs.core.Keyword(null,"else","else",-1508377146);
var cr47814_place_14 = null;
if(cljs.core.truth_(cr47814_place_13)){
(cr47814_state[(0)] = cr47814_block_7);

(cr47814_state[(3)] = null);

return cr47814_state;
} else {
(cr47814_state[(0)] = cr47814_block_6);

(cr47814_state[(4)] = cr47814_place_14);

return cr47814_state;
}
}catch (e47844){var cr47814_exception = e47844;
(cr47814_state[(0)] = cr47814_block_12);

(cr47814_state[(3)] = null);

(cr47814_state[(2)] = true);

(cr47814_state[(1)] = cr47814_exception);

return cr47814_state;
}});
var cr47814_block_3 = (function hyperfiddle$electric$cr47814_block_3(cr47814_state){
try{var cr47814_place_8 = missionary.core.unpark();
(cr47814_state[(0)] = cr47814_block_12);

(cr47814_state[(1)] = cr47814_place_8);

return cr47814_state;
}catch (e47845){var cr47814_exception = e47845;
(cr47814_state[(0)] = cr47814_block_4);

(cr47814_state[(1)] = cr47814_exception);

return cr47814_state;
}});
var cr47814_block_0 = (function hyperfiddle$electric$cr47814_block_0(cr47814_state){
try{var cr47814_place_0 = flow;
(cr47814_state[(0)] = cr47814_block_1);

return missionary.core.switch$(cr47814_place_0);
}catch (e47846){var cr47814_exception = e47846;
(cr47814_state[(0)] = null);

throw cr47814_exception;
}});
var cr47814_block_7 = (function hyperfiddle$electric$cr47814_block_7(cr47814_state){
try{var cr47814_place_2 = (cr47814_state[(1)]);
var cr47814_place_16 = cr47814_place_2;
var cr47814_place_17 = (function(){throw cr47814_place_16})();
(cr47814_state[(0)] = null);

(cr47814_state[(1)] = null);

(cr47814_state[(2)] = null);

return null;
}catch (e47847){var cr47814_exception = e47847;
(cr47814_state[(0)] = cr47814_block_12);

(cr47814_state[(2)] = true);

(cr47814_state[(1)] = cr47814_exception);

return cr47814_state;
}});
return cloroutine.impl.coroutine((function (){var G__47848 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((5));
(G__47848[(0)] = cr47814_block_0);

return G__47848;
})());
})(),missionary.core.ap_run));
}));

(hyperfiddle.electric.debounce_discreet.cljs$lang$maxFixedArity = 3);

hyperfiddle.electric.throttle = (function hyperfiddle$electric$throttle(dur,_GT_in){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr47849_block_5 = (function hyperfiddle$electric$throttle_$_cr47849_block_5(cr47849_state){
try{var cr47849_place_19 = missionary.core.unpark();
var cr47849_place_20 = (1);
var cr47849_place_21 = missionary.core.none;
(cr47849_state[(0)] = cr47849_block_6);

return missionary.core.fork(cr47849_place_20,cr47849_place_21);
}catch (e47870){var cr47849_exception = e47870;
(cr47849_state[(0)] = null);

(cr47849_state[(2)] = null);

throw cr47849_exception;
}});
var cr47849_block_4 = (function hyperfiddle$electric$throttle_$_cr47849_block_4(cr47849_state){
try{var cr47849_place_16 = missionary.core.sleep;
var cr47849_place_17 = dur;
var cr47849_place_18 = (function (){var G__47873 = cr47849_place_17;
var fexpr__47872 = cr47849_place_16;
return (fexpr__47872.cljs$core$IFn$_invoke$arity$1 ? fexpr__47872.cljs$core$IFn$_invoke$arity$1(G__47873) : fexpr__47872.call(null,G__47873));
})();
(cr47849_state[(0)] = cr47849_block_5);

return missionary.core.park(cr47849_place_18);
}catch (e47871){var cr47849_exception = e47871;
(cr47849_state[(0)] = null);

(cr47849_state[(2)] = null);

throw cr47849_exception;
}});
var cr47849_block_3 = (function hyperfiddle$electric$throttle_$_cr47849_block_3(cr47849_state){
try{var cr47849_place_5 = (cr47849_state[(1)]);
var cr47849_place_15 = cr47849_place_5;
(cr47849_state[(0)] = cr47849_block_8);

(cr47849_state[(1)] = null);

(cr47849_state[(2)] = cr47849_place_15);

return cr47849_state;
}catch (e47874){var cr47849_exception = e47874;
(cr47849_state[(0)] = null);

(cr47849_state[(1)] = null);

(cr47849_state[(2)] = null);

throw cr47849_exception;
}});
var cr47849_block_8 = (function hyperfiddle$electric$throttle_$_cr47849_block_8(cr47849_state){
try{var cr47849_place_14 = (cr47849_state[(2)]);
(cr47849_state[(0)] = null);

(cr47849_state[(2)] = null);

return cr47849_place_14;
}catch (e47875){var cr47849_exception = e47875;
(cr47849_state[(0)] = null);

(cr47849_state[(2)] = null);

throw cr47849_exception;
}});
var cr47849_block_2 = (function hyperfiddle$electric$throttle_$_cr47849_block_2(cr47849_state){
try{var cr47849_place_12 = missionary.core.unpark();
var cr47849_place_13 = cr47849_place_12;
var cr47849_place_14 = null;
var G__47877 = cr47849_place_13;
switch (G__47877) {
case (0):
(cr47849_state[(0)] = cr47849_block_3);

(cr47849_state[(2)] = cr47849_place_14);

return cr47849_state;

break;
case (1):
(cr47849_state[(0)] = cr47849_block_4);

(cr47849_state[(1)] = null);

(cr47849_state[(2)] = cr47849_place_14);

return cr47849_state;

break;
default:
(cr47849_state[(0)] = cr47849_block_7);

(cr47849_state[(1)] = null);

(cr47849_state[(1)] = cr47849_place_12);

return cr47849_state;

}
}catch (e47876){var cr47849_exception = e47876;
(cr47849_state[(0)] = null);

(cr47849_state[(1)] = null);

throw cr47849_exception;
}});
var cr47849_block_1 = (function hyperfiddle$electric$throttle_$_cr47849_block_1(cr47849_state){
try{var cr47849_place_5 = missionary.core.unpark();
var cr47849_place_6 = (1);
var cr47849_place_7 = missionary.core.seed;
var cr47849_place_8 = cljs.core.range;
var cr47849_place_9 = (2);
var cr47849_place_10 = (function (){var G__47880 = cr47849_place_9;
var fexpr__47879 = cr47849_place_8;
return (fexpr__47879.cljs$core$IFn$_invoke$arity$1 ? fexpr__47879.cljs$core$IFn$_invoke$arity$1(G__47880) : fexpr__47879.call(null,G__47880));
})();
var cr47849_place_11 = (function (){var G__47882 = cr47849_place_10;
var fexpr__47881 = cr47849_place_7;
return (fexpr__47881.cljs$core$IFn$_invoke$arity$1 ? fexpr__47881.cljs$core$IFn$_invoke$arity$1(G__47882) : fexpr__47881.call(null,G__47882));
})();
(cr47849_state[(0)] = cr47849_block_2);

(cr47849_state[(1)] = cr47849_place_5);

return missionary.core.fork(cr47849_place_6,cr47849_place_11);
}catch (e47878){var cr47849_exception = e47878;
(cr47849_state[(0)] = null);

throw cr47849_exception;
}});
var cr47849_block_7 = (function hyperfiddle$electric$throttle_$_cr47849_block_7(cr47849_state){
try{var cr47849_place_12 = (cr47849_state[(1)]);
var cr47849_place_23 = "No matching clause: ";
var cr47849_place_24 = cr47849_place_12;
var cr47849_place_25 = [cr47849_place_23,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr47849_place_24)].join('');
var cr47849_place_26 = (new Error(cr47849_place_25));
var cr47849_place_27 = (function(){throw cr47849_place_26})();
(cr47849_state[(0)] = null);

(cr47849_state[(1)] = null);

return null;
}catch (e47883){var cr47849_exception = e47883;
(cr47849_state[(0)] = null);

(cr47849_state[(1)] = null);

throw cr47849_exception;
}});
var cr47849_block_6 = (function hyperfiddle$electric$throttle_$_cr47849_block_6(cr47849_state){
try{var cr47849_place_22 = missionary.core.unpark();
(cr47849_state[(0)] = cr47849_block_8);

(cr47849_state[(2)] = cr47849_place_22);

return cr47849_state;
}catch (e47884){var cr47849_exception = e47884;
(cr47849_state[(0)] = null);

(cr47849_state[(2)] = null);

throw cr47849_exception;
}});
var cr47849_block_0 = (function hyperfiddle$electric$throttle_$_cr47849_block_0(cr47849_state){
try{var cr47849_place_0 = (1);
var cr47849_place_1 = missionary.core.relieve;
var cr47849_place_2 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr47849_place_3 = _GT_in;
var cr47849_place_4 = (function (){var G__47887 = cr47849_place_2;
var G__47888 = cr47849_place_3;
var fexpr__47886 = cr47849_place_1;
return (fexpr__47886.cljs$core$IFn$_invoke$arity$2 ? fexpr__47886.cljs$core$IFn$_invoke$arity$2(G__47887,G__47888) : fexpr__47886.call(null,G__47887,G__47888));
})();
(cr47849_state[(0)] = cr47849_block_1);

return missionary.core.fork(cr47849_place_0,cr47849_place_4);
}catch (e47885){var cr47849_exception = e47885;
(cr47849_state[(0)] = null);

throw cr47849_exception;
}});
return cloroutine.impl.coroutine((function (){var G__47889 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((3));
(G__47889[(0)] = cr47849_block_0);

return G__47889;
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
