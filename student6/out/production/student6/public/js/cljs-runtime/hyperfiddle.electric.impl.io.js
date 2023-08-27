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
var G__33158 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(((size * (2)) + (1)));
var arr33159_33739 = G__33158;
(arr33159_33739[(size * (2))] = cljs.core.identity((0)));

return G__33158;
});
hyperfiddle.electric.impl.io.cache_add = (function hyperfiddle$electric$impl$io$cache_add(cache,k,v){
if(cljs.core.truth_((function (){var i = (0);
while(true){
if((i < (cljs.core.count(cache) - (1)))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,hyperfiddle.electric.impl.array_fields.get(cache,i))){
var arr33170_33740 = cache;
(arr33170_33740[(i + (1))] = cljs.core.identity(v));

return true;
} else {
var G__33741 = (i + (2));
i = G__33741;
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
var widx = hyperfiddle.electric.impl.array_fields.getswap(cache,(cljs.core.count(cache) - (1)),(function (p1__33164_SHARP_){
return cljs.core.mod((p1__33164_SHARP_ + (2)),(cljs.core.count(cache) - (1)));
}));
var arr33172 = cache;
(arr33172[widx] = cljs.core.identity(k));

return (arr33172[(widx + (1))] = cljs.core.identity(v));
}
});
hyperfiddle.electric.impl.io.cache_get = (function hyperfiddle$electric$impl$io$cache_get(cache,k){
var i = (0);
while(true){
if((i < (cljs.core.count(cache) - (1)))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,hyperfiddle.electric.impl.array_fields.get(cache,i))){
return hyperfiddle.electric.impl.array_fields.get(cache,(i + (1)));
} else {
var G__33746 = (i + (2));
i = G__33746;
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
var G__33747 = (i + (2));
var G__33748 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ac,hyperfiddle.electric.impl.array_fields.get(cache,i),hyperfiddle.electric.impl.array_fields.get(cache,(i + (1))));
i = G__33747;
ac = G__33748;
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
var temp__5808__auto___33750 = cljs.core.ex_cause(fi);
if((temp__5808__auto___33750 == null)){
} else {
var cause_33751 = temp__5808__auto___33750;
if((cause_33751 instanceof hyperfiddle.electric.FailureInfo)){
} else {
hyperfiddle.electric.impl.io.cache_add(hyperfiddle.electric.impl.io._BANG_ex_cache,id,cause_33751);
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
hyperfiddle.electric.impl.io.failure_reader = cognitect.transit.read_handler((function (p__33204){
var vec__33205 = p__33204;
var seq__33206 = cljs.core.seq(vec__33205);
var first__33207 = cljs.core.first(seq__33206);
var seq__33206__$1 = cljs.core.next(seq__33206);
var tag = first__33207;
var args = seq__33206__$1;
var G__33208 = tag;
var G__33208__$1 = (((G__33208 instanceof cljs.core.Keyword))?G__33208.fqn:null);
switch (G__33208__$1) {
case "exception":
var vec__33209 = args;
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33209,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33209,(1),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33209,(2),null);
return (new hyperfiddle.electric.Failure(hyperfiddle.electric.debug.ex_info_STAR_.cljs$core$IFn$_invoke$arity$4(message,data,id,null)));

break;
case "remote":
var vec__33216 = args;
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33216,(0),null);
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33208__$1)].join('')));

}
}));
hyperfiddle.electric.impl.io.read_opts = (function hyperfiddle$electric$impl$io$read_opts(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hyperfiddle.electric.impl.io._STAR_read_handlers_STAR_,new cljs.core.PersistentArrayMap(null, 1, ["failure",hyperfiddle.electric.impl.io.failure_reader], null)], 0))], null);
});
hyperfiddle.electric.impl.io.set_ints = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce_kv,(function (r,i,n){
var offset = (i << (2));
var G__33224 = r;
G__33224.setInt32(offset,n);

return G__33224;
}));
/**
 * Encode a control frame to a binary segment.
 */
hyperfiddle.electric.impl.io.encode_numbers = (function hyperfiddle$electric$impl$io$encode_numbers(xs){
var required = (cljs.core.count(xs) << (2));
var G__33226 = (new ArrayBuffer(required));
hyperfiddle.electric.impl.io.set_ints((new DataView(G__33226)),xs);

return G__33226;
});
/**
 * Decode a control frame from a binary segment.
 */
