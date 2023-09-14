goog.provide('missionary.impl.Stream');





/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
missionary.impl.Stream.Pub = (function (flow,process,ready,failed,done,value,attached,pending,step){
this.flow = flow;
this.process = process;
this.ready = ready;
this.failed = failed;
this.done = done;
this.value = value;
this.attached = attached;
this.pending = pending;
this.step = step;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.Stream.Pub.prototype.call = (function (unused__13625__auto__){
var self__ = this;
var self__ = this;
var G__43106 = (arguments.length - (1));
switch (G__43106) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.Stream.Pub.prototype.apply = (function (self__,args43102){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args43102)));
}));

(missionary.impl.Stream.Pub.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
return (missionary.impl.Stream.run.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Stream.run.cljs$core$IFn$_invoke$arity$1(this$) : missionary.impl.Stream.run.call(null,this$));
}));

(missionary.impl.Stream.Pub.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (missionary.impl.Stream.sub.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Stream.sub.cljs$core$IFn$_invoke$arity$1(this$__$1) : missionary.impl.Stream.sub.call(null,this$__$1));
}));

(missionary.impl.Stream.Pub.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flow","flow",-2063946737,null),new cljs.core.Symbol(null,"process","process",-1011242831,null),cljs.core.with_meta(new cljs.core.Symbol(null,"ready","ready",-1567969974,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"failed","failed",243105765,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"done","done",750687339,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),new cljs.core.Symbol(null,"value","value",1946509744,null),cljs.core.with_meta(new cljs.core.Symbol(null,"attached","attached",427767234,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"pending","pending",1420494800,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"step","step",-1365547645,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null)], null))], null);
}));

(missionary.impl.Stream.Pub.cljs$lang$type = true);

(missionary.impl.Stream.Pub.cljs$lang$ctorStr = "missionary.impl.Stream/Pub");

(missionary.impl.Stream.Pub.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl.Stream/Pub");
}));

/**
 * Positional factory function for missionary.impl.Stream/Pub.
 */
missionary.impl.Stream.__GT_Pub = (function missionary$impl$Stream$__GT_Pub(flow,process,ready,failed,done,value,attached,pending,step){
return (new missionary.impl.Stream.Pub(flow,process,ready,failed,done,value,attached,pending,step));
});


/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
missionary.impl.Stream.Sub = (function (pub){
this.pub = pub;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.Stream.Sub.prototype.call = (function (unused__13625__auto__){
var self__ = this;
var self__ = this;
var G__43112 = (arguments.length - (1));
switch (G__43112) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.Stream.Sub.prototype.apply = (function (self__,args43109){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args43109)));
}));

(missionary.impl.Stream.Sub.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
return (missionary.impl.Stream.unsub.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Stream.unsub.cljs$core$IFn$_invoke$arity$1(this$) : missionary.impl.Stream.unsub.call(null,this$));
}));

(missionary.impl.Stream.Sub.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (missionary.impl.Stream.transfer.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Stream.transfer.cljs$core$IFn$_invoke$arity$1(this$__$1) : missionary.impl.Stream.transfer.call(null,this$__$1));
}));

(missionary.impl.Stream.Sub.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pub","pub",451387619,null)], null);
}));

(missionary.impl.Stream.Sub.cljs$lang$type = true);

(missionary.impl.Stream.Sub.cljs$lang$ctorStr = "missionary.impl.Stream/Sub");

(missionary.impl.Stream.Sub.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl.Stream/Sub");
}));

/**
 * Positional factory function for missionary.impl.Stream/Sub.
 */
missionary.impl.Stream.__GT_Sub = (function missionary$impl$Stream$__GT_Sub(pub){
return (new missionary.impl.Stream.Sub(pub));
});

