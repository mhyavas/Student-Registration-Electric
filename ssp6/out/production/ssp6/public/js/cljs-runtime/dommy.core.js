goog.provide('dommy.core');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_(data)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(dommy.core.selector,data));
} else {
if(((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))){
return cljs.core.name(data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__5045__auto__ = elem.textContent;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str(k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var G__48266 = arguments.length;
switch (G__48266) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(window.getComputedStyle(elem));
}));

(dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str(k)]);
}));

(dommy.core.style.cljs$lang$maxFixedArity = 2);

dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,k);
if(cljs.core.seq(pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5802__auto__ = elem.classList;
if(cljs.core.truth_(temp__5802__auto__)){
var class_list = temp__5802__auto__;
return class_list.contains(c__$1);
} else {
var temp__5804__auto__ = dommy.core.class$(elem);
if(cljs.core.truth_(temp__5804__auto__)){
var class_name = temp__5804__auto__;
var temp__5804__auto____$1 = dommy.utils.class_index(class_name,c__$1);
if(cljs.core.truth_(temp__5804__auto____$1)){
var i = temp__5804__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var G__48278 = arguments.length;
switch (G__48278) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array(base.querySelectorAll(dommy.core.selector(selector)));
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
}));

(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(document,selector);
}));

(dommy.core.matches_pred.cljs$lang$maxFixedArity = 2);

/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var G__48287 = arguments.length;
switch (G__48287) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__48285_SHARP_){
return (!((p1__48285_SHARP_ === base)));
}),dommy.core.ancestors(elem))));
}));

(dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3(document.body,elem,selector);
}));

(dommy.core.closest.cljs$lang$maxFixedArity = 3);

/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if((!((void 0 === elem.textContent)))){
(elem.textContent = text);
} else {
(elem.innerText = text);
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
(elem.innerHTML = html);

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
(elem.value = value);

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return (elem.className = c);
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___48822 = arguments.length;
var i__5770__auto___48823 = (0);
while(true){
if((i__5770__auto___48823 < len__5769__auto___48822)){
args__5775__auto__.push((arguments[i__5770__auto___48823]));

var G__48824 = (i__5770__auto___48823 + (1));
i__5770__auto___48823 = G__48824;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__48308_48825 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__48309_48826 = null;
var count__48310_48827 = (0);
var i__48311_48828 = (0);
while(true){
if((i__48311_48828 < count__48310_48827)){
var vec__48321_48829 = chunk__48309_48826.cljs$core$IIndexed$_nth$arity$2(null,i__48311_48828);
var k_48830 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48321_48829,(0),null);
var v_48831 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48321_48829,(1),null);
style.setProperty(dommy.utils.as_str(k_48830),v_48831);


var G__48832 = seq__48308_48825;
var G__48833 = chunk__48309_48826;
var G__48834 = count__48310_48827;
var G__48835 = (i__48311_48828 + (1));
seq__48308_48825 = G__48832;
chunk__48309_48826 = G__48833;
count__48310_48827 = G__48834;
i__48311_48828 = G__48835;
continue;
} else {
var temp__5804__auto___48836 = cljs.core.seq(seq__48308_48825);
if(temp__5804__auto___48836){
var seq__48308_48837__$1 = temp__5804__auto___48836;
if(cljs.core.chunked_seq_QMARK_(seq__48308_48837__$1)){
var c__5568__auto___48838 = cljs.core.chunk_first(seq__48308_48837__$1);
var G__48839 = cljs.core.chunk_rest(seq__48308_48837__$1);
var G__48840 = c__5568__auto___48838;
var G__48841 = cljs.core.count(c__5568__auto___48838);
var G__48842 = (0);
seq__48308_48825 = G__48839;
chunk__48309_48826 = G__48840;
count__48310_48827 = G__48841;
i__48311_48828 = G__48842;
continue;
} else {
var vec__48324_48843 = cljs.core.first(seq__48308_48837__$1);
var k_48844 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48324_48843,(0),null);
var v_48845 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48324_48843,(1),null);
style.setProperty(dommy.utils.as_str(k_48844),v_48845);


var G__48846 = cljs.core.next(seq__48308_48837__$1);
var G__48847 = null;
var G__48848 = (0);
var G__48849 = (0);
seq__48308_48825 = G__48846;
chunk__48309_48826 = G__48847;
count__48310_48827 = G__48848;
i__48311_48828 = G__48849;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq48299){
var G__48300 = cljs.core.first(seq48299);
var seq48299__$1 = cljs.core.next(seq48299);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48300,seq48299__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___48850 = arguments.length;
var i__5770__auto___48851 = (0);
while(true){
if((i__5770__auto___48851 < len__5769__auto___48850)){
args__5775__auto__.push((arguments[i__5770__auto___48851]));

var G__48852 = (i__5770__auto___48851 + (1));
i__5770__auto___48851 = G__48852;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__48337_48853 = cljs.core.seq(keywords);
var chunk__48338_48854 = null;
var count__48339_48855 = (0);
var i__48340_48856 = (0);
while(true){
if((i__48340_48856 < count__48339_48855)){
var kw_48857 = chunk__48338_48854.cljs$core$IIndexed$_nth$arity$2(null,i__48340_48856);
style.removeProperty(dommy.utils.as_str(kw_48857));


var G__48858 = seq__48337_48853;
var G__48859 = chunk__48338_48854;
var G__48860 = count__48339_48855;
var G__48861 = (i__48340_48856 + (1));
seq__48337_48853 = G__48858;
chunk__48338_48854 = G__48859;
count__48339_48855 = G__48860;
i__48340_48856 = G__48861;
continue;
} else {
var temp__5804__auto___48862 = cljs.core.seq(seq__48337_48853);
if(temp__5804__auto___48862){
var seq__48337_48863__$1 = temp__5804__auto___48862;
if(cljs.core.chunked_seq_QMARK_(seq__48337_48863__$1)){
var c__5568__auto___48864 = cljs.core.chunk_first(seq__48337_48863__$1);
var G__48865 = cljs.core.chunk_rest(seq__48337_48863__$1);
var G__48866 = c__5568__auto___48864;
var G__48867 = cljs.core.count(c__5568__auto___48864);
var G__48868 = (0);
seq__48337_48853 = G__48865;
chunk__48338_48854 = G__48866;
count__48339_48855 = G__48867;
i__48340_48856 = G__48868;
continue;
} else {
var kw_48869 = cljs.core.first(seq__48337_48863__$1);
style.removeProperty(dommy.utils.as_str(kw_48869));


var G__48870 = cljs.core.next(seq__48337_48863__$1);
var G__48871 = null;
var G__48872 = (0);
var G__48873 = (0);
seq__48337_48853 = G__48870;
chunk__48338_48854 = G__48871;
count__48339_48855 = G__48872;
i__48340_48856 = G__48873;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq48331){
var G__48332 = cljs.core.first(seq48331);
var seq48331__$1 = cljs.core.next(seq48331);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48332,seq48331__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___48874 = arguments.length;
var i__5770__auto___48875 = (0);
while(true){
if((i__5770__auto___48875 < len__5769__auto___48874)){
args__5775__auto__.push((arguments[i__5770__auto___48875]));

var G__48876 = (i__5770__auto___48875 + (1));
i__5770__auto___48875 = G__48876;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__48353_48877 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__48354_48878 = null;
var count__48355_48879 = (0);
var i__48356_48880 = (0);
while(true){
if((i__48356_48880 < count__48355_48879)){
var vec__48365_48881 = chunk__48354_48878.cljs$core$IIndexed$_nth$arity$2(null,i__48356_48880);
var k_48882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48365_48881,(0),null);
var v_48883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48365_48881,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_48882,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_48883),"px"].join('')], 0));


var G__48884 = seq__48353_48877;
var G__48885 = chunk__48354_48878;
var G__48886 = count__48355_48879;
var G__48887 = (i__48356_48880 + (1));
seq__48353_48877 = G__48884;
chunk__48354_48878 = G__48885;
count__48355_48879 = G__48886;
i__48356_48880 = G__48887;
continue;
} else {
var temp__5804__auto___48888 = cljs.core.seq(seq__48353_48877);
if(temp__5804__auto___48888){
var seq__48353_48889__$1 = temp__5804__auto___48888;
if(cljs.core.chunked_seq_QMARK_(seq__48353_48889__$1)){
var c__5568__auto___48890 = cljs.core.chunk_first(seq__48353_48889__$1);
var G__48891 = cljs.core.chunk_rest(seq__48353_48889__$1);
var G__48892 = c__5568__auto___48890;
var G__48893 = cljs.core.count(c__5568__auto___48890);
var G__48894 = (0);
seq__48353_48877 = G__48891;
chunk__48354_48878 = G__48892;
count__48355_48879 = G__48893;
i__48356_48880 = G__48894;
continue;
} else {
var vec__48372_48895 = cljs.core.first(seq__48353_48889__$1);
var k_48896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48372_48895,(0),null);
var v_48897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48372_48895,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_48896,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_48897),"px"].join('')], 0));


var G__48898 = cljs.core.next(seq__48353_48889__$1);
var G__48899 = null;
var G__48900 = (0);
var G__48901 = (0);
seq__48353_48877 = G__48898;
chunk__48354_48878 = G__48899;
count__48355_48879 = G__48900;
i__48356_48880 = G__48901;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq48351){
var G__48352 = cljs.core.first(seq48351);
var seq48351__$1 = cljs.core.next(seq48351);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48352,seq48351__$1);
}));

