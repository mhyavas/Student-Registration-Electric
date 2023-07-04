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
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr47552_block_0 = (function hyperfiddle$electric$pair_$_cr47552_block_0(cr47552_state){
try{var cr47552_place_0 = missionary.core.dfv;
var cr47552_place_1 = (function (){var fexpr__47616 = cr47552_place_0;
return (fexpr__47616.cljs$core$IFn$_invoke$arity$0 ? fexpr__47616.cljs$core$IFn$_invoke$arity$0() : fexpr__47616.call(null));
})();
var cr47552_place_2 = missionary.core.dfv;
var cr47552_place_3 = (function (){var fexpr__47617 = cr47552_place_2;
return (fexpr__47617.cljs$core$IFn$_invoke$arity$0 ? fexpr__47617.cljs$core$IFn$_invoke$arity$0() : fexpr__47617.call(null));
})();
var cr47552_place_4 = missionary.core.join;
var cr47552_place_5 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr47552_place_6 = (function (x){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr47555_block_0 = (function (cr47555_state){
try{var cr47555_place_0 = cr47552_place_1;
(cr47555_state[(0)] = cr47555_block_1);

return missionary.core.park(cr47555_place_0);
}catch (e47622){var e47561 = e47622;
var cr47555_exception = e47561;
(cr47555_state[(0)] = null);

throw cr47555_exception;
}});
var cr47555_block_1 = (function (cr47555_state){
try{var cr47555_place_1 = missionary.core.unpark();
var cr47555_place_2 = cr47555_place_1;
var cr47555_place_3 = x;
var cr47555_place_4 = (function (){var G__47564 = cr47555_place_3;
var fexpr__47563 = cr47555_place_2;
var G__47625 = G__47564;
var fexpr__47624 = fexpr__47563;
return (fexpr__47624.cljs$core$IFn$_invoke$arity$1 ? fexpr__47624.cljs$core$IFn$_invoke$arity$1(G__47625) : fexpr__47624.call(null,G__47625));
})();
(cr47555_state[(0)] = null);

return cr47555_place_4;
}catch (e47623){var e47562 = e47623;
var cr47555_exception = e47562;
(cr47555_state[(0)] = null);

throw cr47555_exception;
}});
return cloroutine.impl.coroutine((function (){var G__47565 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__47565[(0)] = cr47555_block_0);

return G__47565;
})());
})(),missionary.core.sp_run);
});
var cr47552_place_7 = (function (_BANG_){
var G__47627_47780 = _BANG_;
var fexpr__47626_47781 = cr47552_place_3;
(fexpr__47626_47781.cljs$core$IFn$_invoke$arity$1 ? fexpr__47626_47781.cljs$core$IFn$_invoke$arity$1(G__47627_47780) : fexpr__47626_47781.call(null,G__47627_47780));

return (function (){
return cljs.core.List.EMPTY;
});
});
var cr47552_place_8 = s;
var cr47552_place_9 = cr47552_place_6;
var cr47552_place_10 = cr47552_place_7;
var cr47552_place_11 = (function (){var G__47629 = cr47552_place_9;
var G__47630 = cr47552_place_10;
var fexpr__47628 = cr47552_place_8;
return (fexpr__47628.cljs$core$IFn$_invoke$arity$2 ? fexpr__47628.cljs$core$IFn$_invoke$arity$2(G__47629,G__47630) : fexpr__47628.call(null,G__47629,G__47630));
})();
var cr47552_place_12 = (function (x){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr47569_block_0 = (function (cr47569_state){
try{var cr47569_place_0 = cr47552_place_3;
(cr47569_state[(0)] = cr47569_block_1);

return missionary.core.park(cr47569_place_0);
}catch (e47635){var e47575 = e47635;
var cr47569_exception = e47575;
(cr47569_state[(0)] = null);

throw cr47569_exception;
}});
var cr47569_block_1 = (function (cr47569_state){
try{var cr47569_place_1 = missionary.core.unpark();
var cr47569_place_2 = cr47569_place_1;
var cr47569_place_3 = x;
var cr47569_place_4 = (function (){var G__47578 = cr47569_place_3;
var fexpr__47577 = cr47569_place_2;
var G__47638 = G__47578;
var fexpr__47637 = fexpr__47577;
return (fexpr__47637.cljs$core$IFn$_invoke$arity$1 ? fexpr__47637.cljs$core$IFn$_invoke$arity$1(G__47638) : fexpr__47637.call(null,G__47638));
})();
(cr47569_state[(0)] = null);

return cr47569_place_4;
}catch (e47636){var e47576 = e47636;
var cr47569_exception = e47576;
(cr47569_state[(0)] = null);

throw cr47569_exception;
}});
return cloroutine.impl.coroutine((function (){var G__47579 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__47579[(0)] = cr47569_block_0);

return G__47579;
})());
})(),missionary.core.sp_run);
});
var cr47552_place_13 = (function (_BANG_){
var G__47640_47782 = _BANG_;
var fexpr__47639_47783 = cr47552_place_1;
(fexpr__47639_47783.cljs$core$IFn$_invoke$arity$1 ? fexpr__47639_47783.cljs$core$IFn$_invoke$arity$1(G__47640_47782) : fexpr__47639_47783.call(null,G__47640_47782));

return (function (){
return cljs.core.List.EMPTY;
});
});
var cr47552_place_14 = (function (p1__47551_SHARP_){
throw p1__47551_SHARP_;
});
var cr47552_place_15 = c;
var cr47552_place_16 = cr47552_place_12;
var cr47552_place_17 = cr47552_place_13;
var cr47552_place_18 = cr47552_place_14;
var cr47552_place_19 = (function (){var G__47642 = cr47552_place_16;
var G__47643 = cr47552_place_17;
var G__47644 = cr47552_place_18;
var fexpr__47641 = cr47552_place_15;
return (fexpr__47641.cljs$core$IFn$_invoke$arity$3 ? fexpr__47641.cljs$core$IFn$_invoke$arity$3(G__47642,G__47643,G__47644) : fexpr__47641.call(null,G__47642,G__47643,G__47644));
})();
var cr47552_place_20 = (function (){var G__47646 = cr47552_place_5;
var G__47647 = cr47552_place_11;
var G__47648 = cr47552_place_19;
var fexpr__47645 = cr47552_place_4;
return (fexpr__47645.cljs$core$IFn$_invoke$arity$3 ? fexpr__47645.cljs$core$IFn$_invoke$arity$3(G__47646,G__47647,G__47648) : fexpr__47645.call(null,G__47646,G__47647,G__47648));
})();
(cr47552_state[(0)] = cr47552_block_1);

