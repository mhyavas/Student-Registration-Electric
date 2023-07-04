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
var G__29806 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(((size * (2)) + (1)));
var arr29807_30229 = G__29806;
(arr29807_30229[(size * (2))] = cljs.core.identity((0)));

return G__29806;
});
hyperfiddle.electric.impl.io.cache_add = (function hyperfiddle$electric$impl$io$cache_add(cache,k,v){
if(cljs.core.truth_((function (){var i = (0);
while(true){
if((i < (cljs.core.count(cache) - (1)))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,hyperfiddle.electric.impl.array_fields.get(cache,i))){
var arr29809_30230 = cache;
(arr29809_30230[(i + (1))] = cljs.core.identity(v));

return true;
} else {
var G__30231 = (i + (2));
i = G__30231;
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
var widx = hyperfiddle.electric.impl.array_fields.getswap(cache,(cljs.core.count(cache) - (1)),(function (p1__29808_SHARP_){
return cljs.core.mod((p1__29808_SHARP_ + (2)),(cljs.core.count(cache) - (1)));
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
var G__30232 = (i + (2));
i = G__30232;
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
var G__30234 = (i + (2));
var G__30235 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ac,hyperfiddle.electric.impl.array_fields.get(cache,i),hyperfiddle.electric.impl.array_fields.get(cache,(i + (1))));
i = G__30234;
ac = G__30235;
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
var temp__5808__auto___30236 = cljs.core.ex_cause(fi);
if((temp__5808__auto___30236 == null)){
} else {
var cause_30243 = temp__5808__auto___30236;
if((cause_30243 instanceof hyperfiddle.electric.FailureInfo)){
} else {
hyperfiddle.electric.impl.io.cache_add(hyperfiddle.electric.impl.io._BANG_ex_cache,id,cause_30243);
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
hyperfiddle.electric.impl.io.failure_reader = cognitect.transit.read_handler((function (p__29817){
var vec__29819 = p__29817;
var seq__29820 = cljs.core.seq(vec__29819);
var first__29821 = cljs.core.first(seq__29820);
var seq__29820__$1 = cljs.core.next(seq__29820);
var tag = first__29821;
var args = seq__29820__$1;
var G__29822 = tag;
var G__29822__$1 = (((G__29822 instanceof cljs.core.Keyword))?G__29822.fqn:null);
switch (G__29822__$1) {
case "exception":
var vec__29824 = args;
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29824,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29824,(1),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29824,(2),null);
return (new hyperfiddle.electric.Failure(hyperfiddle.electric.debug.ex_info_STAR_.cljs$core$IFn$_invoke$arity$4(message,data,id,null)));

break;
case "remote":
var vec__29827 = args;
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29827,(0),null);
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29822__$1)].join('')));

}
}));
hyperfiddle.electric.impl.io.read_opts = (function hyperfiddle$electric$impl$io$read_opts(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hyperfiddle.electric.impl.io._STAR_read_handlers_STAR_,new cljs.core.PersistentArrayMap(null, 1, ["failure",hyperfiddle.electric.impl.io.failure_reader], null)], 0))], null);
});
hyperfiddle.electric.impl.io.set_ints = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce_kv,(function (r,i,n){
var offset = (i << (2));
var G__29832 = r;
G__29832.setInt32(offset,n);

return G__29832;
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
if((typeof hyperfiddle !== 'undefined') && (typeof hyperfiddle.electric !== 'undefined') && (typeof hyperfiddle.electric.impl !== 'undefined') && (typeof hyperfiddle.electric.impl.io !== 'undefined') && (typeof hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io29840 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io29840 = (function (b,meta29841){
this.b = b;
this.meta29841 = meta29841;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io29840.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29842,meta29841__$1){
var self__ = this;
var _29842__$1 = this;
return (new hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io29840(self__.b,meta29841__$1));
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io29840.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29842){
var self__ = this;
var _29842__$1 = this;
return self__.meta29841;
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io29840.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,rf,r){
var self__ = this;
var ___$1 = this;
var l = self__.b.byteLength;
var v = (new DataView(self__.b));
var r__$1 = r;
var i = (0);
while(true){
if((i < l)){
var G__30248 = (function (){var G__29846 = r__$1;
var G__29847 = v.getInt32(i);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__29846,G__29847) : rf.call(null,G__29846,G__29847));
})();
var G__30249 = (i + (4));
r__$1 = G__30248;
i = G__30249;
continue;
} else {
return r__$1;
}
break;
}
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io29840.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"meta29841","meta29841",-1398735797,null)], null);
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io29840.cljs$lang$type = true);

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io29840.cljs$lang$ctorStr = "hyperfiddle.electric.impl.io/t_hyperfiddle$electric$impl$io29840");

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io29840.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.io/t_hyperfiddle$electric$impl$io29840");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.io/t_hyperfiddle$electric$impl$io29840.
 */
hyperfiddle.electric.impl.io.__GT_t_hyperfiddle$electric$impl$io29840 = (function hyperfiddle$electric$impl$io$decode_numbers_$___GT_t_hyperfiddle$electric$impl$io29840(b__$1,meta29841){
return (new hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io29840(b__$1,meta29841));
});

}

