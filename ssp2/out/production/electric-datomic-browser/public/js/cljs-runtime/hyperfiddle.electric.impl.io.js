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
var G__44174 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(((size * (2)) + (1)));
var arr44175_44504 = G__44174;
(arr44175_44504[(size * (2))] = cljs.core.identity((0)));

return G__44174;
});
hyperfiddle.electric.impl.io.cache_add = (function hyperfiddle$electric$impl$io$cache_add(cache,k,v){
if(cljs.core.truth_((function (){var i = (0);
while(true){
if((i < (cljs.core.count(cache) - (1)))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,hyperfiddle.electric.impl.array_fields.get(cache,i))){
var arr44177_44505 = cache;
(arr44177_44505[(i + (1))] = cljs.core.identity(v));

return true;
} else {
var G__44506 = (i + (2));
i = G__44506;
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
var widx = hyperfiddle.electric.impl.array_fields.getswap(cache,(cljs.core.count(cache) - (1)),(function (p1__44176_SHARP_){
return cljs.core.mod((p1__44176_SHARP_ + (2)),(cljs.core.count(cache) - (1)));
}));
var arr44178 = cache;
(arr44178[widx] = cljs.core.identity(k));

return (arr44178[(widx + (1))] = cljs.core.identity(v));
}
});
hyperfiddle.electric.impl.io.cache_get = (function hyperfiddle$electric$impl$io$cache_get(cache,k){
var i = (0);
while(true){
if((i < (cljs.core.count(cache) - (1)))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,hyperfiddle.electric.impl.array_fields.get(cache,i))){
return hyperfiddle.electric.impl.array_fields.get(cache,(i + (1)));
} else {
var G__44507 = (i + (2));
i = G__44507;
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
var G__44508 = (i + (2));
var G__44509 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ac,hyperfiddle.electric.impl.array_fields.get(cache,i),hyperfiddle.electric.impl.array_fields.get(cache,(i + (1))));
i = G__44508;
ac = G__44509;
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
var temp__5808__auto___44510 = cljs.core.ex_cause(fi);
if((temp__5808__auto___44510 == null)){
} else {
var cause_44511 = temp__5808__auto___44510;
if((cause_44511 instanceof hyperfiddle.electric.FailureInfo)){
} else {
hyperfiddle.electric.impl.io.cache_add(hyperfiddle.electric.impl.io._BANG_ex_cache,id,cause_44511);
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
hyperfiddle.electric.impl.io.failure_reader = cognitect.transit.read_handler((function (p__44186){
var vec__44187 = p__44186;
var seq__44188 = cljs.core.seq(vec__44187);
var first__44189 = cljs.core.first(seq__44188);
var seq__44188__$1 = cljs.core.next(seq__44188);
var tag = first__44189;
var args = seq__44188__$1;
var G__44190 = tag;
var G__44190__$1 = (((G__44190 instanceof cljs.core.Keyword))?G__44190.fqn:null);
switch (G__44190__$1) {
case "exception":
var vec__44192 = args;
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44192,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44192,(1),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44192,(2),null);
return (new hyperfiddle.electric.Failure(hyperfiddle.electric.debug.ex_info_STAR_.cljs$core$IFn$_invoke$arity$4(message,data,id,null)));

break;
case "remote":
var vec__44195 = args;
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44195,(0),null);
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44190__$1)].join('')));

}
}));
hyperfiddle.electric.impl.io.read_opts = (function hyperfiddle$electric$impl$io$read_opts(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hyperfiddle.electric.impl.io._STAR_read_handlers_STAR_,new cljs.core.PersistentArrayMap(null, 1, ["failure",hyperfiddle.electric.impl.io.failure_reader], null)], 0))], null);
});
hyperfiddle.electric.impl.io.set_ints = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce_kv,(function (r,i,n){
var offset = (i << (2));
var G__44199 = r;
G__44199.setInt32(offset,n);

return G__44199;
}));
/**
 * Encode a control frame to a binary segment.
 */
hyperfiddle.electric.impl.io.encode_numbers = (function hyperfiddle$electric$impl$io$encode_numbers(xs){
var required = (cljs.core.count(xs) << (2));
var G__44205 = (new ArrayBuffer(required));
hyperfiddle.electric.impl.io.set_ints((new DataView(G__44205)),xs);

return G__44205;
});

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io44207 = (function (b,meta44208){
this.b = b;
this.meta44208 = meta44208;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io44207.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44209,meta44208__$1){
var self__ = this;
var _44209__$1 = this;
return (new hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io44207(self__.b,meta44208__$1));
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io44207.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44209){
var self__ = this;
var _44209__$1 = this;
return self__.meta44208;
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io44207.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,rf,r){
var self__ = this;
var ___$1 = this;
var l = self__.b.byteLength;
var v = (new DataView(self__.b));
var r__$1 = r;
var i = (0);
while(true){
if((i < l)){
var G__44513 = (function (){var G__44211 = r__$1;
var G__44212 = v.getInt32(i);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__44211,G__44212) : rf.call(null,G__44211,G__44212));
})();
var G__44514 = (i + (4));
r__$1 = G__44513;
i = G__44514;
continue;
} else {
return r__$1;
}
break;
}
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io44207.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"meta44208","meta44208",1410087174,null)], null);
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io44207.cljs$lang$type = true);

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io44207.cljs$lang$ctorStr = "hyperfiddle.electric.impl.io/t_hyperfiddle$electric$impl$io44207");

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io44207.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.io/t_hyperfiddle$electric$impl$io44207");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.io/t_hyperfiddle$electric$impl$io44207.
 */
