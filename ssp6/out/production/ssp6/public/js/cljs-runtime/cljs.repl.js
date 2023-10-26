goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36084){
var map__36085 = p__36084;
var map__36085__$1 = cljs.core.__destructure_map(map__36085);
var m = map__36085__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36085__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36085__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5816__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5816__auto__)){
var ns = temp__5816__auto__;
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
var seq__36086_36358 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36087_36359 = null;
var count__36088_36360 = (0);
var i__36089_36361 = (0);
while(true){
if((i__36089_36361 < count__36088_36360)){
var f_36362 = chunk__36087_36359.cljs$core$IIndexed$_nth$arity$2(null,i__36089_36361);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36362], 0));


var G__36363 = seq__36086_36358;
var G__36364 = chunk__36087_36359;
var G__36365 = count__36088_36360;
var G__36366 = (i__36089_36361 + (1));
seq__36086_36358 = G__36363;
chunk__36087_36359 = G__36364;
count__36088_36360 = G__36365;
i__36089_36361 = G__36366;
continue;
} else {
var temp__5816__auto___36367 = cljs.core.seq(seq__36086_36358);
if(temp__5816__auto___36367){
var seq__36086_36368__$1 = temp__5816__auto___36367;
if(cljs.core.chunked_seq_QMARK_(seq__36086_36368__$1)){
var c__5568__auto___36370 = cljs.core.chunk_first(seq__36086_36368__$1);
var G__36371 = cljs.core.chunk_rest(seq__36086_36368__$1);
var G__36372 = c__5568__auto___36370;
var G__36373 = cljs.core.count(c__5568__auto___36370);
var G__36374 = (0);
seq__36086_36358 = G__36371;
chunk__36087_36359 = G__36372;
count__36088_36360 = G__36373;
i__36089_36361 = G__36374;
continue;
} else {
var f_36375 = cljs.core.first(seq__36086_36368__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36375], 0));


var G__36376 = cljs.core.next(seq__36086_36368__$1);
var G__36377 = null;
var G__36378 = (0);
var G__36379 = (0);
seq__36086_36358 = G__36376;
chunk__36087_36359 = G__36377;
count__36088_36360 = G__36378;
i__36089_36361 = G__36379;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36380 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_36380], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_36380)))?cljs.core.second(arglists_36380):arglists_36380)], 0));
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
var seq__36091_36381 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36092_36382 = null;
var count__36093_36383 = (0);
var i__36094_36384 = (0);
while(true){
if((i__36094_36384 < count__36093_36383)){
var vec__36112_36386 = chunk__36092_36382.cljs$core$IIndexed$_nth$arity$2(null,i__36094_36384);
var name_36387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36112_36386,(0),null);
var map__36115_36388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36112_36386,(1),null);
var map__36115_36389__$1 = cljs.core.__destructure_map(map__36115_36388);
var doc_36390 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36115_36389__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36391 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36115_36389__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36387], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36391], 0));

if(cljs.core.truth_(doc_36390)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36390], 0));
} else {
}


var G__36392 = seq__36091_36381;
var G__36393 = chunk__36092_36382;
var G__36394 = count__36093_36383;
var G__36395 = (i__36094_36384 + (1));
seq__36091_36381 = G__36392;
chunk__36092_36382 = G__36393;
count__36093_36383 = G__36394;
i__36094_36384 = G__36395;
continue;
} else {
var temp__5816__auto___36396 = cljs.core.seq(seq__36091_36381);
if(temp__5816__auto___36396){
var seq__36091_36397__$1 = temp__5816__auto___36396;
if(cljs.core.chunked_seq_QMARK_(seq__36091_36397__$1)){
var c__5568__auto___36398 = cljs.core.chunk_first(seq__36091_36397__$1);
var G__36399 = cljs.core.chunk_rest(seq__36091_36397__$1);
var G__36400 = c__5568__auto___36398;
var G__36401 = cljs.core.count(c__5568__auto___36398);
var G__36402 = (0);
seq__36091_36381 = G__36399;
chunk__36092_36382 = G__36400;
count__36093_36383 = G__36401;
i__36094_36384 = G__36402;
continue;
} else {
var vec__36118_36409 = cljs.core.first(seq__36091_36397__$1);
var name_36410 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36118_36409,(0),null);
var map__36121_36411 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36118_36409,(1),null);
var map__36121_36412__$1 = cljs.core.__destructure_map(map__36121_36411);
var doc_36413 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36121_36412__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36414 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36121_36412__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36410], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36414], 0));

