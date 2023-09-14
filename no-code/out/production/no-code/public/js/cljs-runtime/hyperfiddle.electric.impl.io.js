goog.provide('hyperfiddle.electric.impl.io');
(com.cognitect.transit.types.UUID.prototype.cljs$core$IUUID$ = cljs.core.PROTOCOL_SENTINEL);
hyperfiddle.electric.impl.io.default_write_handler = cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((function (x){
hyperfiddle.electric.impl.io._last_unserializable_for_repl = x;

console.log("Unserializable reference transfer:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(x)], 0)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));

return "_";
}),(function (x){
return null;
}),(function (_){
return "";
}));
/**
 * Builds a minimal, cljc map/bounded-queue cache.
 *   One slot per key (map).
 *   Reaching `size` pops oldest value (bounded-queue).
 */
hyperfiddle.electric.impl.io.__GT_cache = (function hyperfiddle$electric$impl$io$__GT_cache(size){
var G__29804 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(((size * (2)) + (1)));
var arr29805_30136 = G__29804;
(arr29805_30136[(size * (2))] = cljs.core.identity((0)));

return G__29804;
});
hyperfiddle.electric.impl.io.cache_add = (function hyperfiddle$electric$impl$io$cache_add(cache,k,v){
if(cljs.core.truth_((function (){var i = (0);
while(true){
if((i < (cljs.core.count(cache) - (1)))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,hyperfiddle.electric.impl.array_fields.get(cache,i))){
var arr29808_30137 = cache;
(arr29808_30137[(i + (1))] = cljs.core.identity(v));

return true;
} else {
var G__30138 = (i + (2));
i = G__30138;
continue;
}
} else {
return null;
}
break;
}
})())){
return null;
} else {
var widx = hyperfiddle.electric.impl.array_fields.getswap(cache,(cljs.core.count(cache) - (1)),(function (p1__29806_SHARP_){
return cljs.core.mod((p1__29806_SHARP_ + (2)),(cljs.core.count(cache) - (1)));
}));
var arr29810 = cache;
(arr29810[widx] = cljs.core.identity(k));

return (arr29810[(widx + (1))] = cljs.core.identity(v));
}
});
hyperfiddle.electric.impl.io.cache_get = (function hyperfiddle$electric$impl$io$cache_get(cache,k){
var i = (0);
while(true){
if((i < (cljs.core.count(cache) - (1)))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,hyperfiddle.electric.impl.array_fields.get(cache,i))){
return hyperfiddle.electric.impl.array_fields.get(cache,(i + (1)));
} else {
var G__30139 = (i + (2));
i = G__30139;
continue;
}
} else {
return null;
}
break;
}
});
hyperfiddle.electric.impl.io.cache__GT_map = (function hyperfiddle$electric$impl$io$cache__GT_map(cache){
var i = (0);
var ac = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < (cljs.core.count(cache) - (1)))){
var G__30140 = (i + (2));
var G__30141 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ac,hyperfiddle.electric.impl.array_fields.get(cache,i),hyperfiddle.electric.impl.array_fields.get(cache,(i + (1))));
i = G__30140;
ac = G__30141;
continue;
} else {
return cljs.core.persistent_BANG_(ac);
}
break;
}
});
hyperfiddle.electric.impl.io._BANG_ex_cache = hyperfiddle.electric.impl.io.__GT_cache((16));
hyperfiddle.electric.impl.io.save_original_ex_BANG_ = (function hyperfiddle$electric$impl$io$save_original_ex_BANG_(fi){
var id = hyperfiddle.electric.debug.ex_id(fi);
var temp__5808__auto___30142 = cljs.core.ex_cause(fi);
if((temp__5808__auto___30142 == null)){
} else {
var cause_30143 = temp__5808__auto___30142;
if((cause_30143 instanceof hyperfiddle.electric.FailureInfo)){
} else {
hyperfiddle.electric.impl.io.cache_add(hyperfiddle.electric.impl.io._BANG_ex_cache,id,cause_30143);
}
}

return id;
});
hyperfiddle.electric.impl.io.get_original_ex = (function hyperfiddle$electric$impl$io$get_original_ex(id){
return hyperfiddle.electric.impl.io.cache_get(hyperfiddle.electric.impl.io._BANG_ex_cache,id);
});
hyperfiddle.electric.impl.io._STAR_write_handlers_STAR_ = null;
hyperfiddle.electric.impl.io.failure_writer = cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((function (_){
return "failure";
}),(function (x){
var err = x.error;
if((err instanceof missionary.Cancelled)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cancelled","cancelled",488726224)], null);
} else {
if((err instanceof hyperfiddle.electric.Pending)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pending","pending",-220036727)], null);
} else {
if((err instanceof hyperfiddle.electric.Remote)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote","remote",-1593576576),hyperfiddle.electric.debug.serializable(cljs.core.ex_data(err))], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exception","exception",-335277064),cljs.core.ex_message(err),hyperfiddle.electric.debug.serializable(cljs.core.ex_data(err)),hyperfiddle.electric.impl.io.save_original_ex_BANG_(err)], null);

}
}
}
}));
hyperfiddle.electric.impl.io.write_opts = (function hyperfiddle$electric$impl$io$write_opts(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handlers","handlers",79528781),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hyperfiddle.electric.impl.io._STAR_write_handlers_STAR_,cljs.core.PersistentArrayMap.createAsIfByAssoc([hyperfiddle.electric.Failure,hyperfiddle.electric.impl.io.failure_writer,new cljs.core.Keyword(null,"default","default",-1987822328),hyperfiddle.electric.impl.io.default_write_handler])], 0)),new cljs.core.Keyword(null,"default-handler","default-handler",-1028159207),hyperfiddle.electric.impl.io.default_write_handler], null);
});
hyperfiddle.electric.impl.io._STAR_read_handlers_STAR_ = null;
hyperfiddle.electric.impl.io.failure_reader = cognitect.transit.read_handler((function (p__29825){
var vec__29826 = p__29825;
var seq__29827 = cljs.core.seq(vec__29826);
var first__29828 = cljs.core.first(seq__29827);
var seq__29827__$1 = cljs.core.next(seq__29827);
var tag = first__29828;
var args = seq__29827__$1;
var G__29829 = tag;
var G__29829__$1 = (((G__29829 instanceof cljs.core.Keyword))?G__29829.fqn:null);
switch (G__29829__$1) {
case "exception":
var vec__29830 = args;
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29830,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29830,(1),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29830,(2),null);
return (new hyperfiddle.electric.Failure(hyperfiddle.electric.debug.ex_info_STAR_.cljs$core$IFn$_invoke$arity$4(message,data,id,null)));

break;
case "remote":
var vec__29833 = args;
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29833,(0),null);
return (new hyperfiddle.electric.Failure(hyperfiddle.electric.debug.ex_info_STAR_.cljs$core$IFn$_invoke$arity$2("Remote error",(function (){var or__5045__auto__ = data;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})())));

break;
case "pending":
return (new hyperfiddle.electric.Failure((new hyperfiddle.electric.Pending())));

break;
case "cancelled":
return (new hyperfiddle.electric.Failure((new missionary.Cancelled())));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29829__$1)].join('')));

}
}));
hyperfiddle.electric.impl.io.read_opts = (function hyperfiddle$electric$impl$io$read_opts(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hyperfiddle.electric.impl.io._STAR_read_handlers_STAR_,new cljs.core.PersistentArrayMap(null, 1, ["failure",hyperfiddle.electric.impl.io.failure_reader], null)], 0))], null);
});
hyperfiddle.electric.impl.io.set_ints = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce_kv,(function (r,i,n){
var offset = (i << (2));
var G__29837 = r;
G__29837.setInt32(offset,n);

return G__29837;
}));
/**
 * Encode a control frame to a binary segment.
 */
