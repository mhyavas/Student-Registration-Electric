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
var item_45625__$1 = item;
while(true){
if((item_45625__$1 === main)){
} else {
var n_45626 = (item_45625__$1[((2) | (0))]);
(item_45625__$1[((1) | (0))] = null);

(item_45625__$1[((2) | (0))] = null);

var fexpr__45589_45627 = (item_45625__$1[((0) | (0))]);
(fexpr__45589_45627.cljs$core$IFn$_invoke$arity$0 ? fexpr__45589_45627.cljs$core$IFn$_invoke$arity$0() : fexpr__45589_45627.call(null));

var G__45628 = n_45626;
item_45625__$1 = G__45628;
continue;
}
break;
}

(main[((1) | (0))] = null);

(main[((2) | (0))] = null);

var fexpr__45590 = (main[((0) | (0))]);
return (fexpr__45590.cljs$core$IFn$_invoke$arity$0 ? fexpr__45590.cljs$core$IFn$_invoke$arity$0() : fexpr__45590.call(null));
}
});
hyperfiddle.electric.impl.gather.flush_BANG_ = (function hyperfiddle$electric$impl$gather$flush_BANG_(item){
var item__$1 = item;
while(true){
if((!((item__$1 == null)))){
var next = (function (){var a__42386__auto__ = item__$1;
var i__42387__auto__ = ((3) | (0));
var x__42388__auto__ = (a__42386__auto__[i__42387__auto__]);
(a__42386__auto__[i__42387__auto__] = null);

return x__42388__auto__;
})();
try{cljs.core.deref((item__$1[((0) | (0))]));
}catch (e45593){var __45629 = e45593;
}
var G__45630 = next;
item__$1 = G__45630;
continue;
} else {
return null;
}
break;
}
});
hyperfiddle.electric.impl.gather.fail_BANG_ = (function hyperfiddle$electric$impl$gather$fail_BANG_(main,item,error){
hyperfiddle.electric.impl.gather.cancel_BANG_(main);

hyperfiddle.electric.impl.gather.flush_BANG_((function (){var a__42386__auto__ = main;
var i__42387__auto__ = ((3) | (0));
var x__42388__auto__ = (a__42386__auto__[i__42387__auto__]);
(a__42386__auto__[i__42387__auto__] = null);

return x__42388__auto__;
})());

hyperfiddle.electric.impl.gather.flush_BANG_(item);

throw error;
});
hyperfiddle.electric.impl.gather.sample_BANG_ = (function hyperfiddle$electric$impl$gather$sample_BANG_(main,rf,notifier){
var idle = (function (){var a__42386__auto__ = main;
var i__42387__auto__ = ((5) | (0));
var x__42388__auto__ = (a__42386__auto__[i__42387__auto__]);
(a__42386__auto__[i__42387__auto__] = false);

return x__42388__auto__;
})();
var head = (function (){var a__42386__auto__ = main;
var i__42387__auto__ = ((3) | (0));
var x__42388__auto__ = (a__42386__auto__[i__42387__auto__]);
(a__42386__auto__[i__42387__auto__] = null);

return x__42388__auto__;
})();
var item = (function (){var a__42386__auto__ = head;
var i__42387__auto__ = ((3) | (0));
var x__42388__auto__ = (a__42386__auto__[i__42387__auto__]);
(a__42386__auto__[i__42387__auto__] = null);

return x__42388__auto__;
})();
var r = (function (){try{return cljs.core.deref((head[((0) | (0))]));
}catch (e45602){var e = e45602;
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
var next = (function (){var a__42386__auto__ = item;
var i__42387__auto__ = ((3) | (0));
var x__42388__auto__ = (a__42386__auto__[i__42387__auto__]);
(a__42386__auto__[i__42387__auto__] = null);

return x__42388__auto__;
})();
var G__45631 = next;
var G__45632 = (function (){try{var G__45604 = r;
var G__45605 = cljs.core.deref((item[((0) | (0))]));
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__45604,G__45605) : rf.call(null,G__45604,G__45605));
}catch (e45603){var e = e45603;
return hyperfiddle.electric.impl.gather.fail_BANG_(main,next,e);
}})();
item = G__45631;
r = G__45632;
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
(hyperfiddle.electric.impl.gather.It.prototype.call = (function (unused__27532__auto__){
var self__ = this;
var self__ = this;
var G__45607 = (arguments.length - (1));
switch (G__45607) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.gather.It.prototype.apply = (function (self__,args45606){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args45606)));
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
var temp__5806__auto___45634 = (main[((1) | (0))]);
if((temp__5806__auto___45634 == null)){
try{cljs.core.deref((main[((0) | (0))]));
}catch (e45612){var __45635 = e45612;
}} else {
var prev_45636 = temp__5806__auto___45634;
var item_45637 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(((4) | (0)));
var idle_45638 = (function (){var a__42386__auto__ = main;
var i__42387__auto__ = ((5) | (0));
var x__42388__auto__ = (a__42386__auto__[i__42387__auto__]);
(a__42386__auto__[i__42387__auto__] = false);

return x__42388__auto__;
})();
(main[((6) | (0))] = ((main[((6) | (0))]) + (1)));

(item_45637[((1) | (0))] = prev_45636);

(prev_45636[((2) | (0))] = item_45637);

(main[((1) | (0))] = item_45637);

(item_45637[((2) | (0))] = main);

var n_45639 = ((function (item_45637,idle_45638,prev_45636,temp__5806__auto___45634,main){
return (function (){
if(((item_45637[((1) | (0))]) == null)){
try{return cljs.core.deref((item_45637[((0) | (0))]));
}catch (e45614){var _ = e45614;
return null;
}} else {
var temp__5806__auto____$1 = (function (){var a__42386__auto__ = main;
var i__42387__auto__ = ((3) | (0));
var x__42388__auto__ = (a__42386__auto__[i__42387__auto__]);
(a__42386__auto__[i__42387__auto__] = item_45637);

return x__42388__auto__;
})();
if((temp__5806__auto____$1 == null)){
if(cljs.core.truth_((main[((5) | (0))]))){
var fexpr__45615 = it.notifier;
return (fexpr__45615.cljs$core$IFn$_invoke$arity$0 ? fexpr__45615.cljs$core$IFn$_invoke$arity$0() : fexpr__45615.call(null));
} else {
return (main[((5) | (0))] = true);
}
} else {
var curr = temp__5806__auto____$1;
return (item_45637[((3) | (0))] = curr);
}
}
});})(item_45637,idle_45638,prev_45636,temp__5806__auto___45634,main))
;
var t_45640 = ((function (n_45639,item_45637,idle_45638,prev_45636,temp__5806__auto___45634,main){
return (function (){
var temp__5808__auto___45641 = (item_45637[((1) | (0))]);
if((temp__5808__auto___45641 == null)){
} else {
var prev_45642__$1 = temp__5808__auto___45641;
var next_45643 = (item_45637[((2) | (0))]);
(next_45643[((1) | (0))] = prev_45642__$1);

(prev_45642__$1[((2) | (0))] = next_45643);

(item_45637[((1) | (0))] = null);

(item_45637[((2) | (0))] = null);
}

return hyperfiddle.electric.impl.gather.done_BANG_(main,it.terminator);
});})(n_45639,item_45637,idle_45638,prev_45636,temp__5806__auto___45634,main))
;
(item_45637[((0) | (0))] = (function (){try{var fexpr__45619 = cljs.core.deref((main[((0) | (0))]));
return (fexpr__45619.cljs$core$IFn$_invoke$arity$2 ? fexpr__45619.cljs$core$IFn$_invoke$arity$2(n_45639,t_45640) : fexpr__45619.call(null,n_45639,t_45640));
}catch (e45618){var e = e45618;
return hyperfiddle.electric.impl.failer.run(e,n_45639,t_45640);
}})());

if(cljs.core.truth_((main[((5) | (0))]))){
if(idle_45638){
var fexpr__45621_45644 = it.notifier;
(fexpr__45621_45644.cljs$core$IFn$_invoke$arity$0 ? fexpr__45621_45644.cljs$core$IFn$_invoke$arity$0() : fexpr__45621_45644.call(null));
} else {
}
} else {
(main[((5) | (0))] = idle_45638);
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
var G__45622_45645 = main;
(G__45622_45645[((1) | (0))] = main);

(G__45622_45645[((2) | (0))] = main);

(G__45622_45645[((4) | (0))] = true);

(G__45622_45645[((5) | (0))] = true);

(G__45622_45645[((6) | (0))] = (1));


(main[((0) | (0))] = (function (){var G__45623 = (function (){
return hyperfiddle.electric.impl.gather.transfer_BANG_(it);
});
var G__45624 = (function (){
return hyperfiddle.electric.impl.gather.done_BANG_(main,t);
});
return (_GT__GT_x.cljs$core$IFn$_invoke$arity$2 ? _GT__GT_x.cljs$core$IFn$_invoke$arity$2(G__45623,G__45624) : _GT__GT_x.call(null,G__45623,G__45624));
})());

hyperfiddle.electric.impl.gather.transfer_BANG_(it);

return it;
});
});

//# sourceMappingURL=hyperfiddle.electric.impl.gather.js.map
