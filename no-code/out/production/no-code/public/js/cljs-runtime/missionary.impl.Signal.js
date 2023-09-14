goog.provide('missionary.impl.Signal');




/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
missionary.impl.Signal.Pub = (function (flow,process,alive,done,failed,value){
this.flow = flow;
this.process = process;
this.alive = alive;
this.done = done;
this.failed = failed;
this.value = value;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.Signal.Pub.prototype.call = (function (unused__13625__auto__){
var self__ = this;
var self__ = this;
var G__43105 = (arguments.length - (1));
switch (G__43105) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.Signal.Pub.prototype.apply = (function (self__,args43101){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args43101)));
}));

(missionary.impl.Signal.Pub.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
return missionary.impl.Propagator.dispatch(false,missionary.impl.Propagator.none);
}));

(missionary.impl.Signal.Pub.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (missionary.impl.Signal.sub.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Signal.sub.cljs$core$IFn$_invoke$arity$1(this$__$1) : missionary.impl.Signal.sub.call(null,this$__$1));
}));

(missionary.impl.Signal.Pub.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flow","flow",-2063946737,null),new cljs.core.Symbol(null,"process","process",-1011242831,null),new cljs.core.Symbol(null,"alive","alive",-1229505839,null),new cljs.core.Symbol(null,"done","done",750687339,null),new cljs.core.Symbol(null,"failed","failed",243105765,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
}));

(missionary.impl.Signal.Pub.cljs$lang$type = true);

(missionary.impl.Signal.Pub.cljs$lang$ctorStr = "missionary.impl.Signal/Pub");

(missionary.impl.Signal.Pub.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl.Signal/Pub");
}));

/**
 * Positional factory function for missionary.impl.Signal/Pub.
 */
missionary.impl.Signal.__GT_Pub = (function missionary$impl$Signal$__GT_Pub(flow,process,alive,done,failed,value){
return (new missionary.impl.Signal.Pub(flow,process,alive,done,failed,value));
});


/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
missionary.impl.Signal.Sub = (function (pub){
this.pub = pub;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.Signal.Sub.prototype.call = (function (unused__13625__auto__){
var self__ = this;
var self__ = this;
var G__43113 = (arguments.length - (1));
switch (G__43113) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.Signal.Sub.prototype.apply = (function (self__,args43110){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args43110)));
}));

(missionary.impl.Signal.Sub.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
return (missionary.impl.Signal.unsub.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Signal.unsub.cljs$core$IFn$_invoke$arity$1(this$) : missionary.impl.Signal.unsub.call(null,this$));
}));

(missionary.impl.Signal.Sub.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (missionary.impl.Signal.transfer.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Signal.transfer.cljs$core$IFn$_invoke$arity$1(this$__$1) : missionary.impl.Signal.transfer.call(null,this$__$1));
}));

(missionary.impl.Signal.Sub.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pub","pub",451387619,null)], null);
}));

(missionary.impl.Signal.Sub.cljs$lang$type = true);

(missionary.impl.Signal.Sub.cljs$lang$ctorStr = "missionary.impl.Signal/Sub");

(missionary.impl.Signal.Sub.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl.Signal/Sub");
}));

/**
 * Positional factory function for missionary.impl.Signal/Sub.
 */
missionary.impl.Signal.__GT_Sub = (function missionary$impl$Signal$__GT_Sub(pub){
return (new missionary.impl.Signal.Sub(pub));
});

missionary.impl.Signal.sub = (function missionary$impl$Signal$sub(pub){
if((pub.process == null)){
(pub.process = (function (){var G__43128 = missionary.impl.Propagator.bind((function (){
if((pub.value === pub)){
return (pub.value = null);
} else {
(pub.value = pub);

return missionary.impl.Propagator.schedule();
}
}));
var G__43129 = missionary.impl.Propagator.bind((function (){
(pub.done = true);

return missionary.impl.Propagator.dispatch(true,missionary.impl.Propagator.none);
}));
var fexpr__43127 = pub.flow;
return (fexpr__43127.cljs$core$IFn$_invoke$arity$2 ? fexpr__43127.cljs$core$IFn$_invoke$arity$2(G__43128,G__43129) : fexpr__43127.call(null,G__43128,G__43129));
})());

if((pub.value === pub)){
} else {
(pub.value = pub);
}
} else {
}

missionary.impl.Propagator.attach();

missionary.impl.Propagator.detach(false,missionary.impl.Propagator.none);

(pub.alive = (pub.alive + (1)));

return missionary.impl.Signal.__GT_Sub(pub);
});
missionary.impl.Signal.unsub = (function missionary$impl$Signal$unsub(sub){
var temp__5808__auto__ = sub.pub;
if((temp__5808__auto__ == null)){
return null;
} else {
var pub = temp__5808__auto__;
var alive = pub.alive;
if(((1) === alive)){
var temp__5808__auto____$1 = pub.flow;
if((temp__5808__auto____$1 == null)){
return null;
} else {
var flow = temp__5808__auto____$1;
(pub.flow = null);

missionary.impl.Propagator.reset((missionary.impl.Signal.make.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Signal.make.cljs$core$IFn$_invoke$arity$1(flow) : missionary.impl.Signal.make.call(null,flow)));

var fexpr__43140 = pub.process;
return (fexpr__43140.cljs$core$IFn$_invoke$arity$0 ? fexpr__43140.cljs$core$IFn$_invoke$arity$0() : fexpr__43140.call(null));
}
} else {
(sub.pub = null);

(pub.alive = (alive - (1)));

if(missionary.impl.Propagator.attached()){
return missionary.impl.Propagator.detach(false,missionary.impl.Propagator.none);
} else {
return null;
}
}
}
});
missionary.impl.Signal.transfer = (function missionary$impl$Signal$transfer(sub){
var temp__5806__auto__ = sub.pub;
if((temp__5806__auto__ == null)){
missionary.impl.Propagator.attach();

missionary.impl.Propagator.detach(true,missionary.impl.Propagator.none);

throw (new missionary.Cancelled("Signal subscription cancelled."));
} else {
var pub = temp__5806__auto__;
var x = pub.value;
var x__$1 = (((x === pub))?(pub.value = (function (){try{while(true){
var x__$1 = cljs.core.deref(pub.process);
if((pub.value === pub)){
return x__$1;
} else {
(pub.value = pub);

continue;
}
break;
}
}catch (e43148){var e = e43148;
(pub.failed = true);

return e;
}})()):x);
missionary.impl.Propagator.attach();

if(cljs.core.truth_(pub.done)){
missionary.impl.Propagator.detach(true,missionary.impl.Propagator.none);
} else {
}

if(cljs.core.truth_(pub.failed)){
throw x__$1;
} else {
return x__$1;
}
}
});
missionary.impl.Signal.make = (function missionary$impl$Signal$make(flow){
var pub = missionary.impl.Signal.__GT_Pub(flow,null,(0),false,false,null);
return (pub.value = pub);
});

//# sourceMappingURL=missionary.impl.Signal.js.map
