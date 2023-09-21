goog.provide('app.customer');
goog.scope(function(){
  app.customer.goog$module$goog$math$Long = goog.module.get('goog.math.Long');
});
app.customer.getTime = (function app$customer$getTime(){
return cljs_time.core.now();
});
app.customer._BANG_state_project = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"project","project",1124394579),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"title","title",636505583),"",new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"inactive","inactive",-306247616),new cljs.core.Keyword(null,"create-date","create-date",-131247136),"",new cljs.core.Keyword(null,"description","description",-1428560544),"",new cljs.core.Keyword(null,"types","types",590030639),"",new cljs.core.Keyword(null,"customer","customer",1742966319),""], null)], null));
app.customer.read_edn_str = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clojure.edn.read_string,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"readers","readers",-2118263030),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("goog.math","Long","goog.math/Long",124568471,null),app.customer.goog$module$goog$math$Long.fromString], null)], null));

//# sourceMappingURL=app.customer.js.map
