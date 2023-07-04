goog.provide('contrib.crypt');
contrib.crypt.sha256_base64 = (function contrib$crypt$sha256_base64(o){
var sha256er = (new goog.crypt.Sha256());
sha256er.update(goog.crypt.stringToByteArray(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([o], 0))));

return goog.crypt.base64.encodeByteArray(sha256er.digest());
});

//# sourceMappingURL=contrib.crypt.js.map
