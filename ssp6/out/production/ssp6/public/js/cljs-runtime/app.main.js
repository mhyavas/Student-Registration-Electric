goog.provide('app.main');
goog.scope(function(){
  app.main.goog$module$goog$math$Long = goog.module.get('goog.math.Long');
});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$slate$dist$index=shadow.js.require("module$node_modules$slate$dist$index", {});
var module$node_modules$slate_react$dist$index=shadow.js.require("module$node_modules$slate_react$dist$index", {});
var module$node_modules$react_awesome_button$dist$index=shadow.js.require("module$node_modules$react_awesome_button$dist$index", {});
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
/**
 * See https://reactjs.org/docs/react-dom-client.html#createroot
 */
app.main.create_root = (function app$main$create_root(var_args){
var G__59119 = arguments.length;
switch (G__59119) {
case 1:
return app.main.create_root.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.main.create_root.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.create_root.cljs$core$IFn$_invoke$arity$1 = (function (node){
return app.main.create_root.cljs$core$IFn$_invoke$arity$2(node,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0()));
}));

(app.main.create_root.cljs$core$IFn$_invoke$arity$2 = (function (node,id_prefix){
return module$node_modules$react_dom$client.createRoot(node,({"identifierPrefix": id_prefix}));
}));

(app.main.create_root.cljs$lang$maxFixedArity = 2);

app.main.render = (function app$main$render(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59127 = arguments.length;
var i__5770__auto___59128 = (0);
while(true){
if((i__5770__auto___59128 < len__5769__auto___59127)){
args__5775__auto__.push((arguments[i__5770__auto___59128]));

var G__59129 = (i__5770__auto___59128 + (1));
i__5770__auto___59128 = G__59129;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return app.main.render.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(app.main.render.cljs$core$IFn$_invoke$arity$variadic = (function (root,args){
return root.render(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198)], null),args)));
}));

(app.main.render.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(app.main.render.cljs$lang$applyTo = (function (seq59121){
var G__59122 = cljs.core.first(seq59121);
var seq59121__$1 = cljs.core.next(seq59121);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59122,seq59121__$1);
}));

app.main._BANG_state_cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"customer","customer",1742966319),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),""], null),new cljs.core.Keyword(null,"supplier","supplier",18255489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"types","types",590030639),cljs.core.PersistentVector.EMPTY], null)], null));
app.main.set_supplier_name_BANG_ = (function app$main$set_supplier_name_BANG_(name){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.main._BANG_state_cs,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"supplier","supplier",18255489),new cljs.core.Keyword(null,"name","name",1843675177)], null),name);
});
app.main.button_test = (function app$main$button_test(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_awesome_button$dist$index.AwesomeButton,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"onPress","onPress",-1383694171),(function (){
return hyperfiddle.history.navigate_BANG_(hyperfiddle.history._BANG_history,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.main","customer-page","app.main/customer-page",299957762)], null));
}),new cljs.core.Keyword(null,"type","type",1174270348),"primary",new cljs.core.Keyword(null,"size","size",1098693007),"medium",new cljs.core.Keyword(null,"button-primary-color","button-primary-color",-705856812),"#1e88e5",new cljs.core.Keyword(null,"button-primary-color-dark","button-primary-color-dark",506658266),"#1360a4"], null),"TEST"], null);
});
app.main.read_edn_str = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clojure.edn.read_string,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"readers","readers",-2118263030),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("goog.math","Long","goog.math/Long",124568471,null),app.main.goog$module$goog$math$Long.fromString], null)], null));

//# sourceMappingURL=app.main.js.map