hyperfiddle.electric.impl.io.encode_numbers = (function hyperfiddle$electric$impl$io$encode_numbers(xs){
var required = (cljs.core.count(xs) << (2));
var G__29838 = (new ArrayBuffer(required));
hyperfiddle.electric.impl.io.set_ints((new DataView(G__29838)),xs);

return G__29838;
});
/**
 * Decode a control frame from a binary segment.
 */
hyperfiddle.electric.impl.io.decode_numbers = (function hyperfiddle$electric$impl$io$decode_numbers(b){
return cljs.core.vec((function (){
if((typeof hyperfiddle !== 'undefined') && (typeof hyperfiddle.electric !== 'undefined') && (typeof hyperfiddle.electric.impl !== 'undefined') && (typeof hyperfiddle.electric.impl.io !== 'undefined') && (typeof hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io29839 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io29839 = (function (b,meta29840){
this.b = b;
this.meta29840 = meta29840;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io29839.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29841,meta29840__$1){
var self__ = this;
var _29841__$1 = this;
return (new hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io29839(self__.b,meta29840__$1));
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io29839.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29841){
var self__ = this;
var _29841__$1 = this;
return self__.meta29840;
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io29839.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,rf,r){
var self__ = this;
var ___$1 = this;
var l = self__.b.byteLength;
var v = (new DataView(self__.b));
var r__$1 = r;
var i = (0);
while(true){
if((i < l)){
var G__30146 = (function (){var G__29844 = r__$1;
var G__29845 = v.getInt32(i);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__29844,G__29845) : rf.call(null,G__29844,G__29845));
})();
var G__30147 = (i + (4));
r__$1 = G__30146;
i = G__30147;
continue;
} else {
return r__$1;
}
break;
}
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io29839.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"meta29840","meta29840",178458137,null)], null);
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io29839.cljs$lang$type = true);

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io29839.cljs$lang$ctorStr = "hyperfiddle.electric.impl.io/t_hyperfiddle$electric$impl$io29839");

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io29839.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.io/t_hyperfiddle$electric$impl$io29839");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.io/t_hyperfiddle$electric$impl$io29839.
 */
hyperfiddle.electric.impl.io.__GT_t_hyperfiddle$electric$impl$io29839 = (function hyperfiddle$electric$impl$io$decode_numbers_$___GT_t_hyperfiddle$electric$impl$io29839(b__$1,meta29840){
return (new hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io29839(b__$1,meta29840));
});

}

return (new hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io29839(b,cljs.core.PersistentArrayMap.EMPTY));
})()
);
});
var _BANG_cache_30148 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write-handlers","write-handlers",-2097288911),hyperfiddle.electric.impl.io._STAR_write_handlers_STAR_,new cljs.core.Keyword(null,"writer","writer",-277568236),null], null));
hyperfiddle.electric.impl.io.transit_writer = (function hyperfiddle$electric$impl$io$transit_writer(){
return new cljs.core.Keyword(null,"writer","writer",-277568236).cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_cache_30148,(function (p__29851){
var map__29852 = p__29851;
var map__29852__$1 = cljs.core.__destructure_map(map__29852);
var cache = map__29852__$1;
var write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29852__$1,new cljs.core.Keyword(null,"write-handlers","write-handlers",-2097288911));
var writer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29852__$1,new cljs.core.Keyword(null,"writer","writer",-277568236));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(write_handlers,hyperfiddle.electric.impl.io._STAR_write_handlers_STAR_)){
if(cljs.core.truth_(writer)){
return cache;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache,new cljs.core.Keyword(null,"writer","writer",-277568236),cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"json","json",1279968570),hyperfiddle.electric.impl.io.write_opts()));
}
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write-handlers","write-handlers",-2097288911),hyperfiddle.electric.impl.io._STAR_write_handlers_STAR_,new cljs.core.Keyword(null,"writer","writer",-277568236),cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"json","json",1279968570),hyperfiddle.electric.impl.io.write_opts())], null);
}
})));
});
/**
 * Encode a data frame to transit json
 */
hyperfiddle.electric.impl.io.encode = (function hyperfiddle$electric$impl$io$encode(x){
return cognitect.transit.write(hyperfiddle.electric.impl.io.transit_writer(),x);
});
var _BANG_cache_30149 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-handlers","read-handlers",2109459315),hyperfiddle.electric.impl.io._STAR_read_handlers_STAR_,new cljs.core.Keyword(null,"reader","reader",169660853),null], null));
hyperfiddle.electric.impl.io.transit_reader = (function hyperfiddle$electric$impl$io$transit_reader(){
return new cljs.core.Keyword(null,"reader","reader",169660853).cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_cache_30149,(function (p__29854){
var map__29855 = p__29854;
var map__29855__$1 = cljs.core.__destructure_map(map__29855);
var cache = map__29855__$1;
var read_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29855__$1,new cljs.core.Keyword(null,"read-handlers","read-handlers",2109459315));
var reader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29855__$1,new cljs.core.Keyword(null,"reader","reader",169660853));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(read_handlers,hyperfiddle.electric.impl.io._STAR_read_handlers_STAR_)){
if(cljs.core.truth_(reader)){
return cache;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache,new cljs.core.Keyword(null,"reader","reader",169660853),cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"json","json",1279968570),hyperfiddle.electric.impl.io.read_opts()));
}
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-handlers","read-handlers",2109459315),hyperfiddle.electric.impl.io._STAR_read_handlers_STAR_,new cljs.core.Keyword(null,"reader","reader",169660853),cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"json","json",1279968570),hyperfiddle.electric.impl.io.read_opts())], null);
}
})));
});
/**
 * Decode a data frame from transit json
 */
