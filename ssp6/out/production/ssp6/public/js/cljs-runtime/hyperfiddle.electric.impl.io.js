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
var G__42481 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(((size * (2)) + (1)));
var arr42482_42857 = G__42481;
(arr42482_42857[(size * (2))] = cljs.core.identity((0)));

return G__42481;
});
hyperfiddle.electric.impl.io.cache_add = (function hyperfiddle$electric$impl$io$cache_add(cache,k,v){
if(cljs.core.truth_((function (){var i = (0);
while(true){
if((i < (cljs.core.count(cache) - (1)))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,hyperfiddle.electric.impl.array_fields.get(cache,i))){
var arr42485_42858 = cache;
(arr42485_42858[(i + (1))] = cljs.core.identity(v));

return true;
} else {
var G__42859 = (i + (2));
i = G__42859;
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
var widx = hyperfiddle.electric.impl.array_fields.getswap(cache,(cljs.core.count(cache) - (1)),(function (p1__42484_SHARP_){
return cljs.core.mod((p1__42484_SHARP_ + (2)),(cljs.core.count(cache) - (1)));
}));
var arr42486 = cache;
(arr42486[widx] = cljs.core.identity(k));

return (arr42486[(widx + (1))] = cljs.core.identity(v));
}
});
hyperfiddle.electric.impl.io.cache_get = (function hyperfiddle$electric$impl$io$cache_get(cache,k){
var i = (0);
while(true){
if((i < (cljs.core.count(cache) - (1)))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,hyperfiddle.electric.impl.array_fields.get(cache,i))){
return hyperfiddle.electric.impl.array_fields.get(cache,(i + (1)));
} else {
var G__42860 = (i + (2));
i = G__42860;
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
var G__42861 = (i + (2));
var G__42862 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ac,hyperfiddle.electric.impl.array_fields.get(cache,i),hyperfiddle.electric.impl.array_fields.get(cache,(i + (1))));
i = G__42861;
ac = G__42862;
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
var temp__5808__auto___42863 = cljs.core.ex_cause(fi);
if((temp__5808__auto___42863 == null)){
} else {
var cause_42864 = temp__5808__auto___42863;
if((cause_42864 instanceof hyperfiddle.electric.FailureInfo)){
} else {
hyperfiddle.electric.impl.io.cache_add(hyperfiddle.electric.impl.io._BANG_ex_cache,id,cause_42864);
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
hyperfiddle.electric.impl.io.failure_reader = cognitect.transit.read_handler((function (p__42498){
var vec__42499 = p__42498;
var seq__42500 = cljs.core.seq(vec__42499);
var first__42501 = cljs.core.first(seq__42500);
var seq__42500__$1 = cljs.core.next(seq__42500);
var tag = first__42501;
var args = seq__42500__$1;
var G__42505 = tag;
var G__42505__$1 = (((G__42505 instanceof cljs.core.Keyword))?G__42505.fqn:null);
switch (G__42505__$1) {
case "exception":
var vec__42507 = args;
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42507,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42507,(1),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42507,(2),null);
return (new hyperfiddle.electric.Failure(hyperfiddle.electric.debug.ex_info_STAR_.cljs$core$IFn$_invoke$arity$4(message,data,id,null)));

break;
case "remote":
var vec__42511 = args;
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42511,(0),null);
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42505__$1)].join('')));

}
}));
hyperfiddle.electric.impl.io.read_opts = (function hyperfiddle$electric$impl$io$read_opts(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hyperfiddle.electric.impl.io._STAR_read_handlers_STAR_,new cljs.core.PersistentArrayMap(null, 1, ["failure",hyperfiddle.electric.impl.io.failure_reader], null)], 0))], null);
});
hyperfiddle.electric.impl.io.set_ints = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce_kv,(function (r,i,n){
var offset = (i << (2));
var G__42517 = r;
G__42517.setInt32(offset,n);

return G__42517;
}));
/**
 * Encode a control frame to a binary segment.
 */
hyperfiddle.electric.impl.io.encode_numbers = (function hyperfiddle$electric$impl$io$encode_numbers(xs){
var required = (cljs.core.count(xs) << (2));
var G__42520 = (new ArrayBuffer(required));
hyperfiddle.electric.impl.io.set_ints((new DataView(G__42520)),xs);

return G__42520;
});

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io42522 = (function (b,meta42523){
this.b = b;
this.meta42523 = meta42523;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io42522.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42524,meta42523__$1){
var self__ = this;
var _42524__$1 = this;
return (new hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io42522(self__.b,meta42523__$1));
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io42522.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42524){
var self__ = this;
var _42524__$1 = this;
return self__.meta42523;
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io42522.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,rf,r){
var self__ = this;
var ___$1 = this;
var l = self__.b.byteLength;
var v = (new DataView(self__.b));
var r__$1 = r;
var i = (0);
while(true){
if((i < l)){
var G__42871 = (function (){var G__42526 = r__$1;
var G__42527 = v.getInt32(i);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__42526,G__42527) : rf.call(null,G__42526,G__42527));
})();
var G__42872 = (i + (4));
r__$1 = G__42871;
i = G__42872;
continue;
} else {
return r__$1;
}
break;
}
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io42522.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"meta42523","meta42523",-2012638108,null)], null);
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io42522.cljs$lang$type = true);

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io42522.cljs$lang$ctorStr = "hyperfiddle.electric.impl.io/t_hyperfiddle$electric$impl$io42522");

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io42522.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.io/t_hyperfiddle$electric$impl$io42522");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.io/t_hyperfiddle$electric$impl$io42522.
 */
