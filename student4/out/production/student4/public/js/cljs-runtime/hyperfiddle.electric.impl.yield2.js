goog.provide('hyperfiddle.electric.impl.yield2');

hyperfiddle.electric.impl.yield2.input = ((0) | (0));

hyperfiddle.electric.impl.yield2.recover = ((1) | (0));

hyperfiddle.electric.impl.yield2.children = ((2) | (0));

hyperfiddle.electric.impl.yield2.last_in = ((3) | (0));

hyperfiddle.electric.impl.yield2.last_out = ((4) | (0));

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
hyperfiddle.electric.impl.yield2.Yield = (function (checker,notifier,terminator,state_){
this.checker = checker;
this.notifier = notifier;
this.terminator = terminator;
this.state_ = state_;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.yield2.Yield.prototype.call = (function (unused__15562__auto__){
var self__ = this;
var self__ = this;
var G__43866 = (arguments.length - (1));
switch (G__43866) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.yield2.Yield.prototype.apply = (function (self__,args43865){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args43865)));
}));

(hyperfiddle.electric.impl.yield2.Yield.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
return (hyperfiddle.electric.impl.yield2.cancel.cljs$core$IFn$_invoke$arity$1 ? hyperfiddle.electric.impl.yield2.cancel.cljs$core$IFn$_invoke$arity$1(this$) : hyperfiddle.electric.impl.yield2.cancel.call(null,this$));
}));

(hyperfiddle.electric.impl.yield2.Yield.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (hyperfiddle.electric.impl.yield2.transfer.cljs$core$IFn$_invoke$arity$1 ? hyperfiddle.electric.impl.yield2.transfer.cljs$core$IFn$_invoke$arity$1(this$__$1) : hyperfiddle.electric.impl.yield2.transfer.call(null,this$__$1));
}));

(hyperfiddle.electric.impl.yield2.Yield.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"checker","checker",2053644407,null),new cljs.core.Symbol(null,"notifier","notifier",1670358652,null),new cljs.core.Symbol(null,"terminator","terminator",-1051388676,null),new cljs.core.Symbol(null,"state-","state-",-416998234,null)], null);
}));

(hyperfiddle.electric.impl.yield2.Yield.cljs$lang$type = true);

(hyperfiddle.electric.impl.yield2.Yield.cljs$lang$ctorStr = "hyperfiddle.electric.impl.yield2/Yield");

