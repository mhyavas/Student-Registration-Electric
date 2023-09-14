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
(hyperfiddle.electric.impl.yield2.Yield.prototype.call = (function (unused__13625__auto__){
var self__ = this;
var self__ = this;
var G__29803 = (arguments.length - (1));
switch (G__29803) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.yield2.Yield.prototype.apply = (function (self__,args29800){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args29800)));
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
var G__29811 = hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.recover);
if((G__29811 == null)){
return null;
} else {
return hyperfiddle.electric.impl.array_fields.get(G__29811,hyperfiddle.electric.impl.yield2.notified_QMARK_);
}
}
})())){
return null;
} else {
var fexpr__29812 = Y.notifier;
return (fexpr__29812.cljs$core$IFn$_invoke$arity$0 ? fexpr__29812.cljs$core$IFn$_invoke$arity$0() : fexpr__29812.call(null));
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
var fexpr__29813 = Y.notifier;
return (fexpr__29813.cljs$core$IFn$_invoke$arity$0 ? fexpr__29813.cljs$core$IFn$_invoke$arity$0() : fexpr__29813.call(null));
}
});
hyperfiddle.electric.impl.yield2.terminated = (function hyperfiddle$electric$impl$yield2$terminated(Y){
if((hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$3(Y.state_,hyperfiddle.electric.impl.yield2.children,cljs.core.dec) === (0))){
var fexpr__29814 = Y.terminator;
return (fexpr__29814.cljs$core$IFn$_invoke$arity$0 ? fexpr__29814.cljs$core$IFn$_invoke$arity$0() : fexpr__29814.call(null));
} else {
return null;
}
});
hyperfiddle.electric.impl.yield2.swallow = (function hyperfiddle$electric$impl$yield2$swallow(o){
try{return cljs.core.deref(hyperfiddle.electric.impl.array_fields.get(o,hyperfiddle.electric.impl.yield2.iterator));
}catch (e29815){var _ = e29815;
return null;
}});
hyperfiddle.electric.impl.yield2.trash = (function hyperfiddle$electric$impl$yield2$trash(o){
var arr29816_29865 = o;
(arr29816_29865[hyperfiddle.electric.impl.yield2.on_notify] = cljs.core.identity((function (){
return hyperfiddle.electric.impl.yield2.swallow(o);
})));

var fexpr__29817_29866 = hyperfiddle.electric.impl.array_fields.get(o,hyperfiddle.electric.impl.yield2.iterator);
(fexpr__29817_29866.cljs$core$IFn$_invoke$arity$0 ? fexpr__29817_29866.cljs$core$IFn$_invoke$arity$0() : fexpr__29817_29866.call(null));

if(cljs.core.truth_(hyperfiddle.electric.impl.array_fields.getset(o,hyperfiddle.electric.impl.yield2.notified_QMARK_,false))){
return hyperfiddle.electric.impl.yield2.swallow(o);
} else {
return null;
}
});
hyperfiddle.electric.impl.yield2.cancel = (function hyperfiddle$electric$impl$yield2$cancel(Y){
var fexpr__29818_29867 = hyperfiddle.electric.impl.array_fields.get(hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.input),hyperfiddle.electric.impl.yield2.iterator);
(fexpr__29818_29867.cljs$core$IFn$_invoke$arity$0 ? fexpr__29818_29867.cljs$core$IFn$_invoke$arity$0() : fexpr__29818_29867.call(null));

var temp__5808__auto__ = hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.recover);
if((temp__5808__auto__ == null)){
return null;
} else {
var rec = temp__5808__auto__;
return hyperfiddle.electric.impl.yield2.trash(rec);
}
});
hyperfiddle.electric.impl.yield2.create_recover = (function hyperfiddle$electric$impl$yield2$create_recover(Y,_GT_r){
var temp__5808__auto___29868 = hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.recover);
if((temp__5808__auto___29868 == null)){
} else {
var rec_29869 = temp__5808__auto___29868;
hyperfiddle.electric.impl.yield2.trash(rec_29869);
}

hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$3(Y.state_,hyperfiddle.electric.impl.yield2.children,cljs.core.inc);

var me = (function (){var arr29819 = Y.state_;
return (arr29819[hyperfiddle.electric.impl.yield2.recover] = cljs.core.identity(cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((3))));
})();
var arr29820 = me;
(arr29820[hyperfiddle.electric.impl.yield2.on_notify] = cljs.core.identity((function (){
var arr29821 = me;
return (arr29821[hyperfiddle.electric.impl.yield2.notified_QMARK_] = cljs.core.identity(true));
})));

return (arr29820[hyperfiddle.electric.impl.yield2.iterator] = cljs.core.identity((function (){var G__29822 = (function (){
var fexpr__29824 = hyperfiddle.electric.impl.array_fields.get(me,hyperfiddle.electric.impl.yield2.on_notify);
return (fexpr__29824.cljs$core$IFn$_invoke$arity$0 ? fexpr__29824.cljs$core$IFn$_invoke$arity$0() : fexpr__29824.call(null));
});
var G__29823 = (function (){
return hyperfiddle.electric.impl.yield2.terminated(Y);
});
return (_GT_r.cljs$core$IFn$_invoke$arity$2 ? _GT_r.cljs$core$IFn$_invoke$arity$2(G__29822,G__29823) : _GT_r.call(null,G__29822,G__29823));
})()));
});
hyperfiddle.electric.impl.yield2.transfer_loop = (function hyperfiddle$electric$impl$yield2$transfer_loop(o){
while(true){
var arr29836_29870 = o;
(arr29836_29870[hyperfiddle.electric.impl.yield2.notified_QMARK_] = cljs.core.identity(false));

var v = cljs.core.deref(hyperfiddle.electric.impl.array_fields.get(o,hyperfiddle.electric.impl.yield2.iterator));
if(cljs.core.truth_(hyperfiddle.electric.impl.array_fields.get(o,hyperfiddle.electric.impl.yield2.notified_QMARK_))){
var G__29871 = o;
o = G__29871;
continue;
} else {
return v;
}
break;
}
});
hyperfiddle.electric.impl.yield2.transfer_recover = (function hyperfiddle$electric$impl$yield2$transfer_recover(Y){
var arr29842 = Y.state_;
return (arr29842[hyperfiddle.electric.impl.yield2.last_out] = cljs.core.identity(hyperfiddle.electric.impl.yield2.transfer_loop(hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.recover))));
});
hyperfiddle.electric.impl.yield2.transfer_input = (function hyperfiddle$electric$impl$yield2$transfer_input(Y){
var in$ = hyperfiddle.electric.impl.yield2.transfer_loop(hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.input));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in$,hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.last_in))){
if(cljs.core.truth_((function (){var G__29843 = hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.recover);
if((G__29843 == null)){
return null;
} else {
return hyperfiddle.electric.impl.array_fields.get(G__29843,hyperfiddle.electric.impl.yield2.notified_QMARK_);
}
})())){
return hyperfiddle.electric.impl.yield2.transfer_recover(Y);
} else {
return hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.last_out);
}
} else {
var temp__5806__auto__ = (function (){var fexpr__29846 = Y.checker;
return (fexpr__29846.cljs$core$IFn$_invoke$arity$1 ? fexpr__29846.cljs$core$IFn$_invoke$arity$1(in$) : fexpr__29846.call(null,in$));
})();
if((temp__5806__auto__ == null)){
var arr29847_29872 = Y.state_;
(arr29847_29872[hyperfiddle.electric.impl.yield2.last_in] = cljs.core.identity(new cljs.core.Keyword("hyperfiddle.electric.impl.yield2","none","hyperfiddle.electric.impl.yield2/none",934748982)));

var temp__5808__auto___29873 = hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.recover);
if((temp__5808__auto___29873 == null)){
} else {
var rec_29874 = temp__5808__auto___29873;
hyperfiddle.electric.impl.yield2.trash(rec_29874);
}

return in$;
} else {
var _GT_recover = temp__5806__auto__;
var out = (function (){
hyperfiddle.electric.impl.yield2.create_recover(Y,_GT_recover);

return hyperfiddle.electric.impl.yield2.transfer_recover(Y);
})()
;
var arr29848_29875 = hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.recover);
(arr29848_29875[hyperfiddle.electric.impl.yield2.on_notify] = cljs.core.identity((function (){
return hyperfiddle.electric.impl.yield2.recover_notified(Y);
})));

