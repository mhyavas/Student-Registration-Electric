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
var G__43784 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(((size * (2)) + (1)));
var arr43786_44233 = G__43784;
(arr43786_44233[(size * (2))] = cljs.core.identity((0)));

return G__43784;
});
hyperfiddle.electric.impl.io.cache_add = (function hyperfiddle$electric$impl$io$cache_add(cache,k,v){
if(cljs.core.truth_((function (){var i = (0);
while(true){
if((i < (cljs.core.count(cache) - (1)))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,hyperfiddle.electric.impl.array_fields.get(cache,i))){
var arr43792_44234 = cache;
(arr43792_44234[(i + (1))] = cljs.core.identity(v));

return true;
} else {
var G__44235 = (i + (2));
i = G__44235;
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
var widx = hyperfiddle.electric.impl.array_fields.getswap(cache,(cljs.core.count(cache) - (1)),(function (p1__43790_SHARP_){
return cljs.core.mod((p1__43790_SHARP_ + (2)),(cljs.core.count(cache) - (1)));
}));
var arr43796 = cache;
(arr43796[widx] = cljs.core.identity(k));

return (arr43796[(widx + (1))] = cljs.core.identity(v));
}
});
hyperfiddle.electric.impl.io.cache_get = (function hyperfiddle$electric$impl$io$cache_get(cache,k){
var i = (0);
while(true){
if((i < (cljs.core.count(cache) - (1)))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,hyperfiddle.electric.impl.array_fields.get(cache,i))){
return hyperfiddle.electric.impl.array_fields.get(cache,(i + (1)));
} else {
var G__44236 = (i + (2));
i = G__44236;
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
var G__44237 = (i + (2));
var G__44238 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ac,hyperfiddle.electric.impl.array_fields.get(cache,i),hyperfiddle.electric.impl.array_fields.get(cache,(i + (1))));
i = G__44237;
ac = G__44238;
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
var temp__5808__auto___44239 = cljs.core.ex_cause(fi);
if((temp__5808__auto___44239 == null)){
} else {
var cause_44240 = temp__5808__auto___44239;
if((cause_44240 instanceof hyperfiddle.electric.FailureInfo)){
} else {
hyperfiddle.electric.impl.io.cache_add(hyperfiddle.electric.impl.io._BANG_ex_cache,id,cause_44240);
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
hyperfiddle.electric.impl.io.failure_reader = cognitect.transit.read_handler((function (p__43813){
var vec__43814 = p__43813;
var seq__43815 = cljs.core.seq(vec__43814);
var first__43816 = cljs.core.first(seq__43815);
var seq__43815__$1 = cljs.core.next(seq__43815);
var tag = first__43816;
var args = seq__43815__$1;
var G__43817 = tag;
var G__43817__$1 = (((G__43817 instanceof cljs.core.Keyword))?G__43817.fqn:null);
switch (G__43817__$1) {
case "exception":
var vec__43820 = args;
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43820,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43820,(1),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43820,(2),null);
return (new hyperfiddle.electric.Failure(hyperfiddle.electric.debug.ex_info_STAR_.cljs$core$IFn$_invoke$arity$4(message,data,id,null)));

break;
case "remote":
var vec__43825 = args;
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43825,(0),null);
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43817__$1)].join('')));

}
}));
hyperfiddle.electric.impl.io.read_opts = (function hyperfiddle$electric$impl$io$read_opts(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hyperfiddle.electric.impl.io._STAR_read_handlers_STAR_,new cljs.core.PersistentArrayMap(null, 1, ["failure",hyperfiddle.electric.impl.io.failure_reader], null)], 0))], null);
});
hyperfiddle.electric.impl.io.set_ints = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce_kv,(function (r,i,n){
var offset = (i << (2));
var G__43837 = r;
G__43837.setInt32(offset,n);

return G__43837;
}));
/**
 * Encode a control frame to a binary segment.
 */
hyperfiddle.electric.impl.io.encode_numbers = (function hyperfiddle$electric$impl$io$encode_numbers(xs){
var required = (cljs.core.count(xs) << (2));
var G__43840 = (new ArrayBuffer(required));
hyperfiddle.electric.impl.io.set_ints((new DataView(G__43840)),xs);

return G__43840;
});

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43843 = (function (b,meta43844){
this.b = b;
this.meta43844 = meta43844;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43843.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43845,meta43844__$1){
var self__ = this;
var _43845__$1 = this;
return (new hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43843(self__.b,meta43844__$1));
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43843.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43845){
var self__ = this;
var _43845__$1 = this;
return self__.meta43844;
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43843.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,rf,r){
var self__ = this;
var ___$1 = this;
var l = self__.b.byteLength;
var v = (new DataView(self__.b));
var r__$1 = r;
var i = (0);
while(true){
if((i < l)){
var G__44242 = (function (){var G__43855 = r__$1;
var G__43856 = v.getInt32(i);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__43855,G__43856) : rf.call(null,G__43855,G__43856));
})();
var G__44243 = (i + (4));
r__$1 = G__44242;
i = G__44243;
continue;
} else {
return r__$1;
}
break;
}
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43843.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"meta43844","meta43844",2136812339,null)], null);
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43843.cljs$lang$type = true);

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43843.cljs$lang$ctorStr = "hyperfiddle.electric.impl.io/t_hyperfiddle$electric$impl$io43843");

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43843.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.io/t_hyperfiddle$electric$impl$io43843");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.io/t_hyperfiddle$electric$impl$io43843.
 */
