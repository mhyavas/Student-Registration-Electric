goog.provide('hyperfiddle.electric_dom2');
goog.scope(function(){
  hyperfiddle.electric_dom2.goog$module$goog$object = goog.module.get('goog.object');
});
hyperfiddle.electric_dom2.nil_subject = (function hyperfiddle$electric_dom2$nil_subject(_BANG_){
(_BANG_.cljs$core$IFn$_invoke$arity$1 ? _BANG_.cljs$core$IFn$_invoke$arity$1(null) : _BANG_.call(null,null));

return (function (){
return cljs.core.List.EMPTY;
});
});
hyperfiddle.electric_dom2.unsupported = (function hyperfiddle$electric_dom2$unsupported(var_args){
var args__5775__auto__ = [];
var len__5769__auto___48532 = arguments.length;
var i__5770__auto___48533 = (0);
while(true){
if((i__5770__auto___48533 < len__5769__auto___48532)){
args__5775__auto__.push((arguments[i__5770__auto___48533]));

var G__48534 = (i__5770__auto___48533 + (1));
i__5770__auto___48533 = G__48534;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return hyperfiddle.electric_dom2.unsupported.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(hyperfiddle.electric_dom2.unsupported.cljs$core$IFn$_invoke$arity$variadic = (function (_){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Not available on this peer.",cljs.core.PersistentArrayMap.EMPTY);
}));

(hyperfiddle.electric_dom2.unsupported.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hyperfiddle.electric_dom2.unsupported.cljs$lang$applyTo = (function (seq48514){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48514));
}));

/**
 * See `with`
 */
hyperfiddle.electric_dom2.hook = (function() {
var hyperfiddle$electric_dom2$hook = null;
var hyperfiddle$electric_dom2$hook__1 = (function (x){
var G__48515 = x.parentNode;
if((G__48515 == null)){
return null;
} else {
return G__48515.removeChild(x);
}
});
var hyperfiddle$electric_dom2$hook__2 = (function (x,y){
return x.parentNode.insertBefore(x,y);
});
hyperfiddle$electric_dom2$hook = function(x,y){
switch(arguments.length){
case 1:
return hyperfiddle$electric_dom2$hook__1.call(this,x);
case 2:
return hyperfiddle$electric_dom2$hook__2.call(this,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hyperfiddle$electric_dom2$hook.cljs$core$IFn$_invoke$arity$1 = hyperfiddle$electric_dom2$hook__1;
hyperfiddle$electric_dom2$hook.cljs$core$IFn$_invoke$arity$2 = hyperfiddle$electric_dom2$hook__2;
return hyperfiddle$electric_dom2$hook;
})()
;
hyperfiddle.electric_dom2.by_id = (function hyperfiddle$electric_dom2$by_id(id){
return document.getElementById(id);
});
hyperfiddle.electric_dom2.new_node = (function hyperfiddle$electric_dom2$new_node(parent,type){
var el = (function (){var G__48516 = type;
var G__48516__$1 = (((G__48516 instanceof cljs.core.Keyword))?G__48516.fqn:null);
switch (G__48516__$1) {
case "comment":
return document.createComment("");

break;
case "text":
return goog.dom.createTextNode("");

break;
default:
return goog.dom.createElement(type);

}
})();
parent.appendChild(el);

return el;
});
hyperfiddle.electric_dom2._googDomSetTextContentNoWarn = (function hyperfiddle$electric_dom2$_googDomSetTextContentNoWarn(node,str){
return goog.dom.setTextContent(node,str);
});
hyperfiddle.electric_dom2.SVG_NS = "http://www.w3.org/2000/svg";
hyperfiddle.electric_dom2.XLINK_NS = "http://www.w3.org/1999/xlink";
hyperfiddle.electric_dom2.alias__GT_ns = new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null);
hyperfiddle.electric_dom2.attr_alias = (function hyperfiddle$electric_dom2$attr_alias(attr){
return cljs.core.second(cljs.core.re_find(/^([^:]+):/,cljs.core.name(attr)));
});
hyperfiddle.electric_dom2.resolve_attr_alias = (function hyperfiddle$electric_dom2$resolve_attr_alias(attr){
var attr__$1 = cljs.core.name(attr);
var temp__5802__auto__ = hyperfiddle.electric_dom2.attr_alias(attr__$1);
if(cljs.core.truth_(temp__5802__auto__)){
var alias = temp__5802__auto__;
var attr__$2 = clojure.string.replace_first(clojure.string.replace_first(attr__$1,alias,""),/^:/,"");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hyperfiddle.electric_dom2.alias__GT_ns.cljs$core$IFn$_invoke$arity$1 ? hyperfiddle.electric_dom2.alias__GT_ns.cljs$core$IFn$_invoke$arity$1(alias) : hyperfiddle.electric_dom2.alias__GT_ns.call(null,alias)),attr__$2], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,attr__$1], null);
}
});
hyperfiddle.electric_dom2.set_attribute_ns = (function hyperfiddle$electric_dom2$set_attribute_ns(var_args){
var G__48518 = arguments.length;
switch (G__48518) {
case 3:
return hyperfiddle.electric_dom2.set_attribute_ns.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return hyperfiddle.electric_dom2.set_attribute_ns.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hyperfiddle.electric_dom2.set_attribute_ns.cljs$core$IFn$_invoke$arity$3 = (function (node,attr,v){
var vec__48519 = hyperfiddle.electric_dom2.resolve_attr_alias(attr);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48519,(0),null);
var attr__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48519,(1),null);
return hyperfiddle.electric_dom2.set_attribute_ns.cljs$core$IFn$_invoke$arity$4(node,ns,attr__$1,v);
}));

