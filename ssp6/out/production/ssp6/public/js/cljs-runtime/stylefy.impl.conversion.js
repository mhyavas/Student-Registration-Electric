goog.provide('stylefy.impl.conversion');
/**
 * Checks all values in the map and converts all Garden units to CSS.
 */
stylefy.impl.conversion.garden_units__GT_css = (function stylefy$impl$conversion$garden_units__GT_css(props){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,next_key){
var value = (next_key.cljs$core$IFn$_invoke$arity$1 ? next_key.cljs$core$IFn$_invoke$arity$1(props) : next_key.call(null,props));
if(stylefy.impl.utils.is_garden_value_QMARK_(value)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,next_key,garden.compiler.render_css(value));
} else {
return result;
}
}),props,cljs.core.keys(props));
});
stylefy.impl.conversion.convert_stylefy_vendors_to_garden = (function stylefy$impl$conversion$convert_stylefy_vendors_to_garden(props){
var temp__5804__auto__ = new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5804__auto__)){
var vendors = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vendors","vendors",-153040496),vendors,new cljs.core.Keyword(null,"auto-prefix","auto-prefix",1484803466),new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883).cljs$core$IFn$_invoke$arity$1(props)], null);
} else {
return null;
}
});
stylefy.impl.conversion.convert_stylefy_modes_to_garden = (function stylefy$impl$conversion$convert_stylefy_modes_to_garden(props){
var modes = new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234).cljs$core$IFn$_invoke$arity$1(props);
var handle_mode = (function (mode_name,mode_props){
if((((mode_name instanceof cljs.core.Keyword)) || (((typeof mode_name === 'string') && (clojure.string.starts_with_QMARK_(mode_name,":")))))){
} else {
throw (new Error(["Assert failed: ",["Mode must be specified as a keyword or string beginning with a colon, got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mode_name], 0))].join(''),"\n","(or (keyword? mode-name) (and (string? mode-name) (str/starts-with? mode-name \":\")))"].join('')));
}

if(((typeof mode_name === 'string') && ((cljs.core.count(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mode_name," ")) > (1))))){
stylefy.impl.log.warn(["Incorrect mode detected, should not contain spaces. Mode was: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mode_name], 0))].join(''));
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["&",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mode_name)].join('')),mode_props], null);
});
if(cljs.core.map_QMARK_(modes)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__48083_SHARP_){
return handle_mode(p1__48083_SHARP_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(modes,p1__48083_SHARP_));
}),cljs.core.keys(modes));
} else {
if(cljs.core.vector_QMARK_(modes)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__48084_SHARP_){
return handle_mode(cljs.core.first(p1__48084_SHARP_),cljs.core.second(p1__48084_SHARP_));
}),modes);
} else {
return null;
}
}
});
stylefy.impl.conversion.class_selector = (function stylefy$impl$conversion$class_selector(hash){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)].join(''));
});
/**
 * Converts Clojure style map into CSS class.
 */