hyperfiddle.electric.impl.io.__GT_t_hyperfiddle$electric$impl$io43843 = (function hyperfiddle$electric$impl$io$__GT_t_hyperfiddle$electric$impl$io43843(b,meta43844){
return (new hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43843(b,meta43844));
});


/**
 * Decode a control frame from a binary segment.
 */
hyperfiddle.electric.impl.io.decode_numbers = (function hyperfiddle$electric$impl$io$decode_numbers(b){
return cljs.core.vec((new hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43843(b,cljs.core.PersistentArrayMap.EMPTY)));
});
var _BANG_cache_44244 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write-handlers","write-handlers",-2097288911),hyperfiddle.electric.impl.io._STAR_write_handlers_STAR_,new cljs.core.Keyword(null,"writer","writer",-277568236),null], null));
hyperfiddle.electric.impl.io.transit_writer = (function hyperfiddle$electric$impl$io$transit_writer(){
return new cljs.core.Keyword(null,"writer","writer",-277568236).cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_cache_44244,(function (p__43865){
var map__43866 = p__43865;
var map__43866__$1 = cljs.core.__destructure_map(map__43866);
var cache = map__43866__$1;
var write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43866__$1,new cljs.core.Keyword(null,"write-handlers","write-handlers",-2097288911));
var writer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43866__$1,new cljs.core.Keyword(null,"writer","writer",-277568236));
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
var _BANG_cache_44245 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-handlers","read-handlers",2109459315),hyperfiddle.electric.impl.io._STAR_read_handlers_STAR_,new cljs.core.Keyword(null,"reader","reader",169660853),null], null));
hyperfiddle.electric.impl.io.transit_reader = (function hyperfiddle$electric$impl$io$transit_reader(){
return new cljs.core.Keyword(null,"reader","reader",169660853).cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_cache_44245,(function (p__43874){
var map__43875 = p__43874;
var map__43875__$1 = cljs.core.__destructure_map(map__43875);
var cache = map__43875__$1;
var read_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43875__$1,new cljs.core.Keyword(null,"read-handlers","read-handlers",2109459315));
var reader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43875__$1,new cljs.core.Keyword(null,"reader","reader",169660853));
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
try{var G__43884 = hyperfiddle.electric.impl.io.decode(x);
console.debug("\uD83D\uDD3D",G__43884);

return G__43884;
}catch (e43883){var t = e43883;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("Failed to decode",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),x], null),t);
}});
hyperfiddle.electric.impl.io.chunk_size = ((65536) >> (2));
hyperfiddle.electric.impl.io.message_reader = (function hyperfiddle$electric$impl$io$message_reader(_QMARK_read){

return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr43893_block_3 = (function hyperfiddle$electric$impl$io$message_reader_$_cr43893_block_3(cr43893_state){
try{var cr43893_place_2 = (cr43893_state[(1)]);
var cr43893_place_4 = (cr43893_state[(2)]);
var cr43893_place_8 = cljs.core.persistent_BANG_;
var cr43893_place_9 = cljs.core.conj_BANG_;
var cr43893_place_10 = cr43893_place_2;
var cr43893_place_11 = cr43893_place_4;
var cr43893_place_12 = cljs.core.transient$;
var cr43893_place_13 = cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IVector], null));
var cr43893_place_14 = (function (){var G__43996 = cr43893_place_13;
var fexpr__43995 = cr43893_place_12;
return (fexpr__43995.cljs$core$IFn$_invoke$arity$1 ? fexpr__43995.cljs$core$IFn$_invoke$arity$1(G__43996) : fexpr__43995.call(null,G__43996));
})();
(cr43893_state[(0)] = cr43893_block_4);

(cr43893_state[(1)] = null);

(cr43893_state[(2)] = null);

(cr43893_state[(1)] = cr43893_place_8);

(cr43893_state[(2)] = cr43893_place_9);

(cr43893_state[(6)] = cr43893_place_10);

(cr43893_state[(4)] = cr43893_place_11);

(cr43893_state[(5)] = cr43893_place_14);

return cr43893_state;
}catch (e43990){var cr43893_exception = e43990;
(cr43893_state[(0)] = null);

(cr43893_state[(1)] = null);

(cr43893_state[(2)] = null);

(cr43893_state[(3)] = null);

throw cr43893_exception;
}});
var cr43893_block_10 = (function hyperfiddle$electric$impl$io$message_reader_$_cr43893_block_10(cr43893_state){
try{var cr43893_place_7 = (cr43893_state[(3)]);
(cr43893_state[(0)] = null);

(cr43893_state[(3)] = null);

return cr43893_place_7;
}catch (e44000){var cr43893_exception = e44000;
(cr43893_state[(0)] = null);

(cr43893_state[(3)] = null);

throw cr43893_exception;
}});
var cr43893_block_6 = (function hyperfiddle$electric$impl$io$message_reader_$_cr43893_block_6(cr43893_state){
try{var cr43893_place_22 = (cr43893_state[(7)]);
var cr43893_place_30 = missionary.core.unpark();
var cr43893_place_31 = cr43893_place_22;
(cr43893_state[(0)] = cr43893_block_4);

(cr43893_state[(7)] = null);

(cr43893_state[(4)] = cr43893_place_30);

(cr43893_state[(5)] = cr43893_place_31);

return cr43893_state;
}catch (e44002){var cr43893_exception = e44002;
(cr43893_state[(0)] = null);

(cr43893_state[(1)] = null);

(cr43893_state[(2)] = null);

(cr43893_state[(7)] = null);

(cr43893_state[(4)] = null);

(cr43893_state[(3)] = null);

(cr43893_state[(5)] = null);

(cr43893_state[(6)] = null);

throw cr43893_exception;
}});
var cr43893_block_5 = (function hyperfiddle$electric$impl$io$message_reader_$_cr43893_block_5(cr43893_state){
try{var cr43893_place_29 = _QMARK_read;
(cr43893_state[(0)] = cr43893_block_6);

return missionary.core.park(cr43893_place_29);
}catch (e44005){var cr43893_exception = e44005;
(cr43893_state[(0)] = null);

(cr43893_state[(1)] = null);

(cr43893_state[(2)] = null);

(cr43893_state[(7)] = null);

(cr43893_state[(4)] = null);

(cr43893_state[(3)] = null);

(cr43893_state[(5)] = null);

(cr43893_state[(6)] = null);

throw cr43893_exception;
}});
var cr43893_block_2 = (function hyperfiddle$electric$impl$io$message_reader_$_cr43893_block_2(cr43893_state){
try{var cr43893_place_4 = missionary.core.unpark();
var cr43893_place_5 = cr43893_place_4;
var cr43893_place_6 = typeof cr43893_place_5 === 'string';
var cr43893_place_7 = null;
if(cr43893_place_6){
(cr43893_state[(0)] = cr43893_block_9);

(cr43893_state[(2)] = cr43893_place_4);

return cr43893_state;
} else {
(cr43893_state[(0)] = cr43893_block_3);

(cr43893_state[(2)] = cr43893_place_4);

(cr43893_state[(3)] = cr43893_place_7);

return cr43893_state;
}
}catch (e44007){var cr43893_exception = e44007;
(cr43893_state[(0)] = null);

(cr43893_state[(1)] = null);

throw cr43893_exception;
}});
var cr43893_block_7 = (function hyperfiddle$electric$impl$io$message_reader_$_cr43893_block_7(cr43893_state){
try{var cr43893_place_22 = (cr43893_state[(7)]);
var cr43893_place_32 = cljs.core.persistent_BANG_;
var cr43893_place_33 = cr43893_place_22;
var cr43893_place_34 = (function (){var G__44012 = cr43893_place_33;
var fexpr__44010 = cr43893_place_32;
return (fexpr__44010.cljs$core$IFn$_invoke$arity$1 ? fexpr__44010.cljs$core$IFn$_invoke$arity$1(G__44012) : fexpr__44010.call(null,G__44012));
})();
(cr43893_state[(0)] = cr43893_block_8);

(cr43893_state[(7)] = null);

(cr43893_state[(4)] = cr43893_place_34);

return cr43893_state;
}catch (e44009){var cr43893_exception = e44009;
(cr43893_state[(0)] = null);

(cr43893_state[(1)] = null);

(cr43893_state[(2)] = null);

(cr43893_state[(7)] = null);

(cr43893_state[(4)] = null);

(cr43893_state[(3)] = null);

(cr43893_state[(6)] = null);

throw cr43893_exception;
}});
var cr43893_block_4 = (function hyperfiddle$electric$impl$io$message_reader_$_cr43893_block_4(cr43893_state){
try{var cr43893_place_11 = (cr43893_state[(4)]);
var cr43893_place_14 = (cr43893_state[(5)]);
var cr43893_place_15 = hyperfiddle.electric.impl.io.decode_numbers;
var cr43893_place_16 = cr43893_place_11;
var cr43893_place_17 = (function (){var G__44017 = cr43893_place_16;
var fexpr__44016 = cr43893_place_15;
return (fexpr__44016.cljs$core$IFn$_invoke$arity$1 ? fexpr__44016.cljs$core$IFn$_invoke$arity$1(G__44017) : fexpr__44016.call(null,G__44017));
})();
var cr43893_place_18 = cljs.core.reduce;
var cr43893_place_19 = cljs.core.conj_BANG_;
var cr43893_place_20 = cr43893_place_14;
var cr43893_place_21 = cr43893_place_17;
var cr43893_place_22 = (function (){var G__44019 = cr43893_place_19;
var G__44020 = cr43893_place_20;
var G__44021 = cr43893_place_21;
var fexpr__44018 = cr43893_place_18;
return (fexpr__44018.cljs$core$IFn$_invoke$arity$3 ? fexpr__44018.cljs$core$IFn$_invoke$arity$3(G__44019,G__44020,G__44021) : fexpr__44018.call(null,G__44019,G__44020,G__44021));
})();
var cr43893_place_23 = cljs.core.count;
var cr43893_place_24 = cr43893_place_17;
var cr43893_place_25 = (function (){var G__44023 = cr43893_place_24;
var fexpr__44022 = cr43893_place_23;
return (fexpr__44022.cljs$core$IFn$_invoke$arity$1 ? fexpr__44022.cljs$core$IFn$_invoke$arity$1(G__44023) : fexpr__44022.call(null,G__44023));
})();
var cr43893_place_26 = hyperfiddle.electric.impl.io.chunk_size;
var cr43893_place_27 = (cr43893_place_25 < cr43893_place_26);
var cr43893_place_28 = null;
if(cr43893_place_27){
(cr43893_state[(0)] = cr43893_block_7);

(cr43893_state[(4)] = null);

(cr43893_state[(5)] = null);

(cr43893_state[(7)] = cr43893_place_22);

(cr43893_state[(4)] = cr43893_place_28);

return cr43893_state;
} else {
(cr43893_state[(0)] = cr43893_block_5);

(cr43893_state[(7)] = cr43893_place_22);

return cr43893_state;
}
}catch (e44013){var cr43893_exception = e44013;
(cr43893_state[(0)] = null);

(cr43893_state[(1)] = null);

(cr43893_state[(2)] = null);

(cr43893_state[(4)] = null);

(cr43893_state[(3)] = null);

(cr43893_state[(5)] = null);

(cr43893_state[(6)] = null);

throw cr43893_exception;
}});
var cr43893_block_1 = (function hyperfiddle$electric$impl$io$message_reader_$_cr43893_block_1(cr43893_state){
try{var cr43893_place_3 = _QMARK_read;
(cr43893_state[(0)] = cr43893_block_2);

return missionary.core.park(cr43893_place_3);
}catch (e44029){var cr43893_exception = e44029;
(cr43893_state[(0)] = null);

(cr43893_state[(1)] = null);

throw cr43893_exception;
}});
var cr43893_block_8 = (function hyperfiddle$electric$impl$io$message_reader_$_cr43893_block_8(cr43893_state){
try{var cr43893_place_8 = (cr43893_state[(1)]);
var cr43893_place_9 = (cr43893_state[(2)]);
var cr43893_place_28 = (cr43893_state[(4)]);
var cr43893_place_10 = (cr43893_state[(6)]);
var cr43893_place_35 = (function (){var G__44032 = cr43893_place_10;
var G__44033 = cr43893_place_28;
var fexpr__44031 = cr43893_place_9;
return (fexpr__44031.cljs$core$IFn$_invoke$arity$2 ? fexpr__44031.cljs$core$IFn$_invoke$arity$2(G__44032,G__44033) : fexpr__44031.call(null,G__44032,G__44033));
})();
var cr43893_place_36 = (function (){var G__44035 = cr43893_place_35;
var fexpr__44034 = cr43893_place_8;
return (fexpr__44034.cljs$core$IFn$_invoke$arity$1 ? fexpr__44034.cljs$core$IFn$_invoke$arity$1(G__44035) : fexpr__44034.call(null,G__44035));
})();
(cr43893_state[(0)] = cr43893_block_10);

(cr43893_state[(1)] = null);

(cr43893_state[(2)] = null);

(cr43893_state[(4)] = null);

(cr43893_state[(6)] = null);

(cr43893_state[(3)] = cr43893_place_36);

return cr43893_state;
}catch (e44030){var cr43893_exception = e44030;
(cr43893_state[(0)] = null);

(cr43893_state[(1)] = null);

(cr43893_state[(2)] = null);

(cr43893_state[(4)] = null);

(cr43893_state[(3)] = null);

(cr43893_state[(6)] = null);

throw cr43893_exception;
}});
var cr43893_block_0 = (function hyperfiddle$electric$impl$io$message_reader_$_cr43893_block_0(cr43893_state){
try{var cr43893_place_0 = cljs.core.transient$;
var cr43893_place_1 = cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IVector], null));
var cr43893_place_2 = (function (){var G__44038 = cr43893_place_1;
var fexpr__44037 = cr43893_place_0;
return (fexpr__44037.cljs$core$IFn$_invoke$arity$1 ? fexpr__44037.cljs$core$IFn$_invoke$arity$1(G__44038) : fexpr__44037.call(null,G__44038));
})();
(cr43893_state[(0)] = cr43893_block_1);

