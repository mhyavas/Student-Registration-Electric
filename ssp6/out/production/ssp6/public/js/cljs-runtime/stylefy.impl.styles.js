goog.provide('stylefy.impl.styles');
stylefy.impl.styles.global_vendor_prefixes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883),cljs.core.PersistentHashSet.EMPTY], null));
stylefy.impl.styles.add_global_vendors = (function stylefy$impl$styles$add_global_vendors(style){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809),clojure.set.union.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(stylefy.impl.styles.global_vendor_prefixes)),new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809).cljs$core$IFn$_invoke$arity$1(style)),new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883),clojure.set.union.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(stylefy.impl.styles.global_vendor_prefixes)),new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883).cljs$core$IFn$_invoke$arity$1(style))], null)], 0));
});
stylefy.impl.styles.create_style_BANG_ = (function stylefy$impl$styles$create_style_BANG_(p__48143,style_created_handler){
var map__48144 = p__48143;
var map__48144__$1 = cljs.core.__destructure_map(map__48144);
var style = map__48144__$1;
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48144__$1,new cljs.core.Keyword(null,"props","props",453281727));
var hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48144__$1,new cljs.core.Keyword(null,"hash","hash",-13781596));
var style_css = stylefy.impl.conversion.style__GT_css.cljs$core$IFn$_invoke$arity$1(style);
var G__48145_48216 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"css","css",1135045163),style_css,new cljs.core.Keyword(null,"hash","hash",-13781596),hash], null);
(style_created_handler.cljs$core$IFn$_invoke$arity$1 ? style_created_handler.cljs$core$IFn$_invoke$arity$1(G__48145_48216) : style_created_handler.call(null,G__48145_48216));

var seq__48146 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432).cljs$core$IFn$_invoke$arity$1(props)));
var chunk__48147 = null;
var count__48148 = (0);
var i__48149 = (0);
while(true){
if((i__48149 < count__48148)){
var sub_style = chunk__48147.cljs$core$IIndexed$_nth$arity$2(null,i__48149);
var G__48159_48218 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),sub_style,new cljs.core.Keyword(null,"hash","hash",-13781596),stylefy.impl.hashing.hash_style(sub_style)], null);
var G__48160_48219 = style_created_handler;
(stylefy.impl.styles.create_style_BANG_.cljs$core$IFn$_invoke$arity$2 ? stylefy.impl.styles.create_style_BANG_.cljs$core$IFn$_invoke$arity$2(G__48159_48218,G__48160_48219) : stylefy.impl.styles.create_style_BANG_.call(null,G__48159_48218,G__48160_48219));


var G__48220 = seq__48146;
var G__48221 = chunk__48147;
var G__48222 = count__48148;
var G__48223 = (i__48149 + (1));
seq__48146 = G__48220;
chunk__48147 = G__48221;
count__48148 = G__48222;
i__48149 = G__48223;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__48146);
if(temp__5804__auto__){
var seq__48146__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48146__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__48146__$1);
var G__48227 = cljs.core.chunk_rest(seq__48146__$1);
var G__48228 = c__5568__auto__;
var G__48229 = cljs.core.count(c__5568__auto__);
var G__48230 = (0);
seq__48146 = G__48227;
chunk__48147 = G__48228;
count__48148 = G__48229;
i__48149 = G__48230;
continue;
} else {
var sub_style = cljs.core.first(seq__48146__$1);
var G__48161_48231 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),sub_style,new cljs.core.Keyword(null,"hash","hash",-13781596),stylefy.impl.hashing.hash_style(sub_style)], null);
var G__48162_48232 = style_created_handler;
(stylefy.impl.styles.create_style_BANG_.cljs$core$IFn$_invoke$arity$2 ? stylefy.impl.styles.create_style_BANG_.cljs$core$IFn$_invoke$arity$2(G__48161_48231,G__48162_48232) : stylefy.impl.styles.create_style_BANG_.call(null,G__48161_48231,G__48162_48232));


