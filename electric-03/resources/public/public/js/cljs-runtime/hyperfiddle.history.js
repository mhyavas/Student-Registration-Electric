goog.provide('hyperfiddle.history');

/**
 * @interface
 */
hyperfiddle.history.IHistory = function(){};

var hyperfiddle$history$IHistory$navigate_BANG_$dyn_49192 = (function (this$,route){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (hyperfiddle.history.navigate_BANG_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,route) : m__5394__auto__.call(null,this$,route));
} else {
var m__5392__auto__ = (hyperfiddle.history.navigate_BANG_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,route) : m__5392__auto__.call(null,this$,route));
} else {
throw cljs.core.missing_protocol("IHistory.navigate!",this$);
}
}
});
hyperfiddle.history.navigate_BANG_ = (function hyperfiddle$history$navigate_BANG_(this$,route){
if((((!((this$ == null)))) && ((!((this$.hyperfiddle$history$IHistory$navigate_BANG_$arity$2 == null)))))){
return this$.hyperfiddle$history$IHistory$navigate_BANG_$arity$2(this$,route);
} else {
return hyperfiddle$history$IHistory$navigate_BANG_$dyn_49192(this$,route);
}
});

var hyperfiddle$history$IHistory$back_BANG_$dyn_49193 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (hyperfiddle.history.back_BANG_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (hyperfiddle.history.back_BANG_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IHistory.back!",this$);
}
}
});
hyperfiddle.history.back_BANG_ = (function hyperfiddle$history$back_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.hyperfiddle$history$IHistory$back_BANG_$arity$1 == null)))))){
return this$.hyperfiddle$history$IHistory$back_BANG_$arity$1(this$);
} else {
return hyperfiddle$history$IHistory$back_BANG_$dyn_49193(this$);
}
});

var hyperfiddle$history$IHistory$forward_BANG_$dyn_49194 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (hyperfiddle.history.forward_BANG_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (hyperfiddle.history.forward_BANG_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IHistory.forward!",this$);
}
}
});
hyperfiddle.history.forward_BANG_ = (function hyperfiddle$history$forward_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.hyperfiddle$history$IHistory$forward_BANG_$arity$1 == null)))))){
return this$.hyperfiddle$history$IHistory$forward_BANG_$arity$1(this$);
} else {
return hyperfiddle$history$IHistory$forward_BANG_$dyn_49194(this$);
}
});

var hyperfiddle$history$IHistory$replace_state_BANG_$dyn_49195 = (function (this$,new_state){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (hyperfiddle.history.replace_state_BANG_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,new_state) : m__5394__auto__.call(null,this$,new_state));
} else {
var m__5392__auto__ = (hyperfiddle.history.replace_state_BANG_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,new_state) : m__5392__auto__.call(null,this$,new_state));
} else {
throw cljs.core.missing_protocol("IHistory.replace-state!",this$);
}
}
});
hyperfiddle.history.replace_state_BANG_ = (function hyperfiddle$history$replace_state_BANG_(this$,new_state){
if((((!((this$ == null)))) && ((!((this$.hyperfiddle$history$IHistory$replace_state_BANG_$arity$2 == null)))))){
return this$.hyperfiddle$history$IHistory$replace_state_BANG_$arity$2(this$,new_state);
} else {
return hyperfiddle$history$IHistory$replace_state_BANG_$dyn_49195(this$,new_state);
}
});

hyperfiddle.history.updatef = (function hyperfiddle$history$updatef(p__48950,f){
var vec__48951 = p__48950;
var history__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48951,(0),null);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48951,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.cljs$core$IFn$_invoke$arity$3(history__$1,idx,f),idx], null);
});
hyperfiddle.history.notify_watches = (function hyperfiddle$history$notify_watches(this$,p__48957){
var vec__48958 = p__48957;
var oldstate = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48958,(0),null);
var newstate = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48958,(1),null);
var oldval = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.get,oldstate);
var newval = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.get,newstate);
var seq__48961 = cljs.core.seq(cljs.core.deref(new cljs.core.Keyword(null,"watches","watches",-273097535).cljs$core$IFn$_invoke$arity$1(this$)));
var chunk__48962 = null;
var count__48963 = (0);
var i__48964 = (0);
while(true){
if((i__48964 < count__48963)){
var vec__48971 = chunk__48962.cljs$core$IIndexed$_nth$arity$2(null,i__48964);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48971,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48971,(1),null);
(callback.cljs$core$IFn$_invoke$arity$4 ? callback.cljs$core$IFn$_invoke$arity$4(key,this$,oldval,newval) : callback.call(null,key,this$,oldval,newval));


var G__49196 = seq__48961;
var G__49197 = chunk__48962;
var G__49198 = count__48963;
var G__49199 = (i__48964 + (1));
seq__48961 = G__49196;
chunk__48962 = G__49197;
count__48963 = G__49198;
i__48964 = G__49199;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__48961);
if(temp__5804__auto__){
var seq__48961__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48961__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__48961__$1);
var G__49200 = cljs.core.chunk_rest(seq__48961__$1);
var G__49201 = c__5568__auto__;
var G__49202 = cljs.core.count(c__5568__auto__);
var G__49203 = (0);
seq__48961 = G__49200;
chunk__48962 = G__49201;
count__48963 = G__49202;
i__48964 = G__49203;
continue;
} else {
var vec__48975 = cljs.core.first(seq__48961__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48975,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48975,(1),null);
(callback.cljs$core$IFn$_invoke$arity$4 ? callback.cljs$core$IFn$_invoke$arity$4(key,this$,oldval,newval) : callback.call(null,key,this$,oldval,newval));


var G__49204 = cljs.core.next(seq__48961__$1);
var G__49205 = null;
var G__49206 = (0);
var G__49207 = (0);
seq__48961 = G__49204;
chunk__48962 = G__49205;
count__48963 = G__49206;
i__48964 = G__49207;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
hyperfiddle.history.AtomHistory = (function (state,watches,max_size,__meta,__extmap,__hash){
this.state = state;
this.watches = watches;
this.max_size = max_size;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230748938;
this.cljs$lang$protocol_mask$partition1$ = 253954;
});
(hyperfiddle.history.AtomHistory.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(hyperfiddle.history.AtomHistory.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k48982,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__48987 = k48982;
var G__48987__$1 = (((G__48987 instanceof cljs.core.Keyword))?G__48987.fqn:null);
switch (G__48987__$1) {
case "state":
return self__.state;

break;
case "watches":
return self__.watches;

break;
case "max-size":
return self__.max_size;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48982,else__5346__auto__);

}
}));

