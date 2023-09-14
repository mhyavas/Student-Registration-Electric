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
(missionary.impl.Sample.Process.prototype.call = (function (unused__13625__auto__){
var self__ = this;
var self__ = this;
var G__28758 = (arguments.length - (1));
switch (G__28758) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.Sample.Process.prototype.apply = (function (self__,args28751){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args28751)));
}));

(missionary.impl.Sample.Process.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
var fexpr__28797 = (self__.inputs[(self__.inputs.length - (1))]);
return (fexpr__28797.cljs$core$IFn$_invoke$arity$0 ? fexpr__28797.cljs$core$IFn$_invoke$arity$0() : fexpr__28797.call(null));
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
var n__5636__auto___28856 = sampled;
var i_28857 = (0);
while(true){
if((i_28857 < n__5636__auto___28856)){
var input_28858 = (inputs[i_28857]);
(input_28858.cljs$core$IFn$_invoke$arity$0 ? input_28858.cljs$core$IFn$_invoke$arity$0() : input_28858.call(null));

if(((args[i_28857]) === args)){
try{cljs.core.deref(input_28858);
}catch (e28805){var __28860 = e28805;
}} else {
(args[i_28857] = args);
}

var G__28862 = (i_28857 + (1));
i_28857 = G__28862;
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
}catch (e28810){var __28863 = e28810;
}
var G__28864 = cb;
cb = G__28864;
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

var n__5636__auto___28865 = sampled;
var i_28866 = (0);
while(true){
if((i_28866 < n__5636__auto___28865)){
if(((args[i_28866]) === args)){
var input_28869 = (inputs[i_28866]);
while(true){
(args[i_28866] = null);

var x_28870 = cljs.core.deref(input_28869);
if(((args[i_28866]) === args)){
continue;
} else {
(args[i_28866] = x_28870);
}
break;
}
} else {
}

var G__28871 = (i_28866 + (1));
i_28866 = G__28871;
continue;
} else {
}
break;
}
}catch (e28812){var e_28872 = e28812;
try{cljs.core.deref(sampler);
}catch (e28813){var __28873 = e28813;
}
throw e_28872;
}
(args[sampled] = cljs.core.deref(sampler));

return c.apply(null,args);
}catch (e28811){var e = e28811;
(ps.notifier = null);

(sampler.cljs$core$IFn$_invoke$arity$0 ? sampler.cljs$core$IFn$_invoke$arity$0() : sampler.call(null));

(args[sampled] = args);

return e;
}})();
var temp__5808__auto___28875 = missionary.impl.Sample.ready(ps);
if((temp__5808__auto___28875 == null)){
} else {
var cb_28876 = temp__5808__auto___28875;
(cb_28876.cljs$core$IFn$_invoke$arity$0 ? cb_28876.cljs$core$IFn$_invoke$arity$0() : cb_28876.call(null));
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
}catch (e28833){var _ = e28833;
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
var fexpr__28841 = ps.terminator;
return (fexpr__28841.cljs$core$IFn$_invoke$arity$0 ? fexpr__28841.cljs$core$IFn$_invoke$arity$0() : fexpr__28841.call(null));
} else {
return null;
}
});
var index_28878 = (0);
var flow_28879 = f;
while(true){
if(cljs.core.truth_(it.hasNext())){
(inputs[index_28878] = (function (){var G__28842 = ((function (index_28878,flow_28879,it,arity,args,inputs,ps,done){
return (function (){
return missionary.impl.Sample.dirty(ps,index_28878);
});})(index_28878,flow_28879,it,arity,args,inputs,ps,done))
;
var G__28843 = done;
return (flow_28879.cljs$core$IFn$_invoke$arity$2 ? flow_28879.cljs$core$IFn$_invoke$arity$2(G__28842,G__28843) : flow_28879.call(null,G__28842,G__28843));
})());

if(((args[index_28878]) == null)){
(ps.combinator = null);
} else {
}

var G__28880 = (index_28878 + (1));
var G__28881 = it.next();
index_28878 = G__28880;
flow_28879 = G__28881;
continue;
} else {
(inputs[index_28878] = (function (){var G__28845 = ((function (index_28878,flow_28879,it,arity,args,inputs,ps,done){
return (function (){
var temp__5808__auto__ = missionary.impl.Sample.ready(ps);
if((temp__5808__auto__ == null)){
return null;
} else {
var cb = temp__5808__auto__;
return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
}
});})(index_28878,flow_28879,it,arity,args,inputs,ps,done))
;
var G__28846 = ((function (index_28878,flow_28879,G__28845,it,arity,args,inputs,ps,done){
return (function (){
(ps.done = true);

var temp__5808__auto__ = missionary.impl.Sample.ready(ps);
if((temp__5808__auto__ == null)){
return null;
} else {
var cb = temp__5808__auto__;
return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
}
});})(index_28878,flow_28879,G__28845,it,arity,args,inputs,ps,done))
;
return (flow_28879.cljs$core$IFn$_invoke$arity$2 ? flow_28879.cljs$core$IFn$_invoke$arity$2(G__28845,G__28846) : flow_28879.call(null,G__28845,G__28846));
})());
}
break;
}

return ps;
});

//# sourceMappingURL=missionary.impl.Sample.js.map