hyperfiddle.electric.impl.io.__GT_t_hyperfiddle$electric$impl$io42522 = (function hyperfiddle$electric$impl$io$__GT_t_hyperfiddle$electric$impl$io42522(b,meta42523){
return (new hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io42522(b,meta42523));
});


/**
 * Decode a control frame from a binary segment.
 */
hyperfiddle.electric.impl.io.decode_numbers = (function hyperfiddle$electric$impl$io$decode_numbers(b){
return cljs.core.vec((new hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io42522(b,cljs.core.PersistentArrayMap.EMPTY)));
});
var _BANG_cache_42873 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write-handlers","write-handlers",-2097288911),hyperfiddle.electric.impl.io._STAR_write_handlers_STAR_,new cljs.core.Keyword(null,"writer","writer",-277568236),null], null));
hyperfiddle.electric.impl.io.transit_writer = (function hyperfiddle$electric$impl$io$transit_writer(){
return new cljs.core.Keyword(null,"writer","writer",-277568236).cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_cache_42873,(function (p__42533){
var map__42534 = p__42533;
var map__42534__$1 = cljs.core.__destructure_map(map__42534);
var cache = map__42534__$1;
var write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42534__$1,new cljs.core.Keyword(null,"write-handlers","write-handlers",-2097288911));
var writer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42534__$1,new cljs.core.Keyword(null,"writer","writer",-277568236));
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
var _BANG_cache_42874 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-handlers","read-handlers",2109459315),hyperfiddle.electric.impl.io._STAR_read_handlers_STAR_,new cljs.core.Keyword(null,"reader","reader",169660853),null], null));
hyperfiddle.electric.impl.io.transit_reader = (function hyperfiddle$electric$impl$io$transit_reader(){
return new cljs.core.Keyword(null,"reader","reader",169660853).cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_cache_42874,(function (p__42536){
var map__42537 = p__42536;
var map__42537__$1 = cljs.core.__destructure_map(map__42537);
var cache = map__42537__$1;
var read_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42537__$1,new cljs.core.Keyword(null,"read-handlers","read-handlers",2109459315));
var reader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42537__$1,new cljs.core.Keyword(null,"reader","reader",169660853));
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
try{var G__42544 = hyperfiddle.electric.impl.io.decode(x);
console.debug("\uD83D\uDD3D",G__42544);

return G__42544;
}catch (e42543){var t = e42543;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("Failed to decode",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),x], null),t);
}});
hyperfiddle.electric.impl.io.chunk_size = ((65536) >> (2));
hyperfiddle.electric.impl.io.message_reader = (function hyperfiddle$electric$impl$io$message_reader(_QMARK_read){

return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr42551_block_7 = (function hyperfiddle$electric$impl$io$message_reader_$_cr42551_block_7(cr42551_state){
try{var cr42551_place_22 = (cr42551_state[(7)]);
var cr42551_place_32 = cljs.core.persistent_BANG_;
var cr42551_place_33 = cr42551_place_22;
var cr42551_place_34 = (function (){var G__42608 = cr42551_place_33;
var fexpr__42607 = cr42551_place_32;
return (fexpr__42607.cljs$core$IFn$_invoke$arity$1 ? fexpr__42607.cljs$core$IFn$_invoke$arity$1(G__42608) : fexpr__42607.call(null,G__42608));
})();
(cr42551_state[(0)] = cr42551_block_8);

(cr42551_state[(7)] = null);

(cr42551_state[(1)] = cr42551_place_34);

return cr42551_state;
}catch (e42605){var cr42551_exception = e42605;
(cr42551_state[(0)] = null);

(cr42551_state[(3)] = null);

(cr42551_state[(4)] = null);

(cr42551_state[(2)] = null);

(cr42551_state[(1)] = null);

(cr42551_state[(5)] = null);

(cr42551_state[(7)] = null);

throw cr42551_exception;
}});
var cr42551_block_5 = (function hyperfiddle$electric$impl$io$message_reader_$_cr42551_block_5(cr42551_state){
try{var cr42551_place_29 = _QMARK_read;
(cr42551_state[(0)] = cr42551_block_6);

return missionary.core.park(cr42551_place_29);
}catch (e42614){var cr42551_exception = e42614;
(cr42551_state[(0)] = null);

(cr42551_state[(1)] = null);

(cr42551_state[(3)] = null);

(cr42551_state[(4)] = null);

(cr42551_state[(2)] = null);

(cr42551_state[(5)] = null);

(cr42551_state[(6)] = null);

(cr42551_state[(7)] = null);

throw cr42551_exception;
}});
var cr42551_block_0 = (function hyperfiddle$electric$impl$io$message_reader_$_cr42551_block_0(cr42551_state){
try{var cr42551_place_0 = cljs.core.transient$;
var cr42551_place_1 = cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IVector], null));
var cr42551_place_2 = (function (){var G__42622 = cr42551_place_1;
var fexpr__42621 = cr42551_place_0;
return (fexpr__42621.cljs$core$IFn$_invoke$arity$1 ? fexpr__42621.cljs$core$IFn$_invoke$arity$1(G__42622) : fexpr__42621.call(null,G__42622));
})();
(cr42551_state[(0)] = cr42551_block_1);

(cr42551_state[(1)] = cr42551_place_2);

return cr42551_state;
}catch (e42619){var cr42551_exception = e42619;
(cr42551_state[(0)] = null);

throw cr42551_exception;
}});
var cr42551_block_10 = (function hyperfiddle$electric$impl$io$message_reader_$_cr42551_block_10(cr42551_state){
try{var cr42551_place_7 = (cr42551_state[(2)]);
(cr42551_state[(0)] = null);

(cr42551_state[(2)] = null);

return cr42551_place_7;
}catch (e42627){var cr42551_exception = e42627;
(cr42551_state[(0)] = null);

(cr42551_state[(2)] = null);

throw cr42551_exception;
}});
var cr42551_block_4 = (function hyperfiddle$electric$impl$io$message_reader_$_cr42551_block_4(cr42551_state){
try{var cr42551_place_11 = (cr42551_state[(1)]);
var cr42551_place_14 = (cr42551_state[(6)]);
var cr42551_place_15 = hyperfiddle.electric.impl.io.decode_numbers;
var cr42551_place_16 = cr42551_place_11;
var cr42551_place_17 = (function (){var G__42635 = cr42551_place_16;
var fexpr__42634 = cr42551_place_15;
return (fexpr__42634.cljs$core$IFn$_invoke$arity$1 ? fexpr__42634.cljs$core$IFn$_invoke$arity$1(G__42635) : fexpr__42634.call(null,G__42635));
})();
var cr42551_place_18 = cljs.core.reduce;
var cr42551_place_19 = cljs.core.conj_BANG_;
var cr42551_place_20 = cr42551_place_14;
var cr42551_place_21 = cr42551_place_17;
var cr42551_place_22 = (function (){var G__42639 = cr42551_place_19;
var G__42640 = cr42551_place_20;
var G__42641 = cr42551_place_21;
var fexpr__42637 = cr42551_place_18;
return (fexpr__42637.cljs$core$IFn$_invoke$arity$3 ? fexpr__42637.cljs$core$IFn$_invoke$arity$3(G__42639,G__42640,G__42641) : fexpr__42637.call(null,G__42639,G__42640,G__42641));
})();
var cr42551_place_23 = cljs.core.count;
var cr42551_place_24 = cr42551_place_17;
var cr42551_place_25 = (function (){var G__42647 = cr42551_place_24;
var fexpr__42646 = cr42551_place_23;
return (fexpr__42646.cljs$core$IFn$_invoke$arity$1 ? fexpr__42646.cljs$core$IFn$_invoke$arity$1(G__42647) : fexpr__42646.call(null,G__42647));
})();
var cr42551_place_26 = hyperfiddle.electric.impl.io.chunk_size;
var cr42551_place_27 = (cr42551_place_25 < cr42551_place_26);
var cr42551_place_28 = null;
if(cr42551_place_27){
(cr42551_state[(0)] = cr42551_block_7);

(cr42551_state[(1)] = null);

(cr42551_state[(6)] = null);

(cr42551_state[(1)] = cr42551_place_28);

(cr42551_state[(7)] = cr42551_place_22);

return cr42551_state;
} else {
(cr42551_state[(0)] = cr42551_block_5);

(cr42551_state[(7)] = cr42551_place_22);

return cr42551_state;
}
}catch (e42629){var cr42551_exception = e42629;
(cr42551_state[(0)] = null);

(cr42551_state[(1)] = null);

(cr42551_state[(3)] = null);

(cr42551_state[(4)] = null);

(cr42551_state[(2)] = null);

(cr42551_state[(5)] = null);

(cr42551_state[(6)] = null);

throw cr42551_exception;
}});
var cr42551_block_8 = (function hyperfiddle$electric$impl$io$message_reader_$_cr42551_block_8(cr42551_state){
try{var cr42551_place_10 = (cr42551_state[(3)]);
var cr42551_place_8 = (cr42551_state[(4)]);
var cr42551_place_28 = (cr42551_state[(1)]);
var cr42551_place_9 = (cr42551_state[(5)]);
var cr42551_place_35 = (function (){var G__42655 = cr42551_place_10;
var G__42656 = cr42551_place_28;
var fexpr__42654 = cr42551_place_9;
return (fexpr__42654.cljs$core$IFn$_invoke$arity$2 ? fexpr__42654.cljs$core$IFn$_invoke$arity$2(G__42655,G__42656) : fexpr__42654.call(null,G__42655,G__42656));
})();
var cr42551_place_36 = (function (){var G__42658 = cr42551_place_35;
var fexpr__42657 = cr42551_place_8;
return (fexpr__42657.cljs$core$IFn$_invoke$arity$1 ? fexpr__42657.cljs$core$IFn$_invoke$arity$1(G__42658) : fexpr__42657.call(null,G__42658));
})();
(cr42551_state[(0)] = cr42551_block_10);

(cr42551_state[(3)] = null);

(cr42551_state[(4)] = null);

(cr42551_state[(1)] = null);

(cr42551_state[(5)] = null);

(cr42551_state[(2)] = cr42551_place_36);

return cr42551_state;
}catch (e42649){var cr42551_exception = e42649;
(cr42551_state[(0)] = null);

(cr42551_state[(3)] = null);

(cr42551_state[(4)] = null);

(cr42551_state[(2)] = null);

(cr42551_state[(1)] = null);

(cr42551_state[(5)] = null);

throw cr42551_exception;
}});
var cr42551_block_1 = (function hyperfiddle$electric$impl$io$message_reader_$_cr42551_block_1(cr42551_state){
try{var cr42551_place_3 = _QMARK_read;
(cr42551_state[(0)] = cr42551_block_2);

return missionary.core.park(cr42551_place_3);
}catch (e42664){var cr42551_exception = e42664;
(cr42551_state[(0)] = null);

(cr42551_state[(1)] = null);

throw cr42551_exception;
}});
var cr42551_block_9 = (function hyperfiddle$electric$impl$io$message_reader_$_cr42551_block_9(cr42551_state){
try{var cr42551_place_2 = (cr42551_state[(1)]);
var cr42551_place_4 = (cr42551_state[(3)]);
var cr42551_place_37 = cljs.core.conj_BANG_;
var cr42551_place_38 = cr42551_place_2;
var cr42551_place_39 = hyperfiddle.electric.impl.io.decode_str;
var cr42551_place_40 = cr42551_place_4;
var cr42551_place_41 = (function (){var G__42674 = cr42551_place_40;
var fexpr__42673 = cr42551_place_39;
return (fexpr__42673.cljs$core$IFn$_invoke$arity$1 ? fexpr__42673.cljs$core$IFn$_invoke$arity$1(G__42674) : fexpr__42673.call(null,G__42674));
})();
var cr42551_place_42 = (function (){var G__42676 = cr42551_place_38;
var G__42677 = cr42551_place_41;
var fexpr__42675 = cr42551_place_37;
return (fexpr__42675.cljs$core$IFn$_invoke$arity$2 ? fexpr__42675.cljs$core$IFn$_invoke$arity$2(G__42676,G__42677) : fexpr__42675.call(null,G__42676,G__42677));
})();
(cr42551_state[(0)] = cr42551_block_1);

(cr42551_state[(3)] = null);

(cr42551_state[(1)] = cr42551_place_42);

return cr42551_state;
}catch (e42668){var cr42551_exception = e42668;
(cr42551_state[(0)] = null);

(cr42551_state[(1)] = null);

(cr42551_state[(3)] = null);

throw cr42551_exception;
}});
var cr42551_block_3 = (function hyperfiddle$electric$impl$io$message_reader_$_cr42551_block_3(cr42551_state){
try{var cr42551_place_2 = (cr42551_state[(1)]);
var cr42551_place_4 = (cr42551_state[(3)]);
var cr42551_place_8 = cljs.core.persistent_BANG_;
var cr42551_place_9 = cljs.core.conj_BANG_;
var cr42551_place_10 = cr42551_place_2;
var cr42551_place_11 = cr42551_place_4;
var cr42551_place_12 = cljs.core.transient$;
var cr42551_place_13 = cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IVector], null));
var cr42551_place_14 = (function (){var G__42688 = cr42551_place_13;
var fexpr__42687 = cr42551_place_12;
return (fexpr__42687.cljs$core$IFn$_invoke$arity$1 ? fexpr__42687.cljs$core$IFn$_invoke$arity$1(G__42688) : fexpr__42687.call(null,G__42688));
})();
(cr42551_state[(0)] = cr42551_block_4);