(hyperfiddle.history.AtomHistory.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__48988){
var vec__48989 = p__48988;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48989,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48989,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(hyperfiddle.history.AtomHistory.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#hyperfiddle.history.AtomHistory{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"watches","watches",-273097535),self__.watches],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-size","max-size",-874966132),self__.max_size],null))], null),self__.__extmap));
}));

(hyperfiddle.history.AtomHistory.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48981){
var self__ = this;
var G__48981__$1 = this;
return (new cljs.core.RecordIter((0),G__48981__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"watches","watches",-273097535),new cljs.core.Keyword(null,"max-size","max-size",-874966132)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(hyperfiddle.history.AtomHistory.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(hyperfiddle.history.AtomHistory.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new hyperfiddle.history.AtomHistory(self__.state,self__.watches,self__.max_size,self__.__meta,self__.__extmap,self__.__hash));
}));

(hyperfiddle.history.AtomHistory.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(hyperfiddle.history.AtomHistory.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-275901300 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(hyperfiddle.history.AtomHistory.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48983,other48984){
var self__ = this;
var this48983__$1 = this;
return (((!((other48984 == null)))) && ((((this48983__$1.constructor === other48984.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48983__$1.state,other48984.state)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48983__$1.watches,other48984.watches)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48983__$1.max_size,other48984.max_size)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48983__$1.__extmap,other48984.__extmap)))))))))));
}));

(hyperfiddle.history.AtomHistory.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,newval){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$ISwap$_swap_BANG_$arity$2(null,cljs.core.constantly(newval));
}));

(hyperfiddle.history.AtomHistory.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return hyperfiddle.history.notify_watches(this$__$1,cljs.core.swap_vals_BANG_.cljs$core$IFn$_invoke$arity$3(self__.state,hyperfiddle.history.updatef,f));
}));

(hyperfiddle.history.AtomHistory.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,arg){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$ISwap$_swap_BANG_$arity$2(null,(function (p1__48978_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__48978_SHARP_,arg) : f.call(null,p1__48978_SHARP_,arg));
}));
}));

(hyperfiddle.history.AtomHistory.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,arg1,arg2){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$ISwap$_swap_BANG_$arity$2(null,(function (p1__48979_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(p1__48979_SHARP_,arg1,arg2) : f.call(null,p1__48979_SHARP_,arg1,arg2));
}));
}));

(hyperfiddle.history.AtomHistory.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,x,y,args){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$ISwap$_swap_BANG_$arity$2(null,(function (p1__48980_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,p1__48980_SHARP_,x,y,args);
}));
}));

(hyperfiddle.history.AtomHistory.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"watches","watches",-273097535),null,new cljs.core.Keyword(null,"max-size","max-size",-874966132),null,new cljs.core.Keyword(null,"state","state",-1988618099),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new hyperfiddle.history.AtomHistory(self__.state,self__.watches,self__.max_size,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(hyperfiddle.history.AtomHistory.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k48982){
var self__ = this;
var this__5350__auto____$1 = this;
var G__48992 = k48982;
var G__48992__$1 = (((G__48992 instanceof cljs.core.Keyword))?G__48992.fqn:null);
switch (G__48992__$1) {
case "state":
case "watches":
case "max-size":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k48982);

}
}));

(hyperfiddle.history.AtomHistory.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__48981){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__48993 = cljs.core.keyword_identical_QMARK_;
var expr__48994 = k__5352__auto__;
if(cljs.core.truth_((pred__48993.cljs$core$IFn$_invoke$arity$2 ? pred__48993.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state","state",-1988618099),expr__48994) : pred__48993.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),expr__48994)))){
return (new hyperfiddle.history.AtomHistory(G__48981,self__.watches,self__.max_size,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__48993.cljs$core$IFn$_invoke$arity$2 ? pred__48993.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"watches","watches",-273097535),expr__48994) : pred__48993.call(null,new cljs.core.Keyword(null,"watches","watches",-273097535),expr__48994)))){
return (new hyperfiddle.history.AtomHistory(self__.state,G__48981,self__.max_size,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__48993.cljs$core$IFn$_invoke$arity$2 ? pred__48993.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"max-size","max-size",-874966132),expr__48994) : pred__48993.call(null,new cljs.core.Keyword(null,"max-size","max-size",-874966132),expr__48994)))){
return (new hyperfiddle.history.AtomHistory(self__.state,self__.watches,G__48981,self__.__meta,self__.__extmap,null));
} else {
return (new hyperfiddle.history.AtomHistory(self__.state,self__.watches,self__.max_size,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__48981),null));
}
}
}
}));

(hyperfiddle.history.AtomHistory.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"state","state",-1988618099),self__.state,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"watches","watches",-273097535),self__.watches,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"max-size","max-size",-874966132),self__.max_size,null))], null),self__.__extmap));
}));

(hyperfiddle.history.AtomHistory.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,callback){
var self__ = this;
var this$__$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.watches,cljs.core.assoc,key,callback);

return this$__$1;
}));

(hyperfiddle.history.AtomHistory.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (_,key){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.watches,cljs.core.dissoc,key);
}));

(hyperfiddle.history.AtomHistory.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__48981){
var self__ = this;
var this__5342__auto____$1 = this;
return (new hyperfiddle.history.AtomHistory(self__.state,self__.watches,self__.max_size,G__48981,self__.__extmap,self__.__hash));
}));

