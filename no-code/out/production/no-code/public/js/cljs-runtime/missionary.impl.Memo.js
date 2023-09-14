goog.provide('missionary.impl.Memo');




/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
missionary.impl.Memo.Pub = (function (task,process,failed,result,alive){
this.task = task;
this.process = process;
this.failed = failed;
this.result = result;
this.alive = alive;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.Memo.Pub.prototype.call = (function (unused__13625__auto__){
var self__ = this;
var self__ = this;
var G__43104 = (arguments.length - (1));
switch (G__43104) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.Memo.Pub.prototype.apply = (function (self__,args43103){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args43103)));
}));

(missionary.impl.Memo.Pub.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
return (missionary.impl.Memo.run.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Memo.run.cljs$core$IFn$_invoke$arity$1(this$) : missionary.impl.Memo.run.call(null,this$));
}));

(missionary.impl.Memo.Pub.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (missionary.impl.Memo.sub.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Memo.sub.cljs$core$IFn$_invoke$arity$1(this$__$1) : missionary.impl.Memo.sub.call(null,this$__$1));
}));

(missionary.impl.Memo.Pub.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"task","task",163923534,null),new cljs.core.Symbol(null,"process","process",-1011242831,null),new cljs.core.Symbol(null,"failed","failed",243105765,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"alive","alive",-1229505839,null)], null);
}));

(missionary.impl.Memo.Pub.cljs$lang$type = true);

(missionary.impl.Memo.Pub.cljs$lang$ctorStr = "missionary.impl.Memo/Pub");

(missionary.impl.Memo.Pub.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl.Memo/Pub");
}));

/**
 * Positional factory function for missionary.impl.Memo/Pub.
 */
missionary.impl.Memo.__GT_Pub = (function missionary$impl$Memo$__GT_Pub(task,process,failed,result,alive){
return (new missionary.impl.Memo.Pub(task,process,failed,result,alive));
});


/**
* @constructor
 * @implements {cljs.core.IFn}
*/
missionary.impl.Memo.Sub = (function (pub){
this.pub = pub;
this.cljs$lang$protocol_mask$partition0$ = 1;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.Memo.Sub.prototype.call = (function (unused__13625__auto__){
var self__ = this;
var self__ = this;
var G__43111 = (arguments.length - (1));
switch (G__43111) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.Memo.Sub.prototype.apply = (function (self__,args43108){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args43108)));
}));

(missionary.impl.Memo.Sub.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
return (missionary.impl.Memo.unsub.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Memo.unsub.cljs$core$IFn$_invoke$arity$1(this$) : missionary.impl.Memo.unsub.call(null,this$));
}));

(missionary.impl.Memo.Sub.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pub","pub",451387619,null)], null);
}));

(missionary.impl.Memo.Sub.cljs$lang$type = true);

(missionary.impl.Memo.Sub.cljs$lang$ctorStr = "missionary.impl.Memo/Sub");

(missionary.impl.Memo.Sub.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl.Memo/Sub");
}));

/**
 * Positional factory function for missionary.impl.Memo/Sub.
 */
missionary.impl.Memo.__GT_Sub = (function missionary$impl$Memo$__GT_Sub(pub){
return (new missionary.impl.Memo.Sub(pub));
});

missionary.impl.Memo.run = (function missionary$impl$Memo$run(pub){
(pub.alive = (0));

return missionary.impl.Propagator.dispatch(pub.failed,pub.result);
});
missionary.impl.Memo.sub = (function missionary$impl$Memo$sub(pub){
if((pub.process == null)){
(pub.process = (function (){var G__43132 = missionary.impl.Propagator.bind((function (x){
(pub.result = x);

if((pub.process == null)){
return null;
} else {
return missionary.impl.Propagator.schedule();
}
}));
var G__43133 = missionary.impl.Propagator.bind((function (x){
(pub.result = x);

(pub.failed = true);

if((pub.process == null)){
return null;
} else {
return missionary.impl.Propagator.schedule();
}
}));
var fexpr__43131 = pub.task;
return (fexpr__43131.cljs$core$IFn$_invoke$arity$2 ? fexpr__43131.cljs$core$IFn$_invoke$arity$2(G__43132,G__43133) : fexpr__43131.call(null,G__43132,G__43133));
})());
} else {
}

missionary.impl.Propagator.attach();

if((pub.result === pub)){
(pub.alive = (pub.alive + (1)));
} else {
missionary.impl.Propagator.detach(pub.failed,pub.result);
}

return missionary.impl.Memo.__GT_Sub(pub);
});
missionary.impl.Memo.unsub = (function missionary$impl$Memo$unsub(sub){
var temp__5808__auto__ = sub.pub;
if((temp__5808__auto__ == null)){
return null;
} else {
var pub = temp__5808__auto__;
(sub.pub = null);

if((pub.result === pub)){
var alive = pub.alive;
if(((1) === alive)){
missionary.impl.Propagator.reset((function (){var G__43142 = pub.task;
return (missionary.impl.Memo.make.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Memo.make.cljs$core$IFn$_invoke$arity$1(G__43142) : missionary.impl.Memo.make.call(null,G__43142));
})());

var fexpr__43143 = pub.process;
return (fexpr__43143.cljs$core$IFn$_invoke$arity$0 ? fexpr__43143.cljs$core$IFn$_invoke$arity$0() : fexpr__43143.call(null));
} else {
(pub.alive = (alive - (1)));

return missionary.impl.Propagator.detach(true,(new missionary.Cancelled("Memo subscription cancelled.")));
}
} else {
return null;
}
}
});
missionary.impl.Memo.make = (function missionary$impl$Memo$make(task){
var pub = missionary.impl.Memo.__GT_Pub(task,null,false,null,(0));
return (pub.result = pub);
});

//# sourceMappingURL=missionary.impl.Memo.js.map
