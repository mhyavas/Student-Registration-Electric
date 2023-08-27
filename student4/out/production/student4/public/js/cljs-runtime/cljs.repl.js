goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37839){
var map__37840 = p__37839;
var map__37840__$1 = cljs.core.__destructure_map(map__37840);
var m = map__37840__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37840__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37840__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37850_38194 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37851_38195 = null;
var count__37852_38196 = (0);
var i__37853_38197 = (0);
while(true){
if((i__37853_38197 < count__37852_38196)){
var f_38198 = chunk__37851_38195.cljs$core$IIndexed$_nth$arity$2(null,i__37853_38197);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_38198], 0));


var G__38199 = seq__37850_38194;
var G__38200 = chunk__37851_38195;
var G__38201 = count__37852_38196;
var G__38202 = (i__37853_38197 + (1));
seq__37850_38194 = G__38199;
chunk__37851_38195 = G__38200;
count__37852_38196 = G__38201;
i__37853_38197 = G__38202;
continue;
} else {
var temp__5804__auto___38203 = cljs.core.seq(seq__37850_38194);
if(temp__5804__auto___38203){
var seq__37850_38204__$1 = temp__5804__auto___38203;
if(cljs.core.chunked_seq_QMARK_(seq__37850_38204__$1)){
var c__5568__auto___38205 = cljs.core.chunk_first(seq__37850_38204__$1);
var G__38206 = cljs.core.chunk_rest(seq__37850_38204__$1);
var G__38207 = c__5568__auto___38205;
var G__38208 = cljs.core.count(c__5568__auto___38205);
var G__38209 = (0);
seq__37850_38194 = G__38206;
chunk__37851_38195 = G__38207;
count__37852_38196 = G__38208;
i__37853_38197 = G__38209;
continue;
} else {
var f_38210 = cljs.core.first(seq__37850_38204__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_38210], 0));


var G__38212 = cljs.core.next(seq__37850_38204__$1);
var G__38213 = null;
var G__38214 = (0);
var G__38215 = (0);
seq__37850_38194 = G__38212;
chunk__37851_38195 = G__38213;
count__37852_38196 = G__38214;
i__37853_38197 = G__38215;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38217 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_38217], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_38217)))?cljs.core.second(arglists_38217):arglists_38217)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37873_38221 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37874_38222 = null;
var count__37875_38223 = (0);
var i__37876_38224 = (0);
while(true){
if((i__37876_38224 < count__37875_38223)){
var vec__37902_38225 = chunk__37874_38222.cljs$core$IIndexed$_nth$arity$2(null,i__37876_38224);
var name_38226 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37902_38225,(0),null);
var map__37905_38227 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37902_38225,(1),null);
var map__37905_38228__$1 = cljs.core.__destructure_map(map__37905_38227);
var doc_38229 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37905_38228__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38230 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37905_38228__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_38226], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_38230], 0));

if(cljs.core.truth_(doc_38229)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_38229], 0));
} else {
}


var G__38247 = seq__37873_38221;
var G__38248 = chunk__37874_38222;
var G__38249 = count__37875_38223;
var G__38250 = (i__37876_38224 + (1));
seq__37873_38221 = G__38247;
chunk__37874_38222 = G__38248;
count__37875_38223 = G__38249;
i__37876_38224 = G__38250;
continue;
} else {
var temp__5804__auto___38251 = cljs.core.seq(seq__37873_38221);
if(temp__5804__auto___38251){
var seq__37873_38253__$1 = temp__5804__auto___38251;
if(cljs.core.chunked_seq_QMARK_(seq__37873_38253__$1)){
var c__5568__auto___38254 = cljs.core.chunk_first(seq__37873_38253__$1);
var G__38255 = cljs.core.chunk_rest(seq__37873_38253__$1);
var G__38256 = c__5568__auto___38254;
var G__38257 = cljs.core.count(c__5568__auto___38254);
var G__38258 = (0);
seq__37873_38221 = G__38255;
chunk__37874_38222 = G__38256;
count__37875_38223 = G__38257;
i__37876_38224 = G__38258;
continue;
} else {
var vec__37910_38261 = cljs.core.first(seq__37873_38253__$1);
var name_38262 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37910_38261,(0),null);
var map__37913_38263 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37910_38261,(1),null);
var map__37913_38264__$1 = cljs.core.__destructure_map(map__37913_38263);
var doc_38265 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37913_38264__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38266 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37913_38264__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_38262], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_38266], 0));

if(cljs.core.truth_(doc_38265)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_38265], 0));
} else {
}


var G__38272 = cljs.core.next(seq__37873_38253__$1);
var G__38273 = null;
var G__38274 = (0);
var G__38275 = (0);
seq__37873_38221 = G__38272;
chunk__37874_38222 = G__38273;
count__37875_38223 = G__38274;
i__37876_38224 = G__38275;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__37918 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37919 = null;
var count__37920 = (0);
var i__37921 = (0);
while(true){
if((i__37921 < count__37920)){
var role = chunk__37919.cljs$core$IIndexed$_nth$arity$2(null,i__37921);
var temp__5804__auto___38276__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___38276__$1)){
var spec_38277 = temp__5804__auto___38276__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_38277)], 0));
} else {
}


var G__38279 = seq__37918;
var G__38280 = chunk__37919;
var G__38281 = count__37920;
var G__38282 = (i__37921 + (1));
seq__37918 = G__38279;
chunk__37919 = G__38280;
count__37920 = G__38281;
i__37921 = G__38282;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__37918);
if(temp__5804__auto____$1){
var seq__37918__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__37918__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37918__$1);
var G__38284 = cljs.core.chunk_rest(seq__37918__$1);
var G__38285 = c__5568__auto__;
var G__38286 = cljs.core.count(c__5568__auto__);
var G__38287 = (0);
seq__37918 = G__38284;
chunk__37919 = G__38285;
count__37920 = G__38286;
i__37921 = G__38287;
continue;
} else {
var role = cljs.core.first(seq__37918__$1);
var temp__5804__auto___38288__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___38288__$2)){
var spec_38289 = temp__5804__auto___38288__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_38289)], 0));
} else {
}