hyperfiddle.electric.impl.io.decode_numbers = (function hyperfiddle$electric$impl$io$decode_numbers(b){
return cljs.core.vec((function (){
if((typeof hyperfiddle !== 'undefined') && (typeof hyperfiddle.electric !== 'undefined') && (typeof hyperfiddle.electric.impl !== 'undefined') && (typeof hyperfiddle.electric.impl.io !== 'undefined') && (typeof hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io33236 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io33236 = (function (b,meta33237){
this.b = b;
this.meta33237 = meta33237;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io33236.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33238,meta33237__$1){
var self__ = this;
var _33238__$1 = this;
return (new hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io33236(self__.b,meta33237__$1));
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io33236.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33238){
var self__ = this;
var _33238__$1 = this;
return self__.meta33237;
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io33236.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,rf,r){
var self__ = this;
var ___$1 = this;
var l = self__.b.byteLength;
var v = (new DataView(self__.b));
var r__$1 = r;
var i = (0);
while(true){
if((i < l)){
var G__33758 = (function (){var G__33240 = r__$1;
var G__33241 = v.getInt32(i);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__33240,G__33241) : rf.call(null,G__33240,G__33241));
})();
var G__33759 = (i + (4));
r__$1 = G__33758;
i = G__33759;
continue;
} else {
return r__$1;
}
break;
}
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io33236.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"meta33237","meta33237",-1381123029,null)], null);
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io33236.cljs$lang$type = true);

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io33236.cljs$lang$ctorStr = "hyperfiddle.electric.impl.io/t_hyperfiddle$electric$impl$io33236");

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io33236.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.io/t_hyperfiddle$electric$impl$io33236");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.io/t_hyperfiddle$electric$impl$io33236.
 */
hyperfiddle.electric.impl.io.__GT_t_hyperfiddle$electric$impl$io33236 = (function hyperfiddle$electric$impl$io$decode_numbers_$___GT_t_hyperfiddle$electric$impl$io33236(b__$1,meta33237){
return (new hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io33236(b__$1,meta33237));
});

}

return (new hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io33236(b,cljs.core.PersistentArrayMap.EMPTY));
})()
);
});
var _BANG_cache_33767 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write-handlers","write-handlers",-2097288911),hyperfiddle.electric.impl.io._STAR_write_handlers_STAR_,new cljs.core.Keyword(null,"writer","writer",-277568236),null], null));
hyperfiddle.electric.impl.io.transit_writer = (function hyperfiddle$electric$impl$io$transit_writer(){
return new cljs.core.Keyword(null,"writer","writer",-277568236).cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_cache_33767,(function (p__33253){
var map__33254 = p__33253;
var map__33254__$1 = cljs.core.__destructure_map(map__33254);
var cache = map__33254__$1;
var write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33254__$1,new cljs.core.Keyword(null,"write-handlers","write-handlers",-2097288911));
var writer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33254__$1,new cljs.core.Keyword(null,"writer","writer",-277568236));
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
var _BANG_cache_33769 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-handlers","read-handlers",2109459315),hyperfiddle.electric.impl.io._STAR_read_handlers_STAR_,new cljs.core.Keyword(null,"reader","reader",169660853),null], null));
hyperfiddle.electric.impl.io.transit_reader = (function hyperfiddle$electric$impl$io$transit_reader(){
return new cljs.core.Keyword(null,"reader","reader",169660853).cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_cache_33769,(function (p__33255){
var map__33256 = p__33255;
var map__33256__$1 = cljs.core.__destructure_map(map__33256);
var cache = map__33256__$1;
var read_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33256__$1,new cljs.core.Keyword(null,"read-handlers","read-handlers",2109459315));
var reader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33256__$1,new cljs.core.Keyword(null,"reader","reader",169660853));
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
try{var G__33288 = hyperfiddle.electric.impl.io.decode(x);
console.debug("\uD83D\uDD3D",G__33288);

return G__33288;
}catch (e33287){var t = e33287;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("Failed to decode",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),x], null),t);
}});
hyperfiddle.electric.impl.io.chunk_size = ((65536) >> (2));
hyperfiddle.electric.impl.io.message_reader = (function hyperfiddle$electric$impl$io$message_reader(_QMARK_read){

return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr33290_block_1 = (function hyperfiddle$electric$impl$io$message_reader_$_cr33290_block_1(cr33290_state){
try{var cr33290_place_3 = _QMARK_read;
(cr33290_state[(0)] = cr33290_block_2);

return missionary.core.park(cr33290_place_3);
}catch (e33360){var cr33290_exception = e33360;
(cr33290_state[(0)] = null);

(cr33290_state[(1)] = null);

throw cr33290_exception;
}});
var cr33290_block_6 = (function hyperfiddle$electric$impl$io$message_reader_$_cr33290_block_6(cr33290_state){
try{var cr33290_place_22 = (cr33290_state[(7)]);
var cr33290_place_30 = missionary.core.unpark();
var cr33290_place_31 = cr33290_place_22;
(cr33290_state[(0)] = cr33290_block_4);

(cr33290_state[(7)] = null);

(cr33290_state[(5)] = cr33290_place_30);

(cr33290_state[(4)] = cr33290_place_31);

return cr33290_state;
}catch (e33361){var cr33290_exception = e33361;
(cr33290_state[(0)] = null);

(cr33290_state[(1)] = null);

(cr33290_state[(7)] = null);

(cr33290_state[(3)] = null);

(cr33290_state[(4)] = null);

(cr33290_state[(2)] = null);

(cr33290_state[(5)] = null);

(cr33290_state[(6)] = null);

throw cr33290_exception;
}});
var cr33290_block_5 = (function hyperfiddle$electric$impl$io$message_reader_$_cr33290_block_5(cr33290_state){
try{var cr33290_place_29 = _QMARK_read;
(cr33290_state[(0)] = cr33290_block_6);

return missionary.core.park(cr33290_place_29);
}catch (e33363){var cr33290_exception = e33363;
(cr33290_state[(0)] = null);

(cr33290_state[(1)] = null);

(cr33290_state[(7)] = null);

(cr33290_state[(3)] = null);

(cr33290_state[(4)] = null);

(cr33290_state[(2)] = null);

(cr33290_state[(5)] = null);

(cr33290_state[(6)] = null);

throw cr33290_exception;
}});
var cr33290_block_9 = (function hyperfiddle$electric$impl$io$message_reader_$_cr33290_block_9(cr33290_state){
try{var cr33290_place_2 = (cr33290_state[(1)]);
var cr33290_place_4 = (cr33290_state[(3)]);
var cr33290_place_37 = cljs.core.conj_BANG_;
var cr33290_place_38 = cr33290_place_2;
var cr33290_place_39 = hyperfiddle.electric.impl.io.decode_str;
var cr33290_place_40 = cr33290_place_4;
var cr33290_place_41 = (function (){var G__33369 = cr33290_place_40;
var fexpr__33368 = cr33290_place_39;
return (fexpr__33368.cljs$core$IFn$_invoke$arity$1 ? fexpr__33368.cljs$core$IFn$_invoke$arity$1(G__33369) : fexpr__33368.call(null,G__33369));
})();
var cr33290_place_42 = (function (){var G__33371 = cr33290_place_38;
var G__33372 = cr33290_place_41;
var fexpr__33370 = cr33290_place_37;
return (fexpr__33370.cljs$core$IFn$_invoke$arity$2 ? fexpr__33370.cljs$core$IFn$_invoke$arity$2(G__33371,G__33372) : fexpr__33370.call(null,G__33371,G__33372));
})();
(cr33290_state[(0)] = cr33290_block_1);

(cr33290_state[(3)] = null);

(cr33290_state[(1)] = cr33290_place_42);

return cr33290_state;
}catch (e33367){var cr33290_exception = e33367;
(cr33290_state[(0)] = null);

(cr33290_state[(1)] = null);

(cr33290_state[(3)] = null);

throw cr33290_exception;
}});
var cr33290_block_10 = (function hyperfiddle$electric$impl$io$message_reader_$_cr33290_block_10(cr33290_state){
try{var cr33290_place_7 = (cr33290_state[(2)]);
(cr33290_state[(0)] = null);

(cr33290_state[(2)] = null);

return cr33290_place_7;
}catch (e33373){var cr33290_exception = e33373;
(cr33290_state[(0)] = null);

(cr33290_state[(2)] = null);

throw cr33290_exception;
}});
var cr33290_block_8 = (function hyperfiddle$electric$impl$io$message_reader_$_cr33290_block_8(cr33290_state){
try{var cr33290_place_8 = (cr33290_state[(1)]);
var cr33290_place_9 = (cr33290_state[(3)]);
var cr33290_place_28 = (cr33290_state[(4)]);
var cr33290_place_10 = (cr33290_state[(6)]);
var cr33290_place_35 = (function (){var G__33379 = cr33290_place_10;
var G__33380 = cr33290_place_28;
var fexpr__33378 = cr33290_place_9;
return (fexpr__33378.cljs$core$IFn$_invoke$arity$2 ? fexpr__33378.cljs$core$IFn$_invoke$arity$2(G__33379,G__33380) : fexpr__33378.call(null,G__33379,G__33380));
})();
var cr33290_place_36 = (function (){var G__33382 = cr33290_place_35;
var fexpr__33381 = cr33290_place_8;
return (fexpr__33381.cljs$core$IFn$_invoke$arity$1 ? fexpr__33381.cljs$core$IFn$_invoke$arity$1(G__33382) : fexpr__33381.call(null,G__33382));
})();
(cr33290_state[(0)] = cr33290_block_10);

(cr33290_state[(1)] = null);

(cr33290_state[(3)] = null);

(cr33290_state[(4)] = null);

(cr33290_state[(6)] = null);

(cr33290_state[(2)] = cr33290_place_36);

return cr33290_state;
}catch (e33375){var cr33290_exception = e33375;
(cr33290_state[(0)] = null);

(cr33290_state[(1)] = null);

(cr33290_state[(3)] = null);

(cr33290_state[(2)] = null);

(cr33290_state[(4)] = null);

(cr33290_state[(6)] = null);

throw cr33290_exception;
}});
var cr33290_block_3 = (function hyperfiddle$electric$impl$io$message_reader_$_cr33290_block_3(cr33290_state){
try{var cr33290_place_2 = (cr33290_state[(1)]);
var cr33290_place_4 = (cr33290_state[(3)]);
var cr33290_place_8 = cljs.core.persistent_BANG_;
var cr33290_place_9 = cljs.core.conj_BANG_;
var cr33290_place_10 = cr33290_place_2;
var cr33290_place_11 = cr33290_place_4;
var cr33290_place_12 = cljs.core.transient$;
var cr33290_place_13 = cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IVector], null));
var cr33290_place_14 = (function (){var G__33385 = cr33290_place_13;
var fexpr__33384 = cr33290_place_12;
return (fexpr__33384.cljs$core$IFn$_invoke$arity$1 ? fexpr__33384.cljs$core$IFn$_invoke$arity$1(G__33385) : fexpr__33384.call(null,G__33385));
})();
(cr33290_state[(0)] = cr33290_block_4);

(cr33290_state[(1)] = null);

(cr33290_state[(3)] = null);

(cr33290_state[(1)] = cr33290_place_8);

(cr33290_state[(3)] = cr33290_place_9);

(cr33290_state[(6)] = cr33290_place_10);

(cr33290_state[(5)] = cr33290_place_11);

(cr33290_state[(4)] = cr33290_place_14);

return cr33290_state;
}catch (e33383){var cr33290_exception = e33383;
(cr33290_state[(0)] = null);

(cr33290_state[(1)] = null);

(cr33290_state[(2)] = null);

(cr33290_state[(3)] = null);

throw cr33290_exception;
}});
var cr33290_block_2 = (function hyperfiddle$electric$impl$io$message_reader_$_cr33290_block_2(cr33290_state){
try{var cr33290_place_4 = missionary.core.unpark();
var cr33290_place_5 = cr33290_place_4;
var cr33290_place_6 = typeof cr33290_place_5 === 'string';
var cr33290_place_7 = null;
if(cr33290_place_6){
(cr33290_state[(0)] = cr33290_block_9);

(cr33290_state[(3)] = cr33290_place_4);

return cr33290_state;
} else {
(cr33290_state[(0)] = cr33290_block_3);

(cr33290_state[(3)] = cr33290_place_4);

(cr33290_state[(2)] = cr33290_place_7);

return cr33290_state;
}
}catch (e33396){var cr33290_exception = e33396;
(cr33290_state[(0)] = null);

(cr33290_state[(1)] = null);

throw cr33290_exception;
}});
var cr33290_block_4 = (function hyperfiddle$electric$impl$io$message_reader_$_cr33290_block_4(cr33290_state){
try{var cr33290_place_14 = (cr33290_state[(4)]);
var cr33290_place_11 = (cr33290_state[(5)]);
var cr33290_place_15 = hyperfiddle.electric.impl.io.decode_numbers;
var cr33290_place_16 = cr33290_place_11;
var cr33290_place_17 = (function (){var G__33402 = cr33290_place_16;
var fexpr__33401 = cr33290_place_15;
return (fexpr__33401.cljs$core$IFn$_invoke$arity$1 ? fexpr__33401.cljs$core$IFn$_invoke$arity$1(G__33402) : fexpr__33401.call(null,G__33402));
})();
var cr33290_place_18 = cljs.core.reduce;
var cr33290_place_19 = cljs.core.conj_BANG_;
var cr33290_place_20 = cr33290_place_14;
var cr33290_place_21 = cr33290_place_17;
var cr33290_place_22 = (function (){var G__33410 = cr33290_place_19;
var G__33411 = cr33290_place_20;
var G__33412 = cr33290_place_21;
var fexpr__33409 = cr33290_place_18;
return (fexpr__33409.cljs$core$IFn$_invoke$arity$3 ? fexpr__33409.cljs$core$IFn$_invoke$arity$3(G__33410,G__33411,G__33412) : fexpr__33409.call(null,G__33410,G__33411,G__33412));
})();
var cr33290_place_23 = cljs.core.count;
var cr33290_place_24 = cr33290_place_17;
var cr33290_place_25 = (function (){var G__33414 = cr33290_place_24;
var fexpr__33413 = cr33290_place_23;
return (fexpr__33413.cljs$core$IFn$_invoke$arity$1 ? fexpr__33413.cljs$core$IFn$_invoke$arity$1(G__33414) : fexpr__33413.call(null,G__33414));
})();
var cr33290_place_26 = hyperfiddle.electric.impl.io.chunk_size;
var cr33290_place_27 = (cr33290_place_25 < cr33290_place_26);
var cr33290_place_28 = null;
if(cr33290_place_27){
(cr33290_state[(0)] = cr33290_block_7);

(cr33290_state[(4)] = null);

(cr33290_state[(5)] = null);

(cr33290_state[(7)] = cr33290_place_22);

(cr33290_state[(4)] = cr33290_place_28);

return cr33290_state;
} else {
(cr33290_state[(0)] = cr33290_block_5);

(cr33290_state[(7)] = cr33290_place_22);

return cr33290_state;
}
}catch (e33399){var cr33290_exception = e33399;
(cr33290_state[(0)] = null);

(cr33290_state[(1)] = null);

(cr33290_state[(3)] = null);

(cr33290_state[(4)] = null);

(cr33290_state[(2)] = null);

(cr33290_state[(5)] = null);

(cr33290_state[(6)] = null);

throw cr33290_exception;
}});
var cr33290_block_7 = (function hyperfiddle$electric$impl$io$message_reader_$_cr33290_block_7(cr33290_state){
try{var cr33290_place_22 = (cr33290_state[(7)]);
var cr33290_place_32 = cljs.core.persistent_BANG_;
var cr33290_place_33 = cr33290_place_22;
var cr33290_place_34 = (function (){var G__33421 = cr33290_place_33;
var fexpr__33420 = cr33290_place_32;
return (fexpr__33420.cljs$core$IFn$_invoke$arity$1 ? fexpr__33420.cljs$core$IFn$_invoke$arity$1(G__33421) : fexpr__33420.call(null,G__33421));
})();
(cr33290_state[(0)] = cr33290_block_8);

(cr33290_state[(7)] = null);

(cr33290_state[(4)] = cr33290_place_34);

return cr33290_state;
}catch (e33417){var cr33290_exception = e33417;
(cr33290_state[(0)] = null);

(cr33290_state[(1)] = null);

(cr33290_state[(7)] = null);

(cr33290_state[(3)] = null);

(cr33290_state[(2)] = null);

(cr33290_state[(4)] = null);

(cr33290_state[(6)] = null);

throw cr33290_exception;
}});
var cr33290_block_0 = (function hyperfiddle$electric$impl$io$message_reader_$_cr33290_block_0(cr33290_state){
try{var cr33290_place_0 = cljs.core.transient$;
var cr33290_place_1 = cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IVector], null));
var cr33290_place_2 = (function (){var G__33425 = cr33290_place_1;
var fexpr__33424 = cr33290_place_0;
return (fexpr__33424.cljs$core$IFn$_invoke$arity$1 ? fexpr__33424.cljs$core$IFn$_invoke$arity$1(G__33425) : fexpr__33424.call(null,G__33425));
})();
(cr33290_state[(0)] = cr33290_block_1);

