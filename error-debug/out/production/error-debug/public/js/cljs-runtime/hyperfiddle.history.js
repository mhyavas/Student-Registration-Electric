goog.provide('hyperfiddle.history');

/**
 * @interface
 */
hyperfiddle.history.IHistory = function(){};

var hyperfiddle$history$IHistory$navigate_BANG_$dyn_34242 = (function (this$,route){
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
return hyperfiddle$history$IHistory$navigate_BANG_$dyn_34242(this$,route);
}
});

var hyperfiddle$history$IHistory$back_BANG_$dyn_34243 = (function (this$){
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
return hyperfiddle$history$IHistory$back_BANG_$dyn_34243(this$);
}
});

var hyperfiddle$history$IHistory$forward_BANG_$dyn_34244 = (function (this$){
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
return hyperfiddle$history$IHistory$forward_BANG_$dyn_34244(this$);
}
});

var hyperfiddle$history$IHistory$replace_state_BANG_$dyn_34245 = (function (this$,new_state){
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
return hyperfiddle$history$IHistory$replace_state_BANG_$dyn_34245(this$,new_state);
}
});

hyperfiddle.history.updatef = (function hyperfiddle$history$updatef(p__34125,f){
var vec__34126 = p__34125;
var history__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34126,(0),null);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34126,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.cljs$core$IFn$_invoke$arity$3(history__$1,idx,f),idx], null);
});
hyperfiddle.history.notify_watches = (function hyperfiddle$history$notify_watches(this$,p__34132){
var vec__34133 = p__34132;
var oldstate = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34133,(0),null);
var newstate = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34133,(1),null);
var oldval = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.get,oldstate);
var newval = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.get,newstate);
var seq__34136 = cljs.core.seq(cljs.core.deref(new cljs.core.Keyword(null,"watches","watches",-273097535).cljs$core$IFn$_invoke$arity$1(this$)));
var chunk__34137 = null;
var count__34138 = (0);
var i__34139 = (0);
while(true){
if((i__34139 < count__34138)){
var vec__34146 = chunk__34137.cljs$core$IIndexed$_nth$arity$2(null,i__34139);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34146,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34146,(1),null);
(callback.cljs$core$IFn$_invoke$arity$4 ? callback.cljs$core$IFn$_invoke$arity$4(key,this$,oldval,newval) : callback.call(null,key,this$,oldval,newval));


var G__34246 = seq__34136;
var G__34247 = chunk__34137;
var G__34248 = count__34138;
var G__34249 = (i__34139 + (1));
seq__34136 = G__34246;
chunk__34137 = G__34247;
count__34138 = G__34248;
i__34139 = G__34249;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34136);
if(temp__5804__auto__){
var seq__34136__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34136__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34136__$1);
var G__34250 = cljs.core.chunk_rest(seq__34136__$1);
var G__34251 = c__5568__auto__;
var G__34252 = cljs.core.count(c__5568__auto__);
var G__34253 = (0);
seq__34136 = G__34250;
chunk__34137 = G__34251;
count__34138 = G__34252;
i__34139 = G__34253;
continue;
} else {
var vec__34149 = cljs.core.first(seq__34136__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34149,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34149,(1),null);
(callback.cljs$core$IFn$_invoke$arity$4 ? callback.cljs$core$IFn$_invoke$arity$4(key,this$,oldval,newval) : callback.call(null,key,this$,oldval,newval));


var G__34254 = cljs.core.next(seq__34136__$1);
var G__34255 = null;
var G__34256 = (0);
var G__34257 = (0);
seq__34136 = G__34254;
chunk__34137 = G__34255;
count__34138 = G__34256;
i__34139 = G__34257;
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

(hyperfiddle.history.AtomHistory.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k34156,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__34160 = k34156;
var G__34160__$1 = (((G__34160 instanceof cljs.core.Keyword))?G__34160.fqn:null);
switch (G__34160__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34156,else__5346__auto__);

}
}));

(hyperfiddle.history.AtomHistory.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__34161){
var vec__34162 = p__34161;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34162,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34162,(1),null);
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