/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(var_args){
var G__48381 = arguments.length;
switch (G__48381) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___48903 = arguments.length;
var i__5770__auto___48904 = (0);
while(true){
if((i__5770__auto___48904 < len__5769__auto___48903)){
args_arr__5794__auto__.push((arguments[i__5770__auto___48904]));

var G__48905 = (i__5770__auto___48904 + (1));
i__5770__auto___48904 = G__48905;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5795__auto__);

}
});

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,dommy.utils.as_str(k));
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_(v)){
var G__48389 = elem;
(G__48389[k__$1] = v);

return G__48389;
} else {
var G__48390 = elem;
G__48390.setAttribute(k__$1,v);

return G__48390;
}
} else {
return null;
}
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__48391_48906 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__48392_48907 = null;
var count__48393_48908 = (0);
var i__48394_48909 = (0);
while(true){
if((i__48394_48909 < count__48393_48908)){
var vec__48404_48910 = chunk__48392_48907.cljs$core$IIndexed$_nth$arity$2(null,i__48394_48909);
var k_48911__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48404_48910,(0),null);
var v_48912__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48404_48910,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_48911__$1,v_48912__$1);


var G__48913 = seq__48391_48906;
var G__48914 = chunk__48392_48907;
var G__48915 = count__48393_48908;
var G__48916 = (i__48394_48909 + (1));
seq__48391_48906 = G__48913;
chunk__48392_48907 = G__48914;
count__48393_48908 = G__48915;
i__48394_48909 = G__48916;
continue;
} else {
var temp__5804__auto___48917 = cljs.core.seq(seq__48391_48906);
if(temp__5804__auto___48917){
var seq__48391_48918__$1 = temp__5804__auto___48917;
if(cljs.core.chunked_seq_QMARK_(seq__48391_48918__$1)){
var c__5568__auto___48919 = cljs.core.chunk_first(seq__48391_48918__$1);
var G__48920 = cljs.core.chunk_rest(seq__48391_48918__$1);
var G__48921 = c__5568__auto___48919;
var G__48922 = cljs.core.count(c__5568__auto___48919);
var G__48923 = (0);
seq__48391_48906 = G__48920;
chunk__48392_48907 = G__48921;
count__48393_48908 = G__48922;
i__48394_48909 = G__48923;
continue;
} else {
var vec__48407_48924 = cljs.core.first(seq__48391_48918__$1);
var k_48925__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48407_48924,(0),null);
var v_48926__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48407_48924,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_48925__$1,v_48926__$1);


var G__48927 = cljs.core.next(seq__48391_48918__$1);
var G__48928 = null;
var G__48929 = (0);
var G__48930 = (0);
seq__48391_48906 = G__48927;
chunk__48392_48907 = G__48928;
count__48393_48908 = G__48929;
i__48394_48909 = G__48930;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq48377){
var G__48378 = cljs.core.first(seq48377);
var seq48377__$1 = cljs.core.next(seq48377);
var G__48379 = cljs.core.first(seq48377__$1);
var seq48377__$2 = cljs.core.next(seq48377__$1);
var G__48380 = cljs.core.first(seq48377__$2);
var seq48377__$3 = cljs.core.next(seq48377__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48378,G__48379,G__48380,seq48377__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__48417 = arguments.length;
switch (G__48417) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___48932 = arguments.length;
var i__5770__auto___48933 = (0);
while(true){
if((i__5770__auto___48933 < len__5769__auto___48932)){
args_arr__5794__auto__.push((arguments[i__5770__auto___48933]));

var G__48934 = (i__5770__auto___48933 + (1));
i__5770__auto___48933 = G__48934;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_48935__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__48418 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__48418.cljs$core$IFn$_invoke$arity$1 ? fexpr__48418.cljs$core$IFn$_invoke$arity$1(k_48935__$1) : fexpr__48418.call(null,k_48935__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_48935__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__48419_48936 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__48420_48937 = null;
var count__48421_48938 = (0);
var i__48422_48939 = (0);
while(true){
if((i__48422_48939 < count__48421_48938)){
var k_48940__$1 = chunk__48420_48937.cljs$core$IIndexed$_nth$arity$2(null,i__48422_48939);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_48940__$1);


var G__48941 = seq__48419_48936;
var G__48942 = chunk__48420_48937;
var G__48943 = count__48421_48938;
var G__48944 = (i__48422_48939 + (1));
seq__48419_48936 = G__48941;
chunk__48420_48937 = G__48942;
count__48421_48938 = G__48943;
i__48422_48939 = G__48944;
continue;
} else {
var temp__5804__auto___48945 = cljs.core.seq(seq__48419_48936);
if(temp__5804__auto___48945){
var seq__48419_48946__$1 = temp__5804__auto___48945;
if(cljs.core.chunked_seq_QMARK_(seq__48419_48946__$1)){
var c__5568__auto___48947 = cljs.core.chunk_first(seq__48419_48946__$1);
var G__48948 = cljs.core.chunk_rest(seq__48419_48946__$1);
var G__48949 = c__5568__auto___48947;
var G__48950 = cljs.core.count(c__5568__auto___48947);
var G__48951 = (0);
seq__48419_48936 = G__48948;
chunk__48420_48937 = G__48949;
count__48421_48938 = G__48950;
i__48422_48939 = G__48951;
continue;
} else {
var k_48952__$1 = cljs.core.first(seq__48419_48946__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_48952__$1);


var G__48953 = cljs.core.next(seq__48419_48946__$1);
var G__48954 = null;
var G__48955 = (0);
var G__48956 = (0);
seq__48419_48936 = G__48953;
chunk__48420_48937 = G__48954;
count__48421_48938 = G__48955;
i__48422_48939 = G__48956;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq48413){
var G__48414 = cljs.core.first(seq48413);
var seq48413__$1 = cljs.core.next(seq48413);
var G__48415 = cljs.core.first(seq48413__$1);
var seq48413__$2 = cljs.core.next(seq48413__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48414,G__48415,seq48413__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__48424 = arguments.length;
switch (G__48424) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,cljs.core.boolean$(dommy.core.attr(elem,k)));
}));

(dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
} else {
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
}
}));

(dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var G__48429 = arguments.length;
switch (G__48429) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___48959 = arguments.length;
var i__5770__auto___48960 = (0);
while(true){
if((i__5770__auto___48960 < len__5769__auto___48959)){
args_arr__5794__auto__.push((arguments[i__5770__auto___48960]));

var G__48961 = (i__5770__auto___48960 + (1));
i__5770__auto___48960 = G__48961;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim(dommy.utils.as_str(classes)).split(/\s+/);
if(cljs.core.seq(classes__$1)){
var temp__5802__auto___48962 = elem.classList;
if(cljs.core.truth_(temp__5802__auto___48962)){
var class_list_48963 = temp__5802__auto___48962;
var seq__48430_48964 = cljs.core.seq(classes__$1);
var chunk__48431_48965 = null;
var count__48432_48966 = (0);
var i__48433_48967 = (0);
while(true){
if((i__48433_48967 < count__48432_48966)){
var c_48968 = chunk__48431_48965.cljs$core$IIndexed$_nth$arity$2(null,i__48433_48967);
class_list_48963.add(c_48968);


var G__48969 = seq__48430_48964;
var G__48970 = chunk__48431_48965;
var G__48971 = count__48432_48966;
var G__48972 = (i__48433_48967 + (1));
seq__48430_48964 = G__48969;
chunk__48431_48965 = G__48970;
count__48432_48966 = G__48971;
i__48433_48967 = G__48972;
continue;
} else {
var temp__5804__auto___48973 = cljs.core.seq(seq__48430_48964);
if(temp__5804__auto___48973){
var seq__48430_48974__$1 = temp__5804__auto___48973;
if(cljs.core.chunked_seq_QMARK_(seq__48430_48974__$1)){
var c__5568__auto___48975 = cljs.core.chunk_first(seq__48430_48974__$1);
var G__48976 = cljs.core.chunk_rest(seq__48430_48974__$1);
var G__48977 = c__5568__auto___48975;
var G__48978 = cljs.core.count(c__5568__auto___48975);
var G__48979 = (0);
seq__48430_48964 = G__48976;
chunk__48431_48965 = G__48977;
count__48432_48966 = G__48978;
i__48433_48967 = G__48979;
continue;
} else {
var c_48980 = cljs.core.first(seq__48430_48974__$1);
class_list_48963.add(c_48980);


var G__48981 = cljs.core.next(seq__48430_48974__$1);
var G__48982 = null;
var G__48983 = (0);
var G__48984 = (0);
seq__48430_48964 = G__48981;
chunk__48431_48965 = G__48982;
count__48432_48966 = G__48983;
i__48433_48967 = G__48984;
continue;
}
} else {
}
}
break;
}
} else {
var seq__48434_48985 = cljs.core.seq(classes__$1);
var chunk__48435_48986 = null;
var count__48436_48987 = (0);
var i__48437_48988 = (0);
while(true){
if((i__48437_48988 < count__48436_48987)){
var c_48989 = chunk__48435_48986.cljs$core$IIndexed$_nth$arity$2(null,i__48437_48988);
var class_name_48990 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_48990,c_48989))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_48990 === ""))?c_48989:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_48990)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_48989)].join('')));
}