missionary.impl.Stream.emit = (function missionary$impl$Stream$emit(pub){
(pub.pending = pub.attached);

(pub.attached = (0));

(pub.value = pub);

(pub.ready = false);

(pub.step = missionary.impl.Propagator.step());

return missionary.impl.Propagator.dispatch(false,missionary.impl.Propagator.none);
});
missionary.impl.Stream.run = (function missionary$impl$Stream$run(pub){
(pub.ready = true);

if((pub.pending === (0))){
return missionary.impl.Stream.emit(pub);
} else {
return null;
}
});
missionary.impl.Stream.sub = (function missionary$impl$Stream$sub(pub){
if((pub.process == null)){
(pub.process = (function (){var G__43138 = missionary.impl.Propagator.bind((function (){
if((pub.process == null)){
return missionary.impl.Stream.emit(pub);
} else {
return missionary.impl.Propagator.schedule();
}
}));
var G__43139 = missionary.impl.Propagator.bind((function (){
(pub.done = true);

(pub.attached = (0));

return missionary.impl.Propagator.dispatch(true,missionary.impl.Propagator.none);
}));
var fexpr__43137 = pub.flow;
return (fexpr__43137.cljs$core$IFn$_invoke$arity$2 ? fexpr__43137.cljs$core$IFn$_invoke$arity$2(G__43138,G__43139) : fexpr__43137.call(null,G__43138,G__43139));
})());
} else {
}

missionary.impl.Propagator.attach();

if((pub.step === missionary.impl.Propagator.step())){
(pub.pending = (pub.pending + (1)));

missionary.impl.Propagator.detach(false,missionary.impl.Propagator.none);
} else {
(pub.attached = (pub.attached + (1)));
}

return missionary.impl.Stream.__GT_Sub(pub);
});
missionary.impl.Stream.unsub = (function missionary$impl$Stream$unsub(sub){
var temp__5808__auto__ = sub.pub;
if((temp__5808__auto__ == null)){
return null;
} else {
var pub = temp__5808__auto__;
if(cljs.core.truth_(pub.done)){
return null;
} else {
var attached = pub.attached;
var pending = pub.pending;
if(((1) === (attached + pending))){
var temp__5808__auto____$1 = pub.flow;
if((temp__5808__auto____$1 == null)){
return null;
} else {
var flow = temp__5808__auto____$1;
(pub.flow = null);

missionary.impl.Propagator.reset((missionary.impl.Stream.make.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Stream.make.cljs$core$IFn$_invoke$arity$1(flow) : missionary.impl.Stream.make.call(null,flow)));

var fexpr__43150 = pub.process;
return (fexpr__43150.cljs$core$IFn$_invoke$arity$0 ? fexpr__43150.cljs$core$IFn$_invoke$arity$0() : fexpr__43150.call(null));
}
} else {
(sub.pub = null);

if(missionary.impl.Propagator.attached()){
(pub.attached = (attached - (1)));

return missionary.impl.Propagator.detach(false,missionary.impl.Propagator.none);
} else {
(pub.pending = (pending - (1)));

if(((1) === pending)){
if(cljs.core.truth_(pub.ready)){
return missionary.impl.Stream.emit(pub);
} else {
return null;
}
} else {
return null;
}
}
}
}
}
});
missionary.impl.Stream.transfer = (function missionary$impl$Stream$transfer(sub){
var temp__5806__auto__ = sub.pub;
if((temp__5806__auto__ == null)){
missionary.impl.Propagator.attach();

missionary.impl.Propagator.detach(true,missionary.impl.Propagator.none);

throw (new missionary.Cancelled("Stream subscription cancelled."));
} else {
var pub = temp__5806__auto__;
var x = pub.value;
var x__$1 = (((x === pub))?(pub.value = (function (){try{return cljs.core.deref(pub.process);
}catch (e43159){var e = e43159;
(pub.failed = true);

return e;
}})()):x);
missionary.impl.Propagator.attach();

if(cljs.core.truth_(pub.done)){
missionary.impl.Propagator.detach(true,missionary.impl.Propagator.none);
} else {
(pub.attached = (pub.attached + (1)));

if(((pub.pending = (pub.pending - (1))) === (0))){
if(cljs.core.truth_(pub.ready)){
missionary.impl.Stream.emit(pub);
} else {
}
} else {
}
}

if(cljs.core.truth_(pub.failed)){
throw x__$1;
} else {
return x__$1;
}
}
});
missionary.impl.Stream.make = (function missionary$impl$Stream$make(flow){
return missionary.impl.Stream.__GT_Pub(flow,null,false,false,false,null,(0),(0),(-1));
});

//# sourceMappingURL=missionary.impl.Stream.js.map