(hyperfiddle.history.AtomHistory.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34155){
var self__ = this;
var G__34155__$1 = this;
return (new cljs.core.RecordIter((0),G__34155__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"watches","watches",-273097535),new cljs.core.Keyword(null,"max-size","max-size",-874966132)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(hyperfiddle.history.AtomHistory.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34157,other34158){
var self__ = this;
var this34157__$1 = this;
return (((!((other34158 == null)))) && ((((this34157__$1.constructor === other34158.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34157__$1.state,other34158.state)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34157__$1.watches,other34158.watches)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34157__$1.max_size,other34158.max_size)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34157__$1.__extmap,other34158.__extmap)))))))))));
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
return this$__$1.cljs$core$ISwap$_swap_BANG_$arity$2(null,(function (p1__34152_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__34152_SHARP_,arg) : f.call(null,p1__34152_SHARP_,arg));
}));
}));

(hyperfiddle.history.AtomHistory.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,arg1,arg2){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$ISwap$_swap_BANG_$arity$2(null,(function (p1__34153_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(p1__34153_SHARP_,arg1,arg2) : f.call(null,p1__34153_SHARP_,arg1,arg2));
}));
}));

(hyperfiddle.history.AtomHistory.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,x,y,args){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$ISwap$_swap_BANG_$arity$2(null,(function (p1__34154_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,p1__34154_SHARP_,x,y,args);
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

(hyperfiddle.history.AtomHistory.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k34156){
var self__ = this;
var this__5350__auto____$1 = this;
var G__34165 = k34156;
var G__34165__$1 = (((G__34165 instanceof cljs.core.Keyword))?G__34165.fqn:null);
switch (G__34165__$1) {
case "state":
case "watches":
case "max-size":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k34156);

}
}));

(hyperfiddle.history.AtomHistory.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__34155){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__34166 = cljs.core.keyword_identical_QMARK_;
var expr__34167 = k__5352__auto__;
if(cljs.core.truth_((pred__34166.cljs$core$IFn$_invoke$arity$2 ? pred__34166.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state","state",-1988618099),expr__34167) : pred__34166.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),expr__34167)))){
return (new hyperfiddle.history.AtomHistory(G__34155,self__.watches,self__.max_size,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34166.cljs$core$IFn$_invoke$arity$2 ? pred__34166.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"watches","watches",-273097535),expr__34167) : pred__34166.call(null,new cljs.core.Keyword(null,"watches","watches",-273097535),expr__34167)))){
return (new hyperfiddle.history.AtomHistory(self__.state,G__34155,self__.max_size,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34166.cljs$core$IFn$_invoke$arity$2 ? pred__34166.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"max-size","max-size",-874966132),expr__34167) : pred__34166.call(null,new cljs.core.Keyword(null,"max-size","max-size",-874966132),expr__34167)))){
return (new hyperfiddle.history.AtomHistory(self__.state,self__.watches,G__34155,self__.__meta,self__.__extmap,null));
} else {
return (new hyperfiddle.history.AtomHistory(self__.state,self__.watches,self__.max_size,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__34155),null));
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

(hyperfiddle.history.AtomHistory.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__34155){
var self__ = this;
var this__5342__auto____$1 = this;
return (new hyperfiddle.history.AtomHistory(self__.state,self__.watches,self__.max_size,G__34155,self__.__extmap,self__.__hash));
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
var vec__34169 = cljs.core.deref(self__.state);
var history__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34169,(0),null);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34169,(1),null);
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
hyperfiddle.history.map__GT_AtomHistory = (function hyperfiddle$history$map__GT_AtomHistory(G__34159){
var extmap__5385__auto__ = (function (){var G__34172 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34159,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"watches","watches",-273097535),new cljs.core.Keyword(null,"max-size","max-size",-874966132)], 0));
if(cljs.core.record_QMARK_(G__34159)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34172);
} else {
return G__34172;
}
})();
return (new hyperfiddle.history.AtomHistory(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__34159),new cljs.core.Keyword(null,"watches","watches",-273097535).cljs$core$IFn$_invoke$arity$1(G__34159),new cljs.core.Keyword(null,"max-size","max-size",-874966132).cljs$core$IFn$_invoke$arity$1(G__34159),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

(hyperfiddle.history.AtomHistory.prototype.hyperfiddle$history$IHistory$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.history.AtomHistory.prototype.hyperfiddle$history$IHistory$navigate_BANG_$arity$2 = (function (this$,route){
var this$__$1 = this;
return hyperfiddle.history.notify_watches(this$__$1,cljs.core.swap_vals_BANG_.cljs$core$IFn$_invoke$arity$2(this$__$1.state,(function (p__34173){
var vec__34174 = p__34173;
var history__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34174,(0),null);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34174,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(history__$1),this$__$1.max_size)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(history__$1,(1)),route),idx], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(history__$1,(0),(idx + (1))),route),(idx + (1))], null);
}
})));
}));