(cr42551_state[(1)] = null);

(cr42551_state[(3)] = null);

(cr42551_state[(4)] = cr42551_place_8);

(cr42551_state[(5)] = cr42551_place_9);

(cr42551_state[(3)] = cr42551_place_10);

(cr42551_state[(1)] = cr42551_place_11);

(cr42551_state[(6)] = cr42551_place_14);

return cr42551_state;
}catch (e42683){var cr42551_exception = e42683;
(cr42551_state[(0)] = null);

(cr42551_state[(1)] = null);

(cr42551_state[(2)] = null);

(cr42551_state[(3)] = null);

throw cr42551_exception;
}});
var cr42551_block_2 = (function hyperfiddle$electric$impl$io$message_reader_$_cr42551_block_2(cr42551_state){
try{var cr42551_place_4 = missionary.core.unpark();
var cr42551_place_5 = cr42551_place_4;
var cr42551_place_6 = typeof cr42551_place_5 === 'string';
var cr42551_place_7 = null;
if(cr42551_place_6){
(cr42551_state[(0)] = cr42551_block_9);

(cr42551_state[(3)] = cr42551_place_4);

return cr42551_state;
} else {
(cr42551_state[(0)] = cr42551_block_3);

(cr42551_state[(3)] = cr42551_place_4);

(cr42551_state[(2)] = cr42551_place_7);

return cr42551_state;
}
}catch (e42692){var cr42551_exception = e42692;
(cr42551_state[(0)] = null);

(cr42551_state[(1)] = null);

throw cr42551_exception;
}});
var cr42551_block_6 = (function hyperfiddle$electric$impl$io$message_reader_$_cr42551_block_6(cr42551_state){
try{var cr42551_place_22 = (cr42551_state[(7)]);
var cr42551_place_30 = missionary.core.unpark();
var cr42551_place_31 = cr42551_place_22;
(cr42551_state[(0)] = cr42551_block_4);

(cr42551_state[(7)] = null);

(cr42551_state[(1)] = cr42551_place_30);

(cr42551_state[(6)] = cr42551_place_31);

return cr42551_state;
}catch (e42698){var cr42551_exception = e42698;
(cr42551_state[(0)] = null);

(cr42551_state[(1)] = null);

(cr42551_state[(3)] = null);

(cr42551_state[(4)] = null);

(cr42551_state[(2)] = null);

(cr42551_state[(5)] = null);

(cr42551_state[(6)] = null);

(cr42551_state[(7)] = null);

throw cr42551_exception;
}});
return cloroutine.impl.coroutine((function (){var G__42706 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((8));
(G__42706[(0)] = cr42551_block_0);

return G__42706;
})());
})(),missionary.core.sp_run);
});
/**
 * Returns a function taking an Electric message and returning a task writing it as individual frames using provided
 * function. Might cut a message into chunks if its size would exceed the server payload limit.
 * An empty message (0b) is written to notify the end of frame.
 */