var G__48233 = cljs.core.next(seq__48146__$1);
var G__48234 = null;
var G__48235 = (0);
var G__48236 = (0);
seq__48146 = G__48233;
chunk__48147 = G__48234;
count__48148 = G__48235;
i__48149 = G__48236;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Return class definition as string, or nil if the argument is nil.
 */
stylefy.impl.styles.class_into_string = (function stylefy$impl$styles$class_into_string(class$){
if(cljs.core.truth_(class$)){
if(typeof class$ === 'string'){
return class$;
} else {
if((class$ instanceof cljs.core.Keyword)){
return cljs.core.name(class$);
} else {
if(cljs.core.vector_QMARK_(class$)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(stylefy.impl.styles.class_into_string,class$)));
} else {
return null;
}
}
}
} else {
return null;
}
});
stylefy.impl.styles.validate_class_definition = (function stylefy$impl$styles$validate_class_definition(class$,origin){
if((((class$ == null)) || (((typeof class$ === 'string') || ((((class$ instanceof cljs.core.Keyword)) || (((cljs.core.vector_QMARK_(class$)) && (cljs.core.every_QMARK_((function (p1__48164_SHARP_){
return ((typeof p1__48164_SHARP_ === 'string') || ((((p1__48164_SHARP_ instanceof cljs.core.Keyword)) || ((p1__48164_SHARP_ == null)))));
}),class$)))))))))){
return null;
} else {
throw (new Error(["Assert failed: ",["Unsupported ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(origin)," type. It should be nil, keyword, string or vector of strings/keywords). Got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([class$], 0))].join(''),"\n","(or (nil? class) (string? class) (keyword? class) (and (vector? class) (every? (fn* [p1__48164#] (or (string? p1__48164#) (keyword? p1__48164#) (nil? p1__48164#))) class)))"].join('')));
}
});
/**
 * Given a style, hash and options, returns HTML attributes for a Hiccup component,
 * or nil if there are not any attributes.
 */