var G__48991 = seq__48434_48985;
var G__48992 = chunk__48435_48986;
var G__48993 = count__48436_48987;
var G__48994 = (i__48437_48988 + (1));
seq__48434_48985 = G__48991;
chunk__48435_48986 = G__48992;
count__48436_48987 = G__48993;
i__48437_48988 = G__48994;
continue;
} else {
var temp__5804__auto___48995 = cljs.core.seq(seq__48434_48985);
if(temp__5804__auto___48995){
var seq__48434_48996__$1 = temp__5804__auto___48995;
if(cljs.core.chunked_seq_QMARK_(seq__48434_48996__$1)){
var c__5568__auto___48997 = cljs.core.chunk_first(seq__48434_48996__$1);
var G__48998 = cljs.core.chunk_rest(seq__48434_48996__$1);
var G__48999 = c__5568__auto___48997;
var G__49000 = cljs.core.count(c__5568__auto___48997);
var G__49001 = (0);
seq__48434_48985 = G__48998;
chunk__48435_48986 = G__48999;
count__48436_48987 = G__49000;
i__48437_48988 = G__49001;
continue;
} else {
var c_49002 = cljs.core.first(seq__48434_48996__$1);
var class_name_49003 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_49003,c_49002))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_49003 === ""))?c_49002:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_49003)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_49002)].join('')));
}