hyperfiddle.electric.impl.io.message_writer = (function hyperfiddle$electric$impl$io$message_writer(write){
return (function (p1__42709_SHARP_){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr42710_block_7 = (function hyperfiddle$electric$impl$io$message_writer_$_cr42710_block_7(cr42710_state){
try{var cr42710_place_46 = cljs.core.peek;
var cr42710_place_47 = p1__42709_SHARP_;
var cr42710_place_48 = (function (){var G__42792 = cr42710_place_47;
var fexpr__42791 = cr42710_place_46;
return (fexpr__42791.cljs$core$IFn$_invoke$arity$1 ? fexpr__42791.cljs$core$IFn$_invoke$arity$1(G__42792) : fexpr__42791.call(null,G__42792));
})();
(cr42710_state[(0)] = cr42710_block_8);

(cr42710_state[(2)] = cr42710_place_48);

return cr42710_state;
}catch (e42788){var cr42710_exception = e42788;
(cr42710_state[(0)] = null);

(cr42710_state[(1)] = null);

throw cr42710_exception;
}});
var cr42710_block_11 = (function hyperfiddle$electric$impl$io$message_writer_$_cr42710_block_11(cr42710_state){
try{var cr42710_place_48 = (cr42710_state[(2)]);
var cr42710_place_62 = hyperfiddle.electric.impl.io.encode_numbers;
var cr42710_place_63 = cljs.core.subvec;
var cr42710_place_64 = cr42710_place_48;
var cr42710_place_65 = (0);
var cr42710_place_66 = hyperfiddle.electric.impl.io.chunk_size;
var cr42710_place_67 = (function (){var G__42795 = cr42710_place_64;
var G__42796 = cr42710_place_65;
var G__42797 = cr42710_place_66;
var fexpr__42794 = cr42710_place_63;
return (fexpr__42794.cljs$core$IFn$_invoke$arity$3 ? fexpr__42794.cljs$core$IFn$_invoke$arity$3(G__42795,G__42796,G__42797) : fexpr__42794.call(null,G__42795,G__42796,G__42797));
})();
var cr42710_place_68 = (function (){var G__42799 = cr42710_place_67;
var fexpr__42798 = cr42710_place_62;
return (fexpr__42798.cljs$core$IFn$_invoke$arity$1 ? fexpr__42798.cljs$core$IFn$_invoke$arity$1(G__42799) : fexpr__42798.call(null,G__42799));
})();
var cr42710_place_69 = write;
var cr42710_place_70 = cr42710_place_68;
var cr42710_place_71 = (function (){var G__42801 = cr42710_place_70;
var fexpr__42800 = cr42710_place_69;
return (fexpr__42800.cljs$core$IFn$_invoke$arity$1 ? fexpr__42800.cljs$core$IFn$_invoke$arity$1(G__42801) : fexpr__42800.call(null,G__42801));
})();
(cr42710_state[(0)] = cr42710_block_12);

return missionary.core.park(cr42710_place_71);
}catch (e42793){var cr42710_exception = e42793;
(cr42710_state[(0)] = null);

(cr42710_state[(1)] = null);

(cr42710_state[(2)] = null);

throw cr42710_exception;
}});
var cr42710_block_4 = (function hyperfiddle$electric$impl$io$message_writer_$_cr42710_block_4(cr42710_state){
try{var cr42710_place_20 = (cr42710_state[(4)]);
var cr42710_place_26 = (cr42710_state[(5)]);
var cr42710_place_31 = cr42710_place_26;
var cr42710_place_32 = cljs.core.ex_info;
var cr42710_place_33 = "Failed to encode";
var cr42710_place_34 = new cljs.core.Keyword(null,"value","value",305978217);
var cr42710_place_35 = cr42710_place_20;
var cr42710_place_36 = cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([cr42710_place_34,cr42710_place_35]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr42710_place_37 = cr42710_place_31;
var cr42710_place_38 = (function (){var G__42804 = cr42710_place_33;
var G__42805 = cr42710_place_36;
var G__42806 = cr42710_place_37;
var fexpr__42803 = cr42710_place_32;
return (fexpr__42803.cljs$core$IFn$_invoke$arity$3 ? fexpr__42803.cljs$core$IFn$_invoke$arity$3(G__42804,G__42805,G__42806) : fexpr__42803.call(null,G__42804,G__42805,G__42806));
})();
var cr42710_place_39 = (function(){throw cr42710_place_38})();
(cr42710_state[(0)] = null);

(cr42710_state[(2)] = null);

(cr42710_state[(3)] = null);

(cr42710_state[(4)] = null);

(cr42710_state[(1)] = null);

(cr42710_state[(5)] = null);

return null;
}catch (e42802){var cr42710_exception = e42802;
(cr42710_state[(0)] = cr42710_block_5);

(cr42710_state[(4)] = null);

(cr42710_state[(3)] = true);

(cr42710_state[(5)] = cr42710_exception);

return cr42710_state;
}});
var cr42710_block_6 = (function hyperfiddle$electric$impl$io$message_writer_$_cr42710_block_6(cr42710_state){
try{var cr42710_place_21 = (cr42710_state[(2)]);
var cr42710_place_44 = missionary.core.unpark();
var cr42710_place_45 = cr42710_place_21;
(cr42710_state[(0)] = cr42710_block_1);

(cr42710_state[(2)] = null);

(cr42710_state[(1)] = cr42710_place_45);

return cr42710_state;
}catch (e42807){var cr42710_exception = e42807;
(cr42710_state[(0)] = null);

(cr42710_state[(2)] = null);

(cr42710_state[(1)] = null);

throw cr42710_exception;
}});
var cr42710_block_8 = (function hyperfiddle$electric$impl$io$message_writer_$_cr42710_block_8(cr42710_state){
try{var cr42710_place_48 = (cr42710_state[(2)]);
var cr42710_place_49 = cljs.core.count;
var cr42710_place_50 = cr42710_place_48;
var cr42710_place_51 = (function (){var G__42810 = cr42710_place_50;
var fexpr__42809 = cr42710_place_49;
return (fexpr__42809.cljs$core$IFn$_invoke$arity$1 ? fexpr__42809.cljs$core$IFn$_invoke$arity$1(G__42810) : fexpr__42809.call(null,G__42810));
})();
var cr42710_place_52 = hyperfiddle.electric.impl.io.chunk_size;
var cr42710_place_53 = (cr42710_place_51 >= cr42710_place_52);
var cr42710_place_54 = null;
if(cr42710_place_53){
(cr42710_state[(0)] = cr42710_block_11);

return cr42710_state;
} else {
(cr42710_state[(0)] = cr42710_block_9);

(cr42710_state[(3)] = cr42710_place_54);

return cr42710_state;
}
}catch (e42808){var cr42710_exception = e42808;
(cr42710_state[(0)] = null);

(cr42710_state[(1)] = null);

(cr42710_state[(2)] = null);

throw cr42710_exception;
}});
var cr42710_block_9 = (function hyperfiddle$electric$impl$io$message_writer_$_cr42710_block_9(cr42710_state){
try{var cr42710_place_48 = (cr42710_state[(2)]);
var cr42710_place_55 = hyperfiddle.electric.impl.io.encode_numbers;
var cr42710_place_56 = cr42710_place_48;
var cr42710_place_57 = (function (){var G__42813 = cr42710_place_56;
var fexpr__42812 = cr42710_place_55;
return (fexpr__42812.cljs$core$IFn$_invoke$arity$1 ? fexpr__42812.cljs$core$IFn$_invoke$arity$1(G__42813) : fexpr__42812.call(null,G__42813));
})();
var cr42710_place_58 = write;
var cr42710_place_59 = cr42710_place_57;
var cr42710_place_60 = (function (){var G__42815 = cr42710_place_59;
var fexpr__42814 = cr42710_place_58;
return (fexpr__42814.cljs$core$IFn$_invoke$arity$1 ? fexpr__42814.cljs$core$IFn$_invoke$arity$1(G__42815) : fexpr__42814.call(null,G__42815));
})();
(cr42710_state[(0)] = cr42710_block_10);

(cr42710_state[(2)] = null);

return missionary.core.park(cr42710_place_60);
}catch (e42811){var cr42710_exception = e42811;
(cr42710_state[(0)] = null);

(cr42710_state[(1)] = null);

(cr42710_state[(3)] = null);

(cr42710_state[(2)] = null);

throw cr42710_exception;
}});
var cr42710_block_13 = (function hyperfiddle$electric$impl$io$message_writer_$_cr42710_block_13(cr42710_state){
try{var cr42710_place_54 = (cr42710_state[(3)]);
(cr42710_state[(0)] = cr42710_block_14);

(cr42710_state[(3)] = null);

(cr42710_state[(1)] = cr42710_place_54);

return cr42710_state;
}catch (e42816){var cr42710_exception = e42816;
(cr42710_state[(0)] = null);

(cr42710_state[(1)] = null);

(cr42710_state[(3)] = null);

throw cr42710_exception;
}});
var cr42710_block_10 = (function hyperfiddle$electric$impl$io$message_writer_$_cr42710_block_10(cr42710_state){
try{var cr42710_place_61 = missionary.core.unpark();
(cr42710_state[(0)] = cr42710_block_13);

(cr42710_state[(3)] = cr42710_place_61);

return cr42710_state;
}catch (e42817){var cr42710_exception = e42817;
(cr42710_state[(0)] = null);

(cr42710_state[(1)] = null);

(cr42710_state[(3)] = null);

throw cr42710_exception;
}});
var cr42710_block_5 = (function hyperfiddle$electric$impl$io$message_writer_$_cr42710_block_5(cr42710_state){
try{var cr42710_place_27 = (cr42710_state[(3)]);
var cr42710_place_26 = (cr42710_state[(5)]);
var cr42710_place_40 = (cljs.core.truth_(cr42710_place_27)?(function(){throw cr42710_place_26})():cr42710_place_26);
var cr42710_place_41 = write;
var cr42710_place_42 = cr42710_place_40;
var cr42710_place_43 = (function (){var G__42820 = cr42710_place_42;
var fexpr__42819 = cr42710_place_41;
return (fexpr__42819.cljs$core$IFn$_invoke$arity$1 ? fexpr__42819.cljs$core$IFn$_invoke$arity$1(G__42820) : fexpr__42819.call(null,G__42820));
})();
(cr42710_state[(0)] = cr42710_block_6);

(cr42710_state[(3)] = null);

(cr42710_state[(5)] = null);

return missionary.core.park(cr42710_place_43);
}catch (e42818){var cr42710_exception = e42818;
(cr42710_state[(0)] = null);

(cr42710_state[(2)] = null);

(cr42710_state[(3)] = null);

(cr42710_state[(1)] = null);

(cr42710_state[(5)] = null);

throw cr42710_exception;
}});
var cr42710_block_14 = (function hyperfiddle$electric$impl$io$message_writer_$_cr42710_block_14(cr42710_state){
try{var cr42710_place_9 = (cr42710_state[(1)]);
(cr42710_state[(0)] = null);

(cr42710_state[(1)] = null);

return cr42710_place_9;
}catch (e42821){var cr42710_exception = e42821;
(cr42710_state[(0)] = null);

(cr42710_state[(1)] = null);

throw cr42710_exception;
}});
var cr42710_block_0 = (function hyperfiddle$electric$impl$io$message_writer_$_cr42710_block_0(cr42710_state){
try{var cr42710_place_0 = cljs.core.seq;
var cr42710_place_1 = cljs.core.pop;
var cr42710_place_2 = p1__42709_SHARP_;
var cr42710_place_3 = (function (){var G__42824 = cr42710_place_2;
var fexpr__42823 = cr42710_place_1;
return (fexpr__42823.cljs$core$IFn$_invoke$arity$1 ? fexpr__42823.cljs$core$IFn$_invoke$arity$1(G__42824) : fexpr__42823.call(null,G__42824));
})();
var cr42710_place_4 = (function (){var G__42826 = cr42710_place_3;
var fexpr__42825 = cr42710_place_0;
return (fexpr__42825.cljs$core$IFn$_invoke$arity$1 ? fexpr__42825.cljs$core$IFn$_invoke$arity$1(G__42826) : fexpr__42825.call(null,G__42826));
})();
(cr42710_state[(0)] = cr42710_block_1);

(cr42710_state[(1)] = cr42710_place_4);

return cr42710_state;
}catch (e42822){var cr42710_exception = e42822;
(cr42710_state[(0)] = null);

throw cr42710_exception;
}});
var cr42710_block_2 = (function hyperfiddle$electric$impl$io$message_writer_$_cr42710_block_2(cr42710_state){
try{var cr42710_place_5 = (cr42710_state[(2)]);
var cr42710_place_10 = cr42710_place_5;
var cr42710_place_11 = cljs.core.seq;
var cr42710_place_12 = cr42710_place_10;
var cr42710_place_13 = (function (){var G__42829 = cr42710_place_12;
var fexpr__42828 = cr42710_place_11;
return (fexpr__42828.cljs$core$IFn$_invoke$arity$1 ? fexpr__42828.cljs$core$IFn$_invoke$arity$1(G__42829) : fexpr__42828.call(null,G__42829));
})();
var cr42710_place_14 = cljs.core.first;
var cr42710_place_15 = cr42710_place_13;
var cr42710_place_16 = (function (){var G__42831 = cr42710_place_15;
var fexpr__42830 = cr42710_place_14;
return (fexpr__42830.cljs$core$IFn$_invoke$arity$1 ? fexpr__42830.cljs$core$IFn$_invoke$arity$1(G__42831) : fexpr__42830.call(null,G__42831));
})();
var cr42710_place_17 = cljs.core.next;
var cr42710_place_18 = cr42710_place_13;
var cr42710_place_19 = (function (){var G__42833 = cr42710_place_18;
var fexpr__42832 = cr42710_place_17;
return (fexpr__42832.cljs$core$IFn$_invoke$arity$1 ? fexpr__42832.cljs$core$IFn$_invoke$arity$1(G__42833) : fexpr__42832.call(null,G__42833));
})();
var cr42710_place_20 = cr42710_place_16;
var cr42710_place_21 = cr42710_place_19;
var cr42710_place_22 = console.debug;
var cr42710_place_23 = "\uD83D\uDD3C";
var cr42710_place_24 = cr42710_place_20;
var cr42710_place_25 = (function (){var G__42835 = cr42710_place_23;
var G__42836 = cr42710_place_24;
var fexpr__42834 = cr42710_place_22;
return (fexpr__42834.cljs$core$IFn$_invoke$arity$2 ? fexpr__42834.cljs$core$IFn$_invoke$arity$2(G__42835,G__42836) : fexpr__42834.call(null,G__42835,G__42836));
})();
var cr42710_place_26 = null;
var cr42710_place_27 = false;
(cr42710_state[(0)] = cr42710_block_3);

(cr42710_state[(2)] = null);

(cr42710_state[(2)] = cr42710_place_21);

(cr42710_state[(3)] = cr42710_place_27);

(cr42710_state[(4)] = cr42710_place_20);

(cr42710_state[(5)] = cr42710_place_26);

return cr42710_state;
}catch (e42827){var cr42710_exception = e42827;
(cr42710_state[(0)] = null);

(cr42710_state[(2)] = null);

(cr42710_state[(1)] = null);

throw cr42710_exception;
}});
var cr42710_block_1 = (function hyperfiddle$electric$impl$io$message_writer_$_cr42710_block_1(cr42710_state){
try{var cr42710_place_4 = (cr42710_state[(1)]);
var cr42710_place_5 = cr42710_place_4;
var cr42710_place_6 = cr42710_place_5;
var cr42710_place_7 = null;
var cr42710_place_8 = (cr42710_place_6 == cr42710_place_7);
var cr42710_place_9 = null;
if(cr42710_place_8){
(cr42710_state[(0)] = cr42710_block_7);

(cr42710_state[(1)] = null);

(cr42710_state[(1)] = cr42710_place_9);

return cr42710_state;
} else {
(cr42710_state[(0)] = cr42710_block_2);

(cr42710_state[(2)] = cr42710_place_5);

return cr42710_state;
}
}catch (e42837){var cr42710_exception = e42837;
(cr42710_state[(0)] = null);

(cr42710_state[(1)] = null);

throw cr42710_exception;
}});
var cr42710_block_12 = (function hyperfiddle$electric$impl$io$message_writer_$_cr42710_block_12(cr42710_state){
try{var cr42710_place_48 = (cr42710_state[(2)]);
var cr42710_place_72 = missionary.core.unpark();
var cr42710_place_73 = cljs.core.subvec;
var cr42710_place_74 = cr42710_place_48;
var cr42710_place_75 = hyperfiddle.electric.impl.io.chunk_size;
var cr42710_place_76 = (function (){var G__42840 = cr42710_place_74;
var G__42841 = cr42710_place_75;
var fexpr__42839 = cr42710_place_73;
return (fexpr__42839.cljs$core$IFn$_invoke$arity$2 ? fexpr__42839.cljs$core$IFn$_invoke$arity$2(G__42840,G__42841) : fexpr__42839.call(null,G__42840,G__42841));
})();
(cr42710_state[(0)] = cr42710_block_8);

(cr42710_state[(2)] = cr42710_place_76);

return cr42710_state;
}catch (e42838){var cr42710_exception = e42838;
(cr42710_state[(0)] = null);

(cr42710_state[(1)] = null);

(cr42710_state[(2)] = null);

throw cr42710_exception;
}});
var cr42710_block_3 = (function hyperfiddle$electric$impl$io$message_writer_$_cr42710_block_3(cr42710_state){
try{var cr42710_place_20 = (cr42710_state[(4)]);
var cr42710_place_28 = hyperfiddle.electric.impl.io.encode;
var cr42710_place_29 = cr42710_place_20;
var cr42710_place_30 = (function (){var G__42844 = cr42710_place_29;
var fexpr__42843 = cr42710_place_28;
return (fexpr__42843.cljs$core$IFn$_invoke$arity$1 ? fexpr__42843.cljs$core$IFn$_invoke$arity$1(G__42844) : fexpr__42843.call(null,G__42844));
})();
(cr42710_state[(0)] = cr42710_block_5);

(cr42710_state[(4)] = null);

(cr42710_state[(5)] = cr42710_place_30);

return cr42710_state;
}catch (e42842){var cr42710_exception = e42842;
(cr42710_state[(0)] = cr42710_block_4);

(cr42710_state[(5)] = cr42710_exception);

return cr42710_state;
}});
return cloroutine.impl.coroutine((function (){var G__42845 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((6));
(G__42845[(0)] = cr42710_block_0);

return G__42845;
})());
})(),missionary.core.sp_run);
});
});
/**
 * A transducer partitioning a sequence of network messages into Electric events.
 */