(hyperfiddle.electric.impl.yield2.Yield.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.yield2/Yield");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.yield2/Yield.
 */
hyperfiddle.electric.impl.yield2.__GT_Yield = (function hyperfiddle$electric$impl$yield2$__GT_Yield(checker,notifier,terminator,state_){
return (new hyperfiddle.electric.impl.yield2.Yield(checker,notifier,terminator,state_));
});

hyperfiddle.electric.impl.yield2.iterator = ((0) | (0));

hyperfiddle.electric.impl.yield2.notified_QMARK_ = ((1) | (0));

hyperfiddle.electric.impl.yield2.on_notify = ((2) | (0));
hyperfiddle.electric.impl.yield2.input_notified = (function hyperfiddle$electric$impl$yield2$input_notified(Y){
if(cljs.core.truth_((function (){var or__5045__auto__ = hyperfiddle.electric.impl.array_fields.getset(hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.input),hyperfiddle.electric.impl.yield2.notified_QMARK_,true);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var G__43878 = hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.recover);
if((G__43878 == null)){
return null;
} else {
return hyperfiddle.electric.impl.array_fields.get(G__43878,hyperfiddle.electric.impl.yield2.notified_QMARK_);
}
}
})())){
return null;
} else {
var fexpr__43879 = Y.notifier;
return (fexpr__43879.cljs$core$IFn$_invoke$arity$0 ? fexpr__43879.cljs$core$IFn$_invoke$arity$0() : fexpr__43879.call(null));
}
});
hyperfiddle.electric.impl.yield2.recover_notified = (function hyperfiddle$electric$impl$yield2$recover_notified(Y){
if(cljs.core.truth_((function (){var or__5045__auto__ = hyperfiddle.electric.impl.array_fields.getset(hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.recover),hyperfiddle.electric.impl.yield2.notified_QMARK_,true);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return hyperfiddle.electric.impl.array_fields.get(hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.input),hyperfiddle.electric.impl.yield2.notified_QMARK_);
}
})())){
return null;
} else {
var fexpr__43880 = Y.notifier;
return (fexpr__43880.cljs$core$IFn$_invoke$arity$0 ? fexpr__43880.cljs$core$IFn$_invoke$arity$0() : fexpr__43880.call(null));
}
});
hyperfiddle.electric.impl.yield2.terminated = (function hyperfiddle$electric$impl$yield2$terminated(Y){
if((hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$3(Y.state_,hyperfiddle.electric.impl.yield2.children,cljs.core.dec) === (0))){
var fexpr__43881 = Y.terminator;
return (fexpr__43881.cljs$core$IFn$_invoke$arity$0 ? fexpr__43881.cljs$core$IFn$_invoke$arity$0() : fexpr__43881.call(null));
} else {
return null;
}
});
hyperfiddle.electric.impl.yield2.swallow = (function hyperfiddle$electric$impl$yield2$swallow(o){
try{return cljs.core.deref(hyperfiddle.electric.impl.array_fields.get(o,hyperfiddle.electric.impl.yield2.iterator));
}catch (e43883){var _ = e43883;
return null;
}});
hyperfiddle.electric.impl.yield2.trash = (function hyperfiddle$electric$impl$yield2$trash(o){
var arr43888_43985 = o;
(arr43888_43985[hyperfiddle.electric.impl.yield2.on_notify] = cljs.core.identity((function (){
return hyperfiddle.electric.impl.yield2.swallow(o);
})));

var fexpr__43889_43986 = hyperfiddle.electric.impl.array_fields.get(o,hyperfiddle.electric.impl.yield2.iterator);
(fexpr__43889_43986.cljs$core$IFn$_invoke$arity$0 ? fexpr__43889_43986.cljs$core$IFn$_invoke$arity$0() : fexpr__43889_43986.call(null));

if(cljs.core.truth_(hyperfiddle.electric.impl.array_fields.getset(o,hyperfiddle.electric.impl.yield2.notified_QMARK_,false))){
return hyperfiddle.electric.impl.yield2.swallow(o);
} else {
return null;
}
});
hyperfiddle.electric.impl.yield2.cancel = (function hyperfiddle$electric$impl$yield2$cancel(Y){
var fexpr__43892_43987 = hyperfiddle.electric.impl.array_fields.get(hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.input),hyperfiddle.electric.impl.yield2.iterator);
(fexpr__43892_43987.cljs$core$IFn$_invoke$arity$0 ? fexpr__43892_43987.cljs$core$IFn$_invoke$arity$0() : fexpr__43892_43987.call(null));

var temp__5808__auto__ = hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.recover);
if((temp__5808__auto__ == null)){
return null;
} else {
var rec = temp__5808__auto__;
return hyperfiddle.electric.impl.yield2.trash(rec);
}
});
hyperfiddle.electric.impl.yield2.create_recover = (function hyperfiddle$electric$impl$yield2$create_recover(Y,_GT_r){
var temp__5808__auto___43988 = hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.recover);
if((temp__5808__auto___43988 == null)){
} else {
var rec_43990 = temp__5808__auto___43988;
hyperfiddle.electric.impl.yield2.trash(rec_43990);
}

hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$3(Y.state_,hyperfiddle.electric.impl.yield2.children,cljs.core.inc);

var me = (function (){var arr43900 = Y.state_;
return (arr43900[hyperfiddle.electric.impl.yield2.recover] = cljs.core.identity(cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((3))));
})();
var arr43901 = me;
(arr43901[hyperfiddle.electric.impl.yield2.on_notify] = cljs.core.identity((function (){
var arr43902 = me;
return (arr43902[hyperfiddle.electric.impl.yield2.notified_QMARK_] = cljs.core.identity(true));
})));

return (arr43901[hyperfiddle.electric.impl.yield2.iterator] = cljs.core.identity((function (){var G__43904 = (function (){
var fexpr__43906 = hyperfiddle.electric.impl.array_fields.get(me,hyperfiddle.electric.impl.yield2.on_notify);
return (fexpr__43906.cljs$core$IFn$_invoke$arity$0 ? fexpr__43906.cljs$core$IFn$_invoke$arity$0() : fexpr__43906.call(null));
});
var G__43905 = (function (){
return hyperfiddle.electric.impl.yield2.terminated(Y);
});
return (_GT_r.cljs$core$IFn$_invoke$arity$2 ? _GT_r.cljs$core$IFn$_invoke$arity$2(G__43904,G__43905) : _GT_r.call(null,G__43904,G__43905));
})()));
});
hyperfiddle.electric.impl.yield2.transfer_loop = (function hyperfiddle$electric$impl$yield2$transfer_loop(o){
while(true){
var arr43908_43992 = o;
(arr43908_43992[hyperfiddle.electric.impl.yield2.notified_QMARK_] = cljs.core.identity(false));

var v = cljs.core.deref(hyperfiddle.electric.impl.array_fields.get(o,hyperfiddle.electric.impl.yield2.iterator));
if(cljs.core.truth_(hyperfiddle.electric.impl.array_fields.get(o,hyperfiddle.electric.impl.yield2.notified_QMARK_))){
var G__43993 = o;
o = G__43993;
continue;
} else {
return v;
}
break;
}
});
hyperfiddle.electric.impl.yield2.transfer_recover = (function hyperfiddle$electric$impl$yield2$transfer_recover(Y){
var arr43910 = Y.state_;
return (arr43910[hyperfiddle.electric.impl.yield2.last_out] = cljs.core.identity(hyperfiddle.electric.impl.yield2.transfer_loop(hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.recover))));
});
hyperfiddle.electric.impl.yield2.transfer_input = (function hyperfiddle$electric$impl$yield2$transfer_input(Y){
var in$ = hyperfiddle.electric.impl.yield2.transfer_loop(hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.input));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in$,hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.last_in))){
if(cljs.core.truth_((function (){var G__43912 = hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.recover);
if((G__43912 == null)){
return null;
} else {
return hyperfiddle.electric.impl.array_fields.get(G__43912,hyperfiddle.electric.impl.yield2.notified_QMARK_);
}
})())){
return hyperfiddle.electric.impl.yield2.transfer_recover(Y);
} else {
return hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.last_out);
}
} else {
var temp__5806__auto__ = (function (){var fexpr__43913 = Y.checker;
return (fexpr__43913.cljs$core$IFn$_invoke$arity$1 ? fexpr__43913.cljs$core$IFn$_invoke$arity$1(in$) : fexpr__43913.call(null,in$));
})();
if((temp__5806__auto__ == null)){
var arr43914_43999 = Y.state_;
(arr43914_43999[hyperfiddle.electric.impl.yield2.last_in] = cljs.core.identity(new cljs.core.Keyword("hyperfiddle.electric.impl.yield2","none","hyperfiddle.electric.impl.yield2/none",934748982)));

var temp__5808__auto___44001 = hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.recover);
if((temp__5808__auto___44001 == null)){
} else {
var rec_44002 = temp__5808__auto___44001;
hyperfiddle.electric.impl.yield2.trash(rec_44002);
}

return in$;
} else {
var _GT_recover = temp__5806__auto__;
var out = (function (){
hyperfiddle.electric.impl.yield2.create_recover(Y,_GT_recover);

return hyperfiddle.electric.impl.yield2.transfer_recover(Y);
})()
;
var arr43915_44003 = hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.recover);
(arr43915_44003[hyperfiddle.electric.impl.yield2.on_notify] = cljs.core.identity((function (){
return hyperfiddle.electric.impl.yield2.recover_notified(Y);
})));