return (new hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io29840(b,cljs.core.PersistentArrayMap.EMPTY));
})()
);
});
var _BANG_cache_30251 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write-handlers","write-handlers",-2097288911),hyperfiddle.electric.impl.io._STAR_write_handlers_STAR_,new cljs.core.Keyword(null,"writer","writer",-277568236),null], null));
hyperfiddle.electric.impl.io.transit_writer = (function hyperfiddle$electric$impl$io$transit_writer(){
return new cljs.core.Keyword(null,"writer","writer",-277568236).cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_cache_30251,(function (p__29853){
var map__29854 = p__29853;
var map__29854__$1 = cljs.core.__destructure_map(map__29854);
var cache = map__29854__$1;
var write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29854__$1,new cljs.core.Keyword(null,"write-handlers","write-handlers",-2097288911));
var writer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29854__$1,new cljs.core.Keyword(null,"writer","writer",-277568236));
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
var _BANG_cache_30252 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-handlers","read-handlers",2109459315),hyperfiddle.electric.impl.io._STAR_read_handlers_STAR_,new cljs.core.Keyword(null,"reader","reader",169660853),null], null));
hyperfiddle.electric.impl.io.transit_reader = (function hyperfiddle$electric$impl$io$transit_reader(){
return new cljs.core.Keyword(null,"reader","reader",169660853).cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_cache_30252,(function (p__29859){
var map__29860 = p__29859;
var map__29860__$1 = cljs.core.__destructure_map(map__29860);
var cache = map__29860__$1;
var read_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29860__$1,new cljs.core.Keyword(null,"read-handlers","read-handlers",2109459315));
var reader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29860__$1,new cljs.core.Keyword(null,"reader","reader",169660853));
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
try{var G__29862 = hyperfiddle.electric.impl.io.decode(x);
console.debug("\uD83D\uDD3D",G__29862);

return G__29862;
}catch (e29861){var t = e29861;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("Failed to decode",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),x], null),t);
}});
hyperfiddle.electric.impl.io.chunk_size = ((65536) >> (2));
hyperfiddle.electric.impl.io.message_reader = (function hyperfiddle$electric$impl$io$message_reader(_QMARK_read){

return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr29866_block_6 = (function hyperfiddle$electric$impl$io$message_reader_$_cr29866_block_6(cr29866_state){
try{var cr29866_place_22 = (cr29866_state[(7)]);
var cr29866_place_30 = missionary.core.unpark();
var cr29866_place_31 = cr29866_place_22;
(cr29866_state[(0)] = cr29866_block_4);

(cr29866_state[(7)] = null);

(cr29866_state[(6)] = cr29866_place_30);

(cr29866_state[(4)] = cr29866_place_31);

return cr29866_state;
}catch (e29955){var cr29866_exception = e29955;
(cr29866_state[(0)] = null);

(cr29866_state[(1)] = null);

(cr29866_state[(3)] = null);

(cr29866_state[(4)] = null);

(cr29866_state[(2)] = null);

(cr29866_state[(7)] = null);

(cr29866_state[(5)] = null);

(cr29866_state[(6)] = null);

throw cr29866_exception;
}});
var cr29866_block_7 = (function hyperfiddle$electric$impl$io$message_reader_$_cr29866_block_7(cr29866_state){
try{var cr29866_place_22 = (cr29866_state[(7)]);
var cr29866_place_32 = cljs.core.persistent_BANG_;
var cr29866_place_33 = cr29866_place_22;
var cr29866_place_34 = (function (){var G__29959 = cr29866_place_33;
var fexpr__29958 = cr29866_place_32;
return (fexpr__29958.cljs$core$IFn$_invoke$arity$1 ? fexpr__29958.cljs$core$IFn$_invoke$arity$1(G__29959) : fexpr__29958.call(null,G__29959));
})();
(cr29866_state[(0)] = cr29866_block_8);

(cr29866_state[(7)] = null);

(cr29866_state[(4)] = cr29866_place_34);

return cr29866_state;
}catch (e29957){var cr29866_exception = e29957;
(cr29866_state[(0)] = null);

(cr29866_state[(1)] = null);

(cr29866_state[(3)] = null);

(cr29866_state[(4)] = null);

(cr29866_state[(2)] = null);

(cr29866_state[(7)] = null);

(cr29866_state[(5)] = null);

throw cr29866_exception;
}});
var cr29866_block_0 = (function hyperfiddle$electric$impl$io$message_reader_$_cr29866_block_0(cr29866_state){
try{var cr29866_place_0 = cljs.core.transient$;
var cr29866_place_1 = cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IVector], null));
var cr29866_place_2 = (function (){var G__29963 = cr29866_place_1;
var fexpr__29962 = cr29866_place_0;
return (fexpr__29962.cljs$core$IFn$_invoke$arity$1 ? fexpr__29962.cljs$core$IFn$_invoke$arity$1(G__29963) : fexpr__29962.call(null,G__29963));
})();
(cr29866_state[(0)] = cr29866_block_1);

(cr29866_state[(1)] = cr29866_place_2);

return cr29866_state;
}catch (e29961){var cr29866_exception = e29961;
(cr29866_state[(0)] = null);

throw cr29866_exception;
}});
var cr29866_block_5 = (function hyperfiddle$electric$impl$io$message_reader_$_cr29866_block_5(cr29866_state){
try{var cr29866_place_29 = _QMARK_read;
(cr29866_state[(0)] = cr29866_block_6);

return missionary.core.park(cr29866_place_29);
}catch (e29964){var cr29866_exception = e29964;
(cr29866_state[(0)] = null);

(cr29866_state[(1)] = null);

(cr29866_state[(3)] = null);

(cr29866_state[(4)] = null);

(cr29866_state[(2)] = null);

(cr29866_state[(7)] = null);

(cr29866_state[(5)] = null);

(cr29866_state[(6)] = null);

throw cr29866_exception;
}});
var cr29866_block_4 = (function hyperfiddle$electric$impl$io$message_reader_$_cr29866_block_4(cr29866_state){
try{var cr29866_place_14 = (cr29866_state[(4)]);
var cr29866_place_11 = (cr29866_state[(6)]);
var cr29866_place_15 = hyperfiddle.electric.impl.io.decode_numbers;
var cr29866_place_16 = cr29866_place_11;
var cr29866_place_17 = (function (){var G__29975 = cr29866_place_16;
var fexpr__29974 = cr29866_place_15;
return (fexpr__29974.cljs$core$IFn$_invoke$arity$1 ? fexpr__29974.cljs$core$IFn$_invoke$arity$1(G__29975) : fexpr__29974.call(null,G__29975));
})();
var cr29866_place_18 = cljs.core.reduce;
var cr29866_place_19 = cljs.core.conj_BANG_;
var cr29866_place_20 = cr29866_place_14;
var cr29866_place_21 = cr29866_place_17;
var cr29866_place_22 = (function (){var G__29977 = cr29866_place_19;
var G__29978 = cr29866_place_20;
var G__29979 = cr29866_place_21;
var fexpr__29976 = cr29866_place_18;
return (fexpr__29976.cljs$core$IFn$_invoke$arity$3 ? fexpr__29976.cljs$core$IFn$_invoke$arity$3(G__29977,G__29978,G__29979) : fexpr__29976.call(null,G__29977,G__29978,G__29979));
})();
var cr29866_place_23 = cljs.core.count;
var cr29866_place_24 = cr29866_place_17;
var cr29866_place_25 = (function (){var G__29981 = cr29866_place_24;
var fexpr__29980 = cr29866_place_23;
return (fexpr__29980.cljs$core$IFn$_invoke$arity$1 ? fexpr__29980.cljs$core$IFn$_invoke$arity$1(G__29981) : fexpr__29980.call(null,G__29981));
})();
var cr29866_place_26 = hyperfiddle.electric.impl.io.chunk_size;
var cr29866_place_27 = (cr29866_place_25 < cr29866_place_26);
var cr29866_place_28 = null;
if(cr29866_place_27){
(cr29866_state[(0)] = cr29866_block_7);

(cr29866_state[(4)] = null);

(cr29866_state[(6)] = null);

(cr29866_state[(4)] = cr29866_place_28);

(cr29866_state[(7)] = cr29866_place_22);

return cr29866_state;
} else {
(cr29866_state[(0)] = cr29866_block_5);

(cr29866_state[(7)] = cr29866_place_22);

return cr29866_state;
}
}catch (e29966){var cr29866_exception = e29966;
(cr29866_state[(0)] = null);

(cr29866_state[(1)] = null);

(cr29866_state[(3)] = null);

(cr29866_state[(4)] = null);

(cr29866_state[(2)] = null);

(cr29866_state[(5)] = null);

(cr29866_state[(6)] = null);

throw cr29866_exception;
}});
var cr29866_block_9 = (function hyperfiddle$electric$impl$io$message_reader_$_cr29866_block_9(cr29866_state){
try{var cr29866_place_4 = (cr29866_state[(3)]);
var cr29866_place_2 = (cr29866_state[(1)]);
var cr29866_place_37 = cljs.core.conj_BANG_;
var cr29866_place_38 = cr29866_place_2;
var cr29866_place_39 = hyperfiddle.electric.impl.io.decode_str;
var cr29866_place_40 = cr29866_place_4;
var cr29866_place_41 = (function (){var G__29985 = cr29866_place_40;
var fexpr__29984 = cr29866_place_39;
return (fexpr__29984.cljs$core$IFn$_invoke$arity$1 ? fexpr__29984.cljs$core$IFn$_invoke$arity$1(G__29985) : fexpr__29984.call(null,G__29985));
})();
var cr29866_place_42 = (function (){var G__29988 = cr29866_place_38;
var G__29989 = cr29866_place_41;
var fexpr__29987 = cr29866_place_37;
return (fexpr__29987.cljs$core$IFn$_invoke$arity$2 ? fexpr__29987.cljs$core$IFn$_invoke$arity$2(G__29988,G__29989) : fexpr__29987.call(null,G__29988,G__29989));
})();
(cr29866_state[(0)] = cr29866_block_1);

(cr29866_state[(3)] = null);

(cr29866_state[(1)] = cr29866_place_42);

return cr29866_state;
}catch (e29983){var cr29866_exception = e29983;
(cr29866_state[(0)] = null);

(cr29866_state[(3)] = null);

(cr29866_state[(1)] = null);

throw cr29866_exception;
}});
var cr29866_block_10 = (function hyperfiddle$electric$impl$io$message_reader_$_cr29866_block_10(cr29866_state){
try{var cr29866_place_7 = (cr29866_state[(2)]);
(cr29866_state[(0)] = null);

(cr29866_state[(2)] = null);

return cr29866_place_7;
}catch (e29990){var cr29866_exception = e29990;
(cr29866_state[(0)] = null);

(cr29866_state[(2)] = null);

throw cr29866_exception;
}});
var cr29866_block_3 = (function hyperfiddle$electric$impl$io$message_reader_$_cr29866_block_3(cr29866_state){
try{var cr29866_place_4 = (cr29866_state[(3)]);
var cr29866_place_2 = (cr29866_state[(1)]);
var cr29866_place_8 = cljs.core.persistent_BANG_;
var cr29866_place_9 = cljs.core.conj_BANG_;
var cr29866_place_10 = cr29866_place_2;
var cr29866_place_11 = cr29866_place_4;
var cr29866_place_12 = cljs.core.transient$;
var cr29866_place_13 = cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IVector], null));
var cr29866_place_14 = (function (){var G__29994 = cr29866_place_13;
var fexpr__29993 = cr29866_place_12;
return (fexpr__29993.cljs$core$IFn$_invoke$arity$1 ? fexpr__29993.cljs$core$IFn$_invoke$arity$1(G__29994) : fexpr__29993.call(null,G__29994));
})();
(cr29866_state[(0)] = cr29866_block_4);

