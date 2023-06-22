goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37547){
var map__37552 = p__37547;
var map__37552__$1 = cljs.core.__destructure_map(map__37552);
var m = map__37552__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37552__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37552__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__37557_37814 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37558_37815 = null;
var count__37559_37816 = (0);
var i__37560_37817 = (0);
while(true){
if((i__37560_37817 < count__37559_37816)){
var f_37820 = chunk__37558_37815.cljs$core$IIndexed$_nth$arity$2(null,i__37560_37817);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_37820], 0));


var G__37823 = seq__37557_37814;
var G__37824 = chunk__37558_37815;
var G__37825 = count__37559_37816;
var G__37826 = (i__37560_37817 + (1));
seq__37557_37814 = G__37823;
chunk__37558_37815 = G__37824;
count__37559_37816 = G__37825;
i__37560_37817 = G__37826;
continue;
} else {
var temp__5804__auto___37827 = cljs.core.seq(seq__37557_37814);
if(temp__5804__auto___37827){
var seq__37557_37828__$1 = temp__5804__auto___37827;
if(cljs.core.chunked_seq_QMARK_(seq__37557_37828__$1)){
var c__5568__auto___37830 = cljs.core.chunk_first(seq__37557_37828__$1);
var G__37835 = cljs.core.chunk_rest(seq__37557_37828__$1);
var G__37836 = c__5568__auto___37830;
var G__37837 = cljs.core.count(c__5568__auto___37830);
var G__37838 = (0);
seq__37557_37814 = G__37835;
chunk__37558_37815 = G__37836;
count__37559_37816 = G__37837;
i__37560_37817 = G__37838;
continue;
} else {
var f_37841 = cljs.core.first(seq__37557_37828__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_37841], 0));


var G__37843 = cljs.core.next(seq__37557_37828__$1);
var G__37844 = null;
var G__37845 = (0);
var G__37846 = (0);
seq__37557_37814 = G__37843;
chunk__37558_37815 = G__37844;
count__37559_37816 = G__37845;
i__37560_37817 = G__37846;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37847 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_37847], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_37847)))?cljs.core.second(arglists_37847):arglists_37847)], 0));
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
var seq__37567_37872 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37568_37873 = null;
var count__37569_37874 = (0);
var i__37570_37875 = (0);
while(true){
if((i__37570_37875 < count__37569_37874)){
var vec__37587_37876 = chunk__37568_37873.cljs$core$IIndexed$_nth$arity$2(null,i__37570_37875);
var name_37877 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37587_37876,(0),null);
var map__37590_37878 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37587_37876,(1),null);
var map__37590_37879__$1 = cljs.core.__destructure_map(map__37590_37878);
var doc_37880 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37590_37879__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37881 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37590_37879__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_37877], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_37881], 0));

if(cljs.core.truth_(doc_37880)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_37880], 0));
} else {
}


var G__37883 = seq__37567_37872;
var G__37884 = chunk__37568_37873;
var G__37885 = count__37569_37874;
var G__37886 = (i__37570_37875 + (1));
seq__37567_37872 = G__37883;
chunk__37568_37873 = G__37884;
count__37569_37874 = G__37885;
i__37570_37875 = G__37886;
continue;
} else {
var temp__5804__auto___37887 = cljs.core.seq(seq__37567_37872);
if(temp__5804__auto___37887){
var seq__37567_37888__$1 = temp__5804__auto___37887;
if(cljs.core.chunked_seq_QMARK_(seq__37567_37888__$1)){
var c__5568__auto___37889 = cljs.core.chunk_first(seq__37567_37888__$1);
var G__37890 = cljs.core.chunk_rest(seq__37567_37888__$1);
var G__37891 = c__5568__auto___37889;
var G__37892 = cljs.core.count(c__5568__auto___37889);
var G__37893 = (0);
seq__37567_37872 = G__37890;
chunk__37568_37873 = G__37891;
count__37569_37874 = G__37892;
i__37570_37875 = G__37893;
continue;
} else {
var vec__37601_37894 = cljs.core.first(seq__37567_37888__$1);
var name_37895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37601_37894,(0),null);
var map__37604_37896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37601_37894,(1),null);
var map__37604_37897__$1 = cljs.core.__destructure_map(map__37604_37896);
var doc_37898 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37604_37897__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37899 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37604_37897__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_37895], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_37899], 0));

if(cljs.core.truth_(doc_37898)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_37898], 0));
} else {
}


var G__37900 = cljs.core.next(seq__37567_37888__$1);
var G__37901 = null;
var G__37902 = (0);
var G__37903 = (0);
seq__37567_37872 = G__37900;
chunk__37568_37873 = G__37901;
count__37569_37874 = G__37902;
i__37570_37875 = G__37903;
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

var seq__37615 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37616 = null;
var count__37617 = (0);
var i__37618 = (0);
while(true){
if((i__37618 < count__37617)){
var role = chunk__37616.cljs$core$IIndexed$_nth$arity$2(null,i__37618);
var temp__5804__auto___37908__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___37908__$1)){
var spec_37909 = temp__5804__auto___37908__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_37909)], 0));
} else {
}


var G__37910 = seq__37615;
var G__37911 = chunk__37616;
var G__37912 = count__37617;
var G__37913 = (i__37618 + (1));
seq__37615 = G__37910;
chunk__37616 = G__37911;
count__37617 = G__37912;
i__37618 = G__37913;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__37615);
if(temp__5804__auto____$1){
var seq__37615__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__37615__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37615__$1);
var G__37943 = cljs.core.chunk_rest(seq__37615__$1);
var G__37944 = c__5568__auto__;
var G__37945 = cljs.core.count(c__5568__auto__);
var G__37946 = (0);
seq__37615 = G__37943;
chunk__37616 = G__37944;
count__37617 = G__37945;
i__37618 = G__37946;
continue;
} else {
var role = cljs.core.first(seq__37615__$1);
var temp__5804__auto___37947__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___37947__$2)){
var spec_37948 = temp__5804__auto___37947__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_37948)], 0));
} else {
}


