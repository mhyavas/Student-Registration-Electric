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
var G__29512 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(((size * (2)) + (1)));
var arr29513_29842 = G__29512;
(arr29513_29842[(size * (2))] = cljs.core.identity((0)));

return G__29512;
});
hyperfiddle.electric.impl.io.cache_add = (function hyperfiddle$electric$impl$io$cache_add(cache,k,v){
if(cljs.core.truth_((function (){var i = (0);
while(true){
if((i < (cljs.core.count(cache) - (1)))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,hyperfiddle.electric.impl.array_fields.get(cache,i))){
var arr29515_29843 = cache;
(arr29515_29843[(i + (1))] = cljs.core.identity(v));

return true;
} else {
var G__29845 = (i + (2));
i = G__29845;
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
var widx = hyperfiddle.electric.impl.array_fields.getswap(cache,(cljs.core.count(cache) - (1)),(function (p1__29514_SHARP_){
return cljs.core.mod((p1__29514_SHARP_ + (2)),(cljs.core.count(cache) - (1)));
}));
var arr29516 = cache;
(arr29516[widx] = cljs.core.identity(k));

return (arr29516[(widx + (1))] = cljs.core.identity(v));
}
});
hyperfiddle.electric.impl.io.cache_get = (function hyperfiddle$electric$impl$io$cache_get(cache,k){
var i = (0);
while(true){
if((i < (cljs.core.count(cache) - (1)))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,hyperfiddle.electric.impl.array_fields.get(cache,i))){
return hyperfiddle.electric.impl.array_fields.get(cache,(i + (1)));
} else {
var G__29846 = (i + (2));
i = G__29846;
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
var G__29847 = (i + (2));
var G__29848 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ac,hyperfiddle.electric.impl.array_fields.get(cache,i),hyperfiddle.electric.impl.array_fields.get(cache,(i + (1))));
i = G__29847;
ac = G__29848;
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
var temp__5808__auto___29849 = cljs.core.ex_cause(fi);
if((temp__5808__auto___29849 == null)){
} else {
var cause_29850 = temp__5808__auto___29849;
if((cause_29850 instanceof hyperfiddle.electric.FailureInfo)){
} else {
hyperfiddle.electric.impl.io.cache_add(hyperfiddle.electric.impl.io._BANG_ex_cache,id,cause_29850);
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
hyperfiddle.electric.impl.io.failure_reader = cognitect.transit.read_handler((function (p__29525){
var vec__29526 = p__29525;
var seq__29527 = cljs.core.seq(vec__29526);
var first__29528 = cljs.core.first(seq__29527);
var seq__29527__$1 = cljs.core.next(seq__29527);
var tag = first__29528;
var args = seq__29527__$1;
var G__29529 = tag;
var G__29529__$1 = (((G__29529 instanceof cljs.core.Keyword))?G__29529.fqn:null);
switch (G__29529__$1) {
case "exception":
var vec__29530 = args;
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29530,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29530,(1),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29530,(2),null);
return (new hyperfiddle.electric.Failure(hyperfiddle.electric.debug.ex_info_STAR_.cljs$core$IFn$_invoke$arity$4(message,data,id,null)));

break;
case "remote":
var vec__29533 = args;
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29533,(0),null);
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29529__$1)].join('')));

}
}));
hyperfiddle.electric.impl.io.read_opts = (function hyperfiddle$electric$impl$io$read_opts(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hyperfiddle.electric.impl.io._STAR_read_handlers_STAR_,new cljs.core.PersistentArrayMap(null, 1, ["failure",hyperfiddle.electric.impl.io.failure_reader], null)], 0))], null);
});
hyperfiddle.electric.impl.io.set_ints = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce_kv,(function (r,i,n){
var offset = (i << (2));
var G__29542 = r;
G__29542.setInt32(offset,n);

return G__29542;
}));
/**
 * Encode a control frame to a binary segment.
 */
hyperfiddle.electric.impl.io.encode_numbers = (function hyperfiddle$electric$impl$io$encode_numbers(xs){
var required = (cljs.core.count(xs) << (2));
var G__29544 = (new ArrayBuffer(required));
hyperfiddle.electric.impl.io.set_ints((new DataView(G__29544)),xs);

return G__29544;
});

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io29546 = (function (b,meta29547){
this.b = b;
this.meta29547 = meta29547;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io29546.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29548,meta29547__$1){
var self__ = this;
var _29548__$1 = this;
return (new hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io29546(self__.b,meta29547__$1));
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io29546.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29548){
var self__ = this;
var _29548__$1 = this;
return self__.meta29547;
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io29546.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,rf,r){
var self__ = this;
var ___$1 = this;
var l = self__.b.byteLength;
var v = (new DataView(self__.b));
var r__$1 = r;
var i = (0);
while(true){
if((i < l)){
var G__29852 = (function (){var G__29552 = r__$1;
var G__29553 = v.getInt32(i);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__29552,G__29553) : rf.call(null,G__29552,G__29553));
})();
var G__29853 = (i + (4));
r__$1 = G__29852;
i = G__29853;
continue;
} else {
return r__$1;
}
break;
}
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io29546.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"meta29547","meta29547",2142721179,null)], null);
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io29546.cljs$lang$type = true);

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io29546.cljs$lang$ctorStr = "hyperfiddle.electric.impl.io/t_hyperfiddle$electric$impl$io29546");

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io29546.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.io/t_hyperfiddle$electric$impl$io29546");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.io/t_hyperfiddle$electric$impl$io29546.
 */