var arr43916 = Y.state_;
(arr43916[hyperfiddle.electric.impl.yield2.last_in] = cljs.core.identity(in$));

return (arr43916[hyperfiddle.electric.impl.yield2.last_out] = cljs.core.identity(out));
}
}
});
hyperfiddle.electric.impl.yield2.transfer = (function hyperfiddle$electric$impl$yield2$transfer(Y){
try{hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$3(Y.state_,hyperfiddle.electric.impl.yield2.children,cljs.core.inc);

if(cljs.core.truth_(hyperfiddle.electric.impl.array_fields.get(hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.input),hyperfiddle.electric.impl.yield2.notified_QMARK_))){
return hyperfiddle.electric.impl.yield2.transfer_input(Y);
} else {
if(cljs.core.truth_(hyperfiddle.electric.impl.array_fields.get(hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.recover),hyperfiddle.electric.impl.yield2.notified_QMARK_))){
return hyperfiddle.electric.impl.yield2.transfer_recover(Y);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("You cannot transfer a value if I haven't notified you",cljs.core.PersistentArrayMap.EMPTY);

}
}
}catch (e43924){var e = e43924;
hyperfiddle.electric.impl.yield2.trash(hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.input));

var temp__5808__auto___44005 = hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.recover);
if((temp__5808__auto___44005 == null)){
} else {
var rec_44006 = temp__5808__auto___44005;
hyperfiddle.electric.impl.yield2.trash(rec_44006);
}