return missionary.core.park(cr47552_place_20);
}catch (e47615){var cr47552_exception = e47615;
(cr47552_state[(0)] = null);

throw cr47552_exception;
}});
var cr47552_block_1 = (function hyperfiddle$electric$pair_$_cr47552_block_1(cr47552_state){
try{var cr47552_place_21 = missionary.core.unpark();
(cr47552_state[(0)] = null);

return cr47552_place_21;
}catch (e47649){var cr47552_exception = e47649;
(cr47552_state[(0)] = null);

throw cr47552_exception;
}});
return cloroutine.impl.coroutine((function (){var G__47650 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__47650[(0)] = cr47552_block_0);

return G__47650;
})());
})(),missionary.core.sp_run);
});
hyperfiddle.electric.failure_QMARK_ = (function hyperfiddle$electric$failure_QMARK_(x){
return (x instanceof hyperfiddle.electric.Failure);
});
hyperfiddle.electric.task__GT_cp = (function hyperfiddle$electric$task__GT_cp(var_args){
var G__47653 = arguments.length;
switch (G__47653) {
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
return missionary.core.reductions.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,pending,cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr47654_block_0 = (function hyperfiddle$electric$cr47654_block_0(cr47654_state){
try{var cr47654_place_0 = _BANG_x;
(cr47654_state[(0)] = cr47654_block_1);

return missionary.core.park(cr47654_place_0);
}catch (e47657){var cr47654_exception = e47657;
(cr47654_state[(0)] = null);

throw cr47654_exception;
}});
var cr47654_block_1 = (function hyperfiddle$electric$cr47654_block_1(cr47654_state){
try{var cr47654_place_1 = missionary.core.unpark();
(cr47654_state[(0)] = null);

return cr47654_place_1;
}catch (e47658){var cr47654_exception = e47658;
(cr47654_state[(0)] = null);

throw cr47654_exception;
}});
return cloroutine.impl.coroutine((function (){var G__47659 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__47659[(0)] = cr47654_block_0);

return G__47659;
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
(hyperfiddle.electric.Clock.prototype.call = (function (unused__13414__auto__){
var self__ = this;
var self__ = this;
var G__47661 = (arguments.length - (1));
switch (G__47661) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.Clock.prototype.apply = (function (self__,args47660){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args47660)));
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
var len__5769__auto___47786 = arguments.length;
var i__5770__auto___47787 = (0);
while(true){
if((i__5770__auto___47787 < len__5769__auto___47786)){
args__5775__auto__.push((arguments[i__5770__auto___47787]));

var G__47788 = (i__5770__auto___47787 + (1));
i__5770__auto___47787 = G__47788;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return hyperfiddle.electric._get_system_time_ms.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(hyperfiddle.electric._get_system_time_ms.cljs$core$IFn$_invoke$arity$variadic = (function (p__47663){
var vec__47664 = p__47663;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47664,(0),null);
return Date.now();
}));

(hyperfiddle.electric._get_system_time_ms.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hyperfiddle.electric._get_system_time_ms.cljs$lang$applyTo = (function (seq47662){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47662));
}));

hyperfiddle.electric.dom_listener = (function hyperfiddle$electric$dom_listener(node,typ,f,opts){
node.addEventListener(typ,f,cljs.core.clj__GT_js(opts));

return (function (){
return node.removeEventListener(typ,f);
});
});
hyperfiddle.electric.listen_GT_ = (function hyperfiddle$electric$listen_GT_(var_args){
var G__47669 = arguments.length;
switch (G__47669) {
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
return hyperfiddle.electric.dom_listener(node,event_type,(function (p1__47667_SHARP_){
var temp__5808__auto__ = (keep_fn_BANG_.cljs$core$IFn$_invoke$arity$1 ? keep_fn_BANG_.cljs$core$IFn$_invoke$arity$1(p1__47667_SHARP_) : keep_fn_BANG_.call(null,p1__47667_SHARP_));
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
var G__47673 = arguments.length;
switch (G__47673) {
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
return missionary.core.reductions.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,init,cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr47674_block_1 = (function hyperfiddle$electric$cr47674_block_1(cr47674_state){
try{var cr47674_place_1 = missionary.core.unpark();
var cr47674_place_2 = null;
var cr47674_place_3 = false;
(cr47674_state[(0)] = cr47674_block_2);

(cr47674_state[(1)] = cr47674_place_1);

(cr47674_state[(3)] = cr47674_place_2);

(cr47674_state[(2)] = cr47674_place_3);

return cr47674_state;
}catch (e47692){var cr47674_exception = e47692;
(cr47674_state[(0)] = null);

throw cr47674_exception;
}});
var cr47674_block_7 = (function hyperfiddle$electric$cr47674_block_7(cr47674_state){
try{var cr47674_place_2 = (cr47674_state[(3)]);
var cr47674_place_16 = cr47674_place_2;
var cr47674_place_17 = (function(){throw cr47674_place_16})();
(cr47674_state[(0)] = null);

(cr47674_state[(2)] = null);

(cr47674_state[(3)] = null);

return null;
}catch (e47693){var cr47674_exception = e47693;
(cr47674_state[(0)] = cr47674_block_12);

(cr47674_state[(2)] = true);

(cr47674_state[(3)] = cr47674_exception);

return cr47674_state;
}});
var cr47674_block_12 = (function hyperfiddle$electric$cr47674_block_12(cr47674_state){
try{var cr47674_place_3 = (cr47674_state[(2)]);
var cr47674_place_2 = (cr47674_state[(3)]);
var cr47674_place_22 = (cljs.core.truth_(cr47674_place_3)?(function(){throw cr47674_place_2})():cr47674_place_2);
(cr47674_state[(0)] = null);

(cr47674_state[(2)] = null);

(cr47674_state[(3)] = null);

return cr47674_place_22;
}catch (e47694){var cr47674_exception = e47694;
(cr47674_state[(0)] = null);

(cr47674_state[(2)] = null);

(cr47674_state[(3)] = null);

throw cr47674_exception;
}});
var cr47674_block_8 = (function hyperfiddle$electric$cr47674_block_8(cr47674_state){
try{var cr47674_place_14 = (cr47674_state[(4)]);
(cr47674_state[(0)] = cr47674_block_11);

(cr47674_state[(4)] = null);

(cr47674_state[(1)] = cr47674_place_14);

return cr47674_state;
}catch (e47695){var cr47674_exception = e47695;
(cr47674_state[(0)] = cr47674_block_12);

(cr47674_state[(1)] = null);

(cr47674_state[(4)] = null);

(cr47674_state[(2)] = true);

(cr47674_state[(3)] = cr47674_exception);

return cr47674_state;
}});
var cr47674_block_11 = (function hyperfiddle$electric$cr47674_block_11(cr47674_state){
try{var cr47674_place_12 = (cr47674_state[(1)]);
(cr47674_state[(0)] = cr47674_block_12);

(cr47674_state[(1)] = null);

(cr47674_state[(3)] = cr47674_place_12);

return cr47674_state;
}catch (e47696){var cr47674_exception = e47696;
(cr47674_state[(0)] = cr47674_block_12);

(cr47674_state[(1)] = null);

(cr47674_state[(2)] = true);

(cr47674_state[(3)] = cr47674_exception);

return cr47674_state;
}});
var cr47674_block_3 = (function hyperfiddle$electric$cr47674_block_3(cr47674_state){
try{var cr47674_place_8 = missionary.core.unpark();
(cr47674_state[(0)] = cr47674_block_12);

(cr47674_state[(3)] = cr47674_place_8);

return cr47674_state;
}catch (e47697){var cr47674_exception = e47697;
(cr47674_state[(0)] = cr47674_block_4);

(cr47674_state[(3)] = cr47674_exception);

return cr47674_state;
}});
var cr47674_block_5 = (function hyperfiddle$electric$cr47674_block_5(cr47674_state){
try{var cr47674_place_13 = new cljs.core.Keyword(null,"else","else",-1508377146);
var cr47674_place_14 = null;
if(cljs.core.truth_(cr47674_place_13)){
(cr47674_state[(0)] = cr47674_block_7);

(cr47674_state[(1)] = null);

return cr47674_state;
} else {
(cr47674_state[(0)] = cr47674_block_6);

(cr47674_state[(4)] = cr47674_place_14);

return cr47674_state;
}
}catch (e47698){var cr47674_exception = e47698;
(cr47674_state[(0)] = cr47674_block_12);

(cr47674_state[(1)] = null);

(cr47674_state[(2)] = true);

(cr47674_state[(3)] = cr47674_exception);

return cr47674_state;
}});
var cr47674_block_9 = (function hyperfiddle$electric$cr47674_block_9(cr47674_state){
try{var cr47674_place_2 = (cr47674_state[(3)]);
var cr47674_place_18 = cr47674_place_2;
var cr47674_place_19 = (1);
var cr47674_place_20 = missionary.core.none;
(cr47674_state[(0)] = cr47674_block_10);

return missionary.core.fork(cr47674_place_19,cr47674_place_20);
}catch (e47699){var cr47674_exception = e47699;
(cr47674_state[(0)] = cr47674_block_12);

(cr47674_state[(1)] = null);

(cr47674_state[(2)] = true);

(cr47674_state[(3)] = cr47674_exception);

return cr47674_state;
}});
var cr47674_block_10 = (function hyperfiddle$electric$cr47674_block_10(cr47674_state){
try{var cr47674_place_21 = missionary.core.unpark();
(cr47674_state[(0)] = cr47674_block_11);

(cr47674_state[(1)] = cr47674_place_21);

return cr47674_state;
}catch (e47700){var cr47674_exception = e47700;
(cr47674_state[(0)] = cr47674_block_12);

(cr47674_state[(1)] = null);

(cr47674_state[(2)] = true);

(cr47674_state[(3)] = cr47674_exception);

return cr47674_state;
}});
var cr47674_block_2 = (function hyperfiddle$electric$cr47674_block_2(cr47674_state){
try{var cr47674_place_1 = (cr47674_state[(1)]);
var cr47674_place_4 = missionary.core.sleep;
var cr47674_place_5 = delay;
var cr47674_place_6 = cr47674_place_1;
var cr47674_place_7 = (function (){var G__47703 = cr47674_place_5;
var G__47704 = cr47674_place_6;
var fexpr__47702 = cr47674_place_4;
return (fexpr__47702.cljs$core$IFn$_invoke$arity$2 ? fexpr__47702.cljs$core$IFn$_invoke$arity$2(G__47703,G__47704) : fexpr__47702.call(null,G__47703,G__47704));
})();
(cr47674_state[(0)] = cr47674_block_3);

(cr47674_state[(1)] = null);

return missionary.core.park(cr47674_place_7);
}catch (e47701){var cr47674_exception = e47701;
(cr47674_state[(0)] = cr47674_block_4);

(cr47674_state[(1)] = null);

(cr47674_state[(3)] = cr47674_exception);

return cr47674_state;
}});
var cr47674_block_6 = (function hyperfiddle$electric$cr47674_block_6(cr47674_state){
try{var cr47674_place_15 = null;
(cr47674_state[(0)] = cr47674_block_8);

(cr47674_state[(4)] = cr47674_place_15);

return cr47674_state;
}catch (e47705){var cr47674_exception = e47705;
(cr47674_state[(0)] = cr47674_block_12);

(cr47674_state[(1)] = null);

(cr47674_state[(4)] = null);

(cr47674_state[(2)] = true);

(cr47674_state[(3)] = cr47674_exception);

return cr47674_state;
}});
var cr47674_block_4 = (function hyperfiddle$electric$cr47674_block_4(cr47674_state){
try{var cr47674_place_2 = (cr47674_state[(3)]);
var cr47674_place_9 = cr47674_place_2;
var cr47674_place_10 = missionary.Cancelled;
var cr47674_place_11 = (cr47674_place_9 instanceof cr47674_place_10);
var cr47674_place_12 = null;
if(cr47674_place_11){
(cr47674_state[(0)] = cr47674_block_9);

(cr47674_state[(1)] = cr47674_place_12);

return cr47674_state;
} else {
(cr47674_state[(0)] = cr47674_block_5);

(cr47674_state[(1)] = cr47674_place_12);

return cr47674_state;
}
}catch (e47706){var cr47674_exception = e47706;
(cr47674_state[(0)] = cr47674_block_12);

(cr47674_state[(2)] = true);

(cr47674_state[(3)] = cr47674_exception);

return cr47674_state;
}});
var cr47674_block_0 = (function hyperfiddle$electric$cr47674_block_0(cr47674_state){
try{var cr47674_place_0 = flow;
(cr47674_state[(0)] = cr47674_block_1);

return missionary.core.switch$(cr47674_place_0);
}catch (e47707){var cr47674_exception = e47707;
(cr47674_state[(0)] = null);

throw cr47674_exception;
}});
return cloroutine.impl.coroutine((function (){var G__47708 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((5));
(G__47708[(0)] = cr47674_block_0);

return G__47708;
})());
})(),missionary.core.ap_run));
}));

(hyperfiddle.electric.debounce_discreet.cljs$lang$maxFixedArity = 3);

hyperfiddle.electric.throttle = (function hyperfiddle$electric$throttle(dur,_GT_in){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr47709_block_0 = (function hyperfiddle$electric$throttle_$_cr47709_block_0(cr47709_state){
try{var cr47709_place_0 = (1);
var cr47709_place_1 = missionary.core.relieve;
var cr47709_place_2 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr47709_place_3 = _GT_in;
var cr47709_place_4 = (function (){var G__47732 = cr47709_place_2;
var G__47733 = cr47709_place_3;
var fexpr__47731 = cr47709_place_1;
return (fexpr__47731.cljs$core$IFn$_invoke$arity$2 ? fexpr__47731.cljs$core$IFn$_invoke$arity$2(G__47732,G__47733) : fexpr__47731.call(null,G__47732,G__47733));
})();
(cr47709_state[(0)] = cr47709_block_1);

return missionary.core.fork(cr47709_place_0,cr47709_place_4);
}catch (e47730){var cr47709_exception = e47730;
(cr47709_state[(0)] = null);

throw cr47709_exception;
}});
var cr47709_block_1 = (function hyperfiddle$electric$throttle_$_cr47709_block_1(cr47709_state){
try{var cr47709_place_5 = missionary.core.unpark();
var cr47709_place_6 = (1);
var cr47709_place_7 = missionary.core.seed;
var cr47709_place_8 = cljs.core.range;
var cr47709_place_9 = (2);
var cr47709_place_10 = (function (){var G__47736 = cr47709_place_9;
var fexpr__47735 = cr47709_place_8;
return (fexpr__47735.cljs$core$IFn$_invoke$arity$1 ? fexpr__47735.cljs$core$IFn$_invoke$arity$1(G__47736) : fexpr__47735.call(null,G__47736));
})();
var cr47709_place_11 = (function (){var G__47738 = cr47709_place_10;
var fexpr__47737 = cr47709_place_7;
return (fexpr__47737.cljs$core$IFn$_invoke$arity$1 ? fexpr__47737.cljs$core$IFn$_invoke$arity$1(G__47738) : fexpr__47737.call(null,G__47738));
})();
(cr47709_state[(0)] = cr47709_block_2);

(cr47709_state[(1)] = cr47709_place_5);

return missionary.core.fork(cr47709_place_6,cr47709_place_11);
}catch (e47734){var cr47709_exception = e47734;
(cr47709_state[(0)] = null);

throw cr47709_exception;
}});
var cr47709_block_3 = (function hyperfiddle$electric$throttle_$_cr47709_block_3(cr47709_state){
try{var cr47709_place_5 = (cr47709_state[(1)]);
var cr47709_place_15 = cr47709_place_5;
(cr47709_state[(0)] = cr47709_block_8);

(cr47709_state[(1)] = null);

(cr47709_state[(2)] = cr47709_place_15);

return cr47709_state;
}catch (e47739){var cr47709_exception = e47739;
(cr47709_state[(0)] = null);

(cr47709_state[(1)] = null);

(cr47709_state[(2)] = null);

throw cr47709_exception;
}});
var cr47709_block_6 = (function hyperfiddle$electric$throttle_$_cr47709_block_6(cr47709_state){
try{var cr47709_place_22 = missionary.core.unpark();
(cr47709_state[(0)] = cr47709_block_8);

(cr47709_state[(2)] = cr47709_place_22);

return cr47709_state;
}catch (e47740){var cr47709_exception = e47740;
(cr47709_state[(0)] = null);

(cr47709_state[(2)] = null);

throw cr47709_exception;
}});
var cr47709_block_8 = (function hyperfiddle$electric$throttle_$_cr47709_block_8(cr47709_state){
try{var cr47709_place_14 = (cr47709_state[(2)]);
(cr47709_state[(0)] = null);

(cr47709_state[(2)] = null);

return cr47709_place_14;
}catch (e47741){var cr47709_exception = e47741;
(cr47709_state[(0)] = null);

(cr47709_state[(2)] = null);

throw cr47709_exception;
}});
var cr47709_block_4 = (function hyperfiddle$electric$throttle_$_cr47709_block_4(cr47709_state){
try{var cr47709_place_16 = missionary.core.sleep;
var cr47709_place_17 = dur;
var cr47709_place_18 = (function (){var G__47744 = cr47709_place_17;
var fexpr__47743 = cr47709_place_16;
return (fexpr__47743.cljs$core$IFn$_invoke$arity$1 ? fexpr__47743.cljs$core$IFn$_invoke$arity$1(G__47744) : fexpr__47743.call(null,G__47744));
})();
(cr47709_state[(0)] = cr47709_block_5);

return missionary.core.park(cr47709_place_18);
}catch (e47742){var cr47709_exception = e47742;
(cr47709_state[(0)] = null);

(cr47709_state[(2)] = null);

throw cr47709_exception;
}});
var cr47709_block_5 = (function hyperfiddle$electric$throttle_$_cr47709_block_5(cr47709_state){
try{var cr47709_place_19 = missionary.core.unpark();
var cr47709_place_20 = (1);
var cr47709_place_21 = missionary.core.none;
(cr47709_state[(0)] = cr47709_block_6);

return missionary.core.fork(cr47709_place_20,cr47709_place_21);
}catch (e47745){var cr47709_exception = e47745;
(cr47709_state[(0)] = null);

(cr47709_state[(2)] = null);

throw cr47709_exception;
}});
var cr47709_block_7 = (function hyperfiddle$electric$throttle_$_cr47709_block_7(cr47709_state){
try{var cr47709_place_12 = (cr47709_state[(1)]);
var cr47709_place_23 = "No matching clause: ";
var cr47709_place_24 = cr47709_place_12;
var cr47709_place_25 = [cr47709_place_23,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr47709_place_24)].join('');
var cr47709_place_26 = (new Error(cr47709_place_25));
var cr47709_place_27 = (function(){throw cr47709_place_26})();
(cr47709_state[(0)] = null);

(cr47709_state[(1)] = null);

return null;
}catch (e47746){var cr47709_exception = e47746;
(cr47709_state[(0)] = null);

(cr47709_state[(1)] = null);

throw cr47709_exception;
}});
var cr47709_block_2 = (function hyperfiddle$electric$throttle_$_cr47709_block_2(cr47709_state){
try{var cr47709_place_12 = missionary.core.unpark();
var cr47709_place_13 = cr47709_place_12;
var cr47709_place_14 = null;
var G__47748 = cr47709_place_13;
switch (G__47748) {
case (0):
(cr47709_state[(0)] = cr47709_block_3);

(cr47709_state[(2)] = cr47709_place_14);

return cr47709_state;

break;
case (1):
(cr47709_state[(0)] = cr47709_block_4);

(cr47709_state[(1)] = null);

(cr47709_state[(2)] = cr47709_place_14);

return cr47709_state;

break;
default:
(cr47709_state[(0)] = cr47709_block_7);

(cr47709_state[(1)] = null);

(cr47709_state[(1)] = cr47709_place_12);

return cr47709_state;

}
}catch (e47747){var cr47709_exception = e47747;
(cr47709_state[(0)] = null);

(cr47709_state[(1)] = null);

throw cr47709_exception;
}});
return cloroutine.impl.coroutine((function (){var G__47749 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((3));
(G__47749[(0)] = cr47709_block_0);

return G__47749;
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
