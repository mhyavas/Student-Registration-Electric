goog.provide('contrib.base64');
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs")){
contrib.base64.base64 = require("base-64");
} else {
}
contrib.base64.base64_encode = (function contrib$base64$base64_encode(s){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs")){
return contrib.base64.base64.encode(s);
} else {
return goog.crypt.base64.encodeString(s);
}
});
contrib.base64.base64_decode = (function contrib$base64$base64_decode(s){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs")){
return contrib.base64.base64.decode(s);
} else {
return goog.crypt.base64.decodeString(s);
}
});
contrib.base64.str_replace_chars = (function contrib$base64$str_replace_chars(s,char_mapping){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,p__34565){
var vec__34566 = p__34565;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34566,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34566,(1),null);
return clojure.string.replace(a,k,v);
}),s,char_mapping);
});
contrib.base64.url_unsafe = new cljs.core.PersistentArrayMap(null, 3, ["+","-","/","_","=",","], null);
contrib.base64.base64_encode_url_safe = (function contrib$base64$base64_encode_url_safe(s){
return contrib.base64.str_replace_chars(contrib.base64.base64_encode(s),contrib.base64.url_unsafe);
});
contrib.base64.base64_decode_url_safe = (function contrib$base64$base64_decode_url_safe(s){
return contrib.base64.base64_decode(contrib.base64.str_replace_chars(s,clojure.set.map_invert(contrib.base64.url_unsafe)));
});

//# sourceMappingURL=contrib.base64.js.map