(hyperfiddle.history.AtomHistory.prototype.hyperfiddle$history$IHistory$back_BANG_$arity$1 = (function (this$){
var this$__$1 = this;
return hyperfiddle.history.notify_watches(this$__$1,cljs.core.swap_vals_BANG_.cljs$core$IFn$_invoke$arity$2(this$__$1.state,(function (p__34177){
var vec__34178 = p__34177;
var history__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34178,(0),null);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34178,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [history__$1,(function (){var x__5130__auto__ = (idx - (1));
var y__5131__auto__ = (0);
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})()], null);
})));
}));

(hyperfiddle.history.AtomHistory.prototype.hyperfiddle$history$IHistory$forward_BANG_$arity$1 = (function (this$){
var this$__$1 = this;
return hyperfiddle.history.notify_watches(this$__$1,cljs.core.swap_vals_BANG_.cljs$core$IFn$_invoke$arity$2(this$__$1.state,(function (p__34181){
var vec__34182 = p__34181;
var history__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34182,(0),null);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34182,(1),null);
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
var G__34186 = arguments.length;
switch (G__34186) {
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

(hyperfiddle.history.ProxyHistory.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k34188,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__34192 = k34188;
var G__34192__$1 = (((G__34192 instanceof cljs.core.Keyword))?G__34192.fqn:null);
switch (G__34192__$1) {
case "parent":
return self__.parent;

break;
case "state":
return self__.state;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34188,else__5346__auto__);

}
}));

(hyperfiddle.history.ProxyHistory.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__34193){
var vec__34194 = p__34193;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34194,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34194,(1),null);
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

(hyperfiddle.history.ProxyHistory.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34187){
var self__ = this;
var G__34187__$1 = this;
return (new cljs.core.RecordIter((0),G__34187__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"state","state",-1988618099)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(hyperfiddle.history.ProxyHistory.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34189,other34190){
var self__ = this;
var this34189__$1 = this;
return (((!((other34190 == null)))) && ((((this34189__$1.constructor === other34190.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34189__$1.parent,other34190.parent)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34189__$1.state,other34190.state)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34189__$1.__extmap,other34190.__extmap)))))))));
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

(hyperfiddle.history.ProxyHistory.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k34188){
var self__ = this;
var this__5350__auto____$1 = this;
var G__34197 = k34188;
var G__34197__$1 = (((G__34197 instanceof cljs.core.Keyword))?G__34197.fqn:null);
switch (G__34197__$1) {
case "parent":
case "state":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k34188);

}
}));

