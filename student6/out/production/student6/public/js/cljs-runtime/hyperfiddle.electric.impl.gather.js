goog.provide('hyperfiddle.electric.impl.gather');
hyperfiddle.electric.impl.gather.done_BANG_ = (function hyperfiddle$electric$impl$gather$done_BANG_(main,terminator){
if(((main[((6) | (0))] = ((main[((6) | (0))]) - (1))) === (0))){
return (terminator.cljs$core$IFn$_invoke$arity$0 ? terminator.cljs$core$IFn$_invoke$arity$0() : terminator.call(null));
} else {
return null;
}
});
hyperfiddle.electric.impl.gather.cancel_BANG_ = (function hyperfiddle$electric$impl$gather$cancel_BANG_(main){
var temp__5808__auto__ = (main[((2) | (0))]);
if((temp__5808__auto__ == null)){
return null;
} else {
var item = temp__5808__auto__;
var item_32575__$1 = item;
while(true){
if((item_32575__$1 === main)){
} else {
var n_32576 = (item_32575__$1[((2) | (0))]);
(item_32575__$1[((1) | (0))] = null);

(item_32575__$1[((2) | (0))] = null);

var fexpr__32460_32577 = (item_32575__$1[((0) | (0))]);
(fexpr__32460_32577.cljs$core$IFn$_invoke$arity$0 ? fexpr__32460_32577.cljs$core$IFn$_invoke$arity$0() : fexpr__32460_32577.call(null));

var G__32579 = n_32576;
item_32575__$1 = G__32579;
continue;
}
break;
}

(main[((1) | (0))] = null);

(main[((2) | (0))] = null);

var fexpr__32462 = (main[((0) | (0))]);
return (fexpr__32462.cljs$core$IFn$_invoke$arity$0 ? fexpr__32462.cljs$core$IFn$_invoke$arity$0() : fexpr__32462.call(null));
}
});
hyperfiddle.electric.impl.gather.flush_BANG_ = (function hyperfiddle$electric$impl$gather$flush_BANG_(item){
var item__$1 = item;
while(true){
if((!((item__$1 == null)))){
var next = (function (){var a__29140__auto__ = item__$1;
var i__29141__auto__ = ((3) | (0));
var x__29142__auto__ = (a__29140__auto__[i__29141__auto__]);
(a__29140__auto__[i__29141__auto__] = null);

return x__29142__auto__;
})();
try{cljs.core.deref((item__$1[((0) | (0))]));
}catch (e32470){var __32581 = e32470;
}
var G__32582 = next;
item__$1 = G__32582;
continue;
} else {
return null;
}
break;
}
});
hyperfiddle.electric.impl.gather.fail_BANG_ = (function hyperfiddle$electric$impl$gather$fail_BANG_(main,item,error){
hyperfiddle.electric.impl.gather.cancel_BANG_(main);

hyperfiddle.electric.impl.gather.flush_BANG_((function (){var a__29140__auto__ = main;
var i__29141__auto__ = ((3) | (0));
var x__29142__auto__ = (a__29140__auto__[i__29141__auto__]);
(a__29140__auto__[i__29141__auto__] = null);

return x__29142__auto__;
})());

hyperfiddle.electric.impl.gather.flush_BANG_(item);

throw error;
});
hyperfiddle.electric.impl.gather.sample_BANG_ = (function hyperfiddle$electric$impl$gather$sample_BANG_(main,rf,notifier){
var idle = (function (){var a__29140__auto__ = main;
var i__29141__auto__ = ((5) | (0));
var x__29142__auto__ = (a__29140__auto__[i__29141__auto__]);
(a__29140__auto__[i__29141__auto__] = false);

return x__29142__auto__;
})();
var head = (function (){var a__29140__auto__ = main;
var i__29141__auto__ = ((3) | (0));
var x__29142__auto__ = (a__29140__auto__[i__29141__auto__]);
(a__29140__auto__[i__29141__auto__] = null);

return x__29142__auto__;
})();
var item = (function (){var a__29140__auto__ = head;
var i__29141__auto__ = ((3) | (0));
var x__29142__auto__ = (a__29140__auto__[i__29141__auto__]);
(a__29140__auto__[i__29141__auto__] = null);

return x__29142__auto__;
})();
var r = (function (){try{return cljs.core.deref((head[((0) | (0))]));
}catch (e32492){var e = e32492;
return hyperfiddle.electric.impl.gather.fail_BANG_(main,item,e);
}})();
while(true){
if((item == null)){
if(cljs.core.truth_((main[((5) | (0))]))){
if(idle){
(notifier.cljs$core$IFn$_invoke$arity$0 ? notifier.cljs$core$IFn$_invoke$arity$0() : notifier.call(null));
} else {
}
} else {
(main[((5) | (0))] = idle);
}

return r;
} else {
var next = (function (){var a__29140__auto__ = item;
var i__29141__auto__ = ((3) | (0));
var x__29142__auto__ = (a__29140__auto__[i__29141__auto__]);
(a__29140__auto__[i__29141__auto__] = null);

return x__29142__auto__;
})();
var G__32585 = next;
var G__32586 = (function (){try{var G__32497 = r;
var G__32498 = cljs.core.deref((item[((0) | (0))]));
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__32497,G__32498) : rf.call(null,G__32497,G__32498));
}catch (e32496){var e = e32496;
return hyperfiddle.electric.impl.gather.fail_BANG_(main,next,e);
}})();
item = G__32585;
r = G__32586;
continue;
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
hyperfiddle.electric.impl.gather.It = (function (main,rf,notifier,terminator){
this.main = main;
this.rf = rf;
this.notifier = notifier;
this.terminator = terminator;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.gather.It.prototype.call = (function (unused__13625__auto__){
var self__ = this;
var self__ = this;
var G__32501 = (arguments.length - (1));
switch (G__32501) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.gather.It.prototype.apply = (function (self__,args32500){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args32500)));
}));

(hyperfiddle.electric.impl.gather.It.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var it = this;
return hyperfiddle.electric.impl.gather.cancel_BANG_(self__.main);
}));

