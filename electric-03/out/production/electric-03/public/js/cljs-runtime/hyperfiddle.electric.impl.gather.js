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
var item_41148__$1 = item;
while(true){
if((item_41148__$1 === main)){
} else {
var n_41149 = (item_41148__$1[((2) | (0))]);
(item_41148__$1[((1) | (0))] = null);

(item_41148__$1[((2) | (0))] = null);

var fexpr__41096_41150 = (item_41148__$1[((0) | (0))]);
(fexpr__41096_41150.cljs$core$IFn$_invoke$arity$0 ? fexpr__41096_41150.cljs$core$IFn$_invoke$arity$0() : fexpr__41096_41150.call(null));

var G__41151 = n_41149;
item_41148__$1 = G__41151;
continue;
}
break;
}

(main[((1) | (0))] = null);

(main[((2) | (0))] = null);

var fexpr__41097 = (main[((0) | (0))]);
return (fexpr__41097.cljs$core$IFn$_invoke$arity$0 ? fexpr__41097.cljs$core$IFn$_invoke$arity$0() : fexpr__41097.call(null));
}
});
hyperfiddle.electric.impl.gather.flush_BANG_ = (function hyperfiddle$electric$impl$gather$flush_BANG_(item){
var item__$1 = item;
while(true){
if((!((item__$1 == null)))){
var next = (function (){var a__40950__auto__ = item__$1;
var i__40951__auto__ = ((3) | (0));
var x__40952__auto__ = (a__40950__auto__[i__40951__auto__]);
(a__40950__auto__[i__40951__auto__] = null);

return x__40952__auto__;
})();
try{cljs.core.deref((item__$1[((0) | (0))]));
}catch (e41108){var __41156 = e41108;
}
var G__41157 = next;
item__$1 = G__41157;
continue;
} else {
return null;
}
break;
}
});
hyperfiddle.electric.impl.gather.fail_BANG_ = (function hyperfiddle$electric$impl$gather$fail_BANG_(main,item,error){
hyperfiddle.electric.impl.gather.cancel_BANG_(main);

hyperfiddle.electric.impl.gather.flush_BANG_((function (){var a__40950__auto__ = main;
var i__40951__auto__ = ((3) | (0));
var x__40952__auto__ = (a__40950__auto__[i__40951__auto__]);
(a__40950__auto__[i__40951__auto__] = null);

return x__40952__auto__;
})());

hyperfiddle.electric.impl.gather.flush_BANG_(item);

throw error;
});
hyperfiddle.electric.impl.gather.sample_BANG_ = (function hyperfiddle$electric$impl$gather$sample_BANG_(main,rf,notifier){
var idle = (function (){var a__40950__auto__ = main;
var i__40951__auto__ = ((5) | (0));
var x__40952__auto__ = (a__40950__auto__[i__40951__auto__]);
(a__40950__auto__[i__40951__auto__] = false);

return x__40952__auto__;
})();
var head = (function (){var a__40950__auto__ = main;
var i__40951__auto__ = ((3) | (0));
var x__40952__auto__ = (a__40950__auto__[i__40951__auto__]);
(a__40950__auto__[i__40951__auto__] = null);

return x__40952__auto__;
})();
var item = (function (){var a__40950__auto__ = head;
var i__40951__auto__ = ((3) | (0));
var x__40952__auto__ = (a__40950__auto__[i__40951__auto__]);
(a__40950__auto__[i__40951__auto__] = null);

return x__40952__auto__;
})();
var r = (function (){try{return cljs.core.deref((head[((0) | (0))]));
}catch (e41120){var e = e41120;
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
var next = (function (){var a__40950__auto__ = item;
var i__40951__auto__ = ((3) | (0));
var x__40952__auto__ = (a__40950__auto__[i__40951__auto__]);
(a__40950__auto__[i__40951__auto__] = null);

return x__40952__auto__;
})();
var G__41162 = next;
var G__41163 = (function (){try{var G__41126 = r;
var G__41127 = cljs.core.deref((item[((0) | (0))]));
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__41126,G__41127) : rf.call(null,G__41126,G__41127));
}catch (e41121){var e = e41121;
return hyperfiddle.electric.impl.gather.fail_BANG_(main,next,e);
}})();
item = G__41162;
r = G__41163;
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
(hyperfiddle.electric.impl.gather.It.prototype.call = (function (unused__13632__auto__){
var self__ = this;
var self__ = this;
var G__41132 = (arguments.length - (1));
switch (G__41132) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.gather.It.prototype.apply = (function (self__,args41129){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args41129)));
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
var temp__5806__auto___41169 = (main[((1) | (0))]);
if((temp__5806__auto___41169 == null)){
try{cljs.core.deref((main[((0) | (0))]));
}catch (e41139){var __41170 = e41139;
}} else {
var prev_41171 = temp__5806__auto___41169;
var item_41172 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(((4) | (0)));
var idle_41173 = (function (){var a__40950__auto__ = main;
var i__40951__auto__ = ((5) | (0));
var x__40952__auto__ = (a__40950__auto__[i__40951__auto__]);
(a__40950__auto__[i__40951__auto__] = false);

return x__40952__auto__;
})();
(main[((6) | (0))] = ((main[((6) | (0))]) + (1)));

(item_41172[((1) | (0))] = prev_41171);

(prev_41171[((2) | (0))] = item_41172);

(main[((1) | (0))] = item_41172);

(item_41172[((2) | (0))] = main);

var n_41174 = ((function (item_41172,idle_41173,prev_41171,temp__5806__auto___41169,main){
return (function (){
if(((item_41172[((1) | (0))]) == null)){
try{return cljs.core.deref((item_41172[((0) | (0))]));
}catch (e41140){var _ = e41140;
return null;
}} else {
var temp__5806__auto____$1 = (function (){var a__40950__auto__ = main;
var i__40951__auto__ = ((3) | (0));
var x__40952__auto__ = (a__40950__auto__[i__40951__auto__]);
(a__40950__auto__[i__40951__auto__] = item_41172);

return x__40952__auto__;
})();
if((temp__5806__auto____$1 == null)){
if(cljs.core.truth_((main[((5) | (0))]))){
var fexpr__41141 = it.notifier;
return (fexpr__41141.cljs$core$IFn$_invoke$arity$0 ? fexpr__41141.cljs$core$IFn$_invoke$arity$0() : fexpr__41141.call(null));
} else {
return (main[((5) | (0))] = true);
}
} else {
var curr = temp__5806__auto____$1;
return (item_41172[((3) | (0))] = curr);
}
}
});})(item_41172,idle_41173,prev_41171,temp__5806__auto___41169,main))
;
var t_41175 = ((function (n_41174,item_41172,idle_41173,prev_41171,temp__5806__auto___41169,main){
return (function (){
var temp__5808__auto___41176 = (item_41172[((1) | (0))]);
if((temp__5808__auto___41176 == null)){
} else {
var prev_41177__$1 = temp__5808__auto___41176;
var next_41178 = (item_41172[((2) | (0))]);
(next_41178[((1) | (0))] = prev_41177__$1);

(prev_41177__$1[((2) | (0))] = next_41178);

(item_41172[((1) | (0))] = null);

(item_41172[((2) | (0))] = null);
}

return hyperfiddle.electric.impl.gather.done_BANG_(main,it.terminator);
});})(n_41174,item_41172,idle_41173,prev_41171,temp__5806__auto___41169,main))
;
(item_41172[((0) | (0))] = (function (){try{var fexpr__41143 = cljs.core.deref((main[((0) | (0))]));
return (fexpr__41143.cljs$core$IFn$_invoke$arity$2 ? fexpr__41143.cljs$core$IFn$_invoke$arity$2(n_41174,t_41175) : fexpr__41143.call(null,n_41174,t_41175));
}catch (e41142){var e = e41142;
return hyperfiddle.electric.impl.failer.run(e,n_41174,t_41175);
}})());

if(cljs.core.truth_((main[((5) | (0))]))){
if(idle_41173){
var fexpr__41144_41183 = it.notifier;
(fexpr__41144_41183.cljs$core$IFn$_invoke$arity$0 ? fexpr__41144_41183.cljs$core$IFn$_invoke$arity$0() : fexpr__41144_41183.call(null));
} else {
}
} else {
(main[((5) | (0))] = idle_41173);
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
var G__41145_41184 = main;
(G__41145_41184[((1) | (0))] = main);

(G__41145_41184[((2) | (0))] = main);

(G__41145_41184[((4) | (0))] = true);

(G__41145_41184[((5) | (0))] = true);

(G__41145_41184[((6) | (0))] = (1));


(main[((0) | (0))] = (function (){var G__41146 = (function (){
return hyperfiddle.electric.impl.gather.transfer_BANG_(it);
});
var G__41147 = (function (){
return hyperfiddle.electric.impl.gather.done_BANG_(main,t);
});
return (_GT__GT_x.cljs$core$IFn$_invoke$arity$2 ? _GT__GT_x.cljs$core$IFn$_invoke$arity$2(G__41146,G__41147) : _GT__GT_x.call(null,G__41146,G__41147));
})());

hyperfiddle.electric.impl.gather.transfer_BANG_(it);

return it;
});
});

//# sourceMappingURL=hyperfiddle.electric.impl.gather.js.map
