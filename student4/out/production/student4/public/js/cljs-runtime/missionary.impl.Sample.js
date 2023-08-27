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
(missionary.impl.Sample.Process.prototype.call = (function (unused__15562__auto__){
var self__ = this;
var self__ = this;
var G__41080 = (arguments.length - (1));
switch (G__41080) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.Sample.Process.prototype.apply = (function (self__,args41078){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args41078)));
}));

(missionary.impl.Sample.Process.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
var fexpr__41087 = (self__.inputs[(self__.inputs.length - (1))]);
return (fexpr__41087.cljs$core$IFn$_invoke$arity$0 ? fexpr__41087.cljs$core$IFn$_invoke$arity$0() : fexpr__41087.call(null));
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
var n__5636__auto___41121 = sampled;
var i_41122 = (0);
while(true){
if((i_41122 < n__5636__auto___41121)){
var input_41123 = (inputs[i_41122]);
(input_41123.cljs$core$IFn$_invoke$arity$0 ? input_41123.cljs$core$IFn$_invoke$arity$0() : input_41123.call(null));

if(((args[i_41122]) === args)){
try{cljs.core.deref(input_41123);
}catch (e41101){var __41124 = e41101;
}} else {
(args[i_41122] = args);
}

var G__41125 = (i_41122 + (1));
i_41122 = G__41125;
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
}catch (e41104){var __41126 = e41104;
}
var G__41127 = cb;
cb = G__41127;
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

var n__5636__auto___41128 = sampled;
var i_41129 = (0);
while(true){
if((i_41129 < n__5636__auto___41128)){
if(((args[i_41129]) === args)){
var input_41130 = (inputs[i_41129]);
while(true){
(args[i_41129] = null);

var x_41131 = cljs.core.deref(input_41130);
if(((args[i_41129]) === args)){
continue;
} else {
(args[i_41129] = x_41131);
}
break;
}
} else {
}

var G__41132 = (i_41129 + (1));
i_41129 = G__41132;
continue;
} else {
}
break;
}
}catch (e41108){var e_41133 = e41108;
try{cljs.core.deref(sampler);
}catch (e41109){var __41134 = e41109;
}
throw e_41133;
}
(args[sampled] = cljs.core.deref(sampler));

return c.apply(null,args);
}catch (e41107){var e = e41107;
(ps.notifier = null);

(sampler.cljs$core$IFn$_invoke$arity$0 ? sampler.cljs$core$IFn$_invoke$arity$0() : sampler.call(null));

(args[sampled] = args);

return e;
}})();
var temp__5808__auto___41135 = missionary.impl.Sample.ready(ps);
if((temp__5808__auto___41135 == null)){
} else {
var cb_41136 = temp__5808__auto___41135;
(cb_41136.cljs$core$IFn$_invoke$arity$0 ? cb_41136.cljs$core$IFn$_invoke$arity$0() : cb_41136.call(null));
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
}catch (e41111){var _ = e41111;
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
var fexpr__41113 = ps.terminator;
return (fexpr__41113.cljs$core$IFn$_invoke$arity$0 ? fexpr__41113.cljs$core$IFn$_invoke$arity$0() : fexpr__41113.call(null));
} else {
return null;
}
});
var index_41137 = (0);
var flow_41138 = f;
while(true){
if(cljs.core.truth_(it.hasNext())){
(inputs[index_41137] = (function (){var G__41114 = ((function (index_41137,flow_41138,it,arity,args,inputs,ps,done){
return (function (){
return missionary.impl.Sample.dirty(ps,index_41137);
});})(index_41137,flow_41138,it,arity,args,inputs,ps,done))
;
var G__41115 = done;
return (flow_41138.cljs$core$IFn$_invoke$arity$2 ? flow_41138.cljs$core$IFn$_invoke$arity$2(G__41114,G__41115) : flow_41138.call(null,G__41114,G__41115));
})());

if(((args[index_41137]) == null)){
(ps.combinator = null);
} else {
}

var G__41139 = (index_41137 + (1));
var G__41140 = it.next();
index_41137 = G__41139;
flow_41138 = G__41140;
continue;
} else {
(inputs[index_41137] = (function (){var G__41116 = ((function (index_41137,flow_41138,it,arity,args,inputs,ps,done){
return (function (){
var temp__5808__auto__ = missionary.impl.Sample.ready(ps);
if((temp__5808__auto__ == null)){
return null;
} else {
var cb = temp__5808__auto__;
return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
}
});})(index_41137,flow_41138,it,arity,args,inputs,ps,done))
;
var G__41117 = ((function (index_41137,flow_41138,G__41116,it,arity,args,inputs,ps,done){
return (function (){
(ps.done = true);

var temp__5808__auto__ = missionary.impl.Sample.ready(ps);
if((temp__5808__auto__ == null)){
return null;
} else {
var cb = temp__5808__auto__;
return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
}
});})(index_41137,flow_41138,G__41116,it,arity,args,inputs,ps,done))
;
return (flow_41138.cljs$core$IFn$_invoke$arity$2 ? flow_41138.cljs$core$IFn$_invoke$arity$2(G__41116,G__41117) : flow_41138.call(null,G__41116,G__41117));
})());
}
break;
}

return ps;
});

//# sourceMappingURL=missionary.impl.Sample.js.map
