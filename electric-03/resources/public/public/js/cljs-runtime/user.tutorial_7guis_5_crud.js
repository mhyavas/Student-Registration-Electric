goog.provide('user.tutorial_7guis_5_crud');
user.tutorial_7guis_5_crud._BANG_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selected","selected",574897764),null,new cljs.core.Keyword(null,"stage","stage",1843544772),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"surname","surname",1407918027),""], null),new cljs.core.Keyword(null,"names","names",-1943074658),cljs.core.sorted_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Emil",new cljs.core.Keyword(null,"surname","surname",1407918027),"Hans"], null)], 0))], null));
user.tutorial_7guis_5_crud.next_id = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.swap_BANG_,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.inc);
user.tutorial_7guis_5_crud.select_BANG_ = (function user$tutorial_7guis_5_crud$select_BANG_(id){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(user.tutorial_7guis_5_crud._BANG_state,(function (state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"selected","selected",574897764),id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"stage","stage",1843544772),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"names","names",-1943074658),id], null))], 0));
}));
});
user.tutorial_7guis_5_crud.set_name_BANG_ = (function user$tutorial_7guis_5_crud$set_name_BANG_(name){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(user.tutorial_7guis_5_crud._BANG_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stage","stage",1843544772),new cljs.core.Keyword(null,"name","name",1843675177)], null),name);
});
user.tutorial_7guis_5_crud.set_surname_BANG_ = (function user$tutorial_7guis_5_crud$set_surname_BANG_(surname){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(user.tutorial_7guis_5_crud._BANG_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stage","stage",1843544772),new cljs.core.Keyword(null,"surname","surname",1407918027)], null),surname);
});
user.tutorial_7guis_5_crud.create_BANG_ = (function user$tutorial_7guis_5_crud$create_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(user.tutorial_7guis_5_crud._BANG_state,(function (p__49735){
var map__49736 = p__49735;
var map__49736__$1 = cljs.core.__destructure_map(map__49736);
var state = map__49736__$1;
var stage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49736__$1,new cljs.core.Keyword(null,"stage","stage",1843544772));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$5(state,new cljs.core.Keyword(null,"names","names",-1943074658),cljs.core.assoc,user.tutorial_7guis_5_crud.next_id(),stage),new cljs.core.Keyword(null,"stage","stage",1843544772),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"surname","surname",1407918027),""], null));
}));
});
user.tutorial_7guis_5_crud.delete_BANG_ = (function user$tutorial_7guis_5_crud$delete_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(user.tutorial_7guis_5_crud._BANG_state,(function (p__49737){
var map__49738 = p__49737;
var map__49738__$1 = cljs.core.__destructure_map(map__49738);
var state = map__49738__$1;
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49738__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"names","names",-1943074658),cljs.core.dissoc,selected);
}));
});
user.tutorial_7guis_5_crud.update_BANG_ = (function user$tutorial_7guis_5_crud$update_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(user.tutorial_7guis_5_crud._BANG_state,(function (p__49739){
var map__49740 = p__49739;
var map__49740__$1 = cljs.core.__destructure_map(map__49740);
var state = map__49740__$1;
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49740__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var stage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49740__$1,new cljs.core.Keyword(null,"stage","stage",1843544772));
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"names","names",-1943074658),selected], null),stage);
}));
});
user.tutorial_7guis_5_crud.filter_names = (function user$tutorial_7guis_5_crud$filter_names(names_map,needle){
if(cljs.core.empty_QMARK_(needle)){
return names_map;
} else {
var needle__$1 = clojure.string.lower_case(needle);
return cljs.core.reduce_kv((function (r,k,p__49742){
var map__49743 = p__49742;
var map__49743__$1 = cljs.core.__destructure_map(map__49743);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49743__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var surname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49743__$1,new cljs.core.Keyword(null,"surname","surname",1407918027));
if(((clojure.string.includes_QMARK_(clojure.string.lower_case(name),needle__$1)) || (clojure.string.includes_QMARK_(clojure.string.lower_case(surname),needle__$1)))){
return r;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(r,k);
}
}),names_map,names_map);
}
});

//# sourceMappingURL=user.tutorial_7guis_5_crud.js.map