(hyperfiddle.electric.impl.gather.It.prototype.cljs$core$IDeref$_deref$arity$1 = (function (it){
var self__ = this;
var it__$1 = this;
return hyperfiddle.electric.impl.gather.sample_BANG_(self__.main,self__.rf,self__.notifier);
}));

(hyperfiddle.electric.impl.gather.It.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"main","main",-477271134,null),new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"notifier","notifier",1670358652,null),new cljs.core.Symbol(null,"terminator","terminator",-1051388676,null)], null);
}));

(hyperfiddle.electric.impl.gather.It.cljs$lang$type = true);

(hyperfiddle.electric.impl.gather.It.cljs$lang$ctorStr = "hyperfiddle.electric.impl.gather/It");

(hyperfiddle.electric.impl.gather.It.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.gather/It");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.gather/It.
 */
hyperfiddle.electric.impl.gather.__GT_It = (function hyperfiddle$electric$impl$gather$__GT_It(main,rf,notifier,terminator){
return (new hyperfiddle.electric.impl.gather.It(main,rf,notifier,terminator));
});

hyperfiddle.electric.impl.gather.transfer_BANG_ = (function hyperfiddle$electric$impl$gather$transfer_BANG_(it){
var main = it.main;
while(true){
if(cljs.core.truth_((main[((4) | (0))] = cljs.core.not((main[((4) | (0))]))))){
var temp__5806__auto___32593 = (main[((1) | (0))]);
if((temp__5806__auto___32593 == null)){
try{cljs.core.deref((main[((0) | (0))]));
}catch (e32522){var __32594 = e32522;
}} else {
var prev_32595 = temp__5806__auto___32593;
var item_32596 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(((4) | (0)));
var idle_32597 = (function (){var a__29140__auto__ = main;
var i__29141__auto__ = ((5) | (0));
var x__29142__auto__ = (a__29140__auto__[i__29141__auto__]);
(a__29140__auto__[i__29141__auto__] = false);

return x__29142__auto__;
})();
(main[((6) | (0))] = ((main[((6) | (0))]) + (1)));

(item_32596[((1) | (0))] = prev_32595);

(prev_32595[((2) | (0))] = item_32596);

(main[((1) | (0))] = item_32596);

(item_32596[((2) | (0))] = main);

var n_32598 = ((function (item_32596,idle_32597,prev_32595,temp__5806__auto___32593,main){
return (function (){
if(((item_32596[((1) | (0))]) == null)){
try{return cljs.core.deref((item_32596[((0) | (0))]));
}catch (e32525){var _ = e32525;
return null;
}} else {
var temp__5806__auto____$1 = (function (){var a__29140__auto__ = main;
var i__29141__auto__ = ((3) | (0));
var x__29142__auto__ = (a__29140__auto__[i__29141__auto__]);
(a__29140__auto__[i__29141__auto__] = item_32596);

return x__29142__auto__;
})();
if((temp__5806__auto____$1 == null)){
if(cljs.core.truth_((main[((5) | (0))]))){
var fexpr__32551 = it.notifier;
return (fexpr__32551.cljs$core$IFn$_invoke$arity$0 ? fexpr__32551.cljs$core$IFn$_invoke$arity$0() : fexpr__32551.call(null));
} else {
return (main[((5) | (0))] = true);
}
} else {
var curr = temp__5806__auto____$1;
return (item_32596[((3) | (0))] = curr);
}
}
});})(item_32596,idle_32597,prev_32595,temp__5806__auto___32593,main))
;
var t_32599 = ((function (n_32598,item_32596,idle_32597,prev_32595,temp__5806__auto___32593,main){
return (function (){
var temp__5808__auto___32604 = (item_32596[((1) | (0))]);
if((temp__5808__auto___32604 == null)){
} else {
var prev_32605__$1 = temp__5808__auto___32604;
var next_32606 = (item_32596[((2) | (0))]);
(next_32606[((1) | (0))] = prev_32605__$1);

(prev_32605__$1[((2) | (0))] = next_32606);

(item_32596[((1) | (0))] = null);

(item_32596[((2) | (0))] = null);
}

return hyperfiddle.electric.impl.gather.done_BANG_(main,it.terminator);
});})(n_32598,item_32596,idle_32597,prev_32595,temp__5806__auto___32593,main))
;
(item_32596[((0) | (0))] = (function (){try{var fexpr__32565 = cljs.core.deref((main[((0) | (0))]));
return (fexpr__32565.cljs$core$IFn$_invoke$arity$2 ? fexpr__32565.cljs$core$IFn$_invoke$arity$2(n_32598,t_32599) : fexpr__32565.call(null,n_32598,t_32599));
}catch (e32564){var e = e32564;
return hyperfiddle.electric.impl.failer.run(e,n_32598,t_32599);
}})());

if(cljs.core.truth_((main[((5) | (0))]))){
if(idle_32597){
var fexpr__32566_32610 = it.notifier;
(fexpr__32566_32610.cljs$core$IFn$_invoke$arity$0 ? fexpr__32566_32610.cljs$core$IFn$_invoke$arity$0() : fexpr__32566_32610.call(null));
} else {
}
} else {
(main[((5) | (0))] = idle_32597);
}
}

continue;
} else {
return null;
}
break;
}
});
/**
 * 
 * Given a commutative function and a flow of flows, returns a flow concurrently running the flow with flows produced by
 * this flow and producing values produced by nested flows, reduced by the function if more than one can be transferred
 * simultaneously.
 */
hyperfiddle.electric.impl.gather.gather = (function hyperfiddle$electric$impl$gather$gather(rf,_GT__GT_x){
return (function (n,t){
var main = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(((7) | (0)));
var it = hyperfiddle.electric.impl.gather.__GT_It(main,rf,n,t);
var G__32568_32613 = main;
(G__32568_32613[((1) | (0))] = main);

(G__32568_32613[((2) | (0))] = main);

(G__32568_32613[((4) | (0))] = true);

(G__32568_32613[((5) | (0))] = true);

(G__32568_32613[((6) | (0))] = (1));


(main[((0) | (0))] = (function (){var G__32570 = (function (){
return hyperfiddle.electric.impl.gather.transfer_BANG_(it);
});
var G__32571 = (function (){
return hyperfiddle.electric.impl.gather.done_BANG_(main,t);
});
return (_GT__GT_x.cljs$core$IFn$_invoke$arity$2 ? _GT__GT_x.cljs$core$IFn$_invoke$arity$2(G__32570,G__32571) : _GT__GT_x.call(null,G__32570,G__32571));
})());

hyperfiddle.electric.impl.gather.transfer_BANG_(it);

return it;
});
});

//# sourceMappingURL=hyperfiddle.electric.impl.gather.js.map