stylefy.impl.conversion.convert_base_style_into_class = (function stylefy$impl$conversion$convert_base_style_into_class(p__48085,options){
var map__48086 = p__48085;
var map__48086__$1 = cljs.core.__destructure_map(map__48086);
var _style = map__48086__$1;
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48086__$1,new cljs.core.Keyword(null,"props","props",453281727));
var hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48086__$1,new cljs.core.Keyword(null,"hash","hash",-13781596));
var custom_selector = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48086__$1,new cljs.core.Keyword(null,"custom-selector","custom-selector",-474556277));
var css_props = stylefy.impl.utils.remove_special_keywords(props);
var css_selector = (function (){var or__5045__auto__ = custom_selector;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return stylefy.impl.conversion.class_selector(hash);
}
})();
var garden_class_definition = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [css_selector,css_props], null);
var garden_pseudo_classes = stylefy.impl.conversion.convert_stylefy_modes_to_garden(props);
var garden_vendors = stylefy.impl.conversion.convert_stylefy_vendors_to_garden(props);
var garden_options = (function (){var or__5045__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,garden_vendors], 0));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var css_class = garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden_options,cljs.core.into.cljs$core$IFn$_invoke$arity$2(garden_class_definition,garden_pseudo_classes)], 0));
return css_class;
});
stylefy.impl.conversion.prepare_manual_style_map = (function stylefy$impl$conversion$prepare_manual_style_map(style_map){
return clojure.walk.walk((function (p1__48087_SHARP_){
if(cljs.core.map_QMARK_(p1__48087_SHARP_)){
return stylefy.impl.utils.remove_special_keywords(p1__48087_SHARP_);
} else {
return p1__48087_SHARP_;
}
}),cljs.core.identity,style_map);
});
stylefy.impl.conversion.handle_scoped_style_map = (function stylefy$impl$conversion$handle_scoped_style_map(props,scope){
var scoped_style = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scope,stylefy.impl.utils.remove_special_keywords(props)], null);
var garden_pseudo_classes = stylefy.impl.conversion.convert_stylefy_modes_to_garden(props);
var stylefy_manual_styles = new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369).cljs$core$IFn$_invoke$arity$1(props);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,scoped_style,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(garden_pseudo_classes,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(stylefy.impl.conversion.prepare_manual_style_map,stylefy_manual_styles)));
});
stylefy.impl.conversion.find_and_handle_scoped_style_map = (function stylefy$impl$conversion$find_and_handle_scoped_style_map(item,scope){
if(cljs.core.map_QMARK_(item)){
return stylefy.impl.conversion.handle_scoped_style_map(item,scope);
} else {
if(cljs.core.vector_QMARK_(item)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__48088_SHARP_){
return (stylefy.impl.conversion.find_and_handle_scoped_style_map.cljs$core$IFn$_invoke$arity$2 ? stylefy.impl.conversion.find_and_handle_scoped_style_map.cljs$core$IFn$_invoke$arity$2(p1__48088_SHARP_,scope) : stylefy.impl.conversion.find_and_handle_scoped_style_map.call(null,p1__48088_SHARP_,scope));
}),item);
} else {
return item;

}
}
});
/**
 * Converts stylefy/scope definition into CSS selector.
 * 
 *   stylefy features supported in scoped style map:
 *   - modes
 *   - manual mode
 *   - vendor prefixes (must be defined in the parent style map)
 */
stylefy.impl.conversion.convert_scoped_styles = (function stylefy$impl$conversion$convert_scoped_styles(p__48089,options){
var map__48090 = p__48089;
var map__48090__$1 = cljs.core.__destructure_map(map__48090);
var _style = map__48090__$1;
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48090__$1,new cljs.core.Keyword(null,"props","props",453281727));
var hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48090__$1,new cljs.core.Keyword(null,"hash","hash",-13781596));
var custom_selector = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48090__$1,new cljs.core.Keyword(null,"custom-selector","custom-selector",-474556277));
var temp__5804__auto__ = new cljs.core.Keyword("stylefy.core","scope","stylefy.core/scope",889108251).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5804__auto__)){
var stylefy_scoped_styles = temp__5804__auto__;
var css_parent_selector = (function (){var or__5045__auto__ = custom_selector;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return stylefy.impl.conversion.class_selector(hash);
}
})();
var css_scoped_styles = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (scoping_rule){
var selector_and_props = stylefy.impl.conversion.find_and_handle_scoped_style_map(scoping_rule,css_parent_selector);
var garden_vendors = stylefy.impl.conversion.convert_stylefy_vendors_to_garden(props);
var garden_options = (function (){var or__5045__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,garden_vendors], 0));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var css_selector = garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden_options,selector_and_props], 0));
return css_selector;
}),stylefy_scoped_styles);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,css_scoped_styles);
} else {
return null;
}
});
/**
 * Converts stylefy/media definition into CSS media query.
 * 
 *   stylefy features supported in media query style map:
 *   - modes
 *   - scope
 *   - vendor prefixes
 * 
 *   ::stylefy/manual is not supported here since one can use it to create
 *   media queries.
 */