if(cljs.core.truth_(doc_36413)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36413], 0));
} else {
}


var G__36415 = cljs.core.next(seq__36091_36397__$1);
var G__36416 = null;
var G__36417 = (0);
var G__36418 = (0);
seq__36091_36381 = G__36415;
chunk__36092_36382 = G__36416;
count__36093_36383 = G__36417;
i__36094_36384 = G__36418;
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
var temp__5816__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5816__auto__)){
var fnspec = temp__5816__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__36122 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36123 = null;
var count__36124 = (0);
var i__36125 = (0);
while(true){
if((i__36125 < count__36124)){
var role = chunk__36123.cljs$core$IIndexed$_nth$arity$2(null,i__36125);
var temp__5816__auto___36423__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5816__auto___36423__$1)){
var spec_36424 = temp__5816__auto___36423__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36424)], 0));
} else {
}


var G__36425 = seq__36122;
var G__36426 = chunk__36123;
var G__36427 = count__36124;
var G__36428 = (i__36125 + (1));
seq__36122 = G__36425;
chunk__36123 = G__36426;
count__36124 = G__36427;
i__36125 = G__36428;
continue;
} else {
var temp__5816__auto____$1 = cljs.core.seq(seq__36122);
if(temp__5816__auto____$1){
var seq__36122__$1 = temp__5816__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__36122__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36122__$1);
var G__36429 = cljs.core.chunk_rest(seq__36122__$1);
var G__36430 = c__5568__auto__;
var G__36431 = cljs.core.count(c__5568__auto__);
var G__36432 = (0);
seq__36122 = G__36429;
chunk__36123 = G__36430;
count__36124 = G__36431;
i__36125 = G__36432;
continue;
} else {
var role = cljs.core.first(seq__36122__$1);
var temp__5816__auto___36433__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5816__auto___36433__$2)){
var spec_36434 = temp__5816__auto___36433__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36434)], 0));
} else {
}


