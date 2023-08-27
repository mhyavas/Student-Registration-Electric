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
var G__43738 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(((size * (2)) + (1)));
var arr43739_44326 = G__43738;
(arr43739_44326[(size * (2))] = cljs.core.identity((0)));

return G__43738;
});
hyperfiddle.electric.impl.io.cache_add = (function hyperfiddle$electric$impl$io$cache_add(cache,k,v){
if(cljs.core.truth_((function (){var i = (0);
while(true){
if((i < (cljs.core.count(cache) - (1)))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,hyperfiddle.electric.impl.array_fields.get(cache,i))){
var arr43746_44328 = cache;
(arr43746_44328[(i + (1))] = cljs.core.identity(v));

return true;
} else {
var G__44330 = (i + (2));
i = G__44330;
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
var widx = hyperfiddle.electric.impl.array_fields.getswap(cache,(cljs.core.count(cache) - (1)),(function (p1__43743_SHARP_){
return cljs.core.mod((p1__43743_SHARP_ + (2)),(cljs.core.count(cache) - (1)));
}));
var arr43751 = cache;
(arr43751[widx] = cljs.core.identity(k));

return (arr43751[(widx + (1))] = cljs.core.identity(v));
}
});
hyperfiddle.electric.impl.io.cache_get = (function hyperfiddle$electric$impl$io$cache_get(cache,k){
var i = (0);
while(true){
if((i < (cljs.core.count(cache) - (1)))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,hyperfiddle.electric.impl.array_fields.get(cache,i))){
return hyperfiddle.electric.impl.array_fields.get(cache,(i + (1)));
} else {
var G__44331 = (i + (2));
i = G__44331;
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
var G__44333 = (i + (2));
var G__44334 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ac,hyperfiddle.electric.impl.array_fields.get(cache,i),hyperfiddle.electric.impl.array_fields.get(cache,(i + (1))));
i = G__44333;
ac = G__44334;
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
var temp__5808__auto___44336 = cljs.core.ex_cause(fi);
if((temp__5808__auto___44336 == null)){
} else {
var cause_44337 = temp__5808__auto___44336;
if((cause_44337 instanceof hyperfiddle.electric.FailureInfo)){
} else {
hyperfiddle.electric.impl.io.cache_add(hyperfiddle.electric.impl.io._BANG_ex_cache,id,cause_44337);
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
hyperfiddle.electric.impl.io.failure_reader = cognitect.transit.read_handler((function (p__43781){
var vec__43782 = p__43781;
var seq__43783 = cljs.core.seq(vec__43782);
var first__43784 = cljs.core.first(seq__43783);
var seq__43783__$1 = cljs.core.next(seq__43783);
var tag = first__43784;
var args = seq__43783__$1;
var G__43785 = tag;
var G__43785__$1 = (((G__43785 instanceof cljs.core.Keyword))?G__43785.fqn:null);
switch (G__43785__$1) {
case "exception":
var vec__43788 = args;
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43788,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43788,(1),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43788,(2),null);
return (new hyperfiddle.electric.Failure(hyperfiddle.electric.debug.ex_info_STAR_.cljs$core$IFn$_invoke$arity$4(message,data,id,null)));

break;
case "remote":
var vec__43791 = args;
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43791,(0),null);
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43785__$1)].join('')));

}
}));
hyperfiddle.electric.impl.io.read_opts = (function hyperfiddle$electric$impl$io$read_opts(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hyperfiddle.electric.impl.io._STAR_read_handlers_STAR_,new cljs.core.PersistentArrayMap(null, 1, ["failure",hyperfiddle.electric.impl.io.failure_reader], null)], 0))], null);
});
hyperfiddle.electric.impl.io.set_ints = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce_kv,(function (r,i,n){
var offset = (i << (2));
var G__43799 = r;
G__43799.setInt32(offset,n);

return G__43799;
}));
/**
 * Encode a control frame to a binary segment.
 */
hyperfiddle.electric.impl.io.encode_numbers = (function hyperfiddle$electric$impl$io$encode_numbers(xs){
var required = (cljs.core.count(xs) << (2));
var G__43803 = (new ArrayBuffer(required));
hyperfiddle.electric.impl.io.set_ints((new DataView(G__43803)),xs);

return G__43803;
});
/**
 * Decode a control frame from a binary segment.
 */
