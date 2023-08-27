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
var vec__40165 = libspec;
var seq__40166 = cljs.core.seq(vec__40165);
var first__40167 = cljs.core.first(seq__40166);
var seq__40166__$1 = cljs.core.next(seq__40166);
var lib = first__40167;
var spec = seq__40166__$1;
var libspec__$1 = vec__40165;
var vec__40168 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40168,(0),null);
var vec__40171 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40168,(1),null);
var seq__40172 = cljs.core.seq(vec__40171);
var first__40173 = cljs.core.first(seq__40172);
var seq__40172__$1 = cljs.core.next(seq__40172);
var _ = first__40173;
var first__40173__$1 = cljs.core.first(seq__40172__$1);
var seq__40172__$2 = cljs.core.next(seq__40172__$1);
var alias = first__40173__$1;
var post_spec = seq__40172__$2;
var post = vec__40171;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__40187 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40187,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__40187;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__40190 = cljs.core.seq(new_as_aliases);
var chunk__40191 = null;
var count__40192 = (0);
var i__40193 = (0);
while(true){
if((i__40193 < count__40192)){
var vec__40202 = chunk__40191.cljs$core$IIndexed$_nth$arity$2(null,i__40193);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40202,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40202,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__40230 = seq__40190;
var G__40231 = chunk__40191;
var G__40232 = count__40192;
var G__40233 = (i__40193 + (1));
seq__40190 = G__40230;
chunk__40191 = G__40231;
count__40192 = G__40232;
i__40193 = G__40233;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__40190);
if(temp__5804__auto__){
var seq__40190__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40190__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__40190__$1);
var G__40234 = cljs.core.chunk_rest(seq__40190__$1);
var G__40235 = c__5568__auto__;
var G__40236 = cljs.core.count(c__5568__auto__);
var G__40237 = (0);
seq__40190 = G__40234;
chunk__40191 = G__40235;
count__40192 = G__40236;
i__40193 = G__40237;
continue;
} else {
var vec__40205 = cljs.core.first(seq__40190__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40205,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40205,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__40238 = cljs.core.next(seq__40190__$1);
var G__40239 = null;
var G__40240 = (0);
var G__40241 = (0);
seq__40190 = G__40238;
chunk__40191 = G__40239;
count__40192 = G__40240;
i__40193 = G__40241;
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
var G__40213 = arguments.length;
switch (G__40213) {
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
var map__40215 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__40215__$1 = cljs.core.__destructure_map(map__40215);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40215__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40215__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__40216 = ret__$1;
var G__40216__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__40216,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__40216);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__40216__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__40216__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__40217,p__40218){
var map__40219 = p__40217;
var map__40219__$1 = cljs.core.__destructure_map(map__40219);
var ret__$1 = map__40219__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40219__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__40220 = p__40218;
var seq__40221 = cljs.core.seq(vec__40220);
var first__40222 = cljs.core.first(seq__40221);
var seq__40221__$1 = cljs.core.next(seq__40221);
var spec_key = first__40222;
var libspecs = seq__40221__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__40223 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__40223__$1 = cljs.core.__destructure_map(map__40223);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40223__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40223__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__40224 = ret__$1;
var G__40224__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__40224,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__40224);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__40224__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__40224__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