(hyperfiddle.history.AtomHistory.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(hyperfiddle.history.AtomHistory.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var vec__48996 = cljs.core.deref(self__.state);
var history__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48996,(0),null);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48996,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(history__$1,idx);
}));

(hyperfiddle.history.AtomHistory.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.Symbol(null,"max-size","max-size",765565395,null)], null);
}));

(hyperfiddle.history.AtomHistory.cljs$lang$type = true);

(hyperfiddle.history.AtomHistory.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"hyperfiddle.history/AtomHistory",null,(1),null));
}));

(hyperfiddle.history.AtomHistory.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"hyperfiddle.history/AtomHistory");
}));

/**
 * Positional factory function for hyperfiddle.history/AtomHistory.
 */
hyperfiddle.history.__GT_AtomHistory = (function hyperfiddle$history$__GT_AtomHistory(state,watches,max_size){
return (new hyperfiddle.history.AtomHistory(state,watches,max_size,null,null,null));
});

/**
 * Factory function for hyperfiddle.history/AtomHistory, taking a map of keywords to field values.
 */
hyperfiddle.history.map__GT_AtomHistory = (function hyperfiddle$history$map__GT_AtomHistory(G__48985){
var extmap__5385__auto__ = (function (){var G__48999 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48985,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"watches","watches",-273097535),new cljs.core.Keyword(null,"max-size","max-size",-874966132)], 0));
if(cljs.core.record_QMARK_(G__48985)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48999);
} else {
return G__48999;
}
})();
return (new hyperfiddle.history.AtomHistory(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__48985),new cljs.core.Keyword(null,"watches","watches",-273097535).cljs$core$IFn$_invoke$arity$1(G__48985),new cljs.core.Keyword(null,"max-size","max-size",-874966132).cljs$core$IFn$_invoke$arity$1(G__48985),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

(hyperfiddle.history.AtomHistory.prototype.hyperfiddle$history$IHistory$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.history.AtomHistory.prototype.hyperfiddle$history$IHistory$navigate_BANG_$arity$2 = (function (this$,route){
var this$__$1 = this;
return hyperfiddle.history.notify_watches(this$__$1,cljs.core.swap_vals_BANG_.cljs$core$IFn$_invoke$arity$2(this$__$1.state,(function (p__49000){
var vec__49001 = p__49000;
var history__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49001,(0),null);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49001,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(history__$1),this$__$1.max_size)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(history__$1,(1)),route),idx], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(history__$1,(0),(idx + (1))),route),(idx + (1))], null);
}
})));
}));

(hyperfiddle.history.AtomHistory.prototype.hyperfiddle$history$IHistory$back_BANG_$arity$1 = (function (this$){
var this$__$1 = this;
return hyperfiddle.history.notify_watches(this$__$1,cljs.core.swap_vals_BANG_.cljs$core$IFn$_invoke$arity$2(this$__$1.state,(function (p__49004){
var vec__49005 = p__49004;
var history__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49005,(0),null);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49005,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [history__$1,(function (){var x__5130__auto__ = (idx - (1));
var y__5131__auto__ = (0);
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})()], null);
})));
}));

(hyperfiddle.history.AtomHistory.prototype.hyperfiddle$history$IHistory$forward_BANG_$arity$1 = (function (this$){
var this$__$1 = this;
return hyperfiddle.history.notify_watches(this$__$1,cljs.core.swap_vals_BANG_.cljs$core$IFn$_invoke$arity$2(this$__$1.state,(function (p__49008){
var vec__49009 = p__49008;
var history__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49009,(0),null);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49009,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [history__$1,(function (){var x__5133__auto__ = (idx + (1));
var y__5134__auto__ = (cljs.core.count(history__$1) - (1));
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})()], null);
})));
}));

(hyperfiddle.history.AtomHistory.prototype.hyperfiddle$history$IHistory$replace_state_BANG_$arity$2 = (function (this$,new_state){
var this$__$1 = this;
return cljs.core.reset_BANG_(this$__$1,new_state);
}));
/**
 * Return a new IHistory instance backed by an atom.
 *   Initial history state can be provided with `initial-state`.
 *   Default history size is unbounded and can be constrained to `max-size` elements in a FIFO way.
 *   A negative value or 0 has no effect.
 */
hyperfiddle.history.atom_history = (function hyperfiddle$history$atom_history(var_args){
var G__49013 = arguments.length;
switch (G__49013) {
case 0:
return hyperfiddle.history.atom_history.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return hyperfiddle.history.atom_history.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hyperfiddle.history.atom_history.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hyperfiddle.history.atom_history.cljs$core$IFn$_invoke$arity$0 = (function (){
return hyperfiddle.history.atom_history.cljs$core$IFn$_invoke$arity$2(null,(0));
}));

(hyperfiddle.history.atom_history.cljs$core$IFn$_invoke$arity$1 = (function (initial_state){
return hyperfiddle.history.atom_history.cljs$core$IFn$_invoke$arity$2(initial_state,(0));
}));

(hyperfiddle.history.atom_history.cljs$core$IFn$_invoke$arity$2 = (function (initial_state,max_size){
return hyperfiddle.history.__GT_AtomHistory(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [initial_state], null),(0)], null)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),max_size);
}));

(hyperfiddle.history.atom_history.cljs$lang$maxFixedArity = 2);


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
hyperfiddle.history.ProxyHistory = (function (parent,state,__meta,__extmap,__hash){
this.parent = parent;
this.state = state;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230748938;
this.cljs$lang$protocol_mask$partition1$ = 253954;
});
(hyperfiddle.history.ProxyHistory.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(hyperfiddle.history.ProxyHistory.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k49015,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__49019 = k49015;
var G__49019__$1 = (((G__49019 instanceof cljs.core.Keyword))?G__49019.fqn:null);
switch (G__49019__$1) {
case "parent":
return self__.parent;

break;
case "state":
return self__.state;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49015,else__5346__auto__);

}
}));

(hyperfiddle.history.ProxyHistory.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__49020){
var vec__49021 = p__49020;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49021,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49021,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(hyperfiddle.history.ProxyHistory.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#hyperfiddle.history.ProxyHistory{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null))], null),self__.__extmap));
}));