var G__49004 = cljs.core.next(seq__48434_48996__$1);
var G__49005 = null;
var G__49006 = (0);
var G__49007 = (0);
seq__48434_48985 = G__49004;
chunk__48435_48986 = G__49005;
count__48436_48987 = G__49006;
i__48437_48988 = G__49007;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
}));

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__48444_49008 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__48445_49009 = null;
var count__48446_49010 = (0);
var i__48447_49011 = (0);
while(true){
if((i__48447_49011 < count__48446_49010)){
var c_49012 = chunk__48445_49009.cljs$core$IIndexed$_nth$arity$2(null,i__48447_49011);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_49012);


var G__49013 = seq__48444_49008;
var G__49014 = chunk__48445_49009;
var G__49015 = count__48446_49010;
var G__49016 = (i__48447_49011 + (1));
seq__48444_49008 = G__49013;
chunk__48445_49009 = G__49014;
count__48446_49010 = G__49015;
i__48447_49011 = G__49016;
continue;
} else {
var temp__5804__auto___49017 = cljs.core.seq(seq__48444_49008);
if(temp__5804__auto___49017){
var seq__48444_49018__$1 = temp__5804__auto___49017;
if(cljs.core.chunked_seq_QMARK_(seq__48444_49018__$1)){
var c__5568__auto___49019 = cljs.core.chunk_first(seq__48444_49018__$1);
var G__49020 = cljs.core.chunk_rest(seq__48444_49018__$1);
var G__49021 = c__5568__auto___49019;
var G__49022 = cljs.core.count(c__5568__auto___49019);
var G__49023 = (0);
seq__48444_49008 = G__49020;
chunk__48445_49009 = G__49021;
count__48446_49010 = G__49022;
i__48447_49011 = G__49023;
continue;
} else {
var c_49024 = cljs.core.first(seq__48444_49018__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_49024);


var G__49025 = cljs.core.next(seq__48444_49018__$1);
var G__49026 = null;
var G__49027 = (0);
var G__49028 = (0);
seq__48444_49008 = G__49025;
chunk__48445_49009 = G__49026;
count__48446_49010 = G__49027;
i__48447_49011 = G__49028;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq48426){
var G__48427 = cljs.core.first(seq48426);
var seq48426__$1 = cljs.core.next(seq48426);
var G__48428 = cljs.core.first(seq48426__$1);
var seq48426__$2 = cljs.core.next(seq48426__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48427,G__48428,seq48426__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__48459 = arguments.length;
switch (G__48459) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___49030 = arguments.length;
var i__5770__auto___49031 = (0);
while(true){
if((i__5770__auto___49031 < len__5769__auto___49030)){
args_arr__5794__auto__.push((arguments[i__5770__auto___49031]));

var G__49032 = (i__5770__auto___49031 + (1));
i__5770__auto___49031 = G__49032;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5802__auto___49033 = elem.classList;
if(cljs.core.truth_(temp__5802__auto___49033)){
var class_list_49034 = temp__5802__auto___49033;
class_list_49034.remove(c__$1);
} else {
var class_name_49035 = dommy.core.class$(elem);
var new_class_name_49036 = dommy.utils.remove_class_str(class_name_49035,c__$1);
if((class_name_49035 === new_class_name_49036)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_49036);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__48461 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__48462 = null;
var count__48463 = (0);
var i__48464 = (0);
while(true){
if((i__48464 < count__48463)){
var c = chunk__48462.cljs$core$IIndexed$_nth$arity$2(null,i__48464);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__49037 = seq__48461;
var G__49038 = chunk__48462;
var G__49039 = count__48463;
var G__49040 = (i__48464 + (1));
seq__48461 = G__49037;
chunk__48462 = G__49038;
count__48463 = G__49039;
i__48464 = G__49040;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__48461);
if(temp__5804__auto__){
var seq__48461__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48461__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__48461__$1);
var G__49041 = cljs.core.chunk_rest(seq__48461__$1);
var G__49042 = c__5568__auto__;
var G__49043 = cljs.core.count(c__5568__auto__);
var G__49044 = (0);
seq__48461 = G__49041;
chunk__48462 = G__49042;
count__48463 = G__49043;
i__48464 = G__49044;
continue;
} else {
var c = cljs.core.first(seq__48461__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__49045 = cljs.core.next(seq__48461__$1);
var G__49046 = null;
var G__49047 = (0);
var G__49048 = (0);
seq__48461 = G__49045;
chunk__48462 = G__49046;
count__48463 = G__49047;
i__48464 = G__49048;
continue;
}
} else {
return null;
}
}
break;
}
}));

/** @this {Function} */
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq48456){
var G__48457 = cljs.core.first(seq48456);
var seq48456__$1 = cljs.core.next(seq48456);
var G__48458 = cljs.core.first(seq48456__$1);
var seq48456__$2 = cljs.core.next(seq48456__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48457,G__48458,seq48456__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__48467 = arguments.length;
switch (G__48467) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5802__auto___49050 = elem.classList;
if(cljs.core.truth_(temp__5802__auto___49050)){
var class_list_49051 = temp__5802__auto___49050;
class_list_49051.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3(elem,c__$1,(!(dommy.core.has_class_QMARK_(elem,c__$1))));
}

return elem;
}));

(dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
} else {
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
}

return elem;
}));

(dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var G__48472 = arguments.length;
switch (G__48472) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none")], 0));
}));

(dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,dommy.core.hidden_QMARK_(elem));
}));

(dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect(elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var G__48478 = arguments.length;
switch (G__48478) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str(tag));
}));

(dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str(tag_ns),dommy.utils.as_str(tag));
}));

(dommy.core.create_element.cljs$lang$maxFixedArity = 2);

dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_(elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var G__48483 = arguments.length;
switch (G__48483) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___49061 = arguments.length;
var i__5770__auto___49062 = (0);
while(true){
if((i__5770__auto___49062 < len__5769__auto___49061)){
args_arr__5794__auto__.push((arguments[i__5770__auto___49062]));

var G__49063 = (i__5770__auto___49062 + (1));
i__5770__auto___49062 = G__49063;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__48485 = parent;
G__48485.appendChild(child);

return G__48485;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__48488_49064 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__48489_49065 = null;
var count__48490_49066 = (0);
var i__48491_49067 = (0);
while(true){
if((i__48491_49067 < count__48490_49066)){
var c_49068 = chunk__48489_49065.cljs$core$IIndexed$_nth$arity$2(null,i__48491_49067);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_49068);


var G__49069 = seq__48488_49064;
var G__49070 = chunk__48489_49065;
var G__49071 = count__48490_49066;
var G__49072 = (i__48491_49067 + (1));
seq__48488_49064 = G__49069;
chunk__48489_49065 = G__49070;
count__48490_49066 = G__49071;
i__48491_49067 = G__49072;
continue;
} else {
var temp__5804__auto___49073 = cljs.core.seq(seq__48488_49064);
if(temp__5804__auto___49073){
var seq__48488_49074__$1 = temp__5804__auto___49073;
if(cljs.core.chunked_seq_QMARK_(seq__48488_49074__$1)){
var c__5568__auto___49075 = cljs.core.chunk_first(seq__48488_49074__$1);
var G__49076 = cljs.core.chunk_rest(seq__48488_49074__$1);
var G__49077 = c__5568__auto___49075;
var G__49078 = cljs.core.count(c__5568__auto___49075);
var G__49079 = (0);
seq__48488_49064 = G__49076;
chunk__48489_49065 = G__49077;
count__48490_49066 = G__49078;
i__48491_49067 = G__49079;
continue;
} else {
var c_49080 = cljs.core.first(seq__48488_49074__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_49080);


var G__49081 = cljs.core.next(seq__48488_49074__$1);
var G__49082 = null;
var G__49083 = (0);
var G__49084 = (0);
seq__48488_49064 = G__49081;
chunk__48489_49065 = G__49082;
count__48490_49066 = G__49083;
i__48491_49067 = G__49084;
continue;
}
} else {
}
}
break;
}

return parent;
}));