hyperfiddle.electric.impl.io.decode = (function hyperfiddle$electric$impl$io$decode(s){
return cognitect.transit.read(hyperfiddle.electric.impl.io.transit_reader(),s);
});
hyperfiddle.electric.impl.io.decode_str = (function hyperfiddle$electric$impl$io$decode_str(x){
try{var G__29861 = hyperfiddle.electric.impl.io.decode(x);
console.debug("\uD83D\uDD3D",G__29861);

return G__29861;
}catch (e29860){var t = e29860;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("Failed to decode",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),x], null),t);
}});
hyperfiddle.electric.impl.io.chunk_size = ((65536) >> (2));
hyperfiddle.electric.impl.io.message_reader = (function hyperfiddle$electric$impl$io$message_reader(_QMARK_read){

return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr29863_block_8 = (function hyperfiddle$electric$impl$io$message_reader_$_cr29863_block_8(cr29863_state){
try{var cr29863_place_9 = (cr29863_state[(1)]);
var cr29863_place_10 = (cr29863_state[(2)]);
var cr29863_place_8 = (cr29863_state[(4)]);
var cr29863_place_28 = (cr29863_state[(5)]);
var cr29863_place_35 = (function (){var G__29926 = cr29863_place_10;
var G__29927 = cr29863_place_28;
var fexpr__29925 = cr29863_place_9;
return (fexpr__29925.cljs$core$IFn$_invoke$arity$2 ? fexpr__29925.cljs$core$IFn$_invoke$arity$2(G__29926,G__29927) : fexpr__29925.call(null,G__29926,G__29927));
})();
var cr29863_place_36 = (function (){var G__29929 = cr29863_place_35;
var fexpr__29928 = cr29863_place_8;
return (fexpr__29928.cljs$core$IFn$_invoke$arity$1 ? fexpr__29928.cljs$core$IFn$_invoke$arity$1(G__29929) : fexpr__29928.call(null,G__29929));
})();
(cr29863_state[(0)] = cr29863_block_10);

(cr29863_state[(1)] = null);

(cr29863_state[(2)] = null);

(cr29863_state[(4)] = null);

(cr29863_state[(5)] = null);

(cr29863_state[(3)] = cr29863_place_36);

return cr29863_state;
}catch (e29924){var cr29863_exception = e29924;
(cr29863_state[(0)] = null);

(cr29863_state[(1)] = null);

(cr29863_state[(2)] = null);

(cr29863_state[(3)] = null);

(cr29863_state[(4)] = null);

(cr29863_state[(5)] = null);

throw cr29863_exception;
}});
var cr29863_block_4 = (function hyperfiddle$electric$impl$io$message_reader_$_cr29863_block_4(cr29863_state){
try{var cr29863_place_11 = (cr29863_state[(5)]);
var cr29863_place_14 = (cr29863_state[(6)]);
var cr29863_place_15 = hyperfiddle.electric.impl.io.decode_numbers;
var cr29863_place_16 = cr29863_place_11;
var cr29863_place_17 = (function (){var G__29932 = cr29863_place_16;
var fexpr__29931 = cr29863_place_15;
return (fexpr__29931.cljs$core$IFn$_invoke$arity$1 ? fexpr__29931.cljs$core$IFn$_invoke$arity$1(G__29932) : fexpr__29931.call(null,G__29932));
})();
var cr29863_place_18 = cljs.core.reduce;
var cr29863_place_19 = cljs.core.conj_BANG_;
var cr29863_place_20 = cr29863_place_14;
var cr29863_place_21 = cr29863_place_17;
var cr29863_place_22 = (function (){var G__29934 = cr29863_place_19;
var G__29935 = cr29863_place_20;
var G__29936 = cr29863_place_21;
var fexpr__29933 = cr29863_place_18;
return (fexpr__29933.cljs$core$IFn$_invoke$arity$3 ? fexpr__29933.cljs$core$IFn$_invoke$arity$3(G__29934,G__29935,G__29936) : fexpr__29933.call(null,G__29934,G__29935,G__29936));
})();
var cr29863_place_23 = cljs.core.count;
var cr29863_place_24 = cr29863_place_17;
var cr29863_place_25 = (function (){var G__29938 = cr29863_place_24;
var fexpr__29937 = cr29863_place_23;
return (fexpr__29937.cljs$core$IFn$_invoke$arity$1 ? fexpr__29937.cljs$core$IFn$_invoke$arity$1(G__29938) : fexpr__29937.call(null,G__29938));
})();
var cr29863_place_26 = hyperfiddle.electric.impl.io.chunk_size;
var cr29863_place_27 = (cr29863_place_25 < cr29863_place_26);
var cr29863_place_28 = null;
if(cr29863_place_27){
(cr29863_state[(0)] = cr29863_block_7);

(cr29863_state[(5)] = null);

(cr29863_state[(6)] = null);

(cr29863_state[(5)] = cr29863_place_28);

(cr29863_state[(7)] = cr29863_place_22);

return cr29863_state;
} else {
(cr29863_state[(0)] = cr29863_block_5);

(cr29863_state[(7)] = cr29863_place_22);

return cr29863_state;
}
}catch (e29930){var cr29863_exception = e29930;
(cr29863_state[(0)] = null);

(cr29863_state[(1)] = null);

(cr29863_state[(2)] = null);

(cr29863_state[(3)] = null);

(cr29863_state[(4)] = null);

(cr29863_state[(5)] = null);

(cr29863_state[(6)] = null);

throw cr29863_exception;
}});
var cr29863_block_2 = (function hyperfiddle$electric$impl$io$message_reader_$_cr29863_block_2(cr29863_state){
try{var cr29863_place_4 = missionary.core.unpark();
var cr29863_place_5 = cr29863_place_4;
var cr29863_place_6 = typeof cr29863_place_5 === 'string';
var cr29863_place_7 = null;
if(cr29863_place_6){
(cr29863_state[(0)] = cr29863_block_9);

(cr29863_state[(2)] = cr29863_place_4);

return cr29863_state;
} else {
(cr29863_state[(0)] = cr29863_block_3);

(cr29863_state[(2)] = cr29863_place_4);

(cr29863_state[(3)] = cr29863_place_7);

return cr29863_state;
}
}catch (e29939){var cr29863_exception = e29939;
(cr29863_state[(0)] = null);

(cr29863_state[(1)] = null);

throw cr29863_exception;
}});
var cr29863_block_0 = (function hyperfiddle$electric$impl$io$message_reader_$_cr29863_block_0(cr29863_state){
try{var cr29863_place_0 = cljs.core.transient$;
var cr29863_place_1 = cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IVector], null));
var cr29863_place_2 = (function (){var G__29945 = cr29863_place_1;
var fexpr__29944 = cr29863_place_0;
return (fexpr__29944.cljs$core$IFn$_invoke$arity$1 ? fexpr__29944.cljs$core$IFn$_invoke$arity$1(G__29945) : fexpr__29944.call(null,G__29945));
})();
(cr29863_state[(0)] = cr29863_block_1);

(cr29863_state[(1)] = cr29863_place_2);

return cr29863_state;
}catch (e29943){var cr29863_exception = e29943;
(cr29863_state[(0)] = null);

throw cr29863_exception;
}});
var cr29863_block_5 = (function hyperfiddle$electric$impl$io$message_reader_$_cr29863_block_5(cr29863_state){
try{var cr29863_place_29 = _QMARK_read;
(cr29863_state[(0)] = cr29863_block_6);

return missionary.core.park(cr29863_place_29);
}catch (e29947){var cr29863_exception = e29947;
(cr29863_state[(0)] = null);

(cr29863_state[(1)] = null);

(cr29863_state[(2)] = null);

(cr29863_state[(3)] = null);

(cr29863_state[(4)] = null);

(cr29863_state[(5)] = null);

(cr29863_state[(6)] = null);

(cr29863_state[(7)] = null);

throw cr29863_exception;
}});
var cr29863_block_3 = (function hyperfiddle$electric$impl$io$message_reader_$_cr29863_block_3(cr29863_state){
try{var cr29863_place_4 = (cr29863_state[(2)]);
var cr29863_place_2 = (cr29863_state[(1)]);
var cr29863_place_8 = cljs.core.persistent_BANG_;
var cr29863_place_9 = cljs.core.conj_BANG_;
var cr29863_place_10 = cr29863_place_2;
var cr29863_place_11 = cr29863_place_4;
var cr29863_place_12 = cljs.core.transient$;
var cr29863_place_13 = cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IVector], null));
var cr29863_place_14 = (function (){var G__29951 = cr29863_place_13;
var fexpr__29950 = cr29863_place_12;
return (fexpr__29950.cljs$core$IFn$_invoke$arity$1 ? fexpr__29950.cljs$core$IFn$_invoke$arity$1(G__29951) : fexpr__29950.call(null,G__29951));
})();
(cr29863_state[(0)] = cr29863_block_4);

