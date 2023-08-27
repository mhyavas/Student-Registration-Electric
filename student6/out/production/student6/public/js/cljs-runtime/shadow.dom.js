goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_31107 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_31107(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_31108 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_31108(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__30192 = coll;
var G__30193 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__30192,G__30193) : shadow.dom.lazy_native_coll_seq.call(null,G__30192,G__30193));
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
var G__30209 = arguments.length;
switch (G__30209) {
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
var G__30225 = arguments.length;
switch (G__30225) {
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
var G__30236 = arguments.length;
switch (G__30236) {
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
var G__30242 = arguments.length;
switch (G__30242) {
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
var G__30259 = arguments.length;
switch (G__30259) {
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
var G__30278 = arguments.length;
switch (G__30278) {
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
}catch (e30300){if((e30300 instanceof Object)){
var e = e30300;
return console.log("didnt support attachEvent",el,e);
} else {
throw e30300;

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
var seq__30307 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__30308 = null;
var count__30309 = (0);
var i__30310 = (0);
while(true){
if((i__30310 < count__30309)){
var el = chunk__30308.cljs$core$IIndexed$_nth$arity$2(null,i__30310);
var handler_31115__$1 = ((function (seq__30307,chunk__30308,count__30309,i__30310,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__30307,chunk__30308,count__30309,i__30310,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_31115__$1);


var G__31116 = seq__30307;
var G__31117 = chunk__30308;
var G__31118 = count__30309;
var G__31119 = (i__30310 + (1));
seq__30307 = G__31116;
chunk__30308 = G__31117;
count__30309 = G__31118;
i__30310 = G__31119;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__30307);
if(temp__5804__auto__){
var seq__30307__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30307__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__30307__$1);
var G__31120 = cljs.core.chunk_rest(seq__30307__$1);
var G__31121 = c__5568__auto__;
var G__31122 = cljs.core.count(c__5568__auto__);
var G__31123 = (0);
seq__30307 = G__31120;
chunk__30308 = G__31121;
count__30309 = G__31122;
i__30310 = G__31123;
continue;
} else {
var el = cljs.core.first(seq__30307__$1);
var handler_31124__$1 = ((function (seq__30307,chunk__30308,count__30309,i__30310,el,seq__30307__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__30307,chunk__30308,count__30309,i__30310,el,seq__30307__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_31124__$1);


var G__31125 = cljs.core.next(seq__30307__$1);
var G__31126 = null;
var G__31127 = (0);
var G__31128 = (0);
seq__30307 = G__31125;
chunk__30308 = G__31126;
count__30309 = G__31127;
i__30310 = G__31128;
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
var G__30316 = arguments.length;
switch (G__30316) {
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
var seq__30326 = cljs.core.seq(events);
var chunk__30327 = null;
var count__30328 = (0);
var i__30329 = (0);
while(true){
if((i__30329 < count__30328)){
var vec__30342 = chunk__30327.cljs$core$IIndexed$_nth$arity$2(null,i__30329);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30342,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30342,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__31132 = seq__30326;
var G__31133 = chunk__30327;
var G__31134 = count__30328;
var G__31135 = (i__30329 + (1));
seq__30326 = G__31132;
chunk__30327 = G__31133;
count__30328 = G__31134;
i__30329 = G__31135;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__30326);
if(temp__5804__auto__){
var seq__30326__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30326__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__30326__$1);
var G__31136 = cljs.core.chunk_rest(seq__30326__$1);
var G__31137 = c__5568__auto__;
var G__31138 = cljs.core.count(c__5568__auto__);
var G__31139 = (0);
seq__30326 = G__31136;
chunk__30327 = G__31137;
count__30328 = G__31138;
i__30329 = G__31139;
continue;
} else {
var vec__30349 = cljs.core.first(seq__30326__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30349,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30349,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__31140 = cljs.core.next(seq__30326__$1);
var G__31141 = null;
var G__31142 = (0);
var G__31143 = (0);
seq__30326 = G__31140;
chunk__30327 = G__31141;
count__30328 = G__31142;
i__30329 = G__31143;
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
var seq__30356 = cljs.core.seq(styles);
var chunk__30357 = null;
var count__30358 = (0);
var i__30359 = (0);
while(true){
if((i__30359 < count__30358)){
var vec__30377 = chunk__30357.cljs$core$IIndexed$_nth$arity$2(null,i__30359);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30377,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30377,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__31144 = seq__30356;
var G__31145 = chunk__30357;
var G__31146 = count__30358;
var G__31147 = (i__30359 + (1));
seq__30356 = G__31144;
chunk__30357 = G__31145;
count__30358 = G__31146;
i__30359 = G__31147;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__30356);
if(temp__5804__auto__){
var seq__30356__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30356__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__30356__$1);
var G__31148 = cljs.core.chunk_rest(seq__30356__$1);
var G__31149 = c__5568__auto__;
var G__31150 = cljs.core.count(c__5568__auto__);
var G__31151 = (0);
seq__30356 = G__31148;
chunk__30357 = G__31149;
count__30358 = G__31150;
i__30359 = G__31151;
continue;
} else {
var vec__30384 = cljs.core.first(seq__30356__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30384,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30384,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__31152 = cljs.core.next(seq__30356__$1);
var G__31153 = null;
var G__31154 = (0);
var G__31155 = (0);
seq__30356 = G__31152;
chunk__30357 = G__31153;
count__30358 = G__31154;
i__30359 = G__31155;
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
var G__30393_31156 = key;
var G__30393_31157__$1 = (((G__30393_31156 instanceof cljs.core.Keyword))?G__30393_31156.fqn:null);
switch (G__30393_31157__$1) {
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
var ks_31159 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_31159,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_31159,"aria-");
}
})())){
el.setAttribute(ks_31159,value);
} else {
(el[ks_31159] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__30440){
var map__30442 = p__30440;
var map__30442__$1 = cljs.core.__destructure_map(map__30442);
var props = map__30442__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30442__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__30447 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30447,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30447,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30447,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__30454 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__30454,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__30454;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__30456 = arguments.length;
switch (G__30456) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__30458){
var vec__30459 = p__30458;
var seq__30460 = cljs.core.seq(vec__30459);
var first__30461 = cljs.core.first(seq__30460);
var seq__30460__$1 = cljs.core.next(seq__30460);
var nn = first__30461;
var first__30461__$1 = cljs.core.first(seq__30460__$1);
var seq__30460__$2 = cljs.core.next(seq__30460__$1);
var np = first__30461__$1;
var nc = seq__30460__$2;
var node = vec__30459;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__30462 = nn;
var G__30463 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__30462,G__30463) : create_fn.call(null,G__30462,G__30463));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__30464 = nn;
var G__30465 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__30464,G__30465) : create_fn.call(null,G__30464,G__30465));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__30470 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30470,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30470,(1),null);
var seq__30474_31163 = cljs.core.seq(node_children);
var chunk__30475_31164 = null;
var count__30476_31165 = (0);
var i__30477_31166 = (0);
while(true){
if((i__30477_31166 < count__30476_31165)){
var child_struct_31167 = chunk__30475_31164.cljs$core$IIndexed$_nth$arity$2(null,i__30477_31166);
var children_31168 = shadow.dom.dom_node(child_struct_31167);
if(cljs.core.seq_QMARK_(children_31168)){
var seq__30537_31169 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_31168));
var chunk__30539_31170 = null;
var count__30540_31171 = (0);
var i__30541_31172 = (0);
while(true){
if((i__30541_31172 < count__30540_31171)){
var child_31173 = chunk__30539_31170.cljs$core$IIndexed$_nth$arity$2(null,i__30541_31172);
if(cljs.core.truth_(child_31173)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_31173);


var G__31174 = seq__30537_31169;
var G__31175 = chunk__30539_31170;
var G__31176 = count__30540_31171;
var G__31177 = (i__30541_31172 + (1));
seq__30537_31169 = G__31174;
chunk__30539_31170 = G__31175;
count__30540_31171 = G__31176;
i__30541_31172 = G__31177;
continue;
} else {
var G__31178 = seq__30537_31169;
var G__31179 = chunk__30539_31170;
var G__31180 = count__30540_31171;
var G__31181 = (i__30541_31172 + (1));
seq__30537_31169 = G__31178;
chunk__30539_31170 = G__31179;
count__30540_31171 = G__31180;
i__30541_31172 = G__31181;
continue;
}
} else {
var temp__5804__auto___31182 = cljs.core.seq(seq__30537_31169);
if(temp__5804__auto___31182){
var seq__30537_31183__$1 = temp__5804__auto___31182;
if(cljs.core.chunked_seq_QMARK_(seq__30537_31183__$1)){
var c__5568__auto___31184 = cljs.core.chunk_first(seq__30537_31183__$1);
var G__31185 = cljs.core.chunk_rest(seq__30537_31183__$1);
var G__31186 = c__5568__auto___31184;
var G__31187 = cljs.core.count(c__5568__auto___31184);
var G__31188 = (0);
seq__30537_31169 = G__31185;
chunk__30539_31170 = G__31186;
count__30540_31171 = G__31187;
i__30541_31172 = G__31188;
continue;
} else {
var child_31189 = cljs.core.first(seq__30537_31183__$1);
if(cljs.core.truth_(child_31189)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_31189);


var G__31190 = cljs.core.next(seq__30537_31183__$1);
var G__31191 = null;
var G__31192 = (0);
var G__31193 = (0);
seq__30537_31169 = G__31190;
chunk__30539_31170 = G__31191;
count__30540_31171 = G__31192;
i__30541_31172 = G__31193;
continue;
} else {
var G__31195 = cljs.core.next(seq__30537_31183__$1);
var G__31196 = null;
var G__31197 = (0);
var G__31198 = (0);
seq__30537_31169 = G__31195;
chunk__30539_31170 = G__31196;
count__30540_31171 = G__31197;
i__30541_31172 = G__31198;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_31168);
}


var G__31199 = seq__30474_31163;
var G__31200 = chunk__30475_31164;
var G__31201 = count__30476_31165;
var G__31202 = (i__30477_31166 + (1));
seq__30474_31163 = G__31199;
chunk__30475_31164 = G__31200;
count__30476_31165 = G__31201;
i__30477_31166 = G__31202;
continue;
} else {
var temp__5804__auto___31203 = cljs.core.seq(seq__30474_31163);
if(temp__5804__auto___31203){
var seq__30474_31204__$1 = temp__5804__auto___31203;
if(cljs.core.chunked_seq_QMARK_(seq__30474_31204__$1)){
var c__5568__auto___31205 = cljs.core.chunk_first(seq__30474_31204__$1);
var G__31206 = cljs.core.chunk_rest(seq__30474_31204__$1);
var G__31207 = c__5568__auto___31205;
var G__31208 = cljs.core.count(c__5568__auto___31205);
var G__31209 = (0);
seq__30474_31163 = G__31206;
chunk__30475_31164 = G__31207;
count__30476_31165 = G__31208;
i__30477_31166 = G__31209;
continue;
} else {
var child_struct_31210 = cljs.core.first(seq__30474_31204__$1);
var children_31211 = shadow.dom.dom_node(child_struct_31210);
if(cljs.core.seq_QMARK_(children_31211)){
var seq__30573_31212 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_31211));
var chunk__30575_31213 = null;
var count__30576_31214 = (0);
var i__30577_31215 = (0);
while(true){
if((i__30577_31215 < count__30576_31214)){
var child_31216 = chunk__30575_31213.cljs$core$IIndexed$_nth$arity$2(null,i__30577_31215);
if(cljs.core.truth_(child_31216)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_31216);


var G__31217 = seq__30573_31212;
var G__31218 = chunk__30575_31213;
var G__31219 = count__30576_31214;
var G__31220 = (i__30577_31215 + (1));
seq__30573_31212 = G__31217;
chunk__30575_31213 = G__31218;
count__30576_31214 = G__31219;
i__30577_31215 = G__31220;
continue;
} else {
var G__31221 = seq__30573_31212;
var G__31222 = chunk__30575_31213;
var G__31223 = count__30576_31214;
var G__31224 = (i__30577_31215 + (1));
seq__30573_31212 = G__31221;
chunk__30575_31213 = G__31222;
count__30576_31214 = G__31223;
i__30577_31215 = G__31224;
continue;
}
} else {
var temp__5804__auto___31225__$1 = cljs.core.seq(seq__30573_31212);
if(temp__5804__auto___31225__$1){
var seq__30573_31226__$1 = temp__5804__auto___31225__$1;
if(cljs.core.chunked_seq_QMARK_(seq__30573_31226__$1)){
var c__5568__auto___31227 = cljs.core.chunk_first(seq__30573_31226__$1);
var G__31228 = cljs.core.chunk_rest(seq__30573_31226__$1);
var G__31229 = c__5568__auto___31227;
var G__31230 = cljs.core.count(c__5568__auto___31227);
var G__31231 = (0);
seq__30573_31212 = G__31228;
chunk__30575_31213 = G__31229;
count__30576_31214 = G__31230;
i__30577_31215 = G__31231;
continue;
} else {
var child_31233 = cljs.core.first(seq__30573_31226__$1);
if(cljs.core.truth_(child_31233)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_31233);


var G__31234 = cljs.core.next(seq__30573_31226__$1);
var G__31235 = null;
var G__31236 = (0);
var G__31237 = (0);
seq__30573_31212 = G__31234;
chunk__30575_31213 = G__31235;
count__30576_31214 = G__31236;
i__30577_31215 = G__31237;
continue;
} else {
var G__31238 = cljs.core.next(seq__30573_31226__$1);
var G__31239 = null;
var G__31240 = (0);
var G__31241 = (0);
seq__30573_31212 = G__31238;
chunk__30575_31213 = G__31239;
count__30576_31214 = G__31240;
i__30577_31215 = G__31241;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_31211);
}


var G__31242 = cljs.core.next(seq__30474_31204__$1);
var G__31243 = null;
var G__31244 = (0);
var G__31245 = (0);
seq__30474_31163 = G__31242;
chunk__30475_31164 = G__31243;
count__30476_31165 = G__31244;
i__30477_31166 = G__31245;
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
var seq__30643 = cljs.core.seq(node);
var chunk__30644 = null;
var count__30645 = (0);
var i__30646 = (0);
while(true){
if((i__30646 < count__30645)){
var n = chunk__30644.cljs$core$IIndexed$_nth$arity$2(null,i__30646);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__31247 = seq__30643;
var G__31248 = chunk__30644;
var G__31249 = count__30645;
var G__31250 = (i__30646 + (1));
seq__30643 = G__31247;
chunk__30644 = G__31248;
count__30645 = G__31249;
i__30646 = G__31250;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__30643);
if(temp__5804__auto__){
var seq__30643__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30643__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__30643__$1);
var G__31252 = cljs.core.chunk_rest(seq__30643__$1);
var G__31253 = c__5568__auto__;
var G__31254 = cljs.core.count(c__5568__auto__);
var G__31255 = (0);
seq__30643 = G__31252;
chunk__30644 = G__31253;
count__30645 = G__31254;
i__30646 = G__31255;
continue;
} else {
var n = cljs.core.first(seq__30643__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__31256 = cljs.core.next(seq__30643__$1);
var G__31257 = null;
var G__31258 = (0);
var G__31259 = (0);
seq__30643 = G__31256;
chunk__30644 = G__31257;
count__30645 = G__31258;
i__30646 = G__31259;
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
var G__30663 = arguments.length;
switch (G__30663) {
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
var G__30670 = arguments.length;
switch (G__30670) {
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
var G__30689 = arguments.length;
switch (G__30689) {
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
var len__5769__auto___31264 = arguments.length;
var i__5770__auto___31265 = (0);
while(true){
if((i__5770__auto___31265 < len__5769__auto___31264)){
args__5775__auto__.push((arguments[i__5770__auto___31265]));

var G__31266 = (i__5770__auto___31265 + (1));
i__5770__auto___31265 = G__31266;
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
var seq__30710_31268 = cljs.core.seq(nodes);
var chunk__30711_31269 = null;
var count__30712_31270 = (0);
var i__30713_31271 = (0);
while(true){
if((i__30713_31271 < count__30712_31270)){
var node_31272 = chunk__30711_31269.cljs$core$IIndexed$_nth$arity$2(null,i__30713_31271);
fragment.appendChild(shadow.dom._to_dom(node_31272));


var G__31273 = seq__30710_31268;
var G__31274 = chunk__30711_31269;
var G__31275 = count__30712_31270;
var G__31276 = (i__30713_31271 + (1));
seq__30710_31268 = G__31273;
chunk__30711_31269 = G__31274;
count__30712_31270 = G__31275;
i__30713_31271 = G__31276;
continue;
} else {
var temp__5804__auto___31277 = cljs.core.seq(seq__30710_31268);
if(temp__5804__auto___31277){
var seq__30710_31278__$1 = temp__5804__auto___31277;
if(cljs.core.chunked_seq_QMARK_(seq__30710_31278__$1)){
var c__5568__auto___31279 = cljs.core.chunk_first(seq__30710_31278__$1);
var G__31280 = cljs.core.chunk_rest(seq__30710_31278__$1);
var G__31281 = c__5568__auto___31279;
var G__31282 = cljs.core.count(c__5568__auto___31279);
var G__31283 = (0);
seq__30710_31268 = G__31280;
chunk__30711_31269 = G__31281;
count__30712_31270 = G__31282;
i__30713_31271 = G__31283;
continue;
} else {
var node_31284 = cljs.core.first(seq__30710_31278__$1);
fragment.appendChild(shadow.dom._to_dom(node_31284));


var G__31285 = cljs.core.next(seq__30710_31278__$1);
var G__31286 = null;
var G__31287 = (0);
var G__31288 = (0);
seq__30710_31268 = G__31285;
chunk__30711_31269 = G__31286;
count__30712_31270 = G__31287;
i__30713_31271 = G__31288;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq30709){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30709));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__30720_31290 = cljs.core.seq(scripts);
var chunk__30721_31291 = null;
var count__30722_31292 = (0);
var i__30723_31293 = (0);
while(true){
if((i__30723_31293 < count__30722_31292)){
var vec__30736_31294 = chunk__30721_31291.cljs$core$IIndexed$_nth$arity$2(null,i__30723_31293);
var script_tag_31295 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30736_31294,(0),null);
var script_body_31296 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30736_31294,(1),null);
eval(script_body_31296);


var G__31297 = seq__30720_31290;
var G__31298 = chunk__30721_31291;
var G__31299 = count__30722_31292;
var G__31300 = (i__30723_31293 + (1));
seq__30720_31290 = G__31297;
chunk__30721_31291 = G__31298;
count__30722_31292 = G__31299;
i__30723_31293 = G__31300;
continue;
} else {
var temp__5804__auto___31301 = cljs.core.seq(seq__30720_31290);
if(temp__5804__auto___31301){
var seq__30720_31302__$1 = temp__5804__auto___31301;
if(cljs.core.chunked_seq_QMARK_(seq__30720_31302__$1)){
var c__5568__auto___31303 = cljs.core.chunk_first(seq__30720_31302__$1);
var G__31304 = cljs.core.chunk_rest(seq__30720_31302__$1);
var G__31305 = c__5568__auto___31303;
var G__31306 = cljs.core.count(c__5568__auto___31303);
var G__31307 = (0);
seq__30720_31290 = G__31304;
chunk__30721_31291 = G__31305;
count__30722_31292 = G__31306;
i__30723_31293 = G__31307;
continue;
} else {
var vec__30742_31308 = cljs.core.first(seq__30720_31302__$1);
var script_tag_31309 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30742_31308,(0),null);
var script_body_31310 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30742_31308,(1),null);
eval(script_body_31310);


var G__31311 = cljs.core.next(seq__30720_31302__$1);
var G__31312 = null;
var G__31313 = (0);
var G__31314 = (0);
seq__30720_31290 = G__31311;
chunk__30721_31291 = G__31312;
count__30722_31292 = G__31313;
i__30723_31293 = G__31314;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__30749){
var vec__30750 = p__30749;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30750,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30750,(1),null);
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
var G__30776 = arguments.length;
switch (G__30776) {
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
var seq__30807 = cljs.core.seq(style_keys);
var chunk__30808 = null;
var count__30809 = (0);
var i__30810 = (0);
while(true){
if((i__30810 < count__30809)){
var it = chunk__30808.cljs$core$IIndexed$_nth$arity$2(null,i__30810);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__31316 = seq__30807;
var G__31317 = chunk__30808;
var G__31318 = count__30809;
var G__31319 = (i__30810 + (1));
seq__30807 = G__31316;
chunk__30808 = G__31317;
count__30809 = G__31318;
i__30810 = G__31319;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__30807);
if(temp__5804__auto__){
var seq__30807__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30807__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__30807__$1);
var G__31320 = cljs.core.chunk_rest(seq__30807__$1);
var G__31321 = c__5568__auto__;
var G__31322 = cljs.core.count(c__5568__auto__);
var G__31323 = (0);
seq__30807 = G__31320;
chunk__30808 = G__31321;
count__30809 = G__31322;
i__30810 = G__31323;
continue;
} else {
var it = cljs.core.first(seq__30807__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__31324 = cljs.core.next(seq__30807__$1);
var G__31325 = null;
var G__31326 = (0);
var G__31327 = (0);
seq__30807 = G__31324;
chunk__30808 = G__31325;
count__30809 = G__31326;
i__30810 = G__31327;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k30835,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__30858 = k30835;
var G__30858__$1 = (((G__30858 instanceof cljs.core.Keyword))?G__30858.fqn:null);
switch (G__30858__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k30835,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__30864){
var vec__30865 = p__30864;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30865,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30865,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30834){
var self__ = this;
var G__30834__$1 = this;
return (new cljs.core.RecordIter((0),G__30834__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this30836,other30837){
var self__ = this;
var this30836__$1 = this;
return (((!((other30837 == null)))) && ((((this30836__$1.constructor === other30837.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30836__$1.x,other30837.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30836__$1.y,other30837.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30836__$1.__extmap,other30837.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k30835){
var self__ = this;
var this__5350__auto____$1 = this;
var G__30888 = k30835;
var G__30888__$1 = (((G__30888 instanceof cljs.core.Keyword))?G__30888.fqn:null);
switch (G__30888__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k30835);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__30834){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__30893 = cljs.core.keyword_identical_QMARK_;
var expr__30894 = k__5352__auto__;
if(cljs.core.truth_((pred__30893.cljs$core$IFn$_invoke$arity$2 ? pred__30893.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__30894) : pred__30893.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__30894)))){
return (new shadow.dom.Coordinate(G__30834,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__30893.cljs$core$IFn$_invoke$arity$2 ? pred__30893.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__30894) : pred__30893.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__30894)))){
return (new shadow.dom.Coordinate(self__.x,G__30834,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__30834),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__30834){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__30834,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__30850){
var extmap__5385__auto__ = (function (){var G__30911 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__30850,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__30850)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__30911);
} else {
return G__30911;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__30850),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__30850),null,cljs.core.not_empty(extmap__5385__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k30915,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__30919 = k30915;
var G__30919__$1 = (((G__30919 instanceof cljs.core.Keyword))?G__30919.fqn:null);
switch (G__30919__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k30915,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__30922){
var vec__30923 = p__30922;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30923,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30923,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30914){
var self__ = this;
var G__30914__$1 = this;
return (new cljs.core.RecordIter((0),G__30914__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this30916,other30917){
var self__ = this;
var this30916__$1 = this;
return (((!((other30917 == null)))) && ((((this30916__$1.constructor === other30917.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30916__$1.w,other30917.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30916__$1.h,other30917.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30916__$1.__extmap,other30917.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k30915){
var self__ = this;
var this__5350__auto____$1 = this;
var G__30930 = k30915;
var G__30930__$1 = (((G__30930 instanceof cljs.core.Keyword))?G__30930.fqn:null);
switch (G__30930__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k30915);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__30914){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__30931 = cljs.core.keyword_identical_QMARK_;
var expr__30932 = k__5352__auto__;
if(cljs.core.truth_((pred__30931.cljs$core$IFn$_invoke$arity$2 ? pred__30931.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__30932) : pred__30931.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__30932)))){
return (new shadow.dom.Size(G__30914,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__30931.cljs$core$IFn$_invoke$arity$2 ? pred__30931.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__30932) : pred__30931.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__30932)))){
return (new shadow.dom.Size(self__.w,G__30914,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__30914),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__30914){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__30914,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__30918){
var extmap__5385__auto__ = (function (){var G__30935 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__30918,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__30918)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__30935);
} else {
return G__30935;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__30918),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__30918),null,cljs.core.not_empty(extmap__5385__auto__),null));
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
var G__31336 = (i + (1));
var G__31337 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__31336;
ret = G__31337;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__30946){
var vec__30947 = p__30946;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30947,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30947,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__30951 = arguments.length;
switch (G__30951) {
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
var G__31339 = ps;
var G__31340 = (i + (1));
el__$1 = G__31339;
i = G__31340;
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
var vec__30955 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30955,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30955,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30955,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__30958_31341 = cljs.core.seq(props);
var chunk__30959_31342 = null;
var count__30960_31343 = (0);
var i__30961_31344 = (0);
while(true){
if((i__30961_31344 < count__30960_31343)){
var vec__30968_31345 = chunk__30959_31342.cljs$core$IIndexed$_nth$arity$2(null,i__30961_31344);
var k_31346 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30968_31345,(0),null);
var v_31347 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30968_31345,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_31346);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_31346),v_31347);


var G__31349 = seq__30958_31341;
var G__31350 = chunk__30959_31342;
var G__31351 = count__30960_31343;
var G__31352 = (i__30961_31344 + (1));
seq__30958_31341 = G__31349;
chunk__30959_31342 = G__31350;
count__30960_31343 = G__31351;
i__30961_31344 = G__31352;
continue;
} else {
var temp__5804__auto___31354 = cljs.core.seq(seq__30958_31341);
if(temp__5804__auto___31354){
var seq__30958_31355__$1 = temp__5804__auto___31354;
if(cljs.core.chunked_seq_QMARK_(seq__30958_31355__$1)){
var c__5568__auto___31356 = cljs.core.chunk_first(seq__30958_31355__$1);
var G__31357 = cljs.core.chunk_rest(seq__30958_31355__$1);
var G__31358 = c__5568__auto___31356;
var G__31359 = cljs.core.count(c__5568__auto___31356);
var G__31360 = (0);
seq__30958_31341 = G__31357;
chunk__30959_31342 = G__31358;
count__30960_31343 = G__31359;
i__30961_31344 = G__31360;
continue;
} else {
var vec__30972_31361 = cljs.core.first(seq__30958_31355__$1);
var k_31362 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30972_31361,(0),null);
var v_31363 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30972_31361,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_31362);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_31362),v_31363);


var G__31364 = cljs.core.next(seq__30958_31355__$1);
var G__31365 = null;
var G__31366 = (0);
var G__31367 = (0);
seq__30958_31341 = G__31364;
chunk__30959_31342 = G__31365;
count__30960_31343 = G__31366;
i__30961_31344 = G__31367;
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
var vec__30977 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30977,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30977,(1),null);
var seq__30981_31369 = cljs.core.seq(node_children);
var chunk__30983_31370 = null;
var count__30984_31371 = (0);
var i__30985_31372 = (0);
while(true){
if((i__30985_31372 < count__30984_31371)){
var child_struct_31373 = chunk__30983_31370.cljs$core$IIndexed$_nth$arity$2(null,i__30985_31372);
if((!((child_struct_31373 == null)))){
if(typeof child_struct_31373 === 'string'){
var text_31375 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_31375),child_struct_31373].join(''));
} else {
var children_31376 = shadow.dom.svg_node(child_struct_31373);
if(cljs.core.seq_QMARK_(children_31376)){
var seq__31020_31377 = cljs.core.seq(children_31376);
var chunk__31022_31378 = null;
var count__31023_31379 = (0);
var i__31024_31380 = (0);
while(true){
if((i__31024_31380 < count__31023_31379)){
var child_31381 = chunk__31022_31378.cljs$core$IIndexed$_nth$arity$2(null,i__31024_31380);
if(cljs.core.truth_(child_31381)){
node.appendChild(child_31381);


var G__31383 = seq__31020_31377;
var G__31384 = chunk__31022_31378;
var G__31385 = count__31023_31379;
var G__31386 = (i__31024_31380 + (1));
seq__31020_31377 = G__31383;
chunk__31022_31378 = G__31384;
count__31023_31379 = G__31385;
i__31024_31380 = G__31386;
continue;
} else {
var G__31387 = seq__31020_31377;
var G__31388 = chunk__31022_31378;
var G__31389 = count__31023_31379;
var G__31390 = (i__31024_31380 + (1));
seq__31020_31377 = G__31387;
chunk__31022_31378 = G__31388;
count__31023_31379 = G__31389;
i__31024_31380 = G__31390;
continue;
}
} else {
var temp__5804__auto___31391 = cljs.core.seq(seq__31020_31377);
if(temp__5804__auto___31391){
var seq__31020_31392__$1 = temp__5804__auto___31391;
if(cljs.core.chunked_seq_QMARK_(seq__31020_31392__$1)){
var c__5568__auto___31393 = cljs.core.chunk_first(seq__31020_31392__$1);
var G__31394 = cljs.core.chunk_rest(seq__31020_31392__$1);
var G__31395 = c__5568__auto___31393;
var G__31396 = cljs.core.count(c__5568__auto___31393);
var G__31397 = (0);
seq__31020_31377 = G__31394;
chunk__31022_31378 = G__31395;
count__31023_31379 = G__31396;
i__31024_31380 = G__31397;
continue;
} else {
var child_31398 = cljs.core.first(seq__31020_31392__$1);
if(cljs.core.truth_(child_31398)){
node.appendChild(child_31398);


var G__31400 = cljs.core.next(seq__31020_31392__$1);
var G__31401 = null;
var G__31402 = (0);
var G__31403 = (0);
seq__31020_31377 = G__31400;
chunk__31022_31378 = G__31401;
count__31023_31379 = G__31402;
i__31024_31380 = G__31403;
continue;
} else {
var G__31404 = cljs.core.next(seq__31020_31392__$1);
var G__31405 = null;
var G__31406 = (0);
var G__31407 = (0);
seq__31020_31377 = G__31404;
chunk__31022_31378 = G__31405;
count__31023_31379 = G__31406;
i__31024_31380 = G__31407;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_31376);
}
}


var G__31408 = seq__30981_31369;
var G__31409 = chunk__30983_31370;
var G__31410 = count__30984_31371;
var G__31411 = (i__30985_31372 + (1));
seq__30981_31369 = G__31408;
chunk__30983_31370 = G__31409;
count__30984_31371 = G__31410;
i__30985_31372 = G__31411;
continue;
} else {
var G__31412 = seq__30981_31369;
var G__31413 = chunk__30983_31370;
var G__31414 = count__30984_31371;
var G__31415 = (i__30985_31372 + (1));
seq__30981_31369 = G__31412;
chunk__30983_31370 = G__31413;
count__30984_31371 = G__31414;
i__30985_31372 = G__31415;
continue;
}
} else {
var temp__5804__auto___31416 = cljs.core.seq(seq__30981_31369);
if(temp__5804__auto___31416){
var seq__30981_31417__$1 = temp__5804__auto___31416;
if(cljs.core.chunked_seq_QMARK_(seq__30981_31417__$1)){
var c__5568__auto___31418 = cljs.core.chunk_first(seq__30981_31417__$1);
var G__31419 = cljs.core.chunk_rest(seq__30981_31417__$1);
var G__31420 = c__5568__auto___31418;
var G__31421 = cljs.core.count(c__5568__auto___31418);
var G__31422 = (0);
seq__30981_31369 = G__31419;
chunk__30983_31370 = G__31420;
count__30984_31371 = G__31421;
i__30985_31372 = G__31422;
continue;
} else {
var child_struct_31423 = cljs.core.first(seq__30981_31417__$1);
if((!((child_struct_31423 == null)))){
if(typeof child_struct_31423 === 'string'){
var text_31425 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_31425),child_struct_31423].join(''));
} else {
var children_31426 = shadow.dom.svg_node(child_struct_31423);
if(cljs.core.seq_QMARK_(children_31426)){
var seq__31032_31427 = cljs.core.seq(children_31426);
var chunk__31034_31428 = null;
var count__31035_31429 = (0);
var i__31036_31430 = (0);
while(true){
if((i__31036_31430 < count__31035_31429)){
var child_31431 = chunk__31034_31428.cljs$core$IIndexed$_nth$arity$2(null,i__31036_31430);
if(cljs.core.truth_(child_31431)){
node.appendChild(child_31431);


var G__31432 = seq__31032_31427;
var G__31433 = chunk__31034_31428;
var G__31434 = count__31035_31429;
var G__31435 = (i__31036_31430 + (1));
seq__31032_31427 = G__31432;
chunk__31034_31428 = G__31433;
count__31035_31429 = G__31434;
i__31036_31430 = G__31435;
continue;
} else {
var G__31436 = seq__31032_31427;
var G__31437 = chunk__31034_31428;
var G__31438 = count__31035_31429;
var G__31439 = (i__31036_31430 + (1));
seq__31032_31427 = G__31436;
chunk__31034_31428 = G__31437;
count__31035_31429 = G__31438;
i__31036_31430 = G__31439;
continue;
}
} else {
var temp__5804__auto___31440__$1 = cljs.core.seq(seq__31032_31427);
if(temp__5804__auto___31440__$1){
var seq__31032_31441__$1 = temp__5804__auto___31440__$1;
if(cljs.core.chunked_seq_QMARK_(seq__31032_31441__$1)){
var c__5568__auto___31442 = cljs.core.chunk_first(seq__31032_31441__$1);
var G__31443 = cljs.core.chunk_rest(seq__31032_31441__$1);
var G__31444 = c__5568__auto___31442;
var G__31445 = cljs.core.count(c__5568__auto___31442);
var G__31446 = (0);
seq__31032_31427 = G__31443;
chunk__31034_31428 = G__31444;
count__31035_31429 = G__31445;
i__31036_31430 = G__31446;
continue;
} else {
var child_31447 = cljs.core.first(seq__31032_31441__$1);
if(cljs.core.truth_(child_31447)){
node.appendChild(child_31447);


var G__31448 = cljs.core.next(seq__31032_31441__$1);
var G__31449 = null;
var G__31450 = (0);
var G__31451 = (0);
seq__31032_31427 = G__31448;
chunk__31034_31428 = G__31449;
count__31035_31429 = G__31450;
i__31036_31430 = G__31451;
continue;
} else {
var G__31452 = cljs.core.next(seq__31032_31441__$1);
var G__31453 = null;
var G__31454 = (0);
var G__31455 = (0);
seq__31032_31427 = G__31452;
chunk__31034_31428 = G__31453;
count__31035_31429 = G__31454;
i__31036_31430 = G__31455;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_31426);
}
}


var G__31456 = cljs.core.next(seq__30981_31417__$1);
var G__31457 = null;
var G__31458 = (0);
var G__31459 = (0);
seq__30981_31369 = G__31456;
chunk__30983_31370 = G__31457;
count__30984_31371 = G__31458;
i__30985_31372 = G__31459;
continue;
} else {
var G__31460 = cljs.core.next(seq__30981_31417__$1);
var G__31461 = null;
var G__31462 = (0);
var G__31463 = (0);
seq__30981_31369 = G__31460;
chunk__30983_31370 = G__31461;
count__30984_31371 = G__31462;
i__30985_31372 = G__31463;
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
var len__5769__auto___31465 = arguments.length;
var i__5770__auto___31466 = (0);
while(true){
if((i__5770__auto___31466 < len__5769__auto___31465)){
args__5775__auto__.push((arguments[i__5770__auto___31466]));

var G__31467 = (i__5770__auto___31466 + (1));
i__5770__auto___31466 = G__31467;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq31048){
var G__31049 = cljs.core.first(seq31048);
var seq31048__$1 = cljs.core.next(seq31048);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31049,seq31048__$1);
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
var G__31069 = arguments.length;
switch (G__31069) {
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
var c__27245__auto___31474 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27246__auto__ = (function (){var switch__27050__auto__ = (function (state_31097){
var state_val_31098 = (state_31097[(1)]);
if((state_val_31098 === (1))){
var state_31097__$1 = state_31097;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31097__$1,(2),once_or_cleanup);
} else {
if((state_val_31098 === (2))){
var inst_31094 = (state_31097[(2)]);
var inst_31095 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_31097__$1 = (function (){var statearr_31099 = state_31097;
(statearr_31099[(7)] = inst_31094);

return statearr_31099;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31097__$1,inst_31095);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__27051__auto__ = null;
var shadow$dom$state_machine__27051__auto____0 = (function (){
var statearr_31101 = [null,null,null,null,null,null,null,null];
(statearr_31101[(0)] = shadow$dom$state_machine__27051__auto__);

(statearr_31101[(1)] = (1));

return statearr_31101;
});
var shadow$dom$state_machine__27051__auto____1 = (function (state_31097){
while(true){
var ret_value__27052__auto__ = (function (){try{while(true){
var result__27053__auto__ = switch__27050__auto__(state_31097);
if(cljs.core.keyword_identical_QMARK_(result__27053__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27053__auto__;
}
break;
}
}catch (e31103){var ex__27054__auto__ = e31103;
var statearr_31104_31476 = state_31097;
(statearr_31104_31476[(2)] = ex__27054__auto__);


if(cljs.core.seq((state_31097[(4)]))){
var statearr_31105_31477 = state_31097;
(statearr_31105_31477[(1)] = cljs.core.first((state_31097[(4)])));

} else {
throw ex__27054__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31479 = state_31097;
state_31097 = G__31479;
continue;
} else {
return ret_value__27052__auto__;
}
break;
}
});
shadow$dom$state_machine__27051__auto__ = function(state_31097){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__27051__auto____0.call(this);
case 1:
return shadow$dom$state_machine__27051__auto____1.call(this,state_31097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__27051__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__27051__auto____0;
shadow$dom$state_machine__27051__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__27051__auto____1;
return shadow$dom$state_machine__27051__auto__;
})()
})();
var state__27247__auto__ = (function (){var statearr_31106 = f__27246__auto__();
(statearr_31106[(6)] = c__27245__auto___31474);

return statearr_31106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27247__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
