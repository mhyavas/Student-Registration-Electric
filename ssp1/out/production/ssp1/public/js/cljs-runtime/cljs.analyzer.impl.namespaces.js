goog.provide('cljs.analyzer.impl.namespaces');
/**
 * Given a libspec return a map of :as-alias alias, if was present. Return the
 * libspec with :as-alias elided. If the libspec was *only* :as-alias do not
 * return it.
 */
cljs.analyzer.impl.namespaces.check_and_remove_as_alias = (function cljs$analyzer$impl$namespaces$check_and_remove_as_alias(libspec){
if((((libspec instanceof cljs.core.Symbol)) || ((libspec instanceof cljs.core.Keyword)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec], null);
} else {
var vec__41211 = libspec;
var seq__41212 = cljs.core.seq(vec__41211);
var first__41213 = cljs.core.first(seq__41212);
var seq__41212__$1 = cljs.core.next(seq__41212);
var lib = first__41213;
var spec = seq__41212__$1;
var libspec__$1 = vec__41211;
var vec__41214 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41214,(0),null);
var vec__41217 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41214,(1),null);
var seq__41218 = cljs.core.seq(vec__41217);
var first__41219 = cljs.core.first(seq__41218);
var seq__41218__$1 = cljs.core.next(seq__41218);
var _ = first__41219;
var first__41219__$1 = cljs.core.first(seq__41218__$1);
var seq__41218__$2 = cljs.core.next(seq__41218__$1);
var alias = first__41219__$1;
var post_spec = seq__41218__$2;
var post = vec__41217;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__41224 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41224,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__41224;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__41225 = cljs.core.seq(new_as_aliases);
var chunk__41226 = null;
var count__41227 = (0);
var i__41228 = (0);
while(true){
if((i__41228 < count__41227)){
var vec__41237 = chunk__41226.cljs$core$IIndexed$_nth$arity$2(null,i__41228);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41237,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41237,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__41269 = seq__41225;
var G__41270 = chunk__41226;
var G__41271 = count__41227;
var G__41272 = (i__41228 + (1));
seq__41225 = G__41269;
chunk__41226 = G__41270;
count__41227 = G__41271;
i__41228 = G__41272;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__41225);
if(temp__5804__auto__){
var seq__41225__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41225__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__41225__$1);
var G__41273 = cljs.core.chunk_rest(seq__41225__$1);
var G__41274 = c__5568__auto__;
var G__41275 = cljs.core.count(c__5568__auto__);
var G__41276 = (0);
seq__41225 = G__41273;
chunk__41226 = G__41274;
count__41227 = G__41275;
i__41228 = G__41276;
continue;
} else {
var vec__41242 = cljs.core.first(seq__41225__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41242,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41242,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__41277 = cljs.core.next(seq__41225__$1);
var G__41278 = null;
var G__41279 = (0);
var G__41280 = (0);
seq__41225 = G__41277;
chunk__41226 = G__41278;
count__41227 = G__41279;
i__41228 = G__41280;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Given libspecs, elide all :as-alias. Return a map of :libspecs (filtered)
 * and :as-aliases.
 */
cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_libspecs(var_args){
var G__41250 = arguments.length;
switch (G__41250) {
case 1:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1 = (function (libspecs){
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2 = (function (libspecs,as_aliases){
var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),as_aliases,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__$1,libspec){
var map__41255 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__41255__$1 = cljs.core.__destructure_map(map__41255);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41255__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41255__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__41256 = ret__$1;
var G__41256__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__41256,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__41256);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__41256__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__41256__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__41257,p__41258){
var map__41259 = p__41257;
var map__41259__$1 = cljs.core.__destructure_map(map__41259);
var ret__$1 = map__41259__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41259__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__41260 = p__41258;
var seq__41261 = cljs.core.seq(vec__41260);
var first__41262 = cljs.core.first(seq__41261);
var seq__41261__$1 = cljs.core.next(seq__41261);
var spec_key = first__41262;
var libspecs = seq__41261__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__41263 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__41263__$1 = cljs.core.__destructure_map(map__41263);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41263__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41263__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__41264 = ret__$1;
var G__41264__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__41264,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__41264);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__41264__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__41264__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