var arr29849 = Y.state_;
(arr29849[hyperfiddle.electric.impl.yield2.last_in] = cljs.core.identity(in$));

return (arr29849[hyperfiddle.electric.impl.yield2.last_out] = cljs.core.identity(out));
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
}catch (e29850){var e = e29850;
hyperfiddle.electric.impl.yield2.trash(hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.input));

var temp__5808__auto___29877 = hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.recover);
if((temp__5808__auto___29877 == null)){
} else {
var rec_29878 = temp__5808__auto___29877;
hyperfiddle.electric.impl.yield2.trash(rec_29878);
}

throw e;
}finally {hyperfiddle.electric.impl.yield2.terminated(Y);
}});
hyperfiddle.electric.impl.yield2.yield$ = (function hyperfiddle$electric$impl$yield2$yield(checker,_GT_input){
return (function (n,t){
var Y = hyperfiddle.electric.impl.yield2.__GT_Yield(checker,n,t,cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((5)));
var me = (function (){var arr29853 = Y.state_;
(arr29853[hyperfiddle.electric.impl.yield2.children] = cljs.core.identity((1)));

(arr29853[hyperfiddle.electric.impl.yield2.last_in] = cljs.core.identity(new cljs.core.Keyword("hyperfiddle.electric.impl.yield2","none","hyperfiddle.electric.impl.yield2/none",934748982)));

return (arr29853[hyperfiddle.electric.impl.yield2.input] = cljs.core.identity(cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((3))));
})();
var arr29856_29879 = me;
(arr29856_29879[hyperfiddle.electric.impl.yield2.on_notify] = cljs.core.identity((function (){
return hyperfiddle.electric.impl.yield2.input_notified(Y);
})));

(arr29856_29879[hyperfiddle.electric.impl.yield2.iterator] = cljs.core.identity((function (){var G__29857 = (function (){
var fexpr__29859 = hyperfiddle.electric.impl.array_fields.get(me,hyperfiddle.electric.impl.yield2.on_notify);
return (fexpr__29859.cljs$core$IFn$_invoke$arity$0 ? fexpr__29859.cljs$core$IFn$_invoke$arity$0() : fexpr__29859.call(null));
});
var G__29858 = (function (){
return hyperfiddle.electric.impl.yield2.terminated(Y);
});
return (_GT_input.cljs$core$IFn$_invoke$arity$2 ? _GT_input.cljs$core$IFn$_invoke$arity$2(G__29857,G__29858) : _GT_input.call(null,G__29857,G__29858));
})()));

return Y;
});
});

//# sourceMappingURL=hyperfiddle.electric.impl.yield2.js.map
