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
var G__29535 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(((size * (2)) + (1)));
var arr29536_29993 = G__29535;
(arr29536_29993[(size * (2))] = cljs.core.identity((0)));

return G__29535;
});
hyperfiddle.electric.impl.io.cache_add = (function hyperfiddle$electric$impl$io$cache_add(cache,k,v){
if(cljs.core.truth_((function (){var i = (0);
while(true){
if((i < (cljs.core.count(cache) - (1)))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,hyperfiddle.electric.impl.array_fields.get(cache,i))){
var arr29539_29995 = cache;
(arr29539_29995[(i + (1))] = cljs.core.identity(v));

return true;
} else {
var G__29996 = (i + (2));
i = G__29996;
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
var widx = hyperfiddle.electric.impl.array_fields.getswap(cache,(cljs.core.count(cache) - (1)),(function (p1__29538_SHARP_){
return cljs.core.mod((p1__29538_SHARP_ + (2)),(cljs.core.count(cache) - (1)));
}));
var arr29541 = cache;
(arr29541[widx] = cljs.core.identity(k));

return (arr29541[(widx + (1))] = cljs.core.identity(v));
}
});
hyperfiddle.electric.impl.io.cache_get = (function hyperfiddle$electric$impl$io$cache_get(cache,k){
var i = (0);
while(true){
if((i < (cljs.core.count(cache) - (1)))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,hyperfiddle.electric.impl.array_fields.get(cache,i))){
return hyperfiddle.electric.impl.array_fields.get(cache,(i + (1)));
} else {
var G__29997 = (i + (2));
i = G__29997;
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
var G__29998 = (i + (2));
var G__29999 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ac,hyperfiddle.electric.impl.array_fields.get(cache,i),hyperfiddle.electric.impl.array_fields.get(cache,(i + (1))));
i = G__29998;
ac = G__29999;
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
var temp__5808__auto___30001 = cljs.core.ex_cause(fi);
if((temp__5808__auto___30001 == null)){
} else {
var cause_30002 = temp__5808__auto___30001;
if((cause_30002 instanceof hyperfiddle.electric.FailureInfo)){
} else {
hyperfiddle.electric.impl.io.cache_add(hyperfiddle.electric.impl.io._BANG_ex_cache,id,cause_30002);
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
hyperfiddle.electric.impl.io.failure_reader = cognitect.transit.read_handler((function (p__29552){
var vec__29553 = p__29552;
var seq__29554 = cljs.core.seq(vec__29553);
var first__29555 = cljs.core.first(seq__29554);
var seq__29554__$1 = cljs.core.next(seq__29554);
var tag = first__29555;
var args = seq__29554__$1;
var G__29556 = tag;
var G__29556__$1 = (((G__29556 instanceof cljs.core.Keyword))?G__29556.fqn:null);
switch (G__29556__$1) {
case "exception":
var vec__29557 = args;
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29557,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29557,(1),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29557,(2),null);
return (new hyperfiddle.electric.Failure(hyperfiddle.electric.debug.ex_info_STAR_.cljs$core$IFn$_invoke$arity$4(message,data,id,null)));

break;
case "remote":
var vec__29560 = args;
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29560,(0),null);
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29556__$1)].join('')));

}
}));
hyperfiddle.electric.impl.io.read_opts = (function hyperfiddle$electric$impl$io$read_opts(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hyperfiddle.electric.impl.io._STAR_read_handlers_STAR_,new cljs.core.PersistentArrayMap(null, 1, ["failure",hyperfiddle.electric.impl.io.failure_reader], null)], 0))], null);
});
hyperfiddle.electric.impl.io.set_ints = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce_kv,(function (r,i,n){
var offset = (i << (2));
var G__29564 = r;
G__29564.setInt32(offset,n);

return G__29564;
}));
/**
 * Encode a control frame to a binary segment.
 */
hyperfiddle.electric.impl.io.encode_numbers = (function hyperfiddle$electric$impl$io$encode_numbers(xs){
var required = (cljs.core.count(xs) << (2));
var G__29565 = (new ArrayBuffer(required));
hyperfiddle.electric.impl.io.set_ints((new DataView(G__29565)),xs);

return G__29565;
});

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io29566 = (function (b,meta29567){
this.b = b;
this.meta29567 = meta29567;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io29566.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29568,meta29567__$1){
var self__ = this;
var _29568__$1 = this;
return (new hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io29566(self__.b,meta29567__$1));
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io29566.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29568){
var self__ = this;
var _29568__$1 = this;
return self__.meta29567;
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io29566.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,rf,r){
var self__ = this;
var ___$1 = this;
var l = self__.b.byteLength;
var v = (new DataView(self__.b));
var r__$1 = r;
var i = (0);
while(true){
if((i < l)){
var G__30013 = (function (){var G__29570 = r__$1;
var G__29571 = v.getInt32(i);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__29570,G__29571) : rf.call(null,G__29570,G__29571));
})();
var G__30014 = (i + (4));
r__$1 = G__30013;
i = G__30014;
continue;
} else {
return r__$1;
}
break;
}
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io29566.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"meta29567","meta29567",-643576214,null)], null);
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io29566.cljs$lang$type = true);

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io29566.cljs$lang$ctorStr = "hyperfiddle.electric.impl.io/t_hyperfiddle$electric$impl$io29566");

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io29566.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.io/t_hyperfiddle$electric$impl$io29566");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.io/t_hyperfiddle$electric$impl$io29566.
 */
