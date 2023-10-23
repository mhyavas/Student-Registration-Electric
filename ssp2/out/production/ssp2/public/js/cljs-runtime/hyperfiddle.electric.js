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
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr47557_block_0 = (function hyperfiddle$electric$pair_$_cr47557_block_0(cr47557_state){
try{var cr47557_place_0 = missionary.core.dfv;
var cr47557_place_1 = (function (){var fexpr__47621 = cr47557_place_0;
return (fexpr__47621.cljs$core$IFn$_invoke$arity$0 ? fexpr__47621.cljs$core$IFn$_invoke$arity$0() : fexpr__47621.call(null));
})();
var cr47557_place_2 = missionary.core.dfv;
var cr47557_place_3 = (function (){var fexpr__47622 = cr47557_place_2;
return (fexpr__47622.cljs$core$IFn$_invoke$arity$0 ? fexpr__47622.cljs$core$IFn$_invoke$arity$0() : fexpr__47622.call(null));
})();
var cr47557_place_4 = missionary.core.join;
var cr47557_place_5 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr47557_place_6 = (function (x){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr47560_block_0 = (function (cr47560_state){
try{var cr47560_place_0 = cr47557_place_1;
(cr47560_state[(0)] = cr47560_block_1);

return missionary.core.park(cr47560_place_0);
}catch (e47627){var e47566 = e47627;
var cr47560_exception = e47566;
(cr47560_state[(0)] = null);

throw cr47560_exception;
}});
var cr47560_block_1 = (function (cr47560_state){
try{var cr47560_place_1 = missionary.core.unpark();
var cr47560_place_2 = cr47560_place_1;
var cr47560_place_3 = x;
var cr47560_place_4 = (function (){var G__47569 = cr47560_place_3;
var fexpr__47568 = cr47560_place_2;
var G__47630 = G__47569;
var fexpr__47629 = fexpr__47568;
return (fexpr__47629.cljs$core$IFn$_invoke$arity$1 ? fexpr__47629.cljs$core$IFn$_invoke$arity$1(G__47630) : fexpr__47629.call(null,G__47630));
})();
(cr47560_state[(0)] = null);

return cr47560_place_4;
}catch (e47628){var e47567 = e47628;
var cr47560_exception = e47567;
(cr47560_state[(0)] = null);

throw cr47560_exception;
}});
return cloroutine.impl.coroutine((function (){var G__47570 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__47570[(0)] = cr47560_block_0);

return G__47570;
})());
})(),missionary.core.sp_run);
});
var cr47557_place_7 = (function (_BANG_){
var G__47632_47755 = _BANG_;
var fexpr__47631_47756 = cr47557_place_3;
(fexpr__47631_47756.cljs$core$IFn$_invoke$arity$1 ? fexpr__47631_47756.cljs$core$IFn$_invoke$arity$1(G__47632_47755) : fexpr__47631_47756.call(null,G__47632_47755));

return (function (){
return cljs.core.List.EMPTY;
});
});
var cr47557_place_8 = s;
var cr47557_place_9 = cr47557_place_6;
var cr47557_place_10 = cr47557_place_7;
var cr47557_place_11 = (function (){var G__47634 = cr47557_place_9;
var G__47635 = cr47557_place_10;
var fexpr__47633 = cr47557_place_8;
return (fexpr__47633.cljs$core$IFn$_invoke$arity$2 ? fexpr__47633.cljs$core$IFn$_invoke$arity$2(G__47634,G__47635) : fexpr__47633.call(null,G__47634,G__47635));
})();
var cr47557_place_12 = (function (x){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr47574_block_0 = (function (cr47574_state){
try{var cr47574_place_0 = cr47557_place_3;
(cr47574_state[(0)] = cr47574_block_1);

return missionary.core.park(cr47574_place_0);
}catch (e47640){var e47580 = e47640;
var cr47574_exception = e47580;
(cr47574_state[(0)] = null);

throw cr47574_exception;
}});
var cr47574_block_1 = (function (cr47574_state){
try{var cr47574_place_1 = missionary.core.unpark();
var cr47574_place_2 = cr47574_place_1;
var cr47574_place_3 = x;
var cr47574_place_4 = (function (){var G__47583 = cr47574_place_3;
var fexpr__47582 = cr47574_place_2;
var G__47643 = G__47583;
var fexpr__47642 = fexpr__47582;
return (fexpr__47642.cljs$core$IFn$_invoke$arity$1 ? fexpr__47642.cljs$core$IFn$_invoke$arity$1(G__47643) : fexpr__47642.call(null,G__47643));
})();
(cr47574_state[(0)] = null);

return cr47574_place_4;
}catch (e47641){var e47581 = e47641;
var cr47574_exception = e47581;
(cr47574_state[(0)] = null);

throw cr47574_exception;
}});
return cloroutine.impl.coroutine((function (){var G__47584 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__47584[(0)] = cr47574_block_0);

return G__47584;
})());
})(),missionary.core.sp_run);
});
var cr47557_place_13 = (function (_BANG_){
var G__47645_47761 = _BANG_;
var fexpr__47644_47762 = cr47557_place_1;
(fexpr__47644_47762.cljs$core$IFn$_invoke$arity$1 ? fexpr__47644_47762.cljs$core$IFn$_invoke$arity$1(G__47645_47761) : fexpr__47644_47762.call(null,G__47645_47761));

return (function (){
return cljs.core.List.EMPTY;
});
});
var cr47557_place_14 = (function (p1__47556_SHARP_){
throw p1__47556_SHARP_;
});
var cr47557_place_15 = c;
var cr47557_place_16 = cr47557_place_12;
var cr47557_place_17 = cr47557_place_13;
var cr47557_place_18 = cr47557_place_14;
var cr47557_place_19 = (function (){var G__47647 = cr47557_place_16;
var G__47648 = cr47557_place_17;
var G__47649 = cr47557_place_18;
var fexpr__47646 = cr47557_place_15;
return (fexpr__47646.cljs$core$IFn$_invoke$arity$3 ? fexpr__47646.cljs$core$IFn$_invoke$arity$3(G__47647,G__47648,G__47649) : fexpr__47646.call(null,G__47647,G__47648,G__47649));
})();
var cr47557_place_20 = (function (){var G__47651 = cr47557_place_5;
var G__47652 = cr47557_place_11;
var G__47653 = cr47557_place_19;
var fexpr__47650 = cr47557_place_4;
return (fexpr__47650.cljs$core$IFn$_invoke$arity$3 ? fexpr__47650.cljs$core$IFn$_invoke$arity$3(G__47651,G__47652,G__47653) : fexpr__47650.call(null,G__47651,G__47652,G__47653));
})();
(cr47557_state[(0)] = cr47557_block_1);

