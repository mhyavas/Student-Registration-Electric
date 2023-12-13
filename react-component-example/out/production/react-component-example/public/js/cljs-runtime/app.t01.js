goog.provide('app.t01');
goog.scope(function(){
  app.t01.goog$module$goog$math$Long = goog.module.get('goog.math.Long');
});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$reactive_button$dist$index_cjs=shadow.js.require("module$node_modules$reactive_button$dist$index_cjs", {});
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
var module$node_modules$react_csv$index=shadow.js.require("module$node_modules$react_csv$index", {});
/**
 * See https://reactjs.org/docs/react-dom-client.html#createroot
 */
app.t01.create_root = (function app$t01$create_root(var_args){
var G__33846 = arguments.length;
switch (G__33846) {
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
var len__5769__auto___33852 = arguments.length;
var i__5770__auto___33853 = (0);
while(true){
if((i__5770__auto___33853 < len__5769__auto___33852)){
args__5775__auto__.push((arguments[i__5770__auto___33853]));

var G__33854 = (i__5770__auto___33853 + (1));
i__5770__auto___33853 = G__33854;
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
(app.t01.render.cljs$lang$applyTo = (function (seq33847){
var G__33848 = cljs.core.first(seq33847);
var seq33847__$1 = cljs.core.next(seq33847);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33848,seq33847__$1);
}));

app.t01._BANG_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clicker","clicker",-1098167819),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"column","column",2078222095),"",new cljs.core.Keyword(null,"click","click",1912301393),false], null),new cljs.core.Keyword(null,"button","button",1456579943),false], null));
app.t01.reactive_btn = (function app$t01$reactive_btn(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$reactive_button$dist$index_cjs,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"green",new cljs.core.Keyword(null,"idleText","idleText",1130426408),"Button1",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.t01._BANG_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943)], null),true);
})], null)], null);
});
app.t01.table_data = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"col1","col1",-30021953),(1),new cljs.core.Keyword(null,"col2","col2",1353393028),(2),new cljs.core.Keyword(null,"col3","col3",59480205),(3)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"col1","col1",-30021953),(3),new cljs.core.Keyword(null,"col2","col2",1353393028),(4),new cljs.core.Keyword(null,"col3","col3",59480205),(5)], null)], null);
app.t01.react_table = (function app$t01$react_table(table_data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_data_table_component$default,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"allowRowEvents","allowRowEvents",-1878421756),true,new cljs.core.Keyword(null,"onRowClicked","onRowClicked",-686483143),(function (v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.t01._BANG_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clicker","clicker",-1098167819)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"column","column",2078222095),v.col1,new cljs.core.Keyword(null,"click","click",1912301393),true], null));
}),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"Col1","Col1",843898541),new cljs.core.Keyword(null,"selector","selector",762528866),(function (row){
return row.col1;
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"Col2","Col2",-1587157649),new cljs.core.Keyword(null,"selector","selector",762528866),(function (row){
return row.col2;
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"Col3","Col3",2056984836),new cljs.core.Keyword(null,"selector","selector",762528866),(function (row){
return row.col3;
})], null)], null),new cljs.core.Keyword(null,"data","data",-232669377),table_data], null)], null);
});
app.t01.csv_downloader = (function app$t01$csv_downloader(data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),app.t01.CSVLink,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY], null)], null);
});
app.t01.read_edn_str = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clojure.edn.read_string,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"readers","readers",-2118263030),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("goog.math","Long","goog.math/Long",124568471,null),app.t01.goog$module$goog$math$Long.fromString], null)], null));

//# sourceMappingURL=app.t01.js.map
