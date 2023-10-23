goog.provide('app.customer');
goog.scope(function(){
  app.customer.goog$module$goog$math$Long = goog.module.get('goog.math.Long');
});
app.customer._BANG_state_project = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"project","project",1124394579),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"title","title",636505583),"",new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"inactive","inactive",-306247616),new cljs.core.Keyword(null,"create-date","create-date",-131247136),"",new cljs.core.Keyword(null,"description","description",-1428560544),"",new cljs.core.Keyword(null,"types","types",590030639),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"customer","customer",1742966319),""], null),new cljs.core.Keyword(null,"selected-company","selected-company",1175494517),""], null));
app.customer.set_company_BANG_ = (function app$customer$set_company_BANG_(name){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.customer._BANG_state_project,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-company","selected-company",1175494517)], null),name);
});
app.customer.set_project_title_BANG_ = (function app$customer$set_project_title_BANG_(title){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.customer._BANG_state_project,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"project","project",1124394579),new cljs.core.Keyword(null,"title","title",636505583)], null),title);
});
app.customer.set_project_description_BANG_ = (function app$customer$set_project_description_BANG_(description){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.customer._BANG_state_project,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"project","project",1124394579),new cljs.core.Keyword(null,"description","description",-1428560544)], null),description);
});
app.customer.set_project_types_BANG_ = (function app$customer$set_project_types_BANG_(types){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.customer._BANG_state_project,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"project","project",1124394579),new cljs.core.Keyword(null,"types","types",590030639)], null),types);
});
app.customer.set_types_BANG_ = (function app$customer$set_types_BANG_(types){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.customer._BANG_state_project,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"types","types",590030639)], null),types);
});
app.customer.read_edn_str = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clojure.edn.read_string,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"readers","readers",-2118263030),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("goog.math","Long","goog.math/Long",124568471,null),app.customer.goog$module$goog$math$Long.fromString], null)], null));

//# sourceMappingURL=app.customer.js.map
