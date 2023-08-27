goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_38493 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_38493(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_38494 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_38494(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__37263 = coll;
var G__37264 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__37263,G__37264) : shadow.dom.lazy_native_coll_seq.call(null,G__37263,G__37264));
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
var G__37310 = arguments.length;
switch (G__37310) {
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
var G__37326 = arguments.length;
switch (G__37326) {
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
var G__37337 = arguments.length;
switch (G__37337) {
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
var G__37355 = arguments.length;
switch (G__37355) {
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
var G__37369 = arguments.length;
switch (G__37369) {
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
var G__37400 = arguments.length;
switch (G__37400) {
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
}catch (e37418){if((e37418 instanceof Object)){
var e = e37418;
return console.log("didnt support attachEvent",el,e);
} else {
throw e37418;

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
var seq__37438 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__37439 = null;
var count__37440 = (0);
var i__37441 = (0);
while(true){
if((i__37441 < count__37440)){
var el = chunk__37439.cljs$core$IIndexed$_nth$arity$2(null,i__37441);
var handler_38501__$1 = ((function (seq__37438,chunk__37439,count__37440,i__37441,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__37438,chunk__37439,count__37440,i__37441,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_38501__$1);


var G__38502 = seq__37438;
var G__38503 = chunk__37439;
var G__38504 = count__37440;
var G__38505 = (i__37441 + (1));
seq__37438 = G__38502;
chunk__37439 = G__38503;
count__37440 = G__38504;
i__37441 = G__38505;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37438);
if(temp__5804__auto__){
var seq__37438__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37438__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37438__$1);
var G__38506 = cljs.core.chunk_rest(seq__37438__$1);
var G__38507 = c__5568__auto__;
var G__38508 = cljs.core.count(c__5568__auto__);
var G__38509 = (0);
seq__37438 = G__38506;
chunk__37439 = G__38507;
count__37440 = G__38508;
i__37441 = G__38509;
continue;
} else {
var el = cljs.core.first(seq__37438__$1);
var handler_38510__$1 = ((function (seq__37438,chunk__37439,count__37440,i__37441,el,seq__37438__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__37438,chunk__37439,count__37440,i__37441,el,seq__37438__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_38510__$1);


var G__38511 = cljs.core.next(seq__37438__$1);
var G__38512 = null;
var G__38513 = (0);
var G__38514 = (0);
seq__37438 = G__38511;
chunk__37439 = G__38512;
count__37440 = G__38513;
i__37441 = G__38514;
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
var G__37469 = arguments.length;
switch (G__37469) {
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
var seq__37482 = cljs.core.seq(events);
var chunk__37483 = null;
var count__37484 = (0);
var i__37485 = (0);
while(true){
if((i__37485 < count__37484)){
var vec__37498 = chunk__37483.cljs$core$IIndexed$_nth$arity$2(null,i__37485);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37498,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37498,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__38516 = seq__37482;
var G__38517 = chunk__37483;
var G__38518 = count__37484;
var G__38519 = (i__37485 + (1));
seq__37482 = G__38516;
chunk__37483 = G__38517;
count__37484 = G__38518;
i__37485 = G__38519;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37482);
if(temp__5804__auto__){
var seq__37482__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37482__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37482__$1);
var G__38520 = cljs.core.chunk_rest(seq__37482__$1);
var G__38521 = c__5568__auto__;
var G__38522 = cljs.core.count(c__5568__auto__);
var G__38523 = (0);
seq__37482 = G__38520;
chunk__37483 = G__38521;
count__37484 = G__38522;
i__37485 = G__38523;
continue;
} else {
var vec__37507 = cljs.core.first(seq__37482__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37507,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37507,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__38524 = cljs.core.next(seq__37482__$1);
var G__38525 = null;
var G__38526 = (0);
var G__38527 = (0);
seq__37482 = G__38524;
chunk__37483 = G__38525;
count__37484 = G__38526;
i__37485 = G__38527;
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
var seq__37516 = cljs.core.seq(styles);
var chunk__37517 = null;
var count__37518 = (0);
var i__37519 = (0);
while(true){
if((i__37519 < count__37518)){
var vec__37530 = chunk__37517.cljs$core$IIndexed$_nth$arity$2(null,i__37519);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37530,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37530,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__38528 = seq__37516;
var G__38529 = chunk__37517;
var G__38530 = count__37518;
var G__38531 = (i__37519 + (1));
seq__37516 = G__38528;
chunk__37517 = G__38529;
count__37518 = G__38530;
i__37519 = G__38531;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37516);
if(temp__5804__auto__){
var seq__37516__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37516__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37516__$1);
var G__38532 = cljs.core.chunk_rest(seq__37516__$1);
var G__38533 = c__5568__auto__;
var G__38534 = cljs.core.count(c__5568__auto__);
var G__38535 = (0);
seq__37516 = G__38532;
chunk__37517 = G__38533;
count__37518 = G__38534;
i__37519 = G__38535;
continue;
} else {
var vec__37545 = cljs.core.first(seq__37516__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37545,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37545,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__38536 = cljs.core.next(seq__37516__$1);
var G__38537 = null;
var G__38538 = (0);
var G__38539 = (0);
seq__37516 = G__38536;
chunk__37517 = G__38537;
count__37518 = G__38538;
i__37519 = G__38539;
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
var G__37550_38540 = key;
var G__37550_38541__$1 = (((G__37550_38540 instanceof cljs.core.Keyword))?G__37550_38540.fqn:null);
switch (G__37550_38541__$1) {
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
var ks_38545 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_38545,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_38545,"aria-");
}
})())){
el.setAttribute(ks_38545,value);
} else {
(el[ks_38545] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__37575){
var map__37576 = p__37575;
var map__37576__$1 = cljs.core.__destructure_map(map__37576);
var props = map__37576__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37576__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__37579 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37579,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37579,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37579,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__37584 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__37584,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__37584;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__37590 = arguments.length;
switch (G__37590) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__37606){
var vec__37608 = p__37606;
var seq__37609 = cljs.core.seq(vec__37608);
var first__37610 = cljs.core.first(seq__37609);
var seq__37609__$1 = cljs.core.next(seq__37609);
var nn = first__37610;
var first__37610__$1 = cljs.core.first(seq__37609__$1);
var seq__37609__$2 = cljs.core.next(seq__37609__$1);
var np = first__37610__$1;
var nc = seq__37609__$2;
var node = vec__37608;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__37619 = nn;
var G__37620 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__37619,G__37620) : create_fn.call(null,G__37619,G__37620));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__37623 = nn;
var G__37624 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__37623,G__37624) : create_fn.call(null,G__37623,G__37624));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__37628 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37628,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37628,(1),null);
var seq__37632_38551 = cljs.core.seq(node_children);
var chunk__37634_38552 = null;
var count__37635_38553 = (0);
var i__37636_38554 = (0);
while(true){
if((i__37636_38554 < count__37635_38553)){
var child_struct_38557 = chunk__37634_38552.cljs$core$IIndexed$_nth$arity$2(null,i__37636_38554);
var children_38558 = shadow.dom.dom_node(child_struct_38557);
if(cljs.core.seq_QMARK_(children_38558)){
var seq__37675_38559 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_38558));
var chunk__37677_38560 = null;
var count__37678_38561 = (0);
var i__37679_38562 = (0);
while(true){
if((i__37679_38562 < count__37678_38561)){
var child_38563 = chunk__37677_38560.cljs$core$IIndexed$_nth$arity$2(null,i__37679_38562);
if(cljs.core.truth_(child_38563)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38563);


var G__38564 = seq__37675_38559;
var G__38565 = chunk__37677_38560;
var G__38566 = count__37678_38561;
var G__38567 = (i__37679_38562 + (1));
seq__37675_38559 = G__38564;
chunk__37677_38560 = G__38565;
count__37678_38561 = G__38566;
i__37679_38562 = G__38567;
continue;
} else {
var G__38568 = seq__37675_38559;
var G__38569 = chunk__37677_38560;
var G__38570 = count__37678_38561;
var G__38571 = (i__37679_38562 + (1));
seq__37675_38559 = G__38568;
chunk__37677_38560 = G__38569;
count__37678_38561 = G__38570;
i__37679_38562 = G__38571;
continue;
}
} else {
var temp__5804__auto___38572 = cljs.core.seq(seq__37675_38559);
if(temp__5804__auto___38572){
var seq__37675_38573__$1 = temp__5804__auto___38572;
if(cljs.core.chunked_seq_QMARK_(seq__37675_38573__$1)){
var c__5568__auto___38574 = cljs.core.chunk_first(seq__37675_38573__$1);
var G__38575 = cljs.core.chunk_rest(seq__37675_38573__$1);
var G__38576 = c__5568__auto___38574;
var G__38577 = cljs.core.count(c__5568__auto___38574);
var G__38578 = (0);
seq__37675_38559 = G__38575;
chunk__37677_38560 = G__38576;
count__37678_38561 = G__38577;
i__37679_38562 = G__38578;
continue;
} else {
var child_38582 = cljs.core.first(seq__37675_38573__$1);
if(cljs.core.truth_(child_38582)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38582);


var G__38583 = cljs.core.next(seq__37675_38573__$1);
var G__38584 = null;
var G__38585 = (0);
var G__38586 = (0);
seq__37675_38559 = G__38583;
chunk__37677_38560 = G__38584;
count__37678_38561 = G__38585;
i__37679_38562 = G__38586;
continue;
} else {
var G__38587 = cljs.core.next(seq__37675_38573__$1);
var G__38588 = null;
var G__38589 = (0);
var G__38590 = (0);
seq__37675_38559 = G__38587;
chunk__37677_38560 = G__38588;
count__37678_38561 = G__38589;
i__37679_38562 = G__38590;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_38558);
}


var G__38591 = seq__37632_38551;
var G__38592 = chunk__37634_38552;
var G__38593 = count__37635_38553;
var G__38594 = (i__37636_38554 + (1));
seq__37632_38551 = G__38591;
chunk__37634_38552 = G__38592;
count__37635_38553 = G__38593;
i__37636_38554 = G__38594;
continue;
} else {
var temp__5804__auto___38595 = cljs.core.seq(seq__37632_38551);
if(temp__5804__auto___38595){
var seq__37632_38596__$1 = temp__5804__auto___38595;
if(cljs.core.chunked_seq_QMARK_(seq__37632_38596__$1)){
var c__5568__auto___38597 = cljs.core.chunk_first(seq__37632_38596__$1);
var G__38598 = cljs.core.chunk_rest(seq__37632_38596__$1);
var G__38599 = c__5568__auto___38597;
var G__38600 = cljs.core.count(c__5568__auto___38597);
var G__38601 = (0);
seq__37632_38551 = G__38598;
chunk__37634_38552 = G__38599;
count__37635_38553 = G__38600;
i__37636_38554 = G__38601;
continue;
} else {
var child_struct_38602 = cljs.core.first(seq__37632_38596__$1);
var children_38603 = shadow.dom.dom_node(child_struct_38602);
if(cljs.core.seq_QMARK_(children_38603)){
var seq__37681_38604 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_38603));
var chunk__37683_38605 = null;
var count__37684_38606 = (0);
var i__37685_38607 = (0);
while(true){
if((i__37685_38607 < count__37684_38606)){
var child_38608 = chunk__37683_38605.cljs$core$IIndexed$_nth$arity$2(null,i__37685_38607);
if(cljs.core.truth_(child_38608)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38608);


var G__38609 = seq__37681_38604;
var G__38610 = chunk__37683_38605;
var G__38611 = count__37684_38606;
var G__38612 = (i__37685_38607 + (1));
seq__37681_38604 = G__38609;
chunk__37683_38605 = G__38610;
count__37684_38606 = G__38611;
i__37685_38607 = G__38612;
continue;
} else {
var G__38613 = seq__37681_38604;
var G__38614 = chunk__37683_38605;
var G__38615 = count__37684_38606;
var G__38616 = (i__37685_38607 + (1));
seq__37681_38604 = G__38613;
chunk__37683_38605 = G__38614;
count__37684_38606 = G__38615;
i__37685_38607 = G__38616;
continue;
}
} else {
var temp__5804__auto___38617__$1 = cljs.core.seq(seq__37681_38604);
if(temp__5804__auto___38617__$1){
var seq__37681_38618__$1 = temp__5804__auto___38617__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37681_38618__$1)){
var c__5568__auto___38619 = cljs.core.chunk_first(seq__37681_38618__$1);
var G__38620 = cljs.core.chunk_rest(seq__37681_38618__$1);
var G__38621 = c__5568__auto___38619;
var G__38622 = cljs.core.count(c__5568__auto___38619);
var G__38623 = (0);
seq__37681_38604 = G__38620;
chunk__37683_38605 = G__38621;
count__37684_38606 = G__38622;
i__37685_38607 = G__38623;
continue;
} else {
var child_38624 = cljs.core.first(seq__37681_38618__$1);
if(cljs.core.truth_(child_38624)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38624);


var G__38625 = cljs.core.next(seq__37681_38618__$1);
var G__38626 = null;
var G__38627 = (0);
var G__38628 = (0);
seq__37681_38604 = G__38625;
chunk__37683_38605 = G__38626;
count__37684_38606 = G__38627;
i__37685_38607 = G__38628;
continue;
} else {
var G__38629 = cljs.core.next(seq__37681_38618__$1);
var G__38630 = null;
var G__38631 = (0);
var G__38632 = (0);
seq__37681_38604 = G__38629;
chunk__37683_38605 = G__38630;
count__37684_38606 = G__38631;
i__37685_38607 = G__38632;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_38603);
}


var G__38633 = cljs.core.next(seq__37632_38596__$1);
var G__38634 = null;
var G__38635 = (0);
var G__38636 = (0);
seq__37632_38551 = G__38633;
chunk__37634_38552 = G__38634;
count__37635_38553 = G__38635;
i__37636_38554 = G__38636;
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
var seq__37722 = cljs.core.seq(node);
var chunk__37724 = null;
var count__37725 = (0);
var i__37726 = (0);
while(true){
if((i__37726 < count__37725)){
var n = chunk__37724.cljs$core$IIndexed$_nth$arity$2(null,i__37726);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__38637 = seq__37722;
var G__38638 = chunk__37724;
var G__38639 = count__37725;
var G__38640 = (i__37726 + (1));
seq__37722 = G__38637;
chunk__37724 = G__38638;
count__37725 = G__38639;
i__37726 = G__38640;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37722);
if(temp__5804__auto__){
var seq__37722__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37722__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37722__$1);
var G__38641 = cljs.core.chunk_rest(seq__37722__$1);
var G__38642 = c__5568__auto__;
var G__38643 = cljs.core.count(c__5568__auto__);
var G__38644 = (0);
seq__37722 = G__38641;
chunk__37724 = G__38642;
count__37725 = G__38643;
i__37726 = G__38644;
continue;
} else {
var n = cljs.core.first(seq__37722__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__38645 = cljs.core.next(seq__37722__$1);
var G__38646 = null;
var G__38647 = (0);
var G__38648 = (0);
seq__37722 = G__38645;
chunk__37724 = G__38646;
count__37725 = G__38647;
i__37726 = G__38648;
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
var G__37737 = arguments.length;
switch (G__37737) {
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
var G__37744 = arguments.length;
switch (G__37744) {
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
var G__37750 = arguments.length;
switch (G__37750) {
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
var len__5769__auto___38652 = arguments.length;
var i__5770__auto___38653 = (0);
while(true){
if((i__5770__auto___38653 < len__5769__auto___38652)){
args__5775__auto__.push((arguments[i__5770__auto___38653]));

var G__38654 = (i__5770__auto___38653 + (1));
i__5770__auto___38653 = G__38654;
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
var seq__37786_38655 = cljs.core.seq(nodes);
var chunk__37787_38656 = null;
var count__37788_38657 = (0);
var i__37789_38658 = (0);
while(true){
if((i__37789_38658 < count__37788_38657)){
var node_38659 = chunk__37787_38656.cljs$core$IIndexed$_nth$arity$2(null,i__37789_38658);
fragment.appendChild(shadow.dom._to_dom(node_38659));


var G__38660 = seq__37786_38655;
var G__38661 = chunk__37787_38656;
var G__38662 = count__37788_38657;
var G__38663 = (i__37789_38658 + (1));
seq__37786_38655 = G__38660;
chunk__37787_38656 = G__38661;
count__37788_38657 = G__38662;
i__37789_38658 = G__38663;
continue;
} else {
var temp__5804__auto___38664 = cljs.core.seq(seq__37786_38655);
if(temp__5804__auto___38664){
var seq__37786_38665__$1 = temp__5804__auto___38664;
if(cljs.core.chunked_seq_QMARK_(seq__37786_38665__$1)){
var c__5568__auto___38666 = cljs.core.chunk_first(seq__37786_38665__$1);
var G__38667 = cljs.core.chunk_rest(seq__37786_38665__$1);
var G__38668 = c__5568__auto___38666;
var G__38669 = cljs.core.count(c__5568__auto___38666);
var G__38670 = (0);
seq__37786_38655 = G__38667;
chunk__37787_38656 = G__38668;
count__37788_38657 = G__38669;
i__37789_38658 = G__38670;
continue;
} else {
var node_38671 = cljs.core.first(seq__37786_38665__$1);
fragment.appendChild(shadow.dom._to_dom(node_38671));


var G__38672 = cljs.core.next(seq__37786_38665__$1);
var G__38673 = null;
var G__38674 = (0);
var G__38675 = (0);
seq__37786_38655 = G__38672;
chunk__37787_38656 = G__38673;
count__37788_38657 = G__38674;
i__37789_38658 = G__38675;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq37782){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37782));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__37795_38676 = cljs.core.seq(scripts);
var chunk__37796_38677 = null;
var count__37797_38678 = (0);
var i__37798_38679 = (0);
while(true){
if((i__37798_38679 < count__37797_38678)){
var vec__37805_38680 = chunk__37796_38677.cljs$core$IIndexed$_nth$arity$2(null,i__37798_38679);
var script_tag_38681 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37805_38680,(0),null);
var script_body_38682 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37805_38680,(1),null);
eval(script_body_38682);


var G__38684 = seq__37795_38676;
var G__38685 = chunk__37796_38677;
var G__38686 = count__37797_38678;
var G__38687 = (i__37798_38679 + (1));
seq__37795_38676 = G__38684;
chunk__37796_38677 = G__38685;
count__37797_38678 = G__38686;
i__37798_38679 = G__38687;
continue;
} else {
var temp__5804__auto___38692 = cljs.core.seq(seq__37795_38676);
if(temp__5804__auto___38692){
var seq__37795_38693__$1 = temp__5804__auto___38692;
if(cljs.core.chunked_seq_QMARK_(seq__37795_38693__$1)){
var c__5568__auto___38694 = cljs.core.chunk_first(seq__37795_38693__$1);
var G__38695 = cljs.core.chunk_rest(seq__37795_38693__$1);
var G__38696 = c__5568__auto___38694;
var G__38697 = cljs.core.count(c__5568__auto___38694);
var G__38698 = (0);
seq__37795_38676 = G__38695;
chunk__37796_38677 = G__38696;
count__37797_38678 = G__38697;
i__37798_38679 = G__38698;
continue;
} else {
var vec__37808_38699 = cljs.core.first(seq__37795_38693__$1);
var script_tag_38700 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37808_38699,(0),null);
var script_body_38701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37808_38699,(1),null);
eval(script_body_38701);


var G__38704 = cljs.core.next(seq__37795_38693__$1);
var G__38705 = null;
var G__38706 = (0);
var G__38707 = (0);
seq__37795_38676 = G__38704;
chunk__37796_38677 = G__38705;
count__37797_38678 = G__38706;
i__37798_38679 = G__38707;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__37811){
var vec__37812 = p__37811;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37812,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37812,(1),null);
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
var G__37817 = arguments.length;
switch (G__37817) {
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
var seq__37843 = cljs.core.seq(style_keys);
var chunk__37844 = null;
var count__37845 = (0);
var i__37846 = (0);
while(true){
if((i__37846 < count__37845)){
var it = chunk__37844.cljs$core$IIndexed$_nth$arity$2(null,i__37846);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__38713 = seq__37843;
var G__38714 = chunk__37844;
var G__38715 = count__37845;
var G__38716 = (i__37846 + (1));
seq__37843 = G__38713;
chunk__37844 = G__38714;
count__37845 = G__38715;
i__37846 = G__38716;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37843);
if(temp__5804__auto__){
var seq__37843__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37843__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37843__$1);
var G__38717 = cljs.core.chunk_rest(seq__37843__$1);
var G__38718 = c__5568__auto__;
var G__38719 = cljs.core.count(c__5568__auto__);
var G__38720 = (0);
seq__37843 = G__38717;
chunk__37844 = G__38718;
count__37845 = G__38719;
i__37846 = G__38720;
continue;
} else {
var it = cljs.core.first(seq__37843__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__38721 = cljs.core.next(seq__37843__$1);
var G__38722 = null;
var G__38723 = (0);
var G__38724 = (0);
seq__37843 = G__38721;
chunk__37844 = G__38722;
count__37845 = G__38723;
i__37846 = G__38724;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k37863,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__37877 = k37863;
var G__37877__$1 = (((G__37877 instanceof cljs.core.Keyword))?G__37877.fqn:null);
switch (G__37877__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37863,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__37889){
var vec__37891 = p__37889;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37891,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37891,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37862){
var self__ = this;
var G__37862__$1 = this;
return (new cljs.core.RecordIter((0),G__37862__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37864,other37865){
var self__ = this;
var this37864__$1 = this;
return (((!((other37865 == null)))) && ((((this37864__$1.constructor === other37865.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37864__$1.x,other37865.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37864__$1.y,other37865.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37864__$1.__extmap,other37865.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k37863){
var self__ = this;
var this__5350__auto____$1 = this;
var G__37959 = k37863;
var G__37959__$1 = (((G__37959 instanceof cljs.core.Keyword))?G__37959.fqn:null);
switch (G__37959__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k37863);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__37862){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__37974 = cljs.core.keyword_identical_QMARK_;
var expr__37975 = k__5352__auto__;
if(cljs.core.truth_((pred__37974.cljs$core$IFn$_invoke$arity$2 ? pred__37974.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__37975) : pred__37974.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__37975)))){
return (new shadow.dom.Coordinate(G__37862,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__37974.cljs$core$IFn$_invoke$arity$2 ? pred__37974.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__37975) : pred__37974.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__37975)))){
return (new shadow.dom.Coordinate(self__.x,G__37862,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__37862),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__37862){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__37862,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__37867){
var extmap__5385__auto__ = (function (){var G__38026 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37867,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__37867)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__38026);
} else {
return G__38026;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__37867),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__37867),null,cljs.core.not_empty(extmap__5385__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k38052,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__38067 = k38052;
var G__38067__$1 = (((G__38067 instanceof cljs.core.Keyword))?G__38067.fqn:null);
switch (G__38067__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k38052,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__38075){
var vec__38077 = p__38075;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38077,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38077,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__38051){
var self__ = this;
var G__38051__$1 = this;
return (new cljs.core.RecordIter((0),G__38051__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this38053,other38054){
var self__ = this;
var this38053__$1 = this;
return (((!((other38054 == null)))) && ((((this38053__$1.constructor === other38054.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38053__$1.w,other38054.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38053__$1.h,other38054.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38053__$1.__extmap,other38054.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k38052){
var self__ = this;
var this__5350__auto____$1 = this;
var G__38118 = k38052;
var G__38118__$1 = (((G__38118 instanceof cljs.core.Keyword))?G__38118.fqn:null);
switch (G__38118__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k38052);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__38051){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__38126 = cljs.core.keyword_identical_QMARK_;
var expr__38127 = k__5352__auto__;
if(cljs.core.truth_((pred__38126.cljs$core$IFn$_invoke$arity$2 ? pred__38126.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__38127) : pred__38126.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__38127)))){
return (new shadow.dom.Size(G__38051,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__38126.cljs$core$IFn$_invoke$arity$2 ? pred__38126.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__38127) : pred__38126.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__38127)))){
return (new shadow.dom.Size(self__.w,G__38051,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__38051),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__38051){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__38051,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__38056){
var extmap__5385__auto__ = (function (){var G__38160 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__38056,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__38056)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__38160);
} else {
return G__38160;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__38056),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__38056),null,cljs.core.not_empty(extmap__5385__auto__),null));
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
var G__38755 = (i + (1));
var G__38756 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__38755;
ret = G__38756;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38302){
var vec__38304 = p__38302;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38304,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38304,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__38316 = arguments.length;
switch (G__38316) {
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
var G__38761 = ps;
var G__38762 = (i + (1));
el__$1 = G__38761;
i = G__38762;
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
var vec__38330 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38330,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38330,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38330,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__38334_38763 = cljs.core.seq(props);
var chunk__38335_38764 = null;
var count__38336_38765 = (0);
var i__38337_38766 = (0);
while(true){
if((i__38337_38766 < count__38336_38765)){
var vec__38355_38767 = chunk__38335_38764.cljs$core$IIndexed$_nth$arity$2(null,i__38337_38766);
var k_38768 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38355_38767,(0),null);
var v_38769 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38355_38767,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_38768);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_38768),v_38769);


var G__38771 = seq__38334_38763;
var G__38772 = chunk__38335_38764;
var G__38773 = count__38336_38765;
var G__38774 = (i__38337_38766 + (1));
seq__38334_38763 = G__38771;
chunk__38335_38764 = G__38772;
count__38336_38765 = G__38773;
i__38337_38766 = G__38774;
continue;
} else {
var temp__5804__auto___38775 = cljs.core.seq(seq__38334_38763);
if(temp__5804__auto___38775){
var seq__38334_38776__$1 = temp__5804__auto___38775;
if(cljs.core.chunked_seq_QMARK_(seq__38334_38776__$1)){
var c__5568__auto___38777 = cljs.core.chunk_first(seq__38334_38776__$1);
var G__38778 = cljs.core.chunk_rest(seq__38334_38776__$1);
var G__38779 = c__5568__auto___38777;
var G__38780 = cljs.core.count(c__5568__auto___38777);
var G__38781 = (0);
seq__38334_38763 = G__38778;
chunk__38335_38764 = G__38779;
count__38336_38765 = G__38780;
i__38337_38766 = G__38781;
continue;
} else {
var vec__38364_38782 = cljs.core.first(seq__38334_38776__$1);
var k_38783 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38364_38782,(0),null);
var v_38784 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38364_38782,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_38783);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_38783),v_38784);


var G__38787 = cljs.core.next(seq__38334_38776__$1);
var G__38788 = null;
var G__38789 = (0);
var G__38790 = (0);
seq__38334_38763 = G__38787;
chunk__38335_38764 = G__38788;
count__38336_38765 = G__38789;
i__38337_38766 = G__38790;
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
var vec__38378 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38378,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38378,(1),null);
var seq__38381_38793 = cljs.core.seq(node_children);
var chunk__38383_38794 = null;
var count__38384_38795 = (0);
var i__38385_38796 = (0);
while(true){
if((i__38385_38796 < count__38384_38795)){
var child_struct_38797 = chunk__38383_38794.cljs$core$IIndexed$_nth$arity$2(null,i__38385_38796);
if((!((child_struct_38797 == null)))){
if(typeof child_struct_38797 === 'string'){
var text_38798 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_38798),child_struct_38797].join(''));
} else {
var children_38799 = shadow.dom.svg_node(child_struct_38797);
if(cljs.core.seq_QMARK_(children_38799)){
var seq__38431_38800 = cljs.core.seq(children_38799);
var chunk__38433_38801 = null;
var count__38434_38802 = (0);
var i__38435_38803 = (0);
while(true){
if((i__38435_38803 < count__38434_38802)){
var child_38804 = chunk__38433_38801.cljs$core$IIndexed$_nth$arity$2(null,i__38435_38803);
if(cljs.core.truth_(child_38804)){
node.appendChild(child_38804);


var G__38805 = seq__38431_38800;
var G__38806 = chunk__38433_38801;
var G__38807 = count__38434_38802;
var G__38808 = (i__38435_38803 + (1));
seq__38431_38800 = G__38805;
chunk__38433_38801 = G__38806;
count__38434_38802 = G__38807;
i__38435_38803 = G__38808;
continue;
} else {
var G__38809 = seq__38431_38800;
var G__38810 = chunk__38433_38801;
var G__38811 = count__38434_38802;
var G__38812 = (i__38435_38803 + (1));
seq__38431_38800 = G__38809;
chunk__38433_38801 = G__38810;
count__38434_38802 = G__38811;
i__38435_38803 = G__38812;
continue;
}
} else {
var temp__5804__auto___38813 = cljs.core.seq(seq__38431_38800);
if(temp__5804__auto___38813){
var seq__38431_38814__$1 = temp__5804__auto___38813;
if(cljs.core.chunked_seq_QMARK_(seq__38431_38814__$1)){
var c__5568__auto___38815 = cljs.core.chunk_first(seq__38431_38814__$1);
var G__38816 = cljs.core.chunk_rest(seq__38431_38814__$1);
var G__38817 = c__5568__auto___38815;
var G__38818 = cljs.core.count(c__5568__auto___38815);
var G__38819 = (0);
seq__38431_38800 = G__38816;
chunk__38433_38801 = G__38817;
count__38434_38802 = G__38818;
i__38435_38803 = G__38819;
continue;
} else {
var child_38820 = cljs.core.first(seq__38431_38814__$1);
if(cljs.core.truth_(child_38820)){
node.appendChild(child_38820);


var G__38823 = cljs.core.next(seq__38431_38814__$1);
var G__38824 = null;
var G__38825 = (0);
var G__38826 = (0);
seq__38431_38800 = G__38823;
chunk__38433_38801 = G__38824;
count__38434_38802 = G__38825;
i__38435_38803 = G__38826;
continue;
} else {
var G__38827 = cljs.core.next(seq__38431_38814__$1);
var G__38828 = null;
var G__38829 = (0);
var G__38830 = (0);
seq__38431_38800 = G__38827;
chunk__38433_38801 = G__38828;
count__38434_38802 = G__38829;
i__38435_38803 = G__38830;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_38799);
}
}


var G__38834 = seq__38381_38793;
var G__38835 = chunk__38383_38794;
var G__38836 = count__38384_38795;
var G__38837 = (i__38385_38796 + (1));
seq__38381_38793 = G__38834;
chunk__38383_38794 = G__38835;
count__38384_38795 = G__38836;
i__38385_38796 = G__38837;
continue;
} else {
var G__38838 = seq__38381_38793;
var G__38839 = chunk__38383_38794;
var G__38840 = count__38384_38795;
var G__38841 = (i__38385_38796 + (1));
seq__38381_38793 = G__38838;
chunk__38383_38794 = G__38839;
count__38384_38795 = G__38840;
i__38385_38796 = G__38841;
continue;
}
} else {
var temp__5804__auto___38842 = cljs.core.seq(seq__38381_38793);
if(temp__5804__auto___38842){
var seq__38381_38843__$1 = temp__5804__auto___38842;
if(cljs.core.chunked_seq_QMARK_(seq__38381_38843__$1)){
var c__5568__auto___38844 = cljs.core.chunk_first(seq__38381_38843__$1);
var G__38845 = cljs.core.chunk_rest(seq__38381_38843__$1);
var G__38846 = c__5568__auto___38844;
var G__38847 = cljs.core.count(c__5568__auto___38844);
var G__38848 = (0);
seq__38381_38793 = G__38845;
chunk__38383_38794 = G__38846;
count__38384_38795 = G__38847;
i__38385_38796 = G__38848;
continue;
} else {
var child_struct_38849 = cljs.core.first(seq__38381_38843__$1);
if((!((child_struct_38849 == null)))){
if(typeof child_struct_38849 === 'string'){
var text_38850 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_38850),child_struct_38849].join(''));
} else {
var children_38851 = shadow.dom.svg_node(child_struct_38849);
if(cljs.core.seq_QMARK_(children_38851)){
var seq__38449_38852 = cljs.core.seq(children_38851);
var chunk__38451_38853 = null;
var count__38452_38854 = (0);
var i__38453_38855 = (0);
while(true){
if((i__38453_38855 < count__38452_38854)){
var child_38856 = chunk__38451_38853.cljs$core$IIndexed$_nth$arity$2(null,i__38453_38855);
if(cljs.core.truth_(child_38856)){
node.appendChild(child_38856);


var G__38859 = seq__38449_38852;
var G__38860 = chunk__38451_38853;
var G__38861 = count__38452_38854;
var G__38862 = (i__38453_38855 + (1));
seq__38449_38852 = G__38859;
chunk__38451_38853 = G__38860;
count__38452_38854 = G__38861;
i__38453_38855 = G__38862;
continue;
} else {
var G__38865 = seq__38449_38852;
var G__38866 = chunk__38451_38853;
var G__38867 = count__38452_38854;
var G__38868 = (i__38453_38855 + (1));
seq__38449_38852 = G__38865;
chunk__38451_38853 = G__38866;
count__38452_38854 = G__38867;
i__38453_38855 = G__38868;
continue;
}
} else {
var temp__5804__auto___38869__$1 = cljs.core.seq(seq__38449_38852);
if(temp__5804__auto___38869__$1){
var seq__38449_38870__$1 = temp__5804__auto___38869__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38449_38870__$1)){
var c__5568__auto___38872 = cljs.core.chunk_first(seq__38449_38870__$1);
var G__38873 = cljs.core.chunk_rest(seq__38449_38870__$1);
var G__38874 = c__5568__auto___38872;
var G__38875 = cljs.core.count(c__5568__auto___38872);
var G__38876 = (0);
seq__38449_38852 = G__38873;
chunk__38451_38853 = G__38874;
count__38452_38854 = G__38875;
i__38453_38855 = G__38876;
continue;
} else {
var child_38877 = cljs.core.first(seq__38449_38870__$1);
if(cljs.core.truth_(child_38877)){
node.appendChild(child_38877);


var G__38878 = cljs.core.next(seq__38449_38870__$1);
var G__38879 = null;
var G__38880 = (0);
var G__38881 = (0);
seq__38449_38852 = G__38878;
chunk__38451_38853 = G__38879;
count__38452_38854 = G__38880;
i__38453_38855 = G__38881;
continue;
} else {
var G__38882 = cljs.core.next(seq__38449_38870__$1);
var G__38883 = null;
var G__38884 = (0);
var G__38885 = (0);
seq__38449_38852 = G__38882;
chunk__38451_38853 = G__38883;
count__38452_38854 = G__38884;
i__38453_38855 = G__38885;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_38851);
}
}


var G__38886 = cljs.core.next(seq__38381_38843__$1);
var G__38887 = null;
var G__38888 = (0);
var G__38889 = (0);
seq__38381_38793 = G__38886;
chunk__38383_38794 = G__38887;
count__38384_38795 = G__38888;
i__38385_38796 = G__38889;
continue;
} else {
var G__38890 = cljs.core.next(seq__38381_38843__$1);
var G__38891 = null;
var G__38892 = (0);
var G__38893 = (0);
seq__38381_38793 = G__38890;
chunk__38383_38794 = G__38891;
count__38384_38795 = G__38892;
i__38385_38796 = G__38893;
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
var len__5769__auto___38897 = arguments.length;
var i__5770__auto___38898 = (0);
while(true){
if((i__5770__auto___38898 < len__5769__auto___38897)){
args__5775__auto__.push((arguments[i__5770__auto___38898]));

var G__38899 = (i__5770__auto___38898 + (1));
i__5770__auto___38898 = G__38899;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq38461){
var G__38462 = cljs.core.first(seq38461);
var seq38461__$1 = cljs.core.next(seq38461);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38462,seq38461__$1);
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
var G__38466 = arguments.length;
switch (G__38466) {
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
var c__34853__auto___38912 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34854__auto__ = (function (){var switch__34654__auto__ = (function (state_38477){
var state_val_38478 = (state_38477[(1)]);
if((state_val_38478 === (1))){
var state_38477__$1 = state_38477;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38477__$1,(2),once_or_cleanup);
} else {
if((state_val_38478 === (2))){
var inst_38474 = (state_38477[(2)]);
var inst_38475 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_38477__$1 = (function (){var statearr_38479 = state_38477;
(statearr_38479[(7)] = inst_38474);

return statearr_38479;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38477__$1,inst_38475);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__34655__auto__ = null;
var shadow$dom$state_machine__34655__auto____0 = (function (){
var statearr_38480 = [null,null,null,null,null,null,null,null];
(statearr_38480[(0)] = shadow$dom$state_machine__34655__auto__);

(statearr_38480[(1)] = (1));

return statearr_38480;
});
var shadow$dom$state_machine__34655__auto____1 = (function (state_38477){
while(true){
var ret_value__34656__auto__ = (function (){try{while(true){
var result__34657__auto__ = switch__34654__auto__(state_38477);
if(cljs.core.keyword_identical_QMARK_(result__34657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34657__auto__;
}
break;
}
}catch (e38483){var ex__34658__auto__ = e38483;
var statearr_38484_38917 = state_38477;
(statearr_38484_38917[(2)] = ex__34658__auto__);


if(cljs.core.seq((state_38477[(4)]))){
var statearr_38485_38918 = state_38477;
(statearr_38485_38918[(1)] = cljs.core.first((state_38477[(4)])));

} else {
throw ex__34658__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38919 = state_38477;
state_38477 = G__38919;
continue;
} else {
return ret_value__34656__auto__;
}
break;
}
});
shadow$dom$state_machine__34655__auto__ = function(state_38477){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__34655__auto____0.call(this);
case 1:
return shadow$dom$state_machine__34655__auto____1.call(this,state_38477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__34655__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__34655__auto____0;
shadow$dom$state_machine__34655__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__34655__auto____1;
return shadow$dom$state_machine__34655__auto__;
})()
})();
var state__34855__auto__ = (function (){var statearr_38486 = f__34854__auto__();
(statearr_38486[(6)] = c__34853__auto___38912);

return statearr_38486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34855__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
