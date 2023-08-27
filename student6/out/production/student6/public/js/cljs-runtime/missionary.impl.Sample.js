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
(missionary.impl.Sample.Process.prototype.call = (function (unused__13640__auto__){
var self__ = this;
var self__ = this;
var G__30705 = (arguments.length - (1));
switch (G__30705) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.Sample.Process.prototype.apply = (function (self__,args30704){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args30704)));
}));

(missionary.impl.Sample.Process.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
var fexpr__30708 = (self__.inputs[(self__.inputs.length - (1))]);
return (fexpr__30708.cljs$core$IFn$_invoke$arity$0 ? fexpr__30708.cljs$core$IFn$_invoke$arity$0() : fexpr__30708.call(null));
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
var n__5636__auto___30816 = sampled;
var i_30817 = (0);
while(true){
if((i_30817 < n__5636__auto___30816)){
var input_30818 = (inputs[i_30817]);
(input_30818.cljs$core$IFn$_invoke$arity$0 ? input_30818.cljs$core$IFn$_invoke$arity$0() : input_30818.call(null));

if(((args[i_30817]) === args)){
try{cljs.core.deref(input_30818);
}catch (e30729){var __30819 = e30729;
}} else {
(args[i_30817] = args);
}

var G__30820 = (i_30817 + (1));
i_30817 = G__30820;
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
}catch (e30734){var __30822 = e30734;
}
var G__30823 = cb;
cb = G__30823;
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

var n__5636__auto___30825 = sampled;
var i_30826 = (0);
while(true){
if((i_30826 < n__5636__auto___30825)){
if(((args[i_30826]) === args)){
var input_30827 = (inputs[i_30826]);
while(true){
(args[i_30826] = null);

var x_30829 = cljs.core.deref(input_30827);
if(((args[i_30826]) === args)){
continue;
} else {
(args[i_30826] = x_30829);
}
break;
}
} else {
}

var G__30830 = (i_30826 + (1));
i_30826 = G__30830;
continue;
} else {
}
break;
}
}catch (e30757){var e_30831 = e30757;
try{cljs.core.deref(sampler);
}catch (e30760){var __30832 = e30760;
}
throw e_30831;
}
(args[sampled] = cljs.core.deref(sampler));

return c.apply(null,args);
}catch (e30754){var e = e30754;
(ps.notifier = null);

(sampler.cljs$core$IFn$_invoke$arity$0 ? sampler.cljs$core$IFn$_invoke$arity$0() : sampler.call(null));

(args[sampled] = args);

return e;
}})();
var temp__5808__auto___30838 = missionary.impl.Sample.ready(ps);
if((temp__5808__auto___30838 == null)){
} else {
var cb_30840 = temp__5808__auto___30838;
(cb_30840.cljs$core$IFn$_invoke$arity$0 ? cb_30840.cljs$core$IFn$_invoke$arity$0() : cb_30840.call(null));
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
}catch (e30772){var _ = e30772;
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
var fexpr__30782 = ps.terminator;
return (fexpr__30782.cljs$core$IFn$_invoke$arity$0 ? fexpr__30782.cljs$core$IFn$_invoke$arity$0() : fexpr__30782.call(null));
} else {
return null;
}
});
var index_30847 = (0);
var flow_30848 = f;
while(true){
if(cljs.core.truth_(it.hasNext())){
(inputs[index_30847] = (function (){var G__30786 = ((function (index_30847,flow_30848,it,arity,args,inputs,ps,done){
return (function (){
return missionary.impl.Sample.dirty(ps,index_30847);
});})(index_30847,flow_30848,it,arity,args,inputs,ps,done))
;
var G__30787 = done;
return (flow_30848.cljs$core$IFn$_invoke$arity$2 ? flow_30848.cljs$core$IFn$_invoke$arity$2(G__30786,G__30787) : flow_30848.call(null,G__30786,G__30787));
})());

if(((args[index_30847]) == null)){
(ps.combinator = null);
} else {
}

var G__30851 = (index_30847 + (1));
var G__30852 = it.next();
index_30847 = G__30851;
flow_30848 = G__30852;
continue;
} else {
(inputs[index_30847] = (function (){var G__30790 = ((function (index_30847,flow_30848,it,arity,args,inputs,ps,done){
return (function (){
var temp__5808__auto__ = missionary.impl.Sample.ready(ps);
if((temp__5808__auto__ == null)){
return null;
} else {
var cb = temp__5808__auto__;
return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
}
});})(index_30847,flow_30848,it,arity,args,inputs,ps,done))
;
var G__30791 = ((function (index_30847,flow_30848,G__30790,it,arity,args,inputs,ps,done){
return (function (){
(ps.done = true);

var temp__5808__auto__ = missionary.impl.Sample.ready(ps);
if((temp__5808__auto__ == null)){
return null;
} else {
var cb = temp__5808__auto__;
return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
}
});})(index_30847,flow_30848,G__30790,it,arity,args,inputs,ps,done))
;
return (flow_30848.cljs$core$IFn$_invoke$arity$2 ? flow_30848.cljs$core$IFn$_invoke$arity$2(G__30790,G__30791) : flow_30848.call(null,G__30790,G__30791));
})());
}
break;
}

return ps;
});

//# sourceMappingURL=missionary.impl.Sample.js.map
