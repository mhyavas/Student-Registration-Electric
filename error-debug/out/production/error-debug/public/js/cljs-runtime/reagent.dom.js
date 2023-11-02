goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__32645 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__32646 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__32646);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__32652 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__32653 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__32653);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__32652);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__32645);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__32664 = arguments.length;
switch (G__32664) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template._STAR_current_default_compiler_STAR_);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__32673 = ((cljs.core.map_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compiler","compiler",-267926731).cljs$core$IFn$_invoke$arity$1(callback_or_compiler),new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null):((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template._STAR_current_default_compiler_STAR_,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,null], null)
));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32673,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32673,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__32685_32710 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__32686_32711 = null;
var count__32687_32712 = (0);
var i__32688_32713 = (0);
while(true){
if((i__32688_32713 < count__32687_32712)){
var vec__32699_32714 = chunk__32686_32711.cljs$core$IIndexed$_nth$arity$2(null,i__32688_32713);
var container_32715 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32699_32714,(0),null);
var comp_32716 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32699_32714,(1),null);
reagent.dom.re_render_component(comp_32716,container_32715);


var G__32717 = seq__32685_32710;
var G__32718 = chunk__32686_32711;
var G__32719 = count__32687_32712;
var G__32720 = (i__32688_32713 + (1));
seq__32685_32710 = G__32717;
chunk__32686_32711 = G__32718;
count__32687_32712 = G__32719;
i__32688_32713 = G__32720;
continue;
} else {
var temp__5804__auto___32722 = cljs.core.seq(seq__32685_32710);
if(temp__5804__auto___32722){
var seq__32685_32723__$1 = temp__5804__auto___32722;
if(cljs.core.chunked_seq_QMARK_(seq__32685_32723__$1)){
var c__5568__auto___32724 = cljs.core.chunk_first(seq__32685_32723__$1);
var G__32725 = cljs.core.chunk_rest(seq__32685_32723__$1);
var G__32726 = c__5568__auto___32724;
var G__32727 = cljs.core.count(c__5568__auto___32724);
var G__32728 = (0);
seq__32685_32710 = G__32725;
chunk__32686_32711 = G__32726;
count__32687_32712 = G__32727;
i__32688_32713 = G__32728;
continue;
} else {
var vec__32702_32729 = cljs.core.first(seq__32685_32723__$1);
var container_32730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32702_32729,(0),null);
var comp_32731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32702_32729,(1),null);
reagent.dom.re_render_component(comp_32731,container_32730);


var G__32733 = cljs.core.next(seq__32685_32723__$1);
var G__32734 = null;
var G__32735 = (0);
var G__32736 = (0);
seq__32685_32710 = G__32733;
chunk__32686_32711 = G__32734;
count__32687_32712 = G__32735;
i__32688_32713 = G__32736;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map