hyperfiddle.electric.impl.io.__GT_t_hyperfiddle$electric$impl$io44207 = (function hyperfiddle$electric$impl$io$__GT_t_hyperfiddle$electric$impl$io44207(b,meta44208){
return (new hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io44207(b,meta44208));
});


/**
 * Decode a control frame from a binary segment.
 */
hyperfiddle.electric.impl.io.decode_numbers = (function hyperfiddle$electric$impl$io$decode_numbers(b){
return cljs.core.vec((new hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io44207(b,cljs.core.PersistentArrayMap.EMPTY)));
});
var _BANG_cache_44515 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write-handlers","write-handlers",-2097288911),hyperfiddle.electric.impl.io._STAR_write_handlers_STAR_,new cljs.core.Keyword(null,"writer","writer",-277568236),null], null));
hyperfiddle.electric.impl.io.transit_writer = (function hyperfiddle$electric$impl$io$transit_writer(){
return new cljs.core.Keyword(null,"writer","writer",-277568236).cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_cache_44515,(function (p__44217){
var map__44218 = p__44217;
var map__44218__$1 = cljs.core.__destructure_map(map__44218);
var cache = map__44218__$1;
var write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44218__$1,new cljs.core.Keyword(null,"write-handlers","write-handlers",-2097288911));
var writer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44218__$1,new cljs.core.Keyword(null,"writer","writer",-277568236));
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
var _BANG_cache_44516 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-handlers","read-handlers",2109459315),hyperfiddle.electric.impl.io._STAR_read_handlers_STAR_,new cljs.core.Keyword(null,"reader","reader",169660853),null], null));
hyperfiddle.electric.impl.io.transit_reader = (function hyperfiddle$electric$impl$io$transit_reader(){
return new cljs.core.Keyword(null,"reader","reader",169660853).cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_cache_44516,(function (p__44221){
var map__44222 = p__44221;
var map__44222__$1 = cljs.core.__destructure_map(map__44222);
var cache = map__44222__$1;
var read_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44222__$1,new cljs.core.Keyword(null,"read-handlers","read-handlers",2109459315));
var reader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44222__$1,new cljs.core.Keyword(null,"reader","reader",169660853));
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
try{var G__44224 = hyperfiddle.electric.impl.io.decode(x);
console.debug("\uD83D\uDD3D",G__44224);

return G__44224;
}catch (e44223){var t = e44223;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("Failed to decode",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),x], null),t);
}});
hyperfiddle.electric.impl.io.chunk_size = ((65536) >> (2));
hyperfiddle.electric.impl.io.message_reader = (function hyperfiddle$electric$impl$io$message_reader(_QMARK_read){

return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr44226_block_10 = (function hyperfiddle$electric$impl$io$message_reader_$_cr44226_block_10(cr44226_state){
try{var cr44226_place_7 = (cr44226_state[(3)]);
(cr44226_state[(0)] = null);

(cr44226_state[(3)] = null);

return cr44226_place_7;
}catch (e44286){var cr44226_exception = e44286;
(cr44226_state[(0)] = null);

(cr44226_state[(3)] = null);

throw cr44226_exception;
}});
var cr44226_block_9 = (function hyperfiddle$electric$impl$io$message_reader_$_cr44226_block_9(cr44226_state){
try{var cr44226_place_4 = (cr44226_state[(2)]);
var cr44226_place_2 = (cr44226_state[(1)]);
var cr44226_place_37 = cljs.core.conj_BANG_;
var cr44226_place_38 = cr44226_place_2;
var cr44226_place_39 = hyperfiddle.electric.impl.io.decode_str;
var cr44226_place_40 = cr44226_place_4;
var cr44226_place_41 = (function (){var G__44289 = cr44226_place_40;
var fexpr__44288 = cr44226_place_39;
return (fexpr__44288.cljs$core$IFn$_invoke$arity$1 ? fexpr__44288.cljs$core$IFn$_invoke$arity$1(G__44289) : fexpr__44288.call(null,G__44289));
})();
var cr44226_place_42 = (function (){var G__44292 = cr44226_place_38;
var G__44293 = cr44226_place_41;
var fexpr__44291 = cr44226_place_37;
return (fexpr__44291.cljs$core$IFn$_invoke$arity$2 ? fexpr__44291.cljs$core$IFn$_invoke$arity$2(G__44292,G__44293) : fexpr__44291.call(null,G__44292,G__44293));
})();
(cr44226_state[(0)] = cr44226_block_1);

(cr44226_state[(2)] = null);

(cr44226_state[(1)] = cr44226_place_42);

return cr44226_state;
}catch (e44287){var cr44226_exception = e44287;
(cr44226_state[(0)] = null);

(cr44226_state[(2)] = null);

(cr44226_state[(1)] = null);

throw cr44226_exception;
}});
var cr44226_block_8 = (function hyperfiddle$electric$impl$io$message_reader_$_cr44226_block_8(cr44226_state){
try{var cr44226_place_9 = (cr44226_state[(4)]);
var cr44226_place_8 = (cr44226_state[(5)]);
var cr44226_place_28 = (cr44226_state[(1)]);
var cr44226_place_10 = (cr44226_state[(6)]);
var cr44226_place_35 = (function (){var G__44298 = cr44226_place_10;
var G__44299 = cr44226_place_28;
var fexpr__44297 = cr44226_place_9;
return (fexpr__44297.cljs$core$IFn$_invoke$arity$2 ? fexpr__44297.cljs$core$IFn$_invoke$arity$2(G__44298,G__44299) : fexpr__44297.call(null,G__44298,G__44299));
})();
var cr44226_place_36 = (function (){var G__44302 = cr44226_place_35;
var fexpr__44301 = cr44226_place_8;
return (fexpr__44301.cljs$core$IFn$_invoke$arity$1 ? fexpr__44301.cljs$core$IFn$_invoke$arity$1(G__44302) : fexpr__44301.call(null,G__44302));
})();
(cr44226_state[(0)] = cr44226_block_10);

(cr44226_state[(4)] = null);

(cr44226_state[(5)] = null);

(cr44226_state[(1)] = null);

(cr44226_state[(6)] = null);

(cr44226_state[(3)] = cr44226_place_36);

return cr44226_state;
}catch (e44295){var cr44226_exception = e44295;
(cr44226_state[(0)] = null);

(cr44226_state[(4)] = null);

(cr44226_state[(5)] = null);

(cr44226_state[(1)] = null);

(cr44226_state[(6)] = null);

(cr44226_state[(3)] = null);

throw cr44226_exception;
}});
var cr44226_block_1 = (function hyperfiddle$electric$impl$io$message_reader_$_cr44226_block_1(cr44226_state){
try{var cr44226_place_3 = _QMARK_read;
(cr44226_state[(0)] = cr44226_block_2);

return missionary.core.park(cr44226_place_3);
}catch (e44303){var cr44226_exception = e44303;
(cr44226_state[(0)] = null);

(cr44226_state[(1)] = null);

throw cr44226_exception;
}});
var cr44226_block_0 = (function hyperfiddle$electric$impl$io$message_reader_$_cr44226_block_0(cr44226_state){
try{var cr44226_place_0 = cljs.core.transient$;
var cr44226_place_1 = cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IVector], null));
var cr44226_place_2 = (function (){var G__44308 = cr44226_place_1;
var fexpr__44307 = cr44226_place_0;
return (fexpr__44307.cljs$core$IFn$_invoke$arity$1 ? fexpr__44307.cljs$core$IFn$_invoke$arity$1(G__44308) : fexpr__44307.call(null,G__44308));
})();
(cr44226_state[(0)] = cr44226_block_1);

(cr44226_state[(1)] = cr44226_place_2);

return cr44226_state;
}catch (e44305){var cr44226_exception = e44305;
(cr44226_state[(0)] = null);

throw cr44226_exception;
}});
var cr44226_block_3 = (function hyperfiddle$electric$impl$io$message_reader_$_cr44226_block_3(cr44226_state){
try{var cr44226_place_4 = (cr44226_state[(2)]);
var cr44226_place_2 = (cr44226_state[(1)]);
var cr44226_place_8 = cljs.core.persistent_BANG_;
var cr44226_place_9 = cljs.core.conj_BANG_;
var cr44226_place_10 = cr44226_place_2;
var cr44226_place_11 = cr44226_place_4;
var cr44226_place_12 = cljs.core.transient$;
var cr44226_place_13 = cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IVector], null));
var cr44226_place_14 = (function (){var G__44311 = cr44226_place_13;
var fexpr__44310 = cr44226_place_12;
return (fexpr__44310.cljs$core$IFn$_invoke$arity$1 ? fexpr__44310.cljs$core$IFn$_invoke$arity$1(G__44311) : fexpr__44310.call(null,G__44311));
})();
(cr44226_state[(0)] = cr44226_block_4);