var G__36435 = cljs.core.next(seq__36122__$1);
var G__36436 = null;
var G__36437 = (0);
var G__36438 = (0);
seq__36122 = G__36435;
chunk__36123 = G__36436;
count__36124 = G__36437;
i__36125 = G__36438;
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
))], null),(function (){var temp__5816__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5816__auto__)){
var msg = temp__5816__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5816__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5816__auto__)){
var ed = temp__5816__auto__;
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
var G__36439 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__36440 = cljs.core.ex_cause(t);
via = G__36439;
t = G__36440;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5816__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5816__auto__)){
var root_msg = temp__5816__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5816__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5816__auto__)){
var data = temp__5816__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5816__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5816__auto__)){
var phase = temp__5816__auto__;
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
var map__36205 = datafied_throwable;
var map__36205__$1 = cljs.core.__destructure_map(map__36205);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36205__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36205__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36205__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__36206 = cljs.core.last(via);
var map__36206__$1 = cljs.core.__destructure_map(map__36206);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36206__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36206__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36206__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__36207 = data;
var map__36207__$1 = cljs.core.__destructure_map(map__36207);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36207__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36207__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36207__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__36208 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__36208__$1 = cljs.core.__destructure_map(map__36208);
var top_data = map__36208__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36208__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__36223 = phase;
var G__36223__$1 = (((G__36223 instanceof cljs.core.Keyword))?G__36223.fqn:null);
switch (G__36223__$1) {
case "read-source":
var map__36231 = data;
var map__36231__$1 = cljs.core.__destructure_map(map__36231);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36231__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36231__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__36240 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__36240__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36240,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36240);
var G__36240__$2 = (cljs.core.truth_((function (){var fexpr__36241 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36241.cljs$core$IFn$_invoke$arity$1 ? fexpr__36241.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36241.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36240__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36240__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36240__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36240__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__36246 = top_data;
var G__36246__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36246,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36246);
var G__36246__$2 = (cljs.core.truth_((function (){var fexpr__36247 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36247.cljs$core$IFn$_invoke$arity$1 ? fexpr__36247.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36247.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36246__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36246__$1);
var G__36246__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36246__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36246__$2);
var G__36246__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36246__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36246__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36246__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36246__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__36249 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36249,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36249,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36249,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36249,(3),null);
var G__36252 = top_data;
var G__36252__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36252,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__36252);
var G__36252__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36252__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__36252__$1);
var G__36252__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36252__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__36252__$2);
var G__36252__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36252__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36252__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36252__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36252__$4;
}

break;
case "execution":
var vec__36254 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36254,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36254,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36254,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36254,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__36184_SHARP_){
var or__5045__auto__ = (p1__36184_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__36257 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36257.cljs$core$IFn$_invoke$arity$1 ? fexpr__36257.cljs$core$IFn$_invoke$arity$1(p1__36184_SHARP_) : fexpr__36257.call(null,p1__36184_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__36259 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__36259__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36259,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__36259);
var G__36259__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36259__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36259__$1);
var G__36259__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36259__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__36259__$2);
var G__36259__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36259__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__36259__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36259__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36259__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36223__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__36275){
var map__36276 = p__36275;
var map__36276__$1 = cljs.core.__destructure_map(map__36276);
var triage_data = map__36276__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36276__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36276__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36276__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36276__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36276__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36276__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36276__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36276__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__36283 = phase;
var G__36283__$1 = (((G__36283 instanceof cljs.core.Keyword))?G__36283.fqn:null);
switch (G__36283__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__36287 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__36288 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36289 = loc;
var G__36290 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36295_36458 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36296_36459 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36297_36460 = true;
var _STAR_print_fn_STAR__temp_val__36298_36461 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36297_36460);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36298_36461);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36272_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36272_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36296_36459);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36295_36458);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36287,G__36288,G__36289,G__36290) : format.call(null,G__36287,G__36288,G__36289,G__36290));

break;
case "macroexpansion":
var G__36304 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__36305 = cause_type;
var G__36306 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36307 = loc;
var G__36308 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36304,G__36305,G__36306,G__36307,G__36308) : format.call(null,G__36304,G__36305,G__36306,G__36307,G__36308));

break;
case "compile-syntax-check":
var G__36309 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__36310 = cause_type;
var G__36311 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36312 = loc;
var G__36313 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36309,G__36310,G__36311,G__36312,G__36313) : format.call(null,G__36309,G__36310,G__36311,G__36312,G__36313));

break;
case "compilation":
var G__36317 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__36318 = cause_type;
var G__36319 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36320 = loc;
var G__36321 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36317,G__36318,G__36319,G__36320,G__36321) : format.call(null,G__36317,G__36318,G__36319,G__36320,G__36321));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__36328 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__36329 = symbol;
var G__36330 = loc;
var G__36331 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36332_36463 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36333_36464 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36334_36465 = true;
var _STAR_print_fn_STAR__temp_val__36335_36466 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36334_36465);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36335_36466);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36273_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36273_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36333_36464);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36332_36463);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36328,G__36329,G__36330,G__36331) : format.call(null,G__36328,G__36329,G__36330,G__36331));
} else {
var G__36342 = "Execution error%s at %s(%s).\n%s\n";
var G__36343 = cause_type;
var G__36344 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36345 = loc;
var G__36346 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36342,G__36343,G__36344,G__36345,G__36346) : format.call(null,G__36342,G__36343,G__36344,G__36345,G__36346));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36283__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