/** @this {Function} */
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq48480){
var G__48481 = cljs.core.first(seq48480);
var seq48480__$1 = cljs.core.next(seq48480);
var G__48482 = cljs.core.first(seq48480__$1);
var seq48480__$2 = cljs.core.next(seq48480__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48481,G__48482,seq48480__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__48503 = arguments.length;
switch (G__48503) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___49087 = arguments.length;
var i__5770__auto___49088 = (0);
while(true){
if((i__5770__auto___49088 < len__5769__auto___49087)){
args_arr__5794__auto__.push((arguments[i__5770__auto___49088]));

var G__49089 = (i__5770__auto___49088 + (1));
i__5770__auto___49088 = G__49089;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__48504 = parent;
G__48504.insertBefore(child,parent.firstChild);

return G__48504;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__48505_49090 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__48506_49091 = null;
var count__48507_49092 = (0);
var i__48508_49093 = (0);
while(true){
if((i__48508_49093 < count__48507_49092)){
var c_49095 = chunk__48506_49091.cljs$core$IIndexed$_nth$arity$2(null,i__48508_49093);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_49095);


var G__49099 = seq__48505_49090;
var G__49100 = chunk__48506_49091;
var G__49101 = count__48507_49092;
var G__49102 = (i__48508_49093 + (1));
seq__48505_49090 = G__49099;
chunk__48506_49091 = G__49100;
count__48507_49092 = G__49101;
i__48508_49093 = G__49102;
continue;
} else {
var temp__5804__auto___49103 = cljs.core.seq(seq__48505_49090);
if(temp__5804__auto___49103){
var seq__48505_49104__$1 = temp__5804__auto___49103;
if(cljs.core.chunked_seq_QMARK_(seq__48505_49104__$1)){
var c__5568__auto___49105 = cljs.core.chunk_first(seq__48505_49104__$1);
var G__49106 = cljs.core.chunk_rest(seq__48505_49104__$1);
var G__49107 = c__5568__auto___49105;
var G__49108 = cljs.core.count(c__5568__auto___49105);
var G__49109 = (0);
seq__48505_49090 = G__49106;
chunk__48506_49091 = G__49107;
count__48507_49092 = G__49108;
i__48508_49093 = G__49109;
continue;
} else {
var c_49110 = cljs.core.first(seq__48505_49104__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_49110);


var G__49111 = cljs.core.next(seq__48505_49104__$1);
var G__49112 = null;
var G__49113 = (0);
var G__49114 = (0);
seq__48505_49090 = G__49111;
chunk__48506_49091 = G__49112;
count__48507_49092 = G__49113;
i__48508_49093 = G__49114;
continue;
}
} else {
}
}
break;
}

return parent;
}));

/** @this {Function} */
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq48500){
var G__48501 = cljs.core.first(seq48500);
var seq48500__$1 = cljs.core.next(seq48500);
var G__48502 = cljs.core.first(seq48500__$1);
var seq48500__$2 = cljs.core.next(seq48500__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48501,G__48502,seq48500__$2);
}));

(dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent(other);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__5802__auto___49115 = other.nextSibling;
if(cljs.core.truth_(temp__5802__auto___49115)){
var next_49116 = temp__5802__auto___49115;
dommy.core.insert_before_BANG_(elem,next_49116);
} else {
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.parent(other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.clear_BANG_(p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var G__48519 = arguments.length;
switch (G__48519) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2(p,elem);
}));

(dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__48532 = p;
G__48532.removeChild(elem);

return G__48532;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__48533){
var vec__48534 = p__48533;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48534,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48534,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.createAsIfByAssoc([real_mouse_event,(function (f){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__5045__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__5043__auto__ = related_target;
if(cljs.core.truth_(and__5043__auto__)){
return dommy.core.descendant_QMARK_(related_target,listener_target);
} else {
return and__5043__auto__;
}
})())){
return null;
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
}
});
})])], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.cljs$core$IFn$_invoke$arity$3(elem,event.target,selector);
if(cljs.core.truth_((function (){var and__5043__auto__ = selected_target;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(dommy.core.attr(selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__5043__auto__;
}
})())){
(event.selectedTarget = selected_target);

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__5045__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___49118 = arguments.length;
var i__5770__auto___49119 = (0);
while(true){
if((i__5770__auto___49119 < len__5769__auto___49118)){
args__5775__auto__.push((arguments[i__5770__auto___49119]));

var G__49120 = (i__5770__auto___49119 + (1));
i__5770__auto___49119 = G__49120;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return (elem__$1.dommyEventListeners = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,dommy.core.event_listeners(elem__$1),args));
}));

(dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq48537){
var G__48538 = cljs.core.first(seq48537);
var seq48537__$1 = cljs.core.next(seq48537);
var G__48539 = cljs.core.first(seq48537__$1);
var seq48537__$2 = cljs.core.next(seq48537__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48538,G__48539,seq48537__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
return cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest)(elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___49121 = arguments.length;
var i__5770__auto___49122 = (0);
while(true){
if((i__5770__auto___49122 < len__5769__auto___49121)){
args__5775__auto__.push((arguments[i__5770__auto___49122]));

var G__49123 = (i__5770__auto___49122 + (1));
i__5770__auto___49122 = G__49123;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__48543_49124 = dommy.core.elem_and_selector(elem_sel);
var elem_49125 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48543_49124,(0),null);
var selector_49126 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48543_49124,(1),null);
var seq__48546_49127 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__48553_49128 = null;
var count__48554_49129 = (0);
var i__48555_49130 = (0);
while(true){
if((i__48555_49130 < count__48554_49129)){
var vec__48622_49131 = chunk__48553_49128.cljs$core$IIndexed$_nth$arity$2(null,i__48555_49130);
var orig_type_49132 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48622_49131,(0),null);
var f_49133 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48622_49131,(1),null);
var seq__48556_49134 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_49132,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_49132,cljs.core.identity])));
var chunk__48558_49135 = null;
var count__48559_49136 = (0);
var i__48560_49137 = (0);
while(true){
if((i__48560_49137 < count__48559_49136)){
var vec__48635_49138 = chunk__48558_49135.cljs$core$IIndexed$_nth$arity$2(null,i__48560_49137);
var actual_type_49139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48635_49138,(0),null);
var factory_49140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48635_49138,(1),null);
var canonical_f_49141 = (function (){var G__48639 = (factory_49140.cljs$core$IFn$_invoke$arity$1 ? factory_49140.cljs$core$IFn$_invoke$arity$1(f_49133) : factory_49140.call(null,f_49133));
var fexpr__48638 = (cljs.core.truth_(selector_49126)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_49125,selector_49126):cljs.core.identity);
return (fexpr__48638.cljs$core$IFn$_invoke$arity$1 ? fexpr__48638.cljs$core$IFn$_invoke$arity$1(G__48639) : fexpr__48638.call(null,G__48639));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_49125,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_49126,actual_type_49139,f_49133], null),canonical_f_49141], 0));

if(cljs.core.truth_(elem_49125.addEventListener)){
elem_49125.addEventListener(cljs.core.name(actual_type_49139),canonical_f_49141);
} else {
elem_49125.attachEvent(cljs.core.name(actual_type_49139),canonical_f_49141);
}