hyperfiddle.electric.impl.io.__GT_t_hyperfiddle$electric$impl$io29546 = (function hyperfiddle$electric$impl$io$__GT_t_hyperfiddle$electric$impl$io29546(b,meta29547){
return (new hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io29546(b,meta29547));
});


/**
 * Decode a control frame from a binary segment.
 */
hyperfiddle.electric.impl.io.decode_numbers = (function hyperfiddle$electric$impl$io$decode_numbers(b){
return cljs.core.vec((new hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io29546(b,cljs.core.PersistentArrayMap.EMPTY)));
});
var _BANG_cache_29854 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write-handlers","write-handlers",-2097288911),hyperfiddle.electric.impl.io._STAR_write_handlers_STAR_,new cljs.core.Keyword(null,"writer","writer",-277568236),null], null));
hyperfiddle.electric.impl.io.transit_writer = (function hyperfiddle$electric$impl$io$transit_writer(){
return new cljs.core.Keyword(null,"writer","writer",-277568236).cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_cache_29854,(function (p__29557){
var map__29558 = p__29557;
var map__29558__$1 = cljs.core.__destructure_map(map__29558);
var cache = map__29558__$1;
var write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29558__$1,new cljs.core.Keyword(null,"write-handlers","write-handlers",-2097288911));
var writer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29558__$1,new cljs.core.Keyword(null,"writer","writer",-277568236));
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
var _BANG_cache_29855 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-handlers","read-handlers",2109459315),hyperfiddle.electric.impl.io._STAR_read_handlers_STAR_,new cljs.core.Keyword(null,"reader","reader",169660853),null], null));
hyperfiddle.electric.impl.io.transit_reader = (function hyperfiddle$electric$impl$io$transit_reader(){
return new cljs.core.Keyword(null,"reader","reader",169660853).cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_cache_29855,(function (p__29563){
var map__29565 = p__29563;
var map__29565__$1 = cljs.core.__destructure_map(map__29565);
var cache = map__29565__$1;
var read_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29565__$1,new cljs.core.Keyword(null,"read-handlers","read-handlers",2109459315));
var reader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29565__$1,new cljs.core.Keyword(null,"reader","reader",169660853));
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
try{var G__29568 = hyperfiddle.electric.impl.io.decode(x);
console.debug("\uD83D\uDD3D",G__29568);

return G__29568;
}catch (e29566){var t = e29566;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("Failed to decode",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),x], null),t);
}});
hyperfiddle.electric.impl.io.chunk_size = ((65536) >> (2));
hyperfiddle.electric.impl.io.message_reader = (function hyperfiddle$electric$impl$io$message_reader(_QMARK_read){

return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr29569_block_2 = (function hyperfiddle$electric$impl$io$message_reader_$_cr29569_block_2(cr29569_state){
try{var cr29569_place_4 = missionary.core.unpark();
var cr29569_place_5 = cr29569_place_4;
var cr29569_place_6 = typeof cr29569_place_5 === 'string';
var cr29569_place_7 = null;
if(cr29569_place_6){
(cr29569_state[(0)] = cr29569_block_9);

(cr29569_state[(2)] = cr29569_place_4);

return cr29569_state;
} else {
(cr29569_state[(0)] = cr29569_block_3);

(cr29569_state[(2)] = cr29569_place_4);

(cr29569_state[(3)] = cr29569_place_7);

return cr29569_state;
}
}catch (e29630){var cr29569_exception = e29630;
(cr29569_state[(0)] = null);

(cr29569_state[(1)] = null);

throw cr29569_exception;
}});
var cr29569_block_6 = (function hyperfiddle$electric$impl$io$message_reader_$_cr29569_block_6(cr29569_state){
try{var cr29569_place_22 = (cr29569_state[(7)]);
var cr29569_place_30 = missionary.core.unpark();
var cr29569_place_31 = cr29569_place_22;
(cr29569_state[(0)] = cr29569_block_4);

(cr29569_state[(7)] = null);

(cr29569_state[(4)] = cr29569_place_30);

(cr29569_state[(2)] = cr29569_place_31);

return cr29569_state;
}catch (e29631){var cr29569_exception = e29631;
(cr29569_state[(0)] = null);

(cr29569_state[(1)] = null);

(cr29569_state[(2)] = null);

(cr29569_state[(3)] = null);

(cr29569_state[(4)] = null);

(cr29569_state[(5)] = null);

(cr29569_state[(6)] = null);

(cr29569_state[(7)] = null);

throw cr29569_exception;
}});
var cr29569_block_0 = (function hyperfiddle$electric$impl$io$message_reader_$_cr29569_block_0(cr29569_state){
try{var cr29569_place_0 = cljs.core.transient$;
var cr29569_place_1 = cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IVector], null));
var cr29569_place_2 = (function (){var G__29637 = cr29569_place_1;
var fexpr__29636 = cr29569_place_0;
return (fexpr__29636.cljs$core$IFn$_invoke$arity$1 ? fexpr__29636.cljs$core$IFn$_invoke$arity$1(G__29637) : fexpr__29636.call(null,G__29637));
})();
(cr29569_state[(0)] = cr29569_block_1);

(cr29569_state[(1)] = cr29569_place_2);

return cr29569_state;
}catch (e29632){var cr29569_exception = e29632;
(cr29569_state[(0)] = null);

throw cr29569_exception;
}});
var cr29569_block_10 = (function hyperfiddle$electric$impl$io$message_reader_$_cr29569_block_10(cr29569_state){
try{var cr29569_place_7 = (cr29569_state[(3)]);
(cr29569_state[(0)] = null);

(cr29569_state[(3)] = null);

return cr29569_place_7;
}catch (e29639){var cr29569_exception = e29639;
(cr29569_state[(0)] = null);

(cr29569_state[(3)] = null);

throw cr29569_exception;
}});
var cr29569_block_3 = (function hyperfiddle$electric$impl$io$message_reader_$_cr29569_block_3(cr29569_state){
try{var cr29569_place_2 = (cr29569_state[(1)]);
var cr29569_place_4 = (cr29569_state[(2)]);
var cr29569_place_8 = cljs.core.persistent_BANG_;
var cr29569_place_9 = cljs.core.conj_BANG_;
var cr29569_place_10 = cr29569_place_2;
var cr29569_place_11 = cr29569_place_4;
var cr29569_place_12 = cljs.core.transient$;
var cr29569_place_13 = cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IVector], null));
var cr29569_place_14 = (function (){var G__29643 = cr29569_place_13;
var fexpr__29642 = cr29569_place_12;
return (fexpr__29642.cljs$core$IFn$_invoke$arity$1 ? fexpr__29642.cljs$core$IFn$_invoke$arity$1(G__29643) : fexpr__29642.call(null,G__29643));
})();
(cr29569_state[(0)] = cr29569_block_4);

