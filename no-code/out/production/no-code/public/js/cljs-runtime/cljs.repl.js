goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__50159){
var map__50163 = p__50159;
var map__50163__$1 = cljs.core.__destructure_map(map__50163);
var m = map__50163__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50163__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50163__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__50173_50484 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50174_50485 = null;
var count__50175_50486 = (0);
var i__50176_50487 = (0);
while(true){
if((i__50176_50487 < count__50175_50486)){
var f_50488 = chunk__50174_50485.cljs$core$IIndexed$_nth$arity$2(null,i__50176_50487);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_50488], 0));


var G__50489 = seq__50173_50484;
var G__50490 = chunk__50174_50485;
var G__50491 = count__50175_50486;
var G__50492 = (i__50176_50487 + (1));
seq__50173_50484 = G__50489;
chunk__50174_50485 = G__50490;
count__50175_50486 = G__50491;
i__50176_50487 = G__50492;
continue;
} else {
var temp__5804__auto___50494 = cljs.core.seq(seq__50173_50484);
if(temp__5804__auto___50494){
var seq__50173_50495__$1 = temp__5804__auto___50494;
if(cljs.core.chunked_seq_QMARK_(seq__50173_50495__$1)){
var c__5568__auto___50496 = cljs.core.chunk_first(seq__50173_50495__$1);
var G__50497 = cljs.core.chunk_rest(seq__50173_50495__$1);
var G__50498 = c__5568__auto___50496;
var G__50499 = cljs.core.count(c__5568__auto___50496);
var G__50500 = (0);
seq__50173_50484 = G__50497;
chunk__50174_50485 = G__50498;
count__50175_50486 = G__50499;
i__50176_50487 = G__50500;
continue;
} else {
var f_50502 = cljs.core.first(seq__50173_50495__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_50502], 0));


var G__50503 = cljs.core.next(seq__50173_50495__$1);
var G__50504 = null;
var G__50505 = (0);
var G__50506 = (0);
seq__50173_50484 = G__50503;
chunk__50174_50485 = G__50504;
count__50175_50486 = G__50505;
i__50176_50487 = G__50506;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_50507 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_50507], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_50507)))?cljs.core.second(arglists_50507):arglists_50507)], 0));
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
var seq__50190_50509 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50191_50510 = null;
var count__50192_50511 = (0);
var i__50193_50512 = (0);
while(true){
if((i__50193_50512 < count__50192_50511)){
var vec__50208_50513 = chunk__50191_50510.cljs$core$IIndexed$_nth$arity$2(null,i__50193_50512);
var name_50514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50208_50513,(0),null);
var map__50211_50515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50208_50513,(1),null);
var map__50211_50516__$1 = cljs.core.__destructure_map(map__50211_50515);
var doc_50517 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50211_50516__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_50518 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50211_50516__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_50514], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_50518], 0));

if(cljs.core.truth_(doc_50517)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_50517], 0));
} else {
}


var G__50519 = seq__50190_50509;
var G__50520 = chunk__50191_50510;
var G__50521 = count__50192_50511;
var G__50522 = (i__50193_50512 + (1));
seq__50190_50509 = G__50519;
chunk__50191_50510 = G__50520;
count__50192_50511 = G__50521;
i__50193_50512 = G__50522;
continue;
} else {
var temp__5804__auto___50523 = cljs.core.seq(seq__50190_50509);
if(temp__5804__auto___50523){
var seq__50190_50524__$1 = temp__5804__auto___50523;
if(cljs.core.chunked_seq_QMARK_(seq__50190_50524__$1)){
var c__5568__auto___50525 = cljs.core.chunk_first(seq__50190_50524__$1);
var G__50526 = cljs.core.chunk_rest(seq__50190_50524__$1);
var G__50527 = c__5568__auto___50525;
var G__50528 = cljs.core.count(c__5568__auto___50525);
var G__50529 = (0);
seq__50190_50509 = G__50526;
chunk__50191_50510 = G__50527;
count__50192_50511 = G__50528;
i__50193_50512 = G__50529;
continue;
} else {
var vec__50221_50530 = cljs.core.first(seq__50190_50524__$1);
var name_50531 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50221_50530,(0),null);
var map__50224_50532 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50221_50530,(1),null);
var map__50224_50533__$1 = cljs.core.__destructure_map(map__50224_50532);
var doc_50534 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50224_50533__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_50535 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50224_50533__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_50531], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_50535], 0));

if(cljs.core.truth_(doc_50534)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_50534], 0));
} else {
}


var G__50540 = cljs.core.next(seq__50190_50524__$1);
var G__50541 = null;
var G__50542 = (0);
var G__50543 = (0);
seq__50190_50509 = G__50540;
chunk__50191_50510 = G__50541;
count__50192_50511 = G__50542;
i__50193_50512 = G__50543;
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

var seq__50232 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__50233 = null;
var count__50234 = (0);
var i__50235 = (0);
while(true){
if((i__50235 < count__50234)){
var role = chunk__50233.cljs$core$IIndexed$_nth$arity$2(null,i__50235);
var temp__5804__auto___50545__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___50545__$1)){
var spec_50546 = temp__5804__auto___50545__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_50546)], 0));
} else {
}


var G__50547 = seq__50232;
var G__50548 = chunk__50233;
var G__50549 = count__50234;
var G__50550 = (i__50235 + (1));
seq__50232 = G__50547;
chunk__50233 = G__50548;
count__50234 = G__50549;
i__50235 = G__50550;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__50232);
if(temp__5804__auto____$1){
var seq__50232__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__50232__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__50232__$1);
var G__50551 = cljs.core.chunk_rest(seq__50232__$1);
var G__50552 = c__5568__auto__;
var G__50553 = cljs.core.count(c__5568__auto__);
var G__50554 = (0);
seq__50232 = G__50551;
chunk__50233 = G__50552;
count__50234 = G__50553;
i__50235 = G__50554;
continue;
} else {
var role = cljs.core.first(seq__50232__$1);
var temp__5804__auto___50555__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___50555__$2)){
var spec_50556 = temp__5804__auto___50555__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_50556)], 0));
} else {
}