var G__38291 = cljs.core.next(seq__37918__$1);
var G__38292 = null;
var G__38293 = (0);
var G__38294 = (0);
seq__37918 = G__38291;
chunk__37919 = G__38292;
count__37920 = G__38293;
i__37921 = G__38294;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__38307 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__38308 = cljs.core.ex_cause(t);
via = G__38307;
t = G__38308;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__38046 = datafied_throwable;
var map__38046__$1 = cljs.core.__destructure_map(map__38046);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38046__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38046__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38046__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__38047 = cljs.core.last(via);
var map__38047__$1 = cljs.core.__destructure_map(map__38047);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38047__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38047__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38047__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__38048 = data;
var map__38048__$1 = cljs.core.__destructure_map(map__38048);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38048__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38048__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38048__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__38050 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__38050__$1 = cljs.core.__destructure_map(map__38050);
var top_data = map__38050__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38050__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__38059 = phase;
var G__38059__$1 = (((G__38059 instanceof cljs.core.Keyword))?G__38059.fqn:null);
switch (G__38059__$1) {
case "read-source":
var map__38062 = data;
var map__38062__$1 = cljs.core.__destructure_map(map__38062);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38062__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38062__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__38063 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__38063__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38063,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__38063);
var G__38063__$2 = (cljs.core.truth_((function (){var fexpr__38065 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38065.cljs$core$IFn$_invoke$arity$1 ? fexpr__38065.cljs$core$IFn$_invoke$arity$1(source) : fexpr__38065.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__38063__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__38063__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38063__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__38063__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__38068 = top_data;
var G__38068__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38068,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__38068);
var G__38068__$2 = (cljs.core.truth_((function (){var fexpr__38070 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38070.cljs$core$IFn$_invoke$arity$1 ? fexpr__38070.cljs$core$IFn$_invoke$arity$1(source) : fexpr__38070.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__38068__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__38068__$1);
var G__38068__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38068__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__38068__$2);
var G__38068__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38068__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__38068__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38068__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__38068__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__38080 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38080,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38080,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38080,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38080,(3),null);
var G__38084 = top_data;
var G__38084__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38084,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__38084);
var G__38084__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38084__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__38084__$1);
var G__38084__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38084__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__38084__$2);
var G__38084__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38084__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__38084__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38084__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__38084__$4;
}

break;
case "execution":
var vec__38089 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38089,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38089,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38089,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38089,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__38039_SHARP_){
var or__5045__auto__ = (p1__38039_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__38093 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38093.cljs$core$IFn$_invoke$arity$1 ? fexpr__38093.cljs$core$IFn$_invoke$arity$1(p1__38039_SHARP_) : fexpr__38093.call(null,p1__38039_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__38095 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__38095__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38095,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__38095);
var G__38095__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38095__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__38095__$1);
var G__38095__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38095__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__38095__$2);
var G__38095__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38095__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__38095__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38095__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__38095__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38059__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__38114){
var map__38115 = p__38114;
var map__38115__$1 = cljs.core.__destructure_map(map__38115);
var triage_data = map__38115__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38115__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38115__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38115__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38115__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38115__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38115__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38115__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38115__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__38131 = phase;
var G__38131__$1 = (((G__38131 instanceof cljs.core.Keyword))?G__38131.fqn:null);
switch (G__38131__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__38133 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__38134 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38135 = loc;
var G__38136 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38138_38369 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38139_38370 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38140_38371 = true;
var _STAR_print_fn_STAR__temp_val__38141_38372 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38140_38371);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38141_38372);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38106_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__38106_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38139_38370);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38138_38369);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__38133,G__38134,G__38135,G__38136) : format.call(null,G__38133,G__38134,G__38135,G__38136));

break;
case "macroexpansion":
var G__38149 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__38150 = cause_type;
var G__38151 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38152 = loc;
var G__38153 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38149,G__38150,G__38151,G__38152,G__38153) : format.call(null,G__38149,G__38150,G__38151,G__38152,G__38153));

break;
case "compile-syntax-check":
var G__38155 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__38156 = cause_type;
var G__38157 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38158 = loc;
var G__38159 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38155,G__38156,G__38157,G__38158,G__38159) : format.call(null,G__38155,G__38156,G__38157,G__38158,G__38159));

break;
case "compilation":
var G__38161 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__38162 = cause_type;
var G__38163 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38164 = loc;
var G__38165 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38161,G__38162,G__38163,G__38164,G__38165) : format.call(null,G__38161,G__38162,G__38163,G__38164,G__38165));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__38169 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__38170 = symbol;
var G__38171 = loc;
var G__38172 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38174_38373 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38175_38374 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38176_38375 = true;
var _STAR_print_fn_STAR__temp_val__38177_38376 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38176_38375);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38177_38376);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38113_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__38113_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38175_38374);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38174_38373);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__38169,G__38170,G__38171,G__38172) : format.call(null,G__38169,G__38170,G__38171,G__38172));
} else {
var G__38181 = "Execution error%s at %s(%s).\n%s\n";
var G__38182 = cause_type;
var G__38183 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38184 = loc;
var G__38185 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38181,G__38182,G__38183,G__38184,G__38185) : format.call(null,G__38181,G__38182,G__38183,G__38184,G__38185));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38131__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
