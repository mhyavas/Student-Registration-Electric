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
(missionary.impl.Sample.Process.prototype.call = (function (unused__13671__auto__){
var self__ = this;
var self__ = this;
var G__40158 = (arguments.length - (1));
switch (G__40158) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.Sample.Process.prototype.apply = (function (self__,args40157){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args40157)));
}));

(missionary.impl.Sample.Process.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
var fexpr__40159 = (self__.inputs[(self__.inputs.length - (1))]);
return (fexpr__40159.cljs$core$IFn$_invoke$arity$0 ? fexpr__40159.cljs$core$IFn$_invoke$arity$0() : fexpr__40159.call(null));
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
var n__5636__auto___40188 = sampled;
var i_40189 = (0);
while(true){
if((i_40189 < n__5636__auto___40188)){
var input_40190 = (inputs[i_40189]);
(input_40190.cljs$core$IFn$_invoke$arity$0 ? input_40190.cljs$core$IFn$_invoke$arity$0() : input_40190.call(null));

if(((args[i_40189]) === args)){
try{cljs.core.deref(input_40190);
}catch (e40169){var __40191 = e40169;
}} else {
(args[i_40189] = args);
}

var G__40192 = (i_40189 + (1));
i_40189 = G__40192;
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
}catch (e40170){var __40193 = e40170;
}
var G__40194 = cb;
cb = G__40194;
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

var n__5636__auto___40196 = sampled;
var i_40197 = (0);
while(true){
if((i_40197 < n__5636__auto___40196)){
if(((args[i_40197]) === args)){
var input_40198 = (inputs[i_40197]);
while(true){
(args[i_40197] = null);

var x_40199 = cljs.core.deref(input_40198);
if(((args[i_40197]) === args)){
continue;
} else {
(args[i_40197] = x_40199);
}
break;
}
} else {
}

var G__40200 = (i_40197 + (1));
i_40197 = G__40200;
continue;
} else {
}
break;
}
}catch (e40173){var e_40201 = e40173;
try{cljs.core.deref(sampler);
}catch (e40174){var __40202 = e40174;
}
throw e_40201;
}
(args[sampled] = cljs.core.deref(sampler));

return c.apply(null,args);
}catch (e40172){var e = e40172;
(ps.notifier = null);

(sampler.cljs$core$IFn$_invoke$arity$0 ? sampler.cljs$core$IFn$_invoke$arity$0() : sampler.call(null));

(args[sampled] = args);

return e;
}})();
var temp__5820__auto___40203 = missionary.impl.Sample.ready(ps);
if((temp__5820__auto___40203 == null)){
} else {
var cb_40204 = temp__5820__auto___40203;
(cb_40204.cljs$core$IFn$_invoke$arity$0 ? cb_40204.cljs$core$IFn$_invoke$arity$0() : cb_40204.call(null));
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
}catch (e40177){var _ = e40177;
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
var fexpr__40178 = ps.terminator;
return (fexpr__40178.cljs$core$IFn$_invoke$arity$0 ? fexpr__40178.cljs$core$IFn$_invoke$arity$0() : fexpr__40178.call(null));
} else {
return null;
}
});
var index_40207 = (0);
var flow_40208 = f;
while(true){
if(cljs.core.truth_(it.hasNext())){
(inputs[index_40207] = (function (){var G__40179 = ((function (index_40207,flow_40208,it,arity,args,inputs,ps,done){
return (function (){
return missionary.impl.Sample.dirty(ps,index_40207);
});})(index_40207,flow_40208,it,arity,args,inputs,ps,done))
;
var G__40180 = done;
return (flow_40208.cljs$core$IFn$_invoke$arity$2 ? flow_40208.cljs$core$IFn$_invoke$arity$2(G__40179,G__40180) : flow_40208.call(null,G__40179,G__40180));
})());

if(((args[index_40207]) == null)){
(ps.combinator = null);
} else {
}

var G__40209 = (index_40207 + (1));
var G__40210 = it.next();
index_40207 = G__40209;
flow_40208 = G__40210;
continue;
} else {
(inputs[index_40207] = (function (){var G__40183 = ((function (index_40207,flow_40208,it,arity,args,inputs,ps,done){
return (function (){
var temp__5820__auto__ = missionary.impl.Sample.ready(ps);
if((temp__5820__auto__ == null)){
return null;
} else {
var cb = temp__5820__auto__;
return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
}
});})(index_40207,flow_40208,it,arity,args,inputs,ps,done))
;
var G__40184 = ((function (index_40207,flow_40208,G__40183,it,arity,args,inputs,ps,done){
return (function (){
(ps.done = true);

var temp__5820__auto__ = missionary.impl.Sample.ready(ps);
if((temp__5820__auto__ == null)){
return null;
} else {
var cb = temp__5820__auto__;
return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
}
});})(index_40207,flow_40208,G__40183,it,arity,args,inputs,ps,done))
;
return (flow_40208.cljs$core$IFn$_invoke$arity$2 ? flow_40208.cljs$core$IFn$_invoke$arity$2(G__40183,G__40184) : flow_40208.call(null,G__40183,G__40184));
})());
}
break;
}

return ps;
});

//# sourceMappingURL=missionary.impl.Sample.js.map