return missionary.core.park(cr47557_place_20);
}catch (e47620){var cr47557_exception = e47620;
(cr47557_state[(0)] = null);

throw cr47557_exception;
}});
var cr47557_block_1 = (function hyperfiddle$electric$pair_$_cr47557_block_1(cr47557_state){
try{var cr47557_place_21 = missionary.core.unpark();
(cr47557_state[(0)] = null);

return cr47557_place_21;
}catch (e47654){var cr47557_exception = e47654;
(cr47557_state[(0)] = null);

throw cr47557_exception;
}});
return cloroutine.impl.coroutine((function (){var G__47655 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__47655[(0)] = cr47557_block_0);

return G__47655;
})());
})(),missionary.core.sp_run);
});
hyperfiddle.electric.failure_QMARK_ = (function hyperfiddle$electric$failure_QMARK_(x){
return (x instanceof hyperfiddle.electric.Failure);
});
hyperfiddle.electric.task__GT_cp = (function hyperfiddle$electric$task__GT_cp(var_args){
var G__47658 = arguments.length;
switch (G__47658) {
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
return missionary.core.reductions.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,pending,cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr47659_block_0 = (function hyperfiddle$electric$cr47659_block_0(cr47659_state){
try{var cr47659_place_0 = _BANG_x;
(cr47659_state[(0)] = cr47659_block_1);

return missionary.core.park(cr47659_place_0);
}catch (e47662){var cr47659_exception = e47662;
(cr47659_state[(0)] = null);

throw cr47659_exception;
}});
var cr47659_block_1 = (function hyperfiddle$electric$cr47659_block_1(cr47659_state){
try{var cr47659_place_1 = missionary.core.unpark();
(cr47659_state[(0)] = null);

return cr47659_place_1;
}catch (e47663){var cr47659_exception = e47663;
(cr47659_state[(0)] = null);

throw cr47659_exception;
}});
return cloroutine.impl.coroutine((function (){var G__47664 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__47664[(0)] = cr47659_block_0);

return G__47664;
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
(hyperfiddle.electric.Clock.prototype.call = (function (unused__15668__auto__){
var self__ = this;
var self__ = this;
var G__47666 = (arguments.length - (1));
switch (G__47666) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.Clock.prototype.apply = (function (self__,args47665){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args47665)));
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
var G__47670 = arguments.length;
switch (G__47670) {
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
return missionary.core.reductions.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,init,cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr47671_block_6 = (function hyperfiddle$electric$cr47671_block_6(cr47671_state){
try{var cr47671_place_15 = null;
(cr47671_state[(0)] = cr47671_block_8);

(cr47671_state[(4)] = cr47671_place_15);

return cr47671_state;
}catch (e47689){var cr47671_exception = e47689;
(cr47671_state[(0)] = cr47671_block_12);

(cr47671_state[(2)] = null);

(cr47671_state[(4)] = null);

(cr47671_state[(1)] = true);

(cr47671_state[(3)] = cr47671_exception);

return cr47671_state;
}});
var cr47671_block_7 = (function hyperfiddle$electric$cr47671_block_7(cr47671_state){
try{var cr47671_place_2 = (cr47671_state[(3)]);
var cr47671_place_16 = cr47671_place_2;
var cr47671_place_17 = (function(){throw cr47671_place_16})();
(cr47671_state[(0)] = null);

(cr47671_state[(1)] = null);

(cr47671_state[(3)] = null);

return null;
}catch (e47690){var cr47671_exception = e47690;
(cr47671_state[(0)] = cr47671_block_12);

(cr47671_state[(1)] = true);

(cr47671_state[(3)] = cr47671_exception);

return cr47671_state;
}});
var cr47671_block_12 = (function hyperfiddle$electric$cr47671_block_12(cr47671_state){
try{var cr47671_place_3 = (cr47671_state[(1)]);
var cr47671_place_2 = (cr47671_state[(3)]);
var cr47671_place_22 = (cljs.core.truth_(cr47671_place_3)?(function(){throw cr47671_place_2})():cr47671_place_2);
(cr47671_state[(0)] = null);

(cr47671_state[(1)] = null);

(cr47671_state[(3)] = null);

return cr47671_place_22;
}catch (e47691){var cr47671_exception = e47691;
(cr47671_state[(0)] = null);

(cr47671_state[(1)] = null);

(cr47671_state[(3)] = null);

throw cr47671_exception;
}});
var cr47671_block_8 = (function hyperfiddle$electric$cr47671_block_8(cr47671_state){
try{var cr47671_place_14 = (cr47671_state[(4)]);
(cr47671_state[(0)] = cr47671_block_11);

(cr47671_state[(4)] = null);

(cr47671_state[(2)] = cr47671_place_14);

return cr47671_state;
}catch (e47692){var cr47671_exception = e47692;
(cr47671_state[(0)] = cr47671_block_12);

(cr47671_state[(2)] = null);

(cr47671_state[(4)] = null);

(cr47671_state[(1)] = true);

(cr47671_state[(3)] = cr47671_exception);

return cr47671_state;
}});
var cr47671_block_9 = (function hyperfiddle$electric$cr47671_block_9(cr47671_state){
try{var cr47671_place_2 = (cr47671_state[(3)]);
var cr47671_place_18 = cr47671_place_2;
var cr47671_place_19 = (1);
var cr47671_place_20 = missionary.core.none;
(cr47671_state[(0)] = cr47671_block_10);

return missionary.core.fork(cr47671_place_19,cr47671_place_20);
}catch (e47693){var cr47671_exception = e47693;
(cr47671_state[(0)] = cr47671_block_12);

(cr47671_state[(2)] = null);

(cr47671_state[(1)] = true);

(cr47671_state[(3)] = cr47671_exception);

return cr47671_state;
}});
var cr47671_block_5 = (function hyperfiddle$electric$cr47671_block_5(cr47671_state){
try{var cr47671_place_13 = new cljs.core.Keyword(null,"else","else",-1508377146);
var cr47671_place_14 = null;
if(cljs.core.truth_(cr47671_place_13)){
(cr47671_state[(0)] = cr47671_block_7);

(cr47671_state[(2)] = null);

return cr47671_state;
} else {
(cr47671_state[(0)] = cr47671_block_6);

(cr47671_state[(4)] = cr47671_place_14);

return cr47671_state;
}
}catch (e47694){var cr47671_exception = e47694;
(cr47671_state[(0)] = cr47671_block_12);

(cr47671_state[(2)] = null);

(cr47671_state[(1)] = true);

(cr47671_state[(3)] = cr47671_exception);

return cr47671_state;
}});
var cr47671_block_1 = (function hyperfiddle$electric$cr47671_block_1(cr47671_state){
try{var cr47671_place_1 = missionary.core.unpark();
var cr47671_place_2 = null;
var cr47671_place_3 = false;
(cr47671_state[(0)] = cr47671_block_2);

(cr47671_state[(2)] = cr47671_place_1);

(cr47671_state[(3)] = cr47671_place_2);

(cr47671_state[(1)] = cr47671_place_3);

return cr47671_state;
}catch (e47695){var cr47671_exception = e47695;
(cr47671_state[(0)] = null);

throw cr47671_exception;
}});
var cr47671_block_4 = (function hyperfiddle$electric$cr47671_block_4(cr47671_state){
try{var cr47671_place_2 = (cr47671_state[(3)]);
var cr47671_place_9 = cr47671_place_2;
var cr47671_place_10 = missionary.Cancelled;
var cr47671_place_11 = (cr47671_place_9 instanceof cr47671_place_10);
var cr47671_place_12 = null;
if(cr47671_place_11){
(cr47671_state[(0)] = cr47671_block_9);

(cr47671_state[(2)] = cr47671_place_12);

return cr47671_state;
} else {
(cr47671_state[(0)] = cr47671_block_5);

(cr47671_state[(2)] = cr47671_place_12);

return cr47671_state;
}
}catch (e47696){var cr47671_exception = e47696;
(cr47671_state[(0)] = cr47671_block_12);

(cr47671_state[(1)] = true);

(cr47671_state[(3)] = cr47671_exception);

return cr47671_state;
}});
var cr47671_block_2 = (function hyperfiddle$electric$cr47671_block_2(cr47671_state){
try{var cr47671_place_1 = (cr47671_state[(2)]);
var cr47671_place_4 = missionary.core.sleep;
var cr47671_place_5 = delay;
var cr47671_place_6 = cr47671_place_1;
var cr47671_place_7 = (function (){var G__47699 = cr47671_place_5;
var G__47700 = cr47671_place_6;
var fexpr__47698 = cr47671_place_4;
return (fexpr__47698.cljs$core$IFn$_invoke$arity$2 ? fexpr__47698.cljs$core$IFn$_invoke$arity$2(G__47699,G__47700) : fexpr__47698.call(null,G__47699,G__47700));
})();
(cr47671_state[(0)] = cr47671_block_3);

(cr47671_state[(2)] = null);

return missionary.core.park(cr47671_place_7);
}catch (e47697){var cr47671_exception = e47697;
(cr47671_state[(0)] = cr47671_block_4);

(cr47671_state[(2)] = null);

(cr47671_state[(3)] = cr47671_exception);

return cr47671_state;
}});
var cr47671_block_3 = (function hyperfiddle$electric$cr47671_block_3(cr47671_state){
try{var cr47671_place_8 = missionary.core.unpark();
(cr47671_state[(0)] = cr47671_block_12);

(cr47671_state[(3)] = cr47671_place_8);

return cr47671_state;
}catch (e47701){var cr47671_exception = e47701;
(cr47671_state[(0)] = cr47671_block_4);

(cr47671_state[(3)] = cr47671_exception);

return cr47671_state;
}});
var cr47671_block_10 = (function hyperfiddle$electric$cr47671_block_10(cr47671_state){
try{var cr47671_place_21 = missionary.core.unpark();
(cr47671_state[(0)] = cr47671_block_11);

(cr47671_state[(2)] = cr47671_place_21);

return cr47671_state;
}catch (e47702){var cr47671_exception = e47702;
(cr47671_state[(0)] = cr47671_block_12);

(cr47671_state[(2)] = null);

(cr47671_state[(1)] = true);

(cr47671_state[(3)] = cr47671_exception);

return cr47671_state;
}});
var cr47671_block_0 = (function hyperfiddle$electric$cr47671_block_0(cr47671_state){
try{var cr47671_place_0 = flow;
(cr47671_state[(0)] = cr47671_block_1);

return missionary.core.switch$(cr47671_place_0);
}catch (e47703){var cr47671_exception = e47703;
(cr47671_state[(0)] = null);

throw cr47671_exception;
}});
var cr47671_block_11 = (function hyperfiddle$electric$cr47671_block_11(cr47671_state){
try{var cr47671_place_12 = (cr47671_state[(2)]);
(cr47671_state[(0)] = cr47671_block_12);

(cr47671_state[(2)] = null);

(cr47671_state[(3)] = cr47671_place_12);

return cr47671_state;
}catch (e47704){var cr47671_exception = e47704;
(cr47671_state[(0)] = cr47671_block_12);

(cr47671_state[(2)] = null);

(cr47671_state[(1)] = true);

(cr47671_state[(3)] = cr47671_exception);

return cr47671_state;
}});
return cloroutine.impl.coroutine((function (){var G__47705 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((5));
(G__47705[(0)] = cr47671_block_0);

return G__47705;
})());
})(),missionary.core.ap_run));
}));

(hyperfiddle.electric.debounce_discreet.cljs$lang$maxFixedArity = 3);

hyperfiddle.electric.throttle = (function hyperfiddle$electric$throttle(dur,_GT_in){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr47706_block_4 = (function hyperfiddle$electric$throttle_$_cr47706_block_4(cr47706_state){
try{var cr47706_place_16 = missionary.core.sleep;
var cr47706_place_17 = dur;
var cr47706_place_18 = (function (){var G__47729 = cr47706_place_17;
var fexpr__47728 = cr47706_place_16;
return (fexpr__47728.cljs$core$IFn$_invoke$arity$1 ? fexpr__47728.cljs$core$IFn$_invoke$arity$1(G__47729) : fexpr__47728.call(null,G__47729));
})();
(cr47706_state[(0)] = cr47706_block_5);

return missionary.core.park(cr47706_place_18);
}catch (e47727){var cr47706_exception = e47727;
(cr47706_state[(0)] = null);

(cr47706_state[(2)] = null);

throw cr47706_exception;
}});
var cr47706_block_8 = (function hyperfiddle$electric$throttle_$_cr47706_block_8(cr47706_state){
try{var cr47706_place_14 = (cr47706_state[(2)]);
(cr47706_state[(0)] = null);

(cr47706_state[(2)] = null);

return cr47706_place_14;
}catch (e47730){var cr47706_exception = e47730;
(cr47706_state[(0)] = null);

(cr47706_state[(2)] = null);

throw cr47706_exception;
}});
var cr47706_block_6 = (function hyperfiddle$electric$throttle_$_cr47706_block_6(cr47706_state){
try{var cr47706_place_22 = missionary.core.unpark();
(cr47706_state[(0)] = cr47706_block_8);

(cr47706_state[(2)] = cr47706_place_22);

return cr47706_state;
}catch (e47731){var cr47706_exception = e47731;
(cr47706_state[(0)] = null);

(cr47706_state[(2)] = null);

throw cr47706_exception;
}});
var cr47706_block_7 = (function hyperfiddle$electric$throttle_$_cr47706_block_7(cr47706_state){
try{var cr47706_place_12 = (cr47706_state[(1)]);
var cr47706_place_23 = "No matching clause: ";
var cr47706_place_24 = cr47706_place_12;
var cr47706_place_25 = [cr47706_place_23,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr47706_place_24)].join('');
var cr47706_place_26 = (new Error(cr47706_place_25));
var cr47706_place_27 = (function(){throw cr47706_place_26})();
(cr47706_state[(0)] = null);

(cr47706_state[(1)] = null);

return null;
}catch (e47732){var cr47706_exception = e47732;
(cr47706_state[(0)] = null);

(cr47706_state[(1)] = null);

throw cr47706_exception;
}});
var cr47706_block_5 = (function hyperfiddle$electric$throttle_$_cr47706_block_5(cr47706_state){
try{var cr47706_place_19 = missionary.core.unpark();
var cr47706_place_20 = (1);
var cr47706_place_21 = missionary.core.none;
(cr47706_state[(0)] = cr47706_block_6);

return missionary.core.fork(cr47706_place_20,cr47706_place_21);
}catch (e47733){var cr47706_exception = e47733;
(cr47706_state[(0)] = null);

(cr47706_state[(2)] = null);

throw cr47706_exception;
}});
var cr47706_block_3 = (function hyperfiddle$electric$throttle_$_cr47706_block_3(cr47706_state){
try{var cr47706_place_5 = (cr47706_state[(1)]);
var cr47706_place_15 = cr47706_place_5;
(cr47706_state[(0)] = cr47706_block_8);

(cr47706_state[(1)] = null);

(cr47706_state[(2)] = cr47706_place_15);

return cr47706_state;
}catch (e47734){var cr47706_exception = e47734;
(cr47706_state[(0)] = null);

(cr47706_state[(1)] = null);

(cr47706_state[(2)] = null);

throw cr47706_exception;
}});
var cr47706_block_2 = (function hyperfiddle$electric$throttle_$_cr47706_block_2(cr47706_state){
try{var cr47706_place_12 = missionary.core.unpark();
var cr47706_place_13 = cr47706_place_12;
var cr47706_place_14 = null;
var G__47736 = cr47706_place_13;
switch (G__47736) {
case (0):
(cr47706_state[(0)] = cr47706_block_3);

(cr47706_state[(2)] = cr47706_place_14);

return cr47706_state;

break;
case (1):
(cr47706_state[(0)] = cr47706_block_4);

(cr47706_state[(1)] = null);

(cr47706_state[(2)] = cr47706_place_14);

return cr47706_state;

break;
default:
(cr47706_state[(0)] = cr47706_block_7);

(cr47706_state[(1)] = null);

(cr47706_state[(1)] = cr47706_place_12);

return cr47706_state;

}
}catch (e47735){var cr47706_exception = e47735;
(cr47706_state[(0)] = null);

(cr47706_state[(1)] = null);

throw cr47706_exception;
}});
var cr47706_block_0 = (function hyperfiddle$electric$throttle_$_cr47706_block_0(cr47706_state){
try{var cr47706_place_0 = (1);
var cr47706_place_1 = missionary.core.relieve;
var cr47706_place_2 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr47706_place_3 = _GT_in;
var cr47706_place_4 = (function (){var G__47739 = cr47706_place_2;
var G__47740 = cr47706_place_3;
var fexpr__47738 = cr47706_place_1;
return (fexpr__47738.cljs$core$IFn$_invoke$arity$2 ? fexpr__47738.cljs$core$IFn$_invoke$arity$2(G__47739,G__47740) : fexpr__47738.call(null,G__47739,G__47740));
})();
(cr47706_state[(0)] = cr47706_block_1);

return missionary.core.fork(cr47706_place_0,cr47706_place_4);
}catch (e47737){var cr47706_exception = e47737;
(cr47706_state[(0)] = null);

throw cr47706_exception;
}});
var cr47706_block_1 = (function hyperfiddle$electric$throttle_$_cr47706_block_1(cr47706_state){
try{var cr47706_place_5 = missionary.core.unpark();
var cr47706_place_6 = (1);
var cr47706_place_7 = missionary.core.seed;
var cr47706_place_8 = cljs.core.range;
var cr47706_place_9 = (2);
var cr47706_place_10 = (function (){var G__47743 = cr47706_place_9;
var fexpr__47742 = cr47706_place_8;
return (fexpr__47742.cljs$core$IFn$_invoke$arity$1 ? fexpr__47742.cljs$core$IFn$_invoke$arity$1(G__47743) : fexpr__47742.call(null,G__47743));
})();
var cr47706_place_11 = (function (){var G__47745 = cr47706_place_10;
var fexpr__47744 = cr47706_place_7;
return (fexpr__47744.cljs$core$IFn$_invoke$arity$1 ? fexpr__47744.cljs$core$IFn$_invoke$arity$1(G__47745) : fexpr__47744.call(null,G__47745));
})();
(cr47706_state[(0)] = cr47706_block_2);

(cr47706_state[(1)] = cr47706_place_5);

return missionary.core.fork(cr47706_place_6,cr47706_place_11);
}catch (e47741){var cr47706_exception = e47741;
(cr47706_state[(0)] = null);

throw cr47706_exception;
}});
return cloroutine.impl.coroutine((function (){var G__47746 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((3));
(G__47746[(0)] = cr47706_block_0);

return G__47746;
})());
})(),missionary.core.ap_run);
});
/**
 * Bound to the HTTP request of the page in which the current Electric program is running.
 */
hyperfiddle.electric._STAR_http_request_STAR_ = null;

//# sourceMappingURL=hyperfiddle.electric.js.map