(cr33290_state[(1)] = cr33290_place_2);

return cr33290_state;
}catch (e33422){var cr33290_exception = e33422;
(cr33290_state[(0)] = null);

throw cr33290_exception;
}});
return cloroutine.impl.coroutine((function (){var G__33427 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((8));
(G__33427[(0)] = cr33290_block_0);

return G__33427;
})());
})(),missionary.core.sp_run);
});
/**
 * Returns a function taking an Electric message and returning a task writing it as individual frames using provided
 * function. Might cut a message into chunks if its size would exceed the server payload limit.
 * An empty message (0b) is written to notify the end of frame.
 */
hyperfiddle.electric.impl.io.message_writer = (function hyperfiddle$electric$impl$io$message_writer(write){
return (function (p1__33428_SHARP_){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr33429_block_7 = (function hyperfiddle$electric$impl$io$message_writer_$_cr33429_block_7(cr33429_state){
try{var cr33429_place_46 = cljs.core.peek;
var cr33429_place_47 = p1__33428_SHARP_;
var cr33429_place_48 = (function (){var G__33571 = cr33429_place_47;
var fexpr__33570 = cr33429_place_46;
return (fexpr__33570.cljs$core$IFn$_invoke$arity$1 ? fexpr__33570.cljs$core$IFn$_invoke$arity$1(G__33571) : fexpr__33570.call(null,G__33571));
})();
(cr33429_state[(0)] = cr33429_block_8);

(cr33429_state[(2)] = cr33429_place_48);

return cr33429_state;
}catch (e33569){var cr33429_exception = e33569;
(cr33429_state[(0)] = null);

(cr33429_state[(1)] = null);

throw cr33429_exception;
}});
var cr33429_block_13 = (function hyperfiddle$electric$impl$io$message_writer_$_cr33429_block_13(cr33429_state){
try{var cr33429_place_54 = (cr33429_state[(3)]);
(cr33429_state[(0)] = cr33429_block_14);

(cr33429_state[(3)] = null);

(cr33429_state[(1)] = cr33429_place_54);

return cr33429_state;
}catch (e33578){var cr33429_exception = e33578;
(cr33429_state[(0)] = null);

(cr33429_state[(3)] = null);

(cr33429_state[(1)] = null);

throw cr33429_exception;
}});
var cr33429_block_12 = (function hyperfiddle$electric$impl$io$message_writer_$_cr33429_block_12(cr33429_state){
try{var cr33429_place_48 = (cr33429_state[(2)]);
var cr33429_place_72 = missionary.core.unpark();
var cr33429_place_73 = cljs.core.subvec;
var cr33429_place_74 = cr33429_place_48;
var cr33429_place_75 = hyperfiddle.electric.impl.io.chunk_size;
var cr33429_place_76 = (function (){var G__33583 = cr33429_place_74;
var G__33584 = cr33429_place_75;
var fexpr__33582 = cr33429_place_73;
return (fexpr__33582.cljs$core$IFn$_invoke$arity$2 ? fexpr__33582.cljs$core$IFn$_invoke$arity$2(G__33583,G__33584) : fexpr__33582.call(null,G__33583,G__33584));
})();
(cr33429_state[(0)] = cr33429_block_8);

(cr33429_state[(2)] = cr33429_place_76);

return cr33429_state;
}catch (e33580){var cr33429_exception = e33580;
(cr33429_state[(0)] = null);

(cr33429_state[(1)] = null);

(cr33429_state[(2)] = null);

throw cr33429_exception;
}});
var cr33429_block_10 = (function hyperfiddle$electric$impl$io$message_writer_$_cr33429_block_10(cr33429_state){
try{var cr33429_place_61 = missionary.core.unpark();
(cr33429_state[(0)] = cr33429_block_13);

(cr33429_state[(3)] = cr33429_place_61);

return cr33429_state;
}catch (e33586){var cr33429_exception = e33586;
(cr33429_state[(0)] = null);

(cr33429_state[(3)] = null);

(cr33429_state[(1)] = null);

throw cr33429_exception;
}});
var cr33429_block_9 = (function hyperfiddle$electric$impl$io$message_writer_$_cr33429_block_9(cr33429_state){
try{var cr33429_place_48 = (cr33429_state[(2)]);
var cr33429_place_55 = hyperfiddle.electric.impl.io.encode_numbers;
var cr33429_place_56 = cr33429_place_48;
var cr33429_place_57 = (function (){var G__33590 = cr33429_place_56;
var fexpr__33589 = cr33429_place_55;
return (fexpr__33589.cljs$core$IFn$_invoke$arity$1 ? fexpr__33589.cljs$core$IFn$_invoke$arity$1(G__33590) : fexpr__33589.call(null,G__33590));
})();
var cr33429_place_58 = write;
var cr33429_place_59 = cr33429_place_57;
var cr33429_place_60 = (function (){var G__33592 = cr33429_place_59;
var fexpr__33591 = cr33429_place_58;
return (fexpr__33591.cljs$core$IFn$_invoke$arity$1 ? fexpr__33591.cljs$core$IFn$_invoke$arity$1(G__33592) : fexpr__33591.call(null,G__33592));
})();
(cr33429_state[(0)] = cr33429_block_10);

(cr33429_state[(2)] = null);

return missionary.core.park(cr33429_place_60);
}catch (e33588){var cr33429_exception = e33588;
(cr33429_state[(0)] = null);

(cr33429_state[(3)] = null);

(cr33429_state[(1)] = null);

(cr33429_state[(2)] = null);

throw cr33429_exception;
}});
var cr33429_block_11 = (function hyperfiddle$electric$impl$io$message_writer_$_cr33429_block_11(cr33429_state){
try{var cr33429_place_48 = (cr33429_state[(2)]);
var cr33429_place_62 = hyperfiddle.electric.impl.io.encode_numbers;
var cr33429_place_63 = cljs.core.subvec;
var cr33429_place_64 = cr33429_place_48;
var cr33429_place_65 = (0);
var cr33429_place_66 = hyperfiddle.electric.impl.io.chunk_size;
var cr33429_place_67 = (function (){var G__33604 = cr33429_place_64;
var G__33605 = cr33429_place_65;
var G__33606 = cr33429_place_66;
var fexpr__33603 = cr33429_place_63;
return (fexpr__33603.cljs$core$IFn$_invoke$arity$3 ? fexpr__33603.cljs$core$IFn$_invoke$arity$3(G__33604,G__33605,G__33606) : fexpr__33603.call(null,G__33604,G__33605,G__33606));
})();
var cr33429_place_68 = (function (){var G__33608 = cr33429_place_67;
var fexpr__33607 = cr33429_place_62;
return (fexpr__33607.cljs$core$IFn$_invoke$arity$1 ? fexpr__33607.cljs$core$IFn$_invoke$arity$1(G__33608) : fexpr__33607.call(null,G__33608));
})();
var cr33429_place_69 = write;
var cr33429_place_70 = cr33429_place_68;
var cr33429_place_71 = (function (){var G__33613 = cr33429_place_70;
var fexpr__33612 = cr33429_place_69;
return (fexpr__33612.cljs$core$IFn$_invoke$arity$1 ? fexpr__33612.cljs$core$IFn$_invoke$arity$1(G__33613) : fexpr__33612.call(null,G__33613));
})();
(cr33429_state[(0)] = cr33429_block_12);

return missionary.core.park(cr33429_place_71);
}catch (e33593){var cr33429_exception = e33593;
(cr33429_state[(0)] = null);

(cr33429_state[(1)] = null);

(cr33429_state[(2)] = null);

throw cr33429_exception;
}});
var cr33429_block_14 = (function hyperfiddle$electric$impl$io$message_writer_$_cr33429_block_14(cr33429_state){
try{var cr33429_place_9 = (cr33429_state[(1)]);
(cr33429_state[(0)] = null);

(cr33429_state[(1)] = null);

return cr33429_place_9;
}catch (e33614){var cr33429_exception = e33614;
(cr33429_state[(0)] = null);

(cr33429_state[(1)] = null);

throw cr33429_exception;
}});
var cr33429_block_5 = (function hyperfiddle$electric$impl$io$message_writer_$_cr33429_block_5(cr33429_state){
try{var cr33429_place_27 = (cr33429_state[(4)]);
var cr33429_place_26 = (cr33429_state[(5)]);
var cr33429_place_40 = (cljs.core.truth_(cr33429_place_27)?(function(){throw cr33429_place_26})():cr33429_place_26);
var cr33429_place_41 = write;
var cr33429_place_42 = cr33429_place_40;
var cr33429_place_43 = (function (){var G__33622 = cr33429_place_42;
var fexpr__33621 = cr33429_place_41;
return (fexpr__33621.cljs$core$IFn$_invoke$arity$1 ? fexpr__33621.cljs$core$IFn$_invoke$arity$1(G__33622) : fexpr__33621.call(null,G__33622));
})();
(cr33429_state[(0)] = cr33429_block_6);

(cr33429_state[(4)] = null);

(cr33429_state[(5)] = null);

return missionary.core.park(cr33429_place_43);
}catch (e33615){var cr33429_exception = e33615;
(cr33429_state[(0)] = null);

(cr33429_state[(3)] = null);

(cr33429_state[(4)] = null);

(cr33429_state[(1)] = null);

(cr33429_state[(5)] = null);

throw cr33429_exception;
}});
var cr33429_block_0 = (function hyperfiddle$electric$impl$io$message_writer_$_cr33429_block_0(cr33429_state){
try{var cr33429_place_0 = cljs.core.seq;
var cr33429_place_1 = cljs.core.pop;
var cr33429_place_2 = p1__33428_SHARP_;
var cr33429_place_3 = (function (){var G__33632 = cr33429_place_2;
var fexpr__33631 = cr33429_place_1;
return (fexpr__33631.cljs$core$IFn$_invoke$arity$1 ? fexpr__33631.cljs$core$IFn$_invoke$arity$1(G__33632) : fexpr__33631.call(null,G__33632));
})();
var cr33429_place_4 = (function (){var G__33635 = cr33429_place_3;
var fexpr__33634 = cr33429_place_0;
return (fexpr__33634.cljs$core$IFn$_invoke$arity$1 ? fexpr__33634.cljs$core$IFn$_invoke$arity$1(G__33635) : fexpr__33634.call(null,G__33635));
})();
(cr33429_state[(0)] = cr33429_block_1);

(cr33429_state[(1)] = cr33429_place_4);

return cr33429_state;
}catch (e33630){var cr33429_exception = e33630;
(cr33429_state[(0)] = null);

throw cr33429_exception;
}});
var cr33429_block_3 = (function hyperfiddle$electric$impl$io$message_writer_$_cr33429_block_3(cr33429_state){
try{var cr33429_place_20 = (cr33429_state[(2)]);
var cr33429_place_28 = hyperfiddle.electric.impl.io.encode;
var cr33429_place_29 = cr33429_place_20;
var cr33429_place_30 = (function (){var G__33642 = cr33429_place_29;
var fexpr__33641 = cr33429_place_28;
return (fexpr__33641.cljs$core$IFn$_invoke$arity$1 ? fexpr__33641.cljs$core$IFn$_invoke$arity$1(G__33642) : fexpr__33641.call(null,G__33642));
})();
(cr33429_state[(0)] = cr33429_block_5);

(cr33429_state[(2)] = null);

(cr33429_state[(5)] = cr33429_place_30);

return cr33429_state;
}catch (e33639){var cr33429_exception = e33639;
(cr33429_state[(0)] = cr33429_block_4);

(cr33429_state[(5)] = cr33429_exception);

return cr33429_state;
}});
var cr33429_block_8 = (function hyperfiddle$electric$impl$io$message_writer_$_cr33429_block_8(cr33429_state){
try{var cr33429_place_48 = (cr33429_state[(2)]);
var cr33429_place_49 = cljs.core.count;
var cr33429_place_50 = cr33429_place_48;
var cr33429_place_51 = (function (){var G__33648 = cr33429_place_50;
var fexpr__33647 = cr33429_place_49;
return (fexpr__33647.cljs$core$IFn$_invoke$arity$1 ? fexpr__33647.cljs$core$IFn$_invoke$arity$1(G__33648) : fexpr__33647.call(null,G__33648));
})();
var cr33429_place_52 = hyperfiddle.electric.impl.io.chunk_size;
var cr33429_place_53 = (cr33429_place_51 >= cr33429_place_52);
var cr33429_place_54 = null;
if(cr33429_place_53){
(cr33429_state[(0)] = cr33429_block_11);

return cr33429_state;
} else {
(cr33429_state[(0)] = cr33429_block_9);

(cr33429_state[(3)] = cr33429_place_54);

return cr33429_state;
}
}catch (e33644){var cr33429_exception = e33644;
(cr33429_state[(0)] = null);

(cr33429_state[(1)] = null);

(cr33429_state[(2)] = null);

throw cr33429_exception;
}});
var cr33429_block_2 = (function hyperfiddle$electric$impl$io$message_writer_$_cr33429_block_2(cr33429_state){
try{var cr33429_place_5 = (cr33429_state[(2)]);
var cr33429_place_10 = cr33429_place_5;
var cr33429_place_11 = cljs.core.seq;
var cr33429_place_12 = cr33429_place_10;
var cr33429_place_13 = (function (){var G__33652 = cr33429_place_12;
var fexpr__33651 = cr33429_place_11;
return (fexpr__33651.cljs$core$IFn$_invoke$arity$1 ? fexpr__33651.cljs$core$IFn$_invoke$arity$1(G__33652) : fexpr__33651.call(null,G__33652));
})();
var cr33429_place_14 = cljs.core.first;
var cr33429_place_15 = cr33429_place_13;
var cr33429_place_16 = (function (){var G__33654 = cr33429_place_15;
var fexpr__33653 = cr33429_place_14;
return (fexpr__33653.cljs$core$IFn$_invoke$arity$1 ? fexpr__33653.cljs$core$IFn$_invoke$arity$1(G__33654) : fexpr__33653.call(null,G__33654));
})();
var cr33429_place_17 = cljs.core.next;
var cr33429_place_18 = cr33429_place_13;
var cr33429_place_19 = (function (){var G__33656 = cr33429_place_18;
var fexpr__33655 = cr33429_place_17;
return (fexpr__33655.cljs$core$IFn$_invoke$arity$1 ? fexpr__33655.cljs$core$IFn$_invoke$arity$1(G__33656) : fexpr__33655.call(null,G__33656));
})();
var cr33429_place_20 = cr33429_place_16;
var cr33429_place_21 = cr33429_place_19;
var cr33429_place_22 = console.debug;
var cr33429_place_23 = "\uD83D\uDD3C";
var cr33429_place_24 = cr33429_place_20;
var cr33429_place_25 = (function (){var G__33659 = cr33429_place_23;
var G__33660 = cr33429_place_24;
var fexpr__33658 = cr33429_place_22;
return (fexpr__33658.cljs$core$IFn$_invoke$arity$2 ? fexpr__33658.cljs$core$IFn$_invoke$arity$2(G__33659,G__33660) : fexpr__33658.call(null,G__33659,G__33660));
})();
var cr33429_place_26 = null;
var cr33429_place_27 = false;
(cr33429_state[(0)] = cr33429_block_3);

(cr33429_state[(2)] = null);

(cr33429_state[(2)] = cr33429_place_20);

(cr33429_state[(3)] = cr33429_place_21);

(cr33429_state[(4)] = cr33429_place_27);

(cr33429_state[(5)] = cr33429_place_26);

return cr33429_state;
}catch (e33649){var cr33429_exception = e33649;
(cr33429_state[(0)] = null);

(cr33429_state[(2)] = null);

(cr33429_state[(1)] = null);

throw cr33429_exception;
}});
var cr33429_block_4 = (function hyperfiddle$electric$impl$io$message_writer_$_cr33429_block_4(cr33429_state){
try{var cr33429_place_20 = (cr33429_state[(2)]);
var cr33429_place_26 = (cr33429_state[(5)]);
var cr33429_place_31 = cr33429_place_26;
var cr33429_place_32 = cljs.core.ex_info;
var cr33429_place_33 = "Failed to encode";
var cr33429_place_34 = new cljs.core.Keyword(null,"value","value",305978217);
var cr33429_place_35 = cr33429_place_20;
var cr33429_place_36 = cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([cr33429_place_34,cr33429_place_35]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr33429_place_37 = cr33429_place_31;
var cr33429_place_38 = (function (){var G__33665 = cr33429_place_33;
var G__33666 = cr33429_place_36;
var G__33667 = cr33429_place_37;
var fexpr__33664 = cr33429_place_32;
return (fexpr__33664.cljs$core$IFn$_invoke$arity$3 ? fexpr__33664.cljs$core$IFn$_invoke$arity$3(G__33665,G__33666,G__33667) : fexpr__33664.call(null,G__33665,G__33666,G__33667));
})();
var cr33429_place_39 = (function(){throw cr33429_place_38})();
(cr33429_state[(0)] = null);

(cr33429_state[(2)] = null);

(cr33429_state[(3)] = null);

(cr33429_state[(4)] = null);

(cr33429_state[(1)] = null);

(cr33429_state[(5)] = null);

return null;
}catch (e33661){var cr33429_exception = e33661;
(cr33429_state[(0)] = cr33429_block_5);

(cr33429_state[(2)] = null);

(cr33429_state[(4)] = true);

(cr33429_state[(5)] = cr33429_exception);

return cr33429_state;
}});
var cr33429_block_1 = (function hyperfiddle$electric$impl$io$message_writer_$_cr33429_block_1(cr33429_state){
try{var cr33429_place_4 = (cr33429_state[(1)]);
var cr33429_place_5 = cr33429_place_4;
var cr33429_place_6 = cr33429_place_5;
var cr33429_place_7 = null;
var cr33429_place_8 = (cr33429_place_6 == cr33429_place_7);
var cr33429_place_9 = null;
if(cr33429_place_8){
(cr33429_state[(0)] = cr33429_block_7);

(cr33429_state[(1)] = null);

(cr33429_state[(1)] = cr33429_place_9);

return cr33429_state;
} else {
(cr33429_state[(0)] = cr33429_block_2);

(cr33429_state[(2)] = cr33429_place_5);

return cr33429_state;
}
}catch (e33676){var cr33429_exception = e33676;
(cr33429_state[(0)] = null);

(cr33429_state[(1)] = null);

throw cr33429_exception;
}});
var cr33429_block_6 = (function hyperfiddle$electric$impl$io$message_writer_$_cr33429_block_6(cr33429_state){
try{var cr33429_place_21 = (cr33429_state[(3)]);
var cr33429_place_44 = missionary.core.unpark();
var cr33429_place_45 = cr33429_place_21;
(cr33429_state[(0)] = cr33429_block_1);

(cr33429_state[(3)] = null);

(cr33429_state[(1)] = cr33429_place_45);

return cr33429_state;
}catch (e33681){var cr33429_exception = e33681;
(cr33429_state[(0)] = null);

(cr33429_state[(3)] = null);

(cr33429_state[(1)] = null);

throw cr33429_exception;
}});
return cloroutine.impl.coroutine((function (){var G__33686 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((6));
(G__33686[(0)] = cr33429_block_0);

return G__33686;
})());
})(),missionary.core.sp_run);
});
});
/**
 * A transducer partitioning a sequence of network messages into Electric events.
 */
