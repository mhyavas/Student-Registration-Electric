goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37962){
var map__37963 = p__37962;
var map__37963__$1 = cljs.core.__destructure_map(map__37963);
var m = map__37963__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37963__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37963__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__37968_38225 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37969_38226 = null;
var count__37970_38227 = (0);
var i__37971_38228 = (0);
while(true){
if((i__37971_38228 < count__37970_38227)){
var f_38229 = chunk__37969_38226.cljs$core$IIndexed$_nth$arity$2(null,i__37971_38228);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_38229], 0));


var G__38230 = seq__37968_38225;
var G__38231 = chunk__37969_38226;
var G__38232 = count__37970_38227;
var G__38233 = (i__37971_38228 + (1));
seq__37968_38225 = G__38230;
chunk__37969_38226 = G__38231;
count__37970_38227 = G__38232;
i__37971_38228 = G__38233;
continue;
} else {
var temp__5804__auto___38234 = cljs.core.seq(seq__37968_38225);
if(temp__5804__auto___38234){
var seq__37968_38235__$1 = temp__5804__auto___38234;
if(cljs.core.chunked_seq_QMARK_(seq__37968_38235__$1)){
var c__5568__auto___38236 = cljs.core.chunk_first(seq__37968_38235__$1);
var G__38237 = cljs.core.chunk_rest(seq__37968_38235__$1);
var G__38238 = c__5568__auto___38236;
var G__38239 = cljs.core.count(c__5568__auto___38236);
var G__38240 = (0);
seq__37968_38225 = G__38237;
chunk__37969_38226 = G__38238;
count__37970_38227 = G__38239;
i__37971_38228 = G__38240;
continue;
} else {
var f_38242 = cljs.core.first(seq__37968_38235__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_38242], 0));


var G__38243 = cljs.core.next(seq__37968_38235__$1);
var G__38244 = null;
var G__38245 = (0);
var G__38246 = (0);
seq__37968_38225 = G__38243;
chunk__37969_38226 = G__38244;
count__37970_38227 = G__38245;
i__37971_38228 = G__38246;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38247 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_38247], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_38247)))?cljs.core.second(arglists_38247):arglists_38247)], 0));
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
var seq__37977_38248 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37980_38249 = null;
var count__37981_38250 = (0);
var i__37982_38251 = (0);
while(true){
if((i__37982_38251 < count__37981_38250)){
var vec__37997_38252 = chunk__37980_38249.cljs$core$IIndexed$_nth$arity$2(null,i__37982_38251);
var name_38253 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37997_38252,(0),null);
var map__38000_38254 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37997_38252,(1),null);
var map__38000_38255__$1 = cljs.core.__destructure_map(map__38000_38254);
var doc_38256 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38000_38255__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38257 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38000_38255__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_38253], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_38257], 0));

if(cljs.core.truth_(doc_38256)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_38256], 0));
} else {
}


var G__38259 = seq__37977_38248;
var G__38260 = chunk__37980_38249;
var G__38261 = count__37981_38250;
var G__38262 = (i__37982_38251 + (1));
seq__37977_38248 = G__38259;
chunk__37980_38249 = G__38260;
count__37981_38250 = G__38261;
i__37982_38251 = G__38262;
continue;
} else {
var temp__5804__auto___38263 = cljs.core.seq(seq__37977_38248);
if(temp__5804__auto___38263){
var seq__37977_38264__$1 = temp__5804__auto___38263;
if(cljs.core.chunked_seq_QMARK_(seq__37977_38264__$1)){
var c__5568__auto___38265 = cljs.core.chunk_first(seq__37977_38264__$1);
var G__38266 = cljs.core.chunk_rest(seq__37977_38264__$1);
var G__38267 = c__5568__auto___38265;
var G__38268 = cljs.core.count(c__5568__auto___38265);
var G__38269 = (0);
seq__37977_38248 = G__38266;
chunk__37980_38249 = G__38267;
count__37981_38250 = G__38268;
i__37982_38251 = G__38269;
continue;
} else {
var vec__38006_38270 = cljs.core.first(seq__37977_38264__$1);
var name_38271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38006_38270,(0),null);
var map__38009_38272 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38006_38270,(1),null);
var map__38009_38273__$1 = cljs.core.__destructure_map(map__38009_38272);
var doc_38274 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38009_38273__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38275 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38009_38273__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_38271], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_38275], 0));

if(cljs.core.truth_(doc_38274)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_38274], 0));
} else {
}


var G__38276 = cljs.core.next(seq__37977_38264__$1);
var G__38277 = null;
var G__38278 = (0);
var G__38279 = (0);
seq__37977_38248 = G__38276;
chunk__37980_38249 = G__38277;
count__37981_38250 = G__38278;
i__37982_38251 = G__38279;
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

var seq__38010 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38011 = null;
var count__38012 = (0);
var i__38013 = (0);
while(true){
if((i__38013 < count__38012)){
var role = chunk__38011.cljs$core$IIndexed$_nth$arity$2(null,i__38013);
var temp__5804__auto___38285__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___38285__$1)){
var spec_38286 = temp__5804__auto___38285__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_38286)], 0));
} else {
}


var G__38287 = seq__38010;
var G__38288 = chunk__38011;
var G__38289 = count__38012;
var G__38290 = (i__38013 + (1));
seq__38010 = G__38287;
chunk__38011 = G__38288;
count__38012 = G__38289;
i__38013 = G__38290;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__38010);
if(temp__5804__auto____$1){
var seq__38010__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__38010__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38010__$1);
var G__38291 = cljs.core.chunk_rest(seq__38010__$1);
var G__38292 = c__5568__auto__;
var G__38293 = cljs.core.count(c__5568__auto__);
var G__38294 = (0);
seq__38010 = G__38291;
chunk__38011 = G__38292;
count__38012 = G__38293;
i__38013 = G__38294;
continue;
} else {
var role = cljs.core.first(seq__38010__$1);
var temp__5804__auto___38295__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___38295__$2)){
var spec_38296 = temp__5804__auto___38295__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_38296)], 0));
} else {
}


