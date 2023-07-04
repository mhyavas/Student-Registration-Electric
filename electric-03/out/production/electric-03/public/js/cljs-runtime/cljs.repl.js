goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36086){
var map__36087 = p__36086;
var map__36087__$1 = cljs.core.__destructure_map(map__36087);
var m = map__36087__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36087__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36087__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__36088_36365 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36089_36366 = null;
var count__36090_36367 = (0);
var i__36091_36368 = (0);
while(true){
if((i__36091_36368 < count__36090_36367)){
var f_36370 = chunk__36089_36366.cljs$core$IIndexed$_nth$arity$2(null,i__36091_36368);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36370], 0));


var G__36371 = seq__36088_36365;
var G__36372 = chunk__36089_36366;
var G__36373 = count__36090_36367;
var G__36374 = (i__36091_36368 + (1));
seq__36088_36365 = G__36371;
chunk__36089_36366 = G__36372;
count__36090_36367 = G__36373;
i__36091_36368 = G__36374;
continue;
} else {
var temp__5804__auto___36376 = cljs.core.seq(seq__36088_36365);
if(temp__5804__auto___36376){
var seq__36088_36378__$1 = temp__5804__auto___36376;
if(cljs.core.chunked_seq_QMARK_(seq__36088_36378__$1)){
var c__5568__auto___36379 = cljs.core.chunk_first(seq__36088_36378__$1);
var G__36380 = cljs.core.chunk_rest(seq__36088_36378__$1);
var G__36381 = c__5568__auto___36379;
var G__36382 = cljs.core.count(c__5568__auto___36379);
var G__36383 = (0);
seq__36088_36365 = G__36380;
chunk__36089_36366 = G__36381;
count__36090_36367 = G__36382;
i__36091_36368 = G__36383;
continue;
} else {
var f_36385 = cljs.core.first(seq__36088_36378__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36385], 0));


var G__36386 = cljs.core.next(seq__36088_36378__$1);
var G__36387 = null;
var G__36388 = (0);
var G__36389 = (0);
seq__36088_36365 = G__36386;
chunk__36089_36366 = G__36387;
count__36090_36367 = G__36388;
i__36091_36368 = G__36389;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36390 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_36390], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_36390)))?cljs.core.second(arglists_36390):arglists_36390)], 0));
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
var seq__36097_36392 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36098_36393 = null;
var count__36099_36394 = (0);
var i__36100_36395 = (0);
while(true){
if((i__36100_36395 < count__36099_36394)){
var vec__36111_36396 = chunk__36098_36393.cljs$core$IIndexed$_nth$arity$2(null,i__36100_36395);
var name_36397 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36111_36396,(0),null);
var map__36114_36398 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36111_36396,(1),null);
var map__36114_36399__$1 = cljs.core.__destructure_map(map__36114_36398);
var doc_36400 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36114_36399__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36401 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36114_36399__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36397], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36401], 0));

if(cljs.core.truth_(doc_36400)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36400], 0));
} else {
}


var G__36402 = seq__36097_36392;
var G__36403 = chunk__36098_36393;
var G__36404 = count__36099_36394;
var G__36405 = (i__36100_36395 + (1));
seq__36097_36392 = G__36402;
chunk__36098_36393 = G__36403;
count__36099_36394 = G__36404;
i__36100_36395 = G__36405;
continue;
} else {
var temp__5804__auto___36406 = cljs.core.seq(seq__36097_36392);
if(temp__5804__auto___36406){
var seq__36097_36407__$1 = temp__5804__auto___36406;
if(cljs.core.chunked_seq_QMARK_(seq__36097_36407__$1)){
var c__5568__auto___36408 = cljs.core.chunk_first(seq__36097_36407__$1);
var G__36409 = cljs.core.chunk_rest(seq__36097_36407__$1);
var G__36410 = c__5568__auto___36408;
var G__36411 = cljs.core.count(c__5568__auto___36408);
var G__36412 = (0);
seq__36097_36392 = G__36409;
chunk__36098_36393 = G__36410;
count__36099_36394 = G__36411;
i__36100_36395 = G__36412;
continue;
} else {
var vec__36115_36413 = cljs.core.first(seq__36097_36407__$1);
var name_36414 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36115_36413,(0),null);
var map__36118_36415 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36115_36413,(1),null);
var map__36118_36416__$1 = cljs.core.__destructure_map(map__36118_36415);
var doc_36417 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36118_36416__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36418 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36118_36416__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36414], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36418], 0));

if(cljs.core.truth_(doc_36417)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36417], 0));
} else {
}


var G__36419 = cljs.core.next(seq__36097_36407__$1);
var G__36420 = null;
var G__36421 = (0);
var G__36422 = (0);
seq__36097_36392 = G__36419;
chunk__36098_36393 = G__36420;
count__36099_36394 = G__36421;
i__36100_36395 = G__36422;
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

var seq__36132 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36133 = null;
var count__36134 = (0);
var i__36135 = (0);
while(true){
if((i__36135 < count__36134)){
var role = chunk__36133.cljs$core$IIndexed$_nth$arity$2(null,i__36135);
var temp__5804__auto___36423__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___36423__$1)){
var spec_36424 = temp__5804__auto___36423__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36424)], 0));
} else {
}