(hyperfiddle.history.ProxyHistory.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49014){
var self__ = this;
var G__49014__$1 = this;
return (new cljs.core.RecordIter((0),G__49014__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"state","state",-1988618099)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(hyperfiddle.history.ProxyHistory.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(hyperfiddle.history.ProxyHistory.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new hyperfiddle.history.ProxyHistory(self__.parent,self__.state,self__.__meta,self__.__extmap,self__.__hash));
}));

(hyperfiddle.history.ProxyHistory.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(hyperfiddle.history.ProxyHistory.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (1194936367 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(hyperfiddle.history.ProxyHistory.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49016,other49017){
var self__ = this;
var this49016__$1 = this;
return (((!((other49017 == null)))) && ((((this49016__$1.constructor === other49017.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49016__$1.parent,other49017.parent)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49016__$1.state,other49017.state)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49016__$1.__extmap,other49017.__extmap)))))))));
}));

(hyperfiddle.history.ProxyHistory.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_(self__.state,newval);
}));

(hyperfiddle.history.ProxyHistory.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.state,f);
}));

(hyperfiddle.history.ProxyHistory.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,arg){
var self__ = this;
var this$__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.state,f,arg);
}));

(hyperfiddle.history.ProxyHistory.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,arg1,arg2){
var self__ = this;
var this$__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,f,arg1,arg2);
}));

(hyperfiddle.history.ProxyHistory.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,x,y,args){
var self__ = this;
var this$__$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.swap_BANG_,self__.state,f,x,y,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0));
}));

(hyperfiddle.history.ProxyHistory.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"state","state",-1988618099),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new hyperfiddle.history.ProxyHistory(self__.parent,self__.state,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(hyperfiddle.history.ProxyHistory.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k49015){
var self__ = this;
var this__5350__auto____$1 = this;
var G__49026 = k49015;
var G__49026__$1 = (((G__49026 instanceof cljs.core.Keyword))?G__49026.fqn:null);
switch (G__49026__$1) {
case "parent":
case "state":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k49015);

}
}));

(hyperfiddle.history.ProxyHistory.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__49014){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__49027 = cljs.core.keyword_identical_QMARK_;
var expr__49028 = k__5352__auto__;
if(cljs.core.truth_((pred__49027.cljs$core$IFn$_invoke$arity$2 ? pred__49027.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),expr__49028) : pred__49027.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__49028)))){
return (new hyperfiddle.history.ProxyHistory(G__49014,self__.state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49027.cljs$core$IFn$_invoke$arity$2 ? pred__49027.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state","state",-1988618099),expr__49028) : pred__49027.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),expr__49028)))){
return (new hyperfiddle.history.ProxyHistory(self__.parent,G__49014,self__.__meta,self__.__extmap,null));
} else {
return (new hyperfiddle.history.ProxyHistory(self__.parent,self__.state,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__49014),null));
}
}
}));

(hyperfiddle.history.ProxyHistory.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"state","state",-1988618099),self__.state,null))], null),self__.__extmap));
}));

(hyperfiddle.history.ProxyHistory.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,callback){
var self__ = this;
var this$__$1 = this;
cljs.core.add_watch(self__.state,key,callback);

return this$__$1;
}));

(hyperfiddle.history.ProxyHistory.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (_,key){
var self__ = this;
var ___$1 = this;
return cljs.core.remove_watch(self__.state,key);
}));

(hyperfiddle.history.ProxyHistory.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__49014){
var self__ = this;
var this__5342__auto____$1 = this;
return (new hyperfiddle.history.ProxyHistory(self__.parent,self__.state,G__49014,self__.__extmap,self__.__hash));
}));

(hyperfiddle.history.ProxyHistory.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(hyperfiddle.history.ProxyHistory.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.state);
}));

(hyperfiddle.history.ProxyHistory.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"IHistory","IHistory",-501436262,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"IAtom","IAtom",-1411134312,null)], null))], null);
}));

(hyperfiddle.history.ProxyHistory.cljs$lang$type = true);

(hyperfiddle.history.ProxyHistory.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"hyperfiddle.history/ProxyHistory",null,(1),null));
}));

(hyperfiddle.history.ProxyHistory.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"hyperfiddle.history/ProxyHistory");
}));

/**
 * Positional factory function for hyperfiddle.history/ProxyHistory.
 */
hyperfiddle.history.__GT_ProxyHistory = (function hyperfiddle$history$__GT_ProxyHistory(parent,state){
return (new hyperfiddle.history.ProxyHistory(parent,state,null,null,null));
});

/**
 * Factory function for hyperfiddle.history/ProxyHistory, taking a map of keywords to field values.
 */
hyperfiddle.history.map__GT_ProxyHistory = (function hyperfiddle$history$map__GT_ProxyHistory(G__49018){
var extmap__5385__auto__ = (function (){var G__49049 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49018,new cljs.core.Keyword(null,"parent","parent",-878878779),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"state","state",-1988618099)], 0));
if(cljs.core.record_QMARK_(G__49018)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49049);
} else {
return G__49049;
}
})();
return (new hyperfiddle.history.ProxyHistory(new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__49018),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__49018),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

(hyperfiddle.history.ProxyHistory.prototype.hyperfiddle$history$IHistory$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.history.ProxyHistory.prototype.hyperfiddle$history$IHistory$navigate_BANG_$arity$2 = (function (this$,route){
var this$__$1 = this;
return hyperfiddle.history.navigate_BANG_(this$__$1.parent,route);
}));

(hyperfiddle.history.ProxyHistory.prototype.hyperfiddle$history$IHistory$back_BANG_$arity$1 = (function (this$){
var this$__$1 = this;
return hyperfiddle.history.back_BANG_(this$__$1.parent);
}));

(hyperfiddle.history.ProxyHistory.prototype.hyperfiddle$history$IHistory$forward_BANG_$arity$1 = (function (this$){
var this$__$1 = this;
return hyperfiddle.history.forward_BANG_(this$__$1.parent);
}));