(cr43893_state[(1)] = cr43893_place_2);

return cr43893_state;
}catch (e44036){var cr43893_exception = e44036;
(cr43893_state[(0)] = null);

throw cr43893_exception;
}});
var cr43893_block_9 = (function hyperfiddle$electric$impl$io$message_reader_$_cr43893_block_9(cr43893_state){
try{var cr43893_place_2 = (cr43893_state[(1)]);
var cr43893_place_4 = (cr43893_state[(2)]);
var cr43893_place_37 = cljs.core.conj_BANG_;
var cr43893_place_38 = cr43893_place_2;
var cr43893_place_39 = hyperfiddle.electric.impl.io.decode_str;
var cr43893_place_40 = cr43893_place_4;
var cr43893_place_41 = (function (){var G__44044 = cr43893_place_40;
var fexpr__44043 = cr43893_place_39;
return (fexpr__44043.cljs$core$IFn$_invoke$arity$1 ? fexpr__44043.cljs$core$IFn$_invoke$arity$1(G__44044) : fexpr__44043.call(null,G__44044));
})();
var cr43893_place_42 = (function (){var G__44046 = cr43893_place_38;
var G__44047 = cr43893_place_41;
var fexpr__44045 = cr43893_place_37;
return (fexpr__44045.cljs$core$IFn$_invoke$arity$2 ? fexpr__44045.cljs$core$IFn$_invoke$arity$2(G__44046,G__44047) : fexpr__44045.call(null,G__44046,G__44047));
})();
(cr43893_state[(0)] = cr43893_block_1);

(cr43893_state[(2)] = null);

(cr43893_state[(1)] = cr43893_place_42);

return cr43893_state;
}catch (e44042){var cr43893_exception = e44042;
(cr43893_state[(0)] = null);

(cr43893_state[(1)] = null);

(cr43893_state[(2)] = null);

throw cr43893_exception;
}});
return cloroutine.impl.coroutine((function (){var G__44048 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((8));
(G__44048[(0)] = cr43893_block_0);

return G__44048;
})());
})(),missionary.core.sp_run);
});
/**
 * Returns a function taking an Electric message and returning a task writing it as individual frames using provided
 * function. Might cut a message into chunks if its size would exceed the server payload limit.
 * An empty message (0b) is written to notify the end of frame.
 */