var G__49142 = seq__48556_49134;
var G__49143 = chunk__48558_49135;
var G__49144 = count__48559_49136;
var G__49145 = (i__48560_49137 + (1));
seq__48556_49134 = G__49142;
chunk__48558_49135 = G__49143;
count__48559_49136 = G__49144;
i__48560_49137 = G__49145;
continue;
} else {
var temp__5804__auto___49146 = cljs.core.seq(seq__48556_49134);
if(temp__5804__auto___49146){
var seq__48556_49147__$1 = temp__5804__auto___49146;
if(cljs.core.chunked_seq_QMARK_(seq__48556_49147__$1)){
var c__5568__auto___49148 = cljs.core.chunk_first(seq__48556_49147__$1);
var G__49149 = cljs.core.chunk_rest(seq__48556_49147__$1);
var G__49150 = c__5568__auto___49148;
var G__49151 = cljs.core.count(c__5568__auto___49148);
var G__49152 = (0);
seq__48556_49134 = G__49149;
chunk__48558_49135 = G__49150;
count__48559_49136 = G__49151;
i__48560_49137 = G__49152;
continue;
} else {
var vec__48640_49153 = cljs.core.first(seq__48556_49147__$1);
var actual_type_49154 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48640_49153,(0),null);
var factory_49155 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48640_49153,(1),null);
var canonical_f_49156 = (function (){var G__48644 = (factory_49155.cljs$core$IFn$_invoke$arity$1 ? factory_49155.cljs$core$IFn$_invoke$arity$1(f_49133) : factory_49155.call(null,f_49133));
var fexpr__48643 = (cljs.core.truth_(selector_49126)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_49125,selector_49126):cljs.core.identity);
return (fexpr__48643.cljs$core$IFn$_invoke$arity$1 ? fexpr__48643.cljs$core$IFn$_invoke$arity$1(G__48644) : fexpr__48643.call(null,G__48644));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_49125,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_49126,actual_type_49154,f_49133], null),canonical_f_49156], 0));

if(cljs.core.truth_(elem_49125.addEventListener)){
elem_49125.addEventListener(cljs.core.name(actual_type_49154),canonical_f_49156);
} else {
elem_49125.attachEvent(cljs.core.name(actual_type_49154),canonical_f_49156);
}


var G__49157 = cljs.core.next(seq__48556_49147__$1);
var G__49158 = null;
var G__49159 = (0);
var G__49160 = (0);
seq__48556_49134 = G__49157;
chunk__48558_49135 = G__49158;
count__48559_49136 = G__49159;
i__48560_49137 = G__49160;
continue;
}
} else {
}
}
break;
}

var G__49161 = seq__48546_49127;
var G__49162 = chunk__48553_49128;
var G__49163 = count__48554_49129;
var G__49164 = (i__48555_49130 + (1));
seq__48546_49127 = G__49161;
chunk__48553_49128 = G__49162;
count__48554_49129 = G__49163;
i__48555_49130 = G__49164;
continue;
} else {
var temp__5804__auto___49165 = cljs.core.seq(seq__48546_49127);
if(temp__5804__auto___49165){
var seq__48546_49166__$1 = temp__5804__auto___49165;
if(cljs.core.chunked_seq_QMARK_(seq__48546_49166__$1)){
var c__5568__auto___49167 = cljs.core.chunk_first(seq__48546_49166__$1);
var G__49168 = cljs.core.chunk_rest(seq__48546_49166__$1);
var G__49169 = c__5568__auto___49167;
var G__49170 = cljs.core.count(c__5568__auto___49167);
var G__49171 = (0);
seq__48546_49127 = G__49168;
chunk__48553_49128 = G__49169;
count__48554_49129 = G__49170;
i__48555_49130 = G__49171;
continue;
} else {
var vec__48645_49172 = cljs.core.first(seq__48546_49166__$1);
var orig_type_49173 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48645_49172,(0),null);
var f_49174 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48645_49172,(1),null);
var seq__48547_49175 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_49173,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_49173,cljs.core.identity])));
var chunk__48549_49176 = null;
var count__48550_49177 = (0);
var i__48551_49178 = (0);
while(true){
if((i__48551_49178 < count__48550_49177)){
var vec__48660_49179 = chunk__48549_49176.cljs$core$IIndexed$_nth$arity$2(null,i__48551_49178);
var actual_type_49180 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48660_49179,(0),null);
var factory_49181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48660_49179,(1),null);
var canonical_f_49185 = (function (){var G__48666 = (factory_49181.cljs$core$IFn$_invoke$arity$1 ? factory_49181.cljs$core$IFn$_invoke$arity$1(f_49174) : factory_49181.call(null,f_49174));
var fexpr__48665 = (cljs.core.truth_(selector_49126)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_49125,selector_49126):cljs.core.identity);
return (fexpr__48665.cljs$core$IFn$_invoke$arity$1 ? fexpr__48665.cljs$core$IFn$_invoke$arity$1(G__48666) : fexpr__48665.call(null,G__48666));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_49125,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_49126,actual_type_49180,f_49174], null),canonical_f_49185], 0));

if(cljs.core.truth_(elem_49125.addEventListener)){
elem_49125.addEventListener(cljs.core.name(actual_type_49180),canonical_f_49185);
} else {
elem_49125.attachEvent(cljs.core.name(actual_type_49180),canonical_f_49185);
}


var G__49186 = seq__48547_49175;
var G__49187 = chunk__48549_49176;
var G__49188 = count__48550_49177;
var G__49189 = (i__48551_49178 + (1));
seq__48547_49175 = G__49186;
chunk__48549_49176 = G__49187;
count__48550_49177 = G__49188;
i__48551_49178 = G__49189;
continue;
} else {
var temp__5804__auto___49190__$1 = cljs.core.seq(seq__48547_49175);
if(temp__5804__auto___49190__$1){
var seq__48547_49191__$1 = temp__5804__auto___49190__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48547_49191__$1)){
var c__5568__auto___49192 = cljs.core.chunk_first(seq__48547_49191__$1);
var G__49193 = cljs.core.chunk_rest(seq__48547_49191__$1);
var G__49194 = c__5568__auto___49192;
var G__49195 = cljs.core.count(c__5568__auto___49192);
var G__49196 = (0);
seq__48547_49175 = G__49193;
chunk__48549_49176 = G__49194;
count__48550_49177 = G__49195;
i__48551_49178 = G__49196;
continue;
} else {
var vec__48669_49197 = cljs.core.first(seq__48547_49191__$1);
var actual_type_49198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48669_49197,(0),null);
var factory_49199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48669_49197,(1),null);
var canonical_f_49200 = (function (){var G__48673 = (factory_49199.cljs$core$IFn$_invoke$arity$1 ? factory_49199.cljs$core$IFn$_invoke$arity$1(f_49174) : factory_49199.call(null,f_49174));
var fexpr__48672 = (cljs.core.truth_(selector_49126)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_49125,selector_49126):cljs.core.identity);
return (fexpr__48672.cljs$core$IFn$_invoke$arity$1 ? fexpr__48672.cljs$core$IFn$_invoke$arity$1(G__48673) : fexpr__48672.call(null,G__48673));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_49125,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_49126,actual_type_49198,f_49174], null),canonical_f_49200], 0));

