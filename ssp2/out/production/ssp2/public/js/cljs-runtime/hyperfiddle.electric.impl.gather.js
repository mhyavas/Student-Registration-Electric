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
var item_42346__$1 = item;
while(true){
if((item_42346__$1 === main)){
} else {
var n_42347 = (item_42346__$1[((2) | (0))]);
(item_42346__$1[((1) | (0))] = null);

(item_42346__$1[((2) | (0))] = null);

var fexpr__42257_42348 = (item_42346__$1[((0) | (0))]);
(fexpr__42257_42348.cljs$core$IFn$_invoke$arity$0 ? fexpr__42257_42348.cljs$core$IFn$_invoke$arity$0() : fexpr__42257_42348.call(null));

var G__42349 = n_42347;
item_42346__$1 = G__42349;
continue;
}
break;
}

(main[((1) | (0))] = null);

(main[((2) | (0))] = null);

var fexpr__42260 = (main[((0) | (0))]);
return (fexpr__42260.cljs$core$IFn$_invoke$arity$0 ? fexpr__42260.cljs$core$IFn$_invoke$arity$0() : fexpr__42260.call(null));
}
});
hyperfiddle.electric.impl.gather.flush_BANG_ = (function hyperfiddle$electric$impl$gather$flush_BANG_(item){
var item__$1 = item;
while(true){
if((!((item__$1 == null)))){
var next = (function (){var a__42125__auto__ = item__$1;
var i__42126__auto__ = ((3) | (0));
var x__42127__auto__ = (a__42125__auto__[i__42126__auto__]);
(a__42125__auto__[i__42126__auto__] = null);

return x__42127__auto__;
})();
try{cljs.core.deref((item__$1[((0) | (0))]));
}catch (e42267){var __42350 = e42267;
}
var G__42351 = next;
item__$1 = G__42351;
continue;
} else {
return null;
}
break;
}
});
hyperfiddle.electric.impl.gather.fail_BANG_ = (function hyperfiddle$electric$impl$gather$fail_BANG_(main,item,error){
hyperfiddle.electric.impl.gather.cancel_BANG_(main);

hyperfiddle.electric.impl.gather.flush_BANG_((function (){var a__42125__auto__ = main;
var i__42126__auto__ = ((3) | (0));
var x__42127__auto__ = (a__42125__auto__[i__42126__auto__]);
(a__42125__auto__[i__42126__auto__] = null);

return x__42127__auto__;
})());

hyperfiddle.electric.impl.gather.flush_BANG_(item);

throw error;
});
hyperfiddle.electric.impl.gather.sample_BANG_ = (function hyperfiddle$electric$impl$gather$sample_BANG_(main,rf,notifier){
var idle = (function (){var a__42125__auto__ = main;
var i__42126__auto__ = ((5) | (0));
var x__42127__auto__ = (a__42125__auto__[i__42126__auto__]);
(a__42125__auto__[i__42126__auto__] = false);

return x__42127__auto__;
})();
var head = (function (){var a__42125__auto__ = main;
var i__42126__auto__ = ((3) | (0));
var x__42127__auto__ = (a__42125__auto__[i__42126__auto__]);
(a__42125__auto__[i__42126__auto__] = null);

return x__42127__auto__;
})();
var item = (function (){var a__42125__auto__ = head;
var i__42126__auto__ = ((3) | (0));
var x__42127__auto__ = (a__42125__auto__[i__42126__auto__]);
(a__42125__auto__[i__42126__auto__] = null);

return x__42127__auto__;
})();
var r = (function (){try{return cljs.core.deref((head[((0) | (0))]));
}catch (e42293){var e = e42293;
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
var next = (function (){var a__42125__auto__ = item;
var i__42126__auto__ = ((3) | (0));
var x__42127__auto__ = (a__42125__auto__[i__42126__auto__]);
(a__42125__auto__[i__42126__auto__] = null);

return x__42127__auto__;
})();
var G__42355 = next;
var G__42356 = (function (){try{var G__42299 = r;
var G__42300 = cljs.core.deref((item[((0) | (0))]));
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__42299,G__42300) : rf.call(null,G__42299,G__42300));
}catch (e42298){var e = e42298;
return hyperfiddle.electric.impl.gather.fail_BANG_(main,next,e);
}})();
item = G__42355;
r = G__42356;
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
(hyperfiddle.electric.impl.gather.It.prototype.call = (function (unused__15668__auto__){
var self__ = this;
var self__ = this;
var G__42304 = (arguments.length - (1));
switch (G__42304) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.gather.It.prototype.apply = (function (self__,args42303){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args42303)));
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
var temp__5806__auto___42362 = (main[((1) | (0))]);
if((temp__5806__auto___42362 == null)){
try{cljs.core.deref((main[((0) | (0))]));
}catch (e42318){var __42363 = e42318;
}} else {
var prev_42364 = temp__5806__auto___42362;
var item_42365 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(((4) | (0)));
var idle_42366 = (function (){var a__42125__auto__ = main;
var i__42126__auto__ = ((5) | (0));
var x__42127__auto__ = (a__42125__auto__[i__42126__auto__]);
(a__42125__auto__[i__42126__auto__] = false);

return x__42127__auto__;
})();
(main[((6) | (0))] = ((main[((6) | (0))]) + (1)));

(item_42365[((1) | (0))] = prev_42364);

(prev_42364[((2) | (0))] = item_42365);

(main[((1) | (0))] = item_42365);

(item_42365[((2) | (0))] = main);

var n_42367 = ((function (item_42365,idle_42366,prev_42364,temp__5806__auto___42362,main){
return (function (){
if(((item_42365[((1) | (0))]) == null)){
try{return cljs.core.deref((item_42365[((0) | (0))]));
}catch (e42321){var _ = e42321;
return null;
}} else {
var temp__5806__auto____$1 = (function (){var a__42125__auto__ = main;
var i__42126__auto__ = ((3) | (0));
var x__42127__auto__ = (a__42125__auto__[i__42126__auto__]);
(a__42125__auto__[i__42126__auto__] = item_42365);

return x__42127__auto__;
})();
if((temp__5806__auto____$1 == null)){
if(cljs.core.truth_((main[((5) | (0))]))){
var fexpr__42322 = it.notifier;
return (fexpr__42322.cljs$core$IFn$_invoke$arity$0 ? fexpr__42322.cljs$core$IFn$_invoke$arity$0() : fexpr__42322.call(null));
} else {
return (main[((5) | (0))] = true);
}
} else {
var curr = temp__5806__auto____$1;
return (item_42365[((3) | (0))] = curr);
}
}
});})(item_42365,idle_42366,prev_42364,temp__5806__auto___42362,main))
;
var t_42368 = ((function (n_42367,item_42365,idle_42366,prev_42364,temp__5806__auto___42362,main){
return (function (){
var temp__5808__auto___42369 = (item_42365[((1) | (0))]);
if((temp__5808__auto___42369 == null)){
} else {
var prev_42370__$1 = temp__5808__auto___42369;
var next_42371 = (item_42365[((2) | (0))]);
(next_42371[((1) | (0))] = prev_42370__$1);

(prev_42370__$1[((2) | (0))] = next_42371);

(item_42365[((1) | (0))] = null);

(item_42365[((2) | (0))] = null);
}

return hyperfiddle.electric.impl.gather.done_BANG_(main,it.terminator);
});})(n_42367,item_42365,idle_42366,prev_42364,temp__5806__auto___42362,main))
;
(item_42365[((0) | (0))] = (function (){try{var fexpr__42329 = cljs.core.deref((main[((0) | (0))]));
return (fexpr__42329.cljs$core$IFn$_invoke$arity$2 ? fexpr__42329.cljs$core$IFn$_invoke$arity$2(n_42367,t_42368) : fexpr__42329.call(null,n_42367,t_42368));
}catch (e42328){var e = e42328;
return hyperfiddle.electric.impl.failer.run(e,n_42367,t_42368);
}})());

if(cljs.core.truth_((main[((5) | (0))]))){
if(idle_42366){
var fexpr__42330_42374 = it.notifier;
(fexpr__42330_42374.cljs$core$IFn$_invoke$arity$0 ? fexpr__42330_42374.cljs$core$IFn$_invoke$arity$0() : fexpr__42330_42374.call(null));
} else {
}
} else {
(main[((5) | (0))] = idle_42366);
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
var G__42335_42377 = main;
(G__42335_42377[((1) | (0))] = main);

(G__42335_42377[((2) | (0))] = main);

(G__42335_42377[((4) | (0))] = true);

(G__42335_42377[((5) | (0))] = true);

(G__42335_42377[((6) | (0))] = (1));


(main[((0) | (0))] = (function (){var G__42339 = (function (){
return hyperfiddle.electric.impl.gather.transfer_BANG_(it);
});
var G__42340 = (function (){
return hyperfiddle.electric.impl.gather.done_BANG_(main,t);
});
return (_GT__GT_x.cljs$core$IFn$_invoke$arity$2 ? _GT__GT_x.cljs$core$IFn$_invoke$arity$2(G__42339,G__42340) : _GT__GT_x.call(null,G__42339,G__42340));
})());

hyperfiddle.electric.impl.gather.transfer_BANG_(it);

return it;
});
});

//# sourceMappingURL=hyperfiddle.electric.impl.gather.js.map