(hyperfiddle.history.ProxyHistory.prototype.hyperfiddle$history$IHistory$replace_state_BANG_$arity$2 = (function (this$,new_state){
var this$__$1 = this;
return cljs.core.reset_BANG_(this$__$1,new_state);
}));
/**
 * Return a new IHistory instance backed by an atom.
 *   History state is stored in an atom.
 *   Navigation is forwarded to the `parent` history.
 *   Initial state is provided with `initial-state`. 
 */
hyperfiddle.history.proxy_history = (function hyperfiddle$history$proxy_history(var_args){
var G__49077 = arguments.length;
switch (G__49077) {
case 1:
return hyperfiddle.history.proxy_history.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hyperfiddle.history.proxy_history.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hyperfiddle.history.proxy_history.cljs$core$IFn$_invoke$arity$1 = (function (parent){
return hyperfiddle.history.proxy_history.cljs$core$IFn$_invoke$arity$2(parent,null);
}));

(hyperfiddle.history.proxy_history.cljs$core$IFn$_invoke$arity$2 = (function (parent,initial_state){
return hyperfiddle.history.__GT_ProxyHistory(parent,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(initial_state));
}));

(hyperfiddle.history.proxy_history.cljs$lang$maxFixedArity = 2);

hyperfiddle.history.history_QMARK_ = (function hyperfiddle$history$history_QMARK_(h){
var and__5043__auto__ = (((!((h == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === h.hyperfiddle$history$IHistory$))))?true:(((!h.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(hyperfiddle.history.IHistory,h):false)):cljs.core.native_satisfies_QMARK_(hyperfiddle.history.IHistory,h));
if(and__5043__auto__){
return (h instanceof cljs.core.IAtom);
} else {
return and__5043__auto__;
}
});
hyperfiddle.history.update_in_STAR_ = (function hyperfiddle$history$update_in_STAR_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___49226 = arguments.length;
var i__5770__auto___49227 = (0);
while(true){
if((i__5770__auto___49227 < len__5769__auto___49226)){
args__5775__auto__.push((arguments[i__5770__auto___49227]));

var G__49228 = (i__5770__auto___49227 + (1));
i__5770__auto___49227 = G__49228;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return hyperfiddle.history.update_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(hyperfiddle.history.update_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (m,path,f,args){
if(cljs.core.empty_QMARK_(path)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,m,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update_in,m,path,f,args);
}
}));

(hyperfiddle.history.update_in_STAR_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(hyperfiddle.history.update_in_STAR_.cljs$lang$applyTo = (function (seq49101){
var G__49103 = cljs.core.first(seq49101);
var seq49101__$1 = cljs.core.next(seq49101);
var G__49104 = cljs.core.first(seq49101__$1);
var seq49101__$2 = cljs.core.next(seq49101__$1);
var G__49105 = cljs.core.first(seq49101__$2);
var seq49101__$3 = cljs.core.next(seq49101__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49103,G__49104,G__49105,seq49101__$3);
}));

hyperfiddle.history.check_route_BANG_ = (function hyperfiddle$history$check_route_BANG_(route){
if((((route == null)) || (cljs.core.associative_QMARK_(route)))){
return null;
} else {
throw (new Error(["Assert failed: ",["A route should be an associative data structure. Given ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(route)].join(''),"\n","(or (nil? route) (associative? route))"].join('')));
}
});
hyperfiddle.history.default_platform_history = (function hyperfiddle$history$default_platform_history(){
return hyperfiddle.history.atom_history.cljs$core$IFn$_invoke$arity$0();
});
hyperfiddle.history.cleanup_on_unmount = (function hyperfiddle$history$cleanup_on_unmount(h,path){
if(cljs.core.empty_QMARK_(path)){
return h;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(path))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(h,cljs.core.first(path));
} else {
return hyperfiddle.history.update_in_STAR_.cljs$core$IFn$_invoke$arity$variadic(h,cljs.core.butlast(path),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.last(path)], 0));

}
}
});
hyperfiddle.history.on_link_click = (function hyperfiddle$history$on_link_click(next_route,e){
var node = e.target;
var target = node.getAttribute("target");
(e.hyperfiddle_history_route = next_route);

(e.hyperfiddle_history_route_external_nav = (((!((node.getAttribute("download") == null)))) || ((((!((target == null)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("_self",target))))));

return null;
});
hyperfiddle.history.absolute = (function hyperfiddle$history$absolute(path){
if(typeof path === 'string'){
} else {
throw (new Error("Assert failed: (string? path)"));
}

return ["/",clojure.string.replace_first(path,/^\/+/,"")].join('');
});
hyperfiddle.history.throttler = (function hyperfiddle$history$throttler(rate_ms){
var _BANG_nextf = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var _BANG_running = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function hyperfiddle$history$throttler_$_rec(f){
if(cljs.core.truth_(cljs.core.deref(_BANG_running))){
return cljs.core.reset_BANG_(_BANG_nextf,f);
} else {
cljs.core.reset_BANG_(_BANG_running,true);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

return window.setTimeout((function (){
cljs.core.reset_BANG_(_BANG_running,false);

var temp__5804__auto__ = cljs.core.deref(_BANG_nextf);
if(cljs.core.truth_(temp__5804__auto__)){
var nextf = temp__5804__auto__;
cljs.core.reset_BANG_(_BANG_nextf,null);

return hyperfiddle$history$throttler_$_rec(nextf);
} else {
return null;
}
}),rate_ms);
}
});
});

var throttle_49229 = hyperfiddle.history.throttler((300));
hyperfiddle.history.replaceState_BANG_ = (function hyperfiddle$history$replaceState_BANG_(path){
return throttle_49229((function (){
return window.history.replaceState(window.history.state,"",hyperfiddle.history.absolute(path));
}));
});

hyperfiddle.history.history_entry_uid = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.swap_BANG_,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((Date.now() * (100))),cljs.core.inc);

hyperfiddle.history.html5_pushState_BANG_ = (function hyperfiddle$history$html5_pushState_BANG_(next_position,path){
return window.history.pushState(({"position": next_position}),"",hyperfiddle.history.absolute(path));
});

hyperfiddle.history.html5_back_BANG_ = (function hyperfiddle$history$html5_back_BANG_(){
return window.history.back();
});

hyperfiddle.history.html5_forward_BANG_ = (function hyperfiddle$history$html5_forward_BANG_(){
return window.history.forward();
});

hyperfiddle.history.html5_location = cljs.core.constantly(window.location);

hyperfiddle.history.html5_path = (function hyperfiddle$history$html5_path(){
var loc = hyperfiddle.history.html5_location();
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(loc.pathname),cljs.core.str.cljs$core$IFn$_invoke$arity$1(loc.search),cljs.core.str.cljs$core$IFn$_invoke$arity$1(loc.hash)].join('');
});

hyperfiddle.history.index_of = (function hyperfiddle$history$index_of(xs,val){
var i = (0);
var G__49141 = xs;
var vec__49142 = G__49141;
var seq__49143 = cljs.core.seq(vec__49142);
var first__49144 = cljs.core.first(seq__49143);
var seq__49143__$1 = cljs.core.next(seq__49143);
var x = first__49144;
var xs__$1 = seq__49143__$1;
var i__$1 = i;
var G__49141__$1 = G__49141;
while(true){
var i__$2 = i__$1;
var vec__49145 = G__49141__$1;
var seq__49146 = cljs.core.seq(vec__49145);
var first__49147 = cljs.core.first(seq__49146);
var seq__49146__$1 = cljs.core.next(seq__49146);
var x__$1 = first__49147;
var xs__$2 = seq__49146__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,val)){
return i__$2;
} else {
if(cljs.core.seq(xs__$2)){
var G__49230 = (i__$2 + (1));
var G__49231 = xs__$2;
i__$1 = G__49230;
G__49141__$1 = G__49231;
continue;
} else {
return (-1);

}
}
break;
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {hyperfiddle.history.IHistory}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
hyperfiddle.history.HTML5History = (function (encode,decode,_BANG_state,_BANG_stack,_BANG_position,__meta,__extmap,__hash){
this.encode = encode;
this.decode = decode;
this._BANG_state = _BANG_state;
this._BANG_stack = _BANG_stack;
this._BANG_position = _BANG_position;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230748938;
this.cljs$lang$protocol_mask$partition1$ = 253954;
});
(hyperfiddle.history.HTML5History.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(hyperfiddle.history.HTML5History.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k49149,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__49154 = k49149;
var G__49154__$1 = (((G__49154 instanceof cljs.core.Keyword))?G__49154.fqn:null);
switch (G__49154__$1) {
case "encode":
return self__.encode;

break;
case "decode":
return self__.decode;

break;
case "!state":
return self__._BANG_state;

break;
case "!stack":
return self__._BANG_stack;

break;
case "!position":
return self__._BANG_position;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49149,else__5346__auto__);

}
}));

(hyperfiddle.history.HTML5History.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__49155){
var vec__49156 = p__49155;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49156,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49156,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(hyperfiddle.history.HTML5History.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#hyperfiddle.history.HTML5History{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"encode","encode",-1753429702),self__.encode],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"decode","decode",-1306165281),self__.decode],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"!state","!state",1311412932),self__._BANG_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"!stack","!stack",-1500239639),self__._BANG_stack],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"!position","!position",-1373918838),self__._BANG_position],null))], null),self__.__extmap));
}));

(hyperfiddle.history.HTML5History.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49148){
var self__ = this;
var G__49148__$1 = this;
return (new cljs.core.RecordIter((0),G__49148__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"encode","encode",-1753429702),new cljs.core.Keyword(null,"decode","decode",-1306165281),new cljs.core.Keyword(null,"!state","!state",1311412932),new cljs.core.Keyword(null,"!stack","!stack",-1500239639),new cljs.core.Keyword(null,"!position","!position",-1373918838)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(hyperfiddle.history.HTML5History.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(hyperfiddle.history.HTML5History.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new hyperfiddle.history.HTML5History(self__.encode,self__.decode,self__._BANG_state,self__._BANG_stack,self__._BANG_position,self__.__meta,self__.__extmap,self__.__hash));
}));

(hyperfiddle.history.HTML5History.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(hyperfiddle.history.HTML5History.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (132282510 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(hyperfiddle.history.HTML5History.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49150,other49151){
var self__ = this;
var this49150__$1 = this;
return (((!((other49151 == null)))) && ((((this49150__$1.constructor === other49151.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49150__$1.encode,other49151.encode)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49150__$1.decode,other49151.decode)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49150__$1._BANG_state,other49151._BANG_state)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49150__$1._BANG_stack,other49151._BANG_stack)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49150__$1._BANG_position,other49151._BANG_position)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49150__$1.__extmap,other49151.__extmap)))))))))))))));
}));