hyperfiddle.electric.impl.io.message_writer = (function hyperfiddle$electric$impl$io$message_writer(write){
return (function (p1__44057_SHARP_){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr44060_block_7 = (function hyperfiddle$electric$impl$io$message_writer_$_cr44060_block_7(cr44060_state){
try{var cr44060_place_46 = cljs.core.peek;
var cr44060_place_47 = p1__44057_SHARP_;
var cr44060_place_48 = (function (){var G__44162 = cr44060_place_47;
var fexpr__44161 = cr44060_place_46;
return (fexpr__44161.cljs$core$IFn$_invoke$arity$1 ? fexpr__44161.cljs$core$IFn$_invoke$arity$1(G__44162) : fexpr__44161.call(null,G__44162));
})();
(cr44060_state[(0)] = cr44060_block_8);

(cr44060_state[(2)] = cr44060_place_48);

return cr44060_state;
}catch (e44160){var cr44060_exception = e44160;
(cr44060_state[(0)] = null);

(cr44060_state[(1)] = null);

throw cr44060_exception;
}});
var cr44060_block_3 = (function hyperfiddle$electric$impl$io$message_writer_$_cr44060_block_3(cr44060_state){
try{var cr44060_place_20 = (cr44060_state[(2)]);
var cr44060_place_28 = hyperfiddle.electric.impl.io.encode;
var cr44060_place_29 = cr44060_place_20;
var cr44060_place_30 = (function (){var G__44165 = cr44060_place_29;
var fexpr__44164 = cr44060_place_28;
return (fexpr__44164.cljs$core$IFn$_invoke$arity$1 ? fexpr__44164.cljs$core$IFn$_invoke$arity$1(G__44165) : fexpr__44164.call(null,G__44165));
})();
(cr44060_state[(0)] = cr44060_block_5);

(cr44060_state[(2)] = null);

(cr44060_state[(3)] = cr44060_place_30);

return cr44060_state;
}catch (e44163){var cr44060_exception = e44163;
(cr44060_state[(0)] = cr44060_block_4);

(cr44060_state[(3)] = cr44060_exception);

return cr44060_state;
}});
var cr44060_block_9 = (function hyperfiddle$electric$impl$io$message_writer_$_cr44060_block_9(cr44060_state){
try{var cr44060_place_48 = (cr44060_state[(2)]);
var cr44060_place_55 = hyperfiddle.electric.impl.io.encode_numbers;
var cr44060_place_56 = cr44060_place_48;
var cr44060_place_57 = (function (){var G__44168 = cr44060_place_56;
var fexpr__44167 = cr44060_place_55;
return (fexpr__44167.cljs$core$IFn$_invoke$arity$1 ? fexpr__44167.cljs$core$IFn$_invoke$arity$1(G__44168) : fexpr__44167.call(null,G__44168));
})();
var cr44060_place_58 = write;
var cr44060_place_59 = cr44060_place_57;
var cr44060_place_60 = (function (){var G__44170 = cr44060_place_59;
var fexpr__44169 = cr44060_place_58;
return (fexpr__44169.cljs$core$IFn$_invoke$arity$1 ? fexpr__44169.cljs$core$IFn$_invoke$arity$1(G__44170) : fexpr__44169.call(null,G__44170));
})();
(cr44060_state[(0)] = cr44060_block_10);

(cr44060_state[(2)] = null);

return missionary.core.park(cr44060_place_60);
}catch (e44166){var cr44060_exception = e44166;
(cr44060_state[(0)] = null);

(cr44060_state[(2)] = null);

(cr44060_state[(3)] = null);

(cr44060_state[(1)] = null);

throw cr44060_exception;
}});
var cr44060_block_8 = (function hyperfiddle$electric$impl$io$message_writer_$_cr44060_block_8(cr44060_state){
try{var cr44060_place_48 = (cr44060_state[(2)]);
var cr44060_place_49 = cljs.core.count;
var cr44060_place_50 = cr44060_place_48;
var cr44060_place_51 = (function (){var G__44173 = cr44060_place_50;
var fexpr__44172 = cr44060_place_49;
return (fexpr__44172.cljs$core$IFn$_invoke$arity$1 ? fexpr__44172.cljs$core$IFn$_invoke$arity$1(G__44173) : fexpr__44172.call(null,G__44173));
})();
var cr44060_place_52 = hyperfiddle.electric.impl.io.chunk_size;
var cr44060_place_53 = (cr44060_place_51 >= cr44060_place_52);
var cr44060_place_54 = null;
if(cr44060_place_53){
(cr44060_state[(0)] = cr44060_block_11);

return cr44060_state;
} else {
(cr44060_state[(0)] = cr44060_block_9);

(cr44060_state[(3)] = cr44060_place_54);

return cr44060_state;
}
}catch (e44171){var cr44060_exception = e44171;
(cr44060_state[(0)] = null);

(cr44060_state[(2)] = null);

(cr44060_state[(1)] = null);

throw cr44060_exception;
}});
var cr44060_block_13 = (function hyperfiddle$electric$impl$io$message_writer_$_cr44060_block_13(cr44060_state){
try{var cr44060_place_54 = (cr44060_state[(3)]);
(cr44060_state[(0)] = cr44060_block_14);

(cr44060_state[(3)] = null);

(cr44060_state[(1)] = cr44060_place_54);

return cr44060_state;
}catch (e44174){var cr44060_exception = e44174;
(cr44060_state[(0)] = null);

(cr44060_state[(3)] = null);

(cr44060_state[(1)] = null);

throw cr44060_exception;
}});
var cr44060_block_14 = (function hyperfiddle$electric$impl$io$message_writer_$_cr44060_block_14(cr44060_state){
try{var cr44060_place_9 = (cr44060_state[(1)]);
(cr44060_state[(0)] = null);

(cr44060_state[(1)] = null);

return cr44060_place_9;
}catch (e44175){var cr44060_exception = e44175;
(cr44060_state[(0)] = null);

(cr44060_state[(1)] = null);

throw cr44060_exception;
}});
var cr44060_block_10 = (function hyperfiddle$electric$impl$io$message_writer_$_cr44060_block_10(cr44060_state){
try{var cr44060_place_61 = missionary.core.unpark();
(cr44060_state[(0)] = cr44060_block_13);

(cr44060_state[(3)] = cr44060_place_61);

return cr44060_state;
}catch (e44178){var cr44060_exception = e44178;
(cr44060_state[(0)] = null);

(cr44060_state[(3)] = null);

(cr44060_state[(1)] = null);

throw cr44060_exception;
}});
var cr44060_block_1 = (function hyperfiddle$electric$impl$io$message_writer_$_cr44060_block_1(cr44060_state){
try{var cr44060_place_4 = (cr44060_state[(1)]);
var cr44060_place_5 = cr44060_place_4;
var cr44060_place_6 = cr44060_place_5;
var cr44060_place_7 = null;
var cr44060_place_8 = (cr44060_place_6 == cr44060_place_7);
var cr44060_place_9 = null;
if(cr44060_place_8){
(cr44060_state[(0)] = cr44060_block_7);

(cr44060_state[(1)] = null);

(cr44060_state[(1)] = cr44060_place_9);

return cr44060_state;
} else {
(cr44060_state[(0)] = cr44060_block_2);

(cr44060_state[(2)] = cr44060_place_5);

return cr44060_state;
}
}catch (e44180){var cr44060_exception = e44180;
(cr44060_state[(0)] = null);

(cr44060_state[(1)] = null);

throw cr44060_exception;
}});
var cr44060_block_0 = (function hyperfiddle$electric$impl$io$message_writer_$_cr44060_block_0(cr44060_state){
try{var cr44060_place_0 = cljs.core.seq;
var cr44060_place_1 = cljs.core.pop;
var cr44060_place_2 = p1__44057_SHARP_;
var cr44060_place_3 = (function (){var G__44183 = cr44060_place_2;
var fexpr__44182 = cr44060_place_1;
return (fexpr__44182.cljs$core$IFn$_invoke$arity$1 ? fexpr__44182.cljs$core$IFn$_invoke$arity$1(G__44183) : fexpr__44182.call(null,G__44183));
})();
var cr44060_place_4 = (function (){var G__44185 = cr44060_place_3;
var fexpr__44184 = cr44060_place_0;
return (fexpr__44184.cljs$core$IFn$_invoke$arity$1 ? fexpr__44184.cljs$core$IFn$_invoke$arity$1(G__44185) : fexpr__44184.call(null,G__44185));
})();
(cr44060_state[(0)] = cr44060_block_1);

(cr44060_state[(1)] = cr44060_place_4);

return cr44060_state;
}catch (e44181){var cr44060_exception = e44181;
(cr44060_state[(0)] = null);

throw cr44060_exception;
}});
var cr44060_block_2 = (function hyperfiddle$electric$impl$io$message_writer_$_cr44060_block_2(cr44060_state){
try{var cr44060_place_5 = (cr44060_state[(2)]);
var cr44060_place_10 = cr44060_place_5;
var cr44060_place_11 = cljs.core.seq;
var cr44060_place_12 = cr44060_place_10;
var cr44060_place_13 = (function (){var G__44188 = cr44060_place_12;
var fexpr__44187 = cr44060_place_11;
return (fexpr__44187.cljs$core$IFn$_invoke$arity$1 ? fexpr__44187.cljs$core$IFn$_invoke$arity$1(G__44188) : fexpr__44187.call(null,G__44188));
})();
var cr44060_place_14 = cljs.core.first;
var cr44060_place_15 = cr44060_place_13;
var cr44060_place_16 = (function (){var G__44190 = cr44060_place_15;
var fexpr__44189 = cr44060_place_14;
return (fexpr__44189.cljs$core$IFn$_invoke$arity$1 ? fexpr__44189.cljs$core$IFn$_invoke$arity$1(G__44190) : fexpr__44189.call(null,G__44190));
})();
var cr44060_place_17 = cljs.core.next;
var cr44060_place_18 = cr44060_place_13;
var cr44060_place_19 = (function (){var G__44192 = cr44060_place_18;
var fexpr__44191 = cr44060_place_17;
return (fexpr__44191.cljs$core$IFn$_invoke$arity$1 ? fexpr__44191.cljs$core$IFn$_invoke$arity$1(G__44192) : fexpr__44191.call(null,G__44192));
})();
var cr44060_place_20 = cr44060_place_16;
var cr44060_place_21 = cr44060_place_19;
var cr44060_place_22 = console.debug;
var cr44060_place_23 = "\uD83D\uDD3C";
var cr44060_place_24 = cr44060_place_20;
var cr44060_place_25 = (function (){var G__44194 = cr44060_place_23;
var G__44195 = cr44060_place_24;
var fexpr__44193 = cr44060_place_22;
return (fexpr__44193.cljs$core$IFn$_invoke$arity$2 ? fexpr__44193.cljs$core$IFn$_invoke$arity$2(G__44194,G__44195) : fexpr__44193.call(null,G__44194,G__44195));
})();
var cr44060_place_26 = null;
var cr44060_place_27 = false;
(cr44060_state[(0)] = cr44060_block_3);

(cr44060_state[(2)] = null);

(cr44060_state[(2)] = cr44060_place_20);

(cr44060_state[(3)] = cr44060_place_26);

(cr44060_state[(4)] = cr44060_place_27);

(cr44060_state[(5)] = cr44060_place_21);

return cr44060_state;
}catch (e44186){var cr44060_exception = e44186;
(cr44060_state[(0)] = null);

(cr44060_state[(1)] = null);

(cr44060_state[(2)] = null);

throw cr44060_exception;
}});
var cr44060_block_5 = (function hyperfiddle$electric$impl$io$message_writer_$_cr44060_block_5(cr44060_state){
try{var cr44060_place_26 = (cr44060_state[(3)]);
var cr44060_place_27 = (cr44060_state[(4)]);
var cr44060_place_40 = (cljs.core.truth_(cr44060_place_27)?(function(){throw cr44060_place_26})():cr44060_place_26);
var cr44060_place_41 = write;
var cr44060_place_42 = cr44060_place_40;
var cr44060_place_43 = (function (){var G__44198 = cr44060_place_42;
var fexpr__44197 = cr44060_place_41;
return (fexpr__44197.cljs$core$IFn$_invoke$arity$1 ? fexpr__44197.cljs$core$IFn$_invoke$arity$1(G__44198) : fexpr__44197.call(null,G__44198));
})();
(cr44060_state[(0)] = cr44060_block_6);

(cr44060_state[(3)] = null);

(cr44060_state[(4)] = null);

return missionary.core.park(cr44060_place_43);
}catch (e44196){var cr44060_exception = e44196;
(cr44060_state[(0)] = null);

(cr44060_state[(3)] = null);

(cr44060_state[(4)] = null);

(cr44060_state[(1)] = null);

(cr44060_state[(5)] = null);

throw cr44060_exception;
}});
var cr44060_block_6 = (function hyperfiddle$electric$impl$io$message_writer_$_cr44060_block_6(cr44060_state){
try{var cr44060_place_21 = (cr44060_state[(5)]);
var cr44060_place_44 = missionary.core.unpark();
var cr44060_place_45 = cr44060_place_21;
(cr44060_state[(0)] = cr44060_block_1);

(cr44060_state[(5)] = null);

(cr44060_state[(1)] = cr44060_place_45);

return cr44060_state;
}catch (e44199){var cr44060_exception = e44199;
(cr44060_state[(0)] = null);

(cr44060_state[(1)] = null);

(cr44060_state[(5)] = null);

throw cr44060_exception;
}});
var cr44060_block_11 = (function hyperfiddle$electric$impl$io$message_writer_$_cr44060_block_11(cr44060_state){
try{var cr44060_place_48 = (cr44060_state[(2)]);
var cr44060_place_62 = hyperfiddle.electric.impl.io.encode_numbers;
var cr44060_place_63 = cljs.core.subvec;
var cr44060_place_64 = cr44060_place_48;
var cr44060_place_65 = (0);
var cr44060_place_66 = hyperfiddle.electric.impl.io.chunk_size;
var cr44060_place_67 = (function (){var G__44202 = cr44060_place_64;
var G__44203 = cr44060_place_65;
var G__44204 = cr44060_place_66;
var fexpr__44201 = cr44060_place_63;
return (fexpr__44201.cljs$core$IFn$_invoke$arity$3 ? fexpr__44201.cljs$core$IFn$_invoke$arity$3(G__44202,G__44203,G__44204) : fexpr__44201.call(null,G__44202,G__44203,G__44204));
})();
var cr44060_place_68 = (function (){var G__44206 = cr44060_place_67;
var fexpr__44205 = cr44060_place_62;
return (fexpr__44205.cljs$core$IFn$_invoke$arity$1 ? fexpr__44205.cljs$core$IFn$_invoke$arity$1(G__44206) : fexpr__44205.call(null,G__44206));
})();
var cr44060_place_69 = write;
var cr44060_place_70 = cr44060_place_68;
var cr44060_place_71 = (function (){var G__44208 = cr44060_place_70;
var fexpr__44207 = cr44060_place_69;
return (fexpr__44207.cljs$core$IFn$_invoke$arity$1 ? fexpr__44207.cljs$core$IFn$_invoke$arity$1(G__44208) : fexpr__44207.call(null,G__44208));
})();
(cr44060_state[(0)] = cr44060_block_12);

return missionary.core.park(cr44060_place_71);
}catch (e44200){var cr44060_exception = e44200;
(cr44060_state[(0)] = null);

(cr44060_state[(2)] = null);

(cr44060_state[(1)] = null);

throw cr44060_exception;
}});
var cr44060_block_4 = (function hyperfiddle$electric$impl$io$message_writer_$_cr44060_block_4(cr44060_state){
try{var cr44060_place_20 = (cr44060_state[(2)]);
var cr44060_place_26 = (cr44060_state[(3)]);
var cr44060_place_31 = cr44060_place_26;
var cr44060_place_32 = cljs.core.ex_info;
var cr44060_place_33 = "Failed to encode";
var cr44060_place_34 = new cljs.core.Keyword(null,"value","value",305978217);
var cr44060_place_35 = cr44060_place_20;
var cr44060_place_36 = cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([cr44060_place_34,cr44060_place_35]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr44060_place_37 = cr44060_place_31;
var cr44060_place_38 = (function (){var G__44213 = cr44060_place_33;
var G__44214 = cr44060_place_36;
var G__44215 = cr44060_place_37;
var fexpr__44212 = cr44060_place_32;
return (fexpr__44212.cljs$core$IFn$_invoke$arity$3 ? fexpr__44212.cljs$core$IFn$_invoke$arity$3(G__44213,G__44214,G__44215) : fexpr__44212.call(null,G__44213,G__44214,G__44215));
})();
var cr44060_place_39 = (function(){throw cr44060_place_38})();
(cr44060_state[(0)] = null);

(cr44060_state[(2)] = null);

(cr44060_state[(3)] = null);

(cr44060_state[(4)] = null);

(cr44060_state[(1)] = null);

(cr44060_state[(5)] = null);

return null;
}catch (e44210){var cr44060_exception = e44210;
(cr44060_state[(0)] = cr44060_block_5);

(cr44060_state[(2)] = null);

(cr44060_state[(3)] = cr44060_exception);

(cr44060_state[(4)] = true);

return cr44060_state;
}});
var cr44060_block_12 = (function hyperfiddle$electric$impl$io$message_writer_$_cr44060_block_12(cr44060_state){
try{var cr44060_place_48 = (cr44060_state[(2)]);
var cr44060_place_72 = missionary.core.unpark();
var cr44060_place_73 = cljs.core.subvec;
var cr44060_place_74 = cr44060_place_48;
var cr44060_place_75 = hyperfiddle.electric.impl.io.chunk_size;
var cr44060_place_76 = (function (){var G__44219 = cr44060_place_74;
var G__44220 = cr44060_place_75;
var fexpr__44218 = cr44060_place_73;
return (fexpr__44218.cljs$core$IFn$_invoke$arity$2 ? fexpr__44218.cljs$core$IFn$_invoke$arity$2(G__44219,G__44220) : fexpr__44218.call(null,G__44219,G__44220));
})();
(cr44060_state[(0)] = cr44060_block_8);

(cr44060_state[(2)] = cr44060_place_76);

return cr44060_state;
}catch (e44217){var cr44060_exception = e44217;
(cr44060_state[(0)] = null);

(cr44060_state[(2)] = null);

(cr44060_state[(1)] = null);

throw cr44060_exception;
}});
return cloroutine.impl.coroutine((function (){var G__44222 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((6));
(G__44222[(0)] = cr44060_block_0);

return G__44222;
})());
})(),missionary.core.sp_run);
});
});
/**
 * A transducer partitioning a sequence of network messages into Electric events.
 */