(cr29569_state[(1)] = null);

(cr29569_state[(2)] = null);

(cr29569_state[(5)] = cr29569_place_8);

(cr29569_state[(6)] = cr29569_place_9);

(cr29569_state[(1)] = cr29569_place_10);

(cr29569_state[(4)] = cr29569_place_11);

(cr29569_state[(2)] = cr29569_place_14);

return cr29569_state;
}catch (e29641){var cr29569_exception = e29641;
(cr29569_state[(0)] = null);

(cr29569_state[(1)] = null);

(cr29569_state[(2)] = null);

(cr29569_state[(3)] = null);

throw cr29569_exception;
}});
var cr29569_block_8 = (function hyperfiddle$electric$impl$io$message_reader_$_cr29569_block_8(cr29569_state){
try{var cr29569_place_28 = (cr29569_state[(2)]);
var cr29569_place_10 = (cr29569_state[(1)]);
var cr29569_place_8 = (cr29569_state[(5)]);
var cr29569_place_9 = (cr29569_state[(6)]);
var cr29569_place_35 = (function (){var G__29647 = cr29569_place_10;
var G__29648 = cr29569_place_28;
var fexpr__29646 = cr29569_place_9;
return (fexpr__29646.cljs$core$IFn$_invoke$arity$2 ? fexpr__29646.cljs$core$IFn$_invoke$arity$2(G__29647,G__29648) : fexpr__29646.call(null,G__29647,G__29648));
})();
var cr29569_place_36 = (function (){var G__29650 = cr29569_place_35;
var fexpr__29649 = cr29569_place_8;
return (fexpr__29649.cljs$core$IFn$_invoke$arity$1 ? fexpr__29649.cljs$core$IFn$_invoke$arity$1(G__29650) : fexpr__29649.call(null,G__29650));
})();
(cr29569_state[(0)] = cr29569_block_10);

(cr29569_state[(2)] = null);

(cr29569_state[(1)] = null);

(cr29569_state[(5)] = null);

(cr29569_state[(6)] = null);

(cr29569_state[(3)] = cr29569_place_36);

return cr29569_state;
}catch (e29644){var cr29569_exception = e29644;
(cr29569_state[(0)] = null);

(cr29569_state[(2)] = null);

(cr29569_state[(1)] = null);

(cr29569_state[(3)] = null);

(cr29569_state[(5)] = null);

(cr29569_state[(6)] = null);

throw cr29569_exception;
}});
var cr29569_block_5 = (function hyperfiddle$electric$impl$io$message_reader_$_cr29569_block_5(cr29569_state){
try{var cr29569_place_29 = _QMARK_read;
(cr29569_state[(0)] = cr29569_block_6);

return missionary.core.park(cr29569_place_29);
}catch (e29651){var cr29569_exception = e29651;
(cr29569_state[(0)] = null);

(cr29569_state[(1)] = null);

(cr29569_state[(2)] = null);

(cr29569_state[(3)] = null);

(cr29569_state[(4)] = null);

(cr29569_state[(5)] = null);

(cr29569_state[(6)] = null);

(cr29569_state[(7)] = null);

throw cr29569_exception;
}});
var cr29569_block_4 = (function hyperfiddle$electric$impl$io$message_reader_$_cr29569_block_4(cr29569_state){
try{var cr29569_place_14 = (cr29569_state[(2)]);
var cr29569_place_11 = (cr29569_state[(4)]);
var cr29569_place_15 = hyperfiddle.electric.impl.io.decode_numbers;
var cr29569_place_16 = cr29569_place_11;
var cr29569_place_17 = (function (){var G__29654 = cr29569_place_16;
var fexpr__29653 = cr29569_place_15;
return (fexpr__29653.cljs$core$IFn$_invoke$arity$1 ? fexpr__29653.cljs$core$IFn$_invoke$arity$1(G__29654) : fexpr__29653.call(null,G__29654));
})();
var cr29569_place_18 = cljs.core.reduce;
var cr29569_place_19 = cljs.core.conj_BANG_;
var cr29569_place_20 = cr29569_place_14;
var cr29569_place_21 = cr29569_place_17;
var cr29569_place_22 = (function (){var G__29656 = cr29569_place_19;
var G__29657 = cr29569_place_20;
var G__29658 = cr29569_place_21;
var fexpr__29655 = cr29569_place_18;
return (fexpr__29655.cljs$core$IFn$_invoke$arity$3 ? fexpr__29655.cljs$core$IFn$_invoke$arity$3(G__29656,G__29657,G__29658) : fexpr__29655.call(null,G__29656,G__29657,G__29658));
})();
var cr29569_place_23 = cljs.core.count;
var cr29569_place_24 = cr29569_place_17;
var cr29569_place_25 = (function (){var G__29660 = cr29569_place_24;
var fexpr__29659 = cr29569_place_23;
return (fexpr__29659.cljs$core$IFn$_invoke$arity$1 ? fexpr__29659.cljs$core$IFn$_invoke$arity$1(G__29660) : fexpr__29659.call(null,G__29660));
})();
var cr29569_place_26 = hyperfiddle.electric.impl.io.chunk_size;
var cr29569_place_27 = (cr29569_place_25 < cr29569_place_26);
var cr29569_place_28 = null;
if(cr29569_place_27){
(cr29569_state[(0)] = cr29569_block_7);

(cr29569_state[(2)] = null);

(cr29569_state[(4)] = null);

(cr29569_state[(2)] = cr29569_place_28);

(cr29569_state[(7)] = cr29569_place_22);

return cr29569_state;
} else {
(cr29569_state[(0)] = cr29569_block_5);

(cr29569_state[(7)] = cr29569_place_22);

return cr29569_state;
}
}catch (e29652){var cr29569_exception = e29652;
(cr29569_state[(0)] = null);

(cr29569_state[(1)] = null);

(cr29569_state[(2)] = null);

(cr29569_state[(3)] = null);

(cr29569_state[(4)] = null);

(cr29569_state[(5)] = null);

(cr29569_state[(6)] = null);

throw cr29569_exception;
}});
var cr29569_block_9 = (function hyperfiddle$electric$impl$io$message_reader_$_cr29569_block_9(cr29569_state){
try{var cr29569_place_2 = (cr29569_state[(1)]);
var cr29569_place_4 = (cr29569_state[(2)]);
var cr29569_place_37 = cljs.core.conj_BANG_;
var cr29569_place_38 = cr29569_place_2;
var cr29569_place_39 = hyperfiddle.electric.impl.io.decode_str;
var cr29569_place_40 = cr29569_place_4;
var cr29569_place_41 = (function (){var G__29663 = cr29569_place_40;
var fexpr__29662 = cr29569_place_39;
return (fexpr__29662.cljs$core$IFn$_invoke$arity$1 ? fexpr__29662.cljs$core$IFn$_invoke$arity$1(G__29663) : fexpr__29662.call(null,G__29663));
})();
var cr29569_place_42 = (function (){var G__29665 = cr29569_place_38;
var G__29666 = cr29569_place_41;
var fexpr__29664 = cr29569_place_37;
return (fexpr__29664.cljs$core$IFn$_invoke$arity$2 ? fexpr__29664.cljs$core$IFn$_invoke$arity$2(G__29665,G__29666) : fexpr__29664.call(null,G__29665,G__29666));
})();
(cr29569_state[(0)] = cr29569_block_1);

(cr29569_state[(2)] = null);

(cr29569_state[(1)] = cr29569_place_42);

return cr29569_state;
}catch (e29661){var cr29569_exception = e29661;
(cr29569_state[(0)] = null);

(cr29569_state[(1)] = null);

(cr29569_state[(2)] = null);

throw cr29569_exception;
}});
var cr29569_block_1 = (function hyperfiddle$electric$impl$io$message_reader_$_cr29569_block_1(cr29569_state){
try{var cr29569_place_3 = _QMARK_read;
(cr29569_state[(0)] = cr29569_block_2);

return missionary.core.park(cr29569_place_3);
}catch (e29667){var cr29569_exception = e29667;
(cr29569_state[(0)] = null);

(cr29569_state[(1)] = null);

throw cr29569_exception;
}});
var cr29569_block_7 = (function hyperfiddle$electric$impl$io$message_reader_$_cr29569_block_7(cr29569_state){
try{var cr29569_place_22 = (cr29569_state[(7)]);
var cr29569_place_32 = cljs.core.persistent_BANG_;
var cr29569_place_33 = cr29569_place_22;
var cr29569_place_34 = (function (){var G__29670 = cr29569_place_33;
var fexpr__29669 = cr29569_place_32;
return (fexpr__29669.cljs$core$IFn$_invoke$arity$1 ? fexpr__29669.cljs$core$IFn$_invoke$arity$1(G__29670) : fexpr__29669.call(null,G__29670));
})();
(cr29569_state[(0)] = cr29569_block_8);

(cr29569_state[(7)] = null);

(cr29569_state[(2)] = cr29569_place_34);

return cr29569_state;
}catch (e29668){var cr29569_exception = e29668;
(cr29569_state[(0)] = null);

(cr29569_state[(2)] = null);

(cr29569_state[(1)] = null);

(cr29569_state[(3)] = null);

(cr29569_state[(5)] = null);

(cr29569_state[(6)] = null);

(cr29569_state[(7)] = null);

throw cr29569_exception;
}});
return cloroutine.impl.coroutine((function (){var G__29671 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((8));
(G__29671[(0)] = cr29569_block_0);

return G__29671;
})());
})(),missionary.core.sp_run);
});
/**
 * Returns a function taking an Electric message and returning a task writing it as individual frames using provided
 * function. Might cut a message into chunks if its size would exceed the server payload limit.
 * An empty message (0b) is written to notify the end of frame.
 */
