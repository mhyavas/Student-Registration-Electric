goog.provide('contrib.rfc3986');
contrib.rfc3986._sub_delims = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, ["!",null,"$",null,"&",null,"'",null,"(",null,")",null,"*",null,"+",null,",",null,";",null,"=",null], null), null);
contrib.rfc3986._unreserved = clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.char$,"abcdefghijklmnopqrstuvwxyz")),cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.char$,"0123456789")),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["-",null,".",null,"~",null,"_",null], null), null)], 0));
contrib.rfc3986._pchar = clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(contrib.rfc3986._unreserved,contrib.rfc3986._sub_delims,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["@",null,":",null], null), null)], 0));
/**
 * percent-encode a url path segment without over-encoding (which many platform url decoders do).
 *   Notably, this impl is compatible with java.net.URI which fails on some chars in the 'unwise set',
 *   which are probably safe today.
 */
contrib.rfc3986.encode_pchar = (function contrib$rfc3986$encode_pchar(s){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
if(cljs.core.truth_((contrib.rfc3986._pchar.cljs$core$IFn$_invoke$arity$1 ? contrib.rfc3986._pchar.cljs$core$IFn$_invoke$arity$1(c) : contrib.rfc3986._pchar.call(null,c)))){
return c;
} else {
return ["%",contrib.char$.char__GT_hex_str(c)].join('');
}
}),s));
});
contrib.rfc3986.decode_pchar = (function contrib$rfc3986$decode_pchar(s){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1((function (){var decoded = cljs.core.PersistentVector.EMPTY;
var G__40589 = s;
var vec__40590 = G__40589;
var seq__40591 = cljs.core.seq(vec__40590);
var first__40592 = cljs.core.first(seq__40591);
var seq__40591__$1 = cljs.core.next(seq__40591);
var c = first__40592;
var ss = seq__40591__$1;
var decoded__$1 = decoded;
var G__40589__$1 = G__40589;
while(true){
var decoded__$2 = decoded__$1;
var vec__40596 = G__40589__$1;
var seq__40597 = cljs.core.seq(vec__40596);
var first__40598 = cljs.core.first(seq__40597);
var seq__40597__$1 = cljs.core.next(seq__40597);
var c__$1 = first__40598;
var ss__$1 = seq__40597__$1;
if(cljs.core.not(c__$1)){
return decoded__$2;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((37),contrib.char$.char_code(c__$1))){
var G__40599 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(decoded__$2,contrib.char$.hex_str__GT_char(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),ss__$1))));
var G__40600 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),ss__$1);
decoded__$1 = G__40599;
G__40589__$1 = G__40600;
continue;
} else {
var G__40601 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(decoded__$2,c__$1);
var G__40602 = ss__$1;
decoded__$1 = G__40601;
G__40589__$1 = G__40602;
continue;
}
}
break;
}
})());
});

//# sourceMappingURL=contrib.rfc3986.js.map