if(cljs.core.truth_(elem_49125.addEventListener)){
elem_49125.addEventListener(cljs.core.name(actual_type_49198),canonical_f_49200);
} else {
elem_49125.attachEvent(cljs.core.name(actual_type_49198),canonical_f_49200);
}


var G__49201 = cljs.core.next(seq__48547_49191__$1);
var G__49202 = null;
var G__49203 = (0);
var G__49204 = (0);
seq__48547_49175 = G__49201;
chunk__48549_49176 = G__49202;
count__48550_49177 = G__49203;
i__48551_49178 = G__49204;
continue;
}
} else {
}
}
break;
}

var G__49205 = cljs.core.next(seq__48546_49166__$1);
var G__49206 = null;
var G__49207 = (0);
var G__49208 = (0);
seq__48546_49127 = G__49205;
chunk__48553_49128 = G__49206;
count__48554_49129 = G__49207;
i__48555_49130 = G__49208;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq48540){
var G__48541 = cljs.core.first(seq48540);
var seq48540__$1 = cljs.core.next(seq48540);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48541,seq48540__$1);
}));

/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___49209 = arguments.length;
var i__5770__auto___49210 = (0);
while(true){
if((i__5770__auto___49210 < len__5769__auto___49209)){
args__5775__auto__.push((arguments[i__5770__auto___49210]));

var G__49211 = (i__5770__auto___49210 + (1));
i__5770__auto___49210 = G__49211;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__48682_49212 = dommy.core.elem_and_selector(elem_sel);
var elem_49213 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48682_49212,(0),null);
var selector_49214 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48682_49212,(1),null);
var seq__48685_49215 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__48692_49216 = null;
var count__48693_49217 = (0);
var i__48694_49218 = (0);
while(true){
if((i__48694_49218 < count__48693_49217)){
var vec__48755_49219 = chunk__48692_49216.cljs$core$IIndexed$_nth$arity$2(null,i__48694_49218);
var orig_type_49220 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48755_49219,(0),null);
var f_49221 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48755_49219,(1),null);
var seq__48695_49223 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_49220,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_49220,cljs.core.identity])));
var chunk__48697_49224 = null;
var count__48698_49225 = (0);
var i__48699_49226 = (0);
while(true){
if((i__48699_49226 < count__48698_49225)){
var vec__48765_49227 = chunk__48697_49224.cljs$core$IIndexed$_nth$arity$2(null,i__48699_49226);
var actual_type_49228 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48765_49227,(0),null);
var __49229 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48765_49227,(1),null);
var keys_49230 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_49214,actual_type_49228,f_49221], null);
var canonical_f_49231 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_49213),keys_49230);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_49213,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_49230], 0));

if(cljs.core.truth_(elem_49213.removeEventListener)){
elem_49213.removeEventListener(cljs.core.name(actual_type_49228),canonical_f_49231);
} else {
elem_49213.detachEvent(cljs.core.name(actual_type_49228),canonical_f_49231);
}


var G__49232 = seq__48695_49223;
var G__49233 = chunk__48697_49224;
var G__49234 = count__48698_49225;
var G__49235 = (i__48699_49226 + (1));
seq__48695_49223 = G__49232;
chunk__48697_49224 = G__49233;
count__48698_49225 = G__49234;
i__48699_49226 = G__49235;
continue;
} else {
var temp__5804__auto___49236 = cljs.core.seq(seq__48695_49223);
if(temp__5804__auto___49236){
var seq__48695_49237__$1 = temp__5804__auto___49236;
if(cljs.core.chunked_seq_QMARK_(seq__48695_49237__$1)){
var c__5568__auto___49238 = cljs.core.chunk_first(seq__48695_49237__$1);
var G__49239 = cljs.core.chunk_rest(seq__48695_49237__$1);
var G__49240 = c__5568__auto___49238;
var G__49241 = cljs.core.count(c__5568__auto___49238);
var G__49242 = (0);
seq__48695_49223 = G__49239;
chunk__48697_49224 = G__49240;
count__48698_49225 = G__49241;
i__48699_49226 = G__49242;
continue;
} else {
var vec__48769_49243 = cljs.core.first(seq__48695_49237__$1);
var actual_type_49244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48769_49243,(0),null);
var __49245 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48769_49243,(1),null);
var keys_49246 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_49214,actual_type_49244,f_49221], null);
var canonical_f_49247 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_49213),keys_49246);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_49213,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_49246], 0));

if(cljs.core.truth_(elem_49213.removeEventListener)){
elem_49213.removeEventListener(cljs.core.name(actual_type_49244),canonical_f_49247);
} else {
elem_49213.detachEvent(cljs.core.name(actual_type_49244),canonical_f_49247);
}


var G__49248 = cljs.core.next(seq__48695_49237__$1);
var G__49249 = null;
var G__49250 = (0);
var G__49251 = (0);
seq__48695_49223 = G__49248;
chunk__48697_49224 = G__49249;
count__48698_49225 = G__49250;
i__48699_49226 = G__49251;
continue;
}
} else {
}
}
break;
}

var G__49252 = seq__48685_49215;
var G__49253 = chunk__48692_49216;
var G__49254 = count__48693_49217;
var G__49255 = (i__48694_49218 + (1));
seq__48685_49215 = G__49252;
chunk__48692_49216 = G__49253;
count__48693_49217 = G__49254;
i__48694_49218 = G__49255;
continue;
} else {
var temp__5804__auto___49256 = cljs.core.seq(seq__48685_49215);
if(temp__5804__auto___49256){
var seq__48685_49257__$1 = temp__5804__auto___49256;
if(cljs.core.chunked_seq_QMARK_(seq__48685_49257__$1)){
var c__5568__auto___49258 = cljs.core.chunk_first(seq__48685_49257__$1);
var G__49259 = cljs.core.chunk_rest(seq__48685_49257__$1);
var G__49260 = c__5568__auto___49258;
var G__49261 = cljs.core.count(c__5568__auto___49258);
var G__49262 = (0);
seq__48685_49215 = G__49259;
chunk__48692_49216 = G__49260;
count__48693_49217 = G__49261;
i__48694_49218 = G__49262;
continue;
} else {
var vec__48774_49263 = cljs.core.first(seq__48685_49257__$1);
var orig_type_49264 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48774_49263,(0),null);
var f_49265 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48774_49263,(1),null);
var seq__48686_49267 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_49264,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_49264,cljs.core.identity])));
var chunk__48688_49268 = null;
var count__48689_49269 = (0);
var i__48690_49270 = (0);
while(true){
if((i__48690_49270 < count__48689_49269)){
var vec__48784_49271 = chunk__48688_49268.cljs$core$IIndexed$_nth$arity$2(null,i__48690_49270);
var actual_type_49272 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48784_49271,(0),null);
var __49273 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48784_49271,(1),null);
var keys_49275 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_49214,actual_type_49272,f_49265], null);
var canonical_f_49276 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_49213),keys_49275);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_49213,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_49275], 0));