hyperfiddle.electric.impl.io.message_writer = (function hyperfiddle$electric$impl$io$message_writer(write){
return (function (p1__29672_SHARP_){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr29673_block_2 = (function hyperfiddle$electric$impl$io$message_writer_$_cr29673_block_2(cr29673_state){
try{var cr29673_place_5 = (cr29673_state[(2)]);
var cr29673_place_10 = cr29673_place_5;
var cr29673_place_11 = cljs.core.seq;
var cr29673_place_12 = cr29673_place_10;
var cr29673_place_13 = (function (){var G__29775 = cr29673_place_12;
var fexpr__29774 = cr29673_place_11;
return (fexpr__29774.cljs$core$IFn$_invoke$arity$1 ? fexpr__29774.cljs$core$IFn$_invoke$arity$1(G__29775) : fexpr__29774.call(null,G__29775));
})();
var cr29673_place_14 = cljs.core.first;
var cr29673_place_15 = cr29673_place_13;
var cr29673_place_16 = (function (){var G__29777 = cr29673_place_15;
var fexpr__29776 = cr29673_place_14;
return (fexpr__29776.cljs$core$IFn$_invoke$arity$1 ? fexpr__29776.cljs$core$IFn$_invoke$arity$1(G__29777) : fexpr__29776.call(null,G__29777));
})();
var cr29673_place_17 = cljs.core.next;
var cr29673_place_18 = cr29673_place_13;
var cr29673_place_19 = (function (){var G__29779 = cr29673_place_18;
var fexpr__29778 = cr29673_place_17;
return (fexpr__29778.cljs$core$IFn$_invoke$arity$1 ? fexpr__29778.cljs$core$IFn$_invoke$arity$1(G__29779) : fexpr__29778.call(null,G__29779));
})();
var cr29673_place_20 = cr29673_place_16;
var cr29673_place_21 = cr29673_place_19;
var cr29673_place_22 = console.debug;
var cr29673_place_23 = "\uD83D\uDD3C";
var cr29673_place_24 = cr29673_place_20;
var cr29673_place_25 = (function (){var G__29781 = cr29673_place_23;
var G__29782 = cr29673_place_24;
var fexpr__29780 = cr29673_place_22;
return (fexpr__29780.cljs$core$IFn$_invoke$arity$2 ? fexpr__29780.cljs$core$IFn$_invoke$arity$2(G__29781,G__29782) : fexpr__29780.call(null,G__29781,G__29782));
})();
var cr29673_place_26 = null;
var cr29673_place_27 = false;
(cr29673_state[(0)] = cr29673_block_3);

(cr29673_state[(2)] = null);

(cr29673_state[(2)] = cr29673_place_27);

(cr29673_state[(3)] = cr29673_place_26);

(cr29673_state[(4)] = cr29673_place_20);

(cr29673_state[(5)] = cr29673_place_21);

return cr29673_state;
}catch (e29772){var cr29673_exception = e29772;
(cr29673_state[(0)] = null);

(cr29673_state[(2)] = null);

(cr29673_state[(1)] = null);

throw cr29673_exception;
}});
var cr29673_block_13 = (function hyperfiddle$electric$impl$io$message_writer_$_cr29673_block_13(cr29673_state){
try{var cr29673_place_54 = (cr29673_state[(3)]);
(cr29673_state[(0)] = cr29673_block_14);

(cr29673_state[(3)] = null);

(cr29673_state[(1)] = cr29673_place_54);

return cr29673_state;
}catch (e29783){var cr29673_exception = e29783;
(cr29673_state[(0)] = null);

(cr29673_state[(3)] = null);

(cr29673_state[(1)] = null);

throw cr29673_exception;
}});
var cr29673_block_0 = (function hyperfiddle$electric$impl$io$message_writer_$_cr29673_block_0(cr29673_state){
try{var cr29673_place_0 = cljs.core.seq;
var cr29673_place_1 = cljs.core.pop;
var cr29673_place_2 = p1__29672_SHARP_;
var cr29673_place_3 = (function (){var G__29786 = cr29673_place_2;
var fexpr__29785 = cr29673_place_1;
return (fexpr__29785.cljs$core$IFn$_invoke$arity$1 ? fexpr__29785.cljs$core$IFn$_invoke$arity$1(G__29786) : fexpr__29785.call(null,G__29786));
})();
var cr29673_place_4 = (function (){var G__29788 = cr29673_place_3;
var fexpr__29787 = cr29673_place_0;
return (fexpr__29787.cljs$core$IFn$_invoke$arity$1 ? fexpr__29787.cljs$core$IFn$_invoke$arity$1(G__29788) : fexpr__29787.call(null,G__29788));
})();
(cr29673_state[(0)] = cr29673_block_1);

(cr29673_state[(1)] = cr29673_place_4);

return cr29673_state;
}catch (e29784){var cr29673_exception = e29784;
(cr29673_state[(0)] = null);

throw cr29673_exception;
}});
var cr29673_block_11 = (function hyperfiddle$electric$impl$io$message_writer_$_cr29673_block_11(cr29673_state){
try{var cr29673_place_48 = (cr29673_state[(2)]);
var cr29673_place_62 = hyperfiddle.electric.impl.io.encode_numbers;
var cr29673_place_63 = cljs.core.subvec;
var cr29673_place_64 = cr29673_place_48;
var cr29673_place_65 = (0);
var cr29673_place_66 = hyperfiddle.electric.impl.io.chunk_size;
var cr29673_place_67 = (function (){var G__29791 = cr29673_place_64;
var G__29792 = cr29673_place_65;
var G__29793 = cr29673_place_66;
var fexpr__29790 = cr29673_place_63;
return (fexpr__29790.cljs$core$IFn$_invoke$arity$3 ? fexpr__29790.cljs$core$IFn$_invoke$arity$3(G__29791,G__29792,G__29793) : fexpr__29790.call(null,G__29791,G__29792,G__29793));
})();
var cr29673_place_68 = (function (){var G__29795 = cr29673_place_67;
var fexpr__29794 = cr29673_place_62;
return (fexpr__29794.cljs$core$IFn$_invoke$arity$1 ? fexpr__29794.cljs$core$IFn$_invoke$arity$1(G__29795) : fexpr__29794.call(null,G__29795));
})();
var cr29673_place_69 = write;
var cr29673_place_70 = cr29673_place_68;
var cr29673_place_71 = (function (){var G__29797 = cr29673_place_70;
var fexpr__29796 = cr29673_place_69;
return (fexpr__29796.cljs$core$IFn$_invoke$arity$1 ? fexpr__29796.cljs$core$IFn$_invoke$arity$1(G__29797) : fexpr__29796.call(null,G__29797));
})();
(cr29673_state[(0)] = cr29673_block_12);

return missionary.core.park(cr29673_place_71);
}catch (e29789){var cr29673_exception = e29789;
(cr29673_state[(0)] = null);

(cr29673_state[(2)] = null);

(cr29673_state[(1)] = null);

throw cr29673_exception;
}});
var cr29673_block_7 = (function hyperfiddle$electric$impl$io$message_writer_$_cr29673_block_7(cr29673_state){
try{var cr29673_place_46 = cljs.core.peek;
var cr29673_place_47 = p1__29672_SHARP_;
var cr29673_place_48 = (function (){var G__29800 = cr29673_place_47;
var fexpr__29799 = cr29673_place_46;
return (fexpr__29799.cljs$core$IFn$_invoke$arity$1 ? fexpr__29799.cljs$core$IFn$_invoke$arity$1(G__29800) : fexpr__29799.call(null,G__29800));
})();
(cr29673_state[(0)] = cr29673_block_8);

(cr29673_state[(2)] = cr29673_place_48);

return cr29673_state;
}catch (e29798){var cr29673_exception = e29798;
(cr29673_state[(0)] = null);

(cr29673_state[(1)] = null);

throw cr29673_exception;
}});
var cr29673_block_8 = (function hyperfiddle$electric$impl$io$message_writer_$_cr29673_block_8(cr29673_state){
try{var cr29673_place_48 = (cr29673_state[(2)]);
var cr29673_place_49 = cljs.core.count;
var cr29673_place_50 = cr29673_place_48;
var cr29673_place_51 = (function (){var G__29803 = cr29673_place_50;
var fexpr__29802 = cr29673_place_49;
return (fexpr__29802.cljs$core$IFn$_invoke$arity$1 ? fexpr__29802.cljs$core$IFn$_invoke$arity$1(G__29803) : fexpr__29802.call(null,G__29803));
})();
var cr29673_place_52 = hyperfiddle.electric.impl.io.chunk_size;
var cr29673_place_53 = (cr29673_place_51 >= cr29673_place_52);
var cr29673_place_54 = null;
if(cr29673_place_53){
(cr29673_state[(0)] = cr29673_block_11);

return cr29673_state;
} else {
(cr29673_state[(0)] = cr29673_block_9);

(cr29673_state[(3)] = cr29673_place_54);

return cr29673_state;
}
}catch (e29801){var cr29673_exception = e29801;
(cr29673_state[(0)] = null);

(cr29673_state[(2)] = null);

(cr29673_state[(1)] = null);

throw cr29673_exception;
}});
var cr29673_block_12 = (function hyperfiddle$electric$impl$io$message_writer_$_cr29673_block_12(cr29673_state){
try{var cr29673_place_48 = (cr29673_state[(2)]);
var cr29673_place_72 = missionary.core.unpark();
var cr29673_place_73 = cljs.core.subvec;
var cr29673_place_74 = cr29673_place_48;
var cr29673_place_75 = hyperfiddle.electric.impl.io.chunk_size;
var cr29673_place_76 = (function (){var G__29809 = cr29673_place_74;
var G__29810 = cr29673_place_75;
var fexpr__29808 = cr29673_place_73;
return (fexpr__29808.cljs$core$IFn$_invoke$arity$2 ? fexpr__29808.cljs$core$IFn$_invoke$arity$2(G__29809,G__29810) : fexpr__29808.call(null,G__29809,G__29810));
})();
(cr29673_state[(0)] = cr29673_block_8);

(cr29673_state[(2)] = cr29673_place_76);

return cr29673_state;
}catch (e29806){var cr29673_exception = e29806;
(cr29673_state[(0)] = null);

(cr29673_state[(2)] = null);

(cr29673_state[(1)] = null);

throw cr29673_exception;
}});
var cr29673_block_6 = (function hyperfiddle$electric$impl$io$message_writer_$_cr29673_block_6(cr29673_state){
try{var cr29673_place_21 = (cr29673_state[(5)]);
var cr29673_place_44 = missionary.core.unpark();
var cr29673_place_45 = cr29673_place_21;
(cr29673_state[(0)] = cr29673_block_1);

(cr29673_state[(5)] = null);

(cr29673_state[(1)] = cr29673_place_45);

return cr29673_state;
}catch (e29811){var cr29673_exception = e29811;
(cr29673_state[(0)] = null);

(cr29673_state[(1)] = null);

(cr29673_state[(5)] = null);

throw cr29673_exception;
}});
var cr29673_block_3 = (function hyperfiddle$electric$impl$io$message_writer_$_cr29673_block_3(cr29673_state){
try{var cr29673_place_20 = (cr29673_state[(4)]);
var cr29673_place_28 = hyperfiddle.electric.impl.io.encode;
var cr29673_place_29 = cr29673_place_20;
var cr29673_place_30 = (function (){var G__29814 = cr29673_place_29;
var fexpr__29813 = cr29673_place_28;
return (fexpr__29813.cljs$core$IFn$_invoke$arity$1 ? fexpr__29813.cljs$core$IFn$_invoke$arity$1(G__29814) : fexpr__29813.call(null,G__29814));
})();
(cr29673_state[(0)] = cr29673_block_5);

(cr29673_state[(4)] = null);

(cr29673_state[(3)] = cr29673_place_30);

return cr29673_state;
}catch (e29812){var cr29673_exception = e29812;
(cr29673_state[(0)] = cr29673_block_4);

(cr29673_state[(3)] = cr29673_exception);

return cr29673_state;
}});
var cr29673_block_5 = (function hyperfiddle$electric$impl$io$message_writer_$_cr29673_block_5(cr29673_state){
try{var cr29673_place_27 = (cr29673_state[(2)]);
var cr29673_place_26 = (cr29673_state[(3)]);
var cr29673_place_40 = (cljs.core.truth_(cr29673_place_27)?(function(){throw cr29673_place_26})():cr29673_place_26);
var cr29673_place_41 = write;
var cr29673_place_42 = cr29673_place_40;
var cr29673_place_43 = (function (){var G__29817 = cr29673_place_42;
var fexpr__29816 = cr29673_place_41;
return (fexpr__29816.cljs$core$IFn$_invoke$arity$1 ? fexpr__29816.cljs$core$IFn$_invoke$arity$1(G__29817) : fexpr__29816.call(null,G__29817));
})();
(cr29673_state[(0)] = cr29673_block_6);

(cr29673_state[(2)] = null);

(cr29673_state[(3)] = null);

return missionary.core.park(cr29673_place_43);
}catch (e29815){var cr29673_exception = e29815;
(cr29673_state[(0)] = null);

(cr29673_state[(2)] = null);

(cr29673_state[(1)] = null);

(cr29673_state[(3)] = null);

(cr29673_state[(5)] = null);

throw cr29673_exception;
}});
var cr29673_block_14 = (function hyperfiddle$electric$impl$io$message_writer_$_cr29673_block_14(cr29673_state){
try{var cr29673_place_9 = (cr29673_state[(1)]);
(cr29673_state[(0)] = null);

(cr29673_state[(1)] = null);

return cr29673_place_9;
}catch (e29818){var cr29673_exception = e29818;
(cr29673_state[(0)] = null);

(cr29673_state[(1)] = null);

throw cr29673_exception;
}});
var cr29673_block_10 = (function hyperfiddle$electric$impl$io$message_writer_$_cr29673_block_10(cr29673_state){
try{var cr29673_place_61 = missionary.core.unpark();
(cr29673_state[(0)] = cr29673_block_13);

(cr29673_state[(3)] = cr29673_place_61);

return cr29673_state;
}catch (e29819){var cr29673_exception = e29819;
(cr29673_state[(0)] = null);

(cr29673_state[(3)] = null);

(cr29673_state[(1)] = null);

throw cr29673_exception;
}});
var cr29673_block_4 = (function hyperfiddle$electric$impl$io$message_writer_$_cr29673_block_4(cr29673_state){
try{var cr29673_place_26 = (cr29673_state[(3)]);
var cr29673_place_20 = (cr29673_state[(4)]);
var cr29673_place_31 = cr29673_place_26;
var cr29673_place_32 = cljs.core.ex_info;
var cr29673_place_33 = "Failed to encode";
var cr29673_place_34 = new cljs.core.Keyword(null,"value","value",305978217);
var cr29673_place_35 = cr29673_place_20;
var cr29673_place_36 = cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([cr29673_place_34,cr29673_place_35]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr29673_place_37 = cr29673_place_31;
var cr29673_place_38 = (function (){var G__29822 = cr29673_place_33;
var G__29823 = cr29673_place_36;
var G__29824 = cr29673_place_37;
var fexpr__29821 = cr29673_place_32;
return (fexpr__29821.cljs$core$IFn$_invoke$arity$3 ? fexpr__29821.cljs$core$IFn$_invoke$arity$3(G__29822,G__29823,G__29824) : fexpr__29821.call(null,G__29822,G__29823,G__29824));
})();
var cr29673_place_39 = (function(){throw cr29673_place_38})();
(cr29673_state[(0)] = null);

(cr29673_state[(2)] = null);

(cr29673_state[(1)] = null);

(cr29673_state[(3)] = null);

(cr29673_state[(4)] = null);

(cr29673_state[(5)] = null);

return null;
}catch (e29820){var cr29673_exception = e29820;
(cr29673_state[(0)] = cr29673_block_5);

(cr29673_state[(4)] = null);

(cr29673_state[(2)] = true);

(cr29673_state[(3)] = cr29673_exception);

return cr29673_state;
}});
var cr29673_block_1 = (function hyperfiddle$electric$impl$io$message_writer_$_cr29673_block_1(cr29673_state){
try{var cr29673_place_4 = (cr29673_state[(1)]);
var cr29673_place_5 = cr29673_place_4;
var cr29673_place_6 = cr29673_place_5;
var cr29673_place_7 = null;
var cr29673_place_8 = (cr29673_place_6 == cr29673_place_7);
var cr29673_place_9 = null;
if(cr29673_place_8){
(cr29673_state[(0)] = cr29673_block_7);

(cr29673_state[(1)] = null);

(cr29673_state[(1)] = cr29673_place_9);

return cr29673_state;
} else {
(cr29673_state[(0)] = cr29673_block_2);

(cr29673_state[(2)] = cr29673_place_5);

return cr29673_state;
}
}catch (e29825){var cr29673_exception = e29825;
(cr29673_state[(0)] = null);

(cr29673_state[(1)] = null);

throw cr29673_exception;
}});
var cr29673_block_9 = (function hyperfiddle$electric$impl$io$message_writer_$_cr29673_block_9(cr29673_state){
try{var cr29673_place_48 = (cr29673_state[(2)]);
var cr29673_place_55 = hyperfiddle.electric.impl.io.encode_numbers;
var cr29673_place_56 = cr29673_place_48;
var cr29673_place_57 = (function (){var G__29830 = cr29673_place_56;
var fexpr__29829 = cr29673_place_55;
return (fexpr__29829.cljs$core$IFn$_invoke$arity$1 ? fexpr__29829.cljs$core$IFn$_invoke$arity$1(G__29830) : fexpr__29829.call(null,G__29830));
})();
var cr29673_place_58 = write;
var cr29673_place_59 = cr29673_place_57;
var cr29673_place_60 = (function (){var G__29833 = cr29673_place_59;
var fexpr__29832 = cr29673_place_58;
return (fexpr__29832.cljs$core$IFn$_invoke$arity$1 ? fexpr__29832.cljs$core$IFn$_invoke$arity$1(G__29833) : fexpr__29832.call(null,G__29833));
})();
(cr29673_state[(0)] = cr29673_block_10);

(cr29673_state[(2)] = null);

return missionary.core.park(cr29673_place_60);
}catch (e29828){var cr29673_exception = e29828;
(cr29673_state[(0)] = null);

(cr29673_state[(2)] = null);

(cr29673_state[(3)] = null);

(cr29673_state[(1)] = null);

throw cr29673_exception;
}});
return cloroutine.impl.coroutine((function (){var G__29834 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((6));
(G__29834[(0)] = cr29673_block_0);

return G__29834;
})());
})(),missionary.core.sp_run);
});
});
/**
 * A transducer partitioning a sequence of network messages into Electric events.
 */
