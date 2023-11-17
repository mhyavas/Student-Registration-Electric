goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_36528 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_36528(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_36530 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_36530(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__35281 = coll;
var G__35282 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__35281,G__35282) : shadow.dom.lazy_native_coll_seq.call(null,G__35281,G__35282));
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
var G__35321 = arguments.length;
switch (G__35321) {
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
var G__35332 = arguments.length;
switch (G__35332) {
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
var G__35341 = arguments.length;
switch (G__35341) {
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
var G__35352 = arguments.length;
switch (G__35352) {
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
var G__35369 = arguments.length;
switch (G__35369) {
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
var G__35401 = arguments.length;
switch (G__35401) {
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
}catch (e35408){if((e35408 instanceof Object)){
var e = e35408;
return console.log("didnt support attachEvent",el,e);
} else {
throw e35408;

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
var seq__35413 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__35414 = null;
var count__35415 = (0);
var i__35416 = (0);
while(true){
if((i__35416 < count__35415)){
var el = chunk__35414.cljs$core$IIndexed$_nth$arity$2(null,i__35416);
var handler_36537__$1 = ((function (seq__35413,chunk__35414,count__35415,i__35416,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35413,chunk__35414,count__35415,i__35416,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_36537__$1);


var G__36538 = seq__35413;
var G__36539 = chunk__35414;
var G__36540 = count__35415;
var G__36541 = (i__35416 + (1));
seq__35413 = G__36538;
chunk__35414 = G__36539;
count__35415 = G__36540;
i__35416 = G__36541;
continue;
} else {
var temp__5816__auto__ = cljs.core.seq(seq__35413);
if(temp__5816__auto__){
var seq__35413__$1 = temp__5816__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35413__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__35413__$1);
var G__36542 = cljs.core.chunk_rest(seq__35413__$1);
var G__36543 = c__5568__auto__;
var G__36544 = cljs.core.count(c__5568__auto__);
var G__36545 = (0);
seq__35413 = G__36542;
chunk__35414 = G__36543;
count__35415 = G__36544;
i__35416 = G__36545;
continue;
} else {
var el = cljs.core.first(seq__35413__$1);
var handler_36546__$1 = ((function (seq__35413,chunk__35414,count__35415,i__35416,el,seq__35413__$1,temp__5816__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35413,chunk__35414,count__35415,i__35416,el,seq__35413__$1,temp__5816__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_36546__$1);


var G__36547 = cljs.core.next(seq__35413__$1);
var G__36548 = null;
var G__36549 = (0);
var G__36550 = (0);
seq__35413 = G__36547;
chunk__35414 = G__36548;
count__35415 = G__36549;
i__35416 = G__36550;
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
var G__35440 = arguments.length;
switch (G__35440) {
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
var seq__35453 = cljs.core.seq(events);
var chunk__35454 = null;
var count__35455 = (0);
var i__35456 = (0);
while(true){
if((i__35456 < count__35455)){
var vec__35486 = chunk__35454.cljs$core$IIndexed$_nth$arity$2(null,i__35456);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35486,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35486,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36562 = seq__35453;
var G__36563 = chunk__35454;
var G__36564 = count__35455;
var G__36565 = (i__35456 + (1));
seq__35453 = G__36562;
chunk__35454 = G__36563;
count__35455 = G__36564;
i__35456 = G__36565;
continue;
} else {
var temp__5816__auto__ = cljs.core.seq(seq__35453);
if(temp__5816__auto__){
var seq__35453__$1 = temp__5816__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35453__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__35453__$1);
var G__36566 = cljs.core.chunk_rest(seq__35453__$1);
var G__36567 = c__5568__auto__;
var G__36568 = cljs.core.count(c__5568__auto__);
var G__36569 = (0);
seq__35453 = G__36566;
chunk__35454 = G__36567;
count__35455 = G__36568;
i__35456 = G__36569;
continue;
} else {
var vec__35492 = cljs.core.first(seq__35453__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35492,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35492,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36571 = cljs.core.next(seq__35453__$1);
var G__36572 = null;
var G__36573 = (0);
var G__36574 = (0);
seq__35453 = G__36571;
chunk__35454 = G__36572;
count__35455 = G__36573;
i__35456 = G__36574;
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
var seq__35504 = cljs.core.seq(styles);
var chunk__35505 = null;
var count__35506 = (0);
var i__35507 = (0);
while(true){
if((i__35507 < count__35506)){
var vec__35527 = chunk__35505.cljs$core$IIndexed$_nth$arity$2(null,i__35507);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35527,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35527,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__36575 = seq__35504;
var G__36576 = chunk__35505;
var G__36577 = count__35506;
var G__36578 = (i__35507 + (1));
seq__35504 = G__36575;
chunk__35505 = G__36576;
count__35506 = G__36577;
i__35507 = G__36578;
continue;
} else {
var temp__5816__auto__ = cljs.core.seq(seq__35504);
if(temp__5816__auto__){
var seq__35504__$1 = temp__5816__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35504__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__35504__$1);
var G__36579 = cljs.core.chunk_rest(seq__35504__$1);
var G__36580 = c__5568__auto__;
var G__36581 = cljs.core.count(c__5568__auto__);
var G__36582 = (0);
seq__35504 = G__36579;
chunk__35505 = G__36580;
count__35506 = G__36581;
i__35507 = G__36582;
continue;
} else {
var vec__35539 = cljs.core.first(seq__35504__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35539,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35539,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__36586 = cljs.core.next(seq__35504__$1);
var G__36587 = null;
var G__36588 = (0);
var G__36589 = (0);
seq__35504 = G__36586;
chunk__35505 = G__36587;
count__35506 = G__36588;
i__35507 = G__36589;
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
var G__35543_36590 = key;
var G__35543_36591__$1 = (((G__35543_36590 instanceof cljs.core.Keyword))?G__35543_36590.fqn:null);
switch (G__35543_36591__$1) {
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
var ks_36593 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_36593,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_36593,"aria-");
}
})())){
el.setAttribute(ks_36593,value);
} else {
(el[ks_36593] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__35584){
var map__35586 = p__35584;
var map__35586__$1 = cljs.core.__destructure_map(map__35586);
var props = map__35586__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35586__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__35592 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35592,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35592,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35592,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__35599 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__35599,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__35599;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__35608 = arguments.length;
switch (G__35608) {
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
var temp__5816__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5816__auto__)){
var n = temp__5816__auto__;
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
var temp__5816__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5816__auto__)){
var n = temp__5816__auto__;
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__35624){
var vec__35630 = p__35624;
var seq__35631 = cljs.core.seq(vec__35630);
var first__35632 = cljs.core.first(seq__35631);
var seq__35631__$1 = cljs.core.next(seq__35631);
var nn = first__35632;
var first__35632__$1 = cljs.core.first(seq__35631__$1);
var seq__35631__$2 = cljs.core.next(seq__35631__$1);
var np = first__35632__$1;
var nc = seq__35631__$2;
var node = vec__35630;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35637 = nn;
var G__35638 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35637,G__35638) : create_fn.call(null,G__35637,G__35638));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35641 = nn;
var G__35642 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35641,G__35642) : create_fn.call(null,G__35641,G__35642));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__35647 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35647,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35647,(1),null);
var seq__35656_36600 = cljs.core.seq(node_children);
var chunk__35657_36601 = null;
var count__35658_36602 = (0);
var i__35659_36603 = (0);
while(true){
if((i__35659_36603 < count__35658_36602)){
var child_struct_36604 = chunk__35657_36601.cljs$core$IIndexed$_nth$arity$2(null,i__35659_36603);
var children_36605 = shadow.dom.dom_node(child_struct_36604);
if(cljs.core.seq_QMARK_(children_36605)){
var seq__35708_36606 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36605));
var chunk__35710_36607 = null;
var count__35711_36608 = (0);
var i__35712_36609 = (0);
while(true){
if((i__35712_36609 < count__35711_36608)){
var child_36610 = chunk__35710_36607.cljs$core$IIndexed$_nth$arity$2(null,i__35712_36609);
if(cljs.core.truth_(child_36610)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36610);


var G__36611 = seq__35708_36606;
var G__36612 = chunk__35710_36607;
var G__36613 = count__35711_36608;
var G__36614 = (i__35712_36609 + (1));
seq__35708_36606 = G__36611;
chunk__35710_36607 = G__36612;
count__35711_36608 = G__36613;
i__35712_36609 = G__36614;
continue;
} else {
var G__36615 = seq__35708_36606;
var G__36616 = chunk__35710_36607;
var G__36617 = count__35711_36608;
var G__36618 = (i__35712_36609 + (1));
seq__35708_36606 = G__36615;
chunk__35710_36607 = G__36616;
count__35711_36608 = G__36617;
i__35712_36609 = G__36618;
continue;
}
} else {
var temp__5816__auto___36619 = cljs.core.seq(seq__35708_36606);
if(temp__5816__auto___36619){
var seq__35708_36620__$1 = temp__5816__auto___36619;
if(cljs.core.chunked_seq_QMARK_(seq__35708_36620__$1)){
var c__5568__auto___36621 = cljs.core.chunk_first(seq__35708_36620__$1);
var G__36622 = cljs.core.chunk_rest(seq__35708_36620__$1);
var G__36623 = c__5568__auto___36621;
var G__36624 = cljs.core.count(c__5568__auto___36621);
var G__36625 = (0);
seq__35708_36606 = G__36622;
chunk__35710_36607 = G__36623;
count__35711_36608 = G__36624;
i__35712_36609 = G__36625;
continue;
} else {
var child_36626 = cljs.core.first(seq__35708_36620__$1);
if(cljs.core.truth_(child_36626)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36626);


var G__36627 = cljs.core.next(seq__35708_36620__$1);
var G__36628 = null;
var G__36629 = (0);
var G__36630 = (0);
seq__35708_36606 = G__36627;
chunk__35710_36607 = G__36628;
count__35711_36608 = G__36629;
i__35712_36609 = G__36630;
continue;
} else {
var G__36631 = cljs.core.next(seq__35708_36620__$1);
var G__36632 = null;
var G__36633 = (0);
var G__36634 = (0);
seq__35708_36606 = G__36631;
chunk__35710_36607 = G__36632;
count__35711_36608 = G__36633;
i__35712_36609 = G__36634;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36605);
}


var G__36636 = seq__35656_36600;
var G__36637 = chunk__35657_36601;
var G__36638 = count__35658_36602;
var G__36639 = (i__35659_36603 + (1));
seq__35656_36600 = G__36636;
chunk__35657_36601 = G__36637;
count__35658_36602 = G__36638;
i__35659_36603 = G__36639;
continue;
} else {
var temp__5816__auto___36640 = cljs.core.seq(seq__35656_36600);
if(temp__5816__auto___36640){
var seq__35656_36641__$1 = temp__5816__auto___36640;
if(cljs.core.chunked_seq_QMARK_(seq__35656_36641__$1)){
var c__5568__auto___36642 = cljs.core.chunk_first(seq__35656_36641__$1);
var G__36643 = cljs.core.chunk_rest(seq__35656_36641__$1);
var G__36644 = c__5568__auto___36642;
var G__36645 = cljs.core.count(c__5568__auto___36642);
var G__36646 = (0);
seq__35656_36600 = G__36643;
chunk__35657_36601 = G__36644;
count__35658_36602 = G__36645;
i__35659_36603 = G__36646;
continue;
} else {
var child_struct_36648 = cljs.core.first(seq__35656_36641__$1);
var children_36649 = shadow.dom.dom_node(child_struct_36648);
if(cljs.core.seq_QMARK_(children_36649)){
var seq__35742_36651 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36649));
var chunk__35744_36652 = null;
var count__35745_36653 = (0);
var i__35746_36654 = (0);
while(true){
if((i__35746_36654 < count__35745_36653)){
var child_36658 = chunk__35744_36652.cljs$core$IIndexed$_nth$arity$2(null,i__35746_36654);
if(cljs.core.truth_(child_36658)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36658);


var G__36659 = seq__35742_36651;
var G__36660 = chunk__35744_36652;
var G__36661 = count__35745_36653;
var G__36662 = (i__35746_36654 + (1));
seq__35742_36651 = G__36659;
chunk__35744_36652 = G__36660;
count__35745_36653 = G__36661;
i__35746_36654 = G__36662;
continue;
} else {
var G__36663 = seq__35742_36651;
var G__36664 = chunk__35744_36652;
var G__36665 = count__35745_36653;
var G__36666 = (i__35746_36654 + (1));
seq__35742_36651 = G__36663;
chunk__35744_36652 = G__36664;
count__35745_36653 = G__36665;
i__35746_36654 = G__36666;
continue;
}
} else {
var temp__5816__auto___36667__$1 = cljs.core.seq(seq__35742_36651);
if(temp__5816__auto___36667__$1){
var seq__35742_36668__$1 = temp__5816__auto___36667__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35742_36668__$1)){
var c__5568__auto___36669 = cljs.core.chunk_first(seq__35742_36668__$1);
var G__36671 = cljs.core.chunk_rest(seq__35742_36668__$1);
var G__36672 = c__5568__auto___36669;
var G__36673 = cljs.core.count(c__5568__auto___36669);
var G__36674 = (0);
seq__35742_36651 = G__36671;
chunk__35744_36652 = G__36672;
count__35745_36653 = G__36673;
i__35746_36654 = G__36674;
continue;
} else {
var child_36675 = cljs.core.first(seq__35742_36668__$1);
if(cljs.core.truth_(child_36675)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36675);


var G__36676 = cljs.core.next(seq__35742_36668__$1);
var G__36677 = null;
var G__36678 = (0);
var G__36679 = (0);
seq__35742_36651 = G__36676;
chunk__35744_36652 = G__36677;
count__35745_36653 = G__36678;
i__35746_36654 = G__36679;
continue;
} else {
var G__36680 = cljs.core.next(seq__35742_36668__$1);
var G__36681 = null;
var G__36682 = (0);
var G__36683 = (0);
seq__35742_36651 = G__36680;
chunk__35744_36652 = G__36681;
count__35745_36653 = G__36682;
i__35746_36654 = G__36683;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36649);
}


var G__36684 = cljs.core.next(seq__35656_36641__$1);
var G__36685 = null;
var G__36686 = (0);
var G__36687 = (0);
seq__35656_36600 = G__36684;
chunk__35657_36601 = G__36685;
count__35658_36602 = G__36686;
i__35659_36603 = G__36687;
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
var seq__35789 = cljs.core.seq(node);
var chunk__35790 = null;
var count__35791 = (0);
var i__35792 = (0);
while(true){
if((i__35792 < count__35791)){
var n = chunk__35790.cljs$core$IIndexed$_nth$arity$2(null,i__35792);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36688 = seq__35789;
var G__36689 = chunk__35790;
var G__36690 = count__35791;
var G__36691 = (i__35792 + (1));
seq__35789 = G__36688;
chunk__35790 = G__36689;
count__35791 = G__36690;
i__35792 = G__36691;
continue;
} else {
var temp__5816__auto__ = cljs.core.seq(seq__35789);
if(temp__5816__auto__){
var seq__35789__$1 = temp__5816__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35789__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__35789__$1);
var G__36692 = cljs.core.chunk_rest(seq__35789__$1);
var G__36693 = c__5568__auto__;
var G__36694 = cljs.core.count(c__5568__auto__);
var G__36695 = (0);
seq__35789 = G__36692;
chunk__35790 = G__36693;
count__35791 = G__36694;
i__35792 = G__36695;
continue;
} else {
var n = cljs.core.first(seq__35789__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36696 = cljs.core.next(seq__35789__$1);
var G__36697 = null;
var G__36698 = (0);
var G__36699 = (0);
seq__35789 = G__36696;
chunk__35790 = G__36697;
count__35791 = G__36698;
i__35792 = G__36699;
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
var G__35808 = arguments.length;
switch (G__35808) {
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
var G__35816 = arguments.length;
switch (G__35816) {
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
var G__35836 = arguments.length;
switch (G__35836) {
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
var len__5769__auto___36712 = arguments.length;
var i__5770__auto___36713 = (0);
while(true){
if((i__5770__auto___36713 < len__5769__auto___36712)){
args__5775__auto__.push((arguments[i__5770__auto___36713]));

var G__36714 = (i__5770__auto___36713 + (1));
i__5770__auto___36713 = G__36714;
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
var seq__35861_36718 = cljs.core.seq(nodes);
var chunk__35862_36719 = null;
var count__35863_36720 = (0);
var i__35864_36721 = (0);
while(true){
if((i__35864_36721 < count__35863_36720)){
var node_36723 = chunk__35862_36719.cljs$core$IIndexed$_nth$arity$2(null,i__35864_36721);
fragment.appendChild(shadow.dom._to_dom(node_36723));


var G__36727 = seq__35861_36718;
var G__36728 = chunk__35862_36719;
var G__36729 = count__35863_36720;
var G__36730 = (i__35864_36721 + (1));
seq__35861_36718 = G__36727;
chunk__35862_36719 = G__36728;
count__35863_36720 = G__36729;
i__35864_36721 = G__36730;
continue;
} else {
var temp__5816__auto___36731 = cljs.core.seq(seq__35861_36718);
if(temp__5816__auto___36731){
var seq__35861_36732__$1 = temp__5816__auto___36731;
if(cljs.core.chunked_seq_QMARK_(seq__35861_36732__$1)){
var c__5568__auto___36733 = cljs.core.chunk_first(seq__35861_36732__$1);
var G__36734 = cljs.core.chunk_rest(seq__35861_36732__$1);
var G__36735 = c__5568__auto___36733;
var G__36736 = cljs.core.count(c__5568__auto___36733);
var G__36737 = (0);
seq__35861_36718 = G__36734;
chunk__35862_36719 = G__36735;
count__35863_36720 = G__36736;
i__35864_36721 = G__36737;
continue;
} else {
var node_36738 = cljs.core.first(seq__35861_36732__$1);
fragment.appendChild(shadow.dom._to_dom(node_36738));


var G__36739 = cljs.core.next(seq__35861_36732__$1);
var G__36740 = null;
var G__36741 = (0);
var G__36742 = (0);
seq__35861_36718 = G__36739;
chunk__35862_36719 = G__36740;
count__35863_36720 = G__36741;
i__35864_36721 = G__36742;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq35854){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35854));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__35889_36744 = cljs.core.seq(scripts);
var chunk__35890_36745 = null;
var count__35891_36746 = (0);
var i__35892_36747 = (0);
while(true){
if((i__35892_36747 < count__35891_36746)){
var vec__35919_36748 = chunk__35890_36745.cljs$core$IIndexed$_nth$arity$2(null,i__35892_36747);
var script_tag_36749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35919_36748,(0),null);
var script_body_36750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35919_36748,(1),null);
eval(script_body_36750);


var G__36751 = seq__35889_36744;
var G__36752 = chunk__35890_36745;
var G__36753 = count__35891_36746;
var G__36754 = (i__35892_36747 + (1));
seq__35889_36744 = G__36751;
chunk__35890_36745 = G__36752;
count__35891_36746 = G__36753;
i__35892_36747 = G__36754;
continue;
} else {
var temp__5816__auto___36755 = cljs.core.seq(seq__35889_36744);
if(temp__5816__auto___36755){
var seq__35889_36757__$1 = temp__5816__auto___36755;
if(cljs.core.chunked_seq_QMARK_(seq__35889_36757__$1)){
var c__5568__auto___36758 = cljs.core.chunk_first(seq__35889_36757__$1);
var G__36759 = cljs.core.chunk_rest(seq__35889_36757__$1);
var G__36760 = c__5568__auto___36758;
var G__36761 = cljs.core.count(c__5568__auto___36758);
var G__36762 = (0);
seq__35889_36744 = G__36759;
chunk__35890_36745 = G__36760;
count__35891_36746 = G__36761;
i__35892_36747 = G__36762;
continue;
} else {
var vec__35922_36764 = cljs.core.first(seq__35889_36757__$1);
var script_tag_36765 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35922_36764,(0),null);
var script_body_36766 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35922_36764,(1),null);
eval(script_body_36766);


var G__36767 = cljs.core.next(seq__35889_36757__$1);
var G__36768 = null;
var G__36769 = (0);
var G__36770 = (0);
seq__35889_36744 = G__36767;
chunk__35890_36745 = G__36768;
count__35891_36746 = G__36769;
i__35892_36747 = G__36770;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__35925){
var vec__35926 = p__35925;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35926,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35926,(1),null);
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
var G__35939 = arguments.length;
switch (G__35939) {
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
var seq__35965 = cljs.core.seq(style_keys);
var chunk__35966 = null;
var count__35967 = (0);
var i__35968 = (0);
while(true){
if((i__35968 < count__35967)){
var it = chunk__35966.cljs$core$IIndexed$_nth$arity$2(null,i__35968);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36777 = seq__35965;
var G__36778 = chunk__35966;
var G__36779 = count__35967;
var G__36780 = (i__35968 + (1));
seq__35965 = G__36777;
chunk__35966 = G__36778;
count__35967 = G__36779;
i__35968 = G__36780;
continue;
} else {
var temp__5816__auto__ = cljs.core.seq(seq__35965);
if(temp__5816__auto__){
var seq__35965__$1 = temp__5816__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35965__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__35965__$1);
var G__36784 = cljs.core.chunk_rest(seq__35965__$1);
var G__36785 = c__5568__auto__;
var G__36786 = cljs.core.count(c__5568__auto__);
var G__36787 = (0);
seq__35965 = G__36784;
chunk__35966 = G__36785;
count__35967 = G__36786;
i__35968 = G__36787;
continue;
} else {
var it = cljs.core.first(seq__35965__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36788 = cljs.core.next(seq__35965__$1);
var G__36789 = null;
var G__36790 = (0);
var G__36791 = (0);
seq__35965 = G__36788;
chunk__35966 = G__36789;
count__35967 = G__36790;
i__35968 = G__36791;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k35978,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__35991 = k35978;
var G__35991__$1 = (((G__35991 instanceof cljs.core.Keyword))?G__35991.fqn:null);
switch (G__35991__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35978,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__35996){
var vec__35997 = p__35996;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35997,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35997,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35977){
var self__ = this;
var G__35977__$1 = this;
return (new cljs.core.RecordIter((0),G__35977__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35979,other35980){
var self__ = this;
var this35979__$1 = this;
return (((!((other35980 == null)))) && ((((this35979__$1.constructor === other35980.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35979__$1.x,other35980.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35979__$1.y,other35980.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35979__$1.__extmap,other35980.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k35978){
var self__ = this;
var this__5350__auto____$1 = this;
var G__36023 = k35978;
var G__36023__$1 = (((G__36023 instanceof cljs.core.Keyword))?G__36023.fqn:null);
switch (G__36023__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35978);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__35977){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__36028 = cljs.core.keyword_identical_QMARK_;
var expr__36029 = k__5352__auto__;
if(cljs.core.truth_((pred__36028.cljs$core$IFn$_invoke$arity$2 ? pred__36028.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__36029) : pred__36028.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__36029)))){
return (new shadow.dom.Coordinate(G__35977,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36028.cljs$core$IFn$_invoke$arity$2 ? pred__36028.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__36029) : pred__36028.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__36029)))){
return (new shadow.dom.Coordinate(self__.x,G__35977,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__35977),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__35977){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__35977,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__35985){
var extmap__5385__auto__ = (function (){var G__36039 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35985,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__35985)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36039);
} else {
return G__36039;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__35985),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__35985),null,cljs.core.not_empty(extmap__5385__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k36063,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__36075 = k36063;
var G__36075__$1 = (((G__36075 instanceof cljs.core.Keyword))?G__36075.fqn:null);
switch (G__36075__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36063,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__36079){
var vec__36081 = p__36079;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36081,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36081,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36062){
var self__ = this;
var G__36062__$1 = this;
return (new cljs.core.RecordIter((0),G__36062__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36064,other36065){
var self__ = this;
var this36064__$1 = this;
return (((!((other36065 == null)))) && ((((this36064__$1.constructor === other36065.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36064__$1.w,other36065.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36064__$1.h,other36065.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36064__$1.__extmap,other36065.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k36063){
var self__ = this;
var this__5350__auto____$1 = this;
var G__36090 = k36063;
var G__36090__$1 = (((G__36090 instanceof cljs.core.Keyword))?G__36090.fqn:null);
switch (G__36090__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k36063);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__36062){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__36100 = cljs.core.keyword_identical_QMARK_;
var expr__36101 = k__5352__auto__;
if(cljs.core.truth_((pred__36100.cljs$core$IFn$_invoke$arity$2 ? pred__36100.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__36101) : pred__36100.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__36101)))){
return (new shadow.dom.Size(G__36062,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36100.cljs$core$IFn$_invoke$arity$2 ? pred__36100.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__36101) : pred__36100.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__36101)))){
return (new shadow.dom.Size(self__.w,G__36062,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__36062),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__36062){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__36062,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__36067){
var extmap__5385__auto__ = (function (){var G__36117 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36067,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__36067)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36117);
} else {
return G__36117;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__36067),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__36067),null,cljs.core.not_empty(extmap__5385__auto__),null));
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
var G__36859 = (i + (1));
var G__36860 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__36859;
ret = G__36860;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__36135){
var vec__36136 = p__36135;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36136,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36136,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__36148 = arguments.length;
switch (G__36148) {
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
var temp__5814__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5814__auto__)){
var child = temp__5814__auto__;
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
var G__36863 = ps;
var G__36864 = (i + (1));
el__$1 = G__36863;
i = G__36864;
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
var vec__36261 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36261,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36261,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36261,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__36265_36866 = cljs.core.seq(props);
var chunk__36266_36867 = null;
var count__36267_36868 = (0);
var i__36268_36869 = (0);
while(true){
if((i__36268_36869 < count__36267_36868)){
var vec__36280_36870 = chunk__36266_36867.cljs$core$IIndexed$_nth$arity$2(null,i__36268_36869);
var k_36871 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36280_36870,(0),null);
var v_36872 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36280_36870,(1),null);
el.setAttributeNS((function (){var temp__5816__auto__ = cljs.core.namespace(k_36871);
if(cljs.core.truth_(temp__5816__auto__)){
var ns = temp__5816__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36871),v_36872);


var G__36873 = seq__36265_36866;
var G__36874 = chunk__36266_36867;
var G__36875 = count__36267_36868;
var G__36876 = (i__36268_36869 + (1));
seq__36265_36866 = G__36873;
chunk__36266_36867 = G__36874;
count__36267_36868 = G__36875;
i__36268_36869 = G__36876;
continue;
} else {
var temp__5816__auto___36877 = cljs.core.seq(seq__36265_36866);
if(temp__5816__auto___36877){
var seq__36265_36878__$1 = temp__5816__auto___36877;
if(cljs.core.chunked_seq_QMARK_(seq__36265_36878__$1)){
var c__5568__auto___36879 = cljs.core.chunk_first(seq__36265_36878__$1);
var G__36880 = cljs.core.chunk_rest(seq__36265_36878__$1);
var G__36881 = c__5568__auto___36879;
var G__36882 = cljs.core.count(c__5568__auto___36879);
var G__36883 = (0);
seq__36265_36866 = G__36880;
chunk__36266_36867 = G__36881;
count__36267_36868 = G__36882;
i__36268_36869 = G__36883;
continue;
} else {
var vec__36284_36884 = cljs.core.first(seq__36265_36878__$1);
var k_36885 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36284_36884,(0),null);
var v_36886 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36284_36884,(1),null);
el.setAttributeNS((function (){var temp__5816__auto____$1 = cljs.core.namespace(k_36885);
if(cljs.core.truth_(temp__5816__auto____$1)){
var ns = temp__5816__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36885),v_36886);


var G__36887 = cljs.core.next(seq__36265_36878__$1);
var G__36888 = null;
var G__36889 = (0);
var G__36890 = (0);
seq__36265_36866 = G__36887;
chunk__36266_36867 = G__36888;
count__36267_36868 = G__36889;
i__36268_36869 = G__36890;
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
var vec__36314 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36314,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36314,(1),null);
var seq__36322_36893 = cljs.core.seq(node_children);
var chunk__36324_36894 = null;
var count__36325_36895 = (0);
var i__36326_36896 = (0);
while(true){
if((i__36326_36896 < count__36325_36895)){
var child_struct_36897 = chunk__36324_36894.cljs$core$IIndexed$_nth$arity$2(null,i__36326_36896);
if((!((child_struct_36897 == null)))){
if(typeof child_struct_36897 === 'string'){
var text_36898 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36898),child_struct_36897].join(''));
} else {
var children_36899 = shadow.dom.svg_node(child_struct_36897);
if(cljs.core.seq_QMARK_(children_36899)){
var seq__36403_36901 = cljs.core.seq(children_36899);
var chunk__36405_36902 = null;
var count__36406_36903 = (0);
var i__36407_36904 = (0);
while(true){
if((i__36407_36904 < count__36406_36903)){
var child_36905 = chunk__36405_36902.cljs$core$IIndexed$_nth$arity$2(null,i__36407_36904);
if(cljs.core.truth_(child_36905)){
node.appendChild(child_36905);


var G__36907 = seq__36403_36901;
var G__36908 = chunk__36405_36902;
var G__36909 = count__36406_36903;
var G__36910 = (i__36407_36904 + (1));
seq__36403_36901 = G__36907;
chunk__36405_36902 = G__36908;
count__36406_36903 = G__36909;
i__36407_36904 = G__36910;
continue;
} else {
var G__36912 = seq__36403_36901;
var G__36913 = chunk__36405_36902;
var G__36914 = count__36406_36903;
var G__36915 = (i__36407_36904 + (1));
seq__36403_36901 = G__36912;
chunk__36405_36902 = G__36913;
count__36406_36903 = G__36914;
i__36407_36904 = G__36915;
continue;
}
} else {
var temp__5816__auto___36916 = cljs.core.seq(seq__36403_36901);
if(temp__5816__auto___36916){
var seq__36403_36917__$1 = temp__5816__auto___36916;
if(cljs.core.chunked_seq_QMARK_(seq__36403_36917__$1)){
var c__5568__auto___36918 = cljs.core.chunk_first(seq__36403_36917__$1);
var G__36919 = cljs.core.chunk_rest(seq__36403_36917__$1);
var G__36920 = c__5568__auto___36918;
var G__36921 = cljs.core.count(c__5568__auto___36918);
var G__36922 = (0);
seq__36403_36901 = G__36919;
chunk__36405_36902 = G__36920;
count__36406_36903 = G__36921;
i__36407_36904 = G__36922;
continue;
} else {
var child_36925 = cljs.core.first(seq__36403_36917__$1);
if(cljs.core.truth_(child_36925)){
node.appendChild(child_36925);


var G__36926 = cljs.core.next(seq__36403_36917__$1);
var G__36927 = null;
var G__36928 = (0);
var G__36929 = (0);
seq__36403_36901 = G__36926;
chunk__36405_36902 = G__36927;
count__36406_36903 = G__36928;
i__36407_36904 = G__36929;
continue;
} else {
var G__36930 = cljs.core.next(seq__36403_36917__$1);
var G__36931 = null;
var G__36932 = (0);
var G__36933 = (0);
seq__36403_36901 = G__36930;
chunk__36405_36902 = G__36931;
count__36406_36903 = G__36932;
i__36407_36904 = G__36933;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36899);
}
}


var G__36934 = seq__36322_36893;
var G__36935 = chunk__36324_36894;
var G__36936 = count__36325_36895;
var G__36937 = (i__36326_36896 + (1));
seq__36322_36893 = G__36934;
chunk__36324_36894 = G__36935;
count__36325_36895 = G__36936;
i__36326_36896 = G__36937;
continue;
} else {
var G__36938 = seq__36322_36893;
var G__36939 = chunk__36324_36894;
var G__36940 = count__36325_36895;
var G__36941 = (i__36326_36896 + (1));
seq__36322_36893 = G__36938;
chunk__36324_36894 = G__36939;
count__36325_36895 = G__36940;
i__36326_36896 = G__36941;
continue;
}
} else {
var temp__5816__auto___36942 = cljs.core.seq(seq__36322_36893);
if(temp__5816__auto___36942){
var seq__36322_36943__$1 = temp__5816__auto___36942;
if(cljs.core.chunked_seq_QMARK_(seq__36322_36943__$1)){
var c__5568__auto___36944 = cljs.core.chunk_first(seq__36322_36943__$1);
var G__36945 = cljs.core.chunk_rest(seq__36322_36943__$1);
var G__36946 = c__5568__auto___36944;
var G__36947 = cljs.core.count(c__5568__auto___36944);
var G__36948 = (0);
seq__36322_36893 = G__36945;
chunk__36324_36894 = G__36946;
count__36325_36895 = G__36947;
i__36326_36896 = G__36948;
continue;
} else {
var child_struct_36949 = cljs.core.first(seq__36322_36943__$1);
if((!((child_struct_36949 == null)))){
if(typeof child_struct_36949 === 'string'){
var text_36950 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36950),child_struct_36949].join(''));
} else {
var children_36951 = shadow.dom.svg_node(child_struct_36949);
if(cljs.core.seq_QMARK_(children_36951)){
var seq__36443_36952 = cljs.core.seq(children_36951);
var chunk__36445_36953 = null;
var count__36446_36954 = (0);
var i__36447_36955 = (0);
while(true){
if((i__36447_36955 < count__36446_36954)){
var child_36956 = chunk__36445_36953.cljs$core$IIndexed$_nth$arity$2(null,i__36447_36955);
if(cljs.core.truth_(child_36956)){
node.appendChild(child_36956);


var G__36957 = seq__36443_36952;
var G__36958 = chunk__36445_36953;
var G__36959 = count__36446_36954;
var G__36960 = (i__36447_36955 + (1));
seq__36443_36952 = G__36957;
chunk__36445_36953 = G__36958;
count__36446_36954 = G__36959;
i__36447_36955 = G__36960;
continue;
} else {
var G__36961 = seq__36443_36952;
var G__36962 = chunk__36445_36953;
var G__36963 = count__36446_36954;
var G__36964 = (i__36447_36955 + (1));
seq__36443_36952 = G__36961;
chunk__36445_36953 = G__36962;
count__36446_36954 = G__36963;
i__36447_36955 = G__36964;
continue;
}
} else {
var temp__5816__auto___36965__$1 = cljs.core.seq(seq__36443_36952);
if(temp__5816__auto___36965__$1){
var seq__36443_36966__$1 = temp__5816__auto___36965__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36443_36966__$1)){
var c__5568__auto___36968 = cljs.core.chunk_first(seq__36443_36966__$1);
var G__36969 = cljs.core.chunk_rest(seq__36443_36966__$1);
var G__36970 = c__5568__auto___36968;
var G__36971 = cljs.core.count(c__5568__auto___36968);
var G__36972 = (0);
seq__36443_36952 = G__36969;
chunk__36445_36953 = G__36970;
count__36446_36954 = G__36971;
i__36447_36955 = G__36972;
continue;
} else {
var child_36973 = cljs.core.first(seq__36443_36966__$1);
if(cljs.core.truth_(child_36973)){
node.appendChild(child_36973);


var G__36974 = cljs.core.next(seq__36443_36966__$1);
var G__36975 = null;
var G__36976 = (0);
var G__36977 = (0);
seq__36443_36952 = G__36974;
chunk__36445_36953 = G__36975;
count__36446_36954 = G__36976;
i__36447_36955 = G__36977;
continue;
} else {
var G__36978 = cljs.core.next(seq__36443_36966__$1);
var G__36979 = null;
var G__36980 = (0);
var G__36981 = (0);
seq__36443_36952 = G__36978;
chunk__36445_36953 = G__36979;
count__36446_36954 = G__36980;
i__36447_36955 = G__36981;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36951);
}
}


var G__36982 = cljs.core.next(seq__36322_36943__$1);
var G__36983 = null;
var G__36984 = (0);
var G__36985 = (0);
seq__36322_36893 = G__36982;
chunk__36324_36894 = G__36983;
count__36325_36895 = G__36984;
i__36326_36896 = G__36985;
continue;
} else {
var G__36986 = cljs.core.next(seq__36322_36943__$1);
var G__36987 = null;
var G__36988 = (0);
var G__36989 = (0);
seq__36322_36893 = G__36986;
chunk__36324_36894 = G__36987;
count__36325_36895 = G__36988;
i__36326_36896 = G__36989;
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
var len__5769__auto___36994 = arguments.length;
var i__5770__auto___36995 = (0);
while(true){
if((i__5770__auto___36995 < len__5769__auto___36994)){
args__5775__auto__.push((arguments[i__5770__auto___36995]));

var G__36996 = (i__5770__auto___36995 + (1));
i__5770__auto___36995 = G__36996;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq36469){
var G__36470 = cljs.core.first(seq36469);
var seq36469__$1 = cljs.core.next(seq36469);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36470,seq36469__$1);
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
var G__36479 = arguments.length;
switch (G__36479) {
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
var c__32949__auto___37008 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32950__auto__ = (function (){var switch__32811__auto__ = (function (state_36490){
var state_val_36491 = (state_36490[(1)]);
if((state_val_36491 === (1))){
var state_36490__$1 = state_36490;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36490__$1,(2),once_or_cleanup);
} else {
if((state_val_36491 === (2))){
var inst_36487 = (state_36490[(2)]);
var inst_36488 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_36490__$1 = (function (){var statearr_36492 = state_36490;
(statearr_36492[(7)] = inst_36487);

return statearr_36492;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36490__$1,inst_36488);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__32812__auto__ = null;
var shadow$dom$state_machine__32812__auto____0 = (function (){
var statearr_36493 = [null,null,null,null,null,null,null,null];
(statearr_36493[(0)] = shadow$dom$state_machine__32812__auto__);

(statearr_36493[(1)] = (1));

return statearr_36493;
});
var shadow$dom$state_machine__32812__auto____1 = (function (state_36490){
while(true){
var ret_value__32813__auto__ = (function (){try{while(true){
var result__32814__auto__ = switch__32811__auto__(state_36490);
if(cljs.core.keyword_identical_QMARK_(result__32814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32814__auto__;
}
break;
}
}catch (e36496){var ex__32815__auto__ = e36496;
var statearr_36497_37013 = state_36490;
(statearr_36497_37013[(2)] = ex__32815__auto__);


if(cljs.core.seq((state_36490[(4)]))){
var statearr_36498_37014 = state_36490;
(statearr_36498_37014[(1)] = cljs.core.first((state_36490[(4)])));

} else {
throw ex__32815__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37017 = state_36490;
state_36490 = G__37017;
continue;
} else {
return ret_value__32813__auto__;
}
break;
}
});
shadow$dom$state_machine__32812__auto__ = function(state_36490){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__32812__auto____0.call(this);
case 1:
return shadow$dom$state_machine__32812__auto____1.call(this,state_36490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__32812__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__32812__auto____0;
shadow$dom$state_machine__32812__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__32812__auto____1;
return shadow$dom$state_machine__32812__auto__;
})()
})();
var state__32951__auto__ = (function (){var statearr_36499 = f__32950__auto__();
(statearr_36499[(6)] = c__32949__auto___37008);

return statearr_36499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32951__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