(hyperfiddle.history.ProxyHistory.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__34187){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__34198 = cljs.core.keyword_identical_QMARK_;
var expr__34199 = k__5352__auto__;
if(cljs.core.truth_((pred__34198.cljs$core$IFn$_invoke$arity$2 ? pred__34198.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),expr__34199) : pred__34198.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__34199)))){
return (new hyperfiddle.history.ProxyHistory(G__34187,self__.state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34198.cljs$core$IFn$_invoke$arity$2 ? pred__34198.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state","state",-1988618099),expr__34199) : pred__34198.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),expr__34199)))){
return (new hyperfiddle.history.ProxyHistory(self__.parent,G__34187,self__.__meta,self__.__extmap,null));
} else {
return (new hyperfiddle.history.ProxyHistory(self__.parent,self__.state,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__34187),null));
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

(hyperfiddle.history.ProxyHistory.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__34187){
var self__ = this;
var this__5342__auto____$1 = this;
return (new hyperfiddle.history.ProxyHistory(self__.parent,self__.state,G__34187,self__.__extmap,self__.__hash));
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
hyperfiddle.history.map__GT_ProxyHistory = (function hyperfiddle$history$map__GT_ProxyHistory(G__34191){
var extmap__5385__auto__ = (function (){var G__34201 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34191,new cljs.core.Keyword(null,"parent","parent",-878878779),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"state","state",-1988618099)], 0));
if(cljs.core.record_QMARK_(G__34191)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34201);
} else {
return G__34201;
}
})();
return (new hyperfiddle.history.ProxyHistory(new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__34191),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__34191),null,cljs.core.not_empty(extmap__5385__auto__),null));
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
var G__34203 = arguments.length;
switch (G__34203) {
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
var len__5769__auto___34282 = arguments.length;
var i__5770__auto___34283 = (0);
while(true){
if((i__5770__auto___34283 < len__5769__auto___34282)){
args__5775__auto__.push((arguments[i__5770__auto___34283]));

var G__34284 = (i__5770__auto___34283 + (1));
i__5770__auto___34283 = G__34284;
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
(hyperfiddle.history.update_in_STAR_.cljs$lang$applyTo = (function (seq34205){
var G__34206 = cljs.core.first(seq34205);
var seq34205__$1 = cljs.core.next(seq34205);
var G__34207 = cljs.core.first(seq34205__$1);
var seq34205__$2 = cljs.core.next(seq34205__$1);
var G__34208 = cljs.core.first(seq34205__$2);
var seq34205__$3 = cljs.core.next(seq34205__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34206,G__34207,G__34208,seq34205__$3);
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

var throttle_34290 = hyperfiddle.history.throttler((300));
hyperfiddle.history.replaceState_BANG_ = (function hyperfiddle$history$replaceState_BANG_(path){
return throttle_34290((function (){
return window.history.replaceState(null,"",hyperfiddle.history.absolute(path));
}));
});

hyperfiddle.history.html5_pushState_BANG_ = (function hyperfiddle$history$html5_pushState_BANG_(path){
return window.history.pushState(null,"",hyperfiddle.history.absolute(path));
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
hyperfiddle.history.HTML5History = (function (encode,decode,_BANG_state,__meta,__extmap,__hash){
this.encode = encode;
this.decode = decode;
this._BANG_state = _BANG_state;
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

(hyperfiddle.history.HTML5History.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k34222,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__34226 = k34222;
var G__34226__$1 = (((G__34226 instanceof cljs.core.Keyword))?G__34226.fqn:null);
switch (G__34226__$1) {
case "encode":
return self__.encode;

break;
case "decode":
return self__.decode;

break;
case "!state":
return self__._BANG_state;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34222,else__5346__auto__);

}
}));

(hyperfiddle.history.HTML5History.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__34227){
var vec__34228 = p__34227;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34228,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34228,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(hyperfiddle.history.HTML5History.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#hyperfiddle.history.HTML5History{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"encode","encode",-1753429702),self__.encode],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"decode","decode",-1306165281),self__.decode],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"!state","!state",1311412932),self__._BANG_state],null))], null),self__.__extmap));
}));

(hyperfiddle.history.HTML5History.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34221){
var self__ = this;
var G__34221__$1 = this;
return (new cljs.core.RecordIter((0),G__34221__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"encode","encode",-1753429702),new cljs.core.Keyword(null,"decode","decode",-1306165281),new cljs.core.Keyword(null,"!state","!state",1311412932)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(hyperfiddle.history.HTML5History.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(hyperfiddle.history.HTML5History.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new hyperfiddle.history.HTML5History(self__.encode,self__.decode,self__._BANG_state,self__.__meta,self__.__extmap,self__.__hash));
}));

(hyperfiddle.history.HTML5History.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
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

(hyperfiddle.history.HTML5History.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34223,other34224){
var self__ = this;
var this34223__$1 = this;
return (((!((other34224 == null)))) && ((((this34223__$1.constructor === other34224.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34223__$1.encode,other34224.encode)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34223__$1.decode,other34224.decode)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34223__$1._BANG_state,other34224._BANG_state)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34223__$1.__extmap,other34224.__extmap)))))))))));
}));