(cr29863_state[(2)] = null);

(cr29863_state[(1)] = null);

(cr29863_state[(4)] = cr29863_place_8);

(cr29863_state[(1)] = cr29863_place_9);

(cr29863_state[(2)] = cr29863_place_10);

(cr29863_state[(5)] = cr29863_place_11);

(cr29863_state[(6)] = cr29863_place_14);

return cr29863_state;
}catch (e29948){var cr29863_exception = e29948;
(cr29863_state[(0)] = null);

(cr29863_state[(2)] = null);

(cr29863_state[(1)] = null);

(cr29863_state[(3)] = null);

throw cr29863_exception;
}});
var cr29863_block_6 = (function hyperfiddle$electric$impl$io$message_reader_$_cr29863_block_6(cr29863_state){
try{var cr29863_place_22 = (cr29863_state[(7)]);
var cr29863_place_30 = missionary.core.unpark();
var cr29863_place_31 = cr29863_place_22;
(cr29863_state[(0)] = cr29863_block_4);

(cr29863_state[(7)] = null);

(cr29863_state[(5)] = cr29863_place_30);

(cr29863_state[(6)] = cr29863_place_31);

return cr29863_state;
}catch (e29952){var cr29863_exception = e29952;
(cr29863_state[(0)] = null);

(cr29863_state[(1)] = null);

(cr29863_state[(2)] = null);

(cr29863_state[(3)] = null);

(cr29863_state[(4)] = null);

(cr29863_state[(5)] = null);

(cr29863_state[(6)] = null);

(cr29863_state[(7)] = null);

throw cr29863_exception;
}});
var cr29863_block_7 = (function hyperfiddle$electric$impl$io$message_reader_$_cr29863_block_7(cr29863_state){
try{var cr29863_place_22 = (cr29863_state[(7)]);
var cr29863_place_32 = cljs.core.persistent_BANG_;
var cr29863_place_33 = cr29863_place_22;
var cr29863_place_34 = (function (){var G__29956 = cr29863_place_33;
var fexpr__29955 = cr29863_place_32;
return (fexpr__29955.cljs$core$IFn$_invoke$arity$1 ? fexpr__29955.cljs$core$IFn$_invoke$arity$1(G__29956) : fexpr__29955.call(null,G__29956));
})();
(cr29863_state[(0)] = cr29863_block_8);

(cr29863_state[(7)] = null);

(cr29863_state[(5)] = cr29863_place_34);

return cr29863_state;
}catch (e29954){var cr29863_exception = e29954;
(cr29863_state[(0)] = null);

(cr29863_state[(1)] = null);

(cr29863_state[(2)] = null);

(cr29863_state[(3)] = null);

(cr29863_state[(4)] = null);

(cr29863_state[(5)] = null);

(cr29863_state[(7)] = null);

throw cr29863_exception;
}});
var cr29863_block_1 = (function hyperfiddle$electric$impl$io$message_reader_$_cr29863_block_1(cr29863_state){
try{var cr29863_place_3 = _QMARK_read;
(cr29863_state[(0)] = cr29863_block_2);

return missionary.core.park(cr29863_place_3);
}catch (e29957){var cr29863_exception = e29957;
(cr29863_state[(0)] = null);

(cr29863_state[(1)] = null);

throw cr29863_exception;
}});
var cr29863_block_9 = (function hyperfiddle$electric$impl$io$message_reader_$_cr29863_block_9(cr29863_state){
try{var cr29863_place_4 = (cr29863_state[(2)]);
var cr29863_place_2 = (cr29863_state[(1)]);
var cr29863_place_37 = cljs.core.conj_BANG_;
var cr29863_place_38 = cr29863_place_2;
var cr29863_place_39 = hyperfiddle.electric.impl.io.decode_str;
var cr29863_place_40 = cr29863_place_4;
var cr29863_place_41 = (function (){var G__29960 = cr29863_place_40;
var fexpr__29959 = cr29863_place_39;
return (fexpr__29959.cljs$core$IFn$_invoke$arity$1 ? fexpr__29959.cljs$core$IFn$_invoke$arity$1(G__29960) : fexpr__29959.call(null,G__29960));
})();
var cr29863_place_42 = (function (){var G__29962 = cr29863_place_38;
var G__29963 = cr29863_place_41;
var fexpr__29961 = cr29863_place_37;
return (fexpr__29961.cljs$core$IFn$_invoke$arity$2 ? fexpr__29961.cljs$core$IFn$_invoke$arity$2(G__29962,G__29963) : fexpr__29961.call(null,G__29962,G__29963));
})();
(cr29863_state[(0)] = cr29863_block_1);

(cr29863_state[(2)] = null);

(cr29863_state[(1)] = cr29863_place_42);

return cr29863_state;
}catch (e29958){var cr29863_exception = e29958;
(cr29863_state[(0)] = null);

(cr29863_state[(2)] = null);

(cr29863_state[(1)] = null);

throw cr29863_exception;
}});
var cr29863_block_10 = (function hyperfiddle$electric$impl$io$message_reader_$_cr29863_block_10(cr29863_state){
try{var cr29863_place_7 = (cr29863_state[(3)]);
(cr29863_state[(0)] = null);

(cr29863_state[(3)] = null);

return cr29863_place_7;
}catch (e29964){var cr29863_exception = e29964;
(cr29863_state[(0)] = null);

(cr29863_state[(3)] = null);

throw cr29863_exception;
}});
return cloroutine.impl.coroutine((function (){var G__29965 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((8));
(G__29965[(0)] = cr29863_block_0);

return G__29965;
})());
})(),missionary.core.sp_run);
});
/**
 * Returns a function taking an Electric message and returning a task writing it as individual frames using provided
 * function. Might cut a message into chunks if its size would exceed the server payload limit.
 * An empty message (0b) is written to notify the end of frame.
 */
