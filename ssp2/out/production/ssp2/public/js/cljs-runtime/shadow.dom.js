goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_38569 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_38569(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_38573 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_38573(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__37186 = coll;
var G__37187 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__37186,G__37187) : shadow.dom.lazy_native_coll_seq.call(null,G__37186,G__37187));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__37229 = arguments.length;
switch (G__37229) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__37243 = arguments.length;
switch (G__37243) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__37259 = arguments.length;
switch (G__37259) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__37270 = arguments.length;
switch (G__37270) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__37290 = arguments.length;
switch (G__37290) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__37324 = arguments.length;
switch (G__37324) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e37347){if((e37347 instanceof Object)){
var e = e37347;
return console.log("didnt support attachEvent",el,e);
} else {
throw e37347;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__37368 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__37369 = null;
var count__37370 = (0);
var i__37371 = (0);
while(true){
if((i__37371 < count__37370)){
var el = chunk__37369.cljs$core$IIndexed$_nth$arity$2(null,i__37371);
var handler_38602__$1 = ((function (seq__37368,chunk__37369,count__37370,i__37371,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__37368,chunk__37369,count__37370,i__37371,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_38602__$1);


var G__38603 = seq__37368;
var G__38604 = chunk__37369;
var G__38605 = count__37370;
var G__38606 = (i__37371 + (1));
seq__37368 = G__38603;
chunk__37369 = G__38604;
count__37370 = G__38605;
i__37371 = G__38606;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37368);
if(temp__5804__auto__){
var seq__37368__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37368__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37368__$1);
var G__38607 = cljs.core.chunk_rest(seq__37368__$1);
var G__38608 = c__5568__auto__;
var G__38609 = cljs.core.count(c__5568__auto__);
var G__38610 = (0);
seq__37368 = G__38607;
chunk__37369 = G__38608;
count__37370 = G__38609;
i__37371 = G__38610;
continue;
} else {
var el = cljs.core.first(seq__37368__$1);
var handler_38611__$1 = ((function (seq__37368,chunk__37369,count__37370,i__37371,el,seq__37368__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__37368,chunk__37369,count__37370,i__37371,el,seq__37368__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_38611__$1);


var G__38612 = cljs.core.next(seq__37368__$1);
var G__38613 = null;
var G__38614 = (0);
var G__38615 = (0);
seq__37368 = G__38612;
chunk__37369 = G__38613;
count__37370 = G__38614;
i__37371 = G__38615;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__37402 = arguments.length;
switch (G__37402) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__37422 = cljs.core.seq(events);
var chunk__37423 = null;
var count__37424 = (0);
var i__37425 = (0);
while(true){
if((i__37425 < count__37424)){
var vec__37435 = chunk__37423.cljs$core$IIndexed$_nth$arity$2(null,i__37425);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37435,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37435,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__38617 = seq__37422;
var G__38618 = chunk__37423;
var G__38619 = count__37424;
var G__38620 = (i__37425 + (1));
seq__37422 = G__38617;
chunk__37423 = G__38618;
count__37424 = G__38619;
i__37425 = G__38620;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37422);
if(temp__5804__auto__){
var seq__37422__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37422__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37422__$1);
var G__38621 = cljs.core.chunk_rest(seq__37422__$1);
var G__38622 = c__5568__auto__;
var G__38623 = cljs.core.count(c__5568__auto__);
var G__38624 = (0);
seq__37422 = G__38621;
chunk__37423 = G__38622;
count__37424 = G__38623;
i__37425 = G__38624;
continue;
} else {
var vec__37443 = cljs.core.first(seq__37422__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37443,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37443,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__38625 = cljs.core.next(seq__37422__$1);
var G__38626 = null;
var G__38627 = (0);
var G__38628 = (0);
seq__37422 = G__38625;
chunk__37423 = G__38626;
count__37424 = G__38627;
i__37425 = G__38628;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__37453 = cljs.core.seq(styles);
var chunk__37454 = null;
var count__37455 = (0);
var i__37456 = (0);
while(true){
if((i__37456 < count__37455)){
var vec__37475 = chunk__37454.cljs$core$IIndexed$_nth$arity$2(null,i__37456);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37475,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37475,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__38629 = seq__37453;
var G__38630 = chunk__37454;
var G__38631 = count__37455;
var G__38632 = (i__37456 + (1));
seq__37453 = G__38629;
chunk__37454 = G__38630;
count__37455 = G__38631;
i__37456 = G__38632;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37453);
if(temp__5804__auto__){
var seq__37453__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37453__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37453__$1);
var G__38633 = cljs.core.chunk_rest(seq__37453__$1);
var G__38634 = c__5568__auto__;
var G__38635 = cljs.core.count(c__5568__auto__);
var G__38636 = (0);
seq__37453 = G__38633;
chunk__37454 = G__38634;
count__37455 = G__38635;
i__37456 = G__38636;
continue;
} else {
var vec__37487 = cljs.core.first(seq__37453__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37487,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37487,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__38637 = cljs.core.next(seq__37453__$1);
var G__38638 = null;
var G__38639 = (0);
var G__38640 = (0);
seq__37453 = G__38637;
chunk__37454 = G__38638;
count__37455 = G__38639;
i__37456 = G__38640;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__37502_38641 = key;
var G__37502_38642__$1 = (((G__37502_38641 instanceof cljs.core.Keyword))?G__37502_38641.fqn:null);
switch (G__37502_38642__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_38644 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_38644,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_38644,"aria-");
}
})())){
el.setAttribute(ks_38644,value);
} else {
(el[ks_38644] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__37561){
var map__37563 = p__37561;
var map__37563__$1 = cljs.core.__destructure_map(map__37563);
var props = map__37563__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37563__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__37566 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37566,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37566,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37566,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__37571 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__37571,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__37571;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__37581 = arguments.length;
switch (G__37581) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__37590){
var vec__37591 = p__37590;
var seq__37592 = cljs.core.seq(vec__37591);
var first__37593 = cljs.core.first(seq__37592);
var seq__37592__$1 = cljs.core.next(seq__37592);
var nn = first__37593;
var first__37593__$1 = cljs.core.first(seq__37592__$1);
var seq__37592__$2 = cljs.core.next(seq__37592__$1);
var np = first__37593__$1;
var nc = seq__37592__$2;
var node = vec__37591;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__37594 = nn;
var G__37595 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__37594,G__37595) : create_fn.call(null,G__37594,G__37595));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__37596 = nn;
var G__37597 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__37596,G__37597) : create_fn.call(null,G__37596,G__37597));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__37611 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37611,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37611,(1),null);
var seq__37615_38651 = cljs.core.seq(node_children);
var chunk__37616_38652 = null;
var count__37617_38653 = (0);
var i__37618_38654 = (0);
while(true){
if((i__37618_38654 < count__37617_38653)){
var child_struct_38655 = chunk__37616_38652.cljs$core$IIndexed$_nth$arity$2(null,i__37618_38654);
var children_38656 = shadow.dom.dom_node(child_struct_38655);
if(cljs.core.seq_QMARK_(children_38656)){
var seq__37665_38657 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_38656));
var chunk__37667_38658 = null;
var count__37668_38659 = (0);
var i__37669_38660 = (0);
while(true){
if((i__37669_38660 < count__37668_38659)){
var child_38661 = chunk__37667_38658.cljs$core$IIndexed$_nth$arity$2(null,i__37669_38660);
if(cljs.core.truth_(child_38661)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38661);


var G__38662 = seq__37665_38657;
var G__38663 = chunk__37667_38658;
var G__38664 = count__37668_38659;
var G__38665 = (i__37669_38660 + (1));
seq__37665_38657 = G__38662;
chunk__37667_38658 = G__38663;
count__37668_38659 = G__38664;
i__37669_38660 = G__38665;
continue;
} else {
var G__38666 = seq__37665_38657;
var G__38667 = chunk__37667_38658;
var G__38668 = count__37668_38659;
var G__38669 = (i__37669_38660 + (1));
seq__37665_38657 = G__38666;
chunk__37667_38658 = G__38667;
count__37668_38659 = G__38668;
i__37669_38660 = G__38669;
continue;
}
} else {
var temp__5804__auto___38670 = cljs.core.seq(seq__37665_38657);
if(temp__5804__auto___38670){
var seq__37665_38671__$1 = temp__5804__auto___38670;
if(cljs.core.chunked_seq_QMARK_(seq__37665_38671__$1)){
var c__5568__auto___38672 = cljs.core.chunk_first(seq__37665_38671__$1);
var G__38673 = cljs.core.chunk_rest(seq__37665_38671__$1);
var G__38674 = c__5568__auto___38672;
var G__38675 = cljs.core.count(c__5568__auto___38672);
var G__38676 = (0);
seq__37665_38657 = G__38673;
chunk__37667_38658 = G__38674;
count__37668_38659 = G__38675;
i__37669_38660 = G__38676;
continue;
} else {
var child_38677 = cljs.core.first(seq__37665_38671__$1);
if(cljs.core.truth_(child_38677)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38677);


var G__38678 = cljs.core.next(seq__37665_38671__$1);
var G__38679 = null;
var G__38680 = (0);
var G__38681 = (0);
seq__37665_38657 = G__38678;
chunk__37667_38658 = G__38679;
count__37668_38659 = G__38680;
i__37669_38660 = G__38681;
continue;
} else {
var G__38682 = cljs.core.next(seq__37665_38671__$1);
var G__38683 = null;
var G__38684 = (0);
var G__38685 = (0);
seq__37665_38657 = G__38682;
chunk__37667_38658 = G__38683;
count__37668_38659 = G__38684;
i__37669_38660 = G__38685;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_38656);
}


var G__38686 = seq__37615_38651;
var G__38687 = chunk__37616_38652;
var G__38688 = count__37617_38653;
var G__38689 = (i__37618_38654 + (1));
seq__37615_38651 = G__38686;
chunk__37616_38652 = G__38687;
count__37617_38653 = G__38688;
i__37618_38654 = G__38689;
continue;
} else {
var temp__5804__auto___38690 = cljs.core.seq(seq__37615_38651);
if(temp__5804__auto___38690){
var seq__37615_38691__$1 = temp__5804__auto___38690;
if(cljs.core.chunked_seq_QMARK_(seq__37615_38691__$1)){
var c__5568__auto___38692 = cljs.core.chunk_first(seq__37615_38691__$1);
var G__38693 = cljs.core.chunk_rest(seq__37615_38691__$1);
var G__38694 = c__5568__auto___38692;
var G__38695 = cljs.core.count(c__5568__auto___38692);
var G__38696 = (0);
seq__37615_38651 = G__38693;
chunk__37616_38652 = G__38694;
count__37617_38653 = G__38695;
i__37618_38654 = G__38696;
continue;
} else {
var child_struct_38697 = cljs.core.first(seq__37615_38691__$1);
var children_38698 = shadow.dom.dom_node(child_struct_38697);
if(cljs.core.seq_QMARK_(children_38698)){
var seq__37675_38699 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_38698));
var chunk__37677_38700 = null;
var count__37678_38701 = (0);
var i__37679_38702 = (0);
while(true){
if((i__37679_38702 < count__37678_38701)){
var child_38703 = chunk__37677_38700.cljs$core$IIndexed$_nth$arity$2(null,i__37679_38702);
if(cljs.core.truth_(child_38703)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38703);


var G__38704 = seq__37675_38699;
var G__38705 = chunk__37677_38700;
var G__38706 = count__37678_38701;
var G__38707 = (i__37679_38702 + (1));
seq__37675_38699 = G__38704;
chunk__37677_38700 = G__38705;
count__37678_38701 = G__38706;
i__37679_38702 = G__38707;
continue;
} else {
var G__38708 = seq__37675_38699;
var G__38709 = chunk__37677_38700;
var G__38710 = count__37678_38701;
var G__38711 = (i__37679_38702 + (1));
seq__37675_38699 = G__38708;
chunk__37677_38700 = G__38709;
count__37678_38701 = G__38710;
i__37679_38702 = G__38711;
continue;
}
} else {
var temp__5804__auto___38712__$1 = cljs.core.seq(seq__37675_38699);
if(temp__5804__auto___38712__$1){
var seq__37675_38713__$1 = temp__5804__auto___38712__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37675_38713__$1)){
var c__5568__auto___38714 = cljs.core.chunk_first(seq__37675_38713__$1);
var G__38715 = cljs.core.chunk_rest(seq__37675_38713__$1);
var G__38716 = c__5568__auto___38714;
var G__38717 = cljs.core.count(c__5568__auto___38714);
var G__38718 = (0);
seq__37675_38699 = G__38715;
chunk__37677_38700 = G__38716;
count__37678_38701 = G__38717;
i__37679_38702 = G__38718;
continue;
} else {
var child_38719 = cljs.core.first(seq__37675_38713__$1);
if(cljs.core.truth_(child_38719)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38719);


var G__38720 = cljs.core.next(seq__37675_38713__$1);
var G__38721 = null;
var G__38722 = (0);
var G__38723 = (0);
seq__37675_38699 = G__38720;
chunk__37677_38700 = G__38721;
count__37678_38701 = G__38722;
i__37679_38702 = G__38723;
continue;
} else {
var G__38724 = cljs.core.next(seq__37675_38713__$1);
var G__38725 = null;
var G__38726 = (0);
var G__38727 = (0);
seq__37675_38699 = G__38724;
chunk__37677_38700 = G__38725;
count__37678_38701 = G__38726;
i__37679_38702 = G__38727;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_38698);
}


var G__38728 = cljs.core.next(seq__37615_38691__$1);
var G__38729 = null;
var G__38730 = (0);
var G__38731 = (0);
seq__37615_38651 = G__38728;
chunk__37616_38652 = G__38729;
count__37617_38653 = G__38730;
i__37618_38654 = G__38731;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__37719 = cljs.core.seq(node);
var chunk__37720 = null;
var count__37721 = (0);
var i__37722 = (0);
while(true){
if((i__37722 < count__37721)){
var n = chunk__37720.cljs$core$IIndexed$_nth$arity$2(null,i__37722);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__38732 = seq__37719;
var G__38733 = chunk__37720;
var G__38734 = count__37721;
var G__38735 = (i__37722 + (1));
seq__37719 = G__38732;
chunk__37720 = G__38733;
count__37721 = G__38734;
i__37722 = G__38735;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37719);
if(temp__5804__auto__){
var seq__37719__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37719__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37719__$1);
var G__38736 = cljs.core.chunk_rest(seq__37719__$1);
var G__38737 = c__5568__auto__;
var G__38738 = cljs.core.count(c__5568__auto__);
var G__38739 = (0);
seq__37719 = G__38736;
chunk__37720 = G__38737;
count__37721 = G__38738;
i__37722 = G__38739;
continue;
} else {
var n = cljs.core.first(seq__37719__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__38740 = cljs.core.next(seq__37719__$1);
var G__38741 = null;
var G__38742 = (0);
var G__38743 = (0);
seq__37719 = G__38740;
chunk__37720 = G__38741;
count__37721 = G__38742;
i__37722 = G__38743;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__37743 = arguments.length;
switch (G__37743) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__37757 = arguments.length;
switch (G__37757) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__37774 = arguments.length;
switch (G__37774) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___38749 = arguments.length;
var i__5770__auto___38750 = (0);
while(true){
if((i__5770__auto___38750 < len__5769__auto___38749)){
args__5775__auto__.push((arguments[i__5770__auto___38750]));

var G__38751 = (i__5770__auto___38750 + (1));
i__5770__auto___38750 = G__38751;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__37799_38752 = cljs.core.seq(nodes);
var chunk__37800_38753 = null;
var count__37801_38754 = (0);
var i__37802_38755 = (0);
while(true){
if((i__37802_38755 < count__37801_38754)){
var node_38756 = chunk__37800_38753.cljs$core$IIndexed$_nth$arity$2(null,i__37802_38755);
fragment.appendChild(shadow.dom._to_dom(node_38756));


var G__38757 = seq__37799_38752;
var G__38758 = chunk__37800_38753;
var G__38759 = count__37801_38754;
var G__38760 = (i__37802_38755 + (1));
seq__37799_38752 = G__38757;
chunk__37800_38753 = G__38758;
count__37801_38754 = G__38759;
i__37802_38755 = G__38760;
continue;
} else {
var temp__5804__auto___38761 = cljs.core.seq(seq__37799_38752);
if(temp__5804__auto___38761){
var seq__37799_38762__$1 = temp__5804__auto___38761;
if(cljs.core.chunked_seq_QMARK_(seq__37799_38762__$1)){
var c__5568__auto___38763 = cljs.core.chunk_first(seq__37799_38762__$1);
var G__38764 = cljs.core.chunk_rest(seq__37799_38762__$1);
var G__38765 = c__5568__auto___38763;
var G__38766 = cljs.core.count(c__5568__auto___38763);
var G__38767 = (0);
seq__37799_38752 = G__38764;
chunk__37800_38753 = G__38765;
count__37801_38754 = G__38766;
i__37802_38755 = G__38767;
continue;
} else {
var node_38768 = cljs.core.first(seq__37799_38762__$1);
fragment.appendChild(shadow.dom._to_dom(node_38768));


var G__38769 = cljs.core.next(seq__37799_38762__$1);
var G__38770 = null;
var G__38771 = (0);
var G__38772 = (0);
seq__37799_38752 = G__38769;
chunk__37800_38753 = G__38770;
count__37801_38754 = G__38771;
i__37802_38755 = G__38772;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq37794){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37794));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__37809_38773 = cljs.core.seq(scripts);
var chunk__37810_38774 = null;
var count__37811_38775 = (0);
var i__37812_38776 = (0);
while(true){
if((i__37812_38776 < count__37811_38775)){
var vec__37828_38777 = chunk__37810_38774.cljs$core$IIndexed$_nth$arity$2(null,i__37812_38776);
var script_tag_38778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37828_38777,(0),null);
var script_body_38779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37828_38777,(1),null);
eval(script_body_38779);


var G__38780 = seq__37809_38773;
var G__38781 = chunk__37810_38774;
var G__38782 = count__37811_38775;
var G__38783 = (i__37812_38776 + (1));
seq__37809_38773 = G__38780;
chunk__37810_38774 = G__38781;
count__37811_38775 = G__38782;
i__37812_38776 = G__38783;
continue;
} else {
var temp__5804__auto___38784 = cljs.core.seq(seq__37809_38773);
if(temp__5804__auto___38784){
var seq__37809_38785__$1 = temp__5804__auto___38784;
if(cljs.core.chunked_seq_QMARK_(seq__37809_38785__$1)){
var c__5568__auto___38786 = cljs.core.chunk_first(seq__37809_38785__$1);
var G__38787 = cljs.core.chunk_rest(seq__37809_38785__$1);
var G__38788 = c__5568__auto___38786;
var G__38789 = cljs.core.count(c__5568__auto___38786);
var G__38790 = (0);
seq__37809_38773 = G__38787;
chunk__37810_38774 = G__38788;
count__37811_38775 = G__38789;
i__37812_38776 = G__38790;
continue;
} else {
var vec__37835_38791 = cljs.core.first(seq__37809_38785__$1);
var script_tag_38792 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37835_38791,(0),null);
var script_body_38793 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37835_38791,(1),null);
eval(script_body_38793);


var G__38794 = cljs.core.next(seq__37809_38785__$1);
var G__38795 = null;
var G__38796 = (0);
var G__38797 = (0);
seq__37809_38773 = G__38794;
chunk__37810_38774 = G__38795;
count__37811_38775 = G__38796;
i__37812_38776 = G__38797;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__37840){
var vec__37841 = p__37840;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37841,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37841,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__37853 = arguments.length;
switch (G__37853) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__37882 = cljs.core.seq(style_keys);
var chunk__37883 = null;
var count__37884 = (0);
var i__37885 = (0);
while(true){
if((i__37885 < count__37884)){
var it = chunk__37883.cljs$core$IIndexed$_nth$arity$2(null,i__37885);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__38799 = seq__37882;
var G__38800 = chunk__37883;
var G__38801 = count__37884;
var G__38802 = (i__37885 + (1));
seq__37882 = G__38799;
chunk__37883 = G__38800;
count__37884 = G__38801;
i__37885 = G__38802;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37882);
if(temp__5804__auto__){
var seq__37882__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37882__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37882__$1);
var G__38803 = cljs.core.chunk_rest(seq__37882__$1);
var G__38804 = c__5568__auto__;
var G__38805 = cljs.core.count(c__5568__auto__);
var G__38806 = (0);
seq__37882 = G__38803;
chunk__37883 = G__38804;
count__37884 = G__38805;
i__37885 = G__38806;
continue;
} else {
var it = cljs.core.first(seq__37882__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__38807 = cljs.core.next(seq__37882__$1);
var G__38808 = null;
var G__38809 = (0);
var G__38810 = (0);
seq__37882 = G__38807;
chunk__37883 = G__38808;
count__37884 = G__38809;
i__37885 = G__38810;
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
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k37898,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__37908 = k37898;
var G__37908__$1 = (((G__37908 instanceof cljs.core.Keyword))?G__37908.fqn:null);
switch (G__37908__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37898,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__37912){
var vec__37915 = p__37912;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37915,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37915,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37897){
var self__ = this;
var G__37897__$1 = this;
return (new cljs.core.RecordIter((0),G__37897__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37899,other37900){
var self__ = this;
var this37899__$1 = this;
return (((!((other37900 == null)))) && ((((this37899__$1.constructor === other37900.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37899__$1.x,other37900.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37899__$1.y,other37900.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37899__$1.__extmap,other37900.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k37898){
var self__ = this;
var this__5350__auto____$1 = this;
var G__37949 = k37898;
var G__37949__$1 = (((G__37949 instanceof cljs.core.Keyword))?G__37949.fqn:null);
switch (G__37949__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k37898);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__37897){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__37952 = cljs.core.keyword_identical_QMARK_;
var expr__37953 = k__5352__auto__;
if(cljs.core.truth_((pred__37952.cljs$core$IFn$_invoke$arity$2 ? pred__37952.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__37953) : pred__37952.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__37953)))){
return (new shadow.dom.Coordinate(G__37897,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__37952.cljs$core$IFn$_invoke$arity$2 ? pred__37952.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__37953) : pred__37952.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__37953)))){
return (new shadow.dom.Coordinate(self__.x,G__37897,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__37897),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__37897){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__37897,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__37902){
var extmap__5385__auto__ = (function (){var G__37972 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37902,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__37902)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37972);
} else {
return G__37972;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__37902),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__37902),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k37976,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__37995 = k37976;
var G__37995__$1 = (((G__37995 instanceof cljs.core.Keyword))?G__37995.fqn:null);
switch (G__37995__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37976,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__38002){
var vec__38003 = p__38002;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38003,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38003,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37975){
var self__ = this;
var G__37975__$1 = this;
return (new cljs.core.RecordIter((0),G__37975__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37978,other37979){
var self__ = this;
var this37978__$1 = this;
return (((!((other37979 == null)))) && ((((this37978__$1.constructor === other37979.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37978__$1.w,other37979.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37978__$1.h,other37979.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37978__$1.__extmap,other37979.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k37976){
var self__ = this;
var this__5350__auto____$1 = this;
var G__38017 = k37976;
var G__38017__$1 = (((G__38017 instanceof cljs.core.Keyword))?G__38017.fqn:null);
switch (G__38017__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k37976);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__37975){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__38019 = cljs.core.keyword_identical_QMARK_;
var expr__38020 = k__5352__auto__;
if(cljs.core.truth_((pred__38019.cljs$core$IFn$_invoke$arity$2 ? pred__38019.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__38020) : pred__38019.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__38020)))){
return (new shadow.dom.Size(G__37975,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__38019.cljs$core$IFn$_invoke$arity$2 ? pred__38019.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__38020) : pred__38019.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__38020)))){
return (new shadow.dom.Size(self__.w,G__37975,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__37975),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__37975){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__37975,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__37988){
var extmap__5385__auto__ = (function (){var G__38027 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37988,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__37988)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__38027);
} else {
return G__38027;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__37988),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__37988),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__38821 = (i + (1));
var G__38822 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__38821;
ret = G__38822;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38135){
var vec__38136 = p__38135;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38136,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38136,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__38144 = arguments.length;
switch (G__38144) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__38827 = ps;
var G__38828 = (i + (1));
el__$1 = G__38827;
i = G__38828;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__38188 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38188,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38188,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38188,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__38199_38832 = cljs.core.seq(props);
var chunk__38200_38833 = null;
var count__38201_38834 = (0);
var i__38202_38835 = (0);
while(true){
if((i__38202_38835 < count__38201_38834)){
var vec__38218_38836 = chunk__38200_38833.cljs$core$IIndexed$_nth$arity$2(null,i__38202_38835);
var k_38837 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38218_38836,(0),null);
var v_38838 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38218_38836,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_38837);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_38837),v_38838);


var G__38839 = seq__38199_38832;
var G__38840 = chunk__38200_38833;
var G__38841 = count__38201_38834;
var G__38842 = (i__38202_38835 + (1));
seq__38199_38832 = G__38839;
chunk__38200_38833 = G__38840;
count__38201_38834 = G__38841;
i__38202_38835 = G__38842;
continue;
} else {
var temp__5804__auto___38843 = cljs.core.seq(seq__38199_38832);
if(temp__5804__auto___38843){
var seq__38199_38844__$1 = temp__5804__auto___38843;
if(cljs.core.chunked_seq_QMARK_(seq__38199_38844__$1)){
var c__5568__auto___38845 = cljs.core.chunk_first(seq__38199_38844__$1);
var G__38846 = cljs.core.chunk_rest(seq__38199_38844__$1);
var G__38847 = c__5568__auto___38845;
var G__38848 = cljs.core.count(c__5568__auto___38845);
var G__38849 = (0);
seq__38199_38832 = G__38846;
chunk__38200_38833 = G__38847;
count__38201_38834 = G__38848;
i__38202_38835 = G__38849;
continue;
} else {
var vec__38307_38850 = cljs.core.first(seq__38199_38844__$1);
var k_38851 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38307_38850,(0),null);
var v_38852 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38307_38850,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_38851);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_38851),v_38852);


var G__38853 = cljs.core.next(seq__38199_38844__$1);
var G__38854 = null;
var G__38855 = (0);
var G__38856 = (0);
seq__38199_38832 = G__38853;
chunk__38200_38833 = G__38854;
count__38201_38834 = G__38855;
i__38202_38835 = G__38856;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__38318 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38318,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38318,(1),null);
var seq__38326_38857 = cljs.core.seq(node_children);
var chunk__38328_38858 = null;
var count__38329_38859 = (0);
var i__38330_38860 = (0);
while(true){
if((i__38330_38860 < count__38329_38859)){
var child_struct_38861 = chunk__38328_38858.cljs$core$IIndexed$_nth$arity$2(null,i__38330_38860);
if((!((child_struct_38861 == null)))){
if(typeof child_struct_38861 === 'string'){
var text_38862 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_38862),child_struct_38861].join(''));
} else {
var children_38863 = shadow.dom.svg_node(child_struct_38861);
if(cljs.core.seq_QMARK_(children_38863)){
var seq__38395_38864 = cljs.core.seq(children_38863);
var chunk__38397_38865 = null;
var count__38398_38866 = (0);
var i__38399_38867 = (0);
while(true){
if((i__38399_38867 < count__38398_38866)){
var child_38868 = chunk__38397_38865.cljs$core$IIndexed$_nth$arity$2(null,i__38399_38867);
if(cljs.core.truth_(child_38868)){
node.appendChild(child_38868);


var G__38869 = seq__38395_38864;
var G__38870 = chunk__38397_38865;
var G__38871 = count__38398_38866;
var G__38872 = (i__38399_38867 + (1));
seq__38395_38864 = G__38869;
chunk__38397_38865 = G__38870;
count__38398_38866 = G__38871;
i__38399_38867 = G__38872;
continue;
} else {
var G__38873 = seq__38395_38864;
var G__38874 = chunk__38397_38865;
var G__38875 = count__38398_38866;
var G__38876 = (i__38399_38867 + (1));
seq__38395_38864 = G__38873;
chunk__38397_38865 = G__38874;
count__38398_38866 = G__38875;
i__38399_38867 = G__38876;
continue;
}
} else {
var temp__5804__auto___38877 = cljs.core.seq(seq__38395_38864);
if(temp__5804__auto___38877){
var seq__38395_38878__$1 = temp__5804__auto___38877;
if(cljs.core.chunked_seq_QMARK_(seq__38395_38878__$1)){
var c__5568__auto___38879 = cljs.core.chunk_first(seq__38395_38878__$1);
var G__38880 = cljs.core.chunk_rest(seq__38395_38878__$1);
var G__38881 = c__5568__auto___38879;
var G__38882 = cljs.core.count(c__5568__auto___38879);
var G__38883 = (0);
seq__38395_38864 = G__38880;
chunk__38397_38865 = G__38881;
count__38398_38866 = G__38882;
i__38399_38867 = G__38883;
continue;
} else {
var child_38884 = cljs.core.first(seq__38395_38878__$1);
if(cljs.core.truth_(child_38884)){
node.appendChild(child_38884);


var G__38885 = cljs.core.next(seq__38395_38878__$1);
var G__38886 = null;
var G__38887 = (0);
var G__38888 = (0);
seq__38395_38864 = G__38885;
chunk__38397_38865 = G__38886;
count__38398_38866 = G__38887;
i__38399_38867 = G__38888;
continue;
} else {
var G__38889 = cljs.core.next(seq__38395_38878__$1);
var G__38890 = null;
var G__38891 = (0);
var G__38892 = (0);
seq__38395_38864 = G__38889;
chunk__38397_38865 = G__38890;
count__38398_38866 = G__38891;
i__38399_38867 = G__38892;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_38863);
}
}


var G__38893 = seq__38326_38857;
var G__38894 = chunk__38328_38858;
var G__38895 = count__38329_38859;
var G__38896 = (i__38330_38860 + (1));
seq__38326_38857 = G__38893;
chunk__38328_38858 = G__38894;
count__38329_38859 = G__38895;
i__38330_38860 = G__38896;
continue;
} else {
var G__38897 = seq__38326_38857;
var G__38898 = chunk__38328_38858;
var G__38899 = count__38329_38859;
var G__38900 = (i__38330_38860 + (1));
seq__38326_38857 = G__38897;
chunk__38328_38858 = G__38898;
count__38329_38859 = G__38899;
i__38330_38860 = G__38900;
continue;
}
} else {
var temp__5804__auto___38901 = cljs.core.seq(seq__38326_38857);
if(temp__5804__auto___38901){
var seq__38326_38902__$1 = temp__5804__auto___38901;
if(cljs.core.chunked_seq_QMARK_(seq__38326_38902__$1)){
var c__5568__auto___38903 = cljs.core.chunk_first(seq__38326_38902__$1);
var G__38904 = cljs.core.chunk_rest(seq__38326_38902__$1);
var G__38905 = c__5568__auto___38903;
var G__38906 = cljs.core.count(c__5568__auto___38903);
var G__38907 = (0);
seq__38326_38857 = G__38904;
chunk__38328_38858 = G__38905;
count__38329_38859 = G__38906;
i__38330_38860 = G__38907;
continue;
} else {
var child_struct_38908 = cljs.core.first(seq__38326_38902__$1);
if((!((child_struct_38908 == null)))){
if(typeof child_struct_38908 === 'string'){
var text_38909 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_38909),child_struct_38908].join(''));
} else {
var children_38910 = shadow.dom.svg_node(child_struct_38908);
if(cljs.core.seq_QMARK_(children_38910)){
var seq__38423_38911 = cljs.core.seq(children_38910);
var chunk__38425_38912 = null;
var count__38426_38913 = (0);
var i__38427_38914 = (0);
while(true){
if((i__38427_38914 < count__38426_38913)){
var child_38915 = chunk__38425_38912.cljs$core$IIndexed$_nth$arity$2(null,i__38427_38914);
if(cljs.core.truth_(child_38915)){
node.appendChild(child_38915);


var G__38916 = seq__38423_38911;
var G__38917 = chunk__38425_38912;
var G__38918 = count__38426_38913;
var G__38919 = (i__38427_38914 + (1));
seq__38423_38911 = G__38916;
chunk__38425_38912 = G__38917;
count__38426_38913 = G__38918;
i__38427_38914 = G__38919;
continue;
} else {
var G__38920 = seq__38423_38911;
var G__38921 = chunk__38425_38912;
var G__38922 = count__38426_38913;
var G__38923 = (i__38427_38914 + (1));
seq__38423_38911 = G__38920;
chunk__38425_38912 = G__38921;
count__38426_38913 = G__38922;
i__38427_38914 = G__38923;
continue;
}
} else {
var temp__5804__auto___38924__$1 = cljs.core.seq(seq__38423_38911);
if(temp__5804__auto___38924__$1){
var seq__38423_38925__$1 = temp__5804__auto___38924__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38423_38925__$1)){
var c__5568__auto___38926 = cljs.core.chunk_first(seq__38423_38925__$1);
var G__38927 = cljs.core.chunk_rest(seq__38423_38925__$1);
var G__38928 = c__5568__auto___38926;
var G__38929 = cljs.core.count(c__5568__auto___38926);
var G__38930 = (0);
seq__38423_38911 = G__38927;
chunk__38425_38912 = G__38928;
count__38426_38913 = G__38929;
i__38427_38914 = G__38930;
continue;
} else {
var child_38931 = cljs.core.first(seq__38423_38925__$1);
if(cljs.core.truth_(child_38931)){
node.appendChild(child_38931);


var G__38932 = cljs.core.next(seq__38423_38925__$1);
var G__38933 = null;
var G__38934 = (0);
var G__38935 = (0);
seq__38423_38911 = G__38932;
chunk__38425_38912 = G__38933;
count__38426_38913 = G__38934;
i__38427_38914 = G__38935;
continue;
} else {
var G__38936 = cljs.core.next(seq__38423_38925__$1);
var G__38937 = null;
var G__38938 = (0);
var G__38939 = (0);
seq__38423_38911 = G__38936;
chunk__38425_38912 = G__38937;
count__38426_38913 = G__38938;
i__38427_38914 = G__38939;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_38910);
}
}


var G__38940 = cljs.core.next(seq__38326_38902__$1);
var G__38941 = null;
var G__38942 = (0);
var G__38943 = (0);
seq__38326_38857 = G__38940;
chunk__38328_38858 = G__38941;
count__38329_38859 = G__38942;
i__38330_38860 = G__38943;
continue;
} else {
var G__38944 = cljs.core.next(seq__38326_38902__$1);
var G__38945 = null;
var G__38946 = (0);
var G__38947 = (0);
seq__38326_38857 = G__38944;
chunk__38328_38858 = G__38945;
count__38329_38859 = G__38946;
i__38330_38860 = G__38947;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___38948 = arguments.length;
var i__5770__auto___38949 = (0);
while(true){
if((i__5770__auto___38949 < len__5769__auto___38948)){
args__5775__auto__.push((arguments[i__5770__auto___38949]));

var G__38950 = (i__5770__auto___38949 + (1));
i__5770__auto___38949 = G__38950;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq38451){
var G__38452 = cljs.core.first(seq38451);
var seq38451__$1 = cljs.core.next(seq38451);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38452,seq38451__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__38497 = arguments.length;
switch (G__38497) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__34851__auto___38952 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34852__auto__ = (function (){var switch__34630__auto__ = (function (state_38508){
var state_val_38509 = (state_38508[(1)]);
if((state_val_38509 === (1))){
var state_38508__$1 = state_38508;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38508__$1,(2),once_or_cleanup);
} else {
if((state_val_38509 === (2))){
var inst_38505 = (state_38508[(2)]);
var inst_38506 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_38508__$1 = (function (){var statearr_38521 = state_38508;
(statearr_38521[(7)] = inst_38505);

return statearr_38521;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38508__$1,inst_38506);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__34631__auto__ = null;
var shadow$dom$state_machine__34631__auto____0 = (function (){
var statearr_38522 = [null,null,null,null,null,null,null,null];
(statearr_38522[(0)] = shadow$dom$state_machine__34631__auto__);

(statearr_38522[(1)] = (1));

return statearr_38522;
});
var shadow$dom$state_machine__34631__auto____1 = (function (state_38508){
while(true){
var ret_value__34632__auto__ = (function (){try{while(true){
var result__34633__auto__ = switch__34630__auto__(state_38508);
if(cljs.core.keyword_identical_QMARK_(result__34633__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34633__auto__;
}
break;
}
}catch (e38523){var ex__34634__auto__ = e38523;
var statearr_38524_38953 = state_38508;
(statearr_38524_38953[(2)] = ex__34634__auto__);


if(cljs.core.seq((state_38508[(4)]))){
var statearr_38527_38954 = state_38508;
(statearr_38527_38954[(1)] = cljs.core.first((state_38508[(4)])));

} else {
throw ex__34634__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38955 = state_38508;
state_38508 = G__38955;
continue;
} else {
return ret_value__34632__auto__;
}
break;
}
});
shadow$dom$state_machine__34631__auto__ = function(state_38508){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__34631__auto____0.call(this);
case 1:
return shadow$dom$state_machine__34631__auto____1.call(this,state_38508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__34631__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__34631__auto____0;
shadow$dom$state_machine__34631__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__34631__auto____1;
return shadow$dom$state_machine__34631__auto__;
})()
})();
var state__34853__auto__ = (function (){var statearr_38531 = f__34852__auto__();
(statearr_38531[(6)] = c__34851__auto___38952);

return statearr_38531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34853__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