stylefy.impl.styles.prepare_style_return_value = (function stylefy$impl$styles$prepare_style_return_value(style,style_hash,options){
if(cljs.core.truth_(new cljs.core.Keyword("stylefy.core","with-classes","stylefy.core/with-classes",1994369003).cljs$core$IFn$_invoke$arity$1(options))){
stylefy.impl.log.warn(":stylefy.core/with-classes is deprecated in options map (since 1.3.0, removed in 2.0.0), use :class instead.");
} else {
}

var style_with_classes = new cljs.core.Keyword("stylefy.core","with-classes","stylefy.core/with-classes",1994369003).cljs$core$IFn$_invoke$arity$1(style);
var html_attributes = stylefy.impl.utils.remove_special_keywords(options);
var html_attributes_class = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(html_attributes);
var html_attributes_inline_style = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(html_attributes);
stylefy.impl.styles.validate_class_definition(html_attributes_class,":class");

stylefy.impl.styles.validate_class_definition(style_with_classes,":stylefy.core/with-classes");

if((html_attributes_inline_style == null)){
} else {
throw (new Error(["Assert failed: ","HTML attribute :style is not supported in options map. Instead, you should provide your style definitions as the first argument when calling use-style.","\n","(nil? html-attributes-inline-style)"].join('')));
}

var class_as_string = stylefy.impl.styles.class_into_string(html_attributes_class);
var style_with_classes_as_string = stylefy.impl.styles.class_into_string(style_with_classes);
var final_class = clojure.string.trim([cljs.core.str.cljs$core$IFn$_invoke$arity$1(style_hash)," ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [class_as_string,style_with_classes_as_string], null)))].join(''));
var final_html_attributes = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([html_attributes,((cljs.core.seq(final_class))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),final_class], null):null)], 0));
if(cljs.core.seq(final_html_attributes)){
return final_html_attributes;
} else {
return null;
}
});
stylefy.impl.styles.style_return_value = (function stylefy$impl$styles$style_return_value(style,style_hash,options){
var return_map = stylefy.impl.styles.prepare_style_return_value(style,style_hash,options);
if(cljs.core.truth_((function (){var or__5045__auto__ = cljs.core.empty_QMARK_(style);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return stylefy.impl.dom.style_in_dom_QMARK_(cljs.core.deref(stylefy.impl.dom.dom),style_hash);
}
})())){
return return_map;
} else {
var contains_media_queries_QMARK_ = (!((new cljs.core.Keyword("stylefy.core","media","stylefy.core/media",-1323617834).cljs$core$IFn$_invoke$arity$1(style) == null)));
var contains_feature_queries_QMARK_ = (!((new cljs.core.Keyword("stylefy.core","supports","stylefy.core/supports",105019324).cljs$core$IFn$_invoke$arity$1(style) == null)));
var contains_manual_mode_QMARK_ = (!((new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369).cljs$core$IFn$_invoke$arity$1(style) == null)));
var contains_scoping_QMARK_ = (!((new cljs.core.Keyword("stylefy.core","scope","stylefy.core/scope",889108251).cljs$core$IFn$_invoke$arity$1(style) == null)));
var excluded_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hover","hover",-341141711),null], null), null);
var modes = new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234).cljs$core$IFn$_invoke$arity$1(style);
var mode_names = ((cljs.core.map_QMARK_(modes))?cljs.core.set(cljs.core.keys(modes)):((cljs.core.vector_QMARK_(modes))?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,modes)):cljs.core.PersistentHashSet.EMPTY
));
var contains_modes_not_excluded_QMARK_ = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,excluded_modes),mode_names));
var inline_style = stylefy.impl.conversion.garden_units__GT_css(stylefy.impl.utils.remove_special_keywords(style));
var inline_style_not_supported_QMARK_ = ((contains_media_queries_QMARK_) || (((contains_feature_queries_QMARK_) || (((contains_manual_mode_QMARK_) || (((contains_scoping_QMARK_) || (contains_modes_not_excluded_QMARK_))))))));
if(inline_style_not_supported_QMARK_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([return_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inline_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),"hidden"], null)], 0))], null)], 0));
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([return_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),inline_style], null)], 0));
}
}
});
stylefy.impl.styles.use_style_BANG_ = (function stylefy$impl$styles$use_style_BANG_(style,options,style_created_handler){
stylefy.impl.state.check_stylefy_initialisation();

var style_with_global_vendors = ((cljs.core.empty_QMARK_(style))?null:stylefy.impl.styles.add_global_vendors(style));
var style_hash = stylefy.impl.hashing.hash_style(style_with_global_vendors);
var already_created = stylefy.impl.dom.style_by_hash(cljs.core.deref(stylefy.impl.dom.dom),style_hash);
if(((cljs.core.seq(style_with_global_vendors)) && ((((!((style_hash == null)))) && (cljs.core.not(already_created)))))){
stylefy.impl.styles.create_style_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),style_with_global_vendors,new cljs.core.Keyword(null,"hash","hash",-13781596),style_hash], null),style_created_handler);
} else {
}