hyperfiddle.electric.impl.io.decode_numbers = (function hyperfiddle$electric$impl$io$decode_numbers(b){
return cljs.core.vec((function (){
if((typeof hyperfiddle !== 'undefined') && (typeof hyperfiddle.electric !== 'undefined') && (typeof hyperfiddle.electric.impl !== 'undefined') && (typeof hyperfiddle.electric.impl.io !== 'undefined') && (typeof hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43809 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43809 = (function (b,meta43810){
this.b = b;
this.meta43810 = meta43810;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43809.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43811,meta43810__$1){
var self__ = this;
var _43811__$1 = this;
return (new hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43809(self__.b,meta43810__$1));
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43809.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43811){
var self__ = this;
var _43811__$1 = this;
return self__.meta43810;
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43809.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,rf,r){
var self__ = this;
var ___$1 = this;
var l = self__.b.byteLength;
var v = (new DataView(self__.b));
var r__$1 = r;
var i = (0);
while(true){
if((i < l)){
var G__44344 = (function (){var G__43820 = r__$1;
var G__43821 = v.getInt32(i);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__43820,G__43821) : rf.call(null,G__43820,G__43821));
})();
var G__44345 = (i + (4));
r__$1 = G__44344;
i = G__44345;
continue;
} else {
return r__$1;
}
break;
}
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43809.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"meta43810","meta43810",-1949878713,null)], null);
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43809.cljs$lang$type = true);

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43809.cljs$lang$ctorStr = "hyperfiddle.electric.impl.io/t_hyperfiddle$electric$impl$io43809");

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43809.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.io/t_hyperfiddle$electric$impl$io43809");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.io/t_hyperfiddle$electric$impl$io43809.
 */
hyperfiddle.electric.impl.io.__GT_t_hyperfiddle$electric$impl$io43809 = (function hyperfiddle$electric$impl$io$decode_numbers_$___GT_t_hyperfiddle$electric$impl$io43809(b__$1,meta43810){
return (new hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43809(b__$1,meta43810));
});

}

return (new hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43809(b,cljs.core.PersistentArrayMap.EMPTY));
})()
);
});
var _BANG_cache_44346 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write-handlers","write-handlers",-2097288911),hyperfiddle.electric.impl.io._STAR_write_handlers_STAR_,new cljs.core.Keyword(null,"writer","writer",-277568236),null], null));
hyperfiddle.electric.impl.io.transit_writer = (function hyperfiddle$electric$impl$io$transit_writer(){
return new cljs.core.Keyword(null,"writer","writer",-277568236).cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_cache_44346,(function (p__43831){
var map__43832 = p__43831;
var map__43832__$1 = cljs.core.__destructure_map(map__43832);
var cache = map__43832__$1;
var write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43832__$1,new cljs.core.Keyword(null,"write-handlers","write-handlers",-2097288911));
var writer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43832__$1,new cljs.core.Keyword(null,"writer","writer",-277568236));
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
var _BANG_cache_44350 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-handlers","read-handlers",2109459315),hyperfiddle.electric.impl.io._STAR_read_handlers_STAR_,new cljs.core.Keyword(null,"reader","reader",169660853),null], null));
hyperfiddle.electric.impl.io.transit_reader = (function hyperfiddle$electric$impl$io$transit_reader(){
return new cljs.core.Keyword(null,"reader","reader",169660853).cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_cache_44350,(function (p__43845){
var map__43846 = p__43845;
var map__43846__$1 = cljs.core.__destructure_map(map__43846);
var cache = map__43846__$1;
var read_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43846__$1,new cljs.core.Keyword(null,"read-handlers","read-handlers",2109459315));
var reader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43846__$1,new cljs.core.Keyword(null,"reader","reader",169660853));
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
try{var G__43860 = hyperfiddle.electric.impl.io.decode(x);
console.debug("\uD83D\uDD3D",G__43860);

return G__43860;
}catch (e43858){var t = e43858;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("Failed to decode",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),x], null),t);
}});
hyperfiddle.electric.impl.io.chunk_size = ((65536) >> (2));
hyperfiddle.electric.impl.io.message_reader = (function hyperfiddle$electric$impl$io$message_reader(_QMARK_read){

return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr43862_block_9 = (function hyperfiddle$electric$impl$io$message_reader_$_cr43862_block_9(cr43862_state){
try{var cr43862_place_2 = (cr43862_state[(1)]);
var cr43862_place_4 = (cr43862_state[(3)]);
var cr43862_place_37 = cljs.core.conj_BANG_;
var cr43862_place_38 = cr43862_place_2;
var cr43862_place_39 = hyperfiddle.electric.impl.io.decode_str;
var cr43862_place_40 = cr43862_place_4;
var cr43862_place_41 = (function (){var G__43995 = cr43862_place_40;
var fexpr__43994 = cr43862_place_39;
return (fexpr__43994.cljs$core$IFn$_invoke$arity$1 ? fexpr__43994.cljs$core$IFn$_invoke$arity$1(G__43995) : fexpr__43994.call(null,G__43995));
})();
var cr43862_place_42 = (function (){var G__43997 = cr43862_place_38;
var G__43998 = cr43862_place_41;
var fexpr__43996 = cr43862_place_37;
return (fexpr__43996.cljs$core$IFn$_invoke$arity$2 ? fexpr__43996.cljs$core$IFn$_invoke$arity$2(G__43997,G__43998) : fexpr__43996.call(null,G__43997,G__43998));
})();
(cr43862_state[(0)] = cr43862_block_1);

(cr43862_state[(3)] = null);

(cr43862_state[(1)] = cr43862_place_42);

return cr43862_state;
}catch (e43991){var cr43862_exception = e43991;
(cr43862_state[(0)] = null);

(cr43862_state[(1)] = null);

(cr43862_state[(3)] = null);

throw cr43862_exception;
}});
var cr43862_block_6 = (function hyperfiddle$electric$impl$io$message_reader_$_cr43862_block_6(cr43862_state){
try{var cr43862_place_22 = (cr43862_state[(7)]);
var cr43862_place_30 = missionary.core.unpark();
var cr43862_place_31 = cr43862_place_22;
(cr43862_state[(0)] = cr43862_block_4);

(cr43862_state[(7)] = null);

(cr43862_state[(6)] = cr43862_place_30);

(cr43862_state[(3)] = cr43862_place_31);

return cr43862_state;
}catch (e44000){var cr43862_exception = e44000;
(cr43862_state[(0)] = null);

(cr43862_state[(1)] = null);

(cr43862_state[(3)] = null);

(cr43862_state[(2)] = null);

(cr43862_state[(4)] = null);

(cr43862_state[(5)] = null);

(cr43862_state[(7)] = null);

(cr43862_state[(6)] = null);

throw cr43862_exception;
}});
var cr43862_block_3 = (function hyperfiddle$electric$impl$io$message_reader_$_cr43862_block_3(cr43862_state){
try{var cr43862_place_2 = (cr43862_state[(1)]);
var cr43862_place_4 = (cr43862_state[(3)]);
var cr43862_place_8 = cljs.core.persistent_BANG_;
var cr43862_place_9 = cljs.core.conj_BANG_;
var cr43862_place_10 = cr43862_place_2;
var cr43862_place_11 = cr43862_place_4;
var cr43862_place_12 = cljs.core.transient$;
var cr43862_place_13 = cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IVector], null));
var cr43862_place_14 = (function (){var G__44008 = cr43862_place_13;
var fexpr__44007 = cr43862_place_12;
return (fexpr__44007.cljs$core$IFn$_invoke$arity$1 ? fexpr__44007.cljs$core$IFn$_invoke$arity$1(G__44008) : fexpr__44007.call(null,G__44008));
})();
(cr43862_state[(0)] = cr43862_block_4);

(cr43862_state[(1)] = null);

(cr43862_state[(3)] = null);

(cr43862_state[(5)] = cr43862_place_8);

(cr43862_state[(1)] = cr43862_place_9);

(cr43862_state[(4)] = cr43862_place_10);

(cr43862_state[(6)] = cr43862_place_11);

(cr43862_state[(3)] = cr43862_place_14);

return cr43862_state;
}catch (e44004){var cr43862_exception = e44004;
(cr43862_state[(0)] = null);

(cr43862_state[(2)] = null);

(cr43862_state[(1)] = null);

(cr43862_state[(3)] = null);

throw cr43862_exception;
}});
var cr43862_block_5 = (function hyperfiddle$electric$impl$io$message_reader_$_cr43862_block_5(cr43862_state){
try{var cr43862_place_29 = _QMARK_read;
(cr43862_state[(0)] = cr43862_block_6);

return missionary.core.park(cr43862_place_29);
}catch (e44012){var cr43862_exception = e44012;
(cr43862_state[(0)] = null);

(cr43862_state[(1)] = null);

(cr43862_state[(3)] = null);

(cr43862_state[(2)] = null);

(cr43862_state[(4)] = null);

(cr43862_state[(5)] = null);

(cr43862_state[(7)] = null);

(cr43862_state[(6)] = null);

throw cr43862_exception;
}});
var cr43862_block_7 = (function hyperfiddle$electric$impl$io$message_reader_$_cr43862_block_7(cr43862_state){
try{var cr43862_place_22 = (cr43862_state[(7)]);
var cr43862_place_32 = cljs.core.persistent_BANG_;
var cr43862_place_33 = cr43862_place_22;
var cr43862_place_34 = (function (){var G__44017 = cr43862_place_33;
var fexpr__44016 = cr43862_place_32;
return (fexpr__44016.cljs$core$IFn$_invoke$arity$1 ? fexpr__44016.cljs$core$IFn$_invoke$arity$1(G__44017) : fexpr__44016.call(null,G__44017));
})();
(cr43862_state[(0)] = cr43862_block_8);

(cr43862_state[(7)] = null);

(cr43862_state[(3)] = cr43862_place_34);

return cr43862_state;
}catch (e44014){var cr43862_exception = e44014;
(cr43862_state[(0)] = null);

(cr43862_state[(1)] = null);

(cr43862_state[(2)] = null);

(cr43862_state[(3)] = null);

(cr43862_state[(4)] = null);

(cr43862_state[(5)] = null);

(cr43862_state[(7)] = null);

throw cr43862_exception;
}});
var cr43862_block_10 = (function hyperfiddle$electric$impl$io$message_reader_$_cr43862_block_10(cr43862_state){
try{var cr43862_place_7 = (cr43862_state[(2)]);
(cr43862_state[(0)] = null);

(cr43862_state[(2)] = null);

return cr43862_place_7;
}catch (e44023){var cr43862_exception = e44023;
(cr43862_state[(0)] = null);

(cr43862_state[(2)] = null);

throw cr43862_exception;
}});
var cr43862_block_1 = (function hyperfiddle$electric$impl$io$message_reader_$_cr43862_block_1(cr43862_state){
try{var cr43862_place_3 = _QMARK_read;
(cr43862_state[(0)] = cr43862_block_2);

return missionary.core.park(cr43862_place_3);
}catch (e44026){var cr43862_exception = e44026;
(cr43862_state[(0)] = null);

(cr43862_state[(1)] = null);

throw cr43862_exception;
}});
var cr43862_block_8 = (function hyperfiddle$electric$impl$io$message_reader_$_cr43862_block_8(cr43862_state){
try{var cr43862_place_9 = (cr43862_state[(1)]);
var cr43862_place_28 = (cr43862_state[(3)]);
var cr43862_place_10 = (cr43862_state[(4)]);
var cr43862_place_8 = (cr43862_state[(5)]);
var cr43862_place_35 = (function (){var G__44035 = cr43862_place_10;
var G__44036 = cr43862_place_28;
var fexpr__44034 = cr43862_place_9;
return (fexpr__44034.cljs$core$IFn$_invoke$arity$2 ? fexpr__44034.cljs$core$IFn$_invoke$arity$2(G__44035,G__44036) : fexpr__44034.call(null,G__44035,G__44036));
})();
var cr43862_place_36 = (function (){var G__44038 = cr43862_place_35;
var fexpr__44037 = cr43862_place_8;
return (fexpr__44037.cljs$core$IFn$_invoke$arity$1 ? fexpr__44037.cljs$core$IFn$_invoke$arity$1(G__44038) : fexpr__44037.call(null,G__44038));
})();
(cr43862_state[(0)] = cr43862_block_10);

(cr43862_state[(1)] = null);

(cr43862_state[(3)] = null);

(cr43862_state[(4)] = null);

(cr43862_state[(5)] = null);

(cr43862_state[(2)] = cr43862_place_36);

return cr43862_state;
}catch (e44030){var cr43862_exception = e44030;
(cr43862_state[(0)] = null);

(cr43862_state[(1)] = null);

(cr43862_state[(2)] = null);

(cr43862_state[(3)] = null);

(cr43862_state[(4)] = null);

(cr43862_state[(5)] = null);

throw cr43862_exception;
}});
var cr43862_block_2 = (function hyperfiddle$electric$impl$io$message_reader_$_cr43862_block_2(cr43862_state){
try{var cr43862_place_4 = missionary.core.unpark();
var cr43862_place_5 = cr43862_place_4;
var cr43862_place_6 = typeof cr43862_place_5 === 'string';
var cr43862_place_7 = null;
if(cr43862_place_6){
(cr43862_state[(0)] = cr43862_block_9);

(cr43862_state[(3)] = cr43862_place_4);

return cr43862_state;
} else {
(cr43862_state[(0)] = cr43862_block_3);

(cr43862_state[(3)] = cr43862_place_4);

(cr43862_state[(2)] = cr43862_place_7);

return cr43862_state;
}
}catch (e44043){var cr43862_exception = e44043;
(cr43862_state[(0)] = null);

(cr43862_state[(1)] = null);

throw cr43862_exception;
}});
var cr43862_block_0 = (function hyperfiddle$electric$impl$io$message_reader_$_cr43862_block_0(cr43862_state){
try{var cr43862_place_0 = cljs.core.transient$;
var cr43862_place_1 = cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IVector], null));
var cr43862_place_2 = (function (){var G__44051 = cr43862_place_1;
var fexpr__44050 = cr43862_place_0;
return (fexpr__44050.cljs$core$IFn$_invoke$arity$1 ? fexpr__44050.cljs$core$IFn$_invoke$arity$1(G__44051) : fexpr__44050.call(null,G__44051));
})();
(cr43862_state[(0)] = cr43862_block_1);

