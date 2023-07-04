goog.provide('wip.tag_picker');
wip.tag_picker.data = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"alice","alice",-1905328892),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Alice B"], null),new cljs.core.Keyword(null,"bob","bob",-1352926751),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Bob C"], null),new cljs.core.Keyword(null,"charlie","charlie",2122695246),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Charlie D"], null),new cljs.core.Keyword(null,"derek","derek",801287338),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Derek E"], null)], null);
wip.tag_picker.q = (function wip$tag_picker$q(search){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p__35748){
var vec__35749 = p__35748;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35749,(0),null);
var map__35752 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35749,(1),null);
var map__35752__$1 = cljs.core.__destructure_map(map__35752);
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35752__$1,new cljs.core.Keyword(null,"name","name",1843675177));
if(clojure.string.includes_QMARK_(nm,search)){
return k;
} else {
return null;
}
})),wip.tag_picker.data);
});

//# sourceMappingURL=wip.tag_picker.js.map