hyperfiddle.electric.impl.io.__GT_t_hyperfiddle$electric$impl$io29566 = (function hyperfiddle$electric$impl$io$__GT_t_hyperfiddle$electric$impl$io29566(b,meta29567){
return (new hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io29566(b,meta29567));
});


/**
 * Decode a control frame from a binary segment.
 */
hyperfiddle.electric.impl.io.decode_numbers = (function hyperfiddle$electric$impl$io$decode_numbers(b){
return cljs.core.vec((new hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io29566(b,cljs.core.PersistentArrayMap.EMPTY)));
});
var _BANG_cache_30019 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write-handlers","write-handlers",-2097288911),hyperfiddle.electric.impl.io._STAR_write_handlers_STAR_,new cljs.core.Keyword(null,"writer","writer",-277568236),null], null));
hyperfiddle.electric.impl.io.transit_writer = (function hyperfiddle$electric$impl$io$transit_writer(){
return new cljs.core.Keyword(null,"writer","writer",-277568236).cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_cache_30019,(function (p__29584){
var map__29585 = p__29584;
var map__29585__$1 = cljs.core.__destructure_map(map__29585);
var cache = map__29585__$1;
var write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29585__$1,new cljs.core.Keyword(null,"write-handlers","write-handlers",-2097288911));
var writer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29585__$1,new cljs.core.Keyword(null,"writer","writer",-277568236));
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
var _BANG_cache_30020 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-handlers","read-handlers",2109459315),hyperfiddle.electric.impl.io._STAR_read_handlers_STAR_,new cljs.core.Keyword(null,"reader","reader",169660853),null], null));
hyperfiddle.electric.impl.io.transit_reader = (function hyperfiddle$electric$impl$io$transit_reader(){
return new cljs.core.Keyword(null,"reader","reader",169660853).cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_cache_30020,(function (p__29589){
var map__29590 = p__29589;
var map__29590__$1 = cljs.core.__destructure_map(map__29590);
var cache = map__29590__$1;
var read_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29590__$1,new cljs.core.Keyword(null,"read-handlers","read-handlers",2109459315));
var reader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29590__$1,new cljs.core.Keyword(null,"reader","reader",169660853));
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
try{var G__29594 = hyperfiddle.electric.impl.io.decode(x);
console.debug("\uD83D\uDD3D",G__29594);

return G__29594;
}catch (e29593){var t = e29593;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("Failed to decode",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),x], null),t);
}});
hyperfiddle.electric.impl.io.chunk_size = ((65536) >> (2));
hyperfiddle.electric.impl.io.message_reader = (function hyperfiddle$electric$impl$io$message_reader(_QMARK_read){

return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr29596_block_8 = (function hyperfiddle$electric$impl$io$message_reader_$_cr29596_block_8(cr29596_state){
try{var cr29596_place_28 = (cr29596_state[(4)]);
var cr29596_place_10 = (cr29596_state[(1)]);
var cr29596_place_8 = (cr29596_state[(2)]);
var cr29596_place_9 = (cr29596_state[(6)]);
var cr29596_place_35 = (function (){var G__29647 = cr29596_place_10;
var G__29648 = cr29596_place_28;
var fexpr__29646 = cr29596_place_9;
return (fexpr__29646.cljs$core$IFn$_invoke$arity$2 ? fexpr__29646.cljs$core$IFn$_invoke$arity$2(G__29647,G__29648) : fexpr__29646.call(null,G__29647,G__29648));
})();
var cr29596_place_36 = (function (){var G__29651 = cr29596_place_35;
var fexpr__29650 = cr29596_place_8;
return (fexpr__29650.cljs$core$IFn$_invoke$arity$1 ? fexpr__29650.cljs$core$IFn$_invoke$arity$1(G__29651) : fexpr__29650.call(null,G__29651));
})();
(cr29596_state[(0)] = cr29596_block_10);

(cr29596_state[(4)] = null);

(cr29596_state[(1)] = null);

(cr29596_state[(2)] = null);

(cr29596_state[(6)] = null);

(cr29596_state[(3)] = cr29596_place_36);

return cr29596_state;
}catch (e29644){var cr29596_exception = e29644;
(cr29596_state[(0)] = null);

(cr29596_state[(4)] = null);

(cr29596_state[(1)] = null);

(cr29596_state[(2)] = null);

(cr29596_state[(6)] = null);

(cr29596_state[(3)] = null);

throw cr29596_exception;
}});
var cr29596_block_10 = (function hyperfiddle$electric$impl$io$message_reader_$_cr29596_block_10(cr29596_state){
try{var cr29596_place_7 = (cr29596_state[(3)]);
(cr29596_state[(0)] = null);

(cr29596_state[(3)] = null);

return cr29596_place_7;
}catch (e29655){var cr29596_exception = e29655;
(cr29596_state[(0)] = null);

(cr29596_state[(3)] = null);

throw cr29596_exception;
}});
var cr29596_block_6 = (function hyperfiddle$electric$impl$io$message_reader_$_cr29596_block_6(cr29596_state){
try{var cr29596_place_22 = (cr29596_state[(7)]);
var cr29596_place_30 = missionary.core.unpark();
var cr29596_place_31 = cr29596_place_22;
(cr29596_state[(0)] = cr29596_block_4);

(cr29596_state[(7)] = null);

(cr29596_state[(5)] = cr29596_place_30);

(cr29596_state[(4)] = cr29596_place_31);

return cr29596_state;
}catch (e29657){var cr29596_exception = e29657;
(cr29596_state[(0)] = null);

(cr29596_state[(1)] = null);

(cr29596_state[(2)] = null);

(cr29596_state[(4)] = null);

(cr29596_state[(5)] = null);

(cr29596_state[(7)] = null);

(cr29596_state[(6)] = null);

(cr29596_state[(3)] = null);

throw cr29596_exception;
}});
var cr29596_block_1 = (function hyperfiddle$electric$impl$io$message_reader_$_cr29596_block_1(cr29596_state){
try{var cr29596_place_3 = _QMARK_read;
(cr29596_state[(0)] = cr29596_block_2);

return missionary.core.park(cr29596_place_3);
}catch (e29660){var cr29596_exception = e29660;
(cr29596_state[(0)] = null);

(cr29596_state[(1)] = null);

throw cr29596_exception;
}});
var cr29596_block_9 = (function hyperfiddle$electric$impl$io$message_reader_$_cr29596_block_9(cr29596_state){
try{var cr29596_place_4 = (cr29596_state[(2)]);
var cr29596_place_2 = (cr29596_state[(1)]);
var cr29596_place_37 = cljs.core.conj_BANG_;
var cr29596_place_38 = cr29596_place_2;
var cr29596_place_39 = hyperfiddle.electric.impl.io.decode_str;
var cr29596_place_40 = cr29596_place_4;
var cr29596_place_41 = (function (){var G__29668 = cr29596_place_40;
var fexpr__29667 = cr29596_place_39;
return (fexpr__29667.cljs$core$IFn$_invoke$arity$1 ? fexpr__29667.cljs$core$IFn$_invoke$arity$1(G__29668) : fexpr__29667.call(null,G__29668));
})();
var cr29596_place_42 = (function (){var G__29672 = cr29596_place_38;
var G__29673 = cr29596_place_41;
var fexpr__29671 = cr29596_place_37;
return (fexpr__29671.cljs$core$IFn$_invoke$arity$2 ? fexpr__29671.cljs$core$IFn$_invoke$arity$2(G__29672,G__29673) : fexpr__29671.call(null,G__29672,G__29673));
})();
(cr29596_state[(0)] = cr29596_block_1);

(cr29596_state[(2)] = null);

(cr29596_state[(1)] = cr29596_place_42);

return cr29596_state;
}catch (e29663){var cr29596_exception = e29663;
(cr29596_state[(0)] = null);

(cr29596_state[(2)] = null);

(cr29596_state[(1)] = null);

throw cr29596_exception;
}});
var cr29596_block_2 = (function hyperfiddle$electric$impl$io$message_reader_$_cr29596_block_2(cr29596_state){
try{var cr29596_place_4 = missionary.core.unpark();
var cr29596_place_5 = cr29596_place_4;
var cr29596_place_6 = typeof cr29596_place_5 === 'string';
var cr29596_place_7 = null;
if(cr29596_place_6){
(cr29596_state[(0)] = cr29596_block_9);

(cr29596_state[(2)] = cr29596_place_4);

return cr29596_state;
} else {
(cr29596_state[(0)] = cr29596_block_3);

(cr29596_state[(2)] = cr29596_place_4);

(cr29596_state[(3)] = cr29596_place_7);

return cr29596_state;
}
}catch (e29675){var cr29596_exception = e29675;
(cr29596_state[(0)] = null);

(cr29596_state[(1)] = null);

throw cr29596_exception;
}});
var cr29596_block_4 = (function hyperfiddle$electric$impl$io$message_reader_$_cr29596_block_4(cr29596_state){
try{var cr29596_place_14 = (cr29596_state[(4)]);
var cr29596_place_11 = (cr29596_state[(5)]);
var cr29596_place_15 = hyperfiddle.electric.impl.io.decode_numbers;
var cr29596_place_16 = cr29596_place_11;
var cr29596_place_17 = (function (){var G__29683 = cr29596_place_16;
var fexpr__29682 = cr29596_place_15;
return (fexpr__29682.cljs$core$IFn$_invoke$arity$1 ? fexpr__29682.cljs$core$IFn$_invoke$arity$1(G__29683) : fexpr__29682.call(null,G__29683));
})();
var cr29596_place_18 = cljs.core.reduce;
var cr29596_place_19 = cljs.core.conj_BANG_;
var cr29596_place_20 = cr29596_place_14;
var cr29596_place_21 = cr29596_place_17;
var cr29596_place_22 = (function (){var G__29687 = cr29596_place_19;
var G__29688 = cr29596_place_20;
var G__29690 = cr29596_place_21;
var fexpr__29686 = cr29596_place_18;
return (fexpr__29686.cljs$core$IFn$_invoke$arity$3 ? fexpr__29686.cljs$core$IFn$_invoke$arity$3(G__29687,G__29688,G__29690) : fexpr__29686.call(null,G__29687,G__29688,G__29690));
})();
var cr29596_place_23 = cljs.core.count;
var cr29596_place_24 = cr29596_place_17;
var cr29596_place_25 = (function (){var G__29701 = cr29596_place_24;
var fexpr__29700 = cr29596_place_23;
return (fexpr__29700.cljs$core$IFn$_invoke$arity$1 ? fexpr__29700.cljs$core$IFn$_invoke$arity$1(G__29701) : fexpr__29700.call(null,G__29701));
})();
var cr29596_place_26 = hyperfiddle.electric.impl.io.chunk_size;
var cr29596_place_27 = (cr29596_place_25 < cr29596_place_26);
var cr29596_place_28 = null;
if(cr29596_place_27){
(cr29596_state[(0)] = cr29596_block_7);

(cr29596_state[(4)] = null);

(cr29596_state[(5)] = null);

(cr29596_state[(4)] = cr29596_place_28);

(cr29596_state[(7)] = cr29596_place_22);

return cr29596_state;
} else {
(cr29596_state[(0)] = cr29596_block_5);

(cr29596_state[(7)] = cr29596_place_22);

return cr29596_state;
}
}catch (e29678){var cr29596_exception = e29678;
(cr29596_state[(0)] = null);

(cr29596_state[(1)] = null);

(cr29596_state[(2)] = null);

(cr29596_state[(4)] = null);

(cr29596_state[(5)] = null);

(cr29596_state[(6)] = null);

(cr29596_state[(3)] = null);

throw cr29596_exception;
}});
var cr29596_block_5 = (function hyperfiddle$electric$impl$io$message_reader_$_cr29596_block_5(cr29596_state){
try{var cr29596_place_29 = _QMARK_read;
(cr29596_state[(0)] = cr29596_block_6);

return missionary.core.park(cr29596_place_29);
}catch (e29708){var cr29596_exception = e29708;
(cr29596_state[(0)] = null);

(cr29596_state[(1)] = null);

(cr29596_state[(2)] = null);

(cr29596_state[(4)] = null);

(cr29596_state[(5)] = null);

(cr29596_state[(7)] = null);

(cr29596_state[(6)] = null);

(cr29596_state[(3)] = null);

throw cr29596_exception;
}});
var cr29596_block_7 = (function hyperfiddle$electric$impl$io$message_reader_$_cr29596_block_7(cr29596_state){
try{var cr29596_place_22 = (cr29596_state[(7)]);
var cr29596_place_32 = cljs.core.persistent_BANG_;
var cr29596_place_33 = cr29596_place_22;
var cr29596_place_34 = (function (){var G__29718 = cr29596_place_33;
var fexpr__29717 = cr29596_place_32;
return (fexpr__29717.cljs$core$IFn$_invoke$arity$1 ? fexpr__29717.cljs$core$IFn$_invoke$arity$1(G__29718) : fexpr__29717.call(null,G__29718));
})();
(cr29596_state[(0)] = cr29596_block_8);

(cr29596_state[(7)] = null);

(cr29596_state[(4)] = cr29596_place_34);

return cr29596_state;
}catch (e29713){var cr29596_exception = e29713;
(cr29596_state[(0)] = null);

(cr29596_state[(4)] = null);

(cr29596_state[(1)] = null);

(cr29596_state[(2)] = null);

(cr29596_state[(7)] = null);

(cr29596_state[(6)] = null);

(cr29596_state[(3)] = null);

throw cr29596_exception;
}});
var cr29596_block_0 = (function hyperfiddle$electric$impl$io$message_reader_$_cr29596_block_0(cr29596_state){
try{var cr29596_place_0 = cljs.core.transient$;
var cr29596_place_1 = cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IVector], null));
var cr29596_place_2 = (function (){var G__29732 = cr29596_place_1;
var fexpr__29731 = cr29596_place_0;
return (fexpr__29731.cljs$core$IFn$_invoke$arity$1 ? fexpr__29731.cljs$core$IFn$_invoke$arity$1(G__29732) : fexpr__29731.call(null,G__29732));
})();
(cr29596_state[(0)] = cr29596_block_1);

(cr29596_state[(1)] = cr29596_place_2);

return cr29596_state;
}catch (e29729){var cr29596_exception = e29729;
(cr29596_state[(0)] = null);

throw cr29596_exception;
}});
var cr29596_block_3 = (function hyperfiddle$electric$impl$io$message_reader_$_cr29596_block_3(cr29596_state){
try{var cr29596_place_4 = (cr29596_state[(2)]);
var cr29596_place_2 = (cr29596_state[(1)]);
var cr29596_place_8 = cljs.core.persistent_BANG_;
var cr29596_place_9 = cljs.core.conj_BANG_;
var cr29596_place_10 = cr29596_place_2;
var cr29596_place_11 = cr29596_place_4;
var cr29596_place_12 = cljs.core.transient$;
var cr29596_place_13 = cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IVector], null));
var cr29596_place_14 = (function (){var G__29744 = cr29596_place_13;
var fexpr__29743 = cr29596_place_12;
return (fexpr__29743.cljs$core$IFn$_invoke$arity$1 ? fexpr__29743.cljs$core$IFn$_invoke$arity$1(G__29744) : fexpr__29743.call(null,G__29744));
})();
(cr29596_state[(0)] = cr29596_block_4);