return stylefy.impl.styles.style_return_value(style_with_global_vendors,style_hash,options);
});
stylefy.impl.styles.use_sub_style_BANG_ = (function stylefy$impl$styles$use_sub_style_BANG_(style,sub_style,options,style_created_handler){
var resolved_sub_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432).cljs$core$IFn$_invoke$arity$1(style),sub_style);
if(cljs.core.truth_(resolved_sub_style)){
return stylefy.impl.styles.use_style_BANG_(resolved_sub_style,options,style_created_handler);
} else {
return stylefy.impl.log.warn(["Sub-style ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sub_style], 0))," not found in style: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0))].join(''));
}
});
stylefy.impl.styles.sub_style = (function stylefy$impl$styles$sub_style(var_args){
var args__5775__auto__ = [];
var len__5769__auto___48257 = arguments.length;
var i__5770__auto___48258 = (0);
while(true){
if((i__5770__auto___48258 < len__5769__auto___48257)){
args__5775__auto__.push((arguments[i__5770__auto___48258]));

var G__48260 = (i__5770__auto___48258 + (1));
i__5770__auto___48258 = G__48260;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return stylefy.impl.styles.sub_style.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(stylefy.impl.styles.sub_style.cljs$core$IFn$_invoke$arity$variadic = (function (style,sub_styles){
var resolved_sub_style = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__48181_SHARP_,p2__48182_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__48181_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432),p2__48182_SHARP_], null));
}),style,sub_styles);
if(cljs.core.truth_(resolved_sub_style)){
return resolved_sub_style;
} else {
return stylefy.impl.log.warn(["Sub-style ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sub_styles], 0))," not found in style: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0))].join(''));
}
}));

(stylefy.impl.styles.sub_style.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(stylefy.impl.styles.sub_style.cljs$lang$applyTo = (function (seq48184){
var G__48185 = cljs.core.first(seq48184);
var seq48184__$1 = cljs.core.next(seq48184);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48185,seq48184__$1);
}));