hyperfiddle.electric.impl.io.message_writer = (function hyperfiddle$electric$impl$io$message_writer(write){
return (function (p1__29966_SHARP_){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr29967_block_7 = (function hyperfiddle$electric$impl$io$message_writer_$_cr29967_block_7(cr29967_state){
try{var cr29967_place_46 = cljs.core.peek;
var cr29967_place_47 = p1__29966_SHARP_;
var cr29967_place_48 = (function (){var G__30062 = cr29967_place_47;
var fexpr__30061 = cr29967_place_46;
return (fexpr__30061.cljs$core$IFn$_invoke$arity$1 ? fexpr__30061.cljs$core$IFn$_invoke$arity$1(G__30062) : fexpr__30061.call(null,G__30062));
})();
(cr29967_state[(0)] = cr29967_block_8);

(cr29967_state[(2)] = cr29967_place_48);

return cr29967_state;
}catch (e30060){var cr29967_exception = e30060;
(cr29967_state[(0)] = null);

(cr29967_state[(1)] = null);

throw cr29967_exception;
}});
var cr29967_block_9 = (function hyperfiddle$electric$impl$io$message_writer_$_cr29967_block_9(cr29967_state){
try{var cr29967_place_48 = (cr29967_state[(2)]);
var cr29967_place_55 = hyperfiddle.electric.impl.io.encode_numbers;
var cr29967_place_56 = cr29967_place_48;
var cr29967_place_57 = (function (){var G__30065 = cr29967_place_56;
var fexpr__30064 = cr29967_place_55;
return (fexpr__30064.cljs$core$IFn$_invoke$arity$1 ? fexpr__30064.cljs$core$IFn$_invoke$arity$1(G__30065) : fexpr__30064.call(null,G__30065));
})();
var cr29967_place_58 = write;
var cr29967_place_59 = cr29967_place_57;
var cr29967_place_60 = (function (){var G__30067 = cr29967_place_59;
var fexpr__30066 = cr29967_place_58;
return (fexpr__30066.cljs$core$IFn$_invoke$arity$1 ? fexpr__30066.cljs$core$IFn$_invoke$arity$1(G__30067) : fexpr__30066.call(null,G__30067));
})();
(cr29967_state[(0)] = cr29967_block_10);

(cr29967_state[(2)] = null);

return missionary.core.park(cr29967_place_60);
}catch (e30063){var cr29967_exception = e30063;
(cr29967_state[(0)] = null);

(cr29967_state[(1)] = null);

(cr29967_state[(3)] = null);

(cr29967_state[(2)] = null);

throw cr29967_exception;
}});
var cr29967_block_14 = (function hyperfiddle$electric$impl$io$message_writer_$_cr29967_block_14(cr29967_state){
try{var cr29967_place_9 = (cr29967_state[(1)]);
(cr29967_state[(0)] = null);

(cr29967_state[(1)] = null);

return cr29967_place_9;
}catch (e30069){var cr29967_exception = e30069;
(cr29967_state[(0)] = null);

(cr29967_state[(1)] = null);

throw cr29967_exception;
}});
var cr29967_block_2 = (function hyperfiddle$electric$impl$io$message_writer_$_cr29967_block_2(cr29967_state){
try{var cr29967_place_5 = (cr29967_state[(2)]);
var cr29967_place_10 = cr29967_place_5;
var cr29967_place_11 = cljs.core.seq;
var cr29967_place_12 = cr29967_place_10;
var cr29967_place_13 = (function (){var G__30073 = cr29967_place_12;
var fexpr__30072 = cr29967_place_11;
return (fexpr__30072.cljs$core$IFn$_invoke$arity$1 ? fexpr__30072.cljs$core$IFn$_invoke$arity$1(G__30073) : fexpr__30072.call(null,G__30073));
})();
var cr29967_place_14 = cljs.core.first;
var cr29967_place_15 = cr29967_place_13;
var cr29967_place_16 = (function (){var G__30075 = cr29967_place_15;
var fexpr__30074 = cr29967_place_14;
return (fexpr__30074.cljs$core$IFn$_invoke$arity$1 ? fexpr__30074.cljs$core$IFn$_invoke$arity$1(G__30075) : fexpr__30074.call(null,G__30075));
})();
var cr29967_place_17 = cljs.core.next;
var cr29967_place_18 = cr29967_place_13;
var cr29967_place_19 = (function (){var G__30081 = cr29967_place_18;
var fexpr__30080 = cr29967_place_17;
return (fexpr__30080.cljs$core$IFn$_invoke$arity$1 ? fexpr__30080.cljs$core$IFn$_invoke$arity$1(G__30081) : fexpr__30080.call(null,G__30081));
})();
var cr29967_place_20 = cr29967_place_16;
var cr29967_place_21 = cr29967_place_19;
var cr29967_place_22 = console.debug;
var cr29967_place_23 = "\uD83D\uDD3C";
var cr29967_place_24 = cr29967_place_20;
var cr29967_place_25 = (function (){var G__30083 = cr29967_place_23;
var G__30084 = cr29967_place_24;
var fexpr__30082 = cr29967_place_22;
return (fexpr__30082.cljs$core$IFn$_invoke$arity$2 ? fexpr__30082.cljs$core$IFn$_invoke$arity$2(G__30083,G__30084) : fexpr__30082.call(null,G__30083,G__30084));
})();
var cr29967_place_26 = null;
var cr29967_place_27 = false;
(cr29967_state[(0)] = cr29967_block_3);

(cr29967_state[(2)] = null);

(cr29967_state[(2)] = cr29967_place_20);

(cr29967_state[(3)] = cr29967_place_26);

(cr29967_state[(4)] = cr29967_place_21);

(cr29967_state[(5)] = cr29967_place_27);

return cr29967_state;
}catch (e30070){var cr29967_exception = e30070;
(cr29967_state[(0)] = null);

(cr29967_state[(2)] = null);

(cr29967_state[(1)] = null);

throw cr29967_exception;
}});
var cr29967_block_3 = (function hyperfiddle$electric$impl$io$message_writer_$_cr29967_block_3(cr29967_state){
try{var cr29967_place_20 = (cr29967_state[(2)]);
var cr29967_place_28 = hyperfiddle.electric.impl.io.encode;
var cr29967_place_29 = cr29967_place_20;
var cr29967_place_30 = (function (){var G__30087 = cr29967_place_29;
var fexpr__30086 = cr29967_place_28;
return (fexpr__30086.cljs$core$IFn$_invoke$arity$1 ? fexpr__30086.cljs$core$IFn$_invoke$arity$1(G__30087) : fexpr__30086.call(null,G__30087));
})();
(cr29967_state[(0)] = cr29967_block_5);

(cr29967_state[(2)] = null);

(cr29967_state[(3)] = cr29967_place_30);

return cr29967_state;
}catch (e30085){var cr29967_exception = e30085;
(cr29967_state[(0)] = cr29967_block_4);

(cr29967_state[(3)] = cr29967_exception);

return cr29967_state;
}});
var cr29967_block_10 = (function hyperfiddle$electric$impl$io$message_writer_$_cr29967_block_10(cr29967_state){
try{var cr29967_place_61 = missionary.core.unpark();
(cr29967_state[(0)] = cr29967_block_13);

(cr29967_state[(3)] = cr29967_place_61);

return cr29967_state;
}catch (e30089){var cr29967_exception = e30089;
(cr29967_state[(0)] = null);

(cr29967_state[(1)] = null);

(cr29967_state[(3)] = null);

throw cr29967_exception;
}});
var cr29967_block_4 = (function hyperfiddle$electric$impl$io$message_writer_$_cr29967_block_4(cr29967_state){
try{var cr29967_place_20 = (cr29967_state[(2)]);
var cr29967_place_26 = (cr29967_state[(3)]);
var cr29967_place_31 = cr29967_place_26;
var cr29967_place_32 = cljs.core.ex_info;
var cr29967_place_33 = "Failed to encode";
var cr29967_place_34 = new cljs.core.Keyword(null,"value","value",305978217);
var cr29967_place_35 = cr29967_place_20;
var cr29967_place_36 = cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([cr29967_place_34,cr29967_place_35]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr29967_place_37 = cr29967_place_31;
var cr29967_place_38 = (function (){var G__30092 = cr29967_place_33;
var G__30093 = cr29967_place_36;
var G__30094 = cr29967_place_37;
var fexpr__30091 = cr29967_place_32;
return (fexpr__30091.cljs$core$IFn$_invoke$arity$3 ? fexpr__30091.cljs$core$IFn$_invoke$arity$3(G__30092,G__30093,G__30094) : fexpr__30091.call(null,G__30092,G__30093,G__30094));
})();
var cr29967_place_39 = (function(){throw cr29967_place_38})();
(cr29967_state[(0)] = null);

(cr29967_state[(2)] = null);

(cr29967_state[(1)] = null);

(cr29967_state[(3)] = null);

(cr29967_state[(4)] = null);

(cr29967_state[(5)] = null);

return null;
}catch (e30090){var cr29967_exception = e30090;
(cr29967_state[(0)] = cr29967_block_5);

(cr29967_state[(2)] = null);

(cr29967_state[(3)] = cr29967_exception);

(cr29967_state[(5)] = true);

return cr29967_state;
}});
var cr29967_block_5 = (function hyperfiddle$electric$impl$io$message_writer_$_cr29967_block_5(cr29967_state){
try{var cr29967_place_26 = (cr29967_state[(3)]);
var cr29967_place_27 = (cr29967_state[(5)]);
var cr29967_place_40 = (cljs.core.truth_(cr29967_place_27)?(function(){throw cr29967_place_26})():cr29967_place_26);
var cr29967_place_41 = write;
var cr29967_place_42 = cr29967_place_40;
var cr29967_place_43 = (function (){var G__30097 = cr29967_place_42;
var fexpr__30096 = cr29967_place_41;
return (fexpr__30096.cljs$core$IFn$_invoke$arity$1 ? fexpr__30096.cljs$core$IFn$_invoke$arity$1(G__30097) : fexpr__30096.call(null,G__30097));
})();
(cr29967_state[(0)] = cr29967_block_6);

(cr29967_state[(3)] = null);

(cr29967_state[(5)] = null);

return missionary.core.park(cr29967_place_43);
}catch (e30095){var cr29967_exception = e30095;
(cr29967_state[(0)] = null);

(cr29967_state[(1)] = null);

(cr29967_state[(3)] = null);

(cr29967_state[(4)] = null);

(cr29967_state[(5)] = null);

throw cr29967_exception;
}});
var cr29967_block_11 = (function hyperfiddle$electric$impl$io$message_writer_$_cr29967_block_11(cr29967_state){
try{var cr29967_place_48 = (cr29967_state[(2)]);
var cr29967_place_62 = hyperfiddle.electric.impl.io.encode_numbers;
var cr29967_place_63 = cljs.core.subvec;
var cr29967_place_64 = cr29967_place_48;
var cr29967_place_65 = (0);
var cr29967_place_66 = hyperfiddle.electric.impl.io.chunk_size;
var cr29967_place_67 = (function (){var G__30100 = cr29967_place_64;
var G__30101 = cr29967_place_65;
var G__30102 = cr29967_place_66;
var fexpr__30099 = cr29967_place_63;
return (fexpr__30099.cljs$core$IFn$_invoke$arity$3 ? fexpr__30099.cljs$core$IFn$_invoke$arity$3(G__30100,G__30101,G__30102) : fexpr__30099.call(null,G__30100,G__30101,G__30102));
})();
var cr29967_place_68 = (function (){var G__30104 = cr29967_place_67;
var fexpr__30103 = cr29967_place_62;
return (fexpr__30103.cljs$core$IFn$_invoke$arity$1 ? fexpr__30103.cljs$core$IFn$_invoke$arity$1(G__30104) : fexpr__30103.call(null,G__30104));
})();
var cr29967_place_69 = write;
var cr29967_place_70 = cr29967_place_68;
var cr29967_place_71 = (function (){var G__30106 = cr29967_place_70;
var fexpr__30105 = cr29967_place_69;
return (fexpr__30105.cljs$core$IFn$_invoke$arity$1 ? fexpr__30105.cljs$core$IFn$_invoke$arity$1(G__30106) : fexpr__30105.call(null,G__30106));
})();
(cr29967_state[(0)] = cr29967_block_12);

return missionary.core.park(cr29967_place_71);
}catch (e30098){var cr29967_exception = e30098;
(cr29967_state[(0)] = null);

(cr29967_state[(1)] = null);

(cr29967_state[(2)] = null);

throw cr29967_exception;
}});
var cr29967_block_12 = (function hyperfiddle$electric$impl$io$message_writer_$_cr29967_block_12(cr29967_state){
try{var cr29967_place_48 = (cr29967_state[(2)]);
var cr29967_place_72 = missionary.core.unpark();
var cr29967_place_73 = cljs.core.subvec;
var cr29967_place_74 = cr29967_place_48;
var cr29967_place_75 = hyperfiddle.electric.impl.io.chunk_size;
var cr29967_place_76 = (function (){var G__30109 = cr29967_place_74;
var G__30110 = cr29967_place_75;
var fexpr__30108 = cr29967_place_73;
return (fexpr__30108.cljs$core$IFn$_invoke$arity$2 ? fexpr__30108.cljs$core$IFn$_invoke$arity$2(G__30109,G__30110) : fexpr__30108.call(null,G__30109,G__30110));
})();
(cr29967_state[(0)] = cr29967_block_8);

(cr29967_state[(2)] = cr29967_place_76);

return cr29967_state;
}catch (e30107){var cr29967_exception = e30107;
(cr29967_state[(0)] = null);

(cr29967_state[(1)] = null);

(cr29967_state[(2)] = null);

throw cr29967_exception;
}});
var cr29967_block_0 = (function hyperfiddle$electric$impl$io$message_writer_$_cr29967_block_0(cr29967_state){
try{var cr29967_place_0 = cljs.core.seq;
var cr29967_place_1 = cljs.core.pop;
var cr29967_place_2 = p1__29966_SHARP_;
var cr29967_place_3 = (function (){var G__30116 = cr29967_place_2;
var fexpr__30115 = cr29967_place_1;
return (fexpr__30115.cljs$core$IFn$_invoke$arity$1 ? fexpr__30115.cljs$core$IFn$_invoke$arity$1(G__30116) : fexpr__30115.call(null,G__30116));
})();
var cr29967_place_4 = (function (){var G__30118 = cr29967_place_3;
var fexpr__30117 = cr29967_place_0;
return (fexpr__30117.cljs$core$IFn$_invoke$arity$1 ? fexpr__30117.cljs$core$IFn$_invoke$arity$1(G__30118) : fexpr__30117.call(null,G__30118));
})();
(cr29967_state[(0)] = cr29967_block_1);

(cr29967_state[(1)] = cr29967_place_4);

return cr29967_state;
}catch (e30114){var cr29967_exception = e30114;
(cr29967_state[(0)] = null);

throw cr29967_exception;
}});
var cr29967_block_13 = (function hyperfiddle$electric$impl$io$message_writer_$_cr29967_block_13(cr29967_state){
try{var cr29967_place_54 = (cr29967_state[(3)]);
(cr29967_state[(0)] = cr29967_block_14);

(cr29967_state[(3)] = null);

(cr29967_state[(1)] = cr29967_place_54);

return cr29967_state;
}catch (e30119){var cr29967_exception = e30119;
(cr29967_state[(0)] = null);

(cr29967_state[(1)] = null);

(cr29967_state[(3)] = null);

throw cr29967_exception;
}});
var cr29967_block_8 = (function hyperfiddle$electric$impl$io$message_writer_$_cr29967_block_8(cr29967_state){
try{var cr29967_place_48 = (cr29967_state[(2)]);
var cr29967_place_49 = cljs.core.count;
var cr29967_place_50 = cr29967_place_48;
var cr29967_place_51 = (function (){var G__30122 = cr29967_place_50;
var fexpr__30121 = cr29967_place_49;
return (fexpr__30121.cljs$core$IFn$_invoke$arity$1 ? fexpr__30121.cljs$core$IFn$_invoke$arity$1(G__30122) : fexpr__30121.call(null,G__30122));
})();
var cr29967_place_52 = hyperfiddle.electric.impl.io.chunk_size;
var cr29967_place_53 = (cr29967_place_51 >= cr29967_place_52);
var cr29967_place_54 = null;
if(cr29967_place_53){
(cr29967_state[(0)] = cr29967_block_11);

return cr29967_state;
} else {
(cr29967_state[(0)] = cr29967_block_9);

(cr29967_state[(3)] = cr29967_place_54);

return cr29967_state;
}
}catch (e30120){var cr29967_exception = e30120;
(cr29967_state[(0)] = null);

(cr29967_state[(1)] = null);

(cr29967_state[(2)] = null);

throw cr29967_exception;
}});
var cr29967_block_1 = (function hyperfiddle$electric$impl$io$message_writer_$_cr29967_block_1(cr29967_state){
try{var cr29967_place_4 = (cr29967_state[(1)]);
var cr29967_place_5 = cr29967_place_4;
var cr29967_place_6 = cr29967_place_5;
var cr29967_place_7 = null;
var cr29967_place_8 = (cr29967_place_6 == cr29967_place_7);
var cr29967_place_9 = null;
if(cr29967_place_8){
(cr29967_state[(0)] = cr29967_block_7);

(cr29967_state[(1)] = null);

(cr29967_state[(1)] = cr29967_place_9);

return cr29967_state;
} else {
(cr29967_state[(0)] = cr29967_block_2);

(cr29967_state[(2)] = cr29967_place_5);

return cr29967_state;
}
}catch (e30123){var cr29967_exception = e30123;
(cr29967_state[(0)] = null);

(cr29967_state[(1)] = null);

throw cr29967_exception;
}});
var cr29967_block_6 = (function hyperfiddle$electric$impl$io$message_writer_$_cr29967_block_6(cr29967_state){
try{var cr29967_place_21 = (cr29967_state[(4)]);
var cr29967_place_44 = missionary.core.unpark();
var cr29967_place_45 = cr29967_place_21;
(cr29967_state[(0)] = cr29967_block_1);

(cr29967_state[(4)] = null);

(cr29967_state[(1)] = cr29967_place_45);

return cr29967_state;
}catch (e30124){var cr29967_exception = e30124;
(cr29967_state[(0)] = null);

(cr29967_state[(1)] = null);

(cr29967_state[(4)] = null);

throw cr29967_exception;
}});
return cloroutine.impl.coroutine((function (){var G__30125 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((6));
(G__30125[(0)] = cr29967_block_0);

return G__30125;
})());
})(),missionary.core.sp_run);
});
});
/**
 * A transducer partitioning a sequence of network messages into Electric events.
 */
