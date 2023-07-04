goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_36446 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_36446(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_36447 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_36447(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__35265 = coll;
var G__35266 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__35265,G__35266) : shadow.dom.lazy_native_coll_seq.call(null,G__35265,G__35266));
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
var G__35295 = arguments.length;
switch (G__35295) {
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
var G__35312 = arguments.length;
switch (G__35312) {
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
var G__35328 = arguments.length;
switch (G__35328) {
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
var G__35374 = arguments.length;
switch (G__35374) {
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
var G__35382 = arguments.length;
switch (G__35382) {
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
}catch (e35395){if((e35395 instanceof Object)){
var e = e35395;
return console.log("didnt support attachEvent",el,e);
} else {
throw e35395;

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
var seq__35406 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__35407 = null;
var count__35408 = (0);
var i__35409 = (0);
while(true){
if((i__35409 < count__35408)){
var el = chunk__35407.cljs$core$IIndexed$_nth$arity$2(null,i__35409);
var handler_36465__$1 = ((function (seq__35406,chunk__35407,count__35408,i__35409,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35406,chunk__35407,count__35408,i__35409,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_36465__$1);


var G__36466 = seq__35406;
var G__36467 = chunk__35407;
var G__36468 = count__35408;
var G__36469 = (i__35409 + (1));
seq__35406 = G__36466;
chunk__35407 = G__36467;
count__35408 = G__36468;
i__35409 = G__36469;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35406);
if(temp__5804__auto__){
var seq__35406__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35406__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__35406__$1);
var G__36470 = cljs.core.chunk_rest(seq__35406__$1);
var G__36471 = c__5568__auto__;
var G__36472 = cljs.core.count(c__5568__auto__);
var G__36473 = (0);
seq__35406 = G__36470;
chunk__35407 = G__36471;
count__35408 = G__36472;
i__35409 = G__36473;
continue;
} else {
var el = cljs.core.first(seq__35406__$1);
var handler_36474__$1 = ((function (seq__35406,chunk__35407,count__35408,i__35409,el,seq__35406__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35406,chunk__35407,count__35408,i__35409,el,seq__35406__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_36474__$1);


var G__36475 = cljs.core.next(seq__35406__$1);
var G__36476 = null;
var G__36477 = (0);
var G__36478 = (0);
seq__35406 = G__36475;
chunk__35407 = G__36476;
count__35408 = G__36477;
i__35409 = G__36478;
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
var G__35437 = arguments.length;
switch (G__35437) {
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
var seq__35454 = cljs.core.seq(events);
var chunk__35455 = null;
var count__35456 = (0);
var i__35457 = (0);
while(true){
if((i__35457 < count__35456)){
var vec__35469 = chunk__35455.cljs$core$IIndexed$_nth$arity$2(null,i__35457);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35469,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35469,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36484 = seq__35454;
var G__36485 = chunk__35455;
var G__36486 = count__35456;
var G__36487 = (i__35457 + (1));
seq__35454 = G__36484;
chunk__35455 = G__36485;
count__35456 = G__36486;
i__35457 = G__36487;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35454);
if(temp__5804__auto__){
var seq__35454__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35454__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__35454__$1);
var G__36489 = cljs.core.chunk_rest(seq__35454__$1);
var G__36490 = c__5568__auto__;
var G__36491 = cljs.core.count(c__5568__auto__);
var G__36492 = (0);
seq__35454 = G__36489;
chunk__35455 = G__36490;
count__35456 = G__36491;
i__35457 = G__36492;
continue;
} else {
var vec__35475 = cljs.core.first(seq__35454__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35475,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35475,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36496 = cljs.core.next(seq__35454__$1);
var G__36497 = null;
var G__36498 = (0);
var G__36499 = (0);
seq__35454 = G__36496;
chunk__35455 = G__36497;
count__35456 = G__36498;
i__35457 = G__36499;
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
var seq__35479 = cljs.core.seq(styles);
var chunk__35480 = null;
var count__35481 = (0);
var i__35482 = (0);
while(true){
if((i__35482 < count__35481)){
var vec__35490 = chunk__35480.cljs$core$IIndexed$_nth$arity$2(null,i__35482);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35490,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35490,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__36500 = seq__35479;
var G__36501 = chunk__35480;
var G__36502 = count__35481;
var G__36503 = (i__35482 + (1));
seq__35479 = G__36500;
chunk__35480 = G__36501;
count__35481 = G__36502;
i__35482 = G__36503;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35479);
if(temp__5804__auto__){
var seq__35479__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35479__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__35479__$1);
var G__36504 = cljs.core.chunk_rest(seq__35479__$1);
var G__36505 = c__5568__auto__;
var G__36506 = cljs.core.count(c__5568__auto__);
var G__36507 = (0);
seq__35479 = G__36504;
chunk__35480 = G__36505;
count__35481 = G__36506;
i__35482 = G__36507;
continue;
} else {
var vec__35501 = cljs.core.first(seq__35479__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35501,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35501,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__36509 = cljs.core.next(seq__35479__$1);
var G__36510 = null;
var G__36511 = (0);
var G__36512 = (0);
seq__35479 = G__36509;
chunk__35480 = G__36510;
count__35481 = G__36511;
i__35482 = G__36512;
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
var G__35517_36513 = key;
var G__35517_36514__$1 = (((G__35517_36513 instanceof cljs.core.Keyword))?G__35517_36513.fqn:null);
switch (G__35517_36514__$1) {
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
var ks_36516 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_36516,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_36516,"aria-");
}
})())){
el.setAttribute(ks_36516,value);
} else {
(el[ks_36516] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__35558){
var map__35559 = p__35558;
var map__35559__$1 = cljs.core.__destructure_map(map__35559);
var props = map__35559__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35559__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__35561 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35561,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35561,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35561,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__35566 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__35566,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__35566;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__35574 = arguments.length;
switch (G__35574) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__35598){
var vec__35601 = p__35598;
var seq__35602 = cljs.core.seq(vec__35601);
var first__35603 = cljs.core.first(seq__35602);
var seq__35602__$1 = cljs.core.next(seq__35602);
var nn = first__35603;
var first__35603__$1 = cljs.core.first(seq__35602__$1);
var seq__35602__$2 = cljs.core.next(seq__35602__$1);
var np = first__35603__$1;
var nc = seq__35602__$2;
var node = vec__35601;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35609 = nn;
var G__35610 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35609,G__35610) : create_fn.call(null,G__35609,G__35610));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35612 = nn;
var G__35613 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35612,G__35613) : create_fn.call(null,G__35612,G__35613));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__35620 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35620,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35620,(1),null);
var seq__35625_36521 = cljs.core.seq(node_children);
var chunk__35626_36522 = null;
var count__35627_36523 = (0);
var i__35628_36524 = (0);
while(true){
if((i__35628_36524 < count__35627_36523)){
var child_struct_36525 = chunk__35626_36522.cljs$core$IIndexed$_nth$arity$2(null,i__35628_36524);
var children_36526 = shadow.dom.dom_node(child_struct_36525);
if(cljs.core.seq_QMARK_(children_36526)){
var seq__35676_36527 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36526));
var chunk__35678_36528 = null;
var count__35679_36529 = (0);
var i__35680_36530 = (0);
while(true){
if((i__35680_36530 < count__35679_36529)){
var child_36533 = chunk__35678_36528.cljs$core$IIndexed$_nth$arity$2(null,i__35680_36530);
if(cljs.core.truth_(child_36533)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36533);


var G__36534 = seq__35676_36527;
var G__36535 = chunk__35678_36528;
var G__36536 = count__35679_36529;
var G__36537 = (i__35680_36530 + (1));
seq__35676_36527 = G__36534;
chunk__35678_36528 = G__36535;
count__35679_36529 = G__36536;
i__35680_36530 = G__36537;
continue;
} else {
var G__36538 = seq__35676_36527;
var G__36539 = chunk__35678_36528;
var G__36540 = count__35679_36529;
var G__36541 = (i__35680_36530 + (1));
seq__35676_36527 = G__36538;
chunk__35678_36528 = G__36539;
count__35679_36529 = G__36540;
i__35680_36530 = G__36541;
continue;
}
} else {
var temp__5804__auto___36542 = cljs.core.seq(seq__35676_36527);
if(temp__5804__auto___36542){
var seq__35676_36543__$1 = temp__5804__auto___36542;
if(cljs.core.chunked_seq_QMARK_(seq__35676_36543__$1)){
var c__5568__auto___36544 = cljs.core.chunk_first(seq__35676_36543__$1);
var G__36545 = cljs.core.chunk_rest(seq__35676_36543__$1);
var G__36546 = c__5568__auto___36544;
var G__36547 = cljs.core.count(c__5568__auto___36544);
var G__36548 = (0);
seq__35676_36527 = G__36545;
chunk__35678_36528 = G__36546;
count__35679_36529 = G__36547;
i__35680_36530 = G__36548;
continue;
} else {
var child_36549 = cljs.core.first(seq__35676_36543__$1);
if(cljs.core.truth_(child_36549)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36549);


var G__36550 = cljs.core.next(seq__35676_36543__$1);
var G__36551 = null;
var G__36552 = (0);
var G__36553 = (0);
seq__35676_36527 = G__36550;
chunk__35678_36528 = G__36551;
count__35679_36529 = G__36552;
i__35680_36530 = G__36553;
continue;
} else {
var G__36554 = cljs.core.next(seq__35676_36543__$1);
var G__36555 = null;
var G__36556 = (0);
var G__36557 = (0);
seq__35676_36527 = G__36554;
chunk__35678_36528 = G__36555;
count__35679_36529 = G__36556;
i__35680_36530 = G__36557;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36526);
}


var G__36558 = seq__35625_36521;
var G__36559 = chunk__35626_36522;
var G__36560 = count__35627_36523;
var G__36561 = (i__35628_36524 + (1));
seq__35625_36521 = G__36558;
chunk__35626_36522 = G__36559;
count__35627_36523 = G__36560;
i__35628_36524 = G__36561;
continue;
} else {
var temp__5804__auto___36562 = cljs.core.seq(seq__35625_36521);
if(temp__5804__auto___36562){
var seq__35625_36563__$1 = temp__5804__auto___36562;
if(cljs.core.chunked_seq_QMARK_(seq__35625_36563__$1)){
var c__5568__auto___36564 = cljs.core.chunk_first(seq__35625_36563__$1);
var G__36565 = cljs.core.chunk_rest(seq__35625_36563__$1);
var G__36566 = c__5568__auto___36564;
var G__36567 = cljs.core.count(c__5568__auto___36564);
var G__36568 = (0);
seq__35625_36521 = G__36565;
chunk__35626_36522 = G__36566;
count__35627_36523 = G__36567;
i__35628_36524 = G__36568;
continue;
} else {
var child_struct_36569 = cljs.core.first(seq__35625_36563__$1);
var children_36570 = shadow.dom.dom_node(child_struct_36569);
if(cljs.core.seq_QMARK_(children_36570)){
var seq__35697_36573 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36570));
var chunk__35699_36574 = null;
var count__35700_36575 = (0);
var i__35701_36576 = (0);
while(true){
if((i__35701_36576 < count__35700_36575)){
var child_36577 = chunk__35699_36574.cljs$core$IIndexed$_nth$arity$2(null,i__35701_36576);
if(cljs.core.truth_(child_36577)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36577);


var G__36578 = seq__35697_36573;
var G__36579 = chunk__35699_36574;
var G__36580 = count__35700_36575;
var G__36581 = (i__35701_36576 + (1));
seq__35697_36573 = G__36578;
chunk__35699_36574 = G__36579;
count__35700_36575 = G__36580;
i__35701_36576 = G__36581;
continue;
} else {
var G__36582 = seq__35697_36573;
var G__36583 = chunk__35699_36574;
var G__36584 = count__35700_36575;
var G__36585 = (i__35701_36576 + (1));
seq__35697_36573 = G__36582;
chunk__35699_36574 = G__36583;
count__35700_36575 = G__36584;
i__35701_36576 = G__36585;
continue;
}
} else {
var temp__5804__auto___36586__$1 = cljs.core.seq(seq__35697_36573);
if(temp__5804__auto___36586__$1){
var seq__35697_36587__$1 = temp__5804__auto___36586__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35697_36587__$1)){
var c__5568__auto___36588 = cljs.core.chunk_first(seq__35697_36587__$1);
var G__36589 = cljs.core.chunk_rest(seq__35697_36587__$1);
var G__36590 = c__5568__auto___36588;
var G__36591 = cljs.core.count(c__5568__auto___36588);
var G__36592 = (0);
seq__35697_36573 = G__36589;
chunk__35699_36574 = G__36590;
count__35700_36575 = G__36591;
i__35701_36576 = G__36592;
continue;
} else {
var child_36593 = cljs.core.first(seq__35697_36587__$1);
if(cljs.core.truth_(child_36593)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36593);


var G__36594 = cljs.core.next(seq__35697_36587__$1);
var G__36595 = null;
var G__36596 = (0);
var G__36597 = (0);
seq__35697_36573 = G__36594;
chunk__35699_36574 = G__36595;
count__35700_36575 = G__36596;
i__35701_36576 = G__36597;
continue;
} else {
var G__36598 = cljs.core.next(seq__35697_36587__$1);
var G__36599 = null;
var G__36600 = (0);
var G__36601 = (0);
seq__35697_36573 = G__36598;
chunk__35699_36574 = G__36599;
count__35700_36575 = G__36600;
i__35701_36576 = G__36601;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36570);
}


var G__36602 = cljs.core.next(seq__35625_36563__$1);
var G__36603 = null;
var G__36604 = (0);
var G__36605 = (0);
seq__35625_36521 = G__36602;
chunk__35626_36522 = G__36603;
count__35627_36523 = G__36604;
i__35628_36524 = G__36605;
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
var seq__35759 = cljs.core.seq(node);
var chunk__35760 = null;
var count__35761 = (0);
var i__35762 = (0);
while(true){
if((i__35762 < count__35761)){
var n = chunk__35760.cljs$core$IIndexed$_nth$arity$2(null,i__35762);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36609 = seq__35759;
var G__36611 = chunk__35760;
var G__36612 = count__35761;
var G__36614 = (i__35762 + (1));
seq__35759 = G__36609;
chunk__35760 = G__36611;
count__35761 = G__36612;
i__35762 = G__36614;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35759);
if(temp__5804__auto__){
var seq__35759__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35759__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__35759__$1);
var G__36616 = cljs.core.chunk_rest(seq__35759__$1);
var G__36617 = c__5568__auto__;
var G__36618 = cljs.core.count(c__5568__auto__);
var G__36619 = (0);
seq__35759 = G__36616;
chunk__35760 = G__36617;
count__35761 = G__36618;
i__35762 = G__36619;
continue;
} else {
var n = cljs.core.first(seq__35759__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36621 = cljs.core.next(seq__35759__$1);
var G__36622 = null;
var G__36623 = (0);
var G__36624 = (0);
seq__35759 = G__36621;
chunk__35760 = G__36622;
count__35761 = G__36623;
i__35762 = G__36624;
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
var G__35782 = arguments.length;
switch (G__35782) {
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
var G__35787 = arguments.length;
switch (G__35787) {
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
var G__35807 = arguments.length;
switch (G__35807) {
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
var len__5769__auto___36633 = arguments.length;
var i__5770__auto___36634 = (0);
while(true){
if((i__5770__auto___36634 < len__5769__auto___36633)){
args__5775__auto__.push((arguments[i__5770__auto___36634]));

var G__36635 = (i__5770__auto___36634 + (1));
i__5770__auto___36634 = G__36635;
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
var seq__35825_36636 = cljs.core.seq(nodes);
var chunk__35826_36637 = null;
var count__35827_36638 = (0);
var i__35828_36639 = (0);
while(true){
if((i__35828_36639 < count__35827_36638)){
var node_36640 = chunk__35826_36637.cljs$core$IIndexed$_nth$arity$2(null,i__35828_36639);
fragment.appendChild(shadow.dom._to_dom(node_36640));


var G__36641 = seq__35825_36636;
var G__36642 = chunk__35826_36637;
var G__36643 = count__35827_36638;
var G__36644 = (i__35828_36639 + (1));
seq__35825_36636 = G__36641;
chunk__35826_36637 = G__36642;
count__35827_36638 = G__36643;
i__35828_36639 = G__36644;
continue;
} else {
var temp__5804__auto___36645 = cljs.core.seq(seq__35825_36636);
if(temp__5804__auto___36645){
var seq__35825_36647__$1 = temp__5804__auto___36645;
if(cljs.core.chunked_seq_QMARK_(seq__35825_36647__$1)){
var c__5568__auto___36655 = cljs.core.chunk_first(seq__35825_36647__$1);
var G__36658 = cljs.core.chunk_rest(seq__35825_36647__$1);
var G__36659 = c__5568__auto___36655;
var G__36660 = cljs.core.count(c__5568__auto___36655);
var G__36661 = (0);
seq__35825_36636 = G__36658;
chunk__35826_36637 = G__36659;
count__35827_36638 = G__36660;
i__35828_36639 = G__36661;
continue;
} else {
var node_36662 = cljs.core.first(seq__35825_36647__$1);
fragment.appendChild(shadow.dom._to_dom(node_36662));


var G__36663 = cljs.core.next(seq__35825_36647__$1);
var G__36664 = null;
var G__36665 = (0);
var G__36666 = (0);
seq__35825_36636 = G__36663;
chunk__35826_36637 = G__36664;
count__35827_36638 = G__36665;
i__35828_36639 = G__36666;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq35821){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35821));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__35844_36667 = cljs.core.seq(scripts);
var chunk__35845_36668 = null;
var count__35846_36669 = (0);
var i__35847_36670 = (0);
while(true){
if((i__35847_36670 < count__35846_36669)){
var vec__35861_36671 = chunk__35845_36668.cljs$core$IIndexed$_nth$arity$2(null,i__35847_36670);
var script_tag_36672 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35861_36671,(0),null);
var script_body_36673 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35861_36671,(1),null);
eval(script_body_36673);


var G__36675 = seq__35844_36667;
var G__36676 = chunk__35845_36668;
var G__36677 = count__35846_36669;
var G__36678 = (i__35847_36670 + (1));
seq__35844_36667 = G__36675;
chunk__35845_36668 = G__36676;
count__35846_36669 = G__36677;
i__35847_36670 = G__36678;
continue;
} else {
var temp__5804__auto___36679 = cljs.core.seq(seq__35844_36667);
if(temp__5804__auto___36679){
var seq__35844_36680__$1 = temp__5804__auto___36679;
if(cljs.core.chunked_seq_QMARK_(seq__35844_36680__$1)){
var c__5568__auto___36681 = cljs.core.chunk_first(seq__35844_36680__$1);
var G__36682 = cljs.core.chunk_rest(seq__35844_36680__$1);
var G__36683 = c__5568__auto___36681;
var G__36684 = cljs.core.count(c__5568__auto___36681);
var G__36685 = (0);
seq__35844_36667 = G__36682;
chunk__35845_36668 = G__36683;
count__35846_36669 = G__36684;
i__35847_36670 = G__36685;
continue;
} else {
var vec__35867_36686 = cljs.core.first(seq__35844_36680__$1);
var script_tag_36687 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35867_36686,(0),null);
var script_body_36688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35867_36686,(1),null);
eval(script_body_36688);


var G__36689 = cljs.core.next(seq__35844_36680__$1);
var G__36690 = null;
var G__36691 = (0);
var G__36692 = (0);
seq__35844_36667 = G__36689;
chunk__35845_36668 = G__36690;
count__35846_36669 = G__36691;
i__35847_36670 = G__36692;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__35872){
var vec__35873 = p__35872;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35873,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35873,(1),null);
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
var G__35888 = arguments.length;
switch (G__35888) {
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
var seq__35913 = cljs.core.seq(style_keys);
var chunk__35914 = null;
var count__35915 = (0);
var i__35916 = (0);
while(true){
if((i__35916 < count__35915)){
var it = chunk__35914.cljs$core$IIndexed$_nth$arity$2(null,i__35916);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36705 = seq__35913;
var G__36706 = chunk__35914;
var G__36707 = count__35915;
var G__36708 = (i__35916 + (1));
seq__35913 = G__36705;
chunk__35914 = G__36706;
count__35915 = G__36707;
i__35916 = G__36708;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35913);
if(temp__5804__auto__){
var seq__35913__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35913__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__35913__$1);
var G__36709 = cljs.core.chunk_rest(seq__35913__$1);
var G__36710 = c__5568__auto__;
var G__36711 = cljs.core.count(c__5568__auto__);
var G__36712 = (0);
seq__35913 = G__36709;
chunk__35914 = G__36710;
count__35915 = G__36711;
i__35916 = G__36712;
continue;
} else {
var it = cljs.core.first(seq__35913__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36714 = cljs.core.next(seq__35913__$1);
var G__36715 = null;
var G__36716 = (0);
var G__36717 = (0);
seq__35913 = G__36714;
chunk__35914 = G__36715;
count__35915 = G__36716;
i__35916 = G__36717;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k35923,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__35927 = k35923;
var G__35927__$1 = (((G__35927 instanceof cljs.core.Keyword))?G__35927.fqn:null);
switch (G__35927__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35923,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__35928){
var vec__35929 = p__35928;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35929,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35929,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35922){
var self__ = this;
var G__35922__$1 = this;
return (new cljs.core.RecordIter((0),G__35922__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35924,other35925){
var self__ = this;
var this35924__$1 = this;
return (((!((other35925 == null)))) && ((((this35924__$1.constructor === other35925.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35924__$1.x,other35925.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35924__$1.y,other35925.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35924__$1.__extmap,other35925.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k35923){
var self__ = this;
var this__5350__auto____$1 = this;
var G__35955 = k35923;
var G__35955__$1 = (((G__35955 instanceof cljs.core.Keyword))?G__35955.fqn:null);
switch (G__35955__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35923);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__35922){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__35958 = cljs.core.keyword_identical_QMARK_;
var expr__35959 = k__5352__auto__;
if(cljs.core.truth_((pred__35958.cljs$core$IFn$_invoke$arity$2 ? pred__35958.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__35959) : pred__35958.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__35959)))){
return (new shadow.dom.Coordinate(G__35922,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35958.cljs$core$IFn$_invoke$arity$2 ? pred__35958.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__35959) : pred__35958.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__35959)))){
return (new shadow.dom.Coordinate(self__.x,G__35922,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__35922),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__35922){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__35922,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__35926){
var extmap__5385__auto__ = (function (){var G__35981 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35926,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__35926)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35981);
} else {
return G__35981;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__35926),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__35926),null,cljs.core.not_empty(extmap__5385__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k35995,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__36006 = k35995;
var G__36006__$1 = (((G__36006 instanceof cljs.core.Keyword))?G__36006.fqn:null);
switch (G__36006__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35995,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__36013){
var vec__36014 = p__36013;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36014,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36014,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35994){
var self__ = this;
var G__35994__$1 = this;
return (new cljs.core.RecordIter((0),G__35994__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35996,other35997){
var self__ = this;
var this35996__$1 = this;
return (((!((other35997 == null)))) && ((((this35996__$1.constructor === other35997.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35996__$1.w,other35997.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35996__$1.h,other35997.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35996__$1.__extmap,other35997.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k35995){
var self__ = this;
var this__5350__auto____$1 = this;
var G__36046 = k35995;
var G__36046__$1 = (((G__36046 instanceof cljs.core.Keyword))?G__36046.fqn:null);
switch (G__36046__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35995);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__35994){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__36051 = cljs.core.keyword_identical_QMARK_;
var expr__36052 = k__5352__auto__;
if(cljs.core.truth_((pred__36051.cljs$core$IFn$_invoke$arity$2 ? pred__36051.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__36052) : pred__36051.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__36052)))){
return (new shadow.dom.Size(G__35994,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36051.cljs$core$IFn$_invoke$arity$2 ? pred__36051.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__36052) : pred__36051.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__36052)))){
return (new shadow.dom.Size(self__.w,G__35994,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__35994),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__35994){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__35994,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__36000){
var extmap__5385__auto__ = (function (){var G__36067 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36000,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__36000)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36067);
} else {
return G__36067;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__36000),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__36000),null,cljs.core.not_empty(extmap__5385__auto__),null));
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
var G__36761 = (i + (1));
var G__36762 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__36761;
ret = G__36762;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__36080){
var vec__36081 = p__36080;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36081,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36081,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__36085 = arguments.length;
switch (G__36085) {
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
var G__36770 = ps;
var G__36771 = (i + (1));
el__$1 = G__36770;
i = G__36771;
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
var vec__36121 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36121,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36121,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36121,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__36124_36772 = cljs.core.seq(props);
var chunk__36125_36773 = null;
var count__36126_36774 = (0);
var i__36127_36775 = (0);
while(true){
if((i__36127_36775 < count__36126_36774)){
var vec__36139_36776 = chunk__36125_36773.cljs$core$IIndexed$_nth$arity$2(null,i__36127_36775);
var k_36777 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36139_36776,(0),null);
var v_36778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36139_36776,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_36777);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36777),v_36778);


var G__36779 = seq__36124_36772;
var G__36780 = chunk__36125_36773;
var G__36781 = count__36126_36774;
var G__36782 = (i__36127_36775 + (1));
seq__36124_36772 = G__36779;
chunk__36125_36773 = G__36780;
count__36126_36774 = G__36781;
i__36127_36775 = G__36782;
continue;
} else {
var temp__5804__auto___36784 = cljs.core.seq(seq__36124_36772);
if(temp__5804__auto___36784){
var seq__36124_36786__$1 = temp__5804__auto___36784;
if(cljs.core.chunked_seq_QMARK_(seq__36124_36786__$1)){
var c__5568__auto___36787 = cljs.core.chunk_first(seq__36124_36786__$1);
var G__36788 = cljs.core.chunk_rest(seq__36124_36786__$1);
var G__36789 = c__5568__auto___36787;
var G__36790 = cljs.core.count(c__5568__auto___36787);
var G__36791 = (0);
seq__36124_36772 = G__36788;
chunk__36125_36773 = G__36789;
count__36126_36774 = G__36790;
i__36127_36775 = G__36791;
continue;
} else {
var vec__36144_36792 = cljs.core.first(seq__36124_36786__$1);
var k_36793 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36144_36792,(0),null);
var v_36794 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36144_36792,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_36793);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36793),v_36794);


var G__36796 = cljs.core.next(seq__36124_36786__$1);
var G__36797 = null;
var G__36798 = (0);
var G__36799 = (0);
seq__36124_36772 = G__36796;
chunk__36125_36773 = G__36797;
count__36126_36774 = G__36798;
i__36127_36775 = G__36799;
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
var vec__36148 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36148,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36148,(1),null);
var seq__36151_36803 = cljs.core.seq(node_children);
var chunk__36153_36804 = null;
var count__36154_36805 = (0);
var i__36155_36806 = (0);
while(true){
if((i__36155_36806 < count__36154_36805)){
var child_struct_36807 = chunk__36153_36804.cljs$core$IIndexed$_nth$arity$2(null,i__36155_36806);
if((!((child_struct_36807 == null)))){
if(typeof child_struct_36807 === 'string'){
var text_36808 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36808),child_struct_36807].join(''));
} else {
var children_36809 = shadow.dom.svg_node(child_struct_36807);
if(cljs.core.seq_QMARK_(children_36809)){
var seq__36277_36810 = cljs.core.seq(children_36809);
var chunk__36279_36811 = null;
var count__36280_36812 = (0);
var i__36281_36813 = (0);
while(true){
if((i__36281_36813 < count__36280_36812)){
var child_36814 = chunk__36279_36811.cljs$core$IIndexed$_nth$arity$2(null,i__36281_36813);
if(cljs.core.truth_(child_36814)){
node.appendChild(child_36814);


var G__36815 = seq__36277_36810;
var G__36816 = chunk__36279_36811;
var G__36817 = count__36280_36812;
var G__36818 = (i__36281_36813 + (1));
seq__36277_36810 = G__36815;
chunk__36279_36811 = G__36816;
count__36280_36812 = G__36817;
i__36281_36813 = G__36818;
continue;
} else {
var G__36819 = seq__36277_36810;
var G__36820 = chunk__36279_36811;
var G__36821 = count__36280_36812;
var G__36822 = (i__36281_36813 + (1));
seq__36277_36810 = G__36819;
chunk__36279_36811 = G__36820;
count__36280_36812 = G__36821;
i__36281_36813 = G__36822;
continue;
}
} else {
var temp__5804__auto___36823 = cljs.core.seq(seq__36277_36810);
if(temp__5804__auto___36823){
var seq__36277_36824__$1 = temp__5804__auto___36823;
if(cljs.core.chunked_seq_QMARK_(seq__36277_36824__$1)){
var c__5568__auto___36825 = cljs.core.chunk_first(seq__36277_36824__$1);
var G__36826 = cljs.core.chunk_rest(seq__36277_36824__$1);
var G__36827 = c__5568__auto___36825;
var G__36828 = cljs.core.count(c__5568__auto___36825);
var G__36829 = (0);
seq__36277_36810 = G__36826;
chunk__36279_36811 = G__36827;
count__36280_36812 = G__36828;
i__36281_36813 = G__36829;
continue;
} else {
var child_36830 = cljs.core.first(seq__36277_36824__$1);
if(cljs.core.truth_(child_36830)){
node.appendChild(child_36830);


var G__36835 = cljs.core.next(seq__36277_36824__$1);
var G__36836 = null;
var G__36837 = (0);
var G__36838 = (0);
seq__36277_36810 = G__36835;
chunk__36279_36811 = G__36836;
count__36280_36812 = G__36837;
i__36281_36813 = G__36838;
continue;
} else {
var G__36839 = cljs.core.next(seq__36277_36824__$1);
var G__36840 = null;
var G__36841 = (0);
var G__36842 = (0);
seq__36277_36810 = G__36839;
chunk__36279_36811 = G__36840;
count__36280_36812 = G__36841;
i__36281_36813 = G__36842;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36809);
}
}


var G__36843 = seq__36151_36803;
var G__36844 = chunk__36153_36804;
var G__36845 = count__36154_36805;
var G__36846 = (i__36155_36806 + (1));
seq__36151_36803 = G__36843;
chunk__36153_36804 = G__36844;
count__36154_36805 = G__36845;
i__36155_36806 = G__36846;
continue;
} else {
var G__36847 = seq__36151_36803;
var G__36848 = chunk__36153_36804;
var G__36849 = count__36154_36805;
var G__36850 = (i__36155_36806 + (1));
seq__36151_36803 = G__36847;
chunk__36153_36804 = G__36848;
count__36154_36805 = G__36849;
i__36155_36806 = G__36850;
continue;
}
} else {
var temp__5804__auto___36851 = cljs.core.seq(seq__36151_36803);
if(temp__5804__auto___36851){
var seq__36151_36852__$1 = temp__5804__auto___36851;
if(cljs.core.chunked_seq_QMARK_(seq__36151_36852__$1)){
var c__5568__auto___36853 = cljs.core.chunk_first(seq__36151_36852__$1);
var G__36854 = cljs.core.chunk_rest(seq__36151_36852__$1);
var G__36855 = c__5568__auto___36853;
var G__36856 = cljs.core.count(c__5568__auto___36853);
var G__36857 = (0);
seq__36151_36803 = G__36854;
chunk__36153_36804 = G__36855;
count__36154_36805 = G__36856;
i__36155_36806 = G__36857;
continue;
} else {
var child_struct_36858 = cljs.core.first(seq__36151_36852__$1);
if((!((child_struct_36858 == null)))){
if(typeof child_struct_36858 === 'string'){
var text_36859 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36859),child_struct_36858].join(''));
} else {
var children_36860 = shadow.dom.svg_node(child_struct_36858);
if(cljs.core.seq_QMARK_(children_36860)){
var seq__36296_36861 = cljs.core.seq(children_36860);
var chunk__36298_36862 = null;
var count__36299_36863 = (0);
var i__36300_36864 = (0);
while(true){
if((i__36300_36864 < count__36299_36863)){
var child_36865 = chunk__36298_36862.cljs$core$IIndexed$_nth$arity$2(null,i__36300_36864);
if(cljs.core.truth_(child_36865)){
node.appendChild(child_36865);


var G__36866 = seq__36296_36861;
var G__36867 = chunk__36298_36862;
var G__36868 = count__36299_36863;
var G__36869 = (i__36300_36864 + (1));
seq__36296_36861 = G__36866;
chunk__36298_36862 = G__36867;
count__36299_36863 = G__36868;
i__36300_36864 = G__36869;
continue;
} else {
var G__36870 = seq__36296_36861;
var G__36871 = chunk__36298_36862;
var G__36872 = count__36299_36863;
var G__36873 = (i__36300_36864 + (1));
seq__36296_36861 = G__36870;
chunk__36298_36862 = G__36871;
count__36299_36863 = G__36872;
i__36300_36864 = G__36873;
continue;
}
} else {
var temp__5804__auto___36874__$1 = cljs.core.seq(seq__36296_36861);
if(temp__5804__auto___36874__$1){
var seq__36296_36875__$1 = temp__5804__auto___36874__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36296_36875__$1)){
var c__5568__auto___36876 = cljs.core.chunk_first(seq__36296_36875__$1);
var G__36877 = cljs.core.chunk_rest(seq__36296_36875__$1);
var G__36878 = c__5568__auto___36876;
var G__36879 = cljs.core.count(c__5568__auto___36876);
var G__36880 = (0);
seq__36296_36861 = G__36877;
chunk__36298_36862 = G__36878;
count__36299_36863 = G__36879;
i__36300_36864 = G__36880;
continue;
} else {
var child_36881 = cljs.core.first(seq__36296_36875__$1);
if(cljs.core.truth_(child_36881)){
node.appendChild(child_36881);


var G__36882 = cljs.core.next(seq__36296_36875__$1);
var G__36883 = null;
var G__36884 = (0);
var G__36885 = (0);
seq__36296_36861 = G__36882;
chunk__36298_36862 = G__36883;
count__36299_36863 = G__36884;
i__36300_36864 = G__36885;
continue;
} else {
var G__36886 = cljs.core.next(seq__36296_36875__$1);
var G__36887 = null;
var G__36888 = (0);
var G__36889 = (0);
seq__36296_36861 = G__36886;
chunk__36298_36862 = G__36887;
count__36299_36863 = G__36888;
i__36300_36864 = G__36889;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36860);
}
}


var G__36894 = cljs.core.next(seq__36151_36852__$1);
var G__36895 = null;
var G__36896 = (0);
var G__36897 = (0);
seq__36151_36803 = G__36894;
chunk__36153_36804 = G__36895;
count__36154_36805 = G__36896;
i__36155_36806 = G__36897;
continue;
} else {
var G__36898 = cljs.core.next(seq__36151_36852__$1);
var G__36899 = null;
var G__36900 = (0);
var G__36901 = (0);
seq__36151_36803 = G__36898;
chunk__36153_36804 = G__36899;
count__36154_36805 = G__36900;
i__36155_36806 = G__36901;
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
var len__5769__auto___36904 = arguments.length;
var i__5770__auto___36905 = (0);
while(true){
if((i__5770__auto___36905 < len__5769__auto___36904)){
args__5775__auto__.push((arguments[i__5770__auto___36905]));

var G__36906 = (i__5770__auto___36905 + (1));
i__5770__auto___36905 = G__36906;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq36329){
var G__36330 = cljs.core.first(seq36329);
var seq36329__$1 = cljs.core.next(seq36329);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36330,seq36329__$1);
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
var G__36351 = arguments.length;
switch (G__36351) {
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
var c__32940__auto___36917 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32941__auto__ = (function (){var switch__32645__auto__ = (function (state_36362){
var state_val_36363 = (state_36362[(1)]);
if((state_val_36363 === (1))){
var state_36362__$1 = state_36362;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36362__$1,(2),once_or_cleanup);
} else {
if((state_val_36363 === (2))){
var inst_36359 = (state_36362[(2)]);
var inst_36360 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_36362__$1 = (function (){var statearr_36364 = state_36362;
(statearr_36364[(7)] = inst_36359);

return statearr_36364;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36362__$1,inst_36360);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__32646__auto__ = null;
var shadow$dom$state_machine__32646__auto____0 = (function (){
var statearr_36369 = [null,null,null,null,null,null,null,null];
(statearr_36369[(0)] = shadow$dom$state_machine__32646__auto__);

(statearr_36369[(1)] = (1));

return statearr_36369;
});
var shadow$dom$state_machine__32646__auto____1 = (function (state_36362){
while(true){
var ret_value__32647__auto__ = (function (){try{while(true){
var result__32648__auto__ = switch__32645__auto__(state_36362);
if(cljs.core.keyword_identical_QMARK_(result__32648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32648__auto__;
}
break;
}
}catch (e36375){var ex__32649__auto__ = e36375;
var statearr_36377_36919 = state_36362;
(statearr_36377_36919[(2)] = ex__32649__auto__);


if(cljs.core.seq((state_36362[(4)]))){
var statearr_36384_36921 = state_36362;
(statearr_36384_36921[(1)] = cljs.core.first((state_36362[(4)])));

} else {
throw ex__32649__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36922 = state_36362;
state_36362 = G__36922;
continue;
} else {
return ret_value__32647__auto__;
}
break;
}
});
shadow$dom$state_machine__32646__auto__ = function(state_36362){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__32646__auto____0.call(this);
case 1:
return shadow$dom$state_machine__32646__auto____1.call(this,state_36362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__32646__auto____0;
shadow$dom$state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__32646__auto____1;
return shadow$dom$state_machine__32646__auto__;
})()
})();
var state__32942__auto__ = (function (){var statearr_36391 = f__32941__auto__();
(statearr_36391[(6)] = c__32940__auto___36917);

return statearr_36391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32942__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