(cr29866_state[(3)] = null);

(cr29866_state[(1)] = null);

(cr29866_state[(1)] = cr29866_place_8);

(cr29866_state[(5)] = cr29866_place_9);

(cr29866_state[(3)] = cr29866_place_10);

(cr29866_state[(6)] = cr29866_place_11);

(cr29866_state[(4)] = cr29866_place_14);

return cr29866_state;
}catch (e29991){var cr29866_exception = e29991;
(cr29866_state[(0)] = null);

(cr29866_state[(2)] = null);

(cr29866_state[(3)] = null);

(cr29866_state[(1)] = null);

throw cr29866_exception;
}});
var cr29866_block_8 = (function hyperfiddle$electric$impl$io$message_reader_$_cr29866_block_8(cr29866_state){
try{var cr29866_place_8 = (cr29866_state[(1)]);
var cr29866_place_10 = (cr29866_state[(3)]);
var cr29866_place_28 = (cr29866_state[(4)]);
var cr29866_place_9 = (cr29866_state[(5)]);
var cr29866_place_35 = (function (){var G__29997 = cr29866_place_10;
var G__29998 = cr29866_place_28;
var fexpr__29996 = cr29866_place_9;
return (fexpr__29996.cljs$core$IFn$_invoke$arity$2 ? fexpr__29996.cljs$core$IFn$_invoke$arity$2(G__29997,G__29998) : fexpr__29996.call(null,G__29997,G__29998));
})();
var cr29866_place_36 = (function (){var G__30000 = cr29866_place_35;
var fexpr__29999 = cr29866_place_8;
return (fexpr__29999.cljs$core$IFn$_invoke$arity$1 ? fexpr__29999.cljs$core$IFn$_invoke$arity$1(G__30000) : fexpr__29999.call(null,G__30000));
})();
(cr29866_state[(0)] = cr29866_block_10);

(cr29866_state[(1)] = null);

(cr29866_state[(3)] = null);

(cr29866_state[(4)] = null);

(cr29866_state[(5)] = null);

(cr29866_state[(2)] = cr29866_place_36);

return cr29866_state;
}catch (e29995){var cr29866_exception = e29995;
(cr29866_state[(0)] = null);

(cr29866_state[(1)] = null);

(cr29866_state[(3)] = null);

(cr29866_state[(4)] = null);

(cr29866_state[(2)] = null);

(cr29866_state[(5)] = null);

throw cr29866_exception;
}});
var cr29866_block_1 = (function hyperfiddle$electric$impl$io$message_reader_$_cr29866_block_1(cr29866_state){
try{var cr29866_place_3 = _QMARK_read;
(cr29866_state[(0)] = cr29866_block_2);

return missionary.core.park(cr29866_place_3);
}catch (e30002){var cr29866_exception = e30002;
(cr29866_state[(0)] = null);

(cr29866_state[(1)] = null);

throw cr29866_exception;
}});
var cr29866_block_2 = (function hyperfiddle$electric$impl$io$message_reader_$_cr29866_block_2(cr29866_state){
try{var cr29866_place_4 = missionary.core.unpark();
var cr29866_place_5 = cr29866_place_4;
var cr29866_place_6 = typeof cr29866_place_5 === 'string';
var cr29866_place_7 = null;
if(cr29866_place_6){
(cr29866_state[(0)] = cr29866_block_9);

(cr29866_state[(3)] = cr29866_place_4);

return cr29866_state;
} else {
(cr29866_state[(0)] = cr29866_block_3);

(cr29866_state[(3)] = cr29866_place_4);

(cr29866_state[(2)] = cr29866_place_7);

return cr29866_state;
}
}catch (e30009){var cr29866_exception = e30009;
(cr29866_state[(0)] = null);

(cr29866_state[(1)] = null);

throw cr29866_exception;
}});
return cloroutine.impl.coroutine((function (){var G__30011 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((8));
(G__30011[(0)] = cr29866_block_0);

return G__30011;
})());
})(),missionary.core.sp_run);
});
/**
 * Returns a function taking an Electric message and returning a task writing it as individual frames using provided
 * function. Might cut a message into chunks if its size would exceed the server payload limit.
 * An empty message (0b) is written to notify the end of frame.
 */