hyperfiddle.electric.impl.io.decoder = (function hyperfiddle$electric$impl$io$decoder(rf){
var data = (function (){var G__42846 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
(G__42846[(0)] = cljs.core.PersistentVector.EMPTY);

(G__42846[(1)] = cljs.core.PersistentVector.EMPTY);

return G__42846;
})();
return (function() {
var G__42914 = null;
var G__42914__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__42914__1 = (function (r){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentVector.EMPTY,(data[(0)]),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(data[(1)])], 0))){
} else {
throw (new Error("Assert failed: (= [] (aget data 0) (aget data 1))"));
}

return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(r) : rf.call(null,r));
});
var G__42914__2 = (function (r,x){
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
G__42914 = function(r,x){
switch(arguments.length){
case 0:
return G__42914__0.call(this);
case 1:
return G__42914__1.call(this,r);
case 2:
return G__42914__2.call(this,r,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__42914.cljs$core$IFn$_invoke$arity$0 = G__42914__0;
G__42914.cljs$core$IFn$_invoke$arity$1 = G__42914__1;
G__42914.cljs$core$IFn$_invoke$arity$2 = G__42914__2;
return G__42914;
})()
});
/**
 * A transducer expanding Electric events to a sequence of network messages.
 */
hyperfiddle.electric.impl.io.encoder = (function hyperfiddle$electric$impl$io$encoder(rf){
return (function() {
var G__42924 = null;
var G__42924__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__42924__1 = (function (r){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(r) : rf.call(null,r));
});
var G__42924__2 = (function (r,x){
var r__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,r,cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.io.encode),cljs.core.pop(x)], 0)));
var r__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,r__$1,cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.partition_all.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.io.chunk_size),cljs.core.map.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.io.encode_numbers),cljs.core.peek(x)], 0)));
var G__42847 = cljs.core.mod(cljs.core.count(cljs.core.peek(x)),hyperfiddle.electric.impl.io.chunk_size);
switch (G__42847) {
case (0):
var G__42848 = r__$2;
var G__42849 = hyperfiddle.electric.impl.io.encode_numbers(cljs.core.PersistentVector.EMPTY);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__42848,G__42849) : rf.call(null,G__42848,G__42849));

break;
default:
return r__$2;

}
});
G__42924 = function(r,x){
switch(arguments.length){
case 0:
return G__42924__0.call(this);
case 1:
return G__42924__1.call(this,r);
case 2:
return G__42924__2.call(this,r,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__42924.cljs$core$IFn$_invoke$arity$0 = G__42924__0;
G__42924.cljs$core$IFn$_invoke$arity$1 = G__42924__1;
G__42924.cljs$core$IFn$_invoke$arity$2 = G__42924__2;
return G__42924;
})()
});
hyperfiddle.electric.impl.io.foreach = (function hyperfiddle$electric$impl$io$foreach(var_args){
var G__42856 = arguments.length;
switch (G__42856) {
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