(hyperfiddle.history.HTML5History.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,newval){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$ISwap$_swap_BANG_$arity$2(null,cljs.core.constantly(newval));
}));

(hyperfiddle.history.HTML5History.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
var vec__49176 = cljs.core.swap_vals_BANG_.cljs$core$IFn$_invoke$arity$2(self__._BANG_state,f);
var _oldval = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49176,(0),null);
var newval = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49176,(1),null);
hyperfiddle.history.replaceState_BANG_((self__.encode.cljs$core$IFn$_invoke$arity$1 ? self__.encode.cljs$core$IFn$_invoke$arity$1(newval) : self__.encode.call(null,newval)));

return newval;
}));

(hyperfiddle.history.HTML5History.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,arg){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$ISwap$_swap_BANG_$arity$2(null,(function (p1__49120_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__49120_SHARP_,arg) : f.call(null,p1__49120_SHARP_,arg));
}));
}));

(hyperfiddle.history.HTML5History.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,arg1,arg2){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$ISwap$_swap_BANG_$arity$2(null,(function (p1__49121_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(p1__49121_SHARP_,arg1,arg2) : f.call(null,p1__49121_SHARP_,arg1,arg2));
}));
}));

(hyperfiddle.history.HTML5History.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,x,y,args){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$ISwap$_swap_BANG_$arity$2(null,(function (p1__49122_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,p1__49122_SHARP_,x,y,args);
}));
}));