hyperfiddle.electric.impl.io.decoder = (function hyperfiddle$electric$impl$io$decoder(rf){
var data = (function (){var G__30126 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
(G__30126[(0)] = cljs.core.PersistentVector.EMPTY);

(G__30126[(1)] = cljs.core.PersistentVector.EMPTY);

return G__30126;
})();
return (function() {
var G__30154 = null;
var G__30154__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__30154__1 = (function (r){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentVector.EMPTY,(data[(0)]),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(data[(1)])], 0))){
} else {
throw (new Error("Assert failed: (= [] (aget data 0) (aget data 1))"));
}

return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(r) : rf.call(null,r));
});
var G__30154__2 = (function (r,x){
if(typeof x === 'string'){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(data[(1)]))){
} else {
throw (new Error("Assert failed: (= [] (aget data 1))"));
}

(data[(0)] = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((data[(0)]),hyperfiddle.electric.impl.io.decode_str(x)));

return r;
} else {
var xs = hyperfiddle.electric.impl.io.decode_numbers(x);
(data[(1)] = cljs.core.into.cljs$core$IFn$_invoke$arity$2((data[(1)]),xs));

if((cljs.core.count(xs) < hyperfiddle.electric.impl.io.chunk_size)){
var x__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((data[(0)]),(data[(1)]));
(data[(0)] = cljs.core.PersistentVector.EMPTY);

(data[(1)] = cljs.core.PersistentVector.EMPTY);

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(r,x__$1) : rf.call(null,r,x__$1));
} else {
return r;
}
}
});
G__30154 = function(r,x){
switch(arguments.length){
case 0:
return G__30154__0.call(this);
case 1:
return G__30154__1.call(this,r);
case 2:
return G__30154__2.call(this,r,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__30154.cljs$core$IFn$_invoke$arity$0 = G__30154__0;
G__30154.cljs$core$IFn$_invoke$arity$1 = G__30154__1;
G__30154.cljs$core$IFn$_invoke$arity$2 = G__30154__2;
return G__30154;
})()
});
/**
 * A transducer expanding Electric events to a sequence of network messages.
 */