(cr44226_state[(2)] = null);

(cr44226_state[(1)] = null);

(cr44226_state[(5)] = cr44226_place_8);

(cr44226_state[(4)] = cr44226_place_9);

(cr44226_state[(6)] = cr44226_place_10);

(cr44226_state[(2)] = cr44226_place_11);

(cr44226_state[(1)] = cr44226_place_14);

return cr44226_state;
}catch (e44309){var cr44226_exception = e44309;
(cr44226_state[(0)] = null);

(cr44226_state[(2)] = null);

(cr44226_state[(3)] = null);

(cr44226_state[(1)] = null);

throw cr44226_exception;
}});
var cr44226_block_5 = (function hyperfiddle$electric$impl$io$message_reader_$_cr44226_block_5(cr44226_state){
try{var cr44226_place_29 = _QMARK_read;
(cr44226_state[(0)] = cr44226_block_6);

return missionary.core.park(cr44226_place_29);
}catch (e44312){var cr44226_exception = e44312;
(cr44226_state[(0)] = null);

(cr44226_state[(7)] = null);

(cr44226_state[(1)] = null);

(cr44226_state[(2)] = null);

(cr44226_state[(4)] = null);

(cr44226_state[(5)] = null);

(cr44226_state[(6)] = null);

(cr44226_state[(3)] = null);

throw cr44226_exception;
}});
var cr44226_block_2 = (function hyperfiddle$electric$impl$io$message_reader_$_cr44226_block_2(cr44226_state){
try{var cr44226_place_4 = missionary.core.unpark();
var cr44226_place_5 = cr44226_place_4;
var cr44226_place_6 = typeof cr44226_place_5 === 'string';
var cr44226_place_7 = null;
if(cr44226_place_6){
(cr44226_state[(0)] = cr44226_block_9);

(cr44226_state[(2)] = cr44226_place_4);

return cr44226_state;
} else {
(cr44226_state[(0)] = cr44226_block_3);

(cr44226_state[(2)] = cr44226_place_4);

(cr44226_state[(3)] = cr44226_place_7);

return cr44226_state;
}
}catch (e44313){var cr44226_exception = e44313;
(cr44226_state[(0)] = null);

(cr44226_state[(1)] = null);

throw cr44226_exception;
}});
var cr44226_block_7 = (function hyperfiddle$electric$impl$io$message_reader_$_cr44226_block_7(cr44226_state){
try{var cr44226_place_22 = (cr44226_state[(7)]);
var cr44226_place_32 = cljs.core.persistent_BANG_;
var cr44226_place_33 = cr44226_place_22;
var cr44226_place_34 = (function (){var G__44320 = cr44226_place_33;
var fexpr__44319 = cr44226_place_32;
return (fexpr__44319.cljs$core$IFn$_invoke$arity$1 ? fexpr__44319.cljs$core$IFn$_invoke$arity$1(G__44320) : fexpr__44319.call(null,G__44320));
})();
(cr44226_state[(0)] = cr44226_block_8);

(cr44226_state[(7)] = null);

(cr44226_state[(1)] = cr44226_place_34);

return cr44226_state;
}catch (e44318){var cr44226_exception = e44318;
(cr44226_state[(0)] = null);

(cr44226_state[(7)] = null);

(cr44226_state[(4)] = null);

(cr44226_state[(5)] = null);

(cr44226_state[(1)] = null);

(cr44226_state[(6)] = null);

(cr44226_state[(3)] = null);

throw cr44226_exception;
}});
var cr44226_block_4 = (function hyperfiddle$electric$impl$io$message_reader_$_cr44226_block_4(cr44226_state){
try{var cr44226_place_14 = (cr44226_state[(1)]);
var cr44226_place_11 = (cr44226_state[(2)]);
var cr44226_place_15 = hyperfiddle.electric.impl.io.decode_numbers;
var cr44226_place_16 = cr44226_place_11;
var cr44226_place_17 = (function (){var G__44324 = cr44226_place_16;
var fexpr__44323 = cr44226_place_15;
return (fexpr__44323.cljs$core$IFn$_invoke$arity$1 ? fexpr__44323.cljs$core$IFn$_invoke$arity$1(G__44324) : fexpr__44323.call(null,G__44324));
})();
var cr44226_place_18 = cljs.core.reduce;
var cr44226_place_19 = cljs.core.conj_BANG_;
var cr44226_place_20 = cr44226_place_14;
var cr44226_place_21 = cr44226_place_17;
var cr44226_place_22 = (function (){var G__44326 = cr44226_place_19;
var G__44327 = cr44226_place_20;
var G__44328 = cr44226_place_21;
var fexpr__44325 = cr44226_place_18;
return (fexpr__44325.cljs$core$IFn$_invoke$arity$3 ? fexpr__44325.cljs$core$IFn$_invoke$arity$3(G__44326,G__44327,G__44328) : fexpr__44325.call(null,G__44326,G__44327,G__44328));
})();
var cr44226_place_23 = cljs.core.count;
var cr44226_place_24 = cr44226_place_17;
var cr44226_place_25 = (function (){var G__44331 = cr44226_place_24;
var fexpr__44330 = cr44226_place_23;
return (fexpr__44330.cljs$core$IFn$_invoke$arity$1 ? fexpr__44330.cljs$core$IFn$_invoke$arity$1(G__44331) : fexpr__44330.call(null,G__44331));
})();
var cr44226_place_26 = hyperfiddle.electric.impl.io.chunk_size;
var cr44226_place_27 = (cr44226_place_25 < cr44226_place_26);
var cr44226_place_28 = null;
if(cr44226_place_27){
(cr44226_state[(0)] = cr44226_block_7);

(cr44226_state[(1)] = null);

(cr44226_state[(2)] = null);

(cr44226_state[(7)] = cr44226_place_22);

(cr44226_state[(1)] = cr44226_place_28);

return cr44226_state;
} else {
(cr44226_state[(0)] = cr44226_block_5);

(cr44226_state[(7)] = cr44226_place_22);

return cr44226_state;
}
}catch (e44322){var cr44226_exception = e44322;
(cr44226_state[(0)] = null);

(cr44226_state[(1)] = null);

(cr44226_state[(2)] = null);

(cr44226_state[(4)] = null);

(cr44226_state[(5)] = null);

(cr44226_state[(6)] = null);

(cr44226_state[(3)] = null);

throw cr44226_exception;
}});
var cr44226_block_6 = (function hyperfiddle$electric$impl$io$message_reader_$_cr44226_block_6(cr44226_state){
try{var cr44226_place_22 = (cr44226_state[(7)]);
var cr44226_place_30 = missionary.core.unpark();
var cr44226_place_31 = cr44226_place_22;
(cr44226_state[(0)] = cr44226_block_4);

(cr44226_state[(7)] = null);

(cr44226_state[(2)] = cr44226_place_30);

(cr44226_state[(1)] = cr44226_place_31);

return cr44226_state;
}catch (e44332){var cr44226_exception = e44332;
(cr44226_state[(0)] = null);

(cr44226_state[(7)] = null);

(cr44226_state[(1)] = null);

(cr44226_state[(2)] = null);

(cr44226_state[(4)] = null);

(cr44226_state[(5)] = null);

(cr44226_state[(6)] = null);

(cr44226_state[(3)] = null);

throw cr44226_exception;
}});
return cloroutine.impl.coroutine((function (){var G__44333 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((8));
(G__44333[(0)] = cr44226_block_0);

return G__44333;
})());
})(),missionary.core.sp_run);
});
/**
 * Returns a function taking an Electric message and returning a task writing it as individual frames using provided
 * function. Might cut a message into chunks if its size would exceed the server payload limit.
 * An empty message (0b) is written to notify the end of frame.
 */