(hyperfiddle.history.HTML5History.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"!state","!state",1311412932),null,new cljs.core.Keyword(null,"!stack","!stack",-1500239639),null,new cljs.core.Keyword(null,"!position","!position",-1373918838),null,new cljs.core.Keyword(null,"encode","encode",-1753429702),null,new cljs.core.Keyword(null,"decode","decode",-1306165281),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new hyperfiddle.history.HTML5History(self__.encode,self__.decode,self__._BANG_state,self__._BANG_stack,self__._BANG_position,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(hyperfiddle.history.HTML5History.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k49149){
var self__ = this;
var this__5350__auto____$1 = this;
var G__49181 = k49149;
var G__49181__$1 = (((G__49181 instanceof cljs.core.Keyword))?G__49181.fqn:null);
switch (G__49181__$1) {
case "encode":
case "decode":
case "!state":
case "!stack":
case "!position":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k49149);

}
}));

(hyperfiddle.history.HTML5History.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__49148){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__49182 = cljs.core.keyword_identical_QMARK_;
var expr__49183 = k__5352__auto__;
if(cljs.core.truth_((pred__49182.cljs$core$IFn$_invoke$arity$2 ? pred__49182.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"encode","encode",-1753429702),expr__49183) : pred__49182.call(null,new cljs.core.Keyword(null,"encode","encode",-1753429702),expr__49183)))){
return (new hyperfiddle.history.HTML5History(G__49148,self__.decode,self__._BANG_state,self__._BANG_stack,self__._BANG_position,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49182.cljs$core$IFn$_invoke$arity$2 ? pred__49182.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"decode","decode",-1306165281),expr__49183) : pred__49182.call(null,new cljs.core.Keyword(null,"decode","decode",-1306165281),expr__49183)))){
return (new hyperfiddle.history.HTML5History(self__.encode,G__49148,self__._BANG_state,self__._BANG_stack,self__._BANG_position,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49182.cljs$core$IFn$_invoke$arity$2 ? pred__49182.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"!state","!state",1311412932),expr__49183) : pred__49182.call(null,new cljs.core.Keyword(null,"!state","!state",1311412932),expr__49183)))){
return (new hyperfiddle.history.HTML5History(self__.encode,self__.decode,G__49148,self__._BANG_stack,self__._BANG_position,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49182.cljs$core$IFn$_invoke$arity$2 ? pred__49182.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"!stack","!stack",-1500239639),expr__49183) : pred__49182.call(null,new cljs.core.Keyword(null,"!stack","!stack",-1500239639),expr__49183)))){
return (new hyperfiddle.history.HTML5History(self__.encode,self__.decode,self__._BANG_state,G__49148,self__._BANG_position,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49182.cljs$core$IFn$_invoke$arity$2 ? pred__49182.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"!position","!position",-1373918838),expr__49183) : pred__49182.call(null,new cljs.core.Keyword(null,"!position","!position",-1373918838),expr__49183)))){
return (new hyperfiddle.history.HTML5History(self__.encode,self__.decode,self__._BANG_state,self__._BANG_stack,G__49148,self__.__meta,self__.__extmap,null));
} else {
return (new hyperfiddle.history.HTML5History(self__.encode,self__.decode,self__._BANG_state,self__._BANG_stack,self__._BANG_position,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__49148),null));
}
}
}
}
}
}));

(hyperfiddle.history.HTML5History.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"encode","encode",-1753429702),self__.encode,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"decode","decode",-1306165281),self__.decode,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"!state","!state",1311412932),self__._BANG_state,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"!stack","!stack",-1500239639),self__._BANG_stack,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"!position","!position",-1373918838),self__._BANG_position,null))], null),self__.__extmap));
}));

(hyperfiddle.history.HTML5History.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,callback){
var self__ = this;
var this$__$1 = this;
cljs.core.add_watch(self__._BANG_state,key,callback);

return this$__$1;
}));

(hyperfiddle.history.HTML5History.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (_,key){
var self__ = this;
var ___$1 = this;
return cljs.core.remove_watch(self__._BANG_state,key);
}));

(hyperfiddle.history.HTML5History.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__49148){
var self__ = this;
var this__5342__auto____$1 = this;
return (new hyperfiddle.history.HTML5History(self__.encode,self__.decode,self__._BANG_state,self__._BANG_stack,self__._BANG_position,G__49148,self__.__extmap,self__.__hash));
}));

(hyperfiddle.history.HTML5History.prototype.hyperfiddle$history$IHistory$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.history.HTML5History.prototype.hyperfiddle$history$IHistory$navigate_BANG_$arity$2 = (function (this$,route){
var self__ = this;
var this$__$1 = this;
var prev_position_49236 = cljs.core.deref(self__._BANG_position);
var next_position_49237 = hyperfiddle.history.history_entry_uid();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__._BANG_stack,(function (stack){
var index = hyperfiddle.history.index_of(stack,prev_position_49236);
var G__49187 = index;
switch (G__49187) {
case (-1):
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,next_position_49237);

break;
default:
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(stack,(0),(index + (1))),next_position_49237);

}
}));

cljs.core.reset_BANG_(self__._BANG_position,next_position_49237);

hyperfiddle.history.html5_pushState_BANG_(next_position_49237,(self__.encode.cljs$core$IFn$_invoke$arity$1 ? self__.encode.cljs$core$IFn$_invoke$arity$1(route) : self__.encode.call(null,route)));

return cljs.core.reset_BANG_(this$__$1._BANG_state,route);
}));

(hyperfiddle.history.HTML5History.prototype.hyperfiddle$history$IHistory$back_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
hyperfiddle.history.html5_back_BANG_();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__._BANG_position,(function (pos,stack){
var index = hyperfiddle.history.index_of(stack,pos);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),index)){
return pos;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(stack,(index - (1)));
}
}),cljs.core.deref(self__._BANG_stack));

