goog.provide('missionary.impl.Sample');

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
missionary.impl.Sample.Process = (function (combinator,notifier,terminator,args,inputs,busy,done,alive){
this.combinator = combinator;
this.notifier = notifier;
this.terminator = terminator;
this.args = args;
this.inputs = inputs;
this.busy = busy;
this.done = done;
this.alive = alive;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.Sample.Process.prototype.call = (function (unused__15668__auto__){
var self__ = this;
var self__ = this;
var G__41459 = (arguments.length - (1));
switch (G__41459) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.Sample.Process.prototype.apply = (function (self__,args41455){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args41455)));
}));

(missionary.impl.Sample.Process.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
var fexpr__41460 = (self__.inputs[(self__.inputs.length - (1))]);
return (fexpr__41460.cljs$core$IFn$_invoke$arity$0 ? fexpr__41460.cljs$core$IFn$_invoke$arity$0() : fexpr__41460.call(null));
}));

(missionary.impl.Sample.Process.prototype.cljs$core$IDeref$_deref$arity$1 = (function (p){
var self__ = this;
var p__$1 = this;
return (missionary.impl.Sample.transfer.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Sample.transfer.cljs$core$IFn$_invoke$arity$1(p__$1) : missionary.impl.Sample.transfer.call(null,p__$1));
}));

(missionary.impl.Sample.Process.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"combinator","combinator",-746639828,null),new cljs.core.Symbol(null,"notifier","notifier",1670358652,null),new cljs.core.Symbol(null,"terminator","terminator",-1051388676,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),cljs.core.with_meta(new cljs.core.Symbol(null,"busy","busy",1312244726,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"done","done",750687339,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"alive","alive",-1229505839,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null)], null))], null);
}));

(missionary.impl.Sample.Process.cljs$lang$type = true);

(missionary.impl.Sample.Process.cljs$lang$ctorStr = "missionary.impl.Sample/Process");

(missionary.impl.Sample.Process.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl.Sample/Process");
}));

/**
 * Positional factory function for missionary.impl.Sample/Process.
 */
missionary.impl.Sample.__GT_Process = (function missionary$impl$Sample$__GT_Process(combinator,notifier,terminator,args,inputs,busy,done,alive){
return (new missionary.impl.Sample.Process(combinator,notifier,terminator,args,inputs,busy,done,alive));
});

