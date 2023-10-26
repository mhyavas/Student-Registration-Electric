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
var vec__38753 = libspec;
var seq__38754 = cljs.core.seq(vec__38753);
var first__38755 = cljs.core.first(seq__38754);
var seq__38754__$1 = cljs.core.next(seq__38754);
var lib = first__38755;
var spec = seq__38754__$1;
var libspec__$1 = vec__38753;
var vec__38756 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38756,(0),null);
var vec__38759 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38756,(1),null);
var seq__38760 = cljs.core.seq(vec__38759);
var first__38761 = cljs.core.first(seq__38760);
var seq__38760__$1 = cljs.core.next(seq__38760);
var _ = first__38761;
var first__38761__$1 = cljs.core.first(seq__38760__$1);
var seq__38760__$2 = cljs.core.next(seq__38760__$1);
var alias = first__38761__$1;
var post_spec = seq__38760__$2;
var post = vec__38759;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__38769 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38769,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__38769;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__38773 = cljs.core.seq(new_as_aliases);
var chunk__38774 = null;
var count__38775 = (0);
var i__38776 = (0);
while(true){
if((i__38776 < count__38775)){
var vec__38790 = chunk__38774.cljs$core$IIndexed$_nth$arity$2(null,i__38776);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38790,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38790,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__38849 = seq__38773;
var G__38850 = chunk__38774;
var G__38851 = count__38775;
var G__38852 = (i__38776 + (1));
seq__38773 = G__38849;
chunk__38774 = G__38850;
count__38775 = G__38851;
i__38776 = G__38852;
continue;
} else {
var temp__5816__auto__ = cljs.core.seq(seq__38773);
if(temp__5816__auto__){
var seq__38773__$1 = temp__5816__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38773__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38773__$1);
var G__38854 = cljs.core.chunk_rest(seq__38773__$1);
var G__38855 = c__5568__auto__;
var G__38856 = cljs.core.count(c__5568__auto__);
var G__38857 = (0);
seq__38773 = G__38854;
chunk__38774 = G__38855;
count__38775 = G__38856;
i__38776 = G__38857;
continue;
} else {
var vec__38794 = cljs.core.first(seq__38773__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38794,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38794,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__38859 = cljs.core.next(seq__38773__$1);
var G__38860 = null;
var G__38861 = (0);
var G__38862 = (0);
seq__38773 = G__38859;
chunk__38774 = G__38860;
count__38775 = G__38861;
i__38776 = G__38862;
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
var G__38819 = arguments.length;
switch (G__38819) {
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
var map__38824 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__38824__$1 = cljs.core.__destructure_map(map__38824);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38824__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38824__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__38826 = ret__$1;
var G__38826__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__38826,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__38826);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__38826__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__38826__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__38831,p__38832){
var map__38833 = p__38831;
var map__38833__$1 = cljs.core.__destructure_map(map__38833);
var ret__$1 = map__38833__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38833__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__38834 = p__38832;
var seq__38835 = cljs.core.seq(vec__38834);
var first__38836 = cljs.core.first(seq__38835);
var seq__38835__$1 = cljs.core.next(seq__38835);
var spec_key = first__38836;
var libspecs = seq__38835__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__38837 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__38837__$1 = cljs.core.__destructure_map(map__38837);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38837__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38837__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__38838 = ret__$1;
var G__38838__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__38838,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__38838);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__38838__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__38838__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