hyperfiddle.electric.impl.io.message_writer = (function hyperfiddle$electric$impl$io$message_writer(write){
return (function (p1__44334_SHARP_){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr44335_block_0 = (function hyperfiddle$electric$impl$io$message_writer_$_cr44335_block_0(cr44335_state){
try{var cr44335_place_0 = cljs.core.seq;
var cr44335_place_1 = cljs.core.pop;
var cr44335_place_2 = p1__44334_SHARP_;
var cr44335_place_3 = (function (){var G__44426 = cr44335_place_2;
var fexpr__44425 = cr44335_place_1;
return (fexpr__44425.cljs$core$IFn$_invoke$arity$1 ? fexpr__44425.cljs$core$IFn$_invoke$arity$1(G__44426) : fexpr__44425.call(null,G__44426));
})();
var cr44335_place_4 = (function (){var G__44429 = cr44335_place_3;
var fexpr__44428 = cr44335_place_0;
return (fexpr__44428.cljs$core$IFn$_invoke$arity$1 ? fexpr__44428.cljs$core$IFn$_invoke$arity$1(G__44429) : fexpr__44428.call(null,G__44429));
})();
(cr44335_state[(0)] = cr44335_block_1);

(cr44335_state[(1)] = cr44335_place_4);

return cr44335_state;
}catch (e44424){var cr44335_exception = e44424;
(cr44335_state[(0)] = null);

throw cr44335_exception;
}});
var cr44335_block_1 = (function hyperfiddle$electric$impl$io$message_writer_$_cr44335_block_1(cr44335_state){
try{var cr44335_place_4 = (cr44335_state[(1)]);
var cr44335_place_5 = cr44335_place_4;
var cr44335_place_6 = cr44335_place_5;
var cr44335_place_7 = null;
var cr44335_place_8 = (cr44335_place_6 == cr44335_place_7);
var cr44335_place_9 = null;
if(cr44335_place_8){
(cr44335_state[(0)] = cr44335_block_7);

(cr44335_state[(1)] = null);

(cr44335_state[(1)] = cr44335_place_9);

return cr44335_state;
} else {
(cr44335_state[(0)] = cr44335_block_2);

(cr44335_state[(2)] = cr44335_place_5);

return cr44335_state;
}
}catch (e44430){var cr44335_exception = e44430;
(cr44335_state[(0)] = null);

(cr44335_state[(1)] = null);

throw cr44335_exception;
}});
var cr44335_block_5 = (function hyperfiddle$electric$impl$io$message_writer_$_cr44335_block_5(cr44335_state){
try{var cr44335_place_27 = (cr44335_state[(4)]);
var cr44335_place_26 = (cr44335_state[(5)]);
var cr44335_place_40 = (cljs.core.truth_(cr44335_place_27)?(function(){throw cr44335_place_26})():cr44335_place_26);
var cr44335_place_41 = write;
var cr44335_place_42 = cr44335_place_40;
var cr44335_place_43 = (function (){var G__44436 = cr44335_place_42;
var fexpr__44435 = cr44335_place_41;
return (fexpr__44435.cljs$core$IFn$_invoke$arity$1 ? fexpr__44435.cljs$core$IFn$_invoke$arity$1(G__44436) : fexpr__44435.call(null,G__44436));
})();
(cr44335_state[(0)] = cr44335_block_6);

(cr44335_state[(4)] = null);

(cr44335_state[(5)] = null);

return missionary.core.park(cr44335_place_43);
}catch (e44434){var cr44335_exception = e44434;
(cr44335_state[(0)] = null);

(cr44335_state[(3)] = null);

(cr44335_state[(4)] = null);

(cr44335_state[(5)] = null);

(cr44335_state[(1)] = null);

throw cr44335_exception;
}});
var cr44335_block_11 = (function hyperfiddle$electric$impl$io$message_writer_$_cr44335_block_11(cr44335_state){
try{var cr44335_place_48 = (cr44335_state[(2)]);
var cr44335_place_62 = hyperfiddle.electric.impl.io.encode_numbers;
var cr44335_place_63 = cljs.core.subvec;
var cr44335_place_64 = cr44335_place_48;
var cr44335_place_65 = (0);
var cr44335_place_66 = hyperfiddle.electric.impl.io.chunk_size;
var cr44335_place_67 = (function (){var G__44439 = cr44335_place_64;
var G__44440 = cr44335_place_65;
var G__44441 = cr44335_place_66;
var fexpr__44438 = cr44335_place_63;
return (fexpr__44438.cljs$core$IFn$_invoke$arity$3 ? fexpr__44438.cljs$core$IFn$_invoke$arity$3(G__44439,G__44440,G__44441) : fexpr__44438.call(null,G__44439,G__44440,G__44441));
})();
var cr44335_place_68 = (function (){var G__44443 = cr44335_place_67;
var fexpr__44442 = cr44335_place_62;
return (fexpr__44442.cljs$core$IFn$_invoke$arity$1 ? fexpr__44442.cljs$core$IFn$_invoke$arity$1(G__44443) : fexpr__44442.call(null,G__44443));
})();
var cr44335_place_69 = write;
var cr44335_place_70 = cr44335_place_68;
var cr44335_place_71 = (function (){var G__44445 = cr44335_place_70;
var fexpr__44444 = cr44335_place_69;
return (fexpr__44444.cljs$core$IFn$_invoke$arity$1 ? fexpr__44444.cljs$core$IFn$_invoke$arity$1(G__44445) : fexpr__44444.call(null,G__44445));
})();
(cr44335_state[(0)] = cr44335_block_12);

return missionary.core.park(cr44335_place_71);
}catch (e44437){var cr44335_exception = e44437;
(cr44335_state[(0)] = null);

(cr44335_state[(1)] = null);

(cr44335_state[(2)] = null);

throw cr44335_exception;
}});
var cr44335_block_6 = (function hyperfiddle$electric$impl$io$message_writer_$_cr44335_block_6(cr44335_state){
try{var cr44335_place_21 = (cr44335_state[(3)]);
var cr44335_place_44 = missionary.core.unpark();
var cr44335_place_45 = cr44335_place_21;
(cr44335_state[(0)] = cr44335_block_1);

(cr44335_state[(3)] = null);

(cr44335_state[(1)] = cr44335_place_45);

return cr44335_state;
}catch (e44446){var cr44335_exception = e44446;
(cr44335_state[(0)] = null);

(cr44335_state[(3)] = null);

(cr44335_state[(1)] = null);

throw cr44335_exception;
}});
var cr44335_block_7 = (function hyperfiddle$electric$impl$io$message_writer_$_cr44335_block_7(cr44335_state){
try{var cr44335_place_46 = cljs.core.peek;
var cr44335_place_47 = p1__44334_SHARP_;
var cr44335_place_48 = (function (){var G__44450 = cr44335_place_47;
var fexpr__44449 = cr44335_place_46;
return (fexpr__44449.cljs$core$IFn$_invoke$arity$1 ? fexpr__44449.cljs$core$IFn$_invoke$arity$1(G__44450) : fexpr__44449.call(null,G__44450));
})();
(cr44335_state[(0)] = cr44335_block_8);

(cr44335_state[(2)] = cr44335_place_48);

return cr44335_state;
}catch (e44447){var cr44335_exception = e44447;
(cr44335_state[(0)] = null);

(cr44335_state[(1)] = null);

throw cr44335_exception;
}});
var cr44335_block_2 = (function hyperfiddle$electric$impl$io$message_writer_$_cr44335_block_2(cr44335_state){
try{var cr44335_place_5 = (cr44335_state[(2)]);
var cr44335_place_10 = cr44335_place_5;
var cr44335_place_11 = cljs.core.seq;
var cr44335_place_12 = cr44335_place_10;
var cr44335_place_13 = (function (){var G__44453 = cr44335_place_12;
var fexpr__44452 = cr44335_place_11;
return (fexpr__44452.cljs$core$IFn$_invoke$arity$1 ? fexpr__44452.cljs$core$IFn$_invoke$arity$1(G__44453) : fexpr__44452.call(null,G__44453));
})();
var cr44335_place_14 = cljs.core.first;
var cr44335_place_15 = cr44335_place_13;
var cr44335_place_16 = (function (){var G__44455 = cr44335_place_15;
var fexpr__44454 = cr44335_place_14;
return (fexpr__44454.cljs$core$IFn$_invoke$arity$1 ? fexpr__44454.cljs$core$IFn$_invoke$arity$1(G__44455) : fexpr__44454.call(null,G__44455));
})();
var cr44335_place_17 = cljs.core.next;
var cr44335_place_18 = cr44335_place_13;
var cr44335_place_19 = (function (){var G__44457 = cr44335_place_18;
var fexpr__44456 = cr44335_place_17;
return (fexpr__44456.cljs$core$IFn$_invoke$arity$1 ? fexpr__44456.cljs$core$IFn$_invoke$arity$1(G__44457) : fexpr__44456.call(null,G__44457));
})();
var cr44335_place_20 = cr44335_place_16;
var cr44335_place_21 = cr44335_place_19;
var cr44335_place_22 = console.debug;
var cr44335_place_23 = "\uD83D\uDD3C";
var cr44335_place_24 = cr44335_place_20;
var cr44335_place_25 = (function (){var G__44459 = cr44335_place_23;
var G__44460 = cr44335_place_24;
var fexpr__44458 = cr44335_place_22;
return (fexpr__44458.cljs$core$IFn$_invoke$arity$2 ? fexpr__44458.cljs$core$IFn$_invoke$arity$2(G__44459,G__44460) : fexpr__44458.call(null,G__44459,G__44460));
})();
var cr44335_place_26 = null;
var cr44335_place_27 = false;
(cr44335_state[(0)] = cr44335_block_3);

(cr44335_state[(2)] = null);

(cr44335_state[(2)] = cr44335_place_20);

(cr44335_state[(3)] = cr44335_place_21);

(cr44335_state[(4)] = cr44335_place_27);

(cr44335_state[(5)] = cr44335_place_26);

return cr44335_state;
}catch (e44451){var cr44335_exception = e44451;
(cr44335_state[(0)] = null);

(cr44335_state[(2)] = null);

(cr44335_state[(1)] = null);

throw cr44335_exception;
}});
var cr44335_block_10 = (function hyperfiddle$electric$impl$io$message_writer_$_cr44335_block_10(cr44335_state){
try{var cr44335_place_61 = missionary.core.unpark();
(cr44335_state[(0)] = cr44335_block_13);

(cr44335_state[(3)] = cr44335_place_61);

return cr44335_state;
}catch (e44462){var cr44335_exception = e44462;
(cr44335_state[(0)] = null);

(cr44335_state[(1)] = null);

(cr44335_state[(3)] = null);

throw cr44335_exception;
}});
var cr44335_block_4 = (function hyperfiddle$electric$impl$io$message_writer_$_cr44335_block_4(cr44335_state){
try{var cr44335_place_20 = (cr44335_state[(2)]);
var cr44335_place_26 = (cr44335_state[(5)]);
var cr44335_place_31 = cr44335_place_26;
var cr44335_place_32 = cljs.core.ex_info;
var cr44335_place_33 = "Failed to encode";
var cr44335_place_34 = new cljs.core.Keyword(null,"value","value",305978217);
var cr44335_place_35 = cr44335_place_20;
var cr44335_place_36 = cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([cr44335_place_34,cr44335_place_35]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr44335_place_37 = cr44335_place_31;
var cr44335_place_38 = (function (){var G__44469 = cr44335_place_33;
var G__44470 = cr44335_place_36;
var G__44471 = cr44335_place_37;
var fexpr__44468 = cr44335_place_32;
return (fexpr__44468.cljs$core$IFn$_invoke$arity$3 ? fexpr__44468.cljs$core$IFn$_invoke$arity$3(G__44469,G__44470,G__44471) : fexpr__44468.call(null,G__44469,G__44470,G__44471));
})();
var cr44335_place_39 = (function(){throw cr44335_place_38})();
(cr44335_state[(0)] = null);

(cr44335_state[(2)] = null);

(cr44335_state[(3)] = null);

(cr44335_state[(4)] = null);

(cr44335_state[(5)] = null);

(cr44335_state[(1)] = null);

return null;
}catch (e44467){var cr44335_exception = e44467;
(cr44335_state[(0)] = cr44335_block_5);

(cr44335_state[(2)] = null);

(cr44335_state[(4)] = true);

(cr44335_state[(5)] = cr44335_exception);

return cr44335_state;
}});
var cr44335_block_12 = (function hyperfiddle$electric$impl$io$message_writer_$_cr44335_block_12(cr44335_state){
try{var cr44335_place_48 = (cr44335_state[(2)]);
var cr44335_place_72 = missionary.core.unpark();
var cr44335_place_73 = cljs.core.subvec;
var cr44335_place_74 = cr44335_place_48;
var cr44335_place_75 = hyperfiddle.electric.impl.io.chunk_size;
var cr44335_place_76 = (function (){var G__44475 = cr44335_place_74;
var G__44476 = cr44335_place_75;
var fexpr__44474 = cr44335_place_73;
return (fexpr__44474.cljs$core$IFn$_invoke$arity$2 ? fexpr__44474.cljs$core$IFn$_invoke$arity$2(G__44475,G__44476) : fexpr__44474.call(null,G__44475,G__44476));
})();
(cr44335_state[(0)] = cr44335_block_8);

(cr44335_state[(2)] = cr44335_place_76);

return cr44335_state;
}catch (e44473){var cr44335_exception = e44473;
(cr44335_state[(0)] = null);

(cr44335_state[(1)] = null);

(cr44335_state[(2)] = null);

throw cr44335_exception;
}});
var cr44335_block_8 = (function hyperfiddle$electric$impl$io$message_writer_$_cr44335_block_8(cr44335_state){
try{var cr44335_place_48 = (cr44335_state[(2)]);
var cr44335_place_49 = cljs.core.count;
var cr44335_place_50 = cr44335_place_48;
var cr44335_place_51 = (function (){var G__44479 = cr44335_place_50;
var fexpr__44478 = cr44335_place_49;
return (fexpr__44478.cljs$core$IFn$_invoke$arity$1 ? fexpr__44478.cljs$core$IFn$_invoke$arity$1(G__44479) : fexpr__44478.call(null,G__44479));
})();
var cr44335_place_52 = hyperfiddle.electric.impl.io.chunk_size;
var cr44335_place_53 = (cr44335_place_51 >= cr44335_place_52);
var cr44335_place_54 = null;
if(cr44335_place_53){
(cr44335_state[(0)] = cr44335_block_11);

return cr44335_state;
} else {
(cr44335_state[(0)] = cr44335_block_9);

(cr44335_state[(3)] = cr44335_place_54);

return cr44335_state;
}
}catch (e44477){var cr44335_exception = e44477;
(cr44335_state[(0)] = null);

(cr44335_state[(1)] = null);

(cr44335_state[(2)] = null);

throw cr44335_exception;
}});
var cr44335_block_14 = (function hyperfiddle$electric$impl$io$message_writer_$_cr44335_block_14(cr44335_state){
try{var cr44335_place_9 = (cr44335_state[(1)]);
(cr44335_state[(0)] = null);

(cr44335_state[(1)] = null);

return cr44335_place_9;
}catch (e44480){var cr44335_exception = e44480;
(cr44335_state[(0)] = null);

(cr44335_state[(1)] = null);

throw cr44335_exception;
}});
var cr44335_block_9 = (function hyperfiddle$electric$impl$io$message_writer_$_cr44335_block_9(cr44335_state){
try{var cr44335_place_48 = (cr44335_state[(2)]);
var cr44335_place_55 = hyperfiddle.electric.impl.io.encode_numbers;
var cr44335_place_56 = cr44335_place_48;
var cr44335_place_57 = (function (){var G__44483 = cr44335_place_56;
var fexpr__44482 = cr44335_place_55;
return (fexpr__44482.cljs$core$IFn$_invoke$arity$1 ? fexpr__44482.cljs$core$IFn$_invoke$arity$1(G__44483) : fexpr__44482.call(null,G__44483));
})();
var cr44335_place_58 = write;
var cr44335_place_59 = cr44335_place_57;
var cr44335_place_60 = (function (){var G__44485 = cr44335_place_59;
var fexpr__44484 = cr44335_place_58;
return (fexpr__44484.cljs$core$IFn$_invoke$arity$1 ? fexpr__44484.cljs$core$IFn$_invoke$arity$1(G__44485) : fexpr__44484.call(null,G__44485));
})();
(cr44335_state[(0)] = cr44335_block_10);

(cr44335_state[(2)] = null);

return missionary.core.park(cr44335_place_60);
}catch (e44481){var cr44335_exception = e44481;
(cr44335_state[(0)] = null);

(cr44335_state[(1)] = null);

(cr44335_state[(3)] = null);

(cr44335_state[(2)] = null);

throw cr44335_exception;
}});
var cr44335_block_3 = (function hyperfiddle$electric$impl$io$message_writer_$_cr44335_block_3(cr44335_state){
try{var cr44335_place_20 = (cr44335_state[(2)]);
var cr44335_place_28 = hyperfiddle.electric.impl.io.encode;
var cr44335_place_29 = cr44335_place_20;
var cr44335_place_30 = (function (){var G__44491 = cr44335_place_29;
var fexpr__44490 = cr44335_place_28;
return (fexpr__44490.cljs$core$IFn$_invoke$arity$1 ? fexpr__44490.cljs$core$IFn$_invoke$arity$1(G__44491) : fexpr__44490.call(null,G__44491));
})();
(cr44335_state[(0)] = cr44335_block_5);

(cr44335_state[(2)] = null);

(cr44335_state[(5)] = cr44335_place_30);

return cr44335_state;
}catch (e44488){var cr44335_exception = e44488;
(cr44335_state[(0)] = cr44335_block_4);

(cr44335_state[(5)] = cr44335_exception);

return cr44335_state;
}});
var cr44335_block_13 = (function hyperfiddle$electric$impl$io$message_writer_$_cr44335_block_13(cr44335_state){
try{var cr44335_place_54 = (cr44335_state[(3)]);
(cr44335_state[(0)] = cr44335_block_14);

(cr44335_state[(3)] = null);

(cr44335_state[(1)] = cr44335_place_54);

return cr44335_state;
}catch (e44492){var cr44335_exception = e44492;
(cr44335_state[(0)] = null);

(cr44335_state[(1)] = null);

(cr44335_state[(3)] = null);

throw cr44335_exception;
}});
return cloroutine.impl.coroutine((function (){var G__44493 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((6));
(G__44493[(0)] = cr44335_block_0);

return G__44493;
})());
})(),missionary.core.sp_run);
});
});
/**
 * A transducer partitioning a sequence of network messages into Electric events.
 */
