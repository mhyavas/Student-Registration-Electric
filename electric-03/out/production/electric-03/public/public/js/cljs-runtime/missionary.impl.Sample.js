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
(missionary.impl.Sample.Process.prototype.call = (function (unused__13414__auto__){
var self__ = this;
var self__ = this;
var G__40946 = (arguments.length - (1));
switch (G__40946) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.Sample.Process.prototype.apply = (function (self__,args40945){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args40945)));
}));

(missionary.impl.Sample.Process.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
var fexpr__40948 = (self__.inputs[(self__.inputs.length - (1))]);
return (fexpr__40948.cljs$core$IFn$_invoke$arity$0 ? fexpr__40948.cljs$core$IFn$_invoke$arity$0() : fexpr__40948.call(null));
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
var n__5636__auto___40979 = sampled;
var i_40980 = (0);
while(true){
if((i_40980 < n__5636__auto___40979)){
var input_40981 = (inputs[i_40980]);
(input_40981.cljs$core$IFn$_invoke$arity$0 ? input_40981.cljs$core$IFn$_invoke$arity$0() : input_40981.call(null));

if(((args[i_40980]) === args)){
try{cljs.core.deref(input_40981);
}catch (e40951){var __40983 = e40951;
}} else {
(args[i_40980] = args);
}

var G__40984 = (i_40980 + (1));
i_40980 = G__40984;
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
}catch (e40952){var __40985 = e40952;
}
var G__40986 = cb;
cb = G__40986;
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

var n__5636__auto___40987 = sampled;
var i_40988 = (0);
while(true){
if((i_40988 < n__5636__auto___40987)){
if(((args[i_40988]) === args)){
var input_40989 = (inputs[i_40988]);
while(true){
(args[i_40988] = null);

var x_40990 = cljs.core.deref(input_40989);
if(((args[i_40988]) === args)){
continue;
} else {
(args[i_40988] = x_40990);
}
break;
}
} else {
}

var G__40991 = (i_40988 + (1));
i_40988 = G__40991;
continue;
} else {
}
break;
}
}catch (e40956){var e_40992 = e40956;
try{cljs.core.deref(sampler);
}catch (e40957){var __40993 = e40957;
}
throw e_40992;
}
(args[sampled] = cljs.core.deref(sampler));

return c.apply(null,args);
}catch (e40955){var e = e40955;
(ps.notifier = null);

(sampler.cljs$core$IFn$_invoke$arity$0 ? sampler.cljs$core$IFn$_invoke$arity$0() : sampler.call(null));

(args[sampled] = args);

return e;
}})();
var temp__5808__auto___40994 = missionary.impl.Sample.ready(ps);
if((temp__5808__auto___40994 == null)){
} else {
var cb_40995 = temp__5808__auto___40994;
(cb_40995.cljs$core$IFn$_invoke$arity$0 ? cb_40995.cljs$core$IFn$_invoke$arity$0() : cb_40995.call(null));
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
}catch (e40958){var _ = e40958;
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
var fexpr__40961 = ps.terminator;
return (fexpr__40961.cljs$core$IFn$_invoke$arity$0 ? fexpr__40961.cljs$core$IFn$_invoke$arity$0() : fexpr__40961.call(null));
} else {
return null;
}
});
var index_40996 = (0);
var flow_40997 = f;
while(true){
if(cljs.core.truth_(it.hasNext())){
(inputs[index_40996] = (function (){var G__40962 = ((function (index_40996,flow_40997,it,arity,args,inputs,ps,done){
return (function (){
return missionary.impl.Sample.dirty(ps,index_40996);
});})(index_40996,flow_40997,it,arity,args,inputs,ps,done))
;
var G__40963 = done;
return (flow_40997.cljs$core$IFn$_invoke$arity$2 ? flow_40997.cljs$core$IFn$_invoke$arity$2(G__40962,G__40963) : flow_40997.call(null,G__40962,G__40963));
})());

if(((args[index_40996]) == null)){
(ps.combinator = null);
} else {
}

var G__40998 = (index_40996 + (1));
var G__40999 = it.next();
index_40996 = G__40998;
flow_40997 = G__40999;
continue;
} else {
(inputs[index_40996] = (function (){var G__40966 = ((function (index_40996,flow_40997,it,arity,args,inputs,ps,done){
return (function (){
var temp__5808__auto__ = missionary.impl.Sample.ready(ps);
if((temp__5808__auto__ == null)){
return null;
} else {
var cb = temp__5808__auto__;
return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
}
});})(index_40996,flow_40997,it,arity,args,inputs,ps,done))
;
var G__40967 = ((function (index_40996,flow_40997,G__40966,it,arity,args,inputs,ps,done){
return (function (){
(ps.done = true);

var temp__5808__auto__ = missionary.impl.Sample.ready(ps);
if((temp__5808__auto__ == null)){
return null;
} else {
var cb = temp__5808__auto__;
return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
}
});})(index_40996,flow_40997,G__40966,it,arity,args,inputs,ps,done))
;
return (flow_40997.cljs$core$IFn$_invoke$arity$2 ? flow_40997.cljs$core$IFn$_invoke$arity$2(G__40966,G__40967) : flow_40997.call(null,G__40966,G__40967));
})());
}
break;
}

return ps;
});

//# sourceMappingURL=missionary.impl.Sample.js.map
