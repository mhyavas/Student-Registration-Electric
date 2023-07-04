goog.provide('demo.tutorial_7guis_5_crud');
demo.tutorial_7guis_5_crud._BANG_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selected","selected",574897764),null,new cljs.core.Keyword(null,"stage","stage",1843544772),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"surname","surname",1407918027),""], null),new cljs.core.Keyword(null,"names","names",-1943074658),cljs.core.sorted_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Emil",new cljs.core.Keyword(null,"surname","surname",1407918027),"Hans"], null)], 0))], null));
demo.tutorial_7guis_5_crud.next_id = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.swap_BANG_,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.inc);
demo.tutorial_7guis_5_crud.select_BANG_ = (function demo$tutorial_7guis_5_crud$select_BANG_(id){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(demo.tutorial_7guis_5_crud._BANG_state,(function (state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"selected","selected",574897764),id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"stage","stage",1843544772),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"names","names",-1943074658),id], null))], 0));
}));
});
demo.tutorial_7guis_5_crud.set_name_BANG_ = (function demo$tutorial_7guis_5_crud$set_name_BANG_(name){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(demo.tutorial_7guis_5_crud._BANG_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stage","stage",1843544772),new cljs.core.Keyword(null,"name","name",1843675177)], null),name);
});
demo.tutorial_7guis_5_crud.set_surname_BANG_ = (function demo$tutorial_7guis_5_crud$set_surname_BANG_(surname){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(demo.tutorial_7guis_5_crud._BANG_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stage","stage",1843544772),new cljs.core.Keyword(null,"surname","surname",1407918027)], null),surname);
});
demo.tutorial_7guis_5_crud.create_BANG_ = (function demo$tutorial_7guis_5_crud$create_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(demo.tutorial_7guis_5_crud._BANG_state,(function (p__35665){
var map__35667 = p__35665;
var map__35667__$1 = cljs.core.__destructure_map(map__35667);
var state = map__35667__$1;
var stage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35667__$1,new cljs.core.Keyword(null,"stage","stage",1843544772));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$5(state,new cljs.core.Keyword(null,"names","names",-1943074658),cljs.core.assoc,demo.tutorial_7guis_5_crud.next_id(),stage),new cljs.core.Keyword(null,"stage","stage",1843544772),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"surname","surname",1407918027),""], null));
}));
});
demo.tutorial_7guis_5_crud.delete_BANG_ = (function demo$tutorial_7guis_5_crud$delete_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(demo.tutorial_7guis_5_crud._BANG_state,(function (p__35671){
var map__35672 = p__35671;
var map__35672__$1 = cljs.core.__destructure_map(map__35672);
var state = map__35672__$1;
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35672__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"names","names",-1943074658),cljs.core.dissoc,selected);
}));
});
demo.tutorial_7guis_5_crud.update_BANG_ = (function demo$tutorial_7guis_5_crud$update_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(demo.tutorial_7guis_5_crud._BANG_state,(function (p__35677){
var map__35678 = p__35677;
var map__35678__$1 = cljs.core.__destructure_map(map__35678);
var state = map__35678__$1;
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35678__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var stage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35678__$1,new cljs.core.Keyword(null,"stage","stage",1843544772));
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"names","names",-1943074658),selected], null),stage);
}));
});
demo.tutorial_7guis_5_crud.filter_names = (function demo$tutorial_7guis_5_crud$filter_names(names_map,needle){
if(cljs.core.empty_QMARK_(needle)){
return names_map;
} else {
var needle__$1 = clojure.string.lower_case(needle);
return cljs.core.reduce_kv((function (r,k,p__35686){
var map__35687 = p__35686;
var map__35687__$1 = cljs.core.__destructure_map(map__35687);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35687__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var surname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35687__$1,new cljs.core.Keyword(null,"surname","surname",1407918027));
if(((clojure.string.includes_QMARK_(clojure.string.lower_case(name),needle__$1)) || (clojure.string.includes_QMARK_(clojure.string.lower_case(surname),needle__$1)))){
return r;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(r,k);
}
}),names_map,names_map);
}
});

//# sourceMappingURL=demo.tutorial_7guis_5_crud.js.map