hyperfiddle.electric.impl.io.decoder = (function hyperfiddle$electric$impl$io$decoder(rf){
var data = (function (){var G__33690 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
(G__33690[(0)] = cljs.core.PersistentVector.EMPTY);

(G__33690[(1)] = cljs.core.PersistentVector.EMPTY);

return G__33690;
})();
return (function() {
var G__33807 = null;
var G__33807__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__33807__1 = (function (r){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentVector.EMPTY,(data[(0)]),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(data[(1)])], 0))){
} else {
throw (new Error("Assert failed: (= [] (aget data 0) (aget data 1))"));
}

return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(r) : rf.call(null,r));
});
var G__33807__2 = (function (r,x){
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
G__33807 = function(r,x){
switch(arguments.length){
case 0:
return G__33807__0.call(this);
case 1:
return G__33807__1.call(this,r);
case 2:
return G__33807__2.call(this,r,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33807.cljs$core$IFn$_invoke$arity$0 = G__33807__0;
G__33807.cljs$core$IFn$_invoke$arity$1 = G__33807__1;
G__33807.cljs$core$IFn$_invoke$arity$2 = G__33807__2;
return G__33807;
})()
});
/**
 * A transducer expanding Electric events to a sequence of network messages.
 */
hyperfiddle.electric.impl.io.encoder = (function hyperfiddle$electric$impl$io$encoder(rf){
return (function() {
var G__33809 = null;
var G__33809__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__33809__1 = (function (r){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(r) : rf.call(null,r));
});
var G__33809__2 = (function (r,x){
var r__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,r,cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.io.encode),cljs.core.pop(x)], 0)));
var r__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,r__$1,cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.partition_all.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.io.chunk_size),cljs.core.map.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.io.encode_numbers),cljs.core.peek(x)], 0)));
var G__33710 = cljs.core.mod(cljs.core.count(cljs.core.peek(x)),hyperfiddle.electric.impl.io.chunk_size);
switch (G__33710) {
case (0):
var G__33712 = r__$2;
var G__33713 = hyperfiddle.electric.impl.io.encode_numbers(cljs.core.PersistentVector.EMPTY);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__33712,G__33713) : rf.call(null,G__33712,G__33713));

break;
default:
return r__$2;

}
});
G__33809 = function(r,x){
switch(arguments.length){
case 0:
return G__33809__0.call(this);
case 1:
return G__33809__1.call(this,r);
case 2:
return G__33809__2.call(this,r,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33809.cljs$core$IFn$_invoke$arity$0 = G__33809__0;
G__33809.cljs$core$IFn$_invoke$arity$1 = G__33809__1;
G__33809.cljs$core$IFn$_invoke$arity$2 = G__33809__2;
return G__33809;
})()
});
hyperfiddle.electric.impl.io.foreach = (function hyperfiddle$electric$impl$io$foreach(var_args){
var G__33719 = arguments.length;
switch (G__33719) {
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