(cr29596_state[(2)] = null);

(cr29596_state[(1)] = null);

(cr29596_state[(2)] = cr29596_place_8);

(cr29596_state[(6)] = cr29596_place_9);

(cr29596_state[(1)] = cr29596_place_10);

(cr29596_state[(5)] = cr29596_place_11);

(cr29596_state[(4)] = cr29596_place_14);

return cr29596_state;
}catch (e29739){var cr29596_exception = e29739;
(cr29596_state[(0)] = null);

(cr29596_state[(2)] = null);

(cr29596_state[(1)] = null);

(cr29596_state[(3)] = null);

throw cr29596_exception;
}});
return cloroutine.impl.coroutine((function (){var G__29751 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((8));
(G__29751[(0)] = cr29596_block_0);

return G__29751;
})());
})(),missionary.core.sp_run);
});
/**
 * Returns a function taking an Electric message and returning a task writing it as individual frames using provided
 * function. Might cut a message into chunks if its size would exceed the server payload limit.
 * An empty message (0b) is written to notify the end of frame.
 */
hyperfiddle.electric.impl.io.message_writer = (function hyperfiddle$electric$impl$io$message_writer(write){
return (function (p1__29754_SHARP_){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr29760_block_14 = (function hyperfiddle$electric$impl$io$message_writer_$_cr29760_block_14(cr29760_state){
try{var cr29760_place_9 = (cr29760_state[(1)]);
(cr29760_state[(0)] = null);

(cr29760_state[(1)] = null);

return cr29760_place_9;
}catch (e29880){var cr29760_exception = e29880;
(cr29760_state[(0)] = null);

(cr29760_state[(1)] = null);

throw cr29760_exception;
}});
var cr29760_block_11 = (function hyperfiddle$electric$impl$io$message_writer_$_cr29760_block_11(cr29760_state){
try{var cr29760_place_48 = (cr29760_state[(2)]);
var cr29760_place_62 = hyperfiddle.electric.impl.io.encode_numbers;
var cr29760_place_63 = cljs.core.subvec;
var cr29760_place_64 = cr29760_place_48;
var cr29760_place_65 = (0);
var cr29760_place_66 = hyperfiddle.electric.impl.io.chunk_size;
var cr29760_place_67 = (function (){var G__29884 = cr29760_place_64;
var G__29885 = cr29760_place_65;
var G__29886 = cr29760_place_66;
var fexpr__29883 = cr29760_place_63;
return (fexpr__29883.cljs$core$IFn$_invoke$arity$3 ? fexpr__29883.cljs$core$IFn$_invoke$arity$3(G__29884,G__29885,G__29886) : fexpr__29883.call(null,G__29884,G__29885,G__29886));
})();
var cr29760_place_68 = (function (){var G__29888 = cr29760_place_67;
var fexpr__29887 = cr29760_place_62;
return (fexpr__29887.cljs$core$IFn$_invoke$arity$1 ? fexpr__29887.cljs$core$IFn$_invoke$arity$1(G__29888) : fexpr__29887.call(null,G__29888));
})();
var cr29760_place_69 = write;
var cr29760_place_70 = cr29760_place_68;
var cr29760_place_71 = (function (){var G__29892 = cr29760_place_70;
var fexpr__29891 = cr29760_place_69;
return (fexpr__29891.cljs$core$IFn$_invoke$arity$1 ? fexpr__29891.cljs$core$IFn$_invoke$arity$1(G__29892) : fexpr__29891.call(null,G__29892));
})();
(cr29760_state[(0)] = cr29760_block_12);

return missionary.core.park(cr29760_place_71);
}catch (e29881){var cr29760_exception = e29881;
(cr29760_state[(0)] = null);

(cr29760_state[(1)] = null);

(cr29760_state[(2)] = null);

throw cr29760_exception;
}});
var cr29760_block_6 = (function hyperfiddle$electric$impl$io$message_writer_$_cr29760_block_6(cr29760_state){
try{var cr29760_place_21 = (cr29760_state[(5)]);
var cr29760_place_44 = missionary.core.unpark();
var cr29760_place_45 = cr29760_place_21;
(cr29760_state[(0)] = cr29760_block_1);

(cr29760_state[(5)] = null);

(cr29760_state[(1)] = cr29760_place_45);

return cr29760_state;
}catch (e29895){var cr29760_exception = e29895;
(cr29760_state[(0)] = null);

(cr29760_state[(1)] = null);

(cr29760_state[(5)] = null);

throw cr29760_exception;
}});
var cr29760_block_13 = (function hyperfiddle$electric$impl$io$message_writer_$_cr29760_block_13(cr29760_state){
try{var cr29760_place_54 = (cr29760_state[(3)]);
(cr29760_state[(0)] = cr29760_block_14);

(cr29760_state[(3)] = null);

(cr29760_state[(1)] = cr29760_place_54);

return cr29760_state;
}catch (e29900){var cr29760_exception = e29900;
(cr29760_state[(0)] = null);

(cr29760_state[(3)] = null);

(cr29760_state[(1)] = null);

throw cr29760_exception;
}});
var cr29760_block_1 = (function hyperfiddle$electric$impl$io$message_writer_$_cr29760_block_1(cr29760_state){
try{var cr29760_place_4 = (cr29760_state[(1)]);
var cr29760_place_5 = cr29760_place_4;
var cr29760_place_6 = cr29760_place_5;
var cr29760_place_7 = null;
var cr29760_place_8 = (cr29760_place_6 == cr29760_place_7);
var cr29760_place_9 = null;
if(cr29760_place_8){
(cr29760_state[(0)] = cr29760_block_7);

(cr29760_state[(1)] = null);

(cr29760_state[(1)] = cr29760_place_9);

return cr29760_state;
} else {
(cr29760_state[(0)] = cr29760_block_2);

(cr29760_state[(2)] = cr29760_place_5);

return cr29760_state;
}
}catch (e29905){var cr29760_exception = e29905;
(cr29760_state[(0)] = null);

(cr29760_state[(1)] = null);

throw cr29760_exception;
}});
var cr29760_block_8 = (function hyperfiddle$electric$impl$io$message_writer_$_cr29760_block_8(cr29760_state){
try{var cr29760_place_48 = (cr29760_state[(2)]);
var cr29760_place_49 = cljs.core.count;
var cr29760_place_50 = cr29760_place_48;
var cr29760_place_51 = (function (){var G__29913 = cr29760_place_50;
var fexpr__29912 = cr29760_place_49;
return (fexpr__29912.cljs$core$IFn$_invoke$arity$1 ? fexpr__29912.cljs$core$IFn$_invoke$arity$1(G__29913) : fexpr__29912.call(null,G__29913));
})();
var cr29760_place_52 = hyperfiddle.electric.impl.io.chunk_size;
var cr29760_place_53 = (cr29760_place_51 >= cr29760_place_52);
var cr29760_place_54 = null;
if(cr29760_place_53){
(cr29760_state[(0)] = cr29760_block_11);

return cr29760_state;
} else {
(cr29760_state[(0)] = cr29760_block_9);

(cr29760_state[(3)] = cr29760_place_54);

return cr29760_state;
}
}catch (e29910){var cr29760_exception = e29910;
(cr29760_state[(0)] = null);

(cr29760_state[(1)] = null);

(cr29760_state[(2)] = null);

throw cr29760_exception;
}});
var cr29760_block_0 = (function hyperfiddle$electric$impl$io$message_writer_$_cr29760_block_0(cr29760_state){
try{var cr29760_place_0 = cljs.core.seq;
var cr29760_place_1 = cljs.core.pop;
var cr29760_place_2 = p1__29754_SHARP_;
var cr29760_place_3 = (function (){var G__29921 = cr29760_place_2;
var fexpr__29920 = cr29760_place_1;
return (fexpr__29920.cljs$core$IFn$_invoke$arity$1 ? fexpr__29920.cljs$core$IFn$_invoke$arity$1(G__29921) : fexpr__29920.call(null,G__29921));
})();
var cr29760_place_4 = (function (){var G__29924 = cr29760_place_3;
var fexpr__29923 = cr29760_place_0;
return (fexpr__29923.cljs$core$IFn$_invoke$arity$1 ? fexpr__29923.cljs$core$IFn$_invoke$arity$1(G__29924) : fexpr__29923.call(null,G__29924));
})();
(cr29760_state[(0)] = cr29760_block_1);

(cr29760_state[(1)] = cr29760_place_4);

return cr29760_state;
}catch (e29919){var cr29760_exception = e29919;
(cr29760_state[(0)] = null);

throw cr29760_exception;
}});
var cr29760_block_2 = (function hyperfiddle$electric$impl$io$message_writer_$_cr29760_block_2(cr29760_state){
try{var cr29760_place_5 = (cr29760_state[(2)]);
var cr29760_place_10 = cr29760_place_5;
var cr29760_place_11 = cljs.core.seq;
var cr29760_place_12 = cr29760_place_10;
var cr29760_place_13 = (function (){var G__29931 = cr29760_place_12;
var fexpr__29930 = cr29760_place_11;
return (fexpr__29930.cljs$core$IFn$_invoke$arity$1 ? fexpr__29930.cljs$core$IFn$_invoke$arity$1(G__29931) : fexpr__29930.call(null,G__29931));
})();
var cr29760_place_14 = cljs.core.first;
var cr29760_place_15 = cr29760_place_13;
var cr29760_place_16 = (function (){var G__29933 = cr29760_place_15;
var fexpr__29932 = cr29760_place_14;
return (fexpr__29932.cljs$core$IFn$_invoke$arity$1 ? fexpr__29932.cljs$core$IFn$_invoke$arity$1(G__29933) : fexpr__29932.call(null,G__29933));
})();
var cr29760_place_17 = cljs.core.next;
var cr29760_place_18 = cr29760_place_13;
var cr29760_place_19 = (function (){var G__29937 = cr29760_place_18;
var fexpr__29936 = cr29760_place_17;
return (fexpr__29936.cljs$core$IFn$_invoke$arity$1 ? fexpr__29936.cljs$core$IFn$_invoke$arity$1(G__29937) : fexpr__29936.call(null,G__29937));
})();
var cr29760_place_20 = cr29760_place_16;
var cr29760_place_21 = cr29760_place_19;
var cr29760_place_22 = console.debug;
var cr29760_place_23 = "\uD83D\uDD3C";
var cr29760_place_24 = cr29760_place_20;
var cr29760_place_25 = (function (){var G__29939 = cr29760_place_23;
var G__29940 = cr29760_place_24;
var fexpr__29938 = cr29760_place_22;
return (fexpr__29938.cljs$core$IFn$_invoke$arity$2 ? fexpr__29938.cljs$core$IFn$_invoke$arity$2(G__29939,G__29940) : fexpr__29938.call(null,G__29939,G__29940));
})();
var cr29760_place_26 = null;
var cr29760_place_27 = false;
(cr29760_state[(0)] = cr29760_block_3);

(cr29760_state[(2)] = null);

(cr29760_state[(2)] = cr29760_place_26);

(cr29760_state[(3)] = cr29760_place_20);

(cr29760_state[(4)] = cr29760_place_27);

(cr29760_state[(5)] = cr29760_place_21);

return cr29760_state;
}catch (e29925){var cr29760_exception = e29925;
(cr29760_state[(0)] = null);

(cr29760_state[(1)] = null);

(cr29760_state[(2)] = null);

throw cr29760_exception;
}});
var cr29760_block_5 = (function hyperfiddle$electric$impl$io$message_writer_$_cr29760_block_5(cr29760_state){
try{var cr29760_place_26 = (cr29760_state[(2)]);
var cr29760_place_27 = (cr29760_state[(4)]);
var cr29760_place_40 = (cljs.core.truth_(cr29760_place_27)?(function(){throw cr29760_place_26})():cr29760_place_26);
var cr29760_place_41 = write;
var cr29760_place_42 = cr29760_place_40;
var cr29760_place_43 = (function (){var G__29948 = cr29760_place_42;
var fexpr__29947 = cr29760_place_41;
return (fexpr__29947.cljs$core$IFn$_invoke$arity$1 ? fexpr__29947.cljs$core$IFn$_invoke$arity$1(G__29948) : fexpr__29947.call(null,G__29948));
})();
(cr29760_state[(0)] = cr29760_block_6);

(cr29760_state[(2)] = null);

(cr29760_state[(4)] = null);

return missionary.core.park(cr29760_place_43);
}catch (e29944){var cr29760_exception = e29944;
(cr29760_state[(0)] = null);

(cr29760_state[(1)] = null);

(cr29760_state[(2)] = null);

(cr29760_state[(4)] = null);

(cr29760_state[(5)] = null);

throw cr29760_exception;
}});
var cr29760_block_12 = (function hyperfiddle$electric$impl$io$message_writer_$_cr29760_block_12(cr29760_state){
try{var cr29760_place_48 = (cr29760_state[(2)]);
var cr29760_place_72 = missionary.core.unpark();
var cr29760_place_73 = cljs.core.subvec;
var cr29760_place_74 = cr29760_place_48;
var cr29760_place_75 = hyperfiddle.electric.impl.io.chunk_size;
var cr29760_place_76 = (function (){var G__29953 = cr29760_place_74;
var G__29954 = cr29760_place_75;
var fexpr__29952 = cr29760_place_73;
return (fexpr__29952.cljs$core$IFn$_invoke$arity$2 ? fexpr__29952.cljs$core$IFn$_invoke$arity$2(G__29953,G__29954) : fexpr__29952.call(null,G__29953,G__29954));
})();
(cr29760_state[(0)] = cr29760_block_8);

(cr29760_state[(2)] = cr29760_place_76);

return cr29760_state;
}catch (e29949){var cr29760_exception = e29949;
(cr29760_state[(0)] = null);

(cr29760_state[(1)] = null);

(cr29760_state[(2)] = null);

throw cr29760_exception;
}});
var cr29760_block_9 = (function hyperfiddle$electric$impl$io$message_writer_$_cr29760_block_9(cr29760_state){
try{var cr29760_place_48 = (cr29760_state[(2)]);
var cr29760_place_55 = hyperfiddle.electric.impl.io.encode_numbers;
var cr29760_place_56 = cr29760_place_48;
var cr29760_place_57 = (function (){var G__29961 = cr29760_place_56;
var fexpr__29960 = cr29760_place_55;
return (fexpr__29960.cljs$core$IFn$_invoke$arity$1 ? fexpr__29960.cljs$core$IFn$_invoke$arity$1(G__29961) : fexpr__29960.call(null,G__29961));
})();
var cr29760_place_58 = write;
var cr29760_place_59 = cr29760_place_57;
var cr29760_place_60 = (function (){var G__29964 = cr29760_place_59;
var fexpr__29963 = cr29760_place_58;
return (fexpr__29963.cljs$core$IFn$_invoke$arity$1 ? fexpr__29963.cljs$core$IFn$_invoke$arity$1(G__29964) : fexpr__29963.call(null,G__29964));
})();
(cr29760_state[(0)] = cr29760_block_10);

(cr29760_state[(2)] = null);

return missionary.core.park(cr29760_place_60);
}catch (e29956){var cr29760_exception = e29956;
(cr29760_state[(0)] = null);

(cr29760_state[(3)] = null);

(cr29760_state[(1)] = null);

(cr29760_state[(2)] = null);

throw cr29760_exception;
}});
var cr29760_block_10 = (function hyperfiddle$electric$impl$io$message_writer_$_cr29760_block_10(cr29760_state){
try{var cr29760_place_61 = missionary.core.unpark();
(cr29760_state[(0)] = cr29760_block_13);

(cr29760_state[(3)] = cr29760_place_61);

return cr29760_state;
}catch (e29966){var cr29760_exception = e29966;
(cr29760_state[(0)] = null);

(cr29760_state[(3)] = null);

(cr29760_state[(1)] = null);

throw cr29760_exception;
}});
var cr29760_block_3 = (function hyperfiddle$electric$impl$io$message_writer_$_cr29760_block_3(cr29760_state){
try{var cr29760_place_20 = (cr29760_state[(3)]);
var cr29760_place_28 = hyperfiddle.electric.impl.io.encode;
var cr29760_place_29 = cr29760_place_20;
var cr29760_place_30 = (function (){var G__29971 = cr29760_place_29;
var fexpr__29970 = cr29760_place_28;
return (fexpr__29970.cljs$core$IFn$_invoke$arity$1 ? fexpr__29970.cljs$core$IFn$_invoke$arity$1(G__29971) : fexpr__29970.call(null,G__29971));
})();
(cr29760_state[(0)] = cr29760_block_5);

(cr29760_state[(3)] = null);

(cr29760_state[(2)] = cr29760_place_30);

return cr29760_state;
}catch (e29968){var cr29760_exception = e29968;
(cr29760_state[(0)] = cr29760_block_4);

(cr29760_state[(2)] = cr29760_exception);

return cr29760_state;
}});
var cr29760_block_7 = (function hyperfiddle$electric$impl$io$message_writer_$_cr29760_block_7(cr29760_state){
try{var cr29760_place_46 = cljs.core.peek;
var cr29760_place_47 = p1__29754_SHARP_;
var cr29760_place_48 = (function (){var G__29974 = cr29760_place_47;
var fexpr__29973 = cr29760_place_46;
return (fexpr__29973.cljs$core$IFn$_invoke$arity$1 ? fexpr__29973.cljs$core$IFn$_invoke$arity$1(G__29974) : fexpr__29973.call(null,G__29974));
})();
(cr29760_state[(0)] = cr29760_block_8);

(cr29760_state[(2)] = cr29760_place_48);

return cr29760_state;
}catch (e29972){var cr29760_exception = e29972;
(cr29760_state[(0)] = null);

(cr29760_state[(1)] = null);

throw cr29760_exception;
}});
var cr29760_block_4 = (function hyperfiddle$electric$impl$io$message_writer_$_cr29760_block_4(cr29760_state){
try{var cr29760_place_26 = (cr29760_state[(2)]);
var cr29760_place_20 = (cr29760_state[(3)]);
var cr29760_place_31 = cr29760_place_26;
var cr29760_place_32 = cljs.core.ex_info;
var cr29760_place_33 = "Failed to encode";
var cr29760_place_34 = new cljs.core.Keyword(null,"value","value",305978217);
var cr29760_place_35 = cr29760_place_20;
var cr29760_place_36 = cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([cr29760_place_34,cr29760_place_35]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr29760_place_37 = cr29760_place_31;
var cr29760_place_38 = (function (){var G__29977 = cr29760_place_33;
var G__29978 = cr29760_place_36;
var G__29979 = cr29760_place_37;
var fexpr__29976 = cr29760_place_32;
return (fexpr__29976.cljs$core$IFn$_invoke$arity$3 ? fexpr__29976.cljs$core$IFn$_invoke$arity$3(G__29977,G__29978,G__29979) : fexpr__29976.call(null,G__29977,G__29978,G__29979));
})();
var cr29760_place_39 = (function(){throw cr29760_place_38})();
(cr29760_state[(0)] = null);

(cr29760_state[(1)] = null);

(cr29760_state[(2)] = null);

(cr29760_state[(3)] = null);

(cr29760_state[(4)] = null);

(cr29760_state[(5)] = null);

return null;
}catch (e29975){var cr29760_exception = e29975;
(cr29760_state[(0)] = cr29760_block_5);

(cr29760_state[(3)] = null);

(cr29760_state[(2)] = cr29760_exception);

(cr29760_state[(4)] = true);

return cr29760_state;
}});
return cloroutine.impl.coroutine((function (){var G__29980 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((6));
(G__29980[(0)] = cr29760_block_0);

return G__29980;
})());
})(),missionary.core.sp_run);
});
});
/**
 * A transducer partitioning a sequence of network messages into Electric events.
 */