hyperfiddle.electric.impl.io.message_writer = (function hyperfiddle$electric$impl$io$message_writer(write){
return (function (p1__30012_SHARP_){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr30014_block_11 = (function hyperfiddle$electric$impl$io$message_writer_$_cr30014_block_11(cr30014_state){
try{var cr30014_place_48 = (cr30014_state[(2)]);
var cr30014_place_62 = hyperfiddle.electric.impl.io.encode_numbers;
var cr30014_place_63 = cljs.core.subvec;
var cr30014_place_64 = cr30014_place_48;
var cr30014_place_65 = (0);
var cr30014_place_66 = hyperfiddle.electric.impl.io.chunk_size;
var cr30014_place_67 = (function (){var G__30126 = cr30014_place_64;
var G__30127 = cr30014_place_65;
var G__30128 = cr30014_place_66;
var fexpr__30125 = cr30014_place_63;
return (fexpr__30125.cljs$core$IFn$_invoke$arity$3 ? fexpr__30125.cljs$core$IFn$_invoke$arity$3(G__30126,G__30127,G__30128) : fexpr__30125.call(null,G__30126,G__30127,G__30128));
})();
var cr30014_place_68 = (function (){var G__30130 = cr30014_place_67;
var fexpr__30129 = cr30014_place_62;
return (fexpr__30129.cljs$core$IFn$_invoke$arity$1 ? fexpr__30129.cljs$core$IFn$_invoke$arity$1(G__30130) : fexpr__30129.call(null,G__30130));
})();
var cr30014_place_69 = write;
var cr30014_place_70 = cr30014_place_68;
var cr30014_place_71 = (function (){var G__30132 = cr30014_place_70;
var fexpr__30131 = cr30014_place_69;
return (fexpr__30131.cljs$core$IFn$_invoke$arity$1 ? fexpr__30131.cljs$core$IFn$_invoke$arity$1(G__30132) : fexpr__30131.call(null,G__30132));
})();
(cr30014_state[(0)] = cr30014_block_12);

return missionary.core.park(cr30014_place_71);
}catch (e30124){var cr30014_exception = e30124;
(cr30014_state[(0)] = null);

(cr30014_state[(2)] = null);

(cr30014_state[(1)] = null);

throw cr30014_exception;
}});
var cr30014_block_5 = (function hyperfiddle$electric$impl$io$message_writer_$_cr30014_block_5(cr30014_state){
try{var cr30014_place_27 = (cr30014_state[(3)]);
var cr30014_place_26 = (cr30014_state[(4)]);
var cr30014_place_40 = (cljs.core.truth_(cr30014_place_27)?(function(){throw cr30014_place_26})():cr30014_place_26);
var cr30014_place_41 = write;
var cr30014_place_42 = cr30014_place_40;
var cr30014_place_43 = (function (){var G__30143 = cr30014_place_42;
var fexpr__30142 = cr30014_place_41;
return (fexpr__30142.cljs$core$IFn$_invoke$arity$1 ? fexpr__30142.cljs$core$IFn$_invoke$arity$1(G__30143) : fexpr__30142.call(null,G__30143));
})();
(cr30014_state[(0)] = cr30014_block_6);

(cr30014_state[(3)] = null);

(cr30014_state[(4)] = null);

return missionary.core.park(cr30014_place_43);
}catch (e30134){var cr30014_exception = e30134;
(cr30014_state[(0)] = null);

(cr30014_state[(3)] = null);

(cr30014_state[(1)] = null);

(cr30014_state[(4)] = null);

(cr30014_state[(5)] = null);

throw cr30014_exception;
}});
var cr30014_block_14 = (function hyperfiddle$electric$impl$io$message_writer_$_cr30014_block_14(cr30014_state){
try{var cr30014_place_9 = (cr30014_state[(1)]);
(cr30014_state[(0)] = null);

(cr30014_state[(1)] = null);

return cr30014_place_9;
}catch (e30144){var cr30014_exception = e30144;
(cr30014_state[(0)] = null);

(cr30014_state[(1)] = null);

throw cr30014_exception;
}});
var cr30014_block_2 = (function hyperfiddle$electric$impl$io$message_writer_$_cr30014_block_2(cr30014_state){
try{var cr30014_place_5 = (cr30014_state[(2)]);
var cr30014_place_10 = cr30014_place_5;
var cr30014_place_11 = cljs.core.seq;
var cr30014_place_12 = cr30014_place_10;
var cr30014_place_13 = (function (){var G__30148 = cr30014_place_12;
var fexpr__30147 = cr30014_place_11;
return (fexpr__30147.cljs$core$IFn$_invoke$arity$1 ? fexpr__30147.cljs$core$IFn$_invoke$arity$1(G__30148) : fexpr__30147.call(null,G__30148));
})();
var cr30014_place_14 = cljs.core.first;
var cr30014_place_15 = cr30014_place_13;
var cr30014_place_16 = (function (){var G__30150 = cr30014_place_15;
var fexpr__30149 = cr30014_place_14;
return (fexpr__30149.cljs$core$IFn$_invoke$arity$1 ? fexpr__30149.cljs$core$IFn$_invoke$arity$1(G__30150) : fexpr__30149.call(null,G__30150));
})();
var cr30014_place_17 = cljs.core.next;
var cr30014_place_18 = cr30014_place_13;
var cr30014_place_19 = (function (){var G__30152 = cr30014_place_18;
var fexpr__30151 = cr30014_place_17;
return (fexpr__30151.cljs$core$IFn$_invoke$arity$1 ? fexpr__30151.cljs$core$IFn$_invoke$arity$1(G__30152) : fexpr__30151.call(null,G__30152));
})();
var cr30014_place_20 = cr30014_place_16;
var cr30014_place_21 = cr30014_place_19;
var cr30014_place_22 = console.debug;
var cr30014_place_23 = "\uD83D\uDD3C";
var cr30014_place_24 = cr30014_place_20;
var cr30014_place_25 = (function (){var G__30154 = cr30014_place_23;
var G__30155 = cr30014_place_24;
var fexpr__30153 = cr30014_place_22;
return (fexpr__30153.cljs$core$IFn$_invoke$arity$2 ? fexpr__30153.cljs$core$IFn$_invoke$arity$2(G__30154,G__30155) : fexpr__30153.call(null,G__30154,G__30155));
})();
var cr30014_place_26 = null;
var cr30014_place_27 = false;
(cr30014_state[(0)] = cr30014_block_3);

(cr30014_state[(2)] = null);

(cr30014_state[(2)] = cr30014_place_20);

(cr30014_state[(3)] = cr30014_place_27);

(cr30014_state[(4)] = cr30014_place_26);

(cr30014_state[(5)] = cr30014_place_21);

return cr30014_state;
}catch (e30145){var cr30014_exception = e30145;
(cr30014_state[(0)] = null);

(cr30014_state[(1)] = null);

(cr30014_state[(2)] = null);

throw cr30014_exception;
}});
var cr30014_block_0 = (function hyperfiddle$electric$impl$io$message_writer_$_cr30014_block_0(cr30014_state){
try{var cr30014_place_0 = cljs.core.seq;
var cr30014_place_1 = cljs.core.pop;
var cr30014_place_2 = p1__30012_SHARP_;
var cr30014_place_3 = (function (){var G__30159 = cr30014_place_2;
var fexpr__30158 = cr30014_place_1;
return (fexpr__30158.cljs$core$IFn$_invoke$arity$1 ? fexpr__30158.cljs$core$IFn$_invoke$arity$1(G__30159) : fexpr__30158.call(null,G__30159));
})();
var cr30014_place_4 = (function (){var G__30161 = cr30014_place_3;
var fexpr__30160 = cr30014_place_0;
return (fexpr__30160.cljs$core$IFn$_invoke$arity$1 ? fexpr__30160.cljs$core$IFn$_invoke$arity$1(G__30161) : fexpr__30160.call(null,G__30161));
})();
(cr30014_state[(0)] = cr30014_block_1);

(cr30014_state[(1)] = cr30014_place_4);

return cr30014_state;
}catch (e30157){var cr30014_exception = e30157;
(cr30014_state[(0)] = null);

throw cr30014_exception;
}});
var cr30014_block_4 = (function hyperfiddle$electric$impl$io$message_writer_$_cr30014_block_4(cr30014_state){
try{var cr30014_place_20 = (cr30014_state[(2)]);
var cr30014_place_26 = (cr30014_state[(4)]);
var cr30014_place_31 = cr30014_place_26;
var cr30014_place_32 = cljs.core.ex_info;
var cr30014_place_33 = "Failed to encode";
var cr30014_place_34 = new cljs.core.Keyword(null,"value","value",305978217);
var cr30014_place_35 = cr30014_place_20;
var cr30014_place_36 = cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([cr30014_place_34,cr30014_place_35]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr30014_place_37 = cr30014_place_31;
var cr30014_place_38 = (function (){var G__30165 = cr30014_place_33;
var G__30166 = cr30014_place_36;
var G__30167 = cr30014_place_37;
var fexpr__30164 = cr30014_place_32;
return (fexpr__30164.cljs$core$IFn$_invoke$arity$3 ? fexpr__30164.cljs$core$IFn$_invoke$arity$3(G__30165,G__30166,G__30167) : fexpr__30164.call(null,G__30165,G__30166,G__30167));
})();
var cr30014_place_39 = (function(){throw cr30014_place_38})();
(cr30014_state[(0)] = null);

(cr30014_state[(2)] = null);

(cr30014_state[(3)] = null);

(cr30014_state[(1)] = null);

(cr30014_state[(4)] = null);

(cr30014_state[(5)] = null);

return null;
}catch (e30163){var cr30014_exception = e30163;
(cr30014_state[(0)] = cr30014_block_5);

(cr30014_state[(2)] = null);

(cr30014_state[(3)] = true);

(cr30014_state[(4)] = cr30014_exception);

return cr30014_state;
}});
var cr30014_block_9 = (function hyperfiddle$electric$impl$io$message_writer_$_cr30014_block_9(cr30014_state){
try{var cr30014_place_48 = (cr30014_state[(2)]);
var cr30014_place_55 = hyperfiddle.electric.impl.io.encode_numbers;
var cr30014_place_56 = cr30014_place_48;
var cr30014_place_57 = (function (){var G__30170 = cr30014_place_56;
var fexpr__30169 = cr30014_place_55;
return (fexpr__30169.cljs$core$IFn$_invoke$arity$1 ? fexpr__30169.cljs$core$IFn$_invoke$arity$1(G__30170) : fexpr__30169.call(null,G__30170));
})();
var cr30014_place_58 = write;
var cr30014_place_59 = cr30014_place_57;
var cr30014_place_60 = (function (){var G__30172 = cr30014_place_59;
var fexpr__30171 = cr30014_place_58;
return (fexpr__30171.cljs$core$IFn$_invoke$arity$1 ? fexpr__30171.cljs$core$IFn$_invoke$arity$1(G__30172) : fexpr__30171.call(null,G__30172));
})();
(cr30014_state[(0)] = cr30014_block_10);

(cr30014_state[(2)] = null);

return missionary.core.park(cr30014_place_60);
}catch (e30168){var cr30014_exception = e30168;
(cr30014_state[(0)] = null);

(cr30014_state[(3)] = null);

(cr30014_state[(2)] = null);

(cr30014_state[(1)] = null);

throw cr30014_exception;
}});
var cr30014_block_12 = (function hyperfiddle$electric$impl$io$message_writer_$_cr30014_block_12(cr30014_state){
try{var cr30014_place_48 = (cr30014_state[(2)]);
var cr30014_place_72 = missionary.core.unpark();
var cr30014_place_73 = cljs.core.subvec;
var cr30014_place_74 = cr30014_place_48;
var cr30014_place_75 = hyperfiddle.electric.impl.io.chunk_size;
var cr30014_place_76 = (function (){var G__30185 = cr30014_place_74;
var G__30186 = cr30014_place_75;
var fexpr__30184 = cr30014_place_73;
return (fexpr__30184.cljs$core$IFn$_invoke$arity$2 ? fexpr__30184.cljs$core$IFn$_invoke$arity$2(G__30185,G__30186) : fexpr__30184.call(null,G__30185,G__30186));
})();
(cr30014_state[(0)] = cr30014_block_8);

(cr30014_state[(2)] = cr30014_place_76);

return cr30014_state;
}catch (e30181){var cr30014_exception = e30181;
(cr30014_state[(0)] = null);

(cr30014_state[(2)] = null);

(cr30014_state[(1)] = null);

throw cr30014_exception;
}});
var cr30014_block_7 = (function hyperfiddle$electric$impl$io$message_writer_$_cr30014_block_7(cr30014_state){
try{var cr30014_place_46 = cljs.core.peek;
var cr30014_place_47 = p1__30012_SHARP_;
var cr30014_place_48 = (function (){var G__30190 = cr30014_place_47;
var fexpr__30189 = cr30014_place_46;
return (fexpr__30189.cljs$core$IFn$_invoke$arity$1 ? fexpr__30189.cljs$core$IFn$_invoke$arity$1(G__30190) : fexpr__30189.call(null,G__30190));
})();
(cr30014_state[(0)] = cr30014_block_8);

(cr30014_state[(2)] = cr30014_place_48);

return cr30014_state;
}catch (e30187){var cr30014_exception = e30187;
(cr30014_state[(0)] = null);

(cr30014_state[(1)] = null);

throw cr30014_exception;
}});
var cr30014_block_1 = (function hyperfiddle$electric$impl$io$message_writer_$_cr30014_block_1(cr30014_state){
try{var cr30014_place_4 = (cr30014_state[(1)]);
var cr30014_place_5 = cr30014_place_4;
var cr30014_place_6 = cr30014_place_5;
var cr30014_place_7 = null;
var cr30014_place_8 = (cr30014_place_6 == cr30014_place_7);
var cr30014_place_9 = null;
if(cr30014_place_8){
(cr30014_state[(0)] = cr30014_block_7);

(cr30014_state[(1)] = null);

(cr30014_state[(1)] = cr30014_place_9);

return cr30014_state;
} else {
(cr30014_state[(0)] = cr30014_block_2);

(cr30014_state[(2)] = cr30014_place_5);

return cr30014_state;
}
}catch (e30191){var cr30014_exception = e30191;
(cr30014_state[(0)] = null);

(cr30014_state[(1)] = null);

throw cr30014_exception;
}});
var cr30014_block_8 = (function hyperfiddle$electric$impl$io$message_writer_$_cr30014_block_8(cr30014_state){
try{var cr30014_place_48 = (cr30014_state[(2)]);
var cr30014_place_49 = cljs.core.count;
var cr30014_place_50 = cr30014_place_48;
var cr30014_place_51 = (function (){var G__30201 = cr30014_place_50;
var fexpr__30200 = cr30014_place_49;
return (fexpr__30200.cljs$core$IFn$_invoke$arity$1 ? fexpr__30200.cljs$core$IFn$_invoke$arity$1(G__30201) : fexpr__30200.call(null,G__30201));
})();
var cr30014_place_52 = hyperfiddle.electric.impl.io.chunk_size;
var cr30014_place_53 = (cr30014_place_51 >= cr30014_place_52);
var cr30014_place_54 = null;
if(cr30014_place_53){
(cr30014_state[(0)] = cr30014_block_11);

return cr30014_state;
} else {
(cr30014_state[(0)] = cr30014_block_9);

(cr30014_state[(3)] = cr30014_place_54);

return cr30014_state;
}
}catch (e30199){var cr30014_exception = e30199;
(cr30014_state[(0)] = null);

(cr30014_state[(2)] = null);

(cr30014_state[(1)] = null);

throw cr30014_exception;
}});
var cr30014_block_13 = (function hyperfiddle$electric$impl$io$message_writer_$_cr30014_block_13(cr30014_state){
try{var cr30014_place_54 = (cr30014_state[(3)]);
(cr30014_state[(0)] = cr30014_block_14);

(cr30014_state[(3)] = null);

(cr30014_state[(1)] = cr30014_place_54);

return cr30014_state;
}catch (e30202){var cr30014_exception = e30202;
(cr30014_state[(0)] = null);

(cr30014_state[(3)] = null);

(cr30014_state[(1)] = null);

throw cr30014_exception;
}});
var cr30014_block_10 = (function hyperfiddle$electric$impl$io$message_writer_$_cr30014_block_10(cr30014_state){
try{var cr30014_place_61 = missionary.core.unpark();
(cr30014_state[(0)] = cr30014_block_13);

(cr30014_state[(3)] = cr30014_place_61);

return cr30014_state;
}catch (e30204){var cr30014_exception = e30204;
(cr30014_state[(0)] = null);

(cr30014_state[(3)] = null);

(cr30014_state[(1)] = null);

throw cr30014_exception;
}});
var cr30014_block_6 = (function hyperfiddle$electric$impl$io$message_writer_$_cr30014_block_6(cr30014_state){
try{var cr30014_place_21 = (cr30014_state[(5)]);
var cr30014_place_44 = missionary.core.unpark();
var cr30014_place_45 = cr30014_place_21;
(cr30014_state[(0)] = cr30014_block_1);

(cr30014_state[(5)] = null);

(cr30014_state[(1)] = cr30014_place_45);

return cr30014_state;
}catch (e30205){var cr30014_exception = e30205;
(cr30014_state[(0)] = null);

(cr30014_state[(1)] = null);

(cr30014_state[(5)] = null);

throw cr30014_exception;
}});
var cr30014_block_3 = (function hyperfiddle$electric$impl$io$message_writer_$_cr30014_block_3(cr30014_state){
try{var cr30014_place_20 = (cr30014_state[(2)]);
var cr30014_place_28 = hyperfiddle.electric.impl.io.encode;
var cr30014_place_29 = cr30014_place_20;
var cr30014_place_30 = (function (){var G__30209 = cr30014_place_29;
var fexpr__30208 = cr30014_place_28;
return (fexpr__30208.cljs$core$IFn$_invoke$arity$1 ? fexpr__30208.cljs$core$IFn$_invoke$arity$1(G__30209) : fexpr__30208.call(null,G__30209));
})();
(cr30014_state[(0)] = cr30014_block_5);

(cr30014_state[(2)] = null);

(cr30014_state[(4)] = cr30014_place_30);

return cr30014_state;
}catch (e30207){var cr30014_exception = e30207;
(cr30014_state[(0)] = cr30014_block_4);

(cr30014_state[(4)] = cr30014_exception);

return cr30014_state;
}});
return cloroutine.impl.coroutine((function (){var G__30211 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((6));
(G__30211[(0)] = cr30014_block_0);

return G__30211;
})());
})(),missionary.core.sp_run);
});
});
/**
 * A transducer partitioning a sequence of network messages into Electric events.
 */