var G__50558 = cljs.core.next(seq__50232__$1);
var G__50559 = null;
var G__50560 = (0);
var G__50561 = (0);
seq__50232 = G__50558;
chunk__50233 = G__50559;
count__50234 = G__50560;
i__50235 = G__50561;
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
var G__50563 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__50564 = cljs.core.ex_cause(t);
via = G__50563;
t = G__50564;
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
var map__50315 = datafied_throwable;
var map__50315__$1 = cljs.core.__destructure_map(map__50315);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50315__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50315__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50315__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__50316 = cljs.core.last(via);
var map__50316__$1 = cljs.core.__destructure_map(map__50316);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50316__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50316__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50316__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__50317 = data;
var map__50317__$1 = cljs.core.__destructure_map(map__50317);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50317__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50317__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50317__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__50318 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__50318__$1 = cljs.core.__destructure_map(map__50318);
var top_data = map__50318__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50318__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__50335 = phase;
var G__50335__$1 = (((G__50335 instanceof cljs.core.Keyword))?G__50335.fqn:null);
switch (G__50335__$1) {
case "read-source":
var map__50336 = data;
var map__50336__$1 = cljs.core.__destructure_map(map__50336);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50336__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50336__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__50337 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__50337__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50337,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__50337);
var G__50337__$2 = (cljs.core.truth_((function (){var fexpr__50345 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50345.cljs$core$IFn$_invoke$arity$1 ? fexpr__50345.cljs$core$IFn$_invoke$arity$1(source) : fexpr__50345.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50337__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__50337__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50337__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__50337__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__50346 = top_data;
var G__50346__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50346,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__50346);
var G__50346__$2 = (cljs.core.truth_((function (){var fexpr__50361 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50361.cljs$core$IFn$_invoke$arity$1 ? fexpr__50361.cljs$core$IFn$_invoke$arity$1(source) : fexpr__50361.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50346__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__50346__$1);
var G__50346__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50346__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__50346__$2);
var G__50346__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50346__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__50346__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50346__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__50346__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__50370 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50370,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50370,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50370,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50370,(3),null);
var G__50373 = top_data;
var G__50373__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50373,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__50373);
var G__50373__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50373__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__50373__$1);
var G__50373__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50373__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__50373__$2);
var G__50373__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50373__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__50373__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50373__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__50373__$4;
}

break;
case "execution":
var vec__50379 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50379,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50379,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50379,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50379,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__50306_SHARP_){
var or__5045__auto__ = (p1__50306_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__50382 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50382.cljs$core$IFn$_invoke$arity$1 ? fexpr__50382.cljs$core$IFn$_invoke$arity$1(p1__50306_SHARP_) : fexpr__50382.call(null,p1__50306_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__50384 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__50384__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50384,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__50384);
var G__50384__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50384__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__50384__$1);
var G__50384__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50384__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__50384__$2);
var G__50384__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50384__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__50384__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50384__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__50384__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50335__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__50398){
var map__50399 = p__50398;
var map__50399__$1 = cljs.core.__destructure_map(map__50399);
var triage_data = map__50399__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50399__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50399__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50399__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50399__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50399__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50399__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50399__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50399__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__50406 = phase;
var G__50406__$1 = (((G__50406 instanceof cljs.core.Keyword))?G__50406.fqn:null);
switch (G__50406__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__50414 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__50415 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50416 = loc;
var G__50417 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50419_50612 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50420_50613 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50421_50614 = true;
var _STAR_print_fn_STAR__temp_val__50422_50615 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50421_50614);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50422_50615);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50394_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__50394_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50420_50613);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50419_50612);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__50414,G__50415,G__50416,G__50417) : format.call(null,G__50414,G__50415,G__50416,G__50417));

break;
case "macroexpansion":
var G__50429 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__50430 = cause_type;
var G__50431 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50432 = loc;
var G__50433 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50429,G__50430,G__50431,G__50432,G__50433) : format.call(null,G__50429,G__50430,G__50431,G__50432,G__50433));

break;
case "compile-syntax-check":
var G__50434 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__50435 = cause_type;
var G__50437 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50438 = loc;
var G__50439 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50434,G__50435,G__50437,G__50438,G__50439) : format.call(null,G__50434,G__50435,G__50437,G__50438,G__50439));

break;
case "compilation":
var G__50442 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__50443 = cause_type;
var G__50444 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50445 = loc;
var G__50446 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50442,G__50443,G__50444,G__50445,G__50446) : format.call(null,G__50442,G__50443,G__50444,G__50445,G__50446));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__50450 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__50451 = symbol;
var G__50452 = loc;
var G__50453 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50454_50623 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50455_50624 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50456_50625 = true;
var _STAR_print_fn_STAR__temp_val__50457_50626 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50456_50625);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50457_50626);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50395_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__50395_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50455_50624);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50454_50623);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__50450,G__50451,G__50452,G__50453) : format.call(null,G__50450,G__50451,G__50452,G__50453));
} else {
var G__50466 = "Execution error%s at %s(%s).\n%s\n";
var G__50467 = cause_type;
var G__50468 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50469 = loc;
var G__50470 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50466,G__50467,G__50468,G__50469,G__50470) : format.call(null,G__50466,G__50467,G__50468,G__50469,G__50470));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50406__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