hyperfiddle.electric.impl.io.decoder = (function hyperfiddle$electric$impl$io$decoder(rf){
var data = (function (){var G__44494 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
(G__44494[(0)] = cljs.core.PersistentVector.EMPTY);

(G__44494[(1)] = cljs.core.PersistentVector.EMPTY);

return G__44494;
})();
return (function() {
var G__44520 = null;
var G__44520__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__44520__1 = (function (r){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentVector.EMPTY,(data[(0)]),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(data[(1)])], 0))){
} else {
throw (new Error("Assert failed: (= [] (aget data 0) (aget data 1))"));
}

return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(r) : rf.call(null,r));
});
var G__44520__2 = (function (r,x){
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
G__44520 = function(r,x){
switch(arguments.length){
case 0:
return G__44520__0.call(this);
case 1:
return G__44520__1.call(this,r);
case 2:
return G__44520__2.call(this,r,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__44520.cljs$core$IFn$_invoke$arity$0 = G__44520__0;
G__44520.cljs$core$IFn$_invoke$arity$1 = G__44520__1;
G__44520.cljs$core$IFn$_invoke$arity$2 = G__44520__2;
return G__44520;
})()
});
/**
 * A transducer expanding Electric events to a sequence of network messages.
 */
hyperfiddle.electric.impl.io.encoder = (function hyperfiddle$electric$impl$io$encoder(rf){
return (function() {
var G__44523 = null;
var G__44523__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__44523__1 = (function (r){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(r) : rf.call(null,r));
});
var G__44523__2 = (function (r,x){
var r__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,r,cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.io.encode),cljs.core.pop(x)], 0)));
var r__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,r__$1,cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.partition_all.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.io.chunk_size),cljs.core.map.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.io.encode_numbers),cljs.core.peek(x)], 0)));
var G__44495 = cljs.core.mod(cljs.core.count(cljs.core.peek(x)),hyperfiddle.electric.impl.io.chunk_size);
switch (G__44495) {
case (0):
var G__44497 = r__$2;
var G__44498 = hyperfiddle.electric.impl.io.encode_numbers(cljs.core.PersistentVector.EMPTY);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__44497,G__44498) : rf.call(null,G__44497,G__44498));

break;
default:
return r__$2;

}
});
G__44523 = function(r,x){
switch(arguments.length){
case 0:
return G__44523__0.call(this);
case 1:
return G__44523__1.call(this,r);
case 2:
return G__44523__2.call(this,r,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__44523.cljs$core$IFn$_invoke$arity$0 = G__44523__0;
G__44523.cljs$core$IFn$_invoke$arity$1 = G__44523__1;
G__44523.cljs$core$IFn$_invoke$arity$2 = G__44523__2;
return G__44523;
})()
});
hyperfiddle.electric.impl.io.foreach = (function hyperfiddle$electric$impl$io$foreach(var_args){
var G__44501 = arguments.length;
switch (G__44501) {
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