var G__38297 = cljs.core.next(seq__38010__$1);
var G__38298 = null;
var G__38299 = (0);
var G__38300 = (0);
seq__38010 = G__38297;
chunk__38011 = G__38298;
count__38012 = G__38299;
i__38013 = G__38300;
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
var G__38301 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__38302 = cljs.core.ex_cause(t);
via = G__38301;
t = G__38302;
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
var map__38050 = datafied_throwable;
var map__38050__$1 = cljs.core.__destructure_map(map__38050);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38050__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38050__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38050__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__38051 = cljs.core.last(via);
var map__38051__$1 = cljs.core.__destructure_map(map__38051);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38051__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38051__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38051__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__38052 = data;
var map__38052__$1 = cljs.core.__destructure_map(map__38052);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38052__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38052__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38052__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__38053 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__38053__$1 = cljs.core.__destructure_map(map__38053);
var top_data = map__38053__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38053__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__38065 = phase;
var G__38065__$1 = (((G__38065 instanceof cljs.core.Keyword))?G__38065.fqn:null);
switch (G__38065__$1) {
case "read-source":
var map__38069 = data;
var map__38069__$1 = cljs.core.__destructure_map(map__38069);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38069__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38069__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__38078 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__38078__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38078,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__38078);
var G__38078__$2 = (cljs.core.truth_((function (){var fexpr__38095 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38095.cljs$core$IFn$_invoke$arity$1 ? fexpr__38095.cljs$core$IFn$_invoke$arity$1(source) : fexpr__38095.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__38078__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__38078__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38078__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__38078__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__38096 = top_data;
var G__38096__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38096,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__38096);
var G__38096__$2 = (cljs.core.truth_((function (){var fexpr__38097 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38097.cljs$core$IFn$_invoke$arity$1 ? fexpr__38097.cljs$core$IFn$_invoke$arity$1(source) : fexpr__38097.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__38096__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__38096__$1);
var G__38096__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38096__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__38096__$2);
var G__38096__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38096__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__38096__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38096__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__38096__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__38105 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38105,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38105,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38105,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38105,(3),null);
var G__38112 = top_data;
var G__38112__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38112,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__38112);
var G__38112__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38112__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__38112__$1);
var G__38112__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38112__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__38112__$2);
var G__38112__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38112__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__38112__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38112__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__38112__$4;
}

break;
case "execution":
var vec__38145 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38145,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38145,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38145,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38145,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__38042_SHARP_){
var or__5045__auto__ = (p1__38042_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__38148 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38148.cljs$core$IFn$_invoke$arity$1 ? fexpr__38148.cljs$core$IFn$_invoke$arity$1(p1__38042_SHARP_) : fexpr__38148.call(null,p1__38042_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__38149 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__38149__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38149,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__38149);
var G__38149__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38149__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__38149__$1);
var G__38149__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38149__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__38149__$2);
var G__38149__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38149__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__38149__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38149__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__38149__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38065__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__38155){
var map__38156 = p__38155;
var map__38156__$1 = cljs.core.__destructure_map(map__38156);
var triage_data = map__38156__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38156__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38156__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38156__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38156__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38156__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38156__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38156__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38156__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__38159 = phase;
var G__38159__$1 = (((G__38159 instanceof cljs.core.Keyword))?G__38159.fqn:null);
switch (G__38159__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__38160 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__38161 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38162 = loc;
var G__38163 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38164_38314 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38165_38315 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38166_38316 = true;
var _STAR_print_fn_STAR__temp_val__38167_38317 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38166_38316);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38167_38317);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38152_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__38152_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38165_38315);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38164_38314);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__38160,G__38161,G__38162,G__38163) : format.call(null,G__38160,G__38161,G__38162,G__38163));

break;
case "macroexpansion":
var G__38169 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__38170 = cause_type;
var G__38171 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38172 = loc;
var G__38173 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38169,G__38170,G__38171,G__38172,G__38173) : format.call(null,G__38169,G__38170,G__38171,G__38172,G__38173));

break;
case "compile-syntax-check":
var G__38174 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__38175 = cause_type;
var G__38176 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38177 = loc;
var G__38178 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38174,G__38175,G__38176,G__38177,G__38178) : format.call(null,G__38174,G__38175,G__38176,G__38177,G__38178));

break;
case "compilation":
var G__38179 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__38180 = cause_type;
var G__38181 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38182 = loc;
var G__38183 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38179,G__38180,G__38181,G__38182,G__38183) : format.call(null,G__38179,G__38180,G__38181,G__38182,G__38183));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__38184 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__38185 = symbol;
var G__38186 = loc;
var G__38187 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38191_38322 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38192_38323 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38193_38324 = true;
var _STAR_print_fn_STAR__temp_val__38194_38325 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38193_38324);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38194_38325);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38153_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__38153_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38192_38323);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38191_38322);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__38184,G__38185,G__38186,G__38187) : format.call(null,G__38184,G__38185,G__38186,G__38187));
} else {
var G__38206 = "Execution error%s at %s(%s).\n%s\n";
var G__38207 = cause_type;
var G__38208 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38209 = loc;
var G__38210 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38206,G__38207,G__38208,G__38209,G__38210) : format.call(null,G__38206,G__38207,G__38208,G__38209,G__38210));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38159__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