if(cljs.core.truth_(elem_49213.removeEventListener)){
elem_49213.removeEventListener(cljs.core.name(actual_type_49272),canonical_f_49276);
} else {
elem_49213.detachEvent(cljs.core.name(actual_type_49272),canonical_f_49276);
}


var G__49278 = seq__48686_49267;
var G__49279 = chunk__48688_49268;
var G__49280 = count__48689_49269;
var G__49281 = (i__48690_49270 + (1));
seq__48686_49267 = G__49278;
chunk__48688_49268 = G__49279;
count__48689_49269 = G__49280;
i__48690_49270 = G__49281;
continue;
} else {
var temp__5804__auto___49283__$1 = cljs.core.seq(seq__48686_49267);
if(temp__5804__auto___49283__$1){
var seq__48686_49284__$1 = temp__5804__auto___49283__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48686_49284__$1)){
var c__5568__auto___49285 = cljs.core.chunk_first(seq__48686_49284__$1);
var G__49286 = cljs.core.chunk_rest(seq__48686_49284__$1);
var G__49287 = c__5568__auto___49285;
var G__49288 = cljs.core.count(c__5568__auto___49285);
var G__49289 = (0);
seq__48686_49267 = G__49286;
chunk__48688_49268 = G__49287;
count__48689_49269 = G__49288;
i__48690_49270 = G__49289;
continue;
} else {
var vec__48788_49290 = cljs.core.first(seq__48686_49284__$1);
var actual_type_49291 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48788_49290,(0),null);
var __49292 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48788_49290,(1),null);
var keys_49294 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_49214,actual_type_49291,f_49265], null);
var canonical_f_49295 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_49213),keys_49294);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_49213,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_49294], 0));

if(cljs.core.truth_(elem_49213.removeEventListener)){
elem_49213.removeEventListener(cljs.core.name(actual_type_49291),canonical_f_49295);
} else {
elem_49213.detachEvent(cljs.core.name(actual_type_49291),canonical_f_49295);
}


var G__49298 = cljs.core.next(seq__48686_49284__$1);
var G__49299 = null;
var G__49300 = (0);
var G__49301 = (0);
seq__48686_49267 = G__49298;
chunk__48688_49268 = G__49299;
count__48689_49269 = G__49300;
i__48690_49270 = G__49301;
continue;
}
} else {
}
}
break;
}

var G__49302 = cljs.core.next(seq__48685_49257__$1);
var G__49303 = null;
var G__49304 = (0);
var G__49305 = (0);
seq__48685_49215 = G__49302;
chunk__48692_49216 = G__49303;
count__48693_49217 = G__49304;
i__48694_49218 = G__49305;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq48676){
var G__48677 = cljs.core.first(seq48676);
var seq48676__$1 = cljs.core.next(seq48676);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48677,seq48676__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___49311 = arguments.length;
var i__5770__auto___49313 = (0);
while(true){
if((i__5770__auto___49313 < len__5769__auto___49311)){
args__5775__auto__.push((arguments[i__5770__auto___49313]));

var G__49314 = (i__5770__auto___49313 + (1));
i__5770__auto___49313 = G__49314;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__48794_49317 = dommy.core.elem_and_selector(elem_sel);
var elem_49318 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48794_49317,(0),null);
var selector_49319 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48794_49317,(1),null);
var seq__48797_49320 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__48798_49321 = null;
var count__48799_49322 = (0);
var i__48800_49323 = (0);
while(true){
if((i__48800_49323 < count__48799_49322)){
var vec__48811_49325 = chunk__48798_49321.cljs$core$IIndexed$_nth$arity$2(null,i__48800_49323);
var type_49326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48811_49325,(0),null);
var f_49327 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48811_49325,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_49326,((function (seq__48797_49320,chunk__48798_49321,count__48799_49322,i__48800_49323,vec__48811_49325,type_49326,f_49327,vec__48794_49317,elem_49318,selector_49319){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_49326,dommy$core$this_fn], 0));

return (f_49327.cljs$core$IFn$_invoke$arity$1 ? f_49327.cljs$core$IFn$_invoke$arity$1(e) : f_49327.call(null,e));
});})(seq__48797_49320,chunk__48798_49321,count__48799_49322,i__48800_49323,vec__48811_49325,type_49326,f_49327,vec__48794_49317,elem_49318,selector_49319))
], 0));


var G__49334 = seq__48797_49320;
var G__49335 = chunk__48798_49321;
var G__49336 = count__48799_49322;
var G__49337 = (i__48800_49323 + (1));
seq__48797_49320 = G__49334;
chunk__48798_49321 = G__49335;
count__48799_49322 = G__49336;
i__48800_49323 = G__49337;
continue;
} else {
var temp__5804__auto___49341 = cljs.core.seq(seq__48797_49320);
if(temp__5804__auto___49341){
var seq__48797_49342__$1 = temp__5804__auto___49341;
if(cljs.core.chunked_seq_QMARK_(seq__48797_49342__$1)){
var c__5568__auto___49343 = cljs.core.chunk_first(seq__48797_49342__$1);
var G__49344 = cljs.core.chunk_rest(seq__48797_49342__$1);
var G__49345 = c__5568__auto___49343;
var G__49346 = cljs.core.count(c__5568__auto___49343);
var G__49347 = (0);
seq__48797_49320 = G__49344;
chunk__48798_49321 = G__49345;
count__48799_49322 = G__49346;
i__48800_49323 = G__49347;
continue;
} else {
var vec__48814_49348 = cljs.core.first(seq__48797_49342__$1);
var type_49349 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48814_49348,(0),null);
var f_49350 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48814_49348,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_49349,((function (seq__48797_49320,chunk__48798_49321,count__48799_49322,i__48800_49323,vec__48814_49348,type_49349,f_49350,seq__48797_49342__$1,temp__5804__auto___49341,vec__48794_49317,elem_49318,selector_49319){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_49349,dommy$core$this_fn], 0));

return (f_49350.cljs$core$IFn$_invoke$arity$1 ? f_49350.cljs$core$IFn$_invoke$arity$1(e) : f_49350.call(null,e));
});})(seq__48797_49320,chunk__48798_49321,count__48799_49322,i__48800_49323,vec__48814_49348,type_49349,f_49350,seq__48797_49342__$1,temp__5804__auto___49341,vec__48794_49317,elem_49318,selector_49319))
], 0));


var G__49354 = cljs.core.next(seq__48797_49342__$1);
var G__49355 = null;
var G__49356 = (0);
var G__49357 = (0);
seq__48797_49320 = G__49354;
chunk__48798_49321 = G__49355;
count__48799_49322 = G__49356;
i__48800_49323 = G__49357;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq48791){
var G__48792 = cljs.core.first(seq48791);
var seq48791__$1 = cljs.core.next(seq48791);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48792,seq48791__$1);
}));


//# sourceMappingURL=dommy.core.js.map