(hyperfiddle.electric_dom2.set_attribute_ns.cljs$core$IFn$_invoke$arity$4 = (function (node,ns,attr,v){
return node.setAttributeNS(ns,attr,v);
}));

(hyperfiddle.electric_dom2.set_attribute_ns.cljs$lang$maxFixedArity = 4);

hyperfiddle.electric_dom2.set_property_BANG_ = (function hyperfiddle$electric_dom2$set_property_BANG_(var_args){
var G__48523 = arguments.length;
switch (G__48523) {
case 3:
return hyperfiddle.electric_dom2.set_property_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return hyperfiddle.electric_dom2.set_property_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hyperfiddle.electric_dom2.set_property_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (node,k,v){
return hyperfiddle.electric_dom2.set_property_BANG_.cljs$core$IFn$_invoke$arity$4(node,node.namespaceURI,k,v);
}));

(hyperfiddle.electric_dom2.set_property_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (node,ns,k,v){
var k__$1 = cljs.core.name(k);
var v__$1 = cljs.core.clj__GT_js(v);
if(cljs.core.truth_((function (){var and__5043__auto__ = (v__$1 == null);
if(and__5043__auto__){
return node.hasAttributeNS(null,k__$1);
} else {
return and__5043__auto__;
}
})())){
return node.removeAttributeNS(null,k__$1);
} else {
var G__48524 = k__$1;
switch (G__48524) {
case "style":
return goog.style.setStyle(node,v__$1);

break;
case "list":
return hyperfiddle.electric_dom2.set_attribute_ns.cljs$core$IFn$_invoke$arity$4(node,null,k__$1,v__$1);

break;
default:
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("http://www.w3.org/2000/svg",ns)) || ((!((hyperfiddle.electric_dom2.goog$module$goog$object.get(goog.dom.DIRECT_ATTRIBUTE_MAP_,k__$1) == null)))))){
return hyperfiddle.electric_dom2.set_attribute_ns.cljs$core$IFn$_invoke$arity$3(node,k__$1,v__$1);
} else {
if(cljs.core.truth_(hyperfiddle.electric_dom2.goog$module$goog$object.containsKey(node,k__$1))){
return hyperfiddle.electric_dom2.goog$module$goog$object.set(node,k__$1,v__$1);
} else {
return hyperfiddle.electric_dom2.set_attribute_ns.cljs$core$IFn$_invoke$arity$3(node,k__$1,v__$1);
}
}

}
}
}));

