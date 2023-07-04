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
var vec__38822 = libspec;
var seq__38823 = cljs.core.seq(vec__38822);
var first__38824 = cljs.core.first(seq__38823);
var seq__38823__$1 = cljs.core.next(seq__38823);
var lib = first__38824;
var spec = seq__38823__$1;
var libspec__$1 = vec__38822;
var vec__38825 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38825,(0),null);
var vec__38828 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38825,(1),null);
var seq__38829 = cljs.core.seq(vec__38828);
var first__38830 = cljs.core.first(seq__38829);
var seq__38829__$1 = cljs.core.next(seq__38829);
var _ = first__38830;
var first__38830__$1 = cljs.core.first(seq__38829__$1);
var seq__38829__$2 = cljs.core.next(seq__38829__$1);
var alias = first__38830__$1;
var post_spec = seq__38829__$2;
var post = vec__38828;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__38838 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38838,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__38838;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__38844 = cljs.core.seq(new_as_aliases);
var chunk__38865 = null;
var count__38866 = (0);
var i__38867 = (0);
while(true){
if((i__38867 < count__38866)){
var vec__38893 = chunk__38865.cljs$core$IIndexed$_nth$arity$2(null,i__38867);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38893,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38893,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__38940 = seq__38844;
var G__38941 = chunk__38865;
var G__38942 = count__38866;
var G__38943 = (i__38867 + (1));
seq__38844 = G__38940;
chunk__38865 = G__38941;
count__38866 = G__38942;
i__38867 = G__38943;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38844);
if(temp__5804__auto__){
var seq__38844__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38844__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38844__$1);
var G__38944 = cljs.core.chunk_rest(seq__38844__$1);
var G__38945 = c__5568__auto__;
var G__38946 = cljs.core.count(c__5568__auto__);
var G__38947 = (0);
seq__38844 = G__38944;
chunk__38865 = G__38945;
count__38866 = G__38946;
i__38867 = G__38947;
continue;
} else {
var vec__38896 = cljs.core.first(seq__38844__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38896,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38896,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__38949 = cljs.core.next(seq__38844__$1);
var G__38950 = null;
var G__38951 = (0);
var G__38952 = (0);
seq__38844 = G__38949;
chunk__38865 = G__38950;
count__38866 = G__38951;
i__38867 = G__38952;
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
var G__38911 = arguments.length;
switch (G__38911) {
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
var map__38912 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__38912__$1 = cljs.core.__destructure_map(map__38912);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38912__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38912__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__38916 = ret__$1;
var G__38916__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__38916,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__38916);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__38916__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__38916__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__38922,p__38923){
var map__38924 = p__38922;
var map__38924__$1 = cljs.core.__destructure_map(map__38924);
var ret__$1 = map__38924__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38924__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__38925 = p__38923;
var seq__38926 = cljs.core.seq(vec__38925);
var first__38927 = cljs.core.first(seq__38926);
var seq__38926__$1 = cljs.core.next(seq__38926);
var spec_key = first__38927;
var libspecs = seq__38926__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__38929 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__38929__$1 = cljs.core.__destructure_map(map__38929);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38929__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38929__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__38931 = ret__$1;
var G__38931__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__38931,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__38931);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__38931__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__38931__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