var G__36425 = seq__36132;
var G__36426 = chunk__36133;
var G__36427 = count__36134;
var G__36428 = (i__36135 + (1));
seq__36132 = G__36425;
chunk__36133 = G__36426;
count__36134 = G__36427;
i__36135 = G__36428;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__36132);
if(temp__5804__auto____$1){
var seq__36132__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__36132__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36132__$1);
var G__36429 = cljs.core.chunk_rest(seq__36132__$1);
var G__36430 = c__5568__auto__;
var G__36431 = cljs.core.count(c__5568__auto__);
var G__36432 = (0);
seq__36132 = G__36429;
chunk__36133 = G__36430;
count__36134 = G__36431;
i__36135 = G__36432;
continue;
} else {
var role = cljs.core.first(seq__36132__$1);
var temp__5804__auto___36433__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___36433__$2)){
var spec_36436 = temp__5804__auto___36433__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36436)], 0));
} else {
}


var G__36439 = cljs.core.next(seq__36132__$1);
var G__36440 = null;
var G__36441 = (0);
var G__36442 = (0);
seq__36132 = G__36439;
chunk__36133 = G__36440;
count__36134 = G__36441;
i__36135 = G__36442;
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
var G__36444 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__36445 = cljs.core.ex_cause(t);
via = G__36444;
t = G__36445;
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
var map__36234 = datafied_throwable;
var map__36234__$1 = cljs.core.__destructure_map(map__36234);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36234__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36234__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36234__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__36235 = cljs.core.last(via);
var map__36235__$1 = cljs.core.__destructure_map(map__36235);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36235__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36235__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36235__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__36236 = data;
var map__36236__$1 = cljs.core.__destructure_map(map__36236);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36236__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36236__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36236__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__36237 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__36237__$1 = cljs.core.__destructure_map(map__36237);
var top_data = map__36237__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36237__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__36258 = phase;
var G__36258__$1 = (((G__36258 instanceof cljs.core.Keyword))?G__36258.fqn:null);
switch (G__36258__$1) {
case "read-source":
var map__36267 = data;
var map__36267__$1 = cljs.core.__destructure_map(map__36267);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36267__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36267__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__36268 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__36268__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36268,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36268);
var G__36268__$2 = (cljs.core.truth_((function (){var fexpr__36273 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36273.cljs$core$IFn$_invoke$arity$1 ? fexpr__36273.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36273.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36268__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36268__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36268__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36268__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__36275 = top_data;
var G__36275__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36275,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36275);
var G__36275__$2 = (cljs.core.truth_((function (){var fexpr__36276 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36276.cljs$core$IFn$_invoke$arity$1 ? fexpr__36276.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36276.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36275__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36275__$1);
var G__36275__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36275__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36275__$2);
var G__36275__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36275__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36275__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36275__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36275__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__36284 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36284,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36284,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36284,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36284,(3),null);
var G__36287 = top_data;
var G__36287__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36287,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__36287);
var G__36287__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36287__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__36287__$1);
var G__36287__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36287__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__36287__$2);
var G__36287__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36287__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36287__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36287__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36287__$4;
}

break;
case "execution":
var vec__36289 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36289,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36289,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36289,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36289,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__36217_SHARP_){
var or__5045__auto__ = (p1__36217_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__36293 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36293.cljs$core$IFn$_invoke$arity$1 ? fexpr__36293.cljs$core$IFn$_invoke$arity$1(p1__36217_SHARP_) : fexpr__36293.call(null,p1__36217_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__36294 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__36294__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36294,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__36294);
var G__36294__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36294__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36294__$1);
var G__36294__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36294__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__36294__$2);
var G__36294__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36294__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__36294__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36294__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36294__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36258__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__36305){
var map__36306 = p__36305;
var map__36306__$1 = cljs.core.__destructure_map(map__36306);
var triage_data = map__36306__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36306__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36306__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36306__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36306__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36306__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36306__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36306__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36306__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__36315 = phase;
var G__36315__$1 = (((G__36315 instanceof cljs.core.Keyword))?G__36315.fqn:null);
switch (G__36315__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__36316 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__36317 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36318 = loc;
var G__36319 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36320_36461 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36321_36462 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36322_36463 = true;
var _STAR_print_fn_STAR__temp_val__36323_36464 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36322_36463);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36323_36464);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36303_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36303_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36321_36462);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36320_36461);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36316,G__36317,G__36318,G__36319) : format.call(null,G__36316,G__36317,G__36318,G__36319));

break;
case "macroexpansion":
var G__36324 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__36325 = cause_type;
var G__36326 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36327 = loc;
var G__36328 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36324,G__36325,G__36326,G__36327,G__36328) : format.call(null,G__36324,G__36325,G__36326,G__36327,G__36328));

break;
case "compile-syntax-check":
var G__36331 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__36332 = cause_type;
var G__36333 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36334 = loc;
var G__36335 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36331,G__36332,G__36333,G__36334,G__36335) : format.call(null,G__36331,G__36332,G__36333,G__36334,G__36335));

break;
case "compilation":
var G__36336 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__36337 = cause_type;
var G__36338 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36339 = loc;
var G__36340 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36336,G__36337,G__36338,G__36339,G__36340) : format.call(null,G__36336,G__36337,G__36338,G__36339,G__36340));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__36341 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__36342 = symbol;
var G__36343 = loc;
var G__36344 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36345_36480 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36346_36481 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36347_36482 = true;
var _STAR_print_fn_STAR__temp_val__36348_36483 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36347_36482);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36348_36483);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36304_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36304_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36346_36481);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36345_36480);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36341,G__36342,G__36343,G__36344) : format.call(null,G__36341,G__36342,G__36343,G__36344));
} else {
var G__36352 = "Execution error%s at %s(%s).\n%s\n";
var G__36353 = cause_type;
var G__36354 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36355 = loc;
var G__36356 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36352,G__36353,G__36354,G__36355,G__36356) : format.call(null,G__36352,G__36353,G__36354,G__36355,G__36356));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36315__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