(cr43862_state[(1)] = cr43862_place_2);

return cr43862_state;
}catch (e44047){var cr43862_exception = e44047;
(cr43862_state[(0)] = null);

throw cr43862_exception;
}});
var cr43862_block_4 = (function hyperfiddle$electric$impl$io$message_reader_$_cr43862_block_4(cr43862_state){
try{var cr43862_place_14 = (cr43862_state[(3)]);
var cr43862_place_11 = (cr43862_state[(6)]);
var cr43862_place_15 = hyperfiddle.electric.impl.io.decode_numbers;
var cr43862_place_16 = cr43862_place_11;
var cr43862_place_17 = (function (){var G__44058 = cr43862_place_16;
var fexpr__44057 = cr43862_place_15;
return (fexpr__44057.cljs$core$IFn$_invoke$arity$1 ? fexpr__44057.cljs$core$IFn$_invoke$arity$1(G__44058) : fexpr__44057.call(null,G__44058));
})();
var cr43862_place_18 = cljs.core.reduce;
var cr43862_place_19 = cljs.core.conj_BANG_;
var cr43862_place_20 = cr43862_place_14;
var cr43862_place_21 = cr43862_place_17;
var cr43862_place_22 = (function (){var G__44060 = cr43862_place_19;
var G__44061 = cr43862_place_20;
var G__44062 = cr43862_place_21;
var fexpr__44059 = cr43862_place_18;
return (fexpr__44059.cljs$core$IFn$_invoke$arity$3 ? fexpr__44059.cljs$core$IFn$_invoke$arity$3(G__44060,G__44061,G__44062) : fexpr__44059.call(null,G__44060,G__44061,G__44062));
})();
var cr43862_place_23 = cljs.core.count;
var cr43862_place_24 = cr43862_place_17;
var cr43862_place_25 = (function (){var G__44064 = cr43862_place_24;
var fexpr__44063 = cr43862_place_23;
return (fexpr__44063.cljs$core$IFn$_invoke$arity$1 ? fexpr__44063.cljs$core$IFn$_invoke$arity$1(G__44064) : fexpr__44063.call(null,G__44064));
})();
var cr43862_place_26 = hyperfiddle.electric.impl.io.chunk_size;
var cr43862_place_27 = (cr43862_place_25 < cr43862_place_26);
var cr43862_place_28 = null;
if(cr43862_place_27){
(cr43862_state[(0)] = cr43862_block_7);

(cr43862_state[(3)] = null);

(cr43862_state[(6)] = null);

(cr43862_state[(3)] = cr43862_place_28);

(cr43862_state[(7)] = cr43862_place_22);

return cr43862_state;
} else {
(cr43862_state[(0)] = cr43862_block_5);

(cr43862_state[(7)] = cr43862_place_22);

return cr43862_state;
}
}catch (e44054){var cr43862_exception = e44054;
(cr43862_state[(0)] = null);

(cr43862_state[(1)] = null);

(cr43862_state[(3)] = null);

(cr43862_state[(2)] = null);

(cr43862_state[(4)] = null);

(cr43862_state[(5)] = null);

(cr43862_state[(6)] = null);

throw cr43862_exception;
}});
return cloroutine.impl.coroutine((function (){var G__44067 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((8));
(G__44067[(0)] = cr43862_block_0);

return G__44067;
})());
})(),missionary.core.sp_run);
});
/**
 * Returns a function taking an Electric message and returning a task writing it as individual frames using provided
 * function. Might cut a message into chunks if its size would exceed the server payload limit.
 * An empty message (0b) is written to notify the end of frame.
 */