hyperfiddle.electric.impl.io.decoder = (function hyperfiddle$electric$impl$io$decoder(rf){
var data = (function (){var G__29981 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
(G__29981[(0)] = cljs.core.PersistentVector.EMPTY);

(G__29981[(1)] = cljs.core.PersistentVector.EMPTY);

return G__29981;
})();
return (function() {
var G__30034 = null;
var G__30034__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__30034__1 = (function (r){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentVector.EMPTY,(data[(0)]),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(data[(1)])], 0))){
} else {
throw (new Error("Assert failed: (= [] (aget data 0) (aget data 1))"));
}

return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(r) : rf.call(null,r));
});
var G__30034__2 = (function (r,x){
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
G__30034 = function(r,x){
switch(arguments.length){
case 0:
return G__30034__0.call(this);
case 1:
return G__30034__1.call(this,r);
case 2:
return G__30034__2.call(this,r,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__30034.cljs$core$IFn$_invoke$arity$0 = G__30034__0;
G__30034.cljs$core$IFn$_invoke$arity$1 = G__30034__1;
G__30034.cljs$core$IFn$_invoke$arity$2 = G__30034__2;
return G__30034;
})()
});
/**
 * A transducer expanding Electric events to a sequence of network messages.
 */
hyperfiddle.electric.impl.io.encoder = (function hyperfiddle$electric$impl$io$encoder(rf){
return (function() {
var G__30037 = null;
var G__30037__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__30037__1 = (function (r){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(r) : rf.call(null,r));
});
var G__30037__2 = (function (r,x){
var r__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,r,cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.io.encode),cljs.core.pop(x)], 0)));
var r__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,r__$1,cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.partition_all.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.io.chunk_size),cljs.core.map.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.io.encode_numbers),cljs.core.peek(x)], 0)));
var G__29982 = cljs.core.mod(cljs.core.count(cljs.core.peek(x)),hyperfiddle.electric.impl.io.chunk_size);
switch (G__29982) {
case (0):
var G__29983 = r__$2;
var G__29984 = hyperfiddle.electric.impl.io.encode_numbers(cljs.core.PersistentVector.EMPTY);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__29983,G__29984) : rf.call(null,G__29983,G__29984));

break;
default:
return r__$2;

}
});
G__30037 = function(r,x){
switch(arguments.length){
case 0:
return G__30037__0.call(this);
case 1:
return G__30037__1.call(this,r);
case 2:
return G__30037__2.call(this,r,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__30037.cljs$core$IFn$_invoke$arity$0 = G__30037__0;
G__30037.cljs$core$IFn$_invoke$arity$1 = G__30037__1;
G__30037.cljs$core$IFn$_invoke$arity$2 = G__30037__2;
return G__30037;
})()
});
hyperfiddle.electric.impl.io.foreach = (function hyperfiddle$electric$impl$io$foreach(var_args){
var G__29986 = arguments.length;
switch (G__29986) {
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
