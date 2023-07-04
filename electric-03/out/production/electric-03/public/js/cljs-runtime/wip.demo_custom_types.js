goog.provide('wip.demo_custom_types');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
wip.demo_custom_types.MyCustomType = (function (field,__meta,__extmap,__hash){
this.field = field;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(wip.demo_custom_types.MyCustomType.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(wip.demo_custom_types.MyCustomType.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k35927,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__35931 = k35927;
var G__35931__$1 = (((G__35931 instanceof cljs.core.Keyword))?G__35931.fqn:null);
switch (G__35931__$1) {
case "field":
return self__.field;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35927,else__5346__auto__);

}
}));

(wip.demo_custom_types.MyCustomType.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__35932){
var vec__35933 = p__35932;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35933,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35933,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(wip.demo_custom_types.MyCustomType.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#wip.demo-custom-types.MyCustomType{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"field","field",-1302436500),self__.field],null))], null),self__.__extmap));
}));

(wip.demo_custom_types.MyCustomType.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35926){
var self__ = this;
var G__35926__$1 = this;
return (new cljs.core.RecordIter((0),G__35926__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(wip.demo_custom_types.MyCustomType.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(wip.demo_custom_types.MyCustomType.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new wip.demo_custom_types.MyCustomType(self__.field,self__.__meta,self__.__extmap,self__.__hash));
}));

(wip.demo_custom_types.MyCustomType.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(wip.demo_custom_types.MyCustomType.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-514481952 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(wip.demo_custom_types.MyCustomType.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35928,other35929){
var self__ = this;
var this35928__$1 = this;
return (((!((other35929 == null)))) && ((((this35928__$1.constructor === other35929.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35928__$1.field,other35929.field)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35928__$1.__extmap,other35929.__extmap)))))));
}));

(wip.demo_custom_types.MyCustomType.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"field","field",-1302436500),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new wip.demo_custom_types.MyCustomType(self__.field,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(wip.demo_custom_types.MyCustomType.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k35927){
var self__ = this;
var this__5350__auto____$1 = this;
var G__35936 = k35927;
var G__35936__$1 = (((G__35936 instanceof cljs.core.Keyword))?G__35936.fqn:null);
switch (G__35936__$1) {
case "field":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35927);

}
}));

(wip.demo_custom_types.MyCustomType.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__35926){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__35937 = cljs.core.keyword_identical_QMARK_;
var expr__35938 = k__5352__auto__;
if(cljs.core.truth_((pred__35937.cljs$core$IFn$_invoke$arity$2 ? pred__35937.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"field","field",-1302436500),expr__35938) : pred__35937.call(null,new cljs.core.Keyword(null,"field","field",-1302436500),expr__35938)))){
return (new wip.demo_custom_types.MyCustomType(G__35926,self__.__meta,self__.__extmap,null));
} else {
return (new wip.demo_custom_types.MyCustomType(self__.field,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__35926),null));
}
}));

(wip.demo_custom_types.MyCustomType.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"field","field",-1302436500),self__.field,null))], null),self__.__extmap));
}));

(wip.demo_custom_types.MyCustomType.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__35926){
var self__ = this;
var this__5342__auto____$1 = this;
return (new wip.demo_custom_types.MyCustomType(self__.field,G__35926,self__.__extmap,self__.__hash));
}));

(wip.demo_custom_types.MyCustomType.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(wip.demo_custom_types.MyCustomType.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"field","field",338095027,null)], null);
}));

(wip.demo_custom_types.MyCustomType.cljs$lang$type = true);

(wip.demo_custom_types.MyCustomType.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"wip.demo-custom-types/MyCustomType",null,(1),null));
}));

(wip.demo_custom_types.MyCustomType.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"wip.demo-custom-types/MyCustomType");
}));

/**
 * Positional factory function for wip.demo-custom-types/MyCustomType.
 */
wip.demo_custom_types.__GT_MyCustomType = (function wip$demo_custom_types$__GT_MyCustomType(field){
return (new wip.demo_custom_types.MyCustomType(field,null,null,null));
});

/**
 * Factory function for wip.demo-custom-types/MyCustomType, taking a map of keywords to field values.
 */
wip.demo_custom_types.map__GT_MyCustomType = (function wip$demo_custom_types$map__GT_MyCustomType(G__35930){
var extmap__5385__auto__ = (function (){var G__35940 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35930,new cljs.core.Keyword(null,"field","field",-1302436500));
if(cljs.core.record_QMARK_(G__35930)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35940);
} else {
return G__35940;
}
})();
return (new wip.demo_custom_types.MyCustomType(new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(G__35930),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

wip.demo_custom_types.write_handler = cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((function (_){
return "wip.demo-custom-types/MyCustomType";
}),(function (x){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,x);
}));
wip.demo_custom_types.read_handler = cognitect.transit.read_handler(wip.demo_custom_types.map__GT_MyCustomType);
(hyperfiddle.electric.impl.io._STAR_read_handlers_STAR_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.io._STAR_read_handlers_STAR_,"wip.demo-custom-types/MyCustomType",wip.demo_custom_types.read_handler));

//# sourceMappingURL=wip.demo_custom_types.js.map