hyperfiddle.electric.impl.io.encoder = (function hyperfiddle$electric$impl$io$encoder(rf){
return (function() {
var G__30157 = null;
var G__30157__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__30157__1 = (function (r){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(r) : rf.call(null,r));
});
var G__30157__2 = (function (r,x){
var r__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,r,cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.io.encode),cljs.core.pop(x)], 0)));
var r__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,r__$1,cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.partition_all.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.io.chunk_size),cljs.core.map.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.io.encode_numbers),cljs.core.peek(x)], 0)));
var G__30129 = cljs.core.mod(cljs.core.count(cljs.core.peek(x)),hyperfiddle.electric.impl.io.chunk_size);
switch (G__30129) {
case (0):
var G__30131 = r__$2;
var G__30132 = hyperfiddle.electric.impl.io.encode_numbers(cljs.core.PersistentVector.EMPTY);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__30131,G__30132) : rf.call(null,G__30131,G__30132));

break;
default:
return r__$2;

}
});
G__30157 = function(r,x){
switch(arguments.length){
case 0:
return G__30157__0.call(this);
case 1:
return G__30157__1.call(this,r);
case 2:
return G__30157__2.call(this,r,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__30157.cljs$core$IFn$_invoke$arity$0 = G__30157__0;
G__30157.cljs$core$IFn$_invoke$arity$1 = G__30157__1;
G__30157.cljs$core$IFn$_invoke$arity$2 = G__30157__2;
return G__30157;
})()
});
hyperfiddle.electric.impl.io.foreach = (function hyperfiddle$electric$impl$io$foreach(var_args){
var G__30135 = arguments.length;
switch (G__30135) {
case 1:
return hyperfiddle.electric.impl.io.foreach.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hyperfiddle.electric.impl.io.foreach.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hyperfiddle.electric.impl.io.foreach.cljs$core$IFn$_invoke$arity$1 = (function (r){
return r;
}));

(hyperfiddle.electric.impl.io.foreach.cljs$core$IFn$_invoke$arity$2 = (function (r,x){
(r.cljs$core$IFn$_invoke$arity$1 ? r.cljs$core$IFn$_invoke$arity$1(x) : r.call(null,x));

return r;
}));

(hyperfiddle.electric.impl.io.foreach.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=hyperfiddle.electric.impl.io.js.map