stylefy.impl.styles.prepare_styles = (function stylefy$impl$styles$prepare_styles(var_args){
var G__48189 = arguments.length;
switch (G__48189) {
case 1:
return stylefy.impl.styles.prepare_styles.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return stylefy.impl.styles.prepare_styles.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(stylefy.impl.styles.prepare_styles.cljs$core$IFn$_invoke$arity$1 = (function (styles){
return stylefy.impl.styles.prepare_styles.cljs$core$IFn$_invoke$arity$2(styles,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-dom-update-after-done?","request-dom-update-after-done?",199142510),true], null));
}));

(stylefy.impl.styles.prepare_styles.cljs$core$IFn$_invoke$arity$2 = (function (styles,p__48190){
var map__48191 = p__48190;
var map__48191__$1 = cljs.core.__destructure_map(map__48191);
var _options = map__48191__$1;
var request_dom_update_after_done_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48191__$1,new cljs.core.Keyword(null,"request-dom-update-after-done?","request-dom-update-after-done?",199142510));
var styles_48265__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,styles);
var seq__48192_48266 = cljs.core.seq(styles_48265__$1);
var chunk__48193_48267 = null;
var count__48194_48268 = (0);
var i__48195_48269 = (0);
while(true){
if((i__48195_48269 < count__48194_48268)){
var style_48271 = chunk__48193_48267.cljs$core$IIndexed$_nth$arity$2(null,i__48195_48269);
stylefy.impl.styles.use_style_BANG_(style_48271,cljs.core.PersistentArrayMap.EMPTY,((function (seq__48192_48266,chunk__48193_48267,count__48194_48268,i__48195_48269,style_48271,styles_48265__$1,map__48191,map__48191__$1,_options,request_dom_update_after_done_QMARK_){
return (function (style__$1){
return stylefy.impl.dom.add_style(cljs.core.deref(stylefy.impl.dom.dom),style__$1);
});})(seq__48192_48266,chunk__48193_48267,count__48194_48268,i__48195_48269,style_48271,styles_48265__$1,map__48191,map__48191__$1,_options,request_dom_update_after_done_QMARK_))
);

var temp__5804__auto___48274 = cljs.core.vals(new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432).cljs$core$IFn$_invoke$arity$1(style_48271));
if(cljs.core.truth_(temp__5804__auto___48274)){
var sub_styles_48277 = temp__5804__auto___48274;
stylefy.impl.styles.prepare_styles.cljs$core$IFn$_invoke$arity$2(sub_styles_48277,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-dom-update-after-done?","request-dom-update-after-done?",199142510),false], null));
} else {
}


var G__48278 = seq__48192_48266;
var G__48279 = chunk__48193_48267;
var G__48280 = count__48194_48268;
var G__48281 = (i__48195_48269 + (1));
seq__48192_48266 = G__48278;
chunk__48193_48267 = G__48279;
count__48194_48268 = G__48280;
i__48195_48269 = G__48281;
continue;
} else {
var temp__5804__auto___48282 = cljs.core.seq(seq__48192_48266);
if(temp__5804__auto___48282){
var seq__48192_48284__$1 = temp__5804__auto___48282;
if(cljs.core.chunked_seq_QMARK_(seq__48192_48284__$1)){
var c__5568__auto___48285 = cljs.core.chunk_first(seq__48192_48284__$1);
var G__48286 = cljs.core.chunk_rest(seq__48192_48284__$1);
var G__48287 = c__5568__auto___48285;
var G__48288 = cljs.core.count(c__5568__auto___48285);
var G__48289 = (0);
seq__48192_48266 = G__48286;
chunk__48193_48267 = G__48287;
count__48194_48268 = G__48288;
i__48195_48269 = G__48289;
continue;
} else {
var style_48291 = cljs.core.first(seq__48192_48284__$1);
stylefy.impl.styles.use_style_BANG_(style_48291,cljs.core.PersistentArrayMap.EMPTY,((function (seq__48192_48266,chunk__48193_48267,count__48194_48268,i__48195_48269,style_48291,seq__48192_48284__$1,temp__5804__auto___48282,styles_48265__$1,map__48191,map__48191__$1,_options,request_dom_update_after_done_QMARK_){
return (function (style__$1){
return stylefy.impl.dom.add_style(cljs.core.deref(stylefy.impl.dom.dom),style__$1);
});})(seq__48192_48266,chunk__48193_48267,count__48194_48268,i__48195_48269,style_48291,seq__48192_48284__$1,temp__5804__auto___48282,styles_48265__$1,map__48191,map__48191__$1,_options,request_dom_update_after_done_QMARK_))
);

var temp__5804__auto___48292__$1 = cljs.core.vals(new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432).cljs$core$IFn$_invoke$arity$1(style_48291));
if(cljs.core.truth_(temp__5804__auto___48292__$1)){
var sub_styles_48293 = temp__5804__auto___48292__$1;
stylefy.impl.styles.prepare_styles.cljs$core$IFn$_invoke$arity$2(sub_styles_48293,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-dom-update-after-done?","request-dom-update-after-done?",199142510),false], null));
} else {
}


var G__48294 = cljs.core.next(seq__48192_48284__$1);
var G__48295 = null;
var G__48296 = (0);
var G__48297 = (0);
seq__48192_48266 = G__48294;
chunk__48193_48267 = G__48295;
count__48194_48268 = G__48296;
i__48195_48269 = G__48297;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(request_dom_update_after_done_QMARK_)){
return stylefy.impl.dom.update_dom_if_needed(cljs.core.deref(stylefy.impl.dom.dom));
} else {
return null;
}
}));

(stylefy.impl.styles.prepare_styles.cljs$lang$maxFixedArity = 2);

stylefy.impl.styles.init_global_vendor_prefixes = (function stylefy$impl$styles$init_global_vendor_prefixes(options){
var global_vendor_prefixes_options = new cljs.core.Keyword(null,"global-vendor-prefixes","global-vendor-prefixes",882986417).cljs$core$IFn$_invoke$arity$1(options);
return cljs.core.reset_BANG_(stylefy.impl.styles.global_vendor_prefixes,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809),new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809).cljs$core$IFn$_invoke$arity$1(global_vendor_prefixes_options),new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883),new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883).cljs$core$IFn$_invoke$arity$1(global_vendor_prefixes_options)], null));
});

//# sourceMappingURL=stylefy.impl.styles.js.map