hyperfiddle.electric.impl.io.message_writer = (function hyperfiddle$electric$impl$io$message_writer(write){
return (function (p1__44068_SHARP_){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr44073_block_4 = (function hyperfiddle$electric$impl$io$message_writer_$_cr44073_block_4(cr44073_state){
try{var cr44073_place_26 = (cr44073_state[(4)]);
var cr44073_place_20 = (cr44073_state[(5)]);
var cr44073_place_31 = cr44073_place_26;
var cr44073_place_32 = cljs.core.ex_info;
var cr44073_place_33 = "Failed to encode";
var cr44073_place_34 = new cljs.core.Keyword(null,"value","value",305978217);
var cr44073_place_35 = cr44073_place_20;
var cr44073_place_36 = cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([cr44073_place_34,cr44073_place_35]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr44073_place_37 = cr44073_place_31;
var cr44073_place_38 = (function (){var G__44195 = cr44073_place_33;
var G__44196 = cr44073_place_36;
var G__44197 = cr44073_place_37;
var fexpr__44194 = cr44073_place_32;
return (fexpr__44194.cljs$core$IFn$_invoke$arity$3 ? fexpr__44194.cljs$core$IFn$_invoke$arity$3(G__44195,G__44196,G__44197) : fexpr__44194.call(null,G__44195,G__44196,G__44197));
})();
var cr44073_place_39 = (function(){throw cr44073_place_38})();
(cr44073_state[(0)] = null);

(cr44073_state[(2)] = null);

(cr44073_state[(3)] = null);

(cr44073_state[(4)] = null);

(cr44073_state[(5)] = null);

(cr44073_state[(1)] = null);

return null;
}catch (e44191){var cr44073_exception = e44191;
(cr44073_state[(0)] = cr44073_block_5);

(cr44073_state[(5)] = null);

(cr44073_state[(3)] = true);

(cr44073_state[(4)] = cr44073_exception);

return cr44073_state;
}});
var cr44073_block_12 = (function hyperfiddle$electric$impl$io$message_writer_$_cr44073_block_12(cr44073_state){
try{var cr44073_place_48 = (cr44073_state[(2)]);
var cr44073_place_72 = missionary.core.unpark();
var cr44073_place_73 = cljs.core.subvec;
var cr44073_place_74 = cr44073_place_48;
var cr44073_place_75 = hyperfiddle.electric.impl.io.chunk_size;
var cr44073_place_76 = (function (){var G__44203 = cr44073_place_74;
var G__44204 = cr44073_place_75;
var fexpr__44202 = cr44073_place_73;
return (fexpr__44202.cljs$core$IFn$_invoke$arity$2 ? fexpr__44202.cljs$core$IFn$_invoke$arity$2(G__44203,G__44204) : fexpr__44202.call(null,G__44203,G__44204));
})();
(cr44073_state[(0)] = cr44073_block_8);

(cr44073_state[(2)] = cr44073_place_76);

return cr44073_state;
}catch (e44199){var cr44073_exception = e44199;
(cr44073_state[(0)] = null);

(cr44073_state[(1)] = null);

(cr44073_state[(2)] = null);

throw cr44073_exception;
}});
var cr44073_block_14 = (function hyperfiddle$electric$impl$io$message_writer_$_cr44073_block_14(cr44073_state){
try{var cr44073_place_9 = (cr44073_state[(1)]);
(cr44073_state[(0)] = null);

(cr44073_state[(1)] = null);

return cr44073_place_9;
}catch (e44205){var cr44073_exception = e44205;
(cr44073_state[(0)] = null);

(cr44073_state[(1)] = null);

throw cr44073_exception;
}});
var cr44073_block_9 = (function hyperfiddle$electric$impl$io$message_writer_$_cr44073_block_9(cr44073_state){
try{var cr44073_place_48 = (cr44073_state[(2)]);
var cr44073_place_55 = hyperfiddle.electric.impl.io.encode_numbers;
var cr44073_place_56 = cr44073_place_48;
var cr44073_place_57 = (function (){var G__44210 = cr44073_place_56;
var fexpr__44209 = cr44073_place_55;
return (fexpr__44209.cljs$core$IFn$_invoke$arity$1 ? fexpr__44209.cljs$core$IFn$_invoke$arity$1(G__44210) : fexpr__44209.call(null,G__44210));
})();
var cr44073_place_58 = write;
var cr44073_place_59 = cr44073_place_57;
var cr44073_place_60 = (function (){var G__44212 = cr44073_place_59;
var fexpr__44211 = cr44073_place_58;
return (fexpr__44211.cljs$core$IFn$_invoke$arity$1 ? fexpr__44211.cljs$core$IFn$_invoke$arity$1(G__44212) : fexpr__44211.call(null,G__44212));
})();
(cr44073_state[(0)] = cr44073_block_10);

(cr44073_state[(2)] = null);

return missionary.core.park(cr44073_place_60);
}catch (e44207){var cr44073_exception = e44207;
(cr44073_state[(0)] = null);

(cr44073_state[(3)] = null);

(cr44073_state[(1)] = null);

(cr44073_state[(2)] = null);

throw cr44073_exception;
}});
var cr44073_block_8 = (function hyperfiddle$electric$impl$io$message_writer_$_cr44073_block_8(cr44073_state){
try{var cr44073_place_48 = (cr44073_state[(2)]);
var cr44073_place_49 = cljs.core.count;
var cr44073_place_50 = cr44073_place_48;
var cr44073_place_51 = (function (){var G__44217 = cr44073_place_50;
var fexpr__44216 = cr44073_place_49;
return (fexpr__44216.cljs$core$IFn$_invoke$arity$1 ? fexpr__44216.cljs$core$IFn$_invoke$arity$1(G__44217) : fexpr__44216.call(null,G__44217));
})();
var cr44073_place_52 = hyperfiddle.electric.impl.io.chunk_size;
var cr44073_place_53 = (cr44073_place_51 >= cr44073_place_52);
var cr44073_place_54 = null;
if(cr44073_place_53){
(cr44073_state[(0)] = cr44073_block_11);

return cr44073_state;
} else {
(cr44073_state[(0)] = cr44073_block_9);

(cr44073_state[(3)] = cr44073_place_54);

return cr44073_state;
}
}catch (e44214){var cr44073_exception = e44214;
(cr44073_state[(0)] = null);

(cr44073_state[(1)] = null);

(cr44073_state[(2)] = null);

throw cr44073_exception;
}});
var cr44073_block_5 = (function hyperfiddle$electric$impl$io$message_writer_$_cr44073_block_5(cr44073_state){
try{var cr44073_place_27 = (cr44073_state[(3)]);
var cr44073_place_26 = (cr44073_state[(4)]);
var cr44073_place_40 = (cljs.core.truth_(cr44073_place_27)?(function(){throw cr44073_place_26})():cr44073_place_26);
var cr44073_place_41 = write;
var cr44073_place_42 = cr44073_place_40;
var cr44073_place_43 = (function (){var G__44222 = cr44073_place_42;
var fexpr__44221 = cr44073_place_41;
return (fexpr__44221.cljs$core$IFn$_invoke$arity$1 ? fexpr__44221.cljs$core$IFn$_invoke$arity$1(G__44222) : fexpr__44221.call(null,G__44222));
})();
(cr44073_state[(0)] = cr44073_block_6);

(cr44073_state[(3)] = null);

(cr44073_state[(4)] = null);

return missionary.core.park(cr44073_place_43);
}catch (e44219){var cr44073_exception = e44219;
(cr44073_state[(0)] = null);

(cr44073_state[(2)] = null);

(cr44073_state[(3)] = null);

(cr44073_state[(4)] = null);

(cr44073_state[(1)] = null);

throw cr44073_exception;
}});
var cr44073_block_13 = (function hyperfiddle$electric$impl$io$message_writer_$_cr44073_block_13(cr44073_state){
try{var cr44073_place_54 = (cr44073_state[(3)]);
(cr44073_state[(0)] = cr44073_block_14);

(cr44073_state[(3)] = null);

(cr44073_state[(1)] = cr44073_place_54);

return cr44073_state;
}catch (e44227){var cr44073_exception = e44227;
(cr44073_state[(0)] = null);

(cr44073_state[(3)] = null);

(cr44073_state[(1)] = null);

throw cr44073_exception;
}});
var cr44073_block_3 = (function hyperfiddle$electric$impl$io$message_writer_$_cr44073_block_3(cr44073_state){
try{var cr44073_place_20 = (cr44073_state[(5)]);
var cr44073_place_28 = hyperfiddle.electric.impl.io.encode;
var cr44073_place_29 = cr44073_place_20;
var cr44073_place_30 = (function (){var G__44238 = cr44073_place_29;
var fexpr__44235 = cr44073_place_28;
return (fexpr__44235.cljs$core$IFn$_invoke$arity$1 ? fexpr__44235.cljs$core$IFn$_invoke$arity$1(G__44238) : fexpr__44235.call(null,G__44238));
})();
(cr44073_state[(0)] = cr44073_block_5);

(cr44073_state[(5)] = null);

(cr44073_state[(4)] = cr44073_place_30);

return cr44073_state;
}catch (e44230){var cr44073_exception = e44230;
(cr44073_state[(0)] = cr44073_block_4);

(cr44073_state[(4)] = cr44073_exception);

return cr44073_state;
}});
var cr44073_block_7 = (function hyperfiddle$electric$impl$io$message_writer_$_cr44073_block_7(cr44073_state){
try{var cr44073_place_46 = cljs.core.peek;
var cr44073_place_47 = p1__44068_SHARP_;
var cr44073_place_48 = (function (){var G__44242 = cr44073_place_47;
var fexpr__44241 = cr44073_place_46;
return (fexpr__44241.cljs$core$IFn$_invoke$arity$1 ? fexpr__44241.cljs$core$IFn$_invoke$arity$1(G__44242) : fexpr__44241.call(null,G__44242));
})();
(cr44073_state[(0)] = cr44073_block_8);

(cr44073_state[(2)] = cr44073_place_48);

return cr44073_state;
}catch (e44240){var cr44073_exception = e44240;
(cr44073_state[(0)] = null);

(cr44073_state[(1)] = null);

throw cr44073_exception;
}});
var cr44073_block_11 = (function hyperfiddle$electric$impl$io$message_writer_$_cr44073_block_11(cr44073_state){
try{var cr44073_place_48 = (cr44073_state[(2)]);
var cr44073_place_62 = hyperfiddle.electric.impl.io.encode_numbers;
var cr44073_place_63 = cljs.core.subvec;
var cr44073_place_64 = cr44073_place_48;
var cr44073_place_65 = (0);
var cr44073_place_66 = hyperfiddle.electric.impl.io.chunk_size;
var cr44073_place_67 = (function (){var G__44252 = cr44073_place_64;
var G__44253 = cr44073_place_65;
var G__44254 = cr44073_place_66;
var fexpr__44251 = cr44073_place_63;
return (fexpr__44251.cljs$core$IFn$_invoke$arity$3 ? fexpr__44251.cljs$core$IFn$_invoke$arity$3(G__44252,G__44253,G__44254) : fexpr__44251.call(null,G__44252,G__44253,G__44254));
})();
var cr44073_place_68 = (function (){var G__44257 = cr44073_place_67;
var fexpr__44256 = cr44073_place_62;
return (fexpr__44256.cljs$core$IFn$_invoke$arity$1 ? fexpr__44256.cljs$core$IFn$_invoke$arity$1(G__44257) : fexpr__44256.call(null,G__44257));
})();
var cr44073_place_69 = write;
var cr44073_place_70 = cr44073_place_68;
var cr44073_place_71 = (function (){var G__44260 = cr44073_place_70;
var fexpr__44259 = cr44073_place_69;
return (fexpr__44259.cljs$core$IFn$_invoke$arity$1 ? fexpr__44259.cljs$core$IFn$_invoke$arity$1(G__44260) : fexpr__44259.call(null,G__44260));
})();
(cr44073_state[(0)] = cr44073_block_12);

return missionary.core.park(cr44073_place_71);
}catch (e44246){var cr44073_exception = e44246;
(cr44073_state[(0)] = null);

(cr44073_state[(1)] = null);

(cr44073_state[(2)] = null);

throw cr44073_exception;
}});
var cr44073_block_6 = (function hyperfiddle$electric$impl$io$message_writer_$_cr44073_block_6(cr44073_state){
try{var cr44073_place_21 = (cr44073_state[(2)]);
var cr44073_place_44 = missionary.core.unpark();
var cr44073_place_45 = cr44073_place_21;
(cr44073_state[(0)] = cr44073_block_1);

(cr44073_state[(2)] = null);

(cr44073_state[(1)] = cr44073_place_45);

return cr44073_state;
}catch (e44261){var cr44073_exception = e44261;
(cr44073_state[(0)] = null);

(cr44073_state[(2)] = null);

(cr44073_state[(1)] = null);

throw cr44073_exception;
}});
var cr44073_block_0 = (function hyperfiddle$electric$impl$io$message_writer_$_cr44073_block_0(cr44073_state){
try{var cr44073_place_0 = cljs.core.seq;
var cr44073_place_1 = cljs.core.pop;
var cr44073_place_2 = p1__44068_SHARP_;
var cr44073_place_3 = (function (){var G__44267 = cr44073_place_2;
var fexpr__44266 = cr44073_place_1;
return (fexpr__44266.cljs$core$IFn$_invoke$arity$1 ? fexpr__44266.cljs$core$IFn$_invoke$arity$1(G__44267) : fexpr__44266.call(null,G__44267));
})();
var cr44073_place_4 = (function (){var G__44269 = cr44073_place_3;
var fexpr__44268 = cr44073_place_0;
return (fexpr__44268.cljs$core$IFn$_invoke$arity$1 ? fexpr__44268.cljs$core$IFn$_invoke$arity$1(G__44269) : fexpr__44268.call(null,G__44269));
})();
(cr44073_state[(0)] = cr44073_block_1);

(cr44073_state[(1)] = cr44073_place_4);

return cr44073_state;
}catch (e44264){var cr44073_exception = e44264;
(cr44073_state[(0)] = null);

throw cr44073_exception;
}});
var cr44073_block_10 = (function hyperfiddle$electric$impl$io$message_writer_$_cr44073_block_10(cr44073_state){
try{var cr44073_place_61 = missionary.core.unpark();
(cr44073_state[(0)] = cr44073_block_13);

(cr44073_state[(3)] = cr44073_place_61);

return cr44073_state;
}catch (e44274){var cr44073_exception = e44274;
(cr44073_state[(0)] = null);

(cr44073_state[(3)] = null);

(cr44073_state[(1)] = null);

throw cr44073_exception;
}});
var cr44073_block_1 = (function hyperfiddle$electric$impl$io$message_writer_$_cr44073_block_1(cr44073_state){
try{var cr44073_place_4 = (cr44073_state[(1)]);
var cr44073_place_5 = cr44073_place_4;
var cr44073_place_6 = cr44073_place_5;
var cr44073_place_7 = null;
var cr44073_place_8 = (cr44073_place_6 == cr44073_place_7);
var cr44073_place_9 = null;
if(cr44073_place_8){
(cr44073_state[(0)] = cr44073_block_7);

(cr44073_state[(1)] = null);

(cr44073_state[(1)] = cr44073_place_9);

return cr44073_state;
} else {
(cr44073_state[(0)] = cr44073_block_2);

(cr44073_state[(2)] = cr44073_place_5);

return cr44073_state;
}
}catch (e44275){var cr44073_exception = e44275;
(cr44073_state[(0)] = null);

(cr44073_state[(1)] = null);

throw cr44073_exception;
}});
var cr44073_block_2 = (function hyperfiddle$electric$impl$io$message_writer_$_cr44073_block_2(cr44073_state){
try{var cr44073_place_5 = (cr44073_state[(2)]);
var cr44073_place_10 = cr44073_place_5;
var cr44073_place_11 = cljs.core.seq;
var cr44073_place_12 = cr44073_place_10;
var cr44073_place_13 = (function (){var G__44281 = cr44073_place_12;
var fexpr__44280 = cr44073_place_11;
return (fexpr__44280.cljs$core$IFn$_invoke$arity$1 ? fexpr__44280.cljs$core$IFn$_invoke$arity$1(G__44281) : fexpr__44280.call(null,G__44281));
})();
var cr44073_place_14 = cljs.core.first;
var cr44073_place_15 = cr44073_place_13;
var cr44073_place_16 = (function (){var G__44284 = cr44073_place_15;
var fexpr__44283 = cr44073_place_14;
return (fexpr__44283.cljs$core$IFn$_invoke$arity$1 ? fexpr__44283.cljs$core$IFn$_invoke$arity$1(G__44284) : fexpr__44283.call(null,G__44284));
})();
var cr44073_place_17 = cljs.core.next;
var cr44073_place_18 = cr44073_place_13;
var cr44073_place_19 = (function (){var G__44286 = cr44073_place_18;
var fexpr__44285 = cr44073_place_17;
return (fexpr__44285.cljs$core$IFn$_invoke$arity$1 ? fexpr__44285.cljs$core$IFn$_invoke$arity$1(G__44286) : fexpr__44285.call(null,G__44286));
})();
var cr44073_place_20 = cr44073_place_16;
var cr44073_place_21 = cr44073_place_19;
var cr44073_place_22 = console.debug;
var cr44073_place_23 = "\uD83D\uDD3C";
var cr44073_place_24 = cr44073_place_20;
var cr44073_place_25 = (function (){var G__44289 = cr44073_place_23;
var G__44290 = cr44073_place_24;
var fexpr__44288 = cr44073_place_22;
return (fexpr__44288.cljs$core$IFn$_invoke$arity$2 ? fexpr__44288.cljs$core$IFn$_invoke$arity$2(G__44289,G__44290) : fexpr__44288.call(null,G__44289,G__44290));
})();
var cr44073_place_26 = null;
var cr44073_place_27 = false;
(cr44073_state[(0)] = cr44073_block_3);

(cr44073_state[(2)] = null);

(cr44073_state[(2)] = cr44073_place_21);

(cr44073_state[(3)] = cr44073_place_27);

(cr44073_state[(4)] = cr44073_place_26);

(cr44073_state[(5)] = cr44073_place_20);

return cr44073_state;
}catch (e44278){var cr44073_exception = e44278;
(cr44073_state[(0)] = null);

(cr44073_state[(2)] = null);

(cr44073_state[(1)] = null);

throw cr44073_exception;
}});
return cloroutine.impl.coroutine((function (){var G__44291 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((6));
(G__44291[(0)] = cr44073_block_0);

return G__44291;
})());
})(),missionary.core.sp_run);
});
});
/**
 * A transducer partitioning a sequence of network messages into Electric events.
 */
