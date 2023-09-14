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
var item_29758__$1 = item;
while(true){
if((item_29758__$1 === main)){
} else {
var n_29759 = (item_29758__$1[((2) | (0))]);
(item_29758__$1[((1) | (0))] = null);

(item_29758__$1[((2) | (0))] = null);

var fexpr__29645_29760 = (item_29758__$1[((0) | (0))]);
(fexpr__29645_29760.cljs$core$IFn$_invoke$arity$0 ? fexpr__29645_29760.cljs$core$IFn$_invoke$arity$0() : fexpr__29645_29760.call(null));

var G__29762 = n_29759;
item_29758__$1 = G__29762;
continue;
}
break;
}

(main[((1) | (0))] = null);

(main[((2) | (0))] = null);

var fexpr__29646 = (main[((0) | (0))]);
return (fexpr__29646.cljs$core$IFn$_invoke$arity$0 ? fexpr__29646.cljs$core$IFn$_invoke$arity$0() : fexpr__29646.call(null));
}
});
hyperfiddle.electric.impl.gather.flush_BANG_ = (function hyperfiddle$electric$impl$gather$flush_BANG_(item){
var item__$1 = item;
while(true){
if((!((item__$1 == null)))){
var next = (function (){var a__29521__auto__ = item__$1;
var i__29522__auto__ = ((3) | (0));
var x__29523__auto__ = (a__29521__auto__[i__29522__auto__]);
(a__29521__auto__[i__29522__auto__] = null);

return x__29523__auto__;
})();
try{cljs.core.deref((item__$1[((0) | (0))]));
}catch (e29648){var __29769 = e29648;
}
var G__29771 = next;
item__$1 = G__29771;
continue;
} else {
return null;
}
break;
}
});
hyperfiddle.electric.impl.gather.fail_BANG_ = (function hyperfiddle$electric$impl$gather$fail_BANG_(main,item,error){
hyperfiddle.electric.impl.gather.cancel_BANG_(main);

hyperfiddle.electric.impl.gather.flush_BANG_((function (){var a__29521__auto__ = main;
var i__29522__auto__ = ((3) | (0));
var x__29523__auto__ = (a__29521__auto__[i__29522__auto__]);
(a__29521__auto__[i__29522__auto__] = null);

return x__29523__auto__;
})());

hyperfiddle.electric.impl.gather.flush_BANG_(item);

throw error;
});
hyperfiddle.electric.impl.gather.sample_BANG_ = (function hyperfiddle$electric$impl$gather$sample_BANG_(main,rf,notifier){
var idle = (function (){var a__29521__auto__ = main;
var i__29522__auto__ = ((5) | (0));
var x__29523__auto__ = (a__29521__auto__[i__29522__auto__]);
(a__29521__auto__[i__29522__auto__] = false);

return x__29523__auto__;
})();
var head = (function (){var a__29521__auto__ = main;
var i__29522__auto__ = ((3) | (0));
var x__29523__auto__ = (a__29521__auto__[i__29522__auto__]);
(a__29521__auto__[i__29522__auto__] = null);

return x__29523__auto__;
})();
var item = (function (){var a__29521__auto__ = head;
var i__29522__auto__ = ((3) | (0));
var x__29523__auto__ = (a__29521__auto__[i__29522__auto__]);
(a__29521__auto__[i__29522__auto__] = null);

return x__29523__auto__;
})();
var r = (function (){try{return cljs.core.deref((head[((0) | (0))]));
}catch (e29655){var e = e29655;
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
var next = (function (){var a__29521__auto__ = item;
var i__29522__auto__ = ((3) | (0));
var x__29523__auto__ = (a__29521__auto__[i__29522__auto__]);
(a__29521__auto__[i__29522__auto__] = null);

return x__29523__auto__;
})();
var G__29776 = next;
var G__29777 = (function (){try{var G__29657 = r;
var G__29658 = cljs.core.deref((item[((0) | (0))]));
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__29657,G__29658) : rf.call(null,G__29657,G__29658));
}catch (e29656){var e = e29656;
return hyperfiddle.electric.impl.gather.fail_BANG_(main,next,e);
}})();
item = G__29776;
r = G__29777;
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
var G__29663 = (arguments.length - (1));
switch (G__29663) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.gather.It.prototype.apply = (function (self__,args29661){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args29661)));
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
var temp__5806__auto___29792 = (main[((1) | (0))]);
if((temp__5806__auto___29792 == null)){
try{cljs.core.deref((main[((0) | (0))]));
}catch (e29675){var __29793 = e29675;
}} else {
var prev_29794 = temp__5806__auto___29792;
var item_29795 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(((4) | (0)));
var idle_29796 = (function (){var a__29521__auto__ = main;
var i__29522__auto__ = ((5) | (0));
var x__29523__auto__ = (a__29521__auto__[i__29522__auto__]);
(a__29521__auto__[i__29522__auto__] = false);

return x__29523__auto__;
})();
(main[((6) | (0))] = ((main[((6) | (0))]) + (1)));

(item_29795[((1) | (0))] = prev_29794);

(prev_29794[((2) | (0))] = item_29795);

(main[((1) | (0))] = item_29795);

(item_29795[((2) | (0))] = main);

var n_29797 = ((function (item_29795,idle_29796,prev_29794,temp__5806__auto___29792,main){
return (function (){
if(((item_29795[((1) | (0))]) == null)){
try{return cljs.core.deref((item_29795[((0) | (0))]));
}catch (e29677){var _ = e29677;
return null;
}} else {
var temp__5806__auto____$1 = (function (){var a__29521__auto__ = main;
var i__29522__auto__ = ((3) | (0));
var x__29523__auto__ = (a__29521__auto__[i__29522__auto__]);
(a__29521__auto__[i__29522__auto__] = item_29795);

return x__29523__auto__;
})();
if((temp__5806__auto____$1 == null)){
if(cljs.core.truth_((main[((5) | (0))]))){
var fexpr__29680 = it.notifier;
return (fexpr__29680.cljs$core$IFn$_invoke$arity$0 ? fexpr__29680.cljs$core$IFn$_invoke$arity$0() : fexpr__29680.call(null));
} else {
return (main[((5) | (0))] = true);
}
} else {
var curr = temp__5806__auto____$1;
return (item_29795[((3) | (0))] = curr);
}
}
});})(item_29795,idle_29796,prev_29794,temp__5806__auto___29792,main))
;
var t_29798 = ((function (n_29797,item_29795,idle_29796,prev_29794,temp__5806__auto___29792,main){
return (function (){
var temp__5808__auto___29799 = (item_29795[((1) | (0))]);
if((temp__5808__auto___29799 == null)){
} else {
var prev_29801__$1 = temp__5808__auto___29799;
var next_29802 = (item_29795[((2) | (0))]);
(next_29802[((1) | (0))] = prev_29801__$1);

(prev_29801__$1[((2) | (0))] = next_29802);

(item_29795[((1) | (0))] = null);

(item_29795[((2) | (0))] = null);
}

return hyperfiddle.electric.impl.gather.done_BANG_(main,it.terminator);
});})(n_29797,item_29795,idle_29796,prev_29794,temp__5806__auto___29792,main))
;
(item_29795[((0) | (0))] = (function (){try{var fexpr__29697 = cljs.core.deref((main[((0) | (0))]));
return (fexpr__29697.cljs$core$IFn$_invoke$arity$2 ? fexpr__29697.cljs$core$IFn$_invoke$arity$2(n_29797,t_29798) : fexpr__29697.call(null,n_29797,t_29798));
}catch (e29696){var e = e29696;
return hyperfiddle.electric.impl.failer.run(e,n_29797,t_29798);
}})());

if(cljs.core.truth_((main[((5) | (0))]))){
if(idle_29796){
var fexpr__29698_29807 = it.notifier;
(fexpr__29698_29807.cljs$core$IFn$_invoke$arity$0 ? fexpr__29698_29807.cljs$core$IFn$_invoke$arity$0() : fexpr__29698_29807.call(null));
} else {
}
} else {
(main[((5) | (0))] = idle_29796);
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
var G__29739_29809 = main;
(G__29739_29809[((1) | (0))] = main);

(G__29739_29809[((2) | (0))] = main);

(G__29739_29809[((4) | (0))] = true);

(G__29739_29809[((5) | (0))] = true);

(G__29739_29809[((6) | (0))] = (1));


(main[((0) | (0))] = (function (){var G__29745 = (function (){
return hyperfiddle.electric.impl.gather.transfer_BANG_(it);
});
var G__29746 = (function (){
return hyperfiddle.electric.impl.gather.done_BANG_(main,t);
});
return (_GT__GT_x.cljs$core$IFn$_invoke$arity$2 ? _GT__GT_x.cljs$core$IFn$_invoke$arity$2(G__29745,G__29746) : _GT__GT_x.call(null,G__29745,G__29746));
})());

hyperfiddle.electric.impl.gather.transfer_BANG_(it);

return it;
});
});

//# sourceMappingURL=hyperfiddle.electric.impl.gather.js.map