stylefy.impl.conversion.convert_media_queries = (function stylefy$impl$conversion$convert_media_queries(p__48093,options){
var map__48094 = p__48093;
var map__48094__$1 = cljs.core.__destructure_map(map__48094);
var _style = map__48094__$1;
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48094__$1,new cljs.core.Keyword(null,"props","props",453281727));
var hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48094__$1,new cljs.core.Keyword(null,"hash","hash",-13781596));
var custom_selector = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48094__$1,new cljs.core.Keyword(null,"custom-selector","custom-selector",-474556277));
var temp__5804__auto__ = new cljs.core.Keyword("stylefy.core","media","stylefy.core/media",-1323617834).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5804__auto__)){
var media_queries = temp__5804__auto__;
var css_selector = (function (){var or__5045__auto__ = custom_selector;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return stylefy.impl.conversion.class_selector(hash);
}
})();
var handle_media_query = (function (media_query,media_query_props){
var media_query_css_props = stylefy.impl.utils.remove_special_keywords(media_query_props);
var scoped_styles_garden = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (scoping_rule){
return stylefy.impl.conversion.find_and_handle_scoped_style_map(scoping_rule,css_selector);
}),new cljs.core.Keyword("stylefy.core","scope","stylefy.core/scope",889108251).cljs$core$IFn$_invoke$arity$1(media_query_props));
var garden_class_definition = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [css_selector,media_query_css_props], null);
var garden_pseudo_classes = stylefy.impl.conversion.convert_stylefy_modes_to_garden(media_query_props);
var garden_vendors = stylefy.impl.conversion.convert_stylefy_vendors_to_garden(media_query_props);
var garden_options = (function (){var or__5045__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,garden_vendors], 0));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden_options,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic(media_query,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.into.cljs$core$IFn$_invoke$arity$2(garden_class_definition,garden_pseudo_classes)], 0)),garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic(media_query,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([scoped_styles_garden], 0))], null)], 0));
});
var css_media_queries = ((cljs.core.map_QMARK_(media_queries))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__48091_SHARP_){
return handle_media_query(p1__48091_SHARP_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(media_queries,p1__48091_SHARP_));
}),cljs.core.keys(media_queries)):((cljs.core.vector_QMARK_(media_queries))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__48092_SHARP_){
return handle_media_query(cljs.core.first(p1__48092_SHARP_),cljs.core.second(p1__48092_SHARP_));
}),media_queries):null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,css_media_queries);
} else {
return null;
}
});
/**
 * Converts stylefy/supports definition into CSS feature query.
 */
stylefy.impl.conversion.convert_feature_queries = (function stylefy$impl$conversion$convert_feature_queries(p__48108,options){
var map__48112 = p__48108;
var map__48112__$1 = cljs.core.__destructure_map(map__48112);
var _style = map__48112__$1;
var hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48112__$1,new cljs.core.Keyword(null,"hash","hash",-13781596));
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48112__$1,new cljs.core.Keyword(null,"props","props",453281727));
var custom_selector = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48112__$1,new cljs.core.Keyword(null,"custom-selector","custom-selector",-474556277));
var temp__5804__auto__ = new cljs.core.Keyword("stylefy.core","supports","stylefy.core/supports",105019324).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5804__auto__)){
var supports_rules = temp__5804__auto__;
var handle_supports_rule = (function (supports_query,supports_props){
return ["@supports (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(supports_query),") {",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__48115 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"props","props",453281727),supports_props,new cljs.core.Keyword(null,"hash","hash",-13781596),hash,new cljs.core.Keyword(null,"custom-selector","custom-selector",-474556277),custom_selector], null);
var G__48116 = options;
return (stylefy.impl.conversion.style__GT_css.cljs$core$IFn$_invoke$arity$2 ? stylefy.impl.conversion.style__GT_css.cljs$core$IFn$_invoke$arity$2(G__48115,G__48116) : stylefy.impl.conversion.style__GT_css.call(null,G__48115,G__48116));
})()),"}"].join('');
});
var css_supports = ((cljs.core.map_QMARK_(supports_rules))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__48105_SHARP_){
return handle_supports_rule(p1__48105_SHARP_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(supports_rules,p1__48105_SHARP_));
}),cljs.core.keys(supports_rules)):((cljs.core.vector_QMARK_(supports_rules))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__48106_SHARP_){
return handle_supports_rule(cljs.core.first(p1__48106_SHARP_),cljs.core.second(p1__48106_SHARP_));
}),supports_rules):null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,css_supports);
} else {
return null;
}
});
/**
 * Converts stylefy/manual definition into CSS.
 * 
 * stylefy's special keywords are not supported here.
 * 
 * Manually written selectors can contain media queries, those will be correctly nested by Garden
 * (media query will be defined first in CSS).
 */