throw e;
}finally {hyperfiddle.electric.impl.yield2.terminated(Y);
}});
hyperfiddle.electric.impl.yield2.yield$ = (function hyperfiddle$electric$impl$yield2$yield(checker,_GT_input){
return (function (n,t){
var Y = hyperfiddle.electric.impl.yield2.__GT_Yield(checker,n,t,cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((5)));
var me = (function (){var arr43932 = Y.state_;
(arr43932[hyperfiddle.electric.impl.yield2.children] = cljs.core.identity((1)));

(arr43932[hyperfiddle.electric.impl.yield2.last_in] = cljs.core.identity(new cljs.core.Keyword("hyperfiddle.electric.impl.yield2","none","hyperfiddle.electric.impl.yield2/none",934748982)));

return (arr43932[hyperfiddle.electric.impl.yield2.input] = cljs.core.identity(cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((3))));
})();
var arr43936_44009 = me;
(arr43936_44009[hyperfiddle.electric.impl.yield2.on_notify] = cljs.core.identity((function (){
return hyperfiddle.electric.impl.yield2.input_notified(Y);
})));

(arr43936_44009[hyperfiddle.electric.impl.yield2.iterator] = cljs.core.identity((function (){var G__43941 = (function (){
var fexpr__43943 = hyperfiddle.electric.impl.array_fields.get(me,hyperfiddle.electric.impl.yield2.on_notify);
return (fexpr__43943.cljs$core$IFn$_invoke$arity$0 ? fexpr__43943.cljs$core$IFn$_invoke$arity$0() : fexpr__43943.call(null));
});
var G__43942 = (function (){
return hyperfiddle.electric.impl.yield2.terminated(Y);
});
return (_GT_input.cljs$core$IFn$_invoke$arity$2 ? _GT_input.cljs$core$IFn$_invoke$arity$2(G__43941,G__43942) : _GT_input.call(null,G__43941,G__43942));
})()));

return Y;
});
});

//# sourceMappingURL=hyperfiddle.electric.impl.yield2.js.map