hyperfiddle.electric.impl.io.decoder = (function hyperfiddle$electric$impl$io$decoder(rf){
var data = (function (){var G__44223 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
(G__44223[(0)] = cljs.core.PersistentVector.EMPTY);

(G__44223[(1)] = cljs.core.PersistentVector.EMPTY);

return G__44223;
})();
return (function() {
var G__44284 = null;
var G__44284__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__44284__1 = (function (r){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentVector.EMPTY,(data[(0)]),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(data[(1)])], 0))){
} else {
throw (new Error("Assert failed: (= [] (aget data 0) (aget data 1))"));
}

return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(r) : rf.call(null,r));
});
var G__44284__2 = (function (r,x){
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
G__44284 = function(r,x){
switch(arguments.length){
case 0:
return G__44284__0.call(this);
case 1:
return G__44284__1.call(this,r);
case 2:
return G__44284__2.call(this,r,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__44284.cljs$core$IFn$_invoke$arity$0 = G__44284__0;
G__44284.cljs$core$IFn$_invoke$arity$1 = G__44284__1;
G__44284.cljs$core$IFn$_invoke$arity$2 = G__44284__2;
return G__44284;
})()
});
/**
 * A transducer expanding Electric events to a sequence of network messages.
 */
hyperfiddle.electric.impl.io.encoder = (function hyperfiddle$electric$impl$io$encoder(rf){
return (function() {
var G__44287 = null;
var G__44287__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__44287__1 = (function (r){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(r) : rf.call(null,r));
});
var G__44287__2 = (function (r,x){
var r__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,r,cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.io.encode),cljs.core.pop(x)], 0)));
var r__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,r__$1,cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.partition_all.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.io.chunk_size),cljs.core.map.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.io.encode_numbers),cljs.core.peek(x)], 0)));
var G__44224 = cljs.core.mod(cljs.core.count(cljs.core.peek(x)),hyperfiddle.electric.impl.io.chunk_size);
switch (G__44224) {
case (0):
var G__44225 = r__$2;
var G__44226 = hyperfiddle.electric.impl.io.encode_numbers(cljs.core.PersistentVector.EMPTY);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__44225,G__44226) : rf.call(null,G__44225,G__44226));

break;
default:
return r__$2;

}
});
G__44287 = function(r,x){
switch(arguments.length){
case 0:
return G__44287__0.call(this);
case 1:
return G__44287__1.call(this,r);
case 2:
return G__44287__2.call(this,r,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__44287.cljs$core$IFn$_invoke$arity$0 = G__44287__0;
G__44287.cljs$core$IFn$_invoke$arity$1 = G__44287__1;
G__44287.cljs$core$IFn$_invoke$arity$2 = G__44287__2;
return G__44287;
})()
});
hyperfiddle.electric.impl.io.foreach = (function hyperfiddle$electric$impl$io$foreach(var_args){
var G__44228 = arguments.length;
switch (G__44228) {
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
