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
var vec__39632 = libspec;
var seq__39633 = cljs.core.seq(vec__39632);
var first__39634 = cljs.core.first(seq__39633);
var seq__39633__$1 = cljs.core.next(seq__39633);
var lib = first__39634;
var spec = seq__39633__$1;
var libspec__$1 = vec__39632;
var vec__39635 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39635,(0),null);
var vec__39638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39635,(1),null);
var seq__39639 = cljs.core.seq(vec__39638);
var first__39640 = cljs.core.first(seq__39639);
var seq__39639__$1 = cljs.core.next(seq__39639);
var _ = first__39640;
var first__39640__$1 = cljs.core.first(seq__39639__$1);
var seq__39639__$2 = cljs.core.next(seq__39639__$1);
var alias = first__39640__$1;
var post_spec = seq__39639__$2;
var post = vec__39638;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__39641 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39641,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__39641;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__39643 = cljs.core.seq(new_as_aliases);
var chunk__39644 = null;
var count__39645 = (0);
var i__39646 = (0);
while(true){
if((i__39646 < count__39645)){
var vec__39684 = chunk__39644.cljs$core$IIndexed$_nth$arity$2(null,i__39646);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39684,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39684,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__39782 = seq__39643;
var G__39783 = chunk__39644;
var G__39784 = count__39645;
var G__39785 = (i__39646 + (1));
seq__39643 = G__39782;
chunk__39644 = G__39783;
count__39645 = G__39784;
i__39646 = G__39785;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__39643);
if(temp__5804__auto__){
var seq__39643__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39643__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__39643__$1);
var G__39786 = cljs.core.chunk_rest(seq__39643__$1);
var G__39787 = c__5568__auto__;
var G__39788 = cljs.core.count(c__5568__auto__);
var G__39789 = (0);
seq__39643 = G__39786;
chunk__39644 = G__39787;
count__39645 = G__39788;
i__39646 = G__39789;
continue;
} else {
var vec__39700 = cljs.core.first(seq__39643__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39700,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39700,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__39790 = cljs.core.next(seq__39643__$1);
var G__39791 = null;
var G__39792 = (0);
var G__39793 = (0);
seq__39643 = G__39790;
chunk__39644 = G__39791;
count__39645 = G__39792;
i__39646 = G__39793;
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
var G__39712 = arguments.length;
switch (G__39712) {
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
var map__39758 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__39758__$1 = cljs.core.__destructure_map(map__39758);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39758__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39758__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__39760 = ret__$1;
var G__39760__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__39760,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__39760);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__39760__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__39760__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__39768,p__39769){
var map__39770 = p__39768;
var map__39770__$1 = cljs.core.__destructure_map(map__39770);
var ret__$1 = map__39770__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39770__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__39771 = p__39769;
var seq__39772 = cljs.core.seq(vec__39771);
var first__39773 = cljs.core.first(seq__39772);
var seq__39772__$1 = cljs.core.next(seq__39772);
var spec_key = first__39773;
var libspecs = seq__39772__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__39774 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__39774__$1 = cljs.core.__destructure_map(map__39774);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39774__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39774__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__39775 = ret__$1;
var G__39775__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__39775,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__39775);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__39775__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__39775__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
