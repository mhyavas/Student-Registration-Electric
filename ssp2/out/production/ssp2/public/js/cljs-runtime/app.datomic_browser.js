goog.provide('app.datomic_browser');
goog.scope(function(){
  app.datomic_browser.goog$module$goog$math$Long = goog.module.get('goog.math.Long');
});
app.datomic_browser.read_edn_str = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clojure.edn.read_string,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"readers","readers",-2118263030),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("goog.math","Long","goog.math/Long",124568471,null),app.datomic_browser.goog$module$goog$math$Long.fromString], null)], null));

//# sourceMappingURL=app.datomic_browser.js.map