hyperfiddle.electric.impl.io.decoder = (function hyperfiddle$electric$impl$io$decoder(rf){
var data = (function (){var G__29836 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
(G__29836[(0)] = cljs.core.PersistentVector.EMPTY);

(G__29836[(1)] = cljs.core.PersistentVector.EMPTY);

return G__29836;
})();
return (function() {
var G__29864 = null;
var G__29864__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__29864__1 = (function (r){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentVector.EMPTY,(data[(0)]),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(data[(1)])], 0))){
} else {
throw (new Error("Assert failed: (= [] (aget data 0) (aget data 1))"));
}

return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(r) : rf.call(null,r));
});
var G__29864__2 = (function (r,x){
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
G__29864 = function(r,x){
switch(arguments.length){
case 0:
return G__29864__0.call(this);
case 1:
return G__29864__1.call(this,r);
case 2:
return G__29864__2.call(this,r,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29864.cljs$core$IFn$_invoke$arity$0 = G__29864__0;
G__29864.cljs$core$IFn$_invoke$arity$1 = G__29864__1;
G__29864.cljs$core$IFn$_invoke$arity$2 = G__29864__2;
return G__29864;
})()
});
/**
 * A transducer expanding Electric events to a sequence of network messages.
 */
hyperfiddle.electric.impl.io.encoder = (function hyperfiddle$electric$impl$io$encoder(rf){
return (function() {
var G__29867 = null;
var G__29867__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__29867__1 = (function (r){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(r) : rf.call(null,r));
});
var G__29867__2 = (function (r,x){
var r__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,r,cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.io.encode),cljs.core.pop(x)], 0)));
var r__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,r__$1,cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.partition_all.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.io.chunk_size),cljs.core.map.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.io.encode_numbers),cljs.core.peek(x)], 0)));
var G__29837 = cljs.core.mod(cljs.core.count(cljs.core.peek(x)),hyperfiddle.electric.impl.io.chunk_size);
switch (G__29837) {
case (0):
var G__29838 = r__$2;
var G__29839 = hyperfiddle.electric.impl.io.encode_numbers(cljs.core.PersistentVector.EMPTY);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__29838,G__29839) : rf.call(null,G__29838,G__29839));

break;
default:
return r__$2;

}
});
G__29867 = function(r,x){
switch(arguments.length){
case 0:
return G__29867__0.call(this);
case 1:
return G__29867__1.call(this,r);
case 2:
return G__29867__2.call(this,r,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29867.cljs$core$IFn$_invoke$arity$0 = G__29867__0;
G__29867.cljs$core$IFn$_invoke$arity$1 = G__29867__1;
G__29867.cljs$core$IFn$_invoke$arity$2 = G__29867__2;
return G__29867;
})()
});
hyperfiddle.electric.impl.io.foreach = (function hyperfiddle$electric$impl$io$foreach(var_args){
var G__29841 = arguments.length;
switch (G__29841) {
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