return cljs.core.reset_BANG_(this$__$1._BANG_state,(function (){var G__49188 = hyperfiddle.history.html5_path();
return (self__.decode.cljs$core$IFn$_invoke$arity$1 ? self__.decode.cljs$core$IFn$_invoke$arity$1(G__49188) : self__.decode.call(null,G__49188));
})());
}));

(hyperfiddle.history.HTML5History.prototype.hyperfiddle$history$IHistory$forward_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
hyperfiddle.history.html5_forward_BANG_();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__._BANG_position,(function (pos,stack){
var index = hyperfiddle.history.index_of(stack,pos);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,(cljs.core.count(stack) - (1)))){
return pos;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(stack,(index + (1)));
}
}),cljs.core.deref(self__._BANG_stack));

return cljs.core.reset_BANG_(this$__$1._BANG_state,(function (){var G__49189 = hyperfiddle.history.html5_path();
return (self__.decode.cljs$core$IFn$_invoke$arity$1 ? self__.decode.cljs$core$IFn$_invoke$arity$1(G__49189) : self__.decode.call(null,G__49189));
})());
}));

(hyperfiddle.history.HTML5History.prototype.hyperfiddle$history$IHistory$replace_state_BANG_$arity$2 = (function (this$,new_state){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_(this$__$1,new_state);
}));

(hyperfiddle.history.HTML5History.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(hyperfiddle.history.HTML5History.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__._BANG_state);
}));

(hyperfiddle.history.HTML5History.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"encode","encode",-112898175,null),new cljs.core.Symbol(null,"decode","decode",334366246,null),new cljs.core.Symbol(null,"!state","!state",-1343022837,null),new cljs.core.Symbol(null,"!stack","!stack",140291888,null),new cljs.core.Symbol(null,"!position","!position",266612689,null)], null);
}));

(hyperfiddle.history.HTML5History.cljs$lang$type = true);

(hyperfiddle.history.HTML5History.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"hyperfiddle.history/HTML5History",null,(1),null));
}));

(hyperfiddle.history.HTML5History.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"hyperfiddle.history/HTML5History");
}));

/**
 * Positional factory function for hyperfiddle.history/HTML5History.
 */
hyperfiddle.history.__GT_HTML5History = (function hyperfiddle$history$__GT_HTML5History(encode,decode,_BANG_state,_BANG_stack,_BANG_position){
return (new hyperfiddle.history.HTML5History(encode,decode,_BANG_state,_BANG_stack,_BANG_position,null,null,null));
});

/**
 * Factory function for hyperfiddle.history/HTML5History, taking a map of keywords to field values.
 */
hyperfiddle.history.map__GT_HTML5History = (function hyperfiddle$history$map__GT_HTML5History(G__49152){
var extmap__5385__auto__ = (function (){var G__49190 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49152,new cljs.core.Keyword(null,"encode","encode",-1753429702),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"decode","decode",-1306165281),new cljs.core.Keyword(null,"!state","!state",1311412932),new cljs.core.Keyword(null,"!stack","!stack",-1500239639),new cljs.core.Keyword(null,"!position","!position",-1373918838)], 0));
if(cljs.core.record_QMARK_(G__49152)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49190);
} else {
return G__49190;
}
})();
return (new hyperfiddle.history.HTML5History(new cljs.core.Keyword(null,"encode","encode",-1753429702).cljs$core$IFn$_invoke$arity$1(G__49152),new cljs.core.Keyword(null,"decode","decode",-1306165281).cljs$core$IFn$_invoke$arity$1(G__49152),new cljs.core.Keyword(null,"!state","!state",1311412932).cljs$core$IFn$_invoke$arity$1(G__49152),new cljs.core.Keyword(null,"!stack","!stack",-1500239639).cljs$core$IFn$_invoke$arity$1(G__49152),new cljs.core.Keyword(null,"!position","!position",-1373918838).cljs$core$IFn$_invoke$arity$1(G__49152),null,cljs.core.not_empty(extmap__5385__auto__),null));
});


hyperfiddle.history.html5_history = (function hyperfiddle$history$html5_history(encode,decode){
var position = (function (){var or__5045__auto__ = (function (){var temp__5804__auto__ = window.history.state;
if(cljs.core.truth_(temp__5804__auto__)){
var state = temp__5804__auto__;
return state.position;
} else {
return null;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return hyperfiddle.history.history_entry_uid();
}
})();
var stack = (function (){var temp__5802__auto__ = window.sessionStorage.getItem("hyperfiddle_history_stack");
if(cljs.core.truth_(temp__5802__auto__)){
var array = temp__5802__auto__;
return clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(array);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [position], null);
}
})();
var _BANG_position = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(position);
var _BANG_stack = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(stack);
window.history.replaceState(({"position": position}),null);

cljs.core.add_watch(_BANG_stack,new cljs.core.Keyword("hyperfiddle.history","stack","hyperfiddle.history/stack",-2116087988),(function (_,___$1,___$2,stack__$1){
return window.sessionStorage.setItem("hyperfiddle_history_stack",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stack__$1], 0)));
}));

return hyperfiddle.history.__GT_HTML5History(encode,decode,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var G__49191 = hyperfiddle.history.html5_path();
return (decode.cljs$core$IFn$_invoke$arity$1 ? decode.cljs$core$IFn$_invoke$arity$1(G__49191) : decode.call(null,G__49191));
})()),_BANG_stack,_BANG_position);
});

hyperfiddle.history._html5_history_get_state = (function hyperfiddle$history$_html5_history_get_state(this$){
return this$._BANG_state;
});



hyperfiddle.history.nav_delta = (function hyperfiddle$history$nav_delta(stack,prev_position,curr_position){
return (hyperfiddle.history.index_of(stack,curr_position) - hyperfiddle.history.index_of(stack,prev_position));
});



//# sourceMappingURL=hyperfiddle.history.js.map
