goog.provide('app.t01');
goog.scope(function(){
  app.t01.goog$module$goog$math$Long = goog.module.get('goog.math.Long');
});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$reactive_button$dist$index_cjs=shadow.js.require("module$node_modules$reactive_button$dist$index_cjs", {});
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
/**
 * See https://reactjs.org/docs/react-dom-client.html#createroot
 */
app.t01.create_root = (function app$t01$create_root(var_args){
var G__32911 = arguments.length;
switch (G__32911) {
case 1:
return app.t01.create_root.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.t01.create_root.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.t01.create_root.cljs$core$IFn$_invoke$arity$1 = (function (node){
return app.t01.create_root.cljs$core$IFn$_invoke$arity$2(node,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0()));
}));

(app.t01.create_root.cljs$core$IFn$_invoke$arity$2 = (function (node,id_prefix){
return module$node_modules$react_dom$client.createRoot(node,({"identifierPrefix": id_prefix}));
}));

(app.t01.create_root.cljs$lang$maxFixedArity = 2);

app.t01.render = (function app$t01$render(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32917 = arguments.length;
var i__5770__auto___32918 = (0);
while(true){
if((i__5770__auto___32918 < len__5769__auto___32917)){
args__5775__auto__.push((arguments[i__5770__auto___32918]));

var G__32919 = (i__5770__auto___32918 + (1));
i__5770__auto___32918 = G__32919;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return app.t01.render.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(app.t01.render.cljs$core$IFn$_invoke$arity$variadic = (function (root,args){
return root.render(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198)], null),args)));
}));

(app.t01.render.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(app.t01.render.cljs$lang$applyTo = (function (seq32912){
var G__32913 = cljs.core.first(seq32912);
var seq32912__$1 = cljs.core.next(seq32912);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32913,seq32912__$1);
}));

app.t01.read_edn_str = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clojure.edn.read_string,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"readers","readers",-2118263030),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("goog.math","Long","goog.math/Long",124568471,null),app.t01.goog$module$goog$math$Long.fromString], null)], null));

//# sourceMappingURL=app.t01.js.map