(hyperfiddle.history.HTML5History.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,newval){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$ISwap$_swap_BANG_$arity$2(null,cljs.core.constantly(newval));
}));

(hyperfiddle.history.HTML5History.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
var vec__34231 = cljs.core.swap_vals_BANG_.cljs$core$IFn$_invoke$arity$2(self__._BANG_state,f);
var _oldval = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34231,(0),null);
var newval = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34231,(1),null);
hyperfiddle.history.replaceState_BANG_((self__.encode.cljs$core$IFn$_invoke$arity$1 ? self__.encode.cljs$core$IFn$_invoke$arity$1(newval) : self__.encode.call(null,newval)));

return newval;
}));

(hyperfiddle.history.HTML5History.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,arg){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$ISwap$_swap_BANG_$arity$2(null,(function (p1__34218_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__34218_SHARP_,arg) : f.call(null,p1__34218_SHARP_,arg));
}));
}));

(hyperfiddle.history.HTML5History.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,arg1,arg2){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$ISwap$_swap_BANG_$arity$2(null,(function (p1__34219_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(p1__34219_SHARP_,arg1,arg2) : f.call(null,p1__34219_SHARP_,arg1,arg2));
}));
}));

(hyperfiddle.history.HTML5History.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,x,y,args){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$ISwap$_swap_BANG_$arity$2(null,(function (p1__34220_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,p1__34220_SHARP_,x,y,args);
}));
}));

(hyperfiddle.history.HTML5History.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"!state","!state",1311412932),null,new cljs.core.Keyword(null,"encode","encode",-1753429702),null,new cljs.core.Keyword(null,"decode","decode",-1306165281),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new hyperfiddle.history.HTML5History(self__.encode,self__.decode,self__._BANG_state,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(hyperfiddle.history.HTML5History.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k34222){
var self__ = this;
var this__5350__auto____$1 = this;
var G__34234 = k34222;
var G__34234__$1 = (((G__34234 instanceof cljs.core.Keyword))?G__34234.fqn:null);
switch (G__34234__$1) {
case "encode":
case "decode":
case "!state":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k34222);

}
}));

(hyperfiddle.history.HTML5History.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__34221){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__34235 = cljs.core.keyword_identical_QMARK_;
var expr__34236 = k__5352__auto__;
if(cljs.core.truth_((pred__34235.cljs$core$IFn$_invoke$arity$2 ? pred__34235.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"encode","encode",-1753429702),expr__34236) : pred__34235.call(null,new cljs.core.Keyword(null,"encode","encode",-1753429702),expr__34236)))){
return (new hyperfiddle.history.HTML5History(G__34221,self__.decode,self__._BANG_state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34235.cljs$core$IFn$_invoke$arity$2 ? pred__34235.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"decode","decode",-1306165281),expr__34236) : pred__34235.call(null,new cljs.core.Keyword(null,"decode","decode",-1306165281),expr__34236)))){
return (new hyperfiddle.history.HTML5History(self__.encode,G__34221,self__._BANG_state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34235.cljs$core$IFn$_invoke$arity$2 ? pred__34235.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"!state","!state",1311412932),expr__34236) : pred__34235.call(null,new cljs.core.Keyword(null,"!state","!state",1311412932),expr__34236)))){
return (new hyperfiddle.history.HTML5History(self__.encode,self__.decode,G__34221,self__.__meta,self__.__extmap,null));
} else {
return (new hyperfiddle.history.HTML5History(self__.encode,self__.decode,self__._BANG_state,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__34221),null));
}
}
}
}));

(hyperfiddle.history.HTML5History.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"encode","encode",-1753429702),self__.encode,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"decode","decode",-1306165281),self__.decode,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"!state","!state",1311412932),self__._BANG_state,null))], null),self__.__extmap));
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