hyperfiddle.electric.impl.io.decoder = (function hyperfiddle$electric$impl$io$decoder(rf){
var data = (function (){var G__44294 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
(G__44294[(0)] = cljs.core.PersistentVector.EMPTY);

(G__44294[(1)] = cljs.core.PersistentVector.EMPTY);

return G__44294;
})();
return (function() {
var G__44358 = null;
var G__44358__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__44358__1 = (function (r){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentVector.EMPTY,(data[(0)]),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(data[(1)])], 0))){
} else {
throw (new Error("Assert failed: (= [] (aget data 0) (aget data 1))"));
}

return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(r) : rf.call(null,r));
});
var G__44358__2 = (function (r,x){
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
G__44358 = function(r,x){
switch(arguments.length){
case 0:
return G__44358__0.call(this);
case 1:
return G__44358__1.call(this,r);
case 2:
return G__44358__2.call(this,r,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__44358.cljs$core$IFn$_invoke$arity$0 = G__44358__0;
G__44358.cljs$core$IFn$_invoke$arity$1 = G__44358__1;
G__44358.cljs$core$IFn$_invoke$arity$2 = G__44358__2;
return G__44358;
})()
});
/**
 * A transducer expanding Electric events to a sequence of network messages.
 */
hyperfiddle.electric.impl.io.encoder = (function hyperfiddle$electric$impl$io$encoder(rf){
return (function() {
var G__44359 = null;
var G__44359__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__44359__1 = (function (r){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(r) : rf.call(null,r));
});
var G__44359__2 = (function (r,x){
var r__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,r,cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.io.encode),cljs.core.pop(x)], 0)));
var r__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,r__$1,cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.partition_all.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.io.chunk_size),cljs.core.map.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.io.encode_numbers),cljs.core.peek(x)], 0)));
var G__44307 = cljs.core.mod(cljs.core.count(cljs.core.peek(x)),hyperfiddle.electric.impl.io.chunk_size);
switch (G__44307) {
case (0):
var G__44308 = r__$2;
var G__44309 = hyperfiddle.electric.impl.io.encode_numbers(cljs.core.PersistentVector.EMPTY);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__44308,G__44309) : rf.call(null,G__44308,G__44309));

break;
default:
return r__$2;

}
});
G__44359 = function(r,x){
switch(arguments.length){
case 0:
return G__44359__0.call(this);
case 1:
return G__44359__1.call(this,r);
case 2:
return G__44359__2.call(this,r,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__44359.cljs$core$IFn$_invoke$arity$0 = G__44359__0;
G__44359.cljs$core$IFn$_invoke$arity$1 = G__44359__1;
G__44359.cljs$core$IFn$_invoke$arity$2 = G__44359__2;
return G__44359;
})()
});
hyperfiddle.electric.impl.io.foreach = (function hyperfiddle$electric$impl$io$foreach(var_args){
var G__44312 = arguments.length;
switch (G__44312) {
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