stylefy.impl.conversion.convert_manual_styles = (function stylefy$impl$conversion$convert_manual_styles(p__48117,options){
var map__48118 = p__48117;
var map__48118__$1 = cljs.core.__destructure_map(map__48118);
var _style = map__48118__$1;
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48118__$1,new cljs.core.Keyword(null,"props","props",453281727));
var hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48118__$1,new cljs.core.Keyword(null,"hash","hash",-13781596));
var custom_selector = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48118__$1,new cljs.core.Keyword(null,"custom-selector","custom-selector",-474556277));
var temp__5804__auto__ = new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5804__auto__)){
var stylefy_manual_styles = temp__5804__auto__;
var css_parent_selector = (function (){var or__5045__auto__ = custom_selector;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return stylefy.impl.conversion.class_selector(hash);
}
})();
var css_manual_styles = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (manual_style){
var selector_and_props = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [css_parent_selector], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stylefy.impl.conversion.prepare_manual_style_map(manual_style)], null));
var css_class = garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,selector_and_props], 0));
return css_class;
}),stylefy_manual_styles);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,css_manual_styles);
} else {
return null;
}
});
/**
 * Converts the given style to CSS. Options are sent directly to Garden
 */
stylefy.impl.conversion.style__GT_css = (function stylefy$impl$conversion$style__GT_css(var_args){
var G__48120 = arguments.length;
switch (G__48120) {
case 1:
return stylefy.impl.conversion.style__GT_css.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return stylefy.impl.conversion.style__GT_css.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(stylefy.impl.conversion.style__GT_css.cljs$core$IFn$_invoke$arity$1 = (function (style){
return stylefy.impl.conversion.style__GT_css.cljs$core$IFn$_invoke$arity$2(style,cljs.core.PersistentArrayMap.EMPTY);
}));

(stylefy.impl.conversion.style__GT_css.cljs$core$IFn$_invoke$arity$2 = (function (style,options){
var css_class = stylefy.impl.conversion.convert_base_style_into_class(style,options);
var css_media_queries = stylefy.impl.conversion.convert_media_queries(style,options);
var css_feature_queries = stylefy.impl.conversion.convert_feature_queries(style,options);
var css_scoped_styles = stylefy.impl.conversion.convert_scoped_styles(style,options);
var css_manual_styles = stylefy.impl.conversion.convert_manual_styles(style,options);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(css_class),cljs.core.str.cljs$core$IFn$_invoke$arity$1(css_scoped_styles),cljs.core.str.cljs$core$IFn$_invoke$arity$1(css_media_queries),cljs.core.str.cljs$core$IFn$_invoke$arity$1(css_feature_queries),cljs.core.str.cljs$core$IFn$_invoke$arity$1(css_manual_styles)].join('');
}));

(stylefy.impl.conversion.style__GT_css.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=stylefy.impl.conversion.js.map