var G__37949 = cljs.core.next(seq__37615__$1);
var G__37950 = null;
var G__37951 = (0);
var G__37952 = (0);
seq__37615 = G__37949;
chunk__37616 = G__37950;
count__37617 = G__37951;
i__37618 = G__37952;
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
var G__37975 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__37976 = cljs.core.ex_cause(t);
via = G__37975;
t = G__37976;
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
var map__37683 = datafied_throwable;
var map__37683__$1 = cljs.core.__destructure_map(map__37683);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37683__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37683__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37683__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__37684 = cljs.core.last(via);
var map__37684__$1 = cljs.core.__destructure_map(map__37684);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37684__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37684__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37684__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__37685 = data;
var map__37685__$1 = cljs.core.__destructure_map(map__37685);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37685__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37685__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37685__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__37686 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__37686__$1 = cljs.core.__destructure_map(map__37686);
var top_data = map__37686__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37686__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__37687 = phase;
var G__37687__$1 = (((G__37687 instanceof cljs.core.Keyword))?G__37687.fqn:null);
switch (G__37687__$1) {
case "read-source":
var map__37688 = data;
var map__37688__$1 = cljs.core.__destructure_map(map__37688);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37688__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37688__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__37689 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__37689__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37689,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__37689);
var G__37689__$2 = (cljs.core.truth_((function (){var fexpr__37696 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__37696.cljs$core$IFn$_invoke$arity$1 ? fexpr__37696.cljs$core$IFn$_invoke$arity$1(source) : fexpr__37696.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__37689__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__37689__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37689__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__37689__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__37699 = top_data;
var G__37699__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37699,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__37699);
var G__37699__$2 = (cljs.core.truth_((function (){var fexpr__37700 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__37700.cljs$core$IFn$_invoke$arity$1 ? fexpr__37700.cljs$core$IFn$_invoke$arity$1(source) : fexpr__37700.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__37699__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__37699__$1);
var G__37699__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37699__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__37699__$2);
var G__37699__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37699__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__37699__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37699__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__37699__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__37702 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37702,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37702,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37702,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37702,(3),null);
var G__37706 = top_data;
var G__37706__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37706,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__37706);
var G__37706__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37706__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__37706__$1);
var G__37706__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37706__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__37706__$2);
var G__37706__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37706__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__37706__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37706__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__37706__$4;
}

break;
case "execution":
var vec__37715 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37715,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37715,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37715,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37715,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__37682_SHARP_){
var or__5045__auto__ = (p1__37682_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__37718 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__37718.cljs$core$IFn$_invoke$arity$1 ? fexpr__37718.cljs$core$IFn$_invoke$arity$1(p1__37682_SHARP_) : fexpr__37718.call(null,p1__37682_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__37720 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__37720__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37720,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__37720);
var G__37720__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37720__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__37720__$1);
var G__37720__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37720__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__37720__$2);
var G__37720__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37720__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__37720__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37720__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__37720__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37687__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__37728){
var map__37729 = p__37728;
var map__37729__$1 = cljs.core.__destructure_map(map__37729);
var triage_data = map__37729__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37729__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37729__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37729__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37729__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37729__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37729__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37729__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37729__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__37733 = phase;
var G__37733__$1 = (((G__37733 instanceof cljs.core.Keyword))?G__37733.fqn:null);
switch (G__37733__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__37735 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__37736 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37737 = loc;
var G__37738 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37739_38029 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37740_38030 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37741_38031 = true;
var _STAR_print_fn_STAR__temp_val__37742_38032 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37741_38031);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37742_38032);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37721_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__37721_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37740_38030);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37739_38029);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__37735,G__37736,G__37737,G__37738) : format.call(null,G__37735,G__37736,G__37737,G__37738));

break;
case "macroexpansion":
var G__37743 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__37744 = cause_type;
var G__37745 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37746 = loc;
var G__37747 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37743,G__37744,G__37745,G__37746,G__37747) : format.call(null,G__37743,G__37744,G__37745,G__37746,G__37747));

break;
case "compile-syntax-check":
var G__37748 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__37749 = cause_type;
var G__37750 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37751 = loc;
var G__37752 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37748,G__37749,G__37750,G__37751,G__37752) : format.call(null,G__37748,G__37749,G__37750,G__37751,G__37752));

break;
case "compilation":
var G__37759 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__37760 = cause_type;
var G__37761 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37762 = loc;
var G__37763 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37759,G__37760,G__37761,G__37762,G__37763) : format.call(null,G__37759,G__37760,G__37761,G__37762,G__37763));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__37764 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__37765 = symbol;
var G__37766 = loc;
var G__37767 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37768_38049 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37769_38050 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37770_38051 = true;
var _STAR_print_fn_STAR__temp_val__37771_38052 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37770_38051);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37771_38052);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37722_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__37722_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37769_38050);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37768_38049);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__37764,G__37765,G__37766,G__37767) : format.call(null,G__37764,G__37765,G__37766,G__37767));
} else {
var G__37791 = "Execution error%s at %s(%s).\n%s\n";
var G__37792 = cause_type;
var G__37793 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37794 = loc;
var G__37795 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37791,G__37792,G__37793,G__37794,G__37795) : format.call(null,G__37791,G__37792,G__37793,G__37794,G__37795));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37733__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