missionary.impl.Sample.ready = (function missionary$impl$Sample$ready(ps){
var args = ps.args;
var inputs = ps.inputs;
var sampled = (inputs.length - (1));
var cb = null;
while(true){
if(cljs.core.truth_((ps.busy = cljs.core.not(ps.busy)))){
if(cljs.core.truth_(ps.done)){
var n__5636__auto___41536 = sampled;
var i_41537 = (0);
while(true){
if((i_41537 < n__5636__auto___41536)){
var input_41538 = (inputs[i_41537]);
(input_41538.cljs$core$IFn$_invoke$arity$0 ? input_41538.cljs$core$IFn$_invoke$arity$0() : input_41538.call(null));

if(((args[i_41537]) === args)){
try{cljs.core.deref(input_41538);
}catch (e41498){var __41539 = e41498;
}} else {
(args[i_41537] = args);
}

var G__41540 = (i_41537 + (1));
i_41537 = G__41540;
continue;
} else {
}
break;
}

if(((ps.alive = (ps.alive - (1))) === (0))){
return ps.terminator;
} else {
return null;
}
} else {
if(((args[sampled]) === args)){
try{cljs.core.deref((inputs[sampled]));
}catch (e41508){var __41541 = e41508;
}
var G__41542 = cb;
cb = G__41542;
continue;
} else {
return ps.notifier;
}
}
} else {
return cb;
}
break;
}
});
missionary.impl.Sample.transfer = (function missionary$impl$Sample$transfer(ps){
var c = ps.combinator;
var args = ps.args;
var inputs = ps.inputs;
var sampled = (inputs.length - (1));
var sampler = (inputs[sampled]);
var x = (function (){try{try{if((c == null)){
throw (new Error("Undefined continuous flow."));
} else {
}

var n__5636__auto___41543 = sampled;
var i_41544 = (0);
while(true){
if((i_41544 < n__5636__auto___41543)){
if(((args[i_41544]) === args)){
var input_41545 = (inputs[i_41544]);
while(true){
(args[i_41544] = null);

var x_41546 = cljs.core.deref(input_41545);
if(((args[i_41544]) === args)){
continue;
} else {
(args[i_41544] = x_41546);
}
break;
}
} else {
}

var G__41547 = (i_41544 + (1));
i_41544 = G__41547;
continue;
} else {
}
break;
}
}catch (e41526){var e_41548 = e41526;
try{cljs.core.deref(sampler);
}catch (e41528){var __41549 = e41528;
}
throw e_41548;
}
(args[sampled] = cljs.core.deref(sampler));

return c.apply(null,args);
}catch (e41524){var e = e41524;
(ps.notifier = null);

(sampler.cljs$core$IFn$_invoke$arity$0 ? sampler.cljs$core$IFn$_invoke$arity$0() : sampler.call(null));

(args[sampled] = args);

return e;
}})();
var temp__5808__auto___41550 = missionary.impl.Sample.ready(ps);
if((temp__5808__auto___41550 == null)){
} else {
var cb_41551 = temp__5808__auto___41550;
(cb_41551.cljs$core$IFn$_invoke$arity$0 ? cb_41551.cljs$core$IFn$_invoke$arity$0() : cb_41551.call(null));
}

if((ps.notifier == null)){
throw x;
} else {
return x;
}
});
missionary.impl.Sample.dirty = (function missionary$impl$Sample$dirty(p,i){
var args = p.args;
if(((args[i]) === args)){
try{return cljs.core.deref((p.inputs[i]));
}catch (e41529){var _ = e41529;
return null;
}} else {
return (args[i] = args);
}
});
missionary.impl.Sample.run = (function missionary$impl$Sample$run(c,f,fs,n,t){
var it = cljs.core.iter(fs);
var arity = (cljs.core.count(fs) + (1));
var args = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(arity);
var inputs = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(arity);
var ps = missionary.impl.Sample.__GT_Process(c,n,t,args,inputs,false,false,arity);
var done = (function (){
if(((ps.alive = (ps.alive - (1))) === (0))){
var fexpr__41530 = ps.terminator;
return (fexpr__41530.cljs$core$IFn$_invoke$arity$0 ? fexpr__41530.cljs$core$IFn$_invoke$arity$0() : fexpr__41530.call(null));
} else {
return null;
}
});
var index_41552 = (0);
var flow_41553 = f;
while(true){
if(cljs.core.truth_(it.hasNext())){
(inputs[index_41552] = (function (){var G__41531 = ((function (index_41552,flow_41553,it,arity,args,inputs,ps,done){
return (function (){
return missionary.impl.Sample.dirty(ps,index_41552);
});})(index_41552,flow_41553,it,arity,args,inputs,ps,done))
;
var G__41532 = done;
return (flow_41553.cljs$core$IFn$_invoke$arity$2 ? flow_41553.cljs$core$IFn$_invoke$arity$2(G__41531,G__41532) : flow_41553.call(null,G__41531,G__41532));
})());

if(((args[index_41552]) == null)){
(ps.combinator = null);
} else {
}

var G__41554 = (index_41552 + (1));
var G__41555 = it.next();
index_41552 = G__41554;
flow_41553 = G__41555;
continue;
} else {
(inputs[index_41552] = (function (){var G__41533 = ((function (index_41552,flow_41553,it,arity,args,inputs,ps,done){
return (function (){
var temp__5808__auto__ = missionary.impl.Sample.ready(ps);
if((temp__5808__auto__ == null)){
return null;
} else {
var cb = temp__5808__auto__;
return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
}
});})(index_41552,flow_41553,it,arity,args,inputs,ps,done))
;
var G__41534 = ((function (index_41552,flow_41553,G__41533,it,arity,args,inputs,ps,done){
return (function (){
(ps.done = true);

var temp__5808__auto__ = missionary.impl.Sample.ready(ps);
if((temp__5808__auto__ == null)){
return null;
} else {
var cb = temp__5808__auto__;
return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
}
});})(index_41552,flow_41553,G__41533,it,arity,args,inputs,ps,done))
;
return (flow_41553.cljs$core$IFn$_invoke$arity$2 ? flow_41553.cljs$core$IFn$_invoke$arity$2(G__41533,G__41534) : flow_41553.call(null,G__41533,G__41534));
})());
}
break;
}

return ps;
});

//# sourceMappingURL=missionary.impl.Sample.js.map