(hyperfiddle.electric_dom2.set_property_BANG_.cljs$lang$maxFixedArity = 4);

hyperfiddle.electric_dom2.unmount_prop = (function hyperfiddle$electric_dom2$unmount_prop(node,k,v){
return missionary.core.observe((function (_BANG_){
(_BANG_.cljs$core$IFn$_invoke$arity$1 ? _BANG_.cljs$core$IFn$_invoke$arity$1(null) : _BANG_.call(null,null));

return (function (){
return hyperfiddle.electric_dom2.set_property_BANG_.cljs$core$IFn$_invoke$arity$3(node,k,v);
});
}));
});
/**
 * Due to a bug in both Webkit and FF, input type range's knob renders in the
 *   wrong place if value is set after `min` and `max`, and `max` is above 100.
 *   Other UI libs circumvent this issue by setting `value` last.
 */
hyperfiddle.electric_dom2.LAST_PROPS = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("hyperfiddle.electric-dom2","value","hyperfiddle.electric-dom2/value",1801998999)], null);
/**
 * Sort props by key to ensure they are applied in a predefined order. See `LAST-PROPS`.
 */
hyperfiddle.electric_dom2.ordered_props = (function hyperfiddle$electric_dom2$ordered_props(props_map){
var props = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,props_map,hyperfiddle.electric_dom2.LAST_PROPS);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(props),cljs.core.seq(cljs.core.select_keys(props_map,hyperfiddle.electric_dom2.LAST_PROPS)));
});
hyperfiddle.electric_dom2.parse_class = (function hyperfiddle$electric_dom2$parse_class(xs){
if(((typeof xs === 'string') || ((((xs instanceof cljs.core.Keyword)) || ((xs instanceof cljs.core.Symbol)))))){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(xs),/\s+/);
} else {
if(((cljs.core.vector_QMARK_(xs)) || (((cljs.core.seq_QMARK_(xs)) || (((cljs.core.list_QMARK_(xs)) || (cljs.core.set_QMARK_(xs)))))))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric_dom2.parse_class),cljs.core.distinct.cljs$core$IFn$_invoke$arity$0()),xs);
} else {
if((xs == null)){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("don't know how to parse into a classlist",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),xs], null));

}
}
}
});
hyperfiddle.electric_dom2.register_class_BANG_ = (function hyperfiddle$electric_dom2$register_class_BANG_(node,class$){
var refs = (function (){var or__5045__auto__ = node.hyperfiddle_electric_dom2_class_refs;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
node.classList.add(class$);

return (node.hyperfiddle_electric_dom2_class_refs = cljs.core.update.cljs$core$IFn$_invoke$arity$3(refs,class$,(function (cnt){
return ((function (){var or__5045__auto__ = cnt;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})() + (1));
})));
});
hyperfiddle.electric_dom2.unregister_class_BANG_ = (function hyperfiddle$electric_dom2$unregister_class_BANG_(node,class$){
var refs = (function (){var or__5045__auto__ = node.hyperfiddle_electric_dom2_class_refs;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var refs__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.get.cljs$core$IFn$_invoke$arity$2(refs,class$)))?(function (){
node.classList.remove(class$);

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(refs,class$);
})()
:cljs.core.update.cljs$core$IFn$_invoke$arity$3(refs,class$,cljs.core.dec));
return (node.hyperfiddle_electric_dom2_class_refs = refs__$1);
});
hyperfiddle.electric_dom2.set_val = (function hyperfiddle$electric_dom2$set_val(node,v){
return (node.value = cljs.core.str.cljs$core$IFn$_invoke$arity$1(v));
});

//# sourceMappingURL=hyperfiddle.electric_dom2.js.map