(hyperfiddle.history.HTML5History.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__34221){
var self__ = this;
var this__5342__auto____$1 = this;
return (new hyperfiddle.history.HTML5History(self__.encode,self__.decode,self__._BANG_state,G__34221,self__.__extmap,self__.__hash));
}));

(hyperfiddle.history.HTML5History.prototype.hyperfiddle$history$IHistory$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.history.HTML5History.prototype.hyperfiddle$history$IHistory$navigate_BANG_$arity$2 = (function (this$,route){
var self__ = this;
var this$__$1 = this;
hyperfiddle.history.html5_pushState_BANG_((self__.encode.cljs$core$IFn$_invoke$arity$1 ? self__.encode.cljs$core$IFn$_invoke$arity$1(route) : self__.encode.call(null,route)));

return cljs.core.reset_BANG_(this$__$1._BANG_state,route);
}));

(hyperfiddle.history.HTML5History.prototype.hyperfiddle$history$IHistory$back_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
hyperfiddle.history.html5_back_BANG_();

return cljs.core.reset_BANG_(this$__$1._BANG_state,(function (){var G__34238 = hyperfiddle.history.html5_path();
return (self__.decode.cljs$core$IFn$_invoke$arity$1 ? self__.decode.cljs$core$IFn$_invoke$arity$1(G__34238) : self__.decode.call(null,G__34238));
})());
}));

(hyperfiddle.history.HTML5History.prototype.hyperfiddle$history$IHistory$forward_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
hyperfiddle.history.html5_forward_BANG_();

return cljs.core.reset_BANG_(this$__$1._BANG_state,(function (){var G__34239 = hyperfiddle.history.html5_path();
return (self__.decode.cljs$core$IFn$_invoke$arity$1 ? self__.decode.cljs$core$IFn$_invoke$arity$1(G__34239) : self__.decode.call(null,G__34239));
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"encode","encode",-112898175,null),new cljs.core.Symbol(null,"decode","decode",334366246,null),new cljs.core.Symbol(null,"!state","!state",-1343022837,null)], null);
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
hyperfiddle.history.__GT_HTML5History = (function hyperfiddle$history$__GT_HTML5History(encode,decode,_BANG_state){
return (new hyperfiddle.history.HTML5History(encode,decode,_BANG_state,null,null,null));
});

/**
 * Factory function for hyperfiddle.history/HTML5History, taking a map of keywords to field values.
 */
hyperfiddle.history.map__GT_HTML5History = (function hyperfiddle$history$map__GT_HTML5History(G__34225){
var extmap__5385__auto__ = (function (){var G__34240 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34225,new cljs.core.Keyword(null,"encode","encode",-1753429702),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"decode","decode",-1306165281),new cljs.core.Keyword(null,"!state","!state",1311412932)], 0));
if(cljs.core.record_QMARK_(G__34225)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34240);
} else {
return G__34240;
}
})();
return (new hyperfiddle.history.HTML5History(new cljs.core.Keyword(null,"encode","encode",-1753429702).cljs$core$IFn$_invoke$arity$1(G__34225),new cljs.core.Keyword(null,"decode","decode",-1306165281).cljs$core$IFn$_invoke$arity$1(G__34225),new cljs.core.Keyword(null,"!state","!state",1311412932).cljs$core$IFn$_invoke$arity$1(G__34225),null,cljs.core.not_empty(extmap__5385__auto__),null));
});


hyperfiddle.history.html5_history = (function hyperfiddle$history$html5_history(encode,decode){
return hyperfiddle.history.__GT_HTML5History(encode,decode,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var G__34241 = hyperfiddle.history.html5_path();
return (decode.cljs$core$IFn$_invoke$arity$1 ? decode.cljs$core$IFn$_invoke$arity$1(G__34241) : decode.call(null,G__34241));
})()));
});

hyperfiddle.history._html5_history_get_state = (function hyperfiddle$history$_html5_history_get_state(this$){
return this$._BANG_state;
});


//# sourceMappingURL=hyperfiddle.history.js.map