hyperfiddle.electric.impl.io.decoder = (function hyperfiddle$electric$impl$io$decoder(rf){
var data = (function (){var G__30212 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
(G__30212[(0)] = cljs.core.PersistentVector.EMPTY);

(G__30212[(1)] = cljs.core.PersistentVector.EMPTY);

return G__30212;
})();
return (function() {
var G__30329 = null;
var G__30329__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__30329__1 = (function (r){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentVector.EMPTY,(data[(0)]),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(data[(1)])], 0))){
} else {
throw (new Error("Assert failed: (= [] (aget data 0) (aget data 1))"));
}

return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(r) : rf.call(null,r));
});
var G__30329__2 = (function (r,x){
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
G__30329 = function(r,x){
switch(arguments.length){
case 0:
return G__30329__0.call(this);
case 1:
return G__30329__1.call(this,r);
case 2:
return G__30329__2.call(this,r,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__30329.cljs$core$IFn$_invoke$arity$0 = G__30329__0;
G__30329.cljs$core$IFn$_invoke$arity$1 = G__30329__1;
G__30329.cljs$core$IFn$_invoke$arity$2 = G__30329__2;
return G__30329;
})()
});
/**
 * A transducer expanding Electric events to a sequence of network messages.
 */
hyperfiddle.electric.impl.io.encoder = (function hyperfiddle$electric$impl$io$encoder(rf){
return (function() {
var G__30340 = null;
var G__30340__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__30340__1 = (function (r){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(r) : rf.call(null,r));
});
var G__30340__2 = (function (r,x){
var r__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,r,cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.io.encode),cljs.core.pop(x)], 0)));
var r__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,r__$1,cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.partition_all.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.io.chunk_size),cljs.core.map.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.io.encode_numbers),cljs.core.peek(x)], 0)));
var G__30221 = cljs.core.mod(cljs.core.count(cljs.core.peek(x)),hyperfiddle.electric.impl.io.chunk_size);
switch (G__30221) {
case (0):
var G__30222 = r__$2;
var G__30223 = hyperfiddle.electric.impl.io.encode_numbers(cljs.core.PersistentVector.EMPTY);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__30222,G__30223) : rf.call(null,G__30222,G__30223));

break;
default:
return r__$2;

}
});
G__30340 = function(r,x){
switch(arguments.length){
case 0:
return G__30340__0.call(this);
case 1:
return G__30340__1.call(this,r);
case 2:
return G__30340__2.call(this,r,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__30340.cljs$core$IFn$_invoke$arity$0 = G__30340__0;
G__30340.cljs$core$IFn$_invoke$arity$1 = G__30340__1;
G__30340.cljs$core$IFn$_invoke$arity$2 = G__30340__2;
return G__30340;
})()
});
hyperfiddle.electric.impl.io.foreach = (function hyperfiddle$electric$impl$io$foreach(var_args){
var G__30226 = arguments.length;
switch (G__30226) {
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